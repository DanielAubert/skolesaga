/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 9
 *
 * Kapittel 9.1: Prisme og sylinder – overflate og volum
 * Kapittel 9.2: Kjegle og pyramide
 * Kapittel 9.3: Kule og sammensatte figurer
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1 NARRATIV: Prisme og sylinder – overflate og volum
// ============================================================================

export const CHAPTER_9_9_1_NARRATIV: TextbookChapter = {
  id: '9-9-1-narrativ',
  courseId: '9',
  chapterNumber: '9.1',
  title: 'Prisme og sylinder – overflate og volum',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av prismer og sylindere -- fra esker og hermetikkbokser til akvarier og vannrør -- der vi utforsker formlene for volum og overflate gjennom praktiske hverdagseksempler.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum av tredimensjonale figurar',
  ],
  linkedChapterId: '9-9-1',
  content: [
    {
      id: '9-9-1-n-intro',
      type: 'text',
      content: `## En verden i tre dimensjoner

Se deg rundt i rommet. Bøkene på pulten, melkekartongen i kjøleskapet, batteriet i fjernkontrollen -- alle disse tingene har lengde, bredde *og* høyde. De er **tredimensjonale** figurer, og for å beskrive dem trenger vi to viktige begreper:

- **Volum** -- hvor mye plass figuren tar opp (tenk: hvor mye vann kan du fylle i den?)
- **Overflate** -- det totale arealet av alle flatene som dekker figuren (tenk: hvor mye gavepapir trenger du for å pakke den inn?)

Volum måles i kubikkenheter ($\\text{cm}^3$, $\\text{dm}^3$, $\\text{m}^3$), og overflate måles i kvadratenheter ($\\text{cm}^2$, $\\text{m}^2$). Og her er en nyttig huskeregel for hverdagen: $1 \\text{ dm}^3 = 1$ liter, og $1 \\text{ cm}^3 = 1$ milliliter.

La oss starte med to av de vanligste romfigurene: **prismer** og **sylindere**.`,
    },

    {
      id: '9-9-1-n-section1',
      type: 'text',
      content: `## Prismer -- bokser, telt og sjokoladestenger

Et **prisme** er en romfigur der to flater er nøyaktig like (disse kalles **grunnflatene**) og resten av flatene er rektangler som forbinder dem. Grunnflatene kan ha hvilken som helst form -- rektangel, trekant, sekskant -- bare de er like og parallelle.

Den enkleste typen er det **rektangulære prismet**, altså en vanlig boks. Tenk på en skoeske med lengde $l$, bredde $b$ og høyde $h$. Volumet er rett og slett:

$$V = l \\cdot b \\cdot h$$

Overflaten er summen av alle seks sider. Boksen har tre par med like flater:

$$O = 2(l \\cdot b + l \\cdot h + b \\cdot h)$$

Men nøkkelen til prismer generelt er enda enklere. Uansett hvilken form grunnflaten har, er volumet:

$$V = G \\cdot h$$

der $G$ er arealet av grunnflaten og $h$ er høyden. Overflaten er:

$$O = 2G + M$$

der $M$ er **mantelen** -- summen av arealene til alle sideflatene.

Et trekantet prisme (som et Toblerone-eske) med en rettvinklet trekant som grunnflate med kateter $3$ og $4$ cm og prismehøyde $12$ cm har for eksempel grunnflateareal $G = \\frac{3 \\cdot 4}{2} = 6 \\text{ cm}^2$ og volum $V = 6 \\cdot 12 = 72 \\text{ cm}^3$.`,
    },

    {
      id: '9-9-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-9-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på prismer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-9-1-n-quiz1-q0',
            task: 'En eske har lengde $25$ cm, bredde $15$ cm og høyde $10$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$3750 \\text{ cm}^3$', isCorrect: true },
              { id: 'b', text: '$1550 \\text{ cm}^3$', isCorrect: false },
              { id: 'c', text: '$3750 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$375 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = l \\cdot b \\cdot h = 25 \\cdot 15 \\cdot 10 = 3750 \\text{ cm}^3$. Husk at volum måles i kubikkenheter, ikke kvadratenheter.',
          },
          {
            id: '9-9-1-n-quiz1-q1',
            task: 'Hva er overflaten av en boks med lengde $10$ cm, bredde $6$ cm og høyde $4$ cm?',
            options: [
              { id: 'a', text: '$240 \\text{ cm}^2$', isCorrect: false },
              { id: 'b', text: '$248 \\text{ cm}^2$', isCorrect: true },
              { id: 'c', text: '$124 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$480 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: '$O = 2(10 \\cdot 6 + 10 \\cdot 4 + 6 \\cdot 4) = 2(60 + 40 + 24) = 2 \\cdot 124 = 248 \\text{ cm}^2$.',
          },
          {
            id: '9-9-1-n-quiz1-q2',
            task: 'Et rektangulært prisme har volum $3750 \\text{ cm}^3$. Hvor mange liter rommer det?',
            options: [
              { id: 'a', text: '$37{,}5$ liter', isCorrect: false },
              { id: 'b', text: '$0{,}375$ liter', isCorrect: false },
              { id: 'c', text: '$3{,}75$ liter', isCorrect: true },
              { id: 'd', text: '$375$ liter', isCorrect: false },
            ],
            solution: '$3750 \\text{ cm}^3 = 3750 \\text{ ml} = 3{,}75$ liter, fordi $1 \\text{ cm}^3 = 1 \\text{ ml}$ og $1000 \\text{ ml} = 1$ liter.',
          },
        ],
      },
    },

    {
      id: '9-9-1-n-section2',
      type: 'text',
      content: `## Sylindere -- boksene med runde bunner

Nå skal vi se på **sylinderen** -- den figuren du finner i hermetikkbokser, vannrør og battericeller. En sylinder har to sirkulære grunnflater forbundet av en buet sideflate som kalles **mantelen**.

Volumet av en sylinder følger det samme prinsippet som for prismer: grunnflateareal ganger høyde. Grunnflaten er en sirkel med areal $\\pi r^2$, så:

$$V = \\pi r^2 h$$

For overflaten trenger vi de to sirkulære flatene pluss mantelen. Hvis du «bretter ut» mantelen, får du et rektangel med bredde lik omkretsen av sirkelen ($2\\pi r$) og høyde $h$:

$$O = 2\\pi r^2 + 2\\pi r h$$

La oss prøve: En hermetikkboks med radius $4$ cm og høyde $11$ cm. Volumet er $V = \\pi \\cdot 4^2 \\cdot 11 = 176\\pi \\approx 553 \\text{ cm}^3$. Det tilsvarer $553$ ml, eller omtrent $5{,}5$ desiliter. Overflaten er $O = 2\\pi \\cdot 16 + 2\\pi \\cdot 4 \\cdot 11 = 32\\pi + 88\\pi = 120\\pi \\approx 377 \\text{ cm}^2$.

En viktig detalj: oppgaver gir noen ganger **diameteren** i stedet for radius. Husk alltid at $r = \\frac{d}{2}$. Hvis diameteren er $14$ cm, er radius $7$ cm.`,
    },

    {
      id: '9-9-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-9-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på sylindere:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-9-1-n-quiz2-q0',
            task: 'En sylinder har radius $3$ cm og høyde $10$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$30\\pi \\approx 94 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$90\\pi \\approx 283 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$60\\pi \\approx 188 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$900\\pi \\approx 2827 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = \\pi r^2 h = \\pi \\cdot 3^2 \\cdot 10 = \\pi \\cdot 9 \\cdot 10 = 90\\pi \\approx 283 \\text{ cm}^3$.',
          },
          {
            id: '9-9-1-n-quiz2-q1',
            task: 'En sylinder har diameter $14$ cm og høyde $20$ cm. Hva er overflaten?',
            options: [
              { id: 'a', text: '$378\\pi \\approx 1188 \\text{ cm}^2$', isCorrect: true },
              { id: 'b', text: '$672\\pi \\approx 2111 \\text{ cm}^2$', isCorrect: false },
              { id: 'c', text: '$280\\pi \\approx 880 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$756\\pi \\approx 2375 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: 'Radius $r = 7$ cm. $O = 2\\pi \\cdot 7^2 + 2\\pi \\cdot 7 \\cdot 20 = 98\\pi + 280\\pi = 378\\pi \\approx 1188 \\text{ cm}^2$.',
          },
          {
            id: '9-9-1-n-quiz2-q2',
            task: 'En vannbeholder er sylinderformet med radius $1{,}2$ m og høyde $3$ m. Hvor mange liter rommer den?',
            options: [
              { id: 'a', text: 'Omtrent $1360$ liter', isCorrect: false },
              { id: 'b', text: 'Omtrent $4320$ liter', isCorrect: false },
              { id: 'c', text: 'Omtrent $13\\,600$ liter', isCorrect: true },
              { id: 'd', text: 'Omtrent $43\\,200$ liter', isCorrect: false },
            ],
            solution: '$V = \\pi \\cdot 1{,}2^2 \\cdot 3 = 4{,}32\\pi \\approx 13{,}6 \\text{ m}^3$. Siden $1 \\text{ m}^3 = 1000$ liter, rommer den omtrent $13\\,600$ liter.',
          },
        ],
      },
    },

    {
      id: '9-9-1-n-section3',
      type: 'text',
      content: `## Praktiske utfordringer -- akvarier og rør

La oss se på to hverdagsproblemer som viser hvordan vi bruker formlene i praksis.

**Akvariet:** Tenk deg et rektangulært akvarium med lengde $80$ cm, bredde $40$ cm og høyde $50$ cm. Det fylles med vann til $5$ cm under kanten. Vannhøyden er altså $45$ cm, ikke $50$ cm. Volumet av vannet er $V = 80 \\cdot 40 \\cdot 45 = 144\\,000 \\text{ cm}^3 = 144$ liter. Og fordi akvariet ikke har lokk, trenger vi glass til bunnen pluss fire sidevegger (ikke seks flater!): $O = 80 \\cdot 40 + 2 \\cdot 80 \\cdot 50 + 2 \\cdot 40 \\cdot 50 = 3200 + 8000 + 4000 = 15\\,200 \\text{ cm}^2$.

**Det hule røret:** Et vannrør har ytre radius $R = 5$ cm, indre radius $r = 4$ cm og lengde $200$ cm. Volumet av selve rørmaterialet er forskjellen mellom det ytre og indre volumet:

$$V_{\\text{materiale}} = \\pi h(R^2 - r^2) = \\pi \\cdot 200 \\cdot (25 - 16) = 1800\\pi \\approx 5655 \\text{ cm}^3$$

Det indre volumet -- altså hvor mye vann som kan strømme gjennom -- er $V_{\\text{indre}} = \\pi \\cdot 4^2 \\cdot 200 = 3200\\pi \\approx 10\\,053 \\text{ cm}^3 \\approx 10{,}1$ liter.

Legg merke til to viktige ting: vi måtte huske å **ikke** telle lokket på akvariet, og vi måtte omgjøre meter til centimeter for røret ($2 \\text{ m} = 200 \\text{ cm}$). Enheter er viktige!`,
    },

    {
      id: '9-9-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-9-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på praktiske problemer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-9-1-n-quiz3-q0',
            task: 'En sylinderformet beholder skal romme nøyaktig $1$ liter ($1000 \\text{ cm}^3$). Diameteren er lik høyden, altså $h = 2r$. Hva er omtrent radius?',
            options: [
              { id: 'a', text: '$r \\approx 3{,}99$ cm', isCorrect: false },
              { id: 'b', text: '$r \\approx 5{,}42$ cm', isCorrect: true },
              { id: 'c', text: '$r \\approx 7{,}98$ cm', isCorrect: false },
              { id: 'd', text: '$r \\approx 10{,}00$ cm', isCorrect: false },
            ],
            solution: 'Vi setter $h = 2r$ inn i volumformelen: $V = \\pi r^2 \\cdot 2r = 2\\pi r^3 = 1000$. Da er $r^3 = \\frac{500}{\\pi} \\approx 159{,}15$, og $r = \\sqrt[3]{159{,}15} \\approx 5{,}42$ cm.',
          },
          {
            id: '9-9-1-n-quiz3-q1',
            task: 'Hvor mange flater har et akvarium uten lokk?',
            options: [
              { id: 'a', text: '$4$ flater', isCorrect: false },
              { id: 'b', text: '$5$ flater', isCorrect: true },
              { id: 'c', text: '$6$ flater', isCorrect: false },
              { id: 'd', text: '$3$ flater', isCorrect: false },
            ],
            solution: 'Et akvarium uten lokk har $5$ flater: bunnen pluss fire sidevegger. Den sjette flaten (toppen) mangler.',
          },
        ],
      },
    },

    {
      id: '9-9-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har utforsket prismer og sylindere -- to av de vanligste romfigurene i hverdagen.

| Figur | Volum | Overflate |
|-------|-------|-----------|
| Prisme (generelt) | $V = G \\cdot h$ | $O = 2G + M$ |
| Rektangulært prisme | $V = l \\cdot b \\cdot h$ | $O = 2(lb + lh + bh)$ |
| Sylinder | $V = \\pi r^2 h$ | $O = 2\\pi r^2 + 2\\pi r h$ |

Nøkkelprinsipper:
- Volumet er alltid grunnflateareal ganger høyde
- Overflaten er alle synlige flater lagt sammen (husk å trekke fra flater som mangler, som lokk)
- $1 \\text{ dm}^3 = 1$ liter, $1 \\text{ cm}^3 = 1$ ml, $1 \\text{ m}^3 = 1000$ liter
- Pass alltid på at alle mål er i samme enhet før du regner!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2 NARRATIV: Kjegle og pyramide
// ============================================================================

export const CHAPTER_9_9_2_NARRATIV: TextbookChapter = {
  id: '9-9-2-narrativ',
  courseId: '9',
  chapterNumber: '9.2',
  title: 'Kjegle og pyramide',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av kjegler og pyramider -- fra iskremkjeglen til pyramidene i Egypt -- der vi oppdager tredjedelsregelen og lærer om skråhøyde.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum av tredimensjonale figurar',
  ],
  linkedChapterId: '9-9-2',
  content: [
    {
      id: '9-9-2-n-intro',
      type: 'text',
      content: `## Figurer som smalner til en spiss

Tenk deg at du holder en iskremkjegle i hånden. Eller at du ser på de gamle pyramidene i Egypt. Begge disse figurene har noe til felles: de starter bredt i bunnen og smalner av mot en spiss topp.

Matematisk kaller vi dem **kjegler** (med sirkulær grunnflate) og **pyramider** (med mangekantede grunnflater). Og det finnes en fantastisk sammenheng mellom disse figurene og de vi allerede kjenner:

> Volumet av en kjegle eller pyramide er **nøyaktig en tredjedel** av volumet til en tilsvarende sylinder eller prisme med samme grunnflate og høyde.

Hvis du fyller en kjegle med vann og tømmer den i en sylinder med samme radius og høyde, må du gjøre det **tre ganger** for å fylle sylinderen helt. Denne regelen er så viktig at den har fått sitt eget navn: **tredjedelsregelen**.`,
    },

    {
      id: '9-9-2-n-section1',
      type: 'text',
      content: `## Pyramiden -- fra Egypt til matematikktimen

En **pyramide** har én grunnflate (en mangekant) og trekantede sideflater som møtes i ett toppunkt. Den mest kjente typen er pyramiden med kvadratisk grunnflate, som Keopspyramiden.

Volumet er:

$$V = \\frac{1}{3} G \\cdot h$$

der $G$ er grunnflatearealet og $h$ er den **loddrette høyden** fra grunnflaten til toppen.

For overflaten trenger vi grunnflaten pluss alle de trekantede sideflatene. For en pyramide med kvadratisk grunnflate (side $s$) og **skråhøyde** $l$:

$$O = s^2 + 2sl$$

Skråhøyden $l$ er avstanden fra midten av en grunnflatekant til toppen, målt langs sideflaten -- ikke rett opp. Vi kan finne den med Pytagoras: $l = \\sqrt{h^2 + \\left(\\frac{s}{2}\\right)^2}$.

La oss prøve: En pyramide med kvadratisk grunnflate ($s = 6$ cm) og høyde $h = 8$ cm. Volumet er $V = \\frac{1}{3} \\cdot 36 \\cdot 8 = 96 \\text{ cm}^3$. Skråhøyden er $l = \\sqrt{64 + 9} = \\sqrt{73} \\approx 8{,}54$ cm, og overflaten er $O = 36 + 2 \\cdot 6 \\cdot 8{,}54 \\approx 138{,}5 \\text{ cm}^2$.`,
    },

    {
      id: '9-9-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-9-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på pyramider:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-9-2-n-quiz1-q0',
            task: 'En pyramide har rektangulær grunnflate med lengde $10$ cm og bredde $6$ cm. Høyden er $9$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$540 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$180 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$270 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$60 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$G = 10 \\cdot 6 = 60 \\text{ cm}^2$. $V = \\frac{1}{3} \\cdot 60 \\cdot 9 = 180 \\text{ cm}^3$. Husk tredjedelsregelen!',
          },
          {
            id: '9-9-2-n-quiz1-q1',
            task: 'En pyramide med kvadratisk grunnflate ($s = 10$ cm) har skråhøyde $l = 13$ cm. Hva er overflaten?',
            options: [
              { id: 'a', text: '$360 \\text{ cm}^2$', isCorrect: true },
              { id: 'b', text: '$260 \\text{ cm}^2$', isCorrect: false },
              { id: 'c', text: '$330 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$460 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: '$O = s^2 + 2sl = 100 + 2 \\cdot 10 \\cdot 13 = 100 + 260 = 360 \\text{ cm}^2$.',
          },
          {
            id: '9-9-2-n-quiz1-q2',
            task: 'En pyramideformet sandhaug har kvadratisk grunnflate med side $3$ m og høyde $1{,}8$ m. Sand veier $1600 \\text{ kg/m}^3$. Hva veier haugen?',
            options: [
              { id: 'a', text: '$8640$ kg', isCorrect: true },
              { id: 'b', text: '$25\\,920$ kg', isCorrect: false },
              { id: 'c', text: '$2880$ kg', isCorrect: false },
              { id: 'd', text: '$14\\,400$ kg', isCorrect: false },
            ],
            solution: '$V = \\frac{1}{3} \\cdot 9 \\cdot 1{,}8 = 5{,}4 \\text{ m}^3$. Vekt: $5{,}4 \\cdot 1600 = 8640$ kg $= 8{,}64$ tonn.',
          },
        ],
      },
    },

    {
      id: '9-9-2-n-section2',
      type: 'text',
      content: `## Kjeglen -- iskrem og trafikkjegler

En **kjegle** er som en pyramide, men med sirkulær grunnflate. Den finnes i iskremkjeglen, trafikkjeglen og mange andre steder.

Volumformelen følger tredjedelsregelen -- en tredjedel av den tilsvarende sylinderen:

$$V = \\frac{1}{3} \\pi r^2 h$$

For overflaten trenger vi grunnflaten (en sirkel) pluss mantelen (den buede sideflaten). Mantelen «brettet ut» blir en sirkelsektor med areal $\\pi r s$, der $s$ er **skråhøyden**:

$$O = \\pi r^2 + \\pi r s$$

Sammenhengen mellom høyden $h$, radius $r$ og skråhøyden $s$ er en rettvinklet trekant:

$$s = \\sqrt{r^2 + h^2}$$

En kjegle med radius $5$ cm og høyde $12$ cm har skråhøyde $s = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm. Volumet er $V = \\frac{1}{3} \\pi \\cdot 25 \\cdot 12 = 100\\pi \\approx 314 \\text{ cm}^3$. Overflaten er $O = 25\\pi + 65\\pi = 90\\pi \\approx 283 \\text{ cm}^2$.

Legg merke til at $5$, $12$ og $13$ er et pytagoreisk trippel -- et hint om at du bør se etter slike tallkombinasjoner i oppgaver.`,
    },

    {
      id: '9-9-2-n-section3',
      type: 'text',
      content: `## Kjegle vs. sylinder -- et overraskende eksperiment

La oss bekrefte tredjedelsregelen med et eksempel. Tenk deg en kjegle og en sylinder som begge har radius $4$ cm og høyde $9$ cm.

Sylinderen har volum $V_{\\text{syl}} = \\pi \\cdot 16 \\cdot 9 = 144\\pi \\approx 452 \\text{ cm}^3$.

Kjeglen har volum $V_{\\text{kjegle}} = \\frac{1}{3} \\cdot 144\\pi = 48\\pi \\approx 151 \\text{ cm}^3$.

Forholdet: $\\frac{48\\pi}{144\\pi} = \\frac{1}{3}$. Perfekt!

Det finnes også et smart problem med kjegleformede trakter. Tenk deg en trakt med radius $6$ cm og høyde $16$ cm som er fylt med vann til halve høyden ($8$ cm). Hva er radius til vannoverflaten? Fordi kjeglen er **formlik** (som litt russiske dukker), gjelder forholdet $\\frac{r}{h} = \\frac{6}{16} = \\frac{3}{8}$. Ved $h = 8$ cm er $r = \\frac{3}{8} \\cdot 8 = 3$ cm. Volumet av vannet er $\\frac{1}{3}\\pi \\cdot 9 \\cdot 8 = 24\\pi$, mens totalvolumet er $\\frac{1}{3}\\pi \\cdot 36 \\cdot 16 = 192\\pi$. Andelen er $\\frac{24\\pi}{192\\pi} = \\frac{1}{8}$. Bare en åttedel er fylt -- selv om vannet står på halve høyden! Grunnen er at radiusen også halveres.`,
    },

    {
      id: '9-9-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-9-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på kjegler og tredjedelsregelen:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-9-2-n-quiz2-q0',
            task: 'En kjegle har radius $3$ cm og høyde $7$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$63\\pi \\approx 198 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$21\\pi \\approx 66 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$9\\pi \\approx 28 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$189\\pi \\approx 594 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = \\frac{1}{3} \\pi \\cdot 3^2 \\cdot 7 = \\frac{1}{3} \\cdot 63\\pi = 21\\pi \\approx 66 \\text{ cm}^3$.',
          },
          {
            id: '9-9-2-n-quiz2-q1',
            task: 'En kjegle har radius $6$ cm og høyde $8$ cm. Hva er skråhøyden $s$?',
            options: [
              { id: 'a', text: '$s = 14$ cm', isCorrect: false },
              { id: 'b', text: '$s = \\sqrt{28} \\approx 5{,}3$ cm', isCorrect: false },
              { id: 'c', text: '$s = 10$ cm', isCorrect: true },
              { id: 'd', text: '$s = 7$ cm', isCorrect: false },
            ],
            solution: '$s = \\sqrt{r^2 + h^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm. ($6$, $8$, $10$ er et pytagoreisk trippel.)',
          },
          {
            id: '9-9-2-n-quiz2-q2',
            task: 'En kjegleformet trakt er fylt med vann til halve høyden. Hvor stor andel av det totale volumet er fylt?',
            options: [
              { id: 'a', text: '$\\frac{1}{2}$ (halvparten)', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{4}$ (en fjerdedel)', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{8}$ (en åttedel)', isCorrect: true },
              { id: 'd', text: '$\\frac{1}{3}$ (en tredjedel)', isCorrect: false },
            ],
            solution: 'Når høyden halveres, halveres også radiusen (formlike figurer). Volumet er proporsjonalt med $r^2 \\cdot h$, altså $(\\frac{1}{2})^2 \\cdot \\frac{1}{2} = \\frac{1}{8}$.',
          },
        ],
      },
    },

    {
      id: '9-9-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Kjegler og pyramider er «spisse» versjoner av sylindere og prismer. Den store innsikten er **tredjedelsregelen**:

| Figur | Volum | Overflate |
|-------|-------|-----------|
| Pyramide | $V = \\frac{1}{3} G \\cdot h$ | $O = G + M$ (sideflater) |
| Pyramide (kvadratisk) | $V = \\frac{1}{3} s^2 h$ | $O = s^2 + 2sl$ |
| Kjegle | $V = \\frac{1}{3} \\pi r^2 h$ | $O = \\pi r^2 + \\pi r s$ |

Viktige verktøy:
- **Skråhøyde** for kjegle: $s = \\sqrt{r^2 + h^2}$ (Pytagoras)
- **Skråhøyde** for pyramide (kvadratisk): $l = \\sqrt{h^2 + (s/2)^2}$
- **Formlike figurer**: Når høyden endres med en faktor $k$, endres radiusen med $k$ og volumet med $k^3$

Tredjedelsregelen gjelder uansett grunnflatens form og uansett om figuren er rett eller skjev.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3 NARRATIV: Kule og sammensatte figurer
// ============================================================================

export const CHAPTER_9_9_3_NARRATIV: TextbookChapter = {
  id: '9-9-3-narrativ',
  courseId: '9',
  chapterNumber: '9.3',
  title: 'Kule og sammensatte figurer',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av kuler og sammensatte romfigurer -- fra basketballer og jordkloden til siloer og blyanter -- der vi kombinerer alt vi har lært om 3D-geometri.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum av tredimensjonale figurar',
  ],
  linkedChapterId: '9-9-3',
  content: [
    {
      id: '9-9-3-n-intro',
      type: 'text',
      content: `## Den perfekte formen

Av alle romfigurer er kulen den mest «perfekte». Ingen kanter, ingen hjørner -- bare en jevnt buet overflate der hvert eneste punkt er nøyaktig like langt fra sentrum. Baller, jordkloden, såpebobler og appelsiner -- kuler er overalt.

Det som gjør kulen spesiell matematisk, er at den har det **minste overflatearealet** for et gitt volum. Naturen vet dette: såpebobler former seg til kuler fordi overflatespenningen minimerer overflaten.

I dette kapittelet lærer vi formlene for kuler, og deretter kombinerer vi alt vi har lært for å takle **sammensatte figurer** -- romfigurer som er bygd opp av flere enkle figurer.`,
    },

    {
      id: '9-9-3-n-section1',
      type: 'text',
      content: `## Kuleformlene

For en kule med radius $r$ har vi:

**Volum:**
$$V = \\frac{4}{3} \\pi r^3$$

**Overflate:**
$$O = 4\\pi r^2$$

Overflaten er nøyaktig **fire ganger** arealet av en storsirkel ($\\pi r^2$). Du kan tenke på det slik: hvis du kapper en appelsin i to og presser skallbitene flatt, dekker de nøyaktig fire sirkler med same radius.

En basketball med diameter $24$ cm har radius $r = 12$ cm. Volumet er $V = \\frac{4}{3}\\pi \\cdot 12^3 = \\frac{4}{3}\\pi \\cdot 1728 = 2304\\pi \\approx 7238 \\text{ cm}^3 \\approx 7{,}2$ liter. Overflaten er $O = 4\\pi \\cdot 144 = 576\\pi \\approx 1810 \\text{ cm}^2$.

For en **halvkule** halverer vi volumet og legger til den flate sirkelflaten:
- Volum: $V = \\frac{2}{3}\\pi r^3$
- Overflate: $O = 2\\pi r^2 + \\pi r^2 = 3\\pi r^2$ (buet del + flat sirkel)

En vakker sammenheng oppdaget av **Arkimedes** for over 2000 år siden: Hvis en kule passer perfekt inni en sylinder (same radius og høyde $= 2r$), er kulens volum $\\frac{2}{3}$ av sylinderens volum, og kulens overflate er lik sylinderens mantelflate ($4\\pi r^2$).`,
    },

    {
      id: '9-9-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-9-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kuler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-9-3-n-quiz1-q0',
            task: 'En kule har radius $6$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$288\\pi \\approx 905 \\text{ cm}^3$', isCorrect: true },
              { id: 'b', text: '$144\\pi \\approx 452 \\text{ cm}^3$', isCorrect: false },
              { id: 'c', text: '$864\\pi \\approx 2714 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$216\\pi \\approx 679 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = \\frac{4}{3}\\pi \\cdot 6^3 = \\frac{4}{3}\\pi \\cdot 216 = 288\\pi \\approx 905 \\text{ cm}^3$.',
          },
          {
            id: '9-9-3-n-quiz1-q1',
            task: 'En kule har diameter $10$ cm. Hva er overflatearealet?',
            options: [
              { id: 'a', text: '$400\\pi \\approx 1257 \\text{ cm}^2$', isCorrect: false },
              { id: 'b', text: '$100\\pi \\approx 314 \\text{ cm}^2$', isCorrect: true },
              { id: 'c', text: '$200\\pi \\approx 628 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$50\\pi \\approx 157 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: 'Radius $r = 5$ cm. $O = 4\\pi \\cdot 5^2 = 100\\pi \\approx 314 \\text{ cm}^2$.',
          },
          {
            id: '9-9-3-n-quiz1-q2',
            task: 'En kule passer perfekt inni en sylinder. Kulens volum er en andel av sylinderens volum. Hvilken?',
            options: [
              { id: 'a', text: '$\\frac{1}{2}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{3}$', isCorrect: false },
              { id: 'c', text: '$\\frac{2}{3}$', isCorrect: true },
              { id: 'd', text: '$\\frac{3}{4}$', isCorrect: false },
            ],
            solution: 'Sylinderens volum er $\\pi r^2 \\cdot 2r = 2\\pi r^3$. Kulens volum er $\\frac{4}{3}\\pi r^3$. Forholdet er $\\frac{4/3}{2} = \\frac{2}{3}$. (Arkimedes\' resultat.)',
          },
        ],
      },
    },

    {
      id: '9-9-3-n-section2',
      type: 'text',
      content: `## Sammensatte figurer -- som å bygge med LEGO

I virkeligheten er de fleste objekter ikke bare én enkel form. En blyant er en sylinder med en kjegle på toppen. En silo er en sylinder med en halvkule som tak. En iskrem er en kule plassert på en kjegle. For å finne volum og overflate av slike **sammensatte figurer** bruker vi en enkel strategi:

**For volum:**
1. Del opp figuren i kjente enkle figurer.
2. Beregn volumet av hver del for seg.
3. Legg sammen (eller trekk fra hvis det er hull).

**For overflate:**
1. Identifiser hvilke flater som er **synlige** (ytre flater).
2. Trekk fra flater som er **skjult** inne i figuren (der to deler møtes).
3. Legg sammen de synlige flatearealene.

Det siste punktet er viktig! Når en halvkule sitter oppå en sylinder, er **toppsirkelen** til sylinderen og **bunnsirkelen** til halvkulen skjult -- de er inne i figuren og skal **ikke** telles med i overflaten.

La oss ta et eksempel: En silo med sylinderradius $3$ m og sylinderhøyde $10$ m, med en halvkule som tak. Volumet er $V = \\pi \\cdot 9 \\cdot 10 + \\frac{2}{3}\\pi \\cdot 27 = 90\\pi + 18\\pi = 108\\pi \\approx 339 \\text{ m}^3$. For overflaten tar vi bunnsirkelen ($9\\pi$), sylindermantelen ($60\\pi$) og halvkulens buede del ($18\\pi$), men **ikke** sirkelen der de møtes: $O = 9\\pi + 60\\pi + 18\\pi = 87\\pi \\approx 273 \\text{ m}^2$.`,
    },

    {
      id: '9-9-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-9-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på sammensatte figurer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-9-3-n-quiz2-q0',
            task: 'En iskrem består av en kule (radius $3$ cm) på toppen av en kjegle (radius $3$ cm, høyde $12$ cm). Hva er totalvolumet?',
            options: [
              { id: 'a', text: '$72\\pi \\approx 226 \\text{ cm}^3$', isCorrect: true },
              { id: 'b', text: '$48\\pi \\approx 151 \\text{ cm}^3$', isCorrect: false },
              { id: 'c', text: '$108\\pi \\approx 339 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$36\\pi \\approx 113 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: 'Kule: $V = \\frac{4}{3}\\pi \\cdot 27 = 36\\pi$. Kjegle: $V = \\frac{1}{3}\\pi \\cdot 9 \\cdot 12 = 36\\pi$. Totalt: $36\\pi + 36\\pi = 72\\pi \\approx 226 \\text{ cm}^3$. Morsomhet: kulen og kjeglen har nøyaktig likt volum!',
          },
          {
            id: '9-9-3-n-quiz2-q1',
            task: 'En sylinder med radius $5$ cm og høyde $10$ cm har et kjegleformet hull (same radius, dybde $6$ cm) boret inn fra toppen. Hva er volumet av den gjenværende figuren?',
            options: [
              { id: 'a', text: '$300\\pi \\approx 942 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$200\\pi \\approx 628 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$150\\pi \\approx 471 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$250\\pi \\approx 785 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: 'Sylinder: $250\\pi$. Kjegle (hullet): $\\frac{1}{3}\\pi \\cdot 25 \\cdot 6 = 50\\pi$. Gjenværende: $250\\pi - 50\\pi = 200\\pi \\approx 628 \\text{ cm}^3$.',
          },
          {
            id: '9-9-3-n-quiz2-q2',
            task: 'Når en halvkule sitter oppå en sylinder, hvorfor trekker vi fra to sirkelflater i overflateberegningen?',
            options: [
              { id: 'a', text: 'Fordi halvkulen ikke har noen flat flate', isCorrect: false },
              { id: 'b', text: 'Fordi toppsirkelen til sylinderen og bunnsirkelen til halvkulen er skjult inne i figuren', isCorrect: true },
              { id: 'c', text: 'Fordi vi bare teller mantelflatene', isCorrect: false },
              { id: 'd', text: 'Vi trekker ikke fra -- vi legger til', isCorrect: false },
            ],
            solution: 'Der sylinder og halvkule møtes, er det to sirkelflater (en fra hver figur) som er skjult inne i den sammensatte figuren. Disse er ikke del av ytterflaten og skal ikke telles med. Vi regner: bunn + sylindermantel + halvkulens buede flate.',
          },
        ],
      },
    },

    {
      id: '9-9-3-n-section3',
      type: 'text',
      content: `## Tennisballer, sjokolade og tomrom

Et morsomt problem: Tre tennisballer (diameter $6{,}7$ cm) stables i en sylindrisk boks. Boksen har radius $3{,}35$ cm og høyde $3 \\cdot 6{,}7 = 20{,}1$ cm.

Boksens volum: $V_{\\text{boks}} = \\pi \\cdot 3{,}35^2 \\cdot 20{,}1 \\approx 708{,}7 \\text{ cm}^3$.
Ballenes volum: $V_{\\text{baller}} = 3 \\cdot \\frac{4}{3}\\pi \\cdot 3{,}35^3 \\approx 472{,}4 \\text{ cm}^3$.
Tomrommet: $708{,}7 - 472{,}4 = 236{,}3 \\text{ cm}^3$, som er $\\frac{236{,}3}{708{,}7} \\approx 33{,}3\\%$.

Omtrent en tredjedel av boksen er tom luft! Og dette gjelder uansett hvor store ballene er -- det er alltid $\\frac{1}{3}$.

Et annet eksempel: Seks kulerunde sjokolader (diameter $4$ cm) i en $3 \\times 2$-eske. Esken måler $12 \\times 8 \\times 4$ cm med volum $384 \\text{ cm}^3$. Sjokoladene har totalt volum $6 \\cdot \\frac{4}{3}\\pi \\cdot 2^3 = 64\\pi \\approx 201 \\text{ cm}^3$. Nesten halvparten ($47{,}6\\%$) av esken er tom plass!

Disse problemene illustrerer et dypt matematisk spørsmål: **pakkeproblemet** -- hvordan fyller man rom mest effektivt med kuler?`,
    },

    {
      id: '9-9-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-9-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kuler og tomrom:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-9-3-n-quiz3-q0',
            task: 'Jordkloden har radius omtrent $6371$ km. Hva er jordas overflate (omtrent)?',
            options: [
              { id: 'a', text: '$510$ millioner $\\text{km}^2$', isCorrect: true },
              { id: 'b', text: '$128$ millioner $\\text{km}^2$', isCorrect: false },
              { id: 'c', text: '$1080$ milliarder $\\text{km}^2$', isCorrect: false },
              { id: 'd', text: '$40\\,000$ $\\text{km}^2$', isCorrect: false },
            ],
            solution: '$O = 4\\pi \\cdot 6371^2 = 4\\pi \\cdot 40\\,589\\,641 \\approx 510\\,000\\,000 \\text{ km}^2 = 510$ millioner $\\text{km}^2$.',
          },
          {
            id: '9-9-3-n-quiz3-q1',
            task: 'Tre tennisballer i en sylindrisk boks: hvilken andel av boksen er tom luft?',
            options: [
              { id: 'a', text: 'Omtrent $25\\%$', isCorrect: false },
              { id: 'b', text: 'Omtrent $33\\%$', isCorrect: true },
              { id: 'c', text: 'Omtrent $50\\%$', isCorrect: false },
              { id: 'd', text: 'Omtrent $10\\%$', isCorrect: false },
            ],
            solution: 'Andelen tomrom er alltid $1 - \\frac{2}{3} = \\frac{1}{3} \\approx 33{,}3\\%$ for tre kuler stablet i en sylinder med perfekt passform.',
          },
        ],
      },
    },

    {
      id: '9-9-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Vi har utforsket kuler og lært å kombinere romfigurer.

| Figur | Volum | Overflate |
|-------|-------|-----------|
| Kule | $V = \\frac{4}{3}\\pi r^3$ | $O = 4\\pi r^2$ |
| Halvkule | $V = \\frac{2}{3}\\pi r^3$ | $O = 3\\pi r^2$ (buet + flat) |

For **sammensatte figurer**:
- **Volum**: Del opp, beregn hver del, og legg sammen (eller trekk fra for hull)
- **Overflate**: Legg sammen synlige flater, og **trekk fra skjulte flater** der deler møtes

Arkimedes' vakre resultat: En kule innskrevet i en sylinder har $\\frac{2}{3}$ av sylinderens volum og lik mantelflate. Denne sammenhengen er så elegant at Arkimedes ba om at den ble gravert på gravstøtten hans.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_9_1_NARRATIV,
  CHAPTER_9_9_2_NARRATIV,
  CHAPTER_9_9_3_NARRATIV,
];
