/**
 * Tekstbok kapitler for 1P - Funksjoner (Andregradsfunksjoner, eksponentialfunksjoner, digital graftegning)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.4: ANDREGRADSFUNKSJONER
// ============================================================================

export const CHAPTER_1P_3_4: TextbookChapter = {
  id: '1p-3-4',
  courseId: '1p',
  chapterNumber: '3.4',
  title: 'Andregradsfunksjoner',
  description: 'Lær om parabler, toppunkt, bunnpunkt og nullpunkter til andregradsfunksjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske eigenskapane til andregradsfunksjonar',
  ],
  content: [
    {
      id: '1p-3-4-intro',
      type: 'text',
      content: `## Hva er en andregradsfunksjon?

Til nå har vi jobbet med lineære funksjoner der grafen er en rett linje. Nå skal vi se på funksjoner der den høyeste potensen av $x$ er 2. Slike funksjoner kalles **andregradsfunksjoner**, og grafene deres er **parabler** -- buede kurver som ligner på en skål eller en bue.

Andregradsfunksjoner dukker opp overalt i praksis: kastebanen til en ball, bremsestrekning for en bil, og sammenhengen mellom sidene i et rektangel og arealet.`,
    },
    {
      id: '1p-3-4-def',
      type: 'definition',
      title: 'Andregradsfunksjon',
      content: `En **andregradsfunksjon** er en funksjon på formen

$$f(x) = ax^2 + bx + c$$

der $a$, $b$ og $c$ er tall, og $a \\neq 0$.

- $a$ kalles **koeffisienten foran $x^2$**
- $b$ kalles **koeffisienten foran $x$**
- $c$ kalles **konstantleddet**

Grafen til en andregradsfunksjon kalles en **parabel**.`,
    },
    {
      id: '1p-3-4-koeff',
      type: 'text',
      content: `## Koeffisientenes betydning

Koeffisientene $a$, $b$ og $c$ bestemmer formen og plasseringen til parabelen:

**Koeffisienten $a$ bestemmer åpningen:**
- Hvis $a > 0$: Parabelen vender oppover (smilefjes) -- den har et **bunnpunkt**
- Hvis $a < 0$: Parabelen vender nedover (sur munn) -- den har et **toppunkt**
- Jo større $|a|$ er, jo smalere er parabelen
- Jo mindre $|a|$ er, jo bredere er parabelen

**Konstantleddet $c$ bestemmer y-aksekrysset:**
- Grafen krysser y-aksen i punktet $(0, c)$`,
    },
    {
      id: '1p-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjenkjenne andregradsfunksjoner',
      problem: `Avgjør hvilke av disse som er andregradsfunksjoner:

a) $f(x) = 3x^2 - 2x + 5$
b) $g(x) = 4x + 7$
c) $h(x) = -x^2 + 6$
d) $k(x) = x^3 - x^2 + 1$`,
      solution: `**Løsning:**

a) $f(x) = 3x^2 - 2x + 5$ -- **Ja**, dette er en andregradsfunksjon med $a = 3$, $b = -2$, $c = 5$.

b) $g(x) = 4x + 7$ -- **Nei**, dette er en lineær funksjon (førstegrads). Det mangler $x^2$-ledd.

c) $h(x) = -x^2 + 6$ -- **Ja**, dette er en andregradsfunksjon med $a = -1$, $b = 0$, $c = 6$.

d) $k(x) = x^3 - x^2 + 1$ -- **Nei**, dette er en tredjegradsfunksjon fordi høyeste potens er 3.`,
    },
    {
      id: '1p-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-3-4-ex-1',
        number: '3.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'For hver andregradsfunksjon, oppgi $a$, $b$ og $c$, og avgjør om parabelen vender oppover eller nedover:',
        subTasks: [
          { label: 'a', task: '$f(x) = 2x^2 + 3x - 1$', solution: '$a = 2$, $b = 3$, $c = -1$. Siden $a > 0$ vender parabelen oppover.', multipleChoiceOptions: ['Oppover, a = 2', 'Nedover, a = 2', 'Oppover, a = 3', 'Nedover, a = -1'] },
          { label: 'b', task: '$g(x) = -4x^2 + x$', solution: '$a = -4$, $b = 1$, $c = 0$. Siden $a < 0$ vender parabelen nedover.', multipleChoiceOptions: ['Nedover, a = -4', 'Oppover, a = -4', 'Nedover, a = 1', 'Oppover, a = 1'] },
          { label: 'c', task: '$h(x) = x^2 - 9$', solution: '$a = 1$, $b = 0$, $c = -9$. Siden $a > 0$ vender parabelen oppover.', multipleChoiceOptions: ['Oppover, a = 1', 'Nedover, a = 1', 'Oppover, a = -9', 'Nedover, a = -9'] },
          { label: 'd', task: '$k(x) = -\\frac{1}{2}x^2 + 4x + 3$', solution: '$a = -\\frac{1}{2}$, $b = 4$, $c = 3$. Siden $a < 0$ vender parabelen nedover.', multipleChoiceOptions: ['Nedover, a = -1/2', 'Oppover, a = -1/2', 'Nedover, a = 4', 'Oppover, a = 3'] },
        ],
        solution: 'a) Oppover  b) Nedover  c) Oppover  d) Nedover',
        hints: ['Se på fortegnet til $a$ (tallet foran $x^2$). Positivt $a$ gir oppovervendt parabel.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-4-symmetri',
      type: 'text',
      content: `## Symmetrilinje, toppunkt og bunnpunkt

En parabel er alltid symmetrisk om en loddrett linje som går gjennom topp- eller bunnpunktet. Denne linjen kalles **symmetrilinjen**.

For funksjonen $f(x) = ax^2 + bx + c$ er symmetrilinjen gitt ved:

$$x = -\\frac{b}{2a}$$

**Toppunkt/bunnpunkt** finner vi ved å sette inn symmetrilinjens $x$-verdi i funksjonen:
- $x$-koordinaten: $x = -\\frac{b}{2a}$
- $y$-koordinaten: $y = f\\left(-\\frac{b}{2a}\\right)$`,
    },
    {
      id: '1p-3-4-def-topp',
      type: 'definition',
      title: 'Toppunkt og bunnpunkt',
      content: `For $f(x) = ax^2 + bx + c$:

- Hvis $a > 0$: Parabelen har et **bunnpunkt** (laveste punkt)
- Hvis $a < 0$: Parabelen har et **toppunkt** (høyeste punkt)

Punktet ligger på symmetrilinjen $x = -\\frac{b}{2a}$.`,
    },
    {
      id: '1p-3-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne bunnpunkt',
      problem: 'Finn bunnpunktet til $f(x) = x^2 - 4x + 7$.',
      solution: `**Løsning:**

Her er $a = 1$, $b = -4$, $c = 7$.

Siden $a = 1 > 0$, vender parabelen oppover og har et bunnpunkt.

$x$-koordinaten til bunnpunktet:
$$x = -\\frac{b}{2a} = -\\frac{-4}{2 \\cdot 1} = \\frac{4}{2} = 2$$

$y$-koordinaten:
$$f(2) = 2^2 - 4 \\cdot 2 + 7 = 4 - 8 + 7 = 3$$

**Bunnpunktet er $(2, 3)$.**

Symmetrilinjen er $x = 2$.`,
    },
    {
      id: '1p-3-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Finne toppunkt -- kastebane',
      problem: `En ball kastes rett opp. Høyden $h$ (i meter) etter $t$ sekunder er gitt ved:

$$h(t) = -5t^2 + 20t + 1{,}5$$

a) Hvor høyt er ballen når den kastes?
b) Når er ballen på sitt høyeste?
c) Hva er den største høyden ballen når?`,
      solution: `**Løsning:**

a) Starthøyden er verdien når $t = 0$:
$$h(0) = -5 \\cdot 0^2 + 20 \\cdot 0 + 1{,}5 = 1{,}5 \\text{ m}$$
Ballen kastes fra $1{,}5$ meter over bakken.

b) Siden $a = -5 < 0$ har parabelen et toppunkt. Vi finner $t$-verdien:
$$t = -\\frac{b}{2a} = -\\frac{20}{2 \\cdot (-5)} = -\\frac{20}{-10} = 2$$
Ballen er på sitt høyeste etter **2 sekunder**.

c) Setter inn $t = 2$:
$$h(2) = -5 \\cdot 2^2 + 20 \\cdot 2 + 1{,}5 = -20 + 40 + 1{,}5 = 21{,}5$$
Den største høyden er $21{,}5$ **meter**.`,
    },
    {
      id: '1p-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-3-4-ex-2',
        number: '3.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn toppunkt eller bunnpunkt:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 6x + 10$', solution: '$x = -\\frac{-6}{2 \\cdot 1} = 3$, $f(3) = 9 - 18 + 10 = 1$. Bunnpunkt $(3, 1)$.', multipleChoiceOptions: ['Bunnpunkt (3, 1)', 'Toppunkt (3, 1)', 'Bunnpunkt (-3, 1)', 'Bunnpunkt (3, 10)'] },
          { label: 'b', task: '$g(x) = -2x^2 + 8x - 3$', solution: '$x = -\\frac{8}{2 \\cdot (-2)} = 2$, $g(2) = -8 + 16 - 3 = 5$. Toppunkt $(2, 5)$.', multipleChoiceOptions: ['Toppunkt (2, 5)', 'Bunnpunkt (2, 5)', 'Toppunkt (-2, 5)', 'Toppunkt (2, -3)'] },
          { label: 'c', task: '$h(x) = 3x^2 + 12x + 7$', solution: '$x = -\\frac{12}{2 \\cdot 3} = -2$, $h(-2) = 12 - 24 + 7 = -5$. Bunnpunkt $(-2, -5)$.', multipleChoiceOptions: ['Bunnpunkt (-2, -5)', 'Toppunkt (-2, -5)', 'Bunnpunkt (2, -5)', 'Bunnpunkt (-2, 7)'] },
        ],
        solution: 'a) Bunnpunkt (3, 1)  b) Toppunkt (2, 5)  c) Bunnpunkt (-2, -5)',
        hints: ['Bruk formelen $x = -\\frac{b}{2a}$ for å finne x-koordinaten, sett inn i funksjonen for y-koordinaten.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-4-nullpunkter',
      type: 'text',
      content: `## Nullpunkter

Nullpunktene til en andregradsfunksjon er de $x$-verdiene der grafen krysser $x$-aksen, altså der $f(x) = 0$.

En parabel kan ha:
- **To nullpunkter** -- grafen krysser $x$-aksen to steder
- **Ett nullpunkt** -- grafen tangerer (bare berører) $x$-aksen
- **Ingen nullpunkter** -- grafen krysser aldri $x$-aksen

I 1P finner vi nullpunktene ved å lese av fra graf eller bruke digitale verktøy. Vi kan også faktorisere i enkle tilfeller.`,
    },
    {
      id: '1p-3-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Finne nullpunkter ved faktorisering',
      problem: 'Finn nullpunktene til $f(x) = x^2 - 5x + 6$.',
      solution: `**Løsning:**

Vi setter $f(x) = 0$:
$$x^2 - 5x + 6 = 0$$

Vi leter etter to tall som ganget gir 6 og lagt sammen gir $-5$. Tallene $-2$ og $-3$ fungerer:

$$x^2 - 5x + 6 = (x - 2)(x - 3) = 0$$

Enten er $x - 2 = 0$ eller $x - 3 = 0$:
$$x = 2 \\quad \\text{eller} \\quad x = 3$$

**Nullpunktene er $x = 2$ og $x = 3$.**

Grafen krysser $x$-aksen i punktene $(2, 0)$ og $(3, 0)$.`,
    },
    {
      id: '1p-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn nullpunktene ved å faktorisere:',
        subTasks: [
          { label: 'a', task: '$f(x) = x^2 - 7x + 12$', solution: '$(x - 3)(x - 4) = 0$, altså $x = 3$ eller $x = 4$.', multipleChoiceOptions: ['x = 3 og x = 4', 'x = -3 og x = -4', 'x = 2 og x = 6', 'x = 3 og x = -4'] },
          { label: 'b', task: '$g(x) = x^2 + 2x - 8$', solution: '$(x + 4)(x - 2) = 0$, altså $x = -4$ eller $x = 2$.', multipleChoiceOptions: ['x = -4 og x = 2', 'x = 4 og x = -2', 'x = -4 og x = -2', 'x = 4 og x = 2'] },
          { label: 'c', task: '$h(x) = x^2 - 9$', solution: '$(x - 3)(x + 3) = 0$, altså $x = 3$ eller $x = -3$.', multipleChoiceOptions: ['x = 3 og x = -3', 'x = 9 og x = -9', 'x = 3 og x = 3', 'x = 0 og x = 9'] },
        ],
        solution: 'a) x = 3 og x = 4  b) x = -4 og x = 2  c) x = 3 og x = -3',
        hints: ['Finn to tall som ganget gir konstantleddet og lagt sammen gir koeffisienten foran x.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-4-praktisk',
      type: 'text',
      content: `## Praktiske anvendelser

Andregradsfunksjoner beskriver mange situasjoner i virkeligheten:

- **Kastebane**: Banen til en ball som kastes danner en parabel
- **Bremsestrekning**: Bremselengden øker kvadratisk med farten
- **Areal**: Arealet av et rektangel der sidene avhenger av en variabel`,
    },
    {
      id: '1p-3-4-example-5',
      type: 'example',
      title: 'Eksempel 5: Bremsestrekning',
      problem: `Bremsestrekningen $s$ (i meter) for en bil som kjører med fart $v$ (i km/t) på tørr asfalt er tilnærmet gitt ved:

$$s(v) = 0{,}005 \\cdot v^2 + 0{,}2 \\cdot v$$

a) Finn bremsestrekningen ved 60 km/t.
b) Finn bremsestrekningen ved 90 km/t.
c) Hvor mange ganger lenger er bremsestrekningen ved 90 km/t sammenlignet med 60 km/t?`,
      solution: `**Løsning:**

a) $s(60) = 0{,}005 \\cdot 60^2 + 0{,}2 \\cdot 60 = 0{,}005 \\cdot 3600 + 12 = 18 + 12 = 30$ m

b) $s(90) = 0{,}005 \\cdot 90^2 + 0{,}2 \\cdot 90 = 0{,}005 \\cdot 8100 + 18 = 40{,}5 + 18 = 58{,}5$ m

c) $\\frac{58{,}5}{30} = 1{,}95$

Bremsestrekningen ved 90 km/t er nesten **dobbelt så lang** som ved 60 km/t, selv om farten bare er 50% høyere. Dette viser at bremsestrekningen vokser raskere enn farten -- en viktig grunn til å holde fartsgrensene.`,
    },
    {
      id: '1p-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bonde har 40 meter gjerde og vil lage en rektangulær innhegning langs en vegg. Veggen utgjør den ene langsiden, så gjerdet brukes til de tre andre sidene.

Kall bredden $x$ (i meter). Da er lengden $40 - 2x$ meter.

Arealet blir: $A(x) = x \\cdot (40 - 2x) = -2x^2 + 40x$`,
        subTasks: [
          { label: 'a', task: 'Finn arealet når bredden er 5 meter.', solution: '$A(5) = -2 \\cdot 25 + 40 \\cdot 5 = -50 + 200 = 150$ m$^2$', answer: 150, multipleChoiceOptions: ['150 m²', '175 m²', '100 m²', '200 m²'] },
          { label: 'b', task: 'Finn arealet når bredden er 15 meter.', solution: '$A(15) = -2 \\cdot 225 + 40 \\cdot 15 = -450 + 600 = 150$ m$^2$', answer: 150, multipleChoiceOptions: ['150 m²', '225 m²', '300 m²', '100 m²'] },
          { label: 'c', task: 'Finn bredden som gir størst mulig areal, og beregn dette arealet.', solution: '$x = -\\frac{40}{2 \\cdot (-2)} = 10$. $A(10) = -2 \\cdot 100 + 400 = 200$ m$^2$. Størst areal er 200 m$^2$ når bredden er 10 m.', answer: 200, multipleChoiceOptions: ['200 m² (bredde 10 m)', '150 m² (bredde 15 m)', '400 m² (bredde 20 m)', '100 m² (bredde 5 m)'] },
        ],
        solution: 'a) 150 m²  b) 150 m²  c) Bredde 10 m gir 200 m²',
        hints: ['For deloppgave c: Bruk formelen for toppunktet, $x = -\\frac{b}{2a}$.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-4-tip',
      type: 'tip',
      title: 'Verditabell for parabler',
      content: `Når du skal tegne en parabel for hånd:
1. Finn bunnpunktet/toppunktet med $x = -\\frac{b}{2a}$
2. Velg noen $x$-verdier på begge sider av symmetrilinjen
3. Regn ut $f(x)$ for disse verdiene
4. Tegn inn punktene og tegn en jevn kurve gjennom dem

Husk at parabelen er symmetrisk -- punkter like langt fra symmetrilinjen har samme $y$-verdi!`,
    },
    {
      id: '1p-3-4-warning',
      type: 'warning',
      title: 'Vanlig feil',
      content: `Mange forveksler fortegnet til $a$ med retningen til parabelen.

- $a > 0$: Parabelen **åpner oppover** (bunnpunkt)
- $a < 0$: Parabelen **åpner nedover** (toppunkt)

Husk: Positivt $a$ gir en "glad" parabel (smilefjes), negativt $a$ gir en "trist" parabel.`,
    },
    {
      id: '1p-3-4-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Andregradsfunksjon: $f(x) = ax^2 + bx + c$
- Grafen er en parabel
- $a > 0$: åpner oppover (bunnpunkt), $a < 0$: åpner nedover (toppunkt)
- Symmetrilinje: $x = -\\frac{b}{2a}$
- Nullpunkter: $x$-verdier der $f(x) = 0$
- Praktisk bruk: kastebane, bremsestrekning, arealoptimering`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: EKSPONENTIALFUNKSJONER
// ============================================================================

export const CHAPTER_1P_3_5: TextbookChapter = {
  id: '1p-3-5',
  courseId: '1p',
  chapterNumber: '3.5',
  title: 'Eksponentialfunksjoner',
  description: 'Lær om eksponentiell vekst og nedgang, vekstfaktor, doblings- og halveringstid.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske eigenskapane til eksponentialfunksjonar',
  ],
  content: [
    {
      id: '1p-3-5-intro',
      type: 'text',
      content: `## Fra lineær til eksponentiell vekst

Når en størrelse vokser med et **fast beløp** per tidsenhet, har vi lineær vekst. Men i mange situasjoner vokser størrelsen med en fast **prosent** per tidsenhet. Da har vi **eksponentiell vekst**.

Tenk på forskjellen:
- **Lineær vekst**: Du setter inn 500 kr på kontoen hvert år. Etter 10 år har du 5000 kr ekstra.
- **Eksponentiell vekst**: Pengene dine vokser med 5% per år. Jo mer du har, jo mer vokser det.

Eksponentiell vekst starter sakte, men akselererer raskt og kan bli svært stor.`,
    },
    {
      id: '1p-3-5-def',
      type: 'definition',
      title: 'Eksponentialfunksjon',
      content: `En **eksponentialfunksjon** er en funksjon på formen

$$f(x) = a \\cdot b^x$$

der:
- $a$ er **startverdien** (verdien når $x = 0$)
- $b$ er **vekstfaktoren** (basen)
- $x$ er variabelen (ofte tid)

**Vekst**: Når $b > 1$, vokser funksjonen (eksponentiell vekst).
**Nedgang**: Når $0 < b < 1$, avtar funksjonen (eksponentiell nedgang).`,
    },
    {
      id: '1p-3-5-vekstfaktor',
      type: 'text',
      content: `## Vekstfaktor som base

Vekstfaktoren $b$ henger direkte sammen med den prosentvise endringen per tidsenhet:

- **Økning med $p$ %**: $b = 1 + \\frac{p}{100}$
- **Nedgang med $p$ %**: $b = 1 - \\frac{p}{100}$

For eksempel:
- 3% årlig vekst: $b = 1{,}03$
- 8% årlig nedgang: $b = 0{,}92$
- 12% vekst per periode: $b = 1{,}12$
- 50% nedgang: $b = 0{,}50$`,
    },
    {
      id: '1p-3-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Sparekonto',
      problem: `Du setter 10 000 kr i banken til 4% årlig rente. Lag en modell for beløpet etter $x$ år, og finn beløpet etter 5 år.`,
      solution: `**Løsning:**

Startverdi: $a = 10\\,000$

Årlig vekstfaktor: $b = 1 + \\frac{4}{100} = 1{,}04$

Modell: $f(x) = 10\\,000 \\cdot 1{,}04^x$

Etter 5 år:
$$f(5) = 10\\,000 \\cdot 1{,}04^5 = 10\\,000 \\cdot 1{,}2167 \\approx 12\\,167$$

Etter 5 år har du omtrent **12 167 kr** på kontoen.`,
    },
    {
      id: '1p-3-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-3-5-ex-1',
        number: '3.5.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Finn vekstfaktoren $b$ og skriv opp funksjonsuttrykket $f(x) = a \\cdot b^x$:',
        subTasks: [
          { label: 'a', task: 'Startverdi 200, 10% årlig vekst', solution: '$b = 1{,}10$. $f(x) = 200 \\cdot 1{,}10^x$', multipleChoiceOptions: ['f(x) = 200 · 1,10^x', 'f(x) = 200 · 0,10^x', 'f(x) = 200 · 10^x', 'f(x) = 200 + 1,10x'] },
          { label: 'b', task: 'Startverdi 5000, 3% årlig nedgang', solution: '$b = 0{,}97$. $f(x) = 5000 \\cdot 0{,}97^x$', multipleChoiceOptions: ['f(x) = 5000 · 0,97^x', 'f(x) = 5000 · 1,03^x', 'f(x) = 5000 · 0,03^x', 'f(x) = 5000 - 0,97x'] },
          { label: 'c', task: 'Startverdi 800, 25% vekst per periode', solution: '$b = 1{,}25$. $f(x) = 800 \\cdot 1{,}25^x$', multipleChoiceOptions: ['f(x) = 800 · 1,25^x', 'f(x) = 800 · 0,25^x', 'f(x) = 800 · 0,75^x', 'f(x) = 800 + 25x'] },
          { label: 'd', task: 'Startverdi 1200, 15% nedgang per periode', solution: '$b = 0{,}85$. $f(x) = 1200 \\cdot 0{,}85^x$', multipleChoiceOptions: ['f(x) = 1200 · 0,85^x', 'f(x) = 1200 · 1,15^x', 'f(x) = 1200 · 0,15^x', 'f(x) = 1200 - 180x'] },
        ],
        solution: 'a) f(x) = 200 · 1,10^x  b) f(x) = 5000 · 0,97^x  c) f(x) = 800 · 1,25^x  d) f(x) = 1200 · 0,85^x',
        hints: ['Vekst: b = 1 + p/100. Nedgang: b = 1 - p/100.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Verdifall på bil',
      problem: `En ny bil koster 350 000 kr. Bilen mister 18% av verdien hvert år.

a) Sett opp en modell for bilens verdi etter $x$ år.
b) Hva er bilen verdt etter 3 år?
c) Hva er bilen verdt etter 8 år?`,
      solution: `**Løsning:**

a) Startverdi $a = 350\\,000$ kr. Årlig nedgang 18%, altså vekstfaktor $b = 1 - 0{,}18 = 0{,}82$.

$$V(x) = 350\\,000 \\cdot 0{,}82^x$$

b) $V(3) = 350\\,000 \\cdot 0{,}82^3 = 350\\,000 \\cdot 0{,}5514 \\approx 192\\,976$ kr

Etter 3 år er bilen verdt ca. **193 000 kr**.

c) $V(8) = 350\\,000 \\cdot 0{,}82^8 = 350\\,000 \\cdot 0{,}2044 \\approx 71\\,540$ kr

Etter 8 år er bilen verdt ca. **71 500 kr** -- bare omtrent en femtedel av nybilprisen.`,
    },
    {
      id: '1p-3-5-dobling',
      type: 'text',
      content: `## Doblingstid og halveringstid

**Doblingstid** er tiden det tar for en størrelse å bli dobbelt så stor ved eksponentiell vekst.

**Halveringstid** er tiden det tar for en størrelse å bli halvert ved eksponentiell nedgang.

I 1P finner vi doblings- og halveringstid ved å prøve oss fram, lese av fra graf, eller bruke digitale verktøy.`,
    },
    {
      id: '1p-3-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Doblingstid',
      problem: `En bakteriekoloni starter med 500 bakterier og vokser med 15% per time. Finn doblingstiden ved å prøve ulike verdier for $x$.`,
      solution: `**Løsning:**

Modell: $f(x) = 500 \\cdot 1{,}15^x$

Vi leter etter $x$ der $f(x) = 1000$ (dobbelt av 500):

$$500 \\cdot 1{,}15^x = 1000$$
$$1{,}15^x = 2$$

Vi prøver:
- $x = 3$: $1{,}15^3 = 1{,}521$ (for lite)
- $x = 5$: $1{,}15^5 = 2{,}011$ (veldig nær 2!)
- $x = 4$: $1{,}15^4 = 1{,}749$ (for lite)
- $x = 4{,}9$: $1{,}15^{4{,}9} \\approx 1{,}989$ (nesten)

**Doblingstiden er omtrent 5 timer.**

Merk: Doblingstiden er den samme uansett startverdien. Enten vi starter med 500, 1000 eller 10 000 bakterier, tar det ca. 5 timer å doble antallet.`,
    },
    {
      id: '1p-3-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-3-5-ex-2',
        number: '3.5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs oppgavene om eksponentiell vekst og nedgang:',
        subTasks: [
          { label: 'a', task: 'Et land har 2 millioner innbyggere og befolkningen vokser med 2% per år. Hvor mange innbyggere er det etter 10 år?', solution: '$f(10) = 2\\,000\\,000 \\cdot 1{,}02^{10} \\approx 2\\,438\\,000$', multipleChoiceOptions: ['Ca. 2 438 000', 'Ca. 2 200 000', 'Ca. 2 400 000', 'Ca. 4 000 000'] },
          { label: 'b', task: 'Et radioaktivt stoff har halveringstid 6 timer. Du starter med 80 gram. Hvor mye er igjen etter 18 timer?', solution: '18 timer er 3 halveringstider. $80 \\cdot 0{,}5^3 = 80 \\cdot 0{,}125 = 10$ gram.', answer: 10, multipleChoiceOptions: ['10 gram', '20 gram', '40 gram', '5 gram'] },
          { label: 'c', task: 'En sparekonto gir 3,5% rente. Du setter inn 25 000 kr. Hvor mye har du etter 7 år?', solution: '$25\\,000 \\cdot 1{,}035^7 \\approx 31\\,807$ kr', multipleChoiceOptions: ['Ca. 31 807 kr', 'Ca. 31 125 kr', 'Ca. 30 000 kr', 'Ca. 32 500 kr'] },
        ],
        solution: 'a) Ca. 2 438 000  b) 10 gram  c) Ca. 31 807 kr',
        hints: ['Bruk formelen $f(x) = a \\cdot b^x$. For halveringstid er $b = 0{,}5$ per halveringsperiode.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-5-sammenligning',
      type: 'text',
      content: `## Lineær vs. eksponentiell vekst

Det er viktig å forstå forskjellen:

| Egenskap | Lineær vekst | Eksponentiell vekst |
|:---------|:-------------|:-------------------|
| Formel | $f(x) = ax + b$ | $f(x) = a \\cdot b^x$ |
| Endring per steg | Fast beløp ($a$) | Fast prosent |
| Graf | Rett linje | Buet kurve |
| Eksempel | Fastlønn per time | Rentesrente |

Ved eksponentiell vekst med $b > 1$ vil funksjonen **alltid** til slutt vokse raskere enn enhver lineær funksjon, uansett hvor bratt linjen er.`,
    },
    {
      id: '1p-3-5-example-4',
      type: 'example',
      title: 'Eksempel 4: Sammenligne veksttyper',
      problem: `To venner sparer penger:
- Sara setter inn 1000 kr ekstra per år (lineær vekst).
- Jonas starter med 5000 kr og pengene vokser med 8% per år (eksponentiell vekst).

Begge starter med 5000 kr. Sammenlign beløpene etter 5, 10 og 20 år.`,
      solution: `**Løsning:**

Sara (lineær): $S(x) = 1000x + 5000$
Jonas (eksponentiell): $J(x) = 5000 \\cdot 1{,}08^x$

| År ($x$) | Sara | Jonas |
|:--------:|:----:|:-----:|
| 5 | $1000 \\cdot 5 + 5000 = 10\\,000$ | $5000 \\cdot 1{,}08^5 \\approx 7\\,347$ |
| 10 | $1000 \\cdot 10 + 5000 = 15\\,000$ | $5000 \\cdot 1{,}08^{10} \\approx 10\\,795$ |
| 20 | $1000 \\cdot 20 + 5000 = 25\\,000$ | $5000 \\cdot 1{,}08^{20} \\approx 23\\,305$ |

Etter 5 og 10 år leder Sara. Men den eksponentielle veksten til Jonas tar snart igjen, og etter lang nok tid vil Jonas ha langt mer enn Sara.`,
    },
    {
      id: '1p-3-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En fabrikk produserte 12 000 enheter i 2020. Produksjonen øker med 6% per år.`,
        subTasks: [
          { label: 'a', task: 'Sett opp en modell $P(x)$ for produksjonen $x$ år etter 2020.', solution: '$P(x) = 12\\,000 \\cdot 1{,}06^x$', multipleChoiceOptions: ['P(x) = 12000 · 1,06^x', 'P(x) = 12000 + 720x', 'P(x) = 12000 · 0,06^x', 'P(x) = 12000 · 6^x'] },
          { label: 'b', task: 'Hvor mange enheter produseres i 2025?', solution: '$P(5) = 12\\,000 \\cdot 1{,}06^5 \\approx 16\\,059$', multipleChoiceOptions: ['Ca. 16 059', 'Ca. 15 600', 'Ca. 12 720', 'Ca. 18 000'] },
          { label: 'c', task: 'Når vil produksjonen passere 20 000 enheter? Prøv ulike verdier.', solution: '$P(9) \\approx 20\\,274$. Produksjonen passerer 20 000 enheter rundt 2029.', multipleChoiceOptions: ['Ca. 2029 (etter 9 år)', 'Ca. 2031 (etter 11 år)', 'Ca. 2027 (etter 7 år)', 'Ca. 2033 (etter 13 år)'] },
        ],
        solution: 'a) P(x) = 12000 · 1,06^x  b) Ca. 16 059  c) Ca. 2029',
        hints: ['c) Prøv å sette inn ulike verdier for x til du finner det riktige svaret. Start med x = 8 og juster.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-5-tip',
      type: 'tip',
      title: 'Tommelfingerregel for doblingstid',
      content: `En praktisk tommelfingerregel kalles **72-regelen**:

$$\\text{Doblingstid} \\approx \\frac{72}{p}$$

der $p$ er vekstraten i prosent.

Eksempler:
- 6% vekst: doblingstid $\\approx \\frac{72}{6} = 12$ perioder
- 8% vekst: doblingstid $\\approx \\frac{72}{8} = 9$ perioder
- 3% vekst: doblingstid $\\approx \\frac{72}{3} = 24$ perioder

Dette er en tilnærming, men den fungerer godt for overslagsregning.`,
    },
    {
      id: '1p-3-5-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Eksponentialfunksjon: $f(x) = a \\cdot b^x$
- $a$ er startverdien, $b$ er vekstfaktoren
- $b > 1$: eksponentiell vekst, $0 < b < 1$: eksponentiell nedgang
- Vekstfaktor ved $p$ % vekst: $b = 1 + \\frac{p}{100}$
- Vekstfaktor ved $p$ % nedgang: $b = 1 - \\frac{p}{100}$
- Doblingstid: tiden det tar å doble verdien
- Halveringstid: tiden det tar å halvere verdien
- Eksponentiell vekst vokser alltid raskere enn lineær vekst over tid`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.6: DIGITAL GRAFTEGNING OG LIKNINGSLØSNING
// ============================================================================

export const CHAPTER_1P_3_6: TextbookChapter = {
  id: '1p-3-6',
  courseId: '1p',
  chapterNumber: '3.6',
  title: 'Digital graftegning og likningsløsning',
  description: 'Lær å bruke digitale verktøy til å tegne grafer, finne nullpunkter, skjæringspunkter og løse likninger grafisk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke digitale verktøy i utforsking og problemløysing',
  ],
  content: [
    {
      id: '1p-3-6-intro',
      type: 'text',
      content: `## Hvorfor bruke digitale verktøy?

Når vi jobbet med lineære funksjoner, andregradsfunksjoner og eksponentialfunksjoner, tegnet vi mange grafer for hånd. Det er viktig å forstå hvordan grafene ser ut, men i praksis bruker vi ofte **digitale verktøy** til å:

- Tegne presise grafer raskt
- Finne nullpunkter, toppunkt og bunnpunkt nøyaktig
- Finne skjæringspunkter mellom grafer
- Løse likninger og ulikheter grafisk
- Utforske hvordan koeffisienter påvirker grafer

De vanligste verktøyene i norsk skole er **GeoGebra** og **regneark** (Excel/Google Regneark).`,
    },
    {
      id: '1p-3-6-geogebra',
      type: 'text',
      content: `## GeoGebra: Tegne grafer

I GeoGebra kan du skrive inn funksjonsuttrykk direkte i inntastingsfeltet:

**Slik gjør du:**
1. Åpne GeoGebra (nettversjon: geogebra.org/graphing)
2. Skriv inn funksjonsuttrykket i inntastingsfeltet, for eksempel: \`f(x) = 2x^2 - 3x + 1\`
3. Trykk Enter -- grafen tegnes automatisk
4. Du kan legge inn flere funksjoner: \`g(x) = x + 2\`
5. Bruk musepekeren til å peke på punkter og lese av koordinater`,
    },
    {
      id: '1p-3-6-example-1',
      type: 'example',
      title: 'Eksempel 1: Tegne og utforske en parabel i GeoGebra',
      problem: `Tegn grafen til $f(x) = -x^2 + 4x + 5$ i GeoGebra, og finn:
a) Toppunktet
b) Nullpunktene
c) Skjæring med y-aksen`,
      solution: `**Løsning:**

1. Skriv inn \`f(x) = -x^2 + 4x + 5\` i GeoGebra.

2. **Finne toppunkt i GeoGebra:**
   Skriv \`Ekstremalpunkt(f)\` i inntastingsfeltet.
   GeoGebra gir: **Toppunkt $(2, 9)$**

3. **Finne nullpunkter i GeoGebra:**
   Skriv \`Nullpunkt(f)\` i inntastingsfeltet.
   GeoGebra gir: **$(-1, 0)$ og $(5, 0)$**

4. **Skjæring med y-aksen:**
   Sett $x = 0$: $f(0) = 5$, altså skjærer grafen y-aksen i $(0, 5)$.
   I GeoGebra kan du skrive \`f(0)\` for å bekrefte.`,
    },
    {
      id: '1p-3-6-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-3-6-ex-1',
        number: '3.6.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bruk GeoGebra til å tegne grafene og finn de angitte egenskapene:',
        subTasks: [
          { label: 'a', task: 'Tegn $f(x) = x^2 - 2x - 3$. Finn bunnpunktet og nullpunktene.', solution: 'Bunnpunkt: $(1, -4)$. Nullpunkter: $x = -1$ og $x = 3$.', multipleChoiceOptions: ['Bunnpunkt (1, -4), nullpunkter x = -1 og x = 3', 'Bunnpunkt (1, -3), nullpunkter x = -1 og x = 2', 'Bunnpunkt (-1, -4), nullpunkter x = 0 og x = 3', 'Bunnpunkt (2, -3), nullpunkter x = -1 og x = 3'] },
          { label: 'b', task: 'Tegn $g(x) = 2 \\cdot 1{,}5^x$. Beskriv hva som skjer med grafen for store verdier av $x$.', solution: 'Grafen starter i $(0, 2)$ og stiger stadig brattere. For store $x$ vokser funksjonen svært raskt.', multipleChoiceOptions: ['Stiger stadig brattere, starter i (0, 2)', 'Flater ut mot en grense', 'Stiger jevnt som en linje', 'Starter i (0, 1,5) og synker'] },
          { label: 'c', task: 'Tegn $h(x) = -2x + 7$ og $k(x) = x^2 - 1$ i samme koordinatsystem. Hvor mange skjæringspunkter har de?', solution: 'De har 2 skjæringspunkter. Bruk \`Skjæring(h, k)\` i GeoGebra for å finne dem.', multipleChoiceOptions: ['2 skjæringspunkter', '1 skjæringspunkt', '3 skjæringspunkter', '0 skjæringspunkter'] },
        ],
        solution: 'a) Bunnpunkt (1, -4), nullpunkter -1 og 3  b) Stiger stadig brattere  c) 2 skjæringspunkter',
        hints: ['Bruk kommandoene Nullpunkt(), Ekstremalpunkt() og Skjæring() i GeoGebra.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-6-skjaering',
      type: 'text',
      content: `## Finne skjæringspunkter digitalt

Når to grafer krysser hverandre, finner vi skjæringspunktet ved å bruke GeoGebra:

**I GeoGebra:**
1. Tegn begge funksjonene
2. Skriv \`Skjæring(f, g)\` i inntastingsfeltet
3. GeoGebra markerer skjæringspunktene og viser koordinatene

Dette er spesielt nyttig når likningene er vanskelige å løse for hånd, for eksempel når vi skal finne skjæring mellom en linje og en parabel.`,
    },
    {
      id: '1p-3-6-example-2',
      type: 'example',
      title: 'Eksempel 2: Løse likning grafisk',
      problem: `Løs likningen $x^2 - 3x + 1 = 2x - 3$ grafisk.`,
      solution: `**Løsning:**

Vi definerer to funksjoner:
- $f(x) = x^2 - 3x + 1$
- $g(x) = 2x - 3$

I GeoGebra:
1. Skriv \`f(x) = x^2 - 3x + 1\`
2. Skriv \`g(x) = 2x - 3\`
3. Skriv \`Skjæring(f, g)\`

GeoGebra finner skjæringspunktene: $(1, -1)$ og $(4, 5)$.

**Svar:** $x = 1$ eller $x = 4$.

**Kontroll:** Sett $x = 1$ inn i begge:
- $f(1) = 1 - 3 + 1 = -1$ \\checkmark
- $g(1) = 2 - 3 = -1$ \\checkmark`,
    },
    {
      id: '1p-3-6-def',
      type: 'definition',
      title: 'Grafisk likningsløsning',
      content: `Å **løse en likning grafisk** betyr å finne $x$-verdien(e) der to grafer krysser hverandre.

Likningen $f(x) = g(x)$ løses ved å finne **skjæringspunktene** mellom grafene til $f$ og $g$.

$x$-koordinatene til skjæringspunktene er **løsningene** av likningen.`,
    },
    {
      id: '1p-3-6-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-3-6-ex-2',
        number: '3.6.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene grafisk ved hjelp av GeoGebra:',
        subTasks: [
          { label: 'a', task: '$x^2 = 3x + 4$. (Hint: Tegn $f(x) = x^2$ og $g(x) = 3x + 4$)', solution: 'Skjæringspunkter i $(-1, 1)$ og $(4, 16)$. Løsninger: $x = -1$ og $x = 4$.', multipleChoiceOptions: ['x = -1 og x = 4', 'x = 1 og x = 4', 'x = -4 og x = 1', 'x = 0 og x = 3'] },
          { label: 'b', task: '$2^x = 10$. (Hint: Tegn $f(x) = 2^x$ og $g(x) = 10$)', solution: 'Skjæringspunkt nær $x \\approx 3{,}32$. Løsning: $x \\approx 3{,}32$.', multipleChoiceOptions: ['x ≈ 3,32', 'x = 5', 'x ≈ 2,5', 'x ≈ 4,0'] },
          { label: 'c', task: '$-x^2 + 6x - 2 = x + 1$. Finn begge løsningene.', solution: 'Skjæringspunkter i omtrent $(0{,}44, 1{,}44)$ og $(4{,}56, 5{,}56)$. Løsninger: $x \\approx 0{,}44$ og $x \\approx 4{,}56$.', multipleChoiceOptions: ['x ≈ 0,44 og x ≈ 4,56', 'x = 0 og x = 5', 'x = 1 og x = 4', 'x ≈ 0,5 og x ≈ 5,5'] },
        ],
        solution: 'a) x = -1 og x = 4  b) x ≈ 3,32  c) x ≈ 0,44 og x ≈ 4,56',
        hints: ['Definer venstre side som f(x) og høyre side som g(x), og bruk Skjæring(f, g).'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-6-ulikheter',
      type: 'text',
      content: `## Løse ulikheter grafisk

Ulikheter kan også løses grafisk. For eksempel betyr ulikheten $f(x) > g(x)$ at vi leter etter de $x$-verdiene der grafen til $f$ ligger **over** grafen til $g$.

**Framgangsmåte:**
1. Tegn begge grafene i GeoGebra
2. Finn skjæringspunktene (der $f(x) = g(x)$)
3. Se på grafen: i hvilke intervaller ligger $f$ over $g$?
4. Det intervallet er løsningen av ulikheten`,
    },
    {
      id: '1p-3-6-example-3',
      type: 'example',
      title: 'Eksempel 3: Løse ulikhet grafisk',
      problem: `Løs ulikheten $x^2 - 4 < 2x + 1$ grafisk.`,
      solution: `**Løsning:**

La $f(x) = x^2 - 4$ og $g(x) = 2x + 1$.

1. Tegn begge i GeoGebra.
2. Finn skjæringspunktene: \`Skjæring(f, g)\` gir $(-1, -3)$ og $(5, 11)$.
3. Vi ser at grafen til $f$ ligger **under** grafen til $g$ mellom skjæringspunktene.

**Svar:** $-1 < x < 5$

I dette intervallet er $x^2 - 4$ mindre enn $2x + 1$.`,
    },
    {
      id: '1p-3-6-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-3-6-ex-3',
        number: '3.6.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs ulikhetene grafisk. Angi løsningen som et intervall:',
        subTasks: [
          { label: 'a', task: '$x^2 < 9$ (Hint: Tegn $f(x) = x^2$ og $g(x) = 9$)', solution: 'Skjæring i $x = -3$ og $x = 3$. Parabelen er under linjen mellom dem. Svar: $-3 < x < 3$.', multipleChoiceOptions: ['-3 < x < 3', 'x < -3 eller x > 3', 'x < 3', '-9 < x < 9'] },
          { label: 'b', task: '$2x + 3 > x^2$ (Hint: Tegn begge grafene)', solution: 'Skjæring i $x = -1$ og $x = 3$. Linjen er over parabelen mellom dem. Svar: $-1 < x < 3$.', multipleChoiceOptions: ['-1 < x < 3', 'x > 3', 'x < -1 eller x > 3', '-3 < x < 1'] },
        ],
        solution: 'a) -3 < x < 3  b) -1 < x < 3',
        hints: ['Finn først skjæringspunktene. Se deretter på grafen for å avgjøre i hvilket intervall ulikheten gjelder.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-6-regresjon',
      type: 'text',
      content: `## Tilpasse funksjonsuttrykk til data

Noen ganger har vi måledata og ønsker å finne en funksjon som passer til dataene. Dette kalles **regresjon**. GeoGebra og regneark kan finne den beste funksjonen automatisk.

**I GeoGebra (regneark-visning):**
1. Legg inn datapunktene som en liste: \`liste = {(1, 3), (2, 7), (3, 12), (4, 19)}\`
2. Skriv \`RegPoly(liste, 2)\` for andregradstilpasning
3. Eller \`RegLin(liste)\` for lineær tilpasning
4. Eller \`RegEksp(liste)\` for eksponentiell tilpasning

GeoGebra finner funksjonsuttrykket som passer best til dataene.`,
    },
    {
      id: '1p-3-6-example-4',
      type: 'example',
      title: 'Eksempel 4: Tilpasse modell til data',
      problem: `En forsker måler temperaturen i en kopp kaffe over tid:

| Tid (min) | 0 | 5 | 10 | 15 | 20 | 30 |
|:---------:|:-:|:-:|:--:|:--:|:--:|:--:|
| Temp (°C) | 85 | 68 | 55 | 45 | 38 | 28 |

Bruk GeoGebra til å finne en eksponentiell modell som passer dataene.`,
      solution: `**Løsning:**

I GeoGebra:
1. Skriv: \`liste = {(0, 85), (5, 68), (10, 55), (15, 45), (20, 38), (30, 28)}\`
2. Skriv: \`RegEksp(liste)\`
3. GeoGebra gir: $f(x) \\approx 84{,}5 \\cdot 0{,}963^x$

Dette betyr:
- Starttemperaturen er ca. 84,5 °C
- Temperaturen synker med ca. 3,7% per minutt (vekstfaktor 0,963)

Med modellen kan vi for eksempel anslå temperaturen etter 25 minutter:
$$f(25) \\approx 84{,}5 \\cdot 0{,}963^{25} \\approx 32{,}6 \\text{ °C}$$`,
    },
    {
      id: '1p-3-6-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-3-6-ex-4',
        number: '3.6.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tabellen viser antall abonnenter (i tusen) for en strømmetjeneste over 6 år:

| År etter start | 0 | 1 | 2 | 3 | 4 | 5 |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Abonnenter (tusen) | 8 | 11 | 15 | 21 | 29 | 39 |`,
        subTasks: [
          { label: 'a', task: 'Legg inn dataene i GeoGebra og finn en eksponentiell modell med RegEksp.', solution: 'GeoGebra gir omtrent $f(x) \\approx 8{,}1 \\cdot 1{,}37^x$.', multipleChoiceOptions: ['f(x) ≈ 8,1 · 1,37^x', 'f(x) ≈ 8 + 6,2x', 'f(x) ≈ 8 · 1,5^x', 'f(x) ≈ 11 · 1,20^x'] },
          { label: 'b', task: 'Hva er den omtrentlige årlige vekstraten?', solution: 'Vekstfaktor ca. 1,37, altså ca. 37% årlig vekst.', multipleChoiceOptions: ['Ca. 37%', 'Ca. 50%', 'Ca. 20%', 'Ca. 10%'] },
          { label: 'c', task: 'Bruk modellen til å anslå antall abonnenter etter 8 år.', solution: '$f(8) \\approx 8{,}1 \\cdot 1{,}37^8 \\approx 8{,}1 \\cdot 10{,}07 \\approx 81{,}6$ tusen, altså ca. 82 000 abonnenter.', multipleChoiceOptions: ['Ca. 82 000', 'Ca. 55 000', 'Ca. 100 000', 'Ca. 45 000'] },
        ],
        solution: 'a) f(x) ≈ 8,1 · 1,37^x  b) Ca. 37%  c) Ca. 82 000',
        hints: ['Bruk kommandoen RegEksp(liste) i GeoGebra for å finne modellen.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '1p-3-6-tip',
      type: 'tip',
      title: 'Nyttige GeoGebra-kommandoer',
      content: `Her er de viktigste kommandoene for graftegning og analyse:

| Kommando | Hva den gjør |
|:---------|:------------|
| \`f(x) = ...\` | Tegner grafen til funksjonen |
| \`Nullpunkt(f)\` | Finner nullpunktene |
| \`Ekstremalpunkt(f)\` | Finner topp- og bunnpunkter |
| \`Skjæring(f, g)\` | Finner skjæringspunkter |
| \`f(3)\` | Beregner funksjonsverdien i $x = 3$ |
| \`RegLin(liste)\` | Lineær regresjon |
| \`RegPoly(liste, 2)\` | Andegradsregresjon |
| \`RegEksp(liste)\` | Eksponentiell regresjon |`,
    },
    {
      id: '1p-3-6-warning',
      type: 'warning',
      title: 'Husk ved grafisk løsning',
      content: `Når du løser likninger og ulikheter grafisk, er det viktig å:

- **Zoom riktig**: Pass på at du ser hele det relevante området av grafen
- **Les av nøyaktig**: Bruk GeoGebras kommandoer i stedet for å gjette fra grafen
- **Kontroller svaret**: Sett løsningen tilbake i den opprinnelige likningen
- **Vær oppmerksom på antall løsninger**: En parabel og en linje kan ha 0, 1 eller 2 skjæringspunkter`,
    },
    {
      id: '1p-3-6-oppsummering',
      type: 'note',
      content: `**Oppsummering:**
- Digitale verktøy som GeoGebra gjør det enkelt å tegne og analysere grafer
- Nullpunkter, toppunkt/bunnpunkt og skjæringspunkter kan finnes med GeoGebra-kommandoer
- Likninger løses grafisk ved å finne skjæringspunkter mellom to grafer
- Ulikheter løses ved å se hvor en graf ligger over eller under en annen
- Regresjon brukes til å tilpasse en funksjon til måledata`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER
// ============================================================================

export const CHAPTERS_1P_FUNKSJONER = [CHAPTER_1P_3_4, CHAPTER_1P_3_5, CHAPTER_1P_3_6];
