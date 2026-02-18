/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON
 * Kapittel 3.1: Koordinatsystemet
 * Kapittel 3.2: Lineære funksjoner
 * Kapittel 3.3: Hva er en funksjon?
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1 NARRATIV: Koordinatsystemet
// ============================================================================

export const CHAPTER_1T_3_1_NARRATIV: TextbookChapter = {
  id: '1t-3-1-narrativ',
  courseId: '1t',
  chapterNumber: '3.1',
  title: 'Koordinatsystemet',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan vi bruker to talllinjer til å beskrive posisjoner i et plan – fra aksenes opprinnelse til å lese historier ut av grafer.',
  estimatedMinutes: 30,
  competenceGoals: ['forstå og bruke koordinatsystemet'],
  linkedChapterId: '1t-3-1',
  content: [    {
      id: '1t-3-1-n-intro',
      type: 'text',
      content: `## Et kart over tallenes verden

Tenk deg at du skal forklare en venn nøyaktig hvor du sitter i et stort klasserom. Du kan si «tredje rad fra venstre, femte plass fra døren» – og vennen din finner deg med en gang. Det du nettopp gjorde var å bruke to opplysninger til å beskrive en posisjon, og det er akkurat det et **koordinatsystem** gjør.

Et koordinatsystem er bygget opp av to talllinjer som krysser hverandre vinkelrett. Den vannrette linjen kaller vi **$x$-aksen** (eller førsteaksen), og den loddrette kaller vi **$y$-aksen** (eller andreaksen). Punktet der de to aksene møtes har et eget navn: **origo**. Det er nullpunktet for begge aksene, og vi skriver det som $(0, 0)$.

Ideen ble utviklet av den franske filosofen og matematikeren René Descartes på 1600-tallet. Han ville koble algebra og geometri sammen, og resultatet ble et system som lar oss oversette mellom tall og figurer. Vi bruker koordinatsystemet i alt fra GPS-navigasjon til dataspillgrafikk – og selvfølgelig i matematikken du skal lære nå.`,
    },
    {
      id: '1t-3-1-n-section1',
      type: 'text',
      content: `## Punkter i koordinatsystemet

Ethvert punkt i koordinatsystemet beskrives med et **tallpar** som vi skriver i en parentes: $(x, y)$. Det første tallet forteller oss hvor langt vi skal gå langs $x$-aksen (horisontalt), og det andre tallet forteller oss hvor langt vi skal gå langs $y$-aksen (vertikalt). Rekkefølgen er viktig – $x$ kommer alltid først.

La oss si at vi vil finne punktet $(3, 2)$. Vi starter i origo, går 3 enheter til høyre langs $x$-aksen, og deretter 2 enheter rett opp. Der plasserer vi punktet. Hadde det vært $(2, 3)$ i stedet, ville vi gått 2 til høyre og 3 opp – et helt annet sted. Så rekkefølgen betyr alt.

Hva med negative tall? Punktet $(-2, 4)$ betyr at vi går 2 enheter til *venstre* langs $x$-aksen (fordi verdien er negativ) og deretter 4 opp. Punktet $(1, -3)$ betyr 1 til høyre og 3 *ned*. Og $(-4, -1)$ sender oss til venstre og ned. Slik deler koordinatsystemet planet i fire **kvadranter**: oppe til høyre (begge positive), oppe til venstre ($x$ negativ), nede til venstre (begge negative) og nede til høyre ($y$ negativ).

Det finnes også noen spesielle linjer det er verdt å kjenne til. Linjen $x = -2$ er en loddrett linje som passerer gjennom alle punkter der $x$-verdien er $-2$, uansett hva $y$ er. Tilsvarende er $y = 4$ en vannrett linje gjennom alle punkter med $y$-verdi lik $4$. Disse to linjene krysser hverandre i akkurat ett punkt, nemlig $(-2, 4)$.`,
    },
    {
      id: '1t-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på punkter i koordinatsystemet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-1-n-quiz1-q0',
            task: 'Hvilket punkt ligger 3 enheter til venstre for origo og 5 enheter opp?',
            options: [
              { id: 'a', text: '$(3, 5)$', isCorrect: false },
              { id: 'b', text: '$(-3, 5)$', isCorrect: true },
              { id: 'c', text: '$(5, -3)$', isCorrect: false },
              { id: 'd', text: '$(-5, 3)$', isCorrect: false },
            ],
            solution: 'Til venstre for origo betyr negativ $x$-verdi, altså $x = -3$. Opp betyr positiv $y$-verdi, altså $y = 5$. Punktet er $(-3, 5)$.',
          },
          {
            id: '1t-3-1-n-quiz1-q1',
            task: 'Hva er forskjellen på punktene $(3, 2)$ og $(2, 3)$?',
            options: [
              { id: 'a', text: 'De er det samme punktet, bare skrevet forskjellig', isCorrect: false },
              { id: 'b', text: '$(3, 2)$ er 3 opp og 2 til høyre, mens $(2, 3)$ er 2 opp og 3 til høyre', isCorrect: false },
              { id: 'c', text: '$(3, 2)$ er 3 til høyre og 2 opp, mens $(2, 3)$ er 2 til høyre og 3 opp', isCorrect: true },
              { id: 'd', text: 'Begge ligger i samme kvadrant, men $(3, 2)$ er nærmere origo', isCorrect: false },
            ],
            solution: 'I et koordinatpar $(x, y)$ angir $x$ horisontal posisjon og $y$ vertikal posisjon. $(3, 2)$ betyr 3 til høyre og 2 opp, mens $(2, 3)$ betyr 2 til høyre og 3 opp. Rekkefølgen er avgjørende.',
          },
          {
            id: '1t-3-1-n-quiz1-q2',
            task: 'I hvilken kvadrant ligger punktet $(-4, -1)$?',
            options: [
              { id: 'a', text: 'Første kvadrant (oppe til høyre)', isCorrect: false },
              { id: 'b', text: 'Andre kvadrant (oppe til venstre)', isCorrect: false },
              { id: 'c', text: 'Tredje kvadrant (nede til venstre)', isCorrect: true },
              { id: 'd', text: 'Fjerde kvadrant (nede til høyre)', isCorrect: false },
            ],
            solution: 'Når $x = -4$ (negativ) går vi til venstre, og når $y = -1$ (negativ) går vi nedover. Begge koordinater er negative, så punktet ligger i tredje kvadrant (nede til venstre).',
          },
          {
            id: '1t-3-1-n-quiz1-q3',
            task: 'Linjen $x = -2$ er en loddrett linje. Hvilket av disse punktene ligger på denne linjen?',
            options: [
              { id: 'a', text: '$(3, -2)$', isCorrect: false },
              { id: 'b', text: '$(-2, 0)$', isCorrect: true },
              { id: 'c', text: '$(0, -2)$', isCorrect: false },
              { id: 'd', text: '$(2, -2)$', isCorrect: false },
            ],
            solution: 'Linjen $x = -2$ inneholder alle punkter der $x$-verdien er $-2$, uansett hva $y$ er. Punktet $(-2, 0)$ har $x = -2$, så det ligger på linjen. $(0, -2)$ har $x = 0$, og ligger altså på $y$-aksen, ikke på linjen $x = -2$.',
          },
        ],
      },
    },    {
      id: '1t-3-1-n-section2',
      type: 'text',
      content: `## Å lese av punkter fra en figur

I mange oppgaver får du et koordinatsystem med punkter allerede markert, og så skal du finne koordinatene. Teknikken er enkel: for hvert punkt trekker du en usynlig loddrett linje ned til $x$-aksen og leser av $x$-verdien, og en vannrett linje bort til $y$-aksen og leser av $y$-verdien.

La oss si at du ser et punkt som ligger rett over tallet $1$ på $x$-aksen og på samme høyde som tallet $4$ på $y$-aksen. Da er punktet $(1, 4)$. Et annet punkt ligger rett over $-2$ på $x$-aksen og på høyde med $3$ på $y$-aksen – det er $(-2, 3)$.

Pass på at du ikke forveksler aksene. En vanlig feil er å lese av $y$-verdien først og så $x$-verdien. Husk regelen: $x$ først, $y$ deretter. Noen bruker minnesregelen «bortover først, så oppover» – akkurat som når du går til en hylle i et bibliotek: du finner riktig rekke først (horisontalt), og så riktig hylle (vertikalt).

Det er også lurt å sjekke at du har riktig skala på aksene. Noen ganger er det ikke merket av hele tall, men kanskje hvert andre tall, eller desimaler. Ta deg tid til å lese av aksene før du begynner å finne punkter.`,
    },
    {
      id: '1t-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på avlesning av punkter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-1-n-quiz2-q0',
            task: 'Et punkt ligger på $y$-aksen, 2 enheter under origo. Hva er koordinatene til dette punktet?',
            options: [
              { id: 'a', text: '$(2, 0)$', isCorrect: false },
              { id: 'b', text: '$(-2, 0)$', isCorrect: false },
              { id: 'c', text: '$(0, 2)$', isCorrect: false },
              { id: 'd', text: '$(0, -2)$', isCorrect: true },
            ],
            solution: 'Et punkt på $y$-aksen har alltid $x = 0$. Under origo betyr negativ $y$-verdi. Svaret er $(0, -2)$.',
          },
          {
            id: '1t-3-1-n-quiz2-q1',
            task: 'Når du leser av koordinatene til et punkt, hva gjør du først?',
            options: [
              { id: 'a', text: 'Trekker en vannrett linje til $y$-aksen og leser av $y$-verdien', isCorrect: false },
              { id: 'b', text: 'Trekker en loddrett linje ned til $x$-aksen og leser av $x$-verdien', isCorrect: true },
              { id: 'c', text: 'Måler avstanden til origo', isCorrect: false },
              { id: 'd', text: 'Finner ut hvilken kvadrant punktet er i', isCorrect: false },
            ],
            solution: 'Regelen er «bortover først, så oppover» – altså finner du $x$-verdien først ved å trekke en loddrett linje ned til $x$-aksen. Deretter finner du $y$-verdien ved å trekke en vannrett linje til $y$-aksen.',
          },
          {
            id: '1t-3-1-n-quiz2-q2',
            task: 'Et punkt ligger rett over $-2$ på $x$-aksen og på samme høyde som $3$ på $y$-aksen. Hva er koordinatene?',
            options: [
              { id: 'a', text: '$(3, -2)$', isCorrect: false },
              { id: 'b', text: '$(-2, 3)$', isCorrect: true },
              { id: 'c', text: '$(2, 3)$', isCorrect: false },
              { id: 'd', text: '$(-3, 2)$', isCorrect: false },
            ],
            solution: 'Rett over $-2$ på $x$-aksen gir $x = -2$. Samme høyde som $3$ på $y$-aksen gir $y = 3$. Husk at $x$ alltid skrives først, så koordinatene er $(-2, 3)$.',
          },
        ],
      },
    },    {
      id: '1t-3-1-n-section3',
      type: 'text',
      content: `## Grafer forteller historier

En graf er mye mer enn bare en strek i et koordinatsystem – den forteller en hel historie om sammenhengen mellom to størrelser. Når du ser en graf, bør du tenke: «Hva betyr $x$-aksen? Hva betyr $y$-aksen? Og hva forteller formen på grafen meg?»

Tenk deg at vi har en graf som viser prisen for en taxitur, der $x$-aksen viser antall kilometer kjørt og $y$-aksen viser prisen i kroner. Grafen er en rett linje som starter i $y = 120$ når $x = 0$ og stiger jevnt oppover. Hva kan vi lese ut av dette?

For det første ser vi at når $x = 0$ (altså før du har kjørt en eneste meter), er prisen allerede 120 kroner. Det er **startprisen** – det du betaler bare for å sette deg inn i taxien. For det andre ser vi at grafen stiger: jo lenger du kjører, desto mer koster det. Og fordi grafen er en rett linje, betyr det at prisen øker jevnt for hver kilometer.

Denne evnen til å lese informasjon fra grafer er noe du vil bruke hele tiden, både i matematikk og i andre fag. Du vil møte grafer som viser temperatur gjennom et døgn, fart på en bil, sparepenger over tid, eller befolkningsvekst i et land.`,
    },
    {
      id: '1t-3-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-3-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på graflesing og historiefortelling:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-1-n-quiz3-q0',
            task: 'En graf viser prisen for en taxitur. Når $x = 12$ km leser vi av at $y = 240$ kr. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Startprisen er 240 kroner', isCorrect: false },
              { id: 'b', text: 'Du kan kjøre 240 km for 12 kroner', isCorrect: false },
              { id: 'c', text: 'En 12 km lang tur koster 240 kroner', isCorrect: true },
              { id: 'd', text: 'Prisen øker med 12 kroner per kilometer', isCorrect: false },
            ],
            solution: 'Punktet $(12, 240)$ på grafen betyr at når vi kjører $x = 12$ km, er prisen $y = 240$ kr. Altså koster en 12 km lang tur 240 kroner.',
          },
          {
            id: '1t-3-1-n-quiz3-q1',
            task: 'En taxigraf starter i $y = 120$ når $x = 0$ og er en rett linje som stiger. Hva betyr verdien $y = 120$?',
            options: [
              { id: 'a', text: 'Taxien kjører 120 km/t', isCorrect: false },
              { id: 'b', text: 'Turen koster 120 kroner per kilometer', isCorrect: false },
              { id: 'c', text: 'Startprisen for taxituren er 120 kroner', isCorrect: true },
              { id: 'd', text: 'Taxien har kjørt 120 kilometer', isCorrect: false },
            ],
            solution: 'Når $x = 0$ har du ikke kjørt noe ennå, men $y = 120$ kr. Det betyr at startprisen – det du betaler bare for å sette deg i taxien – er 120 kroner.',
          },
          {
            id: '1t-3-1-n-quiz3-q2',
            task: 'Grafen for taxituren er en rett linje som stiger jevnt. Hva forteller det oss?',
            options: [
              { id: 'a', text: 'Prisen øker raskere og raskere', isCorrect: false },
              { id: 'b', text: 'Prisen øker like mye for hver kilometer', isCorrect: true },
              { id: 'c', text: 'Taxien kjører med jevn fart', isCorrect: false },
              { id: 'd', text: 'Prisen er den samme uansett avstand', isCorrect: false },
            ],
            solution: 'En rett linje som stiger jevnt betyr at økningen i $y$ (pris) er den samme for hver enhet økning i $x$ (kilometer). Altså øker prisen like mye for hver kilometer du kjører.',
          },
        ],
      },
    },    {
      id: '1t-3-1-n-section4',
      type: 'text',
      content: `## Å lese av verdier fra en graf

Når du jobber med grafer, er det to typer spørsmål du må kunne svare på. Den første typen er: «Gitt en $x$-verdi, hva er $y$-verdien?» Da finner du $x$-verdien på $x$-aksen, går rett opp (eller ned) til du treffer grafen, og leser av $y$-verdien.

La oss bruke taxieksempelet igjen. Du vil vite hva det koster å kjøre 12 km. Du finner $x = 12$ på $x$-aksen, følger en loddrett linje opp til grafen, og leser av at $y = 240$. Altså koster turen 240 kroner.

Den andre typen spørsmål går motsatt vei: «Gitt en $y$-verdi, hva er $x$-verdien?» Kanskje du har 400 kroner og vil vite hvor langt du kan kjøre. Da finner du $y = 400$ på $y$-aksen, går vannrett til høyre til du treffer grafen, og leser av $x$-verdien. Svaret er 28 km.

Legg merke til at vi også kan finne startverdien fra grafen. Startverdien er $y$-verdien når $x = 0$, som er der grafen krysser $y$-aksen. I taxieksempelet er det punktet $(0, 120)$, som betyr at startprisen er 120 kroner. Denne verdien kalles ofte **konstantleddet** og er et begrep vi skal bruke mye videre.`,
    },
    {
      id: '1t-3-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-3-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på avlesning av verdier fra grafer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-1-n-quiz4-q0',
            task: 'Gry har en graf som viser penger på konto etter $x$ feriedager. Grafen viser at $g(0) = 8000$ og $g(6) = 2000$. Hva betyr $g(0) = 8000$?',
            options: [
              { id: 'a', text: 'Gry bruker 8000 kroner per dag', isCorrect: false },
              { id: 'b', text: 'Gry hadde 8000 kroner da hun dro på ferie', isCorrect: true },
              { id: 'c', text: 'Ferien varer i 8000 dager', isCorrect: false },
              { id: 'd', text: 'Gry har 8000 kroner etter 6 dager', isCorrect: false },
            ],
            solution: 'Verdien $g(0) = 8000$ betyr at når $x = 0$ (før ferien har begynt), er det 8000 kroner på kontoen. Altså hadde Gry 8000 kroner da hun dro på ferie.',
          },
          {
            id: '1t-3-1-n-quiz4-q1',
            task: 'I taxieksempelet vil du vite hva det koster å kjøre 12 km. Hvordan leser du av svaret fra grafen?',
            options: [
              { id: 'a', text: 'Finn $y = 12$ på $y$-aksen og gå vannrett til grafen', isCorrect: false },
              { id: 'b', text: 'Finn $x = 12$ på $x$-aksen og gå loddrett opp til grafen, deretter les av $y$-verdien', isCorrect: true },
              { id: 'c', text: 'Finn punktet $(12, 12)$ i koordinatsystemet', isCorrect: false },
              { id: 'd', text: 'Multipliser 12 med prisen per kilometer', isCorrect: false },
            ],
            solution: 'For å finne $y$ når du kjenner $x$: finn $x = 12$ på $x$-aksen, gå loddrett opp til du treffer grafen, og les av $y$-verdien der. Det er prisen for 12 km.',
          },
          {
            id: '1t-3-1-n-quiz4-q2',
            task: 'Du har 400 kroner og vil vite hvor langt du kan kjøre med taxi. Hvordan finner du svaret i grafen?',
            options: [
              { id: 'a', text: 'Finn $x = 400$ på $x$-aksen og les av $y$', isCorrect: false },
              { id: 'b', text: 'Finn der grafen krysser $x$-aksen', isCorrect: false },
              { id: 'c', text: 'Finn $y = 400$ på $y$-aksen og gå vannrett til grafen, deretter les av $x$-verdien', isCorrect: true },
              { id: 'd', text: 'Del 400 på startprisen', isCorrect: false },
            ],
            solution: 'For å finne $x$ når du kjenner $y$: finn $y = 400$ på $y$-aksen, gå vannrett til høyre til du treffer grafen, og les av $x$-verdien. Det er antall kilometer du kan kjøre.',
          },
          {
            id: '1t-3-1-n-quiz4-q3',
            task: 'Hva kalles $y$-verdien der grafen krysser $y$-aksen (altså ved $x = 0$)?',
            options: [
              { id: 'a', text: 'Nullpunktet', isCorrect: false },
              { id: 'b', text: 'Stigningstallet', isCorrect: false },
              { id: 'c', text: 'Toppunktet', isCorrect: false },
              { id: 'd', text: 'Konstantleddet (startverdien)', isCorrect: true },
            ],
            solution: 'Verdien der grafen krysser $y$-aksen (ved $x = 0$) kalles konstantleddet eller startverdien. I taxieksempelet er det startprisen, og i Grys eksempel er det beløpet hun hadde da ferien startet.',
          },
        ],
      },
    },    {
      id: '1t-3-1-n-section5',
      type: 'text',
      content: `## Hva punkter på en graf egentlig forteller oss

La oss avslutte med å tenke litt dypere om hva det betyr at et punkt ligger på en graf. Punktet $(6, 2)$ på en temperaturgraf betyr noe helt konkret: klokken 06:00 (6 timer etter midnatt) var temperaturen 2 grader Celsius. Grafen oversetter tall til virkelighet.

Hvis du ser punktet $(14, 18)$ på den samme grafen, kan du fortelle en historie: «På ettermiddagen, 14 timer etter midnatt – altså klokken 14:00 – var det blitt 18 grader.» Hvert punkt er en liten faktasetning, og grafen som helhet gir deg det store bildet.

Det fine med koordinatsystemet er at det fungerer for alt mulig. Du kan plotte veksten av en plante over tid, forbindelsen mellom temperatur og iskremsalg, eller sammenhengen mellom antall timer du øver og poengsummen på en prøve. Koordinatsystemet er matematikkens universelle språk for å vise sammenhenger – og når du først mestrer det, har du et verktøy du aldri slutter å bruke.

Når du tolker en graf, still deg alltid tre spørsmål: Hva står på $x$-aksen? Hva står på $y$-aksen? Og hva betyr formen på grafen – stiger den, synker den, er den rett eller buet?`,
    },
    {
      id: '1t-3-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-3-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på tolkning av grafer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-1-n-quiz5-q0',
            task: 'En graf viser temperaturen utendørs gjennom et døgn, der $x$ er timer etter midnatt. Hvilket punkt betyr «klokken 14:00 var det 18 grader»?',
            options: [
              { id: 'a', text: '$(18, 14)$', isCorrect: false },
              { id: 'b', text: '$(14, 18)$', isCorrect: true },
              { id: 'c', text: '$(14, 0)$', isCorrect: false },
              { id: 'd', text: '$(0, 18)$', isCorrect: false },
            ],
            solution: 'Klokken 14:00 er 14 timer etter midnatt, så $x = 14$. Temperaturen er 18 grader, så $y = 18$. Punktet er $(14, 18)$.',
          },
          {
            id: '1t-3-1-n-quiz5-q1',
            task: 'Punktet $(6, 2)$ ligger på en temperaturgraf der $x$ er timer etter midnatt og $y$ er grader Celsius. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Klokken 02:00 var det 6 grader', isCorrect: false },
              { id: 'b', text: 'Klokken 06:00 var det 2 grader', isCorrect: true },
              { id: 'c', text: 'Temperaturen steg med 2 grader på 6 timer', isCorrect: false },
              { id: 'd', text: 'Klokken 06:00 hadde temperaturen sunket 2 grader', isCorrect: false },
            ],
            solution: 'Punktet $(6, 2)$ betyr $x = 6$ (6 timer etter midnatt, altså klokken 06:00) og $y = 2$ (temperaturen var 2 grader Celsius).',
          },
          {
            id: '1t-3-1-n-quiz5-q2',
            task: 'Når du tolker en graf, hvilke tre spørsmål bør du alltid stille deg?',
            options: [
              { id: 'a', text: 'Hva er $x$? Hva er $y$? Er grafen pen?', isCorrect: false },
              { id: 'b', text: 'Hvor starter grafen? Hvor slutter den? Hvor lang er den?', isCorrect: false },
              { id: 'c', text: 'Hva står på $x$-aksen? Hva står på $y$-aksen? Hva betyr formen på grafen?', isCorrect: true },
              { id: 'd', text: 'Hva er nullpunktet? Hva er toppunktet? Hva er bunnpunktet?', isCorrect: false },
            ],
            solution: 'De tre sentrale spørsmålene er: Hva står på $x$-aksen? Hva står på $y$-aksen? Og hva betyr formen på grafen – stiger den, synker den, er den rett eller buet? Disse spørsmålene gir deg nøkkelen til å forstå enhver graf.',
          },
        ],
      },
    },    {
      id: '1t-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært grunnlaget for alt som kommer videre i funksjonslæren.

**Koordinatsystemet** består av to akser som krysser hverandre i **origo** $(0, 0)$. Den vannrette aksen er **$x$-aksen** og den loddrette er **$y$-aksen**. Sammen gir de oss et system for å beskrive enhver posisjon i et plan med et tallpar $(x, y)$.

**Punkter** i koordinatsystemet skrives på formen $(x, y)$, der $x$-verdien forteller oss den horisontale posisjonen og $y$-verdien den vertikale. Rekkefølgen er avgjørende – $(3, 2)$ og $(2, 3)$ er helt forskjellige punkter. Negative verdier sender oss til venstre (negativ $x$) eller nedover (negativ $y$).

**Grafer** gir oss visuell informasjon om sammenhengen mellom to størrelser. For å finne $y$ når du kjenner $x$: finn $x$-verdien på $x$-aksen og gå opp til grafen. For å finne $x$ når du kjenner $y$: finn $y$-verdien på $y$-aksen og gå bort til grafen. **Startverdien** finner du der grafen krysser $y$-aksen, altså når $x = 0$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2 NARRATIV: Lineære funksjoner
// ============================================================================

export const CHAPTER_1T_3_2_NARRATIV: TextbookChapter = {
  id: '1t-3-2-narrativ',
  courseId: '1t',
  chapterNumber: '3.2',
  title: 'Lineære funksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om rette linjer i koordinatsystemet – hva stigningstallet og konstantleddet betyr, og hvordan du tegner og leser av lineære funksjoner.',
  estimatedMinutes: 35,
  competenceGoals: ['forstå og tegne lineære funksjoner'],
  linkedChapterId: '1t-3-2',
  content: [    {
      id: '1t-3-2-n-intro',
      type: 'text',
      content: `## Når tall får liv gjennom variabler

Forestill deg at du har uttrykket $4x + 1$. Bokstaven $x$ er en **variabel** – den kan være hvilket som helst tall. Velger du $x = 3$, får du $4 \\cdot 3 + 1 = 13$. Velger du $x = 0$, får du $4 \\cdot 0 + 1 = 1$. Hvert valg av $x$ gir et nytt svar, og det er denne ideen som er selve kjernen i funksjoner.

Å **sette inn** en verdi for $x$ betyr rett og slett å erstatte alle $x$-er i uttrykket med et bestemt tall, og så regne ut. Det er som å ha en oppskrift der én ingrediens er ukjent – når du endelig bestemmer deg for hva det skal være, kan du lage retten.

I dette kapittelet skal vi se hvordan slike uttrykk beskriver rette linjer i koordinatsystemet. Vi starter med enkel innsetting, går videre til å forstå hva som gjør en variabel avhengig av en annen, og ender opp med den berømte formelen $y = ax + b$ som beskriver alle rette linjer.`,
    },
    {
      id: '1t-3-2-n-section1',
      type: 'text',
      content: `## Avhengig og uavhengig variabel

Når vi skriver $y = 2x - 3$, sier vi at $y$ er **avhengig** av $x$. Du velger fritt hva $x$ skal være – kanskje $x = 4$ – og da gir formelen deg svaret: $y = 2 \\cdot 4 - 3 = 5$. Velger du $x = 1$, får du $y = 2 \\cdot 1 - 3 = -1$. Verdien av $y$ forandrer seg hver gang du endrer $x$.

Vi kaller $x$ den **uavhengige variabelen** fordi den kan velges fritt, og $y$ den **avhengige variabelen** fordi den bestemmes av formelen så fort vi kjenner $x$. Tenk på det som en maskin: du mater inn en $x$-verdi, maskinen gjør noe med den (ganger med 2, trekker fra 3), og ut kommer $y$-verdien.

Det fine er at denne sammenhengen kan visualiseres. Hvert par $(x, y)$ gir oss et punkt i koordinatsystemet. Når vi setter inn $x = -2$ i $y = -x + 4$, får vi $y = -(-2) + 4 = 2 + 4 = 6$. Vi har nå punktet $(-2, 6)$. Pass spesielt på fortegnene når du setter inn negative tall – det er en av de vanligste feilkildene. Uttrykket $-(-2)$ blir $+2$, ikke $-2$.`,
    },
    {
      id: '1t-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på innsetting og variabler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-2-n-quiz1-q0',
            task: 'Hva blir $y$ når vi setter inn $x = -3$ i $y = -4x + 1$?',
            options: [
              { id: 'a', text: '$y = -11$', isCorrect: false },
              { id: 'b', text: '$y = -13$', isCorrect: false },
              { id: 'c', text: '$y = 13$', isCorrect: true },
              { id: 'd', text: '$y = 11$', isCorrect: false },
            ],
            solution: 'Vi setter inn $x = -3$: $y = -4 \\cdot (-3) + 1 = 12 + 1 = 13$. Husk at minus ganger minus gir pluss.',
          },
          {
            id: '1t-3-2-n-quiz1-q1',
            task: 'I uttrykket $y = 2x - 3$ – hvilken variabel er den uavhengige?',
            options: [
              { id: 'a', text: '$y$, fordi den står alene på venstre side', isCorrect: false },
              { id: 'b', text: '$x$, fordi vi velger den fritt', isCorrect: true },
              { id: 'c', text: 'Begge er uavhengige', isCorrect: false },
              { id: 'd', text: 'Ingen av dem – tallet 3 er den uavhengige', isCorrect: false },
            ],
            solution: 'Den uavhengige variabelen er $x$ fordi den kan velges fritt. Verdien av $y$ bestemmes av formelen når vi kjenner $x$, så $y$ er den avhengige variabelen.',
          },
          {
            id: '1t-3-2-n-quiz1-q2',
            task: 'Hva blir $y$ når vi setter inn $x = -2$ i $y = -x + 4$?',
            options: [
              { id: 'a', text: '$y = 2$', isCorrect: false },
              { id: 'b', text: '$y = -6$', isCorrect: false },
              { id: 'c', text: '$y = 6$', isCorrect: true },
              { id: 'd', text: '$y = -2$', isCorrect: false },
            ],
            solution: 'Vi setter inn $x = -2$: $y = -(-2) + 4 = 2 + 4 = 6$. Pass på: $-(-2)$ blir $+2$, ikke $-2$. Fortegnsreglene er avgjørende her.',
          },
        ],
      },
    },    {
      id: '1t-3-2-n-section2',
      type: 'text',
      content: `## Fra regel til linje

Her kommer det magiske: når du har en regel som $y = 2x$, og du setter inn mange forskjellige $x$-verdier, får du mange punkter. Når $x = 1$ får du punktet $(1, 2)$. Når $x = 3$ får du $(3, 6)$. Når $x = -2$ får du $(-2, -4)$. Markerer du alle disse punktene i et koordinatsystem og trekker en linje gjennom dem, får du en perfekt rett linje.

For å tegne en slik linje trenger du egentlig bare to punkter, men det er lurt å bruke tre for å ha en sikkerhetssjekk. Velg gjerne en negativ $x$-verdi, $x = 0$, og en positiv $x$-verdi – da får du punkter som er pent fordelt i koordinatsystemet.

La oss tegne $y = 2x - 2$ som et eksempel. Vi velger $x = -3$: $y = 2 \\cdot (-3) - 2 = -6 - 2 = -8$, som gir punktet $(-3, -8)$. For $x = 0$: $y = 2 \\cdot 0 - 2 = -2$, som gir $(0, -2)$. For $x = 4$: $y = 2 \\cdot 4 - 2 = 6$, som gir $(4, 6)$. Nå markerer vi disse tre punktene og trekker en rett linje gjennom dem. Vi har tegnet funksjonen!

Legg merke til noe viktig: punktet $(0, -2)$ er der linjen krysser $y$-aksen. Det er ikke tilfeldig – det er konstantleddet $b = -2$ i formelen $y = 2x - 2$. Dette skal vi forstå mye bedre snart.`,
    },
    {
      id: '1t-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på å gå fra formel til linje:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-2-n-quiz2-q0',
            task: 'Du skal tegne linjen $y = x - 2$. Hvilke tre punkter kan du bruke?',
            options: [
              { id: 'a', text: '$(0, 2)$, $(1, 3)$, $(2, 4)$', isCorrect: false },
              { id: 'b', text: '$(-2, -4)$, $(0, -2)$, $(2, 0)$', isCorrect: true },
              { id: 'c', text: '$(0, -2)$, $(1, 0)$, $(2, -2)$', isCorrect: false },
              { id: 'd', text: '$(-1, -1)$, $(0, 0)$, $(1, 1)$', isCorrect: false },
            ],
            solution: 'Vi setter inn i $y = x - 2$: for $x = -2$ får vi $y = -4$, for $x = 0$ får vi $y = -2$, for $x = 2$ får vi $y = 0$. Altså $(-2, -4)$, $(0, -2)$ og $(2, 0)$.',
          },
          {
            id: '1t-3-2-n-quiz2-q1',
            task: 'Hvor mange punkter trenger du minimum for å tegne en rett linje?',
            options: [
              { id: 'a', text: '1 punkt', isCorrect: false },
              { id: 'b', text: '2 punkter', isCorrect: true },
              { id: 'c', text: '3 punkter', isCorrect: false },
              { id: 'd', text: '4 punkter', isCorrect: false },
            ],
            solution: 'En rett linje er bestemt av to punkter. Det er nok å finne to punkter som tilfredsstiller formelen, og trekke en linje gjennom dem. Et tredje punkt kan brukes som sikkerhetssjekk.',
          },
          {
            id: '1t-3-2-n-quiz2-q2',
            task: 'Linjen $y = 2x - 2$ krysser $y$-aksen. Hva er koordinatene til dette skjæringspunktet?',
            options: [
              { id: 'a', text: '$(0, 2)$', isCorrect: false },
              { id: 'b', text: '$(2, 0)$', isCorrect: false },
              { id: 'c', text: '$(-2, 0)$', isCorrect: false },
              { id: 'd', text: '$(0, -2)$', isCorrect: true },
            ],
            solution: 'Der linjen krysser $y$-aksen er $x = 0$. Vi setter inn: $y = 2 \\cdot 0 - 2 = -2$. Skjæringspunktet er $(0, -2)$. Dette er konstantleddet $b = -2$.',
          },
          {
            id: '1t-3-2-n-quiz2-q3',
            task: 'Hva er $y$-verdien til $y = 2x$ når $x = -2$?',
            options: [
              { id: 'a', text: '$y = 4$', isCorrect: false },
              { id: 'b', text: '$y = -4$', isCorrect: true },
              { id: 'c', text: '$y = 0$', isCorrect: false },
              { id: 'd', text: '$y = -2$', isCorrect: false },
            ],
            solution: 'Vi setter inn $x = -2$: $y = 2 \\cdot (-2) = -4$. Punktet $(-2, -4)$ ligger på linjen $y = 2x$.',
          },
        ],
      },
    },    {
      id: '1t-3-2-n-section3',
      type: 'text',
      content: `## Stigningstallet – linjens bratthetsmal

Nå skal vi forstå hva som gjør en linje bratt eller slak, og om den går oppover eller nedover. Alle rette linjer kan skrives på formen $y = ax + b$, og det er bokstaven $a$ som styrer bratthet og retning. Vi kaller $a$ for **stigningstallet**.

Stigningstallet forteller deg hvor mye $y$-verdien endrer seg når $x$-verdien øker med 1. Tenk på det slik: du står på et punkt på linjen og tar ett skritt til høyre. Stigningstallet forteller deg hvor mange skritt du må gå opp (eller ned) for å treffe linjen igjen.

I formelen $y = 2x + 1$ er stigningstallet $a = 2$. Det betyr at når $x$ øker med 1, så øker $y$ med 2. Vi kan sjekke: når $x = 0$ er $y = 1$, og når $x = 1$ er $y = 3$. Forskjellen i $y$ er $3 - 1 = 2$ – akkurat stigningstallet.

Hva når $a$ er negativ? I $y = -3x + 4$ er $a = -3$. Det betyr at for hvert skritt til høyre, går du 3 nedover. Linjen synker altså. Når $x = 0$ er $y = 4$, og når $x = 1$ er $y = -3 \\cdot 1 + 4 = 1$. Forskjellen er $1 - 4 = -3$. Negativ stigning betyr at linjen går nedover mot høyre.

En nyttig huskeregel: hvis $a > 0$ stiger linjen, hvis $a < 0$ synker den, og hvis $a = 0$ er linjen helt flat (horisontal). Jo større verdien av $a$ er (om vi ser bort fra fortegnet), desto brattere er linjen.`,
    },
    {
      id: '1t-3-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på stigningstallet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-2-n-quiz3-q0',
            task: 'En linje har stigningstall $a = -2$. Hva skjer med $y$-verdien når $x$ øker med 1?',
            options: [
              { id: 'a', text: '$y$ øker med 2', isCorrect: false },
              { id: 'b', text: '$y$ minker med 2', isCorrect: true },
              { id: 'c', text: '$y$ forblir uendret', isCorrect: false },
              { id: 'd', text: '$y$ øker med $-2$, altså øker den', isCorrect: false },
            ],
            solution: 'Stigningstallet $a = -2$ betyr at $y$ endrer seg med $-2$ når $x$ øker med 1. Altså minker $y$ med 2. Linjen synker mot høyre.',
          },
          {
            id: '1t-3-2-n-quiz3-q1',
            task: 'Hva forteller stigningstallet oss om en linje?',
            options: [
              { id: 'a', text: 'Hvor linjen krysser $y$-aksen', isCorrect: false },
              { id: 'b', text: 'Hvor lang linjen er', isCorrect: false },
              { id: 'c', text: 'Hvor mye $y$ endrer seg når $x$ øker med 1', isCorrect: true },
              { id: 'd', text: 'Hvor mange nullpunkter linjen har', isCorrect: false },
            ],
            solution: 'Stigningstallet $a$ forteller deg nøyaktig hvor mye $y$-verdien endrer seg for hver enhet $x$ øker. Det bestemmer linjens bratthet og retning.',
          },
          {
            id: '1t-3-2-n-quiz3-q2',
            task: 'Gitt $y = 2x + 1$. Når $x = 0$ er $y = 1$, og når $x = 1$ er $y = 3$. Hva er stigningstallet?',
            options: [
              { id: 'a', text: '$a = 1$', isCorrect: false },
              { id: 'b', text: '$a = 3$', isCorrect: false },
              { id: 'c', text: '$a = 2$', isCorrect: true },
              { id: 'd', text: '$a = 4$', isCorrect: false },
            ],
            solution: 'Stigningstallet er endringen i $y$ når $x$ øker med 1: $a = 3 - 1 = 2$. Dette stemmer med koeffisienten foran $x$ i $y = 2x + 1$.',
          },
          {
            id: '1t-3-2-n-quiz3-q3',
            task: 'Hvilken linje er brattest?',
            options: [
              { id: 'a', text: '$y = x + 3$', isCorrect: false },
              { id: 'b', text: '$y = -5x + 1$', isCorrect: true },
              { id: 'c', text: '$y = 3x - 2$', isCorrect: false },
              { id: 'd', text: '$y = -2x + 4$', isCorrect: false },
            ],
            solution: 'Brattheten bestemmes av absoluttverdien av stigningstallet. Vi har $|1| = 1$, $|-5| = 5$, $|3| = 3$ og $|-2| = 2$. Linjen $y = -5x + 1$ har størst absoluttverdi ($5$) og er derfor brattest, selv om den synker.',
          },
          {
            id: '1t-3-2-n-quiz3-q4',
            task: 'Hva kan vi si om en linje der $a = 0$?',
            options: [
              { id: 'a', text: 'Linjen er loddrett', isCorrect: false },
              { id: 'b', text: 'Linjen er horisontal (vannrett)', isCorrect: true },
              { id: 'c', text: 'Linjen finnes ikke', isCorrect: false },
              { id: 'd', text: 'Linjen stiger svakt', isCorrect: false },
            ],
            solution: 'Når $a = 0$ endrer ikke $y$-verdien seg når $x$ øker. Formelen blir $y = 0 \\cdot x + b = b$, altså en flat, horisontal linje gjennom $y = b$.',
          },
        ],
      },
    },    {
      id: '1t-3-2-n-section4',
      type: 'text',
      content: `## Konstantleddet – der linjen møter $y$-aksen

Vi har allerede snakket om $a$ i $y = ax + b$, og nå er det $b$ sin tur. **Konstantleddet** $b$ forteller oss nøyaktig hvor linjen krysser $y$-aksen. Hvorfor? Fordi når $x = 0$, får vi $y = a \\cdot 0 + b = b$. Skjæringspunktet med $y$-aksen er altså punktet $(0, b)$.

I formelen $y = 2x + 1$ er konstantleddet $b = 1$. Det betyr at linjen skjærer $y$-aksen i punktet $(0, 1)$. I $y = -3x + 4$ er $b = 4$, så linjen krysser $y$-aksen i $(0, 4)$.

Nå har du egentlig alt du trenger for å tegne en rett linje raskt. Her er metoden: Marker først konstantleddet på $y$-aksen – det er startpunktet ditt. Deretter bruker du stigningstallet: gå 1 enhet til høyre og $a$ enheter opp (eller ned om $a$ er negativ). Du har nå to punkter, og en rett linje gjennom dem er grafen din.

For $y = -3x + 4$ starter du i $(0, 4)$, går 1 til høyre og 3 ned (fordi $a = -3$), og havner i $(1, 1)$. Trekk en linje gjennom $(0, 4)$ og $(1, 1)$, og du har tegnet grafen.

Denne metoden er raskere enn å beregne tre punkter med innsetting, og den gir deg en dyp forståelse av hva grafen egentlig viser. Hver gang du ser $y = ax + b$, kan du umiddelbart si: «Linjen starter i $(0, b)$ og for hvert skritt til høyre endres $y$ med $a$.»`,
    },
    {
      id: '1t-3-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på konstantleddet og rask graftegning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-2-n-quiz4-q0',
            task: 'Hva er stigningstallet og konstantleddet til linjen $y = -x + 7$?',
            options: [
              { id: 'a', text: '$a = 1$ og $b = 7$', isCorrect: false },
              { id: 'b', text: '$a = -1$ og $b = -7$', isCorrect: false },
              { id: 'c', text: '$a = 7$ og $b = -1$', isCorrect: false },
              { id: 'd', text: '$a = -1$ og $b = 7$', isCorrect: true },
            ],
            solution: 'I $y = -x + 7$ er det en usynlig $-1$ foran $x$, så $a = -1$. Konstantleddet er det som står uten $x$, altså $b = 7$.',
          },
          {
            id: '1t-3-2-n-quiz4-q1',
            task: 'Hva forteller konstantleddet $b$ oss geometrisk?',
            options: [
              { id: 'a', text: 'Hvor bratt linjen er', isCorrect: false },
              { id: 'b', text: 'Hvor linjen krysser $x$-aksen', isCorrect: false },
              { id: 'c', text: 'Hvor linjen krysser $y$-aksen', isCorrect: true },
              { id: 'd', text: 'Hvor lang linjen er', isCorrect: false },
            ],
            solution: 'Konstantleddet $b$ angir $y$-verdien når $x = 0$: $y = a \\cdot 0 + b = b$. Geometrisk betyr det at linjen krysser $y$-aksen i punktet $(0, b)$.',
          },
          {
            id: '1t-3-2-n-quiz4-q2',
            task: 'Du vil raskt tegne $y = -3x + 4$. Du starter i $(0, 4)$. Hvor havner du etter å gå 1 til høyre og bruke stigningstallet?',
            options: [
              { id: 'a', text: '$(1, 7)$', isCorrect: false },
              { id: 'b', text: '$(1, 1)$', isCorrect: true },
              { id: 'c', text: '$(1, -3)$', isCorrect: false },
              { id: 'd', text: '$(3, 4)$', isCorrect: false },
            ],
            solution: 'Fra $(0, 4)$ går du 1 til høyre (ny $x = 1$) og $a = -3$ i $y$-retning (altså 3 ned): $y = 4 + (-3) = 1$. Du havner i $(1, 1)$.',
          },
          {
            id: '1t-3-2-n-quiz4-q3',
            task: 'Linjen $y = 2x + 1$ krysser $y$-aksen i $(0, 1)$. Hva er neste punkt du tegner for å få linjen?',
            options: [
              { id: 'a', text: '$(1, 3)$ – gå 1 til høyre og 2 opp', isCorrect: true },
              { id: 'b', text: '$(2, 1)$ – gå 2 til høyre og 0 opp', isCorrect: false },
              { id: 'c', text: '$(1, 2)$ – gå 1 til høyre og 1 opp', isCorrect: false },
              { id: 'd', text: '$(0, 3)$ – gå 0 til høyre og 2 opp', isCorrect: false },
            ],
            solution: 'Med stigningstall $a = 2$: gå 1 enhet til høyre og 2 enheter opp fra $(0, 1)$. Ny $x = 0 + 1 = 1$, ny $y = 1 + 2 = 3$. Neste punkt er $(1, 3)$.',
          },
        ],
      },
    },    {
      id: '1t-3-2-n-section5',
      type: 'text',
      content: `## Finne formelen fra grafen

Hittil har vi gått fra formel til graf. Men hva om du får en graf og skal finne formelen? Det er det omvendte problemet, og det er minst like viktig.

Fremgangsmåten er: Først leser du av hvor linjen krysser $y$-aksen. Det gir deg konstantleddet $b$. Deretter finner du stigningstallet $a$ ved å se på to punkter på linjen. Velg et punkt, gå 1 enhet til høyre, og se hvor mye $y$-verdien har endret seg. Den endringen er $a$.

Tenk deg at en linje krysser $y$-aksen i $(0, -3)$ og at du kan se at når du går fra $x = 0$ til $x = 1$, så går linjen fra $y = -3$ til $y = -1$. Endringen i $y$ er $-1 - (-3) = 2$, så stigningstallet er $a = 2$. Formelen blir $y = 2x - 3$.

Det finnes også en mer generell måte å finne stigningstallet på, som fungerer mellom to vilkårlige punkter. Har du punktene $(2, 7)$ og $(4, 13)$, beregner du stigningstallet som endring i $y$ delt på endring i $x$: $a = \\frac{13 - 7}{4 - 2} = \\frac{6}{2} = 3$. Nå kjenner du $a = 3$, og du kan finne $b$ ved å sette inn ett av punktene: $7 = 3 \\cdot 2 + b$, som gir $b = 1$. Formelen er $y = 3x + 1$.

Denne teknikken – å bestemme $a$ og $b$ fra kjente punkter – er noe du vil bruke utallige ganger i matematikken. Det er verdt å øve på den til den sitter.`,
    },
    {
      id: '1t-3-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-3-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på å finne formelen fra grafen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-2-n-quiz5-q0',
            task: 'En linje går gjennom $(0, 5)$ og $(1, 2)$. Hva er funksjonsuttrykket?',
            options: [
              { id: 'a', text: '$y = 3x + 5$', isCorrect: false },
              { id: 'b', text: '$y = -3x + 5$', isCorrect: true },
              { id: 'c', text: '$y = 2x + 5$', isCorrect: false },
              { id: 'd', text: '$y = -3x + 2$', isCorrect: false },
            ],
            solution: 'Konstantleddet er $b = 5$ (lest av der linjen krysser $y$-aksen). Stigningstallet er $a = \\frac{2 - 5}{1 - 0} = \\frac{-3}{1} = -3$. Formelen er $y = -3x + 5$.',
          },
          {
            id: '1t-3-2-n-quiz5-q1',
            task: 'Hva er det første du gjør for å finne formelen til en rett linje fra grafen?',
            options: [
              { id: 'a', text: 'Finner nullpunktet', isCorrect: false },
              { id: 'b', text: 'Finner stigningstallet mellom to punkter', isCorrect: false },
              { id: 'c', text: 'Leser av hvor linjen krysser $y$-aksen for å finne $b$', isCorrect: true },
              { id: 'd', text: 'Teller antall rutenett i koordinatsystemet', isCorrect: false },
            ],
            solution: 'Først leser du av konstantleddet $b$ – det er $y$-verdien der linjen krysser $y$-aksen. Deretter finner du stigningstallet $a$ ved å se på endringen i $y$ per endring i $x$.',
          },
          {
            id: '1t-3-2-n-quiz5-q2',
            task: 'En linje går gjennom $(2, 7)$ og $(4, 13)$. Hva er stigningstallet $a$?',
            options: [
              { id: 'a', text: '$a = 2$', isCorrect: false },
              { id: 'b', text: '$a = 6$', isCorrect: false },
              { id: 'c', text: '$a = 3$', isCorrect: true },
              { id: 'd', text: '$a = 10$', isCorrect: false },
            ],
            solution: 'Stigningstallet beregnes som endring i $y$ delt på endring i $x$: $a = \\frac{13 - 7}{4 - 2} = \\frac{6}{2} = 3$.',
          },
          {
            id: '1t-3-2-n-quiz5-q3',
            task: 'Du har funnet at $a = 3$ og at linjen går gjennom $(2, 7)$. Hva er $b$?',
            options: [
              { id: 'a', text: '$b = 7$', isCorrect: false },
              { id: 'b', text: '$b = 1$', isCorrect: true },
              { id: 'c', text: '$b = -1$', isCorrect: false },
              { id: 'd', text: '$b = 13$', isCorrect: false },
            ],
            solution: 'Vi setter inn punktet $(2, 7)$ i $y = 3x + b$: $7 = 3 \\cdot 2 + b = 6 + b$. Løser vi for $b$ får vi $b = 7 - 6 = 1$. Formelen er $y = 3x + 1$.',
          },
        ],
      },
    },    {
      id: '1t-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært å forstå og jobbe med lineære funksjoner – matematikkens rette linjer.

**Innsetting** betyr å erstatte variabelen $x$ med et bestemt tall og regne ut verdien. Når vi har $y = ax + b$, er $x$ den **uavhengige variabelen** (vi velger den fritt) og $y$ den **avhengige variabelen** (den bestemmes av formelen).

**Stigningstallet** $a$ forteller oss hvor mye $y$ endrer seg når $x$ øker med 1. Positivt stigningstall betyr at linjen stiger mot høyre, negativt betyr at den synker, og $a = 0$ gir en flat, horisontal linje. Jo større verdien av $a$ er, desto brattere er linjen.

**Konstantleddet** $b$ er $y$-verdien der linjen krysser $y$-aksen, altså punktet $(0, b)$. For å tegne en linje: marker $(0, b)$, gå 1 til høyre og $a$ opp eller ned, og trekk linjen. For å finne formelen fra en graf: les av $b$ fra $y$-aksen og beregn $a$ som endring i $y$ delt på endring i $x$ mellom to punkter.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3 NARRATIV: Hva er en funksjon?
// ============================================================================

export const CHAPTER_1T_3_3_NARRATIV: TextbookChapter = {
  id: '1t-3-3-narrativ',
  courseId: '1t',
  chapterNumber: '3.3',
  title: 'Hva er en funksjon?',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om matematiske modeller og funksjonsbegrepet – fra hverdagslige sammenhenger til f(x)-notasjon, verditabeller, graftegning, nullpunkter og skjæringspunkter.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke funksjonsbegrepet og funksjonsnotasjon'],
  linkedChapterId: '1t-3-3',
  content: [    {
      id: '1t-3-3-n-intro',
      type: 'text',
      content: `## Matematikk som beskriver virkeligheten

Kari tjener 200 kroner for hver time hun jobber. Hvis hun jobber $x$ timer, tjener hun $200 \\cdot x$ kroner. Denne lille formelen er et eksempel på en **matematisk modell** – et uttrykk som fanger en sammenheng fra virkeligheten ved hjelp av tall og bokstaver.

Mandag jobber Kari 6 timer. Vi erstatter $x$ med 6 og får $200 \\cdot 6 = 1200$ kroner. På tirsdag jobber hun kanskje 4 timer: $200 \\cdot 4 = 800$ kroner. Modellen fungerer uansett hva vi setter inn.

Det å erstatte en ukjent med et bestemt tall kalles å **sette inn en verdi**. Ta for eksempel uttrykket $x^2 + 4x$. Setter vi inn $x = 3$, får vi $3^2 + 4 \\cdot 3 = 9 + 12 = 21$. Setter vi inn $x = -2$, må vi være ekstra forsiktige med fortegnene: $(-2)^2 + 4 \\cdot (-2) = 4 - 8 = -4$. Parentesene rundt $-2$ er viktige – de sikrer at vi kvadrerer hele tallet, ikke bare 2.

I dette kapittelet skal vi gå fra enkle modeller til det kraftige begrepet **funksjon**, og lære å jobbe med notasjonen $f(x)$, verditabeller, graftegning, nullpunkter og skjæringspunkter.`,
    },
    {
      id: '1t-3-3-n-section1',
      type: 'text',
      content: `## Bygge egne modeller

Noen ganger får du en ferdig formel, men andre ganger må du bygge den selv fra en beskrivelse. La oss se på Axel som jogger i jevne 8 kilometer per time. Etter 2 timer har han kommet $8 \\cdot 2 = 16$ km, og etter 5 timer $8 \\cdot 5 = 40$ km. Mønsteret er tydelig: distansen er alltid $8 \\cdot x$ km, der $x$ er antall timer. Vi har laget en matematisk modell: $8x$.

Et mer interessant eksempel er Per, som har 20 000 kroner på konto og sparer 1 000 kroner per arbeidsdag. Etter 15 dager har han $1000 \\cdot 15 + 20000 = 35000$ kr. Etter 20 dager: $1000 \\cdot 20 + 20000 = 40000$ kr. Modellen blir $1000x + 20000$, der $x$ er antall arbeidsdager.

Legg merke til at Pers modell har to deler: en del som vokser ($1000x$) og en fast del ($20000$). Den faste delen er pengene han hadde fra før, og den voksende delen er det han tjener. De fleste modeller fra virkeligheten har en slik struktur – noe fast og noe som endrer seg.

Når du skal sette opp en modell, still deg spørsmålet: «Hva er det som endrer seg, og hva er fast?» Det som endrer seg avhenger av $x$, og det som er fast blir et konstantledd.`,
    },
    {
      id: '1t-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på matematiske modeller:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-3-n-quiz1-q0',
            task: 'Line selger pølser til 30 kroner per stykk. Hvilken modell beskriver inntekten hennes når hun selger $x$ pølser?',
            options: [
              { id: 'a', text: '$30 + x$', isCorrect: false },
              { id: 'b', text: '$x - 30$', isCorrect: false },
              { id: 'c', text: '$\\frac{x}{30}$', isCorrect: false },
              { id: 'd', text: '$30x$', isCorrect: true },
            ],
            solution: 'Inntekten er pris per enhet ganger antall enheter: $30 \\cdot x = 30x$ kroner.',
          },
          {
            id: '1t-3-3-n-quiz1-q1',
            task: 'Hva er verdien av $x^2 + 4x$ når $x = -2$?',
            options: [
              { id: 'a', text: '$12$', isCorrect: false },
              { id: 'b', text: '$-4$', isCorrect: true },
              { id: 'c', text: '$0$', isCorrect: false },
              { id: 'd', text: '$-12$', isCorrect: false },
            ],
            solution: 'Vi setter inn $x = -2$: $(-2)^2 + 4 \\cdot (-2) = 4 - 8 = -4$. Husk at $(-2)^2 = 4$ (hele tallet kvadreres), mens $4 \\cdot (-2) = -8$.',
          },
          {
            id: '1t-3-3-n-quiz1-q2',
            task: 'Per har 20 000 kr på konto og sparer 1 000 kr per arbeidsdag. Hvilken modell beskriver beløpet etter $x$ dager?',
            options: [
              { id: 'a', text: '$20000x$', isCorrect: false },
              { id: 'b', text: '$1000x + 20000$', isCorrect: true },
              { id: 'c', text: '$20000 - 1000x$', isCorrect: false },
              { id: 'd', text: '$1000 + 20000x$', isCorrect: false },
            ],
            solution: 'Beløpet har en fast del (20 000 kr fra starten) og en voksende del (1 000 kr per dag). Modellen er $1000x + 20000$. Vi kan sjekke: etter 0 dager har han $1000 \\cdot 0 + 20000 = 20000$ kr.',
          },
          {
            id: '1t-3-3-n-quiz1-q3',
            task: 'Når du setter opp en matematisk modell, hva bør du spørre deg selv?',
            options: [
              { id: 'a', text: 'Hva er det største og minste tallet?', isCorrect: false },
              { id: 'b', text: 'Hva er det som endrer seg, og hva er fast?', isCorrect: true },
              { id: 'c', text: 'Hvor mange variabler trenger jeg?', isCorrect: false },
              { id: 'd', text: 'Er svaret positivt eller negativt?', isCorrect: false },
            ],
            solution: 'Nøkkelspørsmålet er: «Hva er det som endrer seg, og hva er fast?» Det som endrer seg avhenger av $x$ og blir en variabel del, mens det som er fast blir konstantleddet.',
          },
        ],
      },
    },    {
      id: '1t-3-3-n-section2',
      type: 'text',
      content: `## $f(x)$ – funksjonens språk

Vi har brukt uttrykk som $200x$ og $1000x + 20000$ for å beskrive sammenhenger. Nå skal vi gi disse uttrykkene et skikkelig navn ved hjelp av **funksjonsnotasjon**.

Tenk tilbake på Kari som tjener 200 kroner per time. Vi kan skrive inntekten hennes som en funksjon: $I(t) = 200t$. Her er $I$ navnet på funksjonen (for Inntekt), $t$ er variabelen (for tid), og $200t$ er selve regelen. Når Kari jobber 5 timer, skriver vi $I(5) = 200 \\cdot 5 = 1000$ kroner. Når hun jobber 7 timer: $I(7) = 200 \\cdot 7 = 1400$ kroner.

Notasjonen $f(x)$ betyr «funksjonen $f$ evaluert ved verdien $x$». Det er en presis måte å si «sett inn $x$ i formelen og regn ut». Den vanligste bokstaven for funksjoner er $f$, men vi kan bruke hvilken bokstav vi vil – $g$, $h$, $I$, $P$ – gjerne en bokstav som minner om hva funksjonen beskriver.

En **funksjon** er formelt definert som en regel som til hver verdi av $x$ gir nøyaktig én verdi av $f(x)$. Det betyr at for ett bestemt tall du putter inn, får du alltid ett bestemt tall ut. La oss øve: når $f(x) = 3x + 1$, da er $f(3) = 3 \\cdot 3 + 1 = 10$ og $f(-2) = 3 \\cdot (-2) + 1 = -5$. Når $f(x) = x^2 - 3x$, da er $f(3) = 9 - 9 = 0$ og $f(-2) = 4 + 6 = 10$.`,
    },
    {
      id: '1t-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på funksjonsnotasjon:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-3-n-quiz2-q0',
            task: 'Gitt $f(x) = x^2 + x$. Hva er $f(-2)$?',
            options: [
              { id: 'a', text: '$6$', isCorrect: false },
              { id: 'b', text: '$2$', isCorrect: true },
              { id: 'c', text: '$-2$', isCorrect: false },
              { id: 'd', text: '$-6$', isCorrect: false },
            ],
            solution: 'Vi setter inn $x = -2$: $f(-2) = (-2)^2 + (-2) = 4 - 2 = 2$. Husk at $(-2)^2 = 4$, ikke $-4$.',
          },
          {
            id: '1t-3-3-n-quiz2-q1',
            task: 'Hva betyr notasjonen $f(5)$?',
            options: [
              { id: 'a', text: 'Funksjonen $f$ ganget med 5', isCorrect: false },
              { id: 'b', text: 'Funksjonen $f$ evaluert ved $x = 5$', isCorrect: true },
              { id: 'c', text: 'Den femte funksjonen', isCorrect: false },
              { id: 'd', text: 'Funksjonen $f$ pluss 5', isCorrect: false },
            ],
            solution: 'Notasjonen $f(5)$ betyr «sett inn $x = 5$ i formelen for $f$ og regn ut verdien». Det er en presis måte å si «evaluer funksjonen ved $x = 5$».',
          },
          {
            id: '1t-3-3-n-quiz2-q2',
            task: 'Gitt $f(x) = 3x + 1$. Hva er $f(3)$?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$10$', isCorrect: true },
              { id: 'c', text: '$12$', isCorrect: false },
              { id: 'd', text: '$4$', isCorrect: false },
            ],
            solution: 'Vi setter inn $x = 3$: $f(3) = 3 \\cdot 3 + 1 = 9 + 1 = 10$.',
          },
          {
            id: '1t-3-3-n-quiz2-q3',
            task: 'Hva er definisjonen av en funksjon?',
            options: [
              { id: 'a', text: 'En formel med bokstaver', isCorrect: false },
              { id: 'b', text: 'En regel som til flere $x$-verdier kan gi flere $f(x)$-verdier', isCorrect: false },
              { id: 'c', text: 'En linje i koordinatsystemet', isCorrect: false },
              { id: 'd', text: 'En regel som til hver $x$-verdi gir nøyaktig én $f(x)$-verdi', isCorrect: true },
            ],
            solution: 'En funksjon er en regel der hvert inngangsverdi ($x$) gir nøyaktig én utgangsverdi ($f(x)$). Tenk på det som en maskin: du putter inn ett tall, og du får ut nøyaktig ett tall.',
          },
        ],
      },
    },    {
      id: '1t-3-3-n-section3',
      type: 'text',
      content: `## Verditabeller og graftegning

Når vi skal tegne grafen til en funksjon, er det første steget å lage en **verditabell**. Det er rett og slett en tabell der vi velger noen $x$-verdier, regner ut $f(x)$ for hver av dem, og noterer resultatene. Hvert par $(x, f(x))$ gir oss et punkt vi kan plotte i koordinatsystemet.

La oss ta funksjonen $f(x) = -2x^2 + 3$. Vi velger $x$-verdiene $-2$, $-1$, $0$, $1$ og $2$. For $x = -2$ får vi $f(-2) = -2 \\cdot (-2)^2 + 3 = -2 \\cdot 4 + 3 = -5$. For $x = -1$: $f(-1) = -2 \\cdot 1 + 3 = 1$. For $x = 0$: $f(0) = 0 + 3 = 3$. For $x = 1$: $f(1) = -2 + 3 = 1$. For $x = 2$: $f(2) = -8 + 3 = -5$.

Nå plotter vi punktene $(-2, -5)$, $(-1, 1)$, $(0, 3)$, $(1, 1)$ og $(2, -5)$ i koordinatsystemet og tegner en jevn kurve gjennom dem. Legg merke til at denne grafen ikke er en rett linje – den er buet. Det er fordi funksjonen har et $x^2$-ledd. Slike kurver kalles **parabler**.

Når du skal tegne en graf, er det lurt å velge $x$-verdier som er spredt over hele området du er interessert i. Start gjerne med $x = 0$, ta med noen negative og noen positive verdier, og regn ut nøkternt. For lineære funksjoner (uten $x^2$) holder det med to eller tre punkter, men for andregradsfunksjoner trenger du gjerne fem eller flere for å få en fin kurve.`,
    },
    {
      id: '1t-3-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på verditabeller og graftegning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-3-n-quiz3-q0',
            task: 'Gitt $f(x) = x^2 - 4$. Hva er $f(2)$?',
            options: [
              { id: 'a', text: '$8$', isCorrect: false },
              { id: 'b', text: '$-8$', isCorrect: false },
              { id: 'c', text: '$0$', isCorrect: true },
              { id: 'd', text: '$4$', isCorrect: false },
            ],
            solution: 'Vi setter inn: $f(2) = 2^2 - 4 = 4 - 4 = 0$. Det betyr at $(2, 0)$ er et punkt på grafen – og siden $y = 0$ der, er det også et nullpunkt.',
          },
          {
            id: '1t-3-3-n-quiz3-q1',
            task: 'Gitt $f(x) = -2x^2 + 3$. Hva er $f(-1)$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$-5$', isCorrect: false },
              { id: 'c', text: '$1$', isCorrect: true },
              { id: 'd', text: '$-1$', isCorrect: false },
            ],
            solution: 'Vi setter inn $x = -1$: $f(-1) = -2 \\cdot (-1)^2 + 3 = -2 \\cdot 1 + 3 = -2 + 3 = 1$. Husk at $(-1)^2 = 1$.',
          },
          {
            id: '1t-3-3-n-quiz3-q2',
            task: 'Grafen til $f(x) = -2x^2 + 3$ er buet, ikke rett. Hvorfor?',
            options: [
              { id: 'a', text: 'Fordi koeffisienten er negativ', isCorrect: false },
              { id: 'b', text: 'Fordi funksjonen har et konstantledd', isCorrect: false },
              { id: 'c', text: 'Fordi funksjonen har et $x^2$-ledd', isCorrect: true },
              { id: 'd', text: 'Fordi vi bruker for få punkter', isCorrect: false },
            ],
            solution: 'Grafer med $x^2$-ledd (andregradsfunksjoner) gir buede kurver kalt parabler. Uten $x^2$-ledd (førstegradsfunksjoner) får vi rette linjer.',
          },
          {
            id: '1t-3-3-n-quiz3-q3',
            task: 'Hvor mange punkter bør du minimum beregne for å tegne en parabel?',
            options: [
              { id: 'a', text: '2 punkter', isCorrect: false },
              { id: 'b', text: '3 punkter', isCorrect: false },
              { id: 'c', text: '5 eller flere', isCorrect: true },
              { id: 'd', text: '1 punkt er nok', isCorrect: false },
            ],
            solution: 'For en parabel (andregradsfunksjon) bør du ha minst 5 punkter for å få en jevn, nøyaktig kurve. For lineære funksjoner holder det med 2-3, men parabler er buede og krever flere punkter.',
          },
        ],
      },
    },    {
      id: '1t-3-3-n-section4',
      type: 'text',
      content: `## Nullpunkter – der grafen møter $x$-aksen

Et **nullpunkt** er en $x$-verdi der funksjonen har verdien null, altså der $f(x) = 0$. Grafisk betyr det at grafen krysser eller berører $x$-aksen i det punktet. Nullpunkter er viktige fordi de ofte representerer interessante situasjoner: når er overskuddet null, når går ballen i bakken, når er kontoen tom?

For å finne nullpunktene setter vi $f(x) = 0$ og løser likningen. La oss ta $f(x) = 3x - 12$. Vi setter opp $3x - 12 = 0$, legger til 12 på begge sider og får $3x = 12$, og deretter $x = 4$. Funksjonen har nullpunkt i $x = 4$, som betyr at grafen krysser $x$-aksen i punktet $(4, 0)$.

Når funksjonen har et $x^2$-ledd, blir det litt mer spennende. Ta $f(x) = 2x^2 - 4x$. Vi setter $2x^2 - 4x = 0$ og faktoriserer: $2x(x - 2) = 0$. Et produkt er null når minst én av faktorene er null, så enten er $2x = 0$ (som gir $x = 0$) eller $x - 2 = 0$ (som gir $x = 2$). Funksjonen har to nullpunkter: $x = 0$ og $x = 2$.

Andregradsfunksjoner kan ha null, ett eller to nullpunkter. For eksempel har $f(x) = x^2 - 9$ nullpunkter i $x = -3$ og $x = 3$ (fordi $x^2 = 9$ gir $x = \\pm 3$). Funksjonen $f(x) = x^2 + 5x + 6$ kan faktoriseres som $(x + 2)(x + 3) = 0$, som gir $x = -2$ og $x = -3$.`,
    },
    {
      id: '1t-3-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på nullpunkter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-3-n-quiz4-q0',
            task: 'Hva er nullpunktet til $f(x) = 2x - 8$?',
            options: [
              { id: 'a', text: '$x = -4$', isCorrect: false },
              { id: 'b', text: '$x = 8$', isCorrect: false },
              { id: 'c', text: '$x = 2$', isCorrect: false },
              { id: 'd', text: '$x = 4$', isCorrect: true },
            ],
            solution: 'Vi setter $f(x) = 0$: $2x - 8 = 0 \\Rightarrow 2x = 8 \\Rightarrow x = 4$. Grafen krysser $x$-aksen i $(4, 0)$.',
          },
          {
            id: '1t-3-3-n-quiz4-q1',
            task: 'Hva betyr det grafisk at en funksjon har et nullpunkt?',
            options: [
              { id: 'a', text: 'Grafen krysser $y$-aksen', isCorrect: false },
              { id: 'b', text: 'Grafen krysser eller berører $x$-aksen', isCorrect: true },
              { id: 'c', text: 'Grafen går gjennom origo', isCorrect: false },
              { id: 'd', text: 'Grafen har en toppunkt', isCorrect: false },
            ],
            solution: 'Et nullpunkt er en $x$-verdi der $f(x) = 0$, altså $y = 0$. Grafisk betyr det at grafen krysser eller berører $x$-aksen. Punktet har formen $(x, 0)$.',
          },
          {
            id: '1t-3-3-n-quiz4-q2',
            task: 'Hva er nullpunktene til $f(x) = 2x^2 - 4x$?',
            options: [
              { id: 'a', text: '$x = 0$ og $x = 4$', isCorrect: false },
              { id: 'b', text: '$x = 2$ og $x = -2$', isCorrect: false },
              { id: 'c', text: '$x = 0$ og $x = 2$', isCorrect: true },
              { id: 'd', text: '$x = -4$ og $x = 0$', isCorrect: false },
            ],
            solution: 'Vi setter $2x^2 - 4x = 0$ og faktoriserer: $2x(x - 2) = 0$. Et produkt er null når minst en faktor er null: $2x = 0 \\Rightarrow x = 0$ eller $x - 2 = 0 \\Rightarrow x = 2$.',
          },
          {
            id: '1t-3-3-n-quiz4-q3',
            task: 'Funksjonen $f(x) = x^2 + 5x + 6$ kan faktoriseres som $(x + 2)(x + 3)$. Hva er nullpunktene?',
            options: [
              { id: 'a', text: '$x = 2$ og $x = 3$', isCorrect: false },
              { id: 'b', text: '$x = -2$ og $x = -3$', isCorrect: true },
              { id: 'c', text: '$x = 5$ og $x = 6$', isCorrect: false },
              { id: 'd', text: '$x = -5$ og $x = -6$', isCorrect: false },
            ],
            solution: 'Vi setter $(x + 2)(x + 3) = 0$. Enten er $x + 2 = 0 \\Rightarrow x = -2$ eller $x + 3 = 0 \\Rightarrow x = -3$. Pass på fortegnene – faktorene har pluss, så nullpunktene har minus.',
          },
          {
            id: '1t-3-3-n-quiz4-q4',
            task: 'Hvor mange nullpunkter kan en andregradsfunksjon ($f(x) = ax^2 + bx + c$) ha?',
            options: [
              { id: 'a', text: 'Alltid nøyaktig 2', isCorrect: false },
              { id: 'b', text: 'Alltid nøyaktig 1', isCorrect: false },
              { id: 'c', text: '0, 1 eller 2', isCorrect: true },
              { id: 'd', text: '1, 2 eller 3', isCorrect: false },
            ],
            solution: 'En andregradsfunksjon kan ha 0 nullpunkter (grafen berører aldri $x$-aksen), 1 nullpunkt (grafen tangerer $x$-aksen) eller 2 nullpunkter (grafen krysser $x$-aksen to steder).',
          },
        ],
      },
    },    {
      id: '1t-3-3-n-section5',
      type: 'text',
      content: `## Skjæringspunkter – der to grafer møter hverandre

Noen ganger har vi to forskjellige funksjoner og vil finne ut hvor grafene deres krysser hverandre. I et **skjæringspunkt** har de to funksjonene nøyaktig samme verdi for den samme $x$-verdien. Dermed setter vi funksjonene lik hverandre og løser likningen.

La oss se på $f(x) = x^2 - 1$ og $g(x) = x + 1$. Vi setter $f(x) = g(x)$: $x^2 - 1 = x + 1$. Vi flytter alt til venstre side: $x^2 - x - 2 = 0$. Faktorisering gir $(x - 2)(x + 1) = 0$, så $x = 2$ eller $x = -1$.

Nå kjenner vi $x$-koordinatene til skjæringspunktene, men vi trenger også $y$-koordinatene. Vi velger den enkleste funksjonen – her $g(x)$ – og setter inn: $g(2) = 2 + 1 = 3$ og $g(-1) = -1 + 1 = 0$. De to skjæringspunktene er altså $(2, 3)$ og $(-1, 0)$.

Et annet eksempel: $f(x) = -x^2 + 4$ og $g(x) = -5x + 10$. Vi setter dem like: $-x^2 + 4 = -5x + 10$. Vi samler alt på én side: $-x^2 + 5x - 6 = 0$, eller $x^2 - 5x + 6 = 0$ (ganget med $-1$). Faktorisering gir $(x - 2)(x - 3) = 0$, så $x = 2$ eller $x = 3$. Vi regner ut $y$-verdiene: $g(2) = 0$ og $g(3) = -5$. Skjæringspunktene er $(2, 0)$ og $(3, -5)$.

Teknikken er alltid den samme: sett funksjonene lik hverandre, løs likningen for $x$, og sett tilbake for å finne $y$. Skjæringspunkter dukker opp overalt i matematikk og økonomi – for eksempel der inntekt møter kostnad (nullpunktet for overskudd) eller der tilbud møter etterspørsel.`,
    },
    {
      id: '1t-3-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-3-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på skjæringspunkter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-3-3-n-quiz5-q0',
            task: 'Vi har $f(x) = x - 3$ og $g(x) = -2x + 3$. Hva er $x$-verdien i skjæringspunktet?',
            options: [
              { id: 'a', text: '$x = 0$', isCorrect: false },
              { id: 'b', text: '$x = 2$', isCorrect: true },
              { id: 'c', text: '$x = 3$', isCorrect: false },
              { id: 'd', text: '$x = -2$', isCorrect: false },
            ],
            solution: 'Vi setter $f(x) = g(x)$: $x - 3 = -2x + 3$. Vi legger til $2x$ på begge sider: $3x - 3 = 3$. Legger til 3: $3x = 6$. Deler på 3: $x = 2$.',
          },
          {
            id: '1t-3-3-n-quiz5-q1',
            task: 'Hva gjør du for å finne skjæringspunkter mellom to funksjoner $f(x)$ og $g(x)$?',
            options: [
              { id: 'a', text: 'Setter $f(x) = 0$ og $g(x) = 0$', isCorrect: false },
              { id: 'b', text: 'Legger sammen $f(x) + g(x)$', isCorrect: false },
              { id: 'c', text: 'Setter $f(x) = g(x)$ og løser for $x$', isCorrect: true },
              { id: 'd', text: 'Finner nullpunktene til begge funksjoner', isCorrect: false },
            ],
            solution: 'I et skjæringspunkt har de to funksjonene samme verdi for samme $x$. Vi setter derfor $f(x) = g(x)$ og løser likningen for å finne $x$-verdien(e).',
          },
          {
            id: '1t-3-3-n-quiz5-q2',
            task: 'Du har funnet at $f(x) = g(x)$ gir $x = 2$. Funksjonen $g(x) = -2x + 3$. Hva er $y$-koordinaten i skjæringspunktet?',
            options: [
              { id: 'a', text: '$y = 7$', isCorrect: false },
              { id: 'b', text: '$y = -1$', isCorrect: true },
              { id: 'c', text: '$y = 1$', isCorrect: false },
              { id: 'd', text: '$y = 3$', isCorrect: false },
            ],
            solution: 'Vi setter $x = 2$ inn i $g(x) = -2x + 3$: $g(2) = -2 \\cdot 2 + 3 = -4 + 3 = -1$. Skjæringspunktet er $(2, -1)$. Vi kunne også brukt $f(x)$ og fått samme svar.',
          },
          {
            id: '1t-3-3-n-quiz5-q3',
            task: 'Gitt $f(x) = x^2 - 1$ og $g(x) = x + 1$. Vi setter $x^2 - 1 = x + 1$ og får $x^2 - x - 2 = 0$. Hva er de to $x$-verdiene?',
            options: [
              { id: 'a', text: '$x = 1$ og $x = -2$', isCorrect: false },
              { id: 'b', text: '$x = 2$ og $x = -1$', isCorrect: true },
              { id: 'c', text: '$x = -2$ og $x = 1$', isCorrect: false },
              { id: 'd', text: '$x = 0$ og $x = 2$', isCorrect: false },
            ],
            solution: 'Vi faktoriserer $x^2 - x - 2 = (x - 2)(x + 1) = 0$. Da er $x - 2 = 0 \\Rightarrow x = 2$ eller $x + 1 = 0 \\Rightarrow x = -1$. De to skjæringspunktenes $x$-verdier er $2$ og $-1$.',
          },
          {
            id: '1t-3-3-n-quiz5-q4',
            task: 'Hvorfor velger vi gjerne den enkleste funksjonen for å finne $y$-koordinaten i skjæringspunktet?',
            options: [
              { id: 'a', text: 'Fordi den kompliserte funksjonen gir feil svar', isCorrect: false },
              { id: 'b', text: 'Fordi begge gir samme $y$-verdi, men den enkleste er lettere å regne med', isCorrect: true },
              { id: 'c', text: 'Fordi vi bare kan bruke lineære funksjoner', isCorrect: false },
              { id: 'd', text: 'Fordi den enkleste funksjonen alltid er $g(x)$', isCorrect: false },
            ],
            solution: 'I et skjæringspunkt gir $f(x)$ og $g(x)$ nøyaktig samme verdi. Derfor spiller det ingen rolle hvilken vi bruker – men den enkleste gir mindre regning og mindre sjanse for regnefeil.',
          },
        ],
      },
    },    {
      id: '1t-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi utforsket funksjonsbegrepet fra bunnen av.

**Matematiske modeller** er uttrykk som beskriver sammenhenger fra virkeligheten. Vi setter opp modeller ved å identifisere hva som er fast og hva som endrer seg, og lar $x$ representere den ukjente størrelsen.

**Funksjonsnotasjonen** $f(x)$ gir oss et presist språk for å snakke om slike sammenhenger. En **funksjon** er en regel som til hver $x$-verdi gir nøyaktig én $f(x)$-verdi. Vi evaluerer funksjoner ved å sette inn tall for $x$ og regne ut.

**Verditabeller** lages ved å velge noen $x$-verdier, regne ut $f(x)$ for hver, og notere resultatene. Hvert par $(x, f(x))$ gir et punkt i koordinatsystemet, og når vi forbinder punktene får vi grafen til funksjonen.

**Nullpunkter** er $x$-verdier der $f(x) = 0$, altså der grafen krysser $x$-aksen. Vi finner dem ved å sette $f(x) = 0$ og løse likningen. For førstegradsfunksjoner får vi ett nullpunkt, for andregradsfunksjoner kan vi få null, ett eller to.

**Skjæringspunkter** mellom to funksjoner finner vi ved å sette $f(x) = g(x)$ og løse for $x$. Vi bruker deretter den enkleste funksjonen til å finne $y$-koordinatene.`,
    },
  ],
  exercises: [],
};
