/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 1 - Kapittel 17-18
 *
 * Kapittel 17: Le passé composé - Fortid (Past tense)
 * Kapittel 18: Les verbes modaux - Modalverb (Modal verbs)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 17.1: Le passé composé avec avoir - Passé composé med avoir
// ============================================================================

export const CHAPTER_FRANSK_1_17_1: TextbookChapter = {
  id: 'fransk-1-17-1',
  courseId: 'fransk-1',
  chapterNumber: '17.1',
  title: 'Le passé composé avec avoir',
  subtitle: 'Passé composé med avoir',
  description: 'Lær a danne fortidsformen passé composé med hjelpeverbet avoir og regelmessige partisipper.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke fortidsformen passé composé med avoir',
  ],
  content: [
    {
      id: 'fransk-1-17-1-intro',
      type: 'text',
      content: `## Fortid på fransk: Le passé composé

På norsk sier vi "jeg har spist" eller "jeg spiste". På fransk bruker vi **le passé composé** for a snakke om ting som har skjedd i fortiden. Denne formen består av to deler:

**hjelpeverb (avoir/être) + partisipp (participe passe)**

I dette kapittelet lærer du a bruke passé composé med hjelpeverbet **avoir**, som er det vanligste.`,
    },
    {
      id: 'fransk-1-17-1-def-1',
      type: 'definition',
      title: 'Passé composé med avoir',
      content: `**Le passé composé** dannes med:

**avoir (bøyd) + participe passe**

Hjelpeverbet **avoir** bøyes slik i presens:

| Person | Avoir |
|--------|-------|
| j' | ai |
| tu | as |
| il/elle | a |
| nous | avons |
| vous | avez |
| ils/elles | ont |

Partisippet dannes av infinitiven:

| Infinitiv-endelse | Partisipp-endelse | Eksempel |
|--------------------|-------------------|----------|
| -er | -e | parler -> parle |
| -ir | -i | finir -> fini |
| -re | -u | vendre -> vendu |`,
    },
    {
      id: 'fransk-1-17-1-text-1',
      type: 'text',
      content: `## Vanlige verb i passé composé med avoir

| Infinitiv | Partisipp | Passé composé (je) | Norsk |
|-----------|-----------|--------------------|----|
| parler | parle | j'ai parle | jeg har snakket |
| manger | mange | j'ai mange | jeg har spist |
| regarder | regarde | j'ai regarde | jeg har sett på |
| travailler | travaille | j'ai travaille | jeg har jobbet |
| écouter | écouté | j'ai écouté | jeg har lyttet |
| finir | fini | j'ai fini | jeg har fullført |
| choisir | choisi | j'ai choisi | jeg har valgt |
| vendre | vendu | j'ai vendu | jeg har solgt |
| attendre | attendu | j'ai attendu | jeg har ventet |

**Merk:** Partisippet forandrer seg **ikke** med avoir (ingen samsvarsbøyning med subjektet).`,
    },
    {
      id: 'fransk-1-17-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Danne passé composé',
      problem: `Sett verbene i passé composé:
a) Je ___ (manger) une pizza.
b) Tu ___ (parler) avec Marie.
c) Ils ___ (finir) les devoirs.`,
      solution: `a) J'**ai mange** une pizza. (Jeg har spist en pizza.)
b) Tu **as parle** avec Marie. (Du har snakket med Marie.)
c) Ils **ont fini** les devoirs. (De har fullført leksene.)

**Fremgangsmate:** 1) Bøy avoir til riktig person. 2) Legg til partisippet (-er -> -e, -ir -> -i).`,
    },
    {
      id: 'fransk-1-17-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv partisippet (participe passe) av disse verbene.',
        subTasks: [
          { label: 'a', task: 'parler', solution: 'parle' },
          { label: 'b', task: 'finir', solution: 'fini' },
          { label: 'c', task: 'vendre', solution: 'vendu' },
          { label: 'd', task: 'manger', solution: 'mange' },
        ],
        solution: 'a) parle, b) fini, c) vendu, d) mange',
        hints: ['-er -> -e, -ir -> -i, -re -> -u'],
      },
    },
    {
      id: 'fransk-1-17-1-text-2',
      type: 'text',
      content: `## Fullstendige eksempler

Her ser du passé composé bøyd i alle personer:

**Parler (a snakke):**

| Person | Passé composé | Norsk |
|--------|---------------|-------|
| je | j'ai parle | jeg har snakket |
| tu | tu as parle | du har snakket |
| il/elle | il/elle a parle | han/hun har snakket |
| nous | nous avons parle | vi har snakket |
| vous | vous avez parle | dere har snakket |
| ils/elles | ils/elles ont parle | de har snakket |

Legg merke til at det kun er **avoir** som forandrer seg. Partisippet **parle** er likt i alle personene.`,
    },
    {
      id: 'fransk-1-17-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Alle personer',
      problem: `Fyll inn riktig form av passé composé med verbet "regarder" (a se på):
a) Je ___ la tele.
b) Nous ___ un film.
c) Elle ___ les photos.`,
      solution: `a) J'**ai regarde** la tele. (Jeg har sett på TV.)
b) Nous **avons regarde** un film. (Vi har sett på en film.)
c) Elle **a regarde** les photos. (Hun har sett på bildene.)`,
    },
    {
      id: 'fransk-1-17-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbet i parentes i passé composé.',
        subTasks: [
          { label: 'a', task: 'Nous ___ (travailler) hier.', solution: 'avons travaille' },
          { label: 'b', task: 'Vous ___ (choisir) un livre.', solution: 'avez choisi' },
          { label: 'c', task: 'Elles ___ (attendre) le bus.', solution: 'ont attendu' },
          { label: 'd', task: 'Il ___ (écouter) la musique.', solution: 'a écouté' },
        ],
        solution: 'a) avons travaille, b) avez choisi, c) ont attendu, d) a écouté',
        hints: ['Bøy avoir til riktig person forst', 'Finn partisippet: -er -> -e, -ir -> -i, -re -> -u'],
      },
    },
    {
      id: 'fransk-1-17-1-text-3',
      type: 'text',
      content: `## Nyttige tidsuttrykk med passé composé

| Fransk | Norsk |
|--------|-------|
| hier | i går |
| hier soir | i går kveld |
| ce matin | i dag morges |
| la semaine dernière | forrige uke |
| le mois dernier | forrige måned |
| l'année dernière | i fjor |
| il y a deux jours | for to dager siden |
| déjà | allerede |

**Eksempler:**
- **Hier**, j'ai mange au restaurant. (I går spiste jeg på restaurant.)
- **La semaine dernière**, nous avons visite Paris. (Forrige uke besøkte vi Paris.)`,
    },
    {
      id: 'fransk-1-17-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Med tidsuttrykk',
      problem: `Oversett til fransk:
a) I går spiste jeg en croissant.
b) Forrige uke jobbet vi mye.
c) De har allerede fullført.`,
      solution: `a) Hier, j'ai mange un croissant.
b) La semaine dernière, nous avons beaucoup travaille.
c) Ils ont déjà fini.

**Tips:** Tidsuttrykkene star ofte forst eller sist i setningen.`,
    },
    {
      id: 'fransk-1-17-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Bruk passé composé.',
        subTasks: [
          { label: 'a', task: 'I går kveld sa jeg på en film.', solution: 'Hier soir, j\'ai regarde un film.' },
          { label: 'b', task: 'Hun har ventet i to timer.', solution: 'Elle a attendu deux heures.' },
          { label: 'c', task: 'Vi spiste på restaurant forrige uke.', solution: 'Nous avons mange au restaurant la semaine dernière.' },
        ],
        solution: "a) Hier soir, j'ai regarde un film. b) Elle a attendu deux heures. c) Nous avons mange au restaurant la semaine dernière.",
        hints: ['Bruk tidsuttrykkene fra tabellen', 'Husk: avoir (bøyd) + partisipp'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-17-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv en kort tekst (3-4 setninger) om hva du gjorde i går. Bruk passé composé med avoir og minst to tidsuttrykk.',
        subTasks: [
          { label: 'a', task: 'Skriv hva du spiste i går.', solution: 'Eksempel: Hier, j\'ai mange une pizza pour le diner.' },
          { label: 'b', task: 'Skriv hva du sa på i går kveld.', solution: 'Eksempel: Hier soir, j\'ai regarde un film avec mes amis.' },
          { label: 'c', task: 'Skriv hva du fullførte i går.', solution: 'Eksempel: J\'ai fini mes devoirs a cinq heures.' },
        ],
        solution: "Eksempel: Hier, j'ai mange une pizza pour le diner. Hier soir, j'ai regarde un film avec mes amis. J'ai fini mes devoirs a cinq heures.",
        hints: ['Bruk verb som manger, regarder, finir, travailler, écouter', 'Husk tidsuttrykk: hier, hier soir, ce matin'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 17.2: Le passé composé avec être - Passé composé med être
// ============================================================================

export const CHAPTER_FRANSK_1_17_2: TextbookChapter = {
  id: 'fransk-1-17-2',
  courseId: 'fransk-1',
  chapterNumber: '17.2',
  title: 'Le passé composé avec être',
  subtitle: 'Passé composé med être',
  description: 'Lær hvilke verb som bruker être som hjelpeverb i passé composé, og reglene for samsvarsbøyning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke passé composé med être',
  ],
  content: [
    {
      id: 'fransk-1-17-2-intro',
      type: 'text',
      content: `## Passé composé med être

De fleste verb bruker **avoir** som hjelpeverb i passé composé. Men en gruppe verb bruker **être** i stedet. Disse er stort sett verb som handler om **bevegelse** eller **forandring av tilstand**.

En kjent huskeregel for disse verbene er **DR & MRS VANDERTRAMP**.`,
    },
    {
      id: 'fransk-1-17-2-def-1',
      type: 'definition',
      title: 'DR & MRS VANDERTRAMP',
      content: `Verbene som bruker **être** i passé composé:

| Bokstav | Verb | Partisipp | Norsk |
|---------|------|-----------|-------|
| **D** | Devenir | devenu | bli |
| **R** | Revenir | revenu | komme tilbake |
| **M** | Monter | monte | gå opp |
| **R** | Rester | reste | bli (være igjen) |
| **S** | Sortir | sorti | gå ut |
| **V** | Venir | venu | komme |
| **A** | Aller | alle | gå |
| **N** | Naître | ne | bli født |
| **D** | Descendre | descendu | gå ned |
| **E** | Entrer | entre | gå inn |
| **R** | Rentrer | rentre | komme hjem |
| **T** | Tomber | tombe | falle |
| **R** | Retourner | retourne | dra tilbake |
| **A** | Arriver | arrive | ankomme |
| **M** | Mourir | mort | do |
| **P** | Partir | parti | dra |

**Viktig:** Med être må partisippet samsvare med subjektet i kjønn og tall!`,
    },
    {
      id: 'fransk-1-17-2-text-1',
      type: 'text',
      content: `## Samsvarsboyning med être

Når vi bruker **être** som hjelpeverb, må partisippet samsvare med subjektet:

| Subjekt | Endelse | Eksempel |
|---------|---------|----------|
| hankjønn entall | (ingen) | Il est **alle** |
| hunkjønn entall | -e | Elle est **allee** |
| hankjønn flertall | -s | Ils sont **alles** |
| hunkjønn flertall | -es | Elles sont **allees** |

**Être i presens:**

| Person | Être |
|--------|------|
| je | suis |
| tu | es |
| il/elle | est |
| nous | sommes |
| vous | êtes |
| ils/elles | sont |`,
    },
    {
      id: 'fransk-1-17-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Passé composé med être',
      problem: `Sett verbene i passé composé. Pass på samsvarsbøyning!
a) Marie ___ (aller) au cinéma.
b) Pierre ___ (partir) à huit heures.
c) Les filles ___ (arriver) hier.`,
      solution: `a) Marie **est allee** au cinéma. (allee med -e fordi Marie er hunkjønn)
b) Pierre **est parti** à huit heures. (parti uten ekstra endelse, hankjønn entall)
c) Les filles **sont arrivees** hier. (arrivees med -es fordi les filles er hunkjønn flertall)

**Husk:** Med être legger du til -e for hunkjønn, -s for flertall, -es for hunkjønn flertall.`,
    },
    {
      id: 'fransk-1-17-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig hjelpeverb: avoir eller être?',
        subTasks: [
          { label: 'a', task: 'Il ___ mange une pomme.', solution: 'a (avoir - manger er ikke et être-verb)' },
          { label: 'b', task: 'Elle ___ allee au parc.', solution: 'est (être - aller er et DR MRS VANDERTRAMP-verb)' },
          { label: 'c', task: 'Nous ___ partis a midi.', solution: 'sommes (être - partir er et DR MRS VANDERTRAMP-verb)' },
          { label: 'd', task: 'Tu ___ regarde la tele.', solution: 'as (avoir - regarder er ikke et être-verb)' },
        ],
        solution: 'a) a, b) est, c) sommes, d) as',
        hints: ['Sjekk om verbet star i DR MRS VANDERTRAMP-listen'],
      },
    },
    {
      id: 'fransk-1-17-2-text-2',
      type: 'text',
      content: `## Eksempler i kontekst

Her er noen vanlige setninger med être-verb i passé composé:

| Fransk | Norsk |
|--------|-------|
| Je suis allé(e) à l'école. | Jeg gikk på skolen. |
| Il est parti ce matin. | Han dro i dag morges. |
| Elle est arrivee hier. | Hun ankom i går. |
| Nous sommes restes a la maison. | Vi ble hjemme. |
| Ils sont venus chez nous. | De kom hjem til oss. |
| Elle est née en 2008. | Hun ble født i 2008. |

**Tips:** Når du skriver om deg selv og du er jente, husk a legge til -e: *Je suis allee.*`,
    },
    {
      id: 'fransk-1-17-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Samsvarsboyning',
      problem: `Skriv riktig form av partisippet:
a) Marie et Sophie sont ___ (arriver) à Paris.
b) Pierre est ___ (venir) hier.
c) Les garcons sont ___ (partir) tot.`,
      solution: `a) Marie et Sophie sont **arrivees** à Paris. (-ees: hunkjønn flertall)
b) Pierre est **venu** hier. (ingen ekstra endelse: hankjønn entall)
c) Les garcons sont **partis** tot. (-s: hankjønn flertall)`,
    },
    {
      id: 'fransk-1-17-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i passé composé med être. Pass på samsvarsbøyning!',
        subTasks: [
          { label: 'a', task: 'Elle ___ (aller) au magasin.', solution: 'est allee' },
          { label: 'b', task: 'Ils ___ (venir) de France.', solution: 'sont venus' },
          { label: 'c', task: 'Nous (jenter) ___ (rester) à la maison.', solution: 'sommes restees' },
          { label: 'd', task: 'Il ___ (tomber) dans la rue.', solution: 'est tombe' },
        ],
        solution: 'a) est allee, b) sont venus, c) sommes restees, d) est tombe',
        hints: ['Bøy être til riktig person', 'Legg til -e (hunkjønn), -s (flertall) eller -es (hunkjønn flertall) på partisippet'],
      },
    },
    {
      id: 'fransk-1-17-2-text-3',
      type: 'text',
      content: `## Oppsummering: Avoir eller être?

| Avoir (de fleste verb) | Être (DR MRS VANDERTRAMP) |
|-------------------------|---------------------------|
| j'ai mange | je suis allé(e) |
| tu as parle | tu es parti(e) |
| il a travaille | il est venu |
| elle a fini | elle est arrivee |
| Partisipp endrer seg **ikke** | Partisipp samsvarer med **subjektet** |`,
    },
    {
      id: 'fransk-1-17-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Avoir eller être?',
      problem: `Velg avoir eller être og skriv setningen i passé composé:
a) Nous ___ (manger) au restaurant. (blandet gruppe)
b) Elles ___ (partir) à midi.
c) Vous ___ (travailler) hier.`,
      solution: `a) Nous **avons mange** au restaurant. (avoir - manger er ikke et être-verb)
b) Elles **sont parties** à midi. (être - partir, hunkjønn flertall = -es)
c) Vous **avez travaille** hier. (avoir - travailler er ikke et être-verb)`,
    },
    {
      id: 'fransk-1-17-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Velg riktig hjelpeverb (avoir/être).',
        subTasks: [
          { label: 'a', task: 'Hun gikk til skolen. (aller)', solution: "Elle est allee a l'école." },
          { label: 'b', task: 'Vi spiste middag. (manger)', solution: 'Nous avons mange le diner.' },
          { label: 'c', task: 'De (jenter) ankom i går. (arriver)', solution: 'Elles sont arrivees hier.' },
        ],
        solution: "a) Elle est allee a l'école. b) Nous avons mange le diner. c) Elles sont arrivees hier.",
        hints: ['Sjekk DR MRS VANDERTRAMP-listen', 'Husk samsvarsbøyning med être'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-17-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv disse setningene i passé composé. Velg avoir eller être, og pass på samsvarsbøyning.',
        subTasks: [
          { label: 'a', task: 'Marie (aller) au cinéma et elle (regarder) un film.', solution: 'Marie est allee au cinéma et elle a regarde un film.' },
          { label: 'b', task: 'Les garcons (arriver) a l\'école et ils (travailler) toute la journée.', solution: "Les garcons sont arrives a l'école et ils ont travaille toute la journée." },
          { label: 'c', task: 'Sophie et Julie (partir) en vacances et elles (visiter) Paris.', solution: 'Sophie et Julie sont parties en vacances et elles ont visite Paris.' },
        ],
        solution: "a) Marie est allee au cinéma et elle a regarde un film. b) Les garcons sont arrives a l'école et ils ont travaille toute la journée. c) Sophie et Julie sont parties en vacances et elles ont visite Paris.",
        hints: ['Noen setninger har både avoir-verb og être-verb', 'Aller, arriver, partir = être. Regarder, travailler, visiter = avoir'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 17.3: Les participes passes irreguliers - Uregelmessige partisipper
// ============================================================================

export const CHAPTER_FRANSK_1_17_3: TextbookChapter = {
  id: 'fransk-1-17-3',
  courseId: 'fransk-1',
  chapterNumber: '17.3',
  title: 'Les participes passés irréguliers',
  subtitle: 'Uregelmessige partisipper',
  description: 'Lær de vanligste uregelmessige partisippene i passé composé.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til uregelmessige partisipper',
  ],
  content: [
    {
      id: 'fransk-1-17-3-intro',
      type: 'text',
      content: `## Uregelmessige partisipper

Mange av de vanligste franske verbene har uregelmessige partisipper. Det betyr at de **ikke** følger reglene -er -> -e, -ir -> -i, -re -> -u. Du må lære disse utenat!

Den gode nyheten er at de fleste brukes svart ofte, så du vil raskt bli vant til dem.`,
    },
    {
      id: 'fransk-1-17-3-def-1',
      type: 'definition',
      title: 'De viktigste uregelmessige partisippene',
      content: `Her er de uregelmessige partisippene du **ma** kunne:

| Infinitiv | Partisipp | Norsk |
|-----------|-----------|-------|
| être | été | være |
| avoir | eu | ha |
| faire | fait | gjøre |
| prendre | pris | ta |
| mettre | mis | legge/sette |
| voir | vu | se |
| boire | bu | drikke |
| lire | lu | lese |
| dire | dit | si |
| écrire | écrit | skrive |
| ouvrir | ouvert | åpne |
| pouvoir | pu | kunne |
| vouloir | voulu | ville |
| devoir | du | matte |
| savoir | su | vite |
| connaître | connu | kjenne |

**Tips:** Prøv a lage huskesetninger, for eksempel: "J'ai **fait** mes devoirs, j'ai **pris** le bus, et j'ai **bu** un café."`,
    },
    {
      id: 'fransk-1-17-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Uregelmessige partisipper',
      problem: `Hva er partisippet?
a) faire
b) voir
c) prendre
d) boire`,
      solution: `a) faire -> **fait** (j'ai fait = jeg har gjort)
b) voir -> **vu** (j'ai vu = jeg har sett)
c) prendre -> **pris** (j'ai pris = jeg har tatt)
d) boire -> **bu** (j'ai bu = jeg har drukket)`,
    },
    {
      id: 'fransk-1-17-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv partisippet til disse verbene.',
        subTasks: [
          { label: 'a', task: 'avoir', solution: 'eu' },
          { label: 'b', task: 'être', solution: 'ete' },
          { label: 'c', task: 'faire', solution: 'fait' },
          { label: 'd', task: 'dire', solution: 'dit' },
          { label: 'e', task: 'écrire', solution: 'écrit' },
        ],
        solution: 'a) eu, b) ete, c) fait, d) dit, e) écrit',
        hints: ['Disse må læres utenat - se tabellen'],
      },
    },
    {
      id: 'fransk-1-17-3-text-1',
      type: 'text',
      content: `## Bruke uregelmessige partisipper i setninger

| Fransk | Norsk |
|--------|-------|
| J'ai fait mes devoirs. | Jeg har gjort leksene. |
| Elle a pris le train. | Hun tok toget. |
| Nous avons bu du café. | Vi drakk kaffe. |
| Tu as vu ce film ? | Har du sett den filmen? |
| Il a lu un livre. | Han leste en bok. |
| Elles ont dit bonjour. | De sa hei. |
| J'ai écrit une lettre. | Jeg har skrevet et brev. |
| Il a mis son manteau. | Han tok på seg jakken. |
| Tu as ouvert la porte ? | Åpnet du døren? |`,
    },
    {
      id: 'fransk-1-17-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Setninger med uregelmessige partisipper',
      problem: `Fyll inn riktig form av passé composé:
a) Tu ___ (lire) ce livre ?
b) Nous ___ (voir) un beau film.
c) Elle ___ (mettre) une robe rouge.`,
      solution: `a) Tu **as lu** ce livre ? (Har du lest denne boken?)
b) Nous **avons vu** un beau film. (Vi sa en fin film.)
c) Elle **a mis** une robe rouge. (Hun tok på seg en rød kjole.)`,
    },
    {
      id: 'fransk-1-17-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbet i parentes i passé composé.',
        subTasks: [
          { label: 'a', task: 'Ils ___ (boire) du jus d\'orange.', solution: 'ont bu' },
          { label: 'b', task: 'J\' ___ (écrire) un message.', solution: 'ai écrit' },
          { label: 'c', task: 'Vous ___ (prendre) le metro ?', solution: 'avez pris' },
          { label: 'd', task: 'Elle ___ (ouvrir) la fenêtre.', solution: 'a ouvert' },
        ],
        solution: 'a) ont bu, b) ai écrit, c) avez pris, d) a ouvert',
        hints: ['Husk: avoir (bøyd) + uregelmessig partisipp', 'boire -> bu, écrire -> écrit, prendre -> pris, ouvrir -> ouvert'],
      },
    },
    {
      id: 'fransk-1-17-3-text-2',
      type: 'text',
      content: `## Husketips for uregelmessige partisipper

**Grupper med like endelser:**

| Endelse | Verb |
|---------|------|
| -it | dit, écrit, fait |
| -is | pris, mis |
| -u | vu, bu, lu, pu, voulu, du, su, connu, eu |
| -ert | ouvert |

De fleste uregelmessige partisippene slutter på **-u**! Det er den største gruppen.`,
    },
    {
      id: 'fransk-1-17-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Gruppere partisippene',
      problem: `Sorter disse partisippene etter endelse (-it, -is, -u, annet):
fait, vu, pris, bu, dit, mis, lu, écrit, eu, ouvert`,
      solution: `**-it:** fait, dit, écrit
**-is:** pris, mis
**-u:** vu, bu, lu, eu
**Annet:** ouvert (-ert)

Legg merke til at -u-gruppen er storst!`,
    },
    {
      id: 'fransk-1-17-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med passé composé.',
        subTasks: [
          { label: 'a', task: 'Jeg har gjort leksene.', solution: "J'ai fait mes devoirs." },
          { label: 'b', task: 'Har du sett denne filmen?', solution: 'Tu as vu ce film ?' },
          { label: 'c', task: 'Vi drakk kaffe i dag morges.', solution: 'Nous avons bu du café ce matin.' },
        ],
        solution: "a) J'ai fait mes devoirs. b) Tu as vu ce film ? c) Nous avons bu du café ce matin.",
        hints: ['faire -> fait, voir -> vu, boire -> bu'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-17-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Fyll inn riktig passé composé. Både regelmessige og uregelmessige verb!',
        subTasks: [
          { label: 'a', task: 'Ce matin, j\' ___ (prendre) le bus et j\' ___ (arriver) a l\'école.', solution: "j'ai pris le bus et je suis arrive(e) à l'école" },
          { label: 'b', task: 'Hier, elle ___ (faire) ses devoirs et elle ___ (lire) un livre.', solution: 'elle a fait ses devoirs et elle a lu un livre' },
          { label: 'c', task: 'Nous ___ (voir) un film et nous ___ (manger) du popcorn.', solution: 'nous avons vu un film et nous avons mange du popcorn' },
          { label: 'd', task: 'Ils ___ (boire) du the et ils ___ (écrire) des lettres.', solution: 'ils ont bu du the et ils ont écrit des lettres' },
        ],
        solution: "a) j'ai pris / je suis arrive(e), b) a fait / a lu, c) avons vu / avons mange, d) ont bu / ont écrit",
        hints: ['Husk at arriver bruker être som hjelpeverb', 'De andre verbene bruker avoir'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 17.4: Raconter au passé - Fortelle i fortid
// ============================================================================

export const CHAPTER_FRANSK_1_17_4: TextbookChapter = {
  id: 'fransk-1-17-4',
  courseId: 'fransk-1',
  chapterNumber: '17.4',
  title: 'Raconter au passé',
  subtitle: 'Fortelle i fortid',
  description: 'Lær a fortelle om hendelser i fortid ved a bruke passé composé i kontekst, med nektelse og tidsuttrykk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'fortelle om hendelser i fortid',
  ],
  content: [
    {
      id: 'fransk-1-17-4-intro',
      type: 'text',
      content: `## Fortelle om fortiden

Na som du kan danne passé composé med både avoir og être, og du kjenner de uregelmessige partisippene, er det på tide a bruke dem i sammenheng! I dette kapittelet lærer du a fortelle om helgen din, ferien, og andre hendelser i fortiden.

Du lærer også hvordan nektelse (ne...pas) fungerer i passé composé.`,
    },
    {
      id: 'fransk-1-17-4-def-1',
      type: 'definition',
      title: 'Nektelse i passé composé',
      content: `I passé composé plasseres **ne...pas** rundt **hjelpeverbet** (avoir/être):

**ne + hjelpeverb + pas + partisipp**

| Bekreftende | Nektende |
|-------------|----------|
| J'ai mange. | Je **n'ai pas** mange. |
| Elle est allee. | Elle **n'est pas** allee. |
| Nous avons vu. | Nous **n'avons pas** vu. |
| Ils sont partis. | Ils **ne sont pas** partis. |

**Merk:** Foran vokal forkortes "ne" til "n'": je **n'**ai pas, il **n'**est pas.`,
    },
    {
      id: 'fransk-1-17-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Nektelse i passé composé',
      problem: `Gjør setningene nektende:
a) J'ai mange.
b) Elle est partie.
c) Nous avons fait les devoirs.`,
      solution: `a) Je **n'ai pas** mange. (Jeg har ikke spist.)
b) Elle **n'est pas** partie. (Hun har ikke dratt.)
c) Nous **n'avons pas** fait les devoirs. (Vi har ikke gjort leksene.)

**Husk:** ne/n'...pas rundt hjelpeverbet, partisippet kommer etter pas.`,
    },
    {
      id: 'fransk-1-17-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjør disse setningene nektende.',
        subTasks: [
          { label: 'a', task: 'Il a travaille hier.', solution: "Il n'a pas travaille hier." },
          { label: 'b', task: 'Tu as vu ce film.', solution: "Tu n'as pas vu ce film." },
          { label: 'c', task: 'Elles sont arrivees.', solution: 'Elles ne sont pas arrivees.' },
          { label: 'd', task: "J'ai compris.", solution: "Je n'ai pas compris." },
        ],
        solution: "a) Il n'a pas travaille hier. b) Tu n'as pas vu ce film. c) Elles ne sont pas arrivees. d) Je n'ai pas compris.",
        hints: ['ne/n\'...pas rundt hjelpeverbet (avoir eller être)', 'Partisippet kommer etter pas'],
      },
    },
    {
      id: 'fransk-1-17-4-text-1',
      type: 'text',
      content: `## Tidsuttrykk for fortiden

Disse uttrykkene er nyttige når du forteller om fortiden:

| Fransk | Norsk |
|--------|-------|
| hier | i går |
| hier matin | i går morges |
| hier soir | i går kveld |
| avant-hier | i forgårs |
| ce matin | i dag morges |
| la semaine dernière | forrige uke |
| le week-end dernier | forrige helg |
| le mois dernier | forrige måned |
| l'année dernière | i fjor |
| en 2023 | i 2023 |
| il y a deux jours | for to dager siden |
| il y a une semaine | for en uke siden |
| d'abord | forst |
| ensuite / puis | deretter / så |
| enfin / finalement | til slutt |`,
    },
    {
      id: 'fransk-1-17-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Fortelle om helgen',
      problem: `Les denne teksten og svar på spørsmålet:

"Le week-end dernier, je suis allé(e) à Paris avec ma famille. D'abord, nous avons visite la tour Eiffel. Ensuite, nous avons mange dans un restaurant français. L'après-midi, nous avons fait une promenade sur les Champs-Élysées. Finalement, nous sommes rentres a l'hôtel."

Spørsmål: Nevn fire ting personen gjorde i Paris.`,
      solution: `1. Besokte Eiffeltarnet (nous avons visite la tour Eiffel)
2. Spiste på en fransk restaurant (nous avons mange dans un restaurant)
3. Gikk tur på Champs-Élysées (nous avons fait une promenade)
4. Dro tilbake til hotellet (nous sommes rentres a l'hôtel)

**Legg merke til bruken av:** d'abord (forst), ensuite (deretter), finalement (til slutt) for a strukturere fortellingen.`,
    },
    {
      id: 'fransk-1-17-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Bruk passé composé.',
        subTasks: [
          { label: 'a', task: 'Forrige helg gikk jeg på kino.', solution: 'Le week-end dernier, je suis allé(e) au cinéma.' },
          { label: 'b', task: 'Vi har ikke sett den filmen.', solution: "Nous n'avons pas vu ce film." },
          { label: 'c', task: 'Først spiste hun frokost, deretter gikk hun til skolen.', solution: "D'abord, elle a mange le petit déjeuner. Ensuite, elle est allee a l'école." },
        ],
        solution: "a) Le week-end dernier, je suis allé(e) au cinéma. b) Nous n'avons pas vu ce film. c) D'abord, elle a mange le petit déjeuner. Ensuite, elle est allee a l'école.",
        hints: ['aller = être-verb', 'voir -> vu, manger -> mange', 'Bruk d\'abord og ensuite for a binde setningene sammen'],
      },
    },
    {
      id: 'fransk-1-17-4-text-2',
      type: 'text',
      content: `## Spørre om fortiden

For a stille spørsmål i passé composé har du flere muligheter:

| Spørremåte | Eksempel | Norsk |
|------------|----------|-------|
| Intonasjon (heve stemmen) | Tu as mange ? | Har du spist? |
| Est-ce que | Est-ce que tu as mange ? | Har du spist? |
| Inversjon | As-tu mange ? | Har du spist? |

**Vanlige spørsmål om fortiden:**

| Fransk | Norsk |
|--------|-------|
| Qu'est-ce que tu as fait hier ? | Hva gjorde du i går? |
| Ou est-ce que tu es allé(e) ? | Hvor gikk du? |
| Tu as passé un bon week-end ? | Hadde du en fin helg? |
| Comment était le voyage ? | Hvordan var reisen? |`,
    },
    {
      id: 'fransk-1-17-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Dialog i fortid',
      problem: `Oversett denne dialogen til norsk:
- Salut ! Tu as passé un bon week-end ?
- Oui ! Je suis alle au cinéma avec Sophie.
- Qu'est-ce que vous avez vu ?
- Nous avons vu un film d'action. C'était super !`,
      solution: `- Hei! Hadde du en fin helg?
- Ja! Jeg gikk på kino med Sophie.
- Hva sa dere?
- Vi sa en actionfilm. Det var kjempebra!

**Merk:** "C'était" (det var) er imparfait, en annen fortidsform du lærer senere.`,
    },
    {
      id: 'fransk-1-17-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar på sporsmaalene på fransk med fulle setninger i passé composé.',
        subTasks: [
          { label: 'a', task: 'Qu\'est-ce que tu as mange hier soir ? (pizza)', solution: "Hier soir, j'ai mange une pizza." },
          { label: 'b', task: 'Ou est-ce que tu es allé(e) le week-end dernier ? (parc)', solution: 'Le week-end dernier, je suis allé(e) au parc.' },
          { label: 'c', task: 'Tu as fait tes devoirs ? (nei)', solution: "Non, je n'ai pas fait mes devoirs." },
        ],
        solution: "a) Hier soir, j'ai mange une pizza. b) Le week-end dernier, je suis allé(e) au parc. c) Non, je n'ai pas fait mes devoirs.",
        hints: ['Bruk tidsuttrykk i svaret', 'Husk nektelse: ne...pas rundt hjelpeverbet'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-17-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-17-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv en kort fortelling (5-6 setninger) om din forrige helg på fransk. Bruk passé composé med både avoir og être, minst ett uregelmessig partisipp, tidsuttrykk, og en nektende setning.',
        subTasks: [
          { label: 'a', task: 'Fortell hvor du gikk. (bruk aller)', solution: 'Eksempel: Le week-end dernier, je suis allé(e) en ville avec mes amis.' },
          { label: 'b', task: 'Fortell hva du gjorde og spiste. (bruk faire, manger)', solution: "Eksempel: D'abord, nous avons fait les magasins. Ensuite, nous avons mange au restaurant." },
          { label: 'c', task: 'Fortell noe du IKKE gjorde. (bruk nektelse)', solution: "Eksempel: Je n'ai pas fait mes devoirs." },
          { label: 'd', task: 'Fortell når du kom hjem. (bruk rentrer)', solution: 'Eksempel: Finalement, je suis rentre(e) à la maison a neuf heures du soir.' },
        ],
        solution: "Eksempel på komplett tekst: Le week-end dernier, je suis allé(e) en ville avec mes amis. D'abord, nous avons fait les magasins. Ensuite, nous avons mange au restaurant. J'ai vu un beau film au cinéma. Je n'ai pas fait mes devoirs. Finalement, je suis rentre(e) à la maison a neuf heures du soir.",
        hints: ['Bruk d\'abord, ensuite, puis, finalement for a strukturere', 'Husk: aller, partir, arriver, rentrer = être. Manger, faire, voir = avoir'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 18.1: Pouvoir - Å kunne
// ============================================================================

export const CHAPTER_FRANSK_1_18_1: TextbookChapter = {
  id: 'fransk-1-18-1',
  courseId: 'fransk-1',
  chapterNumber: '18.1',
  title: 'Pouvoir',
  subtitle: 'Å kunne',
  description: 'Lær a bøye og bruke det modale verbet pouvoir (a kunne) for a uttrykke evne og tillatelse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke verbet pouvoir i presens',
  ],
  content: [
    {
      id: 'fransk-1-18-1-intro',
      type: 'text',
      content: `## Modalverb på fransk

**Modalverb** er verb som star foran et annet verb i infinitiv. På norsk sier vi "jeg **kan** svømme", "jeg **vil** spise", "jeg **ma** gå". På fransk fungerer det på samme måte:

- Je **peux** nager. (Jeg kan svømme.)
- Je **veux** manger. (Jeg vil spise.)
- Je **dois** partir. (Jeg må dra.)

I dette kapittelet begynner vi med **pouvoir** (a kunne).`,
    },
    {
      id: 'fransk-1-18-1-def-1',
      type: 'definition',
      title: 'Boyning av pouvoir (a kunne)',
      content: `**Pouvoir** er et uregelmessig verb:

| Person | Pouvoir | Norsk |
|--------|---------|-------|
| je | peux | jeg kan |
| tu | peux | du kan |
| il/elle | peut | han/hun kan |
| nous | pouvons | vi kan |
| vous | pouvez | dere kan / De kan |
| ils/elles | peuvent | de kan |

**Struktur:** pouvoir (bøyd) + infinitiv

- Je **peux parler** français. (Jeg kan snakke fransk.)
- Tu **peux venir** demain ? (Kan du komme i morgen?)`,
    },
    {
      id: 'fransk-1-18-1-text-1',
      type: 'text',
      content: `## Bruk av pouvoir

Pouvoir brukes for:

**1. Evne (a være i stand til):**
| Fransk | Norsk |
|--------|-------|
| Je peux nager. | Jeg kan svømme. |
| Elle peut courir vite. | Hun kan løpe fort. |

**2. Tillatelse (a få lov til):**
| Fransk | Norsk |
|--------|-------|
| Tu peux sortir. | Du kan (får lov til a) gå ut. |
| On peut manger ici ? | Kan vi spise her? |

**3. Hoeflige forespørsler:**
| Fransk | Norsk |
|--------|-------|
| Pouvez-vous m'aider ? | Kan De hjelpe meg? |
| Tu peux répéter ? | Kan du gjenta? |
| Est-ce que je peux aller aux toilettes ? | Kan jeg gå på toalettet? |`,
    },
    {
      id: 'fransk-1-18-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Boyning av pouvoir',
      problem: `Fyll inn riktig form av pouvoir:
a) Je ___ parler français.
b) Tu ___ venir ce soir ?
c) Nous ___ jouer au foot.
d) Ils ___ chanter bien.`,
      solution: `a) Je **peux** parler français.
b) Tu **peux** venir ce soir ?
c) Nous **pouvons** jouer au foot.
d) Ils **peuvent** chanter bien.

**Merk:** je/tu har **samme** form (peux), mens il/elle har peut (uten x).`,
    },
    {
      id: 'fransk-1-18-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av pouvoir.',
        subTasks: [
          { label: 'a', task: 'Tu ___ m\'aider ?', solution: 'peux' },
          { label: 'b', task: 'Elle ___ danser très bien.', solution: 'peut' },
          { label: 'c', task: 'Vous ___ répéter, s\'il vous plait ?', solution: 'pouvez' },
          { label: 'd', task: 'Nous ___ partir a midi.', solution: 'pouvons' },
        ],
        solution: 'a) peux, b) peut, c) pouvez, d) pouvons',
        hints: ['je/tu = peux, il/elle = peut, nous = pouvons, vous = pouvez, ils/elles = peuvent'],
      },
    },
    {
      id: 'fransk-1-18-1-text-2',
      type: 'text',
      content: `## Nektelse med pouvoir

Nektelse med pouvoir: **ne + pouvoir + pas + infinitiv**

| Bekreftende | Nektende |
|-------------|----------|
| Je peux venir. | Je **ne peux pas** venir. |
| Tu peux sortir. | Tu **ne peux pas** sortir. |
| On peut manger. | On **ne peut pas** manger. |

**Eksempler:**
- Je ne peux pas nager. (Jeg kan ikke svømme.)
- Elle ne peut pas venir demain. (Hun kan ikke komme i morgen.)
- Nous ne pouvons pas rester. (Vi kan ikke bli.)`,
    },
    {
      id: 'fransk-1-18-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Nektelse med pouvoir',
      problem: `Gjør setningene nektende:
a) Je peux venir ce soir.
b) Elle peut manger du gluten.
c) Ils peuvent jouer dehors.`,
      solution: `a) Je **ne peux pas** venir ce soir. (Jeg kan ikke komme i kveld.)
b) Elle **ne peut pas** manger du gluten. (Hun kan ikke spise gluten.)
c) Ils **ne peuvent pas** jouer dehors. (De kan ikke leke ute.)`,
    },
    {
      id: 'fransk-1-18-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med pouvoir.',
        subTasks: [
          { label: 'a', task: 'Jeg kan snakke fransk.', solution: 'Je peux parler français.' },
          { label: 'b', task: 'Kan du hjelpe meg?', solution: "Tu peux m'aider ? / Est-ce que tu peux m'aider ?" },
          { label: 'c', task: 'Vi kan ikke komme i morgen.', solution: 'Nous ne pouvons pas venir demain.' },
          { label: 'd', task: 'Kan jeg gå på toalettet?', solution: 'Est-ce que je peux aller aux toilettes ?' },
        ],
        solution: "a) Je peux parler français. b) Tu peux m'aider ? c) Nous ne pouvons pas venir demain. d) Est-ce que je peux aller aux toilettes ?",
        hints: ['pouvoir + infinitiv', 'Nektelse: ne + pouvoir + pas + infinitiv'],
      },
    },
    {
      id: 'fransk-1-18-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Pouvoir i dialog',
      problem: `Oversett dialogen til norsk:
- Est-ce que tu peux venir a ma fête samedi ?
- Désolée, je ne peux pas. Je dois travailler.
- Et dimanche, tu peux ?
- Oui, dimanche je peux venir !`,
      solution: `- Kan du komme i bursdagen min på lørdag?
- Beklager, jeg kan ikke. Jeg må jobbe.
- Og på søndag, kan du?
- Ja, på søndag kan jeg komme!`,
    },
    {
      id: 'fransk-1-18-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv hva disse personene kan og ikke kan gjøre.',
        subTasks: [
          { label: 'a', task: 'Marie / svømme (ja) og fly (nei)', solution: 'Marie peut nager. Elle ne peut pas voler.' },
          { label: 'b', task: 'Vi / snakke fransk (ja) og snakke kinesisk (nei)', solution: 'Nous pouvons parler français. Nous ne pouvons pas parler chinois.' },
          { label: 'c', task: 'De / spille fotball (ja) og spille tennis (nei)', solution: 'Ils peuvent jouer au foot. Ils ne peuvent pas jouer au tennis.' },
        ],
        solution: 'a) Marie peut nager. Elle ne peut pas voler. b) Nous pouvons parler français. Nous ne pouvons pas parler chinois. c) Ils peuvent jouer au foot. Ils ne peuvent pas jouer au tennis.',
        hints: ['Bruk pouvoir + infinitiv for "kan"', 'ne + pouvoir + pas + infinitiv for "kan ikke"'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-18-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv en kort dialog (4-6 setninger) der du inviterer en venn til en aktivitet. Bruk pouvoir i både bekreftende og nektende form.',
        subTasks: [
          { label: 'a', task: 'Spor om vennen kan gjøre noe på lørdag.', solution: 'Eksempel: Est-ce que tu peux aller au cinéma samedi ?' },
          { label: 'b', task: 'Vennen kan ikke på lørdag. Gi en grunn.', solution: 'Eksempel: Désolée, je ne peux pas samedi. Je dois étudier.' },
          { label: 'c', task: 'Foreslaa en annen dag og vennen sier ja.', solution: 'Eksempel: Et dimanche ? - Oui, dimanche je peux venir ! Super !' },
        ],
        solution: "Eksempel: - Est-ce que tu peux aller au cinéma samedi ? - Désolée, je ne peux pas samedi. Je dois étudier. - Et dimanche, tu peux ? - Oui, dimanche je peux venir ! Super !",
        hints: ['Bruk est-ce que for a stille spørsmål', 'Bruk ne...pas for nektelse', 'Foreslaa aktiviteter: aller au cinéma, jouer au foot, faire une promenade'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 18.2: Vouloir - A ville
// ============================================================================

export const CHAPTER_FRANSK_1_18_2: TextbookChapter = {
  id: 'fransk-1-18-2',
  courseId: 'fransk-1',
  chapterNumber: '18.2',
  title: 'Vouloir',
  subtitle: 'A ville',
  description: 'Lær a bøye og bruke det modale verbet vouloir (a ville) og den høflige formen je voudrais.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke verbet vouloir og den høflige formen je voudrais',
  ],
  content: [
    {
      id: 'fransk-1-18-2-intro',
      type: 'text',
      content: `## Vouloir - a ville/ønske

**Vouloir** er et av de viktigste verbene på fransk. Du bruker det for a uttrykke hva du vil, ønsker eller har lyst til. Det er også viktig a lære den høflige formen **je voudrais** (jeg ville gjerne), som brukes mye i butikker, restauranter og i høflige forespørsler.`,
    },
    {
      id: 'fransk-1-18-2-def-1',
      type: 'definition',
      title: 'Boyning av vouloir (a ville)',
      content: `**Vouloir** er et uregelmessig verb:

| Person | Vouloir | Norsk |
|--------|---------|-------|
| je | veux | jeg vil |
| tu | veux | du vil |
| il/elle | veut | han/hun vil |
| nous | voulons | vi vil |
| vous | voulez | dere vil / De vil |
| ils/elles | veulent | de vil |

**Struktur:** vouloir (bøyd) + infinitiv / substantiv

- Je **veux manger**. (Jeg vil spise.)
- Tu **veux un café** ? (Vil du ha en kaffe?)`,
    },
    {
      id: 'fransk-1-18-2-text-1',
      type: 'text',
      content: `## Je voudrais - den høflige formen

På norsk er det høfligere a si "jeg vil gjerne ha..." enn "jeg vil ha!". På fransk er det det samme:

| Direkte (uhoflig) | Høflig |
|--------------------|---------|
| Je veux un café. | **Je voudrais** un café. |
| Je veux manger. | **Je voudrais** manger. |

**Je voudrais** er kondisjonalis (betinget form) av vouloir og brukes svart mye:

| Person | Kondisjonalis | Norsk |
|--------|---------------|-------|
| je | voudrais | jeg ville gjerne |
| tu | voudrais | du ville gjerne |
| il/elle | voudrait | han/hun ville gjerne |
| nous | voudrions | vi ville gjerne |
| vous | voudriez | dere ville gjerne |
| ils/elles | voudraient | de ville gjerne |

**Vanlige situasjoner med je voudrais:**
- På restaurant: Je voudrais le menu du jour. (Jeg vil gjerne ha dagens meny.)
- I butikk: Je voudrais un kilo de pommes. (Jeg vil gjerne ha et kilo epler.)
- Foresporsler: Je voudrais poser une question. (Jeg vil gjerne stille et spørsmål.)`,
    },
    {
      id: 'fransk-1-18-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Vouloir i presens',
      problem: `Fyll inn riktig form av vouloir:
a) Je ___ un croissant.
b) Tu ___ venir avec nous ?
c) Elle ___ achèter une robe.
d) Ils ___ jouer au foot.`,
      solution: `a) Je **veux** un croissant.
b) Tu **veux** venir avec nous ?
c) Elle **veut** achèter une robe.
d) Ils **veulent** jouer au foot.

**Merk:** je/tu = veux, il/elle = veut (uten x), ils/elles = veulent.`,
    },
    {
      id: 'fransk-1-18-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av vouloir.',
        subTasks: [
          { label: 'a', task: 'Nous ___ voyager en France.', solution: 'voulons' },
          { label: 'b', task: 'Vous ___ du the ou du café ?', solution: 'voulez' },
          { label: 'c', task: 'Il ___ devenir médecin.', solution: 'veut' },
          { label: 'd', task: 'Elles ___ apprendre le français.', solution: 'veulent' },
        ],
        solution: 'a) voulons, b) voulez, c) veut, d) veulent',
        hints: ['nous = voulons, vous = voulez, il/elle = veut, ils/elles = veulent'],
      },
    },
    {
      id: 'fransk-1-18-2-text-2',
      type: 'text',
      content: `## Nyttige uttrykk med vouloir

| Fransk | Norsk |
|--------|-------|
| Tu veux bien... ? | Kan du være så snill a...? |
| Je veux bien ! | Ja, gjerne! |
| Qu'est-ce que tu veux ? | Hva vil du ha? |
| Qu'est-ce que vous voulez ? | Hva ønsker De? |
| Je ne veux pas... | Jeg vil ikke... |
| Comme tu veux. | Som du vil. |
| Je voudrais savoir... | Jeg vil gjerne vite... |

**Dialog på restaurant:**
- Bonjour, qu'est-ce que vous voulez ? (Hva ønsker De?)
- Je voudrais un steak-frites, s'il vous plaît. (Jeg vil gjerne ha biff med pommes frites, takk.)
- Et comme boisson ? (Og som drikke?)
- Je voudrais un coca, s'il vous plaît. (Jeg vil gjerne ha en cola, takk.)`,
    },
    {
      id: 'fransk-1-18-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Vouloir vs. voudrais',
      problem: `Hvilken form er mest passende? Velg veux/veut eller voudrais/voudrait:
a) På restaurant: Je ___ un café, s'il vous plaît.
b) Til en venn: Tu ___ jouer au foot ?
c) I butikk: Je ___ deux baguettes, s'il vous plaît.`,
      solution: `a) Je **voudrais** un café. (Høflig - på restaurant bruker vi kondisjonalis)
b) Tu **veux** jouer au foot ? (Uformelt - mellom venner er presens greit)
c) Je **voudrais** deux baguettes. (Høflig - i butikk bruker vi kondisjonalis)

**Tommelfingerregel:** Bruk voudrais når du snakker med fremmede, i butikker og restauranter. Bruk veux med venner og familie.`,
    },
    {
      id: 'fransk-1-18-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Velg mellom vouloir (presens) og voudrais (høflig).',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne ha en croissant, takk. (i bakeri)', solution: 'Je voudrais un croissant, s\'il vous plait.' },
          { label: 'b', task: 'Vil du se en film? (til en venn)', solution: 'Tu veux regarder un film ?' },
          { label: 'c', task: 'Vi vil gjerne bestille. (på restaurant)', solution: 'Nous voudrions commander, s\'il vous plait.' },
          { label: 'd', task: 'De vil spille tennis. (om venner)', solution: 'Ils veulent jouer au tennis.' },
        ],
        solution: "a) Je voudrais un croissant, s'il vous plaît. b) Tu veux regarder un film ? c) Nous voudrions commander, s'il vous plaît. d) Ils veulent jouer au tennis.",
        hints: ['Bruk voudrais/voudrions i høflige situasjoner (butikk, restaurant)', 'Bruk veux/veut med venner'],
      },
    },
    {
      id: 'fransk-1-18-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Nektelse med vouloir',
      problem: `Gjør setningene nektende:
a) Je veux sortir.
b) Elle veut manger.
c) Nous voulons rester.`,
      solution: `a) Je **ne veux pas** sortir. (Jeg vil ikke gå ut.)
b) Elle **ne veut pas** manger. (Hun vil ikke spise.)
c) Nous **ne voulons pas** rester. (Vi vil ikke bli.)

ne...pas rundt det bøyede verbet, akkurat som med andre verb.`,
    },
    {
      id: 'fransk-1-18-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv hva disse personene vil og ikke vil.',
        subTasks: [
          { label: 'a', task: 'Pierre vil spise pizza, men ikke salat.', solution: 'Pierre veut manger de la pizza. Il ne veut pas manger de la salade.' },
          { label: 'b', task: 'Jeg vil gjerne ha vann, ikke brus. (høflig)', solution: "Je voudrais de l'eau, s'il vous plaît. Je ne veux pas de soda." },
          { label: 'c', task: 'De vil reise til Frankrike, men ikke til England.', solution: "Ils veulent voyager en France. Ils ne veulent pas voyager en Angleterre." },
        ],
        solution: "a) Pierre veut manger de la pizza. Il ne veut pas manger de la salade. b) Je voudrais de l'eau. Je ne veux pas de soda. c) Ils veulent voyager en France. Ils ne veulent pas voyager en Angleterre.",
        hints: ['Bruk vouloir + infinitiv eller vouloir + substantiv', 'ne + vouloir + pas for nektelse'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-18-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv en dialog på en restaurant. Bruk både vouloir og voudrais. Servitoren spor hva gjestene ønsker, og to gjester bestiller.',
        subTasks: [
          { label: 'a', task: 'Servitoren spor hva de vil bestille.', solution: "Eksempel: Bonjour ! Qu'est-ce que vous voulez commander ?" },
          { label: 'b', task: 'Gjest 1 bestiller mat og drikke høflig.', solution: "Eksempel: Je voudrais le poulet avec des frites et un verre d'eau, s'il vous plaît." },
          { label: 'c', task: 'Gjest 2 bestiller, men vil ikke ha dessert.', solution: "Eksempel: Je voudrais une salade niçoise et un coca. Je ne veux pas de dessert, merci." },
        ],
        solution: "Eksempel: - Bonjour ! Qu'est-ce que vous voulez commander ? - Je voudrais le poulet avec des frites et un verre d'eau, s'il vous plaît. - Et pour vous ? - Je voudrais une salade niçoise et un coca. Je ne veux pas de dessert, merci.",
        hints: ['Servitoren kan bruke vouloir i presens', 'Gjestene bor bruke voudrais (høflig)', 'Bruk s\'il vous plait og merci'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 18.3: Devoir - A matte
// ============================================================================

export const CHAPTER_FRANSK_1_18_3: TextbookChapter = {
  id: 'fransk-1-18-3',
  courseId: 'fransk-1',
  chapterNumber: '18.3',
  title: 'Devoir',
  subtitle: 'A matte',
  description: 'Lær a bøye og bruke det modale verbet devoir (a matte) og uttrykket il faut for a uttrykke plikt og nødvendighet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke plikt og nødvendighet med devoir og il faut',
  ],
  content: [
    {
      id: 'fransk-1-18-3-intro',
      type: 'text',
      content: `## Devoir - a matte

**Devoir** brukes for a uttrykke at noe er nødvendig, at man er forpliktet til noe, eller at man bor gjøre noe. På norsk tilsvarer det "matte", "burde" eller "være nodt til".

I tillegg lærer du uttrykket **il faut** som betyr "man ma" eller "det er nødvendig".`,
    },
    {
      id: 'fransk-1-18-3-def-1',
      type: 'definition',
      title: 'Boyning av devoir (a matte)',
      content: `**Devoir** er et uregelmessig verb:

| Person | Devoir | Norsk |
|--------|--------|-------|
| je | dois | jeg må |
| tu | dois | du må |
| il/elle | doit | han/hun må |
| nous | devons | vi må |
| vous | devez | dere ma / De må |
| ils/elles | doivent | de må |

**Struktur:** devoir (bøyd) + infinitiv

- Je **dois partir**. (Jeg må dra.)
- Tu **dois étudier**. (Du må studere.)`,
    },
    {
      id: 'fransk-1-18-3-text-1',
      type: 'text',
      content: `## Bruk av devoir

**1. Plikt og nødvendighet:**
| Fransk | Norsk |
|--------|-------|
| Je dois faire mes devoirs. | Jeg må gjøre leksene. |
| Tu dois ranger ta chambre. | Du må rydde rommet ditt. |
| Nous devons arriver a l'heure. | Vi må komme tidsnok. |

**2. Rad (burde):**
| Fransk | Norsk |
|--------|-------|
| Tu dois manger des legumes. | Du bor spise grønnsaker. |
| Vous devez dormir plus. | Dere bor sove mer. |

**3. Sannsynlighet (må være):**
| Fransk | Norsk |
|--------|-------|
| Il doit être fatigue. | Han må være trøtt. |
| Elle doit avoir 16 ans. | Hun må være 16 år. |`,
    },
    {
      id: 'fransk-1-18-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Boyning av devoir',
      problem: `Fyll inn riktig form av devoir:
a) Je ___ partir maintenant.
b) Tu ___ étudier pour l'examen.
c) Nous ___ être a l'école a 8 heures.
d) Ils ___ finir le projet.`,
      solution: `a) Je **dois** partir maintenant. (Jeg må dra nå.)
b) Tu **dois** étudier pour l'examen. (Du må studere til eksamen.)
c) Nous **devons** être a l'école a 8 heures. (Vi må være på skolen klokken 8.)
d) Ils **doivent** finir le projet. (De må fullføre prosjektet.)`,
    },
    {
      id: 'fransk-1-18-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av devoir.',
        subTasks: [
          { label: 'a', task: 'Elle ___ travailler ce soir.', solution: 'doit' },
          { label: 'b', task: 'Vous ___ écouter le professeur.', solution: 'devez' },
          { label: 'c', task: 'Ils ___ ranger la maison.', solution: 'doivent' },
          { label: 'd', task: 'Je ___ me lever tot demain.', solution: 'dois' },
        ],
        solution: 'a) doit, b) devez, c) doivent, d) dois',
        hints: ['je/tu = dois, il/elle = doit, nous = devons, vous = devez, ils/elles = doivent'],
      },
    },
    {
      id: 'fransk-1-18-3-def-2',
      type: 'definition',
      title: 'Il faut - Man ma / Det er nødvendig',
      content: `**Il faut** er et upersonlig uttrykk som betyr "man ma" eller "det er nødvendig":

**Il faut + infinitiv**

| Fransk | Norsk |
|--------|-------|
| Il faut étudier. | Man må studere. |
| Il faut manger des legumes. | Man må spise grønnsaker. |
| Il faut être a l'heure. | Man må være tidsnok. |

**Nektelse:** Il **ne** faut **pas** + infinitiv = man må ikke

| Fransk | Norsk |
|--------|-------|
| Il ne faut pas tricher. | Man må ikke jukse. |
| Il ne faut pas courir ici. | Man må ikke løpe her. |

**Forskjellen mellom devoir og il faut:**
- **Devoir** har et personlig subjekt: **Je** dois partir. (Jeg må dra.)
- **Il faut** er upersonlig (generelt): Il faut partir. (Man må dra.)`,
    },
    {
      id: 'fransk-1-18-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Devoir vs. il faut',
      problem: `Velg den beste oversettelsen:
a) Du må gjøre leksene.
b) Man må være høflig.
c) Vi må gå nå.`,
      solution: `a) **Tu dois** faire tes devoirs. (Personlig - du bestemt)
b) **Il faut** être poli. (Upersonlig - generell regel)
c) **Nous devons** partir maintenant. (Personlig - vi bestemt)

**Huskeregel:** Bruk devoir når du vet **hvem** som må gjøre noe. Bruk il faut for generelle regler.`,
    },
    {
      id: 'fransk-1-18-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg devoir (bøyd) eller il faut, og oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg må stå opp tidlig.', solution: 'Je dois me lever tot.' },
          { label: 'b', task: 'Man må være stille på biblioteket.', solution: 'Il faut être silencieux a la bibliotheque.' },
          { label: 'c', task: 'De må levere prosjektet i morgen.', solution: 'Ils doivent rendre le projet demain.' },
          { label: 'd', task: 'Man må ikke bruke telefon i timen.', solution: 'Il ne faut pas utiliser le téléphone en classe.' },
        ],
        solution: 'a) Je dois me lever tot. b) Il faut être silencieux a la bibliotheque. c) Ils doivent rendre le projet demain. d) Il ne faut pas utiliser le téléphone en classe.',
        hints: ['Personlig subjekt (je, tu, il...) -> devoir', 'Generell regel (man må) -> il faut'],
      },
    },
    {
      id: 'fransk-1-18-3-text-2',
      type: 'text',
      content: `## Skoleregler med devoir og il faut

Her er typiske skoleregler:

| Fransk | Norsk |
|--------|-------|
| Il faut arriver a l'heure. | Man må komme tidsnok. |
| Il ne faut pas tricher a l'examen. | Man må ikke jukse på eksamen. |
| Les élèves doivent écouter le professeur. | Elevene må lytte til læreren. |
| On doit lever la main pour parler. | Man må rekke opp hånden for a snakke. |
| Il faut respecter les autres. | Man må respektere andre. |
| Vous devez faire vos devoirs chaque jour. | Dere må gjøre leksene hver dag. |`,
    },
    {
      id: 'fransk-1-18-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Skoleregler',
      problem: `Oversett til norsk:
a) Les élèves doivent porter un uniforme.
b) Il ne faut pas manger en classe.
c) Nous devons être polis avec les professeurs.`,
      solution: `a) Elevene må ha på seg uniform.
b) Man må ikke spise i klasserommet.
c) Vi må være høflige med lærerne.`,
    },
    {
      id: 'fransk-1-18-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse skolereglene til fransk.',
        subTasks: [
          { label: 'a', task: 'Man må gjøre leksene.', solution: 'Il faut faire les devoirs.' },
          { label: 'b', task: 'Vi må være stille i biblioteket.', solution: 'Nous devons être silencieux a la bibliotheque.' },
          { label: 'c', task: 'Man må ikke løpe i gangene.', solution: 'Il ne faut pas courir dans les couloirs.' },
        ],
        solution: 'a) Il faut faire les devoirs. b) Nous devons être silencieux a la bibliotheque. c) Il ne faut pas courir dans les couloirs.',
        hints: ['Bruk il faut for generelle regler', 'Bruk devoir når subjektet er spesifikt'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-18-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Skriv 5 regler for din ideelle skole på fransk. Bruk både devoir og il faut, og inkluder minst en nektende regel.',
        subTasks: [
          { label: 'a', task: 'Skriv to regler med il faut (en positiv, en negativ).', solution: 'Eksempel: Il faut être respectueux. Il ne faut pas utiliser le téléphone en classe.' },
          { label: 'b', task: 'Skriv to regler med devoir (bruk ulike subjekter).', solution: 'Eksempel: Les élèves doivent arriver a l\'heure. Le professeur doit être juste.' },
          { label: 'c', task: 'Skriv en regel som kombinerer pouvoir og devoir.', solution: 'Eksempel: Les élèves peuvent manger a la cantine, mais ils doivent ranger après.' },
        ],
        solution: "Eksempel: Il faut être respectueux. Il ne faut pas utiliser le téléphone en classe. Les élèves doivent arriver a l'heure. Le professeur doit être juste. Les élèves peuvent manger a la cantine, mais ils doivent ranger après.",
        hints: ['Bruk både il faut og devoir', 'Husk il ne faut pas for nektende regler', 'Kombiner gjerne med pouvoir fra forrige kapittel'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 18.4: Savoir et connaître - To typer "a vite/kjenne"
// ============================================================================

export const CHAPTER_FRANSK_1_18_4: TextbookChapter = {
  id: 'fransk-1-18-4',
  courseId: 'fransk-1',
  chapterNumber: '18.4',
  title: 'Savoir et connaître',
  subtitle: 'To typer "a vite/kjenne"',
  description: 'Lær forskjellen mellom savoir (a vite fakta/ferdigheter) og connaître (a kjenne personer/steder).',
  estimatedMinutes: 45,
  competenceGoals: [
    'skille mellom savoir og connaître',
  ],
  content: [
    {
      id: 'fransk-1-18-4-intro',
      type: 'text',
      content: `## To verb for "a vite" og "a kjenne"

På norsk bruker vi "a vite" og "a kjenne" litt om hverandre. På fransk er det strengere regler! Fransk har **to ulike verb**:

- **Savoir** = å vite (fakta, informasjon, ferdigheter)
- **Connaître** = å kjenne (personer, steder, ting man har erfaring med)

Det er viktig a velge riktig verb!`,
    },
    {
      id: 'fransk-1-18-4-def-1',
      type: 'definition',
      title: 'Boyning av savoir og connaître',
      content: `**Savoir** (a vite):

| Person | Savoir |
|--------|--------|
| je | sais |
| tu | sais |
| il/elle | sait |
| nous | savons |
| vous | savez |
| ils/elles | savent |

**Connaître** (a kjenne):

| Person | Connaître |
|--------|-----------|
| je | connais |
| tu | connais |
| il/elle | connaît |
| nous | connaissons |
| vous | connaissez |
| ils/elles | connaissent |

**Merk:** Connaître har dobbelt-s i flertallsformene (nous, vous, ils/elles).`,
    },
    {
      id: 'fransk-1-18-4-text-1',
      type: 'text',
      content: `## Når bruker vi savoir?

**Savoir** brukes for:

**1. Fakta og informasjon (ofte med at/om/hvem/hvor osv.):**
| Fransk | Norsk |
|--------|-------|
| Je sais que tu as raison. | Jeg vet at du har rett. |
| Tu sais ou il habite ? | Vet du hvor han bor? |
| Elle sait combien ça coûte. | Hun vet hvor mye det koster. |

**2. Ferdigheter (savoir + infinitiv = å kunne):**
| Fransk | Norsk |
|--------|-------|
| Je sais nager. | Jeg kan svømme. |
| Tu sais conduire ? | Kan du kjøre? |
| Elle sait parler trois langues. | Hun kan snakke tre språk. |

**Merk:** Savoir + infinitiv = "a kunne" (lært ferdighet). Pouvoir + infinitiv = "a kunne" (mulighet/tillatelse).
- Je **sais** nager. (Jeg har lært a svømme.)
- Je **peux** nager ici. (Jeg har lov/mulighet til a svømme her.)`,
    },
    {
      id: 'fransk-1-18-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Savoir',
      problem: `Oversett til fransk med savoir:
a) Jeg vet svaret.
b) Vet du hvor hun bor?
c) Han kan svømme.`,
      solution: `a) Je **sais** la réponse.
b) Tu **sais** ou elle habite ?
c) Il **sait** nager.

Savoir brukes fordi det handler om fakta (a, b) og en lært ferdighet (c).`,
    },
    {
      id: 'fransk-1-18-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av savoir.',
        subTasks: [
          { label: 'a', task: 'Je ___ parler français.', solution: 'sais' },
          { label: 'b', task: 'Tu ___ ou est la gare ?', solution: 'sais' },
          { label: 'c', task: 'Nous ___ la réponse.', solution: 'savons' },
          { label: 'd', task: 'Elles ___ jouer du piano.', solution: 'savent' },
        ],
        solution: 'a) sais, b) sais, c) savons, d) savent',
        hints: ['je/tu = sais, il/elle = sait, nous = savons, vous = savez, ils/elles = savent'],
      },
    },
    {
      id: 'fransk-1-18-4-text-2',
      type: 'text',
      content: `## Når bruker vi connaître?

**Connaître** brukes for:

**1. Personer:**
| Fransk | Norsk |
|--------|-------|
| Je connais Marie. | Jeg kjenner Marie. |
| Tu connais mon frere ? | Kjenner du broren min? |

**2. Steder:**
| Fransk | Norsk |
|--------|-------|
| Je connais bien Paris. | Jeg kjenner Paris godt. |
| Vous connaissez ce restaurant ? | Kjenner dere denne restauranten? |

**3. Ting man har erfaring med (boker, filmer, sanger osv.):**
| Fransk | Norsk |
|--------|-------|
| Tu connais cette chanson ? | Kjenner du denne sangen? |
| Je connais bien ce livre. | Jeg kjenner denne boken godt. |

**Viktig:** Connaître følges **alltid** av et substantiv (aldri av en setning eller infinitiv).`,
    },
    {
      id: 'fransk-1-18-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Savoir eller connaître?',
      problem: `Velg savoir eller connaître:
a) Je ___ ou est la poste.
b) Tu ___ Pierre ?
c) Elle ___ faire du ski.
d) Nous ___ bien cette ville.`,
      solution: `a) Je **sais** ou est la poste. (Fakta - savoir + ou)
b) Tu **connais** Pierre ? (Person - connaître)
c) Elle **sait** faire du ski. (Ferdighet - savoir + infinitiv)
d) Nous **connaissons** bien cette ville. (Sted - connaître)

**Huskeregel:** Connaître + substantiv (person/sted/ting). Savoir + setning/infinitiv.`,
    },
    {
      id: 'fransk-1-18-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av savoir eller connaître.',
        subTasks: [
          { label: 'a', task: 'Tu ___ mon ami Paul ?', solution: 'connais (person)' },
          { label: 'b', task: 'Je ___ que c\'est difficile.', solution: 'sais (fakta - savoir + que)' },
          { label: 'c', task: 'Vous ___ Paris ?', solution: 'connaissez (sted)' },
          { label: 'd', task: 'Ils ___ cuisiner.', solution: 'savent (ferdighet - savoir + infinitiv)' },
        ],
        solution: 'a) connais, b) sais, c) connaissez, d) savent',
        hints: ['Person/sted/ting -> connaître', 'Fakta (que, ou, comment...) eller ferdighet (+ infinitiv) -> savoir'],
      },
    },
    {
      id: 'fransk-1-18-4-text-3',
      type: 'text',
      content: `## Oppsummering: Savoir vs. connaître

| Savoir | Connaître |
|--------|-----------|
| Fakta: Je sais que... | Personer: Je connais Marie. |
| Informasjon: Je sais ou/quand/comment... | Steder: Je connais Paris. |
| Ferdigheter: Je sais nager. | Erfaringer: Je connais ce film. |
| Folges av: que, ou, infinitiv | Folges av: substantiv (aldri infinitiv!) |

**Huskeregler:**
- Hvis det følger et **verb i infinitiv** -> savoir
- Hvis det følger et **sporsmaalord** (ou, quand, comment...) -> savoir
- Hvis det følger et **personnavn eller sted** -> connaître
- Hvis du kan erstatte med "a være kjent med" -> connaître`,
    },
    {
      id: 'fransk-1-18-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Savoir vs. connaître i kontekst',
      problem: `Velg riktig verb og booy det:
a) Est-ce que vous ___ (savoir/connaître) la réponse ?
b) Nous ___ (savoir/connaître) un bon restaurant.
c) Tu ___ (savoir/connaître) à quelle heure commence le film ?`,
      solution: `a) Est-ce que vous **savez** la réponse ? (Savoir - fakta/informasjon)
b) Nous **connaissons** un bon restaurant. (Connaître - sted/erfaring)
c) Tu **sais** à quelle heure commence le film ? (Savoir - informasjon med sporsmaalord)

**Merk:** Med "la réponse" kan man bruke savoir (vite svaret) - det handler om informasjon, ikke et sted/person.`,
    },
    {
      id: 'fransk-1-18-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Velg mellom savoir og connaître.',
        subTasks: [
          { label: 'a', task: 'Kjenner du Paris?', solution: 'Tu connais Paris ?' },
          { label: 'b', task: 'Vet du hvor han bor?', solution: 'Tu sais ou il habite ?' },
          { label: 'c', task: 'Kan du lage mat? (ferdighet)', solution: 'Tu sais cuisiner ?' },
          { label: 'd', task: 'Vi kjenner ikke denne sangen.', solution: 'Nous ne connaissons pas cette chanson.' },
        ],
        solution: 'a) Tu connais Paris ? b) Tu sais ou il habite ? c) Tu sais cuisiner ? d) Nous ne connaissons pas cette chanson.',
        hints: ['Sted -> connaître', 'Informasjon (ou) -> savoir', 'Ferdighet (+ infinitiv) -> savoir', 'Ting/erfaring -> connaître'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-18-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-18-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Samleoppgave: Fyll inn riktig modalverb (pouvoir, vouloir, devoir, savoir, connaître) i riktig form. Alle fem verbene fra kapittel 18 er med!',
        subTasks: [
          { label: 'a', task: 'Je ___ nager, mais je ne ___ pas nager ici. C\'est interdit. (ferdighet / tillatelse)', solution: 'sais / peux (savoir = ferdighet, pouvoir = tillatelse)' },
          { label: 'b', task: 'Elle ___ aller a Paris parce qu\'elle ___ bien la ville. (ønske / kjennskap)', solution: 'veut / connaît (vouloir = ønske, connaître = kjenne sted)' },
          { label: 'c', task: 'Nous ___ partir maintenant. Il ___ être a l\'école avant 8 heures. (plikt / nødvendighet)', solution: 'devons / faut (devoir = personlig plikt, il faut = generell regel)' },
          { label: 'd', task: 'Tu ___ ou est le cinéma ? Je ___ y aller ce soir. (vite / ønske)', solution: 'sais / veux (savoir = vite informasjon, vouloir = ønske)' },
        ],
        solution: 'a) sais / peux, b) veut / connaît, c) devons / faut, d) sais / veux',
        hints: ['Savoir = vite/kunne (ferdighet)', 'Pouvoir = kunne (evne/tillatelse)', 'Vouloir = ville/ønske', 'Devoir = matte', 'Connaître = kjenne (person/sted)'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_1_CHAPTERS_17_18: TextbookChapter[] = [
  CHAPTER_FRANSK_1_17_1,
  CHAPTER_FRANSK_1_17_2,
  CHAPTER_FRANSK_1_17_3,
  CHAPTER_FRANSK_1_17_4,
  CHAPTER_FRANSK_1_18_1,
  CHAPTER_FRANSK_1_18_2,
  CHAPTER_FRANSK_1_18_3,
  CHAPTER_FRANSK_1_18_4,
];
