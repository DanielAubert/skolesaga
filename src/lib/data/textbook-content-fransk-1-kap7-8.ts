/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 1 - Kapittel 7-8
 * Klær og shopping, Skole og yrker
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Les vetements - Klærne
// ============================================================================

export const CHAPTER_FRANSK_1_7_1: TextbookChapter = {
  id: 'fransk-1-7-1',
  courseId: 'fransk-1',
  chapterNumber: '7.1',
  title: 'Les vetements',
  subtitle: 'Klærne',
  description: 'Lær grunnleggende ord for klær på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lære ord for vanlige klesplagg',
    'bruke riktig artikkel og kjønn med klesord',
    'beskrive hva man har på seg',
  ],
  content: [
    {
      id: 'fransk-1-7-1-intro',
      type: 'text',
      content: `## Klær på fransk

Å kunne snakke om klær er nyttig i mange situasjoner - når du handler, pakker til en reise, eller bare beskriver hva noen har på seg.

På fransk har alle substantiver kjønn: hankjønn (masculin) eller hunkjønn (feminin). Det er viktig a lære klesordene med riktig artikkel! Hankjønn bruker **un/le** og hunkjønn bruker **une/la**.`,
    },
    {
      id: 'fransk-1-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Overkropp',
      content: `**Klær for overkroppen:**

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
      title: 'Vokabular: Underkropp og tilbehør',
      content: `**Klær for underkroppen:**

| Fransk | Norsk |
|--------|-------|
| un pantalon | bukse |
| un jean | jeans |
| une jupe | skjørt |
| un short | shorts |
| des chaussures (f. pl.) | sko |
| des chaussettes (f. pl.) | sokker |
| une ceinture | belte |`,
    },
    {
      id: 'fransk-1-7-1-text-1',
      type: 'text',
      content: `**Tilbehør (Les accessoires):**

| Fransk | Norsk |
|--------|-------|
| un chapeau | hatt |
| un bonnet | lue |
| une écharpe | skjerf |
| des gants (m. pl.) | hansker |
| des lunettes (f. pl.) | briller |
| un sac (a main) | veske |`,
    },
    {
      id: 'fransk-1-7-1-tip-1',
      type: 'tip',
      content: `Legg merke til at noen klesplagg ofte brukes i flertall på fransk, akkurat som på norsk: des chaussures (skoene), des chaussettes (sokkene), des gants (hanskene). Flertallsartikkelen "des" brukes for begge kjønn.`,
    },
    {
      id: 'fransk-1-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Oversett til norsk',
      problem: `Oversett disse klesordene til norsk:

a) une chemise
b) un pantalon
c) un pull
d) des chaussures`,
      solution: `a) une chemise = **skjorte**
b) un pantalon = **bukse**
c) un pull = **genser**
d) des chaussures = **sko**

**Huske-tips:** "Pantalon" likner det engelske "pants", men på fransk er det entall (un pantalon = en bukse)!`,
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
          { label: 'c', task: 'skjørt', solution: 'une jupe', answer: 'une jupe' },
          { label: 'd', task: 'genser', solution: 'un pull', answer: 'un pull' },
        ],
        solution: 'a) une veste, b) une robe, c) une jupe, d) un pull',
        hints: ['Husk at alle franske substantiver har kjønn', 'Jupe på fransk betyr skjørt!'],
      },
    },
    {
      id: 'fransk-1-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Hvilket kjønn?',
      problem: `Velg riktig artikkel:

a) ___ chemise (un/une)
b) ___ veste (un/une)
c) ___ pantalon (un/une)`,
      solution: `a) **une** chemise - hunkjønn
b) **une** veste - hunkjønn
c) **un** pantalon - hankjønn

**Tips:** Mange klesplagg som slutter på -e er hunkjønn (une): une chemise, une veste, une jupe, une robe. Men det finnes unntak!`,
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
        hints: ['Ord på -e er ofte hunkjønn', 'Manteau er hankjønn'],
      },
    },
    {
      id: 'fransk-1-7-1-text-2',
      type: 'text',
      content: `## Flertall av klær

På fransk danner vi flertall ved å legge til **-s** på slutten av ordet. Artikkelen i flertall er **les** (bestemt) eller **des** (ubestemt):

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

**Merk:** Ord på -eau får -eaux i flertall: un manteau -> des manteaux, un chapeau -> des chapeaux.`,
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
        hints: ['De fleste ord får -s i flertall', 'Ord på -eau får -eaux i flertall'],
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
          { label: 'c', task: 'et rødt skjerf', solution: 'une écharpe rouge', answer: 'une écharpe rouge' },
          { label: 'd', task: 'en blå frakk', solution: 'un manteau bleu', answer: 'un manteau bleu' },
        ],
        solution: 'a) une chemise blanche, b) des chaussures noires, c) une écharpe rouge, d) un manteau bleu',
        hints: ['Fargen står etter substantivet på fransk', 'Husk adjektivsamsvar i kjønn og tall'],
      },
    },
    {
      id: 'fransk-1-7-1-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `Frankrike er kjent som motehovedstaden i verden. Paris er hjemmet til mange av verdens mest kjente motehus som Chanel, Dior, Louis Vuitton og Hermes. Uttrykket "haute couture" (høy mote) er opprinnelig fransk. Franskmenn er generelt opptatt av a kle seg godt og stilfullt, selv til hverdags.`,
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
  description: 'Lær å handle klær og snakke med ekspeditører på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'spørsmålsfraser for shopping',
    'be om å prøve klær',
    'forstaa priser og størrelser',
  ],
  content: [
    {
      id: 'fransk-1-7-2-intro',
      type: 'text',
      content: `## Handle klær på fransk

Når du handler klær i Frankrike, er det nyttig å kunne noen viktige fraser. La oss lære de vanligste uttrykkene for klesbutikken!`,
    },
    {
      id: 'fransk-1-7-2-def-1',
      type: 'definition',
      title: 'Nyttige shoppingfraser',
      content: `**Spørsmål til ekspeditøren:**

| Fransk | Norsk |
|--------|-------|
| Je peux vous aider? | Kan jeg hjelpe deg? |
| Je peux essayer ...? | Kan jeg prove ...? |
| Vous avez ca en taille ...? | Har dere dette i størrelse ...? |
| Où est la cabine d'essayage? | Hvor er prøverommet? |
| Ça coûte combien? | Hva koster det? |
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
| Ça me va | Det passer meg |
| Ça ne me va pas | Det passer meg ikke |
| C'est trop grand | Det er for stort |
| C'est trop petit | Det er for lite |
| Ça me plait | Jeg liker det |
| Je le prends | Jeg tar det |`,
    },
    {
      id: 'fransk-1-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: I klesbutikken',
      problem: `Les dialogen og svar på spørsmålene:

Vendeur: Bonjour! Je peux vous aider?
Client: Oui, je cherche une veste.
Vendeur: Quelle taille faites-vous?
Client: Taille M, s'il vous plaît.
Vendeur: Voici une belle veste. Vous voulez l'essayer?
Client: Oui, merci. Où est la cabine d'essayage?

a) Hva leter kunden etter?
b) Hvilken størrelse trenger kunden?`,
      solution: `a) Kunden leter etter en jakke (une veste).
b) Kunden trenger størrelse M (taille M).

**Viktige ord fra dialogen:**
- le vendeur / la vendeuse = ekspeditør
- le client / la cliente = kunde
- essayer = prove
- la cabine d'essayage = prøverom`,
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
          { label: 'b', task: 'Hvor er prøverommet?', solution: 'Où est la cabine d\'essayage?', answer: 'Où est la cabine d\'essayage' },
          { label: 'c', task: 'Hva koster det?', solution: 'Ça coûte combien?', answer: 'Ça coûte combien' },
        ],
        solution: 'a) Je peux essayer ca?, b) Où est la cabine d\'essayage?, c) Ça coûte combien?',
        hints: ['essayer = a prove', 'coûter = å koste'],
      },
    },
    {
      id: 'fransk-1-7-2-text-1',
      type: 'text',
      content: `## Betaling

Når du skal betale, kan du bruke disse frasene:

| Fransk | Norsk |
|--------|-------|
| Je voudrais payer | Jeg vil betale |
| Je peux payer par carte? | Kan jeg betale med kort? |
| En espèces seulement | Kun kontant |
| Ça fait ... euros | Det blir ... euro |
| Le recu / le ticket de caisse | Kvitteringen |`,
    },
    {
      id: 'fransk-1-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Betaling',
      problem: `Fullfør dialogen:

Client: La veste ___ bien. Je la ___.
Vendeur: Ça fait 49 euros.
Client: Je peux payer par ___?
Vendeur: Oui, bien sur.`,
      solution: `Client: La veste **me va** bien. Je la **prends**.
Vendeur: Ça fait 49 euros.
Client: Je peux payer par **carte**?
Vendeur: Oui, bien sur.

**Oversettelse:** Jakken passer meg godt. Jeg tar den. - Det blir 49 euro. - Kan jeg betale med kort? - Ja, selvfølgelig.`,
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
          { label: 'b', task: 'Ça ne me ___ pas. (passer)', solution: 'va', answer: 'va' },
          { label: 'c', task: 'C\'est trop ___. (stort)', solution: 'grand', answer: 'grand' },
          { label: 'd', task: 'Je le ___. (tar)', solution: 'prends', answer: 'prends' },
        ],
        solution: 'a) cherche, b) va, c) grand, d) prends',
        hints: ['chercher = å lete etter', 'aller = a ga/passe', 'prendre = a ta'],
      },
    },
    {
      id: 'fransk-1-7-2-text-2',
      type: 'text',
      content: `## Verbet "vouloir" (a ville/oenske)

For høflige ønsker bruker vi "je voudrais" (jeg vil gjerne):

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

**Merk:** "je voudrais" er mer høflig enn "je veux" (jeg vil).`,
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
        hints: ['voudrais er kondisjonalis av vouloir', 'Husk å bruke riktig person-form'],
      },
    },
    {
      id: 'fransk-1-7-2-tip-1',
      type: 'tip',
      content: `I Frankrike er de fleste butikker åpne fra kl. 10 til kl. 19. Mange smabutikker holder stengt mellom kl. 12 og 14 (lunsjtid). Pa søndager er de fleste butikker stengt, bortsett fra i turistomraader. "Les soldes" (salg) skjer to ganger i aaret, vanligvis i januar og juli.`,
    },
    {
      id: 'fransk-1-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en kort dialog i en klesbutikk (4-6 setninger). Bruk minst 3 av disse frasene: Je peux vous aider, Je cherche, essayer, Ça coûte combien, Je le prends',
        subTasks: [
          { label: 'a', task: 'Ekspeditørens første setning', solution: 'Bonjour! Je peux vous aider?' },
          { label: 'b', task: 'Kundens svar', solution: 'Oui, je cherche un tee-shirt.' },
          { label: 'c', task: 'Avslutt dialogen', solution: 'Ça coûte combien? - Ça fait 25 euros. - Je le prends.' },
        ],
        solution: 'Eksempel: "Vendeur: Bonjour! Je peux vous aider? Client: Oui, je cherche un tee-shirt. Je peux essayer le bleu? Vendeur: Bien sur! Ça coûte combien? Ça fait 25 euros. Client: Très bien, je le prends."',
        hints: ['Start med en hilsen', 'Bruk høflig form (vous)'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Couleurs et tailles - Farger og størrelser
// ============================================================================

export const CHAPTER_FRANSK_1_7_3: TextbookChapter = {
  id: 'fransk-1-7-3',
  courseId: 'fransk-1',
  chapterNumber: '7.3',
  title: 'Couleurs et tailles',
  subtitle: 'Farger og størrelser',
  description: 'Lær farger og størrelser for å beskrive klær.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lære fargene på fransk',
    'forstaa adjektivsamsvar med farger',
    'beskrive klær med farge og størrelse',
  ],
  content: [
    {
      id: 'fransk-1-7-3-intro',
      type: 'text',
      content: `## Farger og størrelser

For å beskrive klær trenger du å kunne fargene og størrelsene. La oss repetere fargene og lære hvordan vi beskriver klær!`,
    },
    {
      id: 'fransk-1-7-3-def-1',
      type: 'definition',
      title: 'Les couleurs - Fargene',
      content: `**Grunnfargene:**

| Fransk (m.) | Fransk (f.) | Norsk |
|-------------|-------------|-------|
| rouge | rouge | rød |
| bleu | bleue | blå |
| jaune | jaune | gul |
| vert | verte | grønn |
| blanc | blanche | hvit |
| noir | noire | svart |
| brun / marron | brune / marron | brun |
| gris | grise | grå |
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
| bleu clair | lyseblå |
| bleu fonce | mørkeblå |
| vert clair | lysegroen |
| vert fonce | mørkegroen |
| rouge clair | lyserød |
| rouge fonce | mørkerød |

**Tips:** "clair" = lys, "fonce" = mørk`,
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
      solution: `a) La robe rouge = **den røde kjolen**
b) La veste bleue = **den blå jakken**
c) Le manteau noir = **den svarte frakken**
d) Les chaussures blanches = **de hvite skoene**

**Merk:** Adjektivet (fargen) samsvarer i kjønn og tall med substantivet det beskriver. Det står vanligvis etter substantivet på fransk.`,
    },
    {
      id: 'fransk-1-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-3-ex-1',
        number: '7.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett fargene til fransk (hankjønn):',
        subTasks: [
          { label: 'a', task: 'rød', solution: 'rouge', answer: 'rouge' },
          { label: 'b', task: 'blå', solution: 'bleu', answer: 'bleu' },
          { label: 'c', task: 'grønn', solution: 'vert', answer: 'vert' },
          { label: 'd', task: 'svart', solution: 'noir', answer: 'noir' },
        ],
        solution: 'a) rouge, b) bleu, c) vert, d) noir',
        hints: ['Rouge er lik i både hankjønn og hunkjønn', 'Vert får -e i hunkjønn: verte'],
      },
    },
    {
      id: 'fransk-1-7-3-def-2',
      type: 'definition',
      title: 'Les tailles - Størrelsene',
      content: `**Klaesstørrelser:**

| Fransk | Norsk |
|--------|-------|
| XS - très petit | ekstra liten |
| S - petit | liten |
| M - moyen | medium |
| L - grand | stor |
| XL - très grand | ekstra stor |
| XXL | dobbel ekstra stor |

**Spørre om størrelse:**
- Quelle taille faites-vous? = Hvilken størrelse har du?
- Je fais du M = Jeg har størrelse M`,
    },
    {
      id: 'fransk-1-7-3-text-2',
      type: 'text',
      content: `**Skostørrelser:**

I Frankrike brukes europeiske skostørrelser (36, 37, 38 osv.), akkurat som i Norge.

| Fransk | Norsk |
|--------|-------|
| Quelle est votre pointure? | Hvilken skostørrelse har du? |
| Je fais du 42 / Je chausse du 42 | Jeg har skostørrelse 42 |
| Les chaussures sont trop etroites | Skoene er for trange |
| Les chaussures sont trop larges | Skoene er for vide |`,
    },
    {
      id: 'fransk-1-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Størrelser',
      problem: `Fullfør setningene:

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
          { label: 'a', task: 'størrelse L', solution: 'taille L', answer: 'taille L' },
          { label: 'b', task: 'for stor', solution: 'trop grand', answer: 'trop grand' },
          { label: 'c', task: 'for liten', solution: 'trop petit', answer: 'trop petit' },
          { label: 'd', task: 'hvilken størrelse', solution: 'quelle taille', answer: 'quelle taille' },
        ],
        solution: 'a) taille L, b) trop grand, c) trop petit, d) quelle taille',
        hints: ['Taille betyr størrelse', 'trop = for'],
      },
    },
    {
      id: 'fransk-1-7-3-text-3',
      type: 'text',
      content: `## Beskrive klær med farge og størrelse

På fransk står fargeadjektivet **etter** substantivet og samsvarer i kjønn og tall:

- **une robe rouge** = en rød kjole (hunkjønn, entall)
- **un pantalon bleu** = en blå bukse (hankjønn, entall)
- **une chemise blanche** = en hvit skjorte (hunkjønn, entall)

**Adjektivsamsvar:**
- Hunkjønn: legg til -e (bleu -> bleue, vert -> verte, noir -> noire)
- Flertall: legg til -s (bleus, bleues, noirs, noires)
- Unntak: orange og marron endres aldri!`,
    },
    {
      id: 'fransk-1-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Farge + klesplagg',
      problem: `Sett sammen til setninger:

a) Je cherche + un + bleu + pantalon
b) Vous avez + une + rouge + veste?
c) Les + noir + chaussures sont belles.`,
      solution: `a) Je cherche **un pantalon bleu**.
b) Vous avez **une veste rouge**?
c) **Les chaussures noires** sont belles.

**Adjektivsamsvar:**
- un pantalon bleu (hankjønn entall: bleu)
- une veste rouge (rouge er lik i begge kjønn)
- les chaussures noires (hunkjønn flertall: noires)`,
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
          { label: 'a', task: 'en grønn genser', solution: 'un pull vert', answer: 'un pull vert' },
          { label: 'b', task: 'en hvit bluse', solution: 'un chemisier blanc', answer: 'un chemisier blanc' },
          { label: 'c', task: 'de brune skoene', solution: 'les chaussures marron', answer: 'les chaussures marron' },
        ],
        solution: 'a) un pull vert, b) un chemisier blanc, c) les chaussures marron',
        hints: ['Pull er hankjønn: vert (ikke verte)', 'Marron er uforanderlig - endres aldri!'],
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
        task: 'Beskriv klær - kombiner farge og størrelse:',
        subTasks: [
          { label: 'a', task: 'Beskriv: blå kjole, størrelse S', solution: 'une robe bleue en taille S', answer: 'une robe bleue en taille S' },
          { label: 'b', task: 'Beskriv: svart jakke, størrelse M', solution: 'une veste noire en taille M', answer: 'une veste noire en taille M' },
          { label: 'c', task: 'Beskriv: røde sko, størrelse 40', solution: 'des chaussures rouges en pointure 40', answer: 'des chaussures rouges en pointure 40' },
        ],
        solution: 'a) une robe bleue en taille S, b) une veste noire en taille M, c) des chaussures rouges en pointure 40',
        hints: ['Robe er hunkjønn: bleue (med -e)', 'Chaussures er flertall: rouges (med -s)'],
      },
    },
    {
      id: 'fransk-1-7-3-tip-1',
      type: 'tip',
      content: `Når du handler i Frankrike, vit at franske størrelser kan være litt annerledes enn norske. Det kan være lurt å prøve klærne før du kjøper! Franske størrelsesbetegnelser for kvinner er ofte 36, 38, 40 osv., mens for menn brukes S, M, L eller tall.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Qu'est-ce que tu portes? - Hva har du på deg?
// ============================================================================

export const CHAPTER_FRANSK_1_7_4: TextbookChapter = {
  id: 'fransk-1-7-4',
  courseId: 'fransk-1',
  chapterNumber: '7.4',
  title: 'Qu\'est-ce que tu portes?',
  subtitle: 'Hva har du på deg?',
  description: 'Lær å beskrive hva du og andre har på seg.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke verbet "porter" (a ha på seg)',
    'beskrive egne og andres antrekk',
    'snakke om klær til ulike årstider',
  ],
  content: [
    {
      id: 'fransk-1-7-4-intro',
      type: 'text',
      content: `## Hva har du på deg?

For å beskrive hva noen har på seg, bruker vi verbet "porter" (a baere/ha på seg). La oss lære å snakke om antrekk!`,
    },
    {
      id: 'fransk-1-7-4-def-1',
      type: 'definition',
      title: 'Verbet "porter" - å ha på seg',
      content: `**Bøyning av "porter":**

| Person | Form |
|--------|------|
| je | porte |
| tu | portes |
| il/elle/on | porte |
| nous | portons |
| vous | portez |
| ils/elles | portent |

**Merk:** "Porter" er et regelrett -er-verb, sa det følger det vanlige bøyningsmønsteret.`,
    },
    {
      id: 'fransk-1-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Porter',
      problem: `Oversett til norsk:

a) Je porte un jean.
b) Il porte une chemise bleue.
c) Qu'est-ce que tu portes aujourd'hui?`,
      solution: `a) Je porte un jean = **Jeg har på meg en jeans.**
b) Il porte une chemise bleue = **Han har på seg en blå skjorte.**
c) Qu'est-ce que tu portes aujourd'hui? = **Hva har du på deg i dag?**

**Alternativ oversettelse:** "Porter" kan også oversettes med "baerer" - "Jeg baerer en jeans."`,
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
| Aujourd'hui, je porte... | I dag har jeg på meg... |
| Il/Elle porte... | Han/Hun har på seg... |
| J'aime porter... | Jeg liker å ha på meg... |
| Ça te va bien! | Det kler deg! |
| Ça va bien ensemble | Det passer godt sammen |`,
    },
    {
      id: 'fransk-1-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive antrekk',
      problem: `Beskriv hva personen har på seg:

Marie: blå kjole, hvite sko, rødt skjerf`,
      solution: `**Marie porte une robe bleue, des chaussures blanches et une écharpe rouge.**

Eller i flere setninger:
- Marie porte une robe bleue.
- Elle porte des chaussures blanches.
- Elle porte aussi une écharpe rouge.

**Adjektivsamsvar:**
- une robe bleue (hunkjønn - bleu -> bleue)
- des chaussures blanches (hunkjønn flertall - blanc -> blanches)
- une écharpe rouge (rouge er lik i alle former)`,
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
          { label: 'a', task: 'Jeg har på meg en genser.', solution: 'Je porte un pull.', answer: 'Je porte un pull' },
          { label: 'b', task: 'Han har på seg svarte bukser.', solution: 'Il porte un pantalon noir.', answer: 'Il porte un pantalon noir' },
          { label: 'c', task: 'Hva har du på deg i dag?', solution: 'Qu\'est-ce que tu portes aujourd\'hui?', answer: 'Qu\'est-ce que tu portes aujourd\'hui' },
        ],
        solution: 'a) Je porte un pull, b) Il porte un pantalon noir, c) Qu\'est-ce que tu portes aujourd\'hui?',
        hints: ['Pull er hankjønn: un pull', 'Pantalon er entall på fransk, selv om vi sier "bukser" på norsk'],
      },
    },
    {
      id: 'fransk-1-7-4-text-2',
      type: 'text',
      content: `## Klær til ulike årstider

| Aarstid | Fransk | Klær |
|---------|--------|-------|
| Au printemps | Om våren | un blouson, un pull léger |
| En ete | Om sommeren | un tee-shirt, un short, des sandales |
| En automne | Om høsten | une veste, un jean, des bottes |
| En hiver | Om vinteren | un manteau, une écharpe, des gants |`,
    },
    {
      id: 'fransk-1-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Klær til årstidene',
      problem: `Hva har du vanligvis på deg i disse årstidene?

a) En ete (om sommeren)
b) En hiver (om vinteren)
c) Au printemps (om våren)`,
      solution: `**Eksempelsvar:**

a) En ete, je porte un tee-shirt et un short.
*(Om sommeren har jeg på meg t-skjorte og shorts.)*

b) En hiver, je porte un manteau chaud et une écharpe.
*(Om vinteren har jeg på meg en varm frakk og et skjerf.)*

c) Au printemps, je porte un pull léger et un jean.
*(Om våren har jeg på meg en lett genser og jeans.)*

**Nye ord:**
- chaud(e) = varm
- léger/légere = lett
- des bottes = støvler`,
    },
    {
      id: 'fransk-1-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv hva du har på deg i disse årstidene:',
        subTasks: [
          { label: 'a', task: 'En ete, je porte...', solution: 'Valgfritt - f.eks. un tee-shirt et un short' },
          { label: 'b', task: 'En hiver, je porte...', solution: 'Valgfritt - f.eks. un manteau et une écharpe' },
          { label: 'c', task: 'Au printemps, je porte...', solution: 'Valgfritt - f.eks. un pull léger et un jean' },
        ],
        solution: 'Svar vil variere. Eksempel: a) En ete, je porte un tee-shirt et un short, b) En hiver, je porte un manteau chaud et des bottes, c) Au printemps, je porte un pull et un jean.',
        hints: ['chaud = varm', 'léger = lett'],
      },
    },
    {
      id: 'fransk-1-7-4-text-3',
      type: 'text',
      content: `## Komplimenter og meninger

| Fransk | Norsk |
|--------|-------|
| Ça te va bien! | Det kler deg! |
| Ça me plait | Jeg liker det |
| C'est beau / belle | Det er pent |
| C'est à la mode | Det er moderne |
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
        task: 'Beskriv ditt favorittantrekk (3-4 setninger på fransk):',
        subTasks: [
          { label: 'a', task: 'Hvilke klesplagg har du på deg?', solution: 'Nevn 2-3 klesplagg på fransk' },
          { label: 'b', task: 'Hvilke farger har de?', solution: 'Beskriv fargene på fransk' },
          { label: 'c', task: 'Hvorfor liker du dette antrekket?', solution: 'Bruk ord som confortable, beau, pratique' },
        ],
        solution: 'Eksempel: "Ma tenue préférée, c\'est un jean bleu et un tee-shirt blanc. Je porte aussi des baskets noires. C\'est confortable et pratique."',
        hints: ['Ma tenue préférée = favorittantrekket mitt', 'aussi = også', 'des baskets = joggesko'],
      },
    },
    {
      id: 'fransk-1-7-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Klesstil i Frankrike',
      content: `Frankrike er verdens motehovedstad, og franskmenn er kjent for sin elegante og avslappede stil ("chic decontracte"). Den typiske franske stilen innebarer nøytrale farger som svart, hvitt, blatt og beige. "La petite robe noire" (den lille svarte kjolen) er et ikonisk fransk motebegrep, popularisert av Coco Chanel. Franskmenn forêtrekker ofte kvalitet fremfor kvantitet i garderoben.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: L'école - Skolen
// ============================================================================

export const CHAPTER_FRANSK_1_8_1: TextbookChapter = {
  id: 'fransk-1-8-1',
  courseId: 'fransk-1',
  chapterNumber: '8.1',
  title: 'L\'école',
  subtitle: 'Skolen',
  description: 'Lær ord for skolehverdagen og klasserommet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lære ord for skolemiljoeet',
    'beskrive klasserommet',
    'snakke om skolehverdagen',
  ],
  content: [
    {
      id: 'fransk-1-8-1-intro',
      type: 'text',
      content: `## Skolen på fransk

Skolen er en viktig del av hverdagen. La oss lære de viktigste ordene for å snakke om skolen på fransk!`,
    },
    {
      id: 'fransk-1-8-1-def-1',
      type: 'definition',
      title: 'Vokabular: Skolebygg',
      content: `**Deler av skolen:**

| Fransk | Norsk |
|--------|-------|
| l'école (f.) | skolen |
| la salle de classe | klasserommet |
| la cour (de récréation) | skolegården |
| la bibliothèque | biblioteket |
| la cantine | kantinen |
| le gymnase | gymsalen |
| le bureau du directeur | rektorens kontor |
| la salle des professeurs | lærervarelset |`,
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
| la fenêtre | vinduet |
| la porte | døren |`,
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
c) la cour = **skolegården**
d) le gymnase = **gymsalen**

**Sammensatte uttrykk:** Fransk bruker ofte "de" for a binde ord sammen:
- salle + de + classe = salle de classe (klasserom)
- cour + de + récréation = cour de récréation (skolegård)
- salle + des + professeurs = salle des professeurs (lærerværelset)`,
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
          { label: 'a', task: 'skolen', solution: 'l\'école', answer: 'l\'école' },
          { label: 'b', task: 'klasserommet', solution: 'la salle de classe', answer: 'la salle de classe' },
          { label: 'c', task: 'kantinen', solution: 'la cantine', answer: 'la cantine' },
          { label: 'd', task: 'biblioteket', solution: 'la bibliothèque', answer: 'la bibliothèque' },
        ],
        solution: 'a) l\'école, b) la salle de classe, c) la cantine, d) la bibliothèque',
        hints: ['Ecole er hunkjønn', 'Salle betyr rom/sal'],
      },
    },
    {
      id: 'fransk-1-8-1-def-3',
      type: 'definition',
      title: 'Vokabular: Personer på skolen',
      content: `**Mennesker på skolen:**

| Fransk | Norsk |
|--------|-------|
| le professeur (le prof) | læreren |
| l'élève (m./f.) | eleven |
| le directeur / la directrice | rektoren |
| le/la camarade de classe | klassekameraten |
| le/la surveillant(e) | inspektøren |
| les élèves (pl.) | elevene |
| la classe | klassen |`,
    },
    {
      id: 'fransk-1-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Personer',
      problem: `Les og oversett:

Le professeur est devant le tableau.
Les élèves sont assis sur les chaises.
La directrice est dans son bureau.`,
      solution: `**Le professeur est devant le tableau.**
= Læreren står foran tavla.

**Les élèves sont assis sur les chaises.**
= Elevene sitter på stolene.

**La directrice est dans son bureau.**
= Rektoren (kvinne) er på kontoret sitt.

**Nye uttrykk:**
- devant = foran
- assis(e) = sittende
- dans = i/på`,
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
          { label: 'a', task: 'le professeur', solution: 'læreren', answer: 'læreren' },
          { label: 'b', task: 'l\'élève', solution: 'eleven', answer: 'eleven' },
          { label: 'c', task: 'le directeur', solution: 'rektoren', answer: 'rektoren' },
          { label: 'd', task: 'le camarade de classe', solution: 'klassekameraten', answer: 'klassekameraten' },
        ],
        solution: 'a) læreren, b) eleven, c) rektoren, d) klassekameraten',
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
| la gomme | viskelæret |
| la règle | linjalen |
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
c) Jeg trenger et viskelær.`,
      solution: `a) **J'ai un livre dans mon sac a dos.**
(dans = i, mon = min)

b) **Où est mon crayon?**
(mon = min, for hankjønn)

c) **J'ai besoin d'une gomme.**
(avoir besoin de = å trenge)

**Nyttig uttrykk:** avoir besoin de = å trenge
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
          { label: 'c', task: 'linjalen', solution: 'la règle', answer: 'la règle' },
          { label: 'd', task: 'ryggsekken', solution: 'le sac a dos', answer: 'le sac a dos' },
        ],
        solution: 'a) le livre, b) le stylo, c) la règle, d) le sac a dos',
        hints: ['Livre er hankjønn', 'Sac a dos betyr bokstavelig "sekk på ryggen"'],
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
        task: 'Beskriv klasserommet ditt (3 setninger på fransk):',
        subTasks: [
          { label: 'a', task: 'Hva er i klasserommet?', solution: 'Nevn moebler og utstyr' },
          { label: 'b', task: 'Hvor mange elever er det?', solution: 'Bruk tall på fransk' },
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
      content: `Det franske skolesystemet er annerledes enn det norske. Etter barneskolen (école primaire, 6-11 år) går elevene på ungdomsskole (college, 11-15 år) og deretter videregående (lycee, 15-18 år). Skoledagene i Frankrike er ofte lengre enn i Norge, fra ca. kl. 8 til 16 eller 17. Elevene har vanligvis fri på onsdag ettermiddag. Skolemåltidene i kantinen er ofte flereretters!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Les matières scolaires - Skolefagene
// ============================================================================

export const CHAPTER_FRANSK_1_8_2: TextbookChapter = {
  id: 'fransk-1-8-2',
  courseId: 'fransk-1',
  chapterNumber: '8.2',
  title: 'Les matières scolaires',
  subtitle: 'Skolefagene',
  description: 'Lær navnene på skolefag og uttrykk om favorittfag.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lære navnene på skolefag',
    'snakke om favorittfag',
    'uttrykke meninger om fag',
  ],
  content: [
    {
      id: 'fransk-1-8-2-intro',
      type: 'text',
      content: `## Skolefagene på fransk

Hvilke fag har du på skolen? La oss lære hva de heter på fransk og hvordan du kan snakke om dem!`,
    },
    {
      id: 'fransk-1-8-2-def-1',
      type: 'definition',
      title: 'Vokabular: Hovedfag',
      content: `**Hovedfagene:**

| Fransk | Norsk |
|--------|-------|
| le français | fransk |
| l'anglais (m.) | engelsk |
| les mathématiques (les maths) | matematikk/matte |
| les sciences (f. pl.) | naturfag |
| l'histoire (f.) | historie |
| la géographie (la geo) | geografi |
| l'éducation religieuse (f.) | religion |`,
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
| l'éducation physique et sportive (l'EPS) | gym/kroppsøving |
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
      content: `De fleste fagnavn på fransk ligner på de norske eller engelske ordene: la physique = fysikk, la chimie = kjemi, la biologie = biologi. Franskmenene forkorter ofte fag: les maths (matematikk), la geo (geografi), la bio (biologi), l'EPS (gym).`,
    },
    {
      id: 'fransk-1-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Fagnavn',
      problem: `Oversett til norsk:

a) les mathématiques
b) l'histoire
c) l'anglais
d) les arts plastiques`,
      solution: `a) les mathématiques = **matematikk**
b) l'histoire = **historie**
c) l'anglais = **engelsk**
d) les arts plastiques = **kunst**

**Merk:** Noen fag står i flertall på fransk: les mathématiques, les sciences, les arts plastiques.`,
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
          { label: 'a', task: 'matematikk', solution: 'les mathématiques / les maths', answer: 'les maths' },
          { label: 'b', task: 'engelsk', solution: 'l\'anglais', answer: 'l\'anglais' },
          { label: 'c', task: 'historie', solution: 'l\'histoire', answer: 'l\'histoire' },
          { label: 'd', task: 'musikk', solution: 'la musique', answer: 'la musique' },
        ],
        solution: 'a) les mathématiques / les maths, b) l\'anglais, c) l\'histoire, d) la musique',
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
| Ma matière préférée, c'est... | Favorittfaget mitt er... |
| J'aime... | Jeg liker... |
| J'adore... | Jeg elsker... |
| Je déteste... | Jeg hater... |
| ... est intéressant(e) | ... er intéressant |
| ... est ennuyeux/ennuyeuse | ... er kjedelig |
| ... est difficile | ... er vanskelig |
| ... est facile | ... er lett |`,
    },
    {
      id: 'fransk-1-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Favorittfag',
      problem: `Les og oversett:

a) Ma matière préférée, c'est la musique.
b) Les maths, c'est difficile, mais intéressant.
c) J'adore l'EPS!`,
      solution: `a) Ma matière préférée, c'est la musique.
= **Favorittfaget mitt er musikk.**

b) Les maths, c'est difficile, mais intéressant.
= **Matte er vanskelig, men intéressant.**

c) J'adore l'EPS!
= **Jeg elsker gym!**

**Tips:** "J'aime" = jeg liker, "j'adore" = jeg elsker, "je déteste" = jeg hater. Du kan bruke ulike styrker!`,
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
          { label: 'a', task: 'Favorittfaget mitt er historie.', solution: 'Ma matière préférée, c\'est l\'histoire.', answer: 'Ma matière préférée c\'est l\'histoire' },
          { label: 'b', task: 'Jeg liker matematikk.', solution: 'J\'aime les maths.', answer: 'J\'aime les maths' },
          { label: 'c', task: 'Kunst er intéressant.', solution: 'Les arts plastiques, c\'est intéressant.', answer: 'Les arts plastiques c\'est intéressant' },
        ],
        solution: 'a) Ma matière préférée, c\'est l\'histoire, b) J\'aime les maths, c) Les arts plastiques, c\'est intéressant',
        hints: ['matière préférée = favorittfag', 'aimer = a like'],
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
| le cours / la leçon | timen |
| la récréation (la recre) | friminuttet |
| la pause déjeuner | lunsjen |
| les devoirs (m. pl.) | leksene |
| le contrôle / l'examen | prøven |
| la note | karakteren |`,
    },
    {
      id: 'fransk-1-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Skoledagen',
      problem: `Beskriv skoledagen:

Le lundi, j'ai d'abord français, puis mathématiques.
A la récréation, je mange mon goûter.
Apres l'école, je fais mes devoirs.`,
      solution: `**Le lundi, j'ai d'abord français, puis mathématiques.**
= Pa mandag har jeg først fransk, sa matematikk.

**A la récréation, je mange mon goûter.**
= I friminuttet spiser jeg mellommåltidet mitt.

**Apres l'école, je fais mes devoirs.**
= Etter skolen gjør jeg lekser.

**Tidsord:**
- d'abord = først
- puis / ensuite = sa/deretter
- après = etter`,
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
          { label: 'a', task: 'Hva heter "timeplan" på fransk?', solution: 'l\'emploi du temps', answer: 'emploi du temps' },
          { label: 'b', task: 'Hva heter "lekser" på fransk?', solution: 'les devoirs', answer: 'devoirs' },
          { label: 'c', task: 'Hva heter "prøve" på fransk?', solution: 'le contrôle / l\'examen', answer: 'controle' },
          { label: 'd', task: 'Hva heter "karakter" på fransk?', solution: 'la note', answer: 'note' },
        ],
        solution: 'a) l\'emploi du temps, b) les devoirs, c) le contrôle/l\'examen, d) la note',
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
        task: 'Skriv om skoledagen din på fransk (4-5 setninger):',
        subTasks: [
          { label: 'a', task: 'Hvilke fag har du i dag?', solution: 'Nevn minst 3 fag på fransk' },
          { label: 'b', task: 'Hva er favorittfaget ditt og hvorfor?', solution: 'Bruk adjektiver' },
          { label: 'c', task: 'Hva gjør du etter skolen?', solution: 'Bruk "apres l\'école"' },
        ],
        solution: 'Eksempel: "Aujourd\'hui, j\'ai français, maths et EPS. Ma matière préférée, c\'est l\'EPS, parce que c\'est amusant. Les maths, c\'est difficile, mais intéressant. Apres l\'école, je fais mes devoirs."',
        hints: ['parce que = fordi', 'amusant = goy/morsomt'],
      },
    },
    {
      id: 'fransk-1-8-2-note-1',
      type: 'note',
      title: 'Kulturnotat: Karaktersystem',
      content: `I Frankrike brukes et karaktersystem fra 0-20, der 20 er best. En karakter på 10/20 regnes som bestatt. Det er veldig sjelden a fa 20/20 - selv 16/20 regnes som utmerket! Typiske kommentarer: 18-20 = excellent, 16-17 = tres bien, 14-15 = bien, 12-13 = assez bien, 10-11 = passable, under 10 = stryk.`,
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
  description: 'Lær navnene på vanlige yrker på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lære ord for ulike yrker',
    'forstaa hankjønn og hunkjønn for yrker',
    'beskrive hva folk jobber med',
  ],
  content: [
    {
      id: 'fransk-1-8-3-intro',
      type: 'text',
      content: `## Yrker på fransk

Hva vil du bli når du blir stor? La oss lære navnene på ulike yrker på fransk!

På fransk har de fleste yrker to former - en for menn og en for kvinner. Hunkjønnsformen far ofte endelsen "-e" eller en annen endring.`,
    },
    {
      id: 'fransk-1-8-3-def-1',
      type: 'definition',
      title: 'Vokabular: Vanlige yrker',
      content: `**Yrker (hankjønn og hunkjønn):**

| Hankjønn | Hunkjønn | Norsk |
|-----------|-----------|-------|
| un médecin | une médecin | lege |
| un professeur | une professeure | lærer |
| un policier | une policiere | politibetjent |
| un ingenieur | une ingenieure | ingenioer |
| un infirmier | une infirmiere | sykepleier |
| un cuisinier | une cuisiniere | kokk |
| un vendeur | une vendeuse | ekspeditør |`,
    },
    {
      id: 'fransk-1-8-3-def-2',
      type: 'definition',
      title: 'Flere yrker',
      content: `**Flere vanlige yrker:**

| Hankjønn | Hunkjønn | Norsk |
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
      content: `Husk moensteret for hunkjønnsformer av yrker: -ier -> -iere (infirmier/infirmiere), -eur -> -euse (vendeur/vendeuse), -ien -> -ienne (mecanicien/mecanicienne). Noen yrker er like i begge kjønn: architecte, journaliste, médecin.`,
    },
    {
      id: 'fransk-1-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Yrker',
      problem: `Oversett til norsk:

a) un médecin
b) une professeure
c) un policier
d) une avocate`,
      solution: `a) un médecin = **lege (mann)**
b) une professeure = **lærer (kvinne)**
c) un policier = **politibetjent (mann)**
d) une avocate = **advokat (kvinne)**

**Merk:** På fransk bruker vi artikkelen un/une også når vi sier hva noen er: "Il est médecin" (uten artikkel) eller "C'est un médecin" (med artikkel).`,
    },
    {
      id: 'fransk-1-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-8-3-ex-1',
        number: '8.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk (bruk hankjønnsformen):',
        subTasks: [
          { label: 'a', task: 'lege', solution: 'un médecin', answer: 'médecin' },
          { label: 'b', task: 'lærer', solution: 'un professeur', answer: 'professeur' },
          { label: 'c', task: 'ingenioer', solution: 'un ingenieur', answer: 'ingenieur' },
          { label: 'd', task: 'kokk', solution: 'un cuisinier', answer: 'cuisinier' },
        ],
        solution: 'a) un médecin, b) un professeur, c) un ingenieur, d) un cuisinier',
        hints: ['Médecin har accent på første e', 'Cuisinier kommer fra cuisine (kjøkkenet)'],
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
| Je suis médecin | Jeg er lege |
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
= **Jeg er lærer.** (sagt av en kvinne)

c) Mon pere travaille comme ingenieur.
= **Faren min jobber som ingenioer.**

**Merk:** Etter "être" (je suis, tu es...) brukes yrket **uten artikkel**: "Je suis médecin" (ikke "Je suis un médecin"). Men med "c'est" brukes artikkel: "C'est un médecin".`,
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
          { label: 'a', task: 'Jeg er lege. (mann)', solution: 'Je suis médecin.', answer: 'Je suis médecin' },
          { label: 'b', task: 'Hun er lærer.', solution: 'Elle est professeure.', answer: 'Elle est professeure' },
          { label: 'c', task: 'Moren min jobber som sykepleier.', solution: 'Ma mere travaille comme infirmiere.', answer: 'Ma mere travaille comme infirmiere' },
        ],
        solution: 'a) Je suis médecin, b) Elle est professeure, c) Ma mere travaille comme infirmiere',
        hints: ['Etter "être" brukes ikke artikkel', 'travailler comme = jobber som'],
      },
    },
    {
      id: 'fransk-1-8-3-text-2',
      type: 'text',
      content: `## Arbeidsplasser

**Hvor jobber folk?**

| Fransk | Norsk |
|--------|-------|
| à l'hôpital | på sykehuset |
| à l'école | på skolen |
| au bureau | på kontoret |
| à l'usine | på fabrikken |
| au restaurant | på restauranten |
| au magasin / dans un magasin | i butikken |
| a la maison | hjemme (hjemmekontor) |
| a la boulangerie | på bakeriet |`,
    },
    {
      id: 'fransk-1-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Arbeidsplasser',
      problem: `Hvor jobber disse personene?

a) Le médecin travaille a ___.
b) La professeure travaille a ___.
c) Le vendeur travaille au ___.`,
      solution: `a) Le médecin travaille a **l'hôpital**.
= Legen jobber på sykehuset.

b) La professeure travaille a **l'école**.
= Læreren jobber på skolen.

c) Le vendeur travaille au **magasin**.
= Ekspeditøren jobber i butikken.

**Grammatikk:**
- a + le = au (hankjønn: au bureau, au restaurant)
- a + la = a la (hunkjønn: a la maison, a la boulangerie)
- a + l' = a l' (foran vokal: à l'hôpital, à l'école)`,
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
          { label: 'b', task: 'L\'infirmiere travaille...', solution: 'a l\'hôpital', answer: 'a l\'hôpital' },
          { label: 'c', task: 'Le professeur travaille...', solution: 'a l\'école', answer: 'a l\'école' },
        ],
        solution: 'a) au restaurant, b) a l\'hôpital, c) a l\'école',
        hints: ['Restaurant er hankjønn: a + le = au', 'Hopital begynner med stum h: a l\''],
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
        task: 'Beskriv familiens yrker (3-4 setninger på fransk):',
        subTasks: [
          { label: 'a', task: 'Hva jobber foreldrene dine som?', solution: 'Bruk "Mon pere est..." / "Ma mere travaille comme..."' },
          { label: 'b', task: 'Hvor jobber de?', solution: 'Bruk preposisjoner: au, a la, a l\'' },
          { label: 'c', task: 'Kjenner du noen med et intéressant yrke?', solution: 'Beskriv yrket' },
        ],
        solution: 'Eksempel: "Mon pere est ingenieur. Il travaille dans une usine. Ma mere travaille comme professeure a l\'école. Mon oncle est pilote et il voyage souvent en France."',
        hints: ['voyager = a reise', 'souvent = ofte'],
      },
    },
    {
      id: 'fransk-1-8-3-note-1',
      type: 'note',
      title: 'Kulturnotat: Utdanning i Frankrike',
      content: `I Frankrike avsluttes videregående skole med en stor eksamen kalt "le baccalauréat" (le bac). Denne eksamenen er avgoeirende for a komme inn på universitet. Etter videregående kan man studere på universitet eller velge en "grande école" (eliteskole), som er veldig prestisjefylt. Populære studier inkluderer medisin, jus, ingenioerutdanning og handel. Yrkesutdanning ("formation professionnelle") er også en vanlig vei.`,
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
  description: 'Lær å snakke om fremtidsplaner og droemmeyrker.',
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

Hva vil du bli når du blir voksen? I dette kapittelet lærer du å snakke om drømmer og fremtidsplaner på fransk!`,
    },
    {
      id: 'fransk-1-8-4-def-1',
      type: 'definition',
      title: 'Verbet "vouloir" - a ville',
      content: `**Bøyning av "vouloir":**

| Person | Form |
|--------|------|
| je | veux |
| tu | veux |
| il/elle/on | veut |
| nous | voulons |
| vous | voulez |
| ils/elles | veulent |

**Merk:** "Vouloir" er et uregelrett verb. Hovedverbet står i infinitiv etter "vouloir".`,
    },
    {
      id: 'fransk-1-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Vouloir',
      problem: `Oversett til norsk:

a) Je veux devenir médecin.
b) Que veux-tu devenir?
c) Elle veut devenir professeure.`,
      solution: `a) Je veux devenir médecin.
= **Jeg vil bli lege.**

b) Que veux-tu devenir?
= **Hva vil du bli?**

c) Elle veut devenir professeure.
= **Hun vil bli lærer.**

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
          { label: 'b', task: 'Tu ___ devenir médecin.', solution: 'veux', answer: 'veux' },
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
      title: 'Je voudrais - Jeg vil gjerne (høflig form)',
      content: `**Bøyning av "voudrais" (kondisjonalis - høflig form):**

| Person | Form |
|--------|------|
| je | voudrais |
| tu | voudrais |
| il/elle/on | voudrait |
| nous | voudrions |
| vous | voudriez |
| ils/elles | voudraient |

**"Je voudrais"** er mer høflig enn "je veux" og brukes ofte om ønsker og drømmer.`,
    },
    {
      id: 'fransk-1-8-4-text-1',
      type: 'text',
      content: `## Vouloir vs. voudrais

| Fransk | Norsk | Bruk |
|--------|-------|------|
| Je veux | Jeg vil | Sterk vilje |
| Je voudrais | Jeg vil gjerne | Høflig oenke |

**Eksempler:**
- Je **veux** devenir médecin! = Jeg **vil** bli lege! (bestemt)
- Je **voudrais** devenir médecin. = Jeg **vil gjerne** bli lege. (høflig/oenke)`,
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
          { label: 'c', task: 'De vil gjerne studere medisin.', solution: 'Ils voudraient etudier la médecine.', answer: 'Ils voudraient etudier la médecine' },
        ],
        solution: 'a) Je voudrais devenir journaliste, b) Il voudrait travailler comme cuisinier, c) Ils voudraient etudier la médecine',
        hints: ['devenir = a bli', 'la médecine = medisin (faget)'],
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
| Etre créatif/creative | A være kreativ |
| C'est intéressant | Det er intéressant |
| C'est amusant | Det er goy |`,
    },
    {
      id: 'fransk-1-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Begrunnelser',
      problem: `Les og oversett:

Pourquoi veux-tu devenir médecin?
Je voudrais devenir médecin parce que je veux aider les gens.`,
      solution: `**Pourquoi veux-tu devenir médecin?**
= Hvorfor vil du bli lege?

**Je voudrais devenir médecin parce que je veux aider les gens.**
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
          { label: 'a', task: 'Devenir médecin - parce que...', solution: 'je veux aider les gens / c\'est important', answer: 'je veux aider les gens' },
          { label: 'b', task: 'Devenir musicien - parce que...', solution: 'je veux être créatif / j\'adore la musique', answer: 'j\'adore la musique' },
          { label: 'c', task: 'Devenir ingenieur - parce que...', solution: 'j\'aime resoudre des problemes / c\'est bien paye', answer: 'c\'est intéressant' },
        ],
        solution: 'a) parce que je veux aider les gens, b) parce que j\'adore la musique / je veux être créatif, c) parce que j\'aime resoudre des problemes / c\'est bien paye',
        hints: ['aider = a hjelpe', 'créatif = kreativ', 'resoudre = a loese'],
      },
    },
    {
      id: 'fransk-1-8-4-text-3',
      type: 'text',
      content: `## Spørsmål om fremtiden

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
        task: 'Skriv om dine fremtidsplaner (5-6 setninger på fransk):',
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
      content: `Når du snakker om fremtidsplaner på fransk, kan du bruke både "vouloir" og "voudrais". Bruk "je veux" når du er sikker på hva du vil, og "je voudrais" når du snakker om drømmer og ønsker. Du kan også bruke "j'aimerais" (jeg ville likt) som et alternativ til "je voudrais".`,
    },
    {
      id: 'fransk-1-8-4-note-1',
      type: 'note',
      title: 'Kulturnotat: Karrierevalg i Frankrike',
      content: `I Frankrike er utdanningsvalg veldig viktig. Etter videregående (le lycee) tar elevene "le baccalauréat" (le bac), og valget av studieretning pavirker fremtidige karrieremuligheter. De mest prestisjefylte utdanningene går gjennom "les grandes écoles" (eliteskolene), som krever krevende opptaksprover. Det er også vanlig med "stage" (praksisopphold) under studiene for a faa arbeidserfaring. Mange unge franskmenn tar også et aar i utlandet for a lære spraak og faa internasjonal erfaring.`,
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
