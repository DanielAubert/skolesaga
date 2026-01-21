/**
 * Textbook chapters for English 7th grade (7. klasse)
 * Content adapted for Norwegian 12-13 year olds learning English
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 1: READING LONGER TEXTS AND VOCABULARY BUILDING
// ============================================================================

export const CHAPTER_ENGELSK_7_1_1: TextbookChapter = {
  id: 'engelsk-7-1-1',
  courseId: 'engelsk-7',
  chapterNumber: '1.1',
  title: 'Reading Longer Texts',
  description: 'Read and understand longer stories with more complex vocabulary and themes.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['read and understand longer texts in English', 'analyze texts for meaning and themes'],
  content: [
    {
      id: 'eng-7-1-1-intro',
      type: 'text',
      content: `## Reading Longer Texts in English

As your English improves, you can read longer and more exciting texts! Longer texts have more characters, more detailed descriptions, and more complex stories.

**Why read longer texts?**
- They tell more complete and interesting stories
- You learn more advanced vocabulary
- You practice focusing for longer periods
- They prepare you for books you'll read in high school`,
    },
    {
      id: 'eng-7-1-1-def-elements',
      type: 'definition',
      title: 'Elements of a Story',
      content: `**Setting** - When and where the story takes place
- Time: past, present, future, specific year
- Place: a city, a forest, a fantasy world

**Characters** - The people (or creatures) in the story
- Protagonist: The main character
- Antagonist: The character who opposes the protagonist
- Supporting characters: Other important characters

**Plot** - What happens in the story
- Introduction: Meet the characters and setting
- Rising action: Problems develop
- Climax: The most exciting moment
- Falling action: Events after the climax
- Resolution: How the story ends

**Theme** - The main message or lesson of the story`,
    },
    {
      id: 'eng-7-1-1-tip-reading',
      type: 'tip',
      title: 'Strategies for Reading Longer Texts',
      content: `**Before reading:**
- Look at the title and cover
- Read the back cover or summary
- Make predictions: What do you think will happen?

**While reading:**
- Take notes on important events
- Keep track of characters and their relationships
- Don't stop at every unknown word - use context clues
- Read in sections (don't try to read everything at once)

**After reading:**
- Summarize what happened
- Think about the theme: What was the author's message?
- Discuss with classmates or friends`,
    },
    {
      id: 'eng-7-1-1-def-inference',
      type: 'definition',
      title: 'Making Inferences',
      content: `**Inference** = using clues in the text + your own knowledge to understand something the author doesn't directly say.

**Example text:**
"Sarah walked into the room with a huge smile. She was holding a paper with a big red A+ on top."

**What can we infer?**
- The paper is probably a test or assignment
- Sarah got a very good grade
- Sarah is happy about her grade

**The text doesn't say** "Sarah was happy about her test" - but we can figure it out from the clues!`,
    },
    {
      id: 'eng-7-1-1-example-1',
      type: 'example',
      title: 'Example: Analyzing a Text Passage',
      problem: `Read this passage and answer the questions:

"The old house stood at the end of the street, its windows dark and dusty. No one had lived there for years, but lately, strange lights had appeared at night. Tom and his best friend Maya decided to investigate. As they approached the gate, it creaked open by itself. Maya grabbed Tom's arm. 'Maybe this isn't such a good idea,' she whispered."

1. What is the setting?
2. Who are the main characters?
3. What kind of story is this likely to be?
4. What can we infer about Maya?`,
      solution: `**1. Setting:**
- Place: An old, abandoned house at the end of a street
- Time: Night (recently, when strange lights appear)

**2. Main characters:**
- Tom (protagonist who wants to investigate)
- Maya (Tom's best friend)

**3. Type of story:**
- This is likely a mystery or horror/scary story (abandoned house, strange lights, creepy atmosphere)

**4. Inference about Maya:**
- Maya is nervous or scared (she grabbed Tom's arm, whispered, suggested they shouldn't continue)
- She might be more cautious than Tom`,
    },
    {
      id: 'eng-7-1-1-note',
      type: 'note',
      title: 'Understanding Literary Devices',
      content: `Authors use special techniques to make their writing more interesting:

**Simile** - comparing using "like" or "as"
- "She ran like the wind"
- "His eyes were as blue as the ocean"

**Metaphor** - saying something IS something else
- "Life is a journey"
- "The classroom was a zoo"

**Personification** - giving human qualities to non-human things
- "The wind whispered through the trees"
- "The sun smiled down on us"

**Foreshadowing** - hints about what will happen later
- "Little did she know, this would be the last time she saw him"`,
    },
    {
      id: 'eng-7-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the "climax" of a story?',
        options: [
          { id: 'a', text: 'The beginning where we meet the characters', isCorrect: false },
          { id: 'b', text: 'The most exciting or tense moment in the story', isCorrect: true },
          { id: 'c', text: 'The ending where everything is resolved', isCorrect: false },
          { id: 'd', text: 'The setting of the story', isCorrect: false },
        ],
        solution: 'B - The climax is the most exciting or tense moment in the story, usually the turning point.',
        hints: ['Think about what "climax" means in other contexts - it often means the highest point'],
      },
    },
    {
      id: 'eng-7-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which sentence contains a simile?',
        options: [
          { id: 'a', text: 'The stars twinkled in the sky.', isCorrect: false },
          { id: 'b', text: 'Her smile was as bright as the sun.', isCorrect: true },
          { id: 'c', text: 'The wind howled angrily.', isCorrect: false },
          { id: 'd', text: 'Life is a roller coaster.', isCorrect: false },
        ],
        solution: 'B - "Her smile was as bright as the sun" uses "as...as" to compare, making it a simile.',
        hints: ['Similes use "like" or "as" to compare two things'],
      },
    },
    {
      id: 'eng-7-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Read this passage and make two inferences:

"James checked his watch for the fifth time. He paced back and forth near the school entrance, looking up every time a car drove by. His hands were sweaty, and he kept rehearsing what he was going to say."`,
        solution: `Possible inferences:
1. James is waiting for someone (he keeps checking his watch and looking at cars)
2. James is nervous about something (sweaty hands, pacing, rehearsing what to say)
3. James is probably meeting someone important or having an important conversation
4. The person James is waiting for is late (he's checking his watch repeatedly)`,
        hints: ['Look for clues about his behavior and physical state'],
      },
    },
    {
      id: 'eng-7-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identify the literary device in each sentence:\n\na) "The thunder grumbled like an angry old man."\nb) "Time is money."\nc) "The flowers danced in the breeze."',
        subTasks: [
          { label: 'a', task: '"The thunder grumbled like an angry old man."', solution: 'Simile (uses "like" to compare thunder to an old man)' },
          { label: 'b', task: '"Time is money."', solution: 'Metaphor (says time IS money, not "like" money)' },
          { label: 'c', task: '"The flowers danced in the breeze."', solution: 'Personification (flowers can\'t actually dance - this is a human action)' },
        ],
        solution: 'See sub-tasks',
        hints: ['Simile = like/as, Metaphor = is, Personification = human qualities to non-human things'],
      },
    },
    {
      id: 'eng-7-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Think of a book or story you have read. Identify:\na) The setting\nb) The main character (protagonist)\nc) The antagonist or main problem\nd) The theme or message',
        solution: 'Answers will vary. Example for "Harry Potter":\na) Setting: Hogwarts School, modern-day England\nb) Protagonist: Harry Potter\nc) Antagonist: Voldemort\nd) Theme: The power of love and friendship',
        hints: ['Pick a book you know well. The theme is the main lesson or message the author wants to share.'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_7_1_2: TextbookChapter = {
  id: 'engelsk-7-1-2',
  courseId: 'engelsk-7',
  chapterNumber: '1.2',
  title: 'Vocabulary Building Through Context',
  description: 'Expand your vocabulary by using context clues and understanding word formation.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['expand vocabulary through reading', 'use context clues to understand new words'],
  content: [
    {
      id: 'eng-7-1-2-intro',
      type: 'text',
      content: `## Building Your Vocabulary

The more words you know, the better you can understand and communicate in English. But you don't need to memorize the dictionary! There are smart strategies for learning new words.

**Did you know?** Native English speakers know about 20,000-35,000 words. You can keep adding to your vocabulary throughout your life!`,
    },
    {
      id: 'eng-7-1-2-def-context',
      type: 'definition',
      title: 'Using Context Clues',
      content: `**Context clues** are hints in the surrounding text that help you understand unknown words.

**Types of context clues:**

**1. Definition clue** - The word is directly defined
- "A thesaurus, a book of synonyms, is very useful for writers."

**2. Synonym clue** - A similar word is nearby
- "The movie was tedious and boring."

**3. Antonym clue** - An opposite word is nearby
- "Unlike his gregarious brother, Tom was shy and quiet."

**4. Example clue** - Examples help explain the word
- "The store sold various tools such as hammers, screwdrivers, and wrenches."

**5. Logic clue** - The meaning makes sense from the situation
- "After not eating all day, she was famished and ate three helpings of dinner."`,
    },
    {
      id: 'eng-7-1-2-example-1',
      type: 'example',
      title: 'Example: Finding Context Clues',
      problem: 'Figure out the meaning of the underlined word using context clues:\n\n"The CACOPHONY of sounds in the busy city - car horns, construction, and people shouting - gave her a headache."',
      solution: `**Clues in the text:**
- "car horns, construction, and people shouting" - these are loud, unpleasant noises
- "gave her a headache" - the sound was unpleasant

**Conclusion:** CACOPHONY means a loud, unpleasant mixture of sounds (bråk/mislyd)

**Type of clue:** Example clue (the examples show what kind of sounds)`,
    },
    {
      id: 'eng-7-1-2-def-prefixes',
      type: 'definition',
      title: 'Word Parts: Prefixes',
      content: `**Prefixes** are added to the BEGINNING of words to change their meaning.

| Prefix | Meaning | Example |
|--------|---------|---------|
| un- | not | unhappy, unfair |
| re- | again | rewrite, redo |
| pre- | before | preview, prepay |
| dis- | not/opposite | disagree, disappear |
| mis- | wrongly | misunderstand, misspell |
| over- | too much | overeat, overwork |
| under- | too little | underpay, underestimate |
| inter- | between | international, internet |
| anti- | against | antibiotic, antisocial |
| multi- | many | multicultural, multimedia |`,
    },
    {
      id: 'eng-7-1-2-def-suffixes',
      type: 'definition',
      title: 'Word Parts: Suffixes',
      content: `**Suffixes** are added to the END of words and often change the word type.

**Makes a noun:**
| Suffix | Meaning | Example |
|--------|---------|---------|
| -tion/-sion | action/state | education, decision |
| -ment | action/state | enjoyment, excitement |
| -ness | state of being | happiness, kindness |
| -er/-or | person who | teacher, actor |

**Makes an adjective:**
| Suffix | Meaning | Example |
|--------|---------|---------|
| -ful | full of | beautiful, careful |
| -less | without | careless, homeless |
| -able/-ible | can be | readable, visible |
| -ous | having quality | dangerous, famous |

**Makes an adverb:**
| Suffix | Meaning | Example |
|--------|---------|---------|
| -ly | in what manner | quickly, happily |`,
    },
    {
      id: 'eng-7-1-2-tip',
      type: 'tip',
      title: 'Vocabulary Learning Strategies',
      content: `**Effective ways to learn new words:**

1. **Keep a vocabulary notebook** - Write new words with definitions and example sentences

2. **Use the word** - Try to use new words in your own sentences

3. **Make connections** - Connect new words to words you already know

4. **Create word families** - Learn related words together (happy, happiness, happily, unhappy)

5. **Review regularly** - Look at your vocabulary notebook often

6. **Read a lot!** - The more you read, the more words you'll encounter`,
    },
    {
      id: 'eng-7-1-2-def-word-families',
      type: 'definition',
      title: 'Word Families',
      content: `Words often come in "families" - groups of related words from the same root.

**Example: "create"**
- create (verb) - to make something new
- creation (noun) - something that was created
- creative (adjective) - able to create new things
- creativity (noun) - the ability to create
- creatively (adverb) - in a creative way
- recreate (verb) - to create again

Learning word families helps you learn many words at once!`,
    },
    {
      id: 'eng-7-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What does the prefix "un-" mean?',
        options: [
          { id: 'a', text: 'Again', isCorrect: false },
          { id: 'b', text: 'Not', isCorrect: true },
          { id: 'c', text: 'Before', isCorrect: false },
          { id: 'd', text: 'Many', isCorrect: false },
        ],
        solution: 'B - The prefix "un-" means "not" (unhappy = not happy, unfair = not fair)',
        hints: ['Think about words like "unhappy" or "unfair"'],
      },
    },
    {
      id: 'eng-7-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Use context clues to figure out what "exhausted" means:\n\n"After running the marathon, she was completely exhausted and fell asleep immediately."',
        options: [
          { id: 'a', text: 'Excited', isCorrect: false },
          { id: 'b', text: 'Very tired', isCorrect: true },
          { id: 'c', text: 'Happy', isCorrect: false },
          { id: 'd', text: 'Confused', isCorrect: false },
        ],
        solution: 'B - Running a marathon is very tiring, and she fell asleep immediately, so "exhausted" means very tired.',
        hints: ['What would you feel after running a marathon?'],
      },
    },
    {
      id: 'eng-7-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Add the correct prefix to make the opposite:\n\na) ___happy\nb) ___agree\nc) ___understood\nd) ___possible',
        subTasks: [
          { label: 'a', task: '___happy', solution: 'unhappy' },
          { label: 'b', task: '___agree', solution: 'disagree' },
          { label: 'c', task: '___understood', solution: 'misunderstood' },
          { label: 'd', task: '___possible', solution: 'impossible' },
        ],
        solution: 'See sub-tasks',
        hints: ['Common negative prefixes are un-, dis-, mis-, im-/in-'],
      },
    },
    {
      id: 'eng-7-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Create word families. Add suffixes to make new words:\n\na) care → care___ (adjective meaning "full of care")\nb) care → care___ (adjective meaning "without care")\nc) enjoy → enjoy___ (noun)\nd) quick → quick___ (adverb)',
        subTasks: [
          { label: 'a', task: 'care → careful', solution: 'careful (adjective)' },
          { label: 'b', task: 'care → careless', solution: 'careless (adjective)' },
          { label: 'c', task: 'enjoy → enjoyment', solution: 'enjoyment (noun)' },
          { label: 'd', task: 'quick → quickly', solution: 'quickly (adverb)' },
        ],
        solution: 'See sub-tasks',
        hints: ['-ful = full of, -less = without, -ment = noun, -ly = adverb'],
      },
    },
    {
      id: 'eng-7-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eng-7-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Use context clues to explain what the underlined words mean:\n\na) "The DILAPIDATED old building had broken windows, a collapsing roof, and walls covered in graffiti."\nb) "She was APPREHENSIVE about the test, nervously biting her nails and checking her notes repeatedly."',
        subTasks: [
          { label: 'a', task: 'DILAPIDATED', solution: 'In very bad condition, falling apart (the examples of broken windows, collapsing roof, and graffiti show the building is in poor condition)' },
          { label: 'b', task: 'APPREHENSIVE', solution: 'Nervous, anxious, worried (the actions of biting nails and checking notes repeatedly show nervousness)' },
        ],
        solution: 'See sub-tasks',
        hints: ['Look at the examples and descriptions around the unknown word'],
      },
    },
  ],
};

// ============================================================================
// CHAPTER 2: GRAMMAR - PRESENT PERFECT, FUTURE TENSES, CONDITIONALS
// ============================================================================

export const CHAPTER_ENGELSK_7_2_1: TextbookChapter = {
  id: 'engelsk-7-2-1',
  courseId: 'engelsk-7',
  chapterNumber: '2.1',
  title: 'Present Perfect',
  description: 'Learn to use have/has + past participle to talk about experiences and recent events.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['use present perfect correctly', 'understand when to use present perfect vs. simple past'],
  content: [
    {
      id: 'eng-7-2-1-intro',
      type: 'text',
      content: `## Present Perfect Tense

The present perfect tense connects the past to the present. It's used when past actions are still relevant now.

**Form:** have/has + past participle

- I **have visited** London.
- She **has eaten** breakfast.
- They **have finished** their homework.`,
    },
    {
      id: 'eng-7-2-1-def-form',
      type: 'definition',
      title: 'How to Form Present Perfect',
      content: `**Positive:**
Subject + have/has + past participle

| Subject | have/has | Past participle | Example |
|---------|----------|-----------------|---------|
| I/You/We/They | have | visited | I have visited Paris. |
| He/She/It | has | visited | She has visited Paris. |

**Negative:**
Subject + have/has + not + past participle
- I **have not** (haven't) seen that movie.
- He **has not** (hasn't) finished yet.

**Question:**
Have/Has + subject + past participle?
- **Have** you ever **been** to England?
- **Has** she **done** her homework?`,
    },
    {
      id: 'eng-7-2-1-def-participle',
      type: 'definition',
      title: 'Past Participles',
      content: `**Regular verbs:** add -ed (same as simple past)
- work → worked
- play → played
- visit → visited

**Irregular verbs:** must be memorized!

| Infinitive | Simple Past | Past Participle |
|------------|-------------|-----------------|
| be | was/were | been |
| go | went | gone |
| see | saw | seen |
| do | did | done |
| eat | ate | eaten |
| write | wrote | written |
| take | took | taken |
| make | made | made |
| have | had | had |
| come | came | come |
| give | gave | given |
| know | knew | known |`,
    },
    {
      id: 'eng-7-2-1-def-when-to-use',
      type: 'definition',
      title: 'When to Use Present Perfect',
      content: `**Use present perfect for:**

**1. Life experiences (no specific time)**
- I **have been** to Italy. (sometime in my life)
- She **has tried** sushi before.

**2. Actions that continue to now**
- I **have lived** here for five years. (I still live here)
- They **have known** each other since childhood.

**3. Recent actions with present results**
- I **have lost** my keys. (I still don't have them)
- She **has broken** her leg. (It's still broken)

**4. With "just", "already", "yet"**
- I **have just finished**. (very recently)
- Have you eaten **yet**? (by now)
- I **have already** done it. (before now)`,
    },
    {
      id: 'eng-7-2-1-warning',
      type: 'warning',
      title: 'Present Perfect vs. Simple Past',
      content: `**Don't confuse them!**

**Simple past:** specific time in the past (finished)
- I **went** to London **last year**. ✓
- I **have been** to London last year. ✗

**Present perfect:** no specific time, or connected to now
- I **have been** to London. (sometime, still relevant)
- I **went** to London. (need more context - when?)

**Key words:**

| Simple Past | Present Perfect |
|-------------|-----------------|
| yesterday | ever, never |
| last week/year | already, yet |
| in 2020 | just |
| ago | for, since |
| when | recently |`,
    },
    {
      id: 'eng-7-2-1-def-for-since',
      type: 'definition',
      title: 'For and Since',
      content: `**For** = duration (how long)
- I have lived here **for** five years.
- She has been sick **for** three days.
- They have known each other **for** ages.

**Since** = starting point (when it began)
- I have lived here **since** 2019.
- She has been sick **since** Monday.
- They have known each other **since** childhood.

**Remember:**
- For + period of time (minutes, hours, days, weeks, years)
- Since + point in time (a date, a day, an event)`,
    },
    {
      id: 'eng-7-2-1-example-1',
      type: 'example',
      title: 'Example: Using Present Perfect',
      problem: 'Choose the correct tense:\n1. I (saw/have seen) that movie three times.\n2. She (went/has gone) to school yesterday.\n3. They (lived/have lived) here since 2018.',
      solution: `1. I **have seen** that movie three times.
   → Experience (no specific time mentioned)

2. She **went** to school yesterday.
   → Specific time ("yesterday")

3. They **have lived** here since 2018.
   → Action continuing to the present (with "since")`,
    },
    {
      id: 'eng-7-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which sentence uses present perfect correctly?',
        options: [
          { id: 'a', text: 'I have went to the store.', isCorrect: false },
          { id: 'b', text: 'She has visited Paris last summer.', isCorrect: false },
          { id: 'c', text: 'They have never tried sushi.', isCorrect: true },
          { id: 'd', text: 'He have finished his homework.', isCorrect: false },
        ],
        solution: 'C - "They have never tried sushi" is correct. A uses wrong participle (gone, not went), B has specific time (last summer), D uses wrong auxiliary (he has, not he have).',
        hints: ['Check: is it have/has + past participle? Is there a specific time?'],
      },
    },
    {
      id: 'eng-7-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Choose the correct word: "I have studied English ___ five years."',
        options: [
          { id: 'a', text: 'since', isCorrect: false },
          { id: 'b', text: 'for', isCorrect: true },
          { id: 'c', text: 'during', isCorrect: false },
          { id: 'd', text: 'in', isCorrect: false },
        ],
        solution: 'B - Use "for" with a period of time (five years). Use "since" with a point in time.',
        hints: ['"Five years" is a duration/period of time'],
      },
    },
    {
      id: 'eng-7-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write the past participle of these verbs:',
        subTasks: [
          { label: 'a', task: 'go', solution: 'gone' },
          { label: 'b', task: 'eat', solution: 'eaten' },
          { label: 'c', task: 'write', solution: 'written' },
          { label: 'd', task: 'play', solution: 'played' },
          { label: 'e', task: 'see', solution: 'seen' },
        ],
        solution: 'See sub-tasks',
        hints: ['Regular verbs add -ed, irregular verbs have special forms'],
      },
    },
    {
      id: 'eng-7-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Fill in "for" or "since":',
        subTasks: [
          { label: 'a', task: 'I have known her ___ 2015.', solution: 'since' },
          { label: 'b', task: 'We have waited ___ two hours.', solution: 'for' },
          { label: 'c', task: 'She has worked here ___ January.', solution: 'since' },
          { label: 'd', task: 'They have been friends ___ many years.', solution: 'for' },
        ],
        solution: 'See sub-tasks',
        hints: ['Since = point in time (year, month, day), For = period of time (hours, years)'],
      },
    },
    {
      id: 'eng-7-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose simple past or present perfect and complete the sentences:\n\na) I ___ (never/try) Indian food.\nb) She ___ (visit) her grandmother last weekend.\nc) ___ you ___ (finish) your homework yet?\nd) They ___ (move) to Oslo in 2020.',
        subTasks: [
          { label: 'a', task: 'I ___ (never/try) Indian food.', solution: 'have never tried' },
          { label: 'b', task: 'She ___ (visit) her grandmother last weekend.', solution: 'visited' },
          { label: 'c', task: '___ you ___ (finish) your homework yet?', solution: 'Have you finished' },
          { label: 'd', task: 'They ___ (move) to Oslo in 2020.', solution: 'moved' },
        ],
        solution: 'See sub-tasks',
        hints: ['Look for time expressions: "never", "yet" = present perfect; "last weekend", "in 2020" = simple past'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_7_2_2: TextbookChapter = {
  id: 'engelsk-7-2-2',
  courseId: 'engelsk-7',
  chapterNumber: '2.2',
  title: 'Future Tenses',
  description: 'Learn different ways to talk about the future: will, going to, and present continuous.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['express future actions and plans', 'choose the correct future form'],
  content: [
    {
      id: 'eng-7-2-2-intro',
      type: 'text',
      content: `## Talking About the Future

In English, there are several ways to talk about the future. Each form has its own uses!

**Three main ways:**
1. **Will** + infinitive
2. **Be going to** + infinitive
3. **Present continuous** (for arranged plans)`,
    },
    {
      id: 'eng-7-2-2-def-will',
      type: 'definition',
      title: 'Future with "Will"',
      content: `**Form:** will + infinitive (base form of verb)

**Positive:** I will help you. / I'll help you.
**Negative:** I will not go. / I won't go.
**Question:** Will you come?

**Use "will" for:**

**1. Instant decisions** (decided at the moment of speaking)
- "The phone is ringing." - "I**'ll** answer it."
- "I**'ll** have the pizza, please."

**2. Predictions (opinions/beliefs)**
- I think it **will** rain tomorrow.
- She **will** probably be late.

**3. Promises and offers**
- I **will** always love you. (promise)
- I**'ll** carry that for you. (offer)

**4. Facts about the future**
- The sun **will** rise at 6:30 tomorrow.`,
    },
    {
      id: 'eng-7-2-2-def-going-to',
      type: 'definition',
      title: 'Future with "Be Going To"',
      content: `**Form:** am/is/are + going to + infinitive

**Positive:** I am going to study. / I'm going to study.
**Negative:** She is not going to come. / She isn't going to come.
**Question:** Are you going to help?

**Use "be going to" for:**

**1. Plans and intentions** (already decided)
- I**'m going to** visit my grandmother this weekend.
- They**'re going to** buy a new car.

**2. Predictions based on evidence** (you can see something)
- Look at those clouds! It**'s going to** rain.
- She's running too fast. She**'s going to** fall!`,
    },
    {
      id: 'eng-7-2-2-def-present-continuous',
      type: 'definition',
      title: 'Present Continuous for Future',
      content: `**Form:** am/is/are + verb-ing

**Use present continuous for:**

**Fixed arrangements** (specific plans with time/place)
- I**'m meeting** Sarah at 3 o'clock.
- We**'re flying** to London on Friday.
- She**'s starting** a new job next week.

**Note:** This is used when arrangements are definite - you have a time, place, or appointment confirmed.

**Comparison:**
- I**'m going to** meet Sarah. (plan/intention)
- I**'m meeting** Sarah at 3 o'clock. (fixed arrangement)`,
    },
    {
      id: 'eng-7-2-2-example-1',
      type: 'example',
      title: 'Example: Choosing the Right Future Form',
      problem: 'Choose the best future form for each situation:',
      solution: `**1. You see dark clouds:**
"It**'s going to** rain." (prediction based on evidence)

**2. Someone asks what you want to drink:**
"I**'ll** have a coffee, please." (instant decision)

**3. You have concert tickets for Saturday:**
"I**'m going** to a concert on Saturday." (fixed arrangement)

**4. You have decided to learn guitar:**
"I**'m going to** learn guitar this year." (plan/intention)

**5. Someone drops their books:**
"I**'ll** help you." (offer, instant decision)`,
    },
    {
      id: 'eng-7-2-2-warning',
      type: 'warning',
      title: 'Common Mistakes',
      content: `**Avoid these errors:**

❌ "I will to go" → ✓ "I **will go**" (no "to" after will)

❌ "I am go to study" → ✓ "I **am going to** study"

❌ "She will goes" → ✓ "She **will go**" (no -s after will)

❌ "I'm going to meeting him" → ✓ "I**'m going to meet** him" (infinitive after going to)

**Remember:** After "will" and "going to", use the base form (infinitive without "to").`,
    },
    {
      id: 'eng-7-2-2-tip',
      type: 'tip',
      title: 'Time Expressions for the Future',
      content: `**Common future time expressions:**

- tomorrow
- next week/month/year
- in two days
- on Monday
- this weekend
- tonight
- later
- soon
- in the future

**Example:** "I**'ll** see you **tomorrow**."`,
    },
    {
      id: 'eng-7-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which sentence expresses an instant decision?',
        options: [
          { id: 'a', text: 'I\'m going to learn Spanish next year.', isCorrect: false },
          { id: 'b', text: 'I\'m meeting John at 6 o\'clock.', isCorrect: false },
          { id: 'c', text: 'The phone is ringing - I\'ll get it!', isCorrect: true },
          { id: 'd', text: 'It\'s going to rain soon.', isCorrect: false },
        ],
        solution: 'C - "I\'ll get it" is an instant decision made at the moment of speaking.',
        hints: ['Instant decisions are made right now, not planned before'],
      },
    },
    {
      id: 'eng-7-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'You look at the sky and see dark clouds. What do you say?',
        options: [
          { id: 'a', text: 'It will rain.', isCorrect: false },
          { id: 'b', text: 'It\'s going to rain.', isCorrect: true },
          { id: 'c', text: 'It\'s raining.', isCorrect: false },
          { id: 'd', text: 'It rained.', isCorrect: false },
        ],
        solution: 'B - Use "going to" for predictions based on evidence (you can see the dark clouds).',
        hints: ['When you can see evidence that something will happen, use "going to"'],
      },
    },
    {
      id: 'eng-7-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Complete with "will" or "be going to":',
        subTasks: [
          { label: 'a', task: 'Look! That car ___ crash! (evidence)', solution: 'is going to' },
          { label: 'b', task: '"I don\'t have a pen." - "I ___ lend you mine." (offer)', solution: 'will / \'ll' },
          { label: 'c', task: 'I ___ visit my cousins next summer. (plan)', solution: 'am going to / \'m going to' },
          { label: 'd', task: 'I think she ___ win the competition. (prediction/opinion)', solution: 'will / \'ll' },
        ],
        solution: 'See sub-tasks',
        hints: ['Evidence = going to, Offer = will, Plan = going to, Opinion = will'],
      },
    },
    {
      id: 'eng-7-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write about your future. Use each form once:\n- Will (promise or prediction)\n- Going to (plan)\n- Present continuous (fixed arrangement)',
        solution: `Example answers:
- Will: "I will always remember this year." (promise)
- Going to: "I\'m going to study harder next term." (plan)
- Present continuous: "I\'m having dinner with my family on Sunday." (arrangement)`,
        hints: ['Think about your real plans, promises, and appointments'],
      },
    },
    {
      id: 'eng-7-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose the best future form and explain why:\n\na) "What are your summer plans?" - "We ___ (travel) to Greece."\nb) "Someone is at the door." - "I ___ (open) it."\nc) "Why did you buy that paint?" - "I ___ (paint) my room."\nd) "Do you think Norway ___ (win) the match?"',
        subTasks: [
          { label: 'a', task: 'We ___ (travel) to Greece.', solution: 'are going to travel (plan decided before)' },
          { label: 'b', task: 'I ___ (open) it.', solution: 'will open / \'ll open (instant decision)' },
          { label: 'c', task: 'I ___ (paint) my room.', solution: 'am going to paint (intention/plan with evidence - the paint)' },
          { label: 'd', task: 'Norway ___ (win)', solution: 'will win (prediction/opinion with "think")' },
        ],
        solution: 'See sub-tasks',
        hints: ['Think about: Was it decided before? Is there evidence? Is it an opinion?'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_7_2_3: TextbookChapter = {
  id: 'engelsk-7-2-3',
  courseId: 'engelsk-7',
  chapterNumber: '2.3',
  title: 'Conditionals',
  description: 'Learn to use if-sentences to talk about conditions and consequences.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['use conditional sentences correctly', 'understand different types of conditionals'],
  content: [
    {
      id: 'eng-7-2-3-intro',
      type: 'text',
      content: `## Conditionals: If-Sentences

Conditional sentences have two parts:
1. **If-clause** (condition)
2. **Main clause** (result/consequence)

"**If** it rains, I **will** stay home."
(condition) → (result)

We use conditionals to talk about what happens (or might happen) if a certain condition is met.`,
    },
    {
      id: 'eng-7-2-3-def-zero',
      type: 'definition',
      title: 'Zero Conditional: Facts and General Truths',
      content: `**Form:** If + present simple, present simple

**Use for:** Things that are always true (facts, scientific laws, general truths)

**Examples:**
- If you heat water to 100°C, it boils.
- If it rains, the grass gets wet.
- If you don't water plants, they die.

**Note:** The word "if" can be replaced with "when" with the same meaning:
- When you heat water to 100°C, it boils.`,
    },
    {
      id: 'eng-7-2-3-def-first',
      type: 'definition',
      title: 'First Conditional: Real Future Possibilities',
      content: `**Form:** If + present simple, will + infinitive

**Use for:** Possible future situations and their likely results

**Examples:**
- If it **rains**, I **will** stay home.
- If you **study** hard, you **will** pass the test.
- If she **doesn't** come, we **will** start without her.

**The condition is possible/likely:**
- If I **have** time, I**'ll** call you. (I might have time)
- If the weather **is** nice, we**'ll** go to the beach. (It might be nice)

**Note:** In the if-clause, we use present tense even though we're talking about the future!
- ❌ If it **will rain**...
- ✓ If it **rains**...`,
    },
    {
      id: 'eng-7-2-3-def-second',
      type: 'definition',
      title: 'Second Conditional: Unreal/Hypothetical Situations',
      content: `**Form:** If + past simple, would + infinitive

**Use for:** Imaginary or unlikely situations

**Examples:**
- If I **won** the lottery, I **would** buy a big house.
- If I **could** fly, I **would** travel everywhere.
- If she **knew** the answer, she **would** tell us.

**The situation is imaginary/unlikely:**
- If I **were** a bird, I **would** fly away.
- If I **had** a million dollars, I **would** help people.

**Special note:** With "I", we often use "were" instead of "was":
- If I **were** you, I **would** apologize. (formal/correct)
- If I **was** you, I **would** apologize. (informal/common)`,
    },
    {
      id: 'eng-7-2-3-example-1',
      type: 'example',
      title: 'Example: Comparing Conditionals',
      problem: 'What is the difference between these sentences?',
      solution: `**1. "If it rains, the ground gets wet."** (Zero conditional)
   → This is a fact. It always happens.

**2. "If it rains tomorrow, I will stay home."** (First conditional)
   → This is a real possibility. It might rain tomorrow.

**3. "If it rained diamonds, I would be rich."** (Second conditional)
   → This is imaginary. It won't really rain diamonds!

**Key difference:**
- Zero: Always true
- First: Possible/likely
- Second: Imaginary/unlikely`,
    },
    {
      id: 'eng-7-2-3-tip',
      type: 'tip',
      title: 'Word Order in Conditionals',
      content: `The if-clause can come first OR second:

**If-clause first:** (use a comma)
- **If** I have time, I will help you.

**Main clause first:** (no comma needed)
- I will help you **if** I have time.

Both sentences mean the same thing!`,
    },
    {
      id: 'eng-7-2-3-warning',
      type: 'warning',
      title: 'Common Mistakes',
      content: `**Mistake 1:** Using "will" in the if-clause
- ❌ If it **will rain**, I will stay home.
- ✓ If it **rains**, I will stay home.

**Mistake 2:** Using "would" in the if-clause (second conditional)
- ❌ If I **would have** time, I would help.
- ✓ If I **had** time, I would help.

**Remember:** The special verb form goes in the MAIN clause, not the if-clause!`,
    },
    {
      id: 'eng-7-2-3-def-unless',
      type: 'definition',
      title: 'Unless = If Not',
      content: `**Unless** means "if not"

- I will go **unless** it rains. = I will go **if it doesn't rain**.
- She won't pass **unless** she studies. = She won't pass **if she doesn't study**.

**Examples:**
- **Unless** you hurry, you will be late.
  (= If you don't hurry, you will be late.)
- I won't tell anyone **unless** you want me to.
  (= I won't tell anyone if you don't want me to.)`,
    },
    {
      id: 'eng-7-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which sentence is a first conditional?',
        options: [
          { id: 'a', text: 'If water freezes, it becomes ice.', isCorrect: false },
          { id: 'b', text: 'If I win the lottery, I would buy a car.', isCorrect: false },
          { id: 'c', text: 'If you don\'t hurry, you will miss the bus.', isCorrect: true },
          { id: 'd', text: 'If I were taller, I would play basketball.', isCorrect: false },
        ],
        solution: 'C - First conditional uses "if + present simple, will + infinitive"',
        hints: ['First conditional: if + present, will + infinitive'],
      },
    },
    {
      id: 'eng-7-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Complete the sentence: "If I ___ rich, I would travel the world."',
        options: [
          { id: 'a', text: 'am', isCorrect: false },
          { id: 'b', text: 'will be', isCorrect: false },
          { id: 'c', text: 'were/was', isCorrect: true },
          { id: 'd', text: 'would be', isCorrect: false },
        ],
        solution: 'C - Second conditional uses past tense in the if-clause (were/was)',
        hints: ['This is an imaginary situation (second conditional)'],
      },
    },
    {
      id: 'eng-7-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Complete the first conditional sentences:',
        subTasks: [
          { label: 'a', task: 'If she ___ (study), she ___ (pass) the exam.', solution: 'studies, will pass' },
          { label: 'b', task: 'If it ___ (be) sunny, we ___ (go) to the beach.', solution: 'is, will go' },
          { label: 'c', task: 'I ___ (help) you if you ___ (ask) nicely.', solution: 'will help, ask' },
        ],
        solution: 'See sub-tasks',
        hints: ['If-clause: present simple, Main clause: will + infinitive'],
      },
    },
    {
      id: 'eng-7-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Complete the second conditional sentences:',
        subTasks: [
          { label: 'a', task: 'If I ___ (be) you, I ___ (apologize).', solution: 'were, would apologize' },
          { label: 'b', task: 'If she ___ (have) more time, she ___ (learn) to play guitar.', solution: 'had, would learn' },
          { label: 'c', task: 'We ___ (travel) more if we ___ (have) more money.', solution: 'would travel, had' },
        ],
        solution: 'See sub-tasks',
        hints: ['If-clause: past simple, Main clause: would + infinitive'],
      },
    },
    {
      id: 'eng-7-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eng-7-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Identify the type of conditional and explain the meaning:\n\na) "If you mix blue and yellow, you get green."\nb) "If I had wings, I would fly to school."\nc) "If you don\'t leave now, you\'ll be late."',
        subTasks: [
          { label: 'a', task: '"If you mix blue and yellow, you get green."', solution: 'Zero conditional - This is a fact/general truth that is always true.' },
          { label: 'b', task: '"If I had wings, I would fly to school."', solution: 'Second conditional - This is an imaginary/hypothetical situation (humans don\'t have wings).' },
          { label: 'c', task: '"If you don\'t leave now, you\'ll be late."', solution: 'First conditional - This is a real possibility in the future.' },
        ],
        solution: 'See sub-tasks',
        hints: ['Zero = always true, First = possible future, Second = imaginary'],
      },
    },
  ],
};

// ============================================================================
// CHAPTER 3: WRITING - ESSAYS AND CREATIVE WRITING
// ============================================================================

export const CHAPTER_ENGELSK_7_3_1: TextbookChapter = {
  id: 'engelsk-7-3-1',
  courseId: 'engelsk-7',
  chapterNumber: '3.1',
  title: 'Essay Writing',
  description: 'Learn to structure and write well-organized essays.',
  estimatedMinutes: 55,
  exercises: [],
  competenceGoals: ['write structured essays', 'use paragraphs effectively'],
  content: [
    {
      id: 'eng-7-3-1-intro',
      type: 'text',
      content: `## Writing Essays

An essay is a structured piece of writing where you explore a topic, share your opinion, or explain something. Good essays are organized, clear, and support their points with examples.

**Types of essays:**
- **Opinion essays** - Share your view on a topic
- **Descriptive essays** - Describe something in detail
- **Narrative essays** - Tell a story
- **Expository essays** - Explain or inform about something`,
    },
    {
      id: 'eng-7-3-1-def-structure',
      type: 'definition',
      title: 'Essay Structure',
      content: `A basic essay has three main parts:

**1. INTRODUCTION (one paragraph)**
- Hook: An interesting opening sentence
- Background: Brief context about the topic
- Thesis statement: Your main point or argument

**2. BODY (2-3 paragraphs)**
- Each paragraph discusses one main idea
- Each idea supports your thesis
- Include examples and evidence

**3. CONCLUSION (one paragraph)**
- Restate your thesis in different words
- Summarize your main points
- End with a final thought or call to action`,
    },
    {
      id: 'eng-7-3-1-def-intro',
      type: 'definition',
      title: 'Writing a Good Introduction',
      content: `**The Hook** - Grab the reader's attention!
- Ask a question: "Have you ever wondered why...?"
- Use a surprising fact: "Did you know that...?"
- Share a quote: "As Einstein once said..."
- Tell a brief story: "Last summer, I discovered..."

**Background information** - Give context
- What is this topic about?
- Why is it important?

**Thesis statement** - State your main point
- What will you argue or explain?
- This is the most important sentence!

**Example thesis statements:**
- "School uniforms should be required because they reduce bullying, save money, and help students focus."
- "Climate change is the biggest challenge facing our generation."`,
    },
    {
      id: 'eng-7-3-1-def-body',
      type: 'definition',
      title: 'Writing Body Paragraphs',
      content: `Each body paragraph follows the **TEEL structure:**

**T - Topic sentence**
- States the main idea of the paragraph
- "Firstly, school uniforms reduce bullying."

**E - Explanation**
- Explain your point in more detail
- "When everyone wears the same clothes, no one is judged for what they wear."

**E - Evidence/Example**
- Support with facts, examples, or quotes
- "Studies show that schools with uniforms have 50% fewer bullying incidents."

**L - Link**
- Connect back to your thesis or to the next paragraph
- "This shows that uniforms help create a safer school environment."`,
    },
    {
      id: 'eng-7-3-1-def-conclusion',
      type: 'definition',
      title: 'Writing a Strong Conclusion',
      content: `**What to include:**
- Restate your thesis (in different words)
- Summarize your main points
- End with impact (call to action, prediction, question, or final thought)

**What NOT to do:**
- Don't introduce new information
- Don't say "In conclusion..." (try something more creative)
- Don't just repeat your introduction

**Example conclusion:**
"As we have seen, school uniforms benefit students by reducing bullying, saving money, and improving focus. Schools should seriously consider implementing uniform policies. After all, shouldn't we do everything we can to help students succeed?"`,
    },
    {
      id: 'eng-7-3-1-tip',
      type: 'tip',
      title: 'Linking Words and Phrases',
      content: `Use linking words to connect your ideas:

**To add ideas:**
- Furthermore, Moreover, In addition, Also, Additionally

**To give examples:**
- For example, For instance, Such as, To illustrate

**To contrast:**
- However, On the other hand, Although, Despite, Nevertheless

**To show cause/effect:**
- Therefore, As a result, Consequently, Because of this

**To conclude:**
- In summary, To conclude, Overall, In short, Ultimately`,
    },
    {
      id: 'eng-7-3-1-example-1',
      type: 'example',
      title: 'Example: Short Opinion Essay',
      problem: 'Write an opinion essay about whether students should have homework.',
      solution: `**Should Students Have Homework?**

[INTRODUCTION]
After a long day at school, many students dread opening their backpacks to find hours of homework waiting. But is homework really necessary? I believe that while some homework is useful, too much homework is harmful to students' health and well-being.

[BODY 1]
Firstly, moderate amounts of homework help students practice what they learn. When students do homework, they reinforce skills from class. For example, practicing math problems at home helps students remember formulas. This extra practice leads to better understanding.

[BODY 2]
However, too much homework causes stress and exhaustion. Students who spend hours on homework have no time for exercise, family, or hobbies. Studies show that students with excessive homework sleep less and feel more anxious. A stressed student cannot learn effectively.

[CONCLUSION]
In summary, homework should be balanced. Teachers should assign meaningful tasks that take no more than an hour. This way, students benefit from practice without sacrificing their health. Isn't a happy, healthy student more likely to succeed?`,
    },
    {
      id: 'eng-7-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-7-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What does a thesis statement do?',
        options: [
          { id: 'a', text: 'It introduces the topic with a fun fact', isCorrect: false },
          { id: 'b', text: 'It states the main argument or point of the essay', isCorrect: true },
          { id: 'c', text: 'It summarizes the conclusion', isCorrect: false },
          { id: 'd', text: 'It gives an example', isCorrect: false },
        ],
        solution: 'B - The thesis statement presents the main argument or point of your essay.',
        hints: ['The thesis is the most important sentence - it tells readers what you will prove'],
      },
    },
    {
      id: 'eng-7-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-7-3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which is the best hook for an essay about protecting the environment?',
        options: [
          { id: 'a', text: 'The environment is important.', isCorrect: false },
          { id: 'b', text: 'I will write about the environment.', isCorrect: false },
          { id: 'c', text: 'Every minute, we lose an area of rainforest the size of 20 football fields.', isCorrect: true },
          { id: 'd', text: 'In this essay, I will discuss the environment.', isCorrect: false },
        ],
        solution: 'C - This hook uses a surprising fact that grabs the reader\'s attention.',
        hints: ['A good hook is interesting and makes readers want to read more'],
      },
    },
    {
      id: 'eng-7-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-7-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Put these parts in the correct order for an essay:\n\na) Body paragraph with example\nb) Thesis statement\nc) Conclusion\nd) Hook\ne) Background information',
        solution: 'Correct order: d) Hook, e) Background information, b) Thesis statement, a) Body paragraph with example, c) Conclusion',
        hints: ['The introduction comes first, then body, then conclusion'],
      },
    },
    {
      id: 'eng-7-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eng-7-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a thesis statement for an essay about one of these topics:\na) Why pets are good for children\nb) The best way to learn a new language\nc) Why video games can be educational',
        solution: `Example thesis statements:
a) "Pets are beneficial for children because they teach responsibility, provide companionship, and reduce stress."
b) "The best way to learn a new language is through immersion, practice, and using the language in real situations."
c) "Video games can be educational because they develop problem-solving skills, encourage creativity, and can teach history and science."`,
        hints: ['State your main argument and give 2-3 reasons'],
      },
    },
    {
      id: 'eng-7-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eng-7-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a complete introduction paragraph (hook, background, thesis) for this topic: "Should students be allowed to use phones in school?"',
        solution: `Example introduction:
"Imagine a classroom where every student stares at their phone instead of the teacher. This scenario worries many teachers and parents today. The debate over phones in schools has grown as more young people own smartphones. While some argue phones are distracting, I believe students should be allowed to use phones in school because they are useful learning tools, help students stay organized, and prepare them for the digital world."`,
        hints: ['Start with an interesting hook, then give context, then state your opinion with reasons'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_7_3_2: TextbookChapter = {
  id: 'engelsk-7-3-2',
  courseId: 'engelsk-7',
  chapterNumber: '3.2',
  title: 'Creative Writing',
  description: 'Write short stories with interesting characters and plots.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['write creative texts in English', 'develop characters and plots'],
  content: [
    {
      id: 'eng-7-3-2-intro',
      type: 'text',
      content: `## Creative Writing: Short Stories

Creative writing lets you use your imagination to create stories, characters, and worlds. Writing stories in English is a great way to practice the language while having fun!

**Why write creatively?**
- Express your imagination
- Practice vocabulary and grammar in context
- Develop your own writing voice
- Entertain yourself and others!`,
    },
    {
      id: 'eng-7-3-2-def-elements',
      type: 'definition',
      title: 'Elements of a Good Story',
      content: `**1. Interesting Characters**
- Who are they? What do they want?
- What are their strengths and weaknesses?

**2. Engaging Setting**
- Where and when does the story take place?
- Create atmosphere with descriptive details

**3. Clear Plot**
- Beginning: Introduce characters and situation
- Middle: Problem or conflict develops
- End: Resolution and conclusion

**4. Conflict/Problem**
- Every good story needs tension!
- Person vs. Person
- Person vs. Nature
- Person vs. Self
- Person vs. Society

**5. Theme**
- What message or lesson does your story share?`,
    },
    {
      id: 'eng-7-3-2-def-characters',
      type: 'definition',
      title: 'Creating Characters',
      content: `**Give your characters:**

**Physical appearance:**
- What do they look like? (height, hair, eyes, clothing)

**Personality:**
- Are they brave, shy, funny, serious?
- What are their quirks or habits?

**Background:**
- Where are they from?
- What is their family like?

**Motivation:**
- What do they want? (goals)
- What are they afraid of? (fears)

**Character development:**
- How do they change during the story?
- What do they learn?

**Tip:** Even in short stories, give your main character at least one clear want and one obstacle!`,
    },
    {
      id: 'eng-7-3-2-def-show-tell',
      type: 'definition',
      title: 'Show, Don\'t Tell',
      content: `**"Show, don't tell"** means using actions, dialogue, and details instead of just stating facts.

**TELLING (weak):** "Sarah was scared."

**SHOWING (strong):** "Sarah's hands trembled as she backed against the wall. Her heart pounded so loud she was sure everyone could hear it."

**More examples:**

❌ "He was angry."
✓ "He slammed his fist on the table, his face turning red."

❌ "The room was messy."
✓ "Clothes were scattered across the floor, empty pizza boxes were stacked on the desk, and a half-eaten sandwich sat forgotten on the windowsill."

❌ "She was happy to see him."
✓ "Her face lit up with a wide smile, and she ran to hug him."`,
    },
    {
      id: 'eng-7-3-2-tip',
      type: 'tip',
      title: 'Writing Dialogue',
      content: `**Good dialogue:**
- Sounds natural (how people really talk)
- Shows character personality
- Moves the story forward
- Breaks up long paragraphs

**Punctuation rules:**
- Put quotation marks around spoken words
- Start a new paragraph when a new person speaks
- Use said, asked, replied, whispered, etc.

**Example:**
"I don't think we should go in there," Maya whispered.
Tom shook his head. "We've come this far. I'm not turning back now."
"But what if something happens?"
"Then we'll deal with it together."

**Tip:** Don't always use "said" - vary your dialogue tags!
said, asked, replied, muttered, shouted, whispered, exclaimed`,
    },
    {
      id: 'eng-7-3-2-def-openings',
      type: 'definition',
      title: 'Strong Story Openings',
      content: `Your first sentence should grab the reader!

**Types of strong openings:**

**Action:** Start in the middle of something happening
- "The glass shattered as Jake dove through the window."

**Dialogue:** Start with speech
- "'Whatever you do,' my grandmother said, 'never open that door.'"

**Question:** Make readers curious
- "What would you do if you woke up with superpowers?"

**Surprising statement:**
- "The day my life changed forever started like any other Tuesday."

**Setting the mood:**
- "The old house at the end of the street had been empty for as long as anyone could remember."`,
    },
    {
      id: 'eng-7-3-2-example-1',
      type: 'example',
      title: 'Example: A Short Story Opening',
      problem: 'Write the opening of a mystery story.',
      solution: `**Opening:**

The moment Emma touched the ancient book, the lights in the library flickered. She froze, her fingers still resting on the leather cover.

"Did you see that?" she whispered to her friend Leo, who was checking his phone nearby.

"See what?" He looked up, clearly uninterested.

Before Emma could answer, the book fell open by itself, revealing pages covered in strange symbols. As she leaned closer, one word appeared, glowing faintly in gold: *BEWARE*.

Emma's heart raced. This wasn't an ordinary library book. And she had a feeling she had just made a very big mistake.

**Why this works:**
- Starts with action (touching the book)
- Creates mystery (flickering lights, strange symbols)
- Introduces two characters with different personalities
- Uses dialogue to break up description
- Ends with tension (she made a mistake)`,
    },
    {
      id: 'eng-7-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-7-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which is an example of "showing" instead of "telling"?',
        options: [
          { id: 'a', text: 'She was very tired.', isCorrect: false },
          { id: 'b', text: 'Her eyelids drooped, and she kept yawning every few minutes.', isCorrect: true },
          { id: 'c', text: 'He felt sad about losing.', isCorrect: false },
          { id: 'd', text: 'The weather was nice.', isCorrect: false },
        ],
        solution: 'B - This shows tiredness through actions (drooping eyelids, yawning) instead of just saying "tired."',
        hints: ['Look for the answer that uses actions and details instead of just stating a feeling'],
      },
    },
    {
      id: 'eng-7-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-7-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rewrite these "telling" sentences to "show" instead:\n\na) "He was nervous."\nb) "The house was creepy."\nc) "She was very happy."',
        subTasks: [
          { label: 'a', task: '"He was nervous."', solution: 'Example: "His hands were sweating, and he couldn\'t stop tapping his foot against the floor."' },
          { label: 'b', task: '"The house was creepy."', solution: 'Example: "The windows stared like empty eyes, and the front door hung open, creaking in the wind."' },
          { label: 'c', task: '"She was very happy."', solution: 'Example: "A huge grin spread across her face, and she jumped up and down, clapping her hands."' },
        ],
        solution: 'See sub-tasks',
        hints: ['Use physical details, actions, and sensory descriptions'],
      },
    },
    {
      id: 'eng-7-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-7-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Create a character profile for a story. Include:\n- Name\n- Age\n- Physical appearance (3 details)\n- Personality (2 traits)\n- One goal and one fear',
        solution: `Example:
- Name: Maya Chen
- Age: 13
- Physical appearance: Long black hair, brown eyes, always wears her lucky red bracelet
- Personality: Curious and brave, but sometimes too impulsive
- Goal: To solve the mystery of her grandmother's disappearance
- Fear: Being alone and not having anyone to trust`,
        hints: ['Think about what makes this character unique and interesting'],
      },
    },
    {
      id: 'eng-7-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eng-7-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write the first paragraph of a story using ONE of these openings:\n\na) "The letter arrived on a rainy Monday morning..."\nb) "\'You have to promise me you won\'t tell anyone,\' she said..."\nc) "Looking back, I should have known something was wrong when..."',
        solution: `Example for option (a):
"The letter arrived on a rainy Monday morning. It had no stamp, no return address - just my name written in shaky handwriting. Mom handed it to me with a puzzled look. 'Were you expecting something?' I shook my head, carefully opening the envelope. Inside was a single piece of paper with just three words: 'They found you.' My blood ran cold. After twelve years of hiding, they had finally found us."`,
        hints: ['Use the opening to create mystery or tension, and make readers want to know what happens next'],
      },
    },
  ],
};

// ============================================================================
// CHAPTER 4: DISCUSSIONS, DEBATES, AND CULTURE
// ============================================================================

export const CHAPTER_ENGELSK_7_4_1: TextbookChapter = {
  id: 'engelsk-7-4-1',
  courseId: 'engelsk-7',
  chapterNumber: '4.1',
  title: 'Discussions and Debates',
  description: 'Learn to express opinions, argue respectfully, and participate in debates.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['express and defend opinions in English', 'participate in discussions and debates'],
  content: [
    {
      id: 'eng-7-4-1-intro',
      type: 'text',
      content: `## Discussions and Debates in English

Being able to express your opinions clearly and listen to others is an important skill. In English, there are many useful phrases for agreeing, disagreeing, and making your point.

**What's the difference?**
- **Discussion:** A conversation where people share ideas and opinions
- **Debate:** A more formal argument between opposing sides`,
    },
    {
      id: 'eng-7-4-1-def-opinions',
      type: 'definition',
      title: 'Expressing Opinions',
      content: `**Giving your opinion:**
- In my opinion, ...
- I think that ...
- I believe that ...
- I feel that ...
- From my point of view, ...
- As I see it, ...
- If you ask me, ...
- Personally, I think ...

**Strong opinions:**
- I'm absolutely convinced that ...
- There's no doubt in my mind that ...
- I strongly believe that ...

**Softer opinions:**
- It seems to me that ...
- I tend to think that ...
- I'm inclined to believe that ...`,
    },
    {
      id: 'eng-7-4-1-def-agreeing',
      type: 'definition',
      title: 'Agreeing and Disagreeing',
      content: `**Agreeing:**
- I agree with you.
- That's a good point.
- Exactly! / Absolutely!
- I think so too.
- You're right.
- I couldn't agree more.

**Partly agreeing:**
- I see your point, but...
- That's true, however...
- You have a point, although...
- I agree to some extent, but...

**Disagreeing politely:**
- I'm not sure I agree.
- I see it differently.
- I understand your point, but...
- I'm afraid I disagree.
- I don't quite agree with that.

**Never say:**
❌ "You're wrong!"
❌ "That's stupid!"
✓ Use polite phrases instead`,
    },
    {
      id: 'eng-7-4-1-def-supporting',
      type: 'definition',
      title: 'Supporting Your Arguments',
      content: `**Giving reasons:**
- The reason I think this is because...
- This is because...
- One reason for this is...

**Giving examples:**
- For example, ...
- For instance, ...
- A good example of this is...
- To illustrate this point, ...

**Using evidence:**
- Studies show that...
- According to experts, ...
- Research suggests that...
- Statistics indicate that...

**Making comparisons:**
- Similarly, ...
- In the same way, ...
- On the other hand, ...
- In contrast, ...`,
    },
    {
      id: 'eng-7-4-1-tip',
      type: 'tip',
      title: 'Tips for Good Discussions',
      content: `**DO:**
- Listen carefully to others
- Wait for your turn to speak
- Respect different opinions
- Support your points with examples
- Stay calm and polite
- Ask questions to understand better

**DON'T:**
- Interrupt others
- Get angry or raise your voice
- Make personal attacks
- Change the topic randomly
- Speak too much without letting others talk

**Useful phrases:**
- "Could I add something here?"
- "What do you think, [name]?"
- "That's an interesting point. Can you explain more?"
- "Let me make sure I understand..."`,
    },
    {
      id: 'eng-7-4-1-def-debate',
      type: 'definition',
      title: 'Debate Structure',
      content: `**A formal debate has:**

**Two sides:**
- Proposition (for the topic)
- Opposition (against the topic)

**Structure:**
1. Introduction of the topic
2. First speaker (proposition)
3. First speaker (opposition)
4. Second speakers continue
5. Rebuttal (responding to the other side)
6. Closing statements

**Key skills:**
- Present your strongest arguments
- Anticipate what the other side will say
- Respond to their arguments
- Summarize your main points`,
    },
    {
      id: 'eng-7-4-1-example-1',
      type: 'example',
      title: 'Example: Mini Debate',
      problem: 'Topic: "Social media does more harm than good for teenagers."',
      solution: `**Proposition (FOR):**
"In my opinion, social media does more harm than good for teenagers. Firstly, studies show that heavy social media use is linked to anxiety and depression. For example, many teens compare themselves to others online and feel inadequate. Secondly, social media can be a platform for cyberbullying. Therefore, I believe the negative effects outweigh the benefits."

**Opposition (AGAINST):**
"I understand your concerns, but I disagree. Social media helps teenagers stay connected with friends and family, especially those who live far away. Additionally, it can be a valuable tool for learning - many students use YouTube for homework help. While there are risks, I believe that with proper guidance, social media's benefits are greater than its harms."

**Response:**
"You make a fair point about connectivity. However, I would argue that the mental health risks are too serious to ignore. We need to find better ways to stay connected that don't come with these dangers."`,
    },
    {
      id: 'eng-7-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-7-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which phrase is the most polite way to disagree?',
        options: [
          { id: 'a', text: 'That\'s wrong.', isCorrect: false },
          { id: 'b', text: 'I see your point, but I think differently.', isCorrect: true },
          { id: 'c', text: 'No way!', isCorrect: false },
          { id: 'd', text: 'You don\'t know what you\'re talking about.', isCorrect: false },
        ],
        solution: 'B - "I see your point, but I think differently" acknowledges the other person while respectfully disagreeing.',
        hints: ['Polite disagreement shows you listened but have a different view'],
      },
    },
    {
      id: 'eng-7-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-7-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Match each phrase to its purpose:\n\n1. "I think that..."\n2. "For example,..."\n3. "I agree to some extent, but..."\n4. "Studies show that..."',
        subTasks: [
          { label: 'a', task: '"I think that..."', solution: 'Giving an opinion' },
          { label: 'b', task: '"For example,..."', solution: 'Giving an example' },
          { label: 'c', task: '"I agree to some extent, but..."', solution: 'Partly agreeing' },
          { label: 'd', task: '"Studies show that..."', solution: 'Using evidence' },
        ],
        solution: 'See sub-tasks',
        hints: ['Think about what comes after each phrase'],
      },
    },
    {
      id: 'eng-7-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-7-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Give your opinion on this statement: "Homework should be banned." Write 3-4 sentences using opinion phrases and supporting your view with a reason or example.',
        solution: `Example (for banning):
"In my opinion, homework should be banned, or at least reduced. This is because students already spend many hours at school, and they need time to relax and pursue hobbies. For example, I know many students who are stressed and tired because of homework. I believe learning should be enjoyable, not exhausting."

Example (against banning):
"I disagree that homework should be banned. From my point of view, homework helps students practice what they learn in class. For instance, doing math problems at home reinforces the skills taught by teachers. While I think there should be limits, I believe some homework is necessary."`,
        hints: ['Use phrases like "In my opinion," "I believe," "For example"'],
      },
    },
    {
      id: 'eng-7-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eng-7-4-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose a topic and write arguments for BOTH sides:\n\nTopics:\na) School should start later in the morning\nb) Everyone should learn to code\nc) Zoos should be closed\n\nWrite one argument for each side, with supporting evidence or examples.',
        solution: `Example for topic (a):

**FOR starting later:**
"I believe school should start later in the morning because teenagers need more sleep. Research shows that teens' body clocks are naturally set to stay up later and wake later. For example, studies by sleep scientists found that when schools start later, students are more alert and get better grades."

**AGAINST starting later:**
"However, there are valid reasons to keep current school hours. If school starts later, it would end later, interfering with after-school activities and parents' work schedules. Additionally, early starts prepare students for the working world, where many jobs begin at 8 or 9 AM."`,
        hints: ['Try to think of the strongest argument for each side, even if you personally agree with one'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_7_4_2: TextbookChapter = {
  id: 'engelsk-7-4-2',
  courseId: 'engelsk-7',
  chapterNumber: '4.2',
  title: 'English-Speaking World: Culture',
  description: 'Explore culture and traditions in the USA, UK, Australia, and other English-speaking countries.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['understand cultural differences in English-speaking countries', 'compare cultures'],
  content: [
    {
      id: 'eng-7-4-2-intro',
      type: 'text',
      content: `## The English-Speaking World

English is spoken as a first language in many countries, and each has its own unique culture, traditions, and way of life. Understanding these cultures helps you communicate better and appreciate diversity.

**English is a first language in:**
- United Kingdom (UK)
- United States (USA)
- Canada
- Australia
- New Zealand
- Ireland
- And many more!`,
    },
    {
      id: 'eng-7-4-2-def-uk',
      type: 'definition',
      title: 'United Kingdom: Culture and Traditions',
      content: `**The United Kingdom** includes England, Scotland, Wales, and Northern Ireland.

**Cultural highlights:**
- **Royal Family:** The monarchy is a symbol of British tradition
- **Afternoon Tea:** A traditional British custom
- **Football (Soccer):** The most popular sport
- **Guy Fawkes Night:** November 5th - fireworks and bonfires
- **Politeness:** British culture values politeness and queuing (standing in line)

**British English vs. American English:**
| British | American |
|---------|----------|
| colour | color |
| flat | apartment |
| lift | elevator |
| football | soccer |
| chips | fries |
| biscuit | cookie |`,
    },
    {
      id: 'eng-7-4-2-def-usa',
      type: 'definition',
      title: 'United States: Culture and Traditions',
      content: `**The United States** is known for its diversity and cultural influence worldwide.

**Cultural highlights:**
- **Melting pot:** People from all over the world make up American society
- **Thanksgiving:** Fourth Thursday in November - family, food, and gratitude
- **Independence Day (July 4th):** Fireworks, BBQs, and patriotism
- **Sports:** American football, basketball, baseball
- **Hollywood:** The center of the film industry
- **Fast food culture:** Many famous chains originated here

**Regional differences:**
- New York (East Coast): Fast-paced city life
- California (West Coast): Beaches, tech industry
- Texas (South): Cowboys, BBQ, big spaces
- Midwest: Farms, friendly people`,
    },
    {
      id: 'eng-7-4-2-def-australia',
      type: 'definition',
      title: 'Australia: Culture and Traditions',
      content: `**Australia** is known for its unique wildlife and laid-back culture.

**Cultural highlights:**
- **Indigenous culture:** The Aboriginal people have the world's oldest living culture (50,000+ years)
- **Wildlife:** Kangaroos, koalas, platypuses, and many dangerous animals!
- **Beach culture:** Surfing and outdoor activities
- **BBQs (Barbies):** A national pastime
- **Anzac Day (April 25):** Remembering soldiers
- **Christmas in summer:** December is hot in Australia!

**Australian slang:**
| Australian | Meaning |
|------------|---------|
| G'day | Hello |
| Arvo | Afternoon |
| Mate | Friend |
| No worries | It's okay |
| Barbie | BBQ |`,
    },
    {
      id: 'eng-7-4-2-def-canada',
      type: 'definition',
      title: 'Canada: Culture and Traditions',
      content: `**Canada** is officially bilingual (English and French).

**Cultural highlights:**
- **Multiculturalism:** Canada celebrates diversity
- **Maple syrup:** A national symbol and product
- **Ice hockey:** The most popular sport
- **Canadian Thanksgiving:** Second Monday in October
- **Politeness:** Canadians are famous for saying "sorry"
- **Nature:** Vast wilderness, mountains, and Northern Lights

**Did you know?**
- Canada has the longest coastline in the world
- The name "Canada" comes from the indigenous word "Kanata" meaning village`,
    },
    {
      id: 'eng-7-4-2-note',
      type: 'note',
      title: 'Comparing Cultures',
      content: `**When learning about different cultures:**

**DO:**
- Be curious and open-minded
- Look for similarities AND differences
- Ask respectful questions
- Remember that cultures are complex

**DON'T:**
- Stereotype (assume everyone in a country is the same)
- Judge other cultures as "better" or "worse"
- Assume your own culture is "normal" and others are "strange"

**Comparing cultures helps us:**
- Understand different perspectives
- Appreciate our own culture
- Communicate better with people from different backgrounds
- Become more tolerant and open-minded`,
    },
    {
      id: 'eng-7-4-2-example-1',
      type: 'example',
      title: 'Example: Comparing School Systems',
      problem: 'How are schools different in the USA, UK, and Norway?',
      solution: `**USA:**
- Grades: Kindergarten through 12th grade (K-12)
- School year: August/September to May/June
- Sports are very important in schools
- Prom and graduation ceremonies are major events
- Many students eat lunch in a cafeteria

**UK:**
- Grades: Year 1 through Year 13
- Many schools have uniforms
- "A-levels" are important exams at age 18
- Houses system (like in Harry Potter!)
- "Half-term" breaks during the school year

**Norway:**
- 10-year basic education (barneskole + ungdomsskole)
- Less homework than USA/UK
- No school uniforms
- Focus on outdoor activities and practical skills
- More casual teacher-student relationships

**What do they have in common?**
All value education, have summer breaks, and prepare students for further study or work!`,
    },
    {
      id: 'eng-7-4-2-def-holidays',
      type: 'definition',
      title: 'Holidays and Celebrations',
      content: `**Major holidays in English-speaking countries:**

**Shared holidays:**
- Christmas (December 25)
- New Year's Day (January 1)
- Easter (March/April)

**USA specific:**
- Thanksgiving (4th Thursday in November)
- Independence Day (July 4)
- Halloween (October 31) - very popular!

**UK specific:**
- Guy Fawkes Night (November 5)
- Boxing Day (December 26)
- Bank holidays throughout the year

**Australia specific:**
- Australia Day (January 26)
- Anzac Day (April 25)

**Canada specific:**
- Canada Day (July 1)
- Victoria Day (May)`,
    },
    {
      id: 'eng-7-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-7-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'When is American Thanksgiving celebrated?',
        options: [
          { id: 'a', text: 'October 31', isCorrect: false },
          { id: 'b', text: 'Second Monday in October', isCorrect: false },
          { id: 'c', text: 'Fourth Thursday in November', isCorrect: true },
          { id: 'd', text: 'December 25', isCorrect: false },
        ],
        solution: 'C - American Thanksgiving is on the fourth Thursday in November.',
        hints: ['Canadian Thanksgiving is different from American Thanksgiving'],
      },
    },
    {
      id: 'eng-7-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-7-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Match the cultural element to the correct country:\n\n1. Maple syrup\n2. Afternoon tea\n3. Surfing and koalas\n4. Hollywood',
        subTasks: [
          { label: '1', task: 'Maple syrup', solution: 'Canada' },
          { label: '2', task: 'Afternoon tea', solution: 'United Kingdom' },
          { label: '3', task: 'Surfing and koalas', solution: 'Australia' },
          { label: '4', task: 'Hollywood', solution: 'United States' },
        ],
        solution: 'See sub-tasks',
        hints: ['Think about what each country is famous for'],
      },
    },
    {
      id: 'eng-7-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-7-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Translate from British English to American English (or vice versa):',
        subTasks: [
          { label: 'a', task: 'flat (British)', solution: 'apartment (American)' },
          { label: 'b', task: 'elevator (American)', solution: 'lift (British)' },
          { label: 'c', task: 'colour (British)', solution: 'color (American)' },
          { label: 'd', task: 'fries (American)', solution: 'chips (British)' },
        ],
        solution: 'See sub-tasks',
        hints: ['British and American English have different words for the same things'],
      },
    },
    {
      id: 'eng-7-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eng-7-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Compare and contrast! Choose one English-speaking country and compare it to Norway. Write about:\n- One similarity\n- One difference\n- One thing you would like to experience in that country',
        solution: `Example (comparing USA and Norway):

**Similarity:** Both Norway and the USA value outdoor activities. In Norway, people love hiking and skiing. In the USA, many people enjoy camping and national parks.

**Difference:** The school system is quite different. Norwegian schools rarely have uniforms and give less homework, while American schools often have sports teams, cheerleaders, and prom dances that are important parts of school life.

**What I would like to experience:** I would love to celebrate Thanksgiving in America. It seems fun to have a big family dinner with turkey, pie, and watching American football together.`,
        hints: ['Think about holidays, schools, food, sports, or daily life'],
      },
    },
    {
      id: 'eng-7-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eng-7-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Research project: Choose ONE English-speaking country (not covered in detail here) and find out:\n- Ireland\n- New Zealand\n- South Africa\n- Jamaica\n\nWrite 5-6 sentences about its culture, traditions, or unique features.',
        solution: `Example (New Zealand):

"New Zealand is a beautiful country in the South Pacific, southeast of Australia. The indigenous Maori people have lived there for over 1,000 years and their culture is an important part of New Zealand's identity. The country is famous for its stunning landscapes - it was used as the setting for the Lord of the Rings movies! New Zealanders, called 'Kiwis,' love rugby, especially their national team the All Blacks who perform a traditional Maori dance called the haka before matches. The country has unique wildlife, including the kiwi bird, which cannot fly. New Zealand is also known for being the first country to give women the right to vote in 1893."`,
        hints: ['Use the internet to research interesting facts about your chosen country'],
      },
    },
  ],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const ENGELSK_7_CHAPTERS: TextbookChapter[] = [
  // Chapter 1: Reading Longer Texts and Vocabulary Building
  CHAPTER_ENGELSK_7_1_1,
  CHAPTER_ENGELSK_7_1_2,
  // Chapter 2: Present Perfect, Future Tenses, Conditionals
  CHAPTER_ENGELSK_7_2_1,
  CHAPTER_ENGELSK_7_2_2,
  CHAPTER_ENGELSK_7_2_3,
  // Chapter 3: Essay Writing and Creative Writing
  CHAPTER_ENGELSK_7_3_1,
  CHAPTER_ENGELSK_7_3_2,
  // Chapter 4: Discussions, Debates, and English-Speaking World Culture
  CHAPTER_ENGELSK_7_4_1,
  CHAPTER_ENGELSK_7_4_2,
];
