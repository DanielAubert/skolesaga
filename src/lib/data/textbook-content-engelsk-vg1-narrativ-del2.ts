/**
 * Engelsk VG1 - Narrative versjoner Del 2 (Kapittel 3.1-4.5)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 3.1 NARRATIVE: Advanced Grammar Review
// ============================================================================

export const CHAPTER_ENGELSK_VG1_3_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-3-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '3.1',
  title: 'Advanced Grammar Review',
  subtitle: 'Narrative Version',
  description: 'Master the building blocks of sophisticated English - understanding tenses and conditionals.',
  estimatedMinutes: 40,
  competenceGoals: ['bruke kunnskap om grammatikk og tekstoppbygging i arbeid med egne muntlige og skriftlige tekster'],
  linkedChapterId: 'engelsk-vg1-3-1',
  content: [
    {
      id: 'engelsk-vg1-3-1-n-intro',
      type: 'text',
      content: `## The Architecture of Language

Think of grammar as the architecture of language. Just as a building needs a solid foundation and a logical structure to stand tall, your sentences need grammatical frameworks to communicate clearly and effectively. At VG1 level, you have already learned the basics - you know how to form sentences, use common tenses, and express simple ideas. Now it is time to refine your understanding and tackle the structures that separate good English from great English. This is where your journey from competent to confident truly begins.

Why does this matter? Because grammar affects how professional you sound in every situation. It determines whether your ideas come across clearly or get lost in confusion. When you write an email to a future employer, submit an assignment at university, participate in an international meeting, or simply want to express a complex thought to a friend, advanced grammar gives you the tools to do it well. Consider the difference between someone who says "If I would have known, I would have come" and someone who correctly says "If I had known, I would have come." Both speakers communicate the same basic idea, but one sounds polished while the other reveals gaps in their language mastery.

Grammar is not just about following rules - it is about having choices. When you understand how different structures work, you can select the one that best expresses your meaning. You become a more precise communicator, able to convey subtle distinctions that simpler language cannot capture. The difference between "I lived in London" and "I have lived in London" might seem small, but each sentence creates a different picture in the listener's mind.

In this chapter, we will explore two crucial areas: the perfect tenses and conditional sentences. These are the structures that many learners find challenging, but once you understand how they work, they become powerful tools in your communication toolkit. We will examine not just the rules but the underlying logic - why English uses these structures, what meanings they convey, and how you can use them to express exactly what you mean. By the end, you will have a deeper appreciation for the elegant system that underlies English grammar.`,
    },
    {
      id: 'engelsk-vg1-3-1-n-section1',
      type: 'text',
      content: `## Present Perfect vs Past Simple: A Tale of Two Tenses

Here is a puzzle for you: What is the difference between "I visited Paris" and "I have visited Paris"? Both sentences describe the same action - going to Paris. Yet they communicate something subtly different, and understanding this difference is one of the keys to sounding natural in English. Native speakers make this distinction instinctively, but for learners, it requires conscious attention until it becomes automatic.

The past simple tense describes completed actions at a specific time in the past. When you say "I visited Paris last summer," you are placing that experience firmly in a finished moment. The time is specified, the action is done, and there is no particular connection to the present moment. You are simply reporting something that happened. The past simple is straightforward and concrete - it answers the question "What happened?" with a clear, time-stamped answer.

The present perfect, on the other hand, creates a bridge between the past and now. When you say "I have visited Paris three times," you are talking about your life experience up to this moment. The exact times do not matter - what matters is that this experience is part of who you are today. The present perfect answers different questions: "What experience do you have?" or "What has happened that is relevant now?" It keeps the past alive in the present.

Think of it this way: the past simple is like a photograph - it captures a moment that has passed and sits in an album. The present perfect is like a video that is still playing - the action started in the past but connects to now in some meaningful way. When a job interviewer asks "Have you worked with international clients?" they want to know about your accumulated experience, not when specifically it happened. But if they ask "When did you work at that company?" they want specific past information.

The present perfect has three main uses that help clarify this distinction. First, it describes life experiences without specifying when: "I have been to Japan" tells us about your experience without pinning it to a date. Second, it describes situations that started in the past and continue now: "She has lived in Bergen since 2018" means she moved there in 2018 and still lives there. Third, it describes recent events with current relevance: "I have lost my keys" explains why you cannot open the door right now.

Signal words help you choose the right tense. Words like "yesterday," "last week," "in 2019," "when I was young," and "ago" point firmly to past simple - they specify a finished time. Words like "already," "yet," "ever," "never," "recently," "just," and "so far" signal present perfect - they connect to the current moment. The words "since" and "for" typically go with present perfect when describing duration up to now: "I have known her since childhood" or "They have been married for twenty years."`,
    },
    {
      id: 'engelsk-vg1-3-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Which sentence correctly uses the present perfect?',
        options: [
          { id: 'a', text: 'I have seen that movie last night.', isCorrect: false },
          { id: 'b', text: 'She has lived in Bergen since 2018.', isCorrect: true },
          { id: 'c', text: 'They have arrived yesterday.', isCorrect: false },
          { id: 'd', text: 'We have went to the concert.', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Option B is correct because "since 2018" indicates a situation that started in the past and continues to the present - perfect for present perfect. Options A and C incorrectly mix present perfect with specific past time markers. Option D uses incorrect grammar (should be "have gone").',
      },
    },
    {
      id: 'engelsk-vg1-3-1-n-section2',
      type: 'text',
      content: `## The World of Conditionals

Imagine you could describe not just what is happening, but what might happen, what would happen, and what would have happened if things had been different. This is the power of conditional sentences, and English has an elegant system for expressing all these possibilities. Conditionals allow you to explore alternative realities, make predictions, give advice, and reflect on the road not taken. They are essential for sophisticated communication in any context.

Let us start with the zero conditional, the simplest form. This describes universal truths and scientific facts - things that are always true under certain conditions. If you heat water to 100 degrees Celsius, it boils. If you mix blue and yellow, you get green. If plants do not get sunlight, they die. The structure is simple: "if" plus present tense, then present tense. No uncertainty here - these things are simply true, every single time. The zero conditional is perfect for explaining how things work, stating rules, or describing cause-and-effect relationships that never vary.

The first conditional moves us into the realm of real possibilities - things that are likely to happen in the future. If it rains tomorrow, we will cancel the picnic. If you study hard, you will pass the exam. If she applies for the job, she will probably get it. You are talking about situations that could genuinely occur. The structure uses "if" plus present tense, then "will" plus infinitive. Notice that even though we are talking about the future, we use present tense in the "if" clause - this is one of the quirks of English conditionals. The first conditional is your go-to structure for predictions, plans, warnings, and promises.

Now things get interesting with the second conditional. This is for hypothetical situations - things that are unlikely, purely imaginary, or contrary to current reality. If I won the lottery, I would travel the world. If I were you, I would apologize immediately. If humans could fly, we would not need airplanes. Notice how we use past tense after "if," but we are not actually talking about the past. We are creating an imaginary present or future, using the past tense to signal unreality. And yes, "if I were" is correct even for "I" - this is the subjunctive mood, one of the last living traces of this grammatical form in English. The second conditional is perfect for dreams, hypothetical questions, and polite suggestions.

The third conditional takes us into alternative histories - the realm of what might have been but never was. If I had studied harder, I would have passed the exam. If she had left earlier, she would have caught the train. If they had invested in that company, they would be millionaires now. These situations are impossible because we cannot change the past. The structure is "if" plus past perfect, then "would have" plus past participle. You are imagining how things could have been different, often with a sense of regret or relief. The third conditional is essential for analyzing past decisions, expressing regrets, and understanding historical turning points.`,
    },
    {
      id: 'engelsk-vg1-3-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: '"If I had more money, I would buy a car." Which conditional is this?',
        options: [
          { id: 'a', text: 'Zero conditional - a general truth', isCorrect: false },
          { id: 'b', text: 'First conditional - a likely future event', isCorrect: false },
          { id: 'c', text: 'Second conditional - a hypothetical situation', isCorrect: true },
          { id: 'd', text: 'Third conditional - an unreal past', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'This is a second conditional. The speaker does not currently have enough money (hypothetical present situation). The structure "if + past tense, would + infinitive" confirms this. It is not third conditional because we are not talking about the past.',
      },
    },
    {
      id: 'engelsk-vg1-3-1-n-section3',
      type: 'text',
      content: `## Mixed Conditionals and Real-World Complexity

Life rarely fits into neat categories, and neither does language. Sometimes you need to mix conditional forms to express complex ideas that span different time frames. The four basic conditionals are useful patterns, but real communication often requires more flexibility. This is where mixed conditionals come in - they allow you to connect causes and effects across different times.

The most common mixed conditional connects a past condition to a present result. Consider this: "If I had learned English as a child, I would speak it fluently now." The condition is in the past (learning as a child - using past perfect), but the result is in the present (speaking fluently now - using would plus infinitive). This makes perfect sense because what happened in the past shapes what is true today. Other examples: "If she had taken that job offer, she would be living in New York now." "If we had not met at university, we would not be friends today." You are linking a past decision or event to its current consequences.

You can also flip this around, though it is less common: "If I were braver, I would have spoken up yesterday." Here the condition is a general personality trait (present hypothetical), but the result was in the past. You are saying that your current character affected a past action. Similarly: "If he were not so stubborn, he would have accepted the help when it was offered." These mixed conditionals require you to think carefully about time and causation.

The key to using conditionals well is not memorizing rules but understanding what you want to express. Ask yourself: What time frame is the condition in? What time frame is the result in? Are you talking about general truths, likely possibilities, hypothetical situations, impossible pasts, or some combination? Once you know that, the structure follows naturally. The grammar serves the meaning, not the other way around.

Practice by thinking about your own life. What would you do if you had a million dollars? What would have happened if you had made different choices in school? What will you do if you get the opportunity to study abroad? If you had been born in a different country, how would your life be different today? Each question naturally calls for a different conditional structure. By reflecting on your own experiences and possibilities, you internalize these patterns in a way that rote memorization never achieves.`,
    },
    {
      id: 'engelsk-vg1-3-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What does a mixed conditional typically express?',
        options: [
          { id: 'a', text: 'Two events happening at the same time', isCorrect: false },
          { id: 'b', text: 'A past condition with a present result, or vice versa', isCorrect: true },
          { id: 'c', text: 'Only imaginary situations that could never happen', isCorrect: false },
          { id: 'd', text: 'Scientific facts about nature', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Mixed conditionals connect different time frames - typically a past condition affecting a present result ("If I had studied medicine, I would be a doctor now") or occasionally a present condition with a past result.',
      },
    },
    {
      id: 'engelsk-vg1-3-1-n-section4',
      type: 'text',
      content: `## Common Errors and How to Avoid Them

Even advanced learners make predictable mistakes with tenses and conditionals. The good news is that these errors follow patterns, which means you can learn to recognize and avoid them. Let us examine the most common problems so you can catch them in your own writing and speech.

With present perfect, the biggest error is mixing it with specific past time markers. "I have visited Paris yesterday" sounds wrong to native ears because "yesterday" demands past simple. Similarly, "I have seen her last week" and "They have arrived in 2019" are incorrect. If you mention when something happened with a specific time reference, use past simple. If the time is unspecified or you are emphasizing the connection to now, use present perfect. A helpful test: can you answer "when?" with a specific time? If yes, use past simple. If the "when" does not matter or you mean "at some point in my life," use present perfect.

Another common mistake is using present perfect continuous where simple would be better, or vice versa. "I have been knowing her for years" is incorrect - "know" is a state verb that does not take continuous form. State verbs describe conditions rather than actions: know, believe, understand, love, hate, want, need, belong. "I have known her for years" is correct. However, action verbs often work better in continuous when emphasizing duration: "I have been waiting for two hours" emphasizes the ongoing nature of the waiting.

With conditionals, learners often mix up the tense sequences. "If I would have money, I would buy a car" is incorrect - the "if" clause should use past simple: "If I had money, I would buy a car." This error is extremely common, even among people who have studied English for years. The rule is simple: in second conditional, use past tense in the "if" clause, not "would."

Some learners also use "would" in both clauses: "If I would study, I would pass." This is non-standard in most varieties of English. The "if" clause typically does not take "would" in standard conditionals. The exception is in very polite requests: "If you would be so kind as to help me..." But for regular conditions, avoid "would" in the "if" clause.

The subjunctive "were" trips people up too. While "If I was rich" is increasingly heard in casual speech, "If I were rich" remains the standard form, especially in formal writing and professional contexts. This applies to all subjects: "If he were here," "If she were president," "If it were possible." When in doubt, use "were" for hypothetical conditions - it always sounds educated and correct, whereas "was" might be judged as an error by some listeners or readers.`,
    },
    {
      id: 'engelsk-vg1-3-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Which sentence contains a grammar error?',
        options: [
          { id: 'a', text: 'If she were here, she would help us.', isCorrect: false },
          { id: 'b', text: 'I have lived in Oslo for five years.', isCorrect: false },
          { id: 'c', text: 'If I would have time, I would come.', isCorrect: true },
          { id: 'd', text: 'They moved to Bergen last month.', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Option C is incorrect. The "if" clause should not use "would" - it should be "If I had time, I would come." This is a common error where learners use "would" in both parts of a conditional.',
      },
    },
    {
      id: 'engelsk-vg1-3-1-n-section5',
      type: 'text',
      content: `## Putting It All Together

Grammar is not about memorizing rules for a test and then forgetting them. It is about building a toolkit you can use for the rest of your life. Every time you write an email, have a conversation, read a book in English, or watch a film, you are using and encountering these structures. The goal is not perfect grammar but effective communication - and understanding these patterns makes you a more effective communicator.

The key to mastery is practice and awareness. When you read English - whether novels, news articles, or social media posts - notice how writers use tenses and conditionals. Why did this author choose present perfect here? What effect does this conditional create? When you write, think about what you want to express and choose the appropriate form. There is often more than one correct option, but different choices create different effects. When you speak, do not worry about perfection - focus on communication, and your accuracy will improve over time. Fluency and accuracy develop together through use.

Here is a practical exercise: Take a piece of writing you have done recently and examine your use of tenses and conditionals. Did you use them correctly? Could you express certain ideas more precisely with different forms? Would a different tense change the emphasis or meaning? This kind of self-editing is how good writers become great writers. It is also how language learners develop intuition - by paying attention to their own choices and considering alternatives.

Another valuable practice is to keep a grammar journal. When you encounter a sentence that confuses you or uses tenses in an interesting way, write it down. When you make a mistake and someone corrects you, record both versions. Over time, you will build a personal reference of patterns and examples that are meaningful to you. This is far more effective than memorizing textbook rules in isolation.

Remember that even native speakers make mistakes and disagree about certain usages. Language is alive and constantly evolving. What matters is that you understand the system well enough to make informed choices and communicate effectively. No one expects perfection - they expect clarity and confidence. With the foundations you have built in this chapter, you have the tools to express complex ideas about time, possibility, and reality with precision and sophistication.`,
    },
    {
      id: 'engelsk-vg1-3-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the best approach to mastering advanced grammar?',
        options: [
          { id: 'a', text: 'Memorize all the rules and never make mistakes', isCorrect: false },
          { id: 'b', text: 'Only focus on grammar when preparing for tests', isCorrect: false },
          { id: 'c', text: 'Practice regularly and notice how grammar is used in real English', isCorrect: true },
          { id: 'd', text: 'Avoid complex structures to prevent making errors', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Mastery comes from regular practice and awareness. By noticing how grammar works in real texts and conversations, and by using these structures in your own communication, you develop intuition alongside knowledge.',
      },
    },
    {
      id: 'engelsk-vg1-3-1-n-summary',
      type: 'text',
      content: `## Summary: Your Grammar Toolkit

You have now explored two essential areas of advanced English grammar that will serve you throughout your academic and professional life. These structures allow you to express complex ideas about time, possibility, and hypothetical situations with precision and clarity. Here are the key takeaways from this chapter:

**Present Perfect vs Past Simple:**
Use present perfect for experiences without specific times ("I have visited Paris"), situations continuing to now ("She has lived here since 2018"), and recent events with present relevance ("I have lost my keys"). Use past simple for completed actions at specific times in the past ("I visited Paris last summer"). Remember: specific time markers like "yesterday," "last week," and "ago" require past simple. Words like "already," "yet," "ever," "never," and "since" signal present perfect.

**Conditional Sentences:**
Zero conditional describes universal truths and facts (If you heat water, it boils). First conditional expresses likely future possibilities (If it rains, we will cancel). Second conditional creates hypothetical present or future situations (If I won the lottery, I would travel). Third conditional imagines alternative pasts (If I had studied, I would have passed). Mixed conditionals connect different time frames, typically linking past causes to present effects.

**Common Errors to Avoid:**
Do not mix present perfect with specific time markers - "I have seen her yesterday" is always wrong. Do not use "would" in the "if" clause of standard conditionals - say "If I had money" not "If I would have money." Use "were" for subjunctive in formal writing - "If I were you" is standard. Watch out for state verbs that do not take continuous form - "I have known" not "I have been knowing."

**Moving Forward:**
Practice these structures by noticing them in your reading and using them consciously in your writing. Keep a grammar journal to track patterns and corrections. Remember that mastery comes from use, not just study.

**Key Terms:**
Present perfect, past simple, conditional sentences, zero/first/second/third conditional, mixed conditional, subjunctive mood, signal words, state verbs, time markers.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3.2 NARRATIVE: Sentence Structure and Variety
// ============================================================================

export const CHAPTER_ENGELSK_VG1_3_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-3-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '3.2',
  title: 'Sentence Structure and Variety',
  subtitle: 'Narrative Version',
  description: 'Transform boring writing into engaging prose by mastering sentence variety.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke kunnskap om grammatikk og tekstoppbygging i arbeid med egne muntlige og skriftlige tekster'],
  linkedChapterId: 'engelsk-vg1-3-2',
  content: [
    {
      id: 'engelsk-vg1-3-2-n-intro',
      type: 'text',
      content: `## The Rhythm of Good Writing

Have you ever read something so boring that your eyes glazed over, even though the topic was interesting? The problem often is not the content but the sentences. When every sentence follows the same pattern - subject, verb, object, subject, verb, object - the writing becomes monotonous. It is like listening to music with only one note, or eating the same meal every day. Our brains crave variety, and readers will disengage from writing that does not provide it, no matter how important the information might be.

Great writers understand that sentence variety creates rhythm, and rhythm creates engagement. Short sentences punch. They create emphasis. They demand attention. Longer sentences, on the other hand, flow and carry the reader along, building momentum and complexity before arriving at their destination. Questions engage the reader directly - do you see how this sentence made you pause and think? And sometimes, breaking the rules deliberately creates emphasis that no grammatically perfect sentence could achieve.

Think about your favorite writers, whether they write novels, journalism, or even song lyrics. Notice how they mix sentence lengths. Notice how they begin sentences in different ways. Notice how some sentences race forward while others pause and reflect. This is not accident - it is craft. And it is craft that you can learn.

In this chapter, we will explore how to transform flat, repetitive writing into prose that sings. You will learn about different clause types - the building blocks of sentences. You will discover techniques for combining ideas in varied ways. You will practice varying your sentence openings to create movement. This is not just about following rules - it is about developing an ear for language, a sense of rhythm that will make everything you write more engaging and effective.`,
    },
    {
      id: 'engelsk-vg1-3-2-n-section1',
      type: 'text',
      content: `## Understanding Clauses: The Building Blocks

Before we can combine sentences effectively, we need to understand what we are working with. Just as a chef needs to know their ingredients before creating a meal, a writer needs to understand clauses before constructing sentences. Every sentence is built from clauses, and there are two main types you need to know. Master these building blocks, and you will have the foundation for infinite variety in your writing.

An independent clause can stand alone as a complete sentence. It has a subject and a verb, and it expresses a complete thought. "The sun was shining" is an independent clause. "She laughed" is an independent clause. "The ancient oak tree in my grandmother's garden has survived three centuries of storms" is also an independent clause - longer and more detailed, but still one complete thought with one subject-verb core. These are the strong, self-sufficient units of language, the sentences that can stand on their own two feet.

A dependent clause, also called a subordinate clause, cannot stand alone. It needs an independent clause to complete its meaning. "Although the sun was shining" leaves us hanging - although the sun was shining, what? "When she laughed" creates anticipation - when she laughed, what happened? "Because I was tired" demands a consequence. These clauses depend on others to make sense. They are like supporting actors - essential to the story, but not able to carry a scene alone.

Dependent clauses come in three flavors, each with its own function. Adverbial clauses tell us about time, place, reason, condition, or manner - they start with subordinating conjunctions like "although," "because," "when," "while," "if," "unless," "before," "after," "as," and "since." Relative clauses describe nouns and add information about them - they use relative pronouns like "who," "whom," "which," "that," "whose," and "where." Noun clauses act as nouns in a sentence, serving as subjects, objects, or complements - they often begin with "that," "what," "whatever," "whether," "how," or "why."

Understanding these building blocks gives you the raw materials for constructing varied sentences. Think of independent clauses as the main dishes and dependent clauses as the accompaniments that enhance and complete the meal.`,
    },
    {
      id: 'engelsk-vg1-3-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Which of these is a dependent clause?',
        options: [
          { id: 'a', text: 'The movie was excellent.', isCorrect: false },
          { id: 'b', text: 'Although the movie was long.', isCorrect: true },
          { id: 'c', text: 'We enjoyed the movie.', isCorrect: false },
          { id: 'd', text: 'The movie ended happily.', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Option B is a dependent clause because "although" makes it incomplete - it cannot stand alone as a sentence. We need to know what happened despite the movie being long. The other options are all complete, independent clauses.',
      },
    },
    {
      id: 'engelsk-vg1-3-2-n-section2',
      type: 'text',
      content: `## Four Sentence Types

With clauses as our building blocks, we can construct four types of sentences, each with its own character, rhythm, and use. Think of these as tools in a toolkit - a good writer knows when to reach for each one. Using only one type would be like a carpenter using only a hammer, no matter what the task requires.

Simple sentences contain just one independent clause. "She smiled." "The rain fell heavily." "My grandmother bakes the best cookies in the world." Do not be fooled by the name - simple sentences can be long and detailed, as long as they have only one independent clause. "The ancient cathedral on the hill overlooking our small Norwegian village has stood for nearly eight hundred years" is still a simple sentence. Use simple sentences for emphasis, clarity, and moments when you want the reader to pause and absorb a single important idea. They cut through complexity. They make points stick.

Compound sentences join two or more independent clauses with a coordinating conjunction. Remember FANBOYS: For, And, Nor, But, Or, Yet, So. "The rain fell, but we went outside anyway." "She studied hard, so she passed the exam." "I wanted to help, yet I did not know how." These sentences show equal relationship between ideas - neither clause is subordinate to the other. Both ideas stand on equal footing, connected but independent. Use compound sentences when you want to show balance, contrast, or consequence between ideas of similar importance.

Complex sentences combine an independent clause with one or more dependent clauses. "Although the rain fell heavily, we went outside." "The woman who lives next door is a doctor." "I knew that something was wrong." "When the bell rang, everyone rushed to the door." These sentences show unequal relationships, where one idea depends on, explains, or modifies another. The dependent clause adds context, condition, time, or description to the main idea. Complex sentences allow you to show how ideas relate hierarchically and to pack more information into a single grammatical unit.

Compound-complex sentences combine both - multiple independent clauses plus one or more dependent clauses. "Although it was raining, we decided to go out, but we took our umbrellas." "When I arrived at the station, the train had already left, and I had to wait an hour for the next one." These sentences handle complex relationships between multiple ideas and are useful when you need to express layered thoughts. Use them sparingly - too many compound-complex sentences make writing feel dense and difficult to follow.

The magic happens when you mix these types intentionally. A paragraph of only simple sentences feels choppy and childish. A paragraph of only complex sentences feels dense and academic. But a paragraph that varies between them creates flow, rhythm, and engagement. The simple sentence after a complex one provides relief. The complex sentence after simple ones adds depth. This is the rhythm of good writing.`,
    },
    {
      id: 'engelsk-vg1-3-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: '"The book that I read was fascinating, and I recommended it to everyone." What sentence type is this?',
        options: [
          { id: 'a', text: 'Simple sentence', isCorrect: false },
          { id: 'b', text: 'Compound sentence', isCorrect: false },
          { id: 'c', text: 'Complex sentence', isCorrect: false },
          { id: 'd', text: 'Compound-complex sentence', isCorrect: true },
        ],
        correctAnswer: 'd',
        solution: 'This is compound-complex. It has two independent clauses joined by "and" (compound), plus a dependent relative clause "that I read" (complex). It combines features of both compound and complex sentences.',
      },
    },
    {
      id: 'engelsk-vg1-3-2-n-section3',
      type: 'text',
      content: `## Techniques for Combining Sentences

Now let us look at specific techniques for transforming choppy writing into flowing prose. Each technique serves a different purpose and creates a different effect. Learning when to use each one is as important as knowing how to use it. The more tools you have, the more precisely you can craft your meaning.

Coordinating conjunctions (FANBOYS) join equal ideas. "I was tired, so I went to bed early." "The food was delicious, but the service was slow." "She wanted to study medicine, and her parents supported her decision." The comma before the conjunction is standard when joining two independent clauses - this small punctuation mark signals to readers that a new independent thought is coming. Each FANBOYS word creates a slightly different relationship: "and" adds, "but" and "yet" contrast, "or" and "nor" offer alternatives, "so" shows result, and "for" gives reason.

Subordinating conjunctions create unequal relationships, showing which idea is more important or how ideas relate causally. "Although I was tired, I finished my homework." "Because the food was delicious, we ordered more." "When the clock struck midnight, everything changed." The subordinate clause can come first or last, and this positioning changes the emphasis. When the dependent clause comes first, it sets up the main idea. When it comes last, the main idea takes center stage and the dependent clause adds clarification.

Semicolons join closely related independent clauses without a conjunction. "The sunset was beautiful; I took a photograph." "She had studied for months; the exam held no surprises." This technique suggests a close connection between the ideas - closer than a period would suggest, but not requiring a conjunction to explain the relationship. The semicolon says "these ideas are intimately connected" without spelling out exactly how. Use this technique sparingly - overuse diminishes its effect.

Relative clauses embed one sentence inside another, creating information density without choppiness. Instead of "The teacher is retiring. The teacher taught me English," you write "The teacher who taught me English is retiring." The second idea becomes a description attached to the first. This technique is essential for academic and professional writing, where you often need to provide identifying information efficiently.

Participle phrases compress information elegantly. "Exhausted from the journey, she fell asleep immediately." "Standing at the window, he watched the storm approach." This is more elegant than "She was exhausted from the journey, so she fell asleep immediately." The participle phrase adds variety to your sentence openings and shows actions happening simultaneously or in close sequence. Be careful that the participle phrase clearly modifies the right noun - "Walking down the street, the trees looked beautiful" is a dangling modifier error because trees cannot walk.

Appositives rename or describe a noun compactly. "My neighbor, a retired doctor, helped me." "Oslo, the capital of Norway, has a population of about one million." This technique packs extra information into a sentence without making it feel cluttered. Appositives are set off by commas and can be removed without breaking the sentence grammatically.`,
    },
    {
      id: 'engelsk-vg1-3-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Which technique is used in: "Running through the rain, she finally reached the bus stop"?',
        options: [
          { id: 'a', text: 'Coordinating conjunction', isCorrect: false },
          { id: 'b', text: 'Semicolon joining', isCorrect: false },
          { id: 'c', text: 'Participle phrase', isCorrect: true },
          { id: 'd', text: 'Relative clause', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"Running through the rain" is a participle phrase - it uses the present participle "running" to describe the subject "she." This technique allows varied sentence openings and compresses information efficiently.',
      },
    },
    {
      id: 'engelsk-vg1-3-2-n-section4',
      type: 'text',
      content: `## Varying Sentence Openings

One of the quickest ways to improve your writing is to vary how you start sentences. Many writers unconsciously begin most sentences with the subject, creating monotony even when their ideas are interesting. This pattern - subject, verb, object, period, subject, verb, object, period - becomes invisible to the writer but obvious to the reader. Breaking this pattern immediately makes your writing more dynamic.

Consider this paragraph: "I woke up early. I made coffee. I checked my phone. I saw the news. I felt anxious." Five sentences, five times starting with "I," five times the same rhythm. The content might be dramatic, but the delivery is flat.

Now compare: "Early that morning, I woke to the sound of rain. Coffee in hand, I reached for my phone. The news that greeted me sent a chill down my spine." Same basic information, but the varied openings create movement, interest, and even suspense. You feel the morning building toward something.

Here are specific ways to vary your openings, each with its own effect:

Start with an adverb or adverb phrase to establish manner or time: "Suddenly, the lights went out." "Without warning, everything changed." "Carefully, she removed the ancient book from its case." "Finally, after years of work, the project was complete." Adverb openings often create emphasis or set up an important moment.

Start with a prepositional phrase to establish location, time, or circumstance: "In the distance, a wolf howled." "After the storm, we surveyed the damage." "Behind the old barn, they discovered a hidden cellar." "Throughout history, humans have asked the same questions." Prepositional openings ground readers in a specific context.

Start with a participle phrase to show action or state: "Hoping for the best, she opened the envelope." "Damaged by the flood, the old bridge had to be replaced." "Running late as usual, Marcus grabbed his keys and rushed out." "Exhausted but triumphant, the team celebrated their victory." Participle openings add energy and often show simultaneous actions.

Start with a dependent clause to establish condition or contrast: "Although he tried his best, he could not solve the puzzle." "When the music stopped, everyone looked up." "Because she had prepared thoroughly, the presentation went smoothly." "If this trend continues, we will need to change our approach." Dependent clause openings establish the context for what follows.

Start with an infinitive phrase to establish purpose: "To understand the problem, we must first examine its history." "To succeed in this field, you need both talent and persistence." Infinitive openings work well for explanatory or instructional writing.

The key is conscious variation. Read your work aloud. If it sounds monotonous, look for opportunities to restructure some sentences. You do not need to vary every single opening - subject-first sentences are perfectly fine - but mixing in other patterns creates rhythm and keeps readers engaged.`,
    },
    {
      id: 'engelsk-vg1-3-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Which sentence opening creates the most variety after several subject-first sentences?',
        options: [
          { id: 'a', text: 'She walked to the store.', isCorrect: false },
          { id: 'b', text: 'The weather was nice.', isCorrect: false },
          { id: 'c', text: 'Despite the rain, we decided to go.', isCorrect: true },
          { id: 'd', text: 'They arrived late.', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Starting with "Despite the rain" - a prepositional phrase - creates variety after subject-first sentences. The other options all begin with the subject (She, The weather, They), continuing the same pattern.',
      },
    },
    {
      id: 'engelsk-vg1-3-2-n-section5',
      type: 'text',
      content: `## Putting It Into Practice

Let us apply these principles to a real transformation. Seeing before-and-after examples helps you understand how dramatic the improvement can be when you apply sentence variety techniques. Here is a paragraph written with no sentence variety:

"The project was difficult. The deadline was tight. The team worked hard. They stayed late every night. They solved problem after problem. They finally finished on time. They felt proud of their achievement."

Seven sentences, all simple, all roughly the same length, all beginning with the subject. The information is there, but the delivery is lifeless. It reads like a list, not a story.

Now watch how combining techniques and varying structures transforms it:

"Although the project was difficult and the deadline tight, the team rose to the challenge. Night after night, they stayed late, solving problem after problem with determination. When they finally finished on time, a wave of pride washed over them - they had achieved the impossible."

The rewritten version uses the same basic information but creates a completely different reading experience. Notice what changed:

First, it combines related ideas into complex and compound sentences. "The project was difficult" and "the deadline was tight" become one subordinate clause, emphasizing that these challenges are the background for the real story - the team's response. Second, it varies sentence length - long, medium, long with a dramatic dash - creating rhythm that builds toward a climax. Third, it uses different openings: a subordinate clause ("Although..."), a prepositional phrase ("Night after night"), and a time clause ("When they finally..."). Fourth, it adds energy through a participle phrase ("solving problem after problem") that shows ongoing action. Fifth, the dash before "they had achieved the impossible" creates a dramatic pause and emphasis on the final revelation.

This is the power of sentence variety. Same information, completely different reading experience. One version puts readers to sleep; the other engages them in a story.

As you write, do not worry about variety in your first draft. Get your ideas down first - capturing your thoughts is more important than perfecting them. But when you revise, read aloud and listen for monotony. Where does it feel choppy? Where does it feel dense? Where do you lose interest? Then apply these techniques to create flow. This two-step process - content first, craft second - is how professional writers work.`,
    },
    {
      id: 'engelsk-vg1-3-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'When is the best time to focus on sentence variety in your writing?',
        options: [
          { id: 'a', text: 'Before you start writing, planning every sentence', isCorrect: false },
          { id: 'b', text: 'While writing your first draft', isCorrect: false },
          { id: 'c', text: 'During revision, after getting your ideas down', isCorrect: true },
          { id: 'd', text: 'Never - let your natural style emerge', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Focus on sentence variety during revision. In the first draft, concentrate on getting your ideas down. Then read aloud, identify monotonous sections, and apply combining and varying techniques. This two-step process is more effective than trying to write perfectly from the start.',
      },
    },
    {
      id: 'engelsk-vg1-3-2-n-summary',
      type: 'text',
      content: `## Summary: Creating Flow in Your Writing

You have now learned how to transform flat writing into engaging prose. These techniques are not about following arbitrary rules - they are about giving your readers a better experience and communicating your ideas more effectively. Here are the key points to remember and practice:

**Clause Types:**
Independent clauses stand alone as complete thoughts; dependent clauses need an independent clause to complete their meaning. Dependent clauses come in three types: adverbial clauses (showing time, cause, condition, etc.), relative clauses (describing nouns), and noun clauses (acting as subjects or objects). Understanding these building blocks is essential for constructing varied sentences.

**Sentence Types:**
Simple sentences contain one independent clause - use them for emphasis and clarity. Compound sentences join independent clauses with FANBOYS - use them to show equal relationships. Complex sentences combine independent and dependent clauses - use them to show hierarchical relationships. Compound-complex sentences combine both - use them sparingly for layered ideas. Mix these types intentionally to create rhythm.

**Combining Techniques:**
FANBOYS conjunctions (For, And, Nor, But, Or, Yet, So) join equal ideas. Subordinating conjunctions (although, because, when, while, if) create unequal relationships. Semicolons suggest close connection without explaining how. Relative clauses embed descriptions within sentences. Participle phrases compress information elegantly. Appositives pack in extra detail compactly.

**Varying Openings:**
Break the habit of always starting with the subject. Use adverbs and adverb phrases for emphasis. Use prepositional phrases to establish context. Use participle phrases for action and energy. Use dependent clauses to set up main ideas. Use infinitive phrases to establish purpose. Conscious variation creates engagement.

**Writing Process:**
Focus on content in your first draft - get ideas down without worrying about style. Apply sentence variety techniques during revision. Read aloud to identify monotonous sections. Transform choppy passages by combining sentences and varying structures.

**Key Terms:**
Independent clause, dependent clause, simple sentence, compound sentence, complex sentence, compound-complex sentence, coordinating conjunction (FANBOYS), subordinating conjunction, participle phrase, appositive, relative clause.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3.3 NARRATIVE: Text Coherence and Cohesion
// ============================================================================

export const CHAPTER_ENGELSK_VG1_3_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-3-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '3.3',
  title: 'Text Coherence and Cohesion',
  subtitle: 'Narrative Version',
  description: 'Learn to weave your ideas together into texts that flow seamlessly.',
  estimatedMinutes: 35,
  competenceGoals: ['bruke kunnskap om grammatikk og tekstoppbygging i arbeid med egne muntlige og skriftlige tekster'],
  linkedChapterId: 'engelsk-vg1-3-3',
  content: [
    {
      id: 'engelsk-vg1-3-3-n-intro',
      type: 'text',
      content: `## The Invisible Thread

You have probably read texts that feel effortless - where ideas flow naturally from one to the next, and you never feel lost or confused. The writer seems to anticipate your questions and answer them just when you need it. One paragraph leads inevitably to the next. You finish reading with a clear sense of what you have learned. You have probably also read texts that feel like a bumpy ride - where you keep having to re-read sentences, wonder how one paragraph connects to the next, and struggle to see how the pieces fit together. The information might be there, but it feels scattered and confusing.

The difference is not just about the ideas themselves. Brilliant ideas can be presented badly, and modest ideas can shine through excellent presentation. The difference lies in coherence and cohesion - the invisible threads that hold a text together. These concepts are fundamental to effective writing, yet many writers never consciously learn them. Understanding them gives you power over your own texts.

Think of coherence as the big picture. A coherent text makes sense as a whole. The ideas are organized logically, each paragraph has a clear purpose, and everything connects to the central point. A reader can follow your thinking from beginning to end without getting lost. If coherence is the architectural plan of a building - the blueprint that shows how everything fits together - then cohesion is the mortar between the bricks, the connections that hold the structure together at the detail level.

Cohesion refers to the specific linguistic devices that link sentences and paragraphs. It is the "therefore" that signals a conclusion is coming, the "however" that prepares readers for a contrast, the "she" that refers back to a person mentioned earlier, the repeated vocabulary that keeps readers focused on the main topic. These small words and phrases are the nuts and bolts of readable prose. They guide readers through your text like signposts on a highway, telling them where they are and where they are going.

In this chapter, we will explore both concepts and give you practical tools for creating texts that flow. You will learn specific devices you can use and develop the awareness to improve your own writing. By the end, you will be able to diagnose why a passage feels choppy and know how to fix it.`,
    },
    {
      id: 'engelsk-vg1-3-3-n-section1',
      type: 'text',
      content: `## The Art of Reference

One of the most basic cohesive devices is reference - using pronouns and demonstratives to point back to something already mentioned. This seems simple, and we do it constantly in everyday speech without thinking. But doing it well in writing requires care, because readers cannot ask for clarification when a reference is unclear.

Consider this: "The scientist presented her findings. She had spent years on the research." The pronoun "she" clearly refers back to "the scientist," creating a smooth connection between sentences. The flow is natural and effortless. But now consider: "The scientist and the journalist discussed the findings. She had spent years on the research." Here, "she" is ambiguous - it could refer to either the scientist or the journalist. The reader must guess, which breaks the flow and might lead to misunderstanding.

Pronouns (he, she, it, they) are powerful tools when the reference is clear. They prevent tedious repetition and keep prose flowing. But when there are multiple possible referents, you have choices: repeat the noun ("The scientist had spent years on the research"), restructure the sentence ("Having spent years on the research, the scientist then presented her findings"), or add clarifying information ("The scientist, who had spent years on the research, presented her findings to the journalist").

Demonstratives (this, that, these, those) point to things nearby or further away in the text. "This" usually refers to something just mentioned: "The company announced layoffs. This news shocked employees." "That" often refers to something mentioned earlier or creates emotional distance: "The war ended in 1945. That terrible conflict had claimed millions of lives."

The demonstrative "this" followed by a summary noun is particularly useful and something you should actively practice: "Students are spending more time on screens. This trend concerns educators." By using "this trend," you summarize what came before, give it a label, and move the discussion forward. Other useful summary nouns include: this problem, this approach, this development, this phenomenon, this argument, this situation. Each one packages the previous information and carries it into the next sentence.

Be careful with vague "this" - writing "This is problematic" without specifying what "this" refers to leaves readers guessing. Add a noun: "This situation is problematic" or "This lack of funding is problematic." The extra word adds clarity and professionalism to your writing.`,
    },
    {
      id: 'engelsk-vg1-3-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What makes pronoun reference clear in a text?',
        options: [
          { id: 'a', text: 'Using as many pronouns as possible', isCorrect: false },
          { id: 'b', text: 'Having only one possible referent for each pronoun', isCorrect: true },
          { id: 'c', text: 'Avoiding pronouns entirely', isCorrect: false },
          { id: 'd', text: 'Always using "this" before pronouns', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Clear pronoun reference means each pronoun has only one logical referent. When multiple people or things are mentioned, readers should not have to guess which one "she" or "it" refers to.',
      },
    },
    {
      id: 'engelsk-vg1-3-3-n-section2',
      type: 'text',
      content: `## Linking Words: Your Navigation System

Linking words and phrases - also called discourse markers or transitions - are the signposts that guide readers through your text. They signal how ideas relate to each other, preparing readers for what comes next. Without them, readers must work hard to figure out connections. With them, the relationships become clear and the text flows naturally.

For addition, you have: also, furthermore, moreover, in addition, besides, similarly, likewise. These tell readers "here is more of the same kind of information - I am building on what I just said." "The study found significant health benefits. Furthermore, participants reported improved mood and energy levels." Each addition word has a slightly different feel: "also" is neutral and common, "furthermore" is formal and emphatic, "moreover" suggests something even more important, "in addition" is clear and professional.

For contrast, you have: however, nevertheless, nonetheless, on the other hand, although, yet, but, conversely, in contrast. These signal "now for a different perspective - prepare for a change in direction." "The plan seemed perfect on paper. However, several unexpected obstacles emerged during implementation." Contrast words are essential for balanced arguments: they show you can see multiple sides of an issue. "However" and "nevertheless" are more formal than "but," which can feel abrupt in academic writing.

For cause and effect, you have: therefore, consequently, as a result, because, since, thus, hence, accordingly. These show logical relationships - this happened because of that, or this led to that. "The economy declined sharply. Consequently, unemployment rose to historic levels." These words make your reasoning visible: readers can follow your logic step by step.

For examples, you have: for example, for instance, such as, including, namely, specifically, to illustrate. These introduce specific cases that support your general point. "Many factors contribute to success, such as hard work, timing, and strong relationships." Examples make abstract claims concrete and memorable.

For sequence, you have: first, second, third, then, next, finally, subsequently, meanwhile, previously, afterward. These organize information in time or logical order. "First, gather your materials. Next, prepare the workspace. Then, begin the experiment." Sequence words are essential for instructional writing and narrative.

For summary, you have: in conclusion, to summarize, overall, in short, to sum up, ultimately, in brief. These signal you are wrapping up - prepare for the main takeaway. "In conclusion, the evidence strongly supports the original hypothesis."

Choose linking words carefully - they carry meaning and tone. "However" is more formal than "but." "Furthermore" is more emphatic than "also." "Hence" sounds academic while "so" sounds casual. Match your linking words to the style and audience of your text. Also vary them - using "however" five times in one paragraph feels repetitive.`,
    },
    {
      id: 'engelsk-vg1-3-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: '"The experiment succeeded. _______, we can proceed to the next phase." Which word best fills the gap?',
        options: [
          { id: 'a', text: 'However', isCorrect: false },
          { id: 'b', text: 'Therefore', isCorrect: true },
          { id: 'c', text: 'Nevertheless', isCorrect: false },
          { id: 'd', text: 'Although', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Therefore" indicates cause and effect - the success logically leads to proceeding. "However" and "nevertheless" signal contrast, which does not fit here. "Although" introduces a dependent clause, not a new sentence.',
      },
    },
    {
      id: 'engelsk-vg1-3-3-n-section3',
      type: 'text',
      content: `## Lexical Cohesion: Words That Connect

Beyond pronouns and linking words, cohesion also comes from the words themselves. Lexical cohesion refers to connections created through vocabulary choices - the way words relate to each other semantically to create a sense of unity. This might be the most subtle form of cohesion, but it is also one of the most powerful.

Repetition is the simplest form. Repeating a key term keeps readers focused on the main topic. If you are writing about climate change, using "climate change" multiple times reinforces that focus. But too much repetition becomes tiresome and makes writing feel amateurish, so skilled writers use synonyms and related words to create variety while maintaining focus.

Consider: "Climate change threatens ecosystems worldwide. Global warming has accelerated in recent decades. This environmental crisis requires urgent action." Three sentences, three ways of referring to the same general concept: climate change, global warming, environmental crisis. Each term is slightly different, but readers understand they refer to the same phenomenon. This creates variety without losing focus. It also allows the writer to emphasize different aspects: "climate change" is the scientific term, "global warming" emphasizes temperature, "environmental crisis" emphasizes urgency.

Collocation - words that naturally go together in the language - also creates cohesion. If you mention "crime," words like "punishment," "law," "justice," "court," "police," "conviction," and "sentence" feel naturally connected. They belong to the same semantic field - the same area of meaning. If you write about "education," words like "learning," "students," "teachers," "knowledge," "curriculum," "classroom," and "assessment" create a web of related meaning. Readers feel this unity even without consciously noticing it.

This web of related words creates a sense of unity and focus. Your text feels like it is about one thing, even when you use many different words. Texts that lack lexical cohesion feel scattered - they jump between unrelated vocabulary in ways that confuse readers.

Superordinates (general terms) and hyponyms (specific terms) help vary your language too. After mentioning specific items like "roses, tulips, and daffodils," you can refer back to them collectively as "these flowers" - using the superordinate. After discussing "cars, buses, and trains," you can write "these vehicles" or "public and private transport." This technique lets you move between specific examples and general categories smoothly, which is essential for clear argumentation.`,
    },
    {
      id: 'engelsk-vg1-3-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is lexical cohesion?',
        options: [
          { id: 'a', text: 'Using only simple vocabulary', isCorrect: false },
          { id: 'b', text: 'Connecting ideas through vocabulary choices like synonyms and related words', isCorrect: true },
          { id: 'c', text: 'Avoiding repetition at all costs', isCorrect: false },
          { id: 'd', text: 'Using technical terminology', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Lexical cohesion creates connections through word choices - using synonyms, related words, superordinates, and hyponyms to maintain focus while varying vocabulary. It is about meaning relationships between words.',
      },
    },
    {
      id: 'engelsk-vg1-3-3-n-section4',
      type: 'text',
      content: `## Building Coherent Paragraphs

Cohesive devices work at the sentence level, connecting one sentence to the next. But coherence operates at higher levels - the paragraph and the whole text. A coherent paragraph has a clear focus and logical organization. Everything in it serves a purpose and contributes to a single main point. Understanding paragraph structure is essential for clear academic and professional writing.

Most paragraphs in academic and professional writing follow a common and effective pattern. They begin with a topic sentence that states the main idea - the one point this paragraph will develop. The body sentences then develop this idea with evidence, examples, explanation, or analysis. Each body sentence should clearly connect to the topic sentence. A concluding sentence may summarize the point, draw a conclusion, or transition smoothly to the next paragraph. This pattern is called the "hamburger" or "sandwich" structure: topic sentence (top bun), supporting details (filling), conclusion (bottom bun).

Consider this paragraph: "Social media has transformed how people communicate. Platforms like Facebook and Instagram allow instant connection across distances. Users can share updates, photos, and videos with hundreds of friends simultaneously. This constant connectivity has fundamentally changed social relationships." The topic sentence establishes the focus: social media and communication transformation. Each body sentence develops this idea with specific examples of how social media enables communication. The final sentence draws a conclusion about the significance. The paragraph is coherent because every sentence relates to and supports the main point.

Incoherent paragraphs often suffer from predictable problems: no clear topic sentence (so readers do not know what the paragraph is about), ideas that do not relate to each other (the paragraph tries to do too much), random jumping between topics (no logical order), or missing logical connections (readers cannot see how ideas relate). When you revise, always ask yourself: What is this paragraph about? Can I state its main idea in one sentence? Does every sentence contribute to that point? If a sentence does not fit, either delete it or move it to a paragraph where it belongs.

Between paragraphs, transitions maintain flow and help readers see the structure of your argument. The end of one paragraph can set up the next: "But these benefits come with significant costs." The beginning of a new paragraph can refer back: "Having examined the benefits, we must now consider the drawbacks." These bridges help readers navigate longer texts without getting lost. Think of them as the hallways connecting rooms in a building - they show how spaces relate.`,
    },
    {
      id: 'engelsk-vg1-3-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the primary function of a topic sentence?',
        options: [
          { id: 'a', text: 'To summarize the entire essay', isCorrect: false },
          { id: 'b', text: 'To state the main idea of the paragraph', isCorrect: true },
          { id: 'c', text: 'To provide evidence and examples', isCorrect: false },
          { id: 'd', text: 'To transition to the next paragraph', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The topic sentence states the main idea that the paragraph will develop. It typically comes first and tells readers what to expect. Body sentences then support this main idea with details, evidence, and examples.',
      },
    },
    {
      id: 'engelsk-vg1-3-3-n-section5',
      type: 'text',
      content: `## Practicing Cohesion and Coherence

The best way to improve is through practice and awareness. Knowing about these concepts is only the beginning - you need to actively look for them in your reading and consciously apply them in your writing until they become second nature. Here are strategies you can use to develop these skills.

When you read anything - articles, essays, textbooks, even emails - notice cohesive devices. How does the writer connect sentences? What linking words appear, and why those particular ones? How are pronouns used to avoid repetition while maintaining clarity? How does vocabulary create unity across paragraphs? Analyzing good writing helps you internalize these patterns. You might even keep a notebook of effective transitions and reference techniques you encounter.

When you write, focus on ideas first. Get your content down without worrying too much about polish. Trying to write perfectly connected prose from the start can paralyze you. Then, in revision, systematically check for coherence and cohesion. This two-stage approach - content first, connections second - is how experienced writers work.

For coherence, ask these questions: Does my text make sense as a whole? Could someone who knows nothing about this topic follow my thinking? Does each paragraph have a clear purpose that I can state in one sentence? Is the overall organization logical - does it make sense that this paragraph comes after that one? Can a reader follow my argument from introduction to conclusion without getting confused?

For cohesion, check these specific elements: Are pronoun references clear - does every "she," "it," and "this" have an obvious referent? Have I used appropriate linking words to show how ideas relate? Is there variety in how I refer to key concepts, or am I repeating the same word too often? Do sentences connect smoothly to each other, or are there gaps readers must leap across?

Read your work aloud - this is one of the most powerful revision techniques. Your ear often catches problems your eye misses. Where do you stumble? Where does the flow break down? Where do you lose track of what you were saying? Those are exactly the spots that need revision.

Finally, get feedback from others. Other readers can tell you where they got lost, where they had to reread, where they were confused. Their perspective reveals weaknesses you might not notice yourself because you know what you meant to say. Ask specific questions: "Could you follow my argument?" "Was anything confusing?" "Did the transitions make sense?"

Remember: coherence and cohesion are not about following rigid rules or using fancy words. They are about helping your reader understand your ideas. Every device, every link, every transition should serve that goal. If a technique does not help communication, do not use it just because it seems sophisticated.`,
    },
    {
      id: 'engelsk-vg1-3-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the relationship between coherence and cohesion?',
        options: [
          { id: 'a', text: 'They are the same thing', isCorrect: false },
          { id: 'b', text: 'Coherence is the big picture; cohesion is the specific linguistic links', isCorrect: true },
          { id: 'c', text: 'Cohesion is more important than coherence', isCorrect: false },
          { id: 'd', text: 'They only matter in academic writing', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Coherence refers to overall logical organization and meaning - the big picture. Cohesion refers to specific grammatical and lexical devices that link sentences. Both are needed for effective writing, and they work together.',
      },
    },
    {
      id: 'engelsk-vg1-3-3-n-summary',
      type: 'text',
      content: `## Summary: Weaving Your Text Together

You have learned how to create texts that flow seamlessly from beginning to end. These skills will serve you in every type of writing - academic essays, professional reports, emails, and even creative work. Here are the key concepts to remember and practice:

**Coherence - The Big Picture:**
Coherence is the overall sense that a text is logically organized and makes sense as a whole. Each paragraph serves a clear purpose, ideas connect to the central point, and readers can follow your thinking from introduction to conclusion. Ask yourself: Can someone follow my argument? Does everything fit together?

**Reference - Pointing Back:**
Use pronouns (he, she, it, they) and demonstratives (this, that, these, those) to refer back to previously mentioned things. Ensure references are always clear - when multiple referents are possible, repeat the noun or restructure. Use "this" with a summary noun ("this problem," "this approach") rather than vague "this."

**Linking Words - Your Navigation System:**
Choose appropriate discourse markers for different relationships: addition (furthermore, moreover, also), contrast (however, nevertheless, on the other hand), cause/effect (therefore, consequently, as a result), examples (for instance, such as), sequence (first, then, finally), summary (in conclusion, to summarize). Match formality to context and vary your choices.

**Lexical Cohesion - Words That Connect:**
Create unity through vocabulary choices: strategic repetition of key terms, synonyms and related words for variety, collocations and semantic fields that belong together, superordinates and hyponyms for moving between general and specific.

**Paragraph Structure:**
Build coherent paragraphs with a clear topic sentence stating the main idea, body sentences developing and supporting that idea, and a concluding sentence that summarizes or transitions. Use transitions between paragraphs to show how sections connect.

**Revision Strategy:**
Write for content first without worrying about perfection, then check systematically for coherence and cohesion in revision. Read aloud to catch flow problems. Get feedback from other readers to identify where confusion occurs.

**Key Terms:**
Coherence, cohesion, reference, pronoun, demonstrative, linking words, discourse markers, transition, lexical cohesion, collocation, semantic field, superordinate, hyponym, topic sentence.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3.4 NARRATIVE: Editing and Revising Texts
// ============================================================================

export const CHAPTER_ENGELSK_VG1_3_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-3-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '3.4',
  title: 'Editing and Revising Texts',
  subtitle: 'Narrative Version',
  description: 'Transform rough drafts into polished writing through effective revision strategies.',
  estimatedMinutes: 35,
  competenceGoals: ['vurdere og bearbeide egne tekster ut fra faglige kriterier og kunnskap om språk'],
  linkedChapterId: 'engelsk-vg1-3-4',
  content: [
    {
      id: 'engelsk-vg1-3-4-n-intro',
      type: 'text',
      content: `## The Writer's Secret

Here is a secret that most beginning writers do not know: professional writers are not better at first drafts. They are better at revision. Ernest Hemingway reportedly rewrote the ending of "A Farewell to Arms" 39 times before he was satisfied. When asked what the problem was, he said simply, "Getting the words right." Raymond Carver, the famous short story writer, often revised his stories dozens of times. Even Stephen King, who writes rapidly, describes extensive revision as essential to his process.

This might seem discouraging at first - even great writers struggle! But it is actually liberating. It means you do not have to get everything perfect on the first try. Your first draft is just raw material, clay waiting to be shaped. Nobody expects it to be great. The real magic happens when you revise, when you take that rough material and craft it into something clear, compelling, and polished.

Think about it this way: if even Hemingway needed 39 drafts to get his ending right, why would you expect perfection from yourself on the first try? The pressure to write perfectly is unrealistic and counterproductive. It leads to writer's block, anxiety, and abandoned projects. Embracing revision as a normal, essential part of writing frees you to get words on the page without paralyzing self-judgment.

Revision is not just about fixing typos - that is proofreading, which is only one small part of the process. True revision is about seeing your work with fresh eyes, questioning every choice you made, asking whether each element serves its purpose, and making your writing as clear and effective as possible. It is about transformation, not just correction. In this chapter, we will explore a systematic approach to revision that will transform not just individual texts but how you think about writing itself.`,
    },
    {
      id: 'engelsk-vg1-3-4-n-section1',
      type: 'text',
      content: `## The Four Levels of Revision

Effective revision works from big picture to small details, not the other way around. Think of it as zooming in on a photograph - you start by looking at the whole composition to see if it works, then examine individual elements for their contribution, then check the fine details for technical quality. This order is crucial for efficiency and effectiveness.

At the content level, you ask the big questions. Does my text achieve its purpose? If you are trying to persuade, is your argument convincing? If you are explaining, is your explanation complete and clear? Have I included all necessary information, or are there gaps that will confuse readers? Is anything missing that should be there? Is anything there that does not need to be? This is not the time to fix commas - you might delete whole paragraphs or add entirely new sections. Content-level revision requires you to think like your reader, not like the writer who already knows what they meant.

At the structure level, you examine organization. Does the text flow logically from beginning to end? Are paragraphs in the best possible order, or would rearranging them make the argument clearer? Does each paragraph have a single clear purpose? Are transitions between paragraphs smooth - can readers follow how one idea leads to the next? Sometimes excellent content is undermined by poor organization, making readers work too hard to follow your thinking. Restructuring can transform a confusing text into a compelling one without changing a single word.

At the sentence level, you look at clarity and style. Are sentences clear and easy to understand on the first reading? Is there variety in sentence structure, or does every sentence follow the same pattern? Can any short, choppy sentences be combined into flowing prose? Should any long, complicated sentences be broken up for clarity? Are there any awkward phrases that might trip readers up? This is where the sentence variety techniques we learned earlier come into play.

At the word level, you finally zoom in on details. Is the vocabulary precise - does each word mean exactly what you intend? Are there spelling errors that a spell-checker missed? Are punctuation marks used correctly? Are grammar rules followed? Is the tone consistent throughout, or do some sections feel different from others? This is the polishing stage, making everything as smooth and professional as possible.

The key is working through these levels in order, from big to small. There is no point perfecting the grammar of a sentence you might later delete. There is no point polishing vocabulary in a paragraph whose purpose is unclear. Fix the big things first, then work down to the details.`,
    },
    {
      id: 'engelsk-vg1-3-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Why should you revise content before checking grammar?',
        options: [
          { id: 'a', text: 'Grammar is less important than content', isCorrect: false },
          { id: 'b', text: 'You might delete sentences you spent time perfecting', isCorrect: true },
          { id: 'c', text: 'Content revision is faster', isCorrect: false },
          { id: 'd', text: 'Grammar errors do not matter in drafts', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Working from big picture to details is efficient. If you perfect the grammar of a paragraph and then realize the paragraph should be deleted, you have wasted time. Always make major changes first.',
      },
    },
    {
      id: 'engelsk-vg1-3-4-n-section2',
      type: 'text',
      content: `## The ARMS Strategy

When you sit down to revise, having a clear strategy helps - otherwise you might stare at your text without knowing what to do. ARMS is a simple but powerful framework that reminds you of your four main options for improving any piece of text. For every paragraph, every sentence, every idea, you can ask these four questions.

A is for Add. What is missing? Have you provided enough evidence for your claims, or are you asking readers to take your word for things? Are there gaps in your explanation where readers might get lost? Would an example make an abstract point concrete and memorable? Would a transition help readers follow your logic? Adding does not mean making text longer for its own sake - padding is the enemy of good writing. It means including what is necessary for readers to understand and be convinced.

R is for Remove. What is unnecessary? Are there redundant sentences that say the same thing twice in different words? Do you repeat points you have already made sufficiently? Is there information that does not serve your purpose, however interesting it might be? Are there throat-clearing phrases like "It is important to note that" which can simply be deleted? Many writers are reluctant to cut text they have worked hard to produce, but removing clutter often strengthens writing dramatically. Think of revision as sculpture - you are removing everything that is not essential to reveal the strong form underneath. When in doubt, cut it out.

M is for Move. Is everything in the right place? Would a paragraph work better earlier in the text to set something up, or later to build toward a climax? Should the order of sentences within a paragraph change so the logic flows better? Sometimes text is perfectly fine in itself but just in the wrong location - like a beautiful piece of furniture in the wrong room. Moving elements without changing them at all can transform a confusing argument into a clear one.

S is for Substitute. What could be better? Is there a more precise word that says exactly what you mean? A clearer phrasing that readers will understand immediately? A stronger example that will stick in readers' minds? A more current statistic? Substitution is about replacing something okay with something good, or something good with something excellent. It is about never settling when better is achievable.

Going through ARMS for each paragraph gives you a systematic way to improve your text. Instead of vaguely feeling something needs work, you have four specific questions to ask. This transforms revision from a mysterious art into a practical craft.`,
    },
    {
      id: 'engelsk-vg1-3-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What does the "R" in ARMS remind you to do?',
        options: [
          { id: 'a', text: 'Rewrite sentences completely', isCorrect: false },
          { id: 'b', text: 'Remove unnecessary content', isCorrect: true },
          { id: 'c', text: 'Read the text aloud', isCorrect: false },
          { id: 'd', text: 'Research more information', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'R stands for Remove. Cutting unnecessary words, sentences, and paragraphs often improves writing more than adding does. Good revision frequently makes texts shorter and stronger.',
      },
    },
    {
      id: 'engelsk-vg1-3-4-n-section3',
      type: 'text',
      content: `## Common Errors to Hunt

While big-picture revision is crucial, you also need to catch errors at the sentence and word level. Certain mistakes are particularly common among English learners, and knowing what to look for helps you find them efficiently. Think of this as your error checklist - go through your text hunting specifically for each type.

Subject-verb agreement trips many writers up, especially with complex subjects where words come between the subject and verb. "The group of students are" is wrong because "group" is the subject, not "students" - and "group" is singular. "The students, along with their teacher, are ready" is correct because "students" is the subject and it is plural; the phrase "along with their teacher" does not change this. The trick is to find the true subject by asking "who or what is doing the action?" Ignore interrupting phrases.

Pronoun reference becomes problematic when it is unclear what a pronoun refers to. "When John met Peter, he was happy" - who was happy? John? Peter? Both? Readers should not have to guess. Rewrite for clarity: "When John met Peter, John was delighted to see his old friend," or "Meeting Peter made John happy." Every pronoun should have one clear referent.

Tense consistency means maintaining the same tense unless you have a specific reason to shift. "She walked into the room and says hello" jarringly jumps from past to present for no reason. Stay in past: "She walked into the room and said hello." Tense shifts are appropriate when you move to a different time frame deliberately, but accidental shifts confuse readers.

Run-on sentences occur when two independent clauses are joined without proper punctuation or conjunction. "I went home I was tired" needs fixing - it runs two complete thoughts together. Solutions: "I went home because I was tired" (add conjunction), "I went home; I was tired" (add semicolon), or "I went home. I was tired" (make two sentences).

Comma splices happen when only a comma joins two independent clauses - a comma alone is not strong enough for this job. "It was late, we went home" should be "It was late, so we went home" (add conjunction after comma), "It was late; we went home" (use semicolon), or "It was late. We went home" (use period). Comma splices are extremely common and easy to fix once you recognize them.

Apostrophe errors are surprisingly common even among native speakers. "Its" (no apostrophe) is possessive: "The dog wagged its tail." "It's" (with apostrophe) means "it is": "It's raining." Similarly, "your" is possessive: "your book." "You're" means "you are": "You're welcome." And "their/there/they're" - "their" is possessive, "there" is a place, "they're" means "they are." Check each occurrence to be sure you have the right one.`,
    },
    {
      id: 'engelsk-vg1-3-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is wrong with "The team are playing good today"?',
        options: [
          { id: 'a', text: 'Only subject-verb agreement is wrong', isCorrect: false },
          { id: 'b', text: 'Only the adverb is wrong', isCorrect: false },
          { id: 'c', text: 'Both subject-verb agreement and adverb are wrong', isCorrect: true },
          { id: 'd', text: 'Nothing is wrong', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Two errors: "team" is singular in American English (requires "is," though British English allows "are"), and "good" should be "well" because it modifies the verb "playing." Correct: "The team is playing well today."',
      },
    },
    {
      id: 'engelsk-vg1-3-4-n-section4',
      type: 'text',
      content: `## Practical Revision Techniques

Beyond knowing what to look for, you need techniques for actually finding problems in your own writing. This is harder than it sounds - you know what you meant to write, so your brain fills in what should be there rather than seeing what actually is. Here are proven strategies that help you see your own work more clearly.

Take a break before revising. This is perhaps the most important technique. Fresh eyes see what tired eyes miss. If possible, let your text sit for at least a day before revising - overnight is ideal. Even a few hours helps if that is all you have. You will be amazed at what you notice when you return: missing words, unclear sentences, structural problems that seemed invisible when you wrote them. This is why leaving assignments until the last minute makes good writing almost impossible.

Read aloud. Your ear catches problems your eye skips over. When you read silently, your brain auto-corrects errors. When you read aloud, you hear what is actually there. Where do you stumble? That sentence is probably awkward. Where do you run out of breath? That sentence is probably too long. Where does something sound wrong even though you cannot say why? Trust that instinct - something needs work. Professional writers and editors swear by this technique.

Read backwards for proofreading. Start at the last sentence and work toward the beginning. This bizarre-sounding technique breaks the flow of meaning that lets errors hide. You see each sentence individually rather than skating over it as part of a larger argument. It is especially effective for catching typos, missing words, and punctuation errors.

Use a checklist. Everyone makes certain errors more often than others - you have personal weaknesses in your writing. Create your own list of errors you commonly make, and check for each one specifically. If you know you struggle with comma splices, do a dedicated pass looking only for those. If you tend to repeat words, check for that. Multiple focused passes catch more than one general pass.

Get feedback. Another reader brings a perspective you cannot have - they do not know what you meant, only what you wrote. They can tell you where they got confused, where your argument seemed weak, where they lost interest or had to reread. This information is gold. Ask specific questions: "Did the introduction grab you?" "Could you follow my reasoning?" "Was anything unclear?"

Use tools wisely. Spell checkers and grammar checkers catch some errors, which is valuable - use them. But they also miss many errors and sometimes suggest wrong corrections. A spell checker will not catch "from" instead of "form" because both are real words. Grammar checkers often flag correct sentences while missing actual errors. Use these tools as a starting point, not a final authority. Your judgment must be the final check.

Track your patterns. Keep notes on what errors you often make and what feedback you receive. Over time, you will become aware of your weaknesses, catch them earlier, and eventually eliminate them from your first drafts. This is how revision makes you a better writer overall, not just in the current text.`,
    },
    {
      id: 'engelsk-vg1-3-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Why should you read your text aloud during revision?',
        options: [
          { id: 'a', text: 'To practice pronunciation', isCorrect: false },
          { id: 'b', text: 'Because your ear catches problems your eye misses', isCorrect: true },
          { id: 'c', text: 'To memorize your text', isCorrect: false },
          { id: 'd', text: 'To make the revision process longer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Reading aloud engages different parts of your brain. You hear awkward rhythms, notice missing words, and feel where sentences are too long. Many professional writers swear by this technique.',
      },
    },
    {
      id: 'engelsk-vg1-3-4-n-section5',
      type: 'text',
      content: `## Building Your Revision Habit

Revision is a skill that improves with practice, like any other skill. The more you revise, the better you become at seeing your own writing clearly - you develop an editor's eye that catches problems early. And here is a wonderful bonus: the more you revise, the better your first drafts become too. You internalize the standards you apply, and you start writing better naturally.

Start by accepting that revision is a normal, essential part of writing, not a sign of failure or weakness. Even the most experienced, acclaimed writers revise extensively - often more extensively than beginners because they have higher standards. The difference is not that good writers need revision less; it is that they have learned to expect it, schedule time for it, and even enjoy the process of making their writing better. They see revision not as fixing problems but as discovering what they really want to say.

Build revision into your timeline from the start. Do not leave assignments until the last minute if you want to produce quality work. Writing the night before leaves no time for the break that makes revision effective - you cannot return with fresh eyes if you never left. Aim to finish drafts early enough that you can take at least a day away from the text before revising. Plan for multiple drafts, not one perfect attempt. Professional writers often work on multiple projects simultaneously, partly so they can let each one rest between revisions.

Develop your own revision process through experimentation. Maybe you like to print out your text and mark it up with colored pens - the physical act of writing helps some people think. Maybe you prefer on-screen editing, using track changes to see your revisions accumulate. Maybe you revise in stages over several days, doing content one day, structure the next, sentences and words the last. Maybe you like to revise in one intense session. There is no single right way - find what works for you and your schedule.

Reflect on your revision. After finishing a piece of writing, take a few minutes to look back at the changes you made. What patterns do you notice? What kinds of errors did you catch repeatedly? What did feedback from others reveal about your blind spots? This reflection helps you grow as a writer. You might keep a revision journal where you note insights about your writing process.

Finally, remember that revision is not endless. At some point, you need to consider a text done and move on. Perfectionism can be paralyzing - there is always something more you could change, some way the text could theoretically be better. Set a reasonable standard - clear, correct, and effective for its purpose - and aim for that. When you have achieved it, let the text go. Good enough, delivered on time, is better than perfect, never finished.`,
    },
    {
      id: 'engelsk-vg1-3-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What mindset helps most with revision?',
        options: [
          { id: 'a', text: 'Viewing revision as fixing your failures', isCorrect: false },
          { id: 'b', text: 'Seeing revision as a normal, valuable part of writing', isCorrect: true },
          { id: 'c', text: 'Believing good writers do not need to revise', isCorrect: false },
          { id: 'd', text: 'Thinking revision should be quick and minimal', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Revision is not about fixing failures - it is about refining raw material into polished work. All writers revise. Embracing this makes the process productive rather than discouraging.',
      },
    },
    {
      id: 'engelsk-vg1-3-4-n-summary',
      type: 'text',
      content: `## Summary: The Art of Revision

You have learned how to transform rough drafts into polished writing. Revision is where good writing happens - first drafts are raw material, revision shapes them into something worth reading. Here are the key points to remember and practice:

**Four Levels of Revision:**
Work from big picture to small details, in this order: Content (Is everything necessary there? Is anything missing? Does it achieve its purpose?), Structure (Is the organization logical? Are paragraphs in the best order? Do transitions work?), Sentences (Are they clear and varied? Can any be combined or broken up?), Words (Are they correct, precise, and appropriate?). Do not polish sentences until you are sure they will survive.

**The ARMS Strategy:**
For every paragraph, ask four questions: Add - what is missing that readers need? Remove - what is unnecessary clutter? Move - is everything in the right place? Substitute - what could be better? This systematic approach ensures you consider all possibilities.

**Common Errors to Hunt:**
Subject-verb agreement (find the true subject), unclear pronoun reference (every pronoun needs one clear referent), tense consistency (do not shift without reason), run-on sentences (independent clauses need proper connection), comma splices (commas alone cannot join independent clauses), apostrophe errors (its/it's, your/you're, their/there/they're).

**Practical Revision Techniques:**
Take a break before revising - fresh eyes see what tired eyes miss. Read aloud - your ear catches what your eye skips. Read backwards for proofreading. Use a personal checklist for your common errors. Get feedback from other readers. Use spelling and grammar tools wisely but do not trust them completely. Track your patterns to improve over time.

**Building the Habit:**
Accept revision as normal and essential, not a sign of failure. Build revision time into your schedule. Develop your own process through experimentation. Reflect on your revisions to learn from them. Know when to stop - perfection is the enemy of done.

**Key Terms:**
Revision, editing, proofreading, subject-verb agreement, pronoun reference, tense consistency, run-on sentence, comma splice, apostrophe, ARMS strategy.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 4.1 NARRATIVE: Literary Devices and Techniques
// ============================================================================

export const CHAPTER_ENGELSK_VG1_4_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-4-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.1',
  title: 'Literary Devices and Techniques',
  subtitle: 'Narrative Version',
  description: 'Discover the tools writers use to create meaning, beauty, and emotional impact.',
  estimatedMinutes: 40,
  competenceGoals: ['lese, diskutere og reflektere over innhold og virkemidler i ulike typer tekster, også selvvalgte'],
  linkedChapterId: 'engelsk-vg1-4-1',
  content: [
    {
      id: 'engelsk-vg1-4-1-n-intro',
      type: 'text',
      content: `## The Magic Behind the Words

When you read a powerful piece of writing - a poem that moves you to tears, a novel that transports you to another world, a speech that inspires you to action - something is happening beyond the literal meaning of the words. The words themselves might be simple, yet their effect is profound. How does this happen? Writers are using tools, carefully chosen techniques that create effects on readers. These are literary devices, and understanding them opens up a new dimension in both your reading and your writing.

Think about the difference between "She was sad" and "Her heart was a stone, cold and heavy in her chest." Both express sadness, but the second creates an experience. You feel the weight, the coldness. That is a literary device at work - in this case, a metaphor that transforms an abstract emotion into something physical and vivid.

Understanding literary devices does two important things for you. First, it deepens your appreciation of literature. When you can see how a writer achieves an effect, you appreciate not just the art but the craft - the deliberate choices, the skilled construction. You become a richer reader, noticing layers that less attentive readers miss. Second, it improves your own writing. These tools are not reserved for famous authors or literary geniuses - they are available to everyone who wants to write more effectively. Once you understand how devices work, you can use them in your own essays, stories, and everyday communication.

In this chapter, we will explore the most important literary devices, from figurative language that paints pictures with words to structural techniques that create suspense and reveal meaning. You will learn to see these devices in the texts you read and to use them deliberately in the texts you write. Welcome to the writer's toolkit.`,
    },
    {
      id: 'engelsk-vg1-4-1-n-section1',
      type: 'text',
      content: `## Figurative Language: Painting Pictures with Words

Figurative language uses words in non-literal ways to create vivid images and unexpected connections. When you say someone has "a heart of gold," you do not mean their heart is literally made of gold - you mean they are kind and generous. The image of gold suggests value, warmth, and precious qualities. This is the power of figurative language: it communicates through images and associations rather than direct statement.

A simile makes a comparison using "like" or "as." "Her smile was like sunshine" connects two different things - a smile and sunshine - highlighting the warmth, brightness, and life-giving quality of the smile. "He fought like a lion" suggests courage and ferocity. "The news spread like wildfire" conveys speed and uncontrollability. Similes keep the comparison explicit: you know two things are being compared because the linking word is right there. This makes them easier to understand than metaphors, but potentially less powerful.

A metaphor makes a direct comparison without "like" or "as." "Life is a journey" states that life IS a journey, making the comparison more forceful and immediate. "All the world's a stage," Shakespeare wrote, and suddenly we see life as performance, people as actors, events as scenes. Metaphors can be brief ("drowning in debt") or extended through an entire text. When you describe someone "navigating obstacles," "taking wrong turns," and "finally reaching their destination," you are extending the journey metaphor, exploring all its implications.

Personification gives human qualities to non-human things. "The wind whispered through the trees" makes the wind seem alive, capable of speech, perhaps sharing secrets. "The flowers nodded their heads in the breeze" gives agency and personality to plants. Nature often becomes a character through personification, which can create atmosphere, suggest emotional states, or make the non-human feel connected to human experience.

Hyperbole is deliberate exaggeration for effect. "I have told you a million times" does not literally mean a million - it emphasizes frustration and repetition. "I am so hungry I could eat a horse" is not about actual horse-eating but about intensity of hunger. We use hyperbole constantly in everyday speech without thinking about it, and writers use it deliberately to create emphasis, humor, or emotional impact.

Understatement is the opposite - deliberately downplaying something for effect. If someone survives a plane crash with minor injuries and says "that was inconvenient," the understatement creates a particular effect, often humorous or showing coolness under pressure. British English especially favors understatement, as in describing a terrible situation as "a bit of a problem."

An oxymoron puts contradictory terms together: "deafening silence," "bitter sweet," "living dead," "cruel kindness." The contradiction creates tension and makes us think about how both qualities could coexist - how silence can be so intense it feels loud, how something can be both pleasant and painful at once.`,
    },
    {
      id: 'engelsk-vg1-4-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: '"The stars danced playfully in the night sky." What literary device is this?',
        options: [
          { id: 'a', text: 'Simile', isCorrect: false },
          { id: 'b', text: 'Metaphor', isCorrect: false },
          { id: 'c', text: 'Personification', isCorrect: true },
          { id: 'd', text: 'Hyperbole', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'This is personification - giving human qualities (dancing playfully) to non-human things (stars). Stars cannot literally dance or be playful, but describing them this way creates a vivid, joyful image.',
      },
    },
    {
      id: 'engelsk-vg1-4-1-n-section2',
      type: 'text',
      content: `## Irony: When Things Are Not What They Seem

Irony is one of the most powerful and complex literary devices, and also one of the most misunderstood. It involves a contrast between what is expected and what actually happens, or between what is said and what is meant. True irony always involves this gap, this difference between surface and reality, expectation and outcome.

Verbal irony is saying the opposite of what you mean, expecting your audience to understand the real meaning. If you step outside into pouring rain and say "What lovely weather," you are using verbal irony - your words say one thing, but your meaning is clearly the opposite. Sarcasm is a form of verbal irony that carries a mocking or contemptuous tone, but not all verbal irony is sarcastic. A character might use verbal irony affectionately or gently, without the bite of sarcasm.

Situational irony occurs when events turn out contrary to expectations, often in a way that seems almost designed to mock our expectations. A fire station burning down is situationally ironic - of all places, we expect a fire station to be safe from fire. A police station being robbed, a professional swimmer drowning, a safety expert having an accident - these are situationally ironic because we expect the opposite. Stories often use situational irony for surprise, to make a point, or to suggest that life does not follow our expectations.

Dramatic irony is when the audience knows something that characters do not. This creates a special tension between what we know and what we watch characters do in ignorance. In horror films, we often know the killer is hiding in the house while the character wanders in obliviously - we want to shout a warning but cannot. In tragedies like Romeo and Juliet, we know Juliet is not really dead, but Romeo does not, and we watch helplessly as he makes his fatal mistake. Dramatic irony can create suspense, horror, or profound pathos depending on how it is used.

Irony is powerful because it creates layers of meaning. The surface level says one thing; the deeper level says another. Readers who catch the irony experience the text more richly and feel a kind of complicity with the author - they are in on the joke or the tragedy. Writers use irony to critique without preaching, to create humor, to add depth, and to make readers think. Once you start noticing irony, you will see it everywhere - in literature, in film, in news, in everyday conversations.`,
    },
    {
      id: 'engelsk-vg1-4-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'In Romeo and Juliet, the audience knows Juliet is not really dead, but Romeo does not. What type of irony is this?',
        options: [
          { id: 'a', text: 'Verbal irony', isCorrect: false },
          { id: 'b', text: 'Situational irony', isCorrect: false },
          { id: 'c', text: 'Dramatic irony', isCorrect: true },
          { id: 'd', text: 'Cosmic irony', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'This is dramatic irony - the audience knows something the character does not. We watch Romeo make a tragic decision based on a misunderstanding, which intensifies the emotional impact.',
      },
    },
    {
      id: 'engelsk-vg1-4-1-n-section3',
      type: 'text',
      content: `## Structural Devices: Building Tension and Meaning

Beyond individual phrases and sentences, writers use structural devices that work across scenes, chapters, and entire texts. These devices organize information, create anticipation, and build meaning through patterns that unfold over time. They reward attentive readers who notice connections and remember details.

Foreshadowing hints at future events, creating anticipation and tension. Explicit foreshadowing might say "Little did she know this would be her last peaceful morning" - telling readers directly that something bad is coming without revealing what. Subtle foreshadowing is more powerful: a character feeling inexplicably cold, a crow watching from a tree, a door that will not quite close - details that seem innocent on first reading but gain significance later. Good foreshadowing creates tension on first reading and rewards rereading when you see how the writer planted clues.

Flashback interrupts chronological order to show earlier events. A character might remember their childhood, triggered by a smell or a sound. A chapter might jump back in time to show how a relationship began. Flashbacks reveal backstory that helps us understand current events, explain character motivation, and create meaningful contrasts between past and present. They answer the question "how did we get here?" without slowing down the present action with long exposition.

Symbolism uses objects, colors, or actions to represent abstract ideas. A dove often symbolizes peace, darkness suggests evil or ignorance, spring represents new beginnings, a crossroads represents choice. Symbols work because we share cultural associations - we collectively understand certain meanings. But writers can also create new symbolic meanings within a specific text: in one novel, a red scarf might come to symbolize a character's lost innocence without any universal meaning attached to red scarves.

A motif is a recurring element with symbolic significance - a symbol that appears repeatedly, building meaning through accumulation. If water imagery appears throughout a novel - rain, rivers, drowning, baptism, tears, ocean - water is a motif that likely connects to themes of cleansing, change, emotional states, or the boundary between life and death. When you notice a motif, you have found a key to the text's deeper meanings.

Juxtaposition places contrasting elements side by side for effect, letting the contrast speak for itself. Describing a luxury mansion right next to a homeless encampment makes a point about inequality without the writer having to state it directly - the contrast does the work. Juxtaposing a character's public face with their private despair reveals hypocrisy. Juxtaposing scenes of war violence with scenes of domestic peace heightens the horror of both.

These structural devices work over longer stretches of text, creating patterns that reward attentive reading. Train yourself to notice recurring images, to remember what was foreshadowed, to see how flashbacks connect to present action.`,
    },
    {
      id: 'engelsk-vg1-4-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'A novel repeatedly mentions clocks, time running out, and missed appointments. What is this recurring element called?',
        options: [
          { id: 'a', text: 'Foreshadowing', isCorrect: false },
          { id: 'b', text: 'Flashback', isCorrect: false },
          { id: 'c', text: 'Motif', isCorrect: true },
          { id: 'd', text: 'Juxtaposition', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'A recurring element with symbolic significance is a motif. The repeated time imagery likely connects to themes about mortality, urgency, or wasted opportunities. Motifs create unity and deepen meaning.',
      },
    },
    {
      id: 'engelsk-vg1-4-1-n-section4',
      type: 'text',
      content: `## Sound Devices: Music in Language

Language has a musical quality that goes beyond meaning - the sounds themselves create effects. Writers exploit this through sound devices that work on readers at a level below conscious awareness. These devices are especially important in poetry, where sound often carries as much weight as meaning, but they appear in all forms of writing. Even business writing has rhythm that affects how it feels to read.

Alliteration repeats consonant sounds at the beginning of nearby words. "Peter Piper picked a peck of pickled peppers" is an extreme example used for tongue-twisters, but subtler alliteration appears everywhere in literature. "The soft sound of summer" creates a gentle, whispering effect through the repeated s. "The darkness and danger drew nearer" creates a sense of threat through the hard d sounds. Alliteration ties words together, creates memorable phrases, and adds music to prose.

Assonance repeats vowel sounds within words, creating internal echoes. "The rain in Spain falls mainly on the plain" uses the long a sound - you can hear how it creates a kind of rhyme without actual rhyming words. Assonance creates musical quality even in prose, and poets use it to create mood: long vowel sounds tend to feel slow and mournful, short vowels feel quick and light.

Onomatopoeia uses words that sound like what they describe: buzz, crash, whisper, murmur, sizzle, pop, hiss, bang. These words bridge the gap between language and the physical world, making descriptions more vivid and immediate. When you read "the fire crackled and hissed," you almost hear it.

Rhythm and meter create patterns of stressed and unstressed syllables - the beat of language. Poetry often uses regular meter (like iambic pentameter: da-DUM da-DUM da-DUM da-DUM da-DUM), but prose has rhythm too. Short, punchy sentences create a staccato rhythm - quick, sharp, urgent. Long, flowing sentences carry readers along, building momentum, delaying resolution, creating anticipation. Varying sentence length creates rhythm the way varying note length creates music.

Repetition of words, phrases, or structures creates emphasis and rhythm. "I have a dream" repeated throughout Martin Luther King Jr.'s famous speech builds power with each occurrence - by the end, those four words carry enormous emotional weight. Anaphora (starting successive sentences with the same words) creates a building, incantatory effect. In writing, deliberate repetition is a powerful choice; accidental repetition is a flaw to eliminate.

These sound devices work on readers even when they do not consciously notice them. Read good prose aloud and you hear its music. The sounds of language affect us below the surface of conscious meaning.`,
    },
    {
      id: 'engelsk-vg1-4-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: '"The bees buzzed busily in the bright blossoms." Which sound devices are used?',
        options: [
          { id: 'a', text: 'Only alliteration', isCorrect: false },
          { id: 'b', text: 'Only onomatopoeia', isCorrect: false },
          { id: 'c', text: 'Alliteration and onomatopoeia', isCorrect: true },
          { id: 'd', text: 'Assonance and repetition', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Two devices: alliteration (the repeated b sounds in bees, buzzed, busily, bright, blossoms) and onomatopoeia (buzzed sounds like the noise bees make). Together they create a vivid auditory image.',
      },
    },
    {
      id: 'engelsk-vg1-4-1-n-section5',
      type: 'text',
      content: `## Using Literary Devices in Your Own Writing

Literary devices are not just for analysis - they are tools you can use. Here is how to incorporate them effectively.

Start by noticing. As you read, pay attention to how writers achieve effects. When a passage moves you, ask how it works. This awareness is the first step to using devices yourself.

Use devices purposefully, not randomly. Every device should serve your meaning. A metaphor should illuminate, not just decorate. Foreshadowing should create tension, not just show off your cleverness. Ask yourself: what effect do I want? Then choose the device that creates it.

Avoid overdoing it. A text stuffed with literary devices feels artificial. Like spices in cooking, a little goes a long way. One powerful metaphor is better than five mediocre ones.

Match devices to context. Flowery figurative language fits some contexts but not others. A business email probably should not use extended metaphors. A poem celebrating nature might. Consider your audience and purpose.

Practice specific devices. Try writing a paragraph that uses personification throughout. Write a scene with deliberate foreshadowing. Craft sentences with alliteration. Focused practice develops your skills.

Revise for effect. Your first draft might not use devices effectively. In revision, look for opportunities to strengthen your writing with well-chosen techniques.

Remember that these devices are ancient - writers have been using them for thousands of years because they work. You are joining a long tradition when you master them.`,
    },
    {
      id: 'engelsk-vg1-4-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the best approach to using literary devices in your writing?',
        options: [
          { id: 'a', text: 'Use as many as possible to show your skill', isCorrect: false },
          { id: 'b', text: 'Avoid them entirely in non-fiction writing', isCorrect: false },
          { id: 'c', text: 'Use them purposefully to create specific effects', isCorrect: true },
          { id: 'd', text: 'Only use devices in poetry', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Literary devices should serve your meaning and purpose. Use them deliberately to create specific effects, not just to show off. A few well-chosen devices are more effective than many poorly used ones.',
      },
    },
    {
      id: 'engelsk-vg1-4-1-n-summary',
      type: 'text',
      content: `## Summary: The Writer's Toolkit

You have explored the major literary devices. Here is a quick reference:

**Figurative Language:**
Simile (comparison with like/as), metaphor (direct comparison), personification (human qualities to non-human things), hyperbole (exaggeration), understatement, oxymoron (contradictory terms).

**Irony:**
Verbal (saying the opposite), situational (unexpected outcomes), dramatic (audience knows more than characters).

**Structural Devices:**
Foreshadowing (hints at future), flashback (return to past), symbolism (objects represent ideas), motif (recurring elements), juxtaposition (contrasting elements).

**Sound Devices:**
Alliteration (repeated consonants), assonance (repeated vowels), onomatopoeia (words that sound like meaning), rhythm, repetition.

**Key Terms:**
Simile, metaphor, personification, hyperbole, irony, foreshadowing, flashback, symbolism, motif, alliteration, assonance, onomatopoeia.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 4.2 NARRATIVE: Analyzing Short Stories
// ============================================================================

export const CHAPTER_ENGELSK_VG1_4_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-4-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.2',
  title: 'Analyzing Short Stories',
  subtitle: 'Narrative Version',
  description: 'Master the art of analyzing fiction - understanding how stories work and what they mean.',
  estimatedMinutes: 40,
  competenceGoals: ['lese, analysere og tolke engelskspråklig skjønnlitteratur'],
  linkedChapterId: 'engelsk-vg1-4-2',
  content: [
    {
      id: 'engelsk-vg1-4-2-n-intro',
      type: 'text',
      content: `## The Concentrated Art Form

A short story is a miracle of compression. In just a few pages, a skilled writer can create a complete world, populate it with believable characters, take us through a meaningful journey, and leave us changed. Unlike novels, which have room to expand and explore, short stories must make every word count.

This compression makes short stories ideal for study. You can read one in a sitting, then examine how all its parts work together. The writer's choices are visible in ways that can be harder to see in longer works.

Analyzing a short story is not about reducing it to a formula or finding the "right answer." It is about deepening your understanding and appreciation. When you can see how a story works, you experience it more fully. You notice things casual readers miss. And you develop insights that improve your own writing.

In this chapter, we will explore the key elements of short stories and develop a framework for analysis that you can apply to any work of fiction.`,
    },
    {
      id: 'engelsk-vg1-4-2-n-section1',
      type: 'text',
      content: `## Plot: The Shape of Stories

Every story has a plot - a sequence of events connected by causation. This is different from a mere chronicle, which lists events without connections. "The king died and then the queen died" is a chronicle. "The king died and then the queen died of grief" is a plot - the second event is caused by the first.

Plots typically follow a recognizable shape, often called Freytag's pyramid. The exposition introduces characters, setting, and situation. We learn who, where, when, and what is at stake. Rising action introduces complications - obstacles, conflicts, escalating tension. The story builds toward the climax, the moment of highest tension, the turning point where something changes irreversibly. Falling action shows the consequences of the climax, as the tension releases. Finally, the resolution shows how things end up, for better or worse.

Not all stories follow this pattern exactly - experimental fiction often plays with structure - but understanding the traditional shape helps you see how writers create and release tension.

Central to plot is conflict. This is the struggle that drives the story forward. Person vs. person is external conflict between characters. Person vs. self is internal conflict within a character's mind. Person vs. society involves struggle against social forces. Person vs. nature pits characters against the environment. Person vs. technology, vs. fate, vs. the supernatural - conflicts can take many forms, often combining several types.

When analyzing plot, ask: What is the central conflict? How does tension build? What is the turning point? How does the ending relate to the beginning?`,
    },
    {
      id: 'engelsk-vg1-4-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is the climax of a story?',
        options: [
          { id: 'a', text: 'The beginning where characters are introduced', isCorrect: false },
          { id: 'b', text: 'The moment of highest tension and turning point', isCorrect: true },
          { id: 'c', text: 'The ending where everything is resolved', isCorrect: false },
          { id: 'd', text: 'The middle section where problems develop', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The climax is the moment of highest tension, the turning point where something changes irreversibly. Everything before builds toward it; everything after flows from it. It is the peak of Freytag\'s pyramid.',
      },
    },
    {
      id: 'engelsk-vg1-4-2-n-section2',
      type: 'text',
      content: `## Character: The People We Meet

Characters are the heart of most fiction. We read to see what happens to people we care about - even when those people exist only in words.

Characters come in different types. The protagonist is the main character, whose journey we follow. The antagonist opposes the protagonist - not always a villain, sometimes just someone with competing interests. Supporting characters populate the world and often serve as foils, characters who contrast with the main characters in ways that highlight important qualities.

Characters can be round or flat. Round characters are complex, with multiple traits, internal contradictions, and depth. They feel like real people. Flat characters are simpler, defined by one or two traits. Flat characters are not necessarily bad - sometimes a story needs simple characters in minor roles. But main characters usually need to be round to hold our interest.

Characters can be dynamic or static. Dynamic characters change through the story - they learn, grow, or deteriorate. Static characters remain essentially the same. Again, this is not about quality - some stories deliberately show characters who cannot or will not change.

Writers reveal character through several methods. Direct characterization tells us about characters explicitly: "John was a generous man." Indirect characterization shows us through the STEAL method - Speech (what they say), Thoughts (what they think), Effect on others (how others react), Actions (what they do), and Looks (physical appearance). Skilled writers mostly use indirect characterization, letting readers draw conclusions.

When analyzing character, ask: Who is this person? What do they want? What obstacles do they face? How do they change? What do they represent?`,
    },
    {
      id: 'engelsk-vg1-4-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What does it mean for a character to be "round"?',
        options: [
          { id: 'a', text: 'They are physically described as round', isCorrect: false },
          { id: 'b', text: 'They appear throughout the entire story', isCorrect: false },
          { id: 'c', text: 'They are complex with multiple traits and depth', isCorrect: true },
          { id: 'd', text: 'They change significantly during the story', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Round characters have complexity and depth - multiple traits, internal contradictions, nuance. They feel like real people. This is different from dynamic (changing) vs static (unchanging). A character can be round but static, or flat but dynamic.',
      },
    },
    {
      id: 'engelsk-vg1-4-2-n-section3',
      type: 'text',
      content: `## Setting: Where and When

Setting is more than backdrop. It establishes the world of the story, creates atmosphere, and often carries symbolic meaning.

Setting includes place - the physical location, from specific rooms to entire countries. It includes time - the historical period, the season, the time of day. And it includes social environment - the cultural context, social norms, economic conditions that shape characters' lives.

Setting creates mood and atmosphere. A gothic mansion at midnight creates unease. A sunny meadow in spring creates cheerfulness. Skilled writers choose settings that support their stories' emotional effects.

Setting can reflect characters' internal states. A character lost in fog might be facing confusion in their life. A storm might mirror emotional turmoil. A changing season might parallel a character's transformation. This technique, sometimes called pathetic fallacy, uses setting to externalize the internal.

Setting can also create or intensify conflict. A harsh environment forces characters into survival mode. A restrictive society constrains characters' choices. The wrong place at the wrong time creates situational conflict.

In some stories, setting is almost a character itself. The Yorkshire moors in Wuthering Heights, the Mississippi River in Huckleberry Finn - these places are not just locations but presences that shape everything that happens.

When analyzing setting, ask: Where and when does this take place? How does setting affect mood? How does setting relate to character and theme? Why this setting and not another?`,
    },
    {
      id: 'engelsk-vg1-4-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'A story describes a fierce storm as a character faces a major internal conflict. What is this technique called?',
        options: [
          { id: 'a', text: 'Foreshadowing', isCorrect: false },
          { id: 'b', text: 'Flashback', isCorrect: false },
          { id: 'c', text: 'Pathetic fallacy', isCorrect: true },
          { id: 'd', text: 'Juxtaposition', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Pathetic fallacy uses setting (especially weather and nature) to reflect characters\' emotional states. The external storm mirrors the internal turmoil. This technique has been used in literature for centuries.',
      },
    },
    {
      id: 'engelsk-vg1-4-2-n-section4',
      type: 'text',
      content: `## Theme: The Deeper Meaning

Theme is what a story is really about - not the plot events but the underlying ideas and insights. A story about a boy running away from home might have themes about freedom, family, responsibility, or growing up. Theme is the meaning we take from the story.

Theme is different from subject. The subject of a story might be war, but the theme might be "war destroys innocence" or "war reveals both the worst and best in people." Subject is the topic; theme is what the story says about that topic.

Themes are usually expressed as statements rather than single words. "Love" is a subject. "Love requires sacrifice" or "Love can blind us to truth" are themes. The specificity matters - it captures what THIS story says, not just what it is about.

Stories can have multiple themes, often related. A story might explore both "power corrupts" and "resistance comes at a cost." Themes can complement or tension with each other.

Writers rarely state themes directly. Instead, themes emerge from the story's elements working together. Plot events demonstrate the theme. Characters embody or learn the theme. Setting and symbols reinforce the theme. The ending often crystallizes the theme.

When identifying themes, look for patterns. What do characters learn? What do events demonstrate? What ideas recur? What does the title suggest? What questions does the story raise, and how does it answer them?

Be careful not to over-simplify. Literature is not a delivery system for moral messages. Themes are insights, not lessons. Good stories complicate rather than preach.`,
    },
    {
      id: 'engelsk-vg1-4-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the difference between subject and theme?',
        options: [
          { id: 'a', text: 'They are the same thing', isCorrect: false },
          { id: 'b', text: 'Subject is the topic; theme is what the story says about it', isCorrect: true },
          { id: 'c', text: 'Theme is stated directly; subject is implied', isCorrect: false },
          { id: 'd', text: 'Subject is deeper than theme', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Subject is what the story is about (war, love, growing up). Theme is the insight or statement the story makes about that subject (war destroys innocence, love requires sacrifice). Theme is more specific and interpretive.',
      },
    },
    {
      id: 'engelsk-vg1-4-2-n-section5',
      type: 'text',
      content: `## Putting Analysis into Practice

Now that you know the elements, how do you actually analyze a short story? Here is a practical approach.

Read first for experience. Before analyzing, let the story work on you as a reader. What happens? How do you feel? What strikes you? This first impression is valuable data.

Read again for elements. On second reading, pay attention to the components we have discussed. Note details of plot, character, setting. Mark passages that seem significant. Ask questions.

Identify patterns and connections. How do the elements relate? Does the setting reflect the characters? Does the climax embody the theme? What repeats or contrasts?

Develop your interpretation. Based on your observations, what do you think the story means? What is it saying about life, people, society? Your interpretation should account for the evidence you have gathered.

Support with evidence. Good analysis is not just opinion - it is supported by specific details from the text. Quote key passages. Point to specific moments. Show how your interpretation connects to what is actually in the story.

Consider alternative readings. Your interpretation is not the only one possible. Acknowledging other ways to read the story strengthens your analysis by showing you have thought broadly.

Remember that analysis is not dissection. You are not killing the story to see how it works - you are deepening your appreciation of a living work of art.`,
    },
    {
      id: 'engelsk-vg1-4-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why should you read a story first for experience before analyzing?',
        options: [
          { id: 'a', text: 'To finish faster', isCorrect: false },
          { id: 'b', text: 'Because your emotional response provides valuable data', isCorrect: true },
          { id: 'c', text: 'Analysis is not important', isCorrect: false },
          { id: 'd', text: 'To decide if you like it before working', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Your initial response as a reader - what moves you, surprises you, confuses you - is valuable information for analysis. It tells you where the story is working and what effects the writer achieves. Analysis then explains how.',
      },
    },
    {
      id: 'engelsk-vg1-4-2-n-summary',
      type: 'text',
      content: `## Summary: Reading Stories Deeply

You have learned how to analyze short stories. Here are the key elements:

**Plot:**
Exposition, rising action, climax, falling action, resolution. Central conflict drives the story. Ask: What is the struggle? How does tension build and release?

**Character:**
Protagonist, antagonist, supporting characters. Round vs flat, dynamic vs static. Direct and indirect characterization (STEAL). Ask: Who are these people? What do they want? How do they change?

**Setting:**
Place, time, social environment. Creates mood, reflects character, intensifies conflict. Ask: Why this setting? How does it affect the story?

**Theme:**
The deeper meaning, expressed as a statement not just a topic. Emerges from elements working together. Ask: What insight does this story offer?

**Key Terms:**
Plot, conflict, climax, protagonist, antagonist, round/flat character, dynamic/static character, setting, pathetic fallacy, theme, subject.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 4.3 NARRATIVE: Analyzing Novels
// ============================================================================

export const CHAPTER_ENGELSK_VG1_4_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-4-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.3',
  title: 'Analyzing Novels',
  subtitle: 'Narrative Version',
  description: 'Explore the expansive world of novels and learn techniques for understanding longer fiction.',
  estimatedMinutes: 40,
  competenceGoals: ['lese, analysere og tolke engelskspråklig skjønnlitteratur'],
  linkedChapterId: 'engelsk-vg1-4-3',
  content: [
    {
      id: 'engelsk-vg1-4-3-n-intro',
      type: 'text',
      content: `## The Long Journey

If a short story is a sprint, a novel is a marathon. Where short stories compress, novels expand. They can develop characters over years, weave multiple plot lines, explore themes from many angles, and create entire worlds that readers inhabit for weeks or months.

This expansiveness brings both opportunities and challenges for analysis. You have more material to work with, but you also have to track more elements and see how they connect over hundreds of pages. The techniques from short story analysis still apply, but novels add new dimensions.

In this chapter, we will explore what makes novels different and develop strategies for analyzing longer works. Whether you are reading for school or for pleasure, these tools will help you engage more deeply with the novels you encounter.`,
    },
    {
      id: 'engelsk-vg1-4-3-n-section1',
      type: 'text',
      content: `## Point of View: Who Tells the Story

One of the most important decisions a novelist makes is who tells the story. Point of view shapes everything - what we know, how we feel, whose perspective we trust.

First person narration uses "I" - the narrator is a character in the story. "I walked into the room and saw her standing there." This creates intimacy. We are inside someone's head, seeing through their eyes, feeling their emotions. But first person is limited - we only know what this character knows. And first person narrators can be unreliable, intentionally or unintentionally deceiving us about events.

Third person limited also focuses on one character but uses "he" or "she." "She walked into the room and saw him standing there." We have access to this character's thoughts and perceptions, but we maintain some distance. This is perhaps the most common point of view in contemporary fiction.

Third person omniscient takes a god-like perspective, able to see into multiple characters' minds and report on events the characters do not witness. "She walked into the room, nervous. He stood there, equally anxious." This allows for dramatic irony and complex plotting, but risks losing the intimacy of more limited perspectives.

Second person, using "you," is rare in novels but creates unusual effects. "You walk into the room and see her standing there." This can draw readers intensely into the experience or feel artificial and distancing.

Some novels switch perspectives between chapters, giving us multiple viewpoints on the same events. This technique allows complex exploration of different characters' inner lives and truths.

When analyzing, always ask: Who is telling this story? What do they know and not know? How does their perspective shape the narrative?`,
    },
    {
      id: 'engelsk-vg1-4-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is the key characteristic of a first-person narrator?',
        options: [
          { id: 'a', text: 'They can see into every character\'s mind', isCorrect: false },
          { id: 'b', text: 'They are a character in the story, using "I"', isCorrect: true },
          { id: 'c', text: 'They are always completely reliable', isCorrect: false },
          { id: 'd', text: 'They maintain distance from the story', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'First person narrators are characters in the story, telling it from their "I" perspective. This creates intimacy but limits what readers can know - we only see what this character sees. First person narrators can be unreliable.',
      },
    },
    {
      id: 'engelsk-vg1-4-3-n-section2',
      type: 'text',
      content: `## Character Development Over Time

Novels have space for character development that short stories cannot achieve. We can watch characters grow, change, fail, and transform over the course of hundreds of pages.

This development can take many forms. A bildungsroman or coming-of-age novel follows a protagonist from youth to maturity, tracking their psychological and moral development. We see them encounter challenges, make mistakes, learn lessons, and eventually reach some kind of adult understanding. Think of novels like "To Kill a Mockingbird" or "The Catcher in the Rye."

Other novels show character change through crisis. A transformative event - war, loss, love, discovery - forces characters to confront who they are and who they could be. The character who emerges at the end is fundamentally different from the one we met at the beginning.

Some novels deliberately show characters who cannot or will not change. These static characters might be trapped by circumstance, limited by psychology, or simply resistant. The point of such novels is often to show why change is difficult or impossible.

Novels can also develop multiple characters in depth. Unlike short stories, which usually focus on one or two, novels can give us a cast of round characters whose lives intersect and affect each other in complex ways.

When analyzing character development, track changes across the novel. How is the character different at the end than at the beginning? What caused the changes? What do these changes mean?`,
    },
    {
      id: 'engelsk-vg1-4-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What is a bildungsroman?',
        options: [
          { id: 'a', text: 'A novel set in Germany', isCorrect: false },
          { id: 'b', text: 'A coming-of-age novel following psychological development', isCorrect: true },
          { id: 'c', text: 'A novel with multiple narrators', isCorrect: false },
          { id: 'd', text: 'A novel about war', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A bildungsroman (German for "novel of formation") is a coming-of-age story that follows the protagonist\'s psychological and moral development from youth toward maturity. Classic examples include "Jane Eyre" and "Great Expectations."',
      },
    },
    {
      id: 'engelsk-vg1-4-3-n-section3',
      type: 'text',
      content: `## Multiple Plot Lines and Structure

Novels have room for complex structures that would overwhelm a short story. Understanding these structures helps you see how longer works are organized.

The main plot follows the protagonist's central journey. But novels often have subplots - secondary storylines involving other characters that run parallel to or intersect with the main plot. These subplots can mirror, contrast with, or comment on the main plot. They add texture and allow exploration of themes from different angles.

Some novels use framing devices - a story within a story. A narrator in the present might tell a story from the past. A character might read a manuscript that becomes the novel we are reading. These frames create layers of perspective and often comment on storytelling itself.

Chronological structure follows events in the order they happen. But many novels play with time. Flashbacks return to earlier events. Flash-forwards jump ahead. Some novels interweave multiple time periods throughout. These non-linear structures can create mystery, show causation, or emphasize themes about memory and time.

Parallel structure tells two or more stories that mirror each other, sometimes in different times or places. The stories might converge at the end or remain separate while commenting on each other.

When analyzing structure, map the novel's organization. What are the main plot and subplots? How is time handled? Why might the author have chosen this structure?`,
    },
    {
      id: 'engelsk-vg1-4-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is the purpose of subplots in a novel?',
        options: [
          { id: 'a', text: 'To make the novel longer', isCorrect: false },
          { id: 'b', text: 'To confuse readers', isCorrect: false },
          { id: 'c', text: 'To add texture and explore themes from different angles', isCorrect: true },
          { id: 'd', text: 'To replace the main plot', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Subplots add depth and complexity. They can mirror, contrast with, or comment on the main plot. They allow writers to explore themes through different characters and situations, enriching the overall work.',
      },
    },
    {
      id: 'engelsk-vg1-4-3-n-section4',
      type: 'text',
      content: `## Setting as World-Building

In novels, setting expands into world-building. Writers do not just describe a location - they create entire worlds with their own rules, histories, cultures, and atmospheres.

Historical novels must recreate past eras convincingly. This requires research and selection - what details will make the period feel real without overwhelming readers? The best historical novels make the past feel immediate and relevant, not like a museum display.

Fantasy and science fiction novels build worlds from imagination, establishing rules about magic, technology, society, or nature that differ from our own. Good world-building is consistent and detailed enough to feel real, even when depicting impossibilities.

Realistic contemporary novels also build worlds, even if those worlds resemble our own. The specific neighborhood, social milieu, workplace, or subculture becomes a world with its own norms and textures.

Setting in novels is not just background but an environment that shapes characters and events. The social world determines what is possible for characters. The physical world creates obstacles and opportunities. The historical moment influences values and conflicts.

Some novels are so identified with their settings that place becomes inseparable from story. Think of London in Dickens, the American South in Faulkner, or Dublin in Joyce. The setting is not just where the story happens but part of what the story is about.

When analyzing setting, consider: How does this world work? What rules govern it? How does it shape what characters can do and who they can be?`,
    },
    {
      id: 'engelsk-vg1-4-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is world-building in fiction?',
        options: [
          { id: 'a', text: 'Writing only fantasy novels', isCorrect: false },
          { id: 'b', text: 'Creating convincing, detailed environments with their own rules', isCorrect: true },
          { id: 'c', text: 'Describing real places accurately', isCorrect: false },
          { id: 'd', text: 'Avoiding setting descriptions', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'World-building means creating environments that feel complete and consistent, with their own rules, cultures, and logic. This applies to fantasy worlds, historical periods, and contemporary settings alike - all require convincing construction.',
      },
    },
    {
      id: 'engelsk-vg1-4-3-n-section5',
      type: 'text',
      content: `## Reading Strategies for Novels

Novels require different reading strategies than shorter works. Here are techniques for engaging deeply with longer fiction.

Take notes as you read. You cannot hold everything in memory over weeks of reading. Note key events, character details, questions, and striking passages. These notes become resources for analysis later.

Track patterns and motifs. When you notice something recurring - an image, a phrase, a situation - mark it. Patterns often reveal themes. By the end, you will see connections invisible on first encounter.

Pay attention to beginnings and endings of chapters. Writers often place important information or images at structural boundaries. How does each chapter begin and end? How does the opening of the novel relate to its closing?

Pause periodically to reflect. At the end of each reading session, take a moment to think about what happened, what it might mean, and what questions you have. This reflection helps consolidate understanding.

Consider context. When was this novel written? What historical, cultural, or literary context shaped it? Understanding context enriches interpretation without reducing the novel to a historical document.

Discuss with others. Hearing different perspectives on a novel can reveal things you missed and challenge your interpretations. Book discussions - formal or informal - deepen engagement.

Reread key passages. Some passages deserve multiple readings. When something seems important or confusing, slow down and read carefully. The payoff is deeper understanding.`,
    },
    {
      id: 'engelsk-vg1-4-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why is taking notes especially important when reading novels?',
        options: [
          { id: 'a', text: 'To prove you read the book', isCorrect: false },
          { id: 'b', text: 'Because you cannot hold everything in memory over weeks', isCorrect: true },
          { id: 'c', text: 'Because teachers require it', isCorrect: false },
          { id: 'd', text: 'To make reading slower', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Novels are read over days or weeks, and important details from early chapters connect to later events. Notes help you remember and track patterns. They become resources for analysis after you finish reading.',
      },
    },
    {
      id: 'engelsk-vg1-4-3-n-summary',
      type: 'text',
      content: `## Summary: Navigating Longer Fiction

You have learned how to approach novels analytically. Here are the key points:

**Point of View:**
First person (I - intimate but limited), third person limited (he/she - one perspective), third person omniscient (god-like knowledge), second person (you - rare). Point of view shapes what readers know and feel.

**Character Development:**
Novels track change over time. Bildungsroman follows growth to maturity. Characters develop through crisis. Some remain deliberately static. Multiple characters can be developed in depth.

**Structure:**
Main plot and subplots. Framing devices. Chronological or non-linear time. Parallel structures. Structure is a meaning-making choice.

**World-Building:**
Settings become complete worlds with rules, histories, and cultures. Historical, fantasy, and contemporary novels all require convincing world construction.

**Key Terms:**
Point of view, first/third person, omniscient, unreliable narrator, bildungsroman, subplot, framing device, world-building.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 4.4 NARRATIVE: Poetry Analysis
// ============================================================================

export const CHAPTER_ENGELSK_VG1_4_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-4-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.4',
  title: 'Poetry Analysis',
  subtitle: 'Narrative Version',
  description: 'Unlock the concentrated power of poetry - where every word and every silence matters.',
  estimatedMinutes: 40,
  competenceGoals: ['lese, analysere og tolke engelskspråklig skjønnlitteratur'],
  linkedChapterId: 'engelsk-vg1-4-4',
  content: [
    {
      id: 'engelsk-vg1-4-4-n-intro',
      type: 'text',
      content: `## The Most Concentrated Form

Poetry is language at its most intense. Where prose uses many words, poetry distills meaning into few. Every word must earn its place. Every sound matters. Even the white space on the page - the silences and pauses - carries meaning.

Many people find poetry intimidating. They worry about not getting it, about missing the point, about feeling stupid. But here is a secret: even experienced readers sometimes struggle with poems. That is part of the point. Poetry invites us into mystery, into complexity, into meanings that cannot be fully captured in plain explanation.

The goal of poetry analysis is not to solve the poem like a puzzle with one correct answer. It is to engage more deeply, to notice more, to experience the poem more fully. In this chapter, we will develop tools for that engagement - ways of reading that open up what poems can offer.`,
    },
    {
      id: 'engelsk-vg1-4-4-n-section1',
      type: 'text',
      content: `## Sound: The Music of Poetry

Poetry began as an oral art - songs and recitations passed down through memory. Even today, the sounds of poetry are essential to its effect. You must read poetry aloud to fully experience it.

Rhyme is perhaps the most obvious sound device. End rhyme places rhyming words at line endings: "day" and "way," "love" and "above." But rhyme can also occur within lines (internal rhyme) or be approximate rather than perfect (slant rhyme: "love" and "move").

Rhythm creates patterns of stressed and unstressed syllables. In formal poetry, these patterns follow regular meters. Iambic pentameter - five sets of unstressed-stressed pairs - has been the dominant meter in English poetry for centuries: "Shall I comPARE thee TO a SUMmer's DAY?" Each da-DUM is called an iamb; five of them make pentameter.

Other meters exist: trochees (DUM-da), anapests (da-da-DUM), dactyls (DUM-da-da). But many modern poems use free verse, without regular meter. This does not mean they lack rhythm - the poet still shapes the flow of syllables, just without following a fixed pattern.

Alliteration repeats consonant sounds at word beginnings: "Peter Piper picked." Assonance repeats vowel sounds: "the rain in Spain." Consonance repeats consonant sounds anywhere in words: "stroke of luck." These sound devices create music and emphasis.

Onomatopoeia uses words that sound like their meanings: buzz, crash, murmur. This brings language closer to the physical world it describes.

When reading a poem, listen. What sounds repeat? What rhythms emerge? How do the sounds support the meaning?`,
    },
    {
      id: 'engelsk-vg1-4-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is iambic pentameter?',
        options: [
          { id: 'a', text: 'Five stressed syllables in a row', isCorrect: false },
          { id: 'b', text: 'Five sets of unstressed-stressed syllables per line', isCorrect: true },
          { id: 'c', text: 'A poem with five lines', isCorrect: false },
          { id: 'd', text: 'A rhyme scheme with five rhymes', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Iambic pentameter has five iambs (unstressed-stressed pairs) per line, creating ten syllables with a da-DUM rhythm. It is the most common meter in English poetry, used by Shakespeare and many others.',
      },
    },
    {
      id: 'engelsk-vg1-4-4-n-section2',
      type: 'text',
      content: `## Form and Structure

Poetry comes in many shapes. Some follow strict traditional forms; others create their own structures. Understanding form helps you see how poets work within and against conventions.

The sonnet is one of the most famous forms - 14 lines in iambic pentameter. The Shakespearean sonnet has three quatrains (four-line groups) and a couplet, rhyming ABAB CDCD EFEF GG. The Petrarchan sonnet divides into an octave (eight lines) and sestet (six lines). Both forms traditionally develop an argument or work through a problem.

The haiku, from Japanese tradition, captures a moment in just 17 syllables arranged in three lines of 5-7-5. Despite its brevity, a haiku can evoke complex feelings and insights, often through images from nature.

Ballads are narrative poems, often set to music, typically using quatrains with an ABAB or ABCB rhyme scheme. They tell stories - often of love, death, or adventure.

Free verse abandons regular meter and rhyme. This does not mean anything goes - free verse poems still have shape and structure, but the poet creates it fresh rather than following a preset pattern.

Line breaks in poetry are meaningful. Where a poet ends a line affects rhythm, emphasis, and meaning. A line that breaks mid-phrase (enjambment) creates tension and forward momentum. A line that ends with punctuation (end-stopped) provides pause and completion.

Stanza breaks create larger structural units. They can work like paragraphs, separating different stages of thought or feeling. Or they can create visual patterns on the page.

When analyzing form, ask: What structure does this poem use? How does form relate to content? What effects do line breaks and stanza breaks create?`,
    },
    {
      id: 'engelsk-vg1-4-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What is enjambment?',
        options: [
          { id: 'a', text: 'A type of rhyme scheme', isCorrect: false },
          { id: 'b', text: 'When a line breaks in the middle of a phrase', isCorrect: true },
          { id: 'c', text: 'A poem without regular meter', isCorrect: false },
          { id: 'd', text: 'The final two lines of a sonnet', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Enjambment occurs when a sentence or phrase continues past the line break into the next line. This creates tension and forward momentum, as readers rush ahead to complete the thought. End-stopped lines, in contrast, pause at line endings.',
      },
    },
    {
      id: 'engelsk-vg1-4-4-n-section3',
      type: 'text',
      content: `## Imagery and Figurative Language

Poetry makes us see, hear, feel, taste, and smell through language. Imagery is the heart of this sensory experience.

Visual imagery dominates much poetry - descriptions that create pictures in the mind. But the best poets engage all senses. Auditory imagery makes us hear: "the whispering wind." Tactile imagery makes us feel: "rough bark beneath my fingers." Olfactory imagery evokes smell: "bread baking, cinnamon rising." Gustatory imagery suggests taste: "bitter coffee on my tongue."

Concrete, specific images have more power than abstract generalizations. "A red wheelbarrow glazed with rain water beside the white chickens" creates a vivid picture that abstractions like "rural beauty" cannot match.

Figurative language - the metaphors, similes, and personification we explored earlier - becomes especially concentrated in poetry. A single metaphor might govern an entire poem. Images might connect and build patterns through a work.

Symbols carry weight in poetry. A rose might be just a flower - or it might represent love, beauty, mortality, or England itself. Context determines meaning. Repeated images often gather symbolic significance as a poem develops.

When reading poetry, pay attention to what you experience through your senses. What images does the poem create? How do they work together? What do they suggest beyond their literal meanings?`,
    },
    {
      id: 'engelsk-vg1-4-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why are concrete, specific images more effective than abstract generalizations in poetry?',
        options: [
          { id: 'a', text: 'They are easier to write', isCorrect: false },
          { id: 'b', text: 'They create vivid sensory experiences for readers', isCorrect: true },
          { id: 'c', text: 'They follow traditional rules better', isCorrect: false },
          { id: 'd', text: 'They are shorter', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Concrete images engage our senses and imaginations in ways that abstractions cannot. "Glazed with rain water" makes us see something specific. "Natural beauty" remains vague. Good poetry shows rather than tells.',
      },
    },
    {
      id: 'engelsk-vg1-4-4-n-section4',
      type: 'text',
      content: `## Voice and Tone

Every poem has a speaker - not necessarily the poet, but a voice that speaks the poem. Understanding this voice is crucial to interpretation.

Sometimes the speaker is clearly a character, different from the poet. A dramatic monologue presents a speaker revealing their character through what they say. Robert Browning's "My Last Duchess" has a duke inadvertently revealing his murderous nature while describing a painting. The poet creates the speaker; the speaker creates the poem.

Other times the speaker seems closer to the poet's own voice, sharing personal experiences and feelings. Even here, we should be careful about assuming speaker and poet are identical - poetry shapes and transforms experience.

Tone is the speaker's attitude toward the subject, themselves, and the reader. Tone might be playful, serious, ironic, angry, mournful, celebratory, meditative, or any of countless other possibilities. Often tone shifts within a poem, marking changes in thought or feeling.

Word choice reveals tone. Formal diction creates different effects than colloquial language. A word's connotations - its emotional associations - matter as much as its denotation - its dictionary meaning. "House" and "home" denote similar things but connote very differently.

When analyzing voice and tone, ask: Who is speaking? What is their relationship to the subject? What attitude do they express? How does word choice create tone?`,
    },
    {
      id: 'engelsk-vg1-4-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the difference between a poem\'s speaker and its author?',
        options: [
          { id: 'a', text: 'There is no difference', isCorrect: false },
          { id: 'b', text: 'The speaker is the voice in the poem, which may differ from the author', isCorrect: true },
          { id: 'c', text: 'The speaker is always fictional', isCorrect: false },
          { id: 'd', text: 'The author reads the poem aloud', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The speaker is the voice in the poem - the "I" or perspective presented. This may be close to the poet\'s own voice or may be a created character quite different from the author. We should not automatically equate them.',
      },
    },
    {
      id: 'engelsk-vg1-4-4-n-section5',
      type: 'text',
      content: `## A Method for Reading Poetry

Now let us put everything together into a practical approach for engaging with poems.

First, read the poem through without stopping, just letting it wash over you. What is your initial response? What images stay with you? What feelings arise? This first impression matters - it tells you what the poem is doing before you start analyzing how.

Second, read again slowly, aloud if possible. Listen to the sounds. Notice where you pause, where you speed up. Mark anything that strikes you - images, words, phrases, sounds.

Third, look at form and structure. What kind of poem is this? How are lines and stanzas organized? Where do line breaks fall? What patterns emerge?

Fourth, examine the language closely. What images appear? What figurative language? What word choices stand out? How does sound support sense?

Fifth, consider voice and tone. Who is speaking? What attitude do they express? How does tone shift through the poem?

Sixth, think about meaning. What is this poem about - not just its subject but its themes? What insights does it offer? How do form and content work together?

Finally, respond personally. What does this poem mean to you? How does it connect to your experience, your questions, your world? Great poems invite us into dialogue.

Remember that poems reward multiple readings. Each time through, you notice something new. Patience and attention are your best tools.`,
    },
    {
      id: 'engelsk-vg1-4-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why should you read a poem aloud?',
        options: [
          { id: 'a', text: 'To memorize it faster', isCorrect: false },
          { id: 'b', text: 'To hear its sounds, rhythms, and music', isCorrect: true },
          { id: 'c', text: 'Because teachers require it', isCorrect: false },
          { id: 'd', text: 'To understand the vocabulary', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Poetry began as oral art, and sounds are essential to its effects. Reading aloud engages your ear, reveals rhythms, emphasizes sound patterns, and brings the poem to life in ways silent reading cannot.',
      },
    },
    {
      id: 'engelsk-vg1-4-4-n-summary',
      type: 'text',
      content: `## Summary: Entering the World of Poetry

You have learned how to engage with poetry more deeply. Here are the key concepts:

**Sound:**
Rhyme (end, internal, slant), rhythm and meter (iambic pentameter, etc.), alliteration, assonance, consonance, onomatopoeia. Read aloud to hear the music.

**Form:**
Sonnet (14 lines, various rhyme schemes), haiku (5-7-5 syllables), ballad (narrative, quatrains), free verse. Line breaks and stanza breaks shape meaning.

**Imagery:**
Visual, auditory, tactile, olfactory, gustatory. Concrete specifics over abstract generalizations. Symbols gather meaning through context.

**Voice and Tone:**
Speaker (not necessarily the poet), dramatic monologue, tone (attitude), diction and connotation.

**Key Terms:**
Meter, iambic pentameter, rhyme scheme, sonnet, haiku, free verse, enjambment, end-stopped, imagery, speaker, tone, connotation.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 4.5 NARRATIVE: Drama and Film Adaptation
// ============================================================================

export const CHAPTER_ENGELSK_VG1_4_5_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-4-5-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '4.5',
  title: 'Drama and Film Adaptation',
  subtitle: 'Narrative Version',
  description: 'Explore how stories transform from page to stage to screen, and what each medium offers.',
  estimatedMinutes: 40,
  competenceGoals: ['drøfte og reflektere over form, innhold og virkemidler i engelskspråklige kulturuttrykk fra ulike medier'],
  linkedChapterId: 'engelsk-vg1-4-5',
  content: [
    {
      id: 'engelsk-vg1-4-5-n-intro',
      type: 'text',
      content: `## Stories Across Media

A story can exist in many forms. A novel can become a play. A play can become a film. A film can inspire a novelization. Each transformation changes the story, because each medium has its own possibilities and limitations.

Understanding these different media helps you appreciate both what is preserved and what is changed when stories cross from one form to another. It also helps you understand what makes each medium unique - why some things work better on stage, others on screen, others on the page.

In this chapter, we will explore drama as a literary form and then examine how stories transform when adapted to film. Whether you are watching a Shakespeare production, analyzing a movie based on a book you love, or creating your own adaptations, these concepts will guide your thinking.`,
    },
    {
      id: 'engelsk-vg1-4-5-n-section1',
      type: 'text',
      content: `## Drama: Writing for Performance

A play is not complete on the page. The script is a blueprint for performance - a set of instructions for actors, directors, and designers to bring to life. When you read a play, you must imagine the performance.

The dramatic text consists primarily of dialogue - what characters say to each other. Unlike novels, plays cannot directly tell us what characters think. Everything must be externalized through speech and action. This is both a constraint and an opportunity - it forces drama toward immediate, present-tense experience.

Stage directions tell performers what to do: entrances and exits, movements, gestures, tone of voice. Some playwrights provide detailed directions; others give almost none, leaving interpretation open. Stage directions are not spoken aloud but shape how dialogue is delivered.

Dramatic speech takes several forms. Most dialogue is characters talking to each other. A monologue is a long speech by one character, while others remain present. A soliloquy is a character speaking thoughts aloud when alone on stage - a convention that lets us inside their mind. An aside is when a character speaks to the audience while other characters supposedly cannot hear.

These conventions are not realistic - people do not actually deliver soliloquies - but they have been accepted in theater for centuries. They solve the problem of externalizing inner life without a narrator.

When reading drama, try to stage it in your imagination. How do characters move? What do their voices sound like? What is the energy between them?`,
    },
    {
      id: 'engelsk-vg1-4-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is a soliloquy?',
        options: [
          { id: 'a', text: 'A conversation between two characters', isCorrect: false },
          { id: 'b', text: 'A character speaking thoughts aloud while alone on stage', isCorrect: true },
          { id: 'c', text: 'Written instructions for actors', isCorrect: false },
          { id: 'd', text: 'The final speech of a play', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A soliloquy is when a character speaks their thoughts aloud while alone on stage. This theatrical convention lets audiences inside a character\'s mind without a narrator. Famous examples include Hamlet\'s "To be or not to be."',
      },
    },
    {
      id: 'engelsk-vg1-4-5-n-section2',
      type: 'text',
      content: `## Dramatic Structure and Types

Plays are typically divided into acts and scenes. Acts are major divisions - a five-act structure was common in classical and Renaissance drama, while modern plays often use two or three acts. Scenes are smaller units within acts, often marked by changes in location or time.

Tragedy traditionally tells the story of a great person's fall due to some flaw or error. The protagonist faces increasingly dire consequences, leading to catastrophe - usually death. Despite the dark endings, tragedies can be deeply meaningful, exploring human dignity and limitation. Think of Hamlet, Othello, or Death of a Salesman.

Comedy traditionally ends happily, often with marriage or reconciliation. This does not mean comedies are always funny - the term refers more to the shape of the plot than to humor. Comedies often involve misunderstandings, disguises, and complications that work out in the end.

Tragicomedy mixes elements of both, perhaps beginning darkly but ending well, or mixing serious themes with comic treatment. Modern drama often blurs generic boundaries.

Dramatic irony is especially powerful in theater. When the audience knows something characters do not - that the person they are trusting will betray them, that the letter will not arrive in time - we watch with heightened tension. The gap between what we know and what characters know creates suspense and emotional intensity.

Comic relief provides lighter moments in serious plays, giving audiences a break from tension and often commenting on the main action through contrast.`,
    },
    {
      id: 'engelsk-vg1-4-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What defines a tragedy in dramatic terms?',
        options: [
          { id: 'a', text: 'A play that makes the audience cry', isCorrect: false },
          { id: 'b', text: 'A story of a protagonist\'s fall, usually ending in catastrophe', isCorrect: true },
          { id: 'c', text: 'Any serious play', isCorrect: false },
          { id: 'd', text: 'A play with no happy moments', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Tragedy follows a protagonist (often of high status) whose flaws or errors lead to their downfall and catastrophe, usually death. The form explores human dignity, limitation, and the consequences of choices.',
      },
    },
    {
      id: 'engelsk-vg1-4-5-n-section3',
      type: 'text',
      content: `## Film: The Visual Language

Film adds dimensions that stage cannot match. The camera sees selectively, guiding our attention in ways theater cannot.

Camera shots vary in distance. A close-up shows a face or detail, revealing emotion with intimacy. A medium shot shows figures from the waist up, suitable for conversation. A long shot establishes setting by showing full figures in environment. An extreme long shot might show tiny figures in vast landscape.

Camera angles affect perception. A low angle looking up at a character makes them seem powerful or threatening. A high angle looking down makes them seem vulnerable or diminished. Eye level creates neutrality and equality.

Camera movement adds dynamism. A pan rotates horizontally. A tilt rotates vertically. A tracking shot moves alongside action. A zoom changes apparent distance without moving the camera. A handheld camera creates urgency and realism.

Editing joins shots together. A cut instantly changes view. A dissolve gradually blends one image into another. A fade goes to or from black. Montage compresses time or develops theme through sequences of images. The rhythm of editing - fast cuts or long takes - creates very different effects.

Sound design includes dialogue, sound effects, and music. Diegetic sound exists within the story world - characters can hear it. Non-diegetic sound, like a musical score, is added for audience effect. Sound can establish setting, create mood, and guide emotional response.

When watching film, notice these techniques. How does the camera guide your attention? What does editing create?`,
    },
    {
      id: 'engelsk-vg1-4-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What effect does a low camera angle typically create?',
        options: [
          { id: 'a', text: 'It makes characters seem vulnerable', isCorrect: false },
          { id: 'b', text: 'It makes characters seem powerful or threatening', isCorrect: true },
          { id: 'c', text: 'It creates a neutral, objective view', isCorrect: false },
          { id: 'd', text: 'It shows the setting clearly', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Looking up at a character from below (low angle) tends to make them appear powerful, dominant, or threatening. Conversely, looking down from above (high angle) makes characters seem small or vulnerable. Filmmakers use angles deliberately.',
      },
    },
    {
      id: 'engelsk-vg1-4-5-n-section4',
      type: 'text',
      content: `## Adaptation: From Page to Screen

When a novel or play becomes a film, transformation is inevitable. What works in one medium may not work in another. Adaptation is not just reproduction but creative interpretation.

Some changes are practical necessities. A 400-page novel cannot fit into two hours. Subplots may be cut, characters combined, events compressed. Internal monologue must be externalized - through dialogue, voiceover, or visual means. Description becomes image.

Other changes are interpretive choices. A director decides which aspects to emphasize, what tone to strike, how to update or localize the material. Different adaptations of the same source can be remarkably different - compare various film versions of "Pride and Prejudice" or "Romeo and Juliet."

When comparing adaptations, avoid the trap of simple fidelity criticism - just asking whether the film is faithful to the book. More interesting questions emerge when you ask: What does the film preserve, and why? What does it change, and what effects do those changes create? What can film do that the source could not? What does film lose?

Both are works of art in their own right. A film can be excellent despite departing significantly from its source - or mediocre despite following it closely. Judge each work on its own terms.

Consider also how film conventions have changed over time. Early adaptations often stayed close to theatrical staging. Modern adaptations use the full range of cinematic techniques. What seemed impossible to adapt may become possible as the medium evolves.`,
    },
    {
      id: 'engelsk-vg1-4-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the best approach to comparing a film adaptation to its source material?',
        options: [
          { id: 'a', text: 'Judge only by how closely the film follows the book', isCorrect: false },
          { id: 'b', text: 'Ask what is preserved, what is changed, and what effects result', isCorrect: true },
          { id: 'c', text: 'Assume the book is always better', isCorrect: false },
          { id: 'd', text: 'Ignore the source material entirely', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Thoughtful comparison asks what each medium does well, what is preserved and changed, and what effects result. Both book and film are artworks in their own right. Fidelity alone is not the measure of quality.',
      },
    },
    {
      id: 'engelsk-vg1-4-5-n-section5',
      type: 'text',
      content: `## Becoming a Critical Viewer

Every day you watch video content - films, series, YouTube, TikTok. Developing critical viewing skills helps you understand how this content affects you and makes your viewing experience richer.

Start noticing techniques. When you watch something, pay attention to camera angles, shot types, editing, and sound. How are these choices creating effects? At first this might feel awkward, but it becomes natural with practice.

Think about what you do not see. Every shot is a choice about what to include and what to leave out. The camera always has a perspective. What is emphasized? What is hidden? Whose viewpoint are we invited to share?

Consider the economic and cultural context. Who made this? For whom? What values does it express or assume? What stories get told, and what stories do not? Being critical does not mean being negative - it means being thoughtful about consumption.

Connect form and content. How do the technical choices support the themes and story? A film about isolation might use long takes and sparse sound. A thriller might use rapid editing and close-ups. The how and the what work together.

Finally, continue enjoying what you watch. Critical viewing enhances pleasure by helping you appreciate craft. You can admire a brilliant piece of editing while still being moved by the story. Analysis and emotion are not opposites - they enrich each other.`,
    },
    {
      id: 'engelsk-vg1-4-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Does critical viewing reduce enjoyment of films?',
        options: [
          { id: 'a', text: 'Yes, analysis ruins the experience', isCorrect: false },
          { id: 'b', text: 'No, understanding craft can enhance appreciation', isCorrect: true },
          { id: 'c', text: 'Only for professional critics', isCorrect: false },
          { id: 'd', text: 'It depends on the genre', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Critical viewing enhances rather than diminishes pleasure. Understanding how films work helps you appreciate their craft and see details you would otherwise miss. Analysis and emotional engagement complement each other.',
      },
    },
    {
      id: 'engelsk-vg1-4-5-n-summary',
      type: 'text',
      content: `## Summary: Stories Across Media

You have explored drama and film adaptation. Here are the key concepts:

**Drama:**
Dialogue and stage directions. Monologue, soliloquy, aside. Acts and scenes. Tragedy (protagonist\'s fall) and comedy (happy resolution). Dramatic irony and comic relief.

**Film Techniques:**
Shots (close-up, medium, long, extreme long). Angles (low, high, eye level). Movement (pan, tilt, tracking, zoom). Editing (cut, dissolve, fade, montage). Sound (diegetic, non-diegetic, score).

**Adaptation:**
Transformation is inevitable between media. Ask what is preserved, changed, and why. Both source and adaptation are artworks in their own right. Fidelity is not the only measure.

**Critical Viewing:**
Notice techniques. Consider what is not shown. Think about context and values. Connect form and content. Analysis enhances appreciation.

**Key Terms:**
Dialogue, stage directions, soliloquy, aside, tragedy, comedy, dramatic irony, shot, angle, editing, montage, diegetic/non-diegetic sound, adaptation.`,
    },
  ],
  exercises: [],
};

// Export all chapters
export const ENGELSK_VG1_NARRATIV_DEL2_CHAPTERS = [
  CHAPTER_ENGELSK_VG1_3_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_3_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_3_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_3_4_NARRATIV,
  CHAPTER_ENGELSK_VG1_4_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_4_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_4_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_4_4_NARRATIV,
  CHAPTER_ENGELSK_VG1_4_5_NARRATIV,
];
