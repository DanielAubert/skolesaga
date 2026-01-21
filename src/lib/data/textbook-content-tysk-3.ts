/* eslint-disable */
// @ts-nocheck
/**
 * Tysk nivå 3 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 3
 * Avansert tysk for elever som har fullført nivå 1 og 2
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Konjunktiv I (indirekte tale)
// ============================================================================

export const CHAPTER_TYSK_3_1: TextbookChapter = {
  id: 'tysk-3-1',
  courseId: 'tysk-3',
  chapterNumber: '1',
  title: 'Konjunktiv I - Indirekte Rede',
  description: 'Lær å bruke Konjunktiv I for å gjengi hva andre har sagt (indirekte tale).',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke avanserte grammatiske strukturer',
    'gjengi andres utsagn korrekt',
    'skille mellom direkte og indirekte tale',
  ],
  content: [
    {
      id: 'tysk-3-1-intro',
      type: 'text',
      content: `Konjunktiv I er en viktig grammatisk form i tysk som brukes primært for å gjengi hva andre har sagt (indirekte tale). Dette er spesielt vanlig i journalistikk, akademiske tekster og formell kommunikasjon.`,
    },
    {
      id: 'tysk-3-1-def-1',
      type: 'definition',
      title: 'Konjunktiv I - Dannelse',
      content: `Konjunktiv I dannes fra verbets stamme (infinitiv uten -en) + spesifikke endelser:

| Person | Endelse | sein | haben | können |
|--------|---------|------|-------|--------|
| ich | -e | sei | habe | könne |
| du | -est | seist | habest | könnest |
| er/sie/es | -e | sei | habe | könne |
| wir | -en | seien | haben | können |
| ihr | -et | seiet | habet | könnet |
| sie/Sie | -en | seien | haben | können |`,
    },
    {
      id: 'tysk-3-1-text-1',
      type: 'text',
      content: `**Direkte tale vs. Indirekte tale**

| Direkte tale | Indirekte tale (Konjunktiv I) |
|--------------|------------------------------|
| Er sagt: "Ich bin müde." | Er sagt, er sei müde. |
| Sie sagt: "Ich habe Zeit." | Sie sagt, sie habe Zeit. |
| Er meint: "Das ist richtig." | Er meint, das sei richtig. |`,
    },
    {
      id: 'tysk-3-1-note-1',
      type: 'note',
      content: `Når Konjunktiv I-formen er identisk med indikativ (som ofte skjer med "wir", "sie" og mange verb), bruker man Konjunktiv II i stedet for å markere indirekte tale tydelig.`,
    },
    {
      id: 'tysk-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Nyhetsrapportering',
      content: `**Direkte sitat:**
Der Minister sagt: "Die Wirtschaft wächst schnell."
*(Ministeren sier: "Økonomien vokser raskt.")*

**Indirekte tale med Konjunktiv I:**
Der Minister sagt, die Wirtschaft wachse schnell.
*(Ministeren sier at økonomien vokser raskt.)*`,
    },
    {
      id: 'tysk-3-1-text-2',
      type: 'text',
      content: `**Vanlige innledningsverb for indirekte tale**

| Tysk | Norsk |
|------|-------|
| sagen | si |
| behaupten | påstå |
| erklären | forklare/erklære |
| meinen | mene |
| berichten | rapportere |
| betonen | understreke |
| antworten | svare |`,
    },
    {
      id: 'tysk-3-1-tip-1',
      type: 'tip',
      content: `I muntlig tysk brukes ofte indikativ med "dass" i stedet for Konjunktiv I: "Er sagt, dass er müde ist." Men i skriftlig tysk, spesielt i journalistikk, foretrekkes Konjunktiv I.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er Konjunktiv I-formen av "sein" i tredje person entall?',
      options: [
        { id: 'a', text: 'ist', isCorrect: false, feedback: '"Ist" er indikativ.' },
        { id: 'b', text: 'sei', isCorrect: true },
        { id: 'c', text: 'wäre', isCorrect: false, feedback: '"Wäre" er Konjunktiv II.' },
        { id: 'd', text: 'seid', isCorrect: false, feedback: '"Seid" er indikativ flertall.' },
      ],
      solution: 'Konjunktiv I av "sein" i tredje person entall er "sei".',
    },
    {
      id: 'tysk-3-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan gjengir du "Ich bin krank" i indirekte tale etter "Er sagt"?',
      options: [
        { id: 'a', text: 'Er sagt, er ist krank.', isCorrect: false, feedback: 'Dette er indikativ, ikke Konjunktiv I.' },
        { id: 'b', text: 'Er sagt, er sei krank.', isCorrect: true },
        { id: 'c', text: 'Er sagt, er wäre krank.', isCorrect: false, feedback: '"Wäre" er Konjunktiv II.' },
        { id: 'd', text: 'Er sagt, er bin krank.', isCorrect: false, feedback: 'Feil personbøyning.' },
      ],
      solution: 'I indirekte tale brukes Konjunktiv I: "Er sagt, er sei krank."',
    },
    {
      id: 'tysk-3-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Gjør om til indirekte tale: Sie sagt: "Ich habe keine Zeit."',
      options: [
        { id: 'a', text: 'Sie sagt, sie hat keine Zeit.', isCorrect: false, feedback: 'Dette er indikativ.' },
        { id: 'b', text: 'Sie sagt, sie habe keine Zeit.', isCorrect: true },
        { id: 'c', text: 'Sie sagt, sie hätte keine Zeit.', isCorrect: false, feedback: '"Hätte" er Konjunktiv II.' },
        { id: 'd', text: 'Sie sagt, ich habe keine Zeit.', isCorrect: false, feedback: 'Pronomenet må endres.' },
      ],
      solution: 'Korrekt indirekte tale: "Sie sagt, sie habe keine Zeit."',
    },
    {
      id: 'tysk-3-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket verb innleder IKKE typisk indirekte tale?',
      options: [
        { id: 'a', text: 'sagen', isCorrect: false, feedback: '"Sagen" brukes ofte for indirekte tale.' },
        { id: 'b', text: 'behaupten', isCorrect: false, feedback: '"Behaupten" brukes for indirekte tale.' },
        { id: 'c', text: 'gehen', isCorrect: true },
        { id: 'd', text: 'meinen', isCorrect: false, feedback: '"Meinen" brukes for indirekte tale.' },
      ],
      solution: '"Gehen" (å gå) er ikke et verb som innleder indirekte tale.',
    },
    {
      id: 'tysk-3-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er Konjunktiv I av "können" i tredje person entall?',
      options: [
        { id: 'a', text: 'kann', isCorrect: false, feedback: '"Kann" er indikativ.' },
        { id: 'b', text: 'könnte', isCorrect: false, feedback: '"Könnte" er Konjunktiv II.' },
        { id: 'c', text: 'könne', isCorrect: true },
        { id: 'd', text: 'könnten', isCorrect: false, feedback: '"Könnten" er flertall.' },
      ],
      solution: 'Konjunktiv I av "können" i tredje person entall er "könne".',
    },
  ],
};

// ============================================================================
// Kapittel 2: Komplexe Satzkonstruktionen
// ============================================================================

export const CHAPTER_TYSK_3_2: TextbookChapter = {
  id: 'tysk-3-2',
  courseId: 'tysk-3',
  chapterNumber: '2',
  title: 'Komplexe Satzkonstruktionen',
  description: 'Mestre avanserte setningskonstruksjoner med flere leddsetninger.',
  estimatedMinutes: 80,
  competenceGoals: [
    'konstruere komplekse setninger',
    'bruke ulike typer leddsetninger',
    'variere setningsstrukturen i skriftlig arbeid',
  ],
  content: [
    {
      id: 'tysk-3-2-intro',
      type: 'text',
      content: `For å uttrykke komplekse tanker på tysk trenger du å mestre ulike typer leddsetninger og hvordan de kombineres. Dette kapitlet fokuserer på avanserte setningskonstruksjoner.`,
    },
    {
      id: 'tysk-3-2-def-1',
      type: 'definition',
      title: 'Typer leddsetninger',
      content: `**Hauptsatz** (hovedsetning): Verbet står på andre plass.
**Nebensatz** (leddsetning): Verbet står til slutt.

Viktige konjunksjoner som innleder leddsetninger:
- **dass** (at)
- **weil** (fordi)
- **obwohl** (selv om)
- **wenn** (når/hvis)
- **als** (da - fortid)
- **bevor** (før)
- **nachdem** (etter at)
- **während** (mens)`,
    },
    {
      id: 'tysk-3-2-text-1',
      type: 'text',
      content: `**Relativsetninger (Relativsätze)**

Relativsetninger gir tilleggsinformasjon om et substantiv:

| Kasus | Maskulin | Feminin | Nøytrum | Flertall |
|-------|----------|---------|---------|----------|
| Nominativ | der | die | das | die |
| Akkusativ | den | die | das | die |
| Dativ | dem | der | dem | denen |
| Genitiv | dessen | deren | dessen | deren |`,
    },
    {
      id: 'tysk-3-2-example-1',
      type: 'example',
      title: 'Relativsetninger i praksis',
      content: `**Nominativ:**
Der Mann, **der** dort steht, ist mein Lehrer.
*(Mannen som står der, er læreren min.)*

**Akkusativ:**
Das Buch, **das** ich lese, ist interessant.
*(Boken som jeg leser, er interessant.)*

**Dativ:**
Die Frau, **der** ich geholfen habe, war dankbar.
*(Kvinnen som jeg hjalp, var takknemlig.)*

**Genitiv:**
Der Autor, **dessen** Buch ich gelesen habe, ist berühmt.
*(Forfatteren, hvis bok jeg har lest, er berømt.)*`,
    },
    {
      id: 'tysk-3-2-text-2',
      type: 'text',
      content: `**Infinitivkonstruksjoner**

Infinitivkonstruksjoner med "zu" brukes ofte i stedet for leddsetninger:

| Konstruksjon | Eksempel |
|--------------|----------|
| um...zu | Ich lerne Deutsch, **um** in Deutschland **zu** arbeiten. |
| ohne...zu | Er ging, **ohne** etwas **zu** sagen. |
| anstatt...zu | Sie spielt, **anstatt zu** lernen. |`,
    },
    {
      id: 'tysk-3-2-note-1',
      type: 'note',
      content: `Ved delbare verb plasseres "zu" mellom forstavelsen og verbet: "aufzustehen" (å stå opp), "anzufangen" (å begynne).`,
    },
    {
      id: 'tysk-3-2-tip-1',
      type: 'tip',
      content: `For å variere språket, kan du starte setningen med leddsetningen: "Obwohl es regnet, gehen wir spazieren." Husk at verbet i hovedsetningen da kommer rett etter kommaet.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket relativpronomen passer? "Die Frau, ___ ich kenne, wohnt hier."',
      options: [
        { id: 'a', text: 'der', isCorrect: false, feedback: '"Der" er dativ feminin eller nominativ maskulin.' },
        { id: 'b', text: 'die', isCorrect: true },
        { id: 'c', text: 'das', isCorrect: false, feedback: '"Das" er nøytrum.' },
        { id: 'd', text: 'den', isCorrect: false, feedback: '"Den" er akkusativ maskulin.' },
      ],
      solution: '"Die Frau" er feminin, og "kennen" krever akkusativ. Akkusativ feminin er "die".',
    },
    {
      id: 'tysk-3-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket relativpronomen passer? "Der Mann, ___ Auto gestohlen wurde..."',
      options: [
        { id: 'a', text: 'der', isCorrect: false, feedback: '"Der" er nominativ, ikke genitiv.' },
        { id: 'b', text: 'dem', isCorrect: false, feedback: '"Dem" er dativ.' },
        { id: 'c', text: 'dessen', isCorrect: true },
        { id: 'd', text: 'den', isCorrect: false, feedback: '"Den" er akkusativ.' },
      ],
      solution: 'Genitiv maskulin "dessen" brukes for å uttrykke eierskap: "hvis bil".',
    },
    {
      id: 'tysk-3-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor står verbet i en "weil"-setning?',
      options: [
        { id: 'a', text: 'På første plass', isCorrect: false, feedback: 'Nei, det er V1-setninger.' },
        { id: 'b', text: 'På andre plass', isCorrect: false, feedback: 'Nei, det er hovedsetninger.' },
        { id: 'c', text: 'Til slutt', isCorrect: true },
        { id: 'd', text: 'Etter subjektet', isCorrect: false, feedback: 'Ikke i leddsetninger.' },
      ],
      solution: 'I leddsetninger med "weil", "dass" osv. står verbet til slutt.',
    },
    {
      id: 'tysk-3-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan uttrykker du "for å lære tysk"?',
      options: [
        { id: 'a', text: 'für Deutsch lernen', isCorrect: false, feedback: 'Feil konstruksjon.' },
        { id: 'b', text: 'um Deutsch zu lernen', isCorrect: true },
        { id: 'c', text: 'zu Deutsch lernen', isCorrect: false, feedback: 'Feil ordstilling.' },
        { id: 'd', text: 'Deutsch lernen für', isCorrect: false, feedback: 'Feil konstruksjon.' },
      ],
      solution: '"Um...zu" brukes for å uttrykke formål: "um Deutsch zu lernen".',
    },
    {
      id: 'tysk-3-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Fullfør: "Er ging, ohne ein Wort ___."',
      options: [
        { id: 'a', text: 'sagen', isCorrect: false, feedback: 'Mangler "zu".' },
        { id: 'b', text: 'zu sagen', isCorrect: true },
        { id: 'c', text: 'gesagt', isCorrect: false, feedback: 'Feil verbform.' },
        { id: 'd', text: 'sagte', isCorrect: false, feedback: 'Feil verbform.' },
      ],
      solution: '"Ohne...zu" krever infinitiv med "zu": "ohne ein Wort zu sagen".',
    },
  ],
};

// ============================================================================
// Kapittel 3: Stilistik und Rhetorik
// ============================================================================

export const CHAPTER_TYSK_3_3: TextbookChapter = {
  id: 'tysk-3-3',
  courseId: 'tysk-3',
  chapterNumber: '3',
  title: 'Stilistik und Rhetorik',
  description: 'Lær om stilistiske virkemidler og retoriske teknikker i tysk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'identifisere og bruke stilistiske virkemidler',
    'analysere retoriske teknikker',
    'skrive variert og engasjerende tekst',
  ],
  content: [
    {
      id: 'tysk-3-3-intro',
      type: 'text',
      content: `Stilistikk handler om hvordan vi velger og kombinerer ord for å skape en bestemt effekt. Retorikk er kunsten å overbevise. Begge er viktige for å forstå og produsere avanserte tekster på tysk.`,
    },
    {
      id: 'tysk-3-3-def-1',
      type: 'definition',
      title: 'Wichtige Stilmittel (Stilistiske virkemidler)',
      content: `**Metapher** (metafor): Billedlig sammenligning uten "wie"
*Das Leben ist eine Reise.* (Livet er en reise.)

**Vergleich** (sammenligning): Med "wie"
*Er kämpft wie ein Löwe.* (Han kjemper som en løve.)

**Personifikation**: Gi menneskelige egenskaper til ting
*Die Sonne lacht.* (Solen ler.)

**Alliteration**: Ord som starter med samme lyd
*Mit Mann und Maus.* (Med mann og mus.)`,
    },
    {
      id: 'tysk-3-3-text-1',
      type: 'text',
      content: `**Flere stilistiske virkemidler**

| Virkemiddel | Tysk | Eksempel |
|-------------|------|----------|
| Hyperbel | die Übertreibung | Ich habe dir das tausendmal gesagt! |
| Ironie | die Ironie | Das hast du ja toll gemacht! (sarkastisk) |
| Euphemismus | der Euphemismus | Er ist von uns gegangen. (døde) |
| Anapher | die Anapher | Ich kam, ich sah, ich siegte. |
| Rhetorische Frage | die rhetorische Frage | Wer will das schon? |`,
    },
    {
      id: 'tysk-3-3-example-1',
      type: 'example',
      title: 'Analyse av en tekst',
      content: `**Tekst:**
"Die Zeit fliegt, und mit ihr unsere Jugend. Wer kann sie aufhalten? Niemand. Doch wir können jeden Augenblick nutzen, jeden Tag feiern, jede Stunde schätzen."

**Analyse:**
- **Personifikation**: "Die Zeit fliegt" (tiden flyr)
- **Rhetorisk spørsmål**: "Wer kann sie aufhalten?"
- **Anafer**: "jeden Augenblick... jeden Tag... jede Stunde"
- **Klimaks**: Oppbygging fra øyeblikk til dag til time`,
    },
    {
      id: 'tysk-3-3-text-2',
      type: 'text',
      content: `**Retoriske appellformer**

| Appellform | Beskrivelse | Eksempel |
|------------|-------------|----------|
| **Logos** | Appellerer til fornuft og logikk | Statistikk, fakta, argumenter |
| **Pathos** | Appellerer til følelser | Emosjonelle historier, sterke bilder |
| **Ethos** | Appellerer til troverdighet | Ekspertuttalelser, erfaring |`,
    },
    {
      id: 'tysk-3-3-tip-1',
      type: 'tip',
      content: `For å skrive overbevisende tekst, kombiner alle tre appellformer: Start med ethos (etabler troverdighet), bruk logos (presenter argumenter), og avslutt med pathos (engasjer følelsene).`,
    },
    {
      id: 'tysk-3-3-note-1',
      type: 'note',
      content: `I tysk akademisk skriving er det viktig å balansere mellom formelt språk og engasjerende stil. Unngå for mange klisjeer, men bruk gjerne velvalgte metaforer.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket stilistisk virkemiddel er "Das Herz der Stadt"?',
      options: [
        { id: 'a', text: 'Vergleich', isCorrect: false, feedback: 'Sammenligning bruker "wie".' },
        { id: 'b', text: 'Metapher', isCorrect: true },
        { id: 'c', text: 'Personifikation', isCorrect: false, feedback: 'Personifikasjon gir menneskelige egenskaper.' },
        { id: 'd', text: 'Hyperbel', isCorrect: false, feedback: 'Hyperbel er overdrivelse.' },
      ],
      solution: '"Das Herz der Stadt" er en metafor - sentrum sammenlignes med et hjerte uten "wie".',
    },
    {
      id: 'tysk-3-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en retorisk spørsmål?',
      options: [
        { id: 'a', text: 'Et spørsmål som krever svar', isCorrect: false, feedback: 'Nei, det er et vanlig spørsmål.' },
        { id: 'b', text: 'Et spørsmål man stiller seg selv', isCorrect: false, feedback: 'Det er refleksjon.' },
        { id: 'c', text: 'Et spørsmål der svaret er innlysende', isCorrect: true },
        { id: 'd', text: 'Et spørsmål på vers', isCorrect: false, feedback: 'Det har ikke med form å gjøre.' },
      ],
      solution: 'En retorisk spørsmål har et innlysende svar og brukes for effekt.',
    },
    {
      id: 'tysk-3-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket virkemiddel er "schnell wie der Blitz"?',
      options: [
        { id: 'a', text: 'Metapher', isCorrect: false, feedback: 'Metafor bruker ikke "wie".' },
        { id: 'b', text: 'Vergleich', isCorrect: true },
        { id: 'c', text: 'Hyperbel', isCorrect: false, feedback: 'Det er ikke primært overdrivelse.' },
        { id: 'd', text: 'Alliteration', isCorrect: false, feedback: 'Alliterasjon er lydlikhet.' },
      ],
      solution: '"Wie" signaliserer sammenligning (Vergleich).',
    },
    {
      id: 'tysk-3-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken appellform bruker statistikk og fakta?',
      options: [
        { id: 'a', text: 'Pathos', isCorrect: false, feedback: 'Pathos appellerer til følelser.' },
        { id: 'b', text: 'Ethos', isCorrect: false, feedback: 'Ethos handler om troverdighet.' },
        { id: 'c', text: 'Logos', isCorrect: true },
        { id: 'd', text: 'Mythos', isCorrect: false, feedback: 'Mythos er ikke en klassisk appellform.' },
      ],
      solution: 'Logos appellerer til fornuft og logikk gjennom fakta og argumenter.',
    },
    {
      id: 'tysk-3-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "Mit Kind und Kegel" et eksempel på?',
      options: [
        { id: 'a', text: 'Metapher', isCorrect: false, feedback: 'Det er ikke en metafor.' },
        { id: 'b', text: 'Alliteration', isCorrect: true },
        { id: 'c', text: 'Ironie', isCorrect: false, feedback: 'Det er ikke ironisk.' },
        { id: 'd', text: 'Euphemismus', isCorrect: false, feedback: 'Det er ikke en eufemisme.' },
      ],
      solution: '"Kind und Kegel" har alliterasjon - ord som begynner med samme lyd (K).',
    },
  ],
};

// ============================================================================
// Kapittel 4: Klassische deutsche Literatur
// ============================================================================

export const CHAPTER_TYSK_3_4: TextbookChapter = {
  id: 'tysk-3-4',
  courseId: 'tysk-3',
  chapterNumber: '4',
  title: 'Klassische deutsche Literatur',
  description: 'Utforsk klassisk tysk litteratur fra Goethe til Kafka.',
  estimatedMinutes: 85,
  competenceGoals: [
    'analysere klassiske tyske litterære tekster',
    'forstå historiske og kulturelle kontekster',
    'diskutere litterære temaer og motiver',
  ],
  content: [
    {
      id: 'tysk-3-4-intro',
      type: 'text',
      content: `Tysk litteratur har en rik tradisjon som strekker seg over flere århundrer. Fra Weimar-klassikken med Goethe og Schiller, gjennom romantikken, til modernismen med Kafka - disse verkene har formet europeisk kultur.`,
    },
    {
      id: 'tysk-3-4-def-1',
      type: 'definition',
      title: 'Litterære epoker',
      content: `**Weimarer Klassik** (1786-1805): Goethe, Schiller - harmoni, humanisme
**Romantik** (1795-1848): Hoffmann, Novalis - følelser, natur, fantasi
**Realismus** (1848-1890): Fontane, Storm - hverdagsliv, samfunn
**Moderne** (1890-1920): Kafka, Mann - eksistens, fremmedgjøring`,
    },
    {
      id: 'tysk-3-4-text-1',
      type: 'text',
      content: `**Johann Wolfgang von Goethe (1749-1832)**

Goethe regnes som den største tyske forfatter. Hans hovedverk *Faust* handler om en lærd mann som gjør en pakt med djevelen.

**Berømt sitat fra Faust:**
> "Zwei Seelen wohnen, ach! in meiner Brust."
> *(To sjeler bor, akk! i mitt bryst.)*

Dette uttrykker menneskets indre konflikt mellom det åndelige og det jordiske.`,
    },
    {
      id: 'tysk-3-4-example-1',
      type: 'example',
      title: 'Tekstutdrag: Goethe - "Erlkönig"',
      content: `*Wer reitet so spät durch Nacht und Wind?*
*Es ist der Vater mit seinem Kind.*
*Er hat den Knaben wohl in dem Arm,*
*Er fasst ihn sicher, er hält ihn warm.*

**Oversettelse:**
Hvem rir så sent gjennom natt og vind?
Det er faren med sitt barn.
Han har gutten vel i sin arm,
Han holder ham trygt, han holder ham varm.

**Analyse:** Ballade som skildrer en dramatisk ridetur der faren prøver å redde sønnen fra Erlkönig (alvekongen).`,
    },
    {
      id: 'tysk-3-4-text-2',
      type: 'text',
      content: `**Franz Kafka (1883-1924)**

Kafka skrev på tysk i Praha og er kjent for sine surrealistiske og eksistensielle verk.

**Hovedverk:**
- *Die Verwandlung* (Forvandlingen) - En mann våkner opp som et insekt
- *Der Prozess* (Prosessen) - Absurd rettssak
- *Das Schloss* (Slottet) - Uoppnåelig byråkrati

**Kafkaesk:** Begrepet beskriver absurde, marerittaktige situasjoner.`,
    },
    {
      id: 'tysk-3-4-note-1',
      type: 'note',
      content: `Kafka skrev på tysk selv om han bodde i Praha (som da var del av Østerrike-Ungarn). Hans verk ble først publisert etter hans død av vennen Max Brod, mot Kafkas egne ønsker.`,
    },
    {
      id: 'tysk-3-4-tip-1',
      type: 'tip',
      content: `Når du analyserer klassisk tysk litteratur, se på: 1) Historisk kontekst, 2) Litterær epoke, 3) Språklige virkemidler, 4) Temaer og motiver, 5) Forfatterens intensjon.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem skrev "Faust"?',
      options: [
        { id: 'a', text: 'Schiller', isCorrect: false, feedback: 'Schiller skrev andre klassiske verk.' },
        { id: 'b', text: 'Goethe', isCorrect: true },
        { id: 'c', text: 'Kafka', isCorrect: false, feedback: 'Kafka er modernist.' },
        { id: 'd', text: 'Mann', isCorrect: false, feedback: 'Thomas Mann er fra en senere periode.' },
      ],
      solution: 'Johann Wolfgang von Goethe skrev "Faust".',
    },
    {
      id: 'tysk-3-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva handler "Die Verwandlung" av Kafka om?',
      options: [
        { id: 'a', text: 'En rettssak', isCorrect: false, feedback: 'Det er "Der Prozess".' },
        { id: 'b', text: 'En mann som blir til et insekt', isCorrect: true },
        { id: 'c', text: 'Et slott', isCorrect: false, feedback: 'Det er "Das Schloss".' },
        { id: 'd', text: 'En pakt med djevelen', isCorrect: false, feedback: 'Det er Goethes "Faust".' },
      ],
      solution: '"Die Verwandlung" handler om Gregor Samsa som våkner opp forvandlet til et insekt.',
    },
    {
      id: 'tysk-3-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken periode tilhører Weimarer Klassik?',
      options: [
        { id: 'a', text: '1600-tallet', isCorrect: false, feedback: 'Det er for tidlig.' },
        { id: 'b', text: '1786-1805', isCorrect: true },
        { id: 'c', text: '1848-1890', isCorrect: false, feedback: 'Det er Realismus.' },
        { id: 'd', text: '1890-1920', isCorrect: false, feedback: 'Det er Moderne.' },
      ],
      solution: 'Weimarer Klassik varte fra 1786 til 1805.',
    },
    {
      id: 'tysk-3-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "kafkaesk"?',
      options: [
        { id: 'a', text: 'Romantisk og drømmende', isCorrect: false, feedback: 'Det er motsatt av Kafkas stil.' },
        { id: 'b', text: 'Absurd og marerittaktig', isCorrect: true },
        { id: 'c', text: 'Harmonisk og klassisk', isCorrect: false, feedback: 'Det beskriver Weimar-klassikken.' },
        { id: 'd', text: 'Realistisk og hverdagslig', isCorrect: false, feedback: 'Det beskriver realismen.' },
      ],
      solution: '"Kafkaesk" beskriver absurde, marerittaktige situasjoner typisk for Kafkas verk.',
    },
    {
      id: 'tysk-3-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva uttrykker sitatet "Zwei Seelen wohnen, ach! in meiner Brust"?',
      options: [
        { id: 'a', text: 'Kjærlighet til to personer', isCorrect: false, feedback: 'Det handler ikke om romantisk kjærlighet.' },
        { id: 'b', text: 'Indre konflikt mellom det åndelige og jordiske', isCorrect: true },
        { id: 'c', text: 'Fysisk sykdom', isCorrect: false, feedback: 'Det er billedlig, ikke bokstavelig.' },
        { id: 'd', text: 'Politisk splittelse', isCorrect: false, feedback: 'Det handler om personlig konflikt.' },
      ],
      solution: 'Sitatet uttrykker menneskets indre konflikt mellom ulike impulser og ønsker.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Moderne deutsche Kultur
// ============================================================================

export const CHAPTER_TYSK_3_5: TextbookChapter = {
  id: 'tysk-3-5',
  courseId: 'tysk-3',
  chapterNumber: '5',
  title: 'Moderne deutsche Kultur',
  description: 'Utforsk samtidig tysk kultur: film, musikk, kunst og samfunn.',
  estimatedMinutes: 70,
  competenceGoals: [
    'diskutere moderne kulturelle uttrykk',
    'sammenligne tysk og norsk kultur',
    'reflektere over kulturell identitet',
  ],
  content: [
    {
      id: 'tysk-3-5-intro',
      type: 'text',
      content: `Modern tysk kultur er mangfoldig og dynamisk. Fra internasjonalt anerkjent film og musikk til kunst og arkitektur - Tyskland er et kulturelt kraftsenter i Europa.`,
    },
    {
      id: 'tysk-3-5-def-1',
      type: 'definition',
      title: 'Kulturelle begreper',
      content: `**Kulturbegriffe:**
- **die Popkultur** - populærkultur
- **die Hochkultur** - finkultur
- **das Kulturerbe** - kulturarv
- **die Subkultur** - subkultur
- **der Zeitgeist** - tidsånd
- **die Kulturlandschaft** - kulturlandskap`,
    },
    {
      id: 'tysk-3-5-text-1',
      type: 'text',
      content: `**Deutscher Film**

Tysk film har en stolt historie fra ekspresjonismen til i dag:

| Periode | Kjennetegn | Eksempler |
|---------|------------|-----------|
| Ekspresjonisme (1920-tallet) | Skygger, forvrengning | Das Cabinet des Dr. Caligari |
| Neue Deutsche Welle (1970-tallet) | Politisk, eksperimentell | Fassbinder, Wenders, Herzog |
| Samtid | Mangfoldig, internasjonal | Das Leben der Anderen, Goodbye Lenin! |`,
    },
    {
      id: 'tysk-3-5-example-1',
      type: 'example',
      title: 'Filmanalyse: "Das Leben der Anderen" (2006)',
      content: `**Handling:** Filmen foregår i DDR (Øst-Tyskland) og følger en Stasi-agent som overvåker en dramatiker og hans kjæreste.

**Temaer:**
- Overvåkning og personvern
- Kunstnerisk frihet vs. statlig kontroll
- Menneskelighet i et undertrykkende system

**Kulturell betydning:** Filmen vant Oscar for beste utenlandske film og ga internasjonal oppmerksomhet til DDR-historien.`,
    },
    {
      id: 'tysk-3-5-text-2',
      type: 'text',
      content: `**Deutsche Musik**

| Sjanger | Artister/Band | Kjennetegn |
|---------|---------------|------------|
| Elektronisk | Kraftwerk, Tangerine Dream | Pionerer innen synth |
| Rock/Pop | Rammstein, Nena | Tysk tekst, kraftig lyd |
| Hip-hop | Die Fantastischen Vier, Cro | Tysk rap |
| Klassisk | Beethoven, Bach, Brahms | Kulturarv |`,
    },
    {
      id: 'tysk-3-5-text-3',
      type: 'text',
      content: `**Samtidskunst og arkitektur**

Tyskland er kjent for:
- **Bauhaus**: Innflytelsesrik designskole (form følger funksjon)
- **Documenta**: Verdensledende kunstutstilling i Kassel
- **Berlins kunstscene**: Gallerier, gatekunst, museer
- **Moderne arkitektur**: Reichstag-kuppelen, Elbphilharmonie`,
    },
    {
      id: 'tysk-3-5-tip-1',
      type: 'tip',
      content: `For å forstå moderne tysk kultur, følg med på: Der Spiegel (nyheter), Zeit Online (kultur), Deutsche Welle (internasjonal tysk media). Mange tilbyr artikler på enklere tysk for språkelever.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Zeitgeist"?',
      options: [
        { id: 'a', text: 'Tidsspøkelse', isCorrect: false, feedback: 'Det er bokstavelig, men feil betydning.' },
        { id: 'b', text: 'Tidsånd', isCorrect: true },
        { id: 'c', text: 'Gammel tid', isCorrect: false, feedback: 'Det betyr noe annet.' },
        { id: 'd', text: 'Fremtid', isCorrect: false, feedback: '"Fremtid" er "Zukunft".' },
      ],
      solution: '"Zeitgeist" betyr tidsånd - den dominerende tankegangen i en periode.',
    },
    {
      id: 'tysk-3-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket band er pionerer innen elektronisk musikk?',
      options: [
        { id: 'a', text: 'Rammstein', isCorrect: false, feedback: 'Rammstein er industrirock.' },
        { id: 'b', text: 'Kraftwerk', isCorrect: true },
        { id: 'c', text: 'Die Fantastischen Vier', isCorrect: false, feedback: 'De er hip-hop.' },
        { id: 'd', text: 'Nena', isCorrect: false, feedback: 'Nena er pop/rock.' },
      ],
      solution: 'Kraftwerk er pionerer innen elektronisk musikk fra 1970-tallet.',
    },
    {
      id: 'tysk-3-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva handler "Das Leben der Anderen" om?',
      options: [
        { id: 'a', text: 'Andre verdenskrig', isCorrect: false, feedback: 'Filmen handler om DDR.' },
        { id: 'b', text: 'Stasi-overvåkning i DDR', isCorrect: true },
        { id: 'c', text: 'Moderne Berlin', isCorrect: false, feedback: 'Den foregår i DDR-tiden.' },
        { id: 'd', text: 'Tysk gjenforening', isCorrect: false, feedback: 'Den handler om tiden før gjenforeningen.' },
      ],
      solution: 'Filmen handler om Stasi-overvåkning i Øst-Tyskland (DDR).',
    },
    {
      id: 'tysk-3-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Bauhaus?',
      options: [
        { id: 'a', text: 'Et tysk rockband', isCorrect: false, feedback: 'Det finnes et band med navnet, men opprinnelig er det en designskole.' },
        { id: 'b', text: 'En innflytelsesrik designskole', isCorrect: true },
        { id: 'c', text: 'Et museum i Berlin', isCorrect: false, feedback: 'Det er en designskole.' },
        { id: 'd', text: 'En filmsjanger', isCorrect: false, feedback: 'Det handler om design.' },
      ],
      solution: 'Bauhaus var en innflytelsesrik designskole kjent for prinsippet "form følger funksjon".',
    },
    {
      id: 'tysk-3-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken kunstutstilling arrangeres regelmessig i Kassel?',
      options: [
        { id: 'a', text: 'Biennale', isCorrect: false, feedback: 'Biennale er i Venezia.' },
        { id: 'b', text: 'Documenta', isCorrect: true },
        { id: 'c', text: 'Art Basel', isCorrect: false, feedback: 'Art Basel er i Sveits.' },
        { id: 'd', text: 'Frieze', isCorrect: false, feedback: 'Frieze er i London.' },
      ],
      solution: 'Documenta er en verdensledende kunstutstilling som arrangeres i Kassel.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Deutsche Geschichte vertieft
// ============================================================================

export const CHAPTER_TYSK_3_6: TextbookChapter = {
  id: 'tysk-3-6',
  courseId: 'tysk-3',
  chapterNumber: '6',
  title: 'Deutsche Geschichte vertieft',
  description: 'Dypere forståelse av tysk historie og dens påvirkning på dagens samfunn.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analysere historiske hendelser og deres konsekvenser',
    'diskutere historisk minne og ansvar',
    'forstå moderne Tysklands politiske system',
  ],
  content: [
    {
      id: 'tysk-3-6-intro',
      type: 'text',
      content: `Tysk historie i det 20. og 21. århundre er preget av dramatiske endringer: to verdenskriger, deling og gjenforening, og utviklingen til et ledende europeisk demokrati. Forståelse av denne historien er nøkkelen til å forstå dagens Tyskland.`,
    },
    {
      id: 'tysk-3-6-def-1',
      type: 'definition',
      title: 'Historiske begreper',
      content: `**Wichtige Begriffe:**
- **das Dritte Reich** - Det tredje riket (Nazi-Tyskland 1933-1945)
- **der Holocaust / die Shoah** - Folkemordet på jødene
- **die Teilung** - Delingen (av Tyskland)
- **die Wiedervereinigung** - Gjenforeningen (1990)
- **die Vergangenheitsbewältigung** - Oppgjør med fortiden
- **die Erinnerungskultur** - Minneskultur`,
    },
    {
      id: 'tysk-3-6-text-1',
      type: 'text',
      content: `**Tidslinje: Moderne tysk historie**

| År | Hendelse |
|----|----------|
| 1933 | Hitler kommer til makten |
| 1939-1945 | Andre verdenskrig |
| 1945 | Tysklands kapitulasjon og deling |
| 1949 | Grunnleggelse av BRD og DDR |
| 1961 | Berlinmuren bygges |
| 1989 | Berlinmuren faller |
| 1990 | Tysk gjenforening |
| 2005-2021 | Angela Merkel som forbundskansler |`,
    },
    {
      id: 'tysk-3-6-example-1',
      type: 'example',
      title: 'Vergangenheitsbewältigung - Oppgjør med fortiden',
      content: `Tyskland har utviklet en unik tilnærming til sin historie:

**Konkrete tiltak:**
- Holocaustminnesmerket i Berlin (2005)
- Snublesteiner (Stolpersteine) i fortauene
- Obligatorisk undervisning om Holocaust
- Lover mot fornektelse av Holocaust

**Sitatet:**
> "Die Erinnerung darf nicht enden; sie muss auch künftige Generationen zur Wachsamkeit mahnen."
> *(Minnet må ikke ta slutt; det må også mane fremtidige generasjoner til årvåkenhet.)*
> - Bundespräsident Roman Herzog`,
    },
    {
      id: 'tysk-3-6-text-2',
      type: 'text',
      content: `**Det politiske systemet i dag**

| Institusjon | Tysk | Funksjon |
|-------------|------|----------|
| Forbundspresident | der Bundespräsident | Statsoverhode (seremoniell) |
| Forbundskansler | der Bundeskanzler | Regjeringssjef |
| Forbundsdagen | der Bundestag | Parlamentet |
| Forbundsrådet | der Bundesrat | Representerer delstatene |
| Forfatningsdomstolen | das Bundesverfassungsgericht | Høyeste domstol |`,
    },
    {
      id: 'tysk-3-6-note-1',
      type: 'note',
      content: `Den tyske grunnloven (Grundgesetz) fra 1949 ble bevisst utformet for å forhindre gjentakelse av Nazi-Tysklands fremvekst, med sterke beskyttelser av menneskerettigheter og maktfordeling.`,
    },
    {
      id: 'tysk-3-6-tip-1',
      type: 'tip',
      content: `For eksamen: Vær forberedt på å diskutere hvordan historien påvirker moderne tysk politikk og kultur, spesielt temaer som flyktningpolitikk, EU-samarbeid og Tysklands rolle i internasjonal fred.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Når falt Berlinmuren?',
      options: [
        { id: 'a', text: '1945', isCorrect: false, feedback: 'Det var slutten på andre verdenskrig.' },
        { id: 'b', text: '1961', isCorrect: false, feedback: 'Det var da muren ble bygget.' },
        { id: 'c', text: '1989', isCorrect: true },
        { id: 'd', text: '1990', isCorrect: false, feedback: 'Det var den offisielle gjenforeningen.' },
      ],
      solution: 'Berlinmuren falt 9. november 1989.',
    },
    {
      id: 'tysk-3-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Vergangenheitsbewältigung"?',
      options: [
        { id: 'a', text: 'Fremtidsplanlegging', isCorrect: false, feedback: '"Vergangenheit" betyr fortid.' },
        { id: 'b', text: 'Oppgjør med fortiden', isCorrect: true },
        { id: 'c', text: 'Historisk forskning', isCorrect: false, feedback: 'Det er mer spesifikt enn generell forskning.' },
        { id: 'd', text: 'Glemsel av historien', isCorrect: false, feedback: 'Det er det motsatte.' },
      ],
      solution: '"Vergangenheitsbewältigung" betyr oppgjør med fortiden, spesielt Nazi-tiden.',
    },
    {
      id: 'tysk-3-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem er regjeringssjefen i Tyskland?',
      options: [
        { id: 'a', text: 'Der Bundespräsident', isCorrect: false, feedback: 'Presidenten er statsoverhode.' },
        { id: 'b', text: 'Der Bundeskanzler', isCorrect: true },
        { id: 'c', text: 'Der Bundestagspräsident', isCorrect: false, feedback: 'Det er lederen av parlamentet.' },
        { id: 'd', text: 'Der Ministerpräsident', isCorrect: false, feedback: 'Det er lederen av en delstat.' },
      ],
      solution: 'Forbundskansleren (der Bundeskanzler) er regjeringssjefen.',
    },
    {
      id: 'tysk-3-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er "Stolpersteine"?',
      options: [
        { id: 'a', text: 'Snublesteiner til minne om Holocaust-ofre', isCorrect: true },
        { id: 'b', text: 'Historiske bygninger', isCorrect: false, feedback: 'Det er minnesmerker i bakken.' },
        { id: 'c', text: 'Museer', isCorrect: false, feedback: 'De er i fortauene.' },
        { id: 'd', text: 'Politiske partier', isCorrect: false, feedback: 'De er minnesmerker.' },
      ],
      solution: 'Stolpersteine er messingsteiner i fortauene som minnes Holocaust-ofre der de bodde.',
    },
    {
      id: 'tysk-3-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Når ble Tyskland gjenforent?',
      options: [
        { id: 'a', text: '1989', isCorrect: false, feedback: 'Da falt muren, men gjenforeningen var senere.' },
        { id: 'b', text: '1990', isCorrect: true },
        { id: 'c', text: '1991', isCorrect: false, feedback: 'Det var i 1990.' },
        { id: 'd', text: '2000', isCorrect: false, feedback: 'Det var ti år etter.' },
      ],
      solution: 'Tyskland ble offisielt gjenforent 3. oktober 1990.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Wirtschaft und Handel
// ============================================================================

export const CHAPTER_TYSK_3_7: TextbookChapter = {
  id: 'tysk-3-7',
  courseId: 'tysk-3',
  chapterNumber: '7',
  title: 'Wirtschaft und Handel',
  description: 'Lær om tysk økonomi, næringsliv og forretningskommunikasjon.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forstå grunnleggende økonomiske begreper på tysk',
    'kommunisere i forretningssammenheng',
    'diskutere økonomiske temaer',
  ],
  content: [
    {
      id: 'tysk-3-7-intro',
      type: 'text',
      content: `Tyskland er Europas største økonomi og verdens fjerde største. Å forstå tysk forretningsspråk og økonomi er verdifullt for fremtidige karrieremuligheter.`,
    },
    {
      id: 'tysk-3-7-def-1',
      type: 'definition',
      title: 'Wirtschaftsbegriffe (Økonomiske begreper)',
      content: `**Grunnleggende begreper:**
- **die Wirtschaft** - økonomien
- **das Unternehmen** - bedriften
- **der Arbeitgeber** - arbeidsgiveren
- **der Arbeitnehmer** - arbeidstakeren
- **das Gehalt** - lønnen
- **die Arbeitslosigkeit** - arbeidsledigheten
- **das Bruttoinlandsprodukt (BIP)** - bruttonasjonalproduktet (BNP)`,
    },
    {
      id: 'tysk-3-7-text-1',
      type: 'text',
      content: `**Deutsche Industrie**

| Sektor | Tyske bedrifter | Produkter |
|--------|-----------------|-----------|
| Bil | Volkswagen, BMW, Mercedes | Biler |
| Kjemi | BASF, Bayer | Kjemikalier, medisin |
| Ingeniørkunst | Siemens, Bosch | Elektronikk, maskiner |
| Finans | Deutsche Bank, Allianz | Bank, forsikring |`,
    },
    {
      id: 'tysk-3-7-text-2',
      type: 'text',
      content: `**Forretningskommunikasjon**

| Situasjon | Tysk uttrykk | Norsk |
|-----------|--------------|-------|
| Møte | die Besprechung / das Meeting | møtet |
| Avtale | der Termin | avtalen |
| Tilbud | das Angebot | tilbudet |
| Kontrakt | der Vertrag | kontrakten |
| Faktura | die Rechnung | fakturaen |`,
    },
    {
      id: 'tysk-3-7-example-1',
      type: 'example',
      title: 'Forretningsbrev',
      content: `**Sehr geehrte Damen und Herren,**

vielen Dank für Ihr Angebot vom 15. März. Wir haben es mit großem Interesse geprüft und möchten gerne einen Termin für ein persönliches Gespräch vereinbaren.

Könnten Sie uns bitte mitteilen, wann Sie verfügbar sind?

**Mit freundlichen Grüßen**
Max Mustermann

---
*Oversettelse:*
Kjære alle sammen, tusen takk for tilbudet deres fra 15. mars. Vi har gjennomgått det med stor interesse og ønsker å avtale et personlig møte. Kan dere vennligst informere oss om når dere er tilgjengelige? Med vennlig hilsen, Max Mustermann`,
    },
    {
      id: 'tysk-3-7-note-1',
      type: 'note',
      content: `I tysk forretningskorrespondanse er formalitet viktig. Bruk alltid "Sie" og fulle titler (Herr Doktor, Frau Professor) ved første kontakt.`,
    },
    {
      id: 'tysk-3-7-tip-1',
      type: 'tip',
      content: `Nyttige avslutninger: "Mit freundlichen Grüßen" (formelt), "Mit besten Grüßen" (litt mindre formelt), "Herzliche Grüße" (uformelt).`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "das Unternehmen"?',
      options: [
        { id: 'a', text: 'Arbeidstakeren', isCorrect: false, feedback: '"Arbeidstaker" er "der Arbeitnehmer".' },
        { id: 'b', text: 'Bedriften', isCorrect: true },
        { id: 'c', text: 'Lønnen', isCorrect: false, feedback: '"Lønn" er "das Gehalt".' },
        { id: 'd', text: 'Møtet', isCorrect: false, feedback: '"Møte" er "die Besprechung".' },
      ],
      solution: '"Das Unternehmen" betyr "bedriften".',
    },
    {
      id: 'tysk-3-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken hilsen er mest formell i et forretningsbrev?',
      options: [
        { id: 'a', text: 'Hallo', isCorrect: false, feedback: 'For uformelt for forretningsbrev.' },
        { id: 'b', text: 'Lieber Herr Müller', isCorrect: false, feedback: 'Litt for personlig.' },
        { id: 'c', text: 'Sehr geehrte Damen und Herren', isCorrect: true },
        { id: 'd', text: 'Hi', isCorrect: false, feedback: 'Altfor uformelt.' },
      ],
      solution: '"Sehr geehrte Damen und Herren" er den mest formelle hilsenen.',
    },
    {
      id: 'tysk-3-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva produserer Volkswagen?',
      options: [
        { id: 'a', text: 'Kjemikalier', isCorrect: false, feedback: 'Det er BASF.' },
        { id: 'b', text: 'Biler', isCorrect: true },
        { id: 'c', text: 'Elektronikk', isCorrect: false, feedback: 'Det er Siemens.' },
        { id: 'd', text: 'Forsikring', isCorrect: false, feedback: 'Det er Allianz.' },
      ],
      solution: 'Volkswagen er en bilprodusent.',
    },
    {
      id: 'tysk-3-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Mit freundlichen Grüßen"?',
      options: [
        { id: 'a', text: 'Hei', isCorrect: false, feedback: 'Det er en innledning.' },
        { id: 'b', text: 'Med vennlig hilsen', isCorrect: true },
        { id: 'c', text: 'Takk for sist', isCorrect: false, feedback: 'Det er noe annet.' },
        { id: 'd', text: 'Vi ses', isCorrect: false, feedback: 'Det er muntlig.' },
      ],
      solution: '"Mit freundlichen Grüßen" betyr "Med vennlig hilsen".',
    },
    {
      id: 'tysk-3-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er "das Bruttoinlandsprodukt"?',
      options: [
        { id: 'a', text: 'Bruttolønn', isCorrect: false, feedback: 'Det er personlig inntekt.' },
        { id: 'b', text: 'Bruttonasjonalprodukt', isCorrect: true },
        { id: 'c', text: 'Handelsbalanse', isCorrect: false, feedback: 'Det er "die Handelsbilanz".' },
        { id: 'd', text: 'Inflasjon', isCorrect: false, feedback: 'Det er "die Inflation".' },
      ],
      solution: '"Das Bruttoinlandsprodukt (BIP)" er bruttonasjonalproduktet (BNP).',
    },
  ],
};

// ============================================================================
// Kapittel 8: Medien und Journalismus
// ============================================================================

export const CHAPTER_TYSK_3_8: TextbookChapter = {
  id: 'tysk-3-8',
  courseId: 'tysk-3',
  chapterNumber: '8',
  title: 'Medien und Journalismus',
  description: 'Forstå tyske medier, analysere nyhetsartikler og diskutere medienes rolle.',
  estimatedMinutes: 70,
  competenceGoals: [
    'lese og analysere tyske nyhetsartikler',
    'forstå medielandskapet i Tyskland',
    'diskutere medienes rolle i samfunnet',
  ],
  content: [
    {
      id: 'tysk-3-8-intro',
      type: 'text',
      content: `Medier spiller en viktig rolle i det tyske demokratiet. Pressefrihet er grunnlovfestet, og Tyskland har et mangfoldig medielandskap med offentlige og private aktører.`,
    },
    {
      id: 'tysk-3-8-def-1',
      type: 'definition',
      title: 'Mediebegreper',
      content: `**Medienlandschaft:**
- **die Presse** - pressen
- **die Zeitung** - avisen
- **die Zeitschrift** - tidsskriftet
- **der Rundfunk** - kringkastingen
- **die Nachrichtensendung** - nyhetssendingen
- **die Pressefreiheit** - pressefriheten
- **die Meinungsfreiheit** - ytringsfriheten`,
    },
    {
      id: 'tysk-3-8-text-1',
      type: 'text',
      content: `**Tyske medier**

| Type | Eksempler | Kjennetegn |
|------|-----------|------------|
| Kvalitetsavis | Die Zeit, FAZ, Süddeutsche | Dybdejournalistikk |
| Tabloid | Bild | Sensasjon, sport |
| Offentlig TV | ARD, ZDF | Lisensfinansiert |
| Privat TV | RTL, ProSieben | Reklamebasert |
| Nyhetsmagasin | Der Spiegel, Focus | Undersøkende journalistikk |`,
    },
    {
      id: 'tysk-3-8-text-2',
      type: 'text',
      content: `**Struktur i en nyhetsartikkel**

| Del | Tysk | Funksjon |
|----|------|----------|
| Overskrift | die Überschrift | Fanger oppmerksomhet |
| Ingress | der Vorspann / Lead | Sammendrag av det viktigste |
| Brødtekst | der Fließtext | Utdypende informasjon |
| Mellomtittel | die Zwischenüberschrift | Deler opp teksten |
| Bildetekst | die Bildunterschrift | Forklarer bildet |`,
    },
    {
      id: 'tysk-3-8-example-1',
      type: 'example',
      title: 'Analyse av nyhetsoverskrift',
      content: `**Overskrift:**
"Klimagipfel: Merkel fordert mehr Engagement"

**Analyse:**
- **Tema**: Klimatoppmøte
- **Aktør**: Merkel (Forbundskansler)
- **Handling**: fordert (krever)
- **Objekt**: mehr Engagement (mer innsats)

**Journalistisk vinkling:** Fokuserer på Tysklands rolle og krav, fremstiller Tyskland som aktiv part.`,
    },
    {
      id: 'tysk-3-8-note-1',
      type: 'note',
      content: `I Tyskland er det et skille mellom "öffentlich-rechtlicher Rundfunk" (offentlig kringkasting finansiert av lisens) og private medier. ARD og ZDF er lisensfinansierte og skal være uavhengige.`,
    },
    {
      id: 'tysk-3-8-tip-1',
      type: 'tip',
      content: `For å forbedre leseferdighetene dine, les tyske nyheter daglig. Deutsche Welle (dw.com) tilbyr artikler på "langsam gesprochene Nachrichten" (sakte talt nyheter) for språkelever.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "die Pressefreiheit"?',
      options: [
        { id: 'a', text: 'Gratis presse', isCorrect: false, feedback: '"Freiheit" betyr frihet, ikke gratis.' },
        { id: 'b', text: 'Pressefrihet', isCorrect: true },
        { id: 'c', text: 'Pressemelding', isCorrect: false, feedback: 'Det er "die Pressemitteilung".' },
        { id: 'd', text: 'Pressekonferanse', isCorrect: false, feedback: 'Det er "die Pressekonferenz".' },
      ],
      solution: '"Die Pressefreiheit" betyr pressefrihet.',
    },
    {
      id: 'tysk-3-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken avis er en tysk tabloid?',
      options: [
        { id: 'a', text: 'Die Zeit', isCorrect: false, feedback: 'Die Zeit er en kvalitetsavis.' },
        { id: 'b', text: 'Bild', isCorrect: true },
        { id: 'c', text: 'FAZ', isCorrect: false, feedback: 'FAZ er en kvalitetsavis.' },
        { id: 'd', text: 'Der Spiegel', isCorrect: false, feedback: 'Der Spiegel er et nyhetsmagasin.' },
      ],
      solution: 'Bild er Tysklands største tabloidavis.',
    },
    {
      id: 'tysk-3-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan finansieres ARD og ZDF?',
      options: [
        { id: 'a', text: 'Reklame', isCorrect: false, feedback: 'Det er private kanaler.' },
        { id: 'b', text: 'Lisensavgift', isCorrect: true },
        { id: 'c', text: 'Statlig bevilgning', isCorrect: false, feedback: 'De er uavhengige av staten.' },
        { id: 'd', text: 'Abonnement', isCorrect: false, feedback: 'Det er ikke streaming-tjenester.' },
      ],
      solution: 'ARD og ZDF er finansiert av lisensavgift (Rundfunkbeitrag).',
    },
    {
      id: 'tysk-3-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er "der Vorspann" i en artikkel?',
      options: [
        { id: 'a', text: 'Overskriften', isCorrect: false, feedback: 'Det er "die Überschrift".' },
        { id: 'b', text: 'Ingressen', isCorrect: true },
        { id: 'c', text: 'Konklusjonen', isCorrect: false, feedback: 'Det er ikke en typisk del.' },
        { id: 'd', text: 'Kildelisten', isCorrect: false, feedback: 'Det er "die Quellenangabe".' },
      ],
      solution: '"Der Vorspann" er ingressen som oppsummerer det viktigste.',
    },
    {
      id: 'tysk-3-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva kjennetegner "öffentlich-rechtlicher Rundfunk"?',
      options: [
        { id: 'a', text: 'Reklamebasert og privat', isCorrect: false, feedback: 'Det er private kanaler.' },
        { id: 'b', text: 'Lisensfinansiert og uavhengig', isCorrect: true },
        { id: 'c', text: 'Statskontrollert', isCorrect: false, feedback: 'De er nettopp uavhengige av staten.' },
        { id: 'd', text: 'Kun på internett', isCorrect: false, feedback: 'De har TV og radio.' },
      ],
      solution: 'Offentlig kringkasting er lisensfinansiert og uavhengig av stat og marked.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Wissenschaft und Forschung
// ============================================================================

export const CHAPTER_TYSK_3_9: TextbookChapter = {
  id: 'tysk-3-9',
  courseId: 'tysk-3',
  chapterNumber: '9',
  title: 'Wissenschaft und Forschung',
  description: 'Lær akademisk tysk og utforsk Tyskland som forskningsnasjon.',
  estimatedMinutes: 80,
  competenceGoals: [
    'forstå akademisk tysk',
    'lese og skrive faglige tekster',
    'diskutere vitenskapelige temaer',
  ],
  content: [
    {
      id: 'tysk-3-9-intro',
      type: 'text',
      content: `Tyskland har en lang vitenskapelig tradisjon og er i dag et av verdens ledende forskningsland. Fra Einstein til moderne forskning på fornybar energi - tysk vitenskap har formet vår verden.`,
    },
    {
      id: 'tysk-3-9-def-1',
      type: 'definition',
      title: 'Wissenschaftliche Begriffe',
      content: `**Grunnleggende begreper:**
- **die Wissenschaft** - vitenskap
- **die Forschung** - forskning
- **der/die Wissenschaftler/in** - vitenskapsmann/-kvinne
- **die Hypothese** - hypotesen
- **das Experiment** - eksperimentet
- **die Studie** - studien
- **das Ergebnis** - resultatet
- **die Schlussfolgerung** - konklusjonen`,
    },
    {
      id: 'tysk-3-9-text-1',
      type: 'text',
      content: `**Tyske forskningsinstitusjoner**

| Institusjon | Fokus | Eksempel |
|-------------|-------|----------|
| Max-Planck-Gesellschaft | Grunnforskning | Fysikk, biologi |
| Fraunhofer-Gesellschaft | Anvendt forskning | Teknologi |
| Universiteter | Utdanning og forskning | Humboldt, TU München |
| DAAD | Akademisk utveksling | Stipender |`,
    },
    {
      id: 'tysk-3-9-text-2',
      type: 'text',
      content: `**Akademisk skriving**

| Element | Tysk | Funksjon |
|---------|------|----------|
| Innledning | die Einleitung | Presenterer tema |
| Problemstilling | die Fragestellung | Definerer spørsmålet |
| Metode | die Methode | Beskriver fremgangsmåte |
| Resultater | die Ergebnisse | Presenterer funn |
| Diskusjon | die Diskussion | Analyserer resultater |
| Konklusjon | das Fazit | Oppsummerer |`,
    },
    {
      id: 'tysk-3-9-example-1',
      type: 'example',
      title: 'Akademiske formuleringer',
      content: `**Innlede tema:**
- "In der vorliegenden Arbeit wird untersucht..." (I dette arbeidet undersøkes...)
- "Diese Studie befasst sich mit..." (Denne studien tar for seg...)

**Presentere resultater:**
- "Die Ergebnisse zeigen, dass..." (Resultatene viser at...)
- "Es lässt sich feststellen, dass..." (Det kan fastslås at...)

**Konkludere:**
- "Zusammenfassend lässt sich sagen..." (Oppsummerende kan man si...)
- "Aus den Ergebnissen folgt..." (Fra resultatene følger...)`,
    },
    {
      id: 'tysk-3-9-note-1',
      type: 'note',
      content: `Akademisk tysk bruker ofte passiv og upersonlige konstruksjoner: "Es wird angenommen..." (Det antas...), "Man kann beobachten..." (Man kan observere...).`,
    },
    {
      id: 'tysk-3-9-tip-1',
      type: 'tip',
      content: `For å studere i Tyskland, kan du søke om DAAD-stipend. Mange universiteter tilbyr også engelskspråklige programmer. Se daad.de for muligheter.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-9-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "die Forschung"?',
      options: [
        { id: 'a', text: 'Formelen', isCorrect: false, feedback: '"Formel" er "die Formel".' },
        { id: 'b', text: 'Forskningen', isCorrect: true },
        { id: 'c', text: 'Forutsetningen', isCorrect: false, feedback: 'Det er "die Voraussetzung".' },
        { id: 'd', text: 'Fortiden', isCorrect: false, feedback: 'Det er "die Vergangenheit".' },
      ],
      solution: '"Die Forschung" betyr "forskningen".',
    },
    {
      id: 'tysk-3-9-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva fokuserer Fraunhofer-Gesellschaft på?',
      options: [
        { id: 'a', text: 'Grunnforskning', isCorrect: false, feedback: 'Det er Max-Planck-Gesellschaft.' },
        { id: 'b', text: 'Anvendt forskning', isCorrect: true },
        { id: 'c', text: 'Akademisk utveksling', isCorrect: false, feedback: 'Det er DAAD.' },
        { id: 'd', text: 'Undervisning', isCorrect: false, feedback: 'Det er universitetene.' },
      ],
      solution: 'Fraunhofer-Gesellschaft fokuserer på anvendt forskning og teknologi.',
    },
    {
      id: 'tysk-3-9-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "das Fazit" i en akademisk tekst?',
      options: [
        { id: 'a', text: 'Innledningen', isCorrect: false, feedback: 'Det er "die Einleitung".' },
        { id: 'b', text: 'Metoden', isCorrect: false, feedback: 'Det er "die Methode".' },
        { id: 'c', text: 'Konklusjonen', isCorrect: true },
        { id: 'd', text: 'Kildelisten', isCorrect: false, feedback: 'Det er "das Literaturverzeichnis".' },
      ],
      solution: '"Das Fazit" er konklusjonen som oppsummerer arbeidet.',
    },
    {
      id: 'tysk-3-9-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan innleder du en akademisk tekst formelt?',
      options: [
        { id: 'a', text: 'Ich möchte über...', isCorrect: false, feedback: 'For uformelt for akademisk tekst.' },
        { id: 'b', text: 'In der vorliegenden Arbeit wird...', isCorrect: true },
        { id: 'c', text: 'Heute spreche ich über...', isCorrect: false, feedback: 'For muntlig.' },
        { id: 'd', text: 'Das Thema ist...', isCorrect: false, feedback: 'For enkelt.' },
      ],
      solution: '"In der vorliegenden Arbeit wird..." er en formell akademisk innledning.',
    },
    {
      id: 'tysk-3-9-ex-5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er DAAD?',
      options: [
        { id: 'a', text: 'Et tysk universitet', isCorrect: false, feedback: 'Det er en utvekslingsorganisasjon.' },
        { id: 'b', text: 'Akademisk utvekslingstjeneste', isCorrect: true },
        { id: 'c', text: 'Et forskningsinstitutt', isCorrect: false, feedback: 'Det er en stipendorganisasjon.' },
        { id: 'd', text: 'Et tysk ministerium', isCorrect: false, feedback: 'Det er en uavhengig organisasjon.' },
      ],
      solution: 'DAAD (Deutscher Akademischer Austauschdienst) organiserer akademisk utveksling.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Prüfungsvorbereitung
// ============================================================================

export const CHAPTER_TYSK_3_10: TextbookChapter = {
  id: 'tysk-3-10',
  courseId: 'tysk-3',
  chapterNumber: '10',
  title: 'Prüfungsvorbereitung',
  description: 'Forbered deg til eksamen med gjennomgang og strategier.',
  estimatedMinutes: 90,
  competenceGoals: [
    'anvende alle grammatiske strukturer korrekt',
    'analysere og produsere komplekse tekster',
    'beherske muntlig og skriftlig kommunikasjon',
  ],
  content: [
    {
      id: 'tysk-3-10-intro',
      type: 'text',
      content: `Dette kapitlet hjelper deg å forberede deg til eksamen ved å gjennomgå viktige temaer fra hele kurset og gi deg strategier for ulike oppgavetyper.`,
    },
    {
      id: 'tysk-3-10-def-1',
      type: 'definition',
      title: 'Eksamensbegreper',
      content: `**Prüfungsbegriffe:**
- **die Prüfung** - eksamen
- **die schriftliche Prüfung** - skriftlig eksamen
- **die mündliche Prüfung** - muntlig eksamen
- **die Aufgabe** - oppgaven
- **der Aufsatz** - stilen/essayet
- **die Zusammenfassung** - sammendraget
- **die Analyse** - analysen`,
    },
    {
      id: 'tysk-3-10-text-1',
      type: 'text',
      content: `**Grammatikk-sjekkliste**

| Tema | Kapittel | Status |
|------|----------|--------|
| Konjunktiv I | 1 | Indirekte tale |
| Komplekse setninger | 2 | Leddsetninger, relativsetninger |
| Stilistikk | 3 | Virkemidler, retorikk |
| Genitiv og preposisjoner | 2 | Kasus-system |
| Passiv | 9 | Akademisk skriving |`,
    },
    {
      id: 'tysk-3-10-text-2',
      type: 'text',
      content: `**Oppgavetyper og strategier**

| Oppgavetype | Strategi |
|-------------|----------|
| Lesing | Les overskrift og ingress først, skum teksten |
| Lytting | Les spørsmålene før du lytter |
| Skriving | Lag disposisjon, pass på tid |
| Muntlig | Forbered emner, øv på formuleringer |
| Grammatikk | Sjekk kasus, verbplassering, kongruens |`,
    },
    {
      id: 'tysk-3-10-example-1',
      type: 'example',
      title: 'Eksempelessay-struktur',
      content: `**Tema:** "Diskuter fordeler og ulemper ved sosiale medier"

**Struktur:**
1. **Einleitung** (Innledning)
   - Hook: Fakta om bruk av sosiale medier
   - Tese: "In diesem Aufsatz werden die Vor- und Nachteile..."

2. **Hauptteil** (Hoveddel)
   - Vorteile (fordeler): Kommunikasjon, informasjon
   - Nachteile (ulemper): Personvern, avhengighet
   - Eigene Meinung (egen mening)

3. **Schluss** (Avslutning)
   - Oppsummering
   - Konklusjon`,
    },
    {
      id: 'tysk-3-10-note-1',
      type: 'note',
      content: `Ved muntlig eksamen: Snakk tydelig, bruk variert ordforråd, ikke vær redd for å be om avklaring ("Könnten Sie das bitte wiederholen?"), og vis at du kan diskutere ulike synspunkter.`,
    },
    {
      id: 'tysk-3-10-tip-1',
      type: 'tip',
      content: `Før eksamen: Sov godt, spis frokost, les gjennom instruksjonene nøye, og fordel tiden din på de ulike oppgavene. Ved tvil, gå videre og kom tilbake til vanskelige spørsmål.`,
    },
    {
      id: 'tysk-3-10-text-3',
      type: 'text',
      content: `**Nyttige fraser for eksamen**

| Situasjon | Tysk | Norsk |
|-----------|------|-------|
| Innlede argument | Erstens... Zweitens... | For det første... For det andre... |
| Gi eksempel | Zum Beispiel... | For eksempel... |
| Motargument | Andererseits... | På den annen side... |
| Konkludere | Zusammenfassend... | Oppsummerende... |
| Egen mening | Meiner Meinung nach... | Etter min mening... |`,
    },
  ],
  exercises: [
    {
      id: 'tysk-3-10-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan uttrykker du "For det første" på tysk?',
      options: [
        { id: 'a', text: 'Zuerst', isCorrect: false, feedback: '"Zuerst" betyr "først" i tid.' },
        { id: 'b', text: 'Erstens', isCorrect: true },
        { id: 'c', text: 'Am Anfang', isCorrect: false, feedback: '"Am Anfang" betyr "i begynnelsen".' },
        { id: 'd', text: 'Vor allem', isCorrect: false, feedback: '"Vor allem" betyr "fremfor alt".' },
      ],
      solution: '"Erstens" brukes for å innlede det første argumentet.',
    },
    {
      id: 'tysk-3-10-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "die mündliche Prüfung"?',
      options: [
        { id: 'a', text: 'Skriftlig eksamen', isCorrect: false, feedback: 'Det er "die schriftliche Prüfung".' },
        { id: 'b', text: 'Muntlig eksamen', isCorrect: true },
        { id: 'c', text: 'Praktisk prøve', isCorrect: false, feedback: 'Det er "die praktische Prüfung".' },
        { id: 'd', text: 'Hjemmeeksamen', isCorrect: false, feedback: 'Det finnes ikke et standard uttrykk.' },
      ],
      solution: '"Die mündliche Prüfung" betyr "muntlig eksamen".',
    },
    {
      id: 'tysk-3-10-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan innleder du egen mening?',
      options: [
        { id: 'a', text: 'Ich weiß, dass...', isCorrect: false, feedback: 'Det er for påstående.' },
        { id: 'b', text: 'Meiner Meinung nach...', isCorrect: true },
        { id: 'c', text: 'Es ist so, dass...', isCorrect: false, feedback: 'Det er en påstand.' },
        { id: 'd', text: 'Man sagt...', isCorrect: false, feedback: 'Det refererer til andre.' },
      ],
      solution: '"Meiner Meinung nach..." innleder personlig mening.',
    },
    {
      id: 'tysk-3-10-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken del kommer vanligvis først i et essay?',
      options: [
        { id: 'a', text: 'Der Hauptteil', isCorrect: false, feedback: 'Hoveddelen kommer etter innledningen.' },
        { id: 'b', text: 'Die Einleitung', isCorrect: true },
        { id: 'c', text: 'Der Schluss', isCorrect: false, feedback: 'Avslutningen kommer sist.' },
        { id: 'd', text: 'Die Zusammenfassung', isCorrect: false, feedback: 'Sammendraget er del av avslutningen.' },
      ],
      solution: '"Die Einleitung" (innledningen) kommer først og presenterer temaet.',
    },
    {
      id: 'tysk-3-10-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan ber du om gjentakelse på muntlig eksamen?',
      options: [
        { id: 'a', text: 'Was?', isCorrect: false, feedback: 'For uformelt.' },
        { id: 'b', text: 'Könnten Sie das bitte wiederholen?', isCorrect: true },
        { id: 'c', text: 'Noch mal!', isCorrect: false, feedback: 'For kommanderende.' },
        { id: 'd', text: 'Ich verstehe nicht.', isCorrect: false, feedback: 'Ber ikke om gjentakelse.' },
      ],
      solution: '"Könnten Sie das bitte wiederholen?" er en høflig måte å be om gjentakelse.',
    },
    {
      id: 'tysk-3-10-ex-6',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Zusammenfassend"?',
      options: [
        { id: 'a', text: 'Først', isCorrect: false, feedback: 'Det er "Erstens" eller "Zuerst".' },
        { id: 'b', text: 'Oppsummerende', isCorrect: true },
        { id: 'c', text: 'Dessuten', isCorrect: false, feedback: 'Det er "Außerdem".' },
        { id: 'd', text: 'Derimot', isCorrect: false, feedback: 'Det er "Dagegen".' },
      ],
      solution: '"Zusammenfassend" betyr "oppsummerende" og brukes i konklusjonen.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TYSK_3_1,
  CHAPTER_TYSK_3_2,
  CHAPTER_TYSK_3_3,
  CHAPTER_TYSK_3_4,
  CHAPTER_TYSK_3_5,
  CHAPTER_TYSK_3_6,
  CHAPTER_TYSK_3_7,
  CHAPTER_TYSK_3_8,
  CHAPTER_TYSK_3_9,
  CHAPTER_TYSK_3_10,
];
