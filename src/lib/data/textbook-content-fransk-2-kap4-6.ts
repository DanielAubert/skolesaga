/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivaa 2 - Kapittel 4-6 (Detaljerte underkapitler)
 *
 * Dekker:
 * - Kapittel 4: Reise og kultur (4.1-4.4)
 * - Kapittel 5: Helse og kropp (5.1-5.4)
 * - Kapittel 6: Subjonctif (6.1-6.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4: REISE OG KULTUR
// ============================================================================

// ----------------------------------------------------------------------------
// 4.1 Voyager en France - Reise i Frankrike
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_4_1: TextbookChapter = {
  id: 'fransk-2-4-1',
  courseId: 'fransk-2',
  chapterNumber: '4.1',
  title: 'Voyager en France',
  subtitle: 'Reise i Frankrike',
  description: 'Laer reisevokabular, franske regioner og praktiske fraser for aa reise i Frankrike.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke reisevokabular paa fransk',
    'kjenne til viktige regioner i Frankrike',
  ],
  content: [
    {
      id: 'fransk-2-4-1-intro',
      type: 'text',
      content: `## Reise i Frankrike

Frankrike er et populaert reisemaal med variert natur og kultur. For aa reise rundt trenger du nyttig vokabular.

**Transportmidler:**

| Fransk | Norsk |
|--------|-------|
| le train | toget |
| le TGV (Train a Grande Vitesse) | hoeyhastighetstog |
| l'avion (m.) | flyet |
| le bus / l'autobus | bussen |
| le metro | metroen |
| la voiture | bilen |
| le velo | sykkelen |
| le bateau | baaten |`,
    },
    {
      id: 'fransk-2-4-1-text-1',
      type: 'text',
      content: `## Paa stasjonen og flyplassen

| Fransk | Norsk |
|--------|-------|
| la gare | togstasjonen |
| l'aeroport (m.) | flyplassen |
| un billet aller-retour | tur-retur-billett |
| un billet aller simple | enveisbillett |
| le quai | plattformen |
| la correspondance | bytte (tog/metro) |
| l'arrivee (f.) | ankomst |
| le depart | avgang |
| les bagages (m.pl.) | bagasjen |
| la valise | kofferten |`,
    },
    {
      id: 'fransk-2-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Paa togstasjonen',
      problem: `Si paa fransk:

a) Jeg vil gjerne ha en tur-retur-billett til Lyon.
b) Naar gaar neste tog?
c) Hvilken plattform?`,
      solution: `**Loesning:**

a) **Je voudrais un billet aller-retour pour Lyon.**

b) **A quelle heure part le prochain train ?**

c) **Quel quai ?** / **C'est quel quai ?**`,
    },
    {
      id: 'fransk-2-4-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg tar toget til Paris.', solution: 'Je prends le train pour Paris.' },
          { label: 'b', task: 'Hvor er togstasjonen?', solution: 'Ou est la gare ?' },
          { label: 'c', task: 'En enveisbillett, takk.', solution: 'Un billet aller simple, s\'il vous plait.' },
        ],
        solution: 'a) Je prends le train pour Paris. b) Ou est la gare ? c) Un billet aller simple, s\'il vous plait.',
        hints: ['prendre le train = ta toget', 'pour = til (destinasjon)'],
      },
    },
    {
      id: 'fransk-2-4-1-text-2',
      type: 'text',
      content: `## Viktige regioner i Frankrike

Frankrike har 13 administrative regioner (metropole):

| Region | Kjent for |
|--------|-----------|
| Ile-de-France | Paris, Versailles |
| Provence-Alpes-Cote d'Azur | Lavendel, Middelhavet, Nice |
| Normandie | D-dagen, Camembert, Mont-Saint-Michel |
| Bretagne | Kystlandskap, crepes, keltisk kultur |
| Nouvelle-Aquitaine | Bordeaux-vin, Baskisk kultur |
| Auvergne-Rhone-Alpes | Lyon, Alpene, skisport |
| Occitanie | Toulouse, Canal du Midi, Carcassonne |`,
    },
    {
      id: 'fransk-2-4-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Snakke om reise',
      problem: `Si paa fransk:

a) Jeg drar til Provence i sommer.
b) Lyon ligger soeroest i Frankrike.
c) Vi besoekerNormandie neste uke.`,
      solution: `**Loesning:**

a) **Je vais en Provence cet ete.**

b) **Lyon se trouve au sud-est de la France.**

c) **Nous visitons la Normandie la semaine prochaine.**`,
    },
    {
      id: 'fransk-2-4-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne reise til Soer-Frankrike.', solution: 'Je voudrais voyager dans le sud de la France.' },
          { label: 'b', task: 'Paris ligger i Ile-de-France.', solution: 'Paris se trouve en Ile-de-France.' },
          { label: 'c', task: 'Vi drar til Alpene for aa staa paa ski.', solution: 'Nous allons dans les Alpes pour faire du ski.' },
        ],
        solution: 'a) Je voudrais voyager dans le sud de la France. b) Paris se trouve en Ile-de-France. c) Nous allons dans les Alpes pour faire du ski.',
        hints: ['se trouver = aa befinne seg', 'dans le sud = i soer'],
      },
    },
    {
      id: 'fransk-2-4-1-text-3',
      type: 'text',
      content: `## Praktiske reisefraser

| Fransk | Norsk |
|--------|-------|
| Excusez-moi, ou se trouve... ? | Unnskyld, hvor er... ? |
| Je cherche... | Jeg leter etter... |
| C'est loin d'ici ? | Er det langt herfra? |
| C'est a combien de kilometres ? | Hvor mange kilometer er det? |
| Tournez a gauche / a droite | Sving til venstre / hoeyre |
| Allez tout droit | Gaa rett frem |
| Je suis perdu(e). | Jeg har gaatt meg bort. |
| Pouvez-vous m'aider ? | Kan du hjelpe meg? |`,
    },
    {
      id: 'fransk-2-4-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Spoerre om veien',
      problem: `Si paa fransk:

a) Unnskyld, hvor er hotellet?
b) Er det langt herfra?
c) Jeg har gaatt meg bort.`,
      solution: `**Loesning:**

a) **Excusez-moi, ou se trouve l'hotel ?**

b) **C'est loin d'ici ?**

c) **Je suis perdu(e).**`,
    },
    {
      id: 'fransk-2-4-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg leter etter togstasjonen.', solution: 'Je cherche la gare.' },
          { label: 'b', task: 'Sving til hoeyre og gaa rett frem.', solution: 'Tournez a droite et allez tout droit.' },
          { label: 'c', task: 'Kan du hjelpe meg?', solution: 'Pouvez-vous m\'aider ?' },
        ],
        solution: 'a) Je cherche la gare. b) Tournez a droite et allez tout droit. c) Pouvez-vous m\'aider ?',
        hints: ['chercher = lete etter', 'tout droit = rett frem'],
      },
    },
    {
      id: 'fransk-2-4-1-tip-1',
      type: 'tip',
      content: `**Tips for aa reise i Frankrike:**

1. TGV (hoeyhastighetstog) er den raskeste maaten aa reise mellom byer
2. Bestill billetter i forveien paa sncf-connect.com for bedre priser
3. I Paris er metroen det mest praktiske transportmiddelet
4. Husk aa "composter" (stemple) togbilletten foer du gaar ombord (paa noen stasjoner)`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.2 La culture francaise au quotidien - Fransk hverdagskultur
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_4_2: TextbookChapter = {
  id: 'fransk-2-4-2',
  courseId: 'fransk-2',
  chapterNumber: '4.2',
  title: 'La culture francaise au quotidien',
  subtitle: 'Fransk hverdagskultur',
  description: 'Laer om fransk hverdagskultur, skikker, etikette og matvaner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til franske hverdagsskikker',
    'kommunisere hoeflig i franske sosiale situasjoner',
  ],
  content: [
    {
      id: 'fransk-2-4-2-intro',
      type: 'text',
      content: `## Fransk hverdagskultur

Frankrike har mange sosiale koder og tradisjoner som er viktige aa kjenne til.

**Hilsener:**

| Fransk | Norsk | Bruk |
|--------|-------|------|
| Bonjour | God dag | Formell, hele dagen |
| Bonsoir | God kveld | Etter ca. kl. 18 |
| Salut | Hei | Uformell, venner |
| Enchanté(e) | Hyggelig aa hilse paa deg | Foerste gang |
| Au revoir | Ha det | Formell |
| A bientot | Vi ses snart | Uformell |
| Bonne journee | Ha en fin dag | Naar man gaar |`,
    },
    {
      id: 'fransk-2-4-2-text-1',
      type: 'text',
      content: `## "La bise" og hoeflig omgang

I Frankrike hilser man ofte med kinnkyss ("la bise"). Antall kyss varierer etter region (2-4).

**Hoeflige uttrykk:**

| Fransk | Norsk |
|--------|-------|
| s'il vous plait | vaer saa snill (formell) |
| s'il te plait | vaer saa snill (uformell) |
| merci beaucoup | tusen takk |
| je vous en prie | vaer saa god (formell) |
| de rien | ingen aarsak |
| pardon / excusez-moi | unnskyld |
| je suis desole(e) | jeg er lei meg |

**Viktig:** Franskmenn bruker alltid "Bonjour" naar de gaar inn i en butikk eller snakker med fremmede.`,
    },
    {
      id: 'fransk-2-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Hoeflige uttrykk',
      problem: `Hva sier du paa fransk?

a) Du gaar inn i en butikk.
b) Du takker for hjelpen.
c) Du unnskylder deg.`,
      solution: `**Loesning:**

a) **Bonjour !** (alltid si god dag naar du gaar inn i en butikk)

b) **Merci beaucoup !**

c) **Excusez-moi.** / **Pardon.**`,
    },
    {
      id: 'fransk-2-4-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva sier du paa fransk i disse situasjonene?',
        subTasks: [
          { label: 'a', task: 'Du moetertil en middagsselskap.', solution: 'Bonsoir ! Enchanté(e) !' },
          { label: 'b', task: 'Du tar farvel med en venn.', solution: 'Salut ! A bientot !' },
          { label: 'c', task: 'Noen gir deg en gave.', solution: 'Merci beaucoup ! C\'est tres gentil !' },
        ],
        solution: 'a) Bonsoir ! Enchanté(e) ! b) Salut ! A bientot ! c) Merci beaucoup ! C\'est tres gentil !',
        hints: ['Bonsoir brukes om kvelden', 'Salut er uformelt'],
      },
    },
    {
      id: 'fransk-2-4-2-text-2',
      type: 'text',
      content: `## Maaltider og matvaner

Franskmenn har faste maaltidstider:

| Maaltid | Tid | Beskrivelse |
|---------|-----|-------------|
| Le petit dejeuner | 7-9 | Frokost: croissant, broed, kaffe |
| Le dejeuner | 12-14 | Lunsj: ofte et stort maaltid |
| Le gouter | 16-17 | Mellommaaltid (barna) |
| Le diner | 19-21 | Middag: ofte lettere enn lunsj |

**Maaltidsfranskkultur:**
- Man sier "Bon appetit !" foer man spiser
- Broed legges direkte paa bordet (ikke paa tallerkenen)
- Man holder gaffelen i venstre haand og kniven i hoeyre
- Ost spises foer dessert`,
    },
    {
      id: 'fransk-2-4-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Maaltider',
      problem: `Si paa fransk:

a) Hva spiser du til frokost?
b) Lunsjen er klokka tolv.
c) God appetitt!`,
      solution: `**Loesning:**

a) **Qu'est-ce que tu manges au petit dejeuner ?**

b) **Le dejeuner est a midi.**

c) **Bon appetit !**`,
    },
    {
      id: 'fransk-2-4-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Til frokost spiser jeg en croissant.', solution: 'Au petit dejeuner, je mange un croissant.' },
          { label: 'b', task: 'Vi spiser middag klokka aatte.', solution: 'Nous dinons a vingt heures. / On dine a huit heures.' },
          { label: 'c', task: 'Lunsj er det viktigste maaltidet.', solution: 'Le dejeuner est le repas le plus important.' },
        ],
        solution: 'a) Au petit dejeuner, je mange un croissant. b) Nous dinons a vingt heures. c) Le dejeuner est le repas le plus important.',
        hints: ['diner = spise middag', 'le repas = maaltidet'],
      },
    },
    {
      id: 'fransk-2-4-2-text-3',
      type: 'text',
      content: `## Sosiale koder

| Situasjon | Forventet oppfoersel |
|-----------|---------------------|
| I butikken | Alltid si "Bonjour" og "Au revoir" |
| Paa restaurant | Vent paa aa bli vist til bordet |
| Hjemme hos noen | Ta med en gave (vin, blomster, sjokolade) |
| Paa jobb | Bruk "vous" med sjefen |
| Blant venner | "Tu" er greit |

**Vous vs. Tu:**
- **Vous** (De/Dem) - formelt, med fremmede, eldre, overordnede
- **Tu** (du) - uformelt, med venner, familie, jevnaldrende`,
    },
    {
      id: 'fransk-2-4-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Vous vs. Tu',
      problem: `Velg riktig form (vous/tu):

a) Du snakker med laereren din.
b) Du snakker med bestevennen din.
c) Du snakker med en ukjent paa gata.`,
      solution: `**Loesning:**

a) **Vous** - laereren er en autoritetsperson.

b) **Tu** - det er en naer venn.

c) **Vous** - det er en fremmed person.`,
    },
    {
      id: 'fransk-2-4-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk (bruk riktig vous/tu):',
        subTasks: [
          { label: 'a', task: 'Har du (formell) et ledig bord?', solution: 'Avez-vous une table libre ?' },
          { label: 'b', task: 'Vil du (uformell) spise med meg?', solution: 'Tu veux manger avec moi ?' },
          { label: 'c', task: 'Kan De hjelpe meg?', solution: 'Pouvez-vous m\'aider ?' },
        ],
        solution: 'a) Avez-vous une table libre ? b) Tu veux manger avec moi ? c) Pouvez-vous m\'aider ?',
        hints: ['vous = formelt', 'tu = uformelt'],
      },
    },
    {
      id: 'fransk-2-4-2-note-1',
      type: 'note',
      content: `**Kulturell info:**

- Franskmenn tar gjerne to timer til lunsj
- Butikker kan vaere stengt mellom kl. 12 og 14 (lunsjtid)
- Soendag er tradisjonelt en familiedag da mange butikker er stengt
- "Le gouter" (mellommaaltidet) er spesielt viktig for barn`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.3 La gastronomie francaise - Fransk gastronomi
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_4_3: TextbookChapter = {
  id: 'fransk-2-4-3',
  courseId: 'fransk-2',
  chapterNumber: '4.3',
  title: 'La gastronomie francaise',
  subtitle: 'Fransk gastronomi',
  description: 'Laer om fransk gastronomi, regionale retter, vinkultur og fromageri.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til franske kulinariske tradisjoner',
    'beskrive franske retter og matvarer paa fransk',
  ],
  content: [
    {
      id: 'fransk-2-4-3-intro',
      type: 'text',
      content: `## Fransk gastronomi

Fransk matkultur er paa UNESCOs verdensarvliste. Et tradisjonelt fransk maaltid bestaar av flere retter:

| Fransk | Norsk |
|--------|-------|
| l'aperitif (m.) | aperitiff (drink foer maten) |
| l'entree (f.) | forrett |
| le plat principal | hovedrett |
| le fromage | ost |
| le dessert | dessert |
| le digestif | digestif (drink etter maten) |

**Et typisk maaltid:**
Aperitif → Forrett → Hovedrett → Salat → Ost → Dessert → Kaffe`,
    },
    {
      id: 'fransk-2-4-3-text-1',
      type: 'text',
      content: `## Regionale spesialiteter

Hver region i Frankrike har sine egne retter:

| Region | Rett | Beskrivelse |
|--------|------|-------------|
| Bourgogne | le boeuf bourguignon | oksekjoett i roedvinsaus |
| Provence | la ratatouille | groennsaksgryterett |
| Alsace | la choucroute | surkaal med poelse og kjoett |
| Bretagne | les crepes / les galettes | pannekaker (soete/salte) |
| Normandie | le camembert | myk hvitost |
| Lyon | les quenelles | fiskeboller i saus |
| Nice | la salade nicoise | salat med tunfisk og egg |`,
    },
    {
      id: 'fransk-2-4-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestille paa restaurant',
      problem: `Si paa fransk:

a) Som forrett vil jeg gjerne ha loekssuppe.
b) Som hovedrett tar jeg boeuf bourguignon.
c) Og til dessert, en creme brulee.`,
      solution: `**Loesning:**

a) **Comme entree, je voudrais la soupe a l'oignon.**

b) **Comme plat principal, je prends le boeuf bourguignon.**

c) **Et comme dessert, une creme brulee.**`,
    },
    {
      id: 'fransk-2-4-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hva anbefaler du? (formelt)', solution: 'Qu\'est-ce que vous recommandez ?' },
          { label: 'b', task: 'Jeg vil gjerne ha dagens rett.', solution: 'Je voudrais le plat du jour.' },
          { label: 'c', task: 'Kan jeg faa vinkartet?', solution: 'Est-ce que je peux avoir la carte des vins ?' },
        ],
        solution: 'a) Qu\'est-ce que vous recommandez ? b) Je voudrais le plat du jour. c) Est-ce que je peux avoir la carte des vins ?',
        hints: ['recommander = anbefale', 'le plat du jour = dagens rett'],
      },
    },
    {
      id: 'fransk-2-4-3-text-2',
      type: 'text',
      content: `## Vin og ost

Frankrike er verdens mest kjente vinland og har over 400 ostesorter!

**Vinregioner:**

| Region | Vintype |
|--------|---------|
| Bordeaux | Roedvin (cabernet, merlot) |
| Bourgogne | Roedvin og hvitvin (pinot noir, chardonnay) |
| Champagne | Champagne (musserende vin) |
| Alsace | Hvitvin (riesling) |
| Loire | Rosévin og hvitvin |

**Kjente ostetyper:**

| Ost | Type |
|-----|------|
| le camembert | bloetost |
| le brie | bloetost |
| le roquefort | blaamuggost |
| le comte | hardost |
| le chevre | geiteost |`,
    },
    {
      id: 'fransk-2-4-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Snakke om mat',
      problem: `Si paa fransk:

a) Frankrike er kjent for sin vin og ost.
b) Jeg foretrekker roedvin.
c) Denne osten er deilig!`,
      solution: `**Loesning:**

a) **La France est connue pour son vin et son fromage.**

b) **Je prefere le vin rouge.**

c) **Ce fromage est delicieux !**`,
    },
    {
      id: 'fransk-2-4-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Champagne kommer fra Champagne-regionen.', solution: 'Le champagne vient de la region Champagne.' },
          { label: 'b', task: 'Vil du (uformelt) proeve denne osten?', solution: 'Tu veux gouter ce fromage ?' },
          { label: 'c', task: 'Denne retten er en spesialitet fra Provence.', solution: 'Ce plat est une specialite de Provence.' },
        ],
        solution: 'a) Le champagne vient de la region Champagne. b) Tu veux gouter ce fromage ? c) Ce plat est une specialite de Provence.',
        hints: ['venir de = komme fra', 'gouter = smake paa / proeve'],
      },
    },
    {
      id: 'fransk-2-4-3-text-3',
      type: 'text',
      content: `## Paa restaurant - Nyttige fraser

| Fransk | Norsk |
|--------|-------|
| La carte, s'il vous plait. | Menyen, takk. |
| Je voudrais... | Jeg vil gjerne ha... |
| L'addition, s'il vous plait. | Regningen, takk. |
| C'est delicieux ! | Det er deilig! |
| Je suis allergique a... | Jeg er allergisk mot... |
| Est-ce que c'est epice ? | Er det sterkt? |
| sans gluten | glutenfritt |
| vegetarien / vegetarienne | vegetarianer |`,
    },
    {
      id: 'fransk-2-4-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Dialog paa restaurant',
      problem: `Fullfaer dialogen:

Serveur: Bonjour, vous avez choisi ?
Du: _____
Serveur: Et comme boisson ?
Du: _____`,
      solution: `**Eksempel paa loesning:**

Serveur: Bonjour, vous avez choisi ?
Du: **Oui, je voudrais la salade nicoise comme entree et le boeuf bourguignon comme plat principal.**

Serveur: Et comme boisson ?
Du: **Un verre de vin rouge, s'il vous plait.**`,
    },
    {
      id: 'fransk-2-4-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Regningen, takk.', solution: 'L\'addition, s\'il vous plait.' },
          { label: 'b', task: 'Jeg er allergisk mot noetter.', solution: 'Je suis allergique aux noix.' },
          { label: 'c', task: 'Det var veldig godt!', solution: 'C\'etait tres bon ! / C\'etait delicieux !' },
        ],
        solution: 'a) L\'addition, s\'il vous plait. b) Je suis allergique aux noix. c) C\'etait tres bon !',
        hints: ['l\'addition = regningen', 'allergique a = allergisk mot'],
      },
    },
    {
      id: 'fransk-2-4-3-note-1',
      type: 'note',
      content: `**Visste du?**

- Fransk gastronomi ble oppfoert paa UNESCOs immaterielle verdensarvliste i 2010
- Frankrike produserer over 1200 forskjellige ostesorter
- "Le Guide Michelin" er verdens mest prestisjefylte restaurantguide
- I Frankrike drikker man vanligvis ikke kaffe under maaltidet, men etter desserten`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 4.4 Les regions de France - Frankrikes regioner
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_4_4: TextbookChapter = {
  id: 'fransk-2-4-4',
  courseId: 'fransk-2',
  chapterNumber: '4.4',
  title: 'Les regions de France',
  subtitle: 'Frankrikes regioner',
  description: 'Laer om Frankrikes geografi, regional identitet, oversjoeiske territorier og spraak.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive Frankrikes geografi og regioner',
    'kjenne til oversjoeiske territorier og regional identitet',
  ],
  content: [
    {
      id: 'fransk-2-4-4-intro',
      type: 'text',
      content: `## Frankrikes geografi

Frankrike kalles "l'Hexagone" paa grunn av sin sekskantede form.

**Geografiske trekk:**

| Fransk | Norsk |
|--------|-------|
| la montagne | fjellet |
| la mer | havet |
| le fleuve | elva (stor, renner ut i havet) |
| la riviere | elva (mindre) |
| la cote | kysten |
| la plaine | sletta |
| la foret | skogen |
| l'ile (f.) | oey |

**Store elver:** la Seine, la Loire, le Rhone, la Garonne
**Fjellkjeder:** les Alpes, les Pyrenees, le Massif central, les Vosges`,
    },
    {
      id: 'fransk-2-4-4-text-1',
      type: 'text',
      content: `## Regional identitet

Frankrike har sterke regionale identiteter:

| Region | Saerpreg |
|--------|----------|
| Bretagne | Keltisk arv, eget spraak (breton), sjoemat |
| Alsace | Tysk innflytelse, bindingsverk, choucroute |
| Pays Basque | Baskisk kultur, eget spraak (euskara) |
| Provence | Middelhavskultur, lavendel, pastis |
| Corse (Korsika) | Italiensk innflytelse, eget spraak, Napoleon |

**Regionale spraak i Frankrike:**
- le breton (bretonsk)
- l'alsacien (elsassisk)
- le basque (baskisk)
- l'occitan (oksitansk)
- le corse (korsikansk)
- le catalan (katalansk)`,
    },
    {
      id: 'fransk-2-4-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Geografi',
      problem: `Si paa fransk:

a) Alpene ligger i soeroest.
b) Seine renner gjennom Paris.
c) Frankrike har en lang kyst.`,
      solution: `**Loesning:**

a) **Les Alpes se trouvent au sud-est.**

b) **La Seine traverse Paris.**

c) **La France a une longue cote.**`,
    },
    {
      id: 'fransk-2-4-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Frankrike kalles Heksagonet.', solution: 'La France s\'appelle l\'Hexagone.' },
          { label: 'b', task: 'Pyreneene skiller Frankrike fra Spania.', solution: 'Les Pyrenees separent la France de l\'Espagne.' },
          { label: 'c', task: 'Loire er den lengste elva i Frankrike.', solution: 'La Loire est le plus long fleuve de France.' },
        ],
        solution: 'a) La France s\'appelle l\'Hexagone. b) Les Pyrenees separent la France de l\'Espagne. c) La Loire est le plus long fleuve de France.',
        hints: ['separer = skille', 'le plus long = den lengste'],
      },
    },
    {
      id: 'fransk-2-4-4-text-2',
      type: 'text',
      content: `## Oversjoeiske territorier (DOM-TOM)

Frankrike har ogsaa territorier utenfor Europa:

| Territorium | Beliggenhet | Status |
|-------------|-------------|--------|
| La Guadeloupe | Karibia | DOM (departement) |
| La Martinique | Karibia | DOM |
| La Guyane francaise | Soer-Amerika | DOM |
| La Reunion | Det indiske hav | DOM |
| Mayotte | Det indiske hav | DOM |
| La Nouvelle-Caledonie | Stillehavet | TOM (territorium) |
| La Polynesie francaise | Stillehavet | TOM |

**DOM** = Departement d'Outre-Mer (oversjoeisk departement)
**TOM** = Territoire d'Outre-Mer (oversjoeisk territorium)`,
    },
    {
      id: 'fransk-2-4-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Oversjoeiske territorier',
      problem: `Si paa fransk:

a) Guadeloupe ligger i Karibia.
b) Reunion er en fransk oey i Det indiske hav.
c) Fransk Guyana er i Soer-Amerika.`,
      solution: `**Loesning:**

a) **La Guadeloupe se trouve dans les Caraibes.**

b) **La Reunion est une ile francaise dans l'ocean Indien.**

c) **La Guyane francaise est en Amerique du Sud.**`,
    },
    {
      id: 'fransk-2-4-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Svar paa fransk:',
        subTasks: [
          { label: 'a', task: 'Hvor ligger Martinique?', solution: 'La Martinique se trouve dans les Caraibes.' },
          { label: 'b', task: 'Hva betyr DOM?', solution: 'DOM signifie Departement d\'Outre-Mer.' },
          { label: 'c', task: 'Nevn et fransk territorium i Stillehavet.', solution: 'La Nouvelle-Caledonie / La Polynesie francaise.' },
        ],
        solution: 'a) La Martinique se trouve dans les Caraibes. b) DOM signifie Departement d\'Outre-Mer. c) La Nouvelle-Caledonie / La Polynesie francaise.',
        hints: ['se trouver = befinne seg', 'signifier = bety'],
      },
    },
    {
      id: 'fransk-2-4-4-text-3',
      type: 'text',
      content: `## Retningsord og beliggenhet

| Fransk | Norsk |
|--------|-------|
| au nord (de) | i nord (for) |
| au sud (de) | i soer (for) |
| a l'est (de) | i oest (for) |
| a l'ouest (de) | i vest (for) |
| au centre (de) | i midten (av) |
| au bord de la mer | ved kysten |
| a la campagne | paa landsbygda |
| en ville | i byen |
| pres de | naer / i naerheten av |
| loin de | langt fra |`,
    },
    {
      id: 'fransk-2-4-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive beliggenhet',
      problem: `Si paa fransk:

a) Marseille ligger i soer.
b) Strasbourg er i oestfor Paris.
c) Brest er ved kysten i vest.`,
      solution: `**Loesning:**

a) **Marseille se trouve au sud.**

b) **Strasbourg est a l'est de Paris.**

c) **Brest est au bord de la mer, a l'ouest.**`,
    },
    {
      id: 'fransk-2-4-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-4-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Nice ligger i soeroest, ved kysten.', solution: 'Nice se trouve au sud-est, au bord de la mer.' },
          { label: 'b', task: 'Toulouse er i soervest.', solution: 'Toulouse est au sud-ouest.' },
          { label: 'c', task: 'Paris ligger i midten av Nord-Frankrike.', solution: 'Paris se trouve au centre du nord de la France.' },
        ],
        solution: 'a) Nice se trouve au sud-est, au bord de la mer. b) Toulouse est au sud-ouest. c) Paris se trouve au centre du nord de la France.',
        hints: ['sud-est = soeroest', 'sud-ouest = soervest'],
      },
    },
    {
      id: 'fransk-2-4-4-tip-1',
      type: 'tip',
      content: `**Huske retningsordene:**

- **au** nord / sud = i nord / soer (hankjoenn)
- **a l'** est / ouest = i oest / vest (med apostof fordi vokal)
- **au** + hankjoenn land: au Portugal, au Japon
- **en** + hunkjoenn land: en France, en Espagne
- **aux** + flertall: aux Etats-Unis`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: HELSE OG KROPP
// ============================================================================

// ----------------------------------------------------------------------------
// 5.1 Le corps humain - Menneskekroppen
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_5_1: TextbookChapter = {
  id: 'fransk-2-5-1',
  courseId: 'fransk-2',
  chapterNumber: '5.1',
  title: 'Le corps humain',
  subtitle: 'Menneskekroppen',
  description: 'Laer kroppsdeler paa fransk og uttrykk som "avoir mal a".',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi kroppsdeler paa fransk',
    'uttrykke smerte med "avoir mal a"',
  ],
  content: [
    {
      id: 'fransk-2-5-1-intro',
      type: 'text',
      content: `## Kroppsdeler paa fransk

Aa kjenne til kroppsdeler er viktig for aa kunne snakke om helse og beskrive personer.

**Hodet og ansiktet:**

| Fransk | Norsk |
|--------|-------|
| la tete | hodet |
| le visage | ansiktet |
| les yeux (m.pl.) / l'oeil | oeynene / oeyet |
| le nez | nesen |
| la bouche | munnen |
| les oreilles (f.pl.) | oerene |
| les cheveux (m.pl.) | haaret |
| le front | pannen |
| le menton | haken |
| les dents (f.pl.) | tennene |`,
    },
    {
      id: 'fransk-2-5-1-text-1',
      type: 'text',
      content: `## Overkroppen og underkroppen

**Overkropp:**

| Fransk | Norsk |
|--------|-------|
| le bras | armen |
| la main | haanden |
| les doigts (m.pl.) | fingrene |
| l'epaule (f.) | skulderen |
| le dos | ryggen |
| la poitrine | brystet |
| le ventre | magen |
| le coeur | hjertet |

**Underkropp:**

| Fransk | Norsk |
|--------|-------|
| la jambe | beinet |
| le genou | kneet |
| le pied | foten |
| les orteils (m.pl.) | taerne |
| la cheville | ankelen |
| la hanche | hofta |`,
    },
    {
      id: 'fransk-2-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Kroppsdeler',
      problem: `Si paa fransk:

a) hodet
b) armen
c) foten`,
      solution: `**Loesning:**

a) **la tete**

b) **le bras**

c) **le pied**`,
    },
    {
      id: 'fransk-2-5-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv paa fransk med artikkel:',
        subTasks: [
          { label: 'a', task: 'haanden', solution: 'la main' },
          { label: 'b', task: 'kneet', solution: 'le genou' },
          { label: 'c', task: 'ryggen', solution: 'le dos' },
          { label: 'd', task: 'munnen', solution: 'la bouche' },
        ],
        solution: 'a) la main, b) le genou, c) le dos, d) la bouche',
        hints: ['Husk riktig artikkel (le/la)', 'Kroppsdeler med le = hankjoenn, la = hunkjoenn'],
      },
    },
    {
      id: 'fransk-2-5-1-text-2',
      type: 'text',
      content: `## "Avoir mal a" - Ha vondt i

For aa si at noe gjoer vondt, bruker vi **avoir mal a + bestemt artikkel + kroppsdel**:

| Fransk | Norsk |
|--------|-------|
| J'ai mal a la tete. | Jeg har vondt i hodet. |
| J'ai mal au ventre. | Jeg har vondt i magen. |
| J'ai mal aux dents. | Jeg har vondt i tennene. |
| J'ai mal au dos. | Jeg har vondt i ryggen. |
| J'ai mal a la gorge. | Jeg har vondt i halsen. |

**Sammentrekning:**
- a + le = **au** (J'ai mal **au** bras)
- a + la = **a la** (J'ai mal **a la** jambe)
- a + les = **aux** (J'ai mal **aux** yeux)
- a + l' = **a l'** (J'ai mal **a l'**epaule)`,
    },
    {
      id: 'fransk-2-5-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Avoir mal a',
      problem: `Si paa fransk:

a) Jeg har vondt i hodet.
b) Han har vondt i ryggen.
c) Vi har vondt i foettene.`,
      solution: `**Loesning:**

a) **J'ai mal a la tete.**

b) **Il a mal au dos.**

c) **Nous avons mal aux pieds.**`,
    },
    {
      id: 'fransk-2-5-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med "avoir mal a":',
        subTasks: [
          { label: 'a', task: 'Jeg har vondt i magen.', solution: 'J\'ai mal au ventre.' },
          { label: 'b', task: 'Hun har vondt i halsen.', solution: 'Elle a mal a la gorge.' },
          { label: 'c', task: 'De har vondt i oeynene.', solution: 'Ils ont mal aux yeux.' },
        ],
        solution: 'a) J\'ai mal au ventre. b) Elle a mal a la gorge. c) Ils ont mal aux yeux.',
        hints: ['au = a + le', 'a la = hunkjoenn', 'aux = a + les (flertall)'],
      },
    },
    {
      id: 'fransk-2-5-1-text-3',
      type: 'text',
      content: `## Beskrive personer

| Fransk | Norsk |
|--------|-------|
| Il/Elle a les yeux bleus. | Han/Hun har blaa oeyne. |
| Il/Elle a les cheveux blonds. | Han/Hun har blondt haar. |
| Il/Elle est grand(e). | Han/Hun er hoey. |
| Il/Elle est petit(e). | Han/Hun er liten. |
| Il/Elle est mince. | Han/Hun er slank. |

**Haarfarger:** blonds (blondt), bruns (brunt), noirs (svart), roux (roedt), gris (graat)
**Oeyenfarger:** bleus (blaa), verts (groenne), marron (brune), noisette (noettebrune)`,
    },
    {
      id: 'fransk-2-5-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive en person',
      problem: `Beskriv paa fransk:

a) Han er hoey og har brunt haar.
b) Hun har groenne oeyne.
c) Broren min er liten.`,
      solution: `**Loesning:**

a) **Il est grand et il a les cheveux bruns.**

b) **Elle a les yeux verts.**

c) **Mon frere est petit.**`,
    },
    {
      id: 'fransk-2-5-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hun er hoey og slank.', solution: 'Elle est grande et mince.' },
          { label: 'b', task: 'Han har blondt haar og blaa oeyne.', solution: 'Il a les cheveux blonds et les yeux bleus.' },
          { label: 'c', task: 'Soesteren min har roedt haar.', solution: 'Ma soeur a les cheveux roux.' },
        ],
        solution: 'a) Elle est grande et mince. b) Il a les cheveux blonds et les yeux bleus. c) Ma soeur a les cheveux roux.',
        hints: ['grand/grande = hoey (husk samsvar)', 'roux = roedt (haar)'],
      },
    },
    {
      id: 'fransk-2-5-1-tip-1',
      type: 'tip',
      content: `**Husk sammentrekningen med "a":**

- **a + le = au** → J'ai mal **au** bras
- **a + la = a la** → J'ai mal **a la** tete
- **a + l' = a l'** → J'ai mal **a l'**oreille
- **a + les = aux** → J'ai mal **aux** pieds

Dette gjelder alle uttrykk med "a", ikke bare "avoir mal a".`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.2 Chez le medecin - Hos legen
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_5_2: TextbookChapter = {
  id: 'fransk-2-5-2',
  courseId: 'fransk-2',
  chapterNumber: '5.2',
  title: 'Chez le medecin',
  subtitle: 'Hos legen',
  description: 'Laer medisinsk vokabular, symptomer og aa forklare problemer hos legen.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forklare symptomer og plager paa fransk',
    'foerstaa legen og faa resept',
  ],
  content: [
    {
      id: 'fransk-2-5-2-intro',
      type: 'text',
      content: `## Hos legen

Naar du er syk i Frankrike, maa du kunne forklare hva som er galt.

**Grunnleggende uttrykk:**

| Fransk | Norsk |
|--------|-------|
| Je suis malade. | Jeg er syk. |
| Je ne me sens pas bien. | Jeg foeler meg ikke bra. |
| J'ai mal a... | Jeg har vondt i... |
| J'ai de la fievre. | Jeg har feber. |
| Je tousse. | Jeg hoster. |
| J'ai le nez qui coule. | Jeg har rennende nese. |
| J'ai mal au coeur. | Jeg er kvalm. |
| Je suis fatigue(e). | Jeg er sliten. |`,
    },
    {
      id: 'fransk-2-5-2-text-1',
      type: 'text',
      content: `## Symptomer og sykdommer

| Fransk | Norsk |
|--------|-------|
| un rhume | forksjoelelse |
| la grippe | influensa |
| une angine | halsbetennelse |
| une otite | oerebetennelse |
| une allergie | allergi |
| une infection | infeksjon |
| la toux | hoste |
| la nausee | kvalme |
| les vertiges (m.pl.) | svimmelhet |
| une blessure | en skade |
| se casser (le bras) | aa brekke (armen) |
| se fouler (la cheville) | aa forstue (ankelen) |`,
    },
    {
      id: 'fransk-2-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Forklare symptomer',
      problem: `Si paa fransk:

a) Jeg er syk. Jeg har feber og hoster.
b) Jeg har vondt i halsen.
c) Jeg tror jeg har influensa.`,
      solution: `**Loesning:**

a) **Je suis malade. J'ai de la fievre et je tousse.**

b) **J'ai mal a la gorge.**

c) **Je crois que j'ai la grippe.**`,
    },
    {
      id: 'fransk-2-5-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg foeler meg ikke bra.', solution: 'Je ne me sens pas bien.' },
          { label: 'b', task: 'Jeg har rennende nese og hoster.', solution: 'J\'ai le nez qui coule et je tousse.' },
          { label: 'c', task: 'Jeg er svimmel og kvalm.', solution: 'J\'ai des vertiges et la nausee.' },
        ],
        solution: 'a) Je ne me sens pas bien. b) J\'ai le nez qui coule et je tousse. c) J\'ai des vertiges et la nausee.',
        hints: ['se sentir = foele seg', 'tousser = hoste'],
      },
    },
    {
      id: 'fransk-2-5-2-text-2',
      type: 'text',
      content: `## Legen sier

| Fransk | Norsk |
|--------|-------|
| Qu'est-ce qui ne va pas ? | Hva er galt? |
| Ou avez-vous mal ? | Hvor har De vondt? |
| Depuis quand ? | Siden naar? |
| Ouvrez la bouche. | Aapne munnen. |
| Respirez profondement. | Pust dypt. |
| Je vais vous examiner. | Jeg skal undersoeke Dem. |
| Je vous prescris... | Jeg skriver ut... |
| Prenez ce medicament. | Ta denne medisinen. |

**Resept og apotek:**

| Fransk | Norsk |
|--------|-------|
| une ordonnance | en resept |
| la pharmacie | apoteket |
| le medicament | medisinen |
| un comprime | en tablett |
| le sirop | hostesaft |`,
    },
    {
      id: 'fransk-2-5-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Dialog hos legen',
      problem: `Fullfaer dialogen:

Medecin: Qu'est-ce qui ne va pas ?
Du: _____
Medecin: Depuis quand ?
Du: _____`,
      solution: `**Eksempel paa loesning:**

Medecin: Qu'est-ce qui ne va pas ?
Du: **J'ai mal a la gorge et j'ai de la fievre.**

Medecin: Depuis quand ?
Du: **Depuis trois jours.**`,
    },
    {
      id: 'fransk-2-5-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Hvor har De vondt?', solution: 'Ou avez-vous mal ?' },
          { label: 'b', task: 'Jeg skriver ut en medisin til Dem.', solution: 'Je vous prescris un medicament.' },
          { label: 'c', task: 'Ta en tablett tre ganger daglig.', solution: 'Prenez un comprime trois fois par jour.' },
        ],
        solution: 'a) Ou avez-vous mal ? b) Je vous prescris un medicament. c) Prenez un comprime trois fois par jour.',
        hints: ['prescrire = skrive ut (resept)', 'fois par jour = ganger daglig'],
      },
    },
    {
      id: 'fransk-2-5-2-text-3',
      type: 'text',
      content: `## Paa apoteket

| Fransk | Norsk |
|--------|-------|
| la pharmacie | apoteket |
| le/la pharmacien(ne) | apotekeren |
| J'ai une ordonnance. | Jeg har en resept. |
| Avez-vous quelque chose contre... ? | Har dere noe mot... ? |
| ... le mal de tete | ... hodepine |
| ... le rhume | ... forksjoelelse |
| ... les allergies | ... allergier |
| un pansement | et plaster |
| de la creme solaire | solkrem |`,
    },
    {
      id: 'fransk-2-5-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Paa apoteket',
      problem: `Si paa fransk:

a) Har dere noe mot hodepine?
b) Jeg har en resept fra legen.
c) Jeg trenger solkrem.`,
      solution: `**Loesning:**

a) **Avez-vous quelque chose contre le mal de tete ?**

b) **J'ai une ordonnance du medecin.**

c) **J'ai besoin de creme solaire.**`,
    },
    {
      id: 'fransk-2-5-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Har dere noe mot forksjoelelse?', solution: 'Avez-vous quelque chose contre le rhume ?' },
          { label: 'b', task: 'Jeg trenger et plaster.', solution: 'J\'ai besoin d\'un pansement.' },
          { label: 'c', task: 'Hvor er naermeste apotek?', solution: 'Ou est la pharmacie la plus proche ?' },
        ],
        solution: 'a) Avez-vous quelque chose contre le rhume ? b) J\'ai besoin d\'un pansement. c) Ou est la pharmacie la plus proche ?',
        hints: ['avoir besoin de = trenge', 'la plus proche = den naermeste'],
      },
    },
    {
      id: 'fransk-2-5-2-note-1',
      type: 'note',
      content: `**Kulturell info:**

- I Frankrike er apoteket merket med et groent kors (la croix verte)
- Apotekerne gir ofte raad og kan anbefale medisiner uten resept
- "La carte vitale" er det franske helsekortet som gir tilgang til helsevesenet
- Man maa vanligvis gaa til en allmennlege ("medecin generaliste") foerst for aa faa henvisning`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.3 La sante et le bien-etre - Helse og velvaere
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_5_3: TextbookChapter = {
  id: 'fransk-2-5-3',
  courseId: 'fransk-2',
  chapterNumber: '5.3',
  title: 'La sante et le bien-etre',
  subtitle: 'Helse og velvaere',
  description: 'Laer om sunn livsstil, ernaeringsraad og vokabular for psykisk helse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'snakke om sunne vaner paa fransk',
    'kjenne til vokabular for psykisk helse og velvaere',
  ],
  content: [
    {
      id: 'fransk-2-5-3-intro',
      type: 'text',
      content: `## Sunn livsstil

For aa leve sunt er det viktig med gode vaner:

**Gode vaner:**

| Fransk | Norsk |
|--------|-------|
| manger equilibre | spise balansert |
| faire de l'exercice | trene / mosjonere |
| dormir suffisamment | sove nok |
| boire de l'eau | drikke vann |
| eviter le stress | unngaa stress |
| se detendre | slappe av |
| se coucher tot | legge seg tidlig |
| manger des fruits et legumes | spise frukt og groennsaker |`,
    },
    {
      id: 'fransk-2-5-3-text-1',
      type: 'text',
      content: `## Ernaering og kosthold

| Fransk | Norsk |
|--------|-------|
| les proteines (f.pl.) | proteiner |
| les glucides (m.pl.) | karbohydrater |
| les lipides (m.pl.) | fett |
| les vitamines (f.pl.) | vitaminer |
| les fibres (f.pl.) | fiber |
| le sucre | sukker |
| le sel | salt |
| les produits laitiers | meieriprodukter |
| les cereales (f.pl.) | kornprodukter |
| un regime | en diett / et kosthold |

**Raad for sunt kosthold:**

| Fransk | Norsk |
|--------|-------|
| Il faut manger equilibre. | Man maa spise balansert. |
| Il faut boire beaucoup d'eau. | Man maa drikke mye vann. |
| Il ne faut pas manger trop de sucre. | Man maa ikke spise for mye sukker. |
| Il vaut mieux eviter les plats trop gras. | Det er bedre aa unngaa for fete retter. |`,
    },
    {
      id: 'fransk-2-5-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Sunne vaner',
      problem: `Si paa fransk:

a) Man maa spise frukt og groennsaker.
b) Det er viktig aa drikke nok vann.
c) Jeg proever aa spise balansert.`,
      solution: `**Loesning:**

a) **Il faut manger des fruits et des legumes.**

b) **Il est important de boire assez d'eau.**

c) **J'essaie de manger equilibre.**`,
    },
    {
      id: 'fransk-2-5-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Man boer sove minst aatte timer.', solution: 'Il faut dormir au moins huit heures.' },
          { label: 'b', task: 'Det er viktig aa trene regelmessig.', solution: 'Il est important de faire de l\'exercice regulierement.' },
          { label: 'c', task: 'Man maa ikke spise for mye salt.', solution: 'Il ne faut pas manger trop de sel.' },
        ],
        solution: 'a) Il faut dormir au moins huit heures. b) Il est important de faire de l\'exercice regulierement. c) Il ne faut pas manger trop de sel.',
        hints: ['il faut = man maa', 'au moins = minst'],
      },
    },
    {
      id: 'fransk-2-5-3-text-2',
      type: 'text',
      content: `## Psykisk helse

| Fransk | Norsk |
|--------|-------|
| la sante mentale | psykisk helse |
| le bien-etre | velvaere |
| le stress | stress |
| l'anxiete (f.) | angst |
| la depression | depresjon |
| se sentir bien / mal | foele seg bra / daarlig |
| etre de bonne / mauvaise humeur | vaere i godt / daarlig humoer |
| se relaxer | slappe av |
| mediter | meditere |
| parler de ses problemes | snakke om problemene sine |

**Nyttige uttrykk:**

| Fransk | Norsk |
|--------|-------|
| Je me sens stresse(e). | Jeg foeler meg stressa. |
| Je suis anxieux/anxieuse. | Jeg er engstelig. |
| Ca va mieux. | Det gaar bedre. |
| J'ai besoin de me reposer. | Jeg trenger aa hvile. |`,
    },
    {
      id: 'fransk-2-5-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Foelelser og velvaere',
      problem: `Si paa fransk:

a) Jeg foeler meg stressa.
b) Det er viktig aa slappe av.
c) Snakk om problemene dine.`,
      solution: `**Loesning:**

a) **Je me sens stresse(e).**

b) **Il est important de se detendre.**

c) **Parle de tes problemes.** (uformelt) / **Parlez de vos problemes.** (formelt)`,
    },
    {
      id: 'fransk-2-5-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg trenger aa hvile.', solution: 'J\'ai besoin de me reposer.' },
          { label: 'b', task: 'Det gaar bedre naa.', solution: 'Ca va mieux maintenant.' },
          { label: 'c', task: 'Psykisk helse er viktig.', solution: 'La sante mentale est importante.' },
        ],
        solution: 'a) J\'ai besoin de me reposer. b) Ca va mieux maintenant. c) La sante mentale est importante.',
        hints: ['avoir besoin de = trenge', 'mieux = bedre'],
      },
    },
    {
      id: 'fransk-2-5-3-text-3',
      type: 'text',
      content: `## Gi helseraad

For aa gi raad bruker vi:
- **Il faut** + infinitiv (man maa)
- **Il ne faut pas** + infinitiv (man maa ikke)
- **Il est important de** + infinitiv (det er viktig aa)
- **Il vaut mieux** + infinitiv (det er bedre aa)
- **Je te/vous conseille de** + infinitiv (jeg raader deg/Dem til aa)

**Eksempler:**
- Il faut faire du sport. (Man maa drive sport.)
- Il ne faut pas fumer. (Man maa ikke roeyke.)
- Il est important de dormir assez. (Det er viktig aa sove nok.)`,
    },
    {
      id: 'fransk-2-5-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Gi raad',
      problem: `Gi raad paa fransk:

a) Man maa trene regelmessig.
b) Det er viktig aa spise sunt.
c) Jeg raader deg til aa sove mer.`,
      solution: `**Loesning:**

a) **Il faut faire de l'exercice regulierement.**

b) **Il est important de manger sainement.**

c) **Je te conseille de dormir plus.**`,
    },
    {
      id: 'fransk-2-5-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi raad paa fransk:',
        subTasks: [
          { label: 'a', task: 'Det er bedre aa legge seg tidlig.', solution: 'Il vaut mieux se coucher tot.' },
          { label: 'b', task: 'Man maa ikke stresse for mye.', solution: 'Il ne faut pas trop stresser.' },
          { label: 'c', task: 'Jeg raader deg til aa snakke med noen.', solution: 'Je te conseille de parler a quelqu\'un.' },
        ],
        solution: 'a) Il vaut mieux se coucher tot. b) Il ne faut pas trop stresser. c) Je te conseille de parler a quelqu\'un.',
        hints: ['il vaut mieux = det er bedre aa', 'conseiller de = raade til aa'],
      },
    },
    {
      id: 'fransk-2-5-3-tip-1',
      type: 'tip',
      content: `**Tips for aa snakke om helse:**

1. Bruk "il faut" for generelle raad (man maa/boer)
2. Bruk "je te/vous conseille de" for personlige raad
3. "Se sentir" (foele seg) er et refleksivt verb: je me sens, tu te sens, il se sent
4. Husk: "bien-etre" betyr velvaere og dekker baade fysisk og psykisk helse`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 5.4 Les sports et l'activite physique - Sport og fysisk aktivitet
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_5_4: TextbookChapter = {
  id: 'fransk-2-5-4',
  courseId: 'fransk-2',
  chapterNumber: '5.4',
  title: 'Les sports et l\'activite physique',
  subtitle: 'Sport og fysisk aktivitet',
  description: 'Laer sportsvokabular og uttrykkene "faire du/de la/des" og "jouer a".',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi sporter og fysiske aktiviteter paa fransk',
    'bruke "faire de" og "jouer a" riktig',
  ],
  content: [
    {
      id: 'fransk-2-5-4-intro',
      type: 'text',
      content: `## Sport paa fransk

Det finnes to hoveduttrykk for aa snakke om sport:

**1. Faire de + sport** (drive med / holde paa med):
- Je fais **du** football. (hankjoenn)
- Je fais **de la** natation. (hunkjoenn)
- Je fais **de l'**escalade. (vokal)
- Je fais **des** arts martiaux. (flertall)

**2. Jouer a + sport** (spille - brukes for ballsporter og spill):
- Je joue **au** football. (hankjoenn)
- Je joue **a la** petanque. (hunkjoenn)
- Je joue **aux** cartes. (flertall)`,
    },
    {
      id: 'fransk-2-5-4-text-1',
      type: 'text',
      content: `## Sporter

**Med "faire de":**

| Fransk | Norsk |
|--------|-------|
| faire du velo | sykle |
| faire de la natation | svoemme |
| faire du ski | gaa paa ski |
| faire de l'escalade | klatre |
| faire de la randonnee | vandre / gaa tur |
| faire de la gymnastique | drive gymnastikk |
| faire du yoga | drive yoga |
| faire de la musculation | trene styrke |
| faire du jogging | jogge |
| faire de l'equitation | ri |

**Med "jouer a":**

| Fransk | Norsk |
|--------|-------|
| jouer au football | spille fotball |
| jouer au tennis | spille tennis |
| jouer au basket | spille basketball |
| jouer au handball | spille haandball |
| jouer au volleyball | spille volleyball |
| jouer au rugby | spille rugby |`,
    },
    {
      id: 'fransk-2-5-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Faire de vs. Jouer a',
      problem: `Si paa fransk:

a) Jeg spiller fotball.
b) Jeg svoemmer.
c) Jeg gaar paa ski.`,
      solution: `**Loesning:**

a) **Je joue au football.** / **Je fais du football.**

b) **Je fais de la natation.**

c) **Je fais du ski.**`,
    },
    {
      id: 'fransk-2-5-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk (bruk "faire de" eller "jouer a"):',
        subTasks: [
          { label: 'a', task: 'Jeg sykler.', solution: 'Je fais du velo.' },
          { label: 'b', task: 'Han spiller tennis.', solution: 'Il joue au tennis.' },
          { label: 'c', task: 'Vi driver med klatring.', solution: 'Nous faisons de l\'escalade.' },
          { label: 'd', task: 'Hun jogger.', solution: 'Elle fait du jogging.' },
        ],
        solution: 'a) Je fais du velo. b) Il joue au tennis. c) Nous faisons de l\'escalade. d) Elle fait du jogging.',
        hints: ['faire: je fais, tu fais, il fait, nous faisons', 'Ballsporter kan bruke jouer a'],
      },
    },
    {
      id: 'fransk-2-5-4-text-2',
      type: 'text',
      content: `## Snakke om sport

| Fransk | Norsk |
|--------|-------|
| Quel sport fais-tu ? | Hvilken sport driver du med? |
| Je fais du... depuis 3 ans. | Jeg har drevet med... i 3 aar. |
| Je m'entraine... fois par semaine. | Jeg trener... ganger i uka. |
| un match | en kamp |
| une equipe | et lag |
| un joueur / une joueuse | en spiller |
| un entraineur | en trener |
| gagner | vinne |
| perdre | tape |
| un championnat | et mesterskap |
| les Jeux olympiques | De olympiske leker |`,
    },
    {
      id: 'fransk-2-5-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Snakke om treningsvaner',
      problem: `Si paa fransk:

a) Jeg trener tre ganger i uka.
b) Hvilken sport driver du med?
c) Jeg har spilt fotball i fem aar.`,
      solution: `**Loesning:**

a) **Je m'entraine trois fois par semaine.**

b) **Quel sport fais-tu ?** / **Tu fais quel sport ?**

c) **Je joue au football depuis cinq ans.**`,
    },
    {
      id: 'fransk-2-5-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Laget mitt vant kampen.', solution: 'Mon equipe a gagne le match.' },
          { label: 'b', task: 'Hun trener fem ganger i uka.', solution: 'Elle s\'entraine cinq fois par semaine.' },
          { label: 'c', task: 'Jeg har drevet med svoemming i to aar.', solution: 'Je fais de la natation depuis deux ans.' },
        ],
        solution: 'a) Mon equipe a gagne le match. b) Elle s\'entraine cinq fois par semaine. c) Je fais de la natation depuis deux ans.',
        hints: ['gagner = vinne', 'depuis = siden / i (varighet)'],
      },
    },
    {
      id: 'fransk-2-5-4-text-3',
      type: 'text',
      content: `## Sport og fysisk aktivitet i Frankrike

Populaere sporter i Frankrike:

| Sport | Popularitet |
|-------|-------------|
| Le football | Nasjonalsport, "Les Bleus" |
| Le rugby | Spesielt populaert i soervest |
| Le cyclisme | Tour de France |
| Le tennis | Roland-Garros |
| Le ski | Populaert i Alpene og Pyreneene |
| La petanque | Tradisjonell sport, spesielt i soer |
| Le handball | Frankrike er blant verdens beste |

**Kjente idrettsarrangementer:**
- Tour de France (sykkel)
- Roland-Garros (tennis, ogsaa kalt French Open)
- Le Championnat de France (Ligue 1 - fotball)`,
    },
    {
      id: 'fransk-2-5-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Fransk sportskultur',
      problem: `Si paa fransk:

a) Fotball er den mest populaere sporten i Frankrike.
b) Tour de France er et beroeemt sykkelritt.
c) Jeg liker aa se paa tennis.`,
      solution: `**Loesning:**

a) **Le football est le sport le plus populaire en France.**

b) **Le Tour de France est une course cycliste celebre.**

c) **J'aime regarder le tennis.**`,
    },
    {
      id: 'fransk-2-5-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Petanque er en tradisjonell fransk sport.', solution: 'La petanque est un sport traditionnel francais.' },
          { label: 'b', task: 'Det franske fotballandslaget heter Les Bleus.', solution: 'L\'equipe de France de football s\'appelle Les Bleus.' },
          { label: 'c', task: 'Jeg foretrekker aa drive med sport enn aa se paa TV.', solution: 'Je prefere faire du sport plutot que regarder la tele.' },
        ],
        solution: 'a) La petanque est un sport traditionnel francais. b) L\'equipe de France de football s\'appelle Les Bleus. c) Je prefere faire du sport plutot que regarder la tele.',
        hints: ['traditionnel = tradisjonell', 'plutot que = heller enn'],
      },
    },
    {
      id: 'fransk-2-5-4-tip-1',
      type: 'tip',
      content: `**Huskeregel: Faire de vs. Jouer a:**

- **Faire de** brukes for alle sporter og aktiviteter
- **Jouer a** brukes KUN for ballsporter og spill
- Begge kan brukes for ballsporter: je fais du foot = je joue au foot
- For individuelle sporter: BARE "faire de" (faire du ski, faire de la natation)
- "Faire de" krever sammentrekning: du (= de + le), de la, de l', des
- "Jouer a" krever sammentrekning: au (= a + le), a la, a l', aux`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: SUBJONCTIF
// ============================================================================

// ----------------------------------------------------------------------------
// 6.1 Formation du subjonctif - Dannelse av subjonctif
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_6_1: TextbookChapter = {
  id: 'fransk-2-6-1',
  courseId: 'fransk-2',
  chapterNumber: '6.1',
  title: 'Formation du subjonctif',
  subtitle: 'Dannelse av subjonctif',
  description: 'Laer aa danne subjonctif av regelrette og uregelrette verb.',
  estimatedMinutes: 50,
  competenceGoals: [
    'danne subjonctif av regelrette verb',
    'kjenne til uregelmessige subjonctif-former',
  ],
  content: [
    {
      id: 'fransk-2-6-1-intro',
      type: 'text',
      content: `## Hva er subjonctif?

Subjonctif er en verbmodus som uttrykker oenske, foelelse, tvil, noedvendighet eller subjektiv vurdering. Den brukes etter visse uttrykk og konjunksjoner.

**Eksempel:**
- Indicatif: Il **vient**. (Han kommer.) - konstaterer et faktum
- Subjonctif: Il faut qu'il **vienne**. (Han maa komme.) - uttrykker noedvendighet

Subjonctif innledes nesten alltid av **que/qu'**.`,
    },
    {
      id: 'fransk-2-6-1-text-1',
      type: 'text',
      content: `## Dannelse av regelrett subjonctif

**Oppskrift:**
1. Ta "ils/elles"-formen i presens indikativ
2. Fjern endelsen **-ent**
3. Legg til subjonctif-endelsene:

| Person | Endelse | Eksempel (parler → ils parl**ent**) |
|--------|---------|--------------------------------------|
| que je | -e | que je parl**e** |
| que tu | -es | que tu parl**es** |
| qu'il/elle | -e | qu'il parl**e** |
| que nous | -ions | que nous parl**ions** |
| que vous | -iez | que vous parl**iez** |
| qu'ils/elles | -ent | qu'ils parl**ent** |

**Merk:** For "nous" og "vous" brukes stammen fra "nous"-formen i indikativ.`,
    },
    {
      id: 'fransk-2-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Regelrett subjonctif',
      problem: `Dann subjonctif av disse verbene:

a) finir (ils finissent → finiss-)
b) vendre (ils vendent → vend-)
c) choisir (ils choisissent → choisiss-)`,
      solution: `**Loesning:**

a) **finir:** que je finiss**e**, que tu finiss**es**, qu'il finiss**e**, que nous finiss**ions**, que vous finiss**iez**, qu'ils finiss**ent**

b) **vendre:** que je vend**e**, que tu vend**es**, qu'il vend**e**, que nous vend**ions**, que vous vend**iez**, qu'ils vend**ent**

c) **choisir:** que je choisiss**e**, que tu choisiss**es**, qu'il choisiss**e**, que nous choisiss**ions**, que vous choisiss**iez**, qu'ils choisiss**ent**`,
    },
    {
      id: 'fransk-2-6-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbet i subjonctif:',
        subTasks: [
          { label: 'a', task: 'que je _____ (parler)', solution: 'que je parle' },
          { label: 'b', task: 'que tu _____ (finir)', solution: 'que tu finisses' },
          { label: 'c', task: 'qu\'il _____ (attendre)', solution: 'qu\'il attende' },
          { label: 'd', task: 'que nous _____ (manger)', solution: 'que nous mangions' },
        ],
        solution: 'a) que je parle, b) que tu finisses, c) qu\'il attende, d) que nous mangions',
        hints: ['Ta ils-formen, fjern -ent, legg til subjonctif-endelse', 'nous og vous: bruk nous-stammen + -ions/-iez'],
      },
    },
    {
      id: 'fransk-2-6-1-text-2',
      type: 'text',
      content: `## Uregelmessige verb i subjonctif

Noen viktige verb har helt egne former i subjonctif:

**Etre (aa vaere):**

| que je sois | que nous soyons |
|-------------|-----------------|
| que tu sois | que vous soyez |
| qu'il soit | qu'ils soient |

**Avoir (aa ha):**

| que j'aie | que nous ayons |
|-----------|----------------|
| que tu aies | que vous ayez |
| qu'il ait | qu'ils aient |

**Aller (aa gaa):**

| que j'aille | que nous allions |
|-------------|------------------|
| que tu ailles | que vous alliez |
| qu'il aille | qu'ils aillent |

**Faire (aa gjoere):**

| que je fasse | que nous fassions |
|-------------|-------------------|
| que tu fasses | que vous fassiez |
| qu'il fasse | qu'ils fassent |`,
    },
    {
      id: 'fransk-2-6-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Uregelmessig subjonctif',
      problem: `Sett inn riktig subjonctif-form:

a) Il faut que tu _____ (etre) a l'heure.
b) Il faut que nous _____ (avoir) patience.
c) Il faut qu'elle _____ (aller) chez le medecin.`,
      solution: `**Loesning:**

a) Il faut que tu **sois** a l'heure. (Du maa vaere presis.)

b) Il faut que nous **ayons** patience. (Vi maa ha taalmodighet.)

c) Il faut qu'elle **aille** chez le medecin. (Hun maa gaa til legen.)`,
    },
    {
      id: 'fransk-2-6-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn riktig subjonctif-form:',
        subTasks: [
          { label: 'a', task: 'Il faut que je _____ (faire) mes devoirs.', solution: 'fasse' },
          { label: 'b', task: 'Il faut qu\'ils _____ (etre) polis.', solution: 'soient' },
          { label: 'c', task: 'Il faut que vous _____ (avoir) confiance.', solution: 'ayez' },
        ],
        solution: 'a) fasse, b) soient, c) ayez',
        hints: ['faire → que je fasse', 'etre → qu\'ils soient', 'avoir → que vous ayez'],
      },
    },
    {
      id: 'fransk-2-6-1-text-3',
      type: 'text',
      content: `## Flere uregelmessige verb

**Pouvoir (aa kunne):**

| que je puisse | que nous puissions |
|--------------|-------------------|
| que tu puisses | que vous puissiez |
| qu'il puisse | qu'ils puissent |

**Savoir (aa vite):**

| que je sache | que nous sachions |
|-------------|-------------------|
| que tu saches | que vous sachiez |
| qu'il sache | qu'ils sachent |

**Vouloir (aa ville):**

| que je veuille | que nous voulions |
|---------------|-------------------|
| que tu veuilles | que vous vouliez |
| qu'il veuille | qu'ils veuillent |`,
    },
    {
      id: 'fransk-2-6-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Pouvoir, savoir, vouloir',
      problem: `Sett inn riktig form:

a) Il faut que tu _____ (pouvoir) venir.
b) Il faut que je _____ (savoir) la verite.
c) Il faut qu'il _____ (vouloir) changer.`,
      solution: `**Loesning:**

a) Il faut que tu **puisses** venir. (Du maa kunne komme.)

b) Il faut que je **sache** la verite. (Jeg maa vite sannheten.)

c) Il faut qu'il **veuille** changer. (Han maa ville forandre seg.)`,
    },
    {
      id: 'fransk-2-6-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett inn riktig subjonctif-form:',
        subTasks: [
          { label: 'a', task: 'Il faut que nous _____ (pouvoir) partir tot.', solution: 'puissions' },
          { label: 'b', task: 'Il faut qu\'elle _____ (savoir) la reponse.', solution: 'sache' },
          { label: 'c', task: 'Il faut que vous _____ (vouloir) reussir.', solution: 'vouliez' },
        ],
        solution: 'a) puissions, b) sache, c) vouliez',
        hints: ['pouvoir → que nous puissions', 'savoir → qu\'elle sache', 'vouloir → que vous vouliez'],
      },
    },
    {
      id: 'fransk-2-6-1-definition-1',
      type: 'definition',
      content: `**Oversikt over uregelmessige subjonctif-former:**

| Infinitiv | que je... | que nous... |
|-----------|-----------|-------------|
| etre | sois | soyons |
| avoir | aie | ayons |
| aller | aille | allions |
| faire | fasse | fassions |
| pouvoir | puisse | puissions |
| savoir | sache | sachions |
| vouloir | veuille | voulions |

**Tips:** Laer disse utenat - de er de mest brukte!`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.2 Le subjonctif de volonte et emotion - Subjonctif med vilje og foelelse
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_6_2: TextbookChapter = {
  id: 'fransk-2-6-2',
  courseId: 'fransk-2',
  chapterNumber: '6.2',
  title: 'Le subjonctif de volonte et emotion',
  subtitle: 'Subjonctif med vilje og foelelse',
  description: 'Laer naar subjonctif brukes etter uttrykk for vilje, oenske og foelelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke subjonctif etter uttrykk for vilje og oenske',
    'bruke subjonctif etter uttrykk for foelelse',
  ],
  content: [
    {
      id: 'fransk-2-6-2-intro',
      type: 'text',
      content: `## Naar bruker vi subjonctif?

Subjonctif brukes i bisetningen (etter "que") naar hovedsetningen uttrykker:

1. **Noedvendighet** (il faut que)
2. **Vilje/oenske** (je veux que, je souhaite que)
3. **Foelelse** (je suis content que, je regrette que)

**Viktig regel:** Det maa vaere **to forskjellige subjekter** i hoved- og bisetningen.

- Je veux **que tu** viennes. (Jeg vil at **du** skal komme.) ✓ subjonctif
- Je veux venir. (Jeg vil komme.) ✓ infinitiv (samme subjekt)`,
    },
    {
      id: 'fransk-2-6-2-text-1',
      type: 'text',
      content: `## Noedvendighet

| Fransk | Norsk |
|--------|-------|
| Il faut que... | Det er noedvendig at... / Man maa... |
| Il est necessaire que... | Det er noedvendig at... |
| Il est important que... | Det er viktig at... |
| Il est essentiel que... | Det er essensielt at... |
| Il est indispensable que... | Det er uunnvaerlig at... |

**Eksempler:**
- **Il faut que** tu **fasses** tes devoirs. (Du maa gjoere leksene dine.)
- **Il est important que** nous **soyons** a l'heure. (Det er viktig at vi er presis.)
- **Il est necessaire que** vous **appreniez** le francais. (Det er noedvendig at dere laerer fransk.)`,
    },
    {
      id: 'fransk-2-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Noedvendighet',
      problem: `Si paa fransk:

a) Du maa vaere snill. (Il faut que...)
b) Det er viktig at han kommer. (Il est important que...)
c) Det er noedvendig at vi vet det. (Il est necessaire que...)`,
      solution: `**Loesning:**

a) **Il faut que tu sois gentil(le).**

b) **Il est important qu'il vienne.**

c) **Il est necessaire que nous sachions cela.**`,
    },
    {
      id: 'fransk-2-6-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfaer med subjonctif:',
        subTasks: [
          { label: 'a', task: 'Il faut que tu _____ (aller) a l\'ecole.', solution: 'ailles' },
          { label: 'b', task: 'Il est important que nous _____ (faire) du sport.', solution: 'fassions' },
          { label: 'c', task: 'Il est necessaire qu\'elle _____ (avoir) son passeport.', solution: 'ait' },
        ],
        solution: 'a) ailles, b) fassions, c) ait',
        hints: ['aller → que tu ailles', 'faire → que nous fassions', 'avoir → qu\'elle ait'],
      },
    },
    {
      id: 'fransk-2-6-2-text-2',
      type: 'text',
      content: `## Vilje og oenske

| Fransk | Norsk |
|--------|-------|
| Je veux que... | Jeg vil at... |
| Je voudrais que... | Jeg ville gjerne at... |
| Je souhaite que... | Jeg oensker at... |
| Je desire que... | Jeg oensker at... |
| J'aimerais que... | Jeg skulle oenske at... |
| Je prefere que... | Jeg foretrekker at... |
| J'exige que... | Jeg krever at... |
| Je demande que... | Jeg ber om at... |

**Eksempler:**
- **Je veux que** tu **viennes** avec moi. (Jeg vil at du skal komme med meg.)
- **Je souhaite que** vous **reussissiez**. (Jeg oensker at dere skal lykkes.)
- **J'aimerais que** tu **puisses** m'aider. (Jeg skulle oenske du kunne hjelpe meg.)`,
    },
    {
      id: 'fransk-2-6-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Vilje og oenske',
      problem: `Si paa fransk:

a) Jeg vil at du skal gjoere leksene dine.
b) Jeg oensker at hun skal vaere lykkelig.
c) Jeg foretrekker at vi gaar.`,
      solution: `**Loesning:**

a) **Je veux que tu fasses tes devoirs.**

b) **Je souhaite qu'elle soit heureuse.**

c) **Je prefere que nous partions.**`,
    },
    {
      id: 'fransk-2-6-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfaer med subjonctif:',
        subTasks: [
          { label: 'a', task: 'Je veux que tu _____ (venir) demain.', solution: 'viennes' },
          { label: 'b', task: 'Je souhaite qu\'il _____ (pouvoir) nous aider.', solution: 'puisse' },
          { label: 'c', task: 'J\'aimerais que vous _____ (etre) la.', solution: 'soyez' },
        ],
        solution: 'a) viennes, b) puisse, c) soyez',
        hints: ['venir → que tu viennes', 'pouvoir → qu\'il puisse', 'etre → que vous soyez'],
      },
    },
    {
      id: 'fransk-2-6-2-text-3',
      type: 'text',
      content: `## Foelelse

| Fransk | Norsk |
|--------|-------|
| Je suis content(e) que... | Jeg er glad for at... |
| Je suis heureux/heureuse que... | Jeg er lykkelig over at... |
| Je suis triste que... | Jeg er trist over at... |
| Je suis surpris(e) que... | Jeg er overrasket over at... |
| Je regrette que... | Jeg beklager at... |
| J'ai peur que... | Jeg er redd for at... |
| Je suis fier/fiere que... | Jeg er stolt over at... |
| C'est dommage que... | Det er synd at... |

**Eksempler:**
- **Je suis content que** tu **sois** la. (Jeg er glad for at du er her.)
- **J'ai peur qu'**il **fasse** froid. (Jeg er redd for at det er kaldt.)
- **C'est dommage que** vous ne **puissiez** pas venir. (Det er synd at dere ikke kan komme.)`,
    },
    {
      id: 'fransk-2-6-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Foelelse',
      problem: `Si paa fransk:

a) Jeg er glad for at du er frisk.
b) Det er synd at han ikke kan komme.
c) Jeg er overrasket over at hun vet det.`,
      solution: `**Loesning:**

a) **Je suis content(e) que tu ailles mieux.**

b) **C'est dommage qu'il ne puisse pas venir.**

c) **Je suis surpris(e) qu'elle sache cela.**`,
    },
    {
      id: 'fransk-2-6-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfaer med subjonctif:',
        subTasks: [
          { label: 'a', task: 'Je suis triste que tu _____ (partir).', solution: 'partes' },
          { label: 'b', task: 'J\'ai peur qu\'il _____ (avoir) un accident.', solution: 'ait' },
          { label: 'c', task: 'C\'est dommage que nous ne _____ (pouvoir) pas rester.', solution: 'puissions' },
        ],
        solution: 'a) partes, b) ait, c) puissions',
        hints: ['partir → que tu partes', 'avoir → qu\'il ait', 'pouvoir → que nous puissions'],
      },
    },
    {
      id: 'fransk-2-6-2-note-1',
      type: 'note',
      content: `**Viktig regel: Subjonctif vs. infinitiv**

Naar hoved- og bisetningen har **samme subjekt**, bruker vi **infinitiv** (ikke subjonctif):

- **Ulikt subjekt** → subjonctif: Je veux **que tu viennes**. (Jeg vil at du skal komme.)
- **Samme subjekt** → infinitiv: Je veux **venir**. (Jeg vil komme.)

Feil: ~~Je veux que je vienne.~~ → Riktig: **Je veux venir.**`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.3 Subjonctif vs indicatif - Subjonctif mot indikativ
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_6_3: TextbookChapter = {
  id: 'fransk-2-6-3',
  courseId: 'fransk-2',
  chapterNumber: '6.3',
  title: 'Subjonctif vs indicatif',
  subtitle: 'Subjonctif mot indikativ',
  description: 'Laer naar man bruker subjonctif og naar man bruker indikativ, inkludert viktige konjunksjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skille mellom naar man bruker subjonctif og indikativ',
    'bruke konjunksjoner som krever subjonctif',
  ],
  content: [
    {
      id: 'fransk-2-6-3-intro',
      type: 'text',
      content: `## Subjonctif eller indikativ?

Det er viktig aa vite naar man bruker subjonctif og naar man bruker indikativ. Her er hovedreglene:

**Subjonctif** brukes etter uttrykk for:
- Noedvendighet (il faut que)
- Vilje og oenske (je veux que)
- Foelelse (je suis content que)
- Tvil (je doute que)
- Visse konjunksjoner (bien que, pour que, avant que)

**Indikativ** brukes etter uttrykk for:
- Sikkerhet (je sais que, je pense que, il est certain que)
- Konstatering (je vois que, il est vrai que)
- Etter "apres que"`,
    },
    {
      id: 'fransk-2-6-3-text-1',
      type: 'text',
      content: `## Konjunksjoner med subjonctif

Disse konjunksjonene krever **subjonctif**:

| Konjunksjon | Norsk | Eksempel |
|-------------|-------|----------|
| bien que | selv om | Bien qu'il **pleuve**, je sors. |
| pour que | for at | Je parle fort pour qu'il m'**entende**. |
| avant que | foer | Pars avant qu'il ne **vienne**. |
| jusqu'a ce que | til | Attends jusqu'a ce qu'elle **arrive**. |
| a moins que | med mindre | A moins qu'il ne **fasse** beau... |
| sans que | uten at | Il part sans que je le **sache**. |
| afin que | for at | Je travaille afin que tu **puisses** te reposer. |
| a condition que | paa betingelse av at | A condition que tu **sois** sage. |`,
    },
    {
      id: 'fransk-2-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Konjunksjoner med subjonctif',
      problem: `Si paa fransk:

a) Selv om det regner, gaar jeg ut.
b) Jeg snakker hoegt for at du skal hoere meg.
c) Vent til hun kommer.`,
      solution: `**Loesning:**

a) **Bien qu'il pleuve, je sors.**

b) **Je parle fort pour que tu m'entendes.**

c) **Attends jusqu'a ce qu'elle arrive.**`,
    },
    {
      id: 'fransk-2-6-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfaer med subjonctif:',
        subTasks: [
          { label: 'a', task: 'Bien qu\'il _____ (etre) fatigue, il travaille.', solution: 'soit' },
          { label: 'b', task: 'Je t\'appelle avant que tu _____ (partir).', solution: 'partes' },
          { label: 'c', task: 'Il etudie pour que ses parents _____ (etre) fiers.', solution: 'soient' },
        ],
        solution: 'a) soit, b) partes, c) soient',
        hints: ['bien que + subjonctif', 'avant que + subjonctif', 'pour que + subjonctif'],
      },
    },
    {
      id: 'fransk-2-6-3-text-2',
      type: 'text',
      content: `## Konjunksjoner med indikativ

Disse konjunksjonene krever **indikativ** (IKKE subjonctif):

| Konjunksjon | Norsk | Eksempel |
|-------------|-------|----------|
| parce que | fordi | Je suis content parce qu'il **fait** beau. |
| apres que | etter at | Apres qu'il **est** parti, j'ai mange. |
| pendant que | mens | Pendant que je **travaille**, il dort. |
| puisque | ettersom | Puisque tu **es** la, aide-moi. |
| quand / lorsque | naar | Quand il **vient**, je suis content. |
| des que | saa snart som | Des qu'il **arrive**, on commence. |

**Viktig kontrast:**
- **Avant que** + subjonctif (foer): Avant qu'il **parte**...
- **Apres que** + indikativ (etter): Apres qu'il **est** parti...`,
    },
    {
      id: 'fransk-2-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Subjonctif vs. indikativ',
      problem: `Velg riktig form (subjonctif eller indikativ):

a) Bien qu'il _____ (etre) malade, il va a l'ecole.
b) Parce qu'il _____ (etre) malade, il reste a la maison.
c) Avant que tu _____ (partir), dis-moi au revoir.`,
      solution: `**Loesning:**

a) **soit** (subjonctif - etter "bien que")

b) **est** (indikativ - etter "parce que")

c) **partes** (subjonctif - etter "avant que")`,
    },
    {
      id: 'fransk-2-6-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig form (subjonctif eller indikativ):',
        subTasks: [
          { label: 'a', task: 'Je sors bien qu\'il _____ (pleuvoir).', solution: 'pleuve (subjonctif)' },
          { label: 'b', task: 'Je sors parce qu\'il _____ (faire) beau.', solution: 'fait (indikativ)' },
          { label: 'c', task: 'Apres qu\'il _____ (finir) son travail, il rentre.', solution: 'a fini (indikativ)' },
        ],
        solution: 'a) pleuve (subjonctif), b) fait (indikativ), c) a fini (indikativ)',
        hints: ['bien que → subjonctif', 'parce que → indikativ', 'apres que → indikativ'],
      },
    },
    {
      id: 'fransk-2-6-3-text-3',
      type: 'text',
      content: `## Uttrykk for mening og tvil

**Med subjonctif (tvil/nektelse):**

| Fransk | Norsk |
|--------|-------|
| Je doute que... | Jeg tviler paa at... |
| Je ne pense pas que... | Jeg tror ikke at... |
| Je ne crois pas que... | Jeg tror ikke at... |
| Il est possible que... | Det er mulig at... |
| Il semble que... | Det ser ut til at... |

**Med indikativ (sikkerhet):**

| Fransk | Norsk |
|--------|-------|
| Je pense que... | Jeg tror at... |
| Je crois que... | Jeg tror at... |
| Je sais que... | Jeg vet at... |
| Il est certain que... | Det er sikkert at... |
| Il est evident que... | Det er opplagt at... |

**Merk:** "penser que" og "croire que" bruker indikativ i positiv form, men subjonctif i negativ/spoersmaal.`,
    },
    {
      id: 'fransk-2-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Mening og tvil',
      problem: `Velg riktig form:

a) Je pense qu'il _____ (avoir) raison. (positiv)
b) Je ne pense pas qu'il _____ (avoir) raison. (negativ)
c) Je doute qu'il _____ (pouvoir) venir.`,
      solution: `**Loesning:**

a) **a** (indikativ - "je pense que" i positiv form)

b) **ait** (subjonctif - "je ne pense pas que")

c) **puisse** (subjonctif - "je doute que")`,
    },
    {
      id: 'fransk-2-6-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig form (subjonctif eller indikativ):',
        subTasks: [
          { label: 'a', task: 'Je crois qu\'elle _____ (etre) intelligente.', solution: 'est (indikativ)' },
          { label: 'b', task: 'Je ne crois pas qu\'il _____ (faire) beau demain.', solution: 'fasse (subjonctif)' },
          { label: 'c', task: 'Il est possible qu\'il _____ (venir) demain.', solution: 'vienne (subjonctif)' },
        ],
        solution: 'a) est (indikativ), b) fasse (subjonctif), c) vienne (subjonctif)',
        hints: ['je crois que (positiv) → indikativ', 'je ne crois pas que → subjonctif', 'il est possible que → subjonctif'],
      },
    },
    {
      id: 'fransk-2-6-3-tip-1',
      type: 'tip',
      content: `**Huskeregel for subjonctif vs. indikativ:**

Subjonctif = **usikkerhet, oenske, foelelse**
Indikativ = **fakta, sikkerhet, konstatering**

- Jeg **vet** at → indikativ (fakta)
- Jeg **tviler** paa at → subjonctif (usikkerhet)
- Jeg **tror** at → indikativ (mening presentert som fakta)
- Jeg **tror ikke** at → subjonctif (nektelse innfoerer tvil)`,
    },
  ],
  exercises: [],
};

// ----------------------------------------------------------------------------
// 6.4 Expressions avec le subjonctif - Uttrykk med subjonctif
// ----------------------------------------------------------------------------

export const CHAPTER_FRANSK_2_6_4: TextbookChapter = {
  id: 'fransk-2-6-4',
  courseId: 'fransk-2',
  chapterNumber: '6.4',
  title: 'Expressions avec le subjonctif',
  subtitle: 'Uttrykk med subjonctif',
  description: 'Laer vanlige uttrykk med subjonctif og oev med dialoger og sammensatte setninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke vanlige uttrykk med subjonctif i kontekst',
    'skrive og snakke med subjonctif i dialoger',
  ],
  content: [
    {
      id: 'fransk-2-6-4-intro',
      type: 'text',
      content: `## Vanlige uttrykk med subjonctif

Her er de mest brukte uttrykkene som krever subjonctif:

**Upersonlige uttrykk:**

| Fransk | Norsk |
|--------|-------|
| Il faut que... | Man maa... |
| Il est important que... | Det er viktig at... |
| Il est possible que... | Det er mulig at... |
| Il est necessaire que... | Det er noedvendig at... |
| Il vaut mieux que... | Det er best at... |
| Il est temps que... | Det er paa tide at... |
| Il est normal que... | Det er normalt at... |
| Il est rare que... | Det er sjelden at... |
| Il est dommage que... | Det er synd at... |
| Il suffit que... | Det er nok at... |`,
    },
    {
      id: 'fransk-2-6-4-text-1',
      type: 'text',
      content: `## Subjonctif i hverdagen

**Vanlige situasjoner der subjonctif brukes:**

**Paa skolen:**
- Il faut que je fasse mes devoirs. (Jeg maa gjoere leksene mine.)
- Le professeur veut que nous ecrivions un essai. (Laereren vil at vi skal skrive et essay.)
- Il est important que vous compreniez la lecon. (Det er viktig at dere forstaar leksjonen.)

**Hjemme:**
- Ma mere veut que je range ma chambre. (Mamma vil at jeg skal rydde rommet mitt.)
- Il faut que tu te couches tot. (Du maa legge deg tidlig.)
- Mes parents souhaitent que je reussisse mes examens. (Foreldrene mine oensker at jeg skal bestaa eksamen.)

**Med venner:**
- Je suis content que tu sois la. (Jeg er glad for at du er her.)
- J'aimerais que tu viennes a ma fete. (Jeg skulle oenske du kom i selskapet mitt.)
- C'est dommage que Marc ne puisse pas venir. (Det er synd at Marc ikke kan komme.)`,
    },
    {
      id: 'fransk-2-6-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Hverdagsuttrykk',
      problem: `Si paa fransk:

a) Det er paa tide at du gjoer leksene.
b) Det er best at vi gaar naa.
c) Det er normalt at du er trott.`,
      solution: `**Loesning:**

a) **Il est temps que tu fasses tes devoirs.**

b) **Il vaut mieux que nous partions maintenant.**

c) **Il est normal que tu sois fatigue(e).**`,
    },
    {
      id: 'fransk-2-6-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med subjonctif:',
        subTasks: [
          { label: 'a', task: 'Det er viktig at du kommer i tide.', solution: 'Il est important que tu viennes a l\'heure.' },
          { label: 'b', task: 'Det er mulig at det regner i morgen.', solution: 'Il est possible qu\'il pleuve demain.' },
          { label: 'c', task: 'Det er synd at hun er syk.', solution: 'Il est dommage qu\'elle soit malade.' },
        ],
        solution: 'a) Il est important que tu viennes a l\'heure. b) Il est possible qu\'il pleuve demain. c) Il est dommage qu\'elle soit malade.',
        hints: ['venir → que tu viennes', 'pleuvoir → qu\'il pleuve', 'etre → qu\'elle soit'],
      },
    },
    {
      id: 'fransk-2-6-4-text-2',
      type: 'text',
      content: `## Dialog med subjonctif

**Eksempel paa dialog:**

**A:** Tu viens a la fete de Marie samedi ?
(Kommer du i festen til Marie paa loerdag?)

**B:** Je ne suis pas sur. Il faut que je **finisse** mon projet d'abord.
(Jeg er ikke sikker. Jeg maa fullfoere prosjektet mitt foerst.)

**A:** C'est dommage que tu ne **puisses** pas venir. Marie veut que tout le monde **soit** la.
(Det er synd at du ikke kan komme. Marie vil at alle skal vaere der.)

**B:** Je vais essayer. J'aimerais bien que tu me **gardes** une place.
(Jeg skal proeve. Jeg skulle oenske du holder av en plass til meg.)

**A:** Bien sur ! Je suis content que tu **veuilles** venir.
(Selvfoelgelig! Jeg er glad for at du vil komme.)`,
    },
    {
      id: 'fransk-2-6-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Dialog',
      problem: `Fullfaer dialogen med subjonctif:

A: Il faut que tu _____ (venir) au match demain.
B: Je ne suis pas sur. Il est possible que je _____ (devoir) travailler.
A: C'est dommage que tu ne _____ (pouvoir) pas venir !`,
      solution: `**Loesning:**

A: Il faut que tu **viennes** au match demain.

B: Je ne suis pas sur. Il est possible que je **doive** travailler.

A: C'est dommage que tu ne **puisses** pas venir !`,
    },
    {
      id: 'fransk-2-6-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfaer med subjonctif:',
        subTasks: [
          { label: 'a', task: 'Le prof exige que nous _____ (apprendre) le vocabulaire.', solution: 'apprenions' },
          { label: 'b', task: 'Ma mere veut que je _____ (ranger) ma chambre.', solution: 'range' },
          { label: 'c', task: 'Il est temps que vous _____ (savoir) la verite.', solution: 'sachiez' },
        ],
        solution: 'a) apprenions, b) range, c) sachiez',
        hints: ['apprendre → que nous apprenions', 'ranger → que je range', 'savoir → que vous sachiez'],
      },
    },
    {
      id: 'fransk-2-6-4-text-3',
      type: 'text',
      content: `## Sammendrag: Alle tilfeller for subjonctif

**1. Etter uttrykk for noedvendighet:**
Il faut que, il est necessaire que, il est important que

**2. Etter uttrykk for vilje/oenske:**
je veux que, je souhaite que, j'aimerais que, je prefere que

**3. Etter uttrykk for foelelse:**
je suis content que, j'ai peur que, c'est dommage que, je regrette que

**4. Etter uttrykk for tvil:**
je doute que, il est possible que, je ne pense pas que

**5. Etter konjunksjoner:**
bien que, pour que, avant que, jusqu'a ce que, a moins que, sans que

**6. Etter upersonlige uttrykk:**
il vaut mieux que, il est temps que, il est normal que, il suffit que`,
    },
    {
      id: 'fransk-2-6-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Sammensatte setninger',
      problem: `Oversett til fransk:

a) Selv om jeg er trott, maa jeg gjoere leksene.
b) Jeg oensker at du lykkes med eksamen.
c) Det er paa tide at vi drar.`,
      solution: `**Loesning:**

a) **Bien que je sois fatigue(e), il faut que je fasse mes devoirs.**

b) **Je souhaite que tu reussisses ton examen.**

c) **Il est temps que nous partions.**`,
    },
    {
      id: 'fransk-2-6-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-6-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med subjonctif:',
        subTasks: [
          { label: 'a', task: 'Laereren vil at vi skal snakke fransk.', solution: 'Le professeur veut que nous parlions francais.' },
          { label: 'b', task: 'Jeg er glad for at du kan komme.', solution: 'Je suis content(e) que tu puisses venir.' },
          { label: 'c', task: 'Det er viktig at man spiser sunt, selv om det er vanskelig.', solution: 'Il est important qu\'on mange sainement, bien que ce soit difficile.' },
        ],
        solution: 'a) Le professeur veut que nous parlions francais. b) Je suis content(e) que tu puisses venir. c) Il est important qu\'on mange sainement, bien que ce soit difficile.',
        hints: ['parler → que nous parlions', 'pouvoir → que tu puisses', 'etre → que ce soit'],
      },
    },
    {
      id: 'fransk-2-6-4-tip-1',
      type: 'tip',
      content: `**Tips for aa mestre subjonctif:**

1. Laer de vanligste uttrykkene som utloeser subjonctif (il faut que, je veux que, bien que)
2. Laer de uregelmessige formene utenat (etre, avoir, aller, faire, pouvoir, savoir)
3. Husk: subjonctif = usikkerhet, oenske, foelelse, noedvendighet
4. Husk: to forskjellige subjekter! Samme subjekt → infinitiv
5. Oev med aa lage setninger i daglige situasjoner`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const FRANSK_2_CHAPTERS_4_6: TextbookChapter[] = [
  CHAPTER_FRANSK_2_4_1,
  CHAPTER_FRANSK_2_4_2,
  CHAPTER_FRANSK_2_4_3,
  CHAPTER_FRANSK_2_4_4,
  CHAPTER_FRANSK_2_5_1,
  CHAPTER_FRANSK_2_5_2,
  CHAPTER_FRANSK_2_5_3,
  CHAPTER_FRANSK_2_5_4,
  CHAPTER_FRANSK_2_6_1,
  CHAPTER_FRANSK_2_6_2,
  CHAPTER_FRANSK_2_6_3,
  CHAPTER_FRANSK_2_6_4,
];
