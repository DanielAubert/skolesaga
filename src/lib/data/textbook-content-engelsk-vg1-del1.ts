/**
 * Tekstbok innhold for Engelsk VG1 DEL 1
 * Section 1: Language Learning and Communication Strategies (1.1-1.5)
 * Section 2: Oral Communication (2.1-2.4)
 *
 * Dekker LK20 kompetansemål for ENG01-05.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SECTION 1: Language Learning and Communication Strategies
// ============================================================================

export const CHAPTER_ENGELSK_VG1_1_1: TextbookChapter = {
  id: 'engelsk-vg1-1-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.1',
  title: 'Language Learning Strategies',
  description: 'Develop effective strategies for learning English and improving your language skills.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke egnede strategier i språklæring, tekstskaping og kommunikasjon'],
  content: [
    {
      id: 'engelsk-vg1-1-1-intro',
      type: 'text',
      content: `## Effective Language Learning

Learning a new language is a journey that requires both dedication and smart strategies. The most successful language learners don't just study harder - they study smarter.

**The Four Key Areas of Language Learning:**
1. **Listening** - Understanding spoken language
2. **Speaking** - Producing spoken language
3. **Reading** - Understanding written language
4. **Writing** - Producing written language

**Why Strategies Matter:**
Research shows that learners who actively use learning strategies make faster progress and retain more of what they learn. Good strategies help you:
- Make the most of your study time
- Stay motivated when learning gets challenging
- Transfer skills between different language situations
- Become an independent, lifelong learner`,
    },
    {
      id: 'engelsk-vg1-1-1-def-1',
      type: 'definition',
      title: 'Types of Learning Strategies',
      content: `**Cognitive Strategies:**
Directly manipulating the language material
- Taking notes
- Summarizing
- Using context clues
- Creating mental images

**Metacognitive Strategies:**
Planning, monitoring, and evaluating your learning
- Setting goals
- Self-assessment
- Organizing study time
- Reflecting on progress

**Social Strategies:**
Learning through interaction with others
- Asking questions
- Collaborating with peers
- Finding conversation partners
- Seeking feedback

**Affective Strategies:**
Managing emotions and motivation
- Reducing anxiety
- Rewarding yourself
- Staying positive
- Using music and media`,
    },
    {
      id: 'engelsk-vg1-1-1-example-1',
      type: 'example',
      title: 'Example: Creating a Personal Learning Plan',
      problem: 'How can you create an effective weekly study plan for English?',
      solution: `**Sample Weekly English Study Plan:**

**Monday (30 min):** Vocabulary building
- Learn 10 new words with Quizlet or flashcards
- Use each word in a sentence

**Tuesday (30 min):** Listening practice
- Watch a YouTube video or podcast in English
- Take notes on new expressions

**Wednesday (30 min):** Reading
- Read an article on a topic you enjoy
- Look up 5 unknown words

**Thursday (30 min):** Writing practice
- Write a short paragraph about your day
- Try to use new vocabulary

**Friday (30 min):** Speaking practice
- Talk to yourself in English (narrate activities)
- Practice pronunciation with a language app

**Weekend:** Fun immersion
- Watch a movie/series in English
- Listen to English music and read lyrics`,
    },
    {
      id: 'engelsk-vg1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify which type of learning strategy each example represents:',
        subTasks: [
          {
            label: 'a',
            task: 'Setting a goal to learn 50 new words this month',
            solution: 'Metacognitive strategy',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
          {
            label: 'b',
            task: 'Asking a classmate to explain a grammar rule',
            solution: 'Social strategy',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
          {
            label: 'c',
            task: 'Creating a mind map to organize vocabulary by topic',
            solution: 'Cognitive strategy',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
          {
            label: 'd',
            task: 'Rewarding yourself with a treat after completing a difficult assignment',
            solution: 'Affective strategy',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
        ],
        solution: 'a) Metacognitive, b) Social, c) Cognitive, d) Affective',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Reflect on your own English learning. Answer these questions:',
        subTasks: [
          {
            label: 'a',
            task: 'What is your biggest strength when learning English?',
            solution: 'Personal reflection - answers will vary',
          },
          {
            label: 'b',
            task: 'What area do you find most challenging (listening, speaking, reading, or writing)?',
            solution: 'Personal reflection - answers will vary',
          },
          {
            label: 'c',
            task: 'What strategies have worked well for you in the past?',
            solution: 'Personal reflection - answers will vary',
          },
        ],
        hints: ['Be honest with yourself', 'Think about specific examples'],
        solution: 'Self-reflection is key to improving your learning approach.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Create your own weekly English learning plan. Include at least one activity for each of the four language skills (listening, speaking, reading, writing). Be specific about what you will do and for how long.',
        hints: ['Be realistic about your available time', 'Include activities you enjoy', 'Vary the difficulty'],
        solution: 'A good plan is specific, realistic, and balanced across all four skills.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_1_2: TextbookChapter = {
  id: 'engelsk-vg1-1-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.2',
  title: 'Digital Resources for Language Learning',
  description: 'Use digital tools and resources effectively for language learning and communication.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke egnede digitale ressurser og andre hjelpemidler i språklæring, tekstskaping og samhandling'],
  content: [
    {
      id: 'engelsk-vg1-1-2-intro',
      type: 'text',
      content: `## Digital Tools for Language Learning

Technology has revolutionized how we learn languages. Today, you have access to resources that previous generations could only dream of.

**Categories of Digital Language Learning Tools:**

1. **Language Learning Apps**
   - Duolingo, Babbel, Memrise
   - Good for vocabulary and basic grammar
   - Gamification keeps you motivated

2. **Online Dictionaries and Translators**
   - Cambridge Dictionary, Merriam-Webster
   - DeepL, Google Translate
   - Use for understanding, not copying!

3. **Media Platforms**
   - YouTube, Netflix, Spotify
   - Authentic content in English
   - Subtitles help comprehension

4. **Communication Tools**
   - Language exchange apps (Tandem, HelloTalk)
   - Video conferencing (Zoom, Teams)
   - Practice with real people worldwide`,
    },
    {
      id: 'engelsk-vg1-1-2-def-1',
      type: 'definition',
      title: 'Using AI Tools Responsibly',
      content: `**AI Language Tools (ChatGPT, etc.):**
Can be helpful for:
- Explaining grammar rules
- Providing example sentences
- Checking your writing for errors
- Practicing conversation

**Important Guidelines:**
- Use AI as a tutor, not a replacement for learning
- Don't copy AI-generated text as your own work
- Verify information with other sources
- Develop your own voice and style
- Remember: AI makes mistakes too!

**The goal is to LEARN, not to let AI do the work for you.**`,
    },
    {
      id: 'engelsk-vg1-1-2-example-1',
      type: 'example',
      title: 'Example: Using Netflix for Language Learning',
      problem: 'How can you use streaming services effectively to improve your English?',
      solution: `**The Netflix Method:**

**Step 1: Choose the right content**
- Start with shows you've already seen in Norwegian
- Choose content with clear speech (avoid heavy accents initially)
- Pick topics that interest you

**Step 2: Use subtitles strategically**
- First viewing: English audio + Norwegian subtitles
- Second viewing: English audio + English subtitles
- Advanced: English audio, no subtitles

**Step 3: Active watching**
- Pause to look up unfamiliar words
- Repeat phrases out loud
- Note useful expressions in a vocabulary journal

**Step 4: Shadowing technique**
- Play a short clip
- Pause after each sentence
- Repeat exactly what you heard, copying pronunciation

**Recommended shows for learners:**
- The Office (US) - everyday vocabulary
- Stranger Things - adventure vocabulary
- The Crown - formal British English`,
    },
    {
      id: 'engelsk-vg1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Evaluate these uses of digital translation tools. Which are appropriate and which are problematic?',
        subTasks: [
          {
            label: 'a',
            task: 'Using Google Translate to understand the main idea of a news article',
            solution: 'Appropriate - using it as a comprehension aid',
            multipleChoiceOptions: ['Appropriate', 'Problematic'],
          },
          {
            label: 'b',
            task: 'Writing an essay in Norwegian and translating the whole thing to English',
            solution: 'Problematic - you\'re not developing your own English writing skills',
            multipleChoiceOptions: ['Appropriate', 'Problematic'],
          },
          {
            label: 'c',
            task: 'Looking up how to say a specific word when writing',
            solution: 'Appropriate - expanding vocabulary while writing',
            multipleChoiceOptions: ['Appropriate', 'Problematic'],
          },
          {
            label: 'd',
            task: 'Having ChatGPT write your homework assignment',
            solution: 'Problematic - academic dishonesty and no learning',
            multipleChoiceOptions: ['Appropriate', 'Problematic'],
          },
        ],
        solution: 'a) Appropriate, b) Problematic, c) Appropriate, d) Problematic',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Create a list of 5 digital resources you currently use or plan to use for learning English. For each, explain how you use it and what skill it helps develop.',
        hints: ['Think about apps, websites, and media', 'Consider all four language skills'],
        solution: 'Answers will vary. Good responses include specific tools and clear explanations of their use.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Find an English podcast or YouTube channel on a topic that interests you. Listen to/watch one episode and write a short summary (100-150 words) of what you learned. Include 5 new words or expressions you encountered.',
        hints: ['Choose a topic you genuinely enjoy', 'Pause and replay difficult parts', 'Write down timestamps for interesting parts'],
        solution: 'A good response includes a clear summary and vocabulary items with definitions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_1_3: TextbookChapter = {
  id: 'engelsk-vg1-1-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.3',
  title: 'Pronunciation and Fluency',
  description: 'Master pronunciation patterns and develop fluency in spoken English.',
  estimatedMinutes: 50,
  competenceGoals: ['bruke mønstre for uttale i kommunikasjon'],
  content: [
    {
      id: 'engelsk-vg1-1-3-intro',
      type: 'text',
      content: `## The Sounds of English

English pronunciation can be challenging because the spelling often doesn't match the sound. The word "through" has seven letters but only three sounds!

**Why Pronunciation Matters:**
- Clear pronunciation helps others understand you
- Good pronunciation builds confidence
- It helps you understand spoken English better
- It's about communication, not perfection

**Key Pronunciation Features:**
1. **Individual sounds** (phonemes)
2. **Word stress** - which syllable is emphasized
3. **Sentence stress** - which words are emphasized
4. **Intonation** - the melody of speech
5. **Connected speech** - how words blend together`,
    },
    {
      id: 'engelsk-vg1-1-3-def-1',
      type: 'definition',
      title: 'English Sounds That Challenge Norwegian Speakers',
      content: `**The "th" sounds:**
- /θ/ (voiceless): think, through, bath
- /ð/ (voiced): this, that, weather
- Tip: Put your tongue between your teeth!

**The short "i" vs long "ee":**
- ship /ɪ/ vs sheep /iː/
- bit /ɪ/ vs beat /iː/
- sit /ɪ/ vs seat /iː/

**The "w" vs "v" distinction:**
- wine vs vine
- west vs vest
- Tip: Round your lips for "w"

**The schwa /ə/:**
- The most common sound in English
- Appears in unstressed syllables
- about, banana, problem`,
    },
    {
      id: 'engelsk-vg1-1-3-def-2',
      type: 'definition',
      title: 'Word Stress Patterns',
      content: `**Word stress** means saying one syllable louder, longer, and higher in pitch.

**Two-syllable nouns and adjectives:**
Usually stressed on the FIRST syllable
- TAble, WINdow, HAPpy, CLEver

**Two-syllable verbs:**
Often stressed on the SECOND syllable
- beLIEVE, reLAX, preTEND, deCIDE

**Stress changes meaning:**
- REcord (noun) vs reCORD (verb)
- PREsent (noun/adjective) vs preSENT (verb)
- CONtract (noun) vs conTRACT (verb)

**Longer words:**
- phoTOgraphy, phoTOgrapherr, photoGRAphic
- The stress often shifts with suffixes`,
    },
    {
      id: 'engelsk-vg1-1-3-example-1',
      type: 'example',
      title: 'Example: Sentence Stress and Meaning',
      problem: 'How does stress change the meaning of "I didn\'t say he stole the money"?',
      solution: `Each stress pattern implies something different:

**"I didn't say he stole the money"**
- (Someone else said it)

**"I DIDN'T say he stole the money"**
- (I definitely did not say this)

**"I didn't SAY he stole the money"**
- (I implied it or wrote it)

**"I didn't say HE stole the money"**
- (Someone else stole it)

**"I didn't say he STOLE the money"**
- (He borrowed it or found it)

**"I didn't say he stole THE money"**
- (He stole some other money)

**"I didn't say he stole the MONEY"**
- (He stole something else)

This shows how English uses stress to convey meaning!`,
    },
    {
      id: 'engelsk-vg1-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Mark the stressed syllable in each word by underlining it:',
        subTasks: [
          { label: 'a', task: 'photograph', solution: 'PHOtograph' },
          { label: 'b', task: 'photography', solution: 'phoTOgraphy' },
          { label: 'c', task: 'photographic', solution: 'photoGRAphic' },
          { label: 'd', task: 'important', solution: 'imPORtant' },
          { label: 'e', task: 'development', solution: 'deVElopment' },
        ],
        hints: ['Say the word out loud', 'Listen for which syllable sounds louder and longer'],
        solution: 'a) PHOtograph, b) phoTOgraphy, c) photoGRAphic, d) imPORtant, e) deVElopment',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Practice these minimal pairs. Record yourself saying both words and check that they sound different:',
        subTasks: [
          { label: 'a', task: 'ship / sheep', solution: 'Short /ɪ/ vs long /iː/' },
          { label: 'b', task: 'think / sink', solution: '/θ/ vs /s/' },
          { label: 'c', task: 'wine / vine', solution: '/w/ vs /v/' },
          { label: 'd', task: 'bath / bat', solution: '/θ/ vs /t/' },
        ],
        hints: ['Use your phone to record', 'Listen back and compare'],
        solution: 'Practice until you can clearly distinguish between each pair.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Read this tongue twister slowly, then gradually speed up. Focus on the "th" sounds: "The thirty-three thieves thought that they thrilled the throne throughout Thursday."',
        hints: ['Start very slowly', 'Focus on tongue position for "th"', 'Record yourself and listen back'],
        solution: 'Success means pronouncing all "th" sounds correctly while maintaining a reasonable pace.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_1_4: TextbookChapter = {
  id: 'engelsk-vg1-1-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.4',
  title: 'Academic Language and Register',
  description: 'Understand and use academic language when working with texts.',
  estimatedMinutes: 45,
  competenceGoals: ['lytte til, forstå og bruke akademisk språk i arbeid med egne muntlige og skriftlige tekster'],
  content: [
    {
      id: 'engelsk-vg1-1-4-intro',
      type: 'text',
      content: `## What is Academic Language?

Academic language is the formal language used in schools, universities, and professional settings. It differs from everyday conversational English in several important ways.

**Characteristics of Academic Language:**
- More formal vocabulary
- Complex sentence structures
- Precise and specific terms
- Objective tone
- Clear organization
- Evidence-based arguments

**Why Learn Academic Language?**
- Required for school assignments
- Essential for higher education
- Used in professional contexts
- Helps you express complex ideas clearly`,
    },
    {
      id: 'engelsk-vg1-1-4-def-1',
      type: 'definition',
      title: 'Register: Formal vs Informal',
      content: `**Register** refers to the level of formality in language use.

**Informal Register:**
- Contractions: don't, can't, won't
- Slang and colloquialisms
- First person (I think...)
- Simple sentence structures
- Phrasal verbs: put up with, figure out

**Formal/Academic Register:**
- No contractions: do not, cannot
- Precise vocabulary
- Third person or passive voice
- Complex sentences
- Single-word verbs: tolerate, determine

**Examples:**
| Informal | Academic |
|----------|----------|
| lots of | numerous, many |
| get | obtain, acquire |
| show | demonstrate, illustrate |
| think about | consider, examine |
| but | however, nevertheless |`,
    },
    {
      id: 'engelsk-vg1-1-4-def-2',
      type: 'definition',
      title: 'Academic Vocabulary (Tier 2 Words)',
      content: `**Tier 2 words** are high-utility academic words used across subjects.

**Analysis words:**
- analyze, examine, investigate
- compare, contrast, distinguish
- evaluate, assess, critique

**Explanation words:**
- therefore, consequently, thus
- because, since, due to
- as a result, accordingly

**Argument words:**
- argue, claim, assert
- support, justify, validate
- challenge, refute, contradict

**Description words:**
- significant, substantial, considerable
- primary, fundamental, essential
- complex, intricate, multifaceted`,
    },
    {
      id: 'engelsk-vg1-1-4-example-1',
      type: 'example',
      title: 'Example: Converting Informal to Academic',
      problem: 'Rewrite this informal text in academic style:\n"Kids today spend way too much time on their phones. It\'s really bad for them and messes up their sleep."',
      solution: `**Academic version:**

"Research indicates that contemporary adolescents allocate excessive time to smartphone usage. This behavior has been associated with significant negative consequences, including disrupted sleep patterns."

**Key changes made:**
- "Kids" → "contemporary adolescents"
- "way too much" → "excessive"
- "on their phones" → "to smartphone usage"
- "really bad" → "significant negative consequences"
- "messes up" → "disrupted"
- Added hedging: "Research indicates," "has been associated with"
- Removed contractions
- More complex sentence structure`,
    },
    {
      id: 'engelsk-vg1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Replace the informal words/phrases with more academic alternatives:',
        subTasks: [
          { label: 'a', task: 'a lot of people think...', solution: 'many individuals believe... / numerous people consider...' },
          { label: 'b', task: 'the problem got worse', solution: 'the problem intensified / the issue deteriorated' },
          { label: 'c', task: 'scientists found out that...', solution: 'researchers discovered that... / studies revealed that...' },
          { label: 'd', task: 'this shows that...', solution: 'this demonstrates that... / this indicates that...' },
        ],
        hints: ['Avoid contractions', 'Use more precise vocabulary'],
        solution: 'Academic writing requires more formal, precise vocabulary.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Rewrite this informal paragraph in academic style:\n\n"Social media is everywhere now. Basically everyone uses it, especially young people. Some folks say it\'s great for staying connected, but others think it\'s making us lonely and depressed. It\'s pretty complicated."',
        hints: ['Replace informal vocabulary', 'Remove contractions', 'Add hedging language', 'Use more complex sentences'],
        solution: 'Social media has become ubiquitous in contemporary society. The majority of the population, particularly younger demographics, engage with these platforms regularly. While some researchers argue that social media facilitates connection and communication, others contend that it may contribute to feelings of isolation and depression. The relationship between social media use and mental health is evidently complex and multifaceted.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_1_5: TextbookChapter = {
  id: 'engelsk-vg1-1-5',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.5',
  title: 'Connections Between Languages',
  description: 'Use knowledge of connections between English and other languages you know in your own language learning.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke kunnskap om sammenhengar mellom engelsk og andre språk eleven kjenner, i eiga språklæring'],
  content: [
    {
      id: 'engelsk-vg1-1-5-intro',
      type: 'text',
      content: `## English and Norwegian: Language Cousins

English and Norwegian are both Germanic languages, which means they share a common ancestor. This gives Norwegian speakers a significant advantage when learning English!

**The Germanic Language Family:**
- North Germanic: Norwegian, Swedish, Danish, Icelandic
- West Germanic: English, German, Dutch
- (East Germanic: Gothic - extinct)

**Why This Matters:**
- Many basic words are similar
- Some grammar structures are parallel
- Understanding language history helps vocabulary learning
- You can use Norwegian knowledge strategically`,
    },
    {
      id: 'engelsk-vg1-1-5-def-1',
      type: 'definition',
      title: 'Cognates: Words with Shared Origins',
      content: `**Cognates** are words in different languages that share a common origin.

**Norwegian-English Cognates:**
| Norwegian | English |
|-----------|---------|
| vann | water |
| hus | house |
| mann | man |
| fisk | fish |
| grønn | green |
| mor | mother |
| natt | night |
| lang | long |

**False Friends (Beware!):**
Words that look similar but have different meanings:
| Norwegian | Looks like | Actually means |
|-----------|------------|----------------|
| gift | gift | married/poison |
| barn | barn | child |
| fart | fart | speed |
| bra | bra | good |
| blank | blank | shiny |`,
    },
    {
      id: 'engelsk-vg1-1-5-def-2',
      type: 'definition',
      title: 'Norse Influence on English',
      content: `The Vikings had a major impact on English! From 793-1066 AD, Scandinavians settled in England and left thousands of words.

**Everyday Norse Words in English:**
- they, them, their (replaced Old English forms)
- sky, skin, skill, skirt
- egg, leg, neck
- take, give, get, want
- husband, window, knife
- happy, ugly, wrong, weak

**Place Names:**
- Names ending in -by (farm/town): Derby, Whitby
- Names ending in -thorpe (village): Scunthorpe
- Names ending in -thwaite (clearing): Braithwaite

**Grammar:**
- The pronouns they/them/their
- The verb "are" (from Norse)
- Word order similarities`,
    },
    {
      id: 'engelsk-vg1-1-5-example-1',
      type: 'example',
      title: 'Example: Using Transfer Strategies',
      problem: 'How can knowing Norwegian help you understand new English words?',
      solution: `**Strategy: Look for Germanic Roots**

When you encounter an unfamiliar English word, check if it has a Germanic (Norwegian) equivalent:

**Example 1: "forefather"**
- "fore" = Norwegian "for-" (before)
- "father" = Norwegian "far"
- Meaning: ancestor (forfader)

**Example 2: "understand"**
- "under" = Norwegian "under"
- "stand" = Norwegian "stå"
- Same structure as Norwegian "forstå"

**Example 3: "handbook"**
- "hand" = Norwegian "hånd"
- "book" = Norwegian "bok"
- Same as Norwegian "håndbok"

**Tip:** Many basic, concrete English words have Norwegian cognates, while more abstract vocabulary often comes from Latin/French.`,
    },
    {
      id: 'engelsk-vg1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match these English words with their Norwegian cognates:',
        subTasks: [
          { label: 'a', task: 'bread', solution: 'brød', multipleChoiceOptions: ['brød', 'bra', 'bred', 'brud'] },
          { label: 'b', task: 'dream', solution: 'drøm', multipleChoiceOptions: ['dram', 'drøm', 'drum', 'drom'] },
          { label: 'c', task: 'silver', solution: 'sølv', multipleChoiceOptions: ['selv', 'sølv', 'sylv', 'silv'] },
          { label: 'd', task: 'daughter', solution: 'datter', multipleChoiceOptions: ['dotter', 'dater', 'datter', 'doter'] },
        ],
        solution: 'a) brød, b) drøm, c) sølv, d) datter',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'These English words came from Old Norse (Viking language). Try to guess their meanings based on similar Norwegian words:',
        subTasks: [
          { label: 'a', task: 'slaughter', solution: 'slakt (to kill animals for meat)' },
          { label: 'b', task: 'awkward', solution: 'From "afug" (turned wrong way) - clumsy, uncomfortable' },
          { label: 'c', task: 'skull', solution: 'skalle (the bone structure of the head)' },
          { label: 'd', task: 'ransack', solution: 'From "rannsaka" - to search thoroughly, often destructively' },
        ],
        hints: ['Think about similar-sounding Norwegian words', 'Consider historical contexts'],
        solution: 'Using your knowledge of Norwegian helps decode English words with Norse origins.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Research and write a short paragraph (100-150 words) about how the Viking Age influenced the English language. Include at least 5 specific examples of Norse loanwords.',
        hints: ['Use reliable sources', 'Include everyday words that came from Norse', 'Mention place names if relevant'],
        solution: 'A good response demonstrates understanding of historical language contact and provides accurate examples.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 2: Oral Communication
// ============================================================================

export const CHAPTER_ENGELSK_VG1_2_1: TextbookChapter = {
  id: 'engelsk-vg1-2-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '2.1',
  title: 'Expressing Yourself with Nuance',
  description: 'Learn to express yourself with precision, fluency and varied sentence structures.',
  estimatedMinutes: 50,
  competenceGoals: ['uttrykke seg nyansert og presist med flyt og sammenheng, idiomatiske uttrykk og varierte setningsstrukturer tilpasset formål, mottaker og situasjon'],
  content: [
    {
      id: 'engelsk-vg1-2-1-intro',
      type: 'text',
      content: `## Speaking with Nuance and Precision

Speaking English well isn't just about being grammatically correct - it's about expressing exactly what you mean with the right tone, style, and level of detail.

**What is Nuanced Expression?**
- Showing subtle differences in meaning
- Choosing words that match your intent precisely
- Adapting your language to the situation
- Using varied vocabulary and structures

**Components of Fluent Speech:**
1. **Accuracy** - correct grammar and vocabulary
2. **Fluency** - smooth, continuous speech
3. **Coherence** - logical, organized ideas
4. **Appropriateness** - right style for the context`,
    },
    {
      id: 'engelsk-vg1-2-1-def-1',
      type: 'definition',
      title: 'Hedging and Softening Language',
      content: `**Hedging** means using language that is less direct or absolute. It's essential for academic and polite communication.

**Hedging Words:**
- Modal verbs: might, may, could, would
- Adverbs: perhaps, possibly, probably, apparently
- Phrases: it seems that, it appears that, tends to

**Examples:**
| Direct | Hedged |
|--------|--------|
| This is wrong | This might be incorrect |
| Social media causes depression | Social media may contribute to depression |
| Everyone knows | Many people believe |
| This proves | This suggests |

**When to Hedge:**
- Academic writing (showing uncertainty)
- Polite disagreement
- Making requests
- Discussing sensitive topics`,
    },
    {
      id: 'engelsk-vg1-2-1-def-2',
      type: 'definition',
      title: 'Sentence Variety',
      content: `Varying your sentence structure makes your speech more engaging and easier to follow.

**Sentence Types:**
- **Simple:** One independent clause
  "The climate is changing."

- **Compound:** Two independent clauses joined by a conjunction
  "The climate is changing, and we must act."

- **Complex:** Independent + dependent clause
  "Although some deny it, the climate is changing."

- **Compound-complex:** Multiple clauses
  "While scientists agree on the facts, politicians debate solutions, and progress remains slow."

**Techniques for Variety:**
- Start with different parts of speech
- Vary sentence length
- Use questions and exclamations
- Include transitional phrases`,
    },
    {
      id: 'engelsk-vg1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Rewrite these direct statements using hedging language to make them more nuanced:',
        subTasks: [
          { label: 'a', task: 'Video games make children violent.', solution: 'Video games may contribute to aggressive behavior in some children. / There appears to be a possible connection between video games and violent behavior.' },
          { label: 'b', task: 'This solution will work.', solution: 'This solution might work. / This approach could potentially be effective.' },
          { label: 'c', task: 'The author is criticizing society.', solution: 'The author seems to be criticizing society. / It appears that the author may be critiquing societal norms.' },
        ],
        hints: ['Use modal verbs (might, may, could)', 'Add hedging phrases (it seems, it appears, possibly)'],
        solution: 'Hedged statements sound more academic and acknowledge uncertainty.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Combine these simple sentences into more complex, varied structures:',
        subTasks: [
          { label: 'a', task: 'The book was long. It was interesting. I finished it quickly.', solution: 'Although the book was long, it was so interesting that I finished it quickly.' },
          { label: 'b', task: 'Social media connects people. It can also isolate them. This is a paradox.', solution: 'While social media connects people, it can paradoxically isolate them as well.' },
        ],
        hints: ['Use conjunctions and subordinating words', 'Try different sentence structures'],
        solution: 'Combining sentences creates more sophisticated, flowing speech.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_2_2: TextbookChapter = {
  id: 'engelsk-vg1-2-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '2.2',
  title: 'Idioms and Expressions',
  description: 'Master common English idioms and idiomatic expressions.',
  estimatedMinutes: 45,
  competenceGoals: ['uttrykke seg nyansert og presist med flyt og sammenheng, idiomatiske uttrykk'],
  content: [
    {
      id: 'engelsk-vg1-2-2-intro',
      type: 'text',
      content: `## Idioms: The Spice of English

Idioms are phrases where the meaning cannot be understood from the individual words. They add color and naturalness to your English.

**Why Learn Idioms?**
- Native speakers use them constantly
- They make your English sound more natural
- Understanding them helps comprehension
- They often appear in media, literature, and conversation

**Caution:**
- Don't overuse idioms - it can sound forced
- Make sure you understand the context
- Some idioms are old-fashioned or regional
- Literal translations rarely work!`,
    },
    {
      id: 'engelsk-vg1-2-2-def-1',
      type: 'definition',
      title: 'Common English Idioms',
      content: `**Idioms About Understanding:**
- "It's all Greek to me" = I don't understand at all
- "To get the hang of something" = to learn how to do something
- "To be on the same page" = to have the same understanding

**Idioms About Effort:**
- "To go the extra mile" = to make more effort than expected
- "To burn the midnight oil" = to work late into the night
- "To pull your weight" = to do your fair share

**Idioms About Communication:**
- "To beat around the bush" = to avoid saying something directly
- "To cut to the chase" = to get to the point
- "To speak your mind" = to say what you really think

**Idioms About Success/Failure:**
- "To hit the nail on the head" = to be exactly right
- "To miss the boat" = to miss an opportunity
- "Back to square one" = starting over from the beginning`,
    },
    {
      id: 'engelsk-vg1-2-2-def-2',
      type: 'definition',
      title: 'Phrasal Verbs',
      content: `**Phrasal verbs** are combinations of verbs with particles (prepositions or adverbs) that create new meanings.

**Common Phrasal Verbs:**
- **look up** = search for information
- **look after** = take care of
- **look forward to** = anticipate with pleasure
- **look into** = investigate

- **put off** = postpone
- **put up with** = tolerate
- **put together** = assemble
- **put forward** = propose

- **figure out** = solve/understand
- **find out** = discover
- **work out** = exercise / solve
- **turn out** = result in / happen

**Tip:** Learn phrasal verbs in context, not just as vocabulary lists!`,
    },
    {
      id: 'engelsk-vg1-2-2-example-1',
      type: 'example',
      title: 'Example: Idioms in Context',
      problem: 'Use appropriate idioms to complete this dialogue between two students.',
      solution: `**Student A:** "I've been studying for this exam all week, even **burning the midnight oil** last night."

**Student B:** "Same here. At first, the material was **all Greek to me**, but now I think I'm **getting the hang of it**."

**Student A:** "Let's not **beat around the bush** - are you worried about the essay question?"

**Student B:** "Honestly, yes. But we're **in the same boat**. Let's help each other and **go the extra mile** to prepare."

**Student A:** "Good idea. If we work together, we might **hit the nail on the head** with our answers!"

Notice how the idioms make the conversation sound natural and expressive.`,
    },
    {
      id: 'engelsk-vg1-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match each idiom with its meaning:',
        subTasks: [
          { label: 'a', task: 'to be under the weather', solution: 'to feel ill', multipleChoiceOptions: ['to feel ill', 'to be confused', 'to be outside', 'to be sad'] },
          { label: 'b', task: 'to bite off more than you can chew', solution: 'to take on too much', multipleChoiceOptions: ['to eat too much', 'to take on too much', 'to be greedy', 'to speak rudely'] },
          { label: 'c', task: 'to let the cat out of the bag', solution: 'to reveal a secret', multipleChoiceOptions: ['to free an animal', 'to make a mistake', 'to reveal a secret', 'to start a fight'] },
          { label: 'd', task: 'once in a blue moon', solution: 'very rarely', multipleChoiceOptions: ['at night', 'very rarely', 'in the morning', 'during celebrations'] },
        ],
        solution: 'a) to feel ill, b) to take on too much, c) to reveal a secret, d) very rarely',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Replace the underlined phrases with appropriate phrasal verbs:',
        subTasks: [
          { label: 'a', task: 'I need to search for information about this topic.', solution: 'I need to look up information about this topic.' },
          { label: 'b', task: 'She decided to postpone the meeting.', solution: 'She decided to put off the meeting.' },
          { label: 'c', task: 'I can\'t tolerate this noise anymore!', solution: 'I can\'t put up with this noise anymore!' },
          { label: 'd', task: 'We need to solve this problem together.', solution: 'We need to figure out / work out this problem together.' },
        ],
        hints: ['Think of common phrasal verbs', 'Consider look, put, figure, work'],
        solution: 'Using phrasal verbs makes your English sound more natural.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Write a short dialogue (10-12 lines) between two friends discussing a school project. Include at least 4 idioms or phrasal verbs naturally in the conversation.',
        hints: ['Use idioms about effort, understanding, or communication', 'Make sure they fit the context naturally'],
        solution: 'A good dialogue uses idioms appropriately without sounding forced.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_2_3: TextbookChapter = {
  id: 'engelsk-vg1-2-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '2.3',
  title: 'Conversations and Discussions',
  description: 'Develop skills for meaningful conversations and discussions.',
  estimatedMinutes: 50,
  competenceGoals: ['forklare andres argumenter og bruke og følge opp andres innspill i samtaler og diskusjoner om ulike emner'],
  content: [
    {
      id: 'engelsk-vg1-2-3-intro',
      type: 'text',
      content: `## The Art of Discussion

Good discussions are about more than just expressing your own views. They require listening, responding to others, and building on what has been said.

**Keys to Effective Discussion:**
1. **Active listening** - truly hearing what others say
2. **Building on ideas** - connecting to others' points
3. **Respectful disagreement** - challenging ideas, not people
4. **Asking good questions** - deepening the conversation
5. **Staying on topic** - maintaining focus`,
    },
    {
      id: 'engelsk-vg1-2-3-def-1',
      type: 'definition',
      title: 'Discussion Phrases',
      content: `**Agreeing:**
- "I completely agree with..."
- "That's a good point, and I'd add..."
- "I see what you mean about..."
- "You've raised an important point..."

**Partly Agreeing:**
- "I see your point, but..."
- "That's true to some extent, however..."
- "While I agree that..., I also think..."
- "You make a valid point, although..."

**Disagreeing Politely:**
- "I see it differently..."
- "I'm not sure I agree because..."
- "That's one perspective, but..."
- "I understand why you think that, but..."

**Asking for Clarification:**
- "Could you explain what you mean by...?"
- "Can you give an example of...?"
- "Are you saying that...?"
- "What do you mean when you say...?"`,
    },
    {
      id: 'engelsk-vg1-2-3-def-2',
      type: 'definition',
      title: 'Summarizing and Building',
      content: `**Summarizing Others' Arguments:**
- "So, if I understand correctly, you're saying..."
- "To summarize your point..."
- "Your main argument seems to be..."
- "What I hear you saying is..."

**Building on Others' Ideas:**
- "Building on what [name] said..."
- "To add to that point..."
- "That connects to something I've been thinking..."
- "Taking that idea further..."

**Introducing New Perspectives:**
- "Another way to look at this is..."
- "Have we considered...?"
- "What about the perspective of...?"
- "There's also the question of..."`,
    },
    {
      id: 'engelsk-vg1-2-3-example-1',
      type: 'example',
      title: 'Example: A Classroom Discussion',
      problem: 'How should students interact in a discussion about social media?',
      solution: `**Topic: Is social media good for teenagers?**

**Anna:** "I think social media is mostly positive. It helps us stay connected with friends and discover new interests."

**Ben:** "That's a good point, Anna. **Building on that**, I'd say it also gives young people a voice on important issues. However, **I see it a bit differently** when it comes to mental health - there's research showing negative effects."

**Clara:** "**I agree with Ben about** the mental health concerns. **Could you give an example**, Ben, of what kind of effects you mean?"

**Ben:** "Sure - studies show increased anxiety and depression linked to social media use, especially comparing yourself to others."

**Anna:** "**That's true to some extent**, but **I'd argue that** it's about how you use it. Following positive accounts can actually improve mental health."

**David:** "**To summarize what's been said** - it seems we all agree social media has both benefits and risks, and that how we use it matters. **Another way to look at this** might be to consider whether schools should teach digital literacy..."

Notice how each speaker acknowledges others' points before adding their own perspective.`,
    },
    {
      id: 'engelsk-vg1-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose appropriate phrases to complete these discussion responses:',
        subTasks: [
          { label: 'a', task: 'Someone argues that homework should be banned. You partly agree. Complete: "____________, but I think some homework can be useful for practice."', solution: 'I see your point / That\'s true to some extent / You make a valid point' },
          { label: 'b', task: 'You want to add to a classmate\'s point. Complete: "____________ what Maria said, I\'d like to add that..."', solution: 'Building on / To add to / Expanding on' },
          { label: 'c', task: 'You don\'t understand someone\'s argument. Complete: "____________ what you mean by \'digital natives\'?"', solution: 'Could you explain / Can you clarify / What do you mean when you say' },
        ],
        solution: 'Using appropriate discussion phrases creates a respectful, productive conversation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Read the following argument and write a response that: 1) summarizes the main point, 2) acknowledges something valid, and 3) offers a different perspective.\n\nArgument: "Schools should start later because teenagers need more sleep. Research shows that adolescent brains aren\'t fully awake until later in the morning, and early start times lead to worse academic performance."',
        hints: ['Use phrases like "Your main argument is..." and "While I agree that..." and "However, we should also consider..."'],
        solution: 'A good response might be: "Your main argument is that later school start times would benefit teenagers\' sleep and academic performance. I agree that sleep is crucial for learning, and the research you mention is compelling. However, we should also consider the practical challenges - parents\' work schedules, after-school activities, and transportation logistics would all need to change. Perhaps a compromise, like starting 30 minutes later, could address both concerns."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'In groups of 3-4, have a 10-minute discussion on ONE of these topics. Each person should use at least 3 discussion phrases (agreeing, disagreeing, building, summarizing). Record your discussion if possible.\n\nTopics:\na) Should AI be used to help students with homework?\nb) Is it better to travel or to save money?\nc) Should voting age be lowered to 16?',
        hints: ['Prepare some initial thoughts', 'Listen carefully to others', 'Try to use varied discussion phrases'],
        solution: 'A successful discussion involves balanced participation, respectful exchange, and use of appropriate discussion language.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_2_4: TextbookChapter = {
  id: 'engelsk-vg1-2-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '2.4',
  title: 'Presentations and Public Speaking',
  description: 'Master the art of giving engaging presentations and speeches.',
  estimatedMinutes: 55,
  competenceGoals: ['uttrykke seg nyansert og presist med flyt og sammenheng tilpasset formål, mottaker og situasjon'],
  content: [
    {
      id: 'engelsk-vg1-2-4-intro',
      type: 'text',
      content: `## Speaking to an Audience

Public speaking is a skill that can be learned. Even the most confident speakers were once nervous beginners!

**Why Presentation Skills Matter:**
- Essential for school and university
- Valuable in most careers
- Builds confidence
- Helps organize your thoughts

**The Three Pillars of Effective Presentations:**
1. **Content** - what you say
2. **Delivery** - how you say it
3. **Structure** - how you organize it`,
    },
    {
      id: 'engelsk-vg1-2-4-def-1',
      type: 'definition',
      title: 'Presentation Structure',
      content: `**The Classic Three-Part Structure:**

**1. Introduction (10-15%)**
- Hook: Grab attention (question, quote, statistic, story)
- Topic: State what you'll talk about
- Preview: Outline your main points
- "Tell them what you're going to tell them"

**2. Body (70-80%)**
- 2-4 main points
- Each point supported by evidence/examples
- Clear transitions between points
- "Tell them"

**3. Conclusion (10-15%)**
- Summary of main points
- Final thought or call to action
- Memorable closing
- "Tell them what you told them"

**Timing Rule:**
For a 10-minute presentation:
- Introduction: 1-1.5 minutes
- Body: 7-8 minutes
- Conclusion: 1-1.5 minutes`,
    },
    {
      id: 'engelsk-vg1-2-4-def-2',
      type: 'definition',
      title: 'Delivery Techniques',
      content: `**Voice:**
- Volume: Loud enough to be heard
- Pace: Not too fast, pause for emphasis
- Variety: Change pitch and tone
- Clarity: Articulate clearly

**Body Language:**
- Eye contact: Look at different parts of the audience
- Posture: Stand tall, appear confident
- Gestures: Natural, purposeful hand movements
- Movement: Move purposefully, don't pace nervously

**Visual Aids:**
- Keep slides simple (6 words per line, 6 lines per slide)
- Use images more than text
- Don't read from slides
- Make sure everyone can see

**Managing Nerves:**
- Prepare thoroughly
- Practice out loud multiple times
- Breathe deeply before starting
- Remember: the audience wants you to succeed`,
    },
    {
      id: 'engelsk-vg1-2-4-example-1',
      type: 'example',
      title: 'Example: Opening Hooks',
      problem: 'What are effective ways to start a presentation about climate change?',
      solution: `**Option 1: Startling Statistic**
"Every minute, the equivalent of one garbage truck of plastic is dumped into our oceans. By 2050, there could be more plastic than fish in the sea."

**Option 2: Provocative Question**
"What will you tell your children when they ask why we didn't act on climate change when we had the chance?"

**Option 3: Personal Story**
"Last summer, my family visited our usual holiday spot - only to find the beach had shrunk by half due to rising sea levels. That's when climate change became personal for me."

**Option 4: Quote**
"As David Attenborough said, 'The moment of crisis has come in efforts to stop climate change.' Today, I want to explore what that crisis means for our generation."

**Option 5: Vivid Description**
"Imagine waking up to find your street flooded, your school closed indefinitely, and your favorite places underwater. For millions of people worldwide, this isn't imagination - it's reality."

Each hook immediately engages the audience and sets up the topic.`,
    },
    {
      id: 'engelsk-vg1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Write three different hooks for a presentation about ONE of these topics:',
        subTasks: [
          { label: 'Topics', task: 'a) The importance of mental health\nb) Why learning languages matters\nc) The future of artificial intelligence', solution: 'Choose one topic and write hooks using statistics, questions, and stories.' },
        ],
        hints: ['Use a startling statistic', 'Ask a thought-provoking question', 'Tell a brief story'],
        solution: 'Good hooks immediately engage the audience and make them want to listen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Create a presentation outline for a 5-minute talk on "The Benefits of Reading." Include:\n- An attention-grabbing hook\n- 3 main points with supporting details\n- Transition phrases between points\n- A memorable conclusion',
        hints: ['Think about physical, mental, and social benefits', 'Include specific examples', 'Plan transition phrases like "Moving on to...", "Another important benefit is..."'],
        solution: 'A complete outline shows clear structure and logical flow.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Prepare and deliver a 3-minute presentation on a topic of your choice. Record yourself and evaluate your performance using this checklist:\n- Did I grab attention at the start?\n- Was my structure clear?\n- Did I make eye contact?\n- Did I speak at a good pace?\n- Was my conclusion memorable?',
        hints: ['Practice several times before recording', 'Time yourself', 'Watch the recording and note areas for improvement'],
        solution: 'Self-assessment helps identify strengths and areas for improvement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Export all chapters
export const ENGELSK_VG1_CHAPTERS_DEL1 = [
  CHAPTER_ENGELSK_VG1_1_1,
  CHAPTER_ENGELSK_VG1_1_2,
  CHAPTER_ENGELSK_VG1_1_3,
  CHAPTER_ENGELSK_VG1_1_4,
  CHAPTER_ENGELSK_VG1_1_5,
  CHAPTER_ENGELSK_VG1_2_1,
  CHAPTER_ENGELSK_VG1_2_2,
  CHAPTER_ENGELSK_VG1_2_3,
  CHAPTER_ENGELSK_VG1_2_4,
];
