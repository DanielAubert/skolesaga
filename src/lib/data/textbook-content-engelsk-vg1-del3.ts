/**
 * Tekstbok innhold for Engelsk VG1 DEL 3
 * Section 5: Non-fiction and Critical Reading (5.1-5.4)
 * Section 6: Writing Skills (6.1-6.5)
 * Section 7: English as a World Language (7.1-7.4)
 *
 * Dekker LK20 kompetansemål for ENG01-05.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SECTION 5: Non-fiction and Critical Reading
// ============================================================================

export const CHAPTER_ENGELSK_VG1_5_1: TextbookChapter = {
  id: 'engelsk-vg1-5-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.1',
  title: 'Reading Non-fiction Texts',
  description: 'Develop strategies for reading and understanding non-fiction.',
  estimatedMinutes: 45,
  competenceGoals: ['lese og sammenligne ulike sakprosatekster om samme emne fra ulike kilder og vurdere kildens troverdighet'],
  content: [
    {
      id: 'engelsk-vg1-5-1-intro',
      type: 'text',
      content: `## Understanding Non-fiction

Non-fiction texts inform, argue, explain, or persuade. They require different reading strategies than fiction.

**Types of Non-fiction:**
- News articles and journalism
- Essays and opinion pieces
- Academic texts and research
- Reports and documentation
- Biographies and memoirs
- Speeches and transcripts`,
    },
    {
      id: 'engelsk-vg1-5-1-def-1',
      type: 'definition',
      title: 'Active Reading Strategies',
      content: `**Before Reading:**
- Preview the text (title, headings, images)
- Consider your purpose for reading
- Activate prior knowledge

**During Reading:**
- Annotate key points
- Ask questions
- Make predictions
- Identify main ideas vs. details

**After Reading:**
- Summarize in your own words
- Evaluate the argument
- Connect to other knowledge
- Reflect on what you learned

**The SQ3R Method:**
**S**urvey → **Q**uestion → **R**ead → **R**ecite → **R**eview`,
    },
    {
      id: 'engelsk-vg1-5-1-def-2',
      type: 'definition',
      title: 'Text Structure Patterns',
      content: `**Common Non-fiction Structures:**

**Chronological:**
Events in time order
Signal words: first, then, next, finally, before, after

**Compare/Contrast:**
Similarities and differences
Signal words: similarly, however, on the other hand, while, whereas

**Cause/Effect:**
Reasons and results
Signal words: because, therefore, as a result, consequently, due to

**Problem/Solution:**
Issue and proposed fix
Signal words: the problem is, a solution, to address this

**Description:**
Characteristics of a topic
Signal words: for example, such as, including, characteristics`,
    },
    {
      id: 'engelsk-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Read a news article of your choice. Apply active reading strategies and answer:',
        subTasks: [
          { label: 'a', task: 'What is the main point of the article?', solution: 'State the central argument or information' },
          { label: 'b', task: 'What text structure does it use?', solution: 'Identify the organizational pattern' },
          { label: 'c', task: 'What questions do you still have after reading?', solution: 'Note gaps or areas for further research' },
        ],
        hints: ['Choose an article from a reputable source', 'Read carefully and take notes'],
        solution: 'Active reading improves comprehension and retention.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_5_2: TextbookChapter = {
  id: 'engelsk-vg1-5-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.2',
  title: 'Comparing Sources',
  description: 'Learn to compare and evaluate different sources on the same topic.',
  estimatedMinutes: 50,
  competenceGoals: ['lese og sammenligne ulike sakprosatekster om samme emne fra ulike kilder og vurdere kildens troverdighet'],
  content: [
    {
      id: 'engelsk-vg1-5-2-intro',
      type: 'text',
      content: `## Why Compare Sources?

Different sources present different perspectives on the same topic. Comparing them helps you:
- Get a more complete picture
- Identify bias and perspective
- Find reliable information
- Develop critical thinking skills`,
    },
    {
      id: 'engelsk-vg1-5-2-def-1',
      type: 'definition',
      title: 'Comparison Framework',
      content: `**When Comparing Sources, Consider:**

**Content:**
- What information is included?
- What is omitted?
- Are the facts consistent?
- What claims are made?

**Perspective:**
- Who is the author?
- What is their viewpoint?
- Is there obvious bias?
- What audience is targeted?

**Evidence:**
- What evidence supports claims?
- Are sources cited?
- Is data provided?
- Can claims be verified?

**Purpose:**
- Is it to inform, persuade, or entertain?
- Is it balanced or one-sided?
- What action does it encourage?`,
    },
    {
      id: 'engelsk-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Find two articles about the same current event from different sources. Compare them by answering:',
        subTasks: [
          { label: 'a', task: 'What facts do both sources agree on?', solution: 'Identify common ground' },
          { label: 'b', task: 'What information appears in one source but not the other?', solution: 'Note differences in coverage' },
          { label: 'c', task: 'What differences in perspective or emphasis do you notice?', solution: 'Analyze different angles' },
          { label: 'd', task: 'Which source seems more reliable and why?', solution: 'Evaluate credibility' },
        ],
        hints: ['Use sources from different countries or political perspectives', 'Consider both what is said and how it is said'],
        solution: 'Comparing sources reveals how perspective shapes reporting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_5_3: TextbookChapter = {
  id: 'engelsk-vg1-5-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.3',
  title: 'Source Criticism and Evaluation',
  description: 'Develop critical thinking skills for evaluating sources.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke ulike kilder på en kritisk, hensiktsmessig og etterrettelig måte'],
  content: [
    {
      id: 'engelsk-vg1-5-3-intro',
      type: 'text',
      content: `## Critical Source Evaluation

Not all sources are equally reliable. Learning to evaluate sources critically is essential for academic work and informed citizenship.

**Why Source Criticism Matters:**
- Misinformation is everywhere
- Quality varies enormously
- Your credibility depends on your sources
- Critical thinking is a lifelong skill`,
    },
    {
      id: 'engelsk-vg1-5-3-def-1',
      type: 'definition',
      title: 'The CRAAP Test',
      content: `**Currency:**
- When was it published/updated?
- Is the information current enough?
- Do links work?

**Relevance:**
- Does it relate to your topic?
- Is it appropriate for your level?
- Who is the intended audience?

**Authority:**
- Who is the author/publisher?
- What are their credentials?
- Is contact information provided?

**Accuracy:**
- Is the information supported by evidence?
- Has it been reviewed or edited?
- Are there spelling/grammar errors?

**Purpose:**
- Why does this source exist?
- Is it objective or biased?
- Is it fact, opinion, or propaganda?`,
    },
    {
      id: 'engelsk-vg1-5-3-def-2',
      type: 'definition',
      title: 'Lateral Reading',
      content: `**Lateral Reading** means checking what other sources say ABOUT a source, rather than just reading the source itself.

**Steps:**
1. Open new tabs
2. Search for the author/organization
3. Check what experts say about the source
4. Look for fact-checks
5. Verify claims with reliable sources

**Red Flags:**
- No author identified
- Emotional or sensational language
- No sources cited
- Claims that seem too good/bad to be true
- Requests to share before reading
- Domain names that mimic legitimate sites`,
    },
    {
      id: 'engelsk-vg1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Apply the CRAAP test to a source assigned by your teacher or one you find online. Rate each criterion and explain your evaluation.',
        subTasks: [
          { label: 'a', task: 'Currency: Rate 1-5 and explain', solution: 'Consider publication date and updates' },
          { label: 'b', task: 'Relevance: Rate 1-5 and explain', solution: 'Consider fit for purpose and audience' },
          { label: 'c', task: 'Authority: Rate 1-5 and explain', solution: 'Consider author credentials and reputation' },
          { label: 'd', task: 'Accuracy: Rate 1-5 and explain', solution: 'Consider evidence and verification' },
          { label: 'e', task: 'Purpose: Rate 1-5 and explain', solution: 'Consider bias and intent' },
        ],
        solution: 'Critical evaluation should be systematic and evidence-based.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_5_4: TextbookChapter = {
  id: 'engelsk-vg1-5-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.4',
  title: 'Media Literacy',
  description: 'Navigate and critically evaluate media in the digital age.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke ulike kilder på en kritisk, hensiktsmessig og etterrettelig måte'],
  content: [
    {
      id: 'engelsk-vg1-5-4-intro',
      type: 'text',
      content: `## Navigating Today's Media Landscape

We're surrounded by more information than ever before. Media literacy means understanding how media works and being able to critically evaluate what we see.

**Key Media Literacy Questions:**
- Who created this message?
- What techniques attract attention?
- What lifestyles and values are represented?
- How might different people understand this?
- What is omitted from this message?`,
    },
    {
      id: 'engelsk-vg1-5-4-def-1',
      type: 'definition',
      title: 'Types of Misinformation',
      content: `**Misinformation vs Disinformation:**
- **Misinformation:** False information spread without intent to deceive
- **Disinformation:** False information deliberately spread to deceive

**Common Types:**
- **Fake news:** Fabricated stories designed to look like real news
- **Clickbait:** Sensational headlines that don't match content
- **Propaganda:** Biased information to promote a viewpoint
- **Conspiracy theories:** Unfounded explanations for events
- **Satire mistaken as news:** Humor taken literally
- **Out-of-context:** Real information used misleadingly
- **Manipulated content:** Altered images or videos`,
    },
    {
      id: 'engelsk-vg1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze a social media post or news headline using media literacy questions:',
        subTasks: [
          { label: 'a', task: 'Who created this and why?', solution: 'Identify source and purpose' },
          { label: 'b', task: 'What techniques does it use to grab attention?', solution: 'Note emotional appeals, images, language' },
          { label: 'c', task: 'What perspectives are missing?', solution: 'Consider what voices are absent' },
          { label: 'd', task: 'Is it reliable? How can you verify it?', solution: 'Apply lateral reading' },
        ],
        hints: ['Look at both content and presentation', 'Consider the source\'s motivation'],
        solution: 'Media literacy requires asking critical questions consistently.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 6: Writing Skills
// ============================================================================

export const CHAPTER_ENGELSK_VG1_6_1: TextbookChapter = {
  id: 'engelsk-vg1-6-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.1',
  title: 'Formal vs Informal Writing',
  description: 'Understand and apply appropriate register in different contexts.',
  estimatedMinutes: 45,
  competenceGoals: ['skrive ulike formelle og uformelle tekster, også komplekse, med struktur og sammenheng'],
  content: [
    {
      id: 'engelsk-vg1-6-1-intro',
      type: 'text',
      content: `## Choosing the Right Register

Register is the level of formality in your writing. Choosing the appropriate register is crucial for effective communication.

**When to Use Formal Writing:**
- Academic essays and reports
- Job applications and cover letters
- Official correspondence
- Professional emails

**When to Use Informal Writing:**
- Personal messages to friends
- Casual blog posts
- Some creative writing
- Social media (usually)`,
    },
    {
      id: 'engelsk-vg1-6-1-def-1',
      type: 'definition',
      title: 'Features of Formal vs Informal Writing',
      content: `| Feature | Formal | Informal |
|---------|--------|----------|
| Contractions | No (do not) | Yes (don't) |
| Pronouns | Third person, passive | First/second person |
| Vocabulary | Sophisticated | Everyday, slang OK |
| Sentences | Complex, complete | Variable, fragments OK |
| Tone | Objective, serious | Personal, conversational |
| Abbreviations | Written out | Acceptable (e.g., etc.) |

**Formal Example:**
"The research demonstrates that excessive screen time may negatively impact adolescent sleep patterns."

**Informal Example:**
"Studies show too much screen time can really mess up teenagers' sleep."`,
    },
    {
      id: 'engelsk-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Rewrite each sentence in the opposite register:',
        subTasks: [
          { label: 'a', task: 'Formal → Informal: "I am writing to inquire about the available positions."', solution: 'Hey, I was wondering if you have any jobs available?' },
          { label: 'b', task: 'Informal → Formal: "The meeting was a total waste of time."', solution: 'The meeting did not prove to be productive / failed to achieve its objectives.' },
          { label: 'c', task: 'Formal → Informal: "Your assistance would be greatly appreciated."', solution: 'Thanks a lot, you\'d be a huge help!' },
        ],
        solution: 'Adapting register requires changes in vocabulary, structure, and tone.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_6_2: TextbookChapter = {
  id: 'engelsk-vg1-6-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.2',
  title: 'Argumentative Writing',
  description: 'Master the art of persuasive and argumentative essays.',
  estimatedMinutes: 55,
  competenceGoals: ['skrive ulike tekster som beskriver, diskuterer, begrunner og reflekterer, tilpasset formål, mottaker og situasjon'],
  content: [
    {
      id: 'engelsk-vg1-6-2-intro',
      type: 'text',
      content: `## The Art of Argument

Argumentative writing presents a claim and supports it with evidence and reasoning. The goal is to convince the reader to agree with your position.

**Elements of Strong Arguments:**
1. Clear thesis statement
2. Logical reasoning
3. Supporting evidence
4. Acknowledgment of counter-arguments
5. Effective conclusion`,
    },
    {
      id: 'engelsk-vg1-6-2-def-1',
      type: 'definition',
      title: 'Essay Structure: Introduction',
      content: `**The Introduction Should:**
- Hook the reader's attention
- Provide necessary background
- State your thesis clearly

**The Thesis Statement:**
- One sentence stating your main argument
- Appears at the end of the introduction
- Should be specific and debatable

**Weak thesis:** "Social media is bad."
**Strong thesis:** "While social media offers benefits for connection and information sharing, its negative effects on teenage mental health outweigh these advantages, and parents should limit their children's screen time."`,
    },
    {
      id: 'engelsk-vg1-6-2-def-2',
      type: 'definition',
      title: 'Body Paragraphs: PEEL Structure',
      content: `**P - Point:**
State your topic sentence (main idea of paragraph)

**E - Evidence:**
Provide facts, quotes, examples, statistics

**E - Explanation:**
Analyze how the evidence supports your point

**L - Link:**
Connect back to thesis and/or to next paragraph

**Example:**
**Point:** "Excessive social media use disrupts adolescent sleep."
**Evidence:** "A 2019 study found that teens who used social media for more than 3 hours daily were twice as likely to report poor sleep."
**Explanation:** "This sleep disruption occurs because blue light from screens suppresses melatonin, and the stimulating content keeps minds active when they should be winding down."
**Link:** "Given the crucial role of sleep in learning, this alone justifies limiting screen time."`,
    },
    {
      id: 'engelsk-vg1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Write a thesis statement for each topic, then identify one potential counter-argument:',
        subTasks: [
          { label: 'a', task: 'Topic: School uniforms', solution: 'Thesis example: "School uniforms should be mandatory because they reduce social pressure and improve focus on learning." Counter: "They suppress individual expression."' },
          { label: 'b', task: 'Topic: Climate change action', solution: 'Thesis example: "Governments must prioritize renewable energy investment to combat climate change." Counter: "Economic costs could harm industries."' },
        ],
        hints: ['Make your thesis specific and debatable', 'Consider what the opposing side would say'],
        solution: 'Strong arguments acknowledge and address counter-arguments.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write a complete body paragraph (PEEL structure) arguing for or against ONE of these positions:\na) Homework should be abolished\nb) Social media should have age restrictions\nc) Electric cars should replace all petrol cars',
        hints: ['Start with a clear topic sentence', 'Include specific evidence', 'Explain how evidence supports your point', 'Link back to the main argument'],
        solution: 'A well-structured paragraph guides the reader through your reasoning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_6_3: TextbookChapter = {
  id: 'engelsk-vg1-6-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.3',
  title: 'Analytical and Reflective Writing',
  description: 'Develop skills for analytical and reflective text types.',
  estimatedMinutes: 50,
  competenceGoals: ['skrive ulike tekster som beskriver, diskuterer, begrunner og reflekterer'],
  content: [
    {
      id: 'engelsk-vg1-6-3-intro',
      type: 'text',
      content: `## Analysis and Reflection

Analysis breaks something down to understand how it works. Reflection considers personal meaning and learning.

**Analytical Writing:**
- Examines a text, event, or concept
- Breaks it into components
- Explains how parts work together
- Objective, evidence-based

**Reflective Writing:**
- Explores personal experience
- Considers what you learned
- Connects to broader ideas
- Personal, thoughtful`,
    },
    {
      id: 'engelsk-vg1-6-3-def-1',
      type: 'definition',
      title: 'Literary Analysis Structure',
      content: `**Introduction:**
- Identify text (title, author, genre)
- Brief context
- Thesis about how the text works

**Body Paragraphs:**
- Each focuses on one aspect (theme, technique, character)
- Include quotes and specific references
- Analyze, don't just describe
- Link analysis to thesis

**Conclusion:**
- Synthesize main points
- Broader significance
- Final insight

**Key Verbs for Analysis:**
Analyze, examine, demonstrate, illustrate, reveal, suggest, convey, emphasize, highlight, undermine, reinforce`,
    },
    {
      id: 'engelsk-vg1-6-3-def-2',
      type: 'definition',
      title: 'Reflective Writing: The Gibbs Cycle',
      content: `**1. Description:** What happened?
**2. Feelings:** What were you thinking/feeling?
**3. Evaluation:** What was good and bad?
**4. Analysis:** What sense can you make of it?
**5. Conclusion:** What else could you have done?
**6. Action Plan:** What will you do next time?

**Reflective Phrases:**
- "This experience taught me..."
- "I realize now that..."
- "Looking back, I would..."
- "This connects to..."
- "In the future, I will..."`,
    },
    {
      id: 'engelsk-vg1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Write a reflective paragraph (150-200 words) about a learning experience using the Gibbs Cycle framework.',
        hints: ['Choose a specific experience', 'Include feelings and analysis', 'State what you learned and how you\'ll apply it'],
        solution: 'Good reflection moves beyond description to analysis and action.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_6_4: TextbookChapter = {
  id: 'engelsk-vg1-6-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.4',
  title: 'Academic Writing and Essays',
  description: 'Master academic writing conventions and essay structure.',
  estimatedMinutes: 55,
  competenceGoals: ['skrive ulike formelle tekster med struktur og sammenheng'],
  content: [
    {
      id: 'engelsk-vg1-6-4-intro',
      type: 'text',
      content: `## Academic Writing Essentials

Academic writing follows specific conventions that differ from other types of writing. Understanding these helps you succeed in school and beyond.

**Characteristics:**
- Formal register
- Objective tone
- Evidence-based arguments
- Proper citation
- Clear structure`,
    },
    {
      id: 'engelsk-vg1-6-4-def-1',
      type: 'definition',
      title: 'Citation and Referencing',
      content: `**Why Cite Sources?**
- Give credit to original authors
- Avoid plagiarism
- Allow readers to verify claims
- Show the breadth of your research

**In-Text Citation (APA Style):**
According to Smith (2020), "direct quote" (p. 15).
Research suggests this is true (Smith, 2020).

**Reference List Entry:**
Smith, J. (2020). *Book title*. Publisher.

**Paraphrasing vs. Quoting:**
- Paraphrase: Put ideas in your own words (still cite!)
- Quote: Use exact words in quotation marks (cite with page number)

**Tip:** Paraphrase more than you quote - it shows understanding.`,
    },
    {
      id: 'engelsk-vg1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Practice citing sources. Given this information, write:\na) A direct quote with citation\nb) A paraphrase with citation\n\nSource: "Social media use among teens has increased by 50% since 2015, leading to concerns about its impact on mental health." - From "Digital Lives" by Jane Wilson, published in 2022, page 45.',
        solution: 'a) Wilson (2022) states that "social media use among teens has increased by 50% since 2015, leading to concerns about its impact on mental health" (p. 45).\nb) Teen social media usage has grown dramatically over the past several years, raising questions about psychological effects (Wilson, 2022).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_6_5: TextbookChapter = {
  id: 'engelsk-vg1-6-5',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.5',
  title: 'Creative Writing',
  description: 'Explore creative writing techniques and genres.',
  estimatedMinutes: 50,
  competenceGoals: ['skrive ulike tekster tilpasset formål, mottaker og situasjon'],
  content: [
    {
      id: 'engelsk-vg1-6-5-intro',
      type: 'text',
      content: `## The Creative Writer's Craft

Creative writing allows you to use imagination and literary techniques to tell stories, express ideas, and evoke emotions.

**Types of Creative Writing:**
- Short stories
- Personal narratives
- Poetry
- Scripts and dialogue
- Creative non-fiction`,
    },
    {
      id: 'engelsk-vg1-6-5-def-1',
      type: 'definition',
      title: 'Show, Don\'t Tell',
      content: `**The Most Important Rule:**
Don't tell readers how characters feel - show them through actions, dialogue, and description.

**Telling:** "She was angry."

**Showing:** "She slammed the door, her knuckles white around the handle. 'Fine,' she said through clenched teeth, not looking back."

**Techniques for Showing:**
- Action and body language
- Dialogue that reveals character
- Sensory details (sight, sound, smell, touch, taste)
- Internal thoughts
- Reactions of other characters`,
    },
    {
      id: 'engelsk-vg1-6-5-def-2',
      type: 'definition',
      title: 'Creating Vivid Descriptions',
      content: `**Use Specific Details:**
❌ "The room was messy."
✓ "Clothes draped over every surface, pizza boxes stacked by the door, and a half-empty coffee mug grew mold on the windowsill."

**Engage the Senses:**
- Sight: colors, shapes, light
- Sound: dialogue, environment
- Smell: powerful memory trigger
- Touch: textures, temperature
- Taste: food, emotion

**Use Strong Verbs:**
❌ "She walked quickly across the room."
✓ "She strode / hurried / dashed / crept across the room."`,
    },
    {
      id: 'engelsk-vg1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Rewrite each "telling" sentence to "show" the emotion:',
        subTasks: [
          { label: 'a', task: 'He was nervous about the interview.', solution: 'He straightened his tie for the fifth time, rehearsing his answers under his breath as he watched the second hand crawl around the clock.' },
          { label: 'b', task: 'The house was creepy.', solution: 'The shutters hung at odd angles, and the windows stared like hollow eyes. Each step on the porch made the boards groan in protest.' },
          { label: 'c', task: 'She was happy to see him.', solution: 'Her whole face lit up when he walked through the door, and she jumped up from her chair, nearly knocking over her coffee.' },
        ],
        solution: 'Showing through action and detail creates more engaging writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write a short creative piece (200-300 words) using ONE of these prompts:\na) The last message on the phone\nb) A stranger on the train\nc) The door that shouldn\'t have been open',
        hints: ['Start in the middle of the action', 'Use sensory details', 'Show, don\'t tell', 'End with something memorable'],
        solution: 'Good creative writing engages readers from the first line.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 7: English as a World Language
// ============================================================================

export const CHAPTER_ENGELSK_VG1_7_1: TextbookChapter = {
  id: 'engelsk-vg1-7-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.1',
  title: 'The History of English',
  description: 'Explore the development of English from Old English to today.',
  estimatedMinutes: 50,
  competenceGoals: ['beskrive sentrale trekk ved framveksten av engelsk som verdensspråk'],
  content: [
    {
      id: 'engelsk-vg1-7-1-intro',
      type: 'text',
      content: `## The Story of English

English has evolved dramatically over 1,500 years, influenced by invasions, colonization, and global communication.

**Timeline Overview:**
- 450-1100: Old English (Anglo-Saxon)
- 1100-1500: Middle English
- 1500-1700: Early Modern English
- 1700-present: Modern English`,
    },
    {
      id: 'engelsk-vg1-7-1-def-1',
      type: 'definition',
      title: 'Old English (450-1100)',
      content: `**Origins:**
Germanic tribes (Angles, Saxons, Jutes) invaded Britain from ~450 AD, bringing their languages.

**Characteristics:**
- Highly inflected (word endings showed grammar)
- Very different from modern English
- Written in runic alphabet, then Latin

**Old English Example:**
"Hwæt! We Gardena in geardagum þeodcyninga þrym gefrunon."
(Beowulf opening - barely recognizable!)

**Key Influences:**
- Celtic languages (place names)
- Latin (Christianity brought words)
- Old Norse (Viking influence 793-1066)`,
    },
    {
      id: 'engelsk-vg1-7-1-def-2',
      type: 'definition',
      title: 'Middle and Modern English',
      content: `**Middle English (1100-1500):**
After Norman Conquest (1066), French influenced English heavily.
- Government, law, food words from French
- Simplified grammar (fewer word endings)
- Chaucer's Canterbury Tales is famous example

**Early Modern English (1500-1700):**
- Great Vowel Shift changed pronunciation
- Printing standardized spelling
- Shakespeare expanded vocabulary (1700+ new words)
- King James Bible (1611) influential

**Modern English (1700-present):**
- British Empire spread English globally
- Industrial Revolution added technical terms
- American English developed distinctly
- Technology constantly adds new words`,
    },
    {
      id: 'engelsk-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'These word pairs show French (Norman) vs Anglo-Saxon origins. Which is which?',
        subTasks: [
          { label: 'a', task: 'cow / beef', solution: 'cow (Anglo-Saxon - the animal), beef (French - the food)' },
          { label: 'b', task: 'begin / commence', solution: 'begin (Anglo-Saxon - everyday), commence (French - formal)' },
          { label: 'c', task: 'freedom / liberty', solution: 'freedom (Anglo-Saxon), liberty (French)' },
        ],
        hints: ['Anglo-Saxon words tend to be simpler, everyday words', 'French-origin words often sound more formal'],
        solution: 'This pattern shows how social class affected language after 1066.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_7_2: TextbookChapter = {
  id: 'engelsk-vg1-7-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.2',
  title: 'English as a Global Language',
  description: 'Understand why English became the world\'s lingua franca.',
  estimatedMinutes: 45,
  competenceGoals: ['beskrive sentrale trekk ved framveksten av engelsk som verdensspråk'],
  content: [
    {
      id: 'engelsk-vg1-7-2-intro',
      type: 'text',
      content: `## Why English?

Today, approximately 1.5 billion people speak English - but only about 400 million are native speakers. How did English become the world's lingua franca?

**Key Factors:**
1. British colonialism (17th-20th centuries)
2. American global influence (20th-21st centuries)
3. Economic and technological power
4. Scientific and academic dominance
5. Popular culture and entertainment`,
    },
    {
      id: 'engelsk-vg1-7-2-def-1',
      type: 'definition',
      title: 'The Three Circles of English',
      content: `**Kachru's Model (1985):**

**Inner Circle:**
Countries where English is the primary language
UK, USA, Australia, Canada, Ireland, New Zealand
~400 million speakers

**Outer Circle:**
Former colonies where English is official/important
India, Nigeria, Singapore, Philippines, etc.
~400 million speakers

**Expanding Circle:**
Countries learning English as a foreign language
China, Japan, Germany, Norway, Brazil, etc.
~700+ million speakers

**Implications:**
- Native speakers are now a minority
- Multiple "Englishes" exist worldwide
- Who "owns" English?`,
    },
    {
      id: 'engelsk-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Discuss these questions about English as a global language:',
        subTasks: [
          { label: 'a', task: 'What advantages does having a global language provide?', solution: 'International communication, business, science, travel, entertainment' },
          { label: 'b', task: 'What potential problems might arise?', solution: 'Language loss, cultural dominance, inequality between native/non-native speakers' },
          { label: 'c', task: 'Should English speakers from the "expanding circle" try to sound British or American? Why/why not?', solution: 'Open discussion - no single correct answer' },
        ],
        solution: 'The spread of English has both positive and negative consequences.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_7_3: TextbookChapter = {
  id: 'engelsk-vg1-7-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.3',
  title: 'World Englishes and Varieties',
  description: 'Explore different varieties of English around the world.',
  estimatedMinutes: 50,
  competenceGoals: ['beskrive sentrale trekk ved framveksten av engelsk som verdensspråk'],
  content: [
    {
      id: 'engelsk-vg1-7-3-intro',
      type: 'text',
      content: `## The Many Faces of English

There is no single "correct" English. Different varieties have developed around the world, each with their own vocabulary, pronunciation, and even grammar.

**Major Varieties:**
- British English
- American English
- Australian English
- Indian English
- South African English
- Nigerian English
- Singaporean English (Singlish)`,
    },
    {
      id: 'engelsk-vg1-7-3-def-1',
      type: 'definition',
      title: 'British vs American English',
      content: `**Spelling:**
| British | American |
|---------|----------|
| colour | color |
| centre | center |
| realise | realize |
| travelled | traveled |

**Vocabulary:**
| British | American |
|---------|----------|
| flat | apartment |
| boot (car) | trunk |
| queue | line |
| biscuit | cookie |
| lift | elevator |
| holiday | vacation |

**Grammar:**
British: "Have you got a pen?"
American: "Do you have a pen?"

British: "I've just eaten."
American: "I just ate."`,
    },
    {
      id: 'engelsk-vg1-7-3-def-2',
      type: 'definition',
      title: 'Post-Colonial Englishes',
      content: `**Indian English:**
- Distinctive vocabulary: "prepone" (opposite of postpone)
- "What is your good name?"
- Present continuous for states: "I am knowing him"
- Different prepositions: "discuss about"

**Nigerian English:**
- Pidgin influence
- "Chop" (eat), "dash" (give as gift)
- Different use of "senior/junior"

**Singaporean English (Singlish):**
- Influenced by Chinese, Malay, Tamil
- Particles: "lah," "leh," "lor"
- "Can!" (yes, it's possible)
- "Where got?" (that's not true)

**These are not "wrong" - they are legitimate varieties.**`,
    },
    {
      id: 'engelsk-vg1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: '"Translate" these expressions between British and American English:',
        subTasks: [
          { label: 'a', task: 'British: "I\'ll take the lift to the first floor to get to my flat."', solution: 'American: "I\'ll take the elevator to the second floor to get to my apartment."' },
          { label: 'b', task: 'American: "I put my bags in the trunk and got some gas before getting on the highway."', solution: 'British: "I put my bags in the boot and got some petrol before getting on the motorway."' },
        ],
        hints: ['Note: British "first floor" = American "second floor" (ground floor = first floor in US)'],
        solution: 'Understanding variations helps communication across English varieties.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_7_4: TextbookChapter = {
  id: 'engelsk-vg1-7-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.4',
  title: 'English in the Digital Age',
  description: 'Examine how English is used and evolving in digital communication.',
  estimatedMinutes: 40,
  competenceGoals: ['beskrive sentrale trekk ved framveksten av engelsk som verdensspråk'],
  content: [
    {
      id: 'engelsk-vg1-7-4-intro',
      type: 'text',
      content: `## Language in the Digital Era

The internet has transformed how English is used and is driving rapid language change.

**Digital English Features:**
- Abbreviations and acronyms (LOL, FOMO, TL;DR)
- Emoji as communication
- Hashtags and @mentions
- New words from tech (google as verb, tweet)
- Memes as language`,
    },
    {
      id: 'engelsk-vg1-7-4-def-1',
      type: 'definition',
      title: 'Internet Language',
      content: `**Common Abbreviations:**
- BRB - be right back
- IMHO - in my humble opinion
- TBH - to be honest
- ICYMI - in case you missed it
- FWIW - for what it's worth

**New Words from Technology:**
- Blog (web log)
- Selfie
- Vlog (video blog)
- Troll (online provocateur)
- Viral (spreading rapidly online)
- Streaming
- Podcast

**Emoji Language:**
Emoji can convey tone, replace words, or add nuance. Their meaning can vary by culture and context.`,
    },
    {
      id: 'engelsk-vg1-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Discuss these questions about digital English:',
        subTasks: [
          { label: 'a', task: 'Is internet language "ruining" English, or is it just natural evolution?', solution: 'Discussion question - consider how language has always changed' },
          { label: 'b', task: 'Should schools teach students about internet language? Why/why not?', solution: 'Discussion question - consider literacy and communication skills' },
          { label: 'c', task: 'What new words do you think will become standard English in the future?', solution: 'Predictions about tech and social media terminology' },
        ],
        solution: 'Language change is constant; digital communication accelerates it.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Export all chapters from this file
export const ENGELSK_VG1_CHAPTERS_DEL3 = [
  CHAPTER_ENGELSK_VG1_5_1,
  CHAPTER_ENGELSK_VG1_5_2,
  CHAPTER_ENGELSK_VG1_5_3,
  CHAPTER_ENGELSK_VG1_5_4,
  CHAPTER_ENGELSK_VG1_6_1,
  CHAPTER_ENGELSK_VG1_6_2,
  CHAPTER_ENGELSK_VG1_6_3,
  CHAPTER_ENGELSK_VG1_6_4,
  CHAPTER_ENGELSK_VG1_6_5,
  CHAPTER_ENGELSK_VG1_7_1,
  CHAPTER_ENGELSK_VG1_7_2,
  CHAPTER_ENGELSK_VG1_7_3,
  CHAPTER_ENGELSK_VG1_7_4,
];
