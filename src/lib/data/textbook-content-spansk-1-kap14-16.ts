/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 1 - Kapittel 14-16
 *
 * Kapittel 14: Comunicación oral (Muntlig kommunikasjon)
 * Kapittel 15: Comunicación escrita (Skriftlig kommunikasjon)
 * Kapittel 16: Gramática y estrategias (Grammatikk og læringsstrategier)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 14: COMUNICACIÓN ORAL
// ============================================================================

export const CHAPTER_SPANSK_1_14_1: TextbookChapter = {
  id: 'spansk-1-14-1',
  courseId: 'spansk-1',
  chapterNumber: '14.1',
  title: 'La pronunciación',
  subtitle: 'Uttale',
  description: 'Lær om spansk uttale og de viktigste lydene som skiller seg fra norsk.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke regler for uttale for å kommunisere tydelig på spansk'],
  content: [
    {
      id: 'spansk-1-14-1-intro',
      type: 'text',
      content: `## La pronunciación - Uttale

Spansk uttale er enklere enn mange tror! Spansk er et fonetisk språk, noe som betyr at ordene vanligvis uttales slik de skrives. Det finnes likevel noen lyder som er spesielle for spansk, og som vi må øve på.

I dette kapittelet lærer du om de viktigste spanske lydene, slik at du kan kommunisere tydelig og bli forstått.`
    },
    {
      id: 'spansk-1-14-1-def-1',
      type: 'definition',
      title: 'Vokalene (Las vocales)',
      content: `**Vokalene** i spansk er alltid korte og klare. Det finnes fem vokaler: **a, e, i, o, u**. I motsetning til norsk har spansk ingen lange eller stumme vokaler.

| Vokal | Uttale | Eksempel |
|-------|--------|----------|
| a | som norsk «a» | *casa* (hus) |
| e | som norsk «e» | *mesa* (bord) |
| i | som norsk «i» | *libro* (bok) |
| o | som norsk «o» | *todo* (alt) |
| u | som norsk «u» | *mucho* (mye) |`
    },
    {
      id: 'spansk-1-14-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Vokaler i ord',
      problem: 'Les disse ordene høyt og legg merke til de klare vokalene: amigo, escuela, isla, octubre, universidad.',
      solution: 'Alle vokalene uttales tydelig og kort. I «escuela» (e-scue-la) hører du alle tre vokalene. I «universidad» (u-ni-ver-si-dad) hører du alle fem vokalene i ett ord!'
    },
    {
      id: 'spansk-1-14-1-def-2',
      type: 'definition',
      title: 'Spesielle konsonanter',
      content: `**R og RR** - Den spanske r-lyden er annerledes enn den norske:
- **r** (enkel): Uttales med et lett slag av tungespissen mot ganen, som i *pero* (men)
- **rr** (dobbel): Uttales med flere raske slag (rulle-r), som i *perro* (hund)
- **r** i begynnelsen av et ord uttales som **rr**: *rojo* (rød)

**J** - Uttales som en sterk h-lyd (som norsk «h» men sterkere, nesten som et pust fra halsen): *junio* (juni), *trabajo* (arbeid)

**LL** - Uttales som norsk «j» i Spania, eller som «lj/j» i Latin-Amerika: *calle* (gate), *lluvia* (regn)

**Ñ** - Uttales som «nj» på norsk: *España* (Spania), *niño* (gutt/barn), *año* (ar)`
    },
    {
      id: 'spansk-1-14-1-ex-2',
      type: 'example',
      title: 'Eksempel 2: R vs. RR',
      problem: 'Hva er forskjellen mellom «pero» og «perro»?',
      solution: '**Pero** (med enkel r) betyr «men». **Perro** (med dobbel rr) betyr «hund». Forskjellen i uttale er viktig fordi den endrer betydningen av ordet!'
    },
    {
      id: 'spansk-1-14-1-def-3',
      type: 'definition',
      title: 'C, Z og S',
      content: `Uttalen av **c**, **z** og **s** varierer mellom Spania og Latin-Amerika:

**I Spania:**
- **c** foran e/i = «th» (som i engelsk «think»): *cena* (middag), *ciudad* (by)
- **z** = «th»: *zapato* (sko), *azul* (blå)
- **s** = vanlig s-lyd: *solo* (alene)

**I Latin-Amerika:**
- **c** foran e/i = vanlig «s»: *cena*, *ciudad*
- **z** = vanlig «s»: *zapato*, *azul*
- **s** = vanlig «s»: *solo*

Denne forskjellen kalles **seseo** (Latin-Amerika) vs. **distinción** (Spania).`
    },
    {
      id: 'spansk-1-14-1-def-4',
      type: 'definition',
      title: 'G og GU',
      content: `**G** har to forskjellige uttaler:
- Foran **a, o, u**: som norsk «g» i «gat»: *gato* (katt), *gordo* (tykk), *gustar* (å like)
- Foran **e, i**: som spansk «j» (sterk h-lyd): *gente* (folk), *girar* (å snu)

For å fa hard g-lyd foran e/i bruker man **gu**:
- *guerra* (krig) - u-en er stum
- *guitarra* (gitar) - u-en er stum

Hvis u-en skal uttales, bruker man **gü**:
- *pingüino* (pingvin) - u-en uttales`
    },
    {
      id: 'spansk-1-14-1-ex-3',
      type: 'example',
      title: 'Eksempel 3: G-lyder',
      problem: 'Hvordan uttales disse ordene: gato, gente, guerra, pingüino?',
      solution: '**Gato**: hard g (som norsk g) + a-to. **Gente**: «j»-lyd (sterk h) + en-te. **Guerra**: hard g + e-rra (u-en er stum). **Pingüino**: pin-gu-i-no (u-en uttales fordi det står trema over).'
    },
    {
      id: 'spansk-1-14-1-def-5',
      type: 'definition',
      title: 'H og CH',
      content: `**H** er alltid stum på spansk! Den uttales aldri:
- *hola* (hei) = uttales «ola»
- *hacer* (å gjøre) = uttales «aser/ather»
- *hotel* = uttales «otel»

**CH** uttales som norsk «tsj» eller «kj»:
- *chico* (gutt)
- *mucho* (mye)
- *chocolate* (sjokolade)`
    },
    {
      id: 'spansk-1-14-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken bokstav er alltid stum på spansk?',
        options: [
          { id: 'a', text: 'J', isCorrect: false },
          { id: 'b', text: 'H', isCorrect: true },
          { id: 'c', text: 'R', isCorrect: false },
          { id: 'd', text: 'Ñ', isCorrect: false },
        ],
        solution: 'H er alltid stum på spansk. For eksempel uttales «hola» som «ola» og «hotel» som «otel».',
      },
    },
    {
      id: 'spansk-1-14-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan uttales bokstaven «ñ» på spansk?',
        options: [
          { id: 'a', text: 'Som vanlig «n»', isCorrect: false },
          { id: 'b', text: 'Som «ng» på norsk', isCorrect: false },
          { id: 'c', text: 'Som «nj» på norsk', isCorrect: true },
          { id: 'd', text: 'Den er stum', isCorrect: false },
        ],
        solution: 'Ñ uttales som «nj» på norsk. For eksempel uttales «España» som «Espanja» og «niño» som «ninjo».',
      },
    },
    {
      id: 'spansk-1-14-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv hvordan disse ordene uttales med norske lyder.',
        subTasks: [
          { label: 'a', task: 'hola', solution: '«ola» (h er stum)' },
          { label: 'b', task: 'calle', solution: '«kalje» (ll uttales som j)' },
          { label: 'c', task: 'perro', solution: '«perro» med rulle-r (dobbel rr)' },
          { label: 'd', task: 'junio', solution: '«hunio» (j uttales som sterk h)' },
        ],
        solution: 'a) «ola» - h er stum. b) «kalje» - ll uttales som j. c) «perro» med rulle-r. d) «hunio» - j er en sterk h-lyd.',
        hints: ['Husk at h alltid er stum på spansk', 'LL uttales som norsk j'],
      },
    },
    {
      id: 'spansk-1-14-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen i uttale mellom ordene i hvert par.',
        subTasks: [
          { label: 'a', task: 'pero / perro', solution: 'Pero (men) har enkel r med ett tungeslag. Perro (hund) har dobbel rr med rulle-r.' },
          { label: 'b', task: 'caro / carro', solution: 'Caro (dyr/kjaer) har enkel r. Carro (bil/vogn) har dobbel rr med rulle-r.' },
          { label: 'c', task: 'gato / gente', solution: 'Gato har hard g-lyd (som norsk g). Gente har «j»-lyd (sterk h) fordi g står foran e.' },
        ],
        solution: 'Enkel r og dobbel rr gir forskjellig betydning. G foran a/o/u er hard, men foran e/i er den en sterk h-lyd.',
        hints: ['Tenk på hva som kommer etter konsonanten'],
      },
    },
    {
      id: 'spansk-1-14-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Spansk uttale er ganske regelfast. De viktigste punktene å huske:

- **Vokalene** er alltid korte og klare
- **H** er alltid stum
- **R/RR** - enkel r vs. rulle-r endrer ordets betydning
- **J** uttales som en sterk h-lyd
- **LL** uttales som «j» (varierer litt mellom land)
- **Ñ** uttales som «nj»
- **G** har to uttaler: hard foran a/o/u, og sterk h-lyd foran e/i
- **C** foran e/i og **Z** uttales som «th» i Spania og «s» i Latin-Amerika`
    },
    {
      id: 'spansk-1-14-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kalles fenomenet der c foran e/i og z uttales som vanlig «s» i Latin-Amerika?',
        options: [
          { id: 'a', text: 'Distinción', isCorrect: false },
          { id: 'b', text: 'Seseo', isCorrect: true },
          { id: 'c', text: 'Ceceo', isCorrect: false },
          { id: 'd', text: 'Leísmo', isCorrect: false },
        ],
        solution: 'Seseo er fenomenet der c foran e/i og z uttales som vanlig «s». Dette er standard i Latin-Amerika. I Spania bruker man distinción, der disse lydene uttales som «th».',
      },
    },
    {
      id: 'spansk-1-14-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les teksten høyt og marker alle ord som inneholder spesielle spanske lyder (ñ, ll, rr, j, h, g foran e/i). Forklar uttalen av hvert markert ord.',
        subTasks: [
          { label: 'a', task: '«El niño juega en la calle con su perro. Hace mucho calor en julio.»', solution: 'niño (nj-lyd), juega (sterk h-lyd på j), calle (ll = j-lyd), perro (rulle-r), Hace (stum h), mucho (tsj-lyd på ch), julio (sterk h-lyd på j)' },
        ],
        solution: 'Ordene med spesielle lyder: niño (ñ = nj), juega (j = sterk h), calle (ll = j), perro (rr = rulle-r), Hace (h = stum), mucho (ch = tsj), julio (j = sterk h). Alle disse lydene skiller seg fra norsk uttale.',
        hints: ['Let etter alle de spesielle konsonantene vi har lært om', 'Husk at h er stum'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la vocal', definition: 'vokal' },
    { term: 'la consonante', definition: 'konsonant' },
    { term: 'la pronunciación', definition: 'uttale' },
    { term: 'seseo', definition: 'uttale av c/z som s (Latin-Amerika)' },
    { term: 'distinción', definition: 'uttale av c/z som th (Spania)' },
    { term: 'la sílaba', definition: 'stavelse' },
  ],
};

export const CHAPTER_SPANSK_1_14_2: TextbookChapter = {
  id: 'spansk-1-14-2',
  courseId: 'spansk-1',
  chapterNumber: '14.2',
  title: 'Diálogos',
  subtitle: 'Samtaletrening',
  description: 'Øv på a fore samtaler på spansk i vanlige hverdagssituasjoner.',
  estimatedMinutes: 50,
  competenceGoals: ['delta i enkle samtaler om dagligdagse emner på spansk'],
  content: [
    {
      id: 'spansk-1-14-2-intro',
      type: 'text',
      content: `## Diálogos - Samtaletrening

Å kunne fore en samtale på spansk er et av de viktigste målene i språkopplæringen. I dette kapittelet skal du øve på samtaler i vanlige hverdagssituasjoner.

Vi ser på nyttige uttrykk for å hilse, presentere oss, bestille mat, handle og spørre om veien.`
    },
    {
      id: 'spansk-1-14-2-def-1',
      type: 'definition',
      title: 'Hilsener og avskjeder (Saludos y despedidas)',
      content: `**Hilsener:**

| Spansk | Norsk | Når brukes det |
|--------|-------|----------------|
| ¡Hola! | Hei! | Uformelt, hele dagen |
| ¡Buenos días! | God morgen! | Morgen til ca. kl. 14 |
| ¡Buenas tardes! | God ettermiddag! | Ca. kl. 14-21 |
| ¡Buenas noches! | God kveld/natt! | Etter kl. 21 |
| ¿Qué tal? | Hvordan går det? | Uformelt |
| ¿Cómo está usted? | Hvordan har De det? | Formelt |

**Avskjeder:**

| Spansk | Norsk |
|--------|-------|
| ¡Adiós! | Ha det! |
| ¡Hasta luego! | Vi sees! |
| ¡Hasta mañana! | Vi sees i morgen! |
| ¡Hasta pronto! | Vi sees snart! |
| ¡Chao! | Ha det! (uformelt) |`
    },
    {
      id: 'spansk-1-14-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Hilse og presentere seg',
      problem: 'Lag en kort dialog der to personer møter hverandre for første gang.',
      solution: `— ¡Hola! ¿Qué tal? Me llamo María. ¿Cómo te llamas?
— ¡Hola, María! Me llamo Carlos. Mucho gusto.
— Mucho gusto, Carlos. ¿De dónde eres?
— Soy de México. ¿Y tú?
— Soy de Noruega.
— ¡Qué interesante! ¿Hablås español?
— Sí, un poco. Estudio español en el instituto.
— ¡Muy bien! ¡Hasta luego!
— ¡Hasta luego, Carlos!`
    },
    {
      id: 'spansk-1-14-2-def-2',
      type: 'definition',
      title: 'På kafé og restaurant (En la cafetería / el restaurante)',
      content: `**Nyttige uttrykk for å bestille:**

| Spansk | Norsk |
|--------|-------|
| ¿Qué desea? / ¿Qué le pongo? | Hva ønsker du? / Hva skal det være? |
| Quiero... / Me pone... | Jeg vil ha... / Kan jeg fa... |
| Para mí, ... | Til meg, ... |
| ¿Cuánto cuesta? / ¿Cuánto es? | Hvor mye koster det? |
| La cuenta, por favor. | Regningen, takk. |
| ¿Tiene...? | Har dere...? |
| Con / Sin | Med / Uten |
| De primero / De segundo / De postre | Til forrett / Til hovedrett / Til dessert |`
    },
    {
      id: 'spansk-1-14-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: På kafé',
      problem: 'Les denne dialogen på en kafé.',
      solution: `**Camarero:** ¡Buenos días! ¿Qué le pongo?
**Cliente:** Buenos días. Quiero un café con leche, por favor.
**Camarero:** ¿Grande o pequeño?
**Cliente:** Grande, por favor. Y un croissant.
**Camarero:** Muy bien. ¿Algo más?
**Cliente:** No, gracias. ¿Cuánto es?
**Camarero:** Son tres euros con cincuenta.
**Cliente:** Aquí tiene. Gracias.
**Camarero:** ¡Gracias a usted!`
    },
    {
      id: 'spansk-1-14-2-def-3',
      type: 'definition',
      title: 'Spørre om veien (Preguntar por el camino)',
      content: `**For å spørre om veien:**

| Spansk | Norsk |
|--------|-------|
| ¿Dónde está...? | Hvor er...? |
| ¿Cómo llego a...? | Hvordan kommer jeg til...? |
| ¿Está lejos / cerca? | Er det langt / nært? |
| Perdone, ¿puede ayudarme? | Unnskyld, kan du hjelpe meg? |

**Retningsangivelser:**

| Spansk | Norsk |
|--------|-------|
| Siga todo recto | Gå rett fram |
| Gire a la derecha | Sving til høyre |
| Gire a la izquierda | Sving til venstre |
| En la esquina | På hjørnet |
| Al lado de | Ved siden av |
| Enfrente de | Rett overfor |
| La primera / segunda calle | Første / andre gate |`
    },
    {
      id: 'spansk-1-14-2-ex-3',
      type: 'example',
      title: 'Eksempel 3: Spørre om veien',
      problem: 'Lag en dialog der noen spør om veien til museet.',
      solution: `— Perdone, ¿dónde está el museo?
— El museo... Siga todo recto y gire a la derecha en la segunda calle. El museo está enfrente de la iglesia.
— ¿Está lejos?
— No, está a cinco minutos a pie.
— Muchas gracias.
— De nada. ¡Buen día!`
    },
    {
      id: 'spansk-1-14-2-def-4',
      type: 'definition',
      title: 'I butikken (En la tienda)',
      content: `**Nyttige uttrykk for å handle:**

| Spansk | Norsk |
|--------|-------|
| ¿En qué puedo ayudarle? | Hva kan jeg hjelpe deg med? |
| Busco... | Jeg leter etter... |
| ¿Tiene esto en otra talla? | Har dere dette i en annen storrelse? |
| ¿Puedo probármelo? | Kan jeg prøve det? |
| ¿Cuánto cuesta? | Hvor mye koster det? |
| Es demasiado caro. | Det er for dyrt. |
| Me lo llevo. | Jeg tar det. |
| ¿Acepta tarjeta? | Tar dere kort? |
| ¿Dónde está el probador? | Hvor er prøverommet? |`
    },
    {
      id: 'spansk-1-14-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «¿Cuánto cuesta?»?',
        options: [
          { id: 'a', text: 'Hvor er det?', isCorrect: false },
          { id: 'b', text: 'Hva heter du?', isCorrect: false },
          { id: 'c', text: 'Hvor mye koster det?', isCorrect: true },
          { id: 'd', text: 'Hva ønsker du?', isCorrect: false },
        ],
        solution: '«¿Cuánto cuesta?» betyr «Hvor mye koster det?» og er et av de viktigste uttrykkene å kunne når du handler eller bestiller noe.',
      },
    },
    {
      id: 'spansk-1-14-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken hilsen bruker du om ettermiddagen (ca. kl. 15)?',
        options: [
          { id: 'a', text: '¡Buenos días!', isCorrect: false },
          { id: 'b', text: '¡Buenas tardes!', isCorrect: true },
          { id: 'c', text: '¡Buenas noches!', isCorrect: false },
          { id: 'd', text: '¡Hasta luego!', isCorrect: false },
        ],
        solution: '«¡Buenas tardes!» brukes om ettermiddagen, fra ca. kl. 14 til kl. 21. «Buenos días» brukes om morgenen og «Buenas noches» om kvelden/natten.',
      },
    },
    {
      id: 'spansk-1-14-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse uttrykkene til spansk.',
        subTasks: [
          { label: 'a', task: 'Gå rett fram', solution: 'Siga todo recto' },
          { label: 'b', task: 'Sving til høyre', solution: 'Gire a la derecha' },
          { label: 'c', task: 'Ved siden av', solution: 'Al lado de' },
          { label: 'd', task: 'Regningen, takk', solution: 'La cuenta, por favor' },
        ],
        solution: 'a) Siga todo recto, b) Gire a la derecha, c) Al lado de, d) La cuenta, por favor.',
        hints: ['Se tabellene med retningsangivelser og restaurantuttrykk'],
      },
    },
    {
      id: 'spansk-1-14-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog (6-8 replikker) der du handler i en klesbutikk. Bruk uttrykkene fra kapittelet.',
        subTasks: [
          { label: 'a', task: 'Dialogen skal inneholde: hilsen, spørsmål om pris, prøve klærne, og betaling.', solution: '— ¡Hola! ¿En qué puedo ayudarle?\n— Hola, busco una camiseta azul.\n— Tenemos estas. ¿Qué talla necesita?\n— La mediana, por favor. ¿Puedo probármela?\n— Sí, el probador está a la derecha.\n— Me queda bien. ¿Cuánto cuesta?\n— Cuesta veinte euros.\n— Me la llevo. ¿Acepta tarjeta?\n— Sí, por supuesto.' },
        ],
        solution: 'Dialogen bør inneholde hilsen, spørsmål om varen, prøve den, spørre om pris og betale. Se løsningen over for et eksempel.',
        hints: ['Start med en hilsen', 'Bruk uttrykkene fra tabellen om handling'],
      },
    },
    {
      id: 'spansk-1-14-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært uttrykk for vanlige samtalesituasjoner:

- **Hilsener**: Buenos días / Buenas tardes / Buenas noches
- **På kafé**: Quiero..., ¿Cuánto es?, La cuenta por favor
- **Retning**: Siga recto, gire a la derecha/izquierda
- **I butikken**: ¿Cuánto cuesta?, ¿Puedo probármelo?, Me lo llevo

Øv på disse samtalene med en partner. Jo mer du øver, jo tryggere blir du i å snakke spansk!`
    },
    {
      id: 'spansk-1-14-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du er på restaurant og vil bestille hovedretten. Hva sier du?',
        options: [
          { id: 'a', text: 'De primero quiero la sopa.', isCorrect: false },
          { id: 'b', text: 'De segundo quiero el pollo.', isCorrect: true },
          { id: 'c', text: 'De postre quiero helado.', isCorrect: false },
          { id: 'd', text: 'La cuenta, por favor.', isCorrect: false },
        ],
        solution: '«De segundo» brukes for å bestille hovedretten. «De primero» er forretten, «de postre» er desserten, og «la cuenta» er regningen.',
      },
    },
    {
      id: 'spansk-1-14-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en komplett dialog (10-12 replikker) på en restaurant. Dialogen skal inkludere: hilsen, fa meny, bestille forrett, hovedrett og dessert, be om regningen, og ta avskjed.',
        subTasks: [
          { label: 'a', task: 'Skriv dialogen mellom kelneren (el camarero) og kunden (el cliente).', solution: '— Camarero: ¡Buenas tardes! Bienvenido. ¿Mesa para cuántos?\n— Cliente: Para dos, por favor.\n— Camarero: Aquí tienen la carta.\n— Cliente: Gracias. De primero, quiero la sopa del día. Y mi amigo quiere la ensalada.\n— Camarero: Muy bien. ¿Y de segundo?\n— Cliente: Para mí, el pollo con patatas. Y para mi amigo, el pescado.\n— Camarero: Perfecto. ¿Algo para beber?\n— Cliente: Una botella de agua, por favor.\n— Camarero: ¿Quieren postre?\n— Cliente: Sí, dos flanes, por favor.\n— Camarero: Aquí tienen.\n— Cliente: La cuenta, por favor. ¿Acepta tarjeta?\n— Camarero: Sí, por supuesto. ¡Gracias y buenas tardes!' },
        ],
        solution: 'En god restaurantdialog inkluderer hilsen, bestilling av forrett (de primero), hovedrett (de segundo), drikke, dessert (de postre) og betaling (la cuenta).',
        hints: ['Bruk de primero, de segundo, de postre', 'Husk høflighetsfraser som por favor og gracias'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el saludo', definition: 'hilsen' },
    { term: 'la despedida', definition: 'avskjed' },
    { term: 'el camarero', definition: 'kelner' },
    { term: 'la cuenta', definition: 'regningen' },
    { term: 'la tienda', definition: 'butikk' },
    { term: 'el probador', definition: 'prøverom' },
    { term: 'a la derecha', definition: 'til høyre' },
    { term: 'a la izquierda', definition: 'til venstre' },
  ],
};

export const CHAPTER_SPANSK_1_14_3: TextbookChapter = {
  id: 'spansk-1-14-3',
  courseId: 'spansk-1',
  chapterNumber: '14.3',
  title: 'Presentaciones cortas',
  subtitle: 'Korte presentasjoner',
  description: 'Lær å holde korte presentasjoner på spansk om deg selv, familien din og interessene dine.',
  estimatedMinutes: 45,
  competenceGoals: ['gi en kort presentasjon på spansk om kjente emner'],
  content: [
    {
      id: 'spansk-1-14-3-intro',
      type: 'text',
      content: `## Presentaciones cortas - Korte presentasjoner

Å kunne presentere seg selv og snakke om kjente emner er en viktig ferdighet. I dette kapittelet lærer du å holde korte presentasjoner på spansk - om deg selv, familien din, hobbyer og hverdagen din.

En god presentasjon har en klar struktur: innledning, hoveddel og avslutning.`
    },
    {
      id: 'spansk-1-14-3-def-1',
      type: 'definition',
      title: 'Presentere seg selv (Presentarse)',
      content: `**Nyttige uttrykk for å presentere seg:**

| Spansk | Norsk |
|--------|-------|
| Me llamo... | Jeg heter... |
| Tengo ... años. | Jeg er ... år gammel. |
| Soy de... | Jeg er fra... |
| Vivo en... | Jeg bor i... |
| Soy estudiante. | Jeg er elev/student. |
| Estudio en el instituto. | Jeg går på videregående. |
| Me gusta... / Me gustan... | Jeg liker... |
| Mi pasatiempo favorito es... | Min favorittfritidsaktivitet er... |
| En mi tiempo libre... | På fritiden... |`
    },
    {
      id: 'spansk-1-14-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Presentasjon av seg selv',
      problem: 'Les denne eksempelpresentasjonen.',
      solution: `¡Hola a todos! Me llamo Emma y tengo dieciséis años. Soy de Noruega y vivo en Oslo. Estudio en el instituto y mis asignaturas favoritas son el español y la música.

En mi tiempo libre me gusta escuchar música, leer libros y jugar al fútbol. También me gusta mucho viajar. El verano pasado visité España con mi familia.

Mi familia es pequeña. Tengo una hermana menor que se llama Sofie. Mi padre se llama Erik y mi madre se llama Anne.

¡Gracias por escuchar!`
    },
    {
      id: 'spansk-1-14-3-def-2',
      type: 'definition',
      title: 'Struktur for en presentasjon',
      content: `**En god presentasjon har tre deler:**

**1. Innledning (La intrøducción):**
- ¡Hola a todos! (Hei alle sammen!)
- Hoy voy a hablar de... (I dag skal jeg snakke om...)
- Mi presentación es sobre... (Presentasjonen min handler om...)

**2. Hoveddel (El desarrollo):**
- Primero... (Først...)
- Luego... / Después... (Så... / Etterpå...)
- También... (Ogsa...)
- Además... (I tillegg...)
- Por ejemplo... (For eksempel...)

**3. Avslutning (La conclusión):**
- En resumen... (Oppsummert...)
- Para terminår... (Til slutt...)
- ¿Tienen preguntas? (Har dere spørsmål?)
- ¡Gracias por escuchar! (Takk for at dere lyttet!)`
    },
    {
      id: 'spansk-1-14-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Presentasjon om en by',
      problem: 'Les denne korte presentasjonen om Barcelona.',
      solution: `¡Hola! Hoy voy a hablar de Barcelona, una ciudad muy bonita en España.

Primero, Barcelona está en el noreste de España, en la comunidad de Cataluña. Es la segunda ciudad más grande de España, después de Madrid. Tiene aproximadamente 1,6 millones de habitantes.

Barcelona es famosa por la arquitectura de Antoni Gaudí, especialmente la Sagrada Familia. También es famosa por su equipo de fútbol, el FC Barcelona, y por sus playas bonitas.

Además, la comida en Barcelona es deliciosa. Los platos típicos son la paella, las tapas y la crema catalana.

Para terminar, Barcelona es una ciudad fantástica para visitar. ¡Gracias por escuchar! ¿Tienen preguntas?`
    },
    {
      id: 'spansk-1-14-3-def-3',
      type: 'definition',
      title: 'Snakke om hobbyer og interesser',
      content: `**Uttrykk for hobbyer og interesser:**

| Spansk | Norsk |
|--------|-------|
| Me gusta + infinitiv | Jeg liker a... |
| Me encanta... | Jeg elsker... |
| Mi hobby es... | Hobbyen min er... |
| Juego al fútbol / baloncesto | Jeg spiller fotball / basketball |
| Toco la guitarra / el piano | Jeg spiller gitar / piano |
| Hago deporte / natación | Jeg driver med sport / svømming |
| Veo películas / series | Jeg ser filmer / serier |
| Escucho música | Jeg hører på musikk |
| Leo libros / cómics | Jeg leser bøker / tegneserier |
| Paso tiempo con mis amigos | Jeg er sammen med vennene mine |`
    },
    {
      id: 'spansk-1-14-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan sier du «I dag skal jeg snakke om...» på spansk?',
        options: [
          { id: 'a', text: 'Hoy voy a hablar de...', isCorrect: true },
          { id: 'b', text: 'Ayer hablé de...', isCorrect: false },
          { id: 'c', text: 'Mañana voy a hablar de...', isCorrect: false },
          { id: 'd', text: 'Hoy quiero escuchar...', isCorrect: false },
        ],
        solution: '«Hoy voy a hablar de...» betyr «I dag skal jeg snakke om...» og er en fin måte å innlede en presentasjon på.',
      },
    },
    {
      id: 'spansk-1-14-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier du på slutten av en presentasjon for å takke publikum?',
        options: [
          { id: 'a', text: '¡Buenos días!', isCorrect: false },
          { id: 'b', text: '¡Hasta luego!', isCorrect: false },
          { id: 'c', text: '¡Gracias por escuchar!', isCorrect: true },
          { id: 'd', text: '¡Mucho gusto!', isCorrect: false },
        ],
        solution: '«¡Gracias por escuchar!» betyr «Takk for at dere lyttet!» og er en vanlig avslutning på en presentasjon.',
      },
    },
    {
      id: 'spansk-1-14-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse setningene til spansk.',
        subTasks: [
          { label: 'a', task: 'Jeg heter Ola og jeg er 16 år.', solution: 'Me llamo Ola y tengo dieciséis años.' },
          { label: 'b', task: 'Jeg er fra Norge og bor i Bergen.', solution: 'Soy de Noruega y vivo en Bergen.' },
          { label: 'c', task: 'På fritiden liker jeg å spille fotball.', solution: 'En mi tiempo libre me gusta jugar al fútbol.' },
          { label: 'd', task: 'Jeg elsker å høre på musikk.', solution: 'Me encanta escuchar música.' },
        ],
        solution: 'a) Me llamo Ola y tengo dieciséis años. b) Soy de Noruega y vivo en Bergen. c) En mi tiempo libre me gusta jugar al fútbol. d) Me encanta escuchar música.',
        hints: ['Bruk «tengo ... años» for alder', 'Husk «me gusta» + infinitiv'],
      },
    },
    {
      id: 'spansk-1-14-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort presentasjon (8-10 setninger) om deg selv på spansk. Inkluder: navn, alder, hvor du er fra, hvor du bor, hva du studerer, hobbyer og familie.',
        subTasks: [
          { label: 'a', task: 'Skriv presentasjonen med innledning, hoveddel og avslutning.', solution: '¡Hola a todos! Me llamo [navn] y tengo [alder] años. Soy de Noruega y vivo en [by]. Estudio en el instituto y mi asignatura favorita es el español. En mi tiempo libre me gusta [hobby 1] y [hobby 2]. También me encanta [hobby 3]. Mi familia es [stor/liten]. Tengo [sosken]. ¡Gracias por escuchar!' },
        ],
        solution: 'Presentasjonen bør inneholde grunnleggende informasjon om deg selv, med en klar struktur.',
        hints: ['Start med ¡Hola a todos!', 'Bruk uttrykkene fra tabellene'],
      },
    },
    {
      id: 'spansk-1-14-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

For å holde en god kort presentasjon på spansk:

1. **Innledning**: Si hei og presenter emnet (¡Hola! Hoy voy a hablar de...)
2. **Hoveddel**: Bruk bindeord som primero, luego, también, además
3. **Avslutning**: Oppsummer og takk publikum (¡Gracias por escuchar!)

Viktige uttrykk: Me llamo, tengo ... años, soy de, vivo en, me gusta, en mi tiempo libre.`
    },
    {
      id: 'spansk-1-14-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken rekkefølge er riktig for en presentasjon?',
        options: [
          { id: 'a', text: 'Avslutning - Hoveddel - Innledning', isCorrect: false },
          { id: 'b', text: 'Innledning - Avslutning - Hoveddel', isCorrect: false },
          { id: 'c', text: 'Innledning - Hoveddel - Avslutning', isCorrect: true },
          { id: 'd', text: 'Hoveddel - Innledning - Avslutning', isCorrect: false },
        ],
        solution: 'En presentasjon følger alltid strukturen: Innledning (la intrøducción), Hoveddel (el desarrollo), Avslutning (la conclusión).',
      },
    },
    {
      id: 'spansk-1-14-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en presentasjon på spansk (10-12 setninger) om en spanskspråklig by eller et land du er interessert i. Bruk strukturen med innledning, hoveddel og avslutning.',
        subTasks: [
          { label: 'a', task: 'Velg by/land og skriv presentasjonen. Inkluder fakta om beliggenhet, innbyggertall, kjente steder og mat.', solution: '¡Hola a todos! Hoy voy a hablar de Madrid, la capital de España. Madrid está en el centro de España y tiene más de tres millones de habitantes. Es una ciudad muy grande y animada. Primero, Madrid es famosa por sus museos. El Museo del Prado es uno de los museos más importantes del mundo. También tiene el parque del Retiro, un parque muy bonito en el centro. Además, Madrid es conocida por su vida nocturna y sus bares de tapas. La comida típica es el cocido madrileño. Para terminar, Madrid es una ciudad increíble con mucha historia y cultura. ¡Gracias por escuchar! ¿Tienen preguntas?' },
        ],
        solution: 'En god presentasjon om en by inkluderer beliggenhet, innbyggertall, severdigheter, mat og en personlig mening.',
        hints: ['Bruk bindeord: primero, también, además, para terminar', 'Husk å avslutte med takk og spørsmål'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la presentación', definition: 'presentasjon' },
    { term: 'la intrøducción', definition: 'innledning' },
    { term: 'el desarrollo', definition: 'hoveddel' },
    { term: 'la conclusión', definition: 'avslutning' },
    { term: 'el pasatiempo', definition: 'fritidsaktivitet, hobby' },
    { term: 'la asignatura', definition: 'skolefag' },
  ],
};

export const CHAPTER_SPANSK_1_14_4: TextbookChapter = {
  id: 'spansk-1-14-4',
  courseId: 'spansk-1',
  chapterNumber: '14.4',
  title: 'Juego de roles',
  subtitle: 'Rollespill',
  description: 'Øv på spansk gjennom rollespill i ulike situasjoner som restaurant, butikk og reise.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke spansk i ulike rollespillsituasjoner og tilpasse språket etter kontekst'],
  content: [
    {
      id: 'spansk-1-14-4-intro',
      type: 'text',
      content: `## Juego de roles - Rollespill

Rollespill er en av de beste måtene å øve på muntlig spansk. Når du later som du er i en ekte situasjon, øver du både ordforråd, grammatikk og uttale på en naturlig måte.

I dette kapittelet får du ferdige rollespillsituasjoner du kan øve på med en partner.`
    },
    {
      id: 'spansk-1-14-4-def-1',
      type: 'definition',
      title: 'På hotellet (En el hotel)',
      content: `**Nyttige uttrykk på hotellet:**

| Spansk | Norsk |
|--------|-------|
| Tengo una reserva a nombre de... | Jeg har en reservasjon i navnet... |
| Quiero reservar una habitación. | Jeg vil bestille et rom. |
| ¿Para cuántas noches? | For hvor mange netter? |
| Una habitación individual / doble | Et enkeltrom / dobbeltrom |
| ¿El desayuno está incluido? | Er frokosten inkludert? |
| ¿A qué hora es el desayuno? | Når er frokosten? |
| ¿Tiene wifi? | Har dere wifi? |
| ¿Dónde está el ascensor? | Hvor er heisen? |
| La llave / la tarjeta | Nokkelen / kortet |
| Quiero hacer el check-out. | Jeg vil sjekke ut. |`
    },
    {
      id: 'spansk-1-14-4-ex-1',
      type: 'example',
      title: 'Eksempel 1: På hotellet',
      problem: 'Les denne dialogen på et hotell.',
      solution: `**Recepcionista:** ¡Buenas tardes! ¿En qué puedo ayudarle?
**Huésped:** Buenas tardes. Tengo una reserva a nombre de Olsen.
**Recepcionista:** Un momento, por favor... Sí, una habitación doble para tres noches.
**Huésped:** Exacto. ¿El desayuno está incluido?
**Recepcionista:** Sí, el desayuno es de siete a diez en el restaurante.
**Huésped:** Perfecto. ¿Tiene wifi?
**Recepcionista:** Sí, la contraseña está en la tarjeta de la habitación. Su habitación es la 305, en la tercera planta. Aquí tiene la llave.
**Huésped:** Gracias. ¿Dónde está el ascensor?
**Recepcionista:** Al fondo del pasillo, a la derecha.
**Huésped:** Muchas gracias.
**Recepcionista:** De nada. ¡Que disfrute su estancia!`
    },
    {
      id: 'spansk-1-14-4-def-2',
      type: 'definition',
      title: 'På reise (De viaje)',
      content: `**Nyttige uttrykk for reise:**

| Spansk | Norsk |
|--------|-------|
| ¿Dónde está la estación de tren? | Hvor er togstasjonen? |
| Un billete de ida / de ida y vuelta | En enveisbillett / tur-returbillett |
| ¿A qué hora sale el tren? | Når går toget? |
| ¿De qué andén sale? | Fra hvilken plattform går det? |
| ¿Cuánto tarda? | Hvor lang tid tar det? |
| ¿Hay retraso? | Er det forsinkelse? |
| Quiero alquilar un coche. | Jeg vil leie en bil. |
| ¿Dónde está la parada de autobús? | Hvor er bussholdeplassen? |
| El aeropuerto | Flyplassen |
| La terminal | Terminalen |`
    },
    {
      id: 'spansk-1-14-4-ex-2',
      type: 'example',
      title: 'Eksempel 2: Kjope togbillett',
      problem: 'Les denne dialogen på togstasjonen.',
      solution: `**Viajero:** ¡Buenos días! Quiero un billete a Barcelona, por favor.
**Taquillero:** ¿De ida o de ida y vuelta?
**Viajero:** De ida y vuelta, por favor.
**Taquillero:** ¿Para cuándo?
**Viajero:** Para hoy. ¿A qué hora sale el próximo tren?
**Taquillero:** El próximo tren sale a las once y cuarto. Llega a Barcelona a las dos y media.
**Viajero:** Perfecto. ¿Cuánto cuesta?
**Taquillero:** Son cuarenta y cinco euros.
**Viajero:** Aquí tiene. ¿De qué andén sale?
**Taquillero:** Del andén número tres.
**Viajero:** Gracias. ¡Hasta luego!`
    },
    {
      id: 'spansk-1-14-4-def-3',
      type: 'definition',
      title: 'Hos legen (En el médico)',
      content: `**Nyttige uttrykk hos legen:**

| Spansk | Norsk |
|--------|-------|
| No me siento bien. | Jeg føler meg ikke bra. |
| Me duele la cabeza / el estómago. | Jeg har vondt i hodet / magen. |
| Tengo fiebre. | Jeg har feber. |
| Estoy resfriado/a. | Jeg er forkjølet. |
| Tengo tos. | Jeg har hoste. |
| Me duele la garganta. | Jeg har vondt i halsen. |
| ¿Desde cuándo tiene estos síntomas? | Hvor lenge har du hatt disse symptomene? |
| Tiene que descansar. | Du må hvile. |
| Le receto... | Jeg skriver ut resept på... |
| Tome este medicamento. | Ta denne medisinen. |`
    },
    {
      id: 'spansk-1-14-4-ex-3',
      type: 'example',
      title: 'Eksempel 3: Hos legen',
      problem: 'Les denne dialogen hos legen.',
      solution: `**Médico:** ¡Buenos días! ¿Qué le pasa?
**Paciente:** Buenos días, doctor. No me siento bien. Me duele mucho la cabeza y tengo fiebre.
**Médico:** ¿Desde cuándo tiene estos síntomas?
**Paciente:** Desde ayer por la mañana. También me duele la garganta y tengo tos.
**Médico:** Vamos a ver... Tiene una infección. Tiene que descansar en casa y beber mucha agua. Le receto un medicamento.
**Paciente:** ¿Cuántos días tengo que descansar?
**Médico:** Por lo menos tres días. Tome el medicamento tres veces al día.
**Paciente:** Muchas gracias, doctor.
**Médico:** De nada. ¡Que se mejore pronto!`
    },
    {
      id: 'spansk-1-14-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «un billete de ida y vuelta»?',
        options: [
          { id: 'a', text: 'En enveisbillett', isCorrect: false },
          { id: 'b', text: 'En tur-returbillett', isCorrect: true },
          { id: 'c', text: 'Et boardingkort', isCorrect: false },
          { id: 'd', text: 'En bussbillett', isCorrect: false },
        ],
        solution: '«Un billete de ida y vuelta» betyr en tur-returbillett. «De ida» betyr enveis, og «de ida y vuelta» betyr tur-retur (bokstavelig: av gang og retur).',
      },
    },
    {
      id: 'spansk-1-14-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan sier du «Jeg har vondt i hodet» på spansk?',
        options: [
          { id: 'a', text: 'Tengo cabeza.', isCorrect: false },
          { id: 'b', text: 'Mi cabeza es mål.', isCorrect: false },
          { id: 'c', text: 'Me duele la cabeza.', isCorrect: true },
          { id: 'd', text: 'La cabeza no funciona.', isCorrect: false },
        ],
        solution: '«Me duele la cabeza» betyr «Jeg har vondt i hodet». Verbet «doler» (a gjøre vondt) fungerer som «gustar» - du sier me duele + kroppsdel.',
      },
    },
    {
      id: 'spansk-1-14-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog (6-8 replikker) for en av disse situasjonene.',
        subTasks: [
          { label: 'a', task: 'På hotellet: Du sjekker inn og spør om frokost og wifi.', solution: '— Recepcionista: ¡Buenas tardes! ¿En qué puedo ayudarle?\n— Huésped: Tengo una reserva a nombre de Hansen.\n— Recepcionista: Sí, habitación doble para dos noches.\n— Huésped: ¿El desayuno está incluido?\n— Recepcionista: Sí, de siete a diez.\n— Huésped: ¿Tiene wifi?\n— Recepcionista: Sí, la contraseña es «hotel2024». Habitación 210.\n— Huésped: Muchas gracias.' },
          { label: 'b', task: 'På togstasjonen: Du kjøper billett til Sevilla.', solution: '— Viajero: Buenos días. Quiero un billete a Sevilla.\n— Taquillero: ¿De ida o de ida y vuelta?\n— Viajero: De ida, por favor. ¿A qué hora sale el próximo tren?\n— Taquillero: A las catorce y treinta.\n— Viajero: ¿Cuánto cuesta?\n— Taquillero: Treinta y cinco euros.\n— Viajero: Aquí tiene. Gracias.' },
        ],
        solution: 'Bruk uttrykkene fra tabellene for å lage naturlige dialoger.',
        hints: ['Bruk høflighetsfraser', 'Inkluder spørsmål og svar'],
      },
    },
    {
      id: 'spansk-1-14-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en dialog hos legen (6-8 replikker). Du føler deg ikke bra og forklarer symptomene dine.',
        subTasks: [
          { label: 'a', task: 'Bruk minst tre symptomuttrykk fra tabellen.', solution: '— Médico: Buenos días. ¿Qué le pasa?\n— Paciente: No me siento bien. Me duele el estómago y tengo fiebre.\n— Médico: ¿Desde cuándo?\n— Paciente: Desde anoche. También estoy resfriado.\n— Médico: Tiene que descansar y beber mucha agua. Le receto este medicamento.\n— Paciente: ¿Cuántas veces al día?\n— Médico: Dos veces al día, después de comer.\n— Paciente: Gracias, doctor.' },
        ],
        solution: 'En god legedialg inneholder symptomer, spørsmål om varighet, og legens rad.',
        hints: ['Start med «No me siento bien»', 'Bruk «me duele» for smerter'],
      },
    },
    {
      id: 'spansk-1-14-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Rollespill hjelper deg å bruke spansk i realistiske situasjoner. Vi har sett på:

- **På hotellet**: Sjekke inn, spørre om fasiliteter
- **På reise**: Kjope billetter, spørre om avgangstider
- **Hos legen**: Beskrive symptomer, forstå legens rad

Tips for rollespill: Bruk høflighetsfraser (por favor, gracias), still spørsmål, og ikke vær redd for å gjøre feil!`
    },
    {
      id: 'spansk-1-14-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «¡Que se mejore pronto!»?',
        options: [
          { id: 'a', text: 'Ha det bra!', isCorrect: false },
          { id: 'b', text: 'God bedring!', isCorrect: true },
          { id: 'c', text: 'Lykke til!', isCorrect: false },
          { id: 'd', text: 'Velkommen tilbake!', isCorrect: false },
        ],
        solution: '«¡Que se mejore pronto!» betyr «God bedring!» (bokstavelig: «Matte du bli bedre snart!»). Det er et vanlig uttrykk når noen er syk.',
      },
    },
    {
      id: 'spansk-1-14-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-14-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en av situasjonene under og skriv en komplett dialog (10-12 replikker). Bruk så mange uttrykk fra kapittelet som mulig.',
        subTasks: [
          { label: 'a', task: 'Du er på ferie i Madrid. Du tar taxi fra hotellet til museet Prado, men du har også vondt i hodet og spør taxisjåføren om et apotek.', solution: '— Pasajero: ¡Hola! ¿Está libre?\n— Taxista: Sí, suba. ¿Adónde va?\n— Pasajero: Al Museo del Prado, por favor.\n— Taxista: Muy bien. ¿Es su primera vez en Madrid?\n— Pasajero: Sí, soy de Noruega. ¡Me encanta Madrid!\n— Taxista: ¡Bienvenido! El Prado es fantástico.\n— Pasajero: Perdone, ¿hay una farmacia cerca del museo? Me duele un poco la cabeza.\n— Taxista: Sí, hay una farmacia enfrente del museo, al lado de la cafetería.\n— Pasajero: Perfecto, gracias. ¿Cuánto tarda en llegar?\n— Taxista: Unos diez minutos. Ya llegamos. Son ocho euros.\n— Pasajero: Aquí tiene. Muchas gracias.\n— Taxista: ¡Gracias a usted! ¡Que se mejore!' },
        ],
        solution: 'En god dialog kombinerer uttrykk fra ulike situasjoner og viser at du kan bruke språket fleksibelt.',
        hints: ['Kombiner uttrykk fra ulike situasjoner', 'Vær kreativ med historien'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el juego de roles', definition: 'rollespill' },
    { term: 'la habitación', definition: 'rom (på hotell)' },
    { term: 'el billete', definition: 'billett' },
    { term: 'el andén', definition: 'plattform (togstasjon)' },
    { term: 'el médico', definition: 'lege' },
    { term: 'el síntoma', definition: 'symptom' },
    { term: 'la farmacia', definition: 'apotek' },
  ],
};

// ============================================================================
// KAPITTEL 15: COMUNICACIÓN ESCRITA
// ============================================================================

export const CHAPTER_SPANSK_1_15_1: TextbookChapter = {
  id: 'spansk-1-15-1',
  courseId: 'spansk-1',
  chapterNumber: '15.1',
  title: 'Correos electrónicos y cartas',
  subtitle: 'E-poster og brev',
  description: 'Lær å skrive e-poster og brev på spansk, både formelle og uformelle.',
  estimatedMinutes: 50,
  competenceGoals: ['skrive enkle e-poster og brev på spansk tilpasset mottaker og formål'],
  content: [
    {
      id: 'spansk-1-15-1-intro',
      type: 'text',
      content: `## Correos electrónicos y cartas - E-poster og brev

Å kunne skrive e-poster og brev på spansk er en viktig ferdighet. Enten du skriver til en venn, en lærer eller et hotell, må du vite hvordan du tilpasser språket til situasjonen.

I dette kapittelet lærer du forskjellen mellom formelle og uformelle e-poster og brev, og hvilke uttrykk du bruker i hver type.`
    },
    {
      id: 'spansk-1-15-1-def-1',
      type: 'definition',
      title: 'Uformelle e-poster (Correos informåles)',
      content: `**Struktur for en uformell e-post:**

**Hilsen:**
- ¡Hola, María! (Hei, María!)
- Querido/a [navn] (Kjaere [navn])
- ¡Hola! ¿Qué tal? (Hei! Hvordan går det?)

**Innledning:**
- ¿Cómo estás? (Hvordan har du det?)
- Espero que estés bien. (Jeg haper du har det bra.)
- Gracias por tu correo. (Takk for e-posten din.)

**Avslutning:**
- Bueno, te escribo pronto. (Vel, jeg skriver snart.)
- Escríbeme pronto. (Skriv til meg snart.)
- Un abrazo / Besos (En klem / Kyss)
- ¡Hasta pronto! (Vi snakkes snart!)`
    },
    {
      id: 'spansk-1-15-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Uformell e-post til en venn',
      problem: 'Les denne uformelle e-posten.',
      solution: `**Asunto:** ¡Hola desde Noruega!

¡Hola, Carmen!

¿Cómo estás? Espero que estés bien. Te escribo porque quiero contarte algo muy emocionante.

El mes que viene voy a visitar España con mi familia. Vamos a estar en Madrid tres días y después en Barcelona dos días. ¿Puedes recomendarme lugares interesantes en Madrid?

Me gustaría mucho verte durante mi viaje. ¿Tienes tiempo para tomar un café?

Escríbeme pronto.

Un abrazo,
Emma`
    },
    {
      id: 'spansk-1-15-1-def-2',
      type: 'definition',
      title: 'Formelle e-poster (Correos formåles)',
      content: `**Struktur for en formell e-post:**

**Hilsen:**
- Estimado/a señor/a [etternavn]: (Ærede herr/fru [etternavn]:)
- Muy señor/a mío/a: (Ærede herr/fru:)
- A quien corresponda: (Til rette vedkommende:)

**Innledning:**
- Le escribo para... (Jeg skriver for a...)
- Me dirijo a usted para... (Jeg henvender meg til Dem for a...)
- En relación con... (I forbindelse med...)

**Avslutning:**
- Quedo a la espera de su respuesta. (Jeg ser frem til Deres svar.)
- Le agradezco de antemano. (Takk på forhånd.)
- Atentamente, (Med vennlig hilsen,)
- Cordialmente, (Hjertelig hilsen,)
- Un cordial saludo, (Vennlig hilsen,)`
    },
    {
      id: 'spansk-1-15-1-ex-2',
      type: 'example',
      title: 'Eksempel 2: Formell e-post til et hotell',
      problem: 'Les denne formelle e-posten.',
      solution: `**Asunto:** Reserva de habitación - agosto

Estimado/a señor/a:

Le escribo para reservar una habitación doble en su hotel del 15 al 20 de agosto.

Somos dos adultos y necesitamos una habitación con baño privado. ¿El desayuno está incluido en el precio? ¿Cuánto cuesta por noche?

También me gustaría saber si tienen aparcamiento para coches.

Quedo a la espera de su respuesta.

Atentamente,
Ola Nordmann`
    },
    {
      id: 'spansk-1-15-1-def-3',
      type: 'definition',
      title: 'Forskjellen mellom tú og usted i e-poster',
      content: `Når du skriver e-poster på spansk, er det viktig å velge riktig tiltaleform:

**Uformelt (tú) - brukes til:**
- Venner og jevnaldrende
- Familiemedlemmer
- Unge mennesker seg imellom

**Formelt (usted) - brukes til:**
- Ukjente voksne
- Bedrifter og organisasjoner
- Lærere og overordnede
- Offisielle henvendelser

| Uformelt | Formelt |
|----------|---------|
| ¿Cómo estás? | ¿Cómo está usted? |
| Te escribo... | Le escribo... |
| Gracias por tu correo | Gracias por su correo |
| Escríbeme | Escríbame |`
    },
    {
      id: 'spansk-1-15-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken hilsen bruker du i en formell e-post?',
        options: [
          { id: 'a', text: '¡Hola, María!', isCorrect: false },
          { id: 'b', text: 'Estimado señor García:', isCorrect: true },
          { id: 'c', text: '¿Qué tal?', isCorrect: false },
          { id: 'd', text: 'Querido amigo,', isCorrect: false },
        ],
        solution: '«Estimado señor García:» er en formell hilsen. «Hola» og «Querido amigo» er uformelle, og «¿Qué tal?» er en hverdagslig hilsen.',
      },
    },
    {
      id: 'spansk-1-15-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «Quedo a la espera de su respuesta»?',
        options: [
          { id: 'a', text: 'Jeg skriver til deg snart.', isCorrect: false },
          { id: 'b', text: 'Takk for svaret.', isCorrect: false },
          { id: 'c', text: 'Jeg ser frem til Deres svar.', isCorrect: true },
          { id: 'd', text: 'Vennlig hilsen.', isCorrect: false },
        ],
        solution: '«Quedo a la espera de su respuesta» betyr «Jeg ser frem til Deres svar» og brukes i slutten av formelle e-poster for å vise at du forventer svar.',
      },
    },
    {
      id: 'spansk-1-15-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse e-postuttrykkene til spansk.',
        subTasks: [
          { label: 'a', task: 'Kjaere María (uformelt)', solution: 'Querida María' },
          { label: 'b', task: 'Med vennlig hilsen', solution: 'Atentamente' },
          { label: 'c', task: 'Takk for e-posten din (uformelt)', solution: 'Gracias por tu correo' },
          { label: 'd', task: 'Jeg skriver for a... (formelt)', solution: 'Le escribo para...' },
        ],
        solution: 'a) Querida María, b) Atentamente, c) Gracias por tu correo, d) Le escribo para...',
        hints: ['Husk forskjellen mellom tu (uformelt) og usted (formelt)'],
      },
    },
    {
      id: 'spansk-1-15-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en uformell e-post (6-8 setninger) til en spansk venn der du inviterer ham/henne til Norge.',
        subTasks: [
          { label: 'a', task: 'Inkluder hilsen, fortell om planene, spør om datoer og avslutt passende.', solution: '¡Hola, Pablo!\n\n¿Cómo estás? Espero que estés bien. Te escribo porque quiero invitarte a Noruega este verano.\n\nPuedes quedarte en mi casa. Podemos visitar los fiordos, ir a la montaña y probar comida noruega. ¿Tienes tiempo en julio o agosto?\n\nEscríbeme pronto y dime qué fechas te vienen bien.\n\n¡Un abrazo!\nOla' },
        ],
        solution: 'En uformell e-post til en venn bruker du tú-form, uformell hilsen og avslutning.',
        hints: ['Start med ¡Hola!', 'Avslutt med Un abrazo'],
      },
    },
    {
      id: 'spansk-1-15-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Når du skriver e-poster og brev på spansk:

- **Uformelle e-poster**: Bruk ¡Hola!, tú-form, avslutt med Un abrazo / Besos
- **Formelle e-poster**: Bruk Estimado/a, usted-form, avslutt med Atentamente
- **Velg riktig tiltaleform**: tú for venner, usted for formelle henvendelser
- **Innledning**: Forklar hvorfor du skriver (Te escribo porque... / Le escribo para...)
- **Avslutning**: Be om svar (Escríbeme pronto / Quedo a la espera de su respuesta)`
    },
    {
      id: 'spansk-1-15-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du skriver en e-post til en lærer. Hvilken avslutning passer best?',
        options: [
          { id: 'a', text: 'Besos, Emma', isCorrect: false },
          { id: 'b', text: '¡Hasta luego!', isCorrect: false },
          { id: 'c', text: 'Un cordial saludo, Emma Olsen', isCorrect: true },
          { id: 'd', text: '¡Chao!', isCorrect: false },
        ],
        solution: '«Un cordial saludo» er en passende formell avslutning for en e-post til en lærer. «Besos» og «Chao» er for uformelle, og «Hasta luego» brukes muntlig.',
      },
    },
    {
      id: 'spansk-1-15-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en formell e-post (8-10 setninger) til en spansk skole der du spør om muligheten for utveksling. Inkluder informasjon om deg selv, skolen din og hva du ønsker.',
        subTasks: [
          { label: 'a', task: 'Bruk formell struktur med hilsen, innledning, hoveddel, avslutning og signatur.', solution: 'Estimado/a señor/a:\n\nMe dirijo a usted para obtener información sobre las posibilidades de intercambio en su instituto.\n\nMe llamo Emma Olsen y soy estudiante en un instituto en Noruega. Tengo dieciséis años y estudio español desde hace dos años. Me gustaría hacer un intercambio de dos semanas en su escuela para mejorar mi español.\n\n¿Sería posible visitar su instituto en el mes de abril? ¿Tienen familias de acogida para los estudiantes de intercambio?\n\nLe agradezco de antemano su atención y quedo a la espera de su respuesta.\n\nAtentamente,\nEmma Olsen\nInstituto de Oslo, Noruega' },
        ],
        solution: 'En formell e-post til en skole bruker du usted-form, formell hilsen og presenterer deg tydelig.',
        hints: ['Bruk Estimado/a señor/a som hilsen', 'Avslutt med Atentamente og fullt navn'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el correo electrónico', definition: 'e-post' },
    { term: 'la carta', definition: 'brev' },
    { term: 'el asunto', definition: 'emne (i e-post)' },
    { term: 'estimado/a', definition: 'ærverdig, aerede' },
    { term: 'atentamente', definition: 'med vennlig hilsen' },
    { term: 'el abrazo', definition: 'klem' },
  ],
};

export const CHAPTER_SPANSK_1_15_2: TextbookChapter = {
  id: 'spansk-1-15-2',
  courseId: 'spansk-1',
  chapterNumber: '15.2',
  title: 'Postales y mensajes',
  subtitle: 'Postkort og meldinger',
  description: 'Lær å skrive postkort fra ferie og korte meldinger på spansk.',
  estimatedMinutes: 40,
  competenceGoals: ['skrive korte meldinger og postkort på spansk'],
  content: [
    {
      id: 'spansk-1-15-2-intro',
      type: 'text',
      content: `## Postales y mensajes - Postkort og meldinger

Postkort og korte meldinger er en fin måte å øve på skriftlig spansk. De er korte, personlige og bruker hverdagsspråk.

I dette kapittelet lærer du å skrive postkort fra ferie og korte meldinger (SMS, chat) på spansk.`
    },
    {
      id: 'spansk-1-15-2-def-1',
      type: 'definition',
      title: 'Postkort fra ferie (Postales de vacaciones)',
      content: `**Struktur for et postkort:**

1. **Hilsen**: ¡Hola! / Querido/a...
2. **Hvor du er**: Estoy en... / Estamos en...
3. **Hva du gjør**: Hoy hemos visitado... / Ayer fuimos a...
4. **Vaeret**: Hace sol / Hace calor / Llueve
5. **Mening**: Me encanta... / Es muy bonito
6. **Avslutning**: Un abrazo / Besos / ¡Hasta pronto!

**Nyttige uttrykk:**

| Spansk | Norsk |
|--------|-------|
| ¡Saludos desde [sted]! | Hilsen fra [sted]! |
| Lo estamos pasando muy bien. | Vi har det veldig fint. |
| El hotel es muy bonito. | Hotellet er veldig fint. |
| La playa es fantástica. | Stranden er fantastisk. |
| La comida es deliciosa. | Maten er deilig. |
| ¡Ojalá estuvieras aquí! | Skulle ønske du var her! |`
    },
    {
      id: 'spansk-1-15-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Postkort fra Barcelona',
      problem: 'Les dette postkortet.',
      solution: `¡Hola, María!

¡Saludos desde Barcelona! Lo estamos pasando genial. Ayer visitamos la Sagrada Familia — ¡es increíble! Hoy vamos a ir a la playa porque hace mucho sol y calor.

El hotel está en el centro y es muy cómodo. La comida aquí es deliciosa, especialmente las tapas y la paella.

Mañana vamos al Camp Nou para ver un partido de fútbol. ¡Estoy muy emocionada!

¡Ojalá estuvieras aquí!

Un abrazo,
Emma`
    },
    {
      id: 'spansk-1-15-2-def-2',
      type: 'definition',
      title: 'Korte meldinger (Mensajes cortos)',
      content: `**Vanlige forkortelser i spanske meldinger:**

| Forkortelse | Fullt ord | Norsk |
|-------------|-----------|-------|
| q | que | at/som |
| tb | también | også |
| xq | porque | fordi |
| xfa | por favor | vær så snill |
| tkm | te quiero mucho | jeg er glad i deg |
| bss | besos | kyss |
| genial | genial | supert |
| vale | vale | ok |
| guay | guay | kult |

**Vanlige meldingsuttrykk:**

| Spansk | Norsk |
|--------|-------|
| ¿Quedamos? | Skal vi møtes? |
| ¿A qué hora? | Nar? (Klokka?) |
| ¡Nos vemos! | Vi sees! |
| ¿Dónde quedamos? | Hvor møter vi? |
| Llego tarde. | Jeg blir sein. |
| Lo siento, no puedo. | Beklager, jeg kan ikke. |`
    },
    {
      id: 'spansk-1-15-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: Chatsamtale',
      problem: 'Les denne chatsamtalen mellom to venner.',
      solution: `**Pablo:** ¡Hola! ¿Quedamos esta tarde?
**Emma:** ¡Hola! Sí, genial. ¿A qué hora?
**Pablo:** ¿A las cinco?
**Emma:** Vale. ¿Dónde quedamos?
**Pablo:** En la cafetería del centro, al lado del cine.
**Emma:** Perfecto. ¿Viene Carlos tb?
**Pablo:** Sí, le he dicho q venga a las cinco.
**Emma:** Guay. ¡Nos vemos!
**Pablo:** ¡Hasta luego!`
    },
    {
      id: 'spansk-1-15-2-def-3',
      type: 'definition',
      title: 'Vaeret (El tiempo)',
      content: `For å beskrive været på postkort og meldinger:

| Spansk | Norsk |
|--------|-------|
| Hace sol. | Det er sol. |
| Hace calor. | Det er varmt. |
| Hace frío. | Det er kaldt. |
| Hace buen tiempo. | Det er fint vaer. |
| Hace mål tiempo. | Det er dårlig vaer. |
| Hace viento. | Det blåser. |
| Llueve. / Está lloviendo. | Det regner. |
| Nieva. / Está nevando. | Det snør. |
| Está nublado. | Det er overskyet. |`
    },
    {
      id: 'spansk-1-15-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «Lo estamos pasando genial»?',
        options: [
          { id: 'a', text: 'Vi går forbi.', isCorrect: false },
          { id: 'b', text: 'Vi har det supert.', isCorrect: true },
          { id: 'c', text: 'Vi går na.', isCorrect: false },
          { id: 'd', text: 'Vi passerer genialt.', isCorrect: false },
        ],
        solution: '«Lo estamos pasando genial» betyr «Vi har det supert» og brukes ofte på postkort for å fortelle at ferien er fin. «Pasarlo bien/genial» er et uttrykk for å ha det bra.',
      },
    },
    {
      id: 'spansk-1-15-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr forkortelsen «xq» i en spansk melding?',
        options: [
          { id: 'a', text: 'por qué (hvorfor)', isCorrect: false },
          { id: 'b', text: 'porque (fordi)', isCorrect: true },
          { id: 'c', text: 'por favor (vær så snill)', isCorrect: false },
          { id: 'd', text: 'pequeño (liten)', isCorrect: false },
        ],
        solution: '«xq» er en vanlig forkortelse for «porque» (fordi) i spanske meldinger. «x» brukes ofte for «por» (for) i chatspråk.',
      },
    },
    {
      id: 'spansk-1-15-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse vaeruttrykkene til spansk.',
        subTasks: [
          { label: 'a', task: 'Det er sol.', solution: 'Hace sol.' },
          { label: 'b', task: 'Det er kaldt.', solution: 'Hace frío.' },
          { label: 'c', task: 'Det regner.', solution: 'Llueve. / Está lloviendo.' },
          { label: 'd', task: 'Det er fint vaer.', solution: 'Hace buen tiempo.' },
        ],
        solution: 'a) Hace sol. b) Hace frío. c) Llueve. d) Hace buen tiempo.',
        hints: ['Husk «hacer» for vaer: hace sol, hace calor, hace frío'],
      },
    },
    {
      id: 'spansk-1-15-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et postkort (5-7 setninger) fra en ferie i Spania. Fortell om stedet, været, aktiviteter og maten.',
        subTasks: [
          { label: 'a', task: 'Bruk uttrykkene fra kapittelet.', solution: '¡Hola, Sofie!\n\n¡Saludos desde Málaga! Lo estamos pasando muy bien. Hace mucho sol y calor. Ayer fuimos a la playa y el agua estaba perfecta. Hoy hemos visitado el centro histórico y la catedral. La comida es deliciosa — me encanta el gazpacho.\n\n¡Ojalá estuvieras aquí!\nBesos, Emma' },
        ],
        solution: 'Et godt postkort inneholder sted, vaer, aktiviteter og en personlig kommentar.',
        hints: ['Start med ¡Saludos desde...!', 'Beskriv været med hace...'],
      },
    },
    {
      id: 'spansk-1-15-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Postkort**: Kort og personlig. Hilsen, sted, vaer, aktiviteter, avslutning.
- **Meldinger**: Bruk vanlige forkortelser (q, tb, xq, xfa, vale, guay).
- **Vaeret**: Hace sol / calor / frío / viento / buen tiempo / mål tiempo.
- **Nyttige uttrykk**: ¡Saludos desde...!, Lo estamos pasando bien, ¡Ojalá estuvieras aquí!`
    },
    {
      id: 'spansk-1-15-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Du vil avtale a mote en venn. Hva sier du?',
        options: [
          { id: 'a', text: '¡Saludos desde aquí!', isCorrect: false },
          { id: 'b', text: '¿Quedamos esta tarde?', isCorrect: true },
          { id: 'c', text: 'Lo estamos pasando bien.', isCorrect: false },
          { id: 'd', text: 'Hace buen tiempo.', isCorrect: false },
        ],
        solution: '«¿Quedamos esta tarde?» betyr «Skal vi møtes i ettermiddag?» og er den vanligste måten å foreslå å møte noen på spansk.',
      },
    },
    {
      id: 'spansk-1-15-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en chatsamtale (8-10 meldinger) der du planlegger en helgeaktivitet med en venn. Bruk meldingsspråk med forkortelser.',
        subTasks: [
          { label: 'a', task: 'Inkluder: forslag, tidspunkt, sted, bekreftelse og eventuelle endringer.', solution: '— Tú: ¡Hola! ¿Quedamos el sábado? Quiero ir al cine.\n— Amigo: ¡Genial! ¿A qué hora?\n— Tú: ¿A las cuatro? Hay una peli nueva muy guay.\n— Amigo: Vale, perfecto. ¿Dónde quedamos?\n— Tú: En la entrada del cine a las cuatro menos diez.\n— Amigo: Ok. ¿Viene Laura tb?\n— Tú: Sí, le he escrito. Dice q sí.\n— Amigo: Guay. Después podemos ir a tomar algo, ¿no?\n— Tú: Sí, buena idea. ¡Nos vemos el sábado!\n— Amigo: ¡Hasta el sábado! Bss' },
        ],
        solution: 'En naturlig chatsamtale bruker korte setninger, forkortelser og uformelt språk.',
        hints: ['Bruk forkortelser som q, tb, xq', 'Hold meldingene korte og naturlige'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la postal', definition: 'postkort' },
    { term: 'el mensaje', definition: 'melding' },
    { term: 'el tiempo', definition: 'været / tid' },
    { term: 'las vacaciones', definition: 'ferie' },
    { term: 'quedar', definition: 'a avtale å møtes' },
    { term: 'genial', definition: 'supert, kjempebra' },
  ],
};

export const CHAPTER_SPANSK_1_15_3: TextbookChapter = {
  id: 'spansk-1-15-3',
  courseId: 'spansk-1',
  chapterNumber: '15.3',
  title: 'Escribir textos cortos',
  subtitle: 'Skrive korte tekster',
  description: 'Lær å skrive korte tekster på spansk, som beskrivelser, dagboknotater og korte fortellinger.',
  estimatedMinutes: 50,
  competenceGoals: ['skrive korte, sammenhengende tekster på spansk om kjente emner'],
  content: [
    {
      id: 'spansk-1-15-3-intro',
      type: 'text',
      content: `## Escribir textos cortos - Skrive korte tekster

Å skrive korte tekster på spansk hjelper deg å øve på ordforråd, grammatikk og setningsbygging. I dette kapittelet lærer du å skrive ulike typer korte tekster: beskrivelser, dagboknotater og korte fortellinger.

Det viktigste er å bruke enkle setninger, variere ordforrådet og bygge opp teksten med en logisk struktur.`
    },
    {
      id: 'spansk-1-15-3-def-1',
      type: 'definition',
      title: 'Beskrivelser (Descripciones)',
      content: `**A beskrive en person:**

| Spansk | Norsk |
|--------|-------|
| Es alto/a - bajo/a | Han/hun er høy - lav |
| Tiene el pelo rubio / moreno / pelirrojo | Han/hun har blondt / morkt / rødt har |
| Tiene los ojos azules / verdes / marrones | Han/hun har blå / grønne / brune øyne |
| Es simpático/a / amable / divertido/a | Han/hun er hyggelig / snill / morsom |
| Lleva gafas / vaqueros / camiseta | Han/hun bruker briller / jeans / t-skjorte |

**A beskrive et sted:**

| Spansk | Norsk |
|--------|-------|
| Es grande / pequeño/a | Det er stort / lite |
| Está en el centro / en las afueras | Det ligger i sentrum / i utkanten |
| Hay muchos / pocos... | Det er mange / fa... |
| Es un lugår tranquilo / animado | Det er et rolig / livlig sted |
| Lo mejor es... | Det beste er... |`
    },
    {
      id: 'spansk-1-15-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Beskrivelse av en venn',
      problem: 'Les denne beskrivelsen.',
      solution: `Mi mejor amiga se llama Sofie. Tiene dieciséis años y es de Bergen, en Noruega. Es alta y delgada, con el pelo rubio y largo. Tiene los ojos azules.

Sofie es muy simpática y divertida. Siempre me hace reír. Le gusta mucho la música y toca la guitarra muy bien. También le encanta leer libros, especialmente novelas de fantasía.

Los fines de semana solemos ir al cine o pasear por el centro. Es una amiga fantástica y me alegro mucho de conocerla.`
    },
    {
      id: 'spansk-1-15-3-def-2',
      type: 'definition',
      title: 'Dagboknotater (El diario)',
      content: `**Struktur for et dagboknotat:**

1. **Dato**: Lunes, 15 de marzo
2. **Innledning**: Hoy ha sido un día... (I dag har vært en dag...)
3. **Hva skjedde**: Por la mañana... Luego... Por la tarde...
4. **Folelser**: Estoy contento/a / cansado/a / emocionado/a
5. **Avslutning**: Mañana quiero... / Espero que mañana...

**Nyttige tidsuttrykk:**

| Spansk | Norsk |
|--------|-------|
| por la mañana | om morgenen |
| al mediodía | midt på dagen |
| por la tarde | om ettermiddagen |
| por la noche | om kvelden |
| primero | først |
| luego / después | så / etterpå |
| al final | til slutt |`
    },
    {
      id: 'spansk-1-15-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Dagboknotat',
      problem: 'Les dette dagboknotatet.',
      solution: `Viernes, 10 de enero

¡Querido diario!

Hoy ha sido un día fantástico. Por la mañana fui al instituto como siempre, pero tuvimos una sorpresa: ¡un estudiante nuevo de España! Se llama Alejandro y es de Sevilla. Es muy simpático.

Al mediodía comí con mis amigos en la cafetería. Alejandro se sentó con nosotros y nos contó cosas sobre España. ¡Qué interesante!

Por la tarde tuve clase de español. Fue muy divertido porque Alejandro nos ayudó con la pronunciación.

Estoy muy contenta. Espero que mañana podamos hablar más. ¡Buenas noches!`
    },
    {
      id: 'spansk-1-15-3-def-3',
      type: 'definition',
      title: 'Bindeord for sammenhengende tekst (Conectores)',
      content: `For å gjøre teksten din mer sammenhengende, bruk bindeord:

**Rekkefølge:**
- Primero... (Først...)
- Luego... / Después... (Så... / Etterpå...)
- Al final... / Por último... (Til slutt...)

**Legge til informasjon:**
- También... (Ogsa...)
- Además... (I tillegg...)
- Y... (Og...)

**Kontrast:**
- Pero... (Men...)
- Sin embargo... (Likevel...)
- Aunque... (Selv om...)

**Årsak og grunn:**
- Porque... (Fordi...)
- Por eso... (Derfor...)
- Como... (Ettersom...)`
    },
    {
      id: 'spansk-1-15-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket bindeord betyr «derfor» på spansk?',
        options: [
          { id: 'a', text: 'Porque', isCorrect: false },
          { id: 'b', text: 'Pero', isCorrect: false },
          { id: 'c', text: 'Por eso', isCorrect: true },
          { id: 'd', text: 'También', isCorrect: false },
        ],
        solution: '«Por eso» betyr «derfor». «Porque» betyr «fordi», «pero» betyr «men» og «también» betyr «også».',
      },
    },
    {
      id: 'spansk-1-15-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan sier du «Hun har brune øyne» på spansk?',
        options: [
          { id: 'a', text: 'Tiene los ojos marrones.', isCorrect: true },
          { id: 'b', text: 'Es los ojos marrones.', isCorrect: false },
          { id: 'c', text: 'Está ojos marrones.', isCorrect: false },
          { id: 'd', text: 'Hay ojos marrones.', isCorrect: false },
        ],
        solution: '«Tiene los ojos marrones» er riktig. Man bruker «tener» (å ha) for å beskrive fysiske trekk som øyne og har.',
      },
    },
    {
      id: 'spansk-1-15-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig bindeord i setningene.',
        subTasks: [
          { label: 'a', task: 'Me gusta mucho el fútbol. ___ juego todos los sábados. (derfor)', solution: 'Por eso' },
          { label: 'b', task: '___ fui al instituto. ___ comí con mis amigos. (Først... Så...)', solution: 'Primero... Luego...' },
          { label: 'c', task: 'Quiero ir al cine, ___ no tengo dinero. (men)', solution: 'pero' },
          { label: 'd', task: 'Me gustan las películas. ___ me encanta la música. (Ogsa)', solution: 'También' },
        ],
        solution: 'a) Por eso, b) Primero... Luego..., c) pero, d) También. Bindeord gjør teksten mer sammenhengende.',
        hints: ['Se tabellen over bindeord (conectores)'],
      },
    },
    {
      id: 'spansk-1-15-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort beskrivelse (5-7 setninger) av en person du kjenner. Beskriv utseende, personlighet og interesser.',
        subTasks: [
          { label: 'a', task: 'Bruk uttrykkene fra tabellene for personbeskrivelser.', solution: 'Mi hermano se llama Erik. Tiene catorce años. Es alto y tiene el pelo moreno y corto. Tiene los ojos verdes. Es muy amable y divertido. Le gusta mucho jugar a videojuegos y hacer deporte. También le encanta la música rap.' },
        ],
        solution: 'En god personbeskrivelse inkluderer utseende (ser/tener), personlighet (ser + adjektiv) og interesser (gustar/encantar).',
        hints: ['Bruk «es» for personlighet og «tiene» for fysiske trekk'],
      },
    },
    {
      id: 'spansk-1-15-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et dagboknotat (6-8 setninger) om en skoleddag. Bruk tidsuttrykk og bindeord.',
        subTasks: [
          { label: 'a', task: 'Start med dato og beskriv hva som skjedde i løpet av dagen.', solution: 'Martes, 5 de febrero\n\nQuerido diario:\n\nHoy ha sido un día interesante. Primero, por la mañana tuve clase de matemáticas. Fue difícil, pero la profesora nos ayudó mucho. Luego, al mediodía, comí con mis amigos en la cafetería. Por la tarde tuve clase de español, que es mi asignatura favorita. Además, hicimos un juego de roles muy divertido. Estoy un poco cansada, pero contenta. ¡Buenas noches!' },
        ],
        solution: 'Et dagboknotat bruker tidsuttrykk (por la mañana, luego, por la tarde) og bindeord for å skape flyt.',
        hints: ['Bruk por la mañana, al mediodía, por la tarde', 'Inkluder følelser: estoy contento/a, cansado/a'],
      },
    },
    {
      id: 'spansk-1-15-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

For å skrive gode korte tekster på spansk:

- **Beskrivelser**: Bruk ser for personlighet, tener for fysiske trekk, gustar for interesser
- **Dagboknotater**: Bruk tidsuttrykk (por la mañana, luego, por la tarde) og beskriv følelser
- **Bindeord**: Bruk primero, luego, también, además, pero, porque, por eso for å binde setninger sammen
- **Tips**: Hold setningene enkle, varier ordforrådet, og følg en logisk struktur`
    },
    {
      id: 'spansk-1-15-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en beskrivelse av hjembyen din (8-10 setninger). Inkluder beliggenhet, storrelse, severdigheter, vær og hva du liker best.',
        subTasks: [
          { label: 'a', task: 'Bruk både beskrivende uttrykk og bindeord.', solution: 'Mi ciudad se llama Trondheim y está en el centro de Noruega. Es una ciudad mediana con aproximadamente 200.000 habitantes. Es un lugår bonito y tranquilo, pero también tiene mucha vida estudiantil porque tiene una universidad grande.\n\nPrimero, Trondheim es famosa por la catedral de Nidaros, que es muy antigua y bonita. También tiene un barrio antiguo con casas de madera de colores. Además, hay muchos cafés y restaurantes.\n\nEl tiempo es variable. En verano hace buen tiempo y hay mucha luz. Pero en invierno hace mucho frío y nieva a menudo.\n\nLo mejor de Trondheim es la naturaleza. Hay montañas y fiordos cerca de la ciudad. ¡Me encanta vivir aquí!' },
        ],
        solution: 'En stedbeskrivelse inneholder beliggenhet, storrelse, severdigheter, vær og personlig mening.',
        hints: ['Bruk está en for beliggenhet', 'Bruk hay for hva som finnes der'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la descripción', definition: 'beskrivelse' },
    { term: 'el diario', definition: 'dagbok' },
    { term: 'el conector', definition: 'bindeord' },
    { term: 'el pelo', definition: 'haret' },
    { term: 'los ojos', definition: 'øynene' },
    { term: 'por eso', definition: 'derfor' },
  ],
};

export const CHAPTER_SPANSK_1_15_4: TextbookChapter = {
  id: 'spansk-1-15-4',
  courseId: 'spansk-1',
  chapterNumber: '15.4',
  title: 'Escritura creativa',
  subtitle: 'Kreativ skriving',
  description: 'Utforsk kreativ skriving på spansk gjennom korte historier, dikt og fantasifulle tekster.',
  estimatedMinutes: 50,
  competenceGoals: ['skrive kreative tekster på spansk med fantasi og personlig uttrykk'],
  content: [
    {
      id: 'spansk-1-15-4-intro',
      type: 'text',
      content: `## Escritura creativa - Kreativ skriving

Kreativ skriving handler om å bruke fantasien og uttrykke seg fritt på spansk. Du trenger ikke perfekt grammatikk - det viktigste er å være kreativ og tørre å bruke språket.

I dette kapittelet får du prøve deg på korte historier, enkle dikt og fantasifulle tekster.`
    },
    {
      id: 'spansk-1-15-4-def-1',
      type: 'definition',
      title: 'Korte historier (Historias cortas)',
      content: `**Struktur for en kort historie:**

1. **Innledning (Intrøducción)**: Presenter hovedpersonen og stedet
   - Había una vez... (Det var en gang...)
   - Un día... (En dag...)
   - Érase una vez... (Det var en gang...)

2. **Handling (Desarrollo)**: Hva skjer?
   - De repente... (Plutselig...)
   - Entonces... (Da...)
   - En ese momento... (I det øyeblikket...)

3. **Avslutning (Desenlace)**: Hvordan ender det?
   - Al final... (Til slutt...)
   - Y desde entonces... (Og siden den gang...)
   - Vivieron felices... (De levde lykkelig...)

**Nyttige uttrykk for fortelling:**

| Spansk | Norsk |
|--------|-------|
| Había una vez... | Det var en gang... |
| De repente... | Plutselig... |
| Al final... | Til slutt... |
| Mientras tanto... | I mellomtiden... |
| Al día siguiente... | Dagen etter... |`
    },
    {
      id: 'spansk-1-15-4-ex-1',
      type: 'example',
      title: 'Eksempel 1: En kort historie',
      problem: 'Les denne korte historien.',
      solution: `**El gato viajero**

Había una vez un gato que se llamaba Milo. Milo vivía en un pequeño pueblo en España, pero soñaba con viajar por el mundo.

Un día, Milo encontró un mapa antiguo en el jardín. El mapa mostraba una isla misteriosa llena de tesoros. Entonces, Milo decidió ir a buscar la isla.

De repente, un pájaro grande llegó y dijo: «¡Yo puedo llevarte!» Milo subió al pájaro y volaron sobre el mar azul.

Al final, llegaron a la isla. Pero el tesoro no era oro — era un jardín lleno de flores y mariposas. Milo comprendió que la verdadera aventura era el viaje.

Y desde entonces, Milo viajó por todo el mundo con su amigo el pájaro.`
    },
    {
      id: 'spansk-1-15-4-def-2',
      type: 'definition',
      title: 'Enkle dikt (Poemas sencillos)',
      content: `**Typer enkle dikt:**

**Akrostikon (Acróstico):** Forbokstavene i hver linje danner et ord.
Eksempel med «SOL»:
*S*iempre brilla en el cielo
*O*frece luz y calor
*L*lena de vida la tierra

**Haiku:** Kort dikt med 5-7-5 stavelser.
Eksempel:
*El sol se pone* (5)
*sobre el mar azul y frío* (7)
*llega la noche* (5)

**Diamant-dikt:** Starter og slutter med ett ord, utvides i midten.
Sol
Brillante, cálido
Iluminando, calentando, brillando
Cielo, nubes, estrellas, luna
Oscureciendo, enfriando, descansando
Tranquila, plateada
Luna`
    },
    {
      id: 'spansk-1-15-4-ex-2',
      type: 'example',
      title: 'Eksempel 2: Akrostikon',
      problem: 'Les dette akrostikon-diktet med ordet AMIGO.',
      solution: `**A**legre y divertido
**M**e ayuda siempre
**I**nteligente y amable
**G**uarda mis secretos
**O**frece su corazón

(Glad og morsom / Hjelper meg alltid / Smart og snill / Tar vare på hemmelighetene mine / Gir sitt hjerte)`
    },
    {
      id: 'spansk-1-15-4-def-3',
      type: 'definition',
      title: 'Fantasifulle tekster (Textos imaginativos)',
      content: `**Ideer for kreativ skriving:**

1. **Si yo fuera...** (Hvis jeg var...): Skriv om hva du ville gjørt
   - Si yo fuera invisible... (Hvis jeg var usynlig...)
   - Si yo viviera en España... (Hvis jeg bodde i Spania...)
   - Si yo pudiera volar... (Hvis jeg kunne fly...)

2. **Bildebeskrivelse**: Beskriv et bilde med fantasi
   - En esta imagen veo... (I dette bildet ser jeg...)
   - Me imagino que... (Jeg forestiller meg at...)

3. **Brev fra en kjent person**: Skriv som om du var en kjent person
   - Soy [person] y hoy quiero contaros... (Jeg er [person] og i dag vil jeg fortelle dere...)

4. **Fremtidsvisjon**: Skriv om fremtiden
   - En el año 2050... (I aret 2050...)
   - El mundo del futuro será... (Fremtidens verden vil være...)`
    },
    {
      id: 'spansk-1-15-4-ex-3',
      type: 'example',
      title: 'Eksempel 3: Si yo fuera...',
      problem: 'Les denne fantasifulle teksten.',
      solution: `**Si yo fuera invisible por un día...**

Si yo fuera invisible por un día, primero iría a la cocina y comería todo el chocolate sin que nadie me viera. ¡Qué divertido!

Luego, iría al zoo y entraría en las jaulas de los animåles para acariciar a los leones y jugar con los pingüinos.

Después, visitaría el Palacio Real en Madrid y exploraría todas las habitaciones secretas.

Por la tarde, iría al estadio del Real Madrid y jugaría un partido con los jugadores. ¡Nadie vería el balón moverse solo!

Al final del día, volvería a casa y haría ruidos extraños para asustår a mi hermano. Sería un día increíble.`
    },
    {
      id: 'spansk-1-15-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «Había una vez» på norsk?',
        options: [
          { id: 'a', text: 'Det er en gang', isCorrect: false },
          { id: 'b', text: 'Det var en gang', isCorrect: true },
          { id: 'c', text: 'Det vil være en gang', isCorrect: false },
          { id: 'd', text: 'Det finnes en gang', isCorrect: false },
        ],
        solution: '«Había una vez» betyr «Det var en gang» og er den klassiske åpningen på eventyr og historier på spansk.',
      },
    },
    {
      id: 'spansk-1-15-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «De repente» i en historie?',
        options: [
          { id: 'a', text: 'Til slutt', isCorrect: false },
          { id: 'b', text: 'I mellomtiden', isCorrect: false },
          { id: 'c', text: 'Plutselig', isCorrect: true },
          { id: 'd', text: 'Dagen etter', isCorrect: false },
        ],
        solution: '«De repente» betyr «plutselig» og brukes for å introdusere noe uventet i en historie.',
      },
    },
    {
      id: 'spansk-1-15-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv et akrostikon-dikt med ordet CASA (hus). Hver linje skal begynne med bokstavene C, A, S, A.',
        subTasks: [
          { label: 'a', task: 'Skriv en linje for hver bokstav som handler om hjem.', solution: 'C - Cálida y acogedora\nA - Aquí vivo con mi familia\nS - Siempre me siento seguro\nA - Amo mi hogar' },
        ],
        solution: 'Et akrostikon bruker forbokstavene i et ord som start på hver linje. Vær kreativ med innholdet!',
        hints: ['Hver linje skal starte med C, A, S, A', 'Tenk på hva hjem betyr for deg'],
      },
    },
    {
      id: 'spansk-1-15-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv begynnelsen på en kort historie (5-7 setninger). Bruk «Había una vez» og presenter en hovedperson og en situasjon.',
        subTasks: [
          { label: 'a', task: 'Intrøduser hvem, hvor og hva som skal skje.', solution: 'Había una vez una chica que se llamaba Lucía. Vivía en un pueblo pequeño cerca del mar en el sur de España. Lucía era muy curiosa y le encantaba explorar. Un día, mientras caminaba por la playa, encontró una botella con un mensaje dentro. El mensaje decía: «Ven a la isla del tesoro.» Lucía decidió seguir las instrucciones del mapa que había dentro de la botella.' },
        ],
        solution: 'En god innledning presenterer hovedpersonen, stedet og en hendelse som setter i gang historien.',
        hints: ['Start med Había una vez...', 'Presenter hvem og hvor først'],
      },
    },
    {
      id: 'spansk-1-15-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Kreativ skriving på spansk gir deg frihet til å bruke språket på nye måter:

- **Korte historier**: Bruk Había una vez, De repente, Al final for struktur
- **Enkle dikt**: Prov akrostikon, haiku eller diamant-dikt
- **Fantasifulle tekster**: Bruk Si yo fuera... for å skrive om fantasier
- **Viktige bindeord**: De repente, entonces, mientras tanto, al final
- **Tips**: Vær kreativ, ikke vær redd for feil, og ha det goy med språket!`
    },
    {
      id: 'spansk-1-15-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken setning passer best til å avslutte en historie?',
        options: [
          { id: 'a', text: 'De repente, algo pasó.', isCorrect: false },
          { id: 'b', text: 'Había una vez un chico.', isCorrect: false },
          { id: 'c', text: 'Y desde entonces, vivieron felices.', isCorrect: true },
          { id: 'd', text: 'Un día, encontró un mapa.', isCorrect: false },
        ],
        solution: '«Y desde entonces, vivieron felices» (Og siden den gang levde de lykkelig) er en klassisk historieavslutning. «Había una vez» er en åpning, og «De repente» brukes midt i historien.',
      },
    },
    {
      id: 'spansk-1-15-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-15-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en komplett kort historie (10-12 setninger) med innledning, handling og avslutning. Bruk minst fem bindeord og fortelleruttrykk.',
        subTasks: [
          { label: 'a', task: 'Skriv om et eventyr, en reise eller en overraskende hendelse. Bruk: Había una vez, un día, de repente, entonces, mientras tanto, al final.', solution: 'Había una vez un chico que se llamaba Pablo. Vivía en Madrid y trabajaba en una librería. Un día, encontró un libro muy antiguo detrás de una estantería. Cuando abrió el libro, de repente las páginas empezaron a brillar.\n\nEntonces, Pablo se encontró dentro del libro, en un bosque mágico. Mientras tanto, un pequeño dragón apareció y dijo: «¡Bienvenido! Te estaba esperando.» El dragón le explicó que el bosque necesitaba un héroe.\n\nPablo y el dragón caminaron juntos por el bosque. Después de muchas aventuras, encontraron un cristal mágico. Pablo tocó el cristal y el bosque se llenó de luz y color.\n\nAl final, Pablo volvió a la librería con el libro en las manos. Pero desde entonces, cada noche soñaba con el bosque mágico y su amigo el dragón.' },
        ],
        solution: 'En komplett kort historie har tre deler: innledning (Había una vez), handling (de repente, entonces) og avslutning (al final). Bruk bindeord for å skape flyt.',
        hints: ['Følg strukturen: innledning, handling, avslutning', 'Bruk mange bindeord og fortelleruttrykk'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la historia corta', definition: 'kort historie' },
    { term: 'el poema', definition: 'dikt' },
    { term: 'el acróstico', definition: 'akrostikon' },
    { term: 'había una vez', definition: 'det var en gang' },
    { term: 'de repente', definition: 'plutselig' },
    { term: 'la escritura creativa', definition: 'kreativ skriving' },
  ],
};

// ============================================================================
// KAPITTEL 16: GRAMÁTICA Y ESTRATEGIAS
// ============================================================================

export const CHAPTER_SPANSK_1_16_1: TextbookChapter = {
  id: 'spansk-1-16-1',
  courseId: 'spansk-1',
  chapterNumber: '16.1',
  title: 'Resumen de gramática',
  subtitle: 'Grammatikkoversikt',
  description: 'En samlet oversikt over de viktigste grammatiske emnene i spansk nivå 1: ser/estar, presens, artikler, adjektiv, preposisjoner, ir a + infinitiv og gustar.',
  estimatedMinutes: 55,
  competenceGoals: ['ha oversikt over grunnleggende spansk grammatikk og bruke den i praksis'],
  content: [
    {
      id: 'spansk-1-16-1-intro',
      type: 'text',
      content: `## Resumen de gramática - Grammatikkoversikt

I dette kapittelet får du en samlet oversikt over den viktigste grammatikken du har lært i spansk nivå 1. Bruk dette kapittelet som et oppslagsverk når du trenger å repetere.

Vi går gjennom: ser og estar, presens av regelmessige og uregelmessige verb, artikler, adjektivbøying, preposisjoner, ir a + infinitiv og verbet gustar.`
    },
    {
      id: 'spansk-1-16-1-def-1',
      type: 'definition',
      title: 'Ser vs. Estar (Å være)',
      content: `Både **ser** og **estar** betyr «å være», men de brukes ulikt:

**SER** brukes for:
- Identitet: Soy Emma. (Jeg er Emma.)
- Nasjonalitet: Soy noruega. (Jeg er norsk.)
- Yrke: Es profesora. (Hun er lærer.)
- Personlighet: Es simpático. (Han er hyggelig.)
- Tid: Son las tres. (Klokka er tre.)

| Pronomen | Ser |
|----------|-----|
| yo | soy |
| tú | eres |
| él/ella/usted | es |
| nosotros/as | somos |
| vosotros/as | sois |
| ellos/ellas/ustedes | son |

**ESTAR** brukes for:
- Sted: Estoy en casa. (Jeg er hjemme.)
- Midlertidig tilstand: Estoy cansado. (Jeg er trøtt.)
- Folelser: Está contenta. (Hun er glad.)
- Vaer: Está lloviendo. (Det regner.)

| Pronomen | Estar |
|----------|-------|
| yo | estoy |
| tú | estás |
| él/ella/usted | está |
| nosotros/as | estamos |
| vosotros/as | estáis |
| ellos/ellas/ustedes | están |`
    },
    {
      id: 'spansk-1-16-1-ex-1',
      type: 'example',
      title: 'Eksempel 1: Ser vs. Estar',
      problem: 'Fyll inn ser eller estar: a) María ___ de España. b) Yo ___ en el instituto. c) Nosotros ___ estudiantes. d) Ella ___ cansada hoy.',
      solution: 'a) María **es** de España. (nasjonalitet = ser) b) Yo **estoy** en el instituto. (sted = estar) c) Nosotros **somos** estudiantes. (identitet = ser) d) Ella **está** cansada hoy. (midlertidig tilstand = estar)'
    },
    {
      id: 'spansk-1-16-1-def-2',
      type: 'definition',
      title: 'Presens av regelmessige verb',
      content: `Spanske verb deles i tre grupper etter endelse: **-ar**, **-er**, **-ir**.

**Hablar (å snakke) - ar-verb:**
| Pronomen | Bøying |
|----------|--------|
| yo | habl**o** |
| tú | habl**as** |
| él/ella/usted | habl**a** |
| nosotros/as | habl**amos** |
| vosotros/as | habl**áis** |
| ellos/ellas/ustedes | habl**an** |

**Comer (å spise) - er-verb:**
| Pronomen | Bøying |
|----------|--------|
| yo | com**o** |
| tú | com**es** |
| él/ella/usted | com**e** |
| nosotros/as | com**emos** |
| vosotros/as | com**éis** |
| ellos/ellas/ustedes | com**en** |

**Vivir (å bo) - ir-verb:**
| Pronomen | Bøying |
|----------|--------|
| yo | viv**o** |
| tú | viv**es** |
| él/ella/usted | viv**e** |
| nosotros/as | viv**imos** |
| vosotros/as | viv**ís** |
| ellos/ellas/ustedes | viv**en** |`
    },
    {
      id: 'spansk-1-16-1-def-3',
      type: 'definition',
      title: 'Vanlige uregelmessige verb i presens',
      content: `Noen av de mest brukte verbene er uregelmessige:

**Tener (å ha):** tengo, tienes, tiene, tenemos, tenéis, tienen
**Ir (å gå):** voy, vas, va, vamos, vais, van
**Hacer (å gjøre):** hago, haces, hace, hacemos, hacéis, hacen
**Poder (å kunne):** puedo, puedes, puede, podemos, podéis, pueden
**Querer (a ville/ønske):** quiero, quieres, quiere, queremos, queréis, quieren
**Decir (å si):** digo, dices, dice, decimos, decís, dicen
**Saber (å vite):** sé, sabes, sabe, sabemos, sabéis, saben
**Conocer (å kjenne):** conozco, conoces, conoce, conocemos, conocéis, conocen`
    },
    {
      id: 'spansk-1-16-1-def-4',
      type: 'definition',
      title: 'Artikler og adjektivbøying',
      content: `**Bestemte artikler (el/la/los/las):**
| | Hankjønn | Hunkjønn |
|---|---------|----------|
| Entall | el libro (boken) | la casa (huset) |
| Flertall | los libros (bokene) | las casas (husene) |

**Ubestemte artikler (un/una/unos/unas):**
| | Hankjønn | Hunkjønn |
|---|---------|----------|
| Entall | un libro (en bok) | una casa (et hus) |
| Flertall | unos libros (noen bøker) | unas casas (noen hus) |

**Adjektivbøying** - adjektivet retter seg etter substantivet:
- El chico alt**o** / La chica alt**a** (den hoye gutten / jenta)
- Los chicos alt**os** / Las chicas alt**as** (de hoye guttene / jentene)

Adjektiv som ender på **-e** eller konsonant endres ikke i kjønn:
- El chico intelligent**e** / La chica intelligent**e**
- El examen difícil / La pregunta difícil`
    },
    {
      id: 'spansk-1-16-1-def-5',
      type: 'definition',
      title: 'Preposisjoner, ir a + infinitiv og gustar',
      content: `**Vanlige preposisjoner:**
| Spansk | Norsk |
|--------|-------|
| a | til |
| de | av, fra |
| en | i, på |
| con | med |
| sin | uten |
| para | for, til (formål) |
| por | for, gjennom (årsak) |
| entre | mellom |

**Ir a + infinitiv** (nær framtid):
- Voy a estudiar. (Jeg skal studere.)
- Vamos a comer. (Vi skal spise.)
- Va a llover. (Det skal regne.)

**Gustar** (a like - spesiell konstruksjon):
- Me gusta el fútbol. (Jeg liker fotball.)
- Me gustan las películas. (Jeg liker filmer.)
- Te gusta leer. (Du liker å lese.)
- Le gusta viajar. (Han/hun liker å reise.)
- Nos gusta la música. (Vi liker musikk.)`
    },
    {
      id: 'spansk-1-16-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning er riktig?',
        options: [
          { id: 'a', text: 'Yo soy en la escuela.', isCorrect: false },
          { id: 'b', text: 'Yo estoy en la escuela.', isCorrect: true },
          { id: 'c', text: 'Yo es en la escuela.', isCorrect: false },
          { id: 'd', text: 'Yo está en la escuela.', isCorrect: false },
        ],
        solution: '«Yo estoy en la escuela» er riktig. Man bruker «estar» for sted (hvor man er), og «estoy» er første person entall.',
      },
    },
    {
      id: 'spansk-1-16-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig form av «hablar» for «nosotros»?',
        options: [
          { id: 'a', text: 'habláis', isCorrect: false },
          { id: 'b', text: 'hablan', isCorrect: false },
          { id: 'c', text: 'hablamos', isCorrect: true },
          { id: 'd', text: 'hablo', isCorrect: false },
        ],
        solution: '«Nosotros hablamos» er riktig. For ar-verb får nosotros endelsen -amos.',
      },
    },
    {
      id: 'spansk-1-16-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av verbet i parentes.',
        subTasks: [
          { label: 'a', task: 'Yo ___ (vivir) en Oslo.', solution: 'vivo' },
          { label: 'b', task: 'Ella ___ (comer) una manzana.', solution: 'come' },
          { label: 'c', task: 'Nosotros ___ (hablar) español.', solution: 'hablamos' },
          { label: 'd', task: 'Ellos ___ (tener) un perro.', solution: 'tienen' },
        ],
        solution: 'a) vivo (ir-verb, yo), b) come (er-verb, ella), c) hablamos (ar-verb, nosotros), d) tienen (uregelmessig, ellos).',
        hints: ['Fjern verbendelsen (-ar, -er, -ir) og legg til riktig personendelse'],
      },
    },
    {
      id: 'spansk-1-16-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg ser eller estar og fyll inn riktig form.',
        subTasks: [
          { label: 'a', task: 'Mis padres ___ profesores. (identitet)', solution: 'son (ser - yrke/identitet)' },
          { label: 'b', task: 'El restaurante ___ en la calle Mayor. (sted)', solution: 'está (estar - sted)' },
          { label: 'c', task: '¿___ (tú) contento hoy? (midlertidig tilstand)', solution: 'Estás (estar - følelse/tilstand)' },
          { label: 'd', task: 'La fiesta ___ el sábado. (tid)', solution: 'es (ser - tid)' },
        ],
        solution: 'a) son (ser - yrke), b) está (estar - sted), c) Estás (estar - tilstand), d) es (ser - tid). Husk: ser = permanent/identitet, estar = sted/midlertidig.',
        hints: ['Ser = identitet, nasjonalitet, yrke, tid. Estar = sted, tilstand, følelse.'],
      },
    },
    {
      id: 'spansk-1-16-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

De viktigste grammatiske emnene i spansk nivå 1:

1. **Ser vs. Estar**: Ser for identitet/permanente egenskaper, estar for sted/midlertidige tilstander
2. **Presens**: Tre grupper (-ar, -er, -ir) med faste endelser + uregelmessige verb
3. **Artikler**: el/la/los/las (bestemt), un/una/unos/unas (ubestemt)
4. **Adjektiv**: Retter seg etter substantivet i kjønn og tall (-o/-a, -os/-as)
5. **Preposisjoner**: a, de, en, con, sin, para, por
6. **Ir a + infinitiv**: For nær fremtid (Voy a estudiar)
7. **Gustar**: Spesiell konstruksjon (Me gusta/gustan)`
    },
    {
      id: 'spansk-1-16-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er riktig? «Me ___ las películas de acción.»',
        options: [
          { id: 'a', text: 'gusta', isCorrect: false },
          { id: 'b', text: 'gustan', isCorrect: true },
          { id: 'c', text: 'gusto', isCorrect: false },
          { id: 'd', text: 'gustas', isCorrect: false },
        ],
        solution: '«Me gustan las películas» er riktig. Man bruker «gustan» (flertall) fordi «las películas» er flertall. Med entall bruker man «gusta».',
      },
    },
    {
      id: 'spansk-1-16-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en tekst (8-10 setninger) om deg selv der du bruker alle de grammatiske emnene vi har repetert: ser, estar, regelmessige og uregelmessige verb, artikler, adjektiv, gustar og ir a + infinitiv.',
        subTasks: [
          { label: 'a', task: 'Marker hvilke grammatiske emner du bruker i hver setning.', solution: 'Me llamo Ola y soy de Noruega. [ser - nasjonalitet] Soy alto y tengo el pelo rubio. [ser - egenskap, tener - uregelmessig, artikkel] Estoy en el instituto ahora. [estar - sted, artikkel] Estudio español y me gustan mucho las clases. [regelmessig verb, gustar + flertall] También hago deporte los fines de semana. [uregelmessig verb hacer] Vivo en una casa grande con mi familia. [regelmessig verb, ubestemt artikkel, adjektiv] Hoy estoy un poco cansado porque tengo muchos deberes. [estar - tilstand, tener - uregelmessig] Pero mañana voy a ir al cine con mis amigos. [ir a + infinitiv, preposisjon] ¡Va a ser muy divertido! [ir a + infinitiv, adjektiv]' },
        ],
        solution: 'En god tekst kombinerer alle grammatiske emner naturlig. Husk å variere mellom ser og estar, bruk både regelmessige og uregelmessige verb.',
        hints: ['Bruk minst ett eksempel av hvert grammatisk emne', 'Skriv om dagligdagse ting for å gjøre det naturlig'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el verbo', definition: 'verb' },
    { term: 'el sustantivo', definition: 'substantiv' },
    { term: 'el adjetivo', definition: 'adjektiv' },
    { term: 'la preposición', definition: 'preposisjon' },
    { term: 'el artículo', definition: 'artikkel' },
    { term: 'la conjugación', definition: 'verbøying' },
    { term: 'el presente', definition: 'presens (natid)' },
  ],
};

export const CHAPTER_SPANSK_1_16_2: TextbookChapter = {
  id: 'spansk-1-16-2',
  courseId: 'spansk-1',
  chapterNumber: '16.2',
  title: 'Formación de palabras',
  subtitle: 'Orddannelse',
  description: 'Lær om kognater mellom spansk og andre språk, og hvordan ordfamilier kan hjelpe deg å forstå nye ord.',
  estimatedMinutes: 40,
  competenceGoals: ['gjenkjenne kognater og bruke ordfamilier for å utvide ordforrådet'],
  content: [
    {
      id: 'spansk-1-16-2-intro',
      type: 'text',
      content: `## Formación de palabras - Orddannelse

Visste du at du allerede kan mange spanske ord uten å vite det? Mange spanske ord ligner på ord i norsk, engelsk, fransk og andre språk. Disse kalles **kognater**.

I dette kapittelet lærer du å gjenkjenne kognater og bruke ordfamilier for å forstå nye ord uten å slå dem opp i ordboken.`
    },
    {
      id: 'spansk-1-16-2-def-1',
      type: 'definition',
      title: 'Kognater (Cognados)',
      content: `**Kognater** er ord som ligner på hverandre i ulike språk fordi de har samme opprinnelse.

**Spansk-engelske kognater:**
| Spansk | Engelsk | Norsk |
|--------|---------|-------|
| el hospital | hospital | sykehus |
| la música | music | musikk |
| el teléfono | telephone | telefon |
| la universidad | university | universitet |
| el restaurante | restaurant | restaurant |
| el chocolate | chocolate | sjokolade |
| la familia | family | familie |
| el hotel | hotel | hotell |
| la información | information | informasjon |
| natural | natural | naturlig |

**Spansk-norske kognater:**
| Spansk | Norsk |
|--------|-------|
| el tomate | tomat |
| la banana | banan |
| el café | kaffe |
| la guitarra | gitar |
| el taxi | taxi |
| el fútbol | fotball |`
    },
    {
      id: 'spansk-1-16-2-ex-1',
      type: 'example',
      title: 'Eksempel 1: Gjenkjenne kognater',
      problem: 'Hva tror du disse spanske ordene betyr? Bruk likheten med norsk og engelsk: la estación, el supermercado, la televisión, el problema, la experiencia.',
      solution: '**La estación** = stasjon (eng: station). **El supermercado** = supermarked (eng: supermarket). **La televisión** = fjernsyn/TV (eng: television). **El problema** = problem (eng: problem). **La experiencia** = erfaring/opplevelse (eng: experience). Alle er kognater som er lette å gjenkjenne!'
    },
    {
      id: 'spansk-1-16-2-def-2',
      type: 'definition',
      title: 'Falske venner (Falsos amigos)',
      content: `**Falske venner** er ord som ligner på ord i andre språk, men betyr noe helt annet!

| Spansk | Ser ut som | Betyr faktisk |
|--------|-----------|---------------|
| embarazada | embarrassed (flau) | gravid |
| constipado | constipated (forstoppet) | forkjølet |
| largo | large (stor) | lang |
| éxito | exit (utgang) | suksess |
| actual | actual (faktisk) | naaværende |
| sensible | sensible (fornuftig) | følsom |
| realizar | realize (innse) | gjennomføre |
| asistir | assist (hjelpe) | delta på / være til stede |

**Tips:** Vær ekstra oppmerksom på ord som ser kjente ut - de betyr ikke alltid det du tror!`
    },
    {
      id: 'spansk-1-16-2-ex-2',
      type: 'example',
      title: 'Eksempel 2: Falske venner',
      problem: 'Hva er galt med disse setningene? «Estoy embarazada» (ment som «Jeg er flau») og «Es muy largo» (ment som «Den er veldig stor»).',
      solution: '«Estoy embarazada» betyr faktisk «Jeg er gravid», ikke «Jeg er flau» (som er «Estoy avergonzada»). «Es muy largo» betyr «Den er veldig lang», ikke «Den er veldig stor» (som er «Es muy grande»). Disse er klassiske falske venner!'
    },
    {
      id: 'spansk-1-16-2-def-3',
      type: 'definition',
      title: 'Ordfamilier (Familias de palabras)',
      content: `Når du kjenner ett ord, kan du ofte gjette betydningen av relaterte ord i samme **ordfamilie**:

**Eksempel: Trabajo (arbeid)**
- trabajar (å arbeide)
- el trabajador / la trabajadora (arbeideren)
- el trabajo (arbeidet/jobben)

**Eksempel: Comer (å spise)**
- la comida (maten/måltidet)
- el comedor (spisestuen)
- comestible (spiselig)

**Eksempel: Estudiar (å studere)**
- el/la estudiante (studenten/eleven)
- el estudio (studiet)
- estudioso/a (flittig)

**Vanlige endelser som danner nye ord:**
| Endelse | Betydning | Eksempel |
|---------|-----------|----------|
| -ción / -sión | handling (substantiv) | información, televisión |
| -dad / -tad | egenskap (substantiv) | universidad, libertad |
| -mente | måte (adverb) | rápidamente, normalmente |
| -oso/a | full av (adjektiv) | famoso, delicioso |
| -ero/a | person som (substantiv) | camarero, enfermera |`
    },
    {
      id: 'spansk-1-16-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «embarazada» på spansk?',
        options: [
          { id: 'a', text: 'Flau', isCorrect: false },
          { id: 'b', text: 'Gravid', isCorrect: true },
          { id: 'c', text: 'Forbauset', isCorrect: false },
          { id: 'd', text: 'Nervos', isCorrect: false },
        ],
        solution: '«Embarazada» betyr «gravid» på spansk, selv om det ligner på engelske «embarrassed» (flau). Dette er en klassisk falsk venn!',
      },
    },
    {
      id: 'spansk-1-16-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket ord tilhører samme ordfamilie som «trabajar» (å arbeide)?',
        options: [
          { id: 'a', text: 'el restaurante', isCorrect: false },
          { id: 'b', text: 'el trabajador', isCorrect: true },
          { id: 'c', text: 'el traductor', isCorrect: false },
          { id: 'd', text: 'el tranvía', isCorrect: false },
        ],
        solution: '«El trabajador» (arbeideren) tilhører samme ordfamilie som «trabajar» (å arbeide). De har samme stamme «trabaj-».',
      },
    },
    {
      id: 'spansk-1-16-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjett betydningen av disse spanske ordene ved hjelp av kognater (likhet med norsk/engelsk).',
        subTasks: [
          { label: 'a', task: 'la farmacia', solution: 'apotek (eng: pharmacy)' },
          { label: 'b', task: 'el diccionario', solution: 'ordbok (eng: dictionary)' },
          { label: 'c', task: 'la geografía', solution: 'geografi (eng: geography)' },
          { label: 'd', task: 'importante', solution: 'viktig (eng: important)' },
        ],
        solution: 'a) apotek, b) ordbok, c) geografi, d) viktig. Alle disse er kognater som ligner på engelske/norske ord.',
        hints: ['Sammenlign med engelske og norske ord'],
      },
    },
    {
      id: 'spansk-1-16-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag ordfamilier. Finn minst to ord som tilhører samme familie.',
        subTasks: [
          { label: 'a', task: 'cocinår (a lage mat)', solution: 'la cocina (kjøkken), el cocinero (kokk), cocinado (tilberedt)' },
          { label: 'b', task: 'cantar (å synge)', solution: 'la canción (sang), el/la cantante (sanger), el canto (sang/kvad)' },
          { label: 'c', task: 'jugar (a spille/leke)', solution: 'el juego (spill), el jugador (spiller), el juguete (leketøy)' },
        ],
        solution: 'a) cocina, cocinero. b) canción, cantante. c) juego, jugador. Ordfamilier hjelper deg å utvide ordforrådet!',
        hints: ['Tenk på substantiv, adjektiv og personbetegnelser relatert til verbet'],
      },
    },
    {
      id: 'spansk-1-16-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Orddannelse er en kraftig strategi for å utvide ordforrådet:

- **Kognater**: Mange spanske ord ligner på norske og engelske ord (hospital, música, teléfono)
- **Falske venner**: Visse ord ser like ut men betyr noe annet (embarazada ≠ flau, largo ≠ stor)
- **Ordfamilier**: Når du kan ett ord, kan du gjette beslektede ord (trabajar → trabajador → trabajo)
- **Endelser**: Kjenn igjen endelser som -ción, -dad, -mente, -oso, -ero for å forstå nye ord`
    },
    {
      id: 'spansk-1-16-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr trolig «el cantante» basert på ordfamilien til «cantar» (å synge)?',
        options: [
          { id: 'a', text: 'En sang', isCorrect: false },
          { id: 'b', text: 'En sanger', isCorrect: true },
          { id: 'c', text: 'En scene', isCorrect: false },
          { id: 'd', text: 'Et kor', isCorrect: false },
        ],
        solution: '«El cantante» betyr «sanger». Endelsen -ante/-ente brukes ofte for å lage personbetegnelser av verb, som estudiante (student) fra estudiar (å studere).',
      },
    },
    {
      id: 'spansk-1-16-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les teksten og identifiser alle kognater og ordfamilier. Forklar hvordan du forstod ordene.',
        subTasks: [
          { label: 'a', task: '«La universidad de Barcelona es una institución famosa e importante. Los estudiantes estudian diferentes materias como filosofía, literatura, medicina y biología. El campus es moderno y tiene una biblioteca fantástica.»', solution: 'Kognater: universidad (university), institución (institution), famosa (famous), importante (important), estudiantes (students), filosofía (philosophy), literatura (literature), medicina (medicine), biología (biology), campus (campus), moderno (modern), biblioteca (library - ligner på bibliothek). Ordfamilier: estudiantes-estudian (studere-studenter). Nesten alle ordene i teksten kan forstast gjennom kognater!' },
        ],
        solution: 'Teksten inneholder mange kognater fordi akademisk språk ofte har felles latinske/greske roter. Dette viser hvor kraftig kognat-strategien er!',
        hints: ['Sammenlign hvert ord med norsk og engelsk', 'Se etter ord med latinske/greske endelser'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'el cognado', definition: 'kognat (ord som ligner i flere språk)' },
    { term: 'el falso amigo', definition: 'falsk venn (ser likt ut men betyr noe annet)' },
    { term: 'la familia de palabras', definition: 'ordfamilie' },
    { term: 'la formación de palabras', definition: 'orddannelse' },
    { term: 'la raíz', definition: 'ordstamme/rot' },
    { term: 'el sufijo', definition: 'suffiks/ordendelse' },
  ],
};

export const CHAPTER_SPANSK_1_16_3: TextbookChapter = {
  id: 'spansk-1-16-3',
  courseId: 'spansk-1',
  chapterNumber: '16.3',
  title: 'Estrategias de aprendizaje',
  subtitle: 'Læringsstrategier',
  description: 'Lær effektive strategier for å lære spansk bedre, fra ordinnlæring til lytteforståelse.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke hensiktsmessige læringsstrategier for å utvikle språkferdighetene sine'],
  content: [
    {
      id: 'spansk-1-16-3-intro',
      type: 'text',
      content: `## Estrategias de aprendizaje - Læringsstrategier

Å lære et nytt språk krever gode strategier. Det handler ikke bare om å pugge gloser og grammatikk - det handler også om å bruke språket aktivt, finne måter å øve på som passer for deg, og være bevisst på hvordan du lærer.

I dette kapittelet får du tips og strategier for å lære spansk mer effektivt.`
    },
    {
      id: 'spansk-1-16-3-def-1',
      type: 'definition',
      title: 'Strategier for ordinnlæring (Aprender vocabulario)',
      content: `**Effektive måter å lære nye ord på:**

1. **Ordkort (Tarjetas de vocabulario)**: Skriv spansk på den ene siden og norsk på den andre. Gjennom appen Quizlet eller fysiske kort.

2. **Kontekst**: Lær ord i setninger, ikke isolert.
   - I stedet for bare «perro = hund», laer: «Tengo un perro que se llama Max.»

3. **Ordkart (Mapas de palabras)**: Lag tankekart med temaer.
   - Eksempel: «La comida» i midten → frutas, verduras, carne, pescado, postres

4. **Repetisjonsintervaller**: Repeter nye ord etter 1 dag, 3 dager, 1 uke, 1 måned.

5. **Bruk sansene**: Se, hor, skriv og si ordene høyt.

6. **Grupper ord etter tema**: Mat, klær, skole, kropp, familie osv.`
    },
    {
      id: 'spansk-1-16-3-ex-1',
      type: 'example',
      title: 'Eksempel 1: Ordkart',
      problem: 'Lag et ordkart med temaet «La escuela» (skolen).',
      solution: `**La escuela** (Skolen)

- **Personas**: el profesor, la profesora, el/la estudiante, el director
- **Asignaturas**: español, matemáticas, historia, ciencias, inglés
- **Objetos**: el libro, el cuaderno, el bolígrafo, la mochila, el ordenador
- **Lugares**: el aula, la biblioteca, el patio, la cafetería, el gimnasio
- **Acciones**: estudiar, aprender, leer, escribir, escuchar

Et ordkart organiserer ordene logisk og gjør dem lettere å huske!`
    },
    {
      id: 'spansk-1-16-3-def-2',
      type: 'definition',
      title: 'Strategier for lytting og lesing',
      content: `**Lyttestrategier (Estrategias de escucha):**

1. **For du lytter**: Tenk over temaet. Hva vet du om emnet? Hvilke ord forventer du å høre?
2. **Første gang**: Lytt etter hovedideen. Ikke prov å forstå alt.
3. **Andre gang**: Lytt etter detaljer og spesifikke ord.
4. **Etter lytting**: Oppsummer det du forstod med egne ord.

**Lesestrategier (Estrategias de lectura):**

1. **Skumlese (Lectura rápida)**: Les raskt for å få en oversikt.
2. **Naerles (Lectura detallada)**: Les nøyere for å forstå detaljer.
3. **Gjett fra kontekst**: Hvis du ikke forstår et ord, se på ordene rundt.
4. **Kognater**: Bruk likhet med norsk/engelsk (se kapittel 16.2).
5. **Ikke slå opp alt**: Prov å forstå teksten uten å bruke ordbok for hvert ord.`
    },
    {
      id: 'spansk-1-16-3-def-3',
      type: 'definition',
      title: 'Strategier for snakking og skriving',
      content: `**Snakkestrategier (Estrategias de comunicación):**

1. **Ikke vær redd for feil**: Feil er en naturlig del av læringen.
2. **Omskriving**: Hvis du ikke kan et ord, beskriv det.
   - «Den tingen man bruker for å spise suppe» = la cuchara (skje)
3. **Bruk kroppsspråk**: Pek, vis, bruk gester.
4. **Be om hjelp**: «¿Cómo se dice...?» (Hvordan sier man...?)
5. **Repeter**: «¿Puede repetir, por favor?» (Kan du gjenta, vær så snill?)

**Skrivestrategier (Estrategias de escritura):**

1. **Planlegg**: Lag en disposisjon for du skriver.
2. **Bruk modeller**: Se på eksempeltekster og bruk dem som mål.
3. **Sjekk**: Les gjennom teksten din og sjekk grammatikk og stavemåter.
4. **Enkelt først**: Start med enkle setninger og bygg ut.
5. **Bindeord**: Bruk conectores for å binde setningene sammen.`
    },
    {
      id: 'spansk-1-16-3-ex-2',
      type: 'example',
      title: 'Eksempel 2: Omskriving',
      problem: 'Du husker ikke det spanske ordet for «kjøleskap». Hvordan kan du omskrive det?',
      solution: `Her er noen måter å omskrive «kjøleskap» på spansk:

- «Es la cosa grande en la cocina para mantener la comida fría.» (Det er den store tingen på kjøkkenet for å holde maten kald.)
- «Es una máquina blanca donde ponemos la leche y la fruta.» (Det er en hvit maskin der vi legger melk og frukt.)

Det riktige ordet er **el frigorífico** (eller **la nevera** i mange land), men omskriving hjelper deg å kommunisere selv når du mangler ord!`
    },
    {
      id: 'spansk-1-16-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken strategi er mest effektiv for å lære nye ord?',
        options: [
          { id: 'a', text: 'Bare lese ordlisten mange ganger', isCorrect: false },
          { id: 'b', text: 'Lære ord i kontekst og bruke repetisjonsintervaller', isCorrect: true },
          { id: 'c', text: 'Bare lytte til spansk musikk', isCorrect: false },
          { id: 'd', text: 'Skrive hvert ord hundre ganger', isCorrect: false },
        ],
        solution: 'A lære ord i kontekst (i setninger) og bruke repetisjonsintervaller er den mest effektive strategien. Forskning viser at vi husker ord bedre når vi bruker dem i meningsfulle sammenhenger.',
      },
    },
    {
      id: 'spansk-1-16-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre første gang du lytter til en spansk tekst?',
        options: [
          { id: 'a', text: 'Prøve å forstå hvert eneste ord', isCorrect: false },
          { id: 'b', text: 'Lytte etter hovedideen', isCorrect: true },
          { id: 'c', text: 'Lese manuset samtidig', isCorrect: false },
          { id: 'd', text: 'Sla opp alle ukjente ord i ordboken', isCorrect: false },
        ],
        solution: 'Første gang du lytter, bør du fokusere på hovedideen - hva handler teksten om generelt? Detaljer kan du få med deg ved å lytte flere ganger.',
      },
    },
    {
      id: 'spansk-1-16-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Øv på omskriving. Hvordan kan du beskrive disse ordene på spansk uten å bruke selve ordet?',
        subTasks: [
          { label: 'a', task: 'Briller (las gafas)', solution: 'Son cosas que pones en la cara para ver mejor. (Det er ting du setter på ansiktet for å se bedre.)' },
          { label: 'b', task: 'Paraply (el paraguas)', solution: 'Es una cosa que usas cuando llueve para no mojarte. (Det er en ting du bruker når det regner for å ikke bli vat.)' },
          { label: 'c', task: 'Lærer (el profesor)', solution: 'Es una persona que trabaja en la escuela y enseña a los estudiantes. (Det er en person som jobber på skolen og underviser elevene.)' },
        ],
        solution: 'Omskriving er en viktig strategi: beskriv hva tingen er, hva den brukes til eller hvor den finnes.',
        hints: ['Bruk «es una cosa/persona que...» (det er en ting/person som...)'],
      },
    },
    {
      id: 'spansk-1-16-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag et ordkart med temaet «Mi tiempo libre» (fritiden min). Organiser ordene i kategorier.',
        subTasks: [
          { label: 'a', task: 'Lag minst fire kategorier med tre ord i hver.', solution: 'Mi tiempo libre:\n- Deportes: el fútbol, la natación, el baloncesto\n- Música: escuchar música, tocar la guitarra, cantar\n- En casa: leer, ver películas, jugar a videojuegos\n- Con amigos: ir al cine, pasear, tomar un café' },
        ],
        solution: 'Et ordkart organiserer ord tematisk og gjør dem lettere å huske. Jo flere koblinger du lager, jo bedre husker du.',
        hints: ['Tenk på hva du gjør på fritiden', 'Lag kategorier som sport, musikk, hjemme, med venner'],
      },
    },
    {
      id: 'spansk-1-16-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

Gode læringsstrategier gjør spansklæringen mer effektiv:

- **Ordinnlæring**: Bruk ordkort, kontekst, ordkart og repetisjonsintervaller
- **Lytting**: Lytt etter hovedideen først, detaljer etterpå
- **Lesing**: Skumles først, nærles etterpå, gjett fra kontekst
- **Snakking**: Vær modig, bruk omskriving, be om hjelp
- **Skriving**: Planlegg, bruk modeller, sjekk og bruk bindeord
- **Generelt**: Feil er nyttige - de er en naturlig del av læringen!`
    },
    {
      id: 'spansk-1-16-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvordan sier du «Hvordan sier man...?» på spansk når du trenger hjelp med et ord?',
        options: [
          { id: 'a', text: '¿Qué significa?', isCorrect: false },
          { id: 'b', text: '¿Cómo se dice...?', isCorrect: true },
          { id: 'c', text: '¿Puede repetir?', isCorrect: false },
          { id: 'd', text: '¿Dónde está?', isCorrect: false },
        ],
        solution: '«¿Cómo se dice...?» betyr «Hvordan sier man...?» og er en viktig kommunikasjonsstrategi. For eksempel: «¿Cómo se dice \'kjøleskap\' en español?»',
      },
    },
    {
      id: 'spansk-1-16-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag din egen læringsplan for spansk. Beskriv på spansk (med norsk hjelp) hvilke strategier du vil bruke for å forbedre de fire ferdighetene: lytting, lesing, snakking og skriving.',
        subTasks: [
          { label: 'a', task: 'Skriv minst to strategier for hver ferdighet.', solution: 'Mi plan de aprendizaje:\n\nEscuchar (lytte): Voy a escuchar canciones en español y ver series españolas con subtítulos. (Jeg skal høre på spanske sanger og se spanske serier med undertekster.)\n\nLeer (lese): Voy a leer textos cortos en español y usar cognados para entender palabras nuevas. (Jeg skal lese korte tekster og bruke kognater for å forstå nye ord.)\n\nHablar (snakke): Voy a practicar diálogos con mis compañeros y no tener miedo de cometer errores. (Jeg skal øve på dialoger med medelever og ikke være redd for å gjøre feil.)\n\nEscribir (skrive): Voy a escribir un diario en español y usar conectores para hacer textos mejores. (Jeg skal skrive dagbok på spansk og bruke bindeord for å lage bedre tekster.)' },
        ],
        solution: 'En god læringsplan er konkret og realistisk. Velg strategier du faktisk vil bruke, og varier mellom de fire ferdighetene.',
        hints: ['Bruk «Voy a...» (Jeg skal...) for å beskrive planene', 'Tenk på hva du kan gjøre hjemme og på skolen'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la estrategia', definition: 'strategi' },
    { term: 'el vocabulario', definition: 'ordforråd' },
    { term: 'el mapa de palabras', definition: 'ordkart' },
    { term: 'la comprensión', definition: 'forståelse' },
    { term: 'la comunicación', definition: 'kommunikasjon' },
    { term: 'el error', definition: 'feil' },
  ],
};

export const CHAPTER_SPANSK_1_16_4: TextbookChapter = {
  id: 'spansk-1-16-4',
  courseId: 'spansk-1',
  chapterNumber: '16.4',
  title: 'Autoevaluación',
  subtitle: 'Egenvurdering',
  description: 'Vurder din egen fremgang i spansk og sett deg mål for videre læring.',
  estimatedMinutes: 40,
  competenceGoals: ['vurdere egen språklæring og sette seg realistiske mål for videre fremgang'],
  content: [
    {
      id: 'spansk-1-16-4-intro',
      type: 'text',
      content: `## Autoevaluación - Egenvurdering

Egenvurdering er en viktig del av språkopplæringen. Når du reflekterer over hva du kan, hva du har lært og hva du trenger å øve mer på, blir du en mer bevisst og effektiv språkslærer.

I dette kapittelet vurderer du dine egne ferdigheter og setter deg mål for videre læring.`
    },
    {
      id: 'spansk-1-16-4-def-1',
      type: 'definition',
      title: 'Hva kan jeg? (¿Qué sé hacer?)',
      content: `Bruk denne sjekklisten for å vurdere hva du kan på spansk:

**Lytting (Escuchar):**
- [ ] Jeg forstår enkle hilsener og hverdagsuttrykk
- [ ] Jeg kan forstå hovedinnholdet i korte samtaler
- [ ] Jeg kan følge enkle instruksjoner på spansk
- [ ] Jeg kan gjenkjenne viktige ord i en lengre tekst

**Lesing (Leer):**
- [ ] Jeg kan lese og forstå korte, enkle tekster
- [ ] Jeg kan finne spesifikk informasjon i en tekst
- [ ] Jeg kan forstå korte e-poster og meldinger
- [ ] Jeg kan gjette betydningen av ukjente ord fra konteksten

**Snakking (Hablar):**
- [ ] Jeg kan presentere meg selv og fortelle om familien min
- [ ] Jeg kan delta i enkle samtaler om hverdagslige emner
- [ ] Jeg kan bestille mat, handle og spørre om veien
- [ ] Jeg kan gi en kort presentasjon om et kjent emne

**Skriving (Escribir):**
- [ ] Jeg kan skrive korte meldinger og postkort
- [ ] Jeg kan skrive enkle e-poster (både formelle og uformelle)
- [ ] Jeg kan beskrive personer, steder og hendelser
- [ ] Jeg kan skrive en kort fortelling med innledning og avslutning`
    },
    {
      id: 'spansk-1-16-4-ex-1',
      type: 'example',
      title: 'Eksempel 1: Min vurdering',
      problem: 'Les dette eksempelet på en egenvurdering.',
      solution: `**Mi autoevaluación - Min egenvurdering:**

Lytting: Jeg forstår de fleste hverdagslige samtalene vi har i klassen, men jeg synes det er vanskelig når folk snakker fort. Jeg må øve på å lytte til spansk utenfor klasserommet.

Lesing: Jeg kan lese og forstå korte tekster ganske bra. Jeg bruker kognater for å gjette ord jeg ikke kjenner. Jeg vil gjerne lese en kort bok på spansk.

Snakking: Jeg kan presentere meg selv og fører enkle samtaler, men jeg er litt nervøs. Jeg gjør feil med verbformene noen ganger. Jeg må øve mer på å snakke spontant.

Skriving: Jeg kan skrive e-poster og postkort. Jeg trenger å øve mer på bindeord for å gjøre tekstene mine bedre.

**Mine mål:** Jeg vil bli flinkere til å snakke uten å tenke for mye. Jeg skal øve på dialoger med klassekameratene mine to ganger i uken.`
    },
    {
      id: 'spansk-1-16-4-def-2',
      type: 'definition',
      title: 'Sette mål (Establecer objetivos)',
      content: `**SMART-mål for språklæring:**

Gode mål er **SMART**:
- **S** - Spesifikke (Específicos): Hva nøyaktig vil du lære?
- **M** - Målbare (Medibles): Hvordan vet du at du har nådd målet?
- **A** - Ambisiose men oppnåelige (Alcanzables): Er målet realistisk?
- **R** - Relevante (Relevantes): Passer målet til dine behov?
- **T** - Tidsbegrensede (Temporales): Når skal du ha nådd målet?

**Eksempler på SMART-mål:**

| Dårlig mål | SMART-mål |
|-----------|-----------|
| Bli bedre i spansk | Lære 20 nye ord om mat innen to uker |
| Snakke mer | Øve på en dialog med en partner 3 ganger denne uken |
| Skrive bedre | Skrive et dagboknotat på spansk hver søndag i en måned |
| Forstå mer | Se en episode av en spansk serie med undertekster denne helgen |`
    },
    {
      id: 'spansk-1-16-4-def-3',
      type: 'definition',
      title: 'Refleksjonsspørsmål (Preguntas de reflexión)',
      content: `Bruk disse spørsmålene for å reflektere over læringen din:

**Om fremgangen din:**
- ¿Qué he aprendido este semestre? (Hva har jeg lært dette semesteret?)
- ¿Qué es lo que mejor hago en español? (Hva er jeg best på i spansk?)
- ¿Qué necesito mejorar? (Hva trenger jeg å forbedre?)
- ¿Qué errores cometo frecuentemente? (Hvilke feil gjør jeg ofte?)

**Om læringsstrategiene dine:**
- ¿Qué estrategias me funcionan bien? (Hvilke strategier fungerer bra for meg?)
- ¿Qué puedo hacer diferente? (Hva kan jeg gjøre annerledes?)
- ¿Cómo puedo practicar más fuera de clase? (Hvordan kan jeg øve mer utenfor timen?)

**Om motivasjonen din:**
- ¿Por qué estudio español? (Hvorfor lærer jeg spansk?)
- ¿Qué me motiva? (Hva motiverer meg?)
- ¿Qué quiero lograr? (Hva ønsker jeg a oppnå?)`
    },
    {
      id: 'spansk-1-16-4-ex-2',
      type: 'example',
      title: 'Eksempel 2: SMART-mål',
      problem: 'Lag et SMART-mål for spansklæringen din.',
      solution: `**Mål:** Jeg skal kunne bestille mat på en restaurant på spansk uten hjelp.

- **Spesifikt**: Lære alle uttrykkene for å bestille mat (forrett, hovedrett, dessert, drikke, regning)
- **Målbart**: Klare a gjennomføre et rollespill med læreren uten a stoppe opp
- **Oppnåelig**: Jeg kan allerede noen uttrykk, så dette er realistisk
- **Relevant**: Jeg skal på ferie til Spania i sommer
- **Tidsbegrenset**: Innen tre uker

**Min plan:**
- Uke 1: Lære alle ordene og uttrykkene utenat
- Uke 2: Øve på dialoger med en klassekamerat
- Uke 3: Gjore rollespill med læreren som «test»`
    },
    {
      id: 'spansk-1-16-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står S for i SMART-mål?',
        options: [
          { id: 'a', text: 'Spennende', isCorrect: false },
          { id: 'b', text: 'Spesifikke', isCorrect: true },
          { id: 'c', text: 'Store', isCorrect: false },
          { id: 'd', text: 'Spontane', isCorrect: false },
        ],
        solution: 'S i SMART står for Spesifikke (Específicos). Et godt mål er konkret og tydelig, ikke vagt. «Lære 20 nye ord» er spesifikt, mens «bli bedre i spansk» er for vagt.',
      },
    },
    {
      id: 'spansk-1-16-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «¿Qué necesito mejorar?»?',
        options: [
          { id: 'a', text: 'Hva har jeg lært?', isCorrect: false },
          { id: 'b', text: 'Hva er jeg best på?', isCorrect: false },
          { id: 'c', text: 'Hva trenger jeg å forbedre?', isCorrect: true },
          { id: 'd', text: 'Hva motiverer meg?', isCorrect: false },
        ],
        solution: '«¿Qué necesito mejorar?» betyr «Hva trenger jeg å forbedre?» og er et viktig refleksjonsspørsmål for egenvurdering.',
      },
    },
    {
      id: 'spansk-1-16-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Vurder dine ferdigheter på en skala fra 1-5 (1 = nybegynner, 5 = veldig god) og forklar kort.',
        subTasks: [
          { label: 'a', task: 'Lytting (Escuchar): Gi deg selv en poengsum og forklar.', solution: 'Eksempel: 3/5 - Jeg forstår enkle samtaler i klassen, men har vansker med å forstå spansk utenfor klasserommet, spesielt når folk snakker fort.' },
          { label: 'b', task: 'Lesing (Leer): Gi deg selv en poengsum og forklar.', solution: 'Eksempel: 4/5 - Jeg kan lese og forstå korte tekster ganske bra. Jeg bruker kognater og kontekst for å gjette ukjente ord.' },
          { label: 'c', task: 'Snakking (Hablar): Gi deg selv en poengsum og forklar.', solution: 'Eksempel: 2/5 - Jeg kan si enkle ting, men er nervøs og gjør mange feil. Jeg trenger å øve mer på å snakke spontant.' },
          { label: 'd', task: 'Skriving (Escribir): Gi deg selv en poengsum og forklar.', solution: 'Eksempel: 3/5 - Jeg kan skrive korte tekster som e-poster og postkort, men trenger å øve på bindeord og lengre tekster.' },
        ],
        solution: 'Ærlig egenvurdering hjelper deg a fokusere på det du trenger å øve på. Det er helt greit å ha ulike nivær i ulike ferdigheter!',
        hints: ['Vær ærlig - det handler ikke om å fa hoye poeng, men om å kjenne ditt eget niva'],
      },
    },
    {
      id: 'spansk-1-16-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag to SMART-mål for spansklæringen din: ett for den nærmeste uken og ett for det nærmeste halvåret.',
        subTasks: [
          { label: 'a', task: 'Kort mål (denne uken): Skriv et konkret mål du kan nå innen en uke.', solution: 'Eksempel: Denne uken skal jeg lære 10 nye spanske ord om reise (el avión, el tren, el hotel, la maleta, el pasaporte...) og bruke dem i tre setninger hver dag.' },
          { label: 'b', task: 'Langt mål (dette halvåret): Skriv et større mål du kan nå innen seks måneder.', solution: 'Eksempel: Innen sommeren skal jeg klare å føre en 5-minutters samtale på spansk om hverdagen min uten å bruke norsk. Jeg skal øve ved å snakke med en partner i klassen to ganger i uken.' },
        ],
        solution: 'Gode mål er spesifikke, målbare, oppnåelige, relevante og tidsbegrensede (SMART).',
        hints: ['Gjor målet konkret - hva, hvor mye, når?', 'Husk at målet skal være oppnåelig!'],
      },
    },
    {
      id: 'spansk-1-16-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Egenvurdering gjør deg til en bedre språkslærer:

- **Vurder ferdighetene dine** i lytting, lesing, snakking og skriving
- **Vær ærlig**: Identifiser både styrker og svakheter
- **Sett SMART-mål**: Spesifikke, målbare, oppnåelige, relevante og tidsbegrensede
- **Reflekter**: Tenk over hva som fungerer og hva du kan gjøre annerledes
- **Ha en plan**: Lag konkrete planer for hva du skal gjøre for å na målene dine
- **Husk**: A lære et språk er en reise - vær tålmodig med deg selv!

¡Buena suerte con tu aprendizaje del español! (Lykke til med spansklæringen din!)`
    },
    {
      id: 'spansk-1-16-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av disse er et godt SMART-mål?',
        options: [
          { id: 'a', text: 'Bli flinkere i spansk.', isCorrect: false },
          { id: 'b', text: 'Lære alt spansk ordforråd på en uke.', isCorrect: false },
          { id: 'c', text: 'Lære 15 nye ord om klær og bruke dem i setninger innen to uker.', isCorrect: true },
          { id: 'd', text: 'Kanskje øve litt på spansk noen ganger.', isCorrect: false },
        ],
        solution: '«Lære 15 nye ord om klær og bruke dem i setninger innen to uker» er et SMART-mål fordi det er spesifikt (15 ord om klær), målbart (kan du ordene?), oppnåelig (realistisk), relevant (ordforråd) og tidsbegrenset (to uker).',
      },
    },
    {
      id: 'spansk-1-16-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-16-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en refleksjonstekst på spansk (med norsk hjelp) der du svarer på disse tre spørsmålene.',
        subTasks: [
          { label: 'a', task: '1) ¿Qué he aprendido este año en español? 2) ¿Qué es lo más difícil para mí? 3) ¿Cuáles son mis objetivos para el próximo año?', solution: 'Este año he aprendido mucho español. (I år har jeg lært mye spansk.) Ahora puedo presentarme, hablar de mi familia y mis hobbies, y escribir correos electrónicos. (Nå kan jeg presentere meg, snakke om familien og hobbyene mine, og skrive e-poster.) También he aprendido mucho vocabulario nuevo y gramática básica. (Jeg har også lært mye nytt ordforråd og grunnleggende grammatikk.)\n\nLo más difícil para mí es hablar espontáneamente. (Det vanskeligste for meg er å snakke spontant.) A veces me pongo nervioso/a y olvido las palabras. (Noen ganger blir jeg nervøs og glemmer ordene.) También me resulta difícil la diferencia entre ser y estar. (Forskjellen mellom ser og estar er også vanskelig.)\n\nMis objetivos para el próximo año son: (Målene mine for neste år er:) Primero, quiero poder mantener una conversación de cinco minutos en español. (Først vil jeg klare å føre en fem minutters samtale på spansk.) Segundo, quiero leer un libro corto en español. (For det andre vil jeg lese en kort bok på spansk.) ¡Voy a trabajar mucho para conseguirlo! (Jeg skal jobbe hardt for å klare det!)' },
        ],
        solution: 'En god refleksjonstekst er ærlig og konkret. Bruk både spansk og norsk om du trenger det - det viktigste er å reflektere over læringen din.',
        hints: ['Det er greit å blande spansk og norsk', 'Vær ærlig om hva som er vanskelig og hva du vil forbedre'],
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'la autoevaluación', definition: 'egenvurdering' },
    { term: 'el objetivo', definition: 'mål' },
    { term: 'la reflexión', definition: 'refleksjon' },
    { term: 'la mejora', definition: 'forbedring' },
    { term: 'el progreso', definition: 'fremgang' },
    { term: 'la motivación', definition: 'motivasjon' },
  ],
};

// ============================================================================
// EXPORT
// ============================================================================

export const SPANSK_1_CHAPTERS_14_16: TextbookChapter[] = [
  CHAPTER_SPANSK_1_14_1, CHAPTER_SPANSK_1_14_2, CHAPTER_SPANSK_1_14_3, CHAPTER_SPANSK_1_14_4,
  CHAPTER_SPANSK_1_15_1, CHAPTER_SPANSK_1_15_2, CHAPTER_SPANSK_1_15_3, CHAPTER_SPANSK_1_15_4,
  CHAPTER_SPANSK_1_16_1, CHAPTER_SPANSK_1_16_2, CHAPTER_SPANSK_1_16_3, CHAPTER_SPANSK_1_16_4,
];