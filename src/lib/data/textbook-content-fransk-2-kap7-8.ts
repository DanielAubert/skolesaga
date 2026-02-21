/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Nivå 2 - Kapittel 7-8
 * Litteratur og media, Samfunn og dagligliv
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: La litterature francaise - Fransk litteratur
// ============================================================================

export const CHAPTER_FRANSK_2_7_1: TextbookChapter = {
  id: 'fransk-2-7-1',
  courseId: 'fransk-2',
  chapterNumber: '7.1',
  title: 'La litterature francaise',
  subtitle: 'Fransk litteratur',
  description: 'Bli kjent med kjente franske forfattere og litterære verk som Le Petit Prince og Les Miserables.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige franske forfattere og verk',
    'kunne snakke om litteratur og lesevaner på fransk',
  ],
  content: [
    {
      id: 'fransk-2-7-1-intro',
      type: 'text',
      content: `## La litterature francaise

La France est connue pour sa riche tradition litteraire. Des auteurs comme Victor Hugo, Antoine de Saint-Exupery et Albert Camus ont marque la litterature mondiale.

Frankrike er kjent for sin rike litterære tradisjon. Forfattere som Victor Hugo, Antoine de Saint-Exupery og Albert Camus har satt sitt preg på verdenslitteraturen.`,
    },
    {
      id: 'fransk-2-7-1-def-1',
      type: 'definition',
      title: 'Vokabular: Litteratur',
      content: `**Ord knyttet til litteratur:**

| Fransk | Norsk |
|--------|-------|
| un livre | en bok |
| un roman | en roman |
| une nouvelle | en novelle |
| un poeme | et dikt |
| un auteur / une auteure | en forfatter |
| un ecrivain / une ecrivaine | en forfatter |
| un personnage | en karakter/person |
| l'intrigue (f.) | handlingen |
| le chapitre | kapittelet |`,
    },
    {
      id: 'fransk-2-7-1-def-2',
      type: 'definition',
      title: 'Kjente franske verk',
      content: `**Viktige franske bøker:**

| Verk | Forfatter | År |
|------|-----------|-----|
| Le Petit Prince | Antoine de Saint-Exupery | 1943 |
| Les Miserables | Victor Hugo | 1862 |
| L'Etranger | Albert Camus | 1942 |
| Le Comte de Monte-Cristo | Alexandre Dumas | 1844 |
| Madame Bovary | Gustave Flaubert | 1857 |
| Les Fleurs du mal | Charles Baudelaire | 1857 |`,
    },
    {
      id: 'fransk-2-7-1-text-1',
      type: 'text',
      content: `## Le Petit Prince

Le Petit Prince (Den lille prinsen) er en av verdens mest leste bøker. Den handler om en liten prins som reiser fra planet til planet og møter ulike mennesker. Boken inneholder viktige livslærdommer om vennskap, kjærlighet og det å se med hjertet.

**Kjent sitat:** *"On ne voit bien qu'avec le coeur. L'essentiel est invisible pour les yeux."*
(Man ser bare godt med hjertet. Det vesentlige er usynlig for øynene.)`,
    },
    {
      id: 'fransk-2-7-1-tip-1',
      type: 'tip',
      content: `Le Petit Prince er oversatt til over 300 språk og er en utmerket bok å lese på fransk for de som lærer språket. Teksten er relativt enkel, men inneholder dype tanker. Prøv å lese den på fransk!`,
    },
    {
      id: 'fransk-2-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Snakke om bøker',
      problem: `Oversett til norsk:

a) J'ai lu Le Petit Prince.
b) C'est un roman interessant.
c) L'auteur est Victor Hugo.
d) L'histoire se passe a Paris.`,
      solution: `a) J'ai lu Le Petit Prince = **Jeg har lest Den lille prinsen.**
b) C'est un roman interessant = **Det er en interessant roman.**
c) L'auteur est Victor Hugo = **Forfatteren er Victor Hugo.**
d) L'histoire se passe a Paris = **Historien finner sted i Paris.**

**Nyttig uttrykk:** "se passer" = å finne sted, a utspille seg`,
    },
    {
      id: 'fransk-2-7-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-1-ex-1',
        number: '7.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'en bok', solution: 'un livre', answer: 'un livre' },
          { label: 'b', task: 'en roman', solution: 'un roman', answer: 'un roman' },
          { label: 'c', task: 'en forfatter', solution: 'un auteur / un ecrivain', answer: 'un auteur' },
          { label: 'd', task: 'et dikt', solution: 'un poeme', answer: 'un poeme' },
        ],
        solution: 'a) un livre, b) un roman, c) un auteur / un ecrivain, d) un poeme',
        hints: ['Livre er hankjonn (un)', 'Poeme er også hankjonn til tross for -e ending'],
      },
    },
    {
      id: 'fransk-2-7-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Litterære sjangre',
      problem: `Koble sjangeren med definisjonen:

a) un roman
b) une nouvelle
c) un poeme
d) une piece de theatre`,
      solution: `a) un roman = **en lang fortelling med flere kapitler** (en roman)
b) une nouvelle = **en kort fortelling** (en novelle)
c) un poeme = **en tekst med rim og rytme** (et dikt)
d) une piece de theatre = **en tekst beregnet for fremføring på scene** (et skuespill)

**Ekstra sjangre:**
- un conte = et eventyr
- une bande dessinee (BD) = en tegneserie
- une biographie = en biografi`,
    },
    {
      id: 'fransk-2-7-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvilket verk hører til hvilken forfatter?',
        subTasks: [
          { label: 'a', task: 'Le Petit Prince', solution: 'Antoine de Saint-Exupery', answer: 'Saint-Exupery' },
          { label: 'b', task: 'Les Miserables', solution: 'Victor Hugo', answer: 'Victor Hugo' },
          { label: 'c', task: "L'Etranger", solution: 'Albert Camus', answer: 'Albert Camus' },
          { label: 'd', task: 'Madame Bovary', solution: 'Gustave Flaubert', answer: 'Gustave Flaubert' },
        ],
        solution: 'a) Saint-Exupery, b) Victor Hugo, c) Albert Camus, d) Gustave Flaubert',
        hints: ['Saint-Exupery var også pilot', 'Victor Hugo levde på 1800-tallet'],
      },
    },
    {
      id: 'fransk-2-7-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Uttrykke meninger om bøker',
      problem: `Oversett til fransk:

a) Jeg liker denne boken.
b) Historien er spennende.
c) Jeg foretrekker romaner.`,
      solution: `a) **J'aime ce livre.**
b) **L'histoire est passionnante.**
c) **Je prefere les romans.**

**Nyttige adjektiver for å beskrive bøker:**
- passionnant(e) = spennende
- ennuyeux/ennuyeuse = kjedelig
- triste = trist
- drole = morsom
- captivant(e) = fengslende`,
    },
    {
      id: 'fransk-2-7-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg har lest denne boken.', solution: "J'ai lu ce livre.", answer: "J'ai lu ce livre" },
          { label: 'b', task: 'Historien er trist.', solution: "L'histoire est triste.", answer: "L'histoire est triste" },
          { label: 'c', task: 'Forfatteren er fransk.', solution: "L'auteur est francais.", answer: "L'auteur est francais" },
        ],
        solution: "a) J'ai lu ce livre, b) L'histoire est triste, c) L'auteur est francais",
        hints: ['Lire i passe compose: j\'ai lu', 'Triste er lik i hankjonn og hunkjonn'],
      },
    },
    {
      id: 'fransk-2-7-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort bokanmeldelse på fransk (4-5 setninger). Presenter boken, forfatteren, handlingen og din mening.',
        subTasks: [
          { label: 'a', task: 'Presenter boken og forfatteren.', solution: "J'ai lu [tittel] de [forfatter]." },
          { label: 'b', task: 'Beskriv kort handlingen.', solution: "L'histoire se passe a... / C'est l'histoire de..." },
          { label: 'c', task: 'Gi din mening.', solution: "J'ai aime ce livre parce que... / Je recommande ce livre." },
        ],
        solution: "Eksempel: \"J'ai lu Le Petit Prince de Saint-Exupery. C'est l'histoire d'un petit prince qui voyage de planete en planete. L'histoire est belle et poetique. J'ai beaucoup aime ce livre parce que c'est a la fois simple et profond. Je le recommande a tout le monde.\"",
        hints: ['a la fois = både/på en og samme tid', 'recommander = å anbefale'],
      },
    },
    {
      id: 'fransk-2-7-1-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `Frankrike har et sterkt forhold til litteratur. Hvert år i november deles prestisjefylte litteraturpriser ut, blant annet Prix Goncourt og Prix Femina. Franske bokhandlere (les librairies) er beskyttet av lov - det er forbudt å gi mer enn 5% rabatt på bøker, noe som støtter små, uavhengige bokhandlere over hele landet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: La presse et les medias - Presse og media
// ============================================================================

export const CHAPTER_FRANSK_2_7_2: TextbookChapter = {
  id: 'fransk-2-7-2',
  courseId: 'fransk-2',
  chapterNumber: '7.2',
  title: 'La presse et les medias',
  subtitle: 'Presse og media',
  description: 'Lær vokabular for aviser, TV, radio og diskusjon av medier på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lære vokabular knyttet til presse og media',
    'kunne diskutere medievaner og nyheter på fransk',
  ],
  content: [
    {
      id: 'fransk-2-7-2-intro',
      type: 'text',
      content: `## La presse et les medias

Les medias jouent un role important dans la societe francaise. Les Francais s'informent a travers les journaux, la television, la radio et Internet.

Mediene spiller en viktig rolle i det franske samfunnet. Franskmenn holder seg informert gjennom aviser, TV, radio og internett.`,
    },
    {
      id: 'fransk-2-7-2-def-1',
      type: 'definition',
      title: 'Vokabular: Medietyper',
      content: `**Ulike medier:**

| Fransk | Norsk |
|--------|-------|
| un journal | en avis |
| un magazine / une revue | et magasin/blad |
| la television (la tele) | fjernsynet (TV) |
| la radio | radioen |
| Internet (m.) | internett |
| les reseaux sociaux | sosiale medier |
| un site web | en nettside |
| un article | en artikkel |
| les informations (les infos) | nyhetene |`,
    },
    {
      id: 'fransk-2-7-2-def-2',
      type: 'definition',
      title: 'Vokabular: Avis og journalistikk',
      content: `**Ord for journalistikk:**

| Fransk | Norsk |
|--------|-------|
| un journaliste | en journalist |
| un reporter | en reporter |
| une interview | et intervju |
| un titre | en overskrift |
| la une | forsiden |
| un quotidien | en dagsavis |
| un hebdomadaire | et ukentlig magasin |
| la liberte de la presse | pressefrihet |`,
    },
    {
      id: 'fransk-2-7-2-text-1',
      type: 'text',
      content: `## Franske aviser og medier

**Kjente franske aviser:**
- **Le Monde** - den mest prestisjefylte dagsavisen
- **Le Figaro** - konservativ dagsavis
- **Liberation** - venstreorientert dagsavis
- **L'Equipe** - sportsavis

**TV-kanaler:**
- France 2, France 3 - offentlige kanaler
- TF1 - den største kommersielle kanalen
- Canal+ - betalingskanal`,
    },
    {
      id: 'fransk-2-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Medievaner',
      problem: `Oversett til norsk:

a) Je lis le journal tous les jours.
b) Je regarde les informations a la tele.
c) Il ecoute la radio le matin.
d) Nous suivons les actualites sur Internet.`,
      solution: `a) Je lis le journal tous les jours = **Jeg leser avisen hver dag.**
b) Je regarde les informations a la tele = **Jeg ser på nyhetene på TV.**
c) Il ecoute la radio le matin = **Han hører på radioen om morgenen.**
d) Nous suivons les actualites sur Internet = **Vi følger nyhetssakene på internett.**

**Nyttige verb:**
- lire = å lese
- regarder = å se på
- ecouter = å høre på
- suivre = å følge`,
    },
    {
      id: 'fransk-2-7-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-2-ex-1',
        number: '7.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'en avis', solution: 'un journal', answer: 'un journal' },
          { label: 'b', task: 'nyhetene', solution: 'les informations / les infos', answer: 'les informations' },
          { label: 'c', task: 'sosiale medier', solution: 'les reseaux sociaux', answer: 'les reseaux sociaux' },
          { label: 'd', task: 'en journalist', solution: 'un/une journaliste', answer: 'un journaliste' },
        ],
        solution: 'a) un journal, b) les informations, c) les reseaux sociaux, d) un/une journaliste',
        hints: ['Journal kan også bety dagbok', 'Reseaux er flertall av reseau (nettverk)'],
      },
    },
    {
      id: 'fransk-2-7-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Diskutere nyheter',
      problem: `Les dialogen og svar:

A: Tu as lu les nouvelles aujourd'hui?
B: Oui, j'ai lu un article interessant sur le changement climatique.
A: Ou as-tu lu ca?
B: Sur le site du Monde.

a) Hva har person B lest?
b) Hvor har personen lest det?`,
      solution: `a) Person B har lest **en interessant artikkel om klimaendringer**.
b) Personen har lest det **på Le Mondes nettside**.

**Nyttige uttrykk:**
- Tu as lu...? = Har du lest...?
- un article sur... = en artikkel om...
- le changement climatique = klimaendringer`,
    },
    {
      id: 'fransk-2-7-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Je ___ le journal le matin. (leser)', solution: 'lis', answer: 'lis' },
          { label: 'b', task: 'Elle ___ les infos a la tele. (ser på)', solution: 'regarde', answer: 'regarde' },
          { label: 'c', task: 'Il ___ la radio en voiture. (hører på)', solution: 'ecoute', answer: 'ecoute' },
          { label: 'd', task: 'Nous ___ les reseaux sociaux. (bruker)', solution: 'utilisons', answer: 'utilisons' },
        ],
        solution: 'a) lis, b) regarde, c) ecoute, d) utilisons',
        hints: ['Lire: je lis, tu lis, il/elle lit', 'Utiliser = å bruke'],
      },
    },
    {
      id: 'fransk-2-7-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Uttrykke meninger om media',
      problem: `Oversett til fransk:

a) Jeg synes aviser er viktige.
b) Sosiale medier er populære blant unge.
c) Man ma være kritisk til nyheter.`,
      solution: `a) **Je trouve que les journaux sont importants.**
b) **Les reseaux sociaux sont populaires chez les jeunes.**
c) **Il faut etre critique envers les informations.**

**Nyttige uttrykk:**
- je trouve que = jeg synes at
- il faut = man ma
- chez les jeunes = blant unge`,
    },
    {
      id: 'fransk-2-7-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg ser på nyhetene hver kveld.', solution: 'Je regarde les informations chaque soir.', answer: 'Je regarde les informations chaque soir' },
          { label: 'b', task: 'Hun leser en artikkel.', solution: 'Elle lit un article.', answer: 'Elle lit un article' },
          { label: 'c', task: 'Vi hører på radio i bilen.', solution: 'Nous ecoutons la radio en voiture.', answer: 'Nous ecoutons la radio en voiture' },
        ],
        solution: 'a) Je regarde les informations chaque soir, b) Elle lit un article, c) Nous ecoutons la radio en voiture',
        hints: ['chaque = hver', 'en voiture = i bilen'],
      },
    },
    {
      id: 'fransk-2-7-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv om dine medievaner på fransk (4-5 setninger). Beskriv hvilke medier du bruker og hvorfor.',
        subTasks: [
          { label: 'a', task: 'Hvilke medier bruker du daglig?', solution: "J'utilise... / Je lis... / Je regarde..." },
          { label: 'b', task: 'Hvordan holder du deg oppdatert?', solution: 'Je suis les actualites sur...' },
          { label: 'c', task: 'Hva synes du om sosiale medier?', solution: 'Je pense que les reseaux sociaux sont...' },
        ],
        solution: "Eksempel: \"J'utilise surtout Internet et les reseaux sociaux pour m'informer. Le matin, je lis les nouvelles sur mon telephone. Je regarde rarement la television. Je pense que les reseaux sociaux sont pratiques, mais il faut verifier les informations. Je lis parfois Le Monde en ligne.\"",
        hints: ['surtout = fremfor alt', 'en ligne = på nett', 'verifier = å sjekke'],
      },
    },
    {
      id: 'fransk-2-7-2-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `Frankrike har en sterk tradisjon for pressefrihet. Organisasjonen Reporters sans frontieres (Reportere uten grenser) ble grunnlagt i Frankrike i 1985 og jobber for pressefrihet over hele verden. Avisen Le Monde, grunnlagt i 1944, regnes som en av verdens mest innflytelsesrike aviser.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Le cinema francais - Fransk film
// ============================================================================

export const CHAPTER_FRANSK_2_7_3: TextbookChapter = {
  id: 'fransk-2-7-3',
  courseId: 'fransk-2',
  chapterNumber: '7.3',
  title: 'Le cinema francais',
  subtitle: 'Fransk film',
  description: 'Lær filmvokabular og bli kjent med fransk film, blant annet Amelie og Les Intouchables.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til kjente franske filmer og regissører',
    'kunne diskutere film og gi meninger på fransk',
  ],
  content: [
    {
      id: 'fransk-2-7-3-intro',
      type: 'text',
      content: `## Le cinema francais

La France est le berceau du cinema! Les freres Lumiere ont invente le cinematographe en 1895. Aujourd'hui, le cinema francais est toujours tres important dans le monde.

Frankrike er filmens vugge! Brødrene Lumiere oppfant kinematografen i 1895. I dag er fransk film fortsatt veldig viktig i verden.`,
    },
    {
      id: 'fransk-2-7-3-def-1',
      type: 'definition',
      title: 'Vokabular: Film',
      content: `**Ord knyttet til film:**

| Fransk | Norsk |
|--------|-------|
| un film | en film |
| le cinema | kinoen / filmkunsten |
| un acteur / une actrice | en skuespiller |
| un realisateur / une realisatrice | en regissør |
| un role | en rolle |
| la scene | scenen |
| les sous-titres | undertekster |
| la bande-annonce | traileren |
| un scenario | et manus |`,
    },
    {
      id: 'fransk-2-7-3-def-2',
      type: 'definition',
      title: 'Filmsjangre',
      content: `**Les genres cinematographiques:**

| Fransk | Norsk |
|--------|-------|
| une comedie | en komedie |
| un drame | et drama |
| un film d'action | en actionfilm |
| un film d'horreur | en skrekkfilm |
| un film d'animation | en animasjonsfilm |
| un documentaire | en dokumentar |
| un film romantique | en romantisk film |
| un thriller / un film policier | en thriller/krimfilm |`,
    },
    {
      id: 'fransk-2-7-3-text-1',
      type: 'text',
      content: `## Kjente franske filmer

**Filmer du bør kjenne til:**
- **Amelie** (Le Fabuleux Destin d'Amelie Poulain, 2001) - en sjarmerende komedie om en ung kvinne i Paris
- **Les Intouchables** (2011) - en komedie/drama om vennskap mellom en rik lam mann og hans unge pleier
- **La Haine** (1995) - et drama om ungdom i Paris' forsteder
- **Le Diner de cons** (1998) - en klassisk komedie

**Kjente regissører:**
- Luc Besson, Jean-Pierre Jeunet, Francois Truffaut`,
    },
    {
      id: 'fransk-2-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Snakke om film',
      problem: `Oversett til norsk:

a) J'ai vu un film francais hier soir.
b) C'est une comedie tres drole.
c) L'actrice principale est Audrey Tautou.
d) Le film se passe a Paris.`,
      solution: `a) J'ai vu un film francais hier soir = **Jeg sa en fransk film i gar kveld.**
b) C'est une comedie tres drole = **Det er en veldig morsom komedie.**
c) L'actrice principale est Audrey Tautou = **Hovedskuespilleren er Audrey Tautou.**
d) Le film se passe a Paris = **Filmen finner sted i Paris.**

**Nyttige uttrykk:**
- voir un film = å se en film (passe compose: j'ai vu)
- hier soir = i gar kveld
- l'acteur/actrice principal(e) = hovedskuespilleren`,
    },
    {
      id: 'fransk-2-7-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-3-ex-1',
        number: '7.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'en film', solution: 'un film', answer: 'un film' },
          { label: 'b', task: 'en komedie', solution: 'une comedie', answer: 'une comedie' },
          { label: 'c', task: 'en skuespiller (kvinne)', solution: 'une actrice', answer: 'une actrice' },
          { label: 'd', task: 'en regissør (mann)', solution: 'un realisateur', answer: 'un realisateur' },
        ],
        solution: 'a) un film, b) une comedie, c) une actrice, d) un realisateur',
        hints: ['Film er hankjonn på fransk', 'Comedie er hunkjonn'],
      },
    },
    {
      id: 'fransk-2-7-3-tip-1',
      type: 'tip',
      content: `For a øve på fransk, prøv å se franske filmer med franske undertekster. Begynn med Les Intouchables - den er morsom og lett å følge. Du kan også prøve filmer med norske undertekster først for å forstå handlingen.`,
    },
    {
      id: 'fransk-2-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Gi meninger om film',
      problem: `Hvordan sier du følgende på fransk?

a) Jeg liker denne filmen.
b) Filmen var spennende.
c) Jeg foretrekker komedier.`,
      solution: `a) **J'aime ce film.** / **J'ai aime ce film.** (hvis du allerede har sett den)
b) **Le film etait passionnant.**
c) **Je prefere les comedies.**

**Adjektiver for film:**
- passionnant(e) = spennende
- ennuyeux/ennuyeuse = kjedelig
- touchant(e) = rørende
- drole = morsom
- effrayant(e) = skremmende`,
    },
    {
      id: 'fransk-2-7-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg sa en film i gar.', solution: "J'ai vu un film hier.", answer: "J'ai vu un film hier" },
          { label: 'b', task: 'Filmen var veldig bra.', solution: 'Le film etait tres bien.', answer: 'Le film etait tres bien' },
          { label: 'c', task: 'Jeg liker franske filmer.', solution: "J'aime les films francais.", answer: "J'aime les films francais" },
        ],
        solution: "a) J'ai vu un film hier, b) Le film etait tres bien, c) J'aime les films francais",
        hints: ['Voir i passe compose: j\'ai vu', 'Etait = var (imparfait av etre)'],
      },
    },
    {
      id: 'fransk-2-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Anbefale en film',
      problem: `Les og oversett:

Je te recommande le film "Les Intouchables". C'est un film drole et touchant. Il raconte l'histoire d'une amitie entre deux hommes tres differents. Les acteurs sont excellents!`,
      solution: `**Oversettelse:**
Jeg anbefaler filmen "Les Intouchables". Det er en morsom og rørende film. Den forteller historien om et vennskap mellom to veldig forskjellige menn. Skuespillerne er utmerkede!

**Nyttige uttrykk:**
- je te recommande = jeg anbefaler deg
- raconter l'histoire de = fortelle historien om
- une amitie = et vennskap`,
    },
    {
      id: 'fransk-2-7-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble filmsjangeren med den franske oversettelsen:',
        subTasks: [
          { label: 'a', task: 'skrekkfilm', solution: "un film d'horreur", answer: "un film d'horreur" },
          { label: 'b', task: 'dokumentar', solution: 'un documentaire', answer: 'un documentaire' },
          { label: 'c', task: 'actionfilm', solution: "un film d'action", answer: "un film d'action" },
          { label: 'd', task: 'krimfilm', solution: 'un film policier', answer: 'un film policier' },
        ],
        solution: "a) un film d'horreur, b) un documentaire, c) un film d'action, d) un film policier",
        hints: ['Horreur = skrekk', 'Policier kommer fra police (politi)'],
      },
    },
    {
      id: 'fransk-2-7-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort filmanmeldelse på fransk (4-5 setninger). Presenter filmen, sjangeren, handlingen og din mening.',
        subTasks: [
          { label: 'a', task: 'Presenter filmen og sjangeren.', solution: "J'ai vu le film... C'est un/une..." },
          { label: 'b', task: 'Beskriv handlingen kort.', solution: "Le film raconte l'histoire de..." },
          { label: 'c', task: 'Gi din mening og anbefaling.', solution: "J'ai aime/adore ce film parce que... Je le/la recommande." },
        ],
        solution: "Eksempel: \"J'ai vu le film Amelie. C'est une comedie romantique qui se passe a Paris. Le film raconte l'histoire d'une jeune femme qui decide d'aider les gens autour d'elle. J'ai adore ce film parce qu'il est drole et poetique. Je le recommande vivement!\"",
        hints: ['vivement = sterkt/varmt', 'les gens autour d\'elle = menneskene rundt henne'],
      },
    },
    {
      id: 'fransk-2-7-3-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `Det franske filmfestivalen i Cannes er en av verdens mest prestisjefylte filmfestivaler. Hvert år i mai samles filmstjerner og regissører på den røde løperen langs Croisette-boulevarden. Den gjeveste prisen er Palme d'Or (Gullpalmen). Cesar-prisene er den franske ekvivalenten til Oscar, og deles ut hvert år i Paris.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: La musique francophone - Franskspråklig musikk
// ============================================================================

export const CHAPTER_FRANSK_2_7_4: TextbookChapter = {
  id: 'fransk-2-7-4',
  courseId: 'fransk-2',
  chapterNumber: '7.4',
  title: 'La musique francophone',
  subtitle: 'Franskspråklig musikk',
  description: 'Utforsk franskspråklig musikk fra Edith Piaf til Stromae og Zaz, og lær musikkordforråd.',
  estimatedMinutes: 40,
  competenceGoals: [
    'kjenne til kjente franskspråklige artister og sjangre',
    'kunne snakke om musikk og musikkpreferanser på fransk',
  ],
  content: [
    {
      id: 'fransk-2-7-4-intro',
      type: 'text',
      content: `## La musique francophone

La musique francophone est riche et variee. De la chanson francaise classique d'Edith Piaf a la musique electronique de Daft Punk, la France a toujours eu une scene musicale dynamique.

Franskspråklig musikk er rik og variert. Fra klassisk fransk chanson med Edith Piaf til elektronisk musikk med Daft Punk har Frankrike alltid hatt en dynamisk musikkscene.`,
    },
    {
      id: 'fransk-2-7-4-def-1',
      type: 'definition',
      title: 'Vokabular: Musikk',
      content: `**Ord for musikk:**

| Fransk | Norsk |
|--------|-------|
| la musique | musikken |
| une chanson | en sang |
| un chanteur / une chanteuse | en sanger/sangerinne |
| un musicien / une musicienne | en musiker |
| un album | et album |
| un concert | en konsert |
| un groupe | et band |
| les paroles (f.pl.) | sangteksten |
| la melodie | melodien |
| le rythme | rytmen |`,
    },
    {
      id: 'fransk-2-7-4-def-2',
      type: 'definition',
      title: 'Musikksjangre',
      content: `**Les genres musicaux:**

| Fransk | Norsk |
|--------|-------|
| la chanson francaise | fransk chanson |
| le pop | popmusikk |
| le rock | rock |
| le rap / le hip-hop | rap/hip-hop |
| la musique electronique | elektronisk musikk |
| le jazz | jazz |
| la musique classique | klassisk musikk |
| le R&B | R&B |
| le reggae | reggae |`,
    },
    {
      id: 'fransk-2-7-4-text-1',
      type: 'text',
      content: `## Kjente franskspråklige artister

**Klassikerne:**
- **Edith Piaf** - "La Vie en rose", "Non, je ne regrette rien" - ikonisk chansonartist
- **Jacques Brel** (belgisk) - "Ne me quitte pas" - en av de største franskspråklige sangerne

**Moderne artister:**
- **Stromae** (belgisk) - "Alors on danse", "Papaoutai" - elektronisk pop
- **Zaz** - "Je veux" - ny chanson francaise
- **Daft Punk** - "Get Lucky" - elektronisk musikk
- **Aya Nakamura** - "Djadja" - Frankrikes mest streamede artist internasjonalt`,
    },
    {
      id: 'fransk-2-7-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Snakke om musikk',
      problem: `Oversett til norsk:

a) J'ecoute de la musique tous les jours.
b) Ma chanson preferee est "La Vie en rose".
c) Il joue de la guitare.
d) Nous allons a un concert samedi.`,
      solution: `a) J'ecoute de la musique tous les jours = **Jeg hører på musikk hver dag.**
b) Ma chanson preferee est "La Vie en rose" = **Favorittsangen min er "La Vie en rose".**
c) Il joue de la guitare = **Han spiller gitar.**
d) Nous allons a un concert samedi = **Vi skal på konsert på lørdag.**

**Nyttig grammatikk:**
- ecouter de la musique = å høre på musikk (partitiv artikkel)
- jouer de + instrument = å spille et instrument`,
    },
    {
      id: 'fransk-2-7-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-4-ex-1',
        number: '7.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'en sang', solution: 'une chanson', answer: 'une chanson' },
          { label: 'b', task: 'en sanger (mann)', solution: 'un chanteur', answer: 'un chanteur' },
          { label: 'c', task: 'en konsert', solution: 'un concert', answer: 'un concert' },
          { label: 'd', task: 'sangteksten', solution: 'les paroles', answer: 'les paroles' },
        ],
        solution: 'a) une chanson, b) un chanteur, c) un concert, d) les paroles',
        hints: ['Chanson er hunkjonn (une)', 'Paroles brukes alltid i flertall'],
      },
    },
    {
      id: 'fransk-2-7-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Musikkpreferanser',
      problem: `Hvordan sier du følgende på fransk?

a) Jeg liker pop-musikk.
b) Jeg foretrekker rap.
c) Hva slags musikk hører du på?`,
      solution: `a) **J'aime la musique pop.** / **J'aime le pop.**
b) **Je prefere le rap.**
c) **Quel genre de musique ecoutes-tu?** / **Tu ecoutes quel genre de musique?**

**Uttrykke preferanser:**
- J'aime / J'adore = Jeg liker / Jeg elsker
- Je prefere = Jeg foretrekker
- Je n'aime pas = Jeg liker ikke
- Je deteste = Jeg hater`,
    },
    {
      id: 'fransk-2-7-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg hører på musikk hver dag.', solution: "J'ecoute de la musique tous les jours.", answer: "J'ecoute de la musique tous les jours" },
          { label: 'b', task: 'Jeg foretrekker fransk musikk.', solution: 'Je prefere la musique francaise.', answer: 'Je prefere la musique francaise' },
          { label: 'c', task: 'Han spiller piano.', solution: 'Il joue du piano.', answer: 'Il joue du piano' },
        ],
        solution: "a) J'ecoute de la musique tous les jours, b) Je prefere la musique francaise, c) Il joue du piano",
        hints: ['Ecouter de la musique = høre på musikk', 'Jouer du piano (du = de + le)'],
      },
    },
    {
      id: 'fransk-2-7-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrive en artist',
      problem: `Les og oversett:

Stromae est un chanteur et musicien belge. Il chante en francais. Sa musique melange la pop, l'electronique et les rythmes africains. Son plus grand succes est "Alors on danse".`,
      solution: `**Oversettelse:**
Stromae er en belgisk sanger og musiker. Han synger på fransk. Musikken hans blander pop, elektronisk musikk og afrikanske rytmer. Hans største suksess er "Alors on danse".

**Nyttige ord:**
- belge = belgisk
- melanger = å blande
- un succes = en suksess/hit
- le plus grand = den største`,
    },
    {
      id: 'fransk-2-7-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Koble artisten med sangen:',
        subTasks: [
          { label: 'a', task: 'Edith Piaf', solution: 'La Vie en rose / Non, je ne regrette rien', answer: 'La Vie en rose' },
          { label: 'b', task: 'Stromae', solution: 'Alors on danse / Papaoutai', answer: 'Alors on danse' },
          { label: 'c', task: 'Zaz', solution: 'Je veux', answer: 'Je veux' },
          { label: 'd', task: 'Jacques Brel', solution: 'Ne me quitte pas', answer: 'Ne me quitte pas' },
        ],
        solution: 'a) La Vie en rose, b) Alors on danse, c) Je veux, d) Ne me quitte pas',
        hints: ['Piaf er mest kjent for La Vie en rose', 'Stromae er belgisk'],
      },
    },
    {
      id: 'fransk-2-7-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Beskriv favorittartisten din på fransk (4-5 setninger). Nevn navn, sjanger, favorittsang og hvorfor du liker artisten.',
        subTasks: [
          { label: 'a', task: 'Presenter artisten.', solution: 'Mon artiste prefere(e) est... C\'est un chanteur/une chanteuse...' },
          { label: 'b', task: 'Hvilken sjanger synger artisten?', solution: 'Il/Elle chante du/de la...' },
          { label: 'c', task: 'Hva er din favorittsang og hvorfor liker du artisten?', solution: "Ma chanson preferee est... J'aime cet(te) artiste parce que..." },
        ],
        solution: "Eksempel: \"Mon artiste preferee est Zaz. C'est une chanteuse francaise. Elle chante de la chanson francaise moderne. Ma chanson preferee est 'Je veux' parce que la melodie est belle et les paroles sont interessantes. J'adore sa voix unique.\"",
        hints: ['la voix = stemmen', 'unique = unik'],
      },
    },
    {
      id: 'fransk-2-7-4-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `La Fete de la Musique feires hvert år den 21. juni i Frankrike og mange andre land. På denne dagen er det gratis konserter overalt - på gater, i parker og på plasser. Alle kan delta, både profesjonelle musikere og amatører. Det er en fantastisk anledning til å oppdage ny musikk! Konseptet ble lansert i Frankrike i 1982.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: L'environnement - Miljø
// ============================================================================

export const CHAPTER_FRANSK_2_8_1: TextbookChapter = {
  id: 'fransk-2-8-1',
  courseId: 'fransk-2',
  chapterNumber: '8.1',
  title: "L'environnement",
  subtitle: 'Miljø',
  description: 'Lær å snakke om miljøutfordringer, klimaendringer og resirkulering på fransk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lære vokabular knyttet til miljøspørsmål',
    'kunne diskutere klimaendringer og miljøløsninger på fransk',
  ],
  content: [
    {
      id: 'fransk-2-8-1-intro',
      type: 'text',
      content: `## L'environnement

La protection de l'environnement est un sujet tres important en France. Les Francais sont de plus en plus concernes par le changement climatique et essaient de reduire leur impact ecologique.

Miljøvern er et veldig viktig tema i Frankrike. Franskmenn er stadig mer opptatt av klimaendringer og prøver å redusere sitt økologiske fotavtrykk.`,
    },
    {
      id: 'fransk-2-8-1-def-1',
      type: 'definition',
      title: 'Vokabular: Miljø',
      content: `**Grunnleggende miljøvokabular:**

| Fransk | Norsk |
|--------|-------|
| l'environnement (m.) | miljøet |
| la nature | naturen |
| la pollution | forurensning |
| le changement climatique | klimaendringer |
| le rechauffement climatique | global oppvarming |
| l'ecologie (f.) | økologi |
| la protection de l'environnement | miljøvern |
| une espece menacee | en truet art |
| l'empreinte carbone (f.) | karbonavtrykk |`,
    },
    {
      id: 'fransk-2-8-1-def-2',
      type: 'definition',
      title: 'Vokabular: Resirkulering',
      content: `**Kildesortering og resirkulering:**

| Fransk | Norsk |
|--------|-------|
| le recyclage | resirkulering |
| le tri selectif | kildesortering |
| recycler | a resirkulere |
| trier les dechets | a sortere avfall |
| une poubelle | en søppelbøtte |
| les dechets (m.pl.) | avfall/søppel |
| le plastique | plast |
| le verre | glass |
| le papier/carton | papir/papp |
| les emballages (m.pl.) | emballasje |`,
    },
    {
      id: 'fransk-2-8-1-text-1',
      type: 'text',
      content: `## Le tri selectif en France

I Frankrike har de et fargekodet system for kildesortering:
- **Poubelle jaune** (gul boks) - plast, metall og papir/papp
- **Poubelle verte** (grønn boks) - glass
- **Poubelle grise/noire** (gra/svart boks) - restavfall

Mange franske byer har også containere for tekstiler og spesielle innsamlingssteder for farlig avfall og elektronikk.`,
    },
    {
      id: 'fransk-2-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Miljoevokabular',
      problem: `Oversett til norsk:

a) Il faut proteger l'environnement.
b) Le changement climatique est un probleme grave.
c) Nous devons recycler nos dechets.
d) La pollution de l'air est dangereuse.`,
      solution: `a) Il faut proteger l'environnement = **Vi ma beskytte miljøet.**
b) Le changement climatique est un probleme grave = **Klimaendringer er et alvorlig problem.**
c) Nous devons recycler nos dechets = **Vi ma resirkulere avfallet vårt.**
d) La pollution de l'air est dangereuse = **Luftforurensning er farlig.**

**Nyttige uttrykk:**
- il faut + infinitiv = man ma
- nous devons = vi ma (devoir)
- un probleme grave = et alvorlig problem`,
    },
    {
      id: 'fransk-2-8-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-1-ex-1',
        number: '8.1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'miljøet', solution: "l'environnement", answer: "l'environnement" },
          { label: 'b', task: 'forurensning', solution: 'la pollution', answer: 'la pollution' },
          { label: 'c', task: 'resirkulering', solution: 'le recyclage', answer: 'le recyclage' },
          { label: 'd', task: 'klimaendringer', solution: 'le changement climatique', answer: 'le changement climatique' },
        ],
        solution: "a) l'environnement, b) la pollution, c) le recyclage, d) le changement climatique",
        hints: ['Environnement er hankjonn', 'Pollution er hunkjonn'],
      },
    },
    {
      id: 'fransk-2-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Miljoetiltak',
      problem: `Hva kan man gjøre for miljøet? Oversett:

a) Man kan resirkulere.
b) Man bør bruke offentlig transport.
c) Vi kan spare energi.`,
      solution: `a) **On peut recycler.**
b) **On devrait utiliser les transports en commun.**
c) **Nous pouvons economiser l'energie.**

**Flere miljøtiltak på fransk:**
- reduire la consommation = redusere forbruket
- eviter le gaspillage = unnga sløsing
- utiliser des sacs reutilisables = bruke gjenbruksposer
- prendre le velo = sykle`,
    },
    {
      id: 'fransk-2-8-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-1-ex-2',
        number: '8.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Il faut ___ les dechets. (sortere)', solution: 'trier', answer: 'trier' },
          { label: 'b', task: 'La ___ de l\'air est un probleme. (forurensning)', solution: 'pollution', answer: 'pollution' },
          { label: 'c', task: 'Nous devons ___ l\'environnement. (beskytte)', solution: 'proteger', answer: 'proteger' },
          { label: 'd', task: 'Le ___ climatique menace la planete. (endring)', solution: 'changement', answer: 'changement' },
        ],
        solution: 'a) trier, b) pollution, c) proteger, d) changement',
        hints: ['Trier = å sortere', 'Proteger = å beskytte'],
      },
    },
    {
      id: 'fransk-2-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Diskutere miljøet',
      problem: `Les og oversett:

A mon avis, le changement climatique est le plus grand defi de notre epoque. Nous devons tous agir pour proteger la planete. Par exemple, nous pouvons prendre les transports en commun, recycler et economiser l'energie.`,
      solution: `**Oversettelse:**
Etter min mening er klimaendringer den største utfordringen i var tid. Vi ma alle handle for å beskytte planeten. For eksempel kan vi bruke offentlig transport, resirkulere og spare energi.

**Nyttige uttrykk:**
- a mon avis = etter min mening
- le plus grand defi = den største utfordringen
- agir = å handle
- par exemple = for eksempel`,
    },
    {
      id: 'fransk-2-8-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Vi ma beskytte naturen.', solution: 'Nous devons proteger la nature. / Il faut proteger la nature.', answer: 'Il faut proteger la nature' },
          { label: 'b', task: 'Jeg sorterer avfallet mitt.', solution: 'Je trie mes dechets.', answer: 'Je trie mes dechets' },
          { label: 'c', task: 'Forurensning er farlig.', solution: 'La pollution est dangereuse.', answer: 'La pollution est dangereuse' },
        ],
        solution: 'a) Il faut proteger la nature, b) Je trie mes dechets, c) La pollution est dangereuse',
        hints: ['Trier: je trie, tu tries, il trie', 'Dangereuse = farlig (hunkjønnsform)'],
      },
    },
    {
      id: 'fransk-2-8-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en kort tekst på fransk (5-6 setninger) om hva du gjør for miljøet i hverdagen.',
        subTasks: [
          { label: 'a', task: 'Hva gjør du for miljøet?', solution: 'Pour proteger l\'environnement, je...' },
          { label: 'b', task: 'Sorterer du avfall? Hva resirkulerer du?', solution: 'Je trie mes dechets. Je recycle le papier, le plastique et le verre.' },
          { label: 'c', task: 'Hva synes du er viktigst for miljøet?', solution: 'A mon avis, le plus important c\'est de...' },
        ],
        solution: "Eksempel: \"Pour proteger l'environnement, je fais plusieurs choses. D'abord, je trie mes dechets: le papier, le plastique et le verre. Je prends le bus pour aller a l'ecole au lieu de la voiture. J'essaie aussi d'economiser l'eau et l'electricite. A mon avis, le plus important c'est que tout le monde fasse un effort.\"",
        hints: ["d'abord = for det første", 'au lieu de = i stedet for', 'un effort = en innsats'],
      },
    },
    {
      id: 'fransk-2-8-1-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `Frankrike var vertskap for den historiske klimaavtalen "L'Accord de Paris" i 2015, der 196 land ble enige om å begrense global oppvarming til under 2 grader. Frankrike har også innført mange miljøtiltak: plastposer er forbudt i butikker, og fra 2023 er det forbudt å kaste usolgt mat fra dagligvarebutikker. Det franske uttrykket "ecogeste" (øko-handling) brukes om små daglige handlinger for miljøet.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: L'education en France - Utdanning i Frankrike
// ============================================================================

export const CHAPTER_FRANSK_2_8_2: TextbookChapter = {
  id: 'fransk-2-8-2',
  courseId: 'fransk-2',
  chapterNumber: '8.2',
  title: "L'education en France",
  subtitle: 'Utdanning i Frankrike',
  description: 'Lær om det franske skolesystemet med college, lycee og baccalaureat, og sammenlign med det norske.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå det franske skolesystemet og sammenligne med det norske',
    'lære vokabular knyttet til utdanning og skole på fransk',
  ],
  content: [
    {
      id: 'fransk-2-8-2-intro',
      type: 'text',
      content: `## L'education en France

Le systeme scolaire francais est different du systeme norvegien. L'ecole est obligatoire de 3 a 16 ans en France, et les eleves passent des examens importants comme le brevet et le baccalaureat.

Det franske skolesystemet er forskjellig fra det norske. Skolen er obligatorisk fra 3 til 16 år i Frankrike, og elevene tar viktige eksamener som brevet (etter college) og baccalaureat (etter lycee).`,
    },
    {
      id: 'fransk-2-8-2-def-1',
      type: 'definition',
      title: 'Det franske skolesystemet',
      content: `**Oversikt over skoletrinene:**

| Fransk | Norsk | Alder |
|--------|-------|-------|
| l'ecole maternelle | barnehage/førskole | 3-6 år |
| l'ecole primaire / elementaire | barneskole | 6-11 år |
| le college | ungdomsskole | 11-15 år |
| le lycee | videregående | 15-18 år |
| l'universite | universitetet | fra 18 år |
| une grande ecole | elitehøyskole | fra 18 år |`,
    },
    {
      id: 'fransk-2-8-2-def-2',
      type: 'definition',
      title: 'Vokabular: Skole og utdanning',
      content: `**Ord for skolehverdagen:**

| Fransk | Norsk |
|--------|-------|
| un(e) eleve | en elev |
| un(e) etudiant(e) | en student |
| un professeur (un prof) | en lærer/professor |
| une matiere | et fag |
| un cours | en time/forelesning |
| un examen | en eksamen |
| une note | en karakter |
| un bulletin scolaire | et vitnemål/karakterkort |
| les vacances scolaires | skoleferien |
| la rentree (scolaire) | skolestart (i september) |`,
    },
    {
      id: 'fransk-2-8-2-text-1',
      type: 'text',
      content: `## Le baccalaureat (le bac)

Le baccalaureat er den viktigste eksamenen i det franske skolesystemet. Den tas i siste år på lycee (terminale) og er nodvendig for å komme inn på universitetet.

**Trinn i college (ungdomsskolen):**
- Sixieme (6e) - første år (ca. 11 år)
- Cinquieme (5e) - andre år
- Quatrieme (4e) - tredje år
- Troisieme (3e) - fjerde år -> Brevet-eksamen

**Trinn i lycee (videregående):**
- Seconde (2de) - første år
- Premiere (1ere) - andre år
- Terminale (Tle) - siste år -> Baccalaureat`,
    },
    {
      id: 'fransk-2-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Det franske skolesystemet',
      problem: `Oversett til norsk:

a) Je suis en terminale au lycee.
b) Il a reussi son baccalaureat.
c) Elle est etudiante a l'universite de Paris.
d) La rentree est en septembre.`,
      solution: `a) Je suis en terminale au lycee = **Jeg gar i siste klasse på videregående.**
b) Il a reussi son baccalaureat = **Han har bestatt sin baccalaureat (avsluttende eksamen).**
c) Elle est etudiante a l'universite de Paris = **Hun er student ved universitetet i Paris.**
d) La rentree est en septembre = **Skolestart er i september.**

**Nyttige uttrykk:**
- reussir un examen = å bestå en eksamen
- echouer a un examen = å stryke på en eksamen`,
    },
    {
      id: 'fransk-2-8-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-2-ex-1',
        number: '8.2.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble det franske skoletrinnet med den norske ekvivalenten:',
        subTasks: [
          { label: 'a', task: "l'ecole primaire", solution: 'barneskole', answer: 'barneskole' },
          { label: 'b', task: 'le college', solution: 'ungdomsskole', answer: 'ungdomsskole' },
          { label: 'c', task: 'le lycee', solution: 'videregående', answer: 'videregående' },
          { label: 'd', task: "l'universite", solution: 'universitetet', answer: 'universitetet' },
        ],
        solution: "a) barneskole, b) ungdomsskole, c) videregående, d) universitetet",
        hints: ['College er ungdomsskolen, ikke høyskole', 'Lycee tilsvarer videregående'],
      },
    },
    {
      id: 'fransk-2-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne skolesystemer',
      problem: `Les teksten og svar:

En France, les eleves ont cours du lundi au vendredi, mais pas le mercredi apres-midi dans beaucoup d'ecoles. La journee scolaire est longue: de 8h a 16h ou 17h. Les vacances d'ete durent environ deux mois (juillet-aout).

a) Hvilke dager har franske elever undervisning?
b) Hvordan er en typisk skoledag i Frankrike?`,
      solution: `a) Franske elever har undervisning **fra mandag til fredag**, men mange skoler har fri **onsdag ettermiddag**.
b) En typisk skoledag er **lang: fra kl. 8 til kl. 16 eller 17**. Sommerferien varer **ca. to maneder (juli-august)**.

**Forskjeller fra Norge:**
- Lengre skoledager i Frankrike
- Onsdag ettermiddag er ofte fri
- Kortere sommerferie enn i Norge, men flere ferieperioder gjennom aret`,
    },
    {
      id: 'fransk-2-8-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg gar på videregående.', solution: 'Je suis au lycee.', answer: 'Je suis au lycee' },
          { label: 'b', task: 'Mitt favorittfag er fransk.', solution: 'Ma matiere preferee est le francais.', answer: 'Ma matiere preferee est le francais' },
          { label: 'c', task: 'Skolestart er i august i Norge.', solution: 'La rentree est en aout en Norvege.', answer: 'La rentree est en aout en Norvege' },
        ],
        solution: 'a) Je suis au lycee, b) Ma matiere preferee est le francais, c) La rentree est en aout en Norvege',
        hints: ['Au lycee (au = å + le)', 'La rentree = skolestart'],
      },
    },
    {
      id: 'fransk-2-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Skolefag',
      problem: `Koble de franske fagnavnene med de norske:

a) les mathematiques (les maths)
b) l'histoire-geographie
c) les sciences de la vie et de la Terre (SVT)
d) l'education physique et sportive (EPS)`,
      solution: `a) les mathematiques = **matematikk**
b) l'histoire-geographie = **historie og geografi** (ett fag i Frankrike!)
c) les sciences de la vie et de la Terre = **naturfag/biologi**
d) l'education physique et sportive = **kroppsøving/gym**

**Andre fag:**
- le francais = fransk (morsmål)
- la philosophie = filosofi (obligatorisk i terminale!)
- les langues vivantes = fremmedsprak`,
    },
    {
      id: 'fransk-2-8-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'en elev', solution: 'un/une eleve', answer: 'un eleve' },
          { label: 'b', task: 'et fag', solution: 'une matiere', answer: 'une matiere' },
          { label: 'c', task: 'en eksamen', solution: 'un examen', answer: 'un examen' },
          { label: 'd', task: 'en karakter', solution: 'une note', answer: 'une note' },
        ],
        solution: 'a) un/une eleve, b) une matiere, c) un examen, d) une note',
        hints: ['Eleve kan være både hankjonn og hunkjonn', 'Note brukes om skolekarakterer'],
      },
    },
    {
      id: 'fransk-2-8-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign det norske og det franske skolesystemet på fransk (4-5 setninger).',
        subTasks: [
          { label: 'a', task: 'Beskriv det norske systemet kort.', solution: 'En Norvege, l\'ecole obligatoire dure 10 ans...' },
          { label: 'b', task: 'Nevn en forskjell mellom systemene.', solution: 'En France, les journees scolaires sont plus longues...' },
          { label: 'c', task: 'Nevn en likhet mellom systemene.', solution: 'Dans les deux pays, l\'ecole est gratuite et obligatoire.' },
        ],
        solution: "Eksempel: \"En Norvege, l'ecole obligatoire dure 10 ans, de 6 a 16 ans. En France, les journees scolaires sont plus longues qu'en Norvege. En France, les eleves passent le baccalaureat a la fin du lycee. Dans les deux pays, l'ecole est gratuite. En Norvege, il n'y a pas d'equivalent au baccalaureat francais.\"",
        hints: ['durer = å vare', 'gratuit(e) = gratis', 'dans les deux pays = i begge land'],
      },
    },
    {
      id: 'fransk-2-8-2-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `Baccalaureat-eksamenen (le bac) er en nasjonal eksamen som nesten alle franske elever tar etter videregående. Det er en stor begivenhet - resultatene kunngjores offentlig og feires med stor festivitas. I Frankrike bruker skolene et karaktersystem fra 0 til 20, der 10 er bestått. 20/20 er ekstremt sjeldent. Franske skoler har også "la cantine" (skolekantine) som serverer fullstendige måltider med forrett, hovedrett, ost og dessert!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Le monde du travail - Arbeidslivet
// ============================================================================

export const CHAPTER_FRANSK_2_8_3: TextbookChapter = {
  id: 'fransk-2-8-3',
  courseId: 'fransk-2',
  chapterNumber: '8.3',
  title: 'Le monde du travail',
  subtitle: 'Arbeidslivet',
  description: 'Lær om yrker, CV, soeknadsbrev og jobbintervju på fransk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lære vokabular for yrker og arbeidsliv',
    'kunne skrive en enkel CV og soeknad på fransk',
  ],
  content: [
    {
      id: 'fransk-2-8-3-intro',
      type: 'text',
      content: `## Le monde du travail

Le marche du travail en France a ses propres particularites. Que vous cherchiez un emploi, un stage ou simplement vouliez parler de votre metier, il est important de connaitre le vocabulaire du travail.

Det franske arbeidsmarkedet har sine egne saertrekk. Enten du soeker jobb, praksisplass eller bare vil snakke om yrket ditt, er det viktig å kunne arbeidsvokabular.`,
    },
    {
      id: 'fransk-2-8-3-def-1',
      type: 'definition',
      title: 'Vokabular: Yrker',
      content: `**Vanlige yrker:**

| Fransk | Norsk |
|--------|-------|
| un medecin | en lege |
| un(e) infirmier/infirmiere | en sykepleier |
| un(e) avocat(e) | en advokat |
| un ingenieur | en ingenioer |
| un(e) enseignant(e) | en lærer |
| un(e) vendeur/vendeuse | en ekspeditoor |
| un(e) serveur/serveuse | en kelner/servitrice |
| un(e) comptable | en regnskapsforer |
| un(e) informaticien(ne) | en IT-arbeider |
| un(e) journaliste | en journalist |`,
    },
    {
      id: 'fransk-2-8-3-def-2',
      type: 'definition',
      title: 'Vokabular: Jobbsoeking',
      content: `**Ord for jobbsoeking:**

| Fransk | Norsk |
|--------|-------|
| un emploi / un travail | en jobb |
| un metier / une profession | et yrke |
| un CV (curriculum vitae) | en CV |
| une lettre de motivation | et soeknadsbrev |
| un entretien d'embauche | et jobbintervju |
| un stage | en praksisplass/internship |
| une candidature | en soeknad |
| postuler a un emploi | a soeke på en jobb |
| un salaire | en loenn |
| un contrat de travail | en arbeidskontrakt |`,
    },
    {
      id: 'fransk-2-8-3-text-1',
      type: 'text',
      content: `## Le CV francais

En fransk CV er noe annerledes enn en norsk:

**Typisk innhold i en fransk CV:**
1. **Etat civil** - personopplysninger (navn, adresse, telefon, e-post)
2. **Formation** - utdanning
3. **Experience professionnelle** - arbeidserfaring
4. **Competences** - ferdigheter (språk, IT osv.)
5. **Centres d'interet** - interesser/hobbyer

**Viktig forskjell:** I Frankrike er det fortsatt vanlig a inkludere bilde, foedselsdato og sivilstatus på CV-en.`,
    },
    {
      id: 'fransk-2-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Snakke om yrker',
      problem: `Oversett til norsk:

a) Quel est votre metier?
b) Je suis informaticien.
c) Elle travaille comme avocate.
d) Il cherche un emploi.`,
      solution: `a) Quel est votre metier? = **Hva er yrket ditt?** (formelt)
b) Je suis informaticien = **Jeg er IT-arbeider.**
c) Elle travaille comme avocate = **Hun jobber som advokat.**
d) Il cherche un emploi = **Han soeker jobb.**

**Nyttige uttrykk:**
- travailler comme... = jobbe som...
- chercher un emploi = soeke jobb
- etre au chomage = være arbeidsloeas`,
    },
    {
      id: 'fransk-2-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-3-ex-1',
        number: '8.3.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett yrkene til fransk:',
        subTasks: [
          { label: 'a', task: 'lege', solution: 'un medecin', answer: 'medecin' },
          { label: 'b', task: 'advokat', solution: 'un(e) avocat(e)', answer: 'avocat' },
          { label: 'c', task: 'lærer', solution: 'un(e) enseignant(e) / un professeur', answer: 'enseignant' },
          { label: 'd', task: 'journalist', solution: 'un(e) journaliste', answer: 'journaliste' },
        ],
        solution: 'a) medecin, b) avocat(e), c) enseignant(e) / professeur, d) journaliste',
        hints: ['Medecin brukes ofte uten hunkjønnsform', 'Journaliste er lik i begge kjønn'],
      },
    },
    {
      id: 'fransk-2-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Soeknadsbrev',
      problem: `Les starten på et soeknadsbrev og oversett:

Madame, Monsieur,

Je me permets de vous ecrire pour postuler au poste de vendeur dans votre magasin. Je suis etudiant en commerce et je cherche un emploi d'ete.`,
      solution: `**Oversettelse:**
Kjære mottaker (Fru/Herr),

Jeg tillater meg a skrive til Dem for å soeke på stillingen som ekspeditoor i Deres butikk. Jeg er handelsstudent og soeker sommerjobb.

**Nyttige uttrykk for soeknadsbrev:**
- je me permets de = jeg tillater meg a
- postuler au poste de = soeke på stillingen som
- un emploi d'ete = sommerjobb
- je suis disponible = jeg er tilgjengelig`,
    },
    {
      id: 'fransk-2-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-3-ex-2',
        number: '8.3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Jeg soeker jobb.', solution: "Je cherche un emploi.", answer: "Je cherche un emploi" },
          { label: 'b', task: 'Hun jobber som sykepleier.', solution: "Elle travaille comme infirmiere.", answer: "Elle travaille comme infirmiere" },
          { label: 'c', task: 'Hva er yrket ditt?', solution: "Quel est votre metier? / Quelle est votre profession?", answer: "Quel est votre metier" },
        ],
        solution: 'a) Je cherche un emploi, b) Elle travaille comme infirmiere, c) Quel est votre metier?',
        hints: ['Chercher = å soeke/lete etter', 'Travailler comme = jobbe som'],
      },
    },
    {
      id: 'fransk-2-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Jobbintervju',
      problem: `Vanlige spoersmaal i et jobbintervju. Oversett:

a) Parlez-moi de vous.
b) Quelles sont vos qualites?
c) Pourquoi voulez-vous travailler chez nous?`,
      solution: `a) Parlez-moi de vous = **Fortell meg om deg selv.**
b) Quelles sont vos qualites? = **Hva er dine styrker/gode egenskaper?**
c) Pourquoi voulez-vous travailler chez nous? = **Hvorfor vil du jobbe hos oss?**

**Nyttige svar:**
- Je suis motive(e) et serieux/serieuse = Jeg er motivert og serioees
- Je travaille bien en equipe = Jeg samarbeider godt
- Je suis organise(e) = Jeg er organisert`,
    },
    {
      id: 'fransk-2-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'en CV', solution: 'un CV', answer: 'un CV' },
          { label: 'b', task: 'et soeknadsbrev', solution: 'une lettre de motivation', answer: 'une lettre de motivation' },
          { label: 'c', task: 'et jobbintervju', solution: "un entretien d'embauche", answer: "un entretien d'embauche" },
          { label: 'd', task: 'en praksisplass', solution: 'un stage', answer: 'un stage' },
        ],
        solution: "a) un CV, b) une lettre de motivation, c) un entretien d'embauche, d) un stage",
        hints: ['CV uttales "se-ve" på fransk', 'Stage uttales med bløt g'],
      },
    },
    {
      id: 'fransk-2-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forbered svar til et jobbintervju på fransk (3-4 setninger for hvert spoersmaal).',
        subTasks: [
          { label: 'a', task: 'Parlez-moi de vous. (Fortell om deg selv.)', solution: "Je m'appelle... Je suis eleve au lycee en Norvege. J'etudie le francais depuis..." },
          { label: 'b', task: 'Quelles sont vos qualites? (Hva er dine styrker?)', solution: 'Je suis motive(e), organise(e) et je travaille bien en equipe.' },
          { label: 'c', task: 'Pourquoi voulez-vous ce poste? (Hvorfor vil du ha denne stillingen?)', solution: 'Parce que je suis interesse(e) par... et je voudrais avoir de l\'experience...' },
        ],
        solution: "Eksempel: \"a) Je m'appelle Thomas. J'ai 17 ans et je suis eleve au lycee en Norvege. J'etudie le francais depuis trois ans. b) Je suis motive, serieux et organise. Je travaille bien en equipe et j'aime apprendre de nouvelles choses. c) Je voudrais ce poste parce que je m'interesse au commerce et je voudrais ameliorer mon francais.\"",
        hints: ['depuis = siden/i (tidsperiode)', 'ameliorer = å forbedre'],
      },
    },
    {
      id: 'fransk-2-8-3-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `I Frankrike er arbeidsuken 35 timer (la semaine de 35 heures), innført i 2000. Franske arbeidstakere har rett på minimum 5 ukers ferie (conges payes) per år. De fleste tar 3-4 uker i juli eller august, og mange bedrifter stenger helt i denne perioden. Franske lunsjpauser er også lengre enn i Norge - ofte en time eller mer. "Stage" (praksisplass) er en viktig del av utdanningen i Frankrike, og mange elever og studenter har obligatoriske praksisperioder.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: La vie sociale - Sosialt liv
// ============================================================================

export const CHAPTER_FRANSK_2_8_4: TextbookChapter = {
  id: 'fransk-2-8-4',
  courseId: 'fransk-2',
  chapterNumber: '8.4',
  title: 'La vie sociale',
  subtitle: 'Sosialt liv',
  description: 'Lær å snakke om vennskap, sosiale medier, kommunikasjon, invitasjoner og a lage planer på fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kunne snakke om vennskap og sosialt liv på fransk',
    'kunne invitere noen og lage planer på fransk',
  ],
  content: [
    {
      id: 'fransk-2-8-4-intro',
      type: 'text',
      content: `## La vie sociale

Les relations sociales sont tres importantes dans la culture francaise. Que ce soit entre amis, en famille ou sur les reseaux sociaux, les Francais attachent beaucoup d'importance a la vie sociale.

Sosiale relasjoner er veldig viktige i fransk kultur. Enten det er mellom venner, i familien eller på sosiale medier, legger franskmenn stor vekt på det sosiale livet.`,
    },
    {
      id: 'fransk-2-8-4-def-1',
      type: 'definition',
      title: 'Vokabular: Vennskap og relasjoner',
      content: `**Ord for sosiale relasjoner:**

| Fransk | Norsk |
|--------|-------|
| un(e) ami(e) | en venn/venninne |
| un copain / une copine | en kompis/venninne |
| un(e) meilleur(e) ami(e) | en bestevenn |
| l'amitie (f.) | vennskap |
| une relation | et forhold/relasjon |
| un voisin / une voisine | en nabo |
| se connaitre | a kjenne hverandre |
| s'entendre bien avec | a komme godt overens med |
| faire confiance a | a stole på |`,
    },
    {
      id: 'fransk-2-8-4-def-2',
      type: 'definition',
      title: 'Vokabular: Kommunikasjon og sosiale medier',
      content: `**Kommunikasjon:**

| Fransk | Norsk |
|--------|-------|
| envoyer un message | a sende en melding |
| appeler / telephoner | a ringe |
| un SMS / un texto | en tekstmelding |
| un e-mail / un courriel | en e-post |
| les reseaux sociaux | sosiale medier |
| un compte (sur Instagram) | en konto (på Instagram) |
| publier / poster | a legge ut/poste |
| partager | a dele |
| un abonne / un follower | en følger |
| un "j'aime" / un like | en "liker" |`,
    },
    {
      id: 'fransk-2-8-4-text-1',
      type: 'text',
      content: `## Inviter quelqu'un - A invitere noen

**Nyttige uttrykk for invitasjoner:**

| Fransk | Norsk |
|--------|-------|
| Tu veux venir...? | Vil du komme...? |
| Ca te dit de...? | Har du lyst til a...? |
| On se retrouve ou? | Hvor skal vi moetes? |
| A quelle heure? | Klokken hva? |
| Avec plaisir! | Med gloede! |
| Desolee, je ne peux pas. | Beklager, jeg kan ikke. |
| Je suis libre samedi. | Jeg er ledig på lørdag. |
| On fait quelque chose ce weekend? | Skal vi gjøre noe i helgen? |`,
    },
    {
      id: 'fransk-2-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Invitere en venn',
      problem: `Les dialogen og svar:

A: Salut! Ca te dit d'aller au cinema samedi soir?
B: Oui, avec plaisir! Quel film?
A: Je voudrais voir le nouveau film francais. On se retrouve a 19h?
B: Super! On se retrouve devant le cinema.

a) Hva foreslaar person A?
b) Aksepterer person B? Hva sier han/hun?
c) Når og hvor skal de moetes?`,
      solution: `a) Person A foreslaar **a ga på kino lørdag kveld**.
b) Ja, person B aksepterer og sier **"Oui, avec plaisir!"** (Ja, med gloede!)
c) De skal moetes **klokken 19 foran kinoen**.

**Nyttige uttrykk:**
- Ca te dit de + infinitiv = Har du lyst til a...
- on se retrouve = vi moetes
- devant = foran`,
    },
    {
      id: 'fransk-2-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-4-ex-1',
        number: '8.4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'en venn', solution: 'un(e) ami(e) / un copain / une copine', answer: 'un ami' },
          { label: 'b', task: 'vennskap', solution: "l'amitie", answer: "l'amitie" },
          { label: 'c', task: 'a sende en melding', solution: 'envoyer un message', answer: 'envoyer un message' },
          { label: 'd', task: 'sosiale medier', solution: 'les reseaux sociaux', answer: 'les reseaux sociaux' },
        ],
        solution: "a) un ami / une amie, b) l'amitie, c) envoyer un message, d) les reseaux sociaux",
        hints: ['Ami er hankjonn, amie er hunkjonn', 'Amitie er hunkjonn'],
      },
    },
    {
      id: 'fransk-2-8-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Akseptere og avslaa invitasjoner',
      problem: `Hvordan aksepterer eller avslaar du en invitasjon på fransk?

a) Si, gjerne! (akseptere)
b) Beklager, jeg kan ikke. (avslaa)
c) Kan vi flytte det til sondag? (foreslaa alternativ)`,
      solution: `a) **Oui, avec plaisir!** / **Oui, je veux bien!** / **Bonne idee!**
b) **Desole(e), je ne peux pas.** / **C'est dommage, mais je suis occupe(e).**
c) **On peut reporter ca a dimanche?** / **Est-ce qu'on peut se voir plutot dimanche?**

**Nyttige uttrykk:**
- avec plaisir = med gloede
- c'est dommage = det er synd
- occupe(e) = opptatt
- reporter = å utsette/flytte
- plutot = heller`,
    },
    {
      id: 'fransk-2-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk:',
        subTasks: [
          { label: 'a', task: 'Vil du komme på fest lørdag?', solution: 'Tu veux venir a la fete samedi?', answer: 'Tu veux venir a la fete samedi' },
          { label: 'b', task: 'Ja, med gloede!', solution: 'Oui, avec plaisir!', answer: 'Oui, avec plaisir' },
          { label: 'c', task: 'Beklager, jeg er opptatt.', solution: 'Desole(e), je suis occupe(e).', answer: 'Desole, je suis occupe' },
        ],
        solution: "a) Tu veux venir a la fete samedi?, b) Oui, avec plaisir!, c) Desole(e), je suis occupe(e).",
        hints: ['La fete = festen', 'Occupe far ekstra -e for hunkjonn'],
      },
    },
    {
      id: 'fransk-2-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Sosiale medier',
      problem: `Les og oversett:

Les jeunes francais utilisent beaucoup les reseaux sociaux. Instagram, Snapchat et TikTok sont les plus populaires. Ils partagent des photos, des videos et communiquent avec leurs amis. Mais il faut faire attention a ce qu'on publie en ligne.`,
      solution: `**Oversettelse:**
Franske ungdommer bruker sosiale medier mye. Instagram, Snapchat og TikTok er de mest populære. De deler bilder, videoer og kommuniserer med vennene sine. Men man må være forsiktig med hva man legger ut på nett.

**Nyttige ord:**
- les jeunes = ungdommene
- partager = å dele
- communiquer = å kommunisere
- faire attention a = å være forsiktig med
- en ligne = på nett`,
    },
    {
      id: 'fransk-2-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig ord:',
        subTasks: [
          { label: 'a', task: 'Je ___ un message a mon ami. (sender)', solution: 'envoie', answer: 'envoie' },
          { label: 'b', task: 'Elle ___ des photos sur Instagram. (deler)', solution: 'partage', answer: 'partage' },
          { label: 'c', task: 'Nous nous ___ bien. (kommer overens)', solution: 'entendons', answer: 'entendons' },
          { label: 'd', task: 'Tu ___ venir au cinema? (vil)', solution: 'veux', answer: 'veux' },
        ],
        solution: 'a) envoie, b) partage, c) entendons, d) veux',
        hints: ['Envoyer: j\'envoie, tu envoies, il envoie', 'S\'entendre: nous nous entendons'],
      },
    },
    {
      id: 'fransk-2-8-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en dialog på fransk (6-8 setninger) der du inviterer en venn til å gjøre noe i helgen. Inkluder invitasjon, svar, tidspunkt og sted.',
        subTasks: [
          { label: 'a', task: 'Inviter vennen din til en aktivitet.', solution: 'Salut! Ca te dit de...? / Tu veux venir...?' },
          { label: 'b', task: 'Vennen aksepterer og spoer om detaljer.', solution: 'Oui, avec plaisir! A quelle heure? On se retrouve ou?' },
          { label: 'c', task: 'Avtal tidspunkt og sted.', solution: 'On se retrouve a... devant/chez...' },
        ],
        solution: "Eksempel: \"A: Salut Marie! Ca te dit d'aller au cafe samedi apres-midi? B: Oui, bonne idee! A quelle heure? A: Vers 14 heures, ca te va? B: Parfait! On se retrouve ou? A: On se retrouve devant le cafe de la place. B: Super, a samedi alors! A: A samedi! J'ai hate!\"",
        hints: ['vers = omtrent/rundt', 'ca te va? = passer det for deg?', "j'ai hate = jeg gleder meg"],
      },
    },
    {
      id: 'fransk-2-8-4-tip-1',
      type: 'tip',
      content: `I Frankrike er det vanlig a gi "la bise" (kyssehilsen på kinnet) nar man hilser på venner og familie. Antall kyss varierer fra region til region - fra ett til fire! Blant ungdom er det også vanlig a hilse med et enkelt "Salut!" og en haaandhilsen eller klem.`,
    },
    {
      id: 'fransk-2-8-4-note-1',
      type: 'note',
      title: 'Kulturnotat',
      content: `Franskmenn er kjent for sitt aktive sosiale liv. "L'aperitif" (apero) er en viktig sosial tradisjon - man samles med venner for drikke og små snacks før middag. Kafekulturen er også sentral: franskmenn tilbringer gjerne timer på kafeer med venner. Det franske uttrykket "sortir" (a ga ut) brukes mye blant ungdom om å være sosial. Ungdomssprak på fransk kalles "le verlan" - et slangsprak der stavelsene i ord byttes om, f.eks. "meuf" (fra "femme" = kvinne).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_2_CHAPTERS_7_8: TextbookChapter[] = [
  CHAPTER_FRANSK_2_7_1,
  CHAPTER_FRANSK_2_7_2,
  CHAPTER_FRANSK_2_7_3,
  CHAPTER_FRANSK_2_7_4,
  CHAPTER_FRANSK_2_8_1,
  CHAPTER_FRANSK_2_8_2,
  CHAPTER_FRANSK_2_8_3,
  CHAPTER_FRANSK_2_8_4,
];
