/**
 * Tekstbok innhold for Engelsk 10. klasse - Del 8 (Kapittel 29-34)
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Tema: Exam Preparation and Advanced Skills.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 29: Writing for the Exam — Long Answer
// ============================================================================

export const CHAPTER_ENGELSK_10_29: TextbookChapter = {
  id: 'engelsk-10-29',
  courseId: 'engelsk-10',
  chapterNumber: '29',
  title: 'Writing for the Exam — Long Answer',
  description: 'Master the long-answer format for the written English exam, including essay structure, argumentation techniques, and strategies for producing well-developed texts under timed conditions.',
  estimatedMinutes: 90,
  competenceGoals: [
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
    'bruke variert ordforråd og idiomatiske uttrykk i skriftlig kommunikasjon',
    'planlegge, revidere og bearbeide egne tekster basert på tilbakemelding',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-29-intro',
      type: 'text',
      content: `## Writing for the Exam — Long Answer

The long-answer section of the English exam is where you truly show what you can do as a writer. You will typically have a choice between several tasks, and you are expected to produce a well-structured text of **250–400 words** or more, depending on the task.

**What the examiners are looking for:**
- A **clear structure** with introduction, body, and conclusion
- **Relevant content** that addresses the task directly
- **Varied and precise vocabulary** — not just simple, everyday words
- **Correct grammar** and spelling
- **Coherence and cohesion** — your ideas flow logically from one to the next
- **Your own voice** — personal reflections, original thinking, and engagement with the topic

**Common long-answer task types:**
1. **Argumentative essay** — take a position and defend it with evidence
2. **Discursive essay** — explore multiple perspectives on an issue
3. **Personal essay** — reflect on an experience or topic with personal insight
4. **Creative writing** — short story or narrative based on a prompt
5. **Article** — informative or opinion piece for a newspaper or magazine

The key to success is not just knowing English well — it is knowing how to **plan, draft, and revise** under time pressure. This chapter will give you the tools to do exactly that.`,
    },

    // ========== DEFINISJON: ESSAY STRUCTURE UNDER EXAM CONDITIONS ==========
    {
      id: 'engelsk-10-29-def-1',
      type: 'definition',
      title: 'The Five-Paragraph Essay — A Reliable Exam Structure',
      content: `The **five-paragraph essay** is a proven structure that works well under exam conditions because it is clear, predictable, and easy to plan quickly.

**Paragraph 1: Introduction**
- **Hook** — an attention-grabbing opening (question, statistic, quote, or vivid image)
- **Context** — 1-2 sentences of background information
- **Thesis statement** — your main argument or position in one clear sentence

**Paragraph 2: First body paragraph**
- **Topic sentence** — states the first supporting argument
- **Evidence** — facts, examples, statistics, or quotes
- **Explanation** — explain how the evidence supports your thesis
- **Link** — connect back to the thesis

**Paragraph 3: Second body paragraph**
- Same PEEL structure as paragraph 2, with your second argument

**Paragraph 4: Third body paragraph (or counterargument)**
- Present your third argument, OR
- Acknowledge a counterargument and explain why your position is still stronger

**Paragraph 5: Conclusion**
- **Restate** your thesis in different words
- **Summarize** your key arguments briefly
- **Final thought** — a memorable closing statement, call to action, or question

**Time allocation for a 2-hour writing session:**
- Planning: 15 minutes
- Writing: 80 minutes
- Revising and proofreading: 25 minutes`,
    },

    // ========== EKSEMPEL: PLANNING AN ESSAY ==========
    {
      id: 'engelsk-10-29-example-1',
      type: 'example',
      title: 'Example: Planning a Long Answer in 15 Minutes',
      problem: `You receive this exam task: "Some people argue that homework should be abolished in schools. Do you agree or disagree? Write an argumentative essay." Show how to plan this essay in 15 minutes.`,
      solution: `**Step 1: Understand the task (2 minutes)**
- Task type: Argumentative essay
- Topic: Should homework be abolished?
- I need to: Take a clear position and argue for it

**Step 2: Brainstorm (5 minutes)**
Arguments FOR abolishing homework:
- Causes stress and anxiety
- Takes away free time for hobbies and family
- Not all students have equal conditions at home
- Research shows limited benefit for younger students

Arguments AGAINST abolishing homework:
- Reinforces learning and builds study habits
- Prepares students for higher education
- Teaches time management and responsibility
- Gives teachers feedback on student understanding

**Step 3: Choose position and select arguments (3 minutes)**
My position: Homework should NOT be abolished, but it needs to be reformed.
- Argument 1: Homework reinforces learning (strongest academic argument)
- Argument 2: Builds essential study skills for the future
- Counterargument: I acknowledge the stress problem but argue for better homework design

**Step 4: Write a quick outline (5 minutes)**
1. INTRO: Hook about the homework debate, thesis = homework should be reformed, not abolished
2. BODY 1: Reinforces learning — cite research, give example
3. BODY 2: Builds study skills — time management, independence
4. BODY 3: Counterargument — stress is real, but solution is better homework, not no homework
5. CONCLUSION: Restate thesis, call for meaningful homework

This plan gives you a clear roadmap. You can now write confidently without getting stuck.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-29-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-ex-1',
        number: '29.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the purpose of a thesis statement in an argumentative essay?',
        options: [
          {
            id: 'a',
            text: 'To clearly state your main argument or position in one sentence',
            isCorrect: true,
            feedback: 'Correct! The thesis statement is the backbone of your essay. Every paragraph should connect back to it.',
          },
          {
            id: 'b',
            text: 'To summarize everything you will write about in the essay',
            isCorrect: false,
            feedback: 'Not quite. A thesis statement is not a summary — it is a clear claim or argument that you will defend throughout the essay.',
          },
          {
            id: 'c',
            text: 'To ask a question that the essay will try to answer',
            isCorrect: false,
            feedback: 'Incorrect. A thesis statement is a statement, not a question. It declares your position rather than asking about it.',
          },
          {
            id: 'd',
            text: 'To list all the topics you will cover in the body paragraphs',
            isCorrect: false,
            feedback: 'Incorrect. While a thesis may hint at your arguments, its main purpose is to state your position, not to list topics.',
          },
        ],
        solution: 'A thesis statement clearly states your main argument or position in one sentence. It appears in the introduction and guides the entire essay.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-29-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-ex-2',
        number: '29.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Read these thesis statements and evaluate them. Which are strong, and which need improvement? Explain why.',
        subTasks: [
          {
            label: 'a',
            task: '"Social media is bad."',
            solution: 'Weak. This is too vague and general. It does not specify what aspect of social media is problematic or who is affected. A better version: "Social media platforms should be required to verify the age of their users because unrestricted access exposes children to cyberbullying, unrealistic beauty standards, and addictive design."',
          },
          {
            label: 'b',
            task: '"While renewable energy requires significant initial investment, governments must prioritize it over fossil fuels because the long-term environmental and economic benefits far outweigh the costs."',
            solution: 'Strong. This thesis takes a clear position, acknowledges the opposing view (high cost), and previews the main arguments (environmental and economic benefits). It is specific and debatable.',
          },
          {
            label: 'c',
            task: '"In this essay I will discuss the pros and cons of school uniforms."',
            solution: 'Weak. This is an announcement, not a thesis. It does not take a position. A better version: "Schools should adopt uniforms because they reduce social pressure, decrease bullying based on clothing, and help students focus on learning rather than appearance."',
          },
        ],
        solution: 'A strong thesis is specific, takes a clear position, is debatable, and often previews the main arguments. Avoid vague statements and "In this essay I will..." announcements.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: ADVANCED PARAGRAPH DEVELOPMENT ==========
    {
      id: 'engelsk-10-29-def-2',
      type: 'definition',
      title: 'The PEEL Method — Developing Strong Body Paragraphs',
      content: `Each body paragraph in a long-answer essay should follow the **PEEL** structure to ensure it is well-developed and persuasive.

**P — Point (Topic sentence)**
State the main idea of the paragraph clearly. This sentence tells the reader what the paragraph is about.
- Example: "One of the strongest arguments for keeping homework is that it reinforces classroom learning."

**E — Evidence**
Support your point with specific evidence. This can be:
- **Facts and statistics:** "A 2023 study by Duke University found that students who completed regular homework scored 15% higher on tests."
- **Examples:** "For instance, practising maths problems at home helps students develop automaticity with procedures."
- **Expert opinions:** "According to education researcher John Hattie, deliberate practice outside the classroom is essential for deep learning."
- **Personal experience:** "In my own experience, reviewing vocabulary at home helped me remember new English words much better."

**E — Explain**
This is the most important part, and the one students most often skip. Explain HOW and WHY your evidence supports your point.
- Example: "This research demonstrates that homework is not merely busy work — when designed well, it gives students the opportunity to practise independently, which strengthens memory and understanding."

**L — Link**
Connect back to your thesis statement to show how this paragraph supports your overall argument.
- Example: "Therefore, rather than abolishing homework, schools should focus on making it more purposeful and meaningful."`,
    },

    // ========== EKSEMPEL: PEEL PARAGRAPH ==========
    {
      id: 'engelsk-10-29-example-2',
      type: 'example',
      title: 'Example: A Complete PEEL Paragraph',
      problem: `Write a body paragraph using the PEEL method for the essay topic: "Should schools start later in the morning?"`,
      solution: `**Model paragraph (with PEEL labels):**

**[POINT]** One compelling reason for later school start times is the proven impact on student health and well-being. **[EVIDENCE]** Research by the American Academy of Pediatrics shows that teenagers experience a biological shift in their sleep cycles during puberty, making it nearly impossible for most adolescents to fall asleep before 11 p.m. When schools start at 8:00 a.m. or earlier, this means that the average teenager gets only six to seven hours of sleep — well below the recommended eight to ten hours. In countries like Finland, where school typically starts at 9:00 or 9:30 a.m., students consistently report higher levels of well-being and perform better academically. **[EXPLAIN]** These findings suggest that early start times work against teenagers' natural biology rather than with it. Sleep deprivation does not just make students tired — it impairs concentration, memory, and emotional regulation, all of which are essential for effective learning. By starting school later, we align the school day with students' biological needs, creating conditions where they can actually absorb what they are being taught. **[LINK]** This evidence strongly supports the argument that schools should adjust their schedules to prioritize student health, which in turn improves academic outcomes.

**Why this paragraph works:**
- The topic sentence is clear and specific
- Multiple types of evidence are used (research, statistics, international comparison)
- The explanation goes beyond restating the evidence — it interprets and analyses
- The link sentence ties everything back to the main argument`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-29-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-ex-3',
        number: '29.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a complete PEEL paragraph for ONE of the following essay topics. Label each part (P, E, E, L) in your paragraph.',
        subTasks: [
          {
            label: 'a',
            task: 'Topic: "Should students be allowed to use AI tools like ChatGPT for schoolwork?"',
            solution: 'A strong response includes a clear topic sentence (e.g., "AI tools should be permitted as learning aids because they can help students understand difficult concepts"), specific evidence (research, examples), a thorough explanation of why the evidence matters, and a link back to the thesis.',
          },
          {
            label: 'b',
            task: 'Topic: "Is social media doing more harm than good for teenagers?"',
            solution: 'A strong response includes a clear topic sentence taking a position on one aspect (e.g., mental health, cyberbullying, or connection), concrete evidence, a detailed explanation, and a clear link back to the overall argument.',
          },
        ],
        hints: [
          'Start with a clear topic sentence that states ONE argument',
          'Include at least two pieces of evidence (statistic, example, expert opinion)',
          'The Explain section should be the longest part — analyse, do not just repeat',
          'End with a sentence that connects back to your overall argument',
        ],
        solution: 'A well-developed PEEL paragraph is typically 100-150 words. The most common weakness is skipping the Explain section and jumping straight from evidence to the next point.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: INTRODUCTIONS AND CONCLUSIONS ==========
    {
      id: 'engelsk-10-29-def-3',
      type: 'definition',
      title: 'Crafting Powerful Introductions and Conclusions',
      content: `The introduction and conclusion are what the examiner reads first and last — they create the strongest impression. Here are techniques for making both memorable.

**Introduction Techniques — The Hook:**

| Technique | Example |
|-----------|---------|
| **Startling statistic** | "Every year, 8 million tonnes of plastic enter our oceans — the equivalent of dumping a rubbish truck into the sea every minute." |
| **Thought-provoking question** | "What would you do if you knew that no one would ever find out?" |
| **Vivid scene** | "Picture this: a classroom of 30 students, every single one staring at a glowing screen instead of at each other." |
| **Bold statement** | "The education system is failing an entire generation of creative thinkers." |
| **Quote** | "As Nelson Mandela once said, 'Education is the most powerful weapon you can use to change the world.'" |

**After the hook, include:**
- 1-2 sentences of **context** (background information)
- Your **thesis statement** (clear position)

**Conclusion Techniques:**

| Technique | Purpose |
|-----------|---------|
| **Restate thesis** | Remind the reader of your argument (use different words) |
| **Summarize key points** | Briefly mention your 2-3 main arguments |
| **Call to action** | Tell the reader what they should do |
| **Look to the future** | Describe what will happen if action is or is not taken |
| **Circle back** | Return to the image or story from your introduction |
| **End with a question** | Leave the reader thinking |

**Avoid in conclusions:**
- Introducing completely new arguments
- Starting with "In conclusion, I have discussed..."
- Simply repeating the introduction word for word`,
    },

    // ========== EKSEMPEL: INTRODUCTION AND CONCLUSION ==========
    {
      id: 'engelsk-10-29-example-3',
      type: 'example',
      title: 'Example: Matching Introduction and Conclusion',
      problem: `Write an introduction and conclusion for an essay about the importance of learning foreign languages. Show how the conclusion "circles back" to the introduction.`,
      solution: `**Introduction:**
"Bonjour. Hola. Ni hao. Guten Tag. If those words made you smile — or even just pause for a moment — you already understand something fundamental about language: it connects us. In an increasingly globalised world, the ability to communicate across cultures is no longer a luxury — it is a necessity. Yet many schools are cutting foreign language programmes, arguing that English is "enough." This essay will argue that learning a foreign language is one of the most valuable investments a student can make, not only for career prospects but for cognitive development and cultural understanding."

**Conclusion:**
"Bonjour. Hola. Ni hao. Guten Tag. These are not just words — they are doors. Each one opens onto a different way of seeing the world, a different way of thinking, a different community of people waiting to be understood. As we have seen, learning a foreign language sharpens the mind, broadens career opportunities, and builds the kind of empathy that our world desperately needs. The question is not whether we can afford to teach languages in schools. The question is whether we can afford not to."

**Analysis:**
- The conclusion **circles back** to the opening words, creating a satisfying sense of completion
- The thesis is **restated** in different words ("one of the most valuable investments" becomes "doors")
- Key arguments are **summarized** (cognitive development, career, cultural understanding)
- It ends with a **rhetorical question** that is powerful and memorable
- No new arguments are introduced`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-29-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-ex-4',
        number: '29.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which of the following is the BEST way to start an essay conclusion?',
        options: [
          {
            id: 'a',
            text: '"In conclusion, the evidence clearly demonstrates that climate change poses an unprecedented threat to coastal communities worldwide."',
            isCorrect: true,
            feedback: 'Correct! This restates the thesis effectively while using "In conclusion" as a natural signal. It is specific and connected to the essay content.',
          },
          {
            id: 'b',
            text: '"In conclusion, I have written about three arguments about climate change."',
            isCorrect: false,
            feedback: 'Weak. This is a meta-statement about the essay itself rather than a meaningful conclusion. Avoid describing what you have done — instead, synthesize your argument.',
          },
          {
            id: 'c',
            text: '"Also, another important point is that rising sea levels will affect millions of people."',
            isCorrect: false,
            feedback: 'Incorrect. A conclusion should not introduce new arguments. "Also, another important point" signals a new idea, which belongs in the body paragraphs.',
          },
          {
            id: 'd',
            text: '"That is all I wanted to say about this topic. Thank you for reading."',
            isCorrect: false,
            feedback: 'Incorrect. This is too informal and does not actually conclude the argument. A good conclusion restates the thesis and synthesizes the main points.',
          },
        ],
        solution: 'A strong conclusion restates the thesis in new words and synthesizes (not just repeats) the main arguments. Avoid meta-commentary like "I have discussed" and never introduce new arguments.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-29-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-ex-5',
        number: '29.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write TWO different hooks for the same essay topic: "Should voting age be lowered to 16?" Use two different techniques from the definition box above.',
        hints: [
          'Try combining a statistic with a question, or a quote with a vivid scene',
          'Each hook should be 1-3 sentences long',
          'After each hook, explain which technique you used and why it works',
        ],
        solution: 'Example Hook 1 (Statistic): "In the 2024 UK election, only 54% of 18-24 year-olds voted — the lowest turnout of any age group. What if we could change that by starting earlier?" Example Hook 2 (Bold statement): "At 16, you can work, pay taxes, and join the military in many countries — but you cannot have a say in who governs you." Both hooks grab attention and lead naturally into the topic.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-29-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-ex-6',
        number: '29.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A student writes the following sentence in their essay: "There are many reasons why climate change is a problem." What is wrong with this as a thesis statement?',
        options: [
          {
            id: 'a',
            text: 'It is too vague — it does not specify which reasons or take a clear position',
            isCorrect: true,
            feedback: 'Correct! A thesis statement should be specific and arguable. "Many reasons" is vague, and the statement does not tell the reader what the essay will actually argue.',
          },
          {
            id: 'b',
            text: 'It is too short to be a thesis statement',
            isCorrect: false,
            feedback: 'Length is not the main issue. A thesis can be one sentence. The problem is that the statement is vague and does not take a specific, arguable position.',
          },
          {
            id: 'c',
            text: 'It should be written as a question',
            isCorrect: false,
            feedback: 'Incorrect. A thesis statement should be a statement, not a question. The problem here is vagueness, not format.',
          },
          {
            id: 'd',
            text: 'It is grammatically incorrect',
            isCorrect: false,
            feedback: 'The sentence is grammatically correct. The issue is that it lacks specificity and does not present a clear, debatable argument.',
          },
        ],
        solution: 'A strong thesis must be specific and arguable. Compare: "Climate change is a problem" (vague) vs. "Governments must invest in renewable energy infrastructure now because the economic cost of inaction will be catastrophic within two decades" (specific, arguable, and previews the argument).',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-29-summary',
      type: 'text',
      content: `## Summary: Your Long-Answer Toolkit

In this chapter, you have learned the essential tools for writing strong long answers on the exam:

| Element | Key Principle | Common Mistake |
|---------|--------------|----------------|
| **Planning** | Spend 15 minutes before writing | Jumping straight into writing without a plan |
| **Thesis statement** | Specific, arguable, one sentence | Too vague or written as an announcement |
| **Body paragraphs** | Follow PEEL structure | Skipping the Explain section |
| **Introduction** | Hook + context + thesis | Starting with "In this essay I will..." |
| **Conclusion** | Restate + summarize + final thought | Introducing new arguments |
| **Revision** | Check grammar, vocabulary, flow | Not leaving time for proofreading |

**The golden rule of exam writing:** Quality over quantity. A well-structured 300-word essay will always score higher than a rambling 500-word text. Plan first, write with purpose, and leave time to polish.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-29-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-ex-7',
        number: '29.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a complete five-paragraph argumentative essay (300-400 words) on ONE of the following topics. Use the planning method from this chapter.',
        subTasks: [
          {
            label: 'a',
            task: '"Schools should replace traditional textbooks with tablets and digital resources." Argue for or against.',
            solution: 'A strong essay takes a clear position, uses PEEL paragraphs with specific evidence, includes a counterargument, and has a memorable introduction and conclusion.',
          },
          {
            label: 'b',
            task: '"Everyone should learn to code — it is as important as reading and writing." Argue for or against.',
            solution: 'A strong essay takes a clear position, uses PEEL paragraphs with specific evidence, includes a counterargument, and has a memorable introduction and conclusion.',
          },
        ],
        hints: [
          'Spend 10-15 minutes planning before you write',
          'Write a clear thesis statement that takes a position',
          'Use PEEL in each body paragraph',
          'Include at least one counterargument',
          'End with a strong conclusion that circles back to your introduction',
        ],
        solution: 'Your essay is evaluated on: thesis clarity, argument development (PEEL), use of evidence, acknowledgement of counterarguments, introduction and conclusion quality, vocabulary range, grammatical accuracy, and coherence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-29-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-29-ex-8',
        number: '29.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Peer review exercise: Exchange essays with a partner (or review the model text below). Use this checklist to give detailed feedback.',
        subTasks: [
          {
            label: 'a',
            task: 'Does the introduction have a hook, context, and a clear thesis statement? Quote the thesis statement.',
            solution: 'The reviewer should be able to identify and quote a specific thesis statement. If they cannot, the introduction needs revision.',
          },
          {
            label: 'b',
            task: 'Does each body paragraph follow the PEEL structure? Identify which part (P, E, E, or L) is weakest and suggest an improvement.',
            solution: 'The most common weakness is the Explain section. Students often present evidence and then move on without analysing WHY the evidence matters.',
          },
          {
            label: 'c',
            task: 'Does the conclusion restate the thesis, summarize arguments, and end memorably? Does it avoid introducing new arguments?',
            solution: 'A strong conclusion feels like a satisfying ending. It should not introduce new information but should leave the reader thinking.',
          },
        ],
        hints: [
          'Be specific in your feedback — quote the text',
          'For each weakness you identify, suggest a concrete improvement',
          'Comment on both content AND language',
        ],
        solution: 'Peer review is one of the most effective ways to improve your writing. By evaluating someone else\'s work, you develop a critical eye that you can then apply to your own essays.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Thesis statement', definition: 'A clear, specific sentence in the introduction that states your main argument or position.' },
    { term: 'PEEL structure', definition: 'Point, Evidence, Explain, Link — a method for developing strong body paragraphs.' },
    { term: 'Hook', definition: 'An attention-grabbing opening sentence or technique used to engage the reader from the start.' },
    { term: 'Counterargument', definition: 'An opposing viewpoint that you acknowledge and then refute to strengthen your own argument.' },
    { term: 'Coherence', definition: 'The logical flow of ideas within and between paragraphs, achieved through clear structure and transitions.' },
    { term: 'Five-paragraph essay', definition: 'A standard essay structure with an introduction, three body paragraphs, and a conclusion.' },
  ],
};

// ============================================================================
// KAPITTEL 30: Writing for the Exam — Short Answer
// ============================================================================

export const CHAPTER_ENGELSK_10_30: TextbookChapter = {
  id: 'engelsk-10-30',
  courseId: 'engelsk-10',
  chapterNumber: '30',
  title: 'Writing for the Exam — Short Answer',
  description: 'Learn how to write concise, focused short answers on the English exam, including how to answer comprehension questions, explain concepts briefly, and provide textual evidence efficiently.',
  estimatedMinutes: 75,
  competenceGoals: [
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-30-intro',
      type: 'text',
      content: `## Writing for the Exam — Short Answer

Short-answer questions are the backbone of many English exams. Unlike the long essay, short answers test your ability to be **precise, focused, and efficient** with language. You typically have to answer in **3-8 sentences** (50-150 words), and every sentence must count.

**Why short answers are tricky:**
- You need to say enough to demonstrate understanding, but not so much that you lose focus
- There is no room for "filler" sentences that do not add meaning
- You must answer the question DIRECTLY — no long introductions or off-topic rambling
- Grammar and vocabulary errors are more noticeable in a short text

**Common short-answer question types on the English exam:**
1. **Reading comprehension** — "What does the author mean by...?" / "Why does the character...?"
2. **Vocabulary in context** — "Explain the meaning of the word X as used in the text."
3. **Analysis questions** — "What literary device is used in line 14? Explain its effect."
4. **Comparison questions** — "Compare how the two texts present the theme of..."
5. **Opinion with evidence** — "Do you agree with the author's argument? Give reasons."

The skill you need is the ability to **get to the point quickly** while still showing depth of understanding. This chapter will teach you exactly how to do that.`,
    },

    // ========== DEFINISJON: THE PEE METHOD ==========
    {
      id: 'engelsk-10-30-def-1',
      type: 'definition',
      title: 'The PEE Method — Point, Evidence, Explanation',
      content: `For short answers, the **PEE** method is your best friend. It is a streamlined version of PEEL, designed for concise responses.

**P — Point**
Start by directly answering the question. Do not repeat the question or write a long introduction.
- Question: "Why does the narrator feel uncomfortable at the party?"
- Bad: "In this text we read about a narrator who is at a party. The party seems to be..."
- Good: "The narrator feels uncomfortable because she does not know anyone and senses that the other guests are judging her."

**E — Evidence**
Support your point with a specific reference to the text. Use quotes where possible.
- "This is shown when she describes the other guests' stares as 'cold spotlights' (line 12)."

**E — Explanation**
Explain how the evidence supports your point. This is where you show deeper understanding.
- "The metaphor 'cold spotlights' suggests that the narrator feels exposed and scrutinised, as if she is on a stage. The word 'cold' implies hostility, reinforcing her sense of not belonging."

**Complete PEE answer (3 sentences):**
"The narrator feels uncomfortable because she senses the other guests are judging her. This is shown when she describes their stares as 'cold spotlights' (line 12). The metaphor suggests she feels exposed and scrutinised, while 'cold' implies hostility and reinforces her sense of not belonging."

**Key rules:**
- Answer the question in the FIRST sentence
- Include at least one direct quote or specific reference
- The explanation should show WHY the evidence matters, not just repeat it`,
    },

    // ========== EKSEMPEL: PEE IN ACTION ==========
    {
      id: 'engelsk-10-30-example-1',
      type: 'example',
      title: 'Example: Strong vs. Weak Short Answers',
      problem: `Compare these two answers to the question: "How does the author create a sense of danger in the opening paragraph?"`,
      solution: `**Weak answer:**
"The author creates a sense of danger in the opening paragraph. There are many things that make it seem dangerous. It is a good opening because it makes you want to read more. The author is good at using words to create feelings."

**Problems:** Repeats the question, uses vague language ("many things"), does not quote the text, no specific analysis, filler sentences.

**Strong answer:**
"The author creates a sense of danger through dark imagery and short, tense sentences. The description of the alley as 'a throat of shadows that swallowed the streetlight' (line 3) immediately suggests a threatening, almost predatory environment. The short sentence 'He stopped.' (line 5) breaks the rhythm and creates a sudden pause, making the reader hold their breath alongside the character."

**Why the strong answer works:**
- **Point:** First sentence directly answers the question and names specific techniques
- **Evidence:** Two direct quotes from the text with line references
- **Explanation:** Analyses the EFFECT of each technique — "suggests a threatening environment", "makes the reader hold their breath"
- **Language:** Precise analytical vocabulary (imagery, rhythm, predatory)
- **Length:** Concise — 3 sentences, approximately 90 words`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-30-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-ex-1',
        number: '30.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What should the FIRST sentence of a short answer do?',
        options: [
          {
            id: 'a',
            text: 'Directly answer the question with a clear point',
            isCorrect: true,
            feedback: 'Correct! The first sentence should immediately address the question. Do not waste words on introductions or repeating the question.',
          },
          {
            id: 'b',
            text: 'Repeat the question in your own words',
            isCorrect: false,
            feedback: 'Incorrect. Repeating the question wastes valuable space and does not demonstrate understanding. Jump straight to your answer.',
          },
          {
            id: 'c',
            text: 'Provide a quote from the text',
            isCorrect: false,
            feedback: 'Not quite. Evidence (quotes) comes after your point. First state your answer, then support it with evidence.',
          },
          {
            id: 'd',
            text: 'Give background information about the text',
            isCorrect: false,
            feedback: 'Incorrect. In a short answer, there is no room for background information. The examiner already knows the text — get straight to your analysis.',
          },
        ],
        solution: 'The first sentence of a short answer should directly answer the question. This shows the examiner immediately that you understand what is being asked and can respond concisely.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-30-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-ex-2',
        number: '30.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rewrite these weak short answers to make them stronger. Use the PEE method.',
        subTasks: [
          {
            label: 'a',
            task: 'Question: "What is the theme of the poem?" Weak answer: "The theme of the poem is love. The poem talks about love in many different ways. It is a very emotional poem."',
            solution: 'Improved: "The central theme of the poem is the pain of unrequited love. This is conveyed through the repeated image of \'reaching for a hand that pulls away\' (lines 4, 9, 15), which symbolises the speaker\'s persistent hope despite constant rejection. The repetition creates a sense of obsessive longing, suggesting that the speaker cannot let go even though the love is not returned."',
          },
          {
            label: 'b',
            task: 'Question: "Why does the character decide to leave home?" Weak answer: "The character decides to leave home because he is not happy there. Things are bad at home and he wants a better life."',
            solution: 'Improved: "The character leaves home because he feels trapped by his father\'s expectations. When he says, \'I am not the son you ordered\' (line 23), it reveals a deep frustration with being forced into a role that does not fit him. The word \'ordered\' is particularly significant, as it suggests his father treats him like a product rather than a person, making home feel more like a prison than a sanctuary."',
          },
        ],
        hints: [
          'Start by directly answering the question with specifics, not generalities',
          'Replace vague phrases like "many different ways" with specific examples',
          'Add at least one direct quote and analyse the effect of specific words',
        ],
        solution: 'The key differences between weak and strong answers are: specificity (naming techniques and quoting text), depth (explaining WHY and HOW, not just WHAT), and efficiency (every sentence adds new information).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: ANSWERING VOCABULARY-IN-CONTEXT QUESTIONS ==========
    {
      id: 'engelsk-10-30-def-2',
      type: 'definition',
      title: 'Vocabulary in Context — How to Explain Word Meaning',
      content: `"Explain what the word X means as used in the text" is one of the most common short-answer questions. Here is a reliable method for answering.

**Step 1: Give the meaning in this context**
Do not just give a dictionary definition. Explain what the word means in THIS specific passage.
- "In line 8, 'consumed' means completely taken over or overwhelmed, rather than its literal meaning of eating."

**Step 2: Explain the connotation or effect**
Words carry emotional weight beyond their basic meaning.
- "The word 'consumed' has connotations of fire or destruction, suggesting that the character's grief is not just a feeling — it is actively destroying her from within."

**Step 3: Connect to the broader text (if relevant)**
- "This word choice fits with the pattern of destructive imagery used throughout the passage to describe loss."

**Template for vocabulary answers:**
"In this context, [word] means [meaning]. The word carries connotations of [associations], which suggests [effect/interpretation]. This fits with [broader theme or pattern] in the text."

**Common mistakes to avoid:**
- Giving only a dictionary definition without context
- Saying "it means the same as [synonym]" without explanation
- Ignoring the connotations and emotional weight of the word
- Not connecting the word to the text's broader meaning`,
    },

    // ========== EKSEMPEL: VOCABULARY IN CONTEXT ==========
    {
      id: 'engelsk-10-30-example-2',
      type: 'example',
      title: 'Example: Answering a Vocabulary Question',
      problem: `The text says: "The news haunted her for weeks." Question: "Explain what 'haunted' means as used in this sentence."`,
      solution: `**Model answer:**
"In this sentence, 'haunted' means that the news stayed with her persistently, causing repeated distress and making it impossible to forget. The word is normally associated with ghosts and the supernatural, which suggests that the news follows her like a ghost — invisible but always present, appearing when she least expects it. This implies that the character has no control over these intrusive thoughts and cannot escape the emotional impact of what she has learned."

**Why this answer scores well:**
- **Meaning in context:** "stayed with her persistently, causing repeated distress" — not just "scared"
- **Connotation:** Connects to ghosts and the supernatural — shows awareness of word associations
- **Effect:** "invisible but always present" and "no control" — analyses what the word tells us about the character
- **Length:** 3 sentences, approximately 80 words — concise but thorough`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-30-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-ex-3',
        number: '30.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Explain the meaning of the underlined word in each sentence. Use the three-step method: meaning in context, connotation, and connection to the broader text.',
        subTasks: [
          {
            label: 'a',
            task: '"The politician\'s promises EVAPORATED as soon as the election was over."',
            solution: '"Evaporated" means the promises disappeared quickly and completely. The word is normally used for water turning to gas, which suggests the promises were as insubstantial as vapour — they looked real but had no solid form. This implies the politician never intended to follow through.',
          },
          {
            label: 'b',
            task: '"She DEVOURED the book in a single evening."',
            solution: '"Devoured" means she read the book extremely quickly and eagerly. The word normally means eating greedily, which suggests a hunger-like intensity in her reading — she consumed the story the way a starving person consumes food. This implies the book was compelling and that reading brought her deep satisfaction.',
          },
          {
            label: 'c',
            task: '"His voice was a BLADE that cut through the silence."',
            solution: '"Blade" is a metaphor comparing his voice to a sharp cutting instrument. This suggests his words were sudden, sharp, and possibly painful — breaking the silence violently rather than gently. The word implies danger and aggression, hinting that what he said was unwelcome or harsh.',
          },
        ],
        solution: 'Strong vocabulary-in-context answers always go beyond the dictionary definition. They explain connotation (emotional associations) and effect (what the word tells us about the character, theme, or mood).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: COMPARISON QUESTIONS ==========
    {
      id: 'engelsk-10-30-def-3',
      type: 'definition',
      title: 'Answering Comparison Questions — Similarities and Differences',
      content: `Comparison questions ask you to examine two texts, characters, or ideas side by side. The key is to **integrate** your comparison rather than treating each text separately.

**The wrong approach (separate blocks):**
"Text A is about... [entire paragraph about Text A]. Text B is about... [entire paragraph about Text B]."
This is a description, not a comparison.

**The right approach (integrated comparison):**
"Both texts explore the theme of isolation, but while Text A presents it as liberating, Text B portrays it as devastating."

**Useful comparison language:**

| Showing similarity | Showing difference |
|---|---|
| Both texts... | However, unlike Text A, Text B... |
| Similarly, ... | In contrast, ... |
| Like Text A, Text B also... | While Text A..., Text B... |
| In the same way, ... | On the other hand, ... |
| A parallel can be drawn between... | The key difference is that... |

**Structure for comparison answers:**
1. **Opening statement** — Identify the main similarity or difference
2. **Evidence from Text A** — Quote or reference
3. **Evidence from Text B** — Quote or reference
4. **Analysis** — Explain what this similarity or difference reveals

**Important:** Always analyse BOTH texts equally. Do not write three sentences about one text and one sentence about the other.`,
    },

    // ========== EKSEMPEL: COMPARISON ANSWER ==========
    {
      id: 'engelsk-10-30-example-3',
      type: 'example',
      title: 'Example: Writing an Integrated Comparison',
      problem: `Question: "Compare how the two texts present the idea of growing up." Text A is a memoir about leaving home for university. Text B is a poem about childhood ending.`,
      solution: `**Model answer:**
"Both texts present growing up as a bittersweet experience, but they emphasise different aspects of the transition. Text A focuses on the excitement of independence, describing university as 'a new country waiting to be explored' (line 7), which frames growing up as an adventure full of possibility. Text B, in contrast, mourns what is lost, describing childhood as 'a room you can never re-enter' (line 11), which creates a sense of permanent, irreversible change. While the memoir's metaphor of a 'new country' suggests open horizons and freedom, the poem's image of a locked room conveys confinement and loss. Together, the texts suggest that growing up is simultaneously a gain and a loss — you step into a larger world, but you can never go back."

**Why this works:**
- **Integrated:** Every sentence connects both texts
- **Comparison language:** "Both...but", "in contrast", "While...suggests"
- **Evidence:** Direct quotes from both texts with line references
- **Analysis:** Explains what the different metaphors MEAN, not just what they say
- **Conclusion:** Draws the comparison together with a broader insight
- **Balance:** Equal attention given to both texts`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-30-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-ex-4',
        number: '30.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following is the best opening sentence for a comparison answer?',
        options: [
          {
            id: 'a',
            text: '"Both texts explore loneliness, but while Text A presents it as a choice, Text B portrays it as something forced upon the character."',
            isCorrect: true,
            feedback: 'Excellent! This sentence identifies the shared theme (loneliness) and immediately highlights the key difference. It integrates both texts in a single sentence.',
          },
          {
            id: 'b',
            text: '"Text A is about a man who lives alone on an island. He seems happy."',
            isCorrect: false,
            feedback: 'This only discusses Text A and reads as a summary rather than a comparison. A comparison answer must reference both texts from the start.',
          },
          {
            id: 'c',
            text: '"I am going to compare Text A and Text B and discuss how they are similar and different."',
            isCorrect: false,
            feedback: 'This is a meta-statement that announces what you will do instead of actually doing it. Start with the comparison itself.',
          },
          {
            id: 'd',
            text: '"Text A and Text B are both about loneliness."',
            isCorrect: false,
            feedback: 'This is too simple — it only identifies a similarity without any nuance. A strong opening should also hint at the difference or the specific angle of comparison.',
          },
        ],
        solution: 'The best comparison openings identify a shared element AND highlight the key difference in a single, nuanced sentence. Use structures like "Both...but while...Text B..."',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-30-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-ex-5',
        number: '30.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Rewrite these "separate block" comparison sentences as integrated comparisons.',
        subTasks: [
          {
            label: 'a',
            task: 'Separate: "Text A uses short sentences. Text B uses long, flowing sentences."',
            solution: 'Integrated: "While Text A uses short, abrupt sentences to create tension, Text B employs long, flowing sentences that give the prose a meditative, reflective quality."',
          },
          {
            label: 'b',
            task: 'Separate: "The character in Text A is brave. The character in Text B is scared."',
            solution: 'Integrated: "In contrast to the protagonist of Text A, who confronts danger with quiet determination, the main character in Text B is paralysed by fear, unable to act even when action is desperately needed."',
          },
          {
            label: 'c',
            task: 'Separate: "Text A has a happy ending. Text B has a sad ending."',
            solution: 'Integrated: "Both texts build towards a climactic moment of decision, but while Text A resolves optimistically with the character finding acceptance, Text B ends on a note of irreversible loss, suggesting that not all stories offer comfort."',
          },
        ],
        solution: 'Integrated comparisons show the examiner that you can think about both texts simultaneously. They demonstrate analytical skill rather than just description.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-30-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-ex-6',
        number: '30.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'In the PEE method, what does the second E (Explanation) require you to do?',
        options: [
          {
            id: 'a',
            text: 'Explain HOW and WHY the evidence supports your point — analyse the effect',
            isCorrect: true,
            feedback: 'Correct! The explanation is where you show deeper understanding by analysing the significance of the evidence, not just restating it.',
          },
          {
            id: 'b',
            text: 'Give a second piece of evidence from the text',
            isCorrect: false,
            feedback: 'Incorrect. The second E stands for Explanation, not a second piece of Evidence. You need to analyse the evidence you have already provided.',
          },
          {
            id: 'c',
            text: 'Write an example from your own life',
            isCorrect: false,
            feedback: 'Incorrect. In short-answer analysis questions, the explanation should focus on the text, not personal experience.',
          },
          {
            id: 'd',
            text: 'Repeat your point in different words',
            isCorrect: false,
            feedback: 'Incorrect. The explanation should add new insight, not repeat what you have already said. Analyse the specific EFFECT of the language or technique.',
          },
        ],
        solution: 'The Explanation is the most important part of PEE. It is where you demonstrate analytical thinking by explaining the significance, effect, or implications of the evidence.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-30-summary',
      type: 'text',
      content: `## Summary: Mastering Short Answers

Short answers require a different skill set from long essays. Here is what to remember:

**The PEE method:**
- **Point** — Answer the question directly in your first sentence
- **Evidence** — Support with a quote or specific reference
- **Explanation** — Analyse WHY the evidence matters

**For vocabulary questions:**
- Give the meaning IN CONTEXT (not just a dictionary definition)
- Discuss connotations and emotional associations
- Connect to the broader text if possible

**For comparison questions:**
- Integrate both texts in every sentence — never use "separate blocks"
- Use comparison language: "Both...but", "While...in contrast", "Similarly...however"
- Give equal attention to both texts

**Golden rules for all short answers:**
1. Answer the question in your FIRST sentence
2. Every sentence must add new information
3. Always include specific evidence (quotes with line numbers)
4. Never repeat the question or write filler sentences
5. Aim for 3-6 sentences (50-120 words) unless told otherwise`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-30-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-ex-7',
        number: '30.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Read the following passage and answer the three questions below using the PEE method. Each answer should be 3-5 sentences.',
        subTasks: [
          {
            label: 'a',
            task: 'Passage: "The old house groaned in the wind, its windows like hollow eyes staring out at nothing. Inside, dust covered every surface like grey snow, and the air tasted of forgotten years. A single photograph lay face-down on the floor, as if even the memories had given up." — Question: How does the author create an atmosphere of abandonment?',
            solution: 'The author creates an atmosphere of abandonment through personification and sensory imagery. The house "groaned" and its windows are described as "hollow eyes staring out at nothing," personifying the building as a suffering, empty being. The simile "dust... like grey snow" appeals to both sight and touch, while "the air tasted of forgotten years" uses taste to make the decay feel physical. The final image of the photograph lying "face-down, as if even the memories had given up" is particularly powerful because it suggests that the abandonment is so complete that even the past has surrendered.',
          },
          {
            label: 'b',
            task: 'From the same passage — Question: Explain what "forgotten years" means in context.',
            solution: '"Forgotten years" refers to the long period of time since anyone lived in or cared for the house. The phrase personifies time itself, suggesting that the years have been deliberately abandoned, not just passed. The word "forgotten" implies that someone chose to leave these memories behind, adding a layer of emotional weight — it is not just that the house is old, but that someone walked away from it and never looked back.',
          },
          {
            label: 'c',
            task: 'From the same passage — Question: What is the effect of the final sentence?',
            solution: 'The final sentence, "as if even the memories had given up," is the emotional climax of the passage. By personifying memories as beings capable of surrender, the author suggests that abandonment has reached its most extreme point — not just physical, but psychological. If even memories have "given up," there is nothing left to hold the past in place. This creates a profound sense of finality and loss, leaving the reader with the impression that this house and its history are beyond recovery.',
          },
        ],
        hints: [
          'Start each answer by directly addressing the question',
          'Quote specific words or phrases from the passage',
          'Analyse the effect of individual word choices, not just whole sentences',
        ],
        solution: 'Strong short answers demonstrate close reading skills — the ability to notice specific language choices and explain their effects. Always move from WHAT the author writes to WHY they chose those particular words.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-30-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-30-ex-8',
        number: '30.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Timed practice: Set a timer for 20 minutes. Answer ALL of the following questions in short-answer format (3-5 sentences each). This simulates exam conditions.',
        subTasks: [
          {
            label: 'a',
            task: 'Explain what "the digital divide" means and why it matters for education.',
            solution: 'The digital divide refers to the gap between people who have access to modern technology and those who do not. In education, this divide means that students without reliable internet or devices are at a significant disadvantage, as they cannot access online learning resources, complete digital homework, or develop the technological skills required in modern workplaces. The COVID-19 pandemic made this inequality starkly visible, with millions of students worldwide falling behind simply because they lacked the tools to learn remotely.',
          },
          {
            label: 'b',
            task: 'Compare how a newspaper article and a social media post present information differently.',
            solution: 'While both newspaper articles and social media posts convey information, they differ fundamentally in depth, verification, and purpose. A newspaper article is typically researched, fact-checked, and structured with a lead paragraph that answers the key questions, whereas a social media post prioritises brevity, emotional engagement, and shareability over accuracy. This difference matters because readers of social media may form opinions based on incomplete or misleading information, while newspaper readers are more likely to encounter nuance and context.',
          },
          {
            label: 'c',
            task: 'A character in a story says: "Home is not a place — it is whoever makes you feel safe." Explain what this means and what it tells us about the character.',
            solution: 'The character is redefining "home" as an emotional state rather than a physical location, suggesting that belonging and safety come from relationships, not geography. This tells us that the character likely has experience with displacement or unstable living conditions, and has learned to find security in people rather than places. The statement also reveals emotional maturity and resilience — the character has turned what could be a source of sadness (having no fixed home) into a more flexible and meaningful understanding of what home truly means.',
          },
        ],
        hints: [
          'Spend no more than 6 minutes per answer',
          'Use PEE: point first, evidence or example, then explanation',
          'If you are running out of time, write your point sentence and move on',
        ],
        solution: 'Under exam conditions, time management is as important as writing quality. Practise writing short answers with a timer regularly so that you develop a sense of how long 5 minutes feels.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'PEE method', definition: 'Point, Evidence, Explanation — a concise structure for short-answer responses.' },
    { term: 'Vocabulary in context', definition: 'Explaining what a word means in a specific passage, including connotations and effects, not just a dictionary definition.' },
    { term: 'Integrated comparison', definition: 'A comparison that discusses both texts simultaneously in each sentence, rather than treating them in separate blocks.' },
    { term: 'Connotation', definition: 'The emotional associations and implied meanings of a word, beyond its literal dictionary definition.' },
    { term: 'Close reading', definition: 'The careful, detailed analysis of a text, paying attention to individual word choices, techniques, and their effects.' },
    { term: 'Textual evidence', definition: 'Specific quotes or references from the text used to support an analytical point.' },
  ],
};

// ============================================================================
// KAPITTEL 31: Oral Exam Preparation
// ============================================================================

export const CHAPTER_ENGELSK_10_31: TextbookChapter = {
  id: 'engelsk-10-31',
  courseId: 'engelsk-10',
  chapterNumber: '31',
  title: 'Oral Exam Preparation',
  description: 'Prepare for the oral English exam with strategies for structuring presentations, handling follow-up questions, managing nerves, and demonstrating fluency and depth in spoken English.',
  estimatedMinutes: 80,
  competenceGoals: [
    'uttrykke seg med flyt og sammenheng tilpasset formål og situasjon',
    'delta i spontane samtaler om ulike emner og uttrykke og begrunne egne meninger',
    'bruke varierte språklige virkemidler i muntlig kommunikasjon',
    'tilpasse språket til ulike kommunikasjonssituasjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-31-intro',
      type: 'text',
      content: `## Oral Exam Preparation

The oral English exam can feel intimidating, but with the right preparation, it becomes an opportunity to showcase your skills in a way that no written test can. Unlike writing, speaking allows you to use your voice, your personality, and your ability to think on your feet.

**The oral exam typically consists of two parts:**

**Part 1: Prepared Presentation (8-12 minutes)**
You receive a topic 48 hours before the exam and prepare a presentation. You may bring brief notes (usually one A4 sheet or index cards), but you should NOT read from a script.

**Part 2: Follow-up Conversation (10-15 minutes)**
The examiners ask you questions about your presentation topic and other curriculum-related themes. This tests your ability to speak spontaneously, express and defend opinions, and engage in a natural conversation.

**What the examiners assess:**

| Criterion | What it means |
|-----------|---------------|
| **Communication** | Can you convey your message clearly? |
| **Language** | Do you use varied vocabulary and correct grammar? |
| **Content** | Do you show knowledge, insight, and reflection? |
| **Fluency** | Do you speak smoothly without too many long pauses? |
| **Interaction** | Can you respond to questions and engage in dialogue? |

The good news: these are all skills you can practise and improve. Let us start with the presentation.`,
    },

    // ========== DEFINISJON: STRUCTURING YOUR PRESENTATION ==========
    {
      id: 'engelsk-10-31-def-1',
      type: 'definition',
      title: 'Structuring a 10-Minute Presentation',
      content: `A well-structured presentation is easier for the audience to follow AND easier for you to remember. Here is a proven structure:

**1. Opening (1-2 minutes)**
- **Greet** the examiners: "Good morning. My name is..."
- **Hook** the audience with something attention-grabbing:
  - A surprising fact or statistic
  - A short story or personal connection
  - A thought-provoking question
  - A striking image (if using slides)
- **State your topic:** "Today I am going to talk about..."
- **Preview your structure:** "I will cover three main areas..."

**2. Main Body (6-8 minutes)**
Divide into **3 clear sections**. For each section:
- **Signpost** the transition: "Let me start with..." / "Moving on to..." / "My final point is..."
- **State** the key point clearly
- **Support** with evidence, examples, or personal reflections
- **Connect** to the bigger picture

**3. Conclusion (1-2 minutes)**
- **Signal** you are concluding: "To sum up..." / "In conclusion..."
- **Summarize** your 3 main points in one sentence each
- **End memorably:** A quote, a question, a call to action, or a return to your opening hook
- **Thank** the audience: "Thank you for listening. I am happy to answer any questions."

**Note management:**
- Use **keywords only** — never full sentences
- Write on index cards or one side of A4
- Number your cards in case you drop them
- Practise so you barely need to look at your notes`,
    },

    // ========== EKSEMPEL: PRESENTATION OPENING ==========
    {
      id: 'engelsk-10-31-example-1',
      type: 'example',
      title: 'Example: Three Ways to Open a Presentation on Climate Change',
      problem: `Your exam topic is "Climate change and young people." Write three different opening hooks and evaluate which works best.`,
      solution: `**Hook 1 — Startling statistic:**
"Did you know that 75% of young people between 16 and 25 say they are frightened about the future because of climate change? That is three out of four people in this age group. I am one of them."

**Hook 2 — Personal story:**
"Last summer, my grandmother showed me a photograph of the glacier she visited as a child in northern Norway. I went to the same spot last year. The glacier was gone. That moment changed how I think about climate change — it stopped being a news story and became personal."

**Hook 3 — Provocative question:**
"Imagine you are 40 years old. You are explaining to your children why the summers keep getting hotter, why the fjords look different, why certain animals only exist in old photographs. What will you say? That you knew — but did nothing?"

**Evaluation:**
- **Hook 1** works well because it combines a specific statistic with a personal connection. It is factual and emotional.
- **Hook 2** is the strongest because it tells a story that is concrete, visual, and personal. Stories are memorable.
- **Hook 3** is dramatic and thought-provoking, but it risks sounding accusatory. Use this style only if you can deliver it with the right tone.

**General principle:** The best hooks are specific and personal. Avoid generic openings like "Climate change is a very important topic" — that tells the audience nothing new.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-31-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-ex-1',
        number: '31.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is "signposting" in a presentation?',
        options: [
          {
            id: 'a',
            text: 'Using transitional phrases to guide the audience through your presentation structure',
            isCorrect: true,
            feedback: 'Correct! Signposting phrases like "Moving on to..." or "My second point is..." help the audience follow your presentation and know where you are in your argument.',
          },
          {
            id: 'b',
            text: 'Using physical signs or cue cards to remind yourself what to say',
            isCorrect: false,
            feedback: 'Incorrect. Signposting is a verbal technique — it means using spoken transitions to signal where you are in your presentation.',
          },
          {
            id: 'c',
            text: 'Pointing at a whiteboard or screen during your presentation',
            isCorrect: false,
            feedback: 'Incorrect. While you might point at visual aids, signposting specifically refers to verbal transitions that guide the audience through your structure.',
          },
          {
            id: 'd',
            text: 'Reading your main points directly from your notes',
            isCorrect: false,
            feedback: 'Incorrect. Reading from notes is the opposite of good presentation technique. Signposting means using natural transitional language to guide listeners.',
          },
        ],
        solution: 'Signposting is the use of transitional phrases to help your audience follow the structure of your presentation. Examples: "First of all...", "Moving on to...", "To conclude..."',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-31-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-ex-2',
        number: '31.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a complete presentation opening (1-2 minutes when spoken aloud) for ONE of these exam topics. Include a hook, topic statement, and structural preview.',
        subTasks: [
          {
            label: 'a',
            task: '"The role of English as a global language"',
            solution: 'A strong opening might use a statistic about English speakers worldwide, a personal anecdote about using English in a real situation, and a clear preview: "I will discuss three areas: English in business, English in popular culture, and the debate about linguistic diversity."',
          },
          {
            label: 'b',
            task: '"How technology has changed the way we communicate"',
            solution: 'A strong opening might contrast a scene from 20 years ago (writing letters, waiting for replies) with today (instant messaging, video calls), then preview the main sections of the presentation.',
          },
        ],
        hints: [
          'Choose a hook type: statistic, personal story, question, or bold statement',
          'Keep it under 150 words — about 1 minute when spoken',
          'Practise saying it aloud to check the timing and natural flow',
        ],
        solution: 'A strong presentation opening takes about 60-90 seconds and achieves three things: grabs attention, introduces the topic, and previews the structure so the audience knows what to expect.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: HANDLING FOLLOW-UP QUESTIONS ==========
    {
      id: 'engelsk-10-31-def-2',
      type: 'definition',
      title: 'Handling Follow-Up Questions — The Conversation Part',
      content: `The conversation portion of the oral exam is where many students lose marks — but it is also where you can gain them. Here is how to handle it well.

**When you understand the question:**
1. Take a brief pause (1-2 seconds) to organise your thoughts
2. Answer directly, then elaborate
3. Use the structure: **Opinion → Reason → Example**

Example:
- Question: "Do you think social media does more harm than good?"
- Answer: "Personally, I think it depends on how you use it. [OPINION] On one hand, social media can be harmful because of cyberbullying and the pressure to present a perfect life. [REASON] I have friends who feel anxious after scrolling through Instagram because they compare themselves to others. [EXAMPLE] However, I also use social media to stay in touch with my cousins in England, so I think it has real value for connection. [NUANCE]"

**When you do not understand the question:**
- "Could you repeat the question, please?"
- "I am not sure I understand. Do you mean...?"
- "That is an interesting question. Could you rephrase it?"
These are perfectly acceptable and show confidence, not weakness.

**When you do not know the answer:**
- Be honest, then redirect: "I am not very familiar with that specific topic, but I think..."
- Connect to something you DO know: "I have not read about that, but it reminds me of..."
- Think aloud: "That is a difficult question. Let me think about it for a moment..."

**Phrases for expressing opinions:**
- "I strongly believe that..." / "In my opinion..." / "From my perspective..."
- "I see both sides, but I lean towards..."
- "While I understand the argument that..., I think..."

**Phrases for buying time (without saying "um"):**
- "That is a really good question."
- "I have not thought about it from that angle before, but..."
- "Let me think about that for a moment."`,
    },

    // ========== EKSEMPEL: FOLLOW-UP CONVERSATION ==========
    {
      id: 'engelsk-10-31-example-2',
      type: 'example',
      title: 'Example: A Model Follow-Up Conversation',
      problem: `The student has just presented about "Immigration and multiculturalism in English-speaking countries." Here is an example of the follow-up conversation. Notice how the student handles different types of questions.`,
      solution: `**Examiner:** "You mentioned that multiculturalism enriches society. Can you give a specific example?"

**Student:** "Yes, absolutely. One clear example is food culture. In London, you can walk down a single street and find Indian, Caribbean, Chinese, and Middle Eastern restaurants side by side. This is not just about food — it reflects a society where different cultures have contributed to everyday life. The National Health Service in Britain is another example — it would simply not function without the contributions of immigrant doctors and nurses from around the world."

**Examiner:** "Some people argue that immigration puts pressure on public services. What do you think?"

**Student:** "That is a fair point, and I understand why some people feel that way, especially in areas where resources are already stretched. However, I think it is important to look at the bigger picture. Research shows that immigrants contribute more in taxes than they receive in benefits in most countries. So while there may be short-term pressure on services, the long-term economic benefits tend to outweigh the costs. I think the real issue is not immigration itself, but how governments distribute resources."

**Examiner:** "If you could move to any English-speaking country, where would you go and why?"

**Student:** [Pauses briefly] "That is a fun question. I think I would choose New Zealand. I am fascinated by the way it combines Maori culture with European influences, and I love the natural landscapes. I have also heard that the quality of life is very high. Plus, I would get to practise my English with a Kiwi accent!" [Smiles]

**Why this works:**
- Answers are detailed but focused (not rambling)
- Uses specific examples (London food, NHS, New Zealand)
- Acknowledges the opposing view before responding ("That is a fair point")
- Shows personality and humour where appropriate
- Uses varied vocabulary and sophisticated linking phrases

*Note: This model answer demonstrates diplomatic argumentation technique — how to take a position, acknowledge opposing views, and support your argument with evidence. The specific opinions expressed (e.g. on immigration policy) are examples of structure and tone, not "correct" positions. An equally well-structured answer presenting a more restrictive view on immigration would also demonstrate strong exam technique.*`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-31-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-ex-3',
        number: '31.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Practise answering follow-up questions. Write a 4-6 sentence response to each question using the Opinion → Reason → Example structure.',
        subTasks: [
          {
            label: 'a',
            task: '"Do you think English should be taught from first grade in Norwegian schools?"',
            solution: 'A strong answer takes a clear position, gives at least one reason, provides a concrete example, and shows nuance by acknowledging the counterargument. For example: "Yes, I believe starting English early gives children a natural foundation. Research shows that younger children pick up pronunciation more easily..."',
          },
          {
            label: 'b',
            task: '"How has the internet changed the way young people learn English?"',
            solution: 'A strong answer identifies specific ways (YouTube, Netflix, gaming, social media), gives a personal example, and reflects on both positive and negative aspects. For example: "The internet has completely transformed English learning for my generation. I personally learned most of my English from watching YouTube videos and playing online games..."',
          },
          {
            label: 'c',
            task: '"What is the most important thing you have learned in English class this year?"',
            solution: 'A strong answer names something specific, explains WHY it matters, and connects it to life beyond school. Avoid generic answers like "vocabulary." For example: "The most important thing I have learned is how to write an argumentative essay with a clear structure. This matters because..."',
          },
        ],
        hints: [
          'Start with your opinion, then explain your reasoning',
          'Include at least one specific example or personal experience',
          'Show nuance — acknowledge the other side where appropriate',
          'Practise saying your answers aloud to check fluency and timing',
        ],
        solution: 'The Opinion → Reason → Example structure keeps your answers focused and well-developed. Practise regularly by having someone ask you random questions in English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: MANAGING NERVES AND BODY LANGUAGE ==========
    {
      id: 'engelsk-10-31-def-3',
      type: 'definition',
      title: 'Managing Nerves and Using Body Language Effectively',
      content: `Exam nerves are completely normal. Even professional speakers get nervous. The difference is that experienced speakers know how to manage their nerves and use their body language to project confidence.

**Physical strategies for managing nerves:**

| Strategy | How it helps |
|----------|-------------|
| **Slow, deep breathing** | Activates the parasympathetic nervous system, reducing heart rate and anxiety |
| **Power posing** | Standing tall with open posture for 2 minutes before the exam can increase confidence |
| **Grounding** | Feel your feet on the floor, press your toes down — this brings you into the present |
| **Hydration** | Bring water and take small sips — dry mouth is a common anxiety symptom |
| **Warm-up** | Speak English aloud for 10 minutes before the exam to activate your language skills |

**Body language during the presentation:**

**DO:**
- Maintain eye contact with both examiners (the 3-second rule: look at one person for about 3 seconds, then shift)
- Stand or sit up straight with open posture
- Use natural hand gestures to emphasise points
- Smile when appropriate — it relaxes both you and the audience
- Move slightly (if standing) to show energy and confidence

**DO NOT:**
- Cross your arms (signals defensiveness)
- Fidget with a pen, hair, or clothing (signals anxiety)
- Look only at your notes or the floor
- Speak in a monotone voice — vary your pitch and pace
- Rush through your presentation (nervous speakers often speed up)

**Voice techniques:**
- **Pace:** Slightly slower than normal conversation — this sounds confident and gives the audience time to process
- **Volume:** Loud enough that everyone can hear clearly
- **Pauses:** Use deliberate pauses after important points — silence is powerful
- **Emphasis:** Stress key words to highlight important ideas`,
    },

    // ========== EKSEMPEL: NERVOUS HABITS AND FIXES ==========
    {
      id: 'engelsk-10-31-example-3',
      type: 'example',
      title: 'Example: Common Nervous Habits and How to Fix Them',
      problem: `Identify the nervous habits in this description of a student's oral exam performance and suggest fixes.`,
      solution: `**The student's performance:**
"Emma spoke very quickly without pausing, looking down at her notes for most of the presentation. She said 'um' and 'like' frequently, and her voice stayed at the same flat pitch throughout. When asked a follow-up question, she immediately said 'I don't know' before the examiner had even finished speaking. She crossed her arms during the conversation portion."

**Nervous habits identified and fixes:**

**1. Speaking too fast**
- Fix: Practise with a timer. Mark "PAUSE" on your notes at key points. Aim for 120-150 words per minute.

**2. Looking at notes constantly**
- Fix: Use keyword-only notes. Practise your presentation enough that you can look up for 80% of the time. Place notes slightly to the side, not directly in front of you.

**3. Filler words ("um", "like")**
- Fix: Replace fillers with brief pauses. Silence feels longer to you than to the audience. Record yourself practising and count the fillers — awareness is the first step.

**4. Monotone voice**
- Fix: Mark words to STRESS in your notes. Practise varying your pitch: go higher for questions, lower for serious points. Record yourself and listen back.

**5. Answering before the question is finished**
- Fix: Wait until the examiner finishes. Take a 2-second pause. Then answer. If you genuinely do not know, say "That is an interesting question. Let me think about it."

**6. Crossed arms**
- Fix: Rest hands on the table or hold a pen (not to fidget with). Practise open posture in front of a mirror.

**Key insight:** Most nervous habits can be fixed through awareness and practice. Record yourself, watch the recording, and focus on improving one habit at a time.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-31-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-ex-4',
        number: '31.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What should you do if an examiner asks a question and you do not understand it?',
        options: [
          {
            id: 'a',
            text: 'Politely ask them to repeat or rephrase the question',
            isCorrect: true,
            feedback: 'Correct! Saying "Could you rephrase that?" or "I am not sure I understand — do you mean...?" is perfectly acceptable and shows mature communication skills.',
          },
          {
            id: 'b',
            text: 'Immediately say "I don\'t know" and wait for the next question',
            isCorrect: false,
            feedback: 'Incorrect. Saying "I don\'t know" without trying shows a lack of effort. Always try to engage with the question, even if you need it rephrased.',
          },
          {
            id: 'c',
            text: 'Answer a different question that you do understand',
            isCorrect: false,
            feedback: 'Incorrect. Answering a completely different question will confuse the examiners and suggests you are avoiding the topic.',
          },
          {
            id: 'd',
            text: 'Stay silent and hope they move on to the next question',
            isCorrect: false,
            feedback: 'Incorrect. Silence suggests you have given up. It is always better to ask for clarification — this is a natural part of communication.',
          },
        ],
        solution: 'Asking for clarification is a normal and mature communication strategy. Examiners expect it and will not penalise you for it. It actually shows confidence.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-31-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-ex-5',
        number: '31.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Practise replacing filler words with silence. Rewrite these spoken responses, removing all filler words and adding [PAUSE] where a natural pause would be effective.',
        subTasks: [
          {
            label: 'a',
            task: '"So like, I think that, um, the most important thing about, you know, learning English is like, being able to communicate with, um, people from other countries."',
            solution: '"I think the most important thing about learning English [PAUSE] is being able to communicate with people from other countries." The pause after "English" creates emphasis and gives the listener time to process.',
          },
          {
            label: 'b',
            task: '"Well, um, I mean, I kind of agree with, like, the idea that technology is, um, changing how we learn, but, like, I also think it has some, you know, negative effects."',
            solution: '"I agree that technology is changing how we learn. [PAUSE] However, I also think it has some negative effects." Splitting into two clear sentences and using "however" instead of "but, like" sounds much more confident.',
          },
        ],
        hints: [
          'Read your rewritten version aloud — does it sound natural?',
          'Pauses after key points sound powerful, not awkward',
          'Shorter sentences are easier to deliver without fillers',
        ],
        solution: 'Filler words are a habit that can be broken with practice. The key is replacing them with deliberate pauses. What feels like an eternity to you sounds like confident emphasis to the listener.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-31-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-ex-6',
        number: '31.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'During the conversation part of the oral exam, the examiner asks: "What do you think about the death penalty?" You have strong opinions but are unsure how to express them diplomatically. Which response is best?',
        options: [
          {
            id: 'a',
            text: '"Personally, I am against the death penalty because I believe every person has the right to life, even those who have committed terrible crimes. I understand that some people feel it is justified for the worst offences, but research shows it does not actually reduce crime rates."',
            isCorrect: true,
            feedback: 'Excellent! This answer takes a clear position, gives a reason, acknowledges the opposing view, and uses evidence. It is diplomatic while being honest. This answer is marked correct because of its STRUCTURE (clear position, acknowledgement of other views, evidence) — not because of the specific opinion expressed. An equally well-structured answer in FAVOUR of the death penalty would also score well on the exam.',
          },
          {
            id: 'b',
            text: '"I think the death penalty is obviously wrong and anyone who supports it is basically saying that killing people is okay."',
            isCorrect: false,
            feedback: 'This is too aggressive and dismissive of other viewpoints. In an exam, you should show the ability to discuss sensitive topics maturely, acknowledging that others may think differently.',
          },
          {
            id: 'c',
            text: '"I don\'t really have an opinion on that."',
            isCorrect: false,
            feedback: 'This misses the opportunity to demonstrate your speaking skills. The examiner wants to see you engage with difficult questions, even if your position is nuanced.',
          },
          {
            id: 'd',
            text: '"That\'s a difficult question. I guess it depends. Some countries have it and some don\'t."',
            isCorrect: false,
            feedback: 'While acknowledging complexity is good, this answer is too vague. It states obvious facts without taking a position or showing deeper thinking.',
          },
        ],
        solution: 'The best answers on sensitive topics take a clear position while showing awareness of opposing views. Use phrases like "Personally, I believe..." and "I understand that others feel..."',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-31-summary',
      type: 'text',
      content: `## Summary: Your Oral Exam Toolkit

**Presentation structure:**
- Opening: Hook + topic + preview (1-2 minutes)
- Body: 3 clear sections with signposting (6-8 minutes)
- Conclusion: Summary + memorable ending (1-2 minutes)

**Follow-up conversation:**
- Use Opinion → Reason → Example structure
- Acknowledge opposing views before giving your own
- It is okay to ask for clarification or to take a moment to think

**Managing nerves:**
- Deep breathing, power posing, and warm-up in English
- Practise enough that your notes become a safety net, not a script

**Body language:**
- Eye contact, open posture, natural gestures
- Vary your pace and pitch — avoid monotone delivery
- Use deliberate pauses for emphasis

**The number one tip:** Practise speaking English aloud every day in the weeks before the exam. Talk to yourself, record yourself, practise with friends. The more you speak, the more natural it feels.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-31-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-ex-7',
        number: '31.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Full presentation practice: Choose one of the topics below and prepare a complete 8-10 minute presentation outline with keyword notes.',
        subTasks: [
          {
            label: 'a',
            task: 'Topic: "English-speaking countries and their cultures — similarities and differences." Create a keyword outline with hook, 3 main sections, and conclusion.',
            solution: 'A strong outline includes: Hook (surprising cultural fact or personal experience), Section 1 (shared language but cultural differences — USA vs. UK vs. Australia), Section 2 (cultural exports like music, film, and literature), Section 3 (challenges of cultural diversity within these countries), Conclusion (what we can learn from English-speaking cultures).',
          },
          {
            label: 'b',
            task: 'Topic: "The future of education — how will students learn in 2040?" Create a keyword outline with hook, 3 main sections, and conclusion.',
            solution: 'A strong outline includes: Hook (contrast classroom of 1950 vs. today), Section 1 (AI and personalised learning), Section 2 (virtual and augmented reality in education), Section 3 (the human elements that technology cannot replace), Conclusion (balance between technology and human connection).',
          },
        ],
        hints: [
          'Use only keywords — no full sentences in your outline',
          'Mark where you will signpost transitions',
          'Include at least one specific example or statistic per section',
          'Practise delivering the presentation aloud using only your outline',
        ],
        solution: 'A keyword outline should fit on one A4 page or 5-6 index cards. If you need more space, you are writing too much. The outline is a safety net, not a script.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-31-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-31-ex-8',
        number: '31.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Mock exam conversation: Have a partner (or family member) ask you these questions one at a time. Answer each in 30-60 seconds. Record yourself if possible.',
        subTasks: [
          {
            label: 'a',
            task: '"What English-language book, film, or TV series has made the biggest impression on you, and why?"',
            solution: 'A strong answer names a specific work, explains what made it impactful (theme, character, style), and connects it to a broader idea or personal experience. Aim for 4-6 sentences with specific details.',
          },
          {
            label: 'b',
            task: '"Some people say that English is becoming too dominant in the world, threatening smaller languages. What is your view?"',
            solution: 'A strong answer acknowledges the tension between global communication and linguistic diversity, gives specific examples (e.g., endangered languages), and takes a nuanced position. Show awareness of both sides.',
          },
          {
            label: 'c',
            task: '"If you could change one thing about the Norwegian school system, what would it be and why?"',
            solution: 'A strong answer identifies a specific change, explains the reasoning with evidence or experience, and shows awareness of potential counterarguments or challenges in implementation.',
          },
          {
            label: 'd',
            task: '"Tell me about a time you had to use English in a real-life situation outside of school."',
            solution: 'A strong answer tells a brief, specific story with details (where, when, who), explains the challenge, and reflects on what the experience taught about the value of English skills.',
          },
        ],
        hints: [
          'Use Opinion → Reason → Example for each answer',
          'Practise NOT saying "um" or "like" — pause instead',
          'Time yourself: 30-60 seconds per answer is the target',
          'Record and listen back to identify areas for improvement',
        ],
        solution: 'The best way to prepare for the conversation portion is to practise answering unexpected questions regularly. Ask family members or friends to quiz you on random topics in English. The more you practise, the more natural it becomes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Signposting', definition: 'Using transitional phrases to guide the audience through the structure of a presentation.' },
    { term: 'Hook', definition: 'An attention-grabbing opening designed to engage the audience from the first moment.' },
    { term: 'Follow-up questions', definition: 'Spontaneous questions asked by examiners after a presentation to test deeper understanding and conversation skills.' },
    { term: 'Filler words', definition: 'Words like "um", "like", and "you know" that fill pauses but add no meaning. Replace with deliberate silence.' },
    { term: 'Body language', definition: 'Non-verbal communication including posture, eye contact, gestures, and facial expressions that convey confidence and engagement.' },
    { term: 'Opinion-Reason-Example', definition: 'A structure for answering spoken questions: state your opinion, explain your reasoning, then illustrate with a specific example.' },
  ],
};

// ============================================================================
// KAPITTEL 32: Listening Comprehension Strategies
// ============================================================================

export const CHAPTER_ENGELSK_10_32: TextbookChapter = {
  id: 'engelsk-10-32',
  courseId: 'engelsk-10',
  chapterNumber: '32',
  title: 'Listening Comprehension Strategies',
  description: 'Develop effective strategies for understanding spoken English in various accents and contexts, including techniques for note-taking, predicting content, and answering listening comprehension questions.',
  estimatedMinutes: 75,
  competenceGoals: [
    'lytte til og forstå muntlig engelsk med ulike aksenter og i ulike situasjoner',
    'bruke ulike strategier for å forstå og vurdere innholdet i muntlige tekster på engelsk',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'tilpasse språket til ulike kommunikasjonssituasjoner',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-32-intro',
      type: 'text',
      content: `## Listening Comprehension Strategies

Listening comprehension is one of the trickiest skills to improve because you cannot control the speed, accent, or complexity of what you hear. Unlike reading, you cannot go back and re-read a sentence. You get one chance — and that can feel stressful.

But here is the good news: listening is a skill, not a talent. With the right strategies, you can dramatically improve your ability to understand spoken English, even when the speaker has an unfamiliar accent or speaks quickly.

**Why listening comprehension matters:**
- It is tested on exams (listening tasks with questions)
- It is essential for oral exams (you must understand the examiners' questions)
- It is the foundation for real-world communication in English
- It exposes you to natural language patterns, vocabulary, and pronunciation

**Common challenges Norwegian students face:**
1. **Speed** — Native speakers often speak faster than what students are used to in textbook audio
2. **Accents** — British, American, Australian, Indian, and African accents can sound very different
3. **Connected speech** — Words blend together: "What do you want?" becomes "Whaddya want?"
4. **Vocabulary gaps** — Encountering unfamiliar words in real time
5. **Concentration** — Maintaining focus for an extended listening passage

This chapter will give you practical strategies for each of these challenges.`,
    },

    // ========== DEFINISJON: BEFORE, DURING, AND AFTER LISTENING ==========
    {
      id: 'engelsk-10-32-def-1',
      type: 'definition',
      title: 'The Three Phases of Active Listening',
      content: `Effective listening is not passive — it is an active process with three distinct phases.

**Phase 1: BEFORE Listening (Preparation)**
Before you press play or the audio begins, prepare your brain:

- **Read the questions first.** If you have questions to answer, read them carefully. They tell you WHAT to listen for.
- **Predict content.** Based on the title, topic, or questions, what do you expect to hear? Make mental predictions.
- **Identify question types.** Are you listening for specific facts (names, dates, numbers), main ideas, opinions, or the speaker's attitude?
- **Note key words in the questions.** Circle or underline the most important words so you know exactly what information to find.

**Phase 2: DURING Listening (Active Processing)**
While listening, use these strategies:

- **Listen for gist first.** On the first listen, focus on the main idea, not every word. Ask yourself: "What is this about? What is the speaker's main point?"
- **Listen for details on the second listen.** Now focus on specific information that matches the questions.
- **Take brief notes.** Write keywords, not sentences. Use abbreviations and symbols.
- **Do not panic over unknown words.** You do not need to understand every word. Use context to guess meaning.
- **Listen for signal words** that indicate structure:
  - "The main reason is..." (key point coming)
  - "However..." / "On the other hand..." (contrast)
  - "In conclusion..." / "To sum up..." (summary)
  - "For example..." (illustration)

**Phase 3: AFTER Listening (Review)**
After the audio ends:

- **Answer immediately.** Your short-term memory fades fast — write answers right away.
- **Use your notes.** Check your keywords against the questions.
- **Eliminate wrong options.** In multiple-choice, cross out answers you know are wrong.
- **Trust your first instinct.** If you are unsure, your first answer is usually correct.`,
    },

    // ========== EKSEMPEL: NOTE-TAKING IN ACTION ==========
    {
      id: 'engelsk-10-32-example-1',
      type: 'example',
      title: 'Example: How to Take Notes During a Listening Task',
      problem: `Imagine you are listening to a news report about plastic pollution. The questions are:
1. How much plastic enters the oceans each year?
2. Which country produces the most plastic waste?
3. What solution does the expert suggest?

How should you take notes while listening?`,
      solution: `**Before listening:**
Read the questions and identify key words:
- Q1: "how much" → listen for a NUMBER + "plastic" + "oceans"
- Q2: "which country" → listen for a COUNTRY NAME + "most plastic waste"
- Q3: "solution" + "expert suggests" → listen for a RECOMMENDATION

**During listening — what you write:**
As you hear relevant information, jot down brief notes:

\`\`\`
Q1: 8 mil tonnes/yr → oceans
Q2: China → most waste BUT pop. huge, per capita = USA
Q3: Dr. Chen → ban single-use, invest recycling infrastr.
\`\`\`

**After listening — convert to answers:**
1. Approximately 8 million tonnes of plastic enter the oceans each year.
2. China produces the most plastic waste overall, although the USA produces more waste per person.
3. The expert, Dr. Chen, suggests banning single-use plastics and investing in recycling infrastructure.

**Note-taking principles demonstrated:**
- **Abbreviations:** "mil" for million, "yr" for year, "infrastr." for infrastructure
- **Symbols:** → for "leads to" or "equals"
- **Key data only:** Numbers, names, and actions — not full sentences
- **Organised by question:** Each note is linked to a specific question
- **Nuance captured:** The distinction between total waste and per capita waste`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-32-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-ex-1',
        number: '32.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'When you receive a listening comprehension task, what should you do FIRST?',
        options: [
          {
            id: 'a',
            text: 'Read all the questions carefully and identify key words before the audio plays',
            isCorrect: true,
            feedback: 'Correct! Reading the questions first tells your brain what to listen for, making it much easier to catch the relevant information.',
          },
          {
            id: 'b',
            text: 'Start listening immediately and take notes on everything',
            isCorrect: false,
            feedback: 'Incorrect. Trying to note everything without knowing the questions means you will likely miss the specific information you need. Always read the questions first.',
          },
          {
            id: 'c',
            text: 'Close your eyes to concentrate better on the audio',
            isCorrect: false,
            feedback: 'While reducing visual distractions can help, you need your eyes open to take notes and refer to the questions. Reading questions first is the priority.',
          },
          {
            id: 'd',
            text: 'Write down the title of the listening passage',
            isCorrect: false,
            feedback: 'The title may be useful for predicting content, but the most important preparation step is reading the questions so you know what information to listen for.',
          },
        ],
        solution: 'Always read the questions before listening. This activates your brain to search for specific information, dramatically improving your chances of catching the right details.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-32-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-ex-2',
        number: '32.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Practise the prediction strategy. For each listening task title below, predict three things you might hear and three vocabulary words you should listen for.',
        subTasks: [
          {
            label: 'a',
            task: 'Listening task title: "An interview with a teenage climate activist"',
            solution: 'Predictions: 1) The activist will talk about why they got involved, 2) They will mention specific actions they have taken, 3) They will discuss their hopes for the future. Vocabulary to listen for: protest, carbon footprint, sustainability, demonstration, government policy, awareness.',
          },
          {
            label: 'b',
            task: 'Listening task title: "A radio report on the rise of e-sports"',
            solution: 'Predictions: 1) Statistics about how many people watch or play e-sports, 2) Arguments for/against e-sports as "real" sport, 3) Economic impact and prize money. Vocabulary to listen for: tournament, competitive gaming, streaming, audience, professional player, sponsorship.',
          },
          {
            label: 'c',
            task: 'Listening task title: "A conversation between two students about their exchange year"',
            solution: 'Predictions: 1) Where they went and why, 2) Challenges they faced (language, homesickness, culture shock), 3) What they learned or gained from the experience. Vocabulary to listen for: host family, culture shock, homesick, adapt, experience, perspective.',
          },
        ],
        solution: 'Prediction activates relevant vocabulary and knowledge in your brain before you listen. Even if your predictions are wrong, the process of thinking about the topic prepares you to process the information faster.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: UNDERSTANDING ACCENTS AND CONNECTED SPEECH ==========
    {
      id: 'engelsk-10-32-def-2',
      type: 'definition',
      title: 'Understanding Accents and Connected Speech',
      content: `One of the biggest challenges in listening comprehension is that real spoken English sounds very different from textbook English. Here is why — and how to deal with it.

**Connected speech:** In natural English, speakers blend words together:

| Written form | Spoken form | Sounds like |
|---|---|---|
| "What do you want to do?" | Whaddya wanna do? | "Wodjawanado?" |
| "I am going to" | I'm gonna | "Ahmgona" |
| "Do you want to" | D'you wanna | "Jawana" |
| "Could have" | Could've | "Cudov" |
| "Would not have" | Wouldn't've | "Wudonov" |

**Major English accents you may encounter:**

**British English (RP / Received Pronunciation)**
- Often considered the "standard" British accent
- Non-rhotic: the "r" in "car" is not pronounced (sounds like "cah")
- Common in BBC broadcasts and British films

**American English (General American)**
- Rhotic: the "r" is always pronounced
- "Water" sounds like "wadder" (flapped t)
- "Can't" rhymes with "ant" (not "ahnt")

**Australian English**
- Rising intonation at the end of statements (sounds like questions)
- "Day" may sound like "die" to untrained ears
- Very relaxed vowel sounds

**Tips for understanding unfamiliar accents:**
1. **Expose yourself regularly.** Watch films, YouTube, and podcasts with different accents
2. **Focus on context.** Even if you miss individual words, the overall meaning is usually clear
3. **Use subtitles strategically.** Start with English subtitles, then try without
4. **Do not panic.** If you miss something, keep listening — the next sentence often clarifies`,
    },

    // ========== EKSEMPEL: CONNECTED SPEECH DECODING ==========
    {
      id: 'engelsk-10-32-example-2',
      type: 'example',
      title: 'Example: Decoding Connected Speech',
      problem: `A student hears the following in a listening task and writes: "She said she wooden of gone if she new." Decode what was actually said and explain the connected speech patterns.`,
      solution: `**What was actually said:**
"She said she wouldn't have gone if she'd known."

**Decoding the connected speech:**

| What the student heard | What was said | Explanation |
|---|---|---|
| "wooden of" | "wouldn't have" | "Wouldn't have" contracts to "wouldn't've" which sounds like "woodentov" or "wooden of" |
| "gone" | "gone" | Correctly heard |
| "she new" | "she'd known" | "She'd" (she had) blends into the next word, and "known" in fast speech can sound like "noan" or "new" |

**The full sentence in slow, clear English:**
"She said she would not have gone if she had known."

**Key connected speech patterns to recognise:**

1. **Contractions:** would not → wouldn't → wooden (informal fast speech)
2. **"Have" reduction:** "have" after modals often sounds like "of" or "a" → "could've" sounds like "could of"
3. **"Had" contraction:** "she had" → "she'd" → often barely audible
4. **Past participles:** "known" in fast speech can lose the final consonant cluster

**Strategy:** When you hear something that does not make grammatical sense (like "wooden of"), ask yourself: "What English phrase COULD this be?" Your grammar knowledge helps you decode what your ears miss.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-32-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-ex-3',
        number: '32.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Decode these connected speech phrases. Write what each phrase actually means in full, clear English.',
        subTasks: [
          {
            label: 'a',
            task: '"Djuwanna cuppa tea?"',
            solution: '"Do you want a cup of tea?" — "Do you" contracts to "djuw/djya", "want a" becomes "wanna", and "cup of" becomes "cuppa" (very common in British English).',
          },
          {
            label: 'b',
            task: '"He musta bin workin late."',
            solution: '"He must have been working late." — "Must have" becomes "musta", and "been" reduces to "bin" in fast speech.',
          },
          {
            label: 'c',
            task: '"I shoulda told ya sooner."',
            solution: '"I should have told you sooner." — "Should have" becomes "shoulda" and "you" becomes "ya" in informal speech.',
          },
          {
            label: 'd',
            task: '"Whereya gonna go fer the holidays?"',
            solution: '"Where are you going to go for the holidays?" — "Where are you" blends to "whereya", "going to" becomes "gonna", and "for" reduces to "fer".',
          },
        ],
        solution: 'Understanding connected speech is like learning to read handwriting — the more you practise, the easier it becomes. Listen to native speakers regularly and you will start to recognise these patterns automatically.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: LISTENING FOR ATTITUDE AND OPINION ==========
    {
      id: 'engelsk-10-32-def-3',
      type: 'definition',
      title: 'Listening for Attitude, Tone, and Opinion',
      content: `Some listening questions ask not just WHAT the speaker says, but HOW they feel about it. This requires listening for attitude and tone.

**How speakers signal their attitude:**

**1. Tone of voice**
- **Enthusiastic:** Higher pitch, faster pace, emphasis on positive words
- **Sarcastic:** Flat or exaggerated tone, emphasis on unexpected words ("Oh, that's GREAT" when they mean the opposite)
- **Serious:** Lower pitch, slower pace, measured delivery
- **Uncertain:** Rising intonation, hesitations, hedging language

**2. Hedging language (signals uncertainty or politeness)**
- "I think...", "I suppose...", "It seems to me..."
- "Perhaps...", "I am not entirely sure, but..."
- "It could be argued that..."

**3. Intensifiers (signal strong feelings)**
- "Absolutely", "definitely", "without a doubt" (strong positive)
- "Honestly", "frankly", "to be perfectly honest" (signals strong opinion coming)
- "I am afraid...", "unfortunately" (signals negative news)

**4. Discourse markers (signal the speaker's purpose)**
- "Actually..." (correcting a previous idea)
- "To be fair..." (acknowledging the other side)
- "The thing is..." (introducing the real point)
- "Mind you..." (adding a qualification)
- "Having said that..." (about to contradict themselves)

**Exam tip:** When a question asks "What is the speaker's attitude towards...?", listen for:
- The words they EMPHASISE
- Whether their tone is positive, negative, or neutral
- Whether they use hedging language (uncertain) or intensifiers (certain)
- Whether they agree or disagree with the topic`,
    },

    // ========== EKSEMPEL: IDENTIFYING SPEAKER ATTITUDE ==========
    {
      id: 'engelsk-10-32-example-3',
      type: 'example',
      title: 'Example: Reading Speaker Attitude from Language Choices',
      problem: `Two speakers are discussing online learning. Based on their language, identify each speaker's attitude.

Speaker A: "Honestly, I think online learning has been a complete game-changer. Students can learn at their own pace, access resources from anywhere, and the flexibility is just incredible."

Speaker B: "Well, I suppose online learning has some benefits. But to be perfectly honest, I am not convinced it can replace face-to-face teaching. The thing is, students need human connection, and I am afraid that is something a screen simply cannot provide."`,
      solution: `**Speaker A's attitude: Strongly positive / enthusiastic**
- Signal words: "Honestly" (strong opinion incoming), "complete game-changer" (intensifier + positive metaphor), "just incredible" (intensifier)
- No hedging language — speaks with certainty
- Lists multiple benefits without acknowledging drawbacks
- Language is confident and decisive

**Speaker B's attitude: Sceptical / cautious**
- Hedging: "I suppose" (not fully convinced), "I am not convinced" (directly states doubt)
- Discourse markers: "Well" (hesitation), "to be perfectly honest" (about to disagree), "The thing is" (introducing the real objection), "I am afraid" (signalling a negative point)
- Acknowledges benefits ("some benefits") before disagreeing — diplomatic but firm
- Core concern is clearly stated: human connection cannot be replaced by screens

**How this might appear as an exam question:**
Q: "What is Speaker B's attitude towards online learning?"
a) Completely opposed to it ← Too extreme
b) Cautiously sceptical — sees some value but has serious concerns ← CORRECT
c) Neutral — does not have a strong opinion ← Wrong — clearly has opinions
d) Enthusiastic but wants improvements ← Wrong — not enthusiastic`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-32-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-ex-4',
        number: '32.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A speaker says: "Well, I suppose some people might argue that fast food is convenient, but frankly, I think the health consequences are devastating and we are not taking them seriously enough." What is the speaker\'s attitude?',
        options: [
          {
            id: 'a',
            text: 'Strongly critical of fast food, with serious concerns about health consequences',
            isCorrect: true,
            feedback: 'Correct! The speaker uses "frankly" (strong opinion marker), "devastating" (intensifier), and "not taking them seriously enough" (criticism of inaction). The hedging at the start ("I suppose some people might argue") only acknowledges the opposing view before dismissing it.',
          },
          {
            id: 'b',
            text: 'Neutral — presenting both sides of the argument equally',
            isCorrect: false,
            feedback: 'Incorrect. The speaker briefly mentions the convenience argument but clearly disagrees. Words like "frankly" and "devastating" show strong negative feelings about fast food.',
          },
          {
            id: 'c',
            text: 'Uncertain about whether fast food is harmful',
            isCorrect: false,
            feedback: 'Incorrect. The speaker is not uncertain at all — "devastating" and "not taking them seriously enough" express very strong, clear views.',
          },
          {
            id: 'd',
            text: 'Supportive of fast food despite some health concerns',
            isCorrect: false,
            feedback: 'Incorrect. The speaker acknowledges convenience but is clearly against fast food. The word "but" signals a contrast, and everything after it is strongly negative.',
          },
        ],
        solution: 'Pay attention to discourse markers like "frankly" and "but" — they signal the speaker\'s true feelings. The structure "I suppose X, but frankly Y" means the speaker disagrees with X and believes Y.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-32-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-ex-5',
        number: '32.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match each discourse marker with the attitude or function it signals.',
        subTasks: [
          {
            label: 'a',
            task: '"Actually..."',
            solution: 'Signals a correction — the speaker is about to contradict something previously said or expected. Example: "Actually, the research shows the opposite."',
            multipleChoiceOptions: ['Correcting a previous idea', 'Adding extra information', 'Expressing strong agreement', 'Introducing a conclusion'],
          },
          {
            label: 'b',
            task: '"To be fair..."',
            solution: 'Signals acknowledgement of the other side — the speaker is about to concede a point before continuing their argument. Example: "To be fair, the government has made some effort."',
            multipleChoiceOptions: ['Acknowledging the other side', 'Expressing disagreement', 'Showing enthusiasm', 'Changing the subject'],
          },
          {
            label: 'c',
            task: '"The thing is..."',
            solution: 'Signals the speaker is about to introduce their main point or the core of the problem. Often used to redirect the conversation to what really matters.',
            multipleChoiceOptions: ['Introducing the real/main point', 'Expressing uncertainty', 'Giving an example', 'Concluding a discussion'],
          },
          {
            label: 'd',
            task: '"Having said that..."',
            solution: 'Signals a contradiction or qualification — the speaker is about to partially reverse or qualify what they just said. Example: "I love the city. Having said that, the noise can be exhausting."',
            multipleChoiceOptions: ['About to contradict or qualify', 'Expressing agreement', 'Adding supporting evidence', 'Starting a new topic'],
          },
        ],
        solution: 'Discourse markers are like road signs in a conversation — they tell you where the speaker is headed. Learning to recognise them helps you predict what comes next and understand the speaker\'s true attitude.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-32-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-ex-6',
        number: '32.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Create a personal listening practice plan. Based on your current skills and interests, design a one-week plan to improve your listening comprehension.',
        subTasks: [
          {
            label: 'a',
            task: 'Choose 3 English-language podcasts, YouTube channels, or TV series you could listen to regularly. Explain why each would be useful.',
            solution: 'Good choices expose you to different accents, topics, and speaking speeds. Examples: BBC News (British accent, formal), a TED Talk channel (varied accents, academic), a favourite Netflix series with English audio (casual, fast speech).',
          },
          {
            label: 'b',
            task: 'For each day of the week, plan a 15-20 minute listening activity. Vary the difficulty and type.',
            solution: 'Example plan: Monday — podcast with English subtitles. Tuesday — news clip, take notes. Wednesday — watch a scene from a film without subtitles, then with. Thursday — listen to a TED Talk and summarise the main points. Friday — watch YouTube in an unfamiliar accent. Weekend — listen to music and look up lyrics.',
          },
        ],
        hints: [
          'Start with content you enjoy — you will stick with it longer',
          'Gradually reduce your reliance on subtitles',
          'Mix familiar accents with less familiar ones',
          'Alternate between focused listening (note-taking) and casual listening (enjoyment)',
        ],
        solution: 'Consistent daily practice is more effective than occasional long sessions. Even 15 minutes of focused English listening per day will significantly improve your skills over a few weeks.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-32-summary',
      type: 'text',
      content: `## Summary: Becoming a Better Listener

**The three phases of active listening:**
1. **Before:** Read questions, predict content, identify key words
2. **During:** Listen for gist first, then details. Take brief keyword notes.
3. **After:** Answer immediately, use notes, trust your first instinct

**Dealing with accents and connected speech:**
- Expose yourself to different accents regularly (films, podcasts, YouTube)
- Learn common connected speech patterns ("gonna", "wanna", "shoulda")
- Use context to fill in words you miss — you do not need to catch every word

**Listening for attitude:**
- Tone of voice tells you HOW the speaker feels
- Discourse markers ("actually", "to be fair", "the thing is") signal the speaker's purpose
- Hedging language = uncertainty; intensifiers = strong feelings

**Daily practice tips:**
- Listen to 15-20 minutes of English content every day
- Vary your sources: news, podcasts, films, music, YouTube
- Start with subtitles, then gradually remove them
- Practise note-taking while listening to build your working memory`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-32-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-ex-7',
        number: '32.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Active listening challenge: Choose a 3-5 minute English-language video (news clip, TED Talk, or podcast segment). Complete the following tasks.',
        subTasks: [
          {
            label: 'a',
            task: 'Before listening: Write down what you predict the video will be about based on the title. List 5 vocabulary words you expect to hear.',
            solution: 'Strong predictions are specific and based on the title/topic. The vocabulary words should be relevant to the subject matter, not random English words.',
          },
          {
            label: 'b',
            task: 'During first listen: Take keyword notes. After the first listen, write a 2-3 sentence summary of the main idea.',
            solution: 'The summary should capture the central argument or topic, not just individual details. Focus on the "so what" — why does this topic matter?',
          },
          {
            label: 'c',
            task: 'During second listen: Note 3 specific details you missed the first time. Write down any words or phrases you did not understand and try to guess their meaning from context.',
            solution: 'The second listen typically reveals details like numbers, names, and nuances that were missed on the first pass. Guessing meaning from context is a crucial listening skill.',
          },
          {
            label: 'd',
            task: 'After listening: Write 3 questions that an examiner might ask about this audio clip. Then answer your own questions.',
            solution: 'Good questions test comprehension at different levels: factual (what did the speaker say?), inferential (what did the speaker imply?), and evaluative (do you agree with the speaker?).',
          },
        ],
        hints: [
          'Choose a video on a topic that interests you — engagement helps comprehension',
          'Do not use subtitles for this exercise',
          'Time yourself: allow 3 minutes for each phase',
        ],
        solution: 'This exercise mirrors the actual exam experience: predicting, listening, noting, and responding. Practise it regularly with different types of audio to build your listening confidence and skill.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-32-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-32-ex-8',
        number: '32.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Accent exposure challenge: Listen to short clips (1-2 minutes each) from three different English accents and compare the experience.',
        subTasks: [
          {
            label: 'a',
            task: 'Listen to a clip of British English (e.g., BBC News). Note three features of the accent that you notice.',
            solution: 'Features might include: non-rhotic "r" (car = "cah"), clear "t" pronunciation, specific vowel sounds (e.g., "bath" with a long "a"). Students should note how easy or difficult it was to understand.',
          },
          {
            label: 'b',
            task: 'Listen to a clip of American English (e.g., CNN or a popular podcast). Note three differences from British English.',
            solution: 'Differences might include: rhotic "r" (always pronounced), flapped "t" (water = "wadder"), different vowel sounds (e.g., "hot" = "haht"), generally more nasal quality.',
          },
          {
            label: 'c',
            task: 'Listen to a clip of a less familiar accent (Australian, South African, Indian, or Scottish English). What did you find most challenging? What strategies helped you understand?',
            solution: 'Students should reflect honestly on difficulty level and strategies used (context clues, replaying, focusing on key words). Recognising that all accents are equally valid forms of English is an important insight.',
          },
        ],
        hints: [
          'YouTube is an excellent source for different English accents',
          'Listen to each clip twice: once for general understanding, once for accent features',
          'No accent is "better" or "more correct" than another',
        ],
        solution: 'Exposure to different accents is the most effective way to improve your ability to understand them. The more accents you hear, the more flexible your listening becomes. Aim to hear at least 3 different accents per week.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Active listening', definition: 'A deliberate listening process involving preparation, focused attention, note-taking, and reflection.' },
    { term: 'Connected speech', definition: 'The way words blend together in natural spoken English, causing sounds to change, merge, or disappear.' },
    { term: 'Discourse markers', definition: 'Words and phrases that signal the speaker\'s purpose or attitude, such as "actually", "to be fair", and "the thing is".' },
    { term: 'Hedging language', definition: 'Cautious or tentative phrases like "I suppose" or "perhaps" that signal uncertainty or politeness.' },
    { term: 'Gist', definition: 'The main idea or overall meaning of a spoken passage, as opposed to specific details.' },
    { term: 'Intensifiers', definition: 'Words like "absolutely", "definitely", and "frankly" that signal strong feelings or opinions.' },
  ],
};

// ============================================================================
// KAPITTEL 33: Reading Comprehension — Advanced
// ============================================================================

export const CHAPTER_ENGELSK_10_33: TextbookChapter = {
  id: 'engelsk-10-33',
  courseId: 'engelsk-10',
  chapterNumber: '33',
  title: 'Reading Comprehension — Advanced',
  description: 'Develop advanced reading comprehension skills including inference, analysis of literary and non-fiction techniques, synthesis of multiple texts, and strategies for tackling complex exam passages.',
  estimatedMinutes: 85,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'bruke ulike strategier for å forstå og vurdere innholdet i tekster på engelsk',
    'sammenligne og vurdere engelskspråklige kilder kritisk og reflektere over avsenderens formål',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-33-intro',
      type: 'text',
      content: `## Reading Comprehension — Advanced

By 10th grade, you are expected to do more than just understand what a text says. You need to understand what it **means**, what it **does**, and **why** the author made specific choices. This is the difference between basic reading and advanced reading comprehension.

**The three levels of reading:**

| Level | Question | Example |
|-------|----------|---------|
| **Literal** | What does the text say? | "The character walks to school." |
| **Inferential** | What does the text imply? | "The character walks slowly, suggesting reluctance or sadness." |
| **Evaluative** | What do I think about the text? | "The author uses the slow walk as a symbol of the character's resistance to growing up." |

On the exam, most questions target the **inferential** and **evaluative** levels. You will rarely be asked to simply find a fact in the text — instead, you will need to:

- **Infer** meaning that is not directly stated
- **Analyse** how language choices create specific effects
- **Evaluate** the author's argument or perspective
- **Synthesize** ideas from multiple texts
- **Connect** the text to broader themes, cultures, or your own experience

This chapter focuses on the advanced skills that separate good readers from excellent ones.`,
    },

    // ========== DEFINISJON: INFERENCE ==========
    {
      id: 'engelsk-10-33-def-1',
      type: 'definition',
      title: 'Making Inferences — Reading Between the Lines',
      content: `An **inference** is a conclusion you draw based on evidence in the text combined with your own reasoning. The author does not state the meaning directly — you have to figure it out.

**The inference formula:**
**Text evidence + Background knowledge = Inference**

**Example:**
- Text: "Maria put on her coat, grabbed her umbrella, and sighed as she looked out the window."
- Evidence: coat, umbrella, sigh, looking out the window
- Background knowledge: People carry umbrellas when it rains; sighing indicates dissatisfaction
- Inference: It is raining outside, and Maria is unhappy about having to go out in the bad weather.

**Types of inferences you may need to make:**

**1. Character inferences**
What can you tell about a character from their actions, dialogue, and the details the author includes?
- "He straightened his tie three times before entering the room." → He is nervous or wants to make a good impression.

**2. Setting and mood inferences**
What atmosphere does the author create, and what does it suggest?
- "The streetlights flickered and went out one by one." → Something ominous is about to happen; the mood is tense.

**3. Theme inferences**
What larger message or idea is the author exploring?
- A story about a bird escaping its cage might be about freedom, independence, or breaking free from expectations.

**4. Author's purpose inferences**
Why did the author write this, and what effect do they want on the reader?
- An article that uses emotional language and personal stories is trying to persuade, not just inform.

**Key skill:** Always be able to point to SPECIFIC evidence in the text that supports your inference. "I think..." is not enough — you need "I think... because the text says..."`,
    },

    // ========== EKSEMPEL: MAKING INFERENCES ==========
    {
      id: 'engelsk-10-33-example-1',
      type: 'example',
      title: 'Example: Making and Supporting Inferences',
      problem: `Read this passage and make three inferences about the character, the setting, and the mood.

"Jake pressed his back against the cold brick wall, his breath coming in short, ragged bursts. Somewhere behind him, footsteps echoed — steady, unhurried, confident. He fumbled in his pocket for his phone, but his fingers, slick with sweat, could not grip it. The alley stretched ahead of him, dark and narrow, ending in a chain-link fence topped with barbed wire."`,
      solution: `**Inference 1: Character (Jake is frightened and in danger)**
- Evidence: "breath coming in short, ragged bursts" (physical signs of fear), "fumbled in his pocket" (panic), "fingers slick with sweat" (anxiety)
- Inference: Jake is terrified and possibly being pursued. His physical responses (rapid breathing, sweating, fumbling) indicate genuine fear, not just nervousness.

**Inference 2: Setting (An urban environment, nighttime)**
- Evidence: "cold brick wall" (urban setting), "alley... dark and narrow" (nighttime, confined space), "chain-link fence topped with barbed wire" (industrial or neglected area)
- Inference: The scene takes place at night in a run-down urban area. The barbed wire suggests this is not a friendly neighbourhood — it is a place designed to keep people in or out.

**Inference 3: Mood (Tense and threatening)**
- Evidence: The footsteps are "steady, unhurried, confident" (the pursuer is in control, not rushed — more menacing than panicked running), the alley is a dead end (no escape)
- Inference: The mood is one of mounting dread. The contrast between Jake's panic and the pursuer's calm confidence makes the situation feel hopeless. The dead-end alley reinforces the idea that Jake is trapped.

**Important technique:** Notice how each inference starts with evidence from the text and then explains what it MEANS. This is the "evidence + reasoning" approach that examiners want to see.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-33-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-ex-1',
        number: '33.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Read: "The teacher placed the test face-down on each desk without making eye contact with any student." What can you infer about the test results?',
        options: [
          {
            id: 'a',
            text: 'The results are probably poor — the teacher avoids eye contact because delivering bad news is uncomfortable',
            isCorrect: true,
            feedback: 'Correct! Avoiding eye contact is a common behaviour when people feel uncomfortable delivering bad news. Combined with placing tests face-down (hiding the results), this suggests disappointing grades.',
          },
          {
            id: 'b',
            text: 'The teacher is in a hurry and does not have time to talk to students',
            isCorrect: false,
            feedback: 'Possible but less likely. The emphasis on "without making eye contact" suggests emotional discomfort rather than time pressure. The face-down placement also signals that the content is being hidden.',
          },
          {
            id: 'c',
            text: 'The students performed extremely well and the teacher wants to surprise them',
            isCorrect: false,
            feedback: 'Unlikely. If results were excellent, the teacher would typically be enthusiastic, not avoiding eye contact. Positive surprises are usually delivered with energy, not avoidance.',
          },
          {
            id: 'd',
            text: 'The teacher has not looked at the test results yet',
            isCorrect: false,
            feedback: 'This does not explain the avoidance of eye contact. If the teacher had not seen the results, there would be no reason for discomfort.',
          },
        ],
        solution: 'Good inference requires combining textual evidence (face-down papers, no eye contact) with real-world knowledge (people avoid eye contact when uncomfortable). The strongest inference is always the one with the most supporting evidence.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-33-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-ex-2',
        number: '33.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Read each passage and make an inference. State your inference clearly, then quote the specific evidence that supports it.',
        subTasks: [
          {
            label: 'a',
            task: '"The old man sat on the park bench every Tuesday at 3 p.m., always on the same side, always leaving the other half empty. On the seat beside him, he placed a single red rose."',
            solution: 'Inference: The old man is mourning or remembering someone who used to sit beside him, possibly a deceased spouse. Evidence: He always sits on the "same side" (habit from when someone sat beside him), leaves the other half "empty" (the person is gone), and places a "single red rose" (a symbol of love). The ritualistic nature (every Tuesday, same time, same place) suggests this is an act of remembrance.',
          },
          {
            label: 'b',
            task: '"She smiled at the congratulations, held the trophy high for the photographs, and said all the right things in the interview. Later, in the car park, she sat in her car for twenty minutes before starting the engine."',
            solution: 'Inference: Despite appearing happy publicly, the character is emotionally exhausted or conflicted about her success. Evidence: She "said all the right things" (performing, not genuine), and sitting in the car for "twenty minutes" after performing happiness suggests she needs time to decompress or process emotions she could not show publicly. The contrast between the public and private moments reveals that her outward success masks an inner struggle.',
          },
        ],
        hints: [
          'Look for details that seem deliberately placed by the author',
          'Ask: "Why did the author include this specific detail?"',
          'Your inference should explain something the text implies but does not state directly',
        ],
        solution: 'The best inferences are supported by multiple pieces of evidence from the text. If you can only point to one detail, your inference may be too much of a stretch.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: ANALYSING LITERARY TECHNIQUES ==========
    {
      id: 'engelsk-10-33-def-2',
      type: 'definition',
      title: 'Analysing Literary Techniques — The WHAT-HOW-WHY Method',
      content: `When a question asks you to analyse a literary technique, you need to do more than just identify it. Use the **WHAT-HOW-WHY** method:

**WHAT:** Name the technique
**HOW:** Explain how it works in the text (quote it)
**WHY:** Explain the effect — what does it make the reader think, feel, or understand?

**Essential literary techniques for 10th grade:**

| Technique | Definition | Example |
|-----------|-----------|---------|
| **Metaphor** | A direct comparison without "like" or "as" | "Time is a thief" |
| **Simile** | A comparison using "like" or "as" | "Her smile was like sunshine" |
| **Personification** | Giving human qualities to non-human things | "The wind whispered secrets" |
| **Imagery** | Language that appeals to the five senses | "The sharp scent of pine filled the air" |
| **Symbolism** | An object or image represents a larger idea | A broken mirror symbolising a shattered identity |
| **Foreshadowing** | Hints about what will happen later | "She did not know it was the last time she would see him" |
| **Irony** | When reality contradicts expectations | A fire station burning down |
| **Juxtaposition** | Placing contrasting ideas side by side | Rich neighbourhood next to a slum |
| **Repetition** | Repeating words/phrases for emphasis | "Never again. Never again. Never again." |
| **Alliteration** | Repeated initial consonant sounds | "Peter Piper picked a peck" |

**The crucial difference between identifying and analysing:**
- Identifying: "The author uses a metaphor."
- Analysing: "The metaphor 'time is a thief' suggests that time steals our youth and opportunities without our consent, creating a sense of loss and urgency."`,
    },

    // ========== EKSEMPEL: WHAT-HOW-WHY ANALYSIS ==========
    {
      id: 'engelsk-10-33-example-2',
      type: 'example',
      title: 'Example: WHAT-HOW-WHY Analysis of Literary Techniques',
      problem: `Analyse the literary techniques in this passage:
"The city never slept. Its neon arteries pulsed with light long after midnight, feeding a restless body of steel and glass. But beneath the glittering surface, in the forgotten veins of alleyways and underpasses, a different city breathed — slow, quiet, and invisible."`,
      solution: `**Technique 1: Extended metaphor (city as a body)**
- **WHAT:** The entire passage uses an extended metaphor comparing the city to a living body.
- **HOW:** "Neon arteries" = streets/roads, "pulsed with light" = traffic/energy, "restless body of steel and glass" = buildings, "forgotten veins" = back streets. The city is described as if it has a circulatory system.
- **WHY:** This metaphor makes the city feel alive and organic rather than cold and mechanical. It suggests the city has its own life force, independent of the people in it. The body metaphor also sets up the contrast between the "surface" (visible, wealthy) and the "veins" (hidden, forgotten).

**Technique 2: Juxtaposition**
- **WHAT:** The passage places two contrasting images side by side.
- **HOW:** The "glittering surface" with "neon" and "light" is contrasted with the "forgotten veins" that are "slow, quiet, and invisible."
- **WHY:** This juxtaposition highlights social inequality. The bright, visible city represents wealth and energy, while the hidden city represents poverty and neglect. By describing both in the same passage, the author forces the reader to see the city as containing both realities simultaneously.

**Technique 3: Personification**
- **WHAT:** The city "never slept" and the hidden city "breathed."
- **HOW:** Sleep and breathing are human actions attributed to an urban landscape.
- **WHY:** "Never slept" suggests relentless activity and possibly exhaustion. "Breathed — slow, quiet" creates a sense of hidden life, patience, and endurance. The different types of personification for each "city" reinforce their contrasting characters.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-33-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-ex-3',
        number: '33.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyse the literary technique in each sentence using the WHAT-HOW-WHY method.',
        subTasks: [
          {
            label: 'a',
            task: '"Her laughter was a medicine that healed every wound in the room."',
            solution: 'WHAT: Metaphor. HOW: Laughter is compared to medicine — it "healed" the emotional wounds of those present. WHY: This suggests her laughter has a transformative, restorative power. The word "medicine" implies that the people in the room were suffering, and her presence provided relief. It also suggests warmth and generosity.',
          },
          {
            label: 'b',
            task: '"The soldiers marched forward. Forward. Forward. Into the mouth of the valley."',
            solution: 'WHAT: Repetition and metaphor. HOW: "Forward" is repeated three times, and the valley is described as having a "mouth." WHY: The repetition creates a relentless, mechanical rhythm, suggesting the soldiers have no choice but to continue. The "mouth of the valley" personifies the landscape as a predator about to swallow them, foreshadowing danger or death.',
          },
          {
            label: 'c',
            task: '"She wore her confidence like armour, shining and impenetrable — until someone found the gap."',
            solution: 'WHAT: Simile and foreshadowing. HOW: Confidence is compared to armour using "like", described as "shining and impenetrable." The phrase "until someone found the gap" hints at vulnerability. WHY: The armour simile suggests confidence is a protective shell rather than a genuine inner state. The word "gap" reveals that this confidence can be broken, creating tension and foreshadowing a moment when someone will see through her defences.',
          },
        ],
        hints: [
          'WHAT: Name the technique in one sentence',
          'HOW: Quote the specific words and explain the comparison or pattern',
          'WHY: Explain the emotional or thematic EFFECT on the reader',
        ],
        solution: 'The WHY section is always the most important and the most often neglected. Examiners want to see that you understand the EFFECT of a technique, not just that you can identify it.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: READING NON-FICTION CRITICALLY ==========
    {
      id: 'engelsk-10-33-def-3',
      type: 'definition',
      title: 'Reading Non-Fiction Critically — Beyond the Surface',
      content: `Non-fiction texts (articles, speeches, opinion pieces, reports) require a different set of reading skills than fiction. You need to evaluate the argument, not just understand it.

**Questions to ask when reading non-fiction:**

**1. What is the author's PURPOSE?**
- To inform? (neutral, factual language)
- To persuade? (emotional language, one-sided arguments)
- To entertain? (humour, storytelling)
- To provoke? (controversial claims, strong language)

**2. What is the author's BIAS?**
- Every author has a perspective. What is theirs?
- What information might they be leaving out?
- Who benefits from this argument?

**3. How does the author build their ARGUMENT?**
- **Logos** (logic) — facts, statistics, research, logical reasoning
- **Pathos** (emotion) — stories, emotional language, vivid imagery
- **Ethos** (credibility) — expert opinions, credentials, trustworthiness

**4. What EVIDENCE does the author use?**
- Are statistics from reliable sources?
- Are examples representative or cherry-picked?
- Is the evidence current or outdated?

**5. What RHETORICAL STRATEGIES are used?**
- Rhetorical questions — to make the reader think
- Anecdotes — to create personal connection
- Inclusive language ("we", "us") — to build solidarity
- Emotive language — to provoke an emotional response
- Expert testimony — to add authority

**Red flags in non-fiction:**
- Sweeping generalisations ("Everyone knows...", "All teenagers...")
- False dichotomies ("You are either for us or against us")
- Appeals to fear ("If we do not act, disaster will follow")
- Ad hominem attacks (attacking the person, not the argument)`,
    },

    // ========== EKSEMPEL: CRITICAL READING OF NON-FICTION ==========
    {
      id: 'engelsk-10-33-example-3',
      type: 'example',
      title: 'Example: Critically Analysing a Non-Fiction Passage',
      problem: `Analyse this extract from an opinion article:
"Every parent knows that too much screen time is destroying our children's ability to concentrate, to empathise, and to simply be bored — which, experts agree, is essential for creativity. A recent Stanford study found that children who spend more than two hours daily on screens show a 30% decline in attention span. We must act now, before an entire generation loses the ability to think deeply."`,
      solution: `**Purpose:** To persuade readers that screen time is harmful and that action is needed.

**Rhetorical strategies used:**

1. **Appeal to authority (Ethos):**
   - "experts agree" — but which experts? No names given.
   - "A recent Stanford study" — Stanford adds credibility, but the study is not named or dated, making it difficult to verify.

2. **Appeal to emotion (Pathos):**
   - "destroying our children's" — the word "destroying" is extreme and emotionally loaded
   - "entire generation loses the ability to think deeply" — creates fear about the future
   - "our children" — inclusive possessive creates solidarity with the reader

3. **Appeal to logic (Logos):**
   - "30% decline in attention span" — a specific statistic, but we should ask: How was attention span measured? What was the sample size? Is correlation being presented as causation?

4. **Bias and missing information:**
   - The article only presents negative effects of screen time — no mention of educational benefits, social connection, or creative uses of technology
   - "Every parent knows" is a sweeping generalisation (not every parent agrees)
   - "We must act now" creates urgency but does not specify what action to take

**Critical evaluation:**
The article uses effective persuasive techniques but is one-sided. A critical reader would note the missing counter-evidence, the unverified statistics, and the emotional manipulation. This does not mean the argument is wrong — but it means we should seek additional sources before forming our opinion.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-33-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-ex-4',
        number: '33.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'An article states: "Scientists have proven that eating chocolate every day improves brain function by 40%." What should a critical reader question about this claim?',
        options: [
          {
            id: 'a',
            text: 'Which scientists? What study? How was "brain function" measured? Was the study peer-reviewed? Who funded it?',
            isCorrect: true,
            feedback: 'Excellent! A critical reader always asks about the source, methodology, and potential bias. "Scientists have proven" is vague, and "40%" sounds precise but is meaningless without context about the study design.',
          },
          {
            id: 'b',
            text: 'Nothing — if scientists have proven it, it must be true',
            isCorrect: false,
            feedback: 'Incorrect. The word "proven" is often misused in media. Science rarely "proves" things absolutely. A critical reader always checks the source and methodology.',
          },
          {
            id: 'c',
            text: 'Only whether 40% is a lot or a little',
            isCorrect: false,
            feedback: 'The percentage is worth questioning, but there are much bigger issues: which scientists, what study, how was the measurement done, and who funded the research? The claim needs much more scrutiny.',
          },
          {
            id: 'd',
            text: 'Whether the article was written by a doctor',
            isCorrect: false,
            feedback: 'The author\'s credentials matter, but the bigger issue is the claim itself. Even a doctor can present misleading statistics. The study design and funding matter more.',
          },
        ],
        solution: 'Critical reading means questioning sources, methodology, and potential bias. Vague appeals to "scientists" without specific citations are a red flag. Always ask: Who? What study? How was it measured? Who paid for it?',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-33-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-ex-5',
        number: '33.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Read the following non-fiction extract and answer the analytical questions below.',
        subTasks: [
          {
            label: 'a',
            task: 'Extract: "In a world obsessed with grades, we have forgotten what education is truly for. We test children relentlessly, ranking and sorting them like products on a shelf, while the skills that actually matter — creativity, empathy, resilience — go unmeasured and unrewarded. Is this really the best we can do for our children?" — Identify the author\'s purpose and the main rhetorical strategies used.',
            solution: 'Purpose: To persuade readers that the current education system is too focused on testing and neglects important human qualities. Strategies: (1) Emotive language: "obsessed", "relentlessly", "products on a shelf" — creates a negative image of the system. (2) Simile: comparing children to "products on a shelf" dehumanises the testing process. (3) Rule of three: "creativity, empathy, resilience" — listing valued qualities. (4) Rhetorical question: "Is this really the best we can do?" — challenges the reader to agree.',
          },
          {
            label: 'b',
            task: 'What bias or perspective does the author reveal? What evidence or counterarguments are missing?',
            solution: 'The author is clearly biased against standardised testing. Missing counterarguments include: tests can motivate students, tests provide objective data for identifying struggling students, some structure is needed for fairness, and many schools DO teach creativity alongside academic content. The author presents testing and human skills as mutually exclusive, which is a false dichotomy.',
          },
          {
            label: 'c',
            task: 'Do you agree or disagree with the author? Write a 4-5 sentence response that acknowledges the strengths of their argument while also identifying its weaknesses.',
            solution: 'A strong response might say: "The author raises valid concerns about over-testing and the narrow definition of success in education. The simile of children as \'products on a shelf\' is powerful and highlights a real dehumanising tendency. However, the argument oversimplifies the issue by presenting testing and holistic education as mutually exclusive. Many schools successfully balance academic rigour with creative development. The author would strengthen their argument by acknowledging this nuance and proposing specific alternatives rather than simply criticising the status quo."',
          },
        ],
        solution: 'Advanced reading comprehension means being able to both appreciate and critique a text. You can agree with an argument while still recognising its weaknesses — and this balanced analysis is exactly what examiners want to see.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-33-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-ex-6',
        number: '33.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the difference between identifying a literary technique and analysing it?',
        options: [
          {
            id: 'a',
            text: 'Identifying names the technique; analysing explains the effect it has on the reader and why the author used it',
            isCorrect: true,
            feedback: 'Correct! Identifying is step one: "The author uses a metaphor." Analysing goes further: "The metaphor creates a sense of... because..." Analysis explains EFFECT and PURPOSE.',
          },
          {
            id: 'b',
            text: 'There is no difference — identifying and analysing mean the same thing',
            isCorrect: false,
            feedback: 'Incorrect. Identifying is recognising WHAT the technique is. Analysing is explaining HOW it works and WHY the author used it. Analysis is much deeper.',
          },
          {
            id: 'c',
            text: 'Identifying requires quoting the text; analysing does not',
            isCorrect: false,
            feedback: 'Actually, both should include evidence from the text. The difference is that analysis goes beyond quotation to explain the significance and effect.',
          },
          {
            id: 'd',
            text: 'Analysing means giving your personal opinion about whether the technique is good or bad',
            isCorrect: false,
            feedback: 'Analysis is not just personal opinion — it is a reasoned explanation of the technique\'s effect. It focuses on what the technique DOES, not whether you like it.',
          },
        ],
        solution: 'The WHAT-HOW-WHY method ensures you always go beyond identification to analysis. WHAT (name the technique), HOW (quote and explain the mechanism), WHY (explain the effect on the reader).',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-33-summary',
      type: 'text',
      content: `## Summary: Advanced Reading Skills

**The three levels of reading:**
- **Literal:** What does the text say? (basic comprehension)
- **Inferential:** What does the text imply? (reading between the lines)
- **Evaluative:** What do I think about the text? (critical analysis)

**Making inferences:**
- Combine text evidence with background knowledge
- Always point to SPECIFIC evidence that supports your inference
- Ask: "Why did the author include this detail?"

**Analysing literary techniques — WHAT-HOW-WHY:**
- **WHAT:** Name the technique
- **HOW:** Quote the text and explain how it works
- **WHY:** Explain the effect on the reader

**Reading non-fiction critically:**
- Identify the author's purpose (inform, persuade, provoke)
- Recognise rhetorical strategies (logos, pathos, ethos)
- Question sources, statistics, and missing counterarguments
- Spot red flags: generalisations, false dichotomies, emotional manipulation

**On the exam:** Most questions are inferential or evaluative. The examiner wants to see that you can think about texts, not just read them.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-33-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-ex-7',
        number: '33.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Read the following literary passage and complete a full analysis.',
        subTasks: [
          {
            label: 'a',
            task: 'Passage: "The garden had been her mother\'s pride — rows of roses in every shade of red, borders of lavender that hummed with bees in summer, a path of white stones that curved like a smile towards the house. Now the roses were skeletal, the lavender grey and brittle, and the stones were scattered like broken teeth. She stood at the gate, key in hand, wondering if gardens could grieve." — Make two inferences about the character and the situation.',
            solution: 'Inference 1: The character\'s mother has died or left. Evidence: the garden "had been" (past tense) her mother\'s pride, and it is now neglected. The character has a "key" suggesting she has been away and is returning. Inference 2: The character feels grief and hesitation. Evidence: she stands "at the gate" rather than going in, and the final question ("wondering if gardens could grieve") projects her own grief onto the garden.',
          },
          {
            label: 'b',
            task: 'Identify and analyse THREE literary techniques using the WHAT-HOW-WHY method.',
            solution: '(1) Juxtaposition: The garden\'s past beauty (roses, lavender humming, white stones) is placed against its current decay (skeletal, grey, broken). This highlights loss and the passage of time. (2) Simile: Stones "curved like a smile" (past) vs. "scattered like broken teeth" (present). The transformation from smile to broken teeth personifies the garden\'s decline and mirrors emotional devastation. (3) Personification: "wondering if gardens could grieve." The character projects human emotion onto the garden, suggesting her own grief is so overwhelming that it colours everything she sees.',
          },
          {
            label: 'c',
            task: 'What theme or themes does this passage explore? Support your answer with evidence.',
            solution: 'The passage explores themes of grief, loss, and the connection between people and places. The garden symbolises the mother — when the mother is gone, the garden dies too. The character\'s hesitation at the gate suggests that returning to a place full of memories is painful. The final question implies that grief extends beyond humans to the spaces and objects we leave behind.',
          },
        ],
        hints: [
          'Look for contrasts between past and present',
          'Pay attention to the specific word choices — why "skeletal"? Why "broken teeth"?',
          'The final sentence is the emotional climax — analyse it carefully',
        ],
        solution: 'A full literary analysis combines inference, technique identification, and thematic interpretation. The best analyses show how all three work together to create meaning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-33-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-33-ex-8',
        number: '33.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Find an English-language opinion article online (from a newspaper like The Guardian, BBC, or New York Times). Complete a critical reading analysis.',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the author\'s thesis (main argument) in one sentence. What is their purpose — to inform, persuade, or provoke?',
            solution: 'The thesis should be stated in the student\'s own words, not just quoted. The purpose should be justified with evidence from the article\'s language and structure.',
          },
          {
            label: 'b',
            task: 'Identify two rhetorical strategies the author uses (logos, pathos, ethos, rhetorical questions, anecdotes, etc.). Quote specific examples and explain their effect.',
            solution: 'Students should quote directly from the article and use the WHAT-HOW-WHY method to explain how each strategy supports the author\'s argument.',
          },
          {
            label: 'c',
            task: 'What is missing from the article? Identify at least one counterargument or perspective that the author does not address.',
            solution: 'This demonstrates the highest level of critical reading — recognising what a text does NOT say. Students should identify a specific counterargument and explain why its absence weakens the article\'s overall credibility.',
          },
        ],
        hints: [
          'Choose an article on a topic you care about — analysis is easier when you are engaged',
          'Read the article twice: once for understanding, once for analysis',
          'Consider: Who is the intended audience? How does this affect the author\'s choices?',
        ],
        solution: 'Critical reading of real-world texts is the ultimate application of the skills in this chapter. By analysing published articles, you practise the same skills tested on the exam while also becoming a more informed and thoughtful reader in your daily life.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Inference', definition: 'A conclusion drawn from text evidence combined with background knowledge — reading between the lines.' },
    { term: 'WHAT-HOW-WHY', definition: 'An analysis method: name the technique (WHAT), quote and explain it (HOW), and explain its effect (WHY).' },
    { term: 'Evaluative reading', definition: 'The highest level of comprehension — forming a critical opinion about a text based on evidence and reasoning.' },
    { term: 'Logos', definition: 'Persuasion through logic — facts, statistics, and rational arguments.' },
    { term: 'Pathos', definition: 'Persuasion through emotion — stories, vivid language, and emotional appeals.' },
    { term: 'Ethos', definition: 'Persuasion through credibility — expert opinions, authority, and trustworthiness.' },
  ],
};

// ============================================================================
// KAPITTEL 34: Exam Strategies and Time Management
// ============================================================================

export const CHAPTER_ENGELSK_10_34: TextbookChapter = {
  id: 'engelsk-10-34',
  courseId: 'engelsk-10',
  chapterNumber: '34',
  title: 'Exam Strategies and Time Management',
  description: 'Learn practical strategies for managing your time, reducing stress, and performing at your best during the English exam, including how to read tasks carefully, allocate time, and review your work.',
  estimatedMinutes: 70,
  competenceGoals: [
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'planlegge, revidere og bearbeide egne tekster basert på tilbakemelding',
    'uttrykke seg med flyt og sammenheng tilpasset formål og situasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-34-intro',
      type: 'text',
      content: `## Exam Strategies and Time Management

You have spent months learning English — vocabulary, grammar, reading, writing, listening, and speaking. Now the exam is approaching, and the challenge is not just what you know, but how well you can demonstrate it under time pressure.

Many students who know their subject well still underperform on exams because they:
- Run out of time on the long-answer section
- Spend too long on one question and rush through others
- Do not read the task carefully and answer the wrong question
- Forget to proofread their work
- Let nerves take over and freeze

This chapter is your **exam survival guide**. It will not teach you new English — it will teach you how to use everything you already know as effectively as possible on exam day.

**The written English exam at a glance:**
- **Duration:** Typically 5 hours
- **Preparation day:** You receive the theme and preparatory materials the day before
- **Exam day:** You choose from several tasks and write your responses
- **Allowed aids:** Dictionary (printed), your own preparatory notes
- **Structure:** Usually includes both short-answer tasks and one or more long-answer tasks

**The key principle:** Time spent planning is never wasted. The students who perform best on exams are not always the ones who know the most — they are the ones who manage their time and energy most effectively.`,
    },

    // ========== DEFINISJON: TIME MANAGEMENT FRAMEWORK ==========
    {
      id: 'engelsk-10-34-def-1',
      type: 'definition',
      title: 'The 5-Hour Exam — A Time Management Framework',
      content: `Five hours sounds like a lot, but time disappears quickly on exam day. Here is a proven framework for managing your time:

**Phase 1: Orientation (15-20 minutes)**
- Read ALL tasks carefully — every single word
- Identify task types (short answer, long answer, creative writing)
- Decide which long-answer task you will choose
- Note the word counts or length requirements for each task
- Estimate how many marks each section is worth

**Phase 2: Short Answers (60-90 minutes)**
- Answer the short-answer questions first (they are usually quicker)
- Spend 5-10 minutes per short answer
- Use PEE method (Point, Evidence, Explanation)
- Do not write more than asked — if it says "3-5 sentences," write 3-5 sentences

**Phase 3: Long Answer Planning (15-20 minutes)**
- Brainstorm ideas for your chosen task
- Select your best 3-4 ideas
- Create a quick outline (thesis, main points, conclusion)
- Decide on your opening hook and closing statement

**Phase 4: Long Answer Writing (120-150 minutes)**
- Follow your plan, but remain flexible
- Write the introduction and conclusion with extra care — these make the strongest impression
- Do not stop to perfect every sentence — get the full text written first
- Leave a few lines between paragraphs in case you want to add something later

**Phase 5: Revision and Proofreading (30-40 minutes)**
- Read through EVERYTHING you have written
- Check for the common errors you know you tend to make
- Verify that you have answered every question
- Make sure your long answer has a clear introduction, body, and conclusion
- Check spelling of words you are unsure about using your dictionary

**Time allocation summary:**

| Phase | Time | Purpose |
|-------|------|---------|
| Orientation | 15-20 min | Read, choose, plan |
| Short answers | 60-90 min | Answer all short questions |
| Long answer planning | 15-20 min | Brainstorm and outline |
| Long answer writing | 120-150 min | Draft complete text |
| Revision | 30-40 min | Proofread and improve |
| **Total** | **~300 min (5 hours)** | |`,
    },

    // ========== EKSEMPEL: READING TASKS CAREFULLY ==========
    {
      id: 'engelsk-10-34-example-1',
      type: 'example',
      title: 'Example: How Misreading a Task Costs Marks',
      problem: `Look at this exam task and identify the key requirements a student must address.

Task: "The preparatory text discusses the concept of the American Dream. Write an article for a youth magazine in which you discuss whether the American Dream is still achievable for young people today. Use examples from the preparatory material AND at least one example from your own knowledge or experience. Your article should be 300-400 words."`,
      solution: `**Key requirements identified:**

1. **Text type:** Article (not an essay — requires headline, possibly a byline, engaging tone appropriate for a magazine)
2. **Audience:** Youth magazine readers (young people — use accessible language, relatable examples)
3. **Topic:** Whether the American Dream is still achievable for young people TODAY (not a historical overview — focus on the present)
4. **Task word:** "Discuss" (explore multiple perspectives — not just argue one side)
5. **Sources required:**
   - Examples from the preparatory material (MUST reference specific content from the text you received)
   - At least ONE example from your own knowledge or experience
6. **Length:** 300-400 words (not 200, not 500 — stay within the range)

**Common mistakes students make with this task:**

| Mistake | Why it loses marks |
|---------|-------------------|
| Writing an essay instead of an article | Wrong text type — no headline, wrong structure |
| Only discussing the historical American Dream | Task says "today" — must focus on the present |
| Not using the preparatory material | Explicitly required — failing to reference it shows you did not engage with the material |
| Only giving one perspective | "Discuss" means explore different viewpoints |
| Writing 200 or 600 words | Outside the required range — shows poor task management |
| Forgetting personal examples | The task requires "your own knowledge or experience" |

**Pro tip:** Underline the key words in every task before you begin writing. This takes 30 seconds and can prevent a major mistake.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-34-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-ex-1',
        number: '34.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'On a 5-hour written exam, approximately how much time should you spend on planning and revision combined?',
        options: [
          {
            id: 'a',
            text: '45-60 minutes (about 15-20% of the total time)',
            isCorrect: true,
            feedback: 'Correct! Planning (15-20 minutes for reading tasks, 15-20 for outline) plus revision (30-40 minutes) totals roughly 45-60 minutes. This is one of the best investments of time you can make.',
          },
          {
            id: 'b',
            text: '10-15 minutes (just a quick glance at the tasks and a quick proofread)',
            isCorrect: false,
            feedback: 'This is far too little. Rushing into writing without a plan leads to unfocused texts, and skipping proofreading means preventable errors remain in your work.',
          },
          {
            id: 'c',
            text: '2-3 hours (most of the exam should be planning)',
            isCorrect: false,
            feedback: 'This is too much time on planning. You need substantial time for actually writing. About 15-20% of your time on planning and revision is the right balance.',
          },
          {
            id: 'd',
            text: '0 minutes (use all the time for writing)',
            isCorrect: false,
            feedback: 'This approach almost always leads to poorly structured texts and avoidable errors. Planning and revision are essential parts of the writing process.',
          },
        ],
        solution: 'Planning and revision account for roughly 45-60 minutes of a 5-hour exam. This time dramatically improves the quality of your writing and catches errors that could cost you marks.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-34-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-ex-2',
        number: '34.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Read each exam task below and identify ALL the key requirements (text type, audience, topic, task word, sources, length). Then list one common mistake a student might make.',
        subTasks: [
          {
            label: 'a',
            task: '"Write a formal letter to the school board arguing that your school should offer more outdoor activities. Use at least two arguments supported by evidence. Your letter should be 200-300 words."',
            solution: 'Requirements: (1) Text type: Formal letter (correct format with addresses, greeting, sign-off). (2) Audience: School board (formal, respectful tone). (3) Topic: More outdoor activities. (4) Task word: "Arguing" (persuasive, take a position). (5) Sources: At least two evidence-based arguments. (6) Length: 200-300 words. Common mistake: Writing an essay instead of a letter, or using informal language with the school board.',
          },
          {
            label: 'b',
            task: '"Based on the two texts you have read, compare how the authors present the theme of identity. In your answer, refer to specific language choices in both texts. Write 150-200 words."',
            solution: 'Requirements: (1) Text type: Analytical comparison (not an essay or article). (2) Task word: "Compare" (must discuss both similarities and differences). (3) Topic: How identity is presented. (4) Sources: BOTH texts must be referenced equally. (5) Focus: Specific LANGUAGE choices (not just themes or plot). (6) Length: 150-200 words. Common mistake: Only discussing one text, or discussing theme without analysing language.',
          },
        ],
        hints: [
          'Underline every key word in the task',
          'Count how many requirements there are — make sure you address each one',
          'Pay special attention to task words: "discuss", "argue", "compare", "explain"',
        ],
        solution: 'Careful task reading is the single most important exam strategy. Many students lose marks not because they write badly, but because they answer a different question from the one that was asked.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: THE PROOFREADING CHECKLIST ==========
    {
      id: 'engelsk-10-34-def-2',
      type: 'definition',
      title: 'The Proofreading Checklist — Finding and Fixing Errors',
      content: `Proofreading is not just reading through your text once and hoping for the best. It is a systematic process. Use this checklist in the final 30 minutes of the exam.

**Round 1: Content and Structure (10 minutes)**
- Have I answered the question that was asked?
- Does my text have a clear introduction, body, and conclusion?
- Is every paragraph about ONE main idea?
- Do I use transition words between paragraphs?
- Have I included everything the task requires (quotes, examples, personal experience)?

**Round 2: Grammar and Spelling (10 minutes)**
Check specifically for these common errors:

| Error type | What to look for |
|-----------|-----------------|
| **Subject-verb agreement** | "He don't" → "He doesn't" |
| **Tense consistency** | Don't switch between past and present randomly |
| **Articles** | "I like the nature" → "I like nature" |
| **Prepositions** | "good in" → "good at", "interested on" → "interested in" |
| **Spelling** | Their/there/they're, your/you're, its/it's |
| **Word order** | Norwegian word order in English sentences |
| **Run-on sentences** | Sentences that are too long — split them |

**Round 3: Style and Vocabulary (10 minutes)**
- Have I used varied vocabulary? (not the same word five times)
- Can I replace any simple words with more precise ones? (good → excellent, beneficial, remarkable)
- Are my sentences varied in length? (mix short punchy sentences with longer complex ones)
- Does the text sound like ME? (authentic voice, not a robot)

**Pro tip: Read backwards.**
To catch spelling errors, read your text backwards — from the last sentence to the first. This forces your brain to see each sentence individually, rather than filling in what it expects to see.`,
    },

    // ========== EKSEMPEL: PROOFREADING IN PRACTICE ==========
    {
      id: 'engelsk-10-34-example-2',
      type: 'example',
      title: 'Example: Proofreading a Student Text',
      problem: `Read this student's exam text and identify all the errors. Then show the corrected version.

"In todays society social media have became a big part of our lifes. Many peoples use social media every day, and it affect them in diffrent ways. Some peoples think that social media is good because you can communicate with friends, but other peoples think it are bad because of cyberbullying. I use to scroll through Instagram everyday and it made me feel bad about my self."`,
      solution: `**Errors found and corrections:**

| Error | Type | Correction |
|-------|------|-----------|
| "todays" | Apostrophe missing | "today's" |
| "have became" | Tense (present perfect) | "has become" |
| "lifes" | Irregular plural | "lives" |
| "peoples" (x3) | Incorrect plural | "people" (already plural) |
| "it affect" | Subject-verb agreement | "it affects" |
| "diffrent" | Spelling | "different" |
| "it are bad" | Subject-verb agreement | "it is bad" |
| "I use to" | Direct translation from Norwegian | "I used to" |
| "everyday" | Wrong form (adverb vs. adjective) | "every day" |
| "my self" | Spelling | "myself" |
| Missing comma | Punctuation | After "In today's society," |

**Corrected version:**
"In today's society, social media has become a big part of our lives. Many people use social media every day, and it affects them in different ways. Some people think that social media is good because you can communicate with friends, but other people think it is bad because of cyberbullying. I used to scroll through Instagram every day, and it made me feel bad about myself."

**Improved version (better vocabulary and style):**
"In today's society, social media has become an integral part of our daily lives. Millions of people engage with platforms like Instagram, TikTok, and Snapchat every day, and the effects are far from straightforward. While social media offers valuable opportunities for connection and self-expression, it also exposes users to cyberbullying, unrealistic beauty standards, and addictive content. I personally used to spend hours scrolling through Instagram, and I noticed that it consistently left me feeling inadequate about my own life."

**Key improvements in the enhanced version:**
- "big part" → "integral part" (more sophisticated vocabulary)
- Specific platform names added (concrete details)
- "good/bad" → more nuanced language
- Personal experience elaborated with specific detail`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-34-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-ex-3',
        number: '34.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Proofread these sentences. Each contains at least one error typical of Norwegian students writing in English. Find the error(s) and write the corrected sentence.',
        subTasks: [
          {
            label: 'a',
            task: '"The students in my class thinks that the test was very hard and that the teacher should of gave us more time."',
            solution: '"The students in my class think that the test was very hard and that the teacher should have given us more time." Errors: "thinks" → "think" (plural subject), "should of" → "should have" (common error from how "should\'ve" sounds), "gave" → "given" (past participle after "have").',
          },
          {
            label: 'b',
            task: '"She told to me that she was interesting in travelling to USA next summer."',
            solution: '"She told me that she was interested in travelling to the USA next summer." Errors: "told to me" → "told me" (no preposition with "tell"), "interesting" → "interested" (-ed for feelings, -ing for the thing causing the feeling), "to USA" → "to the USA" (countries with abbreviations need "the").',
          },
          {
            label: 'c',
            task: '"I agree on your opinion because I also think that we need to take more care of the environment."',
            solution: '"I agree with your opinion because I also think that we need to take more care of the environment." OR "I agree with you because I also think that we need to take better care of the environment." Error: "agree on" → "agree with" (agree with a person/opinion, agree on a specific point or decision). Also: "take more care" → "take better care" (more natural phrasing).',
          },
          {
            label: 'd',
            task: '"Last year I have been to London where I visited many famous sightseeing."',
            solution: '"Last year I went to London, where I visited many famous sights." Errors: "have been" → "went" (specific past time "last year" requires simple past, not present perfect), "sightseeing" → "sights" (sightseeing is the activity, sights are the places you see).',
          },
        ],
        solution: 'These error types are extremely common among Norwegian students. Create a personal "error list" of mistakes you tend to make, and check for them specifically during the proofreading phase of every exam.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: EXAM DAY STRESS MANAGEMENT ==========
    {
      id: 'engelsk-10-34-def-3',
      type: 'definition',
      title: 'Exam Day Strategies — Before, During, and After',
      content: `Success on exam day depends not just on your English skills, but on how you manage your energy, stress, and focus.

**The night before:**
- Review your preparatory material one final time, then STOP
- Prepare everything you need: pen, dictionary, water, snacks, student ID
- Set two alarms
- Go to bed at a reasonable time — sleep is more valuable than last-minute cramming

**The morning of the exam:**
- Eat a proper breakfast (your brain needs fuel)
- Arrive early — rushing creates unnecessary stress
- Speak English for 5-10 minutes before the exam (warm up your language brain)
- Do a brief breathing exercise: breathe in for 4 counts, hold for 4, breathe out for 4

**During the exam — if you feel stuck:**

| Problem | Solution |
|---------|----------|
| Cannot choose a task | Set a 3-minute timer. Pick the one you have the most to say about, not the one that looks easiest |
| Mind goes blank | Write ANYTHING related to the topic. Even a bad sentence is better than an empty page. The ideas will come once you start writing |
| Running out of time | Prioritise: write a brief conclusion for your long answer rather than leaving it unfinished. An incomplete essay with a conclusion scores better than a half-finished one |
| Getting anxious | Pause. Take 5 deep breaths. Look away from the paper for 30 seconds. Then return to the task |
| Made a mistake | Cross it out neatly with a single line. Do not scribble. Examiners understand that exam texts are first drafts |
| Dictionary is slowing you down | Only use the dictionary for words that are ESSENTIAL to your meaning. Do not look up every word you are unsure about |

**After the exam:**
- Do not compare answers with classmates — it causes unnecessary stress
- The exam is done. Whatever happened, you did your best with the time and knowledge you had
- Treat yourself to something nice — you earned it`,
    },

    // ========== EKSEMPEL: DEALING WITH A DIFFICULT TASK ==========
    {
      id: 'engelsk-10-34-example-3',
      type: 'example',
      title: 'Example: What to Do When You Feel Stuck',
      problem: `A student opens their exam paper and sees this long-answer task: "The preparatory text explores the concept of justice. Write an essay in which you discuss what justice means in today's world. Use examples from at least two different contexts (for example: social justice, environmental justice, criminal justice, or economic justice)."

The student thinks: "I don't know anything about justice. I'm going to fail." Show how to overcome this feeling and start writing.`,
      solution: `**Step 1: Breathe and reframe (1 minute)**
"I don't know anything about justice" is a panic response, not reality. You encounter justice every day — in school rules, in news stories, in how you and your friends treat each other. The task is asking you to THINK, not to be an expert.

**Step 2: Quick brainstorm — write down everything you associate with "justice" (3 minutes)**
- Fair treatment → school rules, equal opportunities
- Criminal justice → prison, rehabilitation vs. punishment, Norway's system
- Social media → cancel culture, online justice, mob mentality
- Climate → rich countries polluting more, poor countries suffering
- Everyday life → fairness in friendships, standing up for others

**Step 3: Choose two contexts and a thesis (2 minutes)**
Contexts: Criminal justice + Climate justice
Thesis: "Justice is not a fixed concept — it means different things in different contexts, but at its core, it is about fairness and accountability."

**Step 4: Quick outline (5 minutes)**
1. Introduction: Hook with a question about what fairness means, thesis
2. Body 1: Criminal justice — Norway's rehabilitation model vs. US punishment model
3. Body 2: Climate justice — rich countries' responsibility, developing nations suffering
4. Body 3: Connection — both examples show that justice requires those with power to take responsibility
5. Conclusion: Justice is about accountability, and it requires action, not just good intentions

**Step 5: Start writing (the introduction)**
"What does it mean to be fair? At first glance, the answer seems obvious — treat everyone equally. But justice, as a concept, is far more complex than simple equality. In a world where some people start with advantages and others face systemic barriers, true justice requires not just equal treatment, but equitable outcomes. This essay will explore what justice means in two very different contexts — criminal justice and climate justice — and argue that both demand accountability from those with the greatest power."

**The key insight:** You ALWAYS know more than you think you do. The brainstorming step unlocks knowledge you did not realise you had. Never skip it.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-34-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-ex-4',
        number: '34.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'You have 20 minutes left on the exam and your long-answer essay is missing its conclusion. What should you do?',
        options: [
          {
            id: 'a',
            text: 'Write a brief but clear conclusion that restates your thesis and summarizes your main points, then use remaining time to proofread',
            isCorrect: true,
            feedback: 'Correct! A brief conclusion is much better than no conclusion. Even 3-4 sentences that wrap up your argument will significantly improve your score. Then use any remaining time to proofread.',
          },
          {
            id: 'b',
            text: 'Add another body paragraph instead of a conclusion',
            isCorrect: false,
            feedback: 'Incorrect. An essay without a conclusion feels incomplete and scores lower than one with a brief conclusion. The conclusion is essential for a finished text.',
          },
          {
            id: 'c',
            text: 'Go back and improve the introduction instead',
            isCorrect: false,
            feedback: 'Incorrect. An essay without a conclusion is worse than one with a less-than-perfect introduction. Complete the structure first, then improve if time allows.',
          },
          {
            id: 'd',
            text: 'Stop writing and submit what you have — the conclusion is not that important',
            isCorrect: false,
            feedback: 'Incorrect. The conclusion is one of the last things the examiner reads and strongly affects their overall impression. Always write a conclusion, even a short one.',
          },
        ],
        solution: 'When running low on time, always prioritize completing the structure of your text. A brief conclusion (3-4 sentences) is far better than no conclusion at all.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-34-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-ex-5',
        number: '34.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Create your personal exam preparation plan. This is a practical exercise to complete before your actual exam.',
        subTasks: [
          {
            label: 'a',
            task: 'Make a list of your 5 most common English writing errors (be specific — not just "grammar", but "subject-verb agreement with third person singular"). These are the errors you will check for during proofreading.',
            solution: 'Common errors for Norwegian students include: missing -s on third person singular verbs, wrong prepositions (in/at/on), confusing present perfect and simple past, Norwegian word order in English sentences, and incorrect use of articles (the/a/an). Students should identify their OWN specific patterns.',
          },
          {
            label: 'b',
            task: 'Write out your time management plan for a 5-hour exam. Include specific time allocations for each phase.',
            solution: 'A solid plan: 0:00-0:20 Read tasks and choose. 0:20-1:30 Complete short answers. 1:30-1:50 Plan long answer. 1:50-4:10 Write long answer. 4:10-4:50 Proofread everything. 4:50-5:00 Final check. Students should personalise based on their strengths and weaknesses.',
          },
          {
            label: 'c',
            task: 'List 5 "upgrade words" — simple words you tend to overuse, paired with more sophisticated alternatives you can use on the exam.',
            solution: 'Examples: good → beneficial/remarkable/effective, bad → detrimental/harmful/problematic, important → crucial/essential/significant, think → believe/argue/maintain, a lot → numerous/substantial/considerable. These should be words the student is comfortable using, not obscure vocabulary they might misuse.',
          },
        ],
        hints: [
          'Be honest about your weaknesses — that is where the biggest improvements come from',
          'Practise your time management plan on a practice exam before the real one',
          'Keep your upgrade words on a small card you can glance at during revision',
        ],
        solution: 'A personalised exam preparation plan is more valuable than any generic advice. By knowing your specific strengths and weaknesses, you can focus your energy where it matters most.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-34-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-ex-6',
        number: '34.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'During the exam, you realise you have been writing about the wrong topic for 30 minutes. What is the best course of action?',
        options: [
          {
            id: 'a',
            text: 'Cross out the wrong section neatly, take 5 minutes to re-plan, and start the correct task with a focused outline',
            isCorrect: true,
            feedback: 'Correct! 30 minutes of wrong work is frustrating, but you still have most of the exam left. Cross out neatly, re-read the task carefully, plan quickly, and write with focus. A shorter but relevant text scores better than a longer irrelevant one.',
          },
          {
            id: 'b',
            text: 'Try to change the wrong text to fit the correct topic by adding a few sentences',
            isCorrect: false,
            feedback: 'This rarely works and usually produces a confused, unfocused text. It is better to start fresh with a clear plan than to try to salvage something that does not fit the task.',
          },
          {
            id: 'c',
            text: 'Continue writing the wrong topic and hope the examiner gives partial credit',
            isCorrect: false,
            feedback: 'Incorrect. An answer that does not address the task will score poorly regardless of quality. Examiners assess whether you answered the question that was asked.',
          },
          {
            id: 'd',
            text: 'Panic and give up on the long answer entirely',
            isCorrect: false,
            feedback: 'Never give up. You still have significant time remaining. A focused 250-word essay on the right topic will score much better than nothing at all.',
          },
        ],
        solution: 'Mistakes happen even to the best students. The key is to recognise the error, stay calm, and redirect your energy. A shorter text that answers the right question will always score better than a longer text that answers the wrong one.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-34-summary',
      type: 'text',
      content: `## Summary: Your Exam Day Checklist

**Before the exam:**
- Prepare materials: pen, dictionary, water, snacks
- Review preparatory material, then rest
- Get enough sleep — your brain needs it
- Eat a proper breakfast

**Reading tasks:**
- Read EVERY word of every task
- Underline key requirements: text type, audience, topic, task word, length
- Choose the task you have the most to say about

**Time management (5-hour exam):**
- Orientation: 15-20 minutes
- Short answers: 60-90 minutes
- Long answer planning: 15-20 minutes
- Long answer writing: 120-150 minutes
- Proofreading: 30-40 minutes

**Proofreading (three rounds):**
1. Content and structure — Did I answer the question?
2. Grammar and spelling — Check your personal error list
3. Style and vocabulary — Can I upgrade any words?

**If things go wrong:**
- Stuck? Brainstorm for 3 minutes — you know more than you think
- Running out of time? Write a brief conclusion rather than none
- Made a mistake? Cross out neatly and redirect
- Feeling anxious? Pause, breathe, then return to the task

**Remember:** The exam is a chance to show what you CAN do, not a trap designed to catch you out. Trust your preparation, manage your time, and write with confidence. You have got this.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-34-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-ex-7',
        number: '34.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Full exam simulation: Set a timer for 90 minutes and complete the following tasks as if you were in an exam. Do not use any aids except a dictionary.',
        subTasks: [
          {
            label: 'a',
            task: 'Short answer (15 minutes): "Explain what is meant by \'media literacy\' and give two reasons why it is important for young people today." Write 80-120 words.',
            solution: 'A strong answer defines media literacy (the ability to critically evaluate media messages), gives two specific reasons (e.g., fighting misinformation and recognising manipulation), and includes at least one concrete example. It should be concise and use the PEE method.',
          },
          {
            label: 'b',
            task: 'Short answer (15 minutes): "Compare how a blog post and a news article present information differently. Give one example of each." Write 80-120 words.',
            solution: 'A strong answer identifies key differences (verification, objectivity, tone, structure) and provides specific examples. It should use integrated comparison language, not separate blocks.',
          },
          {
            label: 'c',
            task: 'Long answer (60 minutes): "Write an article for a school newspaper about a topic that matters to your generation. Choose your own topic, give your article a headline, and write 300-400 words."',
            solution: 'A strong article has a catchy headline, an engaging lead paragraph, a clear structure with subheadings or clear paragraphs, specific examples and possibly a quote, and a strong conclusion. The topic should be something the student genuinely cares about, which leads to more authentic and engaging writing.',
          },
        ],
        hints: [
          'Allocate your 90 minutes: 5 min reading, 25 min short answers, 10 min planning long answer, 40 min writing, 10 min proofreading',
          'This is practice — the goal is to build your time management skills, not to write a perfect text',
          'After finishing, review your own work using the proofreading checklist from this chapter',
        ],
        solution: 'Timed practice is the single most effective exam preparation strategy. The more you practise writing under time pressure, the more comfortable and efficient you become. Try to do at least 2-3 timed practice sessions before your real exam.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-34-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-34-ex-8',
        number: '34.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Reflection and self-assessment: After completing the timed simulation above (or any practice exam), answer these reflection questions honestly.',
        subTasks: [
          {
            label: 'a',
            task: 'How did you manage your time? Did you finish everything? If not, what would you change next time?',
            solution: 'Honest reflection is key. Students should identify specific time management issues (e.g., spent too long on the first short answer, did not leave enough time for proofreading) and propose concrete solutions.',
          },
          {
            label: 'b',
            task: 'Read through your long answer and identify three specific improvements you could make (one for content, one for language, one for structure).',
            solution: 'Content: Did I include enough evidence or examples? Language: Can I replace any simple words with more sophisticated ones? Structure: Does every paragraph have a clear topic sentence? Students should quote specific parts of their text and suggest specific improvements.',
          },
          {
            label: 'c',
            task: 'What is the ONE thing you will focus on improving before your actual exam? Be specific.',
            solution: 'The most effective improvement strategy focuses on ONE thing at a time. Examples: "I will practise writing introductions with hooks", "I will memorise 10 upgrade words", "I will practise my proofreading checklist on every text I write." Vague goals like "write better" are not helpful.',
          },
        ],
        hints: [
          'Be honest with yourself — self-awareness is the foundation of improvement',
          'Focus on what you CAN control and improve, not on what you cannot',
          'Set a specific, measurable goal for your next practice session',
        ],
        solution: 'The students who improve the most are those who reflect honestly on their practice and set specific goals. Every practice exam is an opportunity to learn, not a test you pass or fail. Use each one to identify exactly what you need to work on next.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Task analysis', definition: 'The process of carefully reading an exam task to identify all requirements: text type, audience, topic, task word, sources, and length.' },
    { term: 'Time allocation', definition: 'Dividing available exam time into phases (orientation, writing, revision) to ensure every section receives adequate attention.' },
    { term: 'Proofreading', definition: 'The systematic process of checking a completed text for errors in content, grammar, spelling, and style.' },
    { term: 'Upgrade words', definition: 'More sophisticated vocabulary alternatives to replace commonly overused simple words (e.g., "good" to "beneficial").' },
    { term: 'Task word', definition: 'The verb in an exam task that tells you what to do: discuss, argue, compare, explain, analyse, evaluate.' },
    { term: 'Reframing', definition: 'A stress management technique where you change your perspective on a difficult situation from threat to challenge.' },
  ],
};

// ============================================================================
// EKSPORT: Samlet array for del 8
// ============================================================================

export const ENGELSK_10_DEL8_CHAPTERS = [
  CHAPTER_ENGELSK_10_29,
  CHAPTER_ENGELSK_10_30,
  CHAPTER_ENGELSK_10_31,
  CHAPTER_ENGELSK_10_32,
  CHAPTER_ENGELSK_10_33,
  CHAPTER_ENGELSK_10_34,
];
