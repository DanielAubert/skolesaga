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
        task: 'Test deg selv på rim, rytme og form:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-2-n-quiz1-q0',
            task: 'Et dikt har rimskjemaet abab (linje 1 rimer på linje 3, linje 2 rimer på linje 4). Hva kalles dette?',
            options: [
              { id: 'a', text: 'Parrim', isCorrect: false },
              { id: 'b', text: 'Kryssrim', isCorrect: true },
              { id: 'c', text: 'Klammerrim', isCorrect: false },
              { id: 'd', text: 'Frie vers', isCorrect: false },
            ],
            solution: 'Kryssrim (abab) betyr at annenhver linje rimer. Det er et av de vanligste rimskjemaene i tradisjonell lyrikk.',
          },
          {
            id: 'norsk-vg1-2-2-n-quiz1-q1',
            task: 'Et dikt har rimskjemaet abba. Hva kalles dette?',
            options: [
              { id: 'a', text: 'Kryssrim', isCorrect: false },
              { id: 'b', text: 'Parrim', isCorrect: false },
              { id: 'c', text: 'Klammerrim', isCorrect: true },
              { id: 'd', text: 'Halvrim', isCorrect: false },
            ],
            solution: 'Klammerrim (abba) er når første og siste linje rimer, og de to midterste rimer med hverandre. Rimene "omslutter" midten.',
          },
          {
            id: 'norsk-vg1-2-2-n-quiz1-q2',
            task: 'Betyr det at et dikt uten rim mangler form?',
            options: [
              { id: 'a', text: 'Ja - uten rim er det ikke ordentlig dikt', isCorrect: false },
              { id: 'b', text: 'Nei - frie vers bruker andre virkemidler enn rim', isCorrect: true },
              { id: 'c', text: 'Ja - form betyr rim og rytme', isCorrect: false },
              { id: 'd', text: 'Nei - moderne dikt har aldri rim', isCorrect: false },
            ],
            solution: 'Frie vers har form, men dikteren velger andre virkemidler enn rim. Linjeskift, rytme og billedspråk skaper struktur.',
          },
        ],
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
        task: 'Test deg selv på billedspråk i lyrikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-2-n-quiz2-q0',
            task: '"Trærne danset i vinden." Hvilket virkemiddel er dette?',
            options: [
              { id: 'a', text: 'Metafor', isCorrect: false },
              { id: 'b', text: 'Sammenligning', isCorrect: false },
              { id: 'c', text: 'Besjeling (personifikasjon)', isCorrect: true },
              { id: 'd', text: 'Symbol', isCorrect: false },
            ],
            solution: 'Besjeling gir menneskelige egenskaper til noe ikke-menneskelig. Trær kan ikke danse - det er en menneskelig handling.',
          },
          {
            id: 'norsk-vg1-2-2-n-quiz2-q1',
            task: '"Hjertet mitt er en stein." Hvilket virkemiddel brukes her?',
            options: [
              { id: 'a', text: 'Sammenligning', isCorrect: false },
              { id: 'b', text: 'Besjeling', isCorrect: false },
              { id: 'c', text: 'Metafor', isCorrect: true },
              { id: 'd', text: 'Symbol', isCorrect: false },
            ],
            solution: 'En metafor sier at noe er noe annet uten å bruke "som" eller "lik". Steinens egenskaper (hard, kald, tung) overføres til hjertet.',
          },
          {
            id: 'norsk-vg1-2-2-n-quiz2-q2',
            task: 'Hva er forskjellen mellom en metafor og en sammenligning?',
            options: [
              { id: 'a', text: 'Metaforer er bedre enn sammenligninger', isCorrect: false },
              { id: 'b', text: 'Sammenligninger bruker "som" eller "lik", metaforer påstår identitet', isCorrect: true },
              { id: 'c', text: 'Metaforer brukes bare i lyrikk', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: '"Hjertet er en stein" er en metafor (påstår identitet). "Hjertet er som en stein" er en sammenligning (innrømmer likhet). Metaforen er ofte mer kraftfull.',
          },
        ],
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
        task: 'Test deg selv på lydlige virkemidler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-2-n-quiz3-q0',
            task: '"Ser du solen synke saklig / over skogen står den stille." Hvilket lydlig virkemiddel dominerer?',
            options: [
              { id: 'a', text: 'Assonans (vokalrim)', isCorrect: false },
              { id: 'b', text: 'Allitterasjon (bokstavrim)', isCorrect: true },
              { id: 'c', text: 'Onomatopoetikon (lydmalende ord)', isCorrect: false },
              { id: 'd', text: 'Enjambement', isCorrect: false },
            ],
            solution: 'Allitterasjon er gjentakelse av konsonanter i begynnelsen av ord. S-lyden gjentas i "Ser", "solen", "synke", "saklig", "skogen", "står", "stille".',
          },
          {
            id: 'norsk-vg1-2-2-n-quiz3-q1',
            task: 'Ord som "sus", "brus" og "klirr" som lyder som det de betyr, kalles:',
            options: [
              { id: 'a', text: 'Allitterasjon', isCorrect: false },
              { id: 'b', text: 'Assonans', isCorrect: false },
              { id: 'c', text: 'Enjambement', isCorrect: false },
              { id: 'd', text: 'Onomatopoetikon', isCorrect: true },
            ],
            solution: 'Onomatopoetikon er ord som lyder som det de betyr - de kobler språk og verden direkte sammen.',
          },
          {
            id: 'norsk-vg1-2-2-n-quiz3-q2',
            task: 'Hva er enjambement?',
            options: [
              { id: 'a', text: 'Gjentakelse av vokallyder', isCorrect: false },
              { id: 'b', text: 'Når en setning fortsetter over linjeskiftet', isCorrect: true },
              { id: 'c', text: 'Et rim som bare nesten rimer', isCorrect: false },
              { id: 'd', text: 'En pause midt i en verselinje', isCorrect: false },
            ],
            solution: 'Enjambement er når setningen ikke slutter der linjen slutter, men fortsetter videre. Det skaper en følelse av bevegelse og noe uavsluttet.',
          },
        ],
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
        task: 'Test deg selv på det lyriske jeget:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-2-n-quiz4-q0',
            task: 'Hva menes med "det lyriske jeget" i et dikt?',
            options: [
              { id: 'a', text: 'Dikteren selv', isCorrect: false },
              { id: 'b', text: 'Stemmen som taler i diktet', isCorrect: true },
              { id: 'c', text: 'Hovedpersonen i diktet', isCorrect: false },
              { id: 'd', text: 'Leseren av diktet', isCorrect: false },
            ],
            solution: 'Det lyriske jeget er stemmen i diktet - ikke nødvendigvis dikteren selv. De kan være like, men trenger ikke å være det.',
          },
          {
            id: 'norsk-vg1-2-2-n-quiz4-q1',
            task: '"Du må ikke sitte trygt i ditt hjem." Hvem er "du" i dette diktet av Arnulf Øverland?',
            options: [
              { id: 'a', text: 'Bare Øverlands familie', isCorrect: false },
              { id: 'b', text: 'En bestemt politiker', isCorrect: false },
              { id: 'c', text: 'Alle lesere - diktet henvender seg direkte til oss alle', isCorrect: true },
              { id: 'd', text: 'Bare folk i 1936', isCorrect: false },
            ],
            solution: '"Du" henvender seg til alle lesere og skaper direkte forbindelse. Diktet ble skrevet som advarsel mot fascismen i 1936, men "du" er tidløst.',
          },
        ],
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
        task: 'Test deg selv på lyrikk gjennom tidene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-2-n-quiz5-q0',
            task: 'Hva kjennetegner overgangen fra romantisk til modernistisk lyrikk?',
            options: [
              { id: 'a', text: 'Mer fokus på rim og fast form', isCorrect: false },
              { id: 'b', text: 'Mer nasjonal begeistring og feiring', isCorrect: false },
              { id: 'c', text: 'Frie vers, fremmedgjøring og eksistensiell undring', isCorrect: true },
              { id: 'd', text: 'Kortere dikt med flere metaforer', isCorrect: false },
            ],
            solution: 'Modernismen brøt med faste former og optimistisk tone. Frie vers og eksistensielle spørsmål erstattet rim og nasjonal feiring.',
          },
          {
            id: 'norsk-vg1-2-2-n-quiz5-q1',
            task: 'Hvorfor er det viktig å lese dikt høyt?',
            options: [
              { id: 'a', text: 'Fordi læreren krever det', isCorrect: false },
              { id: 'b', text: 'Fordi mye av magien ligger i klang, rytme og lyd', isCorrect: true },
              { id: 'c', text: 'Fordi dikt er for vanskelige å lese stille', isCorrect: false },
              { id: 'd', text: 'Det er ikke viktig - stille lesing er like bra', isCorrect: false },
            ],
            solution: 'Lyrikk er ment for øret like mye som for øyet. Rim, rytme, allitterasjon og assonans oppleves best når du hører dem.',
          },
        ],
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
        task: 'Test deg selv på dramaets byggesteiner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-3-n-quiz1-q0',
            task: 'En karakter står alene på scenen og sier høyt hva han tenker. Publikum hører det, men ingen andre karakterer gjør det. Hva kalles dette?',
            options: [
              { id: 'a', text: 'Dialog', isCorrect: false },
              { id: 'b', text: 'Sceneanvisning', isCorrect: false },
              { id: 'c', text: 'Soliloquy (enesamtale)', isCorrect: true },
              { id: 'd', text: 'Prolog', isCorrect: false },
            ],
            solution: 'En soliloquy er når en karakter snakker høyt til seg selv og avslører sine tanker for publikum.',
          },
          {
            id: 'norsk-vg1-2-3-n-quiz1-q1',
            task: 'Henrik Ibsen var kjent for detaljerte sceneanvisninger. Hvorfor beskrev han stuen ned til minste detalj?',
            options: [
              { id: 'a', text: 'Han var bare nøyaktig av natur', isCorrect: false },
              { id: 'b', text: 'Fordi rommet forteller noe om menneskene som bor der', isCorrect: true },
              { id: 'c', text: 'For å gjøre det lettere for scenografen', isCorrect: false },
              { id: 'd', text: 'Fordi han ikke hadde nok dialog', isCorrect: false },
            ],
            solution: 'For Ibsen var scenografien en del av fortellingen. Rommet avslører karakterenes verdier, status og hemmeligheter.',
          },
        ],
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
        task: 'Test deg selv på dramatisk struktur:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-3-n-quiz2-q0',
            task: 'Hva er "katarsis" ifølge Aristoteles?',
            options: [
              { id: 'a', text: 'Handlingens høydepunkt', isCorrect: false },
              { id: 'b', text: 'Den tragiske heltens fall', isCorrect: false },
              { id: 'c', text: 'Følelsesmessig renselse hos publikum', isCorrect: true },
              { id: 'd', text: 'Slutten av et drama', isCorrect: false },
            ],
            solution: 'Katarsis betyr "renselse". Tragedien renset publikum for frykt og medlidenhet gjennom innlevelse i karakterenes skjebne.',
          },
          {
            id: 'norsk-vg1-2-3-n-quiz2-q1',
            task: 'Hva mente Aristoteles med "de tre enheter"?',
            options: [
              { id: 'a', text: 'Tre akter i ethvert drama', isCorrect: false },
              { id: 'b', text: 'Handlingens, tidens og stedets enhet', isCorrect: true },
              { id: 'c', text: 'Tre hovedkarakterer i tragedien', isCorrect: false },
              { id: 'd', text: 'Tre typer drama: tragedie, komedie og satire', isCorrect: false },
            ],
            solution: 'De tre enheter krevde én hovedhandling, alt innenfor 24 timer, og alt på ett sted - for å skape en konsentrert, intens opplevelse.',
          },
        ],
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
        task: 'Test deg selv på dramatisk ironi og konflikt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-3-n-quiz3-q0',
            task: 'Hva er dramatisk ironi?',
            options: [
              { id: 'a', text: 'Når en karakter sier det motsatte av det de mener', isCorrect: false },
              { id: 'b', text: 'Når publikum vet noe karakterene ikke vet', isCorrect: true },
              { id: 'c', text: 'Når handlingen tar en uventet vending', isCorrect: false },
              { id: 'd', text: 'Når dramaet har en humoristisk undertone', isCorrect: false },
            ],
            solution: 'Dramatisk ironi oppstår når publikum har informasjon som karakterene mangler - som i Romeo og Julie.',
          },
          {
            id: 'norsk-vg1-2-3-n-quiz3-q1',
            task: 'I Ibsens "Et dukkehjem" kjemper Nora mot samfunnets forventninger og sin egen identitet. Hva er dette et eksempel på?',
            options: [
              { id: 'a', text: 'Bare ytre konflikt', isCorrect: false },
              { id: 'b', text: 'Bare indre konflikt', isCorrect: false },
              { id: 'c', text: 'Kombinasjon av ytre og indre konflikt', isCorrect: true },
              { id: 'd', text: 'Dramatisk ironi', isCorrect: false },
            ],
            solution: 'Den ytre konflikten er mellom Nora og samfunnet. Den indre konflikten er Noras kamp for å forstå hvem hun egentlig er. De beste dramaene kombinerer begge.',
          },
        ],
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
        task: 'Test deg selv på moderne drama:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-3-n-quiz4-q0',
            task: 'Hva kjennetegner Bertolt Brechts "episke teater"?',
            options: [
              { id: 'a', text: 'Det fokuserer på følelsesmessig innlevelse', isCorrect: false },
              { id: 'b', text: 'Det bryter med illusjonen for å vekke publikum til refleksjon', isCorrect: true },
              { id: 'c', text: 'Det følger Aristoteles tre enheter strengt', isCorrect: false },
              { id: 'd', text: 'Det fremstiller en meningsløs verden uten handling', isCorrect: false },
            ],
            solution: 'Brecht brøt bevisst med illusjonen for å vekke kritisk refleksjon og politisk engasjement, ikke innlevelse.',
          },
          {
            id: 'norsk-vg1-2-3-n-quiz4-q1',
            task: 'Hva kjennetegner absurd teater, som Becketts "Mens vi venter på Godot"?',
            options: [
              { id: 'a', text: 'Kompleks intrige med mange karakterer', isCorrect: false },
              { id: 'b', text: 'Historiske dramaer med sosial kritikk', isCorrect: false },
              { id: 'c', text: 'Minimal handling som fremstiller en verden uten mening', isCorrect: true },
              { id: 'd', text: 'Politisk teater som vil mobilisere publikum', isCorrect: false },
            ],
            solution: 'I absurd teater skjer nesten ingenting. Dialogen går i ring, og poenget er nettopp meningsløsheten. To menn venter på noen som aldri kommer.',
          },
        ],
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
        task: 'Test deg selv på forholdet mellom tekst og scene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-3-n-quiz5-q0',
            task: 'Hvorfor kan klassiske teaterstykker fortsatt føles relevante i dag?',
            options: [
              { id: 'a', text: 'Fordi de handler om historiske hendelser', isCorrect: false },
              { id: 'b', text: 'Fordi de kan tolkes på nye måter av hver generasjon', isCorrect: true },
              { id: 'c', text: 'Fordi språket er tidløst', isCorrect: false },
              { id: 'd', text: 'Fordi publikum liker nostalgi', isCorrect: false },
            ],
            solution: 'Klassikere tar opp universelle temaer som kan tolkes på nye måter. Hver generasjon finner sin mening i de samme ordene.',
          },
          {
            id: 'norsk-vg1-2-3-n-quiz5-q1',
            task: 'Hvorfor sier vi at et drama bare er "halve verket" når du leser det?',
            options: [
              { id: 'a', text: 'Fordi halvparten av teksten mangler', isCorrect: false },
              { id: 'b', text: 'Fordi den andre halvparten er forestillingen - skuespill, regi, scenografi', isCorrect: true },
              { id: 'c', text: 'Fordi drama er kortere enn romaner', isCorrect: false },
              { id: 'd', text: 'Fordi du må lese det to ganger', isCorrect: false },
            ],
            solution: 'Et drama er ment å bli fremført. Skuespillernes tolkning, regissørens visjon, scenografi og lyssetting utgjør den andre halvparten av verket.',
          },
        ],
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
        task: 'Test deg selv på fortellerstemmer i romaner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-4-n-quiz1-q0',
            task: '"Hun tenkte på samtalen med moren. Lars, på sin side, lurte på om han skulle ringe." Hvilken fortellerstemme?',
            options: [
              { id: 'a', text: 'Jeg-forteller', isCorrect: false },
              { id: 'b', text: 'Tredjeperson begrenset', isCorrect: false },
              { id: 'c', text: 'Allvitende forteller', isCorrect: true },
              { id: 'd', text: 'Upålitelig forteller', isCorrect: false },
            ],
            solution: 'Den allvitende fortelleren har innsikt i flere karakterers tanker. Her vet vi hva både "hun" og Lars tenker.',
          },
          {
            id: 'norsk-vg1-2-4-n-quiz1-q1',
            task: 'En forteller hevder å være uskyldig, men leseren finner stadig flere tegn på at hen lyver. Hva kalles denne typen forteller?',
            options: [
              { id: 'a', text: 'Allvitende forteller', isCorrect: false },
              { id: 'b', text: 'Tredjeperson begrenset', isCorrect: false },
              { id: 'c', text: 'Upålitelig forteller', isCorrect: true },
              { id: 'd', text: 'Objektiv forteller', isCorrect: false },
            ],
            solution: 'En upålitelig forteller lyver, misforstår eller skjuler sannheten. Leseren må "lese mellom linjene" for å forstå hva som egentlig skjer.',
          },
        ],
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
        task: 'Test deg selv på tid og komposisjon i romaner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-4-n-quiz2-q0',
            task: 'En roman begynner med at hovedpersonen står ved en grav. Så hopper den tilbake til barndommen. Hva kalles tilbakeblikket?',
            options: [
              { id: 'a', text: 'Prolepse', isCorrect: false },
              { id: 'b', text: 'Analepse', isCorrect: true },
              { id: 'c', text: 'In medias res', isCorrect: false },
              { id: 'd', text: 'Klimaks', isCorrect: false },
            ],
            solution: 'Analepse (tilbakeblikk) er når fortellingen hopper bakover i tid for å forklare bakgrunn.',
          },
          {
            id: 'norsk-vg1-2-4-n-quiz2-q1',
            task: '"Hadde hun visst hva som ventet, ville hun aldri åpnet den døren." Hva kalles denne teknikken?',
            options: [
              { id: 'a', text: 'Analepse (tilbakeblikk)', isCorrect: false },
              { id: 'b', text: 'Prolepse (frempek)', isCorrect: true },
              { id: 'c', text: 'In medias res', isCorrect: false },
              { id: 'd', text: 'Kronologisk fortelling', isCorrect: false },
            ],
            solution: 'Prolepse (frempek) antyder hva som skal skje i fremtiden. Det skaper spenning fordi vi vet at noe forferdelig kommer.',
          },
        ],
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
        task: 'Test deg selv på karakterer i romaner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-4-n-quiz3-q0',
            task: 'Hva kjennetegner en "rund" karakter?',
            options: [
              { id: 'a', text: 'En karakter som er fysisk beskrevet i detalj', isCorrect: false },
              { id: 'b', text: 'En karakter som er kompleks og utvikler seg', isCorrect: true },
              { id: 'c', text: 'En karakter som opptrer i mange scener', isCorrect: false },
              { id: 'd', text: 'En karakter som er hovedperson i romanen', isCorrect: false },
            ],
            solution: 'Runde karakterer er komplekse, har flere sider og utvikler seg. Flate karakterer er enkle og forutsigbare.',
          },
          {
            id: 'norsk-vg1-2-4-n-quiz3-q1',
            task: 'Hva er forskjellen mellom direkte og indirekte karakterisering?',
            options: [
              { id: 'a', text: 'Direkte er i dialog, indirekte er i beskrivelse', isCorrect: false },
              { id: 'b', text: 'Direkte forteller oss hvem karakteren er, indirekte viser oss det gjennom handling', isCorrect: true },
              { id: 'c', text: 'Direkte er sann, indirekte er usann', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: '"Han var sjalu" er direkte. At karakteren stalker eksen på sosiale medier er indirekte - vi ser det gjennom handling i stedet for at fortelleren sier det.',
          },
        ],
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
        task: 'Test deg selv på tema og budskap i romaner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-4-n-quiz4-q0',
            task: 'Hva er forskjellen mellom handling og tema i en roman?',
            options: [
              { id: 'a', text: 'Handling er begynnelsen, tema er slutten', isCorrect: false },
              { id: 'b', text: 'Handling er det som skjer, tema er de underliggende ideene', isCorrect: true },
              { id: 'c', text: 'Handling er objektivt, tema er subjektivt', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Handling er de konkrete hendelsene - hva som skjer i romanen. Tema er de underliggende ideene og spørsmålene romanen utforsker. En roman kan handle om en kvinne som forlater ektemannen (handling), mens temaet er identitet og frihet.',
          },
          {
            id: 'norsk-vg1-2-4-n-quiz4-q1',
            task: 'Et motiv er et gjentakende element i en roman. Hva er forholdet mellom motiv og tema?',
            options: [
              { id: 'a', text: 'Motiv og tema er det samme', isCorrect: false },
              { id: 'b', text: 'Motiver er konkrete gjentagelser som peker mot det abstrakte temaet', isCorrect: true },
              { id: 'c', text: 'Temaet bestemmes alltid av det første motivet i teksten', isCorrect: false },
              { id: 'd', text: 'Motiver finnes bare i lyrikk, ikke i romaner', isCorrect: false },
            ],
            solution: 'Motiver er gjentakende, konkrete elementer (bilder, situasjoner, handlinger) som bygger opp under og peker mot romanens tema. For eksempel kan gjentatte bilder av stengte dører (motiv) peke mot temaet isolasjon.',
          },
          {
            id: 'norsk-vg1-2-4-n-quiz4-q2',
            task: 'En roman handler om en ung kvinne som kjemper for å bli lege på 1800-tallet. Hva er mest sannsynlig romanens tema?',
            options: [
              { id: 'a', text: 'Medisinstudiet på 1800-tallet', isCorrect: false },
              { id: 'b', text: 'Hvordan man blir lege', isCorrect: false },
              { id: 'c', text: 'Kjønnsroller, frigjøring og kampen mot undertrykkelse', isCorrect: true },
              { id: 'd', text: 'Sykdommer i det viktorianske England', isCorrect: false },
            ],
            solution: 'Temaet er ikke handlingen selv (å bli lege), men de underliggende ideene: kjønnsroller, frigjøring og kampen mot samfunnets begrensninger. Handlingen er bærer av temaet, ikke temaet i seg selv.',
          },
        ],
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
        task: 'Test deg selv på kontekst og lesning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-4-n-quiz5-q0',
            task: 'Hvorfor er det nyttig å kjenne den historiske konteksten når du leser en roman?',
            options: [
              { id: 'a', text: 'For å vite hva som er sant og usant i romanen', isCorrect: false },
              { id: 'b', text: 'For å forstå forfatterens valg og tekstens betydning i sin tid', isCorrect: true },
              { id: 'c', text: 'For å kunne kritisere forfatteren', isCorrect: false },
              { id: 'd', text: 'Det er ikke nyttig - romaner bør leses uavhengig av kontekst', isCorrect: false },
            ],
            solution: 'Historisk kontekst hjelper oss å forstå hvorfor forfatteren gjorde de valgene de gjorde, hva teksten betydde for lesere i sin samtid, og hvilke konvensjoner den fulgte eller brøt med. Dette beriker tolkningen.',
          },
          {
            id: 'norsk-vg1-2-4-n-quiz5-q1',
            task: 'Wayne C. Booth skrev om "den underforståtte forfatter". Hva menes med dette begrepet?',
            options: [
              { id: 'a', text: 'Forfatteren som skjuler identiteten sin bak et pseudonym', isCorrect: false },
              { id: 'b', text: 'Fortelleren i romanen', isCorrect: false },
              { id: 'c', text: 'De verdiene og holdningene som ligger implisitt i teksten', isCorrect: true },
              { id: 'd', text: 'En medforfatter som ikke er navngitt', isCorrect: false },
            ],
            solution: 'Den underforståtte forfatter er ikke en virkelig person, men det settet av verdier, holdninger og normer som teksten implisitt formidler. Når vi leser, går vi i dialog med disse verdiene, selv om de ikke er uttrykt direkte.',
          },
          {
            id: 'norsk-vg1-2-4-n-quiz5-q2',
            task: 'Hamsuns "Sult" (1890) brøt med naturalismens litterære ideal. Hvordan?',
            options: [
              { id: 'a', text: 'Han skrev om fattige mennesker i stedet for overklassen', isCorrect: false },
              { id: 'b', text: 'Han brukte dialekt i stedet for riksmål', isCorrect: false },
              { id: 'c', text: 'Han lot hovedpersonen handle irrasjonelt, i strid med naturalismens vekt på vitenskapelig forklaring', isCorrect: true },
              { id: 'd', text: 'Han skrev kortere romaner enn det som var vanlig', isCorrect: false },
            ],
            solution: 'Naturalismen vektla vitenskapelig forklaring av menneskets handlinger - arv og miljø skulle bestemme alt. Hamsun brøt med dette ved å skrive en roman der hovedpersonen handler uforklarlig og irrasjonelt, noe som var et opprør mot tidens konvensjoner.',
          },
          {
            id: 'norsk-vg1-2-4-n-quiz5-q3',
            task: 'Hva menes med at romaner kan fungere som både "vinduer" og "speil"?',
            options: [
              { id: 'a', text: 'De er laget av papir som kan reflektere lys', isCorrect: false },
              { id: 'b', text: 'Vinduer gir innsyn i andres liv, speil lar oss gjenkjenne oss selv', isCorrect: true },
              { id: 'c', text: 'Vinduer er skjønnlitteratur, speil er sakprosa', isCorrect: false },
              { id: 'd', text: 'Vinduer handler om det ytre, speil om det indre i romanen', isCorrect: false },
            ],
            solution: 'Romaner er vinduer fordi de gir oss innsyn i andre liv, tider og verdener vi aldri selv vil oppleve. De er speil fordi vi i karakterenes kamper gjenkjenner våre egne, i deres feil ser vi våre blinde flekker, og i deres triumfer finner vi håp.',
          },
        ],
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
        task: 'Test deg selv på troper og billedspråk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-5-n-quiz1-q0',
            task: '"Tiden er penger." Hva slags virkemiddel er dette?',
            options: [
              { id: 'a', text: 'Sammenligning', isCorrect: false },
              { id: 'b', text: 'Metafor', isCorrect: true },
              { id: 'c', text: 'Metonymi', isCorrect: false },
              { id: 'd', text: 'Personifikasjon', isCorrect: false },
            ],
            solution: 'Dette er en metafor fordi den sier at noe er noe annet uten å bruke sammenligningsord som "som" eller "lik". Tid og penger er ikke det samme, men metaforen overfører egenskaper ved penger (verdi, knapphet) til tid.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz1-q1',
            task: '"Hjertet mitt er som en stein." Hva slags virkemiddel er dette?',
            options: [
              { id: 'a', text: 'Metafor', isCorrect: false },
              { id: 'b', text: 'Personifikasjon', isCorrect: false },
              { id: 'c', text: 'Sammenligning (simile)', isCorrect: true },
              { id: 'd', text: 'Metonymi', isCorrect: false },
            ],
            solution: 'Dette er en sammenligning (simile) fordi den bruker sammenligningsordet "som". Metaforen ville vært "Hjertet mitt er en stein" - uten "som". Forskjellen er liten, men viktig: sammenligningen beholder et skille mellom de to tingene.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz1-q2',
            task: '"Kronen har bestemt at skatten økes." Hva slags virkemiddel brukes her?',
            options: [
              { id: 'a', text: 'Personifikasjon', isCorrect: false },
              { id: 'b', text: 'Metafor', isCorrect: false },
              { id: 'c', text: 'Allegori', isCorrect: false },
              { id: 'd', text: 'Metonymi', isCorrect: true },
            ],
            solution: 'Metonymi erstatter noe med noe nærliggende. "Kronen" brukes i stedet for kongen/monarkiet - kronen er et konkret objekt som er knyttet til kongemakten. Det er ikke en metafor fordi kronen faktisk tilhører kongen, den er nærliggende, ikke overført.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz1-q3',
            task: '"Stormen hylte og rev rasende i trærne." Hva slags virkemiddel brukes her?',
            options: [
              { id: 'a', text: 'Personifikasjon - stormen gis menneskelige egenskaper', isCorrect: true },
              { id: 'b', text: 'Metafor - stormen sammenlignes med et dyr', isCorrect: false },
              { id: 'c', text: 'Metonymi - stormen står for noe annet', isCorrect: false },
              { id: 'd', text: 'Sammenligning - stormen likner en person', isCorrect: false },
            ],
            solution: 'Personifikasjon gir menneskelige egenskaper til noe ikke-menneskelig. Stormen kan ikke bokstavelig "hyle" eller være "rasende" - dette er menneskelige handlinger og følelser overført til et naturfenomen. Det gjør beskrivelsen levende og følelsesladet.',
          },
        ],
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
        task: 'Test deg selv på symbol og allegori:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-5-n-quiz2-q0',
            task: 'I en novelle går hovedpersonen forbi et vindu som aldri åpnes. Vinduet nevnes flere ganger. Hva kan dette være et eksempel på?',
            options: [
              { id: 'a', text: 'Metafor', isCorrect: false },
              { id: 'b', text: 'Ironi', isCorrect: false },
              { id: 'c', text: 'Symbol', isCorrect: true },
              { id: 'd', text: 'Metonymi', isCorrect: false },
            ],
            solution: 'Et vindu som aldri åpnes og som nevnes gjentatte ganger, fungerer som et symbol. Det kan representere isolasjon, manglende åpenhet mot omverdenen, eller motvilje mot forandring. Symboler er konkrete elementer som står for noe abstrakt.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz2-q1',
            task: 'Hva er en allegori?',
            options: [
              { id: 'a', text: 'En kort fortelling med overraskende slutt', isCorrect: false },
              { id: 'b', text: 'En utvidet metafor der hele fortellingen representerer noe annet', isCorrect: true },
              { id: 'c', text: 'Et symbol som bare forekommer én gang i teksten', isCorrect: false },
              { id: 'd', text: 'En sammenligning mellom to ulike tekster', isCorrect: false },
            ],
            solution: 'Allegori er en utvidet metafor der hele fortellingen representerer noe annet. Dyrefabler er klassiske allegorier der dyrene representerer mennesketyper. "Ringenes Herre" kan leses som en allegori der ringen symboliserer maktbegjær og korrupsjon.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz2-q2',
            task: 'I Ibsens "Vildanden" er den skadeskutte villanden et sentralt element. Hva gjør den til et godt litterært symbol?',
            options: [
              { id: 'a', text: 'Den er uvanlig - villender er sjeldne i litteraturen', isCorrect: false },
              { id: 'b', text: 'Den er flertydig og kan bety ulike ting for ulike lesere', isCorrect: true },
              { id: 'c', text: 'Den er lett å forstå for alle lesere', isCorrect: false },
              { id: 'd', text: 'Den forekommer bare én gang i stykket', isCorrect: false },
            ],
            solution: 'Gode litterære symboler er ofte flertydige. Villanden kan symbolisere Hedvig (også "skadet"), hele familien som lever i et kunstig miljø, eller menneskets behov for illusjoner. Denne flertydigheten gjør symbolet rikt og interessant.',
          },
        ],
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
        task: 'Test deg selv på ironi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-5-n-quiz3-q0',
            task: 'En forfatter beskriver en karakter som "den høyt respekterte herr Hansen som aldri hadde løyet - bortsett fra de gangene det passet ham." Hva slags virkemiddel brukes her?',
            options: [
              { id: 'a', text: 'Metafor', isCorrect: false },
              { id: 'b', text: 'Verbal ironi', isCorrect: true },
              { id: 'c', text: 'Situasjonsironi', isCorrect: false },
              { id: 'd', text: 'Symbol', isCorrect: false },
            ],
            solution: 'Dette er verbal ironi. Forfatteren sier tilsynelatende noe positivt ("aldri hadde løyet") men undergraver det umiddelbart ("bortsett fra de gangene det passet ham"). Det som tilsynelatende er ros, avsløres som kritikk.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz3-q1',
            task: 'En brannstasjon brenner ned til grunnen. Hva slags ironi er dette?',
            options: [
              { id: 'a', text: 'Verbal ironi', isCorrect: false },
              { id: 'b', text: 'Dramatisk ironi', isCorrect: false },
              { id: 'c', text: 'Situasjonsironi', isCorrect: true },
              { id: 'd', text: 'Sarkasme', isCorrect: false },
            ],
            solution: 'Situasjonsironi oppstår når det motsatte av det forventede skjer. En brannstasjon skal beskytte mot brann, men brenner selv ned. Kontrasten mellom forventning og virkelighet skaper den ironiske effekten.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz3-q2',
            task: 'I en roman vet leseren at brevet aldri kom frem, mens hovedpersonen sitter og venter på svar. Hva slags ironi er dette?',
            options: [
              { id: 'a', text: 'Verbal ironi - karakteren sier noe annet enn hen mener', isCorrect: false },
              { id: 'b', text: 'Situasjonsironi - det motsatte av det forventede skjer', isCorrect: false },
              { id: 'c', text: 'Sarkasme - forfatteren er sarkastisk', isCorrect: false },
              { id: 'd', text: 'Dramatisk ironi - leseren vet noe karakteren ikke vet', isCorrect: true },
            ],
            solution: 'Dramatisk ironi oppstår når leseren eller publikum vet noe som karakterene ikke vet. Vi vet at brevet aldri kom frem, men karakteren vet det ikke. Dette skaper spenning og engasjement hos leseren.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz3-q3',
            task: 'Alexander Kielland brukte ironi som et "våpen". Hva oppnådde han med dette?',
            options: [
              { id: 'a', text: 'Han underholdt leserne med humor', isCorrect: false },
              { id: 'b', text: 'Han avslørte borgerskapets hykleri ved å beskrive det med tilsynelatende beundring', isCorrect: true },
              { id: 'c', text: 'Han unngikk sensur ved å skrive uklart', isCorrect: false },
              { id: 'd', text: 'Han viste at han var smartere enn karakterene sine', isCorrect: false },
            ],
            solution: 'Kielland brukte ironi til å avsløre borgerskapets hykleri. Ved å beskrive noe med tilsynelatende beundring, lot han det kritikkverdige komme til syne for oppmerksomme lesere. Leseren som oppfatter ironien, blir medskyldige i kritikken.',
          },
        ],
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
        task: 'Test deg selv på intertekstualitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-5-n-quiz4-q0',
            task: 'En moderne forfatter skriver en roman der hovedpersonen reiser rundt i verden og møter ulike fristelser, tydelig inspirert av Odysseen. Hva er dette et eksempel på?',
            options: [
              { id: 'a', text: 'Allegori', isCorrect: false },
              { id: 'b', text: 'Symbol', isCorrect: false },
              { id: 'c', text: 'Intertekstualitet', isCorrect: true },
              { id: 'd', text: 'Ironi', isCorrect: false },
            ],
            solution: 'Når en tekst bevisst spiller på, refererer til eller bruker elementer fra en annen tekst (her Homers Odysseen), er det intertekstualitet. Leseren som kjenner Odysseen, vil se parallellene og få en rikere lesning.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz4-q1',
            task: 'Noen skriver om "en Judas i gruppen". Hva slags intertekstualitet er dette?',
            options: [
              { id: 'a', text: 'Parodi - det er en komisk etterligning', isCorrect: false },
              { id: 'b', text: 'Pastisj - det er en stiletterligning', isCorrect: false },
              { id: 'c', text: 'Allusjon - en hentydning til noe kjent uten direkte sitat', isCorrect: true },
              { id: 'd', text: 'Sitat - det er en direkte gjengivelse', isCorrect: false },
            ],
            solution: 'En allusjon er en hentydning til noe kjent uten direkte sitat. "En Judas" henspiller på Bibelen og Judas som forrådte Jesus, men uten å sitere Bibelen direkte. Leseren som kjenner referansen, forstår at det handler om en forræder.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz4-q2',
            task: 'Hva er forskjellen mellom parodi og pastisj?',
            options: [
              { id: 'a', text: 'Parodi etterligner for komisk effekt, pastisj etterligner uten nødvendigvis å være komisk', isCorrect: true },
              { id: 'b', text: 'Parodi er muntlig, pastisj er skriftlig', isCorrect: false },
              { id: 'c', text: 'Parodi er nyere enn pastisj', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell - begge er humor', isCorrect: false },
            ],
            solution: 'Parodi etterligner en tekst eller stil for komisk effekt, ofte med et satirisk formål. Pastisj etterligner også en stil, men uten nødvendigvis å gjøre narr av den. Det kan være en hyllest, eller et eksperiment med å skrive "i stilen til" en annen forfatter.',
          },
        ],
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
        task: 'Test deg selv på bruk av virkemidler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg1-2-5-n-quiz5-q0',
            task: 'Hva er det viktigste å huske når du bruker litterære virkemidler i egen skriving?',
            options: [
              { id: 'a', text: 'Å bruke så mange virkemidler som mulig', isCorrect: false },
              { id: 'b', text: 'At virkemiddelet skal tjene teksten og forsterke budskapet', isCorrect: true },
              { id: 'c', text: 'Å unngå virkemidler helt for å skrive klart', isCorrect: false },
              { id: 'd', text: 'Å bare bruke virkemidler du selv har funnet på', isCorrect: false },
            ],
            solution: 'Virkemidler er verktøy som skal tjene teksten. Det viktigste er ikke å bruke mange virkemidler, men å bruke de riktige virkemidlene på riktig sted for å forsterke det du prøver å formidle. Noen ganger er direkte språk best.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz5-q1',
            task: 'Teksten sammenligner virkemidler med "krydder i maten". Hva betyr denne sammenligningen?',
            options: [
              { id: 'a', text: 'Virkemidler smaker godt', isCorrect: false },
              { id: 'b', text: 'Man bør aldri bruke virkemidler', isCorrect: false },
              { id: 'c', text: 'Riktig mengde løfter teksten, for mye ødelegger den', isCorrect: true },
              { id: 'd', text: 'Virkemidler er like viktige som krydder', isCorrect: false },
            ],
            solution: 'Sammenligningen betyr at virkemidler, som krydder, bør brukes med måte. En velplassert metafor kan ta pusten fra leseren, men ti metaforer på en side blir utmattende. Balansen mellom virkemiddelbruk og direkte språk er nøkkelen.',
          },
          {
            id: 'norsk-vg1-2-5-n-quiz5-q2',
            task: 'Hvorfor sier teksten at "hvordan du skriver, er en del av hva du skriver"?',
            options: [
              { id: 'a', text: 'Fordi rettskriving er viktig', isCorrect: false },
              { id: 'b', text: 'Fordi lengden på teksten bestemmer innholdet', isCorrect: false },
              { id: 'c', text: 'Fordi virkemidler ikke er pynt, men former meningen - en metafor sier noe annet enn en direkte beskrivelse', isCorrect: true },
              { id: 'd', text: 'Fordi man alltid må bruke formelt språk', isCorrect: false },
            ],
            solution: 'Virkemidler er ikke bare dekorasjon - de former selve meningen. En metafor sier noe annet enn en direkte beskrivelse, ironi skaper avstand, symboler antyder mer enn de sier. Valget av virkemidler er derfor en del av det du kommuniserer.',
          },
        ],
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

