/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Niva 1 - Kapittel 7-8
 * Klaer og shopping, Skole og yrker
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Les vetements - Klaerne
// ============================================================================

export const CHAPTER_FRANSK_1_7_1: TextbookChapter = {
  id: 'fransk-1-7-1',
  courseId: 'fransk-1',
  chapterNumber: '7.1',
  title: 'Les vetements',
  subtitle: 'Klaerne',
  description: 'Laer grunnleggende ord for klaer pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'laere ord for vanlige klaesplagg',
    'bruke riktig artikkel og kjoenn med klaesord',
    'beskrive hva man har pa seg',
  ],
  content: [
    {
      id: 'fransk-1-7-1-intro',
      type: 'text',
      content: `## Klaer pa fransk

A kunne snakke om klaer er nyttig i mange situasjoner - nar du handler, pakker til en reise, eller bare beskriver hva noen har pa seg.

Pa fransk har alle substantiver kjoenn: hankjoenn (masculin) eller hunkjoenn (feminin). Det er viktig a laere klaesordene med riktig artikkel! Hankjoenn bruker **un/le** og hunkjoenn bruker **une/la**.`,
    },
    {
      id: 'fransk-1-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Overkropp',
      content: `**Klaer for overkroppen:**

| Fransk | Norsk |
|--------|-------|
| une chemise | skjorte |
| un chemisier | bluse |
| un tee-shirt | t-skjorte |
| un pull (un pullover) | genser |
| une veste | jakke |
| un manteau | frakk/kape |
| une robe | kjole |`,
    },
    {
      id: 'fransk-1-7-1-def-2',
      type: 'definition',
      title: 'Vokabular: Underkropp og tilbehoer',
      content: `**Klaer for underkroppen:**

| Fransk | Norsk |
|--------|-------|
| un pantalon | bukse |
| un jean | jeans |
| une jupe | skjoert |
| un short | shorts |
| des chaussures (f. pl.) | sko |
| des chaussettes (f. pl.) | sokker |
| une ceinture | belte |`,
    },
    {
      id: 'fransk-1-7-1-text-1',
      type: 'text',
      content: `**Tilbehoer (Les accessoires):**

| Fransk | Norsk |
|--------|-------|
| un chapeau | hatt |
| un bonnet | lue |
| une echarpe | skjerf |
| des gants (m. pl.) | hansker |
| des lunettes (f. pl.) | briller |
| un sac (a main) | veske |`,
    },
    {
      id: 'fransk-1-7-1-tip-1',
      type: 'tip',
      content: `Legg merke til at noen klaesplagg ofte brukes i flertall pa fransk, akkurat som pa norsk: des chaussures (skoene), des chaussettes (sokkene), des gants (hanskene). Flertallsartikkelen "des" brukes for begge kjoenn.`,
    },
    {
      id: 'fransk-1-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Oversett til norsk',
      problem: `Oversett disse klaesordene til norsk:

a) une chemise
b) un pantalon
c) un pull
d) des chaussures`,
      solution: `a) une chemise = **skjorte**
b) un pantalon = **bukse**
c) un pull = **genser**
d) des chaussures = **sko**

**Huske-tips:** "Pantalon" likner det engelske "pants", men pa fransk er det entall (un pantalon = en bukse)!`,
    },
    {
      id: 'fransk-1-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-1-ex-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk (husk artikkelen):',
        subTasks: [
          { label: 'a', task: 'jakke', solution: 'une veste', answer: 'une veste' },
          { label: 'b', task: 'kjole', solution: 'une robe', answer: 'une robe' },
          { label: 'c', task: 'skjoert', solution: 'une jupe', answer: 'une jupe' },
          { label: 'd', task: 'genser', solution: 'un pull', answer: 'un pull' },
        ],
        solution: 'a) une veste, b) une robe, c) une jupe, d) un pull',
        hints: ['Husk at alle franske substantiver har kjoenn', 'Jupe pa fransk betyr skjoert!'],
      },
    },
    {
      id: 'fransk-1-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Hvilket kjoenn?',
      problem: `Velg riktig artikkel:

a) ___ chemise (un/une)
b) ___ veste (un/une)
c) ___ pantalon (un/une)`,
      solution: `a) **une** chemise - hunkjoenn
b) **une** veste - hunkjoenn
c) **un** pantalon - hankjoenn

**Tips:** Mange klaesplagg som slutter pa -e er hunkjoenn (une): une chemise, une veste, une jupe, une robe. Men det finnes unntak!`,
    },
    {
      id: 'fransk-1-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Velg riktig artikkel (un eller une):',
        subTasks: [
          { label: 'a', task: '___ jupe', solution: 'une', answer: 'une' },
          { label: 'b', task: '___ tee-shirt', solution: 'un', answer: 'un' },
          { label: 'c', task: '___ manteau', solution: 'un', answer: 'un' },
          { label: 'd', task: '___ robe', solution: 'une', answer: 'une' },
        ],
        solution: 'a) une jupe, b) un tee-shirt, c) un manteau, d) une robe',
        hints: ['Ord pa -e er ofte hunkjoenn', 'Manteau er hankjoenn'],
      },
    },
    {
      id: 'fransk-1-7-1-text-2',
      type: 'text',
      content: `## Flertall av klaer

Pa fransk danner vi flertall ved a legge til **-s** pa slutten av ordet. Artikkelen i flertall er **les** (bestemt) eller **des** (ubestemt):

| Entall | Flertall |
|--------|----------|
| la veste | les vestes |
| le pantalon | les pantalons |
| la chaussure | les chaussures |
| la chemise | les chemises |
| le manteau | les manteaux |`,
    },
    {
      id: 'fransk-1-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Flertall',
      problem: `Skriv flertallsformen:

a) la veste -> les ___
b) la chemise -> les ___
c) le manteau -> les ___`,
      solution: `a) la veste -> les **vestes**
b) la chemise -> les **chemises**
c) le manteau -> les **manteaux**

**Merk:** Ord pa -eau far -eaux i flertall: un manteau -> des manteaux, un chapeau -> des chapeaux.`,
    },
    {
      id: 'fransk-1-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv flertallsformen (bruk "les"):',
        subTasks: [
          { label: 'a', task: 'la jupe -> les ___', solution: 'jupes', answer: 'jupes' },
          { label: 'b', task: 'le manteau -> les ___', solution: 'manteaux', answer: 'manteaux' },
          { label: 'c', task: 'la robe -> les ___', solution: 'robes', answer: 'robes' },
          { label: 'd', task: 'le chapeau -> les ___', solution: 'chapeaux', answer: 'chapeaux' },
        ],
        solution: 'a) jupes, b) manteaux, c) robes, d) chapeaux',
        hints: ['De fleste ord far -s i flertall', 'Ord pa -eau far -eaux i flertall'],
      },
    },
    {
      id: 'fransk-1-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett hele uttrykket til fransk (med artikkel):',
        subTasks: [
          { label: 'a', task: 'en hvit skjorte', solution: 'une chemise blanche', answer: 'une chemise blanche' },
          { label: 'b', task: 'svarte sko', solution: 'des chaussures noires', answer: 'des chaussures noires' },
          { label: 'c', task: 'et roedt skjerf', solution: 'une echarpe rouge', answer: 'une echarpe rouge' },
          { label: 'd', task: 'en blaa frakk', solution: 'un manteau bleu', answer: 'un manteau bleu' },
        ],
        solution: 'a) une chemise blanche, b) des chaussures noires, c) une echarpe rouge, d) un manteau bleu',
        hints: ['Fargen star etter substantivet pa fransk', 'Husk adjektivsamsvar i kjoenn og tall'],
      },
    },
    {
      id: 'fransk-1-7-1-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `Frankrike er kjent som motehovedstaden i verden. Paris er hjemmet til mange av verdens mest kjente motehus som Chanel, Dior, Louis Vuitton og Hermes. Uttrykket "haute couture" (hoey mote) er opprinnelig fransk. Franskmenn er generelt opptatt av a kle seg godt og stilfullt, selv til hverdags.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Au magasin de vetements - I klesbutikken
// ============================================================================

export const CHAPTER_FRANSK_1_7_2: TextbookChapter = {
  id: 'fransk-1-7-2',
  courseId: 'fransk-1',
  chapterNumber: '7.2',
  title: 'Au magasin de vetements',
  subtitle: 'I klesbutikken',
  description: 'Laer a handle klaer og snakke med ekspeditoerer pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'sporsmalsfraser for shopping',
    'be om a prove klaer',
    'forstaa priser og stoerrelser',
  ],
  content: [
    {
      id: 'fransk-1-7-2-intro',
      type: 'text',
      content: `## Handle klaer pa fransk

Nar du handler klaer i Frankrike, er det nyttig a kunne noen viktige fraser. La oss laere de vanligste uttrykkene for klesbutikken!`,
    },
    {
      id: 'fransk-1-7-2-def-1',
      type: 'definition',
      title: 'Nyttige shoppingfraser',
      content: `**Spoersmaal til ekspeditoeren:**

| Fransk | Norsk |
|--------|-------|
| Je peux vous aider? | Kan jeg hjelpe deg? |
| Je peux essayer ...? | Kan jeg prove ...? |
| Vous avez ca en taille ...? | Har dere dette i stoerrelse ...? |
| Ou est la cabine d'essayage? | Hvor er proeveommet? |
| Ca coute combien? | Hva koster det? |
| Quel est le prix? | Hva er prisen? |`,
    },
    {
      id: 'fransk-1-7-2-def-2',
      type: 'definition',
      title: 'Svar og uttrykk',
      content: `**Nyttige svar:**

| Fransk | Norsk |
|--------|-------|
| Je cherche ... | Jeg leter etter ... |
| Ca me va | Det passer meg |
| Ca ne me va pas | Det passer meg ikke |
| C'est trop grand | Det er for stort |
| C'est trop petit | Det er for lite |
| Ca me plait | Jeg liker det |
| Je le prends | Jeg tar det |`,
    },
    {
      id: 'fransk-1-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: I klesbutikken',
      problem: `Les dialogen og svar pa spoersmaalene:

Vendeur: Bonjour! Je peux vous aider?
Client: Oui, je cherche une veste.
Vendeur: Quelle taille faites-vous?
Client: Taille M, s'il vous plait.
Vendeur: Voici une belle veste. Vous voulez l'essayer?
Client: Oui, merci. Ou est la cabine d'essayage?

a) Hva leter kunden etter?
b) Hvilken stoerrelse trenger kunden?`,
      solution: `a) Kunden leter etter en jakke (une veste).
b) Kunden trenger stoerrelse M (taille M).

**Viktige ord fra dialogen:**
- le vendeur / la vendeuse = ekspeditoeir
- le client / la cliente = kunde
- essayer = prove
- la cabine d'essayage = proeveom`,
    },
    {
      id: 'fransk-1-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-2-ex-1',
        number: '7.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Kan jeg prove dette?', solution: 'Je peux essayer ca?', answer: 'Je peux essayer ca' },
          { label: 'b', task: 'Hvor er proeveommet?', solution: 'Ou est la cabine d\'essayage?', answer: 'Ou est la cabine d\'essayage' },
          { label: 'c', task: 'Hva koster det?', solution: 'Ca coute combien?', answer: 'Ca coute combien' },
        ],
        solution: 'a) Je peux essayer ca?, b) Ou est la cabine d\'essayage?, c) Ca coute combien?',
        hints: ['essayer = a prove', 'couter = a koste'],
      },
    },
    {
      id: 'fransk-1-7-2-text-1',
      type: 'text',
      content: `## Betaling

Nar du skal betale, kan du bruke disse frasene:

| Fransk | Norsk |
|--------|-------|
| Je voudrais payer | Jeg vil betale |
| Je peux payer par carte? | Kan jeg betale med kort? |
| En especes seulement | Kun kontant |
| Ca fait ... euros | Det blir ... euro |
| Le recu / le ticket de caisse | Kvitteringen |`,
    },
    {
      id: 'fransk-1-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Betaling',
      problem: `Fullfoeir dialogen:

Client: La veste ___ bien. Je la ___.
Vendeur: Ca fait 49 euros.
Client: Je peux payer par ___?
Vendeur: Oui, bien sur.`,
      solution: `Client: La veste **me va** bien. Je la **prends**.
Vendeur: Ca fait 49 euros.
Client: Je peux payer par **carte**?
Vendeur: Oui, bien sur.

**Oversettelse:** Jakken passer meg godt. Jeg tar den. - Det blir 49 euro. - Kan jeg betale med kort? - Ja, selvfoelgelig.`,
    },
    {
      id: 'fransk-1-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Je ___ une jupe. (leter etter)', solution: 'cherche', answer: 'cherche' },
          { label: 'b', task: 'Ca ne me ___ pas. (passer)', solution: 'va', answer: 'va' },
          { label: 'c', task: 'C\'est trop ___. (stort)', solution: 'grand', answer: 'grand' },
          { label: 'd', task: 'Je le ___. (tar)', solution: 'prends', answer: 'prends' },
        ],
        solution: 'a) cherche, b) va, c) grand, d) prends',
        hints: ['chercher = a lete etter', 'aller = a ga/passe', 'prendre = a ta'],
      },
    },
    {
      id: 'fransk-1-7-2-text-2',
      type: 'text',
      content: `## Verbet "vouloir" (a ville/oenske)

For hoeflige oeonsker bruker vi "je voudrais" (jeg vil gjerne):

| Person | Form |
|--------|------|
| je | veux / voudrais |
| tu | veux |
| il/elle/on | veut |
| nous | voulons |
| vous | voulez |
| ils/elles | veulent |

Eksempel: Je voudrais essayer cette veste. (Jeg vil gjerne prove denne jakken.)`,
    },
    {
      id: 'fransk-1-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Vouloir',
      problem: `Oversett til fransk med "voudrais":

a) Jeg vil gjerne ha en bukse.
b) Hun vil gjerne prove kjolen.
c) Vi vil gjerne betale.`,
      solution: `a) **Je voudrais un pantalon.**
b) **Elle voudrait essayer la robe.**
c) **Nous voudrions payer.**

**Merk:** "je voudrais" er mer hoeflig enn "je veux" (jeg vil).`,
    },
    {
      id: 'fransk-1-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv setninger med "voudrais":',
        subTasks: [
          { label: 'a', task: 'jeg / prove / genseren', solution: 'Je voudrais essayer le pull.', answer: 'Je voudrais essayer le pull' },
          { label: 'b', task: 'han / ha / en jakke', solution: 'Il voudrait une veste.', answer: 'Il voudrait une veste' },
          { label: 'c', task: 'de / betale / med kort', solution: 'Ils voudraient payer par carte.', answer: 'Ils voudraient payer par carte' },
        ],
        solution: 'a) Je voudrais essayer le pull, b) Il voudrait une veste, c) Ils voudraient payer par carte',
        hints: ['voudrais er kondisjonalis av vouloir', 'Husk a bruke riktig person-form'],
      },
    },
    {
      id: 'fransk-1-7-2-tip-1',
      type: 'tip',
      content: `I Frankrike er de fleste butikker aapne fra kl. 10 til kl. 19. Mange smabutikker holder stengt mellom kl. 12 og 14 (lunsjtid). Pa soendager er de fleste butikker stengt, bortsett fra i turistomraader. "Les soldes" (salg) skjer to ganger i aaret, vanligvis i januar og juli.`,
    },
    {
      id: 'fransk-1-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en kort dialog i en klesbutikk (4-6 setninger). Bruk minst 3 av disse frasene: Je peux vous aider, Je cherche, essayer, Ca coute combien, Je le prends',
        subTasks: [
          { label: 'a', task: 'Ekspeditoerens foerste setning', solution: 'Bonjour! Je peux vous aider?' },
          { label: 'b', task: 'Kundens svar', solution: 'Oui, je cherche un tee-shirt.' },
          { label: 'c', task: 'Avslutt dialogen', solution: 'Ca coute combien? - Ca fait 25 euros. - Je le prends.' },
        ],
        solution: 'Eksempel: "Vendeur: Bonjour! Je peux vous aider? Client: Oui, je cherche un tee-shirt. Je peux essayer le bleu? Vendeur: Bien sur! Ca coute combien? Ca fait 25 euros. Client: Tres bien, je le prends."',
        hints: ['Start med en hilsen', 'Bruk hoeflig form (vous)'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Couleurs et tailles - Farger og stoerrelser
// ============================================================================

export const CHAPTER_FRANSK_1_7_3: TextbookChapter = {
  id: 'fransk-1-7-3',
  courseId: 'fransk-1',
  chapterNumber: '7.3',
  title: 'Couleurs et tailles',
  subtitle: 'Farger og stoerrelser',
  description: 'Laer farger og stoerrelser for a beskrive klaer.',
  estimatedMinutes: 40,
  competenceGoals: [
    'laere fargene pa fransk',
    'forstaa adjektivsamsvar med farger',
    'beskrive klaer med farge og stoerrelse',
  ],
  content: [
    {
      id: 'fransk-1-7-3-intro',
      type: 'text',
      content: `## Farger og stoerrelser

For a beskrive klaer trenger du a kunne fargene og stoerrelsene. La oss repetere fargene og laere hvordan vi beskriver klaer!`,
    },
    {
      id: 'fransk-1-7-3-def-1',
      type: 'definition',
      title: 'Les couleurs - Fargene',
      content: `**Grunnfargene:**

| Fransk (m.) | Fransk (f.) | Norsk |
|-------------|-------------|-------|
| rouge | rouge | roed |
| bleu | bleue | blaa |
| jaune | jaune | gul |
| vert | verte | groenn |
| blanc | blanche | hvit |
| noir | noire | svart |
| brun / marron | brune / marron | brun |
| gris | grise | graa |
| orange | orange | oransje |
| rose | rose | rosa |
| violet | violette | lilla |
| beige | beige | beige |`,
    },
    {
      id: 'fransk-1-7-3-text-1',
      type: 'text',
      content: `**Fargenyanser:**

| Fransk | Norsk |
|--------|-------|
| bleu clair | lyseblaa |
| bleu fonce | moerkeblaa |
| vert clair | lysegroen |
| vert fonce | moerkegroen |
| rouge clair | lyseroed |
| rouge fonce | moerkeroed |

**Tips:** "clair" = lys, "fonce" = moerk`,
    },
    {
      id: 'fransk-1-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Farger',
      problem: `Oversett til norsk:

a) La robe rouge
b) La veste bleue
c) Le manteau noir
d) Les chaussures blanches`,
      solution: `a) La robe rouge = **den roede kjolen**
b) La veste bleue = **den blaa jakken**
c) Le manteau noir = **den svarte frakken**
d) Les chaussures blanches = **de hvite skoene**

**Merk:** Adjektivet (fargen) samsvarer i kjoenn og tall med substantivet det beskriver. Det star vanligvis etter substantivet pa fransk.`,
    },
    {
      id: 'fransk-1-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-3-ex-1',
        number: '7.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett fargene til fransk (hankjoenn):',
        subTasks: [
          { label: 'a', task: 'roed', solution: 'rouge', answer: 'rouge' },
          { label: 'b', task: 'blaa', solution: 'bleu', answer: 'bleu' },
          { label: 'c', task: 'groenn', solution: 'vert', answer: 'vert' },
          { label: 'd', task: 'svart', solution: 'noir', answer: 'noir' },
        ],
        solution: 'a) rouge, b) bleu, c) vert, d) noir',
        hints: ['Rouge er lik i bade hankjoenn og hunkjoenn', 'Vert far -e i hunkjoenn: verte'],
      },
    },
    {
      id: 'fransk-1-7-3-def-2',
      type: 'definition',
      title: 'Les tailles - Stoerrelsene',
      content: `**Klaesstoerrelser:**

| Fransk | Norsk |
|--------|-------|
| XS - tres petit | ekstra liten |
| S - petit | liten |
| M - moyen | medium |
| L - grand | stor |
| XL - tres grand | ekstra stor |
| XXL | dobbel ekstra stor |

**Spoerre om stoerrelse:**
- Quelle taille faites-vous? = Hvilken stoerrelse har du?
- Je fais du M = Jeg har stoerrelse M`,
    },
    {
      id: 'fransk-1-7-3-text-2',
      type: 'text',
      content: `**Skostoerrelser:**

I Frankrike brukes europeiske skostoerrelser (36, 37, 38 osv.), akkurat som i Norge.

| Fransk | Norsk |
|--------|-------|
| Quelle est votre pointure? | Hvilken skostoerrelse har du? |
| Je fais du 42 / Je chausse du 42 | Jeg har skostoerrelse 42 |
| Les chaussures sont trop etroites | Skoene er for trange |
| Les chaussures sont trop larges | Skoene er for vide |`,
    },
    {
      id: 'fransk-1-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Stoerrelser',
      problem: `Fullfoeir setningene:

a) Je cherche le tee-shirt en taille ___ (medium).
b) Vous avez le pantalon en ___ (stor)?
c) Les chaussures sont trop ___. Vous avez du 44? (smaa)`,
      solution: `a) Je cherche le tee-shirt en taille **M** (eller **moyen**).
b) Vous avez le pantalon en **L** (eller **grand**)?
c) Les chaussures sont trop **petites**. Vous avez du 44?

**Nyttig ordforraad:**
- trop petit(e) = for liten
- trop grand(e) = for stor
- parfait(e) = perfekt / akkurat riktig`,
    },
    {
      id: 'fransk-1-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'stoerrelse L', solution: 'taille L', answer: 'taille L' },
          { label: 'b', task: 'for stor', solution: 'trop grand', answer: 'trop grand' },
          { label: 'c', task: 'for liten', solution: 'trop petit', answer: 'trop petit' },
          { label: 'd', task: 'hvilken stoerrelse', solution: 'quelle taille', answer: 'quelle taille' },
        ],
        solution: 'a) taille L, b) trop grand, c) trop petit, d) quelle taille',
        hints: ['Taille betyr stoerrelse', 'trop = for'],
      },
    },
    {
      id: 'fransk-1-7-3-text-3',
      type: 'text',
      content: `## Beskrive klaer med farge og stoerrelse

Pa fransk star fargeadjektivet **etter** substantivet og samsvarer i kjoenn og tall:

- **une robe rouge** = en roed kjole (hunkjoenn, entall)
- **un pantalon bleu** = en blaa bukse (hankjoenn, entall)
- **une chemise blanche** = en hvit skjorte (hunkjoenn, entall)

**Adjektivsamsvar:**
- Hunkjoenn: legg til -e (bleu -> bleue, vert -> verte, noir -> noire)
- Flertall: legg til -s (bleus, bleues, noirs, noires)
- Unntak: orange og marron endres aldri!`,
    },
    {
      id: 'fransk-1-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Farge + klaesplagg',
      problem: `Sett sammen til setninger:

a) Je cherche + un + bleu + pantalon
b) Vous avez + une + rouge + veste?
c) Les + noir + chaussures sont belles.`,
      solution: `a) Je cherche **un pantalon bleu**.
b) Vous avez **une veste rouge**?
c) **Les chaussures noires** sont belles.

**Adjektivsamsvar:**
- un pantalon bleu (hankjoenn entall: bleu)
- une veste rouge (rouge er lik i begge kjoenn)
- les chaussures noires (hunkjoenn flertall: noires)`,
    },
    {
      id: 'fransk-1-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk (bruk riktig adjektivsamsvar):',
        subTasks: [
          { label: 'a', task: 'en groenn genser', solution: 'un pull vert', answer: 'un pull vert' },
          { label: 'b', task: 'en hvit bluse', solution: 'un chemisier blanc', answer: 'un chemisier blanc' },
          { label: 'c', task: 'de brune skoene', solution: 'les chaussures marron', answer: 'les chaussures marron' },
        ],
        solution: 'a) un pull vert, b) un chemisier blanc, c) les chaussures marron',
        hints: ['Pull er hankjoenn: vert (ikke verte)', 'Marron er uforanderlig - endres aldri!'],
      },
    },
    {
      id: 'fransk-1-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv klaer - kombiner farge og stoerrelse:',
        subTasks: [
          { label: 'a', task: 'Beskriv: blaa kjole, stoerrelse S', solution: 'une robe bleue en taille S', answer: 'une robe bleue en taille S' },
          { label: 'b', task: 'Beskriv: svart jakke, stoerrelse M', solution: 'une veste noire en taille M', answer: 'une veste noire en taille M' },
          { label: 'c', task: 'Beskriv: roede sko, stoerrelse 40', solution: 'des chaussures rouges en pointure 40', answer: 'des chaussures rouges en pointure 40' },
        ],
        solution: 'a) une robe bleue en taille S, b) une veste noire en taille M, c) des chaussures rouges en pointure 40',
        hints: ['Robe er hunkjoenn: bleue (med -e)', 'Chaussures er flertall: rouges (med -s)'],
      },
    },
    {
      id: 'fransk-1-7-3-tip-1',
      type: 'tip',
      content: `Nar du handler i Frankrike, vit at franske stoerrelser kan vaere litt annerledes enn norske. Det kan vaere lurt a prove klaerne foeir du kjoeper! Franske stoerrelsesbetegnelser for kvinner er ofte 36, 38, 40 osv., mens for menn brukes S, M, L eller tall.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Qu'est-ce que tu portes? - Hva har du pa deg?
// ============================================================================

export const CHAPTER_FRANSK_1_7_4: TextbookChapter = {
  id: 'fransk-1-7-4',
  courseId: 'fransk-1',
  chapterNumber: '7.4',
  title: 'Qu\'est-ce que tu portes?',
  subtitle: 'Hva har du pa deg?',
  description: 'Laer a beskrive hva du og andre har pa seg.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke verbet "porter" (a ha pa seg)',
    'beskrive egne og andres antrekk',
    'snakke om klaer til ulike aarstider',
  ],
  content: [
    {
      id: 'fransk-1-7-4-intro',
      type: 'text',
      content: `## Hva har du pa deg?

For a beskrive hva noen har pa seg, bruker vi verbet "porter" (a baere/ha pa seg). La oss laere a snakke om antrekk!`,
    },
    {
      id: 'fransk-1-7-4-def-1',
      type: 'definition',
      title: 'Verbet "porter" - a ha pa seg',
      content: `**Boeyning av "porter":**

| Person | Form |
|--------|------|
| je | porte |
| tu | portes |
| il/elle/on | porte |
| nous | portons |
| vous | portez |
| ils/elles | portent |

**Merk:** "Porter" er et regelrett -er-verb, sa det foelger det vanlige boeyningsmoeinsteret.`,
    },
    {
      id: 'fransk-1-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Porter',
      problem: `Oversett til norsk:

a) Je porte un jean.
b) Il porte une chemise bleue.
c) Qu'est-ce que tu portes aujourd'hui?`,
      solution: `a) Je porte un jean = **Jeg har pa meg en jeans.**
b) Il porte une chemise bleue = **Han har pa seg en blaa skjorte.**
c) Qu'est-ce que tu portes aujourd'hui? = **Hva har du pa deg i dag?**

**Alternativ oversettelse:** "Porter" kan ogsa oversettes med "baerer" - "Jeg baerer en jeans."`,
    },
    {
      id: 'fransk-1-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-4-ex-1',
        number: '7.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "porter":',
        subTasks: [
          { label: 'a', task: 'Je ___ une jupe.', solution: 'porte', answer: 'porte' },
          { label: 'b', task: 'Tu ___ une belle veste.', solution: 'portes', answer: 'portes' },
          { label: 'c', task: 'Elle ___ des chaussures noires.', solution: 'porte', answer: 'porte' },
          { label: 'd', task: 'Nous ___ des jeans.', solution: 'portons', answer: 'portons' },
        ],
        solution: 'a) porte, b) portes, c) porte, d) portons',
        hints: ['Med "je" bruker vi "porte"', 'Med "tu" far verbet -es ending'],
      },
    },
    {
      id: 'fransk-1-7-4-text-1',
      type: 'text',
      content: `## Beskrive antrekk

**Nyttige setninger:**

| Fransk | Norsk |
|--------|-------|
| Aujourd'hui, je porte... | I dag har jeg pa meg... |
| Il/Elle porte... | Han/Hun har pa seg... |
| J'aime porter... | Jeg liker a ha pa meg... |
| Ca te va bien! | Det kler deg! |
| Ca va bien ensemble | Det passer godt sammen |`,
    },
    {
      id: 'fransk-1-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive antrekk',
      problem: `Beskriv hva personen har pa seg:

Marie: blaa kjole, hvite sko, roedt skjerf`,
      solution: `**Marie porte une robe bleue, des chaussures blanches et une echarpe rouge.**

Eller i flere setninger:
- Marie porte une robe bleue.
- Elle porte des chaussures blanches.
- Elle porte aussi une echarpe rouge.

**Adjektivsamsvar:**
- une robe bleue (hunkjoenn - bleu -> bleue)
- des chaussures blanches (hunkjoenn flertall - blanc -> blanches)
- une echarpe rouge (rouge er lik i alle former)`,
    },
    {
      id: 'fransk-1-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg har pa meg en genser.', solution: 'Je porte un pull.', answer: 'Je porte un pull' },
          { label: 'b', task: 'Han har pa seg svarte bukser.', solution: 'Il porte un pantalon noir.', answer: 'Il porte un pantalon noir' },
          { label: 'c', task: 'Hva har du pa deg i dag?', solution: 'Qu\'est-ce que tu portes aujourd\'hui?', answer: 'Qu\'est-ce que tu portes aujourd\'hui' },
        ],
        solution: 'a) Je porte un pull, b) Il porte un pantalon noir, c) Qu\'est-ce que tu portes aujourd\'hui?',
        hints: ['Pull er hankjoenn: un pull', 'Pantalon er entall pa fransk, selv om vi sier "bukser" pa norsk'],
      },
    },
    {
      id: 'fransk-1-7-4-text-2',
      type: 'text',
      content: `## Klaer til ulike aarstider

| Aarstid | Fransk | Klaer |
|---------|--------|-------|
| Au printemps | Om vaaren | un blouson, un pull leger |
| En ete | Om sommeren | un tee-shirt, un short, des sandales |
| En automne | Om hoesten | une veste, un jean, des bottes |
| En hiver | Om vinteren | un manteau, une echarpe, des gants |`,
    },
    {
      id: 'fransk-1-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Klaer til aarstidene',
      problem: `Hva har du vanligvis pa deg i disse aarstidene?

a) En ete (om sommeren)
b) En hiver (om vinteren)
c) Au printemps (om vaaren)`,
      solution: `**Eksempelsvar:**

a) En ete, je porte un tee-shirt et un short.
*(Om sommeren har jeg pa meg t-skjorte og shorts.)*

b) En hiver, je porte un manteau chaud et une echarpe.
*(Om vinteren har jeg pa meg en varm frakk og et skjerf.)*

c) Au printemps, je porte un pull leger et un jean.
*(Om vaaren har jeg pa meg en lett genser og jeans.)*

**Nye ord:**
- chaud(e) = varm
- leger/legere = lett
- des bottes = stoevler`,
    },
    {
      id: 'fransk-1-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv hva du har pa deg i disse aarstidene:',
        subTasks: [
          { label: 'a', task: 'En ete, je porte...', solution: 'Valgfritt - f.eks. un tee-shirt et un short' },
          { label: 'b', task: 'En hiver, je porte...', solution: 'Valgfritt - f.eks. un manteau et une echarpe' },
          { label: 'c', task: 'Au printemps, je porte...', solution: 'Valgfritt - f.eks. un pull leger et un jean' },
        ],
        solution: 'Svar vil variere. Eksempel: a) En ete, je porte un tee-shirt et un short, b) En hiver, je porte un manteau chaud et des bottes, c) Au printemps, je porte un pull et un jean.',
        hints: ['chaud = varm', 'leger = lett'],
      },
    },
    {
      id: 'fransk-1-7-4-text-3',
      type: 'text',
      content: `## Komplimenter og meninger

| Fransk | Norsk |
|--------|-------|
| Ca te va bien! | Det kler deg! |
| Ca me plait | Jeg liker det |
| C'est beau / belle | Det er pent |
| C'est a la mode | Det er moderne |
| C'est confortable | Det er komfortabelt |
| C'est pratique | Det er praktisk |`,
    },
    {
      id: 'fransk-1-7-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv ditt favorittantrekk (3-4 setninger pa fransk):',
        subTasks: [
          { label: 'a', task: 'Hvilke klaesplagg har du pa deg?', solution: 'Nevn 2-3 klaesplagg pa fransk' },
          { label: 'b', task: 'Hvilke farger har de?', solution: 'Beskriv fargene pa fransk' },
          { label: 'c', task: 'Hvorfor liker du dette antrekket?', solution: 'Bruk ord som confortable, beau, pratique' },
        ],
        solution: 'Eksempel: "Ma tenue preferee, c\'est un jean bleu et un tee-shirt blanc. Je porte aussi des baskets noires. C\'est confortable et pratique."',
        hints: ['Ma tenue preferee = favorittantrekket mitt', 'aussi = ogsa', 'des baskets = joggesko'],
      },
    },
    {
      id: 'fransk-1-7-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Klesstil i Frankrike',
      content: `Frankrike er verdens motehovedstad, og franskmenn er kjent for sin elegante og avslappede stil ("chic decontracte"). Den typiske franske stilen innebarer noeytrale farger som svart, hvitt, blatt og beige. "La petite robe noire" (den lille svarte kjolen) er et ikonisk fransk motebegrep, popularisert av Coco Chanel. Franskmenn foretrekker ofte kvalitet fremfor kvantitet i garderoben.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: L'ecole - Skolen
// ============================================================================

export const CHAPTER_FRANSK_1_8_1: TextbookChapter = {
  id: 'fransk-1-8-1',
  courseId: 'fransk-1',
  chapterNumber: '8.1',
  title: 'L\'ecole',
  subtitle: 'Skolen',
  description: 'Laer ord for skolehverdagen og klasserommet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'laere ord for skolemiljoeet',
    'beskrive klasserommet',
    'snakke om skolehverdagen',
  ],
  content: [
    {
      id: 'fransk-1-8-1-intro',
      type: 'text',
      content: `## Skolen pa fransk

Skolen er en viktig del av hverdagen. La oss laere de viktigste ordene for a snakke om skolen pa fransk!`,
    },
    {
      id: 'fransk-1-8-1-def-1',
      type: 'definition',
      title: 'Vokabular: Skolebygg',
      content: `**Deler av skolen:**

| Fransk | Norsk |
|--------|-------|
| l'ecole (f.) | skolen |
| la salle de classe | klasserommet |
| la cour (de recreation) | skolegaarden |
| la bibliotheque | biblioteket |
| la cantine | kantinen |
| le gymnase | gymsalen |
| le bureau du directeur | rektorens kontor |
| la salle des professeurs | laerervarelset |`,
    },
    {
      id: 'fransk-1-8-1-def-2',
      type: 'definition',
      title: 'Vokabular: I klasserommet',
      content: `**Ting i klasserommet:**

| Fransk | Norsk |
|--------|-------|
| le bureau | pulten/kateteret |
| la chaise | stolen |
| le tableau | tavla |
| le tableau blanc | whiteboard |
| l'ordinateur (m.) | datamaskin |
| le projecteur | projektor |
| la carte | kartet |
| la fenetre | vinduet |
| la porte | doeren |`,
    },
    {
      id: 'fransk-1-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: I klasserommet',
      problem: `Oversett til norsk:

a) la salle de classe
b) le tableau
c) la cour
d) le gymnase`,
      solution: `a) la salle de classe = **klasserommet**
b) le tableau = **tavla**
c) la cour = **skolegaarden**
d) le gymnase = **gymsalen**

**Sammensatte uttrykk:** Fransk bruker ofte "de" for a binde ord sammen:
- salle + de + classe = salle de classe (klasserom)
- cour + de + recreation = cour de recreation (skolegaard)
- salle + des + professeurs = salle des professeurs (laerervaerelset)`,
    },
    {
      id: 'fransk-1-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-1-ex-1',
        number: '8.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'skolen', solution: 'l\'ecole', answer: 'l\'ecole' },
          { label: 'b', task: 'klasserommet', solution: 'la salle de classe', answer: 'la salle de classe' },
          { label: 'c', task: 'kantinen', solution: 'la cantine', answer: 'la cantine' },
          { label: 'd', task: 'biblioteket', solution: 'la bibliotheque', answer: 'la bibliotheque' },
        ],
        solution: 'a) l\'ecole, b) la salle de classe, c) la cantine, d) la bibliotheque',
        hints: ['Ecole er hunkjoenn', 'Salle betyr rom/sal'],
      },
    },
    {
      id: 'fransk-1-8-1-def-3',
      type: 'definition',
      title: 'Vokabular: Personer pa skolen',
      content: `**Mennesker pa skolen:**

| Fransk | Norsk |
|--------|-------|
| le professeur (le prof) | laereren |
| l'eleve (m./f.) | eleven |
| le directeur / la directrice | rektoren |
| le/la camarade de classe | klassekameraten |
| le/la surveillant(e) | inspektoeren |
| les eleves (pl.) | elevene |
| la classe | klassen |`,
    },
    {
      id: 'fransk-1-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Personer',
      problem: `Les og oversett:

Le professeur est devant le tableau.
Les eleves sont assis sur les chaises.
La directrice est dans son bureau.`,
      solution: `**Le professeur est devant le tableau.**
= Laereren star foran tavla.

**Les eleves sont assis sur les chaises.**
= Elevene sitter pa stolene.

**La directrice est dans son bureau.**
= Rektoren (kvinne) er pa kontoret sitt.

**Nye uttrykk:**
- devant = foran
- assis(e) = sittende
- dans = i/pa`,
    },
    {
      id: 'fransk-1-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvem er hvem? Koble fransk med norsk:',
        subTasks: [
          { label: 'a', task: 'le professeur', solution: 'laereren', answer: 'laereren' },
          { label: 'b', task: 'l\'eleve', solution: 'eleven', answer: 'eleven' },
          { label: 'c', task: 'le directeur', solution: 'rektoren', answer: 'rektoren' },
          { label: 'd', task: 'le camarade de classe', solution: 'klassekameraten', answer: 'klassekameraten' },
        ],
        solution: 'a) laereren, b) eleven, c) rektoren, d) klassekameraten',
        hints: ['Prof er kort for professeur', 'Camarade betyr kamerat'],
      },
    },
    {
      id: 'fransk-1-8-1-text-1',
      type: 'text',
      content: `## Skolemateriell

**Skolesakene dine (les fournitures scolaires):**

| Fransk | Norsk |
|--------|-------|
| le livre | boken |
| le cahier | skriveboken/heftet |
| le stylo | kulepennen |
| le crayon | blyanten |
| la gomme | viskelaeret |
| la regle | linjalen |
| les ciseaux (m. pl.) | saksen |
| le sac a dos | ryggsekken |
| la trousse | pennalet |`,
    },
    {
      id: 'fransk-1-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Hva har du i sekken?',
      problem: `Oversett til fransk:

a) Jeg har en bok i sekken.
b) Hvor er blyanten min?
c) Jeg trenger et viskelaer.`,
      solution: `a) **J'ai un livre dans mon sac a dos.**
(dans = i, mon = min)

b) **Ou est mon crayon?**
(mon = min, for hankjoenn)

c) **J'ai besoin d'une gomme.**
(avoir besoin de = a trenge)

**Nyttig uttrykk:** avoir besoin de = a trenge
- J'ai besoin de... = Jeg trenger...`,
    },
    {
      id: 'fransk-1-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett skolesakene til fransk (med artikkel):',
        subTasks: [
          { label: 'a', task: 'boken', solution: 'le livre', answer: 'le livre' },
          { label: 'b', task: 'kulepennen', solution: 'le stylo', answer: 'le stylo' },
          { label: 'c', task: 'linjalen', solution: 'la regle', answer: 'la regle' },
          { label: 'd', task: 'ryggsekken', solution: 'le sac a dos', answer: 'le sac a dos' },
        ],
        solution: 'a) le livre, b) le stylo, c) la regle, d) le sac a dos',
        hints: ['Livre er hankjoenn', 'Sac a dos betyr bokstavelig "sekk pa ryggen"'],
      },
    },
    {
      id: 'fransk-1-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv klasserommet ditt (3 setninger pa fransk):',
        subTasks: [
          { label: 'a', task: 'Hva er i klasserommet?', solution: 'Nevn moebler og utstyr' },
          { label: 'b', task: 'Hvor mange elever er det?', solution: 'Bruk tall pa fransk' },
          { label: 'c', task: 'Hvordan er klasserommet?', solution: 'Bruk adjektiver som grand, petit, clair' },
        ],
        solution: 'Eksempel: "Dans ma salle de classe, il y a vingt bureaux et vingt chaises. Il y a aussi un tableau blanc et un projecteur. La salle de classe est grande et claire."',
        hints: ['il y a = det finnes', 'clair(e) = lyst', 'grand(e) = stort'],
      },
    },
    {
      id: 'fransk-1-8-1-note-1',
      type: 'note',
      title: 'Kulturnotat: Skole i Frankrike',
      content: `Det franske skolesystemet er annerledes enn det norske. Etter barneskolen (ecole primaire, 6-11 aar) gaar elevene pa ungdomsskole (college, 11-15 aar) og deretter videregaaende (lycee, 15-18 aar). Skoledagene i Frankrike er ofte lengre enn i Norge, fra ca. kl. 8 til 16 eller 17. Elevene har vanligvis fri pa onsdag ettermiddag. Skolemaailtidene i kantinen er ofte flereretters!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Les matieres scolaires - Skolefagene
// ============================================================================

export const CHAPTER_FRANSK_1_8_2: TextbookChapter = {
  id: 'fransk-1-8-2',
  courseId: 'fransk-1',
  chapterNumber: '8.2',
  title: 'Les matieres scolaires',
  subtitle: 'Skolefagene',
  description: 'Laer navnene pa skolefag og uttrykk om favorittfag.',
  estimatedMinutes: 40,
  competenceGoals: [
    'laere navnene pa skolefag',
    'snakke om favorittfag',
    'uttrykke meninger om fag',
  ],
  content: [
    {
      id: 'fransk-1-8-2-intro',
      type: 'text',
      content: `## Skolefagene pa fransk

Hvilke fag har du pa skolen? La oss laere hva de heter pa fransk og hvordan du kan snakke om dem!`,
    },
    {
      id: 'fransk-1-8-2-def-1',
      type: 'definition',
      title: 'Vokabular: Hovedfag',
      content: `**Hovedfagene:**

| Fransk | Norsk |
|--------|-------|
| le francais | fransk |
| l'anglais (m.) | engelsk |
| les mathematiques (les maths) | matematikk/matte |
| les sciences (f. pl.) | naturfag |
| l'histoire (f.) | historie |
| la geographie (la geo) | geografi |
| l'education religieuse (f.) | religion |`,
    },
    {
      id: 'fransk-1-8-2-def-2',
      type: 'definition',
      title: 'Vokabular: Andre fag',
      content: `**Flere fag:**

| Fransk | Norsk |
|--------|-------|
| les arts plastiques | kunst |
| la musique | musikk |
| l'education physique et sportive (l'EPS) | gym/kroppsoving |
| l'informatique (f.) | informatikk/IT |
| la physique | fysikk |
| la chimie | kjemi |
| la biologie (la bio) | biologi |
| l'allemand (m.) | tysk |
| l'espagnol (m.) | spansk |`,
    },
    {
      id: 'fransk-1-8-2-tip-1',
      type: 'tip',
      content: `De fleste fagnavn pa fransk ligner pa de norske eller engelske ordene: la physique = fysikk, la chimie = kjemi, la biologie = biologi. Franskmenene forkorter ofte fag: les maths (matematikk), la geo (geografi), la bio (biologi), l'EPS (gym).`,
    },
    {
      id: 'fransk-1-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Fagnavn',
      problem: `Oversett til norsk:

a) les mathematiques
b) l'histoire
c) l'anglais
d) les arts plastiques`,
      solution: `a) les mathematiques = **matematikk**
b) l'histoire = **historie**
c) l'anglais = **engelsk**
d) les arts plastiques = **kunst**

**Merk:** Noen fag star i flertall pa fransk: les mathematiques, les sciences, les arts plastiques.`,
    },
    {
      id: 'fransk-1-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-2-ex-1',
        number: '8.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett fagene til fransk:',
        subTasks: [
          { label: 'a', task: 'matematikk', solution: 'les mathematiques / les maths', answer: 'les maths' },
          { label: 'b', task: 'engelsk', solution: 'l\'anglais', answer: 'l\'anglais' },
          { label: 'c', task: 'historie', solution: 'l\'histoire', answer: 'l\'histoire' },
          { label: 'd', task: 'musikk', solution: 'la musique', answer: 'la musique' },
        ],
        solution: 'a) les mathematiques / les maths, b) l\'anglais, c) l\'histoire, d) la musique',
        hints: ['Mathematiques forkortes maths', 'Histoire begynner med stum h, sa vi bruker l\''],
      },
    },
    {
      id: 'fransk-1-8-2-text-1',
      type: 'text',
      content: `## Snakke om favorittfag

**Nyttige uttrykk:**

| Fransk | Norsk |
|--------|-------|
| Ma matiere preferee, c'est... | Favorittfaget mitt er... |
| J'aime... | Jeg liker... |
| J'adore... | Jeg elsker... |
| Je deteste... | Jeg hater... |
| ... est interessant(e) | ... er interessant |
| ... est ennuyeux/ennuyeuse | ... er kjedelig |
| ... est difficile | ... er vanskelig |
| ... est facile | ... er lett |`,
    },
    {
      id: 'fransk-1-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Favorittfag',
      problem: `Les og oversett:

a) Ma matiere preferee, c'est la musique.
b) Les maths, c'est difficile, mais interessant.
c) J'adore l'EPS!`,
      solution: `a) Ma matiere preferee, c'est la musique.
= **Favorittfaget mitt er musikk.**

b) Les maths, c'est difficile, mais interessant.
= **Matte er vanskelig, men interessant.**

c) J'adore l'EPS!
= **Jeg elsker gym!**

**Tips:** "J'aime" = jeg liker, "j'adore" = jeg elsker, "je deteste" = jeg hater. Du kan bruke ulike styrker!`,
    },
    {
      id: 'fransk-1-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Favorittfaget mitt er historie.', solution: 'Ma matiere preferee, c\'est l\'histoire.', answer: 'Ma matiere preferee c\'est l\'histoire' },
          { label: 'b', task: 'Jeg liker matematikk.', solution: 'J\'aime les maths.', answer: 'J\'aime les maths' },
          { label: 'c', task: 'Kunst er interessant.', solution: 'Les arts plastiques, c\'est interessant.', answer: 'Les arts plastiques c\'est interessant' },
        ],
        solution: 'a) Ma matiere preferee, c\'est l\'histoire, b) J\'aime les maths, c) Les arts plastiques, c\'est interessant',
        hints: ['matiere preferee = favorittfag', 'aimer = a like'],
      },
    },
    {
      id: 'fransk-1-8-2-text-2',
      type: 'text',
      content: `## Timeplan og skolehverdag

**Ord for timeplanen:**

| Fransk | Norsk |
|--------|-------|
| l'emploi du temps (m.) | timeplanen |
| le cours / la lecon | timen |
| la recreation (la recre) | friminuttet |
| la pause dejeuner | lunsjen |
| les devoirs (m. pl.) | leksene |
| le controle / l'examen | proeven |
| la note | karakteren |`,
    },
    {
      id: 'fransk-1-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Skoledagen',
      problem: `Beskriv skoledagen:

Le lundi, j'ai d'abord francais, puis mathematiques.
A la recreation, je mange mon gouter.
Apres l'ecole, je fais mes devoirs.`,
      solution: `**Le lundi, j'ai d'abord francais, puis mathematiques.**
= Pa mandag har jeg foerst fransk, sa matematikk.

**A la recreation, je mange mon gouter.**
= I friminuttet spiser jeg mellommaaltidet mitt.

**Apres l'ecole, je fais mes devoirs.**
= Etter skolen gjoer jeg lekser.

**Tidsord:**
- d'abord = foerst
- puis / ensuite = sa/deretter
- apres = etter`,
    },
    {
      id: 'fransk-1-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Hva heter "timeplan" pa fransk?', solution: 'l\'emploi du temps', answer: 'emploi du temps' },
          { label: 'b', task: 'Hva heter "lekser" pa fransk?', solution: 'les devoirs', answer: 'devoirs' },
          { label: 'c', task: 'Hva heter "proeve" pa fransk?', solution: 'le controle / l\'examen', answer: 'controle' },
          { label: 'd', task: 'Hva heter "karakter" pa fransk?', solution: 'la note', answer: 'note' },
        ],
        solution: 'a) l\'emploi du temps, b) les devoirs, c) le controle/l\'examen, d) la note',
        hints: ['Emploi = bruk, temps = tid', 'Devoirs = plikter (betyr lekser i skolesammenheng)'],
      },
    },
    {
      id: 'fransk-1-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om skoledagen din pa fransk (4-5 setninger):',
        subTasks: [
          { label: 'a', task: 'Hvilke fag har du i dag?', solution: 'Nevn minst 3 fag pa fransk' },
          { label: 'b', task: 'Hva er favorittfaget ditt og hvorfor?', solution: 'Bruk adjektiver' },
          { label: 'c', task: 'Hva gjoer du etter skolen?', solution: 'Bruk "apres l\'ecole"' },
        ],
        solution: 'Eksempel: "Aujourd\'hui, j\'ai francais, maths et EPS. Ma matiere preferee, c\'est l\'EPS, parce que c\'est amusant. Les maths, c\'est difficile, mais interessant. Apres l\'ecole, je fais mes devoirs."',
        hints: ['parce que = fordi', 'amusant = goy/morsomt'],
      },
    },
    {
      id: 'fransk-1-8-2-note-1',
      type: 'note',
      title: 'Kulturnotat: Karaktersystem',
      content: `I Frankrike brukes et karaktersystem fra 0-20, der 20 er best. En karakter pa 10/20 regnes som bestatt. Det er veldig sjelden a fa 20/20 - selv 16/20 regnes som utmerket! Typiske kommentarer: 18-20 = excellent, 16-17 = tres bien, 14-15 = bien, 12-13 = assez bien, 10-11 = passable, under 10 = stryk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Les metiers - Yrker
// ============================================================================

export const CHAPTER_FRANSK_1_8_3: TextbookChapter = {
  id: 'fransk-1-8-3',
  courseId: 'fransk-1',
  chapterNumber: '8.3',
  title: 'Les metiers',
  subtitle: 'Yrker',
  description: 'Laer navnene pa vanlige yrker pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'laere ord for ulike yrker',
    'forstaa hankjoenn og hunkjoenn for yrker',
    'beskrive hva folk jobber med',
  ],
  content: [
    {
      id: 'fransk-1-8-3-intro',
      type: 'text',
      content: `## Yrker pa fransk

Hva vil du bli nar du blir stor? La oss laere navnene pa ulike yrker pa fransk!

Pa fransk har de fleste yrker to former - en for menn og en for kvinner. Hunkjoennsformen far ofte endelsen "-e" eller en annen endring.`,
    },
    {
      id: 'fransk-1-8-3-def-1',
      type: 'definition',
      title: 'Vokabular: Vanlige yrker',
      content: `**Yrker (hankjoenn og hunkjoenn):**

| Hankjoenn | Hunkjoenn | Norsk |
|-----------|-----------|-------|
| un medecin | une medecin | lege |
| un professeur | une professeure | laerer |
| un policier | une policiere | politibetjent |
| un ingenieur | une ingenieure | ingenioer |
| un infirmier | une infirmiere | sykepleier |
| un cuisinier | une cuisiniere | kokk |
| un vendeur | une vendeuse | ekspeditoeir |`,
    },
    {
      id: 'fransk-1-8-3-def-2',
      type: 'definition',
      title: 'Flere yrker',
      content: `**Flere vanlige yrker:**

| Hankjoenn | Hunkjoenn | Norsk |
|-----------|-----------|-------|
| un avocat | une avocate | advokat |
| un architecte | une architecte | arkitekt |
| un journaliste | une journaliste | journalist |
| un mecanicien | une mecanicienne | mekaniker |
| un electricien | une electricienne | elektrikeer |
| un coiffeur | une coiffeuse | frisoer |
| un musicien | une musicienne | musiker |
| un boulanger | une boulangere | baker |`,
    },
    {
      id: 'fransk-1-8-3-tip-1',
      type: 'tip',
      content: `Husk moensteret for hunkjoennsformer av yrker: -ier -> -iere (infirmier/infirmiere), -eur -> -euse (vendeur/vendeuse), -ien -> -ienne (mecanicien/mecanicienne). Noen yrker er like i begge kjoenn: architecte, journaliste, medecin.`,
    },
    {
      id: 'fransk-1-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Yrker',
      problem: `Oversett til norsk:

a) un medecin
b) une professeure
c) un policier
d) une avocate`,
      solution: `a) un medecin = **lege (mann)**
b) une professeure = **laerer (kvinne)**
c) un policier = **politibetjent (mann)**
d) une avocate = **advokat (kvinne)**

**Merk:** Pa fransk bruker vi artikkelen un/une ogsaa nar vi sier hva noen er: "Il est medecin" (uten artikkel) eller "C'est un medecin" (med artikkel).`,
    },
    {
      id: 'fransk-1-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-3-ex-1',
        number: '8.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk (bruk hankjoennsformen):',
        subTasks: [
          { label: 'a', task: 'lege', solution: 'un medecin', answer: 'medecin' },
          { label: 'b', task: 'laerer', solution: 'un professeur', answer: 'professeur' },
          { label: 'c', task: 'ingenioer', solution: 'un ingenieur', answer: 'ingenieur' },
          { label: 'd', task: 'kokk', solution: 'un cuisinier', answer: 'cuisinier' },
        ],
        solution: 'a) un medecin, b) un professeur, c) un ingenieur, d) un cuisinier',
        hints: ['Medecin har accent pa foerste e', 'Cuisinier kommer fra cuisine (kjoeikken)'],
      },
    },
    {
      id: 'fransk-1-8-3-text-1',
      type: 'text',
      content: `## Si hva noen jobber som

**Uttrykk for yrke:**

| Fransk | Norsk |
|--------|-------|
| Quelle est votre profession? | Hva jobber du som? (formelt) |
| Qu'est-ce que tu fais comme travail? | Hva jobber du som? (uformelt) |
| Je suis medecin | Jeg er lege |
| Il/Elle travaille comme... | Han/Hun jobber som... |
| Mon pere est... | Faren min er... |
| Ma mere travaille comme... | Moren min jobber som... |`,
    },
    {
      id: 'fransk-1-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Snakke om yrker',
      problem: `Oversett til norsk:

a) Qu'est-ce que tu fais comme travail?
b) Je suis professeure.
c) Mon pere travaille comme ingenieur.`,
      solution: `a) Qu'est-ce que tu fais comme travail?
= **Hva jobber du som?**

b) Je suis professeure.
= **Jeg er laerer.** (sagt av en kvinne)

c) Mon pere travaille comme ingenieur.
= **Faren min jobber som ingenioer.**

**Merk:** Etter "etre" (je suis, tu es...) brukes yrket **uten artikkel**: "Je suis medecin" (ikke "Je suis un medecin"). Men med "c'est" brukes artikkel: "C'est un medecin".`,
    },
    {
      id: 'fransk-1-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg er lege. (mann)', solution: 'Je suis medecin.', answer: 'Je suis medecin' },
          { label: 'b', task: 'Hun er laerer.', solution: 'Elle est professeure.', answer: 'Elle est professeure' },
          { label: 'c', task: 'Moren min jobber som sykepleier.', solution: 'Ma mere travaille comme infirmiere.', answer: 'Ma mere travaille comme infirmiere' },
        ],
        solution: 'a) Je suis medecin, b) Elle est professeure, c) Ma mere travaille comme infirmiere',
        hints: ['Etter "etre" brukes ikke artikkel', 'travailler comme = jobber som'],
      },
    },
    {
      id: 'fransk-1-8-3-text-2',
      type: 'text',
      content: `## Arbeidsplasser

**Hvor jobber folk?**

| Fransk | Norsk |
|--------|-------|
| a l'hopital | pa sykehuset |
| a l'ecole | pa skolen |
| au bureau | pa kontoret |
| a l'usine | pa fabrikken |
| au restaurant | pa restauranten |
| au magasin / dans un magasin | i butikken |
| a la maison | hjemme (hjemmekontor) |
| a la boulangerie | pa bakeriet |`,
    },
    {
      id: 'fransk-1-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Arbeidsplasser',
      problem: `Hvor jobber disse personene?

a) Le medecin travaille a ___.
b) La professeure travaille a ___.
c) Le vendeur travaille au ___.`,
      solution: `a) Le medecin travaille a **l'hopital**.
= Legen jobber pa sykehuset.

b) La professeure travaille a **l'ecole**.
= Laereren jobber pa skolen.

c) Le vendeur travaille au **magasin**.
= Ekspeditoeren jobber i butikken.

**Grammatikk:**
- a + le = au (hankjoenn: au bureau, au restaurant)
- a + la = a la (hunkjoenn: a la maison, a la boulangerie)
- a + l' = a l' (foran vokal: a l'hopital, a l'ecole)`,
    },
    {
      id: 'fransk-1-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv hvor disse personene jobber:',
        subTasks: [
          { label: 'a', task: 'Le cuisinier travaille...', solution: 'au restaurant', answer: 'au restaurant' },
          { label: 'b', task: 'L\'infirmiere travaille...', solution: 'a l\'hopital', answer: 'a l\'hopital' },
          { label: 'c', task: 'Le professeur travaille...', solution: 'a l\'ecole', answer: 'a l\'ecole' },
        ],
        solution: 'a) au restaurant, b) a l\'hopital, c) a l\'ecole',
        hints: ['Restaurant er hankjoenn: a + le = au', 'Hopital begynner med stum h: a l\''],
      },
    },
    {
      id: 'fransk-1-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv familiens yrker (3-4 setninger pa fransk):',
        subTasks: [
          { label: 'a', task: 'Hva jobber foreldrene dine som?', solution: 'Bruk "Mon pere est..." / "Ma mere travaille comme..."' },
          { label: 'b', task: 'Hvor jobber de?', solution: 'Bruk preposisjoner: au, a la, a l\'' },
          { label: 'c', task: 'Kjenner du noen med et interessant yrke?', solution: 'Beskriv yrket' },
        ],
        solution: 'Eksempel: "Mon pere est ingenieur. Il travaille dans une usine. Ma mere travaille comme professeure a l\'ecole. Mon oncle est pilote et il voyage souvent en France."',
        hints: ['voyager = a reise', 'souvent = ofte'],
      },
    },
    {
      id: 'fransk-1-8-3-note-1',
      type: 'note',
      title: 'Kulturnotat: Utdanning i Frankrike',
      content: `I Frankrike avsluttes videregaaende skole med en stor eksamen kalt "le baccalaureat" (le bac). Denne eksamenen er avgoeirende for a komme inn pa universitet. Etter videregaaende kan man studere pa universitet eller velge en "grande ecole" (eliteskole), som er veldig prestisjefylt. Populaere studier inkluderer medisin, jus, ingenioerutdanning og handel. Yrkesutdanning ("formation professionnelle") er ogsaa en vanlig vei.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Que veux-tu devenir? - Hva vil du bli?
// ============================================================================

export const CHAPTER_FRANSK_1_8_4: TextbookChapter = {
  id: 'fransk-1-8-4',
  courseId: 'fransk-1',
  chapterNumber: '8.4',
  title: 'Que veux-tu devenir?',
  subtitle: 'Hva vil du bli?',
  description: 'Laer a snakke om fremtidsplaner og droemmeyrker.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke verbet "vouloir" (a ville)',
    'bruke uttrykket "je veux devenir"',
    'snakke om fremtidsplaner',
  ],
  content: [
    {
      id: 'fransk-1-8-4-intro',
      type: 'text',
      content: `## Snakke om fremtiden

Hva vil du bli nar du blir voksen? I dette kapittelet laerer du a snakke om droemmer og fremtidsplaner pa fransk!`,
    },
    {
      id: 'fransk-1-8-4-def-1',
      type: 'definition',
      title: 'Verbet "vouloir" - a ville',
      content: `**Boeyning av "vouloir":**

| Person | Form |
|--------|------|
| je | veux |
| tu | veux |
| il/elle/on | veut |
| nous | voulons |
| vous | voulez |
| ils/elles | veulent |

**Merk:** "Vouloir" er et uregelrett verb. Hovedverbet star i infinitiv etter "vouloir".`,
    },
    {
      id: 'fransk-1-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Vouloir',
      problem: `Oversett til norsk:

a) Je veux devenir medecin.
b) Que veux-tu devenir?
c) Elle veut devenir professeure.`,
      solution: `a) Je veux devenir medecin.
= **Jeg vil bli lege.**

b) Que veux-tu devenir?
= **Hva vil du bli?**

c) Elle veut devenir professeure.
= **Hun vil bli laerer.**

**Setningsstruktur:**
Subjekt + veux/veut + devenir + yrke`,
    },
    {
      id: 'fransk-1-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-4-ex-1',
        number: '8.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "vouloir":',
        subTasks: [
          { label: 'a', task: 'Je ___ devenir ingenieur.', solution: 'veux', answer: 'veux' },
          { label: 'b', task: 'Tu ___ devenir medecin.', solution: 'veux', answer: 'veux' },
          { label: 'c', task: 'Nous ___ travailler en France.', solution: 'voulons', answer: 'voulons' },
          { label: 'd', task: 'Il ___ devenir pilote.', solution: 'veut', answer: 'veut' },
        ],
        solution: 'a) veux, b) veux, c) voulons, d) veut',
        hints: ['je og tu har samme form: veux', 'nous har formen: voulons'],
      },
    },
    {
      id: 'fransk-1-8-4-def-2',
      type: 'definition',
      title: 'Je voudrais - Jeg vil gjerne (hoeflig form)',
      content: `**Boeyning av "voudrais" (kondisjonalis - hoeflig form):**

| Person | Form |
|--------|------|
| je | voudrais |
| tu | voudrais |
| il/elle/on | voudrait |
| nous | voudrions |
| vous | voudriez |
| ils/elles | voudraient |

**"Je voudrais"** er mer hoeflig enn "je veux" og brukes ofte om oeonsker og droemmer.`,
    },
    {
      id: 'fransk-1-8-4-text-1',
      type: 'text',
      content: `## Vouloir vs. voudrais

| Fransk | Norsk | Bruk |
|--------|-------|------|
| Je veux | Jeg vil | Sterk vilje |
| Je voudrais | Jeg vil gjerne | Hoeflig oenke |

**Eksempler:**
- Je **veux** devenir medecin! = Jeg **vil** bli lege! (bestemt)
- Je **voudrais** devenir medecin. = Jeg **vil gjerne** bli lege. (hoeflig/oenke)`,
    },
    {
      id: 'fransk-1-8-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Voudrais',
      problem: `Oversett til fransk med "voudrais":

a) Jeg vil gjerne bli arkitekt.
b) Hun vil gjerne jobbe i utlandet.
c) Vi vil gjerne studere i Frankrike.`,
      solution: `a) **Je voudrais devenir architecte.**

b) **Elle voudrait travailler a l'etranger.**
(a l'etranger = i utlandet)

c) **Nous voudrions etudier en France.**
(etudier = a studere)

**Nyttige ord:**
- a l'etranger = i utlandet
- etudier = a studere
- travailler = a arbeide`,
    },
    {
      id: 'fransk-1-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk (bruk "voudrais"):',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne bli journalist.', solution: 'Je voudrais devenir journaliste.', answer: 'Je voudrais devenir journaliste' },
          { label: 'b', task: 'Han vil gjerne jobbe som kokk.', solution: 'Il voudrait travailler comme cuisinier.', answer: 'Il voudrait travailler comme cuisinier' },
          { label: 'c', task: 'De vil gjerne studere medisin.', solution: 'Ils voudraient etudier la medecine.', answer: 'Ils voudraient etudier la medecine' },
        ],
        solution: 'a) Je voudrais devenir journaliste, b) Il voudrait travailler comme cuisinier, c) Ils voudraient etudier la medecine',
        hints: ['devenir = a bli', 'la medecine = medisin (faget)'],
      },
    },
    {
      id: 'fransk-1-8-4-text-2',
      type: 'text',
      content: `## Begrunnelser - pourquoi/parce que

**Hvorfor vil du bli...?**

| Fransk | Norsk |
|--------|-------|
| Pourquoi? | Hvorfor? |
| Parce que... | Fordi... |
| Gagner de l'argent | A tjene penger |
| Aider les gens | A hjelpe folk |
| Etre creatif/creative | A vaere kreativ |
| C'est interessant | Det er interessant |
| C'est amusant | Det er goy |`,
    },
    {
      id: 'fransk-1-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Begrunnelser',
      problem: `Les og oversett:

Pourquoi veux-tu devenir medecin?
Je voudrais devenir medecin parce que je veux aider les gens.`,
      solution: `**Pourquoi veux-tu devenir medecin?**
= Hvorfor vil du bli lege?

**Je voudrais devenir medecin parce que je veux aider les gens.**
= Jeg vil gjerne bli lege fordi jeg vil hjelpe folk.

**Setningsstruktur med "parce que":**
Je voudrais devenir + yrke + parce que + begrunnelse
(Vanlig setningsstruktur etter "parce que" - subjekt + verb)`,
    },
    {
      id: 'fransk-1-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble yrke med begrunnelse:',
        subTasks: [
          { label: 'a', task: 'Devenir medecin - parce que...', solution: 'je veux aider les gens / c\'est important', answer: 'je veux aider les gens' },
          { label: 'b', task: 'Devenir musicien - parce que...', solution: 'je veux etre creatif / j\'adore la musique', answer: 'j\'adore la musique' },
          { label: 'c', task: 'Devenir ingenieur - parce que...', solution: 'j\'aime resoudre des problemes / c\'est bien paye', answer: 'c\'est interessant' },
        ],
        solution: 'a) parce que je veux aider les gens, b) parce que j\'adore la musique / je veux etre creatif, c) parce que j\'aime resoudre des problemes / c\'est bien paye',
        hints: ['aider = a hjelpe', 'creatif = kreativ', 'resoudre = a loese'],
      },
    },
    {
      id: 'fransk-1-8-4-text-3',
      type: 'text',
      content: `## Spoersmaal om fremtiden

| Fransk | Norsk |
|--------|-------|
| Que veux-tu devenir? | Hva vil du bli? |
| Qu'est-ce que tu voudrais etudier? | Hva vil du studere? |
| Ou voudrais-tu travailler? | Hvor vil du jobbe? |
| Tu as un metier de reve? | Har du et droemmeyrke? |
| Quels sont tes projets? | Hva er planene dine? |`,
    },
    {
      id: 'fransk-1-8-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om dine fremtidsplaner (5-6 setninger pa fransk):',
        subTasks: [
          { label: 'a', task: 'Hva vil du bli?', solution: 'Je voudrais devenir ...' },
          { label: 'b', task: 'Hvorfor?', solution: 'parce que...' },
          { label: 'c', task: 'Hva vil du studere?', solution: 'Je voudrais etudier ...' },
          { label: 'd', task: 'Hvor vil du jobbe?', solution: 'Je voudrais travailler a/au/en ...' },
        ],
        solution: 'Eksempel: "Je voudrais devenir ingenieur parce que j\'aime les sciences et la technologie. Apres le lycee, je voudrais etudier a l\'universite. Je voudrais travailler dans une grande entreprise. Mon reve, c\'est de travailler a l\'etranger."',
        hints: ['l\'universite = universitetet', 'une entreprise = en bedrift', 'mon reve = droemmen min'],
      },
    },
    {
      id: 'fransk-1-8-4-tip-1',
      type: 'tip',
      content: `Nar du snakker om fremtidsplaner pa fransk, kan du bruke bade "vouloir" og "voudrais". Bruk "je veux" nar du er sikker pa hva du vil, og "je voudrais" nar du snakker om droemmer og oeonsker. Du kan ogsaa bruke "j'aimerais" (jeg ville likt) som et alternativ til "je voudrais".`,
    },
    {
      id: 'fransk-1-8-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Karrierevalg i Frankrike',
      content: `I Frankrike er utdanningsvalg veldig viktig. Etter videregaaende (le lycee) tar elevene "le baccalaureat" (le bac), og valget av studieretning pavirker fremtidige karrieremuligheter. De mest prestisjefylte utdanningene gaar gjennom "les grandes ecoles" (eliteskolene), som krever krevende opptaksprover. Det er ogsaa vanlig med "stage" (praksisopphold) under studiene for a faa arbeidserfaring. Mange unge franskmenn tar ogsaa et aar i utlandet for a laere spraak og faa internasjonal erfaring.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_1_CHAPTERS_7_8: TextbookChapter[] = [
  CHAPTER_FRANSK_1_7_1,
  CHAPTER_FRANSK_1_7_2,
  CHAPTER_FRANSK_1_7_3,
  CHAPTER_FRANSK_1_7_4,
  CHAPTER_FRANSK_1_8_1,
  CHAPTER_FRANSK_1_8_2,
  CHAPTER_FRANSK_1_8_3,
  CHAPTER_FRANSK_1_8_4,
];
