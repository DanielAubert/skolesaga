/* eslint-disable */
// @ts-nocheck
/**
 * Spansk nivå 2 - Kapittel 4-6 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 4: PRONOMBRES Y REFERENCIAS (4.1-4.4)
 * - Kapittel 5: LITERATURA HISPANOHABLANTE (5.1-5.4)
 * - Kapittel 6: CULTURA Y SOCIEDAD (6.1-6.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4: PRONOMBRES Y REFERENCIAS
// ============================================================================

// 4.1 Pronombres de objeto directo
export const CHAPTER_SPANSK_2_4_1: TextbookChapter = {
  id: 'spansk-2-4-1',
  courseId: 'spansk-2',
  chapterNumber: '4.1',
  title: 'Pronombres de objeto directo',
  subtitle: 'Direkte objektspronomen',
  description: 'Lær å bruke direkte objektspronomen (me, te, lo, la, nos, los, las).',
  estimatedMinutes: 45,
  competenceGoals: ['bruke direkte objektspronomen', 'forenkle setninger med pronomen'],
  content: [
    { id: 'spansk-2-4-1-intro', type: 'text', content: `## Pronombres de objeto directo

Direkte objektspronomen erstatter substantiv som er direkte objekt i setningen. De plasseres **foran** det konjugerte verbet.` },
    { id: 'spansk-2-4-1-def-1', type: 'definition', title: 'Direkte objektspronomen', content: `**Direkte objektspronomen** erstatter det direkte objektet i setningen.

| Person | Pronomen | Eksempel |
|--------|----------|----------|
| yo | me | Me conoce. (Han kjenner meg.) |
| tú | te | Te veo. (Jeg ser deg.) |
| él | lo | Lo compro. (Jeg kjøper den.) |
| ella | la | La quiero. (Jeg elsker henne.) |
| nosotros | nos | Nos invitan. (De inviterer oss.) |
| ellos | los | Los necesito. (Jeg trenger dem.) |
| ellas | las | Las busco. (Jeg leter etter dem.) |

**Plassering:** Foran konjugert verb. Bak infinitiv/gerundium.` },
    { id: 'spansk-2-4-1-text-1', type: 'text', content: `## Plassering av pronomen

**Foran konjugert verb:**
- *¿Ves el libro?* → *Sí, **lo** veo.* (Ja, jeg ser den.)
- *¿Conoces a María?* → *Sí, **la** conozco.* (Ja, jeg kjenner henne.)

**Bak infinitiv (festet):**
- *Voy a comprar**lo**.* (Jeg skal kjøpe den.)
- *Quiero ver**la**.* (Jeg vil se henne.)

**Begge er mulige:**
- *Lo voy a comprar.* = *Voy a comprarlo.*` },
    { id: 'spansk-2-4-1-text-2', type: 'text', content: `## Personlig a

Husk at når det direkte objektet er en person, brukes **a**:
- *Veo **a** María.* → *La veo.*
- *Conozco **a** tu hermano.* → *Lo conozco.*` },
    { id: 'spansk-2-4-1-example-1', type: 'example', title: 'Eksempel: Erstatt med pronomen', problem: `¿Ves el libro? → Sí, ___ veo.`, solution: `Sí, **lo** veo. (el libro = hankjønn entall → lo)` },
    { id: 'spansk-2-4-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-4-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Erstatt det direkte objektet med pronomen:', subTasks: [
        { label: 'a', task: '¿Lees el periódico? Sí, ___ leo.', solution: 'lo', answer: 'lo' },
        { label: 'b', task: '¿Ves a María? Sí, ___ veo.', solution: 'la', answer: 'la' },
        { label: 'c', task: '¿Compras las flores? Sí, ___ compro.', solution: 'las', answer: 'las' },
        { label: 'd', task: '¿Conoces a mis padres? Sí, ___ conozco.', solution: 'los', answer: 'los' },
      ], solution: 'a) lo, b) la, c) las, d) los', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-4-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Velg riktig pronomen (lo/la/los/las):', subTasks: [
        { label: 'a', task: '___ libro → ___', solution: 'lo', answer: 'lo' },
        { label: 'b', task: '___ mesa → ___', solution: 'la', answer: 'la' },
        { label: 'c', task: '___ coches → ___', solution: 'los', answer: 'los' },
        { label: 'd', task: '___ casas → ___', solution: 'las', answer: 'las' },
      ], solution: 'a) lo, b) la, c) los, d) las', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-1-example-2', type: 'example', title: 'Eksempel: Plassering', problem: `Quiero comprar la casa. (to måter)`, solution: `**La** quiero comprar. / Quiero comprar**la**.` },
    { id: 'spansk-2-4-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-4-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv om med pronomen foran verbet:', subTasks: [
        { label: 'a', task: 'Voy a leer el libro.', solution: 'Lo voy a leer.', answer: 'Lo voy a leer.' },
        { label: 'b', task: 'Quiero ver la película.', solution: 'La quiero ver.', answer: 'La quiero ver.' },
        { label: 'c', task: 'Necesito comprar las entradas.', solution: 'Las necesito comprar.', answer: 'Las necesito comprar.' },
        { label: 'd', task: 'Puedo ayudar a Juan.', solution: 'Lo puedo ayudar.', answer: 'Lo puedo ayudar.' },
      ], solution: 'a) Lo voy a leer., b) La quiero ver., c) Las necesito comprar., d) Lo puedo ayudar.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-4-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett med direkte objektspronomen:', subTasks: [
        { label: 'a', task: 'Ja, jeg kjenner henne.', solution: 'Sí, la conozco.', answer: 'Sí, la conozco.' },
        { label: 'b', task: 'Jeg skal kjøpe den (boken).', solution: 'Lo voy a comprar. / Voy a comprarlo.', answer: 'Lo voy a comprar. / Voy a comprarlo.' },
        { label: 'c', task: 'Vi ser dem (jentene).', solution: 'Las vemos.', answer: 'Las vemos.' },
        { label: 'd', task: 'Kan du hjelpe meg?', solution: '¿Puedes ayudarme? / ¿Me puedes ayudar?', answer: '¿Puedes ayudarme? / ¿Me puedes ayudar?' },
      ], solution: 'a) Sí, la conozco., b) Lo voy a comprar. / Voy a comprarlo., c) Las vemos., d) ¿Puedes ayudarme? / ¿Me puedes ayudar?', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-1-tip-1', type: 'tip', content: `**Husk:** *Lo* brukes for hankjønn entall, *la* for hunkjønn entall, *los* for hankjønn flertall, *las* for hunkjønn flertall.` },
    { id: 'spansk-2-4-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Direkte objektspronomen**

- me, te, lo/la, nos, los/las
- Plassering: Foran konjugert verb ELLER bak infinitiv/gerundium
- Erstatter direkte objekt
- Personlig *a* ved personer` },
  ],
  exercises: [],
};

// 4.2 Pronombres de objeto indirecto
export const CHAPTER_SPANSK_2_4_2: TextbookChapter = {
  id: 'spansk-2-4-2',
  courseId: 'spansk-2',
  chapterNumber: '4.2',
  title: 'Pronombres de objeto indirecto',
  subtitle: 'Indirekte objektspronomen',
  description: 'Lær å bruke indirekte objektspronomen (me, te, le, nos, les).',
  estimatedMinutes: 45,
  competenceGoals: ['bruke indirekte objektspronomen', 'identifisere indirekte objekt'],
  content: [
    { id: 'spansk-2-4-2-intro', type: 'text', content: `## Pronombres de objeto indirecto

Indirekte objektspronomen viser **til hvem** eller **for hvem** handlingen utføres. De brukes med verb som *dar, decir, escribir, enviar, preguntar, explicar*.` },
    { id: 'spansk-2-4-2-def-1', type: 'definition', title: 'Indirekte objektspronomen', content: `**Indirekte objektspronomen** viser hvem handlingen rettes mot.

| Person | Pronomen | Eksempel |
|--------|----------|----------|
| yo | me | Me da el libro. (Gir meg boken.) |
| tú | te | Te escribo. (Jeg skriver til deg.) |
| él/ella/usted | le | Le digo. (Jeg sier til ham/henne.) |
| nosotros | nos | Nos explica. (Forklarer oss.) |
| ellos/ustedes | les | Les envío. (Jeg sender til dem.) |` },
    { id: 'spansk-2-4-2-text-1', type: 'text', content: `## Verb med indirekte objekt

| Verb | Eksempel |
|------|----------|
| dar | Le doy un regalo. (Gir ham en gave.) |
| decir | Te digo la verdad. (Sier deg sannheten.) |
| escribir | Les escribo una carta. (Skriver dem et brev.) |
| enviar | Me envían un paquete. (Sender meg en pakke.) |
| preguntar | Le pregunto la hora. (Spør ham om tiden.) |
| explicar | Nos explica la lección. (Forklarer oss leksjonen.) |` },
    { id: 'spansk-2-4-2-text-2', type: 'text', content: `## Klargjøring med a + person

Siden *le* kan bety ham, henne eller Dem, klargjøres det ofte med *a*:
- *Le doy el libro **a Juan**.* (Jeg gir boken til Juan.)
- *Le escribo **a María**.* (Jeg skriver til María.)
- *Les envío la carta **a mis padres**.* (Jeg sender brevet til foreldrene mine.)` },
    { id: 'spansk-2-4-2-example-1', type: 'example', title: 'Eksempel: Identifiser indirekte objekt', problem: `Juan da un libro a María. Hvem er indirekte objekt?`, solution: `**A María** er indirekte objekt (til hvem?). → Juan **le** da un libro.` },
    { id: 'spansk-2-4-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-4-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig indirekte objektspronomen:', subTasks: [
        { label: 'a', task: '___ escribo una carta. (a ti)', solution: 'Te', answer: 'Te' },
        { label: 'b', task: '___ doy un regalo. (a ella)', solution: 'Le', answer: 'Le' },
        { label: 'c', task: '___ explican la tarea. (a nosotros)', solution: 'Nos', answer: 'Nos' },
        { label: 'd', task: '___ envío el paquete. (a ellos)', solution: 'Les', answer: 'Les' },
      ], solution: 'a) Te, b) Le, c) Nos, d) Les', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-4-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Erstatt med pronomen:', subTasks: [
        { label: 'a', task: 'Doy un libro a Juan.', solution: 'Le doy un libro.', answer: 'Le doy un libro.' },
        { label: 'b', task: 'Escribo a mis amigos.', solution: 'Les escribo.', answer: 'Les escribo.' },
        { label: 'c', task: 'Dice la verdad a mí.', solution: 'Me dice la verdad.', answer: 'Me dice la verdad.' },
        { label: 'd', task: 'Pregunta a nosotros.', solution: 'Nos pregunta.', answer: 'Nos pregunta.' },
      ], solution: 'a) Le doy un libro., b) Les escribo., c) Me dice la verdad., d) Nos pregunta.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-2-example-2', type: 'example', title: 'Eksempel: Klargjøring', problem: `Le escribo. Hvem skriver jeg til?`, solution: `Uklart! Klargjør: **Le** escribo **a mi madre**. / **Le** escribo **a Juan**.` },
    { id: 'spansk-2-4-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-4-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Fyll inn le eller les:', subTasks: [
        { label: 'a', task: '___ digo la verdad a mi madre.', solution: 'Le', answer: 'Le' },
        { label: 'b', task: '___ envío un mensaje a mis amigos.', solution: 'Les', answer: 'Les' },
        { label: 'c', task: '___ pregunto la dirección al policía.', solution: 'Le', answer: 'Le' },
        { label: 'd', task: '___ escribo a mis abuelos.', solution: 'Les', answer: 'Les' },
      ], solution: 'a) Le, b) Les, c) Le, d) Les', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-4-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett med indirekte objektspronomen:', subTasks: [
        { label: 'a', task: 'Jeg gir henne en gave.', solution: 'Le doy un regalo.', answer: 'Le doy un regalo.' },
        { label: 'b', task: 'Hun skriver til oss.', solution: 'Nos escribe.', answer: 'Nos escribe.' },
        { label: 'c', task: 'Kan du si meg sannheten?', solution: '¿Puedes decirme la verdad? / ¿Me puedes decir la verdad?', answer: '¿Puedes decirme la verdad? / ¿Me puedes decir la verdad?' },
        { label: 'd', task: 'Læreren forklarer dem leksjonen.', solution: 'El profesor les explica la lección.', answer: 'El profesor les explica la lección.' },
      ], solution: 'a) Le doy un regalo., b) Nos escribe., c) ¿Puedes decirme la verdad? / ¿Me puedes decir la verdad?, d) El profesor les explica la lección.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-2-tip-1', type: 'tip', content: `**Forskjell direkte/indirekte:** Direkte objekt = *hva/hvem* (¿Qué ves? Lo veo). Indirekte objekt = *til hvem* (¿A quién le das? Le doy).` },
    { id: 'spansk-2-4-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Indirekte objektspronomen**

- me, te, le, nos, les
- Brukes med: dar, decir, escribir, enviar, preguntar, explicar
- Klargjøring: Le/les + a + person
- Plassering: Foran konjugert verb eller bak infinitiv` },
  ],
  exercises: [],
};

// 4.3 Combinación de pronombres
export const CHAPTER_SPANSK_2_4_3: TextbookChapter = {
  id: 'spansk-2-4-3',
  courseId: 'spansk-2',
  chapterNumber: '4.3',
  title: 'Combinación de pronombres',
  subtitle: 'Kombinere pronomen (se lo/la)',
  description: 'Lær å kombinere direkte og indirekte objektspronomen.',
  estimatedMinutes: 45,
  competenceGoals: ['kombinere to objektspronomen', 'bruke se lo/la korrekt'],
  content: [
    { id: 'spansk-2-4-3-intro', type: 'text', content: `## Combinación de pronombres

Når du har både direkte og indirekte objekt i samme setning, kan begge erstattes med pronomen. **Le/les** endres til **se** foran lo/la/los/las.` },
    { id: 'spansk-2-4-3-def-1', type: 'definition', title: 'Doble objektspronomen', content: `Når **indirekte** og **direkte** objektspronomen brukes sammen:
1. Indirekte kommer FØRST
2. **le/les → se** foran lo/la/los/las

| Indirekte + Direkte | Eksempel |
|---------------------|----------|
| me lo | Me lo da. (Gir den til meg.) |
| te la | Te la envío. (Sender den til deg.) |
| se lo | Se lo digo. (Sier det til ham/henne.) |
| nos los | Nos los traen. (Bringer dem til oss.) |
| se las | Se las compro. (Kjøper dem til dem.) |` },
    { id: 'spansk-2-4-3-text-1', type: 'text', content: `## Regelen: le/les → se

- *Le doy el libro.* → *~~Le lo~~ doy.* ❌ → ***Se** lo doy.* ✅
- *Les envío las cartas.* → *~~Les las~~ envío.* ❌ → ***Se** las envío.* ✅

Fordi *le lo* og *les las* er vanskelig å uttale, endres le/les alltid til **se**.` },
    { id: 'spansk-2-4-3-text-2', type: 'text', content: `## Plassering av doble pronomen

**Foran konjugert verb:**
- *Se lo digo.* (Jeg sier det til ham.)

**Bak infinitiv (sammenhengende):**
- *Voy a decír**selo**.* (Jeg skal si det til ham.)

**Merk:** Begge pronomenene må være sammen!` },
    { id: 'spansk-2-4-3-example-1', type: 'example', title: 'Eksempel: Le → se', problem: `Le doy el libro a Juan. Erstatt begge objektene.`, solution: `**Se lo doy.** (le → se, el libro → lo)` },
    { id: 'spansk-2-4-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-4-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Erstatt det direkte objektet:', subTasks: [
        { label: 'a', task: 'Me da el libro. → Me ___ da.', solution: 'lo', answer: 'lo' },
        { label: 'b', task: 'Te envío la carta. → Te ___ envío.', solution: 'la', answer: 'la' },
        { label: 'c', task: 'Nos traen los regalos. → Nos ___ traen.', solution: 'los', answer: 'los' },
        { label: 'd', task: 'Le doy las llaves. → Se ___ doy.', solution: 'las', answer: 'las' },
      ], solution: 'a) lo, b) la, c) los, d) las', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-4-3-ex-2', number: '2', type: 'classic', difficulty: 'medium', task: 'Erstatt begge objektene:', subTasks: [
        { label: 'a', task: 'Doy el libro a Juan.', solution: 'Se lo doy.', answer: 'Se lo doy.' },
        { label: 'b', task: 'Envío la carta a María.', solution: 'Se la envío.', answer: 'Se la envío.' },
        { label: 'c', task: 'Compro los regalos a mis padres.', solution: 'Se los compro.', answer: 'Se los compro.' },
        { label: 'd', task: 'Explico la lección a los alumnos.', solution: 'Se la explico.', answer: 'Se la explico.' },
      ], solution: 'a) Se lo doy., b) Se la envío., c) Se los compro., d) Se la explico.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-3-example-2', type: 'example', title: 'Eksempel: Doble pronomen', problem: `Nos envían las cartas. Erstatt direkte objekt.`, solution: `**Nos las envían.** (las cartas → las, nos forblir)` },
    { id: 'spansk-2-4-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-4-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv om med pronomen bak infinitiv:', subTasks: [
        { label: 'a', task: 'Voy a dar el libro a Juan.', solution: 'Voy a dárselo.', answer: 'Voy a dárselo.' },
        { label: 'b', task: 'Quiero enviar la carta a María.', solution: 'Quiero enviársela.', answer: 'Quiero enviársela.' },
        { label: 'c', task: 'Puedo explicar la lección a ti.', solution: 'Puedo explicártela.', answer: 'Puedo explicártela.' },
        { label: 'd', task: 'Necesito comprar las flores a ella.', solution: 'Necesito comprárselas.', answer: 'Necesito comprárselas.' },
      ], solution: 'a) Voy a dárselo., b) Quiero enviársela., c) Puedo explicártela., d) Necesito comprárselas.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-4-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett med doble pronomen:', subTasks: [
        { label: 'a', task: 'Jeg gir den (boken) til henne.', solution: 'Se lo doy.', answer: 'Se lo doy.' },
        { label: 'b', task: 'Kan du sende den (brevet) til meg?', solution: '¿Puedes enviármela? / ¿Me la puedes enviar?', answer: '¿Puedes enviármela? / ¿Me la puedes enviar?' },
        { label: 'c', task: 'Vi kjøper dem (gavene) til dem.', solution: 'Se los compramos.', answer: 'Se los compramos.' },
        { label: 'd', task: 'Han forklarer det til oss.', solution: 'Nos lo explica.', answer: 'Nos lo explica.' },
      ], solution: 'a) Se lo doy., b) ¿Puedes enviármela? / ¿Me la puedes enviar?, c) Se los compramos., d) Nos lo explica.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-3-tip-1', type: 'tip', content: `**Huskeregel for rekkefølge:** **RID** - Refleksiv, Indirekte, Direkte. Pronomenene kommer alltid i denne rekkefølgen.` },
    { id: 'spansk-2-4-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Doble pronomen**

- Indirekte før direkte: me lo, te la, se lo
- le/les → se foran lo/la/los/las
- Plassering: Foran konjugert verb eller bak infinitiv (sammenhengende)
- Klargjøring: se lo doy a Juan` },
  ],
  exercises: [],
};

// 4.4 Pronombres relativos
export const CHAPTER_SPANSK_2_4_4: TextbookChapter = {
  id: 'spansk-2-4-4',
  courseId: 'spansk-2',
  chapterNumber: '4.4',
  title: 'Pronombres relativos',
  subtitle: 'Relativpronomen',
  description: 'Lær å bruke relativpronomen for å binde sammen setninger.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke relativpronomen', 'bygge komplekse setninger'],
  content: [
    { id: 'spansk-2-4-4-intro', type: 'text', content: `## Pronombres relativos

Relativpronomen brukes for å koble to setninger sammen og unngå gjentakelse. Det vanligste relativpronomenet i spansk er **que**.` },
    { id: 'spansk-2-4-4-def-1', type: 'definition', title: 'Relativpronomen (pronombres relativos)', content: `**Relativpronomen** binder sammen to setninger:

| Pronomen | Bruk | Eksempel |
|----------|------|----------|
| que | ting og personer | El libro **que** leo. (Boken som jeg leser.) |
| quien/es | personer (etter prep.) | La chica **con quien** hablo. |
| donde | steder | La ciudad **donde** vivo. |
| lo que | abstrakt/setning | **Lo que** dices es verdad. |
| el/la que | spesifisering | El **que** llegó primero. |` },
    { id: 'spansk-2-4-4-text-1', type: 'text', content: `## Que - det vanligste

*Que* brukes for både personer og ting:
- *El chico **que** habla español.* (Gutten som snakker spansk.)
- *El libro **que** leo.* (Boken som jeg leser.)
- *La película **que** vimos.* (Filmen som vi så.)

**Etter preposisjon + person → quien:**
- *La chica **con quien** hablo.* (Jenta som jeg snakker med.)
- *El profesor **a quien** admiro.* (Læreren som jeg beundrer.)` },
    { id: 'spansk-2-4-4-text-2', type: 'text', content: `## Donde og lo que

**Donde** = der/hvor:
- *La ciudad **donde** nací.* (Byen der jeg ble født.)
- *El restaurante **donde** comimos.* (Restauranten der vi spiste.)

**Lo que** = det som (abstrakt):
- ***Lo que** dices es interesante.* (Det du sier er interessant.)
- *No entiendo **lo que** pasa.* (Jeg forstår ikke det som skjer.)` },
    { id: 'spansk-2-4-4-example-1', type: 'example', title: 'Eksempel: Que', problem: `Bind sammen: Tengo un libro. El libro es interesante.`, solution: `Tengo un libro **que** es interesante. (Jeg har en bok som er interessant.)` },
    { id: 'spansk-2-4-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-4-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Fyll inn que, quien, donde eller lo que:', subTasks: [
        { label: 'a', task: 'El chico ___ habla español.', solution: 'que', answer: 'que' },
        { label: 'b', task: 'La ciudad ___ nací.', solution: 'donde', answer: 'donde' },
        { label: 'c', task: '___ dices es verdad.', solution: 'Lo que', answer: 'Lo que' },
        { label: 'd', task: 'La chica con ___ hablo.', solution: 'quien', answer: 'quien' },
      ], solution: 'a) que, b) donde, c) Lo que, d) quien', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-4-4-ex-2', number: '2', type: 'classic', difficulty: 'medium', task: 'Bind sammen setningene med relativpronomen:', subTasks: [
        { label: 'a', task: 'Tengo un amigo. Mi amigo vive en Madrid.', solution: 'Tengo un amigo que vive en Madrid.', answer: 'Tengo un amigo que vive en Madrid.' },
        { label: 'b', task: 'Vivo en una casa. La casa es grande.', solution: 'La casa donde vivo es grande.', answer: 'La casa donde vivo es grande.' },
        { label: 'c', task: 'Hablo con una chica. La chica es simpática.', solution: 'La chica con quien hablo es simpática.', answer: 'La chica con quien hablo es simpática.' },
        { label: 'd', task: 'No entiendo algo. Algo pasa.', solution: 'No entiendo lo que pasa.', answer: 'No entiendo lo que pasa.' },
      ], solution: 'a) Tengo un amigo que vive en Madrid., b) La casa donde vivo es grande., c) La chica con quien hablo es simpática., d) No entiendo lo que pasa.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-4-example-2', type: 'example', title: 'Eksempel: Donde', problem: `Bind sammen: Vivo en una ciudad. La ciudad es bonita.`, solution: `La ciudad **donde** vivo es bonita. (Byen der jeg bor er pen.)` },
    { id: 'spansk-2-4-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-4-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Velg riktig relativpronomen:', subTasks: [
        { label: 'a', task: 'La película ___ vimos fue buena.', solution: 'que', answer: 'que' },
        { label: 'b', task: 'El restaurante ___ comimos está cerrado.', solution: 'donde', answer: 'donde' },
        { label: 'c', task: 'El profesor ___ admiro es muy bueno.', solution: 'a quien / que', answer: 'a quien / que' },
        { label: 'd', task: '___ necesitas es descansar.', solution: 'Lo que', answer: 'Lo que' },
      ], solution: 'a) que, b) donde, c) a quien / que, d) Lo que', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-4-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Oversett med relativpronomen:', subTasks: [
        { label: 'a', task: 'Boken som jeg leser er interessant.', solution: 'El libro que leo es interesante.', answer: 'El libro que leo es interesante.' },
        { label: 'b', task: 'Byen der hun bor er pen.', solution: 'La ciudad donde vive es bonita.', answer: 'La ciudad donde vive es bonita.' },
        { label: 'c', task: 'Det du sier er viktig.', solution: 'Lo que dices es importante.', answer: 'Lo que dices es importante.' },
        { label: 'd', task: 'Vennen som jeg reiser med er norsk.', solution: 'El amigo con quien viajo es noruego.', answer: 'El amigo con quien viajo es noruego.' },
      ], solution: 'a) El libro que leo es interesante., b) La ciudad donde vive es bonita., c) Lo que dices es importante., d) El amigo con quien viajo es noruego.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-4-4-tip-1', type: 'tip', content: `**Que** er det klart vanligste relativpronomenet. Bruk *quien* bare etter preposisjoner med personer. *Lo que* brukes for abstrakte konsepter.` },
    { id: 'spansk-2-4-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Relativpronomen**

- **que:** ting og personer (vanligst)
- **quien/quienes:** personer etter preposisjon
- **donde:** steder
- **lo que:** abstrakt, "det som"
- Brukes for å binde setninger sammen` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: LITERATURA HISPANOHABLANTE
// ============================================================================

// 5.1 Introducción a la literatura
export const CHAPTER_SPANSK_2_5_1: TextbookChapter = {
  id: 'spansk-2-5-1',
  courseId: 'spansk-2',
  chapterNumber: '5.1',
  title: 'Introducción a la literatura',
  subtitle: 'Litterære sjangre og begreper',
  description: 'Bli kjent med litterære sjangre og grunnleggende begreper.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne litterære sjangre', 'bruke grunnleggende analysebegreper'],
  content: [
    { id: 'spansk-2-5-1-intro', type: 'text', content: `## Introducción a la literatura

Litteratur er en viktig del av spanskfaget. For å analysere tekster trenger du kunnskap om **sjangre** og grunnleggende **analysebegreper**.` },
    { id: 'spansk-2-5-1-def-1', type: 'definition', title: 'Litterære sjangre (géneros literarios)', content: `**Hovedsjangre:**

| Sjanger | Spansk | Beskrivelse |
|---------|--------|-------------|
| Roman | la novela | Lang fortellende prosa |
| Novelle | el cuento | Kort fortelling |
| Poesi | la poesía | Dikt og vers |
| Teater | el teatro | Dramatiske tekster |
| Essay | el ensayo | Reflekterende prosa |

**Analysebegreper:** el narrador (forteller), los personajes (karakterer), la trama (handling), el tema (tema), el conflicto (konflikt), el desenlace (løsning)` },
    { id: 'spansk-2-5-1-text-1', type: 'text', content: `## Litterære virkemidler

| Virkemiddel | Spansk | Eksempel |
|-------------|--------|----------|
| Metafor | la metáfora | Sus ojos son soles. |
| Sammenligning | el símil | Es fuerte como un roble. |
| Personifisering | la personificación | El viento canta. |
| Gjentakelse | la repetición | Llueve, llueve, llueve. |
| Ironi | la ironía | ¡Qué buen tiempo! (i regn) |` },
    { id: 'spansk-2-5-1-text-2', type: 'text', content: `## Å analysere en tekst

1. **Sjanger:** Hva slags tekst er det?
2. **Tema:** Hva handler teksten om?
3. **Forteller:** Hvem forteller? (1. eller 3. person)
4. **Karakterer:** Hvem er hovedpersonene?
5. **Virkemidler:** Hvilke virkemidler brukes?
6. **Budskap:** Hva vil forfatteren formidle?` },
    { id: 'spansk-2-5-1-example-1', type: 'example', title: 'Eksempel: Identifiser sjanger', problem: `Hva slags tekst er dette? "Det var en gang en gammel mann som bodde alene i et lite hus..."`, solution: `Dette er en **cuento** (novelle/kort fortelling) - kort narrativ prosa.` },
    { id: 'spansk-2-5-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-5-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match sjanger med beskrivelse:', subTasks: [
        { label: 'a', task: 'Lang fortellende tekst med flere kapitler', solution: 'la novela (roman)', answer: 'la novela (roman)' },
        { label: 'b', task: 'Kort fortelling', solution: 'el cuento (novelle)', answer: 'el cuento (novelle)' },
        { label: 'c', task: 'Tekst skrevet i vers', solution: 'la poesía (poesi)', answer: 'la poesía (poesi)' },
        { label: 'd', task: 'Tekst ment for oppførelse', solution: 'el teatro (teater)', answer: 'el teatro (teater)' },
      ], solution: 'a) la novela (roman), b) el cuento (novelle), c) la poesía (poesi), d) el teatro (teater)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-5-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match analysebegrep med definisjon:', subTasks: [
        { label: 'a', task: 'Hvem som forteller historien', solution: 'el narrador (forteller)', answer: 'el narrador (forteller)' },
        { label: 'b', task: 'Personene i historien', solution: 'los personajes (karakterer)', answer: 'los personajes (karakterer)' },
        { label: 'c', task: 'Hendelsesforløpet', solution: 'la trama (handling)', answer: 'la trama (handling)' },
        { label: 'd', task: 'Hovedbudskapet', solution: 'el tema (tema)', answer: 'el tema (tema)' },
      ], solution: 'a) el narrador (forteller), b) los personajes (karakterer), c) la trama (handling), d) el tema (tema)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-1-example-2', type: 'example', title: 'Eksempel: Finn virkemiddelet', problem: `Identifiser virkemiddelet: "Sus ojos brillaban como estrellas."`, solution: `**Símil** (sammenligning) - øynene sammenlignes med stjerner med "como".` },
    { id: 'spansk-2-5-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-5-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Identifiser virkemiddelet:', subTasks: [
        { label: 'a', task: 'El tiempo vuela.', solution: 'Metáfora (tiden flyr)', answer: 'Metáfora (tiden flyr)' },
        { label: 'b', task: 'Es alto como una torre.', solution: 'Símil (sammenligning med como)', answer: 'Símil (sammenligning med como)' },
        { label: 'c', task: 'El río susurra secretos.', solution: 'Personificación (elven hvisker)', answer: 'Personificación (elven hvisker)' },
        { label: 'd', task: 'Nunca, nunca, nunca volveré.', solution: 'Repetición (gjentakelse)', answer: 'Repetición (gjentakelse)' },
      ], solution: 'a) Metáfora (tiden flyr), b) Símil (sammenligning med como), c) Personificación (elven hvisker), d) Repetición (gjentakelse)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-5-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Analyser teksten: "Era una noche oscura. Juan caminaba solo por la calle vacía. De repente, oyó un ruido extraño."', subTasks: [
        { label: 'a', task: 'Hva er sjangeren?', solution: 'Cuento (kort fortelling/novelle)', answer: 'Cuento (kort fortelling/novelle)' },
        { label: 'b', task: 'Hvem er fortelleren?', solution: 'Narrador en tercera persona (tredjepersonsforteller)', answer: 'Narrador en tercera persona (tredjepersonsforteller)' },
        { label: 'c', task: 'Hva er stemningen?', solution: 'Mysteriøs, mørk, spenningsfylt', answer: 'Mysteriøs, mørk, spenningsfylt' },
        { label: 'd', task: 'Hvilket virkemiddel brukes?', solution: 'Beskrivelse (noche oscura, calle vacía) for å skape stemning', answer: 'Beskrivelse (noche oscura, calle vacía) for å skape stemning' },
      ], solution: 'a) Cuento (kort fortelling/novelle), b) Narrador en tercera persona (tredjepersonsforteller), c) Mysteriøs, mørk, spenningsfylt, d) Beskrivelse (noche oscura, calle vacía) for å skape stemning', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-1-tip-1', type: 'tip', content: `**Tips for analyse:** Spør alltid: Hvem forteller? Til hvem? Om hva? Hvorfor? Hvordan?` },
    { id: 'spansk-2-5-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Litterære sjangre**

- **Sjangre:** novela, cuento, poesía, teatro, ensayo
- **Begreper:** narrador, personajes, trama, tema, conflicto
- **Virkemidler:** metáfora, símil, personificación, repetición, ironía
- **Analyse:** sjanger → tema → forteller → karakterer → virkemidler → budskap` },
  ],
  exercises: [],
};

// 5.2 Autores españoles
export const CHAPTER_SPANSK_2_5_2: TextbookChapter = {
  id: 'spansk-2-5-2',
  courseId: 'spansk-2',
  chapterNumber: '5.2',
  title: 'Autores españoles',
  subtitle: 'Spanske forfattere',
  description: 'Utforsk viktige spanske forfattere fra Cervantes til moderne tid.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne viktige spanske forfattere', 'lese og forstå litterære utdrag'],
  content: [
    { id: 'spansk-2-5-2-intro', type: 'text', content: `## Autores españoles

Spansk litteratur har en rik tradisjon som strekker seg over flere århundrer. I dette kapittelet møter du noen av de viktigste spanske forfatterne.` },
    { id: 'spansk-2-5-2-def-1', type: 'definition', title: 'Viktige spanske forfattere', content: `**Klassikere:**
- **Miguel de Cervantes** (1547-1616): Don Quijote de la Mancha
- **Federico García Lorca** (1898-1936): Bodas de sangre, Romancero gitano

**Generación del 98:**
- **Miguel de Unamuno** (1864-1936): Niebla

**Moderne:**
- **Ana María Matute** (1925-2014): Los Abel
- **Carlos Ruiz Zafón** (1964-2020): La sombra del viento` },
    { id: 'spansk-2-5-2-text-1', type: 'text', content: `## Cervantes og Don Quijote

Miguel de Cervantes' *Don Quijote de la Mancha* (1605/1615) anses som den første moderne romanen. Handlingen følger en idealistisk ridder som kjemper mot vindmøller og tror de er kjemper.

**Viktige temaer:** Idealisme vs. realisme, galskap vs. fornuft, ridderlighet.

*"En un lugar de la Mancha, de cuyo nombre no quiero acordarme..."*
(Et sted i La Mancha, hvis navn jeg ikke vil huske...)` },
    { id: 'spansk-2-5-2-text-2', type: 'text', content: `## García Lorca

Federico García Lorca var poet og dramatiker, medlem av Generación del 27. Han ble drept under den spanske borgerkrigen i 1936.

**Kjente verk:**
- *Romancero gitano* (poesi, 1928)
- *Bodas de sangre* (teater, 1932)
- *La casa de Bernarda Alba* (teater, 1936)

**Temaer:** Kjærlighet, død, undertrykkelse, frihet, andalusisk kultur.` },
    { id: 'spansk-2-5-2-example-1', type: 'example', title: 'Eksempel: Don Quijote', problem: `Hvem er hovedpersonene i Don Quijote?`, solution: `**Don Quijote** (den idealistiske ridderen) og **Sancho Panza** (hans realistiske væpner). De representerer motsetningen mellom idealisme og realisme.` },
    { id: 'spansk-2-5-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-5-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match forfatter med verk:', subTasks: [
        { label: 'a', task: 'Miguel de Cervantes', solution: 'Don Quijote de la Mancha', answer: 'Don Quijote de la Mancha' },
        { label: 'b', task: 'Federico García Lorca', solution: 'Bodas de sangre / Romancero gitano', answer: 'Bodas de sangre / Romancero gitano' },
        { label: 'c', task: 'Miguel de Unamuno', solution: 'Niebla', answer: 'Niebla' },
        { label: 'd', task: 'Carlos Ruiz Zafón', solution: 'La sombra del viento', answer: 'La sombra del viento' },
      ], solution: 'a) Don Quijote de la Mancha, b) Bodas de sangre / Romancero gitano, c) Niebla, d) La sombra del viento', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-5-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant:', subTasks: [
        { label: 'a', task: 'Don Quijote ble skrevet på 1600-tallet.', solution: 'Sant (1605/1615)', answer: 'Sant (1605/1615)' },
        { label: 'b', task: 'García Lorca var kun poet.', solution: 'Usant - han var også dramatiker.', answer: 'Usant - han var også dramatiker.' },
        { label: 'c', task: 'Don Quijote kjemper mot vindmøller.', solution: 'Sant', answer: 'Sant' },
        { label: 'd', task: 'Cervantes levde på 1800-tallet.', solution: 'Usant - 1547-1616', answer: 'Usant - 1547-1616' },
      ], solution: 'a) Sant (1605/1615), b) Usant - han var også dramatiker., c) Sant, d) Usant - 1547-1616', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-2-example-2', type: 'example', title: 'Eksempel: García Lorca', problem: `Hvilken litterær generasjon tilhørte García Lorca?`, solution: `**Generación del 27** - en gruppe spanske poeter og forfattere som fornyet spansk litteratur på 1920-30-tallet.` },
    { id: 'spansk-2-5-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-5-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Knytt temaer til forfattere:', subTasks: [
        { label: 'a', task: 'Idealisme vs. realisme', solution: 'Cervantes (Don Quijote)', answer: 'Cervantes (Don Quijote)' },
        { label: 'b', task: 'Undertrykkelse av kvinner', solution: 'García Lorca (La casa de Bernarda Alba)', answer: 'García Lorca (La casa de Bernarda Alba)' },
        { label: 'c', task: 'Andalusisk kultur og tradisjon', solution: 'García Lorca (Romancero gitano)', answer: 'García Lorca (Romancero gitano)' },
        { label: 'd', task: 'Identitet og eksistens', solution: 'Unamuno (Niebla)', answer: 'Unamuno (Niebla)' },
      ], solution: 'a) Cervantes (Don Quijote), b) García Lorca (La casa de Bernarda Alba), c) García Lorca (Romancero gitano), d) Unamuno (Niebla)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-5-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Refleksjonsspørsmål:', subTasks: [
        { label: 'a', task: 'Hvorfor anses Don Quijote som den første moderne romanen?', solution: 'Den leker med forholdet mellom fiksjon og virkelighet, har komplekse karakterer, og bruker ironi og humor.', answer: 'Den leker med forholdet mellom fiksjon og virkelighet, har komplekse karakterer, og bruker ironi og humor.' },
        { label: 'b', task: 'Hvorfor er García Lorca fortsatt viktig?', solution: 'Hans temaer (frihet, undertrykkelse, kjærlighet, død) er universelle og relevante i dag.', answer: 'Hans temaer (frihet, undertrykkelse, kjærlighet, død) er universelle og relevante i dag.' },
        { label: 'c', task: 'Hva betyr Generación del 27?', solution: 'En gruppe forfattere/poeter som fornyet spansk litteratur i 1920-30-årene, oppkalt etter 300-årsjubileet for Góngoras død.', answer: 'En gruppe forfattere/poeter som fornyet spansk litteratur i 1920-30-årene, oppkalt etter 300-årsjubileet for Góngoras død.' },
        { label: 'd', task: 'Sammenlign Don Quijote og Sancho Panza.', solution: 'Don Quijote er idealistisk og drømmende; Sancho er realistisk og jordnær. Sammen representerer de menneskelig dualitet.', answer: 'Don Quijote er idealistisk og drømmende; Sancho er realistisk og jordnær. Sammen representerer de menneskelig dualitet.' },
      ], solution: 'a) Den leker med forholdet mellom fiksjon og virkelighet, har komplekse karakterer, og bruker ironi og humor., b) Hans temaer (frihet, undertrykkelse, kjærlighet, død) er universelle og relevante i dag., c) En gruppe forfattere/poeter som fornyet spansk litteratur i 1920-30-årene, oppkalt etter 300-årsjubileet for Góngoras død., d) Don Quijote er idealistisk og drømmende; Sancho er realistisk og jordnær. Sammen representerer de menneskelig dualitet.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-2-tip-1', type: 'tip', content: `**Lesetips:** Start med korte utdrag og oversatte versjoner. Bruk ordbok aktivt og fokuser på å forstå hovedideene først.` },
    { id: 'spansk-2-5-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Spanske forfattere**

- **Cervantes:** Don Quijote - første moderne roman
- **García Lorca:** Poesi og teater, Generación del 27
- **Temaer:** Idealisme/realisme, frihet/undertrykkelse
- **Analyse:** Forstå historisk kontekst, identifiser temaer` },
  ],
  exercises: [],
};

// 5.3 Autores latinoamericanos
export const CHAPTER_SPANSK_2_5_3: TextbookChapter = {
  id: 'spansk-2-5-3',
  courseId: 'spansk-2',
  chapterNumber: '5.3',
  title: 'Autores latinoamericanos',
  subtitle: 'Latinamerikanske forfattere',
  description: 'Utforsk viktige latinamerikanske forfattere og litterære bevegelser.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne latinamerikanske forfattere', 'forstå magisk realisme'],
  content: [
    { id: 'spansk-2-5-3-intro', type: 'text', content: `## Autores latinoamericanos

Latinamerikansk litteratur opplevde en eksplosjon på 1960-70-tallet kjent som **el boom**. Den mest kjente bevegelsen er **magisk realisme**, der overnaturlige elementer blandes med hverdagsvirkelighet.` },
    { id: 'spansk-2-5-3-def-1', type: 'definition', title: 'Latinamerikansk litteratur', content: `**El boom latinoamericano** (1960-70-tallet):

| Forfatter | Land | Kjent verk |
|-----------|------|------------|
| Gabriel García Márquez | Colombia | Cien años de soledad |
| Julio Cortázar | Argentina | Rayuela |
| Mario Vargas Llosa | Peru | La ciudad y los perros |
| Carlos Fuentes | Mexico | La muerte de Artemio Cruz |

**Andre viktige:**
- Pablo Neruda (Chile) - Nobelpris 1971
- Isabel Allende (Chile) - La casa de los espíritus
- Jorge Luis Borges (Argentina) - Ficciones` },
    { id: 'spansk-2-5-3-text-1', type: 'text', content: `## Magisk realisme

Magisk realisme (*el realismo mágico*) blander det hverdagslige med det overnaturlige som om det var helt normalt.

**Kjennetegn:**
- Overnaturlige hendelser presenteres som vanlige
- Rik, detaljert beskrivelse
- Mytisk tidsfølelse (syklisk tid)
- Latinamerikansk identitet og historie

**García Márquez:** *"Muchos años después, frente al pelotón de fusilamiento, el coronel Aureliano Buendía había de recordar aquella tarde remota en que su padre lo llevó a conocer el hielo."*
(Åpningen av Cien años de soledad)` },
    { id: 'spansk-2-5-3-text-2', type: 'text', content: `## Pablo Neruda

Chilensk poet som vant Nobelprisen i 1971. Kjent for kjærlighetspoesi og politisk engasjert diktning.

**Kjente verk:**
- *Veinte poemas de amor y una canción desesperada* (1924)
- *Canto general* (1950)

*"Puedo escribir los versos más tristes esta noche."*
(Jeg kan skrive de tristeste versene i natt.)` },
    { id: 'spansk-2-5-3-example-1', type: 'example', title: 'Eksempel: Magisk realisme', problem: `Hva kjennetegner magisk realisme?`, solution: `Overnaturlige hendelser presenteres som **helt normalt** i en ellers realistisk setting. Det overnaturlige kommenteres ikke som uvanlig.` },
    { id: 'spansk-2-5-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-5-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match forfatter med land:', subTasks: [
        { label: 'a', task: 'Gabriel García Márquez', solution: 'Colombia', answer: 'Colombia' },
        { label: 'b', task: 'Pablo Neruda', solution: 'Chile', answer: 'Chile' },
        { label: 'c', task: 'Jorge Luis Borges', solution: 'Argentina', answer: 'Argentina' },
        { label: 'd', task: 'Mario Vargas Llosa', solution: 'Peru', answer: 'Peru' },
      ], solution: 'a) Colombia, b) Chile, c) Argentina, d) Peru', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-5-3-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match forfatter med verk:', subTasks: [
        { label: 'a', task: 'García Márquez', solution: 'Cien años de soledad', answer: 'Cien años de soledad' },
        { label: 'b', task: 'Neruda', solution: 'Veinte poemas de amor', answer: 'Veinte poemas de amor' },
        { label: 'c', task: 'Isabel Allende', solution: 'La casa de los espíritus', answer: 'La casa de los espíritus' },
        { label: 'd', task: 'Borges', solution: 'Ficciones', answer: 'Ficciones' },
      ], solution: 'a) Cien años de soledad, b) Veinte poemas de amor, c) La casa de los espíritus, d) Ficciones', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-3-example-2', type: 'example', title: 'Eksempel: El boom', problem: `Nevn tre forfattere fra el boom.`, solution: `García Márquez (Colombia), Cortázar (Argentina), Vargas Llosa (Peru), Carlos Fuentes (Mexico).` },
    { id: 'spansk-2-5-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-5-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene:', subTasks: [
        { label: 'a', task: 'Hva er el boom latinoamericano?', solution: 'En litterær bevegelse på 1960-70-tallet der latinamerikanske forfattere fikk internasjonal anerkjennelse.', answer: 'En litterær bevegelse på 1960-70-tallet der latinamerikanske forfattere fikk internasjonal anerkjennelse.' },
        { label: 'b', task: 'Hvem vant Nobelprisen i 1971?', solution: 'Pablo Neruda (Chile)', answer: 'Pablo Neruda (Chile)' },
        { label: 'c', task: 'Hva handler Cien años de soledad om?', solution: 'Familien Buendía gjennom syv generasjoner i den fiktive byen Macondo.', answer: 'Familien Buendía gjennom syv generasjoner i den fiktive byen Macondo.' },
        { label: 'd', task: 'Hva er forskjellen mellom magisk realisme og fantasy?', solution: 'I magisk realisme er det overnaturlige en del av hverdagen; i fantasy er det en egen verden.', answer: 'I magisk realisme er det overnaturlige en del av hverdagen; i fantasy er det en egen verden.' },
      ], solution: 'a) En litterær bevegelse på 1960-70-tallet der latinamerikanske forfattere fikk internasjonal anerkjennelse., b) Pablo Neruda (Chile), c) Familien Buendía gjennom syv generasjoner i den fiktive byen Macondo., d) I magisk realisme er det overnaturlige en del av hverdagen; i fantasy er det en egen verden.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-5-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Refleksjonsoppgaver:', subTasks: [
        { label: 'a', task: 'Hvorfor tror du magisk realisme oppsto i Latin-Amerika?', solution: 'Mulige svar: Blandingen av kulturer (urfolk, europeisk, afrikansk), mytisk tradisjon, politisk virkelighet som føles surrealistisk.', answer: 'Mulige svar: Blandingen av kulturer (urfolk, europeisk, afrikansk), mytisk tradisjon, politisk virkelighet som føles surrealistisk.' },
        { label: 'b', task: 'Sammenlign Neruda og García Márquez.', solution: 'Neruda: poet, politisk engasjert, kjærlighetslyrikk. Márquez: prosaist, magisk realisme, episk fortelling.', answer: 'Neruda: poet, politisk engasjert, kjærlighetslyrikk. Márquez: prosaist, magisk realisme, episk fortelling.' },
        { label: 'c', task: 'Hvorfor er Borges viktig?', solution: 'Han utforsket tid, uendelighet og identitet i korte, intellektuelle tekster som påvirket verdenslitteraturen.', answer: 'Han utforsket tid, uendelighet og identitet i korte, intellektuelle tekster som påvirket verdenslitteraturen.' },
        { label: 'd', task: 'Hva er la casa de los espíritus om?', solution: 'Tre generasjoner kvinner i Chile, blander familiehistorie med politisk historie og magisk realisme.', answer: 'Tre generasjoner kvinner i Chile, blander familiehistorie med politisk historie og magisk realisme.' },
      ], solution: 'a) Mulige svar: Blandingen av kulturer (urfolk, europeisk, afrikansk), mytisk tradisjon, politisk virkelighet som føles surrealistisk., b) Neruda: poet, politisk engasjert, kjærlighetslyrikk. Márquez: prosaist, magisk realisme, episk fortelling., c) Han utforsket tid, uendelighet og identitet i korte, intellektuelle tekster som påvirket verdenslitteraturen., d) Tre generasjoner kvinner i Chile, blander familiehistorie med politisk historie og magisk realisme.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-3-tip-1', type: 'tip', content: `**Anbefalt lesing:** Start med korte tekster av Borges eller Cortázar. García Márquez' noveller er lettere å lese enn romanene.` },
    { id: 'spansk-2-5-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Latinamerikanske forfattere**

- **El boom:** 1960-70-tallet, internasjonal anerkjennelse
- **Magisk realisme:** Overnaturlig + hverdagslig (García Márquez, Allende)
- **Nøkkelforfattere:** Márquez, Neruda, Borges, Allende, Vargas Llosa
- **Nobelpriser:** Neruda (1971), García Márquez (1982), Vargas Llosa (2010)` },
  ],
  exercises: [],
};

// 5.4 Análisis de textos literarios
export const CHAPTER_SPANSK_2_5_4: TextbookChapter = {
  id: 'spansk-2-5-4',
  courseId: 'spansk-2',
  chapterNumber: '5.4',
  title: 'Análisis de textos literarios',
  subtitle: 'Analyse av litterære tekster',
  description: 'Lær å analysere litterære tekster systematisk.',
  estimatedMinutes: 45,
  competenceGoals: ['analysere litterære tekster', 'skrive om litteratur'],
  content: [
    { id: 'spansk-2-5-4-intro', type: 'text', content: `## Análisis de textos literarios

Å analysere litterære tekster systematisk er en viktig ferdighet. I dette kapittelet lærer du en **trinnvis metode** for analyse og nyttige **uttrykk** for å skrive om litteratur.` },
    { id: 'spansk-2-5-4-def-1', type: 'definition', title: 'Litterær analyse (análisis literario)', content: `**Steg i litterær analyse:**

1. **Kontekst:** Forfatter, tid, bevegelse
2. **Innhold:** Handling, karakterer, tema
3. **Form:** Sjanger, struktur, fortellerteknikk
4. **Virkemidler:** Språklige og litterære grep
5. **Tolkning:** Budskap, betydning

**Nyttige uttrykk:**
- *El autor/la autora presenta...* (Forfatteren presenterer...)
- *El tema principal es...* (Hovedtemaet er...)
- *El narrador describe...* (Fortelleren beskriver...)
- *El texto trata de...* (Teksten handler om...)` },
    { id: 'spansk-2-5-4-text-1', type: 'text', content: `## Skriv en bokrapport

**Struktur:**
1. **Introducción:** Tittel, forfatter, sjanger, utgivelsesår
2. **Resumen:** Kort sammendrag av handlingen
3. **Análisis:** Tema, karakterer, virkemidler
4. **Opinión personal:** Din mening
5. **Conclusión:** Anbefaling

**Nyttige fraser:**
- *La novela fue escrita por... en...* (Romanen ble skrevet av... i...)
- *El protagonista es...* (Hovedpersonen er...)
- *En mi opinión...* (Etter min mening...)` },
    { id: 'spansk-2-5-4-text-2', type: 'text', content: `## Sitatteknikk

Når du siterer fra teksten:
- *Según el autor, "..."* (Ifølge forfatteren, "...")
- *Como dice el narrador: "..."* (Som fortelleren sier: "...")
- *En las palabras de...: "..."* (I ordene til...: "...")
- *El personaje afirma que "..."* (Karakteren hevder at "...")` },
    { id: 'spansk-2-5-4-example-1', type: 'example', title: 'Eksempel: Analysestruktur', problem: `Sett stegene i riktig rekkefølge: Tolkning, Kontekst, Virkemidler, Innhold, Form.`, solution: `1. **Kontekst** → 2. **Innhold** → 3. **Form** → 4. **Virkemidler** → 5. **Tolkning**` },
    { id: 'spansk-2-5-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-5-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match analysebegrep med spansk:', subTasks: [
        { label: 'a', task: 'Forfatter', solution: 'el autor / la autora', answer: 'el autor / la autora' },
        { label: 'b', task: 'Hovedperson', solution: 'el/la protagonista', answer: 'el/la protagonista' },
        { label: 'c', task: 'Handling', solution: 'la trama / el argumento', answer: 'la trama / el argumento' },
        { label: 'd', task: 'Budskap', solution: 'el mensaje', answer: 'el mensaje' },
      ], solution: 'a) el autor / la autora, b) el/la protagonista, c) la trama / el argumento, d) el mensaje', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-5-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig uttrykk:', subTasks: [
        { label: 'a', task: '___ principal es el amor. (Tema)', solution: 'El tema', answer: 'El tema' },
        { label: 'b', task: '___ describe un viaje. (Fortelleren)', solution: 'El narrador', answer: 'El narrador' },
        { label: 'c', task: '___ fue escrita en 1605. (Romanen)', solution: 'La novela', answer: 'La novela' },
        { label: 'd', task: 'En mi ___, el libro es interesante. (mening)', solution: 'opinión', answer: 'opinión' },
      ], solution: 'a) El tema, b) El narrador, c) La novela, d) opinión', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-4-example-2', type: 'example', title: 'Eksempel: Nyttige uttrykk', problem: `Hvordan sier du "Teksten handler om kjærlighet" på spansk?`, solution: `**El texto trata de/sobre el amor.** Eller: **El tema principal es el amor.**` },
    { id: 'spansk-2-5-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-5-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Skriv analysesetninger:', subTasks: [
        { label: 'a', task: 'Presenter forfatteren', solution: 'El autor/La autora es... nació en... y escribió...', answer: 'El autor/La autora es... nació en... y escribió...' },
        { label: 'b', task: 'Beskriv hovedtemaet', solution: 'El tema principal de la obra es...', answer: 'El tema principal de la obra es...' },
        { label: 'c', task: 'Gi din mening', solution: 'En mi opinión, esta novela es... porque...', answer: 'En mi opinión, esta novela es... porque...' },
        { label: 'd', task: 'Anbefal boken', solution: 'Recomiendo este libro porque...', answer: 'Recomiendo este libro porque...' },
      ], solution: 'a) El autor/La autora es... nació en... y escribió..., b) El tema principal de la obra es..., c) En mi opinión, esta novela es... porque..., d) Recomiendo este libro porque...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-5-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv korte analyser:', subTasks: [
        { label: 'a', task: 'Presenter Don Quijote (forfatter, sjanger, år)', solution: 'Don Quijote de la Mancha fue escrita por Miguel de Cervantes en 1605. Es una novela que...', answer: 'Don Quijote de la Mancha fue escrita por Miguel de Cervantes en 1605. Es una novela que...' },
        { label: 'b', task: 'Beskriv temaet i Don Quijote', solution: 'El tema principal es el conflicto entre el idealismo y la realidad...', answer: 'El tema principal es el conflicto entre el idealismo y la realidad...' },
        { label: 'c', task: 'Bruk et sitat og kommenter', solution: 'Según el narrador, "En un lugar de la Mancha...", lo cual sugiere que...', answer: 'Según el narrador, "En un lugar de la Mancha...", lo cual sugiere que...' },
        { label: 'd', task: 'Gi en avsluttende vurdering', solution: 'En conclusión, considero que esta obra es fundamental porque...', answer: 'En conclusión, considero que esta obra es fundamental porque...' },
      ], solution: 'a) Don Quijote de la Mancha fue escrita por Miguel de Cervantes en 1605. Es una novela que..., b) El tema principal es el conflicto entre el idealismo y la realidad..., c) Según el narrador, "En un lugar de la Mancha...", lo cual sugiere que..., d) En conclusión, considero que esta obra es fundamental porque...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-5-4-tip-1', type: 'tip', content: `**Tips for analyse:** Les teksten to ganger - først for å forstå handlingen, deretter for å identifisere virkemidler og temaer.` },
    { id: 'spansk-2-5-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Litterær analyse**

- **5 steg:** Kontekst → Innhold → Form → Virkemidler → Tolkning
- **Bokrapport:** Introduksjon, resumen, análisis, opinión, conclusión
- **Uttrykk:** El texto trata de..., El tema principal es..., En mi opinión...
- **Sitatteknikk:** Según el autor, Como dice el narrador` },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: CULTURA Y SOCIEDAD
// ============================================================================

// 6.1 Fiestas y tradiciones
export const CHAPTER_SPANSK_2_6_1: TextbookChapter = {
  id: 'spansk-2-6-1',
  courseId: 'spansk-2',
  chapterNumber: '6.1',
  title: 'Fiestas y tradiciones',
  subtitle: 'Fester og tradisjoner',
  description: 'Lær om fester og tradisjoner i den spansktalende verden.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive fester og tradisjoner', 'sammenligne kulturer'],
  content: [
    { id: 'spansk-2-6-1-intro', type: 'text', content: `## Fiestas y tradiciones

Den spansktalende verden er rik på fester og tradisjoner som gjenspeiler historie, religion og kultur. Å kjenne disse tradisjonene hjelper deg å forstå kulturen bedre.` },
    { id: 'spansk-2-6-1-def-1', type: 'definition', title: 'Viktige fester i den spansktalende verden', content: `| Fest | Land | Tid |
|------|------|-----|
| La Semana Santa | Spania | Mars/april |
| Los Sanfermines | Pamplona | Juli |
| El Día de los Muertos | Mexico | 1-2. nov |
| Las Fallas | Valencia | Mars |
| La Tomatina | Buñol | August |
| Carnaval | Mange land | Februar |` },
    { id: 'spansk-2-6-1-text-1', type: 'text', content: `## Semana Santa

Den hellige uken før påske feires med **prosesjon** i mange spanske byer. Sevilla er mest kjent. Religiøse bilder bæres gjennom gatene, og det er musikk, røkelse og dype tradisjoner.

## Día de los Muertos

I Mexico (1-2. november) hedres de døde med fargerike **altare** (ofrendas), **cempasúchil**-blomster (ringblomster), mat, drikke og musikk. Det er en feiring av livet, ikke sorg.` },
    { id: 'spansk-2-6-1-text-2', type: 'text', content: `## Sammenligne fester

Nyttige uttrykk:
- *En España se celebra...* (I Spania feirer man...)
- *A diferencia de Noruega...* (Til forskjell fra Norge...)
- *Es similar a...* (Det ligner på...)
- *Mientras que en México...* (Mens i Mexico...)` },
    { id: 'spansk-2-6-1-example-1', type: 'example', title: 'Eksempel: Beskrive en fest', problem: `Beskriv Día de los Muertos med 2-3 setninger.`, solution: `El Día de los Muertos se celebra en México el 1 y 2 de noviembre. Las familias crean altares con flores, comida y fotos para honrar a los difuntos. Es una celebración de la vida, no del luto.` },
    { id: 'spansk-2-6-1-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-6-1-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match fest med land/by:', subTasks: [
        { label: 'a', task: 'Los Sanfermines', solution: 'Pamplona, España', answer: 'Pamplona, España' },
        { label: 'b', task: 'El Día de los Muertos', solution: 'México', answer: 'México' },
        { label: 'c', task: 'Las Fallas', solution: 'Valencia, España', answer: 'Valencia, España' },
        { label: 'd', task: 'La Tomatina', solution: 'Buñol, España', answer: 'Buñol, España' },
      ], solution: 'a) Pamplona, España, b) México, c) Valencia, España, d) Buñol, España', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-1-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-6-1-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant:', subTasks: [
        { label: 'a', task: 'Día de los Muertos er en trist fest.', solution: 'Usant - det er en feiring av livet.', answer: 'Usant - det er en feiring av livet.' },
        { label: 'b', task: 'Semana Santa feires før påske.', solution: 'Sant', answer: 'Sant' },
        { label: 'c', task: 'La Tomatina handler om å kaste tomater.', solution: 'Sant', answer: 'Sant' },
        { label: 'd', task: 'Las Fallas er en musikkfestival.', solution: 'Usant - det er en fest med store figurer som brennes.', answer: 'Usant - det er en fest med store figurer som brennes.' },
      ], solution: 'a) Usant - det er en feiring av livet., b) Sant, c) Sant, d) Usant - det er en fest med store figurer som brennes.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-1-example-2', type: 'example', title: 'Eksempel: Sammenligne', problem: `Sammenlign Día de los Muertos med norsk Allehelgensdag.`, solution: `A diferencia de Noruega, donde se visitan las tumbas, en México se hace una fiesta con música y comida. En Noruega es más solemne, mientras que en México es una celebración colorida.` },
    { id: 'spansk-2-6-1-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-6-1-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Beskriv festen med spanske uttrykk:', subTasks: [
        { label: 'a', task: 'Semana Santa: Hva skjer?', solution: 'Se celebran procesiones religiosas por las calles.', answer: 'Se celebran procesiones religiosas por las calles.' },
        { label: 'b', task: 'Día de los Muertos: Hva gjør familiene?', solution: 'Las familias crean altares y ofrendas para los difuntos.', answer: 'Las familias crean altares y ofrendas para los difuntos.' },
        { label: 'c', task: 'Los Sanfermines: Hva er det?', solution: 'Es una fiesta en Pamplona donde la gente corre delante de los toros.', answer: 'Es una fiesta en Pamplona donde la gente corre delante de los toros.' },
        { label: 'd', task: 'La Tomatina: Beskriv.', solution: 'Es una fiesta donde la gente se tira tomates en las calles de Buñol.', answer: 'Es una fiesta donde la gente se tira tomates en las calles de Buñol.' },
      ], solution: 'a) Se celebran procesiones religiosas por las calles., b) Las familias crean altares y ofrendas para los difuntos., c) Es una fiesta en Pamplona donde la gente corre delante de los toros., d) Es una fiesta donde la gente se tira tomates en las calles de Buñol.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-1-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-6-1-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en sammenligning (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Sammenlign en spansk fest med en norsk.', solution: 'En España se celebra la Semana Santa con procesiones religiosas. A diferencia de Noruega, donde la Semana Santa se pasa en la montaña...', answer: 'En España se celebra la Semana Santa con procesiones religiosas. A diferencia de Noruega, donde la Semana Santa se pasa en la montaña...' },
        { label: 'b', task: 'Hva kan vi lære av Día de los Muertos?', solution: 'El Día de los Muertos nos enseña que podemos recordar a los muertos con alegría y celebración, no solo con tristeza.', answer: 'El Día de los Muertos nos enseña que podemos recordar a los muertos con alegría y celebración, no solo con tristeza.' },
        { label: 'c', task: 'Hvilken fest ville du gjerne oppleve?', solution: 'Me gustaría asistir a... porque... Me parece interesante que...', answer: 'Me gustaría asistir a... porque... Me parece interesante que...' },
        { label: 'd', task: 'Finn likheter mellom to fester.', solution: 'Tanto la Semana Santa como el Día de los Muertos tienen un aspecto religioso y tradicional...', answer: 'Tanto la Semana Santa como el Día de los Muertos tienen un aspecto religioso y tradicional...' },
      ], solution: 'a) En España se celebra la Semana Santa con procesiones religiosas. A diferencia de Noruega, donde la Semana Santa se pasa en la montaña..., b) El Día de los Muertos nos enseña que podemos recordar a los muertos con alegría y celebración, no solo con tristeza., c) Me gustaría asistir a... porque... Me parece interesante que..., d) Tanto la Semana Santa como el Día de los Muertos tienen un aspecto religioso y tradicional...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-1-tip-1', type: 'tip', content: `**Kulturtips:** Fester er en god inngang til å forstå et lands verdier. Spør deg: Hva feirer de? Hvorfor? Hvem deltar?` },
    { id: 'spansk-2-6-1-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Fester og tradisjoner**

- **Spania:** Semana Santa, Sanfermines, Fallas, Tomatina
- **Mexico:** Día de los Muertos
- **Mange land:** Carnaval, Navidad
- **Uttrykk:** Se celebra, a diferencia de, es similar a` },
  ],
  exercises: [],
};

// 6.2 La vida cotidiana
export const CHAPTER_SPANSK_2_6_2: TextbookChapter = {
  id: 'spansk-2-6-2',
  courseId: 'spansk-2',
  chapterNumber: '6.2',
  title: 'La vida cotidiana',
  subtitle: 'Hverdagslivet i spansktalende land',
  description: 'Forstå hverdagslivet i Spania og Latin-Amerika.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive hverdagsliv', 'sammenligne med norsk hverdag'],
  content: [
    { id: 'spansk-2-6-2-intro', type: 'text', content: `## La vida cotidiana

Hverdagslivet i spansktalende land kan være ganske forskjellig fra norsk hverdag. Måltidstider, sosiale vaner og daglige rutiner reflekterer kulturelle verdier.` },
    { id: 'spansk-2-6-2-def-1', type: 'definition', title: 'Hverdagslivet (la vida cotidiana)', content: `**Daglige rutiner i Spania:**

| Tid | Aktivitet |
|-----|----------|
| 7:00-8:00 | Desayuno (frokost - lett) |
| 9:00-14:00 | Trabajo/Escuela |
| 14:00-15:00 | Comida (middag - hovedmåltid) |
| 15:00-17:00 | Siesta / descanso |
| 17:00-20:00 | Trabajo/actividades |
| 21:00-22:00 | Cena (kveldsmat) |

**I Latin-Amerika** varierer rutinene mye fra land til land.` },
    { id: 'spansk-2-6-2-text-1', type: 'text', content: `## Måltider

**Spania:**
- **Desayuno** (7-9): Lett - kaffe og brød/croissant
- **Comida** (14-15): Hovedmåltid - flere retter
- **Merienda** (17-18): Mellommåltid - kaffe, kake
- **Cena** (21-22): Lettere kveldsmat

**Forskjell fra Norge:** I Spania er lunsjen (comida) det viktigste måltidet, og middagen (cena) spises sent.` },
    { id: 'spansk-2-6-2-text-2', type: 'text', content: `## Sosiale vaner

- **Tiltale:** *Tú* (uformelt) vs. *usted* (formelt)
- **Hilsing:** To kyss på kinnet (Spania), håndtrykk
- **Tid:** Mer fleksibel holdning til tid
- **Familie:** Sterk familiebinding, bo hjemme lenger
- **Sosial tid:** Café, paseo (tur), tertulia (samtale)` },
    { id: 'spansk-2-6-2-example-1', type: 'example', title: 'Eksempel: Beskriv en dag', problem: `Beskriv en typisk dag i Spania.`, solution: `Un español típicamente desayuna ligero, trabaja hasta las 14:00, come el almuerzo principal, descansa, vuelve al trabajo y cena tarde, sobre las 21:00-22:00.` },
    { id: 'spansk-2-6-2-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-6-2-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match spansk med norsk:', subTasks: [
        { label: 'a', task: 'el desayuno', solution: 'frokost', answer: 'frokost' },
        { label: 'b', task: 'la comida', solution: 'lunsj/middag (hovedmåltid)', answer: 'lunsj/middag (hovedmåltid)' },
        { label: 'c', task: 'la merienda', solution: 'mellommåltid', answer: 'mellommåltid' },
        { label: 'd', task: 'la cena', solution: 'kveldsmat/middag', answer: 'kveldsmat/middag' },
      ], solution: 'a) frokost, b) lunsj/middag (hovedmåltid), c) mellommåltid, d) kveldsmat/middag', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-2-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-6-2-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Sant eller usant om Spania:', subTasks: [
        { label: 'a', task: 'Spanjolene spiser middag kl. 14.', solution: 'Sant', answer: 'Sant' },
        { label: 'b', task: 'Kveldsmat spises kl. 18.', solution: 'Usant - kl. 21-22', answer: 'Usant - kl. 21-22' },
        { label: 'c', task: 'Frokost er det viktigste måltidet.', solution: 'Usant - lunsj (comida) er viktigst', answer: 'Usant - lunsj (comida) er viktigst' },
        { label: 'd', task: 'Man hilser med to kyss.', solution: 'Sant (mellom venner)', answer: 'Sant (mellom venner)' },
      ], solution: 'a) Sant, b) Usant - kl. 21-22, c) Usant - lunsj (comida) er viktigst, d) Sant (mellom venner)', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-2-example-2', type: 'example', title: 'Eksempel: Sammenligning', problem: `Hva er den største forskjellen mellom norsk og spansk hverdag?`, solution: `La mayor diferencia es el horario de las comidas: en España se come a las 14:00 y se cena a las 21:00-22:00, mientras que en Noruega se cena sobre las 17:00-18:00.` },
    { id: 'spansk-2-6-2-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-6-2-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Beskriv norsk vs. spansk hverdag:', subTasks: [
        { label: 'a', task: 'Frokost i Norge vs. Spania', solution: 'En Noruega el desayuno es más completo; en España es muy ligero.', answer: 'En Noruega el desayuno es más completo; en España es muy ligero.' },
        { label: 'b', task: 'Middagstid', solution: 'En Noruega se cena a las 17-18; en España a las 21-22.', answer: 'En Noruega se cena a las 17-18; en España a las 21-22.' },
        { label: 'c', task: 'Sosiale vaner', solution: 'Los españoles pasan más tiempo en cafés y plazas; los noruegos prefieren actividades al aire libre.', answer: 'Los españoles pasan más tiempo en cafés y plazas; los noruegos prefieren actividades al aire libre.' },
        { label: 'd', task: 'Familie', solution: 'En España los jóvenes viven con sus padres hasta más tarde que en Noruega.', answer: 'En España los jóvenes viven con sus padres hasta más tarde que en Noruega.' },
      ], solution: 'a) En Noruega el desayuno es más completo; en España es muy ligero., b) En Noruega se cena a las 17-18; en España a las 21-22., c) Los españoles pasan más tiempo en cafés y plazas; los noruegos prefieren actividades al aire libre., d) En España los jóvenes viven con sus padres hasta más tarde que en Noruega.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-2-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-6-2-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Skriv en sammenligning (3-4 setninger):', subTasks: [
        { label: 'a', task: 'Sammenlign en typisk dag', solution: 'Un día típico en España empieza más tarde y termina más tarde que en Noruega...', answer: 'Un día típico en España empieza más tarde y termina más tarde que en Noruega...' },
        { label: 'b', task: 'Diskuter fordeler og ulemper', solution: 'La siesta tiene ventajas para la salud, pero puede ser un problema para la productividad...', answer: 'La siesta tiene ventajas para la salud, pero puede ser un problema para la productividad...' },
        { label: 'c', task: 'Hva ville du foretrukket?', solution: 'Personalmente, preferiría... porque...', answer: 'Personalmente, preferiría... porque...' },
        { label: 'd', task: 'Hva kan vi lære?', solution: 'Podemos aprender de los españoles a disfrutar más de la vida social y de las comidas en familia.', answer: 'Podemos aprender de los españoles a disfrutar más de la vida social y de las comidas en familia.' },
      ], solution: 'a) Un día típico en España empieza más tarde y termina más tarde que en Noruega..., b) La siesta tiene ventajas para la salud, pero puede ser un problema para la productividad..., c) Personalmente, preferiría... porque..., d) Podemos aprender de los españoles a disfrutar más de la vida social y de las comidas en familia.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-2-tip-1', type: 'tip', content: `**Husk:** Stereotypier er forenklinger. Ikke alle spanjolene tar siesta, og hverdagen varierer enormt mellom by og land, og mellom generasjoner.` },
    { id: 'spansk-2-6-2-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Hverdagsliv**

- **Måltider:** desayuno (lett), comida (hovedmåltid kl. 14), cena (sent)
- **Sosiale vaner:** Kaféliv, paseo, familietid
- **Forskjeller fra Norge:** Senere måltider, mer sosial tid, sterkere familieband
- **Viktig:** Unngå stereotypier - stor variasjon` },
  ],
  exercises: [],
};

// 6.3 Comparar culturas
export const CHAPTER_SPANSK_2_6_3: TextbookChapter = {
  id: 'spansk-2-6-3',
  courseId: 'spansk-2',
  chapterNumber: '6.3',
  title: 'Comparar culturas',
  subtitle: 'Sammenligne kulturer',
  description: 'Lær å sammenligne norsk og spansktalende kultur.',
  estimatedMinutes: 45,
  competenceGoals: ['sammenligne kulturer', 'reflektere over kulturforskjeller'],
  content: [
    { id: 'spansk-2-6-3-intro', type: 'text', content: `## Comparar culturas

Å sammenligne kulturer er en viktig del av språklæring. Det handler ikke om å bedømme hvilken kultur som er "best", men å forstå **forskjeller og likheter** og å utvikle **interkulturell forståelse**.` },
    { id: 'spansk-2-6-3-def-1', type: 'definition', title: 'Kultursammenligning', content: `**Nyttige uttrykk for sammenligning:**

| Spansk | Norsk |
|--------|-------|
| A diferencia de | Til forskjell fra |
| En cambio | Derimot |
| Sin embargo | Likevel |
| Igual que | Likt som |
| Mientras que | Mens |
| Al contrario | Tvert imot |
| En comparación con | Sammenlignet med |
| Tanto... como... | Både... og... |` },
    { id: 'spansk-2-6-3-text-1', type: 'text', content: `## Kulturelle dimensjoner

**Tid:** I Spania/Latin-Amerika er holdningen til tid ofte mer fleksibel enn i Norge. Å komme 15-30 minutter "sent" er ofte akseptabelt sosialt.

**Kommunikasjon:** Spansktalende kulturer er ofte mer direkte i følelsesuttrykk, bruker mer kroppsspråk og snakker nærmere hverandre.

**Individualisme vs. kollektivisme:** Mange spansktalende kulturer vektlegger familie og fellesskap sterkere enn individuell uavhengighet.` },
    { id: 'spansk-2-6-3-text-2', type: 'text', content: `## Stereotypier vs. virkelighet

Stereotypier er forenklinger som kan være skadelige:
- ❌ "Alle spanjolene er late" (siesta-myten)
- ❌ "Latin-Amerika er farlig"
- ✅ Spania har andre arbeidstider enn Norge
- ✅ Latin-Amerika er et mangfoldig kontinent

**Viktig:** Individuelle forskjeller er større enn kulturelle forskjeller.` },
    { id: 'spansk-2-6-3-example-1', type: 'example', title: 'Eksempel: Sammenligning', problem: `Sammenlign holdningen til tid i Norge og Spania.`, solution: `En Noruega la puntualidad es muy importante. **A diferencia de** Noruega, en España hay más flexibilidad con el tiempo en situaciones sociales. **Sin embargo**, en el trabajo la puntualidad también es importante en España.` },
    { id: 'spansk-2-6-3-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-6-3-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Fyll inn riktig sammenligningsuttrykk:', subTasks: [
        { label: 'a', task: '___ Noruega, en España se come más tarde.', solution: 'A diferencia de', answer: 'A diferencia de' },
        { label: 'b', task: 'En Noruega nieva mucho. ___, en España hace calor.', solution: 'En cambio', answer: 'En cambio' },
        { label: 'c', task: '___ en Noruega ___ en España la familia es importante.', solution: 'Tanto... como...', answer: 'Tanto... como...' },
        { label: 'd', task: 'Los españoles hablan alto. ___, es normal en su cultura.', solution: 'Sin embargo', answer: 'Sin embargo' },
      ], solution: 'a) A diferencia de, b) En cambio, c) Tanto... como..., d) Sin embargo', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-3-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-6-3-ex-2', number: '2', type: 'classic', difficulty: 'medium', task: 'Skriv sammenligninger:', subTasks: [
        { label: 'a', task: 'Norge: kaldt. Spania: varmt.', solution: 'A diferencia de Noruega, donde hace frío, en España hace calor.', answer: 'A diferencia de Noruega, donde hace frío, en España hace calor.' },
        { label: 'b', task: 'Begge: demokrati.', solution: 'Tanto Noruega como España son democracias.', answer: 'Tanto Noruega como España son democracias.' },
        { label: 'c', task: 'Norge: tidlig middag. Spania: sen middag.', solution: 'En Noruega se cena temprano, mientras que en España se cena tarde.', answer: 'En Noruega se cena temprano, mientras que en España se cena tarde.' },
        { label: 'd', task: 'Begge: likestilling viktig.', solution: 'Igual que en Noruega, en España la igualdad es un valor importante.', answer: 'Igual que en Noruega, en España la igualdad es un valor importante.' },
      ], solution: 'a) A diferencia de Noruega, donde hace frío, en España hace calor., b) Tanto Noruega como España son democracias., c) En Noruega se cena temprano, mientras que en España se cena tarde., d) Igual que en Noruega, en España la igualdad es un valor importante.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-3-example-2', type: 'example', title: 'Eksempel: Stereotypier', problem: `Er dette en stereotypi eller et faktum? "Spanjolene spiser middag sent."`, solution: `Det er et **faktum basert på generell praksis** - måltidstidene er genuint senere i Spania. Men det er viktig å huske at det er individuelle variasjoner.` },
    { id: 'spansk-2-6-3-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-6-3-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Er dette stereotypi eller faktum?', subTasks: [
        { label: 'a', task: 'Alle latinamerikanere danser salsa.', solution: 'Stereotypi - ikke alle danser salsa.', answer: 'Stereotypi - ikke alle danser salsa.' },
        { label: 'b', task: 'Spania er et EU-medlem.', solution: 'Faktum.', answer: 'Faktum.' },
        { label: 'c', task: 'Latinamerikanere er alltid glade.', solution: 'Stereotypi.', answer: 'Stereotypi.' },
        { label: 'd', task: 'I Mexico feires Día de los Muertos.', solution: 'Faktum.', answer: 'Faktum.' },
      ], solution: 'a) Stereotypi - ikke alle danser salsa., b) Faktum., c) Stereotypi., d) Faktum.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-3-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-6-3-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Refleksjon - skriv 2-3 setninger:', subTasks: [
        { label: 'a', task: 'Hva har du lært om kulturforskjeller?', solution: 'He aprendido que las diferencias culturales son fascinantes y que no debemos juzgar...', answer: 'He aprendido que las diferencias culturales son fascinantes y que no debemos juzgar...' },
        { label: 'b', task: 'Hvordan kan vi unngå stereotypier?', solution: 'Podemos evitar los estereotipos conociendo a personas de otras culturas y viajando...', answer: 'Podemos evitar los estereotipos conociendo a personas de otras culturas y viajando...' },
        { label: 'c', task: 'Hva er likt mellom Norge og Spania?', solution: 'Tanto Noruega como España valoran la educación, la democracia y la igualdad...', answer: 'Tanto Noruega como España valoran la educación, la democracia y la igualdad...' },
        { label: 'd', task: 'Hva vil du lære mer om?', solution: 'Me gustaría aprender más sobre... porque...', answer: 'Me gustaría aprender más sobre... porque...' },
      ], solution: 'a) He aprendido que las diferencias culturales son fascinantes y que no debemos juzgar..., b) Podemos evitar los estereotipos conociendo a personas de otras culturas y viajando..., c) Tanto Noruega como España valoran la educación, la democracia y la igualdad..., d) Me gustaría aprender más sobre... porque...', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-3-tip-1', type: 'tip', content: `**Interkulturell kompetanse:** Det handler ikke om å dømme, men å forstå. Spør deg: Hvorfor gjør de det annerledes? Hva kan jeg lære?` },
    { id: 'spansk-2-6-3-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Kultursammenligning**

- **Uttrykk:** a diferencia de, en cambio, sin embargo, igual que, mientras que
- **Dimensjoner:** Tid, kommunikasjon, individualisme/kollektivisme
- **Viktig:** Unngå stereotypier, respekter forskjeller
- **Mål:** Interkulturell forståelse` },
  ],
  exercises: [],
};

// 6.4 Diversidad cultural
export const CHAPTER_SPANSK_2_6_4: TextbookChapter = {
  id: 'spansk-2-6-4',
  courseId: 'spansk-2',
  chapterNumber: '6.4',
  title: 'Diversidad cultural',
  subtitle: 'Kulturelt mangfold i den spansktalende verden',
  description: 'Utforsk det kulturelle mangfoldet.',
  estimatedMinutes: 45,
  competenceGoals: ['kjenne kulturelt mangfold', 'respektere kulturelle forskjeller'],
  content: [
    { id: 'spansk-2-6-4-intro', type: 'text', content: `## Diversidad cultural

Den spansktalende verden er **ikke** en enhetlig kultur. Det er et enormt mangfold av urfolkskulturer, regionale tradisjoner, språk og identiteter.` },
    { id: 'spansk-2-6-4-def-1', type: 'definition', title: 'Kulturelt mangfold (diversidad cultural)', content: `**Den spansktalende verden** omfatter 21 land med enorm variasjon:

**Urfolkskulturer:**
- Maya (Mexico, Guatemala)
- Azteca/Mexica (Mexico)
- Inca/Quechua (Peru, Bolivia, Ecuador)
- Mapuche (Chile, Argentina)

**Språklig mangfold:**
- Quechua (~8 mill. talere)
- Guaraní (Paraguay - offisielt språk)
- Náhuatl (Mexico)
- Catalán, Euskera, Gallego (Spania)` },
    { id: 'spansk-2-6-4-text-1', type: 'text', content: `## Regionale forskjeller i Spania

**Cataluña:** Eget språk (catalán), sterk regional identitet
**País Vasco:** Euskera (unikt språk uten slektskap), sterk autonomi
**Galicia:** Gallego (ligner portugisisk), keltisk innflytelse
**Andalucía:** Flamenco, maurisk arv, distinkt aksent

Spania er **ikke** ett folk - det er et mangfold av kulturer og språk.` },
    { id: 'spansk-2-6-4-text-2', type: 'text', content: `## Urfolkskulturer i Latin-Amerika

Urfolkskulturer lever videre i dag:
- **Bolivia:** Evo Morales var første urfolkspresidenten
- **Guatemala:** Maya-kulturen er fortsatt levende
- **Peru:** Quechua og aimara er offisielle språk
- **Mexico:** Mange urfolksgrupper bevarer tradisjonene

Denne kulturelle rikdommen er en viktig del av Latin-Amerikas identitet.` },
    { id: 'spansk-2-6-4-example-1', type: 'example', title: 'Eksempel: Mangfold', problem: `Nevn tre urfolkskulturer i Latin-Amerika.`, solution: `Maya (Mexico/Guatemala), Inca/Quechua (Peru/Bolivia), Mapuche (Chile/Argentina). Andre: Azteca, Guaraní, Aymara.` },
    { id: 'spansk-2-6-4-ex-block-1', type: 'exercise', exercise: { id: 'spansk-2-6-4-ex-1', number: '1', type: 'classic', difficulty: 'lett', task: 'Match urfolkskultur med region:', subTasks: [
        { label: 'a', task: 'Maya', solution: 'Mexico og Guatemala', answer: 'Mexico og Guatemala' },
        { label: 'b', task: 'Inca', solution: 'Peru og Bolivia', answer: 'Peru og Bolivia' },
        { label: 'c', task: 'Mapuche', solution: 'Chile og Argentina', answer: 'Chile og Argentina' },
        { label: 'd', task: 'Guaraní', solution: 'Paraguay', answer: 'Paraguay' },
      ], solution: 'a) Mexico og Guatemala, b) Peru og Bolivia, c) Chile og Argentina, d) Paraguay', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-4-ex-block-2', type: 'exercise', exercise: { id: 'spansk-2-6-4-ex-2', number: '2', type: 'classic', difficulty: 'lett', task: 'Match region med språk:', subTasks: [
        { label: 'a', task: 'Cataluña', solution: 'Catalán', answer: 'Catalán' },
        { label: 'b', task: 'País Vasco', solution: 'Euskera', answer: 'Euskera' },
        { label: 'c', task: 'Galicia', solution: 'Gallego', answer: 'Gallego' },
        { label: 'd', task: 'Paraguay', solution: 'Guaraní', answer: 'Guaraní' },
      ], solution: 'a) Catalán, b) Euskera, c) Gallego, d) Guaraní', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-4-example-2', type: 'example', title: 'Eksempel: Spania', problem: `Hvilke språk snakkes i Spania?`, solution: `Castellano (spansk), catalán, euskera (baskisk), gallego, og valenciano. Castellano er det eneste offisielle språket i hele landet.` },
    { id: 'spansk-2-6-4-ex-block-3', type: 'exercise', exercise: { id: 'spansk-2-6-4-ex-3', number: '3', type: 'classic', difficulty: 'medium', task: 'Svar på spørsmålene:', subTasks: [
        { label: 'a', task: 'Hvor mange land har spansk som offisielt språk?', solution: '21 land (inkludert Spania)', answer: '21 land (inkludert Spania)' },
        { label: 'b', task: 'Hva er spesielt med euskera?', solution: 'Det er et isolert språk uten kjent slektskap med andre språk.', answer: 'Det er et isolert språk uten kjent slektskap med andre språk.' },
        { label: 'c', task: 'Hva er quechua?', solution: 'Et urfolksspråk med ca. 8 millioner talere i Peru, Bolivia og Ecuador.', answer: 'Et urfolksspråk med ca. 8 millioner talere i Peru, Bolivia og Ecuador.' },
        { label: 'd', task: 'Hvorfor er mangfold viktig?', solution: 'Fordi det beriker kulturen og gir ulike perspektiver.', answer: 'Fordi det beriker kulturen og gir ulike perspektiver.' },
      ], solution: 'a) 21 land (inkludert Spania), b) Det er et isolert språk uten kjent slektskap med andre språk., c) Et urfolksspråk med ca. 8 millioner talere i Peru, Bolivia og Ecuador., d) Fordi det beriker kulturen og gir ulike perspektiver.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-4-ex-block-4', type: 'exercise', exercise: { id: 'spansk-2-6-4-ex-4', number: '4', type: 'classic', difficulty: 'vanskelig', task: 'Refleksjonsoppgaver:', subTasks: [
        { label: 'a', task: 'Sammenlign mangfold i Spania og Norge.', solution: 'Tanto España como Noruega tienen minorías linguísticas (samisk/catalán). A diferencia de España, Noruega tiene solo un idioma oficial principal...', answer: 'Tanto España como Noruega tienen minorías linguísticas (samisk/catalán). A diferencia de España, Noruega tiene solo un idioma oficial principal...' },
        { label: 'b', task: 'Hvorfor er det viktig å bevare urfolksspråk?', solution: 'Es importante preservar las lenguas indígenas porque representan conocimientos, tradiciones y visiones del mundo únicas.', answer: 'Es importante preservar las lenguas indígenas porque representan conocimientos, tradiciones y visiones del mundo únicas.' },
        { label: 'c', task: 'Diskuter begrepet "latinamerikansk kultur".', solution: 'No existe una sola cultura latinoamericana. Hay una enorme diversidad de culturas, tradiciones y lenguas...', answer: 'No existe una sola cultura latinoamericana. Hay una enorme diversidad de culturas, tradiciones y lenguas...' },
        { label: 'd', task: 'Hva kan vi lære av kulturelt mangfold?', solution: 'Podemos aprender a respetar las diferencias, valorar la diversidad y enriquecer nuestra propia cultura.', answer: 'Podemos aprender a respetar las diferencias, valorar la diversidad y enriquecer nuestra propia cultura.' },
      ], solution: 'a) Tanto España como Noruega tienen minorías linguísticas (samisk/catalán). A diferencia de España, Noruega tiene solo un idioma oficial principal..., b) Es importante preservar las lenguas indígenas porque representan conocimientos, tradiciones y visiones del mundo únicas., c) No existe una sola cultura latinoamericana. Hay una enorme diversidad de culturas, tradiciones y lenguas..., d) Podemos aprender a respetar las diferencias, valorar la diversidad y enriquecer nuestra propia cultura.', hints: ['Se teorien over', 'Sjekk eksemplene'] } },
    { id: 'spansk-2-6-4-tip-1', type: 'tip', content: `**Respekt for mangfold:** Å lære et språk handler også om å forstå at det finnes mange måter å leve på. Mangfold er en rikdom, ikke et problem.` },
    { id: 'spansk-2-6-4-note-1', type: 'note', title: 'Oppsummering', content: `**Oppsummering: Kulturelt mangfold**

- **21 land** med spansk som offisielt språk
- **Urfolk:** Maya, Inca, Mapuche, Guaraní, Azteca
- **Spania:** Cataluña, País Vasco, Galicia - egne språk og kulturer
- **Språk:** Quechua, guaraní, náhuatl, catalán, euskera, gallego
- **Nøkkel:** Mangfold er rikdom` },
  ],
  exercises: [],
};

export const SPANSK_2_CHAPTERS_4_6: TextbookChapter[] = [
  CHAPTER_SPANSK_2_4_1,
  CHAPTER_SPANSK_2_4_2,
  CHAPTER_SPANSK_2_4_3,
  CHAPTER_SPANSK_2_4_4,
  CHAPTER_SPANSK_2_5_1,
  CHAPTER_SPANSK_2_5_2,
  CHAPTER_SPANSK_2_5_3,
  CHAPTER_SPANSK_2_5_4,
  CHAPTER_SPANSK_2_6_1,
  CHAPTER_SPANSK_2_6_2,
  CHAPTER_SPANSK_2_6_3,
  CHAPTER_SPANSK_2_6_4,
];
