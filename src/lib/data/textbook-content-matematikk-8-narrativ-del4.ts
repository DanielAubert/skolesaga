/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 4
 *
 * Kapittel 3.4: Areal
 * Kapittel 3.5: Omkrets
 * Kapittel 3.6: Volum
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.4 NARRATIV: Areal
// ============================================================================

export const CHAPTER_8_3_4_NARRATIV: TextbookChapter = {
  id: '8-3-4-narrativ',
  courseId: '8',
  chapterNumber: '3.4',
  title: 'Areal',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av areal -- der vi oppdager hvordan vi måler flateinnholdet til figurer, utleder formler for rektangler, trekanter, parallellogrammer og sirkler, og ser hvorfor areal er så nyttig i praksis.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum',
  ],
  linkedChapterId: '8-3-4',
  content: [
    {
      id: '8-3-4-n-intro',
      type: 'text',
      content: `## Hvor stort er det egentlig?

Forestill deg at du skal male veggen på rommet ditt. Du trenger å vite hvor mye maling du skal kjøpe, og det avhenger av hvor stor veggen er -- ikke hvor lang eller hvor høy den er alene, men hvor mye flate den dekker. Det er arealet.

**Areal** er et mål på hvor stort et flatt område er. Vi måler det i **kvadratenheter** -- for eksempel kvadratcentimeter ($\\text{cm}^2$), kvadratmeter ($\\text{m}^2$) eller kvadratkilometer ($\\text{km}^2$).

Tenk deg at du legger fliser på et gulv. Hver flis er $1 \\text{ cm} \\times 1 \\text{ cm}$, altså $1 \\text{ cm}^2$. Arealet er rett og slett hvor mange slike fliser du trenger for å dekke hele gulvet -- uten hull og uten overlapp.

I dette kapittelet skal vi se på formler for arealet til de vanligste figurene og forstå **hvorfor** formlene fungerer.`,
    },

    {
      id: '8-3-4-n-section1',
      type: 'text',
      content: `## Arealet av et rektangel

Det enkleste tilfellet er et **rektangel** -- en firkant der alle vinklene er $90°$. Hvis rektangelet er $5$ cm langt og $3$ cm bredt, kan du legge $5 \\times 3 = 15$ fliser (à $1 \\text{ cm}^2$) inni det. Arealet er $15 \\text{ cm}^2$.

Formelen er:

$$A = \\text{lengde} \\times \\text{bredde} = l \\times b$$

**Eksempel:** Et rom er $4{,}5$ m langt og $3{,}2$ m bredt. Arealet er:

$$A = 4{,}5 \\times 3{,}2 = 14{,}4 \\text{ m}^2$$

Et **kvadrat** er et spesialtilfelle der alle sidene er like lange ($s$):

$$A = s \\times s = s^2$$

Derfor heter det «kvadrat»-meter -- arealet av et kvadrat med sider på 1 meter!

**Enhetsomregning:** $1 \\text{ m}^2 = 10\\,000 \\text{ cm}^2$. Hvorfor? Fordi $1 \\text{ m} = 100 \\text{ cm}$, og $100 \\times 100 = 10\\,000$. Husk: ved arealomregning må du gange (eller dele) med omregningsfaktoren **to ganger**, fordi areal er todimensjonalt.`,
    },

    {
      id: '8-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-4-n-quiz1-q0',
            task: 'Hva er arealet av et rektangel med lengde $7$ cm og bredde $4$ cm?',
            options: [
              { id: 'a', text: '$11 \\text{ cm}^2$', isCorrect: false },
              { id: 'b', text: '$28 \\text{ cm}^2$', isCorrect: true },
              { id: 'c', text: '$22 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$14 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: '$A = l \\times b = 7 \\times 4 = 28 \\text{ cm}^2$.',
          },
          {
            id: '8-3-4-n-quiz1-q1',
            task: 'Hvor mange $\\text{cm}^2$ er det i $1 \\text{ m}^2$?',
            options: [
              { id: 'a', text: '$100$', isCorrect: false },
              { id: 'b', text: '$1\\,000$', isCorrect: false },
              { id: 'c', text: '$10\\,000$', isCorrect: true },
              { id: 'd', text: '$100\\,000$', isCorrect: false },
            ],
            solution: '$1 \\text{ m} = 100 \\text{ cm}$, så $1 \\text{ m}^2 = 100 \\times 100 = 10\\,000 \\text{ cm}^2$. Ved arealomregning ganger vi med faktoren to ganger.',
          },
        ],
      },
    },

    {
      id: '8-3-4-n-section2',
      type: 'text',
      content: `## Arealet av en trekant

En trekant kan alltid tenkes som halvparten av et parallellogram. Men la oss starte med det enkleste: en rettvinklet trekant er halvparten av et rektangel. Tenk deg at du klipper et rektangel diagonalt i to -- du får to like trekanter. Arealet av hver trekant er halvparten av rektangelets areal:

$$A_{\\text{trekant}} = \\frac{\\text{grunnlinje} \\times \\text{høyde}}{2} = \\frac{g \\times h}{2}$$

**Viktig:** Høyden er den **vinkelrette** avstanden fra grunnlinjen til det motsatte hjørnet. Den er IKKE nødvendigvis en av sidene i trekanten (med mindre trekanten er rettvinklet).

**Eksempel:** En trekant har grunnlinje $8$ cm og høyde $5$ cm.

$$A = \\frac{8 \\times 5}{2} = \\frac{40}{2} = 20 \\text{ cm}^2$$

Et nyttig triks: du kan velge **hvilken som helst** side som grunnlinje. Høyden er da den vinkelrette avstanden til den motsatte hjørnet. Uansett hvilken side du velger, blir arealet det samme.

**Hvorfor virker formelen for alle trekanter?** Enhver trekant kan «innskrives» i et rektangel med samme grunnlinje og høyde. Trekanten dekker alltid nøyaktig halvparten av dette rektangelet. Du kan overbevise deg selv ved å tegne det -- det fungerer selv for stumpe trekanter.`,
    },

    {
      id: '8-3-4-n-section3',
      type: 'text',
      content: `## Arealet av et parallellogram og et trapes

Et **parallellogram** er en firkant der de motstående sidene er parallelle. Tenk på det som et «skjevt rektangel». Klipper du av en trekant på den ene siden og flytter den til den andre, får du et rektangel. Derfor har et parallellogram og et rektangel med samme grunnlinje og høyde **likt areal**:

$$A_{\\text{parallellogram}} = g \\times h$$

Igjen er $h$ den **vinkelrette** høyden, ikke den skrå siden.

**Eksempel:** Et parallellogram har grunnlinje $6$ cm og høyde $4$ cm. Arealet er $A = 6 \\times 4 = 24 \\text{ cm}^2$.

Et **trapes** har bare to parallelle sider (vi kaller dem $a$ og $b$). Formelen for arealet er:

$$A_{\\text{trapes}} = \\frac{(a + b) \\times h}{2}$$

Her er $a$ og $b$ de to parallelle sidene, og $h$ er den vinkelrette avstanden mellom dem.

**Hvorfor denne formelen?** Tenk deg at du legger to like trapeser mot hverandre (den ene snudd opp-ned). Sammen danner de et parallellogram med grunnlinje $(a + b)$ og høyde $h$. Arealet av parallellogrammet er $(a + b) \\times h$. Trapeset er halvparten: $\\frac{(a + b) \\times h}{2}$.

**Eksempel:** Et trapes har parallelle sider $5$ cm og $9$ cm, og høyde $4$ cm.

$$A = \\frac{(5 + 9) \\times 4}{2} = \\frac{14 \\times 4}{2} = \\frac{56}{2} = 28 \\text{ cm}^2$$`,
    },

    {
      id: '8-3-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-3-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-4-n-quiz2-q0',
            task: 'Hva er arealet av en trekant med grunnlinje $10$ cm og høyde $6$ cm?',
            options: [
              { id: 'a', text: '$60 \\text{ cm}^2$', isCorrect: false },
              { id: 'b', text: '$30 \\text{ cm}^2$', isCorrect: true },
              { id: 'c', text: '$16 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$40 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: '$A = \\frac{g \\times h}{2} = \\frac{10 \\times 6}{2} = \\frac{60}{2} = 30 \\text{ cm}^2$.',
          },
          {
            id: '8-3-4-n-quiz2-q1',
            task: 'Et trapes har parallelle sider $4$ cm og $8$ cm, og høyde $5$ cm. Hva er arealet?',
            options: [
              { id: 'a', text: '$20 \\text{ cm}^2$', isCorrect: false },
              { id: 'b', text: '$40 \\text{ cm}^2$', isCorrect: false },
              { id: 'c', text: '$30 \\text{ cm}^2$', isCorrect: true },
              { id: 'd', text: '$60 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: '$A = \\frac{(4 + 8) \\times 5}{2} = \\frac{12 \\times 5}{2} = \\frac{60}{2} = 30 \\text{ cm}^2$.',
          },
          {
            id: '8-3-4-n-quiz2-q2',
            task: 'Hva er arealet av et parallellogram med grunnlinje $9$ cm og høyde $7$ cm?',
            options: [
              { id: 'a', text: '$63 \\text{ cm}^2$', isCorrect: true },
              { id: 'b', text: '$32 \\text{ cm}^2$', isCorrect: false },
              { id: 'c', text: '$31{,}5 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$16 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: '$A = g \\times h = 9 \\times 7 = 63 \\text{ cm}^2$. Parallellogrammet bruker ikke deling med $2$ -- det er bare trekanten som gjør det.',
          },
        ],
      },
    },

    {
      id: '8-3-4-n-section4',
      type: 'text',
      content: `## Arealet av en sirkel

Sirkelen er en figur der alle punkter har lik avstand til sentrum. Denne avstanden kalles **radius** ($r$). **Diameteren** ($d$) er avstanden tvers gjennom sirkelen, og $d = 2r$.

Arealet av en sirkel er:

$$A = \\pi r^2$$

Her er $\\pi$ (pi) et spesielt tall som er omtrent $3{,}14$. Det er forholdet mellom omkretsen og diameteren til enhver sirkel.

**Hvorfor $\\pi r^2$?** Tenk deg at du klipper en sirkel opp i mange tynne «kakestykker» og legger dem annenhver vei opp og ned. Da får du nesten et parallellogram med grunnlinje $\\pi r$ (halve omkretsen) og høyde $r$. Arealet er $\\pi r \\times r = \\pi r^2$.

**Eksempel:** En sirkel har radius $5$ cm.

$$A = \\pi \\times 5^2 = \\pi \\times 25 = 25\\pi \\approx 78{,}5 \\text{ cm}^2$$

Husk: radius er HALVPARTEN av diameteren. Hvis du får oppgitt diameteren $d = 12$ cm, er $r = 6$ cm, og arealet er $\\pi \\times 6^2 = 36\\pi \\approx 113{,}1 \\text{ cm}^2$.

**Vanlig feil:** Mange glemmer å kvadrere radius og skriver $A = \\pi \\times r$ i stedet for $A = \\pi \\times r^2$. Husk at areal handler om flate (todimensjonalt), så det er logisk at vi ganger $r$ med seg selv.`,
    },

    {
      id: '8-3-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-3-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-4-n-quiz3-q0',
            task: 'Hva er arealet av en sirkel med radius $3$ cm? (Bruk $\\pi \\approx 3{,}14$)',
            options: [
              { id: 'a', text: '$9{,}42 \\text{ cm}^2$', isCorrect: false },
              { id: 'b', text: '$28{,}26 \\text{ cm}^2$', isCorrect: true },
              { id: 'c', text: '$18{,}84 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$6{,}28 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: '$A = \\pi r^2 = 3{,}14 \\times 3^2 = 3{,}14 \\times 9 = 28{,}26 \\text{ cm}^2$.',
          },
          {
            id: '8-3-4-n-quiz3-q1',
            task: 'En sirkel har diameter $10$ cm. Hva er radiusen?',
            options: [
              { id: 'a', text: '$10$ cm', isCorrect: false },
              { id: 'b', text: '$20$ cm', isCorrect: false },
              { id: 'c', text: '$5$ cm', isCorrect: true },
              { id: 'd', text: '$\\pi$ cm', isCorrect: false },
            ],
            solution: 'Radiusen er halvparten av diameteren: $r = \\frac{d}{2} = \\frac{10}{2} = 5$ cm.',
          },
          {
            id: '8-3-4-n-quiz3-q2',
            task: 'Hva skjer med arealet av en sirkel hvis du dobler radiusen?',
            options: [
              { id: 'a', text: 'Arealet dobles', isCorrect: false },
              { id: 'b', text: 'Arealet firedobles', isCorrect: true },
              { id: 'c', text: 'Arealet tredobles', isCorrect: false },
              { id: 'd', text: 'Arealet endres ikke', isCorrect: false },
            ],
            solution: 'Hvis $r$ dobles til $2r$, blir arealet $\\pi(2r)^2 = \\pi \\cdot 4r^2 = 4 \\pi r^2$. Arealet firedobles fordi $r$ er kvadrert i formelen.',
          },
        ],
      },
    },

    {
      id: '8-3-4-n-section5',
      type: 'text',
      content: `## Sammensatte figurer

I virkeligheten møter vi sjelden perfekte rektangler eller sirkler. Ofte er figurer **sammensatte** -- de er satt sammen av flere enklere figurer.

**Strategi for sammensatte figurer:**
1. Del figuren opp i kjente former (rektangler, trekanter, sirkler osv.)
2. Beregn arealet av hver del
3. Legg sammen (eller trekk fra, hvis en del er «kuttet ut»)

**Eksempel:** En L-formet figur kan deles i to rektangler. Et hus sett fra siden kan deles i et rektangel (veggen) og en trekant (taket).

**Eksempel med fratrukket areal:** Et rektangulært gulv på $6 \\times 4 = 24 \\text{ m}^2$ har en sirkelformet søyle i midten med radius $0{,}5$ m. Gulvarealet som skal dekkes er:

$$A = 24 - \\pi \\times 0{,}5^2 = 24 - 0{,}785 \\approx 23{,}2 \\text{ m}^2$$

Når du jobber med sammensatte figurer, lønner det seg å tegne og markere målene tydelig. Identifiser hvilke deler som skal legges til og hvilke som skal trekkes fra. Ta det steg for steg -- da blir selv kompliserte figurer håndterbare.`,
    },

    {
      id: '8-3-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '8-3-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-4-n-quiz4-q0',
            task: 'En figur er satt sammen av et rektangel ($8 \\times 3$ cm) og en halvsirkel med diameter $3$ cm. Hva er omtrent arealet? (Bruk $\\pi \\approx 3{,}14$)',
            options: [
              { id: 'a', text: '$27{,}5 \\text{ cm}^2$', isCorrect: true },
              { id: 'b', text: '$31{,}1 \\text{ cm}^2$', isCorrect: false },
              { id: 'c', text: '$24{,}0 \\text{ cm}^2$', isCorrect: false },
              { id: 'd', text: '$35{,}1 \\text{ cm}^2$', isCorrect: false },
            ],
            solution: 'Rektangel: $8 \\times 3 = 24 \\text{ cm}^2$. Halvsirkel med $r = 1{,}5$: $\\frac{\\pi \\times 1{,}5^2}{2} = \\frac{3{,}14 \\times 2{,}25}{2} \\approx 3{,}5 \\text{ cm}^2$. Totalt: $24 + 3{,}5 = 27{,}5 \\text{ cm}^2$.',
          },
          {
            id: '8-3-4-n-quiz4-q1',
            task: 'Hvilken figur har areal $g \\times h$ (uten å dele med 2)?',
            options: [
              { id: 'a', text: 'Trekant', isCorrect: false },
              { id: 'b', text: 'Trapes', isCorrect: false },
              { id: 'c', text: 'Parallellogram', isCorrect: true },
              { id: 'd', text: 'Sirkel', isCorrect: false },
            ],
            solution: 'Et parallellogram har areal $A = g \\times h$, akkurat som et rektangel. Trekanten deler med $2$, trapeset bruker summen av parallelle sider delt på $2$, og sirkelen bruker $\\pi r^2$.',
          },
        ],
      },
    },

    {
      id: '8-3-4-n-summary',
      type: 'text',
      content: `## Oppsummering

**Areal** måler størrelsen på en flate i kvadratenheter ($\\text{cm}^2$, $\\text{m}^2$).

De viktigste formlene:
- **Rektangel**: $A = l \\times b$
- **Kvadrat**: $A = s^2$
- **Trekant**: $A = \\frac{g \\times h}{2}$
- **Parallellogram**: $A = g \\times h$
- **Trapes**: $A = \\frac{(a + b) \\times h}{2}$
- **Sirkel**: $A = \\pi r^2$

Husk:
- Høyden er alltid **vinkelrett** på grunnlinjen
- Sammensatte figurer deles opp i kjente former
- Ved enhetsomregning ganges med faktoren **to ganger** (fordi areal er todimensjonalt)
- Dobler du radiusen til en sirkel, **firedobles** arealet`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5 NARRATIV: Omkrets
// ============================================================================

export const CHAPTER_8_3_5_NARRATIV: TextbookChapter = {
  id: '8-3-5-narrativ',
  courseId: '8',
  chapterNumber: '3.5',
  title: 'Omkrets',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av omkrets -- der vi oppdager hvordan vi måler lengden rundt en figur, forstår sammenhengen mellom omkrets og pi, og bruker formler i praktiske situasjoner.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum',
  ],
  linkedChapterId: '8-3-5',
  content: [
    {
      id: '8-3-5-n-intro',
      type: 'text',
      content: `## Lengden rundt

Tenk deg at du vil sette opp et gjerde rundt hagen din. For å vite hvor mye gjerde du trenger, må du måle **omkretsen** -- den totale lengden rundt hagen. Eller tenk at du vil lage en ramme rundt et bilde: du trenger å vite hvor lang listen må være.

**Omkrets** er rett og slett avstanden rundt en figur. Hvis du forestiller deg at du går langs kanten av en figur og tilbake til der du startet, er den totale distansen du har gått lik omkretsen.

For en trekant med sider $3$ cm, $4$ cm og $5$ cm er omkretsen $3 + 4 + 5 = 12$ cm. Enkelt! Men for en sirkel, der det ikke finnes rette sider å legge sammen, trenger vi en smart formel. Det er her det berømte tallet $\\pi$ kommer inn.`,
    },

    {
      id: '8-3-5-n-section1',
      type: 'text',
      content: `## Omkrets av rektangler og mangekanter

For en **mangekant** (en figur med rette sider) er omkretsen summen av alle sidene:

$$O = s_1 + s_2 + s_3 + \\ldots + s_n$$

For et **rektangel** med lengde $l$ og bredde $b$ har vi to par like sider:

$$O = l + b + l + b = 2l + 2b = 2(l + b)$$

**Eksempel:** Et fotballmål er $7{,}32$ m bredt og $2{,}44$ m høyt. Omkretsen av åpningen er:

$$O = 2(7{,}32 + 2{,}44) = 2 \\times 9{,}76 = 19{,}52 \\text{ m}$$

For et **kvadrat** med side $s$:

$$O = 4s$$

Fordi alle fire sidene er like.

**Eksempel:** Et kvadratisk rom har side $3{,}5$ m. Omkretsen er $O = 4 \\times 3{,}5 = 14$ m. Hvis du vil sette lister langs gulvet (rundt hele rommet), trenger du $14$ m list.

For en **likesidet trekant** med side $a$:

$$O = 3a$$

Mønsteret er klart: for en regulær $n$-kant (der alle sidene er like) med side $a$ er omkretsen $O = n \\times a$.`,
    },

    {
      id: '8-3-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-3-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-5-n-quiz1-q0',
            task: 'Hva er omkretsen av et rektangel med lengde $12$ cm og bredde $5$ cm?',
            options: [
              { id: 'a', text: '$60 \\text{ cm}$', isCorrect: false },
              { id: 'b', text: '$34 \\text{ cm}$', isCorrect: true },
              { id: 'c', text: '$17 \\text{ cm}$', isCorrect: false },
              { id: 'd', text: '$24 \\text{ cm}$', isCorrect: false },
            ],
            solution: '$O = 2(l + b) = 2(12 + 5) = 2 \\times 17 = 34$ cm.',
          },
          {
            id: '8-3-5-n-quiz1-q1',
            task: 'Et kvadrat har omkrets $36$ cm. Hvor lang er hver side?',
            options: [
              { id: 'a', text: '$6$ cm', isCorrect: false },
              { id: 'b', text: '$9$ cm', isCorrect: true },
              { id: 'c', text: '$12$ cm', isCorrect: false },
              { id: 'd', text: '$18$ cm', isCorrect: false },
            ],
            solution: 'Omkretsen av et kvadrat er $O = 4s$. Altså $s = \\frac{O}{4} = \\frac{36}{4} = 9$ cm.',
          },
          {
            id: '8-3-5-n-quiz1-q2',
            task: 'En regulær sekskant har side $5$ cm. Hva er omkretsen?',
            options: [
              { id: 'a', text: '$25$ cm', isCorrect: false },
              { id: 'b', text: '$30$ cm', isCorrect: true },
              { id: 'c', text: '$35$ cm', isCorrect: false },
              { id: 'd', text: '$20$ cm', isCorrect: false },
            ],
            solution: 'En regulær sekskant har $6$ like sider. $O = 6 \\times 5 = 30$ cm.',
          },
        ],
      },
    },

    {
      id: '8-3-5-n-section2',
      type: 'text',
      content: `## Omkretsen av en sirkel

Sirkelen har ingen rette sider -- den er buet hele veien rundt. Likevel kan vi beregne omkretsen, og her kommer det magiske tallet $\\pi$ (pi) inn.

Allerede for tusenvis av år siden oppdaget mennesker at forholdet mellom omkretsen og diameteren til en sirkel alltid er det samme, uansett hvor stor sirkelen er:

$$\\frac{\\text{omkrets}}{\\text{diameter}} = \\pi \\approx 3{,}14159\\ldots$$

Dermed er formelen for omkretsen:

$$O = \\pi \\times d = 2\\pi r$$

der $d$ er diameteren og $r$ er radiusen ($d = 2r$).

**Eksempel:** En sirkel har radius $4$ cm.

$$O = 2\\pi \\times 4 = 8\\pi \\approx 25{,}1 \\text{ cm}$$

**Eksempel:** Diameteren til en sykkelhjul er $70$ cm. Omdreiningen er:

$$O = \\pi \\times 70 \\approx 219{,}9 \\text{ cm} \\approx 2{,}2 \\text{ m}$$

Det betyr at hjulet tilbakelegger ca. $2{,}2$ m per omdreining.

**Hva er $\\pi$?** Pi er et irrasjonalt tall -- desimalene fortsetter i det uendelige uten å gjenta seg. Vi bruker oftest $\\pi \\approx 3{,}14$ i utregninger, eller lar svaret stå med $\\pi$ for et eksakt svar.`,
    },

    {
      id: '8-3-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-3-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-5-n-quiz2-q0',
            task: 'Hva er omkretsen av en sirkel med diameter $10$ cm? (Bruk $\\pi \\approx 3{,}14$)',
            options: [
              { id: 'a', text: '$78{,}5$ cm', isCorrect: false },
              { id: 'b', text: '$31{,}4$ cm', isCorrect: true },
              { id: 'c', text: '$15{,}7$ cm', isCorrect: false },
              { id: 'd', text: '$62{,}8$ cm', isCorrect: false },
            ],
            solution: '$O = \\pi \\times d = 3{,}14 \\times 10 = 31{,}4$ cm.',
          },
          {
            id: '8-3-5-n-quiz2-q1',
            task: 'En sirkel har omkrets $\\approx 62{,}8$ cm. Omtrent hvor stor er radiusen? (Bruk $\\pi \\approx 3{,}14$)',
            options: [
              { id: 'a', text: '$5$ cm', isCorrect: false },
              { id: 'b', text: '$10$ cm', isCorrect: true },
              { id: 'c', text: '$20$ cm', isCorrect: false },
              { id: 'd', text: '$15$ cm', isCorrect: false },
            ],
            solution: '$O = 2\\pi r$, så $r = \\frac{O}{2\\pi} = \\frac{62{,}8}{2 \\times 3{,}14} = \\frac{62{,}8}{6{,}28} = 10$ cm.',
          },
        ],
      },
    },

    {
      id: '8-3-5-n-section3',
      type: 'text',
      content: `## Forskjellen mellom areal og omkrets

Mange elever blander areal og omkrets, så la oss være helt tydelige:

- **Omkrets** er **lengden rundt** figuren. Måles i lengdeenheter (cm, m, km).
- **Areal** er **flaten inni** figuren. Måles i kvadratenheter ($\\text{cm}^2$, $\\text{m}^2$).

Tenk på det slik: omkretsen er gjerdet rundt en hage, arealet er plenen inni.

**Viktig innsikt:** To figurer kan ha **lik omkrets** men **ulikt areal** -- og omvendt.

Et rektangel med sider $1 \\times 5$ har omkrets $2(1 + 5) = 12$ cm og areal $1 \\times 5 = 5 \\text{ cm}^2$.

Et rektangel med sider $3 \\times 3$ (et kvadrat) har også omkrets $2(3 + 3) = 12$ cm, men areal $3 \\times 3 = 9 \\text{ cm}^2$.

Samme omkrets, men ulikt areal! Faktisk gir et **kvadrat** alltid størst areal for en gitt omkrets blant alle rektangler. Og blant ALLE figurer med gitt omkrets gir **sirkelen** størst areal. Naturen «vet» dette -- derfor er såpebobler runde!`,
    },

    {
      id: '8-3-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-3-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-5-n-quiz3-q0',
            task: 'Omkretsen måles i:',
            options: [
              { id: 'a', text: 'Kvadratmeter ($\\text{m}^2$)', isCorrect: false },
              { id: 'b', text: 'Kubikkmeter ($\\text{m}^3$)', isCorrect: false },
              { id: 'c', text: 'Meter (m)', isCorrect: true },
              { id: 'd', text: 'Liter (L)', isCorrect: false },
            ],
            solution: 'Omkrets er en lengde -- avstanden rundt figuren. Den måles i lengdeenheter som cm, m eller km. Areal bruker kvadratenheter, volum bruker kubikkenheter.',
          },
          {
            id: '8-3-5-n-quiz3-q1',
            task: 'Blant alle rektangler med omkrets $20$ cm, hvilken form gir størst areal?',
            options: [
              { id: 'a', text: '$1 \\times 9$ cm', isCorrect: false },
              { id: 'b', text: '$5 \\times 5$ cm (kvadrat)', isCorrect: true },
              { id: 'c', text: '$2 \\times 8$ cm', isCorrect: false },
              { id: 'd', text: '$3 \\times 7$ cm', isCorrect: false },
            ],
            solution: 'Et kvadrat gir alltid størst areal for en gitt omkrets blant rektangler. $5 \\times 5 = 25 \\text{ cm}^2$, mens $1 \\times 9 = 9$, $2 \\times 8 = 16$, $3 \\times 7 = 21$.',
          },
        ],
      },
    },

    {
      id: '8-3-5-n-section4',
      type: 'text',
      content: `## Omkrets av sammensatte figurer

Akkurat som med areal, kan vi beregne omkretsen av sammensatte figurer. Men her gjelder en viktig regel: **omkretsen er bare den ytre kanten** -- sidene som er «inne i» figuren telles ikke.

**Eksempel:** En bane er formet som et rektangel med en halvsirkel i hver ende. Rektangeldelen er $100$ m lang og $60$ m bred.

Omkretsen består av:
- De to rette sidene: $2 \\times 100 = 200$ m
- De to halvsirklene danner til sammen én hel sirkel med diameter $60$ m: $O_{\\text{sirkel}} = \\pi \\times 60 \\approx 188{,}5$ m

Total omkrets: $200 + 188{,}5 = 388{,}5$ m.

**Eksempel:** En L-formet figur der du kjenner alle ytre sider. Summer bare de synlige sidene -- ikke de «indre» linjene der delene møtes.

**Tips for sammensatte figurer:**
1. Tegn figuren og marker den ytre kanten
2. Identifiser om noen deler er buer (deler av sirkler)
3. Beregn lengden av hvert segment og summer alt`,
    },

    {
      id: '8-3-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '8-3-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-5-n-quiz4-q0',
            task: 'En halvsirkel har diameter $14$ cm. Hva er omkretsen av halvsirkelen (den buede delen + den rette siden)? (Bruk $\\pi \\approx 3{,}14$)',
            options: [
              { id: 'a', text: '$22$ cm', isCorrect: false },
              { id: 'b', text: '$36$ cm', isCorrect: true },
              { id: 'c', text: '$44$ cm', isCorrect: false },
              { id: 'd', text: '$25{,}1$ cm', isCorrect: false },
            ],
            solution: 'Den buede delen er halve sirkelen: $\\frac{\\pi \\times 14}{2} = \\frac{3{,}14 \\times 14}{2} \\approx 22$ cm. Den rette siden (diameteren) er $14$ cm. Totalt: $22 + 14 = 36$ cm.',
          },
          {
            id: '8-3-5-n-quiz4-q1',
            task: 'Hva skjer med omkretsen av en sirkel hvis du dobler radiusen?',
            options: [
              { id: 'a', text: 'Omkretsen firedobles', isCorrect: false },
              { id: 'b', text: 'Omkretsen dobles', isCorrect: true },
              { id: 'c', text: 'Omkretsen tredobles', isCorrect: false },
              { id: 'd', text: 'Omkretsen endres ikke', isCorrect: false },
            ],
            solution: '$O = 2\\pi r$. Dobler vi $r$ til $2r$: $O = 2\\pi(2r) = 4\\pi r$. Det er dobbelt av $2\\pi r$. Omkretsen dobles fordi $r$ bare er i første potens (til forskjell fra areal der $r$ er kvadrert).',
          },
        ],
      },
    },

    {
      id: '8-3-5-n-summary',
      type: 'text',
      content: `## Oppsummering

**Omkrets** er den totale lengden rundt en figur, målt i lengdeenheter (cm, m).

De viktigste formlene:
- **Rektangel**: $O = 2(l + b)$
- **Kvadrat**: $O = 4s$
- **Regulær $n$-kant**: $O = n \\times a$
- **Sirkel**: $O = \\pi d = 2\\pi r$

Husk:
- Omkrets $\\neq$ areal. Omkrets er lengden rundt, areal er flaten inni.
- $\\pi \\approx 3{,}14$ -- forholdet mellom omkrets og diameter i alle sirkler
- Sammensatte figurer: summer bare de ytre kantene
- Dobler du radiusen, dobles omkretsen (men arealet firedobles)
- Et kvadrat gir størst areal for en gitt omkrets blant rektangler`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.6 NARRATIV: Volum
// ============================================================================

export const CHAPTER_8_3_6_NARRATIV: TextbookChapter = {
  id: '8-3-6-narrativ',
  courseId: '8',
  chapterNumber: '3.6',
  title: 'Volum',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av volum -- der vi utforsker det tredimensjonale, forstår formler for romfigurer som prisme, sylinder og kule, og oppdager sammenhengen mellom volum og liter.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og argumentere for formlar for areal og volum',
  ],
  linkedChapterId: '8-3-6',
  content: [
    {
      id: '8-3-6-n-intro',
      type: 'text',
      content: `## Fra flatt til tredimensjonalt

Hittil har vi jobbet med flate figurer -- rektangler, trekanter, sirkler. Vi har målt omkretsen (lengden rundt) og arealet (flaten inni). Men verden er ikke flat! Den er **tredimensjonal**: den har lengde, bredde og høyde.

**Volum** er et mål på hvor mye plass en tredimensjonal gjenstand tar opp. Tenk på en melkekartong, en fotball eller en terning -- alle disse har et volum. Vi måler volum i **kubikkenheter** -- for eksempel kubikkcentimeter ($\\text{cm}^3$), kubikkmeter ($\\text{m}^3$) eller kubikkdesimeter ($\\text{dm}^3$).

En kubikkcentimeter ($1 \\text{ cm}^3$) er en terning der alle kanter er $1$ cm. Volumet til en gjenstand er antall slike terninger du trenger for å fylle den helt opp.

Det fine er at sammenhengen mellom volum og liter er enkel: $1 \\text{ dm}^3 = 1$ liter. En melkekartong på 1 liter er altså $1 \\text{ dm}^3$!`,
    },

    {
      id: '8-3-6-n-section1',
      type: 'text',
      content: `## Volum av rett prisme (kasse)

Den enkleste romfiguren er et **rett firkantet prisme** -- det vi i dagligtale kaller en kasse eller boks. Tenk på en skobok, en murstein eller et rom.

Volumet er:

$$V = \\text{lengde} \\times \\text{bredde} \\times \\text{høyde} = l \\times b \\times h$$

**Eksempel:** En skobok er $30$ cm lang, $20$ cm bred og $12$ cm høy.

$$V = 30 \\times 20 \\times 12 = 7\\,200 \\text{ cm}^3$$

En **terning** (kube) er et spesialtilfelle der alle kantene har lik lengde $s$:

$$V = s^3$$

Derfor heter det «kubikk»-centimeter -- volumet av en terning med side $1$ cm.

**Enhetsomregning:**
- $1 \\text{ m}^3 = 1\\,000\\,000 \\text{ cm}^3$ (fordi $100^3 = 1\\,000\\,000$)
- $1 \\text{ m}^3 = 1\\,000 \\text{ dm}^3 = 1\\,000$ liter
- $1 \\text{ dm}^3 = 1\\,000 \\text{ cm}^3 = 1$ liter
- $1 \\text{ cm}^3 = 1 \\text{ mL}$ (milliliter)

Ved volumomregning ganger vi med faktoren **tre ganger** (lengde $\\times$ bredde $\\times$ høyde -- tre dimensjoner).`,
    },

    {
      id: '8-3-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-3-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-6-n-quiz1-q0',
            task: 'Hva er volumet av en kasse med mål $5 \\times 4 \\times 3$ cm?',
            options: [
              { id: 'a', text: '$12 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$60 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$24 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$47 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = 5 \\times 4 \\times 3 = 60 \\text{ cm}^3$.',
          },
          {
            id: '8-3-6-n-quiz1-q1',
            task: 'Hvor mange liter er $5\\,000 \\text{ cm}^3$?',
            options: [
              { id: 'a', text: '$0{,}5$ L', isCorrect: false },
              { id: 'b', text: '$5$ L', isCorrect: true },
              { id: 'c', text: '$50$ L', isCorrect: false },
              { id: 'd', text: '$500$ L', isCorrect: false },
            ],
            solution: '$1$ L $= 1 \\text{ dm}^3 = 1\\,000 \\text{ cm}^3$. Altså $5\\,000 \\text{ cm}^3 = \\frac{5\\,000}{1\\,000} = 5$ L.',
          },
          {
            id: '8-3-6-n-quiz1-q2',
            task: 'Hva er volumet av en terning med side $6$ cm?',
            options: [
              { id: 'a', text: '$36 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$216 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$18 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$72 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = s^3 = 6^3 = 6 \\times 6 \\times 6 = 216 \\text{ cm}^3$.',
          },
        ],
      },
    },

    {
      id: '8-3-6-n-section2',
      type: 'text',
      content: `## Generelle prismer

En **prisme** er en romfigur der grunnflaten og toppflaten er like og parallelle, og sidene er rektangler. Kassen vi nettopp så på er en prisme med rektangulær grunnflate. Men grunnflaten kan ha hvilken som helst form -- trekant, femkant, sekskant, og så videre.

Formelen for volumet av ethvert prisme er overraskende enkel:

$$V = G \\times h$$

der $G$ er **arealet av grunnflaten** og $h$ er **høyden** (den vinkelrette avstanden mellom grunnflaten og toppflaten).

**Trekantet prisme** (f.eks. en Toblerone-boks): Grunnflaten er en trekant med areal $G = \\frac{g \\times h_{\\text{trekant}}}{2}$.

$$V = \\frac{g \\times h_{\\text{trekant}}}{2} \\times h_{\\text{prisme}}$$

**Eksempel:** Et trekantet prisme har en trekantformet grunnflate med grunnlinje $6$ cm og trekanthøyde $4$ cm. Prismet er $10$ cm langt.

$$G = \\frac{6 \\times 4}{2} = 12 \\text{ cm}^2$$

$$V = 12 \\times 10 = 120 \\text{ cm}^3$$

Denne generelle formelen ($V = G \\times h$) fungerer for ALLE prismer, uansett formen på grunnflaten. Det gjør den til en av de mest allsidige formlene i geometrien.`,
    },

    {
      id: '8-3-6-n-section3',
      type: 'text',
      content: `## Volum av en sylinder

En **sylinder** er en romfigur med sirkulær grunnflate og toppflate -- som en boks hermetikk eller en rulle papir. Egentlig er en sylinder bare et «sirkulært prisme».

Siden grunnflaten er en sirkel med areal $G = \\pi r^2$, får vi:

$$V = G \\times h = \\pi r^2 \\times h = \\pi r^2 h$$

**Eksempel:** En sylinderformet vannflaske har radius $4$ cm og høyde $20$ cm.

$$V = \\pi \\times 4^2 \\times 20 = \\pi \\times 16 \\times 20 = 320\\pi \\approx 1\\,005 \\text{ cm}^3$$

Siden $1\\,000 \\text{ cm}^3 = 1$ liter, rommer flasken omtrent 1 liter. Det stemmer godt!

**Eksempel:** En rund kake har diameter $24$ cm og er $8$ cm høy. Radius er $r = 12$ cm.

$$V = \\pi \\times 12^2 \\times 8 = \\pi \\times 144 \\times 8 = 1\\,152\\pi \\approx 3\\,619 \\text{ cm}^3 \\approx 3{,}6 \\text{ liter}$$

**Husk:** Pass på om du får oppgitt radius eller diameter! Hvis diameteren er $10$ cm, er radiusen $5$ cm. Det er en av de vanligste feilene.`,
    },

    {
      id: '8-3-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-3-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-6-n-quiz2-q0',
            task: 'Hva er volumet av en sylinder med radius $3$ cm og høyde $10$ cm? (Bruk $\\pi \\approx 3{,}14$)',
            options: [
              { id: 'a', text: '$94{,}2 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$282{,}6 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$188{,}4 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$90 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = \\pi r^2 h = 3{,}14 \\times 3^2 \\times 10 = 3{,}14 \\times 9 \\times 10 = 282{,}6 \\text{ cm}^3$.',
          },
          {
            id: '8-3-6-n-quiz2-q1',
            task: 'Et trekantet prisme har grunnflate med areal $15 \\text{ cm}^2$ og høyde $8$ cm. Hva er volumet?',
            options: [
              { id: 'a', text: '$60 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$120 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$23 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$240 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = G \\times h = 15 \\times 8 = 120 \\text{ cm}^3$. Formelen $V = G \\times h$ gjelder for alle prismer.',
          },
        ],
      },
    },

    {
      id: '8-3-6-n-section4',
      type: 'text',
      content: `## Volum av en kule

En **kule** er den tredimensjonale versjonen av en sirkel. Tenk på en fotball, en basketball eller jorden -- alle er (tilnærmet) kuleformede.

Formelen for volumet av en kule er:

$$V = \\frac{4}{3} \\pi r^3$$

Denne formelen er vanskeligere å utlede enn de forrige (den krever integrasjon, som du lærer senere), men den er enkel å bruke.

**Eksempel:** En basketball har diameter $24$ cm. Radius er $r = 12$ cm.

$$V = \\frac{4}{3} \\pi \\times 12^3 = \\frac{4}{3} \\pi \\times 1\\,728 = 2\\,304\\pi \\approx 7\\,238 \\text{ cm}^3 \\approx 7{,}2 \\text{ liter}$$

**Eksempel:** En liten glasskule har radius $1{,}5$ cm.

$$V = \\frac{4}{3} \\pi \\times 1{,}5^3 = \\frac{4}{3} \\pi \\times 3{,}375 = 4{,}5\\pi \\approx 14{,}1 \\text{ cm}^3$$

**Viktig observasjon:** Radiusen er i **tredje potens** ($r^3$). Det betyr at volumet vokser veldig raskt når radiusen øker. Dobler du radiusen, blir volumet $2^3 = 8$ ganger så stort! En kule med dobbelt så stor radius rommer altså åtte ganger så mye.`,
    },

    {
      id: '8-3-6-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-3-6-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-6-n-quiz3-q0',
            task: 'Hva skjer med volumet av en kule hvis du dobler radiusen?',
            options: [
              { id: 'a', text: 'Det dobles', isCorrect: false },
              { id: 'b', text: 'Det firedobles', isCorrect: false },
              { id: 'c', text: 'Det åttedobles', isCorrect: true },
              { id: 'd', text: 'Det sekstedobles', isCorrect: false },
            ],
            solution: 'Volumet inneholder $r^3$. Dobler vi $r$ til $2r$: $(2r)^3 = 8r^3$. Volumet blir $8$ ganger så stort.',
          },
          {
            id: '8-3-6-n-quiz3-q1',
            task: 'Hva er volumet av en kule med radius $3$ cm? (Bruk $\\pi \\approx 3{,}14$)',
            options: [
              { id: 'a', text: '$28{,}3 \\text{ cm}^3$', isCorrect: false },
              { id: 'b', text: '$113{,}0 \\text{ cm}^3$', isCorrect: true },
              { id: 'c', text: '$84{,}8 \\text{ cm}^3$', isCorrect: false },
              { id: 'd', text: '$36 \\text{ cm}^3$', isCorrect: false },
            ],
            solution: '$V = \\frac{4}{3} \\pi r^3 = \\frac{4}{3} \\times 3{,}14 \\times 27 = \\frac{4 \\times 3{,}14 \\times 27}{3} = \\frac{339{,}12}{3} \\approx 113{,}0 \\text{ cm}^3$.',
          },
          {
            id: '8-3-6-n-quiz3-q2',
            task: 'Hvilken formel gir volumet av en sylinder?',
            options: [
              { id: 'a', text: '$V = \\frac{4}{3} \\pi r^3$', isCorrect: false },
              { id: 'b', text: '$V = \\pi r^2 h$', isCorrect: true },
              { id: 'c', text: '$V = l \\times b \\times h$', isCorrect: false },
              { id: 'd', text: '$V = 2\\pi r h$', isCorrect: false },
            ],
            solution: 'Sylinder: $V = \\pi r^2 h$ (grunnflate ganger høyde). $\\frac{4}{3}\\pi r^3$ er kulen, $l \\times b \\times h$ er kassen, og $2\\pi rh$ er overflatearealet av den buede delen.',
          },
        ],
      },
    },

    {
      id: '8-3-6-n-section5',
      type: 'text',
      content: `## Skalering og volum

En spennende egenskap ved volum er hvordan det endrer seg når vi skalerer en figur. Hvis vi forstørrer alle mål med en faktor $k$, endres:

- **Lengder** med faktor $k$
- **Areal** med faktor $k^2$
- **Volum** med faktor $k^3$

**Eksempel:** En modell av et hus er laget i skala $1 : 50$. Huset er $10$ m langt, $8$ m bredt og $6$ m høyt. Modellen er $20$ cm lang.

- Skaleringsfaktor: $k = 50$
- Modellens volum vs. husets volum: $\\frac{1}{50^3} = \\frac{1}{125\\,000}$

Husets volum: $10 \\times 8 \\times 6 = 480 \\text{ m}^3$

Modellens volum: $\\frac{480}{125\\,000} = 0{,}00384 \\text{ m}^3 = 3\\,840 \\text{ cm}^3$

Sjekk: $0{,}20 \\times 0{,}16 \\times 0{,}12 = 0{,}00384 \\text{ m}^3$. Stemmer!

Denne «kubikkregelen» forklarer mye i naturen. En elefant er kanskje $4$ ganger så lang som en hund, men den veier ikke $4$ ganger så mye -- den veier rundt $4^3 = 64$ ganger så mye! Det er derfor store dyr trenger tykkere bein i forhold til kroppsstørrelsen.`,
    },

    {
      id: '8-3-6-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '8-3-6-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-3-6-n-quiz4-q0',
            task: 'Alle mål i en figur tredobles. Hva skjer med volumet?',
            options: [
              { id: 'a', text: 'Det tredobles', isCorrect: false },
              { id: 'b', text: 'Det nidobles', isCorrect: false },
              { id: 'c', text: 'Det blir $27$ ganger så stort', isCorrect: true },
              { id: 'd', text: 'Det blir $9$ ganger så stort', isCorrect: false },
            ],
            solution: 'Volumet endres med $k^3$. Når $k = 3$: $3^3 = 27$. Volumet blir $27$ ganger så stort.',
          },
          {
            id: '8-3-6-n-quiz4-q1',
            task: 'Hva er $1 \\text{ dm}^3$ i liter?',
            options: [
              { id: 'a', text: '$0{,}1$ L', isCorrect: false },
              { id: 'b', text: '$10$ L', isCorrect: false },
              { id: 'c', text: '$1$ L', isCorrect: true },
              { id: 'd', text: '$100$ L', isCorrect: false },
            ],
            solution: '$1 \\text{ dm}^3 = 1$ liter. Dette er en av de viktigste enhetsomregningene å huske.',
          },
        ],
      },
    },

    {
      id: '8-3-6-n-summary',
      type: 'text',
      content: `## Oppsummering

**Volum** måler hvor mye plass en tredimensjonal gjenstand tar opp, i kubikkenheter ($\\text{cm}^3$, $\\text{m}^3$).

De viktigste formlene:
- **Kasse (rett firkantet prisme)**: $V = l \\times b \\times h$
- **Terning**: $V = s^3$
- **Prisme (generelt)**: $V = G \\times h$ (grunnflateareal ganger høyde)
- **Sylinder**: $V = \\pi r^2 h$
- **Kule**: $V = \\frac{4}{3} \\pi r^3$

Enhetsomregning:
- $1 \\text{ dm}^3 = 1$ liter
- $1 \\text{ m}^3 = 1\\,000$ liter
- $1 \\text{ cm}^3 = 1$ mL

Skalering: forstørrer du alle mål med faktor $k$, endres volumet med $k^3$.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_3_4_NARRATIV,
  CHAPTER_8_3_5_NARRATIV,
  CHAPTER_8_3_6_NARRATIV,
];
