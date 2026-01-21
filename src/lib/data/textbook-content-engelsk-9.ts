/**
 * Tekstbok innhold for Engelsk 9. klasse
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Bygger videre på 8. klasse med mer avanserte temaer og ferdigheter.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Advanced Reading - Critical Analysis
// ============================================================================

export const CHAPTER_ENGELSK_9_1_1: TextbookChapter = {
  id: 'engelsk-9-1-1',
  courseId: 'engelsk-9',
  chapterNumber: '1.1',
  title: 'Critical Reading and Analysis',
  description: 'Develop skills to read critically and analyze texts in depth.',
  estimatedMinutes: 50,
  competenceGoals: [
    'read, analyze and interpret English-language fiction and factual prose',
    'explore and describe ways of living, ways of thinking, communication patterns and diversity in the English-speaking world',
  ],
  content: [
    {
      id: 'eng-9-1-1-intro',
      type: 'text',
      content: `
# Critical Reading

**Critical reading** goes beyond understanding what a text says. It involves:
- Questioning the author's purpose
- Evaluating arguments and evidence
- Identifying bias and perspective
- Making connections to other texts and ideas

In 9th grade, you will develop these skills to become a more thoughtful reader.
      `,
    },
    {
      id: 'eng-9-1-1-def-1',
      type: 'definition',
      title: 'Author\'s Purpose',
      content: `Every text is written for a reason. The main purposes are:

**To Inform** - Give facts and information
- News articles, textbooks, encyclopedias

**To Persuade** - Change the reader's mind
- Advertisements, opinion pieces, speeches

**To Entertain** - Engage and amuse
- Novels, short stories, jokes

**To Instruct** - Teach how to do something
- Manuals, recipes, tutorials`,
    },
    {
      id: 'eng-9-1-1-text-2',
      type: 'text',
      content: `
## Identifying Bias

**Bias** is when an author favors one side of an issue. All texts have some bias - the author's perspective shapes what they write.

**Look for:**
- Loaded language (words with strong emotional impact)
- One-sided arguments (only presents one view)
- Missing information (what's left out?)
- Source selection (which experts are quoted?)

**Example of loaded language:**
- Neutral: "The politician changed his position."
- Biased (negative): "The politician flip-flopped."
- Biased (positive): "The politician showed flexibility."
      `,
    },
    {
      id: 'eng-9-1-1-def-2',
      type: 'definition',
      title: 'Fact vs. Opinion',
      content: `**Facts** can be proven true or false:
- "World War II ended in 1945."
- "Water freezes at 0°C."

**Opinions** express beliefs or judgments:
- "World War II was the most important event of the 20th century."
- "Winter is the worst season."

**Disguised opinions** look like facts:
- "Everyone knows that..."
- "It's obvious that..."
- "Studies show..." (which studies?)`,
    },
    {
      id: 'eng-9-1-1-example-1',
      type: 'example',
      title: 'Analyzing an Advertisement',
      problem: `Analyze this advertisement critically:

"9 out of 10 doctors recommend BrightSmile toothpaste for a whiter, healthier smile. Don't you want what's best for your family?"`,
      solution: `**Purpose:** To persuade you to buy the product

**Techniques used:**
- **Appeal to authority:** "9 out of 10 doctors" - makes it seem scientific
- **Vague claim:** How many doctors were asked? What exactly did they recommend?
- **Emotional appeal:** "best for your family" - plays on love and responsibility
- **Rhetorical question:** Makes you feel like the answer is obvious

**Questions to ask:**
- Who conducted this study? Was it the company itself?
- What does "recommend" actually mean?
- What about the 1 doctor who didn't recommend it?`,
    },
    {
      id: 'eng-9-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify facts and opinions:',
        subTasks: [
          {
            label: 'a',
            task: '"The Amazon rainforest covers approximately 5.5 million square kilometers."',
            solution: 'Fact - can be measured and verified',
            multipleChoiceOptions: [
              'Fact - can be measured and verified',
              'Opinion - personal judgment',
              'Disguised opinion',
              'Neither',
            ],
          },
          {
            label: 'b',
            task: '"The Amazon is the most beautiful place on Earth."',
            solution: 'Opinion - subjective judgment',
            multipleChoiceOptions: [
              'Opinion - subjective judgment',
              'Fact - can be proven',
              'Neither fact nor opinion',
              'Scientific statement',
            ],
          },
          {
            label: 'c',
            task: '"Everyone agrees that we need to protect the rainforest."',
            solution: 'Disguised opinion - "everyone agrees" is not true',
            multipleChoiceOptions: [
              'Disguised opinion - "everyone agrees" is not true',
              'Fact - it is true that everyone agrees',
              'Clear opinion with no disguise',
              'Scientific fact',
            ],
          },
        ],
        solution: 'Learning to distinguish facts from opinions is essential for critical reading.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Find an online article about a current topic. Analyze it critically:',
        subTasks: [
          {
            label: 'a',
            task: 'What is the author\'s purpose?',
            solution: 'Identify if the purpose is to inform, persuade, or entertain.',
          },
          {
            label: 'b',
            task: 'Can you identify any bias? Give examples.',
            solution: 'Look for loaded language, one-sided arguments, or missing perspectives.',
          },
          {
            label: 'c',
            task: 'What evidence does the author use? Is it convincing?',
            solution: 'Evaluate the quality and relevance of the evidence presented.',
          },
        ],
        hints: ['Look at news from BBC, The Guardian, or similar sources', 'Check who wrote it and when'],
        solution: 'Critical analysis helps you become a more informed reader.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Literary Analysis
// ============================================================================

export const CHAPTER_ENGELSK_9_1_2: TextbookChapter = {
  id: 'engelsk-9-1-2',
  courseId: 'engelsk-9',
  chapterNumber: '1.2',
  title: 'Literary Analysis',
  description: 'Learn to analyze literature using key literary concepts and terminology.',
  estimatedMinutes: 50,
  competenceGoals: [
    'read, discuss and reflect on the content and language features in various types of texts, including self-chosen texts',
  ],
  content: [
    {
      id: 'eng-9-1-2-intro',
      type: 'text',
      content: `
# Analyzing Literature

Literature is more than just stories - it's a way to explore the human experience.
When we analyze literature, we look at:
- What the text says (content)
- How it says it (form and technique)
- What it means (interpretation)
      `,
    },
    {
      id: 'eng-9-1-2-def-1',
      type: 'definition',
      title: 'Literary Elements',
      content: `**Plot:** The sequence of events
- Exposition (introduction)
- Rising action (complications)
- Climax (turning point)
- Falling action (consequences)
- Resolution (ending)

**Setting:** Where and when the story takes place
- Physical location
- Time period
- Social environment

**Characters:** The people in the story
- Protagonist (main character)
- Antagonist (opposition)
- Dynamic (changes) vs. Static (stays the same)`,
    },
    {
      id: 'eng-9-1-2-def-2',
      type: 'definition',
      title: 'Theme and Symbolism',
      content: `**Theme:** The central message or insight about life
- Often about universal experiences: love, death, growing up, justice
- Not stated directly - you must infer it
- One text can have multiple themes

**Symbolism:** When something represents something else
- A dove might symbolize peace
- A storm might symbolize conflict
- Colors often have symbolic meaning (red = passion/danger)`,
    },
    {
      id: 'eng-9-1-2-text-2',
      type: 'text',
      content: `
## Point of View

**First person:** Narrator is a character ("I saw...")
- We see everything through one character's eyes
- May be unreliable

**Third person limited:** Follows one character ("She thought...")
- We know one character's thoughts

**Third person omniscient:** All-knowing narrator
- Can see into everyone's minds
- Knows past and future

**Second person:** Addresses the reader ("You walk into...")
- Rare, creates immediacy
      `,
    },
    {
      id: 'eng-9-1-2-def-3',
      type: 'definition',
      title: 'Literary Devices',
      content: `**Foreshadowing:** Hints about future events
- "Little did she know that this was the last peaceful day of her life."

**Flashback:** Scene from the past
- Reveals backstory or motivation

**Irony:** Contrast between expectation and reality
- *Verbal:* Saying the opposite of what you mean (sarcasm)
- *Situational:* When the outcome is opposite to expectations
- *Dramatic:* When the audience knows something characters don't`,
    },
    {
      id: 'eng-9-1-2-example-1',
      type: 'example',
      title: 'Analyzing a Short Passage',
      problem: `Analyze this passage from a short story:

"The old house stood at the end of the street, its windows like dark eyes watching the neighborhood. No one had lived there for years, but sometimes, late at night, a light would flicker in the attic window."`,
      solution: `**Setting:**
- An old, abandoned house
- Creates a spooky, mysterious atmosphere

**Literary devices:**
- **Personification:** Windows described as "dark eyes watching"
- **Foreshadowing:** The mysterious light suggests something strange will happen

**Effect:**
- Creates suspense and anticipation
- Makes the reader curious and slightly uneasy
- Sets up expectation of a mystery or supernatural element

**Questions to consider:**
- Why is no one living there?
- Who (or what) is turning on the light?
- What will happen when someone investigates?`,
    },
    {
      id: 'eng-9-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the literary device:',
        subTasks: [
          {
            label: 'a',
            task: '"The wind howled through the trees like a lonely wolf."',
            solution: 'Simile - comparison using "like"',
            multipleChoiceOptions: [
              'Simile - comparison using "like"',
              'Metaphor - direct comparison',
              'Personification - giving human qualities',
              'Irony - opposite meaning',
            ],
          },
          {
            label: 'b',
            task: '"Time is a thief that steals our youth."',
            solution: 'Metaphor - time is directly compared to a thief',
            multipleChoiceOptions: [
              'Metaphor - time is directly compared to a thief',
              'Simile - uses "like" or "as"',
              'Symbolism - represents something else',
              'Foreshadowing - hints at future events',
            ],
          },
          {
            label: 'c',
            task: 'A fire station burns down.',
            solution: 'Situational irony - the opposite of what you\'d expect',
            multipleChoiceOptions: [
              'Situational irony - the opposite of what you\'d expect',
              'Dramatic irony - audience knows more',
              'Verbal irony - saying the opposite',
              'Foreshadowing',
            ],
          },
        ],
        solution: 'Recognizing literary devices helps you understand how authors create meaning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Read a short story and write a literary analysis (300-400 words) that includes:',
        subTasks: [
          {
            label: 'a',
            task: 'A brief summary of the plot',
            solution: 'Summarize the main events in 2-3 sentences.',
          },
          {
            label: 'b',
            task: 'Analysis of one main character',
            solution: 'Describe the character and explain their significance.',
          },
          {
            label: 'c',
            task: 'Identification of the theme',
            solution: 'What message or insight does the story convey?',
          },
          {
            label: 'd',
            task: 'Analysis of at least two literary devices',
            solution: 'Show how the author uses specific techniques.',
          },
        ],
        hints: ['Use specific examples from the text', 'Explain WHY the author made these choices'],
        solution: 'A good literary analysis combines summary, interpretation, and evidence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: Poetry and Figurative Language
// ============================================================================

export const CHAPTER_ENGELSK_9_1_3: TextbookChapter = {
  id: 'engelsk-9-1-3',
  courseId: 'engelsk-9',
  chapterNumber: '1.3',
  title: 'Poetry and Figurative Language',
  description: 'Explore poetry and learn to understand and use figurative language.',
  estimatedMinutes: 45,
  competenceGoals: [
    'read, analyze and interpret English-language fiction and factual prose',
  ],
  content: [
    {
      id: 'eng-9-1-3-intro',
      type: 'text',
      content: `
# Understanding Poetry

Poetry uses language in creative ways to express ideas, emotions, and images.
Unlike prose, poetry often:
- Uses fewer words but more meaning
- Plays with sound and rhythm
- Uses figurative language extensively
- Breaks normal grammar rules
      `,
    },
    {
      id: 'eng-9-1-3-def-1',
      type: 'definition',
      title: 'Sound Devices in Poetry',
      content: `**Rhyme:** Words that sound alike
- *End rhyme:* at the end of lines (cat/hat)
- *Internal rhyme:* within a line

**Rhythm:** The beat or pattern of stressed syllables

**Alliteration:** Repetition of consonant sounds at the start
- "Peter Piper picked a peck of pickled peppers"

**Assonance:** Repetition of vowel sounds
- "The rain in Spain falls mainly on the plain"

**Onomatopoeia:** Words that sound like what they mean
- buzz, crash, whisper, murmur`,
    },
    {
      id: 'eng-9-1-3-def-2',
      type: 'definition',
      title: 'Figurative Language',
      content: `**Simile:** Comparison using "like" or "as"
- "She runs like the wind"

**Metaphor:** Direct comparison
- "Life is a journey"

**Personification:** Giving human qualities to non-human things
- "The sun smiled down on us"

**Hyperbole:** Extreme exaggeration
- "I've told you a million times"

**Oxymoron:** Contradictory terms together
- "deafening silence," "bittersweet"`,
    },
    {
      id: 'eng-9-1-3-example-1',
      type: 'example',
      title: 'Analyzing a Poem',
      problem: `Analyze this poem by Robert Frost:

**The Road Not Taken** (excerpt)

*Two roads diverged in a yellow wood,*
*And sorry I could not travel both*
*And be one traveler, long I stood*
*And looked down one as far as I could*
*To where it bent in the undergrowth;*`,
      solution: `**Form:**
- Rhyme scheme: ABAAB
- Regular rhythm creates a thoughtful, measured pace

**Imagery:**
- "yellow wood" - suggests autumn, change, perhaps the later stage of life
- "bent in the undergrowth" - the future is unclear, we can't see where choices lead

**Figurative language:**
- **Extended metaphor:** The roads represent choices in life
- The fork in the road = a decision point

**Theme:**
- The difficulty of making choices
- We can never know what would have happened if we chose differently

**Tone:** Reflective, slightly melancholic`,
    },
    {
      id: 'eng-9-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the figurative language:',
        subTasks: [
          {
            label: 'a',
            task: '"Her smile was a ray of sunshine on a cloudy day."',
            solution: 'Metaphor - her smile is directly compared to sunshine',
            multipleChoiceOptions: [
              'Metaphor - direct comparison',
              'Simile - uses "like" or "as"',
              'Personification',
              'Hyperbole',
            ],
          },
          {
            label: 'b',
            task: '"I\'m so hungry I could eat a horse."',
            solution: 'Hyperbole - extreme exaggeration',
            multipleChoiceOptions: [
              'Hyperbole - extreme exaggeration',
              'Metaphor',
              'Literal statement',
              'Personification',
            ],
          },
          {
            label: 'c',
            task: '"The autumn leaves danced in the wind."',
            solution: 'Personification - leaves cannot really dance',
            multipleChoiceOptions: [
              'Personification - leaves given human action',
              'Simile',
              'Hyperbole',
              'Oxymoron',
            ],
          },
        ],
        solution: 'Figurative language makes writing more vivid and interesting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write your own poem (10-15 lines) about a season or a place. Include:',
        subTasks: [
          {
            label: 'a',
            task: 'At least one simile',
            solution: 'A comparison using "like" or "as"',
          },
          {
            label: 'b',
            task: 'At least one metaphor',
            solution: 'A direct comparison',
          },
          {
            label: 'c',
            task: 'At least one example of alliteration',
            solution: 'Repetition of consonant sounds',
          },
          {
            label: 'd',
            task: 'Vivid imagery that appeals to at least two senses',
            solution: 'Describe what you see, hear, smell, feel, or taste',
          },
        ],
        hints: ['Focus on specific details', 'Read your poem aloud to check the rhythm'],
        solution: 'Writing poetry helps you understand how poets use language creatively.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.1: Essay Writing
// ============================================================================

export const CHAPTER_ENGELSK_9_2_1: TextbookChapter = {
  id: 'engelsk-9-2-1',
  courseId: 'engelsk-9',
  chapterNumber: '2.1',
  title: 'Essay Writing',
  description: 'Learn to write well-structured essays with clear arguments and evidence.',
  estimatedMinutes: 55,
  competenceGoals: [
    'write different types of texts with structure and cohesion adapted to the purpose, recipient and situation',
  ],
  content: [
    {
      id: 'eng-9-2-1-intro',
      type: 'text',
      content: `
# The Five-Paragraph Essay

The five-paragraph essay is a classic structure for argumentative and expository writing.
It consists of:
1. Introduction with thesis statement
2. Body paragraph 1
3. Body paragraph 2
4. Body paragraph 3
5. Conclusion

This structure helps you organize your ideas clearly and logically.
      `,
    },
    {
      id: 'eng-9-2-1-def-1',
      type: 'definition',
      title: 'The Introduction',
      content: `A good introduction has three parts:

**Hook:** Grab the reader's attention
- Start with a surprising fact, question, or quote

**Background:** Give context
- Provide information the reader needs

**Thesis statement:** Your main argument
- States your position clearly
- Usually the last sentence of the introduction
- Example: "Social media has more negative effects on teenagers than positive ones."`,
    },
    {
      id: 'eng-9-2-1-def-2',
      type: 'definition',
      title: 'Body Paragraphs',
      content: `Each body paragraph should follow the **PEEL** structure:

**P - Point:** State your argument in one sentence
- "First, social media increases anxiety among teens."

**E - Evidence:** Support with facts, examples, or quotes
- "According to a 2023 study, 67% of teens report feeling anxious after using Instagram."

**E - Explanation:** Explain how the evidence supports your point
- "This shows that the constant comparison to others' highlight reels damages mental health."

**L - Link:** Connect back to your thesis or to the next paragraph
- "This anxiety is just one of the negative effects of social media."`,
    },
    {
      id: 'eng-9-2-1-text-2',
      type: 'text',
      content: `
## The Conclusion

A strong conclusion does NOT just repeat the introduction.

**What to include:**
- Restate your thesis in different words
- Summarize your main points briefly
- End with a final thought (prediction, call to action, or broader implication)

**What to avoid:**
- "In conclusion..." or "To summarize..." (too obvious)
- Introducing new arguments
- Apologizing for your opinion ("This is just my view...")
      `,
    },
    {
      id: 'eng-9-2-1-def-3',
      type: 'definition',
      title: 'Transition Words',
      content: `**To add ideas:**
- Furthermore, Moreover, In addition, Additionally

**To contrast:**
- However, On the other hand, Nevertheless, Although

**To give examples:**
- For example, For instance, Specifically, Such as

**To show cause/effect:**
- Therefore, Consequently, As a result, Because

**To conclude:**
- In summary, Overall, Ultimately, To conclude`,
    },
    {
      id: 'eng-9-2-1-example-1',
      type: 'example',
      title: 'Example Introduction',
      problem: `Write an introduction for an essay about school uniforms.`,
      solution: `**Hook:**
Every morning, millions of students around the world face the same question: "What should I wear today?"

**Background:**
The debate over school uniforms has been ongoing for decades, with strong opinions on both sides. Some argue uniforms promote equality, while others believe they suppress individuality.

**Thesis statement:**
School uniforms should be mandatory in public schools because they reduce bullying, improve focus on learning, and decrease financial pressure on families.

**Why this works:**
- The hook is relatable and engaging
- The background acknowledges different views
- The thesis is clear and previews three arguments`,
    },
    {
      id: 'eng-9-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Write a thesis statement for each topic:',
        subTasks: [
          {
            label: 'a',
            task: 'Should schools ban phones during class?',
            solution: 'Example: "Schools should ban phones during class because they distract students, enable cheating, and disrupt the learning environment."',
          },
          {
            label: 'b',
            task: 'Is homework helpful or harmful?',
            solution: 'Example: "While homework has some benefits, excessive homework harms students by causing stress, reducing family time, and not improving academic results."',
          },
        ],
        hints: ['Include your position AND your reasons', 'Be specific and debatable'],
        solution: 'A good thesis is specific, debatable, and previews your arguments.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write a body paragraph using the PEEL structure about this topic: "Video games can be educational."',
        subTasks: [
          {
            label: 'a',
            task: 'Point - State your argument',
            solution: 'One clear sentence stating the argument.',
          },
          {
            label: 'b',
            task: 'Evidence - Provide a specific example or fact',
            solution: 'A concrete example that supports the argument.',
          },
          {
            label: 'c',
            task: 'Explanation - Explain the connection',
            solution: 'How the evidence proves the point.',
          },
          {
            label: 'd',
            task: 'Link - Connect to your main argument',
            solution: 'A sentence that ties back to the thesis.',
          },
        ],
        hints: ['Think of specific games that teach skills', 'Use transition words'],
        solution: 'Following PEEL structure creates clear, well-supported paragraphs.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-9-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Write a complete five-paragraph essay (400-500 words) on one of these topics:',
        subTasks: [
          {
            label: 'a',
            task: '"Should the voting age be lowered to 16?"',
            solution: 'A well-structured essay with intro, three body paragraphs, and conclusion.',
          },
          {
            label: 'b',
            task: '"Are zoos good or bad for animals?"',
            solution: 'A well-structured essay with intro, three body paragraphs, and conclusion.',
          },
          {
            label: 'c',
            task: '"Should junk food be banned in schools?"',
            solution: 'A well-structured essay with intro, three body paragraphs, and conclusion.',
          },
        ],
        hints: ['Plan your three arguments before you start writing', 'Use transition words between paragraphs'],
        solution: 'Practice writing complete essays to develop your argumentative skills.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Creative Writing - Short Stories
// ============================================================================

export const CHAPTER_ENGELSK_9_2_2: TextbookChapter = {
  id: 'engelsk-9-2-2',
  courseId: 'engelsk-9',
  chapterNumber: '2.2',
  title: 'Creative Writing - Short Stories',
  description: 'Develop your creative writing skills by crafting engaging short stories.',
  estimatedMinutes: 50,
  competenceGoals: [
    'write creative texts inspired by texts you have read',
  ],
  content: [
    {
      id: 'eng-9-2-2-intro',
      type: 'text',
      content: `
# Writing Short Stories

A short story is a brief work of fiction with a limited cast of characters and a focused plot.
Good short stories:
- Start quickly and engage the reader immediately
- Focus on one main conflict or event
- Create memorable characters
- End with impact
      `,
    },
    {
      id: 'eng-9-2-2-def-1',
      type: 'definition',
      title: 'Story Elements',
      content: `**Setting:** Where and when
- Be specific: "a rainy Tuesday in November" not "one day"
- Use sensory details

**Characters:** Who
- Give them goals and flaws
- Show personality through actions and dialogue

**Conflict:** The problem
- Person vs. Person
- Person vs. Self
- Person vs. Nature
- Person vs. Society

**Plot:** What happens
- Rising action → Climax → Resolution`,
    },
    {
      id: 'eng-9-2-2-text-2',
      type: 'text',
      content: `
## Show, Don't Tell

One of the most important rules in creative writing is "show, don't tell."

**Telling:** She was nervous.
**Showing:** Her hands trembled as she reached for the door handle. She wiped her sweaty palms on her jeans for the third time.

**Telling:** He was angry.
**Showing:** He slammed his fist on the table, sending coffee splashing across the keyboard.

**Why showing is better:**
- Creates vivid pictures
- Engages the reader's imagination
- Feels more real and immediate
      `,
    },
    {
      id: 'eng-9-2-2-def-2',
      type: 'definition',
      title: 'Dialogue Tips',
      content: `**Make dialogue sound natural:**
- Use contractions ("don't" not "do not")
- Let characters interrupt each other
- Give each character a distinct voice

**Avoid "talking heads":**
- Add action between dialogue
- Show what characters are doing while talking

**Punctuation:**
- "Hello," she said. (comma inside)
- "Hello!" she exclaimed.
- "Are you coming?" he asked.

**Said is not dead:**
- Use "said" and "asked" most of the time
- Only use "exclaimed," "whispered," etc. when necessary`,
    },
    {
      id: 'eng-9-2-2-example-1',
      type: 'example',
      title: 'Strong Opening Lines',
      problem: `What makes a good opening line?`,
      solution: `**Example 1:**
"The letter arrived on a Tuesday, which should have been a warning."
- Creates mystery: What letter? Warning about what?

**Example 2:**
"My grandmother always said I would die doing something stupid, and standing at the edge of the cliff, I realized she might be right."
- Raises questions and creates tension immediately

**Example 3:**
"Before I found the diary, I thought I knew my mother."
- Suggests secrets and transformation

**What makes them work:**
- They create questions in the reader's mind
- They suggest conflict or change
- They make you want to read more`,
    },
    {
      id: 'eng-9-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Rewrite these "telling" sentences using "showing":',
        subTasks: [
          {
            label: 'a',
            task: '"She was scared."',
            solution: 'Example: "Her heart pounded in her chest. Every shadow seemed to move."',
          },
          {
            label: 'b',
            task: '"The house was old."',
            solution: 'Example: "The floorboards groaned with every step. Paint peeled from the walls like dead skin."',
          },
          {
            label: 'c',
            task: '"He was in love with her."',
            solution: 'Example: "He found himself looking at the door every time it opened, hoping to see her."',
          },
        ],
        hints: ['Use sensory details', 'Show through actions, not statements'],
        solution: 'Showing creates more vivid and engaging writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write a short story (500-700 words) using one of these opening lines:',
        subTasks: [
          {
            label: 'a',
            task: '"The phone call came at 3 AM, and nothing was ever the same."',
            solution: 'Complete story with clear conflict and resolution.',
          },
          {
            label: 'b',
            task: '"I wasn\'t supposed to be there, but curiosity had always been my weakness."',
            solution: 'Complete story with clear conflict and resolution.',
          },
          {
            label: 'c',
            task: '"My best friend kept a secret from me for three years, and I found out in the worst possible way."',
            solution: 'Complete story with clear conflict and resolution.',
          },
        ],
        hints: ['Focus on one main event', 'Use dialogue to bring characters to life', 'Remember: show, don\'t tell'],
        solution: 'A good short story has a clear beginning, middle, and end with one central conflict.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Grammar in Context - Advanced Structures
// ============================================================================

export const CHAPTER_ENGELSK_9_2_3: TextbookChapter = {
  id: 'engelsk-9-2-3',
  courseId: 'engelsk-9',
  chapterNumber: '2.3',
  title: 'Advanced Grammar',
  description: 'Master complex grammatical structures to improve your writing.',
  estimatedMinutes: 45,
  competenceGoals: [
    'use key patterns for sentences, verb forms, and text construction in communication',
  ],
  content: [
    {
      id: 'eng-9-2-3-intro',
      type: 'text',
      content: `
# Advanced Grammar Structures

In 9th grade, you will learn more complex grammar that helps you express nuanced ideas.
This includes:
- Conditionals (if-sentences)
- Passive voice
- Reported speech
- Relative clauses
      `,
    },
    {
      id: 'eng-9-2-3-def-1',
      type: 'definition',
      title: 'Conditionals',
      content: `**Zero conditional:** General truths
- If + present, present
- "If you heat water to 100°C, it boils."

**First conditional:** Real possibilities (future)
- If + present, will + verb
- "If it rains tomorrow, we will stay inside."

**Second conditional:** Unreal/hypothetical (present/future)
- If + past, would + verb
- "If I won the lottery, I would travel the world."

**Third conditional:** Unreal past
- If + past perfect, would have + past participle
- "If I had studied harder, I would have passed the exam."`,
    },
    {
      id: 'eng-9-2-3-example-1',
      type: 'example',
      title: 'Using Conditionals',
      problem: `Complete these conditional sentences:`,
      solution: `**Zero:** If you _____ (mix) yellow and blue, you get green.
**Answer:** If you **mix** yellow and blue, you get green.

**First:** If she _____ (study), she will pass.
**Answer:** If she **studies**, she will pass.

**Second:** If I _____ (be) taller, I would play basketball.
**Answer:** If I **were** taller, I would play basketball.
(Note: "were" is used for all persons in the second conditional)

**Third:** If they _____ (leave) earlier, they wouldn't have missed the bus.
**Answer:** If they **had left** earlier, they wouldn't have missed the bus.`,
    },
    {
      id: 'eng-9-2-3-def-2',
      type: 'definition',
      title: 'Passive Voice',
      content: `**Active:** The subject performs the action
- "Shakespeare wrote Hamlet."

**Passive:** The subject receives the action
- "Hamlet was written by Shakespeare."

**Form:** be + past participle (+ by + agent)

**When to use passive:**
- When the action is more important than who did it
- When we don't know who did it
- In formal or scientific writing

**Examples:**
- Active: Someone stole my bike.
- Passive: My bike was stolen. (we don't know who)`,
    },
    {
      id: 'eng-9-2-3-def-3',
      type: 'definition',
      title: 'Reported Speech',
      content: `When reporting what someone said, we usually shift the tense back:

**Present → Past:**
- Direct: "I am tired," she said.
- Reported: She said (that) she was tired.

**Past → Past Perfect:**
- Direct: "I saw him," he said.
- Reported: He said (that) he had seen him.

**Will → Would:**
- Direct: "I will help," she said.
- Reported: She said (that) she would help.

**Other changes:**
- "this" → "that"
- "here" → "there"
- "today" → "that day"`,
    },
    {
      id: 'eng-9-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose the correct conditional:',
        subTasks: [
          {
            label: 'a',
            task: 'If I _____ (have) more time, I would read more books.',
            solution: 'had (second conditional - hypothetical present)',
            multipleChoiceOptions: [
              'had',
              'have',
              'will have',
              'would have',
            ],
          },
          {
            label: 'b',
            task: 'If you heat ice, it _____ (melt).',
            solution: 'melts (zero conditional - general truth)',
            multipleChoiceOptions: [
              'melts',
              'will melt',
              'would melt',
              'melted',
            ],
          },
          {
            label: 'c',
            task: 'If I _____ (know) the answer, I would have told you.',
            solution: 'had known (third conditional - unreal past)',
            multipleChoiceOptions: [
              'had known',
              'knew',
              'know',
              'would know',
            ],
          },
        ],
        solution: 'Choosing the right conditional depends on how real or hypothetical the situation is.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Change these sentences to passive voice:',
        subTasks: [
          {
            label: 'a',
            task: 'Someone has stolen my phone.',
            solution: 'My phone has been stolen.',
          },
          {
            label: 'b',
            task: 'The chef is preparing dinner.',
            solution: 'Dinner is being prepared (by the chef).',
          },
          {
            label: 'c',
            task: 'They will announce the winner tomorrow.',
            solution: 'The winner will be announced tomorrow.',
          },
        ],
        hints: ['Use be + past participle', 'The object becomes the subject'],
        solution: 'Passive voice emphasizes the action rather than who performs it.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eng-9-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Change to reported speech:',
        subTasks: [
          {
            label: 'a',
            task: '"I am going to the cinema," he said.',
            solution: 'He said (that) he was going to the cinema.',
          },
          {
            label: 'b',
            task: '"We will meet tomorrow," she promised.',
            solution: 'She promised (that) they would meet the next day.',
          },
          {
            label: 'c',
            task: '"I have never been to Paris," he admitted.',
            solution: 'He admitted (that) he had never been to Paris.',
          },
        ],
        hints: ['Shift the tense back one step', 'Change time expressions as needed'],
        solution: 'Reported speech is common in storytelling and journalism.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.1: The English-Speaking World - USA
// ============================================================================

export const CHAPTER_ENGELSK_9_3_1: TextbookChapter = {
  id: 'engelsk-9-3-1',
  courseId: 'engelsk-9',
  chapterNumber: '3.1',
  title: 'The United States',
  description: 'Explore American history, culture, and society.',
  estimatedMinutes: 50,
  competenceGoals: [
    'explore and describe ways of living, ways of thinking, communication patterns and diversity in the English-speaking world',
  ],
  content: [
    {
      id: 'eng-9-3-1-intro',
      type: 'text',
      content: `
# The United States of America

The USA is a vast and diverse country with a unique history and culture that has influenced the entire world.

**Key facts:**
- Population: approximately 330 million
- 50 states
- Capital: Washington, D.C.
- Most populous state: California
- Language: English (no official language)
      `,
    },
    {
      id: 'eng-9-3-1-text-2',
      type: 'text',
      content: `
## American History Highlights

**1776:** Declaration of Independence
- Colonies declared freedom from Britain
- "All men are created equal"

**1861-1865:** Civil War
- Conflict over slavery
- Union (North) vs. Confederacy (South)
- Abolition of slavery (13th Amendment)

**1920s:** The Roaring Twenties
- Economic boom
- Jazz Age
- Women got the right to vote (1920)

**1950s-60s:** Civil Rights Movement
- Fight for equality for African Americans
- Martin Luther King Jr. and "I Have a Dream"
- Civil Rights Act (1964)
      `,
    },
    {
      id: 'eng-9-3-1-def-1',
      type: 'definition',
      title: 'The American Dream',
      content: `**The American Dream** is the belief that anyone can achieve success through hard work.

**Core ideas:**
- Opportunity for all
- Upward mobility
- Freedom to pursue happiness
- Self-made success

**Criticism:**
- Not everyone has equal opportunities
- Systemic barriers exist
- Gap between rich and poor growing
- Different starting points matter`,
    },
    {
      id: 'eng-9-3-1-text-3',
      type: 'text',
      content: `
## Cultural Diversity

The USA is often called a "melting pot" or "salad bowl" of cultures.

**Immigration history:**
- Native Americans (indigenous peoples)
- European settlers (1600s onwards)
- Enslaved Africans (1600s-1865)
- Asian immigration (1800s onwards)
- Latin American immigration (ongoing)

**Cultural contributions:**
- Music: Jazz, Blues, Rock & Roll, Hip Hop
- Film: Hollywood
- Literature: American writers like Mark Twain, Toni Morrison
- Food: Regional cuisines (Tex-Mex, Southern BBQ, etc.)
      `,
    },
    {
      id: 'eng-9-3-1-note-1',
      type: 'note',
      title: 'American English vs. British English',
      content: `**Spelling differences:**
| American | British |
|----------|---------|
| color | colour |
| center | centre |
| analyze | analyse |
| traveling | travelling |

**Vocabulary differences:**
| American | British |
|----------|---------|
| apartment | flat |
| elevator | lift |
| truck | lorry |
| vacation | holiday |
| sidewalk | pavement |`,
    },
    {
      id: 'eng-9-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test your knowledge of American history and culture:',
        subTasks: [
          {
            label: 'a',
            task: 'When did the United States declare independence?',
            solution: '1776',
            multipleChoiceOptions: [
              '1776',
              '1789',
              '1812',
              '1865',
            ],
          },
          {
            label: 'b',
            task: 'What was the Civil War primarily about?',
            solution: 'Slavery and states\' rights',
            multipleChoiceOptions: [
              'Slavery and states\' rights',
              'Independence from Britain',
              'Native American rights',
              'Women\'s voting rights',
            ],
          },
          {
            label: 'c',
            task: 'Who said "I have a dream"?',
            solution: 'Martin Luther King Jr.',
            multipleChoiceOptions: [
              'Martin Luther King Jr.',
              'Abraham Lincoln',
              'John F. Kennedy',
              'Malcolm X',
            ],
          },
        ],
        solution: 'Understanding American history helps you understand American culture today.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Research and write about one aspect of American culture (300-400 words):',
        subTasks: [
          {
            label: 'a',
            task: 'Choose a topic: music, film, sports, food, or traditions.',
            solution: 'The topic is clearly defined.',
          },
          {
            label: 'b',
            task: 'Explain the history and development of this cultural element.',
            solution: 'Historical context is provided.',
          },
          {
            label: 'c',
            task: 'Discuss how it has influenced other countries, including Norway.',
            solution: 'Global and local influence is discussed.',
          },
        ],
        hints: ['Use reliable sources', 'Include specific examples'],
        solution: 'American culture has had enormous global influence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: The United Kingdom
// ============================================================================

export const CHAPTER_ENGELSK_9_3_2: TextbookChapter = {
  id: 'engelsk-9-3-2',
  courseId: 'engelsk-9',
  chapterNumber: '3.2',
  title: 'The United Kingdom',
  description: 'Discover the history, culture, and society of the UK.',
  estimatedMinutes: 45,
  competenceGoals: [
    'explore and describe ways of living, ways of thinking, communication patterns and diversity in the English-speaking world',
  ],
  content: [
    {
      id: 'eng-9-3-2-intro',
      type: 'text',
      content: `
# The United Kingdom

The United Kingdom consists of four countries:
- **England** - Capital: London
- **Scotland** - Capital: Edinburgh
- **Wales** - Capital: Cardiff
- **Northern Ireland** - Capital: Belfast

The UK is not the same as Great Britain (England, Scotland, Wales only) or the British Isles (UK + Ireland).
      `,
    },
    {
      id: 'eng-9-3-2-text-2',
      type: 'text',
      content: `
## British History Highlights

**1066:** Norman Conquest
- William the Conqueror invaded from France
- French influence on English language

**1500s-1600s:** Tudor Period
- Henry VIII and the Church of England
- Elizabeth I and the Golden Age
- Shakespeare wrote his plays

**1800s:** Victorian Era
- Queen Victoria (1837-1901)
- Industrial Revolution
- British Empire at its height

**1900s:** World Wars to Modern Day
- Two World Wars weakened the Empire
- Decolonization
- EU membership and Brexit (2020)
      `,
    },
    {
      id: 'eng-9-3-2-def-1',
      type: 'definition',
      title: 'The British Empire',
      content: `At its peak, the British Empire was the largest in history.

**What it was:**
- Controlled about 25% of the world's land
- "The sun never sets on the British Empire"
- Spread English language globally

**Legacy:**
- English as a world language
- Commonwealth of Nations
- Complex history of colonialism
- Continuing debates about imperialism`,
    },
    {
      id: 'eng-9-3-2-text-3',
      type: 'text',
      content: `
## British Culture and Identity

**Each country has its own identity:**

**England:**
- Big Ben, Buckingham Palace
- Cricket, football
- Tea culture

**Scotland:**
- Highlands, castles
- Bagpipes, kilts
- Whisky

**Wales:**
- Welsh language (Cymraeg)
- Rugby
- Male voice choirs

**Northern Ireland:**
- Complex history with Republic of Ireland
- Giant's Causeway
- Diverse cultural traditions
      `,
    },
    {
      id: 'eng-9-3-2-note-1',
      type: 'note',
      title: 'Multiculturalism in the UK',
      content: `The UK is a multicultural society:

**Post-WWII immigration:**
- Caribbean immigration (Windrush generation)
- South Asian communities
- European migration

**Today:**
- London is one of the world's most diverse cities
- Multiple religions and languages
- British identity includes many cultures

**Discussions:**
- What does it mean to be British?
- Integration vs. multiculturalism
- Effects of Brexit on immigration`,
    },
    {
      id: 'eng-9-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Test your knowledge of the UK:',
        subTasks: [
          {
            label: 'a',
            task: 'How many countries make up the United Kingdom?',
            solution: '4 (England, Scotland, Wales, Northern Ireland)',
            multipleChoiceOptions: [
              '4 (England, Scotland, Wales, Northern Ireland)',
              '3 (England, Scotland, Wales)',
              '2 (England and Scotland)',
              '5 (including Ireland)',
            ],
          },
          {
            label: 'b',
            task: 'Which language is spoken in Wales alongside English?',
            solution: 'Welsh (Cymraeg)',
            multipleChoiceOptions: [
              'Welsh (Cymraeg)',
              'Scottish Gaelic',
              'Irish',
              'French',
            ],
          },
          {
            label: 'c',
            task: 'What was the British Empire?',
            solution: 'The collection of territories ruled by Britain, the largest empire in history',
            multipleChoiceOptions: [
              'The collection of territories ruled by Britain, the largest empire in history',
              'A building in London',
              'A political party',
              'A type of government',
            ],
          },
        ],
        solution: 'The UK has a rich and complex history that continues to shape its identity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare the UK and Norway (300-400 words):',
        subTasks: [
          {
            label: 'a',
            task: 'What similarities do the two countries share?',
            solution: 'Consider: monarchy, welfare state, oil industry, Nordic/European identity.',
          },
          {
            label: 'b',
            task: 'What are the main differences?',
            solution: 'Consider: EU membership, population, history, geography.',
          },
          {
            label: 'c',
            task: 'What can the countries learn from each other?',
            solution: 'Personal reflection based on research.',
          },
        ],
        hints: ['Think about government, culture, and history', 'Consider both historical and current differences'],
        solution: 'Comparing countries helps us understand both better.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Global Issues
// ============================================================================

export const CHAPTER_ENGELSK_9_3_3: TextbookChapter = {
  id: 'engelsk-9-3-3',
  courseId: 'engelsk-9',
  chapterNumber: '3.3',
  title: 'Global Issues',
  description: 'Explore and discuss important global challenges using English.',
  estimatedMinutes: 50,
  competenceGoals: [
    'explore and describe ways of living, ways of thinking, communication patterns and diversity in the English-speaking world',
    'express oneself in a nuanced way about complex topics',
  ],
  content: [
    {
      id: 'eng-9-3-3-intro',
      type: 'text',
      content: `
# Global Issues

In a connected world, problems in one country affect others. Understanding global issues helps you become a responsible global citizen.

**The UN Sustainable Development Goals (SDGs)** outline 17 goals to transform our world by 2030, including:
- No Poverty
- Quality Education
- Climate Action
- Reduced Inequalities
      `,
    },
    {
      id: 'eng-9-3-3-def-1',
      type: 'definition',
      title: 'Climate Change',
      content: `**What is it?**
- Long-term changes in global temperatures and weather patterns
- Primarily caused by burning fossil fuels

**Effects:**
- Rising sea levels
- More extreme weather
- Biodiversity loss
- Food and water insecurity

**What can be done?**
- Reduce emissions
- Renewable energy
- International agreements (Paris Agreement)
- Individual choices`,
    },
    {
      id: 'eng-9-3-3-text-2',
      type: 'text',
      content: `
## Human Rights

**Universal Declaration of Human Rights (1948):**
- All humans are born free and equal
- Everyone has the right to life, liberty, and security
- No slavery or torture
- Freedom of thought, speech, and religion

**Challenges today:**
- Refugees and asylum seekers
- Gender inequality
- Child labor
- Press freedom
- Minority rights
      `,
    },
    {
      id: 'eng-9-3-3-def-2',
      type: 'definition',
      title: 'Inequality',
      content: `**Economic inequality:**
- Gap between rich and poor growing
- Different access to education, healthcare, opportunities

**Social inequality:**
- Discrimination based on gender, race, religion, etc.
- Barriers to participation

**Global inequality:**
- Developed vs. developing countries
- Access to resources
- Colonial legacy`,
    },
    {
      id: 'eng-9-3-3-text-3',
      type: 'text',
      content: `
## Expressing Opinions

When discussing global issues, use these expressions:

**Giving opinions:**
- In my opinion...
- I believe that...
- From my perspective...
- As I see it...

**Agreeing:**
- I completely agree.
- That's a good point.
- I see what you mean.

**Disagreeing politely:**
- I see your point, but...
- I'm not sure I agree because...
- That's one way to look at it, however...

**Asking for opinions:**
- What do you think about...?
- How do you feel about...?
- What's your view on...?
      `,
    },
    {
      id: 'eng-9-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose a global issue and prepare a short presentation (2-3 minutes):',
        subTasks: [
          {
            label: 'a',
            task: 'Explain what the issue is and why it matters.',
            solution: 'Clear explanation of the problem.',
          },
          {
            label: 'b',
            task: 'Describe what is being done to address it.',
            solution: 'Current solutions and initiatives.',
          },
          {
            label: 'c',
            task: 'Suggest what individuals can do to help.',
            solution: 'Practical actions for ordinary people.',
          },
          {
            label: 'd',
            task: 'Give your personal opinion on the issue.',
            solution: 'Well-reasoned personal perspective.',
          },
        ],
        hints: ['Use visual aids if presenting to class', 'Practice using opinion language'],
        solution: 'Discussing global issues helps develop both language skills and global awareness.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write a letter to a politician (300-400 words) about a global issue you care about:',
        subTasks: [
          {
            label: 'a',
            task: 'Introduce yourself and explain why you\'re writing.',
            solution: 'Clear introduction and purpose.',
          },
          {
            label: 'b',
            task: 'Explain the issue and why it matters to young people.',
            solution: 'Issue clearly explained with relevant perspective.',
          },
          {
            label: 'c',
            task: 'Suggest specific actions the politician could take.',
            solution: 'Concrete, realistic suggestions.',
          },
          {
            label: 'd',
            task: 'End with a polite call to action.',
            solution: 'Professional closing that encourages response.',
          },
        ],
        hints: ['Use formal language', 'Be specific about what you want them to do'],
        solution: 'Writing to politicians is a way to exercise your voice as a citizen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.1: Oral Communication
// ============================================================================

export const CHAPTER_ENGELSK_9_4_1: TextbookChapter = {
  id: 'engelsk-9-4-1',
  courseId: 'engelsk-9',
  chapterNumber: '4.1',
  title: 'Oral Presentations',
  description: 'Develop skills for giving effective oral presentations in English.',
  estimatedMinutes: 45,
  competenceGoals: [
    'express oneself fluently and coherently with a varied vocabulary adapted to the purpose, recipient and situation',
  ],
  content: [
    {
      id: 'eng-9-4-1-intro',
      type: 'text',
      content: `
# Giving Presentations

Public speaking is a crucial skill. Whether you're presenting to your class, a job interview, or a future career, being able to speak clearly and confidently matters.

This chapter will help you:
- Structure your presentation
- Engage your audience
- Handle nervousness
- Use visual aids effectively
      `,
    },
    {
      id: 'eng-9-4-1-def-1',
      type: 'definition',
      title: 'Presentation Structure',
      content: `**Introduction (10-15%)**
- Grab attention (question, story, fact)
- Introduce your topic
- Preview what you'll cover

**Body (70-80%)**
- Main points (usually 3)
- Examples and evidence
- Transitions between points

**Conclusion (10-15%)**
- Summarize main points
- End with impact
- Invite questions`,
    },
    {
      id: 'eng-9-4-1-text-2',
      type: 'text',
      content: `
## Delivery Tips

**Voice:**
- Speak clearly and at a moderate pace
- Vary your tone (don't be monotonous)
- Pause for effect
- Project your voice

**Body language:**
- Stand confidently
- Make eye contact
- Use gestures naturally
- Don't hide behind your notes

**Managing nerves:**
- Practice, practice, practice
- Breathe deeply before you start
- Focus on your message, not yourself
- Remember: the audience wants you to succeed
      `,
    },
    {
      id: 'eng-9-4-1-def-2',
      type: 'definition',
      title: 'Useful Presentation Language',
      content: `**Opening:**
- "Today I'm going to talk about..."
- "Have you ever wondered why...?"
- "Did you know that...?"

**Transitioning:**
- "Moving on to my next point..."
- "This brings me to..."
- "Now let's look at..."

**Giving examples:**
- "For example..."
- "Let me illustrate this with..."
- "A good example of this is..."

**Concluding:**
- "To sum up..."
- "In conclusion..."
- "Thank you for listening. Any questions?"`,
    },
    {
      id: 'eng-9-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Prepare and give a 3-5 minute presentation on a topic you\'re interested in:',
        subTasks: [
          {
            label: 'a',
            task: 'Choose a topic (hobby, book, film, place, issue, etc.).',
            solution: 'Topic is specific and interesting.',
          },
          {
            label: 'b',
            task: 'Create an outline with introduction, 3 main points, and conclusion.',
            solution: 'Clear structure with main points.',
          },
          {
            label: 'c',
            task: 'Prepare simple visual aids (slides or props).',
            solution: 'Visual aids support the presentation.',
          },
          {
            label: 'd',
            task: 'Practice at least 3 times before presenting.',
            solution: 'Practice improves delivery.',
          },
        ],
        hints: ['Time yourself', 'Record yourself and watch it back'],
        solution: 'Good presentations require planning and practice.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Debates and Discussions
// ============================================================================

export const CHAPTER_ENGELSK_9_4_2: TextbookChapter = {
  id: 'engelsk-9-4-2',
  courseId: 'engelsk-9',
  chapterNumber: '4.2',
  title: 'Debates and Discussions',
  description: 'Learn to participate effectively in debates and discussions.',
  estimatedMinutes: 45,
  competenceGoals: [
    'express oneself fluently and coherently with a varied vocabulary adapted to the purpose, recipient and situation',
    'participate in conversations about society and working life and discuss advantages and challenges',
  ],
  content: [
    {
      id: 'eng-9-4-2-intro',
      type: 'text',
      content: `
# Debating Skills

A debate is a structured argument where two sides present opposing views. Good debating skills help you:
- Organize your thoughts
- Listen to others
- Respond to criticism
- Persuade an audience
      `,
    },
    {
      id: 'eng-9-4-2-def-1',
      type: 'definition',
      title: 'Debate Structure',
      content: `**Proposition (For):**
- Supports the motion
- Goes first
- Must prove the motion is true

**Opposition (Against):**
- Argues against the motion
- Responds to proposition's arguments
- Must show why the motion is false

**Rebuttal:**
- Direct response to opponent's arguments
- "My opponent claims... but..."

**Summary:**
- Restate your main points
- Explain why your side won`,
    },
    {
      id: 'eng-9-4-2-text-2',
      type: 'text',
      content: `
## Debate Language

**Making arguments:**
- "Our position is that..."
- "We argue that..."
- "The evidence clearly shows..."

**Responding to opponents:**
- "My opponent argues that..., however..."
- "While this may seem true, in fact..."
- "This argument fails to consider..."

**Giving evidence:**
- "According to research..."
- "Statistics show that..."
- "For example, in [country/case]..."

**Concluding:**
- "For all these reasons..."
- "The case is clear..."
- "We urge you to support/reject this motion."
      `,
    },
    {
      id: 'eng-9-4-2-def-2',
      type: 'definition',
      title: 'Logical Fallacies to Avoid',
      content: `**Ad hominem:** Attacking the person, not the argument
- "You're wrong because you're too young to understand."

**Straw man:** Misrepresenting the opponent's argument
- Making their position sound worse than it is

**False dichotomy:** Only two options when more exist
- "Either we ban it completely or allow everything."

**Appeal to emotion:** Using feelings instead of logic
- Can be effective but shouldn't replace evidence

**Slippery slope:** Claiming extreme consequences without proof
- "If we allow X, then Y will definitely happen."`,
    },
    {
      id: 'eng-9-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eng-9-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Prepare arguments for both sides of one of these debate topics:',
        subTasks: [
          {
            label: 'a',
            task: 'Topic: "Social media does more harm than good for teenagers."',
            solution: 'Strong arguments for both proposition and opposition.',
          },
          {
            label: 'b',
            task: 'Write 3 arguments FOR the motion.',
            solution: 'Three clear arguments supporting the motion.',
          },
          {
            label: 'c',
            task: 'Write 3 arguments AGAINST the motion.',
            solution: 'Three clear arguments opposing the motion.',
          },
          {
            label: 'd',
            task: 'Prepare rebuttals for each side.',
            solution: 'Responses to opponent\'s likely arguments.',
          },
        ],
        hints: ['Think of evidence for each argument', 'Consider what the other side will say'],
        solution: 'Being able to argue both sides helps you understand issues better.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-9-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eng-9-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Participate in a class debate on one of these topics:',
        subTasks: [
          {
            label: 'a',
            task: '"Schools should have a four-day week."',
            solution: 'Participate with clear arguments and rebuttals.',
          },
          {
            label: 'b',
            task: '"Homework should be banned."',
            solution: 'Participate with clear arguments and rebuttals.',
          },
          {
            label: 'c',
            task: '"All young people should do community service."',
            solution: 'Participate with clear arguments and rebuttals.',
          },
        ],
        hints: ['Listen carefully to opponents', 'Take notes during the debate', 'Be respectful even when disagreeing'],
        solution: 'Debating develops critical thinking and communication skills.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const ENGELSK_9_CHAPTERS = [
  CHAPTER_ENGELSK_9_1_1,
  CHAPTER_ENGELSK_9_1_2,
  CHAPTER_ENGELSK_9_1_3,
  CHAPTER_ENGELSK_9_2_1,
  CHAPTER_ENGELSK_9_2_2,
  CHAPTER_ENGELSK_9_2_3,
  CHAPTER_ENGELSK_9_3_1,
  CHAPTER_ENGELSK_9_3_2,
  CHAPTER_ENGELSK_9_3_3,
  CHAPTER_ENGELSK_9_4_1,
  CHAPTER_ENGELSK_9_4_2,
];
