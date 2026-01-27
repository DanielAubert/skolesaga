/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 3 - Kapittel 1-3 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 1: SUBJUNTIVO AVANZADO (1.1-1.4)
 * - Kapittel 2: TIEMPOS COMPUESTOS (2.1-2.4)
 * - Kapittel 3: ESTILO INDIRECTO (3.1-3.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: SUBJUNTIVO AVANZADO
// ============================================================================

// 1.1 Subjuntivo con expresiones impersonales
export const CHAPTER_SPANSK_3_1_1: TextbookChapter = {
  id: 'spansk-3-1-1',
  courseId: 'spansk-3',
  chapterNumber: '1.1',
  title: 'Subjuntivo con expresiones impersonales',
  subtitle: 'Konjunktiv med upersonlige uttrykk',
  description: 'Lær når konjunktiv brukes med upersonlige uttrykk som es necesario que, es importante que og es posible que.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke konjunktiv med upersonlige uttrykk', 'skille mellom indikativ og konjunktiv etter upersonlige uttrykk'],
  content: [
    { id: 'spansk-3-1-1-intro', type: 'text', content: `## Subjuntivo con expresiones impersonales

Upersonlige uttrykk følges av konjunktiv når de uttrykker nødvendighet, vurdering, følelse eller usikkerhet. Uttrykk som konstaterer fakta bruker derimot indikativ.` },
    { id: 'spansk-3-1-1-def-1', type: 'definition', title: 'Konjunktiv med upersonlige uttrykk', content: `**Upersonlige uttrykk** som uttrykker nødvendighet, følelser, mulighet eller vurdering krever **subjuntivo** i bisetningen.

| Uttrykk | Betydning | Eksempel |
|---------|-----------|----------|
| Es necesario que | Det er nødvendig at | Es necesario que **estudies**. |
| Es importante que | Det er viktig at | Es importante que **hables**. |
| Es posible que | Det er mulig at | Es posible que **llueva**. |
| Es probable que | Det er sannsynlig at | Es probable que **vengan**. |
| Es mejor que | Det er best at | Es mejor que **te vayas**. |
| Es una lástima que | Det er synd at | Es una lástima que no **puedas** venir. |

**NB:** Uttrykk som konstaterer fakta bruker **indikativ**: *Es verdad que **tiene** razón.* *Es evidente que **sabe** mucho.*` },
    { id: 'spansk-3-1-1-text-1', type: 'text', content: `## Uttrykk som krever konjunktiv

**Nødvendighet:**
- *Es necesario que estudies más.* (Det er nødvendig at du studerer mer.)
- *Es preciso que llegues a tiempo.* (Det er nødig at du kommer i tide.)

**Vurdering/følelse:**
- *Es importante que aprendas esto.* (Det er viktig at du lærer dette.)
- *Es una lástima que no vengas.* (Det er synd at du ikke kommer.)

**Mulighet/usikkerhet:**
- *Es posible que llueva mañana.* (Det er mulig at det regner i morgen.)
- *Es probable que lleguen tarde.* (Det er sannsynlig at de kommer sent.)` },
    { id: 'spansk-3-1-1-text-2', type: 'text', content: `## Uttrykk som krever indikativ

**Konstaterer fakta:**
- *Es verdad que María **habla** bien.* (Det er sant at María snakker bra.)
- *Es evidente que **saben** la respuesta.* (Det er tydelig at de kan svaret.)
- *Es obvio que **tiene** razón.* (Det er opplagt at han har rett.)
- *Es cierto que **vive** aquí.* (Det er sikkert at han bor her.)

**Men i nektende form → konjunktiv:**
- *No es verdad que María **hable** bien.* (Det er ikke sant at María snakker bra.)
- *No es cierto que **viva** aquí.* (Det er ikke sikkert at han bor her.)` },
    { id: 'spansk-3-1-1-example-1', type: 'example', title: 'Eksempel: Konjunktiv etter nødvendighet', problem: `Es necesario que tú (hablar) español.`, solution: `Es necesario que tú **hables** español. (Konjunktiv fordi "es necesario que" uttrykker nødvendighet.)` },
    { id: 'spansk-3-1-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-1-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig form av verbet i konjunktiv:', subTasks: [
        { label: 'a', task: 'Es necesario que (nosotros/estudiar) ___ más.', solution: 'estudiemos', answer: 'estudiemos' },
        { label: 'b', task: 'Es importante que (tú/llegar) ___ a tiempo.', solution: 'llegues', answer: 'llegues' },
        { label: 'c', task: 'Es posible que (ellos/venir) ___ mañana.', solution: 'vengan', answer: 'vengan' },
        { label: 'd', task: 'Es mejor que (usted/salir) ___ temprano.', solution: 'salga', answer: 'salga' },
      ], solution: 'a) estudiemos, b) llegues, c) vengan, d) salga', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-1-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg konjunktiv eller indikativ:', subTasks: [
        { label: 'a', task: 'Es evidente que Juan (hablar) ___ bien.', solution: 'habla (indikativ - konstaterer fakta)', answer: 'habla (indikativ - konstaterer fakta)' },
        { label: 'b', task: 'Es una lástima que no (poder/tú) ___ ir.', solution: 'puedas (konjunktiv - følelse)', answer: 'puedas (konjunktiv - følelse)' },
        { label: 'c', task: 'Es cierto que ella (vivir) ___ en Madrid.', solution: 'vive (indikativ - konstaterer fakta)', answer: 'vive (indikativ - konstaterer fakta)' },
        { label: 'd', task: 'Es probable que (llover) ___ esta noche.', solution: 'llueva (konjunktiv - mulighet)', answer: 'llueva (konjunktiv - mulighet)' },
      ], solution: 'a) habla (indikativ - konstaterer fakta), b) puedas (konjunktiv - følelse), c) vive (indikativ - konstaterer fakta), d) llueva (konjunktiv - mulighet)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-1-example-2', type: 'example', title: 'Eksempel: Indikativ etter fakta', problem: `Es verdad que él (saber) mucho.`, solution: `Es verdad que él **sabe** mucho. (Indikativ fordi "es verdad que" konstaterer et faktum.)` },
    { id: 'spansk-3-1-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-1-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Fullfør setningene med konjunktiv eller indikativ:', subTasks: [
        { label: 'a', task: 'Es necesario que los alumnos (hacer) ___ los deberes.', solution: 'hagan (konjunktiv - nødvendighet)', answer: 'hagan (konjunktiv - nødvendighet)' },
        { label: 'b', task: 'No es verdad que yo (tener) ___ mucho dinero.', solution: 'tenga (konjunktiv - nektet faktauttrykk)', answer: 'tenga (konjunktiv - nektet faktauttrykk)' },
        { label: 'c', task: 'Es obvio que ella (ser) ___ inteligente.', solution: 'es (indikativ - konstaterer fakta)', answer: 'es (indikativ - konstaterer fakta)' },
        { label: 'd', task: 'Es importante que nosotros (saber) ___ la verdad.', solution: 'sepamos (konjunktiv - vurdering)', answer: 'sepamos (konjunktiv - vurdering)' },
      ], solution: 'a) hagan (konjunktiv - nødvendighet), b) tenga (konjunktiv - nektet faktauttrykk), c) es (indikativ - konstaterer fakta), d) sepamos (konjunktiv - vurdering)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-1-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk med riktig modus:', subTasks: [
        { label: 'a', task: 'Det er nødvendig at du snakker med læreren.', solution: 'Es necesario que hables con el profesor.', answer: 'Es necesario que hables con el profesor.' },
        { label: 'b', task: 'Det er sant at han jobber mye.', solution: 'Es verdad que trabaja mucho.', answer: 'Es verdad que trabaja mucho.' },
        { label: 'c', task: 'Det er synd at de ikke kan komme.', solution: 'Es una lástima que no puedan venir.', answer: 'Es una lástima que no puedan venir.' },
        { label: 'd', task: 'Det er ikke sikkert at hun bor her.', solution: 'No es cierto que viva aquí.', answer: 'No es cierto que viva aquí.' },
      ], solution: 'a) Es necesario que hables con el profesor., b) Es verdad que trabaja mucho., c) Es una lástima que no puedan venir., d) No es cierto que viva aquí.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-1-tip-1', type: 'tip', content: `**Huskeregel:** Fakta = indikativ. Alt annet (vurdering, følelse, mulighet, nødvendighet) = konjunktiv. I nektende form bruker også fakta-uttrykk konjunktiv.` },
    { id: 'spansk-3-1-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Konjunktiv med upersonlige uttrykk**

- Nødvendighet, vurdering, følelse, mulighet → konjunktiv
- Konstaterer fakta (es verdad, es evidente) → indikativ
- Nektende fakta-uttrykk (no es verdad que) → konjunktiv
- Vanlige uttrykk: es necesario que, es importante que, es posible que` },
  ],
  exercises: [],
};

// 1.2 Subjuntivo en oraciones de relativo
export const CHAPTER_SPANSK_3_1_2: TextbookChapter = {
  id: 'spansk-3-1-2',
  courseId: 'spansk-3',
  chapterNumber: '1.2',
  title: 'Subjuntivo en oraciones de relativo',
  subtitle: 'Konjunktiv i relativsetninger',
  description: 'Lær å bruke konjunktiv i relativsetninger når antecedenten er ukjent eller ikke-eksisterende.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke konjunktiv i relativsetninger med ukjent antecedent', 'skille mellom indikativ og konjunktiv i relativsetninger'],
  content: [
    { id: 'spansk-3-1-2-intro', type: 'text', content: `## Subjuntivo en oraciones de relativo

Når du snakker om noe eller noen du leter etter, ønsker deg eller ikke vet om eksisterer, bruker du konjunktiv i relativsetningen. Når antecedenten er kjent og konkret, bruker du indikativ.` },
    { id: 'spansk-3-1-2-def-1', type: 'definition', title: 'Konjunktiv i relativsetninger', content: `Konjunktiv brukes i relativsetninger når antecedenten (det substantivet som relativsetningen viser til) er **ukjent, ubestemt eller ikke-eksisterende**.

| Kontekst | Modus | Eksempel |
|----------|-------|----------|
| Kjent antecedent | Indikativ | Tengo un amigo que **habla** español. |
| Ukjent/søkt antecedent | Konjunktiv | Busco un amigo que **hable** español. |
| Ikke-eksisterende | Konjunktiv | No hay nadie que **sepa** la respuesta. |

**Nøkkelforskjell:** "Jeg har en venn som snakker..." (kjent) vs. "Jeg leter etter en venn som snakker..." (ukjent).` },
    { id: 'spansk-3-1-2-text-1', type: 'text', content: `## Kjent vs. ukjent antecedent

**Indikativ - kjent:**
- *Tengo un profesor que **explica** bien.* (Jeg har en lærer som forklarer godt.) → Konkret person.
- *Conozco a alguien que **sabe** francés.* (Jeg kjenner noen som kan fransk.) → Konkret person.

**Konjunktiv - ukjent:**
- *Busco un profesor que **explique** bien.* (Jeg leter etter en lærer som forklarer godt.) → Vet ikke hvem.
- *¿Conoces a alguien que **sepa** francés?* (Kjenner du noen som kan fransk?) → Spør om det finnes.
- *Necesito algo que **sea** barato.* (Jeg trenger noe som er billig.) → Har ikke funnet det ennå.` },
    { id: 'spansk-3-1-2-text-2', type: 'text', content: `## Ikke-eksisterende antecedent

**Konjunktiv med nektende setninger:**
- *No hay nadie que **pueda** ayudarme.* (Det er ingen som kan hjelpe meg.)
- *No conozco a nadie que **hable** chino.* (Jeg kjenner ingen som snakker kinesisk.)
- *No existe ningún libro que **explique** esto.* (Det finnes ingen bok som forklarer dette.)
- *No tengo nada que **decir**.* (Jeg har ingenting å si.)

**Nøkkel:** *nadie, nada, ningún* + relativsetning → alltid konjunktiv.` },
    { id: 'spansk-3-1-2-example-1', type: 'example', title: 'Eksempel: Ukjent antecedent', problem: `Busco una casa que (tener) jardín.`, solution: `Busco una casa que **tenga** jardín. (Konjunktiv fordi huset er ukjent – jeg leter etter det.)` },
    { id: 'spansk-3-1-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-1-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Velg riktig verbform (indikativ eller konjunktiv):', subTasks: [
        { label: 'a', task: 'Tengo un amigo que (hablar) ___ español.', solution: 'habla (indikativ - kjent person)', answer: 'habla (indikativ - kjent person)' },
        { label: 'b', task: 'Busco un amigo que (hablar) ___ español.', solution: 'hable (konjunktiv - ukjent person)', answer: 'hable (konjunktiv - ukjent person)' },
        { label: 'c', task: 'Conozco un restaurante que (servir) ___ tapas.', solution: 'sirve (indikativ - kjent sted)', answer: 'sirve (indikativ - kjent sted)' },
        { label: 'd', task: '¿Hay algún restaurante que (servir) ___ tapas?', solution: 'sirva (konjunktiv - spør om det finnes)', answer: 'sirva (konjunktiv - spør om det finnes)' },
      ], solution: 'a) habla (indikativ - kjent person), b) hable (konjunktiv - ukjent person), c) sirve (indikativ - kjent sted), d) sirva (konjunktiv - spør om det finnes)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-1-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig konjunktivform:', subTasks: [
        { label: 'a', task: 'No hay nadie que (poder) ___ ayudarme.', solution: 'pueda', answer: 'pueda' },
        { label: 'b', task: 'Necesito algo que (ser) ___ barato.', solution: 'sea', answer: 'sea' },
        { label: 'c', task: 'Busco a alguien que (saber) ___ cocinar.', solution: 'sepa', answer: 'sepa' },
        { label: 'd', task: 'No conozco a nadie que (vivir) ___ allí.', solution: 'viva', answer: 'viva' },
      ], solution: 'a) pueda, b) sea, c) sepa, d) viva', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-2-example-2', type: 'example', title: 'Eksempel: Kjent antecedent', problem: `Vivo en una casa que (tener) jardín.`, solution: `Vivo en una casa que **tiene** jardín. (Indikativ fordi huset er kjent – jeg bor allerede der.)` },
    { id: 'spansk-3-1-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-1-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Velg indikativ eller konjunktiv og forklar hvorfor:', subTasks: [
        { label: 'a', task: 'Tengo un coche que (funcionar) ___ bien.', solution: 'funciona (indikativ - kjent, konkret bil)', answer: 'funciona (indikativ - kjent, konkret bil)' },
        { label: 'b', task: 'Quiero un coche que (funcionar) ___ bien.', solution: 'funcione (konjunktiv - ønsker en bil, ukjent)', answer: 'funcione (konjunktiv - ønsker en bil, ukjent)' },
        { label: 'c', task: 'No existe ningún estudiante que (saber) ___ todo.', solution: 'sepa (konjunktiv - ikke-eksisterende)', answer: 'sepa (konjunktiv - ikke-eksisterende)' },
        { label: 'd', task: 'Hay un estudiante que (saber) ___ la respuesta.', solution: 'sabe (indikativ - kjent person)', answer: 'sabe (indikativ - kjent person)' },
      ], solution: 'a) funciona (indikativ - kjent, konkret bil), b) funcione (konjunktiv - ønsker en bil, ukjent), c) sepa (konjunktiv - ikke-eksisterende), d) sabe (indikativ - kjent person)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-1-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk med riktig modus:', subTasks: [
        { label: 'a', task: 'Jeg leter etter noen som snakker norsk.', solution: 'Busco a alguien que hable noruego.', answer: 'Busco a alguien que hable noruego.' },
        { label: 'b', task: 'Jeg kjenner noen som snakker norsk.', solution: 'Conozco a alguien que habla noruego.', answer: 'Conozco a alguien que habla noruego.' },
        { label: 'c', task: 'Det finnes ingen som kan hjelpe meg.', solution: 'No hay nadie que pueda ayudarme.', answer: 'No hay nadie que pueda ayudarme.' },
        { label: 'd', task: 'Jeg trenger en bok som forklarer grammatikken.', solution: 'Necesito un libro que explique la gramática.', answer: 'Necesito un libro que explique la gramática.' },
      ], solution: 'a) Busco a alguien que hable noruego., b) Conozco a alguien que habla noruego., c) No hay nadie que pueda ayudarme., d) Necesito un libro que explique la gramática.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-2-tip-1', type: 'tip', content: `**Huskeregel:** Tengo (kjent) → indikativ. Busco/Necesito/Quiero (ukjent) → konjunktiv. No hay nadie/nada (ikke-eksisterende) → alltid konjunktiv.` },
    { id: 'spansk-3-1-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Konjunktiv i relativsetninger**

- Kjent antecedent → indikativ (Tengo un amigo que habla...)
- Ukjent/søkt antecedent → konjunktiv (Busco un amigo que hable...)
- Ikke-eksisterende → konjunktiv (No hay nadie que sepa...)
- Verb som utløser konjunktiv: buscar, necesitar, querer + ukjent antecedent` },
  ],
  exercises: [],
};

// 1.3 Subjuntivo en oraciones temporales
export const CHAPTER_SPANSK_3_1_3: TextbookChapter = {
  id: 'spansk-3-1-3',
  courseId: 'spansk-3',
  chapterNumber: '1.3',
  title: 'Subjuntivo en oraciones temporales',
  subtitle: 'Konjunktiv i tidssetninger',
  description: 'Lær å bruke konjunktiv i tidssetninger med cuando, antes de que, después de que og hasta que.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke konjunktiv i tidssetninger som refererer til fremtiden', 'skille mellom konjunktiv og indikativ i tidssetninger'],
  content: [
    { id: 'spansk-3-1-3-intro', type: 'text', content: `## Subjuntivo en oraciones temporales

Tidskonjunksjoner som cuando, después de que, hasta que og en cuanto krever konjunktiv når de refererer til fremtidige handlinger, men indikativ når de refererer til fortidige eller vanlige handlinger.` },
    { id: 'spansk-3-1-3-def-1', type: 'definition', title: 'Konjunktiv i tidssetninger', content: `**Tidskonjunksjoner** kan kreve enten konjunktiv eller indikativ avhengig av om handlingen refererer til fremtiden eller fortiden.

| Konjunksjon | Fremtid → Konjunktiv | Fortid → Indikativ |
|-------------|---------------------|--------------------|
| cuando | Cuando **llegue**, llamaré. | Cuando **llegó**, llamó. |
| después de que | Después de que **termine**... | Después de que **terminó**... |
| hasta que | Hasta que **venga**... | Hasta que **vino**... |
| en cuanto | En cuanto **sepa**... | En cuanto **supo**... |

**Unntak:** *Antes de que* krever **alltid** konjunktiv, uavhengig av tid.` },
    { id: 'spansk-3-1-3-text-1', type: 'text', content: `## Cuando + konjunktiv (fremtid)

**Fremtid → konjunktiv:**
- *Cuando **llegue** a casa, te llamaré.* (Når jeg kommer hjem, ringer jeg deg.) → Har ikke kommet ennå.
- *Cuando **tenga** dinero, viajaré.* (Når jeg har penger, reiser jeg.) → Har ikke penger ennå.

**Fortid → indikativ:**
- *Cuando **llegué** a casa, te llamé.* (Da jeg kom hjem, ringte jeg deg.) → Allerede skjedd.

**Vane → indikativ:**
- *Cuando **llego** a casa, siempre como.* (Når jeg kommer hjem, spiser jeg alltid.) → Vanlig handling.` },
    { id: 'spansk-3-1-3-text-2', type: 'text', content: `## Antes de que - alltid konjunktiv

*Antes de que* krever **alltid** konjunktiv, uansett tid:
- *Antes de que **salgas**, cierra la puerta.* (Før du går, lukk døren.)
- *Antes de que **llegara**, preparé la cena.* (Før han kom, laget jeg middag.)

**Andre konjunksjoner:**
- *Después de que **termine** la clase, iremos al cine.* (Etter timen, drar vi på kino.) → Fremtid.
- *Hasta que no **aprendas**, no saldrás.* (Inntil du lærer, går du ikke.) → Fremtid.
- *En cuanto **llegue**, empezamos.* (Så snart han kommer, begynner vi.) → Fremtid.` },
    { id: 'spansk-3-1-3-example-1', type: 'example', title: 'Eksempel: Cuando + fremtid', problem: `Cuando yo (tener) tiempo, te visitaré.`, solution: `Cuando yo **tenga** tiempo, te visitaré. (Konjunktiv fordi cuando refererer til fremtiden.)` },
    { id: 'spansk-3-1-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-1-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig konjunktivform (fremtidsreferanse):', subTasks: [
        { label: 'a', task: 'Cuando (yo/llegar) ___ a casa, cenaré.', solution: 'llegue', answer: 'llegue' },
        { label: 'b', task: 'Antes de que (tú/salir) ___, llámame.', solution: 'salgas', answer: 'salgas' },
        { label: 'c', task: 'Hasta que (nosotros/terminar) ___, no descansamos.', solution: 'terminemos', answer: 'terminemos' },
        { label: 'd', task: 'En cuanto (ellos/venir) ___, empezamos.', solution: 'vengan', answer: 'vengan' },
      ], solution: 'a) llegue, b) salgas, c) terminemos, d) vengan', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-1-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg konjunktiv eller indikativ:', subTasks: [
        { label: 'a', task: 'Cuando (yo/ser) ___ niño, jugaba mucho. (fortid)', solution: 'era (indikativ - fortid)', answer: 'era (indikativ - fortid)' },
        { label: 'b', task: 'Cuando (tú/venir) ___ mañana, hablaremos. (fremtid)', solution: 'vengas (konjunktiv - fremtid)', answer: 'vengas (konjunktiv - fremtid)' },
        { label: 'c', task: 'Después de que (él/comer) ___ ayer, salió. (fortid)', solution: 'comió (indikativ - fortid)', answer: 'comió (indikativ - fortid)' },
        { label: 'd', task: 'Antes de que (ella/llegar) ___, limpiamos. (alltid)', solution: 'llegue/llegara (konjunktiv - antes de que)', answer: 'llegue/llegara (konjunktiv - antes de que)' },
      ], solution: 'a) era (indikativ - fortid), b) vengas (konjunktiv - fremtid), c) comió (indikativ - fortid), d) llegue/llegara (konjunktiv - antes de que)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-3-example-2', type: 'example', title: 'Eksempel: Antes de que', problem: `Antes de que tú (salir), necesito hablar contigo.`, solution: `Antes de que tú **salgas**, necesito hablar contigo. (Antes de que krever alltid konjunktiv.)` },
    { id: 'spansk-3-1-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-1-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Fullfør setningene med riktig verbform:', subTasks: [
        { label: 'a', task: 'Cuando (nosotros/tener) ___ vacaciones, iremos a España.', solution: 'tengamos (konjunktiv - fremtid)', answer: 'tengamos (konjunktiv - fremtid)' },
        { label: 'b', task: 'Siempre cuando (yo/llegar) ___ a casa, como. (vane)', solution: 'llego (indikativ - vanlig handling)', answer: 'llego (indikativ - vanlig handling)' },
        { label: 'c', task: 'No saldré hasta que (dejar) ___ de llover.', solution: 'deje (konjunktiv - fremtid)', answer: 'deje (konjunktiv - fremtid)' },
        { label: 'd', task: 'Después de que (tú/leer) ___ el libro, dámelo.', solution: 'leas (konjunktiv - fremtid)', answer: 'leas (konjunktiv - fremtid)' },
      ], solution: 'a) tengamos (konjunktiv - fremtid), b) llego (indikativ - vanlig handling), c) deje (konjunktiv - fremtid), d) leas (konjunktiv - fremtid)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-1-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk med riktig modus:', subTasks: [
        { label: 'a', task: 'Når jeg er ferdig, ringer jeg deg.', solution: 'Cuando termine, te llamaré.', answer: 'Cuando termine, te llamaré.' },
        { label: 'b', task: 'Før du drar, må du rydde rommet.', solution: 'Antes de que te vayas, tienes que limpiar la habitación.', answer: 'Antes de que te vayas, tienes que limpiar la habitación.' },
        { label: 'c', task: 'Inntil du lærer det, øver du hver dag.', solution: 'Hasta que lo aprendas, practicarás cada día.', answer: 'Hasta que lo aprendas, practicarás cada día.' },
        { label: 'd', task: 'Da vi kom hjem, spiste vi middag. (fortid)', solution: 'Cuando llegamos a casa, cenamos.', answer: 'Cuando llegamos a casa, cenamos.' },
      ], solution: 'a) Cuando termine, te llamaré., b) Antes de que te vayas, tienes que limpiar la habitación., c) Hasta que lo aprendas, practicarás cada día., d) Cuando llegamos a casa, cenamos.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-3-tip-1', type: 'tip', content: `**Huskeregel:** Cuando + fremtid = konjunktiv. Cuando + fortid/vane = indikativ. Antes de que = ALLTID konjunktiv.` },
    { id: 'spansk-3-1-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Konjunktiv i tidssetninger**

- Fremtidig handling → konjunktiv (Cuando llegue...)
- Fortid/vane → indikativ (Cuando llegué... / Cuando llego...)
- Antes de que → alltid konjunktiv
- Tidskonjunksjoner: cuando, después de que, hasta que, en cuanto, antes de que` },
  ],
  exercises: [],
};

// 1.4 Subjuntivo vs. indicativo - diferencias avanzadas
export const CHAPTER_SPANSK_3_1_4: TextbookChapter = {
  id: 'spansk-3-1-4',
  courseId: 'spansk-3',
  chapterNumber: '1.4',
  title: 'Subjuntivo vs. indicativo - diferencias avanzadas',
  subtitle: 'Konjunktiv vs. indikativ - avanserte forskjeller',
  description: 'Oppsummering av alle konjunktivutløsere og avanserte nyanser mellom konjunktiv og indikativ.',
  estimatedMinutes: 45,
  competenceGoals: ['beherske avanserte forskjeller mellom konjunktiv og indikativ', 'unngå vanlige feil med konjunktiv'],
  content: [
    { id: 'spansk-3-1-4-intro', type: 'text', content: `## Subjuntivo vs. indicativo - diferencias avanzadas

Konjunktiv og indikativ er to moduser som uttrykker ulike holdninger. Indikativ konstaterer virkeligheten; konjunktiv uttrykker subjektive holdninger som ønske, tvil, følelser og usikkerhet.` },
    { id: 'spansk-3-1-4-def-1', type: 'definition', title: 'Avansert konjunktiv vs. indikativ', content: `**Fullstendig oversikt over konjunktivutløsere:**

| Kategori | Utløser | Eksempel |
|----------|---------|----------|
| Ønske/vilje | querer que, desear que | Quiero que **vengas**. |
| Følelse | alegrarse de que, temer que | Me alegro de que **estés** bien. |
| Tvil/usikkerhet | dudar que, no creer que | Dudo que **sepa** la verdad. |
| Upersonlige uttrykk | es necesario que | Es necesario que **estudies**. |
| Formål | para que | Lo hago para que **aprendas**. |
| Relativsetning (ukjent) | buscar algo que | Busco algo que **sea** bueno. |
| Tidssetning (fremtid) | cuando + fremtid | Cuando **llegue**, llamaré. |
| Nektelse av fakta | no es verdad que | No es verdad que **tenga** razón. |` },
    { id: 'spansk-3-1-4-text-1', type: 'text', content: `## Vanlige feil

**Feil 1: Creer que + konjunktiv**
- ❌ *Creo que **venga** mañana.*
- ✅ *Creo que **viene** mañana.* (Indikativ - tror = sikkert.)
- ✅ *No creo que **venga** mañana.* (Konjunktiv - tvil.)

**Feil 2: Cuando + futur**
- ❌ *Cuando **llegaré**, te llamaré.*
- ✅ *Cuando **llegue**, te llamaré.* (Konjunktiv, ikke futur.)

**Feil 3: Samme subjekt**
- ❌ *Quiero que yo **vaya**.*
- ✅ *Quiero **ir**.* (Infinitiv når subjektene er like.)` },
    { id: 'spansk-3-1-4-text-2', type: 'text', content: `## Nyanser: creer/pensar

**Bekreftende → indikativ:**
- *Creo que **tiene** razón.* (Jeg tror han har rett.)
- *Pienso que **es** verdad.* (Jeg tenker det er sant.)

**Nektende → konjunktiv:**
- *No creo que **tenga** razón.* (Jeg tror ikke han har rett.)
- *No pienso que **sea** verdad.* (Jeg tenker ikke det er sant.)

**Spørrende → konjunktiv (tvil):**
- *¿Crees que **tenga** razón?* (Tror du han har rett? - tviler)
- *¿Crees que **tiene** razón?* (Tror du han har rett? - nøytralt)` },
    { id: 'spansk-3-1-4-example-1', type: 'example', title: 'Eksempel: Creer que', problem: `No creo que Juan (tener) razón.`, solution: `No creo que Juan **tenga** razón. (Konjunktiv fordi "no creer que" uttrykker tvil.)` },
    { id: 'spansk-3-1-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-1-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Velg konjunktiv, indikativ eller infinitiv:', subTasks: [
        { label: 'a', task: 'Creo que ella (ser) ___ inteligente.', solution: 'es (indikativ - creer que + bekreftende)', answer: 'es (indikativ - creer que + bekreftende)' },
        { label: 'b', task: 'No creo que él (tener) ___ razón.', solution: 'tenga (konjunktiv - no creer que)', answer: 'tenga (konjunktiv - no creer que)' },
        { label: 'c', task: 'Quiero (ir/yo) ___ a España.', solution: 'ir (infinitiv - samme subjekt)', answer: 'ir (infinitiv - samme subjekt)' },
        { label: 'd', task: 'Quiero que tú (ir) ___ a España.', solution: 'vayas (konjunktiv - ulikt subjekt)', answer: 'vayas (konjunktiv - ulikt subjekt)' },
      ], solution: 'a) es (indikativ - creer que + bekreftende), b) tenga (konjunktiv - no creer que), c) ir (infinitiv - samme subjekt), d) vayas (konjunktiv - ulikt subjekt)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-1-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Identifiser feilen og rett den:', subTasks: [
        { label: 'a', task: 'Creo que venga mañana.', solution: 'Creo que viene mañana. (Indikativ etter creer que.)', answer: 'Creo que viene mañana. (Indikativ etter creer que.)' },
        { label: 'b', task: 'Cuando llegaré, te llamo.', solution: 'Cuando llegue, te llamaré. (Konjunktiv etter cuando + fremtid.)', answer: 'Cuando llegue, te llamaré. (Konjunktiv etter cuando + fremtid.)' },
        { label: 'c', task: 'Quiero que yo vaya.', solution: 'Quiero ir. (Infinitiv ved samme subjekt.)', answer: 'Quiero ir. (Infinitiv ved samme subjekt.)' },
        { label: 'd', task: 'Es verdad que tenga razón.', solution: 'Es verdad que tiene razón. (Indikativ etter es verdad que.)', answer: 'Es verdad que tiene razón. (Indikativ etter es verdad que.)' },
      ], solution: 'a) Creo que viene mañana. (Indikativ etter creer que.), b) Cuando llegue, te llamaré. (Konjunktiv etter cuando + fremtid.), c) Quiero ir. (Infinitiv ved samme subjekt.), d) Es verdad que tiene razón. (Indikativ etter es verdad que.)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-4-example-2', type: 'example', title: 'Eksempel: Samme subjekt', problem: `Quiero (ir/yo) al cine.`, solution: `Quiero **ir** al cine. (Infinitiv fordi subjektene er like – "jeg" i begge ledd.)` },
    { id: 'spansk-3-1-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-1-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Fyll inn riktig form og forklar valget:', subTasks: [
        { label: 'a', task: 'Dudo que María (venir) ___ a la fiesta.', solution: 'venga (konjunktiv - dudar que uttrykker tvil)', answer: 'venga (konjunktiv - dudar que uttrykker tvil)' },
        { label: 'b', task: 'Es evidente que ellos (saber) ___ la respuesta.', solution: 'saben (indikativ - es evidente que konstaterer)', answer: 'saben (indikativ - es evidente que konstaterer)' },
        { label: 'c', task: 'Me alegro de que tú (estar) ___ bien.', solution: 'estés (konjunktiv - alegrarse de que uttrykker følelse)', answer: 'estés (konjunktiv - alegrarse de que uttrykker følelse)' },
        { label: 'd', task: 'Lo hago para que todos (aprender) ___.', solution: 'aprendan (konjunktiv - para que uttrykker formål)', answer: 'aprendan (konjunktiv - para que uttrykker formål)' },
      ], solution: 'a) venga (konjunktiv - dudar que uttrykker tvil), b) saben (indikativ - es evidente que konstaterer), c) estés (konjunktiv - alegrarse de que uttrykker følelse), d) aprendan (konjunktiv - para que uttrykker formål)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-1-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk med riktig modus og forklar:', subTasks: [
        { label: 'a', task: 'Jeg tror han har rett.', solution: 'Creo que tiene razón. (Indikativ - creer que bekreftende.)', answer: 'Creo que tiene razón. (Indikativ - creer que bekreftende.)' },
        { label: 'b', task: 'Jeg tror ikke han har rett.', solution: 'No creo que tenga razón. (Konjunktiv - no creer que uttrykker tvil.)', answer: 'No creo que tenga razón. (Konjunktiv - no creer que uttrykker tvil.)' },
        { label: 'c', task: 'Jeg gjør det for at du skal lære.', solution: 'Lo hago para que aprendas. (Konjunktiv - para que uttrykker formål.)', answer: 'Lo hago para que aprendas. (Konjunktiv - para que uttrykker formål.)' },
        { label: 'd', task: 'Jeg vil reise til Spania. (bare jeg)', solution: 'Quiero viajar a España. (Infinitiv - samme subjekt.)', answer: 'Quiero viajar a España. (Infinitiv - samme subjekt.)' },
      ], solution: 'a) Creo que tiene razón. (Indikativ - creer que bekreftende.), b) No creo que tenga razón. (Konjunktiv - no creer que uttrykker tvil.), c) Lo hago para que aprendas. (Konjunktiv - para que uttrykker formål.), d) Quiero viajar a España. (Infinitiv - samme subjekt.)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-1-4-tip-1', type: 'tip', content: `**Hovedregel:** Konjunktiv uttrykker subjektive holdninger (ønske, tvil, følelser, usikkerhet). Indikativ konstaterer objektive fakta. Ved samme subjekt → infinitiv.` },
    { id: 'spansk-3-1-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Avansert konjunktiv vs. indikativ**

- **Konjunktiv:** ønske, følelse, tvil, formål, ukjent antecedent, fremtid i tidssetninger
- **Indikativ:** fakta, tro (creer que), sannhet (es verdad que)
- **Infinitiv:** samme subjekt (Quiero ir, no Quiero que yo vaya)
- **Vanlige feil:** creer que + konjunktiv, cuando + futur, samme subjekt + konjunktiv` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: TIEMPOS COMPUESTOS
// ============================================================================

// 2.1 El pluscuamperfecto
export const CHAPTER_SPANSK_3_2_1: TextbookChapter = {
  id: 'spansk-3-2-1',
  courseId: 'spansk-3',
  chapterNumber: '2.1',
  title: 'El pluscuamperfecto',
  subtitle: 'Pluskvamperfektum (había + partisipp)',
  description: 'Lær å bruke pluskvamperfektum (el pluscuamperfecto) for å uttrykke handlinger som skjedde før en annen handling i fortiden.',
  estimatedMinutes: 45,
  competenceGoals: ['danne og bruke pluskvamperfektum', 'uttrykke handlinger før andre fortidige handlinger'],
  content: [
    { id: 'spansk-3-2-1-intro', type: 'text', content: `## El pluscuamperfecto

Pluskvamperfektum brukes for å uttrykke at noe hadde skjedd før et annet tidspunkt i fortiden. Det tilsvarer norsk "hadde + partisipp".` },
    { id: 'spansk-3-2-1-def-1', type: 'definition', title: 'Pluskvamperfektum (el pluscuamperfecto)', content: `**Pluskvamperfektum** uttrykker en handling som skjedde **før** en annen handling i fortiden.

**Dannelse:** había/habías/había/habíamos/habíais/habían + **participio pasado**

| Person | Haber | + Partisipp | Eksempel |
|--------|-------|-------------|----------|
| yo | había | hablado | Yo había hablado. (Jeg hadde snakket.) |
| tú | habías | comido | Tú habías comido. (Du hadde spist.) |
| él/ella | había | vivido | Él había vivido allí. (Han hadde bodd der.) |
| nosotros | habíamos | escrito | Habíamos escrito. (Vi hadde skrevet.) |
| ellos | habían | hecho | Habían hecho. (De hadde gjort.) |

**Uregelmessige partisipper:** hecho (hacer), escrito (escribir), dicho (decir), visto (ver), puesto (poner), vuelto (volver), abierto (abrir), muerto (morir)` },
    { id: 'spansk-3-2-1-text-1', type: 'text', content: `## Bruk av pluskvamperfektum

**Handling før en annen fortidshandling:**
- *Cuando llegué, María ya **había salido**.* (Da jeg kom, hadde María allerede gått.)
- *No pude entrar porque **había olvidado** las llaves.* (Jeg kunne ikke komme inn fordi jeg hadde glemt nøklene.)
- *Él dijo que **había vivido** en España.* (Han sa at han hadde bodd i Spania.)

**Tidslinjen:**
1. María salió (María gikk) → FØR
2. Yo llegué (Jeg kom) → ETTER
→ *Cuando llegué, María **había salido**.*` },
    { id: 'spansk-3-2-1-text-2', type: 'text', content: `## Uregelmessige partisipper

| Infinitiv | Partisipp | Eksempel |
|-----------|-----------|----------|
| hacer | hecho | había hecho (hadde gjort) |
| decir | dicho | había dicho (hadde sagt) |
| escribir | escrito | había escrito (hadde skrevet) |
| ver | visto | había visto (hadde sett) |
| poner | puesto | había puesto (hadde lagt) |
| volver | vuelto | había vuelto (hadde kommet tilbake) |
| abrir | abierto | había abierto (hadde åpnet) |
| romper | roto | había roto (hadde knust) |` },
    { id: 'spansk-3-2-1-example-1', type: 'example', title: 'Eksempel: Tidslinje', problem: `Lag en setning: Først spiste Juan. Så kom vi.`, solution: `Cuando llegamos, Juan ya **había comido**. (Da vi kom, hadde Juan allerede spist.)` },
    { id: 'spansk-3-2-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-2-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Bøy verbet i pluskvamperfektum:', subTasks: [
        { label: 'a', task: 'Yo (hablar) ___ con el profesor.', solution: 'había hablado', answer: 'había hablado' },
        { label: 'b', task: 'Tú (comer) ___ antes de salir.', solution: 'habías comido', answer: 'habías comido' },
        { label: 'c', task: 'Nosotros (vivir) ___ en Madrid.', solution: 'habíamos vivido', answer: 'habíamos vivido' },
        { label: 'd', task: 'Ellos (terminar) ___ el trabajo.', solution: 'habían terminado', answer: 'habían terminado' },
      ], solution: 'a) había hablado, b) habías comido, c) habíamos vivido, d) habían terminado', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-2-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Bruk uregelmessige partisipper:', subTasks: [
        { label: 'a', task: 'Ella (escribir) ___ la carta.', solution: 'había escrito', answer: 'había escrito' },
        { label: 'b', task: 'Yo (ver) ___ la película.', solution: 'había visto', answer: 'había visto' },
        { label: 'c', task: 'Nosotros (hacer) ___ los deberes.', solution: 'habíamos hecho', answer: 'habíamos hecho' },
        { label: 'd', task: 'Ellos (decir) ___ la verdad.', solution: 'habían dicho', answer: 'habían dicho' },
      ], solution: 'a) había escrito, b) había visto, c) habíamos hecho, d) habían dicho', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-1-example-2', type: 'example', title: 'Eksempel: Uregelmessig partisipp', problem: `Ella (escribir) la carta antes de salir.`, solution: `Ella **había escrito** la carta antes de salir. (Hun hadde skrevet brevet før hun gikk.)` },
    { id: 'spansk-3-2-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-2-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Kombiner setningene med pluskvamperfektum:', subTasks: [
        { label: 'a', task: 'Primero: Juan estudió. Luego: llegó al examen.', solution: 'Cuando Juan llegó al examen, ya había estudiado.', answer: 'Cuando Juan llegó al examen, ya había estudiado.' },
        { label: 'b', task: 'Primero: Perdí las llaves. Luego: No pude entrar.', solution: 'No pude entrar porque había perdido las llaves.', answer: 'No pude entrar porque había perdido las llaves.' },
        { label: 'c', task: 'Primero: Ellos se fueron. Luego: Nosotros llegamos.', solution: 'Cuando nosotros llegamos, ellos ya se habían ido.', answer: 'Cuando nosotros llegamos, ellos ya se habían ido.' },
        { label: 'd', task: 'Primero: Ella escribió el libro. Luego: Ella se hizo famosa.', solution: 'Ella se hizo famosa después de que había escrito el libro.', answer: 'Ella se hizo famosa después de que había escrito el libro.' },
      ], solution: 'a) Cuando Juan llegó al examen, ya había estudiado., b) No pude entrar porque había perdido las llaves., c) Cuando nosotros llegamos, ellos ya se habían ido., d) Ella se hizo famosa después de que había escrito el libro.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-2-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk med pluskvamperfektum:', subTasks: [
        { label: 'a', task: 'Da jeg kom, hadde de allerede spist.', solution: 'Cuando llegué, ya habían comido.', answer: 'Cuando llegué, ya habían comido.' },
        { label: 'b', task: 'Hun sa at hun hadde sett filmen.', solution: 'Dijo que había visto la película.', answer: 'Dijo que había visto la película.' },
        { label: 'c', task: 'Vi kunne ikke reise fordi vi hadde glemt passene.', solution: 'No pudimos viajar porque habíamos olvidado los pasaportes.', answer: 'No pudimos viajar porque habíamos olvidado los pasaportes.' },
        { label: 'd', task: 'Han hadde aldri vært i Norge før.', solution: 'Nunca había estado en Noruega antes.', answer: 'Nunca había estado en Noruega antes.' },
      ], solution: 'a) Cuando llegué, ya habían comido., b) Dijo que había visto la película., c) No pudimos viajar porque habíamos olvidado los pasaportes., d) Nunca había estado en Noruega antes.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-1-tip-1', type: 'tip', content: `**Huskeregel:** Pluskvamperfektum = "hadde + gjort". Bruk det for handlingen som skjedde FØRST av to fortidige handlinger.` },
    { id: 'spansk-3-2-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Pluskvamperfektum**

- Dannelse: había/habías/había/habíamos/habían + participio
- Bruk: handling før en annen fortidshandling
- Uregelmessige: hecho, escrito, dicho, visto, puesto, vuelto, abierto, roto
- Tilsvarer norsk: hadde + partisipp` },
  ],
  exercises: [],
};

// 2.2 El pretérito indefinido avanzado
export const CHAPTER_SPANSK_3_2_2: TextbookChapter = {
  id: 'spansk-3-2-2',
  courseId: 'spansk-3',
  chapterNumber: '2.2',
  title: 'El pretérito indefinido avanzado',
  subtitle: 'Preteritum - avansert (pretérito indefinido)',
  description: 'Avansert bruk av preteritum med uregelmessige former og nyanserte bruksregler.',
  estimatedMinutes: 45,
  competenceGoals: ['beherske uregelmessige preteritumsformer', 'skille preteritum fra imperfektum og perfektum'],
  content: [
    { id: 'spansk-3-2-2-intro', type: 'text', content: `## El pretérito indefinido avanzado

Preteritum (pretérito indefinido) brukes for avsluttede handlinger i fortiden. Mange av de vanligste verbene er uregelmessige og må læres som egne mønstre.` },
    { id: 'spansk-3-2-2-def-1', type: 'definition', title: 'Avansert preteritum (pretérito indefinido)', content: `**Uregelmessige verb i preteritum:**

| Verb | Stamme | Former |
|------|--------|--------|
| tener | tuv- | tuve, tuviste, tuvo, tuvimos, tuvieron |
| estar | estuv- | estuve, estuviste, estuvo, estuvimos, estuvieron |
| poder | pud- | pude, pudiste, pudo, pudimos, pudieron |
| poner | pus- | puse, pusiste, puso, pusimos, pusieron |
| saber | sup- | supe, supiste, supo, supimos, supieron |
| hacer | hic-/hiz- | hice, hiciste, hizo, hicimos, hicieron |
| venir | vin- | vine, viniste, vino, vinimos, vinieron |
| decir | dij- | dije, dijiste, dijo, dijimos, dijeron |
| traer | traj- | traje, trajiste, trajo, trajimos, trajeron |
| ir/ser | fu- | fui, fuiste, fue, fuimos, fueron |` },
    { id: 'spansk-3-2-2-text-1', type: 'text', content: `## Preteritum vs. imperfektum vs. perfektum

| Tid | Bruk | Eksempel |
|-----|------|----------|
| Pretérito indefinido | Avsluttet handling | Ayer **comí** paella. |
| Pretérito imperfecto | Beskrivelse/vane | De niño **comía** paella. |
| Pretérito perfecto | Nær fortid | Hoy **he comido** paella. |

**Nøkkelord:**
- Indefinido: ayer, la semana pasada, en 2020, una vez
- Imperfecto: siempre, a menudo, de niño, cada día
- Perfecto: hoy, esta semana, este año, ya, todavía` },
    { id: 'spansk-3-2-2-text-2', type: 'text', content: `## Uregelmessige mønstre

**Stammeskifte-grupper:**
- **u-stamme:** tener→tuv-, estar→estuv-, poder→pud-, poner→pus-, saber→sup-
- **i-stamme:** hacer→hic-, venir→vin-, querer→quis-
- **j-stamme:** decir→dij-, traer→traj-, conducir→conduj-

**Merk:** j-stamme-verb mister -i- i 3. person flertall:
- dijeron (IKKE dijieron)
- trajeron (IKKE trajieron)

**ir/ser:** Identiske former! Konteksten avgjør betydningen.
- *Fui al cine.* (Jeg dro på kino. → ir)
- *Fui profesor.* (Jeg var lærer. → ser)` },
    { id: 'spansk-3-2-2-example-1', type: 'example', title: 'Eksempel: Uregelmessig form', problem: `Bøy "tener" i preteritum for "yo" og "ellos".`, solution: `Yo **tuve**, ellos **tuvieron**. (tuv- + endelser: -e, -iste, -o, -imos, -ieron)` },
    { id: 'spansk-3-2-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-2-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Bøy verbene i preteritum:', subTasks: [
        { label: 'a', task: 'Yo (tener) ___ un examen ayer.', solution: 'tuve', answer: 'tuve' },
        { label: 'b', task: 'Ella (hacer) ___ la tarea anoche.', solution: 'hizo', answer: 'hizo' },
        { label: 'c', task: 'Nosotros (ir) ___ al cine la semana pasada.', solution: 'fuimos', answer: 'fuimos' },
        { label: 'd', task: 'Ellos (decir) ___ la verdad.', solution: 'dijeron', answer: 'dijeron' },
      ], solution: 'a) tuve, b) hizo, c) fuimos, d) dijeron', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-2-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg preteritum eller imperfektum:', subTasks: [
        { label: 'a', task: 'Ayer (yo/comer) ___ paella.', solution: 'comí (preteritum - avsluttet handling)', answer: 'comí (preteritum - avsluttet handling)' },
        { label: 'b', task: 'De niño (yo/comer) ___ paella cada domingo.', solution: 'comía (imperfektum - vane)', answer: 'comía (imperfektum - vane)' },
        { label: 'c', task: 'El año pasado (nosotros/viajar) ___ a España.', solution: 'viajamos (preteritum - avsluttet)', answer: 'viajamos (preteritum - avsluttet)' },
        { label: 'd', task: 'Cuando era joven, siempre (jugar) ___ al fútbol.', solution: 'jugaba (imperfektum - vane)', answer: 'jugaba (imperfektum - vane)' },
      ], solution: 'a) comí (preteritum - avsluttet handling), b) comía (imperfektum - vane), c) viajamos (preteritum - avsluttet), d) jugaba (imperfektum - vane)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-2-example-2', type: 'example', title: 'Eksempel: Preteritum vs. imperfektum', problem: `Ayer (llover) ___ todo el día. / De niño siempre (llover) ___ en invierno.`, solution: `Ayer **llovió** todo el día. (Preteritum - avsluttet.) / De niño siempre **llovía** en invierno. (Imperfektum - vane.)` },
    { id: 'spansk-3-2-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-2-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Fyll inn riktig fortidsform (preteritum, imperfektum eller perfektum):', subTasks: [
        { label: 'a', task: 'Esta mañana (yo/hablar) ___ con María.', solution: 'he hablado (perfektum - nær fortid, "i dag")', answer: 'he hablado (perfektum - nær fortid, "i dag")' },
        { label: 'b', task: 'El lunes pasado (ella/estar) ___ enferma.', solution: 'estuvo (preteritum - avsluttet, forrige uke)', answer: 'estuvo (preteritum - avsluttet, forrige uke)' },
        { label: 'c', task: 'Cuando era joven, (yo/vivir) ___ en Barcelona.', solution: 'vivía (imperfektum - beskrivelse)', answer: 'vivía (imperfektum - beskrivelse)' },
        { label: 'd', task: 'Ayer (nosotros/poder) ___ terminar el proyecto.', solution: 'pudimos (preteritum - avsluttet handling)', answer: 'pudimos (preteritum - avsluttet handling)' },
      ], solution: 'a) he hablado (perfektum - nær fortid, "i dag"), b) estuvo (preteritum - avsluttet, forrige uke), c) vivía (imperfektum - beskrivelse), d) pudimos (preteritum - avsluttet handling)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-2-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk med riktig fortidsform:', subTasks: [
        { label: 'a', task: 'I går gjorde jeg leksene. (avsluttet)', solution: 'Ayer hice los deberes.', answer: 'Ayer hice los deberes.' },
        { label: 'b', task: 'Da jeg var ung, reiste jeg mye. (vane)', solution: 'Cuando era joven, viajaba mucho.', answer: 'Cuando era joven, viajaba mucho.' },
        { label: 'c', task: 'I dag har jeg snakket med læreren. (nær fortid)', solution: 'Hoy he hablado con el profesor.', answer: 'Hoy he hablado con el profesor.' },
        { label: 'd', task: 'De sa at de ikke kunne komme. (avsluttet)', solution: 'Dijeron que no pudieron venir.', answer: 'Dijeron que no pudieron venir.' },
      ], solution: 'a) Ayer hice los deberes., b) Cuando era joven, viajaba mucho., c) Hoy he hablado con el profesor., d) Dijeron que no pudieron venir.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-2-tip-1', type: 'tip', content: `**Tips:** Lær de uregelmessige stammene i grupper (u-stamme, i-stamme, j-stamme). Bruk nøkkelord for å velge riktig fortidsform.` },
    { id: 'spansk-3-2-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Avansert preteritum**

- Uregelmessige stammeskift: tuv-, estuv-, pud-, hic-, vin-, dij-
- j-stamme: -eron (ikke -ieron) i 3. person flertall
- ir/ser: identiske former i preteritum
- Preteritum: avsluttet | Imperfektum: vane/beskrivelse | Perfektum: nær fortid` },
  ],
  exercises: [],
};

// 2.3 Combinación de tiempos
export const CHAPTER_SPANSK_3_2_3: TextbookChapter = {
  id: 'spansk-3-2-3',
  courseId: 'spansk-3',
  chapterNumber: '2.3',
  title: 'Combinación de tiempos',
  subtitle: 'Kombinere tidsformer i tekst',
  description: 'Lær å kombinere ulike fortidsformer i sammenhengende tekst og fortelling.',
  estimatedMinutes: 45,
  competenceGoals: ['kombinere preteritum, imperfektum og pluskvamperfektum i tekst', 'skrive sammenhengende fortellinger'],
  content: [
    { id: 'spansk-3-2-3-intro', type: 'text', content: `## Combinación de tiempos

Når du skriver eller leser fortellinger på spansk, veksler du mellom ulike tidsformer for å skape en rik og nyansert tekst. Hver tidsform har sin rolle.` },
    { id: 'spansk-3-2-3-def-1', type: 'definition', title: 'Kombinasjon av tidsformer', content: `I en fortelling brukes ulike fortidsformer med ulike funksjoner:

| Tidsform | Funksjon | Eksempel |
|----------|----------|----------|
| Imperfektum | Bakgrunn, beskrivelse | **Era** un día frío. (Det var en kald dag.) |
| Preteritum | Handling, hendelse | De repente, **llegó** Juan. (Plutselig kom Juan.) |
| Pluskvamperfektum | Forhistorie | Juan no **había dormido** bien. (Juan hadde ikke sovet godt.) |

**I en fortelling:**
- Imperfektum = "kulissen" (vær, følelser, utseende)
- Preteritum = "handlingen" (hva som skjedde)
- Pluskvamperfektum = "forhistorien" (hva som hadde skjedd før)` },
    { id: 'spansk-3-2-3-text-1', type: 'text', content: `## Fortellingsteknikk

**Eksempel på fortelling:**
*Era una noche oscura. **Llovía** mucho y **hacía** frío.* (Imperfektum - bakgrunn)
*Juan **caminaba** por la calle vacía.* (Imperfektum - pågående handling)
*De repente, **oyó** un ruido extraño.* (Preteritum - ny handling)
*Se **dio** la vuelta y **vio** a un hombre.* (Preteritum - hendelser)
*El hombre **llevaba** un abrigo negro.* (Imperfektum - beskrivelse)
*Juan **recordó** que su madre le **había dicho** que no saliera solo.* (Preteritum + Pluskvamperfektum - handling + forhistorie)` },
    { id: 'spansk-3-2-3-text-2', type: 'text', content: `## Signalord for hver tidsform

**Imperfektum (bakgrunn):**
- Verb: ser, estar, haber, hacer (vær), llevar, tener
- Uttrykk: mientras, siempre, a menudo, cada día

**Preteritum (handling):**
- De repente, entonces, en ese momento, un día
- Verb som markerer endring: empezar, terminar, llegar, salir

**Pluskvamperfektum (forhistorie):**
- ya, antes, nunca antes, anteriormente
- Brukes med porque/que for å forklare bakgrunn` },
    { id: 'spansk-3-2-3-example-1', type: 'example', title: 'Eksempel: Velg tidsform', problem: `(Ser) ___ las diez de la noche. De repente, alguien (llamar) ___ a la puerta.`, solution: `**Eran** las diez de la noche. (Imperfektum - bakgrunn.) De repente, alguien **llamó** a la puerta. (Preteritum - handling.)` },
    { id: 'spansk-3-2-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-2-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Velg imperfektum eller preteritum:', subTasks: [
        { label: 'a', task: '(Ser) ___ un día bonito cuando (decidir/nosotros) ___ ir a la playa.', solution: 'Era (imperfektum), decidimos (preteritum)', answer: 'Era (imperfektum), decidimos (preteritum)' },
        { label: 'b', task: '(Llover) ___ cuando (salir/yo) ___ de casa.', solution: 'Llovía (imperfektum), salí (preteritum)', answer: 'Llovía (imperfektum), salí (preteritum)' },
        { label: 'c', task: 'María (estar) ___ cansada porque (trabajar) ___ todo el día.', solution: 'estaba (imperfektum), había trabajado (pluskvamperfektum)', answer: 'estaba (imperfektum), había trabajado (pluskvamperfektum)' },
        { label: 'd', task: 'De repente, el teléfono (sonar) ___.', solution: 'sonó (preteritum - plutselig handling)', answer: 'sonó (preteritum - plutselig handling)' },
      ], solution: 'a) Era (imperfektum), decidimos (preteritum), b) Llovía (imperfektum), salí (preteritum), c) estaba (imperfektum), había trabajado (pluskvamperfektum), d) sonó (preteritum - plutselig handling)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-2-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match funksjonen med tidsformen:', subTasks: [
        { label: 'a', task: 'Bakgrunn og beskrivelse', solution: 'Imperfektum (era, hacía, llovía)', answer: 'Imperfektum (era, hacía, llovía)' },
        { label: 'b', task: 'Plutselig handling', solution: 'Preteritum (llegó, oyó, dijo)', answer: 'Preteritum (llegó, oyó, dijo)' },
        { label: 'c', task: 'Noe som hadde skjedd før', solution: 'Pluskvamperfektum (había comido, había visto)', answer: 'Pluskvamperfektum (había comido, había visto)' },
        { label: 'd', task: 'Vane i fortiden', solution: 'Imperfektum (siempre iba, comía cada día)', answer: 'Imperfektum (siempre iba, comía cada día)' },
      ], solution: 'a) Imperfektum (era, hacía, llovía), b) Preteritum (llegó, oyó, dijo), c) Pluskvamperfektum (había comido, había visto), d) Imperfektum (siempre iba, comía cada día)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-3-example-2', type: 'example', title: 'Eksempel: Forhistorie', problem: `No pude entrar porque (olvidar) ___ las llaves.`, solution: `No pude entrar porque **había olvidado** las llaves. (Pluskvamperfektum - forhistorie.)` },
    { id: 'spansk-3-2-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-2-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Fyll inn riktig tidsform:', subTasks: [
        { label: 'a', task: 'Cuando yo (llegar) ___ a casa, mi madre ya (preparar) ___ la cena.', solution: 'llegué (preteritum), había preparado (pluskvamperfektum)', answer: 'llegué (preteritum), había preparado (pluskvamperfektum)' },
        { label: 'b', task: '(Hacer) ___ sol y los pájaros (cantar) ___ cuando de repente (empezar) ___ a llover.', solution: 'Hacía (imperfektum), cantaban (imperfektum), empezó (preteritum)', answer: 'Hacía (imperfektum), cantaban (imperfektum), empezó (preteritum)' },
        { label: 'c', task: 'Juan (decir) ___ que (estar) ___ enfermo y que no (poder) ___ venir.', solution: 'dijo (preteritum), estaba (imperfektum), podía (imperfektum)', answer: 'dijo (preteritum), estaba (imperfektum), podía (imperfektum)' },
        { label: 'd', task: 'No (comer/nosotros) ___ porque ya (desayunar) ___ en el hotel.', solution: 'comimos (preteritum), habíamos desayunado (pluskvamperfektum)', answer: 'comimos (preteritum), habíamos desayunado (pluskvamperfektum)' },
      ], solution: 'a) llegué (preteritum), había preparado (pluskvamperfektum), b) Hacía (imperfektum), cantaban (imperfektum), empezó (preteritum), c) dijo (preteritum), estaba (imperfektum), podía (imperfektum), d) comimos (preteritum), habíamos desayunado (pluskvamperfektum)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-2-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en kort fortelling (3-4 setninger) med alle tre tidsformene:', subTasks: [
        { label: 'a', task: 'Tema: En dag på skolen', solution: 'Era un día normal. Hacía sol. Cuando llegué al colegio, vi que había un examen. No había estudiado nada.', answer: 'Era un día normal. Hacía sol. Cuando llegué al colegio, vi que había un examen. No había estudiado nada.' },
        { label: 'b', task: 'Tema: En reise', solution: 'Estábamos en el aeropuerto. Hacía mucho calor. De repente, anunciaron que nuestro vuelo se había cancelado.', answer: 'Estábamos en el aeropuerto. Hacía mucho calor. De repente, anunciaron que nuestro vuelo se había cancelado.' },
        { label: 'c', task: 'Tema: En overraskelse', solution: 'Era mi cumpleaños. Cuando abrí la puerta, vi que mis amigos habían preparado una fiesta sorpresa. Me puse muy contento.', answer: 'Era mi cumpleaños. Cuando abrí la puerta, vi que mis amigos habían preparado una fiesta sorpresa. Me puse muy contento.' },
        { label: 'd', task: 'Tema: Et møte', solution: 'Caminaba por la calle cuando vi a una chica. La reconocí inmediatamente: era María, a quien no había visto desde hacía años.', answer: 'Caminaba por la calle cuando vi a una chica. La reconocí inmediatamente: era María, a quien no había visto desde hacía años.' },
      ], solution: 'a) Era un día normal. Hacía sol. Cuando llegué al colegio, vi que había un examen. No había estudiado nada., b) Estábamos en el aeropuerto. Hacía mucho calor. De repente, anunciaron que nuestro vuelo se había cancelado., c) Era mi cumpleaños. Cuando abrí la puerta, vi que mis amigos habían preparado una fiesta sorpresa. Me puse muy contento., d) Caminaba por la calle cuando vi a una chica. La reconocí inmediatamente: era María, a quien no había visto desde hacía años.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-3-tip-1', type: 'tip', content: `**Huskeregel for fortellinger:** Imperfektum setter scenen, preteritum driver handlingen fremover, pluskvamperfektum forklarer forhistorien.` },
    { id: 'spansk-3-2-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Kombinere tidsformer**

- Imperfektum: bakgrunn, beskrivelse, pågående handling
- Preteritum: ny handling, hendelse, avsluttet handling
- Pluskvamperfektum: forhistorie, "hadde gjort"
- I fortelling: Veksle mellom alle tre for en rik tekst` },
  ],
  exercises: [],
};

// 2.4 Secuencia de tiempos
export const CHAPTER_SPANSK_3_2_4: TextbookChapter = {
  id: 'spansk-3-2-4',
  courseId: 'spansk-3',
  chapterNumber: '2.4',
  title: 'Secuencia de tiempos',
  subtitle: 'Tidsformssekvenser',
  description: 'Lær reglene for samsvaret mellom tidsformer i hoved- og bisetning, og tidsskift i indirekte tale.',
  estimatedMinutes: 45,
  competenceGoals: ['beherske tidsformssamsvar mellom hovedsetning og bisetning', 'bruke riktig tidsform i indirekte tale'],
  content: [
    { id: 'spansk-3-2-4-intro', type: 'text', content: `## Secuencia de tiempos

Når hovedsetningen er i presens, brukes presens-tider i bisetningen. Når hovedsetningen er i fortid, "skyves" bisetningen ett steg bakover i tid.` },
    { id: 'spansk-3-2-4-def-1', type: 'definition', title: 'Tidsformssekvenser (concordancia temporal)', content: `**Concordancia temporal** handler om hvilken tidsform bisetningen bruker basert på hovedsetningens tidsform.

| Hovedsetning | Bisetning (indikativ) | Bisetning (konjunktiv) |
|--------------|----------------------|------------------------|
| Presens | Presens/Perfektum/Futur | Presens konjunktiv |
| Fortid | Imperfektum/Pluskvamp./Kondisjonalis | Imperfekt konjunktiv |

**Eksempler:**
- *Dice que **viene**.* (Han sier at han kommer.) → Presens + presens
- *Dijo que **venía**.* (Han sa at han kom.) → Fortid + imperfektum
- *Quiere que **vengas**.* (Hun vil at du kommer.) → Presens + presens konjunktiv
- *Quería que **vinieras**.* (Hun ville at du kom.) → Fortid + imperfekt konjunktiv` },
    { id: 'spansk-3-2-4-text-1', type: 'text', content: `## Tidsskift-oversikt

**Fra presens til fortid (indirekte tale):**

| Direkte tale | Indirekte tale |
|-------------|----------------|
| Presens: Estoy bien. | Dijo que **estaba** bien. |
| Perfektum: He comido. | Dijo que **había comido**. |
| Futur: Vendré. | Dijo que **vendría**. |
| Imperativ: ¡Ven! | Dijo que **viniera/viniese**. |

**Eksempler:**
- *"Tengo hambre."* → Dijo que **tenía** hambre.
- *"He terminado."* → Dijo que **había terminado**.
- *"Volveré mañana."* → Dijo que **volvería** al día siguiente.` },
    { id: 'spansk-3-2-4-text-2', type: 'text', content: `## Konjunktiv-sekvenser

**Presens i hovedsetning → presens konjunktiv:**
- *Quiero que **vengas**.* (Jeg vil at du skal komme.)
- *Es importante que **estudies**.* (Det er viktig at du studerer.)

**Fortid i hovedsetning → imperfekt konjunktiv:**
- *Quería que **vinieras**.* (Jeg ville at du skulle komme.)
- *Era importante que **estudiaras**.* (Det var viktig at du studerte.)

**Imperfekt konjunktiv endelser:** -ara/-iera (to former!)
- hablar → hablara/hablase
- comer → comiera/comiese
- vivir → viviera/viviese` },
    { id: 'spansk-3-2-4-example-1', type: 'example', title: 'Eksempel: Tidsskift', problem: `"Estoy cansado." → Dijo que...`, solution: `Dijo que **estaba** cansado. (Presens → imperfektum i indirekte tale.)` },
    { id: 'spansk-3-2-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-2-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Gjør om fra presens til fortid i bisetningen:', subTasks: [
        { label: 'a', task: 'Dice que está bien. → Dijo que ___ bien.', solution: 'estaba', answer: 'estaba' },
        { label: 'b', task: 'Dice que viene mañana. → Dijo que ___ al día siguiente.', solution: 'venía', answer: 'venía' },
        { label: 'c', task: 'Dice que ha comido. → Dijo que ___ comido.', solution: 'había', answer: 'había' },
        { label: 'd', task: 'Dice que irá al cine. → Dijo que ___ al cine.', solution: 'iría', answer: 'iría' },
      ], solution: 'a) estaba, b) venía, c) había, d) iría', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-2-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg presens konjunktiv eller imperfekt konjunktiv:', subTasks: [
        { label: 'a', task: 'Quiero que tú (venir) ___.', solution: 'vengas (presens konjunktiv - hovedsetning i presens)', answer: 'vengas (presens konjunktiv - hovedsetning i presens)' },
        { label: 'b', task: 'Quería que tú (venir) ___.', solution: 'vinieras (imperfekt konjunktiv - hovedsetning i fortid)', answer: 'vinieras (imperfekt konjunktiv - hovedsetning i fortid)' },
        { label: 'c', task: 'Es necesario que (estudiar/tú) ___.', solution: 'estudies (presens konjunktiv - presens i hovedsetning)', answer: 'estudies (presens konjunktiv - presens i hovedsetning)' },
        { label: 'd', task: 'Era necesario que (estudiar/tú) ___.', solution: 'estudiaras (imperfekt konjunktiv - fortid i hovedsetning)', answer: 'estudiaras (imperfekt konjunktiv - fortid i hovedsetning)' },
      ], solution: 'a) vengas (presens konjunktiv - hovedsetning i presens), b) vinieras (imperfekt konjunktiv - hovedsetning i fortid), c) estudies (presens konjunktiv - presens i hovedsetning), d) estudiaras (imperfekt konjunktiv - fortid i hovedsetning)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-4-example-2', type: 'example', title: 'Eksempel: Konjunktiv-sekvens', problem: `Quería que tú (venir) ___.`, solution: `Quería que tú **vinieras/vinieses**. (Fortid i hovedsetning → imperfekt konjunktiv.)` },
    { id: 'spansk-3-2-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-2-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Gjør om til indirekte tale:', subTasks: [
        { label: 'a', task: '"Tengo hambre." → María dijo que...', solution: 'María dijo que tenía hambre.', answer: 'María dijo que tenía hambre.' },
        { label: 'b', task: '"He terminado el trabajo." → Juan dijo que...', solution: 'Juan dijo que había terminado el trabajo.', answer: 'Juan dijo que había terminado el trabajo.' },
        { label: 'c', task: '"Volveré mañana." → Ella dijo que...', solution: 'Ella dijo que volvería al día siguiente.', answer: 'Ella dijo que volvería al día siguiente.' },
        { label: 'd', task: '"No puedo ir." → Él dijo que...', solution: 'Él dijo que no podía ir.', answer: 'Él dijo que no podía ir.' },
      ], solution: 'a) María dijo que tenía hambre., b) Juan dijo que había terminado el trabajo., c) Ella dijo que volvería al día siguiente., d) Él dijo que no podía ir.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-2-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk med riktig tidsformssamsvar:', subTasks: [
        { label: 'a', task: 'Læreren ville at vi skulle studere mer.', solution: 'El profesor quería que estudiáramos más.', answer: 'El profesor quería que estudiáramos más.' },
        { label: 'b', task: 'Han sa at han hadde sett filmen.', solution: 'Dijo que había visto la película.', answer: 'Dijo que había visto la película.' },
        { label: 'c', task: 'Det var viktig at de kom i tide.', solution: 'Era importante que llegaran a tiempo.', answer: 'Era importante que llegaran a tiempo.' },
        { label: 'd', task: 'Hun sa at hun ville reise neste dag.', solution: 'Dijo que viajaría al día siguiente.', answer: 'Dijo que viajaría al día siguiente.' },
      ], solution: 'a) El profesor quería que estudiáramos más., b) Dijo que había visto la película., c) Era importante que llegaran a tiempo., d) Dijo que viajaría al día siguiente.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-2-4-tip-1', type: 'tip', content: `**Huskeregel:** Presens i hovedsetning = presens-tider i bisetning. Fortid i hovedsetning = fortids-tider i bisetning. Alt "skyves" ett hakk bakover.` },
    { id: 'spansk-3-2-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Tidsformssekvenser**

- Presens + presens/perfektum/futur/presens konjunktiv
- Fortid + imperfektum/pluskvamperfektum/kondisjonalis/imperfekt konjunktiv
- Tidsskift i indirekte tale: presens→imperfektum, perfektum→pluskvamperfektum, futur→kondisjonalis
- Imperfekt konjunktiv: -ara/-iera endelser` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: ESTILO INDIRECTO
// ============================================================================

// 3.1 Introducción al estilo indirecto
export const CHAPTER_SPANSK_3_3_1: TextbookChapter = {
  id: 'spansk-3-3-1',
  courseId: 'spansk-3',
  chapterNumber: '3.1',
  title: 'Introducción al estilo indirecto',
  subtitle: 'Grunnleggende indirekte tale',
  description: 'Lær de grunnleggende reglene for å omforme direkte tale til indirekte tale.',
  estimatedMinutes: 45,
  competenceGoals: ['omforme direkte tale til indirekte tale', 'bruke riktige innledningsverb'],
  content: [
    { id: 'spansk-3-3-1-intro', type: 'text', content: `## Introducción al estilo indirecto

Indirekte tale brukes for å gjengi hva noen har sagt, uten å sitere ordene direkte. Grunnregelen er enkel: legg til "que" og tilpass pronomen.` },
    { id: 'spansk-3-3-1-def-1', type: 'definition', title: 'Indirekte tale (estilo indirecto)', content: `**Direkte tale** gjengir ordene nøyaktig: *María dice: "Estoy cansada."*
**Indirekte tale** gjengir innholdet: *María dice que está cansada.*

**Grunnregel:**
- Fjern anførselstegn
- Legg til **que** etter innledningsverbet
- Tilpass pronomen og tidsformer

| Innledningsverb | Bruk |
|----------------|------|
| decir que | si/at |
| contar que | fortelle at |
| explicar que | forklare at |
| afirmar que | hevde at |
| preguntar si/qué/dónde | spørre om/hva/hvor |

**Når innledningsverbet er i presens, endres IKKE tidsformen:**
- *"Estoy cansada."* → *Dice que **está** cansada.* (Ingen endring!)` },
    { id: 'spansk-3-3-1-text-1', type: 'text', content: `## Grunnleggende omforming (presens)

**Direkte → Indirekte (innledningsverb i presens):**
- *Juan dice: "Tengo hambre."* → *Juan dice que **tiene** hambre.*
- *María dice: "Estoy contenta."* → *María dice que **está** contenta.*
- *Ellos dicen: "Vamos al cine."* → *Ellos dicen que **van** al cine.*

**Pronomenendringer:**
- yo → él/ella (avhengig av hvem som snakker)
- mi → su
- me → le/se

*"Me gusta **mi** coche."* → Dice que le gusta **su** coche.` },
    { id: 'spansk-3-3-1-text-2', type: 'text', content: `## Innledningsverb

**Vanlige innledningsverb:**
- *decir que* - si at
- *contar que* - fortelle at
- *explicar que* - forklare at
- *comentar que* - kommentere at
- *afirmar que* - hevde/påstå at
- *asegurar que* - forsikre at
- *añadir que* - legge til at
- *responder que* - svare at

**For spørsmål:**
- *preguntar si* - spørre om (ja/nei-spørsmål)
- *preguntar qué/dónde/cuándo* - spørre hva/hvor/når` },
    { id: 'spansk-3-3-1-example-1', type: 'example', title: 'Eksempel: Enkel omforming', problem: `Juan dice: "Estoy enfermo." → Omform til indirekte tale.`, solution: `Juan dice que **está** enfermo. (Fjern anførselstegn, legg til "que", endre yo→él.)` },
    { id: 'spansk-3-3-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-3-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Omform til indirekte tale (innledningsverb i presens):', subTasks: [
        { label: 'a', task: 'Juan dice: "Tengo hambre."', solution: 'Juan dice que tiene hambre.', answer: 'Juan dice que tiene hambre.' },
        { label: 'b', task: 'María dice: "Estoy cansada."', solution: 'María dice que está cansada.', answer: 'María dice que está cansada.' },
        { label: 'c', task: 'Pedro dice: "Voy al cine."', solution: 'Pedro dice que va al cine.', answer: 'Pedro dice que va al cine.' },
        { label: 'd', task: 'Ana dice: "Mi madre está aquí."', solution: 'Ana dice que su madre está aquí.', answer: 'Ana dice que su madre está aquí.' },
      ], solution: 'a) Juan dice que tiene hambre., b) María dice que está cansada., c) Pedro dice que va al cine., d) Ana dice que su madre está aquí.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-3-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig innledningsverb:', subTasks: [
        { label: 'a', task: 'Juan ___: "Estoy bien." (sier)', solution: 'dice', answer: 'dice' },
        { label: 'b', task: 'María ___ que la fiesta es mañana. (forteller)', solution: 'cuenta', answer: 'cuenta' },
        { label: 'c', task: 'El profesor ___ que el examen es fácil. (forklarer)', solution: 'explica', answer: 'explica' },
        { label: 'd', task: 'Ella ___ que tiene razón. (hevder)', solution: 'afirma', answer: 'afirma' },
      ], solution: 'a) dice, b) cuenta, c) explica, d) afirma', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-1-example-2', type: 'example', title: 'Eksempel: Pronomenendring', problem: `María dice: "Mi hermano está aquí." → Omform.`, solution: `María dice que **su** hermano está aquí. (mi → su)` },
    { id: 'spansk-3-3-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-3-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Omform med pronomenendringer:', subTasks: [
        { label: 'a', task: 'Juan dice: "Yo quiero ir con mis amigos."', solution: 'Juan dice que él quiere ir con sus amigos.', answer: 'Juan dice que él quiere ir con sus amigos.' },
        { label: 'b', task: 'María dice: "Mi novio me ha llamado."', solution: 'María dice que su novio la ha llamado.', answer: 'María dice que su novio la ha llamado.' },
        { label: 'c', task: 'Pedro dice: "Nosotros vamos a nuestra casa."', solution: 'Pedro dice que ellos van a su casa.', answer: 'Pedro dice que ellos van a su casa.' },
        { label: 'd', task: 'Ana dice: "Yo he perdido mi teléfono."', solution: 'Ana dice que ella ha perdido su teléfono.', answer: 'Ana dice que ella ha perdido su teléfono.' },
      ], solution: 'a) Juan dice que él quiere ir con sus amigos., b) María dice que su novio la ha llamado., c) Pedro dice que ellos van a su casa., d) Ana dice que ella ha perdido su teléfono.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-3-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk som indirekte tale:', subTasks: [
        { label: 'a', task: 'Juan sier at han er syk.', solution: 'Juan dice que está enfermo.', answer: 'Juan dice que está enfermo.' },
        { label: 'b', task: 'María forteller at broren hennes bor i Madrid.', solution: 'María cuenta que su hermano vive en Madrid.', answer: 'María cuenta que su hermano vive en Madrid.' },
        { label: 'c', task: 'Læreren forklarer at eksamen er vanskelig.', solution: 'El profesor explica que el examen es difícil.', answer: 'El profesor explica que el examen es difícil.' },
        { label: 'd', task: 'De hevder at de har rett.', solution: 'Afirman que tienen razón.', answer: 'Afirman que tienen razón.' },
      ], solution: 'a) Juan dice que está enfermo., b) María cuenta que su hermano vive en Madrid., c) El profesor explica que el examen es difícil., d) Afirman que tienen razón.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-1-tip-1', type: 'tip', content: `**Tips:** Når innledningsverbet er i presens (dice, cuenta), endres IKKE tidsformen i bisetningen. Husk bare å endre pronomen!` },
    { id: 'spansk-3-3-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Grunnleggende indirekte tale**

- Fjern anførselstegn, legg til "que"
- Tilpass pronomen: yo→él/ella, mi→su, me→le/se
- Innledningsverb i presens: ingen tidsformendring
- Vanlige verb: decir, contar, explicar, afirmar, preguntar` },
  ],
  exercises: [],
};

// 3.2 Cambios de tiempos verbales
export const CHAPTER_SPANSK_3_3_2: TextbookChapter = {
  id: 'spansk-3-3-2',
  courseId: 'spansk-3',
  chapterNumber: '3.2',
  title: 'Cambios de tiempos verbales',
  subtitle: 'Tidsendringer i indirekte tale',
  description: 'Lær de systematiske tidsendringene som skjer når innledningsverbet er i fortid.',
  estimatedMinutes: 45,
  competenceGoals: ['utføre systematiske tidsendringer i indirekte tale', 'beherske alle tidsskift fra direkte til indirekte tale'],
  content: [
    { id: 'spansk-3-3-2-intro', type: 'text', content: `## Cambios de tiempos verbales

Når noen gjengir i fortid hva en person sa, "skyves" alle tidsformene ett steg bakover. Dette er den viktigste regelen i indirekte tale.` },
    { id: 'spansk-3-3-2-def-1', type: 'definition', title: 'Tidsendringer i indirekte tale', content: `Når innledningsverbet er i **fortid** (dijo, contó, explicó), endres tidsformene:

| Direkte tale | Indirekte tale |
|-------------|----------------|
| Presens: *"Estoy bien."* | Imperfektum: *Dijo que **estaba** bien.* |
| Perfektum: *"He comido."* | Pluskvamperfektum: *Dijo que **había comido**.* |
| Preteritum: *"Comí."* | Pluskvamperfektum: *Dijo que **había comido**.* |
| Futur: *"Vendré."* | Kondisjonalis: *Dijo que **vendría**.* |
| Imperativ: *"¡Ven!"* | Imperfekt konjunktiv: *Dijo que **viniera**.* |

**Andre endringer:**
- hoy → ese día / aquel día
- mañana → al día siguiente
- ayer → el día anterior
- aquí → allí
- este → ese/aquel` },
    { id: 'spansk-3-3-2-text-1', type: 'text', content: `## Systematiske tidsskift

**Presens → Imperfektum:**
- *"**Tengo** hambre."* → Dijo que **tenía** hambre.
- *"**Estoy** cansada."* → Dijo que **estaba** cansada.

**Perfektum → Pluskvamperfektum:**
- *"**He terminado**."* → Dijo que **había terminado**.

**Futur → Kondisjonalis:**
- *"**Vendré** mañana."* → Dijo que **vendría** al día siguiente.
- *"**Iré** al cine."* → Dijo que **iría** al cine.

**Imperativ → Imperfekt konjunktiv:**
- *"¡**Ven** aquí!"* → Le dijo que **viniera** allí.
- *"¡**Estudia** más!"* → Le dijo que **estudiara** más.` },
    { id: 'spansk-3-3-2-text-2', type: 'text', content: `## Tids- og stedsendringer

| Direkte tale | Indirekte tale |
|-------------|----------------|
| hoy (i dag) | ese día (den dagen) |
| mañana (i morgen) | al día siguiente (neste dag) |
| ayer (i går) | el día anterior (dagen før) |
| esta semana | esa semana |
| el próximo año | el año siguiente |
| aquí (her) | allí (der) |
| este (denne) | ese/aquel (den) |

*"Vendré **mañana** a **esta** casa."*
→ Dijo que vendría **al día siguiente** a **esa** casa.` },
    { id: 'spansk-3-3-2-example-1', type: 'example', title: 'Eksempel: Presens → imperfektum', problem: `"Estoy contento." → Dijo que...`, solution: `Dijo que **estaba** contento. (Presens → imperfektum.)` },
    { id: 'spansk-3-3-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-3-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Gjør om til indirekte tale (innledningsverb i fortid):', subTasks: [
        { label: 'a', task: '"Tengo hambre." → Dijo que...', solution: 'Dijo que tenía hambre.', answer: 'Dijo que tenía hambre.' },
        { label: 'b', task: '"Estoy cansada." → Dijo que...', solution: 'Dijo que estaba cansada.', answer: 'Dijo que estaba cansada.' },
        { label: 'c', task: '"Vamos al cine." → Dijeron que...', solution: 'Dijeron que iban al cine.', answer: 'Dijeron que iban al cine.' },
        { label: 'd', task: '"He terminado." → Dijo que...', solution: 'Dijo que había terminado.', answer: 'Dijo que había terminado.' },
      ], solution: 'a) Dijo que tenía hambre., b) Dijo que estaba cansada., c) Dijeron que iban al cine., d) Dijo que había terminado.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-3-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Gjør tidsendringen:', subTasks: [
        { label: 'a', task: 'Presens (tengo) → fortid: ___', solution: 'tenía (imperfektum)', answer: 'tenía (imperfektum)' },
        { label: 'b', task: 'Perfektum (he comido) → fortid: ___', solution: 'había comido (pluskvamperfektum)', answer: 'había comido (pluskvamperfektum)' },
        { label: 'c', task: 'Futur (vendré) → fortid: ___', solution: 'vendría (kondisjonalis)', answer: 'vendría (kondisjonalis)' },
        { label: 'd', task: 'Imperativ (¡ven!) → fortid: ___', solution: 'viniera (imperfekt konjunktiv)', answer: 'viniera (imperfekt konjunktiv)' },
      ], solution: 'a) tenía (imperfektum), b) había comido (pluskvamperfektum), c) vendría (kondisjonalis), d) viniera (imperfekt konjunktiv)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-2-example-2', type: 'example', title: 'Eksempel: Futur → kondisjonalis', problem: `"Vendré mañana." → Dijo que...`, solution: `Dijo que **vendría** al día siguiente. (Futur → kondisjonalis, mañana → al día siguiente.)` },
    { id: 'spansk-3-3-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-3-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Gjør om med alle nødvendige endringer:', subTasks: [
        { label: 'a', task: '"Mañana iré al cine." → Dijo que...', solution: 'Dijo que al día siguiente iría al cine.', answer: 'Dijo que al día siguiente iría al cine.' },
        { label: 'b', task: '"Hoy he hablado con mi madre." → Contó que...', solution: 'Contó que ese día había hablado con su madre.', answer: 'Contó que ese día había hablado con su madre.' },
        { label: 'c', task: '"¡Estudia más!" → Le dijo que...', solution: 'Le dijo que estudiara más.', answer: 'Le dijo que estudiara más.' },
        { label: 'd', task: '"Ayer compré un libro aquí." → Dijo que...', solution: 'Dijo que el día anterior había comprado un libro allí.', answer: 'Dijo que el día anterior había comprado un libro allí.' },
      ], solution: 'a) Dijo que al día siguiente iría al cine., b) Contó que ese día había hablado con su madre., c) Le dijo que estudiara más., d) Dijo que el día anterior había comprado un libro allí.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-3-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk som indirekte tale i fortid:', subTasks: [
        { label: 'a', task: 'Han sa at han var sulten.', solution: 'Dijo que tenía hambre.', answer: 'Dijo que tenía hambre.' },
        { label: 'b', task: 'Hun fortalte at hun hadde sett filmen.', solution: 'Contó que había visto la película.', answer: 'Contó que había visto la película.' },
        { label: 'c', task: 'De sa at de ville komme neste dag.', solution: 'Dijeron que vendrían al día siguiente.', answer: 'Dijeron que vendrían al día siguiente.' },
        { label: 'd', task: 'Læreren ba oss om å studere mer.', solution: 'El profesor nos dijo que estudiáramos más.', answer: 'El profesor nos dijo que estudiáramos más.' },
      ], solution: 'a) Dijo que tenía hambre., b) Contó que había visto la película., c) Dijeron que vendrían al día siguiente., d) El profesor nos dijo que estudiáramos más.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-2-tip-1', type: 'tip', content: `**Huskeregel for tidsskift:** Alt flyttes ett steg bakover: presens→imperfektum, perfektum→pluskvamperfektum, futur→kondisjonalis, imperativ→imperfekt konjunktiv.` },
    { id: 'spansk-3-3-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Tidsendringer**

- Presens → imperfektum
- Perfektum/preteritum → pluskvamperfektum
- Futur → kondisjonalis
- Imperativ → imperfekt konjunktiv
- Tidsuttrykk: hoy→ese día, mañana→al día siguiente, ayer→el día anterior
- Stedsuttrykk: aquí→allí, este→ese/aquel` },
  ],
  exercises: [],
};

// 3.3 Estilo indirecto con preguntas
export const CHAPTER_SPANSK_3_3_3: TextbookChapter = {
  id: 'spansk-3-3-3',
  courseId: 'spansk-3',
  chapterNumber: '3.3',
  title: 'Estilo indirecto con preguntas',
  subtitle: 'Indirekte spørsmål',
  description: 'Lær å omforme direkte spørsmål til indirekte spørsmål.',
  estimatedMinutes: 45,
  competenceGoals: ['omforme ja/nei-spørsmål til indirekte tale', 'omforme informasjonsspørsmål til indirekte tale'],
  content: [
    { id: 'spansk-3-3-3-intro', type: 'text', content: `## Estilo indirecto con preguntas

Spørsmål i indirekte tale bruker "si" for ja/nei-spørsmål og beholder spørreordet for informasjonsspørsmål. Husk at ordstillingen endres fra spørsmålsform til vanlig setningsstruktur.` },
    { id: 'spansk-3-3-3-def-1', type: 'definition', title: 'Indirekte spørsmål', content: `**To typer spørsmål:**

**1. Ja/nei-spørsmål → preguntar si:**
- *"¿Vienes?"* → *Preguntó **si** venía.*
- *"¿Estás bien?"* → *Preguntó **si** estaba bien.*

**2. Informasjonsspørsmål → preguntar + spørreord:**
- *"¿Qué haces?"* → *Preguntó **qué** hacía.*
- *"¿Dónde vives?"* → *Preguntó **dónde** vivía.*
- *"¿Cuándo llegas?"* → *Preguntó **cuándo** llegaba.*

**Viktig:** Ordstillingen endres til vanlig setningsstruktur (ikke inversjon):
- Direkte: *¿Dónde **vives** tú?*
- Indirekte: *Preguntó dónde **vivía** yo.* (subjekt etter verb er valgfritt)` },
    { id: 'spansk-3-3-3-text-1', type: 'text', content: `## Ja/nei-spørsmål med "si"

*"¿Vienes a la fiesta?"* → Preguntó **si** venía a la fiesta.
*"¿Has terminado?"* → Preguntó **si** había terminado.
*"¿Puedes ayudarme?"* → Preguntó **si** podía ayudarle.
*"¿Irás mañana?"* → Preguntó **si** iría al día siguiente.

**Merk:** Spørsmålstegn forsvinner og "si" legges til.
**Merk:** Tidsformene endres som vanlig når innledningsverbet er i fortid.` },
    { id: 'spansk-3-3-3-text-2', type: 'text', content: `## Informasjonsspørsmål

| Spørreord | Direkte | Indirekte |
|-----------|---------|----------|
| qué | ¿Qué haces? | Preguntó qué hacía. |
| dónde | ¿Dónde vives? | Preguntó dónde vivía. |
| cuándo | ¿Cuándo llegas? | Preguntó cuándo llegaba. |
| cómo | ¿Cómo estás? | Preguntó cómo estaba. |
| por qué | ¿Por qué lloras? | Preguntó por qué lloraba. |
| quién | ¿Quién es? | Preguntó quién era. |
| cuánto | ¿Cuánto cuesta? | Preguntó cuánto costaba. |

**Spørreordene beholder aksenttegnet** også i indirekte spørsmål!` },
    { id: 'spansk-3-3-3-example-1', type: 'example', title: 'Eksempel: Ja/nei-spørsmål', problem: `"¿Vienes mañana?" → Preguntó...`, solution: `Preguntó **si** venía al día siguiente. (si + imperfektum + tidsendring)` },
    { id: 'spansk-3-3-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-3-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Omform ja/nei-spørsmål til indirekte tale:', subTasks: [
        { label: 'a', task: '"¿Estás bien?" → Preguntó si...', solution: 'Preguntó si estaba bien.', answer: 'Preguntó si estaba bien.' },
        { label: 'b', task: '"¿Vienes a la fiesta?" → Preguntó si...', solution: 'Preguntó si venía a la fiesta.', answer: 'Preguntó si venía a la fiesta.' },
        { label: 'c', task: '"¿Has terminado?" → Preguntó si...', solution: 'Preguntó si había terminado.', answer: 'Preguntó si había terminado.' },
        { label: 'd', task: '"¿Puedes ayudarme?" → Preguntó si...', solution: 'Preguntó si podía ayudarle.', answer: 'Preguntó si podía ayudarle.' },
      ], solution: 'a) Preguntó si estaba bien., b) Preguntó si venía a la fiesta., c) Preguntó si había terminado., d) Preguntó si podía ayudarle.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-3-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Omform informasjonsspørsmål:', subTasks: [
        { label: 'a', task: '"¿Qué haces?" → Preguntó...', solution: 'Preguntó qué hacía.', answer: 'Preguntó qué hacía.' },
        { label: 'b', task: '"¿Dónde vives?" → Preguntó...', solution: 'Preguntó dónde vivía.', answer: 'Preguntó dónde vivía.' },
        { label: 'c', task: '"¿Cuándo llegas?" → Preguntó...', solution: 'Preguntó cuándo llegaba.', answer: 'Preguntó cuándo llegaba.' },
        { label: 'd', task: '"¿Cómo te llamas?" → Preguntó...', solution: 'Preguntó cómo se llamaba.', answer: 'Preguntó cómo se llamaba.' },
      ], solution: 'a) Preguntó qué hacía., b) Preguntó dónde vivía., c) Preguntó cuándo llegaba., d) Preguntó cómo se llamaba.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-3-example-2', type: 'example', title: 'Eksempel: Informasjonsspørsmål', problem: `"¿Dónde vives?" → Preguntó...`, solution: `Preguntó **dónde** vivía. (Beholder spørreordet, endrer tidsform.)` },
    { id: 'spansk-3-3-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-3-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Omform med alle nødvendige endringer:', subTasks: [
        { label: 'a', task: '"¿Qué has hecho hoy?" → Me preguntó...', solution: 'Me preguntó qué había hecho ese día.', answer: 'Me preguntó qué había hecho ese día.' },
        { label: 'b', task: '"¿Irás mañana al cine?" → Preguntó si...', solution: 'Preguntó si iría al día siguiente al cine.', answer: 'Preguntó si iría al día siguiente al cine.' },
        { label: 'c', task: '"¿Por qué no has venido?" → Preguntó...', solution: 'Preguntó por qué no había venido.', answer: 'Preguntó por qué no había venido.' },
        { label: 'd', task: '"¿Quién es tu profesor?" → Preguntó...', solution: 'Preguntó quién era mi profesor.', answer: 'Preguntó quién era mi profesor.' },
      ], solution: 'a) Me preguntó qué había hecho ese día., b) Preguntó si iría al día siguiente al cine., c) Preguntó por qué no había venido., d) Preguntó quién era mi profesor.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-3-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett til spansk som indirekte spørsmål:', subTasks: [
        { label: 'a', task: 'Han spurte om jeg var sulten.', solution: 'Preguntó si tenía hambre.', answer: 'Preguntó si tenía hambre.' },
        { label: 'b', task: 'Hun spurte hvor jeg bodde.', solution: 'Preguntó dónde vivía.', answer: 'Preguntó dónde vivía.' },
        { label: 'c', task: 'De spurte når vi skulle komme.', solution: 'Preguntaron cuándo vendríamos.', answer: 'Preguntaron cuándo vendríamos.' },
        { label: 'd', task: 'Læreren spurte hvorfor jeg ikke hadde gjort leksene.', solution: 'El profesor preguntó por qué no había hecho los deberes.', answer: 'El profesor preguntó por qué no había hecho los deberes.' },
      ], solution: 'a) Preguntó si tenía hambre., b) Preguntó dónde vivía., c) Preguntaron cuándo vendríamos., d) El profesor preguntó por qué no había hecho los deberes.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-3-tip-1', type: 'tip', content: `**Huskeregel:** Ja/nei-spørsmål → "si". Informasjonsspørsmål → beholder spørreordet (med aksent). Samme tidsendringer som vanlig indirekte tale.` },
    { id: 'spansk-3-3-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Indirekte spørsmål**

- Ja/nei-spørsmål: preguntar + si
- Informasjonsspørsmål: preguntar + qué/dónde/cuándo/cómo/por qué
- Spørreord beholder aksenttegn
- Ordstillingen endres til vanlig setningsstruktur
- Tidsendringer som vanlig ved fortid i hovedsetningen` },
  ],
  exercises: [],
};

// 3.4 Textos periodísticos
export const CHAPTER_SPANSK_3_3_4: TextbookChapter = {
  id: 'spansk-3-3-4',
  courseId: 'spansk-3',
  chapterNumber: '3.4',
  title: 'Textos periodísticos',
  subtitle: 'Journalistisk bruk av indirekte tale',
  description: 'Lær å gjenkjenne og bruke indirekte tale i avistekster og journalistikk.',
  estimatedMinutes: 45,
  competenceGoals: ['gjenkjenne indirekte tale i avistekster', 'skrive nyhetsartikler med korrekt bruk av indirekte tale'],
  content: [
    { id: 'spansk-3-3-4-intro', type: 'text', content: `## Textos periodísticos

Journalistikk bruker indirekte tale for å referere til hva politikere, eksperter og andre kilder har sagt. Det er viktig å kunne gjenkjenne og bruke dette i avistekster.` },
    { id: 'spansk-3-3-4-def-1', type: 'definition', title: 'Journalistisk indirekte tale', content: `**I journalistikk** brukes indirekte tale for å gjengi uttalelser fra kilder.

**Vanlige journalistiske innledningsverb:**

| Verb | Betydning | Bruk |
|------|-----------|------|
| declarar que | erklære at | Offisielle uttalelser |
| anunciar que | kunngjøre at | Nyheter, vedtak |
| afirmar que | hevde at | Påstander |
| negar que + subjunktiv | nekte for at | Avvisninger |
| asegurar que | forsikre at | Løfter |
| señalar que | påpeke at | Presiseringer |
| advertir que | advare om at | Advarsler |
| según + kilde | ifølge | Kildehenvisning |

**Eksempel:** *El presidente **declaró** que el gobierno **tomaría** medidas. **Según** el portavoz, las reformas **serían** implementadas en breve.*` },
    { id: 'spansk-3-3-4-text-1', type: 'text', content: `## Journalistiske uttrykk

**Kildehenvisning:**
- *Según el ministro, ...* (Ifølge ministeren, ...)
- *De acuerdo con el informe, ...* (I henhold til rapporten, ...)
- *Como señaló la experta, ...* (Som eksperten påpekte, ...)

**Sitatteknikk i aviser:**
- Indirekte: *El presidente **afirmó** que la economía **mejoraría**.*
- Blanding: *El presidente dijo que la situación "**requiere** esfuerzo de todos".*
- Direkte sitat: *"La situación es grave", **declaró** el presidente.*

Avisartikler veksler ofte mellom direkte og indirekte tale for variasjon.` },
    { id: 'spansk-3-3-4-text-2', type: 'text', content: `## Skrive en nyhetsartikkel

**Struktur:**
1. **Tittel:** Kort, direkte
2. **Ingress:** Hvem, hva, når, hvor
3. **Brødtekst:** Detaljer, sitater (indirekte tale)
4. **Bakgrunn:** Kontekst

**Eksempel:**
*El gobierno anuncia nuevas medidas educativas*

*El ministro de Educación **declaró** ayer que el gobierno **implementaría** un nuevo plan educativo. **Según** el ministro, las reformas **afectarían** a todos los niveles. **Añadió** que los profesores **recibirían** formación adicional.*` },
    { id: 'spansk-3-3-4-example-1', type: 'example', title: 'Eksempel: Journalistisk omforming', problem: `El presidente: "Vamos a mejorar la educación." → Omform journalistisk.`, solution: `El presidente **declaró** que **iban** a mejorar la educación. (Journalistisk innledningsverb + tidsendring.)` },
    { id: 'spansk-3-3-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-3-3-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Velg riktig journalistisk innledningsverb:', subTasks: [
        { label: 'a', task: 'Presidenten kunngjør en ny lov.', solution: 'El presidente anuncia una nueva ley.', answer: 'El presidente anuncia una nueva ley.' },
        { label: 'b', task: 'Ministeren hevder at økonomien er stabil.', solution: 'El ministro afirma que la economía es estable.', answer: 'El ministro afirma que la economía es estable.' },
        { label: 'c', task: 'Eksperten advarer om klimaendringer.', solution: 'La experta advierte sobre el cambio climático.', answer: 'La experta advierte sobre el cambio climático.' },
        { label: 'd', task: 'Regjeringen nekter for anklagene.', solution: 'El gobierno niega las acusaciones.', answer: 'El gobierno niega las acusaciones.' },
      ], solution: 'a) El presidente anuncia una nueva ley., b) El ministro afirma que la economía es estable., c) La experta advierte sobre el cambio climático., d) El gobierno niega las acusaciones.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-3-3-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Omform til journalistisk indirekte tale:', subTasks: [
        { label: 'a', task: '"Tomaremos medidas." (El presidente)', solution: 'El presidente declaró que tomarían medidas.', answer: 'El presidente declaró que tomarían medidas.' },
        { label: 'b', task: '"La economía mejorará." (El ministro)', solution: 'El ministro afirmó que la economía mejoraría.', answer: 'El ministro afirmó que la economía mejoraría.' },
        { label: 'c', task: '"Hemos logrado buenos resultados." (La directora)', solution: 'La directora aseguró que habían logrado buenos resultados.', answer: 'La directora aseguró que habían logrado buenos resultados.' },
        { label: 'd', task: '"No hay peligro." (El portavoz)', solution: 'El portavoz señaló que no había peligro.', answer: 'El portavoz señaló que no había peligro.' },
      ], solution: 'a) El presidente declaró que tomarían medidas., b) El ministro afirmó que la economía mejoraría., c) La directora aseguró que habían logrado buenos resultados., d) El portavoz señaló que no había peligro.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-4-example-2', type: 'example', title: 'Eksempel: Según', problem: `Skriv en setning med "según" + kilde.`, solution: `**Según** el presidente, el gobierno **tomaría** medidas para mejorar la educación.` },
    { id: 'spansk-3-3-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-3-3-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv en kort nyhetsnotis med indirekte tale:', subTasks: [
        { label: 'a', task: 'Tema: Ny skolelov kunngjort av regjeringen.', solution: 'El gobierno anunció ayer una nueva ley educativa. Según el ministro de Educación, la reforma afectaría a todos los centros escolares.', answer: 'El gobierno anunció ayer una nueva ley educativa. Según el ministro de Educación, la reforma afectaría a todos los centros escolares.' },
        { label: 'b', task: 'Tema: Presidenten lover bedre helsetjenester.', solution: 'El presidente declaró que mejoraría los servicios sanitarios. Añadió que el gobierno invertiría más en hospitales públicos.', answer: 'El presidente declaró que mejoraría los servicios sanitarios. Añadió que el gobierno invertiría más en hospitales públicos.' },
        { label: 'c', task: 'Tema: Eksperter advarer om miljøproblemer.', solution: 'Los expertos advirtieron que la contaminación estaba aumentando. Señalaron que era necesario tomar medidas urgentes.', answer: 'Los expertos advirtieron que la contaminación estaba aumentando. Señalaron que era necesario tomar medidas urgentes.' },
        { label: 'd', task: 'Tema: Fagforening kritiserer lønnsforhold.', solution: 'El sindicato denunció que los salarios no habían subido en años. Según el portavoz, los trabajadores necesitaban mejores condiciones.', answer: 'El sindicato denunció que los salarios no habían subido en años. Según el portavoz, los trabajadores necesitaban mejores condiciones.' },
      ], solution: 'a) El gobierno anunció ayer una nueva ley educativa. Según el ministro de Educación, la reforma afectaría a todos los centros escolares., b) El presidente declaró que mejoraría los servicios sanitarios. Añadió que el gobierno invertiría más en hospitales públicos., c) Los expertos advirtieron que la contaminación estaba aumentando. Señalaron que era necesario tomar medidas urgentes., d) El sindicato denunció que los salarios no habían subido en años. Según el portavoz, los trabajadores necesitaban mejores condiciones.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-3-3-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Les teksten og identifiser innledningsverb, tidsformer og kilder: "El alcalde anunció que la ciudad construiría un nuevo hospital. Según el alcalde, las obras comenzarían en primavera. Añadió que el proyecto costaría 50 millones de euros. Los vecinos, sin embargo, afirmaron que preferían una escuela."', subTasks: [
        { label: 'a', task: 'Hvilke innledningsverb brukes?', solution: 'anunció, según, añadió, afirmaron', answer: 'anunció, según, añadió, afirmaron' },
        { label: 'b', task: 'Hvilke tidsformer brukes i indirekte tale?', solution: 'Kondisjonalis: construiría, comenzarían, costaría. Imperfektum: preferían.', answer: 'Kondisjonalis: construiría, comenzarían, costaría. Imperfektum: preferían.' },
        { label: 'c', task: 'Hvem er kildene?', solution: 'El alcalde (ordføreren) og los vecinos (naboene).', answer: 'El alcalde (ordføreren) og los vecinos (naboene).' },
        { label: 'd', task: 'Hva er konflikten?', solution: 'Ordføreren vil bygge sykehus, men naboene vil heller ha en skole.', answer: 'Ordføreren vil bygge sykehus, men naboene vil heller ha en skole.' },
      ], solution: 'a) anunció, según, añadió, afirmaron, b) Kondisjonalis: construiría, comenzarían, costaría. Imperfektum: preferían., c) El alcalde (ordføreren) og los vecinos (naboene)., d) Ordføreren vil bygge sykehus, men naboene vil heller ha en skole.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-3-3-4-tip-1', type: 'tip', content: `**Journalistisk tips:** Varier mellom ulike innledningsverb (declarar, afirmar, señalar, añadir) for å unngå gjentakelser. Bruk "según" for kildehenvisning.` },
    { id: 'spansk-3-3-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Journalistisk indirekte tale**

- Innledningsverb: declarar, anunciar, afirmar, negar, señalar, advertir
- Kildehenvisning: según + kilde, de acuerdo con
- Teknikk: Veksle mellom direkte og indirekte tale
- Struktur: Tittel → ingress → brødtekst med sitater → bakgrunn` },
  ],
  exercises: [],
};

export const SPANSK_3_CHAPTERS_1_3: TextbookChapter[] = [
  CHAPTER_SPANSK_3_1_1,
  CHAPTER_SPANSK_3_1_2,
  CHAPTER_SPANSK_3_1_3,
  CHAPTER_SPANSK_3_1_4,
  CHAPTER_SPANSK_3_2_1,
  CHAPTER_SPANSK_3_2_2,
  CHAPTER_SPANSK_3_2_3,
  CHAPTER_SPANSK_3_2_4,
  CHAPTER_SPANSK_3_3_1,
  CHAPTER_SPANSK_3_3_2,
  CHAPTER_SPANSK_3_3_3,
  CHAPTER_SPANSK_3_3_4,
];
