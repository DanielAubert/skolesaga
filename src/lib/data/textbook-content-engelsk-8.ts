/**
 * Tekstbok innhold for Engelsk 8. klasse
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Reading Skills - Understanding Texts
// ============================================================================

export const CHAPTER_ENGELSK_8_1_1: TextbookChapter = {
  id: 'engelsk-8-1-1',
  courseId: 'engelsk-8',
  chapterNumber: '1.1',
  title: 'Reading Skills - Understanding Texts',
  description: 'Learn strategies for reading and understanding different types of English texts.',
  estimatedMinutes: 45,
  competenceGoals: [
    'read, discuss and present content from various types of texts, including self-chosen texts',
    'use reading and writing strategies adapted to the purpose, type of text and genre'
  ],
  content: [
    {
      id: 'eng-8-1-1-intro',
      type: 'text',
      content: `
# Reading Skills

Reading in English is a skill that improves with practice. In this chapter, you will learn
strategies to help you understand different types of texts better.

Good readers use various **reading strategies** to help them understand what they read.
These strategies can be used before, during, and after reading.
      `
    },
    {
      id: 'eng-8-1-1-def-skimming',
      type: 'definition',
      title: 'Skimming',
      content: `**Skimming** is reading quickly to get the main idea of a text. You look at headings,
first sentences of paragraphs, and key words without reading every word.`
    },
    {
      id: 'eng-8-1-1-def-scanning',
      type: 'definition',
      title: 'Scanning',
      content: `**Scanning** is searching for specific information in a text. You move your eyes
quickly over the text looking for particular words, numbers, or facts.`
    },
    {
      id: 'eng-8-1-1-strategies',
      type: 'text',
      title: 'Before You Read',
      content: `
## Before Reading

Before you start reading a text, try these strategies:

1. **Look at the title and headings** - What do you think the text is about?
2. **Look at pictures and illustrations** - What do they tell you?
3. **Think about what you already know** - What do you know about this topic?
4. **Make predictions** - What do you think will happen or what will you learn?
      `
    },
    {
      id: 'eng-8-1-1-during',
      type: 'text',
      title: 'While You Read',
      content: `
## During Reading

While reading, use these strategies:

- **Highlight or underline** important information
- **Make notes** in the margin
- **Look up unknown words** - but try to guess from context first
- **Ask questions** about what you don't understand
- **Visualize** - create mental pictures of what you're reading
      `
    },
    {
      id: 'eng-8-1-1-tip-context',
      type: 'tip',
      title: 'Using Context Clues',
      content: `When you meet an unknown word, look at the words around it. Often you can
guess the meaning from the **context**. Ask yourself: What type of word is it?
What makes sense in this sentence?`
    },
    {
      id: 'eng-8-1-1-example',
      type: 'example',
      title: 'Using Context Clues',
      problem: `Read this sentence and guess what "famished" means:

*"After hiking for six hours without eating, Sarah was absolutely famished and could
think of nothing but food."*`,
      solution: `From the context, we can understand that "famished" means **very hungry**.
The clues are:
- "six hours without eating"
- "could think of nothing but food"

These phrases tell us that Sarah needed food badly, so "famished" must mean extremely hungry.`
    },
    {
      id: 'eng-8-1-1-after',
      type: 'text',
      title: 'After You Read',
      content: `
## After Reading

When you finish reading:

1. **Summarize** - What were the main points?
2. **Reflect** - What did you learn? What surprised you?
3. **Connect** - How does this relate to things you already knew?
4. **Evaluate** - Do you agree with the author? Why or why not?
      `
    },
    {
      id: 'eng-8-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-1-ex1',
        number: '1',
        type: 'classic',
        task: 'What is the purpose of skimming a text?',
        subTasks: [
          {
            label: 'a',
            task: 'Explain what skimming is used for.',
            solution: 'To get the main idea quickly',
            multipleChoiceOptions: ['To get the main idea quickly', 'To memorize every detail', 'To find a specific date or name', 'To read very slowly and carefully'],
          },
        ],
        solution: 'Skimming is reading quickly to get the main idea of a text.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Which reading strategy would you use to find a phone number in a long article?',
        subTasks: [
          {
            label: 'a',
            task: 'Choose the best reading strategy for finding specific information.',
            solution: 'Scanning',
            multipleChoiceOptions: ['Scanning', 'Skimming', 'Close reading', 'Summarizing'],
          },
        ],
        solution: 'Scanning is searching for specific information like numbers or names.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-1-ex3',
        number: '3',
        type: 'classic',
        task: `Read this sentence and choose the best meaning of "elated":

*"When Emma heard she had won the competition, she felt absolutely elated."*`,
        subTasks: [
          {
            label: 'a',
            task: 'What does "elated" mean based on the context?',
            solution: 'Extremely happy',
            multipleChoiceOptions: ['Extremely happy', 'Sad and disappointed', 'Confused and worried', 'Tired and exhausted'],
          },
        ],
        solution: 'The context tells us Emma won a competition, which would make her extremely happy. "Elated" means very happy or joyful.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Practice your reading strategies with a text of your choice.',
        subTasks: [
          {
            label: 'a',
            task: 'Choose a short English text (article, story, or webpage). Before reading, write down what you think it will be about based on the title and any images.',
            solution: 'Your prediction should be based on clues from the title, headings, and images.',
            multipleChoiceOptions: ['Your prediction should be based on clues from the title, headings, and images.', 'Skip the title and start reading immediately.', 'Only look at the last paragraph.', 'Ignore all visual elements.'],
          },
          {
            label: 'b',
            task: 'Read the text and note at least 3 new words. Try to guess their meaning from context before looking them up.',
            solution: 'You should identify unknown words and make educated guesses based on surrounding text.',
            multipleChoiceOptions: ['You should identify unknown words and make educated guesses based on surrounding text.', 'Look up every word in the dictionary immediately.', 'Skip all unknown words.', 'Only read words you already know.'],
          },
          {
            label: 'c',
            task: 'After reading, write a 3-4 sentence summary of the main points.',
            solution: 'Your summary should capture the key ideas without including every detail.',
            multipleChoiceOptions: ['Your summary should capture the key ideas without including every detail.', 'Copy the entire text word for word.', 'Write about something completely different.', 'Include only minor details.'],
          },
        ],
        hints: ['Look for topic sentences at the start of paragraphs', 'Context clues can be examples, definitions, or synonyms near the unknown word'],
        solution: 'This exercise helps you practice the full reading process: prediction, active reading, and reflection.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.2: Reading Fiction
// ============================================================================

export const CHAPTER_ENGELSK_8_1_2: TextbookChapter = {
  id: 'engelsk-8-1-2',
  courseId: 'engelsk-8',
  chapterNumber: '1.2',
  title: 'Reading Fiction',
  description: 'Explore narrative elements and learn to analyze short stories and novels.',
  estimatedMinutes: 50,
  competenceGoals: [
    'read, discuss and present content from various types of texts, including self-chosen texts',
    'read and reflect on content from fiction texts'
  ],
  content: [
    {
      id: 'eng-8-1-2-intro',
      type: 'text',
      content: `
# Reading Fiction

Fiction includes stories that are created from the author's imagination. This includes
short stories, novels, and plays. Understanding the elements of fiction helps you
appreciate and analyze what you read.
      `
    },
    {
      id: 'eng-8-1-2-def-plot',
      type: 'definition',
      title: 'Plot',
      content: `**Plot** is the sequence of events in a story. It usually includes:
- **Exposition**: Introduction of characters and setting
- **Rising action**: Events that build tension
- **Climax**: The turning point or most exciting moment
- **Falling action**: Events after the climax
- **Resolution**: How the story ends`
    },
    {
      id: 'eng-8-1-2-def-character',
      type: 'definition',
      title: 'Character',
      content: `**Characters** are the people (or animals/creatures) in a story.
- **Protagonist**: The main character
- **Antagonist**: The character who opposes the protagonist
- **Dynamic character**: Changes during the story
- **Static character**: Stays the same throughout`
    },
    {
      id: 'eng-8-1-2-def-setting',
      type: 'definition',
      title: 'Setting',
      content: `**Setting** is where and when the story takes place. It includes:
- **Place**: The location (country, city, building, etc.)
- **Time**: When it happens (historical period, season, time of day)
- **Atmosphere**: The mood created by the setting`
    },
    {
      id: 'eng-8-1-2-def-theme',
      type: 'definition',
      title: 'Theme',
      content: `**Theme** is the main message or idea in a story. Common themes include:
- Friendship and loyalty
- Good vs. evil
- Growing up and coming of age
- Love and relationships
- Courage and overcoming fears`
    },
    {
      id: 'eng-8-1-2-narrator',
      type: 'text',
      title: 'Point of View',
      content: `
## Narrative Point of View

The **narrator** tells the story. Different points of view include:

**First person** ("I"): The narrator is a character in the story.
> *"I walked into the room and immediately felt something was wrong."*

**Third person limited**: The narrator knows one character's thoughts.
> *"Sarah walked into the room. She immediately felt something was wrong."*

**Third person omniscient**: The narrator knows everyone's thoughts.
> *"Sarah walked in feeling nervous. Meanwhile, Tom was hiding behind the door, excited about the surprise."*
      `
    },
    {
      id: 'eng-8-1-2-example',
      type: 'example',
      title: 'Analyzing a Story Opening',
      problem: `Analyze this story opening:

*"It was a dark December evening when Maya first saw the old house. Snow was falling
softly, covering the broken fence and overgrown garden. She shouldn't be here -
everyone knew the place was haunted - but the mysterious letter had left her no choice."*`,
      solution: `**Setting**:
- Place: An old, abandoned house with a broken fence and overgrown garden
- Time: December evening, winter, snowing
- Atmosphere: Mysterious, slightly scary

**Character**: Maya - she seems brave (going to a "haunted" house) but also cautious ("She shouldn't be here")

**Plot setup**: There's a mysterious letter that has somehow forced Maya to come here - this creates suspense

**Point of view**: Third person limited - we know Maya's thoughts but not others'`
    },
    {
      id: 'eng-8-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-2-ex1',
        number: '1',
        type: 'classic',
        task: 'What is the climax of a story?',
        subTasks: [
          {
            label: 'a',
            task: 'Define what the climax of a story is.',
            solution: 'The turning point or most exciting moment',
            multipleChoiceOptions: ['The turning point or most exciting moment', 'The beginning where characters are introduced', 'The end of the story', 'The moral or lesson of the story'],
          },
        ],
        solution: 'The climax is the turning point or most intense moment in the story.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Which point of view is this? "I never expected to find a dragon in my backpack."',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the narrative point of view used in this sentence.',
            solution: 'First person',
            multipleChoiceOptions: ['First person', 'Second person', 'Third person limited', 'Third person omniscient'],
          },
        ],
        solution: 'The use of "I" shows this is first person narration.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'A character who changes and grows during a story is called a:',
        subTasks: [
          {
            label: 'a',
            task: 'What is the term for a character who develops throughout a story?',
            solution: 'Dynamic character',
            multipleChoiceOptions: ['Dynamic character', 'Static character', 'Antagonist', 'Narrator'],
          },
        ],
        solution: 'Dynamic characters develop and change during the story.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Read a short story and write an analysis.',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the main characters and describe if they are dynamic or static.',
            solution: 'Describe each major character and explain whether they change during the story.',
            multipleChoiceOptions: ['Describe each major character and explain whether they change during the story.', 'Only list the character names.', 'Focus only on the antagonist.', 'Ignore the characters and focus on setting.'],
          },
          {
            label: 'b',
            task: 'Describe the setting and explain how it affects the mood of the story.',
            solution: 'Include place, time, and the atmosphere it creates.',
            multipleChoiceOptions: ['Include place, time, and the atmosphere it creates.', 'Only mention the country.', 'Ignore the time period.', 'Focus only on weather.'],
          },
          {
            label: 'c',
            task: 'What is the theme of the story? Give examples from the text to support your answer.',
            solution: 'Identify the main message and use quotes or events as evidence.',
            multipleChoiceOptions: ['Identify the main message and use quotes or events as evidence.', 'Just state the theme without examples.', 'Make up your own theme.', 'Focus only on the plot.'],
          },
        ],
        hints: ['Look for how characters react to challenges', 'Consider what lesson the main character learns'],
        solution: 'A good analysis connects all elements: how setting affects characters, how plot reveals theme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 1.3: Reading Non-Fiction
// ============================================================================

export const CHAPTER_ENGELSK_8_1_3: TextbookChapter = {
  id: 'engelsk-8-1-3',
  courseId: 'engelsk-8',
  chapterNumber: '1.3',
  title: 'Reading Non-Fiction',
  description: 'Learn to read and evaluate informational texts, articles, and media.',
  estimatedMinutes: 45,
  competenceGoals: [
    'read, discuss and present content from various types of texts',
    'explore and reflect on the situation of indigenous peoples in the English-speaking world'
  ],
  content: [
    {
      id: 'eng-8-1-3-intro',
      type: 'text',
      content: `
# Reading Non-Fiction

Non-fiction texts give us information about the real world. They include news articles,
textbooks, biographies, essays, and websites. Reading non-fiction requires different
skills than reading fiction.
      `
    },
    {
      id: 'eng-8-1-3-types',
      type: 'text',
      title: 'Types of Non-Fiction',
      content: `
## Common Types of Non-Fiction

- **News articles**: Report current events
- **Feature articles**: In-depth coverage of topics
- **Biographies**: Stories of real people's lives
- **Essays**: Writer's thoughts on a topic
- **Informational texts**: Explain facts about a subject
- **Reviews**: Evaluate books, films, products, etc.
      `
    },
    {
      id: 'eng-8-1-3-def-fact',
      type: 'definition',
      title: 'Fact vs. Opinion',
      content: `**Fact**: A statement that can be proven true or false.
> *"Norway has a population of about 5.5 million people."*

**Opinion**: A personal belief or judgment that cannot be proven.
> *"Norway is the most beautiful country in the world."*`
    },
    {
      id: 'eng-8-1-3-critical',
      type: 'text',
      title: 'Critical Reading',
      content: `
## Reading Critically

When reading non-fiction, ask yourself:

1. **Who wrote this?** What are their qualifications?
2. **What is the purpose?** To inform, persuade, or entertain?
3. **When was it written?** Is the information still current?
4. **What evidence is given?** Are there facts, statistics, or examples?
5. **Is it biased?** Does it show only one side of an issue?
      `
    },
    {
      id: 'eng-8-1-3-warning',
      type: 'warning',
      title: 'Watch Out for Bias',
      content: `Bias is when a text favors one side over another. Signs of bias include:
- Strong emotional language
- Only presenting one viewpoint
- Ignoring counter-arguments
- Cherry-picking statistics

Always look for multiple sources when researching a topic.`
    },
    {
      id: 'eng-8-1-3-structure',
      type: 'text',
      title: 'Text Structure',
      content: `
## Common Text Structures

Non-fiction texts are often organized in specific ways:

- **Chronological**: Events in time order
- **Cause and effect**: Why things happen and their results
- **Compare and contrast**: Similarities and differences
- **Problem and solution**: A problem is presented, then solved
- **Description**: Detailed information about a topic
      `
    },
    {
      id: 'eng-8-1-3-tip',
      type: 'tip',
      title: 'Recognizing Text Structure',
      content: `Signal words help you identify text structure:
- **Chronological**: first, then, next, finally, in 1990
- **Cause/effect**: because, therefore, as a result, consequently
- **Compare/contrast**: similarly, however, on the other hand, unlike
- **Problem/solution**: the problem is, one solution, this can be solved by`
    },
    {
      id: 'eng-8-1-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Which of these is a FACT?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify which statement is a verifiable fact.',
            solution: 'The 2022 FIFA World Cup was held in Qatar.',
            multipleChoiceOptions: ['The 2022 FIFA World Cup was held in Qatar.', 'Football is the most exciting sport.', 'Everyone should exercise daily.', 'Summer is the best season.'],
          },
        ],
        solution: 'This is a fact that can be verified - the World Cup was indeed held in Qatar in 2022.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-1-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-3-ex2',
        number: '2',
        type: 'classic',
        task: 'What text structure uses words like "because," "therefore," and "as a result"?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the text structure associated with these signal words.',
            solution: 'Cause and effect',
            multipleChoiceOptions: ['Cause and effect', 'Chronological', 'Compare and contrast', 'Description'],
          },
        ],
        solution: 'Cause and effect texts explain why things happen and their results.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-1-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Which question is MOST important for evaluating if a source is reliable?',
        subTasks: [
          {
            label: 'a',
            task: 'Select the most important question for source evaluation.',
            solution: 'Who wrote it and what are their qualifications?',
            multipleChoiceOptions: ['Who wrote it and what are their qualifications?', 'Is the website colorful and attractive?', 'Does it have many advertisements?', 'Is it the first result on Google?'],
          },
        ],
        solution: 'Knowing who wrote something and their expertise helps you judge if the information is trustworthy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-1-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'eng-8-1-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Find and analyze a news article in English.',
        subTasks: [
          {
            label: 'a',
            task: 'Find a news article about a current event. Write down the source, author (if given), and date.',
            solution: 'Include the newspaper/website name, author name, and publication date.',
            multipleChoiceOptions: ['Include the newspaper/website name, author name, and publication date.', 'Only write the headline.', 'Skip the author information.', 'Ignore the publication date.'],
          },
          {
            label: 'b',
            task: 'Identify three facts and one opinion in the article.',
            solution: 'Facts can be verified; opinions are judgments or beliefs.',
            multipleChoiceOptions: ['Facts can be verified; opinions are judgments or beliefs.', 'All statements in news are facts.', 'Opinions are always at the beginning.', 'Facts and opinions are the same thing.'],
          },
          {
            label: 'c',
            task: 'Evaluate the article: Is it biased? Does it give evidence? Would you trust this source? Explain why.',
            solution: 'Consider the language used, whether multiple viewpoints are shown, and what evidence supports the claims.',
            multipleChoiceOptions: ['Consider the language used, whether multiple viewpoints are shown, and what evidence supports the claims.', 'Trust all news sources equally.', 'Only focus on the headline.', 'Ignore the evidence presented.'],
          },
        ],
        hints: ['Look at major news websites like BBC, NRK, or The Guardian', 'Opinions often include evaluative words like "best," "worst," "should"'],
        solution: 'Good media literacy means questioning what you read and checking multiple sources.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.1: Writing - The Writing Process
// ============================================================================

export const CHAPTER_ENGELSK_8_2_1: TextbookChapter = {
  id: 'engelsk-8-2-1',
  courseId: 'engelsk-8',
  chapterNumber: '2.1',
  title: 'The Writing Process',
  description: 'Learn the stages of writing: planning, drafting, revising, and editing.',
  estimatedMinutes: 45,
  competenceGoals: [
    'use reading and writing strategies adapted to the purpose, type of text and genre',
    'write formal and informal texts with structure and coherence'
  ],
  content: [
    {
      id: 'eng-8-2-1-intro',
      type: 'text',
      content: `
# The Writing Process

Good writing doesn't happen in one draft. Professional writers go through several
stages before their work is finished. Learning this process will help you become
a better writer.
      `
    },
    {
      id: 'eng-8-2-1-stages',
      type: 'definition',
      title: 'The Five Stages',
      content: `The writing process has five main stages:
1. **Prewriting**: Brainstorming and planning
2. **Drafting**: Writing your first version
3. **Revising**: Improving content and structure
4. **Editing**: Fixing grammar, spelling, punctuation
5. **Publishing**: Sharing your final work`
    },
    {
      id: 'eng-8-2-1-prewriting',
      type: 'text',
      title: 'Stage 1: Prewriting',
      content: `
## Prewriting

Before you write, spend time planning. Try these techniques:

**Brainstorming**: Write down all ideas that come to mind.

**Mind mapping**: Put your topic in the center and branch out with related ideas.

**Freewriting**: Write continuously for 5-10 minutes without stopping.

**Outlining**: Organize your ideas in a logical order.
      `
    },
    {
      id: 'eng-8-2-1-drafting',
      type: 'text',
      title: 'Stage 2: Drafting',
      content: `
## Drafting

When drafting:
- Don't worry about perfection - just get your ideas down
- Follow your outline, but be flexible
- Focus on content, not grammar
- Write in complete sentences
- Keep going even if you get stuck
      `
    },
    {
      id: 'eng-8-2-1-tip',
      type: 'tip',
      title: 'Beat Writer\'s Block',
      content: `If you get stuck while writing:
- Skip the difficult part and come back to it
- Talk about your ideas out loud
- Take a short break
- Read similar texts for inspiration
- Start writing in the middle, not the beginning`
    },
    {
      id: 'eng-8-2-1-revising',
      type: 'text',
      title: 'Stage 3: Revising',
      content: `
## Revising

Revising means improving your writing. Ask yourself:
- Is my main idea clear?
- Does each paragraph have a purpose?
- Are my ideas in a logical order?
- Have I included enough details and examples?
- Is my introduction interesting? Does my conclusion work?
      `
    },
    {
      id: 'eng-8-2-1-editing',
      type: 'text',
      title: 'Stage 4: Editing',
      content: `
## Editing

Editing focuses on correctness:
- Check spelling
- Fix grammar mistakes
- Correct punctuation
- Improve word choice
- Check sentence variety

**Tip**: Read your text aloud - you'll catch more errors!
      `
    },
    {
      id: 'eng-8-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-2-1-ex1',
        number: '1',
        type: 'classic',
        task: 'What is the FIRST stage of the writing process?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the first stage of the writing process.',
            solution: 'Prewriting',
            multipleChoiceOptions: ['Prewriting', 'Drafting', 'Editing', 'Publishing'],
          },
        ],
        solution: 'Prewriting (brainstorming and planning) comes first.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-2-1-ex2',
        number: '2',
        type: 'classic',
        task: 'What is the difference between revising and editing?',
        subTasks: [
          {
            label: 'a',
            task: 'Explain the difference between revising and editing.',
            solution: 'Revising improves content; editing fixes errors',
            multipleChoiceOptions: ['Revising improves content; editing fixes errors', 'They are the same thing', 'Editing comes before revising', 'Revising is only for long texts'],
          },
        ],
        solution: 'Revising focuses on ideas and structure, while editing focuses on grammar and spelling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Practice the prewriting stage for a text about your favorite hobby.',
        subTasks: [
          {
            label: 'a',
            task: 'Create a mind map with "My Hobby" in the center. Add at least 5 branches with related ideas.',
            solution: 'Branches might include: why you like it, when you started, equipment needed, where you do it, who you do it with.',
            multipleChoiceOptions: ['Branches might include: why you like it, when you started, equipment needed, where you do it, who you do it with.', 'Just write the hobby name.', 'Only include one branch.', 'Skip the mind map and start writing.'],
          },
          {
            label: 'b',
            task: 'Write a simple outline with introduction, 2-3 body points, and conclusion.',
            solution: 'The outline should show a logical order for presenting information about your hobby.',
            multipleChoiceOptions: ['The outline should show a logical order for presenting information about your hobby.', 'Write the entire text without planning.', 'Only include the introduction.', 'Skip the outline entirely.'],
          },
        ],
        hints: ['Think about who, what, when, where, why, and how'],
        solution: 'Good prewriting makes the drafting stage much easier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.2: Writing Paragraphs
// ============================================================================

export const CHAPTER_ENGELSK_8_2_2: TextbookChapter = {
  id: 'engelsk-8-2-2',
  courseId: 'engelsk-8',
  chapterNumber: '2.2',
  title: 'Writing Paragraphs',
  description: 'Learn to write clear, well-organized paragraphs with topic sentences.',
  estimatedMinutes: 40,
  competenceGoals: [
    'write formal and informal texts with structure and coherence'
  ],
  content: [
    {
      id: 'eng-8-2-2-intro',
      type: 'text',
      content: `
# Writing Paragraphs

A paragraph is a group of sentences about one main idea. Good paragraphs are
the building blocks of good writing.
      `
    },
    {
      id: 'eng-8-2-2-def-topic',
      type: 'definition',
      title: 'Topic Sentence',
      content: `The **topic sentence** tells the main idea of the paragraph. It is usually the
first sentence and helps readers know what to expect.

Example: *"Learning a musical instrument has many benefits."*`
    },
    {
      id: 'eng-8-2-2-structure',
      type: 'text',
      title: 'Paragraph Structure',
      content: `
## The TEXAS Model

**T** - Topic sentence (main idea)
**E** - Explain the topic
**X** - Example or evidence
**A** - Analyze/explain the example
**S** - Summary/link to next paragraph
      `
    },
    {
      id: 'eng-8-2-2-example',
      type: 'example',
      title: 'A Well-Structured Paragraph',
      problem: 'Analyze this paragraph:',
      solution: `*"**Learning a musical instrument has many benefits.** (Topic) Playing music improves concentration and memory because musicians must focus intensely while practicing. (Explain) For example, a study by Northwestern University found that students who played instruments performed better on memory tests. (Example) This suggests that the mental workout of reading music and coordinating movements strengthens the brain. (Analyze) Therefore, schools should encourage more students to learn instruments. (Summary)"*

Each sentence has a clear purpose, and the paragraph flows logically from the main idea to the conclusion.`
    },
    {
      id: 'eng-8-2-2-transitions',
      type: 'text',
      title: 'Transition Words',
      content: `
## Connecting Ideas

Use **transition words** to connect sentences and paragraphs:

**Adding**: also, furthermore, in addition, moreover
**Contrasting**: however, on the other hand, although, despite
**Cause/Effect**: because, therefore, as a result, consequently
**Examples**: for example, for instance, such as, specifically
**Sequence**: first, next, then, finally
**Conclusion**: in conclusion, therefore, thus, overall
      `
    },
    {
      id: 'eng-8-2-2-warning',
      type: 'warning',
      title: 'Common Paragraph Mistakes',
      content: `Avoid these problems:
- **Too many ideas**: Stick to ONE main idea per paragraph
- **No topic sentence**: Readers won't know what the paragraph is about
- **Missing transitions**: Ideas feel disconnected
- **Too short**: Usually need 4-8 sentences to develop an idea fully`
    },
    {
      id: 'eng-8-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-2-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Where is the topic sentence usually found?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify where the topic sentence is typically located in a paragraph.',
            solution: 'At the beginning of the paragraph',
            multipleChoiceOptions: ['At the beginning of the paragraph', 'At the end of the paragraph', 'In the middle of the paragraph', 'Topic sentences are not needed'],
          },
        ],
        solution: 'The topic sentence is usually first, introducing the main idea.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-2-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Which transition word shows CONTRAST?',
        subTasks: [
          {
            label: 'a',
            task: 'Select the transition word that indicates contrast.',
            solution: 'However',
            multipleChoiceOptions: ['However', 'Furthermore', 'Therefore', 'For example'],
          },
        ],
        solution: '"However" signals a contrast or opposing idea.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Write a paragraph using the TEXAS structure.',
        subTasks: [
          {
            label: 'a',
            task: 'Choose one of these topics: social media, climate change, or school uniforms.',
            solution: 'Pick the topic you have the most to say about.',
            multipleChoiceOptions: ['Pick the topic you have the most to say about.', 'Choose randomly without thinking.', 'Pick the most difficult topic.', 'Avoid all suggested topics.'],
          },
          {
            label: 'b',
            task: 'Write a paragraph of 5-7 sentences following TEXAS: Topic, Explain, eXample, Analyze, Summary.',
            solution: 'Each sentence should have a clear purpose in the paragraph structure.',
            multipleChoiceOptions: ['Each sentence should have a clear purpose in the paragraph structure.', 'Write random sentences without structure.', 'Only write 2 sentences.', 'Ignore the TEXAS model.'],
          },
        ],
        hints: ['Start with a clear opinion or claim', 'Your example can be from real life, research, or a hypothetical situation'],
        solution: 'A well-structured paragraph makes your argument clear and convincing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 2.3: Writing Different Text Types
// ============================================================================

export const CHAPTER_ENGELSK_8_2_3: TextbookChapter = {
  id: 'engelsk-8-2-3',
  courseId: 'engelsk-8',
  chapterNumber: '2.3',
  title: 'Writing Different Text Types',
  description: 'Learn to write narratives, descriptive texts, and formal/informal texts.',
  estimatedMinutes: 50,
  competenceGoals: [
    'write formal and informal texts with structure and coherence',
    'use reading and writing strategies adapted to the purpose, type of text and genre'
  ],
  content: [
    {
      id: 'eng-8-2-3-intro',
      type: 'text',
      content: `
# Different Text Types

Different situations require different types of writing. A text message to a friend
is very different from an essay for school. Understanding text types helps you write
appropriately for each situation.
      `
    },
    {
      id: 'eng-8-2-3-formal',
      type: 'definition',
      title: 'Formal vs. Informal Writing',
      content: `**Formal writing** is used in official contexts:
- Complete sentences, no contractions
- Professional vocabulary
- Objective tone
- Examples: essays, reports, job applications

**Informal writing** is for casual communication:
- Contractions OK, shorter sentences
- Casual vocabulary, possibly slang
- Personal tone
- Examples: texts, emails to friends, social media`
    },
    {
      id: 'eng-8-2-3-example-formal',
      type: 'example',
      title: 'Formal vs. Informal',
      problem: 'Compare these two versions:',
      solution: `**Informal (text to friend):**
*"Hey! Can't make it to the party tonight - stuck at work. Have fun tho!"*

**Formal (email to teacher):**
*"Dear Ms. Johnson,
I am writing to inform you that I will be unable to attend class tomorrow due to a family commitment. I will complete any missed assignments.
Best regards,
Emma"*`
    },
    {
      id: 'eng-8-2-3-narrative',
      type: 'text',
      title: 'Narrative Writing',
      content: `
## Narrative Writing

Narratives tell a story. Key elements:
- **Characters**: Who is in the story?
- **Setting**: Where and when?
- **Plot**: What happens? (beginning, middle, end)
- **Conflict**: What problem must be solved?
- **Point of view**: Who tells the story?

Use descriptive language and dialogue to bring your story to life.
      `
    },
    {
      id: 'eng-8-2-3-descriptive',
      type: 'text',
      title: 'Descriptive Writing',
      content: `
## Descriptive Writing

Descriptive writing paints a picture with words. Use:
- **Sensory details**: What do you see, hear, smell, taste, feel?
- **Specific adjectives**: Not "nice" but "cozy" or "elegant"
- **Figurative language**: Similes, metaphors, personification
- **Show, don't tell**: Instead of "She was scared," write "Her hands trembled."
      `
    },
    {
      id: 'eng-8-2-3-tip',
      type: 'tip',
      title: 'Show, Don\'t Tell',
      content: `Instead of telling readers how a character feels, show it through actions and details:

**Telling**: "John was angry."
**Showing**: "John slammed his fist on the table, his face turning red."`
    },
    {
      id: 'eng-8-2-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-2-3-ex1',
        number: '1',
        type: 'classic',
        task: 'Which text type would use contractions like "can\'t" and "won\'t"?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify which type of text typically uses contractions.',
            solution: 'A text message to a friend',
            multipleChoiceOptions: ['A text message to a friend', 'A formal essay', 'A job application', 'A research report'],
          },
        ],
        solution: 'Informal writing like texts to friends can use contractions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-2-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-2-3-ex2',
        number: '2',
        type: 'classic',
        task: 'Which sentence "shows" instead of "tells"?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the sentence that demonstrates "show, don\'t tell".',
            solution: 'Sarah jumped up, her eyes sparkling with joy.',
            multipleChoiceOptions: ['Sarah jumped up, her eyes sparkling with joy.', 'Sarah was very happy.', 'Sarah felt excited about the news.', 'Sarah was in a good mood.'],
          },
        ],
        solution: 'It shows happiness through actions (jumping) and details (sparkling eyes).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-2-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-2-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Write two versions of the same message.',
        subTasks: [
          {
            label: 'a',
            task: 'Imagine you need to ask for a deadline extension. Write an informal message to a classmate asking them to tell the teacher.',
            solution: 'Use casual language, contractions, and a friendly tone.',
            multipleChoiceOptions: ['Use casual language, contractions, and a friendly tone.', 'Use formal language with no contractions.', 'Write a very long academic essay.', 'Use only technical vocabulary.'],
          },
          {
            label: 'b',
            task: 'Now write a formal email directly to your teacher asking for the extension.',
            solution: 'Use complete sentences, polite language, and professional formatting.',
            multipleChoiceOptions: ['Use complete sentences, polite language, and professional formatting.', 'Use slang and abbreviations.', 'Skip the greeting entirely.', 'Write in all capital letters.'],
          },
          {
            label: 'c',
            task: 'List three specific differences between your two texts.',
            solution: 'Consider vocabulary, sentence structure, tone, and formatting.',
            multipleChoiceOptions: ['Consider vocabulary, sentence structure, tone, and formatting.', 'Only compare the length.', 'Ignore the differences.', 'Focus only on spelling.'],
          },
        ],
        hints: ['Include a greeting and closing in the formal email', 'Consider what information is essential vs. optional'],
        solution: 'Understanding register helps you communicate appropriately in different situations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.1: Grammar - Verb Tenses
// ============================================================================

export const CHAPTER_ENGELSK_8_3_1: TextbookChapter = {
  id: 'engelsk-8-3-1',
  courseId: 'engelsk-8',
  chapterNumber: '3.1',
  title: 'Verb Tenses',
  description: 'Master the main English tenses: present, past, and future.',
  estimatedMinutes: 50,
  competenceGoals: [
    'use central patterns for pronunciation, vocabulary and sentence structure'
  ],
  content: [
    {
      id: 'eng-8-3-1-intro',
      type: 'text',
      content: `
# Verb Tenses

Verb tenses tell us WHEN something happens. English has many tenses, but we'll
focus on the most important ones: present, past, and future.
      `
    },
    {
      id: 'eng-8-3-1-present-simple',
      type: 'definition',
      title: 'Present Simple',
      content: `Use **present simple** for:
- Facts and general truths: *"Water boils at 100 degrees C."*
- Habits and routines: *"I wake up at 7 every day."*
- Permanent situations: *"She lives in Oslo."*

**Form**: I/you/we/they + verb | he/she/it + verb + **s**
- *"I play football."* / *"She plays football."*`
    },
    {
      id: 'eng-8-3-1-present-cont',
      type: 'definition',
      title: 'Present Continuous',
      content: `Use **present continuous** for:
- Actions happening right now: *"I am reading a book."*
- Temporary situations: *"He is staying with friends this week."*
- Future arrangements: *"We are meeting tomorrow."*

**Form**: am/is/are + verb + **ing**
- *"She is watching TV."*`
    },
    {
      id: 'eng-8-3-1-past-simple',
      type: 'definition',
      title: 'Past Simple',
      content: `Use **past simple** for:
- Completed actions in the past: *"I visited Paris last year."*
- A series of past events: *"She woke up, ate breakfast, and left."*

**Form**: verb + **ed** (regular) or irregular form
- Regular: *"I walked, talked, played"*
- Irregular: *"went, saw, ate, took"*`
    },
    {
      id: 'eng-8-3-1-warning',
      type: 'warning',
      title: 'Common Irregular Verbs',
      content: `These verbs don't follow the -ed pattern:
| Base | Past | Past Participle |
|------|------|-----------------|
| go | went | gone |
| see | saw | seen |
| take | took | taken |
| eat | ate | eaten |
| write | wrote | written |
| give | gave | given |`
    },
    {
      id: 'eng-8-3-1-future',
      type: 'definition',
      title: 'Future Tenses',
      content: `**Will + verb** - predictions and spontaneous decisions:
- *"It will rain tomorrow."*
- *"I'll help you with that."*

**Going to + verb** - plans and intentions:
- *"I'm going to study medicine."*
- *"Look at those clouds - it's going to rain."*`
    },
    {
      id: 'eng-8-3-1-tip',
      type: 'tip',
      title: 'Will vs. Going to',
      content: `Use **will** when you decide at the moment of speaking:
*"The phone is ringing. I'll answer it."*

Use **going to** for plans you made earlier:
*"I'm going to visit my grandmother this weekend."* (planned before)`
    },
    {
      id: 'eng-8-3-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-3-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Which sentence is in present simple?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the sentence written in present simple tense.',
            solution: 'She reads every day.',
            multipleChoiceOptions: ['She reads every day.', 'She is reading a book.', 'She read yesterday.', 'She will read later.'],
          },
        ],
        solution: 'Present simple uses the base verb (+ s for he/she/it) for habits.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-3-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-3-1-ex2',
        number: '2',
        type: 'classic',
        task: 'What is the past simple of "go"?',
        subTasks: [
          {
            label: 'a',
            task: 'Provide the past simple form of the verb "go".',
            solution: 'went',
            multipleChoiceOptions: ['went', 'goed', 'gone', 'going'],
          },
        ],
        solution: '"Go - went - gone" is an irregular verb.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-3-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-3-1-ex3',
        number: '3',
        type: 'classic',
        task: '"Look at those dark clouds! It ___ rain." Which form is best?',
        subTasks: [
          {
            label: 'a',
            task: 'Choose the correct future form based on present evidence.',
            solution: 'is going to',
            multipleChoiceOptions: ['is going to', 'will', 'rains', 'rained'],
          },
        ],
        solution: '"Going to" is used when there is present evidence for a prediction.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-3-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'eng-8-3-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Complete the sentences with the correct tense.',
        subTasks: [
          {
            label: 'a',
            task: 'Right now, I ___ (write) my homework.',
            solution: 'am writing (present continuous for actions happening now)',
            multipleChoiceOptions: ['am writing (present continuous for actions happening now)', 'write (present simple)', 'wrote (past simple)', 'will write (future)'],
          },
          {
            label: 'b',
            task: 'Yesterday, we ___ (go) to the cinema.',
            solution: 'went (past simple for completed past actions)',
            multipleChoiceOptions: ['went (past simple for completed past actions)', 'go (present simple)', 'are going (present continuous)', 'will go (future)'],
          },
          {
            label: 'c',
            task: 'She ___ (play) tennis every Saturday.',
            solution: 'plays (present simple for habits/routines)',
            multipleChoiceOptions: ['plays (present simple for habits/routines)', 'is playing (present continuous)', 'played (past simple)', 'will play (future)'],
          },
        ],
        hints: ['Think about WHEN the action happens', 'Remember: he/she/it needs -s in present simple'],
        solution: 'Match the tense to the time expression in the sentence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 3.2: Grammar - Sentence Structure
// ============================================================================

export const CHAPTER_ENGELSK_8_3_2: TextbookChapter = {
  id: 'engelsk-8-3-2',
  courseId: 'engelsk-8',
  chapterNumber: '3.2',
  title: 'Sentence Structure',
  description: 'Learn to build correct English sentences and avoid common errors.',
  estimatedMinutes: 45,
  competenceGoals: [
    'use central patterns for pronunciation, vocabulary and sentence structure'
  ],
  content: [
    {
      id: 'eng-8-3-2-intro',
      type: 'text',
      content: `
# Sentence Structure

English sentences follow specific patterns. Understanding these patterns helps you
write correctly and avoid common Norwegian-English errors.
      `
    },
    {
      id: 'eng-8-3-2-basic',
      type: 'definition',
      title: 'Basic Word Order',
      content: `English uses **SVO** order: Subject - Verb - Object

- **Subject**: Who/what does the action
- **Verb**: The action
- **Object**: Who/what receives the action

*"**The cat** (S) **caught** (V) **a mouse** (O)."*`
    },
    {
      id: 'eng-8-3-2-adverbs',
      type: 'text',
      title: 'Adverb Placement',
      content: `
## Where to Put Adverbs

**Frequency adverbs** (always, never, often, usually) go BEFORE the main verb:
- *"I **always** eat breakfast."*
- *"I eat always breakfast."* (incorrect)

But AFTER the verb "be":
- *"She **is always** happy."*
- *"She always is happy."* (incorrect)
      `
    },
    {
      id: 'eng-8-3-2-warning',
      type: 'warning',
      title: 'Common Norwegian-English Errors',
      content: `**Don't translate directly from Norwegian!**

"I like me to play football." - "I **like** to play football."

"It is many people here." - "There **are** many people here."

"I have lived here in three years." - "I have lived here **for** three years."

"I am agree." - "I **agree**." (no "am")`
    },
    {
      id: 'eng-8-3-2-questions',
      type: 'text',
      title: 'Question Formation',
      content: `
## Making Questions

**Yes/No questions**: Put auxiliary verb first
- Statement: *"She **can** swim."*
- Question: ***"Can** she swim?"*

**Wh-questions**: Wh-word + auxiliary + subject + verb
- ***"Where** does she live?"*
- ***"What** are you doing?"*

**Important**: Don't forget the auxiliary (do/does/did)!
- *"Where she lives?"* (incorrect)
- *"Where **does** she live?"* (correct)
      `
    },
    {
      id: 'eng-8-3-2-tip',
      type: 'tip',
      title: 'Do/Does in Questions',
      content: `In present simple questions, use **do/does** + base verb:
- *"**Does** she **like** pizza?"* (not "Does she likes")
- *"**Do** you **play** football?"*

The main verb stays in base form - don't add -s!`
    },
    {
      id: 'eng-8-3-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-3-2-ex1',
        number: '1',
        type: 'classic',
        task: 'Which sentence has correct word order?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the sentence with correct adverb placement.',
            solution: 'They often play football.',
            multipleChoiceOptions: ['They often play football.', 'I always am tired.', 'She eats usually lunch at 12.', 'He plays often tennis.'],
          },
        ],
        solution: 'Frequency adverbs come before the main verb.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-3-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-3-2-ex2',
        number: '2',
        type: 'classic',
        task: 'Which question is grammatically correct?',
        subTasks: [
          {
            label: 'a',
            task: 'Select the grammatically correct question.',
            solution: 'What time does the train leave?',
            multipleChoiceOptions: ['What time does the train leave?', 'Where lives your brother?', 'Does she likes ice cream?', 'Why you are late?'],
          },
        ],
        solution: 'It follows the pattern: Wh-word + does + subject + base verb.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-3-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-3-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Fix this Norwegian-English error: "I have lived here in five years."',
        subTasks: [
          {
            label: 'a',
            task: 'Correct the preposition error in this sentence.',
            solution: 'I have lived here for five years.',
            multipleChoiceOptions: ['I have lived here for five years.', 'I have lived here since five years.', 'I lived here in five years.', 'I am living here in five years.'],
          },
        ],
        solution: 'Use "for" with periods of time (five years, two hours, etc.).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-3-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'eng-8-3-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Correct the errors in these sentences.',
        subTasks: [
          {
            label: 'a',
            task: '"I like me to read books."',
            solution: '"I like to read books." (remove "me" - this is a Norwegian pattern)',
            multipleChoiceOptions: ['"I like to read books." (remove "me" - this is a Norwegian pattern)', '"I like myself to read books."', '"Me like to read books."', '"I am liking me to read books."'],
          },
          {
            label: 'b',
            task: '"It is many students in my class."',
            solution: '"There are many students in my class." (use "there are" for existence)',
            multipleChoiceOptions: ['"There are many students in my class." (use "there are" for existence)', '"It are many students in my class."', '"Is many students in my class."', '"Many students it is in my class."'],
          },
          {
            label: 'c',
            task: '"Where does she lives?"',
            solution: '"Where does she live?" (base verb after does, no -s)',
            multipleChoiceOptions: ['"Where does she live?" (base verb after does, no -s)', '"Where do she lives?"', '"Where she does live?"', '"Where is she lives?"'],
          },
        ],
        hints: ['Think about what sounds natural in English', 'Don\'t translate word-for-word from Norwegian'],
        solution: 'Recognizing common errors helps you avoid them in your own writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 4.1: Speaking - Oral Presentations
// ============================================================================

export const CHAPTER_ENGELSK_8_4_1: TextbookChapter = {
  id: 'engelsk-8-4-1',
  courseId: 'engelsk-8',
  chapterNumber: '4.1',
  title: 'Oral Presentations',
  description: 'Learn to prepare and deliver effective presentations in English.',
  estimatedMinutes: 45,
  competenceGoals: [
    'express himself/herself fluently and coherently, adapted to the purpose and situation',
    'use central patterns for pronunciation, vocabulary and sentence structure'
  ],
  content: [
    {
      id: 'eng-8-4-1-intro',
      type: 'text',
      content: `
# Oral Presentations

Giving presentations is an important skill. Whether for school, work, or other contexts,
being able to speak clearly and confidently in English will help you succeed.
      `
    },
    {
      id: 'eng-8-4-1-structure',
      type: 'definition',
      title: 'Presentation Structure',
      content: `A good presentation has three parts:

**1. Introduction** (10%)
- Greet your audience
- Introduce your topic
- Tell them what you will cover

**2. Body** (80%)
- Main points with examples
- Logical order
- Transitions between sections

**3. Conclusion** (10%)
- Summarize main points
- End memorably
- Thank the audience`
    },
    {
      id: 'eng-8-4-1-phrases',
      type: 'text',
      title: 'Useful Phrases',
      content: `
## Opening
- *"Good morning/afternoon, everyone."*
- *"Today I'm going to talk about..."*
- *"I'd like to begin by..."*

## Transitions
- *"Moving on to my next point..."*
- *"Now let's look at..."*
- *"This brings me to..."*

## Closing
- *"In conclusion..."*
- *"To sum up..."*
- *"Thank you for listening. Any questions?"*
      `
    },
    {
      id: 'eng-8-4-1-tip',
      type: 'tip',
      title: 'Dealing with Nerves',
      content: `Feeling nervous is normal! Try these tips:
- **Practice** many times before the real presentation
- **Breathe** slowly and deeply before you start
- **Pause** if you need to collect your thoughts
- **Look** at friendly faces in the audience
- **Remember**: The audience wants you to succeed!`
    },
    {
      id: 'eng-8-4-1-warning',
      type: 'warning',
      title: 'Common Mistakes',
      content: `Avoid these presentation pitfalls:
- Reading directly from your notes/screen
- Speaking too fast
- Not making eye contact
- Using too much text on slides
- Not practicing beforehand
- Going over the time limit`
    },
    {
      id: 'eng-8-4-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-4-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Which phrase is best for STARTING a presentation?',
        subTasks: [
          {
            label: 'a',
            task: 'Choose the best opening phrase for a presentation.',
            solution: '"Today I\'m going to talk about..."',
            multipleChoiceOptions: ['"Today I\'m going to talk about..."', '"To sum up..."', '"Any questions?"', '"This brings me to..."'],
          },
        ],
        solution: 'This phrase introduces your topic at the start.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-4-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-4-1-ex2',
        number: '2',
        type: 'classic',
        task: 'Which is NOT good presentation practice?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the poor presentation practice.',
            solution: 'Reading your entire speech from notes',
            multipleChoiceOptions: ['Reading your entire speech from notes', 'Making eye contact with the audience', 'Practicing several times beforehand', 'Using examples to illustrate points'],
          },
        ],
        solution: 'Reading directly makes you seem unprepared and breaks connection with the audience.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-4-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-4-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Prepare a 2-minute presentation outline.',
        subTasks: [
          {
            label: 'a',
            task: 'Choose a topic you know well (hobby, favorite book/film, place you\'ve visited).',
            solution: 'Pick something you can speak about with enthusiasm.',
            multipleChoiceOptions: ['Pick something you can speak about with enthusiasm.', 'Choose a topic you know nothing about.', 'Pick the most boring topic possible.', 'Select a topic that requires no preparation.'],
          },
          {
            label: 'b',
            task: 'Write an introduction with: greeting, topic, and preview of your main points.',
            solution: 'Example: "Good morning. Today I\'m going to talk about surfing. I\'ll cover why I started, what equipment you need, and my favorite surf spots."',
            multipleChoiceOptions: ['Example: "Good morning. Today I\'m going to talk about surfing. I\'ll cover why I started, what equipment you need, and my favorite surf spots."', 'Just say "Hi" and start talking.', 'Skip the introduction entirely.', 'Only mention your name.'],
          },
          {
            label: 'c',
            task: 'List 3 main points with one example or detail for each.',
            solution: 'Each point should be supported by specific information.',
            multipleChoiceOptions: ['Each point should be supported by specific information.', 'List 10 points without details.', 'Only have one main point.', 'Skip examples entirely.'],
          },
          {
            label: 'd',
            task: 'Write a conclusion that summarizes and thanks the audience.',
            solution: 'Briefly restate main points and end with "Thank you for listening."',
            multipleChoiceOptions: ['Briefly restate main points and end with "Thank you for listening."', 'Just stop talking suddenly.', 'Add new information in the conclusion.', 'Skip the conclusion.'],
          },
        ],
        hints: ['Keep each point simple enough to remember', 'Practice saying it out loud'],
        solution: 'A good outline helps you speak confidently without reading everything.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// ============================================================================
// Kapittel 5.1: Culture - English-Speaking Countries
// ============================================================================

export const CHAPTER_ENGELSK_8_5_1: TextbookChapter = {
  id: 'engelsk-8-5-1',
  courseId: 'engelsk-8',
  chapterNumber: '5.1',
  title: 'English-Speaking Countries',
  description: 'Explore the geography, history, and cultures of major English-speaking nations.',
  estimatedMinutes: 50,
  competenceGoals: [
    'explore and describe ways of living, traditions and geography in areas where English is spoken',
    'explore and reflect on the situation of indigenous peoples in the English-speaking world'
  ],
  content: [
    {
      id: 'eng-8-5-1-intro',
      type: 'text',
      content: `
# English-Speaking Countries

English is spoken as a first language by about 400 million people worldwide.
It's an official language in over 50 countries across every continent.
Let's explore some of the main English-speaking nations.
      `
    },
    {
      id: 'eng-8-5-1-uk',
      type: 'text',
      title: 'The United Kingdom',
      content: `
## The United Kingdom

The UK consists of four countries:
- **England** - Capital: London
- **Scotland** - Capital: Edinburgh
- **Wales** - Capital: Cardiff
- **Northern Ireland** - Capital: Belfast

The UK has a rich history, from the Roman era through the British Empire
to modern multicultural society. It's known for the Royal Family, Premier League
football, and cultural exports like Harry Potter and The Beatles.
      `
    },
    {
      id: 'eng-8-5-1-usa',
      type: 'text',
      title: 'The United States',
      content: `
## The United States

The USA is the world's third-largest country with 50 states. Key facts:
- Population: ~330 million
- Capital: Washington, D.C.
- Major cities: New York, Los Angeles, Chicago

American culture has global influence through Hollywood, music, technology (Silicon Valley),
and fast food. The USA is known for diversity, with people from all over the world.
      `
    },
    {
      id: 'eng-8-5-1-other',
      type: 'text',
      title: 'Other English-Speaking Countries',
      content: `
## More English-Speaking Nations

**Canada** - Bilingual (English/French), known for hockey, maple syrup, and natural beauty.

**Australia** - Unique wildlife, indigenous Aboriginal culture, famous for beaches and the Outback.

**New Zealand** - Known for Maori culture, rugby, and stunning landscapes (Lord of the Rings films).

**Ireland** - Rich literary tradition, Celtic culture, known for music and green landscapes.

**South Africa** - 11 official languages including English, diverse wildlife, complex history.
      `
    },
    {
      id: 'eng-8-5-1-indigenous',
      type: 'note',
      title: 'Indigenous Peoples',
      content: `English-speaking countries have indigenous populations whose cultures predated European colonization:
- **Native Americans** (USA, Canada)
- **Aboriginal and Torres Strait Islanders** (Australia)
- **Maori** (New Zealand)

These communities have faced historical injustices but are working to preserve their languages, traditions, and rights. Learning about indigenous perspectives is important for understanding these countries.`
    },
    {
      id: 'eng-8-5-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'eng-8-5-1-ex1',
        number: '1',
        type: 'classic',
        task: 'Which country is NOT part of the United Kingdom?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the country that is not part of the UK.',
            solution: 'Ireland',
            multipleChoiceOptions: ['Ireland', 'Scotland', 'Wales', 'England'],
          },
        ],
        solution: 'Ireland (the Republic of Ireland) is an independent country. Northern Ireland is part of the UK.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-5-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'eng-8-5-1-ex2',
        number: '2',
        type: 'classic',
        task: 'The Maori are the indigenous people of which country?',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the country where the Maori people are indigenous.',
            solution: 'New Zealand',
            multipleChoiceOptions: ['New Zealand', 'Australia', 'Canada', 'South Africa'],
          },
        ],
        solution: 'The Maori are the indigenous Polynesian people of New Zealand.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eng-8-5-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'eng-8-5-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Research and compare two English-speaking countries.',
        subTasks: [
          {
            label: 'a',
            task: 'Choose two countries from the text and create a comparison table with: population, capital, main language(s), one famous landmark.',
            solution: 'Include accurate facts for both countries.',
            multipleChoiceOptions: ['Include accurate facts for both countries.', 'Only compare one country.', 'Make up the facts.', 'Ignore the comparison format.'],
          },
          {
            label: 'b',
            task: 'Write 3-4 sentences about how the two countries are similar.',
            solution: 'Consider shared language, history, or cultural elements.',
            multipleChoiceOptions: ['Consider shared language, history, or cultural elements.', 'Only mention that they speak English.', 'Focus only on differences.', 'Write about completely different countries.'],
          },
          {
            label: 'c',
            task: 'Write 3-4 sentences about how they are different.',
            solution: 'Consider geography, climate, population size, or traditions.',
            multipleChoiceOptions: ['Consider geography, climate, population size, or traditions.', 'Say they are exactly the same.', 'Only mention one country.', 'Focus only on similarities.'],
          },
        ],
        hints: ['Use reliable sources for facts', 'Think beyond just the language - what makes each country unique?'],
        solution: 'Comparing countries helps you understand both their shared English-speaking heritage and unique identities.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: []
};

// Eksporter alle kapitler
export const ENGELSK_8_CHAPTERS = [
  CHAPTER_ENGELSK_8_1_1,
  CHAPTER_ENGELSK_8_1_2,
  CHAPTER_ENGELSK_8_1_3,
  CHAPTER_ENGELSK_8_2_1,
  CHAPTER_ENGELSK_8_2_2,
  CHAPTER_ENGELSK_8_2_3,
  CHAPTER_ENGELSK_8_3_1,
  CHAPTER_ENGELSK_8_3_2,
  CHAPTER_ENGELSK_8_4_1,
  CHAPTER_ENGELSK_8_5_1,
];
