/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 1 - Tekstbokinnhold kapittel 9-10
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 1
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
  description: 'Lær om ulike transportmidler på spansk og hvordan du snakker om reiser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'snakke om transportmidler',
    'bruke verbet ir (å gå) i presens',
    'uttrykke hvordan man reiser til ulike steder',
  ],
  content: [
    {
      id: 'spansk-1-9-1-intro',
      type: 'text',
      content: `## Transportmidler på spansk

Når du reiser i Spania eller Latin-Amerika, er det viktig å kunne snakke om transportmidler. Spansktalende land har ofte et godt tilbud av offentlig transport, med busser, tog og t-bane i storbyene.

I dette kapittelet lærer du ordene for de vanligste transportmidlene og hvordan du bruker dem i setninger med verbet **ir** (å gå).`,
    },
    {
      id: 'spansk-1-9-1-text-1',
      type: 'text',
      content: `## Vanlige transportmidler

| Spansk | Norsk | Artikkel |
|--------|-------|----------|
| el autobús | bussen | hankjønn |
| el tren | toget | hankjønn |
| el avión | flyet | hankjønn |
| el coche | bilen | hankjønn |
| la bicicleta | sykkelen | hunkjønn |
| el metro | t-banen | hankjønn |
| el taxi | taxien | hankjønn |
| el barco | båten | hankjønn |
| la moto | motorsykkelen | hunkjønn |
| a pie | til fots | - |`,
    },
    {
      id: 'spansk-1-9-1-def-1',
      type: 'definition',
      title: 'Ir en... (Å reise med...)',
      content: `På spansk bruker vi uttrykket **ir en** + transportmiddel for å si hvordan vi reiser:

- Voy **en** autobus. (Jeg reiser med buss.)
- Voy **en** tren. (Jeg reiser med tog.)

**Unntak:** Når du går til fots, sier du: Voy **a pie**. (Jeg går til fots.)`,
    },
    {
      id: 'spansk-1-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Transportmidler',
      problem: `Oversett til norsk:
a) el autobús
b) el tren
c) el avión`,
      solution: `a) el autobús = bussen
b) el tren = toget
c) el avión = flyet

Husk at alle spanske substantiver har en artikkel (el/la) som viser kjønnet!`,
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
          { label: 'a', task: 'bussen', solution: 'el autobús' },
          { label: 'b', task: 'toget', solution: 'el tren' },
          { label: 'c', task: 'flyet', solution: 'el avión' },
          { label: 'd', task: 'sykkelen', solution: 'la bicicleta' },
        ],
        solution: 'a) el autobús, b) el tren, c) el avión, d) la bicicleta',
        hints: ['Husk artikkel foran substantivet: el (hankjønn) eller la (hunkjønn)', 'Bicicleta er hunkjønn (la)'],
      },
    },
    {
      id: 'spansk-1-9-1-text-2',
      type: 'text',
      content: `## Verbet "ir" (å gå) i presens

"Ir" er et uregelmessig verb som er veldig viktig å kunne:

| Person | Bøyning | Norsk |
|--------|---------|-------|
| yo | voy | jeg går |
| tu | vas | du går |
| el/ella/usted | va | han/hun går |
| nosotros | vamos | vi går |
| ellos/ellas/ustedes | van | de går |

**Eksempler:**
- Yo voy en autobús. (Jeg reiser med buss.)
- Ella va en metro. (Hun tar t-banen.)
- Nosotros vamos a pie. (Vi går til fots.)`,
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
c) Ella **va** a pie. (Hun går til fots.)

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
          { label: 'd', task: 'Ellos ___ en autobús.', solution: 'van' },
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
| ¿Cómo vas al colegio? | Hvordan reiser du til skolen? |
| Voy en autobús. | Jeg tar bussen. |
| Voy a pie. | Jeg går til fots. |
| El tren sale a las 10. | Toget går klokken 10. |
| ¿Dónde está la parada de autobus? | Hvor er bussholdeplassen? |
| ¿Cuándo llega el próximo tren? | Når kommer neste tog? |`,
    },
    {
      id: 'spansk-1-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Spørre om transport',
      problem: `Oversett til norsk:
a) ¿Cómo vas al trabajo?
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
          { label: 'a', task: 'Hvordan reiser du til skolen?', solution: '¿Cómo vas al colegio?' },
          { label: 'b', task: 'Jeg går til fots.', solution: 'Voy a pie.' },
          { label: 'c', task: 'Vi tar bussen.', solution: 'Vamos en autobús.' },
        ],
        solution: 'a) ¿Cómo vas al colegio? b) Voy a pie. c) Vamos en autobús.',
        hints: ['como = hvordan', 'a pie = til fots', 'nosotros -> vamos'],
      },
    },
    {
      id: 'spansk-1-9-1-text-4',
      type: 'text',
      content: `## Oppsummering - Viktige ord

| Spansk | Norsk |
|--------|-------|
| ir | å gå/reise |
| llegar | å komme/ankomme |
| salir | å dra/ga ut |
| la parada | holdeplassen |
| la estación | stasjonen |
| el aeropuerto | flyplassen |
| el billete | billetten |

**Tips:** Øv deg på å si hvordan du reiser til skolen, butikken og andre steder. Bruk uttrykket "Voy en..." eller "Voy a pie".`,
    },
    {
      id: 'spansk-1-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene på norsk?',
        subTasks: [
          { label: 'a', task: 'la estación', solution: 'stasjonen' },
          { label: 'b', task: 'el aeropuerto', solution: 'flyplassen' },
          { label: 'c', task: 'llegar', solution: 'å komme/ankomme' },
          { label: 'd', task: 'la parada', solution: 'holdeplassen' },
        ],
        solution: 'a) stasjonen, b) flyplassen, c) å komme/ankomme, d) holdeplassen',
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
  description: 'Lær om viktige steder i byen og hvordan du spør om veien.',
  estimatedMinutes: 45,
  competenceGoals: [
    'orientere seg i en by',
    'navngi viktige steder i byen',
    'spørre om og gi veibeskrivelser',
  ],
  content: [
    {
      id: 'spansk-1-9-2-intro',
      type: 'text',
      content: `## Steder i byen

Når du er i en spansktalende by, er det nyttig å kunne navngi ulike steder og spørre om veien. I dette kapittelet lærer du ordene for de viktigste stedene og hvordan du orienterer deg i byen.`,
    },
    {
      id: 'spansk-1-9-2-text-1',
      type: 'text',
      content: `## Viktige steder i byen

| Spansk | Norsk | Artikkel |
|--------|-------|----------|
| la estación | stasjonen | hunkjønn |
| el aeropuerto | flyplassen | hankjønn |
| el hospital | sykehuset | hankjønn |
| la farmacia | apoteket | hunkjønn |
| el banco | banken | hankjønn |
| la iglesia | kirken | hunkjønn |
| el parque | parken | hankjønn |
| la plaza | torget | hunkjønn |
| el museo | museet | hankjønn |
| el cine | kinoen | hankjønn |
| la tienda | butikken | hunkjønn |
| el centro comercial | kjøpesenteret | hankjønn |`,
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
        hints: ['Husk artikkel: el (hankjønn) eller la (hunkjønn)'],
      },
    },
    {
      id: 'spansk-1-9-2-text-2',
      type: 'text',
      content: `## Spørre om veien

Når du vil finne frem i byen, kan du bruke disse frasene:

| Spansk | Norsk |
|--------|-------|
| ¿Dónde está...? | Hvor er...? |
| ¿Cómo llego a...? | Hvordan kommer jeg til...? |
| Perdone, ?puede ayudarme? | Unnskyld, kan De hjelpe meg? |
| ¿Está lejos? | Er det langt? |
| ¿Está cerca? | Er det nærme? |

**Veibeskrivelser:**

| Spansk | Norsk |
|--------|-------|
| todo recto | rett fram |
| a la derecha | til høyre |
| a la izquierda | til venstre |
| al final de la calle | på enden av gaten |
| en la esquina | på hjørnet |`,
    },
    {
      id: 'spansk-1-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Spørre om veien',
      problem: `Oversett til norsk:
a) ¿Dónde está el banco?
b) Siga todo recto y despues a la derecha.
c) Esta en la esquina.`,
      solution: `a) Hvor er banken?
b) Gå rett fram og så til høyre.
c) Det er på hjørnet.`,
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
          { label: 'a', task: 'Hvor er sykehuset?', solution: '¿Dónde está el hospital?' },
          { label: 'b', task: 'Gå rett fram.', solution: 'Siga todo recto.' },
          { label: 'c', task: 'Gå til venstre.', solution: 'Gire a la izquierda.' },
          { label: 'd', task: 'Det er på hjørnet.', solution: 'Esta en la esquina.' },
        ],
        solution: 'a) ¿Dónde está el hospital? b) Siga todo recto. c) Gire a la izquierda. d) Esta en la esquina.',
        hints: ['donde = hvor', 'todo recto = rett fram', 'izquierda = venstre'],
      },
    },
    {
      id: 'spansk-1-9-2-text-3',
      type: 'text',
      content: `## Mer om veibeskrivelser

| Spansk | Norsk |
|--------|-------|
| Siga todo recto. | Gå rett fram. |
| Gire a la derecha. | Sving til høyre. |
| Gire a la izquierda. | Sving til venstre. |
| Tome la primera calle a la derecha. | Ta forste gate til høyre. |
| Tome la segunda calle a la izquierda. | Ta andre gate til venstre. |
| Esta al lado de... | Det er ved siden av... |
| Esta enfrente de... | Det er overfor... |

**Eksempel på en veibeskrivelse:**
"Siga todo recto, tome la segunda calle a la derecha. El museo esta al lado de la iglesia."
(Gå rett fram, ta andre gate til høyre. Museet er ved siden av kirken.)`,
    },
    {
      id: 'spansk-1-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Veibeskrivelse',
      problem: `Oversett til norsk:
"Siga todo recto, gire a la izquierda. La farmacia esta enfrente del parque."`,
      solution: `"Gå rett fram, sving til venstre. Apoteket er overfor parken."

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
          { label: 'a', task: 'Hvordan kommer jeg til museet?', solution: '¿Cómo llego al museo?' },
          { label: 'b', task: 'Ta forste gate til venstre.', solution: 'Tome la primera calle a la izquierda.' },
          { label: 'c', task: 'Det er ved siden av kirken.', solution: 'Esta al lado de la iglesia.' },
        ],
        solution: 'a) ¿Cómo llego al museo? b) Tome la primera calle a la izquierda. c) Esta al lado de la iglesia.',
        hints: ['al = a + el (til + den)', 'primera = forste', 'al lado de = ved siden av'],
      },
    },
    {
      id: 'spansk-1-9-2-text-4',
      type: 'text',
      content: `## Nyttige ord for å orientere seg

| Spansk | Norsk |
|--------|-------|
| la calle | gaten |
| la esquina | hjørnet |
| el cruce | krysset |
| el semaforo | trafikklyset |
| el puente | broen |
| enfrente de | overfor |
| al lado de | ved siden av |
| cerca de | nærme |
| lejos de | langt fra |

**Tips:** Når du spør om veien, start alltid med "Perdone" (Unnskyld) for å være hoflig!`,
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
        hints: ['Disse ordene er nyttige når du far veibeskrivelser'],
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
  description: 'Lær å planlegge en reise og kjøpe billetter på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge og snakke om reiser',
    'kjøpe billetter og bestille på spansk',
    'bruke ir + a + infinitivo for framtidsplaner',
  ],
  content: [
    {
      id: 'spansk-1-9-3-intro',
      type: 'text',
      content: `## Planlegge en reise

Når du skal reise i spansktalende land, er det viktig å kunne kjøpe billetter, bestille hotell og snakke om reiseplanene dine. I dette kapittelet lærer du de viktigste ordene og frasene for å planlegge en reise.`,
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
      content: `For å snakke om framtidige planer bruker vi **ir + a + infinitivo**:

- **Voy a viajar** a Espana. (Jeg skal reise til Spania.)
- **Vas a visitar** el museo. (Du skal besøke museet.)
- **Vamos a comer** en un restaurante. (Vi skal spise på en restaurant.)

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
        hints: ['viaje = reise', 'vacaciones brukes alltid i flertall på spansk'],
      },
    },
    {
      id: 'spansk-1-9-3-text-2',
      type: 'text',
      content: `## Kjope billetter

Nyttige fraser når du kjoper billett:

| Spansk | Norsk |
|--------|-------|
| Quiero un billete a Madrid, por favor. | Jeg vil ha en billett til Madrid, takk. |
| ¿Ida y vuelta? | Tur-retur? |
| Solo ida, por favor. | Bare en vei, takk. |
| ¿Cuánto cuesta? | Hva koster det? |
| ¿A qué hora sale el tren? | Når går toget? |
| ¿De qué anden sale? | Fra hvilken perrong går det? |
| ¿Hay que hacer transbordo? | Må man bytte? |`,
    },
    {
      id: 'spansk-1-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: På togstasjonen',
      problem: `Les dialogen og svar på sporsmalene:

*Cliente: Buenos días. Quiero un billete a Barcelona, por favor.*
*Taquillero: ¿Ida y vuelta?*
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
          { label: 'b', task: 'Hva koster det?', solution: '¿Cuánto cuesta?' },
          { label: 'c', task: 'Når går toget?', solution: '¿A qué hora sale el tren?' },
          { label: 'd', task: 'Må man bytte?', solution: '¿Hay que hacer transbordo?' },
        ],
        solution: 'a) Un billete a Sevilla, por favor. b) ¿Cuánto cuesta? c) ¿A qué hora sale el tren? d) ¿Hay que hacer transbordo?',
        hints: ['a = til (med byer)', 'por favor = vær så snill/takk'],
      },
    },
    {
      id: 'spansk-1-9-3-text-3',
      type: 'text',
      content: `## Snakke om reiseplaner med "ir + a + infinitivo"

| Spansk | Norsk |
|--------|-------|
| Voy a viajar a Espana. | Jeg skal reise til Spania. |
| Vamos a visitar Barcelona. | Vi skal besøke Barcelona. |
| Van a quedarse en un hotel. | De skal bo på et hotell. |
| ¿Qué vas a hacer en vacaciones? | Hva skal du gjøre i ferien? |
| Voy a hacer la maleta. | Jeg skal pakke kofferten. |

**Tips:** Denne strukturen er veldig nyttig og enkel å bruke. Du trenger bare å kunne bøyningen av "ir" + a + verbets infinitiv (grunnform).`,
    },
    {
      id: 'spansk-1-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Framtidsplaner',
      problem: `Oversett til spansk med "ir + a + infinitivo":
a) Jeg skal reise til Mexico.
b) Vi skal besøke museet.
c) Hun skal kjøpe billetter.`,
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
          { label: 'b', task: 'Du skal besøke Barcelona.', solution: 'Vas a visitar Barcelona.' },
          { label: 'c', task: 'Vi skal spise på en restaurant.', solution: 'Vamos a comer en un restaurante.' },
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
| Spørre om pris | ¿Cuánto cuesta? | Hva koster det? |
| Spørre om tid | ¿A qué hora sale...? | Når går...? |
| Spørre om perrong | ¿De qué anden? | Fra hvilken perrong? |
| Framtidsplaner | Voy a viajar... | Jeg skal reise... |

**Tips:** Øv på å lage hele setninger om reiseplanene dine. For eksempel: "El próximo verano voy a viajar a Espana. Voy a visitar Madrid y Barcelona." (Neste sommer skal jeg reise til Spania. Jeg skal besøke Madrid og Barcelona.)`,
    },
    {
      id: 'spansk-1-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-1-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv ferdig setningene på spansk.',
        subTasks: [
          { label: 'a', task: 'Si "God dag" og be om en billett til Valencia', solution: 'Buenos días. Un billete a Valencia, por favor.' },
          { label: 'b', task: 'Spør hva det koster', solution: '¿Cuánto cuesta?' },
          { label: 'c', task: 'Spør når toget går', solution: '¿A qué hora sale el tren?' },
        ],
        solution: 'a) Buenos días. Un billete a Valencia, por favor. b) ¿Cuánto cuesta? c) ¿A qué hora sale el tren?',
        hints: ['Buenos dias = God dag', 'por favor = takk/vær så snill'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4: En el hotel - På hotellet
// ============================================================================

export const CHAPTER_SPANSK_1_9_4: TextbookChapter = {
  id: 'spansk-1-9-4',
  courseId: 'spansk-1',
  chapterNumber: '9.4',
  title: 'En el hotel',
  subtitle: 'På hotellet',
  description: 'Lær å sjekke inn på hotell og kommunisere med resepsjonen på spansk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kommunisere på hotell',
    'bestille hotellrom og spørre om fasiliteter',
    'håndtere vanlige situasjoner på hotell',
  ],
  content: [
    {
      id: 'spansk-1-9-4-intro',
      type: 'text',
      content: `## På hotellet

Når du reiser til Spania eller Latin-Amerika, er det nyttig å kunne sjekke inn på hotell og kommunisere med resepsjonen. I dette kapittelet lærer du de viktigste ordene og frasene for hotellopphold.`,
    },
    {
      id: 'spansk-1-9-4-text-1',
      type: 'text',
      content: `## Hotellvokabular

| Spansk | Norsk |
|--------|-------|
| el hotel | hotellet |
| la habitación | rommet |
| la habitación individual | enkeltrom |
| la habitación doble | dobbeltrom |
| la recepción | resepsjonen |
| la llave | nøkkelen |
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
a) la habitación doble
b) la recepción
c) el desayuno incluido`,
      solution: `a) la habitación doble = dobbeltrom
b) la recepción = resepsjonen
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
          { label: 'a', task: 'enkeltrom', solution: 'la habitación individual' },
          { label: 'b', task: 'nøkkelen', solution: 'la llave' },
          { label: 'c', task: 'heisen', solution: 'el ascensor' },
          { label: 'd', task: 'bassenget', solution: 'la piscina' },
        ],
        solution: 'a) la habitación individual, b) la llave, c) el ascensor, d) la piscina',
        hints: ['individual = enkelt', 'llave = nøkkel'],
      },
    },
    {
      id: 'spansk-1-9-4-text-2',
      type: 'text',
      content: `## Bestille rom og sjekke inn

Nyttige fraser på hotellet:

| Spansk | Norsk |
|--------|-------|
| Tengo una reserva a nombre de... | Jeg har en reservasjon i navnet... |
| Quiero reservar una habitación. | Jeg vil bestille et rom. |
| ¿Hay habitaciones libres? | Er det ledige rom? |
| ¿Para cuántas noches? | For hvor mange netter? |
| Para dos noches, por favor. | For to netter, takk. |
| ¿Cuánto cuesta la habitación por noche? | Hva koster rommet per natt? |
| ¿El desayuno está incluido? | Er frokost inkludert? |
| ¿A qué hora es el desayuno? | Når er frokosten? |`,
    },
    {
      id: 'spansk-1-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: På resepsjonen',
      problem: `Les dialogen og svar på sporsmalene:

*Huésped: Buenas tardes. Tengo una reserva a nombre de Garcia.*
*Recepcionista: Si, una habitación doble para tres noches. ¿Correcto?*
*Huésped: Si, correcto. ¿A qué hora es el desayuno?*
*Recepcionista: El desayuno es de 7 a 10. Su habitación es la numero 302. Aqui tiene la llave.*

a) Hva slags rom har gjesten bestilt?
b) Hvor mange netter?
c) Når er frokosten?`,
      solution: `a) Gjesten har bestilt et dobbeltrom (habitación doble).
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
          { label: 'a', task: 'Er det ledige rom?', solution: '¿Hay habitaciones libres?' },
          { label: 'b', task: 'For to netter, takk.', solution: 'Para dos noches, por favor.' },
          { label: 'c', task: 'Hva koster rommet per natt?', solution: '¿Cuánto cuesta la habitación por noche?' },
          { label: 'd', task: 'Er frokost inkludert?', solution: '¿El desayuno está incluido?' },
        ],
        solution: 'a) ¿Hay habitaciones libres? b) Para dos noches, por favor. c) ¿Cuánto cuesta la habitación por noche? d) ¿El desayuno está incluido?',
        hints: ['libre = ledig', 'por noche = per natt', 'incluido = inkludert'],
      },
    },
    {
      id: 'spansk-1-9-4-text-3',
      type: 'text',
      content: `## Problemer på hotellet

Noen ganger fungerer ikke alt som det skal. Her er nyttige fraser:

| Spansk | Norsk |
|--------|-------|
| No funciona... | ... fungerer ikke |
| No funciona el aire acondicionado. | Klimaanlegget fungerer ikke. |
| No funciona la ducha. | Dusjen fungerer ikke. |
| No hay agua caliente. | Det er ikke varmt vann. |
| Necesito... | Jeg trenger... |
| Necesito mas toallas. | Jeg trenger flere håndklær. |
| Necesito otra llave. | Jeg trenger en ny nøkkel. |
| La habitación esta sucia. | Rommet er skittent. |`,
    },
    {
      id: 'spansk-1-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Problemer på hotellet',
      problem: `Oversett til norsk:
a) No funciona el ascensor.
b) Necesito mas toallas.
c) ¿Puede cambiar la habitación?`,
      solution: `a) Heisen fungerer ikke.
b) Jeg trenger flere håndklær.
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
          { label: 'b', task: 'Jeg trenger flere håndklær.', solution: 'Necesito mas toallas.' },
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
| Aqui tiene su llave. | Her er nøkkelen Deres. |
| Su habitación es la numero 205. | Rommet Deres er nummer 205. |
| ¿A qué hora es el check-out? | Når er utsjekking? |
| ¿Puede pedir un taxi? | Kan De bestille en taxi? |

**Fasiliteter (Servicios):**

| Spansk | Norsk |
|--------|-------|
| el wifi | wifi |
| la television | TV-en |
| el aire acondicionado | klimaanlegget |
| el aparcamiento | parkeringen |
| la piscina | svømmebassenget |
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
          { label: 'b', task: 'la piscina', solution: 'svømmebassenget' },
          { label: 'c', task: 'el aparcamiento', solution: 'parkeringen' },
          { label: 'd', task: 'el aire acondicionado', solution: 'klimaanlegget' },
        ],
        solution: 'a) wifi, b) svømmebassenget, c) parkeringen, d) klimaanlegget',
        hints: ['piscina = basseng/svømmebasseng', 'aire acondicionado = luft + kondisjonert = klimaanlegg'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.1: El verbo ser - Verbet å være (ser)
// ============================================================================

export const CHAPTER_SPANSK_1_10_1: TextbookChapter = {
  id: 'spansk-1-10-1',
  courseId: 'spansk-1',
  chapterNumber: '10.1',
  title: 'El verbo ser',
  subtitle: 'Verbet å være (ser)',
  description: 'Lær å bøye og bruke verbet "ser" (å være) i presens.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bøye og bruke verbet ser',
    'beskrive nasjonalitet, yrke og personlighet med ser',
    'forstå forskjellen mellom ser og estar',
  ],
  content: [
    {
      id: 'spansk-1-10-1-intro',
      type: 'text',
      content: `## Verbet "ser" - å være

På spansk finnes det to verb som betyr "a være": **ser** og **estar**. I dette kapittelet lærer du om **ser**, som brukes til å snakke om **faste/permanente egenskaper** - hvem du er, hvor du kommer fra, hva du jobber med og hvordan du er som person.`,
    },
    {
      id: 'spansk-1-10-1-text-1',
      type: 'text',
      content: `## Bøyning av "ser" i presens

| Person | Bøyning | Norsk |
|--------|---------|-------|
| yo | soy | jeg er |
| tu | eres | du er |
| el/ella/usted | es | han/hun er / De er |
| nosotros/as | somos | vi er |
| ellos/ellas/ustedes | son | de er / Dere er |

**Merk:** "Ser" er et uregelmessig verb og må læres utenat. Bøyningen ligner ikke på noe fast mønster.`,
    },
    {
      id: 'spansk-1-10-1-def-1',
      type: 'definition',
      title: 'Når bruker vi "ser"?',
      content: `**Ser** brukes til å uttrykke:
- **Nasjonalitet:** Soy noruego. (Jeg er norsk.)
- **Yrke:** Es profesora. (Hun er lærer.)
- **Opprinnelse:** Somos de Oslo. (Vi er fra Oslo.)
- **Personlighet:** Eres muy simpático. (Du er veldig hyggelig.)
- **Fysiske trekk:** Es alto. (Han er høy.)
- **Klokkeslett:** Son las tres. (Klokken er tre.)
- **Materiale:** La mesa es de madera. (Bordet er av tre.)`,
    },
    {
      id: 'spansk-1-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Bøyning av ser',
      problem: `Fyll inn riktig form av "ser":
a) Yo ___ estudiante.
b) Tú ___ amable.
c) Ella ___ española.`,
      solution: `a) Yo **soy** estudiante. (Jeg er student.)
b) Tú **eres** amable. (Du er snill.)
c) Ella **es** española. (Hun er spansk.)`,
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
- Es médico. (Han er lege.)
- Soy estudiante. (Jeg er student.)
- Son profesores. (De er lærere.)

**3. Personlighet og utseende:**
- Eres muy inteligente. (Du er veldig intelligent.)
- Es alta y delgada. (Hun er høy og tynn.)
- Somos simpáticos. (Vi er hyggelige.)

**4. Klokkeslett:**
- ¿Qué hora es? - Es la una. (Hva er klokken? - Klokken er ett.)
- Son las cinco. (Klokken er fem.)`,
    },
    {
      id: 'spansk-1-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruk av ser',
      problem: `Oversett til spansk:
a) Jeg er fra Norge.
b) Hun er lærer.
c) Vi er hyggelige.`,
      solution: `a) Soy de Noruega.
b) Ella es profesora.
c) Somos simpáticos/simpáticas.

Merk: Adjektiver må bøyes etter kjønn. Simpáticos (hankjønn/blandet), simpáticas (hunkjønn).`,
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
          { label: 'a', task: 'Han er 20 år gammel.', solution: 'Él tiene 20 años.' },
          { label: 'b', task: 'De er fra Spania.', solution: 'Ellos son de España.' },
          { label: 'c', task: 'Du er veldig snill.', solution: 'Tú eres muy amable.' },
        ],
        solution: 'a) Él tiene 20 años. (Merk: alder uttrykkes med "tener"!) b) Ellos son de España. c) Tú eres muy amable.',
        hints: ['Husk: alder uttrykkes med "tener" på spansk, ikke "ser"!', 'muy = veldig'],
      },
    },
    {
      id: 'spansk-1-10-1-text-3',
      type: 'text',
      content: `## Ser vs. Estar - En kort introduksjon

På spansk er det viktig å forstå forskjellen mellom **ser** og **estar**:

| Ser | Estar |
|-----|-------|
| Faste/permanente egenskaper | Midlertidige tilstander |
| Soy noruego. (Jeg er norsk.) | Estoy cansado. (Jeg er trøtt.) |
| Es inteligente. (Hun er intelligent.) | Está enfermo. (Han er syk.) |
| Somos estudiantes. (Vi er studenter.) | Estamos contentos. (Vi er glade.) |

**Huskeregel:**
- **Ser** = ting som er slik "for alltid" (nasjonalitet, yrke, personlighet)
- **Estar** = ting som er slik "akkurat nå" (humør, helse, beliggenhet)`,
    },
    {
      id: 'spansk-1-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Ser eller estar?',
      problem: `Velg riktig verb (ser/estar):
a) María ___ española. (Maria er spansk.)
b) Hoy Juan ___ enfermo. (I dag er Juan syk.)
c) Nosotros ___ estudiantes. (Vi er studenter.)`,
      solution: `a) María **es** española. (nasjonalitet = ser)
b) Hoy Juan **está** enfermo. (midlertidig tilstand = estar)
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
          { label: 'a', task: 'Ella ___ profesora. (lærer - yrke)', solution: 'es' },
          { label: 'b', task: 'Yo ___ cansado. (trøtt - midlertidig)', solution: 'estoy' },
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
| ¿Quién es? | Hvem er det? |
| Es importante. | Det er viktig. |
| Es posible. | Det er mulig. |
| Es necesario. | Det er nødvendig. |
| Es verdad. | Det er sant. |
| ¿De dónde eres? | Hvor er du fra? |
| ¿Qué hora es? | Hva er klokken? |`,
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
          { label: 'a', task: '¿Quién es?', solution: 'Hvem er det?' },
          { label: 'b', task: 'Es importante.', solution: 'Det er viktig.' },
          { label: 'c', task: '¿De dónde eres?', solution: 'Hvor er du fra?' },
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
// Kapittel 10.2: El verbo tener - Verbet å ha
// ============================================================================

export const CHAPTER_SPANSK_1_10_2: TextbookChapter = {
  id: 'spansk-1-10-2',
  courseId: 'spansk-1',
  chapterNumber: '10.2',
  title: 'El verbo tener',
  subtitle: 'Verbet å ha',
  description: 'Lær å bøye og bruke verbet "tener" (å ha) i presens.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bøye og bruke verbet tener',
    'uttrykke eierskap, alder og tilstander med tener',
    'bruke tener que + infinitivo for å uttrykke plikt',
  ],
  content: [
    {
      id: 'spansk-1-10-2-intro',
      type: 'text',
      content: `## Verbet "tener" - a ha

"Tener" er et av de viktigste verbene på spansk. Det brukes til å si hva man har, hvor gammel man er, og i mange faste uttrykk. "Tener" er uregelmessig, så bøyningen må læres utenat.`,
    },
    {
      id: 'spansk-1-10-2-text-1',
      type: 'text',
      content: `## Bøyning av "tener" i presens

| Person | Bøyning | Norsk |
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
      title: 'Bruksområder for "tener"',
      content: `"Tener" brukes til å uttrykke:
- **Eierskap:** Tengo un perro. (Jeg har en hund.)
- **Alder:** Tengo 15 años. (Jeg er 15 år gammel.)
- **Tilstander:** Tengo hambre. (Jeg er sulten - bokstavelig: Jeg har sult.)
- **Plikt:** Tengo que estudiar. (Jeg må studere.)`,
    },
    {
      id: 'spansk-1-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Bøyning av tener',
      problem: `Fyll inn riktig form av "tener":
a) Yo ___ un gato.
b) Tú ___ 16 años.
c) Ella ___ dos hermanos.`,
      solution: `a) Yo **tengo** un gato. (Jeg har en katt.)
b) Tú **tienes** 16 años. (Du er 16 år gammel.)
c) Ella **tiene** dos hermanos. (Hun har to brødre.)`,
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

På spansk bruker man **tener** for å si hvor gammel man er (ikke "ser"!):

| Spansk | Norsk |
|--------|-------|
| ¿Cuántos años tienes? | Hvor gammel er du? |
| Tengo 15 años. | Jeg er 15 år (gammel). |
| Mi madre tiene 45 años. | Moren min er 45 år. |
| El bebé tiene 6 meses. | Babyen er 6 måneder. |

**Merk:** På spansk sier man bokstavelig "Jeg har 15 år" i stedet for "Jeg er 15 år gammel".

## Uttrykk med "tener"

| Spansk | Norsk (bokstavelig) | Norsk (betydning) |
|--------|--------------------|--------------------|
| tener hambre | ha sult | være sulten |
| tener sed | ha torst | være torst |
| tener frío | ha kulde | fryse |
| tener calor | ha varme | være varm |
| tener sueño | ha søvn | være trøtt/søvnig |
| tener miedo | ha frykt | være redd |
| tener razón | ha rett | ha rett |
| tener prisa | ha hastverk | ha det travelt |`,
    },
    {
      id: 'spansk-1-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Uttrykk med tener',
      problem: `Oversett til norsk:
a) Tengo hambre.
b) ¿Tienes frío?
c) Él tiene mucho sueño.`,
      solution: `a) Tengo hambre. = Jeg er sulten.
b) ¿Tienes frío? = Fryser du?
c) Él tiene mucho sueño. = Han er veldig søvnig.

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
          { label: 'a', task: 'Jeg er 16 år gammel.', solution: 'Tengo 16 años.' },
          { label: 'b', task: 'Hun er sulten.', solution: 'Ella tiene hambre.' },
          { label: 'c', task: 'Vi er torste.', solution: 'Nosotros tenemos sed.' },
        ],
        solution: 'a) Tengo 16 años. b) Ella tiene hambre. c) Nosotros tenemos sed.',
        hints: ['Alder = tener + años', 'Sulten = tener hambre', 'Torst = tener sed'],
      },
    },
    {
      id: 'spansk-1-10-2-text-3',
      type: 'text',
      content: `## "Tener que" + infinitivo = å måtte

For å si at man **må** gjøre noe, bruker vi **tener que + infinitivo**:

| Spansk | Norsk |
|--------|-------|
| Tengo que estudiar. | Jeg må studere. |
| Tienes que comer. | Du må spise. |
| Tiene que ir al médico. | Han/hun må gå til legen. |
| Tenemos que hacer los deberes. | Vi må gjøre leksene. |
| Tienen que dormir. | De må sove. |

**Struktur:** tener (bøyd) + que + infinitiv

Denne strukturen er veldig nyttig for å uttrykke plikt og nødvendighet.`,
    },
    {
      id: 'spansk-1-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Tener que + infinitivo',
      problem: `Oversett til spansk med "tener que":
a) Jeg må studere.
b) Du må sove.
c) Vi må gå til butikken.`,
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
          { label: 'a', task: 'Jeg må gjøre leksene.', solution: 'Tengo que hacer los deberes.' },
          { label: 'b', task: 'Han må gå til legen.', solution: 'Él tiene que ir al médico.' },
          { label: 'c', task: 'Vi må spise.', solution: 'Tenemos que comer.' },
        ],
        solution: 'a) Tengo que hacer los deberes. b) Él tiene que ir al médico. c) Tenemos que comer.',
        hints: ['hacer = å gjøre', 'los deberes = leksene', 'ir al médico = gå til legen'],
      },
    },
    {
      id: 'spansk-1-10-2-text-4',
      type: 'text',
      content: `## Oppsummering - Tener i ulike sammenhenger

| Bruk | Eksempel | Norsk |
|------|----------|-------|
| Eierskap | Tengo un perro. | Jeg har en hund. |
| Alder | Tiene 30 años. | Han/hun er 30 år. |
| Tilstand | Tenemos frío. | Vi fryser. |
| Plikt | Tienes que estudiar. | Du må studere. |

**Tips:** Øv deg på å bruke "tener" i daglige setninger:
- Si hvor gammel du er
- Si hva du har
- Si hva du føler (sulten, trøtt, kald)
- Si hva du må gjøre`,
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
          { label: 'b', task: 'Tiene 20 años.', solution: 'Han/hun er 20 år.' },
          { label: 'c', task: 'Tenemos que ir.', solution: 'Vi må dra/gå.' },
          { label: 'd', task: 'Tienes sueño.', solution: 'Du er søvnig/trøtt.' },
        ],
        solution: 'a) Jeg er sulten. b) Han/hun er 20 år. c) Vi må dra/gå. d) Du er søvnig/trøtt.',
        hints: ['hambre = sult', 'años = år', 'tener que = å måtte', 'sueño = søvn'],
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
  description: 'Lær å bøye regelmessige verb i presens på spansk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bøye regelmessige verb i presens',
    'forstå de tre verbgruppene -ar, -er, -ir',
    'bruke vanlige verb i setninger',
  ],
  content: [
    {
      id: 'spansk-1-10-3-intro',
      type: 'text',
      content: `## Regelmessige verb på spansk

Spanske verb deles inn i tre grupper basert på endelsen i infinitiv:
- **-ar** verb (f.eks. hablar - å snakke)
- **-er** verb (f.eks. comer - å spise)
- **-ir** verb (f.eks. vivir - å bo/leve)

Når du kan bøyningsmønsteret for hver gruppe, kan du bøye hundrevis av verb riktig!`,
    },
    {
      id: 'spansk-1-10-3-text-1',
      type: 'text',
      content: `## Gruppe 1: Verb på -ar (hablar - å snakke)

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
- comprar (kjøpe)
- cocinar (lage mat)
- escuchar (høre/lytte)
- viajar (reise)
- bailar (danse)
- cantar (synge)
- llamar (ringe/kalle)`,
    },
    {
      id: 'spansk-1-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Bøye -ar verb',
      problem: `Bøy verbet "estudiar" (å studere) i alle personer:
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
        task: 'Fyll inn riktig form av "hablar" (å snakke).',
        subTasks: [
          { label: 'a', task: 'Yo ___ español.', solution: 'hablo' },
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
      content: `## Gruppe 2: Verb på -er (comer - å spise)

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
- aprender (lære)
- comprender (forstå)
- correr (løpe)
- creer (tro)
- vender (selge)

## Gruppe 3: Verb på -ir (vivir - å bo/leve)

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
- abrir (åpne)
- decidir (bestemme)
- recibir (motta)
- subir (gå opp)`,
    },
    {
      id: 'spansk-1-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne de tre gruppene',
      problem: `Bøy verbene med "yo" og "nosotros":
- hablar (snakke) - år verb
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

**Tips:** Lær -ar-verbene først, de er de vanligste!`,
    },
    {
      id: 'spansk-1-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Bruke verb i setninger',
      problem: `Oversett til spansk:
a) Jeg studerer spansk.
b) Hun bor i Madrid.
c) Vi spiser middag klokken åtte.`,
      solution: `a) Yo estudio español.
b) Ella vive en Madrid.
c) Nosotros cenamos a las ocho.

Merk: "cenar" (å spise middag/kveldsmat) er også et regelmessig -ar verb.`,
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
          { label: 'a', task: 'Jeg snakker spansk.', solution: 'Yo hablo español.' },
          { label: 'b', task: 'Hun skriver et brev.', solution: 'Ella escribe una carta.' },
          { label: 'c', task: 'Vi leser en bok.', solution: 'Nosotros leemos un libro.' },
        ],
        solution: 'a) Yo hablo español. b) Ella escribe una carta. c) Nosotros leemos un libro.',
        hints: ['hablar -> hablo (yo)', 'escribir -> escribe (ella)', 'leer -> leemos (nosotros)'],
      },
    },
    {
      id: 'spansk-1-10-3-text-4',
      type: 'text',
      content: `## Setninger med regelmessige verb

| Spansk | Norsk |
|--------|-------|
| Hablo español y noruego. | Jeg snakker spansk og norsk. |
| Él estudia matemáticas. | Han studerer matematikk. |
| Vivimos en una casa grande. | Vi bor i et stort hus. |
| ¿Comes fruta? | Spiser du frukt? |
| Ella escribe en su diario. | Hun skriver i dagboken sin. |
| Ellos trabajan en un hospital. | De jobber på et sykehus. |

**Tips:** Øv deg på å lage egne setninger med disse verbene. Prøv å kombinere verb med ordforråd du allerede kan!`,
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
          { label: 'a', task: 'Jeg lærer spansk.', solution: 'Yo aprendo español.' },
          { label: 'b', task: 'Hun bor i Barcelona.', solution: 'Ella vive en Barcelona.' },
          { label: 'c', task: 'Vi lager mat.', solution: 'Nosotros cocinamos.' },
          { label: 'd', task: 'Han kjøper en bok.', solution: 'El compra un libro.' },
        ],
        solution: 'a) Yo aprendo español. b) Ella vive en Barcelona. c) Nosotros cocinamos. d) El compra un libro.',
        hints: ['aprender (-er) = å lære', 'vivir (-ir) = å bo', 'cocinar (-ar) = å lage mat', 'comprar (-ar) = å kjøpe'],
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
  description: 'Repetisjon av alt du har lært i Spansk nivå 1.',
  estimatedMinutes: 50,
  competenceGoals: [
    'oppsummere og repetere sentrale emner',
    'bruke ordforråd og grammatikk fra hele kurset',
    'kommunisere i enkle hverdagssituasjoner på spansk',
  ],
  content: [
    {
      id: 'spansk-1-10-4-intro',
      type: 'text',
      content: `## Repetisjon av Spansk nivå 1

¡Felicidades! (Gratulerer!) Du har nådd slutten av Spansk nivå 1. I dette kapittelet repeterer vi de viktigste temaene du har lært. Bruk dette kapittelet til å teste deg selv og befeste kunnskapene dine.`,
    },
    {
      id: 'spansk-1-10-4-text-1',
      type: 'text',
      content: `## Oversikt over viktige verb

**ser (å være - permanente egenskaper)**
| Person | Form |
|--------|------|
| yo | soy |
| tu | eres |
| el/ella/usted | es |
| nosotros/as | somos |
| ellos/ellas/ustedes | son |

**tener (å ha)**
| Person | Form |
|--------|------|
| yo | tengo |
| tu | tienes |
| el/ella/usted | tiene |
| nosotros/as | tenemos |
| ellos/ellas/ustedes | tienen |

**ir (å gå)**
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
          { label: 'a', task: 'Tú ___ muy simpático. (ser)', solution: 'eres' },
          { label: 'b', task: 'Ella ___ 17 años. (tener)', solution: 'tiene' },
          { label: 'c', task: 'Yo ___ en autobús. (ir)', solution: 'voy' },
          { label: 'd', task: 'Nosotros ___ de Noruega. (ser)', solution: 'somos' },
        ],
        solution: 'a) eres, b) tiene, c) voy, d) somos',
        hints: ['ser: soy, eres, es, somos, son', 'tener: tengo, tienes, tiene, tenemos, tienen', 'ir: voy, vas, va, vamos, van'],
      },
    },
    {
      id: 'spansk-1-10-4-text-2',
      type: 'text',
      content: `## Regelmessige verb - Bøyningsmønster

| Person | -ar (hablar) | -er (comer) | -ir (vivir) |
|--------|-------------|-------------|-------------|
| yo | hablo | como | vivo |
| tu | hablas | comes | vives |
| el/ella | habla | come | vive |
| nosotros | hablamos | comemos | vivimos |
| ellos | hablan | comen | viven |

**Viktige grammatikkpunkter:**
- **Artikler:** el/la (bestemt), un/una (ubestemt)
- **Adjektivsamsvar:** adjektivet må samsvare i kjønn og tall med substantivet
  - el chico alto / la chica alta
  - los chicos altos / las chicas altas
- **Ir + a + infinitivo** = framtidsuttrykk (Voy a estudiar = Jeg skal studere)
- **Tener que + infinitivo** = plikt (Tengo que estudiar = Jeg må studere)`,
    },
    {
      id: 'spansk-1-10-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Regelmessige verb',
      problem: `Bøy verbene:
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
          { label: 'c', task: 'Tu ___ bien el español. (aprender)', solution: 'aprendes' },
          { label: 'd', task: 'Nosotros ___ en un restaurante. (comer)', solution: 'comemos' },
        ],
        solution: 'a) escucha, b) vivo, c) aprendes, d) comemos',
        hints: ['escuchar er et -ar verb', 'vivir er et -ir verb', 'aprender er et -er verb', 'comer er et -er verb'],
      },
    },
    {
      id: 'spansk-1-10-4-text-3',
      type: 'text',
      content: `## Viktig ordforråd - Oppsummering

**Hilsener:**
- Hola, Buenos días, Buenas tardes, Buenas noches, Adios, Hasta luego

**Familie:**
- la madre, el padre, la hermana, el hermano, los abuelos

**Mat og drikke:**
- el pan, el queso, el agua, la leche, la fruta, la carne

**Transport:**
- el autobús, el tren, el avión, el coche, la bicicleta

**I byen:**
- la estación, el hospital, la farmacia, el banco, el museo

**På hotellet:**
- la habitación, la recepción, la llave, el desayuno

**Nyttige uttrykk:**
- Por favor (vær så snill), Gracias (takk), De nada (ingen årsak)
- ¿Cuánto cuesta? (Hva koster det?)
- ¿Dónde está...? (Hvor er...?)
- Me gusta... (Jeg liker...)`,
    },
    {
      id: 'spansk-1-10-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Ordforråd',
      problem: `Oversett til norsk:
a) la estación
b) el desayuno
c) la hermana`,
      solution: `a) la estación = stasjonen
b) el desayuno = frokosten
c) la hermana = søsteren`,
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
          { label: 'd', task: 'resepsjonen', solution: 'la recepción' },
        ],
        solution: 'a) el coche, b) la farmacia, c) el billete, d) la recepción',
        hints: ['Husk artikkel: el (hankjønn) eller la (hunkjønn)'],
      },
    },
    {
      id: 'spansk-1-10-4-text-4',
      type: 'text',
      content: `## Nyttige fraser fra hele kurset

**Presentere seg:**
- Me llamo... (Jeg heter...)
- Soy de Noruega. (Jeg er fra Norge.)
- Tengo 16 años. (Jeg er 16 år.)

**På togstasjonen:**
- Un billete a..., por favor. (En billett til..., takk.)
- ¿A qué hora sale el tren? (Når går toget?)
- ¿Cuánto cuesta? (Hva koster det?)

**På hotellet:**
- Tengo una reserva. (Jeg har en reservasjon.)
- ¿Hay habitaciones libres? (Er det ledige rom?)
- ¿El desayuno está incluido? (Er frokost inkludert?)

**Spørre om veien:**
- ¿Dónde está...? (Hvor er...?)
- ¿Cómo llego a...? (Hvordan kommer jeg til...?)
- Siga todo recto. (Gå rett fram.)`,
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
          { label: 'b', task: 'Er det ledige rom?', solution: '¿Hay habitaciones libres?' },
          { label: 'c', task: 'Hvor er museet?', solution: '¿Dónde está el museo?' },
          { label: 'd', task: 'Gå rett fram.', solution: 'Siga todo recto.' },
        ],
        solution: 'a) Un billete a Barcelona, por favor. b) ¿Hay habitaciones libres? c) ¿Dónde está el museo? d) Siga todo recto.',
        hints: ['a = til (med byer)', 'libre = ledig', 'donde = hvor', 'todo recto = rett fram'],
      },
    },
    {
      id: 'spansk-1-10-4-text-5',
      type: 'text',
      content: `## Hva har du lært?

I Spansk nivå 1 har du lært:

1. **Hilsener og høflighetsfraser** - Hola, Buenos días, Gracias, Por favor
2. **Presentere deg selv** - Me llamo..., Soy de..., Tengo... años
3. **Tall og farger** - uno, dos, tres... rojo, azul, verde...
4. **Familie** - madre, padre, hermana, hermano, abuelos
5. **Tid og dager** - lunes, martes... Son las tres.
6. **Mat og restaurantbesøk** - Quiero..., La cuenta, por favor.
7. **Transport og reise** - el tren, el billete, Voy en...
8. **I byen** - la estación, la farmacia, ¿Dónde está...?
9. **På hotellet** - la habitación, ¿Hay habitaciones libres?
10. **Verb** - ser, tener, ir, regelmessige verb (-ar, -er, -ir)

**¡Muy bien hecho! ¡Sigue así!** (Veldig bra gjort! Fortsett slik!)`,
    },
    {
      id: 'spansk-1-10-4-note-1',
      type: 'note',
      title: 'Tips til videre læring',
      content: `For å fortsette å forbedre spansken din:
- Hør på spansk musikk og se spanske filmer/serier med undertekster
- Øv deg på å snakke høyt - uttale er viktig!
- Skriv dagbok på spansk
- Bruk språkappar som Duolingo eller Babbel
- Finn en språkpartner å øve med
- Les enkle tekster på spansk (barnebøker, nyheter for unge)
- Følg spanskspråklige sider på sosiale medier`,
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
