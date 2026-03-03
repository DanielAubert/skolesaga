/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 5
 *
 * Kapittel 5.1: Renter
 * Kapittel 5.2: Lån
 * Kapittel 5.3: Budsjett
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1 NARRATIV: Renter
// ============================================================================

export const CHAPTER_9_5_1_NARRATIV: TextbookChapter = {
  id: '9-5-1-narrativ',
  courseId: '9',
  chapterNumber: '5.1',
  title: 'Renter',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av renter -- hvordan penger vokser på sparekonto, hva rentesrente betyr, og hvorfor det lønner seg å starte tidlig med sparing.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  linkedChapterId: '9-5-1',
  content: [
    {
      id: '9-5-1-n-intro',
      type: 'text',
      content: `## Pengene som vokser av seg selv

Tenk deg at du setter 1000 kroner i banken. Etter et år har du plutselig 1020 kroner -- uten å ha gjort noe som helst. Hvor kom de ekstra 20 kronene fra? Svaret er **renter**. Banken betaler deg for å låne pengene dine. De bruker pengene til å gi lån til andre, og som takk for lånet gir de deg en liten andel tilbake.

Renter er et av de viktigste økonomiske konseptene du kan lære. Det påvirker alt fra sparekontoen din til boliglånet ditt -- og jo bedre du forstår det, jo smartere valg kan du ta med pengene dine.`,
    },

    {
      id: '9-5-1-n-section1',
      type: 'text',
      content: `## Hva er rente?

**Rente** er prisen for å låne penger. Når du setter penger i banken, låner banken pengene dine -- og betaler deg rente. Når du låner penger av banken, betaler du rente til banken.

Renten oppgis som en **prosentsats** per år, kalt **rentesats** eller **rentefot**. Hvis rentesatsen er $2\\,\\%$ og du har $1000$ kr i banken, får du:

$$\\text{Rente} = 1000 \\cdot 0{,}02 = 20 \\text{ kr}$$

Beløpet du starter med kalles **grunnbeløpet** eller **kapitalen**. Etter ett år med $2\\,\\%$ rente har du:

$$\\text{Nytt beløp} = 1000 + 20 = 1020 \\text{ kr}$$

Vi kan også skrive dette med en **vekstfaktor**. Å legge til $2\\,\\%$ er det samme som å gange med $1{,}02$:

$$1000 \\cdot 1{,}02 = 1020 \\text{ kr}$$

Vekstfaktoren er alltid $1 + \\frac{\\text{rentesats}}{100}$. For $3{,}5\\,\\%$ rente er vekstfaktoren $1{,}035$, for $0{,}5\\,\\%$ er den $1{,}005$, og for $10\\,\\%$ er den $1{,}10$.`,
    },

    {
      id: '9-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på enkel rente:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-5-1-n-quiz1-q0',
            task: 'Du setter $5000$ kr i banken med $3\\,\\%$ rente. Hvor mye rente får du etter ett år?',
            options: [
              { id: 'a', text: '$30$ kr', isCorrect: false },
              { id: 'b', text: '$150$ kr', isCorrect: true },
              { id: 'c', text: '$1500$ kr', isCorrect: false },
              { id: 'd', text: '$15$ kr', isCorrect: false },
            ],
            solution: 'Rente $= 5000 \\cdot 0{,}03 = 150$ kr. Vi ganger grunnbeløpet med rentesatsen som desimaltall.',
          },
          {
            id: '9-5-1-n-quiz1-q1',
            task: 'Hva er vekstfaktoren når rentesatsen er $4{,}5\\,\\%$?',
            options: [
              { id: 'a', text: '$4{,}5$', isCorrect: false },
              { id: 'b', text: '$1{,}45$', isCorrect: false },
              { id: 'c', text: '$1{,}045$', isCorrect: true },
              { id: 'd', text: '$0{,}045$', isCorrect: false },
            ],
            solution: 'Vekstfaktoren er $1 + \\frac{4{,}5}{100} = 1 + 0{,}045 = 1{,}045$. Vi legger alltid rentesatsen som desimaltall til $1$.',
          },
          {
            id: '9-5-1-n-quiz1-q2',
            task: 'Du har $8000$ kr i banken og etter ett år har du $8240$ kr. Hva er rentesatsen?',
            options: [
              { id: 'a', text: '$2\\,\\%$', isCorrect: false },
              { id: 'b', text: '$3\\,\\%$', isCorrect: true },
              { id: 'c', text: '$2{,}4\\,\\%$', isCorrect: false },
              { id: 'd', text: '$0{,}3\\,\\%$', isCorrect: false },
            ],
            solution: 'Renten er $8240 - 8000 = 240$ kr. Rentesatsen er $\\frac{240}{8000} \\cdot 100\\,\\% = 3\\,\\%$.',
          },
        ],
      },
    },

    {
      id: '9-5-1-n-section2',
      type: 'text',
      content: `## Rentes rente -- den magiske snøballeffekten

Etter ett år med $2\\,\\%$ rente har du $1020$ kr. Men det andre året skjer noe spennende: nå får du rente av $1020$ kr, ikke bare de opprinnelige $1000$. Det betyr at du får rente av rentene -- dette kalles **rentes rente**.

Etter to år: $1020 \\cdot 1{,}02 = 1040{,}40$ kr.

Legg merke til at du fikk $20{,}40$ kr i rente det andre året, mot bare $20$ kr det første. Forskjellen er liten nå, men over tid vokser den dramatisk.

Med vekstfaktor kan vi beregne beløpet etter $n$ år med formelen:

$$K_n = K_0 \\cdot v^n$$

der $K_0$ er startbeløpet, $v$ er vekstfaktoren, og $n$ er antall år.

La oss si at du setter $10\\,000$ kr i banken med $4\\,\\%$ rente. Etter $20$ år har du:

$$K_{20} = 10\\,000 \\cdot 1{,}04^{20} = 10\\,000 \\cdot 2{,}191 \\approx 21\\,911 \\text{ kr}$$

Pengene dine har mer enn doblet seg! Og du har ikke løftet en finger. Etter $40$ år ville beløpet vært omtrent $48\\,010$ kr -- nesten fem ganger startbeløpet. Det er snøballeffekten i aksjon: renten tjener rente, som tjener enda mer rente.

Albert Einstein skal visstnok ha kalt rentes rente «verdens åttende underverk». Uansett om sitatet er ekte, er poenget godt: tid er din beste venn når det gjelder sparing.`,
    },

    {
      id: '9-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på rentes rente:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-5-1-n-quiz2-q0',
            task: 'Du setter $3000$ kr i banken med $5\\,\\%$ rente. Hvor mye har du etter $2$ år med rentes rente?',
            options: [
              { id: 'a', text: '$3300$ kr', isCorrect: false },
              { id: 'b', text: '$3150$ kr', isCorrect: false },
              { id: 'c', text: '$3307{,}50$ kr', isCorrect: true },
              { id: 'd', text: '$3310$ kr', isCorrect: false },
            ],
            solution: '$K_2 = 3000 \\cdot 1{,}05^2 = 3000 \\cdot 1{,}1025 = 3307{,}50$ kr. Etter første år har du $3150$ kr, og etter andre år $3150 \\cdot 1{,}05 = 3307{,}50$ kr.',
          },
          {
            id: '9-5-1-n-quiz2-q1',
            task: 'Hvilket uttrykk gir beløpet etter $10$ år når du starter med $K_0$ kroner og rentesatsen er $3\\,\\%$?',
            options: [
              { id: 'a', text: '$K_0 + 10 \\cdot 0{,}03 \\cdot K_0$', isCorrect: false },
              { id: 'b', text: '$K_0 \\cdot 1{,}03^{10}$', isCorrect: true },
              { id: 'c', text: '$K_0 \\cdot 1{,}3^{10}$', isCorrect: false },
              { id: 'd', text: '$K_0 \\cdot 10 \\cdot 1{,}03$', isCorrect: false },
            ],
            solution: 'Med rentes rente bruker vi formelen $K_n = K_0 \\cdot v^n$, der $v = 1{,}03$ og $n = 10$. Alternativ a) gir enkel rente uten rentes rente-effekt.',
          },
          {
            id: '9-5-1-n-quiz2-q2',
            task: 'Hvorfor vokser beløpet raskere og raskere med rentes rente?',
            options: [
              { id: 'a', text: 'Fordi banken øker rentesatsen hvert år', isCorrect: false },
              { id: 'b', text: 'Fordi du setter inn mer penger hvert år', isCorrect: false },
              { id: 'c', text: 'Fordi renten beregnes av et stadig større beløp', isCorrect: true },
              { id: 'd', text: 'Fordi inflasjonen gjør pengene mer verdt', isCorrect: false },
            ],
            solution: 'Med rentes rente legges fjorårets rente til kapitalen, slik at neste års rente beregnes av et større beløp. Derfor vokser beløpet eksponentielt.',
          },
        ],
      },
    },

    {
      id: '9-5-1-n-section3',
      type: 'text',
      content: `## Skattetrekk og realrente

I virkeligheten er det ikke fullt så enkelt som formelen viser. I Norge må du betale **skatt** på renteinntektene dine. Skatten på kapitalinntekt er for tiden $22\\,\\%$. Det betyr at hvis du tjener $100$ kr i rente, beholder du bare $78$ kr.

Hvis rentesatsen er $4\\,\\%$, blir **renten etter skatt**:

$$4\\,\\% \\cdot (1 - 0{,}22) = 4\\,\\% \\cdot 0{,}78 = 3{,}12\\,\\%$$

I tillegg spiser **inflasjonen** (prisstigning) av verdien til pengene dine. Hvis inflasjonen er $2\\,\\%$ og renten etter skatt er $3{,}12\\,\\%$, er **realrenten** (den faktiske økningen i kjøpekraft) bare omtrent $1{,}12\\,\\%$.

$$\\text{Realrente} \\approx \\text{Rente etter skatt} - \\text{Inflasjon}$$

Det betyr at selv om kontoen din viser flere kroner, har du ikke nødvendigvis blitt så mye rikere i praksis. Men det er fortsatt bedre enn å la pengene ligge under madrassen -- da taper du kjøpekraft hvert eneste år!`,
    },

    {
      id: '9-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på skatt og realrente:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-5-1-n-quiz3-q0',
            task: 'Rentesatsen er $5\\,\\%$ og skatten på kapitalinntekt er $22\\,\\%$. Hva er renten etter skatt?',
            options: [
              { id: 'a', text: '$4{,}5\\,\\%$', isCorrect: false },
              { id: 'b', text: '$3{,}9\\,\\%$', isCorrect: true },
              { id: 'c', text: '$1{,}1\\,\\%$', isCorrect: false },
              { id: 'd', text: '$4{,}78\\,\\%$', isCorrect: false },
            ],
            solution: 'Rente etter skatt $= 5\\,\\% \\cdot (1 - 0{,}22) = 5\\,\\% \\cdot 0{,}78 = 3{,}9\\,\\%$.',
          },
          {
            id: '9-5-1-n-quiz3-q1',
            task: 'Renten etter skatt er $3\\,\\%$ og inflasjonen er $2{,}5\\,\\%$. Hva er omtrent realrenten?',
            options: [
              { id: 'a', text: '$5{,}5\\,\\%$', isCorrect: false },
              { id: 'b', text: '$0{,}75\\,\\%$', isCorrect: false },
              { id: 'c', text: '$0{,}5\\,\\%$', isCorrect: true },
              { id: 'd', text: '$3\\,\\%$', isCorrect: false },
            ],
            solution: 'Realrente $\\approx 3\\,\\% - 2{,}5\\,\\% = 0{,}5\\,\\%$. Pengene dine vokser altså bare litt raskere enn prisene.',
          },
        ],
      },
    },

    {
      id: '9-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Rente** er prisen for å låne penger. Rentesatsen oppgis i prosent per år. Beløpet etter ett år finner vi ved å gange med **vekstfaktoren** $v = 1 + \\frac{p}{100}$, der $p$ er rentesatsen.

**Rentes rente** betyr at renten legges til kapitalen, slik at neste års rente beregnes av et større beløp. Formelen er:

$$K_n = K_0 \\cdot v^n$$

I praksis reduseres avkastningen av **skatt** ($22\\,\\%$ på kapitalinntekt) og **inflasjon**. Realrenten er omtrent rente etter skatt minus inflasjon.

Den viktigste lærdommen: jo tidligere du begynner å spare, jo mer tid har rentes rente til å jobbe for deg!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2 NARRATIV: Lån
// ============================================================================

export const CHAPTER_9_5_2_NARRATIV: TextbookChapter = {
  id: '9-5-2-narrativ',
  courseId: '9',
  chapterNumber: '5.2',
  title: 'Lån',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av lån -- serielån og annuitetslån forklart med hverdagseksempler, slik at du forstår hva som skjer når du låner penger av banken.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  linkedChapterId: '9-5-2',
  content: [
    {
      id: '9-5-2-n-intro',
      type: 'text',
      content: `## Den andre siden av rentemynten

I forrige kapittel så vi at renter kan jobbe *for* deg når du sparer. Men hva skjer når du snur mynten? Når du *låner* penger, jobber rentene *mot* deg. Nå er det du som betaler rente til banken.

De fleste store kjøp i livet -- bolig, bil, utdanning -- finansieres med lån. Å forstå hvordan lån fungerer er derfor noe av det viktigste du kan lære i privatøkonomi. La oss dykke inn i det.`,
    },

    {
      id: '9-5-2-n-section1',
      type: 'text',
      content: `## Grunnleggende om lån

Når du låner penger av banken, må du betale tilbake på to måter:
1. **Avdrag** -- den delen av lånet du betaler tilbake
2. **Renter** -- prisen du betaler for å låne pengene

Til sammen utgjør avdrag og renter det vi kaller **terminbeløpet** (den faste betalingen du gjør hver måned eller hvert kvartal):

$$\\text{Terminbeløp} = \\text{Avdrag} + \\text{Renter}$$

**Restgjelden** er det du til enhver tid skylder banken. Hver gang du betaler et avdrag, synker restgjelden. Rentene beregnes alltid av restgjelden, så etter hvert som du betaler ned lånet, blir rentedelen mindre.

La oss si at du låner $100\\,000$ kr med $6\\,\\%$ årlig rente. Renten det første året er:

$$100\\,000 \\cdot 0{,}06 = 6000 \\text{ kr}$$

Hvis du betaler $26\\,000$ kr det første året ($20\\,000$ i avdrag + $6000$ i renter), synker restgjelden til $80\\,000$ kr. Neste år er renten bare $80\\,000 \\cdot 0{,}06 = 4800$ kr.`,
    },

    {
      id: '9-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnleggende lån:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-5-2-n-quiz1-q0',
            task: 'Du har et lån med restgjeld på $200\\,000$ kr og $5\\,\\%$ årlig rente. Hvor mye rente betaler du dette året?',
            options: [
              { id: 'a', text: '$1000$ kr', isCorrect: false },
              { id: 'b', text: '$5000$ kr', isCorrect: false },
              { id: 'c', text: '$10\\,000$ kr', isCorrect: true },
              { id: 'd', text: '$100\\,000$ kr', isCorrect: false },
            ],
            solution: 'Rente $= 200\\,000 \\cdot 0{,}05 = 10\\,000$ kr. Renten beregnes av restgjelden.',
          },
          {
            id: '9-5-2-n-quiz1-q1',
            task: 'Terminbeløpet er $15\\,000$ kr og rentene er $4000$ kr. Hvor stort er avdraget?',
            options: [
              { id: 'a', text: '$19\\,000$ kr', isCorrect: false },
              { id: 'b', text: '$11\\,000$ kr', isCorrect: true },
              { id: 'c', text: '$4000$ kr', isCorrect: false },
              { id: 'd', text: '$15\\,000$ kr', isCorrect: false },
            ],
            solution: 'Avdrag $=$ Terminbeløp $-$ Renter $= 15\\,000 - 4000 = 11\\,000$ kr.',
          },
          {
            id: '9-5-2-n-quiz1-q2',
            task: 'Hvorfor synker rentene over tid når du betaler avdrag på et lån?',
            options: [
              { id: 'a', text: 'Fordi banken setter ned rentesatsen', isCorrect: false },
              { id: 'b', text: 'Fordi restgjelden blir mindre, og renten beregnes av restgjelden', isCorrect: true },
              { id: 'c', text: 'Fordi avdragene blir større', isCorrect: false },
              { id: 'd', text: 'Fordi lånetiden blir kortere', isCorrect: false },
            ],
            solution: 'Renten beregnes av restgjelden. Når du betaler avdrag, synker restgjelden, og da synker også rentebeløpet.',
          },
        ],
      },
    },

    {
      id: '9-5-2-n-section2',
      type: 'text',
      content: `## Serielån -- like avdrag, synkende terminbeløp

Et **serielån** er den enkleste lånetypen å forstå. Her er avdragene like store i hele låneperioden. Siden renten beregnes av en stadig synkende restgjeld, blir terminbeløpet (avdrag + renter) mindre og mindre.

La oss se på et eksempel: Du låner $100\\,000$ kr over $5$ år med $6\\,\\%$ rente og årlige terminer.

Avdraget er likt hvert år: $\\frac{100\\,000}{5} = 20\\,000$ kr.

| År | Restgjeld (start) | Renter ($6\\,\\%$) | Avdrag | Terminbeløp | Restgjeld (slutt) |
|----|-------|--------|--------|-------------|---------|
| 1 | $100\\,000$ | $6000$ | $20\\,000$ | $26\\,000$ | $80\\,000$ |
| 2 | $80\\,000$ | $4800$ | $20\\,000$ | $24\\,800$ | $60\\,000$ |
| 3 | $60\\,000$ | $3600$ | $20\\,000$ | $23\\,600$ | $40\\,000$ |
| 4 | $40\\,000$ | $2400$ | $20\\,000$ | $22\\,400$ | $20\\,000$ |
| 5 | $20\\,000$ | $1200$ | $20\\,000$ | $21\\,200$ | $0$ |

Totalt betaler du $100\\,000$ i avdrag og $18\\,000$ i renter, altså $118\\,000$ kr. Legg merke til at terminbeløpet synker fra $26\\,000$ til $21\\,200$ kr. Det betyr at et serielån er tyngst i begynnelsen.`,
    },

    {
      id: '9-5-2-n-section3',
      type: 'text',
      content: `## Annuitetslån -- like terminbeløp

De fleste boliglån i Norge er **annuitetslån**. Her er terminbeløpet likt gjennom hele låneperioden. Det betyr at i begynnelsen er rentedelen stor og avdragsdelen liten, men etter hvert snur forholdet.

Formelen for terminbeløpet i et annuitetslån er:

$$T = K_0 \\cdot \\frac{r}{1 - (1 + r)^{-n}}$$

der $K_0$ er lånebeløpet, $r$ er renten per termin (som desimaltall), og $n$ er antall terminer. Du trenger ikke pugge formelen, men det er viktig å forstå prinsippet.

Med samme eksempel som over ($100\\,000$ kr, $6\\,\\%$ rente, $5$ år) blir terminbeløpet:

$$T = 100\\,000 \\cdot \\frac{0{,}06}{1 - 1{,}06^{-5}} = 100\\,000 \\cdot \\frac{0{,}06}{1 - 0{,}7473} \\approx 23\\,740 \\text{ kr}$$

| År | Restgjeld (start) | Renter | Avdrag | Terminbeløp |
|----|-------|--------|--------|-------------|
| 1 | $100\\,000$ | $6000$ | $17\\,740$ | $23\\,740$ |
| 2 | $82\\,260$ | $4936$ | $18\\,804$ | $23\\,740$ |
| 3 | $63\\,456$ | $3807$ | $19\\,933$ | $23\\,740$ |
| 4 | $43\\,523$ | $2611$ | $21\\,129$ | $23\\,740$ |
| 5 | $22\\,394$ | $1344$ | $22\\,396$ | $23\\,740$ |

Totalt betaler du omtrent $118\\,700$ kr -- litt mer enn med serielån. Men fordelen er at beløpet er forutsigbart og likt hver gang.`,
    },

    {
      id: '9-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på serielån og annuitetslån:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-5-2-n-quiz2-q0',
            task: 'Hva er hovedforskjellen mellom serielån og annuitetslån?',
            options: [
              { id: 'a', text: 'Serielån har lavere rente', isCorrect: false },
              { id: 'b', text: 'Serielån har like avdrag, annuitetslån har like terminbeløp', isCorrect: true },
              { id: 'c', text: 'Annuitetslån har lavere rente', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'I et serielån er avdragene like og terminbeløpet synker. I et annuitetslån er terminbeløpet likt, mens avdragene øker og rentene synker.',
          },
          {
            id: '9-5-2-n-quiz2-q1',
            task: 'Du tar opp et serielån på $60\\,000$ kr over $3$ år. Hva er det årlige avdraget?',
            options: [
              { id: 'a', text: '$30\\,000$ kr', isCorrect: false },
              { id: 'b', text: '$15\\,000$ kr', isCorrect: false },
              { id: 'c', text: '$20\\,000$ kr', isCorrect: true },
              { id: 'd', text: '$60\\,000$ kr', isCorrect: false },
            ],
            solution: 'Avdrag per år $= \\frac{60\\,000}{3} = 20\\,000$ kr. I et serielån deles lånebeløpet likt over antall år.',
          },
          {
            id: '9-5-2-n-quiz2-q2',
            task: 'Hvilket lån gir lavest totale rentekostnader?',
            options: [
              { id: 'a', text: 'Annuitetslån', isCorrect: false },
              { id: 'b', text: 'Serielån', isCorrect: true },
              { id: 'c', text: 'De er helt like', isCorrect: false },
              { id: 'd', text: 'Det kommer an på rentesatsen', isCorrect: false },
            ],
            solution: 'Serielån gir lavest totale rentekostnader fordi du betaler mer i avdrag i starten, slik at restgjelden synker raskere. Med annuitetslån er avdragene mindre i starten, så du «bærer» gjelden lenger.',
          },
        ],
      },
    },

    {
      id: '9-5-2-n-section4',
      type: 'text',
      content: `## Gebyrer og effektiv rente

Banken tar ofte ekstra **gebyrer** i tillegg til renten -- for eksempel etableringsgebyr og termingebyr. Når vi tar med alle kostnadene, får vi den **effektive renten**, som er den reelle prisen for lånet.

Den effektive renten er alltid høyere enn den nominelle renten (den renten banken annonserer). Når du sammenligner lån fra ulike banker, bør du alltid sammenligne den effektive renten -- ikke bare den nominelle.

For eksempel kan to banker tilby $5\\,\\%$ nominell rente, men den ene tar $500$ kr i termingebyr mens den andre tar $200$ kr. Da vil den effektive renten være forskjellig, og det billigste valget er ikke nødvendigvis åpenbart bare ved å se på rentesatsen.`,
    },

    {
      id: '9-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Et lån betales tilbake gjennom **terminbeløp** som består av **avdrag** (tilbakebetaling av lånet) og **renter** (prisen for å låne).

| Egenskap | Serielån | Annuitetslån |
|----------|----------|--------------|
| Avdrag | Like store | Øker over tid |
| Renter | Synker | Synker |
| Terminbeløp | Synker | Likt |
| Totale renter | Lavere | Høyere |

**Serielån** gir lavest totale rentekostnader, men er tyngst i starten. **Annuitetslån** gir lik månedlig betaling, noe som gjør det lettere å planlegge.

Husk å sammenligne **effektiv rente** (ikke bare nominell rente) når du velger lån, og vær oppmerksom på gebyrer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3 NARRATIV: Budsjett
// ============================================================================

export const CHAPTER_9_5_3_NARRATIV: TextbookChapter = {
  id: '9-5-3-narrativ',
  courseId: '9',
  chapterNumber: '5.3',
  title: 'Budsjett',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av budsjett -- hvordan du planlegger økonomien din, hva inntekter og utgifter er, og hvordan du lager et realistisk budsjett som hjelper deg å ta kontroll over pengene.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og argumentere for korleis rekne med forhold, prosent og vekstfaktor',
  ],
  linkedChapterId: '9-5-3',
  content: [
    {
      id: '9-5-3-n-intro',
      type: 'text',
      content: `## Kartet over pengene dine

Tenk deg at du skal på en lang biltur uten kart eller GPS. Du vet omtrent hvor du skal, men du aner ikke om du har nok bensin, eller om du tar en omvei som koster deg timer. Ganske stressende, ikke sant?

Å leve uten budsjett er litt det samme. Du tjener penger, du bruker penger, men du har ingen plan. Et **budsjett** er kartet over økonomien din -- det viser deg hvor pengene kommer fra, hvor de går, og om du har nok til å nå målene dine.`,
    },

    {
      id: '9-5-3-n-section1',
      type: 'text',
      content: `## Inntekter og utgifter

Et budsjett har to hoveddeler: **inntekter** og **utgifter**.

**Inntekter** er alle pengene som kommer inn:
- Lønn (fra jobb)
- Lommepenger eller bidrag fra foreldre
- Stipend
- Renteinntekter fra sparing

**Utgifter** er alle pengene som går ut:
- **Faste utgifter**: husleie, forsikring, strømregning, abonnementer -- beløp som er omtrent like hver måned
- **Variable utgifter**: mat, klær, transport, underholdning -- beløp som varierer

Forskjellen mellom inntekter og utgifter er **overskuddet** (eller **underskuddet** hvis utgiftene er størst):

$$\\text{Overskudd} = \\text{Inntekter} - \\text{Utgifter}$$

Hvis overskuddet er positivt, har du penger til overs som du kan spare. Hvis det er negativt, bruker du mer enn du tjener -- og det er en oppskrift på økonomisk trøbbel.`,
    },

    {
      id: '9-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på inntekter og utgifter:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-5-3-n-quiz1-q0',
            task: 'Emilie har $8500$ kr i inntekt og $7200$ kr i utgifter per måned. Hva er overskuddet?',
            options: [
              { id: 'a', text: '$15\\,700$ kr', isCorrect: false },
              { id: 'b', text: '$1300$ kr', isCorrect: true },
              { id: 'c', text: '$-1300$ kr', isCorrect: false },
              { id: 'd', text: '$7200$ kr', isCorrect: false },
            ],
            solution: 'Overskudd $= 8500 - 7200 = 1300$ kr. Emilie har $1300$ kr til overs som hun kan spare.',
          },
          {
            id: '9-5-3-n-quiz1-q1',
            task: 'Hvilken av disse er en fast utgift?',
            options: [
              { id: 'a', text: 'Kinobillett', isCorrect: false },
              { id: 'b', text: 'Matinnkjøp', isCorrect: false },
              { id: 'c', text: 'Mobilabonnement', isCorrect: true },
              { id: 'd', text: 'Kleskjøp', isCorrect: false },
            ],
            solution: 'Et mobilabonnement har en fast månedlig pris. Mat, kino og klær varierer fra måned til måned.',
          },
          {
            id: '9-5-3-n-quiz1-q2',
            task: 'Jonas har $12\\,000$ kr i inntekter og $13\\,500$ kr i utgifter. Hva betyr dette?',
            options: [
              { id: 'a', text: 'Han sparer $1500$ kr', isCorrect: false },
              { id: 'b', text: 'Han har et overskudd på $1500$ kr', isCorrect: false },
              { id: 'c', text: 'Han har et underskudd på $1500$ kr', isCorrect: true },
              { id: 'd', text: 'Budsjettet er i balanse', isCorrect: false },
            ],
            solution: '$12\\,000 - 13\\,500 = -1500$ kr. Jonas bruker $1500$ kr mer enn han tjener -- han har et underskudd og må enten kutte utgifter eller øke inntektene.',
          },
        ],
      },
    },

    {
      id: '9-5-3-n-section2',
      type: 'text',
      content: `## Slik lager du et budsjett

Å lage et budsjett er enklere enn du kanskje tror. Her er en steg-for-steg-metode:

**Steg 1: List opp inntektene.** Skriv ned alt du forventer å tjene i løpet av en måned.

**Steg 2: List opp faste utgifter.** Husleie, forsikring, abonnementer, transport -- alt som er likt hver måned.

**Steg 3: Estimer variable utgifter.** Mat, klær, underholdning, uforutsette ting. Bruk gjerne et gjennomsnitt basert på tidligere måneder.

**Steg 4: Regn ut overskudd/underskudd.** Trekk totale utgifter fra totale inntekter.

**Steg 5: Juster.** Hvis du har underskudd, se etter utgifter du kan kutte. Hvis du har overskudd, bestem hvor mye du vil spare.

La oss se på et eksempel. Kristian er $16$ år og har deltidsjobb:

| Post | Beløp (kr/mnd) |
|------|---------|
| **Inntekter** | |
| Deltidsjobb | $4500$ |
| Lommepenger | $500$ |
| **Sum inntekter** | **$5000$** |
| **Utgifter** | |
| Mobilabonnement | $299$ |
| Spotify | $119$ |
| Busskort | $450$ |
| Mat/snacks | $800$ |
| Klær | $500$ |
| Fritidsaktiviteter | $600$ |
| **Sum utgifter** | **$2768$** |
| **Overskudd** | **$2232$** |

Kristian kan spare $2232$ kr hver måned. Hvis han setter dette i banken med $3\\,\\%$ rente, har han etter ett år omtrent $2232 \\cdot 12 = 26\\,784$ kr -- pluss litt renter.`,
    },

    {
      id: '9-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på budsjettering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-5-3-n-quiz2-q0',
            task: 'Sara har $6000$ kr i inntekt. Faste utgifter er $2500$ kr og variable utgifter er $2800$ kr. Hvor mye kan hun spare?',
            options: [
              { id: 'a', text: '$2800$ kr', isCorrect: false },
              { id: 'b', text: '$700$ kr', isCorrect: true },
              { id: 'c', text: '$3200$ kr', isCorrect: false },
              { id: 'd', text: '$300$ kr', isCorrect: false },
            ],
            solution: 'Overskudd $= 6000 - 2500 - 2800 = 700$ kr. Sara kan spare inntil $700$ kr per måned.',
          },
          {
            id: '9-5-3-n-quiz2-q1',
            task: 'Hvorfor er det lurt å sette av penger til uforutsette utgifter i budsjettet?',
            options: [
              { id: 'a', text: 'Fordi banken krever det', isCorrect: false },
              { id: 'b', text: 'Fordi uventede utgifter alltid dukker opp, som reparasjoner eller legebesøk', isCorrect: true },
              { id: 'c', text: 'Fordi det gir høyere rente', isCorrect: false },
              { id: 'd', text: 'Fordi det ser pent ut i budsjettet', isCorrect: false },
            ],
            solution: 'I virkeligheten vil det alltid komme uventede utgifter. Å ha en buffer gjør at du slipper å ta opp lån eller bruke sparepengene dine.',
          },
        ],
      },
    },

    {
      id: '9-5-3-n-section3',
      type: 'text',
      content: `## Årsbudsjett og månedsbudsjett

Noen utgifter kommer ikke hver måned. Ferie, julehandel, forsikring som betales årlig, og bursdagsgaver er eksempler. Derfor er det lurt å lage et **årsbudsjett** i tillegg til månedsbudsjettet.

I et årsbudsjett legger du sammen alle inntekter og utgifter for hele året. Noen poster multipliseres med $12$ (for månedlige beløp), mens andre legges inn som engangsbeløp.

For å finne ut hvor mye du trenger å sette av per måned til en årlig utgift, deler du beløpet på $12$. Hvis du for eksempel bruker $6000$ kr på julehandel, bør du spare $\\frac{6000}{12} = 500$ kr per måned gjennom hele året.

$$\\text{Månedlig avsetning} = \\frac{\\text{Årlig utgift}}{12}$$

Et godt budsjett er realistisk -- ikke for stramt, men heller ikke for slakt. Det er et verktøy for å ta bevisste valg med pengene dine, ikke en tvangstrøye.`,
    },

    {
      id: '9-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på årsbudsjett:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-5-3-n-quiz3-q0',
            task: 'Martin bruker $3600$ kr på feriereise per år. Hvor mye bør han sette av per måned?',
            options: [
              { id: 'a', text: '$360$ kr', isCorrect: false },
              { id: 'b', text: '$300$ kr', isCorrect: true },
              { id: 'c', text: '$3600$ kr', isCorrect: false },
              { id: 'd', text: '$600$ kr', isCorrect: false },
            ],
            solution: 'Månedlig avsetning $= \\frac{3600}{12} = 300$ kr. Ved å spare litt hver måned slipper han å ta alt på en gang.',
          },
          {
            id: '9-5-3-n-quiz3-q1',
            task: 'Lise tjener $7000$ kr/mnd. Faste utgifter er $3000$ kr/mnd. Variable utgifter er $2000$ kr/mnd. I tillegg bruker hun $12\\,000$ kr på årlige utgifter (forsikring, ferie osv.). Hva er det månedlige overskuddet?',
            options: [
              { id: 'a', text: '$2000$ kr', isCorrect: false },
              { id: 'b', text: '$0$ kr', isCorrect: false },
              { id: 'c', text: '$1000$ kr', isCorrect: true },
              { id: 'd', text: '$-1000$ kr', isCorrect: false },
            ],
            solution: 'Månedlig avsetning for årlige utgifter: $\\frac{12\\,000}{12} = 1000$ kr. Totale månedlige utgifter: $3000 + 2000 + 1000 = 6000$ kr. Overskudd: $7000 - 6000 = 1000$ kr.',
          },
        ],
      },
    },

    {
      id: '9-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Et **budsjett** er en plan for inntektene og utgiftene dine. Overskudd betyr at du har penger til overs for sparing; underskudd betyr at du bruker mer enn du tjener.

Slik lager du et budsjett:
1. List opp alle inntekter
2. List opp faste og variable utgifter
3. Regn ut overskudd eller underskudd
4. Juster etter behov

For utgifter som kommer sjeldnere enn hver måned, deler du årsbeløpet på $12$ for å finne månedlig avsetning:

$$\\text{Månedlig avsetning} = \\frac{\\text{Årlig utgift}}{12}$$

Et godt budsjett gir deg oversikt og kontroll over økonomien din -- det er det første steget mot å nå de økonomiske målene dine.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_5_1_NARRATIV,
  CHAPTER_9_5_2_NARRATIV,
  CHAPTER_9_5_3_NARRATIV,
];
