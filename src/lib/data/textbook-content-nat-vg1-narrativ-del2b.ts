/**
 * Tekstbok innhold for Naturfag VG1 - NARRATIV VERSJON DEL 2B
 * Seksjon 2: Bølger, stråling og radioaktivitet (Kapittel 2.4-2.7)
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.4 NARRATIV: Radioaktivitet og kjerneforandringer
// ============================================================================

export const CHAPTER_NAT_VG1_2_4_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-2-4-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '2.4',
  title: 'Radioaktivitet og kjerneforandringer',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om ustabile atomkjerner, mystisk stråling og de tre typene radioaktivt henfall som forandrer selve grunnstoffene -- fra Becquerels tilfeldige oppdagelse til røykvarsleren på veggen din.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter',
  ],
  linkedChapterId: 'nat-vg1-2-4',
  content: [
    {
      id: 'nat-vg1-2-4-n-intro',
      type: 'text',
      content: `## En oppdagelse ved et uhell

Året er 1896, og den franske fysikeren Henri Becquerel holder på med eksperimenter med fluorescerende materialer. Han legger et stykke uranmineral oppå en fotografisk plate som er pakket inn i svart papir, og lar det ligge i en skuff. Når han senere fremkaller platen, oppdager han noe merkelig: platen er blitt svertnet, som om den hadde blitt belyst. Men det hadde den ikke. Uranmineralet sendte ut en usynlig, mystisk stråling helt av seg selv.

Denne tilfeldige oppdagelsen åpnet døren til en helt ny verden. Marie Curie tok stafettpinnen videre og oppdaget grunnstoffene polonium og radium, begge intenst radioaktive. For dette banebrytende arbeidet mottok hun to nobelpriser -- en bedrift som gjør henne til en av historiens mest bemerkelsesverdige vitenskapspersoner.

Men hva var det egentlig som skjedde inne i uranmineralet? Svaret ligger dypt inne i atomkjernen. Noen atomkjerner er ustabile, og for å oppnå stabilitet sender de ut partikler eller energi. Denne prosessen kalles **radioaktivitet**, eller mer presist **radioaktiv nedbryting** og **radioaktivt henfall**. I dette kapittelet skal vi dykke ned i atomkjernen og forstå hva som gjør noen kjerner ustabile, hvilke typer stråling de sender ut, og hvordan selve grunnstoffet kan forandre seg i prosessen.`,
    },
    {
      id: 'nat-vg1-2-4-n-section1',
      type: 'text',
      content: `## Inne i atomkjernen

For å forstå radioaktivitet må vi først forstå hva atomkjernen er bygget opp av. Kjernen består av to typer partikler: **protoner**, som er positivt ladet, og **nøytroner**, som er elektrisk nøytrale. Sammen kalles de **nukleoner**. Antall protoner bestemmer hvilket grunnstoff vi har -- dette tallet kalles **atomnummeret** og forkortes Z. Uran har for eksempel 92 protoner, og det er nettopp dette som gjør det til uran. **Massetallet** (A) er summen av protoner og nøytroner i kjernen. For uran-238 er massetallet 238, som betyr at kjernen inneholder 92 protoner og 146 nøytroner. Vi skriver dette som ²³⁸₉₂U.

Men hva holder kjernen sammen? Protonene er jo alle positivt ladet, og like ladninger frastøter hverandre. Svaret er den **sterke kjernekraften**, en av naturens fundamentale krefter. Den er sterkere enn den elektriske frastøtingen, men virker bare over svært korte avstander -- omtrent som en superlim som bare fungerer når tingene er i direkte kontakt.

Noen kjerner er stabile, mens andre er det ikke. Det finnes flere grunner til ustabilitet. Kjernen kan ha for mange nøytroner i forhold til protoner, eller for få. Den kan rett og slett være for stor -- alle grunnstoffer med atomnummer over 82, altså tyngre enn bly, er ustabile. Kjernen kan også befinne seg i en eksitert tilstand med overskuddsenergi. For lette kjerner, de med atomnummer under 20, trengs omtrent like mange protoner som nøytroner for stabilitet. Tyngre kjerner trenger gradvis flere nøytroner for å holde sammen. Og de aller tyngste? De er alltid ustabile, uansett hvor mange nøytroner de har.`,
    },
    {
      id: 'nat-vg1-2-4-n-section2',
      type: 'text',
      content: `## Isotoper -- søsken med ulik vekt

Tenk deg to versjoner av samme grunnstoff, som tvillinger med ulik kroppsvekt. De har nøyaktig like mange protoner, og dermed de samme kjemiske egenskapene, men de har ulikt antall nøytroner. Slike varianter kalles **isotoper**.

Karbon er et godt eksempel. Det vanligste karbonatomet, karbon-12, har 6 protoner og 6 nøytroner -- helt stabilt og utgjør 98,9 prosent av alt karbon. Karbon-13 har ett ekstra nøytron og er også stabilt, men utgjør bare 1,1 prosent. Og så har vi karbon-14, med 6 protoner og 8 nøytroner. De to ekstra nøytronene gjør denne isotopen ustabil -- den er radioaktiv og finnes bare i spormengder.

Uran har også flere isotoper. Uran-234 har en halveringstid på 245 000 år, uran-235 har 704 millioner år og er den isotopen som brukes i kjernekraft (den er *fissil*, altså spaltbar), og uran-238 har en halveringstid på hele 4,5 milliarder år, omtrent like gammel som jorden selv.

Ustabile isotoper som sender ut stråling kalles **radioisotoper**. Det viktige poenget er at isotoper av samme grunnstoff oppfører seg nesten identisk kjemisk -- kroppen din kan ikke skille mellom karbon-12 og karbon-14. Men kjernefysisk er de svært forskjellige. Det er nettopp dette som gjør radioisotoper nyttige i medisin og forskning, som vi skal se senere.`,
    },
    {
      id: 'nat-vg1-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på atomkjernen og isotoper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-4-n-quiz1-q0',
            task: 'Hva er det som bestemmer hvilket grunnstoff et atom er?',
            options: [
              { id: 'a', text: 'Antall nøytroner i kjernen', isCorrect: false },
              { id: 'b', text: 'Antall elektroner i skallet', isCorrect: false },
              { id: 'c', text: 'Massetallet (A)', isCorrect: false },
              { id: 'd', text: 'Antall protoner i kjernen (atomnummeret Z)', isCorrect: true },
            ],
            solution:
              'Atomnummeret Z, altså antall protoner, er det som definerer hvilket grunnstoff et atom er. Uran har alltid 92 protoner, karbon har alltid 6. Endres antall protoner, endres grunnstoffet.',
          },
          {
            id: 'nat-vg1-2-4-n-quiz1-q1',
            task: 'Hva er isotoper?',
            options: [
              { id: 'a', text: 'Atomer med ulikt antall elektroner', isCorrect: false },
              { id: 'b', text: 'Varianter av samme grunnstoff med ulikt antall nøytroner', isCorrect: true },
              { id: 'c', text: 'Atomer som alltid er radioaktive', isCorrect: false },
              { id: 'd', text: 'Grunnstoffer som ligger ved siden av hverandre i periodesystemet', isCorrect: false },
            ],
            solution:
              'Isotoper er varianter av samme grunnstoff med like mange protoner, men ulikt antall nøytroner. De har dermed ulik masse, men nesten identiske kjemiske egenskaper. Noen isotoper er stabile, andre er radioaktive.',
          },
          {
            id: 'nat-vg1-2-4-n-quiz1-q2',
            task: 'Hvorfor er alle grunnstoffer med atomnummer over 82 (bly) ustabile?',
            options: [
              { id: 'a', text: 'De har for få elektroner', isCorrect: false },
              { id: 'b', text: 'Kjernene er for store til at den sterke kjernekraften kan holde dem stabilt sammen', isCorrect: true },
              { id: 'c', text: 'De finnes ikke i naturen', isCorrect: false },
              { id: 'd', text: 'De mangler nøytroner', isCorrect: false },
            ],
            solution:
              'Den sterke kjernekraften virker bare over svært korte avstander. Når kjernen blir for stor (over 82 protoner), klarer ikke kjernekraften å holde alle nukleonene sammen mot den elektriske frastøtingen mellom protonene. Derfor er alle slike grunnstoffer ustabile og radioaktive.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-4-n-section3',
      type: 'text',
      content: `## Alfastråling -- den tunge kanonen

Når en ustabil kjerne sender ut en **alfapartikkel**, skjer det noe dramatisk. En alfapartikkel er nemlig en hel heliumkjerne -- 2 protoner og 2 nøytroner pakket tett sammen. Den skrives ⁴₂He eller ⁴₂α. Tenk på det som at kjernen spytter ut en solid klump for å bli lettere og mer stabil.

Alfapartikkelen er relativt stor og tung, med en ladning på +2. Den har enormt høy **ioniseringsevne**, som betyr at den river løs elektroner fra alle atomene den passerer. Men nettopp fordi den er så stor og interagerer så kraftig, bruker den opp energien sin raskt. Rekkevidden er bare noen centimeter i luft, og den stoppes av et papirark, et klesplagg, eller hudens ytre lag.

Når en kjerne sender ut en alfapartikkel, mister den 2 protoner og 2 nøytroner. Atomnummeret synker med 2, massetallet synker med 4, og grunnstoffet *forandrer seg*. Ta uran-238 som eksempel: ²³⁸₉₂U sender ut en alfapartikkel og blir til ²³⁴₉₀Th -- altså thorium-234. Uran har blitt til et helt annet grunnstoff.

Men her er paradokset med alfastråling: utvendig er den relativt ufarlig fordi den stoppes av huden. Men innvendig, dersom du puster inn eller svelger et alfastrålende stoff, er den *svært* farlig. Den høye ioniseringsevnen gir massiv lokal skade til lungevev og andre organer. Radon, en radioaktiv gass som kan sive inn i boliger fra berggrunnen, er et viktig eksempel på dette. Vi kommer tilbake til radon i kapittel 2.6.`,
    },
    {
      id: 'nat-vg1-2-4-n-section4',
      type: 'text',
      content: `## Betastråling -- nøytronets forvandling

Betastråling oppstår på en helt annen måte enn alfa. Ved **beta-minus-nedbryting**, som er den vanligste formen, skjer noe bemerkelsesverdig inne i kjernen: et nøytron omdannes til et proton, og i prosessen sendes det ut et elektron og et antinøytrino. Reaksjonen er: n → p + e⁻ + antinøytrino.

Betapartikkelen -- altså elektronet -- er mye lettere enn en alfapartikkel, med ladning -1. Den har middels ioniseringsevne og kan bevege seg med hastigheter opp mot 99 prosent av lyshastigheten. Rekkevidden i luft er noen meter, og den stoppes av aluminiumsfolie, tynn plast eller noen millimeter tre.

Når et nøytron blir til et proton, øker atomnummeret med 1, men massetallet forblir det samme -- for totalt antall nukleoner er uendret. Et nøytron er bare blitt til et proton. Et vakkert eksempel er karbon-14: ¹⁴₆C sender ut et betapartikkel og blir til ¹⁴₇N -- nitrogen-14. Karbon har blitt til nitrogen!

Det finnes også en sjeldnere variant kalt **beta-pluss** eller positronemisjon, der et proton omdannes til et nøytron og sender ut et positron (et antielektron med ladning +1). Her synker atomnummeret med 1.

Betastråling er farlig både utvendig og innvendig, fordi den kan trenge gjennom huden og nå dypere vev. Den krever mer skjerming enn alfa, men langt mindre enn gamma.`,
    },
    {
      id: 'nat-vg1-2-4-n-section5',
      type: 'text',
      content: `## Gammastråling -- ren energi fra kjernen

Den tredje typen radioaktiv stråling er fundamentalt annerledes enn de to første. **Gammastråling** er ikke partikler i det hele tatt -- det er høyenergetisk elektromagnetisk stråling, altså fotoner. Tenk på det som ekstremt kraftig lys, bare med en bølgelengde som er millioner av ganger kortere enn synlig lys.

Gammastråling sendes ut når en kjerne går fra en eksitert tilstand til en lavere energitilstand, litt som når et atom sender ut synlig lys, bare med enormt mye mer energi. Gammastråling har ingen masse og ingen ladning, og den beveger seg med lyshastigheten. Den har relativt lav ioniseringsevne per lengdeenhet, fordi den interagerer sjeldnere med materie enn alfa og beta. Men den har til gjengjeld svært lang rekkevidde og krever tykk bly eller betong for effektiv skjerming.

Det viktige å merke seg er at ved gammastråling endres verken atomnummer eller massetall. Kjernen mister bare energi, ikke partikler. Grunnstoffet forblir det samme. Gammastråling følger ofte etter alfa- eller betanedbryting, når den nye kjernen har overskuddsenergi som den kvitter seg med som gammafotoner. Et eksempel er kobolt-60, som sender ut en betapartikkel og blir til nikkel-60, etterfulgt av gammastråling: ⁶⁰₂₇Co → ⁶⁰₂₈Ni + e⁻ + γ.

Gammastråling kan trenge dypt inn i kroppen og gi stråledose til indre organer. Skjerming krever tunge materialer som bly eller tykk betong.

En god huskeregel for skjerming: **A**lfa stoppes av et **A**rk papir, **B**eta stoppes av en **B**oks av aluminium, og **G**amma stoppes av en **G**rav av tykk bly eller betong.`,
    },
    {
      id: 'nat-vg1-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på de tre strålingstypene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-4-n-quiz2-q0',
            task: 'Hva skjer med atomnummeret og massetallet ved alfanedbryting?',
            options: [
              { id: 'a', text: 'Atomnummer synker med 2, massetall synker med 4', isCorrect: true },
              { id: 'b', text: 'Atomnummer øker med 1, massetall er uendret', isCorrect: false },
              { id: 'c', text: 'Begge er uendret', isCorrect: false },
              { id: 'd', text: 'Atomnummer synker med 4, massetall synker med 2', isCorrect: false },
            ],
            solution:
              'Ved alfanedbryting sendes en heliumkjerne (2 protoner + 2 nøytroner) ut. Atomnummeret synker med 2 fordi to protoner forsvinner, og massetallet synker med 4 fordi fire nukleoner forsvinner. Grunnstoffet endres.',
          },
          {
            id: 'nat-vg1-2-4-n-quiz2-q1',
            task: 'Karbon-14 sender ut betastråling. Hvilket grunnstoff dannes?',
            options: [
              { id: 'a', text: 'Bor-14', isCorrect: false },
              { id: 'b', text: 'Karbon-13', isCorrect: false },
              { id: 'c', text: 'Nitrogen-14', isCorrect: true },
              { id: 'd', text: 'Oksygen-14', isCorrect: false },
            ],
            solution:
              'Ved beta-minus-nedbryting øker atomnummeret med 1, mens massetallet er uendret. Karbon har Z=6, og 6+1=7, som er nitrogen. Massetallet er fortsatt 14. Altså: ¹⁴₆C → ¹⁴₇N.',
          },
          {
            id: 'nat-vg1-2-4-n-quiz2-q2',
            task: 'Hvilken strålingstype har ingen masse og ingen ladning?',
            options: [
              { id: 'a', text: 'Alfastråling', isCorrect: false },
              { id: 'b', text: 'Betastråling', isCorrect: false },
              { id: 'c', text: 'Nøytronstråling', isCorrect: false },
              { id: 'd', text: 'Gammastråling', isCorrect: true },
            ],
            solution:
              'Gammastråling er elektromagnetisk stråling (fotoner) uten masse og ladning. Den endrer verken atomnummer eller massetall. Alfapartikler har masse 4 og ladning +2, betapartikler har liten masse og ladning -1.',
          },
          {
            id: 'nat-vg1-2-4-n-quiz2-q3',
            task: 'Hvorfor er alfastråling spesielt farlig hvis den kommer inn i kroppen?',
            options: [
              { id: 'a', text: 'Fordi den har svært lang rekkevidde', isCorrect: false },
              { id: 'b', text: 'Fordi den har svært høy ioniseringsevne og gir massiv lokal skade', isCorrect: true },
              { id: 'c', text: 'Fordi den beveger seg med lyshastigheten', isCorrect: false },
              { id: 'd', text: 'Fordi den er elektromagnetisk stråling', isCorrect: false },
            ],
            solution:
              'Alfapartikler er store og tunge, med høy ioniseringsevne. Utvendig stoppes de av huden, men innvendig river de løs elektroner fra alt de passerer og gjør enorm skade på nærliggende celler og DNA. All energien deponeres lokalt.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-4-n-section6',
      type: 'text',
      content: `## Nedbrytningskjeder og kjernereaksjoner

Radioaktiv nedbryting er sjelden en enkel hendelse. Ofte er produktet av nedbrytingen selv ustabilt, og brytes ned videre. Slik dannes **nedbrytningskjeder** der ett grunnstoff omdannes til et annet, som igjen omdannes, helt til en stabil kjerne er nådd.

Uran-238 er et perfekt eksempel. Det starter med alfanedbryting og blir til thorium-234. Thorium-234 er ustabilt og sender ut en betapartikkel, og blir til protaktinium-234. Protaktinium-234 er heller ikke stabilt -- enda en betanedbryting gir oss uran-234. Og kjeden fortsetter videre gjennom 14 trinn, med vekselvis alfa- og betanedbryting, helt til vi ender opp med stabilt bly-206. Hele prosessen tar milliarder av år. Ett av mellomproduktene er radon-222, en radioaktiv gass som utgjør en reell helserisiko i norske boliger.

For å holde styr på hva som skjer i en kjernereaksjon, bruker vi balanseringsregler. Summen av atomnumre og summen av massetall må være like på begge sider av reaksjonspilen. Ta thorium-234 som eksempel: ²³⁴₉₀Th → ²³⁴₉₁Pa + ⁰₋₁e. Massetall: 234 = 234 + 0. Atomnummer: 90 = 91 + (-1). Begge stemmer.

Et annet spennende eksempel er americium-241, som finnes i røykvarsleren din. Den sender ut alfastråling: ²⁴¹₉₅Am → ²³⁷₉₃Np + ⁴₂He. Det er trygt fordi alfastrålingen stoppes av luften og metallkapselen, og mengden er minimal -- bare 0,3 mikrogram. Men når røykvarsleren kasseres, bør den leveres som spesialavfall.`,
    },
    {
      id: 'nat-vg1-2-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kjernereaksjoner og nedbrytningskjeder:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-4-n-quiz3-q0',
            task: 'Radon-222 (Z=86) sender ut en alfapartikkel. Hva blir massetallet til produktet?',
            options: [
              { id: 'a', text: '220', isCorrect: false },
              { id: 'b', text: '222', isCorrect: false },
              { id: 'c', text: '218', isCorrect: true },
              { id: 'd', text: '226', isCorrect: false },
            ],
            solution:
              'Ved alfanedbryting synker massetallet med 4. Radon-222 minus 4 gir massetall 218. Atomnummeret synker med 2, fra 86 til 84, som er polonium. Altså: ²²²₈₆Rn → ²¹⁸₈₄Po + ⁴₂He.',
          },
          {
            id: 'nat-vg1-2-4-n-quiz3-q1',
            task: 'Hva ender uran-238 sin nedbrytningskjede opp som?',
            options: [
              { id: 'a', text: 'Stabilt jern-56', isCorrect: false },
              { id: 'b', text: 'Stabilt bly-206', isCorrect: true },
              { id: 'c', text: 'Stabilt gull-197', isCorrect: false },
              { id: 'd', text: 'Stabilt helium-4', isCorrect: false },
            ],
            solution:
              'Uran-238 brytes ned gjennom 14 trinn av vekslende alfa- og betanedbryting over milliarder av år. Sluttproduktet er stabilt bly-206 (²⁰⁶₈₂Pb), som ikke lenger er radioaktivt.',
          },
          {
            id: 'nat-vg1-2-4-n-quiz3-q2',
            task: 'Hva må stemme i en balansert kjernereaksjon?',
            options: [
              { id: 'a', text: 'Bare massetallene må være like på begge sider', isCorrect: false },
              { id: 'b', text: 'Bare atomnumrene må være like på begge sider', isCorrect: false },
              { id: 'c', text: 'Summen av atomnumre OG summen av massetall må være like på begge sider', isCorrect: true },
              { id: 'd', text: 'Antall partikler må være likt på begge sider', isCorrect: false },
            ],
            solution:
              'I en balansert kjernereaksjon må summen av alle atomnumre (Z) og summen av alle massetall (A) være lik på begge sider av reaksjonspilen. Dette sikrer bevaring av ladning og nukleoner.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering

Fra Becquerels tilfeldige oppdagelse til røykvarsleren på veggen din -- radioaktivitet er en naturprosess der ustabile atomkjerner sender ut stråling for å bli mer stabile. Det hele handler om balanse inne i kjernen.

**Nøkkelkunnskapen fra dette kapittelet:**

- **Radioaktivitet** er spontan utsendelse av stråling fra ustabile atomkjerner, drevet av ubalanse mellom protoner og nøytroner eller for store kjerner
- **Isotoper** er varianter av samme grunnstoff med ulikt antall nøytroner -- noen er stabile, andre radioaktive (radioisotoper)
- **Alfastråling (α)** er heliumkjerner (2p + 2n) med kort rekkevidde og høy ioniseringsevne, stoppes av papir og hud, men svært farlig innvendig
- **Betastråling (β)** er elektroner fra nøytron-til-proton-omdanning, med middels rekkevidde, stoppes av aluminium
- **Gammastråling (γ)** er høyenergetiske fotoner uten masse eller ladning, med lang rekkevidde, krever bly eller betong for skjerming
- **Kjernereaksjoner** balanseres ved at summen av atomnumre og massetall er lik på begge sider
- **Nedbrytningskjeder** fører ustabile kjerner gjennom flere trinn til stabilitet, som uran-238 som ender som bly-206`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5 NARRATIV: Halveringstid og stråledoser
// ============================================================================

export const CHAPTER_NAT_VG1_2_5_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-2-5-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '2.5',
  title: 'Halveringstid og stråledoser',
  subtitle: 'Narrativ versjon',
  description:
    'Historien om radioaktivitetens innebygde klokke, fra Tsjernobyl-utslipp til datering av ismannen Ötzi -- og hvordan vi måler den usynlige strålingens virkning på kroppen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter',
  ],
  linkedChapterId: 'nat-vg1-2-5',
  content: [
    {
      id: 'nat-vg1-2-5-n-intro',
      type: 'text',
      content: `## Den forutsigbare tilfeldigheten

Her er noe fascinerende ved radioaktiv nedbryting: hvert enkelt atom bryter ned på et helt tilfeldig tidspunkt. Du kan aldri vite når akkurat det atomet vil sende ut stråling -- det kan skje om et millisekund eller om tusen år. Men ta en stor mengde atomer, si en milliard av dem, og plutselig kan du med forbløffende presisjon forutsi hvor lang tid det tar før halvparten har brutt ned.

Denne tiden kalles **halveringstid**, og den er så pålitelig at den brukes som en klokke for å datere alt fra arkeologiske funn til jordens alder. Halveringstiden er konstant for hver isotop og kan ikke påvirkes av temperatur, trykk, kjemiske reaksjoner eller noe annet vi kan gjøre. Den er en grunnleggende egenskap ved selve kjernen.

Variasjonen i halveringstider er enorm. Polonium-214 har en halveringstid på bare 0,00016 sekunder, mens uran-238 har en halveringstid på 4,5 milliarder år -- omtrent like lenge som jorden har eksistert. Radon-222, gassen som siver inn i boliger, har 3,8 dager. Jod-131, som brukes i medisin, har 8 dager. Cesium-137, som ble sluppet ut ved Tsjernobyl og Fukushima, har 30 år. Og karbon-14, som brukes til datering, har 5730 år.`,
    },
    {
      id: 'nat-vg1-2-5-n-section1',
      type: 'text',
      content: `## Å halvere og halvere igjen

Forestill deg at du har 1000 radioaktive atomer med en halveringstid på ett år. Etter ett år er halvparten, altså 500, brutt ned. Etter enda et år er halvparten av de gjenværende brutt ned -- nå har du 250 igjen. Etter tre år: 125. Etter fire: ca. 63. Etter ti halveringstider har du bare 1 av 1024 atomer igjen, altså under en promille.

Matematisk uttrykt bruker vi formelen N = N₀ · (1/2)ⁿ, der N₀ er startmengden, N er gjenstående mengde, og n er antall halveringstider. Antall halveringstider finner du ved å dele total tid med halveringstiden: n = t / t½.

La oss gjøre det konkret. Et sykehus har 200 mg jod-131 med halveringstid 8 dager. Hvor mye er igjen etter 32 dager? Vi finner først antall halveringstider: 32 dividert på 8 gir 4. Deretter beregner vi: 200 mg ganget med (1/2)⁴ er lik 200 ganget med 1/16, som gir 12,5 mg. Du kan også tenke trinnvis: 200 blir til 100, som blir til 50, som blir til 25, som blir til 12,5 mg. Etter 32 dager er altså bare 12,5 mg igjen av de opprinnelige 200 mg.

Denne forutsigbarheten gjør halveringstid til et kraftig verktøy. Leger kan beregne nøyaktig hvor lenge en radioaktiv markør vil være aktiv i kroppen. Arkeologer kan bestemme alderen på tusenvis av år gamle funn. Geologer kan datere bergarter som er milliarder av år gamle.`,
    },
    {
      id: 'nat-vg1-2-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på halveringstid og beregninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-5-n-quiz1-q0',
            task: 'Cesium-137 har halveringstid 30 år. Hvor mye av det opprinnelige utslippet fra Tsjernobyl (1986) er igjen i 2046?',
            options: [
              { id: 'a', text: '50%', isCorrect: false },
              { id: 'b', text: '12,5%', isCorrect: false },
              { id: 'c', text: '25%', isCorrect: true },
              { id: 'd', text: '75%', isCorrect: false },
            ],
            solution:
              'Fra 1986 til 2046 er det 60 år. Det er 60/30 = 2 halveringstider. Gjenstående: (1/2)² = 1/4 = 25%. Selv etter 60 år er altså en fjerdedel av cesium-137 fortsatt igjen.',
          },
          {
            id: 'nat-vg1-2-5-n-quiz1-q1',
            task: 'Et arkeologisk funn har 12,5% av den opprinnelige mengden C-14 (t½ = 5730 år). Hvor gammelt er funnet?',
            options: [
              { id: 'a', text: 'Ca. 5 700 år', isCorrect: false },
              { id: 'b', text: 'Ca. 11 500 år', isCorrect: false },
              { id: 'c', text: 'Ca. 17 200 år', isCorrect: true },
              { id: 'd', text: 'Ca. 22 900 år', isCorrect: false },
            ],
            solution:
              '100% → 50% → 25% → 12,5%, altså 3 halveringstider. Alder = 3 × 5730 = 17 190 år, altså ca. 17 200 år.',
          },
          {
            id: 'nat-vg1-2-5-n-quiz1-q2',
            task: 'Hva kan påvirke halveringstiden til en radioaktiv isotop?',
            options: [
              { id: 'a', text: 'Høy temperatur kan halvere den', isCorrect: false },
              { id: 'b', text: 'Kjemiske reaksjoner kan endre den', isCorrect: false },
              { id: 'c', text: 'Ingenting -- halveringstiden er en konstant egenskap ved kjernen', isCorrect: true },
              { id: 'd', text: 'Høyt trykk kan fordoble den', isCorrect: false },
            ],
            solution:
              'Halveringstiden er en grunnleggende kjernefysisk egenskap som ikke kan påvirkes av temperatur, trykk, kjemiske reaksjoner eller andre ytre forhold. Den er bestemt av kreftene inne i selve atomkjernen.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-5-n-section2',
      type: 'text',
      content: `## Karbondatering -- å lese historien i atomene

En av de mest elegante bruksområdene for halveringstid er **karbondatering**, en metode som har revolusjonert arkeologi og paleontologi. Prinsippet er vakkert enkelt.

Oppe i atmosfæren bombarderer kosmisk stråling nitrogenatomer og omdanner noen av dem til karbon-14. Denne radioaktive isotopen blander seg med vanlig karbon og tas opp av planter gjennom fotosyntesen. Dyr spiser plantene, og slik inneholder alle levende organismer en liten, men konstant mengde karbon-14 i forhold til vanlig karbon-12.

Når organismen dør, stopper opptaket. Fra det øyeblikket begynner karbon-14 å bryte ned med sin halveringstid på 5730 år, uten å bli erstattet. Ved å måle hvor mye karbon-14 som er igjen i et gammelt trestykke, en beinrest eller et stykke tøy, kan vi beregne hvor lenge siden organismen døde.

Tenk deg at du finner en gammel trekasse som inneholder 40 prosent av den opprinnelige mengden karbon-14. Vi setter opp ligningen (1/2)ⁿ = 0,40, tar logaritmen, og finner at n er omtrent 1,32 halveringstider. Alderen blir da 1,32 ganget med 5730, som gir omtrent 7600 år. Trekassen er fra rundt 5600 f.Kr.

Ismannen Ötzi, som ble funnet i Alpene i 1991, hadde 53 prosent av den opprinnelige mengden karbon-14. Det gir en alder på omtrent 5300 år, altså fra slutten av steinalderen. Han bar med seg en kobberøks, noe som bekrefter at han levde i overgangen mellom stein- og kobberalderen.

Karbondatering har sine begrensninger. Den fungerer bare for organisk materiale, og maksimalt til ca. 50 000 år. For eldre gjenstander og bergarter brukes andre isotoper, som uran-bly med halveringstid 4,5 milliarder år, eller kalium-argon med 1,25 milliarder år.`,
    },
    {
      id: 'nat-vg1-2-5-n-section3',
      type: 'text',
      content: `## Måle det usynlige -- enheter for stråling

Radioaktivitet er usynlig, luktfri og umerkelig for sansene våre. Derfor trenger vi presise måleenheter. Det finnes tre viktige enheter, og de måler forskjellige ting.

Den første er **becquerel (Bq)**, oppkalt etter oppdageren. Becquerel måler *aktivitet* -- altså hvor mange nedbrytinger som skjer per sekund. 1 Bq betyr at ett atom bryter ned hvert sekund. En røykvarsler inneholder ca. 30 000 Bq americium-241. Den gamle enheten curie (Ci) tilsvarer 37 milliarder Bq.

Den andre enheten er **gray (Gy)**, som måler *absorbert dose* -- altså hvor mye strålingsenergi kroppen faktisk tar imot per kilogram vev. 1 Gy er lik 1 joule per kilogram. En dose på 1 Gy til hele kroppen vil gi akutt strålesyke.

Men her kommer noe viktig: ikke all stråling er like skadelig. En bestemt mengde alfastråling gjør mye mer biologisk skade enn den samme mengden gammastråling. Derfor har vi den tredje enheten, **sievert (Sv)**, som måler *ekvivalent dose*. Den tar hensyn til stråletypen gjennom en vektingsfaktor. Gamma og beta har faktor 1, mens alfa har faktor 20. Det betyr at 1 Gy alfastråling gir hele 20 Sv ekvivalent dose, mens 1 Gy gamma gir bare 1 Sv.

For å sette dette i perspektiv: vi mottar alle ca. 3 millisievert (mSv) per år fra naturlig bakgrunnsstråling i Norge. En røntgenundersøkelse av brystet gir ca. 0,1 mSv. En CT-skanning av magen gir ca. 10 mSv, tilsvarende tre års bakgrunnsstråling. Grensen for yrkeseksponering er 20 mSv per år. Og en dose på 4000 mSv er dødelig for 50 prosent av de utsatte uten behandling.`,
    },
    {
      id: 'nat-vg1-2-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på karbondatering og stråleenheter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-5-n-quiz2-q0',
            task: 'Hvorfor fungerer ikke karbondatering for fossiler som er millioner av år gamle?',
            options: [
              { id: 'a', text: 'Fordi de ikke inneholder karbon', isCorrect: false },
              { id: 'b', text: 'Fordi C-14 bare har halveringstid 5730 år, og etter ca. 50 000 år er det for lite igjen til å måle', isCorrect: true },
              { id: 'c', text: 'Fordi fossiler er laget av stein, ikke organisk materiale', isCorrect: false },
              { id: 'd', text: 'Fordi atmosfærens C-14-nivå var annerledes den gangen', isCorrect: false },
            ],
            solution:
              'Med halveringstid 5730 år er nesten alt C-14 borte etter ca. 50 000 år (ca. 9 halveringstider gir under 0,2% igjen). For eldre gjenstander brukes andre isotoper som uran-bly (t½ = 4,5 mrd år) eller kalium-argon (t½ = 1,25 mrd år).',
          },
          {
            id: 'nat-vg1-2-5-n-quiz2-q1',
            task: 'En person mottar 0,5 mGy gammastråling og 0,1 mGy alfastråling. Hva er total ekvivalent dose?',
            options: [
              { id: 'a', text: '0,6 mSv', isCorrect: false },
              { id: 'b', text: '2,5 mSv', isCorrect: true },
              { id: 'c', text: '10,5 mSv', isCorrect: false },
              { id: 'd', text: '0,15 mSv', isCorrect: false },
            ],
            solution:
              'Gamma har vektingsfaktor 1: 0,5 mGy × 1 = 0,5 mSv. Alfa har vektingsfaktor 20: 0,1 mGy × 20 = 2,0 mSv. Totalt: 0,5 + 2,0 = 2,5 mSv. Selv om det var mer gamma, bidrar alfaen mest fordi den er så mye mer skadelig per energienhet.',
          },
          {
            id: 'nat-vg1-2-5-n-quiz2-q2',
            task: 'Hva måler enheten becquerel (Bq)?',
            options: [
              { id: 'a', text: 'Strålingens evne til å trenge gjennom materialer', isCorrect: false },
              { id: 'b', text: 'Hvor mye energi kroppen absorberer', isCorrect: false },
              { id: 'c', text: 'Antall radioaktive nedbrytinger per sekund (aktivitet)', isCorrect: true },
              { id: 'd', text: 'Den biologiske skaden fra stråling', isCorrect: false },
            ],
            solution:
              'Becquerel (Bq) måler aktivitet, altså hvor mange atomer som bryter ned per sekund. 1 Bq = 1 nedbryting per sekund. Gray (Gy) måler absorbert energi, mens sievert (Sv) tar hensyn til stråletypens biologiske virkning.',
          },
          {
            id: 'nat-vg1-2-5-n-quiz2-q3',
            task: 'Omtrent hvor mye naturlig bakgrunnsstråling mottar en nordmann per år?',
            options: [
              { id: 'a', text: 'Ca. 0,3 mSv', isCorrect: false },
              { id: 'b', text: 'Ca. 3 mSv', isCorrect: true },
              { id: 'c', text: 'Ca. 30 mSv', isCorrect: false },
              { id: 'd', text: 'Ca. 300 mSv', isCorrect: false },
            ],
            solution:
              'I Norge er gjennomsnittlig årlig bakgrunnsstråling ca. 3 mSv. Denne kommer fra radon, kosmisk stråling og naturlig radioaktivitet i mat og drikke. Til sammenligning gir én røntgenundersøkelse av brystet ca. 0,1 mSv.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-5-n-summary',
      type: 'text',
      content: `## Oppsummering

Radioaktiv nedbryting er tilfeldig for hvert enkelt atom, men forutsigbar for store mengder -- og den innebygde klokken, halveringstiden, har gitt oss verktøy til å datere fortiden og behandle sykdom.

**Nøkkelkunnskapen fra dette kapittelet:**

- **Halveringstid (t½)** er tiden det tar før halvparten av atomene har brutt ned -- konstant for hver isotop og upåvirkelig av ytre forhold
- **Formelen** N = N₀ · (1/2)ⁿ der n = t/t½ brukes til å beregne gjenstående mengde etter en viss tid
- **Karbondatering** bruker C-14 (t½ = 5730 år) til å bestemme alderen på organisk materiale opptil ca. 50 000 år
- **Becquerel (Bq)** måler aktivitet -- antall nedbrytinger per sekund
- **Gray (Gy)** måler absorbert dose -- energi per kilogram vev
- **Sievert (Sv)** måler ekvivalent dose -- tar hensyn til stråletypens biologiske virkning via vektingsfaktorer
- **Vektingsfaktorer**: Alfa har faktor 20, beta og gamma har faktor 1 -- alfastråling er altså 20 ganger mer skadelig per energienhet
- **Typiske doser**: Ca. 3 mSv/år naturlig bakgrunn, 0,1 mSv for røntgen av brystet, 20 mSv/år grense for yrkeseksponering`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6 NARRATIV: Stråling, helse og strålevern
// ============================================================================

export const CHAPTER_NAT_VG1_2_6_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-2-6-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '2.6',
  title: 'Stråling, helse og strålevern',
  subtitle: 'Narrativ versjon',
  description:
    'Fra radon i kjelleren til solkrem på stranden -- en reise gjennom strålingens helseeffekter, de tre pilarene for beskyttelse, og kunsten å skille fakta fra frykt.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter',
  ],
  linkedChapterId: 'nat-vg1-2-6',
  content: [
    {
      id: 'nat-vg1-2-6-n-intro',
      type: 'text',
      content: `## Når ordet "stråling" skaper frykt

Få ord vekker like mye uro som "stråling". Det maner frem bilder av kjernekraftulykker, mutasjoner og usynlig fare. Men la oss stoppe opp et øyeblikk. Sollyset som varmer ansiktet ditt er stråling. Radiobølgene som bringer deg musikk er stråling. Varmen fra peisen en kald vinterkveld er stråling. Ikke all stråling er farlig.

Det som avgjør om stråling er skadelig, er *type stråling*, *dose* og *eksponeringstid*. En liten dose solskinn gir deg vitamin D og godt humør. For mye gir solbrenthet og øker risikoen for hudkreft. Stråling fra en CT-skanning kan redde livet ditt ved å avdekke alvorlig sykdom, selv om den gir en liten økt kreftrisiko. Alt handler om balanse, forståelse og riktig perspektiv.

I dette kapittelet skal vi utforske hvordan ioniserende stråling faktisk skader celler, lære de grunnleggende prinsippene for strålevern, og se på Norges skjulte helserisiko: radon i boliger. Vi skal også se på UV-stråling og hudkreft, medisinsk bruk av stråling, og ikke minst -- hvordan du kan vurdere informasjon om stråling kritisk og skille fakta fra frykt.`,
    },
    {
      id: 'nat-vg1-2-6-n-section1',
      type: 'text',
      content: `## Hvordan stråling skader celler

Ioniserende stråling -- det vil si UV-C, røntgen, gamma, alfa og beta -- har nok energi til å slå løs elektroner fra atomer. Denne ioniseringen er det som gjør strålingen potensielt farlig.

Skaden kan skje på to måter. Den første er **direkte DNA-skade**, der strålingen treffer et DNA-molekyl og bryter bindingene. Tenk deg en bok der noen river ut tilfeldige bokstaver -- setningene kan bli uleselige eller få helt ny mening. Slik kan stråling skape mutasjoner som i verste fall fører til ukontrollert celledeling, altså kreft.

Den andre mekanismen er **indirekte skade via frie radikaler**. Kroppen vår består av omtrent 60 prosent vann. Når stråling treffer et vannmolekyl, kan den danne svært reaktive molekyler kalt frie radikaler, spesielt hydroksylradikaler (OH•). Disse er som små molekylære torpedoer som angriper DNA, proteiner og cellemembraner.

Hva skjer med en celle som treffes? Det avhenger av dosen. Ved svært lave doser reparerer cellen som regel skaden selv -- kroppen har effektive reparasjonsmekanismer. Ved lave doser dør noen celler, men de fleste overlever. Ved moderate doser dør mange celler, og noen kan mutere. Ved høye doser oppstår massiv celledød og vevsskade.

Helseffektene deles i to kategorier. **Deterministiske effekter** er garantert over en viss terskelverdi -- kvalme, hårtap, strålesyke og brannskader ved høye doser. **Stokastiske effekter** gir økt sannsynlighet for skade, som kreft, men det er usikkert om det faktisk skjer hos den enkelte. Du kan tenke på det som forskjellen mellom å garantert bli våt i et skybrudd og å *kanskje* bli truffet av lyn.`,
    },
    {
      id: 'nat-vg1-2-6-n-section2',
      type: 'text',
      content: `## De tre pilarene for strålevern

Grunnprinsippet for strålevern uttrykkes med forkortelsen **ALARA**: *As Low As Reasonably Achievable* -- hold stråledosen så lav som praktisk mulig, med tanke på økonomiske og samfunnsmessige faktorer. Det betyr ikke null stråling, for det er verken mulig eller nødvendig. Det betyr å være fornuftig.

ALARA hviler på tre pilarer: tid, avstand og skjerming.

Den første pilaren er **tid**. Jo kortere tid du er eksponert for stråling, jo lavere dose får du. Dosen er rett og slett doserate ganget med tid. En røntgensykepleier som tar mange bilder daglig, kan for eksempel rotere arbeidsoppgaver med kolleger for å begrense tiden ved røntgenapparatet. Planlegg arbeidet effektivt og øv på forhånd slik at selve eksponeringen blir kortest mulig.

Den andre pilaren er **avstand**. Dosen synker med kvadratet av avstanden. Det betyr at hvis du dobler avstanden til en strålekilde, får du bare en fjerdedel av dosen. Tredobler du avstanden, blir dosen bare en niendedel. Matematisk skrives dette D₂ = D₁ · (r₁/r₂)². Tenk deg at doseraten er 100 mikrosievert per time ved 1 meter fra en gammakilde. Ved 3 meter er den bare omtrent 11 mikrosievert per time -- en reduksjon på nesten 90 prosent bare ved å ta noen skritt tilbake.

Den tredje pilaren er **skjerming**. Riktig materiale mellom deg og strålekilden absorberer strålingen. Alfa stoppes av papir, hud og luft. Beta stoppes av aluminium, plast og glass. Gamma og røntgen krever tykk bly, betong eller stål. Nøytroner stoppes best av hydrogenrike materialer som vann og plast. I tillegg brukes personlig verneutstyr som dosimetre, blyforkler og blyplater.`,
    },
    {
      id: 'nat-vg1-2-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på strålevern og celleskade:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-6-n-quiz1-q0',
            task: 'Hva står ALARA for?',
            options: [
              { id: 'a', text: 'All Levels Are Regulated Absolutely', isCorrect: false },
              { id: 'b', text: 'As Low As Reasonably Achievable', isCorrect: true },
              { id: 'c', text: 'Avoid Lethal And Radioactive Areas', isCorrect: false },
              { id: 'd', text: 'Always Leave After Radiation Alarm', isCorrect: false },
            ],
            solution:
              'ALARA står for As Low As Reasonably Achievable -- hold stråledosen så lav som praktisk mulig. Det er grunnprinsippet for alt strålevern, og det handler om å være fornuftig, ikke å eliminere all stråling.',
          },
          {
            id: 'nat-vg1-2-6-n-quiz1-q1',
            task: 'Hva skjer med stråledosen hvis du dobler avstanden til kilden?',
            options: [
              { id: 'a', text: 'Den halveres', isCorrect: false },
              { id: 'b', text: 'Den reduseres til en fjerdedel', isCorrect: true },
              { id: 'c', text: 'Den forblir uendret', isCorrect: false },
              { id: 'd', text: 'Den reduseres til en åttendedel', isCorrect: false },
            ],
            solution:
              'Stråledosen synker med kvadratet av avstanden (invers kvadratlov). Dobler du avstanden, får du (1/2)² = 1/4 av dosen. Tredobler du, får du (1/3)² = 1/9 av dosen. Avstand er et svært effektivt strålevernstiltak.',
          },
          {
            id: 'nat-vg1-2-6-n-quiz1-q2',
            task: 'Hva er forskjellen mellom deterministiske og stokastiske strålingseffekter?',
            options: [
              { id: 'a', text: 'Deterministiske rammer bare barn, stokastiske rammer alle', isCorrect: false },
              { id: 'b', text: 'Deterministiske er garantert over en terskelverdi, stokastiske gir økt sannsynlighet', isCorrect: true },
              { id: 'c', text: 'Deterministiske kommer fra alfa, stokastiske fra gamma', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell, begge begrepene betyr det samme', isCorrect: false },
            ],
            solution:
              'Deterministiske effekter (strålesyke, hårtap) inntreffer garantert ved doser over en terskelverdi. Stokastiske effekter (kreft) har økt sannsynlighet ved økt dose, men det er usikkert om de faktisk inntreffer hos den enkelte person.',
          },
          {
            id: 'nat-vg1-2-6-n-quiz1-q3',
            task: 'Hva er frie radikaler i sammenheng med strålingsskade?',
            options: [
              { id: 'a', text: 'Radioaktive partikler som flyter fritt i blodet', isCorrect: false },
              { id: 'b', text: 'Elektroner som er slått løs fra atomer', isCorrect: false },
              { id: 'c', text: 'Reaktive molekyler dannet når stråling treffer vann i cellen', isCorrect: true },
              { id: 'd', text: 'Ustabile isotoper som dannes i kroppen', isCorrect: false },
            ],
            solution:
              'Når ioniserende stråling treffer vannmolekyler i cellen, dannes svært reaktive frie radikaler, spesielt hydroksylradikaler (OH•). Disse skader DNA, proteiner og cellemembraner indirekte. Siden kroppen er ca. 60% vann, er dette en viktig skademekanisme.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-6-n-section3',
      type: 'text',
      content: `## Radon -- Norges skjulte helserisiko

Under føttene dine, i berggrunnen, foregår en stille prosess. Uran, som finnes naturlig i norsk berggrunn, brytes sakte ned gjennom sin lange nedbrytningskjede. Ett av mellomproduktene er **radon-222**, en radioaktiv edelgass. Radon er usynlig, luktfri og umerkelig. Den siver opp gjennom sprekker i berggrunnen, inn gjennom kjellergulv, rundt rørgjennomføringer og inn i boligen din.

Hvorfor er dette farlig? Når du puster inn radon, kan den avgi alfastråling direkte inne i lungene dine. Enda verre: radon brytes raskt ned til radioaktive "datterisotoper" av polonium, som fester seg til lungevevet og fortsetter å bestråle cellene over tid. Alfapartiklenes høye ioniseringsevne gjør lokal, men intens skade på lungecellene.

Tallene er alvorlige. Radon forårsaker ca. 300 lungekreftdødsfall i Norge hvert år og er den nest største årsaken til lungekreft etter røyking. For røykere som også utsettes for høye radonnivåer, er risikoen 25 ganger høyere enn for ikke-røykere. Omtrent 9 prosent av norske boliger har radonnivåer over tiltaksgrensen.

Grenseverdiene er klare: under 100 Bq/m³ er akseptabelt, mellom 100 og 200 Bq/m³ anbefales enkle tiltak, og over 200 Bq/m³ er tiltak nødvendig. Heldigvis er det mye du kan gjøre. Mål radon med en spormåler over minst to vintermåneder. Bedre ventilasjon i kjeller og underetasje hjelper. Tett sprekker i grunnmur og rundt rørgjennomføringer. Installerer du radonbrønn eller radonsug, kan nivåene reduseres med 50 til 90 prosent.`,
    },
    {
      id: 'nat-vg1-2-6-n-section4',
      type: 'text',
      content: `## UV-stråling -- den doble naturen

Solen sender ut UV-stråling som deles i tre typer, og hver har sine egenskaper. **UV-A** (315-400 nm) kalles gjerne "aldringsstrålingen" fordi den trenger dypest i huden, helt ned i dermis, og forårsaker rynker, pigmentflekker og aldring. UV-A bidrar også til hudkreft. Den er til stede hele året og trenger gjennom vanlig vindusglass, og det er hovedsakelig UV-A som brukes i solarier.

**UV-B** (280-315 nm) er "brennestrålingen" og hovedårsaken til solbrenthet og hudkreft. Den trenger inn i overhuden, epidermis, og er sterkest midt på dagen. UV-B stoppes av glass. Men UV-B har også en viktig positiv side: den er nødvendig for kroppens produksjon av vitamin D.

**UV-C** (100-280 nm) er svært energirik og ville vært dødelig for livet på jorden. Heldigvis absorberes den helt av ozonlaget og når aldri ned til jordoverflaten. Kunstig UV-C brukes til desinfeksjon av vann og overflater.

Solbeskyttelse handler om kunnskap og fornuft. Solkrem med SPF 15 blokkerer 93 prosent av UV-B, SPF 30 blokkerer 97 prosent, og SPF 50 blokkerer 98 prosent. Klær blokkerer det meste, og gode solbriller beskytter øynene. Å unngå sol mellom klokken 10 og 15 reduserer eksponeringen for den sterkeste UV-strålingen. Husk at solbrenthet i barndommen øker hudkreftrisikoen betydelig, og at lys hudtype gir høyere risiko. Sjekk føflekker regelmessig for endringer.`,
    },
    {
      id: 'nat-vg1-2-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på radon og UV-stråling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-6-n-quiz2-q0',
            task: 'Hva er tiltaksgrensen for radon i norske boliger?',
            options: [
              { id: 'a', text: '50 Bq/m³', isCorrect: false },
              { id: 'b', text: '100 Bq/m³', isCorrect: false },
              { id: 'c', text: '200 Bq/m³', isCorrect: true },
              { id: 'd', text: '500 Bq/m³', isCorrect: false },
            ],
            solution:
              'Tiltaksgrensen for radon i Norge er 200 Bq/m³. Over dette nivået er tiltak nødvendig. Mellom 100 og 200 Bq/m³ anbefales enkle tiltak. Under 100 Bq/m³ regnes som akseptabelt.',
          },
          {
            id: 'nat-vg1-2-6-n-quiz2-q1',
            task: 'Hvilken type UV-stråling er hovedårsaken til solbrenthet og hudkreft?',
            options: [
              { id: 'a', text: 'UV-A', isCorrect: false },
              { id: 'b', text: 'UV-B', isCorrect: true },
              { id: 'c', text: 'UV-C', isCorrect: false },
              { id: 'd', text: 'Infrarød stråling', isCorrect: false },
            ],
            solution:
              'UV-B (280-315 nm) er hovedårsaken til solbrenthet og hudkreft. Den trenger inn i overhuden og er sterkest midt på dagen. UV-A bidrar også til hudkreft og aldring, men UV-B er den primære årsaken til akutt solskade.',
          },
          {
            id: 'nat-vg1-2-6-n-quiz2-q2',
            task: 'Hvorfor er radon spesielt farlig?',
            options: [
              { id: 'a', text: 'Fordi den sender ut gammastråling med lang rekkevidde', isCorrect: false },
              { id: 'b', text: 'Fordi den er en gass som pustes inn og avgir alfastråling inne i lungene', isCorrect: true },
              { id: 'c', text: 'Fordi den er svært eksplosiv', isCorrect: false },
              { id: 'd', text: 'Fordi den ødelegger ozonlaget', isCorrect: false },
            ],
            solution:
              'Radon er en radioaktiv edelgass som pustes inn. Inne i lungene avgir den og datterisotopene alfastråling, som har svært høy ioniseringsevne og gjør lokal, men intens skade på lungecellene. Utenfra ville alfaen stoppes av huden.',
          },
          {
            id: 'nat-vg1-2-6-n-quiz2-q3',
            task: 'Er påstanden "mobilstråling forårsaker kreft" bekreftet av forskning?',
            options: [
              { id: 'a', text: 'Ja, det er godt dokumentert', isCorrect: false },
              { id: 'b', text: 'Nei, omfattende forskning har ikke funnet sikker sammenheng -- WHO klassifiserer det som "mulig kreftfremkallende" (samme som kaffe)', isCorrect: true },
              { id: 'c', text: 'Ja, men bare for 5G-stråling', isCorrect: false },
              { id: 'd', text: 'Det finnes ingen forskning på dette', isCorrect: false },
            ],
            solution:
              'Mobilstråling er ikke-ioniserende mikrobølger uten nok energi til å skade DNA direkte. Omfattende forskning over flere tiår har ikke funnet sikker sammenheng med kreft. WHO klassifiserer det som "mulig kreftfremkallende" (gruppe 2B), som betyr "kan ikke utelukkes", ikke "det er farlig".',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-6-n-section5',
      type: 'text',
      content: `## Medisinsk stråling -- når stråling redder liv

Stråling er ikke bare en trussel -- den er et av medisinens kraftigste verktøy. Tenk på alle gangene stråling brukes i helsevesenet. **Røntgen** sender røntgenstråler gjennom kroppen for å avbilde beinbrudd, lunger og tenner, med en dose på bare 0,1 mSv. **CT-skanning** bruker røntgenstråler for å lage detaljerte tredimensjonale bilder, med doser fra 2 til 20 mSv avhengig av kroppsområde. **PET-skanning** bruker positronemisjon fra radioaktive markører for å oppdage kreft og studere hjerneaktivitet.

Og noen metoder bruker ikke ioniserende stråling i det hele tatt. **MR** (magnetisk resonans) bruker radiobølger og magnetfelt -- ingen ioniserende stråling. **Ultralyd** bruker lydbølger. Begge er helt ufarlige og brukes blant annet til å se på fosteret under graviditet.

I behandling av kreft brukes stråling mer direkte. Ved **strålebehandling** rettes høye doser mot svulsten fra flere vinkler, slik at kreftcellene får en stor dose mens friskt vev skånes mest mulig. Kreftceller er faktisk mer strålingsfølsomme enn friske celler fordi de deler seg raskere og har dårligere reparasjonsmekanismer. Jod-131 brukes til å behandle skjoldbruskkjertelkreft -- stoffet samles naturlig i kjertelen og ødelegger kreftcellene innenfra med betastråling.

Den viktigste erkjennelsen er denne: medisinsk stråling brukes fordi nytten nesten alltid er mye større enn risikoen. En CT-skanning tilsvarer ca. 3 års bakgrunnsstråling, men kan oppdage en sykdom som uten behandling ville vært dødelig. ALARA-prinsippet gjelder fortsatt -- CT tas bare når det er medisinsk nødvendig, og dosen optimaliseres for hvert individ.`,
    },
    {
      id: 'nat-vg1-2-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på medisinsk stråling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-6-n-quiz3-q0',
            task: 'Hvilken av disse medisinske undersøkelsene bruker IKKE ioniserende stråling?',
            options: [
              { id: 'a', text: 'CT-skanning', isCorrect: false },
              { id: 'b', text: 'Røntgen', isCorrect: false },
              { id: 'c', text: 'MR (magnetisk resonans)', isCorrect: true },
              { id: 'd', text: 'PET-skanning', isCorrect: false },
            ],
            solution:
              'MR bruker radiobølger og magnetfelt, som er ikke-ioniserende, og gir derfor ingen stråledose. Ultralyd bruker lydbølger og er heller ikke ioniserende. Røntgen, CT og PET bruker alle ioniserende stråling.',
          },
          {
            id: 'nat-vg1-2-6-n-quiz3-q1',
            task: 'Hvor mange bananer måtte du spise for å få samme stråledose som én røntgenundersøkelse av brystet (0,1 mSv)?',
            options: [
              { id: 'a', text: 'Ca. 10 bananer', isCorrect: false },
              { id: 'b', text: 'Ca. 100 bananer', isCorrect: false },
              { id: 'c', text: 'Ca. 1000 bananer', isCorrect: true },
              { id: 'd', text: 'Ca. 10 000 bananer', isCorrect: false },
            ],
            solution:
              'Én banan gir ca. 0,0001 mSv fra naturlig kalium-40. For å nå 0,1 mSv trengs 0,1/0,0001 = 1000 bananer. Poenget er at naturlig radioaktivitet i mat er helt ufarlig -- du ville aldri klare å spise nok bananer til å merke noe.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-6-n-summary',
      type: 'text',
      content: `## Oppsummering

Stråling er et mangfoldig fenomen som spenner fra livgivende sollys til potensielt farlig ioniserende stråling. Nøkkelen er kunnskap -- å forstå forskjellene, kjenne risikoen, og vite hvordan man beskytter seg.

**Nøkkelkunnskapen fra dette kapittelet:**

- **Ioniserende stråling** skader celler gjennom direkte DNA-skade og indirekte via frie radikaler fra vannmolekyler
- **Deterministiske effekter** (strålesyke, hårtap) er garantert over en terskeldose, mens **stokastiske effekter** (kreft) gir økt sannsynlighet
- **ALARA-prinsippet**: Hold dosen så lav som praktisk mulig
- **Tre pilarer for strålevern**: Tid (kortere eksponering), avstand (dose synker med 1/r²) og skjerming (materialer som stopper strålingen)
- **Radon i boliger**: Usynlig, luktfri gass fra berggrunnen som forårsaker ca. 300 lungekreftdødsfall i Norge årlig -- tiltaksgrense 200 Bq/m³
- **UV-stråling**: UV-A forårsaker aldring, UV-B forårsaker solbrenthet og er hovedårsak til hudkreft, UV-C absorberes av ozonlaget
- **Medisinsk stråling**: Nytten av diagnostikk (røntgen, CT, PET) og behandling (strålebehandling) overgår nesten alltid den lille risikoen
- **Kritisk tenkning**: Basér deg på vitenskap -- mobilstråling er ikke bekreftet kreftfremkallende, og alt inneholder naturlig radioaktivitet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7 NARRATIV: Trådløs kommunikasjon
// ============================================================================

export const CHAPTER_NAT_VG1_2_7_NARRATIV: TextbookChapter = {
  id: 'nat-vg1-2-7-narrativ',
  courseId: 'nat-vg1',
  chapterNumber: '2.7',
  title: 'Trådløs kommunikasjon',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om usynlige bølger som bærer meldingene dine, fra radiobølger og WiFi til 5G-nettverk og GPS-satellitter -- og hvordan fysikkens lover bestemmer rekkevidden.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare hovedprinsippene for trådløs kommunikasjon og gi eksempler på hva slik teknologi brukes til',
  ],
  linkedChapterId: 'nat-vg1-2-7',
  content: [
    {
      id: 'nat-vg1-2-7-n-intro',
      type: 'text',
      content: `## Usynlige bølger overalt

Akkurat nå, i dette øyeblikket, flyr det usynlige bølger gjennom rommet du sitter i. WiFi-signaler bærer internett til laptopen din. Mobilsignaler kobler telefonen din til resten av verden. Bluetooth-bølger forbinder hodetelefonene dine med musikkspilleren. FM-radiobølger bringer nyheter til mottakere i hele landet. GPS-signaler fra satellitter 20 000 kilometer over hodet ditt forteller deg nøyaktig hvor du er.

Trådløs kommunikasjon er kanskje den viktigste teknologiske revolusjonen i vår tid, og den er fullstendig usynlig. Du bruker den hundrevis av ganger om dagen uten å tenke over det -- når du sender en melding, strømmer musikk, sjekker værmeldingen eller finner veien med kart. Alle disse teknologiene bygger på det samme grunnprinsippet: elektromagnetiske bølger som bærer informasjon gjennom luften.

I dette kapittelet skal vi forstå hvordan trådløs kommunikasjon faktisk fungerer, fra hvordan informasjon kodes på radiobølger til hvorfor WiFi-en din er treg i kjelleren. Vi skal se på forskjellige trådløse teknologier, forstå sammenhengen mellom frekvens og rekkevidde, og utforske hvordan GPS finner posisjonen din med meterpresisjon.`,
    },
    {
      id: 'nat-vg1-2-7-n-section1',
      type: 'text',
      content: `## Slik reiser informasjonen

Forestill deg at du skal sende en beskjed til noen på den andre siden av byen, men du kan bare bruke lydbølger. Du roper, men stemmen din rekker ikke langt nok. Hva om du i stedet kunne legge meldingen oppå en kraftig lydbølge som når hele veien? Det er akkurat dette trådløs kommunikasjon gjør, bare med elektromagnetiske bølger i stedet for lyd.

Prosessen har fire hovedtrinn. Det første er **koding** eller digitalisering. All informasjon -- tekst, lyd, video, bilder -- konverteres til digitale signaler, altså en strøm av ettall og nuller. Bokstaven "A" blir for eksempel 01000001 i ASCII-kode.

Det andre trinnet er **modulasjon**. De digitale signalene "legges oppå" en **bærebølge**, som er en høyfrekvent radiobølge. Du kan tenke på bærebølgen som en lastebil og informasjonen som lasten -- lastebilen transporterer lasten fra A til B. Informasjonen endrer bærebølgens egenskaper på ulike måter. Ved **amplitudemodulasjon** (AM) endres bølgens styrke. Ved **frekvensmodulasjon** (FM) endres bølgens frekvens. Ved **fasemodulasjon** endres bølgens fase. Moderne systemer som WiFi, 4G og 5G bruker avanserte metoder som kombinerer amplitude og fase, kalt QAM, der hvert signal kan bære mange informasjonsbiter samtidig.

Det tredje trinnet er **sending og mottak**. En antenne stråler ut det modulerte signalet, det spres gjennom luften, og en mottakerantenne fanger det opp. Det fjerde trinnet er **demodulasjon og dekoding** -- mottakeren henter ut informasjonen fra bærebølgen og konverterer den tilbake til lyd, bilde eller tekst.`,
    },
    {
      id: 'nat-vg1-2-7-n-section2',
      type: 'text',
      content: `## Frekvens, bølgelengde og den store avveiningen

Her kommer en av de viktigste sammenhengene i trådløs kommunikasjon: forholdet mellom frekvens, bølgelengde og rekkevidde. Du husker kanskje fra tidligere at bølgelengde er lik lyshastigheten delt på frekvensen (λ = c/f). WiFi ved 2,4 GHz har altså en bølgelengde på ca. 12,5 cm, mens en FM-radiostasjon ved 100 MHz har en bølgelengde på 3 meter. Og 5G-millimeterbølger ved 28 GHz har en bølgelengde på bare 10,7 millimeter.

Denne sammenhengen har praktiske konsekvenser. Lavere frekvenser med lengre bølgelengder har lengre rekkevidde. Bølgene bøyer seg bedre rundt hindringer (dette kalles diffraksjon), trenger bedre gjennom vegger, og svekkes saktere med avstand. Høyere frekvenser med kortere bølgelengder har kortere rekkevidde, men kan til gjengjeld bære mye mer informasjon per sekund -- altså høyere datahastighet.

Dette er den store avveiningen i all trådløs kommunikasjon. FM-radio bruker ca. 100 MHz og kan dekke store områder, men har begrenset datahastighet. WiFi bruker 2,4 eller 5 GHz og gir god hastighet innen en bygning. 5G-millimeterbølger gir enormt høy hastighet, men rekker bare noen hundre meter og blokkeres av vegger og til og med regn.

Antennestørrelsen henger også sammen med bølgelengden. For optimal ytelse bør antennen være omtrent en fjerdedel av bølgelengden. Derfor er en FM-radioantenne ca. 75 cm, en WiFi-antenne ca. 3 cm, og en 5G-millimeterbølgeantenne bare ca. 3 millimeter. Det er grunnen til at moderne telefoner kan ha dusinvis av bittesmå 5G-antenner innebygget.`,
    },
    {
      id: 'nat-vg1-2-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnprinsippene for trådløs kommunikasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-7-n-quiz1-q0',
            task: 'Hva er modulasjon?',
            options: [
              { id: 'a', text: 'Å konvertere analoge signaler til digitale', isCorrect: false },
              { id: 'b', text: 'Å forsterke et signal slik at det rekker lenger', isCorrect: false },
              { id: 'c', text: 'Å legge informasjon oppå en bærebølge ved å endre dens egenskaper', isCorrect: true },
              { id: 'd', text: 'Å filtrere bort støy fra et signal', isCorrect: false },
            ],
            solution:
              'Modulasjon er teknikken der informasjon "legges oppå" en bærebølge ved å endre bølgens amplitude (AM), frekvens (FM) eller fase (PM). Bærebølgen transporterer informasjonen gjennom luften til mottakeren.',
          },
          {
            id: 'nat-vg1-2-7-n-quiz1-q1',
            task: 'Hvorfor har WiFi på 5 GHz kortere rekkevidde enn WiFi på 2,4 GHz?',
            options: [
              { id: 'a', text: 'Fordi 5 GHz bruker mindre strøm', isCorrect: false },
              { id: 'b', text: 'Fordi høyere frekvens gir kortere bølgelengde som absorberes mer og bøyer seg dårligere rundt hindringer', isCorrect: true },
              { id: 'c', text: 'Fordi 5 GHz er nyere teknologi som ikke er ferdig utviklet', isCorrect: false },
              { id: 'd', text: 'Fordi 5 GHz sender med lavere effekt', isCorrect: false },
            ],
            solution:
              '5 GHz har kortere bølgelengde (ca. 6 cm) enn 2,4 GHz (ca. 12,5 cm). Kortere bølgelengder absorberes mer av vegger og materialer, og bøyer seg dårligere rundt hindringer. Til gjengjeld gir 5 GHz høyere datahastighet.',
          },
          {
            id: 'nat-vg1-2-7-n-quiz1-q2',
            task: 'Hva er bølgelengden til WiFi-signaler ved 2,4 GHz?',
            options: [
              { id: 'a', text: 'Ca. 1,25 cm', isCorrect: false },
              { id: 'b', text: 'Ca. 12,5 cm', isCorrect: true },
              { id: 'c', text: 'Ca. 1,25 m', isCorrect: false },
              { id: 'd', text: 'Ca. 12,5 m', isCorrect: false },
            ],
            solution:
              'Bølgelengde = lyshastighet / frekvens = (3 × 10⁸ m/s) / (2,4 × 10⁹ Hz) = 0,125 m = 12,5 cm. Denne relativt korte bølgelengden er grunnen til at WiFi-antenner bare trenger å være noen centimeter lange.',
          },
          {
            id: 'nat-vg1-2-7-n-quiz1-q3',
            task: 'Hva er den store avveiningen i trådløs kommunikasjon?',
            options: [
              { id: 'a', text: 'Høyere frekvens gir lengre rekkevidde men lavere hastighet', isCorrect: false },
              { id: 'b', text: 'Lavere frekvens gir bedre sikkerhet men dårligere lyd', isCorrect: false },
              { id: 'c', text: 'Høyere frekvens gir høyere hastighet men kortere rekkevidde', isCorrect: true },
              { id: 'd', text: 'Det finnes ingen avveining -- høyere frekvens er alltid bedre', isCorrect: false },
            ],
            solution:
              'Den fundamentale avveiningen er: høyere frekvens gir kortere bølgelengde, som betyr høyere datahastighet (mer informasjon per sekund), men kortere rekkevidde og dårligere gjennomtrengning av hindringer.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-7-n-section3',
      type: 'text',
      content: `## Et univers av trådløse teknologier

La oss ta en rundtur gjennom de viktigste trådløse teknologiene du bruker til daglig. **Mobilnettet** har utviklet seg gjennom generasjoner. 2G (GSM) på 900/1800 MHz ga oss SMS og tale. 3G på 900/2100 MHz åpnet for mobilt internett. 4G/LTE på 700-2600 MHz gjorde streaming og apper mulig med hastigheter opp mot 100 Mbit/s. Og nå er 5G her, med frekvenser fra 700 MHz helt opp til 39 GHz og teoretiske hastigheter på 1-10 Gbit/s.

**WiFi** bruker hovedsakelig to frekvensbånd. 2,4 GHz gir lengre rekkevidde men lavere hastighet og mer interferens fra mikrobølgeovner, Bluetooth og naboens nettverk. 5 GHz gir kortere rekkevidde men raskere forbindelse med mindre interferens. WiFi 6E legger til 6 GHz-båndet med enda flere kanaler. Innendørs rekkevidde er typisk 30-100 meter.

**Bluetooth** opererer også på 2,4 GHz, men med lavt strømforbruk og kort rekkevidde på 10-100 meter. Det er designet for tilbehør som hodetelefoner, høyttalere og smartklokker -- enheter som er i nærheten av telefonen din.

Og så har vi **GPS** (Global Positioning System), som fungerer på en helt annen måte. Her sender du ikke noe signal selv -- du bare mottar. 24-32 satellitter i bane rundt jorden sender kontinuerlig ut signaler på frekvenser rundt 1,2-1,6 GHz. Mottakeren i telefonen din fanger opp signaler fra flere satellitter og beregner posisjonen din. Men det finnes også andre systemer: GLONASS fra Russland, Galileo fra EU, og BeiDou fra Kina. Moderne telefoner bruker flere systemer samtidig for best mulig nøyaktighet.`,
    },
    {
      id: 'nat-vg1-2-7-n-section4',
      type: 'text',
      content: `## GPS -- å finne seg selv fra verdensrommet

Hvordan kan telefonen din vite nøyaktig hvor du er? Svaret er genial bruk av tidsmåling. Hver GPS-satellitt har en atomklokke som er nøyaktig ned til nanosekunder, og sender ut et signal som inneholder det eksakte tidspunktet signalet ble sendt. GPS-mottakeren din vet når signalet ankom, og fordi signalet reiser med lyshastigheten, kan den beregne avstanden til satellitten.

La oss si at signalet bruker 0,072 sekunder fra en satellitt til mottakeren din. Avstand er lik hastighet ganget med tid: 3 × 10⁸ m/s ganget med 0,072 sekunder gir 21 600 kilometer. Det stemmer godt -- GPS-satellitter går i bane ca. 20 200 km over jordoverflaten.

Med avstand til én satellitt vet du at du befinner deg et sted på en kuleflate rundt den satellitten. Med to satellitter snevres det inn til en sirkel. Med tre får du to mulige punkter, og det ene kan vanligvis elimineres (det er for eksempel ute i verdensrommet). Men det trengs faktisk fire satellitter for å få en nøyaktig 3D-posisjon. Hvorfor? Fordi mottakeren din ikke har en atomklokke -- den billige kvartskrystallklokken i telefonen din kan avvike med flere mikrosekunder. Den fjerde satellitten lar systemet korrigere for denne tidsfeilen. Med fire ligninger kan fire ukjente løses: x, y, z og tidsfeil. Denne metoden kalles **trilaterasjon**.

Feilkilder inkluderer atmosfærisk forsinkelse i ionosfæren, refleksjoner fra bygninger (kalt multipath), og dårlig geometri der alle synlige satellitter er samlet i én retning. Sivil GPS gir typisk 3-5 meters nøyaktighet, men med korreksjoner kan den komme under 1 meter. Og et fascinerende faktum: lyset beveger seg ca. 30 centimeter per nanosekund, så en feil på bare 10 nanosekunder gir 3 meters posisjonsfeil. Derfor trenger satellittene atomklokker!`,
    },
    {
      id: 'nat-vg1-2-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på trådløse teknologier og GPS:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-7-n-quiz2-q0',
            task: 'Hvorfor trenger GPS minst 4 satellitter for nøyaktig 3D-posisjon?',
            options: [
              { id: 'a', text: 'Fordi 4 satellitter gir bedre signalstyrke', isCorrect: false },
              { id: 'b', text: 'Fordi det er 4 ukjente: x, y, z og tidsfeil i mottakerens klokke', isCorrect: true },
              { id: 'c', text: 'Fordi satellittene står i fire ulike retninger', isCorrect: false },
              { id: 'd', text: 'Fordi 3 satellitter ikke sender sterke nok signaler', isCorrect: false },
            ],
            solution:
              'GPS-mottakeren har fire ukjente: tre romlige koordinater (x, y, z) pluss tidsfeilen i den billige klokken. Med signaler fra 4 satellitter kan alle fire ukjente beregnes. Metoden kalles trilaterasjon.',
          },
          {
            id: 'nat-vg1-2-7-n-quiz2-q1',
            task: 'Hvorfor krever 5G-nett med millimeterbølger flere basestasjoner enn 4G?',
            options: [
              { id: 'a', text: 'Fordi 5G bruker mer strøm', isCorrect: false },
              { id: 'b', text: 'Fordi millimeterbølger har kort rekkevidde og blokkeres lettere av bygninger og hindringer', isCorrect: true },
              { id: 'c', text: 'Fordi 5G krever dobbelt så mange antenner per stasjon', isCorrect: false },
              { id: 'd', text: 'Fordi 4G allerede har brukt opp alle de gode plasseringene', isCorrect: false },
            ],
            solution:
              'Millimeterbølger (24-39 GHz) har svært kort bølgelengde, kort rekkevidde, blokkeres lett av bygninger, vegger, trær og til og med regn, og bøyer seg dårligere rundt hindringer. Derfor trengs basestasjoner med noen hundre meters mellomrom, mens 4G kan dekke flere kilometer.',
          },
          {
            id: 'nat-vg1-2-7-n-quiz2-q2',
            task: 'Hvilken WiFi-frekvens ville du valgt for en enhet langt fra ruteren?',
            options: [
              { id: 'a', text: '5 GHz for best hastighet', isCorrect: false },
              { id: 'b', text: '2,4 GHz for best rekkevidde og gjennomtrengning', isCorrect: true },
              { id: 'c', text: '6 GHz for nyeste teknologi', isCorrect: false },
              { id: 'd', text: 'Det spiller ingen rolle', isCorrect: false },
            ],
            solution:
              '2,4 GHz har lengre bølgelengde (12,5 cm) som bøyer seg bedre rundt hindringer og trenger bedre gjennom vegger. Den gir lavere hastighet, men bedre rekkevidde. 5 GHz er bedre for enheter nær ruteren der man ønsker høy hastighet.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-7-n-section5',
      type: 'text',
      content: `## 5G -- den femte generasjonen

5G er mer enn bare raskere mobilt internett. Det representerer et fundamentalt skifte i hva trådløs kommunikasjon kan gjøre. Tre nøkkelforbedringer skiller 5G fra forgjengerne.

For det første: **høyere hastighet**. Teoretisk opptil 10 Gbit/s, praktisk 100-500 Mbit/s, som fortsatt er rundt ti ganger raskere enn 4G. Du kan laste ned en hel film på sekunder.

For det andre: **lavere forsinkelse** (latency). 4G har en forsinkelse på 30-50 millisekunder. 5G bringer den ned til 1-10 millisekunder. Det høres kanskje ikke ut som mye, men det er avgjørende for sanntidsapplikasjoner. Tenk deg fjernstyrt kirurgi: en kirurg i Oslo som styrer en robotarm i Tromsø. Med 4Gs forsinkelse ville det føles som å operere "bakpå". Med 5Gs lave forsinkelse er det nesten som å stå i samme rom.

For det tredje: **mange flere enheter**. 5G kan støtte opptil en million enheter per kvadratkilometer, noe som muliggjør det såkalte **Internet of Things (IoT)** -- smarte byer der sensorer overalt overvåker trafikk, forurensning og avfallshåndtering, fabrikker der roboter kommuniserer trådløst, og selvkjørende biler som utveksler informasjon med hverandre og infrastrukturen i sanntid.

5G bruker tre frekvensbånd for å oppnå dette. Lavfrekvensbåndet (600-900 MHz) gir god dekning med moderat hastighet. Mellombåndet (2,5-4 GHz) balanserer dekning og hastighet. Høyfrekvensbåndet med millimeterbølger (24-39 GHz) gir svært høy hastighet, men bare over korte avstander. I praksis jobber alle tre båndene sammen: du får bred dekning fra de lave frekvensene og eksplosjonsartig hastighet fra millimeterbølgene når du er nær en basestasjon i bysentrum.`,
    },
    {
      id: 'nat-vg1-2-7-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på 5G og bruksområder:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'nat-vg1-2-7-n-quiz3-q0',
            task: 'Hva betyr lav latency, og hvorfor er det viktig for 5G?',
            options: [
              { id: 'a', text: 'Lav latency betyr lavt strømforbruk, viktig for batteritid', isCorrect: false },
              { id: 'b', text: 'Lav latency betyr kort forsinkelse i signaloverføring, viktig for sanntidsapplikasjoner', isCorrect: true },
              { id: 'c', text: 'Lav latency betyr lav frekvens, viktig for dekning', isCorrect: false },
              { id: 'd', text: 'Lav latency betyr lav datahastighet, viktig for stabilitet', isCorrect: false },
            ],
            solution:
              'Latency er forsinkelsen fra et signal sendes til det mottas. 5G har 1-10 ms latency mot 4Gs 30-50 ms. Lav forsinkelse er kritisk for sanntidsapplikasjoner som fjernstyrt kirurgi, selvkjørende biler og virtuell virkelighet.',
          },
          {
            id: 'nat-vg1-2-7-n-quiz3-q1',
            task: 'Hva er IoT (Internet of Things)?',
            options: [
              { id: 'a', text: 'Et nytt sosialt medium', isCorrect: false },
              { id: 'b', text: 'En type internettilkobling bare for datamaskiner', isCorrect: false },
              { id: 'c', text: 'Trådløs kommunikasjon mellom gjenstander -- sensorer, maskiner, kjøretøy', isCorrect: true },
              { id: 'd', text: 'Internett levert via satellitt', isCorrect: false },
            ],
            solution:
              'Internet of Things (IoT) er konseptet der hverdagsgjenstander og enheter kommuniserer trådløst med hverandre og med internett. 5G muliggjør dette i stor skala med opptil en million enheter per km² -- alt fra trafikksensorer til smarte kjøleskap.',
          },
          {
            id: 'nat-vg1-2-7-n-quiz3-q2',
            task: 'Hvorfor bruker 5G tre ulike frekvensbånd?',
            options: [
              { id: 'a', text: 'Fordi hvert land bruker et eget bånd', isCorrect: false },
              { id: 'b', text: 'For å gi en sikkerhetsreserve dersom ett bånd faller ut', isCorrect: false },
              { id: 'c', text: 'Fordi lave frekvenser gir god dekning, mens høye gir høy hastighet -- sammen gir de begge deler', isCorrect: true },
              { id: 'd', text: 'For å unngå interferens med 4G', isCorrect: false },
            ],
            solution:
              'Hvert frekvensbånd har sine styrker. Lavt (600-900 MHz) gir bred dekning. Middels (2,5-4 GHz) balanserer dekning og hastighet. Høyt/mmWave (24-39 GHz) gir ekstrem hastighet over korte avstander. Sammen dekker de alle behov.',
          },
        ],
      },
    },
    {
      id: 'nat-vg1-2-7-n-summary',
      type: 'text',
      content: `## Oppsummering

Fra radiobølger til millimeterbølger, fra FM-radio til 5G -- trådløs kommunikasjon bygger på det samme grunnprinsippet: informasjon kodes på elektromagnetiske bølger og sendes gjennom luften. Men valget av frekvens bestemmer alt fra rekkevidde til hastighet.

**Nøkkelkunnskapen fra dette kapittelet:**

- **Grunnprinsippet** for trådløs kommunikasjon: digitalisering, modulasjon (AM/FM/PM/QAM), sending via antenne, mottak og demodulasjon
- **Modulasjon** legger informasjon oppå en bærebølge ved å endre amplitude, frekvens eller fase
- **Sammenhengen frekvens og rekkevidde**: Høy frekvens gir kort bølgelengde, kort rekkevidde, men høy datahastighet -- og omvendt
- **WiFi**: 2,4 GHz gir bedre dekning, 5 GHz gir høyere hastighet -- moderne rutere tilbyr begge
- **GPS**: Bruker trilaterasjon med signaler fra 4+ satellitter for 3D-posisjon, korrigerer for tidsfeil med den fjerde satellitten
- **5G** gir tre nøkkelforbedringer: høyere hastighet (opptil 10 Gbit/s), lavere forsinkelse (1-10 ms) og støtte for mange flere enheter (IoT)
- **5G bruker tre frekvensbånd**: Lavt for dekning, middels for balanse, høyt (millimeterbølger) for ekstrem hastighet
- **Mobilnettets generasjoner**: Fra 2G (SMS og tale) via 3G og 4G til 5G som muliggjør fjernstyrt kirurgi, selvkjørende biler og smarte byer`,
    },
  ],
  exercises: [],
};

export const NAT_VG1_NARRATIV_DEL2B_CHAPTERS = [
  CHAPTER_NAT_VG1_2_4_NARRATIV,
  CHAPTER_NAT_VG1_2_5_NARRATIV,
  CHAPTER_NAT_VG1_2_6_NARRATIV,
  CHAPTER_NAT_VG1_2_7_NARRATIV,
];
