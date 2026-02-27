/**
 * Tekstbok innhold for Engelsk 10. klasse - Narrativ versjon Del 1
 * Kapittel 1-4 (4 kapitler totalt)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 1 NARRATIVE: Exam Preparation - Writing
// ============================================================================

export const CHAPTER_ENGELSK_10_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-1-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '1',
  title: 'Exam Preparation - Writing',
  subtitle: 'Narrative Version',
  description: 'An engaging guide to mastering written English for your final exam, covering essays, articles, short stories, and the art of structure.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
    'bruke variert ordforråd og idiomatiske uttrykk i skriftlig kommunikasjon',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'planlegge, revidere og bearbeide egne tekster basert på tilbakemelding',
  ],
  linkedChapterId: 'engelsk-10-1',
  content: [
    {
      id: 'engelsk-10-1-n-intro',
      type: 'text',
      content: `## The Blank Page and You

Imagine sitting down at your desk on exam day. Five hours stretch ahead of you. The task sheet is in front of you, and the cursor on your screen blinks expectantly. For many students, this moment triggers a wave of anxiety. But here is the truth that experienced writers know: the blank page is not your enemy. It is your canvas. And every great piece of writing begins with a single, deliberate sentence.

The written English exam in 10th grade is your chance to show everything you have learned over three years of ungdomsskolen. You will choose from several tasks, each requiring a different type of text. Some students pick the essay because they like arguing. Others gravitate toward the short story because they love creating worlds. A few choose the article because they want to inform and persuade a wider audience. Whatever you choose, the skills you need overlap far more than you might think. Structure, vocabulary, coherence, and revision are universal tools that serve every genre.

In this chapter, we are going to walk through the major text types together, break down what makes each one work, and build a toolkit of writing strategies that you can carry into the exam room with confidence. By the end, you will not just understand what good writing looks like -- you will know how to produce it under pressure.`,
    },
    {
      id: 'engelsk-10-1-n-section1',
      type: 'text',
      content: `## The Essay: Building an Argument Brick by Brick

An essay is an argument made visible. Think of it as a conversation with a reader who is smart but skeptical -- someone who will not take your word for anything unless you back it up. Your job is to present a clear position and then support it so thoroughly that even a doubter would nod along.

Every strong essay follows a predictable architecture. The introduction sets the stage: it grabs the reader's attention, introduces the topic, and ends with a thesis statement -- one sentence that tells the reader exactly what you will argue. A good thesis is specific and debatable. "Social media is bad" is vague. "Social media platforms should be required to verify users' ages because unrestricted access harms young people's mental health" gives your reader a roadmap.

The body paragraphs are where you do the heavy lifting. Each paragraph should focus on one main point. Start with a topic sentence that announces the point, then provide evidence -- facts, statistics, examples, expert opinions, or personal observations. After presenting evidence, explain how it supports your thesis. This explain step is where many students stumble. They drop in a quote or a fact and move on, assuming the connection is obvious. It rarely is. Always spell out the link between your evidence and your claim.

Transitions are the glue that holds your essay together. Words like "furthermore," "however," "in contrast," and "consequently" signal to the reader how your ideas connect. Without them, your essay reads like a list of disconnected thoughts. With them, it flows like a conversation.

The conclusion is not just a summary. It is your final chance to leave an impression. Restate your thesis in fresh words, synthesize your main points (do not simply repeat them), and end with a thought-provoking closing -- a question, a call to action, or a broader implication. A strong conclusion makes the reader feel that the journey was worth taking.`,
    },
    {
      id: 'engelsk-10-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on essay writing:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-1-n-quiz1-q0',
            task: 'What is the purpose of a thesis statement in an essay?',
            options: [
              { id: 'a', text: 'To summarize the entire essay in detail', isCorrect: false },
              { id: 'b', text: 'To present a clear, debatable position that the essay will argue', isCorrect: true },
              { id: 'c', text: 'To list all the sources you will use', isCorrect: false },
              { id: 'd', text: 'To entertain the reader with a funny opening', isCorrect: false },
            ],
            solution: 'A thesis statement presents a specific, debatable claim that gives the reader a roadmap for the essay. It tells the reader exactly what position you will argue and defend throughout the text.',
          },
          {
            id: 'engelsk-10-1-n-quiz1-q1',
            task: 'After presenting evidence in a body paragraph, what should you always do?',
            options: [
              { id: 'a', text: 'Move directly to the next paragraph', isCorrect: false },
              { id: 'b', text: 'Repeat the thesis statement', isCorrect: false },
              { id: 'c', text: 'Explain how the evidence supports your thesis', isCorrect: true },
              { id: 'd', text: 'Add a personal anecdote', isCorrect: false },
            ],
            solution: 'You must always explain the connection between your evidence and your claim. Dropping in a fact or quote without explanation leaves the reader guessing about its relevance. Spelling out the link strengthens your argument.',
          },
          {
            id: 'engelsk-10-1-n-quiz1-q2',
            task: 'Which of these is the strongest thesis statement?',
            options: [
              { id: 'a', text: 'Climate change is a problem.', isCorrect: false },
              { id: 'b', text: 'Many people worry about the environment.', isCorrect: false },
              { id: 'c', text: 'Governments should invest in renewable energy because fossil fuels accelerate climate change and threaten food security.', isCorrect: true },
              { id: 'd', text: 'This essay will discuss climate change.', isCorrect: false },
            ],
            solution: 'A strong thesis is specific, debatable, and gives a clear roadmap. Option C states a clear position (governments should invest in renewables) and provides reasons (fossil fuels accelerate climate change, threaten food security), giving the reader a preview of the argument.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-1-n-section2',
      type: 'text',
      content: `## Articles and Short Stories: Two Sides of Creative Writing

An article speaks to a broad audience. Whether it is for a school newspaper, a blog, or a magazine, the article's job is to inform, engage, and sometimes persuade. The tone is typically more accessible than an essay -- you can use rhetorical questions, direct address ("Have you ever wondered..."), and vivid examples to pull the reader in. But do not mistake accessibility for sloppiness. A good article still needs a clear structure: a catchy headline, a hook in the opening paragraph, well-organized body sections (often with subheadings), and a conclusion that ties everything together.

The short story, by contrast, lives in the world of imagination. Here you create characters, settings, and conflicts. The best exam short stories are not epic novels compressed into two pages -- they are tight, focused snapshots of a moment or situation. Choose one central conflict, a small cast of characters, and a limited time frame. Use sensory details to bring your world alive: the smell of rain on asphalt, the sound of a door clicking shut, the weight of an unsent message on a phone screen.

Dialogue is a powerful tool in short stories, but use it purposefully. Every line of dialogue should reveal character, advance the plot, or create tension. "Hi, how are you?" "Fine, thanks" does none of these things. But "I saw your message. All twelve of them." -- that single line reveals conflict, character, and backstory.

Both articles and short stories benefit from a strong opening. In journalism, this is called the "lead." In fiction, it is the "hook." Either way, the first sentence must make the reader want the second sentence. Compare these two openings: "This article is about school lunches." versus "Every day, 400 students at Bergheim School scrape untouched food into the bin -- enough to feed a classroom for a week." The second opening creates curiosity and urgency. It makes you want to know why.`,
    },
    {
      id: 'engelsk-10-1-n-section3',
      type: 'text',
      content: `## Structure and Revision: The Secret Weapons

Here is a secret that separates good writers from great ones: great writers are great revisers. The first draft is never the final product. It is the raw material. The real craft happens when you go back, read what you have written with fresh eyes, and reshape it.

Start with a plan before you write. A simple outline -- three to five bullet points for your main sections -- saves enormous time. It prevents you from wandering off-topic, ensures you cover all your points, and gives you a framework to hang your ideas on. On exam day, spending ten minutes planning can save you thirty minutes of confused rewriting later.

When you revise, work in layers. First, check the big picture: Does your text have a clear beginning, middle, and end? Does every paragraph serve your purpose? Are your ideas in a logical order? Cut anything that does not earn its place. Next, zoom into the paragraph level: Does each paragraph have a topic sentence? Are your transitions smooth? Finally, polish the language: check for grammar errors, vary your sentence length, replace vague words with precise ones. "Good" can become "effective," "compelling," or "remarkable" depending on context.

One practical technique is reading your text aloud. Your ear catches awkward phrasing that your eye misses. If you stumble over a sentence while reading it, your reader will stumble too. Another technique is the "so what?" test: after each paragraph, ask yourself, "So what? Why does this matter?" If you cannot answer, the paragraph needs more development or should be cut.

Remember that the exam evaluators are looking for evidence of process, not perfection. A well-structured text with a few minor errors will always score higher than a grammatically flawless text that wanders aimlessly. Structure and coherence are king.`,
    },
    {
      id: 'engelsk-10-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on articles, stories, and revision:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-1-n-quiz2-q0',
            task: 'What is the most important quality of dialogue in a short story?',
            options: [
              { id: 'a', text: 'It should be as realistic and natural as possible, including small talk', isCorrect: false },
              { id: 'b', text: 'It should reveal character, advance the plot, or create tension', isCorrect: true },
              { id: 'c', text: 'It should be written in formal, grammatically perfect English', isCorrect: false },
              { id: 'd', text: 'It should fill space to meet the word count requirement', isCorrect: false },
            ],
            solution: 'In short story writing, every line of dialogue must serve a purpose. It should reveal something about the characters, move the story forward, or build tension. Realistic small talk adds nothing to a tightly written exam story.',
          },
          {
            id: 'engelsk-10-1-n-quiz2-q1',
            task: 'Why is spending time on planning before writing beneficial on exam day?',
            options: [
              { id: 'a', text: 'It uses up time so you write less and make fewer errors', isCorrect: false },
              { id: 'b', text: 'It prevents wandering off-topic and saves time on confused rewriting', isCorrect: true },
              { id: 'c', text: 'It is required by the exam rules', isCorrect: false },
              { id: 'd', text: 'It impresses the evaluator who can see your outline', isCorrect: false },
            ],
            solution: 'Planning prevents you from losing focus and wandering off-topic. A simple outline ensures you cover all your points in a logical order, and the time invested in planning often saves much more time that would otherwise be spent rewriting confused passages.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-1-n-summary',
      type: 'text',
      content: `## Summary

The written English exam tests your ability to produce structured, coherent texts in different genres. **Essays** require a clear thesis, evidence-based body paragraphs with explanations, smooth transitions, and a synthesizing conclusion. **Articles** combine accessible tone with solid structure, using hooks, subheadings, and direct address to engage a broad audience. **Short stories** thrive on focused conflicts, sensory details, and purposeful dialogue within a limited scope.

Across all text types, **structure** is paramount: plan before you write, organize your ideas logically, and ensure every paragraph earns its place. **Revision** is where good writing becomes great -- check the big picture first, then paragraphs, then language. Reading aloud catches awkward phrasing, and the "so what?" test ensures every paragraph has a clear purpose. Master these skills, and the blank page becomes a canvas, not a threat.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2 NARRATIVE: Exam Preparation - Oral
// ============================================================================

export const CHAPTER_ENGELSK_10_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-2-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '2',
  title: 'Exam Preparation - Oral',
  subtitle: 'Narrative Version',
  description: 'Master the art of speaking English with confidence through presentations, discussions, and effective body language.',
  estimatedMinutes: 35,
  competenceGoals: [
    'uttrykke seg med flyt og sammenheng tilpasset formål og situasjon',
    'delta i spontane samtaler om ulike emner og uttrykke og begrunne egne meninger',
    'bruke varierte språklige virkemidler i muntlig kommunikasjon',
    'tilpasse språket til ulike kommunikasjonssituasjoner',
  ],
  linkedChapterId: 'engelsk-10-2',
  content: [
    {
      id: 'engelsk-10-2-n-intro',
      type: 'text',
      content: `## Standing Up and Speaking Out

Picture this: you walk into the oral exam room. Two examiners sit across from you. They smile, nod, and ask you to begin. Your heart pounds, your palms are damp, and for a moment your mind goes completely blank. Sound familiar? Nearly every student has experienced this scenario -- or at least feared it.

Here is the good news: oral communication is a skill, not a talent. Nobody is born knowing how to give a polished presentation or hold their own in a spontaneous discussion. These abilities are built through practice, technique, and understanding. The students who seem effortlessly confident have simply practiced more -- and they have practiced the right things.

The oral English exam typically has two parts: a prepared presentation on a topic you have researched, and a follow-up conversation where the examiners ask questions and discuss the topic with you. Both parts test different skills. The presentation tests your ability to organize and deliver prepared content. The conversation tests your ability to think on your feet, respond to unexpected questions, and engage in genuine dialogue. Together, they give a complete picture of your spoken English.

Let us explore how to excel at both.`,
    },
    {
      id: 'engelsk-10-2-n-section1',
      type: 'text',
      content: `## The Presentation: Telling a Story, Not Reading a Script

The biggest mistake students make with presentations is treating them as essays read aloud. A presentation is a performance, and your audience is not reading -- they are listening. This changes everything.

Listeners cannot go back and re-read a sentence they missed. They cannot skim ahead. They are captive to your pace, your structure, and your clarity. This means you need to be more organized than in writing, not less. Signal your structure explicitly: "I will cover three main points today. First... Second... Finally..." Use phrases like "Now, let us move on to..." and "As I mentioned earlier..." These signposts help your audience follow along.

Your opening matters enormously. Do not start with "Hello, my name is... and I am going to talk about..." Start with something that grabs attention: a surprising fact, a provocative question, a brief story, or a striking quote. "Did you know that the average teenager spends more time on social media each week than attending school?" That kind of opening creates curiosity and sets the tone.

Notes are your safety net, not your script. Write keywords and short phrases on index cards -- never full sentences. If you read from a script, you lose eye contact, your voice becomes monotonous, and you signal to the examiner that you have memorized rather than understood. Keywords force you to formulate sentences in real time, which sounds natural and demonstrates genuine competence.

Practice is non-negotiable. Rehearse your presentation at least three times: once alone to get the content right, once in front of a mirror or camera to work on delivery, and once in front of a friend or family member to simulate the pressure of an audience. Time yourself. Most students talk faster when nervous, so if your presentation is eight minutes in practice, it will likely be six minutes on exam day.`,
    },
    {
      id: 'engelsk-10-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on presentation skills:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-2-n-quiz1-q0',
            task: 'Why should you use keywords on note cards rather than full sentences during a presentation?',
            options: [
              { id: 'a', text: 'Because note cards are too small for full sentences', isCorrect: false },
              { id: 'b', text: 'Because keywords force you to formulate sentences naturally, which sounds more competent', isCorrect: true },
              { id: 'c', text: 'Because the examiner will take points off for reading', isCorrect: false },
              { id: 'd', text: 'Because you will finish faster with fewer notes', isCorrect: false },
            ],
            solution: 'Using keywords forces you to create sentences in real time, which sounds natural and demonstrates that you truly understand your material rather than having memorized a script. This also helps you maintain eye contact with your audience.',
          },
          {
            id: 'engelsk-10-2-n-quiz1-q1',
            task: 'What is the purpose of signpost phrases like "First... Second... Finally..." in a presentation?',
            options: [
              { id: 'a', text: 'They make your presentation sound more formal and academic', isCorrect: false },
              { id: 'b', text: 'They help listeners follow your structure since they cannot re-read or skim', isCorrect: true },
              { id: 'c', text: 'They are required by the exam format', isCorrect: false },
              { id: 'd', text: 'They help you remember what comes next', isCorrect: false },
            ],
            solution: 'Unlike readers, listeners cannot go back or skim ahead. Signpost phrases explicitly guide your audience through the structure of your presentation, making it easier for them to follow and understand your argument.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-2-n-section2',
      type: 'text',
      content: `## Discussions: The Art of Thinking on Your Feet

The discussion part of the oral exam is where many students feel most vulnerable, because you cannot fully prepare for it. The examiners will ask follow-up questions, challenge your views, and steer the conversation in unexpected directions. But this is also where you can truly shine, because genuine conversation reveals depth of understanding in ways that a prepared talk cannot.

The key to good discussion is active listening. Before you can respond well, you need to understand exactly what is being asked. Do not start formulating your answer while the examiner is still speaking. Listen to the full question, take a breath, and then respond. If you are unsure what they are asking, it is perfectly acceptable -- and actually impressive -- to say, "Could you clarify what you mean by...?" or "If I understand correctly, you are asking whether..."

When you give your opinion, always support it. "I think social media is harmful" is a starting point, not an answer. "I think social media can be harmful to teenagers because studies show that excessive use correlates with anxiety and depression, and many young people compare their real lives to others' curated highlights" -- that is a substantiated view. Use phrases like "In my opinion," "From my perspective," "I believe this because..." to frame your views clearly.

Do not be afraid to disagree with the examiner, but do so respectfully. "I see your point, but I would argue that..." or "That is an interesting perspective. However, I think..." shows that you can engage critically while remaining polite. Examiners are not testing whether you agree with them -- they are testing whether you can articulate and defend a position.`,
    },
    {
      id: 'engelsk-10-2-n-section3',
      type: 'text',
      content: `## Body Language: The Silent Conversation

Communication researchers estimate that over half of what we communicate comes not from words but from body language. In an oral exam, your posture, eye contact, gestures, and facial expressions speak as loudly as your vocabulary.

Eye contact is the single most important nonverbal skill. When you look someone in the eye, you communicate confidence, sincerity, and engagement. During your presentation, make eye contact with both examiners, alternating between them every few sentences. During the discussion, look at whoever is speaking, and direct your responses to both. If sustained eye contact feels uncomfortable, try looking at the bridge of the nose or the forehead -- from across a table, it appears identical to direct eye contact.

Your posture tells a story. Sitting up straight with your shoulders back communicates alertness and confidence. Slouching communicates disinterest or nervousness. Leaning slightly forward during the discussion shows engagement. Crossing your arms can appear defensive, even if you are simply cold. Be aware of these signals and use them intentionally.

Gestures add energy and clarity to your speech. Open hand movements emphasize points, counting on your fingers helps listeners track your structure, and natural arm movements make you look animated rather than stiff. Avoid nervous habits like clicking a pen, tapping the table, or playing with your hair -- they distract from your message.

Finally, smile. A genuine smile at the beginning of the exam relaxes both you and the examiners. It sets a positive tone for the entire interaction. Remember that the examiners want you to succeed. They are on your side.`,
    },
    {
      id: 'engelsk-10-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on discussions and body language:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-2-n-quiz2-q0',
            task: 'If an examiner asks a question you do not fully understand, what is the best approach?',
            options: [
              { id: 'a', text: 'Guess what they mean and give a general answer', isCorrect: false },
              { id: 'b', text: 'Ask them to repeat or clarify the question', isCorrect: true },
              { id: 'c', text: 'Say "I do not know" and wait for the next question', isCorrect: false },
              { id: 'd', text: 'Change the subject to something you know well', isCorrect: false },
            ],
            solution: 'Asking for clarification shows maturity and active listening. Phrases like "Could you clarify what you mean by...?" demonstrate language competence and ensure you answer the actual question rather than guessing incorrectly.',
          },
          {
            id: 'engelsk-10-2-n-quiz2-q1',
            task: 'Why is crossing your arms generally considered negative body language in an oral exam?',
            options: [
              { id: 'a', text: 'Because it hides your hands from the examiners', isCorrect: false },
              { id: 'b', text: 'Because it can appear defensive or closed-off', isCorrect: true },
              { id: 'c', text: 'Because it is considered rude in Norwegian culture', isCorrect: false },
              { id: 'd', text: 'Because it makes it harder to use your notes', isCorrect: false },
            ],
            solution: 'Crossing your arms creates a physical barrier between you and the examiners, which can be interpreted as defensiveness, discomfort, or disinterest -- even if you are simply comfortable or cold. Open body posture communicates confidence and engagement.',
          },
          {
            id: 'engelsk-10-2-n-quiz2-q2',
            task: 'What is the most important quality of a good answer during the discussion part of the exam?',
            options: [
              { id: 'a', text: 'Using as many advanced vocabulary words as possible', isCorrect: false },
              { id: 'b', text: 'Agreeing with whatever the examiner suggests', isCorrect: false },
              { id: 'c', text: 'Supporting your opinion with reasons and examples', isCorrect: true },
              { id: 'd', text: 'Speaking quickly to demonstrate fluency', isCorrect: false },
            ],
            solution: 'A substantiated answer -- one that includes reasons, examples, or evidence -- demonstrates depth of understanding and critical thinking. Simply stating an opinion without support shows surface-level engagement with the topic.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-2-n-summary',
      type: 'text',
      content: `## Summary

The oral English exam tests both prepared and spontaneous communication. For **presentations**, structure your talk with clear signposts, use keyword notes instead of scripts, open with an attention-grabbing hook, and rehearse at least three times. For **discussions**, practice active listening, support every opinion with reasons and examples, and do not hesitate to ask for clarification or respectfully disagree.

**Body language** is the silent dimension of communication. Eye contact conveys confidence, upright posture shows engagement, natural gestures add energy, and a genuine smile sets a positive tone. Remember that over half of communication is nonverbal -- your body speaks even when your mouth does not. Master both the spoken and unspoken elements, and you will walk into the exam room ready to impress.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3 NARRATIVE: Literary Analysis
// ============================================================================

export const CHAPTER_ENGELSK_10_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-3-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '3',
  title: 'Literary Analysis',
  subtitle: 'Narrative Version',
  description: 'Unlock the secrets hidden in English literature through literary elements, devices, themes, and the art of interpretation.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklig litteratur, inkludert ungdomslitteratur',
    'samtale om forfatterens virkemidler og tekstens tema',
    'beskrive og reflektere over sammenhenger mellom tekst og kontekst',
    'utforske og reflektere over mangfold og samfunnsforhold i engelskspråklige land gjennom litteratur',
  ],
  linkedChapterId: 'engelsk-10-3',
  content: [
    {
      id: 'engelsk-10-3-n-intro',
      type: 'text',
      content: `## Reading Between the Lines

Every story has two layers. On the surface, there are characters doing things in places -- a boy runs away from home, a woman discovers a secret, a group of friends faces a challenge. This surface layer is what we call the plot, and it is what keeps us turning pages. But underneath the plot, there is a deeper layer -- a layer of meaning, symbolism, and commentary on the human experience. Learning to read this deeper layer is what literary analysis is all about.

Think of it like looking at a painting. Anyone can see that it shows a starry night sky over a village. But a trained eye notices the swirling brushstrokes that suggest turbulence, the disproportionately large stars that hint at cosmic significance, the quiet village below that contrasts with the wild sky above. The painting means more when you know how to look.

Literature works the same way. When an author chooses to set a scene in a dark forest rather than a sunny meadow, that choice carries meaning. When a character's name echoes a mythological figure, that connection is intentional. When a story ends without resolution, the ambiguity itself is a statement. Literary analysis gives you the tools to decode these choices and understand what the author is really saying.

Let us build your analytical toolkit, one concept at a time.`,
    },
    {
      id: 'engelsk-10-3-n-section1',
      type: 'text',
      content: `## Literary Elements: The Building Blocks of Story

Every piece of literature is constructed from a set of fundamental elements, much like a house is built from foundation, walls, and roof. Understanding these elements lets you see how the story is assembled and appreciate the craft behind it.

**Characters** are the heart of any narrative. We distinguish between flat characters, who have one or two defining traits and do not change, and round characters, who are complex and evolve through the story. The protagonist is the main character, the one whose journey we follow. The antagonist is the force that opposes them -- it can be another person, a society, nature, or even an internal struggle. When you analyze a character, ask: What do they want? What stands in their way? How do they change? What do their actions reveal about their values?

**Setting** is more than just a backdrop. It establishes mood, reflects characters' inner states, and can even function as a character itself. Consider how differently a love story feels when set in war-torn London versus a peaceful Norwegian fjord. The setting creates atmosphere and shapes the possibilities of the plot. Historical and cultural context matters too -- a story set in 1960s America carries different implications than one set in modern-day Oslo.

**Plot** is the sequence of events, but it is the structure of those events that creates meaning. Most plots follow a pattern: exposition (introduction), rising action (complications build), climax (the turning point), falling action (consequences unfold), and resolution (the new normal). Some modern literature deliberately breaks this pattern -- a story might start at the climax, or end without resolution -- and these structural choices are themselves meaningful.

**Conflict** is the engine of every story. Without conflict, there is no tension, and without tension, there is no reason to keep reading. External conflicts pit characters against outside forces -- other people, society, nature, technology. Internal conflicts happen within a character's mind -- doubt, guilt, desire, fear. The most memorable stories interweave both types, so that the external journey mirrors an internal transformation.

**Point of view** determines whose eyes we see the story through. First person ("I walked into the room") creates intimacy and subjectivity. Third person limited ("She walked into the room") allows some distance while staying close to one character's thoughts. Third person omniscient ("They all walked into the room, each carrying their own secret") gives a bird's-eye view of everyone. An unreliable narrator -- one whose account we cannot fully trust -- adds a layer of complexity that rewards careful reading.`,
    },
    {
      id: 'engelsk-10-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on literary elements:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-3-n-quiz1-q0',
            task: 'What is the difference between a flat character and a round character?',
            options: [
              { id: 'a', text: 'Flat characters are villains and round characters are heroes', isCorrect: false },
              { id: 'b', text: 'Flat characters have one or two traits and do not change, while round characters are complex and evolve', isCorrect: true },
              { id: 'c', text: 'Flat characters appear in short stories, round characters in novels', isCorrect: false },
              { id: 'd', text: 'Flat characters are realistic, round characters are fictional', isCorrect: false },
            ],
            solution: 'Flat characters are defined by one or two characteristics and remain static throughout the story. Round characters are multidimensional, have complex motivations, and undergo development or change as the story progresses.',
          },
          {
            id: 'engelsk-10-3-n-quiz1-q1',
            task: 'A character struggles with guilt over a past decision while also fighting against an oppressive government. What types of conflict are present?',
            options: [
              { id: 'a', text: 'Only external conflict', isCorrect: false },
              { id: 'b', text: 'Only internal conflict', isCorrect: false },
              { id: 'c', text: 'Both internal conflict (guilt) and external conflict (oppressive government)', isCorrect: true },
              { id: 'd', text: 'Neither -- this is rising action, not conflict', isCorrect: false },
            ],
            solution: 'The guilt represents an internal conflict within the character\'s mind, while the fight against an oppressive government is an external conflict against society. The most compelling stories often interweave both types.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-3-n-section2',
      type: 'text',
      content: `## Literary Devices: The Author's Toolkit

If literary elements are the building blocks, literary devices are the tools authors use to shape those blocks into something beautiful and meaningful. These are deliberate techniques that create effects -- emotional, intellectual, and aesthetic.

**Metaphor** and **simile** are the most common figurative devices. A simile compares two things using "like" or "as": "Her voice was like honey." A metaphor makes the comparison directly: "Her voice was honey." Both create vivid images, but metaphors tend to be more powerful because they assert identity rather than similarity. Extended metaphors run through an entire passage or even an entire text, building layers of meaning.

**Symbolism** is when an object, character, or event represents something beyond its literal meaning. A broken mirror might symbolize a shattered identity. A recurring red door might represent forbidden knowledge. Seasons often carry symbolic weight: spring for renewal, winter for death or dormancy. When analyzing symbols, look for objects that receive unusual attention -- if the author describes something in more detail than the plot requires, it is probably symbolic.

**Irony** comes in three flavors. Verbal irony is when someone says the opposite of what they mean: "What lovely weather," during a storm. Situational irony is when the outcome is the opposite of what was expected: a fire station burns down. Dramatic irony is when the audience knows something the characters do not: we know the letter was never sent, but the character waits by the mailbox every day. Irony creates tension, humor, and depth.

**Foreshadowing** plants clues about future events. A character who mentions feeling cold on a warm day might be hinting at illness to come. A seemingly casual conversation about a locked room creates anticipation. Skilled readers learn to spot foreshadowing, which makes re-reading a rich experience -- you see how carefully the author planned every detail.

**Imagery** appeals to the five senses -- sight, sound, smell, taste, and touch -- to create vivid mental pictures. Strong imagery puts the reader inside the scene. Compare "The house was old" with "The house sagged under the weight of decades, its paint peeling like sunburned skin, the porch creaking a slow protest under every footstep." The second version lets you see, hear, and almost feel the house.`,
    },
    {
      id: 'engelsk-10-3-n-section3',
      type: 'text',
      content: `## Themes and Interpretation: Finding the "So What?"

The theme is the big idea that a story explores. It is not the same as the topic. The topic of a novel might be "war," but the theme might be "war destroys innocence" or "even in war, human connection endures." A theme is a statement about the human condition, expressed through the events and characters of the story.

To identify a theme, ask yourself: What does the protagonist learn? How does the story change their understanding of the world? What message does the resolution convey? If the villain is punished and the hero rewarded, the theme might be about justice. If the ending is ambiguous, the theme might be about the complexity of moral choices.

Most complex texts have multiple themes. A novel might explore love, power, identity, and justice all at once. Your job as an analyst is not to find the single "correct" theme but to identify the themes that resonate most strongly and support your reading with evidence from the text.

Interpretation is where you bring your own thinking to the text. There is no single correct interpretation of a literary work -- but there are interpretations that are better supported. A strong interpretation is grounded in textual evidence (specific quotes and scenes), considers the author's context (when and where they wrote), and acknowledges alternative readings. Saying "I think the green light symbolizes hope because Gatsby always reaches toward it and because green is traditionally associated with growth and possibility" is a strong interpretation. Saying "I think the green light means he likes the color green" is not, because it ignores the text's patterns and context.

When writing literary analysis, use the P.E.E. structure: make a **Point**, provide **Evidence** (a quote or specific reference), and give an **Explanation** of how the evidence supports your point. This structure keeps your analysis focused and convincing.`,
    },
    {
      id: 'engelsk-10-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on literary devices and themes:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-3-n-quiz2-q0',
            task: 'In a story, a character says "What a beautiful day!" while standing in pouring rain with a flat tire. What literary device is this?',
            options: [
              { id: 'a', text: 'Foreshadowing', isCorrect: false },
              { id: 'b', text: 'Symbolism', isCorrect: false },
              { id: 'c', text: 'Verbal irony', isCorrect: true },
              { id: 'd', text: 'Metaphor', isCorrect: false },
            ],
            solution: 'This is verbal irony -- the character says the opposite of what they mean. The statement "What a beautiful day!" contradicts the reality of rain and a flat tire, creating a humorous or bitter effect.',
          },
          {
            id: 'engelsk-10-3-n-quiz2-q1',
            task: 'What is the difference between a topic and a theme?',
            options: [
              { id: 'a', text: 'A topic is longer than a theme', isCorrect: false },
              { id: 'b', text: 'A topic is a subject (e.g., "war"), while a theme is a statement about that subject (e.g., "war destroys innocence")', isCorrect: true },
              { id: 'c', text: 'Topics appear in fiction, themes appear in non-fiction', isCorrect: false },
              { id: 'd', text: 'There is no difference; they are the same thing', isCorrect: false },
            ],
            solution: 'A topic is a broad subject area, while a theme is a specific insight or message about that subject. The topic "friendship" becomes a theme when expressed as "true friendship requires sacrifice" or "friendship can survive distance but not betrayal."',
          },
          {
            id: 'engelsk-10-3-n-quiz2-q2',
            task: 'What does P.E.E. stand for in literary analysis?',
            options: [
              { id: 'a', text: 'Plot, Elements, Evaluation', isCorrect: false },
              { id: 'b', text: 'Point, Evidence, Explanation', isCorrect: true },
              { id: 'c', text: 'Purpose, Example, Effect', isCorrect: false },
              { id: 'd', text: 'Perspective, Evidence, Emotion', isCorrect: false },
            ],
            solution: 'P.E.E. stands for Point, Evidence, Explanation. You make a point about the text, support it with evidence (a quote or specific reference), and then explain how the evidence supports your point. This structure keeps analysis focused and convincing.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-3-n-summary',
      type: 'text',
      content: `## Summary

Literary analysis is the art of reading beneath the surface. **Literary elements** -- characters, setting, plot, conflict, and point of view -- are the building blocks of every story. **Literary devices** -- metaphor, simile, symbolism, irony, foreshadowing, and imagery -- are the tools authors use to create meaning and effect.

**Themes** are the big ideas a text explores, expressed as statements about the human condition rather than single-word topics. Strong **interpretation** is grounded in textual evidence, considers context, and acknowledges alternative readings. Use the P.E.E. structure (Point, Evidence, Explanation) to keep your analysis focused and persuasive. Remember: there is no single correct interpretation, but there are interpretations that are better supported by the text.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 4 NARRATIVE: Media and Society
// ============================================================================

export const CHAPTER_ENGELSK_10_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-4-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '4',
  title: 'Media and Society',
  subtitle: 'Narrative Version',
  description: 'Navigate the modern media landscape with critical thinking, source evaluation, and an understanding of bias.',
  estimatedMinutes: 35,
  competenceGoals: [
    'vurdere og bruke kilder kritisk og reflektere over kildens troverdighet',
    'reflektere over medias rolle og påvirkning i samfunnet',
    'utforske og drøfte samfunnsaktuelle temaer knyttet til engelskspråklige land',
    'bruke digitale ressurser kritisk og kreativt i egen språklæring',
  ],
  linkedChapterId: 'engelsk-10-4',
  content: [
    {
      id: 'engelsk-10-4-n-intro',
      type: 'text',
      content: `## Swimming in a Sea of Information

You wake up and check your phone. Before you have even left your bed, you have scrolled past a news headline, three Instagram stories, a TikTok video claiming to reveal "the truth" about something, a sponsored post disguised as a friend's recommendation, and a tweet from a politician. By the time you sit down for breakfast, you have consumed more information than a person in the 1800s encountered in an entire month.

We live in the age of information abundance. The challenge is no longer finding information -- it is evaluating it. Which of those morning sources was accurate? Which was trying to sell you something? Which was presenting opinion as fact? Which was deliberately misleading? These are the questions that media literacy helps you answer.

Media literacy is not about becoming cynical or distrusting everything you read. It is about developing a healthy, informed skepticism -- the ability to ask good questions before accepting claims. In a world where anyone can publish anything to a global audience in seconds, this skill is not optional. It is essential for functioning as an informed citizen in a democracy.

Let us sharpen your critical thinking tools.`,
    },
    {
      id: 'engelsk-10-4-n-section1',
      type: 'text',
      content: `## Source Evaluation: The CRAAP Test

Librarians and researchers use a framework called the CRAAP test to evaluate sources. The acronym stands for Currency, Relevance, Authority, Accuracy, and Purpose. It sounds humorous, but it is one of the most practical tools you will ever learn.

**Currency** asks: When was this information published or updated? A medical article from 2005 might be dangerously outdated. A historical analysis from 1990 might still be valuable but should be supplemented with newer scholarship. For rapidly changing fields -- technology, medicine, politics -- currency matters enormously. For stable fields -- history, literature, philosophy -- older sources can remain authoritative.

**Relevance** asks: Does this source actually address your specific question? A fascinating article about social media's impact on adults is not relevant if your assignment is about teenagers. Students often include impressive-sounding sources that do not quite match their topic. Stay focused. A perfectly relevant average source is more useful than a brilliant irrelevant one.

**Authority** asks: Who created this information, and what qualifies them? A climate article by a climate scientist published in a peer-reviewed journal carries different weight than a blog post by an anonymous writer. Check the author's credentials, the publication's reputation, and whether the source has been vetted by others in the field. Authority is not about titles -- it is about demonstrated expertise and accountability.

**Accuracy** asks: Is the information supported by evidence? Can it be verified elsewhere? Does the source cite its own sources? Look for specific data, named studies, and verifiable claims. Be wary of vague assertions like "studies show" or "experts say" without naming the studies or experts. Cross-reference key claims with other reputable sources -- if only one source makes a dramatic claim, treat it with caution.

**Purpose** asks: Why was this information created? To inform? To persuade? To sell? To entertain? Every source has a purpose, and understanding that purpose helps you evaluate its reliability. A pharmaceutical company's website about their drug is informative but also promotional. A nonprofit's report on poverty may be accurate but emphasizes data that supports their mission. Purpose does not make a source unreliable, but it does tell you where to look for potential bias.`,
    },
    {
      id: 'engelsk-10-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on source evaluation:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-4-n-quiz1-q0',
            task: 'You find a blog post about climate change written by an anonymous author with no sources cited. Which CRAAP criteria does this source fail?',
            options: [
              { id: 'a', text: 'Currency and Relevance', isCorrect: false },
              { id: 'b', text: 'Authority and Accuracy', isCorrect: true },
              { id: 'c', text: 'Purpose and Currency', isCorrect: false },
              { id: 'd', text: 'Relevance and Purpose', isCorrect: false },
            ],
            solution: 'An anonymous author fails the Authority criterion because you cannot verify their expertise or accountability. No cited sources fails the Accuracy criterion because you cannot verify the claims or trace the evidence.',
          },
          {
            id: 'engelsk-10-4-n-quiz1-q1',
            task: 'A pharmaceutical company publishes a study showing their new drug is highly effective. What CRAAP criterion should you examine most carefully?',
            options: [
              { id: 'a', text: 'Currency', isCorrect: false },
              { id: 'b', text: 'Relevance', isCorrect: false },
              { id: 'c', text: 'Purpose', isCorrect: true },
              { id: 'd', text: 'Authority', isCorrect: false },
            ],
            solution: 'The Purpose criterion is critical here. The company has a financial interest in the drug\'s success, which creates potential bias. This does not automatically make the study wrong, but it means you should seek independent verification and consider whether the data is presented selectively.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-4-n-section2',
      type: 'text',
      content: `## Understanding Bias: How Media Shapes Our Thinking

Bias is a tilt, a lean, a tendency to favor one perspective over others. Every human being has biases, and every media source reflects the biases of its creators. Understanding bias does not mean dismissing biased sources -- it means reading them with awareness.

**Confirmation bias** is our tendency to seek out information that confirms what we already believe and to dismiss information that contradicts it. If you believe that video games cause violence, you will notice every news story that supports that view and overlook studies that show no connection. Social media algorithms exploit this tendency by feeding you content that matches your existing interests and opinions, creating what researchers call a "filter bubble" or "echo chamber."

**Selection bias** in media refers to which stories get covered and which get ignored. A news outlet might report every crime committed by immigrants while ignoring identical crimes by citizens, creating a distorted picture of reality. The stories that make the news are not a random sample -- they are chosen by editors and algorithms with their own priorities and biases.

**Framing** is how a story is presented. The same event can be framed in radically different ways. Consider these two headlines about the same event: "Police Restore Order After Protest Turns Violent" versus "Police Use Force Against Peaceful Demonstrators." Both might describe the same incident, but they create entirely different impressions. Framing shapes how we feel about events before we even read the details.

**Loaded language** uses emotionally charged words to influence readers. Calling someone a "freedom fighter" versus a "terrorist," describing an economic plan as "bold reform" versus "reckless spending," or labeling a group as "activists" versus "extremists" -- these word choices carry implicit judgments. When you notice loaded language, ask: What neutral terms could replace these? What emotional response is the author trying to create?

The goal is not to find perfectly unbiased sources -- they do not exist. The goal is to read multiple sources, identify their biases, and construct a more complete picture by combining different perspectives.`,
    },
    {
      id: 'engelsk-10-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on media bias:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-4-n-quiz2-q0',
            task: 'What is a "filter bubble" in the context of social media?',
            options: [
              { id: 'a', text: 'A tool that blocks inappropriate content', isCorrect: false },
              { id: 'b', text: 'An algorithm-created environment that only shows you content matching your existing views', isCorrect: true },
              { id: 'c', text: 'A privacy setting that protects your personal data', isCorrect: false },
              { id: 'd', text: 'A feature that filters out fake news automatically', isCorrect: false },
            ],
            solution: 'A filter bubble is an algorithm-created environment where you are primarily shown content that aligns with your existing beliefs and interests. This reinforces confirmation bias by limiting your exposure to diverse perspectives and opposing viewpoints.',
          },
          {
            id: 'engelsk-10-4-n-quiz2-q1',
            task: 'Two headlines describe the same event differently: "Brave Protesters Demand Justice" and "Angry Mob Disrupts City Center." What media concept does this illustrate?',
            options: [
              { id: 'a', text: 'Confirmation bias', isCorrect: false },
              { id: 'b', text: 'Selection bias', isCorrect: false },
              { id: 'c', text: 'Framing and loaded language', isCorrect: true },
              { id: 'd', text: 'The CRAAP test', isCorrect: false },
            ],
            solution: 'This illustrates both framing (how the same event is presented) and loaded language (emotionally charged words like "brave" vs. "angry," "demand justice" vs. "disrupts"). Each headline creates a different emotional response and shapes the reader\'s perception before they read the article.',
          },
          {
            id: 'engelsk-10-4-n-quiz2-q2',
            task: 'What is the best strategy for dealing with media bias?',
            options: [
              { id: 'a', text: 'Only trust one reliable news source', isCorrect: false },
              { id: 'b', text: 'Avoid all news media entirely', isCorrect: false },
              { id: 'c', text: 'Read multiple sources, identify their biases, and combine perspectives', isCorrect: true },
              { id: 'd', text: 'Only trust sources that confirm your existing beliefs', isCorrect: false },
            ],
            solution: 'Since no source is perfectly unbiased, the best approach is to consult multiple sources with different perspectives, identify each source\'s biases, and construct a more complete picture by synthesizing the information. This is the foundation of critical media literacy.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-4-n-summary',
      type: 'text',
      content: `## Summary

In the age of information abundance, **media literacy** is essential. The **CRAAP test** -- Currency, Relevance, Authority, Accuracy, and Purpose -- provides a systematic framework for evaluating any source. Every criterion helps you ask the right questions before accepting information at face value.

**Bias** is present in all media. **Confirmation bias** makes us favor information that confirms our beliefs. **Selection bias** determines which stories get covered. **Framing** shapes how events are presented, and **loaded language** uses emotionally charged words to influence readers. The solution is not to find unbiased sources (they do not exist) but to read widely, identify biases, and synthesize multiple perspectives into a more complete understanding. In a democracy, informed citizens are the best defense against misinformation.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// FINAL EXPORT
// ============================================================================

export const ENGELSK_10_NARRATIV_DEL1_CHAPTERS = [
  CHAPTER_ENGELSK_10_1_NARRATIV,
  CHAPTER_ENGELSK_10_2_NARRATIV,
  CHAPTER_ENGELSK_10_3_NARRATIV,
  CHAPTER_ENGELSK_10_4_NARRATIV,
];
