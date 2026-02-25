/**
 * Naturfag 10 - Narrativ versjon DEL 7
 * Seksjon 7: Seksuell og reproduktiv helse (7.1-7.5)
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1 NARRATIV: Pubertet og hormonelle endringer
// ============================================================================

export const CHAPTER_NATURFAG_10_7_1_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-7-1-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '7.1',
  title: 'Pubertet og hormonelle endringer',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hva som skjer i kroppen din når puberteten setter inn, hvilke hormoner som styrer utviklingen, og hvorfor følelsene dine kan svinge som en berg-og-dal-bane.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive pubertet og de viktigste hormonelle endringene',
    'forklare forskjellen på østrogen, progesteron og testosteron',
    'forstå at puberteten innebærer både fysiske og følelsesmessige endringer',
  ],
  linkedChapterId: 'naturfag-10-7-1',
  content: [
    {
      id: 'naturfag-10-7-1-n-intro',
      type: 'text',
      content: `## Kroppen i forandring

Kanskje har du lagt merke til at kroppen din har begynt å forandre seg. Plutselig vokser du flere centimeter på kort tid, klærne passer ikke lenger, og du oppdager nye kroppslukter du aldri har hatt før. Følelsene dine svinger mer enn vanlig, og noen dager føles alt bare rart. Hvis du kjenner deg igjen i noe av dette, er det ikke rart i det hele tatt. Du er i puberteten.

Pubertet er perioden der kroppen utvikler seg fra barn til voksen og blir kjønnsmoden, altså i stand til å reprodusere seg. Det er ikke en enkelt hendelse, men en prosess som strekker seg over flere år. Og det er hormoner, kroppens kjemiske signalstoffer, som setter hele prosessen i gang.

I dette kapittelet skal vi utforske hva som skjer inni kroppen din når puberteten starter. Vi skal se på de viktigste hormonene, de fysiske endringene hos jenter og gutter, de følelsesmessige svingningene, og hvorfor alt dette varierer så mye fra person til person.`,
    },
    {
      id: 'naturfag-10-7-1-n-section1',
      type: 'text',
      content: `## Startsignalet fra hjernen

Puberteten starter på forskjellige tidspunkt for ulike mennesker. Hos jenter begynner den vanligvis i alderen 8 til 13 år, mens den hos gutter typisk starter litt senere, mellom 9 og 14 år. Noen starter tidlig og noen sent, og begge deler er helt normalt. Tidspunktet påvirkes av genetikk, ernæring og generell helsetilstand. Hvis foreldrene dine kom tidlig eller sent i puberteten, er det sannsynlig at det samme gjelder for deg.

Det hele begynner i hjernen. En del av hjernen som heter hypothalamus sender et startsignal i form av hormonet GnRH til hypofysen, en liten kjertel på undersiden av hjernen som ofte kalles «kroppens dirigent». Hypofysen svarer med å frigjøre to hormoner, FSH og LH, som reiser gjennom blodet til kjønnsorganene. Her gir de beskjed om å begynne å produsere kjønnshormoner: østrogen og progesteron i eggstokkene hos jenter, og testosteron i testiklene hos gutter.

Det er viktig å merke seg at både gutter og jenter produserer alle tre hormonene, men i ulike mengder. Østrogen styrer utviklingen av kvinnelige kjønnskarakteristika som brystutvikling, bredere hofter og menstruasjon. Progesteron regulerer menstruasjonssyklusen og forbereder livmoren på graviditet. Testosteron styrer mannlige kjønnskarakteristika som økt muskelmasse, dypere stemme og skjeggvekst.`,
    },
    {
      id: 'naturfag-10-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på pubertet og hormoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-1-n-quiz1-q0',
            task: 'Hva er pubertet?',
            options: [
              { id: 'a', text: 'En sykdom som rammer ungdommer', isCorrect: false },
              { id: 'b', text: 'Perioden der kroppen utvikler seg fra barn til voksen og blir kjønnsmoden', isCorrect: true },
              { id: 'c', text: 'En kort fase som varer noen uker', isCorrect: false },
              { id: 'd', text: 'Perioden etter at man er ferdig utvokst', isCorrect: false },
            ],
            solution:
              'Pubertet er perioden der kroppen utvikler seg fra barn til voksen og blir kjønnsmoden. Det er en naturlig biologisk prosess som strekker seg over flere år og styres av hormoner fra hjernen og kjønnsorganene.',
          },
          {
            id: 'naturfag-10-7-1-n-quiz1-q1',
            task: 'Hvilken kjertel i hjernen kalles «kroppens dirigent» fordi den styrer mange andre kjertler?',
            options: [
              { id: 'a', text: 'Hypothalamus', isCorrect: false },
              { id: 'b', text: 'Skjoldbruskkjertelen', isCorrect: false },
              { id: 'c', text: 'Hypofysen', isCorrect: true },
              { id: 'd', text: 'Binyrebarken', isCorrect: false },
            ],
            solution:
              'Hypofysen er en liten kjertel på undersiden av hjernen som kalles «kroppens dirigent». Den mottar signaler fra hypothalamus og sender ut hormoner (FSH og LH) som styrer kjønnsorganene og mange andre kjertler i kroppen.',
          },
          {
            id: 'naturfag-10-7-1-n-quiz1-q2',
            task: 'Hvilket hormon er viktigst for utvikling av mannlige kjønnskarakteristika?',
            options: [
              { id: 'a', text: 'Østrogen', isCorrect: false },
              { id: 'b', text: 'Progesteron', isCorrect: false },
              { id: 'c', text: 'Insulin', isCorrect: false },
              { id: 'd', text: 'Testosteron', isCorrect: true },
            ],
            solution:
              'Testosteron er det viktigste mannlige kjønnshormonet. Det produseres hovedsakelig i testiklene og styrer utviklingen av mannlige kjønnskarakteristika som økt muskelmasse, dypere stemme og skjeggvekst.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-1-n-section2',
      type: 'text',
      content: `## Fysiske endringer hos jenter og gutter

Når kjønnshormonene begynner å strømme, setter de i gang en rekke fysiske forandringer som skjer gradvis over flere år.

Hos jenter fører østrogen til at brystene begynner å utvikle seg, hoftene blir bredere, og kroppen lagrer mer fett rundt hofter og lår. Hår vokser under armene og i kjønnsområdet. En av de viktigste milepælene er menarke, den første menstruasjonen, som vanligvis kommer 2 til 3 år etter at brystutviklingen startet, typisk i alderen 11 til 14 år. Jenter opplever sin vekstspurt tidlig i puberteten, ofte før menarke, og kan vokse 6 til 11 cm i løpet av ett år.

Hos gutter fører testosteron til at testiklene og penis vokser, stemmen blir dypere gjennom stemmeskiftet, og hår begynner å vokse i ansiktet, under armene og på brystkassen. Muskelmassen øker og skuldrene blir bredere. Gutter opplever sin vekstspurt litt senere, vanligvis mellom 12 og 16 år, og kan vokse opptil 10 til 12 cm på ett år. I løpet av puberteten begynner testiklene å produsere sædceller, og gutter kan oppleve sin første ejakulasjon.

Felles for begge kjønn er at huden kan bli mer oljete og gi akne, svetteproduksjonen øker, og kroppslukten endrer seg. Det er viktig å huske at rekkefølgen og tidspunktet for endringene varierer fra person til person, og at det ikke finnes noe «riktig» tempo.`,
    },
    {
      id: 'naturfag-10-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fysiske endringer i puberteten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-1-n-quiz2-q0',
            task: 'Hva er menarke?',
            options: [
              { id: 'a', text: 'Den første ejakulasjonen', isCorrect: false },
              { id: 'b', text: 'Den første menstruasjonen', isCorrect: true },
              { id: 'c', text: 'Et hormon som styrer puberteten', isCorrect: false },
              { id: 'd', text: 'En annen betegnelse for pubertet', isCorrect: false },
            ],
            solution:
              'Menarke er den medisinske betegnelsen for den første menstruasjonen. Den inntreffer vanligvis 2 til 3 år etter at brystutviklingen startet, typisk i alderen 11 til 14 år. Menarke er et tegn på at kroppen er i ferd med å bli kjønnsmoden.',
          },
          {
            id: 'naturfag-10-7-1-n-quiz2-q1',
            task: 'Hvilken fysisk endring er felles for både jenter og gutter i puberteten?',
            options: [
              { id: 'a', text: 'Brystutvikling', isCorrect: false },
              { id: 'b', text: 'Stemmeskifte', isCorrect: false },
              { id: 'c', text: 'Vekstspurt og hårvekst i armhuler og kjønnsområde', isCorrect: true },
              { id: 'd', text: 'Bredere hofter', isCorrect: false },
            ],
            solution:
              'Både jenter og gutter opplever vekstspurt, hårvekst under armene og i kjønnsområdet, mer oljete hud med risiko for akne, og økt svetteproduksjon. Brystutvikling og bredere hofter er spesifikt for jenter, mens stemmeskifte er spesifikt for gutter.',
          },
          {
            id: 'naturfag-10-7-1-n-quiz2-q2',
            task: 'Hva gjør testosteron med strupehodet hos gutter?',
            options: [
              { id: 'a', text: 'Ingenting, strupehodet påvirkes ikke av hormoner', isCorrect: false },
              { id: 'b', text: 'Det gjør strupehodet mindre', isCorrect: false },
              { id: 'c', text: 'Det gjør at strupehodet vokser og stemmebåndene blir lengre og tykkere, slik at stemmen blir dypere', isCorrect: true },
              { id: 'd', text: 'Det gjør stemmen lysere', isCorrect: false },
            ],
            solution:
              'Testosteron får strupehodet til å vokse og stemmebåndene til å bli lengre og tykkere. Resultatet er at stemmen gradvis blir dypere. I overgangsperioden kan stemmen «knekke» fordi stemmebåndene er i en mellomfase.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-1-n-section3',
      type: 'text',
      content: `## Følelsesmessige endringer og den uferdige hjernen

Puberteten handler ikke bare om fysiske forandringer. De samme hormonene som endrer kroppen, påvirker også hjernen og følelseslivet. Det er helt normalt å oppleve store humørsvingninger, å føle deg glad det ene øyeblikket og trist eller irritabel det neste, uten noen tydelig grunn.

Dette har en biologisk forklaring. Hormonnivåene svinger og påvirker hjernens signalstoffer som regulerer humør og velvære. I tillegg modnes det limbiske systemet, hjernens følelsessenter, raskere enn den prefrontale cortex, som styrer impulskontroll og rasjonell tenkning. Denne delen av hjernen er faktisk ikke ferdig utviklet før du er i midten av 20-årene. Det betyr at ungdommer kan oppleve sterke følelser uten å ha fullt utviklede verktøy for å regulere dem.

Mange opplever økt følsomhet, interesse for romantikk og seksualitet, usikkerhet rundt eget utseende, og et sterkere behov for selvstendighet. Alt dette er en naturlig del av utviklingen. Søvnmønsteret endres også, fordi hormoner forskyver søvnsyklusen. Mange ungdommer blir trøtte senere og vil sove lenger om morgenen, og søvnmangel kan forsterke humørsvingningene.

Det viktigste er å vite at disse endringene er midlertidige og helt normale. Alle går gjennom puberteten i sitt eget tempo, og det finnes stor individuell variasjon. Hvis følelsene blir overveldende, er det lurt å snakke med noen du stoler på.`,
    },
    {
      id: 'naturfag-10-7-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på følelsesmessige endringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-1-n-quiz3-q0',
            task: 'Hvilken påstand om følelsesmessige endringer i puberteten er riktig?',
            options: [
              { id: 'a', text: 'Bare jenter opplever følelsesmessige endringer', isCorrect: false },
              { id: 'b', text: 'Humørsvingninger er et tegn på psykisk sykdom', isCorrect: false },
              { id: 'c', text: 'Humørsvingninger er normalt og skyldes blant annet hormonelle endringer', isCorrect: true },
              { id: 'd', text: 'Følelsesmessige endringer har ingenting med hormoner å gjøre', isCorrect: false },
            ],
            solution:
              'Humørsvingninger i puberteten er helt normalt og skyldes blant annet at kjønnshormonene svinger og påvirker hjernens kjemi. Både gutter og jenter opplever følelsesmessige endringer, og dette er en naturlig del av utviklingen.',
          },
          {
            id: 'naturfag-10-7-1-n-quiz3-q1',
            task: 'Hvorfor kan ungdommer oppleve sterkere følelser enn voksne?',
            options: [
              { id: 'a', text: 'Fordi de er umodne og burde kontrollere seg bedre', isCorrect: false },
              { id: 'b', text: 'Fordi hjernens følelsessenter modnes raskere enn den delen som styrer impulskontroll', isCorrect: true },
              { id: 'c', text: 'Fordi de ikke spiser nok', isCorrect: false },
              { id: 'd', text: 'Fordi de bruker for mye tid på skjerm', isCorrect: false },
            ],
            solution:
              'Det limbiske systemet (følelsessenteret) modnes raskere enn den prefrontale cortex (som styrer impulskontroll og rasjonell tenkning). Denne ubalansen gjør at ungdommer kan oppleve intense følelser uten fullt utviklede verktøy for å regulere dem. Den prefrontale cortex er ikke ferdig utviklet før midt i 20-årene.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket puberteten og de hormonelle endringene som styrer overgangen fra barn til voksen. Puberteten starter vanligvis mellom 8 og 14 år og styres av en kjedereaksjon fra hjernen: hypothalamus sender signal til hypofysen, som sender FSH og LH til kjønnsorganene, som produserer kjønnshormoner.

Østrogen og progesteron er de viktigste kvinnelige kjønnshormonene og styrer blant annet brystutvikling, bredere hofter og menstruasjon. Testosteron er det viktigste mannlige kjønnshormonet og styrer muskelvekst, stemmeskifte og skjeggvekst. Begge kjønn produserer alle tre hormonene, men i ulike mengder.

Fysiske endringer hos jenter inkluderer brystutvikling, bredere hofter, menarke og vekstspurt. Hos gutter inkluderer de vekst av kjønnsorganer, stemmeskifte, økt muskelmasse og vekstspurt. Felles endringer er hårvekst, akne og endret kroppslukt.

Følelsesmessige endringer som humørsvingninger, økt følsomhet og interesse for romantikk er helt normale og skyldes hormonelle svingninger og at hjernen er under utvikling. Det finnes stor individuell variasjon, og alle går gjennom puberteten i sitt eget tempo.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.2 NARRATIV: Reproduksjonssystemene
// ============================================================================

export const CHAPTER_NATURFAG_10_7_2_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-7-2-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '7.2',
  title: 'Reproduksjonssystemene',
  subtitle: 'Narrativ versjon',
  description:
    'Utforsk det kvinnelige og mannlige reproduksjonssystemet, menstruasjonssyklusens fire faser, og de fascinerende forskjellene mellom eggceller og sædceller.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare oppbygningen av det kvinnelige og mannlige reproduksjonssystemet',
    'beskrive menstruasjonssyklusen og eggløsning',
    'forklare produksjon og funksjon av eggceller og sædceller',
  ],
  linkedChapterId: 'naturfag-10-7-2',
  content: [
    {
      id: 'naturfag-10-7-2-n-intro',
      type: 'text',
      content: `## Kroppens reproduksjonssystemer

Alle levende organismer formerer seg, det er en av de grunnleggende egenskapene til liv. Hos mennesker skjer formering ved seksuell reproduksjon, der en eggcelle fra kvinnen og en sædcelle fra mannen smelter sammen til et befruktet egg som kan utvikle seg til et nytt menneske.

For at dette skal være mulig, har kvinner og menn ulike reproduksjonssystemer som er spesialisert for å produsere kjønnsceller, transportere dem og skape de rette betingelsene for befruktning og fosterutvikling. Selv om de to systemene er svært forskjellige i oppbygning, har de ett felles mål: å gjøre det mulig å føre genene videre til neste generasjon.

I dette kapittelet skal du lære om det kvinnelige og mannlige reproduksjonssystemet, menstruasjonssyklusens fire faser, og de fascinerende forskjellene mellom verdens største og noen av verdens minste celler.`,
    },
    {
      id: 'naturfag-10-7-2-n-section1',
      type: 'text',
      content: `## Det kvinnelige reproduksjonssystemet

Det kvinnelige reproduksjonssystemet har to hovedfunksjoner: å produsere eggceller og å gi fosteret et trygt sted å utvikle seg. Det deles inn i indre og ytre kjønnsorganer.

Eggstokkene, også kalt ovariene, er to mandelformede organer på hver side av livmoren. De produserer eggceller og kjønnshormonene østrogen og progesteron. En fascinerende detalj er at ved fødselen inneholder eggstokkene allerede alle eggcellene kvinnen noensinne vil ha, mellom 1 og 2 millioner. Når jenta når puberteten er det ca. 300 000 igjen, og bare 400 til 500 av disse vil faktisk modnes og frigjøres gjennom eggløsning i løpet av livet.

Egglederen, eller tuba uterina, er to tynne rør som forbinder eggstokkene med livmoren. Etter eggløsning fanges eggcellen opp av egglederens traktformede åpning og transporteres mot livmoren ved hjelp av flimmerhår. Det er vanligvis i egglederen at befruktning skjer.

Livmoren, eller uterus, er et hult muskuløst organ på størrelse med en knyttneve. Innsiden er kledd med en slimhinne som bygges opp hver måned for å ta imot et befruktet egg. Livmorhalsen, cervix, er den nedre delen som åpner seg mot skjeden. Skjeden, vagina, er en elastisk muskelkanal som forbinder livmoren med utsiden av kroppen og fungerer som fødselskanal.

De ytre kjønnsorganene kalles samlet vulva og omfatter kjønnsleppene, klitoris, skjedeåpningen og urinrørsåpningen. Urinrøret og skjeden er to separate åpninger med ulike funksjoner.`,
    },
    {
      id: 'naturfag-10-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på det kvinnelige reproduksjonssystemet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-2-n-quiz1-q0',
            task: 'Hvor produseres eggceller?',
            options: [
              { id: 'a', text: 'I livmoren', isCorrect: false },
              { id: 'b', text: 'I eggstokkene', isCorrect: true },
              { id: 'c', text: 'I egglederen', isCorrect: false },
              { id: 'd', text: 'I skjeden', isCorrect: false },
            ],
            solution:
              'Eggstokkene (ovariene) produserer eggceller. De ligger på hver side av livmoren og produserer også kjønnshormonene østrogen og progesteron. Egglederen transporterer eggcellen videre mot livmoren.',
          },
          {
            id: 'naturfag-10-7-2-n-quiz1-q1',
            task: 'Omtrent hvor mange eggceller modnes i løpet av en kvinnes liv?',
            options: [
              { id: 'a', text: '1 til 2 millioner', isCorrect: false },
              { id: 'b', text: '300 000', isCorrect: false },
              { id: 'c', text: '400 til 500', isCorrect: true },
              { id: 'd', text: 'Ca. 5 000', isCorrect: false },
            ],
            solution:
              'Selv om en jentebaby fødes med 1 til 2 millioner umodne eggceller, og det er ca. 300 000 igjen ved puberteten, modnes bare ca. 400 til 500 eggceller gjennom eggløsning i løpet av en kvinnes fruktbare liv.',
          },
          {
            id: 'naturfag-10-7-2-n-quiz1-q2',
            task: 'Hvor skjer befruktningen vanligvis?',
            options: [
              { id: 'a', text: 'I livmoren', isCorrect: false },
              { id: 'b', text: 'I skjeden', isCorrect: false },
              { id: 'c', text: 'I eggstokken', isCorrect: false },
              { id: 'd', text: 'I egglederen', isCorrect: true },
            ],
            solution:
              'Befruktningen skjer vanligvis i den øvre delen av egglederen. Etter eggløsning beveger eggcellen seg sakte nedover egglederen, og det er her sædcellen møter og smelter sammen med egget.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-2-n-section2',
      type: 'text',
      content: `## Menstruasjonssyklusen

Menstruasjonssyklusen er en serie forandringer som skjer i kroppen til kvinner i fruktbar alder, omtrent hver 28. dag. Syklusen styres av hormoner og forbereder kroppen på en mulig graviditet.

Den har fire faser. Først kommer menstruasjonen, dag 1 til 5. Livmorslimhinnen som ble bygget opp i forrige syklus, støtes ut som blødning gjennom skjeden. Blødningen varer vanligvis 3 til 7 dager, og hormonnivåene er på sitt laveste.

Deretter følger follikelfasen, dag 6 til 14. Follikler, altså eggsekker, begynner å vokse i eggstokkene, og vanligvis modnes bare én fullstendig. Folliklene produserer østrogen som bygger opp livmorslimhinnen igjen, tykkere og mer blodrik.

Rundt dag 14 skjer eggløsningen. Når østrogennivået når en topp, utløser det en kraftig frigjøring av hormonet LH fra hjernen. LH-toppen får den modne folikkelen til å sprekke, og eggcellen frigjøres. Eggcellen kan befruktes i ca. 12 til 24 timer etter eggløsning.

Til slutt kommer lutealfasen, dag 15 til 28. Den tomme folikkelen omdannes til det gule legemet som produserer progesteron. Progesteron gjør slimhinnen enda tykkere og mer næringsrik. Hvis egget ikke befruktes, brytes det gule legemet ned, hormonnivåene faller, og en ny menstruasjon starter.

En gjennomsnittlig syklus er 28 dager, men alt mellom 21 og 35 dager er normalt. I puberteten er det vanlig at syklusen er uregelmessig de første par årene.`,
    },
    {
      id: 'naturfag-10-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på menstruasjonssyklusen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-2-n-quiz2-q0',
            task: 'Hva skjer under eggløsningen?',
            options: [
              { id: 'a', text: 'Livmorslimhinnen støtes ut som blødning', isCorrect: false },
              { id: 'b', text: 'En moden eggcelle frigjøres fra eggstokken', isCorrect: true },
              { id: 'c', text: 'Det gule legemet begynner å produsere progesteron', isCorrect: false },
              { id: 'd', text: 'Sædceller produseres i testiklene', isCorrect: false },
            ],
            solution:
              'Eggløsning er det øyeblikket en moden eggcelle frigjøres fra eggstokken. Det skjer vanligvis rundt dag 14 i syklusen og utløses av en topp i hormonet LH. Etter frigjøringen fanges eggcellen opp av egglederen.',
          },
          {
            id: 'naturfag-10-7-2-n-quiz2-q1',
            task: 'Hva er det gule legemets oppgave?',
            options: [
              { id: 'a', text: 'Å produsere eggceller', isCorrect: false },
              { id: 'b', text: 'Å støte ut livmorslimhinnen', isCorrect: false },
              { id: 'c', text: 'Å produsere progesteron som forbereder livmoren på graviditet', isCorrect: true },
              { id: 'd', text: 'Å sende signaler til hjernen om å starte puberteten', isCorrect: false },
            ],
            solution:
              'Etter eggløsning omdannes den tomme folikkelen til det gule legemet (corpus luteum), som produserer progesteron. Progesteron gjør livmorslimhinnen tykkere og mer næringsrik, klar til å ta imot et befruktet egg.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-2-n-section3',
      type: 'text',
      content: `## Det mannlige reproduksjonssystemet og sædceller

Det mannlige reproduksjonssystemet har som hovedfunksjon å produsere sædceller og levere dem til det kvinnelige reproduksjonssystemet. Testiklene er to ovale organer som henger utenfor kroppen i pungen. De henger utenfor fordi sædcelleproduksjon krever en temperatur som er ca. 2 grader lavere enn normal kroppstemperatur. Pungen fungerer som temperaturregulator og trekker seg sammen i kulde og utvider seg i varme.

Sædcellene produseres i sædkanalene inne i testiklene, modnes i bitestiklene i 2 til 3 uker, og transporteres gjennom sædlederne ved ejakulasjon. Underveis blandes de med væske fra prostata og sædblærer, som gir næring og beskyttelse. Denne blandingen kalles sæd. Ved ejakulasjon frigjøres 2 til 5 ml sæd som inneholder mellom 100 og 300 millioner sædceller.

I motsetning til eggceller, som alle dannes før fødsel, produseres sædceller kontinuerlig fra puberteten og gjennom hele livet, ca. 1000 sædceller i sekundet. Eggcellen er kroppens største celle med en diameter på 0,1 mm, mens sædcellen er en av de minste, bare 0,05 mm lang. Eggcellen lever 12 til 24 timer etter eggløsning, mens sædceller kan overleve opptil 5 dager i kvinnens kropp. Eggcellen transporteres passivt av flimmerhår, mens sædcellen svømmer aktivt ved hjelp av halen. Begge er kjønnsceller med halvt kromosomsett, 23 kromosomer, og begge er nødvendige for seksuell reproduksjon.`,
    },
    {
      id: 'naturfag-10-7-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på det mannlige reproduksjonssystemet og kjønnsceller:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-2-n-quiz3-q0',
            task: 'Hvorfor henger testiklene utenfor kroppen i pungen?',
            options: [
              { id: 'a', text: 'Fordi det ikke er plass til dem inne i kroppen', isCorrect: false },
              { id: 'b', text: 'Fordi sædcelleproduksjon krever lavere temperatur enn kroppstemperatur', isCorrect: true },
              { id: 'c', text: 'Fordi det gjør det lettere å produsere testosteron', isCorrect: false },
              { id: 'd', text: 'Fordi sædcellene trenger frisk luft', isCorrect: false },
            ],
            solution:
              'Sædcelleproduksjon fungerer best ved en temperatur som er ca. 2 grader lavere enn normal kroppstemperatur. Testiklene henger derfor utenfor kroppen i pungen, som regulerer temperaturen.',
          },
          {
            id: 'naturfag-10-7-2-n-quiz3-q1',
            task: 'Hva er den viktigste forskjellen mellom produksjon av eggceller og sædceller?',
            options: [
              { id: 'a', text: 'Eggceller er mindre enn sædceller', isCorrect: false },
              { id: 'b', text: 'Sædceller produseres bare i puberteten', isCorrect: false },
              { id: 'c', text: 'Alle eggceller dannes før fødsel, mens sædceller produseres kontinuerlig fra puberteten', isCorrect: true },
              { id: 'd', text: 'Sædceller inneholder mer DNA enn eggceller', isCorrect: false },
            ],
            solution:
              'Alle eggceller dannes allerede før kvinnen er født (1 til 2 millioner), og det dannes aldri nye. Sædceller derimot produseres kontinuerlig fra puberteten og gjennom hele livet, ca. 1000 per sekund.',
          },
          {
            id: 'naturfag-10-7-2-n-quiz3-q2',
            task: 'Hvor mange kromosomer har en kjønnscelle (eggcelle eller sædcelle)?',
            options: [
              { id: 'a', text: '46', isCorrect: false },
              { id: 'b', text: '23', isCorrect: true },
              { id: 'c', text: '92', isCorrect: false },
              { id: 'd', text: '12', isCorrect: false },
            ],
            solution:
              'Kjønnsceller (gameter) har halvt kromosomsett, altså 23 kromosomer. Når en eggcelle (23 kromosomer) og en sædcelle (23 kromosomer) smelter sammen ved befruktning, får den nye cellen et komplett sett med 46 kromosomer.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket reproduksjonssystemene hos mennesker. Det kvinnelige systemet består av eggstokker som produserer eggceller og hormoner, eggledere der befruktning vanligvis skjer, livmoren som bygger opp slimhinne for et befruktet egg, og skjeden som forbinder livmoren med utsiden.

Menstruasjonssyklusen varer gjennomsnittlig 28 dager og har fire faser: menstruasjon, follikelfasen, eggløsning og lutealfasen. Hormonene FSH, østrogen, LH og progesteron styrer syklusen i et fint samspill.

Det mannlige systemet består av testikler som produserer sædceller og testosteron, bitestikler for modning, sædledere for transport, og prostata og sædblærer som produserer væske.

Eggceller og sædceller har fascinerende forskjeller: eggcellen er kroppens største celle og alle dannes før fødsel, mens sædcellen er en av de minste og produseres kontinuerlig. Eggcellen lever 12 til 24 timer, sædceller opptil 5 dager. Men begge er kjønnsceller med 23 kromosomer som sammen skaper et nytt menneske med 46.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3 NARRATIV: Befruktning, graviditet og fødsel
// ============================================================================

export const CHAPTER_NATURFAG_10_7_3_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-7-3-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '7.3',
  title: 'Befruktning, graviditet og fødsel',
  subtitle: 'Narrativ versjon',
  description:
    'Følg den utrolige reisen fra befruktning til fødsel, der to bittesmå celler utvikler seg til et fullstendig menneske i løpet av ni måneder.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive befruktning og innfesting av befruktet egg',
    'forklare fosterutviklingen gjennom de tre trimestrene',
    'beskrive morkakens funksjon og fødselen',
  ],
  linkedChapterId: 'naturfag-10-7-3',
  content: [
    {
      id: 'naturfag-10-7-3-n-intro',
      type: 'text',
      content: `## Fra to celler til et nytt menneske

Hvordan oppstår egentlig et nytt menneske? Alt starter med to bittesmå celler, en sædcelle og en eggcelle. Når disse smelter sammen, begynner en utrolig prosess der en enkelt celle utvikler seg til et fullstendig lite menneske i løpet av omtrent ni måneder.

Fra befruktning til fødsel gjennomgår det ufødte barnet en enorm utvikling. Organer dannes, hjertet begynner å slå, fingre og tær vokser frem, og til slutt er barnet klart for å bli født. I dette kapittelet følger vi hele den fascinerende reisen, fra det øyeblikket sædcellen møter egget, gjennom fosterutviklingens tre trimestere, via morkakens livsviktige rolle, og helt frem til fødselen.`,
    },
    {
      id: 'naturfag-10-7-3-n-section1',
      type: 'text',
      content: `## Befruktning og de første dagene

Ved seksuell omgang frigjøres rundt 200 til 300 millioner sædceller i skjeden. De svømmer oppover gjennom livmorhalsen, inn i livmoren og videre inn i egglederen. Selv om det starter med hundrevis av millioner, er det bare noen hundre som faktisk når frem til egget. Reisen tar vanligvis noen timer.

Befruktningen skjer vanligvis i den øvre delen av egglederen. Eggcellen lever i omtrent 12 til 24 timer etter eggløsning, men sædceller kan overleve opptil fem dager, så samleie noen dager før eggløsning kan også føre til befruktning. Kun én sædcelle klarer å trenge helt inn i egget. I det øyeblikket den første slipper inn, endrer eggcellen overflaten slik at ingen flere kan komme inn.

Inne i eggcellen smelter de to cellekjernene sammen. DNA fra far, 23 kromosomer, kombineres med DNA fra mor, 23 kromosomer, og det dannes en zygote med 46 kromosomer. Kjønnet bestemmes allerede nå: eggcellen har alltid et X-kromosom, mens sædcellen har enten X eller Y. XX gir jente, XY gir gutt, så det er sædcellen som avgjør kjønnet.

Zygoten begynner umiddelbart å dele seg, fra to til fire til åtte celler og videre, mens den vandrer nedover egglederen mot livmoren. Etter 5 til 7 dager har celleklumpen utviklet seg til en blastocyst som fester seg i livmorslimhinnen. Denne innfestingen, eller implantasjonen, markerer starten på svangerskapet.`,
    },
    {
      id: 'naturfag-10-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på befruktning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-3-n-quiz1-q0',
            task: 'Hva bestemmer barnets kjønn ved befruktningen?',
            options: [
              { id: 'a', text: 'Eggcellens kromosom', isCorrect: false },
              { id: 'b', text: 'Sædcellens kjønnskromosom (X eller Y)', isCorrect: true },
              { id: 'c', text: 'Morens hormonnivå', isCorrect: false },
              { id: 'd', text: 'Tidspunktet for befruktningen', isCorrect: false },
            ],
            solution:
              'Eggcellen har alltid et X-kromosom. Sædcellen har enten X eller Y. Hvis sædcellen har X, blir barnet XX (jente). Hvis sædcellen har Y, blir barnet XY (gutt). Det er altså sædcellen som avgjør kjønnet.',
          },
          {
            id: 'naturfag-10-7-3-n-quiz1-q1',
            task: 'Hva er en zygote?',
            options: [
              { id: 'a', text: 'En ubefruktet eggcelle', isCorrect: false },
              { id: 'b', text: 'En sædcelle som har nådd egglederen', isCorrect: false },
              { id: 'c', text: 'Den befruktede eggcellen med 46 kromosomer', isCorrect: true },
              { id: 'd', text: 'Et foster i tredje trimester', isCorrect: false },
            ],
            solution:
              'Zygoten er den befruktede eggcellen, det aller første stadiet av et nytt menneske. Den inneholder 46 kromosomer, 23 fra mor og 23 fra far, og begynner umiddelbart å dele seg.',
          },
          {
            id: 'naturfag-10-7-3-n-quiz1-q2',
            task: 'Hvor mange sædceller klarer vanligvis å trenge inn i eggcellen?',
            options: [
              { id: 'a', text: 'Flere hundre', isCorrect: false },
              { id: 'b', text: 'Mellom 5 og 10', isCorrect: false },
              { id: 'c', text: 'Kun én', isCorrect: true },
              { id: 'd', text: 'To, en for hvert kromosomsett', isCorrect: false },
            ],
            solution:
              'Kun én sædcelle trenger inn i eggcellen. I det øyeblikket den første slipper inn, endrer eggcellen overflaten sin slik at ingen flere sædceller kan komme inn. Dette sikrer at det befruktede egget får riktig antall kromosomer (46).',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-3-n-section2',
      type: 'text',
      content: `## Fosterutviklingen gjennom tre trimestere

Graviditeten varer omtrent 40 uker og deles inn i tre trimestere på ca. tre måneder hver.

I første trimester, uke 1 til 12, dannes alle de viktigste organene. Dette er den mest kritiske perioden. Allerede i uke 3 til 4 begynner hjertet å dannes, og i uke 5 til 6 kan de første hjerteslagene ses på ultralyd. Armer, bein, fingre og tær vokser frem. Frem til uke 8 kalles det ufødte barnet et embryo, og fra uke 8 kalles det et foster fordi alle organer nå er anlagt. Ved uke 12 er fosteret ca. 6 cm langt.

I andre trimester, uke 13 til 26, vokser fosteret raskt. Rundt uke 18 til 20 kan moren kjenne de første sparkene. Fosteret utvikler hørsel og kan reagere på lyder, øynene oppfatter lys, og det begynner å suge på tommelen. Ved uke 26 er fosteret ca. 35 cm langt og veier rundt 800 gram. Lungene begynner å produsere surfaktant, et stoff som gjør at de kan utvide seg.

I tredje trimester, uke 27 til 40, handler det om modning og vekst. Fosteret legger på seg underhudsfett, lungene og hjernen modnes, og det får regulære sove- og våkneperioder. Rundt uke 36 snur de fleste fostre seg med hodet ned, klar for fødsel. Ved termin i uke 40 er barnet ca. 50 cm langt og veier gjennomsnittlig 3 til 4 kg.`,
    },
    {
      id: 'naturfag-10-7-3-n-section3',
      type: 'text',
      content: `## Morkaken, tvillinger og fødsel

Morkaken er et helt spesielt midlertidig organ som kobler fosteret til moren. Den fungerer som fosterets lunger, tarm og nyrer: oksygen og næringsstoffer fra morens blod overføres til fosterets blod, mens avfallsstoffer sendes tilbake. Viktig prinsipp: morens og fosterets blod blandes aldri direkte. Stoffutvekslingen skjer gjennom tynne vegger mellom blodårene. Navlesnoren, ca. 50 til 60 cm lang, forbinder fosteret med morkaken.

Noen ganger oppstår tvillinger. Eneggede tvillinger oppstår når ett befruktet egg deler seg i to, og de har identisk DNA og er alltid av samme kjønn. Toeggede tvillinger oppstår når to egg befruktes av to sædceller, og de er genetisk like forskjellige som vanlige søsken.

Fødselen har tre faser. I åpningsfasen åpner riene livmorhalsen gradvis fra 0 til 10 cm. Hormonet oksytocin driver sammentrekningene. Denne fasen kan vare fra noen timer til over et døgn. I utdrivningsfasen presses barnet ut gjennom fødselskanalen, og navlesnoren klippes. Til slutt, i etterbyrden, støtes morkaken og fosterhinnen ut 15 til 30 minutter etter fødselen. Noen ganger utføres keisersnitt, et kirurgisk inngrep der barnet tas ut gjennom et snitt i magen, som brukes når vaginal fødsel ikke er mulig eller trygt. I Norge fødes ca. 16 til 17 prosent av alle barn med keisersnitt.`,
    },
    {
      id: 'naturfag-10-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fosterutvikling, morkake og fødsel:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-3-n-quiz2-q0',
            task: 'Hva er morkakens viktigste funksjon?',
            options: [
              { id: 'a', text: 'Å produsere blod til fosteret', isCorrect: false },
              { id: 'b', text: 'Å transportere oksygen, næring og avfallsstoffer mellom mor og foster', isCorrect: true },
              { id: 'c', text: 'Å bestemme kjønnet til barnet', isCorrect: false },
              { id: 'd', text: 'Å beskytte fosteret mot alle typer virus', isCorrect: false },
            ],
            solution:
              'Morkaken sørger for utveksling av stoffer mellom mor og foster. Den transporterer oksygen og næring fra morens blod til fosterets blod, og fjerner avfallsstoffer. Morens og fosterets blod blandes aldri direkte.',
          },
          {
            id: 'naturfag-10-7-3-n-quiz2-q1',
            task: 'Hvorfor er eneggede tvillinger genetisk identiske?',
            options: [
              { id: 'a', text: 'Fordi de befruktes av to identiske sædceller', isCorrect: false },
              { id: 'b', text: 'Fordi de deler morkake', isCorrect: false },
              { id: 'c', text: 'Fordi de oppstår fra én befruktet eggcelle som deler seg i to', isCorrect: true },
              { id: 'd', text: 'Fordi de alltid er gutter', isCorrect: false },
            ],
            solution:
              'Eneggede tvillinger stammer fra én befruktet eggcelle (zygote) som tilfeldig deler seg i to. Begge celleklumpene har nøyaktig det samme DNA-et, så tvillingene er genetisk identiske og alltid av samme kjønn.',
          },
          {
            id: 'naturfag-10-7-3-n-quiz2-q2',
            task: 'Hva skjer i åpningsfasen av fødselen?',
            options: [
              { id: 'a', text: 'Barnet presses ut gjennom fødselskanalen', isCorrect: false },
              { id: 'b', text: 'Morkaken støtes ut', isCorrect: false },
              { id: 'c', text: 'Riene åpner livmorhalsen gradvis fra 0 til 10 cm', isCorrect: true },
              { id: 'd', text: 'Navlesnoren klippes over', isCorrect: false },
            ],
            solution:
              'Åpningsfasen er den lengste fasen av fødselen. Riene, regelmessige sammentrekninger i livmoren, åpner livmorhalsen gradvis fra 0 til 10 cm. Først i utdrivningsfasen presses barnet ut.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi fulgt hele reisen fra befruktning til fødsel. Befruktningen skjer i egglederen når én sædcelle smelter sammen med eggcellen og danner en zygote med 46 kromosomer. Kjønnet bestemmes av sædcellens kjønnskromosom: XX gir jente, XY gir gutt.

Fosterutviklingen deles i tre trimestere. I det første dannes alle organer, i det andre skjer rask vekst og modning, og i det tredje forbereder fosteret seg på fødsel. Morkaken er bindeleddet mellom mor og foster og sørger for oksygen, næring og avfallshåndtering uten at blodet blandes direkte.

Eneggede tvillinger har identisk DNA og oppstår når ett befruktet egg deler seg, mens toeggede tvillinger oppstår fra to egg og er genetisk ulike. Fødselen har tre faser: åpningsfasen der livmorhalsen åpnes, utdrivningsfasen der barnet kommer ut, og etterbyrden der morkaken støtes ut. Keisersnitt brukes når vaginal fødsel ikke er trygt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.4 NARRATIV: Prevensjon og seksuelt overførbare infeksjoner
// ============================================================================

export const CHAPTER_NATURFAG_10_7_4_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-7-4-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '7.4',
  title: 'Prevensjon og seksuelt overførbare infeksjoner',
  subtitle: 'Narrativ versjon',
  description:
    'Lær om ulike prevensjonsmetoder, hvordan de virker, og hva du bør vite om seksuelt overførbare infeksjoner for å ta gode valg for egen helse.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til ulike prevensjonsmetoder og hvordan de virker',
    'forstå hva seksuelt overførbare infeksjoner (SOI) er og hvordan de smitter',
    'vite hvordan man kan beskytte seg mot uønsket graviditet og SOI',
  ],
  linkedChapterId: 'naturfag-10-7-4',
  content: [
    {
      id: 'naturfag-10-7-4-n-intro',
      type: 'text',
      content: `## Å ta gode valg for egen helse

Kunnskap om prevensjon og seksuelt overførbare infeksjoner er viktig for å kunne ta informerte valg for egen helse. Prevensjon handler om å beskytte seg mot uønsket graviditet, mens kunnskap om seksuelt overførbare infeksjoner, forkortet SOI, handler om å beskytte seg mot infeksjoner som kan smitte ved seksuell kontakt. Noen unge velger å vente med seksuell aktivitet, og det er også et helt gyldig og respektabelt valg.

I Norge har alle under 20 år rett til gratis prevensjon fra helsestasjon for ungdom eller fastlege. Det er et lavterskeltilbud der du ikke trenger henvisning, og helsepersonell har taushetsplikt.

I dette kapittelet skal vi se på de viktigste prevensjonsmetodene, hva dobbel beskyttelse betyr, de vanligste seksuelt overførbare infeksjonene i Norge, og hvor du kan få hjelp og rådgivning.`,
    },
    {
      id: 'naturfag-10-7-4-n-section1',
      type: 'text',
      content: `## Prevensjonsmetoder

Det finnes mange ulike prevensjonsmetoder som kan deles i tre hovedgrupper: barrieremetoder, hormonelle metoder og ikke-hormonelle langtidsmetoder.

Kondomet er den vanligste barrieremetoden. Det er en tynn gummihylse som rulles over penis og fysisk hindrer sædceller i å nå egget. Kondomet er spesielt viktig fordi det er den eneste prevensjonsmetoden som beskytter mot både graviditet og SOI. Det har 98 prosent effektivitet ved korrekt bruk. Femidom, et kondom som settes inn i skjeden, finnes også, men er mindre vanlig i Norge.

Hormonelle metoder bruker syntetiske hormoner, vanligvis østrogen og gestagen, for å hindre eggløsning, gjøre livmorslimhinnen tynnere og gjøre slimet i livmorhalsen tykkere. P-piller tas daglig og har over 99 prosent effektivitet ved korrekt bruk. P-stav er en plastpinne under huden på overarmen som virker i 3 år. Hormonspiralen settes inn i livmoren og virker i 3 til 5 år. P-sprøyte, p-ring og p-plaster er andre alternativer. Alle hormonelle metoder krever resept.

Kobberspiralen er en ikke-hormonell langtidsmetode. En T-formet gjenstand med kobbertråd settes inn i livmoren og virker i 5 til 10 år. Kobberet påvirker sædcellenes bevegelse og livmorslimhinnen, uten hormoner.

Angrepillen er nødprevensjon som tas etter ubeskyttet samleie. Den virker ved å utsette eller hemme eggløsning og bør tas så raskt som mulig, helst innen 12 timer og senest innen 72 timer. Den er kun til nødbruk.`,
    },
    {
      id: 'naturfag-10-7-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på prevensjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-4-n-quiz1-q0',
            task: 'Hvilken prevensjonsmetode er den eneste som beskytter mot både graviditet og SOI?',
            options: [
              { id: 'a', text: 'P-piller', isCorrect: false },
              { id: 'b', text: 'Kondom', isCorrect: true },
              { id: 'c', text: 'Hormonspiral', isCorrect: false },
              { id: 'd', text: 'Kobberspiral', isCorrect: false },
            ],
            solution:
              'Kondomet er en barrieremetode som fysisk hindrer kontakt mellom slimhinner og kroppsvæsker. Det er den eneste prevensjonsmetoden som beskytter mot både graviditet og seksuelt overførbare infeksjoner.',
          },
          {
            id: 'naturfag-10-7-4-n-quiz1-q1',
            task: 'Hva betyr dobbel beskyttelse?',
            options: [
              { id: 'a', text: 'Å bruke to kondomer oppå hverandre', isCorrect: false },
              { id: 'b', text: 'Å ta dobbel dose p-piller', isCorrect: false },
              { id: 'c', text: 'Å bruke kondom sammen med en hormonell prevensjonsmetode', isCorrect: true },
              { id: 'd', text: 'Å bruke angrepille i tillegg til vanlig prevensjon', isCorrect: false },
            ],
            solution:
              'Dobbel beskyttelse betyr å kombinere kondom med en annen prevensjonsmetode, for eksempel p-piller. Kondomet beskytter mot SOI, mens den hormonelle metoden gir ekstra sikkerhet mot graviditet.',
          },
          {
            id: 'naturfag-10-7-4-n-quiz1-q2',
            task: 'Hvilken påstand om angrepillen er riktig?',
            options: [
              { id: 'a', text: 'Angrepillen bør brukes som vanlig prevensjon', isCorrect: false },
              { id: 'b', text: 'Angrepillen bør tas så raskt som mulig etter ubeskyttet samleie, senest innen 72 timer', isCorrect: true },
              { id: 'c', text: 'Angrepillen avslutter et svangerskap', isCorrect: false },
              { id: 'd', text: 'Angrepillen beskytter mot SOI', isCorrect: false },
            ],
            solution:
              'Angrepillen virker ved å utsette eller hemme eggløsning. Den bør tas så raskt som mulig, helst innen 12 timer og senest innen 72 timer. Den er kun til nødbruk, avslutter ikke et svangerskap, og beskytter ikke mot SOI.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-4-n-section2',
      type: 'text',
      content: `## Seksuelt overførbare infeksjoner

Seksuelt overførbare infeksjoner er infeksjoner som smitter fra person til person ved seksuell kontakt. De kan skyldes bakterier, virus eller parasitter, og smitter gjennom kontakt mellom slimhinner og kroppsvæsker. Mange SOI-er gir ingen symptomer i starten, og man kan smitte andre uten å vite at man selv er smittet.

Klamydia er den vanligste SOI-en i Norge, med ca. 25 000 tilfeller hvert år. Det er en bakterieinfeksjon som ofte kalles «den stille infeksjonen» fordi ca. 70 prosent av smittede kvinner og 50 prosent av smittede menn merker ingenting. Klamydia kureres enkelt med antibiotika, men ubehandlet kan den føre til infertilitet, spesielt hos kvinner.

Gonoré er en bakterieinfeksjon med økende antall tilfeller og et alvorlig problem med antibiotikaresistens. HPV, humant papillomavirus, er svært vanlig, og de fleste seksuelt aktive smittes i løpet av livet. Noen HPV-typer gir kjønnsvorter, mens andre kan føre til celleforandringer og kreft. HPV-vaksine tilbys alle i 7. klasse og beskytter mot de farligste typene.

Genital herpes er en virusinfeksjon som gir smertefulle blemmer og ikke kan kureres, men antivirale legemidler kan dempe utbrudd. HIV er et virus som angriper immunforsvaret. Det finnes ingen kur, men moderne medisin gjør at de fleste med HIV lever et normalt liv, og velbehandlede personer smitter ikke videre. Syfilis er en bakterieinfeksjon som kureres med antibiotika.

Hovedforskjellen er at bakterielle SOI-er som klamydia, gonoré og syfilis kan kureres med antibiotika, mens virale SOI-er som HPV, herpes og HIV ikke kan kureres men kan behandles og kontrolleres.`,
    },
    {
      id: 'naturfag-10-7-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på seksuelt overførbare infeksjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-4-n-quiz2-q0',
            task: 'Hvilken SOI er den vanligste i Norge?',
            options: [
              { id: 'a', text: 'Gonoré', isCorrect: false },
              { id: 'b', text: 'HIV', isCorrect: false },
              { id: 'c', text: 'Klamydia', isCorrect: true },
              { id: 'd', text: 'Syfilis', isCorrect: false },
            ],
            solution:
              'Klamydia er den klart vanligste seksuelt overførbare infeksjonen i Norge, med ca. 25 000 rapporterte tilfeller hvert år. Den er ofte uten symptomer og kureres med antibiotika.',
          },
          {
            id: 'naturfag-10-7-4-n-quiz2-q1',
            task: 'Hvilken påstand om HPV er riktig?',
            options: [
              { id: 'a', text: 'HPV smitter bare gjennom blodkontakt', isCorrect: false },
              { id: 'b', text: 'HPV-vaksinen gis i barnevaksinasjonsprogrammet i 7. klasse', isCorrect: true },
              { id: 'c', text: 'HPV kureres enkelt med antibiotika', isCorrect: false },
              { id: 'd', text: 'HPV gir alltid synlige symptomer', isCorrect: false },
            ],
            solution:
              'HPV-vaksinen tilbys alle i 7. klasse som en del av barnevaksinasjonsprogrammet. HPV smitter ved hud- og slimhinnekontakt, er et virus som ikke kan kureres med antibiotika, og de fleste smittede merker ingenting.',
          },
          {
            id: 'naturfag-10-7-4-n-quiz2-q2',
            task: 'Hva er hovedforskjellen mellom bakterielle og virale SOI-er?',
            options: [
              { id: 'a', text: 'Bakterielle SOI-er gir alltid symptomer, virale gir aldri symptomer', isCorrect: false },
              { id: 'b', text: 'Bakterielle SOI-er kan kureres med antibiotika, virale kan ikke kureres men kan behandles', isCorrect: true },
              { id: 'c', text: 'Virale SOI-er smitter lettere enn bakterielle', isCorrect: false },
              { id: 'd', text: 'Bakterielle SOI-er finnes bare i Norge', isCorrect: false },
            ],
            solution:
              'Bakterielle SOI-er som klamydia, gonoré og syfilis kan kureres med antibiotika. Virale SOI-er som HPV, herpes og HIV kan ikke kureres, men kan behandles og kontrolleres med medisiner. Derfor er forebygging med kondom og vaksine spesielt viktig for virale SOI-er.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-4-n-section3',
      type: 'text',
      content: `## Beskyttelse og hjelp

Den viktigste beskyttelsen mot SOI er kondom. Bruk kondom ved alle former for seksuell kontakt med nye eller usikre partnere. HPV-vaksine beskytter mot de farligste HPV-typene, og regelmessig testing er viktig hvis du er seksuelt aktiv. Test deg alltid etter ubeskyttet sex med en ny partner.

Dobbel beskyttelse, altså kondom sammen med en hormonell metode som p-piller, gir best beskyttelse mot både graviditet og SOI. Ingen prevensjonsmetode gir 100 prosent sikkerhet, men kombinasjonen gir svært god beskyttelse.

Helsestasjon for ungdom finnes i de fleste kommuner og er gratis, uten timebestilling og med taushetsplikt. Der kan du få råd om prevensjon, testing for SOI og kondomer. Fastlegen kan skrive ut resepter, og apotek selger kondomer uten resept. I Norge er hormonell prevensjon gratis for jenter under 20 år.

Hvis du mistenker at du har fått en SOI: ikke få panikk, de fleste kan behandles. Ta kontakt med lege eller helsestasjon, unngå seksuell kontakt til du har fått testsvar, og varsle seksualpartnere slik at de også kan teste seg. Det er ingen skam å bli smittet, det kan skje alle som er seksuelt aktive, og å oppsøke hjelp er ansvarlig og modent.`,
    },
    {
      id: 'naturfag-10-7-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på beskyttelse og hjelp:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-4-n-quiz3-q0',
            task: 'Hvorfor er kondom spesielt viktig som prevensjon for ungdom?',
            options: [
              { id: 'a', text: 'Fordi kondom er billigere enn andre metoder', isCorrect: false },
              { id: 'b', text: 'Fordi kondom er den eneste metoden som beskytter mot både graviditet og SOI', isCorrect: true },
              { id: 'c', text: 'Fordi kondom ikke har noen bivirkninger', isCorrect: false },
              { id: 'd', text: 'Fordi kondom er den mest effektive metoden mot graviditet', isCorrect: false },
            ],
            solution:
              'Kondom er den eneste metoden som gir dobbel beskyttelse mot både graviditet og SOI. Ungdom har ofte nye seksualpartnere og vet kanskje ikke partnerens SOI-status, så kondom er ekstra viktig.',
          },
          {
            id: 'naturfag-10-7-4-n-quiz3-q1',
            task: 'Hva bør du gjøre hvis du har hatt ubeskyttet sex?',
            options: [
              { id: 'a', text: 'Ingenting, det går nok bra', isCorrect: false },
              { id: 'b', text: 'Vente noen måneder og se om du merker symptomer', isCorrect: false },
              { id: 'c', text: 'Kontakte helsestasjon eller lege for testing, og vurdere angrepille ved graviditetsrisiko', isCorrect: true },
              { id: 'd', text: 'Ta antibiotika forebyggende', isCorrect: false },
            ],
            solution:
              'Etter ubeskyttet sex bør du kontakte helsestasjon for ungdom eller fastlege for testing. Vurder angrepille hvis det er risiko for uønsket graviditet, helst innen 12 timer. Testing er gratis på helsestasjon, og taushetsplikten gjelder.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært om prevensjon og seksuelt overførbare infeksjoner. Prevensjonsmetoder deles i barrieremetoder som kondom, hormonelle metoder som p-piller og p-stav, og ikke-hormonelle langtidsmetoder som kobberspiral. Kondom er den eneste metoden som beskytter mot både graviditet og SOI.

Dobbel beskyttelse betyr å bruke kondom sammen med en hormonell metode, og gir best mulig beskyttelse. Angrepillen er nødprevensjon som bør tas så raskt som mulig etter ubeskyttet samleie.

SOI smitter gjennom kontakt mellom slimhinner og kroppsvæsker. Bakterielle SOI-er som klamydia, gonoré og syfilis kan kureres med antibiotika, mens virale SOI-er som HPV, herpes og HIV kan behandles men ikke kureres. Klamydia er den vanligste SOI-en i Norge og er ofte uten symptomer.

HPV-vaksine gis i 7. klasse og beskytter mot de farligste HPV-typene. I Norge er hormonell prevensjon gratis for jenter under 20 år, og helsestasjon for ungdom tilbyr gratis testing og rådgivning med taushetsplikt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.5 NARRATIV: Samtykke, grenser og seksuell helse
// ============================================================================

export const CHAPTER_NATURFAG_10_7_5_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-7-5-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '7.5',
  title: 'Samtykke, grenser og seksuell helse',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hva samtykke betyr i praksis, lær om grensesetting og sunne relasjoner, og finn ut hvor du kan få hjelp med seksuell helse.',
  estimatedMinutes: 35,
  competenceGoals: [
    'forstå hva samtykke betyr og hvordan det fungerer i praksis',
    'kjenne til egne rettigheter knyttet til kropp og seksualitet',
    'vite hvor man kan få hjelp og rådgivning om seksuell helse',
  ],
  linkedChapterId: 'naturfag-10-7-5',
  content: [
    {
      id: 'naturfag-10-7-5-n-intro',
      type: 'text',
      content: `## Mer enn bare kropp

Seksuell helse handler om mye mer enn å beskytte seg mot graviditet og infeksjoner. Det handler også om samtykke, grenser, respekt og trygghet. Alle mennesker har rett til å bestemme over egen kropp, og det er et grunnleggende prinsipp at all seksuell aktivitet skal bygge på frivillig samtykke.

I de forrige kapitlene har vi sett på kroppens biologi, reproduksjon og prevensjon. Nå skal vi se på noe like viktig: de menneskelige sidene av seksualitet. Hvordan vet du at den andre virkelig vil? Hvordan setter du grenser, og hvordan respekterer du andres? Hva er en sunn relasjon, og hva er varseltegnene på en usunn? Og ikke minst, hvor kan du få hjelp hvis du trenger det?`,
    },
    {
      id: 'naturfag-10-7-5-n-section1',
      type: 'text',
      content: `## Samtykke: Et tydelig ja

Samtykke er et tydelig ja, ikke bare fravær av nei. Det betyr at alle involverte aktivt, frivillig og entusiastisk ønsker å delta. Samtykke har fem viktige kjennetegn.

For det første skal samtykke være frivillig. Det gis uten press, trusler eller tvang. Man skal aldri føle seg presset til noe man ikke vil, og en person som er beruset, bevisstløs eller sovende kan ikke gi frivillig samtykke.

For det andre skal det være entusiastisk. Et motvillig «ja» eller «greit da» etter mas er ikke ekte samtykke. Begge parter bør føle seg komfortable og glade.

For det tredje skal det være informert, altså at man forstår hva man sier ja til. For det fjerde er det spesifikt: samtykke til én handling betyr ikke samtykke til alle handlinger. At noen sier ja til å kysse betyr ikke at de sier ja til mer. Og for det femte kan samtykke alltid trekkes tilbake. Man har rett til å ombestemme seg når som helst, og den andre må respektere det umiddelbart.

I Norge er den seksuelle lavalderen 16 år. Det betyr at det er ulovlig å ha seksuell omgang med noen under 16 år. Straffeloven sier også at all seksuell omgang skal bygge på frivillig samtykke. Å sjekke samtykke trenger ikke være vanskelig. Enkle spørsmål som «er dette greit for deg?» eller «vil du at jeg skal fortsette?» viser respekt og omsorg.`,
    },
    {
      id: 'naturfag-10-7-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på samtykke:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-5-n-quiz1-q0',
            task: 'Hvilken situasjon beskriver et gyldig samtykke?',
            options: [
              { id: 'a', text: 'En person sier «greit da» etter gjentatt mas', isCorrect: false },
              { id: 'b', text: 'En person er sterkt beruset og sier «ja»', isCorrect: false },
              { id: 'c', text: 'En person sier entusiastisk «ja, det vil jeg» uten press', isCorrect: true },
              { id: 'd', text: 'En person sier ingenting og den andre tolker det som ja', isCorrect: false },
            ],
            solution:
              'Gyldig samtykke er frivillig, entusiastisk og tydelig. Et «greit da» etter mas er press, en beruset person kan ikke gi gyldig samtykke, og taushet er ikke samtykke. Kun et aktivt, frivillig og entusiastisk ja er gyldig.',
          },
          {
            id: 'naturfag-10-7-5-n-quiz1-q1',
            task: 'Hva er den seksuelle lavalderen i Norge?',
            options: [
              { id: 'a', text: '14 år', isCorrect: false },
              { id: 'b', text: '15 år', isCorrect: false },
              { id: 'c', text: '16 år', isCorrect: true },
              { id: 'd', text: '18 år', isCorrect: false },
            ],
            solution:
              'Den seksuelle lavalderen i Norge er 16 år. Det betyr at det er ulovlig å ha seksuell omgang med noen under 16 år. Loven er der for å beskytte barn og unge mot utnyttelse.',
          },
          {
            id: 'naturfag-10-7-5-n-quiz1-q2',
            task: 'Kan man trekke tilbake samtykke midt i en seksuell handling?',
            options: [
              { id: 'a', text: 'Nei, når man har sagt ja er det bindende', isCorrect: false },
              { id: 'b', text: 'Bare hvis man har en god grunn', isCorrect: false },
              { id: 'c', text: 'Ja, man kan alltid ombestemme seg og si stopp', isCorrect: true },
              { id: 'd', text: 'Bare hvis man ikke er i et forhold', isCorrect: false },
            ],
            solution:
              'Samtykke kan alltid trekkes tilbake, uansett tidspunkt. Selv midt i en seksuell handling har man rett til å si stopp, og den andre parten må respektere dette umiddelbart. Tidligere samtykke betyr heller ikke samtykke neste gang.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-5-n-section2',
      type: 'text',
      content: `## Grenser, relasjoner og overgrep

Grensesetting handler om å kjenne sine egne grenser og kommunisere dem tydelig. Alle har ulike grenser for hva de er komfortable med, og det er alltid greit å si nei uten å måtte forklare eller begrunne det. Stol på magefølelsen, og respekter andres grenser umiddelbart når de sier fra.

I en sunn relasjon finner du gjensidig respekt, tillit, ærlighet, god kommunikasjon, likeverd og frihet. Begge parter har lov til å ha egne venner, interesser og meninger, og man føler seg trygg. Varseltegn på en usunn relasjon er kontroll, for eksempel at partneren sjekker telefonen din eller bestemmer hvem du får treffe. Andre varseltegn er isolering fra venner og familie, manipulasjon med skyldfølelse eller trusler, og nedvurdering som konstant kritikk. Sjalusi er ikke et tegn på kjærlighet, det er et tegn på kontrollbehov. Hvis en relasjon gjør deg utrygg, har du alltid rett til å gå.

Seksuelle overgrep er all seksuell kontakt uten samtykke. Det er alltid overgriperens skyld, aldri offeret sin, uansett klesvalg, oppførsel eller ruspåvirkning. Seksuell tvang inkluderer emosjonelt press, skyldfølelse, trusler og gjentatt mas. Det er også viktig å kjenne til digitale grenser: å sende nakenbilder innebærer risiko, og det er ulovlig å dele nakenbilder av noen under 18 år.

Gruppepress knyttet til seksualitet er vanlig blant ungdom. Husk at det ikke stemmer at «alle gjør det», at du bestemmer selv, og at det er helt greit å vente.`,
    },
    {
      id: 'naturfag-10-7-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på grenser og relasjoner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-5-n-quiz2-q0',
            task: 'Hvem har skylden dersom et seksuelt overgrep skjer?',
            options: [
              { id: 'a', text: 'Den som var beruset', isCorrect: false },
              { id: 'b', text: 'Den som hadde utfordrende klær', isCorrect: false },
              { id: 'c', text: 'Det er alltid overgriperen som har skylden', isCorrect: true },
              { id: 'd', text: 'Den som gikk alene sent på kvelden', isCorrect: false },
            ],
            solution:
              'Det er alltid og utelukkende overgriperen som har ansvaret for et overgrep. Det spiller ingen rolle hva offeret hadde på seg, om de var beruset, eller hvor de befant seg. Å skylde på offeret kalles victim blaming og er feil.',
          },
          {
            id: 'naturfag-10-7-5-n-quiz2-q1',
            task: 'Hvilken av følgende er et varseltegn på en usunn relasjon?',
            options: [
              { id: 'a', text: 'Partneren støtter deg i å bruke tid med venner', isCorrect: false },
              { id: 'b', text: 'Dere snakker åpent om uenigheter', isCorrect: false },
              { id: 'c', text: 'Partneren sjekker telefonen din og bestemmer hvem du får treffe', isCorrect: true },
              { id: 'd', text: 'Dere respekterer hverandres grenser', isCorrect: false },
            ],
            solution:
              'Å sjekke partnerens telefon og bestemme hvem hen får treffe er kontrollatferd og et tydelig varseltegn. I en sunn relasjon har begge frihet til egne venner, og man respekterer hverandres privatliv.',
          },
          {
            id: 'naturfag-10-7-5-n-quiz2-q2',
            task: 'Er det lov å dele nakenbilder av noen under 18 år?',
            options: [
              { id: 'a', text: 'Ja, hvis personen har gitt samtykke', isCorrect: false },
              { id: 'b', text: 'Ja, hvis det bare er til venner', isCorrect: false },
              { id: 'c', text: 'Nei, det er ulovlig', isCorrect: true },
              { id: 'd', text: 'Ja, hvis bildet allerede er delt', isCorrect: false },
            ],
            solution:
              'Det er ulovlig å dele nakenbilder av noen under 18 år. Dette gjelder også bilder man har fått tilsendt frivillig. Å presse noen til å sende nakenbilder er aldri greit. Hvis et bilde av deg er delt, kan du kontakte Slettmeg.no for hjelp.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-5-n-section3',
      type: 'text',
      content: `## Seksuell helse, rettigheter og hjelp

Verdens helseorganisasjon, WHO, definerer seksuell helse som en tilstand av fysisk, emosjonelt, mentalt og sosialt velvære knyttet til seksualitet. Det handler ikke bare om fravær av sykdom, men om å ha en positiv og respektfull tilnærming til seksualitet.

Som ung i Norge har du flere viktige rettigheter. Du har rett til korrekt informasjon om kropp og seksualitet, rett til gratis prevensjon dersom du er jente under 20 år, rett til å oppsøke helsestasjon uten foreldres samtykke, rett til privatliv, rett til å si nei, og rett til å være den du er uavhengig av seksuell orientering eller kjønnsidentitet.

Hvis du har spørsmål eller trenger hjelp, finnes det flere steder å henvende seg. Helsestasjon for ungdom er gratis, uten timebestilling og med taushetsplikt. Fastlegen kan hjelpe med prevensjon og testing. Sex og samfunn, på sexogsamfunn.no, er Norges største senter for seksuell og reproduktiv helse. Ung.no er en offentlig informasjonskanal der du kan stille anonyme spørsmål.

Ved overgrep eller vold kan du ringe Incest- og voldtektstelefonen på 800 57 000, Kors på halsen på 800 33 321, eller Alarmtelefonen for barn og unge på 116 111. Alle er gratis og døgnåpne. Husk: å be om hjelp er et tegn på styrke, og alle fortjener å ha det trygt og godt.`,
    },
    {
      id: 'naturfag-10-7-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-7-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på seksuell helse og rettigheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-7-5-n-quiz3-q0',
            task: 'Hva inkluderer seksuell helse ifølge WHO?',
            options: [
              { id: 'a', text: 'Bare fravær av seksuelt overførbare infeksjoner', isCorrect: false },
              { id: 'b', text: 'Bare fysisk helse knyttet til reproduksjon', isCorrect: false },
              { id: 'c', text: 'Fysisk, emosjonelt, mentalt og sosialt velvære knyttet til seksualitet', isCorrect: true },
              { id: 'd', text: 'Bare å bruke prevensjon', isCorrect: false },
            ],
            solution:
              'WHO definerer seksuell helse som en tilstand av fysisk, emosjonelt, mentalt og sosialt velvære. Det handler om mer enn bare kropp og sykdom, det inkluderer trygge relasjoner, positive følelser og respekt.',
          },
          {
            id: 'naturfag-10-7-5-n-quiz3-q1',
            task: 'Hva gjelder for helsestasjon for ungdom?',
            options: [
              { id: 'a', text: 'Du trenger henvisning fra fastlege for å komme dit', isCorrect: false },
              { id: 'b', text: 'De kan fortelle foreldrene dine alt du sier', isCorrect: false },
              { id: 'c', text: 'Det er gratis, uten timebestilling, og de har taushetsplikt', isCorrect: true },
              { id: 'd', text: 'Du må betale for testing og prevensjon', isCorrect: false },
            ],
            solution:
              'Helsestasjon for ungdom er gratis, uten timebestilling, og helsepersonell har taushetsplikt. Du kan oppsøke dem uten foreldres samtykke for råd om prevensjon, testing og samtaler om seksualitet og helse.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-7-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket de menneskelige sidene av seksualitet. Samtykke er et tydelig ja som er frivillig, entusiastisk, informert, spesifikt og kan trekkes tilbake. Den seksuelle lavalderen i Norge er 16 år.

Grensesetting handler om å kjenne og kommunisere sine grenser, og det er alltid greit å si nei. Sunne relasjoner kjennetegnes av respekt, tillit, kommunikasjon og frihet, mens usunne relasjoner kjennetegnes av kontroll, manipulasjon og nedvurdering. Seksuelle overgrep er all seksuell kontakt uten samtykke, og det er alltid overgriperens skyld.

Seksuell helse handler om fysisk, emosjonelt, mentalt og sosialt velvære. Som ung i Norge har du rett til informasjon, gratis prevensjon, helsehjelp med taushetsplikt, privatliv, og rett til å være den du er.

Helsestasjon for ungdom er gratis og uten timebestilling. Ved overgrep eller vold finnes døgnåpne hjelpetelefoner som Incest- og voldtektstelefonen (800 57 000), Kors på halsen (800 33 321) og Alarmtelefonen for barn og unge (116 111). Husk at å be om hjelp er et tegn på styrke, og at alle fortjener å ha det trygt og godt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle narrative kapitler i DEL 7
// ============================================================================

export const NATURFAG_10_NARRATIV_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NATURFAG_10_7_1_NARRATIV,
  CHAPTER_NATURFAG_10_7_2_NARRATIV,
  CHAPTER_NATURFAG_10_7_3_NARRATIV,
  CHAPTER_NATURFAG_10_7_4_NARRATIV,
  CHAPTER_NATURFAG_10_7_5_NARRATIV,
];
