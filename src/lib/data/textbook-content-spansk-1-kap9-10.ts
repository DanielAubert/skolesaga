/* eslint-disable */
// @ts-nocheck
/**
 * Spansk niva 1 - Tekstbokinnhold kapittel 9-10
 *
 * Dekker LK20 laereplan for fremmedsprak niva 1
 * Struktur: teori -> eksempel -> oppgave (gjentatt)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Los medios de transporte - Transportmidler
// ============================================================================

export const CHAPTER_SPANSK_1_9_1: TextbookChapter = {
  id: 'spansk-1-9-1',
  courseId: 'spansk-1',
  chapterNumber: '9.1',
  title: 'Los medios de transporte',
  subtitle: 'Transportmidler',
  description: 'Laer om ulike transportmidler pa spansk og hvordan du snakker om reiser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'snakke om transportmidler',
    'bruke verbet ir (a ga) i presens',
    'uttrykke hvordan man reiser til ulike steder',
  ],
  content: [
    {
      id: 'spansk-1-9-1-intro',
      type: 'text',
      content: `## Transportmidler pa spansk

Nar du reiser i Spania eller Latin-Amerika, er det viktig a kunne snakke om transportmidler. Spansktalende land har ofte et godt tilbud av offentlig transport, med busser, tog og t-bane i storbyene.

I dette kapittelet laerer du ordene for de vanligste transportmidlene og hvordan du bruker dem i setninger med verbet **ir** (a ga).`,
    },
    {
      id: 'spansk-1-9-1-text-1',
      type: 'text',
      content: `## Vanlige transportmidler

| Spansk | Norsk | Artikkel |
|--------|-------|----------|
| el autobus | bussen | hankjonn |
| el tren | toget | hankjonn |
| el avion | flyet | hankjonn |
| el coche | bilen | hankjonn |
| la bicicleta | sykkelen | hunkjonn |
| el metro | t-banen | hankjonn |
| el taxi | taxien | hankjonn |
| el barco | baten | hankjonn |
| la moto | motorsykkelen | hunkjonn |
| a pie | til fots | - |`,
    },
    {
      id: 'spansk-1-9-1-def-1',
      type: 'definition',
      title: 'Ir en... (A reise med...)',
      content: `Pa spansk bruker vi uttrykket **ir en** + transportmiddel for a si hvordan vi reiser:

- Voy **en** autobus. (Jeg reiser med buss.)
- Voy **en** tren. (Jeg reiser med tog.)

**Unntak:** Nar du gar til fots, sier du: Voy **a pie**. (Jeg gar til fots.)`,
    },
    {
      id: 'spansk-1-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Transportmidler',
      problem: `Oversett til norsk:
a) el autobus
b) el tren
c) el avion`,
      solution: `a) el autobus = bussen
b) el tren = toget
c) el avion = flyet

Husk at alle spanske substantiver har en artikkel (el/la) som viser kjonnet!`,
    },
    {
      id: 'spansk-1-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse transportmidlene til spansk. Husk artikkel!',
        subTasks: [
          { label: 'a', task: 'bussen', solution: 'el autobus' },
          { label: 'b', task: 'toget', solution: 'el tren' },
          { label: 'c', task: 'flyet', solution: 'el avion' },
          { label: 'd', task: 'sykkelen', solution: 'la bicicleta' },
        ],
        solution: 'a) el autobus, b) el tren, c) el avion, d) la bicicleta',
        hints: ['Husk artikkel foran substantivet: el (hankjonn) eller la (hunkjonn)', 'Bicicleta er hunkjonn (la)'],
      },
    },
    {
      id: 'spansk-1-9-1-text-2',
      type: 'text',
      content: `## Verbet "ir" (a ga) i presens

"Ir" er et uregelmessig verb som er veldig viktig a kunne:

| Person | Boyning | Norsk |
|--------|---------|-------|
| yo | voy | jeg gar |
| tu | vas | du gar |
| el/ella/usted | va | han/hun gar |
| nosotros | vamos | vi gar |
| ellos/ellas/ustedes | van | de gar |

**Eksempler:**
- Yo voy en autobus. (Jeg reiser med buss.)
- Ella va en metro. (Hun tar t-banen.)
- Nosotros vamos a pie. (Vi gar til fots.)`,
    },
    {
      id: 'spansk-1-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Verbet ir med transportmidler',
      problem: `Fyll inn riktig form av "ir":
a) Yo ___ en tren.
b) Tu ___ en bicicleta.
c) Ella ___ a pie.`,
      solution: `a) Yo **voy** en tren. (Jeg reiser med tog.)
b) Tu **vas** en bicicleta. (Du sykler.)
c) Ella **va** a pie. (Hun gar til fots.)

Husk: yo -> voy, tu -> vas, el/ella -> va`,
    },
    {
      id: 'spansk-1-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av verbet "ir".',
        subTasks: [
          { label: 'a', task: 'Yo ___ en coche.', solution: 'voy' },
          { label: 'b', task: 'Tu ___ en metro.', solution: 'vas' },
          { label: 'c', task: 'Nosotros ___ en avion.', solution: 'vamos' },
          { label: 'd', task: 'Ellos ___ en autobus.', solution: 'van' },
        ],
        solution: 'a) voy, b) vas, c) vamos, d) van',
        hints: ['yo -> voy', 'tu -> vas', 'nosotros -> vamos', 'ellos -> van'],
      },
    },
    {
      id: 'spansk-1-9-1-text-3',
      type: 'text',
      content: `## Nyttige setninger om transport

| Spansk | Norsk |
|--------|-------|
| ?Como vas al colegio? | Hvordan reiser du til skolen? |
| Voy en autobus. | Jeg tar bussen. |
| Voy a pie. | Jeg gar til fots. |
| El tren sale a las 10. | Toget gar klokken 10. |
| ?Donde esta la parada de autobus? | Hvor er bussholdeplassen? |
| ?Cuando llega el proximo tren? | Nar kommer neste tog? |`,
    },
    {
      id: 'spansk-1-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Sporre om transport',
      problem: `Oversett til norsk:
a) ?Como vas al trabajo?
b) Voy en bicicleta.
c) El autobus llega en 5 minutos.`,
      solution: `a) Hvordan reiser du til jobb?
b) Jeg sykler. / Jeg reiser med sykkel.
c) Bussen kommer om 5 minutter.`,
    },
    {
      id: 'spansk-1-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'Hvordan reiser du til skolen?', solution: '?Como vas al colegio?' },
          { label: 'b', task: 'Jeg gar til fots.', solution: 'Voy a pie.' },
          { label: 'c', task: 'Vi tar bussen.', solution: 'Vamos en autobus.' },
        ],
        solution: 'a) ?Como vas al colegio? b) Voy a pie. c) Vamos en autobus.',
        hints: ['como = hvordan', 'a pie = til fots', 'nosotros -> vamos'],
      },
    },
    {
      id: 'spansk-1-9-1-text-4',
      type: 'text',
      content: `## Oppsummering - Viktige ord

| Spansk | Norsk |
|--------|-------|
| ir | a ga/reise |
| llegar | a komme/ankomme |
| salir | a dra/ga ut |
| la parada | holdeplassen |
| la estacion | stasjonen |
| el aeropuerto | flyplassen |
| el billete | billetten |

**Tips:** Oev deg pa a si hvordan du reiser til skolen, butikken og andre steder. Bruk uttrykket "Voy en..." eller "Voy a pie".`,
    },
    {
      id: 'spansk-1-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene pa norsk?',
        subTasks: [
          { label: 'a', task: 'la estacion', solution: 'stasjonen' },
          { label: 'b', task: 'el aeropuerto', solution: 'flyplassen' },
          { label: 'c', task: 'llegar', solution: 'a komme/ankomme' },
          { label: 'd', task: 'la parada', solution: 'holdeplassen' },
        ],
        solution: 'a) stasjonen, b) flyplassen, c) a komme/ankomme, d) holdeplassen',
        hints: ['estacion = stasjon', 'aeropuerto = flyplass (aero = luft, puerto = havn)'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2: En la ciudad - I byen
// ============================================================================

export const CHAPTER_SPANSK_1_9_2: TextbookChapter = {
  id: 'spansk-1-9-2',
  courseId: 'spansk-1',
  chapterNumber: '9.2',
  title: 'En la ciudad',
  subtitle: 'I byen',
  description: 'Laer om viktige steder i byen og hvordan du spor om veien.',
  estimatedMinutes: 45,
  competenceGoals: [
    'orientere seg i en by',
    'navngi viktige steder i byen',
    'sporre om og gi veibeskrivelser',
  ],
  content: [
    {
      id: 'spansk-1-9-2-intro',
      type: 'text',
      content: `## Steder i byen

Nar du er i en spansktalende by, er det nyttig a kunne navngi ulike steder og sporre om veien. I dette kapittelet laerer du ordene for de viktigste stedene og hvordan du orienterer deg i byen.`,
    },
    {
      id: 'spansk-1-9-2-text-1',
      type: 'text',
      content: `## Viktige steder i byen

| Spansk | Norsk | Artikkel |
|--------|-------|----------|
| la estacion | stasjonen | hunkjonn |
| el aeropuerto | flyplassen | hankjonn |
| el hospital | sykehuset | hankjonn |
| la farmacia | apoteket | hunkjonn |
| el banco | banken | hankjonn |
| la iglesia | kirken | hunkjonn |
| el parque | parken | hankjonn |
| la plaza | torget | hunkjonn |
| el museo | museet | hankjonn |
| el cine | kinoen | hankjonn |
| la tienda | butikken | hunkjonn |
| el centro comercial | kjoepesenteret | hankjonn |`,
    },
    {
      id: 'spansk-1-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Steder i byen',
      problem: `Oversett til norsk:
a) la farmacia
b) el banco
c) el museo`,
      solution: `a) la farmacia = apoteket
b) el banco = banken
c) el museo = museet`,
    },
    {
      id: 'spansk-1-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk med riktig artikkel.',
        subTasks: [
          { label: 'a', task: 'sykehuset', solution: 'el hospital' },
          { label: 'b', task: 'kirken', solution: 'la iglesia' },
          { label: 'c', task: 'parken', solution: 'el parque' },
          { label: 'd', task: 'kinoen', solution: 'el cine' },
        ],
        solution: 'a) el hospital, b) la iglesia, c) el parque, d) el cine',
        hints: ['Husk artikkel: el (hankjonn) eller la (hunkjonn)'],
      },
    },
    {
      id: 'spansk-1-9-2-text-2',
      type: 'text',
      content: `## Sporre om veien

Nar du vil finne frem i byen, kan du bruke disse frasene:

| Spansk | Norsk |
|--------|-------|
| ?Donde esta...? | Hvor er...? |
| ?Como llego a...? | Hvordan kommer jeg til...? |
| Perdone, ?puede ayudarme? | Unnskyld, kan De hjelpe meg? |
| ?Esta lejos? | Er det langt? |
| ?Esta cerca? | Er det naerme? |

**Veibeskrivelser:**

| Spansk | Norsk |
|--------|-------|
| todo recto | rett fram |
| a la derecha | til hoyre |
| a la izquierda | til venstre |
| al final de la calle | pa enden av gaten |
| en la esquina | pa hjornet |`,
    },
    {
      id: 'spansk-1-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sporre om veien',
      problem: `Oversett til norsk:
a) ?Donde esta el banco?
b) Siga todo recto y despues a la derecha.
c) Esta en la esquina.`,
      solution: `a) Hvor er banken?
b) Ga rett fram og sa til hoyre.
c) Det er pa hjornet.`,
    },
    {
      id: 'spansk-1-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'Hvor er sykehuset?', solution: '?Donde esta el hospital?' },
          { label: 'b', task: 'Ga rett fram.', solution: 'Siga todo recto.' },
          { label: 'c', task: 'Ga til venstre.', solution: 'Gire a la izquierda.' },
          { label: 'd', task: 'Det er pa hjornet.', solution: 'Esta en la esquina.' },
        ],
        solution: 'a) ?Donde esta el hospital? b) Siga todo recto. c) Gire a la izquierda. d) Esta en la esquina.',
        hints: ['donde = hvor', 'todo recto = rett fram', 'izquierda = venstre'],
      },
    },
    {
      id: 'spansk-1-9-2-text-3',
      type: 'text',
      content: `## Mer om veibeskrivelser

| Spansk | Norsk |
|--------|-------|
| Siga todo recto. | Ga rett fram. |
| Gire a la derecha. | Sving til hoyre. |
| Gire a la izquierda. | Sving til venstre. |
| Tome la primera calle a la derecha. | Ta forste gate til hoyre. |
| Tome la segunda calle a la izquierda. | Ta andre gate til venstre. |
| Esta al lado de... | Det er ved siden av... |
| Esta enfrente de... | Det er overfor... |

**Eksempel pa en veibeskrivelse:**
"Siga todo recto, tome la segunda calle a la derecha. El museo esta al lado de la iglesia."
(Ga rett fram, ta andre gate til hoyre. Museet er ved siden av kirken.)`,
    },
    {
      id: 'spansk-1-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Veibeskrivelse',
      problem: `Oversett til norsk:
"Siga todo recto, gire a la izquierda. La farmacia esta enfrente del parque."`,
      solution: `"Ga rett fram, sving til venstre. Apoteket er overfor parken."

Merk: "enfrente del" = overfor (enfrente de + el = enfrente del)`,
    },
    {
      id: 'spansk-1-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'Hvordan kommer jeg til museet?', solution: '?Como llego al museo?' },
          { label: 'b', task: 'Ta forste gate til venstre.', solution: 'Tome la primera calle a la izquierda.' },
          { label: 'c', task: 'Det er ved siden av kirken.', solution: 'Esta al lado de la iglesia.' },
        ],
        solution: 'a) ?Como llego al museo? b) Tome la primera calle a la izquierda. c) Esta al lado de la iglesia.',
        hints: ['al = a + el (til + den)', 'primera = forste', 'al lado de = ved siden av'],
      },
    },
    {
      id: 'spansk-1-9-2-text-4',
      type: 'text',
      content: `## Nyttige ord for a orientere seg

| Spansk | Norsk |
|--------|-------|
| la calle | gaten |
| la esquina | hjornet |
| el cruce | krysset |
| el semaforo | trafikklyset |
| el puente | broen |
| enfrente de | overfor |
| al lado de | ved siden av |
| cerca de | naerme |
| lejos de | langt fra |

**Tips:** Nar du spor om veien, start alltid med "Perdone" (Unnskyld) for a vaere hoflig!`,
    },
    {
      id: 'spansk-1-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene?',
        subTasks: [
          { label: 'a', task: 'la calle', solution: 'gaten' },
          { label: 'b', task: 'el semaforo', solution: 'trafikklyset' },
          { label: 'c', task: 'enfrente de', solution: 'overfor' },
          { label: 'd', task: 'el puente', solution: 'broen' },
        ],
        solution: 'a) gaten, b) trafikklyset, c) overfor, d) broen',
        hints: ['Disse ordene er nyttige nar du far veibeskrivelser'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3: Planear un viaje - Planlegge en reise
// ============================================================================

export const CHAPTER_SPANSK_1_9_3: TextbookChapter = {
  id: 'spansk-1-9-3',
  courseId: 'spansk-1',
  chapterNumber: '9.3',
  title: 'Planear un viaje',
  subtitle: 'Planlegge en reise',
  description: 'Laer a planlegge en reise og kjope billetter pa spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og snakke om reiser',
    'kjope billetter og bestille pa spansk',
    'bruke ir + a + infinitivo for framtidsplaner',
  ],
  content: [
    {
      id: 'spansk-1-9-3-intro',
      type: 'text',
      content: `## Planlegge en reise

Nar du skal reise i spansktalende land, er det viktig a kunne kjope billetter, bestille hotell og snakke om reiseplanene dine. I dette kapittelet laerer du de viktigste ordene og frasene for a planlegge en reise.`,
    },
    {
      id: 'spansk-1-9-3-text-1',
      type: 'text',
      content: `## Viktige reiseord

| Spansk | Norsk |
|--------|-------|
| el viaje | reisen |
| el billete | billetten |
| la maleta | kofferten |
| el pasaporte | passet |
| el hotel | hotellet |
| la reserva | reservasjonen |
| el equipaje | bagasjen |
| la guia | reiseguiden |
| el mapa | kartet |
| las vacaciones | ferien |`,
    },
    {
      id: 'spansk-1-9-3-def-1',
      type: 'definition',
      title: 'Ir + a + infinitivo (Framtidsuttrykk)',
      content: `For a snakke om framtidige planer bruker vi **ir + a + infinitivo**:

- **Voy a viajar** a Espana. (Jeg skal reise til Spania.)
- **Vas a visitar** el museo. (Du skal besoeke museet.)
- **Vamos a comer** en un restaurante. (Vi skal spise pa en restaurant.)

Denne strukturen tilsvarer det norske "skal" + infinitiv.`,
    },
    {
      id: 'spansk-1-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Reiseord',
      problem: `Oversett til norsk:
a) el billete
b) la maleta
c) el pasaporte`,
      solution: `a) el billete = billetten
b) la maleta = kofferten
c) el pasaporte = passet`,
    },
    {
      id: 'spansk-1-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'reisen', solution: 'el viaje' },
          { label: 'b', task: 'kofferten', solution: 'la maleta' },
          { label: 'c', task: 'bagasjen', solution: 'el equipaje' },
          { label: 'd', task: 'ferien', solution: 'las vacaciones' },
        ],
        solution: 'a) el viaje, b) la maleta, c) el equipaje, d) las vacaciones',
        hints: ['viaje = reise', 'vacaciones brukes alltid i flertall pa spansk'],
      },
    },
    {
      id: 'spansk-1-9-3-text-2',
      type: 'text',
      content: `## Kjope billetter

Nyttige fraser nar du kjoper billett:

| Spansk | Norsk |
|--------|-------|
| Quiero un billete a Madrid, por favor. | Jeg vil ha en billett til Madrid, takk. |
| ?Ida y vuelta? | Tur-retur? |
| Solo ida, por favor. | Bare en vei, takk. |
| ?Cuanto cuesta? | Hva koster det? |
| ?A que hora sale el tren? | Nar gar toget? |
| ?De que anden sale? | Fra hvilken perrong gar det? |
| ?Hay que hacer transbordo? | Ma man bytte? |`,
    },
    {
      id: 'spansk-1-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Pa togstasjonen',
      problem: `Les dialogen og svar pa sporsmalene:

*Cliente: Buenos dias. Quiero un billete a Barcelona, por favor.*
*Taquillero: ?Ida y vuelta?*
*Cliente: No, solo ida.*
*Taquillero: Son 35 euros. El tren sale a las 10:30 del anden 5.*

a) Hvor vil kunden reise?
b) Vil kunden ha tur-retur?
c) Hva koster billetten?`,
      solution: `a) Kunden vil reise til Barcelona.
b) Nei, kunden vil bare ha enkeltbillett (solo ida).
c) Billetten koster 35 euro.`,
    },
    {
      id: 'spansk-1-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'En billett til Sevilla, takk.', solution: 'Un billete a Sevilla, por favor.' },
          { label: 'b', task: 'Hva koster det?', solution: '?Cuanto cuesta?' },
          { label: 'c', task: 'Nar gar toget?', solution: '?A que hora sale el tren?' },
          { label: 'd', task: 'Ma man bytte?', solution: '?Hay que hacer transbordo?' },
        ],
        solution: 'a) Un billete a Sevilla, por favor. b) ?Cuanto cuesta? c) ?A que hora sale el tren? d) ?Hay que hacer transbordo?',
        hints: ['a = til (med byer)', 'por favor = vaer sa snill/takk'],
      },
    },
    {
      id: 'spansk-1-9-3-text-3',
      type: 'text',
      content: `## Snakke om reiseplaner med "ir + a + infinitivo"

| Spansk | Norsk |
|--------|-------|
| Voy a viajar a Espana. | Jeg skal reise til Spania. |
| Vamos a visitar Barcelona. | Vi skal besoeke Barcelona. |
| Van a quedarse en un hotel. | De skal bo pa et hotell. |
| ?Que vas a hacer en vacaciones? | Hva skal du gjore i ferien? |
| Voy a hacer la maleta. | Jeg skal pakke kofferten. |

**Tips:** Denne strukturen er veldig nyttig og enkel a bruke. Du trenger bare a kunne boyningen av "ir" + a + verbets infinitiv (grunnform).`,
    },
    {
      id: 'spansk-1-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Framtidsplaner',
      problem: `Oversett til spansk med "ir + a + infinitivo":
a) Jeg skal reise til Mexico.
b) Vi skal besoeke museet.
c) Hun skal kjope billetter.`,
      solution: `a) Voy a viajar a Mexico.
b) Vamos a visitar el museo.
c) Ella va a comprar billetes.

Husk: riktig form av "ir" + a + infinitiv`,
    },
    {
      id: 'spansk-1-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk. Bruk "ir + a + infinitivo".',
        subTasks: [
          { label: 'a', task: 'Jeg skal reise til Spania.', solution: 'Voy a viajar a Espana.' },
          { label: 'b', task: 'Du skal besoeke Barcelona.', solution: 'Vas a visitar Barcelona.' },
          { label: 'c', task: 'Vi skal spise pa en restaurant.', solution: 'Vamos a comer en un restaurante.' },
        ],
        solution: 'a) Voy a viajar a Espana. b) Vas a visitar Barcelona. c) Vamos a comer en un restaurante.',
        hints: ['yo -> voy a...', 'tu -> vas a...', 'nosotros -> vamos a...'],
      },
    },
    {
      id: 'spansk-1-9-3-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige fraser for reisen

| Situasjon | Spansk | Norsk |
|-----------|--------|-------|
| Kjope billett | Un billete, por favor. | En billett, takk. |
| Sporre om pris | ?Cuanto cuesta? | Hva koster det? |
| Sporre om tid | ?A que hora sale...? | Nar gar...? |
| Sporre om perrong | ?De que anden? | Fra hvilken perrong? |
| Framtidsplaner | Voy a viajar... | Jeg skal reise... |

**Tips:** Oev pa a lage hele setninger om reiseplanene dine. For eksempel: "El proximo verano voy a viajar a Espana. Voy a visitar Madrid y Barcelona." (Neste sommer skal jeg reise til Spania. Jeg skal besoeke Madrid og Barcelona.)`,
    },
    {
      id: 'spansk-1-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv ferdig setningene pa spansk.',
        subTasks: [
          { label: 'a', task: 'Si "God dag" og be om en billett til Valencia', solution: 'Buenos dias. Un billete a Valencia, por favor.' },
          { label: 'b', task: 'Spor hva det koster', solution: '?Cuanto cuesta?' },
          { label: 'c', task: 'Spor nar toget gar', solution: '?A que hora sale el tren?' },
        ],
        solution: 'a) Buenos dias. Un billete a Valencia, por favor. b) ?Cuanto cuesta? c) ?A que hora sale el tren?',
        hints: ['Buenos dias = God dag', 'por favor = takk/vaer sa snill'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4: En el hotel - Pa hotellet
// ============================================================================

export const CHAPTER_SPANSK_1_9_4: TextbookChapter = {
  id: 'spansk-1-9-4',
  courseId: 'spansk-1',
  chapterNumber: '9.4',
  title: 'En el hotel',
  subtitle: 'Pa hotellet',
  description: 'Laer a sjekke inn pa hotell og kommunisere med resepsjonen pa spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere pa hotell',
    'bestille hotellrom og sporre om fasiliteter',
    'handtere vanlige situasjoner pa hotell',
  ],
  content: [
    {
      id: 'spansk-1-9-4-intro',
      type: 'text',
      content: `## Pa hotellet

Nar du reiser til Spania eller Latin-Amerika, er det nyttig a kunne sjekke inn pa hotell og kommunisere med resepsjonen. I dette kapittelet laerer du de viktigste ordene og frasene for hotellopphold.`,
    },
    {
      id: 'spansk-1-9-4-text-1',
      type: 'text',
      content: `## Hotellvokabular

| Spansk | Norsk |
|--------|-------|
| el hotel | hotellet |
| la habitacion | rommet |
| la habitacion individual | enkeltrom |
| la habitacion doble | dobbeltrom |
| la recepcion | resepsjonen |
| la llave | nokkelen |
| la cama | sengen |
| la cama individual | enkeltseng |
| la cama doble | dobbeltseng |
| el ascensor | heisen |
| la piscina | bassenget |
| el desayuno incluido | frokost inkludert |`,
    },
    {
      id: 'spansk-1-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Hotellord',
      problem: `Oversett til norsk:
a) la habitacion doble
b) la recepcion
c) el desayuno incluido`,
      solution: `a) la habitacion doble = dobbeltrom
b) la recepcion = resepsjonen
c) el desayuno incluido = frokost inkludert`,
    },
    {
      id: 'spansk-1-9-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'enkeltrom', solution: 'la habitacion individual' },
          { label: 'b', task: 'nokkelen', solution: 'la llave' },
          { label: 'c', task: 'heisen', solution: 'el ascensor' },
          { label: 'd', task: 'bassenget', solution: 'la piscina' },
        ],
        solution: 'a) la habitacion individual, b) la llave, c) el ascensor, d) la piscina',
        hints: ['individual = enkelt', 'llave = nokkel'],
      },
    },
    {
      id: 'spansk-1-9-4-text-2',
      type: 'text',
      content: `## Bestille rom og sjekke inn

Nyttige fraser pa hotellet:

| Spansk | Norsk |
|--------|-------|
| Tengo una reserva a nombre de... | Jeg har en reservasjon i navnet... |
| Quiero reservar una habitacion. | Jeg vil bestille et rom. |
| ?Hay habitaciones libres? | Er det ledige rom? |
| ?Para cuantas noches? | For hvor mange netter? |
| Para dos noches, por favor. | For to netter, takk. |
| ?Cuanto cuesta la habitacion por noche? | Hva koster rommet per natt? |
| ?El desayuno esta incluido? | Er frokost inkludert? |
| ?A que hora es el desayuno? | Nar er frokosten? |`,
    },
    {
      id: 'spansk-1-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Pa resepsjonen',
      problem: `Les dialogen og svar pa sporsmalene:

*Huesped: Buenas tardes. Tengo una reserva a nombre de Garcia.*
*Recepcionista: Si, una habitacion doble para tres noches. ?Correcto?*
*Huesped: Si, correcto. ?A que hora es el desayuno?*
*Recepcionista: El desayuno es de 7 a 10. Su habitacion es la numero 302. Aqui tiene la llave.*

a) Hva slags rom har gjesten bestilt?
b) Hvor mange netter?
c) Nar er frokosten?`,
      solution: `a) Gjesten har bestilt et dobbeltrom (habitacion doble).
b) Tre netter (tres noches).
c) Frokosten er fra 7 til 10.`,
    },
    {
      id: 'spansk-1-9-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'Er det ledige rom?', solution: '?Hay habitaciones libres?' },
          { label: 'b', task: 'For to netter, takk.', solution: 'Para dos noches, por favor.' },
          { label: 'c', task: 'Hva koster rommet per natt?', solution: '?Cuanto cuesta la habitacion por noche?' },
          { label: 'd', task: 'Er frokost inkludert?', solution: '?El desayuno esta incluido?' },
        ],
        solution: 'a) ?Hay habitaciones libres? b) Para dos noches, por favor. c) ?Cuanto cuesta la habitacion por noche? d) ?El desayuno esta incluido?',
        hints: ['libre = ledig', 'por noche = per natt', 'incluido = inkludert'],
      },
    },
    {
      id: 'spansk-1-9-4-text-3',
      type: 'text',
      content: `## Problemer pa hotellet

Noen ganger fungerer ikke alt som det skal. Her er nyttige fraser:

| Spansk | Norsk |
|--------|-------|
| No funciona... | ... fungerer ikke |
| No funciona el aire acondicionado. | Klimaanlegget fungerer ikke. |
| No funciona la ducha. | Dusjen fungerer ikke. |
| No hay agua caliente. | Det er ikke varmt vann. |
| Necesito... | Jeg trenger... |
| Necesito mas toallas. | Jeg trenger flere handklaer. |
| Necesito otra llave. | Jeg trenger en ny nokkel. |
| La habitacion esta sucia. | Rommet er skittent. |`,
    },
    {
      id: 'spansk-1-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Problemer pa hotellet',
      problem: `Oversett til norsk:
a) No funciona el ascensor.
b) Necesito mas toallas.
c) ?Puede cambiar la habitacion?`,
      solution: `a) Heisen fungerer ikke.
b) Jeg trenger flere handklaer.
c) Kan De bytte rommet?`,
    },
    {
      id: 'spansk-1-9-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'Klimaanlegget fungerer ikke.', solution: 'No funciona el aire acondicionado.' },
          { label: 'b', task: 'Jeg trenger flere handklaer.', solution: 'Necesito mas toallas.' },
          { label: 'c', task: 'Det er ikke varmt vann.', solution: 'No hay agua caliente.' },
        ],
        solution: 'a) No funciona el aire acondicionado. b) Necesito mas toallas. c) No hay agua caliente.',
        hints: ['no funciona = fungerer ikke', 'necesito = jeg trenger', 'no hay = det finnes ikke'],
      },
    },
    {
      id: 'spansk-1-9-4-text-4',
      type: 'text',
      content: `## Sjekke inn og ut

| Spansk | Norsk |
|--------|-------|
| Quiero hacer el check-in. | Jeg vil sjekke inn. |
| Quiero hacer el check-out. | Jeg vil sjekke ut. |
| Aqui tiene su llave. | Her er nokkelen Deres. |
| Su habitacion es la numero 205. | Rommet Deres er nummer 205. |
| ?A que hora es el check-out? | Nar er utsjekking? |
| ?Puede pedir un taxi? | Kan De bestille en taxi? |

**Fasiliteter (Servicios):**

| Spansk | Norsk |
|--------|-------|
| el wifi | wifi |
| la television | TV-en |
| el aire acondicionado | klimaanlegget |
| el aparcamiento | parkeringen |
| la piscina | svommebassenget |
| el minibar | minibaren |`,
    },
    {
      id: 'spansk-1-9-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene og uttrykkene?',
        subTasks: [
          { label: 'a', task: 'el wifi', solution: 'wifi' },
          { label: 'b', task: 'la piscina', solution: 'svommebassenget' },
          { label: 'c', task: 'el aparcamiento', solution: 'parkeringen' },
          { label: 'd', task: 'el aire acondicionado', solution: 'klimaanlegget' },
        ],
        solution: 'a) wifi, b) svommebassenget, c) parkeringen, d) klimaanlegget',
        hints: ['piscina = basseng/svommebasseng', 'aire acondicionado = luft + kondisjonert = klimaanlegg'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.1: El verbo ser - Verbet a vaere (ser)
// ============================================================================

export const CHAPTER_SPANSK_1_10_1: TextbookChapter = {
  id: 'spansk-1-10-1',
  courseId: 'spansk-1',
  chapterNumber: '10.1',
  title: 'El verbo ser',
  subtitle: 'Verbet a vaere (ser)',
  description: 'Laer a boye og bruke verbet "ser" (a vaere) i presens.',
  estimatedMinutes: 45,
  competenceGoals: [
    'boye og bruke verbet ser',
    'beskrive nasjonalitet, yrke og personlighet med ser',
    'forstae forskjellen mellom ser og estar',
  ],
  content: [
    {
      id: 'spansk-1-10-1-intro',
      type: 'text',
      content: `## Verbet "ser" - a vaere

Pa spansk finnes det to verb som betyr "a vaere": **ser** og **estar**. I dette kapittelet laerer du om **ser**, som brukes til a snakke om **faste/permanente egenskaper** - hvem du er, hvor du kommer fra, hva du jobber med og hvordan du er som person.`,
    },
    {
      id: 'spansk-1-10-1-text-1',
      type: 'text',
      content: `## Boyning av "ser" i presens

| Person | Boyning | Norsk |
|--------|---------|-------|
| yo | soy | jeg er |
| tu | eres | du er |
| el/ella/usted | es | han/hun er / De er |
| nosotros/as | somos | vi er |
| ellos/ellas/ustedes | son | de er / Dere er |

**Merk:** "Ser" er et uregelmessig verb og ma laeres utenat. Boyningen ligner ikke pa noe fast monster.`,
    },
    {
      id: 'spansk-1-10-1-def-1',
      type: 'definition',
      title: 'Nar bruker vi "ser"?',
      content: `**Ser** brukes til a uttrykke:
- **Nasjonalitet:** Soy noruego. (Jeg er norsk.)
- **Yrke:** Es profesora. (Hun er laerer.)
- **Opprinnelse:** Somos de Oslo. (Vi er fra Oslo.)
- **Personlighet:** Eres muy simpatico. (Du er veldig hyggelig.)
- **Fysiske trekk:** Es alto. (Han er hoy.)
- **Klokkeslett:** Son las tres. (Klokken er tre.)
- **Materiale:** La mesa es de madera. (Bordet er av tre.)`,
    },
    {
      id: 'spansk-1-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Boyning av ser',
      problem: `Fyll inn riktig form av "ser":
a) Yo ___ estudiante.
b) Tu ___ amable.
c) Ella ___ espanola.`,
      solution: `a) Yo **soy** estudiante. (Jeg er student.)
b) Tu **eres** amable. (Du er snill.)
c) Ella **es** espanola. (Hun er spansk.)`,
    },
    {
      id: 'spansk-1-10-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "ser".',
        subTasks: [
          { label: 'a', task: 'Yo ___ de Noruega.', solution: 'soy' },
          { label: 'b', task: 'Tu ___ mi amigo.', solution: 'eres' },
          { label: 'c', task: 'El ___ profesor.', solution: 'es' },
          { label: 'd', task: 'Nosotros ___ estudiantes.', solution: 'somos' },
        ],
        solution: 'a) soy, b) eres, c) es, d) somos',
        hints: ['yo -> soy', 'tu -> eres', 'el/ella -> es', 'nosotros -> somos'],
      },
    },
    {
      id: 'spansk-1-10-1-text-2',
      type: 'text',
      content: `## Bruk av "ser"

**1. Nasjonalitet og opprinnelse:**
- Soy noruego/a. (Jeg er norsk.)
- Somos de Bergen. (Vi er fra Bergen.)
- Es mexicana. (Hun er meksikansk.)

**2. Yrke:**
- Es medico. (Han er lege.)
- Soy estudiante. (Jeg er student.)
- Son profesores. (De er laerere.)

**3. Personlighet og utseende:**
- Eres muy inteligente. (Du er veldig intelligent.)
- Es alta y delgada. (Hun er hoy og tynn.)
- Somos simpaticos. (Vi er hyggelige.)

**4. Klokkeslett:**
- ?Que hora es? - Es la una. (Hva er klokken? - Klokken er ett.)
- Son las cinco. (Klokken er fem.)`,
    },
    {
      id: 'spansk-1-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruk av ser',
      problem: `Oversett til spansk:
a) Jeg er fra Norge.
b) Hun er laerer.
c) Vi er hyggelige.`,
      solution: `a) Soy de Noruega.
b) Ella es profesora.
c) Somos simpaticos/simpaticas.

Merk: Adjektiver ma boyes etter kjonn. Simpaticos (hankjonn/blandet), simpaticas (hunkjonn).`,
    },
    {
      id: 'spansk-1-10-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk. Bruk riktig form av "ser".',
        subTasks: [
          { label: 'a', task: 'Han er 20 ar gammel.', solution: 'El tiene 20 anos.' },
          { label: 'b', task: 'De er fra Spania.', solution: 'Ellos son de Espana.' },
          { label: 'c', task: 'Du er veldig snill.', solution: 'Tu eres muy amable.' },
        ],
        solution: 'a) El tiene 20 anos. (Merk: alder uttrykkes med "tener"!) b) Ellos son de Espana. c) Tu eres muy amable.',
        hints: ['Husk: alder uttrykkes med "tener" pa spansk, ikke "ser"!', 'muy = veldig'],
      },
    },
    {
      id: 'spansk-1-10-1-text-3',
      type: 'text',
      content: `## Ser vs. Estar - En kort introduksjon

Pa spansk er det viktig a forstae forskjellen mellom **ser** og **estar**:

| Ser | Estar |
|-----|-------|
| Faste/permanente egenskaper | Midlertidige tilstander |
| Soy noruego. (Jeg er norsk.) | Estoy cansado. (Jeg er trott.) |
| Es inteligente. (Hun er intelligent.) | Esta enfermo. (Han er syk.) |
| Somos estudiantes. (Vi er studenter.) | Estamos contentos. (Vi er glade.) |

**Huskeregel:**
- **Ser** = ting som er slik "for alltid" (nasjonalitet, yrke, personlighet)
- **Estar** = ting som er slik "akkurat na" (humoor, helse, beliggenhet)`,
    },
    {
      id: 'spansk-1-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Ser eller estar?',
      problem: `Velg riktig verb (ser/estar):
a) Maria ___ espanola. (Maria er spansk.)
b) Hoy Juan ___ enfermo. (I dag er Juan syk.)
c) Nosotros ___ estudiantes. (Vi er studenter.)`,
      solution: `a) Maria **es** espanola. (nasjonalitet = ser)
b) Hoy Juan **esta** enfermo. (midlertidig tilstand = estar)
c) Nosotros **somos** estudiantes. (yrke/rolle = ser)`,
    },
    {
      id: 'spansk-1-10-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig form: bruk "ser" eller "estar".',
        subTasks: [
          { label: 'a', task: 'Ella ___ profesora. (laerer - yrke)', solution: 'es' },
          { label: 'b', task: 'Yo ___ cansado. (trott - midlertidig)', solution: 'estoy' },
          { label: 'c', task: 'Nosotros ___ de Noruega. (opprinnelse)', solution: 'somos' },
        ],
        solution: 'a) es (ser - yrke), b) estoy (estar - midlertidig tilstand), c) somos (ser - opprinnelse)',
        hints: ['Yrke og nasjonalitet = ser', 'Midlertidige tilstander = estar', 'Opprinnelse = ser'],
      },
    },
    {
      id: 'spansk-1-10-1-text-4',
      type: 'text',
      content: `## Vanlige uttrykk med "ser"

| Spansk | Norsk |
|--------|-------|
| Soy yo. | Det er meg. |
| ?Quien es? | Hvem er det? |
| Es importante. | Det er viktig. |
| Es posible. | Det er mulig. |
| Es necesario. | Det er nodvendig. |
| Es verdad. | Det er sant. |
| ?De donde eres? | Hvor er du fra? |
| ?Que hora es? | Hva er klokken? |`,
    },
    {
      id: 'spansk-1-10-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse uttrykkene?',
        subTasks: [
          { label: 'a', task: '?Quien es?', solution: 'Hvem er det?' },
          { label: 'b', task: 'Es importante.', solution: 'Det er viktig.' },
          { label: 'c', task: '?De donde eres?', solution: 'Hvor er du fra?' },
          { label: 'd', task: 'Es verdad.', solution: 'Det er sant.' },
        ],
        solution: 'a) Hvem er det? b) Det er viktig. c) Hvor er du fra? d) Det er sant.',
        hints: ['quien = hvem', 'importante = viktig', 'verdad = sannhet/sant'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: El verbo tener - Verbet a ha
// ============================================================================

export const CHAPTER_SPANSK_1_10_2: TextbookChapter = {
  id: 'spansk-1-10-2',
  courseId: 'spansk-1',
  chapterNumber: '10.2',
  title: 'El verbo tener',
  subtitle: 'Verbet a ha',
  description: 'Laer a boye og bruke verbet "tener" (a ha) i presens.',
  estimatedMinutes: 45,
  competenceGoals: [
    'boye og bruke verbet tener',
    'uttrykke eierskap, alder og tilstander med tener',
    'bruke tener que + infinitivo for a uttrykke plikt',
  ],
  content: [
    {
      id: 'spansk-1-10-2-intro',
      type: 'text',
      content: `## Verbet "tener" - a ha

"Tener" er et av de viktigste verbene pa spansk. Det brukes til a si hva man har, hvor gammel man er, og i mange faste uttrykk. "Tener" er uregelmessig, sa boyningen ma laeres utenat.`,
    },
    {
      id: 'spansk-1-10-2-text-1',
      type: 'text',
      content: `## Boyning av "tener" i presens

| Person | Boyning | Norsk |
|--------|---------|-------|
| yo | tengo | jeg har |
| tu | tienes | du har |
| el/ella/usted | tiene | han/hun har / De har |
| nosotros/as | tenemos | vi har |
| ellos/ellas/ustedes | tienen | de har / Dere har |

**Merk:** "Tener" er et uregelmessig verb. Legg merke til at stammen endrer seg fra "ten-" til "teng-" (yo) og "tien-" (tu, el/ella, ellos).`,
    },
    {
      id: 'spansk-1-10-2-def-1',
      type: 'definition',
      title: 'Bruksomrader for "tener"',
      content: `"Tener" brukes til a uttrykke:
- **Eierskap:** Tengo un perro. (Jeg har en hund.)
- **Alder:** Tengo 15 anos. (Jeg er 15 ar gammel.)
- **Tilstander:** Tengo hambre. (Jeg er sulten - bokstavelig: Jeg har sult.)
- **Plikt:** Tengo que estudiar. (Jeg ma studere.)`,
    },
    {
      id: 'spansk-1-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Boyning av tener',
      problem: `Fyll inn riktig form av "tener":
a) Yo ___ un gato.
b) Tu ___ 16 anos.
c) Ella ___ dos hermanos.`,
      solution: `a) Yo **tengo** un gato. (Jeg har en katt.)
b) Tu **tienes** 16 anos. (Du er 16 ar gammel.)
c) Ella **tiene** dos hermanos. (Hun har to brodre.)`,
    },
    {
      id: 'spansk-1-10-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "tener".',
        subTasks: [
          { label: 'a', task: 'Yo ___ un coche.', solution: 'tengo' },
          { label: 'b', task: 'Tu ___ una bicicleta.', solution: 'tienes' },
          { label: 'c', task: 'El ___ un hermano.', solution: 'tiene' },
          { label: 'd', task: 'Nosotros ___ dos gatos.', solution: 'tenemos' },
        ],
        solution: 'a) tengo, b) tienes, c) tiene, d) tenemos',
        hints: ['yo -> tengo', 'tu -> tienes', 'el/ella -> tiene', 'nosotros -> tenemos'],
      },
    },
    {
      id: 'spansk-1-10-2-text-2',
      type: 'text',
      content: `## Alder med "tener"

Pa spansk bruker man **tener** for a si hvor gammel man er (ikke "ser"!):

| Spansk | Norsk |
|--------|-------|
| ?Cuantos anos tienes? | Hvor gammel er du? |
| Tengo 15 anos. | Jeg er 15 ar (gammel). |
| Mi madre tiene 45 anos. | Moren min er 45 ar. |
| El bebe tiene 6 meses. | Babyen er 6 maneder. |

**Merk:** Pa spansk sier man bokstavelig "Jeg har 15 ar" i stedet for "Jeg er 15 ar gammel".

## Uttrykk med "tener"

| Spansk | Norsk (bokstavelig) | Norsk (betydning) |
|--------|--------------------|--------------------|
| tener hambre | ha sult | vaere sulten |
| tener sed | ha torst | vaere torst |
| tener frio | ha kulde | fryse |
| tener calor | ha varme | vaere varm |
| tener sueno | ha sovn | vaere trott/sovnig |
| tener miedo | ha frykt | vaere redd |
| tener razon | ha rett | ha rett |
| tener prisa | ha hastverk | ha det travelt |`,
    },
    {
      id: 'spansk-1-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Uttrykk med tener',
      problem: `Oversett til norsk:
a) Tengo hambre.
b) ?Tienes frio?
c) El tiene mucho sueno.`,
      solution: `a) Tengo hambre. = Jeg er sulten.
b) ?Tienes frio? = Fryser du?
c) El tiene mucho sueno. = Han er veldig sovnig.

Merk: "mucho" (mye/veldig) brukes med tener-uttrykk, ikke "muy".`,
    },
    {
      id: 'spansk-1-10-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk. Bruk riktig form av "tener".',
        subTasks: [
          { label: 'a', task: 'Jeg er 16 ar gammel.', solution: 'Tengo 16 anos.' },
          { label: 'b', task: 'Hun er sulten.', solution: 'Ella tiene hambre.' },
          { label: 'c', task: 'Vi er torste.', solution: 'Nosotros tenemos sed.' },
        ],
        solution: 'a) Tengo 16 anos. b) Ella tiene hambre. c) Nosotros tenemos sed.',
        hints: ['Alder = tener + ar', 'Sulten = tener hambre', 'Torst = tener sed'],
      },
    },
    {
      id: 'spansk-1-10-2-text-3',
      type: 'text',
      content: `## "Tener que" + infinitivo = a matte

For a si at man **ma** gjore noe, bruker vi **tener que + infinitivo**:

| Spansk | Norsk |
|--------|-------|
| Tengo que estudiar. | Jeg ma studere. |
| Tienes que comer. | Du ma spise. |
| Tiene que ir al medico. | Han/hun ma ga til legen. |
| Tenemos que hacer los deberes. | Vi ma gjore leksene. |
| Tienen que dormir. | De ma sove. |

**Struktur:** tener (boyget) + que + infinitiv

Denne strukturen er veldig nyttig for a uttrykke plikt og nodvendighet.`,
    },
    {
      id: 'spansk-1-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Tener que + infinitivo',
      problem: `Oversett til spansk med "tener que":
a) Jeg ma studere.
b) Du ma sove.
c) Vi ma ga til butikken.`,
      solution: `a) Tengo que estudiar.
b) Tienes que dormir.
c) Tenemos que ir a la tienda.`,
    },
    {
      id: 'spansk-1-10-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk. Bruk "tener que + infinitivo".',
        subTasks: [
          { label: 'a', task: 'Jeg ma gjore leksene.', solution: 'Tengo que hacer los deberes.' },
          { label: 'b', task: 'Han ma ga til legen.', solution: 'El tiene que ir al medico.' },
          { label: 'c', task: 'Vi ma spise.', solution: 'Tenemos que comer.' },
        ],
        solution: 'a) Tengo que hacer los deberes. b) El tiene que ir al medico. c) Tenemos que comer.',
        hints: ['hacer = a gjore', 'los deberes = leksene', 'ir al medico = ga til legen'],
      },
    },
    {
      id: 'spansk-1-10-2-text-4',
      type: 'text',
      content: `## Oppsummering - Tener i ulike sammenhenger

| Bruk | Eksempel | Norsk |
|------|----------|-------|
| Eierskap | Tengo un perro. | Jeg har en hund. |
| Alder | Tiene 30 anos. | Han/hun er 30 ar. |
| Tilstand | Tenemos frio. | Vi fryser. |
| Plikt | Tienes que estudiar. | Du ma studere. |

**Tips:** Oev deg pa a bruke "tener" i daglige setninger:
- Si hvor gammel du er
- Si hva du har
- Si hva du foeler (sulten, trott, kald)
- Si hva du ma gjore`,
    },
    {
      id: 'spansk-1-10-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse uttrykkene?',
        subTasks: [
          { label: 'a', task: 'Tengo hambre.', solution: 'Jeg er sulten.' },
          { label: 'b', task: 'Tiene 20 anos.', solution: 'Han/hun er 20 ar.' },
          { label: 'c', task: 'Tenemos que ir.', solution: 'Vi ma dra/ga.' },
          { label: 'd', task: 'Tienes sueno.', solution: 'Du er sovnig/trott.' },
        ],
        solution: 'a) Jeg er sulten. b) Han/hun er 20 ar. c) Vi ma dra/ga. d) Du er sovnig/trott.',
        hints: ['hambre = sult', 'anos = ar', 'tener que = a matte', 'sueno = sovn'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Verbos regulares - Regelmessige verb
// ============================================================================

export const CHAPTER_SPANSK_1_10_3: TextbookChapter = {
  id: 'spansk-1-10-3',
  courseId: 'spansk-1',
  chapterNumber: '10.3',
  title: 'Verbos regulares',
  subtitle: 'Regelmessige verb',
  description: 'Laer a boye regelmessige verb i presens pa spansk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'boye regelmessige verb i presens',
    'forstae de tre verbgruppene -ar, -er, -ir',
    'bruke vanlige verb i setninger',
  ],
  content: [
    {
      id: 'spansk-1-10-3-intro',
      type: 'text',
      content: `## Regelmessige verb pa spansk

Spanske verb deles inn i tre grupper basert pa endelsen i infinitiv:
- **-ar** verb (f.eks. hablar - a snakke)
- **-er** verb (f.eks. comer - a spise)
- **-ir** verb (f.eks. vivir - a bo/leve)

Nar du kan boyingsmonsteret for hver gruppe, kan du boye hundrevis av verb riktig!`,
    },
    {
      id: 'spansk-1-10-3-text-1',
      type: 'text',
      content: `## Gruppe 1: Verb pa -ar (hablar - a snakke)

| Person | Endelse | hablar |
|--------|---------|--------|
| yo | -o | hablo |
| tu | -as | hablas |
| el/ella/usted | -a | habla |
| nosotros/as | -amos | hablamos |
| ellos/ellas/ustedes | -an | hablan |

**Vanlige -ar verb:**
- hablar (snakke)
- estudiar (studere)
- trabajar (jobbe)
- comprar (kjope)
- cocinar (lage mat)
- escuchar (hore/lytte)
- viajar (reise)
- bailar (danse)
- cantar (synge)
- llamar (ringe/kalle)`,
    },
    {
      id: 'spansk-1-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Boye -ar verb',
      problem: `Boy verbet "estudiar" (a studere) i alle personer:
- Stamme: estudi-
- Legg til endelsene: -o, -as, -a, -amos, -an`,
      solution: `| Person | estudiar |
|--------|----------|
| yo | estudio |
| tu | estudias |
| el/ella/usted | estudia |
| nosotros/as | estudiamos |
| ellos/ellas/ustedes | estudian |`,
    },
    {
      id: 'spansk-1-10-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "hablar" (a snakke).',
        subTasks: [
          { label: 'a', task: 'Yo ___ espanol.', solution: 'hablo' },
          { label: 'b', task: 'Tu ___ ingles.', solution: 'hablas' },
          { label: 'c', task: 'Ella ___ frances.', solution: 'habla' },
          { label: 'd', task: 'Nosotros ___ noruego.', solution: 'hablamos' },
        ],
        solution: 'a) hablo, b) hablas, c) habla, d) hablamos',
        hints: ['yo -> -o', 'tu -> -as', 'el/ella -> -a', 'nosotros -> -amos'],
      },
    },
    {
      id: 'spansk-1-10-3-text-2',
      type: 'text',
      content: `## Gruppe 2: Verb pa -er (comer - a spise)

| Person | Endelse | comer |
|--------|---------|-------|
| yo | -o | como |
| tu | -es | comes |
| el/ella/usted | -e | come |
| nosotros/as | -emos | comemos |
| ellos/ellas/ustedes | -en | comen |

**Vanlige -er verb:**
- comer (spise)
- beber (drikke)
- leer (lese)
- aprender (laere)
- comprender (forsta)
- correr (lope)
- creer (tro)
- vender (selge)

## Gruppe 3: Verb pa -ir (vivir - a bo/leve)

| Person | Endelse | vivir |
|--------|---------|-------|
| yo | -o | vivo |
| tu | -es | vives |
| el/ella/usted | -e | vive |
| nosotros/as | -imos | vivimos |
| ellos/ellas/ustedes | -en | viven |

**Vanlige -ir verb:**
- vivir (bo/leve)
- escribir (skrive)
- abrir (apne)
- decidir (bestemme)
- recibir (motta)
- subir (ga opp)`,
    },
    {
      id: 'spansk-1-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne de tre gruppene',
      problem: `Boy verbene med "yo" og "nosotros":
- hablar (snakke) - ar verb
- comer (spise) - er verb
- vivir (bo) - ir verb`,
      solution: `**yo:**
- habl**o** (jeg snakker)
- com**o** (jeg spiser)
- viv**o** (jeg bor)

**nosotros:**
- habl**amos** (vi snakker)
- com**emos** (vi spiser)
- viv**imos** (vi bor)

Merk: For "yo" er endelsen alltid **-o** uansett gruppe!`,
    },
    {
      id: 'spansk-1-10-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig verbform.',
        subTasks: [
          { label: 'a', task: 'Yo ___ en Oslo. (vivir)', solution: 'vivo' },
          { label: 'b', task: 'Ella ___ una carta. (escribir)', solution: 'escribe' },
          { label: 'c', task: 'Nosotros ___ pizza. (comer)', solution: 'comemos' },
          { label: 'd', task: 'Tu ___ un libro. (leer)', solution: 'lees' },
        ],
        solution: 'a) vivo, b) escribe, c) comemos, d) lees',
        hints: ['Finn stammen og legg til riktig endelse', '-ir og -er har like endelser unntatt nosotros'],
      },
    },
    {
      id: 'spansk-1-10-3-text-3',
      type: 'text',
      content: `## Sammenligning av endelser

| Person | -ar | -er | -ir |
|--------|-----|-----|-----|
| yo | -o | -o | -o |
| tu | -as | -es | -es |
| el/ella | -a | -e | -e |
| nosotros | -amos | -emos | -imos |
| ellos | -an | -en | -en |

**Viktige observasjoner:**
1. **Yo-formen** er alltid **-o** uansett gruppe
2. **-er** og **-ir** verb har **like endelser** bortsett fra nosotros (-emos vs -imos)
3. **-ar** verb har **a** i endelsene, **-er/-ir** har **e**

**Tips:** Laer -ar-verbene forst, de er de vanligste!`,
    },
    {
      id: 'spansk-1-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Bruke verb i setninger',
      problem: `Oversett til spansk:
a) Jeg studerer spansk.
b) Hun bor i Madrid.
c) Vi spiser middag klokken atte.`,
      solution: `a) Yo estudio espanol.
b) Ella vive en Madrid.
c) Nosotros cenamos a las ocho.

Merk: "cenar" (a spise middag/kveldsmat) er ogsa et regelmessig -ar verb.`,
    },
    {
      id: 'spansk-1-10-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk. Bruk riktig verbform.',
        subTasks: [
          { label: 'a', task: 'Jeg snakker spansk.', solution: 'Yo hablo espanol.' },
          { label: 'b', task: 'Hun skriver et brev.', solution: 'Ella escribe una carta.' },
          { label: 'c', task: 'Vi leser en bok.', solution: 'Nosotros leemos un libro.' },
        ],
        solution: 'a) Yo hablo espanol. b) Ella escribe una carta. c) Nosotros leemos un libro.',
        hints: ['hablar -> hablo (yo)', 'escribir -> escribe (ella)', 'leer -> leemos (nosotros)'],
      },
    },
    {
      id: 'spansk-1-10-3-text-4',
      type: 'text',
      content: `## Setninger med regelmessige verb

| Spansk | Norsk |
|--------|-------|
| Hablo espanol y noruego. | Jeg snakker spansk og norsk. |
| El estudia matematicas. | Han studerer matematikk. |
| Vivimos en una casa grande. | Vi bor i et stort hus. |
| ?Comes fruta? | Spiser du frukt? |
| Ella escribe en su diario. | Hun skriver i dagboken sin. |
| Ellos trabajan en un hospital. | De jobber pa et sykehus. |

**Tips:** Oev deg pa a lage egne setninger med disse verbene. Proev a kombinere verb med ordforrad du allerede kan!`,
    },
    {
      id: 'spansk-1-10-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'Jeg laerer spansk.', solution: 'Yo aprendo espanol.' },
          { label: 'b', task: 'Hun bor i Barcelona.', solution: 'Ella vive en Barcelona.' },
          { label: 'c', task: 'Vi lager mat.', solution: 'Nosotros cocinamos.' },
          { label: 'd', task: 'Han kjoper en bok.', solution: 'El compra un libro.' },
        ],
        solution: 'a) Yo aprendo espanol. b) Ella vive en Barcelona. c) Nosotros cocinamos. d) El compra un libro.',
        hints: ['aprender (-er) = a laere', 'vivir (-ir) = a bo', 'cocinar (-ar) = a lage mat', 'comprar (-ar) = a kjope'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.4: Repaso general - Repetisjon
// ============================================================================

export const CHAPTER_SPANSK_1_10_4: TextbookChapter = {
  id: 'spansk-1-10-4',
  courseId: 'spansk-1',
  chapterNumber: '10.4',
  title: 'Repaso general',
  subtitle: 'Repetisjon',
  description: 'Repetisjon av alt du har laert i Spansk niva 1.',
  estimatedMinutes: 50,
  competenceGoals: [
    'oppsummere og repetere sentrale emner',
    'bruke ordforrad og grammatikk fra hele kurset',
    'kommunisere i enkle hverdagssituasjoner pa spansk',
  ],
  content: [
    {
      id: 'spansk-1-10-4-intro',
      type: 'text',
      content: `## Repetisjon av Spansk niva 1

Felicidades! (Gratulerer!) Du har nadd slutten av Spansk niva 1. I dette kapittelet repeterer vi de viktigste temaene du har laert. Bruk dette kapittelet til a teste deg selv og befeste kunnskapene dine.`,
    },
    {
      id: 'spansk-1-10-4-text-1',
      type: 'text',
      content: `## Oversikt over viktige verb

**ser (a vaere - permanente egenskaper)**
| Person | Form |
|--------|------|
| yo | soy |
| tu | eres |
| el/ella/usted | es |
| nosotros/as | somos |
| ellos/ellas/ustedes | son |

**tener (a ha)**
| Person | Form |
|--------|------|
| yo | tengo |
| tu | tienes |
| el/ella/usted | tiene |
| nosotros/as | tenemos |
| ellos/ellas/ustedes | tienen |

**ir (a ga)**
| Person | Form |
|--------|------|
| yo | voy |
| tu | vas |
| el/ella/usted | va |
| nosotros/as | vamos |
| ellos/ellas/ustedes | van |`,
    },
    {
      id: 'spansk-1-10-4-example-1',
      type: 'example',
      title: 'Eksempel 1: ser, tener og ir',
      problem: `Fyll inn riktig form av "ser", "tener" eller "ir":
a) Yo ___ estudiante. (ser)
b) El ___ un perro. (tener)
c) Nosotros ___ a la playa. (ir)`,
      solution: `a) Yo **soy** estudiante. (Jeg er student.)
b) El **tiene** un perro. (Han har en hund.)
c) Nosotros **vamos** a la playa. (Vi drar til stranden.)`,
    },
    {
      id: 'spansk-1-10-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "ser", "tener" eller "ir".',
        subTasks: [
          { label: 'a', task: 'Tu ___ muy simpatico. (ser)', solution: 'eres' },
          { label: 'b', task: 'Ella ___ 17 anos. (tener)', solution: 'tiene' },
          { label: 'c', task: 'Yo ___ en autobus. (ir)', solution: 'voy' },
          { label: 'd', task: 'Nosotros ___ de Noruega. (ser)', solution: 'somos' },
        ],
        solution: 'a) eres, b) tiene, c) voy, d) somos',
        hints: ['ser: soy, eres, es, somos, son', 'tener: tengo, tienes, tiene, tenemos, tienen', 'ir: voy, vas, va, vamos, van'],
      },
    },
    {
      id: 'spansk-1-10-4-text-2',
      type: 'text',
      content: `## Regelmessige verb - Boyningsmonster

| Person | -ar (hablar) | -er (comer) | -ir (vivir) |
|--------|-------------|-------------|-------------|
| yo | hablo | como | vivo |
| tu | hablas | comes | vives |
| el/ella | habla | come | vive |
| nosotros | hablamos | comemos | vivimos |
| ellos | hablan | comen | viven |

**Viktige grammatikkpunkter:**
- **Artikler:** el/la (bestemt), un/una (ubestemt)
- **Adjektivsamsvar:** adjektivet ma samsvare i kjonn og tall med substantivet
  - el chico alto / la chica alta
  - los chicos altos / las chicas altas
- **Ir + a + infinitivo** = framtidsuttrykk (Voy a estudiar = Jeg skal studere)
- **Tener que + infinitivo** = plikt (Tengo que estudiar = Jeg ma studere)`,
    },
    {
      id: 'spansk-1-10-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Regelmessige verb',
      problem: `Boy verbene:
a) estudiar med "yo"
b) comer med "ella"
c) vivir med "nosotros"`,
      solution: `a) yo estudi**o** (jeg studerer)
b) ella com**e** (hun spiser)
c) nosotros viv**imos** (vi bor)`,
    },
    {
      id: 'spansk-1-10-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig verbform.',
        subTasks: [
          { label: 'a', task: 'Ella ___ musica. (escuchar)', solution: 'escucha' },
          { label: 'b', task: 'Yo ___ en Oslo. (vivir)', solution: 'vivo' },
          { label: 'c', task: 'Tu ___ bien el espanol. (aprender)', solution: 'aprendes' },
          { label: 'd', task: 'Nosotros ___ en un restaurante. (comer)', solution: 'comemos' },
        ],
        solution: 'a) escucha, b) vivo, c) aprendes, d) comemos',
        hints: ['escuchar er et -ar verb', 'vivir er et -ir verb', 'aprender er et -er verb', 'comer er et -er verb'],
      },
    },
    {
      id: 'spansk-1-10-4-text-3',
      type: 'text',
      content: `## Viktig ordforrad - Oppsummering

**Hilsener:**
- Hola, Buenos dias, Buenas tardes, Buenas noches, Adios, Hasta luego

**Familie:**
- la madre, el padre, la hermana, el hermano, los abuelos

**Mat og drikke:**
- el pan, el queso, el agua, la leche, la fruta, la carne

**Transport:**
- el autobus, el tren, el avion, el coche, la bicicleta

**I byen:**
- la estacion, el hospital, la farmacia, el banco, el museo

**Pa hotellet:**
- la habitacion, la recepcion, la llave, el desayuno

**Nyttige uttrykk:**
- Por favor (vaer sa snill), Gracias (takk), De nada (ingen arsak)
- ?Cuanto cuesta? (Hva koster det?)
- ?Donde esta...? (Hvor er...?)
- Me gusta... (Jeg liker...)`,
    },
    {
      id: 'spansk-1-10-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Ordforrad',
      problem: `Oversett til norsk:
a) la estacion
b) el desayuno
c) la hermana`,
      solution: `a) la estacion = stasjonen
b) el desayuno = frokosten
c) la hermana = sosteren`,
    },
    {
      id: 'spansk-1-10-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk med riktig artikkel.',
        subTasks: [
          { label: 'a', task: 'bilen', solution: 'el coche' },
          { label: 'b', task: 'apoteket', solution: 'la farmacia' },
          { label: 'c', task: 'billetten', solution: 'el billete' },
          { label: 'd', task: 'resepsjonen', solution: 'la recepcion' },
        ],
        solution: 'a) el coche, b) la farmacia, c) el billete, d) la recepcion',
        hints: ['Husk artikkel: el (hankjonn) eller la (hunkjonn)'],
      },
    },
    {
      id: 'spansk-1-10-4-text-4',
      type: 'text',
      content: `## Nyttige fraser fra hele kurset

**Presentere seg:**
- Me llamo... (Jeg heter...)
- Soy de Noruega. (Jeg er fra Norge.)
- Tengo 16 anos. (Jeg er 16 ar.)

**Pa togstasjonen:**
- Un billete a..., por favor. (En billett til..., takk.)
- ?A que hora sale el tren? (Nar gar toget?)
- ?Cuanto cuesta? (Hva koster det?)

**Pa hotellet:**
- Tengo una reserva. (Jeg har en reservasjon.)
- ?Hay habitaciones libres? (Er det ledige rom?)
- ?El desayuno esta incluido? (Er frokost inkludert?)

**Sporre om veien:**
- ?Donde esta...? (Hvor er...?)
- ?Como llego a...? (Hvordan kommer jeg til...?)
- Siga todo recto. (Ga rett fram.)`,
    },
    {
      id: 'spansk-1-10-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-10-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk.',
        subTasks: [
          { label: 'a', task: 'En billett til Barcelona, takk.', solution: 'Un billete a Barcelona, por favor.' },
          { label: 'b', task: 'Er det ledige rom?', solution: '?Hay habitaciones libres?' },
          { label: 'c', task: 'Hvor er museet?', solution: '?Donde esta el museo?' },
          { label: 'd', task: 'Ga rett fram.', solution: 'Siga todo recto.' },
        ],
        solution: 'a) Un billete a Barcelona, por favor. b) ?Hay habitaciones libres? c) ?Donde esta el museo? d) Siga todo recto.',
        hints: ['a = til (med byer)', 'libre = ledig', 'donde = hvor', 'todo recto = rett fram'],
      },
    },
    {
      id: 'spansk-1-10-4-text-5',
      type: 'text',
      content: `## Hva har du laert?

I Spansk niva 1 har du laert:

1. **Hilsener og hoflighetsfraser** - Hola, Buenos dias, Gracias, Por favor
2. **Presentere deg selv** - Me llamo..., Soy de..., Tengo... anos
3. **Tall og farger** - uno, dos, tres... rojo, azul, verde...
4. **Familie** - madre, padre, hermana, hermano, abuelos
5. **Tid og dager** - lunes, martes... Son las tres.
6. **Mat og restaurantbesok** - Quiero..., La cuenta, por favor.
7. **Transport og reise** - el tren, el billete, Voy en...
8. **I byen** - la estacion, la farmacia, ?Donde esta...?
9. **Pa hotellet** - la habitacion, ?Hay habitaciones libres?
10. **Verb** - ser, tener, ir, regelmessige verb (-ar, -er, -ir)

**Muy bien hecho! Sigue asi!** (Veldig bra gjort! Fortsett slik!)`,
    },
    {
      id: 'spansk-1-10-4-note-1',
      type: 'note',
      title: 'Tips til videre laering',
      content: `For a fortsette a forbedre spansken din:
- Hor pa spansk musikk og se spanske filmer/serier med undertekster
- Oev deg pa a snakke hoyt - uttale er viktig!
- Skriv dagbok pa spansk
- Bruk sprakappar som Duolingo eller Babbel
- Finn en sprakpartner a ove med
- Les enkle tekster pa spansk (barneboker, nyheter for unge)
- Folg spanskspraklige sider pa sosiale medier`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SPANSK_1_CHAPTERS_9_10: TextbookChapter[] = [
  CHAPTER_SPANSK_1_9_1,
  CHAPTER_SPANSK_1_9_2,
  CHAPTER_SPANSK_1_9_3,
  CHAPTER_SPANSK_1_9_4,
  CHAPTER_SPANSK_1_10_1,
  CHAPTER_SPANSK_1_10_2,
  CHAPTER_SPANSK_1_10_3,
  CHAPTER_SPANSK_1_10_4,
];
