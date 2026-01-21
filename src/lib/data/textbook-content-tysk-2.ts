/* eslint-disable */
// @ts-nocheck
/**
 * Tysk niva 2 - Tekstbokinnhold
 *
 * Dekker LK20 laereplan for fremmedsprak niva 2
 * Videregaende tysk for elever som har fullfort niva 1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Perfekt und Prateritum - Fortid utvidet
// ============================================================================

export const CHAPTER_TYSK_2_1: TextbookChapter = {
  id: 'tysk-2-1',
  courseId: 'tysk-2',
  chapterNumber: '1',
  title: 'Perfekt und Prateritum - Fortid utvidet',
  description: 'Utdyp kunnskapen om fortidsformer pa tysk med fokus pa perfektum og preteritum.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke varierte setningsstrukturer og tidsuttrykk',
    'uttrykke seg skriftlig og muntlig med sammenheng og variasjon',
  ],
  content: [
    {
      id: 'tysk-2-1-intro',
      type: 'text',
      content: `Pa niva 2 utvider vi forstaelsen av fortidsformene pa tysk. Du har allerede laert grunnleggende perfektum - na skal vi se pa nar man bruker perfektum versus preteritum, og hvordan sterke og svake verb oppforer seg forskjellig.`,
    },
    {
      id: 'tysk-2-1-def-1',
      type: 'definition',
      title: 'Perfektum (das Perfekt)',
      content: `Perfektum brukes i dagligtale og uformelle situasjoner. Det dannes med hjelpeverb (haben/sein) + partisipp perfektum.

**Svake verb:** ge- + stamme + -t
- machen -> gemacht
- spielen -> gespielt
- arbeiten -> gearbeitet

**Sterke verb:** ge- + endret stamme + -en
- fahren -> gefahren
- schreiben -> geschrieben
- sehen -> gesehen`,
    },
    {
      id: 'tysk-2-1-def-2',
      type: 'definition',
      title: 'Preteritum (das Prateritum)',
      content: `Preteritum brukes mest i skriftsprak, nyheter, fortellinger og med hjelpeverb/modalverb.

**Svake verb:** stamme + -te
- machen -> machte
- spielen -> spielte

**Sterke verb:** vokalskifte i stammen
- fahren -> fuhr
- schreiben -> schrieb
- sehen -> sah`,
    },
    {
      id: 'tysk-2-1-text-1',
      type: 'text',
      content: `**Nar bruker man hva?**

| Situasjon | Anbefalt form |
|-----------|---------------|
| Muntlig samtale | Perfektum |
| Uformell skriving | Perfektum |
| Nyheter og journalistikk | Preteritum |
| Fortellinger og litteratur | Preteritum |
| Med sein/haben/werden | Preteritum (var/hadde/ble) |
| Med modalverb | Preteritum (kunne, ville, matte) |`,
    },
    {
      id: 'tysk-2-1-example-1',
      type: 'example',
      title: 'Sammenligning av fortidsformer',
      content: `**Muntlig (Perfektum):**
- Ich habe gestern ein Buch gelesen. *(Jeg leste en bok i gar.)*
- Wir sind nach Berlin gefahren. *(Vi dro til Berlin.)*

**Skriftlig (Prateritum):**
- Ich las gestern ein Buch. *(Jeg leste en bok i gar.)*
- Wir fuhren nach Berlin. *(Vi dro til Berlin.)*

**Med hjelpeverb (alltid Prateritum):**
- Ich war mude. *(Jeg var trott.)* - ikke "Ich bin mude gewesen"
- Er hatte keine Zeit. *(Han hadde ikke tid.)* - ikke "Er hat keine Zeit gehabt"`,
    },
    {
      id: 'tysk-2-1-text-2',
      type: 'text',
      content: `**Viktige sterke verb med vokalskifte:**

| Infinitiv | Prateritum | Perfektum | Betydning |
|-----------|------------|-----------|-----------|
| fahren | fuhr | ist gefahren | kjore |
| gehen | ging | ist gegangen | ga |
| kommen | kam | ist gekommen | komme |
| lesen | las | hat gelesen | lese |
| schreiben | schrieb | hat geschrieben | skrive |
| sprechen | sprach | hat gesprochen | snakke |
| nehmen | nahm | hat genommen | ta |
| geben | gab | hat gegeben | gi |
| sehen | sah | hat gesehen | se |
| treffen | traf | hat getroffen | mote |`,
    },
    {
      id: 'tysk-2-1-tip-1',
      type: 'tip',
      content: `Verb som uttrykker bevegelse eller tilstandsendring bruker "sein" som hjelpeverb i perfektum: gehen, fahren, kommen, fliegen, schwimmen, einschlafen, aufwachen.`,
    },
    {
      id: 'tysk-2-1-warning-1',
      type: 'warning',
      content: `Unnga a blande formene! I muntlig tysk later det unaturlig a bruke preteritum med vanlige verb: "Ich spielte Fussball" (uvanlig) vs. "Ich habe Fussball gespielt" (naturlig).`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er perfektum av "schreiben"?',
      options: [
        { id: 'a', text: 'hat geschrieben', isCorrect: true },
        { id: 'b', text: 'hat geschreibt', isCorrect: false, feedback: '"Schreiben" er et sterkt verb med uregelmessig partisipp.' },
        { id: 'c', text: 'ist geschrieben', isCorrect: false, feedback: '"Schreiben" bruker "haben", ikke "sein".' },
        { id: 'd', text: 'hat schrieb', isCorrect: false, feedback: 'Partisipp perfektum skal ende pa -en for sterke verb.' },
      ],
      solution: '"Schreiben" er et sterkt verb: schreiben -> schrieb -> hat geschrieben.',
    },
    {
      id: 'tysk-2-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken setning er mest naturlig i muntlig tysk?',
      options: [
        { id: 'a', text: 'Ich ging gestern ins Kino.', isCorrect: false, feedback: 'Preteritum brukes sjelden muntlig med vanlige verb.' },
        { id: 'b', text: 'Ich bin gestern ins Kino gegangen.', isCorrect: true },
        { id: 'c', text: 'Ich war gestern ins Kino gehen.', isCorrect: false, feedback: 'Feil grammatisk konstruksjon.' },
        { id: 'd', text: 'Ich habe gestern ins Kino gegangen.', isCorrect: false, feedback: '"Gehen" bruker "sein", ikke "haben".' },
      ],
      solution: 'I muntlig tysk bruker man perfektum. "Gehen" krever "sein" som hjelpeverb.',
    },
    {
      id: 'tysk-2-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er preteritum av "kommen"?',
      options: [
        { id: 'a', text: 'kommte', isCorrect: false, feedback: '"Kommen" er et sterkt verb med vokalskifte.' },
        { id: 'b', text: 'kam', isCorrect: true },
        { id: 'c', text: 'komm', isCorrect: false, feedback: 'Verbet mangler endelse.' },
        { id: 'd', text: 'gekommen', isCorrect: false, feedback: 'Det er partisipp perfektum, ikke preteritum.' },
      ],
      solution: '"Kommen" er et sterkt verb: kommen -> kam -> ist gekommen.',
    },
    {
      id: 'tysk-2-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor sier man "Ich war mude" og ikke "Ich bin mude gewesen"?',
      options: [
        { id: 'a', text: 'Fordi "sein" alltid star i preteritum', isCorrect: false, feedback: 'Ikke alltid, men det er den foretrukne formen.' },
        { id: 'b', text: 'Fordi hjelpeverb foretrekkes i preteritum ogsa i muntlig tysk', isCorrect: true },
        { id: 'c', text: 'Fordi perfektum ikke finnes for "sein"', isCorrect: false, feedback: 'Perfektum finnes, men brukes sjelden.' },
        { id: 'd', text: 'Fordi det er grammatisk feil', isCorrect: false, feedback: 'Det er ikke feil, bare unaturlig.' },
      ],
      solution: 'Hjelpeverb (sein, haben) og modalverb brukes nesten alltid i preteritum, selv i muntlig sprak.',
    },
    {
      id: 'tysk-2-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig perfektumform: "Die Kinder _____ im Park _____."',
      options: [
        { id: 'a', text: 'haben ... gespielt', isCorrect: true },
        { id: 'b', text: 'sind ... gespielt', isCorrect: false, feedback: '"Spielen" bruker "haben", ikke "sein".' },
        { id: 'c', text: 'haben ... gespielen', isCorrect: false, feedback: 'Feil partisippform.' },
        { id: 'd', text: 'sind ... gespielen', isCorrect: false, feedback: 'Bade hjelpeverb og partisipp er feil.' },
      ],
      solution: '"Spielen" er et svakt verb som bruker "haben": haben gespielt.',
    },
    {
      id: 'tysk-2-1-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Oversett til tysk med preteritum: "Hun leste boken og skrev et brev."',
      options: [
        { id: 'a', text: 'Sie las das Buch und schrieb einen Brief.', isCorrect: true },
        { id: 'b', text: 'Sie leste das Buch und schreibte einen Brief.', isCorrect: false, feedback: 'Svake endelser pa sterke verb er feil.' },
        { id: 'c', text: 'Sie hat das Buch gelesen und einen Brief geschrieben.', isCorrect: false, feedback: 'Det er perfektum, ikke preteritum.' },
        { id: 'd', text: 'Sie las das Buch und schreibte einen Brief.', isCorrect: false, feedback: '"Schreiben" -> "schrieb" (sterkt verb).' },
      ],
      solution: 'Bade "lesen" og "schreiben" er sterke verb: las, schrieb.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Konjunktiv II - Irrealis
// ============================================================================

export const CHAPTER_TYSK_2_2: TextbookChapter = {
  id: 'tysk-2-2',
  courseId: 'tysk-2',
  chapterNumber: '2',
  title: 'Konjunktiv II - Irrealis',
  description: 'Laer a uttrykke onsker, hoflighet og hypotetiske situasjoner med konjunktiv II.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke varierte setningsstrukturer og tidsuttrykk',
    'uttrykke seg hoeflig og nyansert',
  ],
  content: [
    {
      id: 'tysk-2-2-intro',
      type: 'text',
      content: `Konjunktiv II (ogsa kalt irrealis) brukes for a uttrykke:
- Hoflighet og forsiktige foresporsler
- Onsker og drommer
- Hypotetiske/urealistiske situasjoner
- Betingelsessetninger (hvis...sa)`,
    },
    {
      id: 'tysk-2-2-def-1',
      type: 'definition',
      title: 'Dannelse av Konjunktiv II',
      content: `**Med "wurde" + infinitiv (vanligst):**
- Ich wurde gern reisen. *(Jeg ville gjerne reise.)*
- Sie wurde das machen. *(Hun ville gjore det.)*

**Direkte former for vanlige verb:**
- sein -> ware (Ich ware froh.)
- haben -> hatte (Ich hatte gern...)
- konnen -> konnte (Ich konnte das machen.)
- mussen -> musste (Ich musste gehen.)
- durfen -> durfte (Durfte ich fragen?)
- sollen -> sollte (Du solltest das machen.)
- wollen -> wollte (Er wollte nicht kommen.)`,
    },
    {
      id: 'tysk-2-2-text-1',
      type: 'text',
      content: `**Konjunktiv II av hjelpe- og modalverb:**

| Infinitiv | Konjunktiv II | Eksempel |
|-----------|---------------|----------|
| sein | ware | Ich ware gern reich. |
| haben | hatte | Ich hatte gern mehr Zeit. |
| werden | wurde | Ich wurde das machen. |
| konnen | konnte | Konntest du mir helfen? |
| mussen | musste | Ich musste fruher gehen. |
| durfen | durfte | Durfte ich Sie storen? |
| sollen | sollte | Du solltest mehr schlafen. |
| wollen | wollte | Ich wollte dich fragen. |`,
    },
    {
      id: 'tysk-2-2-example-1',
      type: 'example',
      title: 'Hoflighet med Konjunktiv II',
      content: `**Hoflige foresporsler:**
- Konnten Sie mir bitte helfen? *(Kunne De hjelpe meg?)*
- Wurden Sie das wiederholen? *(Ville De gjenta det?)*
- Hatten Sie einen Moment Zeit? *(Har De et oyeblikk?)*
- Durfte ich Sie etwas fragen? *(Kunne jeg sporre Dem om noe?)*

**Sammenlign med indikativ (direkte):**
- Konnen Sie mir helfen? (ok, men mer direkte)
- Helfen Sie mir! (kommando - uhoeflig)`,
    },
    {
      id: 'tysk-2-2-example-2',
      type: 'example',
      title: 'Onsker og drommer',
      content: `**Uttrykke onsker:**
- Ich wurde gern in Deutschland studieren. *(Jeg skulle gjerne studert i Tyskland.)*
- Ich hatte gern ein grosses Haus. *(Jeg skulle onske jeg hadde et stort hus.)*
- Wenn ich doch nur mehr Zeit hatte! *(Om jeg bare hadde mer tid!)*

**Med "wenn" (hvis):**
- Wenn ich reich ware, wurde ich reisen. *(Hvis jeg var rik, ville jeg reise.)*
- Wenn ich fliegen konnte, ware ich glucklich. *(Hvis jeg kunne fly, ville jeg vaere lykkelig.)*`,
    },
    {
      id: 'tysk-2-2-def-2',
      type: 'definition',
      title: 'Betingelsessetninger med Konjunktiv II',
      content: `**Struktur:** Wenn + subjekt + ... + verb (Konj. II), (sa) + verb (Konj. II) + subjekt + ...

- Wenn ich Zeit hatte, wurde ich dir helfen.
- Wenn er kame, ware ich froh.
- Hatte ich Geld, wurde ich ein Auto kaufen. (uten "wenn" - verbet forst)`,
    },
    {
      id: 'tysk-2-2-tip-1',
      type: 'tip',
      content: `For de fleste verb bruker man "wurde" + infinitiv i stedet for de gamle konjunktivformene. "Ich wurde gehen" er mye vanligere enn "Ich ginge".`,
    },
    {
      id: 'tysk-2-2-note-1',
      type: 'note',
      content: `Konjunktiv II av sterke verb dannes fra preteritumstammen med omlyd: kam -> kame, ging -> ginge, fuhr -> fuhre. Men "wurde"-formen er vanligere i dagligtale.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken setning er mest hoeflig?',
      options: [
        { id: 'a', text: 'Gib mir das Buch!', isCorrect: false, feedback: 'Imperativ er kommanderende, ikke hoeflig.' },
        { id: 'b', text: 'Konnten Sie mir das Buch geben?', isCorrect: true },
        { id: 'c', text: 'Geben Sie mir das Buch.', isCorrect: false, feedback: 'Hoeflig, men Konjunktiv II er hoefligere.' },
        { id: 'd', text: 'Ich will das Buch.', isCorrect: false, feedback: 'Direkte og uhoeflig.' },
      ],
      solution: 'Konjunktiv II ("Konnten Sie...") er den hoefligste maten a sporre pa.',
    },
    {
      id: 'tysk-2-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Konjunktiv II av "sein" for "ich"?',
      options: [
        { id: 'a', text: 'sei', isCorrect: false, feedback: 'Det er Konjunktiv I.' },
        { id: 'b', text: 'ware', isCorrect: true },
        { id: 'c', text: 'wurde sein', isCorrect: false, feedback: 'Man bruker ikke "wurde" med "sein".' },
        { id: 'd', text: 'war', isCorrect: false, feedback: 'Det er preteritum indikativ.' },
      ],
      solution: 'Konjunktiv II av "sein": ich ware, du warest, er/sie ware, wir waren, ihr waret, sie waren.',
    },
    {
      id: 'tysk-2-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Oversett: "Jeg skulle onske jeg kunne snakke tysk flytende."',
      options: [
        { id: 'a', text: 'Ich wunsche, ich kann fliessend Deutsch sprechen.', isCorrect: false, feedback: 'Mangler Konjunktiv II.' },
        { id: 'b', text: 'Ich wunschte, ich konnte fliessend Deutsch sprechen.', isCorrect: true },
        { id: 'c', text: 'Ich wurde fliessend Deutsch sprechen konnen.', isCorrect: false, feedback: 'Grammatisk ukorrekt ordstilling.' },
        { id: 'd', text: 'Wenn ich Deutsch spreche, bin ich froh.', isCorrect: false, feedback: 'Helt annen betydning.' },
      ],
      solution: '"Ich wunschte" + Konjunktiv II uttrykker et onske om noe urealistisk.',
    },
    {
      id: 'tysk-2-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Fyll inn: "Wenn ich Zeit _____, _____ ich dir helfen."',
      options: [
        { id: 'a', text: 'habe ... werde', isCorrect: false, feedback: 'Det er indikativ, ikke irrealis.' },
        { id: 'b', text: 'hatte ... wurde', isCorrect: true },
        { id: 'c', text: 'hatte ... werde', isCorrect: false, feedback: 'Bland ikke Konjunktiv II og indikativ.' },
        { id: 'd', text: 'habe ... wurde', isCorrect: false, feedback: 'Bland ikke indikativ og Konjunktiv II.' },
      ],
      solution: 'Bade "wenn"-delen og hovedsetningen skal vaere i Konjunktiv II.',
    },
    {
      id: 'tysk-2-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken setning uttrykker et rad (anbefaling)?',
      options: [
        { id: 'a', text: 'Du musst mehr lernen.', isCorrect: false, feedback: 'Det er en pabud, ikke et rad.' },
        { id: 'b', text: 'Du solltest mehr lernen.', isCorrect: true },
        { id: 'c', text: 'Du wirst mehr lernen.', isCorrect: false, feedback: 'Det er en prediksjon.' },
        { id: 'd', text: 'Du lernst mehr.', isCorrect: false, feedback: 'Det er en konstatering.' },
      ],
      solution: '"Solltest" (Konjunktiv II av "sollen") brukes for hoeflige rad og anbefalinger.',
    },
    {
      id: 'tysk-2-2-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Omform til Konjunktiv II: "Wenn ich reich bin, kaufe ich ein Haus."',
      options: [
        { id: 'a', text: 'Wenn ich reich ware, kaufte ich ein Haus.', isCorrect: false, feedback: '"Kaufte" er mulig, men "wurde kaufen" er vanligere.' },
        { id: 'b', text: 'Wenn ich reich ware, wurde ich ein Haus kaufen.', isCorrect: true },
        { id: 'c', text: 'Wenn ich reich wurde, ware ich ein Haus kaufen.', isCorrect: false, feedback: 'Feil grammatikk.' },
        { id: 'd', text: 'Ware ich reich, kaufe ich ein Haus.', isCorrect: false, feedback: 'Hovedsetningen mangler Konjunktiv II.' },
      ],
      solution: 'Riktig irrealis: "Wenn ich reich ware, wurde ich ein Haus kaufen."',
    },
  ],
};

// ============================================================================
// Kapittel 3: Passiv und Relativsatze
// ============================================================================

export const CHAPTER_TYSK_2_3: TextbookChapter = {
  id: 'tysk-2-3',
  courseId: 'tysk-2',
  chapterNumber: '3',
  title: 'Passiv und Relativsatze',
  description: 'Laer passivkonstruksjoner og relativsetninger for mer avansert tysk.',
  estimatedMinutes: 85,
  competenceGoals: [
    'bruke varierte setningsstrukturer',
    'lese og forsta lengre tekster',
  ],
  content: [
    {
      id: 'tysk-2-3-intro',
      type: 'text',
      content: `I dette kapittelet laerer du to viktige grammatiske strukturer som gjor tysken din mer avansert: passiv (lidende form) og relativsetninger (som forklarer substantiver naermere).`,
    },
    {
      id: 'tysk-2-3-def-1',
      type: 'definition',
      title: 'Passiv (das Passiv)',
      content: `Passiv brukes nar handlingen er viktigere enn den som utforer den.

**Dannelse:** werden + partisipp perfektum

**Aktiv:** Der Koch kocht das Essen. *(Kokken lager maten.)*
**Passiv:** Das Essen wird (vom Koch) gekocht. *(Maten lages (av kokken).)*`,
    },
    {
      id: 'tysk-2-3-text-1',
      type: 'text',
      content: `**Passiv i ulike tider:**

| Tid | Struktur | Eksempel |
|-----|----------|----------|
| Presens | wird + partisipp | Das Buch wird gelesen. |
| Preteritum | wurde + partisipp | Das Buch wurde gelesen. |
| Perfektum | ist + partisipp + worden | Das Buch ist gelesen worden. |
| Futurum | wird + partisipp + werden | Das Buch wird gelesen werden. |`,
    },
    {
      id: 'tysk-2-3-example-1',
      type: 'example',
      title: 'Passiv i praksis',
      content: `**Presens passiv:**
- Die Hausaufgaben werden gemacht. *(Leksene blir gjort.)*
- Deutsch wird in vielen Landern gesprochen. *(Tysk snakkes i mange land.)*

**Preteritum passiv:**
- Das Haus wurde 1900 gebaut. *(Huset ble bygget i 1900.)*
- Die E-Mail wurde gestern gesendet. *(E-posten ble sendt i gar.)*

**Med agens (av hvem):**
- Der Roman wurde von Goethe geschrieben. *(Romanen ble skrevet av Goethe.)*`,
    },
    {
      id: 'tysk-2-3-def-2',
      type: 'definition',
      title: 'Relativsetninger (Relativsatze)',
      content: `Relativsetninger gir mer informasjon om et substantiv. De innledes med et relativpronomen som boyesetter.

**Relativpronomen:**
| Kasus | Maskulin | Feminin | Noytrum | Flertall |
|-------|----------|---------|---------|----------|
| Nominativ | der | die | das | die |
| Akkusativ | den | die | das | die |
| Dativ | dem | der | dem | denen |
| Genitiv | dessen | deren | dessen | deren |`,
    },
    {
      id: 'tysk-2-3-text-2',
      type: 'text',
      content: `**Regler for relativsetninger:**
1. Relativpronomenet star rett etter substantivet det refererer til
2. Verbet star til slutt i relativsetningen
3. Kasus bestemmes av funksjonen i relativsetningen
4. Kjonn og tall bestemmes av substantivet det refererer til`,
    },
    {
      id: 'tysk-2-3-example-2',
      type: 'example',
      title: 'Relativsetninger i ulike kasus',
      content: `**Nominativ (subjekt i relativsetningen):**
- Der Mann, **der** dort steht, ist mein Lehrer.
*(Mannen som star der, er laereren min.)*

**Akkusativ (objekt i relativsetningen):**
- Das Buch, **das** ich lese, ist interessant.
*(Boken som jeg leser, er interessant.)*

**Dativ (indirekte objekt):**
- Die Frau, **der** ich geholfen habe, war nett.
*(Kvinnen som jeg hjalp, var hyggelig.)*

**Med preposisjon:**
- Der Stuhl, **auf dem** ich sitze, ist unbequem.
*(Stolen som jeg sitter pa, er ukomfortabel.)*`,
    },
    {
      id: 'tysk-2-3-tip-1',
      type: 'tip',
      content: `I relativsetninger star verbet alltid til slutt! "Das Auto, das ich gekauft habe, ist rot." (ikke "das ich habe gekauft")`,
    },
    {
      id: 'tysk-2-3-warning-1',
      type: 'warning',
      content: `Ikke forveksle relativpronomen med artikler! Selv om de ser like ut, har de forskjellige funksjoner. Relativpronomen innleder bisetninger.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Gjor om til passiv: "Man spricht hier Deutsch."',
      options: [
        { id: 'a', text: 'Hier wird Deutsch gesprochen.', isCorrect: true },
        { id: 'b', text: 'Hier ist Deutsch gesprochen.', isCorrect: false, feedback: 'Passiv presens bruker "wird", ikke "ist".' },
        { id: 'c', text: 'Deutsch spricht sich hier.', isCorrect: false, feedback: 'Det er refleksiv, ikke passiv.' },
        { id: 'd', text: 'Hier wurden Deutsch sprechen.', isCorrect: false, feedback: 'Grammatisk feil.' },
      ],
      solution: 'Passiv presens: subjekt + wird + partisipp perfektum.',
    },
    {
      id: 'tysk-2-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket relativpronomen passer? "Das Madchen, _____ ich kenne, heisst Anna."',
      options: [
        { id: 'a', text: 'der', isCorrect: false, feedback: '"Madchen" er noytrum.' },
        { id: 'b', text: 'die', isCorrect: false, feedback: '"Madchen" er noytrum, ikke femininum.' },
        { id: 'c', text: 'das', isCorrect: true },
        { id: 'd', text: 'den', isCorrect: false, feedback: '"Den" er maskulin akkusativ.' },
      ],
      solution: '"Madchen" er noytrum (das Madchen). I akkusativ: das.',
    },
    {
      id: 'tysk-2-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig passivform for preteritum: "Das Bild _____ von Picasso _____."',
      options: [
        { id: 'a', text: 'wird ... gemalt', isCorrect: false, feedback: 'Det er presens passiv.' },
        { id: 'b', text: 'wurde ... gemalt', isCorrect: true },
        { id: 'c', text: 'ist ... gemalt worden', isCorrect: false, feedback: 'Det er perfektum passiv.' },
        { id: 'd', text: 'war ... gemalt', isCorrect: false, feedback: '"War" brukes ikke i passiv.' },
      ],
      solution: 'Preteritum passiv: wurde + partisipp perfektum.',
    },
    {
      id: 'tysk-2-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig relativpronomen: "Der Mann, _____ ich das Buch gegeben habe, ist mein Onkel."',
      options: [
        { id: 'a', text: 'der', isCorrect: false, feedback: 'Nominativ passer ikke - mannen er indirekte objekt.' },
        { id: 'b', text: 'den', isCorrect: false, feedback: 'Akkusativ passer ikke - "geben" krever dativ.' },
        { id: 'c', text: 'dem', isCorrect: true },
        { id: 'd', text: 'dessen', isCorrect: false, feedback: 'Genitiv passer ikke her.' },
      ],
      solution: '"Geben" krever dativ for den som mottar. Maskulin dativ = dem.',
    },
    {
      id: 'tysk-2-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er perfektum passiv av "Das Haus wird gebaut"?',
      options: [
        { id: 'a', text: 'Das Haus wurde gebaut.', isCorrect: false, feedback: 'Det er preteritum passiv.' },
        { id: 'b', text: 'Das Haus ist gebaut worden.', isCorrect: true },
        { id: 'c', text: 'Das Haus hat gebaut geworden.', isCorrect: false, feedback: 'Passiv perfektum bruker "ist", ikke "hat".' },
        { id: 'd', text: 'Das Haus ist gebaut gewesen.', isCorrect: false, feedback: '"Worden" er riktig, ikke "gewesen".' },
      ],
      solution: 'Perfektum passiv: ist + partisipp + worden.',
    },
    {
      id: 'tysk-2-3-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Fullfør: "Die Stadt, in _____ ich wohne, ist sehr schon."',
      options: [
        { id: 'a', text: 'die', isCorrect: false, feedback: '"In" krever dativ nar det betyr "inne i".' },
        { id: 'b', text: 'der', isCorrect: true },
        { id: 'c', text: 'das', isCorrect: false, feedback: '"Stadt" er femininum.' },
        { id: 'd', text: 'dem', isCorrect: false, feedback: '"Stadt" er femininum, ikke maskulin/noytrum.' },
      ],
      solution: '"Die Stadt" er femininum. "In" + dativ = in der.',
    },
  ],
};

// ============================================================================
// Kapittel 4: Adjektivdeklination
// ============================================================================

export const CHAPTER_TYSK_2_4: TextbookChapter = {
  id: 'tysk-2-4',
  courseId: 'tysk-2',
  chapterNumber: '4',
  title: 'Adjektivdeklination',
  description: 'Mestre adjektivboyning i alle kasus og med ulike artikler.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke et bredt ordforrad og idiomatiske uttrykk',
    'uttrykke seg skriftlig med variasjon',
  ],
  content: [
    {
      id: 'tysk-2-4-intro',
      type: 'text',
      content: `Adjektivboyning pa tysk avhenger av tre faktorer:
1. Kasus (nominativ, akkusativ, dativ, genitiv)
2. Kjonn (maskulin, feminin, noytrum) og tall (entall, flertall)
3. Type artikkel foran (bestemt, ubestemt, eller ingen)`,
    },
    {
      id: 'tysk-2-4-def-1',
      type: 'definition',
      title: 'Sterk boyning (uten artikkel)',
      content: `Nar det ikke er noen artikkel, ma adjektivet selv vise kjonn og kasus.

| Kasus | Maskulin | Feminin | Noytrum | Flertall |
|-------|----------|---------|---------|----------|
| Nom. | -er | -e | -es | -e |
| Akk. | -en | -e | -es | -e |
| Dat. | -em | -er | -em | -en |
| Gen. | -en | -er | -en | -er |

**Eksempel:** kalter Kaffee, frische Milch, warmes Wasser`,
    },
    {
      id: 'tysk-2-4-def-2',
      type: 'definition',
      title: 'Svak boyning (med bestemt artikkel)',
      content: `Etter der/die/das bruker adjektivet svake endelser (mest -e og -en).

| Kasus | Maskulin | Feminin | Noytrum | Flertall |
|-------|----------|---------|---------|----------|
| Nom. | -e | -e | -e | -en |
| Akk. | -en | -e | -e | -en |
| Dat. | -en | -en | -en | -en |
| Gen. | -en | -en | -en | -en |

**Eksempel:** der kalte Kaffee, die frische Milch, das warme Wasser`,
    },
    {
      id: 'tysk-2-4-def-3',
      type: 'definition',
      title: 'Blandet boyning (med ubestemt artikkel)',
      content: `Etter ein/eine/ein bruker adjektivet blandet boyning.

| Kasus | Maskulin | Feminin | Noytrum |
|-------|----------|---------|---------|
| Nom. | -er | -e | -es |
| Akk. | -en | -e | -es |
| Dat. | -en | -en | -en |
| Gen. | -en | -en | -en |

**Eksempel:** ein kalter Kaffee, eine frische Milch, ein warmes Wasser`,
    },
    {
      id: 'tysk-2-4-text-1',
      type: 'text',
      content: `**Hovedregel for a huske:**
- Noen ma vise kjonn/kasus - enten artikkelen eller adjektivet
- Hvis artikkelen viser det tydelig (der, die, das, den, dem): adjektivet far -e eller -en
- Hvis artikkelen ikke viser det (ein, mein): adjektivet ma vise det selv`,
    },
    {
      id: 'tysk-2-4-example-1',
      type: 'example',
      title: 'Sammenligning av boyninger',
      content: `**Maskulin nominativ:**
- kalter Kaffee (sterk - ingen artikkel)
- der kalte Kaffee (svak - bestemt artikkel)
- ein kalter Kaffee (blandet - ubestemt artikkel)

**Femininum akkusativ:**
- frische Milch
- die frische Milch
- eine frische Milch

**Noytrum dativ:**
- mit warmem Wasser
- mit dem warmen Wasser
- mit einem warmen Wasser`,
    },
    {
      id: 'tysk-2-4-tip-1',
      type: 'tip',
      content: `I dativ og genitiv er endelsen nesten alltid -en, uansett boyningstype. Fokuser pa nominativ og akkusativ!`,
    },
    {
      id: 'tysk-2-4-example-2',
      type: 'example',
      title: 'Praktiske eksempler',
      content: `**I setninger:**
- Ich trinke gern heissen Tee. *(sterk, akk.)*
- Der junge Mann arbeitet hier. *(svak, nom.)*
- Sie hat ein neues Auto gekauft. *(blandet, akk.)*
- Mit meinem alten Freund gehe ich oft spazieren. *(blandet, dat.)*

**Flere adjektiv:**
- ein grosses, rotes Auto (begge far samme endelse)
- der alte, kluge Mann
- frisches, kaltes Wasser`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Velg riktig: "Das ist ein _____ Buch."',
      options: [
        { id: 'a', text: 'interessantes', isCorrect: true },
        { id: 'b', text: 'interessante', isCorrect: false, feedback: 'Noytrum nominativ med "ein" krever -es.' },
        { id: 'c', text: 'interessanten', isCorrect: false, feedback: '-en brukes i dativ/genitiv eller etter bestemt artikkel.' },
        { id: 'd', text: 'interessanter', isCorrect: false, feedback: '-er er for maskulin nominativ.' },
      ],
      solution: 'Med "ein" + noytrum nominativ: -es (blandet boyning).',
    },
    {
      id: 'tysk-2-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Velg riktig: "Ich sehe den _____ Hund."',
      options: [
        { id: 'a', text: 'grosser', isCorrect: false, feedback: '"Der" viser allerede kasus, sa adjektivet far -en.' },
        { id: 'b', text: 'grosse', isCorrect: false, feedback: '-e er for nominativ, ikke akkusativ maskulin.' },
        { id: 'c', text: 'grossen', isCorrect: true },
        { id: 'd', text: 'grosses', isCorrect: false, feedback: '-es er for noytrum.' },
      ],
      solution: 'Etter "den" (bestemt artikkel akk.): svak boyning med -en.',
    },
    {
      id: 'tysk-2-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig: "Sie trinkt _____ Milch."',
      options: [
        { id: 'a', text: 'kalte', isCorrect: true },
        { id: 'b', text: 'kalten', isCorrect: false, feedback: 'Femininum akkusativ uten artikkel: -e.' },
        { id: 'c', text: 'kalter', isCorrect: false, feedback: '-er er for femininum dativ.' },
        { id: 'd', text: 'kaltes', isCorrect: false, feedback: '-es er for noytrum.' },
      ],
      solution: 'Uten artikkel + femininum akkusativ: sterk boyning med -e.',
    },
    {
      id: 'tysk-2-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig: "Mit meinem _____ Freund gehe ich ins Kino."',
      options: [
        { id: 'a', text: 'guter', isCorrect: false, feedback: 'Dativ krever -en etter possessivpronomen.' },
        { id: 'b', text: 'gute', isCorrect: false, feedback: '-e er for nominativ/akkusativ.' },
        { id: 'c', text: 'guten', isCorrect: true },
        { id: 'd', text: 'gutem', isCorrect: false, feedback: '"Meinem" viser allerede dativ.' },
      ],
      solution: 'Etter possessivpronomen i dativ: blandet boyning med -en.',
    },
    {
      id: 'tysk-2-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig: "Er hat viele _____ Bucher gelesen."',
      options: [
        { id: 'a', text: 'interessante', isCorrect: true },
        { id: 'b', text: 'interessanten', isCorrect: false, feedback: 'Etter "viele" brukes sterk boyning.' },
        { id: 'c', text: 'interessanter', isCorrect: false, feedback: '-er er for genitiv flertall, ikke akkusativ.' },
        { id: 'd', text: 'interessantes', isCorrect: false, feedback: '-es er entall noytrum.' },
      ],
      solution: 'Etter mengdeord som "viele" brukes sterk boyning: flertall akkusativ = -e.',
    },
    {
      id: 'tysk-2-4-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig kombinasjon: "_____ Wetter ist heute wunderschon."',
      options: [
        { id: 'a', text: 'Das schone', isCorrect: true },
        { id: 'b', text: 'Das schones', isCorrect: false, feedback: 'Etter "das" brukes svak boyning: -e.' },
        { id: 'c', text: 'Ein schone', isCorrect: false, feedback: '"Ein" med noytrum: -es.' },
        { id: 'd', text: 'Schones', isCorrect: false, feedback: 'Med artikkel trengs svak/blandet boyning.' },
      ],
      solution: 'Etter "das" (bestemt artikkel noytrum nom.): svak boyning med -e.',
    },
  ],
};

// ============================================================================
// Kapittel 5: Deutsche Literatur
// ============================================================================

export const CHAPTER_TYSK_2_5: TextbookChapter = {
  id: 'tysk-2-5',
  courseId: 'tysk-2',
  chapterNumber: '5',
  title: 'Deutsche Literatur',
  description: 'Utforsk tysk litteratur fra klassisismen til moderne tid.',
  estimatedMinutes: 70,
  competenceGoals: [
    'lese og forsta lengre tekster',
    'beskrive sentrale temaer i tyskspraklig kultur',
  ],
  content: [
    {
      id: 'tysk-2-5-intro',
      type: 'text',
      content: `Tysk litteratur har en rik historie som strekker seg over flere arhundrer. Fra Goethe og Schiller til moderne forfattere som Herta Muller og Daniel Kehlmann, har tyske forfattere bidratt enormt til verdensutteraturen.`,
    },
    {
      id: 'tysk-2-5-text-1',
      type: 'text',
      content: `**Viktige litteraere epoker:**

| Epoke | Periode | Kjennetegn |
|-------|---------|------------|
| Aufklarung | 1720-1785 | Fornuft, kritisk tenkning |
| Sturm und Drang | 1765-1785 | Folelser, individualisme |
| Klassik | 1786-1805 | Harmoni, humanisme |
| Romantik | 1795-1848 | Natur, mystikk, folkekultur |
| Realismus | 1848-1890 | Virkelighetsnaer skildring |
| Moderne | 1890- | Eksperimentering, mangfold |`,
    },
    {
      id: 'tysk-2-5-def-1',
      type: 'definition',
      title: 'Weimarer Klassik',
      content: `Den tyske klassisismen (ca. 1786-1805) hadde Weimar som sentrum. De to storste navnene er:

**Johann Wolfgang von Goethe (1749-1832)**
- "Faust" - det storste verket i tysk litteratur
- "Die Leiden des jungen Werthers" - innflytelsesrik roman
- "Wilhelm Meister" - dannelsesroman

**Friedrich Schiller (1759-1805)**
- "Die Rauber" - drama om frihet og oppror
- "Wilhelm Tell" - nasjonalt epos
- "An die Freude" - dikt (brukt i Beethovens 9. symfoni)`,
    },
    {
      id: 'tysk-2-5-example-1',
      type: 'example',
      title: 'Utdrag fra Goethe',
      content: `**Fra "Faust" (Prolog im Himmel):**

*"Des Menschen Tatigkeit kann allzu leicht erschlaffen,*
*Er liebt sich bald die unbedingte Ruh;*
*Drum geb ich gern ihm den Gesellen zu,*
*Der reizt und wirkt und muss als Teufel schaffen."*

*(Menneskets aktivitet kan altfor lett slappes av,*
*Han elsker snart den ubetingede ro;*
*Derfor gir jeg ham gjerne en folgesvenn,*
*Som pirrer og virker og ma som djevel skape.)*`,
    },
    {
      id: 'tysk-2-5-text-2',
      type: 'text',
      content: `**Moderne tyske forfattere:**

| Forfatter | Levetid | Kjente verk |
|-----------|---------|-------------|
| Franz Kafka | 1883-1924 | Die Verwandlung, Der Prozess |
| Thomas Mann | 1875-1955 | Der Zauberberg, Buddenbrooks |
| Hermann Hesse | 1877-1962 | Der Steppenwolf, Siddhartha |
| Bertolt Brecht | 1898-1956 | Die Dreigroschenoper |
| Gunter Grass | 1927-2015 | Die Blechtrommel |
| Herta Muller | 1953- | Atemschaukel (Nobelpris 2009) |`,
    },
    {
      id: 'tysk-2-5-example-2',
      type: 'example',
      title: 'Kafka: Die Verwandlung (1915)',
      content: `**Apningssetningen:**

*"Als Gregor Samsa eines Morgens aus unruhigen Traumen erwachte, fand er sich in seinem Bett zu einem ungeheueren Ungeziefer verwandelt."*

*(Da Gregor Samsa vaknet en morgen fra urolige drommer, fant han seg i sengen forvandlet til et uhyrlig kryp.)*

Denne berømte åpningen kaster leseren rett inn i en absurd situasjon - et kjennetegn på Kafkas stil.`,
    },
    {
      id: 'tysk-2-5-note-1',
      type: 'note',
      content: `Mange tyske forfattere har vunnet Nobelprisen i litteratur, inkludert Thomas Mann (1929), Hermann Hesse (1946), Heinrich Boll (1972), Gunter Grass (1999) og Herta Muller (2009).`,
    },
    {
      id: 'tysk-2-5-tip-1',
      type: 'tip',
      content: `Start med kortere tekster! Kafkas "Die Verwandlung" eller Hesses "Siddhartha" er gode valg for a begynne a lese tysk litteratur.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvem skrev "Faust"?',
      options: [
        { id: 'a', text: 'Friedrich Schiller', isCorrect: false, feedback: 'Schiller skrev bl.a. "Wilhelm Tell".' },
        { id: 'b', text: 'Johann Wolfgang von Goethe', isCorrect: true },
        { id: 'c', text: 'Franz Kafka', isCorrect: false, feedback: 'Kafka skrev "Die Verwandlung".' },
        { id: 'd', text: 'Thomas Mann', isCorrect: false, feedback: 'Mann skrev "Der Zauberberg".' },
      ],
      solution: 'Goethe skrev "Faust", som regnes som det storste verket i tysk litteratur.',
    },
    {
      id: 'tysk-2-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken epoke kjennetegnes av fornuft og kritisk tenkning?',
      options: [
        { id: 'a', text: 'Romantik', isCorrect: false, feedback: 'Romantikken fokuserte pa folelser og mystikk.' },
        { id: 'b', text: 'Sturm und Drang', isCorrect: false, feedback: 'Sturm und Drang var preget av sterke folelser.' },
        { id: 'c', text: 'Aufklarung', isCorrect: true },
        { id: 'd', text: 'Realismus', isCorrect: false, feedback: 'Realismen fokuserte pa virkelighetsnaer skildring.' },
      ],
      solution: 'Aufklarung (opplysningstiden) fokuserte pa fornuft og kritisk tenkning.',
    },
    {
      id: 'tysk-2-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva handler "Die Verwandlung" av Kafka om?',
      options: [
        { id: 'a', text: 'En ung mann som reiser til Italia', isCorrect: false, feedback: 'Det er ikke handlingen i boken.' },
        { id: 'b', text: 'En mann som forvandles til et insekt', isCorrect: true },
        { id: 'c', text: 'En kjaerlighetshistorie i Wien', isCorrect: false, feedback: 'Det er ikke handlingen i boken.' },
        { id: 'd', text: 'En rettsak mot en uskyldig mann', isCorrect: false, feedback: 'Det er "Der Prozess".' },
      ],
      solution: 'I "Die Verwandlung" (Forvandlingen) vakner Gregor Samsa som et stort insekt.',
    },
    {
      id: 'tysk-2-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken by var sentrum for den tyske klassisismen?',
      options: [
        { id: 'a', text: 'Berlin', isCorrect: false, feedback: 'Berlin var viktig, men ikke for Klassik.' },
        { id: 'b', text: 'Wien', isCorrect: false, feedback: 'Wien var osterriksk kultursentrum.' },
        { id: 'c', text: 'Weimar', isCorrect: true },
        { id: 'd', text: 'Munchen', isCorrect: false, feedback: 'Munchen var viktig for annen kunst.' },
      ],
      solution: 'Weimar var sentrum for den tyske klassisismen (Weimarer Klassik).',
    },
    {
      id: 'tysk-2-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilket dikt av Schiller ble brukt i Beethovens 9. symfoni?',
      options: [
        { id: 'a', text: 'Das Lied von der Glocke', isCorrect: false, feedback: 'Det er et annet kjent dikt av Schiller.' },
        { id: 'b', text: 'An die Freude', isCorrect: true },
        { id: 'c', text: 'Der Taucher', isCorrect: false, feedback: 'Det er en ballade av Schiller.' },
        { id: 'd', text: 'Die Burgschaft', isCorrect: false, feedback: 'Det er en annen ballade.' },
      ],
      solution: '"An die Freude" (Ode til gleden) er brukt i finalen av Beethovens 9. symfoni.',
    },
    {
      id: 'tysk-2-5-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken tysk forfatter vant Nobelprisen i litteratur i 2009?',
      options: [
        { id: 'a', text: 'Gunter Grass', isCorrect: false, feedback: 'Grass vant i 1999.' },
        { id: 'b', text: 'Herta Muller', isCorrect: true },
        { id: 'c', text: 'Thomas Mann', isCorrect: false, feedback: 'Mann vant i 1929.' },
        { id: 'd', text: 'Heinrich Boll', isCorrect: false, feedback: 'Boll vant i 1972.' },
      ],
      solution: 'Herta Muller vant Nobelprisen i 2009 for romanen "Atemschaukel".',
    },
  ],
};

// ============================================================================
// Kapittel 6: Geschichte und Politik
// ============================================================================

export const CHAPTER_TYSK_2_6: TextbookChapter = {
  id: 'tysk-2-6',
  courseId: 'tysk-2',
  chapterNumber: '6',
  title: 'Geschichte und Politik',
  description: 'Laer om viktige historiske hendelser og politiske systemer i tysktalende land.',
  estimatedMinutes: 75,
  competenceGoals: [
    'sammenligne samfunnsforhold i Norge og malspraklandene',
    'beskrive sentrale temaer i tysksproaklig kultur og historie',
  ],
  content: [
    {
      id: 'tysk-2-6-intro',
      type: 'text',
      content: `For a forsta dagens Tyskland, Osterrike og Sveits ma vi kjenne historien. Dette kapittelet dekker de viktigste historiske hendelsene fra 1900-tallet og det politiske systemet i dag.`,
    },
    {
      id: 'tysk-2-6-text-1',
      type: 'text',
      content: `**Viktige historiske hendelser:**

| Ar | Hendelse |
|-----|----------|
| 1914-1918 | Forste verdenskrig |
| 1918 | Keiserrikets fall, Weimar-republikken |
| 1933 | Hitler kommer til makten |
| 1939-1945 | Andre verdenskrig |
| 1945 | Tysklands deling |
| 1949 | BRD og DDR opprettes |
| 1961 | Berlinmuren bygges |
| 1989 | Berlinmurens fall |
| 1990 | Tysk gjenforening |`,
    },
    {
      id: 'tysk-2-6-def-1',
      type: 'definition',
      title: 'Die Teilung Deutschlands (Delingen av Tyskland)',
      content: `Etter andre verdenskrig ble Tyskland delt i fire okkupasjonssoner. I 1949 ble:

**BRD (Bundesrepublik Deutschland)** - Vest-Tyskland
- Demokratisk, kapitalistisk
- Alliert med USA og Vesten
- Hovedstad: Bonn

**DDR (Deutsche Demokratische Republik)** - Ost-Tyskland
- Kommunistisk ettpartisstat
- Del av Sovjetblokken
- Hovedstad: Ost-Berlin`,
    },
    {
      id: 'tysk-2-6-example-1',
      type: 'example',
      title: 'Der Fall der Berliner Mauer (1989)',
      content: `**Historisk oyeblikk:**

Den 9. november 1989 falt Berlinmuren etter 28 ar. DDR-borgere strommet over til Vest-Berlin.

*"Niemand hat die Absicht, eine Mauer zu errichten."*
(Ingen har til hensikt a bygge en mur.)
- Walter Ulbricht, 1961 (kort for muren ble bygget)

*"Wir sind das Volk!"* (Vi er folket!)
- Slagord fra demonstrasjonene i 1989`,
    },
    {
      id: 'tysk-2-6-text-2',
      type: 'text',
      content: `**Det politiske systemet i Tyskland i dag:**

| Institusjon | Tysk | Funksjon |
|-------------|------|----------|
| Forbundspresident | Bundespräsident | Statsoverhode (seremoniell) |
| Forbundskansler | Bundeskanzler/in | Regjeringssjef |
| Forbundsdagen | Bundestag | Parlamentet (valgt) |
| Forbundsradet | Bundesrat | Delstatenes representasjon |
| Delstater | Bundeslander | 16 delstater med egen regjering |`,
    },
    {
      id: 'tysk-2-6-def-2',
      type: 'definition',
      title: 'Bundesländer (Delstatene)',
      content: `Tyskland bestar av 16 delstater (Bundeslander):

**Store delstater:** Bayern, Nordrhein-Westfalen, Baden-Wurttemberg, Niedersachsen

**Bystater:** Berlin, Hamburg, Bremen

**Ostlige delstater:** Sachsen, Brandenburg, Thuringen, Sachsen-Anhalt, Mecklenburg-Vorpommern

Hver delstat har egen regjering, parlament og grunnlov.`,
    },
    {
      id: 'tysk-2-6-text-3',
      type: 'text',
      content: `**Viktige politiske ord:**

| Tysk | Norsk |
|------|-------|
| die Demokratie | demokratiet |
| die Verfassung | grunnloven |
| die Wahl | valget |
| wahlen | velge/stemme |
| die Partei | partiet |
| die Regierung | regjeringen |
| das Gesetz | loven |
| die Menschenrechte | menneskerettighetene |
| die Meinungsfreiheit | ytringsfriheten |`,
    },
    {
      id: 'tysk-2-6-note-1',
      type: 'note',
      content: `Den tyske grunnloven heter "Grundgesetz" (grunnlov) og ble vedtatt i 1949. Artikkel 1 sier: "Die Wurde des Menschen ist unantastbar." (Menneskets verdighet er ukrenkelig.)`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Nar falt Berlinmuren?',
      options: [
        { id: 'a', text: '1961', isCorrect: false, feedback: 'Da ble muren bygget.' },
        { id: 'b', text: '1989', isCorrect: true },
        { id: 'c', text: '1990', isCorrect: false, feedback: 'Da ble Tyskland gjenforent.' },
        { id: 'd', text: '1949', isCorrect: false, feedback: 'Da ble BRD og DDR opprettet.' },
      ],
      solution: 'Berlinmuren falt 9. november 1989.',
    },
    {
      id: 'tysk-2-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva heter regjeringssjefen i Tyskland?',
      options: [
        { id: 'a', text: 'Bundesprasident', isCorrect: false, feedback: 'Forbundspresidenten er statsoverhodet.' },
        { id: 'b', text: 'Bundeskanzler', isCorrect: true },
        { id: 'c', text: 'Bundesminister', isCorrect: false, feedback: 'Det er en minister.' },
        { id: 'd', text: 'Ministerprasident', isCorrect: false, feedback: 'Det er leder for en delstat.' },
      ],
      solution: 'Bundeskanzler/in er regjeringssjefen i Tyskland.',
    },
    {
      id: 'tysk-2-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva het Vest-Tyskland?',
      options: [
        { id: 'a', text: 'DDR', isCorrect: false, feedback: 'DDR var Ost-Tyskland.' },
        { id: 'b', text: 'BRD', isCorrect: true },
        { id: 'c', text: 'DRB', isCorrect: false, feedback: 'Det finnes ikke.' },
        { id: 'd', text: 'GDR', isCorrect: false, feedback: 'Det er den engelske forkortelsen for Ost-Tyskland.' },
      ],
      solution: 'BRD = Bundesrepublik Deutschland (Forbundsrepublikken Tyskland).',
    },
    {
      id: 'tysk-2-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mange delstater har Tyskland?',
      options: [
        { id: 'a', text: '10', isCorrect: false, feedback: 'Det er for fa.' },
        { id: 'b', text: '14', isCorrect: false, feedback: 'Det er nesten riktig.' },
        { id: 'c', text: '16', isCorrect: true },
        { id: 'd', text: '20', isCorrect: false, feedback: 'Det er for mange.' },
      ],
      solution: 'Tyskland har 16 delstater (Bundeslander).',
    },
    {
      id: 'tysk-2-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva var slagordet fra demonstrasjonene i DDR i 1989?',
      options: [
        { id: 'a', text: 'Wir sind ein Volk!', isCorrect: false, feedback: 'Det kom senere, for gjenforening.' },
        { id: 'b', text: 'Wir sind das Volk!', isCorrect: true },
        { id: 'c', text: 'Deutschland uber alles!', isCorrect: false, feedback: 'Det er fra en annen tid.' },
        { id: 'd', text: 'Einigkeit und Recht!', isCorrect: false, feedback: 'Det er fra nasjonalsangen.' },
      ],
      solution: '"Wir sind das Volk!" (Vi er folket!) var slagordet fra demonstrasjonene.',
    },
    {
      id: 'tysk-2-6-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva star i artikkel 1 i den tyske grunnloven?',
      options: [
        { id: 'a', text: 'Alle Deutschen sind frei.', isCorrect: false, feedback: 'Det star ikke i artikkel 1.' },
        { id: 'b', text: 'Die Wurde des Menschen ist unantastbar.', isCorrect: true },
        { id: 'c', text: 'Deutschland ist eine Demokratie.', isCorrect: false, feedback: 'Det star i en annen artikkel.' },
        { id: 'd', text: 'Die Bundesrepublik ist ein Rechtsstaat.', isCorrect: false, feedback: 'Det star i en annen artikkel.' },
      ],
      solution: 'Artikkel 1: "Die Wurde des Menschen ist unantastbar." (Menneskets verdighet er ukrenkelig.)',
    },
  ],
};

// ============================================================================
// Kapittel 7: Kultur und Gesellschaft
// ============================================================================

export const CHAPTER_TYSK_2_7: TextbookChapter = {
  id: 'tysk-2-7',
  courseId: 'tysk-2',
  chapterNumber: '7',
  title: 'Kultur und Gesellschaft',
  description: 'Utforsk kultur, tradisjoner og samfunnsliv i tysktalende land.',
  estimatedMinutes: 65,
  competenceGoals: [
    'beskrive sentrale temaer i tyskspraklig kultur',
    'sammenligne levesett og tradisjoner',
  ],
  content: [
    {
      id: 'tysk-2-7-intro',
      type: 'text',
      content: `Tyskspraklige land har en rik kulturarv innen musikk, kunst, vitenskap og filosofi. La oss utforske noen viktige aspekter av kulturen og samfunnslivet.`,
    },
    {
      id: 'tysk-2-7-text-1',
      type: 'text',
      content: `**Tyske tradisjoner og hoytider:**

| Hoytid | Nar | Beskrivelse |
|--------|-----|-------------|
| Karneval/Fasching | Februar | Festperiode for muren |
| Ostern | Mars/april | Paske med tradisjonelle skikker |
| Oktoberfest | September/oktober | Olfestival i Munchen |
| Tag der Deutschen Einheit | 3. oktober | Nasjonaldag |
| Weihnachten | 24. desember | Jul feires pa julaften |
| Silvester | 31. desember | Nyttar med fyrverkeri |`,
    },
    {
      id: 'tysk-2-7-def-1',
      type: 'definition',
      title: 'Weihnachten (Jul)',
      content: `Tysk julfeiring har mange tradisjoner:

**Adventszeit:** Fire soendager for jul med adventskrans og -kalender
**Nikolaustag (6. desember):** Barn far godteri i skoene
**Weihnachtsmarkte:** Julemarkeder i alle byer
**Heiligabend (24. desember):** Hovedfeiringen med gave-utpakking
**Die Weihnachtskrippe:** Julekrybben med Jesus-barnet
**Der Weihnachtsbaum:** Juletreet pyntet med lys og kuler`,
    },
    {
      id: 'tysk-2-7-text-2',
      type: 'text',
      content: `**Kjente tyske komponister:**

| Komponist | Levetid | Kjente verk |
|-----------|---------|-------------|
| Johann Sebastian Bach | 1685-1750 | Matthauspasjonen, Brandenburg-konserter |
| Ludwig van Beethoven | 1770-1827 | 9 symfonier, Mondschein-sonaten |
| Wolfgang Amadeus Mozart | 1756-1791 | Trollfloyten, Requiem |
| Johannes Brahms | 1833-1897 | 4 symfonier, Ungarsk dans |
| Richard Wagner | 1813-1883 | Ring-syklusen, Tristan |`,
    },
    {
      id: 'tysk-2-7-example-1',
      type: 'example',
      title: 'Kulturelle uttrykk',
      content: `**Typisk tyske kulturelle fenomener:**

- **Gemutlichkeit** - hygge, trivsel, komfort (vanskelig a oversette!)
- **Stammtisch** - fast bord pa vertshus for vennegjeng
- **Kaffeeklatsch** - sammenkomst med kaffe og kaker
- **Wanderlust** - lysten til a vandre/reise
- **Feierabend** - slutten pa arbeidsdagen (hellig tid!)

*"Ich habe heute Feierabend und freue mich auf einen gemutlichen Abend."*
*(Jeg har fri i dag og gleder meg til en hyggelig kveld.)*`,
    },
    {
      id: 'tysk-2-7-text-3',
      type: 'text',
      content: `**Samfunnsliv og hverdagskultur:**

| Tema | Beskrivelse |
|------|-------------|
| Punktlichkeit | Punktlighet er veldig viktig |
| Mulltrennung | Avfallssortering er pabudt |
| Sonntagsruhe | Sondager er hviledager (butikker stengt) |
| Duzen/Siezen | Skille mellom uformell (du) og formell (Sie) tiltale |
| Vereinsleben | Mange er med i foreninger (Vereine) |
| Brot | Over 300 broedsorter - stor bredkultur |`,
    },
    {
      id: 'tysk-2-7-tip-1',
      type: 'tip',
      content: `Husk at punktlighet er en dyd i tyskspraklige land! A komme fem minutter for sent til en avtale ansees som uhoeflig.`,
    },
    {
      id: 'tysk-2-7-note-1',
      type: 'note',
      content: `Oktoberfest i Munchen er verdens storste folkefest med over 6 millioner besokende hvert ar. Det startet i 1810 som en bryllupsfest for kronprins Ludwig.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Nar feires jul i Tyskland?',
      options: [
        { id: 'a', text: '25. desember', isCorrect: false, feedback: 'Det er forste juledag, men hovedfeiringen er 24.' },
        { id: 'b', text: '24. desember', isCorrect: true },
        { id: 'c', text: '26. desember', isCorrect: false, feedback: 'Det er andre juledag.' },
        { id: 'd', text: '6. desember', isCorrect: false, feedback: 'Det er Nikolaustag.' },
      ],
      solution: 'Hovedjulefeiringen i Tyskland er pa Heiligabend (julaften) 24. desember.',
    },
    {
      id: 'tysk-2-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er "Gemutlichkeit"?',
      options: [
        { id: 'a', text: 'Punktlighet', isCorrect: false, feedback: 'Det er "Punktlichkeit".' },
        { id: 'b', text: 'Hygge og trivsel', isCorrect: true },
        { id: 'c', text: 'Reiselyst', isCorrect: false, feedback: 'Det er "Wanderlust".' },
        { id: 'd', text: 'Avfallssortering', isCorrect: false, feedback: 'Det er "Mulltrennung".' },
      ],
      solution: '"Gemutlichkeit" beskriver hygge, trivsel og en behagelig atmosfaere.',
    },
    {
      id: 'tysk-2-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem komponerte "Mondschein-sonaten"?',
      options: [
        { id: 'a', text: 'Bach', isCorrect: false, feedback: 'Bach komponerte barokkmusikk.' },
        { id: 'b', text: 'Beethoven', isCorrect: true },
        { id: 'c', text: 'Mozart', isCorrect: false, feedback: 'Mozart komponerte bl.a. "Trollfloyten".' },
        { id: 'd', text: 'Wagner', isCorrect: false, feedback: 'Wagner er kjent for operaer.' },
      ],
      solution: 'Ludwig van Beethoven komponerte "Mondschein-sonaten" (Maneskinnsonaten).',
    },
    {
      id: 'tysk-2-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "Feierabend"?',
      options: [
        { id: 'a', text: 'Feiring', isCorrect: false, feedback: '"Feier" betyr feiring, men "Feierabend" er noe annet.' },
        { id: 'b', text: 'Slutten pa arbeidsdagen', isCorrect: true },
        { id: 'c', text: 'Kveldsmaltid', isCorrect: false, feedback: 'Det er "Abendessen".' },
        { id: 'd', text: 'Sondagsro', isCorrect: false, feedback: 'Det er "Sonntagsruhe".' },
      ],
      solution: '"Feierabend" er tiden etter jobb - slutten pa arbeidsdagen.',
    },
    {
      id: 'tysk-2-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Nar er den tyske nasjonaldagen?',
      options: [
        { id: 'a', text: '9. november', isCorrect: false, feedback: 'Da falt Berlinmuren, men det er ikke nasjonaldag.' },
        { id: 'b', text: '3. oktober', isCorrect: true },
        { id: 'c', text: '1. mai', isCorrect: false, feedback: 'Det er arbeidernes dag.' },
        { id: 'd', text: '17. juni', isCorrect: false, feedback: 'Det var nasjonaldag i Vest-Tyskland for 1990.' },
      ],
      solution: '3. oktober er "Tag der Deutschen Einheit" (Dagen for tysk enhet) - gjenforeningsdagen 1990.',
    },
    {
      id: 'tysk-2-7-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er spesielt med sondager i Tyskland?',
      options: [
        { id: 'a', text: 'Alle restauranter er stengt', isCorrect: false, feedback: 'Restauranter kan vaere apne.' },
        { id: 'b', text: 'De fleste butikker er stengt (Sonntagsruhe)', isCorrect: true },
        { id: 'c', text: 'Det er forbudt a bruke bil', isCorrect: false, feedback: 'Det er ikke riktig.' },
        { id: 'd', text: 'Alle ma ga i kirken', isCorrect: false, feedback: 'Det er ikke pabudt.' },
      ],
      solution: 'Sonntagsruhe betyr at de fleste butikker er stengt pa sondager.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Umwelt und Technik
// ============================================================================

export const CHAPTER_TYSK_2_8: TextbookChapter = {
  id: 'tysk-2-8',
  courseId: 'tysk-2',
  chapterNumber: '8',
  title: 'Umwelt und Technik',
  description: 'Diskuter miljo, teknologi og barekraft pa tysk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'uttrykke egne meninger og argumentere',
    'diskutere aktuelle samfunnstemaer',
  ],
  content: [
    {
      id: 'tysk-2-8-intro',
      type: 'text',
      content: `Tyskland er et foregangsland innen miljoevern og fornybar energi. I dette kapittelet laerer du ordforrad og uttrykk for a diskutere miljo og teknologi pa tysk.`,
    },
    {
      id: 'tysk-2-8-text-1',
      type: 'text',
      content: `**Miljovokabular:**

| Tysk | Norsk |
|------|-------|
| die Umwelt | miljoet |
| der Umweltschutz | miljovern |
| der Klimawandel | klimaendringer |
| die Erderwarmung | global oppvarming |
| die Nachhaltigkeit | barekraft |
| erneuerbare Energien | fornybar energi |
| die Solarenergie | solenergi |
| die Windenergie | vindenergi |
| das Elektroauto | elbil |
| die Mulltrennung | avfallssortering |`,
    },
    {
      id: 'tysk-2-8-def-1',
      type: 'definition',
      title: 'Die Energiewende',
      content: `"Energiewende" (energiomstillingen) er Tysklands plan for a ga over til fornybar energi.

**Mal:**
- Fase ut atomkraft (fullfort 2023)
- Redusere kullkraft
- 80% fornybar energi innen 2030
- Klimanoytralitet innen 2045

**Tiltak:**
- Utbygging av sol- og vindkraft
- Elektrifisering av transport
- Energieffektivisering av bygninger`,
    },
    {
      id: 'tysk-2-8-text-2',
      type: 'text',
      content: `**Ordforrad for a argumentere:**

| Tysk | Norsk |
|------|-------|
| Ich bin der Meinung, dass... | Jeg mener at... |
| Meiner Meinung nach... | Etter min mening... |
| Ich finde, dass... | Jeg synes at... |
| Einerseits... andererseits... | Pa den ene side... pa den andre side... |
| Es ist wichtig, dass... | Det er viktig at... |
| Wir mussen... | Vi ma... |
| Man sollte... | Man burde... |
| Es ware besser, wenn... | Det ville vaere bedre hvis... |`,
    },
    {
      id: 'tysk-2-8-example-1',
      type: 'example',
      title: 'Argumentere for miljovern',
      content: `**Eksempel pa argumentasjon:**

*"Meiner Meinung nach ist der Klimawandel das grosste Problem unserer Zeit. Wir mussen dringend handeln, um die Erderwarmung zu stoppen.*

*Einerseits kostet die Energiewende viel Geld. Andererseits wurden erneuerbare Energien langfristig billiger und sauberer.*

*Es ist wichtig, dass jeder Einzelne etwas tut - zum Beispiel weniger Fleisch essen, offentliche Verkehrsmittel benutzen oder Energie sparen."*

*(Etter min mening er klimaendringer det storste problemet i var tid. Vi ma handle raskt for a stoppe global oppvarming...)*`,
    },
    {
      id: 'tysk-2-8-text-3',
      type: 'text',
      content: `**Teknologiord:**

| Tysk | Norsk |
|------|-------|
| die kunstliche Intelligenz (KI) | kunstig intelligens (AI) |
| das Internet der Dinge | tingenes internett |
| die Digitalisierung | digitalisering |
| der Roboter | robot |
| die Automatisierung | automatisering |
| die Datenbank | database |
| die App | app |
| das soziale Netzwerk | sosialt nettverk |
| der 3D-Drucker | 3D-printer |`,
    },
    {
      id: 'tysk-2-8-tip-1',
      type: 'tip',
      content: `Nar du argumenterer, bruk ulike innledninger: "Ich denke...", "Ich glaube...", "Ich bin uberzeugt, dass..." for a variere spraket.`,
    },
    {
      id: 'tysk-2-8-note-1',
      type: 'note',
      content: `Tyskland er europaleder innen avfallssortering (Mulltrennung). Det finnes separate beholdere for papir, plast, glass, bio og restavfall i nesten alle husholdninger.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "der Umweltschutz"?',
      options: [
        { id: 'a', text: 'Miljoproblemet', isCorrect: false, feedback: '"Problemer" er "Probleme".' },
        { id: 'b', text: 'Miljovern', isCorrect: true },
        { id: 'c', text: 'Klimaendringer', isCorrect: false, feedback: 'Det er "der Klimawandel".' },
        { id: 'd', text: 'Avfallssortering', isCorrect: false, feedback: 'Det er "die Mulltrennung".' },
      ],
      solution: '"Der Umweltschutz" betyr "miljovern" (Umwelt = miljo, Schutz = vern/beskyttelse).',
    },
    {
      id: 'tysk-2-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan sier du "Etter min mening" pa tysk?',
      options: [
        { id: 'a', text: 'Nach meiner Zeit', isCorrect: false, feedback: 'Det betyr "etter min tid".' },
        { id: 'b', text: 'Meiner Meinung nach', isCorrect: true },
        { id: 'c', text: 'Mit meiner Meinung', isCorrect: false, feedback: 'Feil preposisjon.' },
        { id: 'd', text: 'Von meiner Meinung', isCorrect: false, feedback: 'Feil preposisjon.' },
      ],
      solution: '"Meiner Meinung nach" eller "Nach meiner Meinung" betyr "etter min mening".',
    },
    {
      id: 'tysk-2-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "die Energiewende"?',
      options: [
        { id: 'a', text: 'Energikrise', isCorrect: false, feedback: 'Det er "die Energiekrise".' },
        { id: 'b', text: 'Energiomstilling til fornybar energi', isCorrect: true },
        { id: 'c', text: 'Hoye strompriser', isCorrect: false, feedback: 'Det er "hohe Strompreise".' },
        { id: 'd', text: 'Atomkraft', isCorrect: false, feedback: 'Det er "die Atomkraft".' },
      ],
      solution: '"Die Energiewende" er Tysklands plan for omstilling til fornybar energi.',
    },
    {
      id: 'tysk-2-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Fyll inn: "_____ kostet viel, _____ ist sie notwendig."',
      options: [
        { id: 'a', text: 'Einerseits ... andererseits', isCorrect: true },
        { id: 'b', text: 'Obwohl ... trotzdem', isCorrect: false, feedback: 'Grammatisk mulig, men ikke idiomatisk.' },
        { id: 'c', text: 'Wenn ... dann', isCorrect: false, feedback: 'Det passer ikke med setningen.' },
        { id: 'd', text: 'Weil ... deshalb', isCorrect: false, feedback: 'Det passer ikke logisk.' },
      ],
      solution: '"Einerseits... andererseits" brukes for a vise to sider av en sak.',
    },
    {
      id: 'tysk-2-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "die kunstliche Intelligenz"?',
      options: [
        { id: 'a', text: 'Falsk informasjon', isCorrect: false, feedback: '"Kunstlich" betyr "kunstig", ikke "falsk".' },
        { id: 'b', text: 'Kunstig intelligens', isCorrect: true },
        { id: 'c', text: 'Kunstnerisk uttrykk', isCorrect: false, feedback: '"Kunstlerisch" betyr "kunstnerisk".' },
        { id: 'd', text: 'Digital kunst', isCorrect: false, feedback: 'Det ville vaert "digitale Kunst".' },
      ],
      solution: '"Kunstliche Intelligenz" (KI) er kunstig intelligens (AI).',
    },
    {
      id: 'tysk-2-8-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Oversett: "Det er viktig at vi beskytter miljoet."',
      options: [
        { id: 'a', text: 'Es ist wichtig, dass wir die Umwelt schutzen.', isCorrect: true },
        { id: 'b', text: 'Es ist wichtig, wir schutzen die Umwelt.', isCorrect: false, feedback: 'Mangler "dass" for bisetning.' },
        { id: 'c', text: 'Es wichtig ist, dass wir die Umwelt schutzen.', isCorrect: false, feedback: 'Feil ordstilling i hovedsetningen.' },
        { id: 'd', text: 'Es ist wichtig, dass wir schutzen die Umwelt.', isCorrect: false, feedback: 'Verbet skal sta til slutt i bisetningen.' },
      ],
      solution: 'Etter "dass" star verbet til slutt: "...dass wir die Umwelt schutzen."',
    },
  ],
};

// ============================================================================
// Kapittel 9: Beruf und Wirtschaft
// ============================================================================

export const CHAPTER_TYSK_2_9: TextbookChapter = {
  id: 'tysk-2-9',
  courseId: 'tysk-2',
  chapterNumber: '9',
  title: 'Beruf und Wirtschaft',
  description: 'Laer om arbeidsliv, okonomi og karriere pa tysk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'uttrykke seg i formelle sammenhenger',
    'skrive formelle tekster som soknad og CV',
  ],
  content: [
    {
      id: 'tysk-2-9-intro',
      type: 'text',
      content: `Tyskland har Europas storste okonomi og er kjent for sin industri, sine merkevarer og sitt duale utdanningssystem. I dette kapittelet laerer du ordforrad for arbeidsliv og okonomi.`,
    },
    {
      id: 'tysk-2-9-text-1',
      type: 'text',
      content: `**Yrkesordforrad:**

| Tysk | Norsk |
|------|-------|
| der Beruf | yrket |
| die Arbeit | arbeidet |
| der Arbeitgeber | arbeidsgiveren |
| der Arbeitnehmer | arbeidstakeren |
| die Stelle | stillingen |
| das Gehalt | lonnen (funksjonaer) |
| der Lohn | lonnen (arbeider) |
| die Bewerbung | jobbsoknaden |
| der Lebenslauf | CV-en |
| das Vorstellungsgesprach | jobbintervjuet |`,
    },
    {
      id: 'tysk-2-9-def-1',
      type: 'definition',
      title: 'Das duale Ausbildungssystem',
      content: `Tyskland har et unikt yrkesutdanningssystem der laerlinger kombinerer:

**Praktisk opplaering i bedrift** (3-4 dager/uke)
- Laerer yrket i praksis
- Far larsepenger

**Teoretisk undervisning pa yrkesskole** (1-2 dager/uke)
- Fagteori
- Allmenndannende fag

Systemet varer 2-3,5 ar og gir anerkjent fagbrev (Gesellenbrief/Facharbeiterbrief).`,
    },
    {
      id: 'tysk-2-9-text-2',
      type: 'text',
      content: `**Okonomiske ord:**

| Tysk | Norsk |
|------|-------|
| die Wirtschaft | okonomien |
| das Unternehmen | bedriften |
| die Firma | firmaet |
| der Umsatz | omsetningen |
| der Gewinn | fortjenesten |
| die Aktie | aksjen |
| die Borse | borsen |
| die Inflation | inflasjonen |
| das Bruttoinlandsprodukt (BIP) | bruttonasjonalprodukt (BNP) |`,
    },
    {
      id: 'tysk-2-9-example-1',
      type: 'example',
      title: 'Formelt brev / jobbsoknad',
      content: `**Struktur for jobbsoknad:**

*Sehr geehrte Damen und Herren,*

*mit grossem Interesse habe ich Ihre Stellenanzeige gelesen und mochte mich hiermit um die Position als [stilling] bewerben.*

*[Omtale din bakgrunn og kvalifikasjoner]*

*Uber eine Einladung zu einem Vorstellungsgesprach wurde ich mich sehr freuen.*

*Mit freundlichen Grussen*
*[Navn]*

---
Kjaere damer og herrer,
Med stor interesse har jeg lest deres stillingsannonse og onsker herved a soke pa stillingen som...`,
    },
    {
      id: 'tysk-2-9-text-3',
      type: 'text',
      content: `**Store tyske bedrifter:**

| Bedrift | Bransje |
|---------|---------|
| Volkswagen | Bilindustri |
| Siemens | Teknologi |
| BASF | Kjemi |
| Deutsche Bank | Finans |
| Allianz | Forsikring |
| SAP | Software |
| Bosch | Teknologi |
| Daimler (Mercedes) | Bilindustri |
| BMW | Bilindustri |`,
    },
    {
      id: 'tysk-2-9-tip-1',
      type: 'tip',
      content: `I formelle brev og e-poster, bruk alltid "Sie" (De) og avslutt med "Mit freundlichen Grussen" (Med vennlig hilsen).`,
    },
    {
      id: 'tysk-2-9-note-1',
      type: 'note',
      content: `"Made in Germany" var opprinnelig (1887) ment som en advarsel om tyske varer, men ble raskt et kvalitetsstempel som det fortsatt er i dag.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-9-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "die Bewerbung"?',
      options: [
        { id: 'a', text: 'Jobbintervjuet', isCorrect: false, feedback: 'Det er "das Vorstellungsgesprach".' },
        { id: 'b', text: 'Jobbsoknaden', isCorrect: true },
        { id: 'c', text: 'CV-en', isCorrect: false, feedback: 'Det er "der Lebenslauf".' },
        { id: 'd', text: 'Arbeidsavtalen', isCorrect: false, feedback: 'Det er "der Arbeitsvertrag".' },
      ],
      solution: '"Die Bewerbung" betyr "jobbsoknaden".',
    },
    {
      id: 'tysk-2-9-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan avslutter du et formelt brev?',
      options: [
        { id: 'a', text: 'Tschuss!', isCorrect: false, feedback: 'For uformelt.' },
        { id: 'b', text: 'Mit freundlichen Grussen', isCorrect: true },
        { id: 'c', text: 'Bis bald!', isCorrect: false, feedback: 'For uformelt.' },
        { id: 'd', text: 'Liebe Grusse', isCorrect: false, feedback: 'For uformelt.' },
      ],
      solution: '"Mit freundlichen Grussen" er standard avslutning i formelle brev.',
    },
    {
      id: 'tysk-2-9-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er spesielt med det tyske "duale Ausbildungssystem"?',
      options: [
        { id: 'a', text: 'Man studerer bare pa skole', isCorrect: false, feedback: 'Det er vanlig universitetsutdanning.' },
        { id: 'b', text: 'Man kombinerer praksis i bedrift og skole', isCorrect: true },
        { id: 'c', text: 'Man jobber bare i bedrift', isCorrect: false, feedback: 'Skole er ogsa en del av systemet.' },
        { id: 'd', text: 'Det varer bare ett ar', isCorrect: false, feedback: 'Det varer 2-3,5 ar.' },
      ],
      solution: 'Det duale systemet kombinerer praktisk opplaering i bedrift med teoretisk undervisning pa skole.',
    },
    {
      id: 'tysk-2-9-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "der Lebenslauf"?',
      options: [
        { id: 'a', text: 'Livslopet/livet', isCorrect: false, feedback: 'Det er direkte oversettelse, men...' },
        { id: 'b', text: 'CV', isCorrect: true },
        { id: 'c', text: 'Jobbsoknad', isCorrect: false, feedback: 'Det er "die Bewerbung".' },
        { id: 'd', text: 'Karriere', isCorrect: false, feedback: 'Det er "die Karriere".' },
      ],
      solution: '"Der Lebenslauf" (bokstavelig: livslopet) betyr CV pa tysk.',
    },
    {
      id: 'tysk-2-9-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvordan innleder du et formelt brev til ukjent mottaker?',
      options: [
        { id: 'a', text: 'Liebe Freunde', isCorrect: false, feedback: 'For uformelt og personlig.' },
        { id: 'b', text: 'Sehr geehrte Damen und Herren', isCorrect: true },
        { id: 'c', text: 'Hallo zusammen', isCorrect: false, feedback: 'For uformelt.' },
        { id: 'd', text: 'Guten Tag', isCorrect: false, feedback: 'Vanligvis for muntlig kommunikasjon.' },
      ],
      solution: '"Sehr geehrte Damen und Herren" er standard innledning nar du ikke kjenner mottakeren.',
    },
    {
      id: 'tysk-2-9-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "das Bruttoinlandsprodukt"?',
      options: [
        { id: 'a', text: 'Bruttolonn', isCorrect: false, feedback: 'Det er "das Bruttogehalt".' },
        { id: 'b', text: 'Bruttonasjonalprodukt (BNP)', isCorrect: true },
        { id: 'c', text: 'Importoverskudd', isCorrect: false, feedback: 'Det er noe annet.' },
        { id: 'd', text: 'Statsbudsjettet', isCorrect: false, feedback: 'Det er "der Staatshaushalt".' },
      ],
      solution: '"Das Bruttoinlandsprodukt" (BIP) tilsvarer bruttonasjonalprodukt (BNP).',
    },
  ],
};

// ============================================================================
// Kapittel 10: Fortgeschrittene Kommunikation
// ============================================================================

export const CHAPTER_TYSK_2_10: TextbookChapter = {
  id: 'tysk-2-10',
  courseId: 'tysk-2',
  chapterNumber: '10',
  title: 'Fortgeschrittene Kommunikation',
  description: 'Mestre avanserte kommunikasjonsteknikker og idiomatiske uttrykk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke et bredt ordforrad og idiomatiske uttrykk',
    'delta i samtaler om ulike emner',
    'tilpasse spraket til mottaker og situasjon',
  ],
  content: [
    {
      id: 'tysk-2-10-intro',
      type: 'text',
      content: `I dette avsluttende kapittelet fokuserer vi pa a gjore tysken din mer naturlig og idiomatisk. Du laerer redewendungen (idiomer), fyldord, og teknikker for a uttrykke deg nyansert.`,
    },
    {
      id: 'tysk-2-10-text-1',
      type: 'text',
      content: `**Vanlige idiomer (Redewendungen):**

| Tysk | Bokstavelig | Betydning |
|------|-------------|-----------|
| Daumen drucken | trykke tommelen | onske lykke til |
| ins Fettnäpfchen treten | tra i fettnapfet | si noe pinlig |
| die Katze im Sack kaufen | kjope katten i sekken | kjope uten a sjekke |
| zwei Fliegen mit einer Klappe schlagen | sla to fluer i ett smekk | oppna to ting pa en gang |
| auf dem Holzweg sein | vaere pa trestien | ta feil |
| jemandem die Daumen halten | holde noen tommel | heie pa noen |`,
    },
    {
      id: 'tysk-2-10-def-1',
      type: 'definition',
      title: 'Modalpartikler',
      content: `Modalpartikler gjor tysk mer naturlig og nyansert:

**doch** - bekrefter noe motstridende
- "Komm doch mit!" (Bli med da!)

**mal** - gjor foresporsler mykere
- "Kannst du mal helfen?" (Kan du hjelpe litt?)

**ja** - uttrykker det selvfolgelige
- "Das ist ja toll!" (Det er jo fantastisk!)

**denn** - gjor sporsmal mer interesserte
- "Was machst du denn?" (Hva gjor du da?)

**eigentlich** - "egentlig"
- "Was willst du eigentlich?" (Hva vil du egentlig?)`,
    },
    {
      id: 'tysk-2-10-example-1',
      type: 'example',
      title: 'Naturlig samtale',
      content: `**Uten modalpartikler (stivt):**
A: Wie geht es dir?
B: Es geht mir gut. Was machst du?
A: Ich arbeite.

**Med modalpartikler (naturlig):**
A: Na, wie geht's dir denn so?
B: Ach, ganz gut eigentlich. Und bei dir? Was machst du denn gerade?
A: Ich arbeite halt mal wieder. Ist ja nichts Neues!

*(Modalpartiklene gjor samtalen varmere og mer naturlig.)*`,
    },
    {
      id: 'tysk-2-10-text-2',
      type: 'text',
      content: `**Uttrykke meninger - nyanser:**

| Styrke | Tysk | Norsk |
|--------|------|-------|
| Svak | Ich denke, dass... | Jeg tenker at... |
| Medium | Ich glaube, dass... | Jeg tror at... |
| Sterk | Ich bin uberzeugt, dass... | Jeg er overbevist om at... |
| Sikker | Ich bin sicher, dass... | Jeg er sikker pa at... |
| Forsiktig | Ich wurde sagen, dass... | Jeg ville sagt at... |
| Usikker | Vielleicht... | Kanskje... |`,
    },
    {
      id: 'tysk-2-10-text-3',
      type: 'text',
      content: `**Hoflighetsnivåer:**

| Direkte -> Hoflig |
|-------------------|
| Hilf mir! -> Konntest du mir bitte helfen? |
| Ich will... -> Ich hatte gern... |
| Gib mir das! -> Wurden Sie mir das bitte geben? |
| Das ist falsch. -> Das stimmt vielleicht nicht ganz. |
| Nein. -> Das ware leider nicht moglich. |`,
    },
    {
      id: 'tysk-2-10-example-2',
      type: 'example',
      title: 'Kritikk pa en hoflig mate',
      content: `**For direkte (uhoeflig):**
"Das ist schlecht. Das muss geandert werden."

**Hoflig reformulert:**
"Das ist an sich nicht schlecht, aber vielleicht konnten wir noch ein paar Kleinigkeiten verbessern. Was meinen Sie?"

**Enda hoefligere:**
"Ich finde die Idee grundsatzlich gut. Hatten Sie etwas dagegen, wenn wir noch ein paar Anpassungen vornehmen wurden?"`,
    },
    {
      id: 'tysk-2-10-tip-1',
      type: 'tip',
      content: `Bruk "vielleicht", "ein bisschen", "etwas" og "eigentlich" for a gjore uttalelser mykere og mindre direkte.`,
    },
    {
      id: 'tysk-2-10-note-1',
      type: 'note',
      content: `Tyske modalpartikler er vanskelige a oversette direkte. Lytt til tysk musikk, se tyske filmer og les for a fa en naturlig fornemmelse for hvordan de brukes.`,
    },
  ],
  exercises: [
    {
      id: 'tysk-2-10-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "Daumen drucken"?',
      options: [
        { id: 'a', text: 'A bli sint', isCorrect: false, feedback: 'Det er "sauer werden".' },
        { id: 'b', text: 'A onske lykke til', isCorrect: true },
        { id: 'c', text: 'A vaere redd', isCorrect: false, feedback: 'Det er "Angst haben".' },
        { id: 'd', text: 'A holde hemmeligheter', isCorrect: false, feedback: 'Det er noe annet.' },
      ],
      solution: '"Jemandem die Daumen drucken" betyr a onske noen lykke til.',
    },
    {
      id: 'tysk-2-10-ex-2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken modalpartikkel gjor foresporsler mykere?',
      options: [
        { id: 'a', text: 'doch', isCorrect: false, feedback: '"Doch" bekrefter noe.' },
        { id: 'b', text: 'mal', isCorrect: true },
        { id: 'c', text: 'ja', isCorrect: false, feedback: '"Ja" uttrykker det selvfolgelige.' },
        { id: 'd', text: 'denn', isCorrect: false, feedback: '"Denn" viser interesse i sporsmal.' },
      ],
      solution: '"Mal" gjor foresporsler mykere: "Kannst du mal helfen?"',
    },
    {
      id: 'tysk-2-10-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr idiomet "auf dem Holzweg sein"?',
      options: [
        { id: 'a', text: 'A vaere i skogen', isCorrect: false, feedback: 'Det er den bokstavelige betydningen.' },
        { id: 'b', text: 'A ta feil', isCorrect: true },
        { id: 'c', text: 'A ga pa tur', isCorrect: false, feedback: 'Det er "wandern gehen".' },
        { id: 'd', text: 'A vaere trott', isCorrect: false, feedback: 'Det er "mude sein".' },
      ],
      solution: '"Auf dem Holzweg sein" betyr a ta feil eller vaere pa feil spor.',
    },
    {
      id: 'tysk-2-10-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken setning er mest hoflig?',
      options: [
        { id: 'a', text: 'Gib mir das Buch!', isCorrect: false, feedback: 'Imperativ er for direkte.' },
        { id: 'b', text: 'Ich will das Buch.', isCorrect: false, feedback: '"Ich will" er direkte og uhoeflig.' },
        { id: 'c', text: 'Konnten Sie mir bitte das Buch geben?', isCorrect: true },
        { id: 'd', text: 'Das Buch, bitte.', isCorrect: false, feedback: 'Kort, men ikke veldig hoflig.' },
      ],
      solution: 'Konjunktiv II med "bitte" er mest hoflig: "Konnten Sie mir bitte...?"',
    },
    {
      id: 'tysk-2-10-ex-5',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva uttrykker modalpartikkelen "doch" i "Das ist doch toll!"?',
      options: [
        { id: 'a', text: 'Tvil', isCorrect: false, feedback: '"Doch" uttrykker ikke tvil her.' },
        { id: 'b', text: 'At taleren bekrefter/forsterker', isCorrect: true },
        { id: 'c', text: 'Spm', isCorrect: false, feedback: '"Doch" gjor ikke setningen til sporsmal.' },
        { id: 'd', text: 'Negasjon', isCorrect: false, feedback: 'Her er "doch" ikke negerende.' },
      ],
      solution: '"Doch" forsterker her og antyder at mottakeren kanskje ikke innser hvor bra det er.',
    },
    {
      id: 'tysk-2-10-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Oversett hoflig: "Det er feil."',
      options: [
        { id: 'a', text: 'Das ist falsch.', isCorrect: false, feedback: 'For direkte.' },
        { id: 'b', text: 'Das stimmt vielleicht nicht ganz.', isCorrect: true },
        { id: 'c', text: 'Sie haben Unrecht.', isCorrect: false, feedback: 'Ogsa for direkte.' },
        { id: 'd', text: 'Falsch!', isCorrect: false, feedback: 'Veldig uhoeflig.' },
      ],
      solution: '"Das stimmt vielleicht nicht ganz" er en hoeflig mate a si at noe er feil.',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TYSK_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TYSK_2_1,
  CHAPTER_TYSK_2_2,
  CHAPTER_TYSK_2_3,
  CHAPTER_TYSK_2_4,
  CHAPTER_TYSK_2_5,
  CHAPTER_TYSK_2_6,
  CHAPTER_TYSK_2_7,
  CHAPTER_TYSK_2_8,
  CHAPTER_TYSK_2_9,
  CHAPTER_TYSK_2_10,
];
