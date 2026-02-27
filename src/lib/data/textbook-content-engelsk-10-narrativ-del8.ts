/**
 * Engelsk 10. klasse - Narrative Versions Part 8 (Chapters 29-34)
 *
 * Engaging, narrative versions of chapters optimized for reading/listening.
 * Each narrative version links back to the original chapter via linkedChapterId.
 *
 * Covers: Exam Preparation — Long Answer Writing, Short Answer Writing,
 *         Oral Exam, Listening Comprehension, Reading Comprehension, Exam Strategies
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 29 NARRATIVE: Writing for the Exam — Long Answer
// ============================================================================

export const CHAPTER_ENGELSK_10_29_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-29-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '29',
  title: 'Writing for the Exam — Long Answer',
  subtitle: 'Narrativ versjon',
  description: 'Master the art of essay writing with the PEEL method, clear structure, and strategies for producing compelling long-form answers under exam conditions.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-29',
  content: [
    {
      id: 'engelsk-10-29-n-intro',
      type: 'text',
      content: `## Writing That Earns Top Marks

There is a moment in every exam when you turn the page, read the long-answer question, and feel a mix of excitement and dread. You know what you want to say, roughly, but the blank page stares back at you and the clock is ticking. How do you turn your ideas into a well-structured, persuasive essay that earns the marks you deserve?

The good news is that strong essay writing is a skill, not a talent. It can be learned, practised, and improved. The best exam essays are not necessarily written by the most knowledgeable students; they are written by students who know how to organise their knowledge effectively, present it clearly, and support it with evidence.

In this chapter, we will break down the anatomy of a great long-answer essay. You will learn about essay structure, the PEEL method for constructing powerful paragraphs, and practical strategies for writing under the pressure of exam conditions. By the end, that blank page will feel like an opportunity rather than a threat.`,
    },
    {
      id: 'engelsk-10-29-n-section1',
      type: 'text',
      content: `## Essay Structure: The Architecture of Argument

Every successful essay has three parts: an introduction, a body, and a conclusion. This might seem obvious, but you would be surprised how many exam essays fail because they lack clear structure. Without structure, even brilliant ideas become a confused mess that the examiner struggles to follow.

The **introduction** has three jobs. First, it must engage the reader. Starting with a thought-provoking question, a surprising fact, or a bold statement pulls the examiner in and signals that this essay will be worth reading. Second, it must establish the topic. Make clear what question you are answering and what subject you are addressing. Third, it must present your thesis, the central argument or position that the rest of your essay will develop and support.

A strong thesis is specific and arguable. "Climate change is bad" is too vague to be useful. "The most effective response to climate change requires both individual behaviour change and systemic government action" gives you a clear position to develop. Your thesis is the backbone of your essay. Every paragraph in the body should connect back to it.

The **body** is where you develop your argument. Each paragraph should focus on one main point that supports your thesis. Three to four well-developed body paragraphs are usually appropriate for an exam essay. The order matters: start with your second-strongest point, put weaker points in the middle, and end with your strongest point. This creates a structure that opens well and finishes powerfully.

The **conclusion** does not simply repeat what you have already said. It synthesises your argument, showing how your points connect and what they add up to together. It might broaden the discussion, connecting your specific topic to wider issues. It should leave the examiner with a strong final impression. A good conclusion feels like arriving at a destination, not just stopping.

**Transitions** between paragraphs are the glue that holds your essay together. Words and phrases like "Furthermore," "In contrast," "Building on this point," and "While this is important, it is equally crucial to consider" guide the reader through your argument. Without transitions, your essay reads like a list of disconnected points. With them, it reads like a journey with a clear path.`,
    },
    {
      id: 'engelsk-10-29-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on essay structure:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-29-n-quiz1-q0',
            task: 'What are the three jobs of an essay introduction?',
            options: [
              { id: 'a', text: 'Define terms, list sources, state your grade', isCorrect: false },
              { id: 'b', text: 'Engage the reader, establish the topic, present the thesis', isCorrect: true },
              { id: 'c', text: 'Summarise, conclude, recommend', isCorrect: false },
              { id: 'd', text: 'State the question, apologise for errors, begin writing', isCorrect: false },
            ],
            solution: 'A strong introduction engages the reader (with a question, fact, or bold statement), establishes the topic (what question you are answering), and presents your thesis (the central argument your essay will develop).',
          },
          {
            id: 'engelsk-10-29-n-quiz1-q1',
            task: 'What is the recommended order for body paragraphs?',
            options: [
              { id: 'a', text: 'Strongest point first, weakest last', isCorrect: false },
              { id: 'b', text: 'Alphabetical order of topics', isCorrect: false },
              { id: 'c', text: 'Second-strongest first, weaker points in the middle, strongest last', isCorrect: true },
              { id: 'd', text: 'Random order since all points are equal', isCorrect: false },
            ],
            solution: 'Starting with your second-strongest point, placing weaker arguments in the middle, and ending with your strongest creates a structure that opens well and finishes powerfully, leaving the examiner with your best argument fresh in mind.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-29-n-section2',
      type: 'text',
      content: `## The PEEL Method: Building Powerful Paragraphs

If the essay structure is the architecture of your argument, the **PEEL method** is the blueprint for each room. PEEL stands for Point, Evidence, Explanation, and Link, and it transforms vague paragraphs into focused, convincing arguments.

**Point:** Start each paragraph with a clear topic sentence that states the main idea. This sentence should make a specific claim that supports your thesis. "Social media has a significant negative impact on teenagers' mental health" is a clear point. "Social media is interesting" is not.

**Evidence:** Support your point with concrete evidence. This might be a quotation from a text you have read, a statistic, a specific example, or a reference to a real event. Evidence gives your argument credibility. Without it, you are just expressing opinions. "A 2023 study by the American Psychological Association found that teenagers who spend more than three hours daily on social media are twice as likely to report symptoms of depression" is evidence that supports your point.

**Explanation:** This is where many students fall short. Evidence does not speak for itself. You must explain how your evidence supports your point. Why does this statistic matter? What does it prove? How does it connect to the larger argument? The explanation is where you show your thinking, and it is often the part that separates good essays from great ones.

**Link:** End the paragraph by connecting back to your thesis and transitioning toward the next paragraph. This keeps your essay cohesive and reminds the reader that every paragraph serves the larger argument. "This evidence strongly supports the argument that social media regulation is needed, but policy changes alone are insufficient; education must also play a role."

Here is a complete PEEL paragraph in action:

"One of the most compelling arguments for teaching climate change in schools is that young people will bear the greatest consequences of today's decisions. **(Point)** According to UNICEF, over one billion children are at 'extremely high risk' from the impacts of climate change, including flooding, heatwaves, and water scarcity. **(Evidence)** This statistic is staggering because it demonstrates that the generation with the least political power is the most vulnerable. If children do not understand the science behind climate change and the actions needed to address it, they will be unable to advocate effectively for their own future. **(Explanation)** This underscores the necessity of comprehensive climate education, which must also equip students with the critical thinking skills to evaluate proposed solutions. **(Link)**"`,
    },
    {
      id: 'engelsk-10-29-n-section3',
      type: 'text',
      content: `## Writing Under Pressure: Exam Strategies

Knowing how to write a great essay is one thing. Doing it under the time pressure of an exam is another. Here are practical strategies that make the difference.

**Plan before you write.** Spend the first five to ten minutes of your essay time planning. Jot down your thesis, your main points, and key evidence for each. A brief outline saves time in the long run because it prevents you from going off track, repeating yourself, or realising halfway through that your argument does not work.

**Write your introduction last** (or at least, revise it last). Your understanding of your own argument deepens as you write the body paragraphs. An introduction written after the body will be sharper and more accurate than one written before you fully knew what you wanted to say. If you find it hard to start without an introduction, write a rough version first and come back to refine it.

**Use specific language.** Replace vague words with precise ones. Instead of "many people," write "researchers" or "educators" or "young people." Instead of "things," name the specific things you mean. Instead of "good" or "bad," use "effective," "harmful," "crucial," "problematic." Precise language signals clear thinking.

**Vary your sentence structure.** A series of short, simple sentences reads like a children's book. A series of long, complex sentences is exhausting. Mix them. Use short sentences for impact. Use longer sentences for development and nuance. This rhythm keeps the reader engaged.

**Leave time to proofread.** Reserve five minutes at the end to read through your essay. Look for spelling errors, grammatical mistakes, and unclear sentences. Even small corrections can improve your grade. Pay special attention to common errors: subject-verb agreement, tense consistency, and the difference between "there," "their," and "they're."

**Answer the question.** This sounds obvious, but it is the most common mistake in exam essays. Students write everything they know about a topic rather than addressing the specific question asked. Every paragraph should clearly connect to the question. If you cannot explain how a paragraph answers the question, cut it.`,
    },
    {
      id: 'engelsk-10-29-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on the PEEL method and exam writing:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-29-n-quiz2-q0',
            task: 'What does PEEL stand for?',
            options: [
              { id: 'a', text: 'Plan, Execute, Evaluate, Learn', isCorrect: false },
              { id: 'b', text: 'Point, Evidence, Explanation, Link', isCorrect: true },
              { id: 'c', text: 'Purpose, Example, Ending, Length', isCorrect: false },
              { id: 'd', text: 'Paragraph, Essay, Edit, List', isCorrect: false },
            ],
            solution: 'PEEL stands for Point (your topic sentence), Evidence (concrete support), Explanation (why the evidence matters), and Link (connection back to thesis and forward to next point).',
          },
          {
            id: 'engelsk-10-29-n-quiz2-q1',
            task: 'Why should you spend the first 5-10 minutes of essay time planning?',
            options: [
              { id: 'a', text: 'Because examiners check your plan and give marks for it', isCorrect: false },
              { id: 'b', text: 'Because planning prevents going off track, repeating yourself, or discovering your argument does not work', isCorrect: true },
              { id: 'c', text: 'Because it is a required part of the exam format', isCorrect: false },
              { id: 'd', text: 'Because writing without a plan is not allowed', isCorrect: false },
            ],
            solution: 'Planning saves time overall by preventing common problems: going off topic, repeating arguments, realising mid-essay that your thesis does not work, or forgetting key evidence. A few minutes of planning creates a much stronger final essay.',
          },
          {
            id: 'engelsk-10-29-n-quiz2-q2',
            task: 'What is the most common mistake in exam essays?',
            options: [
              { id: 'a', text: 'Writing too little', isCorrect: false },
              { id: 'b', text: 'Using too many quotations', isCorrect: false },
              { id: 'c', text: 'Writing everything you know about a topic rather than answering the specific question', isCorrect: true },
              { id: 'd', text: 'Starting with the conclusion', isCorrect: false },
            ],
            solution: 'The most common exam essay mistake is writing a general essay about the topic rather than directly answering the specific question asked. Every paragraph must clearly connect to and address the question.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-29-n-summary',
      type: 'text',
      content: `## Summary

Strong essay writing is a learnable skill that transforms your exam performance.

**Essay structure** provides the architecture: an engaging introduction with a clear thesis, body paragraphs ordered strategically, a synthesising conclusion, and smooth transitions between sections.

**The PEEL method** builds powerful paragraphs: Point (topic sentence), Evidence (concrete support), Explanation (analysis of why it matters), and Link (back to thesis and forward to next point). The Explanation step is often what separates good essays from great ones.

**Exam strategies** include planning before writing, using specific language, varying sentence structure, leaving time to proofread, and always answering the actual question asked. These practical techniques help you perform your best under pressure.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 30 NARRATIVE: Writing for the Exam — Short Answer
// ============================================================================

export const CHAPTER_ENGELSK_10_30_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-30-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '30',
  title: 'Writing for the Exam — Short Answer',
  subtitle: 'Narrativ versjon',
  description: 'Learn the PEE method for writing concise, focused short answers that demonstrate understanding efficiently and earn maximum marks in minimum words.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-30',
  content: [
    {
      id: 'engelsk-10-30-n-intro',
      type: 'text',
      content: `## The Art of Saying More with Less

If the long-answer essay is a novel, the short answer is a poem. It demands precision. Every word must earn its place. There is no room for waffle, repetition, or padding. In a short answer, you must demonstrate your understanding quickly and clearly, hitting the key points with surgical accuracy.

Many students actually find short answers harder than essays. With an essay, you have space to develop your thoughts, to circle back to ideas, to build gradually. With a short answer, you need to get it right immediately. The question asks something specific, and you need to provide a focused, complete, and well-supported answer in just a few sentences or a short paragraph.

The good news is that there is a method for this too. Just as PEEL helps you build essay paragraphs, the **PEE method** (Point, Evidence, Explanation) provides a framework for short answers that ensures you include everything the examiner is looking for. In this chapter, we will master this method and learn strategies for writing concise answers that earn maximum marks.`,
    },
    {
      id: 'engelsk-10-30-n-section1',
      type: 'text',
      content: `## The PEE Method: Point, Evidence, Explanation

The PEE method is the streamlined version of PEEL, designed specifically for shorter responses. It ensures that your answer has substance even when space is limited.

**Point:** Make your main claim clearly and directly. Answer the question in your first sentence. Do not build up to your answer; state it immediately. If the question asks "How does the author create tension in this scene?", your first sentence should be something like "The author creates tension through short, fragmented sentences and the use of darkness as a motif."

**Evidence:** Support your point with a specific reference to the text. This might be a direct quotation (using quotation marks), a paraphrase of a key passage, or a reference to a specific event, character action, or detail. "For example, the sentence 'The door. The shadow. The silence.' uses fragments to create a sense of urgency and unease."

**Explanation:** Explain how your evidence supports your point. Do not assume the connection is obvious. "These fragments force the reader to pause between each image, mimicking the character's heightened awareness and the breathless quality of fear. The abrupt rhythm contrasts with the flowing sentences earlier in the text, signalling a shift from calm to crisis."

The PEE method is not a rigid formula. Sometimes you might make two points with two pieces of evidence in one answer. Sometimes the explanation naturally blends with the evidence. The key principle is: claim + proof + analysis. Never leave a claim unsupported, and never present evidence without explaining its significance.

**Common mistakes in short answers:**

The biggest is not answering the question directly. Students often write around the question rather than addressing it head-on. If the question asks about the effect of a literary device, explain the effect. Do not simply identify the device and move on.

Another common mistake is retelling the story instead of analysing it. If asked "How does the author show that the character is nervous?", do not summarise the plot. Instead, identify specific techniques (word choice, body language, dialogue) and explain how they convey nervousness.

A third mistake is using too many words to say too little. "I think that in my opinion it could possibly be argued that" can be replaced with "This suggests." Be direct. Be confident. Every unnecessary word dilutes your answer.`,
    },
    {
      id: 'engelsk-10-30-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on the PEE method:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-30-n-quiz1-q0',
            task: 'What does PEE stand for in the short-answer method?',
            options: [
              { id: 'a', text: 'Plan, Edit, Execute', isCorrect: false },
              { id: 'b', text: 'Point, Evidence, Explanation', isCorrect: true },
              { id: 'c', text: 'Paragraph, Example, Ending', isCorrect: false },
              { id: 'd', text: 'Purpose, Effect, Evaluation', isCorrect: false },
            ],
            solution: 'PEE stands for Point (your direct answer), Evidence (specific textual support), and Explanation (analysis of how the evidence supports your point).',
          },
          {
            id: 'engelsk-10-30-n-quiz1-q1',
            task: 'What is the most important principle of short-answer writing?',
            options: [
              { id: 'a', text: 'Write as much as possible to show your knowledge', isCorrect: false },
              { id: 'b', text: 'Always include your personal opinion', isCorrect: false },
              { id: 'c', text: 'Answer the question directly in your first sentence', isCorrect: true },
              { id: 'd', text: 'Start with background information about the author', isCorrect: false },
            ],
            solution: 'In short answers, you should state your answer in the first sentence. Do not build up to it or provide unnecessary background. Direct answers show confidence and focus.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-30-n-section2',
      type: 'text',
      content: `## Concise Writing: Techniques for Precision

Writing concisely is a skill that takes practice. Here are specific techniques for making your writing tighter and more effective.

**Cut redundancy.** "In today's modern world" is redundant; "today" implies modern. "Completely unique" is redundant; "unique" already means one of a kind. "Past experience" is redundant; all experience is in the past. Train yourself to spot and eliminate these padding phrases.

**Use strong verbs.** Instead of "The author makes use of metaphor," write "The author employs metaphor" or simply "The author uses metaphor." Instead of "The character is showing signs of fear," write "The character reveals fear" or "The character displays fear." Strong verbs do the work of entire phrases.

**Avoid hedge words** unless genuinely necessary. "Perhaps," "possibly," "somewhat," "I think," "it could be argued that" all weaken your answer without adding meaning. When analysing a text, be assertive: "The metaphor suggests isolation" is stronger than "The metaphor could perhaps suggest something related to isolation."

**Replace phrases with single words.** "Due to the fact that" means "because." "In order to" means "to." "At this point in time" means "now." "A large number of" means "many." These substitutions save words without losing meaning.

**Use the technical vocabulary of literary analysis.** Saying "the author uses alliteration to create a harsh sound" is more concise and precise than "the author uses words that start with the same letter to make it sound rough." Technical terms are efficient shortcuts that also demonstrate your knowledge.

**Read your answer backwards.** After writing a short answer, read each sentence from last to first. This breaks the flow and helps you see each sentence independently, making it easier to spot sentences that do not contribute to your answer. If a sentence does not directly support your point, cut it.

Let us compare a weak short answer with a strong one.

**Weak:** "In this text, the author writes about many different things. I think the main theme is probably about loneliness. There is a part where the character is alone, which shows this. It is quite sad."

**Strong:** "The central theme is loneliness. The repeated image of the empty chair at the dinner table symbolises absence, while the protagonist's habit of talking to herself reveals the depth of her isolation. The author reinforces this through the cold, barren setting, which mirrors the character's emotional state."

The strong version is actually shorter than the weak version, yet it says far more because every word serves a purpose.`,
    },
    {
      id: 'engelsk-10-30-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on concise writing:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-30-n-quiz2-q0',
            task: 'Which phrase is more concise and effective?',
            options: [
              { id: 'a', text: '"Due to the fact that the character is feeling sad"', isCorrect: false },
              { id: 'b', text: '"Because the character feels sad"', isCorrect: true },
              { id: 'c', text: '"It could possibly be argued that the character might be experiencing some sadness"', isCorrect: false },
              { id: 'd', text: '"In terms of the character\'s emotional state, there is evidence of sadness"', isCorrect: false },
            ],
            solution: '"Because the character feels sad" is direct and efficient. "Due to the fact that" is a wordy replacement for "because." Hedge words like "possibly," "might," and "some" weaken the statement without adding precision.',
          },
          {
            id: 'engelsk-10-30-n-quiz2-q1',
            task: 'Why should you use technical literary vocabulary in exam answers?',
            options: [
              { id: 'a', text: 'To impress the examiner with difficult words', isCorrect: false },
              { id: 'b', text: 'Technical terms are more concise and precise than everyday descriptions, and demonstrate knowledge', isCorrect: true },
              { id: 'c', text: 'Because examiners only accept technical language', isCorrect: false },
              { id: 'd', text: 'Technical vocabulary is required in every sentence', isCorrect: false },
            ],
            solution: 'Technical terms like "alliteration," "metaphor," and "juxtaposition" are efficient shortcuts. Using them is more precise and concise than describing the technique in everyday language, and it demonstrates your understanding of literary concepts.',
          },
          {
            id: 'engelsk-10-30-n-quiz2-q2',
            task: 'What is the biggest difference between the "weak" and "strong" short answers in the example?',
            options: [
              { id: 'a', text: 'The strong answer is longer', isCorrect: false },
              { id: 'b', text: 'The strong answer uses specific evidence and analysis while the weak answer uses vague generalisations', isCorrect: true },
              { id: 'c', text: 'The strong answer includes the author\'s biography', isCorrect: false },
              { id: 'd', text: 'The weak answer has better grammar', isCorrect: false },
            ],
            solution: 'The strong answer uses specific evidence (the empty chair, the protagonist talking to herself, the cold setting) and explains how each supports the point. The weak answer relies on vague claims ("many different things," "quite sad") without concrete support.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-30-n-summary',
      type: 'text',
      content: `## Summary

Short-answer writing demands precision: saying more with less.

**The PEE method** (Point, Evidence, Explanation) provides a framework for focused answers. State your answer directly, support it with specific evidence, and explain the significance. Never leave claims unsupported or evidence unexplained.

**Concise writing techniques** include cutting redundancy, using strong verbs, avoiding hedge words, replacing phrases with single words, using technical vocabulary, and checking each sentence for relevance.

**Common mistakes** to avoid: not answering the question directly, retelling the story instead of analysing it, and using too many words to say too little. The best short answers are often shorter than average but contain more substance because every word earns its place.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 31 NARRATIVE: Oral Exam Preparation
// ============================================================================

export const CHAPTER_ENGELSK_10_31_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-31-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '31',
  title: 'Oral Exam Preparation',
  subtitle: 'Narrativ versjon',
  description: 'Prepare confidently for the oral exam with strategies for presentations, handling follow-up questions, and managing nerves.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-31',
  content: [
    {
      id: 'engelsk-10-31-n-intro',
      type: 'text',
      content: `## Speaking with Confidence

For many students, the oral exam is the most nerve-wracking part of the English assessment. Writing gives you time to think, revise, and polish. Speaking demands that you produce language in real time, in front of examiners who are evaluating you. Your heart races, your mouth goes dry, and suddenly words that come easily in everyday conversation seem to vanish.

But here is the truth that every experienced teacher knows: the oral exam is also where many students shine. Freed from the constraints of writing, you can show your personality, your enthusiasm, and your ability to think on your feet. You can use tone, gesture, and expression to communicate in ways that writing cannot capture. The oral exam is not an interrogation; it is a conversation, and you already know how to have conversations.

In this chapter, we will prepare you for every part of the oral exam: planning and delivering a presentation, handling follow-up questions with grace, and managing the nerves that are completely natural and even useful. By the time you finish, you will have concrete strategies that turn anxiety into energy and uncertainty into preparation.`,
    },
    {
      id: 'engelsk-10-31-n-section1',
      type: 'text',
      content: `## Delivering a Strong Presentation

Most oral exams begin with a prepared presentation on a given topic. This is your chance to demonstrate your knowledge, your English skills, and your ability to communicate clearly. Here is how to make the most of it.

**Structure your presentation** like a mini-essay: introduction, body, conclusion. Open with a hook that grabs attention: a question, a surprising fact, a brief story, or a bold statement. Then state clearly what your presentation will cover. Develop two or three main points in the body, using specific examples and evidence. Conclude by summarising your key arguments and ending with a memorable final thought.

**Do not read from a script.** Nothing kills a presentation faster than someone reading word for word from a piece of paper. Use note cards with key points, not full sentences. This forces you to speak naturally and make eye contact with the examiners. If you read, you sound like a robot. If you speak from key points, you sound like someone who understands their topic.

**Pace yourself.** Nervous speakers tend to rush, racing through their material as if speed will end the ordeal faster. Deliberately slow down. Pause between points. Let important ideas land before moving on. Silence is not your enemy; it shows confidence and gives the examiner time to absorb what you have said.

**Use signposting language** to guide your listeners through your presentation. "First, I will discuss..." "Moving on to my second point..." "In contrast..." "To conclude..." These phrases act as a roadmap, helping the examiners follow your structure. They also give you a moment to gather your thoughts for the next section.

**Prepare concrete examples.** Abstract statements like "social media affects young people" are weak. Concrete examples like "A 2022 study found that Instagram was the platform most associated with negative body image among teenage girls" are compelling. Examiners are impressed by specific knowledge, not vague generalisations.

**Practise out loud.** Practising in your head is not the same as practising out loud. When you say words aloud, you discover which sentences are awkward, which transitions are unclear, and how long your presentation actually takes. Practise in front of a mirror, record yourself on your phone, or present to a friend or family member. Each rehearsal makes the real performance smoother.`,
    },
    {
      id: 'engelsk-10-31-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on presentation skills:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-31-n-quiz1-q0',
            task: 'Why should you avoid reading from a full script during your presentation?',
            options: [
              { id: 'a', text: 'Because scripts are not allowed in exams', isCorrect: false },
              { id: 'b', text: 'Reading word for word prevents natural delivery, eye contact, and makes you sound robotic', isCorrect: true },
              { id: 'c', text: 'Because examiners cannot read your handwriting', isCorrect: false },
              { id: 'd', text: 'Because it takes too long to write a script', isCorrect: false },
            ],
            solution: 'Reading from a script prevents eye contact, sounds unnatural, and suggests you do not truly understand your material. Speaking from key-point notes forces natural language and demonstrates genuine understanding.',
          },
          {
            id: 'engelsk-10-31-n-quiz1-q1',
            task: 'What is "signposting language" in a presentation?',
            options: [
              { id: 'a', text: 'Language about road signs and directions', isCorrect: false },
              { id: 'b', text: 'Phrases like "First," "Moving on," and "To conclude" that guide listeners through your structure', isCorrect: true },
              { id: 'c', text: 'Technical vocabulary about your topic', isCorrect: false },
              { id: 'd', text: 'The opening sentence of each paragraph', isCorrect: false },
            ],
            solution: 'Signposting language guides your listeners through the presentation\'s structure. Phrases like "First, I will discuss..." and "In contrast..." act as a roadmap and also give you moments to gather your thoughts.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-31-n-section2',
      type: 'text',
      content: `## Handling Follow-Up Questions

After your presentation, examiners will ask follow-up questions. This part of the exam often carries as much weight as the presentation itself because it shows whether you can think on your feet and discuss ideas beyond what you have prepared.

**Listen carefully to the question.** This sounds obvious, but nerves can make you hear what you expect rather than what is actually asked. If you are unsure what the examiner means, it is perfectly acceptable to ask for clarification: "Could you rephrase that?" or "Do you mean...?" This is not a sign of weakness; it shows that you care about giving an accurate answer.

**Take a moment to think.** You do not need to start answering the instant the examiner stops speaking. A brief pause of two or three seconds is natural and shows that you are thinking carefully. Rushing into an answer without thinking often leads to rambling, incoherent responses. You can buy thinking time with phrases like "That's an interesting question" or "Let me think about that for a moment."

**Structure your answer even when improvising.** Use a mini-PEE structure: make your point, support it with an example or evidence, and briefly explain. This keeps your answer focused and prevents rambling. "I think the most important factor is education. For example, countries that have invested heavily in climate education, like Finland, have higher levels of public support for environmental policies. This suggests that understanding the science leads to greater willingness to act."

**If you do not know something, be honest.** Trying to bluff your way through a question you cannot answer is obvious to experienced examiners and costs you credibility. Instead, acknowledge the gap and show what you do know: "I'm not sure about the specific statistics, but I know that deforestation is a major contributor to climate change because trees absorb CO2."

**Connect your answers to your presentation.** If a follow-up question relates to something you discussed, refer back to your presentation: "As I mentioned in my presentation, this connects to the idea of..." This shows coherence in your thinking and reinforces your key arguments.

**Manage your nerves.** Before the exam, practise deep breathing. During the exam, remember that slight nervousness actually improves performance by keeping you alert and focused. The examiners want you to succeed. They are not trying to trick you or catch you out. They are giving you opportunities to show what you know.`,
    },
    {
      id: 'engelsk-10-31-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on follow-up questions and exam nerves:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-31-n-quiz2-q0',
            task: 'What should you do if you do not understand a follow-up question?',
            options: [
              { id: 'a', text: 'Guess what the examiner meant and answer quickly', isCorrect: false },
              { id: 'b', text: 'Stay silent until the examiner moves on', isCorrect: false },
              { id: 'c', text: 'Ask for clarification by saying "Could you rephrase that?"', isCorrect: true },
              { id: 'd', text: 'Answer a different question that you know the answer to', isCorrect: false },
            ],
            solution: 'Asking for clarification shows that you care about giving an accurate, relevant answer. It is not a sign of weakness. Examiners prefer a clarification request over an answer to the wrong question.',
          },
          {
            id: 'engelsk-10-31-n-quiz2-q1',
            task: 'What should you do if you do not know the answer to a follow-up question?',
            options: [
              { id: 'a', text: 'Make up an answer that sounds convincing', isCorrect: false },
              { id: 'b', text: 'Acknowledge the gap honestly and show what you do know about the topic', isCorrect: true },
              { id: 'c', text: 'Refuse to answer and move on', isCorrect: false },
              { id: 'd', text: 'Change the subject entirely', isCorrect: false },
            ],
            solution: 'Honesty is more impressive than bluffing. Acknowledging what you do not know while demonstrating related knowledge shows intellectual maturity and maintains your credibility with examiners.',
          },
          {
            id: 'engelsk-10-31-n-quiz2-q2',
            task: 'Why is it helpful to take a brief pause before answering a follow-up question?',
            options: [
              { id: 'a', text: 'It shows the examiner you are bored', isCorrect: false },
              { id: 'b', text: 'A two-to-three second pause is natural, shows careful thinking, and prevents rambling', isCorrect: true },
              { id: 'c', text: 'Long pauses earn extra marks', isCorrect: false },
              { id: 'd', text: 'It forces the examiner to repeat the question', isCorrect: false },
            ],
            solution: 'A brief pause of two to three seconds shows that you are thinking carefully rather than rushing into an unstructured response. It is natural in conversation and leads to more focused, coherent answers.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-31-n-summary',
      type: 'text',
      content: `## Summary

The oral exam is an opportunity to show your personality, knowledge, and ability to communicate in English.

**Presentation skills** include clear structure (introduction, body, conclusion), speaking from key-point notes rather than a script, deliberate pacing with pauses, signposting language, concrete examples, and practising out loud.

**Follow-up questions** test your ability to think on your feet. Listen carefully, take a moment to think, structure your answers (mini-PEE), be honest about knowledge gaps, and connect answers to your presentation.

**Managing nerves** is about preparation and perspective. Slight nervousness improves performance. The examiners want you to succeed. Deep breathing, thorough preparation, and remembering that this is a conversation, not an interrogation, will serve you well.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 32 NARRATIVE: Listening Comprehension Strategies
// ============================================================================

export const CHAPTER_ENGELSK_10_32_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-32-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '32',
  title: 'Listening Comprehension Strategies',
  subtitle: 'Narrativ versjon',
  description: 'Sharpen your ability to understand spoken English across different accents with practical note-taking techniques and active listening strategies.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-32',
  content: [
    {
      id: 'engelsk-10-32-n-intro',
      type: 'text',
      content: `## Listening Is a Skill, Not Just Hearing

We often think of listening as something passive, something that just happens when sound enters our ears. But there is an enormous difference between hearing and listening, between sound entering your ears and your brain making sense of it. Listening comprehension is an active skill that can be developed and improved, just like reading, writing, or speaking.

In the English exam, listening comprehension tests your ability to understand spoken English in various forms: conversations, lectures, interviews, news broadcasts, and audio clips. You will encounter different accents, speeds, and levels of formality. You cannot rewind or ask the speaker to repeat themselves (or at most, you hear the recording twice). This means you need strategies for extracting the most meaning from what you hear, even when you do not understand every word.

In this chapter, we will explore how to handle different English accents, effective note-taking techniques for listening tasks, and active listening strategies that dramatically improve your comprehension. These are skills that will serve you not just in the exam but throughout your life.`,
    },
    {
      id: 'engelsk-10-32-n-section1',
      type: 'text',
      content: `## Understanding Different Accents

English is spoken across the world, and it sounds different everywhere. The English you hear in a Hollywood film is different from the English of a BBC newsreader, which is different from the English of someone from Glasgow, Lagos, Mumbai, or Sydney. Accents are not obstacles to overcome; they are a fascinating part of the language. But encountering an unfamiliar accent in an exam can be challenging.

**British English** itself contains enormous variety. Received Pronunciation (RP), sometimes called "BBC English," is the prestige accent often used in education and broadcasting, but it is spoken by a small minority of British people. Regional accents from London, Manchester, Birmingham, Scotland, Wales, and Ireland each have distinctive features. Scottish English, for instance, pronounces the "r" in words like "card" and "water" where RP speakers do not, and uses different vowel sounds.

**American English** differs from British English in several systematic ways. Americans typically pronounce "r" in all positions, flatten certain vowels (the "a" in "bath" sounds different), and use a phenomenon called "flapping" where "t" between vowels sounds like a soft "d" (so "water" sounds like "wader"). Regional American accents, from the southern drawl of Texas to the nasal tones of New York, add further variety.

**Other Englishes** you might encounter include Australian English (with its distinctive rising intonation and shortened words), South African English, Indian English (which tends to use syllable-timed rhythm rather than the stress-timed rhythm of British and American English), and Nigerian English. Each has its own patterns of pronunciation, rhythm, and intonation.

The best way to prepare for unfamiliar accents is **exposure**. Watch films, documentaries, and shows featuring different varieties of English. Listen to podcasts by speakers from different countries. The more varieties you hear, the more flexible your ear becomes. You do not need to understand every word. Your brain will naturally begin to identify patterns and adjust.

When you encounter a difficult accent in the exam, do not panic. Focus on **key content words** (nouns, verbs, adjectives) rather than trying to catch every word. Context will fill in many gaps. If a speaker says something you cannot quite make out, the surrounding words will often make the meaning clear.`,
    },
    {
      id: 'engelsk-10-32-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on accents and listening:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-32-n-quiz1-q0',
            task: 'What is the best way to prepare for unfamiliar English accents?',
            options: [
              { id: 'a', text: 'Only listen to one type of English', isCorrect: false },
              { id: 'b', text: 'Regular exposure to different varieties through films, podcasts, and shows from different countries', isCorrect: true },
              { id: 'c', text: 'Memorise a dictionary of accent differences', isCorrect: false },
              { id: 'd', text: 'Avoid listening to non-standard accents', isCorrect: false },
            ],
            solution: 'The best preparation is exposure to many varieties of English. The more you hear, the more flexible your ear becomes. Your brain naturally adapts to new accent patterns through regular listening.',
          },
          {
            id: 'engelsk-10-32-n-quiz1-q1',
            task: 'What should you focus on when encountering a difficult accent?',
            options: [
              { id: 'a', text: 'Every single word, because missing one word ruins comprehension', isCorrect: false },
              { id: 'b', text: 'Key content words (nouns, verbs, adjectives) and use context to fill in gaps', isCorrect: true },
              { id: 'c', text: 'Only the first and last sentences', isCorrect: false },
              { id: 'd', text: 'The speaker\'s body language', isCorrect: false },
            ],
            solution: 'When an accent is challenging, focus on key content words (nouns, verbs, adjectives) rather than trying to catch every word. Context usually makes unclear words understandable from the surrounding information.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-32-n-section2',
      type: 'text',
      content: `## Note-Taking and Active Listening

Effective note-taking during listening tasks is the difference between remembering what you heard and forgetting it the moment the recording stops.

**Before listening,** read the questions carefully. This tells you what to listen for. If the questions ask about specific information (dates, names, reasons), you know to focus on details. If the questions ask about the speaker's opinion or the main idea, you know to focus on the overall argument. Previewing the questions turns you from a passive listener into an active hunter for specific information.

**During listening,** use abbreviations and symbols. You do not have time to write complete sentences. Develop your own shorthand: arrows for cause and effect, plus and minus for positive and negative, question marks for things you are unsure about. Write key words only, not full phrases. "Climate change → sea level +" is faster than "Climate change causes sea levels to rise" and captures the same information.

**Listen for signal words** that indicate what is coming next. "However" and "but" signal a contrast or opposing point. "For example" signals evidence. "In conclusion" or "to sum up" signals a summary of the main points. "Most importantly" signals the speaker's key argument. These words are your guideposts.

**Active listening** means engaging with what you hear, not just letting it pass through your ears. Ask yourself while listening: what is the main point? Do I agree? What evidence is being given? What is the speaker's tone? Are they certain or uncertain? Enthusiastic or critical? This active engagement dramatically improves both comprehension and retention.

**If you miss something,** do not dwell on it. Worrying about a missed word means you miss the next three sentences. Let it go and keep listening. You may catch the information when it is repeated or rephrased later. If not, your notes from the rest of the recording, combined with the context, will often be enough to answer the question.

**Between listenings** (if you get two chances), review your notes quickly and identify what you missed. On the second listening, focus specifically on the gaps in your understanding rather than trying to catch everything again.`,
    },
    {
      id: 'engelsk-10-32-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on note-taking and active listening:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-32-n-quiz2-q0',
            task: 'Why should you read the questions before the recording plays?',
            options: [
              { id: 'a', text: 'To find the answers in the questions themselves', isCorrect: false },
              { id: 'b', text: 'To know what to listen for, turning you from a passive listener into an active one', isCorrect: true },
              { id: 'c', text: 'To memorise the questions word for word', isCorrect: false },
              { id: 'd', text: 'To estimate how long the recording will be', isCorrect: false },
            ],
            solution: 'Previewing the questions tells you what specific information to listen for. This transforms passive hearing into active, targeted listening, dramatically improving your ability to find the answers you need.',
          },
          {
            id: 'engelsk-10-32-n-quiz2-q1',
            task: 'What should you do if you miss a word or phrase during the recording?',
            options: [
              { id: 'a', text: 'Ask the examiner to replay that section', isCorrect: false },
              { id: 'b', text: 'Stop taking notes and try to remember what you missed', isCorrect: false },
              { id: 'c', text: 'Let it go and keep listening; the information may be repeated or clarified later', isCorrect: true },
              { id: 'd', text: 'Write down that you missed something', isCorrect: false },
            ],
            solution: 'Dwelling on a missed word causes you to miss more of the recording. Keep listening, as the information is often repeated, rephrased, or can be inferred from context. Focus on what you can catch, not what you missed.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-32-n-summary',
      type: 'text',
      content: `## Summary

Listening comprehension is an active skill that improves with practice and strategy.

**Accents** vary enormously across the English-speaking world. The best preparation is exposure to many varieties. When encountering a difficult accent, focus on key content words and let context fill in gaps.

**Note-taking** should be efficient: use abbreviations, write key words only, and listen for signal words that indicate structure. Preview questions before listening to know what to focus on.

**Active listening** means engaging with content as you hear it: identifying main points, evaluating evidence, and noting tone. If you miss something, let it go and keep listening.

These strategies transform listening from a passive activity into an active skill, improving both exam performance and your ability to understand spoken English in the real world.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 33 NARRATIVE: Reading Comprehension — Advanced
// ============================================================================

export const CHAPTER_ENGELSK_10_33_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-33-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '33',
  title: 'Reading Comprehension — Advanced',
  subtitle: 'Narrativ versjon',
  description: 'Take your reading skills to the next level with strategies for inference, understanding different text types, and reading between the lines.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-33',
  content: [
    {
      id: 'engelsk-10-33-n-intro',
      type: 'text',
      content: `## Reading Beyond the Words

There are two levels of reading. The first is understanding what the words on the page literally say. The second, far more powerful, is understanding what the words imply, suggest, and leave unsaid. This second level, the ability to read between the lines, is what separates competent readers from truly skilled ones.

In your exam, the reading comprehension section will test both levels. Some questions will ask you to find specific information directly stated in the text. Others will ask you to infer meaning, to draw conclusions that the text supports but does not explicitly state. These inference questions are worth more marks because they test deeper understanding.

In this chapter, we will develop your ability to make inferences, understand how different text types work, and extract maximum meaning from any text you encounter. These are not tricks or shortcuts; they are genuine reading skills that will serve you far beyond any exam.`,
    },
    {
      id: 'engelsk-10-33-n-section1',
      type: 'text',
      content: `## The Art of Inference

An **inference** is a conclusion you draw based on evidence in the text combined with your own knowledge and reasoning. It is not a guess; it is a logical deduction that the text supports even though it is not explicitly stated.

Consider this sentence: "She walked into the kitchen, put the kettle on, and sat down at the table, staring at the unanswered message on her phone." What can we infer? The text does not tell us she is anxious, but the combination of the routine action (making tea), the staring, and the unanswered message strongly implies it. We are not guessing; we are reading the evidence and drawing a supported conclusion.

To make good inferences, use the formula: **text evidence + background knowledge = inference.** The text says she stares at an unanswered message. Your background knowledge tells you that staring at a phone you are not using suggests preoccupation or worry. Therefore, you infer anxiety or concern.

**Look for implied attitudes and emotions.** Authors often show rather than tell, especially in fiction. A character who "gripped the edge of the table" is probably tense or angry. A character who "let the letter fall from her fingers" is probably shocked or defeated. The physical details imply the emotional state.

**Look for the author's purpose and perspective.** Non-fiction texts also require inference. A newspaper article that uses the phrase "so-called expert" implies scepticism about that person's qualifications. A scientific report that uses cautious language like "the data suggest" implies uncertainty. An opinion piece that only presents one side of an argument implies bias.

**Look for what is missing.** Sometimes the most important thing about a text is what it does not say. A news article about a company's success that does not mention its environmental record might be omitting unflattering information. A character in a story who avoids discussing their family is telling you something by their silence.

The key to inference is confidence. Trust your reading. If the text gives you enough evidence to draw a conclusion, state that conclusion clearly. Do not hide behind phrases like "it might possibly suggest." If the evidence supports it, own your inference.`,
    },
    {
      id: 'engelsk-10-33-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on inference:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-33-n-quiz1-q0',
            task: 'What is the formula for making a good inference?',
            options: [
              { id: 'a', text: 'Opinion + guess = inference', isCorrect: false },
              { id: 'b', text: 'Text evidence + background knowledge = inference', isCorrect: true },
              { id: 'c', text: 'Dictionary + grammar = inference', isCorrect: false },
              { id: 'd', text: 'Question + answer = inference', isCorrect: false },
            ],
            solution: 'A good inference combines evidence directly from the text with your own background knowledge and reasoning. It is not a guess but a logical conclusion that the text supports without explicitly stating.',
          },
          {
            id: 'engelsk-10-33-n-quiz1-q1',
            task: 'If an article uses the phrase "so-called expert," what can you infer about the author\'s attitude?',
            options: [
              { id: 'a', text: 'The author deeply respects the expert', isCorrect: false },
              { id: 'b', text: 'The author is sceptical about the person\'s qualifications or credibility', isCorrect: true },
              { id: 'c', text: 'The author has never met the expert', isCorrect: false },
              { id: 'd', text: 'The author is quoting someone else', isCorrect: false },
            ],
            solution: '"So-called" implies that the author doubts whether the label "expert" is deserved. It signals scepticism or dismissal. This is an inference drawn from the author\'s word choice.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-33-n-section2',
      type: 'text',
      content: `## Understanding Different Text Types

Not all texts work the same way. An exam might present you with fiction, non-fiction, poetry, opinion pieces, speeches, or informational texts. Each type has its own conventions, and knowing these conventions helps you read more effectively.

**Fiction** (short stories, novel extracts) uses literary techniques to create meaning. Look for narrative voice, characterisation, symbolism, and the techniques we explored in earlier chapters. Fiction questions often ask about character motivation, theme, mood, and the effect of specific language choices.

**Non-fiction articles** (news, features, reports) prioritise information. Look for the main argument or thesis, supporting evidence, the source and reliability of claims, and any bias in the presentation. Non-fiction questions often ask you to identify the main idea, evaluate arguments, or compare different viewpoints.

**Opinion pieces and editorials** openly argue a position. Look for the writer's stance, the rhetorical strategies they use (emotional appeals, logical arguments, appeals to authority), and how they handle counterarguments. Do they acknowledge opposing views, or do they ignore them?

**Speeches** are designed to be heard, not read, which affects their style. They use repetition, rhetorical questions, direct address, and rhythm. When reading a speech, try to hear it in your head. The oral quality is part of the meaning.

**Visual texts** (advertisements, infographics, posters) combine words and images. Both elements carry meaning, and the relationship between them matters. An image can reinforce, undercut, or add nuance to the words.

For all text types, a useful strategy is to read the text once for general understanding, then read it again more carefully before answering questions. On your first reading, identify the main idea and overall structure. On your second reading, focus on details, language choices, and the specific information the questions ask about.

**Vocabulary in context** is a specific skill the exam tests. When you encounter an unfamiliar word, do not panic. Look at the surrounding words and sentences for clues. Consider the word's position in the sentence (is it functioning as a noun, verb, or adjective?). Think about word parts: prefixes, suffixes, and roots you recognise. "Unprecedented" might be unfamiliar, but if you know "un-" means "not" and "preceded" means "came before," you can deduce that "unprecedented" means "never happened before."`,
    },
    {
      id: 'engelsk-10-33-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on text types and reading strategies:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-33-n-quiz2-q0',
            task: 'When reading an opinion piece, what should you look for?',
            options: [
              { id: 'a', text: 'Only the facts presented', isCorrect: false },
              { id: 'b', text: 'The writer\'s stance, rhetorical strategies, and how they handle counterarguments', isCorrect: true },
              { id: 'c', text: 'The biography of the writer', isCorrect: false },
              { id: 'd', text: 'Only the conclusion', isCorrect: false },
            ],
            solution: 'Opinion pieces openly argue a position. You should identify the writer\'s stance, examine their rhetorical strategies (emotional appeals, logical arguments), and evaluate whether they acknowledge or ignore opposing views.',
          },
          {
            id: 'engelsk-10-33-n-quiz2-q1',
            task: 'What strategy can help you understand an unfamiliar word in a text?',
            options: [
              { id: 'a', text: 'Skip it entirely and move on', isCorrect: false },
              { id: 'b', text: 'Use context clues from surrounding words and analyse word parts (prefixes, roots, suffixes)', isCorrect: true },
              { id: 'c', text: 'Guess randomly based on the word\'s length', isCorrect: false },
              { id: 'd', text: 'Only look it up in a dictionary', isCorrect: false },
            ],
            solution: 'Context clues from surrounding words often reveal a word\'s meaning. Analysing word parts (prefixes like "un-," roots, and suffixes) provides additional help. For example, "unprecedented" combines "un-" (not) with "preceded" (came before) to mean "never happened before."',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-33-n-summary',
      type: 'text',
      content: `## Summary

Advanced reading comprehension means going beyond what the text literally says to understand what it implies, suggests, and leaves unsaid.

**Inference** is the skill of drawing supported conclusions from text evidence combined with background knowledge. Look for implied emotions, author attitudes, and what is missing from a text. State your inferences confidently when the evidence supports them.

**Different text types** require different reading strategies. Fiction uses literary techniques; non-fiction prioritises information and argument; opinion pieces argue positions; speeches use oral-style rhetoric; visual texts combine words and images. Knowing these conventions helps you read more effectively.

**Practical strategies** include reading twice (once for overview, once for detail), using context and word parts to decode unfamiliar vocabulary, and always connecting your analysis back to evidence in the text.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 34 NARRATIVE: Exam Strategies and Time Management
// ============================================================================

export const CHAPTER_ENGELSK_10_34_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-34-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '34',
  title: 'Exam Strategies and Time Management',
  subtitle: 'Narrativ versjon',
  description: 'Bring everything together with practical revision strategies, time management techniques, and self-assessment tools for peak exam performance.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-34',
  content: [
    {
      id: 'engelsk-10-34-n-intro',
      type: 'text',
      content: `## Performing at Your Best

You have spent months, maybe years, building your English skills. You have read texts, written essays, practised speaking, and developed your vocabulary. Now the exam is approaching, and the question becomes: how do you make sure your performance on exam day reflects everything you have learned?

The answer is not simply "study harder." Exam performance depends on three things: knowledge (what you know), skills (what you can do with what you know), and strategy (how you manage yourself during the exam). You have been building knowledge and skills throughout the course. This chapter focuses on strategy: the practical techniques that help you perform at your best when it counts.

Revision, time management, and self-assessment are not glamorous topics, but they are the difference between students who know the material and get the marks they deserve, and students who know the material but underperform because they ran out of time, misread a question, or spent too long on one section. Let us make sure you are in the first group.`,
    },
    {
      id: 'engelsk-10-34-n-section1',
      type: 'text',
      content: `## Revision That Actually Works

Not all revision is created equal. Some methods feel productive but achieve little. Others are less comfortable but far more effective. Understanding the difference can transform your preparation.

**Active recall** is the most effective revision technique, and it is the one most students avoid because it feels harder. Instead of rereading your notes (which feels comfortable but mostly creates an illusion of knowledge), close your books and try to write down everything you remember about a topic. The struggle to recall information is what strengthens your memory. Then check what you missed and focus your next revision on those gaps.

**Spaced repetition** means reviewing material at increasing intervals rather than cramming everything the night before. Review a topic one day after learning it, then three days later, then a week later, then two weeks later. Each review strengthens the memory. Research consistently shows that spaced repetition produces dramatically better long-term retention than massed practice (cramming).

**Practice under exam conditions** is essential. Time yourself. Use past papers. Sit at a desk. Remove your phone. The closer your practice conditions mirror the actual exam, the more prepared you will feel on the day. This also helps you identify time management problems before they cost you marks in the real exam.

**Teach what you have learned.** Explaining a concept to someone else (a friend, a family member, even a stuffed animal) forces you to organise your understanding clearly. If you cannot explain it simply, you do not understand it well enough. This is one of the most effective ways to discover gaps in your knowledge.

**Focus on weaknesses, not strengths.** It is natural to revise the topics you already understand well because it feels good. But the marks to be gained are in your weak areas. Identify your weakest topics and give them proportionally more revision time.

**Sleep matters.** Research shows that sleep is when your brain consolidates memories. Staying up all night before an exam is counterproductive. You might cover more material, but your exhausted brain will struggle to retrieve it. A good night's sleep before the exam is one of the most valuable things you can do.`,
    },
    {
      id: 'engelsk-10-34-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on revision strategies:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-34-n-quiz1-q0',
            task: 'Why is "active recall" more effective than rereading notes?',
            options: [
              { id: 'a', text: 'Because rereading is not allowed during revision', isCorrect: false },
              { id: 'b', text: 'The struggle to recall information strengthens memory, while rereading creates an illusion of knowledge', isCorrect: true },
              { id: 'c', text: 'Active recall is faster than rereading', isCorrect: false },
              { id: 'd', text: 'Rereading uses too much paper', isCorrect: false },
            ],
            solution: 'Active recall forces your brain to retrieve information, which strengthens neural pathways. Rereading feels comfortable and familiar, creating a false sense of knowing the material, but it does not build the same retrieval strength.',
          },
          {
            id: 'engelsk-10-34-n-quiz1-q1',
            task: 'What is "spaced repetition" and why does it work?',
            options: [
              { id: 'a', text: 'Studying the same thing every day without breaks', isCorrect: false },
              { id: 'b', text: 'Reviewing material at increasing intervals, which produces better long-term retention than cramming', isCorrect: true },
              { id: 'c', text: 'Studying in different rooms each day', isCorrect: false },
              { id: 'd', text: 'Taking a break between every sentence you read', isCorrect: false },
            ],
            solution: 'Spaced repetition reviews material at increasing intervals (1 day, 3 days, 1 week, 2 weeks). Each review strengthens the memory. Research consistently shows this produces dramatically better retention than cramming the night before.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-34-n-section2',
      type: 'text',
      content: `## Time Management in the Exam

Good time management can be worth several grade points. Here is how to approach it.

**Read the entire exam paper first.** Before writing anything, spend three to five minutes reading all the questions. This gives you an overview of what is expected and allows your subconscious to begin processing the harder questions while you work on the easier ones.

**Allocate time based on marks.** If a question is worth 10% of the marks, it should receive roughly 10% of your time. Many students spend too long on early questions and rush through later ones, even when the later questions are worth more marks. Write the time allocation next to each section at the start.

**Start with what you know.** You do not have to answer questions in order. Starting with a question you feel confident about builds momentum and calms nerves. Just make sure you clearly label which question you are answering.

**Watch the clock.** Place your watch or clock where you can see it easily. Check it regularly, not obsessively. Set internal deadlines: "I need to finish this section by 10:30." If you are running over, make a decision: can you finish quickly, or should you move on and come back later?

**The 80/20 rule applies to exams.** The first 80% of marks on any question are easier to earn than the last 20%. If you are stuck trying to perfect one answer, you are probably earning diminishing returns. It is often better to move on and pick up easier marks elsewhere, then return to the difficult question if time permits.

**Leave time at the end.** Reserve five to ten minutes at the end of the exam for reviewing your answers. Check for unanswered questions, incomplete responses, spelling and grammar errors, and opportunities to add brief improvements.`,
    },
    {
      id: 'engelsk-10-34-n-section3',
      type: 'text',
      content: `## Self-Assessment: Know Where You Stand

The most effective students are those who can accurately assess their own strengths and weaknesses. This metacognitive skill, thinking about your own thinking, is powerful.

**Before the exam,** honestly evaluate your knowledge. For each topic in the course, rate your confidence on a scale of 1 to 5. Be brutally honest. A realistic self-assessment guides your revision far better than a vague feeling that you "need to study more." Topics rated 1 or 2 need the most attention. Topics rated 4 or 5 need only brief review.

**During the exam,** monitor your performance. Are you on schedule? Are you answering the questions that are being asked? Are you providing enough evidence and explanation? This real-time self-awareness helps you catch problems before they become costly.

**After the exam** (for practice exams and past papers), review your answers critically. Where did you lose marks? Was it lack of knowledge, poor time management, not answering the question, or not providing enough evidence? Identifying the pattern of your mistakes is more valuable than simply doing more practice papers without reflection.

**Use marking criteria.** If your teacher has shared the exam marking criteria, study them carefully. They tell you exactly what the examiner is looking for. A response that demonstrates "detailed analysis using specific textual evidence" scores higher than one that offers "general comments without supporting evidence." Knowing the criteria lets you aim precisely.

**Growth mindset matters.** Research by Carol Dweck shows that students who believe their abilities can be developed through effort and strategy (growth mindset) outperform students who believe their abilities are fixed (fixed mindset). If you struggled with essay writing last term, that does not mean you are "bad at essays." It means you have not yet developed the specific skills needed. "Not yet" is the most important phrase in learning.

You have worked hard. You have built skills throughout this course. The exam is not a judgement of your worth as a person; it is an opportunity to demonstrate what you have learned. Trust your preparation, apply these strategies, and show the examiners what you can do.`,
    },
    {
      id: 'engelsk-10-34-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on exam strategy and self-assessment:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-34-n-quiz2-q0',
            task: 'What is the "80/20 rule" as applied to exam answers?',
            options: [
              { id: 'a', text: 'You should answer 80% of questions and skip 20%', isCorrect: false },
              { id: 'b', text: 'The first 80% of marks are easier to earn than the last 20%, so move on rather than perfecting one answer', isCorrect: true },
              { id: 'c', text: 'You should spend 80% of time reading and 20% writing', isCorrect: false },
              { id: 'd', text: '80% of the exam is multiple choice and 20% is essay', isCorrect: false },
            ],
            solution: 'The first 80% of marks on any question come more easily than the last 20%. If you are stuck trying to perfect one answer, you are earning diminishing returns. It is often better to move on, pick up easier marks elsewhere, and return later.',
          },
          {
            id: 'engelsk-10-34-n-quiz2-q1',
            task: 'Why should you read the entire exam paper before writing anything?',
            options: [
              { id: 'a', text: 'To count the number of questions', isCorrect: false },
              { id: 'b', text: 'To gain an overview, allocate time, and let your subconscious begin processing harder questions', isCorrect: true },
              { id: 'c', text: 'Because the instructions say you must', isCorrect: false },
              { id: 'd', text: 'To find the easiest question to copy from', isCorrect: false },
            ],
            solution: 'Reading the full paper first gives you an overview, lets you allocate time based on marks, and allows your brain to begin processing harder questions unconsciously while you work on others.',
          },
          {
            id: 'engelsk-10-34-n-quiz2-q2',
            task: 'What does "growth mindset" mean for exam preparation?',
            options: [
              { id: 'a', text: 'Believing your abilities are fixed and cannot change', isCorrect: false },
              { id: 'b', text: 'Believing your abilities can be developed through effort and strategy', isCorrect: true },
              { id: 'c', text: 'Focusing only on your strengths and ignoring weaknesses', isCorrect: false },
              { id: 'd', text: 'Growing taller before the exam', isCorrect: false },
            ],
            solution: 'Growth mindset means believing that abilities can be developed through effort, strategy, and practice. Students with a growth mindset view struggles as opportunities to learn rather than evidence of fixed limitations. "Not yet" is the key phrase.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-34-n-summary',
      type: 'text',
      content: `## Summary

Exam performance depends on knowledge, skills, and strategy. This chapter focused on the strategic elements that help you perform at your best.

**Effective revision** uses active recall (testing yourself rather than rereading), spaced repetition (reviewing at increasing intervals), practice under exam conditions, teaching what you have learned, and focusing on weaknesses. Sleep is essential for memory consolidation.

**Time management** in the exam includes reading the whole paper first, allocating time based on marks, starting with confident questions, watching the clock, applying the 80/20 rule, and leaving time for review.

**Self-assessment** means honestly evaluating your strengths and weaknesses, monitoring your performance during the exam, analysing mistakes in practice papers, and maintaining a growth mindset.

Trust your preparation. Apply these strategies. Show what you can do. You are ready.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const ENGELSK_10_NARRATIV_DEL8_CHAPTERS = [
  CHAPTER_ENGELSK_10_29_NARRATIV,
  CHAPTER_ENGELSK_10_30_NARRATIV,
  CHAPTER_ENGELSK_10_31_NARRATIV,
  CHAPTER_ENGELSK_10_32_NARRATIV,
  CHAPTER_ENGELSK_10_33_NARRATIV,
  CHAPTER_ENGELSK_10_34_NARRATIV,
];
