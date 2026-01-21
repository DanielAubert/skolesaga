/* eslint-disable */
// @ts-nocheck
/**
 * Fransk nivå 3 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for fremmedspråk nivå 3
 * Avansert fransk med fokus på grammatikk, litteratur, kultur og eksamensforberedelse
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Temps du passé (avancé) - Fortidsformer (avansert)
// ============================================================================

export const CHAPTER_FRANSK_3_1: TextbookChapter = {
  id: 'fransk-3-1',
  courseId: 'fransk-3',
  chapterNumber: '1',
  title: 'Temps du passé (avancé)',
  description: 'Mestre alle fortidsformer i fransk: passé composé, imparfait, plus-que-parfait og passé simple.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke ulike fortidsformer korrekt og nyansert',
    'forstå og anvende passé simple i litterære tekster',
    'beherske samspillet mellom fortidsformene',
  ],
  content: [
    {
      id: 'fransk-3-1-intro',
      type: 'text',
      content: `På nivå 3 skal du mestre alle de franske fortidsformene og kunne bruke dem nyansert. Vi skal se på samspillet mellom passé composé, imparfait, plus-que-parfait og den litterære formen passé simple.`,
    },
    {
      id: 'fransk-3-1-def-1',
      type: 'definition',
      title: 'Oversikt over fortidsformene',
      content: `**Passé composé** - Avsluttede handlinger i fortiden
**Imparfait** - Bakgrunn, tilstander, vaner i fortiden
**Plus-que-parfait** - Handling som skjedde før en annen fortidshandling
**Passé simple** - Litterær form for avsluttede handlinger`,
    },
    {
      id: 'fransk-3-1-text-1',
      type: 'text',
      title: 'Plus-que-parfait - Førtid',
      content: `Plus-que-parfait uttrykker en handling som skjedde *før* en annen handling i fortiden.

**Dannelse:** avoir/être i imparfait + participe passé

| Person | avoir | être |
|--------|-------|------|
| j' | avais parlé | étais parti(e) |
| tu | avais parlé | étais parti(e) |
| il/elle | avait parlé | était parti(e) |
| nous | avions parlé | étions parti(e)s |
| vous | aviez parlé | étiez parti(e)(s) |
| ils/elles | avaient parlé | étaient parti(e)s |`,
    },
    {
      id: 'fransk-3-1-example-1',
      type: 'example',
      title: 'Plus-que-parfait i kontekst',
      content: `**Eksempler på plus-que-parfait:**

- Quand je suis arrivé, il **avait déjà mangé**.
  *(Da jeg kom, hadde han allerede spist.)*

- Elle m'a dit qu'elle **avait visité** Paris l'année précédente.
  *(Hun fortalte meg at hun hadde besøkt Paris året før.)*

- Nous **étions partis** avant qu'il ne commence à pleuvoir.
  *(Vi hadde dratt før det begynte å regne.)*`,
    },
    {
      id: 'fransk-3-1-text-2',
      type: 'text',
      title: 'Passé simple - Den litterære fortiden',
      content: `Passé simple brukes hovedsakelig i skriftlig fransk, særlig i litteratur, eventyr og historiske tekster. Den erstatter passé composé i formell skriftlig stil.

**Dannelse for -er verb:**
| Person | Endelse | Eksempel (parler) |
|--------|---------|-------------------|
| je | -ai | parlai |
| tu | -as | parlas |
| il/elle | -a | parla |
| nous | -âmes | parlâmes |
| vous | -âtes | parlâtes |
| ils/elles | -èrent | parlèrent |

**Uregelmessige verb:**
- être: je fus, tu fus, il fut, nous fûmes, vous fûtes, ils furent
- avoir: j'eus, tu eus, il eut, nous eûmes, vous eûtes, ils eurent
- faire: je fis, tu fis, il fit, nous fîmes, vous fîtes, ils firent
- venir: je vins, tu vins, il vint, nous vînmes, vous vîntes, ils vinrent`,
    },
    {
      id: 'fransk-3-1-example-2',
      type: 'example',
      title: 'Passé simple i litteratur',
      content: `**Fra "Le Petit Prince" av Antoine de Saint-Exupéry:**

"Je **vécus** seul, sans personne avec qui parler véritablement, jusqu'à une panne dans le désert du Sahara, il y a six ans. Quelque chose **s'était** cassé dans mon moteur."

*(Jeg levde alene, uten noen å virkelig snakke med, frem til et motorhavari i Sahara-ørkenen for seks år siden. Noe hadde gått i stykker i motoren min.)*

Legg merke til hvordan passé simple (vécus) brukes for hovedhandlingen, mens plus-que-parfait (s'était cassé) beskriver noe som hadde skjedd tidligere.`,
    },
    {
      id: 'fransk-3-1-def-2',
      type: 'definition',
      title: 'Samspill mellom fortidsformene',
      content: `**Imparfait** = bakgrunn, beskrivelse, tilstand
**Passé composé/Passé simple** = hovedhandling, hendelse
**Plus-que-parfait** = handling før hovedhandlingen

Eksempel: Il **faisait** beau (imparfait - bakgrunn) quand Marie **est arrivée** (passé composé - hendelse). Elle **avait voyagé** (plus-que-parfait - tidligere handling) toute la nuit.`,
    },
    {
      id: 'fransk-3-1-tip-1',
      type: 'tip',
      content: `For å gjenkjenne passé simple i tekster, se etter endelser som -a, -èrent (for -er verb), -it, -irent (for -ir/-re verb), og de karakteristiske uregelmessige formene som fut, eut, fit.`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-1-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken setning bruker plus-que-parfait korrekt?',
      options: [
        { id: 'a', text: 'Quand je suis arrivé, il a déjà mangé.', isCorrect: false, feedback: 'Her bør det være plus-que-parfait: "avait déjà mangé".' },
        { id: 'b', text: 'Quand je suis arrivé, il avait déjà mangé.', isCorrect: true },
        { id: 'c', text: 'Quand je suis arrivé, il mangeait déjà.', isCorrect: false, feedback: 'Imparfait uttrykker pågående handling, ikke fullført handling før ankomst.' },
        { id: 'd', text: 'Quand je suis arrivé, il mangea déjà.', isCorrect: false, feedback: 'Passé simple brukes ikke med "déjà" i denne konteksten.' },
      ],
      solution: 'Plus-que-parfait (avait mangé) uttrykker at handlingen var fullført før jeg ankom.',
    },
    {
      id: 'fransk-3-1-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er passé simple av "il fait"?',
      options: [
        { id: 'a', text: 'il faisa', isCorrect: false, feedback: '"Faire" er et uregelmessig verb i passé simple.' },
        { id: 'b', text: 'il fit', isCorrect: true },
        { id: 'c', text: 'il faisait', isCorrect: false, feedback: 'Dette er imparfait, ikke passé simple.' },
        { id: 'd', text: 'il a fait', isCorrect: false, feedback: 'Dette er passé composé, ikke passé simple.' },
      ],
      solution: '"Faire" i passé simple: je fis, tu fis, il fit, nous fîmes, vous fîtes, ils firent.',
    },
    {
      id: 'fransk-3-1-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig kombinasjon av tider: "Elle _____ (dormir) quand le téléphone _____ (sonner)."',
      options: [
        { id: 'a', text: 'dormait / a sonné', isCorrect: true },
        { id: 'b', text: 'a dormi / sonnait', isCorrect: false, feedback: 'Bakgrunnshandlingen (sove) bør være i imparfait.' },
        { id: 'c', text: 'dormait / sonnait', isCorrect: false, feedback: 'Telefonringingen er en plutselig hendelse og bør være i passé composé.' },
        { id: 'd', text: 'avait dormi / a sonné', isCorrect: false, feedback: 'Plus-que-parfait brukes ikke for pågående bakgrunnshandling.' },
      ],
      solution: 'Imparfait (dormait) for bakgrunnshandling + passé composé (a sonné) for den plutselige hendelsen.',
    },
    {
      id: 'fransk-3-1-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'I hvilken type tekst vil du mest sannsynlig finne passé simple?',
      options: [
        { id: 'a', text: 'En SMS til en venn', isCorrect: false, feedback: 'SMS bruker muntlig språk med passé composé.' },
        { id: 'b', text: 'En roman av Victor Hugo', isCorrect: true },
        { id: 'c', text: 'En e-post til kollegaer', isCorrect: false, feedback: 'E-post bruker moderne skriftspråk med passé composé.' },
        { id: 'd', text: 'En muntlig presentasjon', isCorrect: false, feedback: 'Muntlig språk bruker passé composé.' },
      ],
      solution: 'Passé simple brukes hovedsakelig i litteratur, historiske tekster og eventyr.',
    },
    {
      id: 'fransk-3-1-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er plus-que-parfait av "nous partons"?',
      options: [
        { id: 'a', text: 'nous avions parti', isCorrect: false, feedback: '"Partir" bruker être, ikke avoir.' },
        { id: 'b', text: 'nous étions partis', isCorrect: true },
        { id: 'c', text: 'nous sommes partis', isCorrect: false, feedback: 'Dette er passé composé, ikke plus-que-parfait.' },
        { id: 'd', text: 'nous partions', isCorrect: false, feedback: 'Dette er imparfait, ikke plus-que-parfait.' },
      ],
      solution: 'Plus-que-parfait av "partir": être i imparfait + participe passé = nous étions partis.',
    },
  ],
};

// ============================================================================
// Kapittel 2: Subjonctif avancé - Konjunktiv (avansert)
// ============================================================================

export const CHAPTER_FRANSK_3_2: TextbookChapter = {
  id: 'fransk-3-2',
  courseId: 'fransk-3',
  chapterNumber: '2',
  title: 'Subjonctif avancé',
  description: 'Avansert bruk av konjunktiv: subjonctif passé, flere uttrykk og nyanser.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke subjonctif présent og passé korrekt',
    'kjenne til et bredt spekter av uttrykk som krever subjonctif',
    'forstå nyanseforskjeller mellom indicatif og subjonctif',
  ],
  content: [
    {
      id: 'fransk-3-2-intro',
      type: 'text',
      content: `Subjonctif er en modus som uttrykker subjektivitet, tvil, følelser, ønsker og nødvendighet. På nivå 3 utvider vi kunnskapen med subjonctif passé og flere avanserte bruksområder.`,
    },
    {
      id: 'fransk-3-2-def-1',
      type: 'definition',
      title: 'Subjonctif passé',
      content: `Subjonctif passé uttrykker en handling som er fullført før hovedverbets handling.

**Dannelse:** avoir/être i subjonctif présent + participe passé

| Person | avoir | être |
|--------|-------|------|
| que j' | aie parlé | sois parti(e) |
| que tu | aies parlé | sois parti(e) |
| qu'il/elle | ait parlé | soit parti(e) |
| que nous | ayons parlé | soyons parti(e)s |
| que vous | ayez parlé | soyez parti(e)(s) |
| qu'ils/elles | aient parlé | soient parti(e)s |`,
    },
    {
      id: 'fransk-3-2-example-1',
      type: 'example',
      title: 'Subjonctif passé i bruk',
      content: `**Sammenligning subjonctif présent vs. passé:**

- Je suis content que tu **viennes**. (présent - du kommer nå/snart)
  *(Jeg er glad for at du kommer.)*

- Je suis content que tu **sois venu**. (passé - du har kommet)
  *(Jeg er glad for at du kom.)*

- Il est possible qu'elle **finisse** avant midi. (présent)
  *(Det er mulig at hun blir ferdig før middag.)*

- Il est possible qu'elle **ait fini** avant midi. (passé)
  *(Det er mulig at hun har blitt ferdig før middag.)*`,
    },
    {
      id: 'fransk-3-2-text-1',
      type: 'text',
      title: 'Uttrykk som krever subjonctif',
      content: `**Følelser og vurderinger:**
- Je suis heureux/triste/surpris que...
- Il est dommage/regrettable que...
- C'est bizarre/étrange que...

**Nødvendighet og vilje:**
- Il faut que...
- Il est nécessaire/essentiel que...
- Je veux/souhaite/désire que...
- J'exige/ordonne que...

**Tvil og usikkerhet:**
- Je doute que...
- Il est possible/impossible que...
- Il se peut que...
- Je ne crois pas que... (negativ)

**Konjunksjoner:**
- bien que / quoique (selv om)
- pour que / afin que (for at)
- avant que (før)
- à moins que (med mindre)
- sans que (uten at)
- jusqu'à ce que (inntil)`,
    },
    {
      id: 'fransk-3-2-warning-1',
      type: 'warning',
      title: 'Indicatif vs. Subjonctif',
      content: `Noen uttrykk endrer mening basert på modus:

**Je pense que** + indicatif (jeg tror at - sikkerhet)
**Je ne pense pas que** + subjonctif (jeg tror ikke at - tvil)

**Il me semble que** + indicatif (det virker som at)
**Il semble que** + subjonctif (det later til at)

**Après que** + indicatif (etter at)
**Avant que** + subjonctif (før)`,
    },
    {
      id: 'fransk-3-2-example-2',
      type: 'example',
      title: 'Avanserte setninger med subjonctif',
      content: `- **Bien qu'**il **soit** fatigué, il continue à travailler.
  *(Selv om han er sliten, fortsetter han å jobbe.)*

- Je t'ai appelé **pour que** tu **saches** la nouvelle.
  *(Jeg ringte deg for at du skulle få vite nyheten.)*

- Elle partira **avant que** je n'**aie** le temps de lui parler.
  *(Hun drar før jeg får tid til å snakke med henne.)*

- Je resterai ici **jusqu'à ce que** tu **reviennes**.
  *(Jeg blir her til du kommer tilbake.)*`,
    },
    {
      id: 'fransk-3-2-tip-1',
      type: 'tip',
      content: `Etter "avant que" og "à moins que" kan man legge til et ekspletivt "ne" som ikke er negasjon: "avant que tu ne partes". Dette er valgfritt og formelt.`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-2-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Velg riktig form: "Je suis content que tu _____ hier."',
      options: [
        { id: 'a', text: 'es venu', isCorrect: false, feedback: 'Dette er indicatif, ikke subjonctif.' },
        { id: 'b', text: 'sois venu', isCorrect: true },
        { id: 'c', text: 'viennes', isCorrect: false, feedback: 'Subjonctif présent passer ikke med "hier" (i går).' },
        { id: 'd', text: 'venais', isCorrect: false, feedback: 'Dette er imparfait indicatif.' },
      ],
      solution: 'Etter "je suis content que" brukes subjonctif. "Hier" indikerer fortid, så vi bruker subjonctif passé: sois venu.',
    },
    {
      id: 'fransk-3-2-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken konjunksjon krever IKKE subjonctif?',
      options: [
        { id: 'a', text: 'bien que', isCorrect: false, feedback: '"Bien que" krever alltid subjonctif.' },
        { id: 'b', text: 'après que', isCorrect: true },
        { id: 'c', text: 'avant que', isCorrect: false, feedback: '"Avant que" krever alltid subjonctif.' },
        { id: 'd', text: 'pour que', isCorrect: false, feedback: '"Pour que" krever alltid subjonctif.' },
      ],
      solution: '"Après que" tar indicatif fordi handlingen er fullført og sikker. "Avant que" tar subjonctif fordi handlingen ennå ikke har skjedd.',
    },
    {
      id: 'fransk-3-2-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Fullfør: "Il est parti sans que je le _____."',
      options: [
        { id: 'a', text: 'sais', isCorrect: false, feedback: 'Dette er indicatif présent.' },
        { id: 'b', text: 'sache', isCorrect: true },
        { id: 'c', text: 'savais', isCorrect: false, feedback: 'Dette er imparfait indicatif.' },
        { id: 'd', text: 'saurai', isCorrect: false, feedback: 'Dette er futur simple.' },
      ],
      solution: '"Sans que" krever subjonctif. Subjonctif présent av "savoir": que je sache.',
    },
    {
      id: 'fransk-3-2-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken setning er grammatisk korrekt?',
      options: [
        { id: 'a', text: 'Je pense qu\'il soit malade.', isCorrect: false, feedback: '"Je pense que" (positiv) tar indicatif.' },
        { id: 'b', text: 'Je ne pense pas qu\'il est malade.', isCorrect: false, feedback: '"Je ne pense pas que" (negativ) tar subjonctif.' },
        { id: 'c', text: 'Je ne pense pas qu\'il soit malade.', isCorrect: true },
        { id: 'd', text: 'Je pense qu\'il est malade pas.', isCorrect: false, feedback: 'Feil ordstilling av negasjonen.' },
      ],
      solution: 'Når "penser" er i negativ form, uttrykker det tvil og krever subjonctif.',
    },
    {
      id: 'fransk-3-2-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er subjonctif passé av "elle parte"?',
      options: [
        { id: 'a', text: 'elle ait parti', isCorrect: false, feedback: '"Partir" bruker être, ikke avoir.' },
        { id: 'b', text: 'elle soit partie', isCorrect: true },
        { id: 'c', text: 'elle est partie', isCorrect: false, feedback: 'Dette er passé composé indicatif.' },
        { id: 'd', text: 'elle était partie', isCorrect: false, feedback: 'Dette er plus-que-parfait indicatif.' },
      ],
      solution: 'Subjonctif passé = être/avoir i subjonctif présent + participe passé. "Partir" bruker être: soit partie.',
    },
  ],
};

// ============================================================================
// Kapittel 3: Discours indirect - Indirekte tale
// ============================================================================

export const CHAPTER_FRANSK_3_3: TextbookChapter = {
  id: 'fransk-3-3',
  courseId: 'fransk-3',
  chapterNumber: '3',
  title: 'Discours indirect',
  description: 'Mestre indirekte tale med alle tidsforskyvninger og pronomenendringer.',
  estimatedMinutes: 70,
  competenceGoals: [
    'omforme direkte tale til indirekte tale',
    'beherske tidsforskyvninger (concordance des temps)',
    'bruke riktige spørreord og konjunksjoner i indirekte tale',
  ],
  content: [
    {
      id: 'fransk-3-3-intro',
      type: 'text',
      content: `Indirekte tale (le discours indirect) brukes for å gjenfortelle hva noen har sagt. Dette krever endringer i pronomen, tidsformer og spørreord.`,
    },
    {
      id: 'fransk-3-3-def-1',
      type: 'definition',
      title: 'Grunnregler for indirekte tale',
      content: `**Direkte tale:** Il dit : « Je suis fatigué. »
**Indirekte tale:** Il dit qu'il est fatigué.

Hovedendringer:
1. Anførselstegn og kolon fjernes
2. "que" innleder leddsetningen
3. Pronomen tilpasses (je → il/elle)
4. Tidsformene forskyves når hovedverbet er i fortid`,
    },
    {
      id: 'fransk-3-3-text-1',
      type: 'text',
      title: 'Tidsforskyvning (La concordance des temps)',
      content: `Når hovedverbet er i fortid (il a dit, il disait), forskyves tidsformene:

| Direkte tale | Indirekte tale |
|--------------|----------------|
| présent | imparfait |
| passé composé | plus-que-parfait |
| futur simple | conditionnel présent |
| futur antérieur | conditionnel passé |
| imparfait | imparfait (uendret) |
| plus-que-parfait | plus-que-parfait (uendret) |
| conditionnel | conditionnel (uendret) |`,
    },
    {
      id: 'fransk-3-3-example-1',
      type: 'example',
      title: 'Eksempler på tidsforskyvning',
      content: `**Présent → Imparfait:**
- Direct: Il a dit : « Je **suis** malade. »
- Indirect: Il a dit qu'il **était** malade.

**Passé composé → Plus-que-parfait:**
- Direct: Elle a dit : « J'**ai fini** mes devoirs. »
- Indirect: Elle a dit qu'elle **avait fini** ses devoirs.

**Futur → Conditionnel:**
- Direct: Il a dit : « Je **viendrai** demain. »
- Indirect: Il a dit qu'il **viendrait** le lendemain.`,
    },
    {
      id: 'fransk-3-3-text-2',
      type: 'text',
      title: 'Tidsuttrykk i indirekte tale',
      content: `Tidsuttrykk endres også når hovedverbet er i fortid:

| Direkte tale | Indirekte tale |
|--------------|----------------|
| aujourd'hui | ce jour-là |
| hier | la veille |
| demain | le lendemain |
| cette semaine | cette semaine-là |
| la semaine prochaine | la semaine suivante |
| la semaine dernière | la semaine précédente |
| maintenant | à ce moment-là |
| ici | là |`,
    },
    {
      id: 'fransk-3-3-text-3',
      type: 'text',
      title: 'Spørsmål i indirekte tale',
      content: `**Ja/nei-spørsmål:** Bruk "si"
- Direct: Il demande : « Est-ce que tu viens ? »
- Indirect: Il demande **si** tu viens.

**Spørreord:** Beholdes, men ordstillingen endres
- Direct: Elle demande : « Où vas-tu ? »
- Indirect: Elle demande **où** tu vas.

**"Qu'est-ce que/qui"** → "ce que/qui"
- Direct: Il demande : « Qu'est-ce que tu fais ? »
- Indirect: Il demande **ce que** tu fais.

**"Qui est-ce qui"** → "qui"
- Direct: Elle demande : « Qui est-ce qui vient ? »
- Indirect: Elle demande **qui** vient.`,
    },
    {
      id: 'fransk-3-3-example-2',
      type: 'example',
      title: 'Komplette eksempler',
      content: `**Utsagn:**
- Direct: Marie a dit : « Je pars demain et je reviendrai la semaine prochaine. »
- Indirect: Marie a dit qu'elle partait le lendemain et qu'elle reviendrait la semaine suivante.

**Spørsmål:**
- Direct: Pierre a demandé : « Qu'est-ce que tu as fait hier ? »
- Indirect: Pierre a demandé ce que j'avais fait la veille.

**Imperativ → de + infinitif:**
- Direct: Elle m'a dit : « Viens ici ! »
- Indirect: Elle m'a dit de venir là.`,
    },
    {
      id: 'fransk-3-3-tip-1',
      type: 'tip',
      content: `Når hovedverbet er i presens (il dit), er det ingen tidsforskyvning: Il dit : « Je suis fatigué » → Il dit qu'il est fatigué.`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-3-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Gjør om til indirekte tale: Il a dit : « Je suis content. »',
      options: [
        { id: 'a', text: 'Il a dit qu\'il est content.', isCorrect: false, feedback: 'Présent må forskyves til imparfait når hovedverbet er i fortid.' },
        { id: 'b', text: 'Il a dit qu\'il était content.', isCorrect: true },
        { id: 'c', text: 'Il a dit qu\'il a été content.', isCorrect: false, feedback: 'Passé composé er ikke riktig forskyvning fra présent.' },
        { id: 'd', text: 'Il a dit que je suis content.', isCorrect: false, feedback: 'Pronomenet må endres fra "je" til "il".' },
      ],
      solution: 'Présent (suis) → Imparfait (était) når hovedverbet er i fortid. Pronomen "je" → "il".',
    },
    {
      id: 'fransk-3-3-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Gjør om til indirekte tale: Elle a demandé : « Est-ce que tu viens demain ? »',
      options: [
        { id: 'a', text: 'Elle a demandé que tu venais le lendemain.', isCorrect: false, feedback: 'Ja/nei-spørsmål bruker "si", ikke "que".' },
        { id: 'b', text: 'Elle a demandé si tu venais le lendemain.', isCorrect: true },
        { id: 'c', text: 'Elle a demandé si tu viens demain.', isCorrect: false, feedback: 'Tidsformen og tidsuttrykket må forskyves.' },
        { id: 'd', text: 'Elle a demandé est-ce que tu venais.', isCorrect: false, feedback: '"Est-ce que" erstattes av "si" i indirekte tale.' },
      ],
      solution: 'Ja/nei-spørsmål: "est-ce que" → "si". Présent → imparfait. "Demain" → "le lendemain".',
    },
    {
      id: 'fransk-3-3-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Gjør om til indirekte tale: Il a dit : « J\'ai vu Marie hier. »',
      options: [
        { id: 'a', text: 'Il a dit qu\'il a vu Marie hier.', isCorrect: false, feedback: 'Passé composé må forskyves til plus-que-parfait, og "hier" til "la veille".' },
        { id: 'b', text: 'Il a dit qu\'il avait vu Marie la veille.', isCorrect: true },
        { id: 'c', text: 'Il a dit qu\'il voyait Marie la veille.', isCorrect: false, feedback: 'Imparfait er ikke riktig forskyvning fra passé composé.' },
        { id: 'd', text: 'Il a dit qu\'il avait vu Marie hier.', isCorrect: false, feedback: '"Hier" må endres til "la veille".' },
      ],
      solution: 'Passé composé (ai vu) → Plus-que-parfait (avait vu). "Hier" → "la veille".',
    },
    {
      id: 'fransk-3-3-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Gjør om til indirekte tale: Elle a demandé : « Qu\'est-ce que tu fais ? »',
      options: [
        { id: 'a', text: 'Elle a demandé qu\'est-ce que je faisais.', isCorrect: false, feedback: '"Qu\'est-ce que" erstattes av "ce que" i indirekte tale.' },
        { id: 'b', text: 'Elle a demandé ce que je faisais.', isCorrect: true },
        { id: 'c', text: 'Elle a demandé que je faisais.', isCorrect: false, feedback: 'Det mangler "ce" før "que".' },
        { id: 'd', text: 'Elle a demandé ce que tu fais.', isCorrect: false, feedback: 'Pronomen og tid må endres.' },
      ],
      solution: '"Qu\'est-ce que" → "ce que". Présent → imparfait. "Tu" → "je" (tilbakerapportert).',
    },
    {
      id: 'fransk-3-3-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken tidsform blir "futur simple" i indirekte tale (med hovedverb i fortid)?',
      options: [
        { id: 'a', text: 'Imparfait', isCorrect: false, feedback: 'Imparfait er forskyvning fra présent.' },
        { id: 'b', text: 'Conditionnel présent', isCorrect: true },
        { id: 'c', text: 'Plus-que-parfait', isCorrect: false, feedback: 'Plus-que-parfait er forskyvning fra passé composé.' },
        { id: 'd', text: 'Futur antérieur', isCorrect: false, feedback: 'Futur antérieur forskyves til conditionnel passé.' },
      ],
      solution: 'Futur simple → Conditionnel présent. Eksempel: "Je viendrai" → "Il a dit qu\'il viendrait."',
    },
  ],
};

// ============================================================================
// Kapittel 4: Style et rhétorique - Stil og retorikk
// ============================================================================

export const CHAPTER_FRANSK_3_4: TextbookChapter = {
  id: 'fransk-3-4',
  courseId: 'fransk-3',
  chapterNumber: '4',
  title: 'Style et rhétorique',
  description: 'Lær om stilistiske virkemidler, retorikk og avansert skriftlig fremstilling på fransk.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjenkjenne og bruke stilistiske virkemidler',
    'skrive argumenterende og analytiske tekster',
    'beherske formelt og akademisk språk',
  ],
  content: [
    {
      id: 'fransk-3-4-intro',
      type: 'text',
      content: `God skriftlig fremstilling på fransk krever kjennskap til stilistiske virkemidler og retoriske grep. Dette kapitlet gir deg verktøyene for å skrive elegante og overbevisende tekster.`,
    },
    {
      id: 'fransk-3-4-def-1',
      type: 'definition',
      title: 'Les figures de style - Stilistiske virkemidler',
      content: `**La métaphore** - Metafor (sammenligning uten "som")
Eksempel: La vie est un voyage. (Livet er en reise.)

**La comparaison** - Sammenligning (med "comme", "tel que")
Eksempel: Il court comme le vent. (Han løper som vinden.)

**L'hyperbole** - Overdrivelse
Eksempel: Je meurs de faim. (Jeg dør av sult.)

**La litote** - Underdrivelse
Eksempel: Ce n'est pas mal. (Det er ikke dårlig = det er bra.)

**L'antithèse** - Motsetning
Eksempel: Petit à petit, l'oiseau fait son nid. (Lite og lite bygger fuglen sitt rede.)`,
    },
    {
      id: 'fransk-3-4-text-1',
      type: 'text',
      title: 'Flere stilistiske virkemidler',
      content: `**L'anaphore** - Gjentakelse i begynnelsen av setninger
Eksempel: Paris, Paris, Paris... toujours Paris!

**L'euphémisme** - Formildende uttrykk
Eksempel: Il nous a quittés. (Han har forlatt oss = han er død.)

**L'ironie** - Ironi (si det motsatte av hva man mener)
Eksempel: Quelle belle journée! (under et regnvær)

**La personnification** - Personifisering
Eksempel: Le soleil sourit. (Solen smiler.)

**L'oxymore** - Selvmotsigelse
Eksempel: Un silence assourdissant. (En øredøvende stillhet.)`,
    },
    {
      id: 'fransk-3-4-text-2',
      type: 'text',
      title: 'Argumentasjonsstruktur - La dissertation',
      content: `Den franske "dissertation" følger en streng struktur:

**1. L'introduction**
- Une accroche (en fengende innledning)
- La problématique (problemstillingen)
- L'annonce du plan (presentasjon av strukturen)

**2. Le développement**
- Thèse (første hovedargument)
- Antithèse (motargument/annen vinkel)
- Synthèse (syntese/konklusjon av argumentene)

**3. La conclusion**
- Résumé des arguments (oppsummering)
- Réponse à la problématique (svar på problemstillingen)
- Ouverture (åpning for videre refleksjon)`,
    },
    {
      id: 'fransk-3-4-text-3',
      type: 'text',
      title: 'Bindeord og overganger',
      content: `**For å innlede:**
- Tout d'abord, premièrement, en premier lieu...

**For å legge til:**
- De plus, en outre, par ailleurs, également...

**For å kontrastere:**
- Cependant, néanmoins, toutefois, en revanche...

**For å gi eksempler:**
- Par exemple, notamment, ainsi, tel que...

**For å konkludere:**
- En conclusion, pour conclure, en somme, finalement...

**For å uttrykke årsak:**
- Car, parce que, puisque, étant donné que...

**For å uttrykke konsekvens:**
- Donc, par conséquent, c'est pourquoi, ainsi...`,
    },
    {
      id: 'fransk-3-4-example-1',
      type: 'example',
      title: 'Eksempel på akademisk avsnitt',
      content: `**Tema: Miljøvern**

*Tout d'abord*, il convient de souligner que la protection de l'environnement constitue un enjeu majeur de notre époque. *En effet*, les changements climatiques menacent non seulement la biodiversité, mais également les sociétés humaines. *Par exemple*, la montée des eaux met en péril de nombreuses régions côtières. *Cependant*, certains arguent que les mesures environnementales freinent le développement économique. *Néanmoins*, cette vision à court terme néglige les coûts futurs de l'inaction. *Par conséquent*, il est impératif d'adopter des politiques durables.`,
    },
    {
      id: 'fransk-3-4-tip-1',
      type: 'tip',
      content: `I akademisk fransk unngår man "je" og bruker heller upersonlige konstruksjoner: "On peut constater que...", "Il convient de noter que...", "Force est de constater que..."`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-4-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket stilistisk virkemiddel er brukt: "La vie est un long fleuve tranquille"?',
      options: [
        { id: 'a', text: 'Comparaison', isCorrect: false, feedback: 'En sammenligning bruker "comme" eller "tel que".' },
        { id: 'b', text: 'Métaphore', isCorrect: true },
        { id: 'c', text: 'Hyperbole', isCorrect: false, feedback: 'Hyperbole er overdrivelse.' },
        { id: 'd', text: 'Litote', isCorrect: false, feedback: 'Litote er underdrivelse.' },
      ],
      solution: 'En metafor sammenligner to ting direkte uten å bruke "comme". Her sammenlignes livet med en rolig elv.',
    },
    {
      id: 'fransk-3-4-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket bindeord uttrykker kontrast?',
      options: [
        { id: 'a', text: 'De plus', isCorrect: false, feedback: '"De plus" legger til informasjon.' },
        { id: 'b', text: 'Par conséquent', isCorrect: false, feedback: '"Par conséquent" uttrykker konsekvens.' },
        { id: 'c', text: 'Néanmoins', isCorrect: true },
        { id: 'd', text: 'En effet', isCorrect: false, feedback: '"En effet" bekrefter eller forklarer.' },
      ],
      solution: '"Néanmoins" (likevel, ikke desto mindre) uttrykker kontrast eller motsetning.',
    },
    {
      id: 'fransk-3-4-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva er "un silence assourdissant" et eksempel på?',
      options: [
        { id: 'a', text: 'Métaphore', isCorrect: false, feedback: 'En metafor sammenligner to ulike ting.' },
        { id: 'b', text: 'Oxymore', isCorrect: true },
        { id: 'c', text: 'Euphémisme', isCorrect: false, feedback: 'Eufemisme formildner et uttrykk.' },
        { id: 'd', text: 'Anaphore', isCorrect: false, feedback: 'Anafor er gjentakelse i setningsstart.' },
      ],
      solution: 'Et oksymoron kombinerer to motstridende begreper: "stillhet" og "øredøvende".',
    },
    {
      id: 'fransk-3-4-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er de tre delene i en fransk "dissertation"?',
      options: [
        { id: 'a', text: 'Début, milieu, fin', isCorrect: false, feedback: 'Dette er for generelt.' },
        { id: 'b', text: 'Introduction, développement, conclusion', isCorrect: true },
        { id: 'c', text: 'Thèse, antithèse, synthèse', isCorrect: false, feedback: 'Dette er strukturen i "développement", ikke hele teksten.' },
        { id: 'd', text: 'Accroche, argumentation, ouverture', isCorrect: false, feedback: 'Disse er deler av ulike seksjoner, ikke hovedstrukturen.' },
      ],
      solution: 'En dissertation har tre hoveddeler: introduction (innledning), développement (hoveddel) og conclusion (avslutning).',
    },
    {
      id: 'fransk-3-4-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan unngår man "je" i akademisk fransk?',
      options: [
        { id: 'a', text: 'Man bruker "tu" i stedet', isCorrect: false, feedback: '"Tu" er uformelt og ikke passende.' },
        { id: 'b', text: 'Man bruker upersonlige konstruksjoner som "On peut constater que..."', isCorrect: true },
        { id: 'c', text: 'Man bruker "nous" i stedet', isCorrect: false, feedback: '"Nous" kan brukes, men upersonlige konstruksjoner er vanligere.' },
        { id: 'd', text: 'Man skriver i passiv hele tiden', isCorrect: false, feedback: 'Passiv er ett verktøy, men upersonlige konstruksjoner er vanligere.' },
      ],
      solution: 'I akademisk fransk bruker man upersonlige uttrykk: "On peut observer...", "Il convient de...", "Force est de constater..."',
    },
  ],
};

// ============================================================================
// Kapittel 5: Littérature classique et moderne - Klassisk og moderne litteratur
// ============================================================================

export const CHAPTER_FRANSK_3_5: TextbookChapter = {
  id: 'fransk-3-5',
  courseId: 'fransk-3',
  chapterNumber: '5',
  title: 'Littérature classique et moderne',
  description: 'Utforsk fransk litteraturhistorie fra klassisismen til moderne tid.',
  estimatedMinutes: 80,
  competenceGoals: [
    'kjenne til viktige franske forfattere og litterære epoker',
    'analysere litterære tekster',
    'forstå kulturhistorisk kontekst',
  ],
  content: [
    {
      id: 'fransk-3-5-intro',
      type: 'text',
      content: `Fransk litteratur har hatt enorm innflytelse på verdenskulturen. Fra Molières komedier til Camus' eksistensialisme, fra Victor Hugos romantikk til Proust modernisme - fransk litteratur byr på et rikt univers å utforske.`,
    },
    {
      id: 'fransk-3-5-text-1',
      type: 'text',
      title: 'Le classicisme (1600-tallet)',
      content: `Klassisismen preges av orden, balanse og respekt for antikke idealer.

**Molière (1622-1673)** - Komediens mester
- *Le Misanthrope* - Om hykleri i samfunnet
- *Le Tartuffe* - Om religiøst hykleri
- *L'Avare* - Om gjerrighet

**Jean Racine (1639-1699)** - Tragediens mester
- *Phèdre* - Tragisk kjærlighetshistorie
- *Andromaque* - Gresk tragedie

**Jean de La Fontaine (1621-1695)** - Fablenes mester
- *Les Fables* - Dyrefabler med moralsk lærdom`,
    },
    {
      id: 'fransk-3-5-text-2',
      type: 'text',
      title: 'Le siècle des Lumières (1700-tallet)',
      content: `Opplysningstiden vektla fornuft, vitenskap og kritikk av autoriteter.

**Voltaire (1694-1778)**
- *Candide* - Satirisk roman om optimisme
- Filosof og samfunnskritiker

**Jean-Jacques Rousseau (1712-1778)**
- *Du contrat social* - Politisk filosofi
- *Les Confessions* - Selvbiografi

**Denis Diderot (1713-1784)**
- Hovedredaktør av *L'Encyclopédie*
- *Jacques le Fataliste* - Filosofisk roman`,
    },
    {
      id: 'fransk-3-5-text-3',
      type: 'text',
      title: 'Le romantisme (1800-tallet)',
      content: `Romantikken fremhevet følelser, natur og individuell frihet.

**Victor Hugo (1802-1885)**
- *Les Misérables* - Sosial roman
- *Notre-Dame de Paris* - Historisk roman
- Også stor poet og dramatiker

**Alexandre Dumas (1802-1870)**
- *Les Trois Mousquetaires* - Eventyroman
- *Le Comte de Monte-Cristo*

**Gustave Flaubert (1821-1880)**
- *Madame Bovary* - Realismens mesterverk

**Charles Baudelaire (1821-1867)**
- *Les Fleurs du mal* - Symbolistisk poesi`,
    },
    {
      id: 'fransk-3-5-text-4',
      type: 'text',
      title: 'Le XXe siècle - 1900-tallet',
      content: `1900-tallet brakte eksperimentering og eksistensialisme.

**Marcel Proust (1871-1922)**
- *À la recherche du temps perdu* - Modernistisk mesterverk

**Albert Camus (1913-1960)** - Nobelpris 1957
- *L'Étranger* - Eksistensialistisk roman
- *La Peste* - Allegorisk roman

**Jean-Paul Sartre (1905-1980)** - Nobelpris (nektet)
- *La Nausée* - Eksistensialistisk roman
- Filosof og dramatiker

**Simone de Beauvoir (1908-1986)**
- *Le Deuxième Sexe* - Feministisk klassiker

**Antoine de Saint-Exupéry (1900-1944)**
- *Le Petit Prince* - Filosofisk eventyr`,
    },
    {
      id: 'fransk-3-5-example-1',
      type: 'example',
      title: 'Litterær analyse - Åpningen av "L\'Étranger"',
      content: `**Tekst:**
"Aujourd'hui, maman est morte. Ou peut-être hier, je ne sais pas."

*(I dag døde mamma. Eller kanskje i går, jeg vet ikke.)*

**Analyse:**
- **Tonen:** Likegyldig, følelseskald, distansert
- **Språket:** Korte, enkle setninger (paratakse)
- **Temaer:** Fremmedgjøring, likegyldighet, eksistensialisme
- **Effekt:** Leseren sjokkeres av manglende følelsesmessig reaksjon
- **Litterær kontekst:** Åpningen etablerer Meursaults karakter som "fremmed" i forhold til samfunnets forventninger`,
    },
    {
      id: 'fransk-3-5-def-1',
      type: 'definition',
      title: 'Litterære analysebegreper',
      content: `**Le narrateur** - Fortelleren
**Le point de vue** - Synsvinkelen
**Le thème** - Temaet
**Le style** - Stilen
**La structure** - Strukturen
**Le personnage** - Karakteren
**L'intrigue** - Handlingen
**Le dénouement** - Avslutningen/oppløsningen`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-5-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem skrev "Les Misérables"?',
      options: [
        { id: 'a', text: 'Alexandre Dumas', isCorrect: false, feedback: 'Dumas skrev "Les Trois Mousquetaires".' },
        { id: 'b', text: 'Victor Hugo', isCorrect: true },
        { id: 'c', text: 'Gustave Flaubert', isCorrect: false, feedback: 'Flaubert skrev "Madame Bovary".' },
        { id: 'd', text: 'Émile Zola', isCorrect: false, feedback: 'Zola var en naturalistisk forfatter.' },
      ],
      solution: 'Victor Hugo skrev "Les Misérables" (1862), en av de mest kjente franske romanene.',
    },
    {
      id: 'fransk-3-5-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken litterær epoke tilhører Molière?',
      options: [
        { id: 'a', text: 'Le romantisme', isCorrect: false, feedback: 'Romantikken var på 1800-tallet.' },
        { id: 'b', text: 'Le classicisme', isCorrect: true },
        { id: 'c', text: 'Les Lumières', isCorrect: false, feedback: 'Opplysningstiden var på 1700-tallet.' },
        { id: 'd', text: 'Le réalisme', isCorrect: false, feedback: 'Realismen var på 1800-tallet.' },
      ],
      solution: 'Molière (1622-1673) var en sentral forfatter i klassisismen på 1600-tallet.',
    },
    {
      id: 'fransk-3-5-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken forfatter er kjent for eksistensialistisk litteratur og vant Nobelprisen i 1957?',
      options: [
        { id: 'a', text: 'Jean-Paul Sartre', isCorrect: false, feedback: 'Sartre nektet å motta Nobelprisen.' },
        { id: 'b', text: 'Albert Camus', isCorrect: true },
        { id: 'c', text: 'Marcel Proust', isCorrect: false, feedback: 'Proust var modernist, ikke eksistensialist.' },
        { id: 'd', text: 'Simone de Beauvoir', isCorrect: false, feedback: 'Beauvoir mottok ikke Nobelprisen.' },
      ],
      solution: 'Albert Camus vant Nobelprisen i litteratur i 1957 for sin eksistensialistiske litteratur.',
    },
    {
      id: 'fransk-3-5-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedverket til Marcel Proust?',
      options: [
        { id: 'a', text: 'Les Fleurs du mal', isCorrect: false, feedback: 'Dette er Baudelaires verk.' },
        { id: 'b', text: 'À la recherche du temps perdu', isCorrect: true },
        { id: 'c', text: 'La Nausée', isCorrect: false, feedback: 'Dette er Sartres verk.' },
        { id: 'd', text: 'Le Petit Prince', isCorrect: false, feedback: 'Dette er Saint-Exupérys verk.' },
      ],
      solution: '"À la recherche du temps perdu" (På sporet av den tapte tid) er Prousts monumentale romanverk.',
    },
    {
      id: 'fransk-3-5-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem var hovedredaktør av "L\'Encyclopédie" under opplysningstiden?',
      options: [
        { id: 'a', text: 'Voltaire', isCorrect: false, feedback: 'Voltaire bidro, men var ikke hovedredaktør.' },
        { id: 'b', text: 'Denis Diderot', isCorrect: true },
        { id: 'c', text: 'Rousseau', isCorrect: false, feedback: 'Rousseau bidro, men var ikke hovedredaktør.' },
        { id: 'd', text: 'Montesquieu', isCorrect: false, feedback: 'Montesquieu bidro, men var ikke hovedredaktør.' },
      ],
      solution: 'Denis Diderot var hovedredaktør av L\'Encyclopédie sammen med d\'Alembert.',
    },
  ],
};

// ============================================================================
// Kapittel 6: Cinéma et art français - Fransk film og kunst
// ============================================================================

export const CHAPTER_FRANSK_3_6: TextbookChapter = {
  id: 'fransk-3-6',
  courseId: 'fransk-3',
  chapterNumber: '6',
  title: 'Cinéma et art français',
  description: 'Utforsk fransk film, kunst og kulturelle uttrykk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'kjenne til fransk filmhistorie og viktige regissører',
    'forstå franske kunstbevegelser',
    'diskutere kunst og kultur på fransk',
  ],
  content: [
    {
      id: 'fransk-3-6-intro',
      type: 'text',
      content: `Frankrike har vært en kulturell stormakt, fra impresjonismens fødsel til nybølgen i film. Å forstå fransk kunst og film gir innsikt i fransk kultur og identitet.`,
    },
    {
      id: 'fransk-3-6-text-1',
      type: 'text',
      title: 'Le cinéma français - Fransk filmhistorie',
      content: `**Begynnelsen (1895)**
Brødrene Lumière viste verdens første film i Paris. Frankrike er filmens fødeland!

**Le cinéma poétique (1930-40-tallet)**
- Jean Renoir: *La Grande Illusion*, *La Règle du jeu*
- Marcel Carné: *Les Enfants du paradis*

**La Nouvelle Vague (1950-60-tallet)**
En revolusjonerende bevegelse som endret filmkunsten:
- François Truffaut: *Les 400 Coups*, *Jules et Jim*
- Jean-Luc Godard: *À bout de souffle*
- Agnès Varda: *Cléo de 5 à 7*

**Moderne fransk film**
- Jean-Pierre Jeunet: *Amélie* (Le Fabuleux Destin d'Amélie Poulain)
- Jacques Audiard: *Un prophète*, *Dheepan*
- Céline Sciamma: *Portrait de la jeune fille en feu*`,
    },
    {
      id: 'fransk-3-6-def-1',
      type: 'definition',
      title: 'La Nouvelle Vague - Nybølgen',
      content: `Nybølgen (sent 1950-tall) var en filmrevolusjon karakterisert av:
- **Auteur-teorien:** Regissøren som kunstner
- **Location shooting:** Filming på virkelige steder
- **Jump cuts:** Innovative klippeteknikker
- **Improvisasjon:** Naturlig dialog og skuespill
- **Personlige historier:** Ofte selvbiografiske elementer
- **Lav-budsjett:** Uavhengig produksjon`,
    },
    {
      id: 'fransk-3-6-text-2',
      type: 'text',
      title: 'L\'art français - Franske kunstbevegelser',
      content: `**L'impressionnisme (1860-tallet)**
- Claude Monet: *Impression, soleil levant*
- Pierre-Auguste Renoir: Sosiale scener
- Edgar Degas: Ballettdansere
- Karakteristikk: Lys, farger, øyeblikk

**Le post-impressionnisme**
- Paul Cézanne: Geometriske former
- Vincent van Gogh (i Frankrike): Ekspresjonistisk stil
- Paul Gauguin: Eksotiske motiver

**Le cubisme (1900-tallet)**
- Pablo Picasso (i Paris): *Les Demoiselles d'Avignon*
- Georges Braque: Analytisk kubisme

**Le surréalisme**
- Salvador Dalí (i Paris): Drømmeaktige bilder
- René Magritte: *La Trahison des images*`,
    },
    {
      id: 'fransk-3-6-text-3',
      type: 'text',
      title: 'Vokabular for kunst og film',
      content: `**Filmterminologi:**
| Fransk | Norsk |
|--------|-------|
| le réalisateur / la réalisatrice | regissøren |
| le scénario | manuset |
| le tournage | innspillingen |
| les effets spéciaux | spesialeffektene |
| la bande-son | lydsporet |
| les sous-titres | undertekstene |
| le plan | bildet/tagningen |
| le montage | klippingen |

**Kunstterminologi:**
| Fransk | Norsk |
|--------|-------|
| le tableau | maleriet |
| l'exposition | utstillingen |
| le musée | museet |
| la sculpture | skulpturen |
| le pinceau | penselen |
| la toile | lerretet |
| le chef-d'œuvre | mesterverket |`,
    },
    {
      id: 'fransk-3-6-example-1',
      type: 'example',
      title: 'Analysere en film',
      content: `**Film: "Amélie" (2001) av Jean-Pierre Jeunet**

*Le style visuel:* Filmen bruker sterke farger (grønt og rødt), fantasifulle visuelle effekter og et eventyrlig Paris.

*Les thèmes principaux:* Ensomhet, kjærlighet, medfølelse, hverdagslig magi.

*La narration:* Voice-over forteller om karakterenes indre liv og hemmeligheter.

*L'influence:* Filmen skapte en ny interesse for fransk film internasjonalt og viste et poetisk, nostalgisk Paris.

**Nyttige uttrykk for filmanalyse:**
- "Le réalisateur utilise..." (Regissøren bruker...)
- "La scène illustre..." (Scenen illustrerer...)
- "Le personnage principal incarne..." (Hovedkarakteren legemliggjør...)`,
    },
    {
      id: 'fransk-3-6-tip-1',
      type: 'tip',
      content: `Festival de Cannes er verdens mest prestisjefulle filmfestival. Den høyeste prisen er "La Palme d'or" (Gullpalmen).`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-6-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvem regnes som filmens oppfinnere?',
      options: [
        { id: 'a', text: 'Thomas Edison', isCorrect: false, feedback: 'Edison bidro til filmteknologi, men viste ikke den første offentlige filmen.' },
        { id: 'b', text: 'Brødrene Lumière', isCorrect: true },
        { id: 'c', text: 'Georges Méliès', isCorrect: false, feedback: 'Méliès var en pioner innen spesialeffekter, men kom etter Lumière.' },
        { id: 'd', text: 'Charlie Chaplin', isCorrect: false, feedback: 'Chaplin var skuespiller og regissør, ikke oppfinner av film.' },
      ],
      solution: 'Brødrene Lumière (Auguste og Louis) viste verdens første offentlige film i Paris i 1895.',
    },
    {
      id: 'fransk-3-6-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken filmretning kjennetegnes av auteur-teorien og innovative klippeteknikker?',
      options: [
        { id: 'a', text: 'Le cinéma poétique', isCorrect: false, feedback: 'Poetisk kino var tidligere og mer tradisjonell.' },
        { id: 'b', text: 'La Nouvelle Vague', isCorrect: true },
        { id: 'c', text: 'Le néo-réalisme', isCorrect: false, feedback: 'Neorealisme var en italiensk bevegelse.' },
        { id: 'd', text: 'Le cinéma muet', isCorrect: false, feedback: 'Stumfilmen var den tidligste filmperioden.' },
      ],
      solution: 'La Nouvelle Vague (Nybølgen) på 1950-60-tallet introduserte auteur-teorien og eksperimentelle teknikker.',
    },
    {
      id: 'fransk-3-6-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilket maleri ga navn til impresjonismen?',
      options: [
        { id: 'a', text: 'Les Demoiselles d\'Avignon', isCorrect: false, feedback: 'Dette er et kubistisk verk av Picasso.' },
        { id: 'b', text: 'Impression, soleil levant', isCorrect: true },
        { id: 'c', text: 'La Nuit étoilée', isCorrect: false, feedback: 'Dette er et post-impresjonistisk verk av Van Gogh.' },
        { id: 'd', text: 'Le Déjeuner sur l\'herbe', isCorrect: false, feedback: 'Dette er av Manet, men ga ikke navn til bevegelsen.' },
      ],
      solution: 'Claude Monets "Impression, soleil levant" (1872) ga navn til hele impresjonisme-bevegelsen.',
    },
    {
      id: 'fransk-3-6-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva heter den høyeste prisen ved filmfestivalen i Cannes?',
      options: [
        { id: 'a', text: 'L\'Oscar d\'or', isCorrect: false, feedback: 'Oscar er en amerikansk pris.' },
        { id: 'b', text: 'La Palme d\'or', isCorrect: true },
        { id: 'c', text: 'Le Lion d\'or', isCorrect: false, feedback: 'Gullløven er prisen i Venezia.' },
        { id: 'd', text: 'L\'Ours d\'or', isCorrect: false, feedback: 'Gullbjørnen er prisen i Berlin.' },
      ],
      solution: 'La Palme d\'or (Gullpalmen) er den høyeste utmerkelsen ved Festival de Cannes.',
    },
    {
      id: 'fransk-3-6-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "le réalisateur"?',
      options: [
        { id: 'a', text: 'Skuespilleren', isCorrect: false, feedback: '"Skuespilleren" er "l\'acteur/l\'actrice".' },
        { id: 'b', text: 'Regissøren', isCorrect: true },
        { id: 'c', text: 'Produsenten', isCorrect: false, feedback: '"Produsenten" er "le producteur".' },
        { id: 'd', text: 'Manusforfatteren', isCorrect: false, feedback: '"Manusforfatteren" er "le scénariste".' },
      ],
      solution: '"Le réalisateur" (eller "la réalisatrice") betyr regissøren.',
    },
  ],
};

// ============================================================================
// Kapittel 7: Politique et actualités - Politikk og aktualiteter
// ============================================================================

export const CHAPTER_FRANSK_3_7: TextbookChapter = {
  id: 'fransk-3-7',
  courseId: 'fransk-3',
  chapterNumber: '7',
  title: 'Politique et actualités',
  description: 'Forstå det franske politiske systemet og diskuter aktuelle temaer.',
  estimatedMinutes: 75,
  competenceGoals: [
    'forstå det franske politiske systemet',
    'diskutere aktuelle samfunnsspørsmål på fransk',
    'lese og forstå nyhetsartikler',
  ],
  content: [
    {
      id: 'fransk-3-7-intro',
      type: 'text',
      content: `For å forstå Frankrike og den fransktalende verden er det viktig å kjenne til politikk og samfunnsstrukturer. Dette kapitlet gir deg verktøyene til å diskutere aktuelle temaer på fransk.`,
    },
    {
      id: 'fransk-3-7-text-1',
      type: 'text',
      title: 'Le système politique français',
      content: `Frankrike er en **république** med et **semi-presidentielt** system.

**L'exécutif (utøvende makt):**
- Le Président de la République - Velges for 5 år
- Le Premier ministre - Utnevnes av presidenten
- Le gouvernement - Ministrene

**Le législatif (lovgivende makt):**
- L'Assemblée nationale - 577 deputerte (députés)
- Le Sénat - 348 senatorer

**Le judiciaire (dømmende makt):**
- Les tribunaux - Domstolene
- La Cour de cassation - Høyesterett

**Les valeurs républicaines:**
"Liberté, Égalité, Fraternité" - Frihet, Likhet, Brorskap`,
    },
    {
      id: 'fransk-3-7-def-1',
      type: 'definition',
      title: 'Politisk vokabular',
      content: `| Fransk | Norsk |
|--------|-------|
| le parti politique | det politiske partiet |
| la gauche | venstresiden |
| la droite | høyresiden |
| le centre | sentrum |
| l'élection | valget |
| le vote / voter | stemmen / å stemme |
| le scrutin | valgomgangen |
| la campagne électorale | valgkampen |
| le sondage | meningsmålingen |
| le mandat | mandatet/valgperioden |`,
    },
    {
      id: 'fransk-3-7-text-2',
      type: 'text',
      title: 'Les enjeux actuels - Aktuelle temaer',
      content: `**L'environnement et le climat**
- le réchauffement climatique - global oppvarming
- les énergies renouvelables - fornybar energi
- la transition écologique - grønn omstilling
- la biodiversité - biologisk mangfold

**L'économie et l'emploi**
- le chômage - arbeidsledighet
- le pouvoir d'achat - kjøpekraft
- les inégalités - ulikheter
- la mondialisation - globalisering

**La société**
- l'immigration - innvandring
- l'intégration - integrering
- la laïcité - sekularisme
- l'égalité des sexes - likestilling

**L'Europe et le monde**
- l'Union européenne - EU
- la géopolitique - geopolitikk
- les relations internationales - internasjonale relasjoner`,
    },
    {
      id: 'fransk-3-7-text-3',
      type: 'text',
      title: 'Uttrykk for å diskutere og argumentere',
      content: `**Gi din mening:**
- À mon avis... / Selon moi... (Etter min mening...)
- Je suis convaincu(e) que... (Jeg er overbevist om at...)
- Il me semble que... (Det virker for meg som...)

**Være enig/uenig:**
- Je suis tout à fait d'accord. (Jeg er helt enig.)
- Je ne partage pas cette opinion. (Jeg deler ikke denne meningen.)
- C'est discutable. (Det kan diskuteres.)

**Argumentere:**
- D'une part... d'autre part... (På den ene siden... på den andre siden...)
- Il faut tenir compte de... (Man må ta hensyn til...)
- Cela soulève la question de... (Dette reiser spørsmålet om...)

**Konkludere:**
- En fin de compte... (Til syvende og sist...)
- Tout bien considéré... (Alt tatt i betraktning...)`,
    },
    {
      id: 'fransk-3-7-example-1',
      type: 'example',
      title: 'Eksempel på politisk diskusjon',
      content: `**Tema: La transition écologique**

*À mon avis*, la transition écologique est le défi majeur de notre époque. *D'une part*, nous devons réduire nos émissions de CO2 pour limiter le réchauffement climatique. *D'autre part*, il faut assurer que cette transition soit socialement juste et n'aggrave pas les inégalités.

*Cependant*, certains arguent que les mesures environnementales menacent l'emploi et la compétitivité économique. *Il me semble que* cette vision est à court terme. *En effet*, les énergies renouvelables créent de nouveaux emplois et représentent l'avenir économique.

*En fin de compte*, la question n'est pas de savoir si nous devons agir, mais comment agir efficacement et équitablement.`,
    },
    {
      id: 'fransk-3-7-tip-1',
      type: 'tip',
      content: `For å følge med på franske nyheter, prøv: Le Monde, Le Figaro, Libération (aviser), France 24 (TV), RFI - Radio France Internationale (radio).`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-7-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er Frankrikes nasjonale motto?',
      options: [
        { id: 'a', text: 'Unité, Force, Progrès', isCorrect: false, feedback: 'Dette er ikke Frankrikes motto.' },
        { id: 'b', text: 'Liberté, Égalité, Fraternité', isCorrect: true },
        { id: 'c', text: 'Ordre et Progrès', isCorrect: false, feedback: 'Dette er Brasils motto.' },
        { id: 'd', text: 'Paix, Travail, Patrie', isCorrect: false, feedback: 'Dette er ikke Frankrikes motto.' },
      ],
      solution: '"Liberté, Égalité, Fraternité" (Frihet, Likhet, Brorskap) er Frankrikes motto siden revolusjonen.',
    },
    {
      id: 'fransk-3-7-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva heter det franske parlamentets underhus?',
      options: [
        { id: 'a', text: 'Le Sénat', isCorrect: false, feedback: 'Senatet er overhuset.' },
        { id: 'b', text: 'L\'Assemblée nationale', isCorrect: true },
        { id: 'c', text: 'La Chambre des députés', isCorrect: false, feedback: 'Dette var det gamle navnet.' },
        { id: 'd', text: 'Le Parlement', isCorrect: false, feedback: 'Parlamentet omfatter begge kamrene.' },
      ],
      solution: 'L\'Assemblée nationale er underhuset med 577 folkevalgte deputerte.',
    },
    {
      id: 'fransk-3-7-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "le réchauffement climatique"?',
      options: [
        { id: 'a', text: 'Klimaendringer', isCorrect: false, feedback: '"Klimaendringer" er "les changements climatiques".' },
        { id: 'b', text: 'Global oppvarming', isCorrect: true },
        { id: 'c', text: 'Forurensning', isCorrect: false, feedback: '"Forurensning" er "la pollution".' },
        { id: 'd', text: 'Miljøvern', isCorrect: false, feedback: '"Miljøvern" er "la protection de l\'environnement".' },
      ],
      solution: '"Le réchauffement climatique" betyr bokstavelig "klimaoppvarming", altså global oppvarming.',
    },
    {
      id: 'fransk-3-7-ex-4',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan uttrykker du "Etter min mening" på fransk?',
      options: [
        { id: 'a', text: 'En fin de compte', isCorrect: false, feedback: 'Dette betyr "Til syvende og sist".' },
        { id: 'b', text: 'À mon avis', isCorrect: true },
        { id: 'c', text: 'D\'autre part', isCorrect: false, feedback: 'Dette betyr "På den andre siden".' },
        { id: 'd', text: 'Il faut que', isCorrect: false, feedback: 'Dette betyr "Det er nødvendig at".' },
      ],
      solution: '"À mon avis" eller "Selon moi" brukes for å uttrykke sin mening.',
    },
    {
      id: 'fransk-3-7-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "la laïcité"?',
      options: [
        { id: 'a', text: 'Religiøs frihet', isCorrect: false, feedback: 'Laïcité handler om mer enn religiøs frihet.' },
        { id: 'b', text: 'Sekularisme (skille mellom stat og religion)', isCorrect: true },
        { id: 'c', text: 'Ateisme', isCorrect: false, feedback: 'Laïcité er ikke det samme som ateisme.' },
        { id: 'd', text: 'Toleranse', isCorrect: false, feedback: '"Toleranse" er "la tolérance".' },
      ],
      solution: 'La laïcité er det franske prinsippet om skille mellom stat og religion, sentralt i fransk republikansk tradisjon.',
    },
  ],
};

// ============================================================================
// Kapittel 8: Économie et commerce - Økonomi og handel
// ============================================================================

export const CHAPTER_FRANSK_3_8: TextbookChapter = {
  id: 'fransk-3-8',
  courseId: 'fransk-3',
  chapterNumber: '8',
  title: 'Économie et commerce',
  description: 'Lær om økonomi, næringsliv og forretningsfransk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forstå økonomisk terminologi på fransk',
    'kunne diskutere næringslivstemaer',
    'mestre grunnleggende forretningsfransk',
  ],
  content: [
    {
      id: 'fransk-3-8-intro',
      type: 'text',
      content: `Frankrike er verdens syvende største økonomi og et viktig handelsland. Kunnskap om økonomisk terminologi og forretningsfransk er nyttig for videre studier og arbeidsliv.`,
    },
    {
      id: 'fransk-3-8-text-1',
      type: 'text',
      title: 'Vocabulaire économique de base',
      content: `**Grunnleggende økonomiske begreper:**
| Fransk | Norsk |
|--------|-------|
| l'économie | økonomien |
| le PIB (Produit Intérieur Brut) | BNP (bruttonasjonalprodukt) |
| la croissance | vekst |
| la récession | resesjon |
| l'inflation | inflasjon |
| le taux de chômage | arbeidsledighetsraten |
| le budget | budsjettet |
| la dette | gjelden |
| les impôts / les taxes | skatter / avgifter |
| le marché | markedet |`,
    },
    {
      id: 'fransk-3-8-text-2',
      type: 'text',
      title: 'Le monde des affaires - Forretningsverdenen',
      content: `**Bedrifter og organisasjoner:**
| Fransk | Norsk |
|--------|-------|
| l'entreprise | bedriften |
| la société | selskapet |
| la PME (petite et moyenne entreprise) | SMB (små og mellomstore bedrifter) |
| la multinationale | det multinasjonale selskapet |
| le siège social | hovedkontoret |
| la filiale | datterselskapet |
| le chiffre d'affaires | omsetningen |
| le bénéfice / le profit | fortjenesten |
| la perte | tapet |
| les actionnaires | aksjonærene |`,
    },
    {
      id: 'fransk-3-8-text-3',
      type: 'text',
      title: 'Le commerce et les échanges',
      content: `**Handel og utveksling:**
| Fransk | Norsk |
|--------|-------|
| le commerce | handelen |
| l'importation / importer | import / å importere |
| l'exportation / exporter | eksport / å eksportere |
| la balance commerciale | handelsbalansen |
| le libre-échange | frihandel |
| les droits de douane | tollavgifter |
| le consommateur | forbrukeren |
| le fournisseur | leverandøren |
| le client | kunden |
| la concurrence | konkurransen |`,
    },
    {
      id: 'fransk-3-8-def-1',
      type: 'definition',
      title: 'Fransk næringsliv',
      content: `**Store franske selskaper (CAC 40):**
- **LVMH** - Verdens største luksuskonsern (Louis Vuitton, Dior, Moët)
- **TotalEnergies** - Energi
- **L'Oréal** - Kosmetikk
- **Airbus** - Luftfart
- **Renault / Peugeot** - Bilindustri
- **Carrefour** - Detaljhandel
- **BNP Paribas** - Bank

Frankrike er kjent for: luksusvarer, vin, mat, mote, luftfart, kjernekraft, turisme.`,
    },
    {
      id: 'fransk-3-8-text-4',
      type: 'text',
      title: 'Forretningskorrespondanse',
      content: `**Formelle uttrykk i forretningsbrev:**

**Åpning:**
- Madame, Monsieur, (Til hvem det måtte angå)
- Suite à votre demande... (I henhold til Deres forespørsel...)
- Nous avons le plaisir de... (Vi har gleden av å...)

**Hoveddel:**
- Nous vous informons que... (Vi informerer Dem om at...)
- Veuillez trouver ci-joint... (Vennligst finn vedlagt...)
- Nous souhaiterions... (Vi ønsker å...)

**Avslutning:**
- Dans l'attente de votre réponse... (I påvente av Deres svar...)
- Veuillez agréer, Madame, Monsieur, l'expression de mes salutations distinguées.
  (Formell avslutningshilsen)`,
    },
    {
      id: 'fransk-3-8-example-1',
      type: 'example',
      title: 'Eksempel på forretnings-e-post',
      content: `**Objet:** Demande de devis

Madame, Monsieur,

Suite à notre conversation téléphonique du 15 mars, je me permets de vous contacter afin de solliciter un devis pour vos services de traduction.

Notre entreprise a besoin de faire traduire un document de 50 pages du norvégien vers le français. Le délai souhaité serait de deux semaines.

Pourriez-vous nous faire parvenir une estimation des coûts ainsi que vos conditions de paiement?

Dans l'attente de votre réponse, je vous prie d'agréer, Madame, Monsieur, l'expression de mes salutations distinguées.

Marie Hansen
Directrice des communications`,
    },
    {
      id: 'fransk-3-8-tip-1',
      type: 'tip',
      content: `I fransk forretningskultur er formalitet viktig. Bruk alltid "vous", fulle titler, og formelle avslutninger i skriftlig kommunikasjon.`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-8-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "le chiffre d\'affaires"?',
      options: [
        { id: 'a', text: 'Fortjenesten', isCorrect: false, feedback: '"Fortjenesten" er "le bénéfice" eller "le profit".' },
        { id: 'b', text: 'Omsetningen', isCorrect: true },
        { id: 'c', text: 'Budsjettet', isCorrect: false, feedback: '"Budsjettet" er "le budget".' },
        { id: 'd', text: 'Gjelden', isCorrect: false, feedback: '"Gjelden" er "la dette".' },
      ],
      solution: '"Le chiffre d\'affaires" betyr omsetningen, altså total inntekt fra salg.',
    },
    {
      id: 'fransk-3-8-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva står "PIB" for?',
      options: [
        { id: 'a', text: 'Prix Intérieur de Base', isCorrect: false, feedback: 'Feil forkortelse.' },
        { id: 'b', text: 'Produit Intérieur Brut', isCorrect: true },
        { id: 'c', text: 'Production Industrielle de Base', isCorrect: false, feedback: 'Feil forkortelse.' },
        { id: 'd', text: 'Politique Internationale de Budget', isCorrect: false, feedback: 'Feil forkortelse.' },
      ],
      solution: 'PIB = Produit Intérieur Brut (BNP - Bruttonasjonalprodukt)',
    },
    {
      id: 'fransk-3-8-ex-3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr "une entreprise"?',
      options: [
        { id: 'a', text: 'En entreprenør', isCorrect: false, feedback: '"En entreprenør" er "un entrepreneur".' },
        { id: 'b', text: 'En bedrift', isCorrect: true },
        { id: 'c', text: 'Et prosjekt', isCorrect: false, feedback: '"Et prosjekt" er "un projet".' },
        { id: 'd', text: 'En innsats', isCorrect: false, feedback: '"En innsats" er "un effort".' },
      ],
      solution: '"Une entreprise" betyr en bedrift eller et firma.',
    },
    {
      id: 'fransk-3-8-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken avslutning er korrekt i et formelt forretningsbrev?',
      options: [
        { id: 'a', text: 'Bisous!', isCorrect: false, feedback: 'Dette er altfor uformelt for forretningskorrespondanse.' },
        { id: 'b', text: 'Veuillez agréer l\'expression de mes salutations distinguées.', isCorrect: true },
        { id: 'c', text: 'À bientôt!', isCorrect: false, feedback: 'Dette er for uformelt.' },
        { id: 'd', text: 'Cordialement,', isCorrect: false, feedback: 'Dette er akseptabelt for e-post, men ikke den mest formelle formen.' },
      ],
      solution: 'Den mest formelle avslutningen i forretningsbrev er "Veuillez agréer... salutations distinguées".',
    },
    {
      id: 'fransk-3-8-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva betyr "la concurrence"?',
      options: [
        { id: 'a', text: 'Samarbeid', isCorrect: false, feedback: '"Samarbeid" er "la coopération".' },
        { id: 'b', text: 'Konkurranse', isCorrect: true },
        { id: 'c', text: 'Konferanse', isCorrect: false, feedback: '"Konferanse" er "la conférence".' },
        { id: 'd', text: 'Konsentrasjon', isCorrect: false, feedback: '"Konsentrasjon" er "la concentration".' },
      ],
      solution: '"La concurrence" betyr konkurranse, for eksempel mellom bedrifter.',
    },
  ],
};

// ============================================================================
// Kapittel 9: Francophonie mondiale - Den fransktalende verden
// ============================================================================

export const CHAPTER_FRANSK_3_9: TextbookChapter = {
  id: 'fransk-3-9',
  courseId: 'fransk-3',
  chapterNumber: '9',
  title: 'Francophonie mondiale',
  description: 'Utforsk den fransktalende verden: geografi, kultur og variasjon.',
  estimatedMinutes: 70,
  competenceGoals: [
    'ha kunnskap om den fransktalende verden',
    'forstå språklig og kulturell variasjon',
    'reflektere over frankofoniens historie og betydning',
  ],
  content: [
    {
      id: 'fransk-3-9-intro',
      type: 'text',
      content: `Fransk snakkes av over 300 millioner mennesker på alle kontinenter. Frankofoni betegner ikke bare språket, men et kulturelt og politisk fellesskap. La oss utforske denne rike og mangfoldige verdenen.`,
    },
    {
      id: 'fransk-3-9-def-1',
      type: 'definition',
      title: 'La francophonie',
      content: `**Frankofoni** har to betydninger:
1. **francophonie** (liten f) - Det å snakke fransk; fransktalende personer og samfunn
2. **Francophonie** (stor F) - Det politiske og institusjonelle samarbeidet mellom fransktalende land

**L'Organisation internationale de la Francophonie (OIF)**
- 88 medlemsland og observatører
- Fremmer fransk språk og kultur
- Samarbeid om utdanning, demokrati og fred`,
    },
    {
      id: 'fransk-3-9-text-1',
      type: 'text',
      title: 'La géographie de la francophonie',
      content: `**Europa:**
- France, Belgique (Wallonie), Suisse (Romandie), Luxembourg, Monaco

**Amerika:**
- Canada (Québec, Nouveau-Brunswick)
- Haïti, Martinique, Guadeloupe, Guyane française

**Afrika:**
- Maghreb: Maroc, Algérie, Tunisie
- Afrique de l'Ouest: Sénégal, Côte d'Ivoire, Mali, Burkina Faso...
- Afrique centrale: République Démocratique du Congo, Cameroun...
- Océan Indien: Madagascar, Maurice, Comores

**Asia og Oseania:**
- Liban, Vietnam (historisk)
- Polynésie française, Nouvelle-Calédonie`,
    },
    {
      id: 'fransk-3-9-text-2',
      type: 'text',
      title: 'Variations linguistiques - Språklig variasjon',
      content: `**Le français québécois (Kanadisk fransk):**
| Québec | Standard | Norsk |
|--------|----------|-------|
| char | voiture | bil |
| blonde | petite amie | kjæreste |
| magasiner | faire du shopping | å shoppe |
| fin de semaine | week-end | helg |

**Le français africain:**
| Afrika | Standard | Norsk |
|--------|----------|-------|
| un essencier | une station-service | bensinstasjon |
| être fatigué de | avoir très envie de | ha veldig lyst til |
| un dibiterie | un grill | grillrestaurant |

**Le français belge:**
| Belgia | Standard | Norsk |
|--------|----------|-------|
| septante | soixante-dix | 70 |
| nonante | quatre-vingt-dix | 90 |
| une fois | (forsterkende ord) | (virkelig) |`,
    },
    {
      id: 'fransk-3-9-text-3',
      type: 'text',
      title: 'Histoire et héritage colonial',
      content: `Frankofonien er uløselig knyttet til kolonialhistorien. Det er viktig å reflektere over dette:

**Kolonisering:**
- Frankrike hadde et stort kolonirike i Afrika, Asia og Amerika
- Fransk ble innført som administrasjons- og skolespråk
- Lokal kultur og språk ble ofte undertrykt

**Avkolonisering (1950-60-tallet):**
- De fleste afrikanske land ble selvstendige
- Fransk forble ofte offisielt språk
- Komplisert forhold til det franske språket

**I dag:**
- Fransk er en ressurs for internasjonal kommunikasjon
- Debatt om "francophonie" vs. kulturell imperialisme
- Voksende bevissthet om afrikanske bidrag til fransk kultur`,
    },
    {
      id: 'fransk-3-9-example-1',
      type: 'example',
      title: 'Frankofone forfattere',
      content: `**Léopold Sédar Senghor (Senegal, 1906-2001)**
Poet og politiker, grunnlegger av négritude-bevegelsen.

**Aimé Césaire (Martinique, 1913-2008)**
Poet og politiker, sentral i négritude-bevegelsen.

**Tahar Ben Jelloun (Marokko, f. 1944)**
Romanforfatter, Prix Goncourt 1987 for *La Nuit sacrée*.

**Maryse Condé (Guadeloupe, 1934-2024)**
Romanforfatter, ofte nevnt i Nobel-sammenheng.

**Alain Mabanckou (Kongo, f. 1966)**
Forfatter og professor, Prix Renaudot 2006.`,
    },
    {
      id: 'fransk-3-9-tip-1',
      type: 'tip',
      content: `Frankofon litteratur og musikk er en utmerket måte å oppdage den fransktalende verdenens mangfold på. Prøv artister som Youssou N\'Dour (Senegal), Stromae (Belgia), eller Céline Dion (Québec)!`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-9-ex-1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor mange mennesker snakker fransk i verden?',
      options: [
        { id: 'a', text: 'Ca. 50 millioner', isCorrect: false, feedback: 'Det er mye flere enn det.' },
        { id: 'b', text: 'Ca. 150 millioner', isCorrect: false, feedback: 'Det er enda flere enn det.' },
        { id: 'c', text: 'Ca. 300 millioner', isCorrect: true },
        { id: 'd', text: 'Ca. 1 milliard', isCorrect: false, feedback: 'Det er ikke så mange, men antallet vokser.' },
      ],
      solution: 'Omtrent 300 millioner mennesker snakker fransk, inkludert morsmålsbrukere og andrespråksbrukere.',
    },
    {
      id: 'fransk-3-9-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva sier man for "70" på belgisk og sveitsisk fransk?',
      options: [
        { id: 'a', text: 'Soixante-dix', isCorrect: false, feedback: 'Dette er standardfransk.' },
        { id: 'b', text: 'Septante', isCorrect: true },
        { id: 'c', text: 'Soixante-onze', isCorrect: false, feedback: 'Dette er 71.' },
        { id: 'd', text: 'Sept-dix', isCorrect: false, feedback: 'Dette finnes ikke.' },
      ],
      solution: 'I Belgia og Sveits sier man "septante" for 70 og "nonante" for 90.',
    },
    {
      id: 'fransk-3-9-ex-3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er "OIF"?',
      options: [
        { id: 'a', text: 'Organisation Internationale de France', isCorrect: false, feedback: 'Nesten, men ikke helt.' },
        { id: 'b', text: 'Organisation Internationale de la Francophonie', isCorrect: true },
        { id: 'c', text: 'Office International du Français', isCorrect: false, feedback: 'Feil navn.' },
        { id: 'd', text: 'Organisation des Industries Françaises', isCorrect: false, feedback: 'Feil navn.' },
      ],
      solution: 'OIF = Organisation Internationale de la Francophonie, med 88 medlemsland.',
    },
    {
      id: 'fransk-3-9-ex-4',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hva betyr "négritude"?',
      options: [
        { id: 'a', text: 'En litterær bevegelse som feirer afrikansk kultur og identitet', isCorrect: true },
        { id: 'b', text: 'En politisk bevegelse for afrikansk uavhengighet', isCorrect: false, feedback: 'Det var primært en litterær/kulturell bevegelse.' },
        { id: 'c', text: 'En musikksjanger fra Karibia', isCorrect: false, feedback: 'Négritude er ikke en musikksjanger.' },
        { id: 'd', text: 'Et nedsettende begrep', isCorrect: false, feedback: 'Begrepet ble brukt positivt av bevegelsen selv.' },
      ],
      solution: 'Négritude var en litterær bevegelse grunnlagt av Senghor og Césaire som feiret afrikansk kultur og identitet.',
    },
    {
      id: 'fransk-3-9-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken fransktalende region er i Canada?',
      options: [
        { id: 'a', text: 'Ontario', isCorrect: false, feedback: 'Ontario er hovedsakelig engelsktalende.' },
        { id: 'b', text: 'Québec', isCorrect: true },
        { id: 'c', text: 'Alberta', isCorrect: false, feedback: 'Alberta er hovedsakelig engelsktalende.' },
        { id: 'd', text: 'British Columbia', isCorrect: false, feedback: 'BC er hovedsakelig engelsktalende.' },
      ],
      solution: 'Québec er den største fransktalende provinsen i Canada, med ca. 8 millioner innbyggere.',
    },
  ],
};

// ============================================================================
// Kapittel 10: Préparation à l'examen - Eksamensforberedelse
// ============================================================================

export const CHAPTER_FRANSK_3_10: TextbookChapter = {
  id: 'fransk-3-10',
  courseId: 'fransk-3',
  chapterNumber: '10',
  title: 'Préparation à l\'examen',
  description: 'Forbered deg til eksamen med strategier, øvelser og repetisjon.',
  estimatedMinutes: 90,
  competenceGoals: [
    'mestre eksamensformater og oppgavetyper',
    'utvikle effektive skrivestrategier',
    'repetere sentrale grammatiske og tematiske emner',
  ],
  content: [
    {
      id: 'fransk-3-10-intro',
      type: 'text',
      content: `Dette kapitlet hjelper deg med å forberede deg til eksamen i fransk nivå 3. Vi går gjennom oppgavetyper, skrivestrategier og viktige repetisjonspunkter.`,
    },
    {
      id: 'fransk-3-10-text-1',
      type: 'text',
      title: 'Oppgavetyper på eksamen',
      content: `**Typiske oppgavetyper:**

1. **Leseforståelse (Compréhension écrite)**
   - Lese tekster og svare på spørsmål
   - Sammenfatte innhold
   - Analysere argumentasjon

2. **Lytteforståelse (Compréhension orale)**
   - Lytte til opptak og svare på spørsmål
   - Notere hovedpunkter
   - Forstå ulike aksenter

3. **Skriftlig produksjon (Production écrite)**
   - Argumenterende tekst
   - Formelt brev / e-post
   - Sammendrag eller analyse

4. **Muntlig eksamen (Production orale)**
   - Presentasjon av forberedt emne
   - Samtale med sensor
   - Spontan respons på spørsmål`,
    },
    {
      id: 'fransk-3-10-def-1',
      type: 'definition',
      title: 'Vurderingskriterier',
      content: `**Språklig kompetanse:**
- Grammatisk korrekthet
- Vokabularrikdom og presisjon
- Idiomatisk språkbruk

**Kommunikativ kompetanse:**
- Tydelig struktur og sammenheng
- Relevant innhold
- Tilpasset form og register

**Interkulturell kompetanse:**
- Kunnskap om fransktalende land
- Kulturforståelse
- Evne til å reflektere over kulturelle forskjeller`,
    },
    {
      id: 'fransk-3-10-text-2',
      type: 'text',
      title: 'Skrivestrategier for eksamen',
      content: `**Før du skriver:**
1. Les oppgaven nøye - hva blir du bedt om?
2. Planlegg strukturen (innledning, hoveddel, avslutning)
3. Noter stikkord og ideer

**Mens du skriver:**
1. Følg en klar struktur
2. Bruk bindeord for sammenheng
3. Varier setningsstrukturen
4. Vis bredde i vokabular og grammatikk

**Etter du har skrevet:**
1. Les gjennom for grammatiske feil
2. Sjekk samsvar (kjønn, tall, tider)
3. Kontroller stavefeil (aksenter!)
4. Er svaret relevant for oppgaven?`,
    },
    {
      id: 'fransk-3-10-text-3',
      type: 'text',
      title: 'Viktige grammatiske punkter å repetere',
      content: `**Verbformer:**
- Alle tidsformer (présent, passé composé, imparfait, plus-que-parfait, futur)
- Subjonctif présent og passé
- Conditionnel présent og passé
- Passiv form

**Setningsstruktur:**
- Indirekte tale med tidsforskyvning
- Relativsetninger (qui, que, dont, où, lequel)
- Betingelsessetninger (si-setninger)

**Andre viktige emner:**
- Pronomen (direkte, indirekte, y, en)
- Adjektivbøyning og plassering
- Komparativ og superlativ
- Negasjoner (ne...pas, ne...jamais, ne...rien, etc.)`,
    },
    {
      id: 'fransk-3-10-example-1',
      type: 'example',
      title: 'Eksempel på argumenterende tekst',
      content: `**Oppgave:** Bør sosiale medier reguleres strengere?

**Introduction:**
Les réseaux sociaux occupent aujourd'hui une place centrale dans nos vies. Cependant, leur influence croissante soulève des questions importantes. Faut-il les réguler plus strictement?

**Développement:**
*D'une part*, les réseaux sociaux posent des problèmes réels. Premièrement, la désinformation se répand facilement. Deuxièmement, les données personnelles sont souvent exploitées. Enfin, l'impact sur la santé mentale des jeunes est préoccupant.

*D'autre part*, une régulation excessive présente des risques. Elle pourrait limiter la liberté d'expression et freiner l'innovation. De plus, il est difficile de définir ce qui devrait être censuré.

**Conclusion:**
En fin de compte, une régulation équilibrée semble nécessaire - protégeant les utilisateurs tout en préservant les libertés fondamentales. Cela nécessite un dialogue entre gouvernements, entreprises et citoyens.`,
    },
    {
      id: 'fransk-3-10-tip-1',
      type: 'tip',
      content: `På muntlig eksamen: Snakk tydelig, ta deg tid til å tenke, og be om oppklaring hvis du ikke forstår spørsmålet. Det er bedre å svare langsomt og korrekt enn raskt og feil!`,
    },
    {
      id: 'fransk-3-10-text-4',
      type: 'text',
      title: 'Nyttige uttrykk for eksamen',
      content: `**For å strukturere svaret:**
- Premièrement... Deuxièmement... Finalement...
- D'abord... Ensuite... Enfin...
- D'une part... D'autre part...

**For å gi eksempler:**
- Par exemple... / Notamment...
- Prenons le cas de...
- Cela se manifeste par...

**For å uttrykke mening:**
- À mon avis... / Selon moi...
- Je suis convaincu(e) que...
- Il me semble que...

**For å oppsummere:**
- En résumé... / Pour conclure...
- Tout compte fait...
- En définitive...`,
    },
  ],
  exercises: [
    {
      id: 'fransk-3-10-ex-1',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er viktig å gjøre FØR du begynner å skrive på eksamen?',
      options: [
        { id: 'a', text: 'Begynne å skrive med en gang for å spare tid', isCorrect: false, feedback: 'Planlegging er viktig for et godt resultat.' },
        { id: 'b', text: 'Lese oppgaven nøye og planlegge strukturen', isCorrect: true },
        { id: 'c', text: 'Skrive så mye som mulig uansett relevans', isCorrect: false, feedback: 'Kvalitet er viktigere enn kvantitet.' },
        { id: 'd', text: 'Kopiere setninger fra oppgaveteksten', isCorrect: false, feedback: 'Du bør formulere egne setninger.' },
      ],
      solution: 'God planlegging sikrer at svaret er strukturert, relevant og sammenhengende.',
    },
    {
      id: 'fransk-3-10-ex-2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken struktur passer best for en argumenterende tekst?',
      options: [
        { id: 'a', text: 'Bare argumenter for ett synspunkt', isCorrect: false, feedback: 'En god argumenterende tekst viser flere sider.' },
        { id: 'b', text: 'Introduction, développement (thèse/antithèse), conclusion', isCorrect: true },
        { id: 'c', text: 'Kronologisk fortelling', isCorrect: false, feedback: 'Det passer bedre for narrativ tekst.' },
        { id: 'd', text: 'Bare stikkord og punktliste', isCorrect: false, feedback: 'En tekst krever sammenhengende avsnitt.' },
      ],
      solution: 'Den klassiske franske strukturen med innledning, hoveddel (med ulike synspunkter) og konklusjon.',
    },
    {
      id: 'fransk-3-10-ex-3',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Hvilken si-setning er korrekt?',
      options: [
        { id: 'a', text: 'Si j\'aurais su, je serais venu.', isCorrect: false, feedback: 'Etter "si" bruker man ikke conditionnel.' },
        { id: 'b', text: 'Si j\'avais su, je serais venu.', isCorrect: true },
        { id: 'c', text: 'Si j\'ai su, je serais venu.', isCorrect: false, feedback: 'Passé composé etter "si" gir ikke denne betydningen.' },
        { id: 'd', text: 'Si je savais, je serai venu.', isCorrect: false, feedback: 'Feil kombinasjon av tidsformer.' },
      ],
      solution: 'For hypotetisk fortid: Si + plus-que-parfait, + conditionnel passé.',
    },
    {
      id: 'fransk-3-10-ex-4',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvordan sier du "For å oppsummere" på fransk?',
      options: [
        { id: 'a', text: 'Pour commencer', isCorrect: false, feedback: 'Dette betyr "For å begynne".' },
        { id: 'b', text: 'En résumé', isCorrect: true },
        { id: 'c', text: 'Par contre', isCorrect: false, feedback: 'Dette betyr "Derimot".' },
        { id: 'd', text: 'D\'ailleurs', isCorrect: false, feedback: 'Dette betyr "Dessuten" / "For øvrig".' },
      ],
      solution: '"En résumé" eller "Pour résumer" brukes for å oppsummere.',
    },
    {
      id: 'fransk-3-10-ex-5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva bør du IKKE gjøre på muntlig eksamen?',
      options: [
        { id: 'a', text: 'Be om å få spørsmålet gjentatt hvis du ikke forstår', isCorrect: false, feedback: 'Det er helt greit å be om oppklaring.' },
        { id: 'b', text: 'Ta deg tid til å tenke før du svarer', isCorrect: false, feedback: 'Det er lurt å tenke før du snakker.' },
        { id: 'c', text: 'Snakke så fort som mulig for å vise flyt', isCorrect: true },
        { id: 'd', text: 'Bruke eksempler for å illustrere poengene dine', isCorrect: false, feedback: 'Eksempler er positivt!' },
      ],
      solution: 'Å snakke for fort fører ofte til feil. Det er bedre å snakke klart og tydelig i et naturlig tempo.',
    },
    {
      id: 'fransk-3-10-ex-6',
      type: 'multiple-choice',
      difficulty: 'vanskelig',
      task: 'Velg riktig relativpronomen: "C\'est le livre _____ je t\'ai parlé."',
      options: [
        { id: 'a', text: 'que', isCorrect: false, feedback: '"Que" er direkte objekt.' },
        { id: 'b', text: 'dont', isCorrect: true },
        { id: 'c', text: 'qui', isCorrect: false, feedback: '"Qui" er subjekt.' },
        { id: 'd', text: 'où', isCorrect: false, feedback: '"Où" brukes om sted eller tid.' },
      ],
      solution: '"Parler de" krever "dont" som relativpronomen: "le livre dont je t\'ai parlé".',
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FRANSK_3_1,
  CHAPTER_FRANSK_3_2,
  CHAPTER_FRANSK_3_3,
  CHAPTER_FRANSK_3_4,
  CHAPTER_FRANSK_3_5,
  CHAPTER_FRANSK_3_6,
  CHAPTER_FRANSK_3_7,
  CHAPTER_FRANSK_3_8,
  CHAPTER_FRANSK_3_9,
  CHAPTER_FRANSK_3_10,
];
