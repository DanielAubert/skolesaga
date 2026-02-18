/* eslint-disable */
// @ts-nocheck
/**
 * Fransk Niva 1 - Kapittel 14-16
 *
 * Kapittel 14: Muntlig kommunikasjon (Communication orale)
 * Kapittel 15: Skriftlig kommunikasjon (Communication ecrite)
 * Kapittel 16: Grammatikk og laeringsstrategier (Grammaire et strategies)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 14.1: La prononciation - Uttale
// ============================================================================

export const CHAPTER_FRANSK_1_14_1: TextbookChapter = {
  id: 'fransk-1-14-1',
  courseId: 'fransk-1',
  chapterNumber: '14.1',
  title: 'La prononciation',
  subtitle: 'Uttale',
  description: 'Laer om franske lyder, stumme bokstaver og liaison.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke regler for uttale for a kommunisere pa en situasjonstilpasset mate',
  ],
  content: [
    {
      id: 'fransk-1-14-1-intro',
      type: 'text',
      content: `## Uttale pa fransk

Fransk uttale kan vaere utfordrende fordi spraket har mange lyder som ikke finnes pa norsk. I tillegg skrives mange bokstaver som ikke uttales! I dette kapittelet laerer du de viktigste uttalereglene.`,
    },
    {
      id: 'fransk-1-14-1-def-1',
      type: 'definition',
      title: 'Nasalvokaler',
      content: `**Nasalvokaler** er vokaler der luften gar gjennom nesen. De finnes ikke pa norsk, men er svart vanlige pa fransk:

| Skrift | Lyd | Eksempel |
|--------|-----|----------|
| an / en | nasalt "a" | fr**an**ce, **en**fant |
| on | nasalt "o" | b**on**jour, mais**on** |
| in / ain / ein | nasalt "ae" | v**in**, p**ain**, pl**ein** |
| un | nasalt "oe" | l**un**di, br**un** |

**Tips:** For a lage nasallyden, prov a si vokalen mens du lar luften ga gjennom nesen i stedet for munnen.`,
    },
    {
      id: 'fransk-1-14-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Nasalvokaler',
      problem: `Hvilken nasalvokal horer du i disse ordene?
a) maison
b) pain
c) enfant`,
      solution: `a) mais**on** - nasalt "o" (on-lyd)
b) p**ain** - nasalt "ae" (in-lyd)
c) **en**f**an**t - to nasale: "en" (nasalt "a") og "an" (nasalt "a")`,
    },
    {
      id: 'fransk-1-14-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Sorter ordene etter nasalvokal: on-lyd, an/en-lyd, eller in-lyd.',
        subTasks: [
          { label: 'a', task: 'bonjour', solution: 'on-lyd (bon-)' },
          { label: 'b', task: 'francais', solution: 'an-lyd (fran-)' },
          { label: 'c', task: 'vin', solution: 'in-lyd (vin)' },
          { label: 'd', task: 'chanson', solution: 'an-lyd (chan-) og on-lyd (-son)' },
        ],
        solution: 'a) on-lyd, b) an-lyd, c) in-lyd, d) an-lyd + on-lyd',
        hints: ['Se tabellen over nasalvokaler'],
      },
    },
    {
      id: 'fransk-1-14-1-text-1',
      type: 'text',
      content: `## Stumme bokstaver

Pa fransk uttales mange bokstaver IKKE:

**1. Finale konsonanter er ofte stumme:**
- peti**t** (t-en uttales ikke)
- fran**c**ai**s** (s-en uttales ikke)
- par**d** (d-en uttales ikke)

**Unntak:** Konsonantene **c, r, f, l** uttales ofte til slutt (huskeregel: **CaReFuL**)
- avi**on** (nei, men: avi**c** -> ja)
- pou**r** (r uttales)
- spor**t**i**f** (f uttales)
- hote**l** (l uttales)

**2. Endelsen -ent i 3. person flertall er stum:**
- ils parl**ent** (uttales som "ils parl")
- elles mang**ent** (uttales som "elles manj")`,
    },
    {
      id: 'fransk-1-14-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Stumme bokstaver',
      problem: `Hvilke bokstaver er stumme i disse ordene?
a) petit
b) grand
c) ils parlent`,
      solution: `a) peti**t** - t er stum
b) gran**d** - d er stum
c) ils parlen**t** - ent er stum (3. person flertall)`,
    },
    {
      id: 'fransk-1-14-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Uttales slutt-konsonanten eller ikke? Skriv "uttales" eller "stum".',
        subTasks: [
          { label: 'a', task: 'petit (t)', solution: 'stum' },
          { label: 'b', task: 'hotel (l)', solution: 'uttales' },
          { label: 'c', task: 'sport (t)', solution: 'uttales (unntak)' },
          { label: 'd', task: 'francais (s)', solution: 'stum' },
        ],
        solution: 'a) stum, b) uttales, c) uttales, d) stum',
        hints: ['Husk CaReFuL-regelen: c, r, f, l uttales ofte'],
      },
    },
    {
      id: 'fransk-1-14-1-def-2',
      type: 'definition',
      title: 'Liaison',
      content: `**Liaison** betyr at en normalt stum slutt-konsonant uttales nar neste ord begynner med en vokal:

- le**s** amis -> uttales "lez-ami" (s uttales som z)
- vou**s** etes -> uttales "vouz-et" (s uttales som z)
- u**n** ami -> uttales "un-nami" (n uttales)

Liaison skjer ofte etter: les, des, un, mon, ton, son, nous, vous, ils/elles, est, c'est.`,
    },
    {
      id: 'fransk-1-14-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Liaison',
      problem: `Hvor skjer det liaison?
a) les enfants
b) les chats
c) vous avez`,
      solution: `a) le**s**_enfants - JA (s uttales som z foran e)
b) les chats - NEI (chats begynner med konsonant)
c) vou**s**_avez - JA (s uttales som z foran a)`,
    },
    {
      id: 'fransk-1-14-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skjer det liaison her? Svar ja eller nei.',
        subTasks: [
          { label: 'a', task: 'les amis', solution: 'Ja (lez-ami)' },
          { label: 'b', task: 'les filles', solution: 'Nei (filles begynner med konsonant)' },
          { label: 'c', task: 'un ami', solution: 'Ja (un-nami)' },
          { label: 'd', task: 'ils ont', solution: 'Ja (ilz-on)' },
        ],
        solution: 'a) Ja, b) Nei, c) Ja, d) Ja',
        hints: ['Liaison skjer nar neste ord begynner med vokal (a, e, i, o, u)'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-14-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Kombiner det du har laert. Analyser uttalen av disse setningene.',
        subTasks: [
          { label: 'a', task: 'Hvilke nasalvokaler finnes i "les enfants sont contents"?', solution: 'en (enfants), on (sont, contents), an (enfants)' },
          { label: 'b', task: 'Hvor er det liaison i "les amis sont arrives"?', solution: 'les_amis (z-lyd), sont_arrives (t-lyd)' },
          { label: 'c', task: 'Hvilke bokstaver er stumme i "ils parlent francais"?', solution: '-ent i parlent er stum, -s i francais er stum' },
        ],
        solution: 'a) en, on, an. b) les_amis, sont_arrives. c) -ent og -s.',
        hints: ['Kombiner reglene for nasalvokaler, stumme bokstaver og liaison'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 14.2: Ecouter et comprendre - Lytte og forsta
// ============================================================================

export const CHAPTER_FRANSK_1_14_2: TextbookChapter = {
  id: 'fransk-1-14-2',
  courseId: 'fransk-1',
  chapterNumber: '14.2',
  title: 'Ecouter et comprendre',
  subtitle: 'Lytte og forsta',
  description: 'Laer lyttestrategier og uttrykk for a be om hjelp nar du ikke forstar.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lytte til og forsta enkel og tydelig tale om personlige og dagligdagse emner',
  ],
  content: [
    {
      id: 'fransk-1-14-2-intro',
      type: 'text',
      content: `## Lytte og forsta

A forsta muntlig fransk kan vaere vanskelig i begynnelsen. Franskmenn snakker ofte fort, og mange lyder flyter sammen. Men med gode strategier kan du forsta mye mer enn du tror!`,
    },
    {
      id: 'fransk-1-14-2-text-1',
      type: 'text',
      content: `## Lyttestrategier

1. **Fokuser pa nokkelord**: Du trenger ikke forsta hvert ord. Lytt etter ordene som baerer mening (substantiver, verb).

2. **Bruk konteksten**: Hvis du er pa en restaurant, vet du at samtalen handler om mat. Det hjelper deg a gjette!

3. **Gjenkjenn cognater**: Mange franske ord ligner pa norske eller engelske ord:
   - **telephone** = telefon
   - **restaurant** = restaurant
   - **information** = informasjon
   - **musique** = musikk
   - **famille** = familie

4. **Lytt etter tonefall**: Sporsmal har stigende tonefall, mens utsagn har synkende.`,
    },
    {
      id: 'fransk-1-14-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Gjenkjenne cognater',
      problem: `Hva tror du disse franske ordene betyr? Bruk likhet med norsk/engelsk.
a) le probleme
b) la situation
c) le garage
d) la nationalite`,
      solution: `a) le probleme = problemet
b) la situation = situasjonen
c) le garage = garasjen
d) la nationalite = nasjonaliteten

Mange franske ord ligner fordi norsk og engelsk har laant mange ord fra fransk!`,
    },
    {
      id: 'fransk-1-14-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjett betydningen av disse franske ordene (cognater).',
        subTasks: [
          { label: 'a', task: 'la television', solution: 'fjernsynet / TV' },
          { label: 'b', task: "l'universite", solution: 'universitetet' },
          { label: 'c', task: 'le chocolat', solution: 'sjokolade' },
          { label: 'd', task: 'la nature', solution: 'naturen' },
        ],
        solution: 'a) fjernsynet, b) universitetet, c) sjokolade, d) naturen',
        hints: ['Sammenlign med norske og engelske ord'],
      },
    },
    {
      id: 'fransk-1-14-2-text-2',
      type: 'text',
      content: `## Nar du ikke forstar

Det er helt normalt a ikke forsta alt! Her er nyttige fraser:

| Fransk | Norsk |
|--------|-------|
| Pouvez-vous repeter ? | Kan du gjenta? (formelt) |
| Tu peux repeter ? | Kan du gjenta? (uformelt) |
| Plus lentement, s'il vous plait. | Saktere, takk. |
| Je ne comprends pas. | Jeg forstar ikke. |
| Comment dit-on ... en francais ? | Hvordan sier man ... pa fransk? |
| Qu'est-ce que ca veut dire ? | Hva betyr det? |
| Vous pouvez ecrire, s'il vous plait ? | Kan du skrive det? |`,
    },
    {
      id: 'fransk-1-14-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Be om hjelp',
      problem: `Hva sier du nar:
a) Du ikke forstar hva noen sier?
b) Noen snakker for fort?
c) Du vil vite hva et ord betyr?`,
      solution: `a) **Je ne comprends pas.** (Jeg forstar ikke.)
b) **Plus lentement, s'il vous plait.** (Saktere, takk.)
c) **Qu'est-ce que ca veut dire ?** (Hva betyr det?)`,
    },
    {
      id: 'fransk-1-14-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Kan du gjenta? (formelt)', solution: 'Pouvez-vous repeter ?' },
          { label: 'b', task: 'Jeg forstar ikke.', solution: 'Je ne comprends pas.' },
          { label: 'c', task: 'Hvordan sier man "hund" pa fransk?', solution: 'Comment dit-on "hund" en francais ?' },
        ],
        solution: 'a) Pouvez-vous repeter ? b) Je ne comprends pas. c) Comment dit-on "hund" en francais ?',
        hints: ['Se tabellen over nyttige fraser'],
      },
    },
    {
      id: 'fransk-1-14-2-text-3',
      type: 'text',
      content: `## Dialogoving: Pa kafeen

Les denne dialogen og prov a forsta hovedinnholdet:

*Serveur : Bonjour ! Qu'est-ce que vous desirez ?*
*Client : Bonjour ! Je voudrais un cafe, s'il vous plait.*
*Serveur : Un cafe ? Petit ou grand ?*
*Client : Euh... Pardon, pouvez-vous repeter ?*
*Serveur : Petit ou grand ? Un petit cafe ou un grand cafe ?*
*Client : Ah, un petit cafe, s'il vous plait.*
*Serveur : Tres bien. Autre chose ?*
*Client : Non, merci. Ca fait combien ?*
*Serveur : Deux euros cinquante.*`,
    },
    {
      id: 'fransk-1-14-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Forsta en dialog',
      problem: `Svar pa sporsmalene om dialogen:
a) Hva bestiller kunden?
b) Hva spurte servitoren som kunden ikke forsto?
c) Hva koster kaffen?`,
      solution: `a) Kunden bestiller en liten kaffe (un petit cafe).
b) Servitoren spurte om kunden ville ha liten eller stor kaffe (Petit ou grand?).
c) Kaffen koster 2,50 euro (deux euros cinquante).`,
    },
    {
      id: 'fransk-1-14-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse setningene fra dialogen til norsk.',
        subTasks: [
          { label: 'a', task: "Qu'est-ce que vous desirez ?", solution: 'Hva onsker du/De?' },
          { label: 'b', task: 'Autre chose ?', solution: 'Noe annet?' },
          { label: 'c', task: 'Ca fait combien ?', solution: 'Hva koster det? / Hvor mye blir det?' },
        ],
        solution: 'a) Hva onsker du? b) Noe annet? c) Hva koster det?',
        hints: ['desirer = onske', 'autre = annet/en annen', 'combien = hvor mye'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-14-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hvilken lyttestrategi ville du brukt i disse situasjonene?',
        subTasks: [
          { label: 'a', task: 'Du horer et ord du ikke kjenner pa en restaurant.', solution: 'Bruk konteksten - det handler sannsynligvis om mat.' },
          { label: 'b', task: 'Noen snakker fort og du mister trad.', solution: 'Si "Plus lentement, svp" eller fokuser pa nokkelord.' },
          { label: 'c', task: 'Du horer ordet "information" i en setning.', solution: 'Gjenkjenn cognaten - det betyr "informasjon".' },
        ],
        solution: 'a) Kontekst. b) Be om langsommere tale / fokuser pa nokkelord. c) Gjenkjenn cognater.',
        hints: ['Se de fire lyttestrategiene'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 14.3: Parler et presenter - Snakke og presentere
// ============================================================================

export const CHAPTER_FRANSK_1_14_3: TextbookChapter = {
  id: 'fransk-1-14-3',
  courseId: 'fransk-1',
  chapterNumber: '14.3',
  title: 'Parler et presenter',
  subtitle: 'Snakke og presentere',
  description: 'Laer strategier for muntlig kommunikasjon og presentasjoner pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'muntlig fortelle om dagligliv og opplevelser og uttrykke meninger',
  ],
  content: [
    {
      id: 'fransk-1-14-3-intro',
      type: 'text',
      content: `## Snakke og presentere pa fransk

A snakke et nytt sprak kan foeles skummelt. Men du trenger ikke vaere perfekt! Det viktigste er a kommunisere. I dette kapittelet laerer du strategier for a uttrykke deg muntlig pa fransk.`,
    },
    {
      id: 'fransk-1-14-3-text-1',
      type: 'text',
      content: `## Kommunikasjonsstrategier

| Strategi | Beskrivelse | Eksempel |
|----------|-------------|----------|
| **Omskriving** | Beskriv ordet nar du ikke husker det | "C'est un animal... il fait 'miaou'" (katt) |
| **Fyllord** | Bruk fyllord for a vinne tid | Euh..., Alors..., Ben..., Voila |
| **Gester** | Bruk kroppssprak som stotte | Pek, gest mot storrelse |
| **Spor** | Be om hjelp | Comment dit-on... ? |`,
    },
    {
      id: 'fransk-1-14-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Omskriving',
      problem: `Hvordan kan du beskrive disse ordene uten a si dem direkte?
a) en hund
b) en skole
c) en lege`,
      solution: `a) en hund: "C'est un animal. Il fait 'ouaf ouaf'." (Det er et dyr. Det sier "voff voff".)
b) en skole: "C'est un endroit ou les enfants apprennent." (Det er et sted der barn laerer.)
c) en lege: "C'est une personne qui aide les malades." (Det er en person som hjelper syke.)`,
    },
    {
      id: 'fransk-1-14-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Prov a omskrive disse ordene pa fransk (bruk enkle ord).',
        subTasks: [
          { label: 'a', task: 'en katt', solution: "C'est un petit animal. Il fait 'miaou'." },
          { label: 'b', task: 'en restaurant', solution: "C'est un endroit ou on mange." },
          { label: 'c', task: 'en bok', solution: "C'est un objet. On lit un..." },
        ],
        solution: "a) C'est un animal, il fait miaou. b) C'est un endroit ou on mange. c) C'est un objet qu'on lit.",
        hints: ["C'est un/une... = Det er en...", 'un endroit = et sted', 'un objet = en gjenstand'],
      },
    },
    {
      id: 'fransk-1-14-3-text-2',
      type: 'text',
      content: `## Strukturere en presentasjon

Nar du skal holde en presentasjon pa fransk, bruk denne strukturen:

| Del | Uttrykk | Norsk |
|-----|---------|-------|
| **Apning** | Bonjour, je vais vous presenter... | Hei, jeg skal presentere... |
| **Forst** | D'abord... / Premierement... | Forst... |
| **Sa** | Ensuite... / Puis... | Sa... / Deretter... |
| **Til slutt** | Enfin... / Finalement... | Til slutt... |
| **Avslutning** | En conclusion... / Merci de votre attention. | Avslutningsvis... / Takk for oppmerksomheten. |`,
    },
    {
      id: 'fransk-1-14-3-example-2',
      type: 'example',
      title: 'Eksempel 2: En enkel presentasjon',
      problem: `Sett sammen en presentasjon av deg selv med disse elementene:
- Navn, alder, hvor du bor
- Familie
- Hobbyer`,
      solution: `**Bonjour !** Je m'appelle Anna. J'ai 16 ans et j'habite a Oslo en Norvege.

**D'abord**, je vais presenter ma famille. J'ai un frere et une soeur. Mon pere s'appelle Erik et ma mere s'appelle Lise.

**Ensuite**, mes loisirs. J'aime la musique et le sport. Je joue au football.

**Merci de votre attention !**`,
    },
    {
      id: 'fransk-1-14-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse overgangsfrasene til fransk.',
        subTasks: [
          { label: 'a', task: 'Forst...', solution: "D'abord..." },
          { label: 'b', task: 'Deretter...', solution: 'Ensuite...' },
          { label: 'c', task: 'Til slutt...', solution: 'Enfin...' },
          { label: 'd', task: 'Takk for oppmerksomheten.', solution: 'Merci de votre attention.' },
        ],
        solution: "a) D'abord. b) Ensuite. c) Enfin. d) Merci de votre attention.",
        hints: ["d'abord = forst", 'ensuite = deretter/sa'],
      },
    },
    {
      id: 'fransk-1-14-3-tip-1',
      type: 'tip',
      content: `**Ikke vaer redd for a gjore feil!** Nar du snakker fransk, er det viktigere a kommunisere enn a vaere grammatisk perfekt. Franskmenn setter pris pa at du prover a snakke spraket deres, selv om du gjor feil. Bruk fyllord som "euh..." og "alors..." for a gi deg selv tid til a tenke.`,
    },
    {
      id: 'fransk-1-14-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Uttrykke meninger',
      problem: `Hvordan sier du disse meningene pa fransk?
a) Jeg liker fransk musikk.
b) Jeg synes fransk er interessant.
c) Min favorittfilm er Amelie.`,
      solution: `a) J'aime la musique francaise.
b) Je trouve que le francais est interessant.
c) Mon film prefere est Amelie.

**Nyttige uttrykk:** J'aime (jeg liker), Je trouve que (jeg synes at), Je prefere (jeg foretrekker), Mon ... prefere est ... (min favoritt ... er ...)`,
    },
    {
      id: 'fransk-1-14-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg liker fotball.', solution: "J'aime le football." },
          { label: 'b', task: 'Jeg foretrekker musikk.', solution: 'Je prefere la musique.' },
          { label: 'c', task: 'Jeg synes at fransk er morsomt.', solution: 'Je trouve que le francais est amusant.' },
        ],
        solution: "a) J'aime le football. b) Je prefere la musique. c) Je trouve que le francais est amusant.",
        hints: ["j'aime = jeg liker", 'je prefere = jeg foretrekker', 'je trouve que = jeg synes at'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-14-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort presentasjon av deg selv pa fransk (5-6 setninger). Bruk overgangsfrasene.',
        subTasks: [
          { label: 'a', task: 'Presenter deg selv (navn, alder, bosted)', solution: "Bonjour ! Je m'appelle [navn]. J'ai [alder] ans. J'habite a [sted]." },
          { label: 'b', task: 'Fortell om familien din', solution: "D'abord, ma famille. J'ai [antall] freres et [antall] soeurs." },
          { label: 'c', task: 'Fortell om en hobby', solution: "Ensuite, j'aime [hobby]. C'est super !" },
        ],
        solution: "Eksempel: Bonjour ! Je m'appelle Anna. J'ai 16 ans. J'habite a Oslo. D'abord, ma famille: j'ai un frere. Ensuite, j'aime la musique. Merci !",
        hints: ['Bruk d\'abord, ensuite, enfin', 'Ikke vaer redd for a gjore feil!'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 14.4: Jeux de role - Rollespill
// ============================================================================

export const CHAPTER_FRANSK_1_14_4: TextbookChapter = {
  id: 'fransk-1-14-4',
  courseId: 'fransk-1',
  chapterNumber: '14.4',
  title: 'Jeux de role',
  subtitle: 'Rollespill',
  description: 'Ov pa a snakke fransk gjennom rollespill i hverdagssituasjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'delta i enkle samtaler i dagligdagse situasjoner om aktiviteter og kjente emner',
  ],
  content: [
    {
      id: 'fransk-1-14-4-intro',
      type: 'text',
      content: `## Rollespill - ov samtaler

Rollespill er en av de beste matene a ove pa a snakke fransk. Du later som om du er i en bestemt situasjon og over pa a bruke de frasene du har laert. I dette kapittelet finner du dialogmonstre for vanlige situasjoner.`,
    },
    {
      id: 'fransk-1-14-4-text-1',
      type: 'text',
      content: `## Pa kafeen (Au cafe)

| Serviteren sier | Kunden sier |
|----------------|-------------|
| Bonjour ! Qu'est-ce que vous desirez ? | Bonjour ! Je voudrais un cafe, s'il vous plait. |
| Un cafe ? Petit ou grand ? | Un petit cafe, s'il vous plait. |
| Autre chose ? | Non, merci. / Oui, un croissant aussi. |
| Voila ! | Merci ! Ca fait combien ? |
| Deux euros cinquante. | Voici. Merci, au revoir ! |`,
    },
    {
      id: 'fransk-1-14-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Pa kafeen',
      problem: `Fullfar dialogen med riktige fraser:
*Serveur : Bonjour ! Qu'est-ce que vous desirez ?*
*Client : Bonjour ! Je voudrais ___.*
*Serveur : Autre chose ?*
*Client : ___. Ca fait combien ?*`,
      solution: `*Client : Bonjour ! Je voudrais **un the, s'il vous plait**.*
*Client : **Non, merci**. Ca fait combien ?*

(Eller: "Oui, un croissant aussi" hvis du vil ha noe mer.)`,
    },
    {
      id: 'fransk-1-14-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse kafefrasene til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg vil gjerne ha en kaffe.', solution: "Je voudrais un cafe, s'il vous plait." },
          { label: 'b', task: 'Noe annet?', solution: 'Autre chose ?' },
          { label: 'c', task: 'Hva koster det?', solution: 'Ca fait combien ?' },
          { label: 'd', task: 'Nei, takk.', solution: 'Non, merci.' },
        ],
        solution: "a) Je voudrais un cafe, svp. b) Autre chose ? c) Ca fait combien ? d) Non, merci.",
        hints: ['je voudrais = jeg vil gjerne ha', 'autre chose = noe annet'],
      },
    },
    {
      id: 'fransk-1-14-4-text-2',
      type: 'text',
      content: `## I butikken (Au magasin)

| Ekspeditoren sier | Kunden sier |
|-------------------|-------------|
| Bonjour ! Je peux vous aider ? | Bonjour ! Je cherche un pull. |
| Quelle taille ? | Taille M, s'il vous plait. |
| Voila. Il coute 35 euros. | C'est parfait ! Je le prends. |
| Vous payez comment ? | Par carte, s'il vous plait. |`,
    },
    {
      id: 'fransk-1-14-4-example-2',
      type: 'example',
      title: 'Eksempel 2: I butikken',
      problem: `Oversett til norsk:
a) Je cherche un pull.
b) Quelle taille ?
c) Je le prends.`,
      solution: `a) Jeg leter etter en genser.
b) Hvilken storrelse?
c) Jeg tar den.`,
    },
    {
      id: 'fransk-1-14-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg leter etter en jakke.', solution: 'Je cherche une veste.' },
          { label: 'b', task: 'Hvilken storrelse?', solution: 'Quelle taille ?' },
          { label: 'c', task: 'Hva koster den?', solution: 'Combien ca coute ? / Il coute combien ?' },
        ],
        solution: 'a) Je cherche une veste. b) Quelle taille ? c) Combien ca coute ?',
        hints: ['chercher = lete etter', 'une veste = en jakke'],
      },
    },
    {
      id: 'fransk-1-14-4-text-3',
      type: 'text',
      content: `## Holde samtalen i gang

| Fransk | Norsk |
|--------|-------|
| Ah bon ? | Virkelig? |
| C'est vrai ? | Er det sant? |
| C'est interessant ! | Det er interessant! |
| Et toi ? / Et vous ? | Og du? / Og Dem? |
| Pourquoi ? | Hvorfor? |
| Raconte ! | Fortell! |
| Super ! / Genial ! | Kjempebra! |`,
    },
    {
      id: 'fransk-1-14-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Holde samtalen i gang',
      problem: `Hva kan du si for a:
a) Vise at du er interessert?
b) Sporre den andre tilbake?
c) Be noen fortelle mer?`,
      solution: `a) **Ah bon ?** eller **C'est interessant !**
b) **Et toi ?** (uformelt) eller **Et vous ?** (formelt)
c) **Raconte !** (Fortell!)`,
    },
    {
      id: 'fransk-1-14-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse uttrykkene?',
        subTasks: [
          { label: 'a', task: 'Ah bon ?', solution: 'Virkelig?' },
          { label: 'b', task: 'Et toi ?', solution: 'Og du?' },
          { label: 'c', task: "C'est vrai ?", solution: 'Er det sant?' },
          { label: 'd', task: 'Genial !', solution: 'Kjempebra!' },
        ],
        solution: 'a) Virkelig? b) Og du? c) Er det sant? d) Kjempebra!',
        hints: ['bon = god/bra', 'vrai = sant/ekte'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-14-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-14-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort dialog pa fransk for en av disse situasjonene (4-6 linjer).',
        subTasks: [
          { label: 'a', task: 'Pa kafeen: Bestill en te og et croissant.', solution: "Bonjour ! Je voudrais un the et un croissant, s'il vous plait. - Voila ! Ca fait 4 euros. - Merci !" },
          { label: 'b', task: 'I butikken: Let etter en t-skjorte i storrelse S.', solution: "Bonjour ! Je cherche un tee-shirt. - Quelle taille ? - Taille S, s'il vous plait." },
        ],
        solution: "Eksempel kafe: Bonjour ! Je voudrais un the et un croissant, svp. - Voila, ca fait 4 euros. - Merci, au revoir !",
        hints: ['Bruk dialogmonstrene fra kapittelet', 'je voudrais = jeg vil gjerne ha'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 15.1: Messages et cartes postales - Meldinger og postkort
// ============================================================================

export const CHAPTER_FRANSK_1_15_1: TextbookChapter = {
  id: 'fransk-1-15-1',
  courseId: 'fransk-1',
  chapterNumber: '15.1',
  title: 'Messages et cartes postales',
  subtitle: 'Meldinger og postkort',
  description: 'Laer a skrive korte meldinger, SMS og postkort pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive enkle tekster om dagligliv som forteller, beskriver og informerer',
  ],
  content: [
    {
      id: 'fransk-1-15-1-intro',
      type: 'text',
      content: `## Korte meldinger og postkort

A skrive korte tekster pa fransk er en fin mate a ove pa. Enten det er en SMS til en venn, en liten beskjed eller et postkort fra ferie - prinsippene er de samme: hold det kort, enkelt og tydelig. I dette kapittelet laerer du a skrive uformelle meldinger pa fransk.`,
    },
    {
      id: 'fransk-1-15-1-def-1',
      type: 'definition',
      title: 'Le texto (SMS)',
      content: `**Le texto** (eller **le SMS**) er en kort melding pa mobiltelefon. Pa fransk brukes mange forkortelser i tekstmeldinger, akkurat som pa norsk.

**Vanlige SMS-forkortelser:**

| Forkortelse | Fullt uttrykk | Norsk |
|-------------|---------------|-------|
| slt | salut | hei |
| cv | ca va | hvordan gar det |
| bcp | beaucoup | mye/veldig |
| stp | s'il te plait | vaer sa snill |
| bjr | bonjour | god dag |
| bsr | bonsoir | god kveld |
| mdr | mort de rire | dor av latter (LOL) |
| pk | pourquoi | hvorfor |
| rdv | rendez-vous | mote/avtale |
| dsl | desole(e) | beklager |

**Tips:** Pa en prove eller i formell skriving bruker du aldri SMS-forkortelser!`,
    },
    {
      id: 'fransk-1-15-1-example-1',
      type: 'example',
      title: 'Eksempel 1: SMS-meldinger',
      problem: `"Oversett" disse SMS-meldingene til vanlig fransk:
a) Slt ! Cv ?
b) Bjr, rdv a 15h stp
c) Dsl, je suis en retard !`,
      solution: `a) **Salut ! Ca va ?** (Hei! Hvordan gar det?)
b) **Bonjour, rendez-vous a 15 heures s'il te plait.** (God dag, mote klokken 15, takk.)
c) **Desole(e), je suis en retard !** (Beklager, jeg er forsinket!)`,
    },
    {
      id: 'fransk-1-15-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hva betyr disse SMS-forkortelsene? Skriv fullt uttrykk pa fransk og norsk.',
        subTasks: [
          { label: 'a', task: 'slt', solution: 'salut = hei' },
          { label: 'b', task: 'mdr', solution: 'mort de rire = dor av latter (LOL)' },
          { label: 'c', task: 'pk', solution: 'pourquoi = hvorfor' },
          { label: 'd', task: 'rdv', solution: 'rendez-vous = mote/avtale' },
        ],
        solution: 'a) salut (hei), b) mort de rire (LOL), c) pourquoi (hvorfor), d) rendez-vous (mote)',
        hints: ['Se tabellen over SMS-forkortelser'],
      },
    },
    {
      id: 'fransk-1-15-1-def-2',
      type: 'definition',
      title: 'La carte postale (Postkortet)',
      content: `**La carte postale** er et postkort man sender fra ferie eller reise. Et postkort har en fast struktur:

**Oppbygning av et postkort:**

1. **Hilsen**: Cher/Chere + navn (Kjaere...)
2. **Sted**: Je suis a... (Jeg er i...)
3. **Vaer/stemning**: Il fait beau/chaud/froid (Det er fint vaer/varmt/kaldt)
4. **Aktiviteter**: Je visite... / Je mange... / Je me baigne... (Jeg besoker... / Jeg spiser... / Jeg bader...)
5. **Avslutning**: Bisous / A bientot / Grosses bises

**Vanlige avslutninger:**

| Fransk | Norsk | Bruk |
|--------|-------|------|
| Bisous | Kyss | Til naere venner/familie |
| Grosses bises | Store klemmer | Til venner/familie |
| A bientot ! | Pa gjensyn snart! | Til alle |
| Je t'embrasse | Jeg gir deg en klem | Til naere |
| Amities | Vennlig hilsen | Litt mer formelt |`,
    },
    {
      id: 'fransk-1-15-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Et postkort fra ferie',
      problem: `Les dette postkortet og svar pa sporsmalene under:

*Chere Marie,*
*Je suis a Nice, dans le sud de la France. Il fait tres beau et chaud ! Je me baigne dans la mer tous les jours. Hier, j'ai visite le Vieux Nice et j'ai mange une salade nicoise. C'est delicieux !*
*A bientot !*
*Emma*

a) Hvor er Emma?
b) Hvordan er vaeret?
c) Hva gjorde Emma i gar?`,
      solution: `a) Emma er i **Nice**, sor i Frankrike (dans le sud de la France).
b) Vaeret er veldig fint og varmt (**tres beau et chaud**).
c) I gar besokte hun gamlebyen i Nice (**le Vieux Nice**) og spiste en nicoise-salat (**une salade nicoise**).`,
    },
    {
      id: 'fransk-1-15-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse postkort-frasene til fransk.',
        subTasks: [
          { label: 'a', task: 'Kjaere Paul,', solution: 'Cher Paul,' },
          { label: 'b', task: 'Jeg er i Paris.', solution: 'Je suis a Paris.' },
          { label: 'c', task: 'Det er fint vaer.', solution: 'Il fait beau.' },
          { label: 'd', task: 'Pa gjensyn snart!', solution: 'A bientot !' },
        ],
        solution: 'a) Cher Paul, b) Je suis a Paris. c) Il fait beau. d) A bientot !',
        hints: ['Cher = kjaere (til gutt)', 'il fait = det er (om vaer)'],
      },
    },
    {
      id: 'fransk-1-15-1-text-1',
      type: 'text',
      content: `## Korte beskjeder (Petits messages)

Noen ganger trenger du bare a skrive en liten beskjed - en lapp pa kjoleskapet, en melding til en venn, eller en invitasjon.

**Nyttige fraser for beskjeder:**

| Fransk | Norsk |
|--------|-------|
| Je suis a... | Jeg er pa/i... |
| Je reviens a... | Jeg er tilbake klokken... |
| N'oublie pas de... | Ikke glem a... |
| Appelle-moi ! | Ring meg! |
| On se retrouve a... | Vi motes ved/klokken... |
| C'est l'anniversaire de... | Det er bursdagen til... |
| Tu es invite(e) a... | Du er invitert til... |`,
    },
    {
      id: 'fransk-1-15-1-example-3',
      type: 'example',
      title: 'Eksempel 3: En liten beskjed',
      problem: `Skriv en kort beskjed pa fransk for disse situasjonene:
a) Du er pa biblioteket og kommer hjem klokken 17.
b) Du inviterer en venn til bursdagsfesten din lordag.`,
      solution: `a) **Salut ! Je suis a la bibliotheque. Je reviens a 17 heures. Bisous !**
(Hei! Jeg er pa biblioteket. Jeg er tilbake klokken 17. Kyss!)

b) **Salut ! C'est mon anniversaire samedi. Tu es invite(e) a ma fete ! On se retrouve chez moi a 14 heures. A bientot !**
(Hei! Det er bursdagen min pa lordag. Du er invitert til festen min! Vi motes hjemme hos meg klokken 14. Pa gjensyn snart!)`,
    },
    {
      id: 'fransk-1-15-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse korte beskjedene til fransk.',
        subTasks: [
          { label: 'a', task: 'Ikke glem a kjope melk!', solution: "N'oublie pas d'acheter du lait !" },
          { label: 'b', task: 'Ring meg nar du er ferdig.', solution: 'Appelle-moi quand tu as fini.' },
          { label: 'c', task: 'Vi motes klokken 10 pa kafeen.', solution: 'On se retrouve a 10 heures au cafe.' },
        ],
        solution: "a) N'oublie pas d'acheter du lait ! b) Appelle-moi quand tu as fini. c) On se retrouve a 10 heures au cafe.",
        hints: ["n'oublie pas de = ikke glem a", 'appelle-moi = ring meg', 'on se retrouve = vi motes'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-15-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et kort postkort pa fransk (5-7 setninger). Du er pa ferie i et valgfritt sted.',
        subTasks: [
          { label: 'a', task: 'Start med en hilsen (Cher/Chere + navn)', solution: 'Chere Sophie,' },
          { label: 'b', task: 'Fortell hvor du er og hvordan vaeret er', solution: 'Je suis a Barcelone. Il fait tres chaud !' },
          { label: 'c', task: 'Fortell om noe du har gjort eller gjor', solution: "Hier, j'ai visite la Sagrada Familia. Aujourd'hui, je me baigne a la plage." },
          { label: 'd', task: 'Avslutt postkortet', solution: 'A bientot ! Bisous, [ditt navn]' },
        ],
        solution: "Eksempel: Chere Sophie, Je suis a Barcelone en Espagne. Il fait tres chaud ! Hier, j'ai visite la Sagrada Familia. C'est magnifique ! Aujourd'hui, je me baigne a la plage. La nourriture est delicieuse. A bientot ! Bisous, Emma",
        hints: ['Bruk strukturen: hilsen, sted, vaer, aktiviteter, avslutning', 'Skriv korte, enkle setninger'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 15.2: Le courrier electronique - E-post og formelle brev
// ============================================================================

export const CHAPTER_FRANSK_1_15_2: TextbookChapter = {
  id: 'fransk-1-15-2',
  courseId: 'fransk-1',
  chapterNumber: '15.2',
  title: 'Le courrier electronique',
  subtitle: 'E-post og formelle brev',
  description: 'Laer a skrive formelle og uformelle e-poster og kort brev pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive enkle tekster om dagligliv som forteller, beskriver og informerer',
  ],
  content: [
    {
      id: 'fransk-1-15-2-intro',
      type: 'text',
      content: `## E-post og brev pa fransk

A skrive e-post er noe vi gjor hver dag. Pa fransk er det viktig a skille mellom **uformell** e-post (til venner og familie) og **formell** e-post (til laerere, arbeidsgivere, offentlige instanser). I dette kapittelet laerer du begge deler.`,
    },
    {
      id: 'fransk-1-15-2-def-1',
      type: 'definition',
      title: 'E-post uformel (Uformell e-post)',
      content: `En **uformell e-post** skriver du til venner, familie og folk du kjenner godt. Tonen er avslappet.

**Struktur:**

| Del | Eksempel |
|-----|----------|
| **Apning** | Salut [navn] ! / Coucou ! / Cher/Chere [navn], |
| **Innledning** | Ca va ? / Comment tu vas ? / J'espere que tu vas bien. |
| **Hoveddel** | Fortell nyheten, still sporsmal osv. |
| **Avslutning** | A bientot ! / Bisous / Grosses bises / A plus ! |

**Vanlige apninger (uformelt):**
- **Salut !** - Hei!
- **Coucou !** - Hei hei! (veldig uformelt)
- **Cher Paul / Chere Marie** - Kjaere Paul / Kjaere Marie`,
    },
    {
      id: 'fransk-1-15-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Uformell e-post',
      problem: `Les denne uformelle e-posten og svar pa sporsmalene:

*Salut Thomas !*

*Ca va ? Moi, ca va super ! Je t'ecris parce que j'organise une fete samedi prochain pour mon anniversaire. Tu es libre ? La fete commence a 18 heures chez moi.*

*Dis-moi si tu peux venir !*

*A bientot !*
*Lucas*

a) Hvem skriver til hvem?
b) Hvorfor skriver han?
c) Nar er festen?`,
      solution: `a) **Lucas** skriver til **Thomas**.
b) Han skriver for a invitere Thomas til bursdagsfesten sin (**j'organise une fete pour mon anniversaire**).
c) Festen er **lordag** (samedi prochain) klokken **18** (a 18 heures) hjemme hos Lucas (chez moi).`,
    },
    {
      id: 'fransk-1-15-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse uformelle e-post-frasene til fransk.',
        subTasks: [
          { label: 'a', task: 'Hei! Hvordan gar det?', solution: 'Salut ! Ca va ?' },
          { label: 'b', task: 'Jeg skriver til deg fordi...', solution: "Je t'ecris parce que..." },
          { label: 'c', task: 'Si ifra om du kan komme!', solution: 'Dis-moi si tu peux venir !' },
          { label: 'd', task: 'Vi snakkes! Klem', solution: 'A bientot ! Bisous' },
        ],
        solution: "a) Salut ! Ca va ? b) Je t'ecris parce que... c) Dis-moi si tu peux venir ! d) A bientot ! Bisous",
        hints: ["je t'ecris = jeg skriver til deg", 'dis-moi = si meg/fortell meg'],
      },
    },
    {
      id: 'fransk-1-15-2-def-2',
      type: 'definition',
      title: 'E-post formel (Formell e-post)',
      content: `En **formell e-post** skriver du til personer du ikke kjenner, laerere, bedrifter osv. Tonen er hoflig og respektfull.

**Struktur:**

| Del | Eksempel |
|-----|----------|
| **Apning** | Madame, / Monsieur, / Madame, Monsieur, |
| **Innledning** | Je vous ecris pour... (Jeg skriver til Dem for a...) |
| **Hoveddel** | Forklar saken tydelig |
| **Avslutning** | Cordialement, / Respectueusement, |

**Vanlige apninger (formelt):**
- **Madame,** - (til en kvinne)
- **Monsieur,** - (til en mann)
- **Madame, Monsieur,** - (nar du ikke vet hvem som leser)
- **Cher Monsieur / Chere Madame** - (litt mer personlig, men fortsatt formelt)

**Vanlige avslutninger (formelt):**

| Fransk | Norsk | Formalitetsniva |
|--------|-------|-----------------|
| Cordialement | Med vennlig hilsen | Standard formelt |
| Respectueusement | Med respekt | Svart formelt |
| Bien cordialement | Med beste hilsen | Litt varmere formelt |
| Je vous prie d'agreer mes salutations distinguees | Hoyaktelsesfullt | Svart formelt (brev) |`,
    },
    {
      id: 'fransk-1-15-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Formell e-post',
      problem: `Les denne formelle e-posten og svar pa sporsmalene:

*Madame, Monsieur,*

*Je vous ecris pour demander des informations sur les cours de francais dans votre ecole. Je suis un(e) etudiant(e) norvegien(ne) et je voudrais suivre un cours cet ete.*

*Pourriez-vous m'envoyer les dates et les prix, s'il vous plait ?*

*Cordialement,*
*Anna Olsen*

a) Hvem skriver Anna til?
b) Hva vil hun vite?
c) Hvilken avslutning bruker hun?`,
      solution: `a) Anna skriver til en **skole** (votre ecole) - hun vet ikke hvem som leser, derfor "Madame, Monsieur".
b) Hun vil vite om **datoer og priser** for franskkurs (les dates et les prix).
c) Hun bruker **Cordialement** (Med vennlig hilsen) - en standard formell avslutning.`,
    },
    {
      id: 'fransk-1-15-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse formelle frasene til fransk.',
        subTasks: [
          { label: 'a', task: 'Jeg skriver til Dem for a be om informasjon.', solution: 'Je vous ecris pour demander des informations.' },
          { label: 'b', task: 'Kunne De sende meg...?', solution: "Pourriez-vous m'envoyer... ?" },
          { label: 'c', task: 'Takk pa forhand.', solution: "Merci d'avance." },
          { label: 'd', task: 'Med vennlig hilsen,', solution: 'Cordialement,' },
        ],
        solution: "a) Je vous ecris pour demander des informations. b) Pourriez-vous m'envoyer... ? c) Merci d'avance. d) Cordialement,",
        hints: ['je vous ecris = jeg skriver til Dem', 'pourriez-vous = kunne De'],
      },
    },
    {
      id: 'fransk-1-15-2-tip-1',
      type: 'tip',
      content: `**Formelt eller uformelt?** En enkel huskeregel:
- Bruk **tu** og uformell stil til venner, familie og jevnaldrende.
- Bruk **vous** og formell stil til laerere, voksne du ikke kjenner, og i offisielle situasjoner.
- Er du usikker? Velg formelt - det er alltid trygt!`,
    },
    {
      id: 'fransk-1-15-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Formelt vs. uformelt',
      problem: `Hvilken stil (formell/uformell) passer best i disse situasjonene?
a) Du skriver til bestevennen din om helgen.
b) Du skriver til en fransk skole for a sporre om et kurs.
c) Du skriver til fransklareren din for a si at du er syk.`,
      solution: `a) **Uformell** - Salut ! Ca va ? ... Bisous !
b) **Formell** - Madame, Monsieur, Je vous ecris pour... Cordialement,
c) **Formell** (men noe personlig) - Cher Monsieur / Chere Madame, ... Respectueusement,

Til laerere bruker man vanligvis formell stil pa fransk, selv om man kjenner dem.`,
    },
    {
      id: 'fransk-1-15-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig apning og avslutning for disse situasjonene.',
        subTasks: [
          { label: 'a', task: 'E-post til bestevennen din Julie', solution: 'Apning: Salut Julie ! / Coucou ! Avslutning: Bisous / A bientot !' },
          { label: 'b', task: 'E-post til et hotell i Paris', solution: 'Apning: Madame, Monsieur, Avslutning: Cordialement,' },
          { label: 'c', task: 'E-post til fransklareren din (Madame Dupont)', solution: 'Apning: Chere Madame Dupont, Avslutning: Respectueusement,' },
        ],
        solution: 'a) Salut Julie ! ... Bisous b) Madame, Monsieur, ... Cordialement, c) Chere Madame Dupont, ... Respectueusement,',
        hints: ['Venner = uformelt', 'Ukjente/bedrifter = formelt', 'Laerere = formelt men personlig'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-15-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort e-post pa fransk (5-8 setninger) for en av disse situasjonene.',
        subTasks: [
          { label: 'a', task: 'Uformell: Skriv til en fransk venn og fortell om helgen din.', solution: "Salut Pierre ! Ca va ? Moi, ca va bien. Ce week-end, je suis alle(e) au cinema avec mes amis. On a vu un film super ! Et toi, qu'est-ce que tu as fait ? A bientot ! Bisous, [navn]" },
          { label: 'b', task: 'Formell: Skriv til et turistkontor og be om informasjon om byen.', solution: "Madame, Monsieur, Je vous ecris pour demander des informations sur votre ville. Je vais visiter [by] cet ete avec ma famille. Pourriez-vous m'envoyer une brochure ? Merci d'avance. Cordialement, [navn]" },
        ],
        solution: "Eksempel uformell: Salut Pierre ! Ca va ? Ce week-end, je suis alle au cinema. C'etait super ! Et toi ? A bientot ! Bisous",
        hints: ['Folg strukturen: apning, innledning, hoveddel, avslutning', 'Bruk riktig formalitetsniva'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 15.3: Mon journal - Dagbok og personlige tekster
// ============================================================================

export const CHAPTER_FRANSK_1_15_3: TextbookChapter = {
  id: 'fransk-1-15-3',
  courseId: 'fransk-1',
  chapterNumber: '15.3',
  title: 'Mon journal',
  subtitle: 'Dagbok og personlige tekster',
  description: 'Laer a skrive dagboknotater pa fransk og uttrykke folelser og opplevelser.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive enkle tekster om dagligliv som forteller, beskriver og informerer',
  ],
  content: [
    {
      id: 'fransk-1-15-3-intro',
      type: 'text',
      content: `## Dagbok pa fransk

A skrive dagbok (un journal intime) er en fantastisk mate a ove fransk pa. Du skriver om det du har opplevd, hva du foler, og hva du tenker. Det fine er at ingen skal lese det - sa du kan skrive fritt uten a vaere redd for feil!`,
    },
    {
      id: 'fransk-1-15-3-def-1',
      type: 'definition',
      title: 'Struktur for dagboknotat',
      content: `Et **dagboknotat** (une entree de journal) har vanligvis denne strukturen:

**1. Dato og tid:**
- *Lundi 15 mars* (Mandag 15. mars)
- *Le 15 mars 2024*

**2. Apning:**
- *Cher journal,* (Kjaere dagbok,)

**3. Hoveddel:**
- Fortell hva som skjedde (bruk **passe compose**)
- Beskriv folelser og tanker

**4. Avslutning:**
- En oppsummering eller tanke om dagen

**Viktig:** I dagboken skriver vi ofte i **passe compose** fordi vi forteller om ting som allerede har skjedd:
- J'ai mange... (Jeg spiste...)
- Je suis alle(e)... (Jeg gikk/dro til...)
- J'ai vu... (Jeg sa...)
- J'ai fait... (Jeg gjorde...)`,
    },
    {
      id: 'fransk-1-15-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Et dagboknotat',
      problem: `Les dette dagboknotatet og svar pa sporsmalene:

*Mercredi 20 mars*

*Cher journal,*

*Aujourd'hui, c'etait une bonne journee ! Ce matin, je suis alle(e) a l'ecole. J'ai eu un examen de maths, et je pense que ca s'est bien passe. A midi, j'ai mange a la cantine avec mes amis. L'apres-midi, on a joue au football. Je suis un peu fatigue(e), mais content(e).*

*Demain, c'est le week-end. Super !*

a) Hvilken dag er det?
b) Hva skjedde pa skolen?
c) Hvordan foler personen seg?`,
      solution: `a) Det er **onsdag 20. mars** (Mercredi 20 mars).
b) Personen hadde en **matteeksamen** (un examen de maths) og tror det gikk bra. Til lunsj spiste hen i **kantinen** med venner, og pa ettermiddagen spilte de **fotball**.
c) Personen er litt **sliten** (fatigue(e)) men **fornoyd** (content(e)).`,
    },
    {
      id: 'fransk-1-15-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse dagbok-uttrykkene til fransk.',
        subTasks: [
          { label: 'a', task: 'Kjaere dagbok,', solution: 'Cher journal,' },
          { label: 'b', task: 'I dag var en god dag.', solution: "Aujourd'hui, c'etait une bonne journee." },
          { label: 'c', task: 'Jeg gikk pa skolen.', solution: "Je suis alle(e) a l'ecole." },
          { label: 'd', task: 'Jeg er sliten men glad.', solution: 'Je suis fatigue(e) mais content(e).' },
        ],
        solution: "a) Cher journal, b) Aujourd'hui, c'etait une bonne journee. c) Je suis alle(e) a l'ecole. d) Je suis fatigue(e) mais content(e).",
        hints: ["aujourd'hui = i dag", "c'etait = det var", 'fatigue(e) = sliten'],
      },
    },
    {
      id: 'fransk-1-15-3-def-2',
      type: 'definition',
      title: 'Uttrykke folelser',
      content: `For a skrive gode dagboknotater ma du kunne uttrykke **folelser**. Her er de viktigste:

**Positive folelser:**

| Fransk | Norsk |
|--------|-------|
| Je suis content(e) | Jeg er fornoyd/glad |
| Je suis heureux/heureuse | Jeg er lykkelig |
| Je suis excite(e) | Jeg er spent |
| Je suis fier/fiere | Jeg er stolt |
| Je suis soulage(e) | Jeg er lettet |

**Negative folelser:**

| Fransk | Norsk |
|--------|-------|
| Je suis triste | Jeg er trist/lei meg |
| Je suis fatigue(e) | Jeg er sliten |
| Je suis stresse(e) | Jeg er stresset |
| Je suis decu(e) | Jeg er skuffet |
| Je suis inquiet/inquiete | Jeg er bekymret |
| Je suis en colere | Jeg er sint |
| Je m'ennuie | Jeg kjeder meg |

**Tips:** Adjektivene som ender pa *-e* i parentes far denne endelsen nar den som skriver er jente/kvinne.`,
    },
    {
      id: 'fransk-1-15-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Uttrykke folelser',
      problem: `Hvilken folelse passer best i disse situasjonene? Skriv en setning pa fransk.
a) Du fikk en god karakter pa proven.
b) Det regner og du kan ikke ga ut.
c) Du har en viktig prove i morgen.`,
      solution: `a) **Je suis content(e) !** eller **Je suis fier/fiere !** (Jeg er fornoyd! / Jeg er stolt!)
b) **Je suis triste** eller **Je m'ennuie.** (Jeg er lei meg. / Jeg kjeder meg.)
c) **Je suis stresse(e)** eller **Je suis inquiet/inquiete.** (Jeg er stresset. / Jeg er bekymret.)`,
    },
    {
      id: 'fransk-1-15-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig folelsesuttrykk og skriv en setning pa fransk.',
        subTasks: [
          { label: 'a', task: 'Du vant en konkurranse.', solution: 'Je suis tres content(e) ! / Je suis fier/fiere !' },
          { label: 'b', task: 'Bestevennen din flytter til en annen by.', solution: 'Je suis triste. / Je suis decu(e).' },
          { label: 'c', task: 'Du har trent hardt og er veldig sliten.', solution: 'Je suis tres fatigue(e).' },
          { label: 'd', task: 'Du har fatt en ny hund.', solution: 'Je suis tres heureux/heureuse ! / Je suis excite(e) !' },
        ],
        solution: 'a) content(e)/fier(e), b) triste/decu(e), c) fatigue(e), d) heureux/heureuse/excite(e)',
        hints: ['Se tabellene over positive og negative folelser', 'Bruk "tres" (veldig) for a forsterke'],
      },
    },
    {
      id: 'fransk-1-15-3-text-1',
      type: 'text',
      content: `## Tidsuttrykk for dagboken

For a fortelle om dagen bruker du tidsuttrykk:

| Fransk | Norsk |
|--------|-------|
| ce matin | i morges |
| cet apres-midi | i ettermiddag |
| ce soir | i kveld |
| aujourd'hui | i dag |
| hier | i gar |
| d'abord | forst |
| ensuite / puis | deretter / sa |
| enfin / finalement | til slutt |
| apres | etter |
| avant | for |
| pendant | under / mens |`,
    },
    {
      id: 'fransk-1-15-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Bruke tidsuttrykk',
      problem: `Sett inn riktige tidsuttrykk i dette dagboknotatet:

"___ (I morges), je suis alle(e) a l'ecole. ___ (Deretter), j'ai mange avec mes amis. ___ (Om ettermiddagen), j'ai fait du sport. ___ (Til slutt), j'ai regarde la tele ___ (i kveld)."`,
      solution: `"**Ce matin**, je suis alle(e) a l'ecole. **Ensuite**, j'ai mange avec mes amis. **Cet apres-midi**, j'ai fait du sport. **Finalement**, j'ai regarde la tele **ce soir**."`,
    },
    {
      id: 'fransk-1-15-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse tidsuttrykkene til fransk.',
        subTasks: [
          { label: 'a', task: 'i morges', solution: 'ce matin' },
          { label: 'b', task: 'deretter', solution: 'ensuite / puis' },
          { label: 'c', task: 'til slutt', solution: 'enfin / finalement' },
          { label: 'd', task: 'i gar', solution: 'hier' },
        ],
        solution: 'a) ce matin, b) ensuite/puis, c) enfin/finalement, d) hier',
        hints: ['Se tabellen over tidsuttrykk'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-15-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv et dagboknotat pa fransk om dagen i gar (6-8 setninger). Bruk passe compose, tidsuttrykk og folelsesuttrykk.',
        subTasks: [
          { label: 'a', task: 'Start med dato og "Cher journal,"', solution: 'Lundi 17 fevrier. Cher journal,' },
          { label: 'b', task: 'Fortell hva du gjorde om morgenen (bruk passe compose)', solution: "Ce matin, je suis alle(e) a l'ecole. J'ai eu un cours de francais." },
          { label: 'c', task: 'Fortell hva du gjorde om ettermiddagen', solution: "Cet apres-midi, j'ai fait du sport avec mes amis." },
          { label: 'd', task: 'Avslutt med hvordan du foler deg', solution: 'Je suis un peu fatigue(e), mais tres content(e) de ma journee !' },
        ],
        solution: "Eksempel: Lundi 17 fevrier. Cher journal, Aujourd'hui, c'etait une bonne journee. Ce matin, je suis alle(e) a l'ecole. J'ai eu un cours de francais - c'etait interessant ! Ensuite, j'ai mange a la cantine. Cet apres-midi, j'ai fait du sport. Je suis fatigue(e) mais content(e). Demain, j'ai un examen. Je suis un peu stresse(e) !",
        hints: ['Bruk tidsuttrykkene: ce matin, ensuite, cet apres-midi, ce soir', 'Bruk passe compose: j\'ai fait, je suis alle(e)', 'Avslutt med en folelse: je suis content(e), fatigue(e), etc.'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 15.4: Decrire une image - Bildebeskrivelse og sammenhengende tekst
// ============================================================================

export const CHAPTER_FRANSK_1_15_4: TextbookChapter = {
  id: 'fransk-1-15-4',
  courseId: 'fransk-1',
  chapterNumber: '15.4',
  title: 'Decrire une image',
  subtitle: 'Bildebeskrivelse og sammenhengende tekst',
  description: 'Laer a beskrive bilder, bruke posisjonsuttrykk og skrive sammenhengende tekst pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive enkle tekster om dagligliv som forteller, beskriver og informerer',
  ],
  content: [
    {
      id: 'fransk-1-15-4-intro',
      type: 'text',
      content: `## Beskrive bilder og skrive sammenhengende tekst

A beskrive et bilde er en viktig ferdighet i fremmedsprak. Du laerer a se detaljer, bruke beskrivende ord og sette sammen setninger til en sammenhengende tekst. I dette kapittelet laerer du posisjonsuttrykk, beskrivende adjektiver og bindeord.`,
    },
    {
      id: 'fransk-1-15-4-def-1',
      type: 'definition',
      title: 'Posisjonsuttrykk (Expressions de position)',
      content: `For a beskrive **hvor** ting befinner seg i et bilde, bruker du **posisjonsuttrykk**:

| Fransk | Norsk |
|--------|-------|
| a gauche | til venstre |
| a droite | til hoyre |
| au centre / au milieu | i midten |
| en haut | oppe / ovenfor |
| en bas | nede / nedenfor |
| devant | foran |
| derriere | bak |
| a cote de | ved siden av |
| entre | mellom |
| sur | pa / opppa |
| sous | under |
| pres de | naer / i naerheten av |
| loin de | langt fra |

**Eksempel:** *A gauche, il y a un arbre. Au centre, on voit une maison.*
(Til venstre er det et tre. I midten ser man et hus.)`,
    },
    {
      id: 'fransk-1-15-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Bruke posisjonsuttrykk',
      problem: `Beskriv hvor disse tingene er ved hjelp av posisjonsuttrykk. Tenk deg et bilde av et rom:
a) En stol som star foran et bord.
b) En katt som ligger pa sofaen.
c) Et vindu til hoyre i bildet.`,
      solution: `a) **Devant la table, il y a une chaise.** (Foran bordet er det en stol.)
b) **Sur le canape, il y a un chat.** (Pa sofaen er det en katt.)
c) **A droite, on voit une fenetre.** (Til hoyre ser man et vindu.)`,
    },
    {
      id: 'fransk-1-15-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oversett disse posisjonsuttrykkene til fransk.',
        subTasks: [
          { label: 'a', task: 'til venstre', solution: 'a gauche' },
          { label: 'b', task: 'i midten', solution: 'au centre / au milieu' },
          { label: 'c', task: 'foran', solution: 'devant' },
          { label: 'd', task: 'ved siden av', solution: 'a cote de' },
        ],
        solution: 'a) a gauche, b) au centre / au milieu, c) devant, d) a cote de',
        hints: ['Se tabellen over posisjonsuttrykk'],
      },
    },
    {
      id: 'fransk-1-15-4-def-2',
      type: 'definition',
      title: 'Nyttige fraser for bildebeskrivelse',
      content: `Nar du beskriver et bilde, bruker du faste fraser for a innlede beskrivelsen:

**Apningsfraser:**
- **Sur cette image, on voit...** - Pa dette bildet ser man...
- **C'est une photo de...** - Det er et bilde/foto av...
- **L'image montre...** - Bildet viser...
- **Il y a...** - Det er / Det finnes...

**Beskrive personer:**
- **On voit un homme / une femme / un enfant** - Man ser en mann / en kvinne / et barn
- **Il/Elle porte...** - Han/Hun har pa seg...
- **Il/Elle a l'air...** - Han/Hun ser ut til a vaere...

**Beskrive stemning:**
- **L'atmosphere est calme / joyeuse / triste** - Stemningen er rolig / glad / trist
- **Il fait beau / mauvais** - Det er fint / darlig vaer
- **C'est en ete / hiver / automne / printemps** - Det er sommer / vinter / host / var`,
    },
    {
      id: 'fransk-1-15-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Beskrive et bilde',
      problem: `Beskriv dette bildet med 4-5 setninger:
*Tenk deg et bilde av en park om sommeren. Det er en familie som har piknik. Solen skinner.*`,
      solution: `**Sur cette image, on voit un parc en ete.** Il fait tres beau et le soleil brille. **Au centre**, il y a une famille qui fait un pique-nique. **A gauche**, on voit un grand arbre. **A droite**, il y a des fleurs. L'atmosphere est joyeuse et calme.

(Pa dette bildet ser man en park om sommeren. Det er veldig fint vaer og solen skinner. I midten er det en familie som har piknik. Til venstre ser man et stort tre. Til hoyre er det blomster. Stemningen er glad og rolig.)`,
    },
    {
      id: 'fransk-1-15-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett disse bildebeskrivelse-frasene til fransk.',
        subTasks: [
          { label: 'a', task: 'Pa dette bildet ser man en strand.', solution: 'Sur cette image, on voit une plage.' },
          { label: 'b', task: 'Det er fint vaer og solen skinner.', solution: 'Il fait beau et le soleil brille.' },
          { label: 'c', task: 'I midten er det et hus.', solution: 'Au centre, il y a une maison.' },
          { label: 'd', task: 'Stemningen er rolig.', solution: "L'atmosphere est calme." },
        ],
        solution: "a) Sur cette image, on voit une plage. b) Il fait beau et le soleil brille. c) Au centre, il y a une maison. d) L'atmosphere est calme.",
        hints: ['on voit = man ser', 'il y a = det er/det finnes', 'le soleil brille = solen skinner'],
      },
    },
    {
      id: 'fransk-1-15-4-def-3',
      type: 'definition',
      title: 'Bindeord (Mots de liaison)',
      content: `For a skrive **sammenhengende tekst** trenger du **bindeord** som binder setningene sammen:

| Fransk | Norsk | Bruk |
|--------|-------|------|
| et | og | Legge til informasjon |
| mais | men | Motsetning |
| aussi | ogsa | Legge til |
| parce que | fordi | Begrunnelse |
| donc | derfor/sa | Konsekvens |
| ou | eller | Alternativ |
| puis / ensuite | sa / deretter | Rekkefolge |
| par exemple | for eksempel | Eksemplifisering |
| en plus | i tillegg | Legge til mer |
| cependant | likevel/imidlertid | Motsetning (formelt) |

**Eksempel uten bindeord:** *J'aime Paris. Paris est beau. Il y a la tour Eiffel.* (Hakkete og kjedelig!)

**Med bindeord:** *J'aime Paris **parce que** c'est beau. **En plus**, il y a la tour Eiffel.* (Flyter mye bedre!)`,
    },
    {
      id: 'fransk-1-15-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Bruke bindeord',
      problem: `Bind sammen disse setningsparene med et passende bindeord:
a) J'aime le francais. C'est interessant.
b) Il fait froid. Je porte un manteau.
c) J'aime le chocolat. Je prefere la glace.`,
      solution: `a) J'aime le francais **parce que** c'est interessant. (Jeg liker fransk **fordi** det er interessant.)
b) Il fait froid, **donc** je porte un manteau. (Det er kaldt, **sa** jeg har pa meg en jakke.)
c) J'aime le chocolat, **mais** je prefere la glace. (Jeg liker sjokolade, **men** jeg foretrekker iskrem.)`,
    },
    {
      id: 'fransk-1-15-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig bindeord (et, mais, parce que, donc) og fullfar setningene.',
        subTasks: [
          { label: 'a', task: "J'aime le sport ___ c'est bon pour la sante.", solution: "J'aime le sport parce que c'est bon pour la sante." },
          { label: 'b', task: 'Je suis fatigue(e), ___ je vais dormir.', solution: 'Je suis fatigue(e), donc je vais dormir.' },
          { label: 'c', task: "J'aime le cafe ___ je n'aime pas le the.", solution: "J'aime le cafe mais je n'aime pas le the." },
          { label: 'd', task: "J'ai un frere ___ une soeur.", solution: "J'ai un frere et une soeur." },
        ],
        solution: 'a) parce que, b) donc, c) mais, d) et',
        hints: ['parce que = fordi', 'donc = sa/derfor', 'mais = men', 'et = og'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-15-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-15-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en bildebeskrivelse pa fransk (6-8 setninger). Tenk deg et bilde av et klasserom med elever og en laerer.',
        subTasks: [
          { label: 'a', task: 'Start med en apningsfrase som beskriver hva bildet viser', solution: "Sur cette image, on voit une salle de classe. C'est une photo d'une ecole." },
          { label: 'b', task: 'Beskriv hva som er i midten og til venstre/hoyre (bruk posisjonsuttrykk)', solution: 'Au centre, il y a un professeur devant le tableau. A gauche, on voit des eleves assis a leurs tables. A droite, il y a une fenetre.' },
          { label: 'c', task: 'Beskriv personene og stemningen (bruk bindeord)', solution: "Le professeur parle et les eleves ecoutent. L'atmosphere est calme parce que les eleves sont concentres." },
          { label: 'd', task: 'Avslutt med din mening om bildet', solution: "Je trouve que c'est une image interessante parce qu'elle montre une journee normale a l'ecole." },
        ],
        solution: "Eksempel: Sur cette image, on voit une salle de classe. Au centre, il y a un professeur devant le tableau. A gauche, on voit des eleves assis. A droite, il y a une grande fenetre et le soleil brille. Le professeur parle et les eleves ecoutent. L'atmosphere est calme et concentree. Je trouve que c'est une image agreable parce qu'elle montre une bonne ambiance en classe.",
        hints: ['Bruk apningsfraser: Sur cette image, on voit...', 'Bruk posisjonsuttrykk: a gauche, au centre, a droite', 'Bruk bindeord: et, mais, parce que, aussi'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 16.1: La negation - Nektelse
// ============================================================================

export const CHAPTER_FRANSK_1_16_1: TextbookChapter = {
  id: 'fransk-1-16-1',
  courseId: 'fransk-1',
  chapterNumber: '16.1',
  title: 'La negation',
  subtitle: 'Nektelse',
  description: 'Laer a lage nektende setninger pa fransk med ne...pas og andre nektelsesformer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke grunnleggende spraklige strukturer og former for tekstbinding',
  ],
  content: [
    {
      id: 'fransk-1-16-1-intro',
      type: 'text',
      content: `## Nektelse pa fransk

Pa norsk legger vi til "ikke" for a nekte: "Jeg snakker" -> "Jeg snakker **ikke**". Pa fransk bruker vi **to ord**: **ne...pas**, som legges rundt verbet som en sandwich. Dette er den viktigste grammatikkregelen du laerer i dette kapittelet!`,
    },
    {
      id: 'fransk-1-16-1-def-1',
      type: 'definition',
      title: 'Ne...pas - den vanlige nektelsen',
      content: `**Ne...pas** er den vanligste nektelsen pa fransk. De to ordene plasseres **rundt verbet**:

| Bekreftende | Nektende |
|-------------|----------|
| Je **parle** francais. | Je **ne parle pas** francais. |
| Il **est** la. | Il **n'est pas** la. |
| Elle **a** un chat. | Elle **n'a pas** de chat. |
| Nous **aimons** le sport. | Nous **n'aimons pas** le sport. |

**Regler:**
1. **ne** kommer for verbet, **pas** kommer etter verbet
2. **ne** blir **n'** foran vokal: je n'aime pas, il n'est pas
3. Etter nektelse blir **un/une/des** til **de**: Elle a **un** chat -> Elle n'a pas **de** chat`,
    },
    {
      id: 'fransk-1-16-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Ne...pas',
      problem: `Gjor setningene nektende:
a) Je parle anglais.
b) Il est francais.
c) Elle a des freres.`,
      solution: `a) Je **ne** parle **pas** anglais. (Jeg snakker ikke engelsk.)
b) Il **n'**est **pas** francais. (Han er ikke fransk.)
c) Elle **n'**a **pas de** freres. (Hun har ingen brodre.)

Legg merke til: ne -> n' foran vokal, og des -> de etter nektelse.`,
    },
    {
      id: 'fransk-1-16-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Gjor setningene nektende med ne...pas.',
        subTasks: [
          { label: 'a', task: 'Je mange du chocolat.', solution: 'Je ne mange pas de chocolat.' },
          { label: 'b', task: 'Il parle francais.', solution: 'Il ne parle pas francais.' },
          { label: 'c', task: 'Elle aime le sport.', solution: "Elle n'aime pas le sport." },
          { label: 'd', task: 'Nous avons un chien.', solution: "Nous n'avons pas de chien." },
        ],
        solution: "a) Je ne mange pas de chocolat. b) Il ne parle pas francais. c) Elle n'aime pas le sport. d) Nous n'avons pas de chien.",
        hints: ["ne/n' for verbet, pas etter verbet", 'un/une/des -> de etter nektelse'],
      },
    },
    {
      id: 'fransk-1-16-1-text-1',
      type: 'text',
      content: `## Andre nektelsesformer

I tillegg til ne...pas finnes det andre nektelser:

| Nektelse | Betydning | Eksempel |
|----------|-----------|----------|
| ne...jamais | aldri | Je ne mange **jamais** de poisson. (Jeg spiser aldri fisk.) |
| ne...rien | ingenting | Il ne fait **rien**. (Han gjor ingenting.) |
| ne...plus | ikke lenger | Elle ne joue **plus** au tennis. (Hun spiller ikke lenger tennis.) |

**Merk:** Disse fungerer pa samme mate som ne...pas - de legges rundt verbet.

| Bekreftende | Nektende |
|-------------|----------|
| Je mange du poisson. | Je ne mange **jamais** de poisson. |
| Il fait quelque chose. | Il ne fait **rien**. |
| Elle joue au tennis. | Elle ne joue **plus** au tennis. |`,
    },
    {
      id: 'fransk-1-16-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Andre nektelser',
      problem: `Oversett til fransk med riktig nektelsesform:
a) Jeg spiser aldri fisk.
b) Han gjor ingenting.
c) Hun bor ikke lenger i Paris.`,
      solution: `a) Je **ne** mange **jamais** de poisson. (aldri = jamais)
b) Il **ne** fait **rien**. (ingenting = rien)
c) Elle **n'**habite **plus** a Paris. (ikke lenger = plus)`,
    },
    {
      id: 'fransk-1-16-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig nektelsesform: pas, jamais, rien, eller plus.',
        subTasks: [
          { label: 'a', task: 'Jeg drikker aldri kaffe. -> Je ne bois ___ de cafe.', solution: 'jamais' },
          { label: 'b', task: 'Han gjor ingenting. -> Il ne fait ___.', solution: 'rien' },
          { label: 'c', task: "Vi bor ikke i Frankrike. -> Nous n'habitons ___ en France.", solution: 'pas' },
          { label: 'd', task: 'Hun danser ikke lenger. -> Elle ne danse ___.', solution: 'plus' },
        ],
        solution: 'a) jamais, b) rien, c) pas, d) plus',
        hints: ['jamais = aldri', 'rien = ingenting', 'plus = ikke lenger'],
      },
    },
    {
      id: 'fransk-1-16-1-note-1',
      type: 'note',
      content: `**Pas de - ingen/ikke noe:**
Etter nektelse forsvinner artiklene un, une og des, og erstattes med **de**:
- J'ai **un** chat. -> Je n'ai pas **de** chat. (Jeg har ingen katt.)
- Il a **des** amis. -> Il n'a pas **d'**amis. (Han har ingen venner.)
- Elle mange **du** pain. -> Elle ne mange pas **de** pain. (Hun spiser ikke noe brod.)`,
    },
    {
      id: 'fransk-1-16-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Pas de',
      problem: `Gjor setningene nektende. Husk a endre artiklene!
a) J'ai un frere.
b) Elle a des soeurs.
c) Il mange du fromage.`,
      solution: `a) Je n'ai pas **de** frere. (un -> de)
b) Elle n'a pas **de** soeurs. (des -> de)
c) Il ne mange pas **de** fromage. (du -> de)`,
    },
    {
      id: 'fransk-1-16-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor setningene nektende. Pass pa artiklene!',
        subTasks: [
          { label: 'a', task: "J'ai une voiture.", solution: "Je n'ai pas de voiture." },
          { label: 'b', task: 'Il a des enfants.', solution: "Il n'a pas d'enfants." },
          { label: 'c', task: 'Elle boit du cafe.', solution: 'Elle ne boit pas de cafe.' },
        ],
        solution: "a) Je n'ai pas de voiture. b) Il n'a pas d'enfants. c) Elle ne boit pas de cafe.",
        hints: ['un/une/des/du/de la -> de etter nektelse', "de + vokal = d'"],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-16-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett til fransk med riktig nektelse.',
        subTasks: [
          { label: 'a', task: 'Jeg snakker ikke spansk.', solution: 'Je ne parle pas espagnol.' },
          { label: 'b', task: 'Hun har ingen hund.', solution: "Elle n'a pas de chien." },
          { label: 'c', task: 'Vi spiser aldri sushi.', solution: 'Nous ne mangeons jamais de sushi.' },
          { label: 'd', task: 'Han gjor ingenting pa sondager.', solution: 'Il ne fait rien le dimanche.' },
        ],
        solution: "a) Je ne parle pas espagnol. b) Elle n'a pas de chien. c) Nous ne mangeons jamais de sushi. d) Il ne fait rien le dimanche.",
        hints: ['ne...pas = ikke', 'ne...jamais = aldri', 'ne...rien = ingenting'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 16.2: Poser des questions - Stille sporsmal
// ============================================================================

export const CHAPTER_FRANSK_1_16_2: TextbookChapter = {
  id: 'fransk-1-16-2',
  courseId: 'fransk-1',
  chapterNumber: '16.2',
  title: 'Poser des questions',
  subtitle: 'Stille sporsmal',
  description: 'Laer tre mater a stille sporsmal pa fransk og de viktigste sporreordene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke grunnleggende spraklige strukturer og former for tekstbinding',
  ],
  content: [
    {
      id: 'fransk-1-16-2-intro',
      type: 'text',
      content: `## Stille sporsmal pa fransk

Pa fransk finnes det tre mater a stille ja/nei-sporsmal pa. I tillegg har vi sporreord som *qui*, *que*, *ou* osv. for a stille apne sporsmal. I dette kapittelet laerer du alle tre matene og de viktigste sporreordene.`,
    },
    {
      id: 'fransk-1-16-2-def-1',
      type: 'definition',
      title: 'Tre mater a stille sporsmal',
      content: `Det finnes tre mater a lage ja/nei-sporsmal pa:

| Mate | Hvordan | Eksempel |
|------|---------|----------|
| **1. Intonasjon** | Samme ordstilling, men stemmen gar opp | Tu parles francais **?** |
| **2. Est-ce que** | Legg til "est-ce que" foran | **Est-ce que** tu parles francais ? |
| **3. Inversjon** | Bytt om subjekt og verb | **Parles-tu** francais ? |

**Mate 1** er mest uformell og mest brukt i dagligtale.
**Mate 2** er vanlig og fungerer alltid.
**Mate 3** er mest formell og brukes mest i skrift.

| Utsagn | Med intonasjon | Med est-ce que | Med inversjon |
|--------|---------------|----------------|---------------|
| Tu aimes le cafe. | Tu aimes le cafe ? | Est-ce que tu aimes le cafe ? | Aimes-tu le cafe ? |
| Il est francais. | Il est francais ? | Est-ce qu'il est francais ? | Est-il francais ? |`,
    },
    {
      id: 'fransk-1-16-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Tre mater',
      problem: `Gjor om til sporsmal pa alle tre mater:
"Elle parle anglais." (Hun snakker engelsk.)`,
      solution: `1. **Intonasjon:** Elle parle anglais **?**
2. **Est-ce que:** **Est-ce qu'**elle parle anglais ?
3. **Inversjon:** **Parle-t-elle** anglais ?

Merk: Ved inversjon med 3. person entall legges **-t-** til mellom verb og pronomen nar verbet ender pa vokal: parle-**t**-elle.`,
    },
    {
      id: 'fransk-1-16-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Lag sporsmal med "est-ce que".',
        subTasks: [
          { label: 'a', task: 'Tu aimes le chocolat.', solution: 'Est-ce que tu aimes le chocolat ?' },
          { label: 'b', task: 'Il habite a Paris.', solution: "Est-ce qu'il habite a Paris ?" },
          { label: 'c', task: 'Vous parlez francais.', solution: 'Est-ce que vous parlez francais ?' },
          { label: 'd', task: 'Elle est francaise.', solution: "Est-ce qu'elle est francaise ?" },
        ],
        solution: "a) Est-ce que tu aimes le chocolat ? b) Est-ce qu'il habite a Paris ? c) Est-ce que vous parlez francais ? d) Est-ce qu'elle est francaise ?",
        hints: ['Legg til "est-ce que" foran setningen', "est-ce que -> est-ce qu' foran vokal"],
      },
    },
    {
      id: 'fransk-1-16-2-text-1',
      type: 'text',
      content: `## Sporreord

For a stille apne sporsmal (ikke ja/nei) bruker vi sporreord:

| Sporreord | Norsk | Eksempel |
|-----------|-------|----------|
| **Qui ?** | Hvem? | Qui est-ce ? (Hvem er det?) |
| **Que / Qu'est-ce que ?** | Hva? | Qu'est-ce que tu fais ? (Hva gjor du?) |
| **Ou ?** | Hvor? | Ou habites-tu ? (Hvor bor du?) |
| **Quand ?** | Nar? | Quand est-ce que tu pars ? (Nar reiser du?) |
| **Comment ?** | Hvordan? | Comment tu t'appelles ? (Hva heter du?) |
| **Pourquoi ?** | Hvorfor? | Pourquoi tu es triste ? (Hvorfor er du trist?) |
| **Combien ?** | Hvor mye/mange? | Combien ca coute ? (Hvor mye koster det?) |
| **Quel(le) ?** | Hvilken? | Quelle heure est-il ? (Hva er klokka?) |`,
    },
    {
      id: 'fransk-1-16-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Sporreord',
      problem: `Velg riktig sporreord:
a) ___ est-ce que tu habites ? (Paris.)
b) ___ est-ce que tu fais ? (Je lis un livre.)
c) ___ est-ce ? (C'est mon frere.)`,
      solution: `a) **Ou** est-ce que tu habites ? (Hvor bor du?) -> Svar: sted
b) **Qu'est-ce que** tu fais ? (Hva gjor du?) -> Svar: handling
c) **Qui** est-ce ? (Hvem er det?) -> Svar: person`,
    },
    {
      id: 'fransk-1-16-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg riktig sporreord: qui, ou, quand, comment, pourquoi, combien.',
        subTasks: [
          { label: 'a', task: "___ tu t'appelles ? (Hva heter du?)", solution: 'Comment' },
          { label: 'b', task: '___ est-ce que tu pars ? (Nar reiser du?)', solution: 'Quand' },
          { label: 'c', task: '___ ca coute ? (Hvor mye koster det?)', solution: 'Combien' },
          { label: 'd', task: '___ tu es triste ? (Hvorfor er du trist?)', solution: 'Pourquoi' },
        ],
        solution: 'a) Comment, b) Quand, c) Combien, d) Pourquoi',
        hints: ['comment = hvordan', 'quand = nar', 'combien = hvor mye'],
      },
    },
    {
      id: 'fransk-1-16-2-tip-1',
      type: 'tip',
      content: `**Tips:** I dagligtale er den enkleste maten a stille sporsmal bare a bruke sporreordet + vanlig setning: "Tu habites ou ?" (Hvor bor du?), "Tu t'appelles comment ?" (Hva heter du?). Sporreordet kan sta til slutt! Pa eksamen og i skrift bruker du helst "est-ce que" eller inversjon.`,
    },
    {
      id: 'fransk-1-16-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Stille sporsmal i praksis',
      problem: `Still sporsmal pa fransk:
a) Hva heter du? (med est-ce que)
b) Hvor bor du? (med intonasjon)
c) Hvem er det? (direkte)`,
      solution: `a) **Comment** est-ce que tu t'appelles ?
b) Tu habites **ou** ?
c) **Qui** est-ce ?`,
    },
    {
      id: 'fransk-1-16-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett sporsmalene til fransk (bruk est-ce que).',
        subTasks: [
          { label: 'a', task: 'Hvor bor du?', solution: 'Ou est-ce que tu habites ?' },
          { label: 'b', task: 'Hva gjor du?', solution: "Qu'est-ce que tu fais ?" },
          { label: 'c', task: 'Nar reiser du?', solution: 'Quand est-ce que tu pars ?' },
        ],
        solution: "a) Ou est-ce que tu habites ? b) Qu'est-ce que tu fais ? c) Quand est-ce que tu pars ?",
        hints: ['ou = hvor', "qu'est-ce que = hva", 'quand = nar'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-16-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag sporsmal til disse svarene. Bruk riktig sporreord.',
        subTasks: [
          { label: 'a', task: "Svar: J'habite a Lyon. (Spor om sted)", solution: 'Ou est-ce que tu habites ?' },
          { label: 'b', task: 'Svar: Je pars lundi. (Spor om tid)', solution: 'Quand est-ce que tu pars ?' },
          { label: 'c', task: 'Svar: Ca coute 5 euros. (Spor om pris)', solution: 'Combien ca coute ?' },
          { label: 'd', task: 'Svar: Parce que je suis fatigue. (Spor om grunn)', solution: 'Pourquoi est-ce que tu es fatigue ?' },
        ],
        solution: 'a) Ou habites-tu ? b) Quand pars-tu ? c) Combien ca coute ? d) Pourquoi es-tu fatigue ?',
        hints: ['Sted -> ou', 'Tid -> quand', 'Mengde/pris -> combien', 'Grunn -> pourquoi'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 16.3: Les articles - Artikler
// ============================================================================

export const CHAPTER_FRANSK_1_16_3: TextbookChapter = {
  id: 'fransk-1-16-3',
  courseId: 'fransk-1',
  chapterNumber: '16.3',
  title: 'Les articles',
  subtitle: 'Artikler',
  description: 'Laer om bestemte, ubestemte og delingsartikler pa fransk, samt sammentrekninger.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke grunnleggende spraklige strukturer og former for tekstbinding',
  ],
  content: [
    {
      id: 'fransk-1-16-3-intro',
      type: 'text',
      content: `## Artikler pa fransk

Artikler er smaard som star foran substantiv. Pa norsk har vi "en", "ei", "et" (ubestemt) og "-en", "-a", "-et" (bestemt). Pa fransk er artikkelsystemet litt mer komplisert, men svart viktig a laere! Det finnes tre typer: bestemte, ubestemte og delingsartikler.`,
    },
    {
      id: 'fransk-1-16-3-def-1',
      type: 'definition',
      title: 'Bestemte artikler (articles definis)',
      content: `**Bestemte artikler** brukes nar vi snakker om noe bestemt eller generelt:

| Artikkel | Brukes foran | Eksempel | Norsk |
|----------|-------------|----------|-------|
| **le** | hankjonn entall | **le** livre | boka / boken |
| **la** | hunkjonn entall | **la** maison | huset |
| **l'** | vokal (begge kjonn) | **l'**ecole | skolen |
| **les** | flertall (begge kjonn) | **les** livres | bokene |

**Bruk:**
- Noe bestemt: **Le** livre est sur la table. (Boka er pa bordet.)
- Generelt: J'aime **le** chocolat. (Jeg liker sjokolade generelt.)`,
    },
    {
      id: 'fransk-1-16-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Bestemte artikler',
      problem: `Sett inn riktig bestemt artikkel (le, la, l', les):
a) ___ chat (katten)
b) ___ maison (huset)
c) ___ ecole (skolen)
d) ___ enfants (barna)`,
      solution: `a) **le** chat (hankjonn)
b) **la** maison (hunkjonn)
c) **l'**ecole (begynner med vokal)
d) **les** enfants (flertall)`,
    },
    {
      id: 'fransk-1-16-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: "Sett inn riktig bestemt artikkel: le, la, l' eller les.",
        subTasks: [
          { label: 'a', task: '___ garcon (gutten)', solution: 'le garcon' },
          { label: 'b', task: '___ fille (jenta)', solution: 'la fille' },
          { label: 'c', task: '___ ami (vennen)', solution: "l'ami" },
          { label: 'd', task: '___ chiens (hundene)', solution: 'les chiens' },
        ],
        solution: "a) le, b) la, c) l', d) les",
        hints: ['le = hankjonn', 'la = hunkjonn', "l' = foran vokal"],
      },
    },
    {
      id: 'fransk-1-16-3-text-1',
      type: 'text',
      content: `## Ubestemte artikler (articles indefinis)

**Ubestemte artikler** brukes nar vi snakker om noe uspesifisert:

| Artikkel | Brukes foran | Eksempel | Norsk |
|----------|-------------|----------|-------|
| **un** | hankjonn entall | **un** livre | en bok |
| **une** | hunkjonn entall | **une** maison | et hus |
| **des** | flertall (begge kjonn) | **des** livres | (noen) boker |

**Sammenligning:**

| Ubestemt | Bestemt |
|----------|---------|
| J'ai **un** chat. (Jeg har en katt.) | **Le** chat est noir. (Katten er svart.) |
| C'est **une** ecole. (Det er en skole.) | **L'**ecole est grande. (Skolen er stor.) |
| Il y a **des** fleurs. (Det er noen blomster.) | **Les** fleurs sont belles. (Blomstene er vakre.) |`,
    },
    {
      id: 'fransk-1-16-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Bestemt eller ubestemt?',
      problem: `Velg riktig artikkel:
a) J'ai ___ chien. (Jeg har en hund.)
b) ___ chien est dans le jardin. (Hunden er i hagen.)
c) Elle achete ___ robe. (Hun kjoper en kjole.)`,
      solution: `a) J'ai **un** chien. (ubestemt - en hund, ikke spesifisert hvilken)
b) **Le** chien est dans le jardin. (bestemt - den bestemte hunden)
c) Elle achete **une** robe. (ubestemt - en kjole, ikke spesifisert hvilken)`,
    },
    {
      id: 'fransk-1-16-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: "Velg riktig artikkel: un, une, des, le, la, l' eller les.",
        subTasks: [
          { label: 'a', task: "J'ai ___ soeur. (Jeg har en soster.)", solution: 'une' },
          { label: 'b', task: '___ soeur de Paul est gentille. (Sosteren til Paul er snill.)', solution: 'La' },
          { label: 'c', task: 'Il y a ___ arbres dans le parc. (Det er traer i parken.)', solution: 'des' },
          { label: 'd', task: "J'aime ___ musique. (Jeg liker musikk.)", solution: 'la' },
        ],
        solution: 'a) une, b) La, c) des, d) la',
        hints: ['Ubestemt = noe uspesifisert, bestemt = noe kjent eller generelt'],
      },
    },
    {
      id: 'fransk-1-16-3-def-2',
      type: 'definition',
      title: 'Delingsartikler (articles partitifs)',
      content: `**Delingsartikler** brukes med mat og drikke nar vi snakker om en uspesifisert mengde ("litt", "noe"):

| Artikkel | Brukes foran | Eksempel | Norsk |
|----------|-------------|----------|-------|
| **du** | hankjonn entall | **du** pain | (litt) brod |
| **de la** | hunkjonn entall | **de la** confiture | (litt) syltetoy |
| **de l'** | vokal (begge kjonn) | **de l'**eau | (litt) vann |
| **des** | flertall | **des** fruits | (noen) frukter |

**Eksempler:**
- Je mange **du** fromage. (Jeg spiser ost.)
- Elle boit **de la** limonade. (Hun drikker limonade.)
- Il boit **de l'**eau. (Han drikker vann.)

**Sammentrekninger med a og de:**

| Preposisjon + artikkel | Sammentrekning | Eksempel |
|------------------------|----------------|----------|
| a + le | **au** | Je vais **au** cinema. |
| a + les | **aux** | Je parle **aux** enfants. |
| de + le | **du** | Le livre **du** professeur. |
| de + les | **des** | Les jouets **des** enfants. |

Merk: a + la og de + la forblir uendret. A + l' og de + l' forblir ogsa uendret.`,
    },
    {
      id: 'fransk-1-16-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Delingsartikler og sammentrekninger',
      problem: `Sett inn riktig artikkel:
a) Je mange ___ pain. (brod, hankjonn)
b) Elle boit ___ eau. (vann, vokal)
c) Je vais ___ cinema. (a + le)
d) C'est le livre ___ professeur. (de + le)`,
      solution: `a) Je mange **du** pain. (hankjonn -> du)
b) Elle boit **de l'**eau. (begynner med vokal -> de l')
c) Je vais **au** cinema. (a + le = au)
d) C'est le livre **du** professeur. (de + le = du)`,
    },
    {
      id: 'fransk-1-16-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: "Sett inn riktig delingsartikkel (du, de la, de l') eller sammentrekning (au, aux, du, des).",
        subTasks: [
          { label: 'a', task: 'Je bois ___ cafe. (kaffe, hankjonn)', solution: 'du cafe' },
          { label: 'b', task: 'Elle mange ___ viande. (kjott, hunkjonn)', solution: 'de la viande' },
          { label: 'c', task: 'Il va ___ ecole. (a + l\')', solution: "a l'ecole" },
          { label: 'd', task: 'Je parle ___ eleves. (a + les)', solution: 'aux eleves' },
        ],
        solution: "a) du, b) de la, c) a l', d) aux",
        hints: ['du = hankjonn / de + le', 'de la = hunkjonn', 'au = a + le', 'aux = a + les'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-16-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fyll inn riktig artikkel i hver setning. Velg mellom alle typer.',
        subTasks: [
          { label: 'a', task: "J'ai ___ chat et ___ chien. (en katt og en hund)", solution: 'un chat et un chien (ubestemte)' },
          { label: 'b', task: '___ chat est noir et ___ chien est blanc. (katten og hunden)', solution: 'Le chat est noir et le chien est blanc (bestemte)' },
          { label: 'c', task: 'Je mange ___ pain avec ___ confiture. (brod og syltetoy)', solution: 'du pain avec de la confiture (delingsartikler)' },
          { label: 'd', task: "J'aime ___ chocolat mais je n'aime pas ___ cafe. (generelt)", solution: 'le chocolat, le cafe (bestemte for generelle utsagn)' },
        ],
        solution: 'a) un, un. b) Le, le. c) du, de la. d) le, le.',
        hints: ['Ubestemt = noe nytt', 'Bestemt = noe kjent/generelt', 'Delings = mat/drikke'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 16.4: Strategies d'apprentissage - Laeringsstrategier
// ============================================================================

export const CHAPTER_FRANSK_1_16_4: TextbookChapter = {
  id: 'fransk-1-16-4',
  courseId: 'fransk-1',
  chapterNumber: '16.4',
  title: "Strategies d'apprentissage",
  subtitle: 'Laeringsstrategier',
  description: 'Laer strategier for ordbokbruk, ordlaering og kommunikasjon pa fransk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke relevante laerings- og kommunikasjonsstrategier',
  ],
  content: [
    {
      id: 'fransk-1-16-4-intro',
      type: 'text',
      content: `## Laeringsstrategier for fransk

A laere et nytt sprak handler ikke bare om grammatikk og gloser. Det handler ogsa om **hvordan** du laerer. I dette kapittelet far du tips om ordbokbruk, ordlaering og kommunikasjonsstrategier som gjor deg til en bedre spraklaerer.`,
    },
    {
      id: 'fransk-1-16-4-text-1',
      type: 'text',
      content: `## Bruke ordbok og nettressurser

En ordbok er det viktigste verktoyet ditt nar du laerer fransk. Bade papirordboken og digitale ordbeker er nyttige:

**Nettordbeker:**
- **WordReference.com** - Utmerket fransk-engelsk ordbok med eksempelsetninger og forum
- **Google Translate** - Nyttig for enkle ord, men upresist for hele setninger
- **Lexin** - Fransk-norsk ordbok

**Slik leser du et ordbokoppslag:**

| Del | Forklaring | Eksempel |
|-----|-----------|----------|
| **Oppslagsord** | Ordet du slaar opp | **manger** |
| **Ordklasse** | Hva slags ord det er | v. (verb) |
| **Betydning** | Hva det betyr | a spise |
| **Eksempel** | Ordet i en setning | Je mange une pomme. |
| **Kjonn (subst.)** | Hankjonn (m.) eller hunkjonn (f.) | la maison (f.) |

**Tips:** Nar du slaar opp et verb, finner du det i **infinitiv** (grunnformen): spiser -> manger, snakker -> parler.`,
    },
    {
      id: 'fransk-1-16-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Ordbokbruk',
      problem: `Du vil oversette "Jeg spiser et eple" til fransk. Hvordan gaar du frem?
a) Hvilke ord slaar du opp?
b) Hvilken form av "spise" soker du etter?
c) Hva blir setningen?`,
      solution: `a) Du slaar opp: "spise" og "eple"
b) Du soker etter infinitiv: **manger** (ikke "spiser")
c) Je **mange** une **pomme**. (Jeg spiser et eple.)

Husk: Du finner verbet i infinitiv (manger), men maa boye det (je mange).`,
    },
    {
      id: 'fransk-1-16-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilken infinitivform soker du etter i ordboka?',
        subTasks: [
          { label: 'a', task: 'jeg snakker (je parle)', solution: 'parler' },
          { label: 'b', task: 'vi spiser (nous mangeons)', solution: 'manger' },
          { label: 'c', task: 'hun bor (elle habite)', solution: 'habiter' },
          { label: 'd', task: 'de liker (ils aiment)', solution: 'aimer' },
        ],
        solution: 'a) parler, b) manger, c) habiter, d) aimer',
        hints: ['Infinitiv = grunnformen av verbet, ender ofte pa -er'],
      },
    },
    {
      id: 'fransk-1-16-4-text-2',
      type: 'text',
      content: `## Ordlaeringsstrategier

Det finnes mange mater a laere nye ord pa. Her er de mest effektive:

| Strategi | Beskrivelse | Eksempel |
|----------|-------------|----------|
| **Flashcards** | Skriv fransk pa en side, norsk pa den andre | Forside: "la maison" / Bakside: "huset" |
| **Repetisjon** | Ov ordene flere ganger over tid | Ov 5 ord i dag, gjenta i morgen, gjenta om en uke |
| **Assosiasjoner** | Koble ordet til et bilde eller minne | "la plage" -> se for deg en strand |
| **Ordgrupper** | Laer ord som horer sammen | Mat: le pain, le fromage, la pomme |
| **Setninger** | Laer ord i setninger, ikke alene | "Je mange du pain" i stedet for bare "le pain" |

**Huskeregel:** Du maa mote et nytt ord **minst 7 ganger** for det fester seg i hukommelsen!`,
    },
    {
      id: 'fransk-1-16-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Ordgrupper',
      problem: `Lag ordgrupper for disse temaene:
a) Farger (3 ord)
b) Familie (3 ord)
c) Mat (3 ord)`,
      solution: `a) **Farger:** rouge (rod), bleu (bla), vert (gronn)
b) **Familie:** la mere (mora), le pere (faren), le frere (broren)
c) **Mat:** le pain (brodet), le fromage (osten), la pomme (eplet)

A laere ord i grupper gjor det lettere a huske dem!`,
    },
    {
      id: 'fransk-1-16-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble ordlaeringsstrategien til beskrivelsen.',
        subTasks: [
          { label: 'a', task: 'Du skriver ord pa lapper med fransk pa en side og norsk pa den andre.', solution: 'Flashcards' },
          { label: 'b', task: 'Du laerer alle matord sammen: pain, fromage, pomme.', solution: 'Ordgrupper' },
          { label: 'c', task: 'Du tenker pa en strand nar du ser "la plage".', solution: 'Assosiasjoner' },
          { label: 'd', task: 'Du over de samme ordene i dag, i morgen og neste uke.', solution: 'Repetisjon' },
        ],
        solution: 'a) Flashcards, b) Ordgrupper, c) Assosiasjoner, d) Repetisjon',
        hints: ['Flashcards = kort med sporsmal/svar', 'Assosiasjoner = koblinger til bilder/minner'],
      },
    },
    {
      id: 'fransk-1-16-4-text-3',
      type: 'text',
      content: `## Kommunikasjonsstrategier

Nar du snakker eller skriver fransk og sitter fast, kan du bruke disse strategiene:

| Strategi | Beskrivelse | Eksempel |
|----------|-------------|----------|
| **Omskriving** | Forklar med andre ord | "en hund" -> "et dyr som bjeffer" |
| **Kroppssprak** | Bruk gester og mimikk | Pek, vis med hendene |
| **Be om hjelp** | Spor pa fransk | "Comment dit-on ... ?" |
| **Bruk cognater** | Prov ord som ligner norsk/engelsk | "telefon" -> telephone |
| **Forenkle** | Bruk enklere ord | I stedet for avanserte uttrykk, bruk enkle setninger |

**Cognater** (ord som ligner mellom sprak) er svart nyttige:

| Norsk/Engelsk | Fransk |
|---------------|--------|
| telefon | le telephone |
| restaurant | le restaurant |
| familie | la famille |
| musikk | la musique |
| informasjon | l'information |`,
    },
    {
      id: 'fransk-1-16-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Cognater og omskriving',
      problem: `Prov disse strategiene:
a) Gjett det franske ordet for "garage" (cognat)
b) Omskriv "sykehus" pa fransk uten a bruke ordet "hopital"
c) Hvordan ber du om hjelp til a si "blyant" pa fransk?`,
      solution: `a) **le garage** - Det ligner pa norsk! (cognat)
b) "C'est un endroit ou on aide les malades." (Det er et sted der man hjelper syke.)
c) "Comment dit-on 'blyant' en francais ?" (Hvordan sier man "blyant" pa fransk?)`,
    },
    {
      id: 'fransk-1-16-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjett det franske ordet basert pa cognater (likhet med norsk/engelsk).',
        subTasks: [
          { label: 'a', task: 'nasjon', solution: 'la nation' },
          { label: 'b', task: 'problem', solution: 'le probleme' },
          { label: 'c', task: 'situasjon', solution: 'la situation' },
          { label: 'd', task: 'natur', solution: 'la nature' },
        ],
        solution: 'a) la nation, b) le probleme, c) la situation, d) la nature',
        hints: ['Mange franske ord ligner pa norske og engelske ord'],
      },
    },
    // --- Samleoppgave ---
    {
      id: 'fransk-1-16-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'fransk-1-16-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over dine egne laeringsstrategier.',
        subTasks: [
          { label: 'a', task: 'Hvilken ordlaeringsstrategi tror du passer best for deg? Forklar hvorfor.', solution: 'Personlig svar. Eksempel: Flashcards fordi jeg liker a teste meg selv.' },
          { label: 'b', task: 'Skriv tre franske cognater du kjenner fra for.', solution: 'Eksempler: telephone, restaurant, musique, famille, information' },
          { label: 'c', task: 'Omskriv ordet "laerer" pa fransk uten a bruke "professeur".', solution: "C'est une personne qui travaille a l'ecole. Il/Elle aide les eleves a apprendre." },
        ],
        solution: "a) Personlig svar. b) Eksempler: telephone, restaurant, musique. c) C'est une personne qui travaille a l'ecole.",
        hints: ['Det finnes ikke ett riktig svar - velg det som passer for deg'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const FRANSK_1_CHAPTERS_14_16: TextbookChapter[] = [
  CHAPTER_FRANSK_1_14_1,
  CHAPTER_FRANSK_1_14_2,
  CHAPTER_FRANSK_1_14_3,
  CHAPTER_FRANSK_1_14_4,
  CHAPTER_FRANSK_1_15_1,
  CHAPTER_FRANSK_1_15_2,
  CHAPTER_FRANSK_1_15_3,
  CHAPTER_FRANSK_1_15_4,
  CHAPTER_FRANSK_1_16_1,
  CHAPTER_FRANSK_1_16_2,
  CHAPTER_FRANSK_1_16_3,
  CHAPTER_FRANSK_1_16_4,
];
