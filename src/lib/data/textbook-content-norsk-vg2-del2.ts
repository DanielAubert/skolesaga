/**
 * Norsk VG2 - Del 2: Kapittel 2.1-2.10
 * Renessanse til opplysningstid (1500-1800)
 */

import type { TextbookChapter } from '@/lib/types/textbook';
import {
  TEKST_VG2_DASS_NORDLANDS_TROMPET,
  TEKST_VG2_DASS_HERRE_GUD,
  TEKST_VG2_ENGELBRETSDATTER_SIELENS,
  TEKST_VG2_KINGO_SORRIG_OG_GLAEDE,
  TEKST_VG2_KINGO_GYLDNE_SOL,
  TEKST_VG2_HOLBERG_ERASMUS_DISPUTAS,
  TEKST_VG2_HOLBERG_JEPPE,
  TEKST_VG2_HOLBERG_ERASMUS_NILLE,
  TEKST_VG2_HOLBERG_EPISTEL_347,
  TEKST_VG2_HOLBERG_NIELS_KLIM,
  TEKST_VG2_HOLBERG_KANDESTOBER,
  TEKST_VG2_HOLBERG_STUNDESLOSE,
  TEKST_VG2_HOLBERG_BARSELSTUEN,
} from './textbook-content-norsk-vg2-tekster';

// ============================================================================
// KAPITTEL 2.1: Humanismens ideer
// ============================================================================

export const CHAPTER_NORSK_VG2_2_1: TextbookChapter = {
  id: 'norsk-vg2-2-1',
  courseId: 'norsk-vg2',
  chapterNumber: '2.1',
  title: 'Humanismens ideer',
  description: 'Utforsk renessansens humanisme og dens betydning for europeisk kultur og litteratur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
    'reflektere over sakprosatekster og gjøre rede for den retoriske situasjonen de er blitt til i',
  ],
  content: [
    {
      id: 'norsk-vg2-2-1-intro',
      type: 'text',
      content: `## Humanismen - mennesket i sentrum

Humanismen var en intellektuell bevegelse som oppsto i Italia på 1300-tallet og spredte seg til resten av Europa i de følgende århundrene. Betegnelsen kommer fra det latinske "studia humanitatis" - studiet av det menneskelige. Humanistene vendte tilbake til antikkens tekster og satte mennesket i sentrum for sin tenkning.

**Bakgrunn og opprinnelse**

Middelalderen hadde vært preget av kirkens dominans i alle livets sfærer. Teologien var den høyeste vitenskap, og menneskets hovedoppgave var å forberede seg på det evige liv. Humanismen representerte et skifte: Fokuset ble rettet mot livet her og nå, mot menneskets evner og muligheter i denne verden.

I de italienske bystatene - Firenze, Venezia, Milano - vokste det frem en ny borgerklasse som hadde rikdom og fritid til å dyrke kunst og litteratur. Denne klassen ønsket seg en utdannelse som kunne gjøre dem til veltalende, kultiverte borgere - ikke bare til prester eller munker.

**Humanistenes program**

Humanistene gjenoppdaget og studerte tekster fra gresk og romersk antikk:
- Filosofer som Platon og Aristoteles
- Diktere som Homer, Vergil og Ovid
- Talere som Cicero
- Historikere som Tacitus og Livius

De mente at disse tekstene inneholdt tidløs visdom om menneskets natur og det gode liv. Ved å studere antikken kunne mennesket utvikle sine evner og bli et bedre, mer harmonisk menneske.

**Humanismens menneskesyn**

Humanistene hadde et optimistisk syn på mennesket:
- Mennesket har fornuft og fri vilje
- Mennesket kan forme sin egen skjebne
- Mennesket har uante muligheter for utvikling
- Kroppen er ikke syndig, men en del av skaperverket
- Livet på jorden har egenverdi

Dette var et brudd med middelalderens fokus på arvesynden og menneskets avhengighet av Guds nåde.

**Humanismen i Norden**

Humanismen kom relativt sent til Skandinavia, først på 1500-tallet. Her ble den nært knyttet til reformasjonen. Viktige skikkelser var:
- Christiern Pedersen (dansk) - oversatte Bibelen
- Olaus Magnus (svensk) - skrev om nordisk historie
- Peder Claussøn Friis (norsk) - oversatte Snorres kongesagaer

I Norge, som var under dansk styre, kom humanistiske impulser hovedsakelig gjennom København og kirken.`,
    },
    {
      id: 'norsk-vg2-2-1-def-1',
      type: 'definition',
      title: 'Humanismens kjennetegn',
      content: `**Sentrale begreper:**

**Humanisme:** Intellektuell bevegelse som setter mennesket i sentrum og vektlegger studiet av antikkens kultur.

**Renessanse:** "Gjenfødelse" - betegnelsen på perioden ca. 1400-1600 da antikken ble gjenoppdaget.

**Studia humanitatis:** Humanistenes studieprogram: grammatikk, retorikk, historie, poesi og moralfilosofi.

**Ad fontes:** "Til kildene" - humanistenes motto om å gå tilbake til originaltekstene.

**Homo universalis:** "Det universelle menneske" - idealet om det allsidige dannede menneske.

**Humanismens verdier:**

- **Individualisme:** Fokus på enkeltmenneskets verdi og muligheter
- **Rasjonalitet:** Tillit til menneskets fornuft
- **Dannelse:** Utdannelse former det gode menneske
- **Toleranse:** Åpenhet for ulike synspunkter
- **Skjønnhet:** Estetikk og kunst som verdier i seg selv`,
    },
    {
      id: 'norsk-vg2-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Pico della Mirandolas tale om menneskets verdighet',
      problem: `Les dette utdraget fra Giovanni Pico della Mirandolas "Om menneskets verdighet" (1486):

"Vi har ikke gitt deg, Adam, noen bestemt plass, ingen egenart, ingen spesiell oppgave, for at du selv skal kunne skaffe deg og eie den plassen, den egenarten og de oppgavene du selv ønsker deg..."`,
      solution: `**Analyse:**

Pico lar Gud tale til Adam (mennesket). Budskapet er at mennesket ikke er låst til en bestemt natur som dyr og planter. Mennesket har frihet til å forme seg selv.

**Kontrast til middelalderen:**
- Middelalderen: Mennesket er synder som trenger nåde
- Humanismen: Mennesket har uante muligheter

Teksten ble et manifest for humanismens optimistiske menneskesyn.`,
    },
    {
      id: 'norsk-vg2-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva humanismen var og hva som kjennetegner den.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr ordet "humanisme", og når oppsto bevegelsen?',
            solution: 'Humanisme kommer fra "studia humanitatis". Bevegelsen oppsto i Italia på 1300-tallet.',
          },
          {
            label: 'b',
            task: 'Hvordan skilte humanismens menneskesyn seg fra middelalderens?',
            solution: 'Humanismen fremhevet menneskets muligheter og frie vilje, mens middelalderen fokuserte på arvesynd og Guds nåde.',
          },
        ],
        solution: 'Humanismen representerte et skifte mot fokus på mennesket og livet her og nå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det latinske uttrykket "ad fontes"?',
        options: [
          'Til kildene',
          'Til Gud',
          'Til folket',
          'Til fremtiden',
        ],
        answer: 0,
        solution: '"Ad fontes" betyr "til kildene" og var humanistenes motto om å gå tilbake til originaltekstene fra antikken, i stedet for å stole på middelalderens fortolkninger.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse alternativene beskriver best begrepet "homo universalis"?',
        options: [
          'Det allsidige, dannede menneske',
          'Det religiøse menneske',
          'Det naturlige menneske',
          'Det ensomme menneske',
        ],
        answer: 0,
        solution: '"Homo universalis" betyr "det universelle menneske" og var humanismens ideal om et menneske som behersket mange ulike kunster og vitenskaper - et allsidig dannet menneske.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn tre fag som inngikk i humanistenes studieprogram ("studia humanitatis").',
        hints: ['Tenk på hva humanistene mente var viktig for å danne det gode menneske.'],
        solution: 'Humanistenes studieprogram besto av grammatikk, retorikk, historie, poesi og moralfilosofi. Disse fagene skulle gjøre mennesket veltalende, kunnskapsrikt og moralsk.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor humanismen oppsto nettopp i de italienske bystatene.',
        hints: ['Tenk på økonomi, handel og sosiale forhold.'],
        solution: 'I de italienske bystatene (Firenze, Venezia, Milano) hadde det vokst frem en rik borgerklasse gjennom handel. Disse hadde rikdom og fritid til å dyrke kunst og litteratur. De ønsket en utdannelse som kunne gjøre dem til kultiverte borgere, ikke bare prester. Dessuten lå Italia geografisk nært til de gamle romerske kulturstedene, og mange antikke tekster ble bevart i italienske klosterbiblioteker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gi eksempler på antikke forfattere som humanistene studerte, og forklar kort hva de er kjent for.',
        hints: ['Tenk på filosofer, diktere og talere fra gresk og romersk tid.'],
        solution: 'Humanistene studerte blant annet filosofene Platon og Aristoteles (greske tenkere som grunnla vestlig filosofi), dikterne Homer (Iliaden og Odysseen) og Vergil (Aeneiden), taleren Cicero (mesterlig retorikk og statstenkning) og historikerne Tacitus og Livius (romersk historieskrivning).',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser utdraget fra Pico della Mirandola. Hva forteller teksten om humanistenes menneskesyn, og hvordan skiller dette seg fra middelalderens syn?',
        hints: ['Se på hva Gud gir mennesket ifølge teksten - eller rettere sagt hva han ikke gir.'],
        solution: 'I utdraget lar Pico Gud tale til Adam og fortelle at mennesket ikke har fått noen bestemt plass, egenart eller oppgave. Mennesket er fritt til å velge selv. Dette er et radikalt brudd med middelalderens syn der menneskets plass var gitt av Gud og standen det var født inn i. Humanistene mente mennesket hadde frihet og ansvar for sin egen utvikling, i motsetning til middelalderens oppfatning av mennesket som bundet av arvesynden og avhengig av Guds nåde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvordan kom humanismen til Norden, og hvilken rolle spilte reformasjonen i denne prosessen?',
        hints: ['Tenk på forbindelsen mellom det å lese originaltekster og det å oversette Bibelen.'],
        solution: 'Humanismen kom til Norden på 1500-tallet, senere enn i Sør-Europa. Den ble nært knyttet til reformasjonen fordi begge bevegelser la vekt på å gå tilbake til originalkildene ("ad fontes"). Reformatorene ville at folk skulle lese Bibelen på sitt eget språk, mens humanistene ville studere antikkens tekster i original. Viktige nordiske humanister som Christiern Pedersen (bibeloversetter) og Peder Claussøn Friis (oversatte Snorre) kombinerte humanistisk lærdom med reformasjonens idealer. I Norge kom impulsene hovedsakelig gjennom København og kirken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om humanismens idealer er relevante i dag. Gi eksempler fra samtiden.',
        hints: ['Tenk på menneskerettigheter, utdanning, toleranse og individualisme.'],
        solution: 'Humanismens idealer lever videre i mange av de verdiene vi tar for gitt i dag: menneskerettigheter (menneskets verdi og frihet), allmenndannelse (utdanning for alle, ikke bare eliten), toleranse (respekt for ulike meninger og livssyn), og individualisme (fokus på enkeltmenneskets rettigheter). FNs menneskerettighetserklæring bygger på humanistisk tankegang. Samtidig kan man diskutere om individualismen har gått for langt, eller om ikke alle mennesker i praksis har like muligheter til "å forme sin egen skjebne". Humanismens idealer er altså fortsatt relevante, men også omdiskuterte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign humanismens og middelalderens syn på mennesket. Skriv en kort tekst (ca. 200 ord) der du gjør rede for de viktigste forskjellene.',
        hints: ['Lag en oversikt med stikkord for hvert syn før du skriver.', 'Tenk på synet på kropp, fornuft, frihet og livets mål.'],
        solution: 'En god besvarelse bør trekke frem flere sentrale forskjeller: Middelalderen la vekt på arvesynd, Guds nåde og det evige liv som mål, mens humanismen fremhevet menneskets muligheter, frie vilje og livet her og nå. Middelalderens menneskesyn var pessimistisk (mennesket er syndig og avhengig av Gud), mens humanismens var optimistisk (mennesket kan forme seg selv). Kroppen ble sett som syndig i middelalderen, men som en del av skaperverket i humanismen. Middelalderens utdanning var rettet mot teologi og kirkens behov, mens humanistene ville danne det hele menneske gjennom studiet av antikken. Teksten bør være velorganisert og vise evne til å sammenligne og kontrastere to ulike tenkemåter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-1-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-1-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Leonardo da Vinci regnes som et eksempel på "homo universalis". Undersøk hans virksomhet og forklar hvorfor han passer til dette idealet.',
        hints: ['Tenk på at han var aktiv innenfor både kunst, vitenskap og teknikk.'],
        solution: 'Leonardo da Vinci (1452-1519) var maler, skulptør, arkitekt, ingeniør, anatom, oppfinner og vitenskapsmann. Han malte Mona Lisa og Nattverden, tegnet anatomiske studier av menneskekroppen, konstruerte flygemaskiner og krigsapparater, og studerte naturfenomener. Han representerer humanismens ideal om det allsidige, skapende menneske som behersker mange felt. Hans nysgjerrighet og bredde illustrerer troen på at mennesket har uante muligheter for utvikling - kjernen i humanismens menneskesyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Bibeloversettelser og trykkpressen
// ============================================================================

export const CHAPTER_NORSK_VG2_2_2: TextbookChapter = {
  id: 'norsk-vg2-2-2',
  courseId: 'norsk-vg2',
  chapterNumber: '2.2',
  title: 'Bibeloversettelser og trykkpressen',
  description: 'Lær om reformasjonen, trykkpressens revolusjon og de første tekstene på folkespråket.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
    'gjøre rede for den historiske bakgrunnen for språksituasjonen i Norge i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-2-2-intro',
      type: 'text',
      content: `## Reformasjonen og språkets frigjøring

Reformasjonen på 1500-tallet var ikke bare en religiøs omveltning - den var også en språklig revolusjon. Da Martin Luther krevde at folk skulle kunne lese Bibelen på sitt eget språk, satte han i gang en prosess som fundamentalt endret europeisk kultur.

**Martin Luther og Bibelen**

Luther oversatte Bibelen til tysk - Det nye testamente i 1522, hele Bibelen i 1534. Oversettelsen ble et språklig mesterverk som formet det tyske språket.

**Trykkpressens betydning**

Gutenbergs trykkpresse (ca. 1450) gjorde det mulig å masseprodusere bøker. Luthers skrifter kunne spres i tusenvis av eksemplarer over hele Europa.

**Reformasjonen i Danmark-Norge**

Danmark-Norge ble protestantisk i 1536. Christian IIIs bibel (1550) ble normen for dansk skriftspråk. For Norge betydde dette at dansk ble offisielt skriftspråk.`,
    },
    {
      id: 'norsk-vg2-2-2-def-1',
      type: 'definition',
      title: 'Reformasjonen - sentrale begreper',
      content: `**Reformasjonen:** Religiøs bevegelse som brøt med den katolske kirken.

**Sola scriptura:** "Skriften alene" - Bibelen som eneste autoritet.

**Trykkpresse:** Gutenbergs oppfinnelse som revolusjonerte spredningen av tekster.

**Christian IIIs bibel (1550):** Første fullstendige danske bibeloversettelse.`,
    },
    {
      id: 'norsk-vg2-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar reformasjonens betydning for språk og litteratur.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor oversatte Luther Bibelen til tysk?',
            solution: 'Luther mente alle burde kunne lese Guds ord selv, ikke bare de lærde.',
          },
          {
            label: 'b',
            task: 'Hva var konsekvensene for Norge?',
            solution: 'Dansk ble offisielt skriftspråk. Kirken ble luthersk.',
          },
        ],
        solution: 'Reformasjonen frigjorde folkespråkene fra latinens dominans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var "sola scriptura"?',
        options: [
          'Bibelen som eneste autoritet i trosspørsmål',
          'En bok om solen skrevet av Luther',
          'Et latinsk dikt om naturen',
          'Et navn på den første trykte boken',
        ],
        answer: 0,
        solution: '"Sola scriptura" betyr "skriften alene" og var Luthers prinsipp om at Bibelen er den eneste autoriteten i trosspørsmål - ikke paven eller tradisjonen.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Når ble Gutenbergs trykkpresse oppfunnet?',
        options: [
          'Ca. 1450',
          'Ca. 1350',
          'Ca. 1550',
          'Ca. 1650',
        ],
        answer: 0,
        solution: 'Johannes Gutenberg oppfant trykkpressen med bevegelige typer rundt 1450. Dette regnes som en av de viktigste oppfinnelsene i europeisk historie.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar kort hva trykkpressen var og hvorfor den var revolusjonerende.',
        hints: ['Tenk på hvordan bøker ble laget før trykkpressen.'],
        solution: 'Trykkpressen med bevegelige typer gjorde det mulig å masseprodusere bøker. Før dette ble bøker kopiert for hånd av munker, noe som var svært tidkrevende og dyrt. Med trykkpressen kunne tusenvis av eksemplarer trykkes raskt og billig. Dette revolusjonerte spredningen av kunnskap og ideer i Europa.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar sammenhengen mellom trykkpressen og reformasjonen. Hvorfor var den ene avhengig av den andre?',
        hints: ['Tenk på hvordan Luther spredte ideene sine.'],
        solution: 'Uten trykkpressen ville Luthers ideer vanskelig kunne spredt seg så raskt. Luthers skrifter og bibeloversettelse ble trykt i tusenvis av eksemplarer og nådde ut til hele Europa. Trykkpressen gjorde det mulig å masseprodusere pamfletter og bøker på folkespråket, noe som undergravde kirkens monopol på kunnskap. Reformasjonen styrket også trykkpressen ved å skape etterspørsel etter bibler og religiøse tekster på morsmålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva var Christian IIIs bibel, og hvilken betydning fikk den for Norge?',
        hints: ['Tenk på at Norge var under dansk styre.'],
        solution: 'Christian IIIs bibel (1550) var den første fullstendige bibeloversettelsen til dansk. Den ble normen for dansk skriftspråk og ble brukt i kirke og skole i hele Danmark-Norge. For Norge betydde dette at dansk ble det offisielle skriftspråket. Nordmenn leste og skrev dansk, mens de talte norske dialekter. Denne situasjonen varte helt til 1800-tallet og er bakgrunnen for den norske språkdebatten og utviklingen av bokmål og nynorsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva det betyr at reformasjonen var "en språklig revolusjon".',
        hints: ['Tenk på hvilke språk som ble brukt før og etter reformasjonen.'],
        solution: 'Før reformasjonen var latin kirkens og de lærdes språk. Bibelen fantes bare på latin, og gudstjenesten ble holdt på latin. Reformasjonen krevde at folk skulle lese Bibelen og høre gudstjenesten på sitt eget språk. Dette førte til at folkespråkene ble utviklet som skriftspråk. Luther skapte moderne tysk gjennom sin bibeloversettelse. I Norden ble dansk det offisielle skriftspråket for kirke og stat.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign trykkpressens betydning på 1400-tallet med internettets betydning i vår tid. Hvilke likheter og forskjeller ser du?',
        hints: ['Tenk på spredning av informasjon, demokratisering av kunnskap og maktforhold.'],
        solution: 'Både trykkpressen og internett revolusjonerte spredningen av informasjon. Trykkpressen gjorde bøker tilgjengelige for flere enn eliten, slik internett gjør kunnskap tilgjengelig for alle med tilgang. Begge utfordret eksisterende maktstrukturer - trykkpressen utfordret kirkens kontroll over kunnskap, internett utfordrer tradisjonelle mediemonopoler. Forskjeller: Internett er mye raskere og mer demokratisk (alle kan publisere). Men begge har også ført til spredning av feilinformasjon. Trykkpressen krevde kapitalkrevende utstyr, mens internett er billigere å delta i.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan reformasjonen la grunnlaget for den norske språkdebatten. Bruk kunnskapene dine om Christian IIIs bibel og det danske skriftspråket.',
        hints: ['Tenk på hva som skjedde med det norske talespråket kontra skriftspråket.'],
        solution: 'Reformasjonen førte til at dansk ble skriftspråk i Norge gjennom Christian IIIs bibel. Nordmenn talte norske dialekter, men leste og skrev dansk. Denne kløften mellom tale og skrift varte i flere hundre år og ble grunnlaget for språkdebatten på 1800-tallet. Ivar Aasen ville skape et norsk skriftspråk basert på dialektene (nynorsk), mens Knud Knudsen ville fornorske det danske skriftspråket (bokmål). Uten reformasjonens innføring av dansk som skriftspråk i Norge ville språksituasjonen sett helt annerledes ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-2-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-2-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du lever i 1520. Skriv et kort brev (100-150 ord) der du enten forsvarer eller argumenterer mot at Bibelen skal oversettes til folkespråket.',
        hints: ['Tenk på argumenter fra både kirkens og reformatorenes perspektiv.'],
        solution: 'Et godt svar kan ta begge perspektiver. For oversettelse: Alle bør kunne lese Guds ord selv, ikke være avhengige av prestene. Det styrker troen og gjør folk mer opplyste. Mot oversettelse: Folk kan misforstå Bibelen uten veiledning. Det kan føre til vranglære og splittelse. Latin er det hellige språket som har vært brukt i kirken i over tusen år. Vurdering: Brevet bør vise innsikt i datidens debatt og bruke argumenter som passer til perioden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3: Petter Dass - dikterpresten
// ============================================================================

export const CHAPTER_NORSK_VG2_2_3: TextbookChapter = {
  id: 'norsk-vg2-2-3',
  courseId: 'norsk-vg2',
  chapterNumber: '2.3',
  title: 'Petter Dass - dikterpresten',
  description: 'Lær om Petter Dass og hans diktning som kombinerer barokk religiøsitet med nordnorsk natur.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-2-3-intro',
      type: 'text',
      content: `## Petter Dass - Norges første store dikter

Petter Dass (1647-1707) regnes som den første store dikteren i norsk litteraturhistorie. Som prest i Alstahaug på Helgelandskysten kombinerte han sitt religiøse kall med et usedvanlig diktertalent. Hans verk lever fortsatt i norsk kultur, og "Nordlands Trompet" gir et levende bilde av livet i Nord-Norge på 1600-tallet.

**Liv og virke**

Petter Dass ble født i Herøy på Helgeland i 1647. Faren var skotsk innvandrer (Peter Dundas), moren var norsk. Han studerte teologi i København og ble prest på Nesna i 1672, deretter sogneprest i Alstahaug i 1689.

Som prest hadde Dass ansvar for et enormt område med spredt bosetting. Han måtte reise lange avstander i åpen båt for å betjene menighetene. Denne nærheten til folket og naturen preger diktningen hans.

**Nordlands Trompet**

Dass' hovedverk er "Nordlands Trompet", et topografisk dikt som beskriver Nordland fylke fra sør til nord. Diktet ble ikke trykt før lenge etter hans død (første gang 1739), men sirkulerte i avskrifter.

Verket er unikt i sin tid:
- Det skildrer et konkret norsk landskap
- Det gir detaljerte beskrivelser av fiske, natur og folkeliv
- Det kombinerer lærd barokkstil med folkelig humor
- Det uttrykker kjærlighet til Nord-Norge og dets folk

**Katekismesangene**

Dass skrev også "Katekismesanger" - salmer som forklarte Luthers lille katekisme. Disse ble enormt populære og var i bruk i norske skoler helt frem til 1900-tallet. Sangene viser Dass' evne til å formidle religiøst stoff på en folkelig og sangbar måte.

**Barokke trekk**

Dass hører hjemme i barokken som litterær epoke. Hans diktning viser typiske barokktrekk:
- Kontrastvirkning (himmel og jord, glede og sorg)
- Rik billedbruk og metaforer
- Fokus på livets forgjengelighet
- Religiøs alvor kombinert med livsglede`,
    },
    {
      id: 'norsk-vg2-2-3-def-1',
      type: 'definition',
      title: 'Petter Dass - sentrale begreper',
      content: `**Topografisk dikt:** Et dikt som beskriver et geografisk område systematisk.

**Nordlands Trompet:** Dass' hovedverk som skildrer Nordland fylke - natur, folk, næring.

**Katekismesanger:** Salmer som forklarer Luthers katekisme - brukt i skolen i århundrer.

**Barokk:** Litterær og kunstnerisk epoke ca. 1600-1750, kjennetegnet av kontraster, rik billedbruk og religiøs tematikk.

**Kjennetegn ved Dass' diktning:**
- Konkret skildring av norsk natur og folkeliv
- Folkelig tone kombinert med lærd form
- Humor og livsglede
- Dyp religiøsitet`,
    },
    {
      id: 'norsk-vg2-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Fra Nordlands Trompet - "Herre Gud, dit dyre Navn og Ære"',
      problem: `Les dette utdraget fra en av Dass' mest kjente salmer, opprinnelig fra Nordlands Trompet:

"Herre Gud, dit dyre Navn og Ære
over verden høit i Akt skal være,
Og alle Siele, som i Verden boe,
De skulle Dig dit Navn bekjende,
Og alle Knæ for Dig sig bøie maa
Alt hvad sig rører her paa Jorderige."`,
      solution: `**Analyse:**

**Form:**
- Høytidelig salmestil
- Allitterasjon og rytme
- Bibelsk språk og billedbruk

**Innhold:**
- Lovprisning av Gud
- Alle skapninger skal ære Gud
- Religiøs underkastelse

**Barokke trekk:**
- Kontrasten mellom Guds storhet og menneskets litenhet
- Rik, høytidelig språkføring
- Fokus på det evige fremfor det jordiske

Salmen har levd i norsk tradisjon i over 300 år og synges fortsatt i kirker.`,
    },
    {
      id: 'norsk-vg2-2-3-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Petter Dass – «Nordlands Trompet»',
      content: [{
        id: 'norsk-vg2-2-3-primaertekst-1-text',
        type: 'text',
        content: TEKST_VG2_DASS_NORDLANDS_TROMPET,
      }],
    },
    {
      id: 'norsk-vg2-2-3-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Petter Dass – «Herre Gud, dit dyre Navn og Ære»',
      content: [{
        id: 'norsk-vg2-2-3-primaertekst-2-text',
        type: 'text',
        content: TEKST_VG2_DASS_HERRE_GUD,
      }],
    },
    {
      id: 'norsk-vg2-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar Petter Dass\' betydning i norsk litteraturhistorie.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem var Petter Dass, og når og hvor levde han?',
            solution: 'Petter Dass (1647-1707) var prest på Helgeland i Nord-Norge. Han regnes som Norges første store dikter.',
          },
          {
            label: 'b',
            task: 'Hva handler "Nordlands Trompet" om, og hvorfor er verket unikt?',
            solution: 'Nordlands Trompet er et topografisk dikt som skildrer Nordland. Det er unikt fordi det gir detaljerte beskrivelser av norsk natur og folkeliv på 1600-tallet.',
          },
        ],
        solution: 'Petter Dass kombinerte barokk religiøsitet med folkelig stil og skildringer av Nord-Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et topografisk dikt?',
        options: [
          'Et dikt som beskriver et geografisk område systematisk',
          'Et dikt som handler om kjærlighet',
          'Et dikt skrevet på latin',
          'Et dikt ment for å synges i kirken',
        ],
        answer: 0,
        solution: 'Et topografisk dikt beskriver et bestemt geografisk område - landskap, natur, folk og næring. Petter Dass\' "Nordlands Trompet" er det mest kjente topografiske diktet i norsk litteratur.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva var Katekismesangene?',
        options: [
          'Salmer som forklarte Luthers lille katekisme',
          'Folkesanger fra Nord-Norge',
          'Kongelige hyllingsdikt',
          'Dikt om naturen i Nordland',
        ],
        answer: 0,
        solution: 'Katekismesangene var salmer som Dass skrev for å forklare Luthers lille katekisme på en folkelig og sangbar måte. De ble enormt populære og var i bruk i norske skoler helt frem til 1900-tallet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Nevn fire kjennetegn ved Petter Dass\' diktning.',
        hints: ['Tenk på både innhold og stil.'],
        solution: 'Fire kjennetegn ved Dass\' diktning: 1) Konkret skildring av norsk natur og folkeliv. 2) Folkelig tone kombinert med lærd form. 3) Humor og livsglede. 4) Dyp religiøsitet. Dass var unik fordi han kombinerte barokkens kunstneriske stil med hverdagslige emner fra Nord-Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les primærteksten fra Nordlands Trompet. Hvordan skildrer Dass naturen og folkelivet i Nord-Norge?',
        hints: ['Se etter konkrete beskrivelser av landskap, fiske og folk.'],
        solution: 'Dass skildrer Nord-Norges natur med detaljerte beskrivelser av kystlandskapet, havet, fiskeriene og den arktiske naturen. Han viser stor kunnskap om lokale forhold og beskriver folkets arbeid og levemåte med humor og varme. Diktningen hans er uvanlig konkret for sin tid - han navngir steder, beskriver fiskesorter og skildrer hverdagslige aktiviteter. Samtidig løfter han det hverdagslige opp ved å se Guds storhet i naturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser salmen "Herre Gud, dit dyre Navn og Ære" som barokktekst. Finn minst tre barokke trekk.',
        hints: ['Se etter kontraster, billedbruk og religiøse temaer.'],
        solution: 'Barokke trekk i salmen: 1) Kontrasten mellom Guds storhet og menneskets litenhet (alt på jorden skal bøye seg for Gud). 2) Rik, høytidelig språkføring med utsmykkede formuleringer ("dit dyre Navn og Ære"). 3) Religiøst alvor med fokus på det evige ("alle Siele som i Verden boe"). 4) Allitterasjon og musikalitet som skaper høytidelig stemning. 5) Fokus på Guds allmakt over alt jordisk. Salmen er typisk barokk i sin kombinasjon av overdådighet og religiøs ydmykhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvordan preget Dass\' liv som prest i Nord-Norge diktningen hans? Gi konkrete eksempler.',
        hints: ['Tenk på hans reiser, kontakt med folket og opplevelser i naturen.'],
        solution: 'Som prest på Helgeland hadde Dass ansvar for et stort område med spredt bosetting. Han reiste i åpen båt langs kysten og opplevde naturkreftene på nært hold. Denne nærheten til naturen og folket preger diktningen: Han skildrer havet, fiskeriet, fuglelivet og landskapet med førstehånds kjennskap. Han kjente folkets hverdag - det harde arbeidet, gleder og sorger - og formidlet dette i diktene. I motsetning til mange samtidige forfattere som skrev om abstrakte emner, har Dass\' diktning en konkrethet som kommer fra hans egne erfaringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Petter Dass\' "Nordlands Trompet" med moderne reiselitteratur. Hva har de til felles, og hva er forskjellig?',
        hints: ['Tenk på formål, stil og målgruppe.'],
        solution: 'Fellestrekk: Begge beskriver steder og folk, begge vil formidle kunnskap om et område, begge bruker personlige observasjoner. Forskjeller: Nordlands Trompet er skrevet på vers med barokk stil, mens moderne reiselitteratur er prosa. Dass har et religiøst perspektiv (ser Guds storhet i naturen), mens moderne forfattere ofte er sekulære. Dass skriver systematisk om hele fylket, mens moderne reiselitteratur ofte er mer personlig og selektiv. Dass\' verk er også et tidsdokument som gir unikt innblikk i 1600-tallets Nord-Norge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-9',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Dass\' salmer synges fortsatt i norske kirker over 300 år etter at de ble skrevet. Drøft hvorfor disse tekstene har overlevd så lenge.',
        hints: ['Tenk på universelle temaer, musikalitet og tradisjon.'],
        solution: 'Dass\' salmer har overlevd fordi de kombinerer flere kvaliteter: 1) Universelle temaer som berører alle mennesker - tro, tvil, naturens storhet, livets mening. 2) Musikalitet og sangbarhet - de er laget for å synges og har melodi og rytme som sitter. 3) Folkelig språk - Dass formulerer seg slik at vanlige folk forstår. 4) Tradisjon - salmene har blitt del av norsk kirkekultur og overlevert fra generasjon til generasjon. 5) Litterær kvalitet - de er rett og slett godt skrevet, med billedbruk som er levende og treffende. Salmer som "Herre Gud, ditt dyre navn og ære" er blitt en del av norsk kulturarv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-10',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort analyse (150-200 ord) av utdraget fra "Herre Gud, dit dyre Navn og Ære". Bruk fagbegreper som kontrast, allitterasjon, billedbruk og vanitas.',
        hints: ['Start med å beskrive innholdet, deretter analyser form og virkemidler.'],
        solution: 'En god analyse bør identifisere salmens innhold (lovprisning av Gud, alle skapninger skal ære Gud), forme (høytidelig vers med rim og rytme), barokke trekk (kontrasten mellom Guds storhet og det jordiske, rik språkføring), og virkemidler (allitterasjon, gjentakelse, bibelsk billedspråk). Analysen bør også kommentere salmens funksjon (religiøs lovprisning ment for fellesskapets sang) og historiske kontekst (barokken, 1600-tallets religiøse kultur).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-3-ex-11',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-3-ex-11',
        number: '11',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvorfor ble "Nordlands Trompet" ikke trykt i Dass\' levetid, men først i 1739?',
        hints: ['Tenk på infrastrukturen for boktrykking i Norge på 1600-tallet.'],
        solution: 'Norge hadde ikke eget boktrykkeri på 1600-tallet - alt måtte trykkes i København. Det var kostbart og vanskelig å få bøker trykt. Dass\' verk sirkulerte i stedet i håndskrevne avskrifter, som var vanlig for litteratur i denne perioden. Nordlands Trompet ble først trykt i 1739, over 30 år etter Dass\' død. At verket likevel var kjent og populært gjennom avskrifter viser hvor verdsatt det var.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4: Barokkens kjennetegn
// ============================================================================

export const CHAPTER_NORSK_VG2_2_4: TextbookChapter = {
  id: 'norsk-vg2-2-4',
  courseId: 'norsk-vg2',
  chapterNumber: '2.4',
  title: 'Barokkens kjennetegn',
  description: 'Utforsk barokken som litterær epoke med fokus på kontraster, forgjengelighet og religiøsitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-2-4-intro',
      type: 'text',
      content: `## Barokken - kunstens overdådige epoke

Barokken var en kunst- og litteraturretning som dominerte Europa fra ca. 1600 til 1750. Betegnelsen kommer trolig fra det portugisiske "barroco" - en uregelmessig perle. Barokken kjennetegnes av overdådighet, kontraster og en dyp bevissthet om livets forgjengelighet.

**Historisk bakgrunn**

Barokken oppsto i en urolig tid:
- Religionskrigene herjet Europa etter reformasjonen
- Pest og krig førte til massedød
- Vitenskapen utfordret det gamle verdensbildet
- Den katolske motreformasjonen brukte kunst som propaganda

Denne uroen preger barokkens kunst og litteratur. Kontrasten mellom livets skjønnhet og dødens uunngåelighet er et gjennomgangstema.

**Barokkens litterære kjennetegn**

*Antiteser og kontraster:* Barokken elsket motsetninger - lys og mørke, liv og død, himmel og jord, skjønnhet og forfall.

*Vanitas-motivet:* "Vanitas" (forfengelighet) - alt jordisk er forgjengelig. Livet er kort, døden sikker.

*Carpe diem:* "Grip dagen" - nyt livet mens du kan, for døden kommer.

*Overdådig stil:* Rike metaforer, allegorier, ordspill, lange setninger.

*Religiøs alvor:* Fokus på frelsen, livets mening, menneskets plass i skaperverket.

**Barokken i Danmark-Norge**

Barokken kom sent til Norden. Viktige forfattere var:
- Thomas Kingo (dansk) - salmedikter
- Dorothe Engelbretsdatter (norsk) - religiøs lyrikk
- Petter Dass (norsk) - salmer og topografisk diktning`,
    },
    {
      id: 'norsk-vg2-2-4-def-1',
      type: 'definition',
      title: 'Barokkens litterære begreper',
      content: `**Vanitas:** "Forfengelighet" - alt jordisk er forgjengelig. Vanitas-motiver inkluderer hodeskaller, vissne blomster, timeglass.

**Memento mori:** "Husk at du skal dø" - påminnelse om dødens uunngåelighet.

**Carpe diem:** "Grip dagen" - nyt livet mens du kan.

**Antitese:** Motsetning - barokken elsket kontraster (lys/mørke, liv/død).

**Allegori:** Utvidet billedbruk der konkrete elementer står for abstrakte begreper.

**Emblem:** Kombinasjon av bilde, overskrift og utlegning - populær barokksjanger.

**Barokkstilens kjennetegn:**
- Lange, komplekse setninger
- Rike metaforer og sammenligninger
- Overdådighet og ornamentering
- Patos og følelsesladethet`,
    },
    {
      id: 'norsk-vg2-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Thomas Kingo - "Sorrig og Glæde"',
      problem: `Les dette utdraget fra Thomas Kingos salme "Sorrig og Glæde de vandre til Hobe" (1681):

"Sorrig og Glæde de vandre til Hobe,
Lykke, Ulykke de ganger paa Rad,
Medgang og Modgang hinanden mon love,
Soelskin og Skyer de følges og ad."`,
      solution: `**Analyse:**

**Barokke kontraster:**
- Sorg/glede
- Lykke/ulykke
- Medgang/motgang
- Solskin/skyer

Hvert verspar setter to motsetninger opp mot hverandre.

**Tema:**
Livet er vekslende - gode og onde tider følger hverandre. Dette er typisk barokk visdom: ingenting varer, alt forandres.

**Form:**
- Parallellisme (lignende setningsstruktur gjentas)
- Rim og rytme
- Billedbruk fra naturen (solskin/skyer)

Salmen uttrykker barokkens syn på livets ustabilitet og behovet for å finne trøst i det evige.`,
    },
    {
      id: 'norsk-vg2-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar barokkens kjennetegn som litterær epoke.',
        subTasks: [
          { label: 'a', task: 'Hva betyr vanitas-motivet, og hvorfor var det sentralt i barokken?', solution: 'Vanitas betyr forfengelighet - alt jordisk er forgjengelig. Motivet var sentralt fordi barokken var preget av krig, pest og religiøs uro.' },
          { label: 'b', task: 'Hva menes med barokkens kontraster (antiteser)?', solution: 'Barokken elsket motsetninger: liv/død, lys/mørke, himmel/jord. Disse kontrastene preger både form og innhold.' },
        ],
        solution: 'Barokken kombinerte overdådighet med dyptfølt religiøsitet og bevissthet om døden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    { id: 'norsk-vg2-2-4-ex-2', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-2', number: '2', type: 'multiple-choice', difficulty: 'lett', task: 'Hva betyr "carpe diem"?', options: ['Grip dagen', 'Husk døden', 'Alt er forgjengelig', 'Livet er kort'], answer: 0, solution: '"Carpe diem" er latin og betyr "grip dagen" - en oppfordring om å nyte livet mens man kan.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-4-ex-3', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-3', number: '3', type: 'multiple-choice', difficulty: 'lett', task: 'Hva betyr "memento mori"?', options: ['Husk at du skal dø', 'Grip dagen', 'Alt er forfengelighet', 'Elsk din neste'], answer: 0, solution: '"Memento mori" betyr "husk at du skal dø" - en påminnelse om dødens uunngåelighet som var svært vanlig i barokken.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-4-ex-4', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-4', number: '4', type: 'classic', difficulty: 'lett', task: 'Nevn tre historiske årsaker til at barokken oppsto.', hints: ['Tenk på krig, sykdom og religiøs uro.'], solution: 'Tre årsaker: 1) Religionskrigene herjet Europa etter reformasjonen. 2) Pest og krig førte til massedød og bevissthet om livets skjørhet. 3) Den katolske motreformasjonen brukte kunst som propaganda.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-4-ex-5', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-5', number: '5', type: 'classic', difficulty: 'medium', task: 'Analyser utdraget fra Kingos "Sorrig og Glæde". Identifiser kontrastene og forklar hva de uttrykker.', hints: ['Se på hvert verspar og finn motsetningene.'], solution: 'Kontrastene er: sorg/glede, lykke/ulykke, medgang/motgang, solskin/skyer. Kingo uttrykker at livet er ustabilt - gode og vonde tider veksler. Vanitas-motivet: det jordiske er forgjengelig.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-4-ex-6', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-6', number: '6', type: 'classic', difficulty: 'lett', task: 'Forklar forskjellen mellom vanitas og carpe diem som motiv.', hints: ['Det ene handler om forgjengelighet, det andre om å nyte livet.'], solution: 'Vanitas peker på at alt jordisk er forgjengelig og fører til religiøs ydmykhet. Carpe diem oppfordrer til å nyte livet. Begge springer ut av dødsbevissthet, men reaksjonen er ulik.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-4-ex-7', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-7', number: '7', type: 'classic', difficulty: 'medium', task: 'Forklar hva en allegori er og gi et eksempel på bruk av allegori i barokken.', hints: ['Konkrete bilder kan stå for abstrakte begreper.'], solution: 'En allegori er utvidet billedbruk der konkrete elementer står for abstrakte begreper. I barokken ble livet fremstilt som en reise, en blomst (vakker men forgjengelig), eller et skuespill ("theatrum mundi").', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-4-ex-8', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Hvordan skiller barokken seg fra renessansen og humanismen?', hints: ['Tenk på menneskesyn, livssyn og stil.'], solution: 'Renessansen hadde et optimistisk menneskesyn med fokus på menneskets muligheter. Barokken er mer pessimistisk: Livet er forgjengelig, bare det evige har verdi. Stilistisk preges renessansen av harmoni, barokken av kontraster og overdådighet.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-4-ex-9', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-9', number: '9', type: 'classic', difficulty: 'vanskelig', task: 'Finn eksempler på vanitas-motivet i moderne kultur (film, musikk, kunst). Drøft om motivet er like relevant i dag som på 1600-tallet.', hints: ['Tenk på filmer om aldring, musikk om livets korthet.'], solution: 'Vanitas finnes i moderne filmer om aldring, sanger om livets korthet, og anti-aging-industrien. Motivet er relevant fordi døden er universell, men vi forholder oss annerledes - vi forsøker å fortrenge i stedet for å søke religiøs trøst.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-4-ex-10', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-10', number: '10', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et kort dikt (4-8 linjer) som bruker barokke virkemidler. Bruk minst to kontrastpar og et vanitas- eller carpe diem-motiv.', hints: ['Velg et tema som ungdom/alderdom, vår/høst.'], solution: 'Et godt svar bruker klare kontrastpar og et tydelig vanitas- eller carpe diem-motiv med rike bilder i barokkens stil.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-4-ex-11', type: 'exercise', exercise: { id: 'norsk-vg2-2-4-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Sammenlign barokkens verdensoppfatning med vår tids. Skriv en kort drøftende tekst (150-200 ord).', hints: ['Tenk på forholdet til død, religion, forgjengelighet og mening.'], solution: 'En god drøfting bør fremheve at barokkens mennesker levde med døden som nær realitet og fant mening i religionen. Vår tid er mer sekulær og forsøker å kontrollere døden. Likevel deler vi bevisstheten om forgjengelighet.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5: Dorothe Engelbretsdatter
// ============================================================================

export const CHAPTER_NORSK_VG2_2_5: TextbookChapter = {
  id: 'norsk-vg2-2-5',
  courseId: 'norsk-vg2',
  chapterNumber: '2.5',
  title: 'Dorothe Engelbretsdatter',
  description: 'Lær om Nordens første kvinnelige forfatter og hennes religiøse diktning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-2-5-intro',
      type: 'text',
      content: `## Dorothe Engelbretsdatter - Nordens første kvinnelige forfatter

Dorothe Engelbretsdatter (1634-1716) regnes som Nordens første profesjonelle kvinnelige forfatter. Hennes religiøse diktning var enormt populær i sin samtid og ble lest og sunget i generasjoner.

**Liv og virke**

Dorothe ble født i Bergen i 1634. Faren var prest, og hun fikk en god utdannelse. I 1652 giftet hun seg med presten Ambrosius Hardenbech. De fikk ni barn, men syv av dem døde i ung alder. Denne personlige tragedien preger diktningen hennes.

Etter mannens død i 1683 levde hun som enke i Bergen og fikk kongelig pensjon for sin diktning - en anerkjennelse som var svært uvanlig for en kvinne på den tiden.

**Verk**

Dorothes hovedverk er:
- "Siælens Sang-Offer" (1678) - religiøse sanger
- "Taare-Offer" (1685) - sanger om sorg og trøst

Diktene ble trykt i mange opplag og var i bruk i norske hjem i over 100 år.

**Barokke trekk**

Dorothes diktning viser typiske barokktrekk:
- Vanitas-motiver og livets forgjengelighet
- Lengsel etter himmelen og det evige
- Rike bilder og metaforer
- Personlig, følelsesladet tone`,
    },
    {
      id: 'norsk-vg2-2-5-def-1',
      type: 'definition',
      title: 'Dorothe Engelbretsdatter - sentrale trekk',
      content: `**Biografiske fakta:**
- 1634-1716
- Født i Bergen, datter av prest
- Gift med prest, mistet 7 av 9 barn
- Fikk kongelig pensjon for diktningen

**Hovedverk:**
- "Siælens Sang-Offer" (1678)
- "Taare-Offer" (1685)

**Tematikk:**
- Sorg over døde barn
- Lengsel etter himmelen
- Trøst i troen
- Livets forgjengelighet

**Litterær betydning:**
- Nordens første kvinnelige forfatter
- Enormt populær i sin samtid
- Barokk religiøs lyrikk
- Personlig, følelsesladet stil`,
    },
    {
      id: 'norsk-vg2-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Fra Siælens Sang-Offer',
      problem: `Les dette utdraget fra Dorothe Engelbretsdatter:

"Ach! hvad er dog denne Verden,
Med sin Lyst og Pragt og Ære!
Intet uden Skam og Smærte,
Intet uden Sorg at bære."`,
      solution: `**Analyse:**

**Vanitas-motiv:**
Verden med sin "Lyst og Pragt og Ære" er egentlig ingenting - bare "Skam og Smærte" og "Sorg at bære".

**Barokke kontraster:**
- Overflate: Lyst, Pragt, Ære
- Realitet: Skam, Smærte, Sorg

**Personlig tone:**
"Ach!" - utropet gir diktet en personlig, følelsesladet tone.

**Teologisk budskap:**
Det jordiske er forgjengelig. Kun det himmelske gir virkelig verdi.

Utdraget viser hvordan Dorothe kombinerer barokkens vanitas-tenkning med personlig erfaring av sorg.`,
    },
    {
      id: 'norsk-vg2-2-5-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Dorothe Engelbretsdatter – «Siælens Sang-Offer»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-2-5-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_ENGELBRETSDATTER_SIELENS}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Dorothe Engelbretsdatters diktning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor er Dorothe Engelbretsdatter viktig i norsk litteraturhistorie?',
            solution: 'Hun regnes som Nordens første kvinnelige forfatter. Diktene var enormt populære og ble lest i generasjoner.',
          },
          {
            label: 'b',
            task: 'Hvordan preger Dorothes personlige erfaringer diktningen hennes?',
            solution: 'Hun mistet 7 av 9 barn. Sorgen over dette preger diktene, som ofte handler om død, sorg og lengsel etter himmelen.',
          },
        ],
        solution: 'Dorothe Engelbretsdatter kombinerte personlig erfaring med barokkens religiøse tematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    { id: 'norsk-vg2-2-5-ex-2', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-2', number: '2', type: 'multiple-choice', difficulty: 'lett', task: 'Hva er tittelen på Dorothe Engelbretsdatters hovedverk?', options: ['Taare-Offer', 'Siælens Sang-Offer', 'Aandelige Siunge-Koor', 'Nordlands Trompet'], answer: 1, solution: '"Siælens Sang-Offer" (1678) er Dorothes hovedverk - en samling religiøse sanger som ble enormt populær i sin samtid.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-5-ex-3', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-3', number: '3', type: 'multiple-choice', difficulty: 'lett', task: 'Hvor ble Dorothe Engelbretsdatter født?', options: ['København', 'Bergen', 'Oslo', 'Trondheim'], answer: 1, solution: 'Dorothe Engelbretsdatter ble født i Bergen i 1634. Faren var prest, og hun levde hele livet i Bergen.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-5-ex-4', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-4', number: '4', type: 'classic', difficulty: 'lett', task: 'Nevn tre typiske barokktrekk i Dorothes diktning.', hints: ['Tenk på motiver, stemning og stil.'], solution: 'Tre barokktrekk: 1) Vanitas-motiver om livets forgjengelighet. 2) Sterke kontraster mellom det jordiske og det himmelske. 3) Rike bilder og metaforer i et følelsesladet, personlig språk.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-5-ex-5', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-5', number: '5', type: 'classic', difficulty: 'lett', task: 'Forklar hva det betyr at Dorothe fikk kongelig pensjon for sin diktning.', hints: ['Tenk på kvinners posisjon på 1600-tallet.'], solution: 'Kongelig pensjon betydde at kongen betalte henne for å skrive. Det var svært uvanlig at en kvinne fikk slik anerkjennelse på 1600-tallet. Det viser hvor høyt diktningen ble verdsatt.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-5-ex-6', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-6', number: '6', type: 'classic', difficulty: 'medium', task: 'Les primærteksten fra "Siælens Sang-Offer". Identifiser vanitas-motivet og forklar hvordan Dorothe bruker kontraster mellom det jordiske og det himmelske.', hints: ['Se etter ord som beskriver det jordiske og det evige.', 'Hvordan er stemningen i diktet?'], solution: 'Dorothe kontrasterer det jordiske (forgjengelig, sorgfullt) med det himmelske (evig, trygt). Vanitas-motivet viser at verdens prakt er tomt og bedrageri. Lengsel etter himmelen er den eneste trøsten. Kontrastene forsterker budskapet om at det jordiske ikke kan gi varig glede.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-5-ex-7', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-7', number: '7', type: 'classic', difficulty: 'medium', task: 'Sammenlign Dorothe Engelbretsdatter med en moderne kvinnelig forfatter du kjenner. Hva er likt og ulikt i deres posisjon som kvinner i litteraturen?', hints: ['Tenk på tilgang til utdanning, lesere, og temaer.'], solution: 'Dorothe måtte overvinne store hindre: Kvinner hadde liten tilgang til utdanning og det litterære miljøet. Hennes diktning var religiøs fordi det var den ene sfæren kvinner kunne uttale seg i. Moderne forfatterinner har større frihet i temavalg og er ikke lenger avhengig av kongelig anerkjennelse. Likevel kan begge kjempe mot fordommer og må finne sin stemme i en mannsdominert tradisjon.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-5-ex-8', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Forklar hvorfor "Taare-Offer" (1685) ble så populær blant vanlige folk i Norge og Danmark.', hints: ['Tenk på barnedødelighet og dødsbevissthet på 1600-tallet.'], solution: 'Barnedødeligheten var svært høy på 1600-tallet. De fleste familier opplevde å miste barn. Dorothes sanger om sorg, trøst og lengsel etter himmelen traff direkte inn i folks hverdag. Diktene ga ord til en felles erfaring og tilbød religiøs trøst i en tid preget av usikkerhet og død.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-5-ex-9', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-9', number: '9', type: 'classic', difficulty: 'vanskelig', task: 'Drøft denne påstanden: "Dorothe Engelbretsdatters diktning er viktigere for likestillingshistorien enn for litteraturhistorien." Skriv et kort resonerende svar (100-150 ord).', hints: ['Vurder både den litterære kvaliteten og den historiske betydningen av at en kvinne publiserte.'], solution: 'Et godt svar drøfter begge sider: Dorothe er historisk viktig som Nordens første kvinnelige forfatter, men diktningen har også høy litterær kvalitet. Barokke virkemidler, personlig tone og evnen til å berøre lesere er litterære kvaliteter. Man kan argumentere for at begge dimensjoner henger sammen: Nettopp fordi hun var en god dikter, ble hun anerkjent, og den anerkjennelsen åpnet dører for fremtidige kvinner.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-5-ex-10', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-10', number: '10', type: 'classic', difficulty: 'vanskelig', task: 'Skriv din egen strofe (4-8 linjer) i Dorothe Engelbretsdatters stil. Bruk vanitas-motiv, kontraster mellom det jordiske og det himmelske, og et personlig, følelsesladet uttrykk.', hints: ['Begynn gjerne med et utrop som "Ach!" eller "O!"', 'Bruk kontraster mellom det forgjengelige og det evige.'], solution: 'En god strofe bruker barokke virkemidler: vanitas-motiv om det jordiskes tomhet, kontrast mellom verdens prakt og Guds evighet, og et personlig, følelsesladet uttrykk som formidler lengsel eller sorg. Rim og rytme bør passe til stilen.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-5-ex-11', type: 'exercise', exercise: { id: 'norsk-vg2-2-5-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Sammenlign Dorothe Engelbretsdatters posisjon som kvinnelig forfatter med Petter Dass sin posisjon. Begge var fra Bergen-området og skrev religiøs diktning. Hvilke likheter og forskjeller finner du i deres vilkår, temaer og status?', hints: ['Tenk på utdanning, roller i samfunnet, og sjanger.', 'Dass var prest og diktet om naturen. Dorothe var enke og diktet om sorg.'], solution: 'Likheter: Begge skrev religiøs diktning, begge var populære i sin samtid, begge var fra Bergen-området. Forskjeller: Dass var prest og mann med offentlig posisjon; Dorothe var enke uten institusjonell makt. Dass kombinerte naturbeskrivelse med kristendom; Dorothe fokuserte på sorg og trøst. Dass er mer kjent i ettertid, men Dorothe var minst like populær i samtiden. Kjønn forklarer mye av forskjellen i ettertidens vurdering.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6: Thomas Kingo og salmediktning
// ============================================================================

export const CHAPTER_NORSK_VG2_2_6: TextbookChapter = {
  id: 'norsk-vg2-2-6',
  courseId: 'norsk-vg2',
  chapterNumber: '2.6',
  title: 'Thomas Kingo og salmediktning',
  description: 'Lær om den store danske salmedikteren Thomas Kingo og barokkens religiøse lyrikk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-2-6-intro',
      type: 'text',
      content: `## Thomas Kingo - barokkens mester i salmesang

Thomas Kingo (1634-1703) regnes som den største danske salmedikteren gjennom tidene, og hans salmer ble sunget i norske kirker og hjem i flere hundre år. Hans diktning kombinerer barokkens stilistiske virtuositet med dyp religiøs innlevelse og har hatt enorm betydning for dansk-norsk kirkeliv og litteratur.

**Liv og bakgrunn**

Thomas Kingo ble født i Slangerup på Sjælland i 1634, samme år som Dorothe Engelbretsdatter. Faren var skotsk handelsmann som hadde slått seg ned i Danmark. Kingo studerte teologi ved Københavns universitet og ble prest i 1661. Hans litterære talent ble tidlig lagt merke til, og han skrev hyllingsdikt til kongen som skaffet ham gunst ved hoffet.

I 1677 ble Kingo utnevnt til biskop i Odense, en stilling han hadde til sin død. Som biskop arbeidet han for å reformere kirkelivet og styrke den religiøse oppbyggelsen i menighetene. Hans store livsprosjekt var å skape en ny salmebok som kunne erstatte de gamle, ofte grove og uvitenskapelige salmene som var i bruk.

**Litterær produksjon**

Kingos hovedverk er salmene. Han utga to store samlinger:

**Aandelige Siunge-Koor (1674, 1681):** Denne samlingen inneholder morgen- og aftensalmer, en for hver ukedag. Salmene følger menneskets liv gjennom hverdagen og året, med fokus på troens betydning i alle livets situasjoner.

**Kingos Salmebog (1699):** Denne autoriserte salmeboken skulle erstatte eldre samlinger og ble brukt i kirken i over hundre år. Den inneholder både Kingos egne salmer og bearbeidelser av eldre tekster.

**Barokke stiltrekk hos Kingo**

Kingos salmer er mesterstykker i barokk diktning. De kjennetegnes av:

*Kontraster og spenninger:*
Kingo elsker å sette motsetninger opp mot hverandre - lys mot mørke, liv mot død, syndefallens elendighet mot frelserens nåde. Disse kontrastene skaper dramatikk og spenning i tekstene.

*Rike bilder og metaforer:*
Salmene er fulle av levende bilder hentet fra naturen, hverdagslivet og Bibelen. Kingo bruker bildespråket til å gjøre abstrakte religiøse sannheter konkrete og følbare.

*Musikalitet og rytme:*
Kingo hadde et utsøkt øre for språkets klang. Hans vers flyter melodiøst og er laget for å synges. Rim, rytme og allitterasjon brukes bevisst for å skape stemning.

*Personlig henvendelse:*
Selv om salmene er ment for fellesskapets sang, har de ofte en personlig, nærmest intim tone. Dikter-jeget henvender seg direkte til Gud eller til sin egen sjel.

**Teologisk innhold**

Kingos salmer er preget av luthersk ortodoksi, men også av pietismens personlige fromhet. Sentrale temaer er:

- Menneskets syndighet og avhengighet av Guds nåde
- Jesu lidelse og forsoningens mysterium
- Naturens vitnesbyrd om skaperens storhet
- Livets forgjengelighet og dødens realitet
- Håpet om evig liv og gjenforening med Gud

Kingo var ikke redd for å skildre livets mørke sider - sykdom, død, sorg og fortvilelse. Men alltid munner tekstene ut i trøst og håp forankret i troen på frelsen.

**Betydning og etterliv**

Kingos salmer ble en sentral del av dansk-norsk fromhetsliv. De ble sunget i kirken, i hjemmene og ved livets store overganger - dåp, konfirmasjon, bryllup og begravelse. Flere av hans salmer synges fortsatt i norske kirker i dag.

Hans innflytelse på senere salmediktere er enorm. Grundtvig, som fornyelsenes mann på 1800-tallet, beundret Kingo og lot seg inspirere av hans språklige kraft. Også i vår tid gjenkjennes Kingos toneleie i nyskrevet salmelyrikk.

Som litterært verk representerer Kingos salmer høydepunktet i dansk-norsk barokkdiktning. Kombinasjonen av stilistisk raffinement og religiøs intensitet gjør dem til varige mesterverk i skandinavisk litteratur.`,
    },
    {
      id: 'norsk-vg2-2-6-def-1',
      type: 'definition',
      title: 'Thomas Kingo - sentrale begreper',
      content: `**Biografiske fakta:**
- 1634-1703
- Født i Slangerup på Sjælland, far av skotsk herkomst
- Prest fra 1661, biskop i Odense fra 1677
- Regnes som den største danske salmedikteren

**Hovedverk:**
- "Aandelige Siunge-Koor" del 1 (1674)
- "Aandelige Siunge-Koor" del 2 (1681)
- "Kingos Salmebog" (1699)

**Litterære kjennetegn:**
- Barokke kontraster (lys/mørke, liv/død)
- Rike metaforer og bilder
- Musikalitet og rytmisk presisjon
- Personlig, intim tone

**Viktige salmer:**
- "Sorrig og Glæde de vandre tilhobe"
- "Far, Verden, far vel"
- "Hver har sin Skæbne"
- "Som den gyldne Sol frembryder"`,
    },
    {
      id: 'norsk-vg2-2-6-def-2',
      type: 'definition',
      title: 'Salmen som sjanger',
      content: `**Salme:** En religiøs sang ment for fellesskapets bruk i gudstjeneste eller andakt.

**Salmetyper:**
- *Lovprisningssalmer:* Hyller Guds storhet
- *Botssalmer:* Uttrykker anger over synder
- *Trøstesalmer:* Gir håp i vanskeligheter
- *Morgen- og aftensalmer:* Knyttet til døgnets rytme
- *Høytidssalmer:* For jul, påske, pinse osv.

**Formelle trekk:**
- Versemål tilpasset melodi
- Enderim (ofte kryssrim eller parrim)
- Refreng eller omkved
- Bibelske referanser

**Salmens funksjoner:**
- Teologisk undervisning
- Fellesskapets uttrykk for tro
- Personlig andakt og trøst
- Markering av livets overganger`,
    },
    {
      id: 'norsk-vg2-2-6-example-1',
      type: 'example',
      title: 'Eksempel: "Sorrig og Glæde de vandre tilhobe"',
      problem: `Les denne strofen fra Kingos mest kjente salme:

"Sorrig og Glæde de vandre tilhobe,
Lykke, Ulykke de ganger paa Rad,
Medgang og Modgang hinanden tilrobe,
Solskin og Skyer de følges og ad.
Jorderigs Guld
Er prægtig Muld,
Himlen er ene af Salighed fuld."

Analyser strofens innhold og virkemidler.`,
      solution: `**Analyse av "Sorrig og Glæde":**

**Tematikk - livets skiftninger:**
Salmen handler om livets uforutsigbarhet. Glede og sorg, lykke og ulykke, medgang og motgang følger hverandre. Dette er en grunnleggende menneskelig erfaring som Kingo formulerer med stor presisjon.

**Barokke kontraster:**
- Sorrig / Glæde
- Lykke / Ulykke
- Medgang / Modgang
- Solskin / Skyer

Disse kontrastparene er typisk barokke. De viser hvordan motsetninger hører sammen og veksler i menneskelivet.

**Personifikasjon:**
Sorrig og Glæde "vandre tilhobe" - de fremstilles som personer som vandrer side om side. Det samme gjelder Medgang og Modgang som "tilrobe" hverandre.

**Vanitas-motivet:**
"Jorderigs Guld / Er prægtig Muld" - det jordiske er bare støv, uansett hvor vakkert det synes. Dette er det klassiske barokke vanitas-motivet.

**Konklusjon og trøst:**
"Himlen er ene af Salighed fuld" - bare himmelen gir virkelig lykke. Det jordiske er forgjengelig, men det himmelske er evig.

**Versemål og musikalitet:**
Strofen har et dansende, vuggende versemål som understreker temaet om veksling og bevegelse. Rimene (tilhobe/tilrobe, Rad/ad) binder versene sammen.

**Helhetlig budskap:**
Kingo trøster leseren: Det er naturlig at livet svinger mellom glede og sorg. Men bak alle svingningene finnes en evig salighet som venter. Denne visdommen gjør det lettere å bære livets motgang.`,
    },
    {
      id: 'norsk-vg2-2-6-example-2',
      type: 'example',
      title: 'Eksempel: Morgensalme - "Som den gyldne Sol frembryder"',
      problem: `Les begynnelsen av Kingos morgensalme:

"Som den gyldne Sol frembryder
Gjennem den kullsorte Sky,
Og sin Straale-Glands udskyder,
At Nat-Mørket maa bort fly:
Saa min Jesu Naades Skin
Trænger og i Sjælen ind."

Analyser hvordan Kingo bruker naturen som bilde på det åndelige.`,
      solution: `**Analyse av morgensalmen:**

**Naturbildet:**
Kingo beskriver soloppgangen: Den gyldne solen bryter gjennom mørke skyer og sender ut stråler som jager nattemørket bort. Dette er et vakkert og gjenkjennelig bilde.

**Sammenligning (simile):**
"Som... Saa" - Kingo sammenligner solen med Jesus. Akkurat som solen bryter gjennom mørket, trenger Jesu nåde inn i sjelen.

**Symbolikk:**
- Sol = Jesus, Guds lys
- Mørke/natt = synd, fortvilelse, uvitenhet
- Stråler = nåden som opplyser

**Teologisk budskap:**
Hver morgen kan vi oppleve nådens under. Akkurat som natten viker for solen, viker syndens mørke for Jesu lys.

**Hverdagsfromhet:**
Salmen knytter den religiøse opplevelsen til hverdagen. Soloppgangen, som alle kjenner, blir et bilde på Guds nåde. Slik gjør Kingo teologien konkret og nær.

**Barokke trekk:**
- Kontrasten lys/mørke
- Rike bilder fra naturen
- Dramatisk bevegelse (solen "frembryder")
- Personlig henvendelse ("min Jesu")

**Salmens funksjon:**
Som morgensalme skulle den synges ved dagens begynnelse. Den minner om Guds godhet og gir styrke til dagens gjerninger.`,
    },
    {
      id: 'norsk-vg2-2-6-tip-1',
      type: 'tip',
      title: 'Tips for salmeanalyse',
      content: `**Slik analyserer du en salme:**

**1. Les salmen høyt:**
Salmer er laget for å synges eller fremføres muntlig. Lytt til rytmen og melodien i språket.

**2. Identifiser sjanger:**
Er det en lovprisning, botssalme, trøstesalme eller høytidssalme? Dette påvirker tolkningen.

**3. Finn kontrastene:**
Barokksalmer er fulle av kontraster. Disse bærer ofte budskapet.

**4. Analyser bildespråket:**
- Hvilke bilder brukes?
- Hva representerer de?
- Hvordan skaper de mening?

**5. Finn det teologiske innholdet:**
- Hva sies om Gud, mennesket, frelsen?
- Hvilken trøst eller formaning gis?

**6. Vurder musikaliteten:**
- Hvordan fungerer rim og rytme?
- Hvordan støtter formen innholdet?

**7. Sett i kontekst:**
- Når skulle salmen brukes?
- Hvem var målgruppen?
- Hva var funksjonen?`,
    },
    {
      id: 'norsk-vg2-2-6-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Thomas Kingo – «Sorrig og Glæde de vandre tilhobe»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-2-6-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_KINGO_SORRIG_OG_GLAEDE}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-6-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Thomas Kingo – «Som den gyldne Sol frembryder»',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-2-6-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_KINGO_GYLDNE_SOL}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-6-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Thomas Kingos salmediktning.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner barokk salmediktning generelt?',
            solution: 'Barokk salmediktning kjennetegnes av sterke kontraster (lys/mørke, liv/død), rike bilder og metaforer, vanitas-motiver (livets forgjengelighet), musikalitet og rytme, samt personlig, følelsesladet tone.',
          },
          {
            label: 'b',
            task: 'Forklar hvordan kontrastene i "Sorrig og Glæde" uttrykker et barokt verdensbilde.',
            solution: 'Kontrastparene (sorg/glede, lykke/ulykke osv.) viser barokkens oppfatning av verden som full av motsetninger og omskiftelser. Det jordiske er forgjengelig og ustabilt, bare det himmelske er evig og fast.',
          },
          {
            label: 'c',
            task: 'Hvorfor ble Kingos salmer så populære og langvarige i bruk?',
            solution: 'Salmene kombinerer kunstnerisk kvalitet med religiøs dybde. De behandler allmennmenneskelige temaer (sorg, glede, dødsangst, håp) på en måte som treffer. Språket er vakkert og melodiøst, og budskapet gir trøst og mening.',
          },
        ],
        solution: 'Kingos salmer representerer høydepunktet i dansk-norsk barokklitteratur og har formet skandinavisk fromhetsliv i generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-6-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign barokkens salmediktere.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva har Thomas Kingo og Dorothe Engelbretsdatter til felles i sin diktning?',
            solution: 'Begge skriver religiøs lyrikk i barokkstil med sterke kontraster, vanitas-motiver, rike bilder og personlig tone. Begge behandler livets forgjengelighet og lengsel etter det evige.',
          },
          {
            label: 'b',
            task: 'Hva skiller Kingo og Dorothe fra hverandre?',
            solution: 'Kingo skrev for kirkens offisielle bruk og ble biskop. Dorothe skrev mer privat andaktslitteratur preget av personlige sorger. Kingo har et bredere register, Dorothe er mer intimt sorgpreget.',
          },
          {
            label: 'c',
            task: 'Finn en salme i salmeboken som fortsatt brukes, og undersøk om den er fra barokktiden.',
            solution: 'Eksempel: "Herre Gud, ditt dyre navn og ære" (Petter Dass), "Sorrig og Glæde" (Kingo). Mange barokksalmer brukes fortsatt, noen i modernisert språkform.',
          },
        ],
        solution: 'Barokkens salmediktere har satt varige spor i skandinavisk kirkemusikk og fromhetsliv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om salmetradisjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor var salmer så viktige i folks liv på 1600-1700-tallet?',
            solution: 'Salmer var hovedkilden til religiøs undervisning for folk flest. De ble sunget i kirken og hjemme, og lærte folk teologi, moral og trøst. I et samfunn uten radio, TV eller internett var salmer en sentral kulturform.',
          },
          {
            label: 'b',
            task: 'Sammenlign salmens funksjon da og nå.',
            solution: 'Før var salmer sentrale i hverdagen og markerte livets overganger. I dag synges de mest i kirken og ved høytider. Færre kan salmevers utenat, men salmer har fortsatt betydning ved bryllup, begravelser og høytider.',
          },
        ],
        solution: 'Salmetradisjonen viser hvordan litteratur og musikk kan forme folks liv og tro over generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    { id: 'norsk-vg2-2-6-ex-4', type: 'exercise', exercise: { id: 'norsk-vg2-2-6-ex-4', number: '4', type: 'multiple-choice', difficulty: 'lett', task: 'Hva het Kingos mest kjente salme?', options: ['Far, Verden, far vel', 'Sorrig og Glæde de vandre tilhobe', 'Herre Gud, ditt dyre navn og ære', 'Den store hvide Flok vi see'], answer: 1, solution: '"Sorrig og Glæde de vandre tilhobe" er Kingos mest kjente salme. Den handler om livets veksling mellom motsetninger og trøsten i det himmelske.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-6-ex-5', type: 'exercise', exercise: { id: 'norsk-vg2-2-6-ex-5', number: '5', type: 'multiple-choice', difficulty: 'lett', task: 'Hvilken stilling hadde Thomas Kingo i kirken?', options: ['Prest i København', 'Biskop i Odense', 'Kapellan i Bergen', 'Professor i teologi'], answer: 1, solution: 'Thomas Kingo ble utnevnt til biskop i Odense i 1677, en stilling han hadde til sin død i 1703.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-6-ex-6', type: 'exercise', exercise: { id: 'norsk-vg2-2-6-ex-6', number: '6', type: 'classic', difficulty: 'lett', task: 'Nevn tre kjennetegn ved Kingos salmer som gjør dem til eksempler på barokk diktning.', hints: ['Tenk på stil, motiver og oppbygning.'], solution: 'Tre kjennetegn: 1) Sterke kontraster mellom motsetninger (lys/mørke, glede/sorg). 2) Vanitas-motivet - det jordiske er forgjengelig. 3) Rikt bildespråk med levende metaforer fra natur og hverdag.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-6-ex-7', type: 'exercise', exercise: { id: 'norsk-vg2-2-6-ex-7', number: '7', type: 'classic', difficulty: 'lett', task: 'Les primærteksten "Sorrig og Glæde". List opp alle kontrastparene du finner i første strofe.', hints: ['Se på hvert verspar - hvilke motsetninger finner du?'], solution: 'Kontrastpar i første strofe: sorg/glede, lykke/ulykke, medgang/motgang, solskin/skyer. I tillegg kontrasten mellom "Jorderigs Guld" (jordisk rikdom) og "Himlen" (evig salighet). Disse kontrastene er typiske for barokken.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-6-ex-8', type: 'exercise', exercise: { id: 'norsk-vg2-2-6-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Les primærteksten "Som den gyldne Sol frembryder". Analyser hvordan Kingo bruker soloppgangen som religiøst symbol. Hva representerer solen, og hva representerer mørket?', hints: ['Tenk på "Som... Saa"-strukturen.', 'Hva betyr det at nåden "trænger ind i sjælen"?'], solution: 'Solen representerer Jesus/Guds nåde, mens mørket representerer synd, fortvilelse og uvitenhet. "Som... Saa"-strukturen viser en parallell mellom den fysiske soloppgangen og den åndelige opplevelsen av nåde. Slik kobles hverdagserfaring til trosopplevelse - en typisk Kingo-teknikk.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-6-ex-9', type: 'exercise', exercise: { id: 'norsk-vg2-2-6-ex-9', number: '9', type: 'classic', difficulty: 'vanskelig', task: 'Drøft hvorfor Kingos salmer har overlevd i over 300 år. Hva gjør dem tidløse? Sammenlign med moderne sangtekster du kjenner.', hints: ['Tenk på temaer, språklig kvalitet og musikalitet.', 'Hva har moderne popsanger og barokksalmer til felles?'], solution: 'Kingos salmer handler om universelle temaer: sorg, glede, dødsangst, håp. Dette treffer i alle tider. Språklig kvalitet og musikalitet gjør dem lette å huske og synge. Sammenlignet med moderne popsanger: Begge bruker kontraster, gjentakelse og sterke bilder. Forskjellen er det religiøse innholdet og det formelle versemålet.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-6-ex-10', type: 'exercise', exercise: { id: 'norsk-vg2-2-6-ex-10', number: '10', type: 'classic', difficulty: 'vanskelig', task: 'Analyser musikaliteten i "Sorrig og Glæde". Hvordan bidrar rim, rytme og lydlige virkemidler til salmens virkning?', hints: ['Les strofen høyt og lytt etter mønstrene.', 'Legg merke til rytmen i de fire lange linjene versus de to korte.'], solution: 'De fire lange linjene har et jevnt, vuggende versemål (daktyler/trokeer) som understreker temaet om veksling. De to korte linjene ("Jorderigs Guld / Er prægtig Muld") bryter rytmen og skaper en kontrast som understreker vanitas-budskapet. Enderimene (tilhobe/tilrobe, Rad/ad) binder versene sammen. Allitterasjoner som "Sorrig... Sol" gir lydlig sammenheng.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-6-ex-11', type: 'exercise', exercise: { id: 'norsk-vg2-2-6-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Skriv din egen morgensalme (8-12 linjer) inspirert av Kingo. Bruk en sammenligning fra naturen (som soloppgang, vår, blomster) som bilde på noe åndelig eller eksistensielt.', hints: ['Du trenger ikke bruke religiøst språk - velg et tema som er viktig for deg.', 'Bruk "Som... Slik"-strukturen for å koble naturbilde til budskap.'], solution: 'Et godt svar bruker en natursammenligning (f.eks. soloppgang = nytt håp, vår = ny start) og kobler det til et personlig eller eksistensielt tema. Rim og rytme bør støtte stemningen. Kontrastbruk mellom mørke/lys styrker uttrykket.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7: Opplysningstidens ideer
// ============================================================================

export const CHAPTER_NORSK_VG2_2_7: TextbookChapter = {
  id: 'norsk-vg2-2-7',
  courseId: 'norsk-vg2',
  chapterNumber: '2.7',
  title: 'Opplysningstidens ideer',
  description: 'Utforsk 1700-tallets tro på fornuft, vitenskap og fremskritt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
    'reflektere over sakprosatekster og gjøre rede for den retoriske situasjonen de er blitt til i',
  ],
  content: [
    {
      id: 'norsk-vg2-2-7-intro',
      type: 'text',
      content: `## Opplysningstiden - fornuftens tidsalder

Opplysningstiden (ca. 1700-1800) var en intellektuell bevegelse som satte fornuften i høysetet. Opplysningsfilosofene trodde at mennesket gjennom fornuft og vitenskap kunne opplyses, forbedres og frigjøres fra overtro, undertrykkelse og uvitenhet.

**Sentrale ideer**

*Fornuft:* Menneskets fornuft er veien til sannhet og fremskritt. Alt skal prøves mot fornuftens dom.

*Vitenskap:* Naturvitenskapelig metode - observasjon og eksperiment - gir sikker kunnskap.

*Fremskritt:* Menneskeheten kan forbedres gjennom utdanning og opplysning.

*Toleranse:* Religiøs toleranse og ytringsfrihet er nødvendig for fremskritt.

*Kritikk:* Autoriteter (kirke, konge, tradisjon) må tåle å bli kritisert og utfordret.

**Viktige tenkere**

- Voltaire (Frankrike) - kritikk av kirke og intoleranse
- Montesquieu - maktfordelingsprinsippet
- Rousseau - samfunnskontrakten, naturlig frihet
- Locke (England) - menneskerettigheter
- Kant (Tyskland) - "Sapere aude" (våg å bruke din forstand)

**Opplysningstiden i Danmark-Norge**

I Danmark-Norge ble opplysningsideer fremmet gjennom:
- Ludvig Holberg - forfatter og filosof
- Det Kongelige Danske Videnskabers Selskab (1742)
- Reformer i utdanning og lovgivning
- Aviser og tidsskrifter

Norge fikk sitt første universitet i 1811, delvis inspirert av opplysningstidens idealer.

**Fra barokk til opplysning**

Overgangen fra barokk til opplysningstid var en stor endring i europeisk tenkning. Mens barokken var preget av religiøs alvor, dødsbevissthet og følelsesmessig intensitet, satte opplysningstiden fornuft, vitenskap og optimisme i sentrum.

Barokkens kontraster mellom det jordiske og det himmelske ble erstattet av en tro på at det jordiske livet kunne forbedres. I stedet for å lengte etter himmelen, ville opplysningsfilosofene skape et bedre samfunn her og nå.

**Naturvitenskapens gjennombrudd**

Opplysningstiden bygget på naturvitenskapens store fremskritt:

- Isaac Newton (1642-1727) formulerte tyngdeloven og viste at naturen følger matematiske lover
- Galileo Galilei hadde vist at jorden kretser rundt solen
- William Harvey oppdaget blodets kretsløp

Disse oppdagelsene ga tro på at mennesket kunne forstå og mestre naturen gjennom fornuft og vitenskap. Hvis naturen fulgte lover, kunne kanskje også samfunnet organiseres etter fornuftige prinsipper.

**Opplysningstidens politiske ideer**

De politiske ideene fikk enorme konsekvenser:

*Maktfordeling:* Montesquieu mente makten måtte deles i lovgivende, utøvende og dømmende makt for å hindre maktmisbruk.

*Folkesuverenitet:* Rousseau hevdet at makten tilhører folket, ikke kongen.

*Menneskerettigheter:* Locke mente at alle mennesker har medfødte rettigheter til liv, frihet og eiendom.

Disse ideene inspirerte den amerikanske uavhengighetserklæringen (1776) og den franske revolusjonen (1789).`,
    },
    {
      id: 'norsk-vg2-2-7-def-1',
      type: 'definition',
      title: 'Opplysningstidens begreper',
      content: `**Opplysning (Enlightenment):** Intellektuell bevegelse som vektla fornuft, vitenskap og fremskritt.

**Rasjonalisme:** Filosofisk retning som setter fornuften som kilde til kunnskap.

**Empirisme:** Filosofisk retning som setter sanseerfaring som kilde til kunnskap.

**Deisme:** Tro på en gud som skapte verden, men som ikke griper inn - forenlig med fornuft.

**Toleranse:** Aksept av ulike meninger og trosretninger.

**Encyklopedien:** Det store franske oppslagsverket (1751-72) som samlet all kunnskap.

**Sapere aude:** "Våg å bruke din forstand" - Kants motto for opplysningstiden.

**Samfunnskontrakten:** Ideen om at staten bygger på en avtale mellom borgerne.

**Naturrett:** Tanken om at mennesker har medfødte rettigheter uavhengig av lover.`,
    },
    {
      id: 'norsk-vg2-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Kant om opplysning',
      problem: `Les dette utdraget fra Immanuel Kants essay "Hva er opplysning?" (1784):

"Opplysning er menneskets utgang fra sin selvforskyldte umyndighet. Umyndighet er manglende evne til å bruke sin forstand uten en annens ledelse. Selvforskyldt er denne umyndighet når årsaken ikke ligger i forstandens mangler, men i manglende besluttsomhet og mot til å bruke den uten en annens ledelse. Sapere aude! Ha mot til å bruke din egen forstand!"`,
      solution: `**Analyse:**

**Hovedbudskap:**
Opplysning handler om å frigjøre seg fra andres kontroll over ens tenkning. Mennesket må våge å tenke selv.

**"Selvforskyldt umyndighet":**
Kant mener vi selv er ansvarlige hvis vi lar andre tenke for oss. Det er ikke mangel på evne, men mangel på mot.

**"Sapere aude":**
Det latinske mottoet betyr "våg å vite" eller "våg å bruke din forstand". Det oppsummerer opplysningsprosjektet.

**Kritikk av autoriteter:**
Implisitt kritiserer Kant kirke og myndigheter som holder folk i uvitenhet.

**Relevans:**
Kants budskap er fortsatt aktuelt: Vi må tenke kritisk og ikke ukritisk akseptere det autoriteter forteller oss.`,
    },
    {
      id: 'norsk-vg2-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-7-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar opplysningstidens sentrale ideer.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva mente opplysningsfilosofene med "fornuft"?',
            solution: 'Fornuften er menneskets evne til å tenke kritisk og logisk. Alt - religion, politikk, tradisjon - skal prøves mot fornuftens dom.',
          },
          {
            label: 'b',
            task: 'Hva mente Kant med "selvforskyldt umyndighet"?',
            solution: 'Kant mente at hvis vi lar andre tenke for oss, er vi selv ansvarlige. Det er mangel på mot, ikke evne.',
          },
        ],
        solution: 'Opplysningstiden handlet om å frigjøre mennesket gjennom fornuft og kritisk tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    { id: 'norsk-vg2-2-7-ex-2', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-2', number: '2', type: 'multiple-choice', difficulty: 'lett', task: 'Hva betyr "Sapere aude"?', options: ['Grip dagen', 'Husk at du skal dø', 'Våg å bruke din forstand', 'Mennesket er alle tings mål'], answer: 2, solution: '"Sapere aude" er latin og betyr "Våg å vite" eller "Våg å bruke din forstand". Immanuel Kant brukte det som motto for hele opplysningstiden.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-7-ex-3', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-3', number: '3', type: 'multiple-choice', difficulty: 'lett', task: 'Hvem formulerte maktfordelingsprinsippet?', options: ['Voltaire', 'Rousseau', 'Montesquieu', 'Locke'], answer: 2, solution: 'Montesquieu formulerte ideen om at statsmakten bør deles i tre: lovgivende, utøvende og dømmende makt. Dette prinsippet er grunnleggende i de fleste demokratier i dag.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-7-ex-4', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-4', number: '4', type: 'classic', difficulty: 'lett', task: 'Nevn tre sentrale ideer i opplysningstiden og forklar kort hva de innebærer.', hints: ['Tenk på fornuft, vitenskap og politikk.'], solution: 'Tre sentrale ideer: 1) Fornuft: Alt skal vurderes kritisk og rasjonelt. 2) Toleranse: Ulike meninger og religioner skal aksepteres. 3) Menneskerettigheter: Alle har medfødte rettigheter uavhengig av stand eller herkomst.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-7-ex-5', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-5', number: '5', type: 'classic', difficulty: 'lett', task: 'Forklar forskjellen mellom rasjonalisme og empirisme.', hints: ['Det ene vektlegger tenkning, det andre sanseerfaring.'], solution: 'Rasjonalisme mener fornuften er den viktigste kilden til kunnskap - vi kan nå sannheten gjennom logisk tenkning. Empirisme mener sanseerfaring er grunnlaget for kunnskap - vi lærer av observasjon og eksperiment. I praksis trengte opplysningstiden begge: tenkning OG erfaring.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-7-ex-6', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-6', number: '6', type: 'classic', difficulty: 'medium', task: 'Forklar overgangen fra barokk til opplysningstid. Hva var de viktigste endringene i menneskesyn og verdensbilde?', hints: ['Tenk på forholdet mellom det jordiske og det himmelske.', 'Hva skjedde med synet på fornuft versus følelser?'], solution: 'Barokken var preget av religiøs alvor, dødsbevissthet og kontraster mellom det jordiske og det himmelske. Opplysningstiden satte fornuft og vitenskap i sentrum. Menneskesynet gikk fra å se mennesket som syndig og avhengig av Gud, til å se mennesket som fornuftig og i stand til å forbedre seg selv og samfunnet. Optimisme erstattet pessimisme.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-7-ex-7', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-7', number: '7', type: 'classic', difficulty: 'medium', task: 'Hvordan kom opplysningsideene til Danmark-Norge? Nevn tre konkrete eksempler.', hints: ['Tenk på personer, institusjoner og reformer.'], solution: 'Tre eksempler: 1) Ludvig Holberg spredte opplysningsideer gjennom sine komedier, essays og historiske verker. 2) Det Kongelige Danske Videnskabers Selskab (grunnlagt 1742) fremmet naturvitenskap og forskning. 3) Reformer i utdanning og lovgivning, inspirert av opplysningstenkning, forbedret folks vilkår gradvis.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-7-ex-8', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Forklar sammenhengen mellom naturvitenskapens fremskritt og opplysningsfilosofien.', hints: ['Hva lærte Newtons oppdagelser folk om hvordan verden henger sammen?'], solution: 'Newtons oppdagelse av at naturen følger matematiske lover inspirerte tanken om at også samfunnet kunne organiseres etter fornuftige prinsipper. Hvis mennesket kunne forstå naturen gjennom vitenskap, kunne det kanskje også forstå og forbedre samfunnet. Vitenskapens suksess ga tro på fornuftens kraft.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-7-ex-9', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-9', number: '9', type: 'classic', difficulty: 'vanskelig', task: 'Drøft: Er opplysningstidens ideer fortsatt relevante i dag? Velg to av ideene (f.eks. fornuft, toleranse, ytringsfrihet) og diskuter om de fortsatt er viktige og om de blir utfordret i vår tid.', hints: ['Tenk på aktuelle debatter om ytringsfrihet, vitenskap og demokrati.', 'Finnes det trusler mot opplysningsidealer i dag?'], solution: 'Et godt svar drøfter relevansen av f.eks. ytringsfrihet (utfordret av sensur og desinformasjon), fornuft (utfordret av konspirasjonsteorier og populisme), eller toleranse (utfordret av polarisering). Opplysningsidealer er grunnlaget for moderne demokratier, men tas ikke for gitt.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-7-ex-10', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-10', number: '10', type: 'classic', difficulty: 'vanskelig', task: 'Den franske Encyklopedien (1751-1772) er kalt opplysningstidens viktigste prosjekt. Forklar hva den var og hvorfor den var så viktig. Sammenlign med Wikipedia i dag.', hints: ['Tenk på tilgang til kunnskap, makt og kontroll.', 'Hvem bestemte hva som var sant?'], solution: 'Encyklopedien samlet all tilgjengelig kunnskap i ett verk, redigert av Diderot og d\'Alembert. Den var viktig fordi den gjorde kunnskap tilgjengelig for alle som kunne lese, ikke bare for eliten. Den utfordret kirkens kunnskapsmonopol. Wikipedia ligner ved at den demokratiserer kunnskap, men skiller seg ved at alle kan bidra (ikke bare eksperter), og at den er gratis og digital. Begge prosjektene bygger på opplysningsideen om at kunnskap bør være tilgjengelig for alle.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-7-ex-11', type: 'exercise', exercise: { id: 'norsk-vg2-2-7-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort tekst (150-200 ord) der du argumenterer for at en bestemt opplysningsidé er den viktigste for samfunnet i dag. Bruk saklig argumentasjon i opplysningstidens stil.', hints: ['Velg én idé: fornuft, toleranse, ytringsfrihet, menneskerettigheter eller maktfordeling.', 'Bruk klart språk og logiske argumenter.'], solution: 'Et godt svar velger én opplysningsidé og argumenterer saklig for dens viktighet. Teksten bør ha klar struktur med påstand, begrunnelse og eksempler. Stilen bør være preget av klarhet og logikk - i opplysningstidens ånd.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.8: Ludvig Holberg - forfatter og opplysningsmann
// ============================================================================

export const CHAPTER_NORSK_VG2_2_8: TextbookChapter = {
  id: 'norsk-vg2-2-8',
  courseId: 'norsk-vg2',
  chapterNumber: '2.8',
  title: 'Ludvig Holberg - forfatter og opplysningsmann',
  description: 'Lær om Ludvig Holberg og hans betydning for dansk-norsk litteratur og kultur.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
    'reflektere over sakprosatekster og gjøre rede for den retoriske situasjonen de er blitt til i',
  ],
  content: [
    {
      id: 'norsk-vg2-2-8-intro',
      type: 'text',
      content: `## Ludvig Holberg - den dansk-norske opplysningens far

Ludvig Holberg (1684-1754) var den viktigste forfatteren i Danmark-Norge på 1700-tallet. Født i Bergen, utdannet i København og Europa, ble han professor og senere baron. Hans komedier, essays og historiske verker gjorde ham til en sentral skikkelse i europeisk opplysningstid.

**Liv og bakgrunn**

Holberg ble født i Bergen i 1684, året før Dorothe Engelbretsdatter utga sin "Taare-Offer" (1685). Familien var borgerlig, og Holberg studerte teologi i København. Han reiste mye i Europa og ble påvirket av europeisk opplysningstenkning.

I 1717 ble han professor i København, først i metafysikk, senere i historie. Han ble adlet i 1747 med tittelen baron.

**Komediene**

Holberg skrev 33 komedier for det danske teater. De mest kjente er:
- "Jeppe på Bjerget" (1722)
- "Erasmus Montanus" (1723)
- "Den politiske Kandestøber" (1722)

Komediene satirierer dumhet, forfengelighet og overtro. De er inspirert av Molière, men med dansk-norsk setting og karakterer.

**Opplysningsprosjektet**

Holberg var mer enn underholder - han var opplysningsmann:
- Han skrev populærvitenskapelige verker
- Han kritiserte overtro og fordommer
- Han fremmet toleranse og fornuft
- Han gjorde lærdom tilgjengelig for flere

**Holbergs syn på mennesker**

Holberg hadde et realistisk syn på mennesker. Han trodde ikke alle kunne bli like kloke, men han mente at utdanning og opplysning kunne forbedre samfunnet. Han satiriserte både bondsk uvitenhet og akademisk pedanteri.

**Et mangfoldig forfatterskap**

Holbergs forfatterskap spenner over mange sjangre:

*Komedier:* 33 stykker for teateret, fra farser til karakterkomedier.

*Historiske verker:* "Danmarks Riges Historie", "Dannemarks og Norges Beskrivelse" - han ville gjøre historie tilgjengelig for vanlige lesere.

*Filosofiske essays:* "Moralske Tanker" (1744), "Epistler" (1748-1754) - korte tekster om etiske og samfunnsmessige spørsmål.

*Romaner:* "Niels Klims underjordiske Reise" (1741) - en satirisk fantastisk reiseroman, opprinnelig skrevet på latin.

*Dikt:* "Peder Paars" (1719-20) - et komisk heltedikt som parodierer antikke epos.

Denne bredden gjør Holberg enestående i dansk-norsk litteratur. Han mestret alle sjangre og brukte dem alle i opplysningens tjeneste.`,
    },
    {
      id: 'norsk-vg2-2-8-def-1',
      type: 'definition',
      title: 'Holbergs komedier - sjangertrekk',
      content: `**Komedie:** Dramatisk sjanger som bruker humor og satire til å kritisere og underholde.

**Satire:** Bruk av ironi, overdrivelse og humor for å kritisere samfunnsforhold.

**Type-karakterer:** Karakterer som representerer bestemte egenskaper (den dumme, den forfengelige, den pedantiske).

**Intrige:** Komplisert handling med forviklinger, ofte med forkleding og forveksling.

**Holbergs komiske virkemidler:**
- Dialektbruk for å karakterisere
- Overdrivelse og absurditeter
- Kontrast mellom pretensjoner og virkelighet
- Forviklinger og misforståelser

**Typiske temaer:**
- Kritikk av sosial klatring
- Satire over uvitenhet
- Kritikk av pedanteri
- Fornuft mot overtro`,
    },
    {
      id: 'norsk-vg2-2-8-example-1',
      type: 'example',
      title: 'Eksempel: Fra Erasmus Montanus',
      problem: `I "Erasmus Montanus" (1723) kommer studenten Rasmus Berg hjem til landsbyen etter studier i København. Han vil vise sin lærdom ved å bevise at jorden er rund:

ERASMUS: "Jeg vil bevise at Jorden er rund."
NILLE (Bøndene): "Det er løgn! Jorden er flat som en pandekage!"
ERASMUS: "Så må jeg bevise jer gal med filosofiske argumenter..."`,
      solution: `**Analyse:**

**Konflikten:**
Erasmus har lært filosofi og vitenskap i København. Bygdefolket holder fast ved gammel overtro. Men Holberg ler av begge sider.

**Dobbel satire:**

*Mot bøndene:*
Deres uvitenhet og motstand mot kunnskap er latterlig.

*Mot Erasmus:*
Hans pedanteri og mangel på praktisk klokskap er like latterlig. Han bruker sin lærdom til å vise seg, ikke til å hjelpe.

**Opplysningsbudskapet:**
Kunnskap er viktig, men må kombineres med sunn fornuft og ydmykhet. Pedanteri er like skadelig som uvitenhet.

**Holbergs balanse:**
Han kritiserer overtro uten å idealisere akademisk lærdom. Ekte opplysning krever mer enn boklig kunnskap.`,
    },
    {
      id: 'norsk-vg2-2-8-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ludvig Holberg – «Erasmus Montanus» (disputasscenen)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-2-8-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_HOLBERG_ERASMUS_DISPUTAS}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-8-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Holberg som opplysningsforfatter.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan bruker Holberg humor i opplysningens tjeneste?',
            solution: 'Holberg bruker satire for å kritisere uvitenhet og overtro. Ved å le av dumhet gjør han folk bevisste på sine egne fordommer.',
          },
          {
            label: 'b',
            task: 'Hvorfor satiriserer Holberg både bønder og akademikere i Erasmus Montanus?',
            solution: 'Holberg vil vise at både uvitenhet og pedanteri er problematiske. Ekte opplysning krever både kunnskap og praktisk klokskap.',
          },
        ],
        solution: 'Holberg brukte humor og satire for å fremme opplysningstidens idealer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    { id: 'norsk-vg2-2-8-ex-2', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-2', number: '2', type: 'multiple-choice', difficulty: 'lett', task: 'Hvor ble Ludvig Holberg født?', options: ['København', 'Odense', 'Bergen', 'Slangerup'], answer: 2, solution: 'Ludvig Holberg ble født i Bergen i 1684. Selv om han tilbrakte mesteparten av sitt voksne liv i København, regnes han som norskfødt.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-8-ex-3', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-3', number: '3', type: 'multiple-choice', difficulty: 'lett', task: 'Hva slags sjanger er "Erasmus Montanus"?', options: ['Tragedie', 'Roman', 'Komedie', 'Salme'], answer: 2, solution: '"Erasmus Montanus" (1723) er en komedie - et humoristisk skuespill som bruker satire for å kritisere uvitenhet og pedanteri.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-8-ex-4', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-4', number: '4', type: 'classic', difficulty: 'lett', task: 'Nevn tre av Holbergs mest kjente komedier og forklar kort hva de handler om.', hints: ['Tenk på Jeppe, Erasmus og Kandestøberen.'], solution: 'Tre komedier: 1) "Jeppe på Bjerget" (1722) - en bonde får oppleve å være baron og viser at makt korrumperer. 2) "Erasmus Montanus" (1723) - en student prøver å overbevise bøndene om at jorden er rund, men hans pedanteri ødelegger. 3) "Den politiske Kandestøber" (1722) - en håndverker vil blande seg i politikk uten kunnskap.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-8-ex-5', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-5', number: '5', type: 'classic', difficulty: 'lett', task: 'Forklar hva "dobbel satire" betyr hos Holberg.', hints: ['Hvem ler Holberg av i Erasmus Montanus?'], solution: 'Dobbel satire betyr at Holberg satiriserer begge sider av en konflikt. I Erasmus Montanus ler han både av bøndenes uvitenhet (de tror jorden er flat) og av Erasmus\' pedanteri (han bruker lærdom til å hovere, ikke til å opplyse). Ingen får enerett på å ha rett.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-8-ex-6', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-6', number: '6', type: 'classic', difficulty: 'medium', task: 'Les primærteksten fra Erasmus Montanus. Analyser disputasscenen: Hvem har rett, og hvem har "rett"?', hints: ['Tenk på forskjellen mellom å ha rett i sak og å oppføre seg rett.', 'Hva er Per Degns motargumenter?'], solution: 'Erasmus har rett i sak - jorden er rund. Men han har ikke "rett" i sosial forstand: hans nedlatende holdning og bruk av latin fjerner ham fra menneskene han burde opplyse. Per Degn er feil i sak, men representerer fellesskapets motstand mot en som håner dem. Holberg viser at kunnskap uten kommunikasjonsevne er verdiløs.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-8-ex-7', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-7', number: '7', type: 'classic', difficulty: 'medium', task: 'Holberg skrev i mange sjangre: komedier, essays, historie og roman. Hvorfor tror du han brukte så mange ulike sjangre?', hints: ['Tenk på hvem han ville nå med de ulike sjangrene.', 'Hvilke sjangre egner seg til å underholde, og hvilke til å opplyse?'], solution: 'Holberg brukte ulike sjangre for å nå ulike lesere. Komediene nådde teaterets publikum med underholdning og satire. Essayene ("Epistler") nådde den dannede middelklassen med refleksjon. Historiebøkene ga folk kunnskap om sin egen fortid. Romanen ("Niels Klim") kombinerte fantasi med samfunnskritikk. Slik spredte han opplysning i mange former.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-8-ex-8', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Sammenlign Holberg med en moderne komiker eller satiriker. Hva er likt og ulikt i måten de bruker humor til å kritisere?', hints: ['Tenk på stand-up, satireshows eller sosiale medier.'], solution: 'Likheter: Både Holberg og moderne satirikere bruker overdrivelse, ironi og typekarakterer for å kritisere samfunnet. Begge vil underholde og opplyse samtidig. Forskjeller: Holberg brukte teateret som medium, moderne satirikere bruker TV, podkast og sosiale medier. Holberg opererte under sensur og måtte være forsiktig, moderne satirikere har (ofte) ytringsfrihet. Holbergs satire var bredere og rammet hele samfunnsgrupper, mens moderne satire ofte er mer personrettet.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-8-ex-9', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-9', number: '9', type: 'classic', difficulty: 'vanskelig', task: 'Drøft denne påstanden: "Holberg er like mye norsk som dansk." Hva taler for og imot at Holberg tilhører norsk litteraturhistorie?', hints: ['Tenk på fødested, språk, arbeidsplass og tematikk.'], solution: 'For: Holberg ble født i Bergen og refererte til sine norske røtter. Norge og Danmark var ett rike. Holberg representerer hele det dansk-norske felleskapet. Mot: Han bodde og arbeidet i København, skrev på dansk, og hans komedier utspiller seg i dansk miljø. Konklusjon: Holberg tilhører begge landenes litteraturhistorie - han er et produkt av det dansk-norske felleskapet.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-8-ex-10', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-10', number: '10', type: 'classic', difficulty: 'vanskelig', task: 'Holberg sa: "Jeg skriver komedier for at korrigere laster gjennom latter." Diskuter om denne metoden fungerer. Kan humor endre folks holdninger? Gi eksempler fra Holbergs verk og fra vår tid.', hints: ['Tenk på hva som skjer når vi ler av oss selv.', 'Kan latter også gjøre at vi tar problemer mindre alvorlig?'], solution: 'Argumenter for: Latter gjør folk åpne for kritikk de ellers ville avvist. Holbergs komedier fikk folk til å gjenkjenne egne svakheter. I dag bruker satireshows humor til å avkle maktmisbruk. Argumenter mot: Latter kan bli bare underholdning uten endring. Noen kan le av andre uten å gjenkjenne seg selv. Holbergs stykker endret ikke nødvendigvis samfunnsstrukturer. Konklusjon: Humor er et kraftig virkemiddel, men virker best sammen med andre former for opplysning.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-8-ex-11', type: 'exercise', exercise: { id: 'norsk-vg2-2-8-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort komisk scene (10-15 replikker) inspirert av Holberg, der to personer diskuterer et moderne tema (f.eks. sosiale medier, influencere, dietter). Bruk dobbel satire og typekarakterer.', hints: ['Gi begge karakterene svakheter.', 'La ingen ha helt rett.'], solution: 'Et godt svar bruker Holbergs teknikker: typekarakterer med tydelige svakheter, dobbel satire der begge sider latterliggjøres, overdrivelse, og en konflikt som viser at sannheten ligger et sted midt imellom. Språket bør være levende og direkte, med replikker som avslører karakterenes tankegang.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.9: Holbergs komedier i dybden
// ============================================================================

export const CHAPTER_NORSK_VG2_2_9: TextbookChapter = {
  id: 'norsk-vg2-2-9',
  courseId: 'norsk-vg2',
  chapterNumber: '2.9',
  title: 'Holbergs komedier - fem mesterverk i dansk-norsk dramatikk',
  description: 'Utforsk Holbergs komedier i dybden: Jeppe pa Bjerget, Erasmus Montanus, Den politiske Kandestober, Den Stundeslose og Barselstuen. Med tekstutdrag, analyser av satiriske teknikker og samfunnskritikk.',
  estimatedMinutes: 120,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
    'utforske og reflektere over hvordan tekster fra romantikken og nasjonalromantikken framstiller menneske, natur og samfunn, og sammenligne med tekster fra nyere tid',
  ],
  content: [
    {
      id: 'norsk-vg2-2-9-intro',
      type: 'text',
      content: `## Holbergs komedier - mesterverker i dansk-norsk dramatikk

Ludvig Holbergs komedier horer til de fremste verkene i skandinavisk litteratur. Han skrev 33 komedier for Gronnegade Teatret i Kobenhavn mellom 1722 og 1754. To av disse utmerker seg som særlig viktige og mye spilte: "Jeppe på Bjerget" og "Erasmus Montanus".

**Komedien som sjanger**

For å forstå Holbergs komedier må vi kjenne til sjangeren. Komedien har aner tilbake til antikkens Hellas og Roma. Den kjennetegnes av:

- En konflikt som løses lykkelig (i motsetning til tragedien)
- Bruk av humor, ironi og satire
- Typekarakterer som representerer bestemte egenskaper
- Kritikk av samfunnsforhold gjennom latter
- Ofte forviklinger, forkleding og misforståelser

Holberg var sterkt påvirket av den franske komedieforfatteren Molière (1622-1673), men ga sine stykker en særegen dansk-norsk karakter. Han skrev på dansk og brukte figurer og miljøer fra dansk-norsk virkelighet.

**Teateret som opplysningsarena**

For Holberg var teateret ikke bare underholdning. Det var et middel til å opplyse og forbedre folket. Gjennom å le av dumhet, forfengelighet og overtro håpet han at publikum skulle bli klokere og mer selvkritiske.

"Jeg skriver komedier for at korrigere laster gjennom latter", sa Holberg. Dette er opplysningstidens prosjekt i praksis: Bruke kunst til å gjøre mennesker og samfunn bedre.

---

## Jeppe på Bjerget (1722)

**Handling**

Jeppe er en fattig bonde som plages av sin strenge kone Nille og sitt eget alkoholproblem. En dag finner baronen ham sovende og bestemmer seg for å spøke med ham. Jeppe blir brakt til baronens seng, kledd i fine klær og behandlet som en baron. Når han våkner, tror han han er baron og begynner å oppføre seg deretter - med katastrofale resultater.

**Komposisjon**

Stykket er bygget opp som et tankeeksperiment: Hva skjer når en bonde plutselig får makt? Holberg viser at Jeppe, som vi først synes synd på, blir en tyrann når han får muligheten. Han befaler henrettelser og oppfører seg verre enn baronen noensinne ville gjort.

**Sentrale temaer i Jeppe**

*Makt og avmakt:*
Jeppe er undertrykt av Nille og baronen, men når han selv får makt, misbruker han den umiddelbart. Holberg stiller spørsmålet: Er undertrykte mennesker nødvendigvis bedre enn undertrykkerne?

*Identitet:*
Jeppes forvirring når han våkner som baron ("Er det mig selv? Er det ikke mig selv?") berører filosofiske spørsmål om hva som gjør oss til den vi er.

*Sosial urettferdighet:*
Baronens spøk med Jeppe er grusomhet forkledd som moro. Overklassen leker med underklassens skjebne.

---

## Erasmus Montanus (1723)

**Handling**

Rasmus Berg, sønn av en bonde, har studert i København og vender hjem med det latinske navnet Erasmus Montanus. Han har lært filosofi og disputerkunst, og ønsker å imponere med sin lærdom. Men hans akademiske hovmod støter alle fra seg - foreldrene, kjæresten Lisbet og landsbyen. Han ender med å bli tvunget til å fornekte sin egen kunnskap for å bli akseptert.

**Komposisjon**

Stykket er en dobbel satire. På den ene siden ler vi av bondens uvitenhet og motstand mot kunnskap. På den annen side ler vi av Erasmus' pedanteri og mangel på praktisk klokskap.

**Sentrale temaer i Erasmus Montanus**

*Kunnskap vs. klokskap:*
Erasmus har kunnskap (jorden er rund), men mangler klokskap (evnen til å bruke kunnskapen konstruktivt).

*Kommunikasjon:*
Erasmus kan ikke kommunisere med vanlige folk. Hans latin og filosofi skaper avstand. Ekte opplysning krever at man møter folk der de er.

*Sannhet vs. fellesskap:*
Erasmus må velge mellom sannheten (jorden er rund) og fellesskapet (Lisbet og familien). Holberg stiller et ubehagelig spørsmål: Hva er viktigst?

**Stykkets løsning**

Erasmus ender med å bli tvunget til å erkjenne at "jorden er flat" for å få gifte seg med Lisbet. Hans ydmykelse er straffen for hovmod. Men er løsningen tilfredsstillende? Må sannheten ofres for sosial harmoni?

Holberg gir ikke et enkelt svar. Han viser kompleksiteten i opplysningsprosjektet: Kunnskap er viktig, men hvordan formidles den? Og hva gjør vi når sannhet og samhold står mot hverandre?`,
    },
    {
      id: 'norsk-vg2-2-9-def-1',
      type: 'definition',
      title: 'Dramatiske begreper i Holbergs komedier',
      content: `**Sentrale dramatiske begreper:**

**Monolog:** Tale der en karakter snakker alene på scenen, ofte for å avsløre tanker for publikum.

**Dialog:** Samtale mellom to eller flere karakterer.

**Replikk:** En karakters uttalelse i dialogen.

**Scene:** Del av en akt, ofte avgrenset ved at karakterer kommer eller går.

**Akt:** Større del av stykket, ofte fem i klassisk drama.

**Intrige:** Komplisert handlingsforløp med forviklinger.

**Peripeti:** Vendepunkt i handlingen.

**Anagnorisis:** Gjenkjennelse eller avsløring.

**Holbergs spesielle virkemidler:**

**Typekarakter:** Figur som representerer en egenskap (den dumme, den pedantiske).

**Dialektbruk:** Karakterisering gjennom talespråk.

**Situasjonskomikk:** Humor skapt av situasjoner.

**Verbal ironi:** Når noen sier det motsatte av det de mener.`,
    },
    {
      id: 'norsk-vg2-2-9-def-2',
      type: 'definition',
      title: 'Satire som virkemiddel',
      content: `**Satire:** Bruk av humor, ironi og overdrivelse for å kritisere.

**Satire hos Holberg:**

**Mål for satiren:**
- Uvitenhet og overtro
- Pedanteri og akademisk hovmod
- Sosial klatring og forfengelighet
- Maktmisbruk og undertrykkelse

**Satirens virkemidler:**
- *Overdrivelse:* Karakterer er ekstreme versjoner av menneskelige svakheter
- *Ironi:* Publikum forstår mer enn karakterene
- *Kontrast:* Mellom pretensjoner og virkelighet
- *Latterliggjøring:* Svakheter fremstilles komisk

**Satirens formål:**
- Underholde
- Opplyse
- Korrigere feil og laster
- Skape selvrefleksjon

**Holbergs balanse:**
Holberg satirierer alle sider - både bønders uvitenhet og akademikeres pedanteri. Dette gir satiren dybde og troverdighet.`,
    },
    {
      id: 'norsk-vg2-2-9-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av Jeppe og Erasmus',
      problem: `Sammenlign hovedpersonene i "Jeppe på Bjerget" og "Erasmus Montanus". Hva satirierer Holberg gjennom dem?`,
      solution: `**Sammenlignende analyse:**

**Jeppe på Bjerget:**

*Sosial posisjon:*
Jeppe er en fattig bonde, nederst på den sosiale rangstigen. Han er undertrykt av kona, baronen og samfunnet.

*Hva Holberg satirierer:*
- Bondens drikking og latskap
- Men også: Adelen som leker med folks liv
- Maktens vilkårlighet

*Jeppes forvandling:*
Når han får makt, blir han en tyrann. Dette viser at undertrykte kan bli undertrykkere.

**Erasmus Montanus:**

*Sosial posisjon:*
Erasmus er bondegutt som har steget sosialt gjennom utdanning. Han er mellom to verdener.

*Hva Holberg satirierer:*
- Akademisk pedanteri
- Men også: Bondesamfunnets motstand mot kunnskap
- Utdanningens fremmedgjøring

*Erasmus' fall:*
Han må fornekte sin kunnskap for å få sosial aksept. Dette er tragisk-komisk.

**Fellestrekk:**

Begge stykker handler om makt og avmakt, om hvem som bestemmer hva som er "sant" og "rett". Begge viser at mennesker har svakheter uavhengig av stand.

**Forskjeller:**

Jeppe vekker sympati tross sine feil - han er offer for et urettferdig system. Erasmus vekker irritasjon - han har muligheter men misbruker dem.

**Holbergs budskap:**

Verken uvitenhet eller pedanteri er veien til et godt samfunn. Opplysning må kombineres med ydmykhet og praktisk klokskap.`,
    },
    {
      id: 'norsk-vg2-2-9-tip-1',
      type: 'tip',
      title: 'Tips for å lese Holbergs komedier',
      content: `**Slik får du mest ut av Holberg:**

**1. Les høyt:**
Komedier er skrevet for fremførelse. Les replikkene høyt for å høre rytmen og humoren.

**2. Tenk på scenen:**
Forestill deg hvordan dette ville sett ut på teater. Hvor står karakterene? Hvordan beveger de seg?

**3. Identifiser typekarakterene:**
Hvem representerer dumhet? Pedanteri? Sunn fornuft?

**4. Let etter dobbelt satire:**
Holberg ler sjelden bare av én side. Hvem andre rammes?

**5. Finn samtidsrelevansen:**
Temaene er tidløse. Kjenner du igjen typene i dag?

**6. Vurder språket:**
Hvordan karakteriserer dialektene og talemåtene figurene?

**7. Diskuter løsningene:**
Er slutten tilfredsstillende? Hvem "vinner"? Er det rettferdig?

**8. Se stykket om mulig:**
Holberg spilles fortsatt. En forestilling gir ny forståelse.`,
    },
    {
      id: 'norsk-vg2-2-9-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ludvig Holberg – «Jeppe paa Bjerget» (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-2-9-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_HOLBERG_JEPPE}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-9-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Ludvig Holberg – «Erasmus Montanus» (Nille-scenen)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-2-9-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_HOLBERG_ERASMUS_NILLE}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-9-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser Jeppes monolog fra åpningsscenen.',
        subTasks: [
          {
            label: 'a',
            task: 'Les primærteksten fra Jeppe paa Bjerget. Hva lærer vi om Jeppes liv og situasjon?',
            solution: 'Vi lærer at Jeppe er bondesønn som har hatt mange yrker. Han slås av kona med pisken "Mester Erich". Han drikker for å tåle livet. Han føler seg maktesløs i sitt eget hjem.',
          },
          {
            label: 'b',
            task: 'Hvordan bruker Holberg språket for å karakterisere Jeppe?',
            solution: 'Jeppe snakker folkelig dansk med grove uttrykk og enkle setninger. Språket viser hans lave utdanning og bondebakgrunn. Det er også komisk gjennom overdrivelser.',
          },
          {
            label: 'c',
            task: 'Hvem har vi sympati med etter å ha lest monologen? Hvorfor?',
            solution: 'Vi har sympati med Jeppe fordi han fremstår som offer for et hardt liv. Han pryles av kona, har lite, og drikker fordi livet er tungt. Holberg skaper medfølelse før han viser Jeppes svakheter.',
          },
          {
            label: 'd',
            task: 'Hva satirierer Holberg i denne scenen?',
            solution: 'Holberg satirierer både Jeppes drikking og unnskyldninger, og det omvendte maktforholdet i ekteskapet. Han kritiserer også indirekte et samfunn der bønder har så harde liv at de tyr til drikk.',
          },
        ],
        solution: 'Åpningsmonologen etablerer Jeppe som en kompleks figur som vekker både latter og sympati.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-9-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser konflikten i Erasmus Montanus.',
        subTasks: [
          {
            label: 'a',
            task: 'Les primærteksten fra Erasmus Montanus (Nille-scenen). Hvem har rett i konflikten?',
            solution: 'Erasmus har objektivt rett - jorden er rund. Men han har "feil" i den sosiale situasjonen fordi han ikke klarer å kommunisere på en måte som overbeviser.',
          },
          {
            label: 'b',
            task: 'Hvorfor klarer ikke Erasmus å overbevise de andre?',
            solution: 'Erasmus er nedlatende og bruker abstrakte argumenter. Han vil "bevise gal" i stedet for å opplyse. Folk har ingen grunn til å lytte til en som håner dem.',
          },
          {
            label: 'c',
            task: 'Hva sier scenen om forholdet mellom kunnskap og makt?',
            solution: 'Kunnskap alene gir ikke makt. Per Degn og Nille har fellesskapets støtte og kan definere hva som er "sant" i landsbyen. Erasmus har rett, men står alene.',
          },
        ],
        solution: 'Konflikten mellom Erasmus og bygdefolket illustrerer opplysningstidens utfordringer med å spre kunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-9-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft Holbergs doble satire.',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva som menes med at Holberg driver "dobbel satire" i Erasmus Montanus.',
            solution: 'Holberg satirierer både Per Degns uvitenhet og Erasmus\' pedanteri. Han ler av begge sider i konflikten og viser at ingen har monopol på rett oppførsel.',
          },
          {
            label: 'b',
            task: 'Hvorfor er dobbel satire et effektivt virkemiddel?',
            solution: 'Dobbel satire gjør kritikken mer troverdig fordi den ikke er ensidig. Publikum tvinges til å tenke selv i stedet for bare å få pekt ut en "skurk".',
          },
          {
            label: 'c',
            task: 'Finn eksempler på dobbel satire i Jeppe på Bjerget.',
            solution: 'Holberg satirierer Jeppes drikking og latskap, men også adelens vilkårlige maktbruk og Nilles brutalitet. Alle har feil, selv om de har ulik grad av ansvar.',
          },
        ],
        solution: 'Holbergs doble satire gjør komediene mer komplekse og tankevekkende enn enkel moralisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    { id: 'norsk-vg2-2-9-ex-4', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-4', number: '4', type: 'multiple-choice', difficulty: 'lett', task: 'Hva heter Jeppes kone i "Jeppe på Bjerget"?', options: ['Lisbet', 'Nille', 'Magdelone', 'Pernille'], answer: 1, solution: 'Jeppes kone heter Nille. Hun styrer ham med pisken "Mester Erich" og representerer det omvendte maktforholdet i ekteskapet.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-9-ex-5', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-5', number: '5', type: 'multiple-choice', difficulty: 'lett', task: 'Hva skjer med Jeppe når han våkner i baronens seng?', options: ['Han rømmer', 'Han tror han er i himmelen og begynner å oppføre seg som baron', 'Han forstår at det er en spøk', 'Han ringer politiet'], answer: 1, solution: 'Jeppe tror først han er i himmelen, så at han er baron. Han begynner å kommandere tjenerne og misbruke makten. Holberg bruker dette til å vise at makt kan korrumpere alle.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-9-ex-6', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-6', number: '6', type: 'classic', difficulty: 'lett', task: 'Forklar Erasmus Montanus\' dilemma ved stykkets slutt.', hints: ['Han må velge mellom kunnskap og kjærlighet.'], solution: 'Erasmus må velge mellom sannheten (jorden er rund) og Lisbet (som han bare får gifte seg med hvis han sier jorden er flat). Han velger Lisbet og fornekter sin kunnskap. Dilemmaet viser konflikten mellom sannhet og sosial tilhørighet.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-9-ex-7', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-7', number: '7', type: 'classic', difficulty: 'lett', task: 'Hvem er "Mester Erich" i Jeppe på Bjerget?', hints: ['Det er ikke en person.'], solution: '"Mester Erich" er Nilles pisk - det redskapet hun slår Jeppe med. At pisken har fått et eget navn viser hvor sentral volden er i ekteskapet. Navnegivningen er også komisk og gjør pisken til en "karakter" i stykket.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-9-ex-8', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Sammenlign Jeppes identitetsforvirring ("Er det mig selv?") med moderne filosofiske spørsmål om identitet. Hva gjør oss til den vi er?', hints: ['Tenk på kropp, bevissthet, sosiale roller og omgivelser.', 'Hva skjer med din identitet når konteksten endres?'], solution: 'Jeppes forvirring berører dype spørsmål: Er identitet knyttet til kroppen, bevisstheten, sosiale roller eller omgivelsene? Moderne filosofi diskuterer dette fortsatt. I sosiale medier bytter vi mellom ulike "versjoner" av oss selv. Jeppes opplevelse ligner det: Når omgivelsene forandres, endres også selvbildet. Holberg var forut for sin tid i å stille slike spørsmål.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-9-ex-9', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-9', number: '9', type: 'classic', difficulty: 'vanskelig', task: 'Drøft: Er slutten på Erasmus Montanus rettferdig? Skriv en argumenterende tekst (150-200 ord) der du vurderer om det er rett at Erasmus tvinges til å fornekte sannheten.', hints: ['Vurder konsekvensene for Erasmus, for bygdefolket, og for ideen om sannhet.', 'Kan man forsvare at flertallet bestemmer hva som er sant?'], solution: 'Et godt svar drøfter begge sider: Det er urettferdig at Erasmus tvinges til å lyve. Sannheten bør ikke ofres for sosial harmoni. Men Erasmus har selv bidratt til konflikten gjennom hovmod. Slutten er ikke rettferdig, men den er realistisk - den viser at sannhet og makt ikke alltid følges ad. I dag ser vi lignende mekanismer når folk som sier upopulære sannheter (forskere, varslere) utsettes for press.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-9-ex-10', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-10', number: '10', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en scene i Holbergs stil (10-15 replikker) der to karakterer diskuterer et tema du velger selv. Bruk typekarakterer, overdrivelse og dobbel satire.', hints: ['La begge karakterene ha svakheter.', 'Velg et dagsaktuelt tema og gi det komisk behandling.'], solution: 'Et godt svar bruker Holbergs teknikker: typekarakterer (f.eks. en som vet alt om klima men ikke kildesorterer, og en som nekter all vitenskap), overdrivelse, dobbel satire der begge latterliggjøres, og en dialog som avslører begges svakheter gjennom egne replikker.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-9-ex-11', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Sammenlign Holbergs komedier med en moderne TV-serie eller film som bruker satire. Diskuter likheter og forskjeller i satirisk teknikk, og vurder om komedien fortsatt fungerer som samfunnskritikk.', hints: ['Tenk på serier som bruker humor til å kritisere (f.eks. satireshows, situasjonskomedier).', 'Hva er likt og ulikt i teknikk, medium og publikum?'], solution: 'Likheter: Typekarakterer, overdrivelse, ironi, dobbel satire. Begge former vil underholde og opplyse. Forskjeller: Holberg brukte teateret, moderne satire bruker TV/streaming. Holbergs karakterer er mer stiliserte "typer", moderne er mer psykologisk nyanserte. Holberg måtte omgå sensur, moderne satirikere har (ofte) ytringsfrihet. Begge former viser at komedie kan være effektiv samfunnskritikk - latter senker forsvaret og åpner for refleksjon.', allowsUpload: true, allowsCanvasDrawing: true } },
    {
      id: 'norsk-vg2-2-9-flere-komedier',
      type: 'text',
      content: `---

## Flere komedier av Holberg

Holberg skrev 33 komedier i alt. Vi har sett pa "Jeppe pa Bjerget" og "Erasmus Montanus", men flere av hans verk fortjener oppmerksomhet. Her presenterer vi tre til: "Den politiske Kandestober", "Den Stundeslose" og "Barselstuen".

---

## Den politiske Kandestober (1722)

**Handling**

Herman von Bremen er kandestober (en som lager tinnkanner) i Kobenhavn. I stedet for a passe sitt handverk, bruker han all sin tid pa a lese aviser og diskutere europeisk politikk. Han tror han forstar storpolitikk bedre enn konger og ministre, og forsommer arbeidet sitt fullstendig.

Borgerne i byen velger Hermann til borgermester som en spok - de vil vise ham at det er forskjell pa a snakke om politikk og a utove den. Hermann tar vervet alvorlig og skaper kaos med sine urealistiske reformer. Til slutt blir han avskjediget og ma innse sine begrensninger.

**Sentrale temaer**

*Halvdannelse:*
Hermann representerer den som vet litt om alt, men ikke nok til a handle klokt. Halv kunnskap er farligere enn ingen kunnskap.

*Ansvar og kompetanse:*
Holberg advarer mot at folk uttaler seg om ting de ikke forstar. Ikke alle meninger er like verdifulle.

*Demokratiets utfordringer:*
Stykket reiser sporsmalet: Bor alle ha innflytelse pa politikken? Holberg levde for demokratiets tid, men problemstillingen er aktuell i var egen tid med sosiale medier og "fake news".

---

## Den Stundeslose (1723)

**Handling**

Vielgeschrey (tysk for "mye skrik") er en kjopmann som alltid har det travelt. Han hopper fra oppgave til oppgave uten a fullforte noe. Han gir motstridende ordre til tjenerne, avbryter seg selv midt i setninger, og klager over all tiden han mangler - mens han kaster bort timer pa ineffektiv virksomhet.

Hans kone Pernille og tjener Oldfux forsoker a fa ham til a fokusere, men Vielgeschrey er uforbederlig. Stykket ender uten egentlig losning - Vielgeschrey er fortsatt like stundeslos.

**Sentrale temaer**

*Travelheten som sykdom:*
Holberg satirierer mennesker som forveksler aktivitet med produktivitet. A ha travelt kan bli en unnskyldning for a ikke utrette noe.

*Selvbedrag:*
Vielgeschrey tror han er viktig og effektiv. Komedie oppstar nar publikum ser gapet mellom hans selvbilde og realiteten.

*Tidlost tema:*
"Den Stundeslose" er kanskje Holbergs mest aktuelle komedie i dag. Multitasking, ADHD-kultur og "busy-ness" som statussymbol - alt dette forutsa Holberg.

---

## Barselstuen (1723)

**Handling**

Handlingen utspiller seg i en barselstue - et rom der kvinner samlet seg for a gratulere en nyfodt mor. I lopet av besokene avslores borgerskapets sladderkultur, misunnelse og hykleri.

Kvinnene diskuterer naboene, sprer rykter og baksnakker hverandre sa snart noen gar. Komedien har lite ytre handling; kraften ligger i dialogen som avslorer karakterenes natur.

**Sentrale temaer**

*Sladder og ryktespredning:*
Holberg viser hvordan halvsannheter og antydninger kan odelegge rykter og relasjoner.

*Kjonnsroller:*
Ved a sette handlingen i en feminin sfaere, viser Holberg at menneskelige svakheter (forfengelighet, misunnelse, ondskap) ikke er begrenset til menn. Kvinnene i stykket er like feilbarlige som mennene i andre komedier.

*Realisme:*
"Barselstuen" er uvanlig realistisk for Holberg. Det er lite forviklinger og overdrivelse - bare hverdagslig samtale som avslorer menneskers egentlige natur.`,
    },
    {
      id: 'norsk-vg2-2-9-primaertekst-kandestober',
      type: 'collapsible',
      title: 'Primaertekst: Ludvig Holberg - "Den politiske Kandestober" (utdrag)',
      buttonText: 'Vis primaertekst',
      content: [
        {
          id: 'norsk-vg2-2-9-primaertekst-kandestober-text',
          type: 'text',
          content: `${TEKST_VG2_HOLBERG_KANDESTOBER}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-9-primaertekst-stundeslose',
      type: 'collapsible',
      title: 'Primaertekst: Ludvig Holberg - "Den Stundeslose" (utdrag)',
      buttonText: 'Vis primaertekst',
      content: [
        {
          id: 'norsk-vg2-2-9-primaertekst-stundeslose-text',
          type: 'text',
          content: `${TEKST_VG2_HOLBERG_STUNDESLOSE}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-9-primaertekst-barselstuen',
      type: 'collapsible',
      title: 'Primaertekst: Ludvig Holberg - "Barselstuen" (utdrag)',
      buttonText: 'Vis primaertekst',
      content: [
        {
          id: 'norsk-vg2-2-9-primaertekst-barselstuen-text',
          type: 'text',
          content: `${TEKST_VG2_HOLBERG_BARSELSTUEN}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-9-dypere-analyse',
      type: 'text',
      content: `---

## Dypere analyse: Holbergs satiriske teknikker

Holberg var en mester i satire. Han brukte en rekke teknikker for a avslore menneskelige svakheter gjennom latter. Her skal vi se naermere pa de viktigste.

### Typekarakterer

Holbergs karakterer er ikke komplekse individer med rik psykologi. De er *typer* - forenklede utgaver av menneskelige trekk:

| Karakter | Type | Svakhet |
|----------|------|---------|
| Jeppe | Den undertrykte bonden | Drikking, latskap |
| Erasmus | Den pedantiske akademikeren | Hovmod, manglende folkeskikk |
| Hermann | Den halvdannede besserwisser | Overvurdering av egen kunnskap |
| Vielgeschrey | Den stresset travle | Ineffektivitet, selvbedrag |

Typekarakterene gjor det lett for publikum a gjenkjenne og le av svakhetene - uten a fole seg personlig angrepet.

### Overdrivelse (hyperbel)

Holberg forsterker svakhetene til det ekstreme:
- Jeppe er ikke bare fattig - han pryles daglig og har et alkoholproblem
- Erasmus sier ikke bare "jorden er rund" - han vil bevise at mora hans er en stein
- Hermann leser ikke bare aviser - han forsommer alt arbeid for a diskutere Europas skjebne

Overdrivelsen gjor det komisk, men ogsa tydelig hva som kritiseres.

### Dobbel satire

Holbergs mest sofistikerte teknikk er a satire begge sider i en konflikt:

*I Erasmus Montanus:*
- Bonden Per Degn er ignorant og maktsyk
- MEN Erasmus er arrogant og mangler folkevett

*I Jeppe pa Bjerget:*
- Jeppe er lat og drikker
- MEN baronen leker grusomt med hans liv

*I Den politiske Kandestober:*
- Hermann er en bedreviter
- MEN borgerne som velger ham, er ogsa dumme

Denne balansen gir satiren dybde og troverdighet. Holberg moraliserer ikke enkelt.

### Ironi og dramatisk ironi

Holberg bruker ironi pa flere nivaer:

*Verbal ironi:* Karakterer sier det motsatte av det de mener, ofte for a smigre eller kritisere indirekte.

*Dramatisk ironi:* Publikum vet mer enn karakterene. Nar Jeppe kommanderer tjenere i baronens seng, vet vi at det snart er slutt pa moroa. Denne ironien skaper bade humor og spenning.

### Situasjonskomikk

Mange av Holbergs morsomsete scener bygger pa situasjoner:
- Jeppe vakner som baron
- Tor kler seg som brud (i Trymskvida - Holberg kjente nordisk mytologi)
- Hermann blir valgt til borgermester for spok

Situasjonene er absurde, men avslorer sannheter om menneskelig natur.

---

## Karaktertyper i Holbergs komedier

Holberg hentet karaktertyper fra flere tradisjoner:

### Fra antikken og commedia dell'arte
- **Den gamle gnieren** (Pantalon)
- **Den listige tjeneren** (Arlecchino/Henrik)
- **Den naive unge elskeren**
- **Den strenge faren**

### Holbergs egne typer
- **Den norske/danske bonden** (Jeppe, Per Degn)
- **Den pedantiske akademikeren** (Erasmus, Rosiflengius)
- **Den halvdannede borgeren** (Hermann)
- **Den sladdrende borgerfrue** (kvinnene i Barselstuen)

### Funksjon i komedien
Typekarakterene gjor at handlingen kan drive raskt fremover. Vi trenger ikke lang eksposisjon - sa snart vi ser Hermann lese aviser i stedet for a arbeide, vet vi hvem han er.

---

## Samfunnskritikk i komediene

Holbergs komedier var ikke bare underholdning. De var verktoy for samfunnskritikk. Her er noen av hans malsettinger:

### Kritikk av standssamfunnet
- Jeppe viser at bonder er mennesker med folelser og drommer
- Baronens spok avslorer adelens vilkarlighet og grusomhet
- Erasmus viser at utdanning ikke automatisk gjor deg bedre

### Kritikk av uvitenhet og overtro
- Per Degn representerer kirkens motstand mot vitenskap
- Bondens tro pa at jorden er flat er komisk, men ogsa farlig
- Holberg vil at publikum skal tenke kritisk

### Kritikk av akademisk hovmod
- Erasmus er laerd, men mangler sunn fornuft
- Holberg advarer mot utdanning uten praktisk klokskap
- Vitskap ma kommuniseres forstaelig

### Kritikk av borgerskapets svakheter
- Forfengelighet og sosial klatring (Barselstuen)
- Halvdannelse og pretensjoner (Den politiske Kandestober)
- Stress og ineffektivitet (Den Stundeslose)

### Holbergs losning
Holberg var ikke revolusjonaer. Han ville reformere, ikke omstyrte. Hans ideal var:
- Fornuft kombinert med ydmykhet
- Utdanning kombinert med praktisk sans
- Kritisk tenkning uten arroganse
- Hver stand bor kjenne sin plass, men alle fortjener respekt`,
    },
    {
      id: 'norsk-vg2-2-9-def-3',
      type: 'definition',
      title: 'Holbergs karaktergalleri',
      content: `**Typiske Holberg-karakterer:**

**Pedanten:** Den laerde som mangler praktisk sans (Erasmus Montanus, Rosiflengius). Bruker latin og filosofi til a imponere, men fanger ingen.

**Den undertrykte:** Figurer nederst i hierarkiet som viser menneskelighet (Jeppe). Nar de far makt, misbruker de den ofte.

**Besserwisseren:** Den som tror han vet alt (Hermann von Bremen). Halvdannet og selvhoytidelig.

**Den travle:** Alltid opptatt, aldri produktiv (Vielgeschrey). Forveksler aktivitet med effektivitet.

**Den listige tjeneren:** Ofte smartere enn herren (Henrik, Oldfux). Representerer sunn fornuft.

**Sladderkjerringene:** Borgerfruer som sprer rykter (kvinnene i Barselstuen). Viser at sladder er universelt.

**Rasonoren:** Karakter som representerer Holbergs eget syn og kommenterer handlingen. Ofte en fornuftig nabo eller venn.`,
    },
    {
      id: 'norsk-vg2-2-9-example-2',
      type: 'example',
      title: 'Eksempel: Analyse av scene fra Den Stundeslose',
      problem: `Analyser scenen med Vielgeschrey og hans tjener Oldfux. Hvilke satiriske teknikker bruker Holberg?`,
      solution: `**Analyse av scenen:**

**Typekarakter:**
Vielgeschrey er typen "den travle som aldri far noe gjort". Navnet hans (tysk for "mye skrik") forteller oss alt vi trenger a vite.

**Overdrivelse:**
Holberg overdriver Vielgeschreys forvirring til det absurde: "Hent mig Bogen! Nei vent, hent mig Pennen forst! Nei, jeg maa have Papir." Han kan ikke fullfare en eneste setning.

**Dramatisk ironi:**
Publikum ser at Vielgeschrey kaster bort tiden pa a klage over tidsmangel. Oldfux paeker: "I har sagt det samme i tre Timer uden at goere noget." Dette er ironisk fordi Vielgeschrey selv ikke ser det.

**Kontrasterende karakterer:**
Oldfux representerer sunn fornuft. Hans noyktene kommentarer ("Jeg kan kun vaere eet Sted ad Gangen") setter Vielgeschreys galskap i relieff.

**Verbal komikk:**
Vielgeschreys avbrutte setninger og motstridende ordre skaper rytmisk komikk. Scenen kan spilles som en slags verbal dans der Oldfux aldri rekker a reagere.

**Samtidsrelevans:**
Holberg kritiserer en type menneske som fortsatt finnes: de som forveksler travel atferd med faktisk arbeid. I var tid med multitasking og konstant tilgjengelighet er "Den Stundeslose" kanskje mer aktuell enn noen gang.`,
    },
    { id: 'norsk-vg2-2-9-ex-12', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-12', number: '12', type: 'classic', difficulty: 'medium', task: 'Sammenlign "Den politiske Kandestober" og "Erasmus Montanus". Begge handler om folk som tror de vet mer enn de gjor. Hva er likt og ulikt?', subTasks: [ { label: 'a', task: 'Beskriv hovedpersonenes svakhet i hvert stykke.', solution: 'Hermann tror han forstar politikk bedre enn alle andre. Erasmus tror hans akademiske kunnskap gjor ham overlegent. Begge overvurderer sin egen innsikt.' }, { label: 'b', task: 'Hvordan behandler omgivelsene dem?', solution: 'Hermann velges til borgermester som en spok - folk vil se ham feile. Erasmus avvises av bygdefolket og ma fornekte sin kunnskap. Begge straffes for sin arroganse.' }, { label: 'c', task: 'Hva er Holbergs budskap i hvert stykke?', solution: 'I Kandestober: Halv kunnskap er farlig, og man bor holde seg til det man kan. I Erasmus: Kunnskap uten kommunikasjonsevne er verdilos. Begge handler om balansen mellom a vite og a vaere klok.' } ], solution: 'Begge komedier kritiserer uforsiktig omgang med kunnskap, men fra ulike vinkler.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-9-ex-13', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-13', number: '13', type: 'classic', difficulty: 'medium', task: 'Analyser scenen fra "Den Stundeslose" (primaerteksten). Hvordan viser Holberg Vielgeschreys karakter gjennom hans replikker?', subTasks: [ { label: 'a', task: 'Gi eksempler pa hvordan Vielgeschrey avbryter seg selv.', solution: 'Han sier "Hent mig Bogen! Nei vent, hent mig Pennen forst! Nei, jeg maa have Papir." Hver setning avbrytes av den neste. Han kan ikke holde en tanke ferdig.' }, { label: 'b', task: 'Hvordan reagerer Oldfux, og hva forteller det oss?', solution: 'Oldfux papeker noyktert at han bare kan vaere ett sted om gangen, og at Vielgeschrey har sagt det samme i tre timer. Oldfux representerer sunn fornuft og avslorer herrens galskap.' }, { label: 'c', task: 'Hva er komisk ved Vielgeschreys pastand om at han "har for travlt"?', solution: 'Ironien er at hans travle fremtoning hindrer ham i a gjore noe som helst. Han er ikke travel - han er ineffektiv. Publikum ser dette, men Vielgeschrey gjor det ikke.' } ], solution: 'Holberg bruker Vielgeschreys egne ord til a avsore hans selvbedrag.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-9-ex-14', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-14', number: '14', type: 'classic', difficulty: 'vanskelig', task: 'Drøft satire som virkemiddel i samfunnsdebatten. Bruk Holbergs komedier som eksempler, og diskuter om satire fortsatt er et effektivt verktoy for kritikk.', hints: ['Tenk pa hva satire kan oppna som direkte kritikk ikke kan.', 'Vurder ogsa farene ved satire - kan den misforstaas?', 'Sammenlign med moderne satirikere (stand-up, TV-show, sosiale medier).'], solution: 'Et godt svar diskuterer: 1) Satirens styrker: Latter senker forsvaret, gjor kritikk spiselig, nar bredt publikum, huskes bedre. 2) Satirens begrensninger: Kan avfeies som "bare humor", kan misforstaes, kan fornærme uten a overbevise. 3) Holbergs bruk: Dobbel satire gir balanse, typekarakterer gjor kritikken generell ikke personlig. 4) Moderne sammenligning: Satireshows, memes, stand-up bruker lignende teknikker. Forskjellen er hastighet og rekkevidde - sosiale medier sprer satire raskere, men ogsa mer overflatisk.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-9-ex-15', type: 'exercise', exercise: { id: 'norsk-vg2-2-9-ex-15', number: '15', type: 'classic', difficulty: 'vanskelig', task: 'Les utdraget fra "Barselstuen" og analyser hvordan Holberg fremstiller sladder. Er hans kritikk av kvinnene rettferdig, eller er den preget av tidens kjonnssyn?', subTasks: [ { label: 'a', task: 'Hvordan avslorer dialogen kvinnenes karakter?', solution: 'Kvinnene later som de er vennlige, men kommentarene deres er fulle av stikk og antydninger. Pernilles "Det var bare en Spog!" etter a ha antydet utroskap viser hykleriet.' }, { label: 'b', task: 'Hvorfor valgte Holberg a sette handlingen i en "kvinnelig" arena?', solution: 'Holberg ville vise at sladder er universelt, ikke kjonnsspesifikt. Ved a bruke barselstuen tar han et miljø publikum gjenkjenner. Men valget kan ogsa leses som at han plasserer svakheten hos kvinner.' }, { label: 'c', task: 'Er kritikken kjonnsnøytral eller kjønnet? Begrunn svaret.', solution: 'Argumenter for kjonnsnøytral: Holberg kritiserer samme svakheter (sladder, forfengelighet) hos menn i andre stykker. Argumenter for kjonnet: Ved a velge barselstuen som arena, knytter han sladder til kvinner. Sannsynligvis: Holberg var et barn av sin tid, men hans intensjon var a kritisere menneskelig svakhet generelt.' } ], solution: 'Holbergs kritikk av sladder er treffende, men settingen avslorer ogsa tidens kjonnssyn.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.10: Sakprosa i opplysningstiden
// ============================================================================

export const CHAPTER_NORSK_VG2_2_10: TextbookChapter = {
  id: 'norsk-vg2-2-10',
  courseId: 'norsk-vg2',
  chapterNumber: '2.10',
  title: 'Sakprosa i opplysningstiden',
  description: 'Utforsk opplysningstidens sakprosatradisjoner: essays, pamfletter og vitenskapelig skriving.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
    'reflektere over sakprosatekster og gjøre rede for den retoriske situasjonen de er blitt til i',
  ],
  content: [
    {
      id: 'norsk-vg2-2-10-intro',
      type: 'text',
      content: `## Sakprosa i opplysningstiden - fornuftens språk

Opplysningstiden (ca. 1700-1800) var sakprosaens gullalder. Aldri før hadde det blitt skrevet så mye om vitenskap, filosofi, politikk og samfunn for et allment publikum. Opplysningsforfatterne ønsket å spre kunnskap og fremme fornuftig tenkning, og sakprosaen ble deres viktigste verktøy.

**Bakgrunn for sakprosaens oppblomstring**

Flere faktorer bidro til sakprosaens vekst på 1700-tallet:

*Trykkekunstens utbredelse:*
Boktrykkerkunsten, oppfunnet på 1400-tallet, var nå vel etablert. Bøker og pamfletter kunne produseres i større opplag og til lavere pris enn før.

*Leseferdighet:*
Stadig flere kunne lese, ikke minst takket være reformasjonens vekt på bibellesning. Det vokste frem et lesende publikum utenfor universitetene og kirken.

*Kaffehus og salonger:*
Nye sosiale arenaer oppsto der mennesker møttes for å diskutere ideer. Aviser, tidsskrifter og pamfletter ble lest og debattert.

*Opplysningsprosjektet:*
Opplysningsfilosofene ønsket å frigjøre mennesker fra uvitenhet og overtro. Til dette trengte de et språk som kunne nå ut til mange - et klart, saklig og argumenterende språk.

**Sakprosasjangrene**

Opplysningstiden utviklet flere sakprosasjangre som fortsatt er sentrale:

**Essayet:**
Essayet er en personlig, resonerende tekst som utforsker et tema. Det ble popularisert av Michel de Montaigne (1533-1592), men fikk sin blomstringstid på 1700-tallet. Essayet kombinerer kunnskap med personlig refleksjon.

Holbergs "Epistler" (1748-1754) er et norsk-dansk eksempel: korte, elegante tekster om alt fra kvinners utdanning til overtro og moral.

**Pamfletten:**
Pamfletten er en kort, polemisk tekst som tar stilling i en aktuell debatt. Den brukes til å påvirke opinion og er ofte skrevet anonymt for å unngå straff.

**Den vitenskapelige avhandlingen:**
Naturvitenskapenes fremvekst krevde nye måter å skrive på: systematisk, etterprøvbar og objektiv. Den vitenskapelige artikkelen tok form.

**Encyklopedien:**
Det største sakprosaprosjektet var den franske Encyklopedien (1751-1772), redigert av Diderot og d'Alembert. Den samlet all menneskelig kunnskap i et verk og ble et symbol på opplysningsprosjektet.

**Holberg som sakprosaforfatter**

Ludvig Holberg skrev ikke bare komedier. Han var også en fremragende sakprosaforfatter:

*Historiske verker:*
"Danmarks Riges Historie" (1732-35), "Dannemarks og Norges Beskrivelse" (1729). Holberg ville gjøre historie tilgjengelig for vanlige lesere.

*Filosofiske essays:*
"Moralske Tanker" (1744), "Epistler" (1748-1754). Her drøfter Holberg etiske og samfunnsmessige spørsmål med humor og skarpsindighet.

*Niels Klims underjordiske Reise (1741):*
Denne romanen, opprinnelig skrevet på latin, er en satirisk fantastisk reise der Niels Klim oppdager samfunn under jorden som speiler og kritiserer europeiske forhold. Holberg bruker fiksjonen til å fremme opplysningsideer om toleranse, fornuft og likestilling.

**Retoriske trekk i opplysningsprosa**

Opplysningstidens sakprosa har kjennetegnende retoriske trekk:

*Klarhet og enkelhet:*
Målet var at alle skulle kunne forstå. Kompliserte tanker skulle formuleres klart. Latin ble erstattet av morsmålene.

*Argumentasjon:*
Påstander skulle begrunnes med logikk og erfaring, ikke med tradisjon eller autoritet alene.

*Ironi og satire:*
Mange opplysningsforfattere brukte humor for å kritisere overtro og dumhet. Voltaire og Holberg er mestere i satirisk sakprosa.

*Appellformer:*
Logos (fornuft) var viktigst, men etos (troverdighet) og patos (følelser) ble også brukt bevisst.

**Sakprosaens arv**

Opplysningstidens sakprosaidealer - klarhet, saklighet, argumentasjon - lever videre i dag. Avislederen, den akademiske artikkelen, det personlige essayet - alle har røtter i 1700-tallet.

Opplysningstiden lærte oss at språk er makt, og at klare tanker krever klart språk. Dette er fortsatt grunnleggende for sakprosaen.`,
    },
    {
      id: 'norsk-vg2-2-10-def-1',
      type: 'definition',
      title: 'Sakprosasjangre i opplysningstiden',
      content: `**Essay:** Personlig, resonerende tekst som utforsker et tema. Kombinerer kunnskap med refleksjon. Eksempel: Holbergs Epistler.

**Pamflett:** Kort, polemisk tekst i en aktuell debatt. Ofte anonym. Brukt til politisk agitasjon.

**Traktat:** Systematisk fremstilling av et emne. Mer formell enn essayet.

**Encyklopedi:** Oppslagsverk som samler kunnskap. Den franske Encyklopedien (1751-72) var opplysningens storprosjekt.

**Tidsskriftartikkel:** Tekster i periodiske publikasjoner for det lesende publikum.

**Brev (epistel):** Offentliggjorte brev som drøfter allmenne temaer. Holbergs Epistler er eksempel.

**Reisebeskrivelse:** Fortelling fra reiser som formidler kunnskap om andre land og folk.`,
    },
    {
      id: 'norsk-vg2-2-10-def-2',
      type: 'definition',
      title: 'Retoriske virkemidler i opplysningsprosa',
      content: `**Klarhet:** Enkel, forståelig fremstilling. Komplekse tanker i enkelt språk.

**Argumentasjon:** Systematisk bruk av begrunnelser. Påstander støttes av logikk og erfaring.

**Ironi:** Si det motsatte av det man mener for å kritisere.

**Satire:** Bruke humor til å kritisere laster og dumhet.

**Retoriske spørsmål:** Spørsmål som ikke forventer svar, men som aktiverer leseren.

**Eksempler:** Konkrete illustrasjoner som gjør abstrakte poenger forståelige.

**Appell til fornuften (logos):** Det viktigste virkemiddelet. Logisk argumentasjon.

**Kildekritikk:** Vurdere hvor informasjon kommer fra. Tidlig form for akademisk metode.`,
    },
    {
      id: 'norsk-vg2-2-10-example-1',
      type: 'example',
      title: 'Eksempel: Holbergs Epistel 347',
      problem: `Les dette utdraget fra Holbergs Epistel 347 om kvinners utdanning:

"At Qvindekiønnet har været og endnu er i saa ringe Anseelse hos alle Nationer, kommer ikke af Naturens Forskiel, men af Opdragelsen og Øvelsen. Erfarenheden viser, at Fruentimmer ere ligesaa beqvemme til Videnskaber som Mænd, ja i visse Ting endog beqvemmere.

Man lærer dem intet andet end at læse og skrive, at danse, at spille og at være artige... Men hvo har sagt, at de ikke ere ligesaa beqvemme til grundige Videnskaber?"

Analyser Holbergs argumentasjon.`,
      solution: `**Analyse av Holbergs tekst:**

**Tesen:**
Kvinner er like begavede som menn. Forskjellen skyldes oppdragelse, ikke natur.

**Argumentstrukturen:**

1. *Påstand:* Kvinner har lav anseelse
2. *Årsak:* Ikke naturen, men oppdragelsen
3. *Bevis:* Erfaring viser at kvinner kan lære
4. *Kritikk:* De læres bare "pynteting"
5. *Retorisk spørsmål:* Hvem har sagt de ikke kan mer?

**Retoriske virkemidler:**

*Erfaring som argument:* "Erfarenheden viser" - Holberg appellerer til det observerbare, ikke til autoritet.

*Kontrast:* Mellom hva kvinner læres (dans, musikk) og hva de kunne lære (vitenskap).

*Retorisk spørsmål:* "Men hvo har sagt...?" - Tvinger leseren til å tenke: Ja, hvem har egentlig sagt det?

*Mild ironi:* "at være artige" - Holberg antyder at dette er overfladisk.

**Opplysningsidealer:**
- Fornuften mot fordommer
- Erfaring fremfor tradisjon
- Kritikk av sosiale konvensjoner
- Tro på at mennesker kan forbedres gjennom utdanning

**Historisk kontekst:**
Dette var radikalt i 1750. Holberg argumenterer for kvinners likeverdighet i en tid der dette var kontroversielt. Han bruker saklige argumenter, ikke følelsesmessige appeller.`,
    },
    {
      id: 'norsk-vg2-2-10-tip-1',
      type: 'tip',
      title: 'Tips for analyse av sakprosatekster',
      content: `**Slik analyserer du sakprosa fra opplysningstiden:**

**1. Identifiser sjangeren:**
Er det essay, pamflett, brev? Sjangeren påvirker stil og formål.

**2. Finn hovedtesen:**
Hva er tekstens sentrale påstand? Ofte formulert i begynnelsen.

**3. Kartlegg argumentasjonen:**
- Hvilke argumenter brukes?
- Hvordan henger de sammen?
- Hva er premisser og konklusjoner?

**4. Se på retoriske virkemidler:**
- Appell til fornuft (logos)?
- Appell til følelser (patos)?
- Appell til troverdighet (etos)?
- Ironi, satire, retoriske spørsmål?

**5. Vurder språket:**
- Er det klart og forståelig?
- Hvem er målgruppen?
- Hvordan preger opplysningstiden stilen?

**6. Sett i kontekst:**
- Når ble teksten skrevet?
- Hvilken debatt deltar den i?
- Var synspunktene kontroversielle?

**7. Vurder relevans i dag:**
- Er argumentene fortsatt gyldige?
- Finnes det lignende debatter i dag?`,
    },
    {
      id: 'norsk-vg2-2-10-primaertekst-1',
      type: 'collapsible',
      title: 'Primærtekst: Ludvig Holberg – «Epistel 347» (om kvinners utdanning)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-2-10-primaertekst-1-text',
          type: 'text',
          content: `${TEKST_VG2_HOLBERG_EPISTEL_347}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-10-primaertekst-2',
      type: 'collapsible',
      title: 'Primærtekst: Ludvig Holberg – «Niels Klims underjordiske Reise» (utdrag)',
      buttonText: 'Vis primærtekst',
      content: [
        {
          id: 'norsk-vg2-2-10-primaertekst-2-text',
          type: 'text',
          content: `${TEKST_VG2_HOLBERG_NIELS_KLIM}`,
        },
      ],
    },
    {
      id: 'norsk-vg2-2-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-10-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser opplysningstidens sakprosa.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvorfor ble sakprosaen så viktig i opplysningstiden?',
            solution: 'Opplysningsfilosofene ville spre kunnskap og bekjempe overtro. De trengte et klart, saklig språk som kunne nå mange. Sakprosaen ble verktøyet for å opplyse folket.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner opplysningstidens sakprosastil?',
            solution: 'Klarhet og enkelhet, logisk argumentasjon, appell til fornuft og erfaring, bruk av ironi og satire, kritikk av tradisjon og autoritet.',
          },
          {
            label: 'c',
            task: 'Hvilke sakprosasjangre ble særlig viktige?',
            solution: 'Essayet, pamfletten, encyklopedien, tidsskriftartikkelen og brevet (epistelen). Disse nådde ut til det nye, lesende publikummet.',
          },
        ],
        solution: 'Opplysningstiden etablerte sakprosaidealer som fortsatt gjelder: klarhet, saklighet og argumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-10-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Arbeid med Holbergs Epistler.',
        subTasks: [
          {
            label: 'a',
            task: 'Les primærteksten fra Epistel 347. Hva er Holbergs hovedargument?',
            solution: 'Holberg argumenterer for at kvinner er like begavede som menn. Forskjellen skyldes oppdragelse, ikke natur. De får ikke sjansen til å vise hva de kan.',
          },
          {
            label: 'b',
            task: 'Hvilke retoriske virkemidler bruker Holberg?',
            solution: 'Appell til erfaring ("Erfarenheden viser"), retoriske spørsmål, kontrast mellom hva kvinner læres og kunne lære, mild ironi.',
          },
          {
            label: 'c',
            task: 'Var Holbergs synspunkter radikale for sin tid? Begrunn.',
            solution: 'Ja, i 1750 var likestilling kontroversielt. Holberg utfordret rådende oppfatninger om at kvinner var mindre begavede. Han brukte fornuft mot fordommer.',
          },
        ],
        solution: 'Holbergs epistler viser opplysningstidens sakprosa på sitt beste: klar, logisk og samfunnskritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    { id: 'norsk-vg2-2-10-ex-3', type: 'exercise', exercise: { id: 'norsk-vg2-2-10-ex-3', number: '3', type: 'multiple-choice', difficulty: 'lett', task: 'Hva er et essay?', options: ['Et kort dikt', 'En personlig, resonerende tekst som utforsker et tema', 'En vitenskapelig rapport', 'En nyhetsartikkel'], answer: 1, solution: 'Et essay er en personlig, resonerende tekst som utforsker et tema. Sjangeren kombinerer kunnskap med personlig refleksjon og ble svært viktig i opplysningstiden.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-10-ex-4', type: 'exercise', exercise: { id: 'norsk-vg2-2-10-ex-4', number: '4', type: 'multiple-choice', difficulty: 'lett', task: 'Hva var den franske Encyklopedien?', options: ['En roman av Voltaire', 'Et oppslagsverk som samlet all kunnskap', 'En salmesamling', 'En lovsamling'], answer: 1, solution: 'Den franske Encyklopedien (1751-1772), redigert av Diderot og d\'Alembert, samlet all tilgjengelig menneskelig kunnskap i ett stort oppslagsverk. Det var opplysningstidens mest ambisiøse prosjekt.', allowsUpload: false, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-10-ex-5', type: 'exercise', exercise: { id: 'norsk-vg2-2-10-ex-5', number: '5', type: 'classic', difficulty: 'lett', task: 'Nevn tre sakprosasjangre fra opplysningstiden og gi et eksempel på hver.', hints: ['Tenk på essay, encyklopedi og pamflett.'], solution: 'Tre sjangre: 1) Essay - Holbergs Epistler (personlig refleksjon over ulike temaer). 2) Encyklopedi - Diderot og d\'Alemberts store oppslagsverk (samlet all kunnskap). 3) Pamflett - anonyme skrifter som debatterte aktuelle spørsmål (f.eks. ytringsfrihet, religiøs toleranse).', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-10-ex-6', type: 'exercise', exercise: { id: 'norsk-vg2-2-10-ex-6', number: '6', type: 'classic', difficulty: 'lett', task: 'Forklar hva logos, patos og etos betyr som retoriske appellformer.', hints: ['Tenk på fornuft, følelser og troverdighet.'], solution: 'Logos er appell til fornuften - bruk av logiske argumenter og bevis. Patos er appell til følelsene - å vekke medfølelse, sinne eller glede. Etos er appell til troverdighet - at avsenderen fremstår som kunnskapsrik og pålitelig. Opplysningstiden vektla logos, men brukte også etos og patos.', allowsUpload: true, allowsCanvasDrawing: false } },
    { id: 'norsk-vg2-2-10-ex-7', type: 'exercise', exercise: { id: 'norsk-vg2-2-10-ex-7', number: '7', type: 'classic', difficulty: 'medium', task: 'Les primærteksten fra "Niels Klims underjordiske Reise". Hvordan bruker Holberg den fantastiske reisefortellingen til å kritisere europeiske forhold?', hints: ['Tenk på hva de underjordiske samfunnene representerer.', 'Hva sier de om europeisk kultur?'], solution: 'Holberg bruker de oppdiktede underjordiske samfunnene som et speil for Europa. Ved å beskrive fremmede kulturer med andre verdier og skikker kan han indirekte kritisere europeiske fordommer, kjønnsroller og maktstrukturer. Satiren er tryggere fordi den tilsynelatende handler om fiktive steder, men leseren forstår at det er Europa som kritiseres.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-10-ex-8', type: 'exercise', exercise: { id: 'norsk-vg2-2-10-ex-8', number: '8', type: 'classic', difficulty: 'medium', task: 'Sammenlign Holbergs argumentasjon i Epistel 347 med dagens debatter om likestilling. Hva er likt og ulikt?', hints: ['Tenk på argumenttyper, motargumenter og samfunnsendring.'], solution: 'Likt: Holbergs grunnargument (forskjellen skyldes oppdragelse, ikke natur) brukes fortsatt i dag. Bruk av forskning og erfaring som bevis er det samme. Ulikt: Holberg måtte argumentere for at kvinner i det hele tatt kunne lære. I dag handler debatten mer om strukturelle hindre. Holberg brukte en mild, overtalende tone fordi hans synspunkt var radikalt. I dag er likestilling bredt akseptert som ideal, men praksis er stadig debattert.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-10-ex-9', type: 'exercise', exercise: { id: 'norsk-vg2-2-10-ex-9', number: '9', type: 'classic', difficulty: 'vanskelig', task: 'Drøft påstanden: "Opplysningstidens sakprosaidealer er truet i vår tid." Skriv en kort argumenterende tekst (200-250 ord) der du diskuterer om klarhet, saklighet og fornuft fortsatt preger den offentlige debatten.', hints: ['Tenk på sosiale medier, falske nyheter og populisme.', 'Er det også motkrefter som forsvarer opplysningsidealer?'], solution: 'Et godt svar diskuterer trusler mot opplysningsidealene (desinformasjon, konspirasjonsteorier, ekkokamre, polarisering) og motkrefter (faktasjekking, utdanning, kritisk tenkning). Teksten bør ha klar struktur med påstand, argumenter og konklusjon. Holbergs vektlegging av klarhet og fornuft er fortsatt relevant som ideal, men utfordres av nye kommunikasjonsformer.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-10-ex-10', type: 'exercise', exercise: { id: 'norsk-vg2-2-10-ex-10', number: '10', type: 'classic', difficulty: 'vanskelig', task: 'Skriv et kort essay (ca. 200 ord) i opplysningstidens stil om et tema som engasjerer deg. Bruk klar argumentasjon, appell til fornuft og erfaring, og gjerne et retorisk spørsmål.', hints: ['Velg et aktuelt tema.', 'Bruk Holbergs Epistler som forbilde for stilen.'], solution: 'Et godt essay har: 1) Klar tese formulert tidlig. 2) Logiske argumenter støttet av erfaring eller eksempler. 3) Eventuelt et retorisk spørsmål som aktiverer leseren. 4) Klar og forståelig stil. 5) Gjerne en avslutning som trekker konklusjon. Opplysningstidens stil kjennetegnes av saklighet, men tillater personlig tone og mild humor.', allowsUpload: true, allowsCanvasDrawing: true } },
    { id: 'norsk-vg2-2-10-ex-11', type: 'exercise', exercise: { id: 'norsk-vg2-2-10-ex-11', number: '11', type: 'classic', difficulty: 'vanskelig', task: 'Sammenlign opplysningstidens sakprosa med dagens blogginnlegg og kronikker. Hva har endret seg, og hva har forblitt likt i måten vi argumenterer i offentligheten?', hints: ['Tenk på medium, publikum, stil og formål.', 'Er grunnprinsippene de samme?'], solution: 'Likt: Begge bruker argumentasjon for å overbevise, begge appellerer til fornuft og erfaring, begge deltar i offentlig debatt. Ulikt: Medium (papir/trykk vs. digital), tempo (uker/måneder vs. timer), lengde (ofte kortere i dag), interaktivitet (kommentarfelt), anonymitet (lettere i dag). Opplysningsidealer om klarhet og saklighet er fortsatt idealet for gode kronikker, men sosiale medier premierer ofte korte, følelsesladde uttrykk fremfor langsom argumentasjon.', allowsUpload: true, allowsCanvasDrawing: true } },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.11: Kvinnelige stemmer i litteraturhistorien
// ============================================================================

export const CHAPTER_NORSK_VG2_2_11: TextbookChapter = {
  id: 'norsk-vg2-2-11',
  courseId: 'norsk-vg2',
  chapterNumber: '2.11',
  title: 'Kvinnelige stemmer i litteraturhistorien',
  description: 'Utforsk de kvinnelige forfatterne fra 1500-1850: fra Dorothe Engelbretsdatter til Camilla Collett.',
  estimatedMinutes: 75,
  competenceGoals: [
    'lese og tolke tekster fra 1500 til 1850 i kulturhistorisk kontekst og drøfte hvordan de er relevante i dag',
  ],
  content: [
    {
      id: 'norsk-vg2-2-11-intro',
      type: 'text',
      content: `## Kvinnelige stemmer i litteraturhistorien (1500-1850)

I en tid da kvinner hadde begrensede muligheter til utdanning og offentlig deltakelse, fantes det likevel kvinner som grep pennen og skrev seg inn i litteraturhistorien. Deres stemmer gir oss et unikt innblikk i kvinners liv, tanker og kamper gjennom flere hundre ar.

**Hindringer og muligheter**

Kvinner i perioden 1500-1850 motte betydelige hindringer for litteraer virksomhet:
- Begrenset tilgang til formell utdanning
- Forventninger om at kvinner skulle vie seg til hjem og familie
- Mannlig dominans i det litteraere feltet
- Okonomisk avhengighet av menn
- Sosiale normer som begrenset kvinners offentlige rolle

Likevel fantes det apninger. Religioes diktning var en akseptert vei inn i litteraturen for kvinner, da from diktning ble sett som passende for det "svake kjonn". Adelige og velstaende kvinner hadde storre frihet og ressurser. Noen kvinner publiserte anonymt eller under pseudonym for a unnga kritikk.

**De viktigste kvinnelige forfatterne**

I dette kapittelet skal vi se naermere pa fire viktige kvinnelige forfattere:
- **Dorothe Engelbretsdatter** (1634-1716) - Nordens forste profesjonelle kvinnelige forfatter
- **Leonora Christina Ulfeldt** (1621-1698) - dansk adelsfruc som skrev en av Nordens forste selvbiografier
- **Magdalena Sophia Buchholm** (1758-1825) - tidlig norsk kvinnelig forfatter
- **Camilla Collett** (1813-1895) - overgangen til realismen og kvinnesaken

Disse kvinnene representerer ulike tider, sosiale lag og litteraere uttrykk, men de har det til felles at de trosset sin tids konvensjoner og lot sin stemme bli hort.`,
    },
    {
      id: 'norsk-vg2-2-11-def-1',
      type: 'definition',
      title: 'Kvinner og skriving 1500-1850',
      content: `**Sentrale begreper:**

**Anonymitet:** Mange kvinnelige forfattere publiserte uten navn for a beskytte seg mot kritikk og bevare sin "aerbarhet".

**Pseudonym:** Et oppdiktet forfatternavn. Kvinner brukte ofte mannlige pseudonymer for a bli tatt seriost.

**Religioes diktning:** Salmer, andaktslitteratur og religiose betraktninger - den mest aksepterte sjangeren for kvinner.

**Selvbiografi:** Personlig livsfortelling - en sjanger der kvinner kunne skrive om egne erfaringer.

**Brevlitteratur:** Brev var en privat sjanger der kvinner kunne uttrykke seg fritt.

**Salonger:** Private sammenkomster der kvinner kunne delta i intellektuelle diskusjoner.

**Kvinnelige forfatteres strategier:**
- Religiose emner ga legitimitet
- Adelig status ga storre frihet
- Anonymitet beskyttet mot kritikk
- Privat sirkulasjon for offentliggjoring
- Mannlige stottesspillere (fedre, ektemenn, forleggere)`,
    },
    {
      id: 'norsk-vg2-2-11-section-dorothe',
      type: 'text',
      content: `## Dorothe Engelbretsdatter - en pioner

Vi har allerede mott Dorothe Engelbretsdatter i kapittel 2.5, men her skal vi se naermere pa hvorfor hun var sa unik i sin tid og hvilken betydning hun hadde som kvinnelig forfatter.

**Hvorfor var Dorothe unik?**

Dorothe Engelbretsdatter (1634-1716) var ikke bare en dyktig dikter - hun var en profesjonell forfatter i en tid da dette var naermest uhort for kvinner:

1. **Kongelig pensjon:** Etter mannens dod i 1683 fikk hun kongelig pensjon for sin diktning - en offentlig anerkjennelse som var ekstremt uvanlig for en kvinne.

2. **Okonomisk selvstendighet:** Hun levde av sin penn, noe som gjorde henne til en av de forste profesjonelle forfatterne i Norden, uavhengig av kjonn.

3. **Enorm popularitet:** Hennes verker ble trykt i mange opplag og lest i norske hjem i over 100 ar - en kommersiell suksess.

4. **Offentlig stemme:** Hun skrev forord til sine boker der hun forsvarte kvinners rett til a skrive og uttrykke seg.

**Dorothes forsvar for kvinner**

I forordet til "Taare-Offer" (1685) forsvarer Dorothe sin rett til a skrive. Hun motter kritikere som mente at kvinner ikke burde publisere, med ydmykhet men ogsa med standhaftighet. Hun hevder at ogsa kvinner har sjel og andelige behov som kan uttrykkes gjennom diktning.

**Den personlige stemmen**

Det som gjor Dorothes diktning saerlig gripende, er den personlige stemmen. Hun skriver ut fra egne erfaringer - sorgen over syv dodsfall blant sine ni barn gjennomsyrer tekstene. Dette skiller henne fra mange mannlige samtidige som ofte skrev mer abstrakt og upersonlig.

**Sitat fra Dorothe:**
> "Naar jeg betaenker mine aarvaagne Naetter, mine Sukkende Tanker, mine graaefulde Oyne... da maa jeg sige: Ach! hvad er dog denne Verden!"

Denne kombinasjonen av personlig erfaring og religioes refleksjon gjorde at leserne - saerlig kvinner - kunne gjenkjenne seg selv i tekstene.`,
    },
    {
      id: 'norsk-vg2-2-11-section-leonora',
      type: 'text',
      content: `## Leonora Christina Ulfeldt og Jammersminde

Leonora Christina Ulfeldt (1621-1698) var en dansk adelsfruc som skrev en av de mest bemerkelsesverdig tekstene i nordisk litteratur: "Jammersminde" - en selvbiografisk skildring av hennes 22 ar i fengsel.

**Bakgrunn**

Leonora Christina var datter av Christian IV og hans hustru Kirsten Munk. Hun giftet seg med Corfitz Ulfeldt, en av Danmarks mektigste menn. Men Ulfeldts politiske intriger og pastaatte landsforraeeri forte til katastrofe. I 1663 ble Leonora Christina arrestert og fengslet i Blatarn i Kobenhavn, der hun satt i 22 ar.

**Jammersminde - en unik tekst**

"Jammersminde" (Jammers Minde = minnene om lidelsen) ble skrevet i fengsel, men ble forst utgitt i 1869. Teksten er bemerkelsesverdig av flere grunner:

1. **En av Nordens forste selvbiografier:** Leonora Christina skildrer sitt eget liv med psykologisk dybde og detaljrikdom.

2. **Kvinnelig perspektiv pa makt og fall:** Teksten gir et sjeldent innblikk i en kvinnes opplevelse av politisk forfolgelse.

3. **Litteraer kvalitet:** Sproget er levende og dramatisk, med scener som kunne vaert fra en moderne roman.

4. **Motstand og verdighet:** Gjennom alt bevarer Leonora Christina sin verdighet og nekter a la seg knekke.

**Utdrag fra Jammersminde:**

> "Den 8. August 1663 blev jeg fort til Blaatarn. Forvaltaren viste mig til et lidet Kammer, moerkt og fugtigt. 'Her skal I bo,' sagde han. Jeg svarede: 'Jeg takker Eder. Her kan jeg vaere alene med min Gud.'"

Dette korte utdraget viser Leonora Christinas karakter: hun motter motgangen med stoisk verdighet og finner styrke i troen.

**Temaer i Jammersminde:**
- Urettferdig forfolgelse og fangenskap
- Bevaring av verdighet under ydmykende forhold
- Troens betydning som trostekilde
- Kvinnelig styrke i en mannsdominert verden
- Kritikk av maktmisbruk`,
    },
    {
      id: 'norsk-vg2-2-11-example-leonora',
      type: 'example',
      title: 'Eksempel: Analyse av utdrag fra Jammersminde',
      problem: `Les dette utdraget fra Leonora Christina Ulfeldts "Jammersminde":

"Min Seng var af Halm, mit Taeppe et gammelt Klaedesstykke. Om Vinteren froes Vandet i min Skaal. Men jeg klagede ikke. Jeg vidste, at Gud provede min Taalmodighed, og jeg vilde vise, at jeg kunne baere min Skaebne med et staerkt Hjerte."`,
      solution: `**Analyse:**

**Skildringen av forholdene:**
Leonora Christina beskriver de fysiske lidelsene nakent og konkret: halmseng, tynt teppe, frossent vann. Hun bruker ikke overdrivelser eller selvmedlidenhet.

**Stoisk holdning:**
"Men jeg klagede ikke" - dette viser hennes stolthet og verdighet. Hun nekter a la fangevoktarne se henne svak.

**Religioes ramme:**
"Gud provede min Taalmodighed" - hun setter lidelsen inn i en meningsfull ramme. Dette er ikke meningslos smerte, men en guddommelig provelse.

**Selvbilde:**
"et staerkt Hjerte" - Leonora Christina presenterer seg selv som sterk og standhaftig, ikke som offer.

**Litteraer teknikk:**
- Korte, konsise setninger skaper dramatisk effekt
- Kontrasten mellom ytre elendighet og indre styrke
- Direkte, usentimentalt sprak

Utdraget viser hvordan Leonora Christina bruker selvbiografien til a konstruere et bilde av seg selv som modig og uboyd - kanskje som en respons pa dem som forsakte a ydmyke henne.`,
    },
    {
      id: 'norsk-vg2-2-11-section-buchholm',
      type: 'text',
      content: `## Magdalena Sophia Buchholm

Magdalena Sophia Buchholm (1758-1825) er mindre kjent enn Dorothe Engelbretsdatter, men representerer en viktig kontinuitet i norsk kvinnelig forfatterskap.

**Liv og bakgrunn**

Magdalena Sophia ble fodt i Christiania (Oslo) og levde hele sitt liv i Norge. Hun var datter av en velstaende borger og fikk god privatundervisning. Hun forble ugift hele livet og levde et tilbaketrukket liv viet til religiose studier og skriving.

**Religioes diktning**

Buchholms forfatterskap bestar hovedsakelig av religiose tekster:
- Salmer og andaktssanger
- Religiose betraktninger
- Oppbyggelig prosa

Hennes mest kjente verk er salmesamlingen "Aandelige Sange" som ble utgitt i flere opplag pa tidlig 1800-tall.

**Stil og tematikk**

Buchholms diktning er preget av:
- Dyp personlig fromhet
- Lengsel etter det evige
- Trast i troen
- Et enkelt, klart sprak

Hun star i tradisjonen etter Dorothe Engelbretsdatter, men hennes sprak er enklere og mindre barokt. Hun representerer overgangen fra barokkens ornamenterte stil til en mer pietistisk enkelhet.

**Eksempel fra Buchholm:**
> "O Gud, min Fader kaer,
> Tag mig i dine Haender!
> Til Dig mit Hjerte laender,
> Naar Verden mig ei baer."

**Betydning**

Buchholm er viktig fordi hun viser at tradisjonen med kvinnelig religioes diktning fortsatte utover 1700-tallet i Norge. Hun representerer en bro mellom barokkens store kvinnelige dikter (Dorothe Engelbretsdatter) og 1800-tallets nye kvinnelige roester.`,
    },
    {
      id: 'norsk-vg2-2-11-section-collett',
      type: 'text',
      content: `## Camilla Collett - overgangen til realismen

Camilla Collett (1813-1895) markerer et vendepunkt i norsk kvinnelig forfatterskap. Med henne beveger vi oss fra religioes diktning til samfunnskritisk prosa, fra barokk og opplysningstid til realismen.

**Liv og bakgrunn**

Camilla var datter av presten Nicolai Wergeland og soester til dikteren Henrik Wergeland. Hun vokste opp i et kulturelt stimulerende miljo og fikk uvanlig god utdanning for en kvinne pa den tiden.

I ungdommen hadde hun et ulykkelig kjaerlighetsforhold til Johan Sebastian Welhaven (Henrik Wergelands litteraere rival). I 1841 giftet hun seg med juristen og litteraturkritikeren Peter Jonas Collett. Etter hans dod i 1851 begynte hun sin litteraere karriere.

**Amtmandens Dotre (1854-55)**

Colletts hovedverk er romanen "Amtmandens Dotre", som regnes som Norges forste realistiske samtidsroman og et pionerverk for kvinnesaken.

**Handling:**
Romanen folger fire sostre i en embetsmannsfamilie. Hovedpersonen Sofie elsker Georg, men han gifter seg med en annen. Sofie ender i et forelskelseslos ekteskap og et liv preget av skuffelse.

**Tematikk:**
- Kritikk av ekteskapsinstitusjonen slik den praktiseres
- Kvinners mangel pa frihet til a velge ektefelle
- Forskjellen mellom romantisk ideal og kald virkelighet
- Kvinnelig oppofrelse og undertrykking
- Kritikk av borgerlig hykleri

**Stil:**
- Realistisk skildring av samtiden
- Psykologisk innsikt
- Ironi og samfunnskritikk
- Direkte henvendelse til leseren

**Sitat fra Amtmandens Dotre:**
> "Det er ikke Kjaerlighed der mangler hos os Kvinder, det er Frihed til at elske. Vi maa ikke elske den vi vil, vi maa elske den vi faar."

Dette sitatet oppsummerer romanens kjerne: kvinner har ikke frihet til a folge sitt hjerte, men ma underordne seg familiens og samfunnets forventninger.`,
    },
    {
      id: 'norsk-vg2-2-11-example-collett',
      type: 'example',
      title: 'Eksempel: Analyse av utdrag fra Amtmandens Dotre',
      problem: `Les dette utdraget fra Camilla Colletts "Amtmandens Dotre" (1854-55):

"Har De aldrig taenkt over, hvorledes Livet arter sig for os Kvinder? Vi opdrages til at elske, til at laengtes, til at haabe - og saa, naar vi har naatt den Alder, da vi skulde traede ind i Livet, saa finder vi, at der er ingen Plads for os. Vi maa vente, til en Mand finder os vaerdige til sin Opmaerksomhed. Vi maa tie, naar vort Hjerte taler. Vi maa smile, naar vi vil graede."`,
      solution: `**Analyse:**

**Retorisk henvendelse:**
"Har De aldrig taenkt over..." - Collett henvender seg direkte til leseren og inviterer til refleksjon. Dette er typisk for realistisk litteratur som vil skape samfunnsdebatt.

**Ironisk kontrast:**
Kvinner "opdrages til at elske" - men far ikke lov til a handle pa kjaerligheten. Denne ironien avslorer hykleriet i tidens oppdragelse av kvinner.

**Passivitet vs. aktivitet:**
"Vi maa vente" - kvinner er passive, menn aktive. Kvinner "maa tie" nar hjertet taler, "maa smile" nar de vil grate. Autentisitet forbys.

**Strukturell undertrykkelse:**
Collett viser at problemet ikke er enkeltstende menn, men hele samfunnsstrukturen som begrenser kvinner.

**Sprak:**
- Enkelt, direkte sprak
- Parallelle setningskonstruksjoner forsterker budskapet
- Flertallsformen "vi" skaper fellesskap mellom alle kvinner

**Sammenligning med tidligere forfattere:**
Der Dorothe Engelbretsdatter sokte trast i religionen og aksepterte sin skjebne, krever Collett forandring. Dette representerer et fundamentalt skifte i kvinnelig forfatterskap.`,
    },
    {
      id: 'norsk-vg2-2-11-section-oppsummering',
      type: 'text',
      content: `## Kvinner og skriving i perioden - en oppsummering

**Utviklingen fra 1500 til 1850**

Gjennom disse 350 arene ser vi en tydelig utvikling i kvinnelig forfatterskap:

**1600-tallet (Dorothe Engelbretsdatter, Leonora Christina):**
- Religioes diktning som legitim uttrykksform
- Personlige erfaringer (sorg, fangenskap) som inspirasjon
- Kvinner ma forsvare sin rett til a skrive
- Adel og prestestand dominerer

**1700-tallet (Buchholm):**
- Fortsatt religiost fokus
- Enklere stil, pietistisk innflytelse
- Storre anonymitet
- Begrenset offentlig synlighet

**1800-tallet (Collett):**
- Fra religion til samfunnskritikk
- Realistisk litteratur
- Apenlys kritikk av kvinners stilling
- Litteraturen som politisk redskap

**Religioes diktning som inngangsport**

Religioes diktning var den viktigste veien inn i litteraturen for kvinner fordi:
1. Det ble sett som aandelig og "passende" for kvinner
2. Kvinner kunne hevde guddommelig inspirasjon
3. Religiose temaer var aksepterte i hjemmet
4. Det fantes en tradisjon a folge (Maria, bibelske kvinner)

**Fra aksept til protest**

Den storste endringen fra Dorothe til Camilla er holdningen til kvinners situasjon:
- **Dorothe:** Aksepterer sin plass, soker trast i troen
- **Leonora Christina:** Bevarer verdighet, men aksepterer skjebnen
- **Collett:** Krever forandring, avslorer undertrykkelse

Denne utviklingen speiler samfunnsutviklingen: opplysningstidens ideer om frihet og likhet skapte grobunn for kvinnesaken pa 1800-tallet.

**Anonymitet og pseudonymer**

Mange kvinnelige forfattere i perioden valgte anonymitet:
- Beskyttelse mot kritikk og forakt
- Bevaring av "aerbarhet" og omdoemme
- Frykt for a bli sett som "ukvinnelig"
- Okonomiske hensyn (ektemenn og fedre)

Selv Camilla Collett utga "Amtmandens Dotre" anonymt forst.`,
    },
    {
      id: 'norsk-vg2-2-11-def-2',
      type: 'definition',
      title: 'Sammendrag: Fire kvinnelige forfattere',
      content: `**Dorothe Engelbretsdatter (1634-1716)**
- Nordens forste profesjonelle kvinnelige forfatter
- Religioes lyrikk i barokkstil
- "Sielens Sang-Offer" (1678), "Taare-Offer" (1685)
- Kongelig pensjon for diktningen
- Personlig sorgtematikk

**Leonora Christina Ulfeldt (1621-1698)**
- Dansk adelsfruc, datter av Christian IV
- "Jammersminde" - selvbiografi fra 22 ar i fengsel
- Utgitt forst 1869
- Stoisk verdighet i lidelsen

**Magdalena Sophia Buchholm (1758-1825)**
- Norsk religioes dikter
- "Aandelige Sange"
- Enklere, pietistisk stil
- Bro mellom barokk og 1800-tall

**Camilla Collett (1813-1895)**
- Norges forste kvinnelige romanforfatter
- "Amtmandens Dotre" (1854-55)
- Realistisk samfunnskritikk
- Kvinnesakspioner
- Overgang til realismen`,
    },
    {
      id: 'norsk-vg2-2-11-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser kvinnelige forfatteres vilkar i perioden 1500-1850.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke hindringer motte kvinner som ville skrive i denne perioden?',
            solution: 'Kvinner motte mange hindringer: begrenset tilgang til utdanning, forventninger om a vie seg til hjem og familie, mannlig dominans i det litteraere feltet, okonomisk avhengighet av menn, og sosiale normer som begrenset kvinners offentlige rolle.',
          },
          {
            label: 'b',
            task: 'Hvorfor var religioes diktning en sa viktig inngangsport for kvinnelige forfattere?',
            solution: 'Religioes diktning var akseptert fordi det ble sett som aandelig og passende for kvinner, kvinner kunne hevde guddommelig inspirasjon, religiose temaer var aksepterte i hjemmet, og det fantes en tradisjon a folge (Maria, bibelske kvinner).',
          },
          {
            label: 'c',
            task: 'Hvorfor valgte mange kvinnelige forfattere a publisere anonymt eller under pseudonym?',
            solution: 'Anonymitet ga beskyttelse mot kritikk og forakt, bevarte kvinnens "aerbarhet" og omdoemme, beskyttet mot a bli sett som "ukvinnelig", og kunne ha okonomiske grunner (hensynet til ektemenn og fedre).',
          },
        ],
        solution: 'Kvinner som ville skrive motte mange hindringer, men fant strategier for a fa sine stemmer hort - saerlig gjennom religioes diktning og anonymitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-11-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva heter Leonora Christina Ulfeldts selvbiografi?',
        options: [
          'Sielens Sang-Offer',
          'Jammersminde',
          'Amtmandens Dotre',
          'Taare-Offer',
        ],
        answer: 1,
        solution: '"Jammersminde" (Jammers Minde = minnene om lidelsen) er Leonora Christina Ulfeldts selvbiografiske skildring av sine 22 ar i fengsel i Blatarn i Kobenhavn.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-11-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken roman regnes som Norges forste realistiske samtidsroman?',
        options: [
          'Jammersminde',
          'Sielens Sang-Offer',
          'Amtmandens Dotre',
          'Aandelige Sange',
        ],
        answer: 2,
        solution: '"Amtmandens Dotre" av Camilla Collett (1854-55) regnes som Norges forste realistiske samtidsroman. Den kritiserer ekteskapsinstitusjonen og kvinners mangel pa frihet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-11-ex-4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hva som gjorde Dorothe Engelbretsdatter unik som kvinnelig forfatter i sin tid.',
        hints: ['Tenk pa okonomi, anerkjennelse og varighet.'],
        solution: 'Dorothe Engelbretsdatter var unik fordi hun var en profesjonell forfatter som levde av sin penn, hun fikk kongelig pensjon for diktningen (svært uvanlig for en kvinne), verkene hennes ble trykt i mange opplag og lest i over 100 ar, og hun forsvarte apent kvinners rett til a skrive.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'norsk-vg2-2-11-ex-5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Dorothe Engelbretsdatter og Camilla Collett. Hvordan er deres holdning til kvinners situasjon forskjellig?',
        hints: ['Tenk pa aksept vs. protest, og pa hvilke losninger de ser.'],
        solution: 'Dorothe Engelbretsdatter aksepterer i stor grad kvinners stilling og soker trast i religionen. Hennes sorg over tapte barn far et religiost uttrykk - hun lengter mot himmelen. Camilla Collett derimot krever forandring og avslorer undertrykkelsen av kvinner gjennom samfunnskritikk. Der Dorothe finner trast i troen, vil Collett endre samfunnet. Denne forskjellen speiler utviklingen fra barokkens aksept av skjebnen til opplysningstidens og realismens krav om forandring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-11-ex-6',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser utdraget fra Leonora Christina Ulfeldts "Jammersminde" (se eksempelet i kapittelet). Hvordan fremstiller hun seg selv i denne teksten?',
        hints: ['Se pa ordvalg, hva hun vektlegger, og hva hun utelater.'],
        solution: 'Leonora Christina fremstiller seg selv som sterk, standhaftig og verdig. Hun beskriver de fysiske lidelsene (halmseng, kulde) nakent og konkret, men understreker at hun ikke klagde. Hun setter lidelsen inn i en religioes ramme ("Gud provede min Taalmodighed") som gir mening til det meningslose. Hun presenterer seg med "et staerkt Hjerte" - som en som ikke lar seg knekke. Dette selvbildet kan leses som en bevisst strategi for a bevare verdigheten overfor dem som forsakte a ydmyke henne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-11-ex-7',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser utdraget fra Camilla Colletts "Amtmandens Dotre" (se eksempelet i kapittelet). Hvilke virkemidler bruker Collett for a overbevise leseren om at kvinners situasjon er urettferdig?',
        hints: ['Se pa retoriske virkemidler, ironi, kontraster og henvendelse til leseren.'],
        solution: 'Collett bruker flere virkemidler: 1) Direkte henvendelse til leseren ("Har De aldrig taenkt over...") som inviterer til refleksjon. 2) Ironisk kontrast mellom oppdragelsen (til a elske) og virkeligheten (a ikke fa elske). 3) Parallelle setningskonstruksjoner ("Vi maa vente... Vi maa tie... Vi maa smile") som forsterker folelsen av undertrykkelse. 4) Flertallsformen "vi" som skaper fellesskap mellom alle kvinner. 5) Kontraster mellom det kvinner foler og det de ma vise utad. Collett appellerer bade til leserens fornuft (logos) og folelser (patos) for a avslore urettferdigheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-vg2-2-11-ex-8',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-2-11-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Dreft: Er problemene Camilla Collett beskriver i "Amtmandens Dotre" fortsatt relevante i dag? Skriv en kort tekst (ca. 200 ord) der du sammenligner situasjonen da og na.',
        hints: ['Tenk pa forventninger til kvinner, frihet til a velge, og hva som har endret seg.', 'Er det ogsa likheter mellom da og na?'],
        solution: 'Et godt svar sammenligner Colletts samtid med i dag og viser bade hva som har endret seg og hva som eventuelt fortsatt er likt. Endringer: Kvinner i dag har formell likestilling, kan utdanne seg og velge yrke fritt, har okonomisk selvstendighet, og kan velge partner fritt. Likevel kan man draefte om det fortsatt finnes usynlige forventninger og press - for eksempel press om a kombinere karriere og familie, skjonnhetsidealer, eller om kvinner fortsatt "ma smile nar de vil grate" i arbeidslivet. Et godt svar nyanserer og viser refleksjonsevne, og bruker konkrete eksempler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const NORSK_VG2_CHAPTERS_DEL2: TextbookChapter[] = [
  CHAPTER_NORSK_VG2_2_1,
  CHAPTER_NORSK_VG2_2_2,
  CHAPTER_NORSK_VG2_2_3,
  CHAPTER_NORSK_VG2_2_4,
  CHAPTER_NORSK_VG2_2_5,
  CHAPTER_NORSK_VG2_2_6,
  CHAPTER_NORSK_VG2_2_7,
  CHAPTER_NORSK_VG2_2_8,
  CHAPTER_NORSK_VG2_2_9,
  CHAPTER_NORSK_VG2_2_10,
  CHAPTER_NORSK_VG2_2_11,
];
