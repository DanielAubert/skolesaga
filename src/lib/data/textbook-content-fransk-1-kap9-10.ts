/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Niva 1 - Kapittel 9-10
 *
 * Kapittel 9: Reise og transport (Les voyages et les transports)
 * Kapittel 10: Verb og grammatikk (Les verbes et la grammaire)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Les transports - Transportmidler
// ============================================================================

export const CHAPTER_FRANSK_1_9_1: TextbookChapter = {
  id: 'fransk-1-9-1',
  courseId: 'fransk-1',
  chapterNumber: '9.1',
  title: 'Les transports',
  subtitle: 'Transportmidler',
  description: 'Laer om ulike transportmidler pa fransk og hvordan du snakker om reiser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi vanlige transportmidler pa fransk',
    'bruke verbet prendre med transportmidler',
  ],
  content: [
    {
      id: 'fransk-1-9-1-intro',
      type: 'text',
      content: `## Transportmidler pa fransk

Nar du reiser i Frankrike, er det viktig a kunne snakke om transportmidler. Frankrike har et veldig godt offentlig transportsystem med hoyhastighetstog (TGV), busser og metro.

I dette kapittelet laerer du ordene for de vanligste transportmidlene og hvordan du bruker dem i setninger.`,
    },
    {
      id: 'fransk-1-9-1-text-1',
      type: 'text',
      content: `## Vanlige transportmidler

| Fransk | Norsk | Kjonn |
|--------|-------|-------|
| le bus | bussen | hankjonn |
| le train | toget | hankjonn |
| le metro | t-banen | hankjonn |
| l'avion (m) | flyet | hankjonn |
| le velo | sykkelen | hankjonn |
| la voiture | bilen | hunkjonn |
| le tramway | trikken | hankjonn |
| le bateau | baten | hankjonn |
| la moto | motorsykkelen | hunkjonn |
| le taxi | taxien | hankjonn |`,
    },
    {
      id: 'fransk-1-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Transportmidler',
      problem: `Oversett til norsk:
a) le bus
b) le train
c) le velo`,
      solution: `a) le bus = bussen
b) le train = toget
c) le velo = sykkelen

Merk at pa fransk har alle substantiver kjonn: le (hankjonn) eller la (hunkjonn).`,
    },
    {
      id: 'fransk-1-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse transportmidlene til fransk. Husk artikkel!',
        subTasks: [
          { label: 'a', task: 'bussen', solution: 'le bus' },
          { label: 'b', task: 'flyet', solution: "l'avion" },
          { label: 'c', task: 'bilen', solution: 'la voiture' },
          { label: 'd', task: 'taxien', solution: 'le taxi' },
        ],
        solution: "a) le bus, b) l'avion, c) la voiture, d) le taxi",
        hints: ['Husk artikkel: le (hankjonn), la (hunkjonn)', "Foran vokal brukes l' i stedet for le/la"],
      },
    },
    {
      id: 'fransk-1-9-1-text-2',
      type: 'text',
      content: `## Verbet "prendre" - a ta

Nar vi snakker om hvilket transportmiddel vi bruker, bruker vi verbet **prendre** (a ta):

| Person | Form |
|--------|------|
| je | prends |
| tu | prends |
| il/elle | prend |
| nous | prenons |
| vous | prenez |
| ils/elles | prennent |

**Eksempler:**
- Je prends **le** bus. (Jeg tar bussen.)
- Elle prend **le** train. (Hun tar toget.)
- Nous prenons **le** metro. (Vi tar metroen.)`,
    },
    {
      id: 'fransk-1-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Prendre + transportmiddel',
      problem: `Fyll inn riktig form av "prendre":
a) Je ___ le bus.
b) Tu ___ le metro.
c) Ils ___ le train.`,
      solution: `a) Je **prends** le bus.
b) Tu **prends** le metro.
c) Ils **prennent** le train.

Merk: je og tu har samme form (prends), mens ils/elles har dobbelt-n (prennent).`,
    },
    {
      id: 'fransk-1-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av "prendre".',
        subTasks: [
          { label: 'a', task: 'Je ___ le train.', solution: 'prends' },
          { label: 'b', task: 'Elle ___ le bus.', solution: 'prend' },
          { label: 'c', task: 'Nous ___ le metro.', solution: 'prenons' },
          { label: 'd', task: 'Vous ___ le taxi.', solution: 'prenez' },
        ],
        solution: 'a) prends, b) prend, c) prenons, d) prenez',
        hints: ['je/tu -> prends', 'il/elle -> prend (uten s)', 'nous -> prenons'],
      },
    },
    {
      id: 'fransk-1-9-1-text-3',
      type: 'text',
      content: `## Nyttige setninger om transport

| Fransk | Norsk |
|--------|-------|
| Comment tu vas a l'ecole ? | Hvordan kommer du til skolen? |
| Je prends le bus. | Jeg tar bussen. |
| Je vais a pied. | Jeg gar til fots. |
| Le train part a 10 heures. | Toget gar klokken 10. |
| Ou est l'arret de bus ? | Hvor er bussholdeplassen? |
| A quelle heure est le prochain bus ? | Nar er neste buss? |`,
    },
    {
      id: 'fransk-1-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Sporre om transport',
      problem: `Oversett til norsk:
a) Comment tu vas au travail ?
b) Je prends le velo.
c) Le bus arrive dans 5 minutes.`,
      solution: `a) Hvordan kommer du til jobb?
b) Jeg sykler / Jeg tar sykkelen.
c) Bussen kommer om 5 minutter.`,
    },
    {
      id: 'fransk-1-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Hvordan kommer du til skolen?', solution: "Comment tu vas a l'ecole ?" },
          { label: 'b', task: 'Jeg gar til fots.', solution: 'Je vais a pied.' },
          { label: 'c', task: 'Toget gar klokken 8.', solution: 'Le train part a 8 heures.' },
        ],
        solution: "a) Comment tu vas a l'ecole ? b) Je vais a pied. c) Le train part a 8 heures.",
        hints: ['a pied = til fots', 'partir = ga/dra (om transportmidler)'],
      },
    },
    {
      id: 'fransk-1-9-1-text-4',
      type: 'text',
      content: `## Oppsummering - Viktige ord

| Fransk | Norsk |
|--------|-------|
| prendre | ta |
| partir | dra/ga |
| arriver | ankomme |
| aller | ga |
| l'arret (m) | holdeplassen |
| la gare | togstasjonen |
| l'aeroport (m) | flyplassen |`,
    },
    {
      id: 'fransk-1-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene pa norsk?',
        subTasks: [
          { label: 'a', task: 'la gare', solution: 'togstasjonen' },
          { label: 'b', task: "l'arret de bus", solution: 'bussholdeplassen' },
          { label: 'c', task: 'partir', solution: 'dra/ga' },
          { label: 'd', task: "l'aeroport", solution: 'flyplassen' },
        ],
        solution: 'a) togstasjonen, b) bussholdeplassen, c) dra/ga, d) flyplassen',
        hints: ['la gare = togstasjonen (gare er et vanlig ord i Frankrike)', "l'aeroport = flyplassen"],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2: En ville - I byen
// ============================================================================

export const CHAPTER_FRANSK_1_9_2: TextbookChapter = {
  id: 'fransk-1-9-2',
  courseId: 'fransk-1',
  chapterNumber: '9.2',
  title: 'En ville',
  subtitle: 'I byen',
  description: 'Laer om viktige steder i byen og hvordan du spor om veien pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'navngi viktige steder i byen',
    'sporre om veien og forstae veibeskrivelser pa fransk',
  ],
  content: [
    {
      id: 'fransk-1-9-2-intro',
      type: 'text',
      content: `## Steder i byen

Nar du er i en fransk by, er det nyttig a kunne navngi ulike steder og sporre om veien. I dette kapittelet laerer du ordene for de viktigste stedene og hvordan du finner frem.`,
    },
    {
      id: 'fransk-1-9-2-text-1',
      type: 'text',
      content: `## Viktige steder i byen

| Fransk | Norsk | Kjonn |
|--------|-------|-------|
| la gare | togstasjonen | hunkjonn |
| la pharmacie | apoteket | hunkjonn |
| la poste | posten | hunkjonn |
| l'hopital (m) | sykehuset | hankjonn |
| la banque | banken | hunkjonn |
| le restaurant | restauranten | hankjonn |
| le supermarche | supermarkedet | hankjonn |
| l'ecole (f) | skolen | hunkjonn |
| l'eglise (f) | kirken | hunkjonn |
| le musee | museet | hankjonn |
| la bibliotheque | biblioteket | hunkjonn |
| la boulangerie | bakeriet | hunkjonn |`,
    },
    {
      id: 'fransk-1-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Steder i byen',
      problem: `Oversett til norsk:
a) la gare
b) la pharmacie
c) le supermarche`,
      solution: `a) la gare = togstasjonen
b) la pharmacie = apoteket
c) le supermarche = supermarkedet`,
    },
    {
      id: 'fransk-1-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk med riktig artikkel.',
        subTasks: [
          { label: 'a', task: 'togstasjonen', solution: 'la gare' },
          { label: 'b', task: 'banken', solution: 'la banque' },
          { label: 'c', task: 'sykehuset', solution: "l'hopital" },
          { label: 'd', task: 'posten', solution: 'la poste' },
        ],
        solution: "a) la gare, b) la banque, c) l'hopital, d) la poste",
        hints: ['Husk artikkel: le (hankjonn), la (hunkjonn)', "Foran vokal/h: l'"],
      },
    },
    {
      id: 'fransk-1-9-2-text-2',
      type: 'text',
      content: `## Sporre om veien

Nar du vil finne frem i byen, kan du bruke disse frasene:

| Fransk | Norsk |
|--------|-------|
| Ou est... ? | Hvor er...? |
| Comment aller a... ? | Hvordan kommer jeg til...? |
| Excusez-moi, pouvez-vous m'aider ? | Unnskyld, kan De hjelpe meg? |
| C'est loin ? | Er det langt? |
| C'est pres d'ici ? | Er det i naerheten? |

**a + le = au, a + la = a la, a + l' = a l', a + les = aux**
- Je vais **au** supermarche. (hankjonn)
- Je vais **a la** pharmacie. (hunkjonn)
- Je vais **a l'**hopital. (foran vokal/h)`,
    },
    {
      id: 'fransk-1-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sporre om veien',
      problem: `Fyll inn au, a la eller a l':
a) Je vais ___ gare.
b) Je vais ___ supermarche.
c) Je vais ___ hopital.`,
      solution: `a) Je vais **a la** gare. (la gare -> a la)
b) Je vais **au** supermarche. (le supermarche -> au)
c) Je vais **a l'**hopital. (l'hopital -> a l')`,
    },
    {
      id: 'fransk-1-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: "Fyll inn au, a la eller a l'.",
        subTasks: [
          { label: 'a', task: 'Je vais ___ banque.', solution: 'a la' },
          { label: 'b', task: 'Je vais ___ restaurant.', solution: 'au' },
          { label: 'c', task: 'Je vais ___ ecole.', solution: "a l'" },
          { label: 'd', task: 'Je vais ___ musee.', solution: 'au' },
        ],
        solution: "a) a la, b) au, c) a l', d) au",
        hints: ['le -> au', 'la -> a la', "l' -> a l'"],
      },
    },
    {
      id: 'fransk-1-9-2-text-3',
      type: 'text',
      content: `## Veibeskrivelser

| Fransk | Norsk |
|--------|-------|
| Allez tout droit. | Ga rett fram. |
| Tournez a gauche. | Sving til venstre. |
| Tournez a droite. | Sving til hoyre. |
| Prenez la premiere rue a gauche. | Ta forste gate til venstre. |
| Prenez la deuxieme rue a droite. | Ta andre gate til hoyre. |
| C'est sur votre gauche. | Det er pa venstre side. |
| C'est sur votre droite. | Det er pa hoyre side. |`,
    },
    {
      id: 'fransk-1-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Veibeskrivelse',
      problem: `Oversett til norsk:
"Allez tout droit, puis tournez a gauche. La gare est sur votre droite."`,
      solution: `"Ga rett fram, sa sving til venstre. Togstasjonen er pa hoyre side."`,
    },
    {
      id: 'fransk-1-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Ga rett fram.', solution: 'Allez tout droit.' },
          { label: 'b', task: 'Sving til venstre.', solution: 'Tournez a gauche.' },
          { label: 'c', task: 'Ta forste gate til hoyre.', solution: 'Prenez la premiere rue a droite.' },
        ],
        solution: 'a) Allez tout droit. b) Tournez a gauche. c) Prenez la premiere rue a droite.',
        hints: ['tout droit = rett fram', 'gauche = venstre, droite = hoyre'],
      },
    },
    {
      id: 'fransk-1-9-2-text-4',
      type: 'text',
      content: `## Nyttige ord for veibeskrivelser

| Fransk | Norsk |
|--------|-------|
| la rue | gaten |
| le coin | hjornet |
| le carrefour | krysset |
| le feu rouge | trafikklyset |
| le pont | broen |
| en face de | overfor |
| a cote de | ved siden av |`,
    },
    {
      id: 'fransk-1-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene?',
        subTasks: [
          { label: 'a', task: 'la rue', solution: 'gaten' },
          { label: 'b', task: 'le feu rouge', solution: 'trafikklyset' },
          { label: 'c', task: 'en face de', solution: 'overfor' },
          { label: 'd', task: 'le pont', solution: 'broen' },
        ],
        solution: 'a) gaten, b) trafikklyset, c) overfor, d) broen',
        hints: ['feu rouge = rodt lys (trafikklys)', 'en face de = rett overfor'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3: Planifier un voyage - Planlegge en reise
// ============================================================================

export const CHAPTER_FRANSK_1_9_3: TextbookChapter = {
  id: 'fransk-1-9-3',
  courseId: 'fransk-1',
  chapterNumber: '9.3',
  title: 'Planifier un voyage',
  subtitle: 'Planlegge en reise',
  description: 'Laer a kjope billetter og planlegge reiser pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjope billetter pa fransk',
    'sporre om avgangstider, priser og reisemal',
  ],
  content: [
    {
      id: 'fransk-1-9-3-intro',
      type: 'text',
      content: `## Planlegge en reise

Nar du skal reise i Frankrike, ma du kunne kjope billetter og sporre om avgangstider. I dette kapittelet laerer du de viktigste ordene og frasene for a planlegge en reise. Frankrike har et utmerket jernbanenettverk med SNCF og hoyhastighetstoget TGV.`,
    },
    {
      id: 'fransk-1-9-3-text-1',
      type: 'text',
      content: `## Viktige reiseord

| Fransk | Norsk |
|--------|-------|
| le billet | billetten |
| un aller-retour | tur-retur-billett |
| un aller simple | enkeltbillett |
| les horaires (m) | rutetabellen |
| le depart | avgangen |
| l'arrivee (f) | ankomsten |
| le quai | perrongen |
| le guichet | skranken/billettluken |
| changer (de train) | bytte (tog) |
| descendre | ga av |
| monter | ga pa |`,
    },
    {
      id: 'fransk-1-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Reiseord',
      problem: `Oversett til norsk:
a) le billet
b) le depart
c) changer de train`,
      solution: `a) le billet = billetten
b) le depart = avgangen
c) changer de train = bytte tog`,
    },
    {
      id: 'fransk-1-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'billetten', solution: 'le billet' },
          { label: 'b', task: 'ankomsten', solution: "l'arrivee" },
          { label: 'c', task: 'perrongen', solution: 'le quai' },
          { label: 'd', task: 'rutetabellen', solution: 'les horaires' },
        ],
        solution: "a) le billet, b) l'arrivee, c) le quai, d) les horaires",
        hints: ['billet = billett (ligner pa det norske ordet)', 'quai = perrong/kai'],
      },
    },
    {
      id: 'fransk-1-9-3-text-2',
      type: 'text',
      content: `## Kjope billetter

Nyttige fraser nar du kjoper billett:

| Fransk | Norsk |
|--------|-------|
| Je voudrais un billet pour Paris, s'il vous plait. | Jeg vil gjerne ha en billett til Paris, takk. |
| Aller-retour ? | Tur-retur? |
| Non, un aller simple, s'il vous plait. | Nei, enkeltbillett, takk. |
| Combien ca coute ? | Hva koster det? |
| A quelle heure part le train ? | Nar gar toget? |
| De quel quai ? | Fra hvilken perrong? |
| Est-ce qu'il faut changer ? | Ma jeg bytte? |`,
    },
    {
      id: 'fransk-1-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Pa togstasjonen',
      problem: `Les dialogen og svar pa sporsmalene:

*Client : Bonjour ! Je voudrais un billet pour Lyon, s'il vous plait.*
*Employe : Aller-retour ?*
*Client : Non, un aller simple.*
*Employe : Ca fait 45 euros. Le train part a 10h30, quai 3.*

a) Hvor vil kunden reise?
b) Vil kunden ha tur-retur?
c) Hva koster billetten?`,
      solution: `a) Kunden vil reise til Lyon.
b) Nei, kunden vil bare ha enkeltbillett (aller simple).
c) Billetten koster 45 euro.`,
    },
    {
      id: 'fransk-1-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'En billett til Marseille, takk.', solution: "Je voudrais un billet pour Marseille, s'il vous plait." },
          { label: 'b', task: 'Hva koster det?', solution: 'Combien ca coute ?' },
          { label: 'c', task: 'Nar gar toget?', solution: 'A quelle heure part le train ?' },
          { label: 'd', task: 'Fra hvilken perrong?', solution: 'De quel quai ?' },
        ],
        solution: "a) Je voudrais un billet pour Marseille, s'il vous plait. b) Combien ca coute ? c) A quelle heure part le train ? d) De quel quai ?",
        hints: ['pour = til (med byer)', "s'il vous plait = takk/vaer sa snill"],
      },
    },
    {
      id: 'fransk-1-9-3-text-3',
      type: 'text',
      content: `## Klokkeslett og avganger

| Fransk | Norsk |
|--------|-------|
| Le train part a 9 heures. | Toget gar klokken 9. |
| Le train arrive a 11h30. | Toget ankommer klokken 11:30. |
| Le depart est a 14h15. | Avgangen er klokken 14:15. |
| Le train est en retard. | Toget er forsinket. |
| Le train est a l'heure. | Toget er i rute. |`,
    },
    {
      id: 'fransk-1-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Avgangstider',
      problem: `Oversett til norsk:
a) Le train part a 8h45.
b) L'arrivee est a 12h30.
c) Le train a 10 minutes de retard.`,
      solution: `a) Toget gar klokken 8:45.
b) Ankomsten er klokken 12:30.
c) Toget er 10 minutter forsinket.`,
    },
    {
      id: 'fransk-1-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Toget gar klokken 10.', solution: 'Le train part a 10 heures.' },
          { label: 'b', task: 'Toget er forsinket.', solution: 'Le train est en retard.' },
          { label: 'c', task: 'Ma jeg bytte?', solution: "Est-ce qu'il faut changer ?" },
        ],
        solution: "a) Le train part a 10 heures. b) Le train est en retard. c) Est-ce qu'il faut changer ?",
        hints: ['a + klokkeslett', 'en retard = forsinket'],
      },
    },
    {
      id: 'fransk-1-9-3-text-4',
      type: 'text',
      content: `## Oppsummering - Nyttige fraser

| Situasjon | Fransk | Norsk |
|-----------|--------|-------|
| Kjope billett | Je voudrais un billet, s'il vous plait. | Jeg vil gjerne ha en billett, takk. |
| Sporre om pris | Combien ca coute ? | Hva koster det? |
| Sporre om tid | A quelle heure part le train ? | Nar gar toget? |
| Sporre om perrong | De quel quai ? | Fra hvilken perrong? |
| Sporre om bytte | Est-ce qu'il faut changer ? | Ma jeg bytte? |`,
    },
    {
      id: 'fransk-1-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog pa fransk. Du vil kjope en billett til Nice. Spor om pris og avgangstid.',
        subTasks: [
          { label: 'a', task: 'Si "God dag" og be om en billett til Nice', solution: "Bonjour ! Je voudrais un billet pour Nice, s'il vous plait." },
          { label: 'b', task: 'Spor hva det koster', solution: 'Combien ca coute ?' },
          { label: 'c', task: 'Spor nar toget gar', solution: 'A quelle heure part le train ?' },
        ],
        solution: "a) Bonjour ! Je voudrais un billet pour Nice, s'il vous plait. b) Combien ca coute ? c) A quelle heure part le train ?",
        hints: ['Bonjour = God dag', "s'il vous plait = takk"],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4: A l'hotel - Pa hotellet
// ============================================================================

export const CHAPTER_FRANSK_1_9_4: TextbookChapter = {
  id: 'fransk-1-9-4',
  courseId: 'fransk-1',
  chapterNumber: '9.4',
  title: "A l'hotel",
  subtitle: 'Pa hotellet',
  description: 'Laer a bestille hotellrom og kommunisere pa et hotell pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bestille hotellrom pa fransk',
    'sporre om fasiliteter og priser pa et hotell',
  ],
  content: [
    {
      id: 'fransk-1-9-4-intro',
      type: 'text',
      content: `## Pa hotellet

Nar du reiser til Frankrike, er det nyttig a kunne bestille hotellrom og kommunisere med resepsjonen. Frankrike har mange ulike typer overnatting, fra luksushoteller til sjarmerende gjestehus (chambres d'hotes). I dette kapittelet laerer du de viktigste ordene og frasene.`,
    },
    {
      id: 'fransk-1-9-4-text-1',
      type: 'text',
      content: `## Hotellvokabular

| Fransk | Norsk |
|--------|-------|
| l'hotel (m) | hotellet |
| la chambre | rommet |
| une chambre simple | enkeltrom |
| une chambre double | dobbeltrom |
| la reception | resepsjonen |
| la cle | nokkelen |
| le petit dejeuner | frokosten |
| la nuit | natten |
| l'ascenseur (m) | heisen |
| la salle de bains | badet |
| le lit | sengen |`,
    },
    {
      id: 'fransk-1-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Hotellord',
      problem: `Oversett til norsk:
a) une chambre simple
b) la reception
c) le petit dejeuner`,
      solution: `a) une chambre simple = enkeltrom
b) la reception = resepsjonen
c) le petit dejeuner = frokosten

"Petit dejeuner" betyr bokstavelig "liten lunsj" - frokost i Frankrike!`,
    },
    {
      id: 'fransk-1-9-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'dobbeltrom', solution: 'une chambre double' },
          { label: 'b', task: 'nokkelen', solution: 'la cle' },
          { label: 'c', task: 'heisen', solution: "l'ascenseur" },
          { label: 'd', task: 'badet', solution: 'la salle de bains' },
        ],
        solution: "a) une chambre double, b) la cle, c) l'ascenseur, d) la salle de bains",
        hints: ['chambre = rom, double = dobbel', 'salle de bains = baderom (bokstavelig: bad-sal)'],
      },
    },
    {
      id: 'fransk-1-9-4-text-2',
      type: 'text',
      content: `## Bestille rom

Nyttige fraser nar du bestiller rom:

| Fransk | Norsk |
|--------|-------|
| Je voudrais reserver une chambre. | Jeg vil gjerne bestille et rom. |
| Avez-vous une chambre de libre ? | Har dere et ledig rom? |
| Pour combien de nuits ? | For hvor mange netter? |
| Pour deux nuits, s'il vous plait. | For to netter, takk. |
| Combien coute la chambre par nuit ? | Hva koster rommet per natt? |
| Le petit dejeuner est compris ? | Er frokost inkludert? |`,
    },
    {
      id: 'fransk-1-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Bestille rom',
      problem: `Les dialogen og svar pa sporsmalene:

*Client : Bonjour ! Avez-vous une chambre de libre ?*
*Receptionniste : Oui, nous avons encore des chambres. Vous desirez une chambre simple ou double ?*
*Client : Une chambre double, s'il vous plait. Pour trois nuits.*
*Receptionniste : C'est 80 euros par nuit, petit dejeuner compris.*

a) Hva slags rom vil gjesten ha?
b) Hvor mange netter?
c) Er frokost inkludert?`,
      solution: `a) Gjesten vil ha et dobbeltrom (chambre double).
b) Tre netter (trois nuits).
c) Ja, frokost er inkludert (petit dejeuner compris).`,
    },
    {
      id: 'fransk-1-9-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Har dere et ledig rom?', solution: 'Avez-vous une chambre de libre ?' },
          { label: 'b', task: 'For to netter, takk.', solution: "Pour deux nuits, s'il vous plait." },
          { label: 'c', task: 'Hva koster rommet per natt?', solution: 'Combien coute la chambre par nuit ?' },
          { label: 'd', task: 'Er frokost inkludert?', solution: 'Le petit dejeuner est compris ?' },
        ],
        solution: "a) Avez-vous une chambre de libre ? b) Pour deux nuits, s'il vous plait. c) Combien coute la chambre par nuit ? d) Le petit dejeuner est compris ?",
        hints: ['libre = ledig', 'par nuit = per natt', 'compris = inkludert'],
      },
    },
    {
      id: 'fransk-1-9-4-text-3',
      type: 'text',
      content: `## Sjekke inn og ut

| Fransk | Norsk |
|--------|-------|
| Je voudrais faire le check-in. | Jeg vil sjekke inn. |
| Je voudrais faire le check-out. | Jeg vil sjekke ut. |
| Voici votre cle. | Her er nokkelen Deres. |
| Votre chambre est le numero 205. | Rommet Deres er nummer 205. |
| A quelle heure est le check-out ? | Nar er utsjekking? |
| Pouvez-vous appeler un taxi ? | Kan De ringe en taxi? |`,
    },
    {
      id: 'fransk-1-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Pa resepsjonen',
      problem: `Oversett til norsk:
a) Votre chambre est au deuxieme etage.
b) Le petit dejeuner est de 7h a 10h.
c) L'ascenseur est la-bas.`,
      solution: `a) Rommet Deres er i andre etasje.
b) Frokosten er fra klokken 7 til 10.
c) Heisen er der borte.`,
    },
    {
      id: 'fransk-1-9-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg vil sjekke inn.', solution: 'Je voudrais faire le check-in.' },
          { label: 'b', task: 'Her er nokkelen Deres.', solution: 'Voici votre cle.' },
          { label: 'c', task: 'Nar er utsjekking?', solution: 'A quelle heure est le check-out ?' },
        ],
        solution: 'a) Je voudrais faire le check-in. b) Voici votre cle. c) A quelle heure est le check-out ?',
        hints: ['voici = her er', 'votre = Deres (formal)'],
      },
    },
    {
      id: 'fransk-1-9-4-text-4',
      type: 'text',
      content: `## Fasiliteter pa hotellet

| Fransk | Norsk |
|--------|-------|
| le wifi | wifi |
| la television | TV-en |
| la climatisation | klimaanlegget |
| le parking | parkeringsplassen |
| la piscine | svommebassenget |
| le minibar | minibaren |`,
    },
    {
      id: 'fransk-1-9-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-9-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse ordene?',
        subTasks: [
          { label: 'a', task: 'le wifi', solution: 'wifi' },
          { label: 'b', task: 'la piscine', solution: 'svommebassenget' },
          { label: 'c', task: 'le parking', solution: 'parkeringsplassen' },
          { label: 'd', task: 'la climatisation', solution: 'klimaanlegget' },
        ],
        solution: 'a) wifi, b) svommebassenget, c) parkeringsplassen, d) klimaanlegget',
        hints: ['piscine = svommebasseng', 'climatisation = klimaanlegg (fra "climat" = klima)'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.1: Le verbe etre - Verbet "a vaere"
// ============================================================================

export const CHAPTER_FRANSK_1_10_1: TextbookChapter = {
  id: 'fransk-1-10-1',
  courseId: 'fransk-1',
  chapterNumber: '10.1',
  title: 'Le verbe "etre"',
  subtitle: 'Verbet "a vaere"',
  description: 'Laer a boye verbet "etre" (a vaere) i presens.',
  estimatedMinutes: 40,
  competenceGoals: [
    'boye verbet "etre" i alle personer',
    'bruke "etre" i enkle setninger for a beskrive seg selv og andre',
  ],
  content: [
    {
      id: 'fransk-1-10-1-intro',
      type: 'text',
      content: `## Verbet "etre" - a vaere

"Etre" er et av de viktigste verbene pa fransk. Det brukes til a si hvem eller hva noe er, og til a beskrive egenskaper. "Etre" er et uregelmessig verb og ma laeres utenat.`,
    },
    {
      id: 'fransk-1-10-1-text-1',
      type: 'text',
      content: `## Boyning av "etre" i presens

| Person | Fransk | Norsk |
|--------|--------|-------|
| je | suis | jeg er |
| tu | es | du er |
| il/elle/on | est | han/hun/man er |
| nous | sommes | vi er |
| vous | etes | dere er / De er |
| ils/elles | sont | de er |

**Merk:** "vous" brukes bade som "dere" (flertall) og "De" (formal/hoflig form).`,
    },
    {
      id: 'fransk-1-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Boyning',
      problem: `Fyll inn riktig form av "etre":
a) Je ___ eleve.
b) Tu ___ gentil.
c) Il ___ grand.`,
      solution: `a) Je **suis** eleve. (Jeg er elev.)
b) Tu **es** gentil. (Du er snill.)
c) Il **est** grand. (Han er hoy.)`,
    },
    {
      id: 'fransk-1-10-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "etre".',
        subTasks: [
          { label: 'a', task: "Je ___ norvegien(ne). (Jeg er norsk.)", solution: 'suis' },
          { label: 'b', task: 'Tu ___ mon ami. (Du er min venn.)', solution: 'es' },
          { label: 'c', task: 'Elle ___ professeur. (Hun er laerer.)', solution: 'est' },
          { label: 'd', task: 'Nous ___ de Norvege. (Vi er fra Norge.)', solution: 'sommes' },
        ],
        solution: 'a) suis, b) es, c) est, d) sommes',
        hints: ['je -> suis', 'tu -> es', 'il/elle -> est', 'nous -> sommes'],
      },
    },
    {
      id: 'fransk-1-10-1-text-2',
      type: 'text',
      content: `## Bruk av "etre"

"Etre" brukes til a:

1. **Si hvem man er:**
   - Je suis Pierre. (Jeg er Pierre.)
   - Elle est medecin. (Hun er lege.)

2. **Si hvor man kommer fra:**
   - Nous sommes de Norvege. (Vi er fra Norge.)

3. **Beskrive egenskaper:**
   - Le temps est beau. (Vaeret er fint.)
   - Le chat est petit. (Katten er liten.)

4. **Si alder (med avoir, ikke etre!):**
   - NB: Pa fransk bruker man "avoir" (a ha) for alder: J'ai 16 ans. (Jeg er 16 ar.)`,
    },
    {
      id: 'fransk-1-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruk av etre',
      problem: `Oversett til fransk:
a) Jeg er fra Norge.
b) Hun er lege.
c) Vi er glade.`,
      solution: `a) Je suis de Norvege.
b) Elle est medecin.
c) Nous sommes contents/contentes.

Merk: Pa fransk sier man IKKE "je suis 16 ans" for alder. Man sier "j'ai 16 ans" (med avoir).`,
    },
    {
      id: 'fransk-1-10-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Bruk riktig form av "etre".',
        subTasks: [
          { label: 'a', task: 'Han er intelligent.', solution: 'Il est intelligent.' },
          { label: 'b', task: 'Dere er snille.', solution: 'Vous etes gentils.' },
          { label: 'c', task: 'De er fra Frankrike.', solution: 'Ils sont de France.' },
        ],
        solution: 'a) Il est intelligent. b) Vous etes gentils. c) Ils sont de France.',
        hints: ['il -> est', 'vous -> etes', 'ils -> sont'],
      },
    },
    {
      id: 'fransk-1-10-1-text-3',
      type: 'text',
      content: `## Sporsmal med "etre"

| Sporsmal | Svar |
|----------|------|
| Tu es fatigue(e) ? | Oui, je suis fatigue(e). |
| Il est eleve ? | Oui, il est eleve. |
| Vous etes Monsieur Dupont ? | Oui, je suis Monsieur Dupont. |
| D'ou etes-vous ? | Je suis de Norvege. |
| Comment est-elle ? | Elle est grande et blonde. |`,
    },
    {
      id: 'fransk-1-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Sporsmal og svar',
      problem: `Svar pa sporsmalene:
a) Tu es eleve ? (Ja)
b) Comment est-il ? (hoy og morkharet)
c) Vous etes Madame Martin ? (Ja)`,
      solution: `a) Oui, je suis eleve.
b) Il est grand et brun.
c) Oui, je suis Madame Martin.`,
    },
    {
      id: 'fransk-1-10-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett sporsmalene til fransk.',
        subTasks: [
          { label: 'a', task: 'Er du trott?', solution: 'Tu es fatigue(e) ?' },
          { label: 'b', task: 'Hvor er dere fra?', solution: "D'ou etes-vous ?" },
          { label: 'c', task: 'Er de fra Norge?', solution: 'Ils sont de Norvege ?' },
        ],
        solution: "a) Tu es fatigue(e) ? b) D'ou etes-vous ? c) Ils sont de Norvege ?",
        hints: ['fatigue = trott', "d'ou = hvorfra"],
      },
    },
    {
      id: 'fransk-1-10-1-text-4',
      type: 'text',
      content: `## Vanlige uttrykk med "etre"

| Fransk | Norsk |
|--------|-------|
| Etre fatigue(e) | Vaere trott |
| Etre content(e) | Vaere fornoyd/glad |
| Etre malade | Vaere syk |
| Etre en retard | Vaere forsinket |
| Etre a l'heure | Vaere i tide |
| Il est quelle heure ? | Hva er klokken? |`,
    },
    {
      id: 'fransk-1-10-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse uttrykkene?',
        subTasks: [
          { label: 'a', task: 'Je suis fatigue.', solution: 'Jeg er trott.' },
          { label: 'b', task: 'Il est malade.', solution: 'Han er syk.' },
          { label: 'c', task: 'Elle est en retard.', solution: 'Hun er forsinket.' },
          { label: 'd', task: 'Nous sommes contents.', solution: 'Vi er glade/fornoeyde.' },
        ],
        solution: 'a) Jeg er trott. b) Han er syk. c) Hun er forsinket. d) Vi er glade/fornoeyde.',
        hints: ['fatigue = trott', 'malade = syk', 'en retard = forsinket'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: Le verbe avoir - Verbet "a ha"
// ============================================================================

export const CHAPTER_FRANSK_1_10_2: TextbookChapter = {
  id: 'fransk-1-10-2',
  courseId: 'fransk-1',
  chapterNumber: '10.2',
  title: 'Le verbe "avoir"',
  subtitle: 'Verbet "a ha"',
  description: 'Laer a boye verbet "avoir" (a ha) i presens og vanlige uttrykk med avoir.',
  estimatedMinutes: 40,
  competenceGoals: [
    'boye verbet "avoir" i alle personer',
    'bruke vanlige uttrykk med "avoir" (avoir faim, avoir soif, avoir X ans)',
  ],
  content: [
    {
      id: 'fransk-1-10-2-intro',
      type: 'text',
      content: `## Verbet "avoir" - a ha

"Avoir" er et av de viktigste verbene pa fransk. Det brukes til a snakke om hva man har, men ogsa i mange faste uttrykk der norsk bruker "a vaere". For eksempel sier man pa fransk "j'ai faim" (jeg har sult) i stedet for "jeg er sulten".`,
    },
    {
      id: 'fransk-1-10-2-text-1',
      type: 'text',
      content: `## Boyning av "avoir" i presens

| Person | Fransk | Norsk |
|--------|--------|-------|
| j' | ai | jeg har |
| tu | as | du har |
| il/elle/on | a | han/hun/man har |
| nous | avons | vi har |
| vous | avez | dere har / De har |
| ils/elles | ont | de har |

**Merk:** "je" blir "j'" foran vokal: j'ai (ikke "je ai").`,
    },
    {
      id: 'fransk-1-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Boyning',
      problem: `Fyll inn riktig form av "avoir":
a) J' ___ un chien.
b) Tu ___ les yeux bleus.
c) Elle ___ un chat.`,
      solution: `a) J'**ai** un chien. (Jeg har en hund.)
b) Tu **as** les yeux bleus. (Du har bla oyne.)
c) Elle **a** un chat. (Hun har en katt.)`,
    },
    {
      id: 'fransk-1-10-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "avoir".',
        subTasks: [
          { label: 'a', task: "J' ___ une voiture.", solution: 'ai' },
          { label: 'b', task: 'Tu ___ un velo.', solution: 'as' },
          { label: 'c', task: 'Il ___ un frere.', solution: 'a' },
          { label: 'd', task: 'Nous ___ deux chats.', solution: 'avons' },
        ],
        solution: 'a) ai, b) as, c) a, d) avons',
        hints: ["j' -> ai", 'tu -> as', 'il/elle -> a', 'nous -> avons'],
      },
    },
    {
      id: 'fransk-1-10-2-text-2',
      type: 'text',
      content: `## Bruk av "avoir"

"Avoir" brukes til a:

1. **Snakke om eierskap:**
   - J'ai un telephone. (Jeg har en telefon.)
   - Elle a une grande maison. (Hun har et stort hus.)

2. **Snakke om familie:**
   - J'ai deux freres. (Jeg har to brodre.)
   - Il a une soeur. (Han har en soster.)

3. **Si alder (viktig - fransk bruker avoir, ikke etre!):**
   - J'ai 16 ans. (Jeg er 16 ar.)
   - Quel age as-tu ? (Hvor gammel er du?)

4. **Faste uttrykk:**
   - J'ai faim. (Jeg er sulten. / Bokstavelig: Jeg har sult.)
   - J'ai soif. (Jeg er torst.)
   - J'ai besoin de... (Jeg trenger...)`,
    },
    {
      id: 'fransk-1-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruk av avoir',
      problem: `Oversett til fransk:
a) Jeg har en hund.
b) Han har en bror.
c) Jeg er 16 ar gammel.`,
      solution: `a) J'ai un chien.
b) Il a un frere.
c) J'ai 16 ans.

Merk: For alder bruker man "avoir" pa fransk: J'ai 16 ans (bokstavelig: Jeg har 16 ar).`,
    },
    {
      id: 'fransk-1-10-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Bruk riktig form av "avoir".',
        subTasks: [
          { label: 'a', task: 'Hun har en soster.', solution: 'Elle a une soeur.' },
          { label: 'b', task: 'Dere har en bil.', solution: 'Vous avez une voiture.' },
          { label: 'c', task: 'De har to barn.', solution: 'Ils ont deux enfants.' },
        ],
        solution: 'a) Elle a une soeur. b) Vous avez une voiture. c) Ils ont deux enfants.',
        hints: ['elle -> a', 'vous -> avez', 'ils -> ont'],
      },
    },
    {
      id: 'fransk-1-10-2-text-3',
      type: 'text',
      content: `## Viktige uttrykk med "avoir"

Pa fransk bruker man "avoir" der norsk bruker "a vaere" i mange tilfeller:

| Fransk | Norsk (bokstavelig) | Norsk (naturlig) |
|--------|---------------------|------------------|
| avoir faim | ha sult | vaere sulten |
| avoir soif | ha torst | vaere torst |
| avoir X ans | ha X ar | vaere X ar gammel |
| avoir besoin de | ha behov for | trenge |
| avoir peur | ha frykt | vaere redd |
| avoir chaud | ha varmt | vaere varm |
| avoir froid | ha kaldt | vaere kald |
| avoir raison | ha rett | ha rett |
| avoir sommeil | ha sovn | vaere trott/sovnig |`,
    },
    {
      id: 'fransk-1-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Uttrykk med avoir',
      problem: `Oversett til fransk:
a) Jeg er sulten.
b) Hvor gammel er du?
c) Vi trenger hjelp.`,
      solution: `a) J'ai faim. (Bokstavelig: Jeg har sult.)
b) Quel age as-tu ? (Bokstavelig: Hvilken alder har du?)
c) Nous avons besoin d'aide.`,
    },
    {
      id: 'fransk-1-10-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Bruk riktig uttrykk med "avoir".',
        subTasks: [
          { label: 'a', task: 'Jeg er torst.', solution: "J'ai soif." },
          { label: 'b', task: 'Hun er 17 ar gammel.', solution: 'Elle a 17 ans.' },
          { label: 'c', task: 'Vi er redde.', solution: 'Nous avons peur.' },
        ],
        solution: "a) J'ai soif. b) Elle a 17 ans. c) Nous avons peur.",
        hints: ['Bruk avoir, ikke etre!', 'soif = torst, peur = frykt/redd'],
      },
    },
    {
      id: 'fransk-1-10-2-text-4',
      type: 'text',
      content: `## Oppsummering - avoir vs. etre

| Uttrykk | Verb | Eksempel |
|---------|------|----------|
| Vaere sulten | avoir | J'ai faim. |
| Vaere torst | avoir | J'ai soif. |
| Vaere X ar | avoir | J'ai 16 ans. |
| Vaere trott | etre | Je suis fatigue(e). |
| Vaere glad | etre | Je suis content(e). |
| Vaere syk | etre | Je suis malade. |

**Hovedregel:** Fysiske behov (sult, torst, kulde, varme) og alder bruker **avoir**. Tilstander og egenskaper bruker **etre**.`,
    },
    {
      id: 'fransk-1-10-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse uttrykkene?',
        subTasks: [
          { label: 'a', task: "J'ai faim.", solution: 'Jeg er sulten.' },
          { label: 'b', task: 'Tu as raison.', solution: 'Du har rett.' },
          { label: 'c', task: 'Il a peur.', solution: 'Han er redd.' },
          { label: 'd', task: 'Elle a 20 ans.', solution: 'Hun er 20 ar gammel.' },
        ],
        solution: 'a) Jeg er sulten. b) Du har rett. c) Han er redd. d) Hun er 20 ar gammel.',
        hints: ['Pa fransk sier man "ha sult" i stedet for "vaere sulten"', 'avoir X ans = vaere X ar gammel'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Les verbes reguliers - Regelmessige verb
// ============================================================================

export const CHAPTER_FRANSK_1_10_3: TextbookChapter = {
  id: 'fransk-1-10-3',
  courseId: 'fransk-1',
  chapterNumber: '10.3',
  title: 'Les verbes reguliers',
  subtitle: 'Regelmessige verb',
  description: 'Laer a boye regelmessige verb i presens: -er verb og -ir verb.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstae monsteret for regelmessige -er verb og -ir verb',
    'boye vanlige regelmessige verb i alle personer',
  ],
  content: [
    {
      id: 'fransk-1-10-3-intro',
      type: 'text',
      content: `## Regelmessige verb pa fransk

De fleste franske verb er regelmessige og folger faste monstre. Det finnes tre grupper:

1. **1. gruppe: -er verb** (den storste gruppen, f.eks. parler, manger, jouer)
2. **2. gruppe: -ir verb** (f.eks. finir, choisir)
3. **3. gruppe: uregelrette verb** (f.eks. etre, avoir, aller)

I dette kapittelet laerer du de to forste gruppene.`,
    },
    {
      id: 'fransk-1-10-3-text-1',
      type: 'text',
      content: `## 1. gruppe: -ER verb

Vi tar verbet **parler** (a snakke) som eksempel. Stammen er "parl-":

| Person | Endelse | parler |
|--------|---------|--------|
| je | -e | parle |
| tu | -es | parles |
| il/elle/on | -e | parle |
| nous | -ons | parlons |
| vous | -ez | parlez |
| ils/elles | -ent | parlent |

**Merk:** Endelsene -e, -es og -ent er **stumme** (uttales ikke). Dermed lyder je parle, tu parles, il parle og ils parlent LIKT!`,
    },
    {
      id: 'fransk-1-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Boye "manger" (a spise)',
      problem: `Boy verbet "manger" i alle personer:
- Stamme: mang-
- Legg til endelsene: -e, -es, -e, -eons (NB!), -ez, -ent`,
      solution: `| Person | manger |
|--------|--------|
| je | mange |
| tu | manges |
| il/elle | mange |
| nous | mang**e**ons |
| vous | mangez |
| ils/elles | mangent |

Merk: Ved "nous" beholder vi -e- for a bevare den myke g-lyden: mangeons (ikke mangons).`,
    },
    {
      id: 'fransk-1-10-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "parler" (a snakke).',
        subTasks: [
          { label: 'a', task: 'Je ___ francais.', solution: 'parle' },
          { label: 'b', task: 'Tu ___ norvegien.', solution: 'parles' },
          { label: 'c', task: 'Elle ___ anglais.', solution: 'parle' },
          { label: 'd', task: 'Nous ___ espagnol.', solution: 'parlons' },
        ],
        solution: 'a) parle, b) parles, c) parle, d) parlons',
        hints: ['je -> -e', 'tu -> -es', 'il/elle -> -e', 'nous -> -ons'],
      },
    },
    {
      id: 'fransk-1-10-3-text-2',
      type: 'text',
      content: `## Vanlige -ER verb

| Fransk | Norsk |
|--------|-------|
| parler | snakke |
| manger | spise |
| jouer | spille/leke |
| habiter | bo |
| acheter | kjope |
| ecouter | hore/lytte |
| regarder | se pa |
| travailler | arbeide |
| danser | danse |
| cuisiner | lage mat |
| aimer | like/elske |
| detester | hate |`,
    },
    {
      id: 'fransk-1-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Flere -er verb',
      problem: `Boy verbene "jouer" (spille) og "habiter" (bo) med "je" og "il":
- jouer (spille)
- habiter (bo)`,
      solution: `**jouer:**
- je jou**e** (jeg spiller)
- il jou**e** (han spiller)

**habiter:**
- j'habit**e** (jeg bor) (NB: j' foran vokal)
- il habit**e** (han bor)`,
    },
    {
      id: 'fransk-1-10-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig verbform.',
        subTasks: [
          { label: 'a', task: "J' ___ a Oslo. (habiter)", solution: 'habite' },
          { label: 'b', task: 'Il ___ au football. (jouer)', solution: 'joue' },
          { label: 'c', task: 'Nous ___ la musique. (ecouter)', solution: 'ecoutons' },
          { label: 'd', task: 'Vous ___ la television. (regarder)', solution: 'regardez' },
        ],
        solution: 'a) habite, b) joue, c) ecoutons, d) regardez',
        hints: ['Finn stammen og legg til riktig endelse', "Foran vokal: je -> j'"],
      },
    },
    {
      id: 'fransk-1-10-3-text-3',
      type: 'text',
      content: `## 2. gruppe: -IR verb

Verb som ender pa **-ir** og har boyning med **-iss-** i flertall:

Vi tar verbet **finir** (a avslutte) som eksempel:

| Person | Endelse | finir |
|--------|---------|-------|
| je | -is | finis |
| tu | -is | finis |
| il/elle/on | -it | finit |
| nous | -issons | finissons |
| vous | -issez | finissez |
| ils/elles | -issent | finissent |

**Andre -ir verb:** choisir (velge), remplir (fylle), reussir (lykkes), grandir (vokse).`,
    },
    {
      id: 'fransk-1-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: -ir verb - "choisir" (a velge)',
      problem: `Boy "choisir" (velge) med alle personer:`,
      solution: `| Person | choisir |
|--------|---------|
| je | choisis |
| tu | choisis |
| il/elle | choisit |
| nous | choisissons |
| vous | choisissez |
| ils/elles | choisissent |

Merk -iss- i nous, vous og ils/elles!`,
    },
    {
      id: 'fransk-1-10-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig form av "finir" (a avslutte).',
        subTasks: [
          { label: 'a', task: 'Je ___ mes devoirs.', solution: 'finis' },
          { label: 'b', task: 'Il ___ son travail.', solution: 'finit' },
          { label: 'c', task: 'Nous ___ le livre.', solution: 'finissons' },
        ],
        solution: 'a) finis, b) finit, c) finissons',
        hints: ['je/tu -> -is', 'il/elle -> -it', 'nous -> -issons'],
      },
    },
    {
      id: 'fransk-1-10-3-text-4',
      type: 'text',
      content: `## Setninger med regelmessige verb

| Fransk | Norsk |
|--------|-------|
| J'aime jouer au football. | Jeg liker a spille fotball. |
| Il parle francais. | Han snakker fransk. |
| Nous habitons a Oslo. | Vi bor i Oslo. |
| Elle achete un livre. | Hun kjoper en bok. |
| Ils finissent les devoirs. | De avslutter leksene. |`,
    },
    {
      id: 'fransk-1-10-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg snakker fransk.', solution: 'Je parle francais.' },
          { label: 'b', task: 'Hun bor i Paris.', solution: 'Elle habite a Paris.' },
          { label: 'c', task: 'Vi lager mat.', solution: 'Nous cuisinons.' },
          { label: 'd', task: 'Han velger en bok.', solution: 'Il choisit un livre.' },
        ],
        solution: 'a) Je parle francais. b) Elle habite a Paris. c) Nous cuisinons. d) Il choisit un livre.',
        hints: ['Bruk riktig verbform basert pa personen', '-er verb: je -e, il -e, nous -ons', '-ir verb: il -it'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.4: Revision - Repetisjon
// ============================================================================

export const CHAPTER_FRANSK_1_10_4: TextbookChapter = {
  id: 'fransk-1-10-4',
  courseId: 'fransk-1',
  chapterNumber: '10.4',
  title: 'Revision',
  subtitle: 'Repetisjon',
  description: 'Repetisjon av alt du har laert i Fransk Niva 1.',
  estimatedMinutes: 50,
  competenceGoals: [
    'repetere og befeste kunnskap fra Niva 1',
    'bruke ordforrad og grammatikk fra hele kurset',
    'kommunisere i enkle hverdagssituasjoner pa fransk',
  ],
  content: [
    {
      id: 'fransk-1-10-4-intro',
      type: 'text',
      content: `## Repetisjon av Fransk Niva 1

Felicitations ! (Gratulerer!) Du har nadd slutten av Fransk Niva 1. I dette kapittelet repeterer vi de viktigste temaene du har laert. Bruk dette kapittelet til a teste deg selv og ove pa det du har laert.`,
    },
    {
      id: 'fransk-1-10-4-text-1',
      type: 'text',
      content: `## Oversikt over verbene "etre" og "avoir"

**etre (a vaere)**
| Person | Form |
|--------|------|
| je | suis |
| tu | es |
| il/elle/on | est |
| nous | sommes |
| vous | etes |
| ils/elles | sont |

**avoir (a ha)**
| Person | Form |
|--------|------|
| j' | ai |
| tu | as |
| il/elle/on | a |
| nous | avons |
| vous | avez |
| ils/elles | ont |`,
    },
    {
      id: 'fransk-1-10-4-example-1',
      type: 'example',
      title: 'Eksempel 1: etre og avoir',
      problem: `Fyll inn riktig form av "etre" eller "avoir":
a) J' ___ 16 ans. (avoir)
b) Il ___ un chien. (avoir)
c) Nous ___ de Norvege. (etre)`,
      solution: `a) J'**ai** 16 ans.
b) Il **a** un chien.
c) Nous **sommes** de Norvege.`,
    },
    {
      id: 'fransk-1-10-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig form av "etre" eller "avoir".',
        subTasks: [
          { label: 'a', task: 'Tu ___ gentil. (etre)', solution: 'es' },
          { label: 'b', task: 'Elle ___ un chat. (avoir)', solution: 'a' },
          { label: 'c', task: 'Vous ___ fatigues. (etre)', solution: 'etes' },
          { label: 'd', task: 'Nous ___ faim. (avoir)', solution: 'avons' },
        ],
        solution: 'a) es, b) a, c) etes, d) avons',
        hints: ['etre: je suis, tu es, il est...', "avoir: j'ai, tu as, il a..."],
      },
    },
    {
      id: 'fransk-1-10-4-text-2',
      type: 'text',
      content: `## Regelmessige verb - Boyningsmonster

**-ER verb (1. gruppe)**
| Person | Endelse | Eksempel: parler |
|--------|---------|------------------|
| je | -e | parle |
| tu | -es | parles |
| il/elle | -e | parle |
| nous | -ons | parlons |
| vous | -ez | parlez |
| ils/elles | -ent | parlent |

**-IR verb (2. gruppe)**
| Person | Endelse | Eksempel: finir |
|--------|---------|-----------------|
| je | -is | finis |
| tu | -is | finis |
| il/elle | -it | finit |
| nous | -issons | finissons |
| vous | -issez | finissez |
| ils/elles | -issent | finissent |

**Vanlige verb:** parler, manger, habiter, jouer, ecouter, finir, choisir`,
    },
    {
      id: 'fransk-1-10-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Regelmessige verb',
      problem: `Boy verbene:
a) parler med "je"
b) habiter med "il"
c) finir med "nous"`,
      solution: `a) je parl**e**
b) il habit**e**
c) nous fin**issons**`,
    },
    {
      id: 'fransk-1-10-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig verbform.',
        subTasks: [
          { label: 'a', task: 'Il ___ la musique. (ecouter)', solution: 'ecoute' },
          { label: 'b', task: "J' ___ a Oslo. (habiter)", solution: 'habite' },
          { label: 'c', task: 'Tu ___ bien francais. (parler)', solution: 'parles' },
          { label: 'd', task: 'Elle ___ ses devoirs. (finir)', solution: 'finit' },
        ],
        solution: 'a) ecoute, b) habite, c) parles, d) finit',
        hints: ['Finn stammen og legg til riktig endelse', '-er verb: il -> -e, -ir verb: elle -> -it'],
      },
    },
    {
      id: 'fransk-1-10-4-text-3',
      type: 'text',
      content: `## Viktig ordforrad - Oppsummering

**Hilsener:**
- Bonjour, Bonsoir, Salut, Au revoir, A bientot

**Familie:**
- la mere, le pere, la soeur, le frere, les parents

**Mat og drikke:**
- le pain, le fromage, l'eau, le lait, le petit dejeuner

**Transport:**
- la voiture, le train, le bus, l'avion, le velo

**I byen:**
- la gare, la poste, la pharmacie, la boulangerie`,
    },
    {
      id: 'fransk-1-10-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Ordforrad',
      problem: `Oversett til norsk:
a) la gare
b) le petit dejeuner
c) la soeur`,
      solution: `a) togstasjonen
b) frokosten
c) sosteren`,
    },
    {
      id: 'fransk-1-10-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med riktig artikkel.',
        subTasks: [
          { label: 'a', task: 'bilen', solution: 'la voiture' },
          { label: 'b', task: 'apoteket', solution: 'la pharmacie' },
          { label: 'c', task: 'billetten', solution: 'le billet' },
          { label: 'd', task: 'resepsjonen', solution: 'la reception' },
        ],
        solution: 'a) la voiture, b) la pharmacie, c) le billet, d) la reception',
        hints: ['Husk artikkel: le (hankjonn), la (hunkjonn)'],
      },
    },
    {
      id: 'fransk-1-10-4-text-4',
      type: 'text',
      content: `## Nyttige fraser

**Pa togstasjonen:**
- Je voudrais un billet pour..., s'il vous plait.
- A quelle heure part le train ?
- De quel quai ?

**Pa hotellet:**
- Avez-vous une chambre de libre ?
- Combien coute la chambre par nuit ?
- Le petit dejeuner est compris ?

**Sporre om veien:**
- Comment aller a... ?
- Ou est... ?
- Allez tout droit / Tournez a gauche / a droite.`,
    },
    {
      id: 'fransk-1-10-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-10-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'En billett til Paris, takk.', solution: "Je voudrais un billet pour Paris, s'il vous plait." },
          { label: 'b', task: 'Har dere et ledig rom?', solution: 'Avez-vous une chambre de libre ?' },
          { label: 'c', task: 'Hvor er togstasjonen?', solution: 'Ou est la gare ?' },
          { label: 'd', task: 'Ga rett fram.', solution: 'Allez tout droit.' },
        ],
        solution: "a) Je voudrais un billet pour Paris, s'il vous plait. b) Avez-vous une chambre de libre ? c) Ou est la gare ? d) Allez tout droit.",
        hints: ['pour = til (med byer)', 'libre = ledig', 'tout droit = rett fram'],
      },
    },
    {
      id: 'fransk-1-10-4-text-5',
      type: 'text',
      content: `## Hva har du laert?

I Fransk Niva 1 har du laert:

1. **Hilsener og hoflighetsfraser** - Bonjour, Merci, S'il vous plait
2. **Presentere deg selv** - Je m'appelle..., Je viens de...
3. **Tall og farger** - un, deux, trois... rouge, bleu, vert...
4. **Familie** - la mere, le pere, la soeur, le frere
5. **Tid og dager** - lundi, mardi, mercredi... Il est 10 heures.
6. **Mat og restaurantbesok** - Je voudrais..., L'addition, s'il vous plait.
7. **Transport og reise** - le train, le billet, changer
8. **I byen** - la gare, la poste, Ou est... ?
9. **Pa hotellet** - la chambre, petit dejeuner compris
10. **Verb** - etre, avoir, regelmessige -er og -ir verb

**Bonne chance pour le Niveau 2 !** (Lykke til med Niva 2!)`,
    },
    {
      id: 'fransk-1-10-4-note-1',
      type: 'note',
      title: 'Tips til videre laering',
      content: `For a fortsette a forbedre fransken din:
- Hor pa fransk musikk og se franske filmer
- Ov deg pa a snakke hoyt
- Skriv dagbok pa fransk
- Bruk sprakappar som Duolingo
- Finn en sprakpartner a ove med
- Prov a lese enkle franske tekster eller tegneserier (bandes dessinees)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_1_CHAPTERS_9_10: TextbookChapter[] = [
  CHAPTER_FRANSK_1_9_1,
  CHAPTER_FRANSK_1_9_2,
  CHAPTER_FRANSK_1_9_3,
  CHAPTER_FRANSK_1_9_4,
  CHAPTER_FRANSK_1_10_1,
  CHAPTER_FRANSK_1_10_2,
  CHAPTER_FRANSK_1_10_3,
  CHAPTER_FRANSK_1_10_4,
];
