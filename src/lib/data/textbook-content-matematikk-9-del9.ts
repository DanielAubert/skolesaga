/**
 * Tekstbok kapitler for Matematikk 9 – Del 9: Romgeometri (KM237)
 *
 * Innhold:
 * 9.1 Prisme og sylinder – overflate og volum
 * 9.2 Kjegle og pyramide
 * 9.3 Kule og sammensatte figurer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// 9.1 Prisme og sylinder – overflate og volum
// ============================================================================

export const CHAPTER_9_9_1: TextbookChapter = {
  id: '9-9-1',
  courseId: '9',
  chapterNumber: '9.1',
  title: 'Prisme og sylinder – overflate og volum',
  description: 'Lær å beregne overflate og volum av prismer og sylindere. Vi utforsker formlene og bruker dem i praktiske oppgaver.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og argumentere for formlar for areal og volum av tredimensjonale figurar'],
  content: [
    // ---- Intro ----
    {
      id: '9-9-1-intro',
      type: 'text',
      content: `## Romgeometri – prismer og sylindere

I hverdagen er vi omgitt av tredimensjonale figurer: bokser, hermetikkbokser, rør og bygninger. For å beskrive disse figurene trenger vi begreper som **overflate** og **volum**.

**Volum** forteller oss hvor mye plass en figur tar opp, og måles i kubikkenheter ($\\text{cm}^3$, $\\text{dm}^3$, $\\text{m}^3$ osv.). **Overflate** er det totale arealet av alle flatene som omslutter figuren, og måles i kvadratenheter ($\\text{cm}^2$, $\\text{m}^2$ osv.).

I dette kapittelet skal vi jobbe med to viktige typer romfigurer:
- **Prismer** – figurer med to like, parallelle grunnflater og rette sidevegger
- **Sylindere** – figurer med to sirkulære grunnflater forbundet av en buet sideflate

Begge disse figurene har det til felles at tverrsnittet er likt hele veien fra bunn til topp.`,
    },

    // ---- Definisjon: Prisme ----
    {
      id: '9-9-1-def-1',
      type: 'definition',
      title: 'Prisme',
      content: `Et **prisme** er en romfigur med to kongruente (like store) og parallelle grunnflater. Sideflatene er rektangler.

**Volum av et prisme:**
$$V = G \\cdot h$$
der $G$ er arealet av grunnflaten og $h$ er høyden (avstanden mellom grunnflatene).

**Overflate av et prisme:**
$$O = 2G + M$$
der $M$ er mantelen (summen av arealene til alle sideflatene).

For et **rektangulært prisme** (boks) med lengde $l$, bredde $b$ og høyde $h$:
$$V = l \\cdot b \\cdot h$$
$$O = 2(l \\cdot b + l \\cdot h + b \\cdot h)$$

For et **trekantet prisme** med trekantet grunnflate med grunnlinje $g$ og høyde $h_t$, og prismehøyde $h$:
$$V = \\frac{g \\cdot h_t}{2} \\cdot h$$`,
    },

    // ---- Definisjon: Sylinder ----
    {
      id: '9-9-1-def-2',
      type: 'definition',
      title: 'Sylinder',
      content: `En **sylinder** er en romfigur med to kongruente, parallelle sirkulære grunnflater og en buet sideflate (mantel).

**Volum av en sylinder:**
$$V = \\pi r^2 h$$
der $r$ er radius i grunnflaten og $h$ er høyden.

**Overflate av en sylinder:**
$$O = 2\\pi r^2 + 2\\pi r h$$

Her er $2\\pi r^2$ arealet av de to sirkulære grunnflatene, og $2\\pi r h$ er arealet av mantelen (sideflaten som «brettet ut» blir et rektangel med bredde $2\\pi r$ og høyde $h$).`,
    },

    // ---- Definisjon: Enhetsomregning ----
    {
      id: '9-9-1-def-3',
      type: 'definition',
      title: 'Enhetsomregning for volum',
      content: `Når vi regner med volum er det viktig å kjenne til sammenhengen mellom enhetene:

$$1 \\text{ dm}^3 = 1 \\text{ liter}$$
$$1 \\text{ m}^3 = 1000 \\text{ liter}$$
$$1 \\text{ cm}^3 = 1 \\text{ ml}$$

For å regne om mellom volumenheter:
- $1 \\text{ m}^3 = 1\\,000\\,000 \\text{ cm}^3$
- $1 \\text{ dm}^3 = 1000 \\text{ cm}^3$

Husk: Når du går fra stor enhet til liten enhet, ganger du med $10^3 = 1000$ for hvert steg.`,
    },

    // ---- Eksempel 1: Rektangulært prisme ----
    {
      id: '9-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1 – Rektangulær boks',
      problem: `En eske har lengde $25 \\text{ cm}$, bredde $15 \\text{ cm}$ og høyde $10 \\text{ cm}$.

a) Beregn volumet av esken.
b) Beregn overflaten av esken.
c) Hvor mange liter rommer esken?`,
      solution: `**Løsning:**

a) **Volum:**
$$V = l \\cdot b \\cdot h = 25 \\cdot 15 \\cdot 10 = 3750 \\text{ cm}^3$$

b) **Overflate:**
$$O = 2(l \\cdot b + l \\cdot h + b \\cdot h)$$
$$O = 2(25 \\cdot 15 + 25 \\cdot 10 + 15 \\cdot 10)$$
$$O = 2(375 + 250 + 150) = 2 \\cdot 775 = 1550 \\text{ cm}^2$$

c) **Omregning til liter:**
$$3750 \\text{ cm}^3 = 3750 \\text{ ml} = 3{,}75 \\text{ liter}$$`,
    },

    // ---- Eksempel 2: Trekantet prisme ----
    {
      id: '9-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2 – Trekantet prisme',
      problem: `Et trekantet prisme har en rettvinklet trekantet grunnflate med kateter $3 \\text{ cm}$ og $4 \\text{ cm}$ (og hypotenus $5 \\text{ cm}$). Prismet er $12 \\text{ cm}$ langt.

a) Beregn volumet.
b) Beregn overflaten.`,
      solution: `**Løsning:**

a) **Grunnflatearealet:**
$$G = \\frac{3 \\cdot 4}{2} = 6 \\text{ cm}^2$$

**Volum:**
$$V = G \\cdot h = 6 \\cdot 12 = 72 \\text{ cm}^3$$

b) **Overflate:** Vi trenger arealet av de to trekantene pluss de tre rektanglene (sideflatene).

To trekanter: $2 \\cdot 6 = 12 \\text{ cm}^2$

Tre rektangler (sidelengder $3$, $4$ og $5$ cm, alle med høyde $12$ cm):
$$3 \\cdot 12 + 4 \\cdot 12 + 5 \\cdot 12 = 36 + 48 + 60 = 144 \\text{ cm}^2$$

**Total overflate:**
$$O = 12 + 144 = 156 \\text{ cm}^2$$`,
    },

    // ---- Eksempel 3: Sylinder ----
    {
      id: '9-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3 – Sylinder',
      problem: `En hermetikkboks er formet som en sylinder med radius $4 \\text{ cm}$ og høyde $11 \\text{ cm}$.

a) Beregn volumet. Oppgi svaret eksakt og avrundet til nærmeste hele $\\text{cm}^3$.
b) Beregn overflaten.
c) Hvor mange desiliter rommer boksen?`,
      solution: `**Løsning:**

a) **Volum:**
$$V = \\pi r^2 h = \\pi \\cdot 4^2 \\cdot 11 = 176\\pi \\approx 553 \\text{ cm}^3$$

b) **Overflate:**
$$O = 2\\pi r^2 + 2\\pi r h$$
$$O = 2\\pi \\cdot 4^2 + 2\\pi \\cdot 4 \\cdot 11$$
$$O = 32\\pi + 88\\pi = 120\\pi \\approx 377 \\text{ cm}^2$$

c) **Omregning:**
$$553 \\text{ cm}^3 = 553 \\text{ ml} = 5{,}53 \\text{ dl}$$

Boksen rommer omtrent $5{,}5$ desiliter.`,
    },

    // ---- Oppgave 1 ----
    {
      id: '9-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn volumet av et rektangulært prisme med lengde $8 \\text{ cm}$, bredde $5 \\text{ cm}$ og høyde $3 \\text{ cm}$.',
        solution: '$V = l \\cdot b \\cdot h = 8 \\cdot 5 \\cdot 3 = 120 \\text{ cm}^3$',
        hints: ['Bruk formelen $V = l \\cdot b \\cdot h$'],
      },
    },

    // ---- Oppgave 2 ----
    {
      id: '9-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Beregn overflaten av en boks med lengde $10 \\text{ cm}$, bredde $6 \\text{ cm}$ og høyde $4 \\text{ cm}$.',
        solution: '$O = 2(10 \\cdot 6 + 10 \\cdot 4 + 6 \\cdot 4) = 2(60 + 40 + 24) = 2 \\cdot 124 = 248 \\text{ cm}^2$',
        hints: ['Bruk formelen $O = 2(lb + lh + bh)$', 'Husk at boksen har seks flater: to bunner, to sider, en front og en bakside'],
      },
    },

    // ---- Oppgave 3 ----
    {
      id: '9-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'En sylinder har radius $3 \\text{ cm}$ og høyde $10 \\text{ cm}$. Beregn volumet. Oppgi svaret eksakt med $\\pi$ og avrundet til nærmeste hele $\\text{cm}^3$.',
        solution: '$V = \\pi r^2 h = \\pi \\cdot 3^2 \\cdot 10 = 90\\pi \\approx 283 \\text{ cm}^3$',
        hints: ['Bruk formelen $V = \\pi r^2 h$'],
      },
    },

    // ---- Oppgave 4 ----
    {
      id: '9-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sylinder har diameter $14 \\text{ cm}$ og høyde $20 \\text{ cm}$. Beregn overflaten av sylinderen.',
        solution: 'Radius $r = 7 \\text{ cm}$.\n\n$O = 2\\pi r^2 + 2\\pi r h = 2\\pi \\cdot 7^2 + 2\\pi \\cdot 7 \\cdot 20 = 98\\pi + 280\\pi = 378\\pi \\approx 1188 \\text{ cm}^2$',
        hints: ['Husk at radius er halve diameteren', 'Overflaten består av to sirkler og en mantelflate'],
      },
    },

    // ---- Oppgave 5 ----
    {
      id: '9-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-9-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et trekantet prisme har en likesidet trekant som grunnflate med side $6 \\text{ cm}$. Prismet er $15 \\text{ cm}$ høyt. Beregn volumet.\n\nHint: Arealet av en likesidet trekant med side $s$ er $G = \\frac{s^2 \\sqrt{3}}{4}$.',
        solution: 'Grunnflatearealet: $G = \\frac{6^2 \\sqrt{3}}{4} = \\frac{36\\sqrt{3}}{4} = 9\\sqrt{3} \\approx 15{,}6 \\text{ cm}^2$\n\nVolum: $V = G \\cdot h = 9\\sqrt{3} \\cdot 15 = 135\\sqrt{3} \\approx 234 \\text{ cm}^3$',
        hints: ['Bruk formelen for arealet av en likesidet trekant', 'Volumet er grunnflatearealet ganget med høyden'],
      },
    },

    // ---- Oppgave 6 ----
    {
      id: '9-9-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-9-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et akvarium har form som et rektangulært prisme med lengde $80 \\text{ cm}$, bredde $40 \\text{ cm}$ og høyde $50 \\text{ cm}$. Akvariet fylles med vann til $5 \\text{ cm}$ under kanten.\n\na) Hvor mange liter vann er det i akvariet?\nb) Hvor mye glass trengs det for å lage akvariet (uten lokk)?',
        solution: 'a) Vannhøyden er $50 - 5 = 45 \\text{ cm}$.\n\n$V_{\\text{vann}} = 80 \\cdot 40 \\cdot 45 = 144\\,000 \\text{ cm}^3 = 144 \\text{ liter}$\n\nb) Akvariet har ingen topp (uten lokk), så vi trenger bunn + fire sidevegger:\n\nBunn: $80 \\cdot 40 = 3200 \\text{ cm}^2$\nTo langvegger: $2 \\cdot 80 \\cdot 50 = 8000 \\text{ cm}^2$\nTo kortvegger: $2 \\cdot 40 \\cdot 50 = 4000 \\text{ cm}^2$\n\n$O = 3200 + 8000 + 4000 = 15\\,200 \\text{ cm}^2 = 1{,}52 \\text{ m}^2$',
        hints: ['Vannhøyden er ikke det samme som akvariet sin høyde', 'Et akvarium uten lokk har fem flater, ikke seks'],
      },
    },

    // ---- Oppgave 7 ----
    {
      id: '9-9-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-9-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'En vannbeholder er formet som en sylinder med radius $1{,}2 \\text{ m}$ og høyde $3 \\text{ m}$.\n\na) Beregn volumet i kubikkmeter.\nb) Hvor mange liter vann rommer beholderen?',
        solution: 'a) $V = \\pi r^2 h = \\pi \\cdot 1{,}2^2 \\cdot 3 = \\pi \\cdot 1{,}44 \\cdot 3 = 4{,}32\\pi \\approx 13{,}6 \\text{ m}^3$\n\nb) $13{,}6 \\text{ m}^3 = 13{,}6 \\cdot 1000 = 13\\,600 \\text{ liter}$',
        hints: ['$1 \\text{ m}^3 = 1000 \\text{ liter}$'],
      },
    },

    // ---- Oppgave 8 ----
    {
      id: '9-9-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-9-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Et rør er formet som en hul sylinder. Den ytre radiusen er $5 \\text{ cm}$ og den indre radiusen er $4 \\text{ cm}$. Røret er $2 \\text{ m}$ langt.\n\na) Beregn volumet av materialet i røret.\nb) Hvor mange liter vann kan røret transportere (indre volum)?',
        solution: 'a) Volumet av materialet er differansen mellom det ytre og det indre volumet:\n\n$V_{\\text{materiale}} = \\pi R^2 h - \\pi r^2 h = \\pi h(R^2 - r^2)$\n$V_{\\text{materiale}} = \\pi \\cdot 200 \\cdot (5^2 - 4^2) = \\pi \\cdot 200 \\cdot 9 = 1800\\pi \\approx 5655 \\text{ cm}^3$\n\nb) $V_{\\text{indre}} = \\pi r^2 h = \\pi \\cdot 4^2 \\cdot 200 = 3200\\pi \\approx 10\\,053 \\text{ cm}^3 \\approx 10{,}1 \\text{ liter}$',
        hints: ['Husk å omregne meter til centimeter: $2 \\text{ m} = 200 \\text{ cm}$', 'Volumet av materialet er ytre volum minus indre volum'],
      },
    },

    // ---- Oppgave 9 ----
    {
      id: '9-9-1-ex-9',
      type: 'exercise',
      exercise: {
        id: '9-9-1-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En sylinderformet beholder skal lages slik at den rommer nøyaktig $1$ liter ($1000 \\text{ cm}^3$). Diameteren skal være lik høyden.\n\na) Sett opp en ligning og finn radius.\nb) Beregn overflaten av beholderen.',
        solution: 'a) Vi har $d = h$, altså $h = 2r$. Setter inn i volumformelen:\n\n$V = \\pi r^2 h = \\pi r^2 \\cdot 2r = 2\\pi r^3 = 1000$\n\n$r^3 = \\frac{1000}{2\\pi} = \\frac{500}{\\pi} \\approx 159{,}15$\n\n$r = \\sqrt[3]{\\frac{500}{\\pi}} \\approx 5{,}42 \\text{ cm}$\n\nb) Høyden $h = 2r \\approx 10{,}84 \\text{ cm}$.\n\n$O = 2\\pi r^2 + 2\\pi r h = 2\\pi r^2 + 2\\pi r \\cdot 2r = 6\\pi r^2$\n$O = 6\\pi \\cdot 5{,}42^2 \\approx 6\\pi \\cdot 29{,}4 \\approx 554 \\text{ cm}^2$',
        hints: ['La $h = 2r$ (diameter lik høyde)', 'Sett inn i volumformelen og løs for $r$'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-9-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Prisme**: En romfigur med to like, parallelle grunnflater og rette sidevegger. Volumet er $V = G \\cdot h$ der $G$ er grunnflatearealet og $h$ er høyden. Overflaten er $O = 2G + M$ der $M$ er mantelen (summen av sideflatene).
- **Sylinder**: En romfigur med to sirkulære grunnflater. Volumet er $V = \\pi r^2 h$ og overflaten er $O = 2\\pi r^2 + 2\\pi r h$.
- **Enhetsomregning**: $1 \\text{ dm}^3 = 1$ liter, $1 \\text{ m}^3 = 1000$ liter, $1 \\text{ cm}^3 = 1$ ml.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Prisme | Romfigur med to kongruente, parallelle grunnflater og rektangulære sideflater |
| Sylinder | Romfigur med to sirkulære grunnflater og buet sideflate |
| Grunnflate ($G$) | Arealet av bunn- eller toppflaten |
| Mantel ($M$) | Summen av sideflatenes areal |
| Volum | Hvor mye plass figuren tar opp, målt i kubikkenheter |
| Overflate | Det totale arealet av alle ytre flater |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// 9.2 Kjegle og pyramide
// ============================================================================

export const CHAPTER_9_9_2: TextbookChapter = {
  id: '9-9-2',
  courseId: '9',
  chapterNumber: '9.2',
  title: 'Kjegle og pyramide',
  description: 'Lær å beregne volum og overflate av kjegler og pyramider. Vi ser på sammenhengen mellom disse figurene og prismer og sylindere.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og argumentere for formlar for areal og volum av tredimensjonale figurar'],
  content: [
    // ---- Intro ----
    {
      id: '9-9-2-intro',
      type: 'text',
      content: `## Kjegler og pyramider

Kjegler og pyramider er romfigurer som smalner av mot en spiss topp. Tenk på en iskremkjegle, et telt, eller pyramidene i Egypt!

Den store nøkkelen til å forstå disse figurene er denne sammenhengen:

> Volumet av en kjegle eller pyramide er **en tredjedel** av volumet til en tilsvarende sylinder eller prisme med samme grunnflate og høyde.

Dette betyr at hvis du fyller en kjegle med vann og tømmer den i en sylinder med samme radius og høyde, må du gjøre det **tre ganger** for å fylle sylinderen.

Vi skal også lære om **skråhøyde**, som er viktig når vi beregner overflaten av disse figurene.`,
    },

    // ---- Definisjon: Pyramide ----
    {
      id: '9-9-2-def-1',
      type: 'definition',
      title: 'Pyramide',
      content: `En **pyramide** er en romfigur med én grunnflate (polygon) og trekantede sideflater som møtes i ett punkt (toppen).

**Volum av en pyramide:**
$$V = \\frac{1}{3} G \\cdot h$$
der $G$ er arealet av grunnflaten og $h$ er høyden (vinkelrett avstand fra grunnflaten til toppen).

**Overflate av en pyramide:**
$$O = G + M$$
der $M$ er summen av arealene til alle de trekantede sideflatene.

For en **rett pyramide med kvadratisk grunnflate** (side $s$) og skråhøyde $l$:
$$O = s^2 + 4 \\cdot \\frac{s \\cdot l}{2} = s^2 + 2sl$$

**Skråhøyde** ($l$) er avstanden fra midten av en grunnflatekant til toppen, målt langs sideflaten.`,
    },

    // ---- Definisjon: Kjegle ----
    {
      id: '9-9-2-def-2',
      type: 'definition',
      title: 'Kjegle',
      content: `En **kjegle** er en romfigur med én sirkulær grunnflate og en buet sideflate som smalner mot et punkt (toppen).

**Volum av en kjegle:**
$$V = \\frac{1}{3} \\pi r^2 h$$
der $r$ er radius i grunnflaten og $h$ er høyden.

**Overflate av en kjegle:**
$$O = \\pi r^2 + \\pi r s$$
der $s$ er **skråhøyden** (avstanden fra kanten av grunnflaten til toppen langs sideflaten).

**Sammenhengen mellom $h$, $r$ og $s$:** Høyden, radiusen og skråhøyden danner en rettvinklet trekant:
$$s = \\sqrt{r^2 + h^2}$$

Mantelen (sideflaten) «brettet ut» blir en sirkelsektor med areal $\\pi r s$.`,
    },

    // ---- Definisjon: Tredjedelsregelen ----
    {
      id: '9-9-2-def-3',
      type: 'definition',
      title: 'Tredjedelsregelen',
      content: `For alle spisse figurer (pyramider og kjegler) gjelder:

$$V_{\\text{spiss figur}} = \\frac{1}{3} \\cdot V_{\\text{tilsvarende prisme/sylinder}}$$

Det vil si:
- $V_{\\text{pyramide}} = \\frac{1}{3} \\cdot G \\cdot h$
- $V_{\\text{kjegle}} = \\frac{1}{3} \\cdot \\pi r^2 h$

Denne regelen gjelder uansett hvilken form grunnflaten har, og uansett om toppen er rett over sentrum av grunnflaten eller ikke.`,
    },

    // ---- Eksempel 1: Pyramide ----
    {
      id: '9-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1 – Pyramide med kvadratisk grunnflate',
      problem: `En rett pyramide har en kvadratisk grunnflate med side $6 \\text{ cm}$ og høyde $8 \\text{ cm}$.

a) Beregn volumet.
b) Finn skråhøyden.
c) Beregn overflaten.`,
      solution: `**Løsning:**

a) **Volum:**
$$G = 6^2 = 36 \\text{ cm}^2$$
$$V = \\frac{1}{3} G \\cdot h = \\frac{1}{3} \\cdot 36 \\cdot 8 = 96 \\text{ cm}^3$$

b) **Skråhøyde:** Skråhøyden $l$ går fra midten av en grunnflatekant til toppen. Avstanden fra sentrum av grunnflaten til midten av en kant er $\\frac{s}{2} = \\frac{6}{2} = 3 \\text{ cm}$.

Vi bruker Pytagoras:
$$l = \\sqrt{h^2 + \\left(\\frac{s}{2}\\right)^2} = \\sqrt{8^2 + 3^2} = \\sqrt{64 + 9} = \\sqrt{73} \\approx 8{,}54 \\text{ cm}$$

c) **Overflate:**
$$O = s^2 + 2sl = 36 + 2 \\cdot 6 \\cdot 8{,}54 = 36 + 102{,}5 \\approx 138{,}5 \\text{ cm}^2$$`,
    },

    // ---- Eksempel 2: Kjegle ----
    {
      id: '9-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2 – Kjegle',
      problem: `En kjegle har radius $5 \\text{ cm}$ og høyde $12 \\text{ cm}$.

a) Beregn volumet.
b) Finn skråhøyden.
c) Beregn overflaten.`,
      solution: `**Løsning:**

a) **Volum:**
$$V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi \\cdot 5^2 \\cdot 12 = \\frac{300\\pi}{3} = 100\\pi \\approx 314 \\text{ cm}^3$$

b) **Skråhøyde:**
$$s = \\sqrt{r^2 + h^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13 \\text{ cm}$$

c) **Overflate:**
$$O = \\pi r^2 + \\pi r s = \\pi \\cdot 25 + \\pi \\cdot 5 \\cdot 13 = 25\\pi + 65\\pi = 90\\pi \\approx 283 \\text{ cm}^2$$`,
    },

    // ---- Eksempel 3: Sammenligning ----
    {
      id: '9-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3 – Kjegle vs. sylinder',
      problem: `En kjegle og en sylinder har begge radius $4 \\text{ cm}$ og høyde $9 \\text{ cm}$.

a) Beregn volumet av sylinderen.
b) Beregn volumet av kjeglen.
c) Vis at volumet av kjeglen er nøyaktig en tredjedel av volumet til sylinderen.`,
      solution: `**Løsning:**

a) **Sylinder:**
$$V_{\\text{syl}} = \\pi r^2 h = \\pi \\cdot 4^2 \\cdot 9 = 144\\pi \\approx 452 \\text{ cm}^3$$

b) **Kjegle:**
$$V_{\\text{kjegle}} = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\cdot 144\\pi = 48\\pi \\approx 151 \\text{ cm}^3$$

c) **Sammenligning:**
$$\\frac{V_{\\text{kjegle}}}{V_{\\text{syl}}} = \\frac{48\\pi}{144\\pi} = \\frac{48}{144} = \\frac{1}{3} \\checkmark$$

Kjeglevolumet er nøyaktig $\\frac{1}{3}$ av sylindervolumet, slik formelen sier.`,
    },

    // ---- Oppgave 1 ----
    {
      id: '9-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En pyramide har en rektangulær grunnflate med lengde $10 \\text{ cm}$ og bredde $6 \\text{ cm}$. Høyden er $9 \\text{ cm}$. Beregn volumet.',
        solution: '$G = 10 \\cdot 6 = 60 \\text{ cm}^2$\n\n$V = \\frac{1}{3} \\cdot 60 \\cdot 9 = 180 \\text{ cm}^3$',
        hints: ['Bruk formelen $V = \\frac{1}{3} G \\cdot h$'],
      },
    },

    // ---- Oppgave 2 ----
    {
      id: '9-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'En kjegle har radius $3 \\text{ cm}$ og høyde $7 \\text{ cm}$. Beregn volumet. Oppgi svaret eksakt med $\\pi$ og avrundet.',
        solution: '$V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi \\cdot 9 \\cdot 7 = 21\\pi \\approx 66 \\text{ cm}^3$',
        hints: ['Bruk formelen $V = \\frac{1}{3} \\pi r^2 h$'],
      },
    },

    // ---- Oppgave 3 ----
    {
      id: '9-9-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'En kjegle har radius $6 \\text{ cm}$ og høyde $8 \\text{ cm}$. Finn skråhøyden $s$.',
        solution: '$s = \\sqrt{r^2 + h^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10 \\text{ cm}$',
        hints: ['Bruk Pytagoras: $s = \\sqrt{r^2 + h^2}$'],
      },
    },

    // ---- Oppgave 4 ----
    {
      id: '9-9-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En rett pyramide har en kvadratisk grunnflate med side $10 \\text{ cm}$. Skråhøyden er $13 \\text{ cm}$.\n\na) Beregn overflaten.\nb) Finn høyden til pyramiden.\nc) Beregn volumet.',
        solution: 'a) $O = s^2 + 2sl = 100 + 2 \\cdot 10 \\cdot 13 = 100 + 260 = 360 \\text{ cm}^2$\n\nb) Avstanden fra sentrum til midten av en kant er $\\frac{s}{2} = 5 \\text{ cm}$.\n\n$h = \\sqrt{l^2 - \\left(\\frac{s}{2}\\right)^2} = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12 \\text{ cm}$\n\nc) $V = \\frac{1}{3} \\cdot 100 \\cdot 12 = 400 \\text{ cm}^3$',
        hints: ['For overflaten: $O = s^2 + 2sl$', 'For høyden: Bruk Pytagoras med skråhøyden og halve sidens lengde'],
      },
    },

    // ---- Oppgave 5 ----
    {
      id: '9-9-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-9-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En kjegle har radius $7 \\text{ cm}$ og skråhøyde $25 \\text{ cm}$.\n\na) Finn høyden.\nb) Beregn volumet.\nc) Beregn overflaten.',
        solution: 'a) $h = \\sqrt{s^2 - r^2} = \\sqrt{25^2 - 7^2} = \\sqrt{625 - 49} = \\sqrt{576} = 24 \\text{ cm}$\n\nb) $V = \\frac{1}{3} \\pi \\cdot 7^2 \\cdot 24 = \\frac{1}{3} \\cdot 1176\\pi = 392\\pi \\approx 1231 \\text{ cm}^3$\n\nc) $O = \\pi r^2 + \\pi r s = \\pi \\cdot 49 + \\pi \\cdot 7 \\cdot 25 = 49\\pi + 175\\pi = 224\\pi \\approx 703 \\text{ cm}^2$',
        hints: ['Bruk Pytagoras for å finne høyden: $h = \\sqrt{s^2 - r^2}$', 'Overflaten av en kjegle er $O = \\pi r^2 + \\pi r s$'],
      },
    },

    // ---- Oppgave 6 ----
    {
      id: '9-9-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-9-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En pyramideformet sandhaug har en kvadratisk grunnflate med side $3 \\text{ m}$ og høyde $1{,}8 \\text{ m}$. Sand veier omtrent $1600 \\text{ kg/m}^3$. Hvor mye veier sandhaugen?',
        solution: '$G = 3^2 = 9 \\text{ m}^2$\n\n$V = \\frac{1}{3} \\cdot 9 \\cdot 1{,}8 = 5{,}4 \\text{ m}^3$\n\nVekt: $5{,}4 \\cdot 1600 = 8640 \\text{ kg} = 8{,}64 \\text{ tonn}$',
        hints: ['Beregn volumet først, og gang deretter med tettheten til sand'],
      },
    },

    // ---- Oppgave 7 ----
    {
      id: '9-9-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-9-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En trekant med grunnlinje $8 \\text{ cm}$ og høyde $6 \\text{ cm}$ roteres $360°$ rundt høyden. Beskriv romfiguren som oppstår, og beregn volumet.',
        solution: 'Når trekanten roteres rundt høyden, får vi en **kjegle** med radius $r = \\frac{8}{2} = 4 \\text{ cm}$ (halve grunnlinjen) og høyde $h = 6 \\text{ cm}$ (forutsatt at høyden deler grunnlinjen i to like deler, altså en likebeint trekant).\n\nHvis trekanten er rettvinklet med katetene $8 \\text{ cm}$ (grunnlinje) og $6 \\text{ cm}$ (høyde), og den roteres rundt den vertikale kateten ($h = 6$), får vi en kjegle med $r = 8 \\text{ cm}$ og $h = 6 \\text{ cm}$:\n\n$V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi \\cdot 8^2 \\cdot 6 = \\frac{384\\pi}{3} = 128\\pi \\approx 402 \\text{ cm}^3$\n\nMerk: Hvis det er en likebeint trekant som roteres rundt symmetriaksen (høyden), får vi $r = 4 \\text{ cm}$:\n$V = \\frac{1}{3} \\pi \\cdot 4^2 \\cdot 6 = 32\\pi \\approx 101 \\text{ cm}^3$',
        hints: ['Tenk på hva som skjer når en trekant roteres – hvilken romfigur oppstår?', 'Hvilken del av trekanten blir radius, og hvilken del blir høyden?'],
      },
    },

    // ---- Oppgave 8 ----
    {
      id: '9-9-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-9-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kjegleformet trakt har diameter $12 \\text{ cm}$ og høyde $16 \\text{ cm}$. Trakten er fylt med vann til halvparten av høyden.\n\na) Finn radiusen til vannoverflaten.\nb) Beregn volumet av vannet.\nc) Hvor stor andel av kjeglens totale volum er fylt med vann?',
        solution: 'a) Kjeglen har radius $R = 6 \\text{ cm}$ ved høyde $H = 16 \\text{ cm}$. Vannet står ved $h = 8 \\text{ cm}$.\n\nForholdet mellom radius og høyde er konstant (formlike trekanter):\n$$\\frac{r}{h} = \\frac{R}{H} = \\frac{6}{16} = \\frac{3}{8}$$\n$$r = \\frac{3}{8} \\cdot 8 = 3 \\text{ cm}$$\n\nb) $V_{\\text{vann}} = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi \\cdot 3^2 \\cdot 8 = 24\\pi \\approx 75{,}4 \\text{ cm}^3$\n\nc) $V_{\\text{total}} = \\frac{1}{3} \\pi \\cdot 6^2 \\cdot 16 = 192\\pi$\n\n$\\frac{V_{\\text{vann}}}{V_{\\text{total}}} = \\frac{24\\pi}{192\\pi} = \\frac{1}{8}$\n\nBare $\\frac{1}{8}$ (12,5 %) av kjeglen er fylt med vann – selv om vannet står på halve høyden!',
        hints: ['Bruk formlike trekanter for å finne vannets radius', 'Husk at volumet ikke halveres selv om høyden halveres – tenk på hvordan radius også endres'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-9-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Pyramide**: En romfigur med én grunnflate (polygon) og trekantede sideflater som møtes i en topp. Volumet er $V = \\frac{1}{3} G \\cdot h$.
- **Kjegle**: En romfigur med sirkulær grunnflate og buet sideflate som smalner mot en topp. Volumet er $V = \\frac{1}{3} \\pi r^2 h$. Overflaten er $O = \\pi r^2 + \\pi r s$ der $s$ er skråhøyden.
- **Tredjedelsregelen**: Volumet av en kjegle eller pyramide er alltid en tredjedel av volumet til en tilsvarende sylinder eller prisme med samme grunnflate og høyde.
- **Skråhøyde**: For en kjegle gjelder $s = \\sqrt{r^2 + h^2}$ (Pytagoras).

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Pyramide | Romfigur med polygonal grunnflate og trekantede sideflater som møtes i ett punkt |
| Kjegle | Romfigur med sirkulær grunnflate og buet sideflate mot en topp |
| Skråhøyde ($s$) | Avstanden fra grunnflatekanten til toppen langs sideflaten |
| Tredjedelsregelen | $V_{\\text{spiss}} = \\frac{1}{3} \\cdot V_{\\text{tilsvarende prisme/sylinder}}$ |
| Mantelflate | Den buede (eller trekantede) sideflaten til kjegle eller pyramide |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// 9.3 Kule og sammensatte figurer
// ============================================================================

export const CHAPTER_9_9_3: TextbookChapter = {
  id: '9-9-3',
  courseId: '9',
  chapterNumber: '9.3',
  title: 'Kule og sammensatte figurer',
  description: 'Lær om kuleformler og hvordan du beregner volum og overflate av sammensatte romfigurer ved å kombinere formler.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og argumentere for formlar for areal og volum av tredimensjonale figurar'],
  content: [
    // ---- Intro ----
    {
      id: '9-9-3-intro',
      type: 'text',
      content: `## Kuler og sammensatte figurer

Kulen er kanskje den mest «perfekte» romfiguren. Den har ingen kanter, ingen hjørner – bare én jevnt buet overflate. Baller, jordkloden og såpebobler er alle eksempler på kuler.

I dette kapittelet skal vi lære formlene for volum og overflate av kuler. Deretter skal vi jobbe med **sammensatte figurer** – romfigurer som er satt sammen av flere enkle figurer. For å finne volumet eller overflaten av slike figurer må vi kombinere formlene vi har lært.

For eksempel kan en blyant beskrives som en sylinder med en kjegle på toppen, og en silo som en sylinder med en halvkule på toppen.`,
    },

    // ---- Definisjon: Kule ----
    {
      id: '9-9-3-def-1',
      type: 'definition',
      title: 'Kule',
      content: `En **kule** er mengden av alle punkter i rommet som har en gitt avstand $r$ (radius) fra et sentrum.

**Volum av en kule:**
$$V = \\frac{4}{3} \\pi r^3$$

**Overflate av en kule:**
$$O = 4\\pi r^2$$

Legg merke til at overflaten av en kule er nøyaktig **fire ganger** arealet av en storsirkel ($\\pi r^2$).

Halvkule: En halvkule har volum $V = \\frac{2}{3} \\pi r^3$ og overflate $O = 3\\pi r^2$ (buet del $2\\pi r^2$ pluss flat sirkelflate $\\pi r^2$).`,
    },

    // ---- Definisjon: Sammensatte figurer ----
    {
      id: '9-9-3-def-2',
      type: 'definition',
      title: 'Sammensatte figurer',
      content: `En **sammensatt figur** er en romfigur som er satt sammen av to eller flere enkle romfigurer (prismer, sylindere, kjegler, pyramider, kuler osv.).

**Strategi for volumberegning:**
1. Del opp figuren i kjente enkle figurer.
2. Beregn volumet av hver del for seg.
3. Legg sammen (eller trekk fra) delvolumene.

**Strategi for overflateberegning:**
1. Identifiser hvilke flater som er synlige (ytre flater).
2. Trekk fra flater som er «skjult» inne i figuren (der to deler møtes).
3. Legg sammen de synlige flatearealene.

Vær spesielt oppmerksom på at indre flater (der to deler møtes) **ikke** er del av overflaten!`,
    },

    // ---- Eksempel 1: Kule ----
    {
      id: '9-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1 – Kule',
      problem: `En basketball har diameter $24 \\text{ cm}$.

a) Beregn volumet av basketballen.
b) Beregn overflatearealet.`,
      solution: `**Løsning:**

Radius: $r = \\frac{24}{2} = 12 \\text{ cm}$

a) **Volum:**
$$V = \\frac{4}{3} \\pi r^3 = \\frac{4}{3} \\pi \\cdot 12^3 = \\frac{4}{3} \\pi \\cdot 1728 = 2304\\pi \\approx 7238 \\text{ cm}^3$$

Det tilsvarer omtrent $7{,}2$ liter.

b) **Overflate:**
$$O = 4\\pi r^2 = 4\\pi \\cdot 12^2 = 576\\pi \\approx 1810 \\text{ cm}^2$$`,
    },

    // ---- Eksempel 2: Sammensatt figur ----
    {
      id: '9-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2 – Silo (sylinder + halvkule)',
      problem: `En kornsilo har form som en sylinder med en halvkule på toppen. Sylinderen har radius $3 \\text{ m}$ og høyde $10 \\text{ m}$.

a) Beregn det totale volumet av siloen.
b) Beregn den totale overflaten (inkludert bunnen).`,
      solution: `**Løsning:**

a) **Totalvolum:**

Sylinder: $V_1 = \\pi r^2 h = \\pi \\cdot 3^2 \\cdot 10 = 90\\pi$

Halvkule: $V_2 = \\frac{2}{3} \\pi r^3 = \\frac{2}{3} \\pi \\cdot 3^3 = \\frac{2}{3} \\pi \\cdot 27 = 18\\pi$

$$V_{\\text{total}} = 90\\pi + 18\\pi = 108\\pi \\approx 339 \\text{ m}^3$$

b) **Total overflate:**

Vi trenger:
- Bunnen (sirkel): $\\pi r^2 = 9\\pi$
- Sylindermantelen: $2\\pi r h = 2\\pi \\cdot 3 \\cdot 10 = 60\\pi$
- Halvkulen (buet del): $2\\pi r^2 = 2\\pi \\cdot 9 = 18\\pi$

Merk: Vi tar **ikke** med toppsirkelen av sylinderen eller bunnsirkelen av halvkulen, fordi de er skjult (der sylinder og halvkule møtes).

$$O = 9\\pi + 60\\pi + 18\\pi = 87\\pi \\approx 273 \\text{ m}^2$$`,
    },

    // ---- Eksempel 3: Figur med hull ----
    {
      id: '9-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3 – Sylinder med kjegleformet hull',
      problem: `En massiv sylinder med radius $5 \\text{ cm}$ og høyde $10 \\text{ cm}$ har et kjegleformet hull boret inn fra toppen. Hullet har samme radius som sylinderen og dybde $6 \\text{ cm}$.

Beregn volumet av den gjenværende figuren.`,
      solution: `**Løsning:**

Vi beregner volumet av sylinderen og trekker fra volumet av kjeglen.

**Sylindervolum:**
$$V_{\\text{syl}} = \\pi r^2 h = \\pi \\cdot 5^2 \\cdot 10 = 250\\pi$$

**Kjeglevolum (hullet):**
$$V_{\\text{kjegle}} = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi \\cdot 5^2 \\cdot 6 = 50\\pi$$

**Gjenværende volum:**
$$V = V_{\\text{syl}} - V_{\\text{kjegle}} = 250\\pi - 50\\pi = 200\\pi \\approx 628 \\text{ cm}^3$$`,
    },

    // ---- Oppgave 1 ----
    {
      id: '9-9-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'En kule har radius $6 \\text{ cm}$. Beregn volumet. Oppgi svaret eksakt med $\\pi$ og avrundet til nærmeste hele $\\text{cm}^3$.',
        solution: '$V = \\frac{4}{3} \\pi r^3 = \\frac{4}{3} \\pi \\cdot 6^3 = \\frac{4}{3} \\pi \\cdot 216 = 288\\pi \\approx 905 \\text{ cm}^3$',
        hints: ['Bruk formelen $V = \\frac{4}{3} \\pi r^3$'],
      },
    },

    // ---- Oppgave 2 ----
    {
      id: '9-9-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'En kule har diameter $10 \\text{ cm}$. Beregn overflatearealet.',
        solution: 'Radius $r = 5 \\text{ cm}$.\n\n$O = 4\\pi r^2 = 4\\pi \\cdot 25 = 100\\pi \\approx 314 \\text{ cm}^2$',
        hints: ['Husk at radius er halve diameteren', 'Bruk formelen $O = 4\\pi r^2$'],
      },
    },

    // ---- Oppgave 3 ----
    {
      id: '9-9-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Jordkloden har en radius på omtrent $6371 \\text{ km}$. Beregn jordas overflate i $\\text{km}^2$. Oppgi svaret i millioner $\\text{km}^2$.',
        solution: '$O = 4\\pi r^2 = 4\\pi \\cdot 6371^2 = 4\\pi \\cdot 40\\,589\\,641 \\approx 510\\,000\\,000 \\text{ km}^2 = 510 \\text{ millioner km}^2$\n\n(Det faktiske tallet er omtrent $510$ millioner $\\text{km}^2$.)',
        hints: ['Bruk formelen $O = 4\\pi r^2$', 'Bruk kalkulator for å regne ut $6371^2$'],
      },
    },

    // ---- Oppgave 4 ----
    {
      id: '9-9-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En blyant kan beskrives som en sylinder med en kjegle i ene enden (spissen). Sylinderen har diameter $7 \\text{ mm}$ og lengde $17 \\text{ cm}$. Kjeglen har høyde $1 \\text{ cm}$.\n\nBeregn det totale volumet av blyanten. Oppgi svaret i $\\text{mm}^3$.',
        solution: 'Radius $r = 3{,}5 \\text{ mm}$, sylinderlengde $= 170 \\text{ mm}$, kjeglehøyde $= 10 \\text{ mm}$.\n\n$V_{\\text{syl}} = \\pi r^2 h = \\pi \\cdot 3{,}5^2 \\cdot 170 = \\pi \\cdot 12{,}25 \\cdot 170 = 2082{,}5\\pi$\n\n$V_{\\text{kjegle}} = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi \\cdot 12{,}25 \\cdot 10 = \\frac{122{,}5\\pi}{3} \\approx 40{,}83\\pi$\n\n$V_{\\text{total}} = 2082{,}5\\pi + 40{,}83\\pi \\approx 2123{,}3\\pi \\approx 6671 \\text{ mm}^3$',
        hints: ['Regn om alle mål til millimeter først', 'Totalvolumet er sylindervolumet pluss kjeglervolumet'],
      },
    },

    // ---- Oppgave 5 ----
    {
      id: '9-9-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'En halvkule med radius $8 \\text{ cm}$ er plassert oppå en sylinder med samme radius og høyde $15 \\text{ cm}$.\n\na) Beregn totalvolumet.\nb) Beregn den totale overflaten.',
        solution: 'a) $V_{\\text{syl}} = \\pi \\cdot 8^2 \\cdot 15 = 960\\pi$\n\n$V_{\\text{halvkule}} = \\frac{2}{3} \\pi \\cdot 8^3 = \\frac{1024\\pi}{3}$\n\n$V_{\\text{total}} = 960\\pi + \\frac{1024\\pi}{3} = \\frac{2880\\pi + 1024\\pi}{3} = \\frac{3904\\pi}{3} \\approx 4086 \\text{ cm}^3$\n\nb) Overflaten:\n- Bunn (sirkel): $\\pi \\cdot 64 = 64\\pi$\n- Sylinderens mantelflate: $2\\pi \\cdot 8 \\cdot 15 = 240\\pi$\n- Halvkulens buede flate: $2\\pi \\cdot 64 = 128\\pi$\n\n(Toppsirkelen av sylinderen og bunnsirkelen av halvkulen er skjult.)\n\n$O = 64\\pi + 240\\pi + 128\\pi = 432\\pi \\approx 1357 \\text{ cm}^2$',
        hints: ['Husk at der halvkulen og sylinderen møtes, er det en skjult sirkelflate som ikke skal telles med i overflaten', 'Halvkulens buede overflate er $2\\pi r^2$'],
      },
    },

    // ---- Oppgave 6 ----
    {
      id: '9-9-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'En iskrem bestående av en kule plassert på en kjegle. Kulen har radius $3 \\text{ cm}$ og kjeglen har radius $3 \\text{ cm}$ og høyde $12 \\text{ cm}$.\n\nBeregn det totale volumet av iskremen (kule + kjegle).',
        solution: '$V_{\\text{kule}} = \\frac{4}{3} \\pi \\cdot 3^3 = 36\\pi$\n\n$V_{\\text{kjegle}} = \\frac{1}{3} \\pi \\cdot 3^2 \\cdot 12 = 36\\pi$\n\n$V_{\\text{total}} = 36\\pi + 36\\pi = 72\\pi \\approx 226 \\text{ cm}^3$\n\nMorsomhet: Kulen og kjeglen har nøyaktig likt volum!',
        hints: ['Beregn volumet av kulen og kjeglen hver for seg, og legg dem sammen'],
      },
    },

    // ---- Oppgave 7 ----
    {
      id: '9-9-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kule med radius $r$ er plassert inne i en sylinder slik at kulen akkurat berører bunn, topp og sideflatene til sylinderen.\n\na) Hva er høyden og radiusen til sylinderen uttrykt ved $r$?\nb) Vis at volumet av kulen er $\\frac{2}{3}$ av volumet til sylinderen.\nc) Vis at overflaten av kulen er lik mantelflaten til sylinderen.',
        solution: 'a) Sylinderen har radius $r$ og høyde $h = 2r$ (diameteren til kulen).\n\nb) $V_{\\text{syl}} = \\pi r^2 \\cdot 2r = 2\\pi r^3$\n\n$V_{\\text{kule}} = \\frac{4}{3} \\pi r^3$\n\n$\\frac{V_{\\text{kule}}}{V_{\\text{syl}}} = \\frac{\\frac{4}{3}\\pi r^3}{2\\pi r^3} = \\frac{4}{6} = \\frac{2}{3} \\checkmark$\n\nc) Mantelflaten til sylinderen: $M = 2\\pi r \\cdot 2r = 4\\pi r^2$\n\nOverflaten av kulen: $O = 4\\pi r^2$\n\nDe er like! $O_{\\text{kule}} = M_{\\text{syl}} = 4\\pi r^2 \\checkmark$\n\nDette resultatet ble først oppdaget av Arkimedes for over 2000 år siden.',
        hints: ['Tegn figuren – kulen fyller sylinderen akkurat', 'Sylinderens høyde er lik kulens diameter'],
      },
    },

    // ---- Oppgave 8 ----
    {
      id: '9-9-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En tennisballboks er en sylinder som inneholder 3 tennisballer, stablet oppå hverandre. Hver tennisball har diameter $6{,}7 \\text{ cm}$.\n\na) Hva er den minste radius og høyde boksen kan ha?\nb) Beregn volumet av boksen.\nc) Beregn det totale volumet av de 3 tennisballene.\nd) Hvor stor andel av boksen er «tom» (luft)?',
        solution: 'a) Radius: $r = \\frac{6{,}7}{2} = 3{,}35 \\text{ cm}$, Høyde: $h = 3 \\cdot 6{,}7 = 20{,}1 \\text{ cm}$\n\nb) $V_{\\text{boks}} = \\pi r^2 h = \\pi \\cdot 3{,}35^2 \\cdot 20{,}1 = \\pi \\cdot 11{,}2225 \\cdot 20{,}1 \\approx 225{,}6\\pi \\approx 708{,}7 \\text{ cm}^3$\n\nc) $V_{\\text{3 baller}} = 3 \\cdot \\frac{4}{3}\\pi \\cdot 3{,}35^3 = 4\\pi \\cdot 37{,}6 \\approx 150{,}3\\pi \\approx 472{,}4 \\text{ cm}^3$\n\nd) $V_{\\text{luft}} = 708{,}7 - 472{,}4 = 236{,}3 \\text{ cm}^3$\n\nAndel luft: $\\frac{236{,}3}{708{,}7} \\approx 0{,}333 = 33{,}3\\%$\n\nOmtrent en tredjedel av boksen er tom! (Dette er alltid $\\frac{1}{3}$ uansett ballstørrelse.)',
        hints: ['Boksen må ha samme radius som ballene, og høyde lik 3 diametere', 'Beregn volumet av én ball og gang med 3'],
      },
    },

    // ---- Oppgave 9 ----
    {
      id: '9-9-3-ex-9',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kulerund sjokolade har diameter $4 \\text{ cm}$ og er pakket inn i aluminiumsfolie. Sjokoladen skal pakkes i en eske formet som et rektangulært prisme som rommer $2 \\times 3 = 6$ sjokolader i ett lag.\n\na) Hva er de minste dimensjonene til esken?\nb) Beregn volumet av esken.\nc) Beregn det totale volumet av de 6 sjokoladene.\nd) Hvor mange prosent av esken er ubrukt plass?',
        solution: 'a) Hver sjokolade har diameter $4 \\text{ cm}$. Med $2$ i bredden og $3$ i lengden:\n\nLengde: $3 \\cdot 4 = 12 \\text{ cm}$\nBredde: $2 \\cdot 4 = 8 \\text{ cm}$\nHøyde: $4 \\text{ cm}$\n\nb) $V_{\\text{eske}} = 12 \\cdot 8 \\cdot 4 = 384 \\text{ cm}^3$\n\nc) Radius $r = 2 \\text{ cm}$.\n$V_{\\text{6 kuler}} = 6 \\cdot \\frac{4}{3}\\pi \\cdot 2^3 = 6 \\cdot \\frac{32\\pi}{3} = 64\\pi \\approx 201{,}1 \\text{ cm}^3$\n\nd) $V_{\\text{ubrukt}} = 384 - 201{,}1 = 182{,}9 \\text{ cm}^3$\n\nAndel: $\\frac{182{,}9}{384} \\approx 0{,}476 = 47{,}6\\%$\n\nNesten halvparten av esken er tom plass!',
        hints: ['Tenk på hvor mange sjokolader det er i hver retning', 'En kule i en boks fyller omtrent $\\frac{\\pi}{6} \\approx 52{,}4\\%$ av plassen'],
      },
    },

    // ---- Oppgave 10 ----
    {
      id: '9-9-3-ex-10',
      type: 'exercise',
      exercise: {
        id: '9-9-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En vannfontene spruter vann som former en parabel. Vannet lander i et basseng formet som en halvkule med radius $1{,}5 \\text{ m}$. Bassenget tømmes gjennom et rør i bunnen med en hastighet på $20$ liter per minutt.\n\na) Beregn volumet bassenget kan holde (i liter).\nb) Hvor lang tid tar det å tømme et fullt basseng?',
        solution: 'a) $V = \\frac{2}{3} \\pi r^3 = \\frac{2}{3} \\pi \\cdot 1{,}5^3 = \\frac{2}{3} \\pi \\cdot 3{,}375 = 2{,}25\\pi \\approx 7{,}07 \\text{ m}^3$\n\nOmregning: $7{,}07 \\text{ m}^3 = 7070 \\text{ liter}$\n\nb) Tid: $\\frac{7070}{20} = 353{,}5 \\text{ min} \\approx 5 \\text{ timer og } 54 \\text{ minutter}$',
        hints: ['En halvkule har volum $V = \\frac{2}{3}\\pi r^3$', '$1 \\text{ m}^3 = 1000 \\text{ liter}$'],
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '9-9-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kule**: Volumet er $V = \\frac{4}{3} \\pi r^3$ og overflaten er $O = 4\\pi r^2$. Overflaten er nøyaktig fire ganger arealet av en storsirkel.
- **Halvkule**: Volumet er $V = \\frac{2}{3} \\pi r^3$ og overflaten er $O = 3\\pi r^2$ (buet del pluss flat sirkelflate).
- **Sammensatte figurer**: For å finne volum eller overflate av sammensatte romfigurer, deler vi dem opp i kjente enkle figurer, beregner hver del for seg, og legger sammen eller trekker fra. Husk at indre flater (der to deler møtes) ikke er del av overflaten.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kule | Alle punkter med avstand $r$ fra et sentrum; $V = \\frac{4}{3}\\pi r^3$, $O = 4\\pi r^2$ |
| Halvkule | Halv kule; $V = \\frac{2}{3}\\pi r^3$, $O = 3\\pi r^2$ |
| Sammensatt figur | Romfigur satt sammen av flere enkle figurer |
| Indre flater | Flater der to deler møtes, som ikke telles med i overflaten |
| Storsirkel | Sirkel gjennom sentrum av kulen med radius $r$ |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_DEL9_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_9_1,
  CHAPTER_9_9_2,
  CHAPTER_9_9_3,
];
