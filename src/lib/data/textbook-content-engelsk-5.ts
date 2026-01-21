/**
 * Textbook chapters for English 5th grade (5. klasse)
 * Content adapted for Norwegian 10-11 year olds learning English
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 1: READING STORIES, BUILDING VOCABULARY
// ============================================================================

export const CHAPTER_ENGELSK_5_1_1: TextbookChapter = {
  id: 'engelsk-5-1-1',
  courseId: 'engelsk-5',
  chapterNumber: '1.1',
  title: 'Reading Stories',
  description: 'Learn to read and understand simple English stories.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['read and understand simple texts in English'],
  content: [
    {
      id: 'eng-5-1-1-intro',
      type: 'text',
      content: `## Reading Stories in English

Reading stories in English is fun and helps you learn new words! When you read, you travel to new places and meet interesting characters.

**Why read in English?**
- You learn new words
- You see how sentences are built
- You have fun!`,
    },
    {
      id: 'eng-5-1-1-def-story-parts',
      type: 'definition',
      title: 'Parts of a Story',
      content: `Every story has three main parts:

**Beginning** - We meet the characters and learn where the story takes place.

**Middle** - Something happens! There is often a problem to solve.

**End** - The problem is solved and the story finishes.`,
    },
    {
      id: 'eng-5-1-1-tips',
      type: 'text',
      content: `## Tips for Reading

**Before you read:**
- Look at the pictures
- Read the title
- Think: What might happen?

**While you read:**
- Read slowly
- Look at the pictures for help
- Don't stop at every new word

**After you read:**
- Think: What happened?
- What was your favorite part?`,
    },
    {
      id: 'eng-5-1-1-def-context',
      type: 'definition',
      title: 'Using Context',
      content: `**Context** means the words around a word you don't know. You can often guess what a word means by looking at the other words!

**Example:**
"The cat was very hungry. It ate all the food quickly."

If you don't know "hungry", you can guess: The cat ate all the food, so "hungry" must mean it wanted food!`,
    },
    {
      id: 'eng-5-1-1-example-1',
      type: 'example',
      title: 'Example: Understanding a Short Story',
      problem: 'Read this short text:\n\n"Tom had a little dog called Max. Max liked to run and play in the garden. One day, Max found a big bone. He was so happy!"',
      solution: `**Who is in the story?** Tom and his dog Max

**Where does it happen?** In the garden

**What happens?** Max finds a big bone and is happy

**New words you might learn:**
- garden = hage
- bone = bein
- found = fant`,
    },
    {
      id: 'eng-5-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'What are the three parts of a story?',
        solution: 'Beginning, middle, and end.',
        hints: ['Think about when things happen in a story'],
      },
    },
    {
      id: 'eng-5-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Read this sentence and guess what "tired" means: "After running all day, the boy was very tired and went to bed early."',
        solution: '"Tired" means trøtt. The boy ran all day and went to bed early, so he must have been sleepy and needed rest.',
        hints: ['What would you feel like after running all day?'],
      },
    },
    {
      id: 'eng-5-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-5-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Read this short story and answer the questions:\n\n"Sara woke up early on Saturday. Today was her birthday! She ran downstairs. Her family was waiting with a big cake and presents. Sara smiled and said thank you."',
        subTasks: [
          { label: 'a', task: 'What day is it?', solution: 'Saturday' },
          { label: 'b', task: 'Why is Sara happy?', solution: 'It is her birthday and her family has cake and presents.' },
          { label: 'c', task: 'What did Sara say?', solution: 'Thank you' },
        ],
        solution: 'See sub-tasks',
        hints: ['Read the story carefully and find the answers'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_5_1_2: TextbookChapter = {
  id: 'engelsk-5-1-2',
  courseId: 'engelsk-5',
  chapterNumber: '1.2',
  title: 'Building Vocabulary - Everyday Words',
  description: 'Learn common English words for everyday life.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['use simple vocabulary about familiar topics'],
  content: [
    {
      id: 'eng-5-1-2-intro',
      type: 'text',
      content: `## Everyday Words in English

Learning everyday words helps you understand and speak English better. Let's learn words about home, school, and things around us!`,
    },
    {
      id: 'eng-5-1-2-def-home',
      type: 'definition',
      title: 'Words at Home',
      content: `**Rooms in the house:**
- kitchen (kjøkken)
- bedroom (soverom)
- bathroom (bad)
- living room (stue)

**Things at home:**
- table (bord)
- chair (stol)
- bed (seng)
- window (vindu)
- door (dør)`,
    },
    {
      id: 'eng-5-1-2-def-school',
      type: 'definition',
      title: 'Words at School',
      content: `**People at school:**
- teacher (lærer)
- student/pupil (elev)
- friend (venn)

**Things at school:**
- book (bok)
- pencil (blyant)
- desk (pult)
- blackboard (tavle)
- classroom (klasserom)`,
    },
    {
      id: 'eng-5-1-2-def-numbers',
      type: 'definition',
      title: 'Numbers 1-20',
      content: `**1-10:**
one, two, three, four, five, six, seven, eight, nine, ten

**11-20:**
eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty`,
    },
    {
      id: 'eng-5-1-2-def-colors',
      type: 'definition',
      title: 'Colors',
      content: `**Common colors:**
- red (rød)
- blue (blå)
- green (grønn)
- yellow (gul)
- orange (oransje)
- purple (lilla)
- black (svart)
- white (hvit)
- brown (brun)
- pink (rosa)`,
    },
    {
      id: 'eng-5-1-2-tip',
      type: 'tip',
      title: 'How to Learn New Words',
      content: `**Good ways to remember words:**
- Write the word and draw a picture
- Say the word out loud
- Use the word in a sentence
- Make word cards (flashcards)
- Practice a little bit every day!`,
    },
    {
      id: 'eng-5-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match the English word to the Norwegian word:',
        subTasks: [
          { label: 'a', task: 'kitchen', solution: 'kjøkken' },
          { label: 'b', task: 'teacher', solution: 'lærer' },
          { label: 'c', task: 'window', solution: 'vindu' },
          { label: 'd', task: 'book', solution: 'bok' },
        ],
        solution: 'See sub-tasks',
        hints: ['Think about where you see these things'],
      },
    },
    {
      id: 'eng-5-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Write the numbers in English:',
        subTasks: [
          { label: 'a', task: '7', solution: 'seven' },
          { label: 'b', task: '12', solution: 'twelve' },
          { label: 'c', task: '15', solution: 'fifteen' },
          { label: 'd', task: '20', solution: 'twenty' },
        ],
        solution: 'See sub-tasks',
        hints: ['Remember: thirteen, fourteen, fifteen...'],
      },
    },
    {
      id: 'eng-5-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-5-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fill in the correct color:\n"The sun is _____. The sky is _____. Grass is _____."',
        solution: 'The sun is yellow. The sky is blue. Grass is green.',
        hints: ['Think about what colors you see in nature'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_5_1_3: TextbookChapter = {
  id: 'engelsk-5-1-3',
  courseId: 'engelsk-5',
  chapterNumber: '1.3',
  title: 'Building Vocabulary - Family and Friends',
  description: 'Learn words about family members and describing people.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['talk about family and people you know'],
  content: [
    {
      id: 'eng-5-1-3-intro',
      type: 'text',
      content: `## Family and Friends

Let's learn how to talk about the people in your life! Family words and describing words are very useful.`,
    },
    {
      id: 'eng-5-1-3-def-family',
      type: 'definition',
      title: 'Family Words',
      content: `**Close family:**
- mother/mom (mor/mamma)
- father/dad (far/pappa)
- sister (søster)
- brother (bror)
- parents (foreldre)

**Extended family:**
- grandmother/grandma (bestemor)
- grandfather/grandpa (bestefar)
- aunt (tante)
- uncle (onkel)
- cousin (søskenbarn)`,
    },
    {
      id: 'eng-5-1-3-def-describing',
      type: 'definition',
      title: 'Describing People',
      content: `**How people look:**
- tall (høy)
- short (kort/lav)
- young (ung)
- old (gammel)

**Hair:**
- long hair (langt hår)
- short hair (kort hår)
- brown hair (brunt hår)
- blonde hair (blondt hår)

**Personality:**
- kind (snill)
- funny (morsom)
- smart (smart/flink)
- friendly (vennlig)`,
    },
    {
      id: 'eng-5-1-3-example-1',
      type: 'example',
      title: 'Example: Describing Your Family',
      problem: 'How do you describe your family?',
      solution: `**Example sentences:**
- "I have one sister and one brother."
- "My mom has brown hair."
- "My grandpa is tall and kind."
- "My friend is funny."

**Template:**
"I have _____ (number) _____ (family member).
My _____ (family member) is _____ (describing word)."`,
    },
    {
      id: 'eng-5-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'What do we call these family members in English?',
        subTasks: [
          { label: 'a', task: 'mamma', solution: 'mother/mom' },
          { label: 'b', task: 'bestefar', solution: 'grandfather/grandpa' },
          { label: 'c', task: 'søster', solution: 'sister' },
          { label: 'd', task: 'onkel', solution: 'uncle' },
        ],
        solution: 'See sub-tasks',
        hints: ['Think about your own family'],
      },
    },
    {
      id: 'eng-5-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write three sentences about your family or a friend. Use describing words!',
        solution: 'Example: "My brother is tall. He has brown hair. He is funny."',
        hints: ['Use words like tall, short, kind, funny, young, old'],
      },
    },
  ],
};

// ============================================================================
// CHAPTER 2: GRAMMAR - PRESENT TENSE, PAST TENSE, PRONOUNS AND ADJECTIVES
// ============================================================================

export const CHAPTER_ENGELSK_5_2_1: TextbookChapter = {
  id: 'engelsk-5-2-1',
  courseId: 'engelsk-5',
  chapterNumber: '2.1',
  title: 'Present Tense',
  description: 'Learn to talk about things that happen now or regularly.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['use simple verb forms in English'],
  content: [
    {
      id: 'eng-5-2-1-intro',
      type: 'text',
      content: `## Present Tense - What Happens Now

The present tense tells us about things that happen now or things that happen regularly (every day, every week).`,
    },
    {
      id: 'eng-5-2-1-def-present',
      type: 'definition',
      title: 'Present Tense',
      content: `**Present tense** tells us:
- What happens NOW: "I eat an apple."
- What happens REGULARLY: "I eat breakfast every morning."

**When to use:**
- "I play football every Saturday." (regular)
- "The sun shines." (right now)
- "Birds fly." (always true)`,
    },
    {
      id: 'eng-5-2-1-def-rules',
      type: 'definition',
      title: 'The S-Rule',
      content: `**Important rule:** When we use he, she, or it, we add **-s** to the verb!

**I, you, we, they** - no change:
- I play
- You play
- We play
- They play

**He, she, it** - add -s:
- He play**s**
- She play**s**
- It play**s**`,
    },
    {
      id: 'eng-5-2-1-example-1',
      type: 'example',
      title: 'Example: Using the S-Rule',
      problem: 'Fill in the verb "like":\n"I _____ ice cream. My sister _____ ice cream too."',
      solution: `"I **like** ice cream. My sister **likes** ice cream too."

**Why?**
- "I" - no change, so "like"
- "My sister" = "she" - add s, so "likes"`,
    },
    {
      id: 'eng-5-2-1-warning',
      type: 'warning',
      title: 'Watch Out!',
      content: `Some verbs change more when we add -s:

- go → go**es** (He goes to school)
- do → do**es** (She does homework)
- watch → watch**es** (He watches TV)
- have → **has** (She has a dog)

If the verb ends in -o, -s, -sh, -ch, or -x, add **-es**!`,
    },
    {
      id: 'eng-5-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Choose the correct verb:',
        subTasks: [
          { label: 'a', task: 'I (like/likes) pizza.', solution: 'like' },
          { label: 'b', task: 'She (play/plays) football.', solution: 'plays' },
          { label: 'c', task: 'They (read/reads) books.', solution: 'read' },
          { label: 'd', task: 'My dog (run/runs) fast.', solution: 'runs' },
        ],
        solution: 'See sub-tasks',
        hints: ['Remember: he, she, it = add -s'],
      },
    },
    {
      id: 'eng-5-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write three sentences about what you do every day. Use present tense.',
        solution: 'Example: "I wake up at seven. I eat breakfast. I go to school."',
        hints: ['Think about your daily routine'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_5_2_2: TextbookChapter = {
  id: 'engelsk-5-2-2',
  courseId: 'engelsk-5',
  chapterNumber: '2.2',
  title: 'Past Tense',
  description: 'Learn to talk about things that happened before.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['use simple verb forms in English'],
  content: [
    {
      id: 'eng-5-2-2-intro',
      type: 'text',
      content: `## Past Tense - What Happened Before

The past tense tells us about things that already happened - yesterday, last week, or a long time ago.`,
    },
    {
      id: 'eng-5-2-2-def-past',
      type: 'definition',
      title: 'Past Tense - Regular Verbs',
      content: `For most verbs, we add **-ed** to make the past tense:

- play → play**ed** (I played yesterday)
- walk → walk**ed** (She walked to school)
- watch → watch**ed** (We watched a movie)
- like → lik**ed** (He liked the food)

**Note:** If the verb ends in -e, just add -d:
- like → liked
- dance → danced`,
    },
    {
      id: 'eng-5-2-2-def-irregular',
      type: 'definition',
      title: 'Irregular Verbs',
      content: `Some common verbs don't follow the -ed rule. You need to learn them!

**Common irregular verbs:**
| Now | Past |
|-----|------|
| go | went |
| see | saw |
| eat | ate |
| have | had |
| do | did |
| make | made |
| come | came |
| say | said |
| take | took |
| get | got |`,
    },
    {
      id: 'eng-5-2-2-example-1',
      type: 'example',
      title: 'Example: Past Tense Sentences',
      problem: 'Change these sentences to past tense:\n1. "I play with my friends."\n2. "She goes to the store."',
      solution: `1. "I **played** with my friends." (play + ed)
2. "She **went** to the store." (go → went, irregular)`,
    },
    {
      id: 'eng-5-2-2-tip',
      type: 'tip',
      title: 'Time Words for Past',
      content: `These words often go with past tense:
- yesterday
- last week/month/year
- two days ago
- this morning
- when I was little

**Example:** "Yesterday, I **went** to the park."`,
    },
    {
      id: 'eng-5-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Write the past tense of these verbs:',
        subTasks: [
          { label: 'a', task: 'walk', solution: 'walked' },
          { label: 'b', task: 'go', solution: 'went' },
          { label: 'c', task: 'play', solution: 'played' },
          { label: 'd', task: 'see', solution: 'saw' },
        ],
        solution: 'See sub-tasks',
        hints: ['Some are regular (+ed), some are irregular'],
      },
    },
    {
      id: 'eng-5-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fill in the correct past tense verb:\n"Yesterday, I (go) _____ to school. I (see) _____ my friend. We (play) _____ together."',
        solution: 'Yesterday, I went to school. I saw my friend. We played together.',
        hints: ['go and see are irregular, play is regular'],
      },
    },
    {
      id: 'eng-5-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write three sentences about what you did last weekend. Use past tense.',
        solution: 'Example: "Last weekend, I visited my grandma. I ate cake. I played games with my cousin."',
        hints: ['Use time words like "last weekend"'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_5_2_3: TextbookChapter = {
  id: 'engelsk-5-2-3',
  courseId: 'engelsk-5',
  chapterNumber: '2.3',
  title: 'Pronouns',
  description: 'Learn to use I, you, he, she, it, we, and they.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['use basic grammar correctly'],
  content: [
    {
      id: 'eng-5-2-3-intro',
      type: 'text',
      content: `## Pronouns - Short Words for People and Things

Pronouns are small words we use instead of names. They make our sentences shorter and easier!

Instead of: "Maria likes Maria's dog."
We say: "Maria likes her dog." or "She likes her dog."`,
    },
    {
      id: 'eng-5-2-3-def-subject',
      type: 'definition',
      title: 'Subject Pronouns',
      content: `**Subject pronouns** are used when the person DOES something:

| English | Norwegian |
|---------|-----------|
| I | jeg |
| you | du |
| he | han |
| she | hun |
| it | den/det |
| we | vi |
| they | de |

**Examples:**
- **I** play football.
- **She** reads a book.
- **They** go to school.`,
    },
    {
      id: 'eng-5-2-3-def-object',
      type: 'definition',
      title: 'Object Pronouns',
      content: `**Object pronouns** are used when something happens TO the person:

| Subject | Object |
|---------|--------|
| I | me |
| you | you |
| he | him |
| she | her |
| it | it |
| we | us |
| they | them |

**Examples:**
- Can you help **me**?
- I like **her**.
- The teacher talked to **us**.`,
    },
    {
      id: 'eng-5-2-3-example-1',
      type: 'example',
      title: 'Example: Subject or Object?',
      problem: 'Choose the right pronoun: "Tom is my friend. _____ plays with _____ every day."',
      solution: `"Tom is my friend. **He** plays with **me** every day."

**Why?**
- "He" - Tom does the action (playing), so subject pronoun
- "me" - I receive the action (being played with), so object pronoun`,
    },
    {
      id: 'eng-5-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Replace the underlined words with a pronoun:',
        subTasks: [
          { label: 'a', task: 'MARIA is my sister.', solution: 'She' },
          { label: 'b', task: 'I gave the book to TOM.', solution: 'him' },
          { label: 'c', task: 'THE CHILDREN are playing.', solution: 'They' },
        ],
        solution: 'See sub-tasks',
        hints: ['Is the person doing something (subject) or receiving something (object)?'],
      },
    },
    {
      id: 'eng-5-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fill in the correct pronoun (I, me, he, him, she, her, they, them):',
        subTasks: [
          { label: 'a', task: 'Anna is nice. I like _____.', solution: 'her' },
          { label: 'b', task: 'My brothers are tall. _____ play basketball.', solution: 'They' },
          { label: 'c', task: 'Can you help _____? (me or I)', solution: 'me' },
        ],
        solution: 'See sub-tasks',
        hints: ['Object pronouns come after verbs like "help", "like", "see"'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_5_2_4: TextbookChapter = {
  id: 'engelsk-5-2-4',
  courseId: 'engelsk-5',
  chapterNumber: '2.4',
  title: 'Adjectives',
  description: 'Learn words that describe things and people.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['use describing words in English'],
  content: [
    {
      id: 'eng-5-2-4-intro',
      type: 'text',
      content: `## Adjectives - Describing Words

Adjectives are words that describe nouns (people, animals, things). They tell us more about something!

"A dog" → "A **big, brown** dog"
"The house" → "The **old, red** house"`,
    },
    {
      id: 'eng-5-2-4-def-adjectives',
      type: 'definition',
      title: 'Common Adjectives',
      content: `**Size:**
- big, small, tall, short, long

**Colors:**
- red, blue, green, yellow, black, white

**Feelings:**
- happy, sad, angry, scared, tired

**Other:**
- old, new, fast, slow, hot, cold, good, bad, nice, beautiful`,
    },
    {
      id: 'eng-5-2-4-def-placement',
      type: 'definition',
      title: 'Where to Put Adjectives',
      content: `Adjectives come **BEFORE** the noun in English:

- A **red** apple (not "an apple red")
- The **big** house
- My **new** shoes
- A **happy** girl

**Or after "is/am/are":**
- The apple is **red**.
- I am **happy**.
- They are **tall**.`,
    },
    {
      id: 'eng-5-2-4-def-comparing',
      type: 'definition',
      title: 'Comparing with Adjectives',
      content: `When we compare two things, we often add **-er**:

| Adjective | Comparing |
|-----------|-----------|
| tall | tall**er** |
| old | old**er** |
| fast | fast**er** |
| small | small**er** |

**Example:**
- My brother is tall**er** than me.
- This car is fast**er** than that car.`,
    },
    {
      id: 'eng-5-2-4-example-1',
      type: 'example',
      title: 'Example: Using Adjectives',
      problem: 'Describe this picture: A cat sleeping on a sofa.',
      solution: `You can add adjectives:
- "A **small, orange** cat is sleeping on a **big, soft** sofa."

Or use "is":
- "The cat is **cute**."
- "The sofa is **comfortable**."`,
    },
    {
      id: 'eng-5-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Choose an adjective to complete the sentence:',
        subTasks: [
          { label: 'a', task: 'The elephant is very _____. (big/small)', solution: 'big' },
          { label: 'b', task: 'Ice cream is _____. (hot/cold)', solution: 'cold' },
          { label: 'c', task: 'The movie was very _____. (funny/angry)', solution: 'funny' },
        ],
        solution: 'See sub-tasks',
        hints: ['Think about what makes sense'],
      },
    },
    {
      id: 'eng-5-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fill in the comparing form:',
        subTasks: [
          { label: 'a', task: 'A cheetah is _____ (fast) than a dog.', solution: 'faster' },
          { label: 'b', task: 'My dad is _____ (old) than my mom.', solution: 'older' },
          { label: 'c', task: 'Winter is _____ (cold) than summer.', solution: 'colder' },
        ],
        solution: 'See sub-tasks',
        hints: ['Add -er to compare two things'],
      },
    },
    {
      id: 'eng-5-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-5-2-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Describe your room using at least 4 adjectives.',
        solution: 'Example: "My room is small but cozy. I have a blue bed and a big window. My bookshelf is tall."',
        hints: ['Think about colors, size, and how things feel'],
      },
    },
  ],
};

// ============================================================================
// CHAPTER 3: WRITING - SENTENCES AND ABOUT YOURSELF
// ============================================================================

export const CHAPTER_ENGELSK_5_3_1: TextbookChapter = {
  id: 'engelsk-5-3-1',
  courseId: 'engelsk-5',
  chapterNumber: '3.1',
  title: 'Writing Sentences',
  description: 'Learn to write complete sentences in English.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['write simple sentences in English'],
  content: [
    {
      id: 'eng-5-3-1-intro',
      type: 'text',
      content: `## Writing Good Sentences

A sentence is a group of words that tells a complete thought. Every sentence needs some important parts!`,
    },
    {
      id: 'eng-5-3-1-def-sentence',
      type: 'definition',
      title: 'What is a Sentence?',
      content: `A complete sentence needs:

**1. A subject** - WHO or WHAT the sentence is about
**2. A verb** - What the subject DOES
**3. Capital letter** at the beginning
**4. Punctuation** at the end (. ? !)

**Example:**
"**The cat** (subject) **sleeps** (verb)." ✓
"Sleeps on the sofa." ✗ (no subject)
"The big cat." ✗ (no verb)`,
    },
    {
      id: 'eng-5-3-1-def-types',
      type: 'definition',
      title: 'Types of Sentences',
      content: `**Statement** - tells something (ends with .)
- "I like pizza."
- "The sun is shining."

**Question** - asks something (ends with ?)
- "Do you like pizza?"
- "What time is it?"

**Exclamation** - shows strong feelings (ends with !)
- "That's amazing!"
- "Watch out!"`,
    },
    {
      id: 'eng-5-3-1-tip',
      type: 'tip',
      title: 'Making Sentences Longer',
      content: `You can make sentences more interesting by adding:

**When:** "I play football **on Saturdays**."
**Where:** "I play football **in the park**."
**How:** "I play football **with my friends**."
**Why:** "I play football **because it's fun**."`,
    },
    {
      id: 'eng-5-3-1-example-1',
      type: 'example',
      title: 'Example: Building a Sentence',
      problem: 'Make a complete sentence about: dog, park, run',
      solution: `**Simple sentence:**
"The dog runs in the park."

**More detailed:**
"My brown dog runs happily in the big park."

**Both are correct! The second one has more information.**`,
    },
    {
      id: 'eng-5-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Is this a complete sentence? Write yes or no.',
        subTasks: [
          { label: 'a', task: 'The bird sings.', solution: 'yes' },
          { label: 'b', task: 'Running very fast.', solution: 'no (missing subject)' },
          { label: 'c', task: 'My best friend.', solution: 'no (missing verb)' },
          { label: 'd', task: 'She eats breakfast every morning.', solution: 'yes' },
        ],
        solution: 'See sub-tasks',
        hints: ['Check: Does it have a subject AND a verb?'],
      },
    },
    {
      id: 'eng-5-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Put these words in order to make a sentence:',
        subTasks: [
          { label: 'a', task: 'plays / my sister / tennis', solution: 'My sister plays tennis.' },
          { label: 'b', task: 'are / happy / we / today', solution: 'We are happy today.' },
          { label: 'c', task: 'likes / the cat / fish / to eat', solution: 'The cat likes to eat fish.' },
        ],
        solution: 'See sub-tasks',
        hints: ['Start with the subject (who/what)'],
      },
    },
    {
      id: 'eng-5-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-5-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Make the sentence longer by adding when, where, or how:\n"I read."',
        solution: 'Examples: "I read books every night." / "I read in my room." / "I read quietly."',
        hints: ['Add information about when, where, or how you read'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_5_3_2: TextbookChapter = {
  id: 'engelsk-5-3-2',
  courseId: 'engelsk-5',
  chapterNumber: '3.2',
  title: 'Writing About Yourself',
  description: 'Learn to write about yourself and your life.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['write personal texts in English'],
  content: [
    {
      id: 'eng-5-3-2-intro',
      type: 'text',
      content: `## Writing About Yourself

When you meet new people, you often want to tell them about yourself. Let's learn how to do this in English!`,
    },
    {
      id: 'eng-5-3-2-def-intro-yourself',
      type: 'definition',
      title: 'Introducing Yourself',
      content: `**Basic information:**
- My name is _____.
- I am _____ years old.
- I live in _____.
- I am from _____.

**Example:**
"My name is Emma. I am 10 years old. I live in Oslo. I am from Norway."`,
    },
    {
      id: 'eng-5-3-2-def-likes',
      type: 'definition',
      title: 'Talking About Likes and Dislikes',
      content: `**Things you like:**
- I like _____. (I like football.)
- I love _____. (I love chocolate!)
- My favorite _____ is _____. (My favorite color is blue.)

**Things you don't like:**
- I don't like _____. (I don't like spiders.)
- I hate _____. (strong feeling!)`,
    },
    {
      id: 'eng-5-3-2-def-hobbies',
      type: 'definition',
      title: 'Talking About Hobbies',
      content: `**Hobbies = things you do for fun**

"In my free time, I like to _____."
"My hobbies are _____ and _____."

**Common hobbies:**
- playing football/video games
- reading books
- watching TV/movies
- drawing/painting
- swimming
- playing music`,
    },
    {
      id: 'eng-5-3-2-example-1',
      type: 'example',
      title: 'Example: A Short Text About Yourself',
      problem: 'Write a short introduction of yourself.',
      solution: `**Example text:**

"Hi! My name is Oliver. I am 10 years old and I live in Bergen, Norway.

I have one sister and one brother. My sister is older than me.

I like football and video games. My favorite subject at school is math. I don't like getting up early!

In my free time, I play football with my friends."`,
    },
    {
      id: 'eng-5-3-2-tip',
      type: 'tip',
      title: 'Making Your Text Interesting',
      content: `**Add details and examples:**
- Not just: "I like sports."
- Better: "I like sports, especially football. I play football every Saturday."

**Ask yourself:**
- Why do I like this?
- When do I do this?
- Who do I do this with?`,
    },
    {
      id: 'eng-5-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Complete these sentences about yourself:',
        subTasks: [
          { label: 'a', task: 'My name is _____.', solution: '(Your name)' },
          { label: 'b', task: 'I am _____ years old.', solution: '(Your age)' },
          { label: 'c', task: 'My favorite food is _____.', solution: '(Your favorite food)' },
        ],
        solution: 'Write true information about yourself!',
        hints: ['Think about your own life'],
      },
    },
    {
      id: 'eng-5-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write three sentences about your hobbies. What do you like to do? When? With who?',
        solution: 'Example: "I like to play video games. I play every day after school. Sometimes I play with my brother."',
        hints: ['Use "I like to..." or "In my free time..."'],
      },
    },
    {
      id: 'eng-5-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-5-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a text about yourself (5-8 sentences). Include: your name and age, your family, your hobbies, what you like and don\'t like.',
        solution: 'Use the example text as a model. Remember to include all the required information!',
        hints: ['Start with basic info, then add more details'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_5_3_3: TextbookChapter = {
  id: 'engelsk-5-3-3',
  courseId: 'engelsk-5',
  chapterNumber: '3.3',
  title: 'Capital Letters and Punctuation',
  description: 'Learn when to use capital letters and punctuation marks.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['use basic punctuation in English'],
  content: [
    {
      id: 'eng-5-3-3-intro',
      type: 'text',
      content: `## Capital Letters and Punctuation

Capital letters and punctuation help readers understand your writing. Let's learn the rules!`,
    },
    {
      id: 'eng-5-3-3-def-capitals',
      type: 'definition',
      title: 'When to Use Capital Letters',
      content: `**Use a capital letter for:**

**1. Beginning of a sentence**
- **T**he cat is sleeping.

**2. The word "I"**
- Yesterday **I** went to school.

**3. Names of people**
- **M**aria, **T**om, **O**liver

**4. Names of places**
- **N**orway, **O**slo, **E**urope

**5. Days and months**
- **M**onday, **T**uesday, **J**anuary

**6. Titles**
- **M**r., **M**rs., **H**arry **P**otter`,
    },
    {
      id: 'eng-5-3-3-def-punctuation',
      type: 'definition',
      title: 'Punctuation Marks',
      content: `**Period/Full stop (.)** - End of a statement
- I like ice cream**.**

**Question mark (?)** - End of a question
- Do you like ice cream**?**

**Exclamation mark (!)** - Strong feeling or command
- That's amazing**!**
- Stop**!**

**Comma (,)** - Short pause, lists
- I have a dog**,** a cat**,** and a fish.`,
    },
    {
      id: 'eng-5-3-3-warning',
      type: 'warning',
      title: 'Common Mistakes',
      content: `**In English, these do NOT have capital letters:**
- days of the week in Norwegian: mandag, tirsdag
- months in Norwegian: januar, februar
- BUT in English, they DO: Monday, January

**"I" is ALWAYS capital in English!**
- Norwegian: "i dag gikk jeg..."
- English: "Today **I** went..."`,
    },
    {
      id: 'eng-5-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-3-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Fix the capital letters in these sentences:',
        subTasks: [
          { label: 'a', task: 'my name is lisa.', solution: 'My name is Lisa.' },
          { label: 'b', task: 'i live in norway.', solution: 'I live in Norway.' },
          { label: 'c', task: 'we have english on monday.', solution: 'We have English on Monday.' },
        ],
        solution: 'See sub-tasks',
        hints: ['Check: beginning of sentence, I, names, places, days'],
      },
    },
    {
      id: 'eng-5-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Add the correct punctuation (. ? !) at the end:',
        subTasks: [
          { label: 'a', task: 'What is your name', solution: 'What is your name?' },
          { label: 'b', task: 'I love pizza', solution: 'I love pizza. (or I love pizza!)' },
          { label: 'c', task: 'Watch out', solution: 'Watch out!' },
          { label: 'd', task: 'She goes to school every day', solution: 'She goes to school every day.' },
        ],
        solution: 'See sub-tasks',
        hints: ['Questions end with ?, statements with ., strong feelings with !'],
      },
    },
  ],
};

// ============================================================================
// CHAPTER 4: SPEAKING - CONVERSATIONS AND ENGLISH-SPEAKING COUNTRIES
// ============================================================================

export const CHAPTER_ENGELSK_5_4_1: TextbookChapter = {
  id: 'engelsk-5-4-1',
  courseId: 'engelsk-5',
  chapterNumber: '4.1',
  title: 'Everyday Conversations',
  description: 'Learn useful phrases for talking in English.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['participate in simple conversations in English'],
  content: [
    {
      id: 'eng-5-4-1-intro',
      type: 'text',
      content: `## Everyday Conversations

When you meet people, you need to know how to greet them and have simple conversations. Let's learn some useful phrases!`,
    },
    {
      id: 'eng-5-4-1-def-greetings',
      type: 'definition',
      title: 'Greetings',
      content: `**Saying hello:**
- Hello! / Hi!
- Good morning! (morning)
- Good afternoon! (afternoon)
- Good evening! (evening)

**Asking how someone is:**
- How are you?
- How are you doing?
- Are you OK?

**Answering:**
- I'm fine, thank you.
- I'm good, thanks!
- I'm OK.
- Not bad!`,
    },
    {
      id: 'eng-5-4-1-def-goodbye',
      type: 'definition',
      title: 'Saying Goodbye',
      content: `**Casual:**
- Bye!
- See you!
- See you later!
- See you tomorrow!

**More formal:**
- Goodbye!
- Have a nice day!
- Take care!`,
    },
    {
      id: 'eng-5-4-1-def-polite',
      type: 'definition',
      title: 'Polite Words',
      content: `**Being polite is important!**

- Please (vær så snill)
- Thank you / Thanks (takk)
- You're welcome (bare hyggelig)
- Sorry (unnskyld)
- Excuse me (unnskyld, for å få oppmerksomhet)

**Examples:**
- "Can I have some water, **please**?"
- "**Thank you** for helping me!"
- "**Sorry**, I didn't hear you."`,
    },
    {
      id: 'eng-5-4-1-def-asking',
      type: 'definition',
      title: 'Asking Questions',
      content: `**Useful questions:**
- What is your name?
- How old are you?
- Where do you live?
- What do you like to do?
- Can you help me?
- How do you say _____ in English?

**When you don't understand:**
- Can you repeat that, please?
- I don't understand.
- Can you speak more slowly?`,
    },
    {
      id: 'eng-5-4-1-example-1',
      type: 'example',
      title: 'Example: A Simple Conversation',
      problem: 'What does a conversation between two new friends look like?',
      solution: `**A: Hello! My name is Tom.**
**B: Hi Tom! I'm Sara. Nice to meet you!**
**A: Nice to meet you too! How are you?**
**B: I'm good, thanks! How are you?**
**A: I'm fine. Do you like football?**
**B: Yes, I love football!**
**A: Me too! See you later!**
**B: Bye!**`,
    },
    {
      id: 'eng-5-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'What do you say when...',
        subTasks: [
          { label: 'a', task: 'you meet someone for the first time?', solution: 'Hello! / Hi! / Nice to meet you!' },
          { label: 'b', task: 'someone gives you a gift?', solution: 'Thank you!' },
          { label: 'c', task: 'you want something politely?', solution: 'Please (Can I have..., please?)' },
          { label: 'd', task: 'you leave your friend?', solution: 'Bye! / See you later!' },
        ],
        solution: 'See sub-tasks',
        hints: ['Think about polite words'],
      },
    },
    {
      id: 'eng-5-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Complete the conversation:\nA: Hello! _____?\nB: I\'m fine, thank you. _____?\nA: I\'m good! What is _____?\nB: My name is Emma.',
        solution: 'A: Hello! How are you?\nB: I\'m fine, thank you. How are you? (or And you?)\nA: I\'m good! What is your name?\nB: My name is Emma.',
        hints: ['Think about what questions match the answers'],
      },
    },
    {
      id: 'eng-5-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-5-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Practice with a partner! Have a conversation where you greet each other, ask names, and say goodbye.',
        solution: 'Use the phrases from this chapter: Hello, How are you, What is your name, Nice to meet you, Bye!',
        hints: ['Look at the example conversation for help'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_5_4_2: TextbookChapter = {
  id: 'engelsk-5-4-2',
  courseId: 'engelsk-5',
  chapterNumber: '4.2',
  title: 'English-Speaking Countries',
  description: 'Learn about countries where people speak English.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['know about English-speaking countries and their cultures'],
  content: [
    {
      id: 'eng-5-4-2-intro',
      type: 'text',
      content: `## English Around the World

English is spoken in many countries! Let's learn about some of them.

Did you know? More than 1 billion people speak English!`,
    },
    {
      id: 'eng-5-4-2-def-uk',
      type: 'definition',
      title: 'The United Kingdom (UK)',
      content: `**The United Kingdom** has four countries:
- England (capital: London)
- Scotland (capital: Edinburgh)
- Wales (capital: Cardiff)
- Northern Ireland (capital: Belfast)

**Fun facts:**
- The Queen/King lives in London
- They drive on the left side of the road
- Big Ben is a famous clock tower in London
- They love tea and football!`,
    },
    {
      id: 'eng-5-4-2-def-usa',
      type: 'definition',
      title: 'The United States of America (USA)',
      content: `**The USA** is a big country with 50 states!

**Capital:** Washington, D.C.
**Big cities:** New York, Los Angeles, Chicago

**Fun facts:**
- The Statue of Liberty is in New York
- Hollywood makes many famous movies
- They celebrate Thanksgiving in November
- American football and baseball are popular sports`,
    },
    {
      id: 'eng-5-4-2-def-other',
      type: 'definition',
      title: 'Other English-Speaking Countries',
      content: `**Canada**
- Capital: Ottawa
- Very cold in winter, beautiful nature
- People speak English AND French

**Australia**
- Capital: Canberra
- Has special animals: kangaroos and koalas!
- Summer in December (opposite of Norway!)

**New Zealand**
- Capital: Wellington
- Beautiful mountains and nature
- Home of the Maori people`,
    },
    {
      id: 'eng-5-4-2-note',
      type: 'note',
      title: 'Why Learn English?',
      content: `English is useful because:
- You can talk to people from many countries
- Many songs, movies, and games are in English
- It helps you travel
- It's used on the internet
- It can help you get a good job when you're older!`,
    },
    {
      id: 'eng-5-4-2-example-1',
      type: 'example',
      title: 'Example: Comparing Countries',
      problem: 'How are the UK and USA different?',
      solution: `**The UK:**
- Smaller country
- King/Queen
- Drive on the left
- Currency: pounds (£)

**The USA:**
- Much bigger country
- President
- Drive on the right
- Currency: dollars ($)

**Same:** Both speak English and love sports!`,
    },
    {
      id: 'eng-5-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match the country to its capital:',
        subTasks: [
          { label: 'a', task: 'England', solution: 'London' },
          { label: 'b', task: 'USA', solution: 'Washington, D.C.' },
          { label: 'c', task: 'Australia', solution: 'Canberra' },
          { label: 'd', task: 'Canada', solution: 'Ottawa' },
        ],
        solution: 'See sub-tasks',
        hints: ['Look back at the information above'],
      },
    },
    {
      id: 'eng-5-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Answer the questions:',
        subTasks: [
          { label: 'a', task: 'Which country has 50 states?', solution: 'The USA (United States of America)' },
          { label: 'b', task: 'Where can you see kangaroos?', solution: 'Australia' },
          { label: 'c', task: 'Which two languages do people speak in Canada?', solution: 'English and French' },
        ],
        solution: 'See sub-tasks',
        hints: ['Read the facts about each country'],
      },
    },
    {
      id: 'eng-5-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-5-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Which English-speaking country would you like to visit? Write 3-4 sentences about why.',
        solution: 'Example: "I would like to visit Australia because I want to see kangaroos. Australia has beautiful beaches. I also want to learn about the Maori people."',
        hints: ['Choose a country and think about what is interesting about it'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_5_4_3: TextbookChapter = {
  id: 'engelsk-5-4-3',
  courseId: 'engelsk-5',
  chapterNumber: '4.3',
  title: 'Holidays and Traditions',
  description: 'Learn about holidays in English-speaking countries.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['know about traditions in English-speaking countries'],
  content: [
    {
      id: 'eng-5-4-3-intro',
      type: 'text',
      content: `## Holidays and Traditions

English-speaking countries have many fun holidays and traditions. Let's learn about some of them!`,
    },
    {
      id: 'eng-5-4-3-def-christmas',
      type: 'definition',
      title: 'Christmas (December 25th)',
      content: `**Christmas** is celebrated on December 25th in English-speaking countries.

**Traditions:**
- Christmas trees and decorations
- Giving presents
- Singing Christmas carols
- Santa Claus (Father Christmas in UK)
- Christmas dinner with turkey

**Greeting:** "Merry Christmas!"`,
    },
    {
      id: 'eng-5-4-3-def-halloween',
      type: 'definition',
      title: 'Halloween (October 31st)',
      content: `**Halloween** is on October 31st.

**Traditions:**
- Dressing up in costumes (scary or fun!)
- Trick or treating (getting candy)
- Carving pumpkins (jack-o'-lanterns)
- Telling scary stories

**Greeting:** "Happy Halloween!"`,
    },
    {
      id: 'eng-5-4-3-def-thanksgiving',
      type: 'definition',
      title: 'Thanksgiving (USA)',
      content: `**Thanksgiving** is an American holiday in late November.

**Traditions:**
- Big family dinner
- Turkey, mashed potatoes, pie
- Being thankful for good things
- Watching American football

People say what they are **thankful** for!`,
    },
    {
      id: 'eng-5-4-3-def-easter',
      type: 'definition',
      title: 'Easter (Spring)',
      content: `**Easter** is in March or April.

**Traditions:**
- Easter eggs (chocolate!)
- Easter egg hunt
- Easter bunny
- Spring flowers

**Greeting:** "Happy Easter!"`,
    },
    {
      id: 'eng-5-4-3-example-1',
      type: 'example',
      title: 'Example: Comparing Holidays',
      problem: 'How is Christmas in Norway different from Christmas in the UK/USA?',
      solution: `**Norway:**
- Celebrate on December 24th (Christmas Eve)
- Julenisse brings presents
- Eat ribbe or pinnekjøtt

**UK/USA:**
- Celebrate on December 25th (Christmas Day)
- Santa Claus/Father Christmas brings presents
- Eat turkey

**Same:** Christmas trees, presents, time with family!`,
    },
    {
      id: 'eng-5-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-5-4-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match the holiday to the date:',
        subTasks: [
          { label: 'a', task: 'Halloween', solution: 'October 31st' },
          { label: 'b', task: 'Christmas', solution: 'December 25th' },
          { label: 'c', task: 'Thanksgiving', solution: 'Late November' },
        ],
        solution: 'See sub-tasks',
        hints: ['Think about what season each holiday is in'],
      },
    },
    {
      id: 'eng-5-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-5-4-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'What do people do on these holidays?',
        subTasks: [
          { label: 'a', task: 'Halloween', solution: 'Dress up in costumes, go trick or treating, carve pumpkins' },
          { label: 'b', task: 'Easter', solution: 'Have Easter egg hunts, eat chocolate eggs' },
        ],
        solution: 'See sub-tasks',
        hints: ['Look back at the traditions listed for each holiday'],
      },
    },
    {
      id: 'eng-5-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-5-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write 3-4 sentences about your favorite holiday. What do you do? What do you eat? Who do you celebrate with?',
        solution: 'Example: "My favorite holiday is Christmas. I celebrate with my family. We eat good food and open presents. I love getting gifts!"',
        hints: ['Think about traditions in your own family'],
      },
    },
  ],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const ENGELSK_5_CHAPTERS: TextbookChapter[] = [
  // Chapter 1: Reading Stories, Building Vocabulary
  CHAPTER_ENGELSK_5_1_1,
  CHAPTER_ENGELSK_5_1_2,
  CHAPTER_ENGELSK_5_1_3,
  // Chapter 2: Present Tense, Past Tense, Pronouns and Adjectives
  CHAPTER_ENGELSK_5_2_1,
  CHAPTER_ENGELSK_5_2_2,
  CHAPTER_ENGELSK_5_2_3,
  CHAPTER_ENGELSK_5_2_4,
  // Chapter 3: Writing Sentences, Writing About Yourself
  CHAPTER_ENGELSK_5_3_1,
  CHAPTER_ENGELSK_5_3_2,
  CHAPTER_ENGELSK_5_3_3,
  // Chapter 4: Everyday Conversations, English-Speaking Countries
  CHAPTER_ENGELSK_5_4_1,
  CHAPTER_ENGELSK_5_4_2,
  CHAPTER_ENGELSK_5_4_3,
];
