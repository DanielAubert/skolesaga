/**
 * Norsk VG2 - Narrative versjoner Del 4 (Kapittel 4.1-4.5)
 * Tema: Sprakhistorie
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1 NARRATIV: Fra norront til moderne norsk
// ============================================================================

export const CHAPTER_NORSK_VG2_4_1_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-4-1-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '4.1',
  title: 'Fra norront til moderne norsk',
  subtitle: 'Narrativ versjon',
  description: 'Folg sprakets reise gjennom tusen ar - fra vikingenes tungemal til ordene du leser na.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke fagsprak til a beskrive saertrekk ved norsk sammenlignet med norront',
    'gjore rede for historisk bakgrunn for spraksituasjonen i Norge',
  ],
  linkedChapterId: 'norsk-vg2-4-1',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-4-1-n-intro',
      type: 'text',
      content: `## En reise gjennom tusen ar

Tenk deg at du kunne reise tilbake i tid. Tusen ar. Du lander pa et tun et sted pa Vestlandet. Rundt deg snakker folk. De ser ut som nordmenn, de oppforer seg som nordmenn, men du forstar ikke et ord av det de sier.

Dette er norront - spraket til vikingene, spraket sagaene ble skrevet pa. Det er ditt sprak, pa en mate. Alle ordene du bruker i dag stammer fra dette spraket. Men tusen ar med endringer har gjort det ugjenkjennelig.

Hvordan skjedde dette? Hvordan gikk vi fra "Madr var a Islandi, er Njall het" til "Det var en mann pa Island som het Njal"? Det er historien vi skal utforske na. En historie om pest og politikk, om konger og kjopmann, om et sprak som nesten forsvant - og sa kom tilbake i to ulike former.

Sprakhistorie handler ikke bare om ord og grammatikk. Den handler om makt og identitet, om hvem vi er og hvor vi kommer fra. Den forklarer hvorfor vi i dag har to skriftsprak, hvorfor dialektene vare er sa forskjellige, og hvorfor en islending kan lese tusen ar gamle tekster mens vi trenger oversettelse.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-4-1-n-section1',
      type: 'text',
      content: `## Periodene i norsk sprakhistorie

La oss forst fa oversikt. Norsk sprakhistorie deles inn i fem hovedperioder, og hver av dem har formet spraket vart pa grunnleggende mater.

Den forste perioden kaller vi urnordisk, og den strekker seg fra rundt ar 200 til ar 700. Dette er det eldste stadiet vi kjenner gjennom runeinnskrifter. Spraket var felles for hele Skandinavia, og det var sa ulikt moderne norsk at det nesten virker som et helt annet sprak.

Sa kommer norront, fra cirka 700 til 1350. Dette er vikingtiden og tidlig middelalder. Na ble sagaene og eddadiktene skrevet ned. Snorre Sturlason skrev sine kongesagaer, og Island ble et litteraert sentrum. Norront var et rikt og komplekst sprak med fire kasus og et verbsystem som ville fa enhver VG2-elev til a svettte.

Mellomnorsk er perioden fra cirka 1350 til 1525. Dette er tiden etter svartedauden, og spraket gjennomgar enorme endringer. Kasussystemet bryter sammen, endelser forsvinner, og dansk begynner a ta over som skriftsprak.

Dansketiden varer fra rundt 1525 til 1814 - nesten 300 ar der dansk er det eneste offisielle skriftspraket i Norge. Norsk lever videre som talesprak i dialektene, men det skrives ikke.

Moderne norsk begynner i 1814, da Norge blir selvstendig og kampen for et eget norsk skriftsprak starter. Denne perioden varer fortsatt - vi lever midt i norsk sprakhistorie.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'I hvilken periode ble sagaene og eddadiktene skrevet ned?',
        options: [
          { id: 'a', text: 'Norront (ca. 700-1350)', isCorrect: true },
          { id: 'b', text: 'Urnordisk (ca. 200-700)', isCorrect: false },
          { id: 'c', text: 'Mellomnorsk (ca. 1350-1525)', isCorrect: false },
          { id: 'd', text: 'Dansketiden (ca. 1525-1814)', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: 'Den norrone perioden (ca. 700-1350) var vikingtiden og tidlig middelalder. Det var na de store litteraere verkene ble skrevet - sagaene om konger og islendinger, eddadiktene om guder og helter. Island ble et litteraert sentrum i denne perioden.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-4-1-n-section2',
      type: 'text',
      content: `## Svartedauden - vendepunktet

Ar 1349. Et skip seiler inn til Bergen. Om bord er det sjuke sjomenn, og med dem kommer noe som skal forandre Norge for alltid: pesten. Svartedauden.

I lopet av to ar dor kanskje halvparten av Norges befolkning. Byer blir liggende ode. Garder star tomme. Hele bygder forsvinner. Og midt i denne katastrofen skjer noe med spraket.

For det forste dor mange av dem som kan skrive. Den utdannede overklassen, prestene og munkene som holdt skrivetradisjonen i live - de rammes hardt. Klosterene, som var sentre for laerdom og skriving, blir staende tomme.

For det andre endres maktbalansen. Norge, svekket av pesten, blir trukket tettere inn i unionen med Danmark. Danske embetsmenn kommer til Norge. Dansk blir sprak for administrasjon og kirke. Den norske skrivetradisjonen, som allerede var svekket, brytes helt.

Men det er mer enn politikk. Nar sa mange mennesker dor, nar samfunnsstrukturene bryter sammen, skjer det ogsa noe med sprakoverforingen. De gamle, kompliserte boyningsmonstrene blir ikke lenger overfort like noye fra generasjon til generasjon. Spraket forenkles. Kasusendelsene faller bort. Verbboyningen blir enklere.

Svartedauden var ikke den eneste arsaken til disse endringene - de var allerede i gang for pesten kom. Men den fremskyndet alt. Den skapte et brudd som fikk varige konsekvenser.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var en av de viktigste spraklige konsekvensene av svartedauden?',
        options: [
          { id: 'a', text: 'Norront ble innfort som offisielt skriftsprak', isCorrect: false },
          { id: 'b', text: 'Skrivetradisjonen ble brutt og dansk ble dominerende', isCorrect: true },
          { id: 'c', text: 'Dialektene forsvant helt', isCorrect: false },
          { id: 'd', text: 'Norge fikk to offisielle skriftsprak', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Svartedauden desimerte den utdannede overklassen som holdt skrivetradisjonen i live. Klosterene sto tomme, og i det maktvakuumet som oppsto, tok dansk over som skriftsprak. Den norske skrivetradisjonen ble brutt.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-4-1-n-section3',
      type: 'text',
      content: `## Fra fire kasus til en

En av de mest dramatiske endringene fra norront til moderne norsk er tapet av kasussystemet. La oss se naermere pa dette, for det forteller mye om hvordan sprak endrer seg.

I norront hadde substantivene fire kasus: nominativ, akkusativ, dativ og genitiv. Hver kasus hadde sin egen endelse, og endelsen fortalte hvilken funksjon ordet hadde i setningen.

Ta ordet "madr" (mann). Pa norront het det:
- madr i nominativ - nar mannen var subjekt
- mann i akkusativ - nar mannen var direkte objekt
- manni i dativ - nar mannen var indirekte objekt
- manns i genitiv - nar noe tilhorte mannen

Dette betydde at ordrekkefølgen var ganske fri. Du kunne si "Madr gaf manni bok" (Mannen ga mannen en bok), og endelsene fortalte deg hvem som ga og hvem som mottok.

I moderne norsk har vi mistet alt dette. Vi sier bare "mannen" uansett funksjon. I stedet bruker vi ordrekkefølge og preposisjoner for a vise det samme: "Mannen ga boka til mannen."

Men sporene finnes fortsatt! Nar du sier "jeg" og "meg", "han" og "ham", bruker du faktisk rester av kasussystemet. "Jeg" er nominativ, "meg" er akkusativ/dativ. Sa helt borte er det ikke.

Island har forresten bevart hele kasussystemet. En islending i dag boyer fortsatt substantiv i fire kasus, akkurat som vikingene gjorde. Det er derfor islendinger kan lese sagaene i original uten oversettelse - de bruker fortsatt nesten samme grammatikk.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-4-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hvor finner vi spor av det gamle kasussystemet i moderne norsk?',
        options: [
          { id: 'a', text: 'I boyningen av substantiv (hus-huset-hus-husene)', isCorrect: false },
          { id: 'b', text: 'I verbboyningen (a ga - gar - gikk)', isCorrect: false },
          { id: 'c', text: 'Kasussystemet er helt borte fra moderne norsk', isCorrect: false },
          { id: 'd', text: 'I pronomen som "jeg/meg", "han/ham"', isCorrect: true },
        ],
        correctAnswer: 'd',
        solution: 'Pronomenene vare viser fortsatt spor av kasussystemet. "Jeg" og "meg", "du" og "deg", "han" og "ham" - dette er nominativ og akkusativ/dativ-former som har overlevd fra norront. Substantivene har derimot mistet kasusendelsene.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-4-1-n-section4',
      type: 'text',
      content: `## Lavtysk - handelens sprak

Mens svartedauden herjet, skjedde det ogsa noe annet viktig: Hansaforbundet dominerte handelen i Nordsjoomradet. Tyske kjopmann etablerte seg i norske byer, saerlig i Bergen pa Bryggen, og med dem kom lavtysk.

Lavtysk var handelens sprak. Skulle du kjope og selge, matte du snakke med hanseatene. Og nar folk handler, utveksler de ikke bare varer - de utveksler ogsa ord.

Resultatet var en massiv innstrømning av lavtyske lanord i norsk. Ord vi bruker hver dag uten a tenke over det: betale, handel, plass, flink, snekker, bukse, arbeid, bli. Listen er nesten uendelig.

Tenk pa det: "Jeg skal betale for denne buksa" - bade "betale" og "bukse" er lavtyske lanord. "Han er flink pa jobben sin" - "flink" er lavtysk. Hele vart ordforrad for handel, handverk og dagligliv er gjennomsyret av lavtysk pavirkning.

Noen har regnet med at omtrent en fjerdedel av ordforradet i moderne norsk stammer fra lavtysk. Det er en enorm pavirkning - storre enn fra noe annet sprak, bortsett fra det som egentlig er norsk fra for.

Interessant nok var denne pavirkningen sterkere pa norsk enn pa islandsk. Island la langt fra handelsfatene, sa de fikk ikke samme lavtyske flom. Det er en av grunnene til at islandsk i dag har et ordforrad som ligger naermere norront, mens norsk har et ordforrad som er mer "kontinentalt".`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-4-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor fikk lavtysk sa stor innflytelse pa norsk i middelalderen?',
        options: [
          { id: 'a', text: 'Fordi Norge var i krig med Tyskland', isCorrect: false },
          { id: 'b', text: 'Fordi Hansaforbundet dominerte handelen og tyske kjopmann etablerte seg i Norge', isCorrect: true },
          { id: 'c', text: 'Fordi kongen var tysk', isCorrect: false },
          { id: 'd', text: 'Fordi lavtysk var kirkens sprak', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Hansaforbundet dominerte handelen i Nordsjoomradet, og tyske kjopmann var sterkt til stede i norske byer, saerlig i Bergen. Lavtysk var handelens sprak, og gjennom daglig kontakt i handel og handverk kom tusenvis av lavtyske ord inn i norsk.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-4-1-n-section5',
      type: 'text',
      content: `## Islandsk - spraket som stoppet opp

For a forstå hvor mye norsk har endret seg, kan vi sammenligne med islandsk. De to sprakene stammer begge fra norront - vikinger fra Norge koloniserte Island pa 800-900-tallet og tok med seg spraket sitt. Men sa utviklet de seg i helt ulike retninger.

Island var isolert. Oen la langt fra kontinentet, langt fra handelsfaatene, langt fra de politiske omveltningene som preget Norge. Og Island hadde en ubrutt skrifttradisjon - sagaene ble kopiert og lest kontinuerlig gjennom hele middelalderen.

Resultatet er at islandsk har bevart utrolig mye av det gamle norrone spraket. De har fortsatt fire kasus. De boyer fortsatt verb etter person og tall. De har et ordforrad som ligger naert det norrone - der vi sier "vindu" (egentlig et norront ord, vindauga, "vindoye"), sier de fortsatt "gluggi" (den opprinnelige norrone betegnelsen for en apning i veggen).

En islending i dag kan faktisk lese sagaene i original. Ikke uten litt ovelse, men det er omtrent som for deg a lese tekster fra 1700-tallet - litt fremmed, men forstaelig. For oss nordmenn er sagaene derimot sa uforstaelige at vi trenger full oversettelse.

Dette viser noe viktig om sprakendring: Sprak endrer seg ikke av seg selv, de endres av historiske omstendigheter. Norge var i union, var utsatt for pavirkning, mistet sin skrifttradisjon. Island var isolert og bevarte sin. Spraket fulgte historien.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-4-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvorfor har islandsk bevart mer av det norrone spraket enn norsk?',
        options: [
          { id: 'a', text: 'Fordi Island var isolert og hadde en ubrutt skrifttradisjon', isCorrect: true },
          { id: 'b', text: 'Fordi islendingene bestemte seg for a ikke endre spraket', isCorrect: false },
          { id: 'c', text: 'Fordi islandsk alltid har vaert et eget sprak', isCorrect: false },
          { id: 'd', text: 'Fordi Norge forbod bruk av norront', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: 'Island var geografisk isolert fra kontinentet, langt fra handelsfater og politiske omveltninger. De hadde ogsa en ubrutt skrifttradisjon der sagaene ble kopiert og lest kontinuerlig. Norge var derimot i union med Danmark, mistet sin skrifttradisjon, og var sterkt pavirket av lavtysk og dansk.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering: Fra norront til moderne norsk

Du har na fulgt norsk sprak gjennom tusen ar med endringer. Her er de viktigste punktene:

**De fem periodene:**
Urnordisk (ca. 200-700), norront (ca. 700-1350), mellomnorsk (ca. 1350-1525), dansketiden (ca. 1525-1814) og moderne norsk (fra 1814). Hver periode har satt sitt preg pa spraket vart.

**Svartedauden som vendepunkt:**
Pesten desimerte den utdannede overklassen, brot skrivetradisjonen, og apnet for dansk dominans. Sprakendringer som allerede var i gang, ble fremskyndet dramatisk.

**Kasussystemet forsvant:**
Norront hadde fire kasus (nominativ, akkusativ, dativ, genitiv). Moderne norsk bruker ordrekkefolge og preposisjoner i stedet. Spor finnes fortsatt i pronomen (jeg/meg, han/ham).

**Lavtysk pavirkning:**
Hansaforbundets dominans i handelen forte til massiv innstromning av lavtyske ord: betale, handel, plass, flink, snekker, bukse, arbeid og mange flere.

**Islandsk som kontrast:**
Island bevarte norront fordi oen var isolert og hadde ubrutt skrifttradisjon. En islending kan fortsatt lese sagaene i original - det kan ikke vi.

**Hovedinnsikt:**
Sprak endrer seg ikke tilfeldig, men folger historiske omstendigheter. Politiske unioner, pest, handel og kontakt med andre sprak har alle formet det norske spraket vi bruker i dag.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2 NARRATIV: Dansk-norsk og fornorskning
// ============================================================================

export const CHAPTER_NORSK_VG2_4_2_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-4-2-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '4.2',
  title: 'Dansk-norsk og fornorskning',
  subtitle: 'Narrativ versjon',
  description: 'Historien om 400 ars danskestyre og kampen for a gjenvinne et norsk skriftsprak.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for historisk bakgrunn for spraksituasjonen i Norge',
    'bruke fagsprak til a beskrive saertrekk ved norsk sammenlignet med dansk',
  ],
  linkedChapterId: 'norsk-vg2-4-2',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-4-2-n-intro',
      type: 'text',
      content: `## 400 ar uten eget skriftsprak

Forestill deg at du er en norsk bonde pa 1700-tallet. Du snakker dialekten din - kanskje en vestlandsdialekt full av gamle norrone ord og vendinger. Men alt du leser - Bibelen, lovene, avisene - er pa dansk. Presten din snakker dansk. Embetsmannen som krever inn skatt, skriver dansk. Dine egne barn laerer a skrive - pa dansk.

I nesten 400 ar var dette virkeligheten for nordmenn. Fra Kalmarunionen i 1397 til 1814 hadde Norge ikke noe eget skriftsprak. Dansk var spraket for all skrift - for kirken, for administrasjonen, for litteraturen. Norsk levde videre bare som talesprak, i dialektene, usynlig pa papiret.

Hvordan skjedde dette? Og hvordan fikk vi tilbake et norsk skriftsprak - eller rettere sagt, to norske skriftsprak? Det er historien om dansketiden og fornorskningen. En historie om makt og identitet, om praktiske kompromisser og prinsipielle kamper, om to menn med to helt ulike ideer om hva "norsk" skulle vaere.

Det er ogsa historien om hvorfor bokmalet du leser na, er verken helt dansk eller helt norsk - men noe midt imellom. Et sprak formet av 400 ars union og 200 ars fornorskning.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-4-2-n-section1',
      type: 'text',
      content: `## Hvordan dansk ble Norges skriftsprak

Det skjedde ikke over natten. Det var en gradvis prosess som tok flere hundre ar.

Det begynte med Kalmarunionen i 1397. Norge, Sverige og Danmark ble forent under en felles konge. Danmark var det mektigste av de tre rikene, og dansk ble naturlig nok brukt i felles administrasjon. Norske adelsmenn som ville gjore karriere, matte laere seg dansk.

Sa kom reformasjonen i 1536. Dette var et vendepunkt. Kong Christian III innforte protestantismen i Norge og Danmark, og med den kom den danske Bibelen. Plutselig var det hellige spraket - spraket Guds ord ble forkynt pa - dansk. Kirkene, som var det naermeste folk kom utdanning, brukte dansk. Salmene var danske. Prekenene var danske.

Norge mistet ogsa det siste av sin politiske selvstendighet i 1536. Fra na av var Norge offisielt en dansk provins, styrt fra Kobenhavn. Alle embetsmenn var enten danske eller utdannet i Danmark. Alle offentlige dokumenter ble skrevet pa dansk.

Trykkpressene, som spredte seg i Europa, fantes ikke i Norge. De forste bokene trykket i Norge kom forst pa 1600-tallet. For det hadde all litteratur som nordmenn leste, blitt trykket i Kobenhavn - pa dansk.

Resultatet var at norsk som skriftsprak gradvis dodd ut. De siste sporene av norsk i offentlige dokumenter forsvinner pa 1500-tallet. Etter det var det bare dansk som gjaldt.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilken hendelse var saerlig viktig for at dansk ble kirkesprak i Norge?',
        options: [
          { id: 'a', text: 'Kalmarunionen i 1397', isCorrect: false },
          { id: 'b', text: 'Reformasjonen i 1536', isCorrect: true },
          { id: 'c', text: 'Svartedauden i 1349', isCorrect: false },
          { id: 'd', text: 'Norges selvstendighet i 1814', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Reformasjonen i 1536 innforte den danske Bibelen og dansk som kirkesprak. Kirken var sentral i folks liv og i utdanning, sa dette fikk stor betydning for sprakutviklingen. Fra na var det danske ord folk horte i kirken og laerte a lese i.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-4-2-n-section2',
      type: 'text',
      content: `## Hva skjedde med norsk?

Men norsk forsvant ikke helt. Det levde videre - bare ikke pa papiret.

Bondene fortsatte a snakke sine dialekter. Fiskerne pa kysten, gardbrukerne i dalene, folket i fjordbygdene - de snakket norsk. Deres sprak var direktearvtakere fra norront og mellomnorsk, og de bar med seg ord og former som var hundrevis av ar gamle.

I byene utviklet det seg noe annet: det som ble kalt "dannet dagligtale". Dette var spraket til de utdannede, til embetsmenn, til borgerskapet. Det var dansk i grunn, men med norsk uttale og noen norske ord. Nar en embetsmann i Christiania leste dansk hoyt, hortes det ikke ut som i Kobenhavn. Han sa "jeg" med hard g, ikke blot d. Han sa "bok" med hard k, ikke "bog" med blot g.

Men det fantes ingen norsk standard a falle tilbake pa. Om du ville skrive, skrev du dansk. Om du ville snakke "fint", snakket du dansk med norsk uttale. Dialektene ble sett pa som bondesprak, noe ukultivert.

Dette skapte en merkelig situasjon. Det spraket folk snakket - enten det var dialekt eller dannet dagligtale - lignet ikke det spraket de skrev. Det var et gap mellom tale og skrift som ikke fantes i Danmark, der folk snakket mer eller mindre slik de skrev.

Det var dette gapet Ivar Aasen og Knud Knudsen ville tette - bare pa helt ulike mater.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva var "dannet dagligtale" i dansketiden?',
        options: [
          { id: 'a', text: 'Det samme som norrone dialekter', isCorrect: false },
          { id: 'b', text: 'Ren dansk slik den ble snakket i Kobenhavn', isCorrect: false },
          { id: 'c', text: 'Dansk med norsk uttale og noen norske ord, brukt av de utdannede', isCorrect: true },
          { id: 'd', text: 'Et hemmelig sprak brukt av motstandsbevegelsen', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Dannet dagligtale" var spraket til de utdannede i byene - embetsmenn, prester, borgerskapet. Det var dansk i grunnstrukturen, men med norsk uttale og noen norske ord. Det var dette Knud Knudsen mente burde vaere grunnlaget for et norsk skriftsprak.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-4-2-n-section3',
      type: 'text',
      content: `## To veier til norsk - Aasen og Knudsen

Etter 1814, da Norge ble selvstendig (i union med Sverige), begynte debatten: Hvordan skulle Norge fa sitt eget skriftsprak? To menn med to helt ulike strategier dominerte denne debatten.

Ivar Aasen var bondegutten fra Orsta som la ut pa en utrolig reise. Pa 1840-tallet vandret han gjennom store deler av Norge og samlet dialektord og grammatiske former. Hans ide var radikal: Bygg et helt nytt skriftsprak fra bunnen, basert pa dialektene. Finn det som er felles for de norske dialektene, det som er genuint norsk, og lag en standard av det.

Resultatet var landsmalet - det som na heter nynorsk. Det var et sprak bygget pa norske dialekter, med norront som forbilde. Det hadde a-endelser i infinitiv (kasta, ikkje kaste), tre grammatiske kjonn konsekvent, og et ordforrad hentet fra bondens sprak.

Knud Knudsen hadde en annen tilnaerming. Han var laerer og pragmatiker. Han mente det var upraktisk a tvinge folk til a laere et helt nytt sprak. I stedet ville han fornorske det dansk-norske skriftspraket innenfra. Ta dansken og bytt ut danske former med norske, gradvis, til spraket speilet "dannet dagligtale" - slik de utdannede i byene snakket.

Denne strategien forte til riksmal, som na heter bokmal. Det beholdt mye av den danske strukturen, men fikk norske lydtrekk og noen norske ordformer.

Sa Norge endte opp med to skriftsprak - ikke fordi nordmenn er spesielt kranglevoorne, men fordi to ulike svar pa det samme problemet begge hadde noe for seg.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-4-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva var hovedforskjellen mellom Aasens og Knudsens strategier?',
        options: [
          { id: 'a', text: 'Aasen ville behold dansk, Knudsen ville innfore svensk', isCorrect: false },
          { id: 'b', text: 'Aasen bygde nytt sprak fra dialektene, Knudsen ville fornorske dansken gradvis', isCorrect: true },
          { id: 'c', text: 'Aasen ville ha ett sprak, Knudsen ville ha to', isCorrect: false },
          { id: 'd', text: 'Aasen konsentrerte seg om byene, Knudsen om bygdene', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Ivar Aasen bygde landsmal (nynorsk) fra bunnen basert pa norske dialekter. Knud Knudsen ville fornorske det eksisterende dansk-norske skriftspraket gradvis, basert pa "dannet dagligtale". Begge ville ha et norsk sprak, men hadde ulike mater a komme dit pa.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-4-2-n-section4',
      type: 'text',
      content: `## Fornorskingsreformene

Knudsens ide om gradvis fornorsking av dansk ble offisiell politikk gjennom en rekke rettskrivningsreformer. La oss se pa de viktigste.

Reformen i 1907 innforte obligatoriske harde konsonanter. Der dansk hadde "bog", "gade", "gab", fikk norsk na "bok", "gate", "gap". Dette var ikke tilfeldig - det speilet hvordan nordmenn faktisk uttalte disse ordene. Vi hadde aldri sagt "bog" med blot g, vi hadde bare skrevet det slik.

Reformen i 1917 gikk lenger. Mange norske former ble innfort som valgfrie alternativer. Du kunne na skrive "stein" eller "sten", "sno" eller "sne". Dette apnet for variasjon og lot folk velge former som la naermere talespraket deres.

Reformen i 1938 var den mest radikale. Den hadde et politisk mal: a naerme bokmal og nynorsk til hverandre, i retning av et framtidig "samnorsk". Mange folkelige former ble obligatoriske - a-endelser i hunkjonnsord ("boka", ikke "boken"), diftonger ("stein", ikke "sten"), og andre trekk fra dialektene.

Denne reformen motte voldsom motstand, saerlig fra konservative bokmalsbrukere. Foreldreaksjonen pa 1950-tallet protesterte mot "radikalt" sprak i skolebokene. Resultatet var at noen av endringene ble rullet tilbake i senere reformer.

I dag har bokmal stor valgfrihet. Du kan skrive "boka" eller "boken", "stein" eller "sten", "kasta" eller "kastet". Spraket er et kompromiss - verken helt dansk eller helt fornorsket.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-4-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva innforte rettskrivningsreformen i 1907?',
        options: [
          { id: 'a', text: 'Nynorsk som obligatorisk sidemaal', isCorrect: false },
          { id: 'b', text: 'Valgfrihet mellom bokmal og nynorsk', isCorrect: false },
          { id: 'c', text: 'Obligatoriske harde konsonanter (bok, gate, gap)', isCorrect: true },
          { id: 'd', text: 'A-endelser i alle hunkjonnsord', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Reformen i 1907 innforte obligatoriske harde konsonanter - "bok" i stedet for "bog", "gate" i stedet for "gade". Dette speilet norsk uttale, der vi alltid hadde sagt ordene med hard konsonant selv om vi skrev den danske formen.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-4-2-n-section5',
      type: 'text',
      content: `## Bokmaal i dag - et unikt sprak

Bokmal i dag er et fascinerende sprak. Det er et resultat av en helt unik historie - 400 ars danskestyre fulgt av 200 ars fornorsking. Det er verken dansk eller norsk, men noe eget.

Sammenlign en setning pa de tre sprakene:
- Dansk: "Jeg ved ikke hvad jeg skal gore med denne bog."
- Bokmal: "Jeg vet ikke hva jeg skal gjore med denne boka/boken."
- Nynorsk: "Eg veit ikkje kva eg skal gjere med denne boka."

Du ser hvordan bokmal ligger midt imellom. Det har norsk uttale ("vet", "hva", "bok" med hard konsonant), men dansk setningsstruktur og mye dansk ordforrad. Nynorsk ligger lenger fra dansk - helt andre ord ("veit", "ikkje", "kva", "gjere").

Bokmal har ogsa en unik valgfrihet. Du kan velge mellom konservative former som ligger naer dansk ("boken", "sten", "sne") og radikale former som ligger naer dialektene ("boka", "stein", "sno"). Ingen andre sprak har en slik systematisk valgfrihet bygget inn i rettskrivningen.

Dette gjor bokmal til et sprak i stadig endring. Hver generasjon velger litt annerledes, og tendensen over tid har vaert mot mer fornorskede former. "Boka" er vanligere na enn for femti ar siden. "Stein" har nesten helt ersattet "sten". Fornorskningen fortsetter, langsomt men sikkert.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-4-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner bokmal i forhold til dansk og nynorsk?',
        options: [
          { id: 'a', text: 'Bokmal er identisk med moderne dansk', isCorrect: false },
          { id: 'b', text: 'Bokmal er identisk med nynorsk', isCorrect: false },
          { id: 'c', text: 'Bokmal har dansk struktur men norske lydtrekk, og ligger mellom dansk og nynorsk', isCorrect: true },
          { id: 'd', text: 'Bokmal er helt forskjellig fra bade dansk og nynorsk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Bokmal er et unikt sprak som ligger mellom dansk og nynorsk. Det har beholdt mye av den danske strukturen og ordforradet, men har fatt norske lydtrekk (harde konsonanter, diftonger) og noen norske ordformer. Det er resultatet av 400 ars danskestyre og 200 ars fornorsking.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering: Dansk-norsk og fornorskning

Du har na forstatt hvordan Norge mistet og gjenvant sitt skriftsprak. Her er hovedpunktene:

**Dansketiden (1397-1814):**
Gjennom Kalmarunionen, reformasjonen og politisk underordning ble dansk det eneste skriftspraket i Norge. Norsk levde videre i dialektene og i "dannet dagligtale" - dansk med norsk uttale.

**To veier til norsk:**
Ivar Aasen bygde landsmal (nynorsk) fra bunnen basert pa dialektene. Knud Knudsen ville fornorske dansken gradvis til a speile "dannet dagligtale". Begge strategiene gav resultater.

**Fornorskingsreformene:**
1907 innforte harde konsonanter (bok, gate). 1917 gav valgfrie norske former. 1938 var radikal og motte motstand. Senere reformer har gitt stor valgfrihet.

**Bokmal i dag:**
Et unikt sprak - verken dansk eller norront, men et resultat av 400 ars union og 200 ars fornorsking. Det har dansk struktur men norske lydtrekk, og stor valgfrihet mellom konservative og radikale former.

**Eksempler pa fornorsking:**
- veed/vet (dansk dobbeltvokal til norsk enkel)
- bog/bok (blot g til hard k)
- gade/gate (blot d til hard t)
- hvad/hva (stum d fjernes)
- boken/boka (dansk bestemt form til norsk a-ending)

**Hovedinnsikt:**
Bokmal er et levende sprak som fortsatt fornorskes. Hver generasjon velger litt mer norske former, og tendensen over tid gar mot sterkere fornorsking.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3 NARRATIV: Sammenligning - norsk, svensk, dansk
// ============================================================================

export const CHAPTER_NORSK_VG2_4_3_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-4-3-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '4.3',
  title: 'Sammenligning - norsk, svensk, dansk',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk hvorfor vi nesten forstar hverandre - og hvorfor "nesten" kan vaere sa vanskelig.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke fagsprak til a beskrive saertrekk ved norsk sammenlignet med svensk, dansk og norront',
    'gjore rede for historisk bakgrunn for spraksituasjonen i Norge',
  ],
  linkedChapterId: 'norsk-vg2-4-3',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-4-3-n-intro',
      type: 'text',
      content: `## Sosken med ulike personligheter

Tenk deg at du er pa ferie i Kobenhavn. Du spor en danske om veien til togstasjonen. Han svarer, og du - nikker hoeflig og gar feil vei. For selv om dere begge snakker skandinavisk, forstod du knapt et ord.

Eller du er i Stockholm. Her gar det bedre. Svensken snakker tydelig, med en melodi som minner om Vestlandet, og du fanger det meste. Men sa sier han "rolig" og du lurer pa hvorfor han synes noe er sa avslappet - for han mente faktisk "morsomt".

De skandinaviske sprakene er som sosken som vokste opp i samme hus, men flyttet til ulike byer som voksne. De har fortsatt samme grunnlag, samme familietrekk, men de har utviklet hver sine vaner og saerheter. A forstå disse likhetene og forskjellene gir deg ikke bare praktisk kompetanse - det gir deg et vindu inn i din egen sprakhistorie.

I dette kapittelet skal vi utforske det skandinaviske sprakfellesskapet. Hvorfor forstar vi hverandre - noen ganger? Hvorfor mislykkes det - andre ganger? Og hva sier forskjellene om vare ulike historier?`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-4-3-n-section1',
      type: 'text',
      content: `## Felles opphav - det norrone utgangspunktet

Alle tre skandinaviske sprakene stammer fra det samme spraket: norront. I vikingtiden snakket folk fra Danmark til Island et sprak som var sa likt at de forstod hverandre uten problemer. En viking fra Vestfold kunne handle i Hedeby i Danmark, seile til York i England, og gjore seg forstatt hele veien.

Men allerede i vikingtiden begynte det a skje en deling. Ostskandinavisk - det som ble dansk og svensk - begynte a skille seg fra vestskandinavisk - det som ble norsk, islandsk og faeroysk. Forskjellene var sma i begynnelsen, men de vokste over tid.

Etter middelalderen forsterket politiske grenser disse forskjellene. Norge var i union med Danmark, og norsk ble sterkt pavirket av dansk. Sverige var selvstendig og utviklet seg i sin egen retning. Danmark, med sin naerhet til kontinentet, ble pavirket av tysk og fikk sin saerpreget uttale.

Det interessante er at tross 1000 ar med separat utvikling, kan vi fortsatt forstå hverandre. Grunnvokabularet er nesten identisk: hus, mann, kvinne, barn, ga, komme, spise, sove. Grunngrammatikken er lik: alle har etterstilt artikkel (huset, mannen), alle har lignende verbsystem, alle folger samme ordstilling i setninger.

Det er i detaljene forskjellene ligger. Og som vi alle vet: djevelen er i detaljene.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva er felles for alle de skandinaviske sprakene?',
        options: [
          { id: 'a', text: 'De har alle tonelag', isCorrect: false },
          { id: 'b', text: 'De har alle blote konsonanter', isCorrect: false },
          { id: 'c', text: 'De stammer alle fra norront og har likt grunnvokabular og etterstilt artikkel', isCorrect: true },
          { id: 'd', text: 'De har alle tre grammatiske kjonn', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Alle skandinaviske sprak stammer fra norront og deler grunnleggende trekk: likt grunnvokabular (hus, mann, ga), etterstilt artikkel (huset, mannen), og lignende setningsstruktur. Detaljene varierer, men fundamentet er felles.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-4-3-n-section2',
      type: 'text',
      content: `## Dansk - spraket som "svelger" lyder

Dansk er spraket flest skandinaver synes er vanskeligst a forstå muntlig. Og det er ikke uten grunn - dansk uttale er radikalt forskjellig fra hvordan det skrives.

Det mest paafallende er at dansk "svelger" mange lyder. Der norsk og svensk uttaler alle konsonanter tydelig, reduserer dansk dem ofte til nesten ingenting. "Jeg hedder Peter" hoeres ut som noe slikt som "je heller Peter" - konsonantene blotes eller forsvinner.

Dansk har ogsa noe som heter stod - en glottal lukkelyd, som en liten pause midt i ordet. Det finnes ikke i norsk eller svensk, og det gjor danske ord vanskelige a gjenkjenne. "Hus" pa dansk har stod, sa det hoeres ut som "hu's" med et lite hikk.

I tillegg har dansk blote konsonanter der norsk og svensk har harde. "Bog" (med blot g) i stedet for "bok", "gade" (med blot d) i stedet for "gate". Dette er forresten de samme blote konsonantene som norsk hadde for fornorskningen - bokmal har erstattet dem med harde.

Det paradoksale er at skriftlig er dansk naert bokmal. Vi kan lese danske aviser uten store problemer. Men nar en danske apner munnen, er det som om skriftbildet og lydbildet ikke horer sammen. Det er dette som gjor dansk sa utfordrende.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er "stod" i dansk?',
        options: [
          { id: 'a', text: 'En spesiell melodi i setningene', isCorrect: false },
          { id: 'b', text: 'En glottal lukkelyd - som en liten pause midt i ordet', isCorrect: true },
          { id: 'c', text: 'En spesiell mate a skrive pa', isCorrect: false },
          { id: 'd', text: 'Et dansk dialektord', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Stod er en glottal lukkelyd som finnes i dansk, men ikke i norsk eller svensk. Det hoeres ut som et lite "hikk" eller pause midt i ordet. Dette er en av grunnene til at dansk er vanskelig a forstå muntlig for andre skandinaver.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-4-3-n-section3',
      type: 'text',
      content: `## Svensk - spraket med melodien

Svensk har en helt annen karakter enn dansk. Der dansk er "lukket" og redusert, er svensk "apent" og melodisk. Mange nordmenn beskriver svensk som "syngende" - og det er ikke tilfeldig.

Bade norsk og svensk har noe som heter tonelag eller ordmelodi. Dette betyr at vi bruker tonehoyde til a skille ord som ellers ville vaert like. Tenk pa "bonder" (flertall av bonde) og "bonner" (flertall av bonne) - de skrives nesten likt, men melodien er forskjellig.

Dansk har mistet tonelag og bruker i stedet stod. Det er en av grunnene til at norsk og svensk hoeres mer "musikalske" ut.

Svensk har ogsa noen interessante ordforradforskjeller. "Rolig" pa svensk betyr "morsom", ikke "calm" som pa norsk. "Rar" betyr "kjair" eller "sot", ikke "merkelig". Disse falske vennene kan skape morsomme misforstaelser.

Men total sett er svensk ganske greit for nordmenn a forstå. Uttalen er tydelig, melodien er kjent, og mange ord er nesten identiske. Den storste utfordringen er kanskje ordforradet - svensk har utviklet noen helt egne ord der norsk og dansk deler de samme (for eksempel "fonstrer" mot norsk/dansk "vindu"/"vindue").`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-4-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er tonelag?',
        options: [
          { id: 'a', text: 'En spesiell mate a synge pa', isCorrect: false },
          { id: 'b', text: 'En dansk uttaleform', isCorrect: false },
          { id: 'c', text: 'Betoning pa siste stavelse', isCorrect: false },
          { id: 'd', text: 'Bruk av ordmelodi til a skille ord som ellers er like', isCorrect: true },
        ],
        correctAnswer: 'd',
        solution: 'Tonelag er bruk av tonehoyde (ordmelodi) til a skille ord som ellers ville vaert like. Norsk og svensk har tonelag - for eksempel skilles "bonder" og "bonner" av melodien. Dansk har mistet tonelag og bruker stod i stedet.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-4-3-n-section4',
      type: 'text',
      content: `## Norsk - spraket i midten

Her kommer noe interessant: Norsk ligger midt imellom de andre. Og det gjor at nordmenn ofte forstar bade dansk og svensk bedre enn danske og svenske forstar hverandre.

Hvordan kan det vaere? Tenk pa det slik: Bokmal ligner dansk i skrift, men norsk uttale ligner svensk. Nar du leser dansk, gjenkjenner du ordene fordi de ligner det du selv skriver. Nar du horer svensk, gjenkjenner du lydene fordi de ligner det du selv sier.

I tillegg er nordmenn vant til variasjon. Vi har to skriftsprak. Vi har dialekter som er ekstremt forskjellige - en nordlending og en sogning snakker nesten som ulike sprak. Denne treningen i a tolke variasjon gjor oss mer fleksible nar vi moter andre skandinaviske sprak.

Undersokelser bekrefter dette: Nordmenn skarer jevnt over best pa tester i inter-skandinavisk forstaelse. Svenske forstar norsk ganske bra, men sliter mer med dansk. Danske har oftest storst problemer - de ligger geografisk midt imellom, men spraket har utviklet seg sa annerledes at de trenger mest tilpasning.

Dette gir deg som nordmann en fordel. Du har en spraklig "mellomposisjon" som gjor det lettere a kommunisere med begge nabofolkene.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-4-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hvorfor forstar nordmenn ofte svensk og dansk bedre enn de forstar hverandre?',
        options: [
          { id: 'a', text: 'Fordi norsk er det eldste skandinaviske spraket', isCorrect: false },
          { id: 'b', text: 'Fordi nordmenn er smartere', isCorrect: false },
          { id: 'c', text: 'Fordi bokmal ligner dansk i skrift og norsk uttale ligner svensk, pluss vane med variasjon', isCorrect: true },
          { id: 'd', text: 'Fordi Norge ligger geografisk naermere bade Sverige og Danmark', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Nordmenn har en fordel fordi bokmal ligner dansk skriftlig (vi gjenkjenner ordene) og norsk uttale ligner svensk (vi gjenkjenner lydene). I tillegg gjor erfaringen med to skriftsprak og mange dialekter oss vant til a tolke spraklig variasjon.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-4-3-n-section5',
      type: 'text',
      content: `## Ordforrad - like og ulike

La oss se naermere pa noen konkrete forskjeller i ordforradet. Dette er kanskje det mest praktiske a vite for a kommunisere bedre med svensker og dansker.

Noen ord er helt ulike:
- Norsk "morsom" = svensk "rolig" = dansk "sjov"
- Norsk "rask" = svensk "snabb" = dansk "hurtig"
- Norsk "ganske" = svensk "ganska" = dansk "ret"
- Norsk "hyggelig" = svensk "trevlig" = dansk "hyggeligt"

De falske vennene er saerlig viktige a kjenne:
- "Rolig" betyr "morsom" pa svensk, ikke "avslappet"
- "Rar" kan bety "sot/kjair" pa svensk, ikke bare "merkelig"
- "Frokost" er morgenmaltid pa norsk/dansk, men sen formiddagsmat pa svensk (de sier "frukost" om morgenmaltid)

Noen ord viser historiske forskjeller:
- Norsk/dansk "vindu" (fra norront vindauga, "vindoye") vs. svensk "fonster" (fra latin via tysk)
- Norsk "snakke" vs. svensk "prata" vs. dansk "tale"

Det interessante er at nar du forst laerer disse forskjellene, blir det mye lettere a forstå. Hjernen laerer a "oversette" automatisk, og plutselig apner en hel verden av skandinavisk litteratur, film og musikk seg for deg.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-4-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva betyr "rolig" pa svensk?',
        options: [
          { id: 'a', text: 'Morsom, underholdende', isCorrect: true },
          { id: 'b', text: 'Avslappet, stille', isCorrect: false },
          { id: 'c', text: 'Trist, melankolsk', isCorrect: false },
          { id: 'd', text: 'Rask, travel', isCorrect: false },
        ],
        correctAnswer: 'a',
        solution: '"Rolig" pa svensk betyr "morsom" eller "underholdende" - det motsatte av hva det betyr pa norsk! Dette er en klassisk "falsk venn" mellom sprakene. Nar en svenske sier "det var roligt", mener de "det var goy", ikke "det var stille og fredelig".',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering: De skandinaviske sprakene

Du har na fatt innsikt i forholdet mellom norsk, svensk og dansk. Her er de viktigste punktene:

**Felles opphav:**
Alle tre sprakene stammer fra norront. Grunnvokabularet er nesten identisk, alle har etterstilt artikkel, og setningsstrukturen er lik.

**Dansk saertrekk:**
Redusert uttale ("svelger" lyder), stod (glottal lukkelyd), blote konsonanter. Vanskeligst a forstå muntlig, men naert bokmal skriftlig.

**Svensk saertrekk:**
Melodisk uttale med tonelag, tydelige konsonanter. Noen helt egne ord (fonster, rolig=morsom). Relativt lett a forstå for nordmenn.

**Norsk mellomposisjon:**
Bokmal ligner dansk skriftlig, uttalen ligner svensk. Nordmenn forstar ofte begge bedre enn de forstar hverandre.

**Viktige forskjeller:**
- Tonelag: Norsk/svensk har det, dansk har ikke
- Stod: Bare dansk
- Konsonanter: Dansk blote, norsk/svensk harde

**Falske venner:**
- Rolig: norsk=calm, svensk=morsom
- Rar: varierende betydning
- Frokost: ulikt tidspunkt svensk vs. norsk/dansk

**Praktisk tips:**
Laer de viktigste ordforradforskjellene, va forberedt pa at dansk uttale er annerledes enn skriftbildet, og bruk din erfaring med variasjon som nordmann til din fordel.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4 NARRATIV: Spraksituasjonen i Norge i dag
// ============================================================================

export const CHAPTER_NORSK_VG2_4_4_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-4-4-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '4.4',
  title: 'Spraksituasjonen i Norge i dag',
  subtitle: 'Narrativ versjon',
  description: 'Utforsk mangfoldet i norsk sprak i dag - to skriftsprak, utallige dialekter, og nye stemmer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjore rede for historisk bakgrunn for spraksituasjonen i Norge',
    'reflektere over spraklige varianter i Norge og holdninger til dem',
  ],
  linkedChapterId: 'norsk-vg2-4-4',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-4-4-n-intro',
      type: 'text',
      content: `## Et land, mange sprak

Hvis du skulle forklare den norske spraksituasjonen for en utlending, hvor ville du begynt? Kanskje slik: "Vi har to offisielle skriftsprak. Alle ma laere begge. Og forresten snakker folk helt ulikt fra landsdel til landsdel - til og med i Stortinget."

Utlendingen ville sannsynligvis se forvirret ut. For det er forvirrende. Norge har en av de mest komplekse spraksituasjonene i verden. To skriftsprak med full likestilling. Dialekter som er sa forskjellige at de nesten er egne sprak. En offentlighet der statsministeren kan snakke tromsdialekt og bli forstatt (mer eller mindre).

Men det er ikke alt. Norge har ogsa samisk, et urfolkssprak med egen lovbeskyttelse. Vi har kvensk, romani og norsk tegnsprak med saerskilt vern. Og vi har hundrevis av innvandrersprak - polsk, arabisk, somali, urdu - som snakkes i norske hjem hver dag.

I dette kapittelet skal vi utforske denne sprakverdenen. Ikke bare hva den er, men hvordan den ble slik - og hvilke debatter som preger den i dag.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-4-4-n-section1',
      type: 'text',
      content: `## Bokmal og nynorsk - to sprak, en nasjon

La oss starte med elefanten i rommet: Norge har to offisielle skriftsprak. Det er unikt i verden. Hvordan lever de sammen?

Tallene forst: Omkring 87 prosent av norske elever har bokmal som hovedmal, rundt 12 prosent har nynorsk. Det betyr at nynorsk er et mindretallssprak - men et mindretall pa flere hundre tusen mennesker.

Geografisk er nynorsk staerkest pa Vestlandet og i dalstrokene. Bokmal dominerer i byene og pa Ostlandet. Men grensene er ikke skarpe - du finner bokmalsbrukere i nynorskkommuner og omvendt.

I praksis har de to sprakene ulik status, selv om de er formelt likestilte. Bokmal dominerer i mediene, i naeringsliv, i riksdekkende aviser og TV-kanaler. Nynorskbrukere opplever ofte a matte forsvare sitt sprakvalg - "hvorfor skriver du nynorsk?" - pa en mate bokmalsbrukere sjelden opplever.

Spraklovet av 2021 forsaker a bote pa dette. Den faststlar at begge sprak er likeverdige, og at det offentlige har et saerlig ansvar for a styrke nynorsk som det minst brukte spraket. Det er en erkjennelse av at formell likestilling ikke er nok - det trengs aktiv innsats for a opprettholde et tospraklig samfunn.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hva faststlar spraklovet av 2021 om bokmal og nynorsk?',
        options: [
          { id: 'a', text: 'Bokmal skal vaere det primaere nasjonalspraket', isCorrect: false },
          { id: 'b', text: 'Nynorsk skal fases ut over tid', isCorrect: false },
          { id: 'c', text: 'Begge sprak er likeverdige, og det offentlige har saerlig ansvar for a styrke nynorsk', isCorrect: true },
          { id: 'd', text: 'Alle ma laere tre sprak: bokmal, nynorsk og samisk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Spraklovet av 2021 faststlar at bokmal og nynorsk er likeverdige, og at det offentlige har et saerlig ansvar for a styrke nynorsk som det minst brukte spraket. Dette markerer et skifte fra samnorskpolitikk til tosprakspolitikk.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-4-4-n-section2',
      type: 'text',
      content: `## Dialektlandet Norge

Norge er unikt nar det gjelder dialekter. Ikke fordi vi har mange dialekter - det har de fleste land - men fordi dialektene har sa hoy status.

I de fleste land finnes det en standarduttale som brukes i offisielle sammenhenger. I Storbritannia er det BBC-engelsk. I Frankrike er det parisisk fransk. I Tyskland er det Hochdeutsch. Folk som vil ha seriose jobber i media eller politikk, forventes a snakke denne standarden.

I Norge finnes det ingen slik standard. Statsministre snakker dialekt pa Stortinget. NRK-programledere har alle slags malforer. Professorer foreleser pa dialekt. Det finnes ingen "korrekt" norsk uttale a strebe etter.

Hvordan ble det slik? Delvis fordi Norge aldri hadde et sterkt hoffmiljo som kunne etablere en standarduttale. Delvis fordi kampen for nynorsk loftet fram dialektene som verdifulle. Delvis fordi vart desentraliserte samfunn har gjort det mulig a vaere vellykket uten a bo i hovedstaden.

Men dialektene er under press. Okt mobilitet, medieeksponering og sentralisering gjor at de lokale dialektene svekkes mange steder. Noen forskere snakker om at vi far "regiolekter" - storre, regionale dialekter som erstatter de sma, lokale. Bergensk, tromsk, ostlandsk - kanskje er dette fremtidens dialektlandskap.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er en "regiolekt"?',
        options: [
          { id: 'a', text: 'Et nytt skriftsprak for en region', isCorrect: false },
          { id: 'b', text: 'En storre regional dialekt som erstatter lokale dialekter', isCorrect: true },
          { id: 'c', text: 'Dialekten i hovedstaden', isCorrect: false },
          { id: 'd', text: 'Et slanguttrykk for dialekt', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Regiolekt er en storre, regional dialektvarietet som erstatter de sma, lokale dialektene. Eksempel: "bergensk" som en felles malfore for Bergensregionen, i stedet for de mange lokale variantene som fantes for. Dette kan vaere fremtidens dialektlandskap i Norge.',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-4-4-n-section3',
      type: 'text',
      content: `## Samisk og andre minoritetssprak

Norge har et urfolk: samene. Og samene har sine egne sprak - faktisk flere, for det finnes sorsamisk, lulesamisk, nordsamisk og andre varianter, som ikke er gjensidig forstaelige.

Samisk har hatt en dramatisk historie i Norge. Fornorskingspolitikken fra slutten av 1800-tallet til midten av 1900-tallet forsakte systematisk a utrydde samisk sprak og kultur. Barn ble sendt til internatskoler der de ble straffet for a snakke samisk. Resultatet var at generasjoner vokste opp uten a laere foreldrenes sprak.

I dag jobbes det med revitalisering - a bygge opp igjen de samiske sprakene. Sametinget er aktivt, det finnes samiske skoler og barnehager, samisk hoeres pa NRK. Sprakloven anerkjenner samisk som urfolkssprak.

Men utfordringene er store. Saerlig sorsamisk og lulesamisk har fa talere. Det er vanskelig a opprettholde et levende sprakmiljo nar brukerne er spredt over store omrader. Revitalisering krever enorm innsats over lang tid.

Norge har ogsa andre minoritetssprak med saerskilt vern: kvensk, romani (romanisprak) og norsk tegnsprak. Disse har ulike historier og utfordringer, men felles er at de representerer spraklig mangfold som samfunnet har valgt a beskytte.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-4-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva menes med "revitalisering" av et sprak?',
        options: [
          { id: 'a', text: 'A forby spraket i offentligheten', isCorrect: false },
          { id: 'b', text: 'A erstatte spraket med et annet', isCorrect: false },
          { id: 'c', text: 'A bygge opp igjen og styrke et truet sprak', isCorrect: true },
          { id: 'd', text: 'A registrere spraket i en database', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Revitalisering betyr a bygge opp igjen og styrke et truet sprak. For samisk innebærer dette sprakopplaering, samiske barnehager og skoler, synliggjoring i medier, og stotte til samiske sprakmiljoer. Det er langsomt, krevende arbeid.',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-4-4-n-section4',
      type: 'text',
      content: `## Sidemaalsdebatten - evig strid

Fa sprak i verden har en ordning som sidemaal. Alle norske elever ma laere bade bokmal og nynorsk, uansett hva de har som hovedmal. Det betyr at en elev i Oslo ma laere nynorsk selv om hun aldri bruker det i hverdagen, og en elev i Sogn ma laere bokmal selv om hele naermiljoet skriver nynorsk.

Denne ordningen har vaert kontroversiell i generasjoner. La oss se pa argumentene fra begge sider.

For obligatorisk sidemaal: Begge sprak er del av norsk kulturarv. Alle nordmenn bor kunne lese bade Ibsen og Vesaas i original. Det handler om demokrati - nynorskbrukere skal slippe a bare motta informasjon pa "fremmededsprak". Og det gir spraklig fleksibilitet og forstaelse.

Mot obligatorisk sidemaal: Det tar tid fra andre fag. Mange har ingen praktisk bruk for sidemalet. Tvang skaper motvilje. Ressursene kunne brukes bedre pa hovedmalsopplaring. Og noen mener det er et overgrep mot individets valgfrihet.

Debatten handler i bunn og grunn om hva slags samfunn vi vil ha. Skal kollektive verdier som kulturarv og likestilling veie tyngst? Eller skal individuell frihet og nyttefokus fa forrang? Det finnes ikke et objektivt riktig svar - det er et verdivalg.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-4-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er hovedargumentet FOR obligatorisk sidemaal?',
        options: [
          { id: 'a', text: 'Det gir bedre karakterer', isCorrect: false },
          { id: 'b', text: 'Det er billigere enn alternativene', isCorrect: false },
          { id: 'c', text: 'Det sikrer at alle kan begge skriftsprak som del av kulturarven og for demokratisk likestilling', isCorrect: true },
          { id: 'd', text: 'Det gjor norsk lettere a laere for utlendinger', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Hovedargumentet for sidemaal er kulturarv og demokrati - alle nordmenn bor kunne begge skriftsprak som del av var felles kulturarv, og nynorskbrukere skal slippe a bare motta informasjon pa et sprak som ikke er deres eget. Det handler om likestilling og fellesskap.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-4-4-n-section5',
      type: 'text',
      content: `## Engelsk og domenetap

En annen debatt handler om engelsk. Norsk er et lite sprak med fem millioner brukere. Engelsk er et verdenssprak som dominerer vitenskap, teknologi, underholdning og internasjonal kommunikasjon. Hva skjer med norsk i dette bildet?

Frykten heter "domenetap" - at norsk mister bruksomrader til engelsk. Tenk pa universitetene: Stadig flere fag undervises pa engelsk. Stadig flere masteroppgaver og doktoravhandlinger skrives pa engelsk. Hva om det en dag ikke finnes noen norske fagtermer for nye vitenskapelige fenomener, fordi alt arbeidet skjer pa engelsk?

Det samme skjer i naeringsliv. Store norske selskaper bruker engelsk som konsernsprak. Mater holdes pa engelsk, dokumenter skrives pa engelsk, selv mellom nordmenn. Noen frykter at norsk blir et sprak for privatlivet, men ikke for arbeidslivet.

Andre mener frykten er overdreven. Norsk star sterkt i media, i politikk, i hverdagslivet. At vi bruker engelsk i internasjonale sammenhenger, betyr ikke at norsk forsvinner. Se pa Nederland eller de skandinaviske landene - alle har hoy engelskompetanse, men modersmalet lever i beste velgaende.

Sprakloven av 2021 tar standpunkt: Norsk er nasjonalsprak og skal vaere det fullverdige, samfunnsbaerende spraket i Norge. Det er en politisk ambisjon om at norsk skal brukes pa alle omrader av samfunnslivet.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-4-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hva menes med "domenetap"?',
        options: [
          { id: 'a', text: 'At et sprak far faerre dialekter', isCorrect: false },
          { id: 'b', text: 'At et sprak mister ord fra ordforradet', isCorrect: false },
          { id: 'c', text: 'At et sprak mister bruksomrader til et annet sprak', isCorrect: true },
          { id: 'd', text: 'At et sprak blir vanskeligere a laere', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Domenetap betyr at et sprak mister bruksomrader til et annet sprak - for eksempel at norsk fortrenges av engelsk i akademia eller naeringsliv. Frykten er at norsk blir et sprak for privatlivet, men ikke for viktige samfunnsomrader.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering: Spraksituasjonen i Norge i dag

Du har na fatt oversikt over det norske spraklandskapet i dag. Her er hovedpunktene:

**To skriftsprak:**
Bokmal (ca. 87% av elevene) og nynorsk (ca. 12%) er formelt likestilte. Sprakloven av 2021 gir det offentlige saerlig ansvar for a styrke nynorsk.

**Dialekttolerans:**
Norge har unik aksept for dialektbruk i offentligheten - ingen standarduttale. Dialektene er under press fra mobilitet og medier, og regiolekter kan vaere fremtiden.

**Minoritetssprak:**
Samisk er urfolkssprak under revitalisering. Kvensk, romani og norsk tegnsprak har saerskilt vern. Norge er et flerspraklig samfunn.

**Sidemaalsdebatten:**
For: kulturarv, demokrati, likestilling. Mot: tvang, tidsbruk, manglende praktisk nytte. Et verdivalg mellom kollektive og individuelle hensyn.

**Domenetap:**
Frykten for at norsk mister bruksomrader til engelsk, saerlig i akademia og naeringsliv. Sprakloven fastslar at norsk skal vaere fullverdig samfunnsbaerende sprak.

**Nokkelbegreper:**
- Hovedmal/sidemaal: Ditt primaere og sekundaere skriftsprak
- Regiolekt: Regional dialekt som erstatter lokale varianter
- Revitalisering: Styrking av truede sprak
- Domenetap: At et sprak mister bruksomrader

**Hovedinnsikt:**
Norsk spraksituasjon er kompleks og under stadig endring. Den er formet av historien var og formes videre av valgene vi gjor i dag - som samfunn og som individer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5 NARRATIV: Spraksammenligning med fagsprak
// ============================================================================

export const CHAPTER_NORSK_VG2_4_5_NARRATIV: TextbookChapter = {
  id: 'norsk-vg2-4-5-narrativ',
  courseId: 'norsk-vg2',
  chapterNumber: '4.5',
  title: 'Spraksammenligning: norsk, norront og nabosprak',
  subtitle: 'Narrativ versjon',
  description: 'Laer a beskrive sprakforskjeller presist - med fagbegreper som apner nye dorrer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke fagsprak til a beskrive saertrekk ved norsk sammenlignet med svensk, dansk og norront',
    'gjore rede for historisk bakgrunn for spraksituasjonen i Norge',
  ],
  linkedChapterId: 'norsk-vg2-4-5',
  content: [
    // ========== INTRO ==========
    {
      id: 'norsk-vg2-4-5-n-intro',
      type: 'text',
      content: `## Sprakets verktaykasse

Du har na laert mye om norsk sprakhistorie. Du vet at norsk kommer fra norront, at vi var under dansk styre i 400 ar, at vi har to skriftsprak, at dialektene vare er sterke. Men hvordan setter du ord pa alt dette? Hvordan beskriver du sprakforskjeller presist og faglig?

Tenk pa det slik: Hvis du ser en merkelig fugl i skogen, kan du si "den var sann brunaktig med litt rod pa brystet". Men en ornitolog kan si "det var en rotstrupe, Erithacus rubecula". Det forste er ikke feil, men det andre er mer presist, mer informativt, og gjor at du kan kommunisere med andre som kan faget.

Det samme gjelder sprak. Du kan si "dansk hoeres rart ut" - og det er sant, pa en mate. Men du kan ogsa si "dansk har gjennomgatt vokalreduksjon og har stod i stedet for tonelag". Det sier mye mer og gjor at du kan delta i faglige samtaler om sprak.

I dette kapittelet skal vi fylle verktaykassen din. Du skal laere fagbegrepene som gjor det mulig a beskrive sprakforskjeller presist - mellom norsk og norront, mellom norsk og nabosprakene, mellom bokmal og nynorsk.`,
    },

    // ========== SEKSJON 1 ==========
    {
      id: 'norsk-vg2-4-5-n-section1',
      type: 'text',
      content: `## De tre nivene: morfologi, syntaks, fonologi

Nar sprakforskere analyserer et sprak, deler de det gjerne inn i tre hovedomrader. Dette er nyttige kategorier ogsa for deg som skal sammenligne sprak.

Det forste omradet er morfologi, som betyr "formlare". Her studerer vi hvordan ord bayer og bygges opp. Nar vi snakker om at norront hadde fire kasus mens norsk bare har en, er det morfologi. Nar vi sammenligner verbboyning - norront "ek fer, pu ferr, hann ferr" mot norsk "jeg reiser, du reiser, han reiser" - er det morfologi. Nar vi ser pa hvordan ord settes sammen til nye ord ("sprak" + "vitenskap" = "sprakvitenskap"), er det ogsa morfologi.

Det andre omradet er syntaks, som betyr "setningslaere". Her studerer vi hvordan ord ordnes i setninger. At bade norsk og norront folger V2-regelen (verbet star pa andre plass i hovedsetninger) er syntaks. At vi sier "jeg leser ikke boka" med nekting etter verbet, er syntaks. Ordrekkefoljens regler horer hit.

Det tredje omradet er fonologi, som betyr "lydlaere". Her studerer vi sprakens lydsystem. At norsk har tonelag er fonologi. At dansk har stod er fonologi. At vokalene i norront endret seg til det vi har i dag, er fonologisk endring.

Med disse tre kategoriene kan du plassere de fleste sprakforskjeller. Det gjor analysen mer systematisk og presis.`,
    },

    // ========== QUIZ 1 ==========
    {
      id: 'norsk-vg2-4-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Hvilket sprakniva handler om ordboying og kasussystemer?',
        options: [
          { id: 'a', text: 'Syntaks', isCorrect: false },
          { id: 'b', text: 'Fonologi', isCorrect: false },
          { id: 'c', text: 'Morfologi', isCorrect: true },
          { id: 'd', text: 'Semantikk', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Morfologi (formlare) handler om hvordan ord boyer og bygges opp. Kasussystemer, verbboyning og orddannelse (sammensatte ord) horer til morfologien. Syntaks handler om setningsstruktur, fonologi om lyder.',
      },
    },

    // ========== SEKSJON 2 ==========
    {
      id: 'norsk-vg2-4-5-n-section2',
      type: 'text',
      content: `## Kasussynkretisme - den store forenklingen

Et av de viktigste morfologiske begrepene for a beskrive utviklingen fra norront til moderne norsk er kasussynkretisme. Det hoeres kanskje komplisert ut, men det beskriver noe ganske enkelt: at kasusformer faller sammen.

I norront hadde substantivet "madr" (mann) fire ulike former: madr (nominativ), mann (akkusativ), manni (dativ), manns (genitiv). Hver form fortalte noe om ordets funksjon i setningen.

I moderne norsk har vi bare "mann" og "mannen". Alle de fire formene har falt sammen til en. Dette er kasussynkretisme - en systematisk forenkling der ulike grammatiske former blir identiske.

Det var ikke en brå endring. Forst falt akkusativ og dativ sammen. Sa forsvant genitiven (bortsett fra i faste uttrykk som "til manns"). Til slutt ble ogsa nominativendelsen borte. Prosessen tok flere hundre ar.

Resultatet er at moderne norsk er mye enklere morfologisk enn norront - men ogsa at ordrekkefølgen ble viktigere. Nar endelsene ikke lenger forteller deg hvem som gjor hva, ma ordrekkefølgen gjore det. Det er derfor vi sier "hunden biter mannen" og ikke "mannen biter hunden" hvis vi mener at hunden er den aktive - pa norront kunne du sagt det i begge rekkefolger, og endelsene ville vist meningen.`,
    },

    // ========== QUIZ 2 ==========
    {
      id: 'norsk-vg2-4-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Hva er kasussynkretisme?',
        options: [
          { id: 'a', text: 'At et sprak far flere kasusformer over tid', isCorrect: false },
          { id: 'b', text: 'At kasusformer faller sammen til faerre former', isCorrect: true },
          { id: 'c', text: 'At kasus brukes i flere sammenhenger', isCorrect: false },
          { id: 'd', text: 'At kasus later fra ett sprak til et annet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Kasussynkretisme er nar kasusformer faller sammen over tid. Norront hadde fire kasus (nominativ, akkusativ, dativ, genitiv), men i moderne norsk har disse falt sammen til en grunnform for substantiv. Spor finnes fortsatt i pronomen (jeg/meg).',
      },
    },

    // ========== SEKSJON 3 ==========
    {
      id: 'norsk-vg2-4-5-n-section3',
      type: 'text',
      content: `## Fonologiske endringer - fra norront til moderne

La oss se pa noen sentrale lydendringer fra norront til moderne skandinavisk. Disse begrepene hjelper deg a beskrive presist hva som har skjedd med spraklydene.

Vokalreduksjon er en av de viktigste. I norront hadde trykklette stavelser fullverdige vokaler: "kalla", "tunga", "konungr". I moderne norsk er disse redusert til schwa-lyd (e): "kalle", "tunge", "konge". Lydene a, u, i i trykklette stavelser ble alle til e. Dette er systematisk - det skjer pa samme mate i tusenvis av ord.

Monoftongering er en annen viktig endring. Norront hadde diftonger som ei, au, oy i mange ord: "steinn", "auga". I dansk (og i konservativt bokmal) ble disse til enkle vokaler: "sten", "oje". Norsk og delvis svensk bevarte diftongene: "stein", "oye/auge". Nar du skriver "stein" pa bokmal, velger du den norske formen med diftong; nar du skriver "sten", velger du den danske formen med monoftong.

Konsonantendringer skiller ogsa sprakene. Dansk utviklet blote konsonanter (b, d, g) der norsk og svensk har harde (p, t, k). "Bog" vs. "bok", "gade" vs. "gate". Dansk har ogsa stod - en glottal lukkelyd - mens norsk og svensk har tonelag. Dette er fonologiske forskjeller som gjor dansk saerlig vanskelig a forstå muntlig.`,
    },

    // ========== QUIZ 3 ==========
    {
      id: 'norsk-vg2-4-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Hva er monoftongering?',
        options: [
          { id: 'a', text: 'At en vokal blir til to vokaler', isCorrect: false },
          { id: 'b', text: 'At to vokaler (diftong) blir til en vokal (monoftong)', isCorrect: true },
          { id: 'c', text: 'At konsonanter forsvinner', isCorrect: false },
          { id: 'd', text: 'At trykket flytter seg i ordet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Monoftongering er nar en diftong (to vokaler som glir over i hverandre) blir til en monoftong (enkelt vokal). Eksempel: norront "steinn" [stain] -> dansk "sten" [ste:n]. Norsk bevarte diftongen: "stein".',
      },
    },

    // ========== SEKSJON 4 ==========
    {
      id: 'norsk-vg2-4-5-n-section4',
      type: 'text',
      content: `## Verbsystemet - fra komplekst til enkelt

Norront hadde et komplekst verbsystem som moderne norsk har forenklet dramatisk. La oss se pa de viktigste endringene.

Personboyning forsvant. I norront hadde verbet ulike former for hver person: "ek fer" (jeg reiser), "pu ferr" (du reiser), "hann ferr" (han reiser), "ver forum" (vi reiser). I moderne norsk har vi bare en form: "jeg/du/han/vi reiser". Dette er en stor forenkling.

Flertallsboyning forsvant ogsa. Norront skilte mellom entall og flertall i verb - "hann ferr" (han reiser) vs. "peir fara" (de reiser). Moderne norsk gjor ikke det - "han reiser" og "de reiser" har samme verbform.

Konjunktiv forsvant nesten helt. Norront hadde egne verbformer for onsker, tvil og hypotetiske situasjoner. Vi har spor av dette i uttrykk som "leve kongen!" og "Gud hjelpe meg", men ellers bruker vi hjelpeverb (skulle, ville, kunne) der norront brukte egne former.

Sterke verb ble svakere. Norront hadde mange flere sterke verb - verb som boyer ved vokalskifte (bite-bet-bitt). Over tid har mange av disse blitt svake - de far vanlig endelse i stedet. "A hjelpe" var sterkt pa norront ("hjalp"), men mange sier na "hjelpte".

Alle disse endringene gjor moderne norsk enklere a laere - men ogsa mindre presist. Norront kunne uttrykke nyanser gjennom boyningen som vi ma uttrykke pa andre mater.`,
    },

    // ========== QUIZ 4 ==========
    {
      id: 'norsk-vg2-4-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom sterke og svake verb?',
        options: [
          { id: 'a', text: 'Sterke verb er lengre enn svake verb', isCorrect: false },
          { id: 'b', text: 'Sterke verb brukes i formelle sammenhenger', isCorrect: false },
          { id: 'c', text: 'Sterke verb boyer ved vokalskifte, svake verb ved a legge til endelse', isCorrect: true },
          { id: 'd', text: 'Svake verb er eldre enn sterke verb', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Sterke verb boyer ved vokalskifte i stammen: bite-bet-bitt, synge-sang-sunget. Svake verb boyer ved a legge til endelse: kaste-kastet-kastet, lese-leste-lest. Over tid har mange sterke verb blitt svake.',
      },
    },

    // ========== SEKSJON 5 ==========
    {
      id: 'norsk-vg2-4-5-n-section5',
      type: 'text',
      content: `## A bruke fagsprak i praksis

Na har du verktoyene. La oss se hvordan du bruker dem i praksis. Her er et eksempel pa en faglig spraksammenligning:

Oppgave: Sammenlign ordet "stein" pa norsk, svensk og dansk med utgangspunkt i norront "steinn".

Faglig analyse: "Ordet 'steinn' pa norront hadde diftongen ei. I moderne norsk (bokmal og nynorsk) er diftongen bevart: 'stein'. I svensk og dansk har vi monoftongering - diftongen ei har blitt til monoftongen e: svensk 'sten', dansk 'sten'. Dette viser en fonologisk forskjell mellom vestnordisk (norsk) og ostnordisk (svensk, dansk) utvikling. I tillegg viser dansk blot framlydkonsonant [sd-] mot norsk og svensk hard framlyd [st-]. Morfologisk har alle sprakene mistet kasusendelsen - norront 'steinn' var nominativ med endelsen -r assimilert til -n, men moderne former har bare en grunnform."

Se hvordan fagbegrepene gjor analysen mer presis? "Monoftongering", "diftongen ei", "fonologisk forskjell", "kasusendelse" - dette er presise termer som gjor at du kan beskrive sprakforskjeller noayaktig.

Den samme analysen uten fagsprak ville vaert: "Norsk sier 'stein' mens svensk og dansk sier 'sten'. Det er fordi norsk har beholdt den gamle maten a si det pa." Det er ikke feil, men det er mye mindre presist og informativt.`,
    },

    // ========== QUIZ 5 ==========
    {
      id: 'norsk-vg2-4-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'norsk-vg2-4-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Hvordan beskriver du faglig at norsk har "stein" mens dansk har "sten"?',
        options: [
          { id: 'a', text: 'Dansk har feil stavmate', isCorrect: false },
          { id: 'b', text: 'Norsk bevarer diftongen ei, dansk viser monoftongering til e', isCorrect: true },
          { id: 'c', text: 'Det er bare ulik dialekt', isCorrect: false },
          { id: 'd', text: 'Dansk laante ordet fra tysk', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Den faglige beskrivelsen er at norsk bevarer den norrone diftongen ei ("stein"), mens dansk viser monoftongering - diftongen har blitt til enkeltvokal e ("sten"). Dette er en systematisk fonologisk forskjell mellom sprakene.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-vg2-4-5-n-summary',
      type: 'text',
      content: `## Oppsummering: Spraksammenligning med fagsprak

Du har na lart a beskrive sprakforskjeller presist. Her er verktoyene du har fatt:

**De tre nivane:**
- Morfologi: Ordboying, kasussystem, orddannelse
- Syntaks: Setningsstruktur, ordrekkefaolge
- Fonologi: Sprakklyder, uttale

**Viktige morfologiske begreper:**
- Kasussynkretisme: Kasusformer faller sammen
- Sterke verb: Boyer ved vokalskifte (bite-bet-bitt)
- Svake verb: Boyer ved endelse (kaste-kastet)

**Viktige fonologiske begreper:**
- Vokalreduksjon: Trykklette vokaler blir til e
- Monoftongering: Diftong blir monoftong (ei->e)
- Diftong: To vokaler som glir sammen (ei, au, oy)
- Tonelag: Ordmelodi som skiller ord (norsk/svensk)
- Stod: Glottal lukkelyd (dansk)

**Slik bruker du fagsprak:**
1. Identifiser hvilket niva (morfologi, syntaks, fonologi)
2. Bruk presise termer for endringene
3. Gi konkrete eksempler
4. Sammenlign systematisk mellom sprakene

**Hovedinnsikt:**
Fagsprak gjor deg til en bedre sprakanalytiker. Det lar deg beskrive noayaktig hva som skiller sprak, hvordan de har utviklet seg, og hva som er systematiske monster i sprakendring.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLET EKSPORT
// ============================================================================

export const NORSK_VG2_NARRATIV_DEL4_CHAPTERS = [
  CHAPTER_NORSK_VG2_4_1_NARRATIV,
  CHAPTER_NORSK_VG2_4_2_NARRATIV,
  CHAPTER_NORSK_VG2_4_3_NARRATIV,
  CHAPTER_NORSK_VG2_4_4_NARRATIV,
  CHAPTER_NORSK_VG2_4_5_NARRATIV,
];
