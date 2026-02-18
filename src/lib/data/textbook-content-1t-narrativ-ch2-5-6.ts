/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 1T – NARRATIV VERSJON
 * Kapittel 2.5: Rasjonale likninger
 * Kapittel 2.6: Likninger med røtter
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * å lese og lytte til, med quiz-spørsmål for selvtest.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.5 NARRATIV: Rasjonale likninger
// ============================================================================

export const CHAPTER_1T_2_5_NARRATIV: TextbookChapter = {
  id: '1t-2-5-narrativ',
  courseId: '1t',
  chapterNumber: '2.5',
  title: 'Rasjonale likninger',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om likninger med brøker -- hvordan du fjerner nevnere, bruker fellesnevner og utnytter produktregelen for å finne nullpunkter.',
  estimatedMinutes: 40,
  competenceGoals: ['løse likninger med brøker', 'bruke produktregelen for brøklikninger'],
  linkedChapterId: '1t-2-5',
  content: [    {
      id: '1t-2-5-n-intro',
      type: 'text',
      content: `## Når den ukjente gjemmer seg i en brøk

Tenk deg at du deler en pizzaregning likt mellom vennene dine, men du vet ikke hvor mange som kom. Regningen var 600 kroner, og hver person betalte $\\frac{600}{x}$ kroner. Hvis du vet at hver betalte 150 kroner, kan du sette opp likningen $\\frac{600}{x} = 150$ og finne at dere var fire stykker. Gratulerer -- du har nettopp sett din første **rasjonale likning**, altså en likning der den ukjente opptrer i en brøk.

I dette kapittelet skal vi lære å håndtere slike likninger systematisk. Vi starter med enkle brøklikninger der vi ganger bort nevneren, går videre til likninger med flere brøkledd der vi trenger **fellesnevner**, og avslutter med den elegante **produktregelen** som lar oss finne nullpunkter uten å gange i det hele tatt. Underveis skal vi også se hva som skjer i de merkelige tilfellene der likningen ikke har noen løsning -- eller har uendelig mange.`,
    },
    {
      id: '1t-2-5-n-section1',
      type: 'text',
      content: `## Gang bort nevneren -- den enkleste strategien

Den grunnleggende ideen bak brøklikninger er overraskende enkel: vi vil bli kvitt brøken. Og måten vi gjør det på er å **gange begge sider** av likningen med nevneren.

La oss ta det helt fra starten. Hvis vi har $\\frac{x}{3} = 2$, ganger vi begge sider med $3$. Da forsvinner nevneren på venstre side, og vi får $x = 6$. Enkelt og greit.

Men hva når $x$ selv står i nevneren? Ta likningen $\\frac{6}{x} = 2$. Nå ganger vi begge sider med $x$, og vi får $6 = 2x$. Deler vi begge sider på $2$, finner vi $x = 3$. Legg merke til at vi her måtte gange med et uttrykk som inneholder den ukjente -- det fungerer fint så lenge vi husker at $x$ ikke kan være null (for da ville vi delt på null i den opprinnelige likningen).

Noen ganger har vi en brøk på begge sider. For eksempel $\\frac{x}{3} = \\frac{5}{4}$. Her kan vi gange med fellesnevneren $12$ på begge sider: $\\frac{12x}{3} = \\frac{12 \\cdot 5}{4}$, som gir $4x = 15$ og dermed $x = \\frac{15}{4}$. Alternativt kan vi gange med $3$ først for å få $x = \\frac{5}{4} \\cdot 3 = \\frac{15}{4}$. Begge veier fører til samme svar -- bruk den metoden du synes er mest oversiktlig.

Når vi har et helt uttrykk i telleren, som $\\frac{x + 2}{2} = 4$, ganger vi fortsatt begge sider med nevneren. Da får vi $x + 2 = 8$, og dermed $x = 6$. Hele telleren blir frigjort fra brøken i ett steg.`,
    },
    {
      id: '1t-2-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på å gange bort nevneren:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-5-n-quiz1-q0',
            task: 'Hva er løsningen på $\\frac{2x}{3} = 2$?',
            options: [
              { id: 'a', text: '$x = 6$', isCorrect: false },
              { id: 'b', text: '$x = 3$', isCorrect: true },
              { id: 'c', text: '$x = \\frac{2}{3}$', isCorrect: false },
              { id: 'd', text: '$x = \\frac{4}{3}$', isCorrect: false },
            ],
            solution: 'Vi ganger begge sider med $3$: $2x = 6$. Deretter deler vi på $2$: $x = 3$.',
          },
          {
            id: '1t-2-5-n-quiz1-q1',
            task: 'Hva er løsningen på $\\frac{6}{x} = 2$?',
            options: [
              { id: 'a', text: '$x = 12$', isCorrect: false },
              { id: 'b', text: '$x = 4$', isCorrect: false },
              { id: 'c', text: '$x = 3$', isCorrect: true },
              { id: 'd', text: '$x = \\frac{1}{3}$', isCorrect: false },
            ],
            solution: 'Vi ganger begge sider med $x$: $6 = 2x$. Deler på $2$: $x = 3$. Merk at $x \\neq 0$ fordi $x$ står i nevneren.',
          },
          {
            id: '1t-2-5-n-quiz1-q2',
            task: 'Hvorfor må vi passe på når vi ganger med et uttrykk som inneholder $x$?',
            options: [
              { id: 'a', text: 'Fordi $x$ kan være negativt', isCorrect: false },
              { id: 'b', text: 'Fordi vi da innfører en ny variabel', isCorrect: false },
              { id: 'c', text: 'Fordi likningen kan bli vanskeligere', isCorrect: false },
              { id: 'd', text: 'Fordi $x$ ikke kan være null (da deler vi på null)', isCorrect: true },
            ],
            solution: 'Når $x$ står i nevneren, kan ikke $x = 0$ fordi det ville bety å dele på null. Etter at vi har funnet en løsning, bør vi sjekke at den ikke gjør nevneren lik null.',
          },
          {
            id: '1t-2-5-n-quiz1-q3',
            task: 'Løs $\\frac{x + 2}{2} = 4$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 6$', isCorrect: true },
              { id: 'b', text: '$x = 4$', isCorrect: false },
              { id: 'c', text: '$x = 10$', isCorrect: false },
              { id: 'd', text: '$x = 3$', isCorrect: false },
            ],
            solution: 'Vi ganger begge sider med $2$: $x + 2 = 8$. Trekker fra $2$: $x = 6$.',
          },
          {
            id: '1t-2-5-n-quiz1-q4',
            task: 'Løs $\\frac{x}{3} = \\frac{5}{4}$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = \\frac{5}{12}$', isCorrect: false },
              { id: 'b', text: '$x = \\frac{20}{3}$', isCorrect: false },
              { id: 'c', text: '$x = \\frac{15}{4}$', isCorrect: true },
              { id: 'd', text: '$x = \\frac{4}{15}$', isCorrect: false },
            ],
            solution: 'Vi ganger begge sider med $3$: $x = \\frac{5}{4} \\cdot 3 = \\frac{15}{4}$. Alternativt kan vi gange med fellesnevneren $12$: $4x = 15$, altså $x = \\frac{15}{4}$.',
          },
        ],
      },
    },    {
      id: '1t-2-5-n-section2',
      type: 'text',
      content: `## Flere brøkledd -- fellesnevner er nøkkelen

Hva gjør vi når likningen har *flere* brøkledd? Tenk på $\\frac{2x}{3} + \\frac{x}{5} = -2$. Her har vi to brøker med forskjellige nevnere, og det gjør det vanskelig å samle $x$-leddene. Løsningen er å finne **fellesnevneren** og gange hele likningen med den.

Fellesnevneren til $3$ og $5$ er $15$. Når vi ganger hvert ledd med $15$, skjer det magi: $\\frac{15 \\cdot 2x}{3} + \\frac{15 \\cdot x}{5} = 15 \\cdot (-2)$, som blir $10x + 3x = -30$. Plutselig er alle brøkene borte! Vi forenkler til $13x = -30$, og får $x = -\\frac{30}{13}$.

Den samme teknikken fungerer når vi har brøkledd blandet med vanlige ledd. Ta $x + \\frac{1}{2} = 2$. Vi kan gange alt med $2$: $2x + 1 = 4$, som gir $2x = 3$ og $x = \\frac{3}{2}$. Alternativt kan vi flytte $\\frac{1}{2}$ til høyre side: $x = 2 - \\frac{1}{2} = \\frac{3}{2}$. Begge metodene fungerer.

En viktig detalj oppstår når vi deler med negative tall. I likningen $-3x = \\frac{6}{7}$ deler vi begge sider på $-3$. Å dele en brøk med et tall er det samme som å gange nevneren med det tallet: $x = \\frac{6}{-3 \\cdot 7} = -\\frac{2}{7}$. Pass alltid på fortegnet når du deler -- det er en klassisk feilkilde.

Hva med likninger som $\\frac{x}{2} - \\frac{3x}{5} = -2$? Fellesnevneren er $10$. Gang alt med $10$: $5x - 6x = -20$, altså $-x = -20$, som gir $x = 20$. Det negative fortegnet på $x$ forsvinner når vi ganger med $-1$ på begge sider.`,
    },
    {
      id: '1t-2-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på fellesnevner og flere brøkledd:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-5-n-quiz2-q0',
            task: 'Hva er fellesnevneren når vi skal løse $\\frac{x}{4} + \\frac{1}{12} = \\frac{1}{3}$?',
            options: [
              { id: 'a', text: '$4$', isCorrect: false },
              { id: 'b', text: '$48$', isCorrect: false },
              { id: 'c', text: '$12$', isCorrect: true },
              { id: 'd', text: '$36$', isCorrect: false },
            ],
            solution: 'Nevnerne er $4$, $12$ og $3$. Det minste tallet som alle tre går opp i er $12$. Ganger vi hele likningen med $12$ får vi $3x + 1 = 4$, altså $x = 1$.',
          },
          {
            id: '1t-2-5-n-quiz2-q1',
            task: 'Løs $\\frac{2x}{3} + \\frac{x}{5} = -2$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = -\\frac{30}{13}$', isCorrect: true },
              { id: 'b', text: '$x = -\\frac{13}{30}$', isCorrect: false },
              { id: 'c', text: '$x = -2$', isCorrect: false },
              { id: 'd', text: '$x = -\\frac{10}{3}$', isCorrect: false },
            ],
            solution: 'Fellesnevneren er $15$. Gang alt med $15$: $10x + 3x = -30$, altså $13x = -30$, og $x = -\\frac{30}{13}$.',
          },
          {
            id: '1t-2-5-n-quiz2-q2',
            task: 'Løs $\\frac{x}{2} - \\frac{3x}{5} = -2$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = -20$', isCorrect: false },
              { id: 'b', text: '$x = 10$', isCorrect: false },
              { id: 'c', text: '$x = 20$', isCorrect: true },
              { id: 'd', text: '$x = -10$', isCorrect: false },
            ],
            solution: 'Fellesnevneren er $10$. Gang alt med $10$: $5x - 6x = -20$, altså $-x = -20$, og $x = 20$.',
          },
          {
            id: '1t-2-5-n-quiz2-q3',
            task: 'I likningen $-3x = \\frac{6}{7}$, hva er $x$?',
            options: [
              { id: 'a', text: '$x = \\frac{2}{7}$', isCorrect: false },
              { id: 'b', text: '$x = -\\frac{18}{7}$', isCorrect: false },
              { id: 'c', text: '$x = -\\frac{6}{21}$', isCorrect: false },
              { id: 'd', text: '$x = -\\frac{2}{7}$', isCorrect: true },
            ],
            solution: 'Vi deler begge sider på $-3$: $x = \\frac{6}{-3 \\cdot 7} = -\\frac{2}{7}$. Husk at et negativt fortegn foran brøken betyr at hele brøken er negativ.',
          },
        ],
      },
    },    {
      id: '1t-2-5-n-section3',
      type: 'text',
      content: `## Produktregelen -- når brøken skal bli null

Nå skal vi se på en spesielt elegant metode. Tenk på dette: når er en brøk lik null? Jo, en brøk $\\frac{a}{b}$ er lik null *hvis og bare hvis* telleren $a$ er lik null (forutsatt at nevneren $b$ ikke er null). Det spiller ingen rolle hva nevneren er -- $\\frac{0}{5} = 0$, $\\frac{0}{1000} = 0$, $\\frac{0}{x+3} = 0$. Null delt på hva som helst er null.

Dette gir oss **produktregelen for brøklikninger**: for å løse $\\frac{\\text{noe}}{\\text{noe annet}} = 0$, trenger vi bare å finne ut når telleren er null.

La oss prøve med $\\frac{x + 1}{2} = 0$. Vi ser rett på telleren: $x + 1 = 0$ gir $x = -1$. Ferdig! Vi trenger ikke engang å bry oss om nevneren (bortsett fra å sjekke at den ikke også blir null for $x = -1$, men $2$ er aldri null, så det er greit).

Det blir enda kraftigere når telleren kan faktoriseres. Ta likningen $\\frac{x^2 + 5x + 6}{x - 1} = 0$. Vi faktoriserer telleren: $x^2 + 5x + 6 = (x + 2)(x + 3)$. Produktregelen sier at et produkt er null når minst en av faktorene er null. Altså er $x + 2 = 0$ eller $x + 3 = 0$, som gir $x = -2$ eller $x = -3$. Ingen av disse verdiene gjør nevneren $x - 1$ lik null, så begge er gyldige løsninger.

Men pass opp! Hvis en verdi som gjør telleren null *også* gjør nevneren null, er den verdien *ikke* en gyldig løsning. For eksempel i $\\frac{x(x-1)}{x - 1} = 0$ er $x = 1$ ikke en løsning, fordi nevneren også blir null. Vi kan bare bruke $x = 0$.`,
    },
    {
      id: '1t-2-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på produktregelen for brøklikninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-5-n-quiz3-q0',
            task: 'Hva er løsningen på $\\frac{x + 2}{x} = 0$?',
            options: [
              { id: 'a', text: '$x = 0$', isCorrect: false },
              { id: 'b', text: '$x = -2$', isCorrect: true },
              { id: 'c', text: '$x = 2$', isCorrect: false },
              { id: 'd', text: 'Ingen løsning', isCorrect: false },
            ],
            solution: 'Vi setter telleren lik null: $x + 2 = 0$ gir $x = -2$. Vi sjekker at nevneren ikke er null: $x = -2 \\neq 0$, så løsningen er gyldig. Merk at $x = 0$ er *ikke* en løsning fordi nevneren da blir null.',
          },
          {
            id: '1t-2-5-n-quiz3-q1',
            task: 'Når er en brøk $\\frac{a}{b}$ lik null?',
            options: [
              { id: 'a', text: 'Når nevneren $b = 0$', isCorrect: false },
              { id: 'b', text: 'Når både teller og nevner er null', isCorrect: false },
              { id: 'c', text: 'Når telleren $a = 0$ og nevneren $b \\neq 0$', isCorrect: true },
              { id: 'd', text: 'Når $a = b$', isCorrect: false },
            ],
            solution: 'En brøk er lik null hvis og bare hvis telleren er null, forutsatt at nevneren ikke er null. $\\frac{0}{b} = 0$ for alle $b \\neq 0$.',
          },
          {
            id: '1t-2-5-n-quiz3-q2',
            task: 'Hva er løsningene til $\\frac{x^2 + 5x + 6}{x - 1} = 0$?',
            options: [
              { id: 'a', text: '$x = 1$', isCorrect: false },
              { id: 'b', text: '$x = -2$ og $x = -3$', isCorrect: true },
              { id: 'c', text: '$x = 2$ og $x = 3$', isCorrect: false },
              { id: 'd', text: '$x = -2$, $x = -3$ og $x = 1$', isCorrect: false },
            ],
            solution: 'Vi faktoriserer telleren: $x^2 + 5x + 6 = (x + 2)(x + 3)$. Telleren er null for $x = -2$ eller $x = -3$. Ingen av disse gjør nevneren $x - 1$ lik null, så begge er gyldige løsninger. $x = 1$ gjør nevneren null og er derfor ikke definert.',
          },
          {
            id: '1t-2-5-n-quiz3-q3',
            task: 'Likningen $\\frac{x(x - 1)}{x - 1} = 0$ har en «felle». Hva er riktig løsningsmengde?',
            options: [
              { id: 'a', text: '$x = 0$ og $x = 1$', isCorrect: false },
              { id: 'b', text: '$x = 1$', isCorrect: false },
              { id: 'c', text: 'Ingen løsning', isCorrect: false },
              { id: 'd', text: '$x = 0$', isCorrect: true },
            ],
            solution: 'Telleren $x(x - 1) = 0$ for $x = 0$ eller $x = 1$. Men $x = 1$ gjør *nevneren* $x - 1$ også lik null, og da er brøken udefinert. Derfor er $x = 0$ den eneste gyldige løsningen.',
          },
        ],
      },
    },    {
      id: '1t-2-5-n-section4',
      type: 'text',
      content: `## Spesielle tilfeller -- ingen løsning eller uendelig mange

Noen ganger kan brøklikninger oppføre seg merkelig. La oss se på to tilfeller som er viktige å kjenne igjen.

Det første tilfellet er når likningen *ikke har noen løsning*. Se på $\\frac{x - 3}{3} - \\frac{x - 2}{3} = 0$. Vi ganger med $3$ for å fjerne nevnerne: $x - 3 - (x - 2) = 0$. Løser vi opp parentesen, får vi $x - 3 - x + 2 = 0$, altså $-1 = 0$. Men $-1$ er aldri lik $0$, uansett hva $x$ er! Likningen har altså **ingen løsning**. Det finnes rett og slett ingen verdi av $x$ som gjør at venstre og høyre side blir like.

Det andre tilfellet er det motsatte: likningen er *alltid sann*. Se på $\\frac{2x + 3}{5} = \\frac{4x + 6}{10}$. Ganger vi med $10$, får vi $2(2x + 3) = 4x + 6$, altså $4x + 6 = 4x + 6$. Dette er sant for *alle* verdier av $x$! Likningen har **uendelig mange løsninger** -- eller sagt på en annen måte, løsningsmengden er alle reelle tall, $x \\in \\mathbb{R}$. Grunnen er at brøkene på begge sider egentlig er nøyaktig det samme uttrykket.

Disse spesielle tilfellene oppstår fordi $x$-leddene kansellerer hverandre. Når du sitter igjen med et utsagn uten $x$, sjekk om det er sant eller usant: er det usant (som $-1 = 0$), finnes ingen løsning; er det sant (som $6 = 6$), er alle tall løsninger.`,
    },
    {
      id: '1t-2-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på spesielle tilfeller:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-5-n-quiz4-q0',
            task: 'Hva skjer med likningen $\\frac{3x + 1}{2} - \\frac{3x + 1}{2} = 5$?',
            options: [
              { id: 'a', text: '$x = 5$', isCorrect: false },
              { id: 'b', text: 'Alle reelle tall er løsninger', isCorrect: false },
              { id: 'c', text: '$x = 0$', isCorrect: false },
              { id: 'd', text: 'Ingen løsning', isCorrect: true },
            ],
            solution: 'Venstre side forenkles til $0$ uansett hva $x$ er, fordi vi trekker noe fra seg selv. Vi får $0 = 5$, som aldri er sant. Likningen har ingen løsning.',
          },
          {
            id: '1t-2-5-n-quiz4-q1',
            task: 'Hva er løsningsmengden for $\\frac{2x + 3}{5} = \\frac{4x + 6}{10}$?',
            options: [
              { id: 'a', text: '$x = 0$', isCorrect: false },
              { id: 'b', text: 'Alle reelle tall ($x \\in \\mathbb{R}$)', isCorrect: true },
              { id: 'c', text: 'Ingen løsning', isCorrect: false },
              { id: 'd', text: '$x = \\frac{3}{2}$', isCorrect: false },
            ],
            solution: 'Ganger vi med $10$: $2(2x + 3) = 4x + 6$, altså $4x + 6 = 4x + 6$. Dette er sant for alle verdier av $x$. Brøkene er egentlig identiske uttrykk.',
          },
          {
            id: '1t-2-5-n-quiz4-q2',
            task: 'Etter forenkling av en brøklikning ender du opp med $7 = 7$. Hva betyr dette?',
            options: [
              { id: 'a', text: '$x = 7$', isCorrect: false },
              { id: 'b', text: 'Ingen løsning', isCorrect: false },
              { id: 'c', text: 'Alle reelle tall er løsninger', isCorrect: true },
              { id: 'd', text: 'Du har gjort en feil', isCorrect: false },
            ],
            solution: 'Når $x$-leddene kansellerer hverandre og vi sitter igjen med et sant utsagn som $7 = 7$, betyr det at likningen er oppfylt for alle verdier av $x$. Likningen har uendelig mange løsninger.',
          },
          {
            id: '1t-2-5-n-quiz4-q3',
            task: 'Etter forenkling av en brøklikning ender du opp med $0 = 3$. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Ingen løsning', isCorrect: true },
              { id: 'b', text: '$x = 3$', isCorrect: false },
              { id: 'c', text: '$x = 0$', isCorrect: false },
              { id: 'd', text: 'Alle reelle tall er løsninger', isCorrect: false },
            ],
            solution: 'Når $x$-leddene kansellerer hverandre og vi sitter igjen med et usant utsagn som $0 = 3$, finnes det ingen verdi av $x$ som oppfyller likningen. Likningen har ingen løsning.',
          },
        ],
      },
    },    {
      id: '1t-2-5-n-section5',
      type: 'text',
      content: `## Gange med uttrykk -- når nevneren inneholder $x$

Den mest utfordrende typen brøklikning er når nevneren selv inneholder $x$. Da må vi gange begge sider med et *uttrykk*, ikke bare et tall. Metoden er den samme, men vi må være ekstra forsiktige.

Ta likningen $\\frac{x - 3}{2x + 4} = -2$. For å fjerne brøken ganger vi begge sider med $(2x + 4)$: $x - 3 = -2(2x + 4)$. Nå løser vi opp høyre side: $x - 3 = -4x - 8$. Vi samler $x$-ledd: $x + 4x = -8 + 3$, altså $5x = -5$, og $x = -1$.

Her er et viktig poeng: vi bør sjekke at løsningen vår ikke gjør nevneren lik null. Setter vi $x = -1$ inn i $2x + 4$, får vi $2(-1) + 4 = 2 \\neq 0$. Alt i orden -- løsningen er gyldig.

Noen likninger kombinerer vanlige ledd og brøker, som $2x - 2 - \\frac{x - 1}{3} = 0$. Her ganger vi hele likningen med $3$: $3(2x - 2) - (x - 1) = 0$, altså $6x - 6 - x + 1 = 0$, som gir $5x - 5 = 0$ og $x = 1$. Legg merke til at parentesen $(x - 1)$ ble ganget med $-1$ fordi den opprinnelig stod etter et minustegn.

Oppsummert er strategien for brøklikninger med $x$ i nevneren: gang med nevneruttrykket, løs den resulterende likningen, og sjekk til slutt at svaret ikke gjør noen nevner lik null.`,
    },
    {
      id: '1t-2-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-2-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på brøklikninger med $x$ i nevneren:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-5-n-quiz5-q0',
            task: 'Du løser likningen $\\frac{x - 5}{x + 1} = 0$ og finner $x = 5$. Hva må du sjekke?',
            options: [
              { id: 'a', text: 'Om $x = 5$ er et primtall', isCorrect: false },
              { id: 'b', text: 'Om $5 - 5 = 0$ stemmer', isCorrect: false },
              { id: 'c', text: 'Om nevneren $x + 1$ blir null for $x = 5$', isCorrect: true },
              { id: 'd', text: 'Om likningen har flere løsninger', isCorrect: false },
            ],
            solution: 'Vi setter telleren lik null: $x - 5 = 0$ gir $x = 5$. Vi må sjekke at nevneren ikke blir null: $5 + 1 = 6 \\neq 0$. Løsningen er gyldig.',
          },
          {
            id: '1t-2-5-n-quiz5-q1',
            task: 'Løs $\\frac{x - 3}{2x + 4} = -2$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = -1$', isCorrect: true },
              { id: 'b', text: '$x = -2$', isCorrect: false },
              { id: 'c', text: '$x = 1$', isCorrect: false },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: 'Gang begge sider med $(2x + 4)$: $x - 3 = -2(2x + 4) = -4x - 8$. Samle $x$-ledd: $5x = -5$, altså $x = -1$. Sjekk nevneren: $2(-1) + 4 = 2 \\neq 0$. Gyldig!',
          },
          {
            id: '1t-2-5-n-quiz5-q2',
            task: 'Løs $2x - 2 - \\frac{x - 1}{3} = 0$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 2$', isCorrect: false },
              { id: 'b', text: '$x = 0$', isCorrect: false },
              { id: 'c', text: '$x = 1$', isCorrect: true },
              { id: 'd', text: '$x = \\frac{5}{3}$', isCorrect: false },
            ],
            solution: 'Gang hele likningen med $3$: $3(2x - 2) - (x - 1) = 0$. Utvid: $6x - 6 - x + 1 = 0$, altså $5x - 5 = 0$, og $x = 1$.',
          },
          {
            id: '1t-2-5-n-quiz5-q3',
            task: 'Hva er den generelle strategien for brøklikninger med $x$ i nevneren?',
            options: [
              { id: 'a', text: 'Sett $x = 0$ og forenkle', isCorrect: false },
              { id: 'b', text: 'Gang med nevneruttrykket, løs likningen, og sjekk at svaret ikke gjør nevneren null', isCorrect: true },
              { id: 'c', text: 'Del begge sider med $x$', isCorrect: false },
              { id: 'd', text: 'Flytt alle ledd til venstre side og faktoriser', isCorrect: false },
            ],
            solution: 'Den riktige strategien er: (1) gang begge sider med nevneruttrykket for å fjerne brøken, (2) løs den resulterende likningen, og (3) sjekk at løsningen ikke gjør noen nevner lik null.',
          },
        ],
      },
    },    {
      id: '1t-2-5-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært tre hovedstrategier for å løse rasjonale likninger -- likninger som inneholder brøker med den ukjente.

**Gang bort nevneren** er den mest direkte metoden. Du ganger begge sider med nevneren for å fjerne brøken. Hvis likningen har flere brøkledd med ulike nevnere, finner du **fellesnevneren** og ganger hele likningen med den. Da forsvinner alle brøkene i ett steg, og du sitter igjen med en vanlig likning du kan løse som normalt.

**Produktregelen** er en elegant snarvei når brøken skal være lik null. En brøk $\\frac{a}{b} = 0$ bare når telleren $a = 0$ (og nevneren $b \\neq 0$). Hvis telleren kan faktoriseres, setter du hver faktor lik null for å finne alle løsningene.

**Spesielle tilfeller** oppstår når $x$-leddene kansellerer hverandre. Ender du opp med et usant utsagn (som $-1 = 0$), har likningen ingen løsning. Ender du med et alltid sant utsagn (som $6 = 6$), er alle reelle tall løsninger. Og husk: når du ganger med uttrykk som inneholder $x$, sjekk alltid at løsningen ikke gjør noen nevner lik null.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.6 NARRATIV: Likninger med røtter
// ============================================================================

export const CHAPTER_1T_2_6_NARRATIV: TextbookChapter = {
  id: '1t-2-6-narrativ',
  courseId: '1t',
  chapterNumber: '2.6',
  title: 'Likninger med røtter',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om likninger der den ukjente skjuler seg under et rottegn -- hvordan du kvadrerer deg frem til svaret og avslører falske løsninger.',
  estimatedMinutes: 40,
  competenceGoals: ['løse likninger med røtter'],
  linkedChapterId: '1t-2-6',
  content: [    {
      id: '1t-2-6-n-intro',
      type: 'text',
      content: `## Å befri den ukjente fra rottegnet

Tenk deg at du vet arealet av et kvadrat og vil finne sidelengden. Arealet er $25$ kvadratmeter, og siden areal er side ganger side, trenger du å løse $x^2 = 25$. Du tar kvadratroten og finner $x = 5$ meter. Men hva om likningen er mer innviklet -- for eksempel $\\sqrt{x + 3} = 5$? Da sitter den ukjente *inne i* et rottegn, og vi trenger en strategi for å få den ut.

Velkommen til **rotlikninger**. I dette kapittelet lærer du den grunnleggende teknikken: å **kvadrere begge sider** for å fjerne rottegnet. Det høres enkelt ut, og det er det som regel også. Men det finnes en fallgruve som gjør rotlikninger spesielle: når vi kvadrerer, kan vi innføre **falske løsninger** -- tall som ser ut som de passer, men som faktisk ikke gjør det. Derfor må vi *alltid* kontrollere svarene våre i den opprinnelige likningen. La oss dykke inn.`,
    },
    {
      id: '1t-2-6-n-section1',
      type: 'text',
      content: `## Kvadratroten -- alltid positiv

Før vi begynner å løse likninger, la oss bli enige om hva kvadratroten egentlig betyr. Symbolet $\\sqrt{a}$ står for det **positive** tallet som opphøyd i andre gir $a$. For eksempel er $\\sqrt{9} = 3$, *ikke* $-3$, selv om $(-3)^2$ også er $9$. Per definisjon er $\\sqrt{a} \\geq 0$ for alle $a \\geq 0$.

Denne definisjonen har en viktig konsekvens: likningen $\\sqrt{x} = -3$ har **ingen løsning**. Kvadratroten kan aldri gi et negativt resultat, så uansett hvilken verdi du prøver for $x$, vil $\\sqrt{x}$ aldri bli $-3$. Hvis du likevel prøver å kvadrere begge sider, får du $x = 9$ -- men $\\sqrt{9} = 3 \\neq -3$. Du har fått en falsk løsning! Denne innsikten er grunnen til at kontroll er så viktig.

La oss starte med de enkleste rotlikningene. For $\\sqrt{x} = 4$ kvadrerer vi begge sider: $(\\sqrt{x})^2 = 4^2$, altså $x = 16$. Kontroll: $\\sqrt{16} = 4$. Stemmer! For $\\sqrt{x} = 0$ kvadrerer vi: $x = 0$. Kontroll: $\\sqrt{0} = 0$. Stemmer også. Den eneste verdien der kvadratroten er null, er null selv.`,
    },
    {
      id: '1t-2-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kvadratroten og dens egenskaper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-6-n-quiz1-q0',
            task: 'Hva er løsningen på $\\sqrt{x} = -2$?',
            options: [
              { id: 'a', text: '$x = 4$', isCorrect: false },
              { id: 'b', text: '$x = -4$', isCorrect: false },
              { id: 'c', text: 'Ingen løsning', isCorrect: true },
              { id: 'd', text: '$x = 2$', isCorrect: false },
            ],
            solution: 'Kvadratroten er alltid $\\geq 0$ per definisjon, så $\\sqrt{x}$ kan aldri bli $-2$. Likningen har ingen løsning. Hvis du kvadrerer og får $x = 4$, er det en falsk løsning: $\\sqrt{4} = 2 \\neq -2$.',
          },
          {
            id: '1t-2-6-n-quiz1-q1',
            task: 'Hva er $\\sqrt{9}$?',
            options: [
              { id: 'a', text: '$3$ og $-3$', isCorrect: false },
              { id: 'b', text: '$3$', isCorrect: true },
              { id: 'c', text: '$-3$', isCorrect: false },
              { id: 'd', text: '$81$', isCorrect: false },
            ],
            solution: 'Per definisjon er $\\sqrt{a}$ det *positive* tallet som opphøyd i andre gir $a$. Så $\\sqrt{9} = 3$, ikke $-3$, selv om $(-3)^2 = 9$.',
          },
          {
            id: '1t-2-6-n-quiz1-q2',
            task: 'Løs $\\sqrt{x} = 4$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 2$', isCorrect: false },
              { id: 'b', text: '$x = 8$', isCorrect: false },
              { id: 'c', text: '$x = 16$', isCorrect: true },
              { id: 'd', text: '$x = \\pm 4$', isCorrect: false },
            ],
            solution: 'Vi kvadrerer begge sider: $(\\sqrt{x})^2 = 4^2$, altså $x = 16$. Kontroll: $\\sqrt{16} = 4$. Stemmer!',
          },
          {
            id: '1t-2-6-n-quiz1-q3',
            task: 'Hvorfor må vi alltid kontrollere svarene i rotlikninger?',
            options: [
              { id: 'a', text: 'Fordi kvadratroten er vanskelig å beregne', isCorrect: false },
              { id: 'b', text: 'Fordi kvadrering kan innføre falske løsninger', isCorrect: true },
              { id: 'c', text: 'Fordi kalkulatoren kan gjøre feil', isCorrect: false },
              { id: 'd', text: 'Fordi det er et ekstra poeng på eksamen', isCorrect: false },
            ],
            solution: 'Når vi kvadrerer begge sider, «glemmer» vi fortegnet. Kvadrering av $a = b$ gir $a^2 = b^2$, men dette er også sant for $a = -b$. Derfor kan vi få løsninger som tilfredsstiller den kvadrerte likningen, men ikke den opprinnelige.',
          },
        ],
      },
    },    {
      id: '1t-2-6-n-section2',
      type: 'text',
      content: `## Uttrykk under rottegnet

La oss øke vanskelighetsgraden litt. Hva om det ikke bare er $x$ under rottegnet, men et helt uttrykk? Ta likningen $\\sqrt{x + 5} = 3$. Vi kvadrerer begge sider: $x + 5 = 9$. Trekker vi fra $5$, får vi $x = 4$. Kontroll: $\\sqrt{4 + 5} = \\sqrt{9} = 3$. Perfekt.

Teknikken er alltid den samme. For $\\sqrt{x - 1} = 4$ kvadrerer vi: $x - 1 = 16$, altså $x = 17$. For $\\sqrt{2x + 1} = 3$ kvadrerer vi: $2x + 1 = 9$, altså $2x = 8$ og $x = 4$. For $\\sqrt{3x - 5} = 4$ kvadrerer vi: $3x - 5 = 16$, altså $3x = 21$ og $x = 7$.

Legg merke til mønsteret: kvadrering fjerner rottegnet, og det som var under roten havner rett på venstre side. Deretter løser vi en vanlig førstegradslikning. Men husk at vi alltid setter svaret tilbake i den *opprinnelige* likningen for å kontrollere. Så lenge høyre side er positiv (som $3$, $4$, $5$), vil kontrollen som regel gå bra. Det er når vi får mer kompliserte likninger at fallgruvene dukker opp -- og det er neste tema.`,
    },
    {
      id: '1t-2-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på uttrykk under rottegnet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-6-n-quiz2-q0',
            task: 'Løs $\\sqrt{2x + 1} = 3$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 5$', isCorrect: false },
              { id: 'b', text: '$x = 1$', isCorrect: false },
              { id: 'c', text: '$x = 8$', isCorrect: false },
              { id: 'd', text: '$x = 4$', isCorrect: true },
            ],
            solution: 'Vi kvadrerer begge sider: $2x + 1 = 9$. Trekker fra $1$: $2x = 8$. Deler på $2$: $x = 4$. Kontroll: $\\sqrt{2 \\cdot 4 + 1} = \\sqrt{9} = 3$. Stemmer!',
          },
          {
            id: '1t-2-6-n-quiz2-q1',
            task: 'Løs $\\sqrt{x + 5} = 3$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 4$', isCorrect: true },
              { id: 'b', text: '$x = -2$', isCorrect: false },
              { id: 'c', text: '$x = 14$', isCorrect: false },
              { id: 'd', text: '$x = 8$', isCorrect: false },
            ],
            solution: 'Vi kvadrerer begge sider: $x + 5 = 9$. Trekker fra $5$: $x = 4$. Kontroll: $\\sqrt{4 + 5} = \\sqrt{9} = 3$. Stemmer!',
          },
          {
            id: '1t-2-6-n-quiz2-q2',
            task: 'Løs $\\sqrt{3x - 5} = 4$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = 7$', isCorrect: true },
              { id: 'c', text: '$x = \\frac{11}{3}$', isCorrect: false },
              { id: 'd', text: '$x = 9$', isCorrect: false },
            ],
            solution: 'Vi kvadrerer: $3x - 5 = 16$. Legger til $5$: $3x = 21$. Deler på $3$: $x = 7$. Kontroll: $\\sqrt{3 \\cdot 7 - 5} = \\sqrt{16} = 4$. Stemmer!',
          },
          {
            id: '1t-2-6-n-quiz2-q3',
            task: 'Hva skjer når vi kvadrerer $\\sqrt{x - 1} = 4$?',
            options: [
              { id: 'a', text: '$x - 1 = 2$', isCorrect: false },
              { id: 'b', text: '$\\sqrt{x} - 1 = 16$', isCorrect: false },
              { id: 'c', text: '$x - 1 = 16$', isCorrect: true },
              { id: 'd', text: '$x^2 - 1 = 16$', isCorrect: false },
            ],
            solution: 'Når vi kvadrerer begge sider, fjernes rottegnet: $(\\sqrt{x - 1})^2 = 4^2$ gir $x - 1 = 16$. Hele uttrykket under roten havner direkte på venstre side.',
          },
        ],
      },
    },    {
      id: '1t-2-6-n-section3',
      type: 'text',
      content: `## Falske løsninger -- hvorfor kontroll er livsviktig

Nå kommer vi til det som gjør rotlikninger virkelig interessante. Når $x$ dukker opp *både* under rottegnet *og* utenfor, kan kvadrering gi oss løsninger som ikke stemmer. La oss se hvorfor.

Ta likningen $\\sqrt{x + 2} = x$. Vi kvadrerer begge sider: $x + 2 = x^2$. Flytter vi alt til én side, får vi $x^2 - x - 2 = 0$. Dette er en andregradslikning som vi kan faktorisere: $(x - 2)(x + 1) = 0$, altså $x = 2$ eller $x = -1$. Men stemmer begge?

Kontroll for $x = 2$: $\\sqrt{2 + 2} = \\sqrt{4} = 2$. Ja, $2 = 2$ stemmer.

Kontroll for $x = -1$: $\\sqrt{-1 + 2} = \\sqrt{1} = 1$. Men høyre side er $x = -1$, og $1 \\neq -1$. Denne løsningen er **falsk**! Den dukket opp fordi kvadrering «glemmer» fortegnet. Når vi kvadrerte $\\sqrt{x + 2} = x$, behandlet vi det som om $|x|$ stod på høyre side. Verdien $x = -1$ tilfredsstiller egentlig $\\sqrt{x + 2} = -x$ (altså $1 = 1$), men det er en *annen* likning.

Her er et annet eksempel: $\\sqrt{x - 3} = x - 5$. Kvadrering gir $x - 3 = x^2 - 10x + 25$, altså $x^2 - 11x + 28 = 0$, som faktoriseres til $(x - 4)(x - 7) = 0$. Kontroll: for $x = 7$ får vi $\\sqrt{4} = 2$ og $7 - 5 = 2$, stemmer. For $x = 4$ får vi $\\sqrt{1} = 1$ og $4 - 5 = -1$, stemmer *ikke*. Kun $x = 7$ er gyldig.

Moralen er klar: kontroller alltid *alle* kandidatløsninger i den opprinnelige likningen.`,
    },
    {
      id: '1t-2-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på falske løsninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-6-n-quiz3-q0',
            task: 'Du løser $\\sqrt{x + 3} = x + 1$ og finner kandidatene $x = 1$ og $x = -2$. Hvilken er gyldig?',
            options: [
              { id: 'a', text: 'Bare $x = -2$', isCorrect: false },
              { id: 'b', text: 'Bare $x = 1$', isCorrect: true },
              { id: 'c', text: 'Begge', isCorrect: false },
              { id: 'd', text: 'Ingen av dem', isCorrect: false },
            ],
            solution: 'Kontroll for $x = 1$: $\\sqrt{1 + 3} = \\sqrt{4} = 2$ og $1 + 1 = 2$. Stemmer! Kontroll for $x = -2$: $\\sqrt{-2 + 3} = \\sqrt{1} = 1$ og $-2 + 1 = -1$. $1 \\neq -1$, så denne er falsk.',
          },
          {
            id: '1t-2-6-n-quiz3-q1',
            task: 'Hvorfor oppstår falske løsninger når vi kvadrerer begge sider av en likning?',
            options: [
              { id: 'a', text: 'Fordi kvadrering ikke er en gyldig operasjon', isCorrect: false },
              { id: 'b', text: 'Fordi vi glemmer å kontrollere', isCorrect: false },
              { id: 'c', text: 'Fordi kvadrering "glemmer" fortegnet -- både $a = b$ og $a = -b$ gir $a^2 = b^2$', isCorrect: true },
              { id: 'd', text: 'Fordi rotlikninger alltid har to løsninger', isCorrect: false },
            ],
            solution: 'Når vi kvadrerer $\\sqrt{x + 2} = x$, behandler vi det som om $|x|$ står på høyre side. Verdier som tilfredsstiller $\\sqrt{x + 2} = -x$ (en *annen* likning) kan snike seg inn som falske løsninger.',
          },
          {
            id: '1t-2-6-n-quiz3-q2',
            task: 'Du løser $\\sqrt{x + 2} = x$ og finner kandidatene $x = 2$ og $x = -1$. Hvilke(n) er gyldig(e)?',
            options: [
              { id: 'a', text: 'Begge', isCorrect: false },
              { id: 'b', text: 'Bare $x = -1$', isCorrect: false },
              { id: 'c', text: 'Ingen av dem', isCorrect: false },
              { id: 'd', text: 'Bare $x = 2$', isCorrect: true },
            ],
            solution: 'Kontroll for $x = 2$: $\\sqrt{2 + 2} = \\sqrt{4} = 2 = x$. Stemmer! Kontroll for $x = -1$: $\\sqrt{-1 + 2} = \\sqrt{1} = 1$, men $x = -1$. $1 \\neq -1$, så denne er falsk.',
          },
          {
            id: '1t-2-6-n-quiz3-q3',
            task: 'I likningen $\\sqrt{x - 3} = x - 5$ finner du kandidatene $x = 4$ og $x = 7$. Hva er kontrollresultatet for $x = 4$?',
            options: [
              { id: 'a', text: '$\\sqrt{1} = -1$, stemmer', isCorrect: false },
              { id: 'b', text: '$\\sqrt{1} = 1$ og $4 - 5 = -1$, stemmer ikke', isCorrect: true },
              { id: 'c', text: '$\\sqrt{7} = 2$, stemmer', isCorrect: false },
              { id: 'd', text: '$\\sqrt{1} = 1$ og $4 - 5 = 1$, stemmer', isCorrect: false },
            ],
            solution: 'For $x = 4$: venstre side er $\\sqrt{4 - 3} = \\sqrt{1} = 1$. Høyre side er $4 - 5 = -1$. Siden $1 \\neq -1$, er $x = 4$ en falsk løsning. Bare $x = 7$ er gyldig.',
          },
          {
            id: '1t-2-6-n-quiz3-q4',
            task: 'Når bør du være ekstra oppmerksom på falske løsninger?',
            options: [
              { id: 'a', text: 'Når likningen bare har $\\sqrt{x}$ på venstre side', isCorrect: false },
              { id: 'b', text: 'Når høyre side er et positivt tall', isCorrect: false },
              { id: 'c', text: 'Når $x$ opptrer både under og utenfor rottegnet', isCorrect: true },
              { id: 'd', text: 'Når nevneren inneholder $x$', isCorrect: false },
            ],
            solution: 'Falske løsninger er mest vanlige når $x$ dukker opp både under rottegnet og utenfor (som i $\\sqrt{x + 2} = x$). Da kan kvadrering gi andregradslikninger med ekstra løsninger. Når høyre side er en positiv konstant (som $\\sqrt{x} = 3$), er falske løsninger sjeldne.',
          },
        ],
      },
    },    {
      id: '1t-2-6-n-section4',
      type: 'text',
      content: `## Isoler roten først

Noen ganger står rotuttrykket ikke alene på én side av likhetstegnet. Da er det første steget å **isolere roten** -- flytte alt annet bort fra den -- før vi kvadrerer.

Ta likningen $\\sqrt{x + 1} + 3 = 7$. Her trekker vi fra $3$ på begge sider først: $\\sqrt{x + 1} = 4$. Nå kan vi kvadrere: $x + 1 = 16$, altså $x = 15$. Kontroll: $\\sqrt{15 + 1} + 3 = \\sqrt{16} + 3 = 4 + 3 = 7$. Stemmer!

Hva med $\\sqrt{x} - 2 = 3$? Vi legger til $2$: $\\sqrt{x} = 5$. Kvadrerer: $x = 25$. Hva med $2\\sqrt{x} = 6$? Vi deler på $2$: $\\sqrt{x} = 3$. Kvadrerer: $x = 9$. Og $3\\sqrt{x + 2} = 12$? Deler på $3$: $\\sqrt{x + 2} = 4$. Kvadrerer: $x + 2 = 16$, $x = 14$.

Poenget er at vi aldri skal kvadrere før rotuttrykket står *alene* på én side. Hvis vi prøver å kvadrere $\\sqrt{x + 1} + 3 = 7$ direkte, får vi $(\\sqrt{x + 1})^2 + 2 \\cdot 3 \\cdot \\sqrt{x + 1} + 9 = 49$, og roten er der fortsatt! Å isolere først gjør alt mye enklere.

Et viktig spesialtilfelle er $\\sqrt{x^2} = 4$. Siden $\\sqrt{x^2} = |x|$ (absoluttverdien av $x$), betyr dette at $|x| = 4$, altså $x = 4$ eller $x = -4$. Her får vi faktisk to løsninger, fordi det er absoluttverdien -- ikke bare $x$ -- som er involvert.`,
    },
    {
      id: '1t-2-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på å isolere roten:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-6-n-quiz4-q0',
            task: 'Hva er det første steget for å løse $\\sqrt{x - 4} + 1 = 6$?',
            options: [
              { id: 'a', text: 'Kvadrere begge sider', isCorrect: false },
              { id: 'b', text: 'Trekke fra $1$ på begge sider', isCorrect: true },
              { id: 'c', text: 'Trekke fra $4$ under roten', isCorrect: false },
              { id: 'd', text: 'Gange begge sider med $2$', isCorrect: false },
            ],
            solution: 'Vi må isolere rotuttrykket først. Trekker vi fra $1$ på begge sider, får vi $\\sqrt{x - 4} = 5$. Deretter kvadrerer vi: $x - 4 = 25$, altså $x = 29$.',
          },
          {
            id: '1t-2-6-n-quiz4-q1',
            task: 'Løs $\\sqrt{x} - 2 = 3$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 1$', isCorrect: false },
              { id: 'b', text: '$x = 9$', isCorrect: false },
              { id: 'c', text: '$x = 25$', isCorrect: true },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: 'Isoler roten: $\\sqrt{x} = 3 + 2 = 5$. Kvadrer: $x = 25$. Kontroll: $\\sqrt{25} - 2 = 5 - 2 = 3$. Stemmer!',
          },
          {
            id: '1t-2-6-n-quiz4-q2',
            task: 'Løs $3\\sqrt{x + 2} = 12$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 14$', isCorrect: true },
              { id: 'b', text: '$x = 16$', isCorrect: false },
              { id: 'c', text: '$x = 2$', isCorrect: false },
              { id: 'd', text: '$x = 18$', isCorrect: false },
            ],
            solution: 'Del på $3$: $\\sqrt{x + 2} = 4$. Kvadrer: $x + 2 = 16$, altså $x = 14$. Kontroll: $3\\sqrt{14 + 2} = 3\\sqrt{16} = 3 \\cdot 4 = 12$. Stemmer!',
          },
          {
            id: '1t-2-6-n-quiz4-q3',
            task: 'Hva blir $\\sqrt{x^2}$ forenklet til?',
            options: [
              { id: 'a', text: '$x$', isCorrect: false },
              { id: 'b', text: '$x^2$', isCorrect: false },
              { id: 'c', text: '$|x|$', isCorrect: true },
              { id: 'd', text: '$\\pm x$', isCorrect: false },
            ],
            solution: 'Siden $\\sqrt{a}$ alltid er $\\geq 0$, gir $\\sqrt{x^2} = |x|$ (absoluttverdien av $x$). For $x = -4$ er $\\sqrt{(-4)^2} = \\sqrt{16} = 4 = |-4|$.',
          },
          {
            id: '1t-2-6-n-quiz4-q4',
            task: 'Hvorfor bør vi *ikke* kvadrere $\\sqrt{x + 1} + 3 = 7$ direkte uten å isolere roten først?',
            options: [
              { id: 'a', text: 'Fordi det gir feil svar', isCorrect: false },
              { id: 'b', text: 'Fordi rottegnet ikke forsvinner -- vi får et kryssledd $2 \\cdot 3 \\cdot \\sqrt{x + 1}$', isCorrect: true },
              { id: 'c', text: 'Fordi det er umulig å kvadrere en sum', isCorrect: false },
              { id: 'd', text: 'Fordi vi da deler på null', isCorrect: false },
            ],
            solution: 'Hvis vi kvadrerer hele venstre side direkte, bruker vi formelen $(a + b)^2 = a^2 + 2ab + b^2$ og får $(\\sqrt{x+1})^2 + 2 \\cdot 3\\sqrt{x+1} + 9 = 49$. Rotuttrykket er der fortsatt! Isolerer vi roten først, unngår vi dette problemet.',
          },
        ],
      },
    },    {
      id: '1t-2-6-n-section5',
      type: 'text',
      content: `## Avanserte tilfeller -- rot på begge sider

Til slutt skal vi se på noen likninger som krever litt ekstra tankearbeid. Hva gjør vi når det er røtter på *begge* sider av likhetstegnet?

Ta $\\sqrt{x - 1} = \\sqrt{2x - 5}$. Her er begge sider allerede isolerte røtter. Vi kvadrerer: $x - 1 = 2x - 5$. Trekker vi fra $x$ og legger til $5$: $4 = x$, altså $x = 4$. Kontroll: $\\sqrt{4 - 1} = \\sqrt{3}$ og $\\sqrt{2 \\cdot 4 - 5} = \\sqrt{3}$. Stemmer!

Hva med $\\sqrt{x + 5} - \\sqrt{x} = 1$? Her har vi *to* rotuttrykk, og vi kan ikke kvadrere bort begge i ett steg. Trikset er å isolere én rot og kvadrere: $\\sqrt{x + 5} = 1 + \\sqrt{x}$. Nå kvadrerer vi: $x + 5 = 1 + 2\\sqrt{x} + x$. Forenkler: $5 = 1 + 2\\sqrt{x}$, altså $4 = 2\\sqrt{x}$, som gir $\\sqrt{x} = 2$ og dermed $x = 4$. Kontroll: $\\sqrt{9} - \\sqrt{4} = 3 - 2 = 1$. Stemmer!

Legg merke til at vi måtte kvadrere *to ganger* i det siste eksempelet -- første gang for å fjerne den ene roten, og andre gang for å fjerne den som var igjen. Slike likninger er mer arbeidskrevende, men metoden er den samme: isoler, kvadrer, forenkle, og gjenta ved behov.

Uansett hvor komplisert en rotlikning ser ut, er oppskriften: isoler roten, kvadrer, løs den resulterende likningen, og kontroller alltid svaret i den opprinnelige likningen. Den kontrollen er ikke et valgfritt ekstrasteg -- den er en helt nødvendig del av løsningen.`,
    },
    {
      id: '1t-2-6-n-quiz5',
      type: 'exercise',
      exercise: {
        id: '1t-2-6-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test deg selv på avanserte rotlikninger:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '1t-2-6-n-quiz5-q0',
            task: 'Hva er $\\sqrt{x - 1} = \\sqrt{2x - 5}$ løst for $x$?',
            options: [
              { id: 'a', text: '$x = 3$', isCorrect: false },
              { id: 'b', text: '$x = 6$', isCorrect: false },
              { id: 'c', text: '$x = 4$', isCorrect: true },
              { id: 'd', text: '$x = 2$', isCorrect: false },
            ],
            solution: 'Vi kvadrerer begge sider: $x - 1 = 2x - 5$. Ordner: $-1 + 5 = 2x - x$, altså $4 = x$. Kontroll: $\\sqrt{4 - 1} = \\sqrt{3}$ og $\\sqrt{8 - 5} = \\sqrt{3}$. Stemmer!',
          },
          {
            id: '1t-2-6-n-quiz5-q1',
            task: 'Likningen $\\sqrt{x + 5} - \\sqrt{x} = 1$ har to rotuttrykk. Hva er det første steget?',
            options: [
              { id: 'a', text: 'Kvadrere begge sider direkte', isCorrect: false },
              { id: 'b', text: 'Gange med fellesnevneren', isCorrect: false },
              { id: 'c', text: 'Isolere den ene roten: $\\sqrt{x + 5} = 1 + \\sqrt{x}$', isCorrect: true },
              { id: 'd', text: 'Sette $x = 0$ og sjekke', isCorrect: false },
            ],
            solution: 'Når vi har to rotuttrykk, isolerer vi én rot på én side, slik at vi kan kvadrere og håndtere kryssled det. Her får vi $\\sqrt{x + 5} = 1 + \\sqrt{x}$, og kvadrering gir $x + 5 = 1 + 2\\sqrt{x} + x$, som forenkles til $\\sqrt{x} = 2$.',
          },
          {
            id: '1t-2-6-n-quiz5-q2',
            task: 'Løs $\\sqrt{x + 5} - \\sqrt{x} = 1$. Hva er $x$?',
            options: [
              { id: 'a', text: '$x = 1$', isCorrect: false },
              { id: 'b', text: '$x = 4$', isCorrect: true },
              { id: 'c', text: '$x = 9$', isCorrect: false },
              { id: 'd', text: '$x = 5$', isCorrect: false },
            ],
            solution: 'Isoler: $\\sqrt{x + 5} = 1 + \\sqrt{x}$. Kvadrer: $x + 5 = 1 + 2\\sqrt{x} + x$. Forenkle: $4 = 2\\sqrt{x}$, altså $\\sqrt{x} = 2$ og $x = 4$. Kontroll: $\\sqrt{9} - \\sqrt{4} = 3 - 2 = 1$. Stemmer!',
          },
          {
            id: '1t-2-6-n-quiz5-q3',
            task: 'Hvor mange ganger må du kvadrere for å løse en likning med to rotuttrykk som $\\sqrt{x + 5} - \\sqrt{x} = 1$?',
            options: [
              { id: 'a', text: 'Én gang', isCorrect: false },
              { id: 'b', text: 'To ganger', isCorrect: true },
              { id: 'c', text: 'Tre ganger', isCorrect: false },
              { id: 'd', text: 'Det avhenger av verdien av $x$', isCorrect: false },
            ],
            solution: 'Første kvadrering fjerner den ene roten, men den andre overlever i et kryssledd. Andre kvadrering fjerner den gjenværende roten. Etter to kvadreringer har vi en vanlig likning uten røtter.',
          },
        ],
      },
    },    {
      id: '1t-2-6-n-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har vi lært å løse likninger der den ukjente befinner seg under et rottegn.

**Metoden** er i fire steg: (1) isoler rotuttrykket på én side, (2) kvadrer begge sider for å fjerne roten, (3) løs den resulterende likningen, og (4) kontroller alltid svaret i den opprinnelige likningen. Denne firestegsmetoden fungerer for alle rotlikninger, fra de enkleste til de mest kompliserte.

**Falske løsninger** oppstår fordi kvadrering «glemmer» fortegnet. Når vi kvadrerer $a = b$, får vi $a^2 = b^2$, men dette er også sant for $a = -b$. Dermed kan vi få løsninger som tilfredsstiller den kvadrerte likningen, men ikke den opprinnelige. Kontroll i den opprinnelige likningen avslører slike bedragere.

**Husk definisjonen**: $\\sqrt{a} \\geq 0$ for alle $a \\geq 0$. Kvadratroten er alltid positiv (eller null). Likningen $\\sqrt{x} = \\text{negativt tall}$ har derfor aldri noen løsning. Og $\\sqrt{x^2} = |x|$, ikke bare $x$, noe som kan gi to løsninger.`,
    },
  ],
  exercises: [],
};
