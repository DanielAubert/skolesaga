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
        task: 'Test deg selv pa periodene i norsk sprakhistorie:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-1-n-quiz1-q0',
            task: 'I hvilken periode ble sagaene og eddadiktene skrevet ned?',
            options: [
              { id: 'a', text: 'Norront (ca. 700-1350)', isCorrect: true },
              { id: 'b', text: 'Urnordisk (ca. 200-700)', isCorrect: false },
              { id: 'c', text: 'Mellomnorsk (ca. 1350-1525)', isCorrect: false },
              { id: 'd', text: 'Dansketiden (ca. 1525-1814)', isCorrect: false },
            ],
            solution: 'Den norrone perioden (ca. 700-1350) var vikingtiden og tidlig middelalder. Det var na de store litteraere verkene ble skrevet - sagaene om konger og islendinger, eddadiktene om guder og helter. Island ble et litteraert sentrum i denne perioden.',
          },
          {
            id: 'norsk-vg2-4-1-n-quiz1-q1',
            task: 'Hva kjennetegner den urnordiske perioden (ca. 200-700)?',
            options: [
              { id: 'a', text: 'Spraket var sterkt pavirket av dansk', isCorrect: false },
              { id: 'b', text: 'Det var et felles skandinavisk sprak kjent gjennom runeinnskrifter', isCorrect: true },
              { id: 'c', text: 'Kasussystemet hadde allerede forsvunnet', isCorrect: false },
              { id: 'd', text: 'Sagaene ble skrevet ned for forste gang', isCorrect: false },
            ],
            solution: 'Urnordisk (ca. 200-700) er det eldste stadiet vi kjenner av skandinavisk sprak, kjent gjennom runeinnskrifter. Spraket var felles for hele Skandinavia og sa ulikt moderne norsk at det nesten virker som et helt annet sprak.',
          },
          {
            id: 'norsk-vg2-4-1-n-quiz1-q2',
            task: 'Hva skjedde med norsk skriftsprak i mellomnorsk periode (ca. 1350-1525)?',
            options: [
              { id: 'a', text: 'Norront ble gjeninnfort som offisielt sprak', isCorrect: false },
              { id: 'b', text: 'Norge fikk sitt forste trykkeri', isCorrect: false },
              { id: 'c', text: 'Kasussystemet brot sammen og dansk begynte a ta over som skriftsprak', isCorrect: true },
              { id: 'd', text: 'Spraket ble pavirket av svensk i stedet for dansk', isCorrect: false },
            ],
            solution: 'Mellomnorsk periode (ca. 1350-1525) var preget av svartedaudens ettervirkninger. Kasussystemet brot sammen, endelser forsvant, og dansk begynte a ta over som skriftsprak ettersom den norske skrivetradisjonen ble svekket.',
          },
        ],
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
        task: 'Test deg selv pa svartedauden og sprakendring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-1-n-quiz2-q0',
            task: 'Hva var en av de viktigste spraklige konsekvensene av svartedauden?',
            options: [
              { id: 'a', text: 'Norront ble innfort som offisielt skriftsprak', isCorrect: false },
              { id: 'b', text: 'Skrivetradisjonen ble brutt og dansk ble dominerende', isCorrect: true },
              { id: 'c', text: 'Dialektene forsvant helt', isCorrect: false },
              { id: 'd', text: 'Norge fikk to offisielle skriftsprak', isCorrect: false },
            ],
            solution: 'Svartedauden desimerte den utdannede overklassen som holdt skrivetradisjonen i live. Klosterene sto tomme, og i det maktvakuumet som oppsto, tok dansk over som skriftsprak. Den norske skrivetradisjonen ble brutt.',
          },
          {
            id: 'norsk-vg2-4-1-n-quiz2-q1',
            task: 'Hvorfor var prestene og munkene sa viktige for norsk sprak for svartedauden?',
            options: [
              { id: 'a', text: 'De var de eneste som snakket norsk', isCorrect: false },
              { id: 'b', text: 'De styrte den politiske unionen med Danmark', isCorrect: false },
              { id: 'c', text: 'De holdt skrivetradisjonen i live ved klosterene', isCorrect: true },
              { id: 'd', text: 'De underviste alle nordmenn i norront', isCorrect: false },
            ],
            solution: 'Prestene og munkene ved klosterene var sentre for laerdom og skriving. De holdt den norske skrivetradisjonen i live. Nar de ble rammet hardt av pesten og klosterene ble staende tomme, forsvant ogsa skrivekunnskapen.',
          },
          {
            id: 'norsk-vg2-4-1-n-quiz2-q2',
            task: 'Hva skjedde med det norrone kasussystemet i tiden etter svartedauden?',
            options: [
              { id: 'a', text: 'Det ble styrket fordi folk holdt fast ved tradisjonene', isCorrect: false },
              { id: 'b', text: 'Det ble erstattet av det danske kasussystemet', isCorrect: false },
              { id: 'c', text: 'Det ble utvidet med nye kasus', isCorrect: false },
              { id: 'd', text: 'Det brot sammen fordi sprakoverforingen mellom generasjonene sviktet', isCorrect: true },
            ],
            solution: 'Nar sa mange mennesker dode og samfunnsstrukturene brot sammen, ble de gamle boyningsmonstrene ikke lenger overfort noye fra generasjon til generasjon. Kasusendelsene falt bort og spraket ble forenklet. Endringene var allerede i gang, men pesten fremskyndet dem dramatisk.',
          },
        ],
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
        task: 'Test deg selv pa kasussystemet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-1-n-quiz3-q0',
            task: 'Hvor finner vi spor av det gamle kasussystemet i moderne norsk?',
            options: [
              { id: 'a', text: 'I boyningen av substantiv (hus-huset-hus-husene)', isCorrect: false },
              { id: 'b', text: 'I verbboyningen (a ga - gar - gikk)', isCorrect: false },
              { id: 'c', text: 'Kasussystemet er helt borte fra moderne norsk', isCorrect: false },
              { id: 'd', text: 'I pronomen som "jeg/meg", "han/ham"', isCorrect: true },
            ],
            solution: 'Pronomenene vare viser fortsatt spor av kasussystemet. "Jeg" og "meg", "du" og "deg", "han" og "ham" - dette er nominativ og akkusativ/dativ-former som har overlevd fra norront. Substantivene har derimot mistet kasusendelsene.',
          },
          {
            id: 'norsk-vg2-4-1-n-quiz3-q1',
            task: 'Hva fortalte kasusendelsene i norront?',
            options: [
              { id: 'a', text: 'Hvilket kjonn ordet hadde', isCorrect: false },
              { id: 'b', text: 'Hvilken funksjon ordet hadde i setningen (subjekt, objekt osv.)', isCorrect: true },
              { id: 'c', text: 'Om ordet var i entall eller flertall', isCorrect: false },
              { id: 'd', text: 'Om handlingen skjedde i fortid eller natid', isCorrect: false },
            ],
            solution: 'Kasusendelsene i norront fortalte hvilken funksjon et ord hadde i setningen. Nominativ viste subjekt, akkusativ viste direkte objekt, dativ viste indirekte objekt, og genitiv viste eierskap. Dette betydde at ordrekkefølgen kunne vaere ganske fri.',
          },
          {
            id: 'norsk-vg2-4-1-n-quiz3-q2',
            task: 'Hvorfor kan islendinger fortsatt lese sagaene i original?',
            options: [
              { id: 'a', text: 'Fordi sagaene er skrevet pa et enkelt sprak', isCorrect: false },
              { id: 'b', text: 'Fordi Island har bevart hele kasussystemet og nesten samme grammatikk som norront', isCorrect: true },
              { id: 'c', text: 'Fordi alle islendinger laerer norront pa skolen', isCorrect: false },
              { id: 'd', text: 'Fordi sagaene er oversatt til moderne islandsk', isCorrect: false },
            ],
            solution: 'Island har bevart hele kasussystemet med fire kasus, akkurat som i norront. En islending i dag boyer fortsatt substantiv pa nesten samme mate som vikingene, og kan derfor lese sagaene i original uten full oversettelse.',
          },
        ],
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
        task: 'Test deg selv pa lavtysk pavirkning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-1-n-quiz4-q0',
            task: 'Hvorfor fikk lavtysk sa stor innflytelse pa norsk i middelalderen?',
            options: [
              { id: 'a', text: 'Fordi Norge var i krig med Tyskland', isCorrect: false },
              { id: 'b', text: 'Fordi Hansaforbundet dominerte handelen og tyske kjopmann etablerte seg i Norge', isCorrect: true },
              { id: 'c', text: 'Fordi kongen var tysk', isCorrect: false },
              { id: 'd', text: 'Fordi lavtysk var kirkens sprak', isCorrect: false },
            ],
            solution: 'Hansaforbundet dominerte handelen i Nordsjoomradet, og tyske kjopmann var sterkt til stede i norske byer, saerlig i Bergen. Lavtysk var handelens sprak, og gjennom daglig kontakt i handel og handverk kom tusenvis av lavtyske ord inn i norsk.',
          },
          {
            id: 'norsk-vg2-4-1-n-quiz4-q1',
            task: 'Hvilke av disse ordene er lavtyske lanord?',
            options: [
              { id: 'a', text: 'Fjord, bre, elv', isCorrect: false },
              { id: 'b', text: 'Saga, ting, jarl', isCorrect: false },
              { id: 'c', text: 'Betale, flink, snekker, bukse', isCorrect: true },
              { id: 'd', text: 'Ski, slalom, fjell', isCorrect: false },
            ],
            solution: 'Ord som betale, flink, snekker, bukse, arbeid, handel og plass er alle lavtyske lanord. Omtrent en fjerdedel av ordforradet i moderne norsk stammer fra lavtysk - saerlig ord knyttet til handel, handverk og dagligliv.',
          },
          {
            id: 'norsk-vg2-4-1-n-quiz4-q2',
            task: 'Hvorfor ble islandsk mindre pavirket av lavtysk enn norsk?',
            options: [
              { id: 'a', text: 'Fordi islendingene nektet a handle med hanseatene', isCorrect: false },
              { id: 'b', text: 'Fordi Island hadde et sterkere militar', isCorrect: false },
              { id: 'c', text: 'Fordi Island la langt fra handelsrutene', isCorrect: true },
              { id: 'd', text: 'Fordi islandsk var for vanskelig for tyske kjopmann a laere', isCorrect: false },
            ],
            solution: 'Island la langt fra de viktige handelsrutene i Nordsjoomradet og hadde derfor mye mindre kontakt med hanseatiske kjopmann. Resultatet er at islandsk i dag har et ordforrad som ligger naermere norront, mens norsk har mange flere lavtyske lanord.',
          },
        ],
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
        task: 'Test deg selv pa islandsk og sprakendring:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-1-n-quiz5-q0',
            task: 'Hvorfor har islandsk bevart mer av det norrone spraket enn norsk?',
            options: [
              { id: 'a', text: 'Fordi Island var isolert og hadde en ubrutt skrifttradisjon', isCorrect: true },
              { id: 'b', text: 'Fordi islendingene bestemte seg for a ikke endre spraket', isCorrect: false },
              { id: 'c', text: 'Fordi islandsk alltid har vaert et eget sprak', isCorrect: false },
              { id: 'd', text: 'Fordi Norge forbod bruk av norront', isCorrect: false },
            ],
            solution: 'Island var geografisk isolert fra kontinentet, langt fra handelsfater og politiske omveltninger. De hadde ogsa en ubrutt skrifttradisjon der sagaene ble kopiert og lest kontinuerlig. Norge var derimot i union med Danmark, mistet sin skrifttradisjon, og var sterkt pavirket av lavtysk og dansk.',
          },
          {
            id: 'norsk-vg2-4-1-n-quiz5-q1',
            task: 'Hva viser sammenligningen mellom norsk og islandsk om sprakendring generelt?',
            options: [
              { id: 'a', text: 'Alle sprak endrer seg like raskt uansett omstendigheter', isCorrect: false },
              { id: 'b', text: 'Sprak endrer seg ikke av seg selv, men pavirkes av historiske omstendigheter', isCorrect: true },
              { id: 'c', text: 'Isolerte sprak endrer seg raskere enn andre', isCorrect: false },
              { id: 'd', text: 'Skriftsprak endrer seg alltid raskere enn talesprak', isCorrect: false },
            ],
            solution: 'Sammenligningen viser at sprak endrer seg ikke tilfeldig - de formes av historiske omstendigheter. Norge var i union, utsatt for pavirkning og mistet sin skrifttradisjon. Island var isolert og bevarte sin tradisjon. Spraket fulgte historien.',
          },
        ],
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
        task: 'Test deg selv pa hvordan dansk ble Norges skriftsprak:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-2-n-quiz1-q0',
            task: 'Hvilken hendelse var saerlig viktig for at dansk ble kirkesprak i Norge?',
            options: [
              { id: 'a', text: 'Kalmarunionen i 1397', isCorrect: false },
              { id: 'b', text: 'Reformasjonen i 1536', isCorrect: true },
              { id: 'c', text: 'Svartedauden i 1349', isCorrect: false },
              { id: 'd', text: 'Norges selvstendighet i 1814', isCorrect: false },
            ],
            solution: 'Reformasjonen i 1536 innforte den danske Bibelen og dansk som kirkesprak. Kirken var sentral i folks liv og i utdanning, sa dette fikk stor betydning for sprakutviklingen. Fra na var det danske ord folk horte i kirken og laerte a lese i.',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz1-q1',
            task: 'Hvorfor hadde trykkpressene betydning for at norsk dodd ut som skriftsprak?',
            options: [
              { id: 'a', text: 'De forste trykkpressene i Norge trykket bare pa norsk', isCorrect: false },
              { id: 'b', text: 'Trykkpressene fantes ikke i Norge - all litteratur ble trykket i Kobenhavn pa dansk', isCorrect: true },
              { id: 'c', text: 'Trykkpressene gjorde det lettere a laere norront', isCorrect: false },
              { id: 'd', text: 'Trykkpressene spredte svenske boker i Norge', isCorrect: false },
            ],
            solution: 'Trykkpressene fantes ikke i Norge pa 1500-tallet. All litteratur nordmenn leste ble trykket i Kobenhavn pa dansk. De forste bokene trykket i Norge kom forst pa 1600-tallet. Dette forsterket dansk som det dominerende skriftspraket.',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz1-q2',
            task: 'Hva var den gradvise prosessen som forte til at dansk tok over som skriftsprak?',
            options: [
              { id: 'a', text: 'Kalmarunionen forte til felles administrasjon, reformasjonen ga dansk kirkesprak, og Norge mistet politisk selvstendighet', isCorrect: true },
              { id: 'b', text: 'Nordmenn bestemte seg kollektivt for a ga over til dansk', isCorrect: false },
              { id: 'c', text: 'Dansk ble innfort med makt gjennom en enkelt kongelig befaling', isCorrect: false },
              { id: 'd', text: 'Svartedauden utryddet alle som kunne skrive norsk', isCorrect: false },
            ],
            solution: 'Det var en gradvis prosess over flere hundre ar: Kalmarunionen (1397) ga felles administrasjon, reformasjonen (1536) innforte dansk Bibel og kirkesprak, og Norge mistet sin siste politiske selvstendighet. Alle embetsmenn var enten danske eller utdannet i Danmark.',
          },
        ],
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
        task: 'Test deg selv pa norsk i dansketiden:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-2-n-quiz2-q0',
            task: 'Hva var "dannet dagligtale" i dansketiden?',
            options: [
              { id: 'a', text: 'Det samme som norrone dialekter', isCorrect: false },
              { id: 'b', text: 'Ren dansk slik den ble snakket i Kobenhavn', isCorrect: false },
              { id: 'c', text: 'Dansk med norsk uttale og noen norske ord, brukt av de utdannede', isCorrect: true },
              { id: 'd', text: 'Et hemmelig sprak brukt av motstandsbevegelsen', isCorrect: false },
            ],
            solution: '"Dannet dagligtale" var spraket til de utdannede i byene - embetsmenn, prester, borgerskapet. Det var dansk i grunnstrukturen, men med norsk uttale og noen norske ord. Det var dette Knud Knudsen mente burde vaere grunnlaget for et norsk skriftsprak.',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz2-q1',
            task: 'Hva var det saerlige problemet med spraksituasjonen i Norge under dansketiden?',
            options: [
              { id: 'a', text: 'Folk kunne verken lese eller skrive', isCorrect: false },
              { id: 'b', text: 'Det var et gap mellom talespraket (norsk) og skriftspraket (dansk)', isCorrect: true },
              { id: 'c', text: 'Alle dialektene dode ut', isCorrect: false },
              { id: 'd', text: 'Dansk og norsk var helt identiske sprak', isCorrect: false },
            ],
            solution: 'Det spraket folk snakket - enten dialekt eller dannet dagligtale - lignet ikke det spraket de skrev (dansk). Dette gapet mellom tale og skrift fantes ikke i Danmark, der folk snakket mer eller mindre slik de skrev. Det var dette gapet Aasen og Knudsen ville tette.',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz2-q2',
            task: 'Hvordan overlevde norsk sprak gjennom 400 ar med danskestyre?',
            options: [
              { id: 'a', text: 'Gjennom hemmelig undervisning i norsk pa skolene', isCorrect: false },
              { id: 'b', text: 'Gjennom skriftlige dokumenter pa norsk', isCorrect: false },
              { id: 'c', text: 'Gjennom at bonder, fiskere og vanlige folk fortsatte a snakke sine dialekter', isCorrect: true },
              { id: 'd', text: 'Gjennom norsk litteratur trykket i utlandet', isCorrect: false },
            ],
            solution: 'Norsk levde videre som talesprak i dialektene. Bondene, fiskerne og vanlige folk fortsatte a snakke sine dialekter som var direktearvtakere fra norront og mellomnorsk. Spraket forsvant fra papiret, men levde videre i munnen pa folk.',
          },
        ],
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
        task: 'Test deg selv pa Aasen og Knudsen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-2-n-quiz3-q0',
            task: 'Hva var hovedforskjellen mellom Aasens og Knudsens strategier?',
            options: [
              { id: 'a', text: 'Aasen ville behold dansk, Knudsen ville innfore svensk', isCorrect: false },
              { id: 'b', text: 'Aasen bygde nytt sprak fra dialektene, Knudsen ville fornorske dansken gradvis', isCorrect: true },
              { id: 'c', text: 'Aasen ville ha ett sprak, Knudsen ville ha to', isCorrect: false },
              { id: 'd', text: 'Aasen konsentrerte seg om byene, Knudsen om bygdene', isCorrect: false },
            ],
            solution: 'Ivar Aasen bygde landsmal (nynorsk) fra bunnen basert pa norske dialekter. Knud Knudsen ville fornorske det eksisterende dansk-norske skriftspraket gradvis, basert pa "dannet dagligtale". Begge ville ha et norsk sprak, men hadde ulike mater a komme dit pa.',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz3-q1',
            task: 'Hva kjennetegnet Aasens landsmal?',
            options: [
              { id: 'a', text: 'Det var basert pa dansk grammatikk med norske ord', isCorrect: false },
              { id: 'b', text: 'Det var en kopi av islandsk', isCorrect: false },
              { id: 'c', text: 'Det hadde a-endelser i infinitiv, tre kjonn konsekvent, og ordforrad fra dialektene', isCorrect: true },
              { id: 'd', text: 'Det var identisk med "dannet dagligtale"', isCorrect: false },
            ],
            solution: 'Aasens landsmal (nynorsk) hadde a-endelser i infinitiv (kasta, ikkje kaste), tre grammatiske kjonn brukt konsekvent, og et ordforrad hentet fra norske dialekter med norront som forbilde. Det var bygget fra bunnen basert pa det som var felles for dialektene.',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz3-q2',
            task: 'Hvorfor endte Norge opp med to skriftsprak?',
            options: [
              { id: 'a', text: 'Fordi Stortinget ikke klarte a bestemme seg', isCorrect: false },
              { id: 'b', text: 'Fordi to ulike og berettigede svar pa det samme problemet begge fikk tilhengere', isCorrect: true },
              { id: 'c', text: 'Fordi Sverige krevde det i unionsopplosningen', isCorrect: false },
              { id: 'd', text: 'Fordi det var umulig a fornorske dansk', isCorrect: false },
            ],
            solution: 'Norge fikk to skriftsprak fordi bade Aasens og Knudsens strategier hadde noe for seg. Aasen bygde et genuint norsk sprak fra dialektene, mens Knudsen fornorsket den eksisterende dansken praktisk. Begge losningene fikk tilhengere, og begge overlevde.',
          },
        ],
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
        task: 'Test deg selv pa fornorskingsreformene:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-2-n-quiz4-q0',
            task: 'Hva innforte rettskrivningsreformen i 1907?',
            options: [
              { id: 'a', text: 'Nynorsk som obligatorisk sidemaal', isCorrect: false },
              { id: 'b', text: 'Valgfrihet mellom bokmal og nynorsk', isCorrect: false },
              { id: 'c', text: 'Obligatoriske harde konsonanter (bok, gate, gap)', isCorrect: true },
              { id: 'd', text: 'A-endelser i alle hunkjonnsord', isCorrect: false },
            ],
            solution: 'Reformen i 1907 innforte obligatoriske harde konsonanter - "bok" i stedet for "bog", "gate" i stedet for "gade". Dette speilet norsk uttale, der vi alltid hadde sagt ordene med hard konsonant selv om vi skrev den danske formen.',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz4-q1',
            task: 'Hva var malet med den radikale reformen i 1938?',
            options: [
              { id: 'a', text: 'A gjore bokmal mer likt dansk', isCorrect: false },
              { id: 'b', text: 'A avskaffe nynorsk helt', isCorrect: false },
              { id: 'c', text: 'A naerme bokmal og nynorsk til hverandre mot et framtidig "samnorsk"', isCorrect: true },
              { id: 'd', text: 'A innfore engelsk som tredje offisielt sprak', isCorrect: false },
            ],
            solution: 'Reformen i 1938 hadde et politisk mal om a naerme bokmal og nynorsk til hverandre i retning av et framtidig "samnorsk". Mange folkelige former ble obligatoriske, som a-endelser i hunkjonnsord ("boka") og diftonger ("stein").',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz4-q2',
            task: 'Hvorfor motte 1938-reformen sa stor motstand?',
            options: [
              { id: 'a', text: 'Fordi den innforte for mange engelske ord', isCorrect: false },
              { id: 'b', text: 'Fordi den fjernet alle danske trekk fra bokmal', isCorrect: false },
              { id: 'c', text: 'Fordi den var for mild og endret for lite', isCorrect: false },
              { id: 'd', text: 'Fordi konservative bokmalsbrukere protesterte mot de "radikale" folkelige formene', isCorrect: true },
            ],
            solution: 'Saerlig konservative bokmalsbrukere protesterte mot reformen. Foreldreaksjonen pa 1950-tallet rettet seg mot "radikalt" sprak i skolebokene. De onsket a beholde de konservative formene naermere dansk. Motstanden forte til at noen endringer ble rullet tilbake.',
          },
        ],
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
        task: 'Test deg selv pa bokmal i dag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-2-n-quiz5-q0',
            task: 'Hva kjennetegner bokmal i forhold til dansk og nynorsk?',
            options: [
              { id: 'a', text: 'Bokmal er identisk med moderne dansk', isCorrect: false },
              { id: 'b', text: 'Bokmal er identisk med nynorsk', isCorrect: false },
              { id: 'c', text: 'Bokmal har dansk struktur men norske lydtrekk, og ligger mellom dansk og nynorsk', isCorrect: true },
              { id: 'd', text: 'Bokmal er helt forskjellig fra bade dansk og nynorsk', isCorrect: false },
            ],
            solution: 'Bokmal er et unikt sprak som ligger mellom dansk og nynorsk. Det har beholdt mye av den danske strukturen og ordforradet, men har fatt norske lydtrekk (harde konsonanter, diftonger) og noen norske ordformer. Det er resultatet av 400 ars danskestyre og 200 ars fornorsking.',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz5-q1',
            task: 'Hva er spesielt med valgfriheten i bokmal?',
            options: [
              { id: 'a', text: 'Man kan velge mellom norsk og engelsk stavmate', isCorrect: false },
              { id: 'b', text: 'Man kan velge mellom konservative former naer dansk og radikale former naer dialektene', isCorrect: true },
              { id: 'c', text: 'Man kan velge a skrive uten grammatiske regler', isCorrect: false },
              { id: 'd', text: 'Man kan fritt blande bokmal og nynorsk i samme tekst', isCorrect: false },
            ],
            solution: 'Bokmal har en unik systematisk valgfrihet bygget inn i rettskrivningen. Du kan velge mellom konservative former naer dansk ("boken", "sten", "sne") og radikale former naer dialektene ("boka", "stein", "sno"). Ingen andre sprak har en slik ordning.',
          },
          {
            id: 'norsk-vg2-4-2-n-quiz5-q2',
            task: 'Hvilken tendens ser vi i bokmal over tid?',
            options: [
              { id: 'a', text: 'Bokmal naermer seg dansk igjen', isCorrect: false },
              { id: 'b', text: 'Bokmal erstattes av engelsk', isCorrect: false },
              { id: 'c', text: 'Fornorskningen fortsetter - mer norske former velges av hver generasjon', isCorrect: true },
              { id: 'd', text: 'Bokmal og nynorsk slas sammen til ett sprak', isCorrect: false },
            ],
            solution: 'Tendensen over tid har vaert mot mer fornorskede former. "Boka" er vanligere na enn for femti ar siden, og "stein" har nesten helt erstattet "sten". Fornorskningen fortsetter langsomt men sikkert gjennom valgene hver generasjon gjor.',
          },
        ],
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
        task: 'Test deg selv pa det skandinaviske sprakfellesskapet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-3-n-quiz1-q0',
            task: 'Hva er felles for alle de skandinaviske sprakene?',
            options: [
              { id: 'a', text: 'De har alle tonelag', isCorrect: false },
              { id: 'b', text: 'De har alle blote konsonanter', isCorrect: false },
              { id: 'c', text: 'De stammer alle fra norront og har likt grunnvokabular og etterstilt artikkel', isCorrect: true },
              { id: 'd', text: 'De har alle tre grammatiske kjonn', isCorrect: false },
            ],
            solution: 'Alle skandinaviske sprak stammer fra norront og deler grunnleggende trekk: likt grunnvokabular (hus, mann, ga), etterstilt artikkel (huset, mannen), og lignende setningsstruktur. Detaljene varierer, men fundamentet er felles.',
          },
          {
            id: 'norsk-vg2-4-3-n-quiz1-q1',
            task: 'Hvilken deling begynte allerede i vikingtiden?',
            options: [
              { id: 'a', text: 'Delingen mellom bokmal og nynorsk', isCorrect: false },
              { id: 'b', text: 'Delingen mellom ostskandinavisk (dansk/svensk) og vestskandinavisk (norsk/islandsk)', isCorrect: true },
              { id: 'c', text: 'Delingen mellom germansk og romansk', isCorrect: false },
              { id: 'd', text: 'Delingen mellom skriftsprak og talesprak', isCorrect: false },
            ],
            solution: 'Allerede i vikingtiden begynte ostskandinavisk (som ble dansk og svensk) a skille seg fra vestskandinavisk (som ble norsk, islandsk og faeroysk). Forskjellene var sma i begynnelsen, men vokste over tid og ble forsterket av politiske grenser.',
          },
        ],
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
        task: 'Test deg selv pa dansk sprak:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-3-n-quiz2-q0',
            task: 'Hva er "stod" i dansk?',
            options: [
              { id: 'a', text: 'En spesiell melodi i setningene', isCorrect: false },
              { id: 'b', text: 'En glottal lukkelyd - som en liten pause midt i ordet', isCorrect: true },
              { id: 'c', text: 'En spesiell mate a skrive pa', isCorrect: false },
              { id: 'd', text: 'Et dansk dialektord', isCorrect: false },
            ],
            solution: 'Stod er en glottal lukkelyd som finnes i dansk, men ikke i norsk eller svensk. Det hoeres ut som et lite "hikk" eller pause midt i ordet. Dette er en av grunnene til at dansk er vanskelig a forstå muntlig for andre skandinaver.',
          },
          {
            id: 'norsk-vg2-4-3-n-quiz2-q1',
            task: 'Hva menes med at dansk "svelger" lyder?',
            options: [
              { id: 'a', text: 'Dansker snakker veldig lavt', isCorrect: false },
              { id: 'b', text: 'Dansk uttaler alle konsonanter ekstra tydelig', isCorrect: false },
              { id: 'c', text: 'Dansk reduserer konsonanter sa de blotes eller nesten forsvinner', isCorrect: true },
              { id: 'd', text: 'Dansk har faerre ord enn norsk og svensk', isCorrect: false },
            ],
            solution: 'I dansk uttale reduseres mange konsonanter til nesten ingenting. Der norsk og svensk uttaler konsonanter tydelig, bloter eller fjerner dansk dem. "Jeg hedder Peter" kan hoeres ut som "je heller Peter" - konsonantene blotes eller forsvinner.',
          },
          {
            id: 'norsk-vg2-4-3-n-quiz2-q2',
            task: 'Hvorfor er skriftlig dansk lettere a forstå enn muntlig dansk for nordmenn?',
            options: [
              { id: 'a', text: 'Fordi skriftlig dansk bruker latinske bokstaver', isCorrect: false },
              { id: 'b', text: 'Fordi skriftlig dansk ligner bokmal, men uttalen er svart ulik', isCorrect: true },
              { id: 'c', text: 'Fordi dansker skriver pa norsk nar de henvender seg til nordmenn', isCorrect: false },
              { id: 'd', text: 'Fordi dansk rettskriving ble endret for a ligne norsk', isCorrect: false },
            ],
            solution: 'Skriftlig er dansk naert bokmal fordi bokmal opprinnelig var dansk som ble fornorsket. Vi gjenkjenner ordene nar vi leser dem. Men dansk uttale er sa forskjellig fra skriftbildet - med stod, blote konsonanter og lydreduksjon - at muntlig forstaelse er mye vanskeligere.',
          },
        ],
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
        task: 'Test deg selv pa svensk og tonelag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-3-n-quiz3-q0',
            task: 'Hva er tonelag?',
            options: [
              { id: 'a', text: 'En spesiell mate a synge pa', isCorrect: false },
              { id: 'b', text: 'En dansk uttaleform', isCorrect: false },
              { id: 'c', text: 'Betoning pa siste stavelse', isCorrect: false },
              { id: 'd', text: 'Bruk av ordmelodi til a skille ord som ellers er like', isCorrect: true },
            ],
            solution: 'Tonelag er bruk av tonehoyde (ordmelodi) til a skille ord som ellers ville vaert like. Norsk og svensk har tonelag - for eksempel skilles "bonder" og "bonner" av melodien. Dansk har mistet tonelag og bruker stod i stedet.',
          },
          {
            id: 'norsk-vg2-4-3-n-quiz3-q1',
            task: 'Hvilke sprak har tonelag, og hvilket har mistet det?',
            options: [
              { id: 'a', text: 'Bare svensk har tonelag', isCorrect: false },
              { id: 'b', text: 'Norsk og svensk har tonelag, dansk har mistet det', isCorrect: true },
              { id: 'c', text: 'Alle tre skandinaviske sprak har tonelag', isCorrect: false },
              { id: 'd', text: 'Bare dansk har tonelag', isCorrect: false },
            ],
            solution: 'Bade norsk og svensk har bevart tonelag fra norront. Dansk har mistet tonelag og bruker i stedet stod (glottal lukkelyd). Dette er en av grunnene til at norsk og svensk hoeres mer "musikalske" ut enn dansk.',
          },
          {
            id: 'norsk-vg2-4-3-n-quiz3-q2',
            task: 'Hva er en "falsk venn" mellom norsk og svensk?',
            options: [
              { id: 'a', text: 'Et ord som finnes pa begge sprak men betyr det samme', isCorrect: false },
              { id: 'b', text: 'Et ord som ser likt ut men har ulik betydning', isCorrect: true },
              { id: 'c', text: 'Et ord som bare finnes pa ett av sprakene', isCorrect: false },
              { id: 'd', text: 'Et ord som er lant fra engelsk', isCorrect: false },
            ],
            solution: 'En "falsk venn" er et ord som ser likt ut pa to sprak men har ulik betydning. For eksempel betyr "rolig" pa svensk "morsom", ikke "avslappet" som pa norsk. "Rar" kan bety "sot/kjaer" pa svensk, ikke bare "merkelig".',
          },
        ],
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
        task: 'Test deg selv pa norsk mellomposisjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-3-n-quiz4-q0',
            task: 'Hvorfor forstar nordmenn ofte svensk og dansk bedre enn de forstar hverandre?',
            options: [
              { id: 'a', text: 'Fordi norsk er det eldste skandinaviske spraket', isCorrect: false },
              { id: 'b', text: 'Fordi nordmenn er smartere', isCorrect: false },
              { id: 'c', text: 'Fordi bokmal ligner dansk i skrift og norsk uttale ligner svensk, pluss vane med variasjon', isCorrect: true },
              { id: 'd', text: 'Fordi Norge ligger geografisk naermere bade Sverige og Danmark', isCorrect: false },
            ],
            solution: 'Nordmenn har en fordel fordi bokmal ligner dansk skriftlig (vi gjenkjenner ordene) og norsk uttale ligner svensk (vi gjenkjenner lydene). I tillegg gjor erfaringen med to skriftsprak og mange dialekter oss vant til a tolke spraklig variasjon.',
          },
          {
            id: 'norsk-vg2-4-3-n-quiz4-q1',
            task: 'Hvorfor gjor norske dialekter og to skriftsprak nordmenn bedre til a forstå nabosprakene?',
            options: [
              { id: 'a', text: 'Fordi dialektene ligner svensk og dansk direkte', isCorrect: false },
              { id: 'b', text: 'Fordi trening i a tolke spraklig variasjon gjor oss mer fleksible', isCorrect: true },
              { id: 'c', text: 'Fordi norske dialekter er identiske med svensk', isCorrect: false },
              { id: 'd', text: 'Fordi nordmenn laerer svensk og dansk pa skolen', isCorrect: false },
            ],
            solution: 'Nordmenn er vant til a tolke spraklig variasjon - vi har to skriftsprak og dialekter som er ekstremt forskjellige. En nordlending og en sogning snakker nesten som ulike sprak. Denne treningen gjor oss mer fleksible nar vi moter andre skandinaviske sprak.',
          },
        ],
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
        task: 'Test deg selv pa ordforrad og falske venner:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-3-n-quiz5-q0',
            task: 'Hva betyr "rolig" pa svensk?',
            options: [
              { id: 'a', text: 'Morsom, underholdende', isCorrect: true },
              { id: 'b', text: 'Avslappet, stille', isCorrect: false },
              { id: 'c', text: 'Trist, melankolsk', isCorrect: false },
              { id: 'd', text: 'Rask, travel', isCorrect: false },
            ],
            solution: '"Rolig" pa svensk betyr "morsom" eller "underholdende" - det motsatte av hva det betyr pa norsk! Dette er en klassisk "falsk venn" mellom sprakene. Nar en svenske sier "det var roligt", mener de "det var goy", ikke "det var stille og fredelig".',
          },
          {
            id: 'norsk-vg2-4-3-n-quiz5-q1',
            task: 'Hva heter "vindu" pa svensk?',
            options: [
              { id: 'a', text: 'Vindauga', isCorrect: false },
              { id: 'b', text: 'Vindue', isCorrect: false },
              { id: 'c', text: 'Fonster', isCorrect: true },
              { id: 'd', text: 'Gluggi', isCorrect: false },
            ],
            solution: 'Pa svensk heter vindu "fonster" (fra latin via tysk), mens norsk og dansk bruker "vindu"/"vindue" (fra norront vindauga, "vindoye"). Dette viser at svensk noen ganger har utviklet helt egne ord der norsk og dansk deler de samme.',
          },
          {
            id: 'norsk-vg2-4-3-n-quiz5-q2',
            task: 'Hva betyr det norske ordet "rask" pa svensk?',
            options: [
              { id: 'a', text: 'Rask', isCorrect: false },
              { id: 'b', text: 'Snabb', isCorrect: true },
              { id: 'c', text: 'Hurtig', isCorrect: false },
              { id: 'd', text: 'Flink', isCorrect: false },
            ],
            solution: 'Det norske "rask" tilsvarer "snabb" pa svensk og "hurtig" pa dansk. Disse ordforradforskjellene kan skape forvirring, men nar du forst laerer dem, blir det mye lettere a forstå nabosprakene.',
          },
        ],
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
        task: 'Test deg selv pa bokmal og nynorsk i dag:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-4-n-quiz1-q0',
            task: 'Hva faststlar spraklovet av 2021 om bokmal og nynorsk?',
            options: [
              { id: 'a', text: 'Bokmal skal vaere det primaere nasjonalspraket', isCorrect: false },
              { id: 'b', text: 'Nynorsk skal fases ut over tid', isCorrect: false },
              { id: 'c', text: 'Begge sprak er likeverdige, og det offentlige har saerlig ansvar for a styrke nynorsk', isCorrect: true },
              { id: 'd', text: 'Alle ma laere tre sprak: bokmal, nynorsk og samisk', isCorrect: false },
            ],
            solution: 'Spraklovet av 2021 faststlar at bokmal og nynorsk er likeverdige, og at det offentlige har et saerlig ansvar for a styrke nynorsk som det minst brukte spraket. Dette markerer et skifte fra samnorskpolitikk til tosprakspolitikk.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz1-q1',
            task: 'Omtrent hvor stor andel av norske elever har nynorsk som hovedmal?',
            options: [
              { id: 'a', text: 'Ca. 50 prosent', isCorrect: false },
              { id: 'b', text: 'Ca. 30 prosent', isCorrect: false },
              { id: 'c', text: 'Ca. 12 prosent', isCorrect: true },
              { id: 'd', text: 'Mindre enn 1 prosent', isCorrect: false },
            ],
            solution: 'Rundt 12 prosent av norske elever har nynorsk som hovedmal, mens ca. 87 prosent har bokmal. Nynorsk er altsa et mindretallssprak, men et mindretall pa flere hundre tusen mennesker. Geografisk er nynorsk staerkest pa Vestlandet og i dalstrokene.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz1-q2',
            task: 'Hva er et praktisk problem med formell likestilling mellom bokmal og nynorsk?',
            options: [
              { id: 'a', text: 'Det er for dyrt a trykke boker pa to sprak', isCorrect: false },
              { id: 'b', text: 'Bokmal dominerer i medier og naeringsliv, sa formell likestilling gir ikke reell likestilling', isCorrect: true },
              { id: 'c', text: 'Nynorsk er for vanskelig a laere', isCorrect: false },
              { id: 'd', text: 'Ingen vil bruke nynorsk frivillig', isCorrect: false },
            ],
            solution: 'Selv om sprakene er formelt likestilte, dominerer bokmal i mediene, i naeringsliv og i riksdekkende aviser og TV. Nynorskbrukere opplever ofte a matte forsvare sitt sprakvalg. Spraklovet erkjenner dette ved a gi det offentlige saerlig ansvar for a styrke nynorsk.',
          },
        ],
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
        task: 'Test deg selv pa dialekter i Norge:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-4-n-quiz2-q0',
            task: 'Hva er en "regiolekt"?',
            options: [
              { id: 'a', text: 'Et nytt skriftsprak for en region', isCorrect: false },
              { id: 'b', text: 'En storre regional dialekt som erstatter lokale dialekter', isCorrect: true },
              { id: 'c', text: 'Dialekten i hovedstaden', isCorrect: false },
              { id: 'd', text: 'Et slanguttrykk for dialekt', isCorrect: false },
            ],
            solution: 'Regiolekt er en storre, regional dialektvarietet som erstatter de sma, lokale dialektene. Eksempel: "bergensk" som en felles malfore for Bergensregionen, i stedet for de mange lokale variantene som fantes for. Dette kan vaere fremtidens dialektlandskap i Norge.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz2-q1',
            task: 'Hva gjor Norges dialektsituasjon unik sammenlignet med de fleste andre land?',
            options: [
              { id: 'a', text: 'Norge har faerre dialekter enn andre land', isCorrect: false },
              { id: 'b', text: 'Norske dialekter er identiske med hverandre', isCorrect: false },
              { id: 'c', text: 'Dialektene har hoy status og det finnes ingen standarduttale', isCorrect: true },
              { id: 'd', text: 'Bare eldre mennesker snakker dialekt i Norge', isCorrect: false },
            ],
            solution: 'I de fleste land finnes det en standarduttale for offisielle sammenhenger. I Norge finnes det ingen slik standard - statsministre snakker dialekt pa Stortinget, NRK-programledere har alle slags malforer. Dette er unikt.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz2-q2',
            task: 'Hva truer de lokale dialektene i dag?',
            options: [
              { id: 'a', text: 'Lovforbud mot dialektbruk', isCorrect: false },
              { id: 'b', text: 'Okt mobilitet, medieeksponering og sentralisering', isCorrect: true },
              { id: 'c', text: 'Innvandring fra andre land', isCorrect: false },
              { id: 'd', text: 'Spraklovet av 2021', isCorrect: false },
            ],
            solution: 'Dialektene er under press fra okt mobilitet (folk flytter mer), medieeksponering (alle ser de samme TV-programmene) og sentralisering (flere bor i byene). Resultatet kan bli "regiolekter" - storre regionale dialekter som erstatter de sma, lokale variantene.',
          },
        ],
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
        task: 'Test deg selv pa samisk og minoritetssprak:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-4-n-quiz3-q0',
            task: 'Hva menes med "revitalisering" av et sprak?',
            options: [
              { id: 'a', text: 'A forby spraket i offentligheten', isCorrect: false },
              { id: 'b', text: 'A erstatte spraket med et annet', isCorrect: false },
              { id: 'c', text: 'A bygge opp igjen og styrke et truet sprak', isCorrect: true },
              { id: 'd', text: 'A registrere spraket i en database', isCorrect: false },
            ],
            solution: 'Revitalisering betyr a bygge opp igjen og styrke et truet sprak. For samisk innebærer dette sprakopplaering, samiske barnehager og skoler, synliggjoring i medier, og stotte til samiske sprakmiljoer. Det er langsomt, krevende arbeid.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz3-q1',
            task: 'Hva var fornorskingspolitikken overfor samene?',
            options: [
              { id: 'a', text: 'En politikk for a laere samer norsk i tillegg til samisk', isCorrect: false },
              { id: 'b', text: 'En politikk som systematisk forsakte a utrydde samisk sprak og kultur', isCorrect: true },
              { id: 'c', text: 'En politikk for a bevare samisk kultur', isCorrect: false },
              { id: 'd', text: 'En politikk der samer fikk velge sprak fritt', isCorrect: false },
            ],
            solution: 'Fornorskingspolitikken fra slutten av 1800-tallet til midten av 1900-tallet forsakte systematisk a utrydde samisk sprak og kultur. Barn ble sendt til internatskoler der de ble straffet for a snakke samisk. Generasjoner vokste opp uten a laere foreldrenes sprak.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz3-q2',
            task: 'Hvilke andre minoritetssprak har saerskilt vern i Norge?',
            options: [
              { id: 'a', text: 'Engelsk, tysk og fransk', isCorrect: false },
              { id: 'b', text: 'Kvensk, romani og norsk tegnsprak', isCorrect: true },
              { id: 'c', text: 'Polsk, arabisk og somali', isCorrect: false },
              { id: 'd', text: 'Islandsk, faeroysk og finsk', isCorrect: false },
            ],
            solution: 'I tillegg til samisk har Norge saerskilt vern for kvensk, romani (romanisprak) og norsk tegnsprak. Disse representerer spraklig mangfold som samfunnet har valgt a beskytte gjennom lovgivning og stotteordninger.',
          },
        ],
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
        task: 'Test deg selv pa sidemaalsdebatten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-4-n-quiz4-q0',
            task: 'Hva er hovedargumentet FOR obligatorisk sidemaal?',
            options: [
              { id: 'a', text: 'Det gir bedre karakterer', isCorrect: false },
              { id: 'b', text: 'Det er billigere enn alternativene', isCorrect: false },
              { id: 'c', text: 'Det sikrer at alle kan begge skriftsprak som del av kulturarven og for demokratisk likestilling', isCorrect: true },
              { id: 'd', text: 'Det gjor norsk lettere a laere for utlendinger', isCorrect: false },
            ],
            solution: 'Hovedargumentet for sidemaal er kulturarv og demokrati - alle nordmenn bor kunne begge skriftsprak som del av var felles kulturarv, og nynorskbrukere skal slippe a bare motta informasjon pa et sprak som ikke er deres eget. Det handler om likestilling og fellesskap.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz4-q1',
            task: 'Hva er hovedargumentet MOT obligatorisk sidemaal?',
            options: [
              { id: 'a', text: 'Sidemaal er for lett og gir ingen utfordring', isCorrect: false },
              { id: 'b', text: 'Det tar tid fra andre fag, mange har ingen praktisk bruk for det, og tvang skaper motvilje', isCorrect: true },
              { id: 'c', text: 'Laererne kan ikke undervise i sidemaal', isCorrect: false },
              { id: 'd', text: 'Det er grunnlovsstridig', isCorrect: false },
            ],
            solution: 'Motargumentene handler om at sidemaal tar tid fra andre fag, at mange aldri bruker det i praksis, at tvang skaper motvilje, og at ressursene kunne brukes bedre pa hovedmalsopplaring. Noen mener ogsa det er et overgrep mot individets valgfrihet.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz4-q2',
            task: 'Hva handler sidemaalsdebatten dypest sett om?',
            options: [
              { id: 'a', text: 'Om norsk grammatikk er for vanskelig', isCorrect: false },
              { id: 'b', text: 'Om Norge bor ha tre offisielle sprak', isCorrect: false },
              { id: 'c', text: 'Om kollektive verdier som kulturarv skal veie tyngre enn individuell frihet og nyttefokus', isCorrect: true },
              { id: 'd', text: 'Om bokmal eller nynorsk er det "riktige" spraket', isCorrect: false },
            ],
            solution: 'Debatten handler i bunn og grunn om hva slags samfunn vi vil ha. Skal kollektive verdier som kulturarv og spraklig likestilling veie tyngst, eller skal individuell frihet og nyttefokus fa forrang? Det finnes ikke et objektivt riktig svar - det er et verdivalg.',
          },
        ],
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
        task: 'Test deg selv pa engelsk og domenetap:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-4-n-quiz5-q0',
            task: 'Hva menes med "domenetap"?',
            options: [
              { id: 'a', text: 'At et sprak far faerre dialekter', isCorrect: false },
              { id: 'b', text: 'At et sprak mister ord fra ordforradet', isCorrect: false },
              { id: 'c', text: 'At et sprak mister bruksomrader til et annet sprak', isCorrect: true },
              { id: 'd', text: 'At et sprak blir vanskeligere a laere', isCorrect: false },
            ],
            solution: 'Domenetap betyr at et sprak mister bruksomrader til et annet sprak - for eksempel at norsk fortrenges av engelsk i akademia eller naeringsliv. Frykten er at norsk blir et sprak for privatlivet, men ikke for viktige samfunnsomrader.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz5-q1',
            task: 'Pa hvilke omrader er faren for domenetap storst i Norge?',
            options: [
              { id: 'a', text: 'I dagliglivet og pa sosiale medier', isCorrect: false },
              { id: 'b', text: 'I akademia og naeringsliv, der engelsk brukes stadig mer', isCorrect: true },
              { id: 'c', text: 'I politikken og offentlig debatt', isCorrect: false },
              { id: 'd', text: 'I barnehager og grunnskoler', isCorrect: false },
            ],
            solution: 'Faren for domenetap er storst i akademia (stadig flere fag pa engelsk, masteroppgaver pa engelsk) og naeringsliv (store selskaper bruker engelsk som konsernsprak). Her kan det oppsta en situasjon der norske fagtermer ikke utvikles fordi alt arbeidet skjer pa engelsk.',
          },
          {
            id: 'norsk-vg2-4-4-n-quiz5-q2',
            task: 'Hva sier sprakloven av 2021 om norsk som nasjonalsprak?',
            options: [
              { id: 'a', text: 'At norsk og engelsk er likestilte nasjonalsprak', isCorrect: false },
              { id: 'b', text: 'At norsk bare er nasjonalsprak i offentlig sektor', isCorrect: false },
              { id: 'c', text: 'At norsk er nasjonalsprak og skal vaere fullverdig samfunnsbaerende sprak pa alle omrader', isCorrect: true },
              { id: 'd', text: 'At norsk ma beskyttes ved a begrense engelskundervisningen', isCorrect: false },
            ],
            solution: 'Sprakloven av 2021 fastslar at norsk er nasjonalsprak og skal vaere det fullverdige, samfunnsbaerende spraket i Norge. Det er en politisk ambisjon om at norsk skal brukes pa alle omrader av samfunnslivet, inkludert akademia og naeringsliv.',
          },
        ],
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
        task: 'Test deg selv pa de tre spraknivane:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-5-n-quiz1-q0',
            task: 'Hvilket sprakniva handler om ordboying og kasussystemer?',
            options: [
              { id: 'a', text: 'Syntaks', isCorrect: false },
              { id: 'b', text: 'Fonologi', isCorrect: false },
              { id: 'c', text: 'Morfologi', isCorrect: true },
              { id: 'd', text: 'Semantikk', isCorrect: false },
            ],
            solution: 'Morfologi (formlare) handler om hvordan ord boyer og bygges opp. Kasussystemer, verbboyning og orddannelse (sammensatte ord) horer til morfologien. Syntaks handler om setningsstruktur, fonologi om lyder.',
          },
          {
            id: 'norsk-vg2-4-5-n-quiz1-q1',
            task: 'Hva studerer man innen syntaks?',
            options: [
              { id: 'a', text: 'Hvordan ord uttales', isCorrect: false },
              { id: 'b', text: 'Hvordan ord boyer', isCorrect: false },
              { id: 'c', text: 'Hvordan ord ordnes i setninger og setningsstruktur', isCorrect: true },
              { id: 'd', text: 'Hvordan ord endrer betydning over tid', isCorrect: false },
            ],
            solution: 'Syntaks (setningslaere) studerer hvordan ord ordnes i setninger. At bade norsk og norront folger V2-regelen (verbet pa andre plass) er syntaks. At vi sier "jeg leser ikke boka" med nekting etter verbet, er syntaks. Ordrekkefoljens regler horer hit.',
          },
          {
            id: 'norsk-vg2-4-5-n-quiz1-q2',
            task: 'At norsk har tonelag mens dansk har stod - hvilket sprakniva tilhorer dette?',
            options: [
              { id: 'a', text: 'Morfologi', isCorrect: false },
              { id: 'b', text: 'Syntaks', isCorrect: false },
              { id: 'c', text: 'Pragmatikk', isCorrect: false },
              { id: 'd', text: 'Fonologi', isCorrect: true },
            ],
            solution: 'Fonologi (lydlaere) studerer sprakens lydsystem. Tonelag, stod, vokalreduksjon og konsonantendringer er alle fonologiske fenomener. Med disse tre kategoriene - morfologi, syntaks, fonologi - kan du plassere de fleste sprakforskjeller.',
          },
        ],
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
        task: 'Test deg selv pa kasussynkretisme:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-5-n-quiz2-q0',
            task: 'Hva er kasussynkretisme?',
            options: [
              { id: 'a', text: 'At et sprak far flere kasusformer over tid', isCorrect: false },
              { id: 'b', text: 'At kasusformer faller sammen til faerre former', isCorrect: true },
              { id: 'c', text: 'At kasus brukes i flere sammenhenger', isCorrect: false },
              { id: 'd', text: 'At kasus later fra ett sprak til et annet', isCorrect: false },
            ],
            solution: 'Kasussynkretisme er nar kasusformer faller sammen over tid. Norront hadde fire kasus (nominativ, akkusativ, dativ, genitiv), men i moderne norsk har disse falt sammen til en grunnform for substantiv. Spor finnes fortsatt i pronomen (jeg/meg).',
          },
          {
            id: 'norsk-vg2-4-5-n-quiz2-q1',
            task: 'Hva ble viktigere da kasusendelsene forsvant fra norsk?',
            options: [
              { id: 'a', text: 'Verbboyningen', isCorrect: false },
              { id: 'b', text: 'Ordrekkefølgen', isCorrect: true },
              { id: 'c', text: 'Uttalen av konsonantene', isCorrect: false },
              { id: 'd', text: 'Antall grammatiske kjonn', isCorrect: false },
            ],
            solution: 'Nar kasusendelsene ikke lenger fortalte hvem som gjor hva i setningen, matte ordrekkefølgen gjore det. Derfor sier vi "hunden biter mannen" og ikke omvendt. Pa norront kunne du sagt det i begge rekkefolger, og endelsene ville vist meningen.',
          },
        ],
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
        task: 'Test deg selv pa fonologiske endringer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-5-n-quiz3-q0',
            task: 'Hva er monoftongering?',
            options: [
              { id: 'a', text: 'At en vokal blir til to vokaler', isCorrect: false },
              { id: 'b', text: 'At to vokaler (diftong) blir til en vokal (monoftong)', isCorrect: true },
              { id: 'c', text: 'At konsonanter forsvinner', isCorrect: false },
              { id: 'd', text: 'At trykket flytter seg i ordet', isCorrect: false },
            ],
            solution: 'Monoftongering er nar en diftong (to vokaler som glir over i hverandre) blir til en monoftong (enkelt vokal). Eksempel: norront "steinn" [stain] -> dansk "sten" [ste:n]. Norsk bevarte diftongen: "stein".',
          },
          {
            id: 'norsk-vg2-4-5-n-quiz3-q1',
            task: 'Hva er vokalreduksjon?',
            options: [
              { id: 'a', text: 'At vokaler forsvinner helt fra ordene', isCorrect: false },
              { id: 'b', text: 'At trykksterke vokaler blir svakere', isCorrect: false },
              { id: 'c', text: 'At trykklette vokaler (a, u, i) reduseres til schwa-lyd (e)', isCorrect: true },
              { id: 'd', text: 'At antall vokaler i spraket oker', isCorrect: false },
            ],
            solution: 'Vokalreduksjon er nar fullverdige vokaler i trykklette stavelser reduseres til schwa-lyd (e). Norront "kalla" ble "kalle", "tunga" ble "tunge", "konungr" ble "konge". Lydene a, u, i i trykklette stavelser ble alle til e - systematisk i tusenvis av ord.',
          },
          {
            id: 'norsk-vg2-4-5-n-quiz3-q2',
            task: 'Hva er forskjellen mellom blote og harde konsonanter i skandinavisk sammenheng?',
            options: [
              { id: 'a', text: 'Blote konsonanter finnes bare i svensk', isCorrect: false },
              { id: 'b', text: 'Dansk har blote (b, d, g) der norsk og svensk har harde (p, t, k)', isCorrect: true },
              { id: 'c', text: 'Harde konsonanter er alltid stumme', isCorrect: false },
              { id: 'd', text: 'Det er ingen reell forskjell mellom dem', isCorrect: false },
            ],
            solution: 'Dansk utviklet blote konsonanter (b, d, g) der norsk og svensk beholdt harde (p, t, k). Eksempler: dansk "bog" vs. norsk "bok", dansk "gade" vs. norsk "gate". Dette er en av de fonologiske forskjellene som gjor dansk vanskelig a forstå muntlig.',
          },
        ],
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
        task: 'Test deg selv pa verbsystemet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-5-n-quiz4-q0',
            task: 'Hva er forskjellen mellom sterke og svake verb?',
            options: [
              { id: 'a', text: 'Sterke verb er lengre enn svake verb', isCorrect: false },
              { id: 'b', text: 'Sterke verb brukes i formelle sammenhenger', isCorrect: false },
              { id: 'c', text: 'Sterke verb boyer ved vokalskifte, svake verb ved a legge til endelse', isCorrect: true },
              { id: 'd', text: 'Svake verb er eldre enn sterke verb', isCorrect: false },
            ],
            solution: 'Sterke verb boyer ved vokalskifte i stammen: bite-bet-bitt, synge-sang-sunget. Svake verb boyer ved a legge til endelse: kaste-kastet-kastet, lese-leste-lest. Over tid har mange sterke verb blitt svake.',
          },
          {
            id: 'norsk-vg2-4-5-n-quiz4-q1',
            task: 'Hva skjedde med personboyning av verb fra norront til moderne norsk?',
            options: [
              { id: 'a', text: 'Den ble mer kompleks med flere former', isCorrect: false },
              { id: 'b', text: 'Den forsvant - vi bruker na samme verbform for alle personer', isCorrect: true },
              { id: 'c', text: 'Den ble erstattet med kasusboying', isCorrect: false },
              { id: 'd', text: 'Den ble bevart uendret', isCorrect: false },
            ],
            solution: 'I norront hadde verbet ulike former for hver person: "ek fer" (jeg reiser), "pu ferr" (du reiser), "ver forum" (vi reiser). I moderne norsk har vi bare en form: "jeg/du/han/vi reiser". Personboyningen forsvant helt.',
          },
          {
            id: 'norsk-vg2-4-5-n-quiz4-q2',
            task: 'Hva var konjunktiv i norront, og finnes det spor av det i moderne norsk?',
            options: [
              { id: 'a', text: 'Konjunktiv var en ordstillingsregel, og den finnes fortsatt', isCorrect: false },
              { id: 'b', text: 'Konjunktiv fantes aldri i norront', isCorrect: false },
              { id: 'c', text: 'Konjunktiv var egne verbformer for onsker og tvil, med spor i uttrykk som "leve kongen!"', isCorrect: true },
              { id: 'd', text: 'Konjunktiv var en mate a stave verb pa', isCorrect: false },
            ],
            solution: 'Konjunktiv var egne verbformer i norront for onsker, tvil og hypotetiske situasjoner. Moderne norsk har nesten mistet dette, men spor finnes i faste uttrykk som "leve kongen!" og "Gud hjelpe meg". Ellers bruker vi hjelpeverb (skulle, ville, kunne) i stedet.',
          },
        ],
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
        task: 'Test deg selv pa a bruke fagsprak i praksis:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'norsk-vg2-4-5-n-quiz5-q0',
            task: 'Hvordan beskriver du faglig at norsk har "stein" mens dansk har "sten"?',
            options: [
              { id: 'a', text: 'Dansk har feil stavmate', isCorrect: false },
              { id: 'b', text: 'Norsk bevarer diftongen ei, dansk viser monoftongering til e', isCorrect: true },
              { id: 'c', text: 'Det er bare ulik dialekt', isCorrect: false },
              { id: 'd', text: 'Dansk laante ordet fra tysk', isCorrect: false },
            ],
            solution: 'Den faglige beskrivelsen er at norsk bevarer den norrone diftongen ei ("stein"), mens dansk viser monoftongering - diftongen har blitt til enkeltvokal e ("sten"). Dette er en systematisk fonologisk forskjell mellom sprakene.',
          },
          {
            id: 'norsk-vg2-4-5-n-quiz5-q1',
            task: 'At norront "kalla" ble til norsk "kalle" - hvilket fagbegrep beskriver denne endringen?',
            options: [
              { id: 'a', text: 'Monoftongering', isCorrect: false },
              { id: 'b', text: 'Kasussynkretisme', isCorrect: false },
              { id: 'c', text: 'Vokalreduksjon', isCorrect: true },
              { id: 'd', text: 'Konsonantforskyvning', isCorrect: false },
            ],
            solution: 'Dette er vokalreduksjon - den trykklette vokalen a i "kalla" ble redusert til e i "kalle". Det er et systematisk fenomen der alle trykklette vokaler (a, u, i) i norront ble til e i moderne norsk.',
          },
          {
            id: 'norsk-vg2-4-5-n-quiz5-q2',
            task: 'Hvorfor er fagsprak viktig nar du skal analysere sprakforskjeller?',
            options: [
              { id: 'a', text: 'Fordi laereren krever det pa eksamen', isCorrect: false },
              { id: 'b', text: 'Fordi det gjor analysen mer presis og lar deg kommunisere faglig om sprak', isCorrect: true },
              { id: 'c', text: 'Fordi vanlig norsk ikke er godt nok til a beskrive sprak', isCorrect: false },
              { id: 'd', text: 'Fordi fagsprak er lettere a forstå enn dagligsprak', isCorrect: false },
            ],
            solution: 'Fagsprak gjor analysen mer presis og informativ. "Norsk bevarer diftongen ei, dansk viser monoftongering" sier mye mer enn "norsk sier stein, dansk sier sten". Det lar deg ogsa delta i faglige samtaler og kommunisere noeyaktig med andre som kan faget.',
          },
        ],
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
