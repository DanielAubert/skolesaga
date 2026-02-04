/**
 * Norsk VG1 - Narrative versjoner Del 3 (Kapittel 2.6, 2.7, 2.8)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-vg1-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.6 NARRATIV: Grafiske romaner og bildeboker
// ============================================================================

export const CHAPTER_NORSK_VG1_2_6_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-2-6-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '2.6',
  title: 'Grafiske romaner og bildeboker',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag kunsten a fortelle historier gjennom bilder og ord i perfekt samspill.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke sammensatte tekster',
    'reflektere over hvordan tekst og bilde sammen skaper mening',
  ],
  linkedChapterId: 'norsk-vg1-2-6',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-2-6-n-intro',
      type: 'text',
      content: `## Nar bilder forteller mer enn tusen ord

Forestill deg at du holder en bok der du ikke bare leser historien, men ser den utfolde seg foran oynene dine. Hver side er et lite kunstverk. Fargene forteller om stemningen, ansiktsuttrykkene avslorer folelser ingen ord kunne beskrive, og mellom bildene - i de hvite feltene - fyller hjernen din automatisk inn det som mangler.

Dette er magien i grafiske romaner og bildeboker. De er ikke bare boker med bilder, eller tegneserier for barn. De er en helt egen kunstform der tekst og bilde danser sammen i et samspill som verken kunne klart alene. Art Spiegelmans "Maus" vant Pulitzer-prisen for sin skildring av Holocaust gjennom mus og katter. Marjane Satrapis "Persepolis" forteller om oppvekst i Iran pa en mate som gar rett i hjertet. Og norske Steffen Kverneland brukte ti ar pa a skildre Edvard Munchs liv i tegneserieformat.

I dette kapittelet skal du lare a lese disse verkene pa en ny mate. Du skal forstå hvorfor noen paneler er store og andre sma, hvorfor farger skifter, og hva som egentlig skjer i rommet mellom bildene. Klar for a se med nye oyne?`,
    },

    // ========== SEKSJON 1: Hva er egentlig en grafisk roman? ==========
    {
      id: 'norsk-vg1-2-6-n-section1',
      type: 'text',
      content: `## Mer enn bare tegneserier

Nar noen sier "tegneserie", tenker du kanskje pa Donald Duck eller superhelter i trange drakter. Og ja, grafiske romaner deler mange trekk med tegneserier, men de har ogsa noe mer. En grafisk roman er en lengre, sammenhengende fortelling i tegneserieformat, utgitt som en hel bok. Der tradisjonelle tegneserier ofte handler om episodiske eventyr, kan grafiske romaner utforske dype, komplekse temaer over hundrevis av sider.

Ta "Maus" som eksempel. Art Spiegelman intervjuet faren sin om livet i konsentrasjonsleirene under andre verdenskrig. Han valgte a tegne joder som mus og nazister som katter, noe som skaper en merkelig distanse som paradoksalt nok gjor historien mer gripende. Hadde han skrevet det som en vanlig roman, ville det blitt en av mange Holocaust-skildringer. Som grafisk roman ble det noe helt unikt.

Bildeboka, pa sin side, har lange vart forbundet med barn. Men moderne bildeboker utfordrer dette. Gro Dahle og Svein Nyhus lager boker om vanskelige temaer som sorg, sinne og familievold. Lisa Aisato illustrerer boker som far voksne til a grate. Bildeboka er en bok der tekst og bilde er gjensidig avhengige. Ingen av delene fungerer alene. Bildet er ikke bare pynt, og teksten er ikke bare forklaring. De forteller historien sammen, og ofte sier de forskjellige ting som til sammen blir noe storre.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-2-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva skiller en grafisk roman fra en tradisjonell tegneserie?',
        options: [
          { id: 'a', text: 'Grafiske romaner har ingen tekst, bare bilder', isCorrect: false },
          { id: 'b', text: 'Grafiske romaner er lengre og har en sammenhengende fortelling', isCorrect: true },
          { id: 'c', text: 'Grafiske romaner er alltid i farger', isCorrect: false },
          { id: 'd', text: 'Grafiske romaner handler bare om superhelter', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Grafiske romaner skiller seg fra tradisjonelle tegneserier ved at de er lengre (ofte boklengde) og forteller en sammenhengende historie, gjerne med komplekse temaer. De utgis som boker, ikke hefter, og har ofte en mer litteraer ambisjon.',
      },
    },

    // ========== SEKSJON 2: Panelenes hemmelige sprak ==========
    {
      id: 'norsk-vg1-2-6-n-section2',
      type: 'text',
      content: `## Panelenes hemmelige sprak

Har du noen gang tenkt pa at storrelsen pa et bilde kan fortelle deg hvor viktig det er? I en grafisk roman er dette en bevisst strategi. Hver rute, eller panel, er nøye designet for a pavirke hvordan du opplever historien.

Et stort panel som dekker halve siden roper "Stopp! Se pa meg!" Det kan vaere et dramatisk øyeblikk, et vakkert landskap, eller en emosjonell scene som trenger plass til a puste. Nar kunstneren bruker en hel side pa ett eneste bilde, kalles det en "splash page", og det er som a holde inne pusten for en forferdelig eller fantastisk avsløring.

Sma paneler i et rutemønster forteller noe helt annet. De skaper et raskt tempo, som klipp i en actionfilm. Seks sma ruter pa rad kan vise en samtale der replikkene flyr fram og tilbake, eller en handlingssekvens der tiden nesten star stille mellom hvert øyeblikk.

Men det virkelig fascinerende er det som skjer mellom panelene. Disse hvite feltene kalles "gutter" (etter det engelske ordet), og her skjer noe magisk: hjernen din fyller automatisk inn det som mangler. Hvis ett panel viser en knyttneve pa vei mot et ansikt, og neste panel viser noen som ligger pa bakken, ser du aldri selve slaget. Men du opplever det likevel, fordi hjernen din skaper sammenhengen. Dette er grafiske romaners superkraft: de lar leseren bli medskaper av historien.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-2-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva kalles rommet mellom panelene i en grafisk roman, og hva er dets funksjon?',
        options: [
          { id: 'a', text: 'Splash - det er der titler plasseres', isCorrect: false },
          { id: 'b', text: 'Gutter - der fyller leseren inn det som mangler mellom bildene', isCorrect: true },
          { id: 'c', text: 'Panel - det er der handlingen skjer', isCorrect: false },
          { id: 'd', text: 'Ramme - det holder bildene pa plass', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Gutter (fra engelsk) er rommet mellom panelene. Her skjer mye av "fortellingen" fordi leseren automatisk fyller inn det som skjer mellom bildene. Dette gjor leseren til en aktiv medskaper av historien.',
      },
    },

    // ========== SEKSJON 3: Nar tekst og bilde snakker sammen ==========
    {
      id: 'norsk-vg1-2-6-n-section3',
      type: 'text',
      content: `## Nar tekst og bilde snakker sammen

Tenk deg at du ser et bilde av en person som smiler bredt. Under star det: "Jeg har aldri vaert lykkeligere." Tekst og bilde sier det samme, og du tenker kanskje "okay, personen er glad." Men hva om teksten i stedet sa: "Jeg har aldri vaert mer redd"? Plotselig blir smilet uhyggelig. Er det et falskt smil? Skjuler personen noe? Den samme tegningen far en helt ny betydning.

Dette kalles tekst-bilde-relasjoner, og det finnes flere typer. Nar teksten forklarer eller presiserer det vi ser, kaller vi det ankring. Bildet kan vaere flertydig, men teksten forteller oss hva vi skal fokusere pa. Tenk pa en bildetekst i en avis: "Statsministeren under pressekonferansen tirsdag." Uten teksten ville vi kanskje ikke visst hvem personen var eller nar bildet var tatt.

Avløsning er nar tekst og bilde gir ulik informasjon som utfyller hverandre. Teksten kan fortelle om karakterens tanker mens bildet viser handlingen. Sammen skaper de en rikere opplevelse enn noen av dem kunne klart alene.

Men det mest interessante er motstrid, nar tekst og bilde sier forskjellige ting. En bildebok for barn kan vise et barn som sitter alene i et mørkt rom med skygger pa veggen, mens teksten sier "Jeg er ikke redd." Vi forstar umiddelbart at barnet er redd, selv om det sier noe annet. Denne teknikken skaper dybde og lar leseren forstå mer enn karakteren selv uttrykker.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-2-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'I en bildebok ser vi et barn smile mens teksten sier "Alt er odelaget." Hvilken tekst-bilde-relasjon er dette?',
        options: [
          { id: 'a', text: 'Ankring - teksten forklarer bildet', isCorrect: false },
          { id: 'b', text: 'Avløsning - tekst og bilde utfyller hverandre', isCorrect: false },
          { id: 'c', text: 'Motstrid - tekst og bilde sier forskjellige ting', isCorrect: true },
          { id: 'd', text: 'Repetisjon - tekst og bilde sier det samme', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Dette er motstrid fordi tekst og bilde motsier hverandre. Barnet smiler (tilsynelatende glad), men teksten avslorer at noe er galt. Denne teknikken engasjerer leseren til a tolke og skaper dybde i fortellingen.',
      },
    },

    // ========== SEKSJON 4: Visuell stil som fortelling ==========
    {
      id: 'norsk-vg1-2-6-n-section4',
      type: 'text',
      content: `## Visuell stil som fortelling

Farger, linjer og former er ikke bare estetiske valg i grafiske romaner og bildeboker. De er fortellerelementer pa linje med ord og setninger. Nar Marjane Satrapi tegner "Persepolis" utelukkende i svart-hvitt, er det ikke fordi hun ikke hadde rad til farger. Det skaper en dokumentarisk folelse, en nostalgisk distanse til barndommen i Iran, og det fremhever de sterke kontrastene i historien hun forteller.

Fargebruk kan vaere naturalistisk, der himmelen er bla og gresset er grønt, slik vi ser i virkeligheten. Men den kan ogsa vaere symbolsk. Rod kan signalisere fare, lidenskap eller sinne. Bla kan uttrykke kulde, ensomhet eller ro. Nar fargene plutselig skifter i en fortelling, forteller det oss at noe har endret seg, kanskje i stemningen, kanskje i karakterens indre tilstand.

Strekene og formene forteller ogsa sin historie. En realistisk stil med mange detaljer skaper troverdighet og tyngde. En stilisert eller karikert stil kan gi humor, eller en drømmeaktig kvalitet. Steffen Kvernelands "Munch" veksler mellom ulike stiler i samme bok, noen ganger imiterer han Munchs egne malerier, andre ganger tegner han i en enklere tegneseriestil. Stilskiftene markerer skifter i tid og perspektiv.

Perspektiv er ogsa viktig. Ser vi karakterene nedenfra, virker de mektige og dominerende. Ovenfra virker de små og sårbare. Et nærbilde av et ansikt skaper intimitet. Et fugleperspektiv over en by skaper avstand og oversikt. Hver bildeutsnitt er et valg som pavirker hvordan vi opplever scenen.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-2-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En grafisk roman veksler mellom varme, lyse farger og kalde, mørke farger i ulike scener. Hva signaliserer dette sannsynligvis?',
        options: [
          { id: 'a', text: 'At kunstneren ikke kunne bestemme seg for en stil', isCorrect: false },
          { id: 'b', text: 'At boken ble trykt med feil', isCorrect: false },
          { id: 'c', text: 'Skift i stemning, folelser eller tidsperiode', isCorrect: true },
          { id: 'd', text: 'At noen sider er viktigere enn andre', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Fargeskift i grafiske romaner er sjelden tilfeldige. Varme farger kan signalisere lykke, kjarlighet eller energi, mens kalde farger kan uttrykke sorg, ensomhet eller fare. Skiftene markerer ofte endringer i stemning eller tidsperiode.',
      },
    },

    // ========== SEKSJON 5: Hvordan analysere en grafisk roman ==========
    {
      id: 'norsk-vg1-2-6-n-section5',
      type: 'text',
      content: `## Hvordan analysere en grafisk roman

Nar du skal analysere en grafisk roman eller bildebok, ma du bruke andre verktøy enn nar du leser en vanlig roman. Du ma se pa hvordan fortelling, visuell stil og tekst-bilde-relasjoner jobber sammen.

Start med fortellingen. Hva handler det om, og hvordan er historien strukturert? Er det en lineaer fortelling fra A til A, eller hopper den i tid? Hvem forteller, bade visuelt og verbalt? Noen ganger har vi en fortellerstemme i tekstbokser, andre ganger folger vi bare karakterenes handlinger.

Se deretter pa den visuelle stilen. Hvordan brukes farger? Er de naturalistiske eller symbolske? Hvordan ser strekene ut, realistiske eller stiliserte? Hvordan brukes perspektiv og billedutsnitt? Alle disse valgene betyr noe.

Analyser layout og komposisjon. Hvordan er panelene organisert? Varierer storrelsen, og i sa fall hvorfor? Hvordan pavirker layouten tempoet i lesningen? Mange sma paneler gir rask lesning, store paneler bremser ned.

Undersok tekst-bilde-relasjonene. Forklarer teksten bildet, utfyller de hverandre, eller motsier de hverandre? Hvordan fordeles informasjonen mellom det visuelle og det verbale?

Til slutt, hva er tema og budskap? Hvordan bidrar alle disse elementene sammen til meningen i verket? Hva gjor dette verket unikt som multimodal tekst? En god analyse ser pa helheten, ikke bare enkeltdeler.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-2-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva bor du fokusere pa nar du analyserer en grafisk roman?',
        options: [
          { id: 'a', text: 'Bare teksten, bildene er bare illustrasjoner', isCorrect: false },
          { id: 'b', text: 'Bare bildene, teksten er underordnet', isCorrect: false },
          { id: 'c', text: 'Samspillet mellom fortelling, visuell stil og tekst-bilde-relasjoner', isCorrect: true },
          { id: 'd', text: 'Antall sider og paneler', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'I en grafisk roman er det samspillet mellom alle elementene som skaper meningen. Du ma se pa hvordan fortelling, visuell stil (farger, linjer, perspektiv) og tekst-bilde-relasjoner jobber sammen for a fortelle historien.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-2-6-n-summary',
      type: 'text',
      content: `## Oppsummering: Visuell fortelling i grafiske romaner og bildeboker

Du har na laert a se pa grafiske romaner og bildeboker med nye oyne. Her er de viktigste begrepene og innsiktene:

**Sjangre:**
Grafiske romaner er lengre, sammenhengende fortellinger i tegneserieformat. Bildeboker er boker der tekst og bilde er gjensidig avhengige for a skape mening. Begge er seriøse kunstformer som kan behandle komplekse temaer.

**Paneler og layout:**
Panelstorrelse signaliserer viktighet og pavirker tempo. Store paneler bremser ned, sma paneler skaper fart. I rommet mellom panelene (gutter) fyller leseren inn det som mangler og blir medskaper av historien.

**Tekst-bilde-relasjoner:**
Ankring betyr at teksten forklarer bildet. Avløsning betyr at tekst og bilde utfyller hverandre med ulik informasjon. Motstrid betyr at de sier forskjellige ting, noe som skaper dybde og ironi.

**Visuell stil:**
Farger, linjer, former og perspektiv er fortellerelementer. De kommuniserer stemning, karakter og tema pa linje med ord og setninger.

**Analyse:**
Se pa helheten: Hvordan jobber fortelling, visuell stil og tekst-bilde-relasjoner sammen for a skape mening?`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7 NARRATIV: Dramaturgi og scenekunst
// ============================================================================

export const CHAPTER_NORSK_VG1_2_7_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-2-7-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '2.7',
  title: 'Dramaturgi og scenekunst',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag hemmelighetene bak historier som fenger - fra Shakespeare til Netflix.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lese, analysere og tolke nyere skjonnlitteratur',
    'utforske og reflektere over hvordan tekster fremstiller moter mellom ulike kulturer og perspektiv',
  ],
  linkedChapterId: 'norsk-vg1-2-7',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-2-7-n-intro',
      type: 'text',
      content: `## Hvorfor noen historier fenger mer enn andre

Har du noen gang sittet pa kanten av sofaen, ute av stand til a slutte a se pa en serie? Eller lest en bok der du bare matte bla om til neste side? Det er ikke tilfeldig at noen historier far oss til a folge med. Det handler om dramaturgi, kunsten a bygge opp en fortelling slik at den griper tak i oss og ikke slipper.

For over 150 ar siden satte en tysk forfatter ved navn Gustav Freytag seg ned og analyserte klassiske tragedier. Han oppdaget et monster, en form som de beste historiene fulgte. Denne formen, som vi kaller Freytags pyramide, brukes fortsatt i dag. Nar du ser en Marvel-film, en Netflix-serie eller leser en bestselger, følger de ofte akkurat den samme oppskriften.

Men dramaturgi handler ikke bare om struktur. Det handler ogsa om hvordan teater og film bruker lys, lyd, scenografi og skuespillernes bevegelser for a forsterke historien. Og i moderne tid har norske dramatikere som Jon Fosse, som vant Nobelprisen i 2023, utviklet helt nye mater a fortelle pa. I dette kapittelet skal du lare a gjennomskue hemmelighetene bak historier som fenger, og forstå hvorfor noen valg gjor fortellingen sterkere.`,
    },

    // ========== SEKSJON 1: Freytags pyramide ==========
    {
      id: 'norsk-vg1-2-7-n-section1',
      type: 'text',
      content: `## Den klassiske oppskriften: Freytags pyramide

Forestill deg en fjelltur. Du starter i dalen, klatrer oppover til toppen, og gar ned pa den andre siden. Slik er ogsa strukturen i klassiske fortellinger.

Alt starter med eksposisjonen. Her moter vi karakterene, laerer om verden de lever i, og far vite hvordan ting er for konflikten begynner. I "Løvenes konge" er dette den lykkelige barndommen med Mufasa. I et Shakespeare-drama moter vi hoffet og laerer hvem som er hvem.

Sa kommer den stigende handlingen, der konflikten introduseres og utvikles. Ting begynner a ga galt. Hindringer dukker opp. Spenningen oker gradvis, som nar du klatrer oppover fjellet og pusten blir tyngre. I "Løvenes konge" dør Mufasa, og Simba flykter. Konfliktens konsekvenser begynner a vise seg.

Pa toppen finner vi klimaks, handlingens mest intense punkt. Her skjer den avgjørende konfrontasjonen. Alt dramaet har bygget opp til dette øyeblikket. Det er her helten møter skurken, elskerene moter hverandre, sannheten kommer fram. Ofte skjer det ogsa et vendepunkt, det dramatikerne kaller peripeti. Plutselig snur alt.

Etter klimaks kommer den fallende handlingen. Konsekvensene av det som skjedde pa toppen utspiller seg. Spenningen avtar, men vi vet ennå ikke hvordan det ender. Til slutt kommer løsningen, eller i tragedien, katastrofen. Alle trader samles, og vi far vite hvordan det gar.

Denne strukturen er ikke en tvangstrøye. Mange moderne fortellinger leker med den, bryter den, snur den pa hodet. Men for a vite hvordan du bryter reglene, ma du forst forstå dem.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-2-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er "klimaks" i dramaturgisk sammenheng?',
        options: [
          { id: 'a', text: 'Innledningen der vi moter karakterene', isCorrect: false },
          { id: 'b', text: 'Handlingens mest intense punkt og avgjørende konfrontasjon', isCorrect: true },
          { id: 'c', text: 'Avslutningen der alt løses', isCorrect: false },
          { id: 'd', text: 'Et rolig parti midt i historien', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Klimaks er handlingens høydepunkt, det mest intense øyeblikket der den avgjørende konfrontasjonen skjer. Her nar spenningen toppen, og ofte skjer et vendepunkt (peripeti) som endrer handlingens retning.',
      },
    },

    // ========== SEKSJON 2: Hollywood-modellen ==========
    {
      id: 'norsk-vg1-2-7-n-section2',
      type: 'text',
      content: `## Hollywood-modellen: Tre akter og to vendepunkter

Mens Freytag analyserte klassiske tragedier, utviklet Hollywood sin egen variant av den dramaturgiske formelen. Treaktsstrukturen er ryggraden i de fleste filmer du ser, fra actionblockbustere til romantiske komedier.

I forste akt, som utgjor omtrent en fjerdedel av filmen, moter vi hovedpersonen i sin vanlige verden. Men sa skjer noe som endrer alt, en utlosende hendelse som Hollywood kaller "the inciting incident". Kanskje oppdager en vanlig hobbit at han har en magisk ring. Kanskje far en fattig jente invitasjon til ballet. Denne hendelsen tvinger hovedpersonen til et valg, og ved slutten av forste akt tar hun beslutningen som setter handlingen i gang.

Andre akt er den lengste, omtrent halvparten av filmen. Her moter hovedpersonen økende motstand. Hun prøver og feiler, laerer og vokser. Midt i denne akten skjer et midtpunkt der ny informasjon endrer alt. Og ved slutten av andre akt nar vi det mørkeste øyeblikket, det Hollywood kaller "the dark night of the soul". Alt ser håpløst ut.

Tredje akt er løsningen. Hovedpersonen finner nye ressurser, ofte indre styrke hun ikke visste hun hadde. Den endelige konfrontasjonen finner sted, og en ny likevekt etableres. Helten har forandret seg gjennom reisen.

Du kan teste denne modellen pa nesten hvilken som helst film. "Star Wars"? Luke møter Obi-Wan (akt 1), trener og kjemper (akt 2), ødelegger Dødsstjernen (akt 3). Det fungerer hver gang.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-2-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'I treaktsstrukturen, hva skjer ved slutten av andre akt?',
        options: [
          { id: 'a', text: 'Hovedpersonen vinner og historien er over', isCorrect: false },
          { id: 'b', text: 'Vi moter hovedpersonen for forste gang', isCorrect: false },
          { id: 'c', text: 'Det mørkeste øyeblikket - alt ser håpløst ut', isCorrect: true },
          { id: 'd', text: 'Et komisk avbrekk for a lette stemningen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Ved slutten av andre akt nar vi det mørkeste øyeblikket, ofte kalt "the dark night of the soul". Her ser alt håpløst ut for hovedpersonen. Dette gjor triumfen i tredje akt sa mye sterkere.',
      },
    },

    // ========== SEKSJON 3: Sceniske virkemidler ==========
    {
      id: 'norsk-vg1-2-7-n-section3',
      type: 'text',
      content: `## Scenens sprak: Lys, lyd og rom

Dramaturgi handler ikke bare om manuskriptet. Pa scenen og pa lerretet finnes et helt arsenal av virkemidler som forsterker fortellingen uten at et eneste ord sies.

Lyssetting er kanskje det kraftigste verktøyet. Sterkt, hvitt lys skaper åpenhet og sannhet. Dempet lys skaper intimitet og hemmelighet. En spotlight isolerer en karakter, gjor henne ensom midt i mengden. Rødt lys signaliserer fare eller lidenskap, bla lys gir kulde og fremmedgjøring. Nar lyset gradvis dimmes i en scene, forstar vi instinktivt at noe mørkt er i ferd med a skje.

Lyddesign er like viktig. Musikk kan fa oss til a grate eller le, kjenne spenning eller lettelse. Men stillhet kan vaere enda kraftigere. Nar lyden plutselig forsvinner, holder vi pusten. Lydeffekter skaper illusjon av miljoer vi ikke ser: fuglesang, trafikk, et bankende hjerte.

Scenografien, utformingen av scenerommet, forteller oss hvor vi er og hva slags verden dette er. En realistisk scenografi med møbler og vegger skaper illusjon av virkelighet. En stilisert scenografi med enkle elementer lar oss fokusere pa menneskene. En minimalistisk scene, nesten tom, tvinger oppmerksomheten mot ordene og kroppene.

Og sa har vi blokkeringen, hvordan skuespillerne beveger seg og plasseres. Avstanden mellom to karakterer pa scenen forteller oss om forholdet deres. Bevegelse mot noen viser tiltrekning, bevegelse bort viser avvisning. Den som star høyest, har ofte makt. Alt dette kommuniserer, ofte sterkere enn ordene.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-2-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kommuniserer det vanligvis nar to karakterer star langt fra hverandre pa scenen?',
        options: [
          { id: 'a', text: 'De er bestevenner', isCorrect: false },
          { id: 'b', text: 'Følelsesmessig avstand eller konflikt mellom dem', isCorrect: true },
          { id: 'c', text: 'De er slektninger', isCorrect: false },
          { id: 'd', text: 'Scenen er for liten', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Fysisk avstand pa scenen kommuniserer ofte emosjonell avstand. Nar karakterer star langt fra hverandre, signaliserer det konflikt, fremmedgjøring eller et vanskelig forhold. Naerhet signaliserer det motsatte.',
      },
    },

    // ========== SEKSJON 4: Jon Fosse og moderne norsk dramatikk ==========
    {
      id: 'norsk-vg1-2-7-n-section4',
      type: 'text',
      content: `## Stillhetens mester: Jon Fosse og det moderne norske dramaet

I 2023 vant Jon Fosse Nobelprisen i litteratur. Han er Norges mest spilte dramatiker internasjonalt, og hans stil er umiskjennelig. Men for a forstå hva som gjor Fosse sa unik, ma vi forst forstå hva han gjor annerledes.

Der tradisjonelt drama ofte er fullt av handling, dialog og konfrontasjoner, er Fosses skuespill preget av stillhet, pauser og det usagte. Karakterene hans venter. De sier fa ord, og ordene de sier, gjentar de ofte. "Ja." "Nei." "Kanskje." Lange pauser mellom replikkene. Det kan virke minimalt, nesten tomt. Men i dette tomrommet skjer det noe merkelig: vi begynner a lytte intenst. Vi begynner a se det som ikke sies.

Ta "Nokon kjem til a komme" som eksempel. Et par ankommer et hus ved havet. De venter pa noen. Vi vet ikke hvem, vi vet ikke hvorfor. Nesten ingenting skjer i tradisjonell forstand. Men spenningen er nesten uutholdelig. Forholdet mellom dem, angsten, håpet, alt ligger under overflaten.

Fosses scenografi er like minimalistisk. Et vindu. En stol. Kanskje havet i bakgrunnen. Ingen distraksjoner. Vi tvinges til a fokusere pa menneskene, pa øyeblikkene, pa stillheten. Dette er teater strippet ned til det essensielle: mennesker som forsøker a na fram til hverandre, og ofte mislykkes.

Andre moderne norske dramatikere som Cecilie Løveid og Arne Lygre eksperimenterer ogsa med form, men pa andre mater. Løveid bruker poetisk, lyrisk sprak og utforsker kvinners erfaringer. Lygre lar karakterer skifte roller midt i forestillingen. Felles for dem er at de utfordrer var forventning om hva drama skal vaere.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-2-7-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Jon Fosses dramatiske stil?',
        options: [
          { id: 'a', text: 'Mye action, høyt tempo og spektakulaere sceneskift', isCorrect: false },
          { id: 'b', text: 'Lange, detaljerte dialoger med komplekse intriger', isCorrect: false },
          { id: 'c', text: 'Minimalisme, pauser og repetisjon - det usagte er like viktig som ordene', isCorrect: true },
          { id: 'd', text: 'Historiske kostymer og store ensembler', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Jon Fosse er kjent for sin minimalistiske stil med korte, repetitive replikker og meningsfulle pauser. Det usagte er like viktig som ordene. Scenografien er nedstrippet, og fokuset ligger pa menneskelige relasjoner og eksistensielle spørsmal.',
      },
    },

    // ========== SEKSJON 5: Analysere dramaturgisk struktur ==========
    {
      id: 'norsk-vg1-2-7-n-section5',
      type: 'text',
      content: `## Hvordan analysere dramaturgisk struktur

Na har du verktøyene. Hvordan bruker du dem nar du ser en film, en serie eller et teaterstykke?

Start med a identifisere strukturen. Kan du finne eksposisjonen der vi laerer hvem karakterene er? Hva er den utlosende hendelsen som setter handlingen i gang? Hvor er klimaks, det mest intense øyeblikket? Følger verket Freytags pyramide eller treaktsstrukturen, eller bryter det med forventningene?

Legg merke til vendepunktene. Et godt drama har øyeblikk der alt snur. Disse peripetiene er ofte de mest minneverdige scenene. I Henrik Ibsens "Et dukkehjem" er det øyeblikket Nora innser at mannen hennes ikke er den hun trodde. I "Løvenes konge" er det Mufasas dod. Hva er vendepunktet i verket du analyserer?

Se pa de sceniske virkemidlene. Hvordan brukes lys? Er det noen spesielt minneverdig bruk av lyd eller musikk? Hva forteller scenografien oss? Hvordan beveger skuespillerne seg i rommet?

Tenk pa hva verket prøver a si. Struktur og virkemidler er ikke tilfeldige valg. De støtter temaet og budskapet. Hvis en regissør velger a ha nesten tom scene, er det en grunn. Hvis komponisten velger stillhet i stedet for musikk, kommuniserer det noe.

Til slutt, vurder om strukturen fungerer. Bygger spenningen seg opp? Føles klimaks tilfredsstillende? Lar vendepunktene deg overrasket eller sjokkert? God dramaturgi gjør at vi bryr oss om hva som skjer med karakterene.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-2-7-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-7-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er "peripeti" i dramaturgisk sammenheng?',
        options: [
          { id: 'a', text: 'Avslutningen av et drama', isCorrect: false },
          { id: 'b', text: 'Et vendepunkt der handlingens retning endres', isCorrect: true },
          { id: 'c', text: 'Innledningen der karakterene presenteres', isCorrect: false },
          { id: 'd', text: 'En pause mellom aktene', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Peripeti er et vendepunkt i handlingen - et øyeblikk der situasjonen snur, ofte fra lykke til ulykke (i tragedien) eller omvendt. Begrepet kommer fra Aristoteles og er sentralt i klassisk dramaturgi.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-2-7-n-summary',
      type: 'text',
      content: `## Oppsummering: Dramaturgiens verktoy

Du har na laert de viktigste prinsippene for hvordan fortellinger bygges opp og hvordan scenekunst kommuniserer. Her er det viktigste a huske:

**Freytags pyramide:**
Eksposisjon (vi moter karakterene) - Stigende handling (konflikten utvikles) - Klimaks (høydepunktet) - Fallende handling (konsekvenser) - Løsning eller katastrofe.

**Treaktsstrukturen:**
Akt 1 (25%): Etablering og utlosende hendelse. Akt 2 (50%): Konfrontasjon og motstand, ender i mørkeste øyeblikk. Akt 3 (25%): Oppløsning og ny likevekt.

**Sceniske virkemidler:**
Lyssetting skaper stemning og fokus. Lyddesign forsterker følelser. Scenografi etablerer verden. Blokkering viser relasjoner mellom karakterene.

**Moderne norsk dramatikk:**
Jon Fosses minimalistiske stil, med pauser, repetisjon og det usagte, representerer et alternativ til tradisjonell dramaturgi. Moderne drama utfordrer ofte klassiske strukturer.

**Nøkkelbegreper:**
Klimaks (høydepunkt), peripeti (vendepunkt), eksposisjon (innledning), katastrofe (ulykkelig slutt i tragedien), scenografi, blokkering.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.8 NARRATIV: Adaptasjon og medietekster
// ============================================================================

export const CHAPTER_NORSK_VG1_2_8_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-2-8-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '2.8',
  title: 'Adaptasjon og medietekster',
  subtitle: 'Narrativ versjon',
  description: 'Forstå kunsten a overføre historier mellom medier - fra bok til film og videre.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese, analysere og tolke nyere skjonnlitteratur',
    'utforske og reflektere over hvordan tekster fremstiller moter mellom ulike kulturer og perspektiv',
    'reflektere over hvordan tekster fra ulike tider og steder kan leses og forstas pa ulike mater',
  ],
  linkedChapterId: 'norsk-vg1-2-8',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-2-8-n-intro',
      type: 'text',
      content: `## Boken var bedre - eller var den det?

Du har sikkert hørt det før. Noen ser en film og sukker: "Boken var bedre." Men er det alltid sant? Og er det egentlig en rettferdig sammenligning?

Nar en roman blir film, et teaterstykke blir TV-serie, eller et eventyr blir dataspill, kaller vi det adaptasjon. Ordet kommer fra latin og betyr "a tilpasse". For det er nettopp det som skjer: historien tilpasses et nytt medium med andre muligheter og begrensninger. Og i denne prosessen skjer det alltid endringer. Noe gar tapt. Noe nytt kommer til. Noe blir annerledes.

Tenk pa hvor forskjellig opplevelsen er. Nar du leser en bok, skaper du bildene selv. Du hører karakterenes stemmer i hodet, ser ansiktene deres som du forestiller deg dem. Nar du ser en film, har noen andre gjort disse valgene for deg. Du ser skuespillernes ansikter, hører deres stemmer, ser regissørens visjon av verden.

I dette kapittelet skal du lare a analysere adaptasjoner, ikke for a dømme hva som er "best", men for a forstå hvordan samme historie fungerer ulikt i ulike medier. For som vi skal se, handler adaptasjon ikke om kopiering, men om gjenskapelse.`,
    },

    // ========== SEKSJON 1: Typer adaptasjon ==========
    {
      id: 'norsk-vg1-2-8-n-section1',
      type: 'text',
      content: `## Fra tro til fri: Ulike tilnaerminger til adaptasjon

Ikke alle adaptasjoner tar samme tilnaerming til kildeteksten. Noen forsøker a vaere sa tro mot originalen som mulig, mens andre tar seg store friheter.

En tro adaptasjon prøver a beholde så mye som mulig fra kilden. Hovedhandlingen, karakterene, dialogen, kanskje til og med strukturen. BBC er kjent for sine trofaste Jane Austen-adaptasjoner, der de følger romanene naermest scene for scene. Fansen setter pris pa gjenkjennelsen, folelsen av at favorittkboken deres har kommet til liv.

En fri adaptasjon tar kilden som utgangspunkt, men gjør store endringer. Kanskje flyttes handlingen til en annen tid eller et annet sted. Kanskje endres karakterer eller legges til nye. Filmen "10 Things I Hate About You" er basert pa Shakespeares "Troll kan temmes", men handlingen er flyttet til en amerikansk high school pa 90-tallet. Grunnkonflikten er gjenkjennelig, men alt annet er nytt.

Enda friere er appropriasjon, der kildeteksten bare er en løs inspirasjon. "Løvenes konge" har klare paralleller til Shakespeares "Hamlet", men de fleste seere aner ikke at det er en Shakespeare-adaptasjon. Disneys skapere tok grunnideen om en prins som ma hevne farens død, og skapte noe helt nytt.

Transponering er et nyttig begrep for adaptasjoner som beholder historien, men flytter den til en ny kontekst. "Clueless" er Jane Austens "Emma" transponert til Beverly Hills pa 90-tallet. "West Side Story" er "Romeo og Julie" transponert til New Yorks gjengliv.

Ingen av disse tilnaermingene er bedre eller darligere enn de andre. De er ulike verktøy for ulike formal.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-2-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Filmen "Clueless" er basert pa Jane Austens roman "Emma", men handlingen er flyttet til 90-tallets Beverly Hills. Hva kalles denne typen adaptasjon?',
        options: [
          { id: 'a', text: 'Tro adaptasjon', isCorrect: false },
          { id: 'b', text: 'Parodi', isCorrect: false },
          { id: 'c', text: 'Transponering', isCorrect: true },
          { id: 'd', text: 'Sitat', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Transponering er nar grunnfortellingen bevares, men flyttes til en ny tid og/eller et nytt sted. Karakterene og konfliktene er gjenkjennelige, men konteksten er helt ny.',
      },
    },

    // ========== SEKSJON 2: Medienes ulike sprak ==========
    {
      id: 'norsk-vg1-2-8-n-section2',
      type: 'text',
      content: `## Hvert medium har sitt eget sprak

Hvorfor kan ikke en film bare gjøre akkurat det samme som boken? Fordi mediene er fundamentalt forskjellige. De har ulike styrker, ulike begrensninger, og ulike mater a kommunisere pa.

Romanen gir deg direkte tilgang til karakterenes tanker. "Han lurte pa om hun egentlig mente det hun sa" er enkelt a skrive, men hvordan viser du det i en film? Skuespilleren kan ha et tvilende blikk, men det er aldri like presist som ordene. Romanen lar ogsa leseren bestemme tempo. Du kan stoppe, tenke, bla tilbake. Filmen ruller videre uansett.

Filmen, pa sin side, kan vise ting øyeblikkelig som romanen ma bruke sider pa a beskrive. Et landskap, en folkemengde, et ansiktsuttrykk. Musikk kan formidle følelser direkte til hjertet uten a ga via ord. Og filmens begrenset spilletid, vanligvis rundt to timer, tvinger skaperne til a fokusere pa det essensielle.

TV-serien har mer tid. Derfor egner den seg ofte bedre til a adaptere lange romaner. "Game of Thrones" kunne aldri blitt en enkelt film. Serieformatet tillater karakterutvikling over mange episoder, sidehistorier, og den langsomme oppbyggingen som komplekse fortellinger trenger.

Teateret har live-aspektet. Skuespillerne er fysisk til stede, og hver forestilling er unik. Men scenografien er begrenset. Du kan ikke vise et slag med tusenvis av soldater pa en teaterscene.

Dataspillet gir interaktivitet. Spilleren blir en aktiv deltaker som former historien gjennom sine valg. Men dette skaper ogsa utfordringer for tradisjonell fortelling.

Nar vi forstår disse forskjellene, forstår vi ogsa hvorfor adaptasjoner ma gjøre endringer.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-2-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er en av de største utfordringene nar en roman adapteres til film?',
        options: [
          { id: 'a', text: 'Romaner har for fa karakterer', isCorrect: false },
          { id: 'b', text: 'Romaner gir direkte tilgang til tanker, noe film ikke kan gjøre like presist', isCorrect: true },
          { id: 'c', text: 'Film har for lang spilletid', isCorrect: false },
          { id: 'd', text: 'Romaner har for mye dialog', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Romanen kan fortelle oss direkte hva karakterer tenker og føler. Film ma vise dette gjennom handling, dialog og skuespill, noe som aldri blir like presist. Dette er en av de største utfordringene ved bok-til-film-adaptasjon.',
      },
    },

    // ========== SEKSJON 3: Intertekstualitet ==========
    {
      id: 'norsk-vg1-2-8-n-section3',
      type: 'text',
      content: `## Alle tekster snakker med hverandre

Her er en hemmelighet: ingen tekst eksisterer alene. Hver gang du leser, ser eller spiller noe, bringer du med deg erfaringer fra alt annet du har lest, sett og spilt. Og skaperne vet dette. De regner med det. De leker med det.

Dette kalles intertekstualitet, forbindelsene mellom tekster. Og det finnes mange former.

Et sitat er den mest direkte formen. Nar en karakter i en film sier "To be or not to be", siterer de Shakespeare. Publikum som gjenkjenner sitatet, far en ekstra dimensjon av mening.

En allusjon er en mer indirekte henvisning. Nar en film viser en karakter som holder ut armene som pa et kors, alluderer den kanskje til kristendommen. Du trenger ikke tenke bevisst over det for at det skal pavirke deg.

Pastisj er imitasjon av en stil. En film som bevisst bruker svart-hvitt, skygger og en kynisk fortellerstemme, skriver seg inn i noir-tradisjonen. Den samtaler med alle de gamle noir-filmene som kom før.

Parodi er komisk imitasjon. "Scary Movie" fungerer bare hvis du kjenner skrekkfilmene den gjør narr av. Parodien forutsetter kjennskap til originalen.

Nar du begynner a legge merke til intertekstualitet, apner en ny verden seg. Plutselig ser du hvordan tekster svarer pa hverandre, kommenterer hverandre, bygger pa hverandre. Ingenting er helt nytt. Alt er del av en stor, pågående samtale.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-2-8-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'En film bruker bevisst svart-hvitt-bilder, skygger og en kynisk detektiv for a etterligne klassiske krimfilmer fra 1940-tallet. Hva kalles dette?',
        options: [
          { id: 'a', text: 'Sitat', isCorrect: false },
          { id: 'b', text: 'Parodi', isCorrect: false },
          { id: 'c', text: 'Pastisj', isCorrect: true },
          { id: 'd', text: 'Allusjon', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Pastisj er imitasjon av en stil eller sjanger. Filmen prøver ikke a gjøre narr av noir-sjangeren (det ville vaert parodi), men a gjenskape dens atmosfaere og estetikk.',
      },
    },

    // ========== SEKSJON 4: Norske adaptasjoner ==========
    {
      id: 'norsk-vg1-2-8-n-section4',
      type: 'text',
      content: `## Nar norsk litteratur blir film

Norge har en rik tradisjon for a adaptere litteratur til film og TV. Noen ganger lykkes det, andre ganger ikke. Men prosessen er alltid interessant a studere.

Ta "Beatles" fra 2014, basert pa Lars Saabye Christensens roman om fire gutter som vokser opp i Oslo pa 60-tallet. Romanen er full av introspeksjon, av en fortellerstemme som kommenterer og reflekterer. Filmen matte finne andre mater a formidle dette pa, gjennom musikken fra epoken, gjennom bildene av et Oslo som ikke lenger finnes, gjennom skuespillernes ansiktsuttrykk. Den episodiske strukturen fra boken fungerte overraskende godt pa film.

"Kampen om tungtvannet" viser hvordan samme historie kan fortelles ulikt i ulike epoker. Den opprinnelige filmen fra 1948 var nesten dokumentarisk, med flere av de virkelige sabotørene i roller. NRK-serien fra 2015 var mer dramatisert, med fokus pa karakterutvikling og personlige konflikter. Begge er tro mot historien, men de forteller den pa helt forskjellige mater.

Ikke alle adaptasjoner lykkes like godt. "Snømannen" fra 2017, basert pa Jo Nesbøs roman, ble en internasjonal storproduksjon som fikk blandet mottagelse. Kritikerne papekte at filmen føltes rotete og usammenhengende. Romanen er tykk og kompleks, og a presse den inn i en spillefilm viste seg vanskelig.

Disse eksemplene viser at adaptasjon alltid er en risiko. Det finnes ingen garantert oppskrift pa suksess. Men nar det fungerer, kan adaptasjonen tilføre noe nytt som beriker forstaelsen av originalen.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-2-8-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor er det spesielt utfordrende a adaptere en lang, kompleks roman til en enkelt spillefilm?',
        options: [
          { id: 'a', text: 'Filmer har for høy kvalitet', isCorrect: false },
          { id: 'b', text: 'Filmer har begrenset tid og ma kutte mye av innholdet', isCorrect: true },
          { id: 'c', text: 'Romaner er alltid bedre enn filmer', isCorrect: false },
          { id: 'd', text: 'Skuespillere kan ikke lese', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'En film har vanligvis bare rundt to timer, mens en lang roman kan ta mange timer a lese. Skaperne ma gjøre vanskelige valg om hva som skal kuttes, forenkles eller endres. Derfor egner TV-serier seg ofte bedre for lange romanadaptasjoner.',
      },
    },

    // ========== SEKSJON 5: Hvordan analysere en adaptasjon ==========
    {
      id: 'norsk-vg1-2-8-n-section5',
      type: 'text',
      content: `## Hvordan analysere en adaptasjon

Nar du skal analysere en adaptasjon, handler det ikke om a kare en vinner mellom bok og film. Det handler om a forstå hva som skjer i overgangen mellom medier.

Start med kildeteksten. Hva er sentralt i originalen? Hva er det som gjør verket til det det er? Er det karakterene, temaene, stemningen, strukturen? Noen elementer er enklere a overføre enn andre. En spennende handling kan filmatiseres direkte. En karakters indre tankeliv er vanskeligere.

Se deretter pa adaptasjonen. Hva er beholdt fra originalen? Hva er endret, og kan du forstå hvorfor? Hva er lagt til som ikke fantes i kilden? Hvordan brukes det nye mediets muligheter? Kanskje en roman som beskriver et landskap over flere sider, blir et kort, vakkert bilde i filmen. Kanskje en karakters tanker blir til dialog med en annen karakter.

Tenk over hva som gar tapt i overgangen. Dette er ikke nødvendigvis kritikk av adaptasjonen. Noen ting kan rett og slett ikke overføres. Men det er nyttig a vaere bevisst pa det. Tenk ogsa over hva som vinnes. Hva kan det nye mediet gjøre som det gamle ikke kunne?

Til slutt: gir adaptasjonen deg ny innsikt i originalen? Noen ganger kan en filmatisering fa deg til a se boken pa en ny mate. Andre ganger kan du forstå bokens styrker bedre nar du ser hva filmen ikke klarer a fange.

God analyse handler om nysgjerrighet, ikke dom.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-2-8-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-8-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er det viktigste nar du analyserer en adaptasjon?',
        options: [
          { id: 'a', text: 'A bevise at boken alltid er bedre', isCorrect: false },
          { id: 'b', text: 'A telle antall sider versus minutter', isCorrect: false },
          { id: 'c', text: 'A forstå hva som skjer i overgangen mellom medier', isCorrect: true },
          { id: 'd', text: 'A finne feil i adaptasjonen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'God adaptasjonsanalyse handler ikke om a dømme hva som er best, men om a forstå hva som skjer nar en historie overføres fra ett medium til et annet. Hva endres, hva bevares, og hvorfor?',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-2-8-n-summary',
      type: 'text',
      content: `## Oppsummering: Kunsten a fortelle pa nytt

Du har na laert a forstå adaptasjon som en kreativ prosess, ikke bare kopiering. Her er de viktigste begrepene og innsiktene:

**Typer adaptasjon:**
Tro adaptasjon følger kilden naert. Fri adaptasjon tar seg større friheter. Transponering flytter historien til ny tid/sted. Appropriasjon bruker kilden som løs inspirasjon.

**Medienes forskjeller:**
Roman gir tilgang til tanker og lar leseren bestemme tempo. Film viser øyeblikkelig og bruker musikk og bilder. TV-serie har mer tid for komplekse fortellinger. Teater har live-naervaer. Spill gir interaktivitet.

**Intertekstualitet:**
Alle tekster er i dialog med andre tekster. Sitat er direkte gjengivelse. Allusjon er indirekte henvisning. Pastisj er stilimitasjon. Parodi er komisk imitasjon.

**Analyse av adaptasjon:**
Se pa hva som er beholdt, endret og lagt til. Forstå hvorfor endringer er gjort ut fra mediets muligheter og begrensninger. Vurder hva som gar tapt og hva som vinnes.

**Det viktigste:**
Adaptasjon handler ikke om kopiering, men om gjenskapelse. "Boken var bedre" er sjelden en rettferdig vurdering. Bok og film er forskjellige medier med forskjellige styrker.`,
    },
  ],
  exercises: [],
};

