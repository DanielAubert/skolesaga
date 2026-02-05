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

Think of grammar as the architecture of language. Just as a building needs a solid foundation and a logical structure to stand tall, your sentences need grammatical frameworks to communicate clearly and effectively. At VG1 level, you have already learned the basics. Now it is time to refine your understanding and tackle the structures that separate good English from great English.

Why does this matter? Because grammar affects how professional you sound. It determines whether your ideas come across clearly or get lost in confusion. When you write an email to a future employer, submit an assignment at university, or simply want to express a complex thought, advanced grammar gives you the tools to do it well.

In this chapter, we will explore two crucial areas: the perfect tenses and conditional sentences. These are the structures that many learners find challenging, but once you understand how they work, they become powerful tools in your communication toolkit.`,
    },
    {
      id: 'engelsk-vg1-3-1-n-section1',
      type: 'text',
      content: `## Present Perfect vs Past Simple: A Tale of Two Tenses

Here is a puzzle for you: What is the difference between "I visited Paris" and "I have visited Paris"? Both sentences describe the same action - going to Paris. Yet they communicate something subtly different. Understanding this difference is one of the keys to sounding natural in English.

The past simple tense describes completed actions at a specific time in the past. When you say "I visited Paris last summer," you are placing that experience firmly in a finished moment. The time is specified, the action is done, and there is no particular connection to the present moment.

The present perfect, on the other hand, creates a bridge between the past and now. When you say "I have visited Paris three times," you are talking about your life experience up to this moment. The exact times do not matter - what matters is that this experience is part of who you are today.

Think of it this way: the past simple is like a photograph - it captures a moment that has passed. The present perfect is like a video that is still playing - the action started in the past but connects to now.

Signal words help you choose. Words like "yesterday," "last week," "in 2019," and "ago" point to past simple. Words like "already," "yet," "ever," "never," "recently," and "so far" signal present perfect. "Since" and "for" also typically go with present perfect when describing duration up to now.`,
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

Imagine you could describe not just what is happening, but what might happen, what would happen, and what would have happened if things had been different. This is the power of conditional sentences, and English has an elegant system for expressing all these possibilities.

Let us start with the zero conditional. This describes universal truths and scientific facts. If you heat water to 100 degrees Celsius, it boils. If you mix blue and yellow, you get green. The structure is simple: "if" plus present tense, then present tense. No uncertainty here - these things are simply true.

The first conditional moves us into the realm of real possibilities. If it rains tomorrow, we will cancel the picnic. If you study hard, you will pass the exam. You are talking about likely future events. The structure uses "if" plus present tense, then "will" plus infinitive.

Now things get interesting with the second conditional. This is for hypothetical situations - things that are unlikely or purely imaginary. If I won the lottery, I would travel the world. If I were you, I would apologize. Notice how we use past tense after "if," but we are not actually talking about the past. We are creating an imaginary present or future. And yes, "if I were" is correct even for "I" - this is the subjunctive mood, one of the last traces of this grammatical form in English.

The third conditional takes us into alternative histories. If I had studied harder, I would have passed. If she had left earlier, she would have caught the train. These are impossible because we cannot change the past. The structure is "if" plus past perfect, then "would have" plus past participle. You are imagining how things could have been different.`,
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

Life rarely fits into neat categories, and neither does language. Sometimes you need to mix conditional forms to express complex ideas. The most common mixed conditional connects a past condition to a present result.

Consider this: "If I had learned English as a child, I would speak it fluently now." The condition is in the past (learning as a child - using past perfect), but the result is in the present (speaking fluently now - using would plus infinitive). This makes sense because what happened in the past shapes what is true today.

You can also flip this around, though it is less common: "If I were braver, I would have spoken up yesterday." Here the condition is a general personality trait (present), but the result was in the past.

The key to using conditionals well is not memorizing rules but understanding what you want to express. Are you talking about general truths, likely possibilities, hypothetical situations, or impossible pasts? Once you know that, the structure follows naturally.

Practice by thinking about your own life. What would you do if you had a million dollars? What would have happened if you had made different choices? What will you do if you get the opportunity? Each question naturally calls for a different conditional.`,
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

Even advanced learners make predictable mistakes with tenses and conditionals. Let us look at the most common ones so you can avoid them.

With present perfect, the biggest error is mixing it with specific past time markers. "I have visited Paris yesterday" sounds wrong to native ears because "yesterday" demands past simple. If you mention when something happened, use past simple. If the time is unspecified or you are emphasizing the connection to now, use present perfect.

Another common mistake is using present perfect continuous where simple would be better, or vice versa. "I have been knowing her for years" is incorrect - "know" is a state verb that does not take continuous form. "I have known her for years" is correct.

With conditionals, learners often mix up the tense sequences. "If I would have money, I would buy a car" is incorrect - the "if" clause should use past simple: "If I had money, I would buy a car."

Some learners also use "would" in both clauses: "If I would study, I would pass." This is non-standard. The "if" clause typically does not take "would" in standard conditionals.

The subjunctive "were" trips people up too. While "If I was rich" is increasingly heard in casual speech, "If I were rich" remains the standard, especially in formal writing. When in doubt, use "were" for hypothetical conditions with all subjects.`,
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

Grammar is not about memorizing rules for a test and then forgetting them. It is about building a toolkit you can use for the rest of your life. Every time you write an email, have a conversation, or read a book in English, you are using these structures.

The key to mastery is practice and awareness. When you read English, notice how writers use tenses and conditionals. When you write, think about what you want to express and choose the appropriate form. When you speak, do not worry about perfection - focus on communication, and your accuracy will improve over time.

Here is a practical exercise: Take a piece of writing you have done recently and examine your use of tenses and conditionals. Did you use them correctly? Could you express certain ideas more precisely with different forms? This kind of self-editing is how good writers become great writers.

Remember that even native speakers make mistakes and disagree about certain usages. Language is alive and constantly evolving. What matters is that you understand the system well enough to make informed choices and communicate effectively.`,
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

You have now explored two essential areas of advanced English grammar. Here are the key takeaways:

**Present Perfect vs Past Simple:**
Use present perfect for experiences without specific times, situations continuing to now, and recent events with present relevance. Use past simple for completed actions at specific times in the past.

**Conditional Sentences:**
Zero conditional for facts, first conditional for likely futures, second conditional for hypotheticals, third conditional for unreal pasts. Mixed conditionals connect different time frames.

**Common Errors to Avoid:**
Do not mix present perfect with specific time markers. Do not use "would" in the "if" clause. Use "were" for subjunctive in formal writing.

**Key Terms:**
Present perfect, past simple, conditional, zero/first/second/third conditional, mixed conditional, subjunctive, signal words.`,
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

Have you ever read something so boring that your eyes glazed over, even though the topic was interesting? The problem often is not the content but the sentences. When every sentence follows the same pattern - subject, verb, object, subject, verb, object - the writing becomes monotonous. It is like listening to music with only one note.

Great writers understand that sentence variety creates rhythm. Short sentences punch. Longer sentences flow and carry the reader along, building momentum before arriving at their destination. Questions engage the reader directly. And sometimes, breaking the rules deliberately creates emphasis.

In this chapter, we will explore how to transform flat, repetitive writing into prose that sings. You will learn about different clause types, combining techniques, and how to vary your sentences for maximum impact. This is not just about following rules - it is about developing an ear for language.`,
    },
    {
      id: 'engelsk-vg1-3-2-n-section1',
      type: 'text',
      content: `## Understanding Clauses: The Building Blocks

Before we can combine sentences effectively, we need to understand what we are working with. Every sentence is built from clauses, and there are two main types you need to know.

An independent clause can stand alone as a complete sentence. It has a subject and a verb, and it expresses a complete thought. "The sun was shining" is an independent clause. "She laughed" is an independent clause. These are the strong, self-sufficient units of language.

A dependent clause, also called a subordinate clause, cannot stand alone. It needs an independent clause to complete its meaning. "Although the sun was shining" leaves us hanging - although the sun was shining, what? "When she laughed" creates anticipation - when she laughed, what happened? These clauses depend on others to make sense.

Dependent clauses come in three flavors. Adverbial clauses tell us about time, place, reason, or manner - they start with words like "although," "because," "when," "while," "if," and "unless." Relative clauses describe nouns - they use "who," "which," "that," "whose," and "where." Noun clauses act as nouns in a sentence - they begin with "that," "what," "whether," and "how."

Understanding these building blocks gives you the raw materials for constructing varied sentences.`,
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

With clauses as our building blocks, we can construct four types of sentences, each with its own character and use.

Simple sentences contain just one independent clause. "She smiled." "The rain fell heavily." "My grandmother bakes the best cookies in the world." Do not be fooled by the name - simple sentences can be long and detailed, as long as they have only one independent clause. Use them for emphasis and clarity.

Compound sentences join two or more independent clauses with a coordinating conjunction. Remember FANBOYS: For, And, Nor, But, Or, Yet, So. "The rain fell, but we went outside anyway." "She studied hard, so she passed the exam." These sentences show equal relationship between ideas.

Complex sentences combine an independent clause with one or more dependent clauses. "Although the rain fell heavily, we went outside." "The woman who lives next door is a doctor." "I knew that something was wrong." These sentences show unequal relationships, where one idea depends on or explains another.

Compound-complex sentences combine both - multiple independent clauses plus dependent clauses. "Although it was raining, we decided to go out, but we took our umbrellas." These sentences handle complex relationships between multiple ideas.

The magic happens when you mix these types intentionally. A paragraph of only simple sentences feels choppy. A paragraph of only complex sentences feels dense. But a paragraph that varies between them creates flow.`,
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

Now let us look at specific techniques for transforming choppy writing into flowing prose.

Coordinating conjunctions (FANBOYS) join equal ideas. "I was tired, so I went to bed early." "The food was delicious, but the service was slow." The comma before the conjunction is standard when joining two independent clauses.

Subordinating conjunctions create unequal relationships, showing which idea is more important. "Although I was tired, I finished my homework." "Because the food was delicious, we ordered more." The subordinate clause can come first or last, changing the emphasis.

Semicolons join closely related independent clauses without a conjunction. "The sunset was beautiful; I took a photograph." This suggests a close connection between the ideas - closer than a period would suggest, but not requiring a conjunction to explain the relationship.

Relative clauses embed one sentence inside another. Instead of "The teacher is retiring. The teacher taught me English," you write "The teacher who taught me English is retiring." The second idea becomes a description attached to the first.

Participle phrases compress information. "Exhausted from the journey, she fell asleep immediately." This is more elegant than "She was exhausted from the journey, so she fell asleep immediately." The participle phrase adds variety to your sentence openings.

Appositives rename or describe a noun. "My neighbor, a retired doctor, helped me." This technique packs extra information into a sentence without making it feel cluttered.`,
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

One of the quickest ways to improve your writing is to vary how you start sentences. Many writers unconsciously begin most sentences with the subject, creating monotony.

Consider this paragraph: "I woke up early. I made coffee. I checked my phone. I saw the news. I felt anxious."

Now compare: "Early that morning, I woke to the sound of rain. Coffee in hand, I reached for my phone. The news that greeted me sent a chill down my spine."

Both describe the same events, but the second version creates movement and interest. Here are some ways to vary your openings:

Start with an adverb or adverb phrase: "Suddenly, the lights went out." "Without warning, everything changed."

Start with a prepositional phrase: "In the distance, a wolf howled." "After the storm, we surveyed the damage."

Start with a participle phrase: "Hoping for the best, she opened the envelope." "Damaged by the flood, the old bridge had to be replaced."

Start with a dependent clause: "Although he tried his best, he could not solve the puzzle." "When the music stopped, everyone looked up."

Start with an infinitive phrase: "To understand the problem, we must first examine its history."

The key is conscious variation. Read your work aloud. If it sounds monotonous, look for opportunities to restructure some sentences.`,
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

Let us apply these principles to a real transformation. Here is a paragraph written with no sentence variety:

"The project was difficult. The deadline was tight. The team worked hard. They stayed late every night. They solved problem after problem. They finally finished on time. They felt proud of their achievement."

Now watch how combining techniques and varying structures transforms it:

"Although the project was difficult and the deadline tight, the team rose to the challenge. Night after night, they stayed late, solving problem after problem with determination. When they finally finished on time, a wave of pride washed over them - they had achieved the impossible."

Notice how the rewritten version:
- Combines related ideas into complex and compound sentences
- Varies sentence length (long, medium, long with a dash)
- Uses different openings (subordinate clause, prepositional phrase, time clause)
- Creates rhythm and builds toward a satisfying conclusion

This is the power of sentence variety. Same information, completely different reading experience.

As you write, do not worry about variety in your first draft. Get your ideas down first. But when you revise, read aloud and listen for monotony. Where does it feel choppy? Where does it feel dense? Then apply these techniques to create flow.`,
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

You have now learned how to transform flat writing into engaging prose. Here are the key points:

**Clause Types:**
Independent clauses stand alone; dependent clauses need support. Dependent clauses include adverbial, relative, and noun clauses.

**Sentence Types:**
Simple (one independent clause), compound (multiple independent clauses), complex (independent plus dependent), compound-complex (both).

**Combining Techniques:**
FANBOYS conjunctions, subordinating conjunctions, semicolons, relative clauses, participle phrases, and appositives.

**Varying Openings:**
Start with adverbs, prepositional phrases, participle phrases, dependent clauses, or infinitive phrases - not just the subject.

**Key Terms:**
Independent clause, dependent clause, simple sentence, compound sentence, complex sentence, compound-complex sentence, coordinating conjunction, subordinating conjunction, participle phrase, appositive.`,
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

You have probably read texts that feel effortless - where ideas flow naturally from one to the next, and you never feel lost or confused. You have probably also read texts that feel like a bumpy ride - where you keep having to re-read sentences and wonder how one paragraph connects to the next.

The difference is not just about the ideas themselves. It is about coherence and cohesion - the invisible threads that hold a text together.

Think of coherence as the big picture. A coherent text makes sense as a whole. The ideas are organized logically, each paragraph has a clear purpose, and everything connects to the central point. If coherence is the architectural plan, cohesion is the mortar between the bricks.

Cohesion refers to the specific linguistic devices that link sentences and paragraphs. It is the "therefore" that signals a conclusion, the "however" that introduces a contrast, the "she" that refers back to a person mentioned earlier. These small words and phrases guide readers through your text.

In this chapter, we will explore both concepts and give you practical tools for creating texts that flow.`,
    },
    {
      id: 'engelsk-vg1-3-3-n-section1',
      type: 'text',
      content: `## The Art of Reference

One of the most basic cohesive devices is reference - using pronouns and demonstratives to point back to something already mentioned. This seems simple, but doing it well requires care.

Consider this: "The scientist presented her findings. She had spent years on the research." The pronoun "she" clearly refers back to "the scientist," creating a smooth connection. But now consider: "The scientist and the journalist discussed the findings. She had spent years on the research." Here, "she" is ambiguous - it could refer to either person.

Pronouns (he, she, it, they) are powerful when the reference is clear. When there are multiple possible referents, either repeat the noun or restructure the sentence.

Demonstratives (this, that, these, those) point to things nearby or further away in the text. "This" often refers to something just mentioned: "The company announced layoffs. This news shocked employees." "That" can refer to something mentioned earlier or create emotional distance.

The demonstrative "this" followed by a summary noun is particularly useful: "Students are spending more time on screens. This trend concerns educators." By using "this trend," you summarize what came before and move the discussion forward.

Be careful with vague "this" - writing "This is problematic" without specifying what "this" refers to leaves readers guessing.`,
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

Linking words and phrases - also called discourse markers or transitions - are the signposts that guide readers through your text. They signal how ideas relate to each other.

For addition, you have: also, furthermore, moreover, in addition, besides. These tell readers "here is more of the same kind of information." "The study found health benefits. Furthermore, participants reported improved mood."

For contrast, you have: however, nevertheless, on the other hand, although, yet, but. These signal "now for a different perspective." "The plan seemed perfect. However, several obstacles emerged."

For cause and effect, you have: therefore, consequently, as a result, because, since, thus. These show logical relationships. "The economy declined. Consequently, unemployment rose."

For examples, you have: for example, for instance, such as, including, namely. These introduce specific cases. "Many factors contribute to success, such as hard work and timing."

For sequence, you have: first, then, next, finally, subsequently, meanwhile. These organize information in time or logical order. "First, gather your materials. Then, prepare the workspace."

For summary, you have: in conclusion, to summarize, overall, in short. These signal you are wrapping up. "In conclusion, the evidence supports the original hypothesis."

Choose linking words carefully - they carry meaning. "However" is stronger than "but." "Furthermore" is more formal than "also." Match the tone to your text.`,
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

Beyond pronouns and linking words, cohesion also comes from the words themselves. Lexical cohesion refers to connections created through vocabulary choices.

Repetition is the simplest form. Repeating a key term keeps readers focused on the main topic. But too much repetition becomes tiresome, so skilled writers use synonyms and related words to create variety while maintaining focus.

Consider: "Climate change threatens ecosystems worldwide. Global warming has accelerated in recent decades. This environmental crisis requires urgent action." Three sentences, three ways of referring to the same concept: climate change, global warming, environmental crisis. This creates variety without losing focus.

Collocation - words that naturally go together - also creates cohesion. If you mention "crime," words like "punishment," "law," "justice," and "court" feel naturally connected. If you write about "education," words like "learning," "students," "teachers," and "knowledge" belong to the same semantic field.

This web of related words creates a sense of unity. Your text feels like it is about one thing, even when you use different words.

Superordinates (general terms) and hyponyms (specific terms) help vary your language too. After mentioning "roses, tulips, and daffodils," you can refer back to them as "these flowers." After discussing "cars, buses, and trains," you can write "these vehicles" or "public and private transport."`,
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

Cohesive devices work at the sentence level, but coherence operates at higher levels - the paragraph and the whole text. A coherent paragraph has a clear focus and logical organization.

Most paragraphs in academic and professional writing follow a common pattern. They begin with a topic sentence that states the main idea. The body sentences develop this idea with evidence, examples, or explanation. A concluding sentence may summarize or transition to the next paragraph.

Consider this paragraph: "Social media has transformed how people communicate. Platforms like Facebook and Instagram allow instant connection across distances. Users can share updates, photos, and videos with hundreds of friends simultaneously. This constant connectivity has fundamentally changed social relationships."

The topic sentence establishes the focus: social media and communication. Each body sentence develops this idea with specifics. The final sentence draws a conclusion. The paragraph is coherent because everything relates to the main point.

Incoherent paragraphs often suffer from these problems: no clear topic sentence, ideas that do not relate to each other, random jumping between topics, or missing logical connections. Always ask yourself: What is this paragraph about? Does every sentence contribute to that point?

Between paragraphs, transitions maintain flow. The end of one paragraph can set up the next, or the beginning of a new paragraph can refer back. "Having examined the benefits, we must now consider the drawbacks." This sentence bridges two paragraphs smoothly.`,
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

The best way to improve is through practice and awareness. Here are strategies you can use.

When you read, notice cohesive devices. How does the writer connect sentences? What linking words appear? How are pronouns used? How does vocabulary create unity? Analyzing good writing helps you internalize these patterns.

When you write, focus on ideas first. Get your content down without worrying too much about polish. Then, in revision, check for coherence and cohesion.

For coherence, ask: Does my text make sense as a whole? Does each paragraph have a clear purpose? Is the overall organization logical? Can a reader follow my argument?

For cohesion, check: Are pronoun references clear? Have I used appropriate linking words? Is there variety in how I refer to key concepts? Do sentences connect smoothly to each other?

Read your work aloud. Your ear often catches problems your eye misses. Where do you stumble? Where does the flow break down? Those are spots to revise.

Finally, get feedback. Other readers can tell you where they got lost or confused. Their perspective reveals weaknesses you might not notice yourself.

Remember: coherence and cohesion are not about following rigid rules. They are about helping your reader. Every device, every link, every transition should serve the goal of clear communication.`,
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

You have learned how to create texts that flow. Here are the key concepts:

**Coherence:**
The overall sense that a text is logically organized and makes sense as a whole. Each paragraph serves a purpose, and ideas connect to the central point.

**Cohesive Devices:**
Reference (pronouns, demonstratives), linking words (addition, contrast, cause/effect, example, sequence, summary), and lexical cohesion (synonyms, related words, repetition).

**Paragraph Structure:**
Topic sentence stating the main idea, body sentences developing it, concluding sentence summarizing or transitioning.

**Revision Strategy:**
Write for content first, then check for coherence and cohesion in revision. Read aloud and get feedback.

**Key Terms:**
Coherence, cohesion, reference, linking words, discourse markers, lexical cohesion, topic sentence, transition.`,
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

Here is a secret that most beginning writers do not know: professional writers are not better at first drafts. They are better at revision. Ernest Hemingway reportedly rewrote the ending of "A Farewell to Arms" 39 times before he was satisfied. When asked what the problem was, he said, "Getting the words right."

This might seem discouraging at first - even great writers struggle! But it is actually liberating. It means you do not have to get everything perfect on the first try. Your first draft is just raw material. The real magic happens when you revise.

Revision is not just about fixing typos. It is about seeing your work with fresh eyes, questioning your choices, and making your writing as clear and effective as possible. In this chapter, we will explore a systematic approach to revision that will transform how you write.`,
    },
    {
      id: 'engelsk-vg1-3-4-n-section1',
      type: 'text',
      content: `## The Four Levels of Revision

Effective revision works from big picture to small details. Think of it as zooming in on a photograph - you start by looking at the whole composition, then examine individual elements, then check the fine details.

At the content level, you ask the big questions. Does my text achieve its purpose? Have I included all necessary information? Is my argument convincing? Is anything missing or unnecessary? This is not the time to fix commas - you might delete whole paragraphs or add new sections.

At the structure level, you examine organization. Does the text flow logically? Are paragraphs in the best order? Does each paragraph have a clear purpose? Are transitions smooth? Sometimes good content is undermined by poor organization, and restructuring can transform a confusing text into a compelling one.

At the sentence level, you look at clarity and style. Are sentences clear and easy to understand? Is there variety in sentence structure? Can any sentences be combined or broken up? Are there any awkward phrases? This is where the sentence techniques we learned earlier come into play.

At the word level, you finally zoom in on details. Is the vocabulary precise? Are there spelling or punctuation errors? Are grammar rules followed? Is the tone consistent? This is the polishing stage.

The key is working through these levels in order. There is no point perfecting a sentence you might later delete.`,
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

When you sit down to revise, having a clear strategy helps. ARMS is a simple framework that reminds you of your four main options for any piece of text.

A is for Add. What is missing? Have you provided enough evidence for your claims? Are there gaps in your explanation? Would an example make something clearer? Adding does not mean making text longer for its own sake - it means including what is necessary.

R is for Remove. What is unnecessary? Are there redundant sentences? Do you repeat points? Is there information that does not serve your purpose? Many writers are reluctant to cut text they have written, but removing clutter often strengthens writing dramatically. When in doubt, cut it out.

M is for Move. Is everything in the right place? Would a paragraph work better earlier or later? Should the order of sentences change? Sometimes text is fine but just in the wrong location. Moving elements can transform a confusing argument into a clear one.

S is for Substitute. What could be better? Is there a more precise word? A clearer phrasing? A stronger example? Substitution is about replacing something okay with something good, or something good with something excellent.

Going through ARMS for each paragraph gives you a systematic way to improve your text.`,
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

While big-picture revision is crucial, you also need to catch errors at the sentence and word level. Certain mistakes are particularly common among English learners, and knowing what to look for helps you find them.

Subject-verb agreement trips many writers up, especially with complex subjects. "The group of students are" is wrong because "group" is the subject, not "students." "The students, along with their teacher, are" is correct because "students" is the subject. Always identify the true subject.

Pronoun reference becomes problematic when it is unclear what a pronoun refers to. "When John met Peter, he was happy" - who was happy? Rewrite for clarity: "When John met Peter, John was delighted to see his old friend."

Tense consistency means maintaining the same tense unless you have a reason to shift. "She walked into the room and says hello" jarringly jumps from past to present. Stay in past: "She walked into the room and said hello."

Run-on sentences occur when two independent clauses are joined without proper punctuation or conjunction. "I went home I was tired" needs fixing: "I went home because I was tired" or "I went home; I was tired."

Comma splices happen when only a comma joins two independent clauses. "It was late, we went home" should be "It was late, so we went home" or "It was late; we went home."

Apostrophe errors are surprisingly common. "Its" is possessive, "it's" means "it is." "Your" is possessive, "you're" means "you are." Check each one.`,
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

Beyond knowing what to look for, you need techniques for actually finding problems. Here are strategies that work.

Take a break before revising. Fresh eyes see what tired eyes miss. If possible, let your text sit for a day before revising. Even a few hours helps. You will be amazed at what you notice when you return.

Read aloud. Your ear catches problems your eye skips over. Where do you stumble? Where do you run out of breath? Where does something sound wrong? Those are spots that need work.

Read backwards for proofreading. Start at the last sentence and work toward the beginning. This breaks the flow and helps you see each sentence individually, making it easier to catch errors.

Use a checklist. Create your own list of errors you commonly make, and check for each one specifically. If you know you struggle with comma splices, do a pass looking only for those.

Get feedback. Another reader brings a fresh perspective. They can tell you where they got confused, where the argument was weak, where they stopped paying attention. This information is gold.

Use tools wisely. Spell checkers and grammar checkers catch some errors, but they also miss many and sometimes suggest wrong corrections. Use them as a starting point, not a final authority.

Track your patterns. Keep notes on what errors you often make. Over time, you will eliminate them from your writing naturally.`,
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

Revision is a skill that improves with practice. The more you revise, the better you become at seeing your own writing clearly - and the better your first drafts become too.

Start by accepting that revision is a normal part of writing, not a sign of failure. Even experienced writers revise extensively. The difference is they have learned to enjoy the process of making their writing better.

Build revision into your timeline. Do not leave assignments until the last minute if you want to produce quality work. Writing the night before leaves no time for revision. Aim to finish drafts early enough that you can take a break and return with fresh eyes.

Develop your own revision process. Maybe you like to print out and mark up paper copies. Maybe you prefer on-screen editing. Maybe you revise in stages over several days. Experiment to find what works for you.

Reflect on your revision. After finishing a piece of writing, look back at the changes you made. What patterns do you notice? What kinds of errors did you catch? What did feedback reveal? This reflection helps you grow as a writer.

Finally, remember that revision is not endless. At some point, you need to consider a text done and move on. Perfectionism can be paralyzing. Set a reasonable standard - clear, correct, and effective - and aim for that.`,
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

You have learned how to transform rough drafts into polished writing. Here are the key points:

**Four Levels of Revision:**
Content (is everything necessary there?), structure (is organization logical?), sentences (are they clear and varied?), words (are they correct and precise?). Work from big picture to details.

**The ARMS Strategy:**
Add what is missing, Remove what is unnecessary, Move what is misplaced, Substitute what could be better.

**Common Errors:**
Subject-verb agreement, unclear pronoun reference, tense inconsistency, run-on sentences, comma splices, apostrophe errors.

**Revision Techniques:**
Take a break, read aloud, read backwards, use a checklist, get feedback, use tools wisely, track patterns.

**Key Terms:**
Revision, editing, proofreading, subject-verb agreement, pronoun reference, tense consistency, run-on sentence, comma splice.`,
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

When you read a powerful piece of writing - a poem that moves you, a novel that transports you, a speech that inspires you - something is happening beyond the literal meaning of the words. Writers are using tools, carefully chosen techniques that create effects on readers. These are literary devices.

Understanding literary devices does two things for you. First, it deepens your appreciation of literature. When you can see how a writer achieves an effect, you can appreciate the craft behind the art. Second, it improves your own writing. These tools are not just for famous authors - they are available to everyone who wants to write more effectively.

In this chapter, we will explore the most important literary devices, from figurative language that paints pictures with words to structural techniques that create suspense and meaning. You will learn to see these devices in the texts you read and to use them in the texts you write.`,
    },
    {
      id: 'engelsk-vg1-4-1-n-section1',
      type: 'text',
      content: `## Figurative Language: Painting Pictures with Words

Figurative language uses words in non-literal ways to create vivid images and connections. When you say someone has "a heart of gold," you do not mean their heart is literally made of gold - you mean they are kind and generous. This is the power of figurative language.

A simile makes a comparison using "like" or "as." "Her smile was like sunshine" connects two different things - a smile and sunshine - highlighting the warmth and brightness of the smile. Similes keep the comparison explicit: you know two things are being compared because the linking word is right there.

A metaphor makes a direct comparison without "like" or "as." "Life is a journey" states that life IS a journey, making the comparison more forceful. Metaphors can be brief or extended through an entire text. When you describe someone "navigating obstacles" and "reaching destinations," you are extending the journey metaphor.

Personification gives human qualities to non-human things. "The wind whispered through the trees" makes the wind seem alive, creating atmosphere and sometimes suggesting emotional states. Nature often becomes a character through personification.

Hyperbole is deliberate exaggeration for effect. "I have told you a million times" does not literally mean a million - it emphasizes frustration. We use hyperbole constantly in everyday speech without thinking about it.

Understatement is the opposite - deliberately downplaying something. If someone survives a plane crash with minor injuries and says "that was inconvenient," the understatement creates a particular effect, often humorous or ironic.

An oxymoron puts contradictory terms together: "deafening silence," "bitter sweet," "living dead." The contradiction creates tension and makes us think about how both qualities could coexist.`,
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

Irony is one of the most powerful and complex literary devices. It involves a contrast between what is expected and what actually happens, or between what is said and what is meant.

Verbal irony is saying the opposite of what you mean. If you step outside into pouring rain and say "What lovely weather," you are using verbal irony. Sarcasm is a form of verbal irony, though irony does not always carry sarcasm's mocking tone.

Situational irony occurs when events turn out contrary to expectations. A fire station burning down, a police station being robbed, a professional swimmer drowning - these are situationally ironic because we expect the opposite. Stories often use situational irony for surprise and thematic effect.

Dramatic irony is when the audience knows something that characters do not. In horror films, we often know the killer is hiding in the house while the character wanders in obliviously. This creates suspense and sometimes tragic effects - we watch characters make decisions we know will lead to disaster.

Irony is powerful because it creates layers of meaning. The surface level says one thing; the deeper level says another. Readers who catch the irony experience the text more richly than those who take everything literally.

Writers use irony to critique, to create humor, to add depth, and to make readers think. Once you start noticing irony, you will see it everywhere - in literature, in film, in everyday life.`,
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

Beyond individual phrases, writers use structural devices that work across scenes and chapters.

Foreshadowing hints at future events. "Little did she know this would be her last peaceful morning" tells readers something bad is coming. More subtle foreshadowing might use symbols, weather, or seemingly innocent details that gain significance later. Good foreshadowing creates tension and rewards careful readers.

Flashback interrupts chronological order to show earlier events. A character might remember their childhood, or a chapter might jump back in time. Flashbacks reveal backstory, explain motivation, and create contrasts between past and present.

Symbolism uses objects, colors, or actions to represent abstract ideas. A dove often symbolizes peace, darkness suggests evil or ignorance, spring represents new beginnings. Symbols work because we share cultural associations, though writers can also create new symbolic meanings within a text.

A motif is a recurring element with symbolic significance. If water imagery appears throughout a novel - rain, rivers, drowning, baptism - water is a motif that likely connects to themes of cleansing, change, or emotional states.

Juxtaposition places contrasting elements side by side for effect. Describing a luxury mansion next to a homeless encampment makes a point about inequality without stating it directly. The contrast does the work.

These structural devices work over longer stretches of text, creating patterns that reward attentive reading.`,
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

Language has a musical quality, and writers exploit this through sound devices. These are especially important in poetry but appear in all forms of writing.

Alliteration repeats consonant sounds at the beginning of nearby words. "Peter Piper picked a peck of pickled peppers" is an extreme example, but subtler alliteration appears everywhere. "The soft sound of summer" creates a gentle effect through the repeated s.

Assonance repeats vowel sounds. "The rain in Spain falls mainly on the plain" uses the long a sound. Assonance creates internal rhyme and musical quality even in prose.

Onomatopoeia uses words that sound like what they describe: buzz, crash, whisper, murmur, sizzle. These words make descriptions more vivid and immediate.

Rhythm and meter create patterns of stressed and unstressed syllables. Poetry often uses regular meter, but prose has rhythm too. Short, punchy sentences create a staccato rhythm. Long, flowing sentences create a different effect.

Repetition of words, phrases, or structures creates emphasis and rhythm. "I have a dream" repeated throughout Martin Luther King Jr.'s famous speech builds power with each occurrence. In writing, deliberate repetition is a choice; accidental repetition is a flaw.

These sound devices work on readers even when they do not consciously notice them. The music of language affects us below the surface.`,
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
