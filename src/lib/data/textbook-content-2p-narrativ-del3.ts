/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 2P – Seksjon 3: Statistikk – NARRATIV VERSJON
 * Kapittel 3.1–3.3
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1 NARRATIV: Beskrivende statistikk
// ============================================================================

export const CHAPTER_2P_3_1_NARRATIV: TextbookChapter = {
  id: '2p-3-1-narrativ',
  courseId: '2p',
  chapterNumber: '3.1',
  title: 'Beskrivende statistikk',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om hvordan vi kan oppsummere en hel verden av tall med noen få nøkkelbegreper -- fra gjennomsnitt og median til boksplott og frekvenstabeller.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke og vurdere valg av hensiktsmessige sentralmål og spredningsmål for statistisk datamateriale',
    'analysere og presentere funn i datasett fra lokalsamfunn og media',
  ],
  linkedChapterId: '2p-3-1',
  content: [
    {
      id: '2p-3-1-n-intro',
      type: 'text',
      content: `## Tallene som forteller historier

Forestill deg at du er rektor på en skole, og noen spør deg: «Hvordan gikk det med elevene på matteprøven?» Du har en liste med 200 resultater foran deg. Du kan ikke lese opp alle 200 tallene -- det ville ingen orket å høre på. I stedet trenger du noen få nøkkeltall som oppsummerer det viktigste. Nettopp dette er kjernen i **beskrivende statistikk**: å ta et stort, uoversiktlig datasett og destillere det ned til noen få tall og figurer som forteller oss hva dataene egentlig sier.

Statistikk omgir oss overalt. Når du leser at «gjennomsnittstemperaturen i Oslo var 7,3 grader i fjor», eller at «medianlønnen i Norge er 550 000 kroner», så møter du beskrivende statistikk i aksjon. Spørsmålet er bare: hva betyr disse tallene egentlig, og hvordan velger vi de riktige?

I dette kapittelet skal vi utforske tre store temaer. Først ser vi på **sentralmål** -- tall som beskriver sentrum i et datasett. Så går vi videre til **spredningsmål** som forteller hvor spredt dataene er. Og til slutt ser vi på hvordan vi kan **fremstille data grafisk** med stolpediagram, histogram og boksplott. Underveis lærer vi også om frekvenstabeller og kumulativ frekvens. La oss begynne.`,
    },
    {
      id: '2p-3-1-n-section1',
      type: 'text',
      content: `## Sentralmål -- å finne sentrum

Tenk deg at ni elever fikk følgende karakterer i matematikk: 2, 3, 3, 4, 4, 4, 5, 5, 6. Hva er en «typisk» karakter i denne gruppen? Det finnes tre ulike måter å svare på det spørsmålet, og hver gir et litt annet perspektiv.

Den første og mest kjente metoden er **gjennomsnittet**, også kalt middelverdien. Du regner det ut ved å legge sammen alle verdiene og dele på antall observasjoner: $\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n} = \\frac{\\sum x_i}{n}$. For karakterene våre blir det $\\bar{x} = \\frac{2 + 3 + 3 + 4 + 4 + 4 + 5 + 5 + 6}{9} = \\frac{36}{9} = 4{,}0$. Gjennomsnittet er altså 4,0 -- et tall som gir et fint bilde av gruppen, *så lenge dataene er noenlunde symmetriske*.

Den andre metoden er **medianen**, som er den midterste verdien når du sorterer alle tallene fra minst til størst. Med ni verdier er det verdi nummer fem, altså 4. Medianen bryr seg ikke om hvor ekstreme ytterverdiene er -- den sitter trygt i midten.

Den tredje metoden er **typetallet** (eller modus), som rett og slett er den verdien som forekommer oftest. Her er det 4, fordi den dukker opp tre ganger. Typetallet er spesielt nyttig for kategoriske data, for eksempel favorittfarge, der gjennomsnitt ikke gir mening.

Men her er det viktige spørsmålet: *når bruker du hva?* Gjennomsnittet fungerer fint for symmetriske data uten ekstreme verdier. Men tenk deg en bedrift med fem ansatte som tjener 30 000, 32 000, 34 000, 35 000 og 120 000 kroner. Gjennomsnittet blir 50 200 kroner, men fire av fem ansatte tjener langt under det. Den ene svært høye lønnen -- en **uteligger** -- drar gjennomsnittet opp. I slike tilfeller gir medianen (34 000 kr) et mye bedre bilde av en typisk lønn. Tommelfingerregelen er enkel: bruk gjennomsnitt for symmetriske data, median for skjeve data eller data med uteliggere, og typetall for kategoriske data.`,
    },
    {
      id: '2p-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på sentralmål:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-1-n-quiz1-q0',
            task: 'En bedrift har fem ansatte med månedslønninger: 30 000, 32 000, 34 000, 35 000 og 120 000 kr. Hvilket sentralmål gir best bilde av en «typisk» lønn?',
            options: [
              { id: 'a', text: 'Gjennomsnittet (50 200 kr)', isCorrect: false },
              { id: 'b', text: 'Medianen (34 000 kr)', isCorrect: true },
              { id: 'c', text: 'Typetallet', isCorrect: false },
              { id: 'd', text: 'Alle tre gir likt resultat', isCorrect: false },
            ],
            solution: 'Gjennomsnittet (50 200 kr) trekkes opp av den ene svært høye lønnen (120 000 kr), som er en uteligger. Medianen (34 000 kr) gir et mye bedre bilde av en typisk lønn.',
          },
          {
            id: '2p-3-1-n-quiz1-q1',
            task: 'Ni elever fikk karakterene 2, 3, 3, 4, 4, 4, 5, 5, 6. Hva er typetallet?',
            options: [
              { id: 'a', text: '3', isCorrect: false },
              { id: 'b', text: '4,0 (gjennomsnittet)', isCorrect: false },
              { id: 'c', text: '4 (forekommer flest ganger)', isCorrect: true },
              { id: 'd', text: '5', isCorrect: false },
            ],
            solution: 'Typetallet er verdien som forekommer oftest. Karakteren 4 dukker opp tre ganger -- mer enn noen annen verdi. Gjennomsnittet er også 4,0, men det er et annet mål.',
          },
          {
            id: '2p-3-1-n-quiz1-q2',
            task: 'Hva er gjennomsnittet av tallene 2, 3, 3, 4, 4, 4, 5, 5, 6?',
            options: [
              { id: 'a', text: '$3{,}5$', isCorrect: false },
              { id: 'b', text: '$4{,}5$', isCorrect: false },
              { id: 'c', text: '$4{,}0$', isCorrect: true },
              { id: 'd', text: '$3{,}8$', isCorrect: false },
            ],
            solution: '$\\bar{x} = \\frac{2 + 3 + 3 + 4 + 4 + 4 + 5 + 5 + 6}{9} = \\frac{36}{9} = 4{,}0$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-1-n-section2',
      type: 'text',
      content: `## Spredningsmål -- hvor spredt er dataene?

Å kjenne sentrum er bare halve historien. Tenk deg to klasser som begge har gjennomsnitt 15 på en prøve. I den ene klassen fikk alle mellom 13 og 17 poeng -- veldig jevnt. I den andre fikk noen 5 og andre 25 -- enorm variasjon. Gjennomsnittet er likt, men klassene er vidt forskjellige. For å fange opp denne forskjellen trenger vi **spredningsmål**.

Det enkleste spredningsmålet er **variasjonsbredden**, som er differansen mellom den største og den minste verdien: $R = x_{\\text{maks}} - x_{\\text{min}}$. For datasettet 3, 5, 7, 8, 10, 12, 14 blir variasjonsbredden $14 - 3 = 11$. Problemet med variasjonsbredden er at den bare ser på de to ytterste verdiene og ignorerer alt imellom.

En mer nyansert tilnærming er å bruke **kvartiler**. Kvartilene deler de sorterte dataene i fire like store deler. $Q_1$ (nedre kvartil) er medianen av den nedre halvdelen, $Q_2$ er selve medianen, og $Q_3$ (øvre kvartil) er medianen av den øvre halvdelen. For datasettet vårt (3, 5, 7, 8, 10, 12, 14) er medianen 8, $Q_1 = 5$ og $Q_3 = 12$. **Interkvartilbredden** (IQR) er forskjellen mellom øvre og nedre kvartil: $\\text{IQR} = Q_3 - Q_1 = 12 - 5 = 7$. IQR forteller oss spredningen i de midterste 50 prosentene av dataene, og er mye mer robust mot uteliggere enn variasjonsbredden.

Til slutt har vi **standardavviket** ($s$), som måler den gjennomsnittlige avstanden fra gjennomsnittet: $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n - 1}}$. For datasettet vårt er gjennomsnittet $\\bar{x} \\approx 8{,}43$, og standardavviket blir $s \\approx 3{,}85$. Et lavt standardavvik betyr at verdiene ligger tett rundt gjennomsnittet, mens et høyt standardavvik betyr stor spredning. Standardavviket er det mest brukte spredningsmålet i praksis fordi det tar hensyn til *alle* verdiene i datasettet.`,
    },
    {
      id: '2p-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på spredningsmål:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-1-n-quiz2-q0',
            task: 'To klasser fikk følgende resultater på en prøve. Klasse A: standardavvik 2,8. Klasse B: standardavvik 5,9. Begge har omtrent likt gjennomsnitt. Hva kan vi si?',
            options: [
              { id: 'a', text: 'Klasse A har bedre resultater enn klasse B', isCorrect: false },
              { id: 'b', text: 'Klasse B har bedre resultater enn klasse A', isCorrect: false },
              { id: 'c', text: 'Klasse A har mer jevne resultater, klasse B har større spredning', isCorrect: true },
              { id: 'd', text: 'Standardavviket sier ingenting om spredning', isCorrect: false },
            ],
            solution: 'Standardavviket måler spredningen i dataene. Klasse A ($s \\approx 2{,}8$) har mye jevnere resultater enn klasse B ($s \\approx 5{,}9$). Med likt gjennomsnitt betyr dette at klasse B har noen som gjør det veldig bra og noen som gjør det svakt.',
          },
          {
            id: '2p-3-1-n-quiz2-q1',
            task: 'For datasettet 3, 5, 7, 8, 10, 12, 14 er $Q_1 = 5$ og $Q_3 = 12$. Hva er interkvartilbredden (IQR)?',
            options: [
              { id: 'a', text: '$11$', isCorrect: false },
              { id: 'b', text: '$7$', isCorrect: true },
              { id: 'c', text: '$8{,}5$', isCorrect: false },
              { id: 'd', text: '$3{,}5$', isCorrect: false },
            ],
            solution: '$\\text{IQR} = Q_3 - Q_1 = 12 - 5 = 7$. IQR forteller spredningen i de midterste 50 prosentene av dataene.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-1-n-section3',
      type: 'text',
      content: `## Boksplott -- hele fordelingen i én figur

Nå som vi kan beregne sentralmål og spredningsmål, la oss se på en av de mest elegante måtene å fremstille data på: **boksplottet** (også kalt box-and-whisker-diagram). Et boksplott viser fordelingen av et helt datasett med bare fem nøkkeltall: minimum, $Q_1$, median, $Q_3$ og maksimum.

La oss ta et eksempel. Gitt datasettet 2, 4, 5, 7, 8, 9, 10, 12, 15 finner vi de fem nøkkeltallene slik: Minimum er 2, $Q_1$ er medianen av den nedre halvdelen (2, 4, 5, 7), altså $(4+5)/2 = 4{,}5$. Medianen er 8 (den midterste verdien). $Q_3$ er medianen av den øvre halvdelen (9, 10, 12, 15), altså $(10+12)/2 = 11$. Og maksimum er 15. I et boksplott tegner vi en boks fra $Q_1$ til $Q_3$ -- denne boksen representerer de midterste 50 prosentene av dataene, altså IQR. En strek inne i boksen markerer medianen. Og to «whiskers» (streker) strekker seg ut fra boksen til minimum og maksimum.

Men boksplottet har en ekstra finesse: det kan avsløre **uteliggere**. En uteligger er en observasjon som ligger mer enn $1{,}5 \\cdot \\text{IQR}$ under $Q_1$ eller over $Q_3$. I eksempelet vårt er IQR $= 11 - 4{,}5 = 6{,}5$. Den nedre grensen for uteliggere er $4{,}5 - 1{,}5 \\cdot 6{,}5 = -5{,}25$, og den øvre grensen er $11 + 1{,}5 \\cdot 6{,}5 = 20{,}75$. Alle verdiene i datasettet ligger innenfor disse grensene, så det er ingen uteliggere her.

I tillegg til boksplott bruker vi **stolpediagram** for kategoriske data eller diskrete verdier (stolpene har mellomrom mellom seg), og **histogram** for kontinuerlige data gruppert i klasser (stolpene står inntil hverandre, og arealet representerer frekvensen). Valget av diagramtype avhenger altså av hva slags data du har.`,
    },
    {
      id: '2p-3-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på boksplott og uteliggere:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-1-n-quiz3-q0',
            task: 'Et datasett har $Q_1 = 20$, $Q_3 = 40$ og IQR = 20. Hvilken verdi er en uteligger?',
            options: [
              { id: 'a', text: '55', isCorrect: false },
              { id: 'b', text: '42', isCorrect: false },
              { id: 'c', text: '15', isCorrect: false },
              { id: 'd', text: '72', isCorrect: true },
            ],
            solution: 'Øvre grense: $Q_3 + 1{,}5 \\cdot \\text{IQR} = 40 + 30 = 70$. Nedre grense: $Q_1 - 1{,}5 \\cdot \\text{IQR} = 20 - 30 = -10$. Verdien 72 > 70, altså er 72 en uteligger.',
          },
          {
            id: '2p-3-1-n-quiz3-q1',
            task: 'Hva viser boksen i et boksplott?',
            options: [
              { id: 'a', text: 'Alle verdiene i datasettet', isCorrect: false },
              { id: 'b', text: 'De midterste 50 % av dataene (fra $Q_1$ til $Q_3$)', isCorrect: true },
              { id: 'c', text: 'Gjennomsnittet pluss/minus standardavviket', isCorrect: false },
              { id: 'd', text: 'Minimum og maksimum', isCorrect: false },
            ],
            solution: 'Boksen i et boksplott strekker seg fra $Q_1$ til $Q_3$ og representerer de midterste 50 prosentene av dataene (interkvartilbredden). Streken inni boksen viser medianen.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-1-n-section4',
      type: 'text',
      content: `## Frekvenstabeller -- når vi grupperer data

Når vi har mange observasjoner, er det upraktisk å jobbe med hvert enkelt tall. I stedet grupperer vi dataene i en **frekvenstabell**. La oss se på et eksempel: 30 elever ble spurt om hvor mange timer de trener per uke. Resultatene ble gruppert i klasser: 0--2 timer (8 elever), 3--5 timer (12 elever), 6--8 timer (7 elever) og 9--11 timer (3 elever).

**Frekvensen** er rett og slett antall observasjoner i hver klasse. Men vi kan få mer informasjon ved å beregne **relativ frekvens**, som er andelen av totalen: $\\text{relativ frekvens} = \\frac{\\text{frekvens}}{\\text{totalt antall}}$. For klassen 0--2 timer er den relative frekvensen $8/30 \\approx 0{,}27$, altså 27 prosent. For klassen 3--5 timer er den $12/30 = 0{,}40$, altså 40 prosent.

Enda mer nyttig er **kumulativ frekvens**, som viser summen av frekvensene opp til og med en bestemt klasse. For de fire klassene våre blir den kumulative frekvensen 8, 20, 27 og 30. Og den **kumulative relative frekvensen** blir 0,27, 0,67, 0,90 og 1,00. Hva betyr dette? Jo, for eksempel kan vi lese av at 67 prosent av elevene trener 5 timer eller mindre per uke.

Den kumulative frekvensen er spesielt nyttig for å finne **medianen** i grupperte data. Medianen ligger der den kumulative relative frekvensen passerer 0,50. I vårt eksempel passerer den 0,50 i klassen 3--5 timer (fra 0,27 til 0,67), så vi vet at medianen ligger i denne klassen. Vi kan også finne **typetallsklassen**, som er klassen med høyest frekvens -- her er det 3--5 timer med 12 observasjoner. Frekvenstabeller gir oss et kraftig verktøy for å organisere og forstå store datasett.`,
    },
    {
      id: '2p-3-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på frekvenstabeller:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-1-n-quiz4-q0',
            task: 'I en undersøkelse blant 40 elever er den kumulative relative frekvensen for klassen 0–3 timer skjermtid 0,325, og for klassen 4–5 timer er den 0,70. I hvilken klasse ligger medianen?',
            options: [
              { id: 'a', text: '0–3 timer', isCorrect: false },
              { id: 'b', text: '6–7 timer', isCorrect: false },
              { id: 'c', text: '4–5 timer', isCorrect: true },
              { id: 'd', text: '8+ timer', isCorrect: false },
            ],
            solution: 'Medianen ligger der den kumulative relative frekvensen passerer 0,50. Den går fra 0,325 (etter 0–3 timer) til 0,70 (etter 4–5 timer). Siden 0,50 ligger mellom disse, er medianen i klassen 4–5 timer.',
          },
          {
            id: '2p-3-1-n-quiz4-q1',
            task: 'I en frekvenstabell har klassen 0–2 timer 8 elever av totalt 30. Hva er den relative frekvensen for denne klassen?',
            options: [
              { id: 'a', text: '$\\frac{8}{30} \\approx 0{,}27$', isCorrect: true },
              { id: 'b', text: '$\\frac{30}{8} = 3{,}75$', isCorrect: false },
              { id: 'c', text: '$8 \\%$', isCorrect: false },
              { id: 'd', text: '$0{,}08$', isCorrect: false },
            ],
            solution: 'Relativ frekvens = frekvens / totalt antall = $8/30 \\approx 0{,}27$, altså 27 %. Det viser at 27 % av elevene trener 0–2 timer per uke.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-1-n-section5',
      type: 'text',
      content: `## Å velge riktig verktøy

Vi har nå en hel verktøykasse med statistiske begreper. Men det store spørsmålet i praksis er alltid: *hvilket verktøy skal jeg bruke?* La oss gå gjennom noen typiske situasjoner.

Tenk deg at en bedrift har 12 ansatte med følgende månedslønninger (i tusen kroner): 28, 30, 30, 32, 33, 35, 36, 38, 40, 42, 45 og 85. Gjennomsnittet er 39 500 kroner, men medianen er bare 35 500 kroner. Typetallet er 30 000 kroner. Hva er «riktig»? Gjennomsnittet trekkes opp av den ene personen som tjener 85 000 kroner. Medianen gir et bedre bilde av hva en typisk ansatt tjener. Hvis bedriftens leder sier at «gjennomsnittslønnen er 39 500 kroner», er det teknisk korrekt, men misvisende. Spredningsmålene avslører hva som foregår: $Q_1 = 31$, $Q_3 = 41$, IQR $= 10$. Den øvre grensen for uteliggere er $41 + 1{,}5 \\cdot 10 = 56$. Verdien 85 er godt over denne grensen, altså er det en tydelig uteligger.

Denne situasjonen er ikke uvanlig. Inntektsdata er nesten alltid skjevfordelt -- noen få tjener veldig mye, mens de fleste tjener moderat. Derfor rapporterer Statistisk sentralbyrå *medianen* som mål på typisk inntekt i Norge, ikke gjennomsnittet.

Hva med grafisk fremstilling? Når du har kontinuerlige data som tid, lengde eller vekt, er histogrammet det beste valget. For kategoriske data som favorittfag eller kommune bruker du stolpediagram. Og når du vil sammenligne fordelingen mellom grupper -- for eksempel gutter og jenter på en sprinttest -- er boksplottet uslåelig. Det viser med ett blikk både sentrum, spredning og eventuelle uteliggere.

Beskrivende statistikk handler i bunn og grunn om å være en god forteller: du velger de tallene og figurene som gir det mest ærlige og fullstendige bildet av dataene dine.`,
    },
    {
      id: '2p-3-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-3-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på valg av statistisk verktøy:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-1-n-quiz5-q0',
            task: 'Hvorfor rapporterer Statistisk sentralbyrå medianen som mål på typisk inntekt i Norge, i stedet for gjennomsnittet?',
            options: [
              { id: 'a', text: 'Fordi medianen alltid er høyere enn gjennomsnittet', isCorrect: false },
              { id: 'b', text: 'Fordi medianen er enklere å beregne', isCorrect: false },
              { id: 'c', text: 'Fordi det er en lov som krever det', isCorrect: false },
              { id: 'd', text: 'Fordi inntektsdata er skjevfordelt med noen svært høye inntekter, og medianen er mer robust mot uteliggere', isCorrect: true },
            ],
            solution: 'Inntektsdata er typisk skjevfordelt -- noen få tjener svært mye, noe som drar gjennomsnittet opp. Medianen påvirkes ikke av uteliggere og gir et bedre bilde av hva en typisk person tjener.',
          },
          {
            id: '2p-3-1-n-quiz5-q1',
            task: 'Du skal sammenligne fordelingen av tid brukt på lekser mellom gutter og jenter. Hvilken grafisk fremstilling er best?',
            options: [
              { id: 'a', text: 'Sektordiagram', isCorrect: false },
              { id: 'b', text: 'Boksplott (én for gutter, én for jenter)', isCorrect: true },
              { id: 'c', text: 'Stolpediagram', isCorrect: false },
              { id: 'd', text: 'Linjediagram', isCorrect: false },
            ],
            solution: 'Boksplott er ideelt for å sammenligne fordelinger mellom grupper. Det viser sentrum (median), spredning (IQR) og eventuelle uteliggere med ett blikk for begge gruppene.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har nå reist gjennom de viktigste verktøyene i beskrivende statistikk. La oss oppsummere det viktigste du har lært.

**Sentralmål** beskriver sentrum i et datasett. **Gjennomsnittet** $\\bar{x} = \\frac{\\sum x_i}{n}$ fungerer best for symmetriske data, men påvirkes av uteliggere. **Medianen** er den midterste verdien i sorterte data og er robust mot ekstreme verdier -- bruk den når data er skjeve. **Typetallet** er verdien som forekommer oftest, og er spesielt nyttig for kategoriske data.

**Spredningsmål** beskriver hvor spredt dataene er. **Variasjonsbredden** $R = x_{\\text{maks}} - x_{\\text{min}}$ er enkel, men sårbar for uteliggere. **Kvartilene** $Q_1$, $Q_2$ og $Q_3$ deler dataene i fire like deler. **Interkvartilbredden** $\\text{IQR} = Q_3 - Q_1$ viser spredningen i de midterste 50 prosentene. **Standardavviket** $s = \\sqrt{\\frac{\\sum (x_i - \\bar{x})^2}{n-1}}$ er den gjennomsnittlige avstanden fra gjennomsnittet og tar hensyn til alle verdier.

**Grafisk fremstilling** gjør data visuelt: stolpediagram for kategoriske data, histogram for kontinuerlige data, og **boksplott** for å vise fordelingen med fem nøkkeltall (min, $Q_1$, median, $Q_3$, maks). En **uteligger** er en verdi mer enn $1{,}5 \\cdot \\text{IQR}$ utenfor kvartilene.

**Frekvenstabeller** organiserer data med frekvens, relativ frekvens og **kumulativ frekvens**, som brukes til å finne median og kvartiler i grupperte data.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2 NARRATIV: Normalfordeling
// ============================================================================

export const CHAPTER_2P_3_2_NARRATIV: TextbookChapter = {
  id: '2p-3-2-narrativ',
  courseId: '2p',
  chapterNumber: '3.2',
  title: 'Normalfordeling',
  subtitle: 'Narrativ versjon',
  description:
    'Historien om den berømte klokkekurven som dukker opp overalt -- fra høyder og fødselsvekter til IQ og lyspærer -- og hvordan du kan bruke den til å forstå verden.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke og vurdere valg av hensiktsmessige sentralmål og spredningsmål for statistisk datamateriale',
  ],
  linkedChapterId: '2p-3-2',
  content: [
    {
      id: '2p-3-2-n-intro',
      type: 'text',
      content: `## Klokkekurven som styrer verden

Visste du at hvis du målte høyden til alle 18 år gamle gutter i Norge og laget et histogram av resultatene, ville du fått en nesten perfekt klokkeformet kurve? De fleste guttene ville samlet seg rundt 180 centimeter, og det ville blitt færre og færre jo lenger du gikk fra dette senteret -- noen få veldig korte, noen få veldig høye, men de aller fleste et sted i nærheten av gjennomsnittet.

Denne formen -- symmetrisk, med en topp i midten og haler som faller jevnt av på begge sider -- kalles **normalfordelingen**. Den er også kjent som Gausskurven (oppkalt etter den tyske matematikeren Carl Friedrich Gauss) eller den berømte «bell curve». Og den dukker opp *overalt*. Høyder, fødselsvekter, blodtrykk, IQ-skårer, feilmarginer i produksjon -- listen er lang.

I dette kapittelet skal vi utforske normalfordelingen i dybden. Vi begynner med å forstå hva den er og hva som kjennetegner den. Så lærer vi den kraftige **68--95--99,7-regelen** som lar oss svare på spørsmål om andeler uten avanserte beregninger. Og til slutt møter vi **z-skåren**, et verktøy som lar oss sammenligne epler og pærer -- eller rettere sagt, resultater fra helt ulike prøver og målinger.`,
    },
    {
      id: '2p-3-2-n-section1',
      type: 'text',
      content: `## Hva er normalfordelingen?

La oss begynne med det grunnleggende. **Normalfordelingen** er en matematisk modell som beskriver hvordan verdier fordeler seg i mange naturlige fenomener. Den har noen klare kjennetegn som gjør den lett å kjenne igjen.

For det første er den **symmetrisk** rundt gjennomsnittet $\\mu$. Det betyr at venstre side av kurven er et speilbilde av høyre side. For det andre er gjennomsnitt, median og typetall alle *like* -- de faller sammen i det ene toppunktet på kurven. For det tredje nærmer kurven seg, men berører aldri, $x$-aksen. Det betyr at det alltid er en liten sannsynlighet for verdier langt fra sentrum, selv om den sannsynligheten er forsvinnende liten.

Formen på kurven bestemmes av to tall: **gjennomsnittet $\\mu$** bestemmer hvor sentrum ligger, og **standardavviket $\\sigma$** bestemmer hvor bred kurven er. Stort standardavvik gir en bred og flat kurve -- verdiene sprer seg mye. Lite standardavvik gir en smal og høy kurve -- verdiene samler seg tett rundt gjennomsnittet.

La oss ta et konkret eksempel. Høyden til norske 18-årige gutter er tilnærmet normalfordelt med $\\mu = 180$ cm og $\\sigma = 7$ cm. Hva betyr det i praksis? De fleste guttene har en høyde nær 180 cm. Gjennomsnittet, medianen og typetallet er alle omtrent 180 cm. Standardavviket på 7 cm betyr at en «typisk» avstand fra gjennomsnittet er 7 cm. Og fordi kurven er symmetrisk, er like mange høyere enn 180 cm som lavere.

Men det er viktig å huske at **ikke alt er normalfordelt**. Inntekt, boligpriser og ventetider er typisk *skjevfordelt* og følger ikke denne pene klokkekurven. Normalfordelingen er et kraftig verktøy, men du må alltid sjekke at den passer til dataene dine.`,
    },
    {
      id: '2p-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på normalfordelingen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-2-n-quiz1-q0',
            task: 'Hvilken påstand om normalfordelingen er korrekt?',
            options: [
              { id: 'a', text: 'Kurven er skjev mot høyre', isCorrect: false },
              { id: 'b', text: 'Standardavviket bestemmer hvor sentrum er', isCorrect: false },
              { id: 'c', text: 'Gjennomsnitt, median og typetall er like', isCorrect: true },
              { id: 'd', text: 'Alle datasett er normalfordelte', isCorrect: false },
            ],
            solution: 'Normalfordelingen er symmetrisk, så gjennomsnitt = median = typetall. Standardavviket bestemmer bredden (ikke sentrum), og langt fra alle datasett er normalfordelte.',
          },
          {
            id: '2p-3-2-n-quiz1-q1',
            task: 'Hva skjer med normalfordelingskurven dersom standardavviket $\\sigma$ øker?',
            options: [
              { id: 'a', text: 'Kurven flyttes mot høyre', isCorrect: false },
              { id: 'b', text: 'Kurven blir smalere og høyere', isCorrect: false },
              { id: 'c', text: 'Kurven blir bredere og flatere', isCorrect: true },
              { id: 'd', text: 'Kurven endrer ikke form', isCorrect: false },
            ],
            solution: 'Stort standardavvik betyr at verdiene sprer seg mer, noe som gir en bredere og flatere kurve. Lite standardavvik gir en smal og høy kurve der verdiene samler seg tett rundt gjennomsnittet.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-2-n-section2',
      type: 'text',
      content: `## Den empiriske regelen -- 68, 95 og 99,7

Nå kommer vi til noe virkelig nyttig. For enhver normalfordeling med gjennomsnitt $\\mu$ og standardavvik $\\sigma$ gjelder en elegant tommelfingerregel kjent som **den empiriske regelen** eller **68--95--99,7-regelen**.

Regelen sier at ca. **68 prosent** av alle verdier ligger innenfor $\\mu \\pm 1\\sigma$, altså mellom $\\mu - \\sigma$ og $\\mu + \\sigma$. Ca. **95 prosent** ligger innenfor $\\mu \\pm 2\\sigma$. Og ca. **99,7 prosent** ligger innenfor $\\mu \\pm 3\\sigma$. Det betyr at nesten alle verdier -- 99,7 prosent -- befinner seg innenfor tre standardavvik fra gjennomsnittet.

La oss gjøre dette konkret med et eksempel. Vekten til nyfødte barn er normalfordelt med $\\mu = 3{,}5$ kg og $\\sigma = 0{,}5$ kg. Mellom hvilke verdier ligger 95 prosent av fødselsvektene? Vi beregner $\\mu \\pm 2\\sigma$: $3{,}5 - 2 \\cdot 0{,}5 = 2{,}5$ kg og $3{,}5 + 2 \\cdot 0{,}5 = 4{,}5$ kg. Altså ligger 95 prosent av fødselsvektene mellom 2,5 og 4,5 kg.

Men vi kan få enda mer ut av regelen. Hvor stor andel veier *mer* enn 4,5 kg? Siden 95 prosent ligger innenfor $\\mu \\pm 2\\sigma$, ligger 5 prosent utenfor. Og fordi fordelingen er symmetrisk, er halvparten av disse 5 prosentene over $\\mu + 2\\sigma$ og halvparten under $\\mu - 2\\sigma$. Altså veier ca. 2,5 prosent av nyfødte mer enn 4,5 kg.

Denne logikken kan du bruke om og om igjen. Levetiden til en type lyspære er normalfordelt med $\\mu = 1\\,200$ timer og $\\sigma = 100$ timer. 68 prosent varer mellom 1 100 og 1 300 timer (innenfor $\\mu \\pm 1\\sigma$). Bare 2,5 prosent varer lenger enn 1 400 timer ($\\mu + 2\\sigma$). Og nesten ingen -- bare 0,15 prosent -- har en levetid under 900 timer ($\\mu - 3\\sigma$).`,
    },
    {
      id: '2p-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på den empiriske regelen:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-2-n-quiz2-q0',
            task: 'IQ-skårer er normalfordelt med $\\mu = 100$ og $\\sigma = 15$. Hvor stor andel har IQ mellom 85 og 115?',
            options: [
              { id: 'a', text: 'Ca. 50 %', isCorrect: false },
              { id: 'b', text: 'Ca. 68 %', isCorrect: true },
              { id: 'c', text: 'Ca. 95 %', isCorrect: false },
              { id: 'd', text: 'Ca. 99,7 %', isCorrect: false },
            ],
            solution: '$85 = 100 - 15 = \\mu - \\sigma$ og $115 = 100 + 15 = \\mu + \\sigma$. Intervallet $\\mu \\pm 1\\sigma$ inneholder ca. 68 % ifølge den empiriske regelen.',
          },
          {
            id: '2p-3-2-n-quiz2-q1',
            task: 'Vekten til nyfødte er normalfordelt med $\\mu = 3{,}5$ kg og $\\sigma = 0{,}5$ kg. Omtrent hvor stor andel veier mer enn 4,5 kg?',
            options: [
              { id: 'a', text: 'Ca. 16 %', isCorrect: false },
              { id: 'b', text: 'Ca. 5 %', isCorrect: false },
              { id: 'c', text: 'Ca. 2,5 %', isCorrect: true },
              { id: 'd', text: 'Ca. 0,15 %', isCorrect: false },
            ],
            solution: '$4{,}5 = 3{,}5 + 2 \\cdot 0{,}5 = \\mu + 2\\sigma$. Ifølge den empiriske regelen ligger 95 % innenfor $\\mu \\pm 2\\sigma$, så 5 % er utenfor. Symmetri gir 2,5 % over $\\mu + 2\\sigma$.',
          },
          {
            id: '2p-3-2-n-quiz2-q2',
            task: 'Levetiden til lyspærer er normalfordelt med $\\mu = 1\\,200$ timer og $\\sigma = 100$ timer. Mellom hvilke verdier varer 68 % av lyspærene?',
            options: [
              { id: 'a', text: 'Mellom 1 000 og 1 400 timer', isCorrect: false },
              { id: 'b', text: 'Mellom 1 100 og 1 300 timer', isCorrect: true },
              { id: 'c', text: 'Mellom 900 og 1 500 timer', isCorrect: false },
              { id: 'd', text: 'Mellom 1 150 og 1 250 timer', isCorrect: false },
            ],
            solution: '$\\mu \\pm 1\\sigma = 1\\,200 \\pm 100$, altså mellom 1 100 og 1 300 timer. Den empiriske regelen sier at ca. 68 % av verdiene ligger innenfor $\\mu \\pm 1\\sigma$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-2-n-section3',
      type: 'text',
      content: `## Z-skåren -- å sammenligne epler og pærer

Tenk deg at du har fått to prøver tilbake: 78 poeng i norsk og 82 poeng i matte. Hvilken prøve gikk best? Du kan ikke bare se på poengene, fordi prøvene kan ha vært ulikt vanskelige. Kanskje norskprøven var mye vanskeligere og 78 poeng var et fantastisk resultat, mens matteprøven var lett og 82 var bare gjennomsnittlig.

For å kunne sammenligne resultater fra ulike fordelinger bruker vi **z-skåren**, som forteller hvor mange standardavvik en observasjon ligger fra gjennomsnittet: $z = \\frac{x - \\mu}{\\sigma}$. Hvis $z = 0$, er verdien lik gjennomsnittet. Hvis $z = 1$, ligger den ett standardavvik over. Hvis $z = -2$, ligger den to standardavvik under.

La oss bruke dette. Kari fikk 78 poeng på norskprøven der $\\mu = 65$ og $\\sigma = 10$. Z-skåren blir $z = \\frac{78 - 65}{10} = 1{,}3$. På matteprøven fikk hun 82 poeng, med $\\mu = 70$ og $\\sigma = 8$. Z-skåren blir $z = \\frac{82 - 70}{8} = 1{,}5$. Kari lå 1,3 standardavvik over gjennomsnittet i norsk og 1,5 standardavvik over i matte. Altså gjorde hun det *relativt sett best i matte*, selv om norskresultatet var lavere.

Z-skåren kan også brukes sammen med den empiriske regelen. Hvis Ola løp 100 meter på 12,2 sekunder, og klassen hadde $\\mu = 13{,}5$ s og $\\sigma = 1{,}0$ s, blir z-skåren $z = \\frac{12{,}2 - 13{,}5}{1{,}0} = -1{,}3$. Negativt fortegn betyr at han er *under* gjennomsnittet i tid, altså *raskere*. Med z = −1,3 er han raskere enn de fleste i klassen -- omtrent 90 prosent av klassen er langsommere. Vi kan også snu formelen for å finne en verdi fra en z-skår: $x = \\mu + z \\cdot \\sigma$. En elev med $z = 0{,}5$ hadde en tid på $13{,}5 + 0{,}5 \\cdot 1{,}0 = 14{,}0$ sekunder.`,
    },
    {
      id: '2p-3-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på z-skårer:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-2-n-quiz3-q0',
            task: 'Kari fikk z-skår 1,3 i norsk og 1,5 i matte. Hva kan vi konkludere?',
            options: [
              { id: 'a', text: 'Kari er bedre i norsk fordi norsk er vanskeligere', isCorrect: false },
              { id: 'b', text: 'Kari gjorde det relativt best i matte fordi hun lå flere standardavvik over gjennomsnittet der', isCorrect: true },
              { id: 'c', text: 'Vi kan ikke sammenligne fordi prøvene er ulike', isCorrect: false },
              { id: 'd', text: 'Begge resultatene er like gode', isCorrect: false },
            ],
            solution: 'Z-skåren gjør det nettopp mulig å sammenligne resultater fra ulike fordelinger. Kari lå 1,5 standardavvik over gjennomsnittet i matte mot 1,3 i norsk, så hun gjorde det relativt best i matte.',
          },
          {
            id: '2p-3-2-n-quiz3-q1',
            task: 'Ola løp 100 meter på 12,2 sekunder. Klassen hadde $\\mu = 13{,}5$ s og $\\sigma = 1{,}0$ s. Hva er z-skåren, og hva betyr den?',
            options: [
              { id: 'a', text: '$z = 1{,}3$ -- Ola er langsommere enn gjennomsnittet', isCorrect: false },
              { id: 'b', text: '$z = -1{,}3$ -- Ola er raskere enn de fleste i klassen', isCorrect: true },
              { id: 'c', text: '$z = 0{,}87$ -- Ola er omtrent gjennomsnittlig', isCorrect: false },
              { id: 'd', text: '$z = -0{,}13$ -- Ola er litt raskere enn gjennomsnittet', isCorrect: false },
            ],
            solution: '$z = \\frac{12{,}2 - 13{,}5}{1{,}0} = -1{,}3$. Negativt fortegn betyr at han er under gjennomsnittet i *tid*, altså *raskere*. Han ligger 1,3 standardavvik under gjennomsnittstiden.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-2-n-section4',
      type: 'text',
      content: `## Normalfordelingen i hverdagen

Normalfordelingen er ikke bare teori -- den brukes i mange praktiske sammenhenger rundt oss, ofte uten at vi merker det.

I **kvalitetskontroll** bruker fabrikker normalfordelingen til å avgjøre om produktene holder mål. Tenk på en fabrikk som produserer bolter med lengde $\\mu = 50$ mm og $\\sigma = 0{,}2$ mm. Bolter utenfor $50 \\pm 0{,}4$ mm kasseres. Siden $0{,}4 = 2\\sigma$, vet vi at 95 prosent ligger innenfor denne grensen, og 5 prosent kasseres. Bedriften kan bruke denne informasjonen til å planlegge produksjonen og budsjettere for svinn.

I **medisin** er blodtrykk, kolesterolnivå og andre biologiske mål tilnærmet normalfordelt. Legen din bruker normalfordelingen -- bevisst eller ubevisst -- når hen vurderer om verdiene dine er «normale» eller «unormale». Systolisk blodtrykk hos friske voksne er for eksempel normalfordelt med $\\mu = 120$ mmHg og $\\sigma = 15$ mmHg. En person med blodtrykk 150 mmHg har z-skår $z = \\frac{150 - 120}{15} = 2{,}0$ -- to standardavvik over gjennomsnittet. Bare ca. 2,5 prosent av friske voksne har blodtrykk over dette, noe som kan tyde på forhøyet blodtrykk.

I **utdanning** brukes normalfordelingen blant annet til å standardisere prøveresultater. Resultatene på nasjonale prøver er ofte tilnærmet normalfordelt, og z-skåren brukes for å plassere eleven på en skala som er sammenlignbar på tvers av år og klasser.

I **forskning** danner normalfordelingen grunnlaget for mye av den statistiske analysen vi støter på. Feilmarginer i meningsmålinger, konfidensintervaller og hypotesetester bygger alle på antakelsen om at data er normalfordelt -- eller at gjennomsnittet av mange målinger er det. Denne siste innsikten, kjent som sentralgrenseteoremet, er en av statistikkens mest elegante resultater.`,
    },
    {
      id: '2p-3-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på normalfordelingen i praksis:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-2-n-quiz4-q0',
            task: 'En fabrikk produserer bolter med lengde normalfordelt med $\\mu = 50$ mm og $\\sigma = 0{,}2$ mm. Bolter utenfor $50 \\pm 0{,}4$ mm kasseres. Hvor stor andel kasseres?',
            options: [
              { id: 'a', text: 'Ca. 32 %', isCorrect: false },
              { id: 'b', text: 'Ca. 0,3 %', isCorrect: false },
              { id: 'c', text: 'Ca. 5 %', isCorrect: true },
              { id: 'd', text: 'Ca. 10 %', isCorrect: false },
            ],
            solution: '$0{,}4$ mm $= 2 \\cdot 0{,}2$ mm $= 2\\sigma$. Innenfor $\\mu \\pm 2\\sigma$ er 95 %. Utenfor er 5 %. Altså kasseres ca. 5 % av boltene.',
          },
          {
            id: '2p-3-2-n-quiz4-q1',
            task: 'En person har blodtrykk 150 mmHg. Systolisk blodtrykk er normalfordelt med $\\mu = 120$ og $\\sigma = 15$. Hvor mange standardavvik over gjennomsnittet er denne verdien?',
            options: [
              { id: 'a', text: '1 standardavvik', isCorrect: false },
              { id: 'b', text: '2 standardavvik', isCorrect: true },
              { id: 'c', text: '3 standardavvik', isCorrect: false },
              { id: 'd', text: '1,5 standardavvik', isCorrect: false },
            ],
            solution: '$z = \\frac{150 - 120}{15} = \\frac{30}{15} = 2{,}0$. Personen ligger 2 standardavvik over gjennomsnittet, noe som er uvanlig høyt (bare ca. 2,5 % av friske voksne har blodtrykk over dette).',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-2-n-section5',
      type: 'text',
      content: `## Å tenke i standardavvik

La oss avslutte med å bygge opp intuisjonen din for normalfordelingen gjennom et sammensatt eksempel. Tenk deg to elever, Ole og Kari, som har tatt tre prøver med følgende resultater:

Ole fikk 72 i norsk ($\\mu = 60$, $\\sigma = 8$), 55 i matte ($\\mu = 50$, $\\sigma = 5$) og 80 i engelsk ($\\mu = 75$, $\\sigma = 10$). Kari fikk 68 i norsk, 48 i matte og 85 i engelsk. Hvem gjorde det best?

Ved første øyekast er det fristende å legge sammen poengene, men det gir ikke mening fordi prøvene har ulikt gjennomsnitt og ulik spredning. I stedet beregner vi z-skårer. Ole: norsk $z = (72-60)/8 = 1{,}5$, matte $z = (55-50)/5 = 1{,}0$, engelsk $z = (80-75)/10 = 0{,}5$. Total z-skår: 3,0. Kari: norsk $z = (68-60)/8 = 1{,}0$, matte $z = (48-50)/5 = -0{,}4$, engelsk $z = (85-75)/10 = 1{,}0$. Total z-skår: 1,6.

Ole har en gjennomsnittlig z-skår på 1,0 -- han ligger ett standardavvik over gjennomsnittet i snitt. Kari har en gjennomsnittlig z-skår på omtrent 0,53. Ole gjør det altså relativt best totalt sett. Den største forskjellen mellom dem er i matte: Ole har $z = 1{,}0$ og Kari har $z = -0{,}4$, en forskjell på hele 1,4 standardavvik.

Denne måten å tenke på -- å «oversette» fra råtall til standardavvik -- er utrolig kraftig. Den lar deg sammenligne ting som i utgangspunktet ikke er sammenlignbare. Og den gir deg et presist språk for å snakke om hvor uvanlig en observasjon er. En z-skår på 2 betyr at du er blant de øverste 2,5 prosentene. En z-skår på 3 betyr at du er blant de øverste 0,15 prosentene. Det er språket normalfordelingen gir oss.`,
    },
    {
      id: '2p-3-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-3-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på z-skårer og sammenligning:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-2-n-quiz5-q0',
            task: 'Blodtrykket (systolisk) hos friske voksne er normalfordelt med $\\mu = 120$ mmHg og $\\sigma = 15$ mmHg. En person har blodtrykk 150 mmHg. Hva er z-skåren?',
            options: [
              { id: 'a', text: '$z = 1{,}0$', isCorrect: false },
              { id: 'b', text: '$z = 2{,}0$', isCorrect: true },
              { id: 'c', text: '$z = 30$', isCorrect: false },
              { id: 'd', text: '$z = -2{,}0$', isCorrect: false },
            ],
            solution: '$z = \\frac{150 - 120}{15} = \\frac{30}{15} = 2{,}0$. Personen har et blodtrykk som er 2 standardavvik over gjennomsnittet.',
          },
          {
            id: '2p-3-2-n-quiz5-q1',
            task: 'Ole har gjennomsnittlig z-skår 1,0 på tre prøver, mens Kari har gjennomsnittlig z-skår 0,53. Hva betyr det?',
            options: [
              { id: 'a', text: 'Ole fikk høyere poengsum enn Kari på alle prøvene', isCorrect: false },
              { id: 'b', text: 'Ole gjorde det relativt bedre totalt sett -- han lå i snitt 1 standardavvik over gjennomsnittet', isCorrect: true },
              { id: 'c', text: 'Kari gjorde det best fordi z-skåren er nærmere null', isCorrect: false },
              { id: 'd', text: 'Vi kan ikke sammenligne fordi prøvene var forskjellige', isCorrect: false },
            ],
            solution: 'Z-skåren gjør det mulig å sammenligne på tvers av prøver. Ole lå i snitt 1,0 standardavvik over gjennomsnittet, Kari 0,53. Ole gjorde det altså relativt bedre totalt, selv om vi ikke vet de faktiske poengene.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Normalfordelingen er en av de viktigste modellene i hele statistikken, og nå har du verktøyene til å bruke den.

**Normalfordelingen** er symmetrisk og klokkeformet, bestemt av gjennomsnittet $\\mu$ (plassering) og standardavviket $\\sigma$ (bredde). I en normalfordeling er gjennomsnitt, median og typetall like.

**Den empiriske regelen** (68--95--99,7) gir deg raske svar: ca. 68 prosent av verdiene ligger innenfor $\\mu \\pm 1\\sigma$, ca. 95 prosent innenfor $\\mu \\pm 2\\sigma$, og ca. 99,7 prosent innenfor $\\mu \\pm 3\\sigma$. Symmetrien gjør at du kan beregne andeler i én hale -- for eksempel er ca. 2,5 prosent over $\\mu + 2\\sigma$.

**Z-skåren** $z = \\frac{x - \\mu}{\\sigma}$ forteller hvor mange standardavvik en verdi ligger fra gjennomsnittet. Den gjør det mulig å sammenligne verdier fra helt ulike fordelinger og gir et presist mål på hvor uvanlig en observasjon er.

**I praksis** brukes normalfordelingen i kvalitetskontroll, medisin, utdanning og forskning. Men husk: ikke alt er normalfordelt. Sjekk alltid om normalfordelingen passer til dataene dine før du bruker den.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3 NARRATIV: Statistisk analyse
// ============================================================================

export const CHAPTER_2P_3_3_NARRATIV: TextbookChapter = {
  id: '2p-3-3-narrativ',
  courseId: '2p',
  chapterNumber: '3.3',
  title: 'Statistisk analyse',
  subtitle: 'Narrativ versjon',
  description:
    'En fortelling om løgn, forbannet løgn og statistikk -- hvordan tall kan villede, og hvordan du lærer å gjennomskue triksene.',
  estimatedMinutes: 35,
  competenceGoals: [
    'analysere og presentere funn i datasett fra lokalsamfunn og media',
  ],
  linkedChapterId: '2p-3-3',
  content: [
    {
      id: '2p-3-3-n-intro',
      type: 'text',
      content: `## Når tall lyver

«Det finnes tre typer løgn: løgn, forbannet løgn og statistikk.» Sitatet tilskrives Mark Twain, og selv om det er sagt med et glimt i øyet, peker det på noe viktig: statistikk kan brukes til å villede like mye som til å opplyse. Tall virker objektive og pålitelige, og nettopp derfor er de så effektive når noen vil overbevise deg om noe -- enten det stemmer eller ikke.

Tenk deg at du blar gjennom nyhetsstrømmen din. «Kriminaliteten økte dramatisk!» roper en overskrift. «9 av 10 tannleger anbefaler vår tannkrem!» lover en reklame. «Studien viser at kaffe forlenger livet!» melder en annen artikkel. Alle disse påstandene bruker tall for å virke overbevisende. Men stemmer de egentlig? Og hvordan kan du finne ut av det?

I dette kapittelet skal vi lære å lese statistikk *kritisk*. Vi ser på hvordan grafer og tall kan fremstilles misvisende, hvilke feilkilder som kan gjøre en undersøkelse upålitelig, og den kanskje viktigste leksjonen i hele statistikken: forskjellen mellom **korrelasjon** og **kausalitet**. Til slutt lærer vi hvordan vi selv kan presentere statistikk på en ærlig og riktig måte.`,
    },
    {
      id: '2p-3-3-n-section1',
      type: 'text',
      content: `## Misvisende grafer -- når øynene bedrar

La oss starte med det mest visuelle trikset i boken: **misvisende grafer**. Det finnes flere teknikker som kan få data til å se helt annerledes ut enn de egentlig er, og den vanligste er å kutte y-aksen.

Forestill deg at en avis viser et stolpediagram over arbeidsledigheten i to kommuner. Kommune A har 4,2 prosent ledighet og kommune B har 4,8 prosent. Forskjellen er altså bare 0,6 prosentpoeng -- relativt lite. Men i diagrammet starter y-aksen på 4,0 prosent i stedet for 0 prosent. Plutselig ser stolpen for kommune B nesten tre ganger så høy ut som stolpen for kommune A. En liten forskjell fremstår som en dramatisk forskjell, bare fordi noen kuttet aksen.

Det samme trikset brukes i næringslivet. Et selskap viser i årsrapporten at omsetningen økte fra 50 til 52 millioner kroner -- en økning på 4 prosent. Men i diagrammet starter y-aksen på 49 millioner, og plutselig ser stolpen for 52 nesten dobbelt så høy ut som stolpen for 50. En beskjeden vekst fremstilles som et kvantesprang.

Andre teknikker inkluderer **feil skala** (ujevne intervaller på aksene som forvrenger bildet), **cherry-picking** (å velge ut bare de dataene som støtter ditt synspunkt og utelate resten), **misvisende sammenligninger** (å sammenligne grupper som ikke er sammenlignbare) og **3D-diagrammer** (som gir et forvrengt bilde fordi perspektivet gjør det vanskelig å lese av verdier korrekt).

Tommelfingerregelen er enkel: **sjekk alltid aksene først** når noen viser deg et diagram. Starter y-aksen på null? Er skalaen jevn? Vises hele tidsperioden, eller bare et utvalgt vindu? Disse enkle spørsmålene avslører de fleste triksene.`,
    },
    {
      id: '2p-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på misvisende grafer:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-3-n-quiz1-q0',
            task: 'Et selskap viser i årsrapporten at omsetningen økte fra 50 millioner til 52 millioner kroner. I diagrammet starter y-aksen på 49 millioner. Hva er effekten?',
            options: [
              { id: 'a', text: 'Diagrammet viser økningen korrekt', isCorrect: false },
              { id: 'b', text: 'Økningen ser mindre ut enn den er', isCorrect: false },
              { id: 'c', text: 'Økningen ser mye større ut enn den faktisk er (4 % økning fremstilt som dramatisk)', isCorrect: true },
              { id: 'd', text: 'Det har ingen effekt på leserens oppfatning', isCorrect: false },
            ],
            solution: 'Økningen er 2 av 50 millioner = 4 %. Men med avkuttet y-akse ser stolpen for 52 nesten dobbelt så høy ut som stolpen for 50. En liten forskjell fremstår som dramatisk.',
          },
          {
            id: '2p-3-3-n-quiz1-q1',
            task: 'Hva bør du sjekke først når noen viser deg et stolpediagram?',
            options: [
              { id: 'a', text: 'Om diagrammet er i 3D', isCorrect: false },
              { id: 'b', text: 'Hvor mange datapunkter som er med', isCorrect: false },
              { id: 'c', text: 'Om y-aksen starter på null og om skalaen er jevn', isCorrect: true },
              { id: 'd', text: 'Om fargene er pene', isCorrect: false },
            ],
            solution: 'De vanligste triksene i misvisende grafer handler om y-aksen: å ikke starte på null eller å bruke ujevne intervaller. Sjekk alltid aksene først -- det avslører de fleste triksene.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-3-n-section2',
      type: 'text',
      content: `## Feilkilder -- når undersøkelsen ikke kan stoles på

Selv om grafene er ærlige, kan selve dataene være problematiske. Det finnes en rekke **feilkilder** som kan gjøre resultatene av en undersøkelse upålitelige, og det er viktig å kjenne til de vanligste.

Den første er **utvalgsskjevhet**: utvalget er ikke representativt for den gruppen du egentlig vil uttale deg om. Hvis du spør folk på et kjøpesenter om handlevanene deres, får du bare svar fra folk som faktisk handler der -- alle andre er utelatt. Resultatet kan ikke brukes til å si noe om hele befolkningen.

Den andre er **ledende spørsmål**. Formuleringen av et spørsmål kan styre svaret i en bestemt retning. «Synes du ikke at det er urettferdig at lærere tjener så lite?» er et klassisk eksempel. Ordene «urettferdig» og «så lite» er ladede -- de forutsetter et bestemt svar. En nøytral formulering ville vært: «Hva synes du om norske lærerlønninger?» med valgalternativer som «for lave», «passende» og «for høye».

Den tredje er **selvseleksjon**: bare de som er spesielt engasjerte i et tema, gidder å svare. Nettavstemninger er det klassiske eksempelet. Når en nettavis spør «Bør Norge satse mer på fornybar energi?» og 92 prosent svarer ja, sier det mer om hvem som klikker seg inn og stemmer enn om hva folk flest mener.

Den fjerde er **konfunderende variabler** -- en tredje, skjult faktor som påvirker begge variablene vi undersøker. For eksempel: barn som spiser frokost gjør det bedre på skolen. Men handler det om frokosten, eller om at familier som sørger for frokost også følger opp barna mer på andre måter?

Og til slutt: **lav svarprosent**. Hvis bare 10 prosent av de spurte svarer, kan vi ikke stole på resultatene, fordi de 90 prosentene som ikke svarte kanskje har helt andre meninger.`,
    },
    {
      id: '2p-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på feilkilder i undersøkelser:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-3-n-quiz2-q0',
            task: 'En nettavis lager en avstemning: «Bør Norge satse mer på fornybar energi?» 92 % svarer ja. Hva er den viktigste feilkilden?',
            options: [
              { id: 'a', text: 'Spørsmålet er ledende', isCorrect: false },
              { id: 'b', text: 'Selvseleksjon -- bare de som er engasjerte i temaet svarer', isCorrect: true },
              { id: 'c', text: 'Utvalget er for stort', isCorrect: false },
              { id: 'd', text: 'Det er ingen feilkilde', isCorrect: false },
            ],
            solution: 'Nettavstemninger har selvseleksjon som viktigste feilkilde: bare de som er engasjerte nok til å klikke seg inn og stemme, deltar. Resultatet representerer ikke hele befolkningen.',
          },
          {
            id: '2p-3-3-n-quiz2-q1',
            task: 'Spørsmålet «Synes du ikke at det er urettferdig at lærere tjener så lite?» er problematisk. Hvorfor?',
            options: [
              { id: 'a', text: 'Det er for langt', isCorrect: false },
              { id: 'b', text: 'Det er et ledende spørsmål som forutsetter et bestemt svar', isCorrect: true },
              { id: 'c', text: 'Det handler om et kontroversielt tema', isCorrect: false },
              { id: 'd', text: 'Det er upersonlig', isCorrect: false },
            ],
            solution: 'Ordene «urettferdig» og «så lite» er ladede -- de styrer svaret i en bestemt retning. En nøytral formulering ville vært: «Hva synes du om norske lærerlønninger?» med valgalternativer.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-3-n-section3',
      type: 'text',
      content: `## Korrelasjon er ikke kausalitet

Nå kommer vi til det som kanskje er den viktigste leksjonen i hele statistikken, og den som oftest brytes: **korrelasjon betyr ikke kausalitet**.

**Korrelasjon** betyr at to variabler samvarierer -- når den ene endrer seg, endrer den andre seg også. **Kausalitet** betyr at den ene variabelen faktisk *forårsaker* endringen i den andre. Og her er poenget: bare fordi to ting henger sammen, betyr det ikke at den ene forårsaker den andre.

Det klassiske eksempelet er iskremssalg og drukning. Begge øker om sommeren, så det er en klar positiv korrelasjon. Men is forårsaker selvfølgelig ikke drukning! Den **konfunderende variabelen** er sommervarmen, som gjør at folk både spiser mer is *og* bader mer.

Et annet berømt eksempel: Land med høyere sjokoladeforbruk per innbygger har flere nobelprisvinnere. Betyr det at sjokolade gjør deg smartere? Selvsagt ikke. Den konfunderende variabelen er velstandsnivå -- rike land har råd til mer sjokolade *og* investerer mer i forskning og utdanning. Dette kalles en **spuriøs korrelasjon** -- en tilsynelatende sammenheng som egentlig forklares av en tredje faktor.

Hva med lesing og skoleresultater? En studie viser at elever som leser mer har bedre karakterer. Kan vi konkludere med at lesing fører til bedre karakterer? Ikke uten videre. Kanskje er det motiverte elever som både leser mer *og* jobber hardere. Kanskje er det foreldre som oppmuntrer til lesing *og* følger opp skolearbeid. Kanskje er det omvendt kausalitet: elever som gjør det bra, får mer selvtillit og leser dermed mer.

For å påvise ekte kausalitet trenger vi fire ting: korrelasjon (samvariasjon), tidsrekkefølge (årsaken kommer før virkningen), utelukkelse av alternative forklaringer, og helst et kontrollert eksperiment.`,
    },
    {
      id: '2p-3-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på korrelasjon og kausalitet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-3-n-quiz3-q0',
            task: 'En studie viser at land med høyere sjokoladeforbruk per innbygger har flere nobelprisvinnere. Hva er den mest sannsynlige forklaringen?',
            options: [
              { id: 'a', text: 'Sjokolade gjør deg smartere', isCorrect: false },
              { id: 'b', text: 'Nobelprisvinnere spiser mer sjokolade', isCorrect: false },
              { id: 'c', text: 'Det er bare tilfeldig', isCorrect: false },
              { id: 'd', text: 'Konfunderende variabel: rike land har både høyere sjokoladeforbruk og bedre forskningsinstitusjoner', isCorrect: true },
            ],
            solution: 'Dette er en klassisk spuriøs korrelasjon. Den konfunderende variabelen er velstandsnivå: rike land har råd til mer sjokolade OG investerer mer i forskning.',
          },
          {
            id: '2p-3-3-n-quiz3-q1',
            task: 'Iskremssalg og drukningsulykker korrelerer positivt. Betyr det at is forårsaker drukning?',
            options: [
              { id: 'a', text: 'Ja, det viser tydelig årsakssammenheng', isCorrect: false },
              { id: 'b', text: 'Nei -- sommervarme er en konfunderende variabel som øker begge deler', isCorrect: true },
              { id: 'c', text: 'Ja, fordi korrelasjonen er sterk', isCorrect: false },
              { id: 'd', text: 'Vi trenger mer data for å avgjøre', isCorrect: false },
            ],
            solution: 'Korrelasjon betyr ikke kausalitet. Sommervarme er den konfunderende variabelen: varmt vær gjør at folk spiser mer is *og* bader mer (og dermed øker drukningsrisikoen).',
          },
          {
            id: '2p-3-3-n-quiz3-q2',
            task: 'Hva trenger du for å påvise ekte kausalitet mellom to variabler?',
            options: [
              { id: 'a', text: 'Bare en sterk korrelasjon ($r > 0{,}9$)', isCorrect: false },
              { id: 'b', text: 'Et stort utvalg', isCorrect: false },
              { id: 'c', text: 'Korrelasjon, tidsrekkefølge, utelukkelse av alternative forklaringer, og helst et kontrollert eksperiment', isCorrect: true },
              { id: 'd', text: 'To uavhengige studier som viser det samme', isCorrect: false },
            ],
            solution: 'Kausalitet krever mer enn bare korrelasjon. Du trenger å vise at årsaken kommer før virkningen, at alternative forklaringer er utelukket, og ideelt sett et kontrollert eksperiment med randomisering.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-3-n-section4',
      type: 'text',
      content: `## Å vurdere en studie kritisk

La oss nå bruke alt vi har lært til å vurdere en påstand du kunne møtt i mediene: «En ny studie viser at elever som bruker nettbrett i undervisningen scorer 15 prosent lavere på prøver enn elever som bruker papir og blyant. Studien ble gjennomført av Foreningen for Tradisjonell Undervisning og inkluderte 200 elever fra to ulike skoler.»

Høres overbevisende ut? La oss ta på oss de kritiske brillene. For det første: hvem har gjennomført studien? *Foreningen for Tradisjonell Undervisning* har en tydelig agenda -- de ønsker å fremme tradisjonelle undervisningsmetoder. Det betyr ikke at resultatene nødvendigvis er feil, men det er en **interessekonflikt** som vi bør være oppmerksomme på.

For det andre: utvalget. 200 elever fra to ulike skoler høres kanskje greit ut, men forskjellene mellom skolene kan være enorme -- ulik lærerkvalitet, ulik sosioøkonomisk bakgrunn, ulikt læringsnivå. Kanskje var nettbrettskolen en skole med mange elever som sliter faglig, uavhengig av verktøyet.

For det tredje: **ingen randomisering**. Vi vet ikke om gruppene var like i utgangspunktet. Hvis vi bare sammenligner to skoler som *tilfeldigvis* bruker ulike metoder, er det en lang rekke **konfunderende variabler** som kan forklare forskjellen: elevmotivasjon, lærerkvalitet, erfaringsnivå med nettbrett, fag som ble undervist, og mye mer.

Kan vi konkludere med at nettbrett *forårsaker* dårligere resultater? Nei, det kan vi ikke. Vi har bare en korrelasjon. For å påvise kausalitet ville vi trengt en randomisert kontrollert studie med mange flere skoler, gjennomført av uavhengige forskere, med kontroll for konfunderende variabler.`,
    },
    {
      id: '2p-3-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på å vurdere studier kritisk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-3-n-quiz4-q0',
            task: 'Antall brannmenn på stedet og skadeomfanget ved en brann korrelerer positivt (flere brannmenn = mer skade). Hva er den mest sannsynlige forklaringen?',
            options: [
              { id: 'a', text: 'Brannmenn forårsaker skade', isCorrect: false },
              { id: 'b', text: 'Konfunderende variabel: store branner krever både flere brannmenn og forårsaker mer skade', isCorrect: true },
              { id: 'c', text: 'Mer skade fører til at brannmenn kommer', isCorrect: false },
              { id: 'd', text: 'Det er bare tilfeldig', isCorrect: false },
            ],
            solution: 'Den konfunderende variabelen er brannens størrelse. Store branner forårsaker mer skade OG krever flere brannmenn. Brannmennene forårsaker ikke skadene.',
          },
          {
            id: '2p-3-3-n-quiz4-q1',
            task: 'En studie gjennomført av «Foreningen for Tradisjonell Undervisning» viser at nettbrettelever scorer 15 % lavere. Hva er det største problemet?',
            options: [
              { id: 'a', text: 'Utvalget er for lite', isCorrect: false },
              { id: 'b', text: 'Studien har interessekonflikt, mangler randomisering og kontrollerer ikke for konfunderende variabler', isCorrect: true },
              { id: 'c', text: '15 % er for liten forskjell', isCorrect: false },
              { id: 'd', text: 'Det finnes ingen problemer', isCorrect: false },
            ],
            solution: 'Organisasjonen har en agenda (interessekonflikt), studien sammenligner to skoler uten randomisering, og forskjellene kan skyldes en rekke konfunderende variabler som lærerkvalitet og elevbakgrunn.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-3-n-section5',
      type: 'text',
      content: `## Å presentere statistikk ærlig

Vi har brukt mye tid på å lære hvordan statistikk kan misbrukes. Men hva gjør du når *du* skal presentere data? Hvordan sørger du for at din fremstilling er ærlig og riktig?

Det finnes noen klare retningslinjer. For det første: **la y-aksen starte på null**, eller marker tydelig at den er avkuttet (med en bølgelinje). For det andre: **vis hele bildet** -- ikke plukk ut bare den perioden eller de dataene som støtter ditt synspunkt. For det tredje: **oppgi utvalgets størrelse og hvordan det ble valgt**. Et resultat basert på 15 elever i én klasse er noe helt annet enn et resultat basert på 10 000 elever over hele landet.

For det fjerde: **bruk riktig sentralmål**. Husk regelen fra kapittel 3.1: median ved skjeve data, gjennomsnitt ved symmetriske. En rapport som sier «gjennomsnittsinntekten i kommunen er 650 000 kr» gir et feil bilde hvis én person tjener 2,8 millioner og resten rundt 400 000. Medianen (445 000 kr) ville gitt et mye bedre bilde. For det femte: **oppgi spredning** -- ikke bare gjennomsnittet, men også standardavvik eller IQR. Et gjennomsnitt uten spredningsmål er bare halve historien.

For det sjette: **skill tydelig mellom korrelasjon og kausalitet**. Skriv «X og Y henger sammen» i stedet for «X fører til Y» med mindre du har sterke bevis for årsakssammenheng. For det sjuende: **oppgi feilmarginer**, spesielt ved spørreundersøkelser. Og for det åttende: **bruk klare og ærlige overskrifter** som ikke overdriver funnene.

Ærlig statistikk handler i bunn og grunn om respekt -- respekt for dataene, for leseren og for sannheten. Tall er kraftige verktøy, og med stor makt følger stort ansvar.`,
    },
    {
      id: '2p-3-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '2p-3-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på ærlig statistikk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '2p-3-3-n-quiz5-q0',
            task: '«9 av 10 tannleger anbefaler vår tannkrem.» Hva er mest problematisk med denne påstanden?',
            options: [
              { id: 'a', text: 'Det er for mange tannleger i utvalget', isCorrect: false },
              { id: 'b', text: 'Tannleger vet ikke nok om tannkrem', isCorrect: false },
              { id: 'c', text: 'Utvalget er trolig håndplukket, lite (10 stk) og spørsmålet kan ha vært ledende', isCorrect: true },
              { id: 'd', text: 'Det er ingenting galt med påstanden', isCorrect: false },
            ],
            solution: 'Utvalget kan være håndplukket eller betalt. Ti tannleger er svært lite. Og spørsmålet kan ha vært ledende, f.eks. «Anbefaler du tannkrem med fluor?» som nesten alle ville svart ja på.',
          },
          {
            id: '2p-3-3-n-quiz5-q1',
            task: 'En rapport sier «gjennomsnittsinntekten i kommunen er 650 000 kr», men én person tjener 2,8 millioner. Hva ville vært en mer ærlig fremstilling?',
            options: [
              { id: 'a', text: 'Bruke gjennomsnittet, men legge til at det er høyt', isCorrect: false },
              { id: 'b', text: 'Bruke medianen i stedet, og oppgi spredning', isCorrect: true },
              { id: 'c', text: 'Fjerne den ene som tjener mye fra datasettet', isCorrect: false },
              { id: 'd', text: 'Bruke typetallet', isCorrect: false },
            ],
            solution: 'Med en sterk uteligger er gjennomsnittet misvisende. Medianen gir et bedre bilde av en typisk inntekt, og oppgi alltid et spredningsmål (IQR eller standardavvik) for å vise hele bildet.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '2p-3-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Du har nå lært å lese statistikk med kritiske øyne -- en ferdighet som er uvurderlig i en verden full av tall og påstander.

**Misvisende grafer** bruker avkuttede y-akser, skjeve skalaer eller 3D-effekter for å få forskjeller til å se større eller mindre ut enn de er. **Cherry-picking** er å velge ut bare de dataene som støtter et bestemt synspunkt og ignorere resten.

**Feilkilder** i undersøkelser inkluderer **utvalgsskjevhet** (utvalget er ikke representativt), **ledende spørsmål** (formuleringen styrer svaret), **selvseleksjon** (bare engasjerte personer deltar), **konfunderende variabler** (en tredje faktor påvirker begge variablene) og **lav svarprosent**.

Den viktigste leksjonen er at **korrelasjon ikke er det samme som kausalitet**. Bare fordi to ting samvarierer, betyr det ikke at den ene forårsaker den andre. Spuriøse korrelasjoner forklares ofte av konfunderende variabler. For å påvise kausalitet trenger man korrelasjon, tidsrekkefølge, utelukkelse av alternativer og helst kontrollerte eksperimenter.

**Ærlig statistikk** betyr å bruke riktig sentralmål, oppgi spredning, starte y-aksen på null, vise hele bildet, oppgi utvalgets størrelse og feilmarginer, og skille tydelig mellom korrelasjon og kausalitet. Tall er kraftige verktøy -- bruk dem med omhu.`,
    },
  ],
  exercises: [],
};
