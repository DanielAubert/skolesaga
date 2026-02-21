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
  estimatedMinutes: 60,
  competenceGoals: ['bruke egnede strategier i språklæring, tekstskaping og kommunikasjon'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-1-1-intro',
      type: 'text',
      content: `## Becoming a Strategic Language Learner

Have you ever wondered why some people seem to pick up languages effortlessly while others struggle for years? The secret isn't intelligence or natural talent—it's strategy. The most successful language learners have developed a toolkit of techniques that they apply consistently and consciously.

Think about learning English as embarking on a journey. You wouldn't set off on a long trip without a map, supplies, and a plan. Similarly, approaching language learning strategically means equipping yourself with the right tools and knowing when to use them.

**Learning Goals for This Chapter:**
By the end of this chapter, you will be able to:
- Identify and explain the four main types of language learning strategies
- Analyze your own learning style and preferences
- Select appropriate strategies for different learning situations
- Create a personalized learning plan based on your goals and needs
- Apply metacognitive strategies to monitor and improve your learning

**The Four Pillars of Language Proficiency:**

| Skill | Description | Example Activities |
|-------|-------------|-------------------|
| **Listening** | Understanding spoken English in various contexts | Podcasts, films, conversations |
| **Speaking** | Producing clear, fluent spoken English | Discussions, presentations, daily conversation |
| **Reading** | Comprehending written texts of varying complexity | Articles, novels, academic texts |
| **Writing** | Creating coherent written texts for different purposes | Essays, emails, creative writing |

These four skills are interconnected—improving one often helps the others. A strategic learner knows how to develop all four in a balanced way.`,
    },
    // --- TEORI 1: Types of Learning Strategies ---
    {
      id: 'engelsk-vg1-1-1-theory-1',
      type: 'definition',
      title: 'The Four Categories of Learning Strategies',
      content: `Language learning researchers have identified four main categories of strategies that successful learners use. Understanding these categories helps you build a complete toolkit for your learning journey.

**1. Cognitive Strategies**
These strategies involve directly working with the language material to understand, remember, and use it.

*Key Cognitive Strategies:*
- **Repetition and rehearsal**: Practicing words or phrases until they become automatic
- **Note-taking**: Writing down important information in an organized way
- **Summarizing**: Condensing information into key points
- **Using context clues**: Guessing meaning from surrounding words
- **Creating associations**: Linking new words to images, sounds, or personal experiences
- **Categorizing**: Grouping words by theme, grammar, or other features
- **Using resources**: Looking up words in dictionaries, grammar guides, etc.

**2. Metacognitive Strategies**
"Meta" means "about"—so metacognitive strategies are about thinking about your thinking. These help you plan, monitor, and evaluate your learning.

*Key Metacognitive Strategies:*
- **Goal-setting**: Defining clear, measurable objectives (e.g., "Learn 20 new words this week")
- **Planning**: Organizing your study time and activities
- **Self-monitoring**: Checking your understanding as you learn
- **Self-evaluation**: Assessing your progress honestly
- **Identifying problems**: Recognizing what you don't understand
- **Seeking solutions**: Finding ways to address learning difficulties

**3. Social Strategies**
Language is fundamentally social, and these strategies involve learning through interaction with others.

*Key Social Strategies:*
- **Asking for clarification**: Requesting explanations when you don't understand
- **Asking for correction**: Inviting others to correct your mistakes
- **Collaborating**: Working with classmates on learning tasks
- **Finding conversation partners**: Seeking opportunities to practice speaking
- **Joining communities**: Participating in English-speaking groups or forums
- **Learning from feedback**: Using others' responses to improve

**4. Affective Strategies**
These strategies help you manage the emotional aspects of learning, which are just as important as the intellectual ones.

*Key Affective Strategies:*
- **Managing anxiety**: Using techniques to reduce nervousness
- **Self-encouragement**: Giving yourself positive messages
- **Rewarding yourself**: Celebrating achievements, big and small
- **Taking risks**: Being willing to make mistakes
- **Maintaining motivation**: Finding personal reasons to keep learning
- **Creating positive associations**: Making learning enjoyable through games, music, etc.`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-1-1-example-1',
      type: 'example',
      title: 'Example: Applying Different Strategies to Learn New Vocabulary',
      problem: 'You encounter the word "resilient" in a text and want to learn it thoroughly. How can you apply different types of strategies?',
      solution: `Let's see how each strategy type can help you truly master a new word like "resilient":

**Cognitive Strategies:**
1. *Look it up*: Check a dictionary—"resilient" means able to recover quickly from difficulties; tough and adaptable.
2. *Create associations*: Think of a rubber ball that bounces back when dropped—that's resilience!
3. *Use it in sentences*: "After losing the match, the team showed they were resilient by winning the next five games."
4. *Find word family members*: resilient (adj.), resilience (n.), resiliently (adv.)

**Metacognitive Strategies:**
1. *Set a goal*: "I will use 'resilient' in conversation or writing at least three times this week."
2. *Monitor*: Keep track of whether you've used it
3. *Evaluate*: At the end of the week, check—can you use it naturally?

**Social Strategies:**
1. *Ask a classmate*: "Have you heard the word 'resilient' before? What does it mean to you?"
2. *Use it in discussion*: In your next group work, try to use the word naturally
3. *Get feedback*: Ask your teacher or a native speaker if you're using it correctly

**Affective Strategies:**
1. *Connect emotionally*: Think of a time when YOU were resilient—overcoming a challenge
2. *Celebrate*: When you successfully use the word, acknowledge your progress
3. *Stay positive*: If you forget the word, don't worry—it's part of learning!

**The Result:**
By applying multiple strategies, you move from simply recognizing the word to truly owning it—being able to use it naturally and confidently in your own English.`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify which type of learning strategy each example represents. Choose from: Cognitive, Metacognitive, Social, or Affective.',
        subTasks: [
          {
            label: 'a',
            task: 'Setting a goal to learn 50 new words this month',
            solution: 'Metacognitive strategy - This involves planning and setting specific learning objectives.',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
          {
            label: 'b',
            task: 'Asking a classmate to explain a grammar rule you find confusing',
            solution: 'Social strategy - This involves learning through interaction with others and asking for clarification.',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
          {
            label: 'c',
            task: 'Creating a mind map to organize vocabulary by topic (food, travel, emotions, etc.)',
            solution: 'Cognitive strategy - This involves categorizing and organizing language material to understand and remember it better.',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
          {
            label: 'd',
            task: 'Rewarding yourself with your favorite snack after completing a challenging assignment',
            solution: 'Affective strategy - This involves managing motivation through self-reward.',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
          {
            label: 'e',
            task: 'Checking your understanding by summarizing a podcast episode in your own words',
            solution: 'Cognitive strategy (summarizing) combined with Metacognitive strategy (self-monitoring). The primary action is cognitive—working directly with the language material.',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
          {
            label: 'f',
            task: 'Taking a deep breath before speaking English to calm your nerves',
            solution: 'Affective strategy - This involves managing anxiety and emotions to improve learning.',
            multipleChoiceOptions: ['Cognitive', 'Metacognitive', 'Social', 'Affective'],
          },
        ],
        solution: 'a) Metacognitive, b) Social, c) Cognitive, d) Affective, e) Cognitive (with metacognitive element), f) Affective. Understanding these categories helps you build a balanced toolkit of learning strategies.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'For each learning situation below, suggest TWO different strategies that could help. Explain why each strategy would be effective.',
        subTasks: [
          {
            label: 'a',
            task: 'You need to give a presentation in English next week and you feel very nervous about speaking in front of the class.',
            solution: 'Strategy 1 (Affective): Practice positive self-talk, reminding yourself that mistakes are normal and that you are prepared. This reduces anxiety and builds confidence. Strategy 2 (Social): Practice your presentation with a friend or family member first and ask for feedback. This builds confidence through practice and helps you identify areas to improve.',
          },
          {
            label: 'b',
            task: 'You keep forgetting new vocabulary words even after looking them up multiple times.',
            solution: 'Strategy 1 (Cognitive): Use spaced repetition—review words at increasing intervals (after 1 day, 3 days, 1 week, etc.) to move them to long-term memory. Strategy 2 (Cognitive): Create personal associations or sentences using the words in context that connects to your own life, making them more memorable.',
          },
          {
            label: 'c',
            task: 'You understand English when you read it, but struggle to understand spoken English, especially in movies.',
            solution: 'Strategy 1 (Cognitive): Watch with English subtitles first, then rewatch without subtitles. This helps you connect written and spoken forms. Strategy 2 (Metacognitive): Set specific listening goals—start with slower content (documentaries, news) and gradually move to faster speech (films, TV shows).',
          },
        ],
        hints: ['Consider what type of challenge each situation presents', 'Think about which strategy category would best address the problem'],
        solution: 'Effective learners match their strategies to the specific challenge they face. There is often more than one good approach!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2: Deeper Dive into Metacognition ---
    {
      id: 'engelsk-vg1-1-1-theory-2',
      type: 'definition',
      title: 'Metacognition: Learning How to Learn',
      content: `Metacognition is perhaps the most powerful category of learning strategies because it helps you manage all the others. It's the difference between just going through the motions and truly taking control of your learning.

**The Three Phases of Metacognitive Learning:**

**Phase 1: Planning (Before Learning)**
Before you start studying, ask yourself:
- What am I trying to learn today?
- How long will I study and what will I focus on?
- What strategies will work best for this task?
- What resources do I need?
- What do I already know about this topic?

*Example*: Before watching an English documentary, you might decide: "I'll watch for 20 minutes, focus on noting new vocabulary, and pause to look up words I don't understand."

**Phase 2: Monitoring (During Learning)**
While learning, regularly check in with yourself:
- Am I understanding this material?
- Is my strategy working?
- Do I need to slow down or try something different?
- What parts are confusing me?
- Am I staying focused?

*Example*: Halfway through the documentary, you notice you're just passively watching without taking notes. You pause, rewind, and actively start writing down new expressions.

**Phase 3: Evaluating (After Learning)**
After your study session, reflect:
- What did I learn today?
- What strategies worked well?
- What didn't work, and why?
- What will I do differently next time?
- What should I focus on in my next session?

*Example*: After the documentary, you review your notes and realize you learned 8 new expressions. You decide that pausing more frequently would help you catch even more.

**The Power of Self-Reflection**
Research consistently shows that students who regularly reflect on their learning make faster progress. Keeping a learning journal—even just a few sentences after each study session—can dramatically improve your results.

**Questions for Regular Self-Reflection:**
1. What strategies did I use today?
2. How effective were they on a scale of 1-10?
3. What was the most challenging part?
4. What am I proud of?
5. What will I try differently tomorrow?`,
    },
    // --- EKSEMPEL 2 ---
    {
      id: 'engelsk-vg1-1-1-example-2',
      type: 'example',
      title: 'Example: Creating a Personal Learning Plan',
      problem: 'Emma wants to improve her English for the upcoming school year. How can she create an effective, balanced weekly study plan?',
      solution: `**Emma's Self-Assessment:**
First, Emma honestly evaluates her current skills and goals:
- Strengths: Good at reading, enjoys watching English-language YouTube
- Weaknesses: Speaking makes her nervous, writing feels slow and awkward
- Goal: Be more confident speaking in class discussions by December

**Emma's Weekly English Learning Plan:**

| Day | Time | Focus | Activity | Strategy Type |
|-----|------|-------|----------|---------------|
| Monday | 25 min | Vocabulary | Quizlet session: 15 new words + review of previous words | Cognitive |
| Tuesday | 30 min | Listening | English podcast (with notes on new expressions) | Cognitive |
| Wednesday | 20 min | Speaking | Read article aloud, then summarize it verbally | Cognitive + Metacognitive |
| Thursday | 25 min | Writing | Write 150-word journal entry about the week | Cognitive |
| Friday | 20 min | Speaking | Practice discussion phrases, record and listen back | Cognitive + Affective |
| Weekend | 45 min | Immersion | Watch show/movie in English (no Norwegian subtitles!) | Multiple |

**Emma's Metacognitive Check-ins:**
- Every Sunday evening: 5-minute reflection on the week—what worked? What to adjust?
- Monthly goal check: Am I getting closer to my December speaking goal?

**Emma's Affective Strategies:**
- Reward: After completing the weekly plan, she allows herself guilt-free gaming time on Sunday
- Anxiety management: Before speaking practice, she does 3 deep breaths and reminds herself that mistakes help her learn
- Motivation: She has a vision board with pictures of places she wants to visit where she'll need English

**Key Features of Emma's Plan:**
1. **Specific**: Each day has a clear activity, not just "study English"
2. **Balanced**: All four skills are covered during the week
3. **Realistic**: 20-30 minutes per day is manageable alongside schoolwork
4. **Flexible**: Weekends have a larger block for enjoyment-focused learning
5. **Reflective**: Built-in check-ins to evaluate and adjust`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Complete a self-assessment of your English language skills. Be honest—this is for your own benefit!',
        subTasks: [
          {
            label: 'a',
            task: 'Rate each skill from 1 (need much improvement) to 5 (very confident): Listening, Speaking, Reading, Writing',
            solution: 'Personal reflection - ratings will vary. What matters is honest self-assessment as the starting point for improvement.',
          },
          {
            label: 'b',
            task: 'Which skill is your strongest? Give an example of when you demonstrated this strength.',
            solution: 'Personal reflection. A good answer includes a specific example, such as: "Reading is my strongest skill. Last month I read an entire short story in English and understood the plot without using a dictionary."',
          },
          {
            label: 'c',
            task: 'Which skill needs the most improvement? What makes this skill challenging for you?',
            solution: 'Personal reflection. A good answer identifies specific challenges, such as: "Speaking is hardest for me. I know the words in my head, but I get nervous and forget them when I have to speak in front of others."',
          },
          {
            label: 'd',
            task: 'What is one specific, measurable goal you want to achieve in English this semester?',
            solution: 'Personal reflection. Good goals are SMART: Specific, Measurable, Achievable, Relevant, Time-bound. Example: "I want to participate in class discussions at least twice per week by the end of October."',
          },
        ],
        hints: ['Be honest with yourself—accurate self-assessment is the first step to improvement', 'Think about specific situations where you use English'],
        solution: 'Self-assessment is a crucial metacognitive skill. By understanding your current abilities and setting clear goals, you can focus your efforts effectively.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Create your own weekly English learning plan. Use the template below and fill in specific activities for each day.',
        subTasks: [
          {
            label: 'a',
            task: 'Plan activities for Monday through Friday (at least 15-30 minutes each day). Include what skill you will focus on and what specific activity you will do.',
            solution: 'Personal plan - will vary. A good plan is specific (not just "study English" but "watch one TED talk and note 5 new words"), realistic (matches available time), and balanced (covers different skills throughout the week).',
          },
          {
            label: 'b',
            task: 'Plan a longer "immersion" activity for the weekend (30-60 minutes).',
            solution: 'Personal plan - will vary. Good weekend activities combine learning with enjoyment: watching a film, playing a video game in English, reading a book for pleasure, listening to a playlist of English music.',
          },
          {
            label: 'c',
            task: 'Describe one affective strategy you will use to stay motivated and manage any anxiety.',
            solution: 'Personal plan - will vary. Examples include: setting up a reward system, practicing positive self-talk before challenging activities, using calming techniques before speaking tasks, or finding a study buddy for accountability.',
          },
        ],
        hints: ['Be realistic about your available time', 'Include activities you genuinely enjoy', 'Balance all four skills over the week', 'Build in reflection time'],
        solution: 'A good learning plan is personalized to your goals, realistic about your time, and includes both skill development and enjoyment. Remember to actually follow your plan—and adjust it based on what you learn about yourself!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-1-1-summary',
      type: 'text',
      content: `## Chapter Summary: Language Learning Strategies

**Key Takeaways:**

1. **Strategic learning is more effective than passive studying.** The most successful language learners actively choose and apply appropriate strategies.

2. **Four categories of strategies work together:**
   - **Cognitive**: Working directly with language (notes, associations, practice)
   - **Metacognitive**: Planning, monitoring, and evaluating your learning
   - **Social**: Learning through interaction with others
   - **Affective**: Managing emotions, motivation, and anxiety

3. **Metacognition is especially powerful.** By planning before, monitoring during, and evaluating after learning, you take control of your progress.

4. **Self-assessment is the starting point.** Understanding your strengths, weaknesses, and goals allows you to focus your efforts effectively.

5. **A good learning plan is:**
   - Specific (clear activities, not vague intentions)
   - Balanced (all four skills throughout the week)
   - Realistic (fits your available time)
   - Flexible (adjustable based on what works)
   - Reflective (includes regular self-evaluation)

**Looking Ahead:**
In the following chapters, we will explore specific tools and techniques for language learning, including digital resources, pronunciation strategies, and academic language. The strategies you've learned here will help you approach all of these areas more effectively.

**Remember:** Every expert was once a beginner. With the right strategies and consistent effort, you can achieve your English language goals!`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'engelsk-vg1-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Comprehensive Exercise: Read the following scenario and answer the questions using what you have learned about learning strategies.',
        subTasks: [
          {
            label: 'Scenario',
            task: 'Marcus is a VG1 student who struggles with English. He spends hours reading his textbook and looking up words, but he forgets them quickly. He avoids speaking in class because he is afraid of making mistakes. When he writes essays, he uses Google Translate for whole sentences. He often feels frustrated and unmotivated.',
            solution: '',
          },
          {
            label: 'a',
            task: 'Identify THREE problems with Marcus\'s current approach to learning English.',
            solution: '1) He relies on passive reading without active strategies like spaced repetition or using words in context. 2) He avoids speaking practice due to anxiety, which prevents improvement in a key skill. 3) He uses Google Translate for whole sentences instead of developing his own writing skills—this is a shortcut that prevents real learning.',
          },
          {
            label: 'b',
            task: 'For each problem, suggest a specific strategy (identify the category) that could help Marcus.',
            solution: '1) For vocabulary: Use spaced repetition with flashcards and create personal sentences using new words (Cognitive). 2) For speaking anxiety: Practice self-encouragement, start with low-pressure speaking (talking to himself), and gradually build up (Affective + Cognitive). 3) For writing: Only use translation for individual words, then construct sentences himself; ask for feedback from teacher (Cognitive + Social).',
          },
          {
            label: 'c',
            task: 'Design a simple weekly plan for Marcus that addresses his weaknesses while building on any potential strengths.',
            solution: 'Sample plan: Monday: Vocabulary with Quizlet (15 min) + write one sentence for each word (10 min). Tuesday: Read a short article on a topic he likes (20 min). Wednesday: Speaking practice—read article aloud, then summarize verbally (15 min). Thursday: Writing—write a paragraph without translation, only look up individual words (25 min). Friday: Listening—watch YouTube video in English, note expressions (20 min). This plan is specific, balanced, and gradually builds the skills Marcus needs.',
          },
          {
            label: 'd',
            task: 'What metacognitive strategy should Marcus add to help him monitor and improve his progress?',
            solution: 'Marcus should add regular self-reflection, such as a brief journal entry after each study session answering: What did I learn? What worked well? What was difficult? What will I try next time? He could also set specific weekly goals and check his progress each Sunday.',
          },
        ],
        hints: ['Think about all four strategy categories', 'Consider both what Marcus is doing wrong and what he could do instead', 'A good plan addresses his specific challenges'],
        solution: 'This scenario illustrates common pitfalls in language learning. By applying the strategies from this chapter—cognitive techniques for vocabulary, affective strategies for anxiety, social strategies for feedback, and metacognitive strategies for self-monitoring—Marcus can transform his approach and start making real progress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflection and Application: Over the next week, implement your learning plan from Exercise 4. Then complete this reflection assignment.',
        subTasks: [
          {
            label: 'a',
            task: 'Keep a brief learning journal. Each day, note: What did you do? How long? Which strategies did you use?',
            solution: 'Personal journal - will vary. A good journal is honest and specific, tracking actual activities, time spent, and strategies employed.',
          },
          {
            label: 'b',
            task: 'At the end of the week, evaluate: Which activities did you complete? Which did you skip? Why?',
            solution: 'Personal reflection - will vary. Honest evaluation helps identify what is realistic and what adjustments are needed.',
          },
          {
            label: 'c',
            task: 'Analyze: Which strategies worked best for you? Which felt less effective? Why do you think this is?',
            solution: 'Personal reflection - will vary. This metacognitive analysis helps you understand your own learning style and preferences.',
          },
          {
            label: 'd',
            task: 'Revise: Based on your experience, create an improved version of your learning plan for the following week.',
            solution: 'Personal plan - will vary. A good revised plan keeps what worked, adjusts or replaces what did not, and may add new strategies based on what you learned about yourself.',
          },
        ],
        hints: ['Be completely honest in your journal—no one else needs to see it', 'There are no "wrong" answers—the goal is to learn about your own learning', 'The revised plan should be based on real experience, not just theory'],
        solution: 'This exercise puts metacognition into practice. By planning, implementing, monitoring, and revising, you develop the self-awareness and self-regulation skills that characterize successful learners. Learning how to learn is a skill that will benefit you throughout your life!',
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
  estimatedMinutes: 55,
  competenceGoals: ['bruke egnede digitale ressurser og andre hjelpemidler i språklæring, tekstskaping og samhandling'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-1-2-intro',
      type: 'text',
      content: `## The Digital Language Learning Revolution

Never before in history have language learners had access to so many resources. Your smartphone alone contains more learning opportunities than an entire library from just 30 years ago. The challenge today is not finding resources—it's knowing how to use them effectively and responsibly.

Think about it: you can watch authentic British TV shows, chat with English speakers on the other side of the world, get instant feedback on your pronunciation, and access thousands of lessons—all for free or at minimal cost. Previous generations had to travel abroad or pay for expensive private tutors to get similar experiences!

**Learning Goals for This Chapter:**
By the end of this chapter, you will be able to:
- Identify and categorize different types of digital learning tools
- Select appropriate digital resources for different learning goals
- Use AI tools responsibly and effectively for language learning
- Develop critical thinking about digital tool use
- Create a personal digital learning toolkit

**The Digital Learning Landscape:**

| Category | Examples | Best For |
|----------|----------|----------|
| Learning Apps | Duolingo, Babbel, Memrise | Vocabulary, grammar drills, motivation |
| Dictionaries | Cambridge, Oxford, Merriam-Webster | Word lookup, pronunciation, examples |
| Translation Tools | DeepL, Google Translate | Comprehension, individual words |
| Media Platforms | Netflix, YouTube, Spotify | Listening, authentic language |
| Communication | Tandem, HelloTalk, Discord | Speaking practice, real conversations |
| AI Assistants | ChatGPT, Claude, language AI | Explanations, practice, feedback |

**The Key Principle:**
Digital tools are supplements to learning, not replacements for it. The most effective learners use technology strategically while still doing the hard work of practicing, making mistakes, and building genuine skills.`,
    },
    // --- TEORI 1: Categories of Digital Tools ---
    {
      id: 'engelsk-vg1-1-2-theory-1',
      type: 'definition',
      title: 'Categories of Digital Language Learning Tools',
      content: `Understanding the different categories of digital tools helps you choose the right one for each learning goal.

**1. Language Learning Apps**
*Examples: Duolingo, Babbel, Memrise, Anki*

**Strengths:**
- Gamification makes learning addictive and fun
- Spaced repetition helps vocabulary stick
- Convenient—learn anywhere, anytime
- Track progress and maintain streaks

**Limitations:**
- Often focus on isolated vocabulary and grammar
- May not prepare you for real conversations
- Can become repetitive
- Limited feedback on pronunciation

**Best Use:** Daily vocabulary building, grammar practice, maintaining motivation

**2. Online Dictionaries and Thesauruses**
*Examples: Cambridge Dictionary, Oxford Learner's, Merriam-Webster, Thesaurus.com*

**Strengths:**
- Definitions written for learners (not just native speakers)
- Pronunciation guides with audio
- Example sentences showing real usage
- Word families and collocations

**Limitations:**
- Requires knowing approximately how to spell a word
- Multiple definitions can be confusing
- May not capture slang or very recent usage

**Best Use:** Looking up unknown words, checking pronunciation, finding synonyms

**3. Translation Tools**
*Examples: DeepL, Google Translate, Microsoft Translator*

**Strengths:**
- Instant translations help comprehension
- Increasingly accurate, especially for common languages
- Can translate entire documents
- Useful for getting the gist of content

**Limitations:**
- Translations may be awkward or unnatural
- Nuance and cultural context often lost
- Can become a crutch that prevents learning
- May contain errors, especially with idioms

**Best Use:** Understanding the main idea of texts, checking individual words (not whole sentences you need to write yourself)

**4. Media Platforms**
*Examples: Netflix, YouTube, Spotify, podcasts*

**Strengths:**
- Authentic language as native speakers actually use it
- Engaging content on topics you enjoy
- Variety of accents and speaking styles
- Subtitles available in multiple languages

**Limitations:**
- Can be passive if not used strategically
- Fast speech and slang can be overwhelming
- No built-in feedback or correction
- Easy to zone out without active engagement

**Best Use:** Listening comprehension, learning natural expressions, exposure to different accents`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-1-2-example-1',
      type: 'example',
      title: 'Example: The Netflix Method for Language Learning',
      problem: 'How can you transform passive TV watching into active language learning?',
      solution: `**The Netflix Method: A Step-by-Step Guide**

**Step 1: Choose the Right Content**
- *Beginner tip*: Start with shows you've already seen in Norwegian—you'll understand the plot and can focus on language
- *Genre matters*: Documentaries and interview shows tend to have clearer speech; action films have less dialogue
- *Find your interest*: You'll learn more from content you genuinely enjoy

**Recommended progression:**
1. Animated films (clear speech, simpler vocabulary)
2. Reality shows (everyday conversations)
3. Sitcoms (natural dialogue, cultural references)
4. Dramas (complex emotions and vocabulary)
5. Fast-paced thrillers (challenging speech, slang)

**Step 2: Use Subtitles Strategically**

| Level | Audio | Subtitles | Purpose |
|-------|-------|-----------|---------|
| 1 | English | Norwegian | Get the gist, connect sound to meaning |
| 2 | English | English | Connect written and spoken forms |
| 3 | English | None | Test your listening comprehension |

*Pro tip*: Watch the same scene multiple times at different levels!

**Step 3: Active Watching Techniques**
- **Pause frequently**: Stop when you hear an interesting expression
- **Keep a vocabulary journal**: Write down new words and phrases with context
- **Note timestamps**: "23:15 - great way to express frustration"
- **Repeat out loud**: Copy the pronunciation and intonation

**Step 4: The Shadowing Technique**
1. Play a short clip (10-30 seconds)
2. Pause after each sentence
3. Repeat exactly what you heard, copying the speaker's rhythm, intonation, and accent
4. Rewind and compare your version to the original
5. Repeat until you can match the original closely

**Example Session (30 minutes):**
- 0-5 min: Watch a scene normally, get the gist
- 5-15 min: Rewatch with English subtitles, pause for new vocabulary
- 15-25 min: Practice shadowing 2-3 sentences from the scene
- 25-30 min: Review vocabulary, update your journal`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Evaluate these uses of digital tools. For each scenario, decide if the use is APPROPRIATE (helps learning), PROBLEMATIC (hinders learning or is dishonest), or DEPENDS (context matters).',
        subTasks: [
          {
            label: 'a',
            task: 'Using Google Translate to understand the main idea of a news article you want to discuss in class.',
            solution: 'APPROPRIATE - Using translation as a comprehension aid to access authentic content you will then discuss in your own words is a valid learning strategy.',
            multipleChoiceOptions: ['Appropriate', 'Problematic', 'Depends'],
          },
          {
            label: 'b',
            task: 'Writing an essay in Norwegian first, then putting the whole thing through Google Translate to submit.',
            solution: 'PROBLEMATIC - This bypasses the learning process entirely. You are not practicing English writing skills, and the result may contain translation errors. It may also be considered academic dishonesty.',
            multipleChoiceOptions: ['Appropriate', 'Problematic', 'Depends'],
          },
          {
            label: 'c',
            task: 'Looking up how to say a specific word (like "consequence") when writing an essay.',
            solution: 'APPROPRIATE - Looking up individual words to expand your vocabulary is exactly what dictionaries are for. You are still constructing the sentence yourself.',
            multipleChoiceOptions: ['Appropriate', 'Problematic', 'Depends'],
          },
          {
            label: 'd',
            task: 'Asking ChatGPT to write your homework assignment for you.',
            solution: 'PROBLEMATIC - This is academic dishonesty and prevents you from learning. You are submitting work that is not your own.',
            multipleChoiceOptions: ['Appropriate', 'Problematic', 'Depends'],
          },
          {
            label: 'e',
            task: 'Using Duolingo for 30 minutes every day as your only English practice.',
            solution: 'DEPENDS - Duolingo is a good tool, but if it is your ONLY practice, you are missing out on speaking, real listening, and extended writing. It should be part of a broader approach, not the whole thing.',
            multipleChoiceOptions: ['Appropriate', 'Problematic', 'Depends'],
          },
          {
            label: 'f',
            task: 'Asking ChatGPT to explain a grammar rule you do not understand, with examples.',
            solution: 'APPROPRIATE - Using AI as a tutor to explain concepts is a legitimate learning strategy. You are seeking understanding, not having your work done for you.',
            multipleChoiceOptions: ['Appropriate', 'Problematic', 'Depends'],
          },
        ],
        hints: ['Think about whether the use helps you LEARN or just helps you AVOID learning', 'Consider the difference between comprehension aids and dishonest shortcuts'],
        solution: 'The key distinction is between using tools to SUPPORT learning (comprehension, explanation, vocabulary expansion) versus using them to REPLACE learning (having the tool do the work for you). Ethical use also matters—submitting AI-generated text as your own work is dishonest.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Match each learning goal with the BEST digital tool category.',
        subTasks: [
          {
            label: 'a',
            task: 'You want to build vocabulary with daily practice and track your streak.',
            solution: 'Language Learning App (Duolingo, Memrise) - Gamification and spaced repetition make these ideal for vocabulary building and habit formation.',
            multipleChoiceOptions: ['Learning App', 'Dictionary', 'Translation Tool', 'Media Platform', 'AI Assistant'],
          },
          {
            label: 'b',
            task: 'You want to understand a complex article in a British newspaper.',
            solution: 'Translation Tool (for overall comprehension) + Dictionary (for specific words). Start with translation for the gist, then use dictionary for key vocabulary you want to learn.',
            multipleChoiceOptions: ['Learning App', 'Dictionary', 'Translation Tool', 'Media Platform', 'AI Assistant'],
          },
          {
            label: 'c',
            task: 'You want to improve your ability to understand fast-spoken American English.',
            solution: 'Media Platform (Netflix, YouTube) - Authentic content with American speakers, with subtitles available, allows you to train your ear to fast speech.',
            multipleChoiceOptions: ['Learning App', 'Dictionary', 'Translation Tool', 'Media Platform', 'AI Assistant'],
          },
          {
            label: 'd',
            task: 'You need to understand the difference between "affect" and "effect."',
            solution: 'Dictionary (for definitions and examples) or AI Assistant (for explanation and practice sentences). Both can clarify this common confusion.',
            multipleChoiceOptions: ['Learning App', 'Dictionary', 'Translation Tool', 'Media Platform', 'AI Assistant'],
          },
        ],
        hints: ['Think about what each type of tool does best', 'Sometimes more than one tool could work—consider which is BEST for the specific goal'],
        solution: 'Different tools serve different purposes. Strategic learners match the tool to the task rather than relying on just one tool for everything.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2: AI Tools and Responsible Use ---
    {
      id: 'engelsk-vg1-1-2-theory-2',
      type: 'definition',
      title: 'AI Tools: Powerful Helpers, Not Replacements',
      content: `Artificial Intelligence tools like ChatGPT, Claude, and specialized language AI have become increasingly sophisticated. Used well, they can accelerate your learning. Used poorly, they can prevent you from learning at all.

**What AI Language Tools CAN Do Well:**

1. **Explain Concepts**
   - "Explain the present perfect tense with examples"
   - "What's the difference between 'must' and 'have to'?"
   - "Why do we use 'the' here but not there?"

2. **Provide Practice**
   - "Give me 5 sentences to translate about travel"
   - "Create a dialogue between two friends planning a party"
   - "Quiz me on irregular verb past tenses"

3. **Give Feedback on Your Writing**
   - "Check this paragraph for grammar errors"
   - "Is this sentence natural-sounding?"
   - "How could I make this essay more formal?"

4. **Simulate Conversations**
   - "Let's have a conversation where you're a hotel receptionist"
   - "Practice a job interview with me"
   - "Discuss climate change with me as a native speaker would"

**What AI Tools Should NOT Be Used For:**

1. **Writing Your Assignments**
   - Submitting AI-generated text as your own is dishonest
   - You learn by writing, not by having a machine write for you
   - Teachers can often detect AI writing

2. **Replacing Real Human Interaction**
   - AI cannot fully replicate the unpredictability of real conversation
   - Social and cultural nuances are learned through human contact
   - AI cannot give you the confidence that comes from successful real-world communication

3. **Replacing Your Own Thinking**
   - If AI does your thinking, you don't develop critical skills
   - Relying on AI for answers means you don't build knowledge
   - Education is about developing YOUR capabilities

**The Golden Rule:**
Ask yourself: "Am I using this tool to learn more effectively, or am I using it to avoid learning?"

**Responsible AI Use Checklist:**
- I am learning from the AI's output, not just copying it
- I would be comfortable if my teacher saw exactly how I used this tool
- I am developing my own skills and voice, not replacing them
- I verify important information from other sources
- I use AI to understand, not to avoid understanding`,
    },
    // --- EKSEMPEL 2 ---
    {
      id: 'engelsk-vg1-1-2-example-2',
      type: 'example',
      title: 'Example: Ethical vs. Unethical AI Use',
      problem: 'Compare these two students using AI for an essay assignment on climate change.',
      solution: `**Student A: Unethical Use**

1. Opens ChatGPT
2. Types: "Write a 500-word essay on climate change for a high school student"
3. Copies the entire output
4. Submits it as their own work

**Problems with this approach:**
- Academic dishonesty—passing off AI work as their own
- Zero learning—no research, thinking, or writing practice
- No personal voice—sounds like a machine, not a student
- Risk of detection—AI writing has patterns teachers recognize
- Factual risk—AI may include incorrect or outdated information

---

**Student B: Ethical and Effective Use**

1. **Brainstorms independently first**: What do I already know? What are my opinions?

2. **Uses AI for research guidance**:
   - "What are the main arguments in the climate change debate?"
   - "What are some reliable sources to research climate policy?"

3. **Writes their own first draft** with their own words and ideas

4. **Uses AI for feedback**:
   - "Check this paragraph for grammar errors"
   - "Is my argument clear and logical?"
   - "Suggest ways I could make this introduction stronger"

5. **Revises based on feedback**, making their own choices about what to change

6. **Uses AI to check vocabulary**:
   - "Is 'huge' the best word here, or is there a more academic alternative?"

7. **Final product is THEIR work**, improved with AI assistance

**Why this approach works:**
- The student did the thinking and writing
- AI served as a tutor and editor, not a ghost-writer
- The student learned and improved their skills
- The essay reflects the student's voice and ideas
- This use would pass any ethics test

**The Result:**
Student A has 500 words and no new skills.
Student B has 500 words AND improved research, writing, and revision skills.`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'For each scenario, describe how you could use AI ETHICALLY to help with the task. Be specific about what you would ask and how you would use the response.',
        subTasks: [
          {
            label: 'a',
            task: 'You need to give a presentation on a book you read, but you struggle to organize your ideas clearly.',
            solution: 'Ethical approach: Write your own notes about the book first, then ask AI: "I want to present about [book]. My main points are [list]. Can you suggest a logical order and what I might be missing?" Use the suggestions to reorganize YOUR ideas, not to generate new content you haven\'t thought of.',
          },
          {
            label: 'b',
            task: 'You wrote an email to a potential employer but are not sure if it sounds professional enough.',
            solution: 'Ethical approach: Write the email yourself first, then ask AI: "Is this email appropriately formal for a job application? Are there any phrases that sound too casual?" Review the feedback and make changes yourself, keeping your own message and voice.',
          },
          {
            label: 'c',
            task: 'You are confused about when to use "who" vs "whom" in sentences.',
            solution: 'Ethical approach: Ask AI: "Explain the difference between who and whom with examples. Give me practice sentences to identify which is correct." This uses AI as a tutor to build understanding you can apply independently.',
          },
        ],
        hints: ['Always write/think first before asking AI', 'Ask for explanations and feedback, not finished products', 'The goal is learning, not outsourcing'],
        solution: 'Ethical AI use means using the technology to enhance YOUR learning and work, not to replace it. The distinction is between AI as a tutor/helper versus AI as a ghost-writer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Create your personal "Digital Learning Toolkit." List 5-7 specific digital resources you will use for learning English, organized by purpose.',
        subTasks: [
          {
            label: 'a',
            task: 'List your tools in this format: Tool Name | Purpose | How I Will Use It | Skill(s) It Develops',
            solution: 'Example format:\n- Cambridge Dictionary | Vocabulary lookup | Check pronunciation and find example sentences when I encounter new words | Reading, Vocabulary\n- Netflix | Listening practice | Watch 30 min 3x/week with English subtitles, noting new expressions | Listening, Vocabulary\n- ChatGPT | Grammar help | Ask for explanations when confused, get feedback on drafts | Grammar, Writing\n- Spotify playlists | Listening | Play English podcasts during commute | Listening\n- Duolingo | Daily practice | 10-minute daily session to maintain streak and review vocabulary | Vocabulary, Grammar',
          },
          {
            label: 'b',
            task: 'Explain why you chose these specific tools over alternatives.',
            solution: 'Personal reflection explaining choices. Good answers show awareness of personal learning style, goals, and available time. Example: "I chose Netflix over YouTube because I find it easier to focus on longer content, and the subtitle options are better."',
          },
          {
            label: 'c',
            task: 'Identify one potential risk or limitation for each tool and how you will address it.',
            solution: 'Example: "Risk with Duolingo: It can become repetitive and focus too much on translation rather than real communication. Solution: I will limit it to 15 minutes and supplement with speaking practice." Shows critical thinking about tool limitations.',
          },
        ],
        hints: ['Choose tools that match YOUR learning style and goals', 'Include a variety of tools for different skills', 'Be realistic about what you will actually use'],
        solution: 'A good digital toolkit is personalized, varied, and realistic. It should cover multiple skills and include awareness of each tool\'s limitations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-1-2-summary',
      type: 'text',
      content: `## Chapter Summary: Digital Resources for Language Learning

**Key Takeaways:**

1. **Digital tools have transformed language learning.** You have unprecedented access to authentic content, practice opportunities, and learning resources—most of them free.

2. **Different tools serve different purposes:**
   - *Learning apps*: Vocabulary, grammar drills, habit formation
   - *Dictionaries*: Word lookup, pronunciation, example sentences
   - *Translation tools*: Comprehension support, individual words
   - *Media platforms*: Authentic listening, natural expressions
   - *AI assistants*: Explanations, feedback, practice conversations

3. **AI tools are powerful but require responsibility:**
   - Use AI to LEARN, not to avoid learning
   - Get explanations, feedback, and practice—not finished products
   - Writing your own work, with AI support, is ethical
   - Having AI write your work and submitting it as your own is not

4. **Active use beats passive consumption.** Watching Netflix with a vocabulary journal is more valuable than just watching. Using Duolingo as part of a broader plan is more effective than relying on it alone.

5. **Critical thinking matters.** Not all tools are equally useful for all purposes. Strategic learners match tools to tasks and are aware of each tool's limitations.

**The Bottom Line:**
Technology gives you incredible opportunities—but the learning still happens in YOUR brain. No app can learn English for you. Use digital tools wisely to accelerate your learning, not to replace it.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'engelsk-vg1-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Practical Application: Find and analyze an English podcast or YouTube channel on a topic you are genuinely interested in.',
        subTasks: [
          {
            label: 'a',
            task: 'Find a channel/podcast you enjoy. List the name, topic, and why you chose it.',
            solution: 'Personal choice. Good answers identify a specific channel with clear reasoning about why it is useful for learning (clear speech, interesting topic, appropriate level).',
          },
          {
            label: 'b',
            task: 'Watch/listen to one episode (15-30 minutes). Write a summary in your own words (100-150 words).',
            solution: 'Personal summary demonstrating comprehension. Should be written in the student\'s own words, not copied from description.',
          },
          {
            label: 'c',
            task: 'Record 5 new words or expressions you learned. For each, include: the word/phrase, the context where it appeared, and your own example sentence using it.',
            solution: 'Format:\n1. Word: "accountability"\n   Context: "Leaders must take accountability for their decisions"\n   My sentence: "Students need to take accountability for their own learning."\n(Repeat for 5 items)',
          },
          {
            label: 'd',
            task: 'Evaluate the resource: How useful was it for learning? What level of English is it suitable for? Would you recommend it to a classmate?',
            solution: 'Personal evaluation showing critical thinking. Good answers consider: speech clarity, vocabulary level, subtitle availability, episode length, engagement level.',
          },
        ],
        hints: ['Choose something you would actually want to watch again', 'Use subtitles if needed, but challenge yourself', 'Pause and replay difficult parts', 'Write notes as you watch/listen'],
        solution: 'This exercise combines multiple skills: finding resources, active listening, vocabulary building, writing, and critical evaluation. These skills transfer to independent learning beyond the classroom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Critical Thinking: Read the following debate and develop your own position.',
        subTasks: [
          {
            label: 'Context',
            task: 'Some teachers believe AI tools like ChatGPT should be completely banned in schools because students use them to cheat. Others believe they should be embraced as powerful learning tools. What do you think?',
            solution: '',
          },
          {
            label: 'a',
            task: 'List 2-3 arguments FOR allowing AI tools in language learning.',
            solution: 'Sample arguments: 1) AI can provide personalized explanations and tutoring that busy teachers cannot always offer individually. 2) Learning to use AI responsibly is itself a valuable skill for the future workplace. 3) Banning tools is impractical—students will use them anyway, so teaching ethical use is better.',
          },
          {
            label: 'b',
            task: 'List 2-3 arguments AGAINST allowing AI tools in language learning.',
            solution: 'Sample arguments: 1) The temptation to cheat is too strong, and schools cannot adequately monitor use. 2) Students may become dependent on AI and never develop their own thinking skills. 3) Writing is a process that develops thinking—outsourcing it to AI prevents this cognitive development.',
          },
          {
            label: 'c',
            task: 'Write your own position (150-200 words). Include a clear thesis and address at least one counterargument.',
            solution: 'Personal position with reasoning. A strong answer: states a clear position, provides supporting reasons, acknowledges the other side, and proposes practical implementation (e.g., "AI should be allowed for feedback but not for generating content").',
          },
        ],
        hints: ['Consider both sides fairly before stating your position', 'Think about what actually happens in schools, not just ideals', 'Your position should be nuanced—pure "ban" or "allow everything" may be too simple'],
        solution: 'This is a genuine contemporary debate with valid arguments on both sides. Strong positions acknowledge complexity rather than presenting one-sided arguments. The goal is to develop critical thinking, not to find the "right" answer.',
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
  competenceGoals: ['bruke kunnskap om sammenhenger mellom engelsk og andre språk eleven kjenner til i egen språklæring'],
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
  competenceGoals: ['gjøre rede for andres argumentasjon og bruke og følge opp andres innspill i samtaler og diskusjoner om ulike emner'],
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
