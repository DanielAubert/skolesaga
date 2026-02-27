/**
 * Tekstbok innhold for Engelsk 10. klasse - Narrativ versjon Del 5
 * Kapittel 11-16 (6 kapitler totalt)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 11 NARRATIVE: Grammar Review — Verb Tenses
// ============================================================================

export const CHAPTER_ENGELSK_10_11_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-11-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '11',
  title: 'Grammar Review — Verb Tenses',
  subtitle: 'Narrative Version',
  description: 'Master English verb tenses through clear explanations and common Norwegian pitfalls -- from simple to perfect, and everything in between.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'utforske og bruke et variert ordforråd og idiomatiske uttrykk tilpasset kommunikasjonssituasjonen',
  ],
  linkedChapterId: 'engelsk-10-11',
  content: [
    {
      id: 'engelsk-10-11-n-intro',
      type: 'text',
      content: `## Time Travel Through Grammar

Every time you use a verb, you are placing an event in time. "I eat breakfast" puts the action in the present. "I ate breakfast" puts it in the past. "I will eat breakfast" sends it to the future. This seems straightforward -- until you realize that English has twelve different verb tenses, each expressing a subtly different relationship between an action and time.

Why does English need twelve tenses when Norwegian manages with fewer? Because English uses verb forms to express nuances that Norwegian handles differently -- through context, word order, or adverbs. When a Norwegian speaker says "Jeg har bodd her i tre ar," there is one natural translation. But in English, "I have lived here for three years" and "I have been living here for three years" have slightly different meanings. The first emphasizes the fact; the second emphasizes the ongoing nature of the experience.

For Norwegian students, verb tenses are one of the trickiest areas of English grammar -- not because the rules are complicated, but because your brain is trained to think in Norwegian tense patterns. The good news is that once you understand the logic behind each tense, the patterns become intuitive. Let us travel through time together.`,
    },
    {
      id: 'engelsk-10-11-n-section1',
      type: 'text',
      content: `## Simple Tenses: The Foundation

The three simple tenses are the workhorses of English. They express straightforward actions in present, past, and future.

**Simple present** describes habits, general truths, and permanent states. "She works at the hospital." "Water boils at 100 degrees." "I live in Bergen." Notice that it does not describe what is happening right now -- that is the present continuous (which we will get to shortly). A common Norwegian mistake is using the present continuous for habits: "I am working at the hospital" sounds like you are there right now, not that it is your regular job.

The simple present also appears in time clauses about the future -- and this is where Norwegian speakers often stumble. In English, you say "When she arrives, we will start the meeting" -- NOT "When she will arrive..." Norwegian uses future tense in both parts, but English uses simple present in the "when" clause. This pattern applies to "if," "when," "before," "after," "as soon as," and "until."

**Simple past** describes completed actions at a specific time in the past. "She worked yesterday." "We visited London last summer." "He wrote the essay on Monday." The key word is completed -- the action is finished and done. Irregular verbs are the challenge here: go/went, write/wrote, eat/ate, see/saw. There is no shortcut; you need to memorize them.

A major Norwegian pitfall is using present perfect where English requires simple past. In Norwegian, you say "Jeg har sett den filmen" (I have seen that movie). In English, if you are talking about a specific past time, you must use simple past: "I saw that movie last week." You only use present perfect when the exact time is unspecified or irrelevant: "I have seen that movie" (at some point in my life).

**Simple future** with "will" expresses predictions, spontaneous decisions, and promises. "It will rain tomorrow." "I will help you with that." "She will be a great doctor." Note that for planned future actions, English prefers "going to": "I am going to visit my grandmother this weekend" (a plan), versus "I will visit my grandmother" (a promise or decision made just now).`,
    },
    {
      id: 'engelsk-10-11-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on simple tenses:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-11-n-quiz1-q0',
            task: 'Which sentence correctly uses the simple present in a future time clause?',
            options: [
              { id: 'a', text: 'When she will arrive, we will start the meeting.', isCorrect: false },
              { id: 'b', text: 'When she arrives, we will start the meeting.', isCorrect: true },
              { id: 'c', text: 'When she is arriving, we will start the meeting.', isCorrect: false },
              { id: 'd', text: 'When she has arrived, we are starting the meeting.', isCorrect: false },
            ],
            solution: 'In English, time clauses introduced by "when," "if," "before," "after," "as soon as," and "until" use the simple present even when referring to future events. This differs from Norwegian, where the future tense is used in both clauses.',
          },
          {
            id: 'engelsk-10-11-n-quiz1-q1',
            task: 'A Norwegian student writes: "I have visited London last summer." What is wrong?',
            options: [
              { id: 'a', text: 'Nothing -- the sentence is correct', isCorrect: false },
              { id: 'b', text: 'It should be simple past: "I visited London last summer" because a specific time is mentioned', isCorrect: true },
              { id: 'c', text: 'It should be past continuous: "I was visiting London last summer"', isCorrect: false },
              { id: 'd', text: 'It should be future: "I will visit London last summer"', isCorrect: false },
            ],
            solution: 'When a specific past time is mentioned ("last summer"), English requires the simple past, not the present perfect. "I visited London last summer" is correct. The present perfect ("I have visited London") is used when the exact time is unspecified or irrelevant.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-11-n-section2',
      type: 'text',
      content: `## Continuous and Perfect Tenses: Adding Nuance

The continuous tenses (also called progressive) emphasize that an action is in progress -- it is ongoing, not completed.

**Present continuous** describes actions happening right now or temporary situations: "She is reading a book" (at this moment). "I am living in Oslo this year" (temporarily). It can also describe future arrangements: "We are meeting at three o'clock tomorrow." Norwegian speakers sometimes confuse this with the simple present. Remember: simple present for habits and permanent facts, present continuous for right now and temporary situations.

**Past continuous** describes actions that were in progress at a specific moment in the past: "I was sleeping when the phone rang." "They were playing football at 3 PM." It is often used to set the scene: "The sun was shining, birds were singing, and children were playing in the park." The past continuous provides background, while the simple past provides the main events.

**Present perfect** is the tense that causes Norwegian speakers the most confusion, because its Norwegian equivalent ("har gjort") does not follow the same rules. In English, present perfect describes past actions with a present connection: "I have finished my homework" (and now it is done). "She has lived here for ten years" (and still does). "They have visited Paris three times" (in their lives so far). Never use present perfect with a specific past time -- "I have visited Paris in 2019" is wrong. Say "I visited Paris in 2019" (simple past) or "I have visited Paris" (present perfect, no specific time).

Key time expressions with present perfect: "already," "yet," "just," "ever," "never," "for," "since," "so far," "recently." Key time expressions with simple past: "yesterday," "last week," "in 2020," "ago," "when I was young."

**Present perfect continuous** emphasizes the duration of an action that started in the past and continues to the present: "I have been studying English for five years." "She has been working here since January." The difference from present perfect is subtle: "I have read three books" (completed count) versus "I have been reading all afternoon" (emphasis on the duration of the activity).

**Past perfect** describes an action completed before another past action: "When I arrived, they had already left." "She realized she had forgotten her keys." Think of it as the past of the past. It helps you sequence events clearly when narrating stories.`,
    },
    {
      id: 'engelsk-10-11-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-11-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on continuous and perfect tenses:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-11-n-quiz2-q0',
            task: '"She has been working here since January." Why is present perfect continuous used instead of present perfect?',
            options: [
              { id: 'a', text: 'Because the action happened in January', isCorrect: false },
              { id: 'b', text: 'Because the emphasis is on the ongoing duration of the action', isCorrect: true },
              { id: 'c', text: 'Because she is no longer working there', isCorrect: false },
              { id: 'd', text: 'Because "since" always requires the continuous form', isCorrect: false },
            ],
            solution: 'Present perfect continuous emphasizes the ongoing duration of an activity ("has been working" stresses that it has been continuous since January). Present perfect ("has worked") would emphasize the fact more than the duration. Both are grammatically correct, but they carry different nuances.',
          },
          {
            id: 'engelsk-10-11-n-quiz2-q1',
            task: 'Which sentence correctly uses the past perfect?',
            options: [
              { id: 'a', text: 'When I arrived, they already left.', isCorrect: false },
              { id: 'b', text: 'When I arrived, they had already left.', isCorrect: true },
              { id: 'c', text: 'When I had arrived, they already left.', isCorrect: false },
              { id: 'd', text: 'When I have arrived, they had already left.', isCorrect: false },
            ],
            solution: 'Past perfect ("had left") is used for the earlier of two past events. The arrival is the reference point in the past (simple past: "arrived"), and the leaving happened before that (past perfect: "had already left"). Past perfect is the past of the past.',
          },
          {
            id: 'engelsk-10-11-n-quiz2-q2',
            task: 'Choose the correct tense: "I ___ (live) in Bergen for three years now."',
            options: [
              { id: 'a', text: 'live', isCorrect: false },
              { id: 'b', text: 'lived', isCorrect: false },
              { id: 'c', text: 'have lived / have been living', isCorrect: true },
              { id: 'd', text: 'am living', isCorrect: false },
            ],
            solution: 'Both present perfect ("have lived") and present perfect continuous ("have been living") are correct here because the action started in the past and continues to the present. "For three years now" signals this ongoing connection between past and present.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-11-n-summary',
      type: 'text',
      content: `## Summary

English has twelve verb tenses, each expressing a specific relationship between action and time. The **simple tenses** form the foundation: simple present for habits and facts, simple past for completed actions at a specific time, and simple future for predictions and decisions. **Continuous tenses** emphasize ongoing actions, while **perfect tenses** connect different time periods.

The biggest Norwegian pitfall is using **present perfect with specific past times** -- always use simple past with "yesterday," "last week," or "in 2020." Remember that **time clauses** (when, if, before, after) use simple present even for future events. **Past perfect** sequences events in the past. Master these patterns, and your English will sound natural and precise.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 12 NARRATIVE: Sentence Structure and Word Order
// ============================================================================

export const CHAPTER_ENGELSK_10_12_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-12-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '12',
  title: 'Sentence Structure and Word Order',
  subtitle: 'Narrative Version',
  description: 'Master the architecture of English sentences -- from basic SVO order to adverb placement and complex sentence construction.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
  ],
  linkedChapterId: 'engelsk-10-12',
  content: [
    {
      id: 'engelsk-10-12-n-intro',
      type: 'text',
      content: `## The Architecture of a Sentence

Every language has rules about word order -- the sequence in which words must appear for a sentence to make sense. In Norwegian, word order is flexible in some ways: "I dag spiste jeg frokost" inverts the subject and verb after an adverb. In English, this inversion almost never happens: "Today I ate breakfast" keeps the subject before the verb. This difference is one of the most common sources of errors for Norwegian English learners.

Think of English sentence structure as architecture. Just as a building needs a strong foundation, walls, and roof in the right order, an English sentence needs its parts arranged correctly. Move the roof to the ground floor, and the building collapses. Move the verb before the subject, and the sentence sounds like a question (or just wrong).

The good news is that English word order follows consistent, learnable patterns. Once you internalize these patterns, you will not need to think about them consciously -- they will become as automatic as breathing. Let us build your understanding from the ground up.`,
    },
    {
      id: 'engelsk-10-12-n-section1',
      type: 'text',
      content: `## SVO: The Backbone of English

English is an SVO language: Subject-Verb-Object. This is the default pattern that almost every English sentence follows.

"The cat (S) chased (V) the mouse (O)." "She (S) reads (V) novels (O)." "We (S) enjoyed (V) the concert (O)."

This pattern holds even when you add extra information. If you want to say when, where, or how something happened, these details come after the SVO core -- or at the very beginning of the sentence, but never between the subject and verb.

The most important rule for Norwegian speakers: **never put an adverb or other element between the subject and the verb in a main clause.** In Norwegian, you say "I dag spiste jeg frokost" -- the time expression comes first, then the verb, then the subject (V2 word order). In English, the subject always comes before the verb in statements: "Today I ate breakfast." Not "Today ate I breakfast."

This V2 rule in Norwegian is deeply ingrained, and it creates persistent errors. Watch for these patterns:

- "Yesterday went I to school" -- WRONG. Correct: "Yesterday I went to school."
- "Never have I seen such a thing" -- This is actually correct, but only for emphasis. In normal speech: "I have never seen such a thing."
- "In the park played the children" -- WRONG. Correct: "The children played in the park" or "In the park, the children played."

**The order of place, manner, and time** is another area where Norwegian and English differ. English follows the pattern: place, then manner, then time -- or more commonly, the reverse: time, manner, place. "She sang beautifully at the concert yesterday" or "Yesterday she sang beautifully at the concert." The key is that these adverbials come after the verb and object, not between the subject and verb.`,
    },
    {
      id: 'engelsk-10-12-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on SVO and word order:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-12-n-quiz1-q0',
            task: 'Which sentence has correct English word order?',
            options: [
              { id: 'a', text: 'Yesterday went she to the store.', isCorrect: false },
              { id: 'b', text: 'She went to the store yesterday.', isCorrect: true },
              { id: 'c', text: 'To the store went she yesterday.', isCorrect: false },
              { id: 'd', text: 'Went she yesterday to the store.', isCorrect: false },
            ],
            solution: 'English maintains SVO order in statements. The subject "she" must come before the verb "went." Time expressions like "yesterday" go at the end or beginning of the sentence, never between subject and verb.',
          },
          {
            id: 'engelsk-10-12-n-quiz1-q1',
            task: 'Why do Norwegian speakers often write "Yesterday went I to school" in English?',
            options: [
              { id: 'a', text: 'Because they are translating directly from Norwegian V2 word order', isCorrect: true },
              { id: 'b', text: 'Because English used to have this word order historically', isCorrect: false },
              { id: 'c', text: 'Because this is correct in British English but not American English', isCorrect: false },
              { id: 'd', text: 'Because they confuse statements with questions', isCorrect: false },
            ],
            solution: 'Norwegian uses V2 (verb-second) word order, where the verb must be the second element in a main clause. So "I gar gikk jeg pa skolen" is correct Norwegian. English does not follow this rule -- the subject always precedes the verb in statements, regardless of what comes first in the sentence.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-12-n-section2',
      type: 'text',
      content: `## Adverb Placement and Complex Sentences

Adverb placement in English follows specific rules that differ from Norwegian. Getting this right instantly makes your English sound more natural.

**Frequency adverbs** (always, usually, often, sometimes, rarely, never) go before the main verb but after "be" and after auxiliary verbs. "She always arrives on time." "They are usually happy." "I have never been to Japan." "He can often be found in the library." In Norwegian, these adverbs are more flexible in placement, which leads to errors like "She arrives always on time" or "Never I have been to Japan."

**Adverbs of degree** (very, really, quite, extremely, almost) go directly before the word they modify. "The film was extremely interesting." "She almost finished the project." "He speaks English very well." Pay attention to "enough," which follows the adjective it modifies: "She is old enough" (not "enough old") and "He runs fast enough" (not "enough fast").

**Complex sentences** combine independent and dependent clauses to express relationships between ideas. An independent clause can stand alone: "She passed the exam." A dependent clause cannot: "Because she studied hard." Together, they form a complex sentence: "She passed the exam because she studied hard."

Common subordinating conjunctions include: because, although, while, when, if, unless, since, before, after, until. When the dependent clause comes first, use a comma: "Although it was raining, we went for a walk." When the independent clause comes first, no comma is needed: "We went for a walk although it was raining."

**Relative clauses** add information about a noun. "The book that I borrowed is excellent." "The teacher who helped me was very patient." "The city where she grew up is beautiful." Defining relative clauses (essential information) use no commas. Non-defining relative clauses (extra information) use commas: "My sister, who lives in London, is visiting next week."

Varying your sentence structure makes your writing more engaging. A text full of simple, short sentences sounds choppy. A text full of long, complex sentences feels exhausting. The best writing mixes both -- short sentences for impact, complex sentences for nuance.`,
    },
    {
      id: 'engelsk-10-12-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-12-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on adverbs and complex sentences:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-12-n-quiz2-q0',
            task: 'Where does the frequency adverb "always" go in this sentence: "She ___ arrives on time"?',
            options: [
              { id: 'a', text: 'After "on time": She arrives on time always.', isCorrect: false },
              { id: 'b', text: 'Before the main verb: She always arrives on time.', isCorrect: true },
              { id: 'c', text: 'At the beginning: Always she arrives on time.', isCorrect: false },
              { id: 'd', text: 'After the subject and verb: She arrives always on time.', isCorrect: false },
            ],
            solution: 'Frequency adverbs (always, usually, often, etc.) go before the main verb in English. "She always arrives on time" is correct. Placing the adverb after the verb or at the beginning of the sentence reflects Norwegian word order patterns, not English ones.',
          },
          {
            id: 'engelsk-10-12-n-quiz2-q1',
            task: 'Which sentence uses commas correctly with a relative clause?',
            options: [
              { id: 'a', text: 'The teacher, who helped me, was very patient. (referring to a specific teacher you are identifying)', isCorrect: false },
              { id: 'b', text: 'My mother who lives in Bergen is visiting. (you only have one mother)', isCorrect: false },
              { id: 'c', text: 'My mother, who lives in Bergen, is visiting. (you only have one mother)', isCorrect: true },
              { id: 'd', text: 'The students, who passed the exam, can leave early. (only those who passed)', isCorrect: false },
            ],
            solution: 'Non-defining relative clauses (extra, non-essential information) require commas. Since you only have one mother, "who lives in Bergen" is extra information, not identification -- so commas are needed. Defining clauses (essential for identifying) do not use commas.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-12-n-summary',
      type: 'text',
      content: `## Summary

English follows strict **SVO (Subject-Verb-Object)** order in statements. Unlike Norwegian's V2 rule, English never inverts subject and verb after a fronted adverb or time expression. **Frequency adverbs** go before the main verb but after "be" and auxiliaries. **Adverbs of degree** go before the word they modify, except "enough," which follows.

**Complex sentences** use subordinating conjunctions (because, although, while, if) to express relationships between ideas. Dependent clauses before the main clause need a comma; after, they do not. **Relative clauses** are defining (no commas, essential information) or non-defining (commas, extra information). Varying sentence length and structure makes writing more engaging and demonstrates language mastery.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 13 NARRATIVE: Vocabulary Building
// ============================================================================

export const CHAPTER_ENGELSK_10_13_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-13-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '13',
  title: 'Vocabulary Building',
  subtitle: 'Narrative Version',
  description: 'Expand your English vocabulary strategically through word families, prefixes, suffixes, and collocations.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og bruke et variert ordforråd og idiomatiske uttrykk tilpasset kommunikasjonssituasjonen',
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'bruke egnede strategier for språklæring, tekstskaping og kommunikasjon',
  ],
  linkedChapterId: 'engelsk-10-13',
  content: [
    {
      id: 'engelsk-10-13-n-intro',
      type: 'text',
      content: `## Words Are Your Superpower

There is a direct link between the number of words you know and how well you can communicate. Research estimates that native English speakers use around 20,000 word families in everyday life, while a vocabulary of 8,000-9,000 word families allows non-native speakers to understand approximately 98% of general English text. At that level, you can read novels, follow news broadcasts, and participate in academic discussions without constantly reaching for a dictionary.

But building vocabulary is not just about memorizing lists. The most effective vocabulary learners understand how English words are constructed, how they relate to each other, and how they combine naturally. They see patterns where others see random collections of letters. They know that learning one word well -- understanding its roots, its family, and its common partners -- is worth more than memorizing ten words superficially.

In this chapter, we will explore four powerful strategies for vocabulary expansion: word families, prefixes, suffixes, and collocations. Each strategy multiplies your learning efficiency, so that every new word you encounter opens doors to several more.`,
    },
    {
      id: 'engelsk-10-13-n-section1',
      type: 'text',
      content: `## Word Families: One Root, Many Branches

A word family is a group of words that share the same root. If you know the word "create," you already have access to an entire family: creation (noun), creative (adjective), creatively (adverb), creativity (noun), creator (noun), recreate (verb), recreation (noun). That is seven words from one root. Multiply this across hundreds of roots, and you can see how word family knowledge accelerates vocabulary growth exponentially.

The key is recognizing patterns. English regularly transforms words between parts of speech using predictable endings:

Verb to noun: educate/education, communicate/communication, investigate/investigation. The pattern "-ate to -ation" is one of the most productive in English.

Adjective to noun: happy/happiness, sad/sadness, dark/darkness. The suffix "-ness" transforms almost any adjective into a noun describing the quality.

Noun to adjective: danger/dangerous, fame/famous, courage/courageous. The suffix "-ous" means "full of" or "characterized by."

Verb to adjective: enjoy/enjoyable, achieve/achievable, notice/noticeable. The suffix "-able/-ible" means "capable of being."

When you encounter a new word, ask yourself: What is the root? What other words in the family do I already know? What part of speech is this form? This habit transforms every new word into a mini-lesson that reinforces multiple words at once.

**Prefixes** modify the meaning of a root word, usually adding a specific shade of meaning. The most common English prefixes include:

"Un-" (not): unhappy, unusual, uncertain, uncomfortable. "Re-" (again): rewrite, rebuild, reconsider, revisit. "Pre-" (before): preview, predict, prepare, prehistoric. "Mis-" (wrongly): misunderstand, misinterpret, mislead, misspell. "Over-" (too much): overwork, overeat, overcrowded, overreact. "Under-" (too little): underestimate, underpaid, undervalue, undercooked.

Learning these prefixes is like learning a code. Once you know that "un-" means "not," you can decode unfamiliar words: "unprecedented" means "not preceded" -- something that has never happened before. "Unequivocal" means "not equivocal" -- completely clear and unambiguous.`,
    },
    {
      id: 'engelsk-10-13-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on word families and prefixes:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-13-n-quiz1-q0',
            task: 'If "investigate" is a verb, what is the noun form using the -ation pattern?',
            options: [
              { id: 'a', text: 'Investigable', isCorrect: false },
              { id: 'b', text: 'Investigation', isCorrect: true },
              { id: 'c', text: 'Investigative', isCorrect: false },
              { id: 'd', text: 'Investigator', isCorrect: false },
            ],
            solution: 'The -ation suffix transforms verbs ending in -ate into nouns describing the action or process: investigate becomes investigation, communicate becomes communication, educate becomes education. This is one of the most productive patterns in English word formation.',
          },
          {
            id: 'engelsk-10-13-n-quiz1-q1',
            task: 'What does the word "unprecedented" most likely mean, based on prefix knowledge?',
            options: [
              { id: 'a', text: 'Very important', isCorrect: false },
              { id: 'b', text: 'Something that has never happened before', isCorrect: true },
              { id: 'c', text: 'Something predicted in advance', isCorrect: false },
              { id: 'd', text: 'Not interesting', isCorrect: false },
            ],
            solution: 'The prefix "un-" means "not," and "preceded" means "came before." So "unprecedented" literally means "not preceded" -- something that has never happened or existed before. Knowledge of prefixes allows you to decode unfamiliar words logically.',
          },
          {
            id: 'engelsk-10-13-n-quiz1-q2',
            task: 'Which prefix means "wrongly" or "badly"?',
            options: [
              { id: 'a', text: 'Un-', isCorrect: false },
              { id: 'b', text: 'Re-', isCorrect: false },
              { id: 'c', text: 'Mis-', isCorrect: true },
              { id: 'd', text: 'Pre-', isCorrect: false },
            ],
            solution: 'The prefix "mis-" means wrongly or badly: misunderstand (understand wrongly), misspell (spell wrongly), mislead (lead in the wrong direction), misinterpret (interpret incorrectly).',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-13-n-section2',
      type: 'text',
      content: `## Suffixes and Collocations: The Final Pieces

**Suffixes** are endings that transform a word's part of speech or modify its meaning. While prefixes change meaning, suffixes typically change grammatical function.

Common noun suffixes: "-ment" (achievement, development, environment), "-tion/-sion" (education, decision, permission), "-ness" (kindness, awareness, darkness), "-ity" (creativity, equality, curiosity), and "-er/-or" (teacher, actor, inventor).

Common adjective suffixes: "-ful" (beautiful, helpful, powerful), "-less" (hopeless, careless, endless), "-ous" (dangerous, famous, nervous), "-ive" (creative, active, productive), and "-al" (cultural, musical, personal).

Common adverb suffixes: "-ly" (quickly, carefully, unfortunately). Nearly any adjective can become an adverb by adding "-ly," though there are exceptions -- "good" becomes "well," not "goodly."

Notice the elegant logic: "care" (noun) becomes "careful" (adjective, full of care) becomes "carefully" (adverb) becomes "carefulness" (noun, the quality of being careful), while "careless" (without care) becomes "carelessly" and "carelessness." One root generates an entire family of useful words.

**Collocations** are words that naturally go together in English. They are not grammar rules -- they are conventions that native speakers know instinctively. You "make a decision" (not "do a decision"), "take a shower" (not "have a shower" in American English, though "have a shower" is correct in British English), and "do homework" (not "make homework").

Common collocations that Norwegian speakers get wrong include:

- "Make" vs. "do": make a mistake, make progress, make a decision, make an effort / do homework, do research, do business, do your best.
- "Have" combinations: have a conversation, have an argument, have a look, have a good time.
- "Take" combinations: take a break, take notes, take responsibility, take place, take into account.
- Adjective + noun: heavy rain (not "strong rain"), strong wind (not "hard wind"), fast food (not "quick food"), wide range (not "broad range").

The best way to learn collocations is through extensive reading and listening. When you notice words that appear together frequently, write them down as pairs or groups, not as individual words. Your brain will begin to store them as units, making your English sound more natural and fluent.`,
    },
    {
      id: 'engelsk-10-13-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-13-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on suffixes and collocations:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-13-n-quiz2-q0',
            task: 'Which collocation is correct in standard English?',
            options: [
              { id: 'a', text: 'Do a mistake', isCorrect: false },
              { id: 'b', text: 'Make a mistake', isCorrect: true },
              { id: 'c', text: 'Take a mistake', isCorrect: false },
              { id: 'd', text: 'Have a mistake', isCorrect: false },
            ],
            solution: '"Make a mistake" is the correct collocation. English uses "make" with many abstract nouns: make a decision, make progress, make an effort, make a suggestion. "Do" is used with activities: do homework, do research, do your best. These are conventions, not logical rules.',
          },
          {
            id: 'engelsk-10-13-n-quiz2-q1',
            task: 'What does the suffix "-less" mean when added to a word?',
            options: [
              { id: 'a', text: 'Full of', isCorrect: false },
              { id: 'b', text: 'In the manner of', isCorrect: false },
              { id: 'c', text: 'Without', isCorrect: true },
              { id: 'd', text: 'Related to', isCorrect: false },
            ],
            solution: 'The suffix "-less" means "without": hopeless (without hope), careless (without care), endless (without end), homeless (without a home). It pairs logically with "-ful" (full of): hopeful/hopeless, careful/careless, thankful/thankless.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-13-n-summary',
      type: 'text',
      content: `## Summary

Strategic vocabulary building multiplies your learning efficiency. **Word families** show how one root generates multiple related words across parts of speech. **Prefixes** (un-, re-, pre-, mis-, over-, under-) modify meaning predictably, allowing you to decode unfamiliar words. **Suffixes** change grammatical function: -ment and -tion create nouns, -ful and -less create adjectives, -ly creates adverbs.

**Collocations** are natural word partnerships that make your English sound fluent. Learn them as pairs (make a decision, heavy rain, take responsibility), not as individual words. The best vocabulary learners see patterns in words -- roots, affixes, and partnerships -- and use these patterns to expand their knowledge exponentially rather than one word at a time.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 14 NARRATIVE: Spelling and Punctuation
// ============================================================================

export const CHAPTER_ENGELSK_10_14_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-14-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '14',
  title: 'Spelling and Punctuation',
  subtitle: 'Narrative Version',
  description: 'Conquer the quirks of English spelling and master punctuation rules that make your writing clear and professional.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
  ],
  linkedChapterId: 'engelsk-10-14',
  content: [
    {
      id: 'engelsk-10-14-n-intro',
      type: 'text',
      content: `## Why English Spelling Makes No Sense (And How to Cope)

English spelling is famously chaotic. The word "enough" has a silent "gh" that sounds like "f" in "rough" but is silent in "though" and sounds like a hard "g" in "ghost." The letter combination "ough" can be pronounced seven different ways: through, though, thought, tough, cough, bough, and hiccough. George Bernard Shaw joked that the word "fish" could logically be spelled "ghoti" -- "gh" as in "enough," "o" as in "women," and "ti" as in "nation."

This chaos exists because English borrowed words from dozens of languages over centuries -- Latin, French, Norse, Greek, Dutch, Hindi, Arabic -- and kept many of their original spellings even as pronunciation evolved. The result is a language where spelling and pronunciation have a complicated, sometimes hostile relationship.

But here is the encouraging truth: despite the chaos, there are patterns. Most English words do follow rules, and the exceptions tend to be high-frequency words that you encounter (and memorize) naturally through reading. Mastering spelling is not about memorizing every word in the dictionary -- it is about learning the patterns and knowing the common exceptions.`,
    },
    {
      id: 'engelsk-10-14-n-section1',
      type: 'text',
      content: `## Spelling Rules That Actually Work

Despite the reputation for irregularity, several spelling rules cover a large percentage of English words.

**The "i before e" rule** states: "i before e, except after c, or when sounded like 'ay' as in 'neighbor' and 'weigh'." This gives us: believe, achieve, receive, ceiling, eight, reign. There are exceptions (weird, seize, science), but the rule works for the majority of cases.

**The silent e rule**: When a word ends in silent "e" and you add a suffix starting with a vowel, drop the "e": make/making, write/writing, hope/hoping, create/creating. But keep the "e" before consonant suffixes: hope/hopeful, care/careful, state/statement. Exceptions include noticeable and courageous, where the "e" stays to keep the soft "c" and "g" sounds.

**Doubling the final consonant**: When a one-syllable word ends in a single consonant preceded by a single vowel, double the consonant before adding a vowel suffix: run/running, sit/sitting, big/bigger, stop/stopped. For multi-syllable words, double only if the last syllable is stressed: begin/beginning, prefer/preferred, but open/opening, visit/visited.

**Changing "y" to "i"**: When a word ends in "y" preceded by a consonant, change "y" to "i" before adding a suffix: happy/happiness, carry/carried, study/studied, easy/easily. But keep the "y" before "-ing": studying, carrying, worrying. And keep the "y" if it is preceded by a vowel: play/played, enjoy/enjoying.

**Common Norwegian-specific spelling errors** include confusing "their/there/they're," "your/you're," "its/it's," and "to/too/two." These sound identical (or nearly so) but have completely different meanings and spellings. "Their" is possessive (their house), "there" indicates place (over there), and "they're" is a contraction (they are). Similarly, "its" is possessive (the dog wagged its tail), while "it's" always means "it is" or "it has."`,
    },
    {
      id: 'engelsk-10-14-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on spelling rules:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-14-n-quiz1-q0',
            task: 'Which spelling is correct when adding -ing to "write"?',
            options: [
              { id: 'a', text: 'Writeing', isCorrect: false },
              { id: 'b', text: 'Writing', isCorrect: true },
              { id: 'c', text: 'Writting', isCorrect: false },
              { id: 'd', text: 'Writting', isCorrect: false },
            ],
            solution: 'When a word ends in silent "e" and you add a suffix starting with a vowel (-ing), you drop the "e": write becomes writing, make becomes making, hope becomes hoping.',
          },
          {
            id: 'engelsk-10-14-n-quiz1-q1',
            task: 'Choose the correct sentence: "The dog wagged ___ tail."',
            options: [
              { id: 'a', text: "it's", isCorrect: false },
              { id: 'b', text: 'its', isCorrect: true },
              { id: 'c', text: "its'", isCorrect: false },
              { id: 'd', text: "its's", isCorrect: false },
            ],
            solution: '"Its" (no apostrophe) is the possessive form -- the tail belonging to the dog. "It\'s" (with apostrophe) is always a contraction meaning "it is" or "it has." This is one of the most commonly confused pairs in English.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-14-n-section2',
      type: 'text',
      content: `## Punctuation: The Traffic Signals of Writing

Punctuation marks are to writing what traffic signals are to driving. They tell the reader when to pause, when to stop, what belongs together, and what is a separate thought. Without them, writing becomes a chaotic stream of words that the reader must decode. With them, meaning becomes clear and precise.

**The comma** is the most versatile -- and most misused -- punctuation mark. Key comma rules:

Use a comma before a coordinating conjunction (and, but, or, so, yet) connecting two independent clauses: "She studied hard, and she passed the exam." Do not use a comma if the conjunction connects two verbs with the same subject: "She studied hard and passed the exam."

Use commas after introductory elements: "However, the results were disappointing." "After the meeting, we went for coffee." "In my opinion, this is the best approach."

Use commas to separate items in a list: "We bought apples, oranges, and bananas." The comma before "and" (the Oxford comma) is optional but recommended for clarity. Consider the difference: "I love my parents, Batman and Wonder Woman" (implies your parents are superheroes) versus "I love my parents, Batman, and Wonder Woman" (clear list of four entities).

**The apostrophe** has two main uses: contractions and possession. Contractions shorten two words into one: "do not" becomes "don't," "they are" becomes "they're," "it is" becomes "it's." Possession shows ownership: "the student's book" (one student), "the students' books" (multiple students). Never use an apostrophe to make a plural: "three apples" not "three apple's."

**The semicolon** connects two closely related independent clauses: "She loved reading; her brother preferred sports." It says: these two ideas are separate but connected. Use it when a period feels too final but a comma feels too weak. The semicolon is also used before transitional expressions: "The evidence was compelling; however, the jury remained divided."

**The colon** introduces information that explains or elaborates on what came before it: "She had one goal: to pass the exam." "The menu included three options: pizza, pasta, and salad." The clause before the colon must be a complete sentence.`,
    },
    {
      id: 'engelsk-10-14-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-14-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on punctuation:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-14-n-quiz2-q0',
            task: 'Which sentence uses the comma correctly?',
            options: [
              { id: 'a', text: 'She studied hard and, passed the exam.', isCorrect: false },
              { id: 'b', text: 'She studied hard, and she passed the exam.', isCorrect: true },
              { id: 'c', text: 'She studied hard and she, passed the exam.', isCorrect: false },
              { id: 'd', text: 'She, studied hard and she passed the exam.', isCorrect: false },
            ],
            solution: 'A comma is used before a coordinating conjunction (and, but, or, so) when it connects two independent clauses (each with its own subject and verb). "She studied hard" and "she passed the exam" are both independent clauses, so a comma before "and" is correct.',
          },
          {
            id: 'engelsk-10-14-n-quiz2-q1',
            task: 'Which sentence uses the apostrophe correctly for possession?',
            options: [
              { id: 'a', text: "The students's books were on the table.", isCorrect: false },
              { id: 'b', text: "The student's book's were on the table.", isCorrect: false },
              { id: 'c', text: "The students' books were on the table.", isCorrect: true },
              { id: 'd', text: "The students books' were on the table.", isCorrect: false },
            ],
            solution: 'For plural nouns ending in "s," the possessive is formed by adding just an apostrophe after the existing "s": students\' books (books belonging to multiple students). For singular nouns, add apostrophe + s: the student\'s book (one student\'s book).',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-14-n-summary',
      type: 'text',
      content: `## Summary

English spelling follows patterns despite its reputation for chaos. Key rules include: **i before e** (except after c), drop **silent e** before vowel suffixes, **double consonants** in stressed syllables before vowel suffixes, and change **y to i** before most suffixes. Watch for commonly confused pairs: their/there/they're, its/it's, your/you're.

**Punctuation** controls meaning and clarity. Use **commas** before conjunctions connecting independent clauses, after introductory elements, and between list items. **Apostrophes** mark contractions and possession -- never plurals. **Semicolons** connect related independent clauses, and **colons** introduce explanatory information. Master these rules, and your writing will be clear, professional, and easy to read.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 15 NARRATIVE: Translation Skills
// ============================================================================

export const CHAPTER_ENGELSK_10_15_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-15-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '15',
  title: 'Translation Skills',
  subtitle: 'Narrative Version',
  description: 'Navigate the treacherous waters of translation, from false friends to idiomatic expressions, and learn to think in English rather than translate from Norwegian.',
  estimatedMinutes: 30,
  competenceGoals: [
    'utforske og bruke et variert ordforråd og idiomatiske uttrykk tilpasset kommunikasjonssituasjonen',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'bruke egnede strategier for språklæring, tekstskaping og kommunikasjon',
  ],
  linkedChapterId: 'engelsk-10-15',
  content: [
    {
      id: 'engelsk-10-15-n-intro',
      type: 'text',
      content: `## Lost in Translation

Every language learner has experienced the moment: you know exactly what you want to say in your native language, you translate it word by word into English, and... it comes out wrong. Not grammatically wrong, necessarily -- but wrong in a way that makes native speakers pause, squint, and say "I understand what you mean, but we wouldn't say it that way."

This happens because languages are not codes with one-to-one correspondence. They are systems with their own logic, their own idioms, their own way of carving up reality. Norwegian and English are related languages -- both Germanic, with many shared roots -- but they have diverged enough that direct translation frequently fails.

The goal is not to eliminate your Norwegian brain when writing English. That is impossible and unnecessary. The goal is to develop an English language sense -- an intuition for how English naturally expresses ideas -- that runs alongside your Norwegian one. When these two systems work together, you can express nuances that monolingual speakers in either language cannot.

Let us explore the most common translation traps and learn how to avoid them.`,
    },
    {
      id: 'engelsk-10-15-n-section1',
      type: 'text',
      content: `## False Friends: Words That Betray You

False friends (falske venner) are words that look similar in Norwegian and English but mean different things. They are the most dangerous translation traps because they feel so right when they are completely wrong.

"Eventuell" in Norwegian means "possible" or "any." "Eventually" in English means "in the end" or "after a long time." A Norwegian student who writes "I will eventually come to the party" thinks they are saying "I might come" -- but they are actually saying "I will come after a long time." The correct English for "eventuelt" is "possibly," "perhaps," or "if applicable."

"Aktuell" in Norwegian means "relevant" or "current." "Actual" in English means "real" or "true." Saying "This is a very actual problem" when you mean "This is a very relevant problem" creates confusion. Use "relevant," "current," or "topical" instead.

"Sympatisk" means "likeable" or "pleasant" in Norwegian. "Sympathetic" in English means "showing sympathy or understanding." Describing someone as "sympathetic" when you mean "nice" suggests they are pitying you, which is quite different from being pleasant.

"Sjef" in Norwegian is a boss or manager. "Chef" in English is specifically a professional cook. Calling your boss a "chef" paints an amusing but inaccurate picture.

"Kontrolle" in Norwegian means "to check" or "to inspect." "Control" in English primarily means "to have power over." Saying "I will control your homework" sounds authoritarian rather than helpful. Use "check," "review," or "inspect."

Other common false friends: "fabric" means cloth (not "fabrikk"/factory), "gift" means a present (not "gift"/poison in Norwegian), "preservative" means a food additive (not "preservativ"/condom), and "billion" in English is a thousand million (not "billion"/trillion in Norwegian).

The only defense against false friends is awareness. Keep a list of the ones you encounter, review it regularly, and pause before using any word that looks suspiciously similar to Norwegian.`,
    },
    {
      id: 'engelsk-10-15-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on false friends:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-15-n-quiz1-q0',
            task: 'A Norwegian student writes: "The teacher will control our essays." What do they probably mean, and what is the correct English?',
            options: [
              { id: 'a', text: 'They mean "dominate" -- correct English is "The teacher will dominate our essays"', isCorrect: false },
              { id: 'b', text: 'They mean "check/review" -- correct English is "The teacher will check our essays"', isCorrect: true },
              { id: 'c', text: 'They mean "grade" -- correct English is "The teacher will grade our essays"', isCorrect: false },
              { id: 'd', text: 'The sentence is already correct in English', isCorrect: false },
            ],
            solution: '"Kontrollere" in Norwegian means to check or inspect, but "control" in English primarily means to have power over something. The student means the teacher will review or check their essays, so "check," "review," or "look over" are the correct English translations.',
          },
          {
            id: 'engelsk-10-15-n-quiz1-q1',
            task: 'What does "eventually" mean in English?',
            options: [
              { id: 'a', text: 'Possibly or perhaps', isCorrect: false },
              { id: 'b', text: 'In the end, after a long time', isCorrect: true },
              { id: 'c', text: 'If applicable or if necessary', isCorrect: false },
              { id: 'd', text: 'Occasionally or sometimes', isCorrect: false },
            ],
            solution: '"Eventually" means "in the end" or "after a long time" -- very different from Norwegian "eventuelt" (possibly, if applicable). "The project was difficult, but we eventually succeeded" means success came after a long struggle.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-15-n-section2',
      type: 'text',
      content: `## Idiomatic Expressions: When Words Do Not Mean What They Say

An idiom is an expression whose meaning cannot be predicted from the individual words. "It is raining cats and dogs" has nothing to do with animals. "Break a leg" does not involve injury. "Piece of cake" is not about baking. Idioms are the personality of a language -- they are colorful, culturally specific, and impossible to translate directly.

Norwegian has its own idioms, and they rarely translate into English. "A ta noen pa senga" (to take someone on the bed) means to catch someone off guard -- but translating it literally into English would be deeply confusing. Similarly, "det er helt Texas" (it is completely Texas) means chaotic -- a cultural reference that makes no sense in English.

Common English idioms worth knowing include:

"To be on the same page" -- to agree or have the same understanding. "Once in a blue moon" -- very rarely. "To bite the bullet" -- to endure something painful. "The tip of the iceberg" -- a small visible part of a larger problem. "To cut corners" -- to do something cheaply or quickly, sacrificing quality. "To hit the nail on the head" -- to be exactly right. "A blessing in disguise" -- something that seems bad but turns out to be good.

The key to using idioms effectively is knowing when to use them. In casual and semi-formal writing (articles, blog posts, personal essays), idioms add color and personality. In formal academic writing, they are generally inappropriate because they are imprecise. "The experiment was a piece of cake" is too casual for a lab report. "The experiment was straightforward" is better.

When translating between Norwegian and English, resist the urge to translate idioms literally. Instead, find the English idiom that conveys the same meaning, or express the idea in plain language. "Han slo to fluer i en smekk" does not become "He hit two flies in one smack" -- it becomes "He killed two birds with one stone" (the English equivalent) or simply "He accomplished two things at once."`,
    },
    {
      id: 'engelsk-10-15-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-15-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on idioms and translation:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-15-n-quiz2-q0',
            task: 'What does "to cut corners" mean in English?',
            options: [
              { id: 'a', text: 'To take a shortcut when driving', isCorrect: false },
              { id: 'b', text: 'To do something cheaply or quickly, sacrificing quality', isCorrect: true },
              { id: 'c', text: 'To trim paper with scissors', isCorrect: false },
              { id: 'd', text: 'To avoid direct confrontation', isCorrect: false },
            ],
            solution: '"To cut corners" means to do something the easy or cheap way, sacrificing quality for speed or cost. "The builder cut corners on the foundation, and the house developed cracks within a year." It carries a negative connotation of irresponsibility.',
          },
          {
            id: 'engelsk-10-15-n-quiz2-q1',
            task: 'When should you avoid using idioms in your writing?',
            options: [
              { id: 'a', text: 'In all types of writing -- idioms are always informal', isCorrect: false },
              { id: 'b', text: 'In formal academic writing, where precision is more important than color', isCorrect: true },
              { id: 'c', text: 'Only when writing for non-native speakers', isCorrect: false },
              { id: 'd', text: 'Never -- idioms should be used as often as possible', isCorrect: false },
            ],
            solution: 'Idioms add personality and color to casual and semi-formal writing. But in formal academic writing, they are generally inappropriate because they are imprecise and culturally specific. Academic writing values clarity and precision over colorful expression.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-15-n-summary',
      type: 'text',
      content: `## Summary

Direct translation from Norwegian to English frequently fails because languages are systems with their own logic, not codes with one-to-one correspondence. **False friends** -- words that look similar but mean different things (eventuelt/eventually, kontrollere/control, aktuell/actual) -- are the most dangerous traps. Keep a list and pause before using suspicious look-alikes.

**Idiomatic expressions** cannot be translated literally. Instead, find the English equivalent or express the idea in plain language. Use idioms in casual and semi-formal writing for color, but avoid them in formal academic contexts. The ultimate goal is to develop an **English language sense** that works alongside your Norwegian one -- not to translate from Norwegian but to think and express in English directly.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 16 NARRATIVE: Register and Tone
// ============================================================================

export const CHAPTER_ENGELSK_10_16_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-16-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '16',
  title: 'Register and Tone',
  subtitle: 'Narrative Version',
  description: 'Learn to adapt your English to different situations -- from formal academic prose to casual conversation -- with awareness of audience and purpose.',
  estimatedMinutes: 30,
  competenceGoals: [
    'tilpasse språket til ulike kommunikasjonssituasjoner',
    'bruke variert språk og grammatiske strukturer tilpasset formål og situasjon',
    'utforske og bruke et variert ordforråd og idiomatiske uttrykk tilpasset kommunikasjonssituasjonen',
  ],
  linkedChapterId: 'engelsk-10-16',
  content: [
    {
      id: 'engelsk-10-16-n-intro',
      type: 'text',
      content: `## Dressing Your Words for the Occasion

You would not wear a swimsuit to a job interview or a tuxedo to the beach. In the same way, you should not use the same language in every situation. The words, sentence structures, and tone you use in a text message to a friend are wildly different from those you use in an exam essay -- and both are different from a speech at a school assembly.

This concept is called register -- the level of formality in language. Every competent speaker unconsciously adjusts their register dozens of times a day. You speak differently to your teacher than to your best friend, differently in a group presentation than in a WhatsApp chat, differently in a formal email than in a social media comment. In Norwegian, you do this naturally. The challenge is learning to do it equally well in English.

Register is not about being "proper" or "correct." Informal English is not wrong. Formal English is not better. Each register is appropriate in certain contexts and inappropriate in others. A formal email that reads like a casual text seems unprofessional. A casual conversation that sounds like an academic paper feels robotic and strange. The skill is matching your language to the situation.`,
    },
    {
      id: 'engelsk-10-16-n-section1',
      type: 'text',
      content: `## The Register Spectrum: From Frozen to Intimate

Linguists identify five levels of register, arranged from most formal to most informal:

**Frozen register** is fixed, unchanging language used in ceremonies, laws, and sacred texts. "We the People of the United States, in Order to form a more perfect Union..." You do not improvise frozen language. On exams, you will rarely use this register, but you should recognize it when analyzing texts.

**Formal register** is used in academic writing, professional communication, official speeches, and exam essays. It features complete sentences, precise vocabulary, impersonal constructions, and careful structure. Contractions are avoided. Slang is absent. The tone is objective and measured. "The evidence suggests that social media usage correlates with increased levels of anxiety among adolescents."

**Consultative register** is the standard for professional conversations, classroom discussions, and semi-formal writing like articles and reviews. It is polished but not stiff. Contractions may appear occasionally. The tone is engaged and informative. "Research shows that heavy social media use can increase anxiety in teenagers, though the relationship is complex."

**Casual register** is used with friends, in personal messages, on social media, and in informal conversations. It features contractions, slang, incomplete sentences, humor, and personal tone. "Tbh social media probably makes anxiety worse for teens, but it's complicated, you know?"

**Intimate register** is reserved for very close relationships. It uses private vocabulary, inside jokes, non-verbal communication, and shorthand that only the participants understand.

For the English exam, you need to master the formal and consultative registers. The most common mistake is writing at too casual a level -- using contractions in essays, starting sentences with "So" or "Like," or including slang. The second most common mistake is being too formal for the genre -- writing a personal narrative in the style of an academic paper, which kills the voice and personality that personal writing requires.`,
    },
    {
      id: 'engelsk-10-16-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on register:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-16-n-quiz1-q0',
            task: 'Which sentence is written in formal register?',
            options: [
              { id: 'a', text: 'Social media is basically ruining everything for teens, tbh.', isCorrect: false },
              { id: 'b', text: 'Research indicates that excessive social media consumption may adversely affect adolescent mental health.', isCorrect: true },
              { id: 'c', text: 'So yeah, social media and teen anxiety? Totally connected.', isCorrect: false },
              { id: 'd', text: 'Heavy social media use can increase anxiety in teens.', isCorrect: false },
            ],
            solution: 'The formal register uses precise vocabulary ("indicates," "adversely affect," "adolescent"), hedging language ("may"), impersonal construction, and avoids contractions and slang. Option D is consultative -- correct but less formal. Options A and C are casual.',
          },
          {
            id: 'engelsk-10-16-n-quiz1-q1',
            task: 'What is the most common register mistake Norwegian students make on the English exam?',
            options: [
              { id: 'a', text: 'Writing in frozen register, which sounds too old-fashioned', isCorrect: false },
              { id: 'b', text: 'Writing at too casual a level, using contractions and slang in formal contexts', isCorrect: true },
              { id: 'c', text: 'Writing in intimate register, sharing too much personal information', isCorrect: false },
              { id: 'd', text: 'Mixing Norwegian and English in the same sentence', isCorrect: false },
            ],
            solution: 'The most common register mistake is using casual features (contractions, slang, sentence fragments, overly personal tone) in contexts that require formal or consultative register, such as exam essays and academic articles.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-16-n-section2',
      type: 'text',
      content: `## Audience Awareness: Writing for Your Reader

Register is ultimately about audience. The question is not "How formal should I be?" but "Who am I writing for, and what do they expect?"

When writing for **academic audiences** (teachers, examiners, researchers), they expect formal register, evidence-based arguments, precise vocabulary, and structured organization. They value clarity over personality and substance over style.

When writing for **general audiences** (newspaper readers, blog followers, magazine subscribers), they expect consultative register. They want to be informed and engaged. They expect clarity but also voice -- the sense that a real person is communicating with them. Good journalism and article writing live in this register.

When writing for **peers** (classmates, friends on social media, personal correspondence), casual register is appropriate. Personality, humor, and directness are valued. Formality in this context can feel cold and distant.

The key to audience awareness is empathy -- putting yourself in the reader's shoes. What do they already know? What do they need explained? What tone will they respond to? What vocabulary is appropriate?

**Tone** is the emotional quality of your writing -- separate from but related to register. You can be formal and warm, formal and cold, casual and serious, or casual and humorous. Tone is created through word choice, sentence rhythm, and the way you address the reader. "Unfortunately, the results were disappointing" and "Sadly, things didn't go as planned" convey similar meaning with different register and tone.

Consider how tone changes meaning. "Your proposal requires significant revision" (formal, neutral). "Your proposal needs some work" (consultative, encouraging). "Your proposal is inadequate" (formal, harsh). "Not gonna lie, your proposal needs help" (casual, frank). Same message, four different relationships with the reader.

On the exam, identify the audience specified in the task. If you are writing a formal essay, match that register. If you are writing a letter to a friend, shift to casual. If you are writing an article for a school newspaper, aim for consultative. Demonstrating that you can shift between registers is one of the strongest signals of language competence.`,
    },
    {
      id: 'engelsk-10-16-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-16-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on audience and tone:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-16-n-quiz2-q0',
            task: 'If an exam task asks you to "write an article for a school newspaper," which register should you use?',
            options: [
              { id: 'a', text: 'Frozen -- because it is published writing', isCorrect: false },
              { id: 'b', text: 'Formal -- because it is for school', isCorrect: false },
              { id: 'c', text: 'Consultative -- polished but engaging, with voice and personality', isCorrect: true },
              { id: 'd', text: 'Casual -- because the audience is students', isCorrect: false },
            ],
            solution: 'A school newspaper article targets student readers and aims to inform and engage. Consultative register is appropriate -- polished and organized, but with personality and direct address. Too formal sounds like a textbook; too casual undermines credibility.',
          },
          {
            id: 'engelsk-10-16-n-quiz2-q1',
            task: 'What is "tone" in writing, and how does it differ from register?',
            options: [
              { id: 'a', text: 'Tone and register are the same thing', isCorrect: false },
              { id: 'b', text: 'Register is about formality level; tone is about emotional quality (warm, cold, humorous, serious)', isCorrect: true },
              { id: 'c', text: 'Tone is about volume (loud/quiet); register is about speed (fast/slow)', isCorrect: false },
              { id: 'd', text: 'Register is for spoken language; tone is for written language', isCorrect: false },
            ],
            solution: 'Register refers to the level of formality in language (formal, consultative, casual). Tone refers to the emotional quality or attitude conveyed (warm, serious, humorous, critical). You can combine different registers with different tones -- for example, formal and warm, or casual and serious.',
          },
          {
            id: 'engelsk-10-16-n-quiz2-q2',
            task: 'Why is the ability to shift between registers a strong signal of language competence?',
            options: [
              { id: 'a', text: 'Because it shows you have memorized many vocabulary lists', isCorrect: false },
              { id: 'b', text: 'Because it demonstrates you can adapt language to different audiences and purposes', isCorrect: true },
              { id: 'c', text: 'Because formal register is always considered more impressive', isCorrect: false },
              { id: 'd', text: 'Because the exam always requires all five registers', isCorrect: false },
            ],
            solution: 'Register shifting shows that you understand language as a flexible tool adapted to purpose and audience, not as a fixed set of rules. This is a hallmark of advanced language competence -- knowing not just what to say but how to say it for maximum effectiveness in each situation.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-16-n-summary',
      type: 'text',
      content: `## Summary

**Register** is the level of formality in language, ranging from frozen (ceremonial) through formal, consultative, and casual to intimate. For exams, master **formal register** (academic essays) and **consultative register** (articles, reviews). Avoid casual features like contractions and slang in formal contexts, but do not be overly formal in genres that call for personality.

**Audience awareness** means adapting your language to your reader's expectations and needs. Academic audiences expect evidence and precision. General audiences expect engagement and clarity. Peers expect personality and directness. **Tone** -- the emotional quality of writing -- is distinct from register. You can be formal and warm or casual and serious. The ability to **shift between registers** is one of the strongest signals of language competence, demonstrating that you understand English as a flexible, purposeful tool.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// FINAL EXPORT
// ============================================================================

export const ENGELSK_10_NARRATIV_DEL5_CHAPTERS = [
  CHAPTER_ENGELSK_10_11_NARRATIV,
  CHAPTER_ENGELSK_10_12_NARRATIV,
  CHAPTER_ENGELSK_10_13_NARRATIV,
  CHAPTER_ENGELSK_10_14_NARRATIV,
  CHAPTER_ENGELSK_10_15_NARRATIV,
  CHAPTER_ENGELSK_10_16_NARRATIV,
];
