/**
 * Norsk VG1 - Narrative versjoner Del 2 (Kapittel 2.2, 2.3, 2.4, 2.5)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Hovedfil: textbook-content-norsk-vg1-narrativ.ts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.2 NARRATIV: Lyrikk og diktanalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_2_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-2-2-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '2.2',
  title: 'Lyrikk og diktanalyse',
  subtitle: 'Narrativ versjon',
  description: 'Oppdag magien i diktets verden - fra rim og rytme til bilder som beveger.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke lyriske tekster med vekt på form og innhold',
  ],
  linkedChapterId: 'norsk-vg1-2-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-2-2-n-intro',
      type: 'text',
      content: `## Hvorfor leser vi dikt?

Har du noen gang hørt en sang som traff deg rett i hjertet? En linje som satte ord på noe du ikke visste hvordan du skulle uttrykke? Da har du opplevd lyrikken sin kraft.

Dikt er språk på sitt mest konsentrerte. Mens en roman kan bruke hundrevis av sider på å beskrive en følelse, kan et dikt gjøre det med tre linjer. Hvert ord er valgt med omhu, hver pause har betydning, hver lyd bidrar til helheten. Det er som forskjellen mellom en lang samtale og et blikk som sier alt.

I dette kapittelet skal vi utforske diktets verden sammen. Du kommer til å lære å knekke koden bak rim og rytme, å se bildene som skjuler seg i ordene, og å forstå hvorfor noen dikt har overlevd i hundrevis av år mens andre er glemt. Og kanskje viktigst av alt - du kommer til å oppdage at lyrikk ikke bare finnes i støvete diktsamlinger, men også i sangene du hører hver dag.`,
    },

    // ========== SEKSJON 1: Form og oppbygning ==========
    {
      id: 'norsk-vg1-2-2-n-section1',
      type: 'text',
      content: `## Rim, rytme og musikalitet

Før vi dykker ned i dypere analyse, må vi forstå diktets byggesteiner. Tenk på et dikt som en sang uten melodi - rytmen og klangen ligger i selve ordene.

Rim er kanskje det første du tenker på når du hører ordet "dikt". Det er lyden som gjentar seg, vanligvis på slutten av linjene. Men visste du at det finnes flere typer rim? Parrim er når to linjer etter hverandre rimer, som "hjem" og "dem". Kryssrim er når annenhver linje rimer, i mønsteret abab. Og klammerrim er når første og siste linje i en strofe rimer, mens de to i midten rimer med hverandre - mønsteret abba.

Men moderne lyrikk bruker ofte ingen rim i det hele tatt. Det kalles frie vers, og det gir dikteren frihet til å fokusere på andre virkemidler. Når du leser et dikt uten rim, betyr ikke det at formen er tilfeldig - dikteren har bare valgt andre verktøy.

Rytme er diktets puls. Selv uten rim har dikt en indre musikalitet. Noen dikt marsjerer fremover med faste, tunge slag. Andre flyter lett og ujevnt, som en samtale. Legg merke til hvor du naturlig legger trykket når du leser et dikt høyt - det avslører rytmen. Og husk: å lese dikt høyt er ikke bare tillatt, det er nødvendig. Mye av magien forsvinner hvis du bare leser med øynene.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Et dikt har rimskjemaet abab (linje 1 rimer på linje 3, linje 2 rimer på linje 4). Hva kalles dette?',
        options: [
          { id: 'a', text: 'Parrim', isCorrect: false },
          { id: 'b', text: 'Kryssrim', isCorrect: true },
          { id: 'c', text: 'Klammerrim', isCorrect: false },
          { id: 'd', text: 'Frie vers', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kryssrim (abab) betyr at annenhver linje rimer. Linje 1 rimer på linje 3, og linje 2 rimer på linje 4. Dette er et av de vanligste rimskjemaene i tradisjonell lyrikk.',
      },
    },

    // ========== SEKSJON 2: Billedspråk ==========
    {
      id: 'norsk-vg1-2-2-n-section2',
      type: 'text',
      content: `## Språket som maler bilder

Lyrikk handler om å si det umulige - å sette ord på følelser og opplevelser som egentlig ikke lar seg beskrive direkte. Derfor bruker diktere billedspråk, språklige bilder som åpner nye dører i leserens fantasi.

En metafor er kanskje det viktigste verktøyet. Når dikteren skriver "Hjertet mitt er en stein", mener hun ikke at hjertet bokstavelig talt er blitt til stein. Hun bruker steinens egenskaper - hard, kald, tung - for å beskrive en følelsesmessig tilstand. Metaforen sammenligner to ting uten å bruke ordet "som" eller "lik". Den sier at noe er noe annet.

En sammenligning gjør noe lignende, men er mer direkte. "Hjertet mitt er som en stein" eller "Hun løp lik vinden" bruker sammenligningsord for å koble de to tingene. Effekten er ofte litt svakere, men tydeligere.

Besjeling er når vi gir menneskelige egenskaper til ting som ikke er mennesker. "Vinden hvisket hemmeligheter" eller "Trærne strakk armene mot himmelen" gjør naturen levende og følsom. Dette virkemiddelet skaper nærhet mellom menneske og verden.

Symboler går enda dypere. Et symbol er noe konkret som representerer noe abstrakt. Et hjerte symboliserer kjærlighet. En rose kan symbolisere skjønnhet, men også forgjengelighet fordi den visner. Mørke kan stå for død eller uvitenhet, lys for håp eller kunnskap. Symboler er ofte kulturelt betinget - du må kjenne kulturen for å forstå symbolet.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: '"Trærne danset i vinden." Hvilket virkemiddel er dette?',
        options: [
          { id: 'a', text: 'Metafor', isCorrect: false },
          { id: 'b', text: 'Sammenligning', isCorrect: false },
          { id: 'c', text: 'Besjeling (personifikasjon)', isCorrect: true },
          { id: 'd', text: 'Symbol', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Besjeling (personifikasjon) gir menneskelige egenskaper til noe som ikke er menneskelig. Trær kan ikke danse i bokstavelig forstand - å danse er en menneskelig handling. Ved å si at trærne danser, blir naturen levende og menneskelig.',
      },
    },

    // ========== SEKSJON 3: Lydlige virkemidler ==========
    {
      id: 'norsk-vg1-2-2-n-section3',
      type: 'text',
      content: `## Når ordene synger

Lyrikk kommer fra det greske ordet for "lyre", et strengeinstrument. Opprinnelig ble dikt sunget til musikk. Selv om de fleste moderne dikt leses stille, bærer de fortsatt musikken i seg gjennom lydlige virkemidler.

Allitterasjon er gjentakelse av konsonanter i begynnelsen av ord. "Fager fjell og fosser" eller "Svale sommervinder suser" - legg merke til hvordan s-lyden i det siste eksempelet nesten lydmaler vinden. Det er ikke tilfeldig. Dikteren velger ord som lyder som det de beskriver.

Assonans er det samme prinsippet, men med vokaler. Gjentatte a-lyder kan skape en åpen, vidstrakt følelse. Gjentatte i-lyder kan føles lysere og skarpere. Lydene har emosjonelle kvaliteter som dikteren utnytter.

Onomatopoetikon er ord som lyder som det de betyr - "sus", "brus", "klirr", "knirk". Disse ordene kobler språk og verden direkte sammen. Når dikteren skriver at bekken "risler", hører du nesten lyden.

Enjambement er når en setning fortsetter over linjeskiftet. Dette skaper en følelse av bevegelse, av noe uavsluttet som presser fremover. Det motsatte - når setningen slutter der linjen slutter - gir en følelse av ro og fullførelse.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: '"Ser du solen synke saklig / over skogen står den stille." Hvilket lydlig virkemiddel dominerer?',
        options: [
          { id: 'a', text: 'Assonans (vokalrim)', isCorrect: false },
          { id: 'b', text: 'Allitterasjon (bokstavrim)', isCorrect: true },
          { id: 'c', text: 'Onomatopoetikon (lydmalende ord)', isCorrect: false },
          { id: 'd', text: 'Enjambement', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Allitterasjon er gjentakelse av konsonanter i begynnelsen av ord. Her gjentas s-lyden i "Ser", "solen", "synke", "saklig", "skogen", "står", "stille". S-lyden er en frikativ som minner om sus - den lydmaler stillheten og roen i scenen.',
      },
    },

    // ========== SEKSJON 4: Det lyriske jeget ==========
    {
      id: 'norsk-vg1-2-2-n-section4',
      type: 'text',
      content: `## Hvem snakker i diktet?

I en roman har vi en forteller. I et dikt har vi et lyrisk jeg - stemmen som taler til oss gjennom diktet. Men her er det viktig å huske en grunnleggende regel: det lyriske jeget er ikke nødvendigvis det samme som dikteren.

Når Arnulf Overland skriver "Du må ikke sitte trygt i ditt hjem", hvem er dette "du"? Er det deg, leseren? Er det alle mennesker? Er det Norges befolkning i 1936, da diktet ble skrevet som advarsel mot fascismen? Sannsynligvis alt på en gang. Det lyriske jeget henvender seg til et "du" og skaper dermed en direkte forbindelse, en oppfordring.

Noen dikt har et tydelig jeg som forteller om sine opplevelser. Andre dikt er mer upersonlige, som om de observerer verden uten å avsløre hvem som ser. Sigbjorn Obstfelder sitt berømte dikt "Jeg ser" har et jeg som er til stede i hvert vers, men dette jeget er fremmedgjort, forvirret, usikker på sin plass i verden.

Når du analyserer et dikt, spor alltid hvem som snakker, til hvem, og med hvilken tone. Er stemmen intim eller distansert? Sikker eller tvilende? Optimistisk eller dyster? Tonen farger alt.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-2-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva menes med "det lyriske jeget" i et dikt?',
        options: [
          { id: 'a', text: 'Dikteren selv', isCorrect: false },
          { id: 'b', text: 'Stemmen som taler i diktet', isCorrect: true },
          { id: 'c', text: 'Hovedpersonen i diktet', isCorrect: false },
          { id: 'd', text: 'Leseren av diktet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Det lyriske jeget er stemmen som taler i diktet. Det er viktig å skille mellom dikteren (den virkelige personen som skrev diktet) og det lyriske jeget (den konstruerte stemmen i teksten). De kan være like, men trenger ikke å være det.',
      },
    },

    // ========== SEKSJON 5: Fra klassisk til samtidslyrikk ==========
    {
      id: 'norsk-vg1-2-2-n-section5',
      type: 'text',
      content: `## Lyrikk gjennom tidene

Lyrikken har forandret seg dramatisk gjennom historien. I romantikken, med diktere som Henrik Wergeland og Bjornstjerne Bjornson, feiret diktene naturen, nasjonen og de store følelsene. Formene var faste, rimene tydelige, og tonen ofte opphøyd og begeistring.

Med modernismen, representert av Sigbjorn Obstfelder og senere Rolf Jacobsen, kom et brudd. Frie vers erstattet faste former. Fremmedgjoring og eksistensiell undring erstattet feiring. Dikterne stilte sporsmål i stedet for å gi svar.

Samtidslyrikken er mangfoldig. Noen diktere som Ruth Lillegraven skriver om hverdagen, om morskap og natur, med et presist og konsentrert språk. Andre som Oyvind Rimbereid eksperimenterer med dialekt og fremtidsscenarier. Tor Ulven utforsket tid, minne og forgjengelighet med en nesten filosofisk dybde.

Og så har vi rap og sangtekster. Karpe og Lars Vaular skriver tekster som tar opp identitet, rasisme og oppvekst i Norge. Grensene mellom "høy" og "lav" kultur viskes ut. Lyrikk lever i mange former - i diktsamlinger og på Spotify, i festivalteltet og i klasserommet.

Det viktigste er ikke hvor du finner lyrikken, men at du åpner deg for den. Les dikt. Lytt til tekster. La ordene virke på deg.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-2-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner overgangen fra romantisk til modernistisk lyrikk?',
        options: [
          { id: 'a', text: 'Mer fokus på rim og fast form', isCorrect: false },
          { id: 'b', text: 'Mer nasjonal begeistring og feiring', isCorrect: false },
          { id: 'c', text: 'Frie vers, fremmedgjøring og eksistensiell undring', isCorrect: true },
          { id: 'd', text: 'Kortere dikt med flere metaforer', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Modernismen brøt med romantikkens faste former og optimistiske tone. Frie vers erstattet rim og rytme, og temaene handlet oftere om fremmedgjøring og eksistensiell undring enn om nasjonal feiring.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Din verktøykasse for diktanalyse

Du har nå fått verktøyene du trenger for å trenge inn i diktets verden. Her er det viktigste å huske:

Form og struktur handler om diktets ytre rammeverk. Se etter rimskjema (parrim, kryssrim, klammerrim eller frie vers), strofeinndelinger, og rytme. Husk at selv frie vers har struktur - dikteren har bare valgt andre virkemidler enn rim.

Billedspråk er språkets evne til å male bilder. Metaforer sier at noe er noe annet. Sammenligninger bruker "som" eller "lik". Besjeling gir liv til det livløse. Symboler lar det konkrete stå for det abstrakte.

Lydlige virkemidler gjør diktet til musikk. Allitterasjon gjentar konsonanter, assonans gjentar vokaler, og onomatopoetikon lydmaler. Enjambement skaper bevegelse over linjeskiftet.

Det lyriske jeget er stemmen i diktet - ikke nødvendigvis dikteren selv. Spor hvem som snakker, til hvem, og med hvilken tone.

Kontekst gir dybde. Et dikt skrevet i 1936 som advarsel mot fascismen leses annerledes enn et kjærlighetsdikt fra romantikken. Historisk og kulturell kontekst beriker tolkningen.

Det viktigste rådet? Les dikt høyt. La ordene rulle over tungen. Føl rytmen. Hør klangen. Lyrikk er ment for øret like mye som for øyet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3 NARRATIV: Drama og teater
// ============================================================================

export const CHAPTER_NORSK_VG1_2_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-2-3-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '2.3',
  title: 'Drama og teater',
  subtitle: 'Narrativ versjon',
  description: 'Stig inn i teatrets verden - der ordene blir levende på scenen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke dramatiske tekster med vekt på form og innhold',
    'forstå samspillet mellom tekst og scenisk fremføring',
  ],
  linkedChapterId: 'norsk-vg1-2-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-2-3-n-intro',
      type: 'text',
      content: `## Når ordene reiser seg og går

Tenk deg at du sitter i en mørk sal. Scenen foran deg lyses opp. En person trer frem og begynner å snakke - ikke til deg direkte, men til en annen person på scenen. Du ser en samtale utfolde seg, en konflikt bygge seg opp, følelser eksplodere. Du er vitne til noe som skjer akkurat nå, foran øynene dine.

Dette er teatrets magi. Mens romaner og noveller forteller oss historier, viser dramaet oss historier. Det er litteratur som er ment å bli levende, å bli kropp og stemme og bevegelse.

Drama er en av de eldste kunstformene vi har. For over 2500 år siden samlet athenerne seg i amfiteatre for å se tragedier og komedier. Og selv i dag, i en verden full av film og streaming, har det levende teatret en kraft som ingen skjerm kan gjenskape. Noe skjer når mennesker samles for å oppleve en fortelling sammen, i sanntid, uten mulighet for å spole tilbake.

I dette kapittelet skal du lære å lese drama - både som tekst på papir og som forestilling på scene. Du kommer til å forstå hvordan konflikter bygges opp, hvordan dialog avslører karakter, og hvorfor noen teaterstykker har overlevd i århundrer mens andre er glemt.`,
    },

    // ========== SEKSJON 1: Dramaets grunnleggende elementer ==========
    {
      id: 'norsk-vg1-2-3-n-section1',
      type: 'text',
      content: `## Dialog, monolog og sceneanvisninger

Et drama er bygd opp av to hovedkomponenter: det som sies, og det som gjøres. La oss se nærmere på begge deler.

Dialog er samtale mellom to eller flere karakterer. I drama er dialogen nesten alt vi har - det er gjennom samtalen at vi forstår hvem karakterene er, hva de vil, og hva som står på spill. Men dialog i drama er ikke det samme som vanlig samtale. Hver replikk er valgt med omhu, hver setning driver handlingen fremover eller avslører noe viktig om karakteren.

Monolog er når én karakter snakker alene. Dette kan være en tale til andre karakterer på scenen, eller det kan være en enesamtale - en soliloquy - der karakteren "tenker høyt" og avslører sine innerste tanker for publikum. Hamlets berømte "Å være eller ikke være" er en slik enesamtale. Karakteren snakker ikke til noen på scenen, men direkte til oss.

Sceneanvisninger er forfatterens instruksjoner om alt som ikke er dialog. Hvordan ser scenen ut? Hvordan beveger karakterene seg? Hvilken stemning skal det være? I moderne drama kan sceneanvisningene være svært detaljerte, mens eldre drama ofte har få eller ingen. Henrik Ibsen var kjent for sine grundige sceneanvisninger som beskrev stuen ned til minste detalj - fordi rommet selv forteller noe om menneskene som bor der.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'En karakter står alene på scenen og sier høyt hva han tenker. Publikum hører det, men ingen andre karakterer gjør det. Hva kalles dette?',
        options: [
          { id: 'a', text: 'Dialog', isCorrect: false },
          { id: 'b', text: 'Sceneanvisning', isCorrect: false },
          { id: 'c', text: 'Soliloquy (enesamtale)', isCorrect: true },
          { id: 'd', text: 'Prolog', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'En soliloquy (enesamtale) er når en karakter snakker høyt til seg selv, og dermed avslører sine tanker for publikum. Andre karakterer på scenen "hører" ikke dette. Det er en måte å gi publikum tilgang til karakterens indre liv.',
      },
    },

    // ========== SEKSJON 2: Dramatisk struktur ==========
    {
      id: 'norsk-vg1-2-3-n-section2',
      type: 'text',
      content: `## Fra eksposisjon til katastrofe

Allerede for over to tusen år siden formulerte den greske filosofen Aristoteles regler for hvordan et godt drama burde bygges opp. Og selv om moderne dramatikere ofte bryter disse reglene, er det nyttig å kjenne dem - fordi bruddet bare gir mening hvis du vet hva som brytes.

Aristoteles snakket om de tre enheter: handlingens enhet (dramaet skal ha én hovedhandling), tidens enhet (alt skal skje innenfor 24 timer), og stedets enhet (alt skal foregå på ett sted). Disse reglene var ment å skape en konsentrert, intens opplevelse.

Strukturen i et klassisk drama følger en kurve. Det begynner med eksposisjon, der vi møter karakterene og forstår situasjonen. Så kommer komplikasjonen - noe skjer som skaper konflikt. Spenningen stiger mot klimaks, det avgjørende vendepunktet. I en tragedie kommer så peripeti, omslaget der alt snur til det verre. Til slutt katastrofen eller løsningen, der konsekvensene utspiller seg.

Aristoteles mente at tragedien skulle fremkalle katarsis hos publikum - en følelsesmessig renselse der vi gjennom innlevelse i karakterenes lidelse blir renset for frykt og medlidenhet. Det er en merkelig ide: at det å se noen lide kan gjøre oss godt. Men tenk på det - hvor ofte har du gråtet til en film og etterpå følt deg merkelig lettet?`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er "katarsis" ifølge Aristoteles?',
        options: [
          { id: 'a', text: 'Handlingens høydepunkt', isCorrect: false },
          { id: 'b', text: 'Den tragiske heltens fall', isCorrect: false },
          { id: 'c', text: 'Følelsesmessig renselse hos publikum', isCorrect: true },
          { id: 'd', text: 'Slutten av et drama', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Katarsis betyr "renselse". Aristoteles mente at tragedien renset publikum for følelser som frykt og medlidenhet gjennom innlevelse i karakterenes skjebne. Ved å oppleve sterke følelser i teatret, bearbeider vi noe i oss selv.',
      },
    },

    // ========== SEKSJON 3: Dramatisk ironi og konflikt ==========
    {
      id: 'norsk-vg1-2-3-n-section3',
      type: 'text',
      content: `## Når vi vet mer enn karakterene

Et av teatrets kraftigste virkemidler er dramatisk ironi - situasjoner der publikum vet noe karakterene på scenen ikke vet. Tenk på det klassiske eksempelet Romeo og Julie: publikum vet at Julie ikke er død, hun har bare drukket en sovemedisin. Men Romeo tror hun er død og tar sitt eget liv. Vi ser tragedien rulle mot katastrofen og kan ikke gjøre noe for å stoppe den.

Dramatisk ironi skaper intens spenning. Hver gang en karakter sier noe som viser at de ikke forstår situasjonen, kjenner vi det i magen. "Hadde du bare visst!" tenker vi. Denne kløften mellom hva vi vet og hva karakterene vet, er en av grunnene til at teater kan være så gripende.

Konflikt er dramaets motor. Uten konflikt, ingen handling. Konflikter kan være ytre - mellom karakterer, eller mellom en karakter og samfunnet. De kan også være indre - kampen i en karakters eget sinn mellom plikt og lyst, kjærlighet og hat, frykt og mot.

De beste dramaene kombinerer ofte ytre og indre konflikt. I Ibsens "Et dukkehjem" er den ytre konflikten mellom Nora og samfunnets forventninger, men den indre konflikten handler om Noras kamp for å forstå hvem hun egentlig er. Når den indre konflikten løses - når Nora innser at hun må finne seg selv - utløser det handlingen som avslutter stykket.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er dramatisk ironi?',
        options: [
          { id: 'a', text: 'Når en karakter sier det motsatte av det de mener', isCorrect: false },
          { id: 'b', text: 'Når publikum vet noe karakterene ikke vet', isCorrect: true },
          { id: 'c', text: 'Når handlingen tar en uventet vending', isCorrect: false },
          { id: 'd', text: 'Når dramaet har en humoristisk undertone', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Dramatisk ironi oppstår når publikum har informasjon som karakterene mangler. Dette skaper spenning fordi vi ser konsekvenser karakterene ikke kan forutse. I Romeo og Julie vet vi at Julie lever, men Romeo tror hun er død.',
      },
    },

    // ========== SEKSJON 4: Moderne drama ==========
    {
      id: 'norsk-vg1-2-3-n-section4',
      type: 'text',
      content: `## Fra Ibsen til absurd teater

Det moderne dramaet brøt med de klassiske reglene. Henrik Ibsen, "den moderne dramatikkens far", skrev stykker om vanlige mennesker i hverdagslige situasjoner. I stedet for konger og helter fikk vi bankfunksjonærer og husmødre. I stedet for skjebne og guder fikk vi samfunnskritikk og psykologi.

Ibsen var mester i å avsløre sannheter som lå begravd under overflaten. I "Et dukkehjem" ser vi et tilsynelatende lykkelig ekteskap som sakte rakner. I "Vildanden" utforsker han hvordan livsløgner kan være nødvendige for å overleve. Hans stykker sjokkerte samtiden fordi de viste at borgerskapet ikke var så pent og ordentlig som det likte å fremstå.

På 1900-tallet gikk noen dramatikere enda lenger. Absurd teater, representert av Samuel Beckett og Eugene Ionesco, fremstilte en verden uten mening. I "Mens vi venter på Godot" skjer nesten ingenting - to menn venter på noen som aldri kommer. Handlingen er minimal, dialogen går i ring. Poenget er nettopp meningsløsheten.

Bertolt Brecht gikk motsatt vei. Han ville at teatret skulle vekke publikum til politisk handling, ikke suge dem inn i illusjonen. Han brøt bevisst med innlevelsen - skuespillerne snakket direkte til publikum, scenearbeidere var synlige, sanger avbrøt handlingen. Alt for å minne publikum: dette er teater, ikke virkelighet. Tenk på hva dere ser. Gjør noe med verden.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-2-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner Bertolt Brechts "episke teater"?',
        options: [
          { id: 'a', text: 'Det fokuserer på følelsesmessig innlevelse', isCorrect: false },
          { id: 'b', text: 'Det bryter med illusjonen for å vekke publikum til refleksjon', isCorrect: true },
          { id: 'c', text: 'Det følger Aristoteles tre enheter strengt', isCorrect: false },
          { id: 'd', text: 'Det fremstiller en meningsløs verden uten handling', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Brechts episke teater bryter bevisst med illusjonen. Han ville at publikum skulle tenke, ikke bare føle. Ved å minne publikum på at de ser teater, ønsket han å vekke kritisk refleksjon og politisk engasjement.',
      },
    },

    // ========== SEKSJON 5: Fra tekst til scene ==========
    {
      id: 'norsk-vg1-2-3-n-section5',
      type: 'text',
      content: `## Teatrets magi

Når du leser et drama, leser du bare halve verket. Den andre halvparten er forestillingen - skuespillernes tolkning, regissørens visjon, scenografens bilder, lysdesignerens stemninger. Et teaterstykke blir nytt hver gang det settes opp.

Tenk på alle valgene som må gjøres. Hvordan skal Hamlet si "Å være eller ikke være"? Hviskende og grubling, eller høyt og desperat? Skal scenen være tom og abstrakt, eller realistisk innredet? Skal kostymene være historiske eller moderne? Hvert valg forandrer betydningen.

Dette er også grunnen til at klassikere overlever. Ibsens stykker ble skrevet for over hundre år siden, men de settes opp igjen og igjen fordi nye generasjoner finner nye måter å tolke dem på. Et stykke om kvinners frigjøring i 1879 kan bli et stykke om identitet og selvrealisering i 2024.

Når du ser teater, legg merke til alt som skjer utenom ordene. Kroppsspråk, pauser, blikk, bevegelser i rommet. Hva gjør karakterene mens de snakker? Hva gjør de når de ikke snakker? Teatret kommuniserer med mye mer enn bare ord.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-2-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor kan klassiske teaterstykker fortsatt føles relevante i dag?',
        options: [
          { id: 'a', text: 'Fordi de handler om historiske hendelser', isCorrect: false },
          { id: 'b', text: 'Fordi de kan tolkes på nye måter av hver generasjon', isCorrect: true },
          { id: 'c', text: 'Fordi språket er tidløst', isCorrect: false },
          { id: 'd', text: 'Fordi publikum liker nostalgi', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Klassikere overlever fordi de tar opp universelle temaer som kan tolkes på nye måter. Hver generasjon kan finne sin egen mening i de samme ordene. En regissør i 2024 kan sette opp Ibsen på en måte som snakker til vår tid.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering: Din guide til dramaet

Drama er litteratur som er ment å bli levende på scenen. Når du analyserer et drama, husk disse nøkkelbegrepene:

Dramaets byggesteiner er dialog (samtale mellom karakterer), monolog (én karakter snakker), og sceneanvisninger (forfatterens instruksjoner om scene og handling). Soliloquy er en spesiell type monolog der karakteren tenker høyt til publikum.

Aristoteles dramaturgi beskriver den klassiske strukturen: eksposisjon (introduksjon), komplikasjon (konflikt oppstår), klimaks (vendepunkt), peripeti (omslag), og katastrofe eller løsning. Katarsis er den følelsesmessige renselsen publikum opplever.

Dramatisk ironi oppstår når publikum vet mer enn karakterene. Konflikter kan være ytre (mellom karakterer) eller indre (i karakterens sinn).

Moderne drama brøt med klassiske regler. Ibsen skrev om vanlige mennesker og samfunnskritikk. Absurd teater fremstilte meningsløshet. Brechts episke teater brøt med illusjonen for å vekke politisk bevissthet.

Fra tekst til scene: Et drama er ikke komplett før det fremføres. Regissør og skuespillere tolker teksten, og klassikere overlever fordi de kan tolkes på nye måter av nye generasjoner.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4 NARRATIV: Romananalyse
// ============================================================================

export const CHAPTER_NORSK_VG1_2_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-2-4-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '2.4',
  title: 'Romananalyse',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk den lange fortellingens kunst - fra Hamsun til Knausgård.',
  estimatedMinutes: 45,
  competenceGoals: [
    'analysere og tolke skjønnlitterære tekster med vekt på form og innhold',
    'reflektere over hvordan tekster fra ulike tider og kulturer kan gi innsikt i egne og andres liv',
  ],
  linkedChapterId: 'norsk-vg1-2-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-2-4-n-intro',
      type: 'text',
      content: `## Hvorfor leser vi romaner?

Det finnes få opplevelser som ligner det å miste seg selv i en god roman. Timer forsvinner mens du blar side etter side, fullstendig oppslukt av en verden som bare eksisterer i ord på papir. Du kjenner karakterene bedre enn du kjenner mange mennesker i ditt eget liv. Du lever deres triumfer og deres tragedier.

Romanen er den dominerende litterære sjangeren i vår tid. Fra Jane Austen til Karl Ove Knausgård, fra "Sult" til "Doppler", har romaner formet hvordan vi forstår oss selv og verden. Men hva er det egentlig som gjør en roman til en roman? Og hvordan kan vi lese romaner på en måte som åpner opp for dypere forståelse?

I dette kapittelet skal vi utstyre deg med verktøyene du trenger for å analysere romaner. Du kommer til å lære om fortellerteknikk - hvem som egentlig forteller historien. Du kommer til å forstå hvordan romaner bygges opp, hvordan tid håndteres, og hvordan karakterer skapes. Og du kommer til å oppdage at romaner ikke bare underholder - de lærer oss noe om hva det vil si å være menneske.`,
    },

    // ========== SEKSJON 1: Fortellerstemmer ==========
    {
      id: 'norsk-vg1-2-4-n-section1',
      type: 'text',
      content: `## Hvem forteller historien?

Hver roman har en forteller - en stemme som formidler historien til oss. Men fortellere kommer i mange varianter, og valget av fortellerstemme forandrer alt.

Jeg-fortelleren er kanskje den mest intime formen. "Jeg husker den dagen som om det var i går," begynner fortellingen, og med en gang er vi inne i hodet på et menneske. Vi ser verden gjennom deres øyne, kjenner deres tanker, deler deres følelser. Men vi vet også bare det de vet. Når jeg-fortelleren ikke forstår hva som skjer, forstår ikke vi det heller. Karl Ove Knausgårds "Min kamp" bruker denne teknikken for å skape ekstrem nærhet til fortellerens tankeliv.

Tredjeperson begrenset ligner, men holder litt mer avstand. "Hun så ut av vinduet og lurte på hva hun skulle gjøre." Vi følger én karakter, har tilgang til deres tanker, men det er et "hun" eller "han" - ikke "jeg". Avstanden er subtil, men merkbar.

Den allvitende fortelleren kjenner alle tanker og følelser. "Maria visste ikke at Lars hadde sett henne. Han lurte på om han skulle si noe." Her hopper vi mellom karakterers sinn. Denne teknikken var vanlig i klassiske romaner, som Jonas Lies "Familien på Gilje", og gir oversikt over hele handlingen.

Og så har vi den upålitelige fortelleren - en forteller som lyver, misforstår, eller skjuler sannheten. Leseren må "lese mellom linjene" for å forstå hva som egentlig skjer. Denne teknikken skaper spenning og inviterer leseren til å være detektiv.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: '"Hun tenkte på samtalen med moren. Lars, på sin side, lurte på om han skulle ringe." Hvilken fortellerstemme er dette?',
        options: [
          { id: 'a', text: 'Jeg-forteller', isCorrect: false },
          { id: 'b', text: 'Tredjeperson begrenset', isCorrect: false },
          { id: 'c', text: 'Allvitende forteller', isCorrect: true },
          { id: 'd', text: 'Upålitelig forteller', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Den allvitende fortelleren har innsikt i flere karakterers tanker. Her får vi vite hva både "hun" og Lars tenker. En tredjeperson begrenset forteller ville bare gitt oss tilgang til én av dem.',
      },
    },

    // ========== SEKSJON 2: Tid og komposisjon ==========
    {
      id: 'norsk-vg1-2-4-n-section2',
      type: 'text',
      content: `## Når skjer ting - og i hvilken rekkefølge?

Romaner leker med tid på måter virkelig liv ikke kan. En forfatter kan hoppe ti år fremover på en halv side, eller bruke hundre sider på å beskrive en enkelt dag. Denne friheten er et av romanens kraftigste verktøy.

Kronologisk fortelling følger tiden som den går - først skjedde A, så B, så C. Dette er den enkleste strukturen, men mange romaner bryter med den for effekt.

Analepse, eller tilbakeblikk, er når fortellingen hopper bakover i tid. "Han husket hvordan det hadde vært tyve år tidligere..." Tilbakeblikk gir oss kontekst, forklarer hvorfor karakterene er som de er, avslører hemmeligheter fra fortiden.

Prolepse, eller frempek, antyder hva som skal skje. "Hadde hun visst hva som ventet, ville hun aldri ha åpnet den døren." Frempek skaper spenning - vi vet at noe forferdelig kommer, men ikke hva eller når.

In medias res betyr å starte midt i handlingen. I stedet for å begynne på begynnelsen, kaster romanen oss inn i et dramatisk øyeblikk og fyller inn bakgrunnen senere. Knut Hamsuns "Sult" begynner slik: vi møter hovedpersonen allerede desperat, sulten, i krise. Hvem han er og hvordan han havnet her, får vi vite gradvis.

Romanens komposisjon - hvordan den er bygd opp - er aldri tilfeldig. Spor hvorfor forfatteren har gjort de valgene de har gjort. Hva oppnår de med å begynne her, hoppe dit, avslutte slik?`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'En roman begynner med at hovedpersonen står ved en grav. Så hopper den tilbake til barndommen. Hva kalles dette tilbakeblikket?',
        options: [
          { id: 'a', text: 'Prolepse', isCorrect: false },
          { id: 'b', text: 'Analepse', isCorrect: true },
          { id: 'c', text: 'In medias res', isCorrect: false },
          { id: 'd', text: 'Klimaks', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Analepse (tilbakeblikk) er når fortellingen hopper bakover i tid. Her starter romanen i nåtid (ved graven) og går så tilbake til fortiden (barndommen) for å forklare hvordan vi kom hit.',
      },
    },

    // ========== SEKSJON 3: Karakterer ==========
    {
      id: 'norsk-vg1-2-4-n-section3',
      type: 'text',
      content: `## Mennesker av ord

De beste romankarakterene føles virkelige - mer virkelige noen ganger enn mennesker du kjenner i virkeligheten. Men hvordan skaper forfattere denne illusjonen?

E.M. Forster innførte skillet mellom runde og flate karakterer. Flate karakterer er enkle, forutsigbare, definert av én eller to egenskaper. Den snille naboen. Den onde sjefen. Flate karakterer har sin funksjon - de driver handlingen, representerer ideer, gir kontrast. Men vi elsker dem sjelden.

Runde karakterer er komplekse. De overrasker oss, motsier seg selv, utvikler seg gjennom historien. De har indre konflikter, drømmer de aldri oppnår, feil de ikke klarer å innse. Nora i "Et dukkehjem" er en rund karakter - hun begynner som tilsynelatende overfladisk, men avslører lag på lag av kompleksitet.

Karakterisering kan være direkte eller indirekte. Direkte karakterisering er når fortelleren forteller oss hvem karakteren er: "Han var en sjalu mann." Indirekte karakterisering viser oss det gjennom handling, dialog og valg. Hva karakteren gjør når ingen ser på, hva de sier i et øyeblikk av sinne, hvordan de behandler en fremmed - dette avslører mer enn noen beskrivelse.

Når du analyserer en karakter, spor utviklingen. Hvordan endrer karakteren seg fra begynnelse til slutt? Hva utløser endringen? Og er endringen troverdig - tror du på den?`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-2-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en "rund" karakter?',
        options: [
          { id: 'a', text: 'En karakter som er fysisk beskrevet i detalj', isCorrect: false },
          { id: 'b', text: 'En karakter som er kompleks og utvikler seg', isCorrect: true },
          { id: 'c', text: 'En karakter som opptrer i mange scener', isCorrect: false },
          { id: 'd', text: 'En karakter som er hovedperson i romanen', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Runde karakterer er komplekse, har flere sider, og utvikler seg gjennom fortellingen. De overrasker oss og føles virkelige. Flate karakterer er derimot enkle og forutsigbare, definert av få egenskaper.',
      },
    },

    // ========== SEKSJON 4: Tema og budskap ==========
    {
      id: 'norsk-vg1-2-4-n-section4',
      type: 'text',
      content: `## Hva handler romanen egentlig om?

Handlingen er det som skjer. Temaet er hva det handler om på et dypere plan.

En roman kan handle om en mann som sulter i Kristiania (handling), men temaet kan være kunstnerens kamp mot samfunnet, eller menneskets ensomhet, eller det irrasjonelles makt over fornuften. Temaet ligger under overflaten - det er spørsmålet romanen stiller, mer enn svaret den gir.

Hvordan finner du temaet? Se på hva karakterene kjemper med. Ikke de ytre kampene - å få jobb, finne kjærlighet, overleve - men de indre. Hva frykter de? Hva lengter de etter? Hva ofrer de?

Se også på gjentakelser. Hva kommer tilbake igjen og igjen? Motiver - gjentakende elementer - peker ofte mot tema. Hvis romanen stadig vender tilbake til bilder av vann, spor hva vannet kan bety. Flyt og stillstand? Renselse? Drukne?

Budskapet - hvis romanen har ett - er en mulig tolkning av temaet. Men vær forsiktig med å forenkle. Gode romaner er flertydige. De stiller spørsmål mer enn de gir svar. "Sult" handler ikke bare om at det er dumt å sulte - den utforsker komplekse spørsmål om identitet, skaperkraft og overlevelse som ikke har enkle svar.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-2-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom handling og tema i en roman?',
        options: [
          { id: 'a', text: 'Handling er begynnelsen, tema er slutten', isCorrect: false },
          { id: 'b', text: 'Handling er det som skjer, tema er de underliggende ideene', isCorrect: true },
          { id: 'c', text: 'Handling er objektivt, tema er subjektivt', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Handling er de konkrete hendelsene - hva som skjer i romanen. Tema er de underliggende ideene og spørsmålene romanen utforsker. En roman kan handle om en kvinne som forlater ektemannen (handling), mens temaet er identitet og frihet.',
      },
    },

    // ========== SEKSJON 5: Romanen som speil ==========
    {
      id: 'norsk-vg1-2-4-n-section5',
      type: 'text',
      content: `## Hva forteller romanen oss om verden - og oss selv?

Romaner er ikke bare underholdning. De er også vinduer inn i andre liv, andre tider, andre verdener. Gjennom romaner kan vi oppleve det vi aldri selv vil oppleve - være en annen, et annet sted, i en annen tid.

Men romaner er også speil. I karakterenes kamper gjenkjenner vi våre egne. I deres feil ser vi våre blinde flekker. I deres triumfer finner vi håp. Litteraturforskeren Wayne C. Booth skrev om "den underforståtte forfatter" - de verdiene og holdningene som ligger implisitt i teksten. Når vi leser, går vi i dialog med disse verdiene.

Kontekst beriker lesningen. Når du vet at "Sult" ble skrevet i 1890, i en tid da naturalismen dominerte og man trodde på vitenskapelig forklaring av menneskets handlinger, forstår du Hamsuns brudd bedre. Han skrev en roman der hovedpersonen handler irrasjonelt, uforklarlig - et opprør mot tidens litterære ideal.

Samtidig kan romaner fra fortiden avsløre fordommer vi ikke lenger deler. Det er også en del av lesningen - å se hva forfatteren tok for gitt som vi i dag stiller spørsmål ved.

Det viktigste er kanskje dette: La romaner forandre deg. Ikke bare analyser dem - la dem virke på deg. De beste romanene er de som setter spor, som du tenker på lenge etterpå, som forandrer hvordan du ser verden.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-2-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor er det nyttig å kjenne den historiske konteksten når du leser en roman?',
        options: [
          { id: 'a', text: 'For å vite hva som er sant og usant i romanen', isCorrect: false },
          { id: 'b', text: 'For å forstå forfatterens valg og tekstens betydning i sin tid', isCorrect: true },
          { id: 'c', text: 'For å kunne kritisere forfatteren', isCorrect: false },
          { id: 'd', text: 'Det er ikke nyttig - romaner bør leses uavhengig av kontekst', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Historisk kontekst hjelper oss å forstå hvorfor forfatteren gjorde de valgene de gjorde, hva teksten betydde for lesere i sin samtid, og hvilke konvensjoner den fulgte eller brøt med. Dette beriker tolkningen.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Din guide til romananalyse

Du har nå verktøyene for å trenge dypere inn i romanens verden. Her er de viktigste begrepene:

Fortellerstemme handler om hvem som forteller historien. Jeg-fortelleren gir intimitet og begrenset perspektiv. Tredjeperson begrenset følger én karakter. Allvitende forteller kjenner alles tanker. Upålitelig forteller krever at vi leser mellom linjene.

Tid og komposisjon handler om hvordan historien struktureres. Kronologisk fortelling følger tiden. Analepse (tilbakeblikk) hopper bakover. Prolepse (frempek) antyder fremtiden. In medias res begynner midt i handlingen.

Karakterer kan være runde (komplekse, utvikler seg) eller flate (enkle, forutsigbare). Direkte karakterisering forteller oss hvem de er, indirekte karakterisering viser oss det gjennom handling og dialog.

Tema er de underliggende ideene romanen utforsker - spørsmålene den stiller, ikke nødvendigvis svarene den gir. Motiver (gjentakende elementer) peker ofte mot tema.

Kontekst - historisk, kulturell, biografisk - beriker tolkningen og hjelper oss å forstå forfatterens valg.

Og husk: la romaner forandre deg. Analysen er viktig, men opplevelsen er viktigere.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5 NARRATIV: Litterære virkemidler
// ============================================================================

export const CHAPTER_NORSK_VG1_2_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg1-2-5-narrativ',
  courseId: 'norsk-vg1',
  chapterNumber: '2.5',
  title: 'Litterære virkemidler',
  subtitle: 'Narrativ versjon',
  description: 'Mestre språkets verktøykasse - fra metafor til ironi.',
  estimatedMinutes: 40,
  competenceGoals: [
    'analysere og tolke skjønnlitterære tekster med vekt på form og innhold',
    'bruke fagspråk om språk og litteratur i tekstarbeid',
  ],
  linkedChapterId: 'norsk-vg1-2-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg1-2-5-n-intro',
      type: 'text',
      content: `## Språkets hemmelige verktøy

Noen tekster treffer deg rett i hjertet. Andre glir forbi uten å sette spor. Hva er forskjellen? Ofte handler det om virkemidler - de språklige grepene som forfattere bruker for å skape effekt, følelse og mening.

Tenk på det som forskjellen mellom å si "Hun var trist" og å skrive "Sorgen lå tungt over henne som en våt dyne hun ikke klarte å sparke av seg." Begge setningene forteller oss at noen er trist, men den andre viser oss det, lar oss føle tyngden, kvelningen, hjelpeløsheten. Det er virkemidlenes magi.

I dette kapittelet skal vi utforske de viktigste litterære virkemidlene. Du kommer til å lære å gjenkjenne metaforer og symboler, forstå ironiens mange ansikter, og oppdage hvordan tekster snakker med andre tekster. Du kommer til å bli en bedre leser - en som ser hva som foregår under overflaten. Og du kommer til å bli en bedre skribent, fordi det beste med å forstå virkemidler er at du selv kan begynne å bruke dem.`,
    },

    // ========== SEKSJON 1: Troper - billedspråk ==========
    {
      id: 'norsk-vg1-2-5-n-section1',
      type: 'text',
      content: `## Når språket maler bilder

Troper er samlebetegnelsen for billedspråk - måter å bruke ord på som overfører betydning fra ett område til et annet. La oss se på de viktigste.

Metafor er den mest grunnleggende. Når vi sier "Livet er en reise", mener vi ikke at livet bokstavelig talt er en reise med tog eller bil. Vi overfører egenskapene til en reise - at den har en begynnelse og en slutt, at den går gjennom ulike landskap, at vi møter hindringer og oppdagelser underveis - til livet. Metaforen åpner et nytt perspektiv.

Sammenligning ligner, men er mer eksplisitt. "Livet er som en reise" bruker ordet "som" for å koble de to tingene. Effekten er ofte litt svakere - metaforen påstår en identitet, sammenligningen innrømmer at det bare er en likhet.

Metonymi erstatter et ord med noe nærliggende. Når vi sier "Kronen har talt", mener vi kongen. Når vi sier "Han leste Ibsen hele natten", mener vi Ibsens bøker. Metonymien skaper en elegant forkortelse og kan flytte fokus - "Kronen" fremhever institusjonen mer enn personen.

Personifikasjon, eller besjeling, gir menneskelige egenskaper til noe ikke-menneskelig. "Vinden hvisket" eller "Døden banket på døren". Dette gjør det abstrakte eller livløse levende og følsomt, skaper en verden der alt har sjel.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg1-2-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: '"Tiden er penger." Hva slags virkemiddel er dette?',
        options: [
          { id: 'a', text: 'Sammenligning', isCorrect: false },
          { id: 'b', text: 'Metafor', isCorrect: true },
          { id: 'c', text: 'Metonymi', isCorrect: false },
          { id: 'd', text: 'Personifikasjon', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Dette er en metafor fordi den sier at noe er noe annet uten å bruke sammenligningsord som "som" eller "lik". Tid og penger er ikke det samme, men metaforen overfører egenskaper ved penger (verdi, knapphet, noe som kan spares eller kastes bort) til tid.',
      },
    },

    // ========== SEKSJON 2: Symbol og allegori ==========
    {
      id: 'norsk-vg1-2-5-n-section2',
      type: 'text',
      content: `## Det konkrete som står for det abstrakte

Symboler omgir oss overalt. Et hjerte betyr kjærlighet. En hvit due betyr fred. Et svart bånd betyr sorg. Disse symbolene er så innarbeidet i kulturen vår at vi knapt tenker over dem.

I litteraturen fungerer symboler på lignende måte, men ofte mer komplekst. Et symbol er et konkret element - en ting, en handling, et sted - som representerer noe abstrakt. I Ibsens "Vildanden" er den skadeskutte villanden et symbol for flere ting samtidig: for Hedvig, som også er "skadet", for hele familien som lever i et kunstig miljø, for menneskets behov for illusjoner.

Det som gjør litterære symboler interessante, er at de ofte er flertydige. De kan bety forskjellige ting for forskjellige lesere, eller flere ting samtidig. Et hus kan symbolisere trygghet, men også fangenskap. Mørke kan være død, men også mulighet for ny begynnelse.

Allegori er en utvidet metafor der hele fortellingen representerer noe annet. Dyrefabler er klassiske allegorier - dyrene representerer mennesketyper. "Ringenes Herre" kan leses som en allegori der ringen symboliserer maktbegjær og korrupsjon. Men vær forsiktig med å redusere alt til allegori - noen ganger er en sigar bare en sigar, som Freud kanskje aldri sa.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg1-2-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'I en novelle går hovedpersonen forbi et vindu som aldri åpnes. Vinduet nevnes flere ganger. Hva kan dette være et eksempel på?',
        options: [
          { id: 'a', text: 'Metafor', isCorrect: false },
          { id: 'b', text: 'Ironi', isCorrect: false },
          { id: 'c', text: 'Symbol', isCorrect: true },
          { id: 'd', text: 'Metonymi', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Et vindu som aldri åpnes og som nevnes gjentatte ganger, fungerer som et symbol. Det kan representere isolasjon, manglende åpenhet mot omverdenen, eller motvilje mot forandring. Symboler er konkrete elementer som står for noe abstrakt.',
      },
    },

    // ========== SEKSJON 3: Ironi ==========
    {
      id: 'norsk-vg1-2-5-n-section3',
      type: 'text',
      content: `## Å si en ting og mene noe annet

Ironi er et av de mest kraftfulle og vanskelige virkemidlene. Det handler om et gap mellom det som sies og det som menes, mellom det som forventes og det som skjer.

Verbal ironi er når noen sier det motsatte av det de mener. "Så flott vær!" sier du når regnet pøser ned. Mottakeren forstår - forhåpentligvis - at du mener det motsatte. I litteraturen kan verbal ironi avsløre karakterers holdninger, eller forfatterens distanse til det som beskrives.

Situasjonsironi er når det motsatte av det forventede skjer. En brannstasjon som brenner ned. En politimann som blir ranet. Det forventede snur, og kontrasten skaper effekt.

Dramatisk ironi oppstår når leseren eller publikum vet noe karakterene ikke vet. Vi snakket om dette i drama-kapittelet, men det finnes også i romaner. Når vi som lesere vet at brevet aldri kom frem, mens karakteren venter og venter, skapes det en spenning som bare vi kan føle.

Ironi var et yndlingsvåpen for de realistiske forfatterne. Alexander Kielland brukte ironi for å avsløre borgerskapets hykleri. Ved å beskrive noe med tilsynelatende beundring, avslørte han det kritikkverdige. Leseren som oppfatter ironien, blir medskyldige i kritikken.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg1-2-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'En forfatter beskriver en karakter som "den høyt respekterte herr Hansen som aldri hadde løyet - bortsett fra de gangene det passet ham." Hva slags virkemiddel brukes her?',
        options: [
          { id: 'a', text: 'Metafor', isCorrect: false },
          { id: 'b', text: 'Verbal ironi', isCorrect: true },
          { id: 'c', text: 'Situasjonsironi', isCorrect: false },
          { id: 'd', text: 'Symbol', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Dette er verbal ironi. Forfatteren sier tilsynelatende noe positivt ("aldri hadde løyet") men undergraver det umiddelbart ("bortsett fra de gangene det passet ham"). Det som tilsynelatende er ros, avsløres som kritikk.',
      },
    },

    // ========== SEKSJON 4: Intertekstualitet ==========
    {
      id: 'norsk-vg1-2-5-n-section4',
      type: 'text',
      content: `## Tekster som snakker med tekster

Ingen tekst eksisterer i et vakuum. Alle tekster er påvirket av andre tekster, refererer til dem, leker med dem. Dette kaller vi intertekstualitet.

Et sitat er den mest direkte formen - en tekst gjengir ordrett noe fra en annen tekst. Men intertekstualitet kan være mye subtilere. En allusjon er en hentydning til noe kjent uten direkte sitat. Når noen skriver om "en Judas i gruppen", alluderer de til Bibelen uten å sitere den direkte.

Parodi etterligner en tekst eller stil for komisk effekt. "Ringansen i Bansen" er en parodi på "Ringenes Herre". Pastisj etterligner uten nødvendigvis å være komisk - noen skriver "i stilen til" en annen forfatter.

Hvorfor bruke intertekstualitet? Det skaper lag av mening. Leseren som kjenner referansen, får en rikere opplevelse. Det plasserer teksten i en tradisjon, i samtale med andre tekster. Og det kan skape humor, kritikk eller hyllest.

Men det er også en risiko: Hvis leseren ikke kjenner referansen, går poenget tapt. Intertekstualitet forutsetter en leser med kulturell kunnskap. Det kan være ekskluderende, men det kan også være en invitasjon til å utforske mer - å spore opp referansene og oppdage nye tekster.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg1-2-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'En moderne forfatter skriver en roman der hovedpersonen reiser rundt i verden og møter ulike fristelser, tydelig inspirert av Odysseen. Hva er dette et eksempel på?',
        options: [
          { id: 'a', text: 'Allegori', isCorrect: false },
          { id: 'b', text: 'Symbol', isCorrect: false },
          { id: 'c', text: 'Intertekstualitet', isCorrect: true },
          { id: 'd', text: 'Ironi', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Når en tekst bevisst spiller på, refererer til eller bruker elementer fra en annen tekst (her Homers Odysseen), er det intertekstualitet. Leseren som kjenner Odysseen, vil se parallellene og få en rikere lesning.',
      },
    },

    // ========== SEKSJON 5: Å bruke virkemidler ==========
    {
      id: 'norsk-vg1-2-5-n-section5',
      type: 'text',
      content: `## Fra analyse til egen skriving

Å kjenne virkemidlene gjør deg til en bedre leser. Men det gjør deg også til en bedre skribent. Når du skriver selv, har du nå en verktøykasse å velge fra.

Men vær forsiktig. Virkemidler er som krydder i maten - en god mengde løfter retten, for mye ødelegger den. En metafor som passer perfekt, kan ta pusten fra leseren. Ti metaforer på en side blir utmattende.

Det viktigste er at virkemiddelet tjener teksten, ikke omvendt. Spør deg selv: Hva prøver jeg å oppnå? Vil en metafor gjøre dette klarere, mer levende, mer følelsesmessig? Eller vil direkte språk fungere bedre her?

Noen råd: Les mye og legg merke til hvordan gode forfattere bruker virkemidler. Prøv å skrive med ett virkemiddel om gangen - én tekst der du fokuserer på metaforer, en annen der du eksperimenterer med ironi. Og les det du har skrevet høyt - ører oppfatter ofte det øyne overser.

Til slutt: Virkemidler er ikke bare pynt. De former mening. En metafor sier noe annet enn en direkte beskrivelse. Ironi skaper avstand. Symboler antyder mer enn de sier. Hvordan du skriver, er en del av hva du skriver.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg1-2-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg1-2-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva er det viktigste å huske når du bruker litterære virkemidler i egen skriving?',
        options: [
          { id: 'a', text: 'Å bruke så mange virkemidler som mulig', isCorrect: false },
          { id: 'b', text: 'At virkemiddelet skal tjene teksten og forsterke budskapet', isCorrect: true },
          { id: 'c', text: 'Å unngå virkemidler helt for å skrive klart', isCorrect: false },
          { id: 'd', text: 'Å bare bruke virkemidler du selv har funnet på', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Virkemidler er verktøy som skal tjene teksten. Det viktigste er ikke å bruke mange virkemidler, men å bruke de riktige virkemidlene på riktig sted for å forsterke det du prøver å formidle. Noen ganger er direkte språk best.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg1-2-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Din verktøykasse for litterære virkemidler

Du har nå fått oversikt over de viktigste litterære virkemidlene. Her er det viktigste å huske:

Troper (billedspråk) overfører betydning. Metafor sier at noe er noe annet ("Livet er en reise"). Sammenligning bruker "som" eller "lik". Metonymi erstatter med noe nærliggende ("Kronen" for kongen). Personifikasjon gir menneskelige egenskaper til det ikke-menneskelige.

Symboler er konkrete ting som representerer abstrakte ideer. Litterære symboler er ofte flertydige - de kan bety flere ting samtidig. Allegori er når hele fortellingen fungerer som et utvidet symbol.

Ironi handler om gap - mellom det som sies og menes (verbal ironi), mellom forventning og resultat (situasjonsironi), eller mellom hva leseren og karakterene vet (dramatisk ironi).

Intertekstualitet er når tekster refererer til andre tekster - gjennom sitat, allusjon, parodi eller pastisj. Dette skaper lag av mening for leseren som kjenner referansene.

I egen skriving: Bruk virkemidler bevisst og med måte. Spør deg selv hva du vil oppnå. La virkemiddelet tjene teksten, ikke omvendt.`,
    },
  ],
  exercises: [],
};

