/**
 * Tekstbok innhold for Engelsk VG1 - Narrativ versjon Del 1
 * Kapitler 1.1-2.4 (9 kapitler totalt)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 1.1 NARRATIVE: Language Learning Strategies
// ============================================================================

export const CHAPTER_ENGELSK_VG1_1_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-1-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.1',
  title: 'Language Learning Strategies',
  subtitle: 'Narrative Version',
  description: 'Discover the secrets of successful language learners and develop your own path to English mastery.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke egnede strategier i språklæring, tekstskaping og kommunikasjon'],
  linkedChapterId: 'engelsk-vg1-1-1',
  content: [
    {
      id: 'engelsk-vg1-1-1-n-intro',
      type: 'text',
      content: `## The Journey Begins

Have you ever wondered why some people seem to learn languages effortlessly while others struggle for years? The secret isn't talent or intelligence - it's strategy. The most successful language learners have figured out how to work smarter, not just harder.

Think about it this way: learning English is like building a house. You could randomly nail boards together and hope for the best, or you could follow a blueprint. The strategies you'll learn in this chapter are your blueprint.

We're going to explore four types of learning strategies that will transform how you approach English. By the end, you'll have a toolkit of techniques that you can mix and match to create your perfect learning plan. The best part? These strategies don't just work for English - they'll help you learn anything.`,
    },
    {
      id: 'engelsk-vg1-1-1-n-section1',
      type: 'text',
      content: `## The Four Pillars of Language Learning

Before we dive into strategies, let's understand what we're actually trying to learn. English isn't just one skill - it's four distinct abilities that work together like instruments in an orchestra.

Listening is your foundation. It's how babies learn their first language, and it's still the most natural way to absorb a new one. When you listen, your brain picks up pronunciation patterns, rhythm, and the natural flow of the language. Reading opens doors to vast worlds of knowledge and entertainment. It builds your vocabulary faster than any other method and helps you understand how sentences are constructed.

Speaking is where many learners feel most nervous, but it's also where you make the language truly yours. When you speak, you're not just repeating - you're creating. Writing forces you to slow down and think carefully about your choices. It's where you refine your understanding and develop precision.

The magic happens when these four skills work together. When you read a word, hear it spoken, say it yourself, and then write it in a sentence, you've created four different neural pathways to that word. That's four times the chances of remembering it.`,
    },
    {
      id: 'engelsk-vg1-1-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Why is it beneficial to practice all four language skills (listening, speaking, reading, writing) with new vocabulary?',
        options: [
          { id: 'a', text: 'Because teachers require it for grades', isCorrect: false },
          { id: 'b', text: 'Because it creates multiple neural pathways, increasing retention', isCorrect: true },
          { id: 'c', text: 'Because one skill is always better than others', isCorrect: false },
          { id: 'd', text: 'Because it takes more time and time equals learning', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'When you engage with new material through multiple skills, you create different neural pathways in your brain. Each pathway is another chance to remember and use that knowledge, making your learning more robust and lasting.',
      },
    },
    {
      id: 'engelsk-vg1-1-1-n-section2',
      type: 'text',
      content: `## Cognitive Strategies: Working with the Material

Let's start with cognitive strategies - these are the techniques you use to directly work with the language material. Think of them as your hands-on tools.

Note-taking might sound boring, but how you take notes makes all the difference. Instead of copying everything, try creating mind maps that show how ideas connect. Draw pictures next to new words. Use colors to categorize information. Your notes should look like your brain works, not like a textbook.

Context clues are your detective tools. When you encounter an unknown word, don't immediately reach for a dictionary. Look at the sentence around it. What part of speech is it? What's happening in the story? Often, you can figure out the meaning from the context, and this process of discovery makes the word stick better than simply reading a definition.

Creating mental images is surprisingly powerful. When you learn the word "procrastinate," picture yourself putting off doing dishes while the pile grows and grows. The sillier or more vivid the image, the better you'll remember. Your brain loves stories and pictures far more than abstract definitions.

Summarizing forces you to process information actively. After reading an article or watching a video, close it and explain the main points in your own words. If you can't explain it simply, you haven't really understood it yet.`,
    },
    {
      id: 'engelsk-vg1-1-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'You encounter the word "melancholy" in a sentence: "After the funeral, a deep melancholy settled over the family for months." What cognitive strategy helps you understand this word?',
        options: [
          { id: 'a', text: 'Creating a mind map of funeral-related words', isCorrect: false },
          { id: 'b', text: 'Using context clues from the sentence', isCorrect: true },
          { id: 'c', text: 'Repeating the word ten times', isCorrect: false },
          { id: 'd', text: 'Asking a classmate for the definition', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The context tells you this is something that follows a funeral and lasts for months, suggesting a lasting sad feeling. Using context clues lets you deduce meaning and creates a stronger memory than simply looking up the definition.',
      },
    },
    {
      id: 'engelsk-vg1-1-1-n-section3',
      type: 'text',
      content: `## Metacognitive Strategies: Thinking About Your Thinking

Here's where things get interesting. Metacognitive strategies are about stepping back and observing your own learning process. It's like being both the student and the teacher at the same time.

Setting goals transforms vague wishes into concrete plans. "I want to be better at English" is a wish. "I will learn 15 new words this week and use each one in a sentence" is a goal. Good goals are specific, measurable, and have a deadline. Write them down. Check them off. Feel the satisfaction.

Self-assessment requires honesty. After each study session, ask yourself: What did I actually learn today? What's still confusing? Where do I keep making the same mistakes? This isn't about being hard on yourself - it's about knowing where to focus your energy next.

Organizing your study time is about finding your rhythm. Some people learn best in the morning, others late at night. Some prefer long sessions, others short bursts. Experiment and pay attention to when you feel most focused. Then protect that time like it's precious - because it is.

Reflecting on progress keeps you motivated. Keep a simple log of what you study and how it went. After a month, look back. You'll be amazed at how far you've come, even if daily progress feels invisible.`,
    },
    {
      id: 'engelsk-vg1-1-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Which of the following is an example of a well-formed learning goal?',
        options: [
          { id: 'a', text: 'I want to speak English fluently someday', isCorrect: false },
          { id: 'b', text: 'I should study more often', isCorrect: false },
          { id: 'c', text: 'I will watch one English video daily and note three new expressions this week', isCorrect: true },
          { id: 'd', text: 'English is important for my future', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'This goal is specific (one video, three expressions), measurable (you can count them), and has a deadline (this week). The other options are either vague wishes or statements of fact, not actionable goals.',
      },
    },
    {
      id: 'engelsk-vg1-1-1-n-section4',
      type: 'text',
      content: `## Social and Affective Strategies: The Human Element

Language is fundamentally social - it exists to connect people. So it makes sense that some of the best learning strategies involve others.

Asking questions seems obvious, but many learners stay silent out of fear of looking stupid. Here's the truth: asking questions is a sign of intelligence, not ignorance. The students who ask "why?" and "could you explain that again?" learn faster than those who pretend to understand. Teachers and classmates are resources - use them.

Finding conversation partners can feel intimidating, but it doesn't have to mean speaking to strangers. Start with classmates who are also learning. Practice together. Make mistakes together. Laugh about them. You can also find language exchange partners online who want to learn Norwegian while helping you with English.

Seeking feedback accelerates your progress. When you write something, ask someone to point out not just errors but also what you did well. When you speak, ask if you were clear. Feedback is a gift, even when it stings a little.

Now for the affective strategies - managing your emotions. Learning a language can be frustrating. You will have days when you feel like you've forgotten everything. This is normal. It's called the "dip," and every learner experiences it. The trick is to expect it and push through.

Reducing anxiety might mean preparing extra well before a presentation, or allowing yourself to make mistakes without judgment, or reminding yourself that native speakers appreciate when you try to speak their language. Rewarding yourself for achievements - even small ones - keeps your motivation alive.`,
    },
    {
      id: 'engelsk-vg1-1-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Sarah feels anxious before English presentations. Which affective strategy would help her most?',
        options: [
          { id: 'a', text: 'Avoiding presentations altogether', isCorrect: false },
          { id: 'b', text: 'Preparing thoroughly and practicing beforehand', isCorrect: true },
          { id: 'c', text: 'Memorizing the entire presentation word for word', isCorrect: false },
          { id: 'd', text: 'Telling herself she will never be good at presentations', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Thorough preparation and practice reduce anxiety by increasing confidence. You know your material and have rehearsed delivering it. Avoidance feeds anxiety, while over-memorizing can backfire if you forget one word and panic.',
      },
    },
    {
      id: 'engelsk-vg1-1-1-n-section5',
      type: 'text',
      content: `## Building Your Personal Strategy Mix

Now comes the fun part: creating your own personalized learning approach. There's no single "best" strategy - the best combination is the one that works for you.

Start by honestly assessing your current situation. Which of the four skills is your strongest? Your weakest? What resources do you have available? How much time can you realistically dedicate each day? What do you actually enjoy doing in English?

Build a weekly plan that addresses all four skills but focuses more on your weaker areas. Mix different strategy types. Maybe Monday is vocabulary building with cognitive strategies (mind maps and mental images). Tuesday is listening practice with a social element (discussing a podcast with a friend). Wednesday is writing with metacognitive reflection (journaling and self-assessment).

Remember that consistency beats intensity. Thirty minutes every day will take you further than three hours once a week. Your brain needs regular exposure to make new neural pathways permanent.

Finally, stay flexible. What works now might not work in six months. As you improve, your needs will change. Keep experimenting, keep reflecting, and keep adjusting. The strategy of continuously improving your strategies might be the most important strategy of all.`,
    },
    {
      id: 'engelsk-vg1-1-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the main message about finding effective learning strategies?',
        options: [
          { id: 'a', text: 'There is one perfect strategy that works for everyone', isCorrect: false },
          { id: 'b', text: 'The best strategy is the most difficult one', isCorrect: false },
          { id: 'c', text: 'You should find and stick with strategies that work for you personally', isCorrect: true },
          { id: 'd', text: 'Strategies don\'t matter as much as natural talent', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Effective learning is personal. Different people learn differently, and your optimal strategy mix depends on your strengths, weaknesses, available time, and preferences. The key is to experiment, reflect, and adjust.',
      },
    },
    {
      id: 'engelsk-vg1-1-1-n-summary',
      type: 'text',
      content: `## Summary: Your Strategy Toolkit

You now have a complete toolkit for language learning success.

**The Four Skills:** Listening, speaking, reading, and writing work together. Practice all of them for the strongest learning.

**Cognitive Strategies:** Note-taking, using context clues, creating mental images, and summarizing help you work directly with the language material.

**Metacognitive Strategies:** Setting goals, self-assessment, organizing study time, and reflecting on progress help you manage your learning process.

**Social Strategies:** Asking questions, finding conversation partners, and seeking feedback leverage the power of learning with others.

**Affective Strategies:** Reducing anxiety, staying positive, and rewarding yourself keep your motivation strong through the inevitable challenges.

**Your Personal Plan:** Combine strategies that work for you, stay consistent, and keep adjusting as you grow.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 1.2 NARRATIVE: Digital Resources for Language Learning
// ============================================================================

export const CHAPTER_ENGELSK_VG1_1_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-1-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.2',
  title: 'Digital Resources for Language Learning',
  subtitle: 'Narrative Version',
  description: 'Navigate the digital landscape of language learning and harness technology to accelerate your progress.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke egnede digitale ressurser og andre hjelpemidler i språklæring, tekstskaping og samhandling'],
  linkedChapterId: 'engelsk-vg1-1-2',
  content: [
    {
      id: 'engelsk-vg1-1-2-n-intro',
      type: 'text',
      content: `## A World of Learning at Your Fingertips

Imagine telling a language learner from fifty years ago that you could carry a device in your pocket containing every dictionary ever written, millions of hours of native speaker content, and instant access to conversation partners around the world. They would think you were describing science fiction.

Yet here we are. You have access to learning resources that previous generations couldn't have dreamed of. The question is no longer "how do I find materials?" but "how do I choose wisely from this overwhelming abundance?"

In this chapter, we'll explore the digital landscape of language learning. We'll look at different types of tools, understand what each does best, and learn how to use them effectively. Most importantly, we'll discuss how to use these powerful tools responsibly - because with great power comes great responsibility.`,
    },
    {
      id: 'engelsk-vg1-1-2-n-section1',
      type: 'text',
      content: `## The Digital Tool Categories

Let's organize the chaos. Digital language learning tools fall into several main categories, each with its own strengths.

Language learning apps like Duolingo, Babbel, and Memrise are designed specifically for learners. They break language down into bite-sized lessons, use gamification to keep you motivated, and track your progress. They're excellent for vocabulary building and basic grammar. However, they have limitations - they can't teach you to have a real conversation or write a compelling essay.

Online dictionaries and translators are essential references. Cambridge Dictionary and Merriam-Webster give you not just definitions but pronunciation, example sentences, and usage notes. Translation tools like DeepL and Google Translate have become remarkably good. They're invaluable for understanding unfamiliar texts, but using them to produce your own writing defeats the purpose of learning.

Media platforms - YouTube, Netflix, Spotify, podcasts - give you access to authentic English content. This is how native speakers actually talk, not the artificial dialogues in textbooks. You can find content on any topic that interests you, which makes learning feel less like studying and more like entertainment.

Communication tools connect you with real people. Language exchange apps like Tandem and HelloTalk match you with native speakers who want to learn your language. Video conferencing makes it possible to practice speaking with people anywhere in the world.`,
    },
    {
      id: 'engelsk-vg1-1-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is the main limitation of language learning apps like Duolingo?',
        options: [
          { id: 'a', text: 'They are too expensive for most learners', isCorrect: false },
          { id: 'b', text: 'They cannot teach real conversation skills or complex writing', isCorrect: true },
          { id: 'c', text: 'They only work on computers, not phones', isCorrect: false },
          { id: 'd', text: 'They are only available in English', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Language apps excel at vocabulary and basic grammar but struggle with the unpredictable nature of real conversations and the complexity of extended writing. They should be one tool among many, not your only resource.',
      },
    },
    {
      id: 'engelsk-vg1-1-2-n-section2',
      type: 'text',
      content: `## The AI Revolution: Opportunity and Responsibility

We need to talk about the elephant in the room: artificial intelligence. Tools like ChatGPT have transformed what's possible in language learning. They can explain grammar rules, generate practice exercises, check your writing, simulate conversations, and answer questions at any hour. It's like having a patient tutor available 24/7.

But here's the crucial distinction: AI should be your tutor, not your substitute. Using AI to learn is smart. Using AI to avoid learning is self-sabotage.

Consider the difference: If you write an essay, then ask AI to check for errors and explain what you got wrong, you're learning. If you ask AI to write your essay for you, you've learned nothing - and you've also committed academic dishonesty.

AI can explain why "I have been waiting" is different from "I waited." It can give you example sentences showing both in context. It can quiz you until you understand. This is valuable. What AI cannot do is learn for you. The neural pathways that create real language ability only form through your own practice and effort.

Also remember: AI makes mistakes. It can confidently tell you something incorrect. Always verify important information with other sources. Think of AI as a helpful but imperfect assistant, not an infallible authority.`,
    },
    {
      id: 'engelsk-vg1-1-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Which use of AI for language learning is appropriate and ethical?',
        options: [
          { id: 'a', text: 'Having AI write your homework assignment', isCorrect: false },
          { id: 'b', text: 'Copying AI-generated text into your essay', isCorrect: false },
          { id: 'c', text: 'Asking AI to explain a grammar rule you don\'t understand', isCorrect: true },
          { id: 'd', text: 'Submitting AI translations as your own work', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Using AI as a tutor to explain concepts you\'re trying to learn is appropriate. The other options involve AI doing your work for you, which prevents learning and constitutes academic dishonesty.',
      },
    },
    {
      id: 'engelsk-vg1-1-2-n-section3',
      type: 'text',
      content: `## The Netflix Method: Entertainment as Education

Here's a secret that makes language learning feel like cheating: you can improve your English by watching shows you actually enjoy. But there's a method to maximize the benefits.

Start with content you've already seen in Norwegian. You already know the story, so you can focus on how things are said rather than what happens. Choose shows with clear speech initially - heavy accents and mumbling can come later when you're more advanced.

Use subtitles strategically. On your first viewing, try English audio with Norwegian subtitles. You'll hear how things sound while understanding everything. On a second viewing, switch to English subtitles. Now you're connecting the sounds to the written words. Eventually, try watching without any subtitles at all.

Don't just passively watch. Keep a vocabulary journal nearby. When you hear an interesting expression, pause, write it down, and try using it in a sentence. This transforms passive consumption into active learning.

Try the shadowing technique: play a short clip, pause after each sentence, and repeat exactly what you heard, copying the pronunciation, rhythm, and intonation. It feels silly at first, but it's incredibly effective for training your ear and mouth.

The beauty of this approach is sustainability. Traditional studying requires willpower. Watching your favorite show requires only a couch and some free time. When learning feels like fun, you do more of it.`,
    },
    {
      id: 'engelsk-vg1-1-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is the "shadowing technique" in language learning?',
        options: [
          { id: 'a', text: 'Watching shows in the dark to improve focus', isCorrect: false },
          { id: 'b', text: 'Following a native speaker around to learn naturally', isCorrect: false },
          { id: 'c', text: 'Repeating speech immediately after hearing it, copying pronunciation and rhythm', isCorrect: true },
          { id: 'd', text: 'Writing down everything you hear while watching', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Shadowing means listening to a short piece of speech, then immediately repeating it while mimicking the speaker\'s pronunciation, rhythm, and intonation. It trains both your listening comprehension and speaking skills simultaneously.',
      },
    },
    {
      id: 'engelsk-vg1-1-2-n-section4',
      type: 'text',
      content: `## Finding Your Digital Balance

With so many tools available, it's easy to fall into two traps. The first is tool-hopping: constantly downloading new apps instead of actually using them. The second is tool-dependence: becoming so reliant on digital aids that you can't function without them.

The solution is intentional use. Before opening any tool, ask yourself: what specific skill am I practicing right now? Choose the tool that best serves that purpose, use it mindfully, and then put it away.

Build a balanced digital diet. Maybe you use a vocabulary app for ten minutes each morning while eating breakfast. You watch English content for thirty minutes in the evening. You have a weekly video call with a language exchange partner. You use AI to clarify confusing grammar when it comes up. Each tool has its place, but none dominates.

Don't forget that some of the best learning happens offline. Reading a physical book, having a conversation with a classmate, writing in a notebook - these "old-fashioned" activities remain powerful. Technology should enhance your learning, not replace human connection and focused offline practice.

Finally, protect your attention. Digital tools often want to keep you engaged longer than necessary. Set time limits. Turn off notifications during study time. Remember that you control the technology, not the other way around.`,
    },
    {
      id: 'engelsk-vg1-1-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is "tool-hopping" and why is it problematic?',
        options: [
          { id: 'a', text: 'Using only one tool, which limits your learning', isCorrect: false },
          { id: 'b', text: 'Constantly switching to new apps instead of consistently using existing ones', isCorrect: true },
          { id: 'c', text: 'Sharing your learning tools with friends', isCorrect: false },
          { id: 'd', text: 'Using tools that are designed for hopping exercises', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Tool-hopping is the habit of constantly downloading new apps or trying new platforms without giving any of them enough time to be effective. Progress requires consistent practice, not endless searching for the "perfect" tool.',
      },
    },
    {
      id: 'engelsk-vg1-1-2-n-section5',
      type: 'text',
      content: `## Becoming a Smart Digital Learner

Let's put it all together. Being a smart digital learner means using technology purposefully, ethically, and in balance with other learning methods.

Know what each tool is for. Apps for vocabulary drills. Streaming for listening immersion. AI for explanations and feedback. Communication platforms for real practice. Dictionaries for reference. Match the tool to the task.

Use technology to create, not just consume. Don't just watch videos - make recordings of yourself speaking. Don't just read articles - write your own responses to them. Don't just complete app exercises - create flashcards of your own problem areas.

Stay ethical. Never present AI-generated or translated text as your own work. Use translation tools to understand, not to produce. Remember that shortcuts that bypass learning are ultimately shortcuts that lead nowhere.

Keep reflecting. Is this tool actually helping me improve? Am I using it actively or passively? Could my time be better spent differently? Technology should be a means to an end - fluency and confidence in English - not an end in itself.

The digital world offers incredible opportunities for language learners. Used wisely, these tools can accelerate your progress dramatically. The key word is "wisely." You're in the driver's seat.`,
    },
    {
      id: 'engelsk-vg1-1-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What does it mean to be a "smart digital learner"?',
        options: [
          { id: 'a', text: 'Using as many apps as possible to maximize exposure', isCorrect: false },
          { id: 'b', text: 'Avoiding all technology and learning only from books', isCorrect: false },
          { id: 'c', text: 'Using technology purposefully, ethically, and in balance with other methods', isCorrect: true },
          { id: 'd', text: 'Being smarter than the average technology user', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Smart digital learning means intentional use - choosing the right tool for each task, using technology to actively learn rather than passively consume, maintaining ethical standards, and balancing digital tools with offline practice.',
      },
    },
    {
      id: 'engelsk-vg1-1-2-n-summary',
      type: 'text',
      content: `## Summary: Your Digital Learning Guide

**Tool Categories:** Language apps (vocabulary/grammar), dictionaries (reference), media platforms (immersion), communication tools (real practice), and AI (tutoring/feedback).

**AI Guidelines:** Use AI as a tutor to explain and practice, never as a substitute for your own work. Verify information and remember AI can make mistakes.

**The Netflix Method:** Watch content you enjoy with strategic subtitle use. Practice shadowing. Keep a vocabulary journal.

**Balance:** Avoid tool-hopping and tool-dependence. Match tools to specific learning tasks. Combine digital and offline learning.

**Ethics:** Never present AI-generated or translated content as your own work. Use technology to learn, not to avoid learning.

**Key Principle:** You control the technology, not the other way around. Use digital tools purposefully as part of a balanced learning approach.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 1.3 NARRATIVE: Pronunciation and Fluency
// ============================================================================

export const CHAPTER_ENGELSK_VG1_1_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-1-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.3',
  title: 'Pronunciation and Fluency',
  subtitle: 'Narrative Version',
  description: 'Unlock the sounds of English and speak with confidence and clarity.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke mønstre for uttale i kommunikasjon'],
  linkedChapterId: 'engelsk-vg1-1-3',
  content: [
    {
      id: 'engelsk-vg1-1-3-n-intro',
      type: 'text',
      content: `## The Mystery of English Sounds

Here's a puzzle for you: the word "through" has seven letters but only three sounds. The words "cough," "though," "through," and "rough" all end with "-ough" but sound completely different. Welcome to English pronunciation, where the spelling is more of a suggestion than a rule.

Don't despair. While English spelling is notoriously inconsistent, the sounds themselves follow patterns that you can learn. Once you understand these patterns, pronunciation becomes much less mysterious.

More importantly, good pronunciation isn't about sounding like a native speaker. It's about being understood. You can have an accent - everyone has an accent - while still speaking clearly and confidently. The goal is communication, not perfection.

In this chapter, we'll explore the sounds that challenge Norwegian speakers, understand how stress and rhythm work in English, and give you practical techniques to improve your spoken English.`,
    },
    {
      id: 'engelsk-vg1-1-3-n-section1',
      type: 'text',
      content: `## Sounds That Trip Up Norwegian Speakers

Every language has sounds that don't exist in other languages, and English has several that Norwegian lacks. Let's tackle them one by one.

The "th" sounds are probably the most notorious. English has two of them: the voiceless "th" in "think" and "bath," and the voiced "th" in "this" and "weather." To make these sounds, put your tongue between your teeth and blow air out. For the voiceless version, it's just air. For the voiced version, you add vibration from your vocal cords.

Many Norwegian speakers substitute "t" or "d" for "th," saying "tink" instead of "think" or "dis" instead of "this." Native speakers will still understand you, but practicing the real "th" sound improves clarity and confidence.

The short "i" versus long "ee" distinction causes confusion because Norwegian doesn't make this difference. "Ship" and "sheep" sound identical to many Norwegian ears, but they're quite different to English speakers. The short "i" in "ship" is more relaxed, with your tongue lower. The long "ee" in "sheep" is tense, with your tongue high and forward.

The "w" versus "v" sounds also blur together for many Norwegians. For "v," your top teeth touch your bottom lip. For "w," your lips round into a circle, and your teeth don't touch anything. "Wine" and "vine" are different words - practice saying them until you can feel the difference.`,
    },
    {
      id: 'engelsk-vg1-1-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is the key difference between the "w" sound and the "v" sound?',
        options: [
          { id: 'a', text: 'The "w" is louder than the "v"', isCorrect: false },
          { id: 'b', text: 'For "w" your lips round; for "v" your teeth touch your lip', isCorrect: true },
          { id: 'c', text: 'The "w" is only used at the end of words', isCorrect: false },
          { id: 'd', text: 'There is no difference in standard English', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The physical position is completely different: "w" involves rounding your lips with no teeth contact, while "v" requires your top teeth to touch your lower lip. This distinction matters - "west" and "vest" are different words!',
      },
    },
    {
      id: 'engelsk-vg1-1-3-n-section2',
      type: 'text',
      content: `## The Power of Word Stress

In English, word stress isn't just decoration - it's essential for meaning. Putting emphasis on the wrong syllable can make a word unrecognizable or change its meaning entirely.

The basic pattern is this: in two-syllable nouns and adjectives, stress usually falls on the first syllable. TAble, WINdow, HAPpy, CLEver. In two-syllable verbs, stress often falls on the second syllable. beLIEVE, reLAX, preTEND, deCIDE.

This creates some fascinating word pairs where stress determines whether you're using a noun or a verb. "REcord" is a noun (a vinyl record), while "reCORD" is a verb (to record a song). "PREsent" is a noun (a gift) or adjective (being here), while "preSENT" is a verb (to present your findings). "CONtract" is a noun (a legal document), while "conTRACT" is a verb (to contract a disease).

Longer words have more complex patterns, and the stress often shifts when you add suffixes. Consider: PHOtograph, phoTOgraphy, photoGRAphic. The root word is the same, but the stressed syllable changes as the word changes form.

When you learn new words, always learn the stress pattern along with the meaning. Many dictionaries mark stress with an apostrophe before the stressed syllable. Pay attention to it.`,
    },
    {
      id: 'engelsk-vg1-1-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'In the word "development," which syllable is stressed?',
        options: [
          { id: 'a', text: 'The first: DEvelopment', isCorrect: false },
          { id: 'b', text: 'The second: deVElopment', isCorrect: true },
          { id: 'c', text: 'The third: develOPment', isCorrect: false },
          { id: 'd', text: 'The fourth: developMENT', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The stress falls on the second syllable: deVElopment. You can hear this by saying the word naturally and noticing which syllable sounds louder, longer, and higher in pitch.',
      },
    },
    {
      id: 'engelsk-vg1-1-3-n-section3',
      type: 'text',
      content: `## Sentence Stress and the Music of English

Beyond individual words, English has a rhythm created by sentence stress. In every sentence, some words are emphasized while others are reduced. This creates the characteristic "music" of spoken English.

Content words - nouns, main verbs, adjectives, adverbs - typically receive stress because they carry the main meaning. Function words - articles, prepositions, auxiliary verbs, pronouns - are usually unstressed and often reduced to quick, quiet sounds.

Consider the sentence: "I'm going to the store to buy some milk." A native speaker doesn't give equal weight to every word. It sounds more like: "I'm GOing to the STORE to BUY some MILK." The words "to," "the," and "some" almost disappear.

Stress can also convey meaning and emphasis. The sentence "I didn't say he stole the money" changes meaning depending on which word you stress. Stress "I" and someone else said it. Stress "say" and maybe you implied it. Stress "he" and someone else stole it. Stress "money" and maybe he stole something else.

This is why English can sound like a series of rhythm beats with quick syllables in between. Understanding and mimicking this rhythm is a key part of sounding natural.`,
    },
    {
      id: 'engelsk-vg1-1-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'In natural English speech, which types of words typically receive stress?',
        options: [
          { id: 'a', text: 'Articles, prepositions, and auxiliary verbs', isCorrect: false },
          { id: 'b', text: 'Only the first and last word of each sentence', isCorrect: false },
          { id: 'c', text: 'Content words: nouns, main verbs, adjectives, adverbs', isCorrect: true },
          { id: 'd', text: 'All words receive equal stress in proper English', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Content words carry meaning and get stressed, while function words (articles, prepositions, auxiliary verbs) are typically reduced. This creates the rhythmic pattern characteristic of natural English speech.',
      },
    },
    {
      id: 'engelsk-vg1-1-3-n-section4',
      type: 'text',
      content: `## Connected Speech: How Words Flow Together

When we speak naturally, words don't come out as separate units. They flow into each other, change sounds, and sometimes practically disappear. This is called connected speech, and understanding it is crucial for both listening comprehension and natural pronunciation.

Linking happens when a word ending in a consonant is followed by a word beginning with a vowel. "Pick it up" becomes "pi-ki-tup." "An apple" becomes "a-napple." Your mouth takes the path of least resistance, connecting sounds smoothly rather than stopping and starting.

Reduction affects unstressed words, especially function words. "Want to" becomes "wanna." "Going to" becomes "gonna." "Have to" becomes "hafta." These aren't sloppy speech - they're standard features of spoken English that even educated native speakers use in everyday conversation.

The schwa sound, written as /ə/, is the most common sound in English precisely because of reduction. It's the sound in the unstressed syllables of "about," "banana," "problem," "support." When words get reduced in fast speech, their vowels often become schwas. The word "to" in isolation has a clear "oo" sound, but in "going to," it becomes just "tə."

Understanding connected speech helps you comprehend native speakers, who might seem to speak "too fast." They're not speaking faster than normal - they're just using natural connected speech patterns that you need to learn to hear.`,
    },
    {
      id: 'engelsk-vg1-1-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the "schwa" sound and why is it important?',
        options: [
          { id: 'a', text: 'A German sound borrowed into English for formal speech', isCorrect: false },
          { id: 'b', text: 'The most common vowel sound in English, appearing in unstressed syllables', isCorrect: true },
          { id: 'c', text: 'A rare sound only found in scientific vocabulary', isCorrect: false },
          { id: 'd', text: 'The sound you make when you don\'t know what to say', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The schwa /ə/ is a neutral, relaxed vowel sound that appears in most unstressed syllables. It\'s the most common sound in English because so many syllables and function words get reduced to it in natural speech.',
      },
    },
    {
      id: 'engelsk-vg1-1-3-n-section5',
      type: 'text',
      content: `## Practical Tips for Improving Your Pronunciation

Now let's get practical. How do you actually improve your pronunciation? Here are strategies that work.

Listen actively and often. Expose yourself to as much English as possible, but don't just let it wash over you. Pay attention to how sounds are made. Notice the rhythm and melody. Try to hear the connected speech patterns we've discussed.

Record yourself and compare. Use your phone to record yourself reading a passage, then compare it to a native speaker reading the same text. Where do you sound different? Focus your practice on those specific differences.

Practice minimal pairs. These are word pairs that differ by only one sound: ship/sheep, wine/vine, think/sink, bat/bath. Practice saying both words until you can clearly distinguish them. If you can hear the difference, you can learn to produce the difference.

Use tongue twisters to train your mouth. "The thirty-three thieves thought that they thrilled the throne throughout Thursday" practices the "th" sounds. "She sells seashells by the seashore" works on "sh" and "s." They're fun and effective.

Shadow native speakers. When watching videos, pause after sentences and try to repeat them exactly as you heard them - same sounds, same rhythm, same melody. This trains your ear and your mouth simultaneously.

Don't be afraid to exaggerate at first. When practicing new sounds, make them bigger and clearer than necessary. You can dial it back to natural levels once the sound becomes comfortable.`,
    },
    {
      id: 'engelsk-vg1-1-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What are "minimal pairs" and why are they useful for pronunciation practice?',
        options: [
          { id: 'a', text: 'Very short words that are easy to pronounce', isCorrect: false },
          { id: 'b', text: 'Word pairs that differ by only one sound, helping you focus on specific distinctions', isCorrect: true },
          { id: 'c', text: 'Pairs of synonyms with similar pronunciation', isCorrect: false },
          { id: 'd', text: 'The smallest possible sentences in English', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Minimal pairs like ship/sheep or wine/vine differ by only one sound. Practicing them helps you isolate and master specific sound distinctions that might be difficult for speakers of your native language.',
      },
    },
    {
      id: 'engelsk-vg1-1-3-n-summary',
      type: 'text',
      content: `## Summary: Your Pronunciation Toolkit

**Challenging Sounds for Norwegians:**
- "th" sounds (voiced and voiceless) - tongue between teeth
- Short "i" vs. long "ee" (ship vs. sheep)
- "w" vs. "v" (wine vs. vine)

**Word Stress Patterns:**
- Two-syllable nouns/adjectives: usually first syllable (TAble)
- Two-syllable verbs: often second syllable (beLIEVE)
- Stress changes meaning (REcord noun vs. reCORD verb)

**Sentence Stress:** Content words stressed, function words reduced, creating English rhythm.

**Connected Speech:** Linking, reduction, and the schwa sound make natural speech flow together.

**Practice Strategies:**
- Listen actively and record yourself
- Practice minimal pairs
- Use tongue twisters
- Shadow native speakers
- Exaggerate new sounds at first

**Remember:** The goal is clear communication, not perfection. You can speak excellent English with an accent.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 1.4 NARRATIVE: Academic Language and Register
// ============================================================================

export const CHAPTER_ENGELSK_VG1_1_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-1-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.4',
  title: 'Academic Language and Register',
  subtitle: 'Narrative Version',
  description: 'Master the art of formal expression and unlock the language of academic success.',
  estimatedMinutes: 35,
  competenceGoals: ['lytte til, forstå og bruke akademisk språk i arbeid med egne muntlige og skriftlige tekster'],
  linkedChapterId: 'engelsk-vg1-1-4',
  content: [
    {
      id: 'engelsk-vg1-1-4-n-intro',
      type: 'text',
      content: `## Two Languages in One

Imagine this scenario: You're texting your friend about a movie. "That film was SO boring lol, couldn't even finish it tbh." Now imagine writing about the same film for an English essay. Would you write the same way? Of course not.

This isn't because one way is "right" and another is "wrong." Both are appropriate - for their contexts. The text message is perfect for casual communication with a friend. It would be wildly inappropriate in an academic essay. The essay style would be perfect for school. It would be stiff and strange in a text message.

This ability to shift between different styles of language is called register awareness. And the particular register we'll focus on in this chapter - academic language - is essential for success in school, university, and many professional settings.

Academic language might feel unnatural at first, like wearing formal clothes when you'd rather be in sweatpants. But just as you learn to dress appropriately for different occasions, you can learn to write and speak appropriately for academic contexts. Let's explore how.`,
    },
    {
      id: 'engelsk-vg1-1-4-n-section1',
      type: 'text',
      content: `## What Makes Language "Academic"?

Academic language has several distinctive features that set it apart from everyday English. Understanding these features is the first step to using them yourself.

First, academic language uses more formal vocabulary. Where casual English might say "lots of," academic English prefers "numerous" or "many." Instead of "get," you'll find "obtain" or "acquire." Rather than "show," you'll see "demonstrate" or "illustrate." This isn't about using fancy words for their own sake - it's about precision. Academic terms often have more specific meanings than their casual equivalents.

Second, academic language avoids contractions. Don't becomes do not. Can't becomes cannot. Won't becomes will not. This small change immediately makes text feel more formal.

Third, academic language tends to use complex sentence structures. Instead of many short, simple sentences, academic writing links ideas together into longer, more sophisticated constructions using subordinate clauses and connective phrases.

Fourth, academic language aims for objectivity. Rather than "I think this is wrong," academic writing might say "This approach appears problematic" or "Evidence suggests limitations to this perspective." The focus shifts from personal opinion to analyzed evidence.

Fifth, academic language is precise and specific. Vague words like "things," "stuff," "really," and "a lot" give way to concrete, specific terms that say exactly what you mean.`,
    },
    {
      id: 'engelsk-vg1-1-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Which of the following sentences uses academic register appropriately?',
        options: [
          { id: 'a', text: 'Kids today are totally addicted to their phones, it\'s really bad.', isCorrect: false },
          { id: 'b', text: 'Research indicates that adolescent smartphone usage has increased significantly, with potential implications for mental health.', isCorrect: true },
          { id: 'c', text: 'Lots of stuff shows phones are messing up young people.', isCorrect: false },
          { id: 'd', text: 'I think phones are problematic for children because they\'re always on them.', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Option B uses formal vocabulary (adolescent, implications), avoids contractions, has a complex sentence structure, aims for objectivity (research indicates rather than I think), and is specific (smartphone usage, mental health).',
      },
    },
    {
      id: 'engelsk-vg1-1-4-n-section2',
      type: 'text',
      content: `## The Vocabulary of Academic English

Let's build your academic vocabulary systematically. There's a set of high-utility words that appear across all academic subjects - sometimes called "Tier 2" vocabulary. Learning these gives you powerful tools for any academic writing.

For analyzing and discussing ideas, you need words like: analyze, examine, investigate, compare, contrast, distinguish, evaluate, assess, critique, interpret, synthesize. These replace vaguer verbs like "look at" or "think about."

For explaining cause and effect: therefore, consequently, thus, hence, as a result, accordingly, because, since, due to, owing to. These replace casual connectors like "so" or "because of this."

For presenting arguments: argue, claim, assert, maintain, contend, suggest, propose, support, justify, validate, challenge, refute, contradict. These are more precise than "say" or "think."

For describing significance: significant, substantial, considerable, primary, fundamental, essential, crucial, key, major, notable, remarkable. These replace vague intensifiers like "really" or "very."

For showing relationships: however, nevertheless, nonetheless, although, despite, in contrast, conversely, similarly, likewise, furthermore, moreover, additionally. These create sophisticated connections between ideas.

Keep a vocabulary notebook where you collect academic words as you encounter them. Don't just write definitions - write example sentences that show how the words are used in context.`,
    },
    {
      id: 'engelsk-vg1-1-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Which academic word best replaces "look into" in formal writing?',
        options: [
          { id: 'a', text: 'See', isCorrect: false },
          { id: 'b', text: 'Check', isCorrect: false },
          { id: 'c', text: 'Investigate', isCorrect: true },
          { id: 'd', text: 'Look', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Investigate" conveys the systematic examination implied by "look into" while being appropriately formal for academic writing. The other options are either too casual or don\'t capture the meaning.',
      },
    },
    {
      id: 'engelsk-vg1-1-4-n-section3',
      type: 'text',
      content: `## Hedging: The Art of Careful Claims

One crucial feature of academic language deserves special attention: hedging. This means using language that is less direct or absolute, showing appropriate caution about claims.

Why hedge? Because academic integrity requires acknowledging uncertainty. Claiming "Social media causes depression" is too absolute - the relationship is complex and contested. "Social media may contribute to depression" or "Research suggests a link between social media use and depression" is more accurate and academically responsible.

Hedging words and phrases include modal verbs (might, may, could, would), adverbs (perhaps, possibly, probably, apparently, seemingly), and phrases (it seems that, it appears that, tends to, there is evidence that, research suggests).

Compare these sentences:
- Direct: "This theory is wrong."
- Hedged: "This theory appears to have significant limitations."

- Direct: "Video games make children violent."
- Hedged: "Some studies suggest a possible correlation between violent video game exposure and aggressive behavior in certain contexts."

The hedged versions aren't weaker - they're more precise. They acknowledge the complexity of reality and leave room for debate and further investigation. This is the mark of sophisticated academic thinking.

However, don't over-hedge to the point where you say nothing at all. "It might possibly perhaps be somewhat suggested that there could potentially be some kind of link" is so hedged it's meaningless. Find the balance.`,
    },
    {
      id: 'engelsk-vg1-1-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why is hedging important in academic writing?',
        options: [
          { id: 'a', text: 'Because academic writers are unsure about everything', isCorrect: false },
          { id: 'b', text: 'Because it makes writing longer and more impressive', isCorrect: false },
          { id: 'c', text: 'Because it shows intellectual honesty about uncertainty and complexity', isCorrect: true },
          { id: 'd', text: 'Because teachers require it for higher grades', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Hedging demonstrates awareness that most claims in academic contexts involve complexity, uncertainty, or contested evidence. It shows you understand that absolute statements are rarely justified and that responsible scholars acknowledge limitations.',
      },
    },
    {
      id: 'engelsk-vg1-1-4-n-section4',
      type: 'text',
      content: `## From Informal to Formal: A Transformation Guide

Let's see academic transformation in action. We'll take informal text and systematically convert it to academic register.

Informal: "Kids today spend way too much time on their phones. It's really bad for them and messes up their sleep."

Step 1 - Replace informal vocabulary:
"Kids" becomes "contemporary adolescents"
"way too much" becomes "excessive"
"phones" becomes "smartphone usage"
"really bad" becomes "significant negative consequences"
"messes up" becomes "disrupts"

Step 2 - Remove contractions:
"It's" becomes "This"

Step 3 - Add hedging where appropriate:
"spend" becomes "appear to allocate"
Add "research indicates" and "has been associated with"

Step 4 - Combine into complex sentences with appropriate connectors.

Result: "Research indicates that contemporary adolescents appear to allocate excessive time to smartphone usage. This behavior has been associated with significant negative consequences, including disrupted sleep patterns."

Notice that the academic version says essentially the same thing but with more precision, appropriate caution, and a formal tone suitable for essays and reports.

Practice this transformation with your own writing. Take casual sentences you might text to friends and rewrite them as if they were for an academic essay.`,
    },
    {
      id: 'engelsk-vg1-1-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Which transformation correctly converts "Scientists found out that..." to academic register?',
        options: [
          { id: 'a', text: 'Scientists discovered that...', isCorrect: false },
          { id: 'b', text: 'Research has demonstrated that...', isCorrect: true },
          { id: 'c', text: 'People in labs learned that...', isCorrect: false },
          { id: 'd', text: 'Science shows...', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Research has demonstrated that..." replaces the phrasal verb "found out" with the single formal verb "demonstrated," shifts from people to process ("research" rather than "scientists"), and uses present perfect to indicate ongoing relevance.',
      },
    },
    {
      id: 'engelsk-vg1-1-4-n-section5',
      type: 'text',
      content: `## Knowing When to Switch

Here's an important truth: academic language isn't better than informal language. It's appropriate for different situations. Knowing when to use which register is as important as knowing how.

Use academic register for: school essays and reports, formal presentations, university applications, professional emails to people you don't know well, cover letters, and any situation where you're being evaluated on your language skills.

Use informal register for: texting friends, casual conversation, social media posts (usually), creative writing that mimics speech, and any situation where being too formal would seem strange or distant.

Some situations fall in between. An email to your teacher about missing class probably shouldn't be as formal as an essay, but it shouldn't read like a text to your friend either. A middle register exists for these moments.

The skill isn't just knowing academic language - it's knowing when to deploy it. Reading the situation correctly, understanding expectations, and adjusting your language accordingly: this is true linguistic competence.

As you develop this awareness, you'll find you can move smoothly between registers without thinking about it consciously. You'll simply sense what the situation calls for and adjust. This flexibility is one of the most valuable language skills you can develop.`,
    },
    {
      id: 'engelsk-vg1-1-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Which situation would NOT require academic register?',
        options: [
          { id: 'a', text: 'Writing an essay for English class', isCorrect: false },
          { id: 'b', text: 'Sending a message to a friend about weekend plans', isCorrect: true },
          { id: 'c', text: 'Preparing a formal presentation', isCorrect: false },
          { id: 'd', text: 'Writing a university application essay', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Texting a friend about weekend plans calls for informal register. Using academic language would be inappropriate and strange in this context. The other situations are formal contexts where academic register is expected.',
      },
    },
    {
      id: 'engelsk-vg1-1-4-n-summary',
      type: 'text',
      content: `## Summary: Your Academic Language Toolkit

**Features of Academic Language:**
- Formal vocabulary (demonstrate not show, numerous not lots of)
- No contractions (do not instead of don't)
- Complex sentence structures
- Objective tone
- Precision and specificity

**Key Academic Vocabulary:** Learn words for analyzing (evaluate, examine), connecting (however, furthermore), arguing (contend, refute), and describing significance (substantial, fundamental).

**Hedging:** Use cautious language (may, suggests, appears to) to show awareness of uncertainty and complexity.

**Transformation Process:** Replace informal vocabulary, remove contractions, add hedging, combine into complex sentences.

**Register Awareness:** Academic language is appropriate for formal contexts, not better in all situations. Learn to read situations and adjust accordingly.

**Practice Strategy:** Take informal text and systematically transform it to academic register. Build your academic vocabulary through reading and noting new words.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 1.5 NARRATIVE: Connections Between Languages
// ============================================================================

export const CHAPTER_ENGELSK_VG1_1_5_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-1-5-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '1.5',
  title: 'Connections Between Languages',
  subtitle: 'Narrative Version',
  description: 'Discover how your Norwegian roots give you secret advantages in learning English.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke kunnskap om sammenhengar mellom engelsk og andre språk eleven kjenner, i eiga språklæring'],
  linkedChapterId: 'engelsk-vg1-1-5',
  content: [
    {
      id: 'engelsk-vg1-1-5-n-intro',
      type: 'text',
      content: `## Your Secret Advantage

Here's something your English teachers might not have told you: as a Norwegian speaker, you already have a head start in learning English. These two languages are cousins - descendants of the same ancestral language, shaped by centuries of contact and influence.

Think about it. Water and "vann." Mother and "mor." House and "hus." These aren't coincidences. English and Norwegian both belong to the Germanic language family, and they've been exchanging words and influences for over a thousand years.

Understanding this connection isn't just interesting history - it's a powerful learning tool. When you recognize that a strange English word has a Norwegian cousin, it suddenly becomes less foreign. When you understand how the languages evolved together, patterns emerge that make vocabulary easier to remember.

In this chapter, we'll explore the family relationship between English and Norwegian, learn how to use this knowledge strategically, and discover the surprising extent of Scandinavian influence on the English language. Your Norwegian isn't a barrier to English - it's a bridge.`,
    },
    {
      id: 'engelsk-vg1-1-5-n-section1',
      type: 'text',
      content: `## The Germanic Family Tree

Languages, like people, have family trees. English and Norwegian both descended from Proto-Germanic, a language spoken around 500 BCE in Scandinavia and northern Germany. As groups of speakers migrated and separated, their languages gradually diverged.

The Germanic family has three main branches. The North Germanic languages became Norwegian, Swedish, Danish, and Icelandic - the Scandinavian languages. The West Germanic languages became English, German, and Dutch. The East Germanic languages, including Gothic, are now extinct.

English and Norwegian are like cousins who grew up in different countries but share the same grandparents. They developed separately, but their shared ancestry means countless words and some grammatical features remain similar.

This is why basic, everyday words often look alike. Consider: fish/fisk, man/mann, green/grønn, night/natt, long/lang. These words are cognates - words in different languages that share a common origin.

Interestingly, the most basic words tend to be the most similar because they're the oldest and have been preserved since before the languages split. Words for family members, body parts, numbers, common animals, and basic verbs often have clear connections between Norwegian and English.`,
    },
    {
      id: 'engelsk-vg1-1-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What are "cognates"?',
        options: [
          { id: 'a', text: 'Words that sound the same but have different meanings', isCorrect: false },
          { id: 'b', text: 'Words in different languages that share a common historical origin', isCorrect: true },
          { id: 'c', text: 'Words borrowed from Latin', isCorrect: false },
          { id: 'd', text: 'Words that are difficult to translate', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Cognates are words in different languages that descended from the same ancestral word. English "mother" and Norwegian "mor" are cognates because both came from the Proto-Germanic word for mother.',
      },
    },
    {
      id: 'engelsk-vg1-1-5-n-section2',
      type: 'text',
      content: `## The Viking Connection

Now here's where the story gets really interesting. Norwegian didn't just influence English through distant shared ancestry - it influenced it directly, dramatically, and relatively recently.

From about 793 to 1066 CE, Scandinavian Vikings invaded, settled, and ruled large parts of England. They didn't just raid and leave. They stayed, married local people, and raised bilingual children. For centuries, Old Norse (the ancestor of Norwegian) and Old English were spoken side by side.

The result? Thousands of Norse words entered English. And these aren't obscure terms - they're some of the most common words in the language. The pronouns "they," "them," and "their" are Norse. So are "sky," "skin," "skill," "skirt," "egg," "leg," "husband," "window," and "knife."

Common verbs like "take," "give," "get," and "want" came from Norse. So did adjectives like "happy," "ugly," "wrong," and "weak." Even the verb "are" - as in "we are," "they are" - replaced the original Old English form because of Norse influence.

You can sometimes spot Norse words by the "sk" combination at the beginning. Old English typically changed "sk" to "sh," so words like "sky," "skin," and "skill" with their preserved "sk" often have Scandinavian origins. Compare "shirt" (English) with "skirt" (Norse) - both originally meant the same type of garment!

Place names in England also reveal Viking settlement. Towns ending in "-by" (meaning farm or settlement) include Derby and Whitby. Names ending in "-thorpe" (village) include Scunthorpe. These are all from Old Norse.`,
    },
    {
      id: 'engelsk-vg1-1-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Which common English words came from Old Norse (Viking language)?',
        options: [
          { id: 'a', text: 'Beautiful, democracy, telephone', isCorrect: false },
          { id: 'b', text: 'They, them, their, sky, egg, take', isCorrect: true },
          { id: 'c', text: 'Computer, internet, technology', isCorrect: false },
          { id: 'd', text: 'Shall, should, would', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The pronouns they/them/their and common words like sky, egg, and take all entered English from Old Norse during the Viking Age. These are some of the most frequently used words in English - showing how deeply Norse influenced the language.',
      },
    },
    {
      id: 'engelsk-vg1-1-5-n-section3',
      type: 'text',
      content: `## Using Transfer Strategies

Now that you understand the connection, how do you use it? Transfer strategies let you leverage your Norwegian knowledge when learning English.

When you encounter an unfamiliar English word, check if it has a Germanic root that resembles something in Norwegian. The word "forefather" breaks down into "fore" (like "for-" in Norwegian, meaning before) and "father" (like "far"). You can deduce it means "forfader" - ancestor.

Compound words often translate piece by piece. "Handbook" is "håndbok." "Understand" has the same structure as "forstå" (under + stand = under + stå). "Earthquake" parallels "jordskjelv" (earth + quake = jord + skjelv).

However, be careful. Not all similar-looking words mean the same thing. These are called "false friends" - words that look alike but have different meanings. In Norwegian, "gift" means "married" or "poison" - not a present. "Barn" means "child" - not a farm building. "Fart" means "speed" - not... well, you know.

The strategy is: use Norwegian as a first guess, but verify. If the cognate makes sense in context, you're probably right. If something seems strange, double-check with a dictionary.

This works both ways, by the way. Your English knowledge helps you understand other Germanic languages too. German, Dutch, Swedish, and Danish all share vocabulary with both English and Norwegian. Learning one Germanic language makes the others easier.`,
    },
    {
      id: 'engelsk-vg1-1-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What are "false friends" in language learning?',
        options: [
          { id: 'a', text: 'People who pretend to help you learn but actually don\'t', isCorrect: false },
          { id: 'b', text: 'Words in different languages that look similar but have different meanings', isCorrect: true },
          { id: 'c', text: 'Words that are difficult to pronounce correctly', isCorrect: false },
          { id: 'd', text: 'Grammar rules that don\'t apply to all cases', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'False friends are deceptive cognates - words that look similar across languages but mean different things. Norwegian "gift" (married/poison) and English "gift" (present) are false friends that could cause embarrassing misunderstandings!',
      },
    },
    {
      id: 'engelsk-vg1-1-5-n-section4',
      type: 'text',
      content: `## Beyond Germanic: English's Other Influences

Here's a twist: while the most common English words are Germanic, the majority of English vocabulary actually comes from Latin and French. How did that happen?

In 1066, the Norman French conquered England. For the next few centuries, French was the language of the English court, law, and high culture. Thousands of French words entered English, especially in areas like law, government, art, food, and fashion.

This created an interesting pattern. Basic, everyday words tend to be Germanic, while more formal or specialized words are often Latin-based. Consider these pairs:

- ask (Germanic) / inquire (French/Latin)
- begin (Germanic) / commence (French/Latin)
- help (Germanic) / assist (French/Latin)
- end (Germanic) / conclude (French/Latin)
- rise (Germanic) / ascend (French/Latin)

This is why academic English feels different from casual English. Academic vocabulary draws heavily from Latin and French, while everyday conversation uses more Germanic words. When you learn to use academic register, you're essentially learning to use the French/Latin layer of English vocabulary.

Your Norwegian helps most with basic vocabulary and some grammar. For academic and specialized vocabulary, knowledge of French or Latin provides more leverage. This is one reason why Norwegians sometimes find casual English easier than academic English - your linguistic background gives you a stronger foundation in the Germanic layer.`,
    },
    {
      id: 'engelsk-vg1-1-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Why are academic English words often different from everyday English words?',
        options: [
          { id: 'a', text: 'Teachers invented new words to make school harder', isCorrect: false },
          { id: 'b', text: 'Academic words come from Latin/French while everyday words are Germanic', isCorrect: true },
          { id: 'c', text: 'Academic words are more recent inventions', isCorrect: false },
          { id: 'd', text: 'Everyday words were simplified for easier communication', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'After the Norman conquest in 1066, French became the language of education and formal contexts in England. This created a dual vocabulary system: Germanic words for everyday use, Latin/French words for formal and academic contexts.',
      },
    },
    {
      id: 'engelsk-vg1-1-5-n-section5',
      type: 'text',
      content: `## Putting It All Together

Let's consolidate what you've learned into a practical approach for leveraging language connections.

First, develop etymological awareness. When you learn new words, think about where they might come from. Does it look Germanic? Latin? French? This context helps you remember words and predict what related words might mean.

Second, use Norwegian as your first guess for unfamiliar Germanic words, but verify. Context usually reveals whether your guess makes sense. If a word doesn't fit the Germanic pattern, it might be Latin-based and require a different strategy.

Third, learn word families together. When you encounter "photograph," also learn "photography" and "photographic." Understanding how prefixes and suffixes work in English helps you decode new words independently.

Fourth, pay attention to the formality level. Germanic words generally sound more casual, Latin/French words more formal. Choosing between "begin" and "commence" isn't just about meaning - it's about register.

Fifth, notice patterns. The more language connections you discover, the easier it becomes to spot new ones. Your brain starts to recognize the signs of Norse influence, Latin borrowings, and shared Germanic roots.

Finally, remember that language learning is cumulative. Everything you know helps you learn more. Your Norwegian gives you a foundation. English helps you with other languages. Each language you study makes the next one easier. You're not just learning English - you're becoming a more capable language learner overall.`,
    },
    {
      id: 'engelsk-vg1-1-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the main practical benefit of understanding the connections between Norwegian and English?',
        options: [
          { id: 'a', text: 'You can skip learning vocabulary entirely', isCorrect: false },
          { id: 'b', text: 'You can use Norwegian knowledge to predict and remember English words', isCorrect: true },
          { id: 'c', text: 'You will automatically speak English without an accent', isCorrect: false },
          { id: 'd', text: 'English grammar becomes identical to Norwegian grammar', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Understanding language connections allows you to use what you already know strategically. When you recognize that English "handbook" parallels Norwegian "håndbok," you can remember and understand words more easily than starting from zero.',
      },
    },
    {
      id: 'engelsk-vg1-1-5-n-summary',
      type: 'text',
      content: `## Summary: Your Linguistic Heritage

**The Germanic Family:** English and Norwegian both descended from Proto-Germanic, sharing many basic words as cognates.

**The Viking Impact:** Norse speakers profoundly influenced English during the Viking Age (793-1066), giving English pronouns (they, them, their), everyday words (sky, egg, take), and even the verb "are."

**Cognates to Use:** fish/fisk, mother/mor, house/hus, water/vann, night/natt, green/grønn, bread/brød, dream/drøm, and many more.

**False Friends to Avoid:** gift (married/poison vs. present), barn (child vs. building), fart (speed vs...), blank (shiny vs. empty).

**The Latin/French Layer:** Academic vocabulary often comes from Latin and French rather than Germanic sources, which is why formal English feels different from casual English.

**Transfer Strategy:** Use Norwegian as a first guess for Germanic-looking words, verify in context, and learn word families together.

**Key Insight:** Your Norwegian background is an advantage, not an obstacle. Use it strategically to accelerate your English learning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2.1 NARRATIVE: Expressing Yourself with Nuance
// ============================================================================

export const CHAPTER_ENGELSK_VG1_2_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-2-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '2.1',
  title: 'Expressing Yourself with Nuance',
  subtitle: 'Narrative Version',
  description: 'Learn to say exactly what you mean with precision, subtlety, and style.',
  estimatedMinutes: 35,
  competenceGoals: ['uttrykke seg nyansert og presist med flyt og sammenheng, idiomatiske uttrykk og varierte setningsstrukturer tilpasset formål, mottaker og situasjon'],
  linkedChapterId: 'engelsk-vg1-2-1',
  content: [
    {
      id: 'engelsk-vg1-2-1-n-intro',
      type: 'text',
      content: `## Beyond Basic Communication

You've learned enough English to get your message across. But there's a difference between being understood and expressing yourself with precision and style. The difference between saying "It was bad" and "It was disappointing, actually - I had high hopes, but the execution fell short of the concept."

Nuanced expression means conveying not just facts, but shades of meaning. It means choosing words that match exactly what you want to say. It means structuring sentences in ways that guide your listener through your thoughts. It means adapting your language to fit the situation, the audience, and your purpose.

This chapter is about moving from functional English to expressive English. You'll learn about hedging language that shows appropriate caution, sentence structures that create variety and interest, and the skill of reading situations to adjust your communication style. By the end, you'll have tools to express yourself with the precision and flexibility that marks confident English speakers.`,
    },
    {
      id: 'engelsk-vg1-2-1-n-section1',
      type: 'text',
      content: `## The Art of Hedging

Imagine someone tells you, "Social media causes depression." Now imagine they say, "Some research suggests that heavy social media use may contribute to depression in certain individuals." Both sentences address the same topic, but they say very different things.

The second sentence hedges - it uses careful language to acknowledge uncertainty, complexity, and the limits of knowledge. This isn't weakness or wishy-washiness. It's precision and intellectual honesty.

Hedging words include modal verbs like might, may, could, and would. These signal possibility rather than certainty. Adverbs like perhaps, possibly, probably, and apparently add similar nuance. Phrases like "it seems that," "it appears that," "tends to," and "there is evidence suggesting" frame claims appropriately.

Compare: "This is wrong" versus "This might be problematic." The second version opens dialogue rather than shutting it down. It shows you've thought about the issue and are presenting your view while acknowledging others might see it differently.

Hedging is especially important in academic and professional contexts. Making absolute claims you can't fully support damages your credibility. Hedged language shows sophistication and appropriate humility about the complexity of most issues.

However, don't overdo it. Excessive hedging makes you sound uncertain about everything. "This might possibly perhaps be somewhat problematic" is so hedged it says nothing. Find the balance between confidence and appropriate caution.`,
    },
    {
      id: 'engelsk-vg1-2-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Which sentence demonstrates appropriate hedging?',
        options: [
          { id: 'a', text: 'Violent video games definitely make children aggressive.', isCorrect: false },
          { id: 'b', text: 'Some studies suggest a possible link between violent video games and aggressive behavior.', isCorrect: true },
          { id: 'c', text: 'Video games might possibly perhaps potentially be somewhat problematic.', isCorrect: false },
          { id: 'd', text: 'Everyone knows video games are harmful.', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Option B hedges appropriately - it acknowledges the source (some studies), uses cautious language (suggest, possible), and doesn\'t overclaim. Options A and D are too absolute, while C over-hedges to the point of meaninglessness.',
      },
    },
    {
      id: 'engelsk-vg1-2-1-n-section2',
      type: 'text',
      content: `## Sentence Variety: The Rhythm of Good Writing

Reading text where every sentence has the same structure is like listening to music where every note is the same length. Technically functional, but boring. Sentence variety creates rhythm, emphasis, and interest.

English gives you multiple sentence types to work with. Simple sentences have one independent clause: "The climate is changing." Clear and direct - good for emphasis.

Compound sentences join two independent clauses with a conjunction: "The climate is changing, and we must act." This shows relationship between ideas while keeping them balanced.

Complex sentences combine an independent clause with one or more dependent clauses: "Although some deny it, the climate is changing." The dependent clause adds context, condition, or contrast.

Compound-complex sentences use multiple clauses of both types: "While scientists agree on the facts, politicians debate solutions, and progress remains slow." These handle complex ideas with multiple relationships.

Good writers vary their sentences intentionally. Short sentences create punch and emphasis. Longer sentences develop complex ideas. Mixing them creates a rhythm that pulls readers along.

Also vary how sentences begin. Starting every sentence with "The" or "I" becomes monotonous. Try beginning with adverbs ("Unfortunately, the results were inconclusive"), prepositional phrases ("In recent years, awareness has grown"), or dependent clauses ("Because we act slowly, the problem worsens").`,
    },
    {
      id: 'engelsk-vg1-2-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: '"Although the book was long, it was so engaging that I finished it in two days." What type of sentence is this?',
        options: [
          { id: 'a', text: 'Simple sentence', isCorrect: false },
          { id: 'b', text: 'Compound sentence', isCorrect: false },
          { id: 'c', text: 'Complex sentence', isCorrect: true },
          { id: 'd', text: 'Run-on sentence', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'This is a complex sentence because it combines an independent clause ("it was so engaging that I finished it in two days") with a dependent clause ("Although the book was long"). The word "although" signals a subordinate relationship.',
      },
    },
    {
      id: 'engelsk-vg1-2-1-n-section3',
      type: 'text',
      content: `## Reading the Room: Adapting Your Language

The same message can be delivered in countless ways, and the best choice depends on your audience, purpose, and context. This is called situational awareness, and it's what separates competent speakers from truly effective communicators.

Consider audience first. Who are you speaking or writing to? What do they already know? What do they care about? Technical jargon impresses experts but confuses general audiences. Simple language might feel condescending to specialists. Match your vocabulary and complexity to your audience's background and expectations.

Think about purpose. Are you trying to inform, persuade, entertain, comfort, or challenge? An informative text prioritizes clarity and organization. A persuasive text emphasizes evidence and emotional appeal. Each purpose has its own conventions and strategies.

Consider the context and medium. A job interview demands different language than a conversation with friends. A formal presentation differs from a casual meeting. Written communication allows more complexity than spoken, because readers can re-read difficult passages.

This doesn't mean being fake or manipulative. It means being an effective communicator who can translate the same core message into forms that work for different situations. A skilled communicator might explain the same concept one way to a child, another way to a colleague, and a third way in a formal report - same truth, different packaging.`,
    },
    {
      id: 'engelsk-vg1-2-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'You need to explain a technical concept. Your audience is general public with no specialized knowledge. What should you prioritize?',
        options: [
          { id: 'a', text: 'Using as much technical jargon as possible to sound authoritative', isCorrect: false },
          { id: 'b', text: 'Clear language, analogies, and concrete examples they can relate to', isCorrect: true },
          { id: 'c', text: 'Keeping it as short as possible regardless of clarity', isCorrect: false },
          { id: 'd', text: 'Impressing them with your expertise', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'When communicating with non-specialists, prioritize clarity over impressiveness. Use language they understand, provide relatable analogies, and give concrete examples. Your goal is their understanding, not their admiration of your vocabulary.',
      },
    },
    {
      id: 'engelsk-vg1-2-1-n-section4',
      type: 'text',
      content: `## Precision in Word Choice

Every word carries not just a definition but also connotations - associated feelings and implications. Choosing the right word means considering both.

Consider the difference between "thin," "slim," "skinny," and "gaunt." All describe low body weight, but "slim" sounds positive and healthy, "skinny" slightly negative, and "gaunt" distinctly unhealthy. Your choice reveals your attitude toward what you're describing.

The same applies to verbs. "Said" is neutral. "Claimed" implies skepticism. "Admitted" suggests reluctance. "Insisted" implies persistence against disagreement. "Whispered" adds atmosphere. Each choice shapes how readers perceive the speaker and message.

Building a rich vocabulary isn't about knowing obscure words - it's about having options. When you only know one word for a concept, you're stuck with whatever connotations it carries. When you know five synonyms, you can choose the one that fits perfectly.

Read widely to absorb these nuances naturally. When you encounter words used skillfully, notice the effect. When you write, pause at important words and ask: is this exactly right? Is there a word that better captures my meaning? A thesaurus can help, but be careful - don't use words you don't fully understand just because they sound fancy.`,
    },
    {
      id: 'engelsk-vg1-2-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the difference between "The politician said..." and "The politician claimed..."?',
        options: [
          { id: 'a', text: 'They mean exactly the same thing', isCorrect: false },
          { id: 'b', text: '"Claimed" suggests the writer has doubts about the statement\'s truth', isCorrect: true },
          { id: 'c', text: '"Said" is more formal than "claimed"', isCorrect: false },
          { id: 'd', text: '"Claimed" is only used for false statements', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Said" is neutral and reports speech without judgment. "Claimed" carries a connotation of skepticism - it implies the writer doesn\'t fully accept the statement as true. This subtle difference shapes how readers perceive the politician\'s words.',
      },
    },
    {
      id: 'engelsk-vg1-2-1-n-section5',
      type: 'text',
      content: `## Putting It Together: Finding Your Voice

Nuanced expression isn't about following rigid rules. It's about developing judgment - knowing when to hedge and when to be direct, when to use simple sentences and when to build complex ones, when to use formal language and when casual fits better.

This judgment develops through practice and reflection. When you speak or write, pay attention to how your choices affect the result. When you read or listen to skilled communicators, notice their techniques. What makes certain speakers compelling? What makes certain writers clear and engaging?

Start collecting phrases and structures that work. When you hear an elegant hedge like "The evidence would seem to suggest," remember it. When you read a sentence structure that flows beautifully, analyze how it's built. Build a mental toolbox of options you can draw on.

Accept that you'll make mistakes. Sometimes you'll hedge too much or too little. Sometimes your sentence variety will feel forced. Sometimes you'll misjudge your audience. That's fine. Reflect, adjust, and try again.

Over time, your English will develop what we might call a "voice" - a distinctive way of expressing yourself that's genuinely yours while still being appropriate for different situations. This voice emerges from all your choices about hedging, sentence structure, word choice, and adaptation. It's not something you can fake or force. It develops naturally as you become a more thoughtful and skilled user of English.`,
    },
    {
      id: 'engelsk-vg1-2-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'How does one develop "voice" in their English expression?',
        options: [
          { id: 'a', text: 'By copying exactly how native speakers talk', isCorrect: false },
          { id: 'b', text: 'Through practice, reflection, and gradually developing judgment about language choices', isCorrect: true },
          { id: 'c', text: 'By memorizing rules and applying them mechanically', isCorrect: false },
          { id: 'd', text: 'Voice is innate - you either have it or you don\'t', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Voice develops through thoughtful practice. By paying attention to your choices and their effects, learning from skilled communicators, and reflecting on what works, you gradually develop the judgment that creates your distinctive way of expressing yourself.',
      },
    },
    {
      id: 'engelsk-vg1-2-1-n-summary',
      type: 'text',
      content: `## Summary: Expressing Yourself with Precision

**Hedging:** Use modal verbs (might, may, could), adverbs (perhaps, possibly), and phrases (it seems that) to show appropriate caution. Balance confidence with intellectual honesty.

**Sentence Variety:** Mix simple, compound, complex, and compound-complex sentences. Vary sentence beginnings. Create rhythm through alternating short and long sentences.

**Situational Awareness:** Adapt language to audience (their knowledge and expectations), purpose (inform, persuade, entertain), and context (formal vs. informal, written vs. spoken).

**Word Choice:** Consider connotations, not just definitions. Build vocabulary to have options. Choose words that precisely match your intended meaning.

**Developing Voice:** Through practice and reflection, develop judgment about when to use different techniques. Your voice emerges from countless thoughtful choices.

**Key Principle:** Nuanced expression is about having options and choosing wisely, not following rigid formulas.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2.2 NARRATIVE: Idioms and Expressions
// ============================================================================

export const CHAPTER_ENGELSK_VG1_2_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-2-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '2.2',
  title: 'Idioms and Expressions',
  subtitle: 'Narrative Version',
  description: 'Master the colorful phrases that bring English to life and make you sound like a natural speaker.',
  estimatedMinutes: 35,
  competenceGoals: ['uttrykke seg nyansert og presist med flyt og sammenheng, idiomatiske uttrykk'],
  linkedChapterId: 'engelsk-vg1-2-2',
  content: [
    {
      id: 'engelsk-vg1-2-2-n-intro',
      type: 'text',
      content: `## When Words Don't Mean What They Say

Picture this: someone tells you they "let the cat out of the bag." You look around, confused. What cat? What bag? They smile and explain they accidentally revealed a secret.

Welcome to the world of idioms - phrases where the meaning has nothing to do with the literal words. Native speakers use them constantly, often without realizing it. For learners, they can be baffling. But once you understand how they work, idioms become one of the most enjoyable parts of English, adding color, humor, and naturalness to your speech.

In this chapter, we'll explore common idioms and their meanings, learn about phrasal verbs (which are like mini-idioms), and discuss how to use these expressions appropriately. The goal isn't to fill your speech with idioms - overusing them sounds forced. The goal is to recognize them when you hear them, understand their effect, and use them naturally when they fit.`,
    },
    {
      id: 'engelsk-vg1-2-2-n-section1',
      type: 'text',
      content: `## What Makes Idioms Special

Idioms are fixed expressions whose meaning cannot be deduced from the individual words. They're like tiny packages of cultural knowledge, often reflecting historical practices, beliefs, or humor.

Some idioms are transparent - you can guess their meaning. "To break the ice" clearly refers to starting something difficult, like breaking through cold formality. "To be in the same boat" obviously means sharing a situation.

Others are opaque - the meaning has drifted so far from the words that you simply have to learn it. "To kick the bucket" means to die, but nothing about buckets or kicking suggests this. "Raining cats and dogs" means heavy rain, which makes no logical sense.

Idioms often reveal cultural values and history. "To burn the midnight oil" comes from before electricity, when working late meant using oil lamps. "Back to square one" may come from board games or early radio football commentary. Understanding where idioms come from often helps you remember them.

The challenge is that idioms don't translate. If you translate "it's all Greek to me" (meaning "I don't understand") literally into Norwegian, it means nothing. Each language has its own idioms reflecting its own culture and history.`,
    },
    {
      id: 'engelsk-vg1-2-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Why do idioms not translate directly between languages?',
        options: [
          { id: 'a', text: 'Because translation technology isn\'t advanced enough', isCorrect: false },
          { id: 'b', text: 'Because each language\'s idioms reflect its unique culture and history', isCorrect: true },
          { id: 'c', text: 'Because idioms are always grammatically incorrect', isCorrect: false },
          { id: 'd', text: 'Because they are only used in informal speech', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Idioms arise from specific cultural, historical, and linguistic contexts. "It\'s raining cats and dogs" makes no sense in Norwegian not because the words are untranslatable, but because the expression itself is culturally specific to English.',
      },
    },
    {
      id: 'engelsk-vg1-2-2-n-section2',
      type: 'text',
      content: `## Essential Idioms for Everyday Use

Let's learn some of the most useful English idioms, organized by theme.

For understanding and clarity: "It's all Greek to me" means you don't understand at all. "To get the hang of something" means to learn how to do something. "To be on the same page" means having the same understanding. "To miss the point" means failing to understand the main idea.

For effort and work: "To go the extra mile" means making more effort than expected. "To burn the midnight oil" means working late into the night. "To pull your weight" means doing your fair share of work. "To cut corners" means doing something the easy way, often sacrificing quality.

For communication: "To beat around the bush" means avoiding saying something directly. "To cut to the chase" means getting to the main point. "To speak your mind" means saying what you really think. "The elephant in the room" refers to an obvious problem everyone ignores.

For success and failure: "To hit the nail on the head" means being exactly right. "To miss the boat" means missing an opportunity. "Back to square one" means starting over from the beginning. "To be on thin ice" means being in a risky situation.

Don't try to memorize all idioms at once. Learn them in context as you encounter them. Notice when native speakers use them. Practice using one new idiom each week until it feels natural.`,
    },
    {
      id: 'engelsk-vg1-2-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Your friend has been talking for ten minutes without explaining their actual problem. You say: "Please just ______." Which idiom fits?',
        options: [
          { id: 'a', text: 'hit the nail on the head', isCorrect: false },
          { id: 'b', text: 'cut to the chase', isCorrect: true },
          { id: 'c', text: 'burn the midnight oil', isCorrect: false },
          { id: 'd', text: 'let the cat out of the bag', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Cut to the chase" means to get to the main point without unnecessary introduction or delay. It\'s perfect when someone is being indirect and you want them to state their actual issue directly.',
      },
    },
    {
      id: 'engelsk-vg1-2-2-n-section3',
      type: 'text',
      content: `## Phrasal Verbs: The Building Blocks

Phrasal verbs are combinations of a verb with a particle (preposition or adverb) that create a new meaning. They're everywhere in spoken English, and mastering them is essential for natural communication.

Consider the verb "look." Add different particles, and you get completely different meanings: "look up" (search for information), "look after" (take care of), "look forward to" (anticipate with pleasure), "look into" (investigate), "look down on" (consider inferior).

The verb "put" similarly transforms: "put off" (postpone), "put up with" (tolerate), "put together" (assemble), "put forward" (propose), "put down" (insult or euthanize, depending on context).

"Figure out" means to solve or understand. "Find out" means to discover. "Work out" means to exercise or to solve a problem. "Turn out" means to result in something or to become evident. "Run out of" means to exhaust your supply of something.

Phrasal verbs often have formal single-word equivalents: "put off" = postpone, "figure out" = determine, "look into" = investigate. The phrasal versions sound more natural in casual speech, while the single words work better in formal writing.

The key to learning phrasal verbs is context. Don't memorize lists. Instead, notice them when you read or listen, and observe how they're used. Over time, they become intuitive.`,
    },
    {
      id: 'engelsk-vg1-2-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: '"I can\'t ______ this noise anymore!" Which phrasal verb means "tolerate"?',
        options: [
          { id: 'a', text: 'put off', isCorrect: false },
          { id: 'b', text: 'put up with', isCorrect: true },
          { id: 'c', text: 'put forward', isCorrect: false },
          { id: 'd', text: 'put down', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Put up with" means to tolerate or endure something unpleasant. "Put off" means postpone, "put forward" means propose, and "put down" means to insult or (for animals) euthanize.',
      },
    },
    {
      id: 'engelsk-vg1-2-2-n-section4',
      type: 'text',
      content: `## Using Idioms Naturally

Now comes the tricky part: using idioms appropriately. Like spices in cooking, idioms should enhance your language, not overwhelm it.

First, understand before you use. Make sure you fully grasp an idiom's meaning and appropriate context before deploying it. Using an idiom incorrectly is worse than not using it at all. "We should tackle this problem head-first" misuses "head-on" and sounds confused.

Second, consider formality. Many idioms are casual and don't belong in formal writing. "The experiment went south" (failed) is fine in conversation but too informal for a research paper. "The experiment yielded unexpected negative results" works better formally.

Third, don't overdo it. A conversation peppered with one idiom after another sounds unnatural and forced. Native speakers don't consciously try to use idioms - they emerge naturally when appropriate. If you're thinking "I should use an idiom here," you probably shouldn't.

Fourth, beware of mixing idioms. "We'll burn that bridge when we come to it" confuses "burn bridges" and "cross that bridge when we come to it." These mistakes happen even to native speakers but can cause confusion.

Fifth, pay attention to regional variations. Some idioms are primarily British ("Bob's your uncle"), others American ("throw someone under the bus"). Using expressions from the wrong variety won't prevent understanding, but it might sound slightly odd.`,
    },
    {
      id: 'engelsk-vg1-2-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the main risk of overusing idioms in your speech?',
        options: [
          { id: 'a', text: 'People won\'t know what language you\'re speaking', isCorrect: false },
          { id: 'b', text: 'It sounds unnatural and forced rather than fluent', isCorrect: true },
          { id: 'c', text: 'Idioms are always grammatically incorrect', isCorrect: false },
          { id: 'd', text: 'Idioms make you sound too informal for any situation', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Native speakers use idioms naturally and sparingly. Cramming too many idioms into your speech makes it sound like you\'re trying too hard, which paradoxically makes you sound less fluent rather than more.',
      },
    },
    {
      id: 'engelsk-vg1-2-2-n-section5',
      type: 'text',
      content: `## Building Your Idiomatic Vocabulary

Let's develop a practical strategy for learning idioms and phrasal verbs over time.

Keep an idiom journal. When you encounter a new idiom in reading, listening, or conversation, write it down with its meaning, an example sentence, and where you found it. Review periodically. This active collection makes idioms stick better than passive exposure.

Learn idioms in context, not from lists. An idiom learned from a memorable movie scene or book passage is more likely to stay with you than one memorized from a vocabulary list. The context provides hooks for memory.

Practice in low-stakes situations. Try out new idioms with friends, in class discussions, or in informal writing before using them in important contexts. Get comfortable with how they feel in your mouth and how listeners respond.

Notice patterns in phrasal verbs. Many particles carry consistent meanings across different verbs. "Out" often implies completing or discovering: find out, figure out, work out, turn out. "Up" often suggests increasing or preparing: build up, warm up, speed up. Recognizing these patterns helps you understand new phrasal verbs.

Listen for idioms in media. TV shows, movies, and podcasts are rich sources. When characters use idioms, the context usually makes the meaning clear. Note which situations call for idiomatic language and which don't.

Finally, be patient. Idiomatic fluency develops slowly. You'll understand idioms long before you use them confidently. That's normal. Keep exposing yourself to natural English, and the idioms will gradually become part of your active vocabulary.`,
    },
    {
      id: 'engelsk-vg1-2-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the most effective way to learn idioms?',
        options: [
          { id: 'a', text: 'Memorizing long lists of idioms with their definitions', isCorrect: false },
          { id: 'b', text: 'Using as many idioms as possible in every conversation', isCorrect: false },
          { id: 'c', text: 'Learning them in context through reading, listening, and noting memorable examples', isCorrect: true },
          { id: 'd', text: 'Translating Norwegian idioms directly into English', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Idioms stick when learned in memorable contexts. Reading, listening, and noting how idioms are actually used gives you both the meaning and the sense of when they\'re appropriate - something no vocabulary list can provide.',
      },
    },
    {
      id: 'engelsk-vg1-2-2-n-summary',
      type: 'text',
      content: `## Summary: Mastering Idioms and Expressions

**What Idioms Are:** Fixed expressions whose meaning cannot be deduced from the individual words. They reflect cultural history and don't translate directly between languages.

**Essential Idioms:** Learn common idioms for understanding (get the hang of), effort (go the extra mile), communication (cut to the chase), and success/failure (hit the nail on the head).

**Phrasal Verbs:** Verb + particle combinations with new meanings. Look up, put off, figure out, work out. More natural in casual speech than their formal equivalents.

**Using Idioms Well:** Understand before using, consider formality, don't overdo it, don't mix idioms, and be aware of regional variations.

**Learning Strategy:** Keep an idiom journal, learn in context, practice in low-stakes situations, notice patterns, and be patient.

**Key Principle:** Idioms should enhance your language naturally, not be forced into every sentence. Quality and appropriateness over quantity.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2.3 NARRATIVE: Conversations and Discussions
// ============================================================================

export const CHAPTER_ENGELSK_VG1_2_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-2-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '2.3',
  title: 'Conversations and Discussions',
  subtitle: 'Narrative Version',
  description: 'Master the art of meaningful dialogue and become a valued participant in any discussion.',
  estimatedMinutes: 40,
  competenceGoals: ['forklare andres argumenter og bruke og følge opp andres innspill i samtaler og diskusjoner om ulike emner'],
  linkedChapterId: 'engelsk-vg1-2-3',
  content: [
    {
      id: 'engelsk-vg1-2-3-n-intro',
      type: 'text',
      content: `## The Dance of Dialogue

A good conversation is like a dance. Both participants move together, responding to each other, building on what came before, creating something neither could create alone. A bad conversation is like two people dancing alone in the same room - technically in the same space but not really connecting.

What makes the difference? Skills that can be learned. Active listening. Responding to what others actually say rather than just waiting for your turn to speak. Building on ideas. Disagreeing respectfully. Asking questions that deepen understanding.

This chapter is about becoming a skilled conversationalist and discussant. Whether you're chatting with friends, participating in class discussions, or engaging in formal debates, these skills will help you contribute meaningfully, learn from others, and express your own views effectively.`,
    },
    {
      id: 'engelsk-vg1-2-3-n-section1',
      type: 'text',
      content: `## The Art of Active Listening

Here's a secret most people don't know: the key to being a good conversationalist isn't knowing what to say. It's knowing how to listen.

Active listening means fully concentrating on what the other person is saying, understanding it, and responding to it. This sounds obvious, but notice what most people actually do: while someone else speaks, they're planning what they're going to say next, or thinking about something unrelated, or waiting for a pause so they can jump in.

Active listening involves several practices. First, give your full attention. Make eye contact (in cultures where this is appropriate). Put away your phone. Stop the mental planning and just receive what's being said.

Second, show you're listening. Nod. Use brief verbal acknowledgments like "mm-hmm" or "I see." These signals encourage the speaker and demonstrate engagement.

Third, check your understanding. When someone finishes a point, summarize what you heard before responding. "So if I understand correctly, you're saying..." This prevents misunderstandings and shows you took their words seriously.

Fourth, ask clarifying questions. "What do you mean by...?" "Could you give an example of...?" These questions help you understand fully and show genuine interest.

When you truly listen, something magical happens: people feel heard. They open up more. They're more willing to listen to you in return. Paradoxically, you become a better speaker by becoming a better listener.`,
    },
    {
      id: 'engelsk-vg1-2-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is the main characteristic of active listening?',
        options: [
          { id: 'a', text: 'Planning your response while the other person speaks', isCorrect: false },
          { id: 'b', text: 'Fully concentrating on what is being said and responding to it', isCorrect: true },
          { id: 'c', text: 'Waiting silently until it\'s your turn to talk', isCorrect: false },
          { id: 'd', text: 'Agreeing with everything the speaker says', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Active listening means being fully present and engaged with what the speaker is saying, rather than passively hearing while your mind is elsewhere. It involves attention, acknowledgment, and thoughtful response.',
      },
    },
    {
      id: 'engelsk-vg1-2-3-n-section2',
      type: 'text',
      content: `## Discussion Phrases: Your Toolkit

English has a rich set of phrases for managing discussions. These aren't just polite formalities - they're tools for structuring conversation and showing respect for others' contributions.

For agreeing: "I completely agree with..." "That's a good point, and I'd add..." "You've raised an important issue..." These phrases acknowledge others while adding your perspective.

For partially agreeing: "I see your point, but..." "That's true to some extent, however..." "While I agree that..., I also think..." These balance validation with gentle disagreement.

For disagreeing politely: "I see it differently..." "I'm not sure I agree because..." "That's one perspective, but have you considered...?" Notice these focus on ideas, not the person. "I disagree with your point" is very different from "You're wrong."

For building on ideas: "Building on what you said..." "To add to that point..." "Taking that idea further..." These show your contribution grows from the conversation rather than ignoring it.

For asking clarification: "Could you explain what you mean by...?" "Can you give an example?" "Are you saying that...?" These show engagement and prevent misunderstanding.

For summarizing: "So, if I understand correctly..." "Your main argument seems to be..." "To summarize what's been said..." These help consolidate understanding and move the discussion forward.

Practice these phrases until they become automatic. They're the social lubricant that makes discussions flow smoothly.`,
    },
    {
      id: 'engelsk-vg1-2-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Someone presents an argument you partially disagree with. Which response is most appropriate?',
        options: [
          { id: 'a', text: '"You\'re completely wrong about that."', isCorrect: false },
          { id: 'b', text: '"That\'s true to some extent, however I would add..."', isCorrect: true },
          { id: 'c', text: 'Staying silent to avoid conflict', isCorrect: false },
          { id: 'd', text: '"I guess you\'re right" (even though you disagree)', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Partial agreement phrases acknowledge what\'s valid in the other person\'s point while making room for your different perspective. This creates constructive dialogue rather than confrontation or false agreement.',
      },
    },
    {
      id: 'engelsk-vg1-2-3-n-section3',
      type: 'text',
      content: `## Explaining and Engaging with Others' Arguments

A crucial discussion skill is the ability to accurately explain what others have said. This might seem simple, but it's remarkably difficult to do well.

Why does this matter? First, you can't effectively respond to an argument you don't understand. By accurately summarizing what someone said, you ensure you're responding to their actual point, not a straw man version you've created.

Second, people feel respected when their views are understood. Even if you disagree completely, demonstrating that you've grasped their argument creates goodwill and openness.

Third, summarizing helps clarify thinking for everyone. Sometimes people don't express their ideas clearly. When you summarize, you might articulate their point better than they did, which helps the whole discussion.

How do you explain someone else's argument? Listen carefully. Identify their main claim and supporting reasons. Consider what's most important to them about this issue. Then summarize: "Your main argument seems to be that X because of Y and Z. Is that right?"

When engaging with their argument, address its strongest form, not its weakest. This is called the "principle of charity." If someone's argument could be interpreted multiple ways, respond to the most reasonable interpretation. This leads to more productive discussions than scoring points against weak versions of opponents' arguments.`,
    },
    {
      id: 'engelsk-vg1-2-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is the "principle of charity" in discussions?',
        options: [
          { id: 'a', text: 'Donating money to people you debate with', isCorrect: false },
          { id: 'b', text: 'Interpreting others\' arguments in their strongest, most reasonable form', isCorrect: true },
          { id: 'c', text: 'Always agreeing with what others say', isCorrect: false },
          { id: 'd', text: 'Forgiving people for making bad arguments', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The principle of charity means responding to the best version of someone\'s argument, not the weakest. This leads to more productive discussions and shows intellectual honesty.',
      },
    },
    {
      id: 'engelsk-vg1-2-3-n-section4',
      type: 'text',
      content: `## Building Collaborative Discussions

The best discussions aren't battles where one person wins - they're collaborative explorations where everyone learns something. Here's how to foster that kind of discussion.

First, aim for understanding, not victory. Enter discussions curious about what you might learn, not just planning to prove your point. The goal is collective insight, not personal triumph.

Second, build on others' contributions. Instead of introducing disconnected new points, link your ideas to what's been said. "That connects to something Anna mentioned earlier..." "Building on your point about X, I've noticed that..."

Third, introduce new perspectives thoughtfully. "Have we considered the perspective of...?" "Another way to look at this might be..." "There's also the question of..." These invite exploration rather than forcing conclusions.

Fourth, manage disagreement constructively. Focus on ideas, not personalities. Use "I" statements: "I see it differently" rather than "You're wrong." Look for common ground even in disagreement: "We seem to agree that X is important, but we differ on how to achieve it."

Fifth, help quieter participants contribute. If someone hasn't spoken, create space: "We haven't heard from everyone - any other thoughts?" In group settings, those who speak most should consciously make room for others.

Sixth, summarize and synthesize periodically. "Let me see if I can pull together what we've discussed..." This helps the group track progress and identify where further discussion is needed.`,
    },
    {
      id: 'engelsk-vg1-2-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What makes a discussion collaborative rather than competitive?',
        options: [
          { id: 'a', text: 'Everyone agrees with each other', isCorrect: false },
          { id: 'b', text: 'Participants aim to learn and build on each other\'s ideas, not to "win"', isCorrect: true },
          { id: 'c', text: 'No one expresses any disagreement', isCorrect: false },
          { id: 'd', text: 'One person leads and others follow', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Collaborative discussions prioritize collective understanding over individual victory. Participants build on each other\'s contributions, disagree respectfully, and aim to learn rather than prove they\'re right.',
      },
    },
    {
      id: 'engelsk-vg1-2-3-n-section5',
      type: 'text',
      content: `## Putting It Into Practice

These skills improve with practice. Here's how to develop them.

In everyday conversations, practice active listening. Really focus on what friends and family say. Summarize back to them. Notice how it changes the dynamic.

In class discussions, challenge yourself to use specific discussion phrases. Set a goal: this week, I'll use "building on what you said" at least once. Next week, add another phrase.

When you disagree with something you read or hear, practice explaining the other side's argument as fairly as possible before presenting your own view. Can you summarize their point in a way they would accept?

Watch discussions on video - podcasts, interviews, debates. Notice what skilled discussants do. How do they acknowledge others? How do they disagree politely? How do they build on ideas?

Reflect after discussions. What went well? Did you truly listen or just wait to speak? Did you respond to what was actually said or to what you assumed was meant? Did you contribute to a collaborative atmosphere?

The goal isn't to follow rigid rules but to develop genuine skills that become natural over time. With practice, active listening, responsive engagement, and collaborative discussion become habits rather than conscious efforts.`,
    },
    {
      id: 'engelsk-vg1-2-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the best way to improve discussion skills?',
        options: [
          { id: 'a', text: 'Reading about discussion techniques without practicing them', isCorrect: false },
          { id: 'b', text: 'Deliberate practice in real conversations, followed by reflection', isCorrect: true },
          { id: 'c', text: 'Avoiding discussions until you feel completely confident', isCorrect: false },
          { id: 'd', text: 'Only discussing topics you already know a lot about', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Like any skill, discussion improves through practice. Set specific goals for conversations, try new techniques, and reflect afterward on what worked. Theory matters, but skills develop through doing.',
      },
    },
    {
      id: 'engelsk-vg1-2-3-n-summary',
      type: 'text',
      content: `## Summary: Becoming a Skilled Discussant

**Active Listening:** Give full attention, show you're listening, check understanding, ask clarifying questions. Good conversations start with good listening.

**Discussion Phrases:** Master phrases for agreeing, partially agreeing, disagreeing politely, building on ideas, asking clarification, and summarizing.

**Explaining Others' Arguments:** Accurately summarize others' points before responding. Use the principle of charity - respond to arguments in their strongest form.

**Collaborative Atmosphere:** Aim for collective understanding, not personal victory. Build on contributions. Manage disagreement constructively. Make space for all voices.

**Practice Strategy:** Use discussion skills in everyday conversations. Set specific goals. Reflect on what works.

**Key Principle:** The best discussions are dances, not battles. Both people should leave having learned something.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2.4 NARRATIVE: Presentations and Public Speaking
// ============================================================================

export const CHAPTER_ENGELSK_VG1_2_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-2-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '2.4',
  title: 'Presentations and Public Speaking',
  subtitle: 'Narrative Version',
  description: 'Conquer your fear of public speaking and learn to captivate any audience.',
  estimatedMinutes: 40,
  competenceGoals: ['uttrykke seg nyansert og presist med flyt og sammenheng tilpasset formål, mottaker og situasjon'],
  linkedChapterId: 'engelsk-vg1-2-4',
  content: [
    {
      id: 'engelsk-vg1-2-4-n-intro',
      type: 'text',
      content: `## Facing the Fear

Let's start with a comforting truth: almost everyone is nervous about public speaking. Research consistently places it among people's greatest fears. If your heart races and your palms sweat at the thought of presenting, you're in excellent company.

Here's another truth: public speaking is a skill that can be learned. The confident speakers you admire weren't born that way. They practiced, failed, learned, and practiced more. The nervous beginner and the polished presenter are separated only by experience and technique.

This chapter will give you those techniques. You'll learn how to structure presentations for maximum impact, how to deliver them effectively, and how to manage the inevitable nerves. By the end, you won't be fearless - but you'll be prepared.`,
    },
    {
      id: 'engelsk-vg1-2-4-n-section1',
      type: 'text',
      content: `## The Three Pillars of Presentation

Effective presentations rest on three pillars: content (what you say), structure (how you organize it), and delivery (how you present it). All three matter.

Content starts with knowing your material deeply. You should understand far more than you'll present. This depth gives you confidence and flexibility. If someone asks a question or you need to skip a section, you can adapt because you're not dependent on a script.

Your content should be appropriate for your audience. What do they already know? What interests them? What will be new or challenging? Tailor your material to their level and concerns, not to what you find interesting about the topic.

Structure gives your presentation shape and flow. The classic three-part structure works because brains crave organization: tell them what you'll tell them (introduction), tell them (body), tell them what you told them (conclusion).

Within the body, limit yourself to two to four main points. More than that overwhelms listeners. Each point needs support - evidence, examples, explanations. And transitions between points should be explicit so listeners can follow along.

Delivery brings your content and structure to life. Even excellent material badly delivered falls flat. Delivery includes your voice, body language, visual aids, and overall presence. We'll explore each of these.`,
    },
    {
      id: 'engelsk-vg1-2-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Why should you know more about your topic than what you\'ll actually present?',
        options: [
          { id: 'a', text: 'To show off your knowledge to the audience', isCorrect: false },
          { id: 'b', text: 'Because deeper knowledge gives confidence and flexibility to adapt', isCorrect: true },
          { id: 'c', text: 'To make the presentation longer', isCorrect: false },
          { id: 'd', text: 'Because teachers will test you on details', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'When you understand your topic deeply, you\'re not dependent on a script. You can handle questions, adapt to audience reactions, and recover from mistakes because you have a well of knowledge to draw from.',
      },
    },
    {
      id: 'engelsk-vg1-2-4-n-section2',
      type: 'text',
      content: `## Crafting Your Structure

The introduction is your chance to grab attention and set expectations. Don't waste it with "Hi, my name is..." - they know your name. Instead, hook them immediately.

Hooks come in many forms. A startling statistic: "Every hour, three people in Norway are diagnosed with diabetes." A provocative question: "What if everything you believe about climate change is wrong - but not in the way you think?" A brief story: "Last summer, I witnessed something that changed how I think about technology." A vivid image: "Imagine waking up tomorrow and every electronic device you own has stopped working."

After hooking them, state your topic and preview your main points. "Today, I'm going to argue that X. I'll make three main points: first..., second..., third..." This roadmap helps listeners follow along.

The body is where you develop your points. Give each main point roughly equal time. Support each with evidence, examples, or explanations. Use clear transitions: "Now that we've seen X, let's move to Y" or "My second point connects directly to this..."

The conclusion should be memorable. Summarize your main points briefly - don't just repeat everything. Then end with impact: a call to action ("The next time you..., remember..."), a return to your opening hook, or a powerful final thought. Never end with "That's all I have" or "Any questions?"`,
    },
    {
      id: 'engelsk-vg1-2-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Which is the most effective way to begin a presentation?',
        options: [
          { id: 'a', text: '"Hi, my name is... and today I\'m going to talk about..."', isCorrect: false },
          { id: 'b', text: 'A hook that grabs attention: surprising fact, question, or story', isCorrect: true },
          { id: 'c', text: 'An apology for being nervous', isCorrect: false },
          { id: 'd', text: 'Reading your first slide out loud', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The opening is your best chance to capture attention. A hook - whether a surprising statistic, thought-provoking question, or brief story - immediately engages the audience and makes them want to hear more.',
      },
    },
    {
      id: 'engelsk-vg1-2-4-n-section3',
      type: 'text',
      content: `## The Art of Delivery

Your voice is your primary instrument. Use it consciously.

Volume should be enough that everyone can hear comfortably. Project to the back of the room. If in doubt, ask: "Can everyone hear me okay?"

Pace matters more than you might think. Nervous speakers rush. Slow down. Use pauses deliberately - before an important point, after one, or to let something sink in. Silence isn't awkward when used intentionally. It creates emphasis.

Vary your tone. A monotone puts people to sleep. Let your natural enthusiasm show. Raise your pitch slightly for questions, lower it for serious points. Your voice should reflect the emotional content of what you're saying.

Body language communicates as powerfully as words. Stand balanced and upright - this conveys confidence even if you don't feel it. Make eye contact with different parts of the audience; don't stare at one person or at your notes.

Gestures should be natural. Don't plan specific gestures - that looks rehearsed. But don't suppress them either - keeping your hands rigidly at your sides or clasped tightly looks nervous. Let your hands move naturally as they would in conversation.

Move purposefully if you have space. Moving to a new position can signal a transition to a new point. But don't pace nervously back and forth - that distracts.`,
    },
    {
      id: 'engelsk-vg1-2-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What should you do with pauses during a presentation?',
        options: [
          { id: 'a', text: 'Avoid them completely - they make you seem unprepared', isCorrect: false },
          { id: 'b', text: 'Use them deliberately to create emphasis and let points sink in', isCorrect: true },
          { id: 'c', text: 'Fill them with "um" and "uh" so there\'s no silence', isCorrect: false },
          { id: 'd', text: 'Only pause if you forget what to say', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Strategic pauses are powerful. They give important points time to land, create anticipation, and actually make you appear more confident. Intentional silence is not awkward - rushing through without pauses is.',
      },
    },
    {
      id: 'engelsk-vg1-2-4-n-section4',
      type: 'text',
      content: `## Managing Nerves

Let's talk directly about nervousness, because it affects almost everyone.

First, reframe your nerves. The physical symptoms - racing heart, sweaty palms, butterflies - are your body preparing for a challenge. Athletes feel this before competitions. Performers feel it before going on stage. It's not a sign that something is wrong; it's a sign your body is getting ready to perform.

Preparation is the best anti-anxiety technique. When you know your material cold, you have less to be anxious about. Rehearse out loud, multiple times. Practice in the actual space if possible. The more familiar everything feels, the calmer you'll be.

Before you speak, breathe. Slow, deep breaths activate your parasympathetic nervous system and reduce the fight-or-flight response. Take several deep breaths before you begin.

Focus on your message, not yourself. Instead of thinking "How do I look? Do they think I'm nervous?" think "I have something valuable to share with these people." Shifting focus from self to audience reduces anxiety.

Remember that audiences want you to succeed. They're not waiting for you to fail. They're hoping for an interesting, useful presentation. They're on your side.

Finally, accept that some nervousness might remain. Even experienced speakers feel it. The goal isn't to eliminate nerves but to function well despite them. With practice, you'll learn to channel nervous energy into engaging delivery.`,
    },
    {
      id: 'engelsk-vg1-2-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the most effective way to reduce presentation anxiety?',
        options: [
          { id: 'a', text: 'Avoiding presentations whenever possible', isCorrect: false },
          { id: 'b', text: 'Thorough preparation and rehearsal', isCorrect: true },
          { id: 'c', text: 'Memorizing your presentation word for word', isCorrect: false },
          { id: 'd', text: 'Imagining the audience in their underwear', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nothing beats preparation for reducing anxiety. When you know your material well and have practiced delivering it, you have far less to be nervous about. You can handle surprises because you\'re not dependent on everything going perfectly.',
      },
    },
    {
      id: 'engelsk-vg1-2-4-n-section5',
      type: 'text',
      content: `## Practical Tips for Success

Here are concrete practices that will make you a better presenter.

Use notes, not a script. Having every word written out encourages you to read, which kills engagement. Instead, use bullet points with key phrases. This keeps you connected with the audience while ensuring you don't miss important points.

Rehearse aloud. Reading through your presentation silently is not real practice. You need to hear yourself speak the words, manage transitions, and time the whole thing. Rehearse standing up, with your visual aids if you're using them.

Time yourself. Presentations that run over their time limit frustrate everyone. Know your time limit and practice staying within it. If you have ten minutes, aim for nine. Leaving time for questions shows respect for the audience.

Prepare for questions. Think about what questions might come up and how you'd answer them. You don't need scripted answers, but having thought through possible questions prevents being caught completely off guard.

Get feedback. Present to friends or family and ask for specific feedback. What was clear? What was confusing? Where did their attention wander? Use this feedback to improve.

Learn from every presentation. Afterward, reflect. What went well? What would you do differently? Each presentation is practice for the next one. Over time, you'll develop your own style and confidence.`,
    },
    {
      id: 'engelsk-vg1-2-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why is it better to use bullet-point notes rather than a full script?',
        options: [
          { id: 'a', text: 'Because scripts take too long to write', isCorrect: false },
          { id: 'b', text: 'Because notes keep you engaged with the audience instead of reading', isCorrect: true },
          { id: 'c', text: 'Because teachers prefer bullet points', isCorrect: false },
          { id: 'd', text: 'Because scripts always get lost', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Full scripts encourage reading, which breaks eye contact and creates a disconnect with the audience. Bullet points keep you looking at and connecting with your audience while ensuring you hit your key points.',
      },
    },
    {
      id: 'engelsk-vg1-2-4-n-summary',
      type: 'text',
      content: `## Summary: Becoming a Confident Presenter

**The Three Pillars:** Content (know your material deeply), Structure (clear organization with hook, body, conclusion), and Delivery (voice, body language, presence).

**Structure Tips:** Hook immediately, preview your points, develop 2-4 main points with support, use clear transitions, end with impact.

**Delivery Techniques:** Project your voice, vary pace and tone, use pauses deliberately, make eye contact, gesture naturally, move purposefully.

**Managing Nerves:** Reframe anxiety as preparation, prepare thoroughly, breathe deeply, focus on your message not yourself, remember audiences want you to succeed.

**Practical Habits:** Use notes not scripts, rehearse aloud, time yourself, prepare for questions, seek feedback, learn from every presentation.

**Key Truth:** Public speaking is a skill that improves with practice. Every presentation makes you better. The fearless speakers were once nervous beginners.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// FINAL EXPORT
// ============================================================================

export const ENGELSK_VG1_NARRATIV_DEL1_CHAPTERS = [
  CHAPTER_ENGELSK_VG1_1_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_1_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_1_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_1_4_NARRATIV,
  CHAPTER_ENGELSK_VG1_1_5_NARRATIV,
  CHAPTER_ENGELSK_VG1_2_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_2_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_2_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_2_4_NARRATIV,
];
