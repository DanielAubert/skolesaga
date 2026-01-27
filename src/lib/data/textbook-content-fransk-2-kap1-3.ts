/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivaa 2 - Kapittel 1-3 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 1: Fortidsformer (1.1-1.4)
 * - Kapittel 2: Futur og Kondisjonalis (2.1-2.4)
 * - Kapittel 3: Pronomen (3.1-3.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: FORTIDSFORMER (LES TEMPS DU PASSE)
// ============================================================================

// ----------------------------------------------------------------------------
// 1.1 Le passe compose - Perfektum (sammensatt fortid)
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_1_1: TextbookChapter = {
  id: 'fransk-2-1-1',
  courseId: 'fransk-2',
  chapterNumber: '1.1',
  title: 'Le passé composé - Perfektum',
  description: 'Laer aa danne og bruke passé composé med avoir og être, inkludert uregelrette partisipper og samsvarsboyning.',
  estimatedMinutes: 45,
  competenceGoals: [
    'danne passé composé med bade avoir og être',
    'bruke uregelrette partisipper korrekt',
    'beherske samsvarsboyning med être-verb',
  ],
  content: [
    {
      id: 'fransk-2-1-1-intro',
      type: 'text',
      content: `## Le passé composé - Sammensatt fortid

Le passé composé er den vanligste fortidsformen i muntlig og uformelt skriftlig fransk. Den brukes for aa uttrykke handlinger som er avsluttet i fortiden.

**Dannelse:** hjelpeverb (avoir eller être) i presens + partisipp (le participe passé)

| Type | Formel | Eksempel |
|------|--------|----------|
| Med avoir | avoir (presens) + partisipp | J'ai mangé (Jeg har spist) |
| Med être | être (presens) + partisipp | Je suis allé(e) (Jeg har gaatt) |`,
    },
    {
      id: 'fransk-2-1-1-def-1',
      type: 'definition',
      content: `**Regelrette partisipper:**

| Gruppe | Infinitiv-ending | Partisipp-ending | Eksempel |
|--------|-----------------|------------------|----------|
| 1. gruppe | -er | -é | parler → parlé |
| 2. gruppe | -ir | -i | finir → fini |
| 3. gruppe | -re | -u | vendre → vendu |

**Viktige uregelrette partisipper:**

| Infinitiv | Partisipp | Norsk |
|-----------|-----------|-------|
| avoir | eu | hatt |
| être | été | vaert |
| faire | fait | gjort |
| dire | dit | sagt |
| écrire | écrit | skrevet |
| prendre | pris | tatt |
| mettre | mis | lagt/satt |
| voir | vu | sett |
| lire | lu | lest |
| boire | bu | drukket |
| connaître | connu | kjent |
| pouvoir | pu | kunnet |
| vouloir | voulu | villet |
| devoir | dû | maattet |
| savoir | su | visst |
| ouvrir | ouvert | aapnet |`,
    },
    {
      id: 'fransk-2-1-1-text-1',
      type: 'text',
      content: `## Être-verb (bevegelsesverb og refleksive verb)

Noen verb bruker **être** som hjelpeverb. Husk akronymet **DR. & MRS. VANDERTRAMP**:

| Verb | Partisipp | Norsk |
|------|-----------|-------|
| Devenir | devenu | bli |
| Revenir | revenu | komme tilbake |
| Monter | monté | gaa opp |
| Rester | resté | bli (vaere igjen) |
| Sortir | sorti | gaa ut |
| Venir | venu | komme |
| Aller | allé | gaa |
| Naître | né | bli fodt |
| Descendre | descendu | gaa ned |
| Entrer | entré | gaa inn |
| Retourner | retourné | dra tilbake |
| Tomber | tombé | falle |
| Rentrer | rentré | komme hjem |
| Arriver | arrivé | ankomme |
| Mourir | mort | doe |
| Partir | parti | dra |

**Samsvarsboyning med être:**
Partisippet maa samsvarsboeyes med subjektet i kjoenn og tall:
- Il est allé (han har gaatt)
- Elle est allée (hun har gaatt)
- Ils sont allés (de har gaatt - hankjoenn)
- Elles sont allées (de har gaatt - hunkjoenn)`,
    },
    {
      id: 'fransk-2-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Passé composé med avoir',
      problem: `Sett verbene i passé composé:

a) Je (manger) une pizza.
b) Nous (faire) nos devoirs.
c) Tu (voir) ce film?
d) Elles (prendre) le bus.`,
      solution: `**Loesning:**

a) **J'ai mangé** une pizza. (manger → mangé, regelrett)
b) **Nous avons fait** nos devoirs. (faire → fait, uregelrett)
c) **Tu as vu** ce film? (voir → vu, uregelrett)
d) **Elles ont pris** le bus. (prendre → pris, uregelrett)`,
    },
    {
      id: 'fransk-2-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Passé composé med être',
      problem: `Sett verbene i passé composé. Husk samsvarsboyning!

a) Marie (aller) au cinéma.
b) Les garçons (partir) tôt.
c) Nous (arriver) à l'heure. (vi = jenter)
d) Pierre et Marie (venir) hier.`,
      solution: `**Loesning:**

a) Marie **est allée** au cinéma. (hunkjoenn → -ée)
b) Les garçons **sont partis** tôt. (hankjoenn flertall → -is)
c) Nous **sommes arrivées** à l'heure. (hunkjoenn flertall → -ées)
d) Pierre et Marie **sont venus** hier. (blandet kjoenn → hankjoenn flertall -us)`,
    },
    {
      id: 'fransk-2-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig hjelpeverb (avoir eller être) og skriv partisippet:',
        subTasks: [
          { label: 'a', task: 'Elle ___ (partir) ce matin.', solution: 'Elle est partie ce matin. (être + samsvarsboyning hunkjoenn)' },
          { label: 'b', task: 'Nous ___ (manger) au restaurant.', solution: 'Nous avons mangé au restaurant. (avoir, ingen samsvarsboyning)' },
          { label: 'c', task: 'Ils ___ (descendre) les escaliers.', solution: 'Ils sont descendus les escaliers. (être + samsvarsboyning hankjoenn flertall)' },
          { label: 'd', task: 'J\' ___ (écrire) une lettre.', solution: 'J\'ai écrit une lettre. (avoir, uregelrett partisipp)' },
        ],
        solution: 'a) est partie, b) avons mangé, c) sont descendus, d) ai écrit',
        hints: ['Bevegelsesverb bruker être', 'Samsvarsboyning kun med être-verb'],
      },
    },
    {
      id: 'fransk-2-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med passé composé:',
        subTasks: [
          { label: 'a', task: 'Jeg har sett en film.', solution: 'J\'ai vu un film.' },
          { label: 'b', task: 'Hun har kommet hjem.', solution: 'Elle est rentrée.' },
          { label: 'c', task: 'Vi har gjort leksene vaare.', solution: 'Nous avons fait nos devoirs.' },
          { label: 'd', task: 'De (jenter) har gaatt ut.', solution: 'Elles sont sorties.' },
        ],
        solution: 'a) J\'ai vu un film. b) Elle est rentrée. c) Nous avons fait nos devoirs. d) Elles sont sorties.',
        hints: ['voir → vu', 'rentrer bruker être', 'faire → fait'],
      },
    },
    {
      id: 'fransk-2-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om setningene til passé composé:',
        subTasks: [
          { label: 'a', task: 'Je lis un livre. →', solution: 'J\'ai lu un livre.' },
          { label: 'b', task: 'Elle prend le métro. →', solution: 'Elle a pris le métro.' },
          { label: 'c', task: 'Nous allons au parc. →', solution: 'Nous sommes allé(e)s au parc.' },
          { label: 'd', task: 'Ils boivent du café. →', solution: 'Ils ont bu du café.' },
        ],
        solution: 'a) J\'ai lu, b) Elle a pris, c) Nous sommes allé(e)s, d) Ils ont bu',
        hints: ['lire → lu', 'prendre → pris', 'aller bruker être', 'boire → bu'],
      },
    },
    {
      id: 'fransk-2-1-1-tip-1',
      type: 'tip',
      content: `**Tips for aa huske être-verbene:**

1. Lag en historie med DR. & MRS. VANDERTRAMP som hjelper deg aa huske alle être-verbene
2. Husk: ALLE refleksive verb bruker ogsaa être (je me suis levé(e), elle s'est habillée)
3. Noen verb kan bruke bade avoir og être, men med ulik betydning:
   - Il a monté la valise (Han bar kofferten opp) - avoir = transitiv
   - Il est monté (Han gikk opp) - être = intransitiv`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.2 L'imparfait - Imperfektum
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_1_2: TextbookChapter = {
  id: 'fransk-2-1-2',
  courseId: 'fransk-2',
  chapterNumber: '1.2',
  title: 'L\'imparfait - Imperfektum',
  description: 'Laer aa boye og bruke imparfait for beskrivelser, vaner og bakgrunnshandlinger i fortiden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'boye verb korrekt i imparfait',
    'bruke imparfait for beskrivelser og vaner i fortiden',
    'kjenne til signalord som utloeser imparfait',
  ],
  content: [
    {
      id: 'fransk-2-1-2-intro',
      type: 'text',
      content: `## L'imparfait - Imperfektum

L'imparfait brukes for aa beskrive:
- **Bakgrunn og beskrivelser** i fortiden (vaeret, foelelser, utseende)
- **Gjentatte vaner** i fortiden (noe man pleide aa gjoere)
- **Paagende handlinger** som ble avbrutt

**Dannelse:** Ta nous-formen i presens, fjern -ons, legg til imparfait-endingene.`,
    },
    {
      id: 'fransk-2-1-2-def-1',
      type: 'definition',
      content: `**Imparfait-endinger:**

| Pronom | Ending | Parler (nous parlons → parl-) |
|--------|--------|-------------------------------|
| je | -ais | je parlais |
| tu | -ais | tu parlais |
| il/elle | -ait | il parlait |
| nous | -ions | nous parlions |
| vous | -iez | vous parliez |
| ils/elles | -aient | ils parlaient |

**Kun ETT verb er uregelrett i imparfait:** être → j'étais, tu étais, il était, nous étions, vous étiez, ils étaient

**Andre eksempler:**
| Infinitiv | Nous-form presens | Stamme | Imparfait (je) |
|-----------|-------------------|--------|----------------|
| finir | nous finissons | finiss- | je finissais |
| faire | nous faisons | fais- | je faisais |
| prendre | nous prenons | pren- | je prenais |
| avoir | nous avons | av- | j'avais |
| boire | nous buvons | buv- | je buvais |`,
    },
    {
      id: 'fransk-2-1-2-text-1',
      type: 'text',
      content: `## Bruksomraader for imparfait

**1. Beskrivelser i fortiden:**
- *Il faisait beau.* (Det var fint vaer.)
- *Elle était fatiguée.* (Hun var trott.)
- *La maison était grande.* (Huset var stort.)

**2. Gjentatte vaner (pleide aa):**
- *Quand j'étais petit, je jouais au foot.* (Da jeg var liten, pleide jeg aa spille fotball.)
- *Chaque été, nous allions à la mer.* (Hver sommer dro vi til sjoen.)

**3. Paagende handlinger (bakgrunn):**
- *Je dormais quand le téléphone a sonné.* (Jeg sov da telefonen ringte.)

**Signalord for imparfait:**

| Fransk | Norsk |
|--------|-------|
| quand j'étais petit(e) | da jeg var liten |
| autrefois | i gamle dager |
| chaque jour/semaine/été | hver dag/uke/sommer |
| d'habitude | vanligvis |
| souvent | ofte |
| toujours | alltid |
| tous les jours | hver dag |`,
    },
    {
      id: 'fransk-2-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Boyning i imparfait',
      problem: `Boey verbene i imparfait:

a) Nous (avoir) un chien.
b) Tu (faire) du sport chaque jour.
c) Elles (être) contentes.
d) Je (prendre) le bus tous les matins.`,
      solution: `**Loesning:**

a) Nous **avions** un chien. (avoir: nous avons → av- → avions)
b) Tu **faisais** du sport chaque jour. (faire: nous faisons → fais- → faisais)
c) Elles **étaient** contentes. (être: uregelrett → étaient)
d) Je **prenais** le bus tous les matins. (prendre: nous prenons → pren- → prenais)`,
    },
    {
      id: 'fransk-2-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sett verbene i imparfait:',
        subTasks: [
          { label: 'a', task: 'Je (manger) des céréales le matin.', solution: 'Je mangeais des céréales le matin.' },
          { label: 'b', task: 'Il (pleuvoir) souvent.', solution: 'Il pleuvait souvent.' },
          { label: 'c', task: 'Vous (habiter) à Paris.', solution: 'Vous habitiez à Paris.' },
          { label: 'd', task: 'Nous (aller) à l\'école à pied.', solution: 'Nous allions à l\'école à pied.' },
        ],
        solution: 'a) mangeais, b) pleuvait, c) habitiez, d) allions',
        hints: ['Finn nous-formen i presens', 'Fjern -ons og legg til imparfait-endingene'],
      },
    },
    {
      id: 'fransk-2-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med imparfait:',
        subTasks: [
          { label: 'a', task: 'Da jeg var liten, spiste jeg alltid frokost.', solution: 'Quand j\'étais petit(e), je mangeais toujours le petit déjeuner.' },
          { label: 'b', task: 'Det var kaldt og det regnet.', solution: 'Il faisait froid et il pleuvait.' },
          { label: 'c', task: 'Vi pleide aa reise til Frankrike hver sommer.', solution: 'Nous allions en France chaque été.' },
        ],
        solution: 'a) Quand j\'étais petit(e)... b) Il faisait froid... c) Nous allions en France...',
        hints: ['Da jeg var liten = Quand j\'étais petit(e)', 'Vaer = faire (il faisait froid)'],
      },
    },
    {
      id: 'fransk-2-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv barndomslivet ditt paa fransk med imparfait. Bruk minst 4 verb:',
        subTasks: [
          { label: 'a', task: 'Hvor bodde du?', solution: 'J\'habitais à...' },
          { label: 'b', task: 'Hva pleide du aa gjoere etter skolen?', solution: 'Après l\'école, je jouais / je faisais...' },
          { label: 'c', task: 'Hva likte du?', solution: 'J\'aimais... / J\'adorais...' },
        ],
        solution: 'Eksempel: "Quand j\'étais petit(e), j\'habitais à Oslo. Après l\'école, je jouais avec mes amis. J\'aimais le football et j\'adorais les glaces."',
        hints: ['habiter = bo', 'jouer = leke/spille', 'aimer = like', 'adorer = elske'],
      },
    },
    {
      id: 'fransk-2-1-2-tip-1',
      type: 'tip',
      content: `**Tips for imparfait:**

1. Tenk paa imparfait som en "bakgrunn" - det beskriver scenen
2. Husk: imparfait har INGEN tidsavgrensning - handlingen var paagende
3. Signalord som "chaque", "toujours", "d'habitude" peker mot imparfait
4. Det er bare ETT uregelrett verb: être (j'étais)
5. Verbet "manger" faar en ekstra -e i vi-formen: nous mangions (for aa beholde uttalen)`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.3 Passe compose vs. imparfait
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_1_3: TextbookChapter = {
  id: 'fransk-2-1-3',
  courseId: 'fransk-2',
  chapterNumber: '1.3',
  title: 'Passé composé vs. imparfait',
  description: 'Laer aa skille mellom passé composé og imparfait og bruke dem riktig i sammenheng.',
  estimatedMinutes: 45,
  competenceGoals: [
    'velge riktig fortidsform basert paa kontekst',
    'bruke begge fortidsformene sammen i en tekst',
    'kjenne signalordene for hver tid',
  ],
  content: [
    {
      id: 'fransk-2-1-3-intro',
      type: 'text',
      content: `## Passé composé vs. imparfait - Naar bruker man hva?

Dette er et av de vanskeligste temaene i fransk grammatikk. De to fortidsformene har ulike funksjoner:

| Passé composé | Imparfait |
|---------------|-----------|
| Avsluttet, punktuell handling | Paagende, ubegrenset handling |
| "Hva skjedde?" | "Hvordan var det?" |
| Forgrunn / hovedhandling | Bakgrunn / scene |
| En gang / bestemt antall | Gjentatt / vane |
| Plutselig endring | Tilstand |`,
    },
    {
      id: 'fransk-2-1-3-def-1',
      type: 'definition',
      content: `**Signalord:**

**Passé composé:**
| Fransk | Norsk |
|--------|-------|
| hier | i gaar |
| la semaine dernière | forrige uke |
| soudain / tout à coup | plutselig |
| un jour | en dag |
| d'abord... puis... ensuite | foerst... saa... deretter |
| à ce moment-là | i det oeyeblikket |

**Imparfait:**
| Fransk | Norsk |
|--------|-------|
| chaque jour | hver dag |
| d'habitude | vanligvis |
| souvent | ofte |
| toujours | alltid |
| quand j'étais petit(e) | da jeg var liten |
| il faisait... | det var (vaer) |`,
    },
    {
      id: 'fransk-2-1-3-text-1',
      type: 'text',
      content: `## Forgrunn og bakgrunn

Tenk paa det som en film:
- **Imparfait** = kulissene, scenebeskrivelsen, musikken
- **Passé composé** = handlingen, det som skjer

**Eksempel:**
*Il faisait beau* (bakgrunn/imparfait), *les oiseaux chantaient* (bakgrunn/imparfait), *quand soudain, un orage a éclaté* (handling/passé composé).

(Det var fint vaer, fuglene sang, da plutselig et tordenvaer broeyt loess.)

**Avbrytning:**
Imparfait beskriver den paagende handlingen, passé composé den avbrytende:
- *Je dormais* (imparfait) *quand le téléphone a sonné* (passé composé).
- (Jeg sov da telefonen ringte.)`,
    },
    {
      id: 'fransk-2-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Velg riktig tid',
      problem: `Velg passé composé eller imparfait:

a) Quand je (être) petit, je (jouer) au foot.
b) Hier, je (aller) au cinéma.
c) Il (pleuvoir) quand nous (sortir).
d) Chaque été, nous (partir) en vacances.`,
      solution: `**Loesning:**

a) Quand **j'étais** petit, je **jouais** au foot. (begge imparfait - tilstand + vane)
b) Hier, **je suis allé(e)** au cinéma. (passé composé - punktuell handling)
c) **Il pleuvait** quand nous **sommes sorti(e)s**. (imparfait = bakgrunn, passé composé = handling)
d) Chaque été, nous **partions** en vacances. (imparfait - gjentatt handling)`,
    },
    {
      id: 'fransk-2-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Fortelling med begge tider',
      problem: `Fyll inn riktig form (passé composé eller imparfait):

C'(être) ___ un dimanche matin. Le soleil (briller) ___ et les oiseaux (chanter) ___. Marie (décider) ___ d'aller au parc. Elle (mettre) ___ sa robe et (sortir) ___.`,
      solution: `**Loesning:**

C'**était** un dimanche matin. Le soleil **brillait** et les oiseaux **chantaient**. Marie **a décidé** d'aller au parc. Elle **a mis** sa robe et **est sortie**.

- était, brillait, chantaient = imparfait (bakgrunn, beskrivelse)
- a décidé, a mis, est sortie = passé composé (handlinger som driver fortellingen fremover)`,
    },
    {
      id: 'fransk-2-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg passé composé (PC) eller imparfait (IMP) og begrunn:',
        subTasks: [
          { label: 'a', task: 'Je (lire) quand il (arriver).', solution: 'Je lisais (IMP - paagende) quand il est arrivé (PC - avbrytelse).' },
          { label: 'b', task: 'Tous les matins, elle (prendre) le bus.', solution: 'Tous les matins, elle prenait le bus. (IMP - vane/gjentakelse)' },
          { label: 'c', task: 'Soudain, il (commencer) à pleuvoir.', solution: 'Soudain, il a commencé à pleuvoir. (PC - plutselig handling)' },
          { label: 'd', task: 'Quand j\' (être) jeune, j\' (habiter) à Lyon.', solution: 'Quand j\'étais jeune, j\'habitais à Lyon. (begge IMP - tilstand + tilstand)' },
        ],
        solution: 'a) lisais/est arrivé, b) prenait, c) a commencé, d) étais/habitais',
        hints: ['Paagende handling = imparfait', 'Plutselig hendelse = passé composé', 'Vane = imparfait'],
      },
    },
    {
      id: 'fransk-2-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med riktig fortidsform:',
        subTasks: [
          { label: 'a', task: 'Det regnet da vi kom hjem.', solution: 'Il pleuvait quand nous sommes rentré(e)s.' },
          { label: 'b', task: 'Hver dag spiste han frokost klokken 7.', solution: 'Chaque jour, il prenait le petit déjeuner à sept heures.' },
          { label: 'c', task: 'Plutselig saa vi en bjorn!', solution: 'Soudain, nous avons vu un ours !' },
        ],
        solution: 'a) pleuvait/sommes rentré(e)s, b) prenait, c) avons vu',
        hints: ['Regnet = bakgrunn (imparfait)', 'Hver dag = vane (imparfait)', 'Plutselig = punktuell (passé composé)'],
      },
    },
    {
      id: 'fransk-2-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort fortelling (5-6 setninger) om en ferie. Bruk bade passé composé og imparfait:',
        subTasks: [
          { label: 'a', task: 'Beskriv vaeret og stedet (imparfait)', solution: 'Il faisait chaud et le ciel était bleu. La mer était calme et magnifique.' },
          { label: 'b', task: 'Fortell hva som skjedde (passé composé)', solution: 'Un jour, nous avons visité un vieux château. Nous avons pris beaucoup de photos.' },
          { label: 'c', task: 'Kombiner begge i en setning', solution: 'Je nageais dans la mer quand j\'ai vu un dauphin. (Jeg svoemte i havet da jeg saa en delfin.)' },
        ],
        solution: 'Eksempel: "L\'été dernier, nous sommes allés en France. Il faisait très chaud et le ciel était bleu. Un jour, nous avons visité un vieux château. C\'était magnifique. Je nageais dans la mer quand j\'ai vu un dauphin."',
        hints: ['Beskrivelser = imparfait', 'Hendelser = passé composé', 'Bruk begge formene for aa lage en god fortelling'],
      },
    },
    {
      id: 'fransk-2-1-3-tip-1',
      type: 'tip',
      content: `**Huske-regel:**

Tenk paa en teaterscene:
- **Imparfait** = kulissene, belysningen, kostymer (det som "bare var der")
- **Passé composé** = replikkene og handlingene (det som "skjedde")

Naar begge tidene brukes i samme setning, er det typisk:
- Imparfait for den paagende handlingen
- Passé composé for avbrytelsen

*Je mangeais (paagende) quand il est arrivé (avbrytelse).*`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.4 Le plus-que-parfait - Pluskvamperfektum
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_1_4: TextbookChapter = {
  id: 'fransk-2-1-4',
  courseId: 'fransk-2',
  chapterNumber: '1.4',
  title: 'Le plus-que-parfait - Pluskvamperfektum',
  description: 'Laer aa danne og bruke pluskvamperfektum for handlinger som skjedde foer en annen fortidshandling.',
  estimatedMinutes: 45,
  competenceGoals: [
    'danne plus-que-parfait korrekt',
    'bruke plus-que-parfait for foertidig handling',
    'forstaa tidsrelasjoner mellom flere fortidshandlinger',
  ],
  content: [
    {
      id: 'fransk-2-1-4-intro',
      type: 'text',
      content: `## Le plus-que-parfait - "Fortid i fortiden"

Plus-que-parfait uttrykker en handling som skjedde FOER en annen fortidshandling. Det tilsvarer norsk "hadde gjort".

**Dannelse:** avoir/être i **imparfait** + partisipp

| Med avoir | Med être |
|-----------|---------|
| j'avais mangé | j'étais allé(e) |
| tu avais mangé | tu étais allé(e) |
| il avait mangé | il était allé |
| nous avions mangé | nous étions allé(e)s |
| vous aviez mangé | vous étiez allé(e)(s) |
| ils avaient mangé | ils étaient allés |`,
    },
    {
      id: 'fransk-2-1-4-def-1',
      type: 'definition',
      content: `**Tidslinje med tre fortidsformer:**

Plus-que-parfait → Passé composé/Imparfait → Presens
(hadde gjort)      (gjorde/var)               (gjoer)

**Eksempel:**
1. D'abord, il **avait plu**. (Foerst hadde det regnet.) - TIDLIGST
2. Quand je **suis sorti(e)**, la rue **était** mouillée. (Da jeg gikk ut, var gaten vaat.) - ETTER
3. Maintenant, il **fait** beau. (Naa er det fint vaer.) - NAA

**Noekkelprinspipp:** Plus-que-parfait brukes naar man refererer tilbake fra et annet fortidspunkt.`,
    },
    {
      id: 'fransk-2-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Plus-que-parfait i kontekst',
      problem: `Oversett til fransk. Bruk plus-que-parfait for den eldste handlingen:

a) Jeg hadde allerede spist da hun kom.
b) De hadde reist til Paris foer de besoeerte Lyon.
c) Han var trott fordi han hadde jobbet hele dagen.`,
      solution: `**Loesning:**

a) **J'avais déjà mangé** quand elle est arrivée.
(avais mangé = plus-que-parfait, est arrivée = passé composé)

b) Ils **étaient allés** à Paris avant de visiter Lyon.
(étaient allés = plus-que-parfait)

c) Il **était** fatigué parce qu'il **avait travaillé** toute la journée.
(était = imparfait for tilstand, avait travaillé = plus-que-parfait for aarsak)`,
    },
    {
      id: 'fransk-2-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i plus-que-parfait:',
        subTasks: [
          { label: 'a', task: 'Elle (finir) ses devoirs avant le dîner.', solution: 'Elle avait fini ses devoirs avant le dîner.' },
          { label: 'b', task: 'Nous (partir) quand il a commencé à pleuvoir.', solution: 'Nous étions parti(e)s quand il a commencé à pleuvoir.' },
          { label: 'c', task: 'Tu (voir) ce film avant?', solution: 'Tu avais vu ce film avant?' },
          { label: 'd', task: 'Ils (ne pas manger) depuis le matin.', solution: 'Ils n\'avaient pas mangé depuis le matin.' },
        ],
        solution: 'a) avait fini, b) étions parti(e)s, c) avais vu, d) n\'avaient pas mangé',
        hints: ['avoir/être i imparfait + partisipp', 'Bevegelsesverb bruker être ogsaa i plus-que-parfait'],
      },
    },
    {
      id: 'fransk-2-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kombiner to setninger med plus-que-parfait og passé composé:',
        subTasks: [
          { label: 'a', task: '1) Il a mangé. 2) Il est sorti. (foerst 1, saa 2)', solution: 'Il avait mangé avant de sortir. / Il est sorti après qu\'il avait mangé.' },
          { label: 'b', task: '1) Elle a étudié. 2) Elle a réussi l\'examen. (foerst 1, saa 2)', solution: 'Elle avait étudié, donc elle a réussi l\'examen.' },
          { label: 'c', task: '1) Nous avons acheté les billets. 2) Nous sommes allés au concert. (foerst 1, saa 2)', solution: 'Nous avions acheté les billets avant d\'aller au concert.' },
        ],
        solution: 'a) avait mangé... est sorti, b) avait étudié... a réussi, c) avions acheté... sommes allés',
        hints: ['Den foerste handlingen faar plus-que-parfait', 'Den andre handlingen faar passé composé'],
      },
    },
    {
      id: 'fransk-2-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med riktige fortidsformer:',
        subTasks: [
          { label: 'a', task: 'Toget hadde allerede gaatt da vi kom til stasjonen.', solution: 'Le train était déjà parti quand nous sommes arrivé(e)s à la gare.' },
          { label: 'b', task: 'Hun fortalte meg at hun hadde bodd i Frankrike.', solution: 'Elle m\'a dit qu\'elle avait habité en France.' },
          { label: 'c', task: 'De var sultne fordi de ikke hadde spist frokost.', solution: 'Ils avaient faim parce qu\'ils n\'avaient pas pris le petit déjeuner.' },
        ],
        solution: 'a) était parti... sommes arrivé(e)s, b) a dit... avait habité, c) avaient faim... n\'avaient pas pris',
        hints: ['hadde gaatt = était parti (être-verb)', 'hadde bodd = avait habité'],
      },
    },
    {
      id: 'fransk-2-1-4-note-1',
      type: 'note',
      content: `**Oppsummering av kapittel 1 - Fortidsformene:**

| Tid | Dannelse | Bruk | Eksempel |
|-----|----------|------|----------|
| **Passé composé** | avoir/être (presens) + partisipp | Avsluttet handling | J'ai mangé |
| **Imparfait** | nous-stamme + -ais/-ait/-ions/-iez/-aient | Beskrivelse, vane, bakgrunn | Je mangeais |
| **Plus-que-parfait** | avoir/être (imparfait) + partisipp | Handling foer annen fortidshandling | J'avais mangé |

Oev paa aa bruke alle tre sammen i fortellinger!`,
    },
    {
      id: 'fransk-2-1-4-tip-1',
      type: 'tip',
      content: `**Tips for plus-que-parfait:**

1. Tenk alltid: "Skjedde dette FOER noe annet i fortiden?" → plus-que-parfait
2. Samme regler for avoir/être og samsvarsboyning som i passé composé
3. Vanlige signalord: déjà (allerede), avant (foer), quand (da), parce que (fordi)
4. I indirekte tale: passé composé → plus-que-parfait (Il a dit: "J'ai mangé" → Il a dit qu'il avait mangé)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: FUTUR OG KONDISJONALIS
// ============================================================================

// ----------------------------------------------------------------------------
// 2.1 Le futur simple - Enkel framtid
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_2_1: TextbookChapter = {
  id: 'fransk-2-2-1',
  courseId: 'fransk-2',
  chapterNumber: '2.1',
  title: 'Le futur simple - Enkel framtid',
  description: 'Laer aa boye og bruke futur simple for handlinger i framtiden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'boye regelrette og uregelrette verb i futur simple',
    'skille mellom futur simple og futur proche',
  ],
  content: [
    {
      id: 'fransk-2-2-1-intro',
      type: 'text',
      content: `## Le futur simple - Enkel framtid

Futur simple brukes for aa uttrykke handlinger som vil skje i framtiden. Det tilsvarer norsk "vil/skal gjoere".

**Dannelse:** infinitiv + endinger fra avoir

| Pronom | Ending | Parler | Finir | Vendre |
|--------|--------|--------|-------|--------|
| je | -ai | parlerai | finirai | vendrai |
| tu | -as | parleras | finiras | vendras |
| il/elle | -a | parlera | finira | vendra |
| nous | -ons | parlerons | finirons | vendrons |
| vous | -ez | parlerez | finirez | vendrez |
| ils/elles | -ont | parleront | finiront | vendront |

**Merk:** For -re-verb fjernes den siste -e foer endingene legges til.`,
    },
    {
      id: 'fransk-2-2-1-def-1',
      type: 'definition',
      content: `**Uregelrette stammer i futur simple:**

| Infinitiv | Futur-stamme | Eksempel (je) |
|-----------|-------------|---------------|
| être | ser- | je serai |
| avoir | aur- | j'aurai |
| aller | ir- | j'irai |
| faire | fer- | je ferai |
| venir | viendr- | je viendrai |
| voir | verr- | je verrai |
| pouvoir | pourr- | je pourrai |
| vouloir | voudr- | je voudrai |
| devoir | devr- | je devrai |
| savoir | saur- | je saurai |
| envoyer | enverr- | j'enverrai |
| courir | courr- | je courrai |
| mourir | mourr- | je mourrai |

**Husk:** Endingene er ALLTID de samme, bare stammen er uregelrett!`,
    },
    {
      id: 'fransk-2-2-1-text-1',
      type: 'text',
      content: `## Futur simple vs. futur proche

| Futur proche | Futur simple |
|-------------|-------------|
| aller (presens) + infinitiv | infinitiv + endinger |
| Naer framtid, planer | Fjernere framtid, forutsigelser |
| Je vais manger | Je mangerai |

**Eksempler:**
- *Je vais partir dans cinq minutes.* (Jeg skal dra om fem minutter.) - naert
- *Un jour, je voyagerai autour du monde.* (En dag skal jeg reise rundt i verden.) - fjernere

**Tidsuttrykk med futur simple:**
| Fransk | Norsk |
|--------|-------|
| demain | i morgen |
| la semaine prochaine | neste uke |
| l'année prochaine | neste aar |
| dans deux ans | om to aar |
| un jour | en dag |
| quand je serai grand(e) | naar jeg blir stor |`,
    },
    {
      id: 'fransk-2-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Futur simple',
      problem: `Sett verbene i futur simple:

a) Demain, je (aller) au cinéma.
b) Nous (être) en vacances la semaine prochaine.
c) Tu (pouvoir) venir demain?
d) Ils (faire) du ski cet hiver.`,
      solution: `**Loesning:**

a) Demain, **j'irai** au cinéma. (aller → ir- + ai)
b) Nous **serons** en vacances la semaine prochaine. (être → ser- + ons)
c) Tu **pourras** venir demain? (pouvoir → pourr- + as)
d) Ils **feront** du ski cet hiver. (faire → fer- + ont)`,
    },
    {
      id: 'fransk-2-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Boey verbene i futur simple:',
        subTasks: [
          { label: 'a', task: 'Je (parler) français.', solution: 'Je parlerai français.' },
          { label: 'b', task: 'Elle (avoir) 18 ans.', solution: 'Elle aura 18 ans.' },
          { label: 'c', task: 'Nous (voir) le film.', solution: 'Nous verrons le film.' },
          { label: 'd', task: 'Vous (venir) avec nous?', solution: 'Vous viendrez avec nous?' },
        ],
        solution: 'a) parlerai, b) aura, c) verrons, d) viendrez',
        hints: ['parler: regelrett (parler + ai)', 'avoir → aur-', 'voir → verr-', 'venir → viendr-'],
      },
    },
    {
      id: 'fransk-2-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med futur simple:',
        subTasks: [
          { label: 'a', task: 'Jeg skal reise til Frankrike neste aar.', solution: 'Je voyagerai en France l\'année prochaine.' },
          { label: 'b', task: 'Vi vil vaere glade.', solution: 'Nous serons contents.' },
          { label: 'c', task: 'De vil kunne snakke fransk.', solution: 'Ils pourront parler français.' },
        ],
        solution: 'a) voyagerai, b) serons, c) pourront',
        hints: ['voyager = regelrett futur', 'être → ser-', 'pouvoir → pourr-'],
      },
    },
    {
      id: 'fransk-2-2-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv 4 setninger om framtiden din med futur simple. Bruk minst 2 uregelrette verb:',
        subTasks: [
          { label: 'a', task: 'Hva vil du gjoere etter skolen?', solution: 'Après le lycée, j\'irai à l\'université. / Je ferai des études...' },
          { label: 'b', task: 'Hvor vil du bo?', solution: 'J\'habiterai à... / Je vivrai à...' },
          { label: 'c', task: 'Hva vil du jobbe med?', solution: 'Je serai médecin/professeur... / Je travaillerai comme...' },
        ],
        solution: 'Aapent svar - bruk uregelrette verb som être, avoir, aller, faire, pouvoir.',
        hints: ['aller → irai', 'être → serai', 'faire → ferai', 'avoir → aurai'],
      },
    },
    {
      id: 'fransk-2-2-1-tip-1',
      type: 'tip',
      content: `**Tips for futur simple:**

1. Endingene er de samme som presens av "avoir": ai, as, a, ons, ez, ont
2. For regelrette verb: bare legg endingene paa infinitiven
3. Laer de uregelrette stammene utenat - de brukes ogsaa i kondisjonalis!
4. I dagligtale brukes futur proche oftere enn futur simple`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.2 Le futur anterieur - Framtidig perfektum
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_2_2: TextbookChapter = {
  id: 'fransk-2-2-2',
  courseId: 'fransk-2',
  chapterNumber: '2.2',
  title: 'Le futur antérieur - Framtidig perfektum',
  description: 'Laer aa danne og bruke futur antérieur for handlinger som vil vaere fullfoert foer et framtidig tidspunkt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'danne futur antérieur korrekt',
    'bruke futur antérieur med tidskonjunksjoner',
  ],
  content: [
    {
      id: 'fransk-2-2-2-intro',
      type: 'text',
      content: `## Le futur antérieur

Futur antérieur uttrykker en handling som vil vaere fullfoert FOER en annen framtidig handling. Det tilsvarer norsk "vil ha gjort".

**Dannelse:** avoir/être i **futur simple** + partisipp

| Med avoir | Med être |
|-----------|---------|
| j'aurai mangé | je serai allé(e) |
| tu auras mangé | tu seras allé(e) |
| il aura mangé | il sera allé |
| nous aurons mangé | nous serons allé(e)s |

**Bruk:** Ofte med konjunksjoner som **quand**, **lorsque**, **dès que**, **après que**, **aussitôt que**:
- *Quand j'**aurai fini**, je sortirai.* (Naar jeg er ferdig, gaar jeg ut.)`,
    },
    {
      id: 'fransk-2-2-2-def-1',
      type: 'definition',
      content: `**Viktig forskjell fra norsk:**

Paa norsk bruker vi ofte presens etter "naar" i framtidssetninger. Paa fransk brukes futur!

| Norsk | Fransk |
|-------|--------|
| Naar jeg **er** ferdig... | Quand j'**aurai fini**... |
| Naar du **kommer**... | Quand tu **viendras**... |
| Saa snart han **har spist**... | Dès qu'il **aura mangé**... |

**Regel:** Etter quand/lorsque/dès que + framtidig betydning → bruk futur (simple eller antérieur)`,
    },
    {
      id: 'fransk-2-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Futur antérieur',
      problem: `Sett verbene i riktig framtidsform:

a) Quand tu (finir) tes devoirs, tu pourras sortir.
b) Dès que nous (arriver), nous vous appellerons.
c) Je (manger) avant que tu (arriver - futur simple).`,
      solution: `**Loesning:**

a) Quand tu **auras fini** tes devoirs, tu pourras sortir.
(futur antérieur fordi handlingen maa vaere fullfoert foerst)

b) Dès que nous **serons arrivé(e)s**, nous vous appellerons.
(futur antérieur med être + samsvarsboyning)

c) J'**aurai mangé** avant que tu **arrives**.
(NB: après "avant que" brukes subjonctif, ikke futur!)`,
    },
    {
      id: 'fransk-2-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i futur antérieur:',
        subTasks: [
          { label: 'a', task: 'Quand j\' (lire) ce livre, je te le prêterai.', solution: 'Quand j\'aurai lu ce livre, je te le prêterai.' },
          { label: 'b', task: 'Dès qu\'elle (partir), nous commencerons.', solution: 'Dès qu\'elle sera partie, nous commencerons.' },
          { label: 'c', task: 'Lorsque vous (voir) le film, nous en discuterons.', solution: 'Lorsque vous aurez vu le film, nous en discuterons.' },
        ],
        solution: 'a) aurai lu, b) sera partie, c) aurez vu',
        hints: ['lire → lu (avoir)', 'partir → partie (être)', 'voir → vu (avoir)'],
      },
    },
    {
      id: 'fransk-2-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Naar jeg har fullfoert studiene, vil jeg reise.', solution: 'Quand j\'aurai terminé mes études, je voyagerai.' },
          { label: 'b', task: 'Saa snart de har ankommet, ringer vi.', solution: 'Dès qu\'ils seront arrivés, nous appellerons.' },
          { label: 'c', task: 'Etter at du har spist, kan du gaa ut.', solution: 'Après que tu auras mangé, tu pourras sortir.' },
        ],
        solution: 'a) aurai terminé... voyagerai, b) seront arrivés... appellerons, c) auras mangé... pourras',
        hints: ['Naar/saa snart + fullfoert handling = futur antérieur', 'Den andre handlingen = futur simple'],
      },
    },
    {
      id: 'fransk-2-2-2-tip-1',
      type: 'tip',
      content: `**Tips for futur antérieur:**

1. Husk forskjellen fra norsk: "Naar jeg **er** ferdig" = Quand j'**aurai fini** (IKKE presens!)
2. Futur antérieur brukes for den handlingen som skjer FOERST av to framtidige handlinger
3. Samme regler for avoir/être som i passé composé og plus-que-parfait`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.3 Le conditionnel present - Kondisjonalis presens
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_2_3: TextbookChapter = {
  id: 'fransk-2-2-3',
  courseId: 'fransk-2',
  chapterNumber: '2.3',
  title: 'Le conditionnel présent - Kondisjonalis presens',
  description: 'Laer aa boye og bruke kondisjonalis for hoeflighet, oensker og hypotetiske situasjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'boye verb i kondisjonalis presens',
    'bruke kondisjonalis for hoeflighet og oensker',
    'mestre si-setninger med imparfait + kondisjonalis',
  ],
  content: [
    {
      id: 'fransk-2-2-3-intro',
      type: 'text',
      content: `## Le conditionnel présent

Kondisjonalis brukes for:
1. **Hoeflighet:** Je voudrais un café. (Jeg vil gjerne ha en kaffe.)
2. **Oensker:** J'aimerais voyager. (Jeg skulle oenske aa reise.)
3. **Hypotetiske situasjoner:** Si j'avais de l'argent, j'achèterais une voiture. (Hvis jeg hadde penger, ville jeg kjoept en bil.)
4. **Raad:** Tu devrais étudier. (Du burde studere.)

**Dannelse:** futur-stamme + imparfait-endinger

| Pronom | Ending | Parler | Être | Avoir |
|--------|--------|--------|------|-------|
| je | -ais | parlerais | serais | aurais |
| tu | -ais | parlerais | serais | aurais |
| il/elle | -ait | parlerait | serait | aurait |
| nous | -ions | parlerions | serions | aurions |
| vous | -iez | parleriez | seriez | auriez |
| ils/elles | -aient | parleraient | seraient | auraient |`,
    },
    {
      id: 'fransk-2-2-3-def-1',
      type: 'definition',
      content: `**Si-setninger (type 2) - hypotetisk noetid:**

**Si + imparfait → conditionnel présent**

| Si-setning (betingelse) | Hovedsetning (konsekvens) |
|------------------------|--------------------------|
| Si j'**avais** le temps... | ...je **voyagerais**. |
| Si tu **étais** riche... | ...tu **achèterais** quoi? |
| S'il **faisait** beau... | ...nous **irions** à la plage. |

**Husk:** Man bruker ALDRI kondisjonalis i si-setningen (betingelsen)!
- Si j'avais... ✓ (imparfait)
- Si j'aurais... ✗ (FEIL!)`,
    },
    {
      id: 'fransk-2-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Hoeflighet og oensker',
      problem: `Skriv om setningene med kondisjonalis for aa gjoere dem hoefligere:

a) Je veux un café.
b) Pouvez-vous m'aider?
c) Tu dois partir.`,
      solution: `**Loesning:**

a) Je **voudrais** un café. (Jeg ville gjerne ha en kaffe.)
b) **Pourriez**-vous m'aider? (Kunne du hjelpe meg?)
c) Tu **devrais** partir. (Du burde dra.)

Kondisjonalis gjor setningen mykere og hoefliger.`,
    },
    {
      id: 'fransk-2-2-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Si-setninger',
      problem: `Fullfør si-setningene:

a) Si j'avais un million d'euros, je ___
b) Si nous étions en France, nous ___
c) Si tu pouvais voyager n'importe où, tu ___`,
      solution: `**Loesning (eksempler):**

a) Si j'avais un million d'euros, **j'achèterais une grande maison**.
b) Si nous étions en France, **nous visiterions la Tour Eiffel**.
c) Si tu pouvais voyager n'importe où, **tu irais au Japon**.

**Formel:** Si + imparfait, kondisjonalis`,
    },
    {
      id: 'fransk-2-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Boey verbene i kondisjonalis presens:',
        subTasks: [
          { label: 'a', task: 'Je (vouloir) un thé.', solution: 'Je voudrais un thé.' },
          { label: 'b', task: 'Nous (aimer) voyager.', solution: 'Nous aimerions voyager.' },
          { label: 'c', task: 'Il (être) content.', solution: 'Il serait content.' },
          { label: 'd', task: 'Vous (pouvoir) venir?', solution: 'Vous pourriez venir?' },
        ],
        solution: 'a) voudrais, b) aimerions, c) serait, d) pourriez',
        hints: ['Futur-stamme + imparfait-endinger', 'vouloir → voudr-', 'pouvoir → pourr-'],
      },
    },
    {
      id: 'fransk-2-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag si-setninger med imparfait + kondisjonalis:',
        subTasks: [
          { label: 'a', task: 'Hvis jeg var rik, ... (reise rundt i verden)', solution: 'Si j\'étais riche, je voyagerais autour du monde.' },
          { label: 'b', task: 'Hvis det var fint vaer, ... (gaa i parken)', solution: 'S\'il faisait beau, nous irions au parc.' },
          { label: 'c', task: 'Hvis du kunne snakke fransk, ... (jobbe i Frankrike)', solution: 'Si tu parlais français, tu travaillerais en France.' },
        ],
        solution: 'a) Si j\'étais riche... b) S\'il faisait beau... c) Si tu parlais français...',
        hints: ['Si + imparfait, kondisjonalis presens', 'ALDRI kondisjonalis etter si'],
      },
    },
    {
      id: 'fransk-2-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne bestille en pizza.', solution: 'Je voudrais commander une pizza.' },
          { label: 'b', task: 'Hvis vi hadde tid, ville vi besoeeke museet.', solution: 'Si nous avions le temps, nous visiterions le musée.' },
          { label: 'c', task: 'Du burde laese denne boken.', solution: 'Tu devrais lire ce livre.' },
        ],
        solution: 'a) voudrais, b) avions... visiterions, c) devrais',
        hints: ['vil gjerne = voudrais', 'burde = devrais'],
      },
    },
    {
      id: 'fransk-2-2-3-tip-1',
      type: 'tip',
      content: `**Tips for kondisjonalis:**

1. Futur-stamme + imparfait-endinger = lett aa huske!
2. Bruk alltid kondisjonalis for hoeflige bestillinger paa restaurant/cafe
3. Si + imparfait, kondisjonalis (ALDRI si + kondisjonalis)
4. "Devrais" (burde) og "pourrais" (kunne) er veldig nyttige for raad`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.4 Le conditionnel passe - Kondisjonalis perfektum
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_2_4: TextbookChapter = {
  id: 'fransk-2-2-4',
  courseId: 'fransk-2',
  chapterNumber: '2.4',
  title: 'Le conditionnel passé - Kondisjonalis perfektum',
  description: 'Laer aa danne og bruke kondisjonalis perfektum for urealiserte oensker og hypotetisk fortid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'danne kondisjonalis perfektum korrekt',
    'bruke si-setninger med plus-que-parfait + conditionnel passé',
    'forstaa alle tre typer si-setninger',
  ],
  content: [
    {
      id: 'fransk-2-2-4-intro',
      type: 'text',
      content: `## Le conditionnel passé

Kondisjonalis perfektum uttrykker:
- **Urealiserte oensker:** J'aurais aimé voyager. (Jeg skulle oensket aa reise.)
- **Anger:** J'aurais dû étudier. (Jeg burde ha studert.)
- **Hypotetisk fortid:** Si j'avais su, je serais venu. (Hvis jeg hadde visst, ville jeg ha kommet.)

**Dannelse:** avoir/être i **conditionnel présent** + partisipp

| Med avoir | Med être |
|-----------|---------|
| j'aurais mangé | je serais allé(e) |
| tu aurais mangé | tu serais allé(e) |
| il aurait mangé | il serait allé |
| nous aurions mangé | nous serions allé(e)s |`,
    },
    {
      id: 'fransk-2-2-4-def-1',
      type: 'definition',
      content: `**Si-setninger (type 3) - urealistisk fortid:**

**Si + plus-que-parfait → conditionnel passé**

| Si-setning | Hovedsetning |
|------------|-------------|
| Si j'**avais su**... | ...je **serais venu(e)**. |
| Si tu **avais étudié**... | ...tu **aurais réussi**. |
| Si nous **étions partis** plus tôt... | ...nous **aurions attrapé** le train. |

**Alle tre typer si-setninger:**

| Type | Si-setning | Hovedsetning | Eksempel |
|------|-----------|-------------|----------|
| 1 (reell) | Si + présent | futur simple | Si j'ai le temps, je viendrai. |
| 2 (hypotetisk noetid) | Si + imparfait | conditionnel présent | Si j'avais le temps, je viendrais. |
| 3 (ureell fortid) | Si + plus-que-parfait | conditionnel passé | Si j'avais eu le temps, je serais venu(e). |`,
    },
    {
      id: 'fransk-2-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Anger og urealiserte oensker',
      problem: `Uttrykk anger med conditionnel passé:

a) Je n'ai pas étudié. →
b) Elle n'est pas venue. →
c) Nous n'avons pas acheté les billets. →`,
      solution: `**Loesning:**

a) **J'aurais dû étudier.** (Jeg burde ha studert.)
b) **Elle aurait dû venir.** (Hun burde ha kommet.)
c) **Nous aurions dû acheter les billets.** (Vi burde ha kjoept billettene.)

Alternativt med si-setninger:
a) Si j'avais étudié, j'aurais réussi l'examen.
b) Si elle était venue, elle aurait aimé la fête.`,
    },
    {
      id: 'fransk-2-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfør si-setningene (type 3):',
        subTasks: [
          { label: 'a', task: 'Si j\'avais su, je ___ (venir).', solution: 'Si j\'avais su, je serais venu(e).' },
          { label: 'b', task: 'Si nous avions eu de l\'argent, nous ___ (acheter) une maison.', solution: 'Si nous avions eu de l\'argent, nous aurions acheté une maison.' },
          { label: 'c', task: 'Si elle avait étudié, elle ___ (réussir) l\'examen.', solution: 'Si elle avait étudié, elle aurait réussi l\'examen.' },
        ],
        solution: 'a) serais venu(e), b) aurions acheté, c) aurait réussi',
        hints: ['Si + plus-que-parfait → conditionnel passé', 'venir bruker être'],
      },
    },
    {
      id: 'fransk-2-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Identifiser typen si-setning (1, 2 eller 3) og oversett:',
        subTasks: [
          { label: 'a', task: 'Si j\'ai le temps, je viendrai. (Type ?)', solution: 'Type 1 (reell noetid/framtid). Hvis jeg har tid, kommer jeg.' },
          { label: 'b', task: 'Si j\'avais le temps, je viendrais. (Type ?)', solution: 'Type 2 (hypotetisk noetid). Hvis jeg hadde tid, ville jeg komme.' },
          { label: 'c', task: 'Si j\'avais eu le temps, je serais venu. (Type ?)', solution: 'Type 3 (ureell fortid). Hvis jeg hadde hatt tid, ville jeg ha kommet.' },
        ],
        solution: 'a) Type 1, b) Type 2, c) Type 3',
        hints: ['Presens + futur = type 1', 'Imparfait + kondisjonalis = type 2', 'Plus-que-parfait + kondisjonalis perfektum = type 3'],
      },
    },
    {
      id: 'fransk-2-2-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med riktig si-setnings-type:',
        subTasks: [
          { label: 'a', task: 'Hvis jeg hadde visst, ville jeg ha hjulpet deg.', solution: 'Si j\'avais su, je t\'aurais aidé(e). (Type 3)' },
          { label: 'b', task: 'Hvis det regner i morgen, blir vi hjemme.', solution: 'S\'il pleut demain, nous resterons à la maison. (Type 1)' },
          { label: 'c', task: 'Hvis jeg var deg, ville jeg studert mer.', solution: 'Si j\'étais toi, j\'étudierais davantage. (Type 2)' },
        ],
        solution: 'a) Type 3 (avais su, aurais aidé), b) Type 1 (pleut, resterons), c) Type 2 (étais, étudierais)',
        hints: ['Hadde visst/ville ha = type 3', 'Regner/blir = type 1', 'Var/ville = type 2'],
      },
    },
    {
      id: 'fransk-2-2-4-note-1',
      type: 'note',
      content: `**Oppsummering kapittel 2 - Futur og Kondisjonalis:**

| Tid | Dannelse | Bruk |
|-----|----------|------|
| **Futur simple** | infinitiv + -ai/-as/-a/-ons/-ez/-ont | Framtidige handlinger |
| **Futur antérieur** | avoir/être (futur) + partisipp | Fullfoert foer framtidig handling |
| **Conditionnel présent** | futur-stamme + -ais/-ais/-ait/-ions/-iez/-aient | Hoeflighet, oensker, si-type 2 |
| **Conditionnel passé** | avoir/être (kondisjonalis) + partisipp | Anger, ureell fortid, si-type 3 |`,
    },
    {
      id: 'fransk-2-2-4-tip-1',
      type: 'tip',
      content: `**Tips for si-setninger:**

1. **Type 1:** Si + presens → futur (reell mulighet)
2. **Type 2:** Si + imparfait → kondisjonalis presens (hypotetisk)
3. **Type 3:** Si + plus-que-parfait → kondisjonalis perfektum (ureell fortid)
4. **GYLLENT REGEL:** ALDRI futur eller kondisjonalis ETTER "si"!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: PRONOMEN (LES PRONOMS)
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 Les pronoms COD et COI
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_3_1: TextbookChapter = {
  id: 'fransk-2-3-1',
  courseId: 'fransk-2',
  chapterNumber: '3.1',
  title: 'Les pronoms COD et COI',
  description: 'Laer om direkte og indirekte objektspronomen og plasseringen i setningen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke COD (direkte objektspronomen) korrekt',
    'bruke COI (indirekte objektspronomen) korrekt',
    'plassere objektspronomen riktig i setningen',
  ],
  content: [
    {
      id: 'fransk-2-3-1-intro',
      type: 'text',
      content: `## Les pronoms COD et COI

Objektspronomen erstatter substantiv for aa unngaa gjentakelser:

**COD (Complément d'Objet Direct) - Direkte objekt:**

| Pronom | Norsk | Eksempel |
|--------|-------|----------|
| me (m') | meg | Il me voit. (Han ser meg.) |
| te (t') | deg | Je te connais. (Jeg kjenner deg.) |
| le (l') | ham/den | Je le mange. (Jeg spiser den.) |
| la (l') | henne/den | Je la vois. (Jeg ser henne.) |
| nous | oss | Il nous invite. (Han inviterer oss.) |
| vous | dere/Dem | Je vous appelle. (Jeg ringer dere.) |
| les | dem | Je les aime. (Jeg liker dem.) |

**COI (Complément d'Objet Indirect) - Indirekte objekt (à + person):**

| Pronom | Norsk | Eksempel |
|--------|-------|----------|
| me (m') | (til) meg | Il me parle. (Han snakker til meg.) |
| te (t') | (til) deg | Je te donne un livre. (Jeg gir deg en bok.) |
| lui | (til) ham/henne | Je lui parle. (Jeg snakker til ham/henne.) |
| nous | (til) oss | Il nous écrit. (Han skriver til oss.) |
| vous | (til) dere | Je vous réponds. (Jeg svarer dere.) |
| leur | (til) dem | Je leur téléphone. (Jeg ringer til dem.) |`,
    },
    {
      id: 'fransk-2-3-1-def-1',
      type: 'definition',
      content: `**Plassering:** Objektspronomen staar FORAN verbet (eller hjelpeverbet):

- **Presens:** Je **le** vois. (Jeg ser ham.)
- **Passé composé:** Je **l'**ai vu. (Jeg har sett ham.)
- **Futur proche:** Je vais **le** voir. (Jeg skal se ham.)
- **Nektelse:** Je ne **le** vois **pas**. (Jeg ser ham ikke.)

**Hvordan velge mellom COD og COI?**
- COD: Verbet tar direkte objekt (uten preposisjon): voir qqn, aimer qqn, connaître qqn
- COI: Verbet tar à + person: parler **à** qqn, téléphoner **à** qqn, donner qqch **à** qqn`,
    },
    {
      id: 'fransk-2-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Erstatt med pronomen',
      problem: `Erstatt de understrekede ordene med COD eller COI:

a) Je vois **Marie**.
b) Il parle **à Pierre**.
c) Nous aimons **les chats**.
d) Elle donne un cadeau **à ses parents**.`,
      solution: `**Loesning:**

a) Je **la** vois. (Marie = hunkjoenn, direkte objekt → la)
b) Il **lui** parle. (à Pierre = indirekte objekt → lui)
c) Nous **les** aimons. (les chats = flertall, direkte objekt → les)
d) Elle **leur** donne un cadeau. (à ses parents = indirekte objekt flertall → leur)`,
    },
    {
      id: 'fransk-2-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Erstatt med riktig pronomen (COD eller COI):',
        subTasks: [
          { label: 'a', task: 'Je regarde la télé. → Je ___ regarde.', solution: 'Je la regarde.' },
          { label: 'b', task: 'Il téléphone à Marie. → Il ___ téléphone.', solution: 'Il lui téléphone.' },
          { label: 'c', task: 'Nous connaissons Pierre et Paul. → Nous ___ connaissons.', solution: 'Nous les connaissons.' },
          { label: 'd', task: 'Elle écrit à ses amies. → Elle ___ écrit.', solution: 'Elle leur écrit.' },
        ],
        solution: 'a) la, b) lui, c) les, d) leur',
        hints: ['regarder = direkte objekt (COD)', 'téléphoner à = indirekte objekt (COI)'],
      },
    },
    {
      id: 'fransk-2-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om med objektspronomen i passé composé:',
        subTasks: [
          { label: 'a', task: 'J\'ai vu Marie hier. →', solution: 'Je l\'ai vue hier. (COD foran avoir → samsvarsboyning!)' },
          { label: 'b', task: 'Il a parlé à son professeur. →', solution: 'Il lui a parlé.' },
          { label: 'c', task: 'Nous avons acheté les livres. →', solution: 'Nous les avons achetés. (COD foran avoir → samsvarsboyning!)' },
        ],
        solution: 'a) l\'ai vue, b) lui a parlé, c) les avons achetés',
        hints: ['COD foran avoir → partisippet samsvarsboeyes med COD!', 'COI paavirker IKKE samsvarsboyning'],
      },
    },
    {
      id: 'fransk-2-3-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med objektspronomen:',
        subTasks: [
          { label: 'a', task: 'Jeg liker henne.', solution: 'Je l\'aime.' },
          { label: 'b', task: 'Han snakker til dem.', solution: 'Il leur parle.' },
          { label: 'c', task: 'Vi ser dem ikke.', solution: 'Nous ne les voyons pas.' },
        ],
        solution: 'a) l\'aime, b) leur parle, c) ne les voyons pas',
        hints: ['henne = la (l\')', 'til dem = leur (COI)', 'I nektelse: ne + pronomen + verb + pas'],
      },
    },
    {
      id: 'fransk-2-3-1-tip-1',
      type: 'tip',
      content: `**Tips for COD og COI:**

1. **COD:** Svar paa "hvem/hva?" etter verbet uten preposisjon
2. **COI:** Svar paa "til hvem?" (à + person)
3. Forskjellen er bare i 3. person: le/la/les (COD) vs. lui/leur (COI)
4. I passé composé med avoir: samsvarsboyning KUN med COD som staar foran!`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.2 Les pronoms y et en
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_3_2: TextbookChapter = {
  id: 'fransk-2-3-2',
  courseId: 'fransk-2',
  chapterNumber: '3.2',
  title: 'Les pronoms y et en',
  description: 'Laer aa bruke pronomenet y (dit/der) og en (av det/noen) korrekt.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke y for aa erstatte à + sted/ting',
    'bruke en for aa erstatte de + ting/mengde',
    'plassere y og en riktig i setningen',
  ],
  content: [
    {
      id: 'fransk-2-3-2-intro',
      type: 'text',
      content: `## Les pronoms y et en

**Y** erstatter:
- **à + sted:** J'habite **à Paris** → J'**y** habite. (Jeg bor der.)
- **à + ting:** Je pense **à mon examen** → J'**y** pense. (Jeg tenker paa det.)

**En** erstatter:
- **de + ting:** Je parle **de mon voyage** → J'**en** parle. (Jeg snakker om det.)
- **mengde:** J'ai **trois chats** → J'**en** ai trois. (Jeg har tre.)
- **du/de la/des + ting:** Je mange **du pain** → J'**en** mange. (Jeg spiser av det.)`,
    },
    {
      id: 'fransk-2-3-2-def-1',
      type: 'definition',
      content: `**Y - erstatter à + sted/ting:**

| Original | Med y | Norsk |
|----------|-------|-------|
| Je vais **à l'école**. | J'**y** vais. | Jeg gaar dit. |
| Il habite **en France**. | Il **y** habite. | Han bor der. |
| Je pense **à l'examen**. | J'**y** pense. | Jeg tenker paa det. |

**En - erstatter de + ting/mengde:**

| Original | Med en | Norsk |
|----------|--------|-------|
| Je veux **du café**. | J'**en** veux. | Jeg vil ha (av det). |
| J'ai **deux frères**. | J'**en** ai deux. | Jeg har to (av dem). |
| Je reviens **de Paris**. | J'**en** reviens. | Jeg kommer derfra. |
| Je parle **de mon travail**. | J'**en** parle. | Jeg snakker om det. |

**Plassering:** Foran verbet, som andre objektspronomen.`,
    },
    {
      id: 'fransk-2-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Y eller en?',
      problem: `Erstatt med y eller en:

a) Nous allons au cinéma.
b) Elle a beaucoup de livres.
c) Tu penses à tes vacances?
d) Il vient de Lyon.`,
      solution: `**Loesning:**

a) Nous **y** allons. (au cinéma = à + sted → y)
b) Elle **en** a beaucoup. (beaucoup de livres = mengde → en)
c) Tu **y** penses? (à tes vacances = à + ting → y)
d) Il **en** vient. (de Lyon = de + sted → en)`,
    },
    {
      id: 'fransk-2-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg y eller en:',
        subTasks: [
          { label: 'a', task: 'Tu vas à Paris? - Oui, j\' ___ vais.', solution: 'Oui, j\'y vais.' },
          { label: 'b', task: 'Tu as des frères? - Oui, j\' ___ ai deux.', solution: 'Oui, j\'en ai deux.' },
          { label: 'c', task: 'Il habite en Norvège? - Oui, il ___ habite.', solution: 'Oui, il y habite.' },
          { label: 'd', task: 'Tu veux du fromage? - Oui, j\' ___ veux.', solution: 'Oui, j\'en veux.' },
        ],
        solution: 'a) y, b) en, c) y, d) en',
        hints: ['à + sted = y', 'mengde/du/de la/des = en'],
      },
    },
    {
      id: 'fransk-2-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om med y eller en:',
        subTasks: [
          { label: 'a', task: 'Je suis allé(e) à la plage hier. →', solution: 'J\'y suis allé(e) hier.' },
          { label: 'b', task: 'Nous avons mangé trois croissants. →', solution: 'Nous en avons mangé trois.' },
          { label: 'c', task: 'Elle ne pense pas à ses problèmes. →', solution: 'Elle n\'y pense pas.' },
        ],
        solution: 'a) y, b) en... trois, c) n\'y... pas',
        hints: ['à la plage = sted → y', 'trois croissants = mengde → en + tall'],
      },
    },
    {
      id: 'fransk-2-3-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med y eller en:',
        subTasks: [
          { label: 'a', task: 'Bor du der? - Ja, jeg bor der.', solution: 'Tu y habites? - Oui, j\'y habite.' },
          { label: 'b', task: 'Har du noen? (katter) - Ja, jeg har tre.', solution: 'Tu en as? - Oui, j\'en ai trois.' },
          { label: 'c', task: 'Tenker du paa det? - Nei, jeg tenker ikke paa det.', solution: 'Tu y penses? - Non, je n\'y pense pas.' },
        ],
        solution: 'a) y habites / y habite, b) en as / en ai trois, c) y penses / n\'y pense pas',
        hints: ['bor der = y habite', 'har noen = en a', 'tenker paa det = y pense'],
      },
    },
    {
      id: 'fransk-2-3-2-tip-1',
      type: 'tip',
      content: `**Huskeregel for y og en:**

- **Y** = "dit/der" (erstatter à + sted eller ting)
- **EN** = "av det/derfra" (erstatter de + ting, eller mengde)

Tenk: **Y** peker MOT et sted (j'y vais = jeg gaar DIT)
      **EN** peker FRA et sted eller en mengde (j'en viens = jeg kommer DERFRA)`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.3 Les pronoms relatifs - Relativpronomen
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_3_3: TextbookChapter = {
  id: 'fransk-2-3-3',
  courseId: 'fransk-2',
  chapterNumber: '3.3',
  title: 'Les pronoms relatifs - Relativpronomen',
  description: 'Laer aa bruke relativpronomenene qui, que, ou og dont for aa bygge komplekse setninger.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke qui, que, ou og dont korrekt',
    'bygge komplekse setninger med relativpronomen',
  ],
  content: [
    {
      id: 'fransk-2-3-3-intro',
      type: 'text',
      content: `## Les pronoms relatifs

Relativpronomen binder sammen to setninger og unngaar gjentakelser:

| Pronomen | Funksjon | Norsk | Eksempel |
|----------|----------|-------|----------|
| **qui** | Subjekt | som | La fille **qui** parle est ma soeur. |
| **que** | Direkte objekt | som | Le film **que** j'ai vu était bien. |
| **où** | Sted/tid | hvor/da | La ville **où** j'habite est grande. |
| **dont** | Eiendom/de | som/hvis/hvis | L'homme **dont** je parle est médecin. |`,
    },
    {
      id: 'fransk-2-3-3-def-1',
      type: 'definition',
      content: `**Qui vs. Que - Forskjellen:**

**Qui** = subjekt i leddsetningen (etterfulgt av VERB)
- La femme **qui parle**... (Kvinnen som snakker...)
- qui + verb

**Que** = objekt i leddsetningen (etterfulgt av SUBJEKT + verb)
- Le livre **que je lis**... (Boken som jeg leser...)
- que + subjekt + verb

**Où** = sted eller tid
- La maison **où** j'habite... (Huset hvor jeg bor...)
- L'année **où** je suis né... (Aaret da jeg ble foedt...)

**Dont** = erstatter "de" + ting/person
- Le film **dont** je parle... (Filmen som jeg snakker om... → parler **de**)
- L'homme **dont** la voiture est rouge... (Mannen hvis bil er roed...)`,
    },
    {
      id: 'fransk-2-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Velg riktig relativpronomen',
      problem: `Fyll inn qui, que, ou eller dont:

a) C'est le garçon ___ j'ai rencontré hier.
b) La fille ___ chante est ma cousine.
c) Le restaurant ___ nous avons mangé est excellent.
d) C'est le livre ___ tout le monde parle.`,
      solution: `**Loesning:**

a) C'est le garçon **que** j'ai rencontré hier. (que = objekt, etterfulgt av "j'ai")
b) La fille **qui** chante est ma cousine. (qui = subjekt, etterfulgt av verb)
c) Le restaurant **où** nous avons mangé est excellent. (où = sted)
d) C'est le livre **dont** tout le monde parle. (dont = parler **de** → dont)`,
    },
    {
      id: 'fransk-2-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg qui, que, ou eller dont:',
        subTasks: [
          { label: 'a', task: 'L\'homme ___ parle est mon père.', solution: 'L\'homme qui parle est mon père. (qui = subjekt)' },
          { label: 'b', task: 'Le film ___ j\'ai vu était triste.', solution: 'Le film que j\'ai vu était triste. (que = objekt)' },
          { label: 'c', task: 'La ville ___ je suis né est petite.', solution: 'La ville où je suis né est petite. (où = sted)' },
          { label: 'd', task: 'C\'est la fille ___ le père est professeur.', solution: 'C\'est la fille dont le père est professeur. (dont = eiendom/hvis)' },
        ],
        solution: 'a) qui, b) que, c) où, d) dont',
        hints: ['qui + verb', 'que + subjekt + verb', 'où = sted/tid', 'dont erstatter de'],
      },
    },
    {
      id: 'fransk-2-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kombiner de to setningene med et relativpronomen:',
        subTasks: [
          { label: 'a', task: 'J\'ai un ami. Il habite à Paris.', solution: 'J\'ai un ami qui habite à Paris.' },
          { label: 'b', task: 'Je lis un livre. Tu m\'as recommandé ce livre.', solution: 'Je lis le livre que tu m\'as recommandé.' },
          { label: 'c', task: 'Voilà le café. Nous nous sommes rencontrés dans ce café.', solution: 'Voilà le café où nous nous sommes rencontrés.' },
        ],
        solution: 'a) qui habite, b) que tu m\'as recommandé, c) où nous nous sommes rencontrés',
        hints: ['Finn ut om det erstattede ordet er subjekt, objekt eller sted'],
      },
    },
    {
      id: 'fransk-2-3-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med relativpronomen:',
        subTasks: [
          { label: 'a', task: 'Jenta som jeg liker bor i Lyon.', solution: 'La fille que j\'aime habite à Lyon.' },
          { label: 'b', task: 'Huset hvor jeg vokste opp er gammelt.', solution: 'La maison où j\'ai grandi est vieille.' },
          { label: 'c', task: 'Forfatteren som alle snakker om er fransk.', solution: 'L\'auteur dont tout le monde parle est français.' },
        ],
        solution: 'a) que j\'aime, b) où j\'ai grandi, c) dont tout le monde parle',
        hints: ['som jeg liker = que (objekt)', 'hvor = où', 'snakker om = parler de → dont'],
      },
    },
    {
      id: 'fransk-2-3-3-tip-1',
      type: 'tip',
      content: `**Hurtig-sjekk for relativpronomen:**

1. Er det etterfulgt direkte av et VERB? → **qui**
2. Er det etterfulgt av et SUBJEKT (je, tu, il...)? → **que**
3. Snakker vi om et STED eller en TID? → **où**
4. Erstatter det "de" (parler de, avoir besoin de, le père de)? → **dont**`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.4 L'ordre des pronoms - Pronomenrekkefoelge
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_3_4: TextbookChapter = {
  id: 'fransk-2-3-4',
  courseId: 'fransk-2',
  chapterNumber: '3.4',
  title: 'L\'ordre des pronoms - Pronomenrekkefoelge',
  description: 'Laer rekkefoelgen naar flere pronomen brukes sammen, og pronomen med imperativ.',
  estimatedMinutes: 45,
  competenceGoals: [
    'plassere flere pronomen i riktig rekkefoelge',
    'bruke pronomen med imperativ',
  ],
  content: [
    {
      id: 'fransk-2-3-4-intro',
      type: 'text',
      content: `## L'ordre des pronoms

Naar flere pronomen brukes i samme setning, foelger de en bestemt rekkefoelge:

**Rekkefoelge foran verbet:**

| 1. | 2. | 3. | 4. | 5. | VERB |
|----|----|----|----|----|------|
| me | le | lui | y | en | verb |
| te | la | leur | | | |
| se | les | | | | |
| nous | | | | | |
| vous | | | | | |

**Eksempler:**
- Il **me le** donne. (Han gir meg den.)
- Je **la lui** ai donnée. (Jeg ga den til ham/henne.)
- Il **m'en** a parlé. (Han snakket med meg om det.)
- Je **l'y** ai vu. (Jeg saa ham der.)`,
    },
    {
      id: 'fransk-2-3-4-def-1',
      type: 'definition',
      content: `**Pronomen med imperativ:**

**Bekreftende imperativ:** Pronomenene staar ETTER verbet, med bindestrek:
- Donne-**le**-moi! (Gi den til meg!)
- Parlez-**lui**! (Snakk til ham!)
- Allez-**y**! (Gaa dit! / Kjor paa!)
- Prends-**en**! (Ta noen!)

**Nektende imperativ:** Pronomenene staar FORAN verbet som vanlig:
- Ne **me le** donne pas! (Ikke gi den til meg!)
- Ne **lui** parlez pas! (Ikke snakk til ham!)
- N'**y** allez pas! (Ikke gaa dit!)

**Merk:** "Me" blir "moi" og "te" blir "toi" i bekreftende imperativ:
- Donne-**moi** le livre! (Gi meg boken!)
- Lève-**toi**! (Staa opp!)`,
    },
    {
      id: 'fransk-2-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Flere pronomen sammen',
      problem: `Erstatt de understrekede ordene med pronomen:

a) Je donne **le livre** **à Pierre**.
b) Elle a dit **la vérité** **à ses parents**.
c) Nous envoyons **les photos** **à Marie**.`,
      solution: `**Loesning:**

a) Je **le lui** donne. (le = le livre, lui = à Pierre)
b) Elle **la leur** a dite. (la = la vérité, leur = à ses parents)
c) Nous **les lui** envoyons. (les = les photos, lui = à Marie)

**Rekkefoelge:** le/la/les kommer FOER lui/leur`,
    },
    {
      id: 'fransk-2-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Erstatt med pronomen i riktig rekkefoelge:',
        subTasks: [
          { label: 'a', task: 'Il me donne le livre. →', solution: 'Il me le donne.' },
          { label: 'b', task: 'Elle nous a montré les photos. →', solution: 'Elle nous les a montrées.' },
          { label: 'c', task: 'Tu vas donner le cadeau à ta mère. →', solution: 'Tu vas le lui donner.' },
        ],
        solution: 'a) me le, b) nous les, c) le lui',
        hints: ['me/te/nous/vous kommer foer le/la/les', 'le/la/les kommer foer lui/leur'],
      },
    },
    {
      id: 'fransk-2-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om til imperativ med pronomen:',
        subTasks: [
          { label: 'a', task: 'Tu donnes le livre à Marie. → (bekreftende)', solution: 'Donne-le-lui!' },
          { label: 'b', task: 'Vous parlez à Pierre. → (nektende)', solution: 'Ne lui parlez pas!' },
          { label: 'c', task: 'Tu vas au magasin. → (bekreftende)', solution: 'Vas-y!' },
          { label: 'd', task: 'Tu prends du pain. → (bekreftende)', solution: 'Prends-en!' },
        ],
        solution: 'a) Donne-le-lui, b) Ne lui parlez pas, c) Vas-y, d) Prends-en',
        hints: ['Bekreftende: verb + bindestrek + pronomen', 'Nektende: ne + pronomen + verb + pas'],
      },
    },
    {
      id: 'fransk-2-3-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med pronomen:',
        subTasks: [
          { label: 'a', task: 'Han ga meg den. (boken)', solution: 'Il me l\'a donné(e).' },
          { label: 'b', task: 'Gi den til henne! (noekkelen)', solution: 'Donne-la-lui!' },
          { label: 'c', task: 'Ikke snakk til dem om det!', solution: 'Ne leur en parlez pas!' },
        ],
        solution: 'a) me l\'a donné, b) Donne-la-lui, c) Ne leur en parlez pas',
        hints: ['me + le → me l\'', 'Bekreftende imperativ: la-lui', 'Nektende: ne + leur + en + parlez + pas'],
      },
    },
    {
      id: 'fransk-2-3-4-note-1',
      type: 'note',
      content: `**Oppsummering kapittel 3 - Pronomen:**

| Pronomentype | Former | Funksjon |
|-------------|--------|----------|
| **COD** | me, te, le/la, nous, vous, les | Direkte objekt |
| **COI** | me, te, lui, nous, vous, leur | Indirekte objekt (à + person) |
| **Y** | y | Erstatter à + sted/ting |
| **EN** | en | Erstatter de + ting, mengde |
| **Relativ** | qui, que, où, dont | Binder setninger sammen |

**Rekkefoelge:** me/te/se/nous/vous → le/la/les → lui/leur → y → en`,
    },
    {
      id: 'fransk-2-3-4-tip-1',
      type: 'tip',
      content: `**Tips for pronomenrekkefoelge:**

1. I dagligtale brukes sjelden mer enn 2 pronomen sammen
2. Foelgende kombinasjoner er vanligst: me le, te le, le lui, la lui, les leur
3. Y og en staar alltid sist (nermest verbet)
4. I bekreftende imperativ: le/la/les foer moi/toi/lui/nous/vous/leur
5. Oev med aa si setningene hoeyt - det hjelper med flyten!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const FRANSK_2_CHAPTERS_1_3: TextbookChapter[] = [
  CHAPTER_FRANSK_2_1_1,
  CHAPTER_FRANSK_2_1_2,
  CHAPTER_FRANSK_2_1_3,
  CHAPTER_FRANSK_2_1_4,
  CHAPTER_FRANSK_2_2_1,
  CHAPTER_FRANSK_2_2_2,
  CHAPTER_FRANSK_2_2_3,
  CHAPTER_FRANSK_2_2_4,
  CHAPTER_FRANSK_2_3_1,
  CHAPTER_FRANSK_2_3_2,
  CHAPTER_FRANSK_2_3_3,
  CHAPTER_FRANSK_2_3_4,
];
