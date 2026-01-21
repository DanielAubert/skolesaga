/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 3 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 3
 * Avansert spansk med fokus på kompleks grammatikk, litteratur, kultur og samfunn
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Subjuntivo avanzado - Konjunktiv avansert
// ============================================================================

export const CHAPTER_SPANSK_3_1: TextbookChapter = {
  id: 'spansk-3-1',
  courseId: 'spansk-3',
  chapterNumber: '1',
  title: 'Subjuntivo avanzado - Konjunktiv avansert',
  description: 'Avansert bruk av konjunktiv i komplekse setningsstrukturer.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke målspråket med god presisjon og et variert ordforråd',
    'uttrykke seg skriftlig og muntlig med god grammatisk korrekthet',
  ],
  content: [
    {
      id: 'spansk-3-1-intro',
      type: 'text',
      content: `Konjunktiv (el subjuntivo) er en av de mest komplekse delene av spansk grammatikk. På nivå 3 skal vi utforske avanserte bruksområder som går utover grunnleggende ønsker og følelser.`,
    },
    {
      id: 'spansk-3-1-def-1',
      type: 'definition',
      title: 'Konjunktiv vs. Indikativ',
      content: `**Indikativ** brukes for å uttrykke fakta, sikkerhet og objektiv virkelighet. **Konjunktiv** brukes for å uttrykke subjektivitet, usikkerhet, ønsker, følelser og hypotetiske situasjoner. Valget mellom dem avhenger ofte av hovedsetningens verb og kontekst.`,
    },
    {
      id: 'spansk-3-1-text-1',
      type: 'text',
      content: `**Konjunktiv etter upersonlige uttrykk**

| Uttrykk | Eksempel |
|---------|----------|
| Es importante que | Es importante que estudies (Det er viktig at du studerer) |
| Es necesario que | Es necesario que vengas (Det er nødvendig at du kommer) |
| Es posible que | Es posible que llueva (Det er mulig at det regner) |
| Es probable que | Es probable que ganen (Det er sannsynlig at de vinner) |
| Es una lástima que | Es una lástima que no puedas venir (Det er synd at du ikke kan komme) |

**Merk:** Uttrykk som viser sikkerhet tar indikativ: "Es cierto que viene" (Det er sikkert at han kommer).`,
    },
    {
      id: 'spansk-3-1-text-2',
      type: 'text',
      content: `**Konjunktiv i relativsetninger**

Konjunktiv brukes i relativsetninger når referenten er ukjent, usikker eller ikke-eksisterende:

- Busco un apartamento que **tenga** terraza. (Jeg leter etter en leilighet som har terrasse - usikkert om den finnes)
- Busco el apartamento que **tiene** terraza. (Jeg leter etter leiligheten som har terrasse - jeg vet at den finnes)
- No hay nadie que **sepa** la respuesta. (Det er ingen som vet svaret)
- Necesito a alguien que **hable** chino. (Jeg trenger noen som snakker kinesisk)`,
    },
    {
      id: 'spansk-3-1-text-3',
      type: 'text',
      content: `**Konjunktiv etter tidskonjunksjoner (fremtid)**

Når handlingen refererer til fremtiden, brukes konjunktiv:

| Konjunksjon | Eksempel |
|-------------|----------|
| cuando | Cuando **llegues**, llámame (Når du kommer, ring meg) |
| en cuanto | En cuanto **termine**, te aviso (Så snart jeg er ferdig, sier jeg fra) |
| hasta que | Espera hasta que **vuelva** (Vent til jeg kommer tilbake) |
| antes de que | Antes de que **salgas**, cierra la ventana (Før du går ut, lukk vinduet) |
| después de que | Después de que **coma**, descansaré (Etter at jeg har spist, skal jeg hvile) |

**Merk:** "Antes de que" tar ALLTID konjunktiv.`,
    },
    {
      id: 'spansk-3-1-example-1',
      type: 'example',
      title: 'Konjunktiv i praksis',
      problem: 'Oversett til spansk: "Jeg vil at du skal komme når du er ferdig med arbeidet."',
      solution: `**Quiero que vengas cuando termines el trabajo.**

- "Quiero que" utløser konjunktiv → vengas
- "cuando" med fremtidig betydning → termines
- Begge verb er i presens konjunktiv`,
    },
    {
      id: 'spansk-3-1-tip-1',
      type: 'tip',
      title: 'WEIRDO-regelen',
      content: `En huskeregel for når konjunktiv brukes: **W**ishes (ønsker), **E**motions (følelser), **I**mpersonal expressions (upersonlige uttrykk), **R**ecommendations (anbefalinger), **D**oubt/Denial (tvil/nektelse), **O**jalá (forhåpentligvis).`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig form: "Es importante que todos _____ a tiempo."',
      options: [
        { id: 'a', text: 'llegan', isCorrect: false, feedback: 'Etter "es importante que" må vi bruke konjunktiv.' },
        { id: 'b', text: 'lleguen', isCorrect: true },
        { id: 'c', text: 'llegaron', isCorrect: false, feedback: 'Dette er preteritum indikativ, ikke konjunktiv.' },
        { id: 'd', text: 'llegarán', isCorrect: false, feedback: 'Dette er futurum indikativ, ikke konjunktiv.' },
      ],
      solution: '"Es importante que" er et upersonlig uttrykk som krever konjunktiv. "Lleguen" er presens konjunktiv av "llegar".',
    },
    {
      id: 'spansk-3-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken setning er korrekt?',
      options: [
        { id: 'a', text: 'Busco un libro que tiene información sobre España.', isCorrect: false, feedback: 'Når vi ikke vet om boken finnes, bruker vi konjunktiv.' },
        { id: 'b', text: 'Busco un libro que tenga información sobre España.', isCorrect: true },
        { id: 'c', text: 'Busco un libro que tuviera información sobre España.', isCorrect: false, feedback: 'Presens konjunktiv er mer naturlig her.' },
        { id: 'd', text: 'Busco un libro que tendrá información sobre España.', isCorrect: false, feedback: 'Futurum brukes ikke i relativsetninger på denne måten.' },
      ],
      solution: 'Når referenten (boken) er ukjent eller usikker, bruker vi konjunktiv i relativsetningen.',
    },
    {
      id: 'spansk-3-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "Te llamaré cuando _____ a casa."',
      options: [
        { id: 'a', text: 'llego', isCorrect: false, feedback: 'Presens indikativ brukes ikke etter "cuando" med fremtidig betydning.' },
        { id: 'b', text: 'llegue', isCorrect: true },
        { id: 'c', text: 'llegaré', isCorrect: false, feedback: 'Futurum brukes ikke etter tidskonjunksjoner.' },
        { id: 'd', text: 'llegaba', isCorrect: false, feedback: 'Imperfektum passer ikke i denne konteksten.' },
      ],
      solution: 'Etter "cuando" med fremtidig betydning bruker vi presens konjunktiv. "Llegue" er korrekt.',
    },
    {
      id: 'spansk-3-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken konjunksjon tar ALLTID konjunktiv?',
      options: [
        { id: 'a', text: 'cuando', isCorrect: false, feedback: '"Cuando" tar indikativ når det refererer til fortid/vane.' },
        { id: 'b', text: 'después de que', isCorrect: false, feedback: '"Después de que" kan ta indikativ når det refererer til fortid.' },
        { id: 'c', text: 'antes de que', isCorrect: true },
        { id: 'd', text: 'hasta que', isCorrect: false, feedback: '"Hasta que" kan ta indikativ når det refererer til fortid.' },
      ],
      solution: '"Antes de que" tar alltid konjunktiv fordi handlingen aldri har skjedd ennå på tidspunktet det snakkes om.',
    },
    {
      id: 'spansk-3-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "No creo que María _____ la verdad."',
      options: [
        { id: 'a', text: 'sabe', isCorrect: false, feedback: 'Etter "no creo que" (tvil) bruker vi konjunktiv.' },
        { id: 'b', text: 'sepa', isCorrect: true },
        { id: 'c', text: 'sabrá', isCorrect: false, feedback: 'Futurum brukes ikke her.' },
        { id: 'd', text: 'sabía', isCorrect: false, feedback: 'Imperfektum indikativ er feil i denne konteksten.' },
      ],
      solution: '"No creo que" uttrykker tvil og krever konjunktiv. "Sepa" er presens konjunktiv av "saber".',
    },
    {
      id: 'spansk-3-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er forskjellen mellom "Creo que viene" og "No creo que venga"?',
      options: [
        { id: 'a', text: 'Ingen forskjell, begge er korrekte', isCorrect: false, feedback: 'Det er en viktig grammatisk forskjell.' },
        { id: 'b', text: '"Creo que" tar indikativ, "No creo que" tar konjunktiv', isCorrect: true },
        { id: 'c', text: '"Creo que" tar konjunktiv, "No creo que" tar indikativ', isCorrect: false, feedback: 'Dette er omvendt.' },
        { id: 'd', text: 'Begge tar konjunktiv', isCorrect: false, feedback: '"Creo que" (positiv form) tar indikativ.' },
      ],
      solution: '"Creo que" (jeg tror at) uttrykker tro/sikkerhet → indikativ. "No creo que" (jeg tror ikke at) uttrykker tvil → konjunktiv.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Tiempos compuestos - Sammensatte tider
// ============================================================================

export const CHAPTER_SPANSK_3_2: TextbookChapter = {
  id: 'spansk-3-2',
  courseId: 'spansk-3',
  chapterNumber: '2',
  title: 'Tiempos compuestos - Sammensatte tider',
  description: 'Mestre alle sammensatte tider i spansk, inkludert perfektum konjunktiv.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke målspråket med god presisjon og et variert ordforråd',
    'uttrykke seg med grammatisk korrekthet i ulike tidsformer',
  ],
  content: [
    {
      id: 'spansk-3-2-intro',
      type: 'text',
      content: `Sammensatte tider dannes med hjelpeverbet "haber" + perfektum partisipp. På nivå 3 skal vi mestre alle disse tidene, inkludert de som brukes i konjunktiv.`,
    },
    {
      id: 'spansk-3-2-def-1',
      type: 'definition',
      title: 'Perfektum partisipp',
      content: `Perfektum partisipp dannes ved å legge til -ado (for -ar-verb) eller -ido (for -er/-ir-verb) til verbstammen: hablar → hablado, comer → comido, vivir → vivido. Uregelmessige: hacer → hecho, decir → dicho, escribir → escrito, ver → visto, volver → vuelto, abrir → abierto, poner → puesto, romper → roto.`,
    },
    {
      id: 'spansk-3-2-text-1',
      type: 'text',
      content: `**Oversikt over sammensatte tider**

| Tid | Haber-form | Eksempel |
|-----|------------|----------|
| Pretérito perfecto (presens perfektum) | he, has, ha, hemos, han | He comido (Jeg har spist) |
| Pluscuamperfecto (pluskvamperfektum) | había, habías, había, habíamos, habían | Había comido (Jeg hadde spist) |
| Futuro perfecto (futurum perfektum) | habré, habrás, habrá, habremos, habrán | Habré comido (Jeg vil ha spist) |
| Condicional perfecto (kondisjonalis perfektum) | habría, habrías, habría, habríamos, habrían | Habría comido (Jeg ville ha spist) |`,
    },
    {
      id: 'spansk-3-2-text-2',
      type: 'text',
      content: `**Sammensatte tider i konjunktiv**

| Tid | Haber-form | Eksempel |
|-----|------------|----------|
| Pretérito perfecto de subjuntivo | haya, hayas, haya, hayamos, hayan | Espero que haya llegado (Jeg håper han har kommet) |
| Pluscuamperfecto de subjuntivo | hubiera/hubiese, hubieras, hubiera, hubiéramos, hubieran | Si hubiera sabido... (Hvis jeg hadde visst...) |

Disse brukes når konteksten krever konjunktiv OG handlingen er fullført.`,
    },
    {
      id: 'spansk-3-2-text-3',
      type: 'text',
      content: `**Bruk av pretérito perfecto de subjuntivo**

Brukes når hovedverbet krever konjunktiv og bisetningen refererer til fortid:

- Dudo que **hayan terminado**. (Jeg tviler på at de har blitt ferdige.)
- Es posible que **haya perdido** el tren. (Det er mulig at han har gått glipp av toget.)
- Me alegro de que **hayas aprobado**. (Jeg er glad for at du har bestått.)
- No creo que **haya venido**. (Jeg tror ikke at han har kommet.)`,
    },
    {
      id: 'spansk-3-2-example-1',
      type: 'example',
      title: 'Sammenligning av tider',
      problem: 'Forklar forskjellen mellom disse setningene.',
      solution: `1. **Creo que ha llegado.** (Jeg tror han har kommet.) - Indikativ fordi "creo que" uttrykker tro.
2. **No creo que haya llegado.** (Jeg tror ikke han har kommet.) - Konjunktiv fordi "no creo que" uttrykker tvil.
3. **Creí que había llegado.** (Jeg trodde han hadde kommet.) - Pluskvamperfektum indikativ i fortidskontekst.
4. **No creía que hubiera llegado.** (Jeg trodde ikke han hadde kommet.) - Pluskvamperfektum konjunktiv.`,
    },
    {
      id: 'spansk-3-2-text-4',
      type: 'text',
      content: `**Futurum perfektum - spesielle bruksområder**

Futurum perfektum brukes ikke bare for fremtidige fullførte handlinger, men også for å uttrykke sannsynlighet i fortiden:

- A estas horas **habrá llegado**. (På dette tidspunktet har han nok kommet.)
- **Habrán salido** ya. (De har nok allerede dratt.)
- ¿Qué **habrá pasado**? (Hva kan ha skjedd?)

Dette kalles "futuro de probabilidad" og er svært vanlig i spansk.`,
    },
    {
      id: 'spansk-3-2-warning-1',
      type: 'warning',
      title: 'Vanlig feil',
      content: `Ikke bland sammen "he sido" og "he estado". "Ser" brukes for permanente egenskaper, "estar" for tilstander. "Ha sido profesor" (Han har vært lærer - yrke), "Ha estado enfermo" (Han har vært syk - midlertidig tilstand).`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig: "Espero que María _____ el examen."',
      options: [
        { id: 'a', text: 'ha aprobado', isCorrect: false, feedback: 'Etter "espero que" må vi bruke konjunktiv.' },
        { id: 'b', text: 'haya aprobado', isCorrect: true },
        { id: 'c', text: 'había aprobado', isCorrect: false, feedback: 'Dette er pluskvamperfektum indikativ.' },
        { id: 'd', text: 'habrá aprobado', isCorrect: false, feedback: 'Dette er futurum perfektum indikativ.' },
      ],
      solution: '"Espero que" krever konjunktiv. "Haya aprobado" er pretérito perfecto de subjuntivo.',
    },
    {
      id: 'spansk-3-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er perfektum partisipp av "escribir"?',
      options: [
        { id: 'a', text: 'escribido', isCorrect: false, feedback: '"Escribir" har uregelmessig partisipp.' },
        { id: 'b', text: 'escrito', isCorrect: true },
        { id: 'c', text: 'escribado', isCorrect: false, feedback: 'Dette er ikke en gyldig form.' },
        { id: 'd', text: 'escribiendo', isCorrect: false, feedback: 'Dette er presens partisipp (gerundium).' },
      ],
      solution: '"Escribir" har uregelmessig partisipp: "escrito". Han har skrevet = Ha escrito.',
    },
    {
      id: 'spansk-3-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "Si _____ antes, habría llegado a tiempo."',
      options: [
        { id: 'a', text: 'hubiera salido', isCorrect: true },
        { id: 'b', text: 'haya salido', isCorrect: false, feedback: 'I irreale betingelsessetninger i fortid bruker vi pluskvamperfektum konjunktiv.' },
        { id: 'c', text: 'había salido', isCorrect: false, feedback: 'Etter "si" i irreale setninger bruker vi konjunktiv.' },
        { id: 'd', text: 'habré salido', isCorrect: false, feedback: 'Futurum brukes aldri etter "si".' },
      ],
      solution: 'I irreale betingelsessetninger om fortiden: Si + pluskvamperfektum konjunktiv, kondisjonalis perfektum.',
    },
    {
      id: 'spansk-3-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva uttrykker "A estas horas habrá llegado"?',
      options: [
        { id: 'a', text: 'En fremtidig fullført handling', isCorrect: false, feedback: 'Konteksten antyder nåtid.' },
        { id: 'b', text: 'Sannsynlighet om noe som har skjedd', isCorrect: true },
        { id: 'c', text: 'En hypotetisk situasjon', isCorrect: false, feedback: 'Det er ikke kondisjonalis.' },
        { id: 'd', text: 'Et ønske', isCorrect: false, feedback: 'Det er ikke konjunktiv.' },
      ],
      solution: 'Futurum perfektum kan brukes for å uttrykke sannsynlighet om fortiden: "Han har nok kommet nå."',
    },
    {
      id: 'spansk-3-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "Cuando llegué, ya _____ la película."',
      options: [
        { id: 'a', text: 'ha empezado', isCorrect: false, feedback: 'Presens perfektum passer ikke med fortidskonteksten.' },
        { id: 'b', text: 'había empezado', isCorrect: true },
        { id: 'c', text: 'haya empezado', isCorrect: false, feedback: 'Konjunktiv er ikke nødvendig her.' },
        { id: 'd', text: 'habrá empezado', isCorrect: false, feedback: 'Futurum passer ikke i fortidskontekst.' },
      ],
      solution: 'Pluskvamperfektum brukes for å uttrykke en handling som skjedde før en annen fortidshandling.',
    },
    {
      id: 'spansk-3-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilke av disse partisippene er uregelmessige?',
      options: [
        { id: 'a', text: 'comido, bebido, vivido', isCorrect: false, feedback: 'Disse er alle regelmessige.' },
        { id: 'b', text: 'hecho, dicho, visto', isCorrect: true },
        { id: 'c', text: 'hablado, estudiado, trabajado', isCorrect: false, feedback: 'Disse er alle regelmessige -ar-verb.' },
        { id: 'd', text: 'cantado, bailado, viajado', isCorrect: false, feedback: 'Disse er alle regelmessige.' },
      ],
      solution: 'Hecho (hacer), dicho (decir) og visto (ver) er uregelmessige partisipper.',
    },
  ],
};

// ============================================================================
// Kapittel 3: Estilo indirecto - Indirekte tale
// ============================================================================

export const CHAPTER_SPANSK_3_3: TextbookChapter = {
  id: 'spansk-3-3',
  courseId: 'spansk-3',
  chapterNumber: '3',
  title: 'Estilo indirecto - Indirekte tale',
  description: 'Lær å gjengi hva andre har sagt ved bruk av indirekte tale.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjengi og referere til andres ytringer',
    'bruke målspråket med god presisjon og grammatisk korrekthet',
  ],
  content: [
    {
      id: 'spansk-3-3-intro',
      type: 'text',
      content: `Indirekte tale (estilo indirecto) brukes når vi gjengir hva noen har sagt uten å sitere ordrett. Dette krever ofte endringer i verbtider, pronomen og tidsuttrykk.`,
    },
    {
      id: 'spansk-3-3-def-1',
      type: 'definition',
      title: 'Direkte vs. Indirekte tale',
      content: `**Direkte tale:** María dijo: "Estoy cansada." (María sa: "Jeg er trøtt.")
**Indirekte tale:** María dijo que estaba cansada. (María sa at hun var trøtt.)

Merk at verbet endres fra presens til imperfektum når rapporteringsverbet er i fortid.`,
    },
    {
      id: 'spansk-3-3-text-1',
      type: 'text',
      content: `**Tidsskifter i indirekte tale**

Når rapporteringsverbet er i fortid, skjer følgende endringer:

| Direkte tale | Indirekte tale |
|--------------|----------------|
| Presens: "Trabajo" | Imperfektum: que trabajaba |
| Pretérito perfecto: "He trabajado" | Pluskvamperfektum: que había trabajado |
| Futurum: "Trabajaré" | Kondisjonalis: que trabajaría |
| Imperativ: "¡Trabaja!" | Imperfektum konjunktiv: que trabajara |`,
    },
    {
      id: 'spansk-3-3-text-2',
      type: 'text',
      content: `**Endringer i pronomen og possessiver**

| Direkte | Indirekte |
|---------|-----------|
| yo | él/ella |
| mi | su |
| nosotros | ellos |
| aquí | allí |
| hoy | ese día / aquel día |
| mañana | al día siguiente |
| ayer | el día anterior |
| ahora | entonces |`,
    },
    {
      id: 'spansk-3-3-example-1',
      type: 'example',
      title: 'Fullstendig transformasjon',
      problem: 'Gjør om til indirekte tale: Pedro dijo: "Mañana iré a tu casa porque quiero verte."',
      solution: `**Pedro dijo que al día siguiente iría a su casa porque quería verla/verlo.**

Endringer:
- "Mañana" → "al día siguiente"
- "iré" (futurum) → "iría" (kondisjonalis)
- "tu casa" → "su casa"
- "quiero" (presens) → "quería" (imperfektum)
- "verte" → "verla/verlo" (avhengig av hvem han snakket til)`,
    },
    {
      id: 'spansk-3-3-text-3',
      type: 'text',
      content: `**Indirekte spørsmål**

Spørsmål gjengis med "si" (om) for ja/nei-spørsmål, eller med spørreord for informasjonsspørsmål:

- "¿Vienes?" → Preguntó **si** venía. (Han spurte om hun kom.)
- "¿Dónde vives?" → Preguntó **dónde** vivía. (Han spurte hvor hun bodde.)
- "¿Cuántos años tienes?" → Preguntó **cuántos años** tenía. (Han spurte hvor gammel hun var.)

**Merk:** Spørreordene beholder aksenten også i indirekte spørsmål.`,
    },
    {
      id: 'spansk-3-3-text-4',
      type: 'text',
      content: `**Indirekte befalinger**

Befalinger gjengis med konjunktiv:

- "¡Ven aquí!" → Le dijo que **viniera** allí. (Han sa at hun skulle komme dit.)
- "¡No hables!" → Le pidió que no **hablara**. (Han ba henne om ikke å snakke.)
- "¡Estudiad más!" → Les aconsejó que **estudiaran** más. (Han rådet dem til å studere mer.)`,
    },
    {
      id: 'spansk-3-3-tip-1',
      type: 'tip',
      title: 'Når tiden ikke endres',
      content: `Hvis rapporteringsverbet er i presens, endres ikke verbtidene: María dice: "Estoy cansada" → María dice que está cansada. Tidene endres kun når rapporteringsverbet er i fortid.`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Gjør om: Juan dijo: "Estoy enfermo." → Juan dijo que _____.',
      options: [
        { id: 'a', text: 'está enfermo', isCorrect: false, feedback: 'Presens må endres til imperfektum når rapporteringsverbet er i fortid.' },
        { id: 'b', text: 'estaba enfermo', isCorrect: true },
        { id: 'c', text: 'estuvo enfermo', isCorrect: false, feedback: 'Preteritum er ikke riktig her.' },
        { id: 'd', text: 'estará enfermo', isCorrect: false, feedback: 'Futurum er ikke riktig her.' },
      ],
      solution: 'Presens "estoy" blir imperfektum "estaba" i indirekte tale når rapporteringsverbet er i fortid.',
    },
    {
      id: 'spansk-3-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Gjør om: Ana dijo: "Iré mañana." → Ana dijo que _____ al día siguiente.',
      options: [
        { id: 'a', text: 'irá', isCorrect: false, feedback: 'Futurum må endres til kondisjonalis.' },
        { id: 'b', text: 'iría', isCorrect: true },
        { id: 'c', text: 'iba', isCorrect: false, feedback: 'Imperfektum av "ir" betyr "pleide å gå".' },
        { id: 'd', text: 'fue', isCorrect: false, feedback: 'Preteritum passer ikke her.' },
      ],
      solution: 'Futurum "iré" blir kondisjonalis "iría" i indirekte tale. "Mañana" blir "al día siguiente".',
    },
    {
      id: 'spansk-3-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Gjør om: "¿Dónde vives?" → Me preguntó _____.',
      options: [
        { id: 'a', text: 'que dónde vivo', isCorrect: false, feedback: 'Vi bruker ikke "que" i indirekte spørsmål med spørreord.' },
        { id: 'b', text: 'dónde vivía', isCorrect: true },
        { id: 'c', text: 'si vivía', isCorrect: false, feedback: '"Si" brukes for ja/nei-spørsmål, ikke for spørsmål med spørreord.' },
        { id: 'd', text: 'donde vivía', isCorrect: false, feedback: 'Spørreordet må beholde aksenten.' },
      ],
      solution: 'Indirekte spørsmål med spørreord: spørreordet beholder aksenten, og verbtiden endres.',
    },
    {
      id: 'spansk-3-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Gjør om: "¡Ven aquí!" → Le dijo que _____ allí.',
      options: [
        { id: 'a', text: 'viene', isCorrect: false, feedback: 'Befalinger gjengis med konjunktiv.' },
        { id: 'b', text: 'viniera', isCorrect: true },
        { id: 'c', text: 'venía', isCorrect: false, feedback: 'Imperfektum indikativ er ikke riktig for befalinger.' },
        { id: 'd', text: 'vendría', isCorrect: false, feedback: 'Kondisjonalis er ikke riktig for befalinger.' },
      ],
      solution: 'Imperativ gjengis med imperfektum konjunktiv i indirekte tale: "ven" → "viniera".',
    },
    {
      id: 'spansk-3-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Gjør om: María dijo: "He terminado mi trabajo." → María dijo que _____ su trabajo.',
      options: [
        { id: 'a', text: 'ha terminado', isCorrect: false, feedback: 'Presens perfektum må endres til pluskvamperfektum.' },
        { id: 'b', text: 'había terminado', isCorrect: true },
        { id: 'c', text: 'terminó', isCorrect: false, feedback: 'Preteritum mister nyansen av fullført handling.' },
        { id: 'd', text: 'terminaba', isCorrect: false, feedback: 'Imperfektum uttrykker ikke fullført handling.' },
      ],
      solution: 'Presens perfektum "he terminado" blir pluskvamperfektum "había terminado" i indirekte tale.',
    },
    {
      id: 'spansk-3-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken setning er korrekt indirekte tale for "¿Tienes hambre?"?',
      options: [
        { id: 'a', text: 'Preguntó que si tenía hambre', isCorrect: false, feedback: 'Vi bruker ikke "que" før "si".' },
        { id: 'b', text: 'Preguntó si tenía hambre', isCorrect: true },
        { id: 'c', text: 'Preguntó si tiene hambre', isCorrect: false, feedback: 'Verbtiden må endres når rapporteringsverbet er i fortid.' },
        { id: 'd', text: 'Preguntó qué tenía hambre', isCorrect: false, feedback: '"Qué" brukes ikke for ja/nei-spørsmål.' },
      ],
      solution: 'Ja/nei-spørsmål gjengis med "si" (om), og verbtiden endres til imperfektum.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Literatura clásica y moderna
// ============================================================================

export const CHAPTER_SPANSK_3_4: TextbookChapter = {
  id: 'spansk-3-4',
  courseId: 'spansk-3',
  chapterNumber: '4',
  title: 'Literatura clásica y moderna',
  description: 'Utforsk spanskspråklig litteratur fra Cervantes til moderne forfattere.',
  estimatedMinutes: 80,
  competenceGoals: [
    'lese og analysere litterære tekster på målspråket',
    'drøfte kulturelle uttrykk i et historisk og samtidig perspektiv',
  ],
  content: [
    {
      id: 'spansk-3-4-intro',
      type: 'text',
      content: `Spanskspråklig litteratur har en rik tradisjon som spenner fra middelalderen til i dag. Vi skal utforske noen av de viktigste verkene og forfatterne, og lære å analysere litterære tekster på spansk.`,
    },
    {
      id: 'spansk-3-4-text-1',
      type: 'text',
      content: `**El Siglo de Oro (Gullalderen)**

Gullalderen (ca. 1500-1700) var en blomstringsperiode for spansk kunst og litteratur.

**Miguel de Cervantes (1547-1616)**
- Forfatter av "Don Quijote de la Mancha" (1605/1615)
- Regnes som den første moderne romanen
- Satirerer ridderromaner og utforsker temaer som illusjon vs. virkelighet

**Lope de Vega (1562-1635)**
- Skrev over 1500 teaterstykker
- Mester i "comedia nueva"
- Kjent for "Fuenteovejuna"`,
    },
    {
      id: 'spansk-3-4-text-2',
      type: 'text',
      content: `**Generación del 98**

En gruppe forfattere som reagerte på Spanias tap av de siste koloniene i 1898.

**Miguel de Unamuno (1864-1936)**
- Filosof og forfatter
- "Niebla" - eksistensialistisk roman
- Utforsket spansk identitet og eksistensielle spørsmål

**Antonio Machado (1875-1939)**
- Poet
- "Campos de Castilla" - poesi om det spanske landskapet
- Reflekterende og melankolsk stil`,
    },
    {
      id: 'spansk-3-4-text-3',
      type: 'text',
      content: `**Generación del 27**

En gruppe poeter aktive rundt 1927, påvirket av surrealisme og avantgarde.

**Federico García Lorca (1898-1936)**
- Spanias mest kjente poet og dramatiker
- "Romancero gitano" - poesi om sigøynerkultur
- "Bodas de sangre", "La casa de Bernarda Alba" - drama
- Henrettet under den spanske borgerkrigen

**Rafael Alberti (1902-1999)**
- Nobelpriskandidat
- "Marinero en tierra" - nostalgi for barndommens hav`,
    },
    {
      id: 'spansk-3-4-text-4',
      type: 'text',
      content: `**Moderne latinamerikansk litteratur**

**El Boom latinoamericano (1960-70-tallet)**
En litterær bevegelse som brakte latinamerikansk litteratur til verdensscenen.

**Gabriel García Márquez (1927-2014, Colombia)**
- Nobelprisvinner 1982
- "Cien años de soledad" (Hundre års ensomhet)
- Mester i magisk realisme

**Mario Vargas Llosa (1936-, Peru)**
- Nobelprisvinner 2010
- "La ciudad y los perros"
- Eksperimentell stil

**Julio Cortázar (1914-1984, Argentina)**
- "Rayuela" (Paradis)
- Innovativ romanstruktur`,
    },
    {
      id: 'spansk-3-4-def-1',
      type: 'definition',
      title: 'Magisk realisme (Realismo mágico)',
      content: `En litterær stil der overnaturlige eller fantastiske elementer presenteres som normale deler av hverdagsvirkeligheten. Typisk for latinamerikansk litteratur, spesielt García Márquez. Karakteristikker: mytologiske elementer, tidsforstyrrelser, fantastiske hendelser beskrevet i nøktern tone.`,
    },
    {
      id: 'spansk-3-4-example-1',
      type: 'example',
      title: 'Tekstanalyse - Don Quijote',
      content: `**Utdrag:**
"En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor."

**Analyse:**
- Åpningen er blitt ikonisk i verdenslitteraturen
- "De cuyo nombre no quiero acordarme" skaper mystikk og distanse
- Detaljene (lanse, skjold, mager hest, mynde) etablerer ridderbildet
- Ironisk tone - disse tingene er utdaterte og falleferdige`,
    },
    {
      id: 'spansk-3-4-text-5',
      type: 'text',
      content: `**Nyttige begreper for litterær analyse**

| Spansk | Norsk |
|--------|-------|
| el narrador | fortelleren |
| el protagonista | hovedpersonen |
| el argumento | handlingen |
| el tema | temaet |
| el estilo | stilen |
| la metáfora | metaforen |
| el símbolo | symbolet |
| el punto de vista | synsvinkelen |
| el desenlace | avslutningen/oppløsningen |
| la ironía | ironien |`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem skrev "Cien años de soledad"?',
      options: [
        { id: 'a', text: 'Mario Vargas Llosa', isCorrect: false, feedback: 'Vargas Llosa er peruansk og skrev bl.a. "La ciudad y los perros".' },
        { id: 'b', text: 'Gabriel García Márquez', isCorrect: true },
        { id: 'c', text: 'Julio Cortázar', isCorrect: false, feedback: 'Cortázar skrev "Rayuela".' },
        { id: 'd', text: 'Miguel de Cervantes', isCorrect: false, feedback: 'Cervantes levde på 1500-1600-tallet.' },
      ],
      solution: 'Gabriel García Márquez fra Colombia skrev "Cien años de soledad" (1967), et hovedverk innen magisk realisme.',
    },
    {
      id: 'spansk-3-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kjennetegner magisk realisme?',
      options: [
        { id: 'a', text: 'Kun realistiske beskrivelser av hverdagslivet', isCorrect: false, feedback: 'Magisk realisme inkluderer overnaturlige elementer.' },
        { id: 'b', text: 'Overnaturlige elementer presentert som normale', isCorrect: true },
        { id: 'c', text: 'Kun fantasy og eventyr', isCorrect: false, feedback: 'Det er ikke ren fantasy, men blander det magiske med det hverdagslige.' },
        { id: 'd', text: 'Kun historiske romaner', isCorrect: false, feedback: 'Magisk realisme er ikke begrenset til historiske temaer.' },
      ],
      solution: 'Magisk realisme blander fantastiske elementer med hverdagsvirkelighet, der det overnaturlige presenteres som normalt.',
    },
    {
      id: 'spansk-3-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken litterær bevegelse tilhørte Federico García Lorca?',
      options: [
        { id: 'a', text: 'Generación del 98', isCorrect: false, feedback: 'Det var en tidligere generasjon (Unamuno, Machado).' },
        { id: 'b', text: 'Generación del 27', isCorrect: true },
        { id: 'c', text: 'El Boom latinoamericano', isCorrect: false, feedback: 'Det var en latinamerikansk bevegelse fra 1960-70-tallet.' },
        { id: 'd', text: 'El Siglo de Oro', isCorrect: false, feedback: 'Gullalderen var på 1500-1600-tallet.' },
      ],
      solution: 'García Lorca var en sentral figur i Generación del 27, sammen med Rafael Alberti og andre poeter.',
    },
    {
      id: 'spansk-3-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "el desenlace" i litterær analyse?',
      options: [
        { id: 'a', text: 'Åpningen', isCorrect: false, feedback: 'Åpningen er "el comienzo" eller "el inicio".' },
        { id: 'b', text: 'Avslutningen/oppløsningen', isCorrect: true },
        { id: 'c', text: 'Hovedpersonen', isCorrect: false, feedback: 'Hovedpersonen er "el protagonista".' },
        { id: 'd', text: 'Fortelleren', isCorrect: false, feedback: 'Fortelleren er "el narrador".' },
      ],
      solution: '"El desenlace" refererer til avslutningen eller oppløsningen av konflikten i en fortelling.',
    },
    {
      id: 'spansk-3-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket verk regnes som den første moderne romanen?',
      options: [
        { id: 'a', text: 'Cien años de soledad', isCorrect: false, feedback: 'Denne ble skrevet i 1967.' },
        { id: 'b', text: 'Don Quijote de la Mancha', isCorrect: true },
        { id: 'c', text: 'Rayuela', isCorrect: false, feedback: 'Denne ble skrevet i 1963.' },
        { id: 'd', text: 'Niebla', isCorrect: false, feedback: 'Denne ble skrevet i 1914.' },
      ],
      solution: '"Don Quijote de la Mancha" (1605/1615) av Cervantes regnes som den første moderne romanen.',
    },
    {
      id: 'spansk-3-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "el argumento" i litterær kontekst?',
      options: [
        { id: 'a', text: 'Et argument eller diskusjon', isCorrect: false, feedback: 'I litterær kontekst har ordet en annen betydning.' },
        { id: 'b', text: 'Handlingen i en fortelling', isCorrect: true },
        { id: 'c', text: 'Forfatteren', isCorrect: false, feedback: 'Forfatteren er "el autor".' },
        { id: 'd', text: 'Stilen', isCorrect: false, feedback: 'Stilen er "el estilo".' },
      ],
      solution: 'I litterær analyse betyr "el argumento" handlingen eller plottet i en fortelling.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Cine y arte hispanohablante
// ============================================================================

export const CHAPTER_SPANSK_3_5: TextbookChapter = {
  id: 'spansk-3-5',
  courseId: 'spansk-3',
  chapterNumber: '5',
  title: 'Cine y arte hispanohablante',
  description: 'Utforsk spanskspråklig film og kunst fra ulike epoker.',
  estimatedMinutes: 75,
  competenceGoals: [
    'drøfte kulturelle uttrykk i et historisk og samtidig perspektiv',
    'sammenligne kulturelle uttrykk fra målspråkområdet med egne erfaringer',
  ],
  content: [
    {
      id: 'spansk-3-5-intro',
      type: 'text',
      content: `Den spanskspråklige verden har en rik tradisjon innen kunst og film. Fra Goya og Picasso til Almodóvar og Iñárritu, skal vi utforske viktige kunstnere og filmskapere.`,
    },
    {
      id: 'spansk-3-5-text-1',
      type: 'text',
      content: `**Klassisk spansk kunst**

**Diego Velázquez (1599-1660)**
- Hoffmaler for Filip IV
- Mesterverk: "Las Meninas" (1656)
- Kjent for realistiske portretter og lys/skygge-teknikk

**Francisco de Goya (1746-1828)**
- Hoffmaler og senere samfunnskritiker
- "Los fusilamientos del 3 de mayo" - om Napoleonskrigene
- "Pinturas negras" - mørke, symbolske malerier
- Overgang fra rokoko til romantikk`,
    },
    {
      id: 'spansk-3-5-text-2',
      type: 'text',
      content: `**Moderne spansk kunst**

**Pablo Picasso (1881-1973)**
- Grunnlegger av kubismen
- "Guernica" (1937) - protest mot borgerkrigen
- Gjennomgikk flere perioder: blå, rosa, kubistisk

**Salvador Dalí (1904-1989)**
- Surrealist
- "La persistencia de la memoria" (smeltende klokker)
- Samarbeidet med Luis Buñuel om surrealistiske filmer

**Joan Miró (1893-1983)**
- Surrealist og abstrakt kunstner
- Fargerike, lekne komposisjoner
- Skulpturer og keramikk i tillegg til malerier`,
    },
    {
      id: 'spansk-3-5-text-3',
      type: 'text',
      content: `**Latinamerikansk kunst**

**Frida Kahlo (1907-1954, Mexico)**
- Selvportretter med symbolsk innhold
- Utforsket identitet, smerte og meksikansk kultur
- Gift med muralisten Diego Rivera

**Diego Rivera (1886-1957, Mexico)**
- Muralist
- Store veggmalerier om meksikansk historie
- Politisk engasjert kunst

**Fernando Botero (1932-2023, Colombia)**
- Kjent for "volumetrisk" stil med runde figurer
- Malerier og skulpturer
- Kommenterer samfunn og politikk`,
    },
    {
      id: 'spansk-3-5-text-4',
      type: 'text',
      content: `**Spansk film - Regissører**

**Luis Buñuel (1900-1983)**
- Surrealist
- "Un perro andaluz" (1929) - surrealistisk kortfilm
- "Viridiana" (1961) - kontroversielt mesterverk

**Pedro Almodóvar (1949-)**
- Spanias mest internasjonalt kjente regissør
- "Todo sobre mi madre" (1999) - Oscar for beste utenlandske film
- "Volver" (2006), "Dolor y gloria" (2019)
- Temaer: kjønn, identitet, familie

**Alejandro González Iñárritu (1963-, Mexico)**
- "Amores perros" (2000) - debut
- "Birdman" (2014), "The Revenant" (2015) - Oscar-vinnere
- Kjent for sammenvevde fortellinger`,
    },
    {
      id: 'spansk-3-5-text-5',
      type: 'text',
      content: `**Latinamerikansk film**

**Alfonso Cuarón (1961-, Mexico)**
- "Y tu mamá también" (2001)
- "Roma" (2018) - Oscar for beste regi
- Visuelt slående filmer

**Guillermo del Toro (1964-, Mexico)**
- "El laberinto del fauno" (2006)
- "La forma del agua" (2017) - Oscar for beste film
- Blander fantasy og politiske temaer

**Klassikere:**
- "El espíritu de la colmena" (Víctor Erice, 1973)
- "La historia oficial" (Luis Puenzo, 1985, Argentina)
- "Amores perros" (Alejandro González Iñárritu, 2000)`,
    },
    {
      id: 'spansk-3-5-def-1',
      type: 'definition',
      title: 'Vokabular for kunstdiskusjon',
      content: `**Nyttige begreper:**
- la obra de arte - kunstverket
- el pintor / la pintora - maleren
- el cuadro / la pintura - maleriet
- la escultura - skulpturen
- el estilo - stilen
- la técnica - teknikken
- el simbolismo - symbolikken
- la composición - komposisjonen
- el color - fargen
- la luz y la sombra - lys og skygge`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem malte "Guernica"?',
      options: [
        { id: 'a', text: 'Salvador Dalí', isCorrect: false, feedback: 'Dalí var surrealist, men malte ikke Guernica.' },
        { id: 'b', text: 'Pablo Picasso', isCorrect: true },
        { id: 'c', text: 'Francisco de Goya', isCorrect: false, feedback: 'Goya levde på 1700-1800-tallet, før borgerkrigen.' },
        { id: 'd', text: 'Diego Velázquez', isCorrect: false, feedback: 'Velázquez levde på 1600-tallet.' },
      ],
      solution: 'Pablo Picasso malte "Guernica" i 1937 som en protest mot bombingen av byen Guernica under den spanske borgerkrigen.',
    },
    {
      id: 'spansk-3-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken meksikansk kunstner er kjent for sine selvportretter?',
      options: [
        { id: 'a', text: 'Diego Rivera', isCorrect: false, feedback: 'Rivera var muralist, kjent for veggmalerier.' },
        { id: 'b', text: 'Frida Kahlo', isCorrect: true },
        { id: 'c', text: 'Fernando Botero', isCorrect: false, feedback: 'Botero er colombiansk og kjent for volumetrisk stil.' },
        { id: 'd', text: 'Joan Miró', isCorrect: false, feedback: 'Miró var spansk surrealist.' },
      ],
      solution: 'Frida Kahlo er kjent for sine mange selvportretter som utforsker identitet, smerte og meksikansk kultur.',
    },
    {
      id: 'spansk-3-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken film vant Oscar for Pedro Almodóvar?',
      options: [
        { id: 'a', text: 'Volver', isCorrect: false, feedback: 'Volver vant ikke Oscar, men fikk Penélope Cruz nominert.' },
        { id: 'b', text: 'Todo sobre mi madre', isCorrect: true },
        { id: 'c', text: 'Dolor y gloria', isCorrect: false, feedback: 'Dolor y gloria ble nominert, men vant ikke.' },
        { id: 'd', text: 'Mujeres al borde de un ataque de nervios', isCorrect: false, feedback: 'Denne ble nominert i 1988, men vant ikke.' },
      ],
      solution: '"Todo sobre mi madre" (1999) vant Oscar for beste utenlandske film i 2000.',
    },
    {
      id: 'spansk-3-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "la obra de arte" på norsk?',
      options: [
        { id: 'a', text: 'Kunstneren', isCorrect: false, feedback: 'Kunstneren er "el/la artista".' },
        { id: 'b', text: 'Kunstverket', isCorrect: true },
        { id: 'c', text: 'Galleriet', isCorrect: false, feedback: 'Galleriet er "la galería".' },
        { id: 'd', text: 'Utstillingen', isCorrect: false, feedback: 'Utstillingen er "la exposición".' },
      ],
      solution: '"La obra de arte" betyr kunstverket.',
    },
    {
      id: 'spansk-3-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken regissør laget "El laberinto del fauno"?',
      options: [
        { id: 'a', text: 'Alfonso Cuarón', isCorrect: false, feedback: 'Cuarón laget "Roma" og "Y tu mamá también".' },
        { id: 'b', text: 'Guillermo del Toro', isCorrect: true },
        { id: 'c', text: 'Alejandro González Iñárritu', isCorrect: false, feedback: 'Iñárritu laget "Birdman" og "Amores perros".' },
        { id: 'd', text: 'Pedro Almodóvar', isCorrect: false, feedback: 'Almodóvar er spansk, ikke meksikansk.' },
      ],
      solution: 'Guillermo del Toro (Mexico) regisserte "El laberinto del fauno" (2006), en film som blander fantasy med den spanske borgerkrigen.',
    },
    {
      id: 'spansk-3-5-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken kunstretning var Salvador Dalí knyttet til?',
      options: [
        { id: 'a', text: 'Kubisme', isCorrect: false, feedback: 'Kubismen er hovedsakelig forbundet med Picasso.' },
        { id: 'b', text: 'Surrealisme', isCorrect: true },
        { id: 'c', text: 'Impresjonisme', isCorrect: false, feedback: 'Impresjonismen var hovedsakelig fransk.' },
        { id: 'd', text: 'Romantikk', isCorrect: false, feedback: 'Romantikken var tidligere (1800-tallet).' },
      ],
      solution: 'Salvador Dalí var en av de fremste surrealistene, kjent for drømmeaktige og ulogiske bilder.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Política y actualidad
// ============================================================================

export const CHAPTER_SPANSK_3_6: TextbookChapter = {
  id: 'spansk-3-6',
  courseId: 'spansk-3',
  chapterNumber: '6',
  title: 'Política y actualidad',
  description: 'Lær å diskutere politikk og aktuelle saker på spansk.',
  estimatedMinutes: 80,
  competenceGoals: [
    'drøfte samfunnsmessige tema i målspråkområdet',
    'uttrykke og begrunne egne synspunkter og vurderinger',
  ],
  content: [
    {
      id: 'spansk-3-6-intro',
      type: 'text',
      content: `For å delta i samfunnsdebatten på spansk trenger vi vokabular og strukturer for å uttrykke meninger, argumentere og diskutere aktuelle saker. Dette kapitlet gir deg verktøyene du trenger.`,
    },
    {
      id: 'spansk-3-6-text-1',
      type: 'text',
      content: `**Politisk vokabular**

| Spansk | Norsk |
|--------|-------|
| el gobierno | regjeringen |
| el parlamento | parlamentet |
| las elecciones | valget |
| el partido político | det politiske partiet |
| la democracia | demokratiet |
| la dictadura | diktaturet |
| la ley | loven |
| los derechos humanos | menneskerettighetene |
| la libertad de expresión | ytringsfriheten |
| el voto | stemmen/stemmingen |`,
    },
    {
      id: 'spansk-3-6-text-2',
      type: 'text',
      content: `**Politiske retninger**

| Spansk | Norsk |
|--------|-------|
| la izquierda | venstresiden |
| la derecha | høyresiden |
| el centro | sentrum |
| conservador | konservativ |
| progresista | progressiv |
| socialista | sosialistisk |
| liberal | liberal |
| nacionalista | nasjonalistisk |
| el populismo | populismen |
| la polarización | polariseringen |`,
    },
    {
      id: 'spansk-3-6-text-3',
      type: 'text',
      content: `**Aktuelle temaer**

| Spansk | Norsk |
|--------|-------|
| el cambio climático | klimaendringene |
| la inmigración | innvandringen |
| la desigualdad | ulikheten |
| el desempleo | arbeidsledigheten |
| la sanidad pública | det offentlige helsevesenet |
| la educación | utdanningen |
| la economía | økonomien |
| la corrupción | korrupsjonen |
| los refugiados | flyktningene |
| la igualdad de género | likestilling mellom kjønnene |`,
    },
    {
      id: 'spansk-3-6-text-4',
      type: 'text',
      content: `**Uttrykke meninger**

**Introdusere synspunkt:**
- En mi opinión... (Etter min mening...)
- Creo que... (Jeg tror at...)
- Me parece que... (Det virker som om...)
- Desde mi punto de vista... (Fra mitt synspunkt...)
- Estoy convencido/a de que... (Jeg er overbevist om at...)

**Være enig/uenig:**
- Estoy de acuerdo (Jeg er enig)
- No estoy de acuerdo (Jeg er ikke enig)
- Tienes razón (Du har rett)
- Eso no es cierto (Det er ikke sant)
- Depende de... (Det kommer an på...)`,
    },
    {
      id: 'spansk-3-6-text-5',
      type: 'text',
      content: `**Argumentere og diskutere**

**Legge til argumenter:**
- Además... (Dessuten...)
- Por otro lado... (På den andre siden...)
- Asimismo... (Likeledes...)
- También es importante considerar que... (Det er også viktig å ta i betraktning at...)

**Motargumentere:**
- Sin embargo... (Imidlertid...)
- No obstante... (Likevel...)
- Aunque... (Selv om...)
- A pesar de que... (Til tross for at...)

**Konkludere:**
- En conclusión... (For å konkludere...)
- Para resumir... (For å oppsummere...)
- En definitiva... (Kort sagt...)`,
    },
    {
      id: 'spansk-3-6-example-1',
      type: 'example',
      title: 'Strukturert argumentasjon',
      content: `**Tema: El cambio climático**

"En mi opinión, el cambio climático es el mayor desafío de nuestra generación. Por un lado, las temperaturas están subiendo y los fenómenos meteorológicos extremos son cada vez más frecuentes. Por otro lado, muchos gobiernos no están tomando medidas suficientes.

Sin embargo, hay razones para el optimismo. Las energías renovables están creciendo rápidamente y la conciencia pública ha aumentado.

En conclusión, es necesario que todos los países colaboren para reducir las emisiones de CO2."`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "el gobierno"?',
      options: [
        { id: 'a', text: 'Parlamentet', isCorrect: false, feedback: 'Parlamentet er "el parlamento".' },
        { id: 'b', text: 'Regjeringen', isCorrect: true },
        { id: 'c', text: 'Valget', isCorrect: false, feedback: 'Valget er "las elecciones".' },
        { id: 'd', text: 'Loven', isCorrect: false, feedback: 'Loven er "la ley".' },
      ],
      solution: '"El gobierno" betyr regjeringen.',
    },
    {
      id: 'spansk-3-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Etter min mening" på spansk?',
      options: [
        { id: 'a', text: 'Por ejemplo', isCorrect: false, feedback: 'Det betyr "for eksempel".' },
        { id: 'b', text: 'En mi opinión', isCorrect: true },
        { id: 'c', text: 'Sin embargo', isCorrect: false, feedback: 'Det betyr "imidlertid".' },
        { id: 'd', text: 'Por otro lado', isCorrect: false, feedback: 'Det betyr "på den andre siden".' },
      ],
      solution: '"En mi opinión" betyr "Etter min mening".',
    },
    {
      id: 'spansk-3-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken frase brukes for å introdusere et motargument?',
      options: [
        { id: 'a', text: 'Además', isCorrect: false, feedback: '"Además" legger til et argument, ikke et motargument.' },
        { id: 'b', text: 'Sin embargo', isCorrect: true },
        { id: 'c', text: 'En conclusión', isCorrect: false, feedback: '"En conclusión" brukes for å avslutte.' },
        { id: 'd', text: 'Estoy de acuerdo', isCorrect: false, feedback: 'Det uttrykker enighet, ikke motargument.' },
      ],
      solution: '"Sin embargo" (imidlertid) brukes for å introdusere et motargument eller en innvending.',
    },
    {
      id: 'spansk-3-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "los derechos humanos"?',
      options: [
        { id: 'a', text: 'Menneskerettighetene', isCorrect: true },
        { id: 'b', text: 'Ytringsfriheten', isCorrect: false, feedback: 'Ytringsfriheten er "la libertad de expresión".' },
        { id: 'c', text: 'Demokratiet', isCorrect: false, feedback: 'Demokratiet er "la democracia".' },
        { id: 'd', text: 'Likestillingen', isCorrect: false, feedback: 'Likestilling er "la igualdad".' },
      ],
      solution: '"Los derechos humanos" betyr menneskerettighetene.',
    },
    {
      id: 'spansk-3-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er forskjellen mellom "además" og "sin embargo"?',
      options: [
        { id: 'a', text: 'De betyr det samme', isCorrect: false, feedback: 'De har motsatt funksjon.' },
        { id: 'b', text: '"Además" legger til, "sin embargo" kontrasterer', isCorrect: true },
        { id: 'c', text: '"Además" kontrasterer, "sin embargo" legger til', isCorrect: false, feedback: 'Dette er omvendt.' },
        { id: 'd', text: 'Begge brukes for å konkludere', isCorrect: false, feedback: 'Ingen av dem brukes for å konkludere.' },
      ],
      solution: '"Además" (dessuten) legger til informasjon, mens "sin embargo" (imidlertid) introduserer en kontrast eller motsetning.',
    },
    {
      id: 'spansk-3-6-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg er ikke enig"?',
      options: [
        { id: 'a', text: 'Estoy de acuerdo', isCorrect: false, feedback: 'Det betyr "Jeg er enig".' },
        { id: 'b', text: 'No estoy de acuerdo', isCorrect: true },
        { id: 'c', text: 'Tienes razón', isCorrect: false, feedback: 'Det betyr "Du har rett".' },
        { id: 'd', text: 'Me parece bien', isCorrect: false, feedback: 'Det betyr "Det virker bra for meg".' },
      ],
      solution: '"No estoy de acuerdo" betyr "Jeg er ikke enig".',
    },
  ],
};

// ============================================================================
// Kapittel 7: Economía y comercio
// ============================================================================

export const CHAPTER_SPANSK_3_7: TextbookChapter = {
  id: 'spansk-3-7',
  courseId: 'spansk-3',
  chapterNumber: '7',
  title: 'Economía y comercio',
  description: 'Lær økonomisk og kommersielt vokabular på spansk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'bruke målspråket i ulike situasjoner, også i arbeidslivssammenheng',
    'forstå og bruke fagterminologi innen økonomi og handel',
  ],
  content: [
    {
      id: 'spansk-3-7-intro',
      type: 'text',
      content: `I en globalisert verden er det nyttig å kunne diskutere økonomiske temaer og kommunisere i forretningskontekster på spansk. Spansk er et viktig forretningsspråk, spesielt i Latin-Amerika.`,
    },
    {
      id: 'spansk-3-7-text-1',
      type: 'text',
      content: `**Grunnleggende økonomisk vokabular**

| Spansk | Norsk |
|--------|-------|
| la economía | økonomien |
| el mercado | markedet |
| la empresa | bedriften |
| el negocio | forretningen |
| el comercio | handelen |
| la inversión | investeringen |
| el presupuesto | budsjettet |
| los ingresos | inntektene |
| los gastos | utgiftene |
| las ganancias | fortjenesten |
| las pérdidas | tapene |`,
    },
    {
      id: 'spansk-3-7-text-2',
      type: 'text',
      content: `**Finansielle begreper**

| Spansk | Norsk |
|--------|-------|
| el banco | banken |
| la cuenta bancaria | bankkontoen |
| el préstamo | lånet |
| la hipoteca | boliglånet |
| los intereses | rentene |
| la inflación | inflasjonen |
| el PIB (Producto Interior Bruto) | BNP |
| la deuda | gjelden |
| las acciones | aksjene |
| la bolsa | børsen |`,
    },
    {
      id: 'spansk-3-7-text-3',
      type: 'text',
      content: `**Arbeidslivet**

| Spansk | Norsk |
|--------|-------|
| el empleado / la empleada | den ansatte |
| el jefe / la jefa | sjefen |
| el sueldo / el salario | lønnen |
| el contrato | kontrakten |
| la entrevista de trabajo | jobbintervjuet |
| el currículum vitae (CV) | CVen |
| despedir | å si opp (arbeidsgiver) |
| dimitir | å si opp (arbeidstaker) |
| el sindicato | fagforeningen |
| la huelga | streiken |`,
    },
    {
      id: 'spansk-3-7-text-4',
      type: 'text',
      content: `**Handel og import/eksport**

| Spansk | Norsk |
|--------|-------|
| importar | å importere |
| exportar | å eksportere |
| el proveedor | leverandøren |
| el cliente | kunden |
| el pedido | bestillingen |
| la factura | fakturaen |
| el envío | forsendelsen |
| la aduana | tollen |
| el arancel | tollsatsen |
| el tratado de libre comercio | frihandelsavtalen |`,
    },
    {
      id: 'spansk-3-7-text-5',
      type: 'text',
      content: `**Formelle forretningsuttrykk**

**I e-poster og brev:**
- Estimado/a señor/a... (Kjære herr/fru...)
- En respuesta a su carta/correo... (Som svar på Deres brev/e-post...)
- Adjunto encontrará... (Vedlagt finner De...)
- Quedamos a su disposición (Vi står til Deres disposisjon)
- Atentamente (Med vennlig hilsen)
- Reciba un cordial saludo (Motta en hjertelig hilsen)

**I møter:**
- Pasamos al siguiente punto (Vi går til neste punkt)
- ¿Tienen alguna pregunta? (Har dere noen spørsmål?)
- Resumiendo... (For å oppsummere...)`,
    },
    {
      id: 'spansk-3-7-example-1',
      type: 'example',
      title: 'Forretnings-e-post',
      content: `**Asunto: Pedido nº 4521**

Estimada señora Martínez:

En respuesta a su correo del 15 de marzo, le confirmo que su pedido ha sido enviado hoy.

Adjunto encontrará la factura correspondiente. El plazo de pago es de 30 días.

Si tiene alguna pregunta, no dude en contactarnos.

Atentamente,
Carlos García
Departamento de Ventas`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "la empresa"?',
      options: [
        { id: 'a', text: 'Markedet', isCorrect: false, feedback: 'Markedet er "el mercado".' },
        { id: 'b', text: 'Bedriften', isCorrect: true },
        { id: 'c', text: 'Handelen', isCorrect: false, feedback: 'Handelen er "el comercio".' },
        { id: 'd', text: 'Budsjettet', isCorrect: false, feedback: 'Budsjettet er "el presupuesto".' },
      ],
      solution: '"La empresa" betyr bedriften eller firmaet.',
    },
    {
      id: 'spansk-3-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "el sueldo"?',
      options: [
        { id: 'a', text: 'Kontrakten', isCorrect: false, feedback: 'Kontrakten er "el contrato".' },
        { id: 'b', text: 'Lønnen', isCorrect: true },
        { id: 'c', text: 'Intervjuet', isCorrect: false, feedback: 'Intervjuet er "la entrevista".' },
        { id: 'd', text: 'Streiken', isCorrect: false, feedback: 'Streiken er "la huelga".' },
      ],
      solution: '"El sueldo" (eller "el salario") betyr lønnen.',
    },
    {
      id: 'spansk-3-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er forskjellen mellom "despedir" og "dimitir"?',
      options: [
        { id: 'a', text: 'De betyr det samme', isCorrect: false, feedback: 'De har forskjellig betydning.' },
        { id: 'b', text: '"Despedir" er når arbeidsgiver sier opp, "dimitir" når arbeidstaker sier opp', isCorrect: true },
        { id: 'c', text: '"Dimitir" er når arbeidsgiver sier opp, "despedir" når arbeidstaker sier opp', isCorrect: false, feedback: 'Dette er omvendt.' },
        { id: 'd', text: '"Despedir" betyr å ansette', isCorrect: false, feedback: 'Å ansette er "contratar".' },
      ],
      solution: '"Despedir" = å si opp (arbeidsgiver sier opp ansatt), "dimitir" = å si opp selv (arbeidstaker slutter).',
    },
    {
      id: 'spansk-3-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan avslutter du en formell forretnings-e-post?',
      options: [
        { id: 'a', text: '¡Hasta luego!', isCorrect: false, feedback: 'Det er for uformelt for forretningskorrespondanse.' },
        { id: 'b', text: 'Atentamente', isCorrect: true },
        { id: 'c', text: 'Chao', isCorrect: false, feedback: 'Det er altfor uformelt.' },
        { id: 'd', text: 'Besos', isCorrect: false, feedback: 'Det er kun for venner og familie.' },
      ],
      solution: '"Atentamente" (Med vennlig hilsen) er standard avslutning i formell korrespondanse.',
    },
    {
      id: 'spansk-3-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "la bolsa" i økonomisk sammenheng?',
      options: [
        { id: 'a', text: 'Posen/vesken', isCorrect: false, feedback: 'Det er den vanlige betydningen, men ikke i økonomisk kontekst.' },
        { id: 'b', text: 'Børsen', isCorrect: true },
        { id: 'c', text: 'Banken', isCorrect: false, feedback: 'Banken er "el banco".' },
        { id: 'd', text: 'Kontoen', isCorrect: false, feedback: 'Kontoen er "la cuenta".' },
      ],
      solution: '"La bolsa" betyr børsen i økonomisk sammenheng (f.eks. "la Bolsa de Madrid").',
    },
    {
      id: 'spansk-3-7-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Adjunto encontrará..."?',
      options: [
        { id: 'a', text: 'Jeg håper du finner...', isCorrect: false, feedback: 'Setningen er mer formell.' },
        { id: 'b', text: 'Vedlagt finner De...', isCorrect: true },
        { id: 'c', text: 'Vennligst finn...', isCorrect: false, feedback: 'Det er ikke en befaling.' },
        { id: 'd', text: 'Jeg finner vedlagt...', isCorrect: false, feedback: 'Subjektet er mottakeren, ikke avsenderen.' },
      ],
      solution: '"Adjunto encontrará..." er en formell frase som betyr "Vedlagt finner De..."',
    },
  ],
};

// ============================================================================
// Kapittel 8: Viajes y turismo
// ============================================================================

export const CHAPTER_SPANSK_3_8: TextbookChapter = {
  id: 'spansk-3-8',
  courseId: 'spansk-3',
  chapterNumber: '8',
  title: 'Viajes y turismo',
  description: 'Avansert vokabular og uttrykk for reise og turisme.',
  estimatedMinutes: 65,
  competenceGoals: [
    'kommunisere flytende i ulike reise- og turistsituasjoner',
    'beskrive og sammenligne reisemål i målspråkområdet',
  ],
  content: [
    {
      id: 'spansk-3-8-intro',
      type: 'text',
      content: `På nivå 3 skal vi utvide reisevokabularet til å inkludere mer komplekse situasjoner som å håndtere problemer, diskutere bærekraftig turisme og beskrive reiseopplevelser nyansert.`,
    },
    {
      id: 'spansk-3-8-text-1',
      type: 'text',
      content: `**Planlegging og bestilling**

| Spansk | Norsk |
|--------|-------|
| reservar | å reservere |
| la reserva | reservasjonen |
| cancelar | å avbestille |
| el reembolso | refusjonen |
| el seguro de viaje | reiseforsikringen |
| el visado | visumet |
| los requisitos | kravene |
| el itinerario | reiseruten |
| el presupuesto | budsjettet |
| el alojamiento | overnattingen |`,
    },
    {
      id: 'spansk-3-8-text-2',
      type: 'text',
      content: `**Problemer og klager**

| Spansk | Norsk |
|--------|-------|
| el retraso | forsinkelsen |
| la cancelación | kanselleringen |
| el overbooking | overbooking |
| perder el vuelo | å miste flyet |
| extraviar el equipaje | å miste bagasjen |
| la reclamación | klagen |
| el formulario de reclamación | klageskjemaet |
| exigir | å kreve |
| indemnización | erstatning |
| el libro de reclamaciones | klageboken |`,
    },
    {
      id: 'spansk-3-8-text-3',
      type: 'text',
      content: `**Turisme og bærekraft**

| Spansk | Norsk |
|--------|-------|
| el turismo sostenible | bærekraftig turisme |
| el ecoturismo | økoturisme |
| el turismo rural | bygdeturisme |
| el turismo de masas | masseturisme |
| la huella de carbono | karbonfotavtrykket |
| el impacto ambiental | miljøpåvirkningen |
| preservar | å bevare |
| la comunidad local | lokalsamfunnet |
| el patrimonio cultural | kulturarven |
| la gentrificación | gentrifisering |`,
    },
    {
      id: 'spansk-3-8-text-4',
      type: 'text',
      content: `**Beskrive reiseopplevelser**

**Positive opplevelser:**
- Fue una experiencia inolvidable (Det var en uforglemmelig opplevelse)
- Me impresionó mucho... (Jeg ble veldig imponert av...)
- Lo que más me gustó fue... (Det jeg likte best var...)
- Superó todas mis expectativas (Det overgikk alle mine forventninger)

**Negative opplevelser:**
- Dejó mucho que desear (Det lot mye tilbake å ønske)
- No cumplió con las expectativas (Det innfridde ikke forventningene)
- Fue decepcionante (Det var skuffende)
- No lo recomendaría (Jeg ville ikke anbefale det)`,
    },
    {
      id: 'spansk-3-8-text-5',
      type: 'text',
      content: `**Reisemål i den spansktalende verden**

**Spania:**
- Barcelona: la Sagrada Familia, las Ramblas
- Madrid: el Museo del Prado, el Parque del Retiro
- Sevilla: la Giralda, el Real Alcázar
- Granada: la Alhambra

**Latin-Amerika:**
- México: las pirámides de Teotihuacán, Chichén Itzá
- Perú: Machu Picchu, el Valle Sagrado
- Argentina: las Cataratas del Iguazú, Buenos Aires
- Cuba: La Habana Vieja, el Malecón`,
    },
    {
      id: 'spansk-3-8-example-1',
      type: 'example',
      title: 'Klage på hotell',
      content: `"Buenos días. Tengo una reclamación que hacer. Reservé una habitación con vistas al mar, pero me han dado una que da al aparcamiento. Además, el aire acondicionado no funciona y hay mucho ruido por las noches.

Exijo que me cambien a la habitación que reservé o, en su defecto, un reembolso parcial. Quisiera hablar con el encargado, por favor."`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "el retraso"?',
      options: [
        { id: 'a', text: 'Kanselleringen', isCorrect: false, feedback: 'Kanselleringen er "la cancelación".' },
        { id: 'b', text: 'Forsinkelsen', isCorrect: true },
        { id: 'c', text: 'Reservasjonen', isCorrect: false, feedback: 'Reservasjonen er "la reserva".' },
        { id: 'd', text: 'Refusjonen', isCorrect: false, feedback: 'Refusjonen er "el reembolso".' },
      ],
      solution: '"El retraso" betyr forsinkelsen.',
    },
    {
      id: 'spansk-3-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "å miste bagasjen"?',
      options: [
        { id: 'a', text: 'Perder el vuelo', isCorrect: false, feedback: 'Det betyr "å miste flyet".' },
        { id: 'b', text: 'Extraviar el equipaje', isCorrect: true },
        { id: 'c', text: 'Cancelar la reserva', isCorrect: false, feedback: 'Det betyr "å avbestille reservasjonen".' },
        { id: 'd', text: 'Retrasar el vuelo', isCorrect: false, feedback: 'Det betyr "å forsinke flyet".' },
      ],
      solution: '"Extraviar el equipaje" betyr å miste bagasjen.',
    },
    {
      id: 'spansk-3-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er "el turismo sostenible"?',
      options: [
        { id: 'a', text: 'Masseturisme', isCorrect: false, feedback: 'Masseturisme er "el turismo de masas".' },
        { id: 'b', text: 'Bærekraftig turisme', isCorrect: true },
        { id: 'c', text: 'Bygdeturisme', isCorrect: false, feedback: 'Bygdeturisme er "el turismo rural".' },
        { id: 'd', text: 'Luksusturisme', isCorrect: false, feedback: 'Luksusturisme er "el turismo de lujo".' },
      ],
      solution: '"El turismo sostenible" betyr bærekraftig turisme.',
    },
    {
      id: 'spansk-3-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan uttrykker du at noe overgikk forventningene?',
      options: [
        { id: 'a', text: 'Fue decepcionante', isCorrect: false, feedback: 'Det betyr "det var skuffende".' },
        { id: 'b', text: 'Superó todas mis expectativas', isCorrect: true },
        { id: 'c', text: 'Dejó mucho que desear', isCorrect: false, feedback: 'Det betyr "det lot mye tilbake å ønske".' },
        { id: 'd', text: 'No lo recomendaría', isCorrect: false, feedback: 'Det betyr "jeg ville ikke anbefale det".' },
      ],
      solution: '"Superó todas mis expectativas" betyr "Det overgikk alle mine forventninger".',
    },
    {
      id: 'spansk-3-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvor finner man Machu Picchu?',
      options: [
        { id: 'a', text: 'México', isCorrect: false, feedback: 'I Mexico finner man Chichén Itzá og Teotihuacán.' },
        { id: 'b', text: 'Perú', isCorrect: true },
        { id: 'c', text: 'Argentina', isCorrect: false, feedback: 'I Argentina finner man Iguazú-fossene.' },
        { id: 'd', text: 'España', isCorrect: false, feedback: 'Machu Picchu er i Latin-Amerika, ikke Spania.' },
      ],
      solution: 'Machu Picchu, den berømte inkaruinen, ligger i Peru.',
    },
    {
      id: 'spansk-3-8-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "la huella de carbono"?',
      options: [
        { id: 'a', text: 'Kulturarven', isCorrect: false, feedback: 'Kulturarven er "el patrimonio cultural".' },
        { id: 'b', text: 'Karbonfotavtrykket', isCorrect: true },
        { id: 'c', text: 'Miljøpåvirkningen', isCorrect: false, feedback: 'Miljøpåvirkningen er "el impacto ambiental".' },
        { id: 'd', text: 'Lokalsamfunnet', isCorrect: false, feedback: 'Lokalsamfunnet er "la comunidad local".' },
      ],
      solution: '"La huella de carbono" betyr karbonfotavtrykket.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Identidad cultural
// ============================================================================

export const CHAPTER_SPANSK_3_9: TextbookChapter = {
  id: 'spansk-3-9',
  courseId: 'spansk-3',
  chapterNumber: '9',
  title: 'Identidad cultural',
  description: 'Utforsk kulturell identitet og mangfold i den spansktalende verden.',
  estimatedMinutes: 75,
  competenceGoals: [
    'reflektere over kulturell identitet i målspråkområdet',
    'sammenligne kulturelle uttrykk og tradisjoner',
  ],
  content: [
    {
      id: 'spansk-3-9-intro',
      type: 'text',
      content: `Kulturell identitet er kompleks og mangfoldig i den spansktalende verden. Fra Spanias regionale kulturer til Latin-Amerikas blanding av urfolks-, europeiske og afrikanske tradisjoner, skal vi utforske hva som former identitet.`,
    },
    {
      id: 'spansk-3-9-text-1',
      type: 'text',
      content: `**Begreper om identitet**

| Spansk | Norsk |
|--------|-------|
| la identidad | identiteten |
| la cultura | kulturen |
| las raíces | røttene |
| la herencia | arven |
| la tradición | tradisjonen |
| las costumbres | skikkene |
| la diversidad | mangfoldet |
| el mestizaje | raseblandingen |
| los pueblos indígenas | urfolkene |
| la lengua materna | morsmålet |`,
    },
    {
      id: 'spansk-3-9-text-2',
      type: 'text',
      content: `**Spanias regionale identiteter**

Spania har sterke regionale identiteter med egne språk og kulturer:

**Cataluña**
- Språk: katalansk (català)
- Hovedstad: Barcelona
- Tradisjon: Castells (menneskepyramider)

**País Vasco (Euskadi)**
- Språk: baskisk (euskera)
- Unikt språk uten kjent slektskap
- Sterk autonomibevegelse

**Galicia**
- Språk: galisisk (gallego)
- Keltisk kulturarv
- Pilegrimsmål: Santiago de Compostela`,
    },
    {
      id: 'spansk-3-9-text-3',
      type: 'text',
      content: `**Latinamerikansk identitet**

**El mestizaje**
Begrepet beskriver blandingen av urfolks-, europeiske og afrikanske kulturer som har formet Latin-Amerika.

**Indigenismo**
Bevegelse som verdsetter og bevarer urfolkskulturer:
- Quechua og aymara i Andes
- Maya-kulturen i Mellom-Amerika
- Mapuche i Chile

**La negritud**
Afro-latinamerikansk identitet, spesielt sterk i:
- Cuba, Puerto Rico (afro-karibisk)
- Colombia, Venezuela (kyst)
- Brasil (portugisiskspråklig)`,
    },
    {
      id: 'spansk-3-9-text-4',
      type: 'text',
      content: `**Tradisjoner og fester**

| Fest | Land | Beskrivelse |
|------|------|-------------|
| Día de los Muertos | México | Feiring av de døde (1.-2. november) |
| La Tomatina | España | Tomatfestival i Buñol |
| Los Sanfermines | España | Okseløp i Pamplona |
| Carnaval | Flere land | Spesielt kjent i Cádiz og Río |
| Semana Santa | Flere land | Påskeprosessjoner |
| Inti Raymi | Perú | Inkafestival for solguden |`,
    },
    {
      id: 'spansk-3-9-text-5',
      type: 'text',
      content: `**Diskutere identitet**

**Uttrykke tilhørighet:**
- Me siento orgulloso/a de... (Jeg føler meg stolt av...)
- Mis raíces son... (Røttene mine er...)
- Formo parte de... (Jeg er en del av...)
- Me identifico con... (Jeg identifiserer meg med...)

**Snakke om kulturmøter:**
- La convivencia entre culturas... (Sameksistensen mellom kulturer...)
- El intercambio cultural... (Kulturutvekslingen...)
- La integración... (Integreringen...)
- El choque cultural... (Kultursjokket...)`,
    },
    {
      id: 'spansk-3-9-def-1',
      type: 'definition',
      title: 'El mestizaje',
      content: `"El mestizaje" refererer til den kulturelle og biologiske blandingen som oppsto i Latin-Amerika etter den spanske erobringen. Dette inkluderer blanding av urfolk (indígenas), europeere (principalmente españoles) og afrikanere (traídos como esclavos). Begrepet brukes både positivt (som symbol på mangfold) og kritisk (for å skjule ulikheter og rasisme).`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-9-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "las raíces"?',
      options: [
        { id: 'a', text: 'Tradisjonene', isCorrect: false, feedback: 'Tradisjonene er "las tradiciones".' },
        { id: 'b', text: 'Røttene', isCorrect: true },
        { id: 'c', text: 'Skikkene', isCorrect: false, feedback: 'Skikkene er "las costumbres".' },
        { id: 'd', text: 'Arven', isCorrect: false, feedback: 'Arven er "la herencia".' },
      ],
      solution: '"Las raíces" betyr røttene, ofte brukt om kulturelle eller familiemessige røtter.',
    },
    {
      id: 'spansk-3-9-ex-2',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket språk snakkes i País Vasco?',
      options: [
        { id: 'a', text: 'Katalansk', isCorrect: false, feedback: 'Katalansk snakkes i Cataluña.' },
        { id: 'b', text: 'Baskisk (euskera)', isCorrect: true },
        { id: 'c', text: 'Galisisk', isCorrect: false, feedback: 'Galisisk snakkes i Galicia.' },
        { id: 'd', text: 'Aragonesisk', isCorrect: false, feedback: 'Aragonesisk snakkes i Aragón, men er mindre utbredt.' },
      ],
      solution: 'Baskisk (euskera) er et unikt språk som snakkes i País Vasco, uten kjent slektskap til andre språk.',
    },
    {
      id: 'spansk-3-9-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "El Día de los Muertos"?',
      options: [
        { id: 'a', text: 'Halloween', isCorrect: false, feedback: 'Det er en distinkt meksikansk tradisjon.' },
        { id: 'b', text: 'Meksikansk feiring av de døde', isCorrect: true },
        { id: 'c', text: 'Påskefeiring', isCorrect: false, feedback: 'Påske er "Semana Santa".' },
        { id: 'd', text: 'Nyttårsfest', isCorrect: false, feedback: 'Nyttår feires annerledes.' },
      ],
      solution: '"El Día de los Muertos" er en meksikansk tradisjon der man minnes og feirer avdøde familiemedlemmer 1.-2. november.',
    },
    {
      id: 'spansk-3-9-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva beskriver begrepet "el mestizaje"?',
      options: [
        { id: 'a', text: 'Spansk kolonisering', isCorrect: false, feedback: 'Det er et resultat av koloniseringen, men ikke selve begrepet.' },
        { id: 'b', text: 'Kulturell og biologisk blanding i Latin-Amerika', isCorrect: true },
        { id: 'c', text: 'Urfolkskultur', isCorrect: false, feedback: 'Det handler om blanding, ikke kun urfolkskultur.' },
        { id: 'd', text: 'Afrikansk kulturarv', isCorrect: false, feedback: 'Det inkluderer afrikansk arv, men er bredere.' },
      ],
      solution: '"El mestizaje" beskriver blandingen av urfolks-, europeiske og afrikanske kulturer i Latin-Amerika.',
    },
    {
      id: 'spansk-3-9-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "Jeg føler meg stolt av..."?',
      options: [
        { id: 'a', text: 'Me identifico con...', isCorrect: false, feedback: 'Det betyr "Jeg identifiserer meg med...".' },
        { id: 'b', text: 'Me siento orgulloso/a de...', isCorrect: true },
        { id: 'c', text: 'Formo parte de...', isCorrect: false, feedback: 'Det betyr "Jeg er en del av...".' },
        { id: 'd', text: 'Mis raíces son...', isCorrect: false, feedback: 'Det betyr "Røttene mine er...".' },
      ],
      solution: '"Me siento orgulloso/a de..." betyr "Jeg føler meg stolt av...".',
    },
    {
      id: 'spansk-3-9-ex-6',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken region i Spania har keltisk kulturarv?',
      options: [
        { id: 'a', text: 'Cataluña', isCorrect: false, feedback: 'Cataluña har ikke spesielt keltisk arv.' },
        { id: 'b', text: 'Galicia', isCorrect: true },
        { id: 'c', text: 'Andalucía', isCorrect: false, feedback: 'Andalucía har sterk maurisk arv.' },
        { id: 'd', text: 'Castilla', isCorrect: false, feedback: 'Castilla er sentral for spansk identitet, men ikke keltisk.' },
      ],
      solution: 'Galicia i nordvest-Spania har keltisk kulturarv, synlig i musikk, fester og stedsnavn.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Preparación para examen
// ============================================================================

export const CHAPTER_SPANSK_3_10: TextbookChapter = {
  id: 'spansk-3-10',
  courseId: 'spansk-3',
  chapterNumber: '10',
  title: 'Preparación para examen',
  description: 'Strategier og øvelser for eksamensforberedelse i spansk nivå 3.',
  estimatedMinutes: 90,
  competenceGoals: [
    'vise samlet kompetanse i spansk på nivå 3',
    'anvende språket i varierte skriftlige og muntlige oppgaver',
  ],
  content: [
    {
      id: 'spansk-3-10-intro',
      type: 'text',
      content: `Dette kapittelet hjelper deg å forberede deg til eksamen i spansk nivå 3. Vi gjennomgår viktige grammatiske strukturer, gir skrivetips og øver på typiske eksamensoppgaver.`,
    },
    {
      id: 'spansk-3-10-text-1',
      type: 'text',
      content: `**Grammatiske strukturer å mestre**

**1. Konjunktiv (el subjuntivo)**
- Presens konjunktiv etter ønsker, følelser, tvil
- Imperfektum konjunktiv i betingelsessetninger
- Perfektum konjunktiv for fullførte handlinger

**2. Sammensatte tider**
- Pretérito perfecto: He estudiado
- Pluscuamperfecto: Había estudiado
- Futuro perfecto: Habré estudiado
- Condicional perfecto: Habría estudiado

**3. Indirekte tale**
- Tidsforskyvning
- Pronomen- og adverbendringer`,
    },
    {
      id: 'spansk-3-10-text-2',
      type: 'text',
      content: `**Skriftlige oppgavetyper**

**1. Argumenterende tekst (Texto argumentativo)**
- Innledning med presentasjon av tema
- Argumenter for og mot
- Bruk av konnektorer
- Konklusjon med din mening

**2. Formelt brev/e-post**
- Korrekt hilsen og avslutning
- Høflig tone
- Tydelig formål

**3. Fortellende tekst (Texto narrativo)**
- Bruk av fortidsformer (imperfektum vs. preteritum)
- Beskrivelser og handling
- Tidsmarkører`,
    },
    {
      id: 'spansk-3-10-text-3',
      type: 'text',
      content: `**Viktige konnektorer**

| Type | Eksempler |
|------|-----------|
| Addisjon | además, también, asimismo, por otro lado |
| Kontrast | sin embargo, no obstante, aunque, pero |
| Årsak | porque, ya que, debido a que, puesto que |
| Konsekvens | por lo tanto, así que, por eso, en consecuencia |
| Eksempel | por ejemplo, como, tal como |
| Konklusjon | en conclusión, para resumir, en definitiva |
| Tid | primero, luego, después, finalmente |`,
    },
    {
      id: 'spansk-3-10-text-4',
      type: 'text',
      content: `**Muntlige oppgaver - Strategier**

**Presentasjon:**
- Start med en klar introduksjon
- Strukturer innholdet logisk
- Bruk variert vokabular
- Avslutt med en oppsummering

**Samtale:**
- Lytt aktivt og responder relevant
- Still oppfølgingsspørsmål
- Uttrykk meninger og begrunn dem
- Bruk høflighetsfraser

**Bildetolkning:**
- Beskriv hva du ser
- Spekuler om kontekst
- Koble til egne erfaringer eller kunnskaper`,
    },
    {
      id: 'spansk-3-10-example-1',
      type: 'example',
      title: 'Eksempel på argumenterende tekst',
      content: `**Tema: Las redes sociales - ¿beneficio o perjuicio?**

Las redes sociales se han convertido en una parte fundamental de nuestra vida cotidiana. Sin embargo, existe un debate sobre si son beneficiosas o perjudiciales.

Por un lado, las redes sociales facilitan la comunicación con personas de todo el mundo. Además, permiten acceder a información de manera rápida y gratuita. También son una herramienta útil para movimientos sociales.

Por otro lado, pueden generar adicción y afectar la salud mental. Asimismo, la privacidad está en riesgo y hay mucha desinformación.

En mi opinión, las redes sociales son útiles si se usan con moderación. Es importante ser crítico con la información y proteger nuestra privacidad.

En conclusión, las redes sociales tienen ventajas y desventajas. Lo fundamental es usarlas de manera responsable.`,
    },
    {
      id: 'spansk-3-10-tip-1',
      type: 'tip',
      title: 'Generelle eksamenstips',
      content: `1. Les oppgaven nøye før du begynner
2. Planlegg strukturen før du skriver
3. Bruk variert vokabular og grammatikk
4. Sjekk kjønn og tall på substantiver
5. Kontroller verbbøyningen
6. Les gjennom og rett feil til slutt
7. Hold deg innenfor ordgrensen`,
    },
  ],
  exercises: [
    {
      id: 'spansk-3-10-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken konnektor brukes for å introdusere en kontrast?',
      options: [
        { id: 'a', text: 'Además', isCorrect: false, feedback: '"Además" legger til informasjon.' },
        { id: 'b', text: 'Sin embargo', isCorrect: true },
        { id: 'c', text: 'Por lo tanto', isCorrect: false, feedback: '"Por lo tanto" introduserer en konsekvens.' },
        { id: 'd', text: 'Porque', isCorrect: false, feedback: '"Porque" introduserer en årsak.' },
      ],
      solution: '"Sin embargo" (imidlertid) brukes for å introdusere en kontrast eller motsetning.',
    },
    {
      id: 'spansk-3-10-ex-2',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "Si _____ más tiempo, habría terminado el proyecto."',
      options: [
        { id: 'a', text: 'tengo', isCorrect: false, feedback: 'Presens passer ikke i denne irreale strukturen.' },
        { id: 'b', text: 'hubiera tenido', isCorrect: true },
        { id: 'c', text: 'tendré', isCorrect: false, feedback: 'Futurum brukes aldri etter "si".' },
        { id: 'd', text: 'había tenido', isCorrect: false, feedback: 'Etter "si" i irreale setninger bruker vi konjunktiv.' },
      ],
      solution: 'Irreal betingelse i fortid: Si + pluskvamperfektum konjunktiv, + kondisjonalis perfektum.',
    },
    {
      id: 'spansk-3-10-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er den beste rekkefølgen for en argumenterende tekst?',
      options: [
        { id: 'a', text: 'Argumenter, innledning, konklusjon', isCorrect: false, feedback: 'Innledningen bør komme først.' },
        { id: 'b', text: 'Innledning, argumenter, konklusjon', isCorrect: true },
        { id: 'c', text: 'Konklusjon, argumenter, innledning', isCorrect: false, feedback: 'Konklusjonen bør komme til slutt.' },
        { id: 'd', text: 'Argumenter, konklusjon, innledning', isCorrect: false, feedback: 'Dette er ulogisk rekkefølge.' },
      ],
      solution: 'En argumenterende tekst følger strukturen: innledning (presentasjon av tema), argumenter (for og mot), konklusjon.',
    },
    {
      id: 'spansk-3-10-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Gjør om til indirekte tale: Juan dijo: "Vendré mañana."',
      options: [
        { id: 'a', text: 'Juan dijo que vendría mañana', isCorrect: false, feedback: '"Mañana" må også endres.' },
        { id: 'b', text: 'Juan dijo que vendría al día siguiente', isCorrect: true },
        { id: 'c', text: 'Juan dijo que viene mañana', isCorrect: false, feedback: 'Verbtiden må endres.' },
        { id: 'd', text: 'Juan dijo que vendrá al día siguiente', isCorrect: false, feedback: 'Futurum må bli kondisjonalis.' },
      ],
      solution: 'Futurum "vendré" → kondisjonalis "vendría", "mañana" → "al día siguiente".',
    },
    {
      id: 'spansk-3-10-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken frase brukes for å konkludere en tekst?',
      options: [
        { id: 'a', text: 'Por ejemplo', isCorrect: false, feedback: 'Det brukes for å gi eksempler.' },
        { id: 'b', text: 'En conclusión', isCorrect: true },
        { id: 'c', text: 'Sin embargo', isCorrect: false, feedback: 'Det brukes for kontrast.' },
        { id: 'd', text: 'Además', isCorrect: false, feedback: 'Det brukes for å legge til informasjon.' },
      ],
      solution: '"En conclusión" (for å konkludere) brukes for å avslutte en tekst med en oppsummering.',
    },
    {
      id: 'spansk-3-10-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "Es importante que todos _____ la importancia del medio ambiente."',
      options: [
        { id: 'a', text: 'comprenden', isCorrect: false, feedback: 'Etter "es importante que" må vi bruke konjunktiv.' },
        { id: 'b', text: 'comprendan', isCorrect: true },
        { id: 'c', text: 'comprendieron', isCorrect: false, feedback: 'Preteritum er feil her.' },
        { id: 'd', text: 'comprenderán', isCorrect: false, feedback: 'Futurum brukes ikke etter upersonlige uttrykk med "que".' },
      ],
      solution: '"Es importante que" er et upersonlig uttrykk som krever konjunktiv. "Comprendan" er presens konjunktiv.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SPANSK_3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SPANSK_3_1,
  CHAPTER_SPANSK_3_2,
  CHAPTER_SPANSK_3_3,
  CHAPTER_SPANSK_3_4,
  CHAPTER_SPANSK_3_5,
  CHAPTER_SPANSK_3_6,
  CHAPTER_SPANSK_3_7,
  CHAPTER_SPANSK_3_8,
  CHAPTER_SPANSK_3_9,
  CHAPTER_SPANSK_3_10,
];
