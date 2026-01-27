/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 2 - Kapittel 1-3 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 1: PERFECTO Y IMPERFECTO (1.1-1.4)
 * - Kapittel 2: EL SUBJUNTIVO (2.1-2.4)
 * - Kapittel 3: CONDICIONAL Y FUTURO (3.1-3.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: PERFECTO Y IMPERFECTO
// ============================================================================

// ----------------------------------------------------------------------------
// 1.1 El pretérito perfecto
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_1_1: TextbookChapter = {
  id: 'spansk-2-1-1',
  courseId: 'spansk-2',
  chapterNumber: '1.1',
  title: 'El pretérito perfecto',
  subtitle: 'Sammensatt fortid',
  description: 'Lær å bruke haber + partisipp for å uttrykke handlinger som har skjedd nylig.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke sammensatt fortid', 'fortelle om nylige hendelser'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-1-1-intro', type: 'text', content: `## El pretérito perfecto

I spansk brukes **pretérito perfecto** (sammensatt fortid) for å snakke om handlinger som har skjedd nylig, eller som har relevans for nåtiden. Det tilsvarer norsk "har gjort/har spist". Formen dannes med hjelpeverbet **haber** i presens + **partisipp** (participio pasado).` },
    { id: 'spansk-2-1-1-def-1', type: 'definition', title: 'Pretérito perfecto (sammensatt fortid)', content: `**Pretérito perfecto** brukes for handlinger som har skjedd nylig eller har relevans for nåtiden.

**Formel:** haber (presens) + partisipp

| Person | Haber | Eksempel |
|--------|-------|----------|
| yo | he | he hablado |
| tú | has | has comido |
| él/ella | ha | ha vivido |
| nosotros | hemos | hemos estudiado |
| ellos | han | han trabajado |

**Partisipp:** -ar → -ado, -er/-ir → -ido
**Uregelmessige:** hecho, dicho, escrito, visto, puesto, vuelto, abierto, roto` },
    { id: 'spansk-2-1-1-text-1', type: 'text', content: `## Tidsuttrykk med perfecto

Perfecto brukes ofte med disse tidsuttrykkene:

| Spansk | Norsk |
|--------|-------|
| hoy | i dag |
| esta mañana | i dag tidlig |
| esta semana | denne uken |
| este mes | denne måneden |
| ya | allerede |
| todavía no | ennå ikke |
| alguna vez | noen gang |
| nunca | aldri |` },
    { id: 'spansk-2-1-1-text-2', type: 'text', content: `## Uregelmessige partisipper

Noen vanlige verb har uregelmessige partisipper:

| Infinitiv | Partisipp | Norsk |
|-----------|-----------|-------|
| hacer | hecho | gjort |
| decir | dicho | sagt |
| escribir | escrito | skrevet |
| ver | visto | sett |
| poner | puesto | lagt |
| volver | vuelto | kommet tilbake |
| abrir | abierto | åpnet |
| romper | roto | knust |` },
    { id: 'spansk-2-1-1-example-1', type: 'example', title: 'Eksempel: Dannelse av perfecto', problem: `Sett verbene i pretérito perfecto:
a) yo / hablar
b) tú / comer
c) ella / escribir`, solution: `a) Yo **he hablado** (Jeg har snakket)
b) Tú **has comido** (Du har spist)
c) Ella **ha escrito** (Hun har skrevet)` },
    {
      id: 'spansk-2-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Dann pretérito perfecto av verbene:',
        subTasks: [
        { label: 'a', task: 'yo / estudiar', solution: 'he estudiado', answer: 'he estudiado' },
        { label: 'b', task: 'nosotros / vivir', solution: 'hemos vivido', answer: 'hemos vivido' },
        { label: 'c', task: 'ellos / trabajar', solution: 'han trabajado', answer: 'han trabajado' },
        { label: 'd', task: 'tú / aprender', solution: 'has aprendido', answer: 'has aprendido' },
        ],
        solution: 'a) he estudiado, b) hemos vivido, c) han trabajado, d) has aprendido',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av haber:',
        subTasks: [
        { label: 'a', task: 'Yo ___ comido.', solution: 'he', answer: 'he' },
        { label: 'b', task: 'Ella ___ salido.', solution: 'ha', answer: 'ha' },
        { label: 'c', task: 'Nosotros ___ llegado.', solution: 'hemos', answer: 'hemos' },
        { label: 'd', task: 'Ellos ___ dormido.', solution: 'han', answer: 'han' },
        ],
        solution: 'a) he, b) ha, c) hemos, d) han',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-1-1-example-2', type: 'example', title: 'Eksempel: Uregelmessige partisipper', problem: `Oversett til spansk:
a) Jeg har gjort leksene.
b) Vi har sett filmen.`, solution: `a) **He hecho los deberes.** (hacer → hecho)
b) **Hemos visto la película.** (ver → visto)` },
    {
      id: 'spansk-2-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setninger med uregelmessige partisipper:',
        subTasks: [
        { label: 'a', task: 'yo / hacer / la cena', solution: 'Yo he hecho la cena.', answer: 'Yo he hecho la cena.' },
        { label: 'b', task: 'tú / decir / la verdad', solution: 'Tú has dicho la verdad.', answer: 'Tú has dicho la verdad.' },
        { label: 'c', task: 'ella / abrir / la puerta', solution: 'Ella ha abierto la puerta.', answer: 'Ella ha abierto la puerta.' },
        { label: 'd', task: 'nosotros / ver / la película', solution: 'Nosotros hemos visto la película.', answer: 'Nosotros hemos visto la película.' },
        ],
        solution: 'a) Yo he hecho la cena., b) Tú has dicho la verdad., c) Ella ha abierto la puerta., d) Nosotros hemos visto la película.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til spansk med pretérito perfecto:',
        subTasks: [
        { label: 'a', task: 'Har du noen gang vært i Spania?', solution: '¿Has estado alguna vez en España?', answer: '¿Has estado alguna vez en España?' },
        { label: 'b', task: 'Jeg har allerede spist frokost.', solution: 'Ya he desayunado.', answer: 'Ya he desayunado.' },
        { label: 'c', task: 'De har ikke kommet ennå.', solution: 'Todavía no han llegado.', answer: 'Todavía no han llegado.' },
        { label: 'd', task: 'Vi har skrevet brevet i dag.', solution: 'Hemos escrito la carta hoy.', answer: 'Hemos escrito la carta hoy.' },
        ],
        solution: 'a) ¿Has estado alguna vez en España?, b) Ya he desayunado., c) Todavía no han llegado., d) Hemos escrito la carta hoy.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-1-1-tip-1', type: 'tip', content: `**Huskeregel:** Partisippet endrer seg ALDRI i perfecto. Det er alltid *he hablado*, *ha hablado*, *hemos hablado* osv. Bare hjelpeverbet *haber* bøyes.` },
    { id: 'spansk-2-1-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Pretérito perfecto**

- **Formel:** haber (presens) + partisipp
- **Regelmessig partisipp:** -ar → -ado, -er/-ir → -ido
- **Uregelmessige:** hecho, dicho, escrito, visto, puesto, vuelto, abierto, roto
- **Bruk:** Nylige handlinger, erfaringer, med hoy/ya/todavía no` },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.2 El pretérito imperfecto
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_1_2: TextbookChapter = {
  id: 'spansk-2-1-2',
  courseId: 'spansk-2',
  chapterNumber: '1.2',
  title: 'El pretérito imperfecto',
  subtitle: 'Ufullendt fortid',
  description: 'Lær å beskrive vaner, bakgrunn og pågående handlinger i fortiden.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive fortidige vaner', 'bruke imperfecto korrekt'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-1-2-intro', type: 'text', content: `## El pretérito imperfecto

Mens pretérito perfecto brukes for avsluttede handlinger, brukes **pretérito imperfecto** for å beskrive **vaner i fortiden**, **bakgrunn** og **pågående tilstander**. Det tilsvarer ofte norsk "pleide å" eller "var i ferd med å".` },
    { id: 'spansk-2-1-2-def-1', type: 'definition', title: 'Pretérito imperfecto (ufullendt fortid)', content: `**Imperfecto** brukes for å beskrive vaner, bakgrunn og pågående tilstander i fortiden.

**-AR verb (hablar):**
| Person | Endelse | Form |
|--------|---------|------|
| yo | -aba | hablaba |
| tú | -abas | hablabas |
| él/ella | -aba | hablaba |
| nosotros | -ábamos | hablábamos |
| ellos | -aban | hablaban |

**-ER/-IR verb (comer/vivir):**
| Person | Endelse | Form |
|--------|---------|------|
| yo | -ía | comía |
| tú | -ías | comías |
| él/ella | -ía | comía |
| nosotros | -íamos | comíamos |
| ellos | -ían | comían |` },
    { id: 'spansk-2-1-2-text-1', type: 'text', content: `## Bruksområder for imperfecto

1. **Vaner i fortiden:** *Cuando era niño, jugaba al fútbol.* (Da jeg var barn, spilte jeg fotball.)
2. **Beskrivelser:** *El cielo estaba azul y hacía calor.* (Himmelen var blå og det var varmt.)
3. **Alder og tid:** *Tenía quince años.* (Jeg var femten år.)
4. **Samtidige handlinger:** *Mientras estudiaba, mi hermano veía la tele.* (Mens jeg studerte, så broren min på TV.)` },
    { id: 'spansk-2-1-2-text-2', type: 'text', content: `## Uregelmessige verb i imperfecto

Det finnes bare TRE uregelmessige verb:

| Verb | yo | tú | él | nosotros | ellos |
|------|----|----|-----|----------|-------|
| ser | era | eras | era | éramos | eran |
| ir | iba | ibas | iba | íbamos | iban |
| ver | veía | veías | veía | veíamos | veían |` },
    { id: 'spansk-2-1-2-example-1', type: 'example', title: 'Eksempel: Imperfecto med -ar verb', problem: `Bøy verbet hablar i imperfecto for alle personer.`, solution: `yo habl**aba**, tú habl**abas**, él habl**aba**, nosotros habl**ábamos**, ellos habl**aban**` },
    {
      id: 'spansk-2-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Bøy verbene i imperfecto:',
        subTasks: [
        { label: 'a', task: 'yo / hablar', solution: 'hablaba', answer: 'hablaba' },
        { label: 'b', task: 'tú / comer', solution: 'comías', answer: 'comías' },
        { label: 'c', task: 'ella / vivir', solution: 'vivía', answer: 'vivía' },
        { label: 'd', task: 'nosotros / estudiar', solution: 'estudiábamos', answer: 'estudiábamos' },
        ],
        solution: 'a) hablaba, b) comías, c) vivía, d) estudiábamos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av ser, ir eller ver:',
        subTasks: [
        { label: 'a', task: 'Yo ___ estudiante. (ser)', solution: 'era', answer: 'era' },
        { label: 'b', task: 'Nosotros ___ al cine. (ir)', solution: 'íbamos', answer: 'íbamos' },
        { label: 'c', task: 'Tú ___ la televisión. (ver)', solution: 'veías', answer: 'veías' },
        { label: 'd', task: 'Ellos ___ amigos. (ser)', solution: 'eran', answer: 'eran' },
        ],
        solution: 'a) era, b) íbamos, c) veías, d) eran',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-1-2-example-2', type: 'example', title: 'Eksempel: Bruk i kontekst', problem: `Oversett: Da jeg var liten, bodde vi i Madrid.`, solution: `**Cuando era pequeño/a, vivíamos en Madrid.** (ser → era, vivir → vivíamos)` },
    {
      id: 'spansk-2-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv barndommen din med imperfecto:',
        subTasks: [
        { label: 'a', task: 'Cuando era niño/a, yo ___ (jugar) en el parque.', solution: 'jugaba', answer: 'jugaba' },
        { label: 'b', task: 'Mi madre ___ (cocinar) muy bien.', solution: 'cocinaba', answer: 'cocinaba' },
        { label: 'c', task: 'Mis amigos y yo ___ (ir) a la playa.', solution: 'íbamos', answer: 'íbamos' },
        { label: 'd', task: 'Mi abuelo ___ (contar) historias.', solution: 'contaba', answer: 'contaba' },
        ],
        solution: 'a) jugaba, b) cocinaba, c) íbamos, d) contaba',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til spansk med imperfecto:',
        subTasks: [
        { label: 'a', task: 'Da jeg var ti år, bodde jeg i Barcelona.', solution: 'Cuando tenía diez años, vivía en Barcelona.', answer: 'Cuando tenía diez años, vivía en Barcelona.' },
        { label: 'b', task: 'Det regnet og det var kaldt.', solution: 'Llovía y hacía frío.', answer: 'Llovía y hacía frío.' },
        { label: 'c', task: 'Hver sommer dro vi til stranden.', solution: 'Cada verano íbamos a la playa.', answer: 'Cada verano íbamos a la playa.' },
        { label: 'd', task: 'Hun pleide å lese hver kveld.', solution: 'Ella leía cada noche.', answer: 'Ella leía cada noche.' },
        ],
        solution: 'a) Cuando tenía diez años, vivía en Barcelona., b) Llovía y hacía frío., c) Cada verano íbamos a la playa., d) Ella leía cada noche.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-1-2-tip-1', type: 'tip', content: `**Signalord for imperfecto:** siempre, todos los días, cada verano, cuando era niño/a, mientras, normalmente, a menudo, de pequeño/a.` },
    { id: 'spansk-2-1-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Pretérito imperfecto**

- **-AR verb:** -aba, -abas, -aba, -ábamos, -aban
- **-ER/-IR verb:** -ía, -ías, -ía, -íamos, -ían
- **Uregelmessige:** ser (era), ir (iba), ver (veía)
- **Bruk:** Vaner, beskrivelser, bakgrunn, samtidige handlinger` },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.3 Perfecto vs. imperfecto
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_1_3: TextbookChapter = {
  id: 'spansk-2-1-3',
  courseId: 'spansk-2',
  chapterNumber: '1.3',
  title: 'Perfecto vs. imperfecto',
  subtitle: 'Når brukes hva?',
  description: 'Forstå forskjellen mellom avsluttede handlinger og pågående tilstander.',
  estimatedMinutes: 45,
  competenceGoals: ['skille mellom fortidsformene', 'bruke begge former i kontekst'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-1-3-intro', type: 'text', content: `## Perfecto vs. imperfecto

Å velge mellom **perfecto** og **imperfecto** er en av de største utfordringene for norske elever som lærer spansk. Nøkkelen er å forstå om handlingen er **avgrenset** (perfecto) eller **pågående/gjentakende** (imperfecto).` },
    { id: 'spansk-2-1-3-def-1', type: 'definition', title: 'Perfecto vs. Imperfecto', content: `**Perfecto** = avsluttede, konkrete handlinger med tydelig start/slutt.
**Imperfecto** = pågående tilstander, vaner, beskrivelser uten tydelig avgrensning.

| Perfecto | Imperfecto |
|----------|------------|
| Ayer comí pizza. | Siempre comía pizza. |
| Ayer llovió. | Llovía mucho. |
| Fui al cine. | Iba al cine cada viernes. |` },
    { id: 'spansk-2-1-3-text-1', type: 'text', content: `## Signalord

| Perfecto | Imperfecto |
|----------|------------|
| ayer (i går) | siempre (alltid) |
| la semana pasada | todos los días |
| el año pasado | cada verano |
| de repente (plutselig) | mientras (mens) |
| una vez (en gang) | cuando era niño |
| anoche (i natt) | normalmente |` },
    { id: 'spansk-2-1-3-text-2', type: 'text', content: `## Kombinert bruk

I fortellinger brukes begge former sammen:
- **Imperfecto** setter scenen (bakgrunn)
- **Perfecto** forteller hva som skjedde (handling)

*Hacía sol y los pájaros cantaban* (imperfecto - bakgrunn) *cuando de repente empezó a llover* (perfecto - handling).` },
    { id: 'spansk-2-1-3-example-1', type: 'example', title: 'Eksempel: Velg riktig form', problem: `Forklar forskjellen:
a) Ayer llovió. vs. Llovía mucho.
b) Comí pizza. vs. Siempre comía pizza.`, solution: `a) Llovió = det regnet i går (avgrenset). Llovía = det regnet (pågående, bakgrunn).
b) Comí = Jeg spiste (en gang). Comía = Jeg pleide å spise (vane).` },
    {
      id: 'spansk-2-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg perfecto eller imperfecto:',
        subTasks: [
        { label: 'a', task: 'Ayer ___ (llover).', solution: 'llovió (perfecto - avgrenset)', answer: 'llovió (perfecto - avgrenset)' },
        { label: 'b', task: 'Siempre ___ (jugar) al fútbol de niño.', solution: 'jugaba (imperfecto - vane)', answer: 'jugaba (imperfecto - vane)' },
        { label: 'c', task: 'La semana pasada ___ (ir) al médico.', solution: 'fui (perfecto - avgrenset)', answer: 'fui (perfecto - avgrenset)' },
        { label: 'd', task: 'Cada verano ___ (visitar) a mis abuelos.', solution: 'visitaba (imperfecto - vane)', answer: 'visitaba (imperfecto - vane)' },
        ],
        solution: 'a) llovió (perfecto - avgrenset), b) jugaba (imperfecto - vane), c) fui (perfecto - avgrenset), d) visitaba (imperfecto - vane)',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig fortidsform:',
        subTasks: [
        { label: 'a', task: 'Cuando ___ (ser) niño, ___ (vivir) en Sevilla.', solution: 'era, vivía', answer: 'era, vivía' },
        { label: 'b', task: 'Ayer ___ (hacer) buen tiempo y ___ (ir) a la playa.', solution: 'hizo, fui/fuimos', answer: 'hizo, fui/fuimos' },
        { label: 'c', task: 'Mientras ___ (comer), ___ (sonar) el teléfono.', solution: 'comía, sonó', answer: 'comía, sonó' },
        { label: 'd', task: 'El año pasado ___ (viajar) a México.', solution: 'viajé/viajamos', answer: 'viajé/viajamos' },
        ],
        solution: 'a) era, vivía, b) hizo, fui/fuimos, c) comía, sonó, d) viajé/viajamos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-1-3-example-2', type: 'example', title: 'Eksempel: Kombinert bruk', problem: `Fyll inn: Mientras yo ___ (estudiar), mi hermano ___ (llegar) a casa.`, solution: `**estudiaba** (imperfecto - pågående) ... **llegó** (perfecto - avbrytende handling). Mientras yo estudiaba, mi hermano llegó a casa.` },
    {
      id: 'spansk-2-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett med riktig fortidsform:',
        subTasks: [
        { label: 'a', task: 'Jeg pleide å spille gitar.', solution: 'Tocaba la guitarra. (imperfecto)', answer: 'Tocaba la guitarra. (imperfecto)' },
        { label: 'b', task: 'I går kjøpte jeg en bok.', solution: 'Ayer compré un libro. (perfecto)', answer: 'Ayer compré un libro. (perfecto)' },
        { label: 'c', task: 'Det var kaldt og det snødde.', solution: 'Hacía frío y nevaba. (imperfecto)', answer: 'Hacía frío y nevaba. (imperfecto)' },
        { label: 'd', task: 'Plutselig ringte telefonen.', solution: 'De repente sonó el teléfono. (perfecto)', answer: 'De repente sonó el teléfono. (perfecto)' },
        ],
        solution: 'a) Tocaba la guitarra. (imperfecto), b) Ayer compré un libro. (perfecto), c) Hacía frío y nevaba. (imperfecto), d) De repente sonó el teléfono. (perfecto)',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fullfør historien med riktig form:',
        subTasks: [
        { label: 'a', task: '___ (ser) las ocho de la mañana. El sol ___ (brillar).', solution: 'Eran, brillaba (imperfecto - bakgrunn)', answer: 'Eran, brillaba (imperfecto - bakgrunn)' },
        { label: 'b', task: 'María ___ (salir) de casa y ___ (ir) al trabajo.', solution: 'salió, fue (perfecto - handling)', answer: 'salió, fue (perfecto - handling)' },
        { label: 'c', task: 'Mientras ___ (caminar), ___ (ver) a un amigo.', solution: 'caminaba (imperf.), vio (perf.)', answer: 'caminaba (imperf.), vio (perf.)' },
        { label: 'd', task: 'Los dos ___ (hablar) un rato y luego ___ (despedirse).', solution: 'hablaron, se despidieron (perfecto)', answer: 'hablaron, se despidieron (perfecto)' },
        ],
        solution: 'a) Eran, brillaba (imperfecto - bakgrunn), b) salió, fue (perfecto - handling), c) caminaba (imperf.), vio (perf.), d) hablaron, se despidieron (perfecto)',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-1-3-tip-1', type: 'tip', content: `**Huskeregel:** Tenk på imperfecto som et **videokamera** (filmer pågående scene) og perfecto som et **fotokamera** (tar bilde av en enkelt hendelse).` },
    { id: 'spansk-2-1-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Perfecto vs. Imperfecto**

- **Perfecto:** Avsluttede handlinger, konkrete hendelser, ayer/la semana pasada
- **Imperfecto:** Vaner, beskrivelser, bakgrunn, siempre/mientras
- **Kombinert:** Imperfecto = bakgrunn, Perfecto = handling
- **Nøkkelspørsmål:** Er handlingen avgrenset eller pågående?` },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.4 Narrar en el pasado
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_1_4: TextbookChapter = {
  id: 'spansk-2-1-4',
  courseId: 'spansk-2',
  chapterNumber: '1.4',
  title: 'Narrar en el pasado',
  subtitle: 'Fortelle historier i fortid',
  description: 'Kombiner fortidsformene for å fortelle historier og beskrive hendelser.',
  estimatedMinutes: 45,
  competenceGoals: ['fortelle sammenhengende historier', 'bruke begge fortidsformer naturlig'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-1-4-intro', type: 'text', content: `## Narrar en el pasado

Å fortelle en god historie på spansk krever at du mestrer samspillet mellom fortidsformene. I dette kapittelet lærer du å kombinere **imperfecto** (bakgrunn og beskrivelser) med **perfecto** (hendelser og handlinger), og å bruke **connectors** for å skape flyt.` },
    { id: 'spansk-2-1-4-def-1', type: 'definition', title: 'Narrativ teknikk i fortid', content: `**Å fortelle i fortid** krever at du kombinerer perfecto (handlinger) og imperfecto (bakgrunn) naturlig.

**Connectors (bindeord):**
| Spansk | Norsk |
|--------|-------|
| primero | først |
| luego/después | deretter |
| finalmente | til slutt |
| mientras tanto | i mellomtiden |
| de repente | plutselig |
| entonces | da/så |
| al final | til slutt |` },
    { id: 'spansk-2-1-4-text-1', type: 'text', content: `## Struktur i en fortelling

1. **Innledning (imperfecto):** Sett scenen - tid, sted, personer, vær
2. **Utvikling (perfecto + imperfecto):** Hva skjedde? Bakgrunn + handlinger
3. **Vendepunkt (perfecto):** Noe uventet skjer
4. **Avslutning (perfecto):** Resultatet

*Era un día de verano. Hacía mucho calor y el cielo estaba azul. De repente, empezó a llover...*` },
    { id: 'spansk-2-1-4-text-2', type: 'text', content: `## Tidsuttrykk i fortelling

For å skape sammenheng i fortellingen:
- **Rekkefølge:** primero, luego, después, finalmente
- **Samtidighet:** mientras, mientras tanto, al mismo tiempo
- **Overraskelse:** de repente, de pronto, inesperadamente
- **Avslutning:** al final, por fin, en conclusión` },
    { id: 'spansk-2-1-4-example-1', type: 'example', title: 'Eksempel: En kort fortelling', problem: `Les og identifiser perfecto (P) og imperfecto (I):
"Era sábado. Hacía sol. María caminaba por el parque cuando vio a un perro. El perro estaba solo y tenía hambre. María le dio comida."`, solution: `Era (I), Hacía (I), caminaba (I) - bakgrunn
vio (P) - handling
estaba (I), tenía (I) - beskrivelse
dio (P) - handling` },
    {
      id: 'spansk-2-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett inn riktig connector:',
        subTasks: [
        { label: 'a', task: '___ fui al supermercado. (først)', solution: 'Primero', answer: 'Primero' },
        { label: 'b', task: '___ preparé la cena. (deretter)', solution: 'Luego/Después', answer: 'Luego/Después' },
        { label: 'c', task: '___ sonó el teléfono. (plutselig)', solution: 'De repente', answer: 'De repente' },
        { label: 'd', task: '___ me acosté. (til slutt)', solution: 'Finalmente', answer: 'Finalmente' },
        ],
        solution: 'a) Primero, b) Luego/Después, c) De repente, d) Finalmente',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg perfecto eller imperfecto:',
        subTasks: [
        { label: 'a', task: '___ (ser) las tres de la tarde. (bakgrunn)', solution: 'Eran', answer: 'Eran' },
        { label: 'b', task: 'Los niños ___ (jugar) en el jardín. (pågående)', solution: 'jugaban', answer: 'jugaban' },
        { label: 'c', task: 'De repente, ___ (empezar) a llover. (hendelse)', solution: 'empezó', answer: 'empezó' },
        { label: 'd', task: 'Todos ___ (entrar) en la casa. (handling)', solution: 'entraron', answer: 'entraron' },
        ],
        solution: 'a) Eran, b) jugaban, c) empezó, d) entraron',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-1-4-example-2', type: 'example', title: 'Eksempel: Bygg en fortelling', problem: `Lag setninger med disse elementene:
1. Det var natt / det regnet
2. Juan gikk hjem
3. Han hørte en lyd`, solution: `1. **Era** de noche y **llovía**. (imperfecto - bakgrunn)
2. Juan **caminaba** hacia su casa. (imperfecto - pågående)
3. De repente, **oyó** un ruido extraño. (perfecto - hendelse)` },
    {
      id: 'spansk-2-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Ordne setningene til en fortelling:',
        subTasks: [
        { label: 'a', task: 'a) De repente, vio un gato en la calle.', solution: '3. (vendepunkt)', answer: '3. (vendepunkt)' },
        { label: 'b', task: 'b) Era una mañana fría de invierno.', solution: '1. (innledning - bakgrunn)', answer: '1. (innledning - bakgrunn)' },
        { label: 'c', task: 'c) Lo llevó a casa y le dio leche.', solution: '4. (avslutning)', answer: '4. (avslutning)' },
        { label: 'd', task: 'd) Ana caminaba al trabajo como siempre.', solution: '2. (utvikling - pågående)', answer: '2. (utvikling - pågående)' },
        ],
        solution: 'a) 3. (vendepunkt), b) 1. (innledning - bakgrunn), c) 4. (avslutning), d) 2. (utvikling - pågående)',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort fortelling (3-4 setninger) med:',
        subTasks: [
        { label: 'a', task: 'Bakgrunn: sommer, sol, strand', solution: 'Era verano. Hacía mucho sol y estábamos en la playa.', answer: 'Era verano. Hacía mucho sol y estábamos en la playa.' },
        { label: 'b', task: 'Pågående: svømme, leke', solution: 'Los niños nadaban y jugaban en el agua.', answer: 'Los niños nadaban y jugaban en el agua.' },
        { label: 'c', task: 'Hendelse: se en delfin', solution: 'De repente, vimos un delfín cerca de la orilla.', answer: 'De repente, vimos un delfín cerca de la orilla.' },
        { label: 'd', task: 'Avslutning: ta bilde, gå hjem', solution: 'Sacamos fotos y finalmente volvimos a casa muy contentos.', answer: 'Sacamos fotos y finalmente volvimos a casa muy contentos.' },
        ],
        solution: 'a) Era verano. Hacía mucho sol y estábamos en la playa., b) Los niños nadaban y jugaban en el agua., c) De repente, vimos un delfín cerca de la orilla., d) Sacamos fotos y finalmente volvimos a casa muy contentos.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-1-4-tip-1', type: 'tip', content: `**Skrivetips:** Start alltid med å sette scenen med imperfecto. Beskriv tid, sted, vær og hva som pågikk. Så kan du introdusere hendelser med perfecto.` },
    { id: 'spansk-2-1-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Narrar en el pasado**

- **Imperfecto:** Bakgrunn, beskrivelser, pågående handlinger
- **Perfecto:** Konkrete hendelser, handlinger som driver historien fremover
- **Connectors:** primero, luego, de repente, finalmente
- **Struktur:** Innledning → Utvikling → Vendepunkt → Avslutning` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: EL SUBJUNTIVO
// ============================================================================

// ----------------------------------------------------------------------------
// 2.1 Introducción al subjuntivo
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_2_1: TextbookChapter = {
  id: 'spansk-2-2-1',
  courseId: 'spansk-2',
  chapterNumber: '2.1',
  title: 'Introducción al subjuntivo',
  subtitle: 'Hva er konjunktiv?',
  description: 'Forstå hva konjunktiv er og når den brukes i spansk.',
  estimatedMinutes: 45,
  competenceGoals: ['forstå konjunktiv som begrep', 'danne presens konjunktiv'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-2-1-intro', type: 'text', content: `## Introducción al subjuntivo

Konjunktiv (el subjuntivo) er en verbmodus som ikke finnes på norsk, og som er en av de største utfordringene for norsktalende som lærer spansk. Mens **indikativ** uttrykker fakta og sikkerhet, uttrykker **subjuntivo** ønsker, følelser, tvil og usikkerhet.` },
    { id: 'spansk-2-2-1-def-1', type: 'definition', title: 'El subjuntivo (konjunktiv)', content: `**Subjuntivo** er en verbmodus som uttrykker subjektivitet: ønsker, følelser, tvil og usikkerhet.

**Presens subjuntivo - dannelse:**
| | -AR (hablar) | -ER (comer) | -IR (vivir) |
|---|---|---|---|
| yo | hable | coma | viva |
| tú | hables | comas | vivas |
| él | hable | coma | viva |
| nosotros | hablemos | comamos | vivamos |
| ellos | hablen | coman | vivan |

**Huskeregel:** -AR verb får -E endelser, -ER/-IR verb får -A endelser.` },
    { id: 'spansk-2-2-1-text-1', type: 'text', content: `## WEIRDO-regelen

En huskeregel for når subjuntivo brukes:

- **W**ishes (ønsker): *Quiero que vengas.*
- **E**motions (følelser): *Me alegra que estés aquí.*
- **I**mpersonal expressions: *Es importante que estudies.*
- **R**ecommendations: *Te recomiendo que vayas.*
- **D**oubt/Denial: *Dudo que sea verdad.*
- **O**jalá: *Ojalá que llueva.*` },
    { id: 'spansk-2-2-1-text-2', type: 'text', content: `## Uregelmessige verb i presens subjuntivo

| Verb | Subjuntivo |
|------|------------|
| ser | sea, seas, sea, seamos, sean |
| estar | esté, estés, esté, estemos, estén |
| ir | vaya, vayas, vaya, vayamos, vayan |
| haber | haya, hayas, haya, hayamos, hayan |
| saber | sepa, sepas, sepa, sepamos, sepan |
| dar | dé, des, dé, demos, den |` },
    { id: 'spansk-2-2-1-example-1', type: 'example', title: 'Eksempel: Dannelse av subjuntivo', problem: `Dann presens subjuntivo:
a) hablar (yo)
b) comer (tú)
c) vivir (él)`, solution: `a) habl**e** (-AR → -E endelser)
b) com**as** (-ER → -A endelser)
c) viv**a** (-IR → -A endelser)` },
    {
      id: 'spansk-2-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Dann presens subjuntivo:',
        subTasks: [
        { label: 'a', task: 'hablar (yo)', solution: 'hable', answer: 'hable' },
        { label: 'b', task: 'comer (tú)', solution: 'comas', answer: 'comas' },
        { label: 'c', task: 'vivir (ella)', solution: 'viva', answer: 'viva' },
        { label: 'd', task: 'estudiar (nosotros)', solution: 'estudiemos', answer: 'estudiemos' },
        ],
        solution: 'a) hable, b) comas, c) viva, d) estudiemos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig uregelmessig subjuntivo:',
        subTasks: [
        { label: 'a', task: 'Es importante que tú ___ (ser) puntual.', solution: 'seas', answer: 'seas' },
        { label: 'b', task: 'Quiero que él ___ (ir) al médico.', solution: 'vaya', answer: 'vaya' },
        { label: 'c', task: 'Espero que nosotros ___ (estar) bien.', solution: 'estemos', answer: 'estemos' },
        { label: 'd', task: 'Es necesario que yo ___ (saber) la verdad.', solution: 'sepa', answer: 'sepa' },
        ],
        solution: 'a) seas, b) vaya, c) estemos, d) sepa',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-2-1-example-2', type: 'example', title: 'Eksempel: Subjuntivo i setning', problem: `Oversett: Jeg vil at du skal komme.`, solution: `**Quiero que vengas.** (querer que + subjuntivo)` },
    {
      id: 'spansk-2-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg indikativ eller subjuntivo:',
        subTasks: [
        { label: 'a', task: 'Creo que María ___ (estar) en casa. (sikkerhet)', solution: 'está (indikativ)', answer: 'está (indikativ)' },
        { label: 'b', task: 'Espero que María ___ (estar) en casa. (ønske)', solution: 'esté (subjuntivo)', answer: 'esté (subjuntivo)' },
        { label: 'c', task: 'Sé que tú ___ (hablar) español. (fakta)', solution: 'hablas (indikativ)', answer: 'hablas (indikativ)' },
        { label: 'd', task: 'Quiero que tú ___ (hablar) español. (ønske)', solution: 'hables (subjuntivo)', answer: 'hables (subjuntivo)' },
        ],
        solution: 'a) está (indikativ), b) esté (subjuntivo), c) hablas (indikativ), d) hables (subjuntivo)',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-2-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett med subjuntivo:',
        subTasks: [
        { label: 'a', task: 'Jeg vil at du skal studere mer.', solution: 'Quiero que estudies más.', answer: 'Quiero que estudies más.' },
        { label: 'b', task: 'Det er viktig at vi kommer i tide.', solution: 'Es importante que lleguemos a tiempo.', answer: 'Es importante que lleguemos a tiempo.' },
        { label: 'c', task: 'Forhåpentligvis er det fint vær.', solution: 'Ojalá (que) haga buen tiempo.', answer: 'Ojalá (que) haga buen tiempo.' },
        { label: 'd', task: 'Jeg tviler på at han vet svaret.', solution: 'Dudo que sepa la respuesta.', answer: 'Dudo que sepa la respuesta.' },
        ],
        solution: 'a) Quiero que estudies más., b) Es importante que lleguemos a tiempo., c) Ojalá (que) haga buen tiempo., d) Dudo que sepa la respuesta.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-2-1-tip-1', type: 'tip', content: `**Huskeregel for dannelse:** Ta yo-formen i presens indikativ, fjern -o, og legg til subjuntivo-endelsene. F.eks.: tengo → teng- → tenga, tengas, tenga...` },
    { id: 'spansk-2-2-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: El subjuntivo**

- **Modus for subjektivitet** - ønsker, følelser, tvil
- **-AR verb:** -e, -es, -e, -emos, -en
- **-ER/-IR verb:** -a, -as, -a, -amos, -an
- **WEIRDO:** Wishes, Emotions, Impersonal, Recommendations, Doubt, Ojalá
- **Uregelmessige:** sea, vaya, sepa, haya, esté, dé` },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.2 Subjuntivo con emociones y deseos
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_2_2: TextbookChapter = {
  id: 'spansk-2-2-2',
  courseId: 'spansk-2',
  chapterNumber: '2.2',
  title: 'Subjuntivo con emociones y deseos',
  subtitle: 'Konjunktiv med følelser og ønsker',
  description: 'Bruk konjunktiv med uttrykk for følelser, ønsker og vilje.',
  estimatedMinutes: 45,
  competenceGoals: ['uttrykke ønsker med konjunktiv', 'reagere følelsesmessig med konjunktiv'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-2-2-intro', type: 'text', content: `## Subjuntivo con emociones y deseos

Når du uttrykker **ønsker, følelser eller vilje** overfor noen andre, bruker du subjuntivo i bisetningen. Legg merke til at subjuntivo bare brukes når subjektet i hovedsetningen og bisetningen er **forskjellige**.` },
    { id: 'spansk-2-2-2-def-1', type: 'definition', title: 'Subjuntivo med følelser og ønsker', content: `Subjuntivo brukes i bisetningen når hovedsetningen uttrykker **følelser** eller **ønsker**.

**Ønsker:** querer que, desear que, esperar que, preferir que
**Følelser:** alegrarse de que, sentir que, tener miedo de que, molestar que, sorprender que
**Vilje:** pedir que, rogar que, exigir que, prohibir que

**Struktur:** Hovedsetning (indikativ) + **que** + Bisetning (subjuntivo)` },
    { id: 'spansk-2-2-2-text-1', type: 'text', content: `## Ønskeverb + que + subjuntivo

- *Quiero **que** vengas.* (Jeg vil at du skal komme.)
- *Espero **que** estés bien.* (Jeg håper du har det bra.)
- *Deseo **que** seas feliz.* (Jeg ønsker at du er lykkelig.)
- *Prefiero **que** estudiemos juntos.* (Jeg foretrekker at vi studerer sammen.)

**NB:** Når subjektet er det samme, bruk infinitiv: *Quiero **ir**.* (Jeg vil gå.)` },
    { id: 'spansk-2-2-2-text-2', type: 'text', content: `## Følelsesverb + que + subjuntivo

- *Me alegra que estés aquí.* (Jeg er glad for at du er her.)
- *Siento que no puedas venir.* (Jeg er lei for at du ikke kan komme.)
- *Me molesta que hablen tan alto.* (Det irriterer meg at de snakker så høyt.)
- *Me sorprende que no lo sepas.* (Det overrasker meg at du ikke vet det.)` },
    { id: 'spansk-2-2-2-example-1', type: 'example', title: 'Eksempel: Ønske vs. fakta', problem: `Fyll inn:
a) Quiero que tú ___ (venir). (ønske)
b) Sé que tú ___ (venir). (fakta)`, solution: `a) Quiero que tú **vengas**. (subjuntivo - ønske)
b) Sé que tú **vienes**. (indikativ - fakta)` },
    {
      id: 'spansk-2-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn subjuntivo:',
        subTasks: [
        { label: 'a', task: 'Quiero que tú ___ (estudiar).', solution: 'estudies', answer: 'estudies' },
        { label: 'b', task: 'Espero que ella ___ (llegar) pronto.', solution: 'llegue', answer: 'llegue' },
        { label: 'c', task: 'Deseo que vosotros ___ (ser) felices.', solution: 'seáis', answer: 'seáis' },
        { label: 'd', task: 'Prefiero que nosotros ___ (comer) en casa.', solution: 'comamos', answer: 'comamos' },
        ],
        solution: 'a) estudies, b) llegue, c) seáis, d) comamos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg infinitiv eller subjuntivo:',
        subTasks: [
        { label: 'a', task: 'Quiero ___ (ir) al cine. (samme subjekt)', solution: 'ir (infinitiv)', answer: 'ir (infinitiv)' },
        { label: 'b', task: 'Quiero que tú ___ (ir) al cine. (ulikt subjekt)', solution: 'vayas (subjuntivo)', answer: 'vayas (subjuntivo)' },
        { label: 'c', task: 'Esperamos ___ (terminar) pronto. (samme subjekt)', solution: 'terminar (infinitiv)', answer: 'terminar (infinitiv)' },
        { label: 'd', task: 'Esperamos que ellos ___ (terminar). (ulikt subjekt)', solution: 'terminen (subjuntivo)', answer: 'terminen (subjuntivo)' },
        ],
        solution: 'a) ir (infinitiv), b) vayas (subjuntivo), c) terminar (infinitiv), d) terminen (subjuntivo)',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-2-2-example-2', type: 'example', title: 'Eksempel: Følelsesuttrykk', problem: `Oversett: Jeg er glad for at dere er her.`, solution: `**Me alegra que estéis/estén aquí.** (alegrarse de que + subjuntivo)` },
    {
      id: 'spansk-2-2-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Uttrykk følelser med subjuntivo:',
        subTasks: [
        { label: 'a', task: 'Me alegra que / tú / estar aquí', solution: 'Me alegra que estés aquí.', answer: 'Me alegra que estés aquí.' },
        { label: 'b', task: 'Siento que / ella / no poder venir', solution: 'Siento que no pueda venir.', answer: 'Siento que no pueda venir.' },
        { label: 'c', task: 'Me molesta que / ellos / llegar tarde', solution: 'Me molesta que lleguen tarde.', answer: 'Me molesta que lleguen tarde.' },
        { label: 'd', task: 'Me sorprende que / tú / no saber', solution: 'Me sorprende que no sepas.', answer: 'Me sorprende que no sepas.' },
        ],
        solution: 'a) Me alegra que estés aquí., b) Siento que no pueda venir., c) Me molesta que lleguen tarde., d) Me sorprende que no sepas.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-2-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til spansk:',
        subTasks: [
        { label: 'a', task: 'Jeg håper at du har det bra.', solution: 'Espero que estés bien.', answer: 'Espero que estés bien.' },
        { label: 'b', task: 'Min mor vil at jeg skal studere medisin.', solution: 'Mi madre quiere que estudie medicina.', answer: 'Mi madre quiere que estudie medicina.' },
        { label: 'c', task: 'Det irriterer meg at de ikke lytter.', solution: 'Me molesta que no escuchen.', answer: 'Me molesta que no escuchen.' },
        { label: 'd', task: 'Vi er glade for at dere kan komme.', solution: 'Nos alegramos de que podáis/puedan venir.', answer: 'Nos alegramos de que podáis/puedan venir.' },
        ],
        solution: 'a) Espero que estés bien., b) Mi madre quiere que estudie medicina., c) Me molesta que no escuchen., d) Nos alegramos de que podáis/puedan venir.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-2-2-tip-1', type: 'tip', content: `**Viktig forskjell:** Samme subjekt → infinitiv. Ulikt subjekt → que + subjuntivo.
*Quiero ir.* (Jeg vil gå.) vs. *Quiero que vayas.* (Jeg vil at du skal gå.)` },
    { id: 'spansk-2-2-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Subjuntivo med følelser/ønsker**

- **Ønsker:** querer/esperar/desear/preferir + que + subjuntivo
- **Følelser:** alegrarse/sentir/molestar/sorprender + que + subjuntivo
- **Regel:** Ulikt subjekt → subjuntivo. Samme subjekt → infinitiv
- **Struktur:** Hovedverb + que + subjuntivo` },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.3 Subjuntivo con expresiones impersonales
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_2_3: TextbookChapter = {
  id: 'spansk-2-2-3',
  courseId: 'spansk-2',
  chapterNumber: '2.3',
  title: 'Subjuntivo con expresiones impersonales',
  subtitle: 'Konjunktiv med upersonlige uttrykk',
  description: 'Bruk konjunktiv etter upersonlige uttrykk som es importante que.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke upersonlige uttrykk med konjunktiv', 'skille mellom sikkerhet og usikkerhet'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-2-3-intro', type: 'text', content: `## Subjuntivo con expresiones impersonales

Mange **upersonlige uttrykk** (es + adjektiv + que) følges av subjuntivo. Hovedregelen er at uttrykk som viser **vurdering, nødvendighet, mulighet eller følelse** tar subjuntivo, mens uttrykk som viser **sikkerhet** tar indikativ.` },
    { id: 'spansk-2-2-3-def-1', type: 'definition', title: 'Upersonlige uttrykk + subjuntivo', content: `Upersonlige uttrykk som uttrykker **nødvendighet, mulighet eller vurdering** tar subjuntivo:

| Uttrykk | Norsk | Modus |
|---------|-------|-------|
| Es importante que | Det er viktig at | Subjuntivo |
| Es necesario que | Det er nødvendig at | Subjuntivo |
| Es posible que | Det er mulig at | Subjuntivo |
| Es probable que | Det er sannsynlig at | Subjuntivo |
| Es mejor que | Det er bedre at | Subjuntivo |
| Es una lástima que | Det er synd at | Subjuntivo |
| Es cierto que | Det er sikkert at | **Indikativ** |
| Es evidente que | Det er tydelig at | **Indikativ** |` },
    { id: 'spansk-2-2-3-text-1', type: 'text', content: `## Subjuntivo vs. Indikativ

**Subjuntivo** (usikkerhet/vurdering):
- *Es posible que llueva.* (Det er mulig at det regner.)
- *Es importante que estudies.* (Det er viktig at du studerer.)

**Indikativ** (sikkerhet/fakta):
- *Es cierto que llueve.* (Det er sikkert at det regner.)
- *Es evidente que estudia mucho.* (Det er tydelig at hun studerer mye.)` },
    { id: 'spansk-2-2-3-text-2', type: 'text', content: `## Negasjon endrer modus

Når et "sikkerhetsuttrykk" negeres, tar det subjuntivo:
- *Es cierto que viene.* → *No es cierto que **venga**.*
- *Es verdad que sabe.* → *No es verdad que **sepa**.*
- *Es evidente que trabaja.* → *No es evidente que **trabaje**.*` },
    { id: 'spansk-2-2-3-example-1', type: 'example', title: 'Eksempel: Upersonlige uttrykk', problem: `Fyll inn:
a) Es importante que nosotros ___ (estudiar).
b) Es cierto que María ___ (hablar) tres idiomas.`, solution: `a) Es importante que nosotros **estudiemos**. (subjuntivo - vurdering)
b) Es cierto que María **habla** tres idiomas. (indikativ - sikkerhet)` },
    {
      id: 'spansk-2-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn subjuntivo:',
        subTasks: [
        { label: 'a', task: 'Es importante que tú ___ (llegar) a tiempo.', solution: 'llegues', answer: 'llegues' },
        { label: 'b', task: 'Es necesario que nosotros ___ (hablar) español.', solution: 'hablemos', answer: 'hablemos' },
        { label: 'c', task: 'Es posible que ___ (llover) mañana.', solution: 'llueva', answer: 'llueva' },
        { label: 'd', task: 'Es mejor que ella ___ (ir) al médico.', solution: 'vaya', answer: 'vaya' },
        ],
        solution: 'a) llegues, b) hablemos, c) llueva, d) vaya',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg subjuntivo eller indikativ:',
        subTasks: [
        { label: 'a', task: 'Es cierto que ellos ___ (vivir) en Madrid.', solution: 'viven (indikativ - sikkerhet)', answer: 'viven (indikativ - sikkerhet)' },
        { label: 'b', task: 'Es probable que ellos ___ (vivir) en Madrid.', solution: 'vivan (subjuntivo - mulighet)', answer: 'vivan (subjuntivo - mulighet)' },
        { label: 'c', task: 'Es evidente que ___ (hacer) calor.', solution: 'hace (indikativ - sikkerhet)', answer: 'hace (indikativ - sikkerhet)' },
        { label: 'd', task: 'Es posible que ___ (hacer) calor.', solution: 'haga (subjuntivo - mulighet)', answer: 'haga (subjuntivo - mulighet)' },
        ],
        solution: 'a) viven (indikativ - sikkerhet), b) vivan (subjuntivo - mulighet), c) hace (indikativ - sikkerhet), d) haga (subjuntivo - mulighet)',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-2-3-example-2', type: 'example', title: 'Eksempel: Negasjon', problem: `Endre til negativ form:
Es verdad que Juan sabe la respuesta.`, solution: `**No es verdad que Juan sepa la respuesta.** (negasjon → subjuntivo)` },
    {
      id: 'spansk-2-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Endre til negativ form (bruk subjuntivo):',
        subTasks: [
        { label: 'a', task: 'Es verdad que Juan habla chino.', solution: 'No es verdad que Juan hable chino.', answer: 'No es verdad que Juan hable chino.' },
        { label: 'b', task: 'Es seguro que vienen mañana.', solution: 'No es seguro que vengan mañana.', answer: 'No es seguro que vengan mañana.' },
        { label: 'c', task: 'Es cierto que sabe la respuesta.', solution: 'No es cierto que sepa la respuesta.', answer: 'No es cierto que sepa la respuesta.' },
        { label: 'd', task: 'Es evidente que trabaja mucho.', solution: 'No es evidente que trabaje mucho.', answer: 'No es evidente que trabaje mucho.' },
        ],
        solution: 'a) No es verdad que Juan hable chino., b) No es seguro que vengan mañana., c) No es cierto que sepa la respuesta., d) No es evidente que trabaje mucho.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-2-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til spansk:',
        subTasks: [
        { label: 'a', task: 'Det er viktig at vi lærer spansk.', solution: 'Es importante que aprendamos español.', answer: 'Es importante que aprendamos español.' },
        { label: 'b', task: 'Det er mulig at de kommer i morgen.', solution: 'Es posible que vengan mañana.', answer: 'Es posible que vengan mañana.' },
        { label: 'c', task: 'Det er ikke sikkert at han vet det.', solution: 'No es seguro que lo sepa.', answer: 'No es seguro que lo sepa.' },
        { label: 'd', task: 'Det er synd at du ikke kan komme.', solution: 'Es una lástima que no puedas venir.', answer: 'Es una lástima que no puedas venir.' },
        ],
        solution: 'a) Es importante que aprendamos español., b) Es posible que vengan mañana., c) No es seguro que lo sepa., d) Es una lástima que no puedas venir.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-2-3-tip-1', type: 'tip', content: `**Hovedregel:** Sikkerhet → indikativ. Alt annet (mulighet, nødvendighet, vurdering, følelse) → subjuntivo. Ved negasjon av sikkerhet → subjuntivo.` },
    { id: 'spansk-2-2-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Upersonlige uttrykk**

- **Subjuntivo:** es importante/necesario/posible/probable/mejor/una lástima que
- **Indikativ:** es cierto/seguro/evidente/verdad que
- **Negasjon:** No es cierto/seguro que → subjuntivo
- **Nøkkel:** Vurdering/usikkerhet → subjuntivo, Fakta → indikativ` },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.4 Subjuntivo en la práctica
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_2_4: TextbookChapter = {
  id: 'spansk-2-2-4',
  courseId: 'spansk-2',
  chapterNumber: '2.4',
  title: 'Subjuntivo en la práctica',
  subtitle: 'Konjunktiv i praksis',
  description: 'Øv på å bruke konjunktiv i realistiske situasjoner.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke konjunktiv naturlig', 'skrive tekster med konjunktiv'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-2-4-intro', type: 'text', content: `## Subjuntivo en la práctica

Nå som du kjenner reglene for subjuntivo, er det på tide å bruke det i **praksis**. I dette kapittelet ser vi på hvordan subjuntivo brukes i hverdagssituasjoner: gi råd, skrive e-post, uttrykke håp og gi kommandoer.` },
    { id: 'spansk-2-2-4-def-1', type: 'definition', title: 'Konjunktiv i daglig bruk', content: `I dagligspråket brukes subjuntivo i mange vanlige situasjoner:

**Råd:** *Te aconsejo que estudies más.* (Jeg råder deg til å studere mer.)
**Forbud:** *No quiero que salgas solo.* (Jeg vil ikke at du går ut alene.)
**Håp:** *Ojalá que todo salga bien.* (Forhåpentligvis går alt bra.)
**Formelle brev:** *Le ruego que me envíe...* (Jeg ber Dem om å sende meg...)` },
    { id: 'spansk-2-2-4-text-1', type: 'text', content: `## Subjuntivo i e-post og brev

**Formelt:**
- *Le ruego que me envíe la información.* (Jeg ber Dem sende informasjonen.)
- *Es necesario que confirme su reserva.* (Det er nødvendig at De bekrefter reservasjonen.)

**Uformelt:**
- *Espero que estés bien.* (Håper du har det bra.)
- *Quiero que sepas que...* (Jeg vil at du skal vite at...)` },
    { id: 'spansk-2-2-4-text-2', type: 'text', content: `## Subjuntivo med råd og anbefalinger

| Uttrykk | Eksempel |
|---------|----------|
| Te aconsejo que | Te aconsejo que estudies más. |
| Te recomiendo que | Te recomiendo que vayas al médico. |
| Te sugiero que | Te sugiero que hables con ella. |
| Es mejor que | Es mejor que descanses. |` },
    { id: 'spansk-2-2-4-example-1', type: 'example', title: 'Eksempel: Gi råd', problem: `Gi råd til en venn som er stresset:
a) Anbefal å slappe av
b) Foreslå å snakke med noen`, solution: `a) *Te recomiendo que **descanses** más.* (Jeg anbefaler at du slapper av mer.)
b) *Te sugiero que **hables** con alguien.* (Jeg foreslår at du snakker med noen.)` },
    {
      id: 'spansk-2-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gi råd med subjuntivo:',
        subTasks: [
        { label: 'a', task: 'Te aconsejo que ___ (dormir) más.', solution: 'duermas', answer: 'duermas' },
        { label: 'b', task: 'Te recomiendo que ___ (comer) más fruta.', solution: 'comas', answer: 'comas' },
        { label: 'c', task: 'Es mejor que ___ (ir) al médico.', solution: 'vayas', answer: 'vayas' },
        { label: 'd', task: 'Te sugiero que ___ (hablar) con tu profesor.', solution: 'hables', answer: 'hables' },
        ],
        solution: 'a) duermas, b) comas, c) vayas, d) hables',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setninger med ojalá:',
        subTasks: [
        { label: 'a', task: 'Ojalá que ___ (hacer) buen tiempo mañana.', solution: 'haga', answer: 'haga' },
        { label: 'b', task: 'Ojalá que ___ (aprobar) el examen.', solution: 'apruebe/aprobemos', answer: 'apruebe/aprobemos' },
        { label: 'c', task: 'Ojalá que mis padres ___ (poder) venir.', solution: 'puedan', answer: 'puedan' },
        { label: 'd', task: 'Ojalá que ___ (encontrar) trabajo pronto.', solution: 'encuentre/encuentres', answer: 'encuentre/encuentres' },
        ],
        solution: 'a) haga, b) apruebe/aprobemos, c) puedan, d) encuentre/encuentres',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-2-4-example-2', type: 'example', title: 'Eksempel: Formell e-post', problem: `Skriv en setning der du ber om informasjon formelt.`, solution: `*Le ruego que me **envíe** más información sobre el curso.* (Jeg ber Dem sende meg mer informasjon om kurset.)` },
    {
      id: 'spansk-2-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfør den formelle e-posten:',
        subTasks: [
        { label: 'a', task: 'Estimado señor: Le ruego que me ___ (enviar) el catálogo.', solution: 'envíe', answer: 'envíe' },
        { label: 'b', task: 'Es necesario que yo ___ (recibir) la información.', solution: 'reciba', answer: 'reciba' },
        { label: 'c', task: 'Espero que ___ (poder) ayudarme.', solution: 'pueda', answer: 'pueda' },
        { label: 'd', task: 'Le pido que me ___ (confirmar) la reserva.', solution: 'confirme', answer: 'confirme' },
        ],
        solution: 'a) envíe, b) reciba, c) pueda, d) confirme',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-2-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til spansk med subjuntivo:',
        subTasks: [
        { label: 'a', task: 'Jeg anbefaler at du reiser til Barcelona.', solution: 'Te recomiendo que viajes a Barcelona.', answer: 'Te recomiendo que viajes a Barcelona.' },
        { label: 'b', task: 'Forhåpentligvis kan vi ses snart.', solution: 'Ojalá que podamos vernos pronto.', answer: 'Ojalá que podamos vernos pronto.' },
        { label: 'c', task: 'Læreren krever at vi leverer oppgaven.', solution: 'El profesor exige que entreguemos la tarea.', answer: 'El profesor exige que entreguemos la tarea.' },
        { label: 'd', task: 'Jeg ber om at De svarer så snart som mulig.', solution: 'Le ruego que responda lo antes posible.', answer: 'Le ruego que responda lo antes posible.' },
        ],
        solution: 'a) Te recomiendo que viajes a Barcelona., b) Ojalá que podamos vernos pronto., c) El profesor exige que entreguemos la tarea., d) Le ruego que responda lo antes posible.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-2-4-tip-1', type: 'tip', content: `**Ojalá** kan brukes med eller uten "que": *Ojalá llueva* = *Ojalá que llueva*. Det uttrykker et sterkt ønske og tar ALLTID subjuntivo.` },
    { id: 'spansk-2-2-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Subjuntivo i praksis**

- **Råd:** aconsejar/recomendar/sugerir + que + subjuntivo
- **Håp:** ojalá (que) + subjuntivo
- **Formelt:** rogar/pedir + que + subjuntivo
- **E-post:** Le ruego que..., Es necesario que..., Espero que...` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: CONDICIONAL Y FUTURO
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 El futuro simple
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_3_1: TextbookChapter = {
  id: 'spansk-2-3-1',
  courseId: 'spansk-2',
  chapterNumber: '3.1',
  title: 'El futuro simple',
  subtitle: 'Enkel fremtid',
  description: 'Lær å uttrykke fremtiden med enkel fremtid.',
  estimatedMinutes: 45,
  competenceGoals: ['danne futuro simple', 'uttrykke fremtid og forutsigelser'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-3-1-intro', type: 'text', content: `## El futuro simple

Det spanske **futuro simple** (enkel fremtid) brukes for å snakke om fremtiden, gjøre forutsigelser og uttrykke løfter. Det er enklere å danne enn mange andre spanske tidsformer fordi endelsene legges til hele infinitiven.` },
    { id: 'spansk-2-3-1-def-1', type: 'definition', title: 'Futuro simple (enkel fremtid)', content: `**Futuro simple** dannes ved å legge endelser til **hele infinitiven**.

| Person | Endelse | hablar | comer | vivir |
|--------|---------|--------|-------|-------|
| yo | -é | hablaré | comeré | viviré |
| tú | -ás | hablarás | comerás | vivirás |
| él | -á | hablará | comerá | vivirá |
| nosotros | -emos | hablaremos | comeremos | viviremos |
| ellos | -án | hablarán | comerán | vivirán |

**Uregelmessige stammer:**
tener→tendr-, poner→pondr-, venir→vendr-, salir→saldr-, hacer→har-, decir→dir-, poder→podr-, saber→sabr-, querer→querr-` },
    { id: 'spansk-2-3-1-text-1', type: 'text', content: `## Bruksområder

1. **Forutsigelser:** *Mañana lloverá.* (I morgen vil det regne.)
2. **Løfter:** *Te llamaré esta noche.* (Jeg ringer deg i kveld.)
3. **Sannsynlighet (nåtid):** *¿Qué hora será?* (Hva kan klokken være?)
4. **Fremtidige planer:** *El próximo año estudiaré en España.* (Neste år skal jeg studere i Spania.)` },
    { id: 'spansk-2-3-1-text-2', type: 'text', content: `## Uregelmessige verb

Disse verbene har uregelmessig stamme men samme endelser:

| Infinitiv | Stamme | Eksempel (yo) |
|-----------|--------|---------------|
| tener | tendr- | tendré |
| poner | pondr- | pondré |
| venir | vendr- | vendré |
| salir | saldr- | saldré |
| hacer | har- | haré |
| decir | dir- | diré |
| poder | podr- | podré |
| saber | sabr- | sabré |` },
    { id: 'spansk-2-3-1-example-1', type: 'example', title: 'Eksempel: Regelmessige verb', problem: `Dann futuro simple:
a) yo / hablar
b) nosotros / comer
c) ellos / vivir`, solution: `a) yo **hablaré**
b) nosotros **comeremos**
c) ellos **vivirán**` },
    {
      id: 'spansk-2-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Dann futuro simple:',
        subTasks: [
        { label: 'a', task: 'yo / trabajar', solution: 'trabajaré', answer: 'trabajaré' },
        { label: 'b', task: 'tú / aprender', solution: 'aprenderás', answer: 'aprenderás' },
        { label: 'c', task: 'él / escribir', solution: 'escribirá', answer: 'escribirá' },
        { label: 'd', task: 'nosotros / viajar', solution: 'viajaremos', answer: 'viajaremos' },
        ],
        solution: 'a) trabajaré, b) aprenderás, c) escribirá, d) viajaremos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn uregelmessig futuro:',
        subTasks: [
        { label: 'a', task: 'Mañana ___ (tener) un examen.', solution: 'tendré', answer: 'tendré' },
        { label: 'b', task: '¿___ (poder) venir tú?', solution: 'Podrás', answer: 'Podrás' },
        { label: 'c', task: 'Ella ___ (hacer) la cena.', solution: 'hará', answer: 'hará' },
        { label: 'd', task: 'Nosotros ___ (salir) temprano.', solution: 'saldremos', answer: 'saldremos' },
        ],
        solution: 'a) tendré, b) Podrás, c) hará, d) saldremos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-3-1-example-2', type: 'example', title: 'Eksempel: Uregelmessige verb', problem: `Dann futuro:
a) yo / tener
b) tú / poder
c) ella / hacer`, solution: `a) yo **tendré** (tendr- + é)
b) tú **podrás** (podr- + ás)
c) ella **hará** (har- + á)` },
    {
      id: 'spansk-2-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til spansk med futuro:',
        subTasks: [
        { label: 'a', task: 'I morgen skal jeg reise til Madrid.', solution: 'Mañana viajaré a Madrid.', answer: 'Mañana viajaré a Madrid.' },
        { label: 'b', task: 'Vi vil ha eksamen neste uke.', solution: 'Tendremos un examen la semana que viene.', answer: 'Tendremos un examen la semana que viene.' },
        { label: 'c', task: 'Tror du det vil regne?', solution: '¿Crees que lloverá?', answer: '¿Crees que lloverá?' },
        { label: 'd', task: 'De vil ikke kunne komme.', solution: 'No podrán venir.', answer: 'No podrán venir.' },
        ],
        solution: 'a) Mañana viajaré a Madrid., b) Tendremos un examen la semana que viene., c) ¿Crees que lloverá?, d) No podrán venir.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-3-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om fremtidsplanene dine:',
        subTasks: [
        { label: 'a', task: 'Hva skal du gjøre i sommer?', solution: 'F.eks.: Este verano viajaré a España y visitaré Barcelona.', answer: 'F.eks.: Este verano viajaré a España y visitaré Barcelona.' },
        { label: 'b', task: 'Hva tror du vil skje i verden?', solution: 'F.eks.: Creo que la tecnología cambiará nuestras vidas.', answer: 'F.eks.: Creo que la tecnología cambiará nuestras vidas.' },
        { label: 'c', task: 'Gi et løfte til en venn.', solution: 'F.eks.: Te llamaré mañana sin falta.', answer: 'F.eks.: Te llamaré mañana sin falta.' },
        { label: 'd', task: 'Gjett hva klokken er (sannsynlighet).', solution: 'F.eks.: Serán las tres de la tarde.', answer: 'F.eks.: Serán las tres de la tarde.' },
        ],
        solution: 'a) F.eks.: Este verano viajaré a España y visitaré Barcelona., b) F.eks.: Creo que la tecnología cambiará nuestras vidas., c) F.eks.: Te llamaré mañana sin falta., d) F.eks.: Serán las tres de la tarde.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-3-1-tip-1', type: 'tip', content: `**Huskeregel:** Alle endelsene i futuro har aksent unntatt nosotros (-emos). Stammene for uregelmessige verb er de samme i futuro og condicional!` },
    { id: 'spansk-2-3-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Futuro simple**

- **Dannelse:** Infinitiv + -é, -ás, -á, -emos, -án
- **Uregelmessige stammer:** tendr-, pondr-, vendr-, saldr-, har-, dir-, podr-, sabr-, querr-
- **Bruk:** Forutsigelser, løfter, sannsynlighet, planer` },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.2 El condicional
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_3_2: TextbookChapter = {
  id: 'spansk-2-3-2',
  courseId: 'spansk-2',
  chapterNumber: '3.2',
  title: 'El condicional',
  subtitle: 'Vilkårsformen',
  description: 'Lær å uttrykke hypotetiske situasjoner og høflige forespørsler.',
  estimatedMinutes: 45,
  competenceGoals: ['danne kondisjonalis', 'uttrykke ønsker og høflighet'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-3-2-intro', type: 'text', content: `## El condicional

El **condicional** (kondisjonalis) tilsvarer norsk "ville" eller "skulle". Det brukes for å uttrykke **hypotetiske situasjoner**, **høflighet**, **råd** og **ønsker**.` },
    { id: 'spansk-2-3-2-def-1', type: 'definition', title: 'El condicional (kondisjonalis)', content: `**Condicional** dannes som futuro: endelser legges til **infinitiven** (eller uregelmessig stamme).

| Person | Endelse | hablar | comer | vivir |
|--------|---------|--------|-------|-------|
| yo | -ía | hablaría | comería | viviría |
| tú | -ías | hablarías | comerías | vivirías |
| él | -ía | hablaría | comería | viviría |
| nosotros | -íamos | hablaríamos | comeríamos | viviríamos |
| ellos | -ían | hablarían | comerían | vivirían |

**Samme uregelmessige stammer som futuro:** tendr-, pondr-, har-, dir-, etc.` },
    { id: 'spansk-2-3-2-text-1', type: 'text', content: `## Bruksområder

1. **Høflighet:** *¿Podría ayudarme?* (Kunne De hjelpe meg?)
2. **Ønsker:** *Me gustaría viajar a Perú.* (Jeg ville gjerne reise til Peru.)
3. **Hypotetisk:** *En tu lugar, estudiaría más.* (I ditt sted ville jeg studert mer.)
4. **Råd:** *Yo que tú, iría al médico.* (Hvis jeg var deg, ville jeg gått til legen.)` },
    { id: 'spansk-2-3-2-text-2', type: 'text', content: `## Condicional for høflighet

Condicional gjør forespørsler høfligere:

| Direkte | Høflig |
|---------|--------|
| Quiero un café. | **Querría** un café. |
| ¿Puedes ayudarme? | ¿**Podrías** ayudarme? |
| ¿Tiene una mesa? | ¿**Tendría** una mesa? |
| Debo irme. | **Debería** irme. |` },
    { id: 'spansk-2-3-2-example-1', type: 'example', title: 'Eksempel: Dannelse', problem: `Dann condicional:
a) yo / hablar
b) tú / tener
c) ella / hacer`, solution: `a) yo hablar**ía**
b) tú tendr**ías** (uregelmessig stamme)
c) ella har**ía** (uregelmessig stamme)` },
    {
      id: 'spansk-2-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Dann condicional:',
        subTasks: [
        { label: 'a', task: 'yo / hablar', solution: 'hablaría', answer: 'hablaría' },
        { label: 'b', task: 'tú / comer', solution: 'comerías', answer: 'comerías' },
        { label: 'c', task: 'ella / vivir', solution: 'viviría', answer: 'viviría' },
        { label: 'd', task: 'nosotros / trabajar', solution: 'trabajaríamos', answer: 'trabajaríamos' },
        ],
        solution: 'a) hablaría, b) comerías, c) viviría, d) trabajaríamos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn uregelmessig condicional:',
        subTasks: [
        { label: 'a', task: 'Yo ___ (tener) más tiempo libre.', solution: 'tendría', answer: 'tendría' },
        { label: 'b', task: '¿___ (poder) ayudarme?', solution: 'Podría/Podrías', answer: 'Podría/Podrías' },
        { label: 'c', task: 'Ella ___ (hacer) una fiesta.', solution: 'haría', answer: 'haría' },
        { label: 'd', task: 'Nosotros ___ (salir) a las ocho.', solution: 'saldríamos', answer: 'saldríamos' },
        ],
        solution: 'a) tendría, b) Podría/Podrías, c) haría, d) saldríamos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-3-2-example-2', type: 'example', title: 'Eksempel: Høflighet', problem: `Gjør setningene høfligere med condicional:
a) Quiero un vaso de agua.
b) ¿Puedes repetir?`, solution: `a) **Querría** un vaso de agua. / **Me gustaría** un vaso de agua.
b) ¿**Podrías** repetir?` },
    {
      id: 'spansk-2-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør setningene høfligere:',
        subTasks: [
        { label: 'a', task: 'Quiero un café con leche.', solution: 'Querría/Me gustaría un café con leche.', answer: 'Querría/Me gustaría un café con leche.' },
        { label: 'b', task: '¿Puedes cerrar la ventana?', solution: '¿Podrías cerrar la ventana?', answer: '¿Podrías cerrar la ventana?' },
        { label: 'c', task: '¿Tienes un bolígrafo?', solution: '¿Tendrías un bolígrafo?', answer: '¿Tendrías un bolígrafo?' },
        { label: 'd', task: 'Debes estudiar más.', solution: 'Deberías estudiar más.', answer: 'Deberías estudiar más.' },
        ],
        solution: 'a) Querría/Me gustaría un café con leche., b) ¿Podrías cerrar la ventana?, c) ¿Tendrías un bolígrafo?, d) Deberías estudiar más.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-3-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett med condicional:',
        subTasks: [
        { label: 'a', task: 'Jeg ville gjerne reise til Spania.', solution: 'Me gustaría viajar a España.', answer: 'Me gustaría viajar a España.' },
        { label: 'b', task: 'Kunne du hjelpe meg?', solution: '¿Podrías ayudarme?', answer: '¿Podrías ayudarme?' },
        { label: 'c', task: 'I ditt sted ville jeg studert mer.', solution: 'En tu lugar, estudiaría más.', answer: 'En tu lugar, estudiaría más.' },
        { label: 'd', task: 'Vi ville gjerne bestille et bord.', solution: 'Nos gustaría reservar una mesa.', answer: 'Nos gustaría reservar una mesa.' },
        ],
        solution: 'a) Me gustaría viajar a España., b) ¿Podrías ayudarme?, c) En tu lugar, estudiaría más., d) Nos gustaría reservar una mesa.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-3-2-tip-1', type: 'tip', content: `**Huskeregel:** Condicional = futuro-stammer + imperfecto-endelser (-ía, -ías, -ía, -íamos, -ían). Hvis du kan futuro, kan du condicional!` },
    { id: 'spansk-2-3-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: El condicional**

- **Dannelse:** Infinitiv (eller uregelm. stamme) + -ía, -ías, -ía, -íamos, -ían
- **Samme uregelmessige stammer som futuro**
- **Bruk:** Høflighet, ønsker, hypotetisk, råd
- **Me gustaría** = Jeg ville gjerne` },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.3 Oraciones condicionales
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_3_3: TextbookChapter = {
  id: 'spansk-2-3-3',
  courseId: 'spansk-2',
  chapterNumber: '3.3',
  title: 'Oraciones condicionales',
  subtitle: 'Betingelsessetninger',
  description: 'Lær å lage betingelsessetninger med si (hvis).',
  estimatedMinutes: 45,
  competenceGoals: ['lage betingelsessetninger', 'bruke imperfecto subjuntivo'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-3-3-intro', type: 'text', content: `## Oraciones condicionales

Betingelsessetninger med **si** (hvis) er viktige for å uttrykke betingelser og konsekvenser. Spansk skiller mellom **reelle betingelser** (type 1) og **ureelle/hypotetiske betingelser** (type 2).` },
    { id: 'spansk-2-3-3-def-1', type: 'definition', title: 'Betingelsessetninger (oraciones condicionales)', content: `**Type 1 - Reell betingelse (mulig):**
Si + presens indikativ, futuro/presens
*Si llueve, me quedo en casa.* (Hvis det regner, blir jeg hjemme.)

**Type 2 - Ureal betingelse (hypotetisk):**
Si + imperfecto de subjuntivo, condicional
*Si tuviera dinero, viajaría a Japón.* (Hvis jeg hadde penger, ville jeg reise til Japan.)

**Imperfecto de subjuntivo (-ara/-iera):**
| hablar | comer | vivir |
|--------|-------|-------|
| hablara | comiera | viviera |
| hablaras | comieras | vivieras |
| hablara | comiera | viviera |
| habláramos | comiéramos | viviéramos |
| hablaran | comieran | vivieran |` },
    { id: 'spansk-2-3-3-text-1', type: 'text', content: `## Type 1: Reell betingelse

Brukes når betingelsen er mulig eller sannsynlig.

**Formel:** Si + presens, presens/futuro

- *Si tengo tiempo, voy al cine.* (Hvis jeg har tid, går jeg på kino.)
- *Si estudias mucho, aprobarás el examen.* (Hvis du studerer mye, vil du bestå eksamen.)
- *Si llueve, no salimos.* (Hvis det regner, går vi ikke ut.)` },
    { id: 'spansk-2-3-3-text-2', type: 'text', content: `## Type 2: Ureal betingelse

Brukes når betingelsen er usannsynlig eller hypotetisk.

**Formel:** Si + imperfecto subjuntivo, condicional

- *Si tuviera dinero, compraría un coche.* (Hvis jeg hadde penger, ville jeg kjøpt en bil.)
- *Si pudiera volar, iría a la luna.* (Hvis jeg kunne fly, ville jeg dratt til månen.)

**Merk:** Si tar ALDRI presens subjuntivo!` },
    { id: 'spansk-2-3-3-example-1', type: 'example', title: 'Eksempel: Type 1 vs. Type 2', problem: `Forklar forskjellen:
a) Si tengo dinero, compro un libro.
b) Si tuviera dinero, compraría un coche.`, solution: `a) Type 1: Reell - Hvis jeg har penger (og det er mulig), kjøper jeg en bok.
b) Type 2: Ureal - Hvis jeg hadde penger (men det har jeg ikke), ville jeg kjøpt en bil.` },
    {
      id: 'spansk-2-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fullfør type 1 betingelser:',
        subTasks: [
        { label: 'a', task: 'Si llueve, ___ (quedarse) en casa.', solution: 'me quedo', answer: 'me quedo' },
        { label: 'b', task: 'Si tengo tiempo, ___ (ir) al gimnasio.', solution: 'voy/iré', answer: 'voy/iré' },
        { label: 'c', task: 'Si estudias, ___ (aprobar) el examen.', solution: 'aprobarás', answer: 'aprobarás' },
        { label: 'd', task: 'Si hace sol, ___ (ir) a la playa.', solution: 'vamos/iremos', answer: 'vamos/iremos' },
        ],
        solution: 'a) me quedo, b) voy/iré, c) aprobarás, d) vamos/iremos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Dann imperfecto subjuntivo:',
        subTasks: [
        { label: 'a', task: 'tener (yo)', solution: 'tuviera', answer: 'tuviera' },
        { label: 'b', task: 'poder (tú)', solution: 'pudieras', answer: 'pudieras' },
        { label: 'c', task: 'ser (ella)', solution: 'fuera', answer: 'fuera' },
        { label: 'd', task: 'saber (nosotros)', solution: 'supiéramos', answer: 'supiéramos' },
        ],
        solution: 'a) tuviera, b) pudieras, c) fuera, d) supiéramos',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-3-3-example-2', type: 'example', title: 'Eksempel: Imperfecto subjuntivo', problem: `Dann imperfecto subjuntivo:
a) tener (yo)
b) poder (tú)
c) ser (ella)`, solution: `a) tuvi**era** (tener → tuvieron → tuviera)
b) pudi**eras** (poder → pudieron → pudieras)
c) fu**era** (ser → fueron → fuera)` },
    {
      id: 'spansk-2-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfør type 2 betingelser:',
        subTasks: [
        { label: 'a', task: 'Si ___ (tener) dinero, viajaría a Japón.', solution: 'tuviera', answer: 'tuviera' },
        { label: 'b', task: 'Si ___ (poder) volar, iría a la luna.', solution: 'pudiera', answer: 'pudiera' },
        { label: 'c', task: 'Si ___ (ser) presidente, cambiaría las leyes.', solution: 'fuera', answer: 'fuera' },
        { label: 'd', task: 'Si ___ (hablar) chino, trabajaría en China.', solution: 'hablara', answer: 'hablara' },
        ],
        solution: 'a) tuviera, b) pudiera, c) fuera, d) hablara',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-3-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett med riktig type:',
        subTasks: [
        { label: 'a', task: 'Hvis det regner, tar jeg paraply. (reell)', solution: 'Si llueve, llevo paraguas.', answer: 'Si llueve, llevo paraguas.' },
        { label: 'b', task: 'Hvis jeg var rik, ville jeg kjøpt et hus. (ureal)', solution: 'Si fuera rico/a, compraría una casa.', answer: 'Si fuera rico/a, compraría una casa.' },
        { label: 'c', task: 'Hvis du studerer, vil du bestå. (reell)', solution: 'Si estudias, aprobarás.', answer: 'Si estudias, aprobarás.' },
        { label: 'd', task: 'Hvis jeg kunne spansk, ville jeg reist til Peru. (ureal)', solution: 'Si supiera español, viajaría a Perú.', answer: 'Si supiera español, viajaría a Perú.' },
        ],
        solution: 'a) Si llueve, llevo paraguas., b) Si fuera rico/a, compraría una casa., c) Si estudias, aprobarás., d) Si supiera español, viajaría a Perú.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-3-3-tip-1', type: 'tip', content: `**Dannelse av imperfecto subjuntivo:** Ta 3. person flertall preteritum (ellos-formen), fjern -ron, legg til -ra, -ras, -ra, -ramos, -ran. F.eks.: tuvieron → tuvie- → tuviera.` },
    { id: 'spansk-2-3-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Betingelsessetninger**

- **Type 1 (reell):** Si + presens, presens/futuro
- **Type 2 (ureal):** Si + imperfecto subjuntivo, condicional
- **Imperfecto subjuntivo:** 3. pl. pret. - ron + ra-endelser
- **ALDRI:** Si + presens subjuntivo` },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.4 Expresar planes y posibilidades
// ----------------------------------------------------------------------------

export const CHAPTER_SPANSK_2_3_4: TextbookChapter = {
  id: 'spansk-2-3-4',
  courseId: 'spansk-2',
  chapterNumber: '3.4',
  title: 'Expresar planes y posibilidades',
  subtitle: 'Uttrykke planer og muligheter',
  description: 'Kombiner fremtid, vilkår og betingelser for å snakke om planer.',
  estimatedMinutes: 45,
  competenceGoals: ['uttrykke planer og muligheter', 'kombinere tidsformer'],
  content: [
    // ========== Introduksjon ==========
    { id: 'spansk-2-3-4-intro', type: 'text', content: `## Expresar planes y posibilidades

I dette kapittelet kombinerer vi alle måtene å snakke om fremtiden på: **futuro simple**, **ir a + infinitiv**, **condicional** og uttrykk for **mulighet og sannsynlighet**.` },
    { id: 'spansk-2-3-4-def-1', type: 'definition', title: 'Uttrykke planer og muligheter', content: `**Planer:**
- *Voy a + infinitiv:* Voy a estudiar. (Jeg skal studere.)
- *Pienso + infinitiv:* Pienso viajar. (Jeg tenker å reise.)
- *Tengo la intención de:* Tengo la intención de aprender. (Jeg har tenkt å lære.)

**Muligheter:**
- *Quizás/Tal vez + subjuntivo:* Quizás llueva. (Kanskje det regner.)
- *A lo mejor + indikativ:* A lo mejor llueve. (Kanskje det regner.)
- *Probablemente + subjuntivo:* Probablemente venga. (Han kommer sannsynligvis.)` },
    { id: 'spansk-2-3-4-text-1', type: 'text', content: `## Planer med ulike uttrykk

| Uttrykk | Eksempel | Grad av sikkerhet |
|---------|----------|-------------------|
| Voy a + inf | Voy a estudiar | Bestemt plan |
| Futuro simple | Estudiaré | Plan/forutsigelse |
| Pienso + inf | Pienso estudiar | Intensjon |
| Me gustaría + inf | Me gustaría estudiar | Ønske |
| Quizás + subj | Quizás estudie | Usikkert |` },
    { id: 'spansk-2-3-4-text-2', type: 'text', content: `## Sannsynlighetsuttrykk

**Med subjuntivo:**
- *Quizás/Tal vez venga.* (Kanskje han kommer.)
- *Es posible que llueva.* (Det er mulig at det regner.)
- *Probablemente sea verdad.* (Det er sannsynligvis sant.)

**Med indikativ:**
- *A lo mejor viene.* (Kanskje han kommer.)
- *Seguramente llueve.* (Det regner sikkert.)

**NB:** *A lo mejor* tar alltid indikativ!` },
    { id: 'spansk-2-3-4-example-1', type: 'example', title: 'Eksempel: Planer', problem: `Uttrykk planen "studere i Spania" med ulike former:
a) Bestemt plan
b) Intensjon
c) Ønske`, solution: `a) **Voy a estudiar en España.** (bestemt)
b) **Pienso estudiar en España.** (intensjon)
c) **Me gustaría estudiar en España.** (ønske)` },
    {
      id: 'spansk-2-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn med ir a + infinitiv:',
        subTasks: [
        { label: 'a', task: 'Mañana yo ___ (ir a / estudiar).', solution: 'voy a estudiar', answer: 'voy a estudiar' },
        { label: 'b', task: 'Este verano nosotros ___ (ir a / viajar).', solution: 'vamos a viajar', answer: 'vamos a viajar' },
        { label: 'c', task: 'Ella ___ (ir a / cocinar) la cena.', solution: 'va a cocinar', answer: 'va a cocinar' },
        { label: 'd', task: '¿Tú ___ (ir a / venir) a la fiesta?', solution: 'vas a venir', answer: 'vas a venir' },
        ],
        solution: 'a) voy a estudiar, b) vamos a viajar, c) va a cocinar, d) vas a venir',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig modus etter sannsynlighetsuttrykk:',
        subTasks: [
        { label: 'a', task: 'Quizás ___ (llover) mañana.', solution: 'llueva (subjuntivo)', answer: 'llueva (subjuntivo)' },
        { label: 'b', task: 'A lo mejor ___ (llover) mañana.', solution: 'llueve (indikativ)', answer: 'llueve (indikativ)' },
        { label: 'c', task: 'Es posible que ___ (venir) Juan.', solution: 'venga (subjuntivo)', answer: 'venga (subjuntivo)' },
        { label: 'd', task: 'Probablemente ___ (ser) verdad.', solution: 'sea (subjuntivo)', answer: 'sea (subjuntivo)' },
        ],
        solution: 'a) llueva (subjuntivo), b) llueve (indikativ), c) venga (subjuntivo), d) sea (subjuntivo)',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-3-4-example-2', type: 'example', title: 'Eksempel: Muligheter', problem: `Uttrykk "kanskje det regner" på to måter.`, solution: `**Quizás llueva.** (subjuntivo)
**A lo mejor llueve.** (indikativ)` },
    {
      id: 'spansk-2-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Uttrykk planene dine med ulike former:',
        subTasks: [
        { label: 'a', task: 'Studere spansk (bestemt plan)', solution: 'Voy a estudiar español.', answer: 'Voy a estudiar español.' },
        { label: 'b', task: 'Reise til Mexico (intensjon)', solution: 'Pienso viajar a México.', answer: 'Pienso viajar a México.' },
        { label: 'c', task: 'Lære å surfe (ønske)', solution: 'Me gustaría aprender a surfear.', answer: 'Me gustaría aprender a surfear.' },
        { label: 'd', task: 'Flytte til utlandet (usikkert)', solution: 'Quizás me mude al extranjero.', answer: 'Quizás me mude al extranjero.' },
        ],
        solution: 'a) Voy a estudiar español., b) Pienso viajar a México., c) Me gustaría aprender a surfear., d) Quizás me mude al extranjero.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    {
      id: 'spansk-2-3-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'spansk-2-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett med riktig uttrykk:',
        subTasks: [
        { label: 'a', task: 'Neste år skal jeg studere medisin. (bestemt)', solution: 'El año que viene voy a estudiar medicina.', answer: 'El año que viene voy a estudiar medicina.' },
        { label: 'b', task: 'Kanskje vi kan dra på lørdag. (usikkert)', solution: 'Quizás podamos ir el sábado.', answer: 'Quizás podamos ir el sábado.' },
        { label: 'c', task: 'Jeg ville gjerne bo i Barcelona. (ønske)', solution: 'Me gustaría vivir en Barcelona.', answer: 'Me gustaría vivir en Barcelona.' },
        { label: 'd', task: 'De kommer sannsynligvis i morgen. (sannsynlig)', solution: 'Probablemente vengan mañana.', answer: 'Probablemente vengan mañana.' },
        ],
        solution: 'a) El año que viene voy a estudiar medicina., b) Quizás podamos ir el sábado., c) Me gustaría vivir en Barcelona., d) Probablemente vengan mañana.',
        hints: ['Se teorien over for hjelp', 'Sjekk eksemplene'],
      },
    },
    { id: 'spansk-2-3-4-tip-1', type: 'tip', content: `**Husk:** *A lo mejor* er det eneste sannsynlighetsuttrykket som tar indikativ. Alle de andre (quizás, tal vez, probablemente, es posible que) tar subjuntivo.` },
    { id: 'spansk-2-3-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Planer og muligheter**

- **Bestemt plan:** ir a + infinitiv
- **Forutsigelse:** futuro simple
- **Intensjon:** pienso/tengo la intención de + infinitiv
- **Ønske:** me gustaría + infinitiv
- **Mulighet:** quizás/tal vez + subjuntivo, a lo mejor + indikativ
- **Samlet oversikt:** Grad av sikkerhet avgjør formen` },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const SPANSK_2_CHAPTERS_1_3: TextbookChapter[] = [
  CHAPTER_SPANSK_2_1_1,
  CHAPTER_SPANSK_2_1_2,
  CHAPTER_SPANSK_2_1_3,
  CHAPTER_SPANSK_2_1_4,
  CHAPTER_SPANSK_2_2_1,
  CHAPTER_SPANSK_2_2_2,
  CHAPTER_SPANSK_2_2_3,
  CHAPTER_SPANSK_2_2_4,
  CHAPTER_SPANSK_2_3_1,
  CHAPTER_SPANSK_2_3_2,
  CHAPTER_SPANSK_2_3_3,
  CHAPTER_SPANSK_2_3_4,
];
