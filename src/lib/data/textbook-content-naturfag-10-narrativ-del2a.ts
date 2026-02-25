/**
 * Naturfag 10 - Narrativ versjon DEL 2A
 * Seksjon 2: Kjemi (2.1-2.4)
 *
 * Engasjerende fortellende format optimalisert for lesing/lytting på mobil
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1 NARRATIV: Atomer og grunnstoffer
// ============================================================================

export const CHAPTER_NATURFAG_10_2_1_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-2-1-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '2.1',
  title: 'Atomer og grunnstoffer',
  subtitle: 'Narrativ versjon',
  description:
    'Dykk ned i materiens minste byggesteiner og oppdag hvordan protoner, nøytroner og elektroner bygger opp alt som finnes, fra luften du puster til gullringen på fingeren.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke atommodeller og periodesystemet til å gjøre rede for grunnstoffer og kjemiske bindinger',
  ],
  linkedChapterId: 'naturfag-10-2-1',
  content: [
    {
      id: 'naturfag-10-2-1-n-intro',
      type: 'text',
      content: `## Alt er bygd av atomer

Se deg rundt akkurat nå. Bordet du sitter ved, stolen under deg, luften du puster inn, vannet i glasset ditt, skjermen du leser dette på og til og med kroppen din. Alt dette er bygd opp av utrolig små partikler som vi kaller atomer. Du kan ikke se dem med det blotte øye, og heller ikke med et vanlig mikroskop. Likevel er de grunnlaget for absolutt all materie i hele universet.

Ideen om atomer er faktisk eldgammel. Allerede for over 2400 år siden foreslo den greske filosofen Demokrit at alt stoff består av bittesmå, udelelige partikler han kalte «atomos», som betyr «udelelig» på gresk. Det tok nesten to tusen år før vitenskapen kom videre. I 1803 presenterte John Dalton den første vitenskapelige atomteorien. Så oppdaget J.J. Thomson elektronet i 1897, Ernest Rutherford fant atomkjernen i 1911, og Niels Bohr utviklet en modell med elektroner i baner rundt kjernen i 1913.

I dette kapittelet skal vi utforske hva atomer egentlig er, hva de er laget av, og hvordan de er organisert. Vi skal lære om protoner, nøytroner og elektroner, om atomnummer og massetall, og om isotoper og elektronskal. Gjør deg klar for en reise inn i materiens aller minste verden.`,
    },
    {
      id: 'naturfag-10-2-1-n-section1',
      type: 'text',
      content: `## Inne i atomet: Tre små partikler

Et atom er den minste enheten av et grunnstoff som fortsatt beholder alle de kjemiske egenskapene til det grunnstoffet. Men selv om atomer er bittesmå, er de ikke de minste partiklene som finnes. Hvert atom er bygd opp av tre typer partikler.

I sentrum av atomet finner vi atomkjernen, og den inneholder to typer partikler. Først har vi protonene, som har positiv ladning. Så har vi nøytronene, som ikke har noen ladning i det hele tatt, de er nøytrale. Både protoner og nøytroner har en masse på omtrent 1 atommasseenhet, forkortet u.

Rundt kjernen, i det vi kaller elektronskyen, suser elektronene. De har negativ ladning, og massen deres er bare omtrent 0,0005 u, altså nesten ingenting sammenlignet med protoner og nøytroner. Likevel er elektronene utrolig viktige, for det er de som deltar i kjemiske reaksjoner.

Her kommer noe fascinerende: Atomkjernen er svært liten, men den inneholder nesten all massen til atomet. Hvis du forestiller deg at atomkjernen var på størrelse med en ert, ville hele atomet med elektronskyen vært på størrelse med et fotballstadion. Det betyr at atomet for det meste består av tomt rom. Du er altså, helt bokstavelig, for det meste ingenting.`,
    },
    {
      id: 'naturfag-10-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på atomets oppbygning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-1-n-quiz1-q0',
            task: 'Hvilke partikler befinner seg i atomkjernen?',
            options: [
              { id: 'a', text: 'Elektroner og protoner', isCorrect: false },
              { id: 'b', text: 'Protoner og nøytroner', isCorrect: true },
              { id: 'c', text: 'Elektroner og nøytroner', isCorrect: false },
              { id: 'd', text: 'Bare protoner', isCorrect: false },
            ],
            solution:
              'Atomkjernen inneholder protoner (positive) og nøytroner (nøytrale). Elektronene befinner seg i elektronskyen rundt kjernen, ikke inne i selve kjernen.',
          },
          {
            id: 'naturfag-10-2-1-n-quiz1-q1',
            task: 'Hvor befinner det meste av atomets masse seg?',
            options: [
              { id: 'a', text: 'I elektronskyen', isCorrect: false },
              { id: 'b', text: 'Jevnt fordelt i hele atomet', isCorrect: false },
              { id: 'c', text: 'I atomkjernen', isCorrect: true },
              { id: 'd', text: 'I det ytterste elektronskallet', isCorrect: false },
            ],
            solution:
              'Atomkjernen inneholder protoner og nøytroner som har masse på ca. 1 u hver, mens elektroner bare veier ca. 0,0005 u. Over 99,9 % av atomets masse er altså i kjernen, selv om kjernen er ekstremt liten sammenlignet med hele atomet.',
          },
          {
            id: 'naturfag-10-2-1-n-quiz1-q2',
            task: 'Hvilken ladning har et elektron?',
            options: [
              { id: 'a', text: 'Positiv', isCorrect: false },
              { id: 'b', text: 'Nøytral', isCorrect: false },
              { id: 'c', text: 'Negativ', isCorrect: true },
              { id: 'd', text: 'Elektroner har ingen ladning', isCorrect: false },
            ],
            solution:
              'Elektroner har negativ ladning (-1). Protoner har positiv ladning (+1), og nøytroner har ingen ladning (0). I et nøytralt atom er antall protoner lik antall elektroner, slik at ladningene balanserer hverandre.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-1-n-section2',
      type: 'text',
      content: `## Atomnummer, massetall og grunnstoffer

Nå som du vet hva som er inne i et atom, skal vi se på to tall som beskriver hvert enkelt atom: atomnummeret og massetallet.

Atomnummeret, som vi kaller Z, er rett og slett antall protoner i atomkjernen. Dette tallet er ekstremt viktig, for det er atomnummeret som bestemmer hvilket grunnstoff atomet tilhører. Hydrogen har alltid 1 proton, karbon har alltid 6 protoner, oksygen har alltid 8 protoner, og jern har alltid 26 protoner. Hvis du endrer antall protoner, endrer du grunnstoffet.

Massetallet, som vi kaller A, er summen av protoner og nøytroner i kjernen. Elektronene bidrar nesten ingenting til massen. For å finne antall nøytroner kan du ganske enkelt trekke atomnummeret fra massetallet: nøytroner er lik A minus Z. For eksempel har oksygen-16 atomnummer 8 og massetall 16, altså har det 16 minus 8 lik 8 nøytroner.

I et nøytralt atom er antall elektroner alltid lik antall protoner, fordi de positive og negative ladningene må balansere hverandre. Et natriumatom med atomnummer 11 har altså 11 protoner og 11 elektroner.

Et grunnstoff er et stoff som bare inneholder atomer med samme atomnummer. Det finnes 118 kjente grunnstoffer, der 92 er naturlige og 26 er kunstig fremstilt. Hvert grunnstoff har et unikt symbol med en eller to bokstaver, som O for oksygen, Fe for jern og Au for gull. Grunnstoffer kan ikke brytes ned til enklere stoffer ved kjemiske reaksjoner.`,
    },
    {
      id: 'naturfag-10-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på atomnummer og massetall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-1-n-quiz2-q0',
            task: 'Hva bestemmer hvilket grunnstoff et atom er?',
            options: [
              { id: 'a', text: 'Antall nøytroner', isCorrect: false },
              { id: 'b', text: 'Antall elektroner', isCorrect: false },
              { id: 'c', text: 'Antall protoner', isCorrect: true },
              { id: 'd', text: 'Massetallet', isCorrect: false },
            ],
            solution:
              'Det er antall protoner (atomnummeret Z) som definerer hvilket grunnstoff et atom tilhører. Antall nøytroner kan variere uten å endre grunnstoffet (isotoper), og antall elektroner kan endres uten å endre grunnstoffet (ioner).',
          },
          {
            id: 'naturfag-10-2-1-n-quiz2-q1',
            task: 'Et atom har 19 protoner og 20 nøytroner. Hva er massetallet?',
            options: [
              { id: 'a', text: '19', isCorrect: false },
              { id: 'b', text: '20', isCorrect: false },
              { id: 'c', text: '39', isCorrect: true },
              { id: 'd', text: '1', isCorrect: false },
            ],
            solution:
              'Massetallet (A) er summen av protoner og nøytroner: A = 19 + 20 = 39. Dette er et kaliumatom (K) med atomnummer 19 og massetall 39.',
          },
          {
            id: 'naturfag-10-2-1-n-quiz2-q2',
            task: 'Hvor mange elektroner har et nøytralt atom med atomnummer 8?',
            options: [
              { id: 'a', text: '16', isCorrect: false },
              { id: 'b', text: '8', isCorrect: true },
              { id: 'c', text: '2', isCorrect: false },
              { id: 'd', text: '6', isCorrect: false },
            ],
            solution:
              'I et nøytralt atom er antall elektroner lik antall protoner. Atomnummer 8 betyr 8 protoner, altså 8 elektroner. Dette er oksygen.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-1-n-section3',
      type: 'text',
      content: `## Isotoper: Samme grunnstoff, ulik masse

Her kommer noe som overrasker mange: Alle atomer av samme grunnstoff har samme antall protoner, men de kan ha forskjellig antall nøytroner. Slike varianter kalles isotoper.

Ta karbon som eksempel. Alle karbonatomer har 6 protoner, det er det som gjør dem til karbon. Men karbon finnes i tre naturlige varianter. Karbon-12 har 6 nøytroner og er den vanligste isotopen, den utgjør rundt 99 prosent av alt karbon. Karbon-13 har 7 nøytroner og er ganske sjelden. Og karbon-14 har 8 nøytroner, er svært sjelden, og er radioaktiv. Det er denne isotopen forskere bruker til karbondatering, altså å bestemme alderen på fossiler og arkeologiske funn.

Men hva betyr isotoper i praksis? Fordi isotoper av samme grunnstoff har likt antall protoner og elektroner, har de like kjemiske egenskaper. Karbon-12 og karbon-13 reagerer likt i kjemiske reaksjoner, begge kan brenne til karbondioksid, og begge kan danne diamant. Men fysiske egenskaper som masse er forskjellige, fordi antall nøytroner varierer.

Isotoper har også viktige anvendelser. Radioaktive isotoper brukes i stråleterapi mot kreft og i medisinsk avbildning som PET-scan. Hydrogen-2, som kalles deuterium, danner «tungt vann» som brukes i atomreaktorer. Isotoper er altså ikke bare en kuriositet, de er nyttige verktøy i vitenskap og medisin.`,
    },
    {
      id: 'naturfag-10-2-1-n-section4',
      type: 'text',
      content: `## Elektronskal og valenselektroner

Elektronene i et atom flyr ikke tilfeldig rundt kjernen. De er organisert i lag som vi kaller elektronskal, eller energinivåer. Du kan tenke på dem som usynlige skall rundt kjernen, litt som lagene i en løk.

Skallene har navn: Det innerste kalles K-skallet, deretter kommer L-skallet, M-skallet og N-skallet. Hvert skall kan bare romme et bestemt antall elektroner. K-skallet har plass til maks 2 elektroner, L-skallet maks 8, og M-skallet maks 8 for de første 20 grunnstoffene. Elektronene fyller alltid opp det innerste skallet først, deretter neste, og så videre.

La oss se på et eksempel. Natrium har atomnummer 11, altså 11 elektroner. De to første elektronene fyller K-skallet. De neste 8 fyller L-skallet. Den siste elektronen havner alene i M-skallet. Elektronkonfigurasjonen til natrium er altså K er 2, L er 8, M er 1.

Og nå kommer nøkkelen til all kjemi: Elektronene i det ytterste skallet kalles valenselektroner, og de bestemmer hvordan atomet reagerer kjemisk. Natrium har 1 valenselektron, og denne ene elektronen er lett å miste. Klor har 7 valenselektroner og ønsker seg en ekstra elektron for å fylle opp skallet til 8. Neon har 8 valenselektroner, et fullt ytterste skall, og er derfor ekstremt stabilt og reagerer nesten aldri med noe.

Dette ønsket om å ha 8 elektroner i ytterste skall kalles oktettregelen, og den er selve motoren bak all kjemi. Atomer kan oppnå full oktett ved å avgi elektroner, ta opp elektroner, eller dele elektroner med andre atomer. Du vil lære mye mer om dette når vi kommer til kjemiske bindinger.`,
    },
    {
      id: 'naturfag-10-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på elektronskal og valenselektroner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-1-n-quiz3-q0',
            task: 'Hva kalles elektronene i det ytterste skallet?',
            options: [
              { id: 'a', text: 'Kjerneelektroner', isCorrect: false },
              { id: 'b', text: 'Valenselektroner', isCorrect: true },
              { id: 'c', text: 'Frie elektroner', isCorrect: false },
              { id: 'd', text: 'Isotoper', isCorrect: false },
            ],
            solution:
              'Elektronene i det ytterste skallet kalles valenselektroner. De er de viktigste for kjemien fordi de bestemmer hvordan atomet reagerer med andre atomer og hvilke bindinger det kan danne.',
          },
          {
            id: 'naturfag-10-2-1-n-quiz3-q1',
            task: 'Oksygen har atomnummer 8. Hva er elektronkonfigurasjonen?',
            options: [
              { id: 'a', text: 'K=8', isCorrect: false },
              { id: 'b', text: 'K=2, L=6', isCorrect: true },
              { id: 'c', text: 'K=2, L=8', isCorrect: false },
              { id: 'd', text: 'K=4, L=4', isCorrect: false },
            ],
            solution:
              'Oksygen har 8 elektroner. Først fylles K-skallet med 2 (maks), deretter havner de resterende 6 i L-skallet. Elektronkonfigurasjon: K=2, L=6. Oksygen har altså 6 valenselektroner.',
          },
          {
            id: 'naturfag-10-2-1-n-quiz3-q2',
            task: 'Hvorfor er edelgassene så stabile?',
            options: [
              { id: 'a', text: 'Fordi de har mange protoner', isCorrect: false },
              { id: 'b', text: 'Fordi de har fullt ytterste elektronskall', isCorrect: true },
              { id: 'c', text: 'Fordi de ikke har nøytroner', isCorrect: false },
              { id: 'd', text: 'Fordi de er radioaktive', isCorrect: false },
            ],
            solution:
              'Edelgassene har fullt ytterste elektronskall (8 elektroner, eller 2 for helium). Dette gjør dem ekstremt stabile, og de reagerer nesten aldri med andre stoffer. Alle andre atomer streber etter den samme stabiliteten gjennom oktettregelen.',
          },
          {
            id: 'naturfag-10-2-1-n-quiz3-q3',
            task: 'Klor har elektronkonfigurasjon K=2, L=8, M=7. Hvor mange elektroner trenger klor for fullt ytterste skall?',
            options: [
              { id: 'a', text: '7', isCorrect: false },
              { id: 'b', text: '3', isCorrect: false },
              { id: 'c', text: '1', isCorrect: true },
              { id: 'd', text: '8', isCorrect: false },
            ],
            solution:
              'Klor har 7 valenselektroner i M-skallet. Ifølge oktettregelen ønsker atomet 8. Klor trenger altså bare 1 elektron til, og det er derfor klor er svært reaktivt og gjerne tar opp et elektron fra for eksempel natrium.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket materiens grunnleggende byggesteiner. Vi har sett at alle stoffer er bygd opp av atomer, og at hvert atom består av tre typer partikler: protoner (positive, i kjernen), nøytroner (nøytrale, i kjernen) og elektroner (negative, i elektronskyen). Atomkjernen er bitte liten, men inneholder nesten all massen.

Vi har lært at atomnummeret (Z) er antall protoner og bestemmer hvilket grunnstoff atomet tilhører, mens massetallet (A) er summen av protoner og nøytroner. Det finnes 118 kjente grunnstoffer, og hvert har et unikt symbol.

Vi har oppdaget at isotoper er varianter av samme grunnstoff med ulikt antall nøytroner. De har like kjemiske egenskaper, men ulik masse, og brukes blant annet til karbondatering og i medisin.

Til slutt har vi sett at elektroner er organisert i skall (K, L, M, N), og at valenselektronene i det ytterste skallet bestemmer atomets kjemiske oppførsel. Oktettregelen, at atomer streber etter 8 elektroner i ytterste skall, er selve nøkkelen til å forstå hvorfor atomer reagerer med hverandre.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2 NARRATIV: Periodesystemet
// ============================================================================

export const CHAPTER_NATURFAG_10_2_2_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-2-2-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '2.2',
  title: 'Periodesystemet',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag historien bak kjemiens viktigste kart og lær å lese periodesystemet som en åpen bok, fra alkalimetaller til edelgasser.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke periodesystemet til å forklare egenskaper til atomer og molekyler',
    'forklare hvordan grunnstoffene er organisert i periodesystemet',
    'gjenkjenne trender og mønstre i periodesystemet',
  ],
  linkedChapterId: 'naturfag-10-2-2',
  content: [
    {
      id: 'naturfag-10-2-2-n-intro',
      type: 'text',
      content: `## Grunnstoffenes verdenskart

Tenk deg at du skulle organisere 118 helt forskjellige stoffer, alt fra hydrogen, den letteste gassen, til oganesson, et tungt kunstig element som bare eksisterer i brøkdeler av et sekund. Hvordan ville du sortert dem? Det var nettopp denne utfordringen en russisk kjemiker ved navn Dmitri Mendelejev sto overfor i 1869.

Mendelejev hadde 63 kjente grunnstoffer å jobbe med, og han la merke til noe fascinerende. Når han ordnet dem etter økende atommasse, dukket det opp mønstre i egenskapene deres. Noen var myke metaller som reagerte voldsomt med vann. Andre var giftige gasser. Enda andre reagerte nesten aldri med noe som helst. Og disse gruppene kom tilbake igjen og igjen, i et regelmessig mønster.

Det geniale med Mendelejev var at han la grunnstoffene i rader slik at stoffer med like egenskaper kom under hverandre i kolonner. Og enda mer imponerende: Han så tomme plasser i tabellen sin og forutsa at det fantes grunnstoffer som ennå ikke var oppdaget. Han beskrev til og med egenskapene de ville ha. Da gallium, skandium og germanium senere ble oppdaget, stemte de nesten perfekt med forutsigelsene hans.

I dag vet vi at det er atomnummeret, ikke atommassen, som bestemmer rekkefølgen. Det moderne periodesystemet har 118 grunnstoffer, og det er kanskje det viktigste verktøyet i hele kjemien.`,
    },
    {
      id: 'naturfag-10-2-2-n-section1',
      type: 'text',
      content: `## Slik leser du periodesystemet

Periodesystemet er organisert på en elegant og logisk måte. La oss bryte det ned.

De horisontale radene kalles perioder. Det finnes 7 perioder, og periodenummeret forteller oss hvor mange elektronskall atomet har. Hydrogen og helium i periode 1 har bare 1 skall. Karbon i periode 2 har 2 skall. Natrium i periode 3 har 3 skall. Enkelt og greit.

De vertikale kolonnene kalles grupper, og det finnes 18 av dem. Gruppen er enda viktigere enn perioden, for grunnstoff i samme gruppe har like kjemiske egenskaper. Hvorfor? Fordi de har samme antall valenselektroner, altså elektroner i ytterste skall. Alle grunnstoff i gruppe 1 har 1 valenselektron, alle i gruppe 2 har 2, og alle i gruppe 17 har 7.

Hver rute i periodesystemet gir deg mye informasjon om grunnstoffet: symbolet, atomnummeret, navnet og atommassen. For eksempel viser ruten for oksygen symbolet O, atomnummer 8, og atommasse 16,00.

Periodesystemet kan også deles inn i tre store kategorier: metaller til venstre og i midten, ikke-metaller til høyre, og halvmetaller langs en diagonal linje mellom dem. Metaller glinsende, leder strøm og varme, og er formbare. Ikke-metaller er matte, leder ikke strøm, og er ofte sprø. Halvmetaller, som silisium, har egenskaper fra begge kategorier og brukes blant annet i databrikker.`,
    },
    {
      id: 'naturfag-10-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på periodesystemets oppbygning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-2-n-quiz1-q0',
            task: 'Hva forteller periodenummeret oss om et grunnstoff?',
            options: [
              { id: 'a', text: 'Antall valenselektroner', isCorrect: false },
              { id: 'b', text: 'Antall elektronskall', isCorrect: true },
              { id: 'c', text: 'Antall protoner', isCorrect: false },
              { id: 'd', text: 'Antall nøytroner', isCorrect: false },
            ],
            solution:
              'Periodenummeret forteller hvor mange elektronskall atomet har. Et grunnstoff i periode 3, som natrium, har 3 elektronskall. Antall valenselektroner finner du derimot fra gruppenummeret.',
          },
          {
            id: 'naturfag-10-2-2-n-quiz1-q1',
            task: 'Hvorfor har grunnstoff i samme gruppe like kjemiske egenskaper?',
            options: [
              { id: 'a', text: 'Fordi de har lik atommasse', isCorrect: false },
              { id: 'b', text: 'Fordi de har like mange nøytroner', isCorrect: false },
              { id: 'c', text: 'Fordi de har samme antall valenselektroner', isCorrect: true },
              { id: 'd', text: 'Fordi de ble oppdaget samtidig', isCorrect: false },
            ],
            solution:
              'Grunnstoff i samme gruppe har samme antall valenselektroner. Siden valenselektronene bestemmer hvordan et atom reagerer kjemisk, vil grunnstoff med likt antall valenselektroner oppføre seg kjemisk likt.',
          },
          {
            id: 'naturfag-10-2-2-n-quiz1-q2',
            task: 'Hva forteller atomnummeret oss?',
            options: [
              { id: 'a', text: 'Antall protoner i atomkjernen', isCorrect: true },
              { id: 'b', text: 'Antall nøytroner i atomkjernen', isCorrect: false },
              { id: 'c', text: 'Atommassen til grunnstoffet', isCorrect: false },
              { id: 'd', text: 'Hvor reaktivt grunnstoffet er', isCorrect: false },
            ],
            solution:
              'Atomnummeret er alltid lik antall protoner i atomkjernen. Det er dette som definerer hvilket grunnstoff det er. Grunnstoffene i periodesystemet er ordnet etter økende atomnummer.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-2-n-section2',
      type: 'text',
      content: `## De spesielle gruppene

Noen grupper i periodesystemet er så karakteristiske at de har fått egne navn. La oss ta en rundtur.

Helt til venstre, i gruppe 1, finner vi alkalimetallene: litium, natrium, kalium, rubidium, cesium og francium. Disse metallene er myke nok til at du kan skjære i dem med en kniv, men de er også ekstremt reaktive. Natrium reagerer eksplosivt med vann! Alle har 1 valenselektron som de gjerne vil bli kvitt, og de må lagres i olje for å unngå at de reagerer med luften.

I gruppe 2 finner vi jordalkalimetallene: beryllium, magnesium, kalsium og flere. De er litt hardere enn alkalimetallene og litt mindre reaktive, med 2 valenselektroner. Kalsium er viktig for kroppen vår fordi det gir oss sterke knokler og tenner.

Helt over på andre siden, i gruppe 17, har vi halogenene: fluor, klor, brom, jod og astat. Disse er aggressive ikke-metaller med 7 valenselektroner som desperat ønsker seg én elektron til for å fylle ytterste skall. De er giftige i ren form, men når de reagerer med metaller, danner de salter. Bordsalt, natriumklorid, er nettopp natrium pluss klor. Klor brukes til å rense vannet i svømmebasseng.

Og helt til høyre, i gruppe 18, sitter edelgassene: helium, neon, argon, krypton, xenon og radon. Disse gassene har fullt ytterste elektronskall og er derfor svært ureaktive. De bryr seg rett og slett ikke om andre atomer. Helium brukes i ballonger, neon i lysreklamer, og argon i lyspærer.`,
    },
    {
      id: 'naturfag-10-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på de spesielle gruppene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-2-n-quiz2-q0',
            task: 'Hvilken gruppe inneholder edelgassene?',
            options: [
              { id: 'a', text: 'Gruppe 1', isCorrect: false },
              { id: 'b', text: 'Gruppe 17', isCorrect: false },
              { id: 'c', text: 'Gruppe 18', isCorrect: true },
              { id: 'd', text: 'Gruppe 2', isCorrect: false },
            ],
            solution:
              'Edelgassene befinner seg i gruppe 18, helt til høyre i periodesystemet. De har fullt ytterste elektronskall og er derfor svært ureaktive.',
          },
          {
            id: 'naturfag-10-2-2-n-quiz2-q1',
            task: 'Hvorfor er alkalimetallene i gruppe 1 så reaktive?',
            options: [
              { id: 'a', text: 'Fordi de har mange elektronskall', isCorrect: false },
              { id: 'b', text: 'Fordi de har 1 valenselektron som de lett kan miste', isCorrect: true },
              { id: 'c', text: 'Fordi de er veldig tunge', isCorrect: false },
              { id: 'd', text: 'Fordi de er radioaktive', isCorrect: false },
            ],
            solution:
              'Alkalimetallene har bare 1 valenselektron. Denne ene elektronen er lett å gi fra seg, og da oppnår atomet fullt ytterste skall. Det er derfor de reagerer så lett, for eksempel eksplosivt med vann.',
          },
          {
            id: 'naturfag-10-2-2-n-quiz2-q2',
            task: 'Halogenene i gruppe 17 har 7 valenselektroner. Hva betyr det for deres kjemiske oppførsel?',
            options: [
              { id: 'a', text: 'De er ureaktive fordi de nesten har fullt skall', isCorrect: false },
              { id: 'b', text: 'De er svært reaktive fordi de bare trenger 1 elektron til for fullt skall', isCorrect: true },
              { id: 'c', text: 'De kan bare reagere med edelgasser', isCorrect: false },
              { id: 'd', text: 'De avgir gjerne 7 elektroner', isCorrect: false },
            ],
            solution:
              'Med 7 valenselektroner trenger halogenene bare 1 elektron til for å oppnå full oktett. Det gjør dem svært reaktive, de tar gjerne opp et elektron fra metaller og danner salter som NaCl (bordsalt).',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-2-n-section3',
      type: 'text',
      content: `## Trender og mønstre i periodesystemet

Periodesystemet er ikke bare en liste over grunnstoff. Det avslører mønstre og trender som lar oss forutsi egenskaper uten å måtte undersøke hvert eneste stoff.

Den første trenden handler om atomstørrelse. Når du går nedover i en gruppe, blir atomene større fordi det legges til flere elektronskall. Litium er mindre enn natrium, som er mindre enn kalium. Men når du beveger deg bortover i en periode mot høyre, blir atomene faktisk mindre, selv om det kommer flere elektroner til. Grunnen er at flere protoner i kjernen trekker elektronene sterkere innover.

Den andre trenden handler om reaktivitet, men den oppfører seg forskjellig for metaller og ikke-metaller. Metaller i gruppe 1 og 2 blir mer reaktive nedover i gruppen. Cesium er langt mer reaktivt enn natrium. Grunnen er at det ytterste elektronskallet er lenger fra kjernen, og valenselektronet er lettere å rive løs. Ikke-metaller i gruppe 17 oppfører seg motsatt: De blir mer reaktive oppover. Fluor er det mest reaktive grunnstoffet som finnes.

Den tredje trenden er elektronegativitet, et mål på hvor sterkt et atom trekker til seg elektroner. Elektronegativiteten øker mot høyre i en periode og oppover i en gruppe. Fluor, øverst til høyre, har høyest elektronegativitet av alle grunnstoffer. Francium, nederst til venstre, har lavest.

Disse trendene gjør periodesystemet til et utrolig kraftig verktøy. Bare ved å kjenne plasseringen til et grunnstoff kan du forutsi mye om hvordan det vil oppføre seg.`,
    },
    {
      id: 'naturfag-10-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på trender i periodesystemet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-2-n-quiz3-q0',
            task: 'Hva skjer med atomstørrelsen når du beveger deg nedover i en gruppe?',
            options: [
              { id: 'a', text: 'Atomene blir mindre', isCorrect: false },
              { id: 'b', text: 'Atomene blir større', isCorrect: true },
              { id: 'c', text: 'Atomene forblir like store', isCorrect: false },
              { id: 'd', text: 'Det avhenger av atomnummeret', isCorrect: false },
            ],
            solution:
              'Når du går nedover i en gruppe, legges det til flere elektronskall. Hvert nytt skall gjør atomet større. Derfor er kalium større enn natrium, som er større enn litium.',
          },
          {
            id: 'naturfag-10-2-2-n-quiz3-q1',
            task: 'Hvilket grunnstoff har høyest elektronegativitet?',
            options: [
              { id: 'a', text: 'Francium', isCorrect: false },
              { id: 'b', text: 'Helium', isCorrect: false },
              { id: 'c', text: 'Fluor', isCorrect: true },
              { id: 'd', text: 'Cesium', isCorrect: false },
            ],
            solution:
              'Fluor har høyest elektronegativitet av alle grunnstoffer. Det befinner seg øverst til høyre i periodesystemet (blant ikke-metallene), der elektronegativiteten er høyest. Elektronegativiteten øker oppover i en gruppe og mot høyre i en periode.',
          },
          {
            id: 'naturfag-10-2-2-n-quiz3-q2',
            task: 'Klor er i periode 3 og gruppe 17. Hva kan vi si om klor basert på dette?',
            options: [
              { id: 'a', text: 'Det har 3 valenselektroner og er et metall', isCorrect: false },
              { id: 'b', text: 'Det har 3 elektronskall, 7 valenselektroner, og er et ikke-metall', isCorrect: true },
              { id: 'c', text: 'Det har 17 elektronskall og er en edelgass', isCorrect: false },
              { id: 'd', text: 'Det har 3 protoner og 17 elektroner', isCorrect: false },
            ],
            solution:
              'Periode 3 betyr 3 elektronskall. Gruppe 17 (halogenene) betyr 7 valenselektroner og at klor er et ikke-metall. Klor er dermed en reaktiv ikke-metall som gjerne tar opp 1 elektron for å få fullt ytterste skall.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket periodesystemet, kjemiens viktigste kart. Vi har sett at det ble skapt av Mendelejev i 1869, og at hans geniale innsikt om mønstre i grunnstoffenes egenskaper førte til forutsigelser om ukjente grunnstoffer som senere viste seg å stemme.

Vi har lært å lese periodesystemet: Perioder (horisontale rader) forteller oss antall elektronskall, og grupper (vertikale kolonner) forteller oss antall valenselektroner. Grunnstoff i samme gruppe har like kjemiske egenskaper.

Vi har møtt de fire berømte gruppene: alkalimetallene (gruppe 1) med sin ene valenselektron og eksplosive reaksjoner med vann, jordalkalimetallene (gruppe 2), halogenene (gruppe 17) som desperat jakter på én ekstra elektron, og edelgassene (gruppe 18) som er helt stabile med fullt ytterste skall.

Vi har også oppdaget tre viktige trender: Atomstørrelsen øker nedover og minker mot høyre. Metallreaktiviteten øker nedover, mens ikke-metallreaktiviteten øker oppover. Og elektronegativiteten øker oppover og mot høyre, med fluor på toppen. Alt dette gjør periodesystemet til et kraftig forutsigelsesverktøy.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3 NARRATIV: Kjemiske bindinger
// ============================================================================

export const CHAPTER_NATURFAG_10_2_3_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-2-3-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '2.3',
  title: 'Kjemiske bindinger',
  subtitle: 'Narrativ versjon',
  description:
    'Forstå hvorfor atomer slår seg sammen og danner molekyler og forbindelser, fra bordsalt til vann til stål, gjennom ionebinding, kovalent binding og metallbinding.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare bindinger mellom atomer og hvordan de påvirker stoffenes egenskaper',
    'bruke periodesystemet til å forklare hvorfor og hvordan atomer danner forbindelser',
  ],
  linkedChapterId: 'naturfag-10-2-3',
  content: [
    {
      id: 'naturfag-10-2-3-n-intro',
      type: 'text',
      content: `## Hvorfor slår atomer seg sammen?

Tenk deg at du har bordsalt i hånden. Du vet nå at det består av natrium og klor. Natrium er et metall som eksploderer i kontakt med vann. Klor er en giftig, grønnlig gass som ble brukt som stridsgass i første verdenskrig. Allikevel er kombinasjonen av disse to et hvitt, uskyldig pulver som du drysser på maten din hver eneste dag. Hvordan er det mulig?

Svaret ligger i kjemiske bindinger. Når natrium og klor møtes, skjer det noe dramatisk med elektronene deres, og resultatet er et helt nytt stoff med helt andre egenskaper. Kjemiske bindinger er limet som holder atomer sammen, og de forklarer hvorfor verden ser ut som den gjør.

Men hvorfor danner atomer bindinger i det hele tatt? Husker du oktettregelen fra forrige kapittel? Atomer streber etter å ha 8 elektroner i ytterste skall, akkurat som edelgassene. Edelgassene er stabile nettopp fordi de allerede har fullt skall, og de reagerer nesten aldri med noe. Alle andre atomer prøver å oppnå den samme stabiliteten, og det gjør de ved å avgi, ta opp eller dele elektroner med andre atomer. Det er dette som er kjemiske bindinger.

I dette kapittelet skal du lære om de tre hovedtypene: ionebinding, kovalent binding og metallbinding.`,
    },
    {
      id: 'naturfag-10-2-3-n-section1',
      type: 'text',
      content: `## Ionebinding: Gi og ta

La oss starte med det som skjer mellom natrium og klor. Natrium har elektronkonfigurasjon 2-8-1. Det har altså 1 valenselektron som det gjerne vil kvitte seg med, for da sitter det igjen med fullt L-skall (2-8). Klor har elektronkonfigurasjon 2-8-7 og ønsker seg 1 elektron til for å få fullt M-skall (2-8-8).

Løsningen er elegant: Natrium gir sitt ene valenselektron til klor. Natrium har nå 11 protoner men bare 10 elektroner, og blir derfor positivt ladet. Vi kaller det et kation og skriver det som Na pluss. Klor har nå 17 protoner og 18 elektroner, og blir negativt ladet. Vi kaller det et anion og skriver det som Cl minus.

Og hva skjer når du har en positiv og en negativ ladning rett ved siden av hverandre? De tiltrekker hverandre, selvfølgelig. Denne tiltrekningskraften mellom det positive og det negative ionet er det vi kaller ionebinding.

Det samme prinsippet gjelder for magnesiumoksid. Magnesium har 2 valenselektroner (2-8-2) og gir begge til oksygen, som har 6 valenselektroner (2-6) og trenger nettopp 2 til. Resultatet er Mg to pluss og O to minus, som tiltrekker hverandre og danner MgO.

Ioneforbindelser har noen typiske egenskaper. De har høyt smeltepunkt fordi det kreves mye energi for å bryte de sterke tiltrekningskreftene mellom ionene. De er sprø fordi ionene kan forskyves og stoppe hverandre. Og de leder elektrisk strøm når de er løst i vann eller smeltet, fordi ionene da kan bevege seg fritt.`,
    },
    {
      id: 'naturfag-10-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på ionebinding:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-3-n-quiz1-q0',
            task: 'Hva sier oktettregelen?',
            options: [
              { id: 'a', text: 'Atomer ønsker å ha 8 protoner i kjernen', isCorrect: false },
              { id: 'b', text: 'Atomer ønsker å ha 8 elektroner i ytterste skall', isCorrect: true },
              { id: 'c', text: 'Atomer kan danne maksimalt 8 bindinger', isCorrect: false },
              { id: 'd', text: 'Det finnes 8 typer kjemiske bindinger', isCorrect: false },
            ],
            solution:
              'Oktettregelen sier at atomer streber etter å ha 8 elektroner i ytterste skall (eller 2 for hydrogen og helium). Dette gjør dem stabile, akkurat som edelgassene.',
          },
          {
            id: 'naturfag-10-2-3-n-quiz1-q1',
            task: 'Mellom hvilke typer stoffer dannes ionebinding?',
            options: [
              { id: 'a', text: 'Mellom to ikke-metaller', isCorrect: false },
              { id: 'b', text: 'Mellom to metaller', isCorrect: false },
              { id: 'c', text: 'Mellom et metall og et ikke-metall', isCorrect: true },
              { id: 'd', text: 'Mellom en edelgass og et metall', isCorrect: false },
            ],
            solution:
              'Ionebinding dannes mellom et metall og et ikke-metall. Metallet gir fra seg elektroner (blir kation), og ikke-metallet tar opp elektroner (blir anion). De motsatte ladningene tiltrekker hverandre.',
          },
          {
            id: 'naturfag-10-2-3-n-quiz1-q2',
            task: 'Hva er et kation?',
            options: [
              { id: 'a', text: 'Et negativt ladet ion', isCorrect: false },
              { id: 'b', text: 'Et positivt ladet ion som har mistet elektroner', isCorrect: true },
              { id: 'c', text: 'Et nøytralt atom', isCorrect: false },
              { id: 'd', text: 'Et molekyl med kovalent binding', isCorrect: false },
            ],
            solution:
              'Et kation er et positivt ladet ion. Det dannes når et atom mister en eller flere elektroner. Metaller danner typisk kationer fordi de gjerne avgir valenselektronene sine. For eksempel blir Na til Na+ når det gir fra seg 1 elektron.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-3-n-section2',
      type: 'text',
      content: `## Kovalent binding: Å dele er å bry seg

Hva skjer når to ikke-metaller møtes? Ingen av dem er villige til å gi fra seg elektroner, for ikke-metaller holder hardt på elektronene sine. Løsningen er at de deler elektroner i stedet.

Tenk på to hydrogenatomer. Hvert hydrogenatom har bare 1 elektron, men ønsker seg 2 for å ligne på helium. Når de to atomene kommer nær hverandre, deler de elektronene sine. Hvert atom «føler» at det har 2 elektroner, fordi det ene felles elektronparet tilhører begge. Denne delingen av elektroner kalles kovalent binding, og resultatet er et hydrogenmolekyl, H₂.

Et molekyl er rett og slett to eller flere atomer som er bundet sammen med kovalente bindinger. Vann, H₂O, er et av de viktigste molekylene på jorden. Oksygen har 6 valenselektroner og trenger 2 til. Hvert hydrogen har 1 og trenger 1 til. Oksygen deler derfor 1 elektronpar med hvert av to hydrogenatomer, og vips har vi vannmolekylet.

Atomer kan dele mer enn ett elektronpar. I oksygengass, O₂, deler to oksygenatomer 2 elektronpar, en dobbeltbinding. I nitrogengass, N₂, deles hele 3 elektronpar, en trippelbinding. Jo flere elektronpar som deles, desto sterkere er bindingen.

Kovalente forbindelser har typisk lavere smeltepunkt enn ioneforbindelser og leder vanligvis ikke elektrisk strøm, fordi det ikke finnes frie ioner eller elektroner som kan bevege seg.

La oss også se på kjemiske formler. En kjemisk formel viser hvilke atomer molekylet inneholder og hvor mange. I H₂O betyr tallet 2 at det er 2 hydrogenatomer, mens oksygen uten tall betyr 1 oksygenatom. I CO₂ har vi 1 karbon og 2 oksygen. I glukose, C₆H₁₂O₆, har vi 6 karbon, 12 hydrogen og 6 oksygen.`,
    },
    {
      id: 'naturfag-10-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kovalent binding og molekyler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-3-n-quiz2-q0',
            task: 'Hvilken type binding dannes mellom to ikke-metaller?',
            options: [
              { id: 'a', text: 'Ionebinding', isCorrect: false },
              { id: 'b', text: 'Kovalent binding', isCorrect: true },
              { id: 'c', text: 'Metallbinding', isCorrect: false },
              { id: 'd', text: 'Hydrogenbinding', isCorrect: false },
            ],
            solution:
              'Når to ikke-metaller møtes, deler de elektroner og danner kovalente bindinger. Ingen av dem vil gi fra seg elektroner, så deling er den eneste løsningen for at begge skal oppnå fullt ytterste skall.',
          },
          {
            id: 'naturfag-10-2-3-n-quiz2-q1',
            task: 'Hva betyr den kjemiske formelen CO₂?',
            options: [
              { id: 'a', text: '2 karbonatomer og 1 oksygenatom', isCorrect: false },
              { id: 'b', text: '1 karbonatom og 2 oksygenatomer', isCorrect: true },
              { id: 'c', text: '1 karbonmolekyl og 2 oksygenmolekyler', isCorrect: false },
              { id: 'd', text: '12 karboner og 2 oksygener', isCorrect: false },
            ],
            solution:
              'I CO₂ er det 1 karbonatom (ingen tall etter C betyr 1) og 2 oksygenatomer (tallet 2 etter O). CO₂ er karbondioksid, gassen vi puster ut.',
          },
          {
            id: 'naturfag-10-2-3-n-quiz2-q2',
            task: 'I oksygengass (O₂) deler to oksygenatomer 2 elektronpar. Hva kalles en slik binding?',
            options: [
              { id: 'a', text: 'Enkeltbinding', isCorrect: false },
              { id: 'b', text: 'Dobbeltbinding', isCorrect: true },
              { id: 'c', text: 'Trippelbinding', isCorrect: false },
              { id: 'd', text: 'Ionebinding', isCorrect: false },
            ],
            solution:
              'Når to atomer deler 2 elektronpar, kalles det en dobbeltbinding. Enkeltbinding er 1 elektronpar (som i H₂), dobbeltbinding er 2 (som i O₂), og trippelbinding er 3 (som i N₂).',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-3-n-section3',
      type: 'text',
      content: `## Metallbinding: Elektronskyen

Vi har sett hva som skjer mellom metall og ikke-metall (ionebinding) og mellom ikke-metall og ikke-metall (kovalent binding). Men hva skjer når metall møter metall?

I et metall er atomene ordnet i et fast, regelmessig gitter. Valenselektronene er ikke knyttet til bestemte atomer, men flyter fritt mellom alle atomene i gitteret. Vi kan forestille oss positive metallioner som sitter fast i gitteret, omgitt av en sky av frie elektroner som holder alt sammen. Denne elektronskyen er det vi kaller metallbinding.

De frie elektronene forklarer hvorfor metaller har sine karakteristiske egenskaper. Metaller leder elektrisk strøm fordi elektronene kan bevege seg fritt gjennom materialet. De leder varme fordi de frie elektronene kan overføre energi raskt. Og de er formbare fordi metallionene kan gli forbi hverandre uten at bindingene brytes. Elektronskyen tilpasser seg bare den nye formen.

La oss nå sammenligne de tre bindingstypene. Ionebinding er elektronoverføring mellom metall og ikke-metall og gir stoffer med høyt smeltepunkt som er sprø og leder strøm i oppløsning. Kovalent binding er elektrondeling mellom ikke-metaller og gir stoffer med lavere smeltepunkt som vanligvis ikke leder strøm. Metallbinding har en elektronsky mellom metallatomer og gir stoffer som leder strøm og varme og er formbare.

En enkel huskeregel for å bestemme bindingstype: Er begge atomene metaller? Da er det metallbinding. Er det ett metall og ett ikke-metall? Da er det ionebinding. Er begge atomene ikke-metaller? Da er det kovalent binding.`,
    },
    {
      id: 'naturfag-10-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på metallbinding og bindingstyper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-3-n-quiz3-q0',
            task: 'Hvorfor leder metaller elektrisk strøm?',
            options: [
              { id: 'a', text: 'Fordi de har mange protoner', isCorrect: false },
              { id: 'b', text: 'Fordi de har frie elektroner som kan bevege seg', isCorrect: true },
              { id: 'c', text: 'Fordi de har ionebindinger', isCorrect: false },
              { id: 'd', text: 'Fordi de har kovalente bindinger', isCorrect: false },
            ],
            solution:
              'I metallbinding flyter valenselektronene fritt mellom metallionene i gitteret. Disse frie elektronene kan transportere elektrisk ladning gjennom materialet, noe som gjør at metaller er gode ledere.',
          },
          {
            id: 'naturfag-10-2-3-n-quiz3-q1',
            task: 'Hvilken type binding finnes i vann (H₂O)?',
            options: [
              { id: 'a', text: 'Ionebinding', isCorrect: false },
              { id: 'b', text: 'Metallbinding', isCorrect: false },
              { id: 'c', text: 'Kovalent binding', isCorrect: true },
              { id: 'd', text: 'Ingen binding', isCorrect: false },
            ],
            solution:
              'Vann består av hydrogen og oksygen, som begge er ikke-metaller. Når to ikke-metaller bindes sammen, deler de elektroner og danner kovalente bindinger.',
          },
          {
            id: 'naturfag-10-2-3-n-quiz3-q2',
            task: 'Natrium (metall) reagerer med klor (ikke-metall). Hvilken bindingstype dannes?',
            options: [
              { id: 'a', text: 'Kovalent binding', isCorrect: false },
              { id: 'b', text: 'Metallbinding', isCorrect: false },
              { id: 'c', text: 'Ionebinding', isCorrect: true },
              { id: 'd', text: 'Dobbeltbinding', isCorrect: false },
            ],
            solution:
              'Når et metall møter et ikke-metall, dannes ionebinding. Natrium (metall) gir fra seg 1 elektron til klor (ikke-metall). Na blir Na+ og Cl blir Cl-, og de tiltrekker hverandre. Resultatet er natriumklorid, NaCl, altså bordsalt.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi forstått hvorfor atomer danner bindinger: De streber etter fullt ytterste elektronskall, akkurat som de stabile edelgassene. Oktettregelen, ønsket om 8 valenselektroner, er drivkraften bak all kjemi.

Vi har lært tre typer kjemiske bindinger. Ionebinding oppstår mellom metall og ikke-metall ved at elektroner overføres. Metallet mister elektroner og blir et positivt kation, ikke-metallet tar opp elektroner og blir et negativt anion, og ionene holdes sammen av tiltrekningskraften mellom ladningene. Ioneforbindelser har høyt smeltepunkt, er sprø, og leder strøm i oppløsning.

Kovalent binding dannes mellom to ikke-metaller ved at de deler elektronpar. Vi kan ha enkeltbindinger (1 par), dobbeltbindinger (2 par) eller trippelbindinger (3 par). Molekyler som H₂O, CO₂ og N₂ holdes sammen av kovalente bindinger.

Metallbinding finnes mellom metallatomer i et gitter, der frie elektroner danner en sky som holder positive metallioner sammen. Dette gir metaller sine kjente egenskaper: de leder strøm og varme og er formbare.

Vi har også lært å lese kjemiske formler og å bruke en enkel huskeregel for å bestemme bindingstype basert på om stoffene er metaller eller ikke-metaller.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4 NARRATIV: Kjemiske reaksjoner
// ============================================================================

export const CHAPTER_NATURFAG_10_2_4_NARRATIV: TextbookChapter = {
  id: 'naturfag-10-2-4-narrativ',
  courseId: 'naturfag-10',
  chapterNumber: '2.4',
  title: 'Kjemiske reaksjoner',
  subtitle: 'Narrativ versjon',
  description:
    'Oppdag hva som skjer når stoffer møtes og forandres, fra forbrenning og rusting til fotosyntese, og lær å lese kjemiens eget språk: reaksjonslikninger.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare hva en kjemisk reaksjon er og hvordan den skiller seg fra fysiske endringer',
    'skrive enkle reaksjonslikninger med reaktanter og produkter',
    'gjenkjenne tegn på at en kjemisk reaksjon har funnet sted',
    'forklare hva som menes med forbrenning, oksidasjon og reduksjon',
    'beskrive forskjellen mellom eksotherme og endotherme reaksjoner',
    'forklare faktorer som påvirker reaksjonshastigheten',
  ],
  linkedChapterId: 'naturfag-10-2-4',
  content: [
    {
      id: 'naturfag-10-2-4-n-intro',
      type: 'text',
      content: `## Når stoffer forandres

Tenk deg at du sitter ved et bål en sommerkveld. Vedkubbene knaser og spraker, flammene danser i oransje og gult, det stiger røyk mot himmelen, og du kjenner varmen mot ansiktet. Det som skjer foran øynene dine er en kjemisk reaksjon, en av de mest grunnleggende prosessene i naturen.

Men hva er egentlig forskjellen mellom det som skjer med veden i bålet og det som skjer med isen i glasset ditt som sakte smelter? Begge deler endrer seg, men bare den ene er en kjemisk reaksjon.

Når is smelter til vann, er det en fysisk endring. Stoffet er fortsatt H₂O, bare formen har endret seg fra fast til flytende. Det samme gjelder når du klipper papir i biter, det er fortsatt papir, eller når du løser sukker i vann, sukkeret er fortsatt sukker. Men når ved brenner, skjer noe helt annet. Trevirket, som består av karbon og hydrogen, reagerer med oksygen i luften og blir til helt nye stoffer: karbondioksid, vanndamp og aske. De opprinnelige stoffene er borte og nye stoffer med andre egenskaper har tatt plassen. Det er en kjemisk reaksjon.

I dette kapittelet skal vi utforske hva kjemiske reaksjoner er, hvordan vi gjenkjenner dem, hvordan vi skriver dem ned i kjemiens eget språk, og hva som bestemmer hvor raskt de skjer.`,
    },
    {
      id: 'naturfag-10-2-4-n-section1',
      type: 'text',
      content: `## Reaktanter, produkter og reaksjonslikninger

I enhver kjemisk reaksjon har vi to typer stoffer. Stoffene vi starter med kalles reaktanter, og stoffene som dannes kalles produkter. Vi kan beskrive reaksjonen med en reaksjonslikning, som er kjemiens eget språk for å fortelle hva som skjer.

Den enkleste formen ser slik ut: Reaktanter pil mot høyre Produkter. Pilen betyr «reagerer til» eller «gir». For eksempel, når hydrogen reagerer med oksygen og danner vann, skriver vi: 2H₂ + O₂ pil 2H₂O. Til venstre for pilen er reaktantene, hydrogen og oksygen. Til høyre er produktet, vann.

Tallene foran de kjemiske formlene kalles tallkoeffisienter. De forteller hvor mange enheter av hvert stoff som er med. Tallet 2 foran H₂ betyr at 2 hydrogenmolekyler reagerer. Tallet 2 foran H₂O betyr at 2 vannmolekyler dannes.

Men hvorfor trenger vi disse tallene? Jo, fordi atomer verken oppstår eller forsvinner i en kjemisk reaksjon. Antall atomer av hvert grunnstoff må være likt på begge sider av pilen. Dette kalles balansering. La oss telle: på venstre side har vi 4 hydrogen (2 ganger H₂) og 2 oksygen (1 ganger O₂). På høyre side har vi 4 hydrogen og 2 oksygen (2 ganger H₂O). Det stemmer, likningen er balansert.

La oss ta et annet eksempel: forbrenning av metan (naturgass). Metan reagerer med oksygen og gir karbondioksid og vann. Balansert blir det: CH₄ + 2O₂ pil CO₂ + 2H₂O. Tell opp: 1 karbon, 4 hydrogen og 4 oksygen på hver side.`,
    },
    {
      id: 'naturfag-10-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kjemiske reaksjoner og reaksjonslikninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-4-n-quiz1-q0',
            task: 'Hvilken av disse er en kjemisk reaksjon?',
            options: [
              { id: 'a', text: 'Vann som fryser til is', isCorrect: false },
              { id: 'b', text: 'Sukker som løses opp i vann', isCorrect: false },
              { id: 'c', text: 'Ved som brenner', isCorrect: true },
              { id: 'd', text: 'Papir som rives i biter', isCorrect: false },
            ],
            solution:
              'Forbrenning av ved er en kjemisk reaksjon fordi det dannes nye stoffer (CO₂, H₂O, aske) med helt andre egenskaper. De andre er fysiske endringer der stoffet forblir det samme, bare formen eller tilstanden endres.',
          },
          {
            id: 'naturfag-10-2-4-n-quiz1-q1',
            task: 'I reaksjonen 2Mg + O₂ → 2MgO, hva er produktet?',
            options: [
              { id: 'a', text: 'Mg og O₂', isCorrect: false },
              { id: 'b', text: 'MgO', isCorrect: true },
              { id: 'c', text: 'Bare Mg', isCorrect: false },
              { id: 'd', text: 'Bare O₂', isCorrect: false },
            ],
            solution:
              'Produktet er stoffet til høyre for pilen. Her er det MgO, magnesiumoksid. Reaktantene (Mg og O₂) står til venstre for pilen.',
          },
          {
            id: 'naturfag-10-2-4-n-quiz1-q2',
            task: 'Hvorfor må en reaksjonslikning balanseres?',
            options: [
              { id: 'a', text: 'Fordi det ser penere ut', isCorrect: false },
              { id: 'b', text: 'Fordi atomer verken oppstår eller forsvinner i en reaksjon', isCorrect: true },
              { id: 'c', text: 'Fordi alle reaksjoner trenger like mengder av hvert stoff', isCorrect: false },
              { id: 'd', text: 'Fordi reaktantene alltid er tyngre enn produktene', isCorrect: false },
            ],
            solution:
              'Atomer kan ikke oppstå fra ingenting eller forsvinne i en kjemisk reaksjon. Antall atomer av hvert grunnstoff må derfor være likt på begge sider av pilen. Det er dette balansering sikrer.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-4-n-section2',
      type: 'text',
      content: `## Tegn på kjemiske reaksjoner og forbrenning

Hvordan vet du at det har skjedd en kjemisk reaksjon? Det finnes fire vanlige tegn. Det første er fargeendring, som når jern ruster og endres fra grått til rødbrunt. Det andre er gassutvikling, som når du blander natron og eddik og det bobler voldsomt fordi karbondioksid dannes. Det tredje er temperaturendring, enten at det blir varmere eller kaldere. Det fjerde er bunnfall, at det plutselig dannes et fast stoff i en blanding av to væsker.

En av de viktigste typene kjemiske reaksjoner er forbrenning. Forbrenning er en reaksjon der et stoff reagerer med oksygen og avgir varme og lys. Når ved brenner, reagerer karbon og hydrogen med oksygen og danner karbondioksid og vann. Når bensin brenner i motoren, skjer det samme med hydrokarbonene i bensinen. Og når naturgass brenner på komfyren, reagerer metan med oksygen: CH₄ + 2O₂ pil CO₂ + 2H₂O pluss varme.

Men det finnes en viktig forskjell mellom fullstendig og ufullstendig forbrenning. Ved fullstendig forbrenning er det nok oksygen tilgjengelig, og produktene er CO₂ og H₂O. Ved ufullstendig forbrenning er det for lite oksygen, og da dannes karbonmonoksid (CO) og sot (ren karbon) i stedet. Karbonmonoksid er en fargeløs og luktfri gass som er svært giftig. Det er derfor det er så viktig med god ventilasjon når man bruker gassfyring eller vedfyring innendørs.`,
    },
    {
      id: 'naturfag-10-2-4-n-section3',
      type: 'text',
      content: `## Oksidasjon, reduksjon og energi

Du har sikkert sett en spiker som har ligget ute i regnet og blitt rødbrunt av rust. Det som har skjedd er at jernet har reagert med oksygen fra luften og dannet jernoksid. Denne typen reaksjon, der et stoff tar opp oksygen, kalles oksidasjon. Rusting er egentlig det samme som forbrenning, bare mye, mye langsommere. Forbrenning er rask oksidasjon med varme og lys, rusting er langsom oksidasjon uten synlige flammer.

Det motsatte av oksidasjon er reduksjon, der et stoff avgir oksygen. Når jernmalm omdannes til rent jern i en smelteovn, fjernes oksygenet fra jernoksidet. Det er en reduksjon.

Alle kjemiske reaksjoner involverer energi, og her skiller vi mellom to typer. Eksotherme reaksjoner frigjør energi til omgivelsene. Forbrenning er det tydeligste eksempelet, du kjenner varmen fra bålet. Rusting er også eksotherm, men så langsom at du ikke merker varmen. Respirasjon i kroppen din er eksotherm, det er slik du holder kroppsvarmen. En enkel huskeregel: «ekso» betyr ut, energien går ut av reaksjonen.

Endotherme reaksjoner tar opp energi fra omgivelsene. Fotosyntese er det viktigste eksempelet: Planter bruker energi fra sollyset til å omdanne karbondioksid og vann til glukose og oksygen. Kjemiske kuldeposer bruker også endotherme reaksjoner, blandingen tar opp varme fra omgivelsene og blir kald. «Endo» betyr inn, energien går inn i reaksjonen.

Det fascinerende er at fotosyntese og forbrenning er motsatte reaksjoner. Planter lagrer solenergi i glukose, og vi frigjør den energien igjen når vi forbrenner ved eller fordøyer mat.`,
    },
    {
      id: 'naturfag-10-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på forbrenning, oksidasjon og energi:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-4-n-quiz2-q0',
            task: 'Jern ruster i kontakt med luft og fuktighet. Hva kalles denne typen reaksjon?',
            options: [
              { id: 'a', text: 'Reduksjon', isCorrect: false },
              { id: 'b', text: 'Oksidasjon', isCorrect: true },
              { id: 'c', text: 'Fordampning', isCorrect: false },
              { id: 'd', text: 'Endotherm reaksjon', isCorrect: false },
            ],
            solution:
              'Når jern ruster, tar det opp oksygen fra luften og danner jernoksid (Fe₂O₃). Dette er oksidasjon, en reaksjon der et stoff tar opp oksygen. Rusting er en langsom oksidasjon, i motsetning til forbrenning som er rask.',
          },
          {
            id: 'naturfag-10-2-4-n-quiz2-q1',
            task: 'Hva er forskjellen mellom en eksotherm og en endotherm reaksjon?',
            options: [
              { id: 'a', text: 'Eksotherm tar opp energi, endotherm frigjør energi', isCorrect: false },
              { id: 'b', text: 'Eksotherm frigjør energi til omgivelsene, endotherm tar opp energi', isCorrect: true },
              { id: 'c', text: 'Det er ingen forskjell', isCorrect: false },
              { id: 'd', text: 'Eksotherme skjer bare i laboratorier', isCorrect: false },
            ],
            solution:
              'Eksotherm betyr at energi (varme) går ut av reaksjonen til omgivelsene, som ved forbrenning. Endotherm betyr at energi går inn i reaksjonen fra omgivelsene, som ved fotosyntese. Huskeregel: ekso = ut, endo = inn.',
          },
          {
            id: 'naturfag-10-2-4-n-quiz2-q2',
            task: 'Hvorfor er ufullstendig forbrenning farlig?',
            options: [
              { id: 'a', text: 'Fordi det dannes for mye CO₂', isCorrect: false },
              { id: 'b', text: 'Fordi det dannes karbonmonoksid (CO), en giftig gass', isCorrect: true },
              { id: 'c', text: 'Fordi temperaturen blir for høy', isCorrect: false },
              { id: 'd', text: 'Fordi det ikke skjer noen reaksjon', isCorrect: false },
            ],
            solution:
              'Ved ufullstendig forbrenning dannes karbonmonoksid (CO) i stedet for karbondioksid (CO₂). CO er fargeløs og luktfri, men svært giftig fordi den hindrer blodet i å transportere oksygen. Derfor er god ventilasjon viktig ved forbrenning innendørs.',
          },
          {
            id: 'naturfag-10-2-4-n-quiz2-q3',
            task: 'Fotosyntese er en endotherm reaksjon. Hva betyr det?',
            options: [
              { id: 'a', text: 'Plantene frigjør varme', isCorrect: false },
              { id: 'b', text: 'Plantene tar opp energi fra sollyset', isCorrect: true },
              { id: 'c', text: 'Plantene produserer oksygen fra ingenting', isCorrect: false },
              { id: 'd', text: 'Reaksjonen skjer bare om natten', isCorrect: false },
            ],
            solution:
              'En endotherm reaksjon tar opp energi fra omgivelsene. I fotosyntesen bruker planter solenergi til å omdanne CO₂ og H₂O til glukose (C₆H₁₂O₆) og O₂. Energien lagres i glukosen og frigjøres igjen ved forbrenning eller fordøyelse.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-4-n-section4',
      type: 'text',
      content: `## Hva bestemmer hastigheten?

Noen kjemiske reaksjoner skjer på et øyeblikk, som når hydrogen eksploderer i kontakt med en gnist. Andre tar år, som rusting av jern. Hva er det som bestemmer hvor raskt en reaksjon skjer?

Den første faktoren er temperatur. Jo høyere temperatur, desto raskere går reaksjonen. Grunnen er at molekylene beveger seg raskere ved høyere temperatur, og dermed kolliderer de oftere og med mer kraft. Tenk på det som en folkerik festsal: Hvis alle går sakte og forsiktig, møtes folk sjelden. Hvis alle løper rundt, kolliderer folk hele tiden. Det er derfor mat i kjøleskapet holder seg lenger, reaksjonene som bryter ned maten går saktere i kulden.

Den andre faktoren er konsentrasjon, altså hvor tett pakket molekylene er. Jo flere molekyler per volum, desto flere kollisjoner og desto raskere reaksjon. Sterk syre reagerer raskere enn fortynnet syre av denne grunn.

Den tredje faktoren er overflateareal. Hvis du deler opp et stoff i mindre biter, er det flere steder der reaksjonen kan foregå. Treflis brenner mye raskere enn en hel trestokk. Pulverisert sukker løser seg opp langt raskere enn en hel sukkerbit.

Den fjerde og siste faktoren er katalysatorer. En katalysator er et stoff som øker reaksjonshastigheten uten å bli brukt opp selv. Enzymene i kroppen din er katalysatorer som gjør at matfordøyelsen, som ellers ville tatt uker, skjer på noen timer. Katalysatorer i bilens eksosrør bryter ned giftige avgasser til ufarlige stoffer.

Disse fire faktorene, temperatur, konsentrasjon, overflateareal og katalysatorer, er verktøyene vi har for å kontrollere hastigheten på kjemiske reaksjoner.`,
    },
    {
      id: 'naturfag-10-2-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'naturfag-10-2-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på reaksjonshastighet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'naturfag-10-2-4-n-quiz3-q0',
            task: 'Hvorfor holder mat seg lenger i kjøleskapet enn på benken?',
            options: [
              { id: 'a', text: 'Fordi kjøleskapet er mørkt', isCorrect: false },
              { id: 'b', text: 'Fordi lavere temperatur gjør at nedbrytningsreaksjonene går saktere', isCorrect: true },
              { id: 'c', text: 'Fordi maten tørker ut i kjøleskapet', isCorrect: false },
              { id: 'd', text: 'Fordi det ikke er oksygen i kjøleskapet', isCorrect: false },
            ],
            solution:
              'Ved lavere temperatur beveger molekylene seg saktere og kolliderer sjeldnere. De kjemiske reaksjonene som bryter ned maten går derfor mye langsommere i kjøleskapet enn ved romtemperatur.',
          },
          {
            id: 'naturfag-10-2-4-n-quiz3-q1',
            task: 'Treflis brenner raskere enn en hel trestokk. Hvilken faktor forklarer dette?',
            options: [
              { id: 'a', text: 'Temperatur', isCorrect: false },
              { id: 'b', text: 'Konsentrasjon', isCorrect: false },
              { id: 'c', text: 'Overflateareal', isCorrect: true },
              { id: 'd', text: 'Katalysator', isCorrect: false },
            ],
            solution:
              'Treflis har mye større total overflate enn en hel stokk. Mer overflate betyr flere kontaktpunkter mellom treet og oksygenet i luften, og dermed raskere forbrenning.',
          },
          {
            id: 'naturfag-10-2-4-n-quiz3-q2',
            task: 'Hva er en katalysator?',
            options: [
              { id: 'a', text: 'Et stoff som bremser en reaksjon', isCorrect: false },
              { id: 'b', text: 'Et stoff som starter en reaksjon men ikke deltar selv', isCorrect: false },
              { id: 'c', text: 'Et stoff som øker reaksjonshastigheten uten å bli brukt opp', isCorrect: true },
              { id: 'd', text: 'Et stoff som blir til et nytt produkt i reaksjonen', isCorrect: false },
            ],
            solution:
              'En katalysator øker reaksjonshastigheten uten å forbrukes selv. Enzymene i kroppen din er biologiske katalysatorer som gjør livsviktige reaksjoner mulige ved kroppstemperatur. Uten enzymer ville fordøyelsen tatt uker.',
          },
        ],
      },
    },
    {
      id: 'naturfag-10-2-4-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket kjemiske reaksjoner, prosessene der stoffer endres og nye stoffer dannes. Vi har lært å skille kjemiske endringer (der bindinger brytes og nye dannes) fra fysiske endringer (der stoffet forblir det samme).

Vi har lært å bruke reaksjonslikninger, kjemiens eget språk, med reaktanter til venstre for pilen og produkter til høyre. Tallkoeffisienter foran formlene sikrer at likningen er balansert, altså at antall atomer av hvert grunnstoff er likt på begge sider.

Vi har sett fire tegn på kjemiske reaksjoner: fargeendring, gassutvikling, temperaturendring og bunnfall. Vi har lært om forbrenning som reaksjon med oksygen, og om den viktige forskjellen mellom fullstendig forbrenning (som gir CO₂ og H₂O) og ufullstendig forbrenning (som gir giftig CO).

Vi har forstått oksidasjon (tar opp oksygen) og reduksjon (avgir oksygen), og skillet mellom eksotherme reaksjoner (frigjør energi, som forbrenning) og endotherme reaksjoner (tar opp energi, som fotosyntese).

Til slutt har vi lært at fire faktorer påvirker reaksjonshastigheten: temperatur, konsentrasjon, overflateareal og katalysatorer. Disse verktøyene lar oss kontrollere og forstå hvorfor noen reaksjoner skjer på et øyeblikk og andre tar år.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle narrative kapitler i DEL 2A
// ============================================================================

export const NATURFAG_10_NARRATIV_DEL2A_CHAPTERS = [
  CHAPTER_NATURFAG_10_2_1_NARRATIV,
  CHAPTER_NATURFAG_10_2_2_NARRATIV,
  CHAPTER_NATURFAG_10_2_3_NARRATIV,
  CHAPTER_NATURFAG_10_2_4_NARRATIV,
];
