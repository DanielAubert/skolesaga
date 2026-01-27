/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Niva 2 - Kapittel 9-10
 *
 * Kapittel 9: Skriving og kommunikasjon (L'ecriture et la communication)
 * Kapittel 10: Grammatikkrepetisjon (Revision grammaticale)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 9.1: Ecrire une lettre / un courriel - Skrive brev/e-post
// ============================================================================

export const CHAPTER_FRANSK_2_9_1: TextbookChapter = {
  id: 'fransk-2-9-1',
  courseId: 'fransk-2',
  chapterNumber: '9.1',
  title: 'Ecrire une lettre / un courriel',
  subtitle: 'Skrive brev/e-post',
  description: 'Laer a skrive formelle og uformelle brev og e-poster pa fransk, med riktig format og vanlige uttrykk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive formelle og uformelle brev og e-poster pa fransk',
    'bruke riktige hilsener og avslutninger i ulike brevtyper',
  ],
  content: [
    {
      id: 'fransk-2-9-1-intro',
      type: 'text',
      content: `## Skrive brev og e-post pa fransk

A kunne skrive brev og e-poster pa fransk er en viktig ferdighet. Pa fransk skiller man tydelig mellom formell og uformell skriving. Hilsener, avslutninger og tone varierer avhengig av hvem du skriver til.

I dette kapittelet laerer du a skrive bade formelle og uformelle brev og e-poster med riktig format og vanlige uttrykk.`,
    },
    {
      id: 'fransk-2-9-1-text-1',
      type: 'text',
      content: `## Uformelt brev / e-post (lettre informelle)

Nar du skriver til venner eller familie, bruker du et uformelt sprak:

**Innledning:**
| Fransk | Norsk |
|--------|-------|
| Cher Paul, / Chere Marie, | Kjaere Paul, / Kjaere Marie, |
| Salut ! | Hei! |
| Coucou ! | Hei! (veldig uformelt) |
| Comment ca va ? | Hvordan har du det? |

**Avslutning:**
| Fransk | Norsk |
|--------|-------|
| Bisous | Klem |
| A bientot ! | Vi ses snart! |
| Amicalement | Vennlig hilsen |
| Je t'embrasse | Klemmer deg |
| Gros bisous | Store klemmer |`,
    },
    {
      id: 'fransk-2-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Uformell e-post',
      problem: `Les e-posten og identifiser hilsen, innhold og avslutning:

"Chere Sophie,
Comment ca va ? Moi, je vais tres bien ! Je t'ecris pour te raconter mes vacances. Je suis allee en Espagne avec ma famille. C'etait super !
Et toi, qu'est-ce que tu as fait pendant les vacances ?
Bisous,
Marie"`,
      solution: `**Hilsen:** Chere Sophie, (Kjaere Sophie,)
**Innhold:** Hun forteller om ferien sin i Spania og spor hva venninnen gjorde.
**Avslutning:** Bisous, Marie (Klem, Marie)

Merk den uformelle tonen med "tu", sporsmal til mottakeren, og avslutningen "Bisous".`,
    },
    {
      id: 'fransk-2-9-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse uformelle brevuttrykkene til fransk.',
        subTasks: [
          { label: 'a', task: 'Kjaere Pierre,', solution: 'Cher Pierre,' },
          { label: 'b', task: 'Hvordan har du det?', solution: 'Comment ca va ?' },
          { label: 'c', task: 'Vi ses snart!', solution: 'A bientot !' },
          { label: 'd', task: 'Klem', solution: 'Bisous' },
        ],
        solution: 'a) Cher Pierre, b) Comment ca va ? c) A bientot ! d) Bisous',
        hints: ['Cher = Kjaere (til en gutt/mann)', 'Chere = Kjaere (til en jente/kvinne)'],
      },
    },
    {
      id: 'fransk-2-9-1-text-2',
      type: 'text',
      content: `## Formelt brev / e-post (lettre formelle)

Nar du skriver til ukjente, bedrifter eller myndigheter, bruker du formelt sprak:

**Innledning:**
| Fransk | Norsk |
|--------|-------|
| Madame, Monsieur, | Kjaere herr/fru, |
| Cher Monsieur Dupont, | Kjaere herr Dupont, |
| Chere Madame Martin, | Kjaere fru Martin, |

**Nyttige fraser:**
| Fransk | Norsk |
|--------|-------|
| Je vous ecris pour... | Jeg skriver til Dem for a... |
| Suite a votre annonce... | I forbindelse med Deres annonse... |
| Je me permets de vous contacter... | Jeg tillater meg a kontakte Dem... |
| Je vous prie de bien vouloir... | Jeg ber Dem vaere sa vennlig a... |

**Avslutning:**
| Fransk | Norsk |
|--------|-------|
| Cordialement | Med vennlig hilsen |
| Veuillez agreer mes salutations distinguees | Med de beste hilsener |
| Dans l'attente de votre reponse | I pavente av Deres svar |
| Je vous remercie d'avance | Takk pa forhand |`,
    },
    {
      id: 'fransk-2-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Formelt brev',
      problem: `Les brevet og identifiser formelle trekk:

"Madame, Monsieur,
Je vous ecris pour poser ma candidature au poste de stagiaire dans votre entreprise. Je suis etudiant en commerce et je souhaite acquerir de l'experience professionnelle.
Veuillez trouver ci-joint mon CV.
Dans l'attente de votre reponse, veuillez agreer mes salutations distinguees.
Jean Martin"`,
      solution: `**Formelle trekk:**
1. **Hilsen:** "Madame, Monsieur," - formell og nodral
2. **Vous-form:** "Je vous ecris" - bruker "vous" (De)
3. **Formelt uttrykk:** "poser ma candidature" (sende min soknad)
4. **Avslutning:** "Veuillez agreer mes salutations distinguees" - svart formell
5. **Vedlegg:** "Veuillez trouver ci-joint" (Vennligst finn vedlagt)`,
    },
    {
      id: 'fransk-2-9-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse formelle uttrykkene til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg skriver til Dem for a...', solution: 'Je vous ecris pour...' },
          { label: 'b', task: 'Med vennlig hilsen', solution: 'Cordialement' },
          { label: 'c', task: 'I pavente av Deres svar', solution: 'Dans l\'attente de votre reponse' },
          { label: 'd', task: 'Takk pa forhand', solution: 'Je vous remercie d\'avance' },
        ],
        solution: 'a) Je vous ecris pour... b) Cordialement c) Dans l\'attente de votre reponse d) Je vous remercie d\'avance',
        hints: ['vous = De (formelt)', 'votre = Deres (formelt)'],
      },
    },
    {
      id: 'fransk-2-9-1-text-3',
      type: 'text',
      content: `## Struktur i et brev/e-post

Et godt brev eller e-post pa fransk har disse delene:

1. **Hilsen** (Formule d'appel) - Cher/Chere... eller Madame, Monsieur,
2. **Innledning** - Forklarer hvorfor du skriver
3. **Hoveddel** - Hovedbudskapet ditt
4. **Avslutning** - Oppsummering eller onsker
5. **Hilsen** (Formule de politesse) - Cordialement / Bisous etc.
6. **Underskrift** - Navnet ditt

**Nyttige overgangsord:**
| Fransk | Norsk |
|--------|-------|
| D'abord | Forst |
| Ensuite | Deretter |
| De plus | I tillegg |
| Finalement | Til slutt |
| En ce qui concerne | Nar det gjelder |`,
    },
    {
      id: 'fransk-2-9-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Overgangsord i brev',
      problem: `Fyll inn passende overgangsord:
a) ___, je voudrais vous remercier pour votre aide.
b) ___, je souhaite poser une question.
c) ___, je vous prie de me repondre rapidement.`,
      solution: `a) **D'abord**, je voudrais vous remercier pour votre aide. (Forst vil jeg takke Dem for Deres hjelp.)
b) **Ensuite**, je souhaite poser une question. (Deretter onsker jeg a stille et sporsmal.)
c) **Finalement**, je vous prie de me repondre rapidement. (Til slutt ber jeg Dem svare raskt.)`,
    },
    {
      id: 'fransk-2-9-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig hilsen og avslutning for situasjonen.',
        subTasks: [
          { label: 'a', task: 'Du skriver til bestevennen din. Hilsen:', solution: 'Salut ! / Cher(e) + navn' },
          { label: 'b', task: 'Du skriver til bestevennen din. Avslutning:', solution: 'Bisous / A bientot !' },
          { label: 'c', task: 'Du skriver til en laerer. Hilsen:', solution: 'Cher Monsieur / Chere Madame + etternavn' },
          { label: 'd', task: 'Du skriver til en laerer. Avslutning:', solution: 'Cordialement / Respectueusement' },
        ],
        solution: 'a) Salut ! / Cher(e) + navn b) Bisous / A bientot ! c) Cher Monsieur / Chere Madame + etternavn d) Cordialement / Respectueusement',
        hints: ['Uformelt: tu-form, kallenavn, enkle avslutninger', 'Formelt: vous-form, titler, formelle avslutninger'],
      },
    },
    {
      id: 'fransk-2-9-1-text-4',
      type: 'text',
      content: `## Oppsummering - Viktige brevuttrykk

| Situasjon | Uformelt | Formelt |
|-----------|----------|---------|
| Hilsen | Salut ! Coucou ! | Madame, Monsieur, |
| Hvorfor du skriver | Je t'ecris pour... | Je vous ecris pour... |
| Takke | Merci beaucoup ! | Je vous remercie de... |
| Be om noe | Tu peux... ? | Je vous prie de... |
| Avslutning | Bisous / A bientot ! | Cordialement |`,
    },
    {
      id: 'fransk-2-9-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Er disse uttrykkene formelle (F) eller uformelle (U)?',
        subTasks: [
          { label: 'a', task: 'Bisous', solution: 'U (uformelt)' },
          { label: 'b', task: 'Veuillez agreer mes salutations distinguees', solution: 'F (formelt)' },
          { label: 'c', task: 'Coucou !', solution: 'U (uformelt)' },
          { label: 'd', task: 'Je vous prie de bien vouloir...', solution: 'F (formelt)' },
        ],
        solution: 'a) U (uformelt), b) F (formelt), c) U (uformelt), d) F (formelt)',
        hints: ['Vous-former er formelle', 'Bisous og Coucou er uformelle'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.2: Argumenter et debattre - Argumentere og debattere
// ============================================================================

export const CHAPTER_FRANSK_2_9_2: TextbookChapter = {
  id: 'fransk-2-9-2',
  courseId: 'fransk-2',
  chapterNumber: '9.2',
  title: 'Argumenter et debattre',
  subtitle: 'Argumentere og debattere',
  description: 'Laer a uttrykke meninger, argumentere og debattere pa fransk med vanlige fraser og bindeord.',
  estimatedMinutes: 45,
  competenceGoals: [
    'uttrykke meninger og argumentere pa fransk',
    'bruke vanlige bindeord og argumentasjonsfraser i skriftlig og muntlig kommunikasjon',
  ],
  content: [
    {
      id: 'fransk-2-9-2-intro',
      type: 'text',
      content: `## Argumentere og debattere pa fransk

A kunne uttrykke meninger og argumentere er en sentral ferdighet i fremmedsprak. Pa fransk finnes det mange uttrykk for a si hva du mener, vaere enig eller uenig, og strukturere argumentene dine.

I dette kapittelet laerer du de viktigste frasene for a delta i debatter og skrive argumenterende tekster.`,
    },
    {
      id: 'fransk-2-9-2-text-1',
      type: 'text',
      content: `## Uttrykke meninger (Exprimer son opinion)

| Fransk | Norsk |
|--------|-------|
| A mon avis, ... | Etter min mening, ... |
| Je pense que... | Jeg tror/mener at... |
| Je crois que... | Jeg tror at... |
| Je trouve que... | Jeg synes at... |
| Selon moi, ... | Etter mitt syn, ... |
| Il me semble que... | Det virker som om... |
| Je suis convaincu(e) que... | Jeg er overbevist om at... |
| D'apres moi, ... | Etter min oppfatning, ... |

**Eksempler:**
- **A mon avis**, les reseaux sociaux sont utiles. (Etter min mening er sosiale medier nyttige.)
- **Je pense que** le sport est important. (Jeg mener at sport er viktig.)
- **Je trouve que** ce film est excellent. (Jeg synes denne filmen er utmerket.)`,
    },
    {
      id: 'fransk-2-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Uttrykke meninger',
      problem: `Oversett til fransk:
a) Etter min mening er fransk et vakkert sprak.
b) Jeg synes at skolen er viktig.
c) Jeg er overbevist om at vi ma handle.`,
      solution: `a) **A mon avis**, le francais est une belle langue.
b) **Je trouve que** l'ecole est importante.
c) **Je suis convaincu(e) que** nous devons agir.

Merk: Etter "je pense que", "je crois que", "je trouve que" folger en setning med subjekt + verb.`,
    },
    {
      id: 'fransk-2-9-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fyll inn riktig uttrykk for a si din mening.',
        subTasks: [
          { label: 'a', task: '___, le francais est facile. (Etter min mening)', solution: 'A mon avis' },
          { label: 'b', task: '___ c\'est une bonne idee. (Jeg synes at)', solution: 'Je trouve que' },
          { label: 'c', task: '___ il a raison. (Jeg tror at)', solution: 'Je crois que' },
          { label: 'd', task: '___, c\'est important. (Etter mitt syn)', solution: 'Selon moi' },
        ],
        solution: 'a) A mon avis, b) Je trouve que, c) Je crois que, d) Selon moi',
        hints: ['A mon avis = Etter min mening', 'Je trouve que = Jeg synes at'],
      },
    },
    {
      id: 'fransk-2-9-2-text-2',
      type: 'text',
      content: `## Vaere enig og uenig (Etre d'accord / pas d'accord)

**Enig:**
| Fransk | Norsk |
|--------|-------|
| Je suis d'accord. | Jeg er enig. |
| Tout a fait ! | Helt riktig! |
| Exactement ! | Nettopp! |
| C'est vrai. | Det er sant. |
| Tu as / Vous avez raison. | Du har / De har rett. |
| Absolument ! | Absolutt! |

**Uenig:**
| Fransk | Norsk |
|--------|-------|
| Je ne suis pas d'accord. | Jeg er ikke enig. |
| Ce n'est pas vrai. | Det er ikke sant. |
| Je ne pense pas que... | Jeg tror ikke at... |
| Au contraire, ... | Tvert imot, ... |
| Tu as / Vous avez tort. | Du tar / De tar feil. |
| Pas du tout ! | Ikke i det hele tatt! |`,
    },
    {
      id: 'fransk-2-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Enig og uenig',
      problem: `Hvordan sier du pa fransk:
a) Jeg er enig med deg.
b) Det er ikke sant.
c) Du har rett.`,
      solution: `a) Je suis d'accord avec toi.
b) Ce n'est pas vrai.
c) Tu as raison.

**Merk:** "Je ne pense pas que" etterfolgses av **subjonctif**: Je ne pense pas que ce **soit** vrai.`,
    },
    {
      id: 'fransk-2-9-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg er ikke enig.', solution: 'Je ne suis pas d\'accord.' },
          { label: 'b', task: 'Helt riktig!', solution: 'Tout a fait !' },
          { label: 'c', task: 'Tvert imot!', solution: 'Au contraire !' },
          { label: 'd', task: 'Absolutt!', solution: 'Absolument !' },
        ],
        solution: 'a) Je ne suis pas d\'accord. b) Tout a fait ! c) Au contraire ! d) Absolument !',
        hints: ['d\'accord = enig', 'Au contraire = Tvert imot'],
      },
    },
    {
      id: 'fransk-2-9-2-text-3',
      type: 'text',
      content: `## Strukturere argumenter (Structurer ses arguments)

**Introdusere argumenter:**
| Fransk | Norsk |
|--------|-------|
| D'une part... d'autre part... | Pa den ene siden... pa den andre siden... |
| Premierement... deuxiemement... | For det forste... for det andre... |
| D'abord... ensuite... enfin... | Forst... deretter... til slutt... |
| En premier lieu... en second lieu... | I forste omgang... i andre omgang... |

**Legge til argumenter:**
| Fransk | Norsk |
|--------|-------|
| De plus, ... | I tillegg, ... |
| En outre, ... | Dessuten, ... |
| Par ailleurs, ... | For ovrig, ... |
| Il faut aussi noter que... | Man ma ogsa merke seg at... |

**Motsi / innvende:**
| Fransk | Norsk |
|--------|-------|
| Cependant, ... | Imidlertid, ... |
| Pourtant, ... | Likevel, ... |
| Neanmoins, ... | Ikke desto mindre, ... |
| Mais, ... | Men, ... |
| En revanche, ... | Derimot, ... |

**Konkludere:**
| Fransk | Norsk |
|--------|-------|
| En conclusion, ... | Avslutningsvis, ... |
| Pour conclure, ... | For a oppsummere, ... |
| En resume, ... | Kort sagt, ... |
| Finalement, ... | Til slutt, ... |`,
    },
    {
      id: 'fransk-2-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Strukturert argument',
      problem: `Les teksten og identifiser bindeordene:

"A mon avis, il est important de proteger l'environnement. D'une part, nous devons reduire la pollution. D'autre part, il faut preserver la nature. De plus, les energies renouvelables sont l'avenir. Cependant, cela coute cher. En conclusion, nous devons tous faire un effort."`,
      solution: `**Bindeord funnet:**
1. **A mon avis** - innleder mening
2. **D'une part** - forste side av saken
3. **D'autre part** - andre side av saken
4. **De plus** - legger til argument
5. **Cependant** - innvending
6. **En conclusion** - avslutning

Teksten er godt strukturert med tydelige overganger mellom argumentene.`,
    },
    {
      id: 'fransk-2-9-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett bindeordene til fransk.',
        subTasks: [
          { label: 'a', task: 'I tillegg', solution: 'De plus' },
          { label: 'b', task: 'Imidlertid', solution: 'Cependant' },
          { label: 'c', task: 'Avslutningsvis', solution: 'En conclusion' },
          { label: 'd', task: 'Pa den ene siden... pa den andre siden...', solution: 'D\'une part... d\'autre part...' },
        ],
        solution: 'a) De plus, b) Cependant, c) En conclusion, d) D\'une part... d\'autre part...',
        hints: ['Disse bindeordene brukes mye i argumenterende tekster', 'Cependant = Imidlertid/Likevel'],
      },
    },
    {
      id: 'fransk-2-9-2-text-4',
      type: 'text',
      content: `## Oppsummering - Argumentasjon

For a argumentere godt pa fransk, trenger du:

1. **Uttrykke mening:** A mon avis, Je pense que, Je trouve que
2. **Vaere enig/uenig:** Je suis (pas) d'accord, Tout a fait, Au contraire
3. **Strukturere:** D'une part... d'autre part, De plus, Cependant
4. **Konkludere:** En conclusion, Pour conclure, En resume

**Tips:** Bruk alltid minst to argumenter for og imot i en debattekst!`,
    },
    {
      id: 'fransk-2-9-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfar setningene med riktig fransk uttrykk.',
        subTasks: [
          { label: 'a', task: '___, le sport est bon pour la sante. (Etter min mening)', solution: 'A mon avis' },
          { label: 'b', task: 'Le sport est amusant. ___, il est bon pour la sante. (I tillegg)', solution: 'De plus' },
          { label: 'c', task: 'Le sport est sain. ___, il peut etre dangereux. (Likevel)', solution: 'Pourtant' },
          { label: 'd', task: '___, le sport est important pour tout le monde. (Avslutningsvis)', solution: 'En conclusion' },
        ],
        solution: 'a) A mon avis, b) De plus, c) Pourtant, d) En conclusion',
        hints: ['Velg bindeordet som passer logisk i sammenhengen'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.3: Raconter et decrire - Fortelle og beskrive
// ============================================================================

export const CHAPTER_FRANSK_2_9_3: TextbookChapter = {
  id: 'fransk-2-9-3',
  courseId: 'fransk-2',
  chapterNumber: '9.3',
  title: 'Raconter et decrire',
  subtitle: 'Fortelle og beskrive',
  description: 'Laer fortellerteknikker, beskrivende vokabular og bruk av fortidsformer i fortellinger pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'fortelle historier og beskrive hendelser pa fransk',
    'bruke passe compose og imparfait riktig i fortellinger',
  ],
  content: [
    {
      id: 'fransk-2-9-3-intro',
      type: 'text',
      content: `## Fortelle og beskrive pa fransk

A kunne fortelle historier og beskrive opplevelser er viktig for a kommunisere godt pa fransk. Nar du forteller pa fransk, bruker du to fortidsformer: **passe compose** for handlinger og **imparfait** for beskrivelser og bakgrunn.

I dette kapittelet laerer du teknikker for a fortelle og beskrive pa en engasjerende mate.`,
    },
    {
      id: 'fransk-2-9-3-text-1',
      type: 'text',
      content: `## Fortellerteknikker (Techniques narratives)

**Starte en fortelling:**
| Fransk | Norsk |
|--------|-------|
| Un jour, ... | En dag, ... |
| Il etait une fois... | Det var en gang... |
| L'annee derniere, ... | I fjor, ... |
| Pendant les vacances, ... | I ferien, ... |
| Quand j'etais petit(e), ... | Da jeg var liten, ... |
| Ce matin-la, ... | Den morgenen, ... |

**Tidsuttrykk for a folge kronologien:**
| Fransk | Norsk |
|--------|-------|
| D'abord, ... | Forst, ... |
| Puis, ... / Ensuite, ... | Sa, ... / Deretter, ... |
| Apres cela, ... | Etter det, ... |
| Soudain, ... / Tout a coup, ... | Plutselig, ... |
| Finalement, ... | Til slutt, ... |
| A la fin, ... | Pa slutten, ... |`,
    },
    {
      id: 'fransk-2-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: En fortelling',
      problem: `Les fortellingen og identifiser tidsuttrykkene:

"L'annee derniere, je suis alle en France. D'abord, j'ai visite Paris. Puis, je suis alle a Lyon. Soudain, j'ai rencontre un vieil ami. Finalement, nous avons passe la soiree ensemble."`,
      solution: `**Tidsuttrykk:**
1. **L'annee derniere** - I fjor (setter tidsrammen)
2. **D'abord** - Forst
3. **Puis** - Sa/Deretter
4. **Soudain** - Plutselig (uventet hendelse)
5. **Finalement** - Til slutt

Fortellingen folger en tydelig kronologisk struktur.`,
    },
    {
      id: 'fransk-2-9-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett tidsuttrykkene til fransk.',
        subTasks: [
          { label: 'a', task: 'En dag', solution: 'Un jour' },
          { label: 'b', task: 'Plutselig', solution: 'Soudain / Tout a coup' },
          { label: 'c', task: 'Til slutt', solution: 'Finalement / A la fin' },
          { label: 'd', task: 'Deretter', solution: 'Ensuite / Puis' },
        ],
        solution: 'a) Un jour, b) Soudain / Tout a coup, c) Finalement / A la fin, d) Ensuite / Puis',
        hints: ['Soudain og Tout a coup betyr begge "plutselig"', 'Puis og Ensuite betyr begge "sa/deretter"'],
      },
    },
    {
      id: 'fransk-2-9-3-text-2',
      type: 'text',
      content: `## Passe compose og imparfait i fortelling

I en fortelling bruker vi de to fortidsformene slik:

**Imparfait** (beskrivelser og bakgrunn):
- Vaer, landskap, stemning: *Il faisait beau.* (Det var fint vaer.)
- Utseende og egenskaper: *Elle avait les cheveux blonds.* (Hun hadde blondt har.)
- Vanlige handlinger: *Chaque ete, nous allions a la mer.* (Hver sommer dro vi til sjoen.)
- Pagaende handlinger: *Je marchais dans la rue quand...* (Jeg gikk pa gaten da...)

**Passe compose** (handlinger og hendelser):
- Enkelthendelser: *J'ai achete un livre.* (Jeg kjopte en bok.)
- Avsluttede handlinger: *Nous sommes arrives a 10 heures.* (Vi ankom klokken 10.)
- Plutselige hendelser: *Soudain, il a commence a pleuvoir.* (Plutselig begynte det a regne.)
- Rekker av hendelser: *Il a mange, puis il est parti.* (Han spiste, sa dro han.)`,
    },
    {
      id: 'fransk-2-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Imparfait vs. passe compose',
      problem: `Velg riktig tid (passe compose eller imparfait):
a) Il (faire) ___ beau quand nous (arriver) ___.
b) Je (lire) ___ un livre quand le telephone (sonner) ___.
c) Quand j'(etre) ___ petit, je (jouer) ___ au football.`,
      solution: `a) Il **faisait** beau quand nous **sommes arrives**. (Imparfait for vaer, PC for handling)
b) Je **lisais** un livre quand le telephone **a sonne**. (Imparfait for pagaende, PC for avbrytelse)
c) Quand j'**etais** petit, je **jouais** au football. (Begge imparfait: tilstand + vane)

**Huskeregel:** Imparfait = bakgrunn/scene, Passe compose = handling som skjer.`,
    },
    {
      id: 'fransk-2-9-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig tid: passe compose (PC) eller imparfait (IMP)?',
        subTasks: [
          { label: 'a', task: 'Il ___ chaud. (faire) - beskriver vaeret', solution: 'faisait (IMP)' },
          { label: 'b', task: 'Soudain, il ___ a pleuvoir. (commencer) - plutselig hendelse', solution: 'a commence (PC)' },
          { label: 'c', task: 'Quand j\'___ petit, ... (etre) - tilstand i fortiden', solution: 'etais (IMP)' },
          { label: 'd', task: 'Hier, j\'___ un gateau. (acheter) - avsluttet handling', solution: 'ai achete (PC)' },
        ],
        solution: 'a) faisait (IMP), b) a commence (PC), c) etais (IMP), d) ai achete (PC)',
        hints: ['Imparfait: beskrivelser, vaner, bakgrunn', 'Passe compose: handlinger, enkelthendelser'],
      },
    },
    {
      id: 'fransk-2-9-3-text-3',
      type: 'text',
      content: `## Beskrivende vokabular (Vocabulaire descriptif)

**Beskrive personer:**
| Fransk | Norsk |
|--------|-------|
| grand(e) / petit(e) | hoy / liten |
| mince / gros(se) | slank / tykk |
| les cheveux blonds/bruns/noirs | blondt/brunt/svart har |
| les yeux bleus/verts/marron | bla/gronne/brune oyne |
| sympathique / gentil(le) | hyggelig / snill |
| souriant(e) | blid/smilende |

**Beskrive steder:**
| Fransk | Norsk |
|--------|-------|
| magnifique / beau(belle) | storslatt / vakker |
| pittoresque | pittoresk |
| anime(e) / calme | livlig / rolig |
| ancien(ne) / moderne | gammelt / moderne |
| bruyant(e) / silencieux(se) | brakete / stille |`,
    },
    {
      id: 'fransk-2-9-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Beskrivelse',
      problem: `Oversett beskrivelsen til norsk:

"La ville etait magnifique. Les rues etaient animees et les gens etaient souriants. Il faisait beau et le ciel etait bleu."`,
      solution: `"Byen var storslatt. Gatene var livlige og menneskene var blide. Det var fint vaer og himmelen var bla."

**Merk:** Alt er i imparfait fordi det er beskrivelser av en scene/bakgrunn, ikke handlinger.`,
    },
    {
      id: 'fransk-2-9-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk. Bruk imparfait for beskrivelser.',
        subTasks: [
          { label: 'a', task: 'Hun var hoy og slank.', solution: 'Elle etait grande et mince.' },
          { label: 'b', task: 'Huset var gammelt og vakkert.', solution: 'La maison etait ancienne et belle.' },
          { label: 'c', task: 'Det var kaldt og det regnet.', solution: 'Il faisait froid et il pleuvait.' },
        ],
        solution: 'a) Elle etait grande et mince. b) La maison etait ancienne et belle. c) Il faisait froid et il pleuvait.',
        hints: ['Bruk imparfait (etait, faisait) for beskrivelser', 'Il faisait + adjektiv for vaer'],
      },
    },
    {
      id: 'fransk-2-9-3-text-4',
      type: 'text',
      content: `## Oppsummering - Fortelle og beskrive

| Funksjon | Tid | Eksempel |
|----------|-----|----------|
| Beskrive scene | Imparfait | Il faisait beau. |
| Fortelle handling | Passe compose | J'ai visite le musee. |
| Bakgrunn | Imparfait | Les oiseaux chantaient. |
| Plutselig hendelse | Passe compose | Soudain, il a crie. |
| Vane i fortiden | Imparfait | Je jouais au foot chaque jour. |

**Tips:** Tenk pa det som en film - imparfait er bakgrunnsmusikken og scenografien, passe compose er handlingen!`,
    },
    {
      id: 'fransk-2-9-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfar fortellingen med riktig verbform (PC eller IMP).',
        subTasks: [
          { label: 'a', task: 'C\'___ une belle journee. (etre - bakgrunn)', solution: 'etait (IMP)' },
          { label: 'b', task: 'Je ___ dans le parc. (marcher - pagaende)', solution: 'marchais (IMP)' },
          { label: 'c', task: 'Soudain, j\'___ un bruit. (entendre - hendelse)', solution: 'ai entendu (PC)' },
          { label: 'd', task: 'Je ___ et j\'___ un chat. (se retourner / voir - handlinger)', solution: 'me suis retourne(e) / ai vu (PC)' },
        ],
        solution: 'a) etait (IMP), b) marchais (IMP), c) ai entendu (PC), d) me suis retourne(e) / ai vu (PC)',
        hints: ['Bakgrunn og pagaende = imparfait', 'Plutselig hendelse og handlinger = passe compose'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9.4: Registre formel et informel - Formelt og uformelt register
// ============================================================================

export const CHAPTER_FRANSK_2_9_4: TextbookChapter = {
  id: 'fransk-2-9-4',
  courseId: 'fransk-2',
  chapterNumber: '9.4',
  title: 'Registre formel et informel',
  subtitle: 'Formelt og uformelt register',
  description: 'Laer forskjellen mellom formelt og uformelt sprak pa fransk, inkludert tu/vous i skriving, formelle uttrykk og slang.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skille mellom formelt og uformelt register pa fransk',
    'bruke riktig sprakregister avhengig av situasjon og mottaker',
  ],
  content: [
    {
      id: 'fransk-2-9-4-intro',
      type: 'text',
      content: `## Formelt og uformelt register pa fransk

Pa fransk er forskjellen mellom formelt og uformelt sprak mye storre enn pa norsk. Det er viktig a bruke riktig register avhengig av situasjonen. A bruke feil register kan oppfattes som uhoflig eller merkelig.

I dette kapittelet laerer du a gjenkjenne og bruke bade formelt og uformelt sprak.`,
    },
    {
      id: 'fransk-2-9-4-text-1',
      type: 'text',
      content: `## Tu vs. vous

Den viktigste forskjellen mellom formelt og uformelt fransk:

**Tu (uformelt):**
- Venner og jevnaldrende
- Familie
- Barn
- Dyr
- Pa sosiale medier

**Vous (formelt):**
- Ukjente voksne
- Laerere, sjefer, eldre
- I forretningssammenheng
- Offisielle situasjoner
- Nar du er usikker

**Eksempler:**
| Uformelt (tu) | Formelt (vous) |
|----------------|----------------|
| Tu veux un cafe ? | Vous voulez un cafe ? |
| Comment tu t'appelles ? | Comment vous appelez-vous ? |
| T'as quel age ? | Quel age avez-vous ? |
| Ca va ? | Comment allez-vous ? |`,
    },
    {
      id: 'fransk-2-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Tu eller vous?',
      problem: `Velg tu eller vous for disse situasjonene:
a) Du snakker med en ny klassevenninne.
b) Du snakker med legen din.
c) Du skriver til bestemoren din.
d) Du er i et jobbintervju.`,
      solution: `a) **Tu** - jevnaldrende pa skolen
b) **Vous** - legen er en fagperson du ikke er naer
c) **Tu** - besteforeldre er naer familie
d) **Vous** - formell situasjon, du mater en fagperson

**Merk:** I Frankrike bruker ungdommer nesten alltid "tu" seg imellom, selv om de ikke kjenner hverandre.`,
    },
    {
      id: 'fransk-2-9-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv om setningene fra tu-form til vous-form.',
        subTasks: [
          { label: 'a', task: 'Tu veux un cafe ?', solution: 'Vous voulez un cafe ?' },
          { label: 'b', task: 'Comment tu t\'appelles ?', solution: 'Comment vous appelez-vous ?' },
          { label: 'c', task: 'Tu as compris ?', solution: 'Vous avez compris ?' },
          { label: 'd', task: 'Tu peux m\'aider ?', solution: 'Vous pouvez m\'aider ? / Pourriez-vous m\'aider ?' },
        ],
        solution: 'a) Vous voulez un cafe ? b) Comment vous appelez-vous ? c) Vous avez compris ? d) Vous pouvez m\'aider ?',
        hints: ['Bytt tu med vous og endre verbformen', 'Vous bruker samme form som 2. person flertall'],
      },
    },
    {
      id: 'fransk-2-9-4-text-2',
      type: 'text',
      content: `## Formelle uttrykk (Le registre soutenu)

I formelt sprak bruker man lengre og mer hoflige uttrykk:

| Uformelt | Formelt | Norsk |
|----------|---------|-------|
| Je veux... | Je voudrais... / Je souhaiterais... | Jeg vil gjerne... |
| Donne-moi... | Pourriez-vous me donner... ? | Kunne De gi meg... ? |
| Quoi ? | Pardon ? / Comment ? | Unnskyld? / Hva sa De? |
| OK / D'accord | Bien entendu / Certainement | Javel / Selvfolgelig |
| Desolee | Je vous prie de m'excuser | Jeg ber Dem unnskylde meg |
| Merci | Je vous remercie | Jeg takker Dem |
| Au revoir | Je vous souhaite une bonne journee | Jeg onsker Dem en god dag |`,
    },
    {
      id: 'fransk-2-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Uformelt til formelt',
      problem: `Gjor disse uformelle uttrykkene formelle:
a) Je veux parler au directeur.
b) Donne-moi le menu.
c) OK, pas de probleme.`,
      solution: `a) **Je souhaiterais** parler au directeur, s'il vous plait.
b) **Pourriez-vous me donner** le menu, s'il vous plait ?
c) **Bien entendu**, ce n'est pas un probleme.

Merk at formelt sprak bruker kondisjonalis (voudrais, souhaiterais, pourriez) og hoflighetsfrasene "s'il vous plait".`,
    },
    {
      id: 'fransk-2-9-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor uttrykkene formelle.',
        subTasks: [
          { label: 'a', task: 'Je veux un rendez-vous.', solution: 'Je voudrais / Je souhaiterais un rendez-vous.' },
          { label: 'b', task: 'Merci.', solution: 'Je vous remercie.' },
          { label: 'c', task: 'Quoi ?', solution: 'Pardon ? / Comment ?' },
          { label: 'd', task: 'Desolee.', solution: 'Je vous prie de m\'excuser.' },
        ],
        solution: 'a) Je voudrais un rendez-vous. b) Je vous remercie. c) Pardon ? d) Je vous prie de m\'excuser.',
        hints: ['Bruk kondisjonalis for foresporsler', 'Legg til "s\'il vous plait" for hoflighetens skyld'],
      },
    },
    {
      id: 'fransk-2-9-4-text-3',
      type: 'text',
      content: `## Uformelt sprak og slang (Le registre familier / l'argot)

Uformelt fransk er svart forskjellig fra laereboker. Her er noen vanlige trekk:

**Forkortelser og endringer:**
| Standard | Uformelt/Slang | Norsk |
|----------|----------------|-------|
| Il n'y a pas | Y'a pas | Det finnes ikke |
| Je ne sais pas | J'sais pas / Chais pas | Vet ikke |
| Tu es | T'es | Du er |
| Il y a | Y'a | Det er/finnes |
| C'est | C' | Det er |

**Vanlige slanguttrykk:**
| Slang | Standard | Norsk |
|-------|----------|-------|
| C'est cool / genial | C'est bien / formidable | Det er kult / flott |
| C'est nul | C'est mauvais | Det er darlig |
| un mec / un gars | un homme / un garcon | en fyr / en gutt |
| une meuf / une nana | une femme / une fille | ei jente / ei dame |
| kiffer | aimer beaucoup | digge / elske |
| bosser | travailler | jobbe |
| bouffer | manger | spise (uformelt) |`,
    },
    {
      id: 'fransk-2-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Gjenkjenne registre',
      problem: `Hvilket register er dette? (formelt, standard, uformelt)
a) "Pourriez-vous m'indiquer le chemin, s'il vous plait ?"
b) "Tu sais ou c'est la gare ?"
c) "Ouais, c'est cool, j'kiffe ce film !"`,
      solution: `a) **Formelt** - Pourriez-vous (kondisjonalis), s'il vous plait (hoflighetsfrase)
b) **Standard/uformelt** - Tu-form, vanlig sporsmalsstilling
c) **Veldig uformelt/slang** - "Ouais" (ja), "j'kiffe" (jeg digger), forkortelser

Det er viktig a tilpasse registeret etter situasjonen.`,
    },
    {
      id: 'fransk-2-9-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om fra uformelt/slang til standard fransk.',
        subTasks: [
          { label: 'a', task: 'J\'sais pas.', solution: 'Je ne sais pas.' },
          { label: 'b', task: 'Y\'a pas de probleme.', solution: 'Il n\'y a pas de probleme.' },
          { label: 'c', task: 'T\'es cool !', solution: 'Tu es sympathique / formidable !' },
          { label: 'd', task: 'Je kiffe ce livre.', solution: 'J\'aime beaucoup ce livre.' },
        ],
        solution: 'a) Je ne sais pas. b) Il n\'y a pas de probleme. c) Tu es sympathique ! d) J\'aime beaucoup ce livre.',
        hints: ['Legg tilbake "ne" i nektelser', 'Erstatt slang med standardord'],
      },
    },
    {
      id: 'fransk-2-9-4-text-4',
      type: 'text',
      content: `## Oppsummering - Sprakregistre

| Trekk | Formelt | Standard | Uformelt |
|-------|---------|----------|----------|
| Tiltale | Vous | Tu/Vous | Tu |
| Nekting | ne...pas (alltid) | ne...pas | bare "pas" |
| Ordvalg | Avansert | Vanlig | Slang |
| Setninger | Lange, komplekse | Middels | Korte, forkortede |
| Bruk | Brev, forretning | Skole, dagligtale | Venner, SMS |

**Tips:** Nar du er usikker, er det bedre a vaere for formell enn for uformell!`,
    },
    {
      id: 'fransk-2-9-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-9-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvilket register passer best? (formelt/standard/uformelt)',
        subTasks: [
          { label: 'a', task: 'Du skriver en jobbsoknad.', solution: 'Formelt' },
          { label: 'b', task: 'Du sender en SMS til en venn.', solution: 'Uformelt' },
          { label: 'c', task: 'Du holder en presentasjon pa skolen.', solution: 'Standard' },
          { label: 'd', task: 'Du skriver til rektoren.', solution: 'Formelt' },
        ],
        solution: 'a) Formelt, b) Uformelt, c) Standard, d) Formelt',
        hints: ['Jobbsoknader og brev til autoriteter = formelt', 'Kommunikasjon med venner = uformelt'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.1: Les temps du passe - revision - Fortidsformene - repetisjon
// ============================================================================

export const CHAPTER_FRANSK_2_10_1: TextbookChapter = {
  id: 'fransk-2-10-1',
  courseId: 'fransk-2',
  chapterNumber: '10.1',
  title: 'Les temps du passe - revision',
  subtitle: 'Fortidsformene - repetisjon',
  description: 'Repetisjon av passe compose og imparfait, nar man bruker hver form, og blandede ovelser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'mestre passe compose og imparfait og vite nar man bruker hver form',
    'bruke begge fortidsformene korrekt i sammenhengende tekst',
  ],
  content: [
    {
      id: 'fransk-2-10-1-intro',
      type: 'text',
      content: `## Fortidsformene - repetisjon

De to viktigste fortidsformene pa fransk er **passe compose** og **imparfait**. Mange elever synes det er vanskelig a vite nar man skal bruke hvilken form. I dette kapittelet repeterer vi reglene og over med blandede oppgaver.`,
    },
    {
      id: 'fransk-2-10-1-text-1',
      type: 'text',
      content: `## Passe compose - repetisjon

**Dannelse:** avoir/etre + partisipp

**Med avoir (de fleste verb):**
| Person | Eksempel: manger |
|--------|-----------------|
| j' | ai mange |
| tu | as mange |
| il/elle | a mange |
| nous | avons mange |
| vous | avez mange |
| ils/elles | ont mange |

**Med etre (bevegelsesverb + refleksive verb):**
| Person | Eksempel: aller |
|--------|----------------|
| je | suis alle(e) |
| tu | es alle(e) |
| il/elle | est alle(e) |
| nous | sommes alle(e)s |
| vous | etes alle(e)(s) |
| ils/elles | sont alle(e)s |

**Verb med etre:** aller, venir, partir, arriver, entrer, sortir, monter, descendre, naitre, mourir, rester, tomber, retourner, devenir, passer (+ refleksive verb)`,
    },
    {
      id: 'fransk-2-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Passe compose',
      problem: `Sett verbene i passe compose:
a) Je (manger) ___ une pomme.
b) Elle (aller) ___ au cinema.
c) Nous (se lever) ___ tot.`,
      solution: `a) J'**ai mange** une pomme. (avoir + partisipp)
b) Elle **est allee** au cinema. (etre + partisipp, samsvar med hunkjonn)
c) Nous **nous sommes leve(e)s** tot. (refleksivt verb -> etre)

**Merk:** Med etre-verb samsvarer partisippet i kjonn og tall med subjektet.`,
    },
    {
      id: 'fransk-2-10-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i passe compose. Velg avoir eller etre.',
        subTasks: [
          { label: 'a', task: 'Il (acheter) ___ un livre.', solution: 'a achete (avoir)' },
          { label: 'b', task: 'Elle (partir) ___ hier.', solution: 'est partie (etre, hunkjonn)' },
          { label: 'c', task: 'Nous (finir) ___ le travail.', solution: 'avons fini (avoir)' },
          { label: 'd', task: 'Ils (arriver) ___ en retard.', solution: 'sont arrives (etre, hankjonn flertall)' },
        ],
        solution: 'a) a achete, b) est partie, c) avons fini, d) sont arrives',
        hints: ['Bevegelsesverb bruker etre', 'Med etre: samsvar i kjonn og tall'],
      },
    },
    {
      id: 'fransk-2-10-1-text-2',
      type: 'text',
      content: `## Imparfait - repetisjon

**Dannelse:** Stamme fra nous-formen i presens + endelser

**Endelser:**
| Person | Endelse | Eksempel: parler |
|--------|---------|-----------------|
| je | -ais | parlais |
| tu | -ais | parlais |
| il/elle | -ait | parlait |
| nous | -ions | parlions |
| vous | -iez | parliez |
| ils/elles | -aient | parlaient |

**Unntak:** etre -> j'etais, tu etais, il etait, nous etions, vous etiez, ils etaient

**Bruk av imparfait:**
1. Beskrivelser i fortiden
2. Vaner i fortiden (= "pleide a")
3. Tilstander og folelser
4. Pagaende handlinger (bakgrunn)
5. Vaer og tid
6. Alder i fortiden`,
    },
    {
      id: 'fransk-2-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Imparfait',
      problem: `Sett verbene i imparfait:
a) Je (etre) ___ fatigue.
b) Il (faire) ___ beau.
c) Nous (jouer) ___ au tennis chaque samedi.`,
      solution: `a) J'**etais** fatigue. (tilstand)
b) Il **faisait** beau. (vaer)
c) Nous **jouions** au tennis chaque samedi. (vane)

**Huskeregel for imparfait-endelser:** -ais, -ais, -ait, -ions, -iez, -aient`,
    },
    {
      id: 'fransk-2-10-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i imparfait.',
        subTasks: [
          { label: 'a', task: 'Il (faire) ___ froid.', solution: 'faisait' },
          { label: 'b', task: 'Je (avoir) ___ 10 ans.', solution: 'avais' },
          { label: 'c', task: 'Nous (habiter) ___ a Paris.', solution: 'habitions' },
          { label: 'd', task: 'Ils (etre) ___ contents.', solution: 'etaient' },
        ],
        solution: 'a) faisait, b) avais, c) habitions, d) etaient',
        hints: ['Stamme fra nous-form presens + imparfait-endelse', 'etre er uregelmessig: et- + endelser'],
      },
    },
    {
      id: 'fransk-2-10-1-text-3',
      type: 'text',
      content: `## Passe compose vs. imparfait - sammenligning

| Passe compose | Imparfait |
|---------------|-----------|
| Avsluttet handling | Pagaende handling |
| Enkelthendelse | Gjentatt handling / vane |
| Handling med begynnelse/slutt | Tilstand uten klar grense |
| "Hva skjedde?" | "Hvordan var det?" |

**Signalord for passe compose:**
- hier, la semaine derniere, soudain, tout a coup, un jour, a 10 heures

**Signalord for imparfait:**
- chaque jour, souvent, toujours, d'habitude, quand j'etais petit, pendant que

**Viktig:** Nar to ting skjer samtidig:
- **Bakgrunn (IMP)** + **hendelse (PC)**: *Je dormais quand le telephone a sonne.*
- **To pagaende handlinger (IMP + IMP)**: *Pendant qu'il lisait, elle cuisinait.*`,
    },
    {
      id: 'fransk-2-10-1-example-3',
      type: 'example',
      title: 'Eksempel 3: PC vs. IMP',
      problem: `Velg riktig tid:
a) Hier, je (aller) ___ au cinema.
b) Quand j'(etre) ___ petit, je (jouer) ___ au foot.
c) Il (pleuvoir) ___ quand nous (sortir) ___.`,
      solution: `a) Hier, je **suis alle(e)** au cinema. (PC - enkelthendelse, "hier")
b) Quand j'**etais** petit, je **jouais** au foot. (IMP + IMP - tilstand + vane)
c) Il **pleuvait** quand nous **sommes sorti(e)s**. (IMP bakgrunn + PC hendelse)`,
    },
    {
      id: 'fransk-2-10-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg passe compose (PC) eller imparfait (IMP) og bey verbet.',
        subTasks: [
          { label: 'a', task: 'Soudain, il (commencer) ___ a pleuvoir.', solution: 'a commence (PC - plutselig hendelse)' },
          { label: 'b', task: 'D\'habitude, nous (manger) ___ a midi.', solution: 'mangions (IMP - vane)' },
          { label: 'c', task: 'Elle (lire) ___ quand je (entrer) ___.', solution: 'lisait (IMP) / suis entre(e) (PC)' },
          { label: 'd', task: 'La semaine derniere, ils (visiter) ___ le musee.', solution: 'ont visite (PC - enkelthendelse)' },
        ],
        solution: 'a) a commence (PC), b) mangions (IMP), c) lisait (IMP) + suis entre(e) (PC), d) ont visite (PC)',
        hints: ['Se etter signalord: soudain/hier -> PC, d\'habitude/chaque -> IMP', 'Bakgrunn + hendelse = IMP + PC'],
      },
    },
    {
      id: 'fransk-2-10-1-text-4',
      type: 'text',
      content: `## Oppsummering - Fortidsformene

**Passe compose:**
- avoir/etre + partisipp
- Avsluttede handlinger, enkelthendelser, rekker av hendelser
- Signalord: hier, soudain, un jour

**Imparfait:**
- Stamme + -ais, -ais, -ait, -ions, -iez, -aient
- Beskrivelser, vaner, tilstander, bakgrunn
- Signalord: d'habitude, chaque jour, souvent

**Huskeregel:** Tenk pa det som en film. Imparfait er scenen (bakgrunn, vaer, stemning), passe compose er handlingene som skjer.`,
    },
    {
      id: 'fransk-2-10-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfar teksten med riktig fortidsform.',
        subTasks: [
          { label: 'a', task: 'C\'___ (etre) un beau jour d\'ete.', solution: 'etait (IMP - beskrivelse)' },
          { label: 'b', task: 'Le soleil ___ (briller) et les oiseaux ___ (chanter).', solution: 'brillait / chantaient (IMP - bakgrunn)' },
          { label: 'c', task: 'Soudain, un homme ___ (arriver) en courant.', solution: 'est arrive (PC - plutselig hendelse)' },
          { label: 'd', task: 'Il ___ (crier) : "Au secours !"', solution: 'a crie (PC - handling)' },
        ],
        solution: 'a) etait (IMP), b) brillait / chantaient (IMP), c) est arrive (PC), d) a crie (PC)',
        hints: ['Forst beskrivelse av scenen = IMP', 'Sa kommer handlingen = PC'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2: Les pronoms - revision - Pronomen - repetisjon
// ============================================================================

export const CHAPTER_FRANSK_2_10_2: TextbookChapter = {
  id: 'fransk-2-10-2',
  courseId: 'fransk-2',
  chapterNumber: '10.2',
  title: 'Les pronoms - revision',
  subtitle: 'Pronomen - repetisjon',
  description: 'Repetisjon av franske pronomen: COD, COI, y, en, og relativpronomenene qui, que, ou og dont.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke direkte og indirekte objektspronomen korrekt',
    'mestre pronomenene y, en og relativpronomenene qui, que, ou og dont',
  ],
  content: [
    {
      id: 'fransk-2-10-2-intro',
      type: 'text',
      content: `## Pronomen - repetisjon

Pronomen erstatter substantiver for a unnga gjentakelser. Pa fransk finnes det flere typer pronomen som alle har bestemte regler. I dette kapittelet repeterer vi de viktigste: direkte og indirekte objektspronomen, y, en, og relativpronomen.`,
    },
    {
      id: 'fransk-2-10-2-text-1',
      type: 'text',
      content: `## Direkte objektspronomen (COD - Complement d'objet direct)

Direkte objektspronomen erstatter et direkte objekt (uten preposisjon):

| Pronomen | Norsk | Erstatter |
|----------|-------|-----------|
| me (m') | meg | 1. person entall |
| te (t') | deg | 2. person entall |
| le (l') | ham / den (hankjonn) | 3. person hankjonn |
| la (l') | henne / den (hunkjonn) | 3. person hunkjonn |
| nous | oss | 1. person flertall |
| vous | dere / Dem | 2. person flertall |
| les | dem | 3. person flertall |

**Plassering:** For verbet (eller for hjeleverbet i passe compose)

**Eksempler:**
- Je vois Marie. -> Je **la** vois. (Jeg ser henne.)
- J'ai achete le livre. -> Je **l'**ai achete. (Jeg har kjopt den.)
- Tu connais mes amis ? -> Tu **les** connais ? (Kjenner du dem?)`,
    },
    {
      id: 'fransk-2-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: COD',
      problem: `Erstatt det understrekede med et pronomen:
a) Je mange **la pomme**.
b) Elle regarde **le film**.
c) Nous aimons **les chats**.`,
      solution: `a) Je **la** mange. (la pomme = hunkjonn -> la)
b) Elle **le** regarde. (le film = hankjonn -> le)
c) Nous **les** aimons. (les chats = flertall -> les)

Pronomenet star foran verbet.`,
    },
    {
      id: 'fransk-2-10-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Erstatt det uthevede med riktig COD-pronomen.',
        subTasks: [
          { label: 'a', task: 'Je lis **le journal**.', solution: 'Je le lis.' },
          { label: 'b', task: 'Tu connais **Marie** ?', solution: 'Tu la connais ?' },
          { label: 'c', task: 'Il a achete **les fleurs**.', solution: 'Il les a achetees.' },
          { label: 'd', task: 'Elle regarde **la television**.', solution: 'Elle la regarde.' },
        ],
        solution: 'a) Je le lis. b) Tu la connais ? c) Il les a achetees. d) Elle la regarde.',
        hints: ['Pronomenet star foran verbet', 'I PC: samsvar med COD nar det star foran'],
      },
    },
    {
      id: 'fransk-2-10-2-text-2',
      type: 'text',
      content: `## Indirekte objektspronomen (COI) og Y / EN

**COI (Complement d'objet indirect) - erstatter a + person:**
| Pronomen | Norsk |
|----------|-------|
| me (m') | (til) meg |
| te (t') | (til) deg |
| lui | (til) ham/henne |
| nous | (til) oss |
| vous | (til) dere/Dem |
| leur | (til) dem |

- Je parle **a Marie**. -> Je **lui** parle. (Jeg snakker til henne.)

**Y - erstatter a + sted (eller a + ting):**
- Je vais **a Paris**. -> J'**y** vais. (Jeg drar dit.)
- Je pense **a mon examen**. -> J'**y** pense. (Jeg tenker pa det.)

**EN - erstatter de + noe (eller mengde):**
- Je viens **de Paris**. -> J'**en** viens. (Jeg kommer derfra.)
- J'ai **trois livres**. -> J'**en** ai trois. (Jeg har tre av dem.)
- Tu veux **du cafe** ? -> Tu **en** veux ? (Vil du ha noe?)`,
    },
    {
      id: 'fransk-2-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: COI, Y og EN',
      problem: `Erstatt det understrekede med lui/leur, y eller en:
a) Je parle **a Pierre**.
b) Nous allons **au cinema**.
c) Elle a **deux soeurs**.`,
      solution: `a) Je **lui** parle. (a + person -> lui)
b) Nous **y** allons. (a + sted -> y)
c) Elle **en** a deux. (mengde -> en + tall)

**Merk:** Med "en" gjentar vi tallet: "J'en ai deux" (Jeg har to av dem).`,
    },
    {
      id: 'fransk-2-10-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Erstatt med lui/leur, y eller en.',
        subTasks: [
          { label: 'a', task: 'Je telephone **a mes parents**.', solution: 'Je leur telephone.' },
          { label: 'b', task: 'Il va **a l\'ecole**.', solution: 'Il y va.' },
          { label: 'c', task: 'Nous avons **cinq livres**.', solution: 'Nous en avons cinq.' },
          { label: 'd', task: 'Elle parle **a son frere**.', solution: 'Elle lui parle.' },
        ],
        solution: 'a) Je leur telephone. b) Il y va. c) Nous en avons cinq. d) Elle lui parle.',
        hints: ['a + person = lui/leur', 'a + sted = y', 'mengde/de + noe = en'],
      },
    },
    {
      id: 'fransk-2-10-2-text-3',
      type: 'text',
      content: `## Relativpronomen (Les pronoms relatifs)

Relativpronomen binder sammen to setninger:

| Pronomen | Funksjon | Eksempel |
|----------|----------|----------|
| **qui** | subjekt | L'homme **qui** parle est mon pere. (Mannen som snakker er faren min.) |
| **que (qu')** | direkte objekt | Le livre **que** je lis est bon. (Boken som jeg leser er god.) |
| **ou** | sted/tid | La ville **ou** j'habite est grande. (Byen der jeg bor er stor.) |
| **dont** | "om/av/til" (de) | Le film **dont** je parle est francais. (Filmen som jeg snakker om er fransk.) |

**Huskeregel:**
- **Qui** = subjekt (etter "qui" folger et verb direkte)
- **Que** = objekt (etter "que" folger et subjekt + verb)
- **Ou** = sted eller tid
- **Dont** = erstatter "de + noe" (parler de, avoir besoin de, etc.)`,
    },
    {
      id: 'fransk-2-10-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Relativpronomen',
      problem: `Fyll inn qui, que, ou eller dont:
a) La fille ___ chante est ma soeur.
b) Le gateau ___ tu as fait est delicieux.
c) La maison ___ j'habite est blanche.
d) Le livre ___ j'ai besoin est a la bibliotheque.`,
      solution: `a) La fille **qui** chante est ma soeur. (qui = subjekt, folger verb "chante")
b) Le gateau **que** tu as fait est delicieux. (que = objekt, folger subjekt "tu")
c) La maison **ou** j'habite est blanche. (ou = sted)
d) Le livre **dont** j'ai besoin est a la bibliotheque. (dont = "de" - avoir besoin **de**)`,
    },
    {
      id: 'fransk-2-10-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig relativpronomen: qui, que, ou eller dont.',
        subTasks: [
          { label: 'a', task: 'L\'homme ___ parle est professeur.', solution: 'qui' },
          { label: 'b', task: 'Le film ___ j\'ai vu etait genial.', solution: 'que' },
          { label: 'c', task: 'La ville ___ je suis ne est petite.', solution: 'ou' },
          { label: 'd', task: 'La chose ___ j\'ai peur, c\'est le noir.', solution: 'dont' },
        ],
        solution: 'a) qui, b) que, c) ou, d) dont',
        hints: ['Qui + verb = subjekt', 'Que + subjekt + verb = objekt', 'Ou = sted/tid', 'Dont = de + noe (avoir peur de)'],
      },
    },
    {
      id: 'fransk-2-10-2-text-4',
      type: 'text',
      content: `## Oppsummering - Pronomen

| Type | Pronomen | Erstatter |
|------|----------|-----------|
| COD | le, la, les | direkte objekt |
| COI | lui, leur | a + person |
| Y | y | a + sted/ting |
| EN | en | de + noe / mengde |
| Relativ | qui | subjekt i relativsetning |
| Relativ | que | objekt i relativsetning |
| Relativ | ou | sted/tid |
| Relativ | dont | de + noe |

**Plasseringsregel:** Pronomen star foran verbet (eller foran hjeleverbet i passe compose).`,
    },
    {
      id: 'fransk-2-10-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blanda ovelse: Velg riktig pronomen.',
        subTasks: [
          { label: 'a', task: 'Je vois Pierre. -> Je ___ vois.', solution: 'le' },
          { label: 'b', task: 'Elle parle a ses amis. -> Elle ___ parle.', solution: 'leur' },
          { label: 'c', task: 'La femme ___ habite ici est gentille. (relativpronomen)', solution: 'qui' },
          { label: 'd', task: 'Tu vas a Paris ? -> Tu ___ vas ?', solution: 'y' },
        ],
        solution: 'a) le (COD), b) leur (COI), c) qui (relativpronomen), d) y',
        hints: ['Tenk pa hva pronomenet erstatter', 'COD = direkte objekt, COI = a + person'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3: Subjonctif et conditionnel - revision - Subjonctif og kondisjonalis - repetisjon
// ============================================================================

export const CHAPTER_FRANSK_2_10_3: TextbookChapter = {
  id: 'fransk-2-10-3',
  courseId: 'fransk-2',
  chapterNumber: '10.3',
  title: 'Subjonctif et conditionnel - revision',
  subtitle: 'Subjonctif og kondisjonalis - repetisjon',
  description: 'Repetisjon av subjonctif og kondisjonalis: nar man bruker dem og oving pa dannelse og bruk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstae nar man bruker subjonctif og nar man bruker kondisjonalis',
    'danne og bruke begge formene korrekt i ulike sammenhenger',
  ],
  content: [
    {
      id: 'fransk-2-10-3-intro',
      type: 'text',
      content: `## Subjonctif og kondisjonalis - repetisjon

To av de mest utfordrende grammatiske formene pa fransk er **le subjonctif** og **le conditionnel**. Begge brukes i spesielle situasjoner, og det er viktig a vite nar man bruker hvilken. I dette kapittelet repeterer vi reglene for begge.`,
    },
    {
      id: 'fransk-2-10-3-text-1',
      type: 'text',
      content: `## Le conditionnel (Kondisjonalis) - repetisjon

**Dannelse:** Infinitiv + imparfait-endelser (-ais, -ais, -ait, -ions, -iez, -aient)

| Person | parler | finir | prendre |
|--------|--------|-------|---------|
| je | parlerais | finirais | prendrais |
| tu | parlerais | finirais | prendrais |
| il/elle | parlerait | finirait | prendrait |
| nous | parlerions | finirions | prendrions |
| vous | parleriez | finiriez | prendriez |
| ils/elles | parleraient | finiraient | prendraient |

**Uregelmessige stammer:**
| Verb | Stamme | Eksempel |
|------|--------|----------|
| etre | ser- | je serais |
| avoir | aur- | j'aurais |
| faire | fer- | je ferais |
| aller | ir- | j'irais |
| pouvoir | pourr- | je pourrais |
| vouloir | voudr- | je voudrais |
| devoir | devr- | je devrais |
| savoir | saur- | je saurais |`,
    },
    {
      id: 'fransk-2-10-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Kondisjonalis',
      problem: `Sett verbene i kondisjonalis:
a) Je (vouloir) ___ un cafe.
b) Tu (pouvoir) ___ m'aider ?
c) Nous (aller) ___ en France.`,
      solution: `a) Je **voudrais** un cafe. (Jeg ville gjerne ha en kaffe.)
b) Tu **pourrais** m'aider ? (Kunne du hjelpe meg?)
c) Nous **irions** en France. (Vi ville dra til Frankrike.)

**Merk:** Uregelmessige verb har spesielle stammer, men endelsene er alltid de samme.`,
    },
    {
      id: 'fransk-2-10-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i kondisjonalis.',
        subTasks: [
          { label: 'a', task: 'Je (aimer) ___ voyager.', solution: 'aimerais' },
          { label: 'b', task: 'Il (etre) ___ content.', solution: 'serait' },
          { label: 'c', task: 'Nous (avoir) ___ le temps.', solution: 'aurions' },
          { label: 'd', task: 'Vous (pouvoir) ___ venir ?', solution: 'pourriez' },
        ],
        solution: 'a) aimerais, b) serait, c) aurions, d) pourriez',
        hints: ['Regelmessig: infinitiv + endelse', 'Uregelmessig: spesiell stamme + endelse'],
      },
    },
    {
      id: 'fransk-2-10-3-text-2',
      type: 'text',
      content: `## Bruk av kondisjonalis

**1. Hoflig forespursel:**
- Je **voudrais** un cafe. (Jeg vil gjerne ha en kaffe.)
- **Pourriez**-vous m'aider ? (Kunne De hjelpe meg?)

**2. Onsker og drommer:**
- J'**aimerais** voyager. (Jeg skulle onske jeg kunne reise.)
- Il **voudrait** etre pilote. (Han skulle onske han var pilot.)

**3. Si-setninger (hypotetiske):**
- Si j'avais de l'argent, j'**acheterais** une voiture.
  (Hvis jeg hadde penger, ville jeg kjopt en bil.)
- Si j'etais riche, je **voyagerais** dans le monde entier.
  (Hvis jeg var rik, ville jeg reist rundt i hele verden.)

**Regel for si-setninger:** Si + imparfait -> kondisjonalis
(ALDRI: Si + kondisjonalis!)`,
    },
    {
      id: 'fransk-2-10-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Si-setninger',
      problem: `Fullfar si-setningene:
a) Si j'avais le temps, je (lire) ___ plus.
b) Si nous etions en France, nous (parler) ___ francais.
c) Si tu (etre) ___ la, je serais content.`,
      solution: `a) Si j'avais le temps, je **lirais** plus. (kondisjonalis i hovedsetning)
b) Si nous etions en France, nous **parlerions** francais. (kondisjonalis i hovedsetning)
c) Si tu **etais** la, je serais content. (imparfait etter "si")

**Huskeregel:** Si + imparfait, kondisjonalis. Aldri kondisjonalis etter "si"!`,
    },
    {
      id: 'fransk-2-10-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fullfar si-setningene med riktig form.',
        subTasks: [
          { label: 'a', task: 'Si j\'avais de l\'argent, je (voyager) ___.', solution: 'voyagerais (kondisjonalis)' },
          { label: 'b', task: 'Si elle (etre) ___ ici, elle serait contente.', solution: 'etait (imparfait)' },
          { label: 'c', task: 'Si nous avions le temps, nous (aller) ___ au cinema.', solution: 'irions (kondisjonalis)' },
          { label: 'd', task: 'Si tu (pouvoir) ___, tu viendrais ?', solution: 'pouvais (imparfait)' },
        ],
        solution: 'a) voyagerais (kond.), b) etait (imp.), c) irions (kond.), d) pouvais (imp.)',
        hints: ['Etter "si" = imparfait', 'Hovedsetningen = kondisjonalis'],
      },
    },
    {
      id: 'fransk-2-10-3-text-3',
      type: 'text',
      content: `## Le subjonctif - repetisjon

**Dannelse:** Stamme fra ils/elles-form presens + endelser: -e, -es, -e, -ions, -iez, -ent

| Person | parler | finir |
|--------|--------|-------|
| que je | parle | finisse |
| que tu | parles | finisses |
| qu'il/elle | parle | finisse |
| que nous | parlions | finissions |
| que vous | parliez | finissiez |
| qu'ils/elles | parlent | finissent |

**Uregelmessige verb i subjonctif:**
| Verb | Subjonctif |
|------|------------|
| etre | que je sois, que tu sois, qu'il soit, que nous soyons |
| avoir | que j'aie, que tu aies, qu'il ait, que nous ayons |
| faire | que je fasse |
| aller | que j'aille, que nous allions |
| pouvoir | que je puisse |
| savoir | que je sache |

**Bruk av subjonctif (etter que):**
1. **Onsker/vilje:** Je veux que tu **viennes**. (Jeg vil at du skal komme.)
2. **Folelser:** Je suis content(e) que tu **sois** la. (Jeg er glad for at du er her.)
3. **Tvil/nekting:** Je ne pense pas qu'il **puisse** venir. (Jeg tror ikke han kan komme.)
4. **Nodvendighet:** Il faut que nous **partions**. (Vi ma dra.)
5. **Etter visse uttrykk:** bien que, pour que, avant que, jusqu'a ce que`,
    },
    {
      id: 'fransk-2-10-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Subjonctif',
      problem: `Sett verbene i subjonctif:
a) Il faut que tu (faire) ___ tes devoirs.
b) Je veux que vous (etre) ___ a l'heure.
c) Je suis triste qu'il (partir) ___.`,
      solution: `a) Il faut que tu **fasses** tes devoirs. (faire -> fasse, fasses, ...)
b) Je veux que vous **soyez** a l'heure. (etre -> sois, sois, soit, soyons, soyez, soient)
c) Je suis triste qu'il **parte**. (partir -> parte, partes, parte, partions, ...)

Subjonctif brukes etter uttrykk som "il faut que", "je veux que", "je suis triste que".`,
    },
    {
      id: 'fransk-2-10-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i subjonctif.',
        subTasks: [
          { label: 'a', task: 'Il faut que je (aller) ___ au magasin.', solution: 'aille' },
          { label: 'b', task: 'Je veux qu\'il (savoir) ___ la verite.', solution: 'sache' },
          { label: 'c', task: 'Elle est contente que nous (venir) ___.', solution: 'venions' },
          { label: 'd', task: 'Bien qu\'il (etre) ___ fatigue, il travaille.', solution: 'soit' },
        ],
        solution: 'a) aille, b) sache, c) venions, d) soit',
        hints: ['Uregelmessige verb har egne subjonctif-former', 'Nous og vous har ofte former lik imparfait'],
      },
    },
    {
      id: 'fransk-2-10-3-text-4',
      type: 'text',
      content: `## Sammenligning: Kondisjonalis vs. subjonctif

| | Kondisjonalis | Subjonctif |
|---|---------------|------------|
| **Uttrykker** | Hypotetisk / hoflig | Nodvendig / onskelig |
| **Etter** | si + imparfait | il faut que, je veux que |
| **Dannelse** | Infinitiv + IMP-endelser | ils-stamme + egne endelser |
| **Eksempel** | Je voudrais partir. | Il faut que je parte. |
| | Si j'avais, je partirais. | Je veux qu'il parte. |

**Tips:** Kondisjonalis star aldri etter "que" i en biseinning. Subjonctif star alltid etter "que" (med de rette triggerordene).`,
    },
    {
      id: 'fransk-2-10-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig form: kondisjonalis (KOND) eller subjonctif (SUBJ)?',
        subTasks: [
          { label: 'a', task: 'Si j\'avais le temps, je ___ (venir). (hypotetisk)', solution: 'viendrais (KOND)' },
          { label: 'b', task: 'Il faut que tu ___ (venir). (nodvendighet)', solution: 'viennes (SUBJ)' },
          { label: 'c', task: 'Je ___ (vouloir) un cafe. (hoflig)', solution: 'voudrais (KOND)' },
          { label: 'd', task: 'Je suis content qu\'il ___ (etre) la. (folelse)', solution: 'soit (SUBJ)' },
        ],
        solution: 'a) viendrais (KOND), b) viennes (SUBJ), c) voudrais (KOND), d) soit (SUBJ)',
        hints: ['Etter "si" + imparfait -> kondisjonalis', 'Etter "il faut que", "je suis content que" -> subjonctif'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.4: Revision generale - Generell repetisjon
// ============================================================================

export const CHAPTER_FRANSK_2_10_4: TextbookChapter = {
  id: 'fransk-2-10-4',
  courseId: 'fransk-2',
  chapterNumber: '10.4',
  title: 'Revision generale',
  subtitle: 'Generell repetisjon',
  description: 'Omfattende repetisjon av alle emner fra Fransk Niva 2, med blandede ovelser som dekker all grammatikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'repetere og befeste all kunnskap fra Fransk Niva 2',
    'bruke ordforrad og grammatikk fra hele kurset i sammensatte oppgaver',
  ],
  content: [
    {
      id: 'fransk-2-10-4-intro',
      type: 'text',
      content: `## Generell repetisjon - Fransk Niva 2

Felicitations ! Du har nadd slutten av Fransk Niva 2. I dette kapittelet repeterer vi de viktigste temaene fra hele kurset. Bruk dette kapittelet til a teste deg selv og ove pa alt du har laert.

Dette kapittelet dekker grammatikk, skriveferdigheter og kommunikasjon fra alle kapitler.`,
    },
    {
      id: 'fransk-2-10-4-text-1',
      type: 'text',
      content: `## Oversikt over fortidsformene

**Passe compose** (avsluttede handlinger):
- J'ai mange. / Je suis alle(e).
- Signalord: hier, soudain, l'annee derniere

**Imparfait** (beskrivelser, vaner):
- Je mangeais. / J'allais.
- Signalord: chaque jour, d'habitude, quand j'etais petit

**Plus-que-parfait** (fortid for fortiden):
- J'avais mange. / J'etais alle(e).
- "Jeg hadde spist" / "Jeg hadde dratt"

**Sammenligning:**
| Tid | Dannelse | Bruk |
|-----|----------|------|
| Passe compose | avoir/etre + part. | Avsluttet handling |
| Imparfait | stamme + -ais/-ait | Bakgrunn, vaner |
| Plus-que-parfait | avais/etais + part. | For en annen fortidshendelse |`,
    },
    {
      id: 'fransk-2-10-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Fortidsformene',
      problem: `Velg riktig tid (PC, IMP eller PQP):
a) Hier, je (manger) ___ au restaurant.
b) Quand j'(etre) ___ petit, je (jouer) ___ au foot.
c) Il (deja partir) ___ quand je suis arrive.`,
      solution: `a) Hier, j'**ai mange** au restaurant. (PC - avsluttet handling, "hier")
b) Quand j'**etais** petit, je **jouais** au foot. (IMP - tilstand + vane)
c) Il **etait deja parti** quand je suis arrive. (PQP - skjedde for en annen fortidshendelse)`,
    },
    {
      id: 'fransk-2-10-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett verbene i riktig fortidsform (PC, IMP eller PQP).',
        subTasks: [
          { label: 'a', task: 'Il (faire) ___ beau ce jour-la. (bakgrunn)', solution: 'faisait (IMP)' },
          { label: 'b', task: 'Soudain, elle (tomber) ___. (hendelse)', solution: 'est tombee (PC)' },
          { label: 'c', task: 'J\'(deja finir) ___ quand il est arrive. (for en annen hendelse)', solution: 'avais deja fini (PQP)' },
          { label: 'd', task: 'Chaque ete, nous (aller) ___ a la mer. (vane)', solution: 'allions (IMP)' },
        ],
        solution: 'a) faisait (IMP), b) est tombee (PC), c) avais deja fini (PQP), d) allions (IMP)',
        hints: ['Bakgrunn/vane = IMP', 'Handling = PC', 'For en annen fortidshendelse = PQP'],
      },
    },
    {
      id: 'fransk-2-10-4-text-2',
      type: 'text',
      content: `## Oversikt over pronomen

**Personlige pronomen:**
| Subjekt | COD | COI |
|---------|-----|-----|
| je | me | me |
| tu | te | te |
| il | le | lui |
| elle | la | lui |
| nous | nous | nous |
| vous | vous | vous |
| ils/elles | les | leur |

**Andre pronomen:**
- **Y** = a + sted/ting
- **EN** = de + noe / mengde
- **Qui** = relativpronomen (subjekt)
- **Que** = relativpronomen (objekt)
- **Ou** = relativpronomen (sted/tid)
- **Dont** = relativpronomen (de + noe)

**Plasseringsregel:** Pronomen star alltid foran verbet (eller foran hjeleverbet).`,
    },
    {
      id: 'fransk-2-10-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Pronomen',
      problem: `Erstatt med riktig pronomen:
a) Je vois **Marie**. -> Je ___ vois.
b) Elle parle **a son pere**. -> Elle ___ parle.
c) L'homme ___ parle est mon voisin. (relativpronomen)`,
      solution: `a) Je **la** vois. (COD, hunkjonn)
b) Elle **lui** parle. (COI, a + person)
c) L'homme **qui** parle est mon voisin. (relativpronomen, subjekt)`,
    },
    {
      id: 'fransk-2-10-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig pronomen.',
        subTasks: [
          { label: 'a', task: 'Tu connais Pierre ? - Oui, je ___ connais.', solution: 'le (COD)' },
          { label: 'b', task: 'Tu vas a Paris ? - Oui, j\'___ vais.', solution: 'y' },
          { label: 'c', task: 'La fille ___ j\'ai rencontree est sympa. (relativpronomen)', solution: 'que' },
          { label: 'd', task: 'Tu as des freres ? - Oui, j\'___ ai deux.', solution: 'en' },
        ],
        solution: 'a) le (COD), b) y, c) que, d) en',
        hints: ['COD = direkte objekt uten preposisjon', 'y = a + sted', 'en = mengde/de + noe'],
      },
    },
    {
      id: 'fransk-2-10-4-text-3',
      type: 'text',
      content: `## Oversikt over kondisjonalis og subjonctif

**Kondisjonalis:**
- Hoflige foresporsler: Je voudrais...
- Hypotetisk: Si j'avais..., je ferais...
- Onsker: J'aimerais voyager.

**Subjonctif:**
- Nodvendighet: Il faut que je parte.
- Onsker/vilje: Je veux que tu viennes.
- Folelser: Je suis content que tu sois la.
- Tvil: Je ne pense pas qu'il puisse.

**Si-setninger:**
| Si-setning (betingelse) | Hovedsetning (resultat) |
|-------------------------|------------------------|
| Si + presens | futur / presens |
| Si + imparfait | kondisjonalis |

**Skriving og kommunikasjon:**
- Formelt: Vous, Cordialement, Je vous prie de...
- Uformelt: Tu, Bisous, Salut !
- Argumentasjon: A mon avis, De plus, Cependant, En conclusion`,
    },
    {
      id: 'fransk-2-10-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Blandet ovelse',
      problem: `Fullfar setningene med riktig form:
a) Si j'avais le temps, je (aller) ___ au cinema.
b) Il faut que nous (faire) ___ nos devoirs.
c) ___, le francais est une belle langue. (Etter min mening)`,
      solution: `a) Si j'avais le temps, j'**irais** au cinema. (kondisjonalis - si + IMP -> KOND)
b) Il faut que nous **fassions** nos devoirs. (subjonctif - etter "il faut que")
c) **A mon avis**, le francais est une belle langue. (meningsuttrykk)`,
    },
    {
      id: 'fransk-2-10-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Blandet ovelse: Velg riktig form og uttrykk.',
        subTasks: [
          { label: 'a', task: 'Si elle etait ici, elle (etre) ___ contente.', solution: 'serait (kondisjonalis)' },
          { label: 'b', task: 'Il faut que tu (etre) ___ a l\'heure.', solution: 'sois (subjonctif)' },
          { label: 'c', task: '___, il faut proteger l\'environnement. (I tillegg)', solution: 'De plus' },
          { label: 'd', task: 'Je (vouloir) ___ un renseignement. (hoflig)', solution: 'voudrais (kondisjonalis)' },
        ],
        solution: 'a) serait (KOND), b) sois (SUBJ), c) De plus, d) voudrais (KOND)',
        hints: ['Si + IMP -> kondisjonalis', 'Il faut que -> subjonctif', 'De plus = I tillegg'],
      },
    },
    {
      id: 'fransk-2-10-4-text-4',
      type: 'text',
      content: `## Hva har du laert i Fransk Niva 2?

I Fransk Niva 2 har du laert:

1. **Fortidsformene** - Passe compose, imparfait, plus-que-parfait
2. **Pronomen** - COD, COI, y, en, relativpronomen
3. **Kondisjonalis** - Hoflige foresporsler, si-setninger, onsker
4. **Subjonctif** - Etter il faut que, folelser, vilje, tvil
5. **Skriving** - Formelle og uformelle brev og e-poster
6. **Argumentasjon** - Meningsuttrykk, bindeord, debatteknikker
7. **Fortelling** - Narrative teknikker, beskrivelser
8. **Registre** - Formelt vs. uformelt sprak

**Bon courage pour la suite !** (Lykke til videre!)`,
    },
    {
      id: 'fransk-2-10-4-note-1',
      type: 'note',
      title: 'Tips til videre laering',
      content: `For a fortsette a forbedre fransken din:
- Hor pa franske podcaster og musikk
- Se franske filmer og serier med franske undertekster
- Les franske aviser og blaer pa franske nettsider
- Skriv dagbok pa fransk
- Finn en sprakpartner a ove med
- Bruk sprakappar som Duolingo eller Babbel
- Reis til et fransktalende land om mulig!`,
    },
    {
      id: 'fransk-2-10-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-2-10-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Stor blandet sluttovelse: Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Hvis jeg var rik, ville jeg reist til Frankrike.', solution: 'Si j\'etais riche, je voyagerais en France.' },
          { label: 'b', task: 'Jeg er glad for at du er her. (subjonctif)', solution: 'Je suis content(e) que tu sois la.' },
          { label: 'c', task: 'Filmen som jeg sa i gar var utmerket. (relativpronomen)', solution: 'Le film que j\'ai vu hier etait excellent.' },
          { label: 'd', task: 'Etter min mening er det viktig a laere sprak.', solution: 'A mon avis, il est important d\'apprendre les langues.' },
        ],
        solution: 'a) Si j\'etais riche, je voyagerais en France. b) Je suis content(e) que tu sois la. c) Le film que j\'ai vu hier etait excellent. d) A mon avis, il est important d\'apprendre les langues.',
        hints: ['Si + imparfait -> kondisjonalis', 'Etter "je suis content que" -> subjonctif', 'que = relativpronomen for objekt'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_2_CHAPTERS_9_10: TextbookChapter[] = [
  CHAPTER_FRANSK_2_9_1,
  CHAPTER_FRANSK_2_9_2,
  CHAPTER_FRANSK_2_9_3,
  CHAPTER_FRANSK_2_9_4,
  CHAPTER_FRANSK_2_10_1,
  CHAPTER_FRANSK_2_10_2,
  CHAPTER_FRANSK_2_10_3,
  CHAPTER_FRANSK_2_10_4,
];
