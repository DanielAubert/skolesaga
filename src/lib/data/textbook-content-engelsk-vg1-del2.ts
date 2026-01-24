/**
 * Tekstbok innhold for Engelsk VG1 DEL 2
 * Section 3: Grammar and Text Structure (3.1-3.4)
 * Section 4: Reading and Literature (4.1-4.5)
 *
 * Dekker LK20 kompetansemål for ENG01-05.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SECTION 3: Grammar and Text Structure
// ============================================================================

export const CHAPTER_ENGELSK_VG1_3_1: TextbookChapter = {
  id: 'engelsk-vg1-3-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '3.1',
  title: 'Advanced Grammar Review',
  description: 'Review and master advanced English grammar structures.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke kunnskap om grammatikk og tekstoppbygging i arbeid med egne muntlige og skriftlige tekster'],
  content: [
    {
      id: 'engelsk-vg1-3-1-intro',
      type: 'text',
      content: `## Mastering English Grammar

At VG1 level, you should be comfortable with basic grammar and ready to refine your understanding of more complex structures.

**Why Grammar Matters:**
- Enables clear, precise communication
- Affects how professional you sound
- Helps you express complex ideas
- Improves reading comprehension

**Key Areas for VG1:**
1. Verb tenses and aspect
2. Conditional sentences
3. Passive voice
4. Reported speech
5. Complex sentence structures`,
    },
    {
      id: 'engelsk-vg1-3-1-def-1',
      type: 'definition',
      title: 'Tense Review: Perfect vs Simple',
      content: `**Present Perfect vs Past Simple:**

**Present Perfect (have/has + past participle)**
- Connection to now: "I have lived here for 5 years" (still living here)
- Unspecified time: "I have been to London" (sometime before now)
- Recent events with results now: "She has broken her leg" (it's still broken)

**Past Simple**
- Finished action at specific time: "I lived in Oslo in 2019"
- Specified time: "I went to London last year"
- Completed sequence: "She broke her leg, went to hospital, and got a cast"

**Key signal words:**
- Present Perfect: already, yet, ever, never, recently, so far, since, for
- Past Simple: yesterday, last week, in 2020, ago, when I was young`,
    },
    {
      id: 'engelsk-vg1-3-1-def-2',
      type: 'definition',
      title: 'Conditional Sentences',
      content: `**Zero Conditional (general truths)**
If + present, present
"If water reaches 100°C, it boils."

**First Conditional (real/likely future)**
If + present, will + infinitive
"If it rains tomorrow, we will stay inside."

**Second Conditional (unreal/hypothetical present/future)**
If + past, would + infinitive
"If I won the lottery, I would travel the world."
"If I were you, I would study harder." (subjunctive 'were')

**Third Conditional (unreal past)**
If + past perfect, would have + past participle
"If I had studied harder, I would have passed the exam."

**Mixed Conditional (past condition, present result)**
If + past perfect, would + infinitive
"If I had learned English as a child, I would speak it fluently now."`,
    },
    {
      id: 'engelsk-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose the correct tense (Present Perfect or Past Simple):',
        subTasks: [
          { label: 'a', task: 'I (have visited / visited) Paris three times in my life.', solution: 'have visited (unspecified time, experience)' },
          { label: 'b', task: 'She (has moved / moved) to Bergen last month.', solution: 'moved (specific time: last month)' },
          { label: 'c', task: 'We (have not finished / did not finish) the project yet.', solution: 'have not finished (yet = up to now)' },
          { label: 'd', task: 'The Vikings (have invaded / invaded) England in 793.', solution: 'invaded (specific historical date)' },
        ],
        solution: 'a) have visited, b) moved, c) have not finished, d) invaded',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Complete these conditional sentences with the correct verb form:',
        subTasks: [
          { label: 'a', task: 'If I (be) _______ you, I would apologize.', solution: 'were' },
          { label: 'b', task: 'If it rains, we (cancel) _______ the picnic.', solution: 'will cancel' },
          { label: 'c', task: 'If she (study) _______ harder, she would have passed.', solution: 'had studied' },
          { label: 'd', task: 'If you heat ice, it (melt) _______.', solution: 'melts' },
        ],
        solution: 'a) were, b) will cancel, c) had studied, d) melts',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_3_2: TextbookChapter = {
  id: 'engelsk-vg1-3-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '3.2',
  title: 'Sentence Structure and Variety',
  description: 'Learn to vary sentence structure for more engaging writing.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke kunnskap om grammatikk og tekstoppbygging i arbeid med egne muntlige og skriftlige tekster'],
  content: [
    {
      id: 'engelsk-vg1-3-2-intro',
      type: 'text',
      content: `## Creating Varied Sentences

Monotonous sentence structure makes writing dull. Varying your sentences creates rhythm and keeps readers engaged.

**The Problem with Repetitive Structure:**
"I went to school. I saw my friends. We had lunch. We went to class. The class was boring."

**Improved with Variety:**
"After arriving at school, I met up with my friends for lunch. Although we enjoyed catching up, the afternoon class proved rather boring."`,
    },
    {
      id: 'engelsk-vg1-3-2-def-1',
      type: 'definition',
      title: 'Clause Types',
      content: `**Independent Clause:**
Can stand alone as a sentence.
"The sun was shining."

**Dependent (Subordinate) Clause:**
Cannot stand alone; needs an independent clause.
"Although the sun was shining, it was cold."

**Types of Dependent Clauses:**

**Adverbial Clause** (tells when, where, why, how)
- Although, because, when, while, if, unless, since, before, after
- "When the bell rang, we left."

**Relative Clause** (describes a noun)
- who, which, that, whose, where, when
- "The book that I read was fascinating."

**Noun Clause** (acts as a noun)
- that, what, whether, how, why
- "What she said surprised me."`,
    },
    {
      id: 'engelsk-vg1-3-2-def-2',
      type: 'definition',
      title: 'Sentence Combining Techniques',
      content: `**1. Use coordinating conjunctions (FANBOYS):**
For, And, Nor, But, Or, Yet, So
"I studied hard, so I passed the exam."

**2. Use subordinating conjunctions:**
Although, because, when, while, if, unless
"Although I studied hard, I still felt nervous."

**3. Use semicolons:**
"I love reading; my sister prefers watching films."

**4. Use relative clauses:**
"The teacher who taught us English retired last year."

**5. Use participle phrases:**
"Exhausted from studying, I fell asleep immediately."
"The book, written in 1984, remains relevant today."

**6. Use appositives:**
"My neighbor, a retired doctor, helped me."`,
    },
    {
      id: 'engelsk-vg1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Combine each pair of sentences using the technique indicated:',
        subTasks: [
          { label: 'a', task: 'The movie was long. It was entertaining. (Use "but")', solution: 'The movie was long, but it was entertaining.' },
          { label: 'b', task: 'She finished her homework. She went to bed. (Use "After")', solution: 'After she finished her homework, she went to bed.' },
          { label: 'c', task: 'The book is on the table. I bought the book yesterday. (Use relative clause)', solution: 'The book that/which I bought yesterday is on the table.' },
          { label: 'd', task: 'He was tired from the journey. He went straight to bed. (Use participle phrase)', solution: 'Tired from the journey, he went straight to bed.' },
        ],
        solution: 'Each technique creates different emphasis and rhythm.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Rewrite this paragraph to vary the sentence structure. The original uses only simple sentences:\n\n"I woke up early. I felt tired. I made coffee. The coffee was strong. I drank it quickly. I felt better. I started my homework. The homework was difficult. I finished it anyway."',
        hints: ['Combine some sentences', 'Use different conjunctions', 'Vary sentence openings'],
        solution: 'Although I felt tired when I woke up early, the strong coffee I made quickly revived me. Despite the homework being difficult, I managed to finish it.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_3_3: TextbookChapter = {
  id: 'engelsk-vg1-3-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '3.3',
  title: 'Text Coherence and Cohesion',
  description: 'Create well-structured texts with clear connections between ideas.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke kunnskap om grammatikk og tekstoppbygging i arbeid med egne muntlige og skriftlige tekster'],
  content: [
    {
      id: 'engelsk-vg1-3-3-intro',
      type: 'text',
      content: `## Making Your Writing Flow

Coherence and cohesion are what transform a collection of sentences into a unified text.

**Coherence:** The overall sense that the text makes logical sense and hangs together as a whole.

**Cohesion:** The grammatical and lexical links that connect parts of a text.

Think of coherence as the big picture and cohesion as the individual stitches that hold the fabric together.`,
    },
    {
      id: 'engelsk-vg1-3-3-def-1',
      type: 'definition',
      title: 'Cohesive Devices',
      content: `**Reference:**
Using pronouns and demonstratives to refer back
- "The study was published last year. It showed..."
- "These findings suggest..."

**Substitution and Ellipsis:**
Replacing or omitting repeated words
- "I'll have coffee." "I'll have the same."
- "Can you swim?" "Yes, I can [swim]."

**Conjunction/Linking Words:**
Connecting ideas explicitly

| Function | Words |
|----------|-------|
| Addition | also, furthermore, moreover, in addition |
| Contrast | however, nevertheless, on the other hand |
| Cause/Effect | therefore, consequently, as a result |
| Example | for example, for instance, such as |
| Sequence | first, then, finally, subsequently |
| Summary | in conclusion, to summarize, overall |

**Lexical Cohesion:**
Using related words and synonyms
- "The dog... the animal... the pet... it..."`,
    },
    {
      id: 'engelsk-vg1-3-3-example-1',
      type: 'example',
      title: 'Example: Adding Cohesion to a Paragraph',
      problem: 'Improve the cohesion of this paragraph:\n"Social media affects mental health. Young people spend hours on social media. Young people compare themselves to others. Young people feel inadequate. Studies show a link between social media use and depression."',
      solution: `**Improved version:**

"Social media significantly affects mental health, particularly among young people. **These** users often spend hours on platforms, where **they** constantly compare themselves to others. **As a result**, many feel inadequate or insecure. **Indeed**, recent studies have demonstrated a clear link between excessive social media use and depression among adolescents."

**Cohesive devices used:**
- "these users" (reference back to young people)
- "they" (pronoun reference)
- "as a result" (shows cause and effect)
- "indeed" (reinforces the point)
- "among adolescents" (synonym for young people)`,
    },
    {
      id: 'engelsk-vg1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose the best linking word to fill each gap:',
        subTasks: [
          { label: 'a', task: 'The weather was terrible. _______, we decided to go hiking anyway.', solution: 'Nevertheless / However', multipleChoiceOptions: ['Therefore', 'Nevertheless', 'Furthermore', 'For example'] },
          { label: 'b', task: 'Exercise improves physical health. _______, it boosts mental well-being.', solution: 'Furthermore / Moreover', multipleChoiceOptions: ['However', 'Furthermore', 'Nevertheless', 'Therefore'] },
          { label: 'c', task: 'The population is aging rapidly. _______, healthcare costs are expected to rise.', solution: 'Consequently / Therefore', multipleChoiceOptions: ['However', 'Consequently', 'Furthermore', 'Meanwhile'] },
        ],
        solution: 'a) Nevertheless, b) Furthermore, c) Consequently',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Add appropriate linking words and pronouns to improve cohesion in this paragraph:\n\n"Learning a language is challenging. Learning a language is rewarding. Students need regular practice. Students should not be afraid of making mistakes. Mistakes are part of learning."',
        hints: ['Use pronouns instead of repeating "students"', 'Add contrast and addition markers', 'Connect the ideas logically'],
        solution: 'Learning a language is challenging; however, it is also rewarding. Students need regular practice, and they should not be afraid of making mistakes. After all, these are an essential part of the learning process.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_3_4: TextbookChapter = {
  id: 'engelsk-vg1-3-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '3.4',
  title: 'Editing and Revising Texts',
  description: 'Develop skills for evaluating and improving your own writing.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere og bearbeide egne tekster ut fra faglige kriterier og kunnskap om språk'],
  content: [
    {
      id: 'engelsk-vg1-3-4-intro',
      type: 'text',
      content: `## The Art of Revision

Good writing is rewriting. Professional writers revise their work multiple times before publication.

**Stages of Revision:**
1. **Big picture** - Content, structure, argument
2. **Paragraph level** - Flow, coherence, transitions
3. **Sentence level** - Clarity, variety, grammar
4. **Word level** - Vocabulary, spelling, punctuation

**The ARMS Strategy:**
- **A**dd - What's missing?
- **R**emove - What's unnecessary?
- **M**ove - What's in the wrong place?
- **S**ubstitute - What could be better?`,
    },
    {
      id: 'engelsk-vg1-3-4-def-1',
      type: 'definition',
      title: 'Common Errors to Check',
      content: `**Subject-Verb Agreement:**
❌ "The students was tired"
✓ "The students were tired"

**Pronoun Reference:**
❌ "When John met Peter, he was happy" (who?)
✓ "When John met Peter, John was happy"

**Tense Consistency:**
❌ "She walked in and says hello"
✓ "She walked in and said hello"

**Run-on Sentences:**
❌ "I went home I was tired"
✓ "I went home because I was tired"

**Comma Splices:**
❌ "It was late, we went home"
✓ "It was late, so we went home"

**Apostrophe Errors:**
❌ its' / it's (possessive) / your (you are)
✓ its (possessive) / it's (it is) / you're (you are)`,
    },
    {
      id: 'engelsk-vg1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Find and correct the errors in each sentence:',
        subTasks: [
          { label: 'a', task: 'The team are playing good today.', solution: 'The team is playing well today. (subject-verb agreement; adverb needed)' },
          { label: 'b', task: 'Everyone should bring their own lunch, there is no cafeteria.', solution: 'Everyone should bring their own lunch; there is no cafeteria. (comma splice)' },
          { label: 'c', task: 'Its important that your on time for you\'re interview.', solution: 'It\'s important that you\'re on time for your interview. (apostrophe errors)' },
          { label: 'd', task: 'She walked into the room, sits down and started reading.', solution: 'She walked into the room, sat down, and started reading. (tense consistency)' },
        ],
        solution: 'Always proofread for these common error types.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Create a revision checklist for your own writing. Include at least 10 items to check, organized by category (content, structure, grammar, mechanics).',
        hints: ['Think about errors you commonly make', 'Include both big-picture and detail-level items'],
        solution: 'A good checklist is personalized to your own common errors and writing needs.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 4: Reading and Literature
// ============================================================================

export const CHAPTER_ENGELSK_VG1_4_1: TextbookChapter = {
  id: 'engelsk-vg1-4-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.1',
  title: 'Literary Devices and Techniques',
  description: 'Understand and identify literary devices in texts.',
  estimatedMinutes: 50,
  competenceGoals: ['lese, diskutere og reflektere over innhold og virkemidler i ulike typer tekster, også selvvalgte'],
  content: [
    {
      id: 'engelsk-vg1-4-1-intro',
      type: 'text',
      content: `## The Writer's Toolbox

Literary devices are techniques writers use to create meaning, evoke emotions, and engage readers. Understanding these tools helps you appreciate literature more deeply and improve your own writing.

**Why Study Literary Devices?**
- Deeper understanding of texts
- Better analysis skills
- Improved writing ability
- Enhanced appreciation of language`,
    },
    {
      id: 'engelsk-vg1-4-1-def-1',
      type: 'definition',
      title: 'Figurative Language',
      content: `**Simile:**
Comparison using "like" or "as"
"Her smile was like sunshine"

**Metaphor:**
Direct comparison without like/as
"Life is a journey"

**Personification:**
Giving human qualities to non-human things
"The wind whispered through the trees"

**Hyperbole:**
Deliberate exaggeration
"I've told you a million times"

**Understatement:**
Deliberately downplaying something
"It's just a scratch" (about a serious injury)

**Oxymoron:**
Contradictory terms together
"Deafening silence," "bitter sweet"`,
    },
    {
      id: 'engelsk-vg1-4-1-def-2',
      type: 'definition',
      title: 'Narrative and Structural Devices',
      content: `**Foreshadowing:**
Hints about future events
"Little did she know, this would be her last day of peace."

**Flashback:**
Scene from an earlier time
"Twenty years ago, in this very room..."

**Irony:**
- **Verbal:** Saying the opposite of what you mean
- **Situational:** Events contrary to expectations
- **Dramatic:** Audience knows more than characters

**Symbolism:**
Objects representing abstract ideas
A dove = peace, darkness = evil, spring = new beginnings

**Motif:**
Recurring element with symbolic significance
Water imagery throughout a novel about baptism/renewal

**Juxtaposition:**
Placing contrasting elements side by side
Rich mansion next to homeless shelter`,
    },
    {
      id: 'engelsk-vg1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the literary device in each example:',
        subTasks: [
          { label: 'a', task: '"The stars danced in the night sky"', solution: 'Personification', multipleChoiceOptions: ['Simile', 'Metaphor', 'Personification', 'Hyperbole'] },
          { label: 'b', task: '"She was as brave as a lion"', solution: 'Simile', multipleChoiceOptions: ['Simile', 'Metaphor', 'Personification', 'Irony'] },
          { label: 'c', task: '"Nice weather we\'re having" (during a storm)', solution: 'Verbal irony', multipleChoiceOptions: ['Hyperbole', 'Verbal irony', 'Understatement', 'Metaphor'] },
          { label: 'd', task: '"Time is money"', solution: 'Metaphor', multipleChoiceOptions: ['Simile', 'Metaphor', 'Personification', 'Symbolism'] },
        ],
        solution: 'a) Personification, b) Simile, c) Verbal irony, d) Metaphor',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write your own examples of each literary device:\na) A simile describing happiness\nb) A metaphor about time\nc) Personification of a computer\nd) Hyperbole about being hungry',
        hints: ['Be creative', 'Make sure the device is clear'],
        solution: 'Examples: a) Happiness spread through me like warmth from a fire. b) Time is a thief that steals our youth. c) My computer groaned and complained as it struggled to start. d) I\'m so hungry I could eat an entire elephant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_4_2: TextbookChapter = {
  id: 'engelsk-vg1-4-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.2',
  title: 'Analyzing Short Stories',
  description: 'Develop skills for analyzing short fiction.',
  estimatedMinutes: 55,
  competenceGoals: ['lese, analysere og tolke engelskspråklig skjønnlitteratur'],
  content: [
    {
      id: 'engelsk-vg1-4-2-intro',
      type: 'text',
      content: `## The Art of the Short Story

Short stories pack a complete narrative into a compact form. Every word must earn its place.

**Elements of Short Stories:**
1. **Plot** - What happens
2. **Character** - Who it happens to
3. **Setting** - Where and when it happens
4. **Theme** - What it means
5. **Point of view** - Who tells the story
6. **Style** - How it's told`,
    },
    {
      id: 'engelsk-vg1-4-2-def-1',
      type: 'definition',
      title: 'Plot Structure',
      content: `**Freytag's Pyramid:**

1. **Exposition:** Introduction of characters, setting, situation
2. **Rising Action:** Events that build tension
3. **Climax:** The turning point, highest tension
4. **Falling Action:** Events after the climax
5. **Resolution/Denouement:** How things are resolved

**Other Plot Elements:**
- **Conflict:** The central struggle (person vs. person, self, society, nature, technology)
- **Complication:** Problems that arise
- **Suspense:** Uncertainty that keeps readers engaged
- **Twist:** Unexpected turn of events`,
    },
    {
      id: 'engelsk-vg1-4-2-def-2',
      type: 'definition',
      title: 'Character Analysis',
      content: `**Character Types:**
- **Protagonist:** Main character
- **Antagonist:** Character opposing protagonist
- **Round character:** Complex, develops over story
- **Flat character:** One-dimensional, doesn't change
- **Dynamic:** Changes through the story
- **Static:** Remains the same

**Methods of Characterization:**
**Direct:** Author tells us about the character
"John was a kind and generous man."

**Indirect (STEAL):**
- **S**peech: What they say
- **T**houghts: What they think
- **E**ffect on others: How others react
- **A**ctions: What they do
- **L**ooks: Physical appearance`,
    },
    {
      id: 'engelsk-vg1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Read a short story of your choice (or one assigned by your teacher). Analyze it by answering these questions:',
        subTasks: [
          { label: 'a', task: 'What is the central conflict?', solution: 'Identify the main struggle the protagonist faces.' },
          { label: 'b', task: 'At what point does the climax occur?', solution: 'Find the moment of highest tension or turning point.' },
          { label: 'c', task: 'Is the main character round or flat? Dynamic or static?', solution: 'Consider whether they are complex and whether they change.' },
          { label: 'd', task: 'What theme(s) does the story explore?', solution: 'Look for the underlying message or universal truth.' },
        ],
        hints: ['Use specific examples from the text', 'Look for evidence to support your answers'],
        solution: 'A complete analysis includes evidence from the text.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_4_3: TextbookChapter = {
  id: 'engelsk-vg1-4-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.3',
  title: 'Analyzing Novels',
  description: 'Explore longer fiction and novel analysis techniques.',
  estimatedMinutes: 60,
  competenceGoals: ['lese, analysere og tolke engelskspråklig skjønnlitteratur'],
  content: [
    {
      id: 'engelsk-vg1-4-3-intro',
      type: 'text',
      content: `## Reading and Analyzing Novels

Novels offer depth that short stories cannot - complex character development, multiple plotlines, and rich thematic exploration.

**Approaching a Novel:**
1. Read actively - take notes, mark passages
2. Consider the historical/social context
3. Track character development
4. Identify recurring themes and motifs
5. Pay attention to the author's style`,
    },
    {
      id: 'engelsk-vg1-4-3-def-1',
      type: 'definition',
      title: 'Point of View',
      content: `**First Person:**
Narrator is a character in the story
"I walked into the room and saw her standing there."
- Limited to narrator's knowledge
- Creates intimacy
- Can be unreliable

**Third Person Limited:**
External narrator focusing on one character
"She walked into the room and saw him standing there."
- Access to one character's thoughts
- More objective than first person

**Third Person Omniscient:**
All-knowing narrator
"She walked in, nervous. He stood there, equally anxious."
- Can see into multiple characters' minds
- God-like perspective

**Second Person:**
Addresses "you" (rare)
"You walk into the room and see her standing there."`,
    },
    {
      id: 'engelsk-vg1-4-3-def-2',
      type: 'definition',
      title: 'Setting and Atmosphere',
      content: `**Setting includes:**
- **Place:** Physical location
- **Time:** Historical period, season, time of day
- **Social environment:** Cultural context, social norms
- **Atmosphere:** Mood created by the setting

**Functions of Setting:**
- Creates mood and atmosphere
- Reflects characters' inner states
- Provides context for the plot
- Can symbolize themes
- May create conflict

**Example:**
A Gothic novel set in a decaying mansion creates:
- Atmosphere of mystery and dread
- Symbolizes the family's decline
- Reflects psychological darkness
- Creates physical dangers for characters`,
    },
    {
      id: 'engelsk-vg1-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'For a novel you are reading or have read, complete this analysis template:',
        subTasks: [
          { label: 'a', task: 'Title and Author:', solution: 'Record basic information' },
          { label: 'b', task: 'Point of view and its effect:', solution: 'Analyze how perspective shapes the story' },
          { label: 'c', task: 'Main themes (at least 2):', solution: 'Identify central ideas with evidence' },
          { label: 'd', task: 'One significant symbol or motif:', solution: 'Explain what it represents' },
          { label: 'e', task: 'How setting contributes to the story:', solution: 'Analyze place, time, atmosphere' },
        ],
        hints: ['Use specific quotes or examples', 'Explain how elements work together'],
        solution: 'A thorough analysis connects all elements and shows understanding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_4_4: TextbookChapter = {
  id: 'engelsk-vg1-4-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.4',
  title: 'Poetry Analysis',
  description: 'Learn to read, understand and analyze English poetry.',
  estimatedMinutes: 50,
  competenceGoals: ['lese, analysere og tolke engelskspråklig skjønnlitteratur'],
  content: [
    {
      id: 'engelsk-vg1-4-4-intro',
      type: 'text',
      content: `## Reading Poetry

Poetry uses concentrated language to create meaning and emotion. Every word, sound, and line break matters.

**Approaching a Poem:**
1. Read it aloud - poetry is meant to be heard
2. Read it multiple times
3. Don't panic about not understanding immediately
4. Look up unfamiliar words
5. Consider form and structure as well as content`,
    },
    {
      id: 'engelsk-vg1-4-4-def-1',
      type: 'definition',
      title: 'Sound Devices',
      content: `**Rhyme:**
- End rhyme: day/way
- Internal rhyme: "I went to town to buy a gown"
- Slant rhyme: love/move

**Rhythm and Meter:**
- **Iamb:** da-DUM (unstressed-stressed)
- **Trochee:** DUM-da (stressed-unstressed)
- **Pentameter:** 5 feet per line
- **Iambic pentameter:** da-DUM da-DUM da-DUM da-DUM da-DUM

**Alliteration:**
Repeated consonant sounds at word beginnings
"Peter Piper picked a peck of pickled peppers"

**Assonance:**
Repeated vowel sounds
"The rain in Spain falls mainly on the plain"

**Onomatopoeia:**
Words that sound like their meaning
buzz, crash, whisper, murmur`,
    },
    {
      id: 'engelsk-vg1-4-4-def-2',
      type: 'definition',
      title: 'Poetic Forms',
      content: `**Sonnet:**
14 lines, usually iambic pentameter
- Shakespearean: 3 quatrains + couplet (ABAB CDCD EFEF GG)
- Petrarchan: octave + sestet (ABBAABBA CDECDE)

**Haiku:**
3 lines: 5-7-5 syllables
Japanese origin, often about nature

**Free Verse:**
No fixed meter or rhyme scheme
Modern, flexible form

**Ballad:**
Narrative poem, often sung
Usually quatrains with ABAB or ABCB rhyme

**Limerick:**
5 lines, humorous
AABBA rhyme scheme`,
    },
    {
      id: 'engelsk-vg1-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the sound devices in each line:',
        subTasks: [
          { label: 'a', task: '"The fair breeze blew, the white foam flew" (Coleridge)', solution: 'Alliteration (f, b), assonance (ee/ew sounds), internal rhyme (blew/flew)' },
          { label: 'b', task: '"I heard a fly buzz when I died" (Dickinson)', solution: 'Onomatopoeia (buzz), alliteration (heard/when)' },
          { label: 'c', task: '"Silently surfing the sea"', solution: 'Alliteration (s sounds)' },
        ],
        solution: 'Sound devices create music in poetry.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_4_5: TextbookChapter = {
  id: 'engelsk-vg1-4-5',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.5',
  title: 'Drama and Film Adaptation',
  description: 'Explore dramatic texts and their film adaptations.',
  estimatedMinutes: 55,
  competenceGoals: ['drøfte og reflektere over form, innhold og virkemidler i engelskspråklige kulturuttrykk fra ulike medier'],
  content: [
    {
      id: 'engelsk-vg1-4-5-intro',
      type: 'text',
      content: `## From Page to Stage to Screen

Drama exists in multiple forms - as written text, live performance, and film. Each medium has unique conventions and possibilities.

**Understanding Drama:**
Drama is written to be performed. The script is just a blueprint.

**When Comparing Adaptations:**
- What is added or removed?
- How do visual elements change meaning?
- What interpretation does the director offer?
- How does the medium affect the experience?`,
    },
    {
      id: 'engelsk-vg1-4-5-def-1',
      type: 'definition',
      title: 'Elements of Drama',
      content: `**Script Elements:**
- **Dialogue:** What characters say
- **Stage directions:** Instructions for performance
- **Monologue:** Long speech by one character
- **Soliloquy:** Character speaking thoughts aloud, alone
- **Aside:** Character speaks to audience, others can't hear

**Dramatic Structure:**
- **Acts:** Major divisions
- **Scenes:** Smaller divisions within acts
- **Tragedy:** Ends in disaster for protagonist
- **Comedy:** Ends happily, often with marriage

**Dramatic Techniques:**
- **Dramatic irony:** Audience knows more than characters
- **Comic relief:** Humor in a serious play
- **Deus ex machina:** Sudden unlikely resolution`,
    },
    {
      id: 'engelsk-vg1-4-5-def-2',
      type: 'definition',
      title: 'Film Techniques',
      content: `**Camera Shots:**
- **Close-up:** Face or detail (shows emotion)
- **Medium shot:** Waist up (conversation)
- **Long shot:** Full body/setting (context)
- **Extreme long shot:** Landscape (isolation, scope)

**Camera Angles:**
- **Low angle:** Looking up (power, threat)
- **High angle:** Looking down (vulnerability)
- **Eye level:** Neutral, equal

**Editing:**
- **Cut:** Instant change
- **Dissolve:** Gradual transition
- **Montage:** Series of shots showing passage of time

**Sound:**
- **Diegetic:** Sound within the story world
- **Non-diegetic:** Added sound (soundtrack)
- **Score:** Background music`,
    },
    {
      id: 'engelsk-vg1-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Compare a scene from a play/book with its film adaptation. Answer:',
        subTasks: [
          { label: 'a', task: 'What is preserved from the original?', solution: 'Note dialogue, characters, plot elements kept' },
          { label: 'b', task: 'What is changed or added?', solution: 'Note visual elements, cuts, additions' },
          { label: 'c', task: 'How do film techniques affect meaning?', solution: 'Analyze camera, sound, editing choices' },
          { label: 'd', task: 'Which version do you prefer and why?', solution: 'Give reasoned personal response' },
        ],
        hints: ['Consider Shakespeare, Jane Austen, or any adapted work you know'],
        solution: 'Good comparison shows understanding of both mediums.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Export all chapters from this file
export const ENGELSK_VG1_CHAPTERS_DEL2 = [
  CHAPTER_ENGELSK_VG1_3_1,
  CHAPTER_ENGELSK_VG1_3_2,
  CHAPTER_ENGELSK_VG1_3_3,
  CHAPTER_ENGELSK_VG1_3_4,
  CHAPTER_ENGELSK_VG1_4_1,
  CHAPTER_ENGELSK_VG1_4_2,
  CHAPTER_ENGELSK_VG1_4_3,
  CHAPTER_ENGELSK_VG1_4_4,
  CHAPTER_ENGELSK_VG1_4_5,
];
