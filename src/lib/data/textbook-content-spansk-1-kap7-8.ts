/* eslint-disable */
// @ts-nocheck
/**
 * Spansk niva 1 - Tekstbokinnhold kapittel 7-8
 *
 * Dekker LK20 laereplan for fremmedsprak niva 1
 * Struktur: teori -> eksempel -> oppgave (gjentatt)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: La ropa - Klaerne
// ============================================================================

export const CHAPTER_SPANSK_1_7_1: TextbookChapter = {
  id: 'spansk-1-7-1',
  courseId: 'spansk-1',
  chapterNumber: '7.1',
  title: 'La ropa',
  subtitle: 'Klaerne',
  description: 'Laer grunnleggende ord for klaer og tilbehoer pa spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi klaer og tilbehoer',
  ],
  content: [
    {
      id: 'spansk-1-7-1-intro',
      type: 'text',
      content: `## Klaer pa spansk

A kunne snakke om klaer er nyttig i mange situasjoner - nar du handler, pakker til en reise, eller beskriver hva noen har pa seg.

Pa spansk har alle substantiver kjonn: hankjonn (masculino) eller hunkjonn (femenino). Klaesord kan vaere begge deler, sa det er viktig a laere dem med riktig artikkel!`,
    },
    {
      id: 'spansk-1-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Overkropp',
      content: `**Klaer for overkroppen:**

| Spansk | Norsk |
|--------|-------|
| la camiseta | t-skjorte |
| la camisa | skjorte |
| el jersey | genser |
| la chaqueta | jakke |
| el abrigo | frakk/ytterjakke |
| el vestido | kjole |
| la blusa | bluse |`,
    },
    {
      id: 'spansk-1-7-1-def-2',
      type: 'definition',
      title: 'Vokabular: Underkropp og fottoy',
      content: `**Klaer for underkroppen og foetter:**

| Spansk | Norsk |
|--------|-------|
| los pantalones | bukse |
| la falda | skjoert |
| los pantalones cortos | shorts |
| los vaqueros | jeans |
| los zapatos | sko |
| las zapatillas | joggesko/tofler |
| las botas | stoevler |
| los calcetines | sokker |`,
    },
    {
      id: 'spansk-1-7-1-text-1',
      type: 'text',
      content: `**Tilbehoer (Los accesorios):**

| Spansk | Norsk |
|--------|-------|
| el reloj | klokke |
| las gafas | briller |
| las gafas de sol | solbriller |
| el bolso | veske |
| el cinturon | belte |
| la gorra | caps/lue |
| la bufanda | skjerf |
| los guantes | hansker |`,
    },
    {
      id: 'spansk-1-7-1-tip-1',
      type: 'tip',
      content: `Legg merke til at noen klaesplagg alltid brukes i flertall pa spansk, akkurat som pa norsk: los pantalones (bukse/bukser), los zapatos (sko/skoene), los calcetines (sokkene), las gafas (brillene).`,
    },
    {
      id: 'spansk-1-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Oversett til norsk',
      problem: `Oversett disse klaesordene til norsk:

a) la camiseta
b) los pantalones
c) el vestido
d) los zapatos`,
      solution: `a) la camiseta = **t-skjorte**
b) los pantalones = **bukse**
c) el vestido = **kjole**
d) los zapatos = **sko**

**Huske-tips:** "Zapatos" minner om det engelske "shoes" - begge handler om fottoy!`,
    },
    {
      id: 'spansk-1-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-1-ex-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk (husk artikkelen):',
        subTasks: [
          { label: 'a', task: 't-skjorte', solution: 'la camiseta', answer: 'la camiseta' },
          { label: 'b', task: 'bukse', solution: 'los pantalones', answer: 'los pantalones' },
          { label: 'c', task: 'sko', solution: 'los zapatos', answer: 'los zapatos' },
          { label: 'd', task: 'genser', solution: 'el jersey', answer: 'el jersey' },
        ],
        solution: 'a) la camiseta, b) los pantalones, c) los zapatos, d) el jersey',
        hints: ['Husk at alle spanske substantiver har kjonn', 'Pantalones og zapatos er alltid i flertall'],
      },
    },
    {
      id: 'spansk-1-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Hvilket kjonn?',
      problem: `Velg riktig artikkel (el eller la):

a) ___ camisa (skjorte)
b) ___ vestido (kjole)
c) ___ chaqueta (jakke)`,
      solution: `a) **la** camisa - hunkjonn
b) **el** vestido - hankjonn
c) **la** chaqueta - hunkjonn

**Tips:** Mange klaesord som slutter pa -a er hunkjonn (la): la camisa, la camiseta, la chaqueta, la falda. Ord som slutter pa -o er ofte hankjonn (el): el vestido, el abrigo.`,
    },
    {
      id: 'spansk-1-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig artikkel (el, la, los eller las):',
        subTasks: [
          { label: 'a', task: '___ falda', solution: 'la', answer: 'la' },
          { label: 'b', task: '___ abrigo', solution: 'el', answer: 'el' },
          { label: 'c', task: '___ calcetines', solution: 'los', answer: 'los' },
          { label: 'd', task: '___ botas', solution: 'las', answer: 'las' },
        ],
        solution: 'a) la falda, b) el abrigo, c) los calcetines, d) las botas',
        hints: ['Ord pa -a er ofte hunkjonn', 'Flertall: los (hankjonn), las (hunkjonn)'],
      },
    },
    {
      id: 'spansk-1-7-1-text-2',
      type: 'text',
      content: `## Kategorisering av klaer

Vi kan gruppere klaer etter situasjon:

| Situasjon | Klaer |
|-----------|-------|
| Pa skolen | la camiseta, los vaqueros, las zapatillas |
| Pa festen | el vestido, la camisa, los zapatos |
| Pa stranden | los pantalones cortos, las gafas de sol |
| Om vinteren | el abrigo, la bufanda, los guantes, la gorra |

Det er nyttig a tenke pa klaer i grupper nar du skal laere dem!`,
    },
    {
      id: 'spansk-1-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Klaer til anledningen',
      problem: `Hvilke klaer passer til disse situasjonene? Skriv pa spansk:

a) Du skal pa skolen (2 plagg)
b) Det er kaldt ute (2 plagg)
c) Du skal pa en fest (2 plagg)`,
      solution: `a) Pa skolen: **la camiseta y los vaqueros** (t-skjorte og jeans)
b) Kaldt ute: **el abrigo y la bufanda** (frakk og skjerf)
c) Pa en fest: **el vestido y los zapatos** (kjole og sko)

**Merk:** "y" betyr "og" pa spansk.`,
    },
    {
      id: 'spansk-1-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre klaesplagg pa spansk for hver situasjon:',
        subTasks: [
          { label: 'a', task: 'Pa stranden', solution: 'Los pantalones cortos, las gafas de sol, las zapatillas', answer: 'Los pantalones cortos, las gafas de sol, las zapatillas' },
          { label: 'b', task: 'Om vinteren', solution: 'El abrigo, la bufanda, los guantes', answer: 'El abrigo, la bufanda, los guantes' },
          { label: 'c', task: 'Pa en vanlig skoledag', solution: 'La camiseta, los vaqueros, las zapatillas', answer: 'La camiseta, los vaqueros, las zapatillas' },
        ],
        solution: 'a) Los pantalones cortos, las gafas de sol, las zapatillas. b) El abrigo, la bufanda, los guantes. c) La camiseta, los vaqueros, las zapatillas.',
        hints: ['Tenk pa vaer og temperatur', 'Husk artiklene foran hvert ord'],
      },
    },
    {
      id: 'spansk-1-7-1-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `I spansktalende land er det vanlig a kle seg litt penere enn i Norge til daglig. Spesielt i Spania legger mange vekt pa utseendet, og det er vanlig a bytte klaer nar man gar ut om kvelden. Uttrykket "ir de compras" (a ga og handle) er en populaer fritidsaktivitet.`,
    },
    {
      id: 'spansk-1-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett tilbehoeret til spansk:',
        subTasks: [
          { label: 'a', task: 'klokke', solution: 'el reloj', answer: 'el reloj' },
          { label: 'b', task: 'briller', solution: 'las gafas', answer: 'las gafas' },
          { label: 'c', task: 'veske', solution: 'el bolso', answer: 'el bolso' },
          { label: 'd', task: 'belte', solution: 'el cinturon', answer: 'el cinturon' },
        ],
        solution: 'a) el reloj, b) las gafas, c) el bolso, d) el cinturon',
        hints: ['Reloj ligner litt pa "relokke"', 'Gafas er alltid i flertall pa spansk'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: En la tienda de ropa - I klesbutikken
// ============================================================================

export const CHAPTER_SPANSK_1_7_2: TextbookChapter = {
  id: 'spansk-1-7-2',
  courseId: 'spansk-1',
  chapterNumber: '7.2',
  title: 'En la tienda de ropa',
  subtitle: 'I klesbutikken',
  description: 'Laer a handle klaer og kommunisere med ekspeditoerer pa spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere i klesbutikk',
  ],
  content: [
    {
      id: 'spansk-1-7-2-intro',
      type: 'text',
      content: `## Handle klaer pa spansk

Nar du handler klaer i et spansktalende land, er det nyttig a kunne noen viktige fraser. La oss laere de vanligste uttrykkene for klesbutikken!`,
    },
    {
      id: 'spansk-1-7-2-def-1',
      type: 'definition',
      title: 'Nyttige shoppingfraser',
      content: `**Ekspeditoeren spor:**

| Spansk | Norsk |
|--------|-------|
| ¿Puedo ayudarle? | Kan jeg hjelpe deg? |
| ¿Qué talla tiene? | Hvilken storrelse har du? |
| ¿De qué color? | Hvilken farge? |
| ¿Algo más? | Noe mer? |

**Du kan si:**

| Spansk | Norsk |
|--------|-------|
| Busco... | Jeg leter etter... |
| ¿Tiene...? | Har dere...? |
| ¿Cuánto cuesta? | Hvor mye koster det? |
| ¿Puedo probármelo? | Kan jeg prove det? |`,
    },
    {
      id: 'spansk-1-7-2-def-2',
      type: 'definition',
      title: 'I proverommet og ved kassen',
      content: `**I proverommet (el probador):**

| Spansk | Norsk |
|--------|-------|
| ¿Dónde está el probador? | Hvor er proverommet? |
| Me queda bien | Det passer meg bra |
| Me queda grande | Det er for stort |
| Me queda pequeño | Det er for lite |
| No me gusta | Jeg liker det ikke |

**Ved betaling:**

| Spansk | Norsk |
|--------|-------|
| Me lo llevo | Jeg tar det |
| ¿Aceptan tarjeta? | Tar dere kort? |
| ¿Puedo pagar en efectivo? | Kan jeg betale kontant? |
| El recibo | Kvitteringen |`,
    },
    {
      id: 'spansk-1-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: I klesbutikken',
      problem: `Les dialogen og svar pa sporsmalene:

Dependiente: ¡Buenos días! ¿Puedo ayudarle?
Cliente: Sí, busco una camiseta.
Dependiente: ¿Qué talla?
Cliente: La talla M, por favor.
Dependiente: Aquí tiene. ¿Quiere probársela?
Cliente: Sí, gracias. ¿Dónde está el probador?

a) Hva leter kunden etter?
b) Hvilken storrelse trenger kunden?`,
      solution: `a) Kunden leter etter en t-skjorte (una camiseta).
b) Kunden trenger storrelse M (la talla M).

**Viktige ord fra dialogen:**
- el/la dependiente = ekspeditoren
- el/la cliente = kunden
- probarse = a prove (klaer)
- el probador = proverommet`,
    },
    {
      id: 'spansk-1-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-2-ex-1',
        number: '7.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Kan jeg hjelpe deg?', solution: '¿Puedo ayudarle?', answer: '¿Puedo ayudarle?' },
          { label: 'b', task: 'Jeg leter etter en kjole', solution: 'Busco un vestido', answer: 'Busco un vestido' },
          { label: 'c', task: 'Hvor mye koster det?', solution: '¿Cuánto cuesta?', answer: '¿Cuánto cuesta?' },
          { label: 'd', task: 'Kan jeg prove det?', solution: '¿Puedo probármelo?', answer: '¿Puedo probármelo?' },
        ],
        solution: 'a) ¿Puedo ayudarle?, b) Busco un vestido, c) ¿Cuánto cuesta?, d) ¿Puedo probármelo?',
        hints: ['buscar = a lete etter', 'costar = a koste', 'probar = a prove'],
      },
    },
    {
      id: 'spansk-1-7-2-text-1',
      type: 'text',
      content: `## Stoerrelser (Las tallas)

I Spania og Latin-Amerika brukes europeiske stoerrelser. Her er de vanligste:

| Betegnelse | Spansk |
|------------|--------|
| Liten | pequeño/a (P) |
| Medium | mediano/a (M) |
| Stor | grande (G) |
| Extra stor | extra grande (XG) |

For sko bruker man nummer: "Talla 38", "Talla 42" osv.

**Nyttige fraser:**
- ¿Tiene una talla más grande? (Har du en storrelse storre?)
- ¿Tiene una talla más pequeña? (Har du en storrelse mindre?)
- Es la talla correcta (Det er riktig storrelse)`,
    },
    {
      id: 'spansk-1-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Stoerrelser',
      problem: `Fullfoor dialogen:

Cliente: Busco unos pantalones.
Dependiente: ¿Qué ___ tiene?
Cliente: ___ M. ¿Puedo ___?
Dependiente: Claro, el probador está allí.`,
      solution: `Cliente: Busco unos pantalones.
Dependiente: ¿Qué **talla** tiene?
Cliente: **La talla** M. ¿Puedo **probármelos**?
Dependiente: Claro, el probador está allí.

**Oversettelse:** Jeg leter etter en bukse. - Hvilken storrelse har du? - Storrelse M. Kan jeg prove den? - Selvfoelgelig, proverommet er der borte.`,
    },
    {
      id: 'spansk-1-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: '¿___ cuesta esta camiseta? (Hvor mye)', solution: 'Cuánto', answer: 'Cuánto' },
          { label: 'b', task: 'Me ___ bien. (passer)', solution: 'queda', answer: 'queda' },
          { label: 'c', task: '¿___ tarjeta? (Tar dere)', solution: 'Aceptan', answer: 'Aceptan' },
          { label: 'd', task: 'Me lo ___. (Jeg tar det)', solution: 'llevo', answer: 'llevo' },
        ],
        solution: 'a) Cuánto, b) queda, c) Aceptan, d) llevo',
        hints: ['cuánto = hvor mye', 'quedar = a passe/sitte', 'aceptar = a ta imot'],
      },
    },
    {
      id: 'spansk-1-7-2-text-2',
      type: 'text',
      content: `## Prisuttrykk

Nar du spor om pris og handler, er dette nyttige uttrykk:

| Spansk | Norsk |
|--------|-------|
| Cuesta diez euros | Det koster ti euro |
| Es muy caro | Det er veldig dyrt |
| Es barato | Det er billig |
| ¿Hay descuento? | Er det rabatt? |
| Las rebajas | Salg/tilbud |
| Está de oferta | Det er pa tilbud |
| La caja | Kassen |

**Merk:** I Spania bruker man euro (€). I Latin-Amerika bruker man ulike valutaer: pesos (Mexico, Argentina), soles (Peru), bolivares (Venezuela) osv.`,
    },
    {
      id: 'spansk-1-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Betaling',
      problem: `Oversett dialogen til norsk:

Cliente: ¿Cuánto cuesta esta chaqueta?
Dependiente: Cuesta cuarenta y cinco euros.
Cliente: Es un poco caro. ¿Hay descuento?
Dependiente: No, lo siento. Pero esta chaqueta está de oferta, cuesta treinta euros.
Cliente: Perfecto. Me la llevo. ¿Aceptan tarjeta?`,
      solution: `Kunde: **Hvor mye koster denne jakken?**
Ekspeditoren: **Den koster 45 euro.**
Kunde: **Det er litt dyrt. Er det rabatt?**
Ekspeditoren: **Nei, beklager. Men denne jakken er pa tilbud, den koster 30 euro.**
Kunde: **Perfekt. Jeg tar den. Tar dere kort?**

**Viktige uttrykk:**
- un poco caro = litt dyrt
- lo siento = beklager
- está de oferta = er pa tilbud`,
    },
    {
      id: 'spansk-1-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Det er veldig dyrt', solution: 'Es muy caro', answer: 'Es muy caro' },
          { label: 'b', task: 'Er det rabatt?', solution: '¿Hay descuento?', answer: '¿Hay descuento?' },
          { label: 'c', task: 'Det er pa tilbud', solution: 'Está de oferta', answer: 'Está de oferta' },
        ],
        solution: 'a) Es muy caro, b) ¿Hay descuento?, c) Está de oferta',
        hints: ['caro = dyrt', 'descuento = rabatt', 'oferta = tilbud'],
      },
    },
    {
      id: 'spansk-1-7-2-tip-1',
      type: 'tip',
      content: `I Spania har de store salg to ganger i aret: "Rebajas de invierno" (vinteresalg, januar-februar) og "Rebajas de verano" (sommersalg, juli-august). Da kan du finne gode tilbud! I Latin-Amerika er det ogsa vanlig med "Black Friday" og andre salgshendelser.`,
    },
    {
      id: 'spansk-1-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en kort dialog i en klesbutikk (bruk minst 3 av disse uttrykkene: ¿Puedo ayudarle?, Busco, ¿Cuánto cuesta?, Me lo llevo, ¿Aceptan tarjeta?):',
        subTasks: [
          { label: 'a', task: 'Ekspeditoerens foerste setning', solution: '¡Hola! ¿Puedo ayudarle?', answer: '¡Hola! ¿Puedo ayudarle?' },
          { label: 'b', task: 'Kundens svar (hva han/hun leter etter)', solution: 'Sí, busco una camiseta.', answer: 'Sí, busco una camiseta.' },
          { label: 'c', task: 'Avslutt dialogen med betaling', solution: '¿Cuánto cuesta? - Cuesta veinte euros. - Me la llevo. ¿Aceptan tarjeta?', answer: '¿Cuánto cuesta? - Cuesta veinte euros. - Me la llevo. ¿Aceptan tarjeta?' },
        ],
        solution: 'Eksempel: Dependiente: ¡Hola! ¿Puedo ayudarle? Cliente: Sí, busco una camiseta. ¿Cuánto cuesta esta? Dependiente: Cuesta veinte euros. Cliente: Me la llevo. ¿Aceptan tarjeta? Dependiente: Sí, por supuesto.',
        hints: ['Start med en hilsen', 'Bruk hoflig form'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Colores y tallas - Farger og stoerrelser
// ============================================================================

export const CHAPTER_SPANSK_1_7_3: TextbookChapter = {
  id: 'spansk-1-7-3',
  courseId: 'spansk-1',
  chapterNumber: '7.3',
  title: 'Colores y tallas',
  subtitle: 'Farger og stoerrelser',
  description: 'Laer farger og stoerrelser for a beskrive klaer pa spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive klaer med farger og stoerrelser',
  ],
  content: [
    {
      id: 'spansk-1-7-3-intro',
      type: 'text',
      content: `## Farger og stoerrelser

For a beskrive klaer trenger du a kunne fargene og stoerrelsene pa spansk. I dette kapittelet laerer du hvordan farger boyes etter kjonn og tall, og hvordan du beskriver stoerrelsen pa klaer.`,
    },
    {
      id: 'spansk-1-7-3-def-1',
      type: 'definition',
      title: 'Los colores - Fargene',
      content: `**Farger som endres etter kjonn (-o/-a):**

| Hankjonn | Hunkjonn | Norsk |
|----------|----------|-------|
| rojo | roja | roed |
| blanco | blanca | hvit |
| negro | negra | svart |
| amarillo | amarilla | gul |

**Farger som er like for begge kjonn:**

| Spansk | Norsk |
|--------|-------|
| azul | bla |
| verde | groenn |
| gris | gra |
| marrón | brun |
| naranja | oransje |
| rosa | rosa |
| morado/a | lilla |`,
    },
    {
      id: 'spansk-1-7-3-text-1',
      type: 'text',
      content: `## Samsvar mellom farge og substantiv

Pa spansk ma fargen samsvare med substantivet i bade **kjonn** og **tall**:

| Entall hankjonn | Entall hunkjonn | Flertall hankjonn | Flertall hunkjonn |
|----------------|-----------------|-------------------|-------------------|
| el jersey rojo | la camiseta roja | los jerseys rojos | las camisetas rojas |
| el zapato negro | la falda negra | los zapatos negros | las faldas negras |

**For farger som ikke endres etter kjonn (azul, verde, gris osv.), endres de bare i tall:**

| Entall | Flertall |
|--------|----------|
| la camiseta azul | las camisetas azules |
| el pantalon verde | los pantalones verdes |`,
    },
    {
      id: 'spansk-1-7-3-tip-1',
      type: 'tip',
      content: `Fargen star alltid ETTER substantivet pa spansk! Pa norsk sier vi "en rod t-skjorte", men pa spansk sier vi "una camiseta roja" (en t-skjorte rod). Husk denne forskjellen!`,
    },
    {
      id: 'spansk-1-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Farge + klaesplagg',
      problem: `Kombiner klaesplagg og farge pa spansk:

a) en rod kjole
b) svarte sko
c) en hvit skjorte
d) blaa bukser`,
      solution: `a) en rod kjole = **un vestido rojo**
b) svarte sko = **los zapatos negros**
c) en hvit skjorte = **una camisa blanca**
d) blaa bukser = **los pantalones azules**

**Merk:**
- vestido er hankjonn -> rojo
- camisa er hunkjonn -> blanca
- azul endres ikke etter kjonn, bare i tall -> azules`,
    },
    {
      id: 'spansk-1-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-3-ex-1',
        number: '7.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv pa spansk med riktig farge (husk samsvar):',
        subTasks: [
          { label: 'a', task: 'en gul t-skjorte', solution: 'una camiseta amarilla', answer: 'una camiseta amarilla' },
          { label: 'b', task: 'en svart jakke', solution: 'una chaqueta negra', answer: 'una chaqueta negra' },
          { label: 'c', task: 'groenne sko', solution: 'los zapatos verdes', answer: 'los zapatos verdes' },
          { label: 'd', task: 'et hvitt skjoert', solution: 'una falda blanca', answer: 'una falda blanca' },
        ],
        solution: 'a) una camiseta amarilla, b) una chaqueta negra, c) los zapatos verdes, d) una falda blanca',
        hints: ['Camiseta, chaqueta og falda er hunkjonn', 'Verdes endres ikke etter kjonn'],
      },
    },
    {
      id: 'spansk-1-7-3-def-2',
      type: 'definition',
      title: 'Stoerrelsesbeskrivelser',
      content: `**Stoerrelser og maal:**

| Spansk | Norsk |
|--------|-------|
| grande | stor |
| pequeño/a | liten |
| largo/a | lang |
| corto/a | kort |
| ancho/a | bred/vid |
| estrecho/a | trang/smal |

**Sammenligninger:**

| Spansk | Norsk |
|--------|-------|
| más grande | storre |
| más pequeño/a | mindre |
| demasiado grande | for stort |
| demasiado pequeño/a | for lite |
| demasiado largo/a | for langt |
| demasiado corto/a | for kort |`,
    },
    {
      id: 'spansk-1-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Stoerrelsesbeskrivelser',
      problem: `Oversett til spansk:

a) Buksen er for lang.
b) Kjolen er for liten.
c) Har du en storre storrelse?`,
      solution: `a) Buksen er for lang = **El pantalón es demasiado largo.**
b) Kjolen er for liten = **El vestido es demasiado pequeño.**
c) Har du en storre storrelse? = **¿Tiene una talla más grande?**

**Merk:** Vi bruker "demasiado" (for mye) foran adjektivet for a si "for stor/liten/lang" osv.`,
    },
    {
      id: 'spansk-1-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Det er for stort', solution: 'Es demasiado grande', answer: 'Es demasiado grande' },
          { label: 'b', task: 'Skjoertet er for kort', solution: 'La falda es demasiado corta', answer: 'La falda es demasiado corta' },
          { label: 'c', task: 'Har du en mindre storrelse?', solution: '¿Tiene una talla más pequeña?', answer: '¿Tiene una talla más pequeña?' },
        ],
        solution: 'a) Es demasiado grande, b) La falda es demasiado corta, c) ¿Tiene una talla más pequeña?',
        hints: ['demasiado = for (mye)', 'corto/a = kort', 'más pequeño/a = mindre'],
      },
    },
    {
      id: 'spansk-1-7-3-text-2',
      type: 'text',
      content: `## Kombinere farge og stoerrelse

Nar du beskriver klaer, kan du kombinere farge og stoerrelse:

**Eksempler:**
- Busco una camiseta roja, talla M. (Jeg leter etter en rod t-skjorte, storrelse M.)
- Esta chaqueta negra es demasiado grande. (Denne svarte jakken er for stor.)
- ¿Tiene estos pantalones azules en una talla más pequeña? (Har du disse blaa buksene i en mindre storrelse?)

**Ordrekkefoelge:**
artikkel + substantiv + farge + stoerrelsesbeskrivelse
una camiseta roja grande (en stor rod t-skjorte)`,
    },
    {
      id: 'spansk-1-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Komplett beskrivelse',
      problem: `Beskriv disse klaesplaggene pa spansk:

a) en stor hvit genser
b) smale svarte bukser
c) korte blaa shorts`,
      solution: `a) en stor hvit genser = **un jersey blanco grande**
b) smale svarte bukser = **unos pantalones negros estrechos**
c) korte blaa shorts = **unos pantalones cortos azules**

**Merk:** Farge og stoerrelsesbeskrivelse kommer begge etter substantivet. Vanligvis kommer fargen foerst.`,
    },
    {
      id: 'spansk-1-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv klaesplaggene pa spansk med bade farge og stoerrelse:',
        subTasks: [
          { label: 'a', task: 'en liten rod veske', solution: 'un bolso rojo pequeño', answer: 'un bolso rojo pequeño' },
          { label: 'b', task: 'lange svarte stoevler', solution: 'unas botas negras largas', answer: 'unas botas negras largas' },
          { label: 'c', task: 'en bred groenn bufanda', solution: 'una bufanda verde ancha', answer: 'una bufanda verde ancha' },
        ],
        solution: 'a) un bolso rojo pequeño, b) unas botas negras largas, c) una bufanda verde ancha',
        hints: ['Fargen kommer foer stoerrelsesbeskrivelsen', 'Husk kjoennssamsvar'],
      },
    },
    {
      id: 'spansk-1-7-3-note-1',
      type: 'note',
      title: 'Kulturnotat: Farger i spansktalende land',
      content: `I mange spansktalende land har farger spesiell betydning. I Mexico er fargen gul assosiert med doed og brukes under "Día de los Muertos". I Spania er svart den tradisjonelle fargen for formelle anledninger. Hvit er populaert om sommeren, og mange spanjoler unngaar a ga med hvite klaer foer "la Semana Santa" (paasken).`,
    },
    {
      id: 'spansk-1-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rett feilene i disse setningene (feil farge-samsvar):',
        subTasks: [
          { label: 'a', task: 'una camiseta rojo -> riktig form:', solution: 'una camiseta roja', answer: 'una camiseta roja' },
          { label: 'b', task: 'los zapatos negra -> riktig form:', solution: 'los zapatos negros', answer: 'los zapatos negros' },
          { label: 'c', task: 'las faldas blanco -> riktig form:', solution: 'las faldas blancas', answer: 'las faldas blancas' },
          { label: 'd', task: 'el vestido amarilla -> riktig form:', solution: 'el vestido amarillo', answer: 'el vestido amarillo' },
        ],
        solution: 'a) una camiseta roja (hunkjonn entall), b) los zapatos negros (hankjonn flertall), c) las faldas blancas (hunkjonn flertall), d) el vestido amarillo (hankjonn entall)',
        hints: ['Sjekk kjoennet til substantivet', 'Sjekk om det er entall eller flertall'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: ¿Qué llevas? - Hva har du pa deg?
// ============================================================================

export const CHAPTER_SPANSK_1_7_4: TextbookChapter = {
  id: 'spansk-1-7-4',
  courseId: 'spansk-1',
  chapterNumber: '7.4',
  title: '¿Qué llevas?',
  subtitle: 'Hva har du pa deg?',
  description: 'Laer a beskrive hva du og andre har pa seg ved hjelp av verbet llevar.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive hva man har pa seg',
  ],
  content: [
    {
      id: 'spansk-1-7-4-intro',
      type: 'text',
      content: `## Beskrive klaer med "llevar"

Verbet "llevar" betyr "a ha pa seg" og er det viktigste verbet nar du snakker om klaer. La oss laere a boye det og bruke det i setninger!`,
    },
    {
      id: 'spansk-1-7-4-def-1',
      type: 'definition',
      title: 'Verbet "llevar" (a ha pa seg)',
      content: `**Boeyning av "llevar" i presens:**

| Person | Spansk | Norsk |
|--------|--------|-------|
| yo | llevo | jeg har pa meg |
| tú | llevas | du har pa deg |
| él/ella/usted | lleva | han/hun har pa seg |
| nosotros/as | llevamos | vi har pa oss |
| vosotros/as | lleváis | dere har pa dere |
| ellos/ellas/ustedes | llevan | de har pa seg |

**Merk:** "Llevar" er et regelrett verb som foelger -ar-boeyningen.`,
    },
    {
      id: 'spansk-1-7-4-text-1',
      type: 'text',
      content: `## Bruke "llevar" i setninger

**Struktur:** Subjekt + llevar (boyd) + artikkel + klaesplagg + (farge)

| Spansk | Norsk |
|--------|-------|
| Llevo una camiseta blanca | Jeg har pa meg en hvit t-skjorte |
| Llevas unos vaqueros azules | Du har pa deg blaa jeans |
| Ella lleva un vestido rojo | Hun har pa seg en rod kjole |
| Llevamos zapatos negros | Vi har pa oss svarte sko |
| Llevan uniformes | De har pa seg uniformer |

**Obs!** Man kan ogsa bruke "llevar" om tilbehoer:
- Llevo gafas de sol (Jeg har pa meg solbriller)
- Lleva un reloj (Han har pa seg en klokke)`,
    },
    {
      id: 'spansk-1-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Hva har de pa seg?',
      problem: `Beskriv hva disse personene har pa seg:

a) María (kjole, sko)
b) Pedro (jeans, t-skjorte)
c) Jeg (genser, bukse)`,
      solution: `a) María lleva un vestido y unos zapatos. (Maria har pa seg en kjole og sko.)
b) Pedro lleva unos vaqueros y una camiseta. (Pedro har pa seg jeans og en t-skjorte.)
c) Llevo un jersey y unos pantalones. (Jeg har pa meg en genser og en bukse.)

**Tips:** Bruk "y" (og) for a koble sammen flere klaesplagg.`,
    },
    {
      id: 'spansk-1-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-4-ex-1',
        number: '7.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "llevar":',
        subTasks: [
          { label: 'a', task: 'Yo ___ una camiseta azul.', solution: 'llevo', answer: 'llevo' },
          { label: 'b', task: 'Tú ___ unos pantalones negros.', solution: 'llevas', answer: 'llevas' },
          { label: 'c', task: 'Ella ___ un vestido blanco.', solution: 'lleva', answer: 'lleva' },
          { label: 'd', task: 'Nosotros ___ uniformes.', solution: 'llevamos', answer: 'llevamos' },
        ],
        solution: 'a) llevo, b) llevas, c) lleva, d) llevamos',
        hints: ['Llevar er et regelrett -ar-verb', 'yo -> -o, tu -> -as, el/ella -> -a, nosotros -> -amos'],
      },
    },
    {
      id: 'spansk-1-7-4-def-2',
      type: 'definition',
      title: 'Vaer og klaer',
      content: `**Vaer og klaer henget sammen! Vi kan koble vaeruttrykkene med klaesvalg:**

| Vaer | Spansk | Klaer |
|------|--------|-------|
| Det er varmt | Hace calor | la camiseta, los pantalones cortos |
| Det er kaldt | Hace frío | el abrigo, la bufanda, los guantes |
| Det regner | Llueve | el impermeable (regnjakke), las botas |
| Det er sol | Hace sol | las gafas de sol, la gorra |

**Eksempler:**
- Cuando hace calor, llevo una camiseta. (Nar det er varmt, har jeg pa meg en t-skjorte.)
- Cuando hace frío, llevo un abrigo. (Nar det er kaldt, har jeg pa meg en frakk.)
- Cuando llueve, llevo un impermeable. (Nar det regner, har jeg pa meg en regnjakke.)`,
    },
    {
      id: 'spansk-1-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Klaer og vaer',
      problem: `Fullfoor setningene pa spansk:

a) Nar det er varmt, har jeg pa meg ___
b) Nar det er kaldt, har jeg pa meg ___
c) Nar det regner, har jeg pa meg ___`,
      solution: `a) Cuando hace calor, llevo **una camiseta y unos pantalones cortos**.
b) Cuando hace frío, llevo **un abrigo y una bufanda**.
c) Cuando llueve, llevo **un impermeable y unas botas**.

**Setningsstruktur:** Cuando + vaer + llevar (boyd) + klaer`,
    },
    {
      id: 'spansk-1-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv hele setningen pa spansk:',
        subTasks: [
          { label: 'a', task: 'Nar det er varmt, har Pedro pa seg shorts og t-skjorte.', solution: 'Cuando hace calor, Pedro lleva unos pantalones cortos y una camiseta.', answer: 'Cuando hace calor, Pedro lleva unos pantalones cortos y una camiseta.' },
          { label: 'b', task: 'Nar det er kaldt, har vi pa oss jakke og hansker.', solution: 'Cuando hace frío, llevamos una chaqueta y unos guantes.', answer: 'Cuando hace frío, llevamos una chaqueta y unos guantes.' },
          { label: 'c', task: 'Nar det er sol, har hun pa seg solbriller.', solution: 'Cuando hace sol, ella lleva gafas de sol.', answer: 'Cuando hace sol, ella lleva gafas de sol.' },
        ],
        solution: 'a) Cuando hace calor, Pedro lleva unos pantalones cortos y una camiseta. b) Cuando hace frío, llevamos una chaqueta y unos guantes. c) Cuando hace sol, ella lleva gafas de sol.',
        hints: ['cuando = nar', 'hace calor = det er varmt', 'hace frio = det er kaldt'],
      },
    },
    {
      id: 'spansk-1-7-4-text-2',
      type: 'text',
      content: `## Skoleuniform vs. vanlige klaer

I mange spansktalende land er det vanlig med skoleuniform. La oss sammenligne:

**Med uniform:**
- En el colegio, llevamos uniforme. (Pa skolen har vi pa oss uniform.)
- El uniforme es una camisa blanca y unos pantalones azules. (Uniformen er en hvit skjorte og blaa bukser.)

**Uten uniform (som i Norge):**
- En el colegio, llevo la ropa que quiero. (Pa skolen har jeg pa meg klaerne jeg vil.)
- Hoy llevo unos vaqueros y un jersey. (I dag har jeg pa meg jeans og en genser.)

**Nyttige uttrykk:**
| Spansk | Norsk |
|--------|-------|
| Hoy llevo... | I dag har jeg pa meg... |
| Normalmente llevo... | Vanligvis har jeg pa meg... |
| Mi ropa favorita es... | Mine favorittklaer er... |
| Me gusta llevar... | Jeg liker a ha pa meg... |`,
    },
    {
      id: 'spansk-1-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive klaer i dag',
      problem: `Les teksten og svar pa sporsmalene:

"Hoy es lunes. Hace frío y llueve. Llevo un jersey gris, unos pantalones negros y unas botas marrones. También llevo un abrigo azul y una bufanda roja. Mi amiga Sara lleva un vestido verde con unas medias negras y una chaqueta blanca."

a) Hvilket vaer er det?
b) Hva har fortelleren pa seg? (nevn 3 plagg)
c) Hvilken farge er Saras kjole?`,
      solution: `a) Det er kaldt og det regner (Hace frio y llueve).
b) Fortelleren har pa seg: **en gra genser (un jersey gris), svarte bukser (unos pantalones negros) og brune stoevler (unas botas marrones)**.
c) Saras kjole er **groenn (verde)**.

**Ekstra vokabular:**
- también = ogsa
- mi amiga = venninnen min
- con = med
- las medias = stroemper/tights`,
    },
    {
      id: 'spansk-1-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hva du har pa deg i dag pa spansk (skriv minst 2 setninger):',
        subTasks: [
          { label: 'a', task: 'Beskriv to klaesplagg du har pa deg', solution: 'Hoy llevo una camiseta blanca y unos vaqueros azules.', answer: 'Hoy llevo una camiseta blanca y unos vaqueros azules.' },
          { label: 'b', task: 'Beskriv skoene/tilbehoeret ditt', solution: 'Llevo unas zapatillas grises y un reloj.', answer: 'Llevo unas zapatillas grises y un reloj.' },
          { label: 'c', task: 'Forklaar hvorfor du har disse klaerne (hint: vaeret)', solution: 'Hoy hace frío, por eso llevo un jersey.', answer: 'Hoy hace frío, por eso llevo un jersey.' },
        ],
        solution: 'Eksempel: Hoy llevo una camiseta blanca y unos vaqueros azules. Llevo unas zapatillas grises y un reloj. Hoy hace frio, por eso llevo un jersey.',
        hints: ['Hoy llevo... = I dag har jeg pa meg...', 'por eso = derfor', 'Husk farge-samsvar!'],
      },
    },
    {
      id: 'spansk-1-7-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Skoleuniform i Latin-Amerika',
      content: `I de fleste latinamerikanske land er skoleuniform obligatorisk i bade offentlige og private skoler. Uniformen bestar vanligvis av en hvit skjorte, moerke bukser eller skjoert, og skolens egen genser eller blazer. I Spania er skoleuniform vanligst pa private skoler, mens offentlige skoler sjelden har det - slik som i Norge.`,
    },
    {
      id: 'spansk-1-7-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett hele setningene til spansk:',
        subTasks: [
          { label: 'a', task: 'I dag har Maria pa seg en rod kjole og hvite sko.', solution: 'Hoy María lleva un vestido rojo y unos zapatos blancos.', answer: 'Hoy María lleva un vestido rojo y unos zapatos blancos.' },
          { label: 'b', task: 'Vi har vanligvis pa oss jeans og t-skjorte pa skolen.', solution: 'Normalmente llevamos unos vaqueros y una camiseta en el colegio.', answer: 'Normalmente llevamos unos vaqueros y una camiseta en el colegio.' },
          { label: 'c', task: 'Nar det er kaldt, har de pa seg frakk, lue og hansker.', solution: 'Cuando hace frío, llevan un abrigo, una gorra y unos guantes.', answer: 'Cuando hace frío, llevan un abrigo, una gorra y unos guantes.' },
        ],
        solution: 'a) Hoy Maria lleva un vestido rojo y unos zapatos blancos. b) Normalmente llevamos unos vaqueros y una camiseta en el colegio. c) Cuando hace frio, llevan un abrigo, una gorra y unos guantes.',
        hints: ['Husk at fargene ma samsvare med klaesplaggenes kjonn', 'normalmente = vanligvis', 'cuando = nar'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: El colegio - Skolen
// ============================================================================

export const CHAPTER_SPANSK_1_8_1: TextbookChapter = {
  id: 'spansk-1-8-1',
  courseId: 'spansk-1',
  chapterNumber: '8.1',
  title: 'El colegio',
  subtitle: 'Skolen',
  description: 'Laer ord for steder og ting pa skolen pa spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive skolen og skolehverdagen',
  ],
  content: [
    {
      id: 'spansk-1-8-1-intro',
      type: 'text',
      content: `## Skolen pa spansk

Skolen er en viktig del av hverdagen, og det er nyttig a kunne snakke om den pa spansk. I dette kapittelet laerer du ord for steder pa skolen, skoleutstyr og daglige rutiner.

**Obs!** Pa spansk brukes ofte "el colegio" om skolen generelt, mens "el instituto" brukes spesielt om videregaende skole.`,
    },
    {
      id: 'spansk-1-8-1-def-1',
      type: 'definition',
      title: 'Steder pa skolen (Los lugares del colegio)',
      content: `**Steder i skolebygget:**

| Spansk | Norsk |
|--------|-------|
| el aula / la clase | klasserommet |
| la biblioteca | biblioteket |
| el gimnasio | gymsalen |
| el patio | skolegarden |
| la cafetería | kantinen/kafeteriaen |
| el laboratorio | laboratoriet |
| la oficina | kontoret |
| el pasillo | gangen |
| los servicios / el baño | toalettet |
| la entrada | inngangen |`,
    },
    {
      id: 'spansk-1-8-1-def-2',
      type: 'definition',
      title: 'Skoleutstyr (El material escolar)',
      content: `**Ting du trenger pa skolen:**

| Spansk | Norsk |
|--------|-------|
| el libro | boken |
| el cuaderno | skriveblokken/notatboken |
| el bolígrafo (el boli) | pennen |
| el lápiz | blyanten |
| la goma | viskelaaeret |
| la regla | linjalen |
| la mochila | sekken/ryggsekken |
| el ordenador / la computadora | datamaskinen |
| la pizarra | tavlen |
| el estuche | pennalet |`,
    },
    {
      id: 'spansk-1-8-1-tip-1',
      type: 'tip',
      content: `I Spania sier man "el ordenador" for datamaskin, mens i Latin-Amerika er det vanligst a si "la computadora". Begge er riktige! Pa samme mate sier man "el bolígrafo" i Spania og "la lapicera" eller "el lapicero" i noen latinamerikanske land.`,
    },
    {
      id: 'spansk-1-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Steder pa skolen',
      problem: `Oversett til norsk:

a) el aula
b) la biblioteca
c) el gimnasio
d) el patio`,
      solution: `a) el aula = **klasserommet**
b) la biblioteca = **biblioteket**
c) el gimnasio = **gymsalen**
d) el patio = **skolegarden**

**Merk:** "El aula" er et spesielt tilfelle - det er egentlig hunkjonn, men bruker "el" i entall fordi det begynner pa betonet "a". I flertall blir det "las aulas".`,
    },
    {
      id: 'spansk-1-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-1-ex-1',
        number: '8.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'biblioteket', solution: 'la biblioteca', answer: 'la biblioteca' },
          { label: 'b', task: 'kantinen', solution: 'la cafetería', answer: 'la cafetería' },
          { label: 'c', task: 'gymsalen', solution: 'el gimnasio', answer: 'el gimnasio' },
          { label: 'd', task: 'skolegarden', solution: 'el patio', answer: 'el patio' },
        ],
        solution: 'a) la biblioteca, b) la cafetería, c) el gimnasio, d) el patio',
        hints: ['Husk artikkelen', 'Biblioteca ligner pa "bibliotek"'],
      },
    },
    {
      id: 'spansk-1-8-1-text-1',
      type: 'text',
      content: `## Skoledagen (La jornada escolar)

En typisk skoledag i Spania:

| Klokkeslett | Aktivitet | Spansk |
|-------------|-----------|--------|
| 08:00 | Skolen begynner | Las clases empiezan |
| 10:30 | Friminutt | El recreo |
| 11:00 | Timene fortsetter | Las clases continúan |
| 14:00 | Lunsj | La hora de comer |
| 16:00 | Timene er ferdig | Las clases terminan |

**Nyttige setninger:**
- Las clases empiezan a las ocho. (Timene begynner klokken atte.)
- El recreo es a las diez y media. (Friminuttet er halv elleve.)
- Las clases terminan a las cuatro. (Timene slutter klokken fire.)`,
    },
    {
      id: 'spansk-1-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Skoleutstyr',
      problem: `Hva trenger du? Oversett til spansk:

a) Jeg trenger en penn.
b) Hvor er boken min?
c) Kan jeg lane viskelaaeret ditt?`,
      solution: `a) **Necesito un bolígrafo.**
b) **¿Dónde está mi libro?**
c) **¿Puedo usar tu goma?**

**Nyttige verb:**
- necesitar = a trenge
- usar = a bruke
- prestar = a lane (bort)`,
    },
    {
      id: 'spansk-1-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett skoleutstyret til spansk:',
        subTasks: [
          { label: 'a', task: 'boken', solution: 'el libro', answer: 'el libro' },
          { label: 'b', task: 'pennen', solution: 'el bolígrafo', answer: 'el bolígrafo' },
          { label: 'c', task: 'sekken', solution: 'la mochila', answer: 'la mochila' },
          { label: 'd', task: 'datamaskinen', solution: 'el ordenador', answer: 'el ordenador' },
        ],
        solution: 'a) el libro, b) el bolígrafo, c) la mochila, d) el ordenador',
        hints: ['Libro ligner pa det engelske "library"', 'Mochila er et vanlig ord i hele den spansktalende verden'],
      },
    },
    {
      id: 'spansk-1-8-1-text-2',
      type: 'text',
      content: `## Snakke om skolehverdagen

For a beskrive skoledagen bruker vi verb som:

| Spansk | Norsk |
|--------|-------|
| empezar (e->ie) | a begynne |
| terminar | a slutte/avslutte |
| estudiar | a studere/laere |
| aprender | a laere |
| enseñar | a undervise |
| hacer los deberes | a gjore lekser |
| tener clase | a ha time |

**Eksempler pa setninger:**
- Estudio español en el instituto. (Jeg laerer spansk pa skolen.)
- Tengo clase de matemáticas a las nueve. (Jeg har mattetime klokken ni.)
- Hago los deberes por la tarde. (Jeg gjoer lekser om ettermiddagen.)`,
    },
    {
      id: 'spansk-1-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Min skoledag',
      problem: `Les teksten og svar pa sporsmalene:

"Me llamo Carlos. Las clases empiezan a las ocho de la mañana. Primero tengo clase de matemáticas. Después tengo clase de español. A las diez y media es el recreo. En el recreo, juego con mis amigos en el patio. Por la tarde, hago los deberes en la biblioteca."

a) Nar begynner timene?
b) Hva er Carlos' foerste time?
c) Hvor gjoer Carlos lekser?`,
      solution: `a) Timene begynner **klokken atte om morgenen** (a las ocho de la mañana).
b) Carlos' foerste time er **matematikk** (matemáticas).
c) Carlos gjoer lekser **pa biblioteket** (en la biblioteca).

**Nyttige ord fra teksten:**
- primero = foerst
- después = etterpaa
- jugar = a leke/spille
- mis amigos = vennene mine`,
    },
    {
      id: 'spansk-1-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk:',
        subTasks: [
          { label: 'a', task: 'Timene begynner klokken atte.', solution: 'Las clases empiezan a las ocho.', answer: 'Las clases empiezan a las ocho.' },
          { label: 'b', task: 'Jeg gjoer lekser om ettermiddagen.', solution: 'Hago los deberes por la tarde.', answer: 'Hago los deberes por la tarde.' },
          { label: 'c', task: 'Friminuttet er halv elleve.', solution: 'El recreo es a las diez y media.', answer: 'El recreo es a las diez y media.' },
        ],
        solution: 'a) Las clases empiezan a las ocho. b) Hago los deberes por la tarde. c) El recreo es a las diez y media.',
        hints: ['empezar = a begynne', 'hacer los deberes = a gjore lekser', 'por la tarde = om ettermiddagen'],
      },
    },
    {
      id: 'spansk-1-8-1-note-1',
      type: 'note',
      title: 'Kulturnotat: Skolen i Spania',
      content: `I Spania har elever vanligvis en lenger skoledag enn i Norge - fra kl. 8 eller 9 til kl. 14 eller til og med 17. Mange skoler har en lang lunsjpause pa 1-2 timer, og noen elever gar hjem for a spise. Det er ogsa vanlig med lekser hver dag, og mange elever gar pa "academia" (privat leksehjelp/ekstraundervisning) om ettermiddagen.`,
    },
    {
      id: 'spansk-1-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv 3 setninger pa spansk om din skoledag:',
        subTasks: [
          { label: 'a', task: 'Nar begynner skolen din?', solution: 'Las clases empiezan a las ocho y media.', answer: 'Las clases empiezan a las ocho y media.' },
          { label: 'b', task: 'Hva er favorittstedet ditt pa skolen?', solution: 'Mi lugar favorito es la biblioteca.', answer: 'Mi lugar favorito es la biblioteca.' },
          { label: 'c', task: 'Hva gjor du i friminuttet?', solution: 'En el recreo, hablo con mis amigos en el patio.', answer: 'En el recreo, hablo con mis amigos en el patio.' },
        ],
        solution: 'Eksempel: Las clases empiezan a las ocho y media. Mi lugar favorito es la biblioteca. En el recreo, hablo con mis amigos en el patio.',
        hints: ['mi lugar favorito = favorittstedet mitt', 'hablar con = a snakke med', 'Bruk verb du har laert'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Las asignaturas - Skolefagene
// ============================================================================

export const CHAPTER_SPANSK_1_8_2: TextbookChapter = {
  id: 'spansk-1-8-2',
  courseId: 'spansk-1',
  chapterNumber: '8.2',
  title: 'Las asignaturas',
  subtitle: 'Skolefagene',
  description: 'Laer a snakke om skolefag, timeplan og preferanser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'snakke om skolefag og timeplan',
  ],
  content: [
    {
      id: 'spansk-1-8-2-intro',
      type: 'text',
      content: `## Skolefagene pa spansk

Alle har et favorittfag pa skolen! I dette kapittelet laerer du navnene pa de vanligste skolefagene, og du laerer a snakke om timeplanen din og hvilke fag du liker best.`,
    },
    {
      id: 'spansk-1-8-2-def-1',
      type: 'definition',
      title: 'Los asignaturas - Skolefagene',
      content: `**De vanligste skolefagene:**

| Spansk | Norsk |
|--------|-------|
| las matemáticas (las mates) | matematikk (matte) |
| el español | spansk |
| el inglés | engelsk |
| el noruego | norsk |
| la historia | historie |
| la geografía | geografi |
| las ciencias naturales | naturfag |
| la educación física (la E.F.) | kroppoving |
| la música | musikk |
| el arte | kunst |
| la tecnología | teknologi |
| la religión | religion |
| la filosofía | filosofi |`,
    },
    {
      id: 'spansk-1-8-2-text-1',
      type: 'text',
      content: `## Uttrykke preferanser

For a si hvilket fag du liker best, bruker vi:

| Spansk | Norsk |
|--------|-------|
| Mi asignatura favorita es... | Favorittfaget mitt er... |
| Me gusta la historia | Jeg liker historie |
| Me gustan las matemáticas | Jeg liker matematikk |
| No me gusta la geografía | Jeg liker ikke geografi |
| Me encanta el arte | Jeg elsker kunst |
| Odio las matemáticas | Jeg hater matematikk |

**Merk:** Vi bruker "me gusta" med entallsord (la historia) og "me gustan" med flertallsord (las matemáticas, las ciencias).

**Begrunne preferanser:**
| Spansk | Norsk |
|--------|-------|
| porque es interesante | fordi det er interessant |
| porque es divertido/a | fordi det er goy |
| porque es fácil | fordi det er lett |
| porque es difícil | fordi det er vanskelig |
| porque es aburrido/a | fordi det er kjedelig |
| porque es útil | fordi det er nyttig |`,
    },
    {
      id: 'spansk-1-8-2-tip-1',
      type: 'tip',
      content: `Husk forskjellen mellom "me gusta" (entall) og "me gustan" (flertall)! Pa spansk er det egentlig faget som "behager" deg, sa verbet samsvarer med faget, ikke med deg: "Me gusta el inglés" (EngelskEN behager MEG), "Me gustan las ciencias" (NaturfagENE behager MEG).`,
    },
    {
      id: 'spansk-1-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Favorittfag',
      problem: `Oversett til spansk:

a) Favorittfaget mitt er musikk.
b) Jeg liker matematikk fordi det er interessant.
c) Jeg liker ikke historie fordi det er kjedelig.`,
      solution: `a) **Mi asignatura favorita es la música.**
b) **Me gustan las matemáticas porque es interesante.**
c) **No me gusta la historia porque es aburrida.**

**Merk:** Vi bruker "me gustan" med "las matemáticas" (flertall) og "me gusta" med "la historia" (entall).`,
    },
    {
      id: 'spansk-1-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-2-ex-1',
        number: '8.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett skolefagene til spansk:',
        subTasks: [
          { label: 'a', task: 'matematikk', solution: 'las matemáticas', answer: 'las matemáticas' },
          { label: 'b', task: 'historie', solution: 'la historia', answer: 'la historia' },
          { label: 'c', task: 'kroppoving', solution: 'la educación física', answer: 'la educación física' },
          { label: 'd', task: 'engelsk', solution: 'el inglés', answer: 'el inglés' },
        ],
        solution: 'a) las matemáticas, b) la historia, c) la educación física, d) el inglés',
        hints: ['Husk artikkelen foran hvert fag', 'Matematicas er alltid i flertall pa spansk'],
      },
    },
    {
      id: 'spansk-1-8-2-def-2',
      type: 'definition',
      title: 'Timeplanen (El horario)',
      content: `**Snakke om timeplanen:**

| Spansk | Norsk |
|--------|-------|
| el horario | timeplanen |
| tener clase de... | a ha time i... |
| Los lunes tengo... | Pa mandager har jeg... |
| a las nueve | klokken ni |
| la primera hora | foerste time |
| la segunda hora | andre time |
| la tercera hora | tredje time |

**Ukedagene (los días de la semana):**

| Spansk | Norsk |
|--------|-------|
| lunes | mandag |
| martes | tirsdag |
| miércoles | onsdag |
| jueves | torsdag |
| viernes | fredag |
| sábado | loerdag |
| domingo | soendag |

**Merk:** Pa spansk skrives ukedagene med liten forbokstav!`,
    },
    {
      id: 'spansk-1-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Timeplanen min',
      problem: `Les timeplanen og svar:

Lunes: 08:00 Matemáticas, 09:00 Español, 10:00 Recreo, 10:30 Historia
Martes: 08:00 Inglés, 09:00 Ciencias, 10:00 Recreo, 10:30 E.F.

a) Hva har eleven foerst pa mandag?
b) Nar er det friminutt?
c) Hvilken dag har eleven kroppoving?`,
      solution: `a) Pa mandag har eleven foerst **matematikk** (Matemáticas).
b) Friminuttet er **klokken ti** (a las diez).
c) Eleven har kroppoving pa **tirsdag** (martes).

**Slik sier du det:**
- Los lunes, tengo matemáticas a las ocho. (Pa mandager har jeg matte klokken atte.)
- Los martes, tengo educación física a las diez y media. (Pa tirsdager har jeg gym halv elleve.)`,
    },
    {
      id: 'spansk-1-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setninger om timeplanen din pa spansk:',
        subTasks: [
          { label: 'a', task: 'Pa mandager har jeg matte klokken atte.', solution: 'Los lunes tengo matemáticas a las ocho.', answer: 'Los lunes tengo matemáticas a las ocho.' },
          { label: 'b', task: 'Pa onsdager har jeg spansk klokken ti.', solution: 'Los miércoles tengo español a las diez.', answer: 'Los miércoles tengo español a las diez.' },
          { label: 'c', task: 'Pa fredager har jeg kunst klokken elleve.', solution: 'Los viernes tengo arte a las once.', answer: 'Los viernes tengo arte a las once.' },
        ],
        solution: 'a) Los lunes tengo matematicas a las ocho. b) Los miercoles tengo espanol a las diez. c) Los viernes tengo arte a las once.',
        hints: ['Los + ukedag i flertall = pa den dagen', 'tener = a ha', 'Bruk "a las" + klokkeslett'],
      },
    },
    {
      id: 'spansk-1-8-2-text-2',
      type: 'text',
      content: `## Verbet "tener" med skolefag

Verbet "tener" (a ha) er uunnvaerlig nar du snakker om timeplanen. La oss repetere boeyningen:

| Person | Form |
|--------|------|
| yo | tengo |
| tú | tienes |
| él/ella/usted | tiene |
| nosotros/as | tenemos |
| vosotros/as | tenéis |
| ellos/ellas/ustedes | tienen |

**Eksempler:**
- Tengo seis asignaturas. (Jeg har seks fag.)
- ¿Cuántas asignaturas tienes? (Hvor mange fag har du?)
- Tenemos clase de inglés los martes. (Vi har engelsktime pa tirsdager.)
- No tengo clase los sábados. (Jeg har ikke time pa loerdager.)`,
    },
    {
      id: 'spansk-1-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Snakke om fag',
      problem: `Fullfoor med riktig form av "tener":

a) Yo ___ clase de español los lunes.
b) María ___ muchas asignaturas.
c) Nosotros ___ un examen de historia mañana.
d) ¿Cuántas clases ___ tú hoy?`,
      solution: `a) Yo **tengo** clase de español los lunes.
b) María **tiene** muchas asignaturas.
c) Nosotros **tenemos** un examen de historia mañana.
d) ¿Cuántas clases **tienes** tú hoy?

**Oversettelse:**
- Jeg har spansktime pa mandager.
- Maria har mange fag.
- Vi har en historieproeve i morgen.
- Hvor mange timer har du i dag?`,
    },
    {
      id: 'spansk-1-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av "tener":',
        subTasks: [
          { label: 'a', task: 'Yo ___ clase de música los viernes.', solution: 'tengo', answer: 'tengo' },
          { label: 'b', task: 'Ellos ___ un examen mañana.', solution: 'tienen', answer: 'tienen' },
          { label: 'c', task: 'Nosotros no ___ clase los sábados.', solution: 'tenemos', answer: 'tenemos' },
          { label: 'd', task: '¿Tú ___ clase de arte hoy?', solution: 'tienes', answer: 'tienes' },
        ],
        solution: 'a) tengo, b) tienen, c) tenemos, d) tienes',
        hints: ['yo -> tengo', 'ellos -> tienen', 'nosotros -> tenemos'],
      },
    },
    {
      id: 'spansk-1-8-2-note-1',
      type: 'note',
      title: 'Kulturnotat: Skolesystemet i Spania',
      content: `Det spanske skolesystemet er litt annerledes enn det norske. Barn begynner pa "Educacion Primaria" (barneskolen) nar de er 6 ar og gar der til de er 12. Deretter gar de pa "ESO" (Educacion Secundaria Obligatoria) i fire ar (12-16 ar), som tilsvarer ungdomsskolen. Etterpaa kan de velge "Bachillerato" (videregaende, 2 ar) eller "Formacion Profesional" (yrkesfag).`,
    },
    {
      id: 'spansk-1-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv pa spansk om ditt favorittfag og timeplanen din:',
        subTasks: [
          { label: 'a', task: 'Hva er favorittfaget ditt? Hvorfor?', solution: 'Mi asignatura favorita es la música porque es divertida.', answer: 'Mi asignatura favorita es la música porque es divertida.' },
          { label: 'b', task: 'Hvilket fag liker du minst? Hvorfor?', solution: 'No me gustan las matemáticas porque es difícil.', answer: 'No me gustan las matemáticas porque es difícil.' },
          { label: 'c', task: 'Nar har du favorittfaget ditt?', solution: 'Tengo música los miércoles a las diez.', answer: 'Tengo música los miércoles a las diez.' },
        ],
        solution: 'Eksempel: Mi asignatura favorita es la musica porque es divertida. No me gustan las matematicas porque es dificil. Tengo musica los miercoles a las diez.',
        hints: ['Mi asignatura favorita es...', 'porque = fordi', 'Los + dag = pa den dagen'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Las profesiones - Yrker
// ============================================================================

export const CHAPTER_SPANSK_1_8_3: TextbookChapter = {
  id: 'spansk-1-8-3',
  courseId: 'spansk-1',
  chapterNumber: '8.3',
  title: 'Las profesiones',
  subtitle: 'Yrker',
  description: 'Laer navnene pa vanlige yrker og kjoennsboeying av yrkesord pa spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi vanlige yrker',
  ],
  content: [
    {
      id: 'spansk-1-8-3-intro',
      type: 'text',
      content: `## Yrker pa spansk

A kunne snakke om yrker er nyttig nar du skal fortelle om familien din, snakke om fremtidsplaner, eller bare foere en samtale. Pa spansk har de fleste yrkesord bade en hankjoenns- og hunkjoennsform.`,
    },
    {
      id: 'spansk-1-8-3-def-1',
      type: 'definition',
      title: 'Yrker med -o/-a ending',
      content: `**Yrker som endres etter kjonn (-o for menn, -a for kvinner):**

| Hankjonn | Hunkjonn | Norsk |
|----------|----------|-------|
| el médico | la médica | lege |
| el enfermero | la enfermera | sykepleier |
| el abogado | la abogada | advokat |
| el ingeniero | la ingeniera | ingenioer |
| el cocinero | la cocinera | kokk |
| el bombero | la bombera | brannmann/-kvinne |
| el veterinario | la veterinaria | veterinaer |
| el arquitecto | la arquitecta | arkitekt |
| el camarero | la camarera | servitor/servitrisen |
| el secretario | la secretaria | sekretaer |`,
    },
    {
      id: 'spansk-1-8-3-def-2',
      type: 'definition',
      title: 'Yrker med annen boeying',
      content: `**Yrker med -or/-ora ending:**

| Hankjonn | Hunkjonn | Norsk |
|----------|----------|-------|
| el profesor | la profesora | laerer |
| el doctor | la doctora | doktor |

**Yrker som er like for begge kjonn (bare artikkelen endres):**

| Hankjonn | Hunkjonn | Norsk |
|----------|----------|-------|
| el periodista | la periodista | journalist |
| el dentista | la dentista | tannlege |
| el policía | la policía | politi |
| el artista | la artista | artist/kunstner |
| el taxista | la taxista | drosjesjafoer |
| el futbolista | la futbolista | fotballspiller |`,
    },
    {
      id: 'spansk-1-8-3-tip-1',
      type: 'tip',
      content: `Mange yrker som slutter pa -ista har samme form for bade menn og kvinner. Det er bare artikkelen (el/la) som viser kjoennet: el periodista (mannlig journalist) / la periodista (kvinnelig journalist). Dette gjelder ogsa for el/la policía, el/la dentista og el/la artista.`,
    },
    {
      id: 'spansk-1-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Yrker og kjoenn',
      problem: `Skriv riktig form av yrket:

a) laerer (kvinne)
b) lege (mann)
c) journalist (kvinne)
d) kokk (mann)`,
      solution: `a) laerer (kvinne) = **la profesora**
b) lege (mann) = **el médico**
c) journalist (kvinne) = **la periodista** (lik form for begge kjoenn)
d) kokk (mann) = **el cocinero**

**Merk:** For yrker som slutter pa -ista er formen lik, bare artikkelen endres.`,
    },
    {
      id: 'spansk-1-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-3-ex-1',
        number: '8.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv yrket pa spansk (bruk riktig kjoenn):',
        subTasks: [
          { label: 'a', task: 'laerer (mann)', solution: 'el profesor', answer: 'el profesor' },
          { label: 'b', task: 'sykepleier (kvinne)', solution: 'la enfermera', answer: 'la enfermera' },
          { label: 'c', task: 'advokat (mann)', solution: 'el abogado', answer: 'el abogado' },
          { label: 'd', task: 'tannlege (kvinne)', solution: 'la dentista', answer: 'la dentista' },
        ],
        solution: 'a) el profesor, b) la enfermera, c) el abogado, d) la dentista',
        hints: ['Profesor -> profesora for kvinner', 'Dentista er lik for begge kjoenn'],
      },
    },
    {
      id: 'spansk-1-8-3-text-1',
      type: 'text',
      content: `## Bruke "ser" med yrker

For a si hva noen jobber som, bruker vi verbet "ser" (a vaere):

| Spansk | Norsk |
|--------|-------|
| Soy profesor | Jeg er laerer |
| Es médica | Hun er lege |
| Mi padre es ingeniero | Faren min er ingenioer |
| Mi madre es abogada | Moren min er advokat |

**Viktig:** Pa spansk bruker vi IKKE ubestemt artikkel (un/una) med yrker etter "ser":
- Mi padre es médico. (Faren min er lege.) - RIKTIG
- Mi padre es un médico. - FEIL (i standard spansk)

**Men med adjektiv bruker vi artikkel:**
- Mi padre es un médico muy bueno. (Faren min er en veldig flink lege.) - RIKTIG`,
    },
    {
      id: 'spansk-1-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Familiens yrker',
      problem: `Oversett til spansk:

a) Moren min er laerer.
b) Faren min er politi.
c) Soesteren min er sykepleier.`,
      solution: `a) **Mi madre es profesora.**
b) **Mi padre es policía.**
c) **Mi hermana es enfermera.**

**Husk:**
- Ingen artikkel foran yrket etter "ser"
- Bruk hunkjoennsformen for kvinner (profesora, enfermera)
- Policía er lik for begge kjoenn`,
    },
    {
      id: 'spansk-1-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk (husk: ingen artikkel foran yrket):',
        subTasks: [
          { label: 'a', task: 'Faren min er lege.', solution: 'Mi padre es médico.', answer: 'Mi padre es médico.' },
          { label: 'b', task: 'Moren min er arkitekt.', solution: 'Mi madre es arquitecta.', answer: 'Mi madre es arquitecta.' },
          { label: 'c', task: 'Broren min er kokk.', solution: 'Mi hermano es cocinero.', answer: 'Mi hermano es cocinero.' },
          { label: 'd', task: 'Bestemoren min er journalist.', solution: 'Mi abuela es periodista.', answer: 'Mi abuela es periodista.' },
        ],
        solution: 'a) Mi padre es medico. b) Mi madre es arquitecta. c) Mi hermano es cocinero. d) Mi abuela es periodista.',
        hints: ['Ingen un/una foran yrket etter ser', 'mi hermano = broren min', 'mi abuela = bestemoren min'],
      },
    },
    {
      id: 'spansk-1-8-3-text-2',
      type: 'text',
      content: `## Spoerre om yrke

For a spoerre noen om hva de jobber med:

| Spansk | Norsk |
|--------|-------|
| ¿A qué te dedicas? | Hva jobber du med? (uformelt) |
| ¿A qué se dedica usted? | Hva jobber De med? (formelt) |
| ¿En qué trabajas? | Hva jobber du med? |
| ¿Cuál es tu profesión? | Hva er yrket ditt? |
| ¿Dónde trabajas? | Hvor jobber du? |

**Svar:**
- Soy profesor. Trabajo en un colegio. (Jeg er laerer. Jeg jobber pa en skole.)
- Soy médica. Trabajo en un hospital. (Jeg er lege. Jeg jobber pa et sykehus.)
- Soy camarero. Trabajo en un restaurante. (Jeg er servitor. Jeg jobber pa en restaurant.)

**Arbeidssteder:**
| Spansk | Norsk |
|--------|-------|
| el hospital | sykehuset |
| el colegio / la escuela | skolen |
| la oficina | kontoret |
| el restaurante | restauranten |
| la tienda | butikken |`,
    },
    {
      id: 'spansk-1-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Spoerre og svare om yrke',
      problem: `Les dialogen og svar:

A: ¡Hola! ¿A qué te dedicas?
B: Soy enfermera. Trabajo en el Hospital Central. ¿Y tú?
A: Soy profesor de español. Trabajo en un instituto.
B: ¡Qué interesante!

a) Hva jobber person B med?
b) Hvor jobber person B?
c) Hva underviser person A i?`,
      solution: `a) Person B er **sykepleier** (enfermera).
b) Person B jobber pa **Sentralsykehuset** (el Hospital Central).
c) Person A underviser i **spansk** (español).

**Nyttige uttrykk:**
- ¿Y tú? = Og du?
- ¡Qué interesante! = Sa interessant!
- Trabajo en... = Jeg jobber pa/i...`,
    },
    {
      id: 'spansk-1-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble yrket med arbeidsstedet:',
        subTasks: [
          { label: 'a', task: 'El profesor trabaja en...', solution: 'el colegio / la escuela', answer: 'el colegio' },
          { label: 'b', task: 'La médica trabaja en...', solution: 'el hospital', answer: 'el hospital' },
          { label: 'c', task: 'El cocinero trabaja en...', solution: 'el restaurante', answer: 'el restaurante' },
          { label: 'd', task: 'La abogada trabaja en...', solution: 'la oficina', answer: 'la oficina' },
        ],
        solution: 'a) el colegio / la escuela, b) el hospital, c) el restaurante, d) la oficina',
        hints: ['profesor -> colegio/escuela', 'medico/a -> hospital', 'cocinero/a -> restaurante'],
      },
    },
    {
      id: 'spansk-1-8-3-note-1',
      type: 'note',
      title: 'Kulturnotat: Arbeid i spansktalende land',
      content: `I Spania er arbeidsdagen ofte annerledes enn i Norge. Mange jobber fra kl. 9 til kl. 14, tar en lang lunsjpause ("la pausa del almuerzo"), og jobber igjen fra kl. 17 til kl. 20. Denne tradisjonen er i endring, men "la siesta" (middagshvilen) er fortsatt viktig for mange. Arbeidsledigheten blant unge har vaert hoey i Spania, og mange unge reiser til utlandet for a finne jobb.`,
    },
    {
      id: 'spansk-1-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv pa spansk om familiens yrker:',
        subTasks: [
          { label: 'a', task: 'Fortell hva moren/faren din jobber som og hvor.', solution: 'Mi madre es profesora. Trabaja en un colegio.', answer: 'Mi madre es profesora. Trabaja en un colegio.' },
          { label: 'b', task: 'Spoer en venn hva han/hun vil bli.', solution: '¿A qué te dedicas? / ¿Qué quieres ser?', answer: '¿Qué quieres ser?' },
          { label: 'c', task: 'Skriv hunkjoennsformen av: médico, ingeniero, profesor', solution: 'médica, ingeniera, profesora', answer: 'médica, ingeniera, profesora' },
        ],
        solution: 'a) Mi madre es profesora. Trabaja en un colegio. b) ¿Que quieres ser? c) medica, ingeniera, profesora',
        hints: ['Bruk ser + yrke (uten artikkel)', 'trabajar en = a jobbe pa/i', 'Hunkjoenn: -o -> -a, -or -> -ora'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: ¿Qué quieres ser? - Hva vil du bli?
// ============================================================================

export const CHAPTER_SPANSK_1_8_4: TextbookChapter = {
  id: 'spansk-1-8-4',
  courseId: 'spansk-1',
  chapterNumber: '8.4',
  title: '¿Qué quieres ser?',
  subtitle: 'Hva vil du bli?',
  description: 'Laer a snakke om fremtidsplaner og droemmeyrker pa spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke fremtidsoensker om yrke',
  ],
  content: [
    {
      id: 'spansk-1-8-4-intro',
      type: 'text',
      content: `## Snakke om fremtiden

Hva vil du bli nar du blir voksen? I dette kapittelet laerer du a snakke om droemmer og fremtidsplaner pa spansk!`,
    },
    {
      id: 'spansk-1-8-4-def-1',
      type: 'definition',
      title: 'Verbet "querer" - a ville/oenske',
      content: `**Boeyning av "querer" (e->ie) i presens:**

| Person | Form | Norsk |
|--------|------|-------|
| yo | quiero | jeg vil |
| tú | quieres | du vil |
| él/ella/usted | quiere | han/hun vil |
| nosotros/as | queremos | vi vil |
| vosotros/as | queréis | dere vil |
| ellos/ellas/ustedes | quieren | de vil |

**Merk:** "Querer" er et stammeendrende verb (e->ie). Stammen endres i alle former unntatt nosotros og vosotros.

**Bruk med yrker:**
Querer + ser + yrke = a ville bli + yrke
- Quiero ser médico. (Jeg vil bli lege.)`,
    },
    {
      id: 'spansk-1-8-4-text-1',
      type: 'text',
      content: `## Uttrykke oensker og planer

Det finnes flere mater a snakke om fremtidsplaner pa:

| Spansk | Norsk | Styrke |
|--------|-------|--------|
| Quiero ser... | Jeg vil bli... | Sterk vilje |
| Me gustaría ser... | Jeg ville gjerne bli... | Hoeflig oenske |
| Voy a ser... | Jeg skal bli... | Plan |
| Sueño con ser... | Jeg droemmer om a bli... | Droem |

**Eksempler:**
- Quiero ser médico porque me gusta ayudar a la gente. (Jeg vil bli lege fordi jeg liker a hjelpe folk.)
- Me gustaría ser veterinaria porque me encantan los animales. (Jeg ville gjerne bli veterinaer fordi jeg elsker dyr.)
- Sueño con ser futbolista profesional. (Jeg droemmer om a bli profesjonell fotballspiller.)`,
    },
    {
      id: 'spansk-1-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Querer + ser',
      problem: `Oversett til norsk:

a) Quiero ser profesor.
b) ¿Qué quieres ser?
c) Mi hermana quiere ser médica.`,
      solution: `a) Quiero ser profesor.
= **Jeg vil bli laerer.**

b) ¿Qué quieres ser?
= **Hva vil du bli?**

c) Mi hermana quiere ser médica.
= **Soesteren min vil bli lege.**

**Setningsstruktur:**
Subjekt + querer (boyd) + ser + yrke`,
    },
    {
      id: 'spansk-1-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-4-ex-1',
        number: '8.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "querer":',
        subTasks: [
          { label: 'a', task: 'Yo ___ ser ingeniero.', solution: 'quiero', answer: 'quiero' },
          { label: 'b', task: 'Tú ___ ser veterinaria.', solution: 'quieres', answer: 'quieres' },
          { label: 'c', task: 'Nosotros ___ ser profesores.', solution: 'queremos', answer: 'queremos' },
          { label: 'd', task: 'Ella ___ ser periodista.', solution: 'quiere', answer: 'quiere' },
        ],
        solution: 'a) quiero, b) quieres, c) queremos, d) quiere',
        hints: ['yo -> quiero, tu -> quieres', 'nosotros har IKKE stammeendring: queremos', 'el/ella -> quiere'],
      },
    },
    {
      id: 'spansk-1-8-4-def-2',
      type: 'definition',
      title: 'Me gustaría - Jeg ville gjerne',
      content: `**"Me gustaría" er en hoeflig mate a uttrykke oensker pa:**

| Spansk | Norsk |
|--------|-------|
| Me gustaría ser... | Jeg ville gjerne bli... |
| Me gustaría trabajar en... | Jeg ville gjerne jobbe i... |
| Me gustaría estudiar... | Jeg ville gjerne studere... |
| Me gustaría vivir en... | Jeg ville gjerne bo i... |

**"Me gustaría" vs. "Quiero":**
- "Quiero ser médico" = Jeg VIL bli lege (sterk vilje, bestemt)
- "Me gustaría ser médico" = Jeg VILLE GJERNE bli lege (hoeflig oenske, droem)

**Merk:** "Me gustaría" er kondisjonal av "gustar" og er den samme formen uansett person. For andre personer bruker vi:
- Te gustaría (du ville gjerne)
- Le gustaría (han/hun ville gjerne)
- Nos gustaría (vi ville gjerne)`,
    },
    {
      id: 'spansk-1-8-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Begrunne yrkesoensker',
      problem: `Kombiner yrket med en begrunnelse:

a) laerer - liker barn
b) lege - liker a hjelpe folk
c) ingenioer - liker matematikk`,
      solution: `a) **Me gustaría ser profesor/a porque me gustan los niños.**
(Jeg ville gjerne bli laerer fordi jeg liker barn.)

b) **Me gustaría ser médico/a porque me gusta ayudar a la gente.**
(Jeg ville gjerne bli lege fordi jeg liker a hjelpe folk.)

c) **Me gustaría ser ingeniero/a porque me gustan las matemáticas.**
(Jeg ville gjerne bli ingenioer fordi jeg liker matematikk.)

**Nyttige begrunnelser:**
- me gusta ayudar a la gente = jeg liker a hjelpe folk
- me gustan los niños = jeg liker barn
- es un trabajo interesante = det er en interessant jobb
- se gana bien = man tjener godt`,
    },
    {
      id: 'spansk-1-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk med begrunnelse:',
        subTasks: [
          { label: 'a', task: 'Jeg vil bli veterinaer fordi jeg elsker dyr.', solution: 'Quiero ser veterinario/a porque me encantan los animales.', answer: 'Quiero ser veterinario/a porque me encantan los animales.' },
          { label: 'b', task: 'Hun ville gjerne bli journalist fordi det er interessant.', solution: 'Le gustaría ser periodista porque es interesante.', answer: 'Le gustaría ser periodista porque es interesante.' },
          { label: 'c', task: 'Vi vil bli laerere fordi vi liker barn.', solution: 'Queremos ser profesores porque nos gustan los niños.', answer: 'Queremos ser profesores porque nos gustan los niños.' },
        ],
        solution: 'a) Quiero ser veterinario/a porque me encantan los animales. b) Le gustaria ser periodista porque es interesante. c) Queremos ser profesores porque nos gustan los niños.',
        hints: ['porque = fordi', 'me encantan = jeg elsker (flertall)', 'nos gustan = vi liker (flertall)'],
      },
    },
    {
      id: 'spansk-1-8-4-text-2',
      type: 'text',
      content: `## Koble skolefag med yrker

Det er naturlig a koble det du laerer pa skolen med fremtidige yrker:

| Fag | Mulige yrker |
|-----|-------------|
| Las matemáticas | ingeniero/a, arquitecto/a, profesor/a |
| Las ciencias naturales | médico/a, veterinario/a, dentista |
| La historia | profesor/a, periodista, abogado/a |
| El arte | artista, arquitecto/a, diseñador/a |
| La educación física | deportista, bombero/a, policía |
| El español | profesor/a, traductor/a, periodista |

**Eksempel pa a forklare sammenhengen:**
- Me gustan las ciencias naturales y quiero ser médico.
(Jeg liker naturfag og vil bli lege.)
- Soy bueno/a en matemáticas, por eso quiero ser ingeniero/a.
(Jeg er flink i matte, derfor vil jeg bli ingenioer.)`,
    },
    {
      id: 'spansk-1-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Fremtidsplaner',
      problem: `Les teksten og svar pa sporsmalene:

"Me llamo Ana y tengo quince años. Mi asignatura favorita es la biología porque me encantan los animales. Quiero ser veterinaria. Me gustaría trabajar en una clínica veterinaria en Barcelona. Mi amigo Carlos es muy bueno en matemáticas. Él quiere ser ingeniero. Le gustaría trabajar en una empresa de tecnología."

a) Hva vil Ana bli?
b) Hvorfor vil hun bli dette?
c) Hva vil Carlos bli, og hvorfor?`,
      solution: `a) Ana vil bli **veterinaer** (veterinaria).
b) Fordi hun **elsker dyr** (le encantan los animales).
c) Carlos vil bli **ingenioer** (ingeniero) fordi han er **flink i matematikk** (es muy bueno en matemáticas).

**Nyttige ord fra teksten:**
- tengo quince años = jeg er femten ar
- la clínica veterinaria = dyreklinikken
- la empresa = bedriften/firmaet
- muy bueno/a en = flink i`,
    },
    {
      id: 'spansk-1-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble faget med et passende yrke og skriv en setning:',
        subTasks: [
          { label: 'a', task: 'Me gustan las ciencias naturales. Quiero ser...', solution: 'Quiero ser médico/a (eller veterinario/a).', answer: 'médico' },
          { label: 'b', task: 'Soy bueno/a en arte. Me gustaría ser...', solution: 'Me gustaría ser artista (eller arquitecto/a).', answer: 'artista' },
          { label: 'c', task: 'Me encanta la educación física. Quiero ser...', solution: 'Quiero ser deportista (eller bombero/a).', answer: 'deportista' },
        ],
        solution: 'a) Quiero ser medico/a. b) Me gustaria ser artista. c) Quiero ser deportista.',
        hints: ['Ciencias -> medico, veterinario', 'Arte -> artista, arquitecto', 'E.F. -> deportista, bombero'],
      },
    },
    {
      id: 'spansk-1-8-4-tip-1',
      type: 'tip',
      content: `Nar du snakker om fremtidsplaner pa spansk, kan du bruke bade "quiero ser" og "me gustaría ser". Bruk "quiero ser" nar du er sikker pa hva du vil, og "me gustaría ser" nar du snakker om droemmer og oensker. Du kan ogsa si "de mayor quiero ser..." (nar jeg blir stor, vil jeg bli...).`,
    },
    {
      id: 'spansk-1-8-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Utdanning og karriere i spansktalende land',
      content: `I Spania bestemmer mange elever allerede i 16-arsalderen hvilken retning de vil ga. Etter ESO (ungdomsskolen) kan de velge mellom "Bachillerato" (studieforberedende) med spesialisering i humaniora, realfag, eller samfunnsfag, eller "Formación Profesional" (yrkesfag). I Latin-Amerika varierer systemet fra land til land, men universitetsstudier er hoyt verdsatt overalt i den spansktalende verden.`,
    },
    {
      id: 'spansk-1-8-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst pa spansk (3-4 setninger) om dine fremtidsplaner:',
        subTasks: [
          { label: 'a', task: 'Hva vil du bli? (Bruk quiero ser eller me gustaría ser)', solution: 'Me gustaría ser ingeniera porque me gustan las matemáticas.', answer: 'Me gustaría ser ingeniera porque me gustan las matemáticas.' },
          { label: 'b', task: 'Hvorfor? (Bruk porque + begrunnelse)', solution: 'Es un trabajo interesante y se gana bien.', answer: 'Es un trabajo interesante y se gana bien.' },
          { label: 'c', task: 'Hvor vil du jobbe? (Bruk me gustaría trabajar en...)', solution: 'Me gustaría trabajar en una empresa de tecnología en Oslo.', answer: 'Me gustaría trabajar en una empresa de tecnología en Oslo.' },
        ],
        solution: 'Eksempel: Me gustaria ser ingeniera porque me gustan las matematicas. Es un trabajo interesante y se gana bien. Me gustaria trabajar en una empresa de tecnologia en Oslo.',
        hints: ['Bruk "porque" for a begrunne', 'me gustaria trabajar en = jeg ville gjerne jobbe i', 'Kombiner fag og yrke'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SPANSK_1_CHAPTERS_7_8: TextbookChapter[] = [
  CHAPTER_SPANSK_1_7_1,
  CHAPTER_SPANSK_1_7_2,
  CHAPTER_SPANSK_1_7_3,
  CHAPTER_SPANSK_1_7_4,
  CHAPTER_SPANSK_1_8_1,
  CHAPTER_SPANSK_1_8_2,
  CHAPTER_SPANSK_1_8_3,
  CHAPTER_SPANSK_1_8_4,
];
