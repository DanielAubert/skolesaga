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
  description: 'Review and master advanced English grammar structures including verb tenses, conditionals, passive voice, and reported speech.',
  estimatedMinutes: 75,
  competenceGoals: ['bruke kunnskap om grammatikk og tekststruktur i arbeid med egne muntlige og skriftlige tekster'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-3-1-intro',
      type: 'text',
      content: `## Mastering English Grammar

Have you ever wondered why some people sound more polished and professional when they speak or write in English? The secret often lies in their command of grammar. At VG1 level, you have already learned the basics, but now it is time to refine your understanding and tackle more complex structures that will elevate your English to the next level.

Grammar is not just about following rules - it is about having the tools to express exactly what you mean. When you master advanced grammar, you can communicate subtle differences in meaning, time, and possibility. You can express hypothetical situations, report what others have said, and structure your ideas in sophisticated ways.

**Learning Objectives for This Chapter:**
After completing this chapter, you will be able to:
- Distinguish between Present Perfect and Past Simple with confidence
- Use all four types of conditional sentences correctly
- Transform active sentences into passive voice
- Report speech and thoughts accurately
- Identify and correct common grammatical errors

**Why Grammar Matters in the Real World:**
- **Academic Success:** University essays require precise grammatical control
- **Professional Communication:** Job applications and workplace emails must be error-free
- **Clear Expression:** Complex ideas require complex grammatical structures
- **Reading Comprehension:** Understanding grammar helps you interpret texts accurately
- **Confidence:** Knowing the rules gives you confidence to communicate

**Key Areas We Will Cover:**
1. Verb tenses and aspect (Perfect vs Simple)
2. Conditional sentences (Zero, First, Second, Third, and Mixed)
3. Passive voice and when to use it
4. Reported speech and thought
5. Common errors and how to avoid them`,
    },
    // --- TEORI 1: Verb Tenses ---
    {
      id: 'engelsk-vg1-3-1-def-1',
      type: 'definition',
      title: 'Tense Review: Perfect vs Simple',
      content: `**Understanding the Difference Between Present Perfect and Past Simple**

One of the most challenging distinctions for Norwegian speakers learning English is the difference between Present Perfect and Past Simple. In Norwegian, we often use the same form for both, but in English, these tenses communicate different meanings.

**Present Perfect (have/has + past participle)**

The Present Perfect connects the past to the present. Use it when:

1. **The action has a connection to now:**
   - "I have lived here for 5 years" (I still live here now)
   - "She has worked at the company since 2020" (She still works there)

2. **The time is unspecified or unimportant:**
   - "I have been to London" (sometime in my life, doesn't matter when)
   - "Have you ever tried sushi?" (at any point in your life)

3. **Recent events with current relevance:**
   - "She has broken her leg" (it's still broken now)
   - "I have just finished my homework" (I finished moments ago)

4. **Actions that may happen again:**
   - "I have visited Paris three times" (and might visit again)
   - "He has won several awards" (and might win more)

**Past Simple**

The Past Simple describes completed actions with no connection to the present. Use it when:

1. **The action is finished at a specific time:**
   - "I lived in Oslo in 2019" (I don't live there now)
   - "She graduated in June" (a completed event)

2. **The time is specified:**
   - "I went to London last year" (specific time mentioned)
   - "When did you arrive?" (asking about a specific time)

3. **Telling stories or sequences of events:**
   - "She broke her leg, went to hospital, and got a cast"
   - "I woke up, had breakfast, and left for school"

4. **Historical facts:**
   - "Shakespeare wrote Hamlet in 1600"
   - "The Vikings invaded England in 793"

**Key Signal Words:**

| Present Perfect | Past Simple |
|-----------------|-------------|
| already, yet | yesterday |
| ever, never | last week/month/year |
| recently, lately | in 2020, in June |
| so far, up to now | ago (two days ago) |
| since, for | when I was young |
| just | at that time |
| this week/month/year | that day |`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-3-1-example-1',
      type: 'example',
      title: 'Example: Choosing the Correct Tense',
      problem: 'Complete these sentences with the correct tense and explain your choice:\n\n1. I _______ (work) at this company for ten years.\n2. I _______ (work) at that company for ten years, but then I left.\n3. _______ you ever _______ (try) Norwegian brown cheese?\n4. I _______ (try) it when I visited Oslo last summer.',
      solution: `**Answers with Explanations:**

1. **I have worked at this company for ten years.**
   - Present Perfect because the action started in the past and continues to the present
   - The person still works there now
   - "For ten years" indicates duration up to now

2. **I worked at that company for ten years, but then I left.**
   - Past Simple because the action is completely finished
   - "But then I left" shows the situation ended
   - The person no longer works there

3. **Have you ever tried Norwegian brown cheese?**
   - Present Perfect because "ever" asks about experience at any time in life
   - The specific time doesn't matter
   - We're interested in the experience itself, not when it happened

4. **I tried it when I visited Oslo last summer.**
   - Past Simple because we have a specific time: "last summer"
   - The action is complete and finished
   - Both "tried" and "visited" are in Past Simple because they happened at the same specific time

**Common Mistakes to Avoid:**
- ❌ "I have seen him yesterday" (specific time = Past Simple)
- ✓ "I saw him yesterday"
- ❌ "Did you ever visit Paris?" (unspecified time = Present Perfect)
- ✓ "Have you ever visited Paris?"`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose the correct tense (Present Perfect or Past Simple) and explain why:',
        subTasks: [
          { label: 'a', task: 'I (have visited / visited) Paris three times in my life.', solution: 'have visited - This refers to life experience with unspecified times. The number of visits (three times) suggests this is a cumulative life experience that may continue. There is no specific time mentioned.' },
          { label: 'b', task: 'She (has moved / moved) to Bergen last month.', solution: 'moved - "Last month" is a specific past time, so we must use Past Simple. The time reference makes the action complete and anchored in the past.' },
          { label: 'c', task: 'We (have not finished / did not finish) the project yet.', solution: 'have not finished - "Yet" is a signal word for Present Perfect. It indicates the action connects to now (the project is still unfinished at the present moment).' },
          { label: 'd', task: 'The Vikings (have invaded / invaded) England in 793.', solution: 'invaded - This is a specific historical date (793 AD). Historical events with specific dates use Past Simple because they are complete, finished actions.' },
          { label: 'e', task: 'I (have known / knew) Maria since we were children.', solution: 'have known - "Since" indicates a period from a past point to now. I still know Maria, so the relationship continues to the present.' },
          { label: 'f', task: 'When (have you arrived / did you arrive)?', solution: 'did you arrive - Questions with "when" ask about specific time, which requires Past Simple. We expect a time-specific answer.' },
        ],
        solution: 'The key is identifying whether there is a connection to the present (Present Perfect) or a completed past action with specific time (Past Simple). Signal words help: "yet," "since," "ever" suggest Present Perfect; "last," "in + year," "when," "ago" suggest Past Simple.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write five sentences about your own life experiences. Use Present Perfect for three sentences and Past Simple for two. Make sure each sentence demonstrates correct usage.',
        hints: [
          'For Present Perfect, write about experiences without mentioning when they happened',
          'For Past Simple, include a specific time reference',
          'Think about: places you have visited, things you have learned, events from your past'
        ],
        solution: 'Example answers:\n\nPresent Perfect:\n1. I have visited Sweden several times. (life experience, unspecified when)\n2. I have never eaten snails. (never = at no time in my life)\n3. I have studied English for many years. (started in past, continues now)\n\nPast Simple:\n1. I started learning English when I was six years old. (specific time: age six)\n2. Last summer, I traveled to Spain with my family. (specific time: last summer)\n\nYour sentences should follow these patterns: Present Perfect for ongoing relevance or unspecified time; Past Simple for completed actions at specific times.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2: Conditionals ---
    {
      id: 'engelsk-vg1-3-1-def-2',
      type: 'definition',
      title: 'Conditional Sentences: Expressing Possibility and Hypotheticals',
      content: `**Understanding Conditional Sentences**

Conditional sentences express what happens (or would happen) under certain conditions. English has several types of conditionals, each expressing different degrees of possibility or reality.

**Zero Conditional (General Truths and Facts)**
Structure: If + present simple, present simple
Used for: Scientific facts, general truths, things that always happen

Examples:
- "If water reaches 100°C, it boils." (scientific fact)
- "If you mix blue and yellow, you get green." (always true)
- "If I eat too much, I feel sick." (personal general truth)

Note: You can use "when" instead of "if" with no change in meaning for zero conditionals.

**First Conditional (Real/Likely Future)**
Structure: If + present simple, will + infinitive
Used for: Possible future situations, predictions, promises, threats

Examples:
- "If it rains tomorrow, we will cancel the picnic." (possible situation)
- "If you study hard, you will pass the exam." (prediction/promise)
- "If you touch that, I will tell your mother." (threat/warning)

The condition is possible or likely to happen.

**Second Conditional (Unreal/Hypothetical Present or Future)**
Structure: If + past simple, would + infinitive
Used for: Imaginary situations, unlikely events, giving advice

Examples:
- "If I won the lottery, I would travel the world." (imaginary - I haven't won)
- "If I were you, I would study harder." (giving advice)
- "If I had more time, I would learn Japanese." (hypothetical - I don't have more time)

Note: Use "were" for all persons in formal English (If I were, If he were, If she were). "Was" is acceptable in informal speech.

**Third Conditional (Unreal Past)**
Structure: If + past perfect, would have + past participle
Used for: Imagining different past outcomes, expressing regret

Examples:
- "If I had studied harder, I would have passed the exam." (I didn't study hard, so I didn't pass)
- "If she had left earlier, she would have caught the train." (She didn't leave early, so she missed it)
- "If they had known, they would have helped." (They didn't know, so they didn't help)

These sentences describe situations that did NOT happen.

**Mixed Conditional (Past Condition, Present Result)**
Structure: If + past perfect, would + infinitive
Used for: When a past condition affects a present situation

Examples:
- "If I had learned English as a child, I would speak it fluently now." (I didn't learn it as a child, so I don't speak it fluently now)
- "If she had taken that job, she would be living in London now." (She didn't take the job, so she doesn't live in London)

**Summary Table:**

| Type | If-clause | Main clause | Use |
|------|-----------|-------------|-----|
| Zero | present | present | facts, always true |
| First | present | will + inf | likely future |
| Second | past | would + inf | unreal present/future |
| Third | past perfect | would have + pp | unreal past |
| Mixed | past perfect | would + inf | past cause, present effect |`,
    },
    // --- EKSEMPEL 2 ---
    {
      id: 'engelsk-vg1-3-1-example-2',
      type: 'example',
      title: 'Example: Identifying and Creating Conditionals',
      problem: 'Identify the type of conditional in each sentence and explain the situation:\n\n1. If I had a million dollars, I would buy a house.\n2. If you heat water to 100°C, it boils.\n3. If she had told me earlier, I would have helped her.\n4. If it rains, we will stay inside.\n5. If I had studied medicine, I would be a doctor now.',
      solution: `**Analysis of Each Conditional:**

1. **"If I had a million dollars, I would buy a house."**
   - Type: Second Conditional
   - Structure: If + past simple (had), would + infinitive (buy)
   - Situation: Hypothetical present - I don't have a million dollars, so I'm imagining what I would do if I did. This is an unreal present situation.

2. **"If you heat water to 100°C, it boils."**
   - Type: Zero Conditional
   - Structure: If + present simple (heat), present simple (boils)
   - Situation: Scientific fact - this always happens. It's a general truth about how the physical world works.

3. **"If she had told me earlier, I would have helped her."**
   - Type: Third Conditional
   - Structure: If + past perfect (had told), would have + past participle (helped)
   - Situation: Unreal past - She didn't tell me earlier (past), so I didn't help her (past). We're imagining a different past outcome.

4. **"If it rains, we will stay inside."**
   - Type: First Conditional
   - Structure: If + present simple (rains), will + infinitive (stay)
   - Situation: Real/possible future - It might rain tomorrow, and if it does, we have a plan. The rain is a genuine possibility.

5. **"If I had studied medicine, I would be a doctor now."**
   - Type: Mixed Conditional
   - Structure: If + past perfect (had studied), would + infinitive (be)
   - Situation: Past decision affecting present - I didn't study medicine in the past, so I'm not a doctor in the present. The past condition has a present result.

**Key Recognition Tips:**
- Look at the verb forms in both clauses
- Consider whether the situation is real, possible, or imaginary
- Think about the time frame: present, future, or past`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Complete these conditional sentences with the correct verb form. Identify which type of conditional each sentence is.',
        subTasks: [
          { label: 'a', task: 'If I (be) _______ you, I would apologize immediately.', solution: 'were - Second Conditional (hypothetical advice). We use "were" for all persons in the second conditional, especially in formal English.' },
          { label: 'b', task: 'If it rains this afternoon, we (cancel) _______ the outdoor event.', solution: 'will cancel - First Conditional (real future possibility). The rain is a genuine possibility that might affect our plans.' },
          { label: 'c', task: 'If she (study) _______ harder last semester, she would have passed the final exam.', solution: 'had studied - Third Conditional (unreal past). She didn\'t study hard, so she didn\'t pass. We\'re imagining a different past.' },
          { label: 'd', task: 'If you heat ice, it (melt) _______.', solution: 'melts - Zero Conditional (scientific fact). This is always true - ice always melts when heated.' },
          { label: 'e', task: 'If I (know) _______ about the meeting, I would have attended.', solution: 'had known - Third Conditional (unreal past). I didn\'t know about the meeting, so I didn\'t attend.' },
          { label: 'f', task: 'If he (take) _______ that job in 2020, he would be living in New York now.', solution: 'had taken - Mixed Conditional (past condition, present result). He didn\'t take the job, so he\'s not in New York now.' },
        ],
        solution: 'Understanding which conditional to use depends on:\n1. Is the situation real or imaginary?\n2. What time period are we discussing?\n3. What is the relationship between condition and result?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write your own conditional sentences for each situation described:',
        subTasks: [
          { label: 'a', task: 'A scientific fact about what happens when you combine certain chemicals or elements.', solution: 'Example: If you mix hydrogen and oxygen in the right proportions and add energy, you get water. (Zero Conditional - always true)' },
          { label: 'b', task: 'A likely plan for if the weather is good this weekend.', solution: 'Example: If the sun shines this weekend, I will go hiking in the mountains. (First Conditional - real future possibility)' },
          { label: 'c', task: 'Advice to a friend using "If I were you..."', solution: 'Example: If I were you, I would talk to the teacher about the problem. (Second Conditional - hypothetical advice)' },
          { label: 'd', task: 'A regret about something you didn\'t do in the past.', solution: 'Example: If I had started learning guitar earlier, I would have become better by now. (Third Conditional - unreal past, or Mixed if emphasizing present result)' },
        ],
        hints: ['Match the verb forms to the type of conditional', 'Think about whether the situation is real, possible, or imaginary'],
        solution: 'Your sentences should use the correct structure for each conditional type. Check that your verb forms match the patterns: Zero (present/present), First (present/will), Second (past/would), Third (past perfect/would have).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-3-1-summary',
      type: 'text',
      content: `## Summary: Key Points from This Chapter

**Present Perfect vs Past Simple**
- Present Perfect connects past to present: "I have lived here for 5 years"
- Past Simple is for completed past actions: "I lived there in 2019"
- Watch for signal words: "yet," "ever," "since" (Present Perfect) vs "yesterday," "last week," "ago" (Past Simple)

**Conditional Sentences**
- Zero Conditional: Facts and general truths (If + present, present)
- First Conditional: Real future possibilities (If + present, will + infinitive)
- Second Conditional: Hypothetical present/future (If + past, would + infinitive)
- Third Conditional: Unreal past (If + past perfect, would have + past participle)
- Mixed Conditional: Past condition with present result (If + past perfect, would + infinitive)

**Common Errors to Avoid:**
- Using Past Simple with unspecified time: ❌ "I visited Paris many times" ✓ "I have visited Paris many times"
- Using Present Perfect with specific past time: ❌ "I have seen him yesterday" ✓ "I saw him yesterday"
- Using "would" in the if-clause: ❌ "If I would have money" ✓ "If I had money"
- Mixing conditional types incorrectly: Be consistent with your time frame

**Tips for Mastery:**
1. Practice identifying signal words in texts
2. When unsure, ask: "Is this connected to now, or is it finished?"
3. For conditionals, identify whether the situation is real or imaginary first
4. Read extensively to internalize correct patterns
5. Check your own writing specifically for these structures`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'engelsk-vg1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Comprehensive Exercise: Read this short text and correct all the grammar errors related to tenses and conditionals.',
        subTasks: [
          { label: 'text', task: '"I have visited my grandmother last weekend. She told me that she has lived in that house since 50 years. If I would have known she was sick, I would visited her earlier. I have promised that if I will have time next month, I will come again. If I was her, I will move to a smaller apartment. She said that she has already considered it when she retired, but she has decided to stay."', solution: 'Corrected version: "I visited my grandmother last weekend. (Past Simple - specific time) She told me that she has lived in that house for 50 years. (Present Perfect with "for," not "since" + duration) If I had known she was sick, I would have visited her earlier. (Third Conditional - complete structure) I promised that if I have time next month, I will come again. (First Conditional - present in if-clause) If I were her, I would move to a smaller apartment. (Second Conditional - "were" and "would") She said that she had already considered it when she retired, but she decided to stay." (Reported speech - backshift to past perfect and past simple)' },
        ],
        hints: ['Look for: specific time markers with wrong tense, incomplete conditionals, wrong word in conditionals'],
        solution: 'This exercise combines tense choice and conditional formation. Key corrections: 1) "visited" (specific time), 2) "for 50 years" (duration), 3) "If I had known...would have visited" (Third Conditional), 4) "if I have time" (First Conditional), 5) "If I were...I would" (Second Conditional), 6) past tense for reported speech.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Creative Writing Task: Write a short paragraph (100-150 words) about "What would be different if you had made a different choice in the past?" Use at least one example of each: Present Perfect, Past Simple, Second Conditional, Third Conditional, and Mixed Conditional.',
        hints: [
          'Think about a real decision you made: school choice, hobby, friendship',
          'Describe what actually happened (Past Simple)',
          'Describe your current situation (Present Perfect)',
          'Imagine what would be different now (Mixed Conditional)',
          'Imagine what would have happened then (Third Conditional)',
          'Describe your current hypothetical wishes (Second Conditional)'
        ],
        solution: 'Example response:\n\n"Three years ago, I decided to focus on football instead of music. Since then, I have played on my school team and have won several local competitions (Present Perfect). I trained every day and gave up my piano lessons (Past Simple). If I had continued with music, I would have become a better pianist (Third Conditional). In fact, if I had chosen music, I would probably be preparing for a conservatory audition now (Mixed Conditional). Sometimes I wonder: if I had more time, I would take up piano again (Second Conditional). However, I have never regretted my choice because I have made great friends through football."\n\nYour paragraph should demonstrate understanding of when to use each tense and conditional type.',
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
  description: 'Learn to vary sentence structure for more engaging, sophisticated, and reader-friendly writing.',
  estimatedMinutes: 70,
  competenceGoals: ['bruke kunnskap om grammatikk og tekststruktur i arbeid med egne muntlige og skriftlige tekster'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-3-2-intro',
      type: 'text',
      content: `## Creating Varied Sentences: The Key to Engaging Writing

Have you ever started reading something and found yourself losing focus after just a few sentences? Often, the culprit is monotonous sentence structure. When every sentence follows the same pattern - subject, verb, object, period - the writing becomes predictable and dull, no matter how interesting the content might be.

Great writers understand that sentence variety is like music. Just as a song needs different notes, rhythms, and dynamics to be interesting, writing needs different sentence types, lengths, and structures to keep readers engaged.

**The Problem with Repetitive Structure:**
"I went to school. I saw my friends. We had lunch. We went to class. The class was boring. I went home."

Every sentence is short. Every sentence starts with a pronoun. Every sentence follows the same pattern. The effect is choppy and childish.

**Improved with Variety:**
"After arriving at school, I met up with my friends for lunch - a welcome break in the day. Although we enjoyed catching up, the afternoon class proved rather boring, and I was relieved when it finally ended."

The same information feels completely different. The writing flows, and the reader stays engaged.

**Learning Objectives for This Chapter:**
After completing this chapter, you will be able to:
- Identify and create different types of clauses
- Combine sentences using various techniques
- Vary sentence openings for better rhythm
- Adjust sentence length for effect
- Transform your writing from choppy to flowing

**Why Sentence Variety Matters:**
- **Reader Engagement:** Varied sentences keep readers interested
- **Sophistication:** Complex sentence structures demonstrate advanced language skills
- **Emphasis:** You can highlight important ideas through structure
- **Rhythm:** Good writing has a musical quality
- **Academic Success:** Examiners reward varied, sophisticated writing`,
    },
    // --- TEORI 1: Clause Types ---
    {
      id: 'engelsk-vg1-3-2-def-1',
      type: 'definition',
      title: 'Understanding Clause Types',
      content: `**What is a Clause?**

A clause is a group of words containing a subject and a verb. Understanding clause types is fundamental to creating sentence variety.

**Independent Clause (Main Clause):**
Can stand alone as a complete sentence. It expresses a complete thought.

Examples:
- "The sun was shining."
- "I finished my homework."
- "She loves reading novels."

**Dependent Clause (Subordinate Clause):**
Cannot stand alone as a sentence. It needs an independent clause to make sense.

Examples:
- "Although the sun was shining" (incomplete - what happened?)
- "When I finished my homework" (incomplete - then what?)
- "Because she loves reading novels" (incomplete - so what?)

**Complete sentences with both:**
- "Although the sun was shining, it was cold."
- "When I finished my homework, I went out to play."
- "Because she loves reading novels, she visits the library every week."

**Types of Dependent Clauses:**

**1. Adverbial Clause** (tells when, where, why, how, or under what condition)
Introduced by subordinating conjunctions:
- Time: when, while, before, after, since, until, as soon as
- Reason: because, since, as
- Contrast: although, though, even though, whereas, while
- Condition: if, unless, provided that, as long as
- Purpose: so that, in order that

Examples:
- "When the bell rang, we left the classroom." (when?)
- "Because it was raining, we stayed inside." (why?)
- "Although she studied hard, she failed the test." (contrast)

**2. Relative Clause** (describes or identifies a noun)
Introduced by relative pronouns: who, whom, whose, which, that, where, when

Examples:
- "The teacher who taught us English retired last year." (which teacher?)
- "The book that I read was fascinating." (which book?)
- "The city where I was born is very small." (which city?)

**Defining vs Non-defining Relative Clauses:**
- Defining (essential): "Students who work hard succeed." (only those who work hard)
- Non-defining (extra info): "My sister, who lives in Oslo, is a doctor." (I only have one sister)

**3. Noun Clause** (acts as a noun - subject or object)
Introduced by: that, what, whether, how, why, who, where, when

Examples:
- "What she said surprised everyone." (subject)
- "I know that you are right." (object)
- "Whether he will come is uncertain." (subject)`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-3-2-example-1',
      type: 'example',
      title: 'Example: Identifying Clause Types',
      problem: 'Identify the clauses in each sentence and their types:\n\n1. When the storm ended, we went outside to assess the damage.\n2. The book that you recommended was excellent.\n3. I believe that honesty is important.\n4. Although he was tired, he finished the race, which surprised everyone.',
      solution: `**Analysis of Each Sentence:**

**1. "When the storm ended, we went outside to assess the damage."**
- "When the storm ended" = Dependent clause (Adverbial - tells when)
  - Introduced by "when" (time subordinator)
- "we went outside to assess the damage" = Independent clause
  - This is the main action that can stand alone

**2. "The book that you recommended was excellent."**
- "The book was excellent" = Independent clause (main structure)
- "that you recommended" = Dependent clause (Relative - defines which book)
  - Introduced by "that" (relative pronoun)
  - This is a defining relative clause - essential information

**3. "I believe that honesty is important."**
- "I believe" = Independent clause (main clause)
- "that honesty is important" = Dependent clause (Noun clause - acts as object)
  - What do I believe? This clause answers that question
  - Functions as the object of "believe"

**4. "Although he was tired, he finished the race, which surprised everyone."**
- "Although he was tired" = Dependent clause (Adverbial - shows contrast)
- "he finished the race" = Independent clause (main action)
- "which surprised everyone" = Dependent clause (Relative - non-defining)
  - The comma before "which" shows this is extra, non-essential information
  - "Which" refers to the entire previous clause

**Key Recognition Tips:**
- Look for subordinating conjunctions (when, although, because, if)
- Look for relative pronouns (who, which, that)
- Ask: Can this stand alone? If not, it's dependent.`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the independent and dependent clauses in each sentence. State what type of dependent clause is used.',
        subTasks: [
          { label: 'a', task: 'Because the weather was terrible, the football match was cancelled.', solution: 'Dependent (Adverbial - reason): "Because the weather was terrible" | Independent: "the football match was cancelled"' },
          { label: 'b', task: 'The student who won the competition is from our school.', solution: 'Independent: "The student is from our school" | Dependent (Relative - defining): "who won the competition"' },
          { label: 'c', task: 'I wonder whether she will accept the offer.', solution: 'Independent: "I wonder" | Dependent (Noun clause): "whether she will accept the offer" - acts as object of "wonder"' },
          { label: 'd', task: 'My grandmother, who is 85 years old, still runs every day.', solution: 'Independent: "My grandmother still runs every day" | Dependent (Relative - non-defining): "who is 85 years old" - extra information, set off by commas' },
          { label: 'e', task: 'Unless you study harder, you will not pass the exam.', solution: 'Dependent (Adverbial - condition): "Unless you study harder" | Independent: "you will not pass the exam"' },
        ],
        solution: 'When identifying clauses: 1) Find the main verb(s), 2) Look for subordinators or relative pronouns, 3) Determine which part can stand alone.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Add a dependent clause to each independent clause. Use the type of clause indicated in brackets.',
        subTasks: [
          { label: 'a', task: 'I decided to stay home. (Adverbial - reason)', solution: 'Example: Because it was raining heavily, I decided to stay home. / I decided to stay home because I felt unwell.' },
          { label: 'b', task: 'The restaurant serves excellent food. (Relative - defining)', solution: 'Example: The restaurant that opened last month serves excellent food. / The restaurant which is near the station serves excellent food.' },
          { label: 'c', task: 'Everyone knows ________. (Noun clause)', solution: 'Example: Everyone knows that practice makes perfect. / Everyone knows what happened yesterday.' },
          { label: 'd', task: 'My best friend moved to another city. (Relative - non-defining)', solution: 'Example: My best friend, who I have known since childhood, moved to another city.' },
        ],
        hints: ['Make sure dependent clauses cannot stand alone', 'Use appropriate subordinators or relative pronouns'],
        solution: 'Creating dependent clauses requires choosing the right subordinator (because, although, when, etc.) or relative pronoun (who, which, that) based on what information you want to add.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2: Combining Techniques ---
    {
      id: 'engelsk-vg1-3-2-def-2',
      type: 'definition',
      title: 'Sentence Combining Techniques',
      content: `**Mastering Sentence Combination**

Now that you understand clause types, you can learn various techniques for combining sentences. Each technique creates a different effect and relationship between ideas.

**1. Coordinating Conjunctions (FANBOYS)**
Join two independent clauses of equal importance.
- **F**or (because/since) - "I stayed home, for I was feeling ill."
- **A**nd (addition) - "I studied hard, and I passed the exam."
- **N**or (negative addition) - "I don't like coffee, nor do I like tea."
- **B**ut (contrast) - "The movie was long, but it was entertaining."
- **O**r (alternative) - "We can go now, or we can wait until later."
- **Y**et (contrast) - "She is young, yet she is very mature."
- **S**o (result) - "It was late, so we went home."

**Rule:** Use a comma before the coordinating conjunction when joining two independent clauses.

**2. Subordinating Conjunctions**
Create a dependent clause, showing the relationship to the main idea.
- Time: "After she finished her homework, she went to bed."
- Reason: "Because it was cold, we stayed inside."
- Contrast: "Although he tried hard, he didn't succeed."
- Condition: "If you practice daily, you will improve."

**Rule:** When the dependent clause comes first, use a comma. When it comes second, usually no comma is needed.

**3. Semicolons**
Join closely related independent clauses without a conjunction.
- "I love summer; my sister prefers winter."
- "The exam was difficult; however, most students passed."

Use semicolons when ideas are closely related and equally important.

**4. Relative Clauses**
Embed information about a noun within the sentence.
- "The teacher who taught us English retired last year."
- "The book, which I bought yesterday, is fascinating."

**5. Participle Phrases**
Start with a verb form (-ing or -ed) to add information efficiently.
- Present participle: "Feeling exhausted, I fell asleep immediately."
- Past participle: "Exhausted from studying, I fell asleep immediately."
- "Written in 1984, the novel remains relevant today."

**Warning:** Avoid dangling modifiers!
- WRONG: "Walking to school, the rain started." (The rain wasn't walking!)
- RIGHT: "Walking to school, I got caught in the rain."

**6. Appositives**
Rename or describe a noun with extra information.
- "My neighbor, a retired doctor, helped me."
- "Shakespeare, the famous playwright, wrote many sonnets."
- "Oslo, the capital of Norway, is a beautiful city."

**7. Colons and Dashes**
- Colon: Introduces explanation or list: "I have one goal: to succeed."
- Dash: Adds emphasis or interruption: "The answer - surprisingly - was correct."`,
    },
    // --- EKSEMPEL 2 ---
    {
      id: 'engelsk-vg1-3-2-example-2',
      type: 'example',
      title: 'Example: Combining Short Sentences',
      problem: 'Combine these short sentences using different techniques:\n\nOriginal sentences:\n1. Maria is my classmate.\n2. Maria is from Spain.\n3. Maria speaks three languages.\n4. Maria wants to become a translator.\n5. She studies very hard.\n6. She gets excellent grades.',
      solution: `**Combined Versions Using Different Techniques:**

**Version 1 (Using appositives and relative clauses):**
"Maria, my classmate from Spain, speaks three languages and wants to become a translator. Since she studies very hard, she gets excellent grades."

- "my classmate from Spain" = appositive describing Maria
- "Since she studies very hard" = adverbial clause (reason)

**Version 2 (Using participle phrases):**
"Speaking three languages, my Spanish classmate Maria wants to become a translator. Studying very hard, she consistently gets excellent grades."

- "Speaking three languages" = present participle phrase
- "Studying very hard" = present participle phrase

**Version 3 (Using relative clauses):**
"Maria, who is my classmate from Spain, speaks three languages because she wants to become a translator. She studies very hard, which is why she gets excellent grades."

- "who is my classmate from Spain" = non-defining relative clause
- "which is why she gets excellent grades" = non-defining relative clause

**Version 4 (Using coordination and subordination):**
"My classmate Maria comes from Spain and speaks three languages, for she dreams of becoming a translator. Because she studies very hard, she gets excellent grades."

- "and" = coordinating conjunction
- "for" = coordinating conjunction (reason)
- "Because" = subordinating conjunction

**Analysis:**
Each version conveys the same information but with different emphasis and flow. Version 1 is concise and professional. Version 2 is dynamic with active participles. Version 3 provides clear, detailed information. Version 4 shows cause-effect relationships clearly.`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Combine each pair of sentences using the technique indicated:',
        subTasks: [
          { label: 'a', task: 'The movie was long. It was entertaining. (Use "but")', solution: 'The movie was long, but it was entertaining. (Coordinating conjunction showing contrast)' },
          { label: 'b', task: 'She finished her homework. She went to bed. (Use "After")', solution: 'After she finished her homework, she went to bed. OR: She went to bed after she finished her homework. (Subordinating conjunction showing time)' },
          { label: 'c', task: 'The book is on the table. I bought the book yesterday. (Use relative clause)', solution: 'The book that/which I bought yesterday is on the table. (Defining relative clause)' },
          { label: 'd', task: 'He was tired from the journey. He went straight to bed. (Use participle phrase)', solution: 'Tired from the journey, he went straight to bed. OR: Exhausted from the journey, he went straight to bed. (Past participle phrase)' },
          { label: 'e', task: 'My brother is a professional musician. He lives in London. (Use appositive)', solution: 'My brother, a professional musician, lives in London. (Appositive provides additional information)' },
          { label: 'f', task: 'The weather was beautiful. We decided to have a picnic. (Use semicolon)', solution: 'The weather was beautiful; we decided to have a picnic. OR: The weather was beautiful; therefore, we decided to have a picnic. (Semicolon joins related independent clauses)' },
        ],
        solution: 'Each technique creates different emphasis and rhythm. Practice using all of them to develop flexibility in your writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Rewrite this paragraph to vary the sentence structure. The original uses only simple sentences:\n\n"I woke up early. I felt tired. I made coffee. The coffee was strong. I drank it quickly. I felt better. I started my homework. The homework was difficult. I finished it anyway. I felt proud of myself."',
        hints: ['Combine some sentences', 'Use different conjunctions and techniques', 'Vary sentence openings', 'Mix long and short sentences'],
        solution: 'Example rewrite:\n\n"Although I felt tired when I woke up early, the strong coffee I quickly prepared revived me. The homework, which I started feeling refreshed, proved difficult; nevertheless, I finished it. I felt proud of myself."\n\nOR:\n\n"Waking up early, I felt exhausted. The strong coffee I made, however, quickly revived me. Despite its difficulty, I managed to finish my homework. Proud of my accomplishment, I smiled."\n\nNotice how these versions use: adverbial clauses, relative clauses, participle phrases, conjunctive adverbs (however, nevertheless), and varied sentence lengths.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-3-2-summary',
      type: 'text',
      content: `## Summary: Key Points About Sentence Structure and Variety

**Clause Types:**
- Independent clauses can stand alone as sentences
- Dependent clauses need an independent clause to be complete
- Three types of dependent clauses: Adverbial (when, because), Relative (who, which), Noun (that, what)

**Combining Techniques:**
1. **FANBOYS** (for, and, nor, but, or, yet, so) - equal ideas
2. **Subordinating conjunctions** (because, although, when) - show relationships
3. **Semicolons** - closely related ideas without conjunction
4. **Relative clauses** - add information about nouns
5. **Participle phrases** - efficient, dynamic additions
6. **Appositives** - rename or describe nouns

**Tips for Better Sentence Variety:**
- Mix sentence lengths: short sentences for impact, long for flow
- Vary sentence openings: don't always start with the subject
- Use transitional words and phrases
- Read your work aloud to check rhythm
- Practice combining short sentences in different ways

**Common Mistakes to Avoid:**
- Run-on sentences (two independent clauses with no connector)
- Comma splices (two independent clauses joined only by a comma)
- Sentence fragments (incomplete thoughts punctuated as sentences)
- Dangling modifiers (participle phrases that don't match the subject)
- Overusing one technique (too many "and" connections)

**The Goal:**
Your writing should feel natural and engaging. Variety serves the reader - it keeps them interested and helps them follow your ideas. The best writing often goes unnoticed because it flows so naturally.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'engelsk-vg1-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyze the sentence variety in this paragraph. Identify at least five different techniques used.',
        subTasks: [
          { label: 'paragraph', task: '"Living in a small coastal town has its advantages. Although the winters can be harsh and long, the summers, which are warm and bright, make up for them. My neighbors, most of whom have lived here for decades, form a close-knit community. Because everyone knows everyone, there is a sense of security that city dwellers rarely experience. Walking along the beach at sunset, I often reflect on how fortunate I am. Life here is simple; it is peaceful."', solution: 'Techniques identified:\n1. Simple sentence opener: "Living in a small coastal town has its advantages."\n2. Adverbial clause with contrast: "Although the winters can be harsh and long..."\n3. Non-defining relative clause: "which are warm and bright" / "most of whom have lived here for decades"\n4. Appositive-like structure: "a close-knit community"\n5. Adverbial clause (reason): "Because everyone knows everyone..."\n6. Participial phrase: "Walking along the beach at sunset..."\n7. Semicolon joining related clauses: "Life here is simple; it is peaceful."\n\nThe paragraph demonstrates excellent variety: it mixes sentence lengths, varies openings (subject, subordinator, participle), and uses multiple clause types.' },
        ],
        solution: 'A well-varied paragraph uses multiple techniques naturally. When analyzing, look for: different sentence openings, various clause types, coordinating and subordinating conjunctions, semicolons, participle phrases, and appositives.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Write a paragraph (100-150 words) about your favorite place. Include at least one example of each: coordinating conjunction, subordinating conjunction, relative clause, participle phrase, and appositive. Underline or highlight each technique you use.',
        hints: [
          'Plan your paragraph before writing',
          'Think about: where is this place? What do you do there? Why is it special?',
          'Use the techniques naturally - don\'t force them',
          'Read aloud to check flow'
        ],
        solution: 'Example paragraph (with techniques marked):\n\n"My favorite place is my grandmother\'s garden, [a small paradise behind her old house] (appositive). [Although it is not large] (subordinating conjunction), it feels like another world. The roses, [which she has tended for thirty years] (relative clause), bloom magnificently every summer, [and] (coordinating conjunction) their scent fills the air. [Sitting on the old wooden bench] (participle phrase), I can forget all my worries. This garden has witnessed my childhood, my teenage years, and now my adulthood. [Because it holds so many memories] (subordinating conjunction), it will always be special to me."\n\nYour paragraph should flow naturally while demonstrating varied sentence structures.',
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
  description: 'Create well-structured texts with clear connections between ideas through cohesive devices and logical organization.',
  estimatedMinutes: 70,
  competenceGoals: ['bruke kunnskap om grammatikk og tekststruktur i arbeid med egne muntlige og skriftlige tekster'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-3-3-intro',
      type: 'text',
      content: `## Making Your Writing Flow: Coherence and Cohesion

Have you ever read a text where the sentences seemed disconnected, jumping from one idea to another without clear connections? Such writing feels choppy and confusing, even if each individual sentence is grammatically correct. What is missing is coherence and cohesion - the invisible threads that weave sentences and paragraphs into a unified whole.

Understanding and mastering these concepts will transform your writing from a collection of isolated sentences into smooth, flowing prose that guides readers effortlessly from beginning to end.

**Coherence vs Cohesion: Understanding the Difference**

**Coherence:** The overall sense that a text makes logical sense and hangs together as a whole. It is about the big picture - the organization of ideas, the logical flow of arguments, and whether the reader can follow your thinking.

**Cohesion:** The specific grammatical and lexical links that connect parts of a text. It is about the individual connections - the words and phrases that tie sentences and paragraphs together.

Think of it this way: coherence is the blueprint of a building, showing how all the rooms connect logically. Cohesion is the mortar between the bricks, physically holding everything together.

**Learning Objectives for This Chapter:**
After completing this chapter, you will be able to:
- Distinguish between coherence and cohesion
- Use reference words (pronouns, demonstratives) effectively
- Apply linking words and transitional phrases appropriately
- Create lexical cohesion through word choice
- Organize paragraphs for maximum coherence
- Edit texts to improve flow and connection

**Why This Matters:**
- **Academic Writing:** Essays and reports require clear, logical connections
- **Professional Communication:** Business writing must be easy to follow
- **Reader Experience:** Good flow keeps readers engaged
- **Clarity:** Cohesive writing prevents misunderstanding
- **Exam Success:** Markers reward well-organized, flowing texts`,
    },
    // --- TEORI 1: Cohesive Devices ---
    {
      id: 'engelsk-vg1-3-3-def-1',
      type: 'definition',
      title: 'Cohesive Devices: The Building Blocks of Connected Text',
      content: `**What are Cohesive Devices?**

Cohesive devices are the words, phrases, and techniques that create explicit connections between parts of a text. They help readers understand how ideas relate to each other.

**1. Reference (Pronouns and Demonstratives)**

Using pronouns and demonstratives to refer back to previously mentioned items.

**Personal pronouns:** he, she, it, they, him, her, them
- "Maria studied hard. She passed all her exams."
- "The students were nervous. They had never taken such a difficult test."

**Demonstratives:** this, that, these, those
- "The study was published last year. This research changed our understanding."
- "Many factors contribute to climate change. These include..."

**Important:** Make sure your reference is clear. Avoid ambiguity!
- Unclear: "John told Peter that he had won." (Who won? John or Peter?)
- Clear: "John told Peter that Peter had won." or "John told Peter, 'You won!'"

**2. Substitution and Ellipsis**

**Substitution:** Replacing a word with a substitute word
- "I'll have coffee." "I'll have the same." (same = coffee)
- "She can swim fast, and so can I." (so = swim fast)
- "Is he coming?" "I think so." (so = that he is coming)

**Ellipsis:** Omitting repeated words that can be understood
- "Can you swim?" "Yes, I can [swim]."
- "She plays guitar better than I [play guitar]."
- "I would help if I could [help]."

**3. Conjunction/Linking Words**

Explicit markers that show the relationship between ideas.

**Addition (adding similar ideas):**
- also, furthermore, moreover, in addition, besides, too
- similarly, likewise, equally, in the same way

**Contrast (showing differences or unexpected results):**
- however, nevertheless, nonetheless, on the other hand
- in contrast, conversely, whereas, while, although
- despite this, even so, yet, still

**Cause and Effect (showing reasons and results):**
- therefore, consequently, as a result, hence, thus
- because of this, for this reason, accordingly
- so, that is why

**Examples (illustrating points):**
- for example, for instance, such as, including
- to illustrate, as an example, namely, specifically

**Sequence/Time (showing order):**
- first, second, third, finally, lastly
- then, next, subsequently, afterwards, meanwhile
- previously, earlier, later, eventually

**Summary/Conclusion:**
- in conclusion, to summarize, overall, in summary
- to sum up, in brief, all in all, ultimately

**4. Lexical Cohesion**

Creating connections through vocabulary choices.

**Repetition:** Repeating key words for emphasis
- "Education is important. Education opens doors. Education changes lives."

**Synonyms and near-synonyms:**
- "The dog ran away. The animal was frightened. The pet had escaped."

**Superordinates (general category words):**
- "I bought apples, oranges, and bananas. This fruit was for the party."

**Collocations (words that commonly go together):**
- "make a decision," "do homework," "strong coffee"`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-3-3-example-1',
      type: 'example',
      title: 'Example: Identifying Cohesive Devices',
      problem: 'Identify all the cohesive devices in this paragraph and explain how they create connections:\n\n"Climate change poses serious challenges to our planet. This global phenomenon affects weather patterns, sea levels, and ecosystems worldwide. Scientists have studied these effects for decades, and their findings are alarming. For example, Arctic ice is melting at unprecedented rates. Consequently, polar bears and other Arctic species face extinction. However, not all hope is lost. Many countries are taking action; they are investing in renewable energy and reducing emissions."',
      solution: `**Cohesive Device Analysis:**

**Reference:**
- "This global phenomenon" - refers back to "climate change"
- "their findings" - refers to "scientists"
- "these effects" - refers to the effects mentioned (weather, sea levels, ecosystems)
- "they" - refers to "many countries"

**Linking Words:**
- "and" - addition, connects "studied" with "findings are alarming"
- "For example" - introduces a specific illustration of the alarming findings
- "Consequently" - shows cause and effect (melting ice leads to extinction threat)
- "However" - signals contrast (hope despite the problems)

**Lexical Cohesion:**
- "Climate change" / "global phenomenon" - near-synonyms
- "planet" / "worldwide" / "Arctic" / "countries" - semantic field of global/geographical terms
- "effects" / "findings" / "challenges" - related abstract nouns
- "melting" / "extinction" / "action" / "investing" - verbs maintaining the topic

**Substitution:**
- The semicolon in the last sentence connects the related ideas without repeating words

**How These Create Flow:**
The paragraph moves logically from:
1. Introducing the problem (climate change)
2. Explaining its scope (worldwide effects)
3. Providing evidence (scientific findings)
4. Giving a specific example (Arctic ice)
5. Showing consequences (species extinction)
6. Offering contrast/hope (countries taking action)

Each cohesive device guides the reader from one idea to the next.`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose the best linking word to fill each gap. Consider the logical relationship between the sentences.',
        subTasks: [
          { label: 'a', task: 'The weather was terrible. _______, we decided to go hiking anyway.', solution: 'Nevertheless / However - These show contrast. Despite the bad weather (which would normally prevent hiking), we still went. "Therefore" would suggest we went BECAUSE of bad weather, which makes no sense.' },
          { label: 'b', task: 'Exercise improves physical health. _______, it boosts mental well-being.', solution: 'Furthermore / Moreover / In addition - These show addition. We are adding another benefit of exercise to the first one. Both benefits are positive, so contrast words would be wrong.' },
          { label: 'c', task: 'The population is aging rapidly. _______, healthcare costs are expected to rise.', solution: 'Consequently / Therefore / As a result - These show cause and effect. Aging population causes higher healthcare costs. This is a logical result, not a contrast or addition of similar ideas.' },
          { label: 'd', task: 'Many students prefer online learning. _______, others find it difficult to stay motivated at home.', solution: 'However / On the other hand / In contrast - These show contrast between two different groups of students with different preferences. "Furthermore" would incorrectly suggest both ideas are similar.' },
          { label: 'e', task: 'Reading improves vocabulary. _______, reading a novel exposes you to thousands of new words.', solution: 'For example / For instance / To illustrate - These introduce a specific example of the general claim. The novel example illustrates how reading improves vocabulary.' },
        ],
        solution: 'Choosing the right linking word depends on understanding the logical relationship: addition (similar ideas), contrast (different/unexpected), cause-effect (result), or example (illustration).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Improve the cohesion of this paragraph by adding appropriate pronouns, linking words, and avoiding repetition:\n\n"Learning a language is challenging. Learning a language is rewarding. Students need regular practice. Students should not be afraid of making mistakes. Mistakes are part of learning. Making mistakes helps students improve."',
        hints: ['Use pronouns instead of repeating "students" and "mistakes"', 'Add contrast markers and addition markers', 'Connect the ideas logically', 'Consider using "it" to refer to language learning'],
        solution: 'Improved version:\n\n"Learning a language is challenging; however, it is also incredibly rewarding. Students need regular practice, and they should not be afraid of making mistakes. After all, these are an essential part of the learning process. In fact, making errors actually helps learners improve their skills."\n\nCohesive devices used:\n- "however" - contrast between challenging and rewarding\n- "it" - refers to learning a language\n- "and" - connects related requirements\n- "they" - refers to students\n- "After all" - provides reasoning\n- "these" - refers to mistakes\n- "In fact" - reinforces the point\n- "learners" - synonym for students\n- "errors" - synonym for mistakes',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2: Paragraph Coherence ---
    {
      id: 'engelsk-vg1-3-3-def-2',
      type: 'definition',
      title: 'Creating Coherent Paragraphs and Texts',
      content: `**Beyond Cohesion: Achieving True Coherence**

While cohesive devices create explicit connections, coherence comes from the overall organization and logic of your text. A text can have many linking words but still feel incoherent if the ideas do not follow a logical pattern.

**Paragraph Structure for Coherence:**

**1. Topic Sentence**
Start each paragraph with a clear topic sentence that tells the reader what the paragraph is about.
- "Social media has transformed how we communicate."
- "Exercise provides numerous benefits for mental health."

**2. Supporting Sentences**
Develop the topic with explanations, examples, and evidence.
- Each sentence should relate to the topic sentence
- Ideas should flow logically from one to the next

**3. Concluding Sentence**
End with a sentence that summarizes or transitions to the next paragraph.
- "Clearly, social media has changed communication forever."
- "Given these benefits, regular exercise should be a priority."

**Organizational Patterns:**

**Chronological (Time Order):**
First... then... next... finally...
"First, I gathered all the ingredients. Then, I mixed them together..."

**Spatial (Location Order):**
On the left... in the center... to the right...
"On the left side of the painting, we see a dark forest..."

**Order of Importance:**
Most importantly... also significant... finally...
"Most importantly, education opens doors to opportunity..."

**Compare and Contrast:**
Similarly... on the other hand... however...
"Norway has long, dark winters. Similarly, Sweden experiences limited daylight..."

**Cause and Effect:**
Because... as a result... therefore...
"Because temperatures are rising, ice caps are melting..."

**Problem and Solution:**
The problem is... one solution is... alternatively...
"Many students struggle with motivation. One solution is to set small, achievable goals..."

**The "Known to New" Principle:**

Good writing moves from known information to new information within and between sentences.

- Start sentences with information the reader already knows
- End sentences with new information
- This creates a smooth flow of ideas

Example:
"**Climate change** is a global crisis. **This crisis** affects every continent. **Particularly affected** are coastal regions, which face rising sea levels."

Each sentence starts with something mentioned before (known) and ends with new information.`,
    },
    // --- EKSEMPEL 2 ---
    {
      id: 'engelsk-vg1-3-3-example-2',
      type: 'example',
      title: 'Example: Restructuring for Coherence',
      problem: 'Reorganize this paragraph for better coherence. The sentences are correct but poorly ordered:\n\n"The birds migrate to escape the cold winters. Many species of birds travel thousands of miles each year. Scientists track these birds using GPS technology. For example, Arctic terns fly from pole to pole. Migration is a fascinating natural phenomenon. These journeys are essential for the birds\' survival."',
      solution: `**Reorganized for Coherence:**

"Migration is a fascinating natural phenomenon. Many species of birds travel thousands of miles each year, and these journeys are essential for their survival. The birds migrate to escape the cold winters and find food. For example, Arctic terns fly from pole to pole, covering over 70,000 kilometers annually. Scientists track these birds using GPS technology to learn more about their remarkable journeys."

**Analysis of Changes:**

**Original Problems:**
1. Started with a detail (birds migrate) before introducing the topic (migration)
2. The example (Arctic terns) came before the general statement it illustrated
3. Sentences about tracking interrupted the flow about migration itself
4. "These journeys" appeared before journeys were mentioned

**How the Reorganization Works:**

1. **Topic Sentence:** "Migration is a fascinating natural phenomenon."
   - Introduces the main topic clearly

2. **General to Specific:** "Many species... essential for survival"
   - Establishes what migration involves before giving details

3. **Explanation:** "The birds migrate to escape... find food"
   - Explains why they migrate

4. **Specific Example:** "For example, Arctic terns..."
   - Now the example makes sense - it illustrates the previous points

5. **Additional Information:** "Scientists track these birds..."
   - Adds interesting related information as a conclusion

**Key Principles Applied:**
- Known to new: Each sentence builds on the previous one
- General to specific: Main topic -> details -> examples
- Logical flow: Why migrate -> how far -> tracking technology`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Read this paragraph and identify problems with coherence and cohesion. Then explain how you would fix them.',
        subTasks: [
          { label: 'paragraph', task: '"Smartphones have many advantages. Smartphones can be addictive. Smartphones help us stay connected with friends and family. Smartphones have cameras. We can take photos anywhere. Social media apps are popular. However, too much screen time is bad for our eyes. Smartphones are expensive. In conclusion, smartphones are useful tools."', solution: 'Problems identified:\n\n1. **No clear topic sentence** - The paragraph jumps between advantages and disadvantages without a clear organizational plan\n\n2. **Repetition** - "Smartphones" is repeated at the start of nearly every sentence\n\n3. **Lack of logical organization** - Advantages and disadvantages are mixed together randomly\n\n4. **Missing linking words** - Sentences are not connected to each other\n\n5. **Irrelevant detail** - "Social media apps are popular" does not clearly connect to the main topic\n\n6. **Weak conclusion** - "In conclusion, smartphones are useful tools" does not reflect the mixed content\n\nFixed version:\n\n"Smartphones are both useful tools and potential distractions. On the one hand, they offer numerous advantages. They help us stay connected with friends and family, and their built-in cameras allow us to capture memories anywhere. On the other hand, these devices can be addictive, and excessive screen time may harm our eyes. Furthermore, they represent a significant financial investment. Overall, while smartphones are undeniably useful, we must use them mindfully."\n\nFixes applied: Clear topic sentence, organized structure (advantages then disadvantages), linking words (on the one hand, on the other hand, furthermore, overall), pronouns to avoid repetition (they, these devices), balanced conclusion.' },
        ],
        solution: 'Good paragraphs need: 1) Clear topic sentence, 2) Logical organization, 3) Cohesive devices, 4) Varied sentence openings, 5) Relevant supporting details, 6) Appropriate conclusion.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Put these sentences in the correct order to create a coherent paragraph. Then add appropriate linking words.',
        subTasks: [
          { label: 'sentences', task: 'A) Many people now work from home instead of commuting to offices.\nB) The pandemic accelerated a revolution in how we work.\nC) Video conferencing tools like Zoom became essential for meetings.\nD) Some employees prefer this flexibility, while others miss the social aspects of office life.\nE) This shift has had both positive and negative effects on workers.\nF) As a result, companies are reconsidering the need for large office spaces.', solution: 'Correct order: B, A, C, E, D, F\n\nWith linking words:\n\n"The pandemic accelerated a revolution in how we work. As a result, many people now work from home instead of commuting to offices. Meanwhile, video conferencing tools like Zoom became essential for meetings. This shift has had both positive and negative effects on workers. On the one hand, some employees prefer this flexibility; on the other hand, others miss the social aspects of office life. Consequently, companies are reconsidering the need for large office spaces."\n\nExplanation:\n- B introduces the main topic (pandemic and work revolution)\n- A gives the first major change (working from home)\n- C adds another related change (video conferencing)\n- E provides evaluation (positive and negative effects)\n- D gives specific examples of those effects\n- F shows the consequence for companies' },
        ],
        hints: ['Start with the most general statement (topic sentence)', 'Look for cause-effect relationships', 'Group related ideas together', 'End with a conclusion or consequence'],
        solution: 'When ordering sentences: 1) Find the topic sentence (most general), 2) Identify cause-effect relationships, 3) Put examples after the points they illustrate, 4) End with conclusions or consequences.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-3-3-summary',
      type: 'text',
      content: `## Summary: Creating Coherent and Cohesive Texts

**Coherence vs Cohesion:**
- **Coherence** = the big picture (logical organization, clear flow of ideas)
- **Cohesion** = the connections (specific words and devices that link parts)

**Key Cohesive Devices:**

**1. Reference:** Pronouns (he, she, it, they) and demonstratives (this, that, these, those)

**2. Linking Words:**
| Purpose | Examples |
|---------|----------|
| Addition | furthermore, moreover, also, in addition |
| Contrast | however, nevertheless, on the other hand |
| Cause/Effect | therefore, consequently, as a result |
| Example | for example, for instance, such as |
| Sequence | first, then, finally, subsequently |
| Summary | in conclusion, to summarize, overall |

**3. Lexical Cohesion:** Synonyms, repetition, related words

**Paragraph Structure:**
1. Topic sentence (introduces main idea)
2. Supporting sentences (develop the idea)
3. Concluding sentence (summarizes or transitions)

**The Known-to-New Principle:**
- Start sentences with familiar information
- End sentences with new information
- Each sentence builds on the previous one

**Common Problems to Avoid:**
- Random sentence order
- Missing linking words
- Repetitive vocabulary
- Unclear pronoun reference
- Mixing unrelated ideas
- Weak or missing topic sentences

**Tips for Improvement:**
1. Read your text aloud - does it flow naturally?
2. Check that each paragraph has one main idea
3. Make sure every sentence connects to the one before it
4. Use varied linking words - not just "and" and "but"
5. Replace repeated nouns with pronouns where appropriate`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'engelsk-vg1-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyze the coherence and cohesion of this paragraph. Identify at least 8 cohesive devices and explain how the paragraph achieves coherence.',
        subTasks: [
          { label: 'paragraph', task: '"Artificial intelligence is transforming many industries, and healthcare is no exception. This technology is now being used to analyze medical images, predict patient outcomes, and even assist in surgeries. For example, AI systems can detect certain cancers earlier than human doctors. As a result, patients receive faster diagnoses and better treatment options. However, the adoption of AI in healthcare raises ethical questions. Some worry about data privacy, while others fear that machines might replace human doctors. Nevertheless, experts believe that AI will ultimately complement, not replace, medical professionals. It seems that the future of healthcare will combine the best of human expertise and artificial intelligence."', solution: 'Cohesive Devices Identified:\n\n1. "and" - coordinating conjunction (addition)\n2. "This technology" - demonstrative reference to AI\n3. "For example" - linking word (exemplification)\n4. "AI systems" - lexical cohesion (synonym for artificial intelligence)\n5. "As a result" - linking word (cause/effect)\n6. "patients" - lexical cohesion (related to healthcare field)\n7. "However" - linking word (contrast)\n8. "Some... others" - parallel structure showing different viewpoints\n9. "while" - subordinating conjunction (contrast)\n10. "Nevertheless" - linking word (contrast despite previous points)\n11. "It" - pronoun reference\n12. "AI" - abbreviation/substitution for artificial intelligence\n13. "medical professionals" - synonym for doctors\n\nCoherence Analysis:\n\n1. Clear topic sentence introduces AI in healthcare\n2. Logical organization: benefits -> example -> results -> concerns -> resolution -> conclusion\n3. Known-to-new pattern: each sentence builds on previous\n4. Balanced structure: positives, then concerns, then balanced conclusion\n5. Strong concluding sentence that synthesizes the main idea\n6. Consistent focus on healthcare/AI throughout' },
        ],
        solution: 'A well-constructed paragraph uses multiple cohesive devices naturally and follows a logical organization pattern. Coherence comes from clear topic sentences, logical ordering, and consistent focus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Write a well-organized paragraph (120-150 words) on the topic: "The advantages and disadvantages of social media for teenagers." Your paragraph should include:\n- A clear topic sentence\n- At least 4 different linking words\n- Appropriate use of pronouns and reference\n- Logical organization (e.g., advantages then disadvantages, or point-by-point)\n- A concluding sentence that reflects the content',
        hints: [
          'Plan before you write: list your advantages and disadvantages',
          'Decide on your organization: all advantages then disadvantages, OR point-by-point comparison',
          'Use varied linking words: not just "but" and "and"',
          'Read aloud when finished to check flow'
        ],
        solution: 'Example paragraph:\n\n"Social media presents both opportunities and challenges for teenagers. On the one hand, platforms like Instagram and TikTok allow young people to express themselves creatively and connect with friends worldwide. Furthermore, social media can be educational, providing access to news and diverse perspectives. However, there are significant drawbacks to consider. Many teenagers become addicted to their phones, constantly checking for likes and comments. As a result, their self-esteem may suffer when they compare themselves to carefully curated online images. Additionally, cyberbullying remains a serious concern on these platforms. Nevertheless, with proper guidance and moderation, teenagers can benefit from social media while avoiding its pitfalls. Ultimately, the key lies in balanced, mindful usage."\n\nThis paragraph demonstrates:\n- Clear topic sentence\n- Linking words: On the one hand, Furthermore, However, As a result, Additionally, Nevertheless, Ultimately\n- Pronouns: they, their, themselves\n- Logical organization: advantages -> disadvantages -> balanced conclusion\n- Strong concluding sentence',
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
  description: 'Develop essential skills for evaluating, editing, and improving your own writing through systematic revision strategies.',
  estimatedMinutes: 70,
  competenceGoals: ['vurdere og bearbeide egne tekster ut fra faglige kriterier og kunnskap om språk'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-3-4-intro',
      type: 'text',
      content: `## The Art of Revision: Transforming Good Writing into Great Writing

"The first draft of anything is garbage." - Ernest Hemingway

This quote from one of the most celebrated writers in history reveals an important truth: even the best writers do not produce perfect texts on their first attempt. What separates amateur writers from professionals is not the quality of their first drafts, but their willingness and ability to revise.

**Why Revision Matters:**

Many students submit their first drafts thinking their work is complete. However, professional writers, journalists, and academics routinely revise their work multiple times before publication. Some authors revise their novels ten, twenty, or even fifty times!

Revision is not just about fixing mistakes - it is about discovering what you really want to say and finding the best way to say it. Often, the act of writing helps clarify your thinking, and revision allows you to capture that clarity.

**Learning Objectives for This Chapter:**
After completing this chapter, you will be able to:
- Distinguish between revising, editing, and proofreading
- Apply systematic revision strategies at different levels
- Identify and correct common grammatical errors
- Evaluate your own writing objectively
- Create and use personal checklists for improvement
- Give and receive constructive feedback on writing

**The Writing Process:**
1. **Prewriting** - Planning and brainstorming
2. **Drafting** - Getting ideas down on paper
3. **Revising** - Improving content and organization
4. **Editing** - Fixing grammar and sentence-level issues
5. **Proofreading** - Final check for errors

Most students rush through steps 3-5 or skip them entirely. This chapter will help you master these crucial stages.`,
    },
    // --- TEORI 1: Revision Strategies ---
    {
      id: 'engelsk-vg1-3-4-def-1',
      type: 'definition',
      title: 'Systematic Revision: The ARMS Strategy and Beyond',
      content: `**Revising vs Editing vs Proofreading**

These terms are often confused, but they represent different levels of review:

**Revising (Big Picture):**
- Is my main idea clear?
- Is my argument logical?
- Have I included enough evidence/examples?
- Is the organization effective?
- Does each paragraph have a clear purpose?

**Editing (Sentence Level):**
- Are my sentences clear and varied?
- Have I used precise vocabulary?
- Are there grammatical errors?
- Is my tone appropriate?

**Proofreading (Surface Level):**
- Spelling errors
- Punctuation mistakes
- Formatting issues
- Typos

**The ARMS Strategy for Revision:**

**A - Add**
What is missing from your text?
- More evidence or examples?
- Transitions between ideas?
- Background information for the reader?
- A stronger introduction or conclusion?
- More specific details?

**R - Remove**
What is unnecessary?
- Repetitive ideas?
- Irrelevant information?
- Wordy phrases that could be shortened?
- Weak or unconvincing arguments?
- Off-topic tangents?

**M - Move**
What is in the wrong place?
- Would a different order be more logical?
- Should your strongest point come first or last?
- Are related ideas grouped together?
- Does your conclusion actually conclude?

**S - Substitute**
What could be better?
- Replace vague words with specific ones
- Swap weak verbs for stronger ones
- Change passive voice to active where appropriate
- Find better transitions
- Improve unclear sentences

**Additional Revision Strategies:**

**1. Time Distance**
Put your writing aside for a day or more before revising. Fresh eyes catch more problems.

**2. Read Aloud**
Reading your text aloud helps you hear:
- Awkward phrasing
- Missing words
- Unclear sentences
- Repetitive patterns
- Natural rhythm (or lack thereof)

**3. Reverse Outline**
After writing, outline what you actually wrote (not what you planned). This reveals:
- Whether your structure is logical
- If you have drifted from your main point
- Where paragraphs lack focus

**4. Peer Review**
Another reader can identify:
- Confusing passages you thought were clear
- Missing information you assumed the reader would know
- Fresh perspectives on your argument`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-3-4-example-1',
      type: 'example',
      title: 'Example: Applying the ARMS Strategy',
      problem: 'Apply the ARMS strategy to improve this paragraph:\n\n"Social media is bad. Many people use social media. They spend hours scrolling. This is bad for mental health. Studies show this. Social media companies make money from keeping people online. The algorithms are designed to be addictive. Young people are especially affected. In conclusion, social media is problematic."',
      solution: `**ARMS Analysis:**

**A - ADD:**
- Specific statistics or study references
- Explanation of HOW it affects mental health
- Examples of the algorithms at work
- More nuanced analysis (it is not all bad)
- A more developed conclusion

**R - REMOVE:**
- "Many people use social media" (obvious, unnecessary)
- Redundant use of "bad" and "social media"
- "Studies show this" (vague and unhelpful)

**M - MOVE:**
- The business model point could come earlier to explain WHY platforms are designed this way
- "Young people especially affected" could lead to more discussion

**S - SUBSTITUTE:**
- "bad" → specific effects like "anxiety" or "depression"
- "This is bad" → explain the mechanism
- "problematic" → more specific conclusion
- General statements → specific examples

**Revised Version:**

"Social media platforms pose significant challenges to mental health, particularly among teenagers. Research from the American Psychological Association has linked excessive social media use to increased rates of anxiety, depression, and loneliness. This is not accidental; social media companies profit from user engagement, so their algorithms are specifically designed to be addictive. Features like infinite scrolling, notification alerts, and "likes" trigger dopamine responses that keep users returning. Adolescents, whose brains are still developing, are particularly vulnerable to these manipulative design choices. While social media does offer benefits such as connection and community, users must be aware of these psychological effects and set healthy boundaries with technology."

**What Changed:**
- Added specific research reference and explanation
- Removed vague statements
- Moved business model point to explain causation
- Substituted "bad" with specific effects
- Added nuance (acknowledging benefits)
- Created a more substantive conclusion`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Apply the ARMS strategy to this paragraph. For each letter (A, R, M, S), identify at least one specific change you would make.',
        subTasks: [
          { label: 'paragraph', task: '"Climate change is a problem. It affects the weather. Scientists agree. We need to do something. Governments should act. Individuals can help too. Recycling is good. We should use less energy. In conclusion, climate change is serious."', solution: 'A (ADD):\n- Add specific examples of weather effects (rising sea levels, extreme storms, droughts)\n- Add scientific consensus statistics (97% of climate scientists agree)\n- Add specific government actions (carbon taxes, Paris Agreement)\n- Add specific individual actions beyond recycling\n\nR (REMOVE):\n- "Scientists agree" is vague without context\n- "Recycling is good" is oversimplified and disconnected\n\nM (MOVE):\n- Start with the scientific consensus to establish credibility\n- Put specific effects before solutions\n- Group government and individual actions together as a response section\n\nS (SUBSTITUTE):\n- "problem" → "existential threat" or "urgent crisis"\n- "affects the weather" → specific effects like "causes more frequent hurricanes and longer droughts"\n- "We need to do something" → specific call to action\n- "serious" → "requires immediate action at all levels"' },
        ],
        hints: ['Be specific about what you would add, remove, move, or substitute', 'Think about what a reader would need to understand the topic', 'Consider how the paragraph could be reorganized for better effect'],
        solution: 'The ARMS strategy helps identify specific, actionable improvements. Each change should serve a purpose: adding detail, removing fluff, improving organization, or strengthening language.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Read aloud and identify the problems in this text. Then rewrite it.',
        subTasks: [
          { label: 'text', task: '"The book was good. I liked the book. The characters in the book were interesting. The plot of the book kept me reading. I would recommend this book to anyone who likes books. The author wrote the book well."', solution: 'Problems identified by reading aloud:\n\n1. Repetition: "book" appears in every sentence (6 times)\n2. Vague language: "good," "liked," "interesting" - tells us nothing specific\n3. Monotonous rhythm: every sentence follows the same pattern\n4. No specific details about the book\n5. Circular reasoning: "recommend to anyone who likes books"\n6. No analysis or explanation of WHY\n\nRevised version:\n\n"This novel captivated me from the first page to the last. The author created complex, believable characters whose struggles felt genuinely real, particularly the protagonist\'s journey from self-doubt to confidence. The plot balanced suspense with emotional depth, making it impossible to put down. I would especially recommend it to readers who enjoy character-driven stories with unexpected twists. The prose is elegant yet accessible, demonstrating the author\'s skill at bringing a story to life."\n\nChanges made:\n- "book" replaced with varied alternatives (novel, it, story)\n- Added specific details about what made it good\n- Varied sentence structure and length\n- Included analysis and evidence\n- Made the recommendation specific' },
        ],
        hints: ['Read aloud to hear the repetition and rhythm', 'Ask yourself: what specifically was good?', 'Vary your vocabulary and sentence structure'],
        solution: 'Reading aloud reveals problems that silent reading misses: repetition, awkward phrasing, and monotonous rhythm. Revision should add specific details and vary language.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2: Common Errors ---
    {
      id: 'engelsk-vg1-3-4-def-2',
      type: 'definition',
      title: 'Common Errors to Check When Editing',
      content: `**Grammar Errors:**

**1. Subject-Verb Agreement**
The subject and verb must match in number.

Common traps:
- Collective nouns: "The team is/are playing" (British: are; American: is)
- Compound subjects: "Neither the teacher nor the students were ready"
- Separated subject/verb: "The book on the shelves is mine" (book is, not shelves are)

**2. Pronoun Reference**
Pronouns must clearly refer to a specific noun.

Unclear: "When John met Peter, he was happy" (who was happy?)
Clear: "John was happy when he met Peter"

Unclear: "The teachers told the students that they were wrong" (who was wrong?)
Clear: "The teachers told the students that the students were wrong"

**3. Tense Consistency**
Maintain consistent tenses within a passage unless the time frame changes.

Wrong: "She walked in and says hello"
Right: "She walked in and said hello"

Wrong: "In 1969, humans land on the moon"
Right: "In 1969, humans landed on the moon"

**Sentence-Level Errors:**

**4. Run-on Sentences**
Two independent clauses joined without proper punctuation or conjunction.

Wrong: "I went home I was tired"
Right: "I went home because I was tired"
Right: "I went home; I was tired"
Right: "I went home. I was tired."

**5. Comma Splices**
Two independent clauses joined only by a comma.

Wrong: "It was late, we went home"
Right: "It was late, so we went home"
Right: "It was late; we went home"
Right: "It was late. We went home."

**6. Sentence Fragments**
Incomplete sentences punctuated as complete ones.

Fragment: "Because I was tired."
Complete: "I left early because I was tired."

Fragment: "The book on the table."
Complete: "The book on the table is mine."

**Common Spelling/Usage Errors:**

**7. Apostrophe Errors**
- its = possessive (The cat licked its paw)
- it's = it is (It's raining)
- their = possessive (Their house)
- they're = they are (They're coming)
- there = place (over there)
- your = possessive (Your book)
- you're = you are (You're late)

**8. Commonly Confused Words**
- affect (verb) / effect (noun, usually)
- accept / except
- then / than
- lose / loose
- definitely (not "definately")
- separate (not "seperate")
- a lot (two words, never "alot")

**9. Double Negatives**
Wrong: "I don't have no money"
Right: "I don't have any money" or "I have no money"

**10. Word Order with Adverbs**
Wrong: "I always am tired"
Right: "I am always tired"

Wrong: "She speaks English well very"
Right: "She speaks English very well"`,
    },
    // --- EKSEMPEL 2 ---
    {
      id: 'engelsk-vg1-3-4-example-2',
      type: 'example',
      title: 'Example: Error Correction in Practice',
      problem: 'Find and correct all errors in this paragraph:\n\n"Their are many students who doesnt like homework. This is because they think its boring and they dont see no point in it. The reason for this is alot of teachers fail to explain the purpose clearly. When a student asks there teacher why there doing homework the teacher often says it helps them learn. However this explanation isnt always convince. In my opinion, education would be more effective if teachers took time to explain the benefits of each assignment clearly, than students would be more motivated to complete their work."',
      solution: `**Corrected Version with Explanations:**

"**There** are many students who **do not** like homework. This is because they think **it's** boring and they **don't see any** point in it. The reason for this is **a lot** of teachers fail to explain the purpose clearly. When a student asks **their** teacher why **they're** doing homework**,** the teacher often says it helps them learn. However**,** this explanation **isn't** always **convincing**. In my opinion, education would be more effective if teachers took time to explain the benefits of each assignment clearly**;** **then** students would be more motivated to complete **their** work."

**Errors Corrected:**

1. "Their" → "There" (place/existence, not possessive)
2. "doesnt" → "do not" (plural subject needs plural verb; missing apostrophe)
3. "its" → "it's" (it is, not possessive)
4. "dont see no point" → "don't see any point" (double negative; missing apostrophe)
5. "alot" → "a lot" (always two words)
6. "there teacher" → "their teacher" (possessive)
7. "there doing" → "they're doing" (they are)
8. Added comma after "homework" (introductory clause)
9. Added comma after "However" (sentence adverb)
10. "isnt" → "isn't" (missing apostrophe)
11. "convince" → "convincing" (adjective form needed)
12. Comma → semicolon (independent clauses)
13. "than" → "then" (sequence, not comparison)
14. Final "their" is correct (possessive)

**Total: 13 errors in one paragraph!**`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Find and correct all the errors in each sentence. Identify what type of error each one is.',
        subTasks: [
          { label: 'a', task: 'The team are playing good today, there going to win.', solution: 'Corrected: "The team is playing well today; they\'re going to win."\n\nErrors:\n1. "team are" → "team is" (subject-verb agreement - collective noun)\n2. "good" → "well" (adverb needed to modify "playing")\n3. Comma splice: comma between two independent clauses\n4. "there" → "they\'re" (they are)' },
          { label: 'b', task: 'Everyone should bring their own lunch, there is no cafeteria here.', solution: 'Corrected: "Everyone should bring their own lunch; there is no cafeteria here." OR "Everyone should bring their own lunch because there is no cafeteria here."\n\nErrors:\n1. Comma splice: comma joining two independent clauses (fix with semicolon, period, or conjunction)\nNote: "Everyone...their" is now accepted as singular "they" for gender neutrality' },
          { label: 'c', task: 'Its important that your on time for you\'re interview.', solution: 'Corrected: "It\'s important that you\'re on time for your interview."\n\nErrors:\n1. "Its" → "It\'s" (it is)\n2. "your" → "you\'re" (you are)\n3. "you\'re" → "your" (possessive)' },
          { label: 'd', task: 'She walked into the room, sits down and started reading the book what she bought yesterday.', solution: 'Corrected: "She walked into the room, sat down, and started reading the book that she had bought yesterday."\n\nErrors:\n1. "sits" → "sat" (tense consistency with "walked" and "started")\n2. Missing comma before "and" in a series (Oxford comma)\n3. "what" → "that" or "which" (relative pronoun for objects)\n4. "bought" → "had bought" (past perfect for earlier action)' },
          { label: 'e', task: 'Me and my friends goes to the cinema last night but we didnt saw nothing good.', solution: 'Corrected: "My friends and I went to the cinema last night, but we didn\'t see anything good."\n\nErrors:\n1. "Me and my friends" → "My friends and I" (subject pronoun; politeness order)\n2. "goes" → "went" (past tense)\n3. "didnt" → "didn\'t" (missing apostrophe)\n4. "saw" → "see" (infinitive after "didn\'t")\n5. "nothing" → "anything" (double negative)' },
        ],
        solution: 'Careful proofreading requires checking for multiple error types: subject-verb agreement, tense consistency, pronoun usage, punctuation (especially apostrophes and comma splices), and word choice.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Create a personal revision checklist with at least 12 items, organized by category. Include items specific to errors you know you commonly make.',
        hints: [
          'Think about feedback you have received on your writing',
          'Include both big-picture items (content, structure) and detail items (grammar, punctuation)',
          'Add your personal weak spots',
          'Make it practical enough to actually use'
        ],
        solution: 'Example Personal Revision Checklist:\n\n**CONTENT & STRUCTURE**\n[ ] Does my introduction clearly state my main idea?\n[ ] Does each paragraph have one clear focus?\n[ ] Have I provided enough evidence/examples?\n[ ] Is my conclusion more than just repetition?\n[ ] Is the overall organization logical?\n\n**COHERENCE & COHESION**\n[ ] Have I used appropriate linking words?\n[ ] Does each paragraph connect to the next?\n[ ] Are my pronoun references clear?\n[ ] Have I avoided excessive repetition?\n\n**GRAMMAR**\n[ ] Subject-verb agreement (especially with collective nouns)\n[ ] Consistent tenses throughout\n[ ] Correct pronoun usage (especially me/I, their/there/they\'re)\n[ ] No run-on sentences or comma splices\n\n**MECHANICS**\n[ ] Apostrophes in contractions (it\'s, don\'t)\n[ ] Apostrophes for possession (not for plurals)\n[ ] Spelling of commonly confused words\n[ ] Commas after introductory phrases\n\n**STYLE**\n[ ] Varied sentence lengths and structures\n[ ] Specific vocabulary (not just "good" and "bad")\n[ ] Active voice where appropriate\n[ ] Formal register for academic writing\n\n**MY PERSONAL WEAK SPOTS**\n[ ] [Add your own common errors here]\n\nYour checklist should be personalized based on your own writing patterns and teacher feedback.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-3-4-summary',
      type: 'text',
      content: `## Summary: Key Points About Editing and Revising

**The Three Stages:**
1. **Revising** - Big picture: content, argument, organization
2. **Editing** - Sentence level: grammar, clarity, style
3. **Proofreading** - Surface level: spelling, punctuation, typos

**The ARMS Strategy:**
- **A**dd what is missing
- **R**emove what is unnecessary
- **M**ove what is in the wrong place
- **S**ubstitute what could be better

**Revision Tips:**
- Take time away from your writing before revising
- Read your work aloud
- Create a reverse outline to check structure
- Get feedback from others

**Common Errors to Watch:**
- Subject-verb agreement
- Pronoun reference clarity
- Tense consistency
- Run-on sentences and comma splices
- Apostrophe errors (it's/its, their/they're/there, your/you're)
- Double negatives

**Remember:**
- Good writing is rewriting
- Professional writers revise multiple times
- Create a personal checklist for your common errors
- Revising is about improving ideas, not just fixing mistakes
- Every error fixed makes your message clearer`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'engelsk-vg1-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'This paragraph contains errors at all levels (content, structure, grammar, and mechanics). Revise it completely.',
        subTasks: [
          { label: 'paragraph', task: `"Technology is important today. Their are many technologies. Phones, computers, tablets. These technologies help us. They also hurt us to. Too much screen time is bad, it effects are health. However technology isnt going away so we need to learn how to use it correctly. Young people especially needs to learn this. In conclusion technology is a double edged sword."`, solution: `Fully Revised Version:

"Technology plays an increasingly important role in our daily lives, offering both significant benefits and notable challenges. Digital devices such as smartphones, computers, and tablets have revolutionized how we work, learn, and communicate. These tools provide instant access to information and enable connections across the globe. However, excessive screen time can have negative effects on both physical and mental health, including eye strain, poor sleep quality, and increased anxiety. Since technology is an integral part of modern life, we must learn to use it mindfully. This is particularly important for young people, who are growing up as digital natives. To truly benefit from technology while minimizing its drawbacks, we need to develop healthy habits and set appropriate boundaries."

Changes Made:

CONTENT:
- Added specific examples of how technology helps
- Added specific effects on health
- Developed the conclusion into a real argument

STRUCTURE:
- Combined fragment sentences
- Created logical flow from benefits → problems → solutions
- Added proper conclusion that synthesizes ideas

GRAMMAR:
- "Their are" → "There are" (then restructured)
- "Phones, computers, tablets" (fragment) → integrated into sentence
- "hurt us to" → "hurt us too" → restructured
- Comma splice fixed ("is bad, it effects")
- "effects" → "effects" (noun) used correctly; originally should be "affects" (verb)
- "isnt" → "isn't"
- "needs" → "need" (young people = plural)

MECHANICS:
- Added missing apostrophes
- Fixed spelling
- Added appropriate commas` },
        ],
        solution: 'Complete revision requires addressing all levels: content (adding substance), structure (improving organization), grammar (fixing errors), and mechanics (correcting spelling and punctuation).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Find a piece of your own writing (an essay, paragraph, or assignment) and apply the complete revision process. Write a brief reflection on what you learned about your own writing patterns.',
        hints: [
          'Step 1: Apply ARMS at the big-picture level',
          'Step 2: Check for grammar and sentence-level issues using your checklist',
          'Step 3: Proofread for spelling and punctuation',
          'Step 4: Write a reflection identifying your most common issues'
        ],
        solution: 'Example Reflection:\n\n"When revising my essay about climate change, I discovered several patterns in my writing. Using ARMS, I found that I needed to ADD more specific examples - I often make claims without evidence. I was able to REMOVE some repetitive sentences in my second paragraph. I did not need to MOVE much, but I did SUBSTITUTE several vague words like "bad" and "important" with more specific vocabulary.\n\nAt the editing stage, I found three comma splices - this is clearly a pattern for me. I also noticed that I switch between past and present tense unnecessarily.\n\nDuring proofreading, I caught two its/it\'s errors and several missing commas after introductory phrases.\n\nMy main areas for improvement are:\n1. Adding specific evidence and examples\n2. Avoiding comma splices\n3. Maintaining tense consistency\n4. Using more precise vocabulary\n\nI will add these to my personal checklist."\n\nYour reflection should identify specific patterns in YOUR writing based on YOUR revision experience.',
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
  description: 'Understand, identify, and analyze literary devices that writers use to create meaning, evoke emotions, and engage readers.',
  estimatedMinutes: 75,
  competenceGoals: ['lese, diskutere og reflektere over innhold og virkemidler i ulike typer tekster, også selvvalgte'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-4-1-intro',
      type: 'text',
      content: `## The Writer's Toolbox: Literary Devices and Techniques

When you read a powerful piece of writing - a novel that moves you to tears, a poem that gives you chills, or a speech that inspires action - you are experiencing the effect of literary devices. These are the tools that writers have developed over centuries to create meaning beyond the literal words on the page.

Literary devices are techniques that writers use to:
- Create vivid imagery in readers' minds
- Evoke emotional responses
- Convey complex ideas efficiently
- Add layers of meaning to texts
- Make language memorable and beautiful

**Why Study Literary Devices?**

Understanding literary devices transforms you from a passive reader into an active analyst. Instead of simply saying "I liked this book," you can explain precisely HOW the author created that effect and WHY it worked.

**Benefits of understanding literary devices:**
- **Deeper reading:** See beneath the surface of texts
- **Better analysis:** Write more insightful essays and discussions
- **Improved writing:** Use these techniques in your own work
- **Cultural literacy:** Recognize allusions and references
- **Critical thinking:** Understand how language influences us
- **Appreciation:** Enjoy the craft and artistry of great writing

**Learning Objectives for This Chapter:**
After completing this chapter, you will be able to:
- Identify and define key literary devices
- Explain the effect of each device on readers
- Analyze how devices work together in texts
- Create your own examples of literary devices
- Discuss how literary techniques enhance meaning`,
    },
    // --- TEORI 1: Figurative Language ---
    {
      id: 'engelsk-vg1-4-1-def-1',
      type: 'definition',
      title: 'Figurative Language: Saying More Than You Mean',
      content: `**What is Figurative Language?**

Figurative language uses words in non-literal ways to create special effects. When we say "It's raining cats and dogs," we do not mean animals are falling from the sky - we are using figurative language to emphasize heavy rain.

**Simile**
A comparison using "like" or "as" to connect two unlike things.

Examples:
- "Her smile was like sunshine" (smile compared to sunshine)
- "He fought like a lion" (courage compared to a lion)
- "The news hit me like a ton of bricks" (impact compared to physical weight)
- "Her voice was as smooth as silk" (voice quality compared to silk)

**Effect:** Similes help readers visualize and understand by connecting unfamiliar things to familiar ones.

**Metaphor**
A direct comparison stating one thing IS another thing (without "like" or "as").

Examples:
- "Life is a journey" (life = journey)
- "Time is money" (time = money)
- "The classroom was a zoo" (chaos compared to zoo)
- "He has a heart of stone" (emotional coldness = stone)

**Extended metaphor:** A metaphor developed over several sentences or an entire text.
"Life is a journey. Sometimes the road is smooth; sometimes it is rocky. We all choose our own paths, and sometimes we need to change direction."

**Effect:** Metaphors create strong connections and can express abstract ideas concretely.

**Personification**
Giving human qualities, emotions, or abilities to non-human things (objects, animals, nature, abstract concepts).

Examples:
- "The wind whispered through the trees" (wind cannot whisper)
- "The sun smiled down on us" (sun cannot smile)
- "Fear gripped my heart" (fear cannot grip)
- "The old house groaned in the storm" (house cannot groan)
- "Time flies" (time cannot fly)

**Effect:** Personification makes descriptions more vivid and helps readers connect emotionally with non-human elements.

**Hyperbole**
Deliberate exaggeration for emphasis or dramatic effect (not meant literally).

Examples:
- "I've told you a million times" (exaggerated number)
- "I'm so hungry I could eat a horse" (exaggerated hunger)
- "This bag weighs a ton" (exaggerated weight)
- "I died of embarrassment" (exaggerated reaction)

**Effect:** Hyperbole emphasizes feelings or situations and often adds humor.

**Understatement (Litotes)**
Deliberately presenting something as less significant than it is.

Examples:
- "It's just a scratch" (about a serious injury)
- "The exam was not exactly easy" (it was very difficult)
- "Einstein was not a bad mathematician" (he was brilliant)
- "The hurricane caused some inconvenience" (it caused massive destruction)

**Effect:** Understatement can create irony, humor, or emphasize something by seeming to diminish it.

**Oxymoron**
Combining contradictory terms to create a paradoxical expression.

Examples:
- "Deafening silence" (silence cannot be deafening)
- "Bittersweet" (bitter and sweet are opposites)
- "Living dead" (contradictory states)
- "Cruel kindness" (cruelty and kindness are opposites)
- "Jumbo shrimp" (size contradiction)

**Effect:** Oxymorons express complex, contradictory feelings or situations and make readers think more deeply.`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-4-1-example-1',
      type: 'example',
      title: 'Example: Analyzing Figurative Language in Context',
      problem: 'Identify and analyze the literary devices in this passage:\n\n"The old house stood at the end of the lane, its windows staring like hollow eyes at the world below. Time had not been kind to the building - it was as fragile as an autumn leaf, ready to crumble at the slightest touch. The walls whispered secrets of the families who had lived there, while the floorboards groaned under the weight of memories. It was a living museum, frozen in a past that refused to die."',
      solution: `**Analysis of Literary Devices:**

**1. Simile:** "its windows staring like hollow eyes"
- Compares windows to hollow eyes
- Effect: Creates a creepy, haunted atmosphere; suggests the house is watching
- The adjective "hollow" adds emptiness and darkness

**2. Personification:** "staring"
- Windows cannot actually stare
- Effect: Makes the house seem alive and aware

**3. Personification:** "Time had not been kind to the building"
- Time is given the human ability to be kind or unkind
- Effect: Suggests the passage of time has been harsh, almost deliberately cruel

**4. Simile:** "as fragile as an autumn leaf"
- Compares the building to an autumn leaf
- Effect: Emphasizes extreme fragility and the sense that the house could collapse; autumn suggests decay and approaching end

**5. Personification:** "The walls whispered secrets"
- Walls cannot whisper
- Effect: Suggests history and mystery; the house holds stories of the past

**6. Personification:** "the floorboards groaned"
- Floorboards cannot groan
- Effect: Creates atmospheric sound imagery; suggests age and burden

**7. Metaphor:** "the weight of memories"
- Memories have no physical weight
- Effect: Suggests the past is heavy and burdensome

**8. Metaphor:** "It was a living museum"
- The house is compared directly to a museum
- Effect: Suggests the house preserves the past but is somehow still alive

**9. Oxymoron:** "frozen in a past that refused to die"
- "Frozen" and "refused to die" (implies life) are contradictory
- Effect: Captures the paradox of the house - stuck in time yet somehow enduring

**Overall Effect:**
The combination of these devices creates a gothic atmosphere of decay, mystery, and haunting. The extensive personification makes the house feel like a character itself, while the similes and metaphors emphasize its fragility and connection to the past.`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the literary device in each example and explain its effect:',
        subTasks: [
          { label: 'a', task: '"The stars danced in the night sky"', solution: 'Personification - Stars cannot dance. Effect: Creates a lively, magical image of the night sky. Suggests movement and beauty, making the static stars seem dynamic and joyful.' },
          { label: 'b', task: '"She was as brave as a lion"', solution: 'Simile - Comparison using "as." Effect: Connects her courage to a lion\'s well-known bravery. Lions are symbols of courage, so this emphasizes her exceptional bravery in a way readers immediately understand.' },
          { label: 'c', task: '"Nice weather we\'re having" (during a storm)', solution: 'Verbal irony - Saying the opposite of what you mean. Effect: Creates humor or sarcasm; the speaker clearly means the weather is terrible. Often used to express frustration in a socially acceptable way.' },
          { label: 'd', task: '"Time is money"', solution: 'Metaphor - Direct comparison without "like" or "as." Effect: Suggests time has value and should not be wasted. Frames time as a resource that can be spent, saved, or wasted, influencing how we think about productivity.' },
          { label: 'e', task: '"The news spread like wildfire"', solution: 'Simile - Comparison using "like." Effect: Emphasizes speed and uncontrollability. Wildfire spreads rapidly and cannot be easily stopped, so this suggests the news traveled very fast and reached many people.' },
          { label: 'f', task: '"The classroom was a zoo"', solution: 'Metaphor - Direct comparison. Effect: Suggests chaos, noise, and unruly behavior without literally saying so. Creates a vivid image of disorder by comparing students to wild animals.' },
        ],
        solution: 'Each device creates meaning beyond the literal words. When identifying devices, ask: What two things are being compared? Is it direct (metaphor) or using like/as (simile)? Is something non-human being given human qualities (personification)?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write your own creative examples of each literary device. For each, explain what effect you are trying to create.',
        subTasks: [
          { label: 'a', task: 'A simile describing happiness', solution: 'Example: "Happiness flooded through her like warm honey, slow and sweet."\nEffect: Suggests happiness as something physical, warm, and pleasurable. The slowness of honey implies the feeling lingers.' },
          { label: 'b', task: 'A metaphor about time', solution: 'Example: "Time is a river, carrying us forward whether we paddle or not."\nEffect: Suggests time\'s unstoppable forward movement. We are passive in its flow but can choose how we navigate.' },
          { label: 'c', task: 'Personification of a computer', solution: 'Example: "My computer sulked in the corner, refusing to cooperate after I accidentally deleted its files."\nEffect: Gives the computer human emotions (sulking, refusing) to express frustration with technology humorously.' },
          { label: 'd', task: 'Hyperbole about being tired', solution: 'Example: "I am so tired I could sleep for a thousand years and still need a nap."\nEffect: Exaggerates exhaustion for dramatic/humorous emphasis. The absurd timeframe conveys extreme fatigue.' },
        ],
        hints: ['Be creative and original', 'Think about what feeling or image you want to create', 'Make sure the device is clear and effective'],
        solution: 'Good literary devices should be original (avoid cliches), vivid (create clear mental images), and purposeful (serve the meaning you want to convey). The best figurative language feels natural, not forced.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2: Narrative and Structural Devices ---
    {
      id: 'engelsk-vg1-4-1-def-2',
      type: 'definition',
      title: 'Narrative and Structural Devices',
      content: `**Beyond Figurative Language: How Writers Structure Stories**

While figurative language decorates individual sentences, narrative and structural devices shape how entire stories are told and experienced.

**Foreshadowing**
Hints or clues about events that will happen later in the story.

Examples:
- "Little did she know, this would be her last peaceful day."
- A character coughing throughout Act 1 before dying of illness in Act 3
- A gun shown in Chapter 1 that is fired in Chapter 10 (Chekhov's Gun)
- Dark storm clouds gathering before a tragic event

**Effect:** Creates suspense, builds tension, and makes the eventual event feel inevitable rather than random. When readers look back, they see the signs.

**Flashback (Analepsis)**
A scene that takes the reader back to an earlier time, interrupting the chronological sequence.

Examples:
- "Twenty years ago, in this very room..."
- A soldier in the present suddenly remembering combat experiences
- A character smelling cookies and being transported to childhood memories

**Effect:** Provides background information, explains character motivations, creates emotional depth, and reveals the past's impact on the present.

**Flash-forward (Prolepsis)**
A scene that jumps ahead to show future events before returning to the present.

Example: A story opening with a funeral, then jumping back to show how we got there.

**Effect:** Creates intrigue and dramatic irony; readers know the outcome but want to see how it happens.

**Irony**

**Verbal Irony:** Saying the opposite of what you mean.
- "Oh great, another Monday" (sarcasm)
- Calling a very tall person "Shorty"

**Situational Irony:** When events turn out opposite to expectations.
- A fire station burning down
- A swimming instructor who cannot swim
- A thief's car being stolen

**Dramatic Irony:** When the audience knows something the characters do not.
- In Romeo and Juliet, the audience knows Juliet is only sleeping, but Romeo thinks she is dead
- In horror films, we see the killer behind the door while the character walks toward it

**Effect:** Creates tension, humor, or tragedy depending on context. Dramatic irony is especially powerful for building suspense.

**Symbolism**
Objects, colors, or elements that represent abstract ideas beyond their literal meaning.

Common symbols:
- **Light/Dark:** Knowledge vs ignorance, good vs evil
- **Water:** Purification, rebirth, emotional depth
- **Seasons:** Spring = new beginnings, Autumn = decay, Winter = death
- **Colors:** Red = passion/danger, White = purity/death, Green = nature/envy
- **Journey/Road:** Life's path, personal growth
- **Birds:** Freedom, spirituality

**Effect:** Adds layers of meaning that reward careful readers. Symbols connect to universal human experiences.

**Motif**
A recurring element (image, phrase, situation) that develops or supports the theme.

Examples:
- Water imagery throughout a novel about baptism and renewal
- References to blindness in a story about perception and truth
- Recurring mentions of clocks in a story about mortality

**Effect:** Creates patterns that reinforce themes and create unity. Motifs work cumulatively.

**Juxtaposition**
Placing contrasting elements side by side for effect.

Examples:
- Rich mansion next to homeless shelter (inequality)
- Beautiful day during a funeral (emotional contrast)
- Child's laughter during a war scene (innocence vs violence)

**Effect:** Highlights differences, creates irony, emphasizes themes through contrast.

**Allegory**
A story where characters and events represent abstract ideas or moral qualities.

Examples:
- Animal Farm (animals represent political figures and ideologies)
- The Lion, the Witch, and the Wardrobe (Aslan represents Christ)
- Lord of the Flies (island represents society, boys represent human nature)

**Effect:** Allows authors to comment on politics, religion, or society through story.`,
    },
    // --- EKSEMPEL 2 ---
    {
      id: 'engelsk-vg1-4-1-example-2',
      type: 'example',
      title: 'Example: Identifying Structural Devices in a Text',
      problem: 'Read this passage and identify the narrative/structural devices used:\n\n"Sarah stood at the edge of the cliff, looking down at the churning water below. The wind howled around her like a warning. Somehow, she had known it would end this way - she had dreamed of this moment since childhood, always waking before the fall.\n\nShe remembered the day it all began. She was seven years old, playing in her grandmother\'s garden. The old woman had taken her hand and said, \'Some people are born to fly, Sarah. But flying and falling feel the same until you land.\'\n\nNow, twenty years later, Sarah finally understood. Below her, the dark water waited. Above her, the sky stretched endless and free. Light and dark. Fear and freedom. She smiled."',
      solution: `**Structural Devices Identified:**

**1. Foreshadowing:**
- "The wind howled around her like a warning" - Suggests something dangerous or significant is about to happen
- "She had known it would end this way" - Directly hints at the ending
- "Always waking before the fall" - Foreshadows the potential fall from the cliff
- Grandmother's words about flying and falling - Foreshadow this moment of choice

**2. Flashback:**
- "She remembered the day it all began. She was seven years old..." - Takes us back to childhood
- Purpose: Explains the origin of Sarah's current situation and provides context through the grandmother's mysterious words
- The transition is clearly marked with "She remembered"

**3. Symbolism:**
- **The cliff:** A point of no return, decision, or transformation
- **Churning water below:** Danger, the unknown, perhaps death
- **The sky:** Freedom, possibility, escape
- **Light and dark:** The contrast between hope and despair, life and death
- **Flying/Falling:** Risk, ambition, the fine line between success and failure

**4. Juxtaposition:**
- "Below her, the dark water waited. Above her, the sky stretched endless and free" - Direct contrast between two options/paths
- "Light and dark. Fear and freedom." - Pairs of opposites presented together
- The contrast emphasizes Sarah's choice between two very different paths

**5. Personification (supporting device):**
- "The wind howled" - Wind given animal/human quality
- "The dark water waited" - Water given patient, human-like quality

**Overall Effect:**
The combination of foreshadowing and flashback creates mystery about how we arrived at this moment and what will happen next. The symbolism elevates a simple cliff scene into a profound moment of life choice. The juxtaposition reinforces the binary nature of Sarah's decision. The passage leaves the ending ambiguous - will she fall or fly?`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Identify the type of irony in each example and explain its effect:',
        subTasks: [
          { label: 'a', task: 'In Romeo and Juliet, Romeo kills himself because he thinks Juliet is dead, but the audience knows she is merely sleeping.', solution: 'Dramatic irony - The audience knows what Romeo does not (that Juliet is alive). Effect: Creates intense tragedy and frustration; we want to warn Romeo but cannot. This heightens the emotional impact of his death and makes the "star-crossed lovers" fate feel especially cruel.' },
          { label: 'b', task: 'A fire station burns down while all the firefighters are out fighting a small brush fire.', solution: 'Situational irony - The fire station, designed to prevent fires, burns down. The expectation is reversed. Effect: Highlights the absurdity or unpredictability of life. Often used for dark humor or to comment on the unexpected.' },
          { label: 'c', task: 'After failing a test: "Well, that went brilliantly."', solution: 'Verbal irony (sarcasm) - Saying "brilliantly" when meaning the opposite. Effect: Expresses frustration or disappointment indirectly. Adds humor to a negative situation and allows the speaker to save face while acknowledging failure.' },
          { label: 'd', task: 'A professional swimming instructor drowns in a pool.', solution: 'Situational irony - Someone expert in water safety dies in water. Effect: Shocks readers by reversing expectations; can be tragic or darkly humorous. Reminds us that expertise does not guarantee safety.' },
          { label: 'e', task: 'In a horror movie, the audience sees the killer hiding in the closet while the character walks toward it.', solution: 'Dramatic irony - The audience knows danger is present; the character does not. Effect: Creates suspense and tension. Viewers want to warn the character, making them emotionally invested in the scene.' },
        ],
        solution: 'Irony always involves a gap between expectation and reality, or between what is said and what is meant. Verbal irony is about words; situational irony is about events; dramatic irony is about knowledge differences between audience and characters.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'For each symbol, explain what it commonly represents and give an example of how it might be used in a story:',
        subTasks: [
          { label: 'a', task: 'A storm', solution: 'Common meanings: Conflict, emotional turmoil, danger, change, divine anger/intervention, cleansing.\n\nExample: In a story about a failing marriage, a violent storm could coincide with a major argument between the couple, the external chaos reflecting their internal conflict. After the storm passes, they might find clarity - for better or worse.' },
          { label: 'b', task: 'A mirror', solution: 'Common meanings: Self-reflection, vanity, truth, duality, identity, the soul.\n\nExample: A character struggling with their identity might look in a mirror and see a stranger. The mirror could reveal their true self versus the facade they present to the world. In fairy tales, magic mirrors show truth.' },
          { label: 'c', task: 'A journey/road', solution: 'Common meanings: Life\'s path, personal growth, transformation, choices, adventure, search for meaning.\n\nExample: A coming-of-age story where a teenager literally travels across the country, with each stop representing a stage of personal growth. The road becomes their path to adulthood.' },
          { label: 'd', task: 'Fire', solution: 'Common meanings: Passion, destruction, transformation, purification, knowledge (Prometheus), danger, anger.\n\nExample: A phoenix story where a character must go through a metaphorical fire (trauma, hardship) to emerge transformed and stronger. Or fire could represent forbidden passion that destroys everything it touches.' },
        ],
        hints: ['Think about how these symbols have been used in stories you know', 'Symbols can have multiple meanings depending on context', 'Consider both positive and negative interpretations'],
        solution: 'Symbols gain meaning from cultural traditions and context within the story. The same symbol can mean different things in different contexts. Good writers use symbols consistently throughout their work to reinforce themes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-4-1-summary',
      type: 'text',
      content: `## Summary: Literary Devices and Techniques

**Figurative Language:**
| Device | Definition | Example |
|--------|------------|---------|
| Simile | Comparison using "like" or "as" | "Brave as a lion" |
| Metaphor | Direct comparison (X is Y) | "Life is a journey" |
| Personification | Human qualities to non-human things | "The wind whispered" |
| Hyperbole | Deliberate exaggeration | "I've told you a million times" |
| Understatement | Deliberate minimizing | "It's just a scratch" |
| Oxymoron | Contradictory terms together | "Deafening silence" |

**Narrative/Structural Devices:**
| Device | Definition | Effect |
|--------|------------|--------|
| Foreshadowing | Hints about future events | Creates suspense |
| Flashback | Scene from earlier time | Provides background |
| Irony (verbal) | Saying the opposite | Humor, sarcasm |
| Irony (situational) | Events opposite to expectations | Surprise, commentary |
| Irony (dramatic) | Audience knows more than characters | Suspense, tragedy |
| Symbolism | Objects representing abstract ideas | Adds deeper meaning |
| Motif | Recurring element | Reinforces theme |
| Juxtaposition | Contrasting elements side by side | Highlights differences |

**Tips for Analysis:**
1. Identify the device - name it correctly
2. Quote the example - use specific words from the text
3. Explain the effect - what does it make readers feel or understand?
4. Connect to meaning - how does it support the theme or message?

**Remember:**
- Multiple devices often work together
- Context matters - the same device can have different effects
- Good writers use devices purposefully, not randomly
- Learning to identify devices helps you appreciate and create better writing`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'engelsk-vg1-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyze this poem excerpt for literary devices. Identify at least 6 different devices and explain their effect.',
        subTasks: [
          { label: 'poem', task: '"The fog comes\non little cat feet.\nIt sits looking\nover harbor and city\non silent haunches\nand then moves on."\n\n- Carl Sandburg, "Fog"', solution: 'Literary Devices Analysis:\n\n**1. Extended Metaphor:**\nThe entire poem compares fog to a cat. This is not stated directly but implied through all the cat-like descriptions.\nEffect: Makes the abstract (fog) concrete and familiar; gives fog a personality.\n\n**2. Personification:**\n"It sits looking" and "moves on" give the fog human/animal awareness and intention.\nEffect: Makes fog seem like a conscious creature observing the city.\n\n**3. Imagery (Visual):**\n"Little cat feet," "silent haunches," "looking over harbor and city"\nEffect: Creates vivid mental pictures that bring the fog to life.\n\n**4. Symbolism:**\nThe cat could symbolize mystery, independence, or the quiet arrival of change.\nEffect: Adds depth beyond literal description.\n\n**5. Alliteration/Soft Sounds:**\nRepetition of soft sounds: "fog," "feet," "silent," "sits"\nEffect: Mimics the quiet, soft nature of fog; creates hushed atmosphere.\n\n**6. Juxtaposition:**\n"Harbor and city" - nature meets human construction\nEffect: Shows fog encompassing both natural and urban environments.\n\n**7. Understatement:**\n"Little cat feet" - fog can cover entire cities, but is described in tiny terms\nEffect: Emphasizes the quiet, gentle arrival despite fog\'s enormity.\n\n**Overall Effect:**\nThe poem transforms something ordinary (fog) into something magical and alive. The extended cat metaphor makes readers see fog in a new way - not as weather but as a visiting creature.' },
        ],
        solution: 'Good literary analysis identifies specific devices, quotes evidence, and explains how the devices contribute to the poem\'s overall meaning and effect.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Write a short descriptive paragraph (80-100 words) about ONE of these topics. Include at least 4 different literary devices and underline/label them:\n\nTopics:\na) A stormy night\nb) A crowded city\nc) An abandoned building\nd) The ocean',
        hints: [
          'Plan your devices before writing',
          'Use a mix of figurative and structural devices',
          'Make the devices feel natural, not forced',
          'Read aloud to check flow'
        ],
        solution: 'Example response (Topic: A stormy night):\n\n"The storm attacked the village without mercy (personification), its thunder roaring like an angry giant (simile). Rain fell in sheets as thick as curtains (simile), while lightning painted the sky in brilliant white flashes (metaphor). The old oak tree in the square trembled, its branches reaching desperately toward the heavens (personification). No one ventured outside. Even the bravest souls cowered indoors, their windows staring blankly (personification) at the chaos beyond. Nature was reminding humanity who was truly in charge (personification) - and her message was deafening (hyperbole)."\n\nDevices used:\n1. Personification: storm attacked, tree trembled/reaching, windows staring, Nature reminding\n2. Simile: like an angry giant, as thick as curtains\n3. Metaphor: lightning painted the sky\n4. Hyperbole: deafening message\n\nYour paragraph should include at least 4 clearly identifiable devices that work together to create atmosphere.',
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
