/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 4
 *
 * Kapittel 4.1: Pytagoras' setning
 * Kapittel 4.2: Formlikhet
 * Kapittel 4.3: Areal og volum
 * Kapittel 4.4: Konstruksjoner
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1 NARRATIV: Pytagoras' setning
// ============================================================================

export const CHAPTER_9_4_1_NARRATIV: TextbookChapter = {
  id: '9-4-1-narrativ',
  courseId: '9',
  chapterNumber: '4.1',
  title: "Pytagoras' setning",
  subtitle: 'Narrativ versjon',
  description: 'En fortellende reise gjennom en av matematikkens mest berømte sammenhenger -- Pytagoras\' setning -- der vi oppdager hvorfor den virker, hvordan vi bruker den, og hva den betyr i praksis.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for samanhengar mellom sidelengder i trekantar med Pytagoras\' setning',
  ],
  linkedChapterId: '9-4-1',
  content: [
    {
      id: '9-4-1-n-intro',
      type: 'text',
      content: `## En 2500 år gammel oppdagelse

For over 2500 år siden, på den greske øya Samos, levde matematikeren Pytagoras. Han og elevene hans oppdaget noe forbløffende: i enhver rettvinklet trekant er det en fast sammenheng mellom sidelengdene. Kvadratet på den lengste siden er alltid lik summen av kvadratene på de to korteste sidene.

Denne sammenhengen -- Pytagoras' setning -- er kanskje det mest kjente resultatet i hele matematikken. Den brukes av arkitekter, ingeniører, navigatører, spillutviklere og alle som trenger å beregne avstander. Og det fine er at den er overraskende enkel å forstå og bruke.`,
    },

    {
      id: '9-4-1-n-section1',
      type: 'text',
      content: `## Rettvinklede trekanter

Før vi dykker inn i setningen, la oss repetere hva en **rettvinklet trekant** er. Det er en trekant der én av vinklene er nøyaktig $90°$ -- en rett vinkel. Du kjenner igjen en rett vinkel på det lille kvadratsymbolet i hjørnet.

De to sidene som danner den rette vinkelen kalles **kateter** (flertall av katet). Den lengste siden -- den som ligger overfor den rette vinkelen -- kalles **hypotenusen**. Hypotenusen er alltid den lengste siden i en rettvinklet trekant.

Her er et bilde du kan ha i hodet: tenk på en rett vinkel som et hjørne i et rom. De to veggene er katetene, og en linje tvers over rommet fra det ene hjørnet til det andre er hypotenusen.

Vi bruker ofte bokstavene $a$ og $b$ for katetene og $c$ for hypotenusen:

- $a$ = den ene kateten (den ene «veggen»)
- $b$ = den andre kateten (den andre «veggen»)
- $c$ = hypotenusen (den lengste siden, overfor den rette vinkelen)`,
    },

    {
      id: '9-4-1-n-section2',
      type: 'text',
      content: `## Pytagoras' setning

Nå kommer selve setningen. I en rettvinklet trekant med kateter $a$ og $b$ og hypotenus $c$ gjelder:

$$a^2 + b^2 = c^2$$

I ord: **summen av katetenes kvadrater er lik hypotenusens kvadrat**.

Hvorfor heter det «kvadrater»? Tenk deg at du tegner et kvadrat på hver side av trekanten. Kvadratet på kateten $a$ har areal $a^2$, kvadratet på kateten $b$ har areal $b^2$, og kvadratet på hypotenusen $c$ har areal $c^2$. Pytagoras' setning sier at arealet av de to små kvadratene til sammen er lik arealet av det store kvadratet.

La oss teste med et kjent eksempel -- den berømte **3-4-5-trekanten**:

$$3^2 + 4^2 = 9 + 16 = 25 = 5^2 \\quad \\checkmark$$

Det stemmer! Andre pytagoreiske tripler (heltallige sidelengder som oppfyller setningen) er:
- $5, 12, 13$ fordi $25 + 144 = 169$
- $8, 15, 17$ fordi $64 + 225 = 289$
- $7, 24, 25$ fordi $49 + 576 = 625$`,
    },

    {
      id: '9-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-1-n-quiz1-q0',
            task: 'I en rettvinklet trekant er katetene $6$ cm og $8$ cm. Hva er hypotenusen?',
            options: [
              { id: 'a', text: '$14$ cm', isCorrect: false },
              { id: 'b', text: '$10$ cm', isCorrect: true },
              { id: 'c', text: '$\\sqrt{48}$ cm', isCorrect: false },
              { id: 'd', text: '$100$ cm', isCorrect: false },
            ],
            solution: '$c^2 = 6^2 + 8^2 = 36 + 64 = 100$, så $c = \\sqrt{100} = 10$ cm.',
          },
          {
            id: '9-4-1-n-quiz1-q1',
            task: 'Hva er hypotenusen i Pytagoras\' setning?',
            options: [
              { id: 'a', text: 'Den korteste siden i en trekant', isCorrect: false },
              { id: 'b', text: 'Siden overfor den rette vinkelen', isCorrect: true },
              { id: 'c', text: 'En av de to sidene som danner den rette vinkelen', isCorrect: false },
              { id: 'd', text: 'Diagonalen i et kvadrat', isCorrect: false },
            ],
            solution: 'Hypotenusen er den lengste siden i en rettvinklet trekant, og den ligger alltid overfor den rette vinkelen ($90°$).',
          },
          {
            id: '9-4-1-n-quiz1-q2',
            task: 'Er $5, 12, 13$ en pytagoreisk trippel?',
            options: [
              { id: 'a', text: 'Nei, fordi $5 + 12 \\neq 13$', isCorrect: false },
              { id: 'b', text: 'Ja, fordi $5^2 + 12^2 = 13^2$', isCorrect: true },
              { id: 'c', text: 'Nei, fordi tallene er oddetall', isCorrect: false },
              { id: 'd', text: 'Ja, fordi $5 \\times 12 = 60$', isCorrect: false },
            ],
            solution: '$5^2 + 12^2 = 25 + 144 = 169 = 13^2$. Setningen stemmer, så $5, 12, 13$ er en pytagoreisk trippel.',
          },
        ],
      },
    },

    {
      id: '9-4-1-n-section3',
      type: 'text',
      content: `## Bruke setningen til å finne sider

Pytagoras' setning lar oss finne hvilken som helst side i en rettvinklet trekant når vi kjenner de to andre.

**Finne hypotenusen $c$:**

$$c = \\sqrt{a^2 + b^2}$$

**Eksempel:** Katetene er $5$ og $12$. Da er $c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.

**Finne en katet $a$:**

$$a = \\sqrt{c^2 - b^2}$$

**Eksempel:** Hypotenusen er $15$ og en katet er $9$. Da er den andre kateten $a = \\sqrt{15^2 - 9^2} = \\sqrt{225 - 81} = \\sqrt{144} = 12$.

Pass på: når du finner en katet, **trekker du fra** ($c^2 - b^2$). Når du finner hypotenusen, **legger du sammen** ($a^2 + b^2$). Mange elever blander dette -- men husk at hypotenusen alltid er den lengste siden, så du kan ikke trekke fra og få noe større!

Ikke alle svar blir pene hele tall. $a = 3$, $b = 5$ gir $c = \\sqrt{9 + 25} = \\sqrt{34} \\approx 5{,}83$. Det er helt greit -- vi lar svaret stå som $\\sqrt{34}$ (eksakt) eller runder av til én desimal.`,
    },

    {
      id: '9-4-1-n-section4',
      type: 'text',
      content: `## Pytagoras i praksis

Pytagoras' setning er overraskende nyttig i hverdagen. Her er noen typiske bruksområder:

**Stiger mot veggen:** En stige på $5$ m lenes mot en vegg. Foten av stigen står $3$ m fra veggen. Hvor høyt når stigen? Her er stigen hypotenusen ($c = 5$) og avstanden til veggen er en katet ($b = 3$). Høyden er:

$$a = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4 \\text{ m}$$

**Diagonalen i et rektangel:** Et fotballbane er $100$ m lang og $70$ m bred. Hva er diagonalen? Diagonalen deler rektangelet i to rettvinklede trekanter der sidene er katetene:

$$d = \\sqrt{100^2 + 70^2} = \\sqrt{10000 + 4900} = \\sqrt{14900} \\approx 122{,}1 \\text{ m}$$

**Avstand mellom to punkter:** Punktene $(1, 2)$ og $(4, 6)$ i et koordinatsystem. Avstanden bortover er $4 - 1 = 3$ og avstanden oppover er $6 - 2 = 4$. Disse danner katetene i en rettvinklet trekant, og den rette avstanden er:

$$d = \\sqrt{3^2 + 4^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

Denne avstandsformelen bygger direkte på Pytagoras' setning og er en av de mest brukte formlene i all matematikk.`,
    },

    {
      id: '9-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-1-n-quiz2-q0',
            task: 'En stige er $13$ m lang og strekker seg $12$ m opp langs en vegg. Hvor langt fra veggen står foten av stigen?',
            options: [
              { id: 'a', text: '$1$ m', isCorrect: false },
              { id: 'b', text: '$\\sqrt{313}$ m', isCorrect: false },
              { id: 'c', text: '$5$ m', isCorrect: true },
              { id: 'd', text: '$25$ m', isCorrect: false },
            ],
            solution: '$b = \\sqrt{13^2 - 12^2} = \\sqrt{169 - 144} = \\sqrt{25} = 5$ m.',
          },
          {
            id: '9-4-1-n-quiz2-q1',
            task: 'Hva er diagonalen i et rektangel med sider $9$ cm og $12$ cm?',
            options: [
              { id: 'a', text: '$21$ cm', isCorrect: false },
              { id: 'b', text: '$15$ cm', isCorrect: true },
              { id: 'c', text: '$\\sqrt{63}$ cm', isCorrect: false },
              { id: 'd', text: '$108$ cm', isCorrect: false },
            ],
            solution: '$d = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ cm.',
          },
          {
            id: '9-4-1-n-quiz2-q2',
            task: 'Hva er avstanden mellom punktene $(2, 1)$ og $(5, 5)$?',
            options: [
              { id: 'a', text: '$7$', isCorrect: false },
              { id: 'b', text: '$5$', isCorrect: true },
              { id: 'c', text: '$\\sqrt{7}$', isCorrect: false },
              { id: 'd', text: '$25$', isCorrect: false },
            ],
            solution: '$d = \\sqrt{(5-2)^2 + (5-1)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$.',
          },
        ],
      },
    },

    {
      id: '9-4-1-n-section5',
      type: 'text',
      content: `## Den omvendte setningen

Pytagoras' setning har en nyttig **omvendt versjon**: Hvis $a^2 + b^2 = c^2$ for sidelengdene i en trekant, da ER trekanten rettvinklet, med den rette vinkelen overfor den lengste siden $c$.

Dette er nyttig for å **sjekke** om en trekant er rettvinklet. En trekant har sider $7$, $24$ og $25$. Er den rettvinklet?

$$7^2 + 24^2 = 49 + 576 = 625 = 25^2 \\quad \\checkmark$$

Ja! Trekanten er rettvinklet.

Hva med en trekant med sider $4$, $5$ og $7$?

$$4^2 + 5^2 = 16 + 25 = 41 \\neq 49 = 7^2$$

Nei, den er ikke rettvinklet.

Vi kan også avgjøre om trekanten er **spiss** eller **stump**:
- Hvis $a^2 + b^2 > c^2$: trekanten er **spissinklet** (alle vinkler under $90°$)
- Hvis $a^2 + b^2 < c^2$: trekanten er **stumpinklet** (én vinkel over $90°$)
- Hvis $a^2 + b^2 = c^2$: trekanten er **rettvinklet** (én vinkel er nøyaktig $90°$)

For trekanten $4, 5, 7$: $41 < 49$, så den er stumpinklet.`,
    },

    {
      id: '9-4-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-4-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-1-n-quiz3-q0',
            task: 'Er en trekant med sider $9$, $40$ og $41$ rettvinklet?',
            options: [
              { id: 'a', text: 'Nei', isCorrect: false },
              { id: 'b', text: 'Ja, fordi $9^2 + 40^2 = 41^2$', isCorrect: true },
              { id: 'c', text: 'Ja, fordi $9 + 40 = 49$', isCorrect: false },
              { id: 'd', text: 'Vi kan ikke avgjøre det', isCorrect: false },
            ],
            solution: '$9^2 + 40^2 = 81 + 1600 = 1681 = 41^2$. Pytagoras\' setning er oppfylt, så trekanten er rettvinklet.',
          },
          {
            id: '9-4-1-n-quiz3-q1',
            task: 'En trekant har sider $6$, $7$ og $10$. Hva slags trekant er det?',
            options: [
              { id: 'a', text: 'Rettvinklet', isCorrect: false },
              { id: 'b', text: 'Spissinklet', isCorrect: false },
              { id: 'c', text: 'Stumpinklet', isCorrect: true },
              { id: 'd', text: 'Likebeint', isCorrect: false },
            ],
            solution: '$6^2 + 7^2 = 36 + 49 = 85$. Men $10^2 = 100$. Siden $85 < 100$ ($a^2 + b^2 < c^2$), er trekanten stumpinklet.',
          },
        ],
      },
    },

    {
      id: '9-4-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Pytagoras' setning:** I en rettvinklet trekant med kateter $a$ og $b$ og hypotenus $c$ gjelder:

$$a^2 + b^2 = c^2$$

- Finne hypotenusen: $c = \\sqrt{a^2 + b^2}$
- Finne en katet: $a = \\sqrt{c^2 - b^2}$
- Avstand mellom punkter: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$

**Omvendt setning:** Hvis $a^2 + b^2 = c^2$, er trekanten rettvinklet. Hvis $a^2 + b^2 > c^2$, er den spissinklet. Hvis $a^2 + b^2 < c^2$, er den stumpinklet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2 NARRATIV: Formlikhet
// ============================================================================

export const CHAPTER_9_4_2_NARRATIV: TextbookChapter = {
  id: '9-4-2-narrativ',
  courseId: '9',
  chapterNumber: '4.2',
  title: 'Formlikhet',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende utforskning av formlike figurer -- der vi lærer at figurer kan ha helt lik form selv om de er ulike i størrelse, og oppdager hvordan forstørring og forminsking fungerer matematisk.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke formlikskap og målestokk til å berekne ukjende storleikar',
  ],
  linkedChapterId: '9-4-2',
  content: [
    {
      id: '9-4-2-n-intro',
      type: 'text',
      content: `## Samme form, ulik størrelse

Ta en liten lekebil og en ekte bil. De ser like ut -- samme form, samme proporsjoner -- men den ene er mye større enn den andre. I matematikken sier vi at de er **formlike** (eller lignende). Alle lengdemål er ganget med det samme tallet, kalt **forstørrelsesfaktoren** eller **skaleringsfaktoren**.

Formlikhet finnes overalt: kart er formlike miniatyrer av landskapet, passfoto er formlike utgaver av ansiktet ditt, og arkitekttegninger er formlike versjoner av bygninger. Å forstå formlikhet gir oss et kraftig verktøy for å beregne størrelser vi ikke kan måle direkte.`,
    },

    {
      id: '9-4-2-n-section1',
      type: 'text',
      content: `## Hva betyr formlikhet?

To figurer er **formlike** hvis:
1. Alle tilsvarende vinkler er like store
2. Alle tilsvarende sider har **samme forhold** (er proporsjonale)

Vi sier at den ene figuren er en **forstørring** eller **forminsking** av den andre. Forstørrelsesfaktoren $k$ er forholdet mellom tilsvarende sider:

$$k = \\frac{\\text{ny lengde}}{\\text{opprinnelig lengde}}$$

Hvis $k > 1$, er figuren forstørret. Hvis $0 < k < 1$, er figuren forminsket. Og $k = 1$ betyr at figurene er like store (kongruente).

**Eksempel:** En trekant har sider $3$, $4$ og $5$ cm. En formlik trekant har lengste side $15$ cm. Da er forstørrelsesfaktoren $k = \\frac{15}{5} = 3$, og de to andre sidene er $3 \\times 3 = 9$ cm og $4 \\times 3 = 12$ cm.

Det viktige poenget er at **alle** sider ganges med **samme** faktor $k$. Hvis den ene siden dobles og en annen tredobles, er figurene IKKE formlike.`,
    },

    {
      id: '9-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-2-n-quiz1-q0',
            task: 'En trekant har sider $4$, $6$ og $8$ cm. En formlik trekant har korteste side $10$ cm. Hva er forstørrelsesfaktoren?',
            options: [
              { id: 'a', text: '$k = 2$', isCorrect: false },
              { id: 'b', text: '$k = 2{,}5$', isCorrect: true },
              { id: 'c', text: '$k = 4$', isCorrect: false },
              { id: 'd', text: '$k = 1{,}5$', isCorrect: false },
            ],
            solution: 'Korteste side i originalen er $4$ cm, og tilsvarende i den formlike er $10$ cm. $k = \\frac{10}{4} = 2{,}5$.',
          },
          {
            id: '9-4-2-n-quiz1-q1',
            task: 'Hva er et krav for at to figurer skal være formlike?',
            options: [
              { id: 'a', text: 'De må ha samme areal', isCorrect: false },
              { id: 'b', text: 'De må ha like store vinkler og proporsjonale sider', isCorrect: true },
              { id: 'c', text: 'De må være like store', isCorrect: false },
              { id: 'd', text: 'De må begge være trekanter', isCorrect: false },
            ],
            solution: 'Formlike figurer har (1) like store tilsvarende vinkler og (2) proporsjonale tilsvarende sider. De trenger ikke være like store eller samme type figur.',
          },
        ],
      },
    },

    {
      id: '9-4-2-n-section2',
      type: 'text',
      content: `## Formlike trekanter

Trekanter har en spesiell egenskap: det er nok at **to vinkler** er like for at trekantene skal være formlike. (Fordi vinkelsummen i en trekant alltid er $180°$, følger den tredje vinkelen automatisk.)

Dette gjør det enkelt å gjenkjenne formlike trekanter i praksis. Noen vanlige situasjoner:

**Parallelle linjer:** Når en linje er parallell med en side i en trekant og skjærer de to andre sidene, dannes en mindre trekant som er formlik med den opprinnelige. Alle vinklene er de samme -- de to linjene «klipper» bare av en miniatyrversjon av trekanten.

**Høyden i en rettvinklet trekant:** Tegner du høyden fra den rette vinkelen ned til hypotenusen, deles den rettvinklede trekanten i to mindre trekanter som begge er formlike med den opprinnelige. Dette er et klassisk resultat som har mange nyttige konsekvenser.

For å finne ukjente sider i formlike trekanter bruker vi **forholdsligning**. Hvis trekant $ABC$ er formlik med trekant $DEF$ med forstørrelsesfaktor $k$, gjelder:

$$\\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC} = k$$

Vi kan sette opp kryssprodukter for å finne ukjente sider.`,
    },

    {
      id: '9-4-2-n-section3',
      type: 'text',
      content: `## Formlikhet i praksis

**Eksempel 1 -- Høyden til et tre:** Du vil finne høyden til et tre, men kan ikke klatre opp. I stedet stikker du en pinne ($1{,}5$ m lang) loddrett ned i bakken. Pinnen kaster en skygge på $2$ m. Treets skygge er $12$ m. Fordi solstrålene er parallelle, er trekantene formlike:

$$\\frac{\\text{treets høyde}}{1{,}5} = \\frac{12}{2}$$

$$\\text{treets høyde} = 1{,}5 \\times \\frac{12}{2} = 1{,}5 \\times 6 = 9 \\text{ m}$$

**Eksempel 2 -- Kart og målestokk:** En tegning av et hus har målestokk $1 : 50$. På tegningen er en vegg $8$ cm. Den virkelige veggen er $8 \\times 50 = 400$ cm $= 4$ m. Målestokk er egentlig bare et annet ord for forstørrelsesfaktoren ved formlikhet.

**Eksempel 3 -- Ukjent side:** To formlike trekanter har sider som vist nedenfor. Finn $x$.

Trekant 1: $6$, $9$, $12$
Trekant 2: $4$, $x$, $8$

Forstørrelsesfaktoren fra trekant 1 til trekant 2: $k = \\frac{8}{12} = \\frac{2}{3}$ (eller sjekk: $\\frac{4}{6} = \\frac{2}{3}$).

$$x = 9 \\times \\frac{2}{3} = 6$$`,
    },

    {
      id: '9-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-2-n-quiz2-q0',
            task: 'En pinne på $2$ m kaster en skygge på $3$ m. Et hus kaster en skygge på $18$ m. Hvor høyt er huset?',
            options: [
              { id: 'a', text: '$6$ m', isCorrect: false },
              { id: 'b', text: '$9$ m', isCorrect: false },
              { id: 'c', text: '$12$ m', isCorrect: true },
              { id: 'd', text: '$27$ m', isCorrect: false },
            ],
            solution: '$\\frac{h}{2} = \\frac{18}{3} = 6$, så $h = 2 \\times 6 = 12$ m.',
          },
          {
            id: '9-4-2-n-quiz2-q1',
            task: 'To formlike trekanter har sideforhold $3 : 5 : 7$ og den mellomste siden i den store trekanten er $20$ cm. Hva er den lengste siden?',
            options: [
              { id: 'a', text: '$35$ cm', isCorrect: false },
              { id: 'b', text: '$28$ cm', isCorrect: true },
              { id: 'c', text: '$12$ cm', isCorrect: false },
              { id: 'd', text: '$32$ cm', isCorrect: false },
            ],
            solution: 'Den mellomste siden svarer til $5$ i forholdet. $k = \\frac{20}{5} = 4$. Den lengste siden svarer til $7$: $7 \\times 4 = 28$ cm.',
          },
          {
            id: '9-4-2-n-quiz2-q2',
            task: 'Hva trengs for å vise at to trekanter er formlike?',
            options: [
              { id: 'a', text: 'Alle tre sider må måles', isCorrect: false },
              { id: 'b', text: 'To par tilsvarende vinkler er like', isCorrect: true },
              { id: 'c', text: 'Én vinkel og én side er like', isCorrect: false },
              { id: 'd', text: 'Arealet er likt', isCorrect: false },
            ],
            solution: 'For trekanter er det nok at to par tilsvarende vinkler er like (den tredje følger automatisk fra vinkelsummen $180°$).',
          },
        ],
      },
    },

    {
      id: '9-4-2-n-section4',
      type: 'text',
      content: `## Areal og volum ved formlikhet

Når vi skalerer en figur med faktor $k$, endres ikke bare lengdene -- arealet og volumet endres også, men på en annen måte:

- **Lengder** ganges med $k$
- **Arealer** ganges med $k^2$
- **Volumer** ganges med $k^3$

Hvis du dobler alle lengdene ($k = 2$):
- Arealene firedobles ($2^2 = 4$)
- Volumene åttedobles ($2^3 = 8$)

**Eksempel:** Et bilde er $10 \\times 15$ cm (areal $= 150$ cm$^2$). Du forstørrer det med faktor $k = 3$ til $30 \\times 45$ cm. Det nye arealet er $150 \\times 3^2 = 150 \\times 9 = 1350$ cm$^2$. Sjekk: $30 \\times 45 = 1350$ cm$^2$. Stemmer!

Dette er viktig i praktiske situasjoner. Hvis du lager en modellflyver i målestokk $1 : 20$, bruker du $20^3 = 8000$ ganger mindre materiale (volum) enn det virkelige flyet.`,
    },

    {
      id: '9-4-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-4-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-2-n-quiz3-q0',
            task: 'En figur forstørres med faktor $k = 3$. Hva skjer med arealet?',
            options: [
              { id: 'a', text: 'Det tredobles', isCorrect: false },
              { id: 'b', text: 'Det nidobles ($\\times 9$)', isCorrect: true },
              { id: 'c', text: 'Det forblir likt', isCorrect: false },
              { id: 'd', text: 'Det 27-dobles', isCorrect: false },
            ],
            solution: 'Areal ganges med $k^2 = 3^2 = 9$. Lengder tredobles, men arealet nidobles.',
          },
          {
            id: '9-4-2-n-quiz3-q1',
            task: 'En terning med side $2$ cm er formlik med en terning med side $6$ cm. Hvor mange ganger større er volumet til den store terningen?',
            options: [
              { id: 'a', text: '$3$ ganger', isCorrect: false },
              { id: 'b', text: '$9$ ganger', isCorrect: false },
              { id: 'c', text: '$27$ ganger', isCorrect: true },
              { id: 'd', text: '$18$ ganger', isCorrect: false },
            ],
            solution: '$k = \\frac{6}{2} = 3$. Volumet ganges med $k^3 = 3^3 = 27$. Sjekk: $V_1 = 8$ cm$^3$, $V_2 = 216$ cm$^3$, og $\\frac{216}{8} = 27$.',
          },
        ],
      },
    },

    {
      id: '9-4-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Formlike figurer** har lik form men ulik størrelse. Alle tilsvarende vinkler er like, og alle tilsvarende sider har samme forhold (forstørrelsesfaktor $k$).

For **trekanter** er det nok at to par tilsvarende vinkler er like.

Ved forstørrelsesfaktor $k$:
- Lengder ganges med $k$
- Arealer ganges med $k^2$
- Volumer ganges med $k^3$

Formlikhet brukes til å beregne ukjente størrelser via forholdsligning, for eksempel høyden til et tre ved hjelp av skygger.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3 NARRATIV: Areal og volum
// ============================================================================

export const CHAPTER_9_4_3_NARRATIV: TextbookChapter = {
  id: '9-4-3-narrativ',
  courseId: '9',
  chapterNumber: '4.3',
  title: 'Areal og volum',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av areal- og volumformler for de viktigste geometriske figurene -- fra trekanter og sirkler til sylindere, kjegler og kuler -- med praktiske eksempler fra hverdagen.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum av ulike figurar',
  ],
  linkedChapterId: '9-4-3',
  content: [
    {
      id: '9-4-3-n-intro',
      type: 'text',
      content: `## Å måle verden rundt oss

Hvor mye maling trenger du for å male et rom? Hvor mange liter vann rommer et svømmebasseng? Hvor stort er arealet av en fotballbane? Alle disse spørsmålene handler om **areal** og **volum** -- to grunnleggende begreper i geometri.

Areal måler størrelsen på en flate (i kvadratmeter, kvadratcentimeter osv.). Volum måler størrelsen på et rom eller en gjenstand (i kubikkmeter, liter osv.). I dette kapittelet skal vi bygge opp en verktøykasse av formler som lar oss beregne areal og volum for de viktigste figurene.`,
    },

    {
      id: '9-4-3-n-section1',
      type: 'text',
      content: `## Areal av flate figurer

La oss starte med flatefigurene. De viktigste formlene for areal er:

**Rektangel:**

$$A = l \\cdot b$$

der $l$ er lengden og $b$ er bredden. Et rektangel på $5 \\times 3$ cm har areal $15$ cm$^2$.

**Parallellogram:**

$$A = g \\cdot h$$

der $g$ er grunnlinjen og $h$ er høyden (den vinkelrette avstanden mellom grunnlinjene). Ikke bruk den «skrå» siden -- det er høyden som gjelder!

**Trekant:**

$$A = \\frac{g \\cdot h}{2}$$

En trekant er «halvparten» av et parallellogram. En trekant med grunnlinje $8$ cm og høyde $5$ cm har areal $\\frac{8 \\times 5}{2} = 20$ cm$^2$.

**Trapes:**

$$A = \\frac{(a + b) \\cdot h}{2}$$

der $a$ og $b$ er de to parallelle sidene og $h$ er høyden mellom dem. Tenk på det som gjennomsnittet av de to parallelle sidene, ganget med høyden.

**Sirkel:**

$$A = \\pi r^2$$

der $r$ er radius (avstanden fra sentrum til kanten). En sirkel med radius $7$ cm har areal $\\pi \\cdot 7^2 = 49\\pi \\approx 153{,}9$ cm$^2$.

Husk at $\\pi \\approx 3{,}14$, men du bør la kalkulatoren gi deg en mer nøyaktig verdi.`,
    },

    {
      id: '9-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-3-n-quiz1-q0',
            task: 'Hva er arealet av en trekant med grunnlinje $12$ cm og høyde $9$ cm?',
            options: [
              { id: 'a', text: '$108$ cm$^2$', isCorrect: false },
              { id: 'b', text: '$54$ cm$^2$', isCorrect: true },
              { id: 'c', text: '$21$ cm$^2$', isCorrect: false },
              { id: 'd', text: '$36$ cm$^2$', isCorrect: false },
            ],
            solution: '$A = \\frac{g \\cdot h}{2} = \\frac{12 \\times 9}{2} = \\frac{108}{2} = 54$ cm$^2$.',
          },
          {
            id: '9-4-3-n-quiz1-q1',
            task: 'Et trapes har parallelle sider $5$ cm og $9$ cm, og høyde $4$ cm. Hva er arealet?',
            options: [
              { id: 'a', text: '$28$ cm$^2$', isCorrect: true },
              { id: 'b', text: '$36$ cm$^2$', isCorrect: false },
              { id: 'c', text: '$20$ cm$^2$', isCorrect: false },
              { id: 'd', text: '$56$ cm$^2$', isCorrect: false },
            ],
            solution: '$A = \\frac{(5 + 9) \\cdot 4}{2} = \\frac{14 \\cdot 4}{2} = \\frac{56}{2} = 28$ cm$^2$.',
          },
          {
            id: '9-4-3-n-quiz1-q2',
            task: 'Hva er arealet av en sirkel med diameter $10$ cm?',
            options: [
              { id: 'a', text: '$100\\pi$ cm$^2$', isCorrect: false },
              { id: 'b', text: '$25\\pi$ cm$^2$', isCorrect: true },
              { id: 'c', text: '$10\\pi$ cm$^2$', isCorrect: false },
              { id: 'd', text: '$50\\pi$ cm$^2$', isCorrect: false },
            ],
            solution: 'Diameter $= 10$ cm betyr radius $r = 5$ cm. $A = \\pi r^2 = \\pi \\cdot 5^2 = 25\\pi$ cm$^2 \\approx 78{,}5$ cm$^2$.',
          },
        ],
      },
    },

    {
      id: '9-4-3-n-section2',
      type: 'text',
      content: `## Overflate og volum av romfigurer -- prismer og sylinder

Nå forlater vi flatland og går inn i 3D! Et **prisme** er en romfigur med to identiske, parallelle endeflater (grunnflater) forbundet av rektangler. Formen på grunnflaten bestemmer hva slags prisme det er: et rektangulært prisme (boks), et trekantprisme (Toblerone-boks), et sekskantet prisme (blyant), osv.

**Volum av prisme:**

$$V = G \\cdot h$$

der $G$ er arealet av grunnflaten og $h$ er høyden (avstanden mellom grunnflatene).

Et rektangulært prisme (boks) med lengde $5$, bredde $3$ og høyde $4$ cm har:

$$V = (5 \\times 3) \\times 4 = 15 \\times 4 = 60 \\text{ cm}^3$$

En **sylinder** er som et prisme med sirkulær grunnflate:

$$V_{\\text{sylinder}} = \\pi r^2 \\cdot h$$

En brus-boks med radius $3{,}3$ cm og høyde $12$ cm rommer:

$$V = \\pi \\cdot 3{,}3^2 \\cdot 12 = \\pi \\cdot 10{,}89 \\cdot 12 \\approx 410 \\text{ cm}^3 = 0{,}41 \\text{ liter}$$

(Akkurat plass til en halv-liter brus, med litt luft i toppen.)

**Overflaten** av en sylinder er summen av de to sirkulære endene og den buede sideflaten. Sideflaten er som et rektangel som er «rullet rundt» sylinderen:

$$O_{\\text{sylinder}} = 2\\pi r^2 + 2\\pi r h = 2\\pi r(r + h)$$`,
    },

    {
      id: '9-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-3-n-quiz2-q0',
            task: 'Et trekantprisme har grunnflate med areal $20$ cm$^2$ og høyde $15$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$35$ cm$^3$', isCorrect: false },
              { id: 'b', text: '$150$ cm$^3$', isCorrect: false },
              { id: 'c', text: '$300$ cm$^3$', isCorrect: true },
              { id: 'd', text: '$100$ cm$^3$', isCorrect: false },
            ],
            solution: '$V = G \\cdot h = 20 \\times 15 = 300$ cm$^3$.',
          },
          {
            id: '9-4-3-n-quiz2-q1',
            task: 'En sylinder har radius $5$ cm og høyde $10$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$50\\pi$ cm$^3$', isCorrect: false },
              { id: 'b', text: '$250\\pi$ cm$^3$', isCorrect: true },
              { id: 'c', text: '$500\\pi$ cm$^3$', isCorrect: false },
              { id: 'd', text: '$100\\pi$ cm$^3$', isCorrect: false },
            ],
            solution: '$V = \\pi r^2 h = \\pi \\cdot 5^2 \\cdot 10 = 250\\pi$ cm$^3 \\approx 785$ cm$^3$.',
          },
        ],
      },
    },

    {
      id: '9-4-3-n-section3',
      type: 'text',
      content: `## Pyramide, kjegle og kule

Noen romfigurer smalner av til en spiss:

**Pyramide:** En pyramide har én grunnflate og trekantsider som møtes i et punkt (toppen). Volumet er en tredjedel av prismet med samme grunnflate og høyde:

$$V_{\\text{pyramide}} = \\frac{G \\cdot h}{3}$$

En firkantet pyramide med kvadratisk grunnflate ($6 \\times 6$ cm) og høyde $10$ cm:

$$V = \\frac{36 \\times 10}{3} = \\frac{360}{3} = 120 \\text{ cm}^3$$

**Kjegle:** En kjegle er som en pyramide med sirkulær grunnflate:

$$V_{\\text{kjegle}} = \\frac{\\pi r^2 h}{3}$$

Tenk på en iskremkjegle med radius $3$ cm og høyde $12$ cm:

$$V = \\frac{\\pi \\cdot 9 \\cdot 12}{3} = 36\\pi \\approx 113 \\text{ cm}^3$$

Huskeregelen er enkel: **pyramide og kjegle har en tredjedel av volumet** til tilsvarende prisme eller sylinder.

**Kule:** En kule er den mest «effektive» formen -- den har størst volum i forhold til overflaten. Formlene er:

$$V_{\\text{kule}} = \\frac{4}{3}\\pi r^3 \\qquad O_{\\text{kule}} = 4\\pi r^2$$

En fotball med radius $11$ cm:

$$V = \\frac{4}{3}\\pi \\cdot 11^3 = \\frac{4}{3}\\pi \\cdot 1331 \\approx 5575 \\text{ cm}^3 \\approx 5{,}6 \\text{ liter}$$`,
    },

    {
      id: '9-4-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-4-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-3-n-quiz3-q0',
            task: 'En kjegle har radius $6$ cm og høyde $10$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$360\\pi$ cm$^3$', isCorrect: false },
              { id: 'b', text: '$120\\pi$ cm$^3$', isCorrect: true },
              { id: 'c', text: '$60\\pi$ cm$^3$', isCorrect: false },
              { id: 'd', text: '$180\\pi$ cm$^3$', isCorrect: false },
            ],
            solution: '$V = \\frac{\\pi r^2 h}{3} = \\frac{\\pi \\cdot 36 \\cdot 10}{3} = \\frac{360\\pi}{3} = 120\\pi$ cm$^3 \\approx 377$ cm$^3$.',
          },
          {
            id: '9-4-3-n-quiz3-q1',
            task: 'En kule har radius $3$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$36\\pi$ cm$^3$', isCorrect: true },
              { id: 'b', text: '$27\\pi$ cm$^3$', isCorrect: false },
              { id: 'c', text: '$\\frac{4}{3}\\pi$ cm$^3$', isCorrect: false },
              { id: 'd', text: '$108\\pi$ cm$^3$', isCorrect: false },
            ],
            solution: '$V = \\frac{4}{3}\\pi r^3 = \\frac{4}{3}\\pi \\cdot 27 = \\frac{108\\pi}{3} = 36\\pi$ cm$^3 \\approx 113$ cm$^3$.',
          },
          {
            id: '9-4-3-n-quiz3-q2',
            task: 'En sylinder og en kjegle har begge radius $4$ cm og høyde $9$ cm. Hvor mange kjegler trengs for å fylle sylinderen?',
            options: [
              { id: 'a', text: '$2$', isCorrect: false },
              { id: 'b', text: '$3$', isCorrect: true },
              { id: 'c', text: '$4$', isCorrect: false },
              { id: 'd', text: '$9$', isCorrect: false },
            ],
            solution: 'Kjeglen har $\\frac{1}{3}$ av sylinderens volum, så det trengs nøyaktig $3$ kjegler for å fylle sylinderen.',
          },
        ],
      },
    },

    {
      id: '9-4-3-n-section4',
      type: 'text',
      content: `## Sammensatte figurer og enheter

I praksis er mange gjenstander **sammensatte** -- de består av flere grunnfigurer satt sammen. En iskrem i en kjegle med en halvkule is på toppen har totalt volum:

$$V_{\\text{total}} = V_{\\text{kjegle}} + V_{\\text{halvkule}} = \\frac{\\pi r^2 h}{3} + \\frac{1}{2} \\cdot \\frac{4}{3}\\pi r^3 = \\frac{\\pi r^2 h}{3} + \\frac{2\\pi r^3}{3}$$

**Enhetsomregning** er også viktig:
- $1$ m $= 100$ cm, så $1$ m$^2$ $= 10\\,000$ cm$^2$ og $1$ m$^3$ $= 1\\,000\\,000$ cm$^3$
- $1$ dm$^3$ $= 1$ liter
- $1$ m$^3$ $= 1000$ liter
- $1$ cm$^3$ $= 1$ mL (milliliter)

Når du regner med volum, pass på at alle mål er i **samme enhet** før du setter inn i formelen. Bland aldri cm og m!`,
    },

    {
      id: '9-4-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '9-4-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-3-n-quiz4-q0',
            task: 'Hvor mange liter rommer $5000$ cm$^3$?',
            options: [
              { id: 'a', text: '$0{,}5$ liter', isCorrect: false },
              { id: 'b', text: '$5$ liter', isCorrect: true },
              { id: 'c', text: '$50$ liter', isCorrect: false },
              { id: 'd', text: '$500$ liter', isCorrect: false },
            ],
            solution: '$1$ liter $= 1$ dm$^3 = 1000$ cm$^3$. Altså $5000$ cm$^3 = \\frac{5000}{1000} = 5$ liter.',
          },
          {
            id: '9-4-3-n-quiz4-q1',
            task: 'Et svømmebasseng er $25$ m langt, $12{,}5$ m bredt og $2$ m dypt. Hvor mange liter vann rommer det?',
            options: [
              { id: 'a', text: '$62\\,500$ liter', isCorrect: false },
              { id: 'b', text: '$625\\,000$ liter', isCorrect: true },
              { id: 'c', text: '$625$ liter', isCorrect: false },
              { id: 'd', text: '$6\\,250\\,000$ liter', isCorrect: false },
            ],
            solution: '$V = 25 \\times 12{,}5 \\times 2 = 625$ m$^3$. Og $1$ m$^3 = 1000$ liter, så $V = 625\\,000$ liter.',
          },
        ],
      },
    },

    {
      id: '9-4-3-n-summary',
      type: 'text',
      content: `## Oppsummering

| Figur | Areal / Volum |
|-------|---------------|
| Rektangel | $A = l \\cdot b$ |
| Trekant | $A = \\frac{g \\cdot h}{2}$ |
| Sirkel | $A = \\pi r^2$ |
| Trapes | $A = \\frac{(a+b) \\cdot h}{2}$ |
| Prisme | $V = G \\cdot h$ |
| Sylinder | $V = \\pi r^2 h$ |
| Pyramide | $V = \\frac{G \\cdot h}{3}$ |
| Kjegle | $V = \\frac{\\pi r^2 h}{3}$ |
| Kule | $V = \\frac{4}{3}\\pi r^3$ |

Pyramider og kjegler har $\\frac{1}{3}$ av volumet til tilsvarende prisme/sylinder. Husk å bruke samme enhet gjennom hele beregningen, og pass på enhetsomregning ($1$ dm$^3 = 1$ liter).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4 NARRATIV: Konstruksjoner
// ============================================================================

export const CHAPTER_9_4_4_NARRATIV: TextbookChapter = {
  id: '9-4-4-narrativ',
  courseId: '9',
  chapterNumber: '4.4',
  title: 'Konstruksjoner',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av geometriske konstruksjoner med passer og linjal -- der vi lærer de grunnleggende teknikkene som halveringslinjer, midtnormaler og konstruksjon av spesielle vinkler.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utføre og beskrive geometriske konstruksjonar med passar og linjal og med digitale verktøy',
  ],
  linkedChapterId: '9-4-4',
  content: [
    {
      id: '9-4-4-n-intro',
      type: 'text',
      content: `## De eldgamle verktøyene

For over 2000 år siden stilte greske matematikere seg et spørsmål: hva kan vi tegne med bare en **passer** (for å lage sirkler) og en **linjal uten mål** (for å trekke rette linjer)? Svaret viste seg å være overraskende mye -- vi kan halvere vinkler, lage vinkelrette linjer, konstruere regulære mangekanter, og mye mer.

Disse teknikkene er ikke bare historisk interessante. De lærer oss å tenke presist om geometri, og de brukes fortsatt i dag -- blant annet i GeoGebra og andre digitale verktøy. La oss starte med de grunnleggende konstruksjonene.`,
    },

    {
      id: '9-4-4-n-section1',
      type: 'text',
      content: `## Midtnormalen til et linjestykke

Den første og kanskje viktigste konstruksjonen er **midtnormalen** til et linjestykke. Midtnormalen er en linje som:
1. Går gjennom **midtpunktet** av linjestykket
2. Står **vinkelrett** ($90°$) på linjestykket

**Slik konstruerer du midtnormalen til linjestykket $AB$:**

1. Sett passerspissen i $A$. Slå en bue med radius større enn halvparten av $AB$ (buen skal gå over og under linjestykket).
2. Uten å endre radius: sett passerspissen i $B$ og slå en bue som krysser den forrige buen i to punkter, $P$ og $Q$.
3. Trekk en rett linje gjennom $P$ og $Q$. Dette er midtnormalen!

Hvorfor fungerer dette? Begge buene har samme radius. Punkt $P$ og $Q$ ligger like langt fra $A$ som fra $B$. En linje gjennom to slike punkter må gå gjennom midtpunktet og stå vinkelrett på $AB$.

**Nyttig egenskap:** Alle punkter på midtnormalen ligger like langt fra $A$ og $B$. Midtnormalen er altså «grenselinjen» mellom alt som er nærmere $A$ og alt som er nærmere $B$.`,
    },

    {
      id: '9-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-4-n-quiz1-q0',
            task: 'Hva er midtnormalen til et linjestykke?',
            options: [
              { id: 'a', text: 'En linje som halverer linjestykket i en vilkårlig vinkel', isCorrect: false },
              { id: 'b', text: 'En linje vinkelrett på linjestykket, gjennom midtpunktet', isCorrect: true },
              { id: 'c', text: 'En linje parallell med linjestykket', isCorrect: false },
              { id: 'd', text: 'Diagonalen i et rektangel', isCorrect: false },
            ],
            solution: 'Midtnormalen er vinkelrett ($90°$) på linjestykket og går gjennom midtpunktet.',
          },
          {
            id: '9-4-4-n-quiz1-q1',
            task: 'Et punkt $P$ ligger på midtnormalen til $AB$. Hva vet vi om $P$?',
            options: [
              { id: 'a', text: '$P$ er midtpunktet av $AB$', isCorrect: false },
              { id: 'b', text: '$PA = PB$ (like langt fra begge endepunktene)', isCorrect: true },
              { id: 'c', text: '$PA + PB = AB$', isCorrect: false },
              { id: 'd', text: 'Vinkelen $APB$ er $90°$', isCorrect: false },
            ],
            solution: 'Alle punkter på midtnormalen ligger like langt fra $A$ og $B$. Altså $PA = PB$.',
          },
        ],
      },
    },

    {
      id: '9-4-4-n-section2',
      type: 'text',
      content: `## Halveringslinje for en vinkel

Den neste viktige konstruksjonen er **halveringslinjen** (eller bisektøren) til en vinkel. Den deler vinkelen i to like store deler.

**Slik konstruerer du halveringslinjen til vinkel $\\angle BAC$:**

1. Sett passerspissen i vinkelpunktet $A$. Slå en bue som skjærer begge vinkelbeina i punktene $D$ (på $AB$) og $E$ (på $AC$).
2. Sett passerspissen i $D$ og slå en bue inni vinkelen.
3. Med samme radius: sett passerspissen i $E$ og slå en bue som krysser buen fra steg 2 i et punkt $F$.
4. Trekk en rett linje fra $A$ gjennom $F$. Dette er halveringslinjen!

Linjen $AF$ deler $\\angle BAC$ i to like store vinkler: $\\angle BAF = \\angle FAC$.

**Nyttig egenskap:** Alle punkter på halveringslinjen ligger like langt fra de to vinkelbeina. Denne egenskapen brukes blant annet til å finne det **innskrevne sirkelsenteret** i en trekant -- det er skjæringspunktet mellom halveringslinjene til trekantens vinkler.`,
    },

    {
      id: '9-4-4-n-section3',
      type: 'text',
      content: `## Konstruere spesielle vinkler

Med passer og linjal kan vi konstruere en rekke spesielle vinkler nøyaktig, uten gradskive:

**$60°$ vinkel:** Tegn en stråle fra $A$. Slå en sirkel med sentrum i $A$. Merk skjæringspunktet $B$ på strålen. Med samme radius og sentrum i $B$, merk skjæringspunktet $C$ på sirkelen. Da er $\\angle BAC = 60°$. (Dette fungerer fordi trekant $ABC$ er likesidet -- alle sider er like lange.)

**$90°$ vinkel:** Konstruer midtnormalen til et linjestykke -- den danner $90°$ med linjestykket.

**$30°$ vinkel:** Konstruer $60°$ og halver den.

**$45°$ vinkel:** Konstruer $90°$ og halver den.

**$120°$ vinkel:** Konstruer $60°$ og legg til $60°$ til (eller konstruer en likesidet trekant og bruk den ytre vinkelen).

Ved å kombinere disse grunnkonstruksjonene kan vi faktisk lage svært mange vinkler: $15° = \\frac{30°}{2}$, $75° = 45° + 30°$, $150° = 180° - 30°$, og så videre. Noen vinkler, som nøyaktig $20°$, kan derimot *ikke* konstrueres med bare passer og linjal -- det ble bevist for rundt 200 år siden.`,
    },

    {
      id: '9-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-4-n-quiz2-q0',
            task: 'Hvordan konstruerer du en $60°$ vinkel?',
            options: [
              { id: 'a', text: 'Halvere en $120°$ vinkel', isCorrect: false },
              { id: 'b', text: 'Bruke en likesidet trekant (tre like sirkelbuer)', isCorrect: true },
              { id: 'c', text: 'Konstruere midtnormalen til et linjestykke', isCorrect: false },
              { id: 'd', text: 'Det er umulig med bare passer og linjal', isCorrect: false },
            ],
            solution: 'En likesidet trekant har alle vinkler lik $60°$. Vi konstruerer den ved å slå sirkelbuer med lik radius fra to punkter.',
          },
          {
            id: '9-4-4-n-quiz2-q1',
            task: 'Hvordan lager du en $30°$ vinkel med passer og linjal?',
            options: [
              { id: 'a', text: 'Konstruere $60°$ og halvere den', isCorrect: true },
              { id: 'b', text: 'Halvere en $90°$ vinkel', isCorrect: false },
              { id: 'c', text: 'Tredoble en $10°$ vinkel', isCorrect: false },
              { id: 'd', text: 'Det går ikke', isCorrect: false },
            ],
            solution: 'Vi konstruerer først $60°$ (likesidet trekant), og halverer deretter med halveringslinje-konstruksjonen: $\\frac{60°}{2} = 30°$.',
          },
          {
            id: '9-4-4-n-quiz2-q2',
            task: 'Hva er en halveringslinje?',
            options: [
              { id: 'a', text: 'En linje som halverer et linjestykke', isCorrect: false },
              { id: 'b', text: 'En linje som deler en vinkel i to like store deler', isCorrect: true },
              { id: 'c', text: 'En linje vinkelrett på en side', isCorrect: false },
              { id: 'd', text: 'En linje parallell med grunnlinjen', isCorrect: false },
            ],
            solution: 'En halveringslinje deler en vinkel i to like store halvdeler. Alle punkter på den ligger like langt fra vinkelens to bein.',
          },
        ],
      },
    },

    {
      id: '9-4-4-n-section4',
      type: 'text',
      content: `## Konstruere trekanter

Trekanter kan konstrueres fra ulike opplysninger. De tre vanligste tilfellene er:

**SSS (side-side-side):** Alle tre sider er kjent.
1. Tegn den ene siden (f.eks. $AB$).
2. Slå en sirkel med sentrum $A$ og radius lik den andre siden.
3. Slå en sirkel med sentrum $B$ og radius lik den tredje siden.
4. Skjæringspunktet er det tredje hjørnet $C$.

**SVS (side-vinkel-side):** To sider og vinkelen mellom dem er kjent.
1. Tegn den ene siden.
2. Konstruer vinkelen (med gradskive eller passer-teknikk).
3. Avsett den andre sidens lengde langs vinkelbeinet.
4. Trekk den siste siden.

**VSV (vinkel-side-vinkel):** To vinkler og siden mellom dem er kjent.
1. Tegn den kjente siden.
2. Konstruer den ene vinkelen i det ene endepunktet.
3. Konstruer den andre vinkelen i det andre endepunktet.
4. Linjene møtes i det tredje hjørnet.

Husk **trekantsetningen**: tre sidelengder danner bare en trekant hvis summen av de to korteste sidene er større enn den lengste. Ellers «når ikke sidene rundt».`,
    },

    {
      id: '9-4-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-4-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-4-n-quiz3-q0',
            task: 'Kan du konstruere en trekant med sider $3$, $4$ og $8$ cm?',
            options: [
              { id: 'a', text: 'Ja, med SSS-konstruksjon', isCorrect: false },
              { id: 'b', text: 'Nei, fordi $3 + 4 < 8$', isCorrect: true },
              { id: 'c', text: 'Ja, men bare med gradskive', isCorrect: false },
              { id: 'd', text: 'Nei, fordi ingen side er dobbelt så lang som en annen', isCorrect: false },
            ],
            solution: 'Trekantsetningen: $3 + 4 = 7 < 8$. De to korte sidene når ikke rundt den lange. En slik trekant kan ikke eksistere.',
          },
          {
            id: '9-4-4-n-quiz3-q1',
            task: 'Du kjenner to sider og vinkelen mellom dem. Hvilken konstruksjonsmetode bruker du?',
            options: [
              { id: 'a', text: 'SSS', isCorrect: false },
              { id: 'b', text: 'SVS', isCorrect: true },
              { id: 'c', text: 'VSV', isCorrect: false },
              { id: 'd', text: 'SSV', isCorrect: false },
            ],
            solution: 'SVS (side-vinkel-side) brukes når to sider og vinkelen mellom dem er kjent.',
          },
          {
            id: '9-4-4-n-quiz3-q2',
            task: 'I en SSS-konstruksjon av en trekant med sider $5$, $7$ og $9$ cm -- hva gjør du etter å ha tegnet den ene siden?',
            options: [
              { id: 'a', text: 'Tegner en vinkel med gradskive', isCorrect: false },
              { id: 'b', text: 'Slår to sirkelbuer med de gitte radiene fra hvert endepunkt', isCorrect: true },
              { id: 'c', text: 'Måler diagonalen', isCorrect: false },
              { id: 'd', text: 'Deler den tegnede siden i to', isCorrect: false },
            ],
            solution: 'I SSS slår vi en sirkelbue fra hvert endepunkt med radius lik de to gjenværende sidene. Skjæringspunktet er det tredje hjørnet.',
          },
        ],
      },
    },

    {
      id: '9-4-4-n-section5',
      type: 'text',
      content: `## Innskrevne og omskrevne sirkler

Til slutt to elegante konstruksjoner som kombinerer det vi har lært:

**Omskrevet sirkel:** En sirkel som går gjennom alle tre hjørnene i en trekant. Sentrum finner vi i **skjæringspunktet mellom midtnormalene** til to av sidene. Radius er avstanden fra sentrum til et av hjørnene.

**Innskrevet sirkel:** En sirkel som tangerer (berører) alle tre sidene i en trekant. Sentrum finner vi i **skjæringspunktet mellom halveringslinjene** til to av vinklene. Radius er den vinkelrette avstanden fra sentrum til en av sidene.

Legg merke til den vakre symmetrien: midtnormaler gir den omskrevne sirkelen, og halveringslinjer gir den innskrevne sirkelen. Begge bygger på de grunnleggende konstruksjonene vi allerede kan.

Disse konstruksjonene viser at geometri ikke bare handler om å beregne tall -- det handler om å se sammenhenger og bygge presise figurer med enkle verktøy.`,
    },

    {
      id: '9-4-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '9-4-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-4-4-n-quiz4-q0',
            task: 'Hvordan finner du sentrum i den omskrevne sirkelen til en trekant?',
            options: [
              { id: 'a', text: 'Skjæringspunktet mellom halveringslinjene', isCorrect: false },
              { id: 'b', text: 'Skjæringspunktet mellom midtnormalene', isCorrect: true },
              { id: 'c', text: 'Midtpunktet av den lengste siden', isCorrect: false },
              { id: 'd', text: 'Tyngdepunktet i trekanten', isCorrect: false },
            ],
            solution: 'Midtnormalene til sidene i en trekant møtes i ett punkt, som er sentrum i den omskrevne sirkelen.',
          },
          {
            id: '9-4-4-n-quiz4-q1',
            task: 'Den innskrevne sirkelen i en trekant berører:',
            options: [
              { id: 'a', text: 'Alle tre hjørnene', isCorrect: false },
              { id: 'b', text: 'Alle tre sidene', isCorrect: true },
              { id: 'c', text: 'Bare den lengste siden', isCorrect: false },
              { id: 'd', text: 'Midtpunktene av sidene', isCorrect: false },
            ],
            solution: 'Den innskrevne sirkelen tangerer (berører) alle tre sidene i trekanten. Den omskrevne sirkelen går gjennom alle tre hjørnene.',
          },
        ],
      },
    },

    {
      id: '9-4-4-n-summary',
      type: 'text',
      content: `## Oppsummering

De grunnleggende konstruksjonene med passer og linjal:

| Konstruksjon | Hva den gjør |
|-------------|-------------|
| Midtnormal | Vinkelrett linje gjennom midtpunktet av et linjestykke |
| Halveringslinje | Deler en vinkel i to like deler |
| $60°$ vinkel | Likesidet trekant med sirkelbuer |
| $90°$ vinkel | Midtnormal-konstruksjon |

**Trekantkonstruksjoner:**
- SSS: Alle tre sider kjent (bruk sirkelbuer)
- SVS: To sider og vinkelen mellom dem
- VSV: To vinkler og siden mellom dem

**Spesielle sirkler:**
- Omskrevet sirkel: gjennom hjørnene, sentrum i midtnormal-skjæring
- Innskrevet sirkel: tangerer sidene, sentrum i halveringslinje-skjæring

Husk trekantsetningen: summen av de to korteste sidene må være større enn den lengste.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_4_1_NARRATIV,
  CHAPTER_9_4_2_NARRATIV,
  CHAPTER_9_4_3_NARRATIV,
  CHAPTER_9_4_4_NARRATIV,
];
