/**
 * Tekstbok innhold for Engelsk 10. klasse - Del 5 (Kapittel 11-16)
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Tema: Language and Grammar Mastery — grammatikk, setningsstruktur, ordforråd,
 * rettskriving, oversettelse og register/tone.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 11: Grammar Review — Verb Tenses
// ============================================================================

export const CHAPTER_ENGELSK_10_11: TextbookChapter = {
  id: 'engelsk-10-11',
  courseId: 'engelsk-10',
  chapterNumber: '11',
  title: 'Grammar Review — Verb Tenses',
  description: 'A thorough review of English verb tenses — from simple present to past perfect continuous. Learn when and why each tense is used, and avoid the most common mistakes Norwegian students make.',
  estimatedMinutes: 90,
  competenceGoals: [
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'utforske og bruke et variert ordforråd og idiomatiske uttrykk tilpasset kommunikasjonssituasjonen',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-11-intro',
      type: 'text',
      content: `## Grammar Review — Verb Tenses

Verb tenses are one of the most important building blocks of English. Choosing the right tense helps your reader understand **when** something happens, **how long** it lasts, and **whether it is finished or still going on**.

Norwegian and English handle tenses differently in several key areas, which is why tense errors are among the most common mistakes Norwegian students make on exams.

**In this chapter you will learn to:**

1. Distinguish between the main English tenses and when to use them
2. Recognise the difference between simple, continuous, and perfect aspects
3. Avoid typical Norwegian-to-English tense errors
4. Use tenses consistently in longer texts

**Overview of the English tense system:**

| Aspect | Past | Present | Future |
|---|---|---|---|
| **Simple** | I walked | I walk | I will walk |
| **Continuous** | I was walking | I am walking | I will be walking |
| **Perfect** | I had walked | I have walked | I will have walked |
| **Perfect continuous** | I had been walking | I have been walking | I will have been walking |

That gives us **twelve** core tenses. Do not worry — you do not need to memorise the whole table at once. We will work through them step by step.`,
    },

    // ========== DEFINISJON 1: SIMPLE TENSES ==========
    {
      id: 'engelsk-10-11-def-1',
      type: 'definition',
      title: 'The Simple Tenses',
      content: `The **simple tenses** describe actions as complete facts or habits. They do not emphasise duration or connection to another point in time.

**1. Simple Present**
Used for habits, general truths, and permanent situations.
- *"She speaks three languages."* (permanent ability)
- *"Water boils at 100 °C."* (general truth)
- *"I usually walk to school."* (habit)

**Signal words:** always, usually, often, sometimes, never, every day

**2. Simple Past**
Used for completed actions at a specific time in the past.
- *"We visited London last summer."*
- *"He scored two goals in the match yesterday."*

**Signal words:** yesterday, last week, in 2019, ago, when I was young

**3. Simple Future (will / going to)**
Used for predictions, spontaneous decisions, and planned intentions.
- *"It will rain tomorrow."* (prediction)
- *"I'll help you with that."* (spontaneous decision)
- *"We are going to move to Bergen next year."* (planned intention)

**Common Norwegian mistake:** Using present tense where English requires *will*.
- Wrong: *"I call you later."*
- Correct: *"I will call you later."*`,
    },

    // ========== EKSEMPEL 1: SIMPLE TENSES ==========
    {
      id: 'engelsk-10-11-example-1',
      type: 'example',
      title: 'Example: Choosing the right simple tense',
      problem: `Fill in the correct simple tense of the verb in brackets:

1. She ______ (live) in Oslo since she was born.
2. Yesterday we ______ (go) to the cinema.
3. The sun ______ (rise) in the east.
4. I think it ______ (snow) tomorrow.`,
      solution: `1. **lives** — Simple present, because it describes a permanent situation that is still true now. (Note: "since she was born" might tempt you to use present perfect — *has lived* — which is also correct and arguably better here. Both are acceptable.)

2. **went** — Simple past, because "yesterday" tells us the action is completed at a specific past time.

3. **rises** — Simple present, because this is a general, scientific truth.

4. **will snow** — Simple future, because we are making a prediction about the future.

**Key takeaway:** Signal words like *yesterday*, *every day*, and *tomorrow* are strong clues, but always think about the **meaning** — is the action finished, habitual, or upcoming?`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-11-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-ex-1',
        number: '11.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which sentence uses the simple past correctly?',
        options: [
          {
            id: 'a',
            text: '"I have seen that film last Friday."',
            isCorrect: false,
            feedback: 'Incorrect. "Last Friday" is a specific past time, so you need simple past: "I saw that film last Friday." Present perfect cannot be used with a finished, specific time expression.',
          },
          {
            id: 'b',
            text: '"She went to Spain two years ago."',
            isCorrect: true,
            feedback: 'Correct! "Two years ago" is a specific past time, and "went" is the simple past of "go". This is a completed action at a defined point in the past.',
          },
          {
            id: 'c',
            text: '"They was very happy yesterday."',
            isCorrect: false,
            feedback: 'Incorrect. "They" requires "were", not "was". The correct form is: "They were very happy yesterday."',
          },
          {
            id: 'd',
            text: '"He did not went to the party."',
            isCorrect: false,
            feedback: 'Incorrect. After "did not" we use the base form of the verb: "He did not go to the party."',
          },
        ],
        solution: '"She went to Spain two years ago." — simple past with a specific past time marker ("two years ago").',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-11-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-ex-2',
        number: '11.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Complete each sentence with the correct simple tense of the verb in brackets.',
        subTasks: [
          {
            label: 'a',
            task: '"The train ______ (leave) at 8:15 every morning."',
            solution: 'leaves — Simple present for a timetable or scheduled event.',
            multipleChoiceOptions: ['leaves', 'left', 'will leave', 'is leaving'],
          },
          {
            label: 'b',
            task: '"I ______ (not understand) the homework yesterday."',
            solution: 'did not understand — Simple past with "yesterday".',
            multipleChoiceOptions: ['did not understand', 'do not understand', 'have not understood', 'was not understanding'],
          },
          {
            label: 'c',
            task: '"She ______ (travel) to Japan next summer."',
            solution: 'will travel / is going to travel — Simple future for a planned event.',
            multipleChoiceOptions: ['will travel', 'travels', 'travelled', 'has travelled'],
          },
        ],
        solution: 'a) leaves, b) did not understand, c) will travel. Signal words (every morning, yesterday, next summer) help you identify the correct tense.',
      },
    },

    // ========== DEFINISJON 2: CONTINUOUS TENSES ==========
    {
      id: 'engelsk-10-11-def-2',
      type: 'definition',
      title: 'The Continuous (Progressive) Tenses',
      content: `The **continuous tenses** (also called progressive) emphasise that an action is **in progress** at a particular moment. They are formed with a form of *be* + verb-*ing*.

**1. Present Continuous**
An action happening right now or around this time.
- *"She is reading a book."* (right now)
- *"I am studying harder this term."* (around this period)

**2. Past Continuous**
An action that was in progress at a specific moment in the past. Often used as background for another event.
- *"I was watching TV when the phone rang."*
- *"They were playing football at 3 pm yesterday."*

**3. Future Continuous**
An action that will be in progress at a specific future moment.
- *"This time tomorrow, I will be sitting on the plane."*
- *"At 8 pm tonight, we will be eating dinner."*

**Simple vs. Continuous — the key difference:**

| Simple | Continuous |
|---|---|
| Completed or habitual action | Action in progress |
| *"I read two books last week."* (finished) | *"I was reading when you called."* (in progress) |
| *"She works at a hospital."* (permanent) | *"She is working late tonight."* (temporary) |

**Stative verbs** (know, believe, love, want, own, seem, etc.) are normally **not** used in continuous form.
- Wrong: *"I am knowing the answer."*
- Correct: *"I know the answer."*`,
    },

    // ========== EKSEMPEL 2: CONTINUOUS ==========
    {
      id: 'engelsk-10-11-example-2',
      type: 'example',
      title: 'Example: Simple past vs. past continuous',
      problem: `Choose the correct form:

"When the teacher ______ (enter) the classroom, the students ______ (talk) loudly."`,
      solution: `**Correct answer:**
"When the teacher **entered** the classroom, the students **were talking** loudly."

**Why?**
- *entered* — simple past. This is a short, completed action that interrupts the other.
- *were talking* — past continuous. This is the longer, background action that was already in progress.

**The pattern:** When a short action interrupts a longer one, use:
- **Past continuous** for the background (longer action)
- **Simple past** for the interruption (shorter action)

More examples:
- *"I was cooking dinner when the fire alarm went off."*
- *"She was walking home when it started to rain."*
- *"They were sleeping when the earthquake hit."*`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-11-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-ex-3',
        number: '11.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which sentence correctly uses the past continuous?',
        options: [
          {
            id: 'a',
            text: '"I was doing my homework when the power went out."',
            isCorrect: true,
            feedback: 'Correct! "Was doing" is the longer background action (past continuous), and "went out" is the short interruption (simple past).',
          },
          {
            id: 'b',
            text: '"I was knowing the answer, but I forgot it."',
            isCorrect: false,
            feedback: 'Incorrect. "Know" is a stative verb and cannot normally be used in the continuous form. The correct version is: "I knew the answer, but I forgot it."',
          },
          {
            id: 'c',
            text: '"She was cook dinner at 6 pm."',
            isCorrect: false,
            feedback: 'Incorrect. The continuous form requires verb + -ing: "She was cooking dinner at 6 pm."',
          },
          {
            id: 'd',
            text: '"They was playing football when it rained."',
            isCorrect: false,
            feedback: 'Incorrect. "They" requires "were", not "was": "They were playing football when it rained."',
          },
        ],
        solution: '"I was doing my homework when the power went out." Past continuous for the longer action, simple past for the interruption.',
      },
    },

    // ========== DEFINISJON 3: PERFECT TENSES ==========
    {
      id: 'engelsk-10-11-def-3',
      type: 'definition',
      title: 'The Perfect Tenses',
      content: `The **perfect tenses** connect two points in time. They show that an action is relevant to — or completed before — another moment.

**1. Present Perfect (have/has + past participle)**
Links past to present. Used when the exact time does not matter, or the action has current relevance.
- *"I have visited Paris three times."* (experience up to now)
- *"She has lost her keys."* (the result matters now — she cannot get in)
- *"We have lived here since 2018."* (started in the past, still true)

**Signal words:** already, yet, ever, never, just, since, for, so far, recently

**2. Past Perfect (had + past participle)**
Shows that one past action happened **before** another past action.
- *"When we arrived, the film had already started."*
- *"She was tired because she had not slept well."*

**Think of it as "the past of the past".**

**3. Future Perfect (will have + past participle)**
An action that will be completed before a specific future moment.
- *"By next Friday, I will have finished the project."*
- *"They will have left by the time you get here."*

**The most important rule for Norwegian students:**
English uses present perfect where Norwegian uses simple past when no specific time is mentioned.
- Norwegian thinking: *"Jeg har sett den filmen."* → *"I have seen that film."* (correct)
- But with a time: *"Jeg så den filmen i går."* → *"I saw that film yesterday."* (NOT *have seen*)

**Never** combine present perfect with a finished, specific time expression (yesterday, last week, in 2019, etc.).`,
    },

    // ========== EKSEMPEL 3: PERFECT ==========
    {
      id: 'engelsk-10-11-example-3',
      type: 'example',
      title: 'Example: Present perfect vs. simple past',
      problem: `Decide whether to use present perfect or simple past:

1. I ______ (be) to London. (no specific time)
2. I ______ (be) to London last year. (specific time)
3. She ______ (work) here for five years. (still works here)
4. She ______ (work) here for five years, then she quit. (no longer works here)`,
      solution: `1. **have been** — Present perfect. No time is mentioned; the experience is what matters.

2. **was** — Simple past. "Last year" is a specific, completed past time.

3. **has worked** — Present perfect. She started five years ago and still works here (the action connects past to present).

4. **worked** — Simple past. The entire five-year period is finished and she no longer works here.

**Key insight:** The same phrase ("for five years") can appear with either tense. The deciding factor is whether the situation is still true now (present perfect) or entirely finished (simple past).`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-11-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-ex-4',
        number: '11.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Choose present perfect or simple past for each sentence. Explain your choice.',
        subTasks: [
          {
            label: 'a',
            task: '"I ______ (never / eat) sushi before."',
            solution: 'have never eaten — Present perfect because "never" + "before" indicates life experience up to now, with no specific time.',
            multipleChoiceOptions: ['have never eaten', 'never ate', 'was never eating', 'had never eaten'],
          },
          {
            label: 'b',
            task: '"We ______ (move) to this town in 2020."',
            solution: 'moved — Simple past because "in 2020" is a specific completed time.',
            multipleChoiceOptions: ['moved', 'have moved', 'were moving', 'had moved'],
          },
          {
            label: 'c',
            task: '"She ______ (already / finish) her homework."',
            solution: 'has already finished — Present perfect because "already" signals a connection to the present moment (she is done now).',
            multipleChoiceOptions: ['has already finished', 'already finished', 'was already finishing', 'already finishes'],
          },
          {
            label: 'd',
            task: '"They ______ (play) three matches so far this season."',
            solution: 'have played — Present perfect because "so far this season" means the season is still ongoing.',
            multipleChoiceOptions: ['have played', 'played', 'were playing', 'had played'],
          },
        ],
        solution: 'a) have never eaten, b) moved, c) has already finished, d) have played. The key is whether the time frame is still open (present perfect) or closed (simple past).',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-11-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-ex-5',
        number: '11.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which sentence uses the past perfect correctly?',
        options: [
          {
            id: 'a',
            text: '"By the time we arrived, the concert had already ended."',
            isCorrect: true,
            feedback: 'Correct! Two past events: arriving and the concert ending. The concert ended first (earlier past), so it takes past perfect. Arriving is the reference point in simple past.',
          },
          {
            id: 'b',
            text: '"I had eaten breakfast this morning."',
            isCorrect: false,
            feedback: 'Incorrect. There is no second past event to relate to. "This morning" on its own takes simple past ("I ate breakfast this morning") or present perfect ("I have eaten breakfast this morning").',
          },
          {
            id: 'c',
            text: '"She had went to the shop before lunch."',
            isCorrect: false,
            feedback: 'Incorrect. The past participle of "go" is "gone", not "went". It should be: "She had gone to the shop before lunch."',
          },
          {
            id: 'd',
            text: '"We had been happy since always."',
            isCorrect: false,
            feedback: 'Incorrect. "Since always" is not standard English. Also, if the happiness is still ongoing, present perfect is more appropriate: "We have been happy for as long as we can remember."',
          },
        ],
        solution: '"By the time we arrived, the concert had already ended." Past perfect places one past event before another past event.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-11-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-ex-6',
        number: '11.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Correct the tense errors in these sentences. Some sentences may have more than one error.',
        subTasks: [
          {
            label: 'a',
            task: '"I have visited my grandmother last Sunday."',
            solution: '"I visited my grandmother last Sunday." — "Last Sunday" is a specific past time, so simple past is needed, not present perfect.',
          },
          {
            label: 'b',
            task: '"She is living in Bergen since 2015."',
            solution: '"She has been living in Bergen since 2015." (or "She has lived in Bergen since 2015.") — "Since" requires present perfect (or present perfect continuous) to connect past to present.',
          },
          {
            label: 'c',
            task: '"When I came home, my brother already ate all the pizza."',
            solution: '"When I came home, my brother had already eaten all the pizza." — The eating happened before the coming home, so the earlier event takes past perfect.',
          },
          {
            label: 'd',
            task: '"I am knowing the answer to this question."',
            solution: '"I know the answer to this question." — "Know" is a stative verb and is not used in the continuous form.',
          },
        ],
        hints: [
          'Look for time expressions that tell you whether the action is finished or ongoing.',
          'Remember: stative verbs (know, believe, love, want) cannot normally be continuous.',
        ],
        solution: 'a) visited (specific past time), b) has been living / has lived (since + present perfect), c) had already eaten (past before past), d) know (stative verb).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-11-summary',
      type: 'text',
      content: `## Summary — Verb Tenses

**Simple tenses** — describe completed or habitual actions
- Present: *I walk* (habit / truth)
- Past: *I walked* (finished action at a specific time)
- Future: *I will walk* (prediction / decision)

**Continuous tenses** — emphasise that an action is in progress
- Present continuous: *I am walking* (right now)
- Past continuous: *I was walking* (background action in the past)
- Stative verbs (know, love, believe, want, own) are **not** used in continuous form.

**Perfect tenses** — connect two points in time
- Present perfect: *I have walked* (past action with present relevance; no specific time)
- Past perfect: *I had walked* (the "past of the past")
- Future perfect: *I will have walked* (completed before a future moment)

**Golden rules for Norwegian students:**
1. **Never** use present perfect with a specific finished time (yesterday, last week, in 2019).
2. **Do** use present perfect with *since*, *for*, *ever*, *never*, *already*, *yet*, *so far*.
3. When a short action interrupts a longer one, use simple past + past continuous.
4. Past perfect is only needed when two past events must be clearly ordered.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-11-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-ex-7',
        number: '11.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Fill in the correct tense of the verb in brackets. The paragraph uses several different tenses — think carefully about each one.',
        subTasks: [
          {
            label: 'a',
            task: `"My family ______ (live) in Tromsø for ten years now. Before that, we ______ (live) in Stavanger. We ______ (move) because my mother ______ (get) a new job. Right now, my sister ______ (study) for her exams, and I ______ (just / finish) mine. Next summer, we ______ (travel) to Iceland — we ______ (never / be) there before."`,
            solution: '"My family has lived (or has been living) in Tromsø for ten years now. Before that, we lived in Stavanger. We moved because my mother had got (or got) a new job. Right now, my sister is studying for her exams, and I have just finished mine. Next summer, we will travel (or are going to travel) to Iceland — we have never been there before."',
          },
        ],
        hints: [
          'Read the whole paragraph first to understand the timeline.',
          'Look for signal words: "for ten years now", "before that", "right now", "just", "next summer", "never...before".',
        ],
        solution: 'The paragraph moves through present perfect, simple past, past perfect, present continuous, present perfect, future, and present perfect. Each signal word points to a specific tense.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-11-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-ex-8',
        number: '11.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a short paragraph (80-120 words) about a memorable trip or experience. Use at least four different tenses and underline each verb, labelling the tense you used.',
        hints: [
          'Use simple past for events that happened at a specific time.',
          'Use past continuous for background descriptions ("The sun was shining...").',
          'Use present perfect for how the experience affects you now.',
          'Use simple present for general truths or current opinions.',
        ],
        solution: 'A strong answer uses at least four different tenses correctly and labels them. Example opening: "Last summer, I travelled (simple past) to the Lofoten Islands. I had never been (past perfect) there before. When we arrived, the midnight sun was shining (past continuous) over the mountains. I have always loved (present perfect) nature, and Lofoten is (simple present) one of the most beautiful places I have ever seen (present perfect)."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Simple present', definition: 'A tense used for habits, routines, and general truths (e.g. "She walks to school every day")' },
    { term: 'Simple past', definition: 'A tense used for completed actions at a specific time in the past (e.g. "I visited London last year")' },
    { term: 'Present perfect', definition: 'A tense that connects past actions to the present, used without specific past time (e.g. "I have seen that film")' },
    { term: 'Past perfect', definition: 'A tense that shows one past action happened before another past action (e.g. "She had left before I arrived")' },
    { term: 'Continuous / Progressive', definition: 'Verb forms using be + -ing that emphasise an action in progress (e.g. "I was reading when you called")' },
    { term: 'Stative verb', definition: 'A verb describing a state rather than an action (know, believe, love, want) — normally not used in continuous form' },
    { term: 'Signal word', definition: 'A time expression that helps identify which tense to use (yesterday, since, already, right now, etc.)' },
    { term: 'Past participle', definition: 'The third form of a verb, used in perfect tenses (walked, eaten, gone, written, etc.)' },
  ],
};

// ============================================================================
// KAPITTEL 12: Sentence Structure and Word Order
// ============================================================================

export const CHAPTER_ENGELSK_10_12: TextbookChapter = {
  id: 'engelsk-10-12',
  courseId: 'engelsk-10',
  chapterNumber: '12',
  title: 'Sentence Structure and Word Order',
  description: 'Master English word order — from basic SVO patterns to inversions, fronted adverbials, and complex sentences. Understand how English and Norwegian word order differ.',
  estimatedMinutes: 85,
  competenceGoals: [
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-12-intro',
      type: 'text',
      content: `## Sentence Structure and Word Order

English has a stricter word order than Norwegian. In Norwegian, you can move parts of the sentence around fairly freely and still be understood. In English, changing the word order often changes the meaning — or makes the sentence grammatically wrong.

Understanding word order is essential for writing clear, correct English. It is also one of the areas where Norwegian students lose the most marks on exams, because they transfer Norwegian patterns directly into English.

**In this chapter you will learn:**

1. The basic SVO (Subject–Verb–Object) pattern
2. Where to place adverbs and adverbials
3. The "inversion trap" — why Norwegian word order fails in English
4. How to build complex sentences with clauses
5. How to vary sentence structure for better writing`,
    },

    // ========== DEFINISJON 1: SVO ==========
    {
      id: 'engelsk-10-12-def-1',
      type: 'definition',
      title: 'The SVO Rule — Subject, Verb, Object',
      content: `English follows the **SVO** pattern: **Subject** comes first, then the **Verb**, then the **Object** (or complement).

**Basic pattern:**
- *"The cat (S) caught (V) a mouse (O)."*
- *"She (S) reads (V) books (O) every evening."*

**Questions flip the subject and (auxiliary) verb:**
- Statement: *"She is happy."*
- Question: *"Is she happy?"*

**Negation adds "not" after the auxiliary:**
- *"She does not like pizza."*
- *"They are not coming."*

**The critical difference from Norwegian — the inversion rule:**

In Norwegian, when you start a sentence with an adverbial (time, place, etc.), the verb and subject swap places:
- Norwegian: *"I går **gikk** **jeg** til skolen."* (Yesterday walked I to school)

In English, the subject stays before the verb, even when the sentence starts with an adverbial:
- English: *"Yesterday **I walked** to school."* (NOT: "Yesterday walked I to school")

**This is the single most common word order mistake Norwegian students make.**

More examples of the V2 trap:
- Wrong: *"Never have I seen..."* is only correct in very formal/literary English.
- Wrong: *"Always am I late."* → Correct: *"I am always late."*
- Wrong: *"In the garden played the children."* → Correct: *"The children played in the garden."*`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-12-example-1',
      type: 'example',
      title: 'Example: Fixing Norwegian word order in English',
      problem: `A Norwegian student wrote these sentences. Identify and correct the word order errors:

1. "Last summer went we to Greece."
2. "In my family are we five people."
3. "Maybe comes she to the party tonight."
4. "On Saturdays play I usually football."`,
      solution: `**Corrections:**

1. *"Last summer **we went** to Greece."*
   — The subject "we" must come before the verb "went", even though the sentence starts with a time expression.

2. *"In my family **there are** five people."* or *"**We are** five people in my family."*
   — In English, "In my family are we..." is incorrect. You need to restructure.

3. *"Maybe **she will come** to the party tonight."* or *"**She might come** to the party tonight."*
   — "Maybe comes she" follows Norwegian V2 word order. In English, the subject stays before the verb.

4. *"On Saturdays **I usually play** football."*
   — The subject "I" must come before the verb "play". The adverb "usually" goes between subject and main verb.

**The pattern:** Whenever you start an English sentence with an adverbial (time, place, maybe, etc.), make sure the subject still comes before the verb.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-12-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-ex-1',
        number: '12.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which sentence has correct English word order?',
        options: [
          {
            id: 'a',
            text: '"Every morning walks she to school."',
            isCorrect: false,
            feedback: 'Incorrect. This follows Norwegian V2 word order. In English: "Every morning she walks to school."',
          },
          {
            id: 'b',
            text: '"Every morning she walks to school."',
            isCorrect: true,
            feedback: 'Correct! Even though the sentence starts with a time expression, the subject ("she") comes before the verb ("walks") in English.',
          },
          {
            id: 'c',
            text: '"She every morning walks to school."',
            isCorrect: false,
            feedback: 'Incorrect. "Every morning" should not be placed between the subject and verb. It sounds more natural at the beginning or end of the sentence.',
          },
          {
            id: 'd',
            text: '"Walks she every morning to school."',
            isCorrect: false,
            feedback: 'Incorrect. Starting with the verb creates a question structure in English ("Does she walk...?"), not a statement.',
          },
        ],
        solution: '"Every morning she walks to school." The subject always comes before the verb in English statements, regardless of what comes at the beginning.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-12-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-ex-2',
        number: '12.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Rewrite these sentences with correct English word order.',
        subTasks: [
          {
            label: 'a',
            task: '"Tomorrow will we visit our grandparents."',
            solution: '"Tomorrow we will visit our grandparents." — Subject (we) before verb (will visit).',
          },
          {
            label: 'b',
            task: '"At school have I many friends."',
            solution: '"At school I have many friends." or "I have many friends at school." — Subject before verb.',
          },
          {
            label: 'c',
            task: '"Often goes he to the gym after work."',
            solution: '"He often goes to the gym after work." — Subject before verb, frequency adverb between them.',
          },
          {
            label: 'd',
            task: '"In Norway is the winter very cold."',
            solution: '"In Norway the winter is very cold." or "The winter is very cold in Norway." — Subject before verb.',
          },
        ],
        solution: 'In every case, the fix is the same: make sure the subject comes before the verb. English does not use V2 inversion in ordinary statements.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: ADVERB PLACEMENT ==========
    {
      id: 'engelsk-10-12-def-2',
      type: 'definition',
      title: 'Adverb Placement in English',
      content: `English has specific rules about where adverbs go in a sentence. Placing them in the wrong position is a common error.

**1. Frequency adverbs** (always, usually, often, sometimes, never, rarely)
Go **between the subject and the main verb**, or **after the first auxiliary**:
- *"I **always** eat breakfast."*
- *"She **never** complains."*
- *"He has **always** been kind."*
- *"They are **usually** late."*

**2. Adverbs of manner** (quickly, carefully, well, badly)
Usually go **after the verb or object**:
- *"She sings **beautifully**."*
- *"He finished the test **quickly**."*
- NOT: *"She beautifully sings."* (sounds unnatural)

**3. Adverbs of time** (yesterday, today, tomorrow, last week)
Usually go at the **beginning** or **end** of the sentence:
- *"**Yesterday** I went to the shop."*
- *"I went to the shop **yesterday**."*

**4. Adverbs of place** (here, there, outside, upstairs)
Usually go **after the verb or object**:
- *"She waited **outside**."*
- *"Put the book **there**."*

**5. "Also", "too", "as well"**
- *also* goes before the main verb: *"I **also** speak French."*
- *too* and *as well* go at the end: *"I speak French **too**."*

**The general order when multiple adverbs appear:**
**Manner → Place → Time** (MPT)
- *"She sang **beautifully** (manner) **at the concert** (place) **last night** (time)."*`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-12-example-2',
      type: 'example',
      title: 'Example: Placing adverbs correctly',
      problem: `Place the adverb in the correct position:

1. She is late. (always)
2. I have been to Spain. (never)
3. He drives to work. (carefully, every day)
4. They finished the project. (quickly, yesterday)`,
      solution: `1. *"She is **always** late."*
   — Frequency adverb goes after "is" (the verb *be*).

2. *"I have **never** been to Spain."*
   — Frequency adverb goes after the first auxiliary ("have").

3. *"He drives **carefully** to work **every day**."*
   — Manner adverb after verb, time adverb at the end. (Also acceptable: "Every day he drives carefully to work.")

4. *"They finished the project **quickly** **yesterday**."* or *"**Yesterday** they quickly finished the project."*
   — Manner before time (MPT rule). Moving "yesterday" to the front is also natural.

**Tip:** When in doubt, read the sentence aloud. If it sounds awkward, try moving the adverb.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-12-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-ex-3',
        number: '12.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Insert the adverb in the correct position. Rewrite the full sentence.',
        subTasks: [
          {
            label: 'a',
            task: '"She has finished her homework." (already)',
            solution: '"She has already finished her homework." — "Already" goes after the auxiliary "has".',
            multipleChoiceOptions: ['She has already finished her homework.', 'She already has finished her homework.', 'Already she has finished her homework.', 'She has finished already her homework.'],
          },
          {
            label: 'b',
            task: '"I eat vegetables." (rarely)',
            solution: '"I rarely eat vegetables." — Frequency adverb between subject and main verb.',
            multipleChoiceOptions: ['I rarely eat vegetables.', 'I eat rarely vegetables.', 'Rarely I eat vegetables.', 'I eat vegetables rarely.'],
          },
          {
            label: 'c',
            task: '"They played in the park." (happily, yesterday)',
            solution: '"They played happily in the park yesterday." or "Yesterday they played happily in the park." — Manner, place, time.',
            multipleChoiceOptions: ['They played happily in the park yesterday.', 'They happily played in the park yesterday.', 'Yesterday happily they played in the park.', 'They played yesterday happily in the park.'],
          },
        ],
        solution: 'a) She has already finished, b) I rarely eat, c) played happily in the park yesterday. Follow the rules: frequency adverbs before main verb / after auxiliary; manner before place before time.',
      },
    },

    // ========== DEFINISJON 3: COMPLEX SENTENCES ==========
    {
      id: 'engelsk-10-12-def-3',
      type: 'definition',
      title: 'Building Complex Sentences',
      content: `Using only short, simple sentences makes your writing choppy. Combining clauses into **complex sentences** makes your texts more fluent and sophisticated.

**Types of clauses:**

**1. Independent clause** — can stand alone as a sentence.
- *"She studied hard."*

**2. Dependent (subordinate) clause** — cannot stand alone; needs an independent clause.
- *"because she wanted good grades"* (incomplete on its own)

**Combining them:**
- *"She studied hard **because** she wanted good grades."*

**Common subordinating conjunctions:**
- **Cause/reason:** because, since, as
- **Time:** when, while, before, after, until, as soon as
- **Contrast:** although, even though, whereas, while
- **Condition:** if, unless, provided that, as long as
- **Purpose:** so that, in order to

**Coordinating conjunctions (FANBOYS):**
Join two independent clauses: **For, And, Nor, But, Or, Yet, So**
- *"I was tired, **but** I kept working."*
- *"She likes coffee, **and** he prefers tea."*

**Relative clauses** add information about a noun:
- **who/that** for people: *"The student **who sits** next to me is from Spain."*
- **which/that** for things: *"The book **that I borrowed** was excellent."*
- **where** for places: *"The school **where I study** is very old."*
- **when** for times: *"I remember the day **when we first met**."*

**Punctuation tip:** When the dependent clause comes **first**, use a comma before the independent clause:
- *"**Although it was raining,** we went for a walk."*
- *"We went for a walk **although it was raining**."* (no comma needed)`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-12-example-3',
      type: 'example',
      title: 'Example: Combining short sentences',
      problem: `Combine each pair of short sentences into one complex sentence using an appropriate conjunction or relative pronoun.

1. "She was tired. She stayed up late to finish the essay."
2. "The weather was terrible. We decided to go hiking anyway."
3. "I met a girl. She speaks four languages."`,
      solution: `1. *"**Although** she was tired, she stayed up late to finish the essay."*
   — "Although" shows contrast between being tired and staying up.
   — Alternative: *"She stayed up late to finish the essay **even though** she was tired."*

2. *"**Even though** the weather was terrible, we decided to go hiking anyway."*
   — Or: *"The weather was terrible, **but** we decided to go hiking anyway."*
   — "Even though" (subordinating) and "but" (coordinating) both work.

3. *"I met a girl **who** speaks four languages."*
   — "Who" introduces a relative clause giving extra information about "a girl".

**Notice how combining sentences:**
- Removes repetition
- Shows the logical relationship between ideas
- Makes the writing flow more naturally`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-12-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-ex-4',
        number: '12.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which sentence correctly combines the two ideas: "It was raining heavily" and "We cancelled the barbecue"?',
        options: [
          {
            id: 'a',
            text: '"Because it was raining heavily, we cancelled the barbecue."',
            isCorrect: true,
            feedback: 'Correct! "Because" shows the cause-effect relationship. The comma after the dependent clause (which comes first) is correctly placed.',
          },
          {
            id: 'b',
            text: '"It was raining heavily, we cancelled the barbecue."',
            isCorrect: false,
            feedback: 'Incorrect. This is a "comma splice" — two independent clauses joined only by a comma. You need a conjunction (because, so) or a semicolon.',
          },
          {
            id: 'c',
            text: '"We cancelled the barbecue, because it was raining heavily."',
            isCorrect: false,
            feedback: 'Almost correct, but there should be no comma before "because" when the independent clause comes first. The sentence should be: "We cancelled the barbecue because it was raining heavily."',
          },
          {
            id: 'd',
            text: '"It was raining heavily because we cancelled the barbecue."',
            isCorrect: false,
            feedback: 'Incorrect. This reverses the cause and effect — it says the rain happened because of the cancellation, which makes no sense.',
          },
        ],
        solution: '"Because it was raining heavily, we cancelled the barbecue." The dependent clause (reason) comes first, followed by a comma, then the independent clause (result).',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-12-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-ex-5',
        number: '12.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Combine each pair of sentences into one complex sentence. Use the conjunction or relative pronoun suggested in brackets.',
        subTasks: [
          {
            label: 'a',
            task: '"He failed the test. He did not study enough." (because)',
            solution: '"He failed the test because he did not study enough." or "Because he did not study enough, he failed the test."',
          },
          {
            label: 'b',
            task: '"I will call you. I arrive at the airport." (as soon as)',
            solution: '"I will call you as soon as I arrive at the airport." or "As soon as I arrive at the airport, I will call you."',
          },
          {
            label: 'c',
            task: '"This is the teacher. She helped me with my project." (who)',
            solution: '"This is the teacher who helped me with my project."',
          },
          {
            label: 'd',
            task: '"He speaks English fluently. He has never lived abroad." (although)',
            solution: '"Although he has never lived abroad, he speaks English fluently." or "He speaks English fluently although he has never lived abroad."',
          },
        ],
        hints: [
          'When the dependent clause comes first, add a comma before the independent clause.',
          '"Who" replaces the person in the second sentence.',
        ],
        solution: 'Combining sentences with conjunctions and relative pronouns shows the reader how your ideas connect. It is an essential skill for exam writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-12-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-ex-6',
        number: '12.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rewrite this choppy paragraph by combining sentences. Use at least three different conjunctions or relative pronouns. Keep the meaning the same.',
        subTasks: [
          {
            label: 'a',
            task: `"My neighbour is called Erik. He is 80 years old. He fought in the resistance during World War II. He never talks about it. He thinks the memories are too painful. I respect his silence. I wish he would share his story. Future generations need to hear it."`,
            solution: 'Example: "My neighbour, who is called Erik, is 80 years old. Although he fought in the resistance during World War II, he never talks about it because he thinks the memories are too painful. I respect his silence, but I wish he would share his story so that future generations can hear it." — Uses who (relative), although (contrast), because (reason), but (contrast), so that (purpose).',
          },
        ],
        hints: [
          'Look for sentences that share the same subject — they are easy to combine.',
          'Use "who" for information about a person, "because" for reasons, "although" for contrast.',
          'Try to create a mix of short and long sentences for good rhythm.',
        ],
        solution: 'A good revision combines the eight short sentences into three or four longer ones without losing any information. The key conjunctions to use: who, although, because, but, so that.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-12-summary',
      type: 'text',
      content: `## Summary — Sentence Structure and Word Order

**The SVO rule:**
English statements follow Subject–Verb–Object order. Unlike Norwegian, the subject does **not** swap with the verb after a fronted adverbial.
- Wrong: *"Yesterday went I..."*
- Correct: *"Yesterday I went..."*

**Adverb placement:**
- Frequency adverbs (always, never, often) → between subject and main verb, or after first auxiliary
- Manner adverbs (quickly, carefully) → after verb/object
- Time adverbs (yesterday, tomorrow) → beginning or end of sentence
- Multiple adverbs → Manner, Place, Time (MPT)

**Complex sentences:**
- Subordinating conjunctions: because, although, when, if, so that, etc.
- Coordinating conjunctions (FANBOYS): for, and, nor, but, or, yet, so
- Relative pronouns: who, which, that, where, when

**Punctuation:**
- Comma after a fronted dependent clause: *"Although it rained, we played."*
- No comma when the dependent clause comes last: *"We played although it rained."*
- Never join two independent clauses with just a comma (comma splice).`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-12-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-ex-7',
        number: '12.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'A Norwegian student wrote this paragraph. Find and correct all the word order errors. There are at least five mistakes.',
        subTasks: [
          {
            label: 'a',
            task: `"Last weekend went my family and I to the cabin. There is it very beautiful in autumn. Always enjoy we the fresh air and the silence. In the evening sat we around the fireplace and told stories. Often tells my grandfather about his childhood. Never have I heard such exciting stories. Tomorrow will we go back to the city, but already look I forward to the next trip."`,
            solution: '"Last weekend my family and I went to the cabin. It is very beautiful there in autumn. We always enjoy the fresh air and the silence. In the evening we sat around the fireplace and told stories. My grandfather often tells about his childhood. I have never heard such exciting stories. Tomorrow we will go back to the city, but I already look forward to the next trip." — Seven V2 inversions corrected to SVO order.',
          },
        ],
        hints: [
          'Look for sentences where the verb comes before the subject — this is the Norwegian V2 pattern.',
          'Remember: in English, the subject always comes before the verb in statements.',
        ],
        solution: 'The paragraph contains seven instances of Norwegian V2 word order transferred into English. Each one is fixed by placing the subject before the verb.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-12-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-ex-8',
        number: '12.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a paragraph (100-150 words) about your school day. Include at least: two sentences with fronted adverbials, two complex sentences with different conjunctions, one relative clause, and one sentence with a frequency adverb. Underline and label each feature.',
        hints: [
          'Start some sentences with time expressions (In the morning, After lunch, etc.).',
          'Use "because", "although", or "when" for complex sentences.',
          'Use "who" or "which" for a relative clause.',
          'Place frequency adverbs (always, usually, never) correctly.',
        ],
        solution: 'A strong answer labels each feature clearly. Example: "Every morning (fronted adverbial), I usually (frequency adverb) arrive at school by eight. Although I sometimes feel tired (complex sentence — although), the first lesson is always interesting. My favourite teacher, who teaches English (relative clause), makes every lesson fun because she uses creative activities (complex sentence — because). After lunch (fronted adverbial), we have PE, which I enjoy."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'SVO', definition: 'Subject–Verb–Object — the standard word order in English statements' },
    { term: 'V2 word order', definition: 'A pattern in Norwegian (and other Germanic languages) where the verb is always in second position, even after fronted adverbials — does not apply in English' },
    { term: 'Inversion', definition: 'Swapping the position of the subject and verb, used in English for questions and a few formal expressions' },
    { term: 'Adverbial', definition: 'A word or phrase that gives information about time, place, manner, or frequency (yesterday, carefully, at school, etc.)' },
    { term: 'Independent clause', definition: 'A group of words with a subject and verb that can stand alone as a complete sentence' },
    { term: 'Dependent clause', definition: 'A group of words with a subject and verb that cannot stand alone — it needs an independent clause to be complete' },
    { term: 'Subordinating conjunction', definition: 'A word that introduces a dependent clause (because, although, when, if, so that, etc.)' },
    { term: 'Relative clause', definition: 'A clause beginning with who, which, that, where, or when that gives extra information about a noun' },
    { term: 'Comma splice', definition: 'The error of joining two independent clauses with only a comma, without a conjunction' },
  ],
};

// ============================================================================
// KAPITTEL 13: Vocabulary Building
// ============================================================================

export const CHAPTER_ENGELSK_10_13: TextbookChapter = {
  id: 'engelsk-10-13',
  courseId: 'engelsk-10',
  chapterNumber: '13',
  title: 'Vocabulary Building',
  description: 'Expand your English vocabulary through word families, prefixes, suffixes, collocations, and strategies for learning and remembering new words.',
  estimatedMinutes: 80,
  competenceGoals: [
    'utforske og bruke et variert ordforråd og idiomatiske uttrykk tilpasset kommunikasjonssituasjonen',
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'bruke egnede strategier for språklæring, tekstskaping og kommunikasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-13-intro',
      type: 'text',
      content: `## Vocabulary Building

A rich vocabulary is one of the biggest differences between a good English text and a great one. On exams, students who use varied and precise vocabulary consistently score higher — even when their grammar is not perfect.

The good news is that you already know thousands of English words. The challenge is to move beyond basic, everyday vocabulary and learn to use more **precise**, **varied**, and **sophisticated** words.

**In this chapter you will learn:**

1. How to use word families (noun, verb, adjective, adverb forms) to expand your range
2. How prefixes and suffixes change word meaning and class
3. What collocations are and why they matter
4. The difference between synonyms and how to choose the right one
5. Practical strategies for learning and remembering new vocabulary

**Why vocabulary matters on exams:**
- "Good" → adequate, but basic
- "The weather was good" → "The weather was **magnificent** / **pleasant** / **ideal**"
- Each synonym carries a slightly different shade of meaning — choosing the right one shows language mastery.`,
    },

    // ========== DEFINISJON 1: WORD FAMILIES ==========
    {
      id: 'engelsk-10-13-def-1',
      type: 'definition',
      title: 'Word Families — One Root, Many Forms',
      content: `A **word family** is a group of words that share the same root but belong to different word classes (noun, verb, adjective, adverb).

Learning word families is one of the most efficient ways to expand your vocabulary, because from one root you can derive four or more usable words.

**Examples:**

| Verb | Noun | Adjective | Adverb |
|---|---|---|---|
| create | creation / creativity | creative | creatively |
| succeed | success | successful | successfully |
| educate | education / educator | educational | educationally |
| compete | competition / competitor | competitive | competitively |
| communicate | communication | communicative | communicatively |
| decide | decision | decisive | decisively |
| imagine | imagination | imaginative | imaginatively |

**Why this matters for exams:**
If you know the word *create*, you automatically have access to *creation*, *creative*, *creatively*, and *creativity*. That is five words for the price of one.

**Common patterns:**
- Verb → Noun: add *-tion*, *-ment*, *-ance/-ence*, *-al* (*educate → education, develop → development*)
- Verb/Noun → Adjective: add *-ful*, *-less*, *-ive*, *-ous*, *-al* (*success → successful, create → creative*)
- Adjective → Adverb: add *-ly* (*careful → carefully, beautiful → beautifully*)
- Adjective → Noun: add *-ness*, *-ity* (*happy → happiness, creative → creativity*)`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-13-example-1',
      type: 'example',
      title: 'Example: Completing a word family',
      problem: `Complete the word family table for the root "inform":

| Verb | Noun(s) | Adjective | Adverb |
|---|---|---|---|
| inform | ? | ? | ? |`,
      solution: `| Verb | Noun(s) | Adjective | Adverb |
|---|---|---|---|
| inform | information, informant | informative, informed | informatively |

**How to use each form:**
- *"Please **inform** the teacher about your absence."* (verb)
- *"I need more **information** before I can decide."* (noun)
- *"The documentary was very **informative**."* (adjective)
- *"She writes **informatively** about complex topics."* (adverb)
- *"An **informed** citizen makes better decisions."* (adjective — from past participle)
- *"The police are looking for the **informant**."* (noun — person who informs)

**Tip:** When you learn a new word, always look up its other forms. Many dictionaries list them at the end of the entry.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-13-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-ex-1',
        number: '13.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Complete the word family for each root. Fill in the missing forms.',
        subTasks: [
          {
            label: 'a',
            task: 'Verb: develop | Noun: ? | Adjective: ? | Adverb: ?',
            solution: 'Noun: development / developer | Adjective: developing, developed | Adverb: (no common adverb form)',
          },
          {
            label: 'b',
            task: 'Verb: ? | Noun: beauty | Adjective: ? | Adverb: ?',
            solution: 'Verb: beautify | Adjective: beautiful | Adverb: beautifully',
          },
          {
            label: 'c',
            task: 'Verb: ? | Noun: strength | Adjective: ? | Adverb: ?',
            solution: 'Verb: strengthen | Adjective: strong | Adverb: strongly',
          },
          {
            label: 'd',
            task: 'Verb: achieve | Noun: ? | Adjective: ? | Adverb: ?',
            solution: 'Noun: achievement / achiever | Adjective: achievable | Adverb: (no common adverb form)',
          },
        ],
        solution: 'Word families help you use the right word class in each sentence. A common exam error is using a noun where an adjective is needed, e.g. "It was a beauty day" instead of "It was a beautiful day".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-13-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-ex-2',
        number: '13.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Choose the correct word form to complete the sentence: "The ______ of the new school building took three years."',
        options: [
          {
            id: 'a',
            text: 'construct',
            isCorrect: false,
            feedback: 'Incorrect. "Construct" is the verb form. Here you need a noun to be the subject of the sentence.',
          },
          {
            id: 'b',
            text: 'construction',
            isCorrect: true,
            feedback: 'Correct! "Construction" is the noun form. After "The" and before "of", you need a noun. "The construction of the new school building took three years."',
          },
          {
            id: 'c',
            text: 'constructive',
            isCorrect: false,
            feedback: 'Incorrect. "Constructive" is an adjective (meaning "helpful" or "useful"). The sentence needs a noun in this position.',
          },
          {
            id: 'd',
            text: 'constructively',
            isCorrect: false,
            feedback: 'Incorrect. "Constructively" is an adverb. You need a noun to fill the subject position.',
          },
        ],
        solution: '"Construction" — the noun form. "The" signals that a noun is coming, and "of" follows the noun. Recognising what word class is needed is key to choosing the right form.',
      },
    },

    // ========== DEFINISJON 2: PREFIXES AND SUFFIXES ==========
    {
      id: 'engelsk-10-13-def-2',
      type: 'definition',
      title: 'Prefixes and Suffixes',
      content: `**Prefixes** are added to the beginning of a word to change its meaning. **Suffixes** are added to the end to change the word class or meaning.

**Common prefixes:**

| Prefix | Meaning | Examples |
|---|---|---|
| un- | not, opposite | unhappy, unfair, undo |
| dis- | not, opposite | disagree, disappear, dishonest |
| mis- | wrongly | misunderstand, misuse, mislead |
| re- | again | rewrite, rebuild, reconsider |
| pre- | before | preview, predict, prejudge |
| over- | too much | overreact, overwork, overcrowded |
| under- | too little | underestimate, underpaid, underrated |
| inter- | between | international, interact, internet |
| multi- | many | multicultural, multilingual, multimedia |

**Common suffixes that change word class:**

| Suffix | Makes it a... | Examples |
|---|---|---|
| -tion / -sion | noun | education, decision, permission |
| -ment | noun | development, achievement, government |
| -ness | noun | happiness, sadness, awareness |
| -ful | adjective | helpful, peaceful, colourful |
| -less | adjective (without) | homeless, careless, useless |
| -able / -ible | adjective (can be) | readable, flexible, accessible |
| -ous | adjective | dangerous, famous, nervous |
| -ly | adverb | quickly, carefully, honestly |
| -ise / -ize | verb | organise, realise, modernise |

**The power of prefixes and suffixes:**
If you know the word *care*, you can build: careful, carefully, careless, carelessly, carefree, caregiver, uncaring.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-13-example-2',
      type: 'example',
      title: 'Example: Using prefixes to change meaning',
      problem: `Add a prefix to each word to create the opposite meaning:
1. happy
2. agree
3. understand
4. possible
5. write (in the sense of "do again")`,
      solution: `1. **un**happy — "un-" is the most common prefix for adjectives
2. **dis**agree — "dis-" is used with many verbs and adjectives
3. **mis**understand — "mis-" means "wrongly" (to understand wrongly)
4. **im**possible — "im-" is used before words starting with p, b, or m (a variant of "in-")
5. **re**write — "re-" means "again" (to write again)

**Watch out for tricky ones:**
- *un*fair (not *in*fair)
- *il*legal (not *un*legal) — "il-" before words starting with "l"
- *ir*responsible (not *un*responsible) — "ir-" before words starting with "r"
- *im*patient (not *un*patient) — "im-" before "p"

The negative prefix depends on the word — unfortunately, you often just have to learn which one goes with which word.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-13-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-ex-3',
        number: '13.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Add the correct prefix or suffix to complete each sentence.',
        subTasks: [
          {
            label: 'a',
            task: '"The teacher asked us to ____write our essays after getting feedback." (prefix meaning "again")',
            solution: 'rewrite — The prefix "re-" means "again".',
            multipleChoiceOptions: ['rewrite', 'unwrite', 'miswrite', 'prewrite'],
          },
          {
            label: 'b',
            task: '"It is ____possible to finish this in one hour." (prefix meaning "not")',
            solution: 'impossible — "im-" is the negative prefix before "p".',
            multipleChoiceOptions: ['impossible', 'unpossible', 'dispossible', 'inpossible'],
          },
          {
            label: 'c',
            task: '"She spoke so quiet______ that I could barely hear her." (suffix to make adverb)',
            solution: 'quietly — Add "-ly" to the adjective "quiet" to make the adverb.',
            multipleChoiceOptions: ['quietly', 'quietness', 'quietful', 'quietable'],
          },
          {
            label: 'd',
            task: '"The home______ people in the city need more support." (suffix meaning "without")',
            solution: 'homeless — "-less" means "without a home".',
            multipleChoiceOptions: ['homeless', 'homeful', 'homeable', 'homeness'],
          },
        ],
        solution: 'a) rewrite (re- = again), b) impossible (im- before p = not), c) quietly (-ly = adverb), d) homeless (-less = without). Prefixes change meaning; suffixes change word class.',
      },
    },

    // ========== DEFINISJON 3: COLLOCATIONS ==========
    {
      id: 'engelsk-10-13-def-3',
      type: 'definition',
      title: 'Collocations — Words That Belong Together',
      content: `A **collocation** is a combination of words that naturally go together in English. Native speakers use collocations automatically, but for language learners, they can be tricky because direct translation from Norwegian often does not work.

**Types of collocations:**

**1. Adjective + Noun:**
- a **heavy** rain (NOT *a strong rain*)
- a **strong** wind (NOT *a heavy wind*)
- a **fast** car (NOT *a quick car*)
- a **quick** decision (NOT *a fast decision*)
- **deep** sleep (NOT *heavy sleep*)
- **high** temperature (NOT *tall temperature*)

**2. Verb + Noun:**
- **make** a decision (NOT *take a decision* — although this is used in British English)
- **do** homework (NOT *make homework*)
- **take** a photo (NOT *make a photo*)
- **pay** attention (NOT *give attention*)
- **catch** a cold (NOT *get a cold* — though "get" is also used informally)
- **make** a mistake (NOT *do a mistake*)

**3. Verb + Adverb / Adverb + Adjective:**
- rain **heavily** (NOT *rain strongly*)
- **deeply** grateful (NOT *strongly grateful*)
- **highly** recommended (NOT *very recommended*)
- **bitterly** disappointed (NOT *deeply disappointed* — though "deeply" is also used)

**Why collocations matter:**
Using the wrong collocation will not always cause misunderstanding, but it makes your English sound unnatural. Examiners notice this. The difference between "do homework" and "make homework" is the difference between fluent and translated English.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-13-example-3',
      type: 'example',
      title: 'Example: Make vs. Do',
      problem: `Norwegian uses "gjøre" for both "make" and "do". Sort these into the correct column:

homework, a mistake, an effort, the dishes, a decision, progress, an exam, a complaint`,
      solution: `| **MAKE** | **DO** |
|---|---|
| make a mistake | do homework |
| make an effort | do the dishes |
| make a decision | do an exam |
| make progress | — |
| make a complaint | — |

**General rules (with many exceptions):**
- **DO** is used for tasks, work, and activities: *do homework, do the washing, do exercise, do a job, do your best*
- **MAKE** is used for creating, producing, or causing something: *make a cake, make a plan, make a noise, make money, make friends*

**Common Norwegian traps:**
- Norwegian "gjøre lekser" → English "**do** homework" (NOT *make homework*)
- Norwegian "ta et bilde" → English "**take** a photo" (NOT *make/do a photo*)
- Norwegian "ta en beslutning" → English "**make** a decision"

**Tip:** When you learn a new verb, learn at least two or three nouns that go with it.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-13-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-ex-4',
        number: '13.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which collocation is correct?',
        options: [
          {
            id: 'a',
            text: '"She made her homework before dinner."',
            isCorrect: false,
            feedback: 'Incorrect. The correct collocation is "do homework", not "make homework". "Make" is for creating something new; homework is a task.',
          },
          {
            id: 'b',
            text: '"He did a terrible mistake on the test."',
            isCorrect: false,
            feedback: 'Incorrect. The correct collocation is "make a mistake", not "do a mistake". This is one of the most common errors for Norwegian students.',
          },
          {
            id: 'c',
            text: '"We need to make a decision by Friday."',
            isCorrect: true,
            feedback: 'Correct! "Make a decision" is the standard English collocation. Norwegian "ta en beslutning" translates to "make a decision", not "take a decision" (though "take" is also used in British English).',
          },
          {
            id: 'd',
            text: '"The teacher told us to make the exercise on page 42."',
            isCorrect: false,
            feedback: 'Incorrect. The correct collocation is "do the exercise" or "complete the exercise". "Make" does not go with "exercise" in this sense.',
          },
        ],
        solution: '"Make a decision" is correct. Remember: make a mistake, make a decision, make progress, make an effort — but do homework, do an exercise, do your best.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-13-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-ex-5',
        number: '13.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Replace the underlined word with a more precise or sophisticated synonym. Choose from the options provided.',
        subTasks: [
          {
            label: 'a',
            task: '"The film was very **good**." Options: outstanding, decent, adequate, magnificent',
            solution: '"The film was outstanding / magnificent." Both are stronger and more specific than "good". "Decent" and "adequate" suggest something merely acceptable, which is weaker.',
          },
          {
            label: 'b',
            task: '"She **said** that the project was finished." Options: announced, whispered, claimed, mentioned',
            solution: 'Depends on context. "Announced" (formal, public), "mentioned" (casual), "claimed" (implies doubt), "whispered" (quietly). Choose based on the situation — any is better than "said" for variety.',
          },
          {
            label: 'c',
            task: '"The problem is very **big**." Options: significant, enormous, severe, substantial',
            solution: '"The problem is significant / severe / substantial." Each adds a nuance: "significant" (important), "severe" (serious), "substantial" (large in scope). "Enormous" works for physical size but is less precise for problems.',
          },
          {
            label: 'd',
            task: '"He **walked** slowly down the corridor." Options: strolled, trudged, crept, wandered',
            solution: '"Trudged" (walked heavily, tired), "strolled" (walked calmly), "crept" (walked quietly/secretly), "wandered" (walked without direction). Each tells a different story. If he is tired, "trudged" is best; if he is being sneaky, "crept".',
          },
        ],
        hints: [
          'Synonyms are never exactly identical — each carries a slightly different feeling or connotation.',
          'Think about the context and mood before choosing.',
        ],
        solution: 'Using precise vocabulary means choosing words that match the exact situation. "Said" has many alternatives (whispered, shouted, claimed, admitted, insisted), each adding meaning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-13-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-ex-6',
        number: '13.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose the correct collocation to complete each sentence.',
        subTasks: [
          {
            label: 'a',
            task: '"There was ______ rain all day." (heavy / strong)',
            solution: 'heavy — "Heavy rain" is the correct collocation. "Strong" goes with "wind".',
            multipleChoiceOptions: ['heavy', 'strong', 'big', 'hard'],
          },
          {
            label: 'b',
            task: '"She ______ attention during the whole lecture." (paid / gave)',
            solution: 'paid — "Pay attention" is the standard English collocation.',
            multipleChoiceOptions: ['paid', 'gave', 'took', 'made'],
          },
          {
            label: 'c',
            task: '"We need to ______ progress on this project." (make / do)',
            solution: 'make — "Make progress" is the correct collocation.',
            multipleChoiceOptions: ['make', 'do', 'take', 'get'],
          },
          {
            label: 'd',
            task: '"He has a ______ temperature and should stay home." (high / tall)',
            solution: 'high — "High temperature" is correct. "Tall" is only for physical height of people and some objects.',
            multipleChoiceOptions: ['high', 'tall', 'big', 'strong'],
          },
        ],
        solution: 'a) heavy rain, b) paid attention, c) make progress, d) high temperature. Collocations must be learned as fixed pairs — direct translation from Norwegian often does not work.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-13-summary',
      type: 'text',
      content: `## Summary — Vocabulary Building

**Word families:**
Learn all forms of a word (verb, noun, adjective, adverb) to multiply your vocabulary quickly.
- create → creation, creative, creatively, creativity

**Prefixes change meaning:**
- un-, dis-, mis- (negative/opposite)
- re- (again), pre- (before)
- over- (too much), under- (too little)

**Suffixes change word class:**
- -tion, -ment, -ness → noun
- -ful, -less, -ive, -ous → adjective
- -ly → adverb

**Collocations — words that belong together:**
- make a mistake, do homework, take a photo, pay attention
- heavy rain, strong wind, high temperature
- Cannot be guessed from Norwegian — must be learned

**Synonyms — choose the right shade of meaning:**
- "Good" → outstanding, adequate, decent, magnificent
- "Said" → whispered, claimed, announced, admitted
- Context determines the best choice

**Strategies for learning vocabulary:**
1. Learn words in families, not in isolation
2. Record collocations together (heavy + rain, not just "heavy")
3. Use new words in sentences — do not just memorise definitions
4. Read widely in English — the best way to absorb natural vocabulary`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-13-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-ex-7',
        number: '13.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Rewrite this paragraph, replacing every underlined word with a more precise or varied synonym. Do not change the meaning.',
        subTasks: [
          {
            label: 'a',
            task: `"The trip was very **nice**. We **went** to a **big** city and **looked at** many **interesting** buildings. The food was **good** and the people were very **nice**. I **think** everyone should visit this place."`,
            solution: 'Example: "The trip was wonderful/delightful. We travelled to an enormous/sprawling city and admired/explored many fascinating/remarkable buildings. The food was excellent/superb and the people were incredibly friendly/welcoming. I believe/am convinced everyone should visit this place." — Avoid repeating "nice" twice, and replace vague words with specific ones.',
          },
        ],
        hints: [
          '"Nice" is one of the most overused words in student English — replace it with a precise alternative.',
          '"Went" can be replaced with travelled, drove, flew, journeyed, etc.',
          '"Big" can be replaced with enormous, vast, sprawling, massive, etc.',
          '"Good" can be replaced with excellent, superb, delicious (for food), outstanding, etc.',
        ],
        solution: 'The key is to replace vague, overused words with precise alternatives. Each replacement should match the context. A good answer avoids repeating the same synonym twice.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-13-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-ex-8',
        number: '13.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a short descriptive paragraph (80-120 words) about a place you know well. Challenge yourself to use at least: two words with prefixes, two words with suffixes, three strong collocations, and no basic words (good, nice, big, small, very).',
        hints: [
          'Plan your vocabulary before you start writing.',
          'Replace "very + adjective" with a single strong word: very big → enormous, very cold → freezing.',
          'Use collocations naturally: heavy traffic, breathtaking view, bustling streets.',
          'Words with prefixes: unforgettable, incredible, multicultural, overcrowded.',
        ],
        solution: 'A strong answer uses specific, varied vocabulary that paints a vivid picture. Example: "My hometown is a multicultural (prefix: multi-) and unforgettable (prefix: un-) coastal city. The breathtaking (collocation) view from the hilltop reveals a bustling (collocation) harbour and narrow, cobblestone streets. During summer, the seafront is peaceful (suffix: -ful), with locals strolling leisurely (suffix: -ly) along the waterfront. The delicious (precise) seafood and the welcoming (suffix: -ing) atmosphere make it a truly remarkable (precise) place."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Word family', definition: 'A group of words sharing the same root in different word classes (create, creation, creative, creatively)' },
    { term: 'Prefix', definition: 'A letter group added to the beginning of a word to change its meaning (un-, re-, dis-, mis-, pre-, over-)' },
    { term: 'Suffix', definition: 'A letter group added to the end of a word to change its class or meaning (-tion, -ment, -ful, -less, -ly)' },
    { term: 'Collocation', definition: 'A natural word combination that native speakers use together (heavy rain, make a decision, pay attention)' },
    { term: 'Synonym', definition: 'A word with a similar meaning to another word, though usually with a slightly different shade (big / enormous / vast / massive)' },
    { term: 'Word class', definition: 'The grammatical category of a word: noun, verb, adjective, or adverb' },
    { term: 'Connotation', definition: 'The feeling or association a word carries beyond its dictionary definition (cheap vs. affordable both mean low-cost, but carry different feelings)' },
  ],
};

// ============================================================================
// KAPITTEL 14: Spelling and Punctuation
// ============================================================================

export const CHAPTER_ENGELSK_10_14: TextbookChapter = {
  id: 'engelsk-10-14',
  courseId: 'engelsk-10',
  chapterNumber: '14',
  title: 'Spelling and Punctuation',
  description: 'Master the spelling patterns and punctuation rules that Norwegian students find most challenging — from apostrophes and comma rules to commonly confused words.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-14-intro',
      type: 'text',
      content: `## Spelling and Punctuation

Spelling and punctuation may seem like small details, but they have a big impact on how your writing is perceived. Frequent spelling errors and missing punctuation make even good ideas harder to read and can cost you marks on exams.

English spelling is famously irregular — there is no simple set of rules that covers every word. However, there **are** patterns, and most errors Norwegian students make fall into a handful of predictable categories.

English punctuation also differs from Norwegian in several important ways, especially when it comes to commas and apostrophes.

**In this chapter you will learn:**

1. The most commonly misspelled words by Norwegian students
2. Key spelling patterns and rules (including British vs. American English)
3. Apostrophe rules (possession and contractions)
4. Comma rules that differ from Norwegian
5. Other punctuation marks and when to use them`,
    },

    // ========== DEFINISJON 1: COMMONLY CONFUSED WORDS ==========
    {
      id: 'engelsk-10-14-def-1',
      type: 'definition',
      title: 'Commonly Confused Words',
      content: `These word pairs cause the most spelling errors among Norwegian students. Many look or sound similar but have completely different meanings.

**1. Their / There / They're**
- **their** = possession (*"their house"*)
- **there** = place (*"over there"*) or existence (*"there is"*)
- **they're** = they are (*"they're coming"*)

**2. Its / It's**
- **its** = possession (*"The dog wagged its tail."*)
- **it's** = it is / it has (*"It's raining."*)

**3. Your / You're**
- **your** = possession (*"your book"*)
- **you're** = you are (*"you're welcome"*)

**4. To / Too / Two**
- **to** = preposition or infinitive marker (*"go to school", "to run"*)
- **too** = also, or excessively (*"me too", "too expensive"*)
- **two** = the number 2

**5. Then / Than**
- **then** = time/sequence (*"We ate, then we left."*)
- **than** = comparison (*"She is taller than me."*)

**6. Affect / Effect**
- **affect** = verb (*"The weather affects my mood."*)
- **effect** = noun (*"The effect was dramatic."*)

**7. Where / Were / We're**
- **where** = place (*"Where are you?"*)
- **were** = past tense of "be" (*"They were happy."*)
- **we're** = we are (*"We're leaving now."*)

**Memory trick for its/it's:** If you can replace the word with "it is" or "it has", use **it's**. If not, use **its**.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-14-example-1',
      type: 'example',
      title: 'Example: Spotting commonly confused words',
      problem: `Find and correct the errors in these sentences:

1. "Their going to they're new house over there."
2. "Its important that the dog gets it's food on time."
3. "Your the best friend I've ever had."
4. "She is smarter then her brother."`,
      solution: `1. *"**They're** going to **their** new house over **there**."*
   — They're = they are; their = belonging to them; there = that place.

2. *"**It's** important that the dog gets **its** food on time."*
   — It's = it is; its = belonging to it (no apostrophe for possession).

3. *"**You're** the best friend I've ever had."*
   — You're = you are (not "your" which means belonging to you).

4. *"She is smarter **than** her brother."*
   — "Than" for comparisons; "then" for time/sequence.

**Quick test:** Always try expanding the contraction:
- "Their going" → "They are going"? No, that does not match the possessive meaning. ✗
- "They're going" → "They are going"? Yes! ✓`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-14-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-ex-1',
        number: '14.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which sentence is spelled correctly?',
        options: [
          {
            id: 'a',
            text: '"Its a beautiful day and the sun is showing it\'s warmth."',
            isCorrect: false,
            feedback: 'Incorrect. It should be "It\'s (it is) a beautiful day" and "the sun is showing its (possessive) warmth." You have the apostrophes backwards.',
          },
          {
            id: 'b',
            text: '"It\'s a beautiful day and the sun is showing its warmth."',
            isCorrect: true,
            feedback: 'Correct! "It\'s" = it is (contraction), and "its" = belonging to it (possessive, no apostrophe).',
          },
          {
            id: 'c',
            text: '"Its a beautiful day and the sun is showing its warmth."',
            isCorrect: false,
            feedback: 'Incorrect. The first "its" should be "it\'s" (it is). "Its a beautiful day" misses the contraction apostrophe.',
          },
          {
            id: 'd',
            text: '"It\'s a beautiful day and the sun is showing it\'s warmth."',
            isCorrect: false,
            feedback: 'Incorrect. The second "it\'s" should be "its" (possessive). You do not use an apostrophe for the possessive form of "it".',
          },
        ],
        solution: '"It\'s a beautiful day and the sun is showing its warmth." Rule: it\'s = it is; its = possession.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-14-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-ex-2',
        number: '14.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Choose the correct word for each gap.',
        subTasks: [
          {
            label: 'a',
            task: '"______ are many students in the class who forgot ______ books." (There/Their/They\'re)',
            solution: '"There are many students in the class who forgot their books." — There = existence; their = belonging to them.',
            multipleChoiceOptions: ['There ... their', 'Their ... there', 'They\'re ... their', 'There ... they\'re'],
          },
          {
            label: 'b',
            task: '"I need ______ go ______ the shop. I need bread ______." (to/too/two)',
            solution: '"I need to go to the shop. I need bread too." — to (infinitive), to (preposition), too (also).',
            multipleChoiceOptions: ['to ... to ... too', 'too ... to ... to', 'to ... too ... two', 'two ... to ... too'],
          },
          {
            label: 'c',
            task: '"______ you sure ______ coming ______ us to the concert?" (your/you\'re)',
            solution: '"Are you sure you\'re coming with us to the concert?" — Note: only "your" and "you\'re" are the choices. The sentence should be: "You\'re sure you\'re coming with your friends?"',
          },
        ],
        solution: 'a) There / their, b) to / to / too, c) you\'re (you are). The trick is always to ask: can I expand the contraction? Does it still make sense?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: APOSTROPHE RULES ==========
    {
      id: 'engelsk-10-14-def-2',
      type: 'definition',
      title: 'Apostrophe Rules',
      content: `The apostrophe ( **'** ) is one of the most misused punctuation marks. It has exactly **two** uses in English:

**Use 1: Contractions (shortened forms)**
The apostrophe replaces missing letters:
- I am → I'm
- do not → don't
- she will → she'll
- they have → they've
- it is → it's

**Use 2: Possession (showing ownership)**
- **Singular noun:** add 's → *"the student**'s** book"* (the book belonging to one student)
- **Plural noun ending in s:** add only ' → *"the student**s'** books"* (the books belonging to several students)
- **Plural noun NOT ending in s:** add 's → *"the children**'s** toys"*, *"the people**'s** choice"*
- **Names ending in s:** both forms are accepted → *"James**'s** car"* or *"James**'** car"*

**The apostrophe is NEVER used for:**

**1. Ordinary plurals:**
- Wrong: *"I bought two apple's."*
- Correct: *"I bought two apples."*

**2. Possessive pronouns (its, yours, his, hers, theirs, ours):**
- Wrong: *"The dog wagged it's tail."*
- Correct: *"The dog wagged its tail."*

**3. Decades or abbreviations in plural:**
- Wrong: *"The 1990's were great."*
- Correct: *"The 1990s were great."*

**The "greengrocer's apostrophe"** is the name for the common error of adding apostrophes to ordinary plurals (like "apple's" or "banana's" on shop signs). Avoid it!`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-14-example-2',
      type: 'example',
      title: 'Example: Apostrophes for possession',
      problem: `Add apostrophes where needed (some sentences need none):

1. The teachers desk was covered in papers.
2. The boys played football in the park.
3. My mothers sister lives in London.
4. The childrens drawings were displayed on the wall.
5. The two dogs chased their tails.`,
      solution: `1. *"The teacher**'s** desk was covered in papers."*
   — One teacher owns the desk → 's after "teacher".

2. *"The boys played football in the park."* ← **No apostrophe needed.**
   — "Boys" is just a plural noun, not possessive. No one owns anything.

3. *"My mother**'s** sister lives in London."*
   — The sister belongs to my mother → 's after "mother".

4. *"The children**'s** drawings were displayed on the wall."*
   — "Children" is already plural (it does not end in s), so add 's.

5. *"The two dogs chased their tails."* ← **No apostrophe needed.**
   — "Dogs" is plural (not possessive), and "their" is a possessive pronoun (no apostrophe).

**Decision flowchart:**
1. Is something shortened (contraction)? → Apostrophe replaces missing letters.
2. Does something belong to someone? → Add 's (or s' for plural ending in s).
3. Is it just a plural? → No apostrophe.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-14-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-ex-3',
        number: '14.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which sentence uses the apostrophe correctly?',
        options: [
          {
            id: 'a',
            text: '"The student\'s were happy with their results."',
            isCorrect: false,
            feedback: 'Incorrect. "Student\'s" here incorrectly adds an apostrophe to a simple plural. It should be: "The students were happy with their results."',
          },
          {
            id: 'b',
            text: '"The students\' results were excellent."',
            isCorrect: true,
            feedback: 'Correct! Multiple students own the results. "Students" is plural and ends in "s", so the apostrophe goes after the "s": students\'.',
          },
          {
            id: 'c',
            text: '"The students results\' were excellent."',
            isCorrect: false,
            feedback: 'Incorrect. The apostrophe should be on the owner (students), not on what is owned (results). It should be: "The students\' results were excellent."',
          },
          {
            id: 'd',
            text: '"The student\'s results\' were excellent."',
            isCorrect: false,
            feedback: 'Incorrect. Two problems: "student\'s" suggests one student (could be correct in context), but "results\'" adds a wrong apostrophe to "results", which does not possess anything.',
          },
        ],
        solution: '"The students\' results were excellent." — Plural possessive: the results belong to multiple students. Apostrophe after the s.',
      },
    },

    // ========== DEFINISJON 3: COMMA RULES ==========
    {
      id: 'engelsk-10-14-def-3',
      type: 'definition',
      title: 'English Comma Rules',
      content: `English and Norwegian use commas differently. Here are the most important English comma rules:

**1. After introductory elements:**
Use a comma after a word, phrase, or clause that comes before the main clause.
- *"**However,** the results were disappointing."*
- *"**After the meeting,** we went for coffee."*
- *"**If it rains tomorrow,** we will stay indoors."*

**2. In lists (the Oxford comma):**
Use commas to separate items in a list. The comma before "and" (Oxford comma) is optional but recommended.
- *"I packed my coat, hat, and gloves."*

**3. Before coordinating conjunctions joining independent clauses:**
- *"She was tired**,** but she kept working."*
- *"I called him**,** and he answered immediately."*

**4. Around non-essential information:**
If extra information can be removed without changing the core meaning, surround it with commas.
- *"My brother**,** who lives in Bergen**,** is a doctor."* (I have only one brother — the info is extra)
- *"The students who passed the test can leave."* (no commas — "who passed" identifies which students)

**5. After reporting verbs in direct speech:**
- *"She said**,** 'I will be there.'"*

**NOT like Norwegian:**
- Norwegian uses a comma before "at" (that): *"Jeg tror, at han kommer."*
- English does NOT: *"I think that he is coming."* (no comma before "that")

**No comma between subject and verb:**
- Wrong: *"The boy who lives next door**,** is my friend."*
- Correct: *"The boy who lives next door is my friend."*`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-14-example-3',
      type: 'example',
      title: 'Example: Adding commas correctly',
      problem: `Add commas where needed in these sentences:

1. "Although he studied hard he failed the test."
2. "We need eggs milk butter and flour."
3. "My sister who is a nurse works at the hospital."
4. "He finished the report and he sent it to his boss."`,
      solution: `1. *"Although he studied hard**,** he failed the test."*
   — Comma after the introductory dependent clause.

2. *"We need eggs**,** milk**,** butter**,** and flour."*
   — Commas separating list items. The Oxford comma before "and" is recommended.

3. This depends on context:
   - *"My sister**,** who is a nurse**,** works at the hospital."* — if you have only one sister (non-essential info).
   - *"My sister who is a nurse works at the hospital."* — if you have multiple sisters and you are specifying which one (essential info).

4. *"He finished the report**,** and he sent it to his boss."*
   — Comma before "and" when it joins two independent clauses (each could be a separate sentence).

**Tip:** If you can remove the information between commas and the sentence still makes sense, the commas are correct.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-14-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-ex-4',
        number: '14.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Add commas where needed. Some sentences may be correct as they are.',
        subTasks: [
          {
            label: 'a',
            task: '"If you study hard you will pass the exam."',
            solution: '"If you study hard, you will pass the exam." — Comma after the introductory "if" clause.',
          },
          {
            label: 'b',
            task: '"I like football basketball and tennis."',
            solution: '"I like football, basketball, and tennis." — Commas between list items.',
          },
          {
            label: 'c',
            task: '"The student who answered first got a prize."',
            solution: 'No commas needed. "Who answered first" is essential — it identifies which student. Without it, we do not know which student got a prize.',
          },
          {
            label: 'd',
            task: '"Furthermore the government has promised to invest more in education."',
            solution: '"Furthermore, the government has promised to invest more in education." — Comma after introductory adverb.',
          },
        ],
        solution: 'a) comma after "hard", b) commas between list items, c) no commas (essential clause), d) comma after "Furthermore".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-14-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-ex-5',
        number: '14.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which sentence has correct punctuation?',
        options: [
          {
            id: 'a',
            text: '"My father, who is a pilot, flies to New York every week."',
            isCorrect: true,
            feedback: 'Correct! "Who is a pilot" is non-essential information (you only have one father), so it is correctly surrounded by commas.',
          },
          {
            id: 'b',
            text: '"My father who is a pilot flies to New York every week."',
            isCorrect: false,
            feedback: 'Incorrect. "Who is a pilot" is extra information about your one and only father, so it should be enclosed in commas. Without commas, it implies you have multiple fathers and are identifying which one.',
          },
          {
            id: 'c',
            text: '"My father, who is a pilot flies to New York every week."',
            isCorrect: false,
            feedback: 'Incorrect. You need a closing comma after "pilot" to complete the parenthetical information: "My father, who is a pilot, flies..."',
          },
          {
            id: 'd',
            text: '"My father who is a pilot, flies to New York every week."',
            isCorrect: false,
            feedback: 'Incorrect. You need an opening comma before "who" as well. Non-essential clauses need commas on both sides.',
          },
        ],
        solution: '"My father, who is a pilot, flies to New York every week." Non-essential relative clauses (extra info) need commas on both sides.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-14-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-ex-6',
        number: '14.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Find and correct all spelling and punctuation errors in this paragraph. There are at least eight errors.',
        subTasks: [
          {
            label: 'a',
            task: `"Their are many student's who dont pay attention in class. Its a big problem because they loose importent informasion. Alot of student's think there to smart to listen, but than they fail the test. The teacher's who work hard deserv better. If your not going to listen your wasting everyones time."`,
            solution: '"There are many students who don\'t pay attention in class. It\'s a big problem because they lose important information. A lot of students think they\'re too smart to listen, but then they fail the test. The teachers who work hard deserve better. If you\'re not going to listen, you\'re wasting everyone\'s time." — Errors: Their→There, student\'s→students, dont→don\'t, Its→It\'s, loose→lose, importent→important, informasion→information, Alot→A lot, student\'s→students, there→they\'re, to→too, than→then, teacher\'s→teachers, deserv→deserve, your→you\'re (twice), everyones→everyone\'s, missing comma after "listen".',
          },
        ],
        hints: [
          'Look for their/there/they\'re, its/it\'s, your/you\'re, to/too, then/than errors.',
          'Check for unnecessary apostrophes in plurals.',
          'Check for missing apostrophes in contractions.',
          'Look for spelling errors that come from Norwegian influence.',
        ],
        solution: 'This paragraph contains a representative sample of the most common errors Norwegian students make. Being able to spot and fix all of them shows strong proofreading skills.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-14-summary',
      type: 'text',
      content: `## Summary — Spelling and Punctuation

**Commonly confused words:**
- their (possession) / there (place) / they're (they are)
- its (possession) / it's (it is)
- your (possession) / you're (you are)
- to (preposition) / too (also/excessively) / two (number)
- then (time) / than (comparison)
- affect (verb) / effect (noun)

**Apostrophe rules:**
- Contractions: replace missing letters (don't, it's, they're)
- Possession: 's for singular, s' for plural ending in s, 's for plural not ending in s
- NEVER for ordinary plurals (apples, not apple's)
- NEVER for possessive pronouns (its, yours, theirs)

**Comma rules:**
- After introductory elements (However, / If..., / After lunch,)
- Between list items (eggs, milk, and butter)
- Before conjunctions joining independent clauses (She was tired, but she kept working.)
- Around non-essential information (My brother, who lives in Bergen, is a doctor.)
- NOT before "that" (I think that...)
- NOT between subject and verb

**Proofreading strategy:**
Read your text three times: once for content, once for grammar, and once specifically for spelling and punctuation.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-14-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-ex-7',
        number: '14.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write five sentences, each using one of these tricky pairs correctly: their/they\'re, its/it\'s, your/you\'re, to/too, then/than. The context should make the meaning crystal clear.',
        hints: [
          'Make the context obvious so there is no doubt which word is needed.',
          'Try to use both words from the pair in the same sentence if possible.',
          'Example: "It\'s clear that the cat loves its owner."',
        ],
        solution: 'A strong answer demonstrates clear understanding of each pair. Example sentences: 1) "They\'re going to their grandparents\' house." 2) "It\'s hard to believe that the team lost its final match." 3) "You\'re going to love your new school." 4) "I want to go to the concert too, but two tickets are too expensive." 5) "First we ate dinner, then we decided that the restaurant was better than the one we tried last week."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-14-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-ex-8',
        number: '14.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Proofread this short essay extract. Find and correct all errors (spelling, apostrophes, commas, confused words). There are at least ten errors.',
        subTasks: [
          {
            label: 'a',
            task: `"In todays society technology plays a huge role in our lifes. Many people think that social media has a negative affect on young people however others disagree. The childrens use of screens have increased dramaticly over the last decade. According to recent research teenagers who spend more then three hours per day on social media are more likely to experience anxeity. Its therefore important that parents set clear boundarys for they're childrens screen time."`,
            solution: '"In today\'s society, technology plays a huge role in our lives. Many people think that social media has a negative effect on young people; however, others disagree. Children\'s use of screens has increased dramatically over the last decade. According to recent research, teenagers who spend more than three hours per day on social media are more likely to experience anxiety. It\'s therefore important that parents set clear boundaries for their children\'s screen time." — Errors: todays→today\'s, comma after "society", lifes→lives, affect→effect, comma/semicolon around "however", childrens→children\'s, have→has, dramaticly→dramatically, comma after "research", then→than, anxeity→anxiety, Its→It\'s, boundarys→boundaries, they\'re→their, childrens→children\'s.',
          },
        ],
        hints: [
          'Read each sentence separately and slowly.',
          'Check every apostrophe — is it for contraction or possession?',
          'Check every "their/there/they\'re" and "its/it\'s".',
          'Look for missing commas after introductory phrases.',
        ],
        solution: 'This exercise tests all the skills from this chapter: confused words, apostrophes, commas, and general spelling. A thorough proofreader catches all ten-plus errors.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Apostrophe', definition: 'A punctuation mark (\') used for contractions (don\'t, it\'s) and possession (the student\'s book) — never for ordinary plurals' },
    { term: 'Contraction', definition: 'A shortened form of two words using an apostrophe (I\'m = I am, don\'t = do not, they\'re = they are)' },
    { term: 'Possessive', definition: 'A form showing ownership, made with \'s or s\' (the dog\'s bone, the students\' books)' },
    { term: 'Oxford comma', definition: 'A comma placed before "and" in a list of three or more items (eggs, milk, and butter) — recommended for clarity' },
    { term: 'Non-essential clause', definition: 'Extra information in a sentence that can be removed without changing the core meaning — enclosed in commas' },
    { term: 'Comma splice', definition: 'The error of joining two complete sentences with only a comma — fix with a conjunction, semicolon, or full stop' },
    { term: 'Homophone', definition: 'Words that sound the same but have different spellings and meanings (their/there/they\'re, to/too/two)' },
  ],
};

// ============================================================================
// KAPITTEL 15: Translation Skills
// ============================================================================

export const CHAPTER_ENGELSK_10_15: TextbookChapter = {
  id: 'engelsk-10-15',
  courseId: 'engelsk-10',
  chapterNumber: '15',
  title: 'Translation Skills',
  description: 'Learn to translate between Norwegian and English without falling into common traps. Understand why word-for-word translation fails and how to convey meaning naturally in both languages.',
  estimatedMinutes: 80,
  competenceGoals: [
    'utforske og bruke et variert ordforråd og idiomatiske uttrykk tilpasset kommunikasjonssituasjonen',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'bruke egnede strategier for språklæring, tekstskaping og kommunikasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-15-intro',
      type: 'text',
      content: `## Translation Skills

Translation is not about replacing each Norwegian word with an English one. It is about conveying the same **meaning** in a way that sounds natural in the target language. This is why machine translation tools often produce awkward or incorrect results — they translate words, not meaning.

Good translation skills help you in two ways:
1. **Writing:** When you compose English texts, you naturally think in Norwegian first. Knowing where Norwegian and English differ helps you avoid "translated English".
2. **Understanding:** When you read English texts, translation skills help you grasp nuances that a dictionary cannot fully explain.

**In this chapter you will learn:**

1. Why direct (word-for-word) translation fails
2. The most common Norwegian-to-English translation traps
3. How to handle idioms and expressions across languages
4. Strategies for translating meaning, not words
5. False friends — Norwegian and English words that look similar but mean different things`,
    },

    // ========== DEFINISJON 1: DIRECT TRANSLATION TRAPS ==========
    {
      id: 'engelsk-10-15-def-1',
      type: 'definition',
      title: 'Direct Translation Traps',
      content: `**Direct translation** (word-for-word translation) often produces sentences that are grammatically wrong or sound unnatural in English. Here are the most common traps for Norwegian students:

**1. Norwegian expressions that do not translate directly:**

| Norwegian | Direct (wrong) | Natural English |
|---|---|---|
| Jeg **gleder meg** til | I **happy myself** to | I am **looking forward** to |
| Jeg **synes** at | I **think/find** that | I **think** / I **believe** |
| Det **går bra** | It **goes well** | I am **fine** / It is **going well** |
| Jeg **orker** ikke | I **can't bother** | I **can't be bothered** / I **don't have the energy** |
| Å **ha det gøy** | To **have it fun** | To **have fun** |
| Å **ha lyst** til | To **have desire** to | To **want** to / To **feel like** |
| Det **er lov** | It **is allowed** | You **are allowed** to / It is **permitted** |

**2. Preposition differences:**

| Norwegian | Direct (wrong) | Correct English |
|---|---|---|
| god **på** | good **on** | good **at** |
| interessert **i** | interested **in** | interested **in** (same!) |
| redd **for** | scared **for** | scared **of** / afraid **of** |
| fornøyd **med** | satisfied **with** | satisfied **with** (same!) |
| avhengig **av** | dependent **of** | dependent **on** |
| stolt **av** | proud **of** | proud **of** (same!) |
| lei **av** | tired **of** | tired **of** / sick **of** |

**3. Structure differences:**
- Norwegian: *"Jeg liker å spille fotball."*
- English: *"I like **playing** football."* or *"I like **to play** football."*
- NOT: *"I like to play to football."* (double "to")`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-15-example-1',
      type: 'example',
      title: 'Example: Translating naturally',
      problem: `Translate these Norwegian sentences into natural English. Avoid direct translation.

1. "Jeg gleder meg til sommeren."
2. "Hun er flink på skolen."
3. "Vi hadde det veldig gøy på festen."
4. "Jeg orker ikke å gjøre lekser nå."`,
      solution: `1. *"I am looking forward to the summer."*
   — NOT: "I am happy myself to the summer." The expression "glede seg til" = "look forward to".

2. *"She does well at school."* or *"She is good at school."*
   — NOT: "She is clever on the school." "Flink på" = "good at" (never "on").

3. *"We had a great time at the party."* or *"We had so much fun at the party."*
   — NOT: "We had it very fun on the party." "Ha det gøy" = "have fun" / "have a great time". "På festen" = "at the party" (not "on").

4. *"I can't be bothered to do my homework now."* or *"I don't have the energy to do my homework now."*
   — NOT: "I can't bother to do homework now." "Orke" has no direct English equivalent; you must rephrase.

**Key insight:** Good translation means asking, "How would an English speaker say this?" — not "What is each Norwegian word in English?"`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-15-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-ex-1',
        number: '15.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the correct English translation of "Jeg gleder meg til å se deg"?',
        options: [
          {
            id: 'a',
            text: '"I am looking forward to seeing you."',
            isCorrect: true,
            feedback: 'Correct! "Glede seg til" = "look forward to". Note that "to" here is a preposition, so the verb after it takes the -ing form: "seeing", not "see".',
          },
          {
            id: 'b',
            text: '"I happy myself to see you."',
            isCorrect: false,
            feedback: 'Incorrect. This is word-for-word translation from Norwegian and does not make sense in English.',
          },
          {
            id: 'c',
            text: '"I am glad to see you."',
            isCorrect: false,
            feedback: 'Close, but not quite. "Jeg er glad for å se deg" = "I am glad to see you" (present). "Jeg gleder meg til" = "I am looking forward to" (future anticipation).',
          },
          {
            id: 'd',
            text: '"I enjoy me to see you."',
            isCorrect: false,
            feedback: 'Incorrect. "Enjoy" does not work with "me" as a reflexive pronoun in English the way "glede seg" works in Norwegian.',
          },
        ],
        solution: '"I am looking forward to seeing you." Remember: after "look forward to", use the -ing form because "to" is a preposition here, not an infinitive marker.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-15-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-ex-2',
        number: '15.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Translate these Norwegian sentences into natural English. Avoid direct translation.',
        subTasks: [
          {
            label: 'a',
            task: '"Det går bra med meg, takk."',
            solution: '"I am fine, thank you." or "I\'m doing well, thanks." — NOT: "It goes well with me, thanks."',
          },
          {
            label: 'b',
            task: '"Har du lyst til å bli med?"',
            solution: '"Do you want to come along?" or "Would you like to join us?" — NOT: "Have you desire to become with?"',
          },
          {
            label: 'c',
            task: '"Hun er redd for edderkopper."',
            solution: '"She is afraid of spiders." or "She is scared of spiders." — NOT: "She is scared for spiders."',
          },
          {
            label: 'd',
            task: '"Vi hadde det kjempefint i helgen."',
            solution: '"We had a wonderful weekend." or "We had a great time at the weekend." — NOT: "We had it very nice in the weekend."',
          },
        ],
        hints: [
          'Think about how an English-speaking person would express the same idea.',
          'Prepositions often change between Norwegian and English.',
        ],
        solution: 'Natural translation means conveying the meaning, not copying the structure. Norwegian and English often use completely different constructions for the same idea.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: FALSE FRIENDS ==========
    {
      id: 'engelsk-10-15-def-2',
      type: 'definition',
      title: 'False Friends — Words That Trick You',
      content: `**False friends** (falske venner) are words that look similar in Norwegian and English but have different meanings. They are one of the sneakiest translation traps.

**Common Norwegian-English false friends:**

| Norwegian word | Looks like | Actually means in Norwegian | English translation |
|---|---|---|---|
| **eventuelt** | eventually | possibly / if applicable | possibly, if needed |
| **actually** (Eng.) | aktuelt | in fact / really | — |
| **aktuell** | actual | current / relevant | current, relevant |
| **gift** | gift | married / poison | married / poison |
| **time** | time | hour / lesson | hour, lesson |
| **gymnasium** | gymnasium | upper secondary school | upper secondary school |
| **fabric** (Eng.) | fabrikk | cloth / material | — |
| **fabrikk** | fabric | factory | factory |
| **chef** | chef | boss / manager | boss, manager |
| **sensibel** | sensible | sensitive | sensitive |
| **sympatisk** | sympathetic | likeable / nice | likeable, pleasant |

**The most dangerous ones:**

**1. "Eventuelt" ≠ "eventually"**
- Norwegian: *"Vi kan eventuelt møtes i morgen."* = "We could possibly meet tomorrow."
- "Eventually" means "til slutt" / "omsider": *"He eventually passed the exam."* (= Til slutt besto han eksamen.)

**2. "Aktuell" ≠ "actual"**
- Norwegian: *"Dette er et aktuelt tema."* = "This is a current/relevant topic."
- "Actual" means "egentlig" / "faktisk": *"The actual cost was much higher."* (= Den faktiske kostnaden var mye høyere.)

**3. "Sensibel" ≠ "sensible"**
- Norwegian: *"Hun er veldig sensibel."* = "She is very sensitive."
- "Sensible" means "fornuftig": *"That is a sensible decision."* (= Det er en fornuftig avgjørelse.)`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-15-example-2',
      type: 'example',
      title: 'Example: Avoiding false friends',
      problem: `Find and correct the false friend errors in these sentences:

1. "The chef of the company gave a speech."
2. "We will eventually meet at the café if you have time."
3. "She is very sensible and cries easily."
4. "He has six times of English per week."`,
      solution: `1. *"The **boss** / **CEO** / **head** of the company gave a speech."*
   — "Chef" in English means a professional cook. The Norwegian "sjef" translates to "boss" or "manager".

2. *"We could **possibly** meet at the café if you have time."*
   — "Eventually" means "til slutt" (in the end), not "eventuelt" (possibly). The student meant "possibly" or "perhaps".

3. *"She is very **sensitive** and cries easily."*
   — "Sensible" means "fornuftig" (reasonable). The Norwegian "sensibel" translates to "sensitive".

4. *"He has six **lessons** / **classes** of English per week."*
   — "Time" in English means "tid", not "skoletime". A "time" (Norwegian) = a "lesson" or "class" in English.

**Tip:** When a word looks the same in Norwegian and English, be extra cautious — it may be a false friend!`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-15-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-ex-3',
        number: '15.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What does the English word "eventually" mean?',
        options: [
          {
            id: 'a',
            text: 'Possibly / if applicable (eventuelt)',
            isCorrect: false,
            feedback: 'Incorrect. This is the meaning of the Norwegian word "eventuelt", not the English "eventually". This is one of the most common false friend mistakes.',
          },
          {
            id: 'b',
            text: 'In the end / after a long time (til slutt / omsider)',
            isCorrect: true,
            feedback: 'Correct! "Eventually" means something happens after a period of time or after difficulties. Example: "After years of practice, she eventually became a professional musician."',
          },
          {
            id: 'c',
            text: 'Currently / at the moment (for tiden)',
            isCorrect: false,
            feedback: 'Incorrect. "Currently" or "at the moment" would be the translation for "for tiden". "Eventually" refers to something happening in the end.',
          },
          {
            id: 'd',
            text: 'Obviously / clearly (selvfølgelig)',
            isCorrect: false,
            feedback: 'Incorrect. "Obviously" means "selvfølgelig" or "tydelig". "Eventually" means "til slutt".',
          },
        ],
        solution: '"Eventually" = til slutt, omsider (in the end, after a period of time). NOT "eventuelt" = possibly, perhaps.',
      },
    },

    // ========== DEFINISJON 3: IDIOMS ==========
    {
      id: 'engelsk-10-15-def-3',
      type: 'definition',
      title: 'Translating Idioms and Expressions',
      content: `An **idiom** is a phrase whose meaning cannot be understood from the individual words. Idioms almost never translate directly between languages.

**English idioms and their Norwegian equivalents:**

| English idiom | Meaning | Norwegian equivalent |
|---|---|---|
| It's raining cats and dogs | It is raining heavily | Det regner/øser ned |
| Break the ice | Start a conversation with strangers | Bryte isen |
| A piece of cake | Something very easy | En smal sak |
| Hit the nail on the head | Say something exactly right | Treffe spikeren på hodet |
| Cost an arm and a leg | Very expensive | Kost skjorta |
| Under the weather | Feeling ill | Ikke i form |
| Bite the bullet | Accept something unpleasant | Bite i det sure eplet |
| Kill two birds with one stone | Achieve two things at once | Slå to fluer i en smekk |
| The elephant in the room | An obvious problem nobody mentions | Elefanten i rommet |
| Once in a blue moon | Very rarely | En sjelden gang |

**Translation strategies for idioms:**

**1. Find the equivalent idiom in the other language** (if one exists).
- "Bite i det sure eplet" → "Bite the bullet" (similar idea, different image)

**2. If no equivalent exists, explain the meaning.**
- "Å ha bein i nesa" → "To be determined/assertive" (no English idiom with the same image)

**3. Never translate an idiom word for word.**
- "Slå to fluer i en smekk" → NOT: "Hit two flies in one smack"
- Correct: "Kill two birds with one stone"`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-15-example-3',
      type: 'example',
      title: 'Example: Translating an idiomatic text',
      problem: `Translate this Norwegian paragraph into natural English:

"Det var en gang i blant at Lars dro til byen. Han syntes det var en smal sak å ta bussen. Da han kom fram, regnet det som fra bøtter, men Lars bet i det sure eplet og gikk til butikken likevel."`,
      solution: `**Natural translation:**
"Every now and then, Lars would go to the city. He thought taking the bus was a piece of cake. When he arrived, it was raining cats and dogs, but Lars bit the bullet and walked to the shop anyway."

**Translation notes:**
- "En gang i blant" → "Every now and then" / "Once in a while" (NOT: "one time between")
- "En smal sak" → "A piece of cake" (NOT: "a narrow thing")
- "Regnet som fra bøtter" → "Raining cats and dogs" (NOT: "raining like from buckets")
- "Bet i det sure eplet" → "Bit the bullet" (NOT: "bit the sour apple")
- "Syntes" → "thought" (NOT: "found" or "meant")

**The key:** Each idiom is replaced with its English equivalent, not translated word by word. When no equivalent exists, rephrase using plain English.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-15-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-ex-4',
        number: '15.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Match the Norwegian expression with its English equivalent.',
        subTasks: [
          {
            label: 'a',
            task: '"Å slå to fluer i en smekk"',
            solution: '"To kill two birds with one stone" — to achieve two things at once.',
            multipleChoiceOptions: ['To kill two birds with one stone', 'To break the ice', 'A piece of cake', 'To hit the nail on the head'],
          },
          {
            label: 'b',
            task: '"Å bryte isen"',
            solution: '"To break the ice" — to start a conversation or ease tension.',
            multipleChoiceOptions: ['To break the ice', 'Under the weather', 'Once in a blue moon', 'To hit the nail on the head'],
          },
          {
            label: 'c',
            task: '"Å treffe spikeren på hodet"',
            solution: '"To hit the nail on the head" — to say something exactly right.',
            multipleChoiceOptions: ['To hit the nail on the head', 'A piece of cake', 'To break the ice', 'To bite the bullet'],
          },
          {
            label: 'd',
            task: '"Å ikke være i form"',
            solution: '"To be under the weather" — to feel slightly ill.',
            multipleChoiceOptions: ['Under the weather', 'Once in a blue moon', 'A piece of cake', 'Cost an arm and a leg'],
          },
        ],
        solution: 'a) Kill two birds with one stone, b) Break the ice, c) Hit the nail on the head, d) Under the weather. Idioms carry cultural flavour — learn them as fixed phrases.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-15-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-ex-5',
        number: '15.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Correct the false friend errors in these sentences.',
        subTasks: [
          {
            label: 'a',
            task: '"I have six times of mathematics every week."',
            solution: '"I have six lessons/classes of mathematics every week." — "Time" (Norwegian) = lesson/class (English). English "time" = tid.',
          },
          {
            label: 'b',
            task: '"She is a very sympathetic person and everybody likes her."',
            solution: '"She is a very likeable/pleasant person and everybody likes her." — Norwegian "sympatisk" = likeable. English "sympathetic" = medfølende (showing sympathy for someone\'s suffering).',
          },
          {
            label: 'c',
            task: '"The chef decided to close the factory."',
            solution: '"The boss/manager decided to close the factory." — Norwegian "sjef" = boss. English "chef" = kokk.',
          },
          {
            label: 'd',
            task: '"We can eventually meet on Tuesday if you are free."',
            solution: '"We could possibly/perhaps meet on Tuesday if you are free." — Norwegian "eventuelt" = possibly. English "eventually" = til slutt.',
          },
        ],
        hints: [
          'False friends look similar in both languages but mean different things.',
          'When a word seems too easy to translate, double-check — it might be a trap.',
        ],
        solution: 'a) times → lessons, b) sympathetic → likeable, c) chef → boss, d) eventually → possibly. False friends are among the trickiest errors because they feel correct.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-15-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-ex-6',
        number: '15.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Translate this Norwegian paragraph into natural, idiomatic English. Pay attention to word order, prepositions, false friends, and expressions.',
        subTasks: [
          {
            label: 'a',
            task: `"I går gikk jeg til skolen som vanlig. Sjefen min — altså læreren — sa at vi eventuelt kunne ha en prøve på fredag. Jeg synes det er vanskelig å konsentrere meg, men jeg gleder meg til helgen. I helgen skal vi ha det gøy med familien."`,
            solution: '"Yesterday I walked to school as usual. My boss — well, my teacher — said that we might possibly have a test on Friday. I find it difficult to concentrate, but I am looking forward to the weekend. This weekend we are going to have fun with the family." — Key changes: V2→SVO (I går gikk jeg → Yesterday I walked), sjefen→boss (then corrected to teacher), eventuelt→possibly/might, synes→find/think, gleder meg til→looking forward to, ha det gøy→have fun, i helgen→this weekend.',
          },
        ],
        hints: [
          'Watch out for Norwegian V2 word order — English keeps subject before verb.',
          '"Sjefen" is used humorously for teacher but "chef" would be wrong in English.',
          '"Eventuelt" ≠ "eventually".',
          '"Glede seg til" = "look forward to".',
        ],
        solution: 'This paragraph contains multiple Norwegian-to-English traps: V2 word order, a false friend (sjef), a tricky expression (eventuelt), reflexive constructions (gleder meg, konsentrere meg), and idiomatic phrases (ha det gøy). A good translation restructures all of these into natural English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-15-summary',
      type: 'text',
      content: `## Summary — Translation Skills

**Direct translation traps:**
- Norwegian expressions rarely translate word-for-word
- "Glede seg til" = look forward to (NOT: happy myself to)
- "Ha det gøy" = have fun (NOT: have it fun)
- "Orke" = can't be bothered / don't have the energy

**Prepositions change between languages:**
- god **på** → good **at**
- redd **for** → afraid **of**
- avhengig **av** → dependent **on**

**False friends:**
- eventuelt ≠ eventually (possibly ≠ til slutt)
- aktuell ≠ actual (current ≠ faktisk)
- sensibel ≠ sensible (sensitive ≠ fornuftig)
- sjef ≠ chef (boss ≠ kokk)
- time ≠ time (skoletime ≠ tid)

**Idioms:**
- Never translate word-for-word
- Find the equivalent English idiom, or explain the meaning in plain English
- "En smal sak" → "A piece of cake" (NOT: a narrow thing)

**The golden rule of translation:**
Ask yourself: "How would an English speaker say this?" — NOT: "What is each Norwegian word in English?"`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-15-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-ex-7',
        number: '15.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Translate the following text into natural English. It contains at least six translation traps (word order, false friends, idioms, prepositions).',
        subTasks: [
          {
            label: 'a',
            task: `"Hver dag går vi til skolen og har det gøy. I klassen min er det mange flinke elever. Læreren vår er veldig sympatisk og flink til å forklare. Forrige uke hadde vi en prøve som var en smal sak for de fleste. Noen elever var ikke fornøyd med resultatet, men læreren sa at de eventuelt kunne ta prøven på nytt. Jeg synes vi er heldige som har en så god sjef!"`,
            solution: '"Every day we walk to school and have fun. In my class there are many talented students. Our teacher is very pleasant/likeable and good at explaining. Last week we had a test that was a piece of cake for most people. Some students were not satisfied with the result, but the teacher said they could possibly retake the test. I think we are lucky to have such a good boss!" — Traps: V2→SVO, ha det gøy→have fun, flinke→talented/clever, sympatisk→pleasant (NOT sympathetic), smal sak→a piece of cake, eventuelt→possibly (NOT eventually), synes→think, sjef→boss (humorous, but NOT "chef").',
          },
        ],
        hints: [
          'Read the whole text first to understand the context.',
          'Translate meaning, not words.',
          'Check for false friends: sympatisk, eventuelt, sjef.',
          'Look for idioms: en smal sak.',
        ],
        solution: 'This text combines all the major translation challenges: V2 word order, false friends, idioms, prepositions, and Norwegian expressions. A good translation sounds like it was originally written in English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-15-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-ex-8',
        number: '15.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a short paragraph (80-120 words) in English about your daily routine. Then review it specifically for "Norwegian English" — sentences that might be directly translated from Norwegian. Underline any phrases you corrected and explain the trap you avoided.',
        hints: [
          'Write your first draft naturally, then go back and check for Norwegian patterns.',
          'Common traps to check: word order after time expressions, prepositions, false friends.',
          'Ask: "Would an English speaker say it this way?"',
          'Check expressions like "I use to" (should be "I usually"), "have it fun" (should be "have fun").',
        ],
        solution: 'A strong answer shows awareness of translation traps. Example annotation: "Every morning I usually (NOT: I use to) walk to school. I am good at (NOT: good on) English and I am looking forward to (NOT: I happy me to) the exam. Last week we had fun (NOT: had it fun) at a school trip."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Direct translation', definition: 'Translating word-for-word from one language to another — often produces unnatural or incorrect results' },
    { term: 'False friend', definition: 'A word that looks similar in two languages but has a different meaning (Norwegian "eventuelt" vs. English "eventually")' },
    { term: 'Idiom', definition: 'A phrase whose meaning cannot be understood from the individual words (e.g. "a piece of cake" = something easy)' },
    { term: 'Colloquial expression', definition: 'An informal phrase used in everyday speech that may not translate directly (e.g. "ha det gøy" = "have fun")' },
    { term: 'Target language', definition: 'The language you are translating into' },
    { term: 'Source language', definition: 'The language you are translating from' },
    { term: 'Preposition', definition: 'A small word showing relationships (at, in, on, of, for, with) — these often differ between Norwegian and English' },
  ],
};

// ============================================================================
// KAPITTEL 16: Register and Tone
// ============================================================================

export const CHAPTER_ENGELSK_10_16: TextbookChapter = {
  id: 'engelsk-10-16',
  courseId: 'engelsk-10',
  chapterNumber: '16',
  title: 'Register and Tone',
  description: 'Understand how to adapt your English to different situations — from casual texting to formal essays. Learn the differences between formal, informal, and academic register.',
  estimatedMinutes: 80,
  competenceGoals: [
    'tilpasse språket til ulike kommunikasjonssituasjoner',
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'utforske og bruke et variert ordforråd og idiomatiske uttrykk tilpasset kommunikasjonssituasjonen',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-16-intro',
      type: 'text',
      content: `## Register and Tone

You do not speak to your teacher the same way you speak to your best friend. You do not write an exam essay the same way you write a text message. The **register** and **tone** of your language change depending on the situation.

**Register** refers to the level of formality in your language — from very informal (slang, texting) to very formal (academic writing, official letters).

**Tone** refers to the attitude or feeling in your writing — friendly, serious, humorous, persuasive, neutral, etc.

On exams, one of the things assessors look for is whether you can **adapt your language** to fit the situation. Writing a formal essay in text-message style, or a friendly blog post in academic jargon, shows a lack of language awareness.

**In this chapter you will learn:**

1. The differences between formal, neutral, and informal register
2. How to recognise and choose the right register for each text type
3. How tone affects the reader's experience
4. Practical features of each register (vocabulary, grammar, structure)
5. How to switch between registers depending on purpose and audience`,
    },

    // ========== DEFINISJON 1: REGISTERS ==========
    {
      id: 'engelsk-10-16-def-1',
      type: 'definition',
      title: 'The Three Main Registers',
      content: `**Register** is the level of formality in language. English generally operates on a scale from informal to formal:

**1. Informal Register**
Used in casual, everyday situations: conversations with friends, text messages, social media, personal blogs.

**Features:**
- Contractions: *I'm, don't, can't, gonna, wanna*
- Slang and colloquialisms: *cool, hang out, no way, kinda, stuff*
- Short sentences and fragments: *"So annoying." "Yeah, same."*
- First and second person: *I, you, we*
- Phrasal verbs: *put up with, get along, hang out, figure out*
- Emotive language: *awesome, terrible, literally dying*

**2. Neutral / Semi-formal Register**
Used in most school work, news articles, business emails, presentations.

**Features:**
- Some contractions are acceptable: *don't, it's, can't*
- Standard vocabulary: clear and precise but not overly technical
- Complete sentences with varied structure
- Balanced use of personal and impersonal constructions
- Common transition words: *however, therefore, for example*

**3. Formal Register**
Used in academic essays, official letters, legal documents, research papers.

**Features:**
- No contractions: *do not, it is, cannot*
- Sophisticated, precise vocabulary: *obtain* (not *get*), *require* (not *need*), *demonstrate* (not *show*)
- Passive voice is common: *"The experiment was conducted..."*
- Impersonal constructions: *"It can be argued that..."* (not *"I think..."*)
- Complex sentence structures with subordinate clauses
- No slang, no colloquialisms, no emoticons
- Hedging language: *perhaps, it appears that, this suggests*

**Quick comparison:**

| Feature | Informal | Neutral | Formal |
|---|---|---|---|
| "I think" | "I reckon..." | "I think..." | "It can be argued..." |
| "Get" | "get" | "get / obtain" | "obtain / acquire" |
| "A lot" | "loads of" / "tons of" | "a lot of" / "many" | "a significant number of" / "numerous" |
| "Because" | "'cause" / "cos" | "because" | "due to the fact that" / "owing to" |`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-16-example-1',
      type: 'example',
      title: 'Example: The same message in three registers',
      problem: `Write the same message — asking someone to attend a meeting about climate change — in three different registers: informal, neutral, and formal.`,
      solution: `**Informal (text message to a friend):**
"Hey! There's this climate thing at school tmrw at 4. You should totally come — it's gonna be interesting! Let me know if you're in."

**Neutral (email to classmates):**
"Hi everyone, there will be a meeting about climate change in the school hall tomorrow at 4 pm. I'd encourage you all to attend — it promises to be informative and thought-provoking. Please let me know if you plan to come."

**Formal (official invitation):**
"Dear students, you are cordially invited to attend an informational session on climate change, which will be held in the school assembly hall on Thursday, 15 March, at 16:00. The session will address current environmental challenges and explore potential solutions. Your attendance would be greatly appreciated. Please confirm your participation by responding to this communication."

**Key differences:**
- **Vocabulary:** come → attend → confirm your participation
- **Contractions:** there's, it's gonna → there will, I'd → you are cordially invited, would be
- **Structure:** short fragments → complete sentences → complex, formal structures
- **Pronouns:** you → everyone/you → students (impersonal)
- **Tone:** casual/enthusiastic → friendly/professional → respectful/distant`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-16-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-ex-1',
        number: '16.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which register is this sentence written in? "It can be argued that social media has had a detrimental impact on the mental well-being of adolescents."',
        options: [
          {
            id: 'a',
            text: 'Informal — it uses casual language and slang',
            isCorrect: false,
            feedback: 'Incorrect. There is no slang or casual language here. Words like "detrimental", "adolescents", and the impersonal construction "It can be argued" signal formal register.',
          },
          {
            id: 'b',
            text: 'Neutral — it is clear and straightforward',
            isCorrect: false,
            feedback: 'Not quite. While the sentence is clear, the use of "It can be argued", "detrimental", "mental well-being", and "adolescents" pushes it into formal territory.',
          },
          {
            id: 'c',
            text: 'Formal — it uses impersonal construction, no contractions, and sophisticated vocabulary',
            isCorrect: true,
            feedback: 'Correct! The impersonal opener ("It can be argued"), the hedging language, and the sophisticated vocabulary (detrimental, mental well-being, adolescents) are all markers of formal academic register.',
          },
          {
            id: 'd',
            text: 'It could be any register — there are no clear indicators',
            isCorrect: false,
            feedback: 'Incorrect. There are several clear indicators of formal register: "It can be argued" (impersonal/hedging), "detrimental" (formal vocabulary), "adolescents" (formal word for teenagers).',
          },
        ],
        solution: 'Formal register. Key indicators: impersonal construction ("It can be argued"), no contractions, sophisticated vocabulary (detrimental, adolescents, mental well-being), and hedging language.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-16-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-ex-2',
        number: '16.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Identify the register (informal, neutral, or formal) for each text snippet. Explain what features gave it away.',
        subTasks: [
          {
            label: 'a',
            task: '"OMG did u see the game last night?? it was insane!! 🤯"',
            solution: 'Informal. Features: abbreviations (u, OMG), lowercase, exclamation marks, slang (insane), emoji, no punctuation structure.',
          },
          {
            label: 'b',
            task: '"The research findings indicate that regular physical exercise contributes significantly to improved cognitive function among young adults."',
            solution: 'Formal. Features: no contractions, impersonal/third person, sophisticated vocabulary (cognitive function, contributes significantly), complex sentence structure, academic tone.',
          },
          {
            label: 'c',
            task: '"Exercise is really good for your brain. Studies show that people who work out regularly tend to think more clearly and do better at school."',
            solution: 'Neutral. Features: simple but complete sentences, standard vocabulary (really good, work out, think clearly), some informality (really good, work out) but proper grammar and structure.',
          },
        ],
        solution: 'a) Informal — slang, abbreviations, emoji. b) Formal — academic vocabulary, impersonal tone, no contractions. c) Neutral — clear language, complete sentences, slightly casual vocabulary.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: FORMAL VS INFORMAL VOCABULARY ==========
    {
      id: 'engelsk-10-16-def-2',
      type: 'definition',
      title: 'Formal vs. Informal Vocabulary',
      content: `One of the clearest markers of register is vocabulary choice. English often has two words for the same concept — one informal (usually from Old English/Germanic roots) and one formal (usually from Latin/French roots).

**Common pairs:**

| Informal | Formal | Example (formal) |
|---|---|---|
| get | obtain / acquire | *"Students must obtain permission."* |
| help | assist / facilitate | *"Staff are available to assist you."* |
| need | require | *"All applicants require a valid passport."* |
| ask | inquire / request | *"Please inquire at the front desk."* |
| buy | purchase | *"Tickets can be purchased online."* |
| start / begin | commence / initiate | *"The ceremony will commence at noon."* |
| end / finish | conclude / terminate | *"The contract was terminated."* |
| enough | sufficient / adequate | *"There is sufficient evidence."* |
| show | demonstrate / indicate | *"The data demonstrates a clear trend."* |
| give | provide / supply | *"The report provides useful insights."* |
| use | utilise / employ | *"The method employed in this study..."* |
| try | attempt / endeavour | *"We will endeavour to resolve this."* |
| about | regarding / concerning | *"Regarding your recent inquiry..."* |
| but | however / nevertheless | *"However, the results were inconclusive."* |
| so | therefore / consequently | *"Consequently, the project was delayed."* |

**Important:** Formal vocabulary is not always "better". Using overly formal language in a casual context sounds stilted and pretentious. The key is **matching vocabulary to situation**.

- In an essay: *"The evidence demonstrates that..."* (appropriate)
- In a text to a friend: *"The evidence demonstrates that..."* (sounds ridiculous)`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-16-example-2',
      type: 'example',
      title: 'Example: Upgrading register',
      problem: `Rewrite this informal paragraph in formal academic register:

"Lots of kids these days spend way too much time on their phones. It's kinda messing up their sleep and stuff. Scientists have found out that blue light from screens makes it harder to fall asleep. Schools should probably do something about it."`,
      solution: `**Formal version:**
"A significant number of young people in contemporary society spend an excessive amount of time using mobile devices. This behaviour appears to have a detrimental impact on sleep quality. Research has demonstrated that blue light emitted by screens interferes with the body's natural sleep cycle. It is therefore recommended that educational institutions implement measures to address this issue."

**Changes made:**

| Informal | Formal |
|---|---|
| Lots of kids | A significant number of young people |
| these days | in contemporary society |
| way too much | an excessive amount of |
| kinda messing up | appears to have a detrimental impact on |
| sleep and stuff | sleep quality |
| found out | demonstrated |
| makes it harder to | interferes with |
| Schools should probably do something | It is recommended that educational institutions implement measures |

**Notice:** The formal version is longer — formal English tends to use more words to be precise and impersonal. This is normal for academic writing, but in other contexts, being concise is better.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-16-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-ex-3',
        number: '16.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Replace each informal word or phrase with a more formal alternative.',
        subTasks: [
          {
            label: 'a',
            task: '"We need to **get** more information **about** this topic."',
            solution: '"We need to obtain/acquire more information regarding/concerning this topic."',
            multipleChoiceOptions: ['obtain ... regarding', 'get ... about', 'find ... on', 'take ... for'],
          },
          {
            label: 'b',
            task: '"The results **show** that the plan **didn\'t work**."',
            solution: '"The results demonstrate/indicate that the plan was not successful / did not succeed / proved ineffective."',
            multipleChoiceOptions: ['demonstrate ... was not successful', 'show ... didn\'t work', 'tell ... failed', 'say ... was bad'],
          },
          {
            label: 'c',
            task: '"**Lots of** people **think** that climate change is a **big** problem."',
            solution: '"A significant number of / Numerous people believe/consider that climate change is a substantial/major problem."',
            multipleChoiceOptions: ['A significant number of ... believe ... substantial', 'Lots of ... think ... big', 'Many ... say ... huge', 'All ... know ... large'],
          },
          {
            label: 'd',
            task: '"The teacher **asked** us to **try** harder."',
            solution: '"The teacher requested/encouraged us to endeavour / make a greater effort."',
            multipleChoiceOptions: ['requested ... endeavour', 'asked ... try', 'told ... attempt', 'said ... do'],
          },
        ],
        solution: 'a) obtain, regarding b) demonstrate, was not successful c) A significant number of, believe, substantial d) requested, endeavour. Formal vocabulary often has Latin or French origins.',
      },
    },

    // ========== DEFINISJON 3: TONE ==========
    {
      id: 'engelsk-10-16-def-3',
      type: 'definition',
      title: 'Tone — The Attitude Behind Your Words',
      content: `**Tone** is the attitude or feeling that comes through in your writing. While register is about formality level, tone is about **emotional colour**.

**Common tones in English writing:**

**1. Neutral / Objective**
Presents information without personal opinion or emotion.
- *"The unemployment rate increased by 2% last year."*
- Used in: news reports, textbooks, encyclopaedias

**2. Persuasive / Argumentative**
Aims to convince the reader of a particular viewpoint.
- *"We must act now to protect our planet for future generations."*
- Used in: opinion essays, speeches, editorials, advertisements

**3. Formal / Academic**
Serious, impersonal, and evidence-based.
- *"The findings suggest a correlation between screen time and sleep deprivation."*
- Used in: research papers, official reports

**4. Friendly / Conversational**
Warm, approachable, as if talking to a friend.
- *"Have you ever wondered why we dream? Well, you're not alone!"*
- Used in: blog posts, informal articles, personal letters

**5. Humorous / Ironic**
Uses wit, sarcasm, or exaggeration for entertainment.
- *"Monday mornings: proof that the universe has a sense of humour."*
- Used in: comedy writing, satire, some opinion columns

**6. Serious / Solemn**
Respectful and grave, dealing with important or sensitive topics.
- *"We remember those who gave their lives in the pursuit of freedom."*
- Used in: memorial speeches, serious editorials

**How tone is created:**
- **Word choice:** "home" (warm) vs. "residence" (cold)
- **Sentence length:** Short sentences = urgent, dramatic. Long sentences = reflective, calm.
- **Punctuation:** Exclamation marks = enthusiasm/urgency. Periods = calm/factual.
- **Rhetorical devices:** Rhetorical questions create engagement. Repetition creates emphasis.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-16-example-3',
      type: 'example',
      title: 'Example: Same topic, different tone',
      problem: `Write about school lunch in three different tones: neutral, persuasive, and humorous.`,
      solution: `**Neutral tone:**
"Most Norwegian schools offer a lunch break of approximately 30 minutes. Students typically bring packed lunches from home, though some schools provide canteen services."

**Persuasive tone:**
"School lunches are more than just a break from learning — they are fuel for growing minds. Every student deserves access to nutritious, affordable food during the school day. It is time our schools prioritised proper canteen facilities."

**Humorous tone:**
"Let's be honest: the saddest object in any school is a squashed sandwich that has been sitting at the bottom of a backpack since 7 am. By lunchtime, it looks like modern art. Surely, in 2026, we can do better than this."

**What makes each tone different?**
- **Neutral:** Factual language, no opinion, impersonal.
- **Persuasive:** Emotional language ("fuel for growing minds", "every student deserves"), call to action ("It is time").
- **Humorous:** Exaggeration ("saddest object"), imagery ("looks like modern art"), rhetorical question, conversational.

The facts are the same in all three — but the reader's experience is completely different.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-16-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-ex-4',
        number: '16.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What register and tone would be most appropriate for a formal letter to the local council requesting a new bike lane?',
        options: [
          {
            id: 'a',
            text: 'Formal register, persuasive tone',
            isCorrect: true,
            feedback: 'Correct! A letter to the local council requires formal register (no contractions, sophisticated vocabulary, proper structure) with a persuasive tone (presenting arguments, making a case for the bike lane).',
          },
          {
            id: 'b',
            text: 'Informal register, humorous tone',
            isCorrect: false,
            feedback: 'Incorrect. An informal, humorous letter to a government body would not be taken seriously. While a touch of humour might work in some contexts, the overall register should be formal.',
          },
          {
            id: 'c',
            text: 'Formal register, neutral tone',
            isCorrect: false,
            feedback: 'Close, but not quite. A neutral tone simply presents facts without advocating for action. Since you are requesting something, you need a persuasive tone to make your case.',
          },
          {
            id: 'd',
            text: 'Neutral register, serious tone',
            isCorrect: false,
            feedback: 'Not ideal. While a serious tone is fine, the register should be formal (not just neutral) for an official letter. You also need persuasion, not just seriousness.',
          },
        ],
        solution: 'Formal register + persuasive tone. Official correspondence requires formal language, and requesting action requires persuasion (presenting arguments and evidence).',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-16-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-ex-5',
        number: '16.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Rewrite this formal sentence in informal register, and vice versa.',
        subTasks: [
          {
            label: 'a',
            task: 'Formal → Informal: "I wish to express my sincere gratitude for the assistance you have provided."',
            solution: '"Thanks so much for all your help!" or "Cheers for helping me out — I really appreciate it!"',
          },
          {
            label: 'b',
            task: 'Informal → Formal: "Hey, can you fix this ASAP? It\'s really bugging me."',
            solution: '"I would be grateful if you could address this matter at your earliest convenience, as it is causing considerable inconvenience."',
          },
          {
            label: 'c',
            task: 'Informal → Formal: "The homework was super easy and I did it in like 10 minutes."',
            solution: '"The assignment was relatively straightforward and was completed in approximately ten minutes."',
          },
          {
            label: 'd',
            task: 'Formal → Informal: "It has been brought to our attention that noise levels in the corridors have become excessive."',
            solution: '"Hey everyone — it\'s way too noisy in the corridors. Keep it down, please!" or "So, apparently the corridors are getting really loud. Can we try to be a bit quieter?"',
          },
        ],
        hints: [
          'For informal: use contractions, simpler vocabulary, shorter sentences.',
          'For formal: remove contractions, use sophisticated vocabulary, make sentences longer and more structured.',
        ],
        solution: 'Switching register means changing vocabulary, sentence structure, and level of directness — while keeping the core meaning the same.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-16-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-ex-6',
        number: '16.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Read the following text and identify problems with register consistency. Then rewrite it in a consistent formal register.',
        subTasks: [
          {
            label: 'a',
            task: `"The impact of social media on young people has been extensively studied in recent years. Basically, loads of teenagers are kinda addicted to their phones and stuff. Research conducted by the University of Oxford demonstrates a correlation between excessive screen time and deteriorating mental health outcomes. It's like, really bad for them. Consequently, it is recommended that parents and educators implement strategies to promote healthier digital habits."`,
            solution: 'The text mixes formal and informal register. Sentences 1, 3, and 5 are formal ("extensively studied", "demonstrates a correlation", "it is recommended"). Sentences 2 and 4 are informal ("Basically, loads of", "kinda addicted", "and stuff", "It\'s like, really bad"). Consistent formal version: "The impact of social media on young people has been extensively studied in recent years. A significant proportion of teenagers appear to exhibit addictive behaviours in relation to their mobile devices. Research conducted by the University of Oxford demonstrates a correlation between excessive screen time and deteriorating mental health outcomes. These findings are deeply concerning. Consequently, it is recommended that parents and educators implement strategies to promote healthier digital habits."',
          },
        ],
        hints: [
          'Look for sudden shifts between formal and informal vocabulary.',
          'Formal writing should not contain slang, fillers, or casual expressions.',
          'Replace informal elements with formal equivalents while keeping the meaning.',
        ],
        solution: 'Register consistency is crucial in academic writing. Mixing "extensively studied" with "kinda addicted" creates a jarring effect and undermines the writer\'s credibility.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-16-summary',
      type: 'text',
      content: `## Summary — Register and Tone

**Register = level of formality:**
- **Informal:** contractions, slang, short sentences, phrasal verbs, first person
- **Neutral:** standard vocabulary, complete sentences, some contractions acceptable
- **Formal:** no contractions, sophisticated vocabulary, passive voice, impersonal constructions, hedging language

**Tone = attitude/feeling:**
- Neutral, persuasive, academic, friendly, humorous, serious
- Created through word choice, sentence length, punctuation, and rhetorical devices

**Formal vocabulary upgrades:**
- get → obtain/acquire
- show → demonstrate/indicate
- lots of → a significant number of / numerous
- try → attempt/endeavour
- help → assist/facilitate
- need → require

**Key principles:**
1. **Match register to situation** — formal for essays and official letters, informal for messages and blogs
2. **Be consistent** — do not mix registers within one text
3. **Adapt to audience** — who is reading? Teacher, friend, official?
4. **Formal is not always better** — use the right level for the context
5. **Tone supports your purpose** — persuasive for arguments, neutral for reports, friendly for personal writing`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-16-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-ex-7',
        number: '16.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write the same message in three registers: inform a group of people that the school trip has been cancelled due to bad weather.',
        subTasks: [
          {
            label: 'a',
            task: 'Informal: A message to your friend group chat.',
            solution: 'Example: "Ugh, the trip is cancelled 😩 Apparently the weather is gonna be awful tomorrow so they called it off. So annoying!! Maybe we can do something else instead?"',
          },
          {
            label: 'b',
            task: 'Neutral: An email to all students in your year.',
            solution: 'Example: "Hi everyone, unfortunately the school trip planned for tomorrow has been cancelled due to bad weather. We will let you know as soon as a new date is set. Sorry for the inconvenience!"',
          },
          {
            label: 'c',
            task: 'Formal: An official letter from the school to parents.',
            solution: 'Example: "Dear parents and guardians, we regret to inform you that the school excursion scheduled for Friday, 28 February, has been postponed due to adverse weather conditions. A revised date will be communicated in due course. We sincerely apologise for any inconvenience this may cause and appreciate your understanding."',
          },
        ],
        hints: [
          'Think about your audience for each version.',
          'Informal: short, emotional, contractions, emoji are fine.',
          'Neutral: clear, complete sentences, slightly personal.',
          'Formal: no contractions, impersonal, polished vocabulary.',
        ],
        solution: 'A strong answer shows clear differences between the three registers while conveying the same core information. The informal version should feel like a genuine text message, and the formal version should sound like an official communication.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-16-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-ex-8',
        number: '16.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a formal essay paragraph (100-150 words) arguing for or against school uniforms. Then rewrite the same argument as an informal blog post paragraph. Compare the two and identify at least five specific differences in register.',
        hints: [
          'Formal: no contractions, use "It can be argued", "Research suggests", "Furthermore".',
          'Informal: contractions, "I think", "Honestly", "Let\'s be real".',
          'Both paragraphs should present the same argument — only the register changes.',
          'List five differences: vocabulary, contractions, sentence structure, pronoun use, tone.',
        ],
        solution: 'A strong answer shows awareness of specific register features. Example differences: 1) "It can be argued" vs. "I think", 2) "Furthermore" vs. "Plus/Also", 3) "students" vs. "kids", 4) no contractions vs. contractions, 5) passive voice vs. active voice with "I/we". The core argument should remain identical.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Register', definition: 'The level of formality in language, ranging from informal (casual, slang) to formal (academic, official)' },
    { term: 'Tone', definition: 'The attitude or feeling expressed in writing — friendly, serious, humorous, persuasive, neutral, etc.' },
    { term: 'Formal register', definition: 'Language used in academic, official, and professional contexts — no contractions, sophisticated vocabulary, impersonal constructions' },
    { term: 'Informal register', definition: 'Language used in casual contexts — contractions, slang, short sentences, personal pronouns, phrasal verbs' },
    { term: 'Hedging language', definition: 'Cautious expressions used in academic writing to avoid absolute claims (perhaps, it appears that, this suggests, it could be argued)' },
    { term: 'Passive voice', definition: 'A construction where the subject receives the action ("The experiment was conducted") — common in formal writing' },
    { term: 'Colloquialism', definition: 'An informal expression used in everyday speech but not appropriate for formal writing (gonna, kinda, stuff, loads of)' },
    { term: 'Register consistency', definition: 'Maintaining the same level of formality throughout a text — mixing registers weakens your writing' },
  ],
};

// ============================================================================
// EKSPORT: Samlet array for del 5
// ============================================================================

export const ENGELSK_10_DEL5_CHAPTERS = [
  CHAPTER_ENGELSK_10_11,
  CHAPTER_ENGELSK_10_12,
  CHAPTER_ENGELSK_10_13,
  CHAPTER_ENGELSK_10_14,
  CHAPTER_ENGELSK_10_15,
  CHAPTER_ENGELSK_10_16,
];
