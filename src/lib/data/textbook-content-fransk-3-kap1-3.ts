/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivaa 3 - Kapittel 1-3 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 1: Avanserte tider (1.1-1.4)
 * - Kapittel 2: Subjonctif og Passiv (2.1-2.4)
 * - Kapittel 3: Diskurs og Argumentasjon (3.1-3.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: AVANSERTE TIDER (LES TEMPS AVANCES)
// ============================================================================

// ----------------------------------------------------------------------------
// 1.1 Le passe simple - Historisk fortid
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_1_1: TextbookChapter = {
  id: 'fransk-3-1-1',
  courseId: 'fransk-3',
  chapterNumber: '1.1',
  title: 'Le passé simple - Historisk fortid',
  description: 'Laer aa gjenkjenne og bruke passé simple, den litteraere fortidsformen som brukes i romaner og historiske tekster.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjenkjenne passé simple i franske tekster',
    'boye verb i passé simple for alle grupper',
    'forstaa nyanseforskjellen mellom passé simple og passé composé',
  ],
  content: [
    {
      id: 'fransk-3-1-1-intro',
      type: 'text',
      content: `## Le passé simple - Den litteraere fortiden

Le passé simple er en fortidsform som brukes nesten utelukkende i **skriftspraak**: romaner, historiske tekster, eventyr og formelle beretninger. I muntlig fransk brukes passé composé i stedet.

**Viktig:** Du trenger ikke bruke passé simple aktivt, men du maa kunne **gjenkjenne** det naar du leser franske tekster.

**Eksempel fra Victor Hugo:**
*"Jean Valjean **entra** dans la salle et **regarda** autour de lui. L'évêque **sourit** et lui **dit**: 'Asseyez-vous.'"*
(Jean Valjean gikk inn i salen og saa seg rundt. Biskopen smilte og sa til ham: "Sett deg.")`,
    },
    {
      id: 'fransk-3-1-1-def-1',
      type: 'definition',
      content: `**Boyning av passé simple:**

**1. gruppe (-er):**
| Pronom | Parler |
|--------|--------|
| je | parlai |
| tu | parlas |
| il/elle | parla |
| nous | parlâmes |
| vous | parlâtes |
| ils/elles | parlèrent |

**2. gruppe (-ir):**
| Pronom | Finir |
|--------|-------|
| je | finis |
| tu | finis |
| il/elle | finit |
| nous | finîmes |
| vous | finîtes |
| ils/elles | finirent |

**3. gruppe (-re og uregelrette):**
| Pronom | Vendre | Prendre |
|--------|--------|---------|
| je | vendis | pris |
| tu | vendis | pris |
| il/elle | vendit | prit |
| nous | vendîmes | prîmes |
| vous | vendîtes | prîtes |
| ils/elles | vendirent | prirent |`,
    },
    {
      id: 'fransk-3-1-1-text-1',
      type: 'text',
      content: `## Uregelrette verb i passé simple

| Infinitiv | Passé simple (il/elle) | Passé simple (ils/elles) |
|-----------|----------------------|--------------------------|
| être | fut | furent |
| avoir | eut | eurent |
| faire | fit | firent |
| dire | dit | dirent |
| voir | vit | virent |
| venir | vint | vinrent |
| pouvoir | put | purent |
| savoir | sut | surent |
| vouloir | voulut | voulurent |
| devoir | dut | durent |
| écrire | écrivit | écrivirent |
| mourir | mourut | moururent |
| naître | naquit | naquirent |
| connaître | connut | connurent |
| lire | lut | lurent |
| boire | but | burent |

**Trekk i -u:** Mange uregelrette verb har stamme paa -u i passé simple: eut, fut, put, sut, voulut, dut, connut, lut, but.`,
    },
    {
      id: 'fransk-3-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjenkjenne passé simple',
      problem: `Identifiser verbene i passé simple og angi infinitiven:

*"Le roi entra dans la salle. Il vit la princesse et sourit. Elle lui dit: 'Bienvenue, Majesté.' Il s'assit et prit un verre de vin."*`,
      solution: `**Loesning:**

| Passé simple | Infinitiv | Norsk |
|-------------|-----------|-------|
| entra | entrer | gikk inn |
| vit | voir | saa |
| sourit | sourire | smilte |
| dit | dire | sa |
| s'assit | s'asseoir | satte seg |
| prit | prendre | tok |

Alle er i passé simple (3. person entall) og beskriver handlinger som driver fortellingen fremover.`,
    },
    {
      id: 'fransk-3-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Passé simple vs. imparfait i tekst',
      problem: `Forklar bruken av passé simple og imparfait i dette utdraget:

*"Il faisait nuit. La pluie tombait. Soudain, un homme apparut. Il portait un long manteau noir. Il frappa à la porte."*`,
      solution: `**Loesning:**

**Imparfait (bakgrunn/beskrivelse):**
- faisait (det var) - beskriver tidsrammen
- tombait (falt) - paagende handling (bakgrunn)
- portait (bar/hadde paa seg) - beskrivelse av utseende

**Passé simple (handling/forgrunn):**
- apparut (dukket opp) - plutselig handling
- frappa (banket paa) - konkret handling

Moenster: Imparfait setter scenen, passé simple driver handlingen.`,
    },
    {
      id: 'fransk-3-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Finn infinitiven til disse passé simple-formene:',
        subTasks: [
          { label: 'a', task: 'il fut', solution: 'être (il fut = han var/ble)' },
          { label: 'b', task: 'elle vint', solution: 'venir (elle vint = hun kom)' },
          { label: 'c', task: 'ils eurent', solution: 'avoir (ils eurent = de hadde)' },
          { label: 'd', task: 'il mourut', solution: 'mourir (il mourut = han doede)' },
        ],
        solution: 'a) être, b) venir, c) avoir, d) mourir',
        hints: ['fut = être', 'vint = venir (med -in-stamme)', 'eurent = avoir', 'mourut = mourir'],
      },
    },
    {
      id: 'fransk-3-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om fra passé composé til passé simple:',
        subTasks: [
          { label: 'a', task: 'Il a parlé au roi.', solution: 'Il parla au roi.' },
          { label: 'b', task: 'Elle est venue le soir.', solution: 'Elle vint le soir.' },
          { label: 'c', task: 'Ils ont fait une découverte.', solution: 'Ils firent une découverte.' },
          { label: 'd', task: 'Il a été surpris.', solution: 'Il fut surpris.' },
        ],
        solution: 'a) parla, b) vint, c) firent, d) fut',
        hints: ['parler → parla (1. gruppe)', 'venir → vint', 'faire → firent', 'être → fut'],
      },
    },
    {
      id: 'fransk-3-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les utdraget fra Camus\' "L\'Étranger" og identifiser alle passé simple-formene:',
        subTasks: [
          { label: 'a', task: '"Aujourd\'hui, maman est morte." - Er dette passé simple?', solution: 'Nei, "est morte" er passé composé. Camus bruker bevisst passé composé i stedet for passé simple for aa skape en naer, muntlig tone.' },
          { label: 'b', task: 'Hvorfor er det spesielt at Camus IKKE bruker passé simple?', solution: 'De fleste romaner foer Camus brukte passé simple. Ved aa bruke passé composé bryter Camus med tradisjonen og skaper en mer direkte, hverdagslig fortellerstemme.' },
          { label: 'c', task: 'Skriv om "maman est morte" til passé simple.', solution: '"maman mourut" - men dette ville endret hele tonen i teksten.' },
        ],
        solution: 'a) Nei, passé composé, b) Brudd med tradisjon, c) mourut',
        hints: ['est morte = passé composé (être + partisipp)', 'mourir → mourut i passé simple'],
      },
    },
    {
      id: 'fransk-3-1-1-tip-1',
      type: 'tip',
      content: `**Tips for passé simple:**

1. Du trenger foerst og fremst aa **gjenkjenne** formene, ikke produsere dem
2. De vanligste formene du moeter er 3. person (il/elle og ils/elles)
3. Endingene -a, -it, -ut hjelper deg aa gjenkjenne passé simple
4. I litteraer analyse: kommenter bruken av passé simple vs. passé composé
5. Husk at passé simple + imparfait brukes sammen, akkurat som passé composé + imparfait`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.2 Le passe anterieur - Fortidig pluskvamperfektum
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_1_2: TextbookChapter = {
  id: 'fransk-3-1-2',
  courseId: 'fransk-3',
  chapterNumber: '1.2',
  title: 'Le passé antérieur - Fortidig pluskvamperfektum',
  description: 'Laer om passé antérieur, den litteraere formen for "hadde gjort", brukt med passé simple.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjenkjenne passé antérieur i tekst',
    'forstaa forholdet mellom passé antérieur og passé simple',
  ],
  content: [
    {
      id: 'fransk-3-1-2-intro',
      type: 'text',
      content: `## Le passé antérieur

Passé antérieur er den litteraere versjonen av plus-que-parfait. Det brukes i skriftspraak sammen med passé simple for aa uttrykke en handling som skjedde FOER en annen fortidshandling.

**Dannelse:** avoir/être i **passé simple** + partisipp

| Med avoir | Med être |
|-----------|---------|
| j'eus mangé | je fus allé(e) |
| tu eus mangé | tu fus allé(e) |
| il eut mangé | il fut allé |
| nous eûmes mangé | nous fûmes allé(e)s |
| ils eurent mangé | ils furent allés |

**Sammenligning:**
| Dagligspraak | Litteraert spraak |
|-------------|-------------------|
| plus-que-parfait + passé composé | passé antérieur + passé simple |
| Il avait mangé quand je suis arrivé. | Il eut mangé quand j'arrivai. |`,
    },
    {
      id: 'fransk-3-1-2-def-1',
      type: 'definition',
      content: `**Bruk av passé antérieur:**

Passé antérieur brukes nesten utelukkende etter tidskonjunksjoner:

| Konjunksjon | Norsk | Eksempel |
|-------------|-------|----------|
| quand | naar/da | Quand il **eut fini**, il sortit. |
| lorsque | naar/da | Lorsqu'elle **fut arrivée**, il parla. |
| dès que | saa snart | Dès qu'il **eut compris**, il agit. |
| après que | etter at | Après qu'il **eut mangé**, il partit. |
| aussitôt que | saa snart som | Aussitôt qu'elle **eut vu**, elle cria. |
| à peine...que | knapt...foer | À peine **eut**-il parlé **que** tout le monde se tut. |

**Merk:** "À peine...que" krever inversjon: *À peine eut-il parlé que...*`,
    },
    {
      id: 'fransk-3-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Passé antérieur i tekst',
      problem: `Les og oversett. Identifiser passé antérieur:

*"Dès que le soleil eut disparu derrière les montagnes, le froid s'installa. Les voyageurs qui eurent trouvé un abri s'endormirent rapidement."*`,
      solution: `**Loesning:**

- **eut disparu** (passé antérieur av disparaître) = hadde forsvunnet
- **eurent trouvé** (passé antérieur av trouver) = hadde funnet

**Oversettelse:** Saa snart solen hadde forsvunnet bak fjellene, satte kulden inn. Reisende som hadde funnet ly, sovnet raskt.

Passé antérieur markerer handlinger fullfoert FOER handlingene i passé simple (s'installa, s'endormirent).`,
    },
    {
      id: 'fransk-3-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser passé antérieur og oversett:',
        subTasks: [
          { label: 'a', task: 'Quand il eut fini son repas, il sortit.', solution: 'eut fini = passé antérieur av finir. "Da han hadde avsluttet maaltidet, gikk han ut."' },
          { label: 'b', task: 'Dès qu\'elle fut partie, il pleura.', solution: 'fut partie = passé antérieur av partir. "Saa snart hun hadde dratt, graat han."' },
          { label: 'c', task: 'À peine eut-il parlé que tout changea.', solution: 'eut parlé = passé antérieur av parler. "Knapt hadde han snakket foer alt endret seg."' },
        ],
        solution: 'a) eut fini (finir), b) fut partie (partir), c) eut parlé (parler)',
        hints: ['eut + partisipp = passé antérieur med avoir', 'fut + partisipp = passé antérieur med être'],
      },
    },
    {
      id: 'fransk-3-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om fra plus-que-parfait + passé composé til passé antérieur + passé simple:',
        subTasks: [
          { label: 'a', task: 'Quand il avait mangé, il est sorti.', solution: 'Quand il eut mangé, il sortit.' },
          { label: 'b', task: 'Dès qu\'elle était arrivée, nous avons commencé.', solution: 'Dès qu\'elle fut arrivée, nous commençâmes.' },
          { label: 'c', task: 'Après qu\'ils avaient fini, ils sont partis.', solution: 'Après qu\'ils eurent fini, ils partirent.' },
        ],
        solution: 'a) eut mangé, sortit, b) fut arrivée, commençâmes, c) eurent fini, partirent',
        hints: ['avoir (imparfait) → avoir (passé simple): avait → eut', 'être (imparfait) → être (passé simple): était → fut'],
      },
    },
    {
      id: 'fransk-3-1-2-tip-1',
      type: 'tip',
      content: `**Tips for passé antérieur:**

1. Du trenger foerst og fremst aa **gjenkjenne** det i tekst
2. Se etter: eut/eûmes/eurent + partisipp ELLER fut/fûmes/furent + partisipp
3. Det forekommer nesten alltid etter quand, lorsque, dès que, après que
4. I moderne tekster brukes plus-que-parfait + passé composé i stedet
5. Passé antérieur + passé simple = litteraert register (soutenu)`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.3 Le subjonctif present - Konjunktiv presens (repetisjon og utvidelse)
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_1_3: TextbookChapter = {
  id: 'fransk-3-1-3',
  courseId: 'fransk-3',
  chapterNumber: '1.3',
  title: 'Le subjonctif présent - Konjunktiv presens',
  description: 'Repetisjon og utvidelse av subjonctif présent med fullstendig oversikt over bruksomraader og uregelrette verb.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beherske alle bruksomraader for subjonctif',
    'boye uregelrette verb i subjonctif',
    'skille mellom subjonctif og indikativ etter ulike uttrykk',
  ],
  content: [
    {
      id: 'fransk-3-1-3-intro',
      type: 'text',
      content: `## Le subjonctif présent - Fullstendig oversikt

Subjonctif er en modus (ikke en tid) som uttrykker subjektivitet: oensker, foelelser, tvil, noedvendighet. Paa nivaa 3 maa du beherske subjonctif fullt ut.

**Dannelse (repetisjon):**
Stamme fra ils/elles-formen i presens + endinger: -e, -es, -e, -ions, -iez, -ent

| Pronom | Parler (ils parlent → parl-) | Finir (ils finissent → finiss-) |
|--------|------------------------------|--------------------------------|
| que je | parle | finisse |
| que tu | parles | finisses |
| qu'il | parle | finisse |
| que nous | parlions | finissions |
| que vous | parliez | finissiez |
| qu'ils | parlent | finissent |`,
    },
    {
      id: 'fransk-3-1-3-def-1',
      type: 'definition',
      content: `**Uregelrette verb i subjonctif:**

| Infinitiv | Subjonctif (que je/il) | Subjonctif (que nous) |
|-----------|----------------------|----------------------|
| être | sois / soit | soyons |
| avoir | aie / ait | ayons |
| aller | aille / aille | allions |
| faire | fasse / fasse | fassions |
| pouvoir | puisse / puisse | puissions |
| savoir | sache / sache | sachions |
| vouloir | veuille / veuille | voulions |
| venir | vienne / vienne | venions |
| prendre | prenne / prenne | prenions |
| devoir | doive / doive | devions |
| falloir | - / faille | - |
| pleuvoir | - / pleuve | - |

**Merk:** Noen verb har to stammer: en for je/tu/il/ils og en annen for nous/vous.`,
    },
    {
      id: 'fransk-3-1-3-text-1',
      type: 'text',
      content: `## Fullstendig oversikt over bruksomraader

**1. Vilje og oenske:**
- vouloir que, souhaiter que, désirer que, préférer que, exiger que
- *Je veux que tu **viennes**.* (Jeg vil at du skal komme.)

**2. Foelelser:**
- être content/triste/surpris/déçu que, avoir peur que, regretter que
- *Je suis content que tu **sois** là.* (Jeg er glad for at du er her.)

**3. Tvil og usikkerhet:**
- douter que, ne pas croire que, ne pas penser que, il est possible que
- *Je doute qu'il **puisse** venir.* (Jeg tviler paa at han kan komme.)

**4. Noedvendighet og vurdering:**
- il faut que, il est nécessaire/important/essentiel que
- *Il faut que nous **partions**.* (Vi maa dra.)

**5. Konjunksjoner:**
- bien que (selv om), pour que (for at), avant que (foer), sans que (uten at)
- à condition que (paa betingelse av at), à moins que (med mindre)
- *Bien qu'il **fasse** froid, je sors.* (Selv om det er kaldt, gaar jeg ut.)

**6. Superlativ og eneste:**
- le plus/le seul/le premier... que
- *C'est le meilleur film que j'**aie** vu.* (Det er den beste filmen jeg har sett.)`,
    },
    {
      id: 'fransk-3-1-3-text-2',
      type: 'text',
      content: `## Subjonctif vs. Indikativ - Naar brukes HVA?

| SUBJONCTIF | INDIKATIV |
|------------|-----------|
| Je ne crois **pas** que... (tvil) | Je crois que... (overbevisning) |
| Il est possible que... | Il est certain que... |
| Bien que... | Parce que... |
| Pour que... | De sorte que... (+ resultat) |
| Avant que... | Après que... |
| Il semble que... | Il me semble que... |

**Noekkelprinspipp:** Subjonctif = usikkerhet, subjektivitet
Indikativ = sikkerhet, objektivitet

**Viktig:** Etter "après que" brukes INDIKATIV (ikke subjonctif), selv om mange franskmenn gjoer feil her!`,
    },
    {
      id: 'fransk-3-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Velg subjonctif eller indikativ',
      problem: `Velg riktig form:

a) Je suis sûr qu'il (venir: vient/vienne).
b) Il est possible qu'il (pleuvoir: pleut/pleuve) demain.
c) Bien qu'elle (être: est/soit) fatiguée, elle travaille.
d) Je crois qu'il (avoir: a/ait) raison.`,
      solution: `**Loesning:**

a) Je suis sûr qu'il **vient**. (INDIKATIV - sikkerhet)
b) Il est possible qu'il **pleuve** demain. (SUBJONCTIF - mulighet)
c) Bien qu'elle **soit** fatiguée, elle travaille. (SUBJONCTIF - konjunksjon)
d) Je crois qu'il **a** raison. (INDIKATIV - tro/overbevisning)`,
    },
    {
      id: 'fransk-3-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbet i subjonctif:',
        subTasks: [
          { label: 'a', task: 'Il faut que tu (faire) tes devoirs.', solution: 'Il faut que tu fasses tes devoirs.' },
          { label: 'b', task: 'Je veux que vous (être) à l\'heure.', solution: 'Je veux que vous soyez à l\'heure.' },
          { label: 'c', task: 'Bien qu\'il (pleuvoir), nous sortirons.', solution: 'Bien qu\'il pleuve, nous sortirons.' },
          { label: 'd', task: 'Je souhaite qu\'elle (pouvoir) venir.', solution: 'Je souhaite qu\'elle puisse venir.' },
        ],
        solution: 'a) fasses, b) soyez, c) pleuve, d) puisse',
        hints: ['faire → fasse', 'être → sois/soit/soyons/soyez/soient', 'pleuvoir → pleuve', 'pouvoir → puisse'],
      },
    },
    {
      id: 'fransk-3-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg subjonctif (S) eller indikativ (I) og boey verbet:',
        subTasks: [
          { label: 'a', task: 'Je pense qu\'il (être) malade. (S/I?)', solution: 'Je pense qu\'il est malade. (INDIKATIV - penser que = sikkerhet)' },
          { label: 'b', task: 'Je ne pense pas qu\'il (être) malade. (S/I?)', solution: 'Je ne pense pas qu\'il soit malade. (SUBJONCTIF - ne pas penser que = tvil)' },
          { label: 'c', task: 'Avant qu\'il (partir), dis-lui au revoir. (S/I?)', solution: 'Avant qu\'il parte, dis-lui au revoir. (SUBJONCTIF - avant que)' },
          { label: 'd', task: 'Après qu\'il (partir), nous avons mangé. (S/I?)', solution: 'Après qu\'il est parti, nous avons mangé. (INDIKATIV - après que)' },
        ],
        solution: 'a) est (I), b) soit (S), c) parte (S), d) est parti (I)',
        hints: ['Nektelse av croire/penser → subjonctif', 'avant que → subjonctif', 'après que → indikativ'],
      },
    },
    {
      id: 'fransk-3-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med subjonctif:',
        subTasks: [
          { label: 'a', task: 'Det er noedvendig at vi studerer.', solution: 'Il est nécessaire que nous étudiions.' },
          { label: 'b', task: 'Selv om han er intelligent, forstaar han ikke.', solution: 'Bien qu\'il soit intelligent, il ne comprend pas.' },
          { label: 'c', task: 'Jeg er redd for at de ikke kan komme.', solution: 'J\'ai peur qu\'ils ne puissent pas venir.' },
        ],
        solution: 'a) que nous étudiions, b) qu\'il soit, c) qu\'ils ne puissent pas',
        hints: ['Il est nécessaire que + subjonctif', 'Bien que + subjonctif', 'Avoir peur que + subjonctif'],
      },
    },
    {
      id: 'fransk-3-1-3-tip-1',
      type: 'tip',
      content: `**Tips for subjonctif paa eksamen:**

1. Vis at du mestrer subjonctif i skriftlige besvarelser - det imponerer!
2. Bruk gjerne "bien que + subjonctif" for innroemmelse
3. Husk: Samme subjekt = infinitiv, ulike subjekter = subjonctif
   - Je veux partir. (samme subjekt → infinitiv)
   - Je veux que tu partes. (ulike subjekter → subjonctif)
4. Laer de uregelrette formene utenat: soit, ait, fasse, puisse, sache, aille`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 1.4 Le subjonctif passe - Konjunktiv perfektum
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_1_4: TextbookChapter = {
  id: 'fransk-3-1-4',
  courseId: 'fransk-3',
  chapterNumber: '1.4',
  title: 'Le subjonctif passé - Konjunktiv perfektum',
  description: 'Laer aa danne og bruke subjonctif passé for fortidshandlinger i leddsetninger som krever subjonctif.',
  estimatedMinutes: 50,
  competenceGoals: [
    'danne subjonctif passé korrekt',
    'bruke subjonctif passé for fullfoerte handlinger',
    'skille mellom subjonctif présent og passé',
  ],
  content: [
    {
      id: 'fransk-3-1-4-intro',
      type: 'text',
      content: `## Le subjonctif passé

Subjonctif passé uttrykker en **fullfoert handling** i en leddsetning som krever subjonctif. Det tilsvarer "har gjort" i en subjonctif-kontekst.

**Dannelse:** avoir/être i **subjonctif présent** + partisipp

| Med avoir | Med être |
|-----------|---------|
| que j'aie mangé | que je sois allé(e) |
| que tu aies mangé | que tu sois allé(e) |
| qu'il ait mangé | qu'il soit allé |
| que nous ayons mangé | que nous soyons allé(e)s |
| que vous ayez mangé | que vous soyez allé(e)(s) |
| qu'ils aient mangé | qu'ils soient allés |`,
    },
    {
      id: 'fransk-3-1-4-def-1',
      type: 'definition',
      content: `**Naar brukes subjonctif passé?**

Naar handlingen i leddsetningen er **fullfoert/avsluttet** i forhold til hovedsetningen:

| Subjonctif présent (paagende/framtidig) | Subjonctif passé (fullfoert) |
|----------------------------------------|------------------------------|
| Je suis content qu'il **vienne**. | Je suis content qu'il **soit venu**. |
| (Jeg er glad for at han kommer.) | (Jeg er glad for at han har kommet.) |
| Il faut que tu **finisses**. | Il faut que tu **aies fini** avant midi. |
| (Du maa fullfoere.) | (Du maa ha fullfoert foer kl. 12.) |

**Regler:**
- Handlingen har skjedd FOER hovedsetningens tidspunkt → subjonctif passé
- Handlingen skjer SAMTIDIG eller ETTER → subjonctif présent`,
    },
    {
      id: 'fransk-3-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Subjonctif présent vs. passé',
      problem: `Velg subjonctif présent eller passé:

a) Je regrette que tu (ne pas venir) hier.
b) Il faut que vous (finir) avant ce soir.
c) Je doute qu'il (comprendre) la leçon d'hier.
d) Bien qu'elle (être) malade hier, elle vient aujourd'hui.`,
      solution: `**Loesning:**

a) Je regrette que tu **ne sois pas venu(e)** hier. (PASSE - fullfoert handling i gaar)
b) Il faut que vous **finissiez** avant ce soir. (PRESENT - handlingen er ikke fullfoert ennaa)
c) Je doute qu'il **ait compris** la leçon d'hier. (PASSE - gaardagens leksjon)
d) Bien qu'elle **ait été** malade hier, elle vient aujourd'hui. (PASSE - hun var syk i gaar)`,
    },
    {
      id: 'fransk-3-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i subjonctif passé:',
        subTasks: [
          { label: 'a', task: 'Je suis content que vous (venir) hier.', solution: 'Je suis content que vous soyez venu(e)(s) hier.' },
          { label: 'b', task: 'Il est dommage qu\'elle (ne pas pouvoir) participer.', solution: 'Il est dommage qu\'elle n\'ait pas pu participer.' },
          { label: 'c', task: 'Bien qu\'il (pleuvoir) toute la journée, nous sommes sortis.', solution: 'Bien qu\'il ait plu toute la journée, nous sommes sortis.' },
        ],
        solution: 'a) soyez venu(e)(s), b) n\'ait pas pu, c) ait plu',
        hints: ['venir → être (subj.) + venu', 'pouvoir → avoir (subj.) + pu', 'pleuvoir → avoir (subj.) + plu'],
      },
    },
    {
      id: 'fransk-3-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-1-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med subjonctif passé:',
        subTasks: [
          { label: 'a', task: 'Jeg tviler paa at han har forstaaatt.', solution: 'Je doute qu\'il ait compris.' },
          { label: 'b', task: 'Det er den beste boken jeg har lest.', solution: 'C\'est le meilleur livre que j\'aie lu.' },
          { label: 'c', task: 'Selv om de hadde proevd, klarte de det ikke.', solution: 'Bien qu\'ils aient essayé, ils n\'ont pas réussi.' },
        ],
        solution: 'a) ait compris, b) que j\'aie lu, c) qu\'ils aient essayé',
        hints: ['douter que + subjonctif passé', 'Etter superlativ: le meilleur... que + subjonctif', 'Bien que + subjonctif passé for fullfoert handling'],
      },
    },
    {
      id: 'fransk-3-1-4-note-1',
      type: 'note',
      content: `**Oppsummering kapittel 1 - Avanserte tider:**

| Tid | Dannelse | Bruk | Register |
|-----|----------|------|---------|
| **Passé simple** | Spesielle endinger | Fullfoert fortidshandling | Litteraert |
| **Passé antérieur** | avoir/être (p. simple) + partisipp | Foer annen litteraer fortid | Litteraert |
| **Subjonctif présent** | ils-stamme + -e/-es/-e/-ions/-iez/-ent | Subjektivitet (paagende) | Alle |
| **Subjonctif passé** | avoir/être (subj.) + partisipp | Subjektivitet (fullfoert) | Alle |`,
    },
    {
      id: 'fransk-3-1-4-tip-1',
      type: 'tip',
      content: `**Tips for eksamen:**

1. **Passé simple:** Gjenkjenn det i tekster, bruk det i egne litteraere besvarelser for aa vise avansert nivaa
2. **Subjonctif passé:** Bruk det etter "c'est le meilleur... que" og "bien que" + fullfoert handling
3. Vis at du behersker ulike register - bruk passé simple i analyse, subjonctif i argumentasjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: SUBJONCTIF OG PASSIV
// ============================================================================

// ----------------------------------------------------------------------------
// 2.1 Le subjonctif imparfait - Konjunktiv imperfektum
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_2_1: TextbookChapter = {
  id: 'fransk-3-2-1',
  courseId: 'fransk-3',
  chapterNumber: '2.1',
  title: 'Le subjonctif imparfait - Konjunktiv imperfektum',
  description: 'Laer om den litteraere formen av subjonctif imperfektum og dens bruk i klassisk litteratur.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjenkjenne subjonctif imparfait i litteraere tekster',
    'forstaa tidsharmoni i subjonctif (litteraert register)',
  ],
  content: [
    {
      id: 'fransk-3-2-1-intro',
      type: 'text',
      content: `## Le subjonctif imparfait

Subjonctif imparfait er en litteraer form som brukes i formelt skriftspraak. I moderne muntlig og hverdagslig skriftlig fransk brukes subjonctif présent i stedet.

**Dannelse:** Basert paa passé simple, 2. person entall + endinger:

| Passé simple (tu) | → Subjonctif imparfait |
|-------------------|----------------------|
| tu parl**as** | que je parlasse, qu'il parlât |
| tu fin**is** | que je finisse, qu'il finît |
| tu vend**is** | que je vendisse, qu'il vendît |
| tu **eus** | que j'eusse, qu'il eût |
| tu **fus** | que je fusse, qu'il fût |

**Boyning av parler:**
| Pronom | Subjonctif imparfait |
|--------|---------------------|
| que je | parlasse |
| que tu | parlasses |
| qu'il/elle | parlât |
| que nous | parlassions |
| que vous | parlassiez |
| qu'ils/elles | parlassent |`,
    },
    {
      id: 'fransk-3-2-1-def-1',
      type: 'definition',
      content: `**Vanlige former i subjonctif imparfait:**

| Infinitiv | qu'il/elle (subj. imp.) | Norsk |
|-----------|------------------------|-------|
| être | fût | var/vaere |
| avoir | eût | hadde/ha |
| faire | fît | gjorde/gjoere |
| pouvoir | pût | kunne |
| savoir | sût | visste/vite |
| venir | vînt | kom/komme |
| aller | allât | gikk/gaa |
| prendre | prît | tok/ta |

**Kjennetegn:** Accent circonflexe (^) paa 3. person entall: parlât, fût, eût, fît

**Moderne bruk:** I dag finner man subjonctif imparfait nesten bare i:
- Klassisk litteratur (Flaubert, Proust, etc.)
- Veldig formelle juridiske tekster
- Humor (det kan virke pedantisk i dagligspraak)`,
    },
    {
      id: 'fransk-3-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjenkjenne subjonctif imparfait',
      problem: `Identifiser subjonctif imparfait i disse litteraere sitatene:

a) *"Il fallait qu'il partît avant l'aube."* (Flaubert)
b) *"Je souhaitais qu'elle fût heureuse."*
c) *"Bien qu'il eût beaucoup d'argent, il vivait simplement."*`,
      solution: `**Loesning:**

a) **partît** = subjonctif imparfait av partir (fallait = fortid → litteraer tidsharmoni)
b) **fût** = subjonctif imparfait av être (souhaitais = fortid → litteraer tidsharmoni)
c) **eût** = subjonctif imparfait av avoir (vel egentlig subjonctif plus-que-parfait her)

I moderne fransk ville disse vaert:
a) Il fallait qu'il parte...
b) Je souhaitais qu'elle soit heureuse.
c) Bien qu'il ait eu beaucoup d'argent...`,
    },
    {
      id: 'fransk-3-2-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser infinitiven og skriv om til moderne subjonctif présent:',
        subTasks: [
          { label: 'a', task: 'qu\'il parlât →', solution: 'parlât = parler → qu\'il parle (subjonctif présent)' },
          { label: 'b', task: 'qu\'elle fût →', solution: 'fût = être → qu\'elle soit (subjonctif présent)' },
          { label: 'c', task: 'qu\'il pût →', solution: 'pût = pouvoir → qu\'il puisse (subjonctif présent)' },
          { label: 'd', task: 'qu\'il fît →', solution: 'fît = faire → qu\'il fasse (subjonctif présent)' },
        ],
        solution: 'a) parle, b) soit, c) puisse, d) fasse',
        hints: ['Accent circonflexe paa 3. person = subjonctif imparfait', 'Finn passé simple-formen for aa identifisere verbet'],
      },
    },
    {
      id: 'fransk-3-2-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Les utdraget og oversett. Identifiser alle subjonctif-former:',
        subTasks: [
          { label: 'a', task: '"Le roi ordonna qu\'on amenât le prisonnier et qu\'il fût jugé." - Hvilke verb er i subjonctif imparfait?', solution: 'amenât (amener) og fût jugé (être jugé). "Kongen beordret at fangen skulle foeres frem og doemmes."' },
          { label: 'b', task: 'Skriv om til moderne fransk.', solution: '"Le roi a ordonné qu\'on amène le prisonnier et qu\'il soit jugé."' },
        ],
        solution: 'a) amenât, fût jugé; b) amène, soit jugé',
        hints: ['ordonna = passé simple av ordonner', '-ât endingen = subjonctif imparfait av 1. gruppe'],
      },
    },
    {
      id: 'fransk-3-2-1-tip-1',
      type: 'tip',
      content: `**Tips for subjonctif imparfait:**

1. Du trenger bare aa **gjenkjenne** det, ikke skrive det selv
2. Se etter accent circonflexe paa 3. person: -ât, -ît, -ût
3. I tekstanalyse: kommenter det som et tegn paa litteraert register (soutenu)
4. I moderne fransk brukes subjonctif présent uansett tid paa hovedverbet`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.2 La concordance des temps au subjonctif
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_2_2: TextbookChapter = {
  id: 'fransk-3-2-2',
  courseId: 'fransk-3',
  chapterNumber: '2.2',
  title: 'La concordance des temps au subjonctif',
  description: 'Laer om tidsharmoni i subjonctif - moderne vs. litteraer bruk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstaa moderne og litteraer tidsharmoni i subjonctif',
    'velge riktig subjonctif-form basert paa kontekst',
  ],
  content: [
    {
      id: 'fransk-3-2-2-intro',
      type: 'text',
      content: `## La concordance des temps au subjonctif

Tidsharmoni handler om aa velge riktig tid i leddsetningen basert paa tiden i hovedsetningen.

**Moderne fransk (courant):**

| Hovedsetning | Leddsetning (samtidig/framtidig) | Leddsetning (foertidig) |
|-------------|--------------------------------|------------------------|
| Presens | subjonctif présent | subjonctif passé |
| Fortid | subjonctif présent | subjonctif passé |

**Litteraert fransk (soutenu):**

| Hovedsetning | Leddsetning (samtidig/framtidig) | Leddsetning (foertidig) |
|-------------|--------------------------------|------------------------|
| Presens | subjonctif présent | subjonctif passé |
| Fortid | subjonctif imparfait | subjonctif plus-que-parfait |`,
    },
    {
      id: 'fransk-3-2-2-def-1',
      type: 'definition',
      content: `**Eksempler paa tidsharmoni:**

**Moderne (standard):**
- Je veux qu'il **vienne**. (Jeg vil at han skal komme.) - presens → subj. présent
- Je voulais qu'il **vienne**. (Jeg ville at han skulle komme.) - fortid → subj. présent (!)
- Je suis content qu'il **soit venu**. (Jeg er glad for at han har kommet.) - subj. passé
- J'étais content qu'il **soit venu**. (Jeg var glad for at han hadde kommet.) - subj. passé (!)

**Litteraert:**
- Je voulais qu'il **vînt**. (subj. imparfait - samtidig)
- J'étais content qu'il **fût venu**. (subj. plus-que-parfait - foertidig)

**Subjonctif plus-que-parfait:** avoir/être i subjonctif imparfait + partisipp
- qu'il eût mangé, qu'il fût venu`,
    },
    {
      id: 'fransk-3-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Moderne vs. litteraer tidsharmoni',
      problem: `Skriv i bade moderne og litteraert register:

a) Jeg ville at han skulle komme.
b) Jeg var overrasket over at hun hadde gaatt.
c) Han beordret at vi skulle dra.`,
      solution: `**Loesning:**

a) **Moderne:** Je voulais qu'il **vienne**.
   **Litteraert:** Je voulais qu'il **vînt**.

b) **Moderne:** J'étais surpris qu'elle **soit partie**.
   **Litteraert:** J'étais surpris qu'elle **fût partie**.

c) **Moderne:** Il a ordonné que nous **partions**.
   **Litteraert:** Il ordonna que nous **partissions**.`,
    },
    {
      id: 'fransk-3-2-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig subjonctif-form (moderne register):',
        subTasks: [
          { label: 'a', task: 'Je veux qu\'il (venir). → présent/passé?', solution: 'Je veux qu\'il vienne. (Subj. présent - samtidig med hovedsetningen)' },
          { label: 'b', task: 'Je regrette qu\'il (partir) hier. → présent/passé?', solution: 'Je regrette qu\'il soit parti hier. (Subj. passé - handlingen er fullfoert)' },
          { label: 'c', task: 'Je voulais qu\'elle (comprendre). → présent/passé?', solution: 'Je voulais qu\'elle comprenne. (Subj. présent - moderne, selv med fortid i hovedsetning)' },
        ],
        solution: 'a) vienne (présent), b) soit parti (passé), c) comprenne (présent)',
        hints: ['Samtidig/framtidig → subj. présent', 'Fullfoert → subj. passé', 'Moderne: alltid subj. présent/passé uansett hovedsetningens tid'],
      },
    },
    {
      id: 'fransk-3-2-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Identifiser tidsharmonien i disse litteraere eksemplene:',
        subTasks: [
          { label: 'a', task: '"Il fallait qu\'il partît." - Hvilken tidsharmoni?', solution: 'Litteraer tidsharmoni: hovedsetning i fortid (fallait) + subjonctif imparfait (partît) for samtidig handling.' },
          { label: 'b', task: '"Elle doutait qu\'il eût compris." - Hvilken tidsharmoni?', solution: 'Litteraer tidsharmoni: hovedsetning i fortid (doutait) + subjonctif plus-que-parfait (eût compris) for foertidig handling.' },
          { label: 'c', task: 'Skriv om begge til moderne fransk.', solution: 'a) Il fallait qu\'il parte. b) Elle doutait qu\'il ait compris.' },
        ],
        solution: 'a) Litteraer: fortid + subj. imparfait, b) Litteraer: fortid + subj. pqp, c) parte / ait compris',
        hints: ['Subj. imparfait = litteraer versjon av subj. présent etter fortid', 'Subj. pqp = litteraer versjon av subj. passé etter fortid'],
      },
    },
    {
      id: 'fransk-3-2-2-tip-1',
      type: 'tip',
      content: `**Tips for tidsharmoni:**

1. I moderne fransk: bruk ALLTID subjonctif présent eller passé - uansett tid i hovedsetningen
2. I tekstanalyse: gjenkjenn litteraer tidsharmoni og kommenter registeret
3. Paa eksamen: bruk moderne tidsharmoni i egne tekster (med mindre du bevisst vil skrive litteraert)
4. Subjonctif plus-que-parfait = avoir/être (subj. imp.) + partisipp: qu'il eût mangé, qu'il fût venu`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.3 La voix passive - Passiv form
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_2_3: TextbookChapter = {
  id: 'fransk-3-2-3',
  courseId: 'fransk-3',
  chapterNumber: '2.3',
  title: 'La voix passive - Passiv form',
  description: 'Laer aa danne og bruke passiv form i alle tider, og naar passiv er hensiktsmessig.',
  estimatedMinutes: 50,
  competenceGoals: [
    'danne passiv form i alle tider',
    'omforme mellom aktiv og passiv',
    'kjenne til alternativer til passiv (on, se faire)',
  ],
  content: [
    {
      id: 'fransk-3-2-3-intro',
      type: 'text',
      content: `## La voix passive - Passiv form

Passiv setter fokus paa handlingens mottaker i stedet for utfoereren.

**Dannelse:** être (i riktig tid) + partisipp (samsvarsboeyd)

| Aktiv | Passiv |
|-------|--------|
| Le chat mange la souris. | La souris **est mangée** par le chat. |
| (Katten spiser musen.) | (Musen blir spist av katten.) |

**Passiv i ulike tider:**

| Tid | Aktiv (il mange) | Passiv (il est mangé) |
|-----|-------------------|----------------------|
| Présent | mange | est mangé |
| Passé composé | a mangé | a été mangé |
| Imparfait | mangeait | était mangé |
| Futur | mangera | sera mangé |
| Conditionnel | mangerait | serait mangé |
| Plus-que-parfait | avait mangé | avait été mangé |`,
    },
    {
      id: 'fransk-3-2-3-def-1',
      type: 'definition',
      content: `**Agent: par vs. de**

Utfoereren i passiv angis med **par** (av) eller noen ganger **de**:

**Par** (vanligst):
- Le livre est lu **par** les étudiants. (Boken leses av studentene.)
- La maison a été construite **par** mon père. (Huset ble bygget av faren min.)

**De** (med visse verb - foelelser, tilstander):
- Il est aimé **de** tous. (Han er elsket av alle.)
- Elle est respectée **de** ses collègues. (Hun er respektert av kollegene.)
- La ville est entourée **de** montagnes. (Byen er omgitt av fjell.)

**Naar bruke passiv:**
- Naar utfoereren er ukjent: *Le magasin **a été cambriolé**.* (Butikken ble ranet.)
- Naar fokus er paa mottakeren: *Ce roman **a été écrit** en 1857.* (Denne romanen ble skrevet i 1857.)
- I formelt/akademisk spraak`,
    },
    {
      id: 'fransk-3-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Aktiv til passiv',
      problem: `Skriv om til passiv:

a) Victor Hugo a écrit Les Misérables.
b) Le professeur corrige les examens.
c) On construira un nouveau musée.`,
      solution: `**Loesning:**

a) Les Misérables **ont été écrits** par Victor Hugo. (passé composé passiv)
b) Les examens **sont corrigés** par le professeur. (présent passiv)
c) Un nouveau musée **sera construit**. (futur passiv - "on" forsvinner)

**Merk:** Partisippet samsvarsboeyes med det nye subjektet!`,
    },
    {
      id: 'fransk-3-2-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om til passiv:',
        subTasks: [
          { label: 'a', task: 'Gustave Eiffel a construit la Tour Eiffel.', solution: 'La Tour Eiffel a été construite par Gustave Eiffel.' },
          { label: 'b', task: 'Les élèves lisent le livre.', solution: 'Le livre est lu par les élèves.' },
          { label: 'c', task: 'On vendra cette maison.', solution: 'Cette maison sera vendue.' },
        ],
        solution: 'a) a été construite, b) est lu, c) sera vendue',
        hints: ['Samsvarsboyning: construite (hunkjoenn), lu (hankjoenn), vendue (hunkjoenn)'],
      },
    },
    {
      id: 'fransk-3-2-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om fra passiv til aktiv:',
        subTasks: [
          { label: 'a', task: 'Le gâteau a été mangé par les enfants.', solution: 'Les enfants ont mangé le gâteau.' },
          { label: 'b', task: 'La lettre sera envoyée demain.', solution: 'On enverra la lettre demain.' },
          { label: 'c', task: 'Ce tableau est admiré de tous.', solution: 'Tous admirent ce tableau.' },
        ],
        solution: 'a) Les enfants ont mangé, b) On enverra, c) Tous admirent',
        hints: ['Finn agenten (par/de) - det blir subjektet i aktiv', 'Uten agent: bruk "on"'],
      },
    },
    {
      id: 'fransk-3-2-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med passiv:',
        subTasks: [
          { label: 'a', task: 'Denne boken ble skrevet i 1857.', solution: 'Ce livre a été écrit en 1857.' },
          { label: 'b', task: 'Fransk snakkes i mange land.', solution: 'Le français est parlé dans beaucoup de pays.' },
          { label: 'c', task: 'Museet vil bli aapnet neste aar.', solution: 'Le musée sera ouvert l\'année prochaine.' },
        ],
        solution: 'a) a été écrit, b) est parlé, c) sera ouvert',
        hints: ['ble skrevet = passé composé passiv', 'snakkes = présent passiv', 'vil bli aapnet = futur passiv'],
      },
    },
    {
      id: 'fransk-3-2-3-tip-1',
      type: 'tip',
      content: `**Alternativer til passiv i fransk:**

1. **On** + aktiv: On parle français ici. (Fransk snakkes her.)
2. **Se faire** + infinitiv: Il s'est fait voler. (Han ble ranet.)
3. **Pronominalt verb:** Ce livre se lit facilement. (Denne boken lar seg lett lese.)

Fransk bruker passiv mindre enn norsk. I dagligtale foretrekkes ofte "on" eller pronominal konstruksjon.`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 2.4 Les constructions impersonnelles et la mise en relief
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_2_4: TextbookChapter = {
  id: 'fransk-3-2-4',
  courseId: 'fransk-3',
  chapterNumber: '2.4',
  title: 'Constructions impersonnelles et mise en relief',
  description: 'Laer om upersonlige konstruksjoner og framhevingsstrukturer for aa variere setningene dine.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke upersonlige konstruksjoner korrekt',
    'beherske c\'est...qui/que for framheving',
    'variere setningsstrukturer i skriftlige tekster',
  ],
  content: [
    {
      id: 'fransk-3-2-4-intro',
      type: 'text',
      content: `## Les constructions impersonnelles

Upersonlige konstruksjoner begynner med **il** (upersonlig) og kan ikke ha et annet subjekt:

**Vaer og natur:**
- Il pleut. (Det regner.) / Il neige. (Det snoer.) / Il fait froid. (Det er kaldt.)

**Noedvendighet og vurdering:**
- Il faut + infinitiv/que + subjonctif (Man maa...)
- Il est + adjektiv + de + infinitiv (Det er... aa...)
- Il est + adjektiv + que + subjonctif/indikativ

| Konstruksjon | Eksempel |
|-------------|----------|
| Il est important **de** + infinitiv | Il est important **de** travailler. |
| Il est important **que** + subjonctif | Il est important **que** tu travailles. |
| Il est certain **que** + indikativ | Il est certain **qu'**il viendra. |
| Il est possible **que** + subjonctif | Il est possible **qu'**il vienne. |
| Il semble **que** + subjonctif | Il semble **qu'**il soit malade. |
| Il me semble **que** + indikativ | Il me semble **qu'**il est malade. |`,
    },
    {
      id: 'fransk-3-2-4-def-1',
      type: 'definition',
      content: `## La mise en relief - Framheving

**C'est...qui/que** brukes for aa framheve en del av setningen:

| Normal | Framhevet |
|--------|-----------|
| Marie parle. | **C'est Marie qui** parle. (Det er Marie som snakker.) |
| Je vois Pierre. | **C'est Pierre que** je vois. (Det er Pierre jeg ser.) |
| Il habite à Paris. | **C'est à Paris qu'**il habite. (Det er i Paris han bor.) |
| Il est venu hier. | **C'est hier qu'**il est venu. (Det var i gaar han kom.) |

**Regler:**
- **C'est...qui** framhever subjektet
- **C'est...que** framhever objekt, sted, tid, etc.
- Flertall: **Ce sont...qui/que** (formelt) eller **C'est...qui/que** (uformelt)

**Andre framhevingsmaater:**
- **Ce qui...c'est:** Ce qui m'intéresse, c'est la musique. (Det som interesserer meg, er musikk.)
- **Ce que...c'est:** Ce que je veux, c'est partir. (Det jeg vil, er aa dra.)`,
    },
    {
      id: 'fransk-3-2-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Framheving',
      problem: `Framhev det understrekede ordet med c'est...qui/que:

a) **Pierre** a gagné le match.
b) J'ai acheté **ce livre** hier.
c) Nous sommes allés **en France** l'été dernier.`,
      solution: `**Loesning:**

a) **C'est Pierre qui** a gagné le match. (subjekt → qui)
b) **C'est ce livre que** j'ai acheté hier. (objekt → que)
c) **C'est en France que** nous sommes allés l'été dernier. (sted → que)`,
    },
    {
      id: 'fransk-3-2-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Framhev det angitte leddet med c\'est...qui/que:',
        subTasks: [
          { label: 'a', task: '**Marie** a écrit cette lettre.', solution: 'C\'est Marie qui a écrit cette lettre.' },
          { label: 'b', task: 'Il a trouvé **les clés**.', solution: 'Ce sont les clés qu\'il a trouvées.' },
          { label: 'c', task: 'Nous partirons **demain**.', solution: 'C\'est demain que nous partirons.' },
        ],
        solution: 'a) C\'est Marie qui, b) Ce sont les clés que, c) C\'est demain que',
        hints: ['Subjekt → qui', 'Objekt/tid/sted → que'],
      },
    },
    {
      id: 'fransk-3-2-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett med upersonlig konstruksjon eller framheving:',
        subTasks: [
          { label: 'a', task: 'Det er noedvendig at alle deltar.', solution: 'Il est nécessaire que tout le monde participe.' },
          { label: 'b', task: 'Det som interesserer meg, er fransk kultur.', solution: 'Ce qui m\'intéresse, c\'est la culture française.' },
          { label: 'c', task: 'Det er i Paris hun jobber.', solution: 'C\'est à Paris qu\'elle travaille.' },
        ],
        solution: 'a) Il est nécessaire que... participe, b) Ce qui m\'intéresse, c\'est..., c) C\'est à Paris qu\'...',
        hints: ['noedvendig + subjonctif', 'Ce qui...c\'est for aa framheve det som interesserer', 'C\'est...que for aa framheve sted'],
      },
    },
    {
      id: 'fransk-3-2-4-note-1',
      type: 'note',
      content: `**Oppsummering kapittel 2:**

| Tema | Noekkelpunkter |
|------|---------------|
| **Subj. imparfait** | Litteraer form, gjenkjenn -ât/-ît/-ût |
| **Tidsharmoni** | Moderne: alltid subj. présent/passé. Litteraert: subj. imp./pqp etter fortid |
| **Passiv** | être (riktig tid) + partisipp. Agent: par/de |
| **Upersonlig** | Il est + adj + de/que. Il faut que + subj. |
| **Framheving** | C'est...qui (subjekt), C'est...que (annet) |`,
    },
    {
      id: 'fransk-3-2-4-tip-1',
      type: 'tip',
      content: `**Tips for variert setningsstruktur paa eksamen:**

1. Bruk **c'est...qui/que** for aa framheve viktige poenger
2. Bruk **ce qui/ce que** for aa innlede med det viktigste
3. Varier mellom aktiv og passiv
4. Bruk upersonlige konstruksjoner for generelle paastander
5. Disse teknikkene viser at du behersker avansert fransk!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: DISKURS OG ARGUMENTASJON
// ============================================================================

// ----------------------------------------------------------------------------
// 3.1 Le discours direct et indirect
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_3_1: TextbookChapter = {
  id: 'fransk-3-3-1',
  courseId: 'fransk-3',
  chapterNumber: '3.1',
  title: 'Le discours direct et indirect',
  description: 'Laer aa omforme fra direkte til indirekte tale med riktig tidsforskyvning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'omforme fra direkte til indirekte tale',
    'beherske tidsforskyvning og pronomenendringer',
  ],
  content: [
    {
      id: 'fransk-3-3-1-intro',
      type: 'text',
      content: `## Le discours direct et indirect

**Direkte tale:** Gjengir ordene noyaktig slik de ble sagt.
*Marie dit: "Je suis fatiguée."*

**Indirekte tale:** Gjengir innholdet uten sitatetegn.
*Marie dit qu'elle est fatiguée.*

**Endringer fra direkte til indirekte tale:**
1. Sitatetegn og kolon forsvinner
2. Pronomen endres
3. Tidsforskyvning (naar rapporteringsverbet er i fortid)
4. Tids- og stedsuttrykk endres`,
    },
    {
      id: 'fransk-3-3-1-def-1',
      type: 'definition',
      content: `**Tidsforskyvning (naar rapporteringsverbet er i fortid):**

| Direkte tale | Indirekte tale |
|-------------|---------------|
| présent → | imparfait |
| passé composé → | plus-que-parfait |
| futur simple → | conditionnel présent |
| futur antérieur → | conditionnel passé |
| imparfait → | imparfait (uendret) |

**Eksempler:**
| Direkte | Indirekte (Il a dit que...) |
|---------|---------------------------|
| "Je **suis** malade." | ...il **était** malade. |
| "J'**ai mangé**." | ...il **avait mangé**. |
| "Je **viendrai**." | ...il **viendrait**. |
| "J'**avais compris**." | ...il **avait compris**. (uendret) |

**Tids- og stedsuttrykk:**
| Direkte | Indirekte |
|---------|-----------|
| aujourd'hui | ce jour-là |
| hier | la veille |
| demain | le lendemain |
| ici | là |
| cette semaine | cette semaine-là |`,
    },
    {
      id: 'fransk-3-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Direkte til indirekte (presens rapportering)',
      problem: `Skriv om til indirekte tale (presens rapporteringsverb - ingen tidsforskyvning):

a) Marie dit: "Je suis contente."
b) Il dit: "J'ai fini mes devoirs."
c) Elle dit: "Nous irons au cinéma."`,
      solution: `**Loesning:**

a) Marie dit **qu'elle est contente**. (je → elle, ingen tidsforskyvning)
b) Il dit **qu'il a fini ses devoirs**. (ingen tidsforskyvning)
c) Elle dit **qu'ils iront au cinéma**. (nous → ils, ingen tidsforskyvning)

**Naar rapporteringsverbet er i presens, endres IKKE verbaltidene!**`,
    },
    {
      id: 'fransk-3-3-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Direkte til indirekte (fortids rapportering)',
      problem: `Skriv om til indirekte tale (rapporteringsverb i fortid):

a) Marie a dit: "Je suis fatiguée."
b) Il a dit: "J'ai vu ce film."
c) Elle a dit: "Je viendrai demain."`,
      solution: `**Loesning:**

a) Marie a dit **qu'elle était fatiguée**. (présent → imparfait)
b) Il a dit **qu'il avait vu ce film**. (passé composé → plus-que-parfait)
c) Elle a dit **qu'elle viendrait le lendemain**. (futur → conditionnel, demain → le lendemain)`,
    },
    {
      id: 'fransk-3-3-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om til indirekte tale (rapporteringsverb i fortid):',
        subTasks: [
          { label: 'a', task: 'Il a dit: "Je suis malade."', solution: 'Il a dit qu\'il était malade.' },
          { label: 'b', task: 'Elle a dit: "J\'ai mangé."', solution: 'Elle a dit qu\'elle avait mangé.' },
          { label: 'c', task: 'Ils ont dit: "Nous viendrons demain."', solution: 'Ils ont dit qu\'ils viendraient le lendemain.' },
          { label: 'd', task: 'Tu as dit: "Je ne comprends pas."', solution: 'Tu as dit que tu ne comprenais pas.' },
        ],
        solution: 'a) était, b) avait mangé, c) viendraient... le lendemain, d) ne comprenais pas',
        hints: ['présent → imparfait', 'passé composé → plus-que-parfait', 'futur → conditionnel'],
      },
    },
    {
      id: 'fransk-3-3-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om til indirekte tale med alle endringer:',
        subTasks: [
          { label: 'a', task: 'Marie m\'a dit: "Je suis partie hier et je reviendrai demain."', solution: 'Marie m\'a dit qu\'elle était partie la veille et qu\'elle reviendrait le lendemain.' },
          { label: 'b', task: 'Pierre nous a dit: "J\'habite ici depuis deux ans."', solution: 'Pierre nous a dit qu\'il habitait là depuis deux ans.' },
          { label: 'c', task: 'Elle lui a dit: "Tu dois finir tes devoirs aujourd\'hui."', solution: 'Elle lui a dit qu\'il devait finir ses devoirs ce jour-là.' },
        ],
        solution: 'a) était partie... la veille... reviendrait... le lendemain, b) habitait là, c) devait finir... ce jour-là',
        hints: ['hier → la veille', 'demain → le lendemain', 'ici → là', 'aujourd\'hui → ce jour-là'],
      },
    },
    {
      id: 'fransk-3-3-1-tip-1',
      type: 'tip',
      content: `**Tips for indirekte tale:**

1. Foerst: endre pronomenene (je → il/elle, tu → il/elle, nous → ils/elles)
2. Saa: endre verbtiden (kun naar rapporteringsverbet er i fortid)
3. Til slutt: endre tids-/stedsuttrykk
4. Husk: imparfait forblir uendret (det er allerede "forskjoevet")`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.2 Le discours indirect au passe
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_3_2: TextbookChapter = {
  id: 'fransk-3-3-2',
  courseId: 'fransk-3',
  chapterNumber: '3.2',
  title: 'Le discours indirect - Questions et impératif',
  description: 'Laer aa omforme sporsmaal og imperativ til indirekte tale.',
  estimatedMinutes: 50,
  competenceGoals: [
    'omforme sporsmaal til indirekte tale',
    'omforme imperativ til indirekte tale',
  ],
  content: [
    {
      id: 'fransk-3-3-2-intro',
      type: 'text',
      content: `## Sporsmaal i indirekte tale

Sporsmaal endrer struktur naar de rapporteres indirekte:

**Ja/nei-sporsmaal → si:**
- Direct: "Est-ce que tu viens?" / "Viens-tu?"
- Indirect: Il demande **si** tu viens.

**Hv-sporsmaal beholder sporsmalordet:**
- "Qu'est-ce que tu fais?" → Il demande **ce que** tu fais.
- "Qu'est-ce qui se passe?" → Il demande **ce qui** se passe.
- "Où vas-tu?" → Il demande **où** tu vas.
- "Quand arrives-tu?" → Il demande **quand** tu arrives.
- "Pourquoi es-tu triste?" → Il demande **pourquoi** tu es triste.
- "Comment vas-tu?" → Il demande **comment** tu vas.

**Merk:** Ingen inversjon eller "est-ce que" i indirekte sporsmaal!`,
    },
    {
      id: 'fransk-3-3-2-def-1',
      type: 'definition',
      content: `**Imperativ i indirekte tale:**

Imperativ blir til **de + infinitiv**:

| Direkte | Indirekte |
|---------|-----------|
| "Venez!" | Il dit **de venir**. |
| "Ne partez pas!" | Il dit **de ne pas partir**. |
| "Assieds-toi!" | Il dit **de s'asseoir**. |
| "Fais tes devoirs!" | Il dit **de faire** ses devoirs. |

**Med fortids rapportering:**
| Direkte | Indirekte |
|---------|-----------|
| "Venez!" | Il **a dit de venir**. |
| "Ne pars pas!" | Il **m'a dit de ne pas partir**. |

**Qui/Que i indirekte tale:**
| Direkte | Indirekte |
|---------|-----------|
| "Qu'est-ce que tu veux?" | → ce que |
| "Qu'est-ce qui est arrivé?" | → ce qui |
| "Qui est venu?" | → qui (uendret) |`,
    },
    {
      id: 'fransk-3-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Sporsmaal i indirekte tale',
      problem: `Skriv om til indirekte tale (fortids rapportering):

a) Il m'a demandé: "Est-ce que tu parles français?"
b) Elle a demandé: "Où habites-tu?"
c) Ils ont demandé: "Qu'est-ce qui s'est passé?"`,
      solution: `**Loesning:**

a) Il m'a demandé **si je parlais français**. (si + tidsforskyvning: parles → parlais)
b) Elle a demandé **où j'habitais**. (où + tidsforskyvning: habites → habitais)
c) Ils ont demandé **ce qui s'était passé**. (ce qui + tidsforskyvning: s'est passé → s'était passé)`,
    },
    {
      id: 'fransk-3-3-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om til indirekte tale (rapporteringsverb i fortid):',
        subTasks: [
          { label: 'a', task: 'Il a demandé: "Tu viens demain?"', solution: 'Il a demandé si je venais le lendemain.' },
          { label: 'b', task: 'Elle a dit: "Tais-toi!"', solution: 'Elle m\'a dit de me taire.' },
          { label: 'c', task: 'Il a demandé: "Qu\'est-ce que tu fais?"', solution: 'Il a demandé ce que je faisais.' },
          { label: 'd', task: 'Le prof a dit: "Ouvrez vos livres!"', solution: 'Le prof a dit d\'ouvrir nos livres.' },
        ],
        solution: 'a) si je venais le lendemain, b) de me taire, c) ce que je faisais, d) d\'ouvrir nos livres',
        hints: ['Ja/nei → si', 'Imperativ → de + infinitiv', 'Qu\'est-ce que → ce que'],
      },
    },
    {
      id: 'fransk-3-3-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til indirekte tale paa fransk:',
        subTasks: [
          { label: 'a', task: 'Han spurte meg om jeg snakket fransk.', solution: 'Il m\'a demandé si je parlais français.' },
          { label: 'b', task: 'Hun ba meg om aa vaere stille.', solution: 'Elle m\'a dit de me taire.' },
          { label: 'c', task: 'De spurte hva som hadde skjedd.', solution: 'Ils ont demandé ce qui s\'était passé.' },
        ],
        solution: 'a) si je parlais, b) de me taire, c) ce qui s\'était passé',
        hints: ['spurte om = a demandé si', 'ba meg om aa = a dit de', 'hva som = ce qui'],
      },
    },
    {
      id: 'fransk-3-3-2-tip-1',
      type: 'tip',
      content: `**Tips for indirekte sporsmaal og imperativ:**

1. ALDRI "est-ce que" i indirekte sporsmaal
2. ALDRI inversjon i indirekte sporsmaal
3. Ja/nei-sporsmaal → **si** (ikke "que")
4. "Qu'est-ce que" → **ce que**, "Qu'est-ce qui" → **ce qui**
5. Imperativ → **de + infinitiv**`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.3 Les connecteurs logiques - Logiske bindeord
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_3_3: TextbookChapter = {
  id: 'fransk-3-3-3',
  courseId: 'fransk-3',
  chapterNumber: '3.3',
  title: 'Les connecteurs logiques - Logiske bindeord',
  description: 'Laer aa bruke logiske bindeord for aa strukturere argumenterende tekster paa fransk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke logiske bindeord for aarsak, konsekvens, motsetning og formaal',
    'strukturere en argumenterende tekst med bindeord',
  ],
  content: [
    {
      id: 'fransk-3-3-3-intro',
      type: 'text',
      content: `## Les connecteurs logiques

Logiske bindeord (connecteurs logiques) er avgjorende for aa skrive strukturerte, akademiske tekster paa fransk. De viser forholdet mellom ideer og argument.`,
    },
    {
      id: 'fransk-3-3-3-def-1',
      type: 'definition',
      content: `**Aarsak (la cause):**

| Bindeord | Norsk | Eksempel |
|----------|-------|----------|
| parce que | fordi | Il reste parce qu'il pleut. |
| car | for | Il reste, car il pleut. |
| puisque | ettersom/siden | Puisqu'il pleut, restons ici. |
| comme | ettersom (i begynnelsen) | Comme il pleut, je prends mon parapluie. |
| étant donné que | gitt at | Étant donné qu'il pleut, restons. |
| en raison de + substantiv | paa grunn av | En raison de la pluie, on reste. |
| à cause de + substantiv | paa grunn av (negativt) | À cause de la pluie, on ne sort pas. |
| grâce à + substantiv | takket vaere (positivt) | Grâce au soleil, on sort. |`,
    },
    {
      id: 'fransk-3-3-3-text-1',
      type: 'text',
      content: `**Konsekvens (la conséquence):**

| Bindeord | Norsk | Eksempel |
|----------|-------|----------|
| donc | altsaa/saa | Il pleut, donc je reste. |
| par conséquent | folglich | Par conséquent, nous devons agir. |
| c'est pourquoi | det er derfor | C'est pourquoi il est parti. |
| ainsi | saaledes | Ainsi, le problème est résolu. |
| de sorte que + indikativ | slik at (resultat) | Il a plu, de sorte que la route est mouillée. |
| si bien que | slik at | Il a neigé, si bien que l'école est fermée. |

**Motsetning (l'opposition):**

| Bindeord | Norsk | Eksempel |
|----------|-------|----------|
| mais | men | Il fait froid, mais je sors. |
| cependant | likevel | Cependant, il a réussi. |
| pourtant | likevel | Pourtant, elle est venue. |
| néanmoins | ikke desto mindre | Néanmoins, le résultat est bon. |
| toutefois | imidlertid | Toutefois, il faut nuancer. |
| en revanche | derimot | En revanche, les prix ont baissé. |
| alors que | mens/selv om | Il dort alors que je travaille. |

**Innroemmelse (la concession):**

| Bindeord | Norsk | Modus |
|----------|-------|-------|
| bien que + subjonctif | selv om | Bien qu'il pleuve... |
| malgré + substantiv | til tross for | Malgré la pluie... |
| quoique + subjonctif | skjoent | Quoiqu'il soit fatigué... |
| même si + indikativ | selv om | Même s'il pleut... |`,
    },
    {
      id: 'fransk-3-3-3-text-2',
      type: 'text',
      content: `**Formaal (le but):**

| Bindeord | Norsk | Modus |
|----------|-------|-------|
| pour + infinitiv | for aa | Il travaille pour réussir. |
| pour que + subjonctif | for at | Il travaille pour que sa famille soit heureuse. |
| afin de + infinitiv | for aa | Afin de réussir, il étudie. |
| afin que + subjonctif | for at | Afin qu'il comprenne... |
| de façon à + infinitiv | slik at | De façon à réussir... |

**Betingelse (la condition):**

| Bindeord | Norsk | Modus |
|----------|-------|-------|
| si | hvis | Si tu veux, viens. |
| à condition que + subjonctif | paa betingelse av at | À condition que tu viennes... |
| pourvu que + subjonctif | bare / forutsatt at | Pourvu qu'il fasse beau... |
| à moins que + subjonctif | med mindre | À moins qu'il ne pleuve... |`,
    },
    {
      id: 'fransk-3-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Velg riktig bindeord',
      problem: `Fyll inn passende bindeord:

a) Il ne peut pas venir ___ il est malade. (aarsak)
b) ___ la pluie, nous sommes sortis. (innroemmelse + substantiv)
c) Il étudie ___ réussir son examen. (formaal + infinitiv)
d) Les prix ont augmenté, ___ les gens achètent moins. (konsekvens)`,
      solution: `**Loesning:**

a) Il ne peut pas venir **parce qu'**il est malade. (aarsak)
b) **Malgré** la pluie, nous sommes sortis. (innroemmelse + substantiv)
c) Il étudie **pour/afin de** réussir son examen. (formaal)
d) Les prix ont augmenté, **c'est pourquoi/donc** les gens achètent moins. (konsekvens)`,
    },
    {
      id: 'fransk-3-3-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn passende bindeord:',
        subTasks: [
          { label: 'a', task: '___ il soit intelligent, il a échoué à l\'examen. (innroemmelse + subj.)', solution: 'Bien qu\'il soit intelligent, il a échoué à l\'examen.' },
          { label: 'b', task: 'Elle travaille beaucoup ___ ses enfants puissent étudier. (formaal + subj.)', solution: 'Elle travaille beaucoup pour que ses enfants puissent étudier.' },
          { label: 'c', task: 'Le film était long, ___ il était intéressant. (motsetning)', solution: 'Le film était long, cependant/néanmoins il était intéressant.' },
        ],
        solution: 'a) Bien que, b) pour que, c) cependant/néanmoins',
        hints: ['Innroemmelse + subjonctif = bien que', 'Formaal med to subjekter = pour que + subj.', 'Motsetning = cependant, néanmoins'],
      },
    },
    {
      id: 'fransk-3-3-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Oversett til fransk med bindeord:',
        subTasks: [
          { label: 'a', task: 'Selv om det regner, gaar vi ut.', solution: 'Bien qu\'il pleuve, nous sortons. / Même s\'il pleut, nous sortons.' },
          { label: 'b', task: 'Han jobber hardt, det er derfor han lykkes.', solution: 'Il travaille dur, c\'est pourquoi il réussit.' },
          { label: 'c', task: 'For at alle skal forstaa, snakker han sakte.', solution: 'Pour que tout le monde comprenne, il parle lentement.' },
        ],
        solution: 'a) Bien qu\'il pleuve / Même s\'il pleut, b) c\'est pourquoi, c) Pour que... comprenne',
        hints: ['selv om + subj. = bien que', 'det er derfor = c\'est pourquoi', 'for at + subj. = pour que'],
      },
    },
    {
      id: 'fransk-3-3-3-tip-1',
      type: 'tip',
      content: `**Tips for bruk av bindeord paa eksamen:**

1. **Varier!** Ikke bruk bare "parce que" - bruk ogsaa "car", "puisque", "étant donné que"
2. **Husk modus:** bien que/pour que/afin que = subjonctif, même si = indikativ
3. **Formelle alternativer:** donc → par conséquent, mais → cependant/néanmoins
4. **Innroemmelse:** bien que (+ subj.) er mer formelt enn même si (+ ind.)`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 3.4 L'argumentation - Argumentasjonsteknikk
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_3_3_4: TextbookChapter = {
  id: 'fransk-3-3-4',
  courseId: 'fransk-3',
  chapterNumber: '3.4',
  title: 'L\'argumentation - Argumentasjonsteknikk',
  description: 'Laer aa skrive argumenterende tekster med klar struktur og overbevisende sprak.',
  estimatedMinutes: 55,
  competenceGoals: [
    'strukturere en argumenterende tekst paa fransk',
    'bruke innledende, additive og konkluderende uttrykk',
    'skrive en moensterbesvarelse for eksamen',
  ],
  content: [
    {
      id: 'fransk-3-3-4-intro',
      type: 'text',
      content: `## L'argumentation - Strukturert argumentasjon

En god argumenterende tekst paa fransk foelger en klar struktur:

1. **L'introduction** (innledning) - Presenter temaet og problematikken
2. **Le développement** (hoveddel) - Presenter argumenter for og imot
3. **La conclusion** (konklusjon) - Oppsummer og gi din mening

Denne strukturen kalles ofte "la dissertation" i fransk tradisjon.`,
    },
    {
      id: 'fransk-3-3-4-def-1',
      type: 'definition',
      content: `**Nyttige uttrykk for argumentasjon:**

**Innlede et argument (introduire):**
| Fransk | Norsk |
|--------|-------|
| Premièrement / D'abord / En premier lieu | For det foerste |
| Tout d'abord | Foerst og fremst |
| Il convient de souligner que | Det boer understrekes at |
| Il est indéniable que | Det er ubestridelig at |

**Legge til (ajouter):**
| Fransk | Norsk |
|--------|-------|
| De plus / En outre | Dessuten |
| Par ailleurs | For oevrig |
| Deuxièmement / Ensuite | For det andre / Deretter |
| Non seulement... mais aussi | Ikke bare... men ogsaa |

**Gi eksempler:**
| Fransk | Norsk |
|--------|-------|
| Par exemple | For eksempel |
| Notamment | Blant annet |
| En effet | Faktisk / Nemlig |
| C'est le cas de | Det gjelder for |

**Motargumentere:**
| Fransk | Norsk |
|--------|-------|
| Cependant / Toutefois | Likevel / Imidlertid |
| En revanche | Derimot |
| D'un autre côté | Paa den andre siden |
| Certes... mais | Riktignok... men |

**Konkludere:**
| Fransk | Norsk |
|--------|-------|
| En conclusion / Pour conclure | Avslutningsvis |
| En somme / En résumé | Oppsummert |
| En définitive | Til syvende og sist |
| Ainsi | Saaledes |`,
    },
    {
      id: 'fransk-3-3-4-text-1',
      type: 'text',
      content: `## Moensterstruktur for argumenterende tekst

**Introduction:**
- Aapning (kontekst/aktualisering)
- Presentasjon av temaet
- Problematikk (sporsmaalet du skal besvare)
- Annonsering av planen

**Développement (2-3 avsnitt):**
- Avsnitt 1: Foerste argument + eksempel + analyse
- Avsnitt 2: Andre argument + eksempel + analyse
- (Avsnitt 3: Motargument + svar / nyansering)

**Conclusion:**
- Oppsummering av hovedpunktene
- Svar paa problematikken
- Aapning / perspektivering

**Tips for hvert avsnitt:**
1. Innled med en topiksetning (l'idée principale)
2. Utvikl med argumenter og eksempler
3. Analyser: forklar HVORFOR eksempelet stoetter argumentet
4. Avslutt med overgang til neste avsnitt`,
    },
    {
      id: 'fransk-3-3-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Moensterbesvarelse - argumenterende tekst',
      problem: `Skriv en kort argumenterende tekst om temaet: "Bør mobiltelefoner forbys i skolen?"`,
      solution: `**Moensterbesvarelse:**

**Introduction:**
De nos jours, la question de l'utilisation des téléphones portables à l'école est au coeur du débat éducatif. Faut-il interdire les portables dans les établissements scolaires? Nous examinerons d'abord les arguments en faveur de cette interdiction, puis les objections possibles.

**Développement - argument pour:**
Premièrement, les téléphones portables sont une source majeure de distraction. En effet, de nombreuses études montrent que les élèves qui utilisent leur téléphone en classe ont des résultats inférieurs. De plus, les réseaux sociaux peuvent favoriser le harcèlement scolaire.

**Développement - nuance/contre-argument:**
Cependant, il convient de nuancer cette position. D'un côté, les smartphones peuvent être des outils pédagogiques utiles. Par exemple, ils permettent un accès rapide à l'information. En revanche, cet accès peut aussi mener à la triche.

**Conclusion:**
En conclusion, bien que les téléphones portables présentent certains avantages pédagogiques, les inconvénients semblent l'emporter. Il serait donc souhaitable de limiter leur usage pendant les heures de cours, tout en permettant leur utilisation encadrée pour des activités éducatives.`,
    },
    {
      id: 'fransk-3-3-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-3-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag argumenterende setninger med de angitte uttrykkene:',
        subTasks: [
          { label: 'a', task: 'Bruk "Il est indéniable que..." om klimaendringer.', solution: 'Il est indéniable que le changement climatique est l\'un des plus grands défis de notre époque.' },
          { label: 'b', task: 'Bruk "Certes... mais..." om sosiale medier.', solution: 'Certes, les réseaux sociaux permettent de rester en contact, mais ils peuvent aussi nuire à la santé mentale.' },
          { label: 'c', task: 'Bruk "En conclusion..." for aa avslutte en tekst om utdanning.', solution: 'En conclusion, l\'éducation est la clé du développement, c\'est pourquoi il est essentiel d\'investir dans les écoles.' },
        ],
        solution: 'Aapne svar - se eksempler over.',
        hints: ['indéniable = ubestridelig', 'certes...mais = riktignok...men', 'en conclusion = avslutningsvis'],
      },
    },
    {
      id: 'fransk-3-3-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-3-3-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort argumenterende tekst (10-15 setninger) om ETT av temaene under. Bruk minst 5 bindeord:',
        subTasks: [
          { label: 'a', task: 'Tema 1: "Les réseaux sociaux: avantage ou danger pour les jeunes?"', solution: 'Vurder fordeler (kommunikasjon, informasjon) og ulemper (avhengighet, personvern, mobbing). Bruk: premièrement, de plus, cependant, en effet, en conclusion.' },
          { label: 'b', task: 'Tema 2: "Apprendre des langues étrangères: est-ce encore nécessaire à l\'ère de la traduction automatique?"', solution: 'Argumenter for (kultur, kognitive fordeler, nyanser) og mot (teknologi, effektivitet). Bruk: tout d\'abord, néanmoins, par exemple, c\'est pourquoi, en définitive.' },
        ],
        solution: 'Fri oppgave - bruk moensterstrukturen: introduction, développement (for/mot), conclusion.',
        hints: ['Bruk varierte bindeord', 'Vis subjonctif: bien que, pour que', 'Strukturer klart med avsnitt'],
      },
    },
    {
      id: 'fransk-3-3-4-note-1',
      type: 'note',
      content: `**Oppsummering kapittel 3 - Diskurs og Argumentasjon:**

| Tema | Noekkelpunkter |
|------|---------------|
| **Direkte → Indirekte tale** | Tidsforskyvning, pronomenendring, tids-/stedsuttrykk |
| **Sporsmaal indirekte** | Ja/nei → si, Qu'est-ce que → ce que, ingen inversjon |
| **Imperativ indirekte** | → de + infinitiv |
| **Bindeord** | Aarsak, konsekvens, motsetning, innroemmelse, formaal |
| **Argumentasjon** | Introduction → Développement → Conclusion |`,
    },
    {
      id: 'fransk-3-3-4-tip-1',
      type: 'tip',
      content: `**Eksamensstrategi for argumenterende tekst:**

1. **Les oppgaven noeye** - forstaa noyaktig hva du blir bedt om
2. **Lag en plan foerst** - noter argumenter for og mot
3. **Skriv en tydelig innledning** med problematikk
4. **Bruk ett avsnitt per argument** med eksempler
5. **Varier sprakbruken** - bruk ulike bindeord, subjonctif, passiv, framheving
6. **Avslutt med en klar konklusjon** som svarer paa spoorsmaalet
7. **Les gjennom** - sjekk grammatikk, samsvarsboyning og bindeord`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const FRANSK_3_CHAPTERS_1_3: TextbookChapter[] = [
  CHAPTER_FRANSK_3_1_1,
  CHAPTER_FRANSK_3_1_2,
  CHAPTER_FRANSK_3_1_3,
  CHAPTER_FRANSK_3_1_4,
  CHAPTER_FRANSK_3_2_1,
  CHAPTER_FRANSK_3_2_2,
  CHAPTER_FRANSK_3_2_3,
  CHAPTER_FRANSK_3_2_4,
  CHAPTER_FRANSK_3_3_1,
  CHAPTER_FRANSK_3_3_2,
  CHAPTER_FRANSK_3_3_3,
  CHAPTER_FRANSK_3_3_4,
];
