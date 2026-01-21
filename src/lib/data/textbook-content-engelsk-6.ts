/**
 * Tekstbok kapitler for Engelsk 6. klasse
 * Innhold tilpasset elever på 6. trinn basert på LK20
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: COMMUNICATION
// ============================================================================

export const CHAPTER_ENGELSK_6_1_1: TextbookChapter = {
  id: 'engelsk-6-1-1',
  courseId: 'engelsk-6',
  chapterNumber: '1.1',
  title: 'Talking about yourself',
  description: 'Lær å presentere deg selv, fortelle om familie, hobbyer og interesser på engelsk.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['bruke enkle strategier for språklæring'],
  content: [
    {
      id: 'engelsk-6-1-1-intro',
      type: 'text',
      content: `## Introducing Yourself

When you meet new people, it's important to know how to introduce yourself. In this chapter, you will learn useful phrases for talking about yourself, your family, and your interests.

Let's start with the basics!`,
    },
    {
      id: 'engelsk-6-1-1-def-intro',
      type: 'definition',
      title: 'Basic Introduction Phrases',
      content: `**Greeting and name:**
- Hello! My name is...
- Hi! I'm...
- Nice to meet you!

**Age:**
- I am ... years old.
- I'm eleven years old.

**Where you live:**
- I live in...
- I'm from Norway.
- I come from Oslo.`,
    },
    {
      id: 'engelsk-6-1-1-def-family',
      type: 'definition',
      title: 'Family Words',
      content: `**Family members:**
- mother (mum/mom) - mor
- father (dad) - far
- sister - søster
- brother - bror
- grandmother (grandma) - bestemor
- grandfather (grandpa) - bestefar
- aunt - tante
- uncle - onkel
- cousin - kusine/fetter

**Example sentences:**
- I have one sister and two brothers.
- My grandmother lives in Bergen.`,
    },
    {
      id: 'engelsk-6-1-1-def-hobbies',
      type: 'definition',
      title: 'Hobbies and Interests',
      content: `**Talking about hobbies:**
- I like to... (+ verb)
- I enjoy... (+ verb-ing)
- My hobbies are...
- My favourite ... is...

**Common hobbies:**
- playing football/soccer
- reading books
- playing video games
- swimming
- drawing
- playing an instrument
- watching movies`,
    },
    {
      id: 'engelsk-6-1-1-example-1',
      type: 'example',
      title: 'Example: A Complete Introduction',
      problem: 'Write a complete introduction about yourself.',
      solution: `**Example introduction:**

"Hello! My name is Emma, and I'm eleven years old. I live in Oslo, Norway with my family. I have one younger brother called Oliver.

My hobbies are reading and playing football. I also like to draw in my free time. My favourite book is Harry Potter.

Nice to meet you!"`,
    },
    {
      id: 'engelsk-6-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-1-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Translate these sentences to English:',
        subTasks: [
          { label: 'a', task: '"Jeg heter Jonas."', solution: 'My name is Jonas. / I\'m Jonas.' },
          { label: 'b', task: '"Jeg er elleve år gammel."', solution: 'I am eleven years old. / I\'m eleven years old.' },
          { label: 'c', task: '"Jeg bor i Norge."', solution: 'I live in Norway.' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-1-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write three sentences about your family in English.',
        solution: 'Example: I have one sister. Her name is Mia. My father works as a teacher.',
        hints: ['Use family words like mother, father, sister, brother'],
      },
    },
    {
      id: 'engelsk-6-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a complete introduction about yourself (5-7 sentences). Include: your name, age, where you live, family, and hobbies.',
        solution: 'Answers will vary. The introduction should include all the requested information.',
        hints: ['Follow the structure from the example'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_6_1_2: TextbookChapter = {
  id: 'engelsk-6-1-2',
  courseId: 'engelsk-6',
  chapterNumber: '1.2',
  title: 'Daily routines',
  description: 'Beskriv daglige rutiner og aktiviteter på engelsk.',
  estimatedMinutes: 35,
  exercises: [],
  competenceGoals: ['uttrykke seg forståelig med et variert ordforråd'],
  content: [
    {
      id: 'engelsk-6-1-2-intro',
      type: 'text',
      content: `## Talking About Your Day

Every day we do many things: we wake up, eat breakfast, go to school, and more. In this chapter, you will learn how to describe your daily routines in English.`,
    },
    {
      id: 'engelsk-6-1-2-def-morning',
      type: 'definition',
      title: 'Morning Routine',
      content: `**In the morning:**
- wake up - våkne
- get up - stå opp
- take a shower - dusje
- brush my teeth - pusse tennene
- get dressed - kle på seg
- eat breakfast - spise frokost
- pack my bag - pakke sekken

**Example:**
"I wake up at seven o'clock. Then I take a shower and get dressed."`,
    },
    {
      id: 'engelsk-6-1-2-def-school',
      type: 'definition',
      title: 'At School',
      content: `**School activities:**
- go to school - gå på skolen
- have lessons - ha timer
- learn - lære
- read - lese
- write - skrive
- do homework - gjøre lekser
- have lunch - spise lunsj
- play at recess - leke i friminuttet

**Example:**
"School starts at eight thirty. We have Norwegian and Maths in the morning."`,
    },
    {
      id: 'engelsk-6-1-2-def-afternoon',
      type: 'definition',
      title: 'After School',
      content: `**After school activities:**
- come home - komme hjem
- have a snack - spise mellommåltid
- do homework - gjøre lekser
- play with friends - leke med venner
- practice (sport) - trene
- have dinner - spise middag
- watch TV - se på TV
- go to bed - legge seg

**Example:**
"After school, I do my homework. Then I play football with my friends."`,
    },
    {
      id: 'engelsk-6-1-2-def-time',
      type: 'definition',
      title: 'Telling Time',
      content: `**Saying the time:**
- o'clock - hel time (5:00 = five o'clock)
- half past - halv (5:30 = half past five)
- quarter past - kvart over (5:15 = quarter past five)
- quarter to - kvart på (4:45 = quarter to five)

**Time phrases:**
- in the morning - om morgenen
- in the afternoon - på ettermiddagen
- in the evening - om kvelden
- at night - om natten`,
    },
    {
      id: 'engelsk-6-1-2-example-1',
      type: 'example',
      title: 'Example: Describing a Typical Day',
      problem: 'Describe a typical school day.',
      solution: `**A Typical School Day:**

"I wake up at seven o'clock and take a shower. After breakfast, I walk to school.

School starts at half past eight. In the morning, we have Maths and English. At twelve, we have lunch. After lunch, we have Art and Music.

I come home at three o'clock. I do my homework and then play with my dog. We have dinner at six, and I go to bed at nine."`,
    },
    {
      id: 'engelsk-6-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-1-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'What time is it? Write the time in English:',
        subTasks: [
          { label: 'a', task: '8:00', solution: 'Eight o\'clock' },
          { label: 'b', task: '7:30', solution: 'Half past seven' },
          { label: 'c', task: '3:15', solution: 'Quarter past three' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-1-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Translate to English: "Jeg våkner klokken sju. Jeg spiser frokost og går på skolen."',
        solution: 'I wake up at seven o\'clock. I eat breakfast and go to school.',
        hints: ['Remember: wake up, eat breakfast, go to school'],
      },
    },
    {
      id: 'engelsk-6-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write about your daily routine. Include at least 5 activities and the times you do them.',
        solution: 'Answers will vary. Should include activities with times.',
        hints: ['Use phrases like: I wake up at..., Then I..., After school I...'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_6_1_3: TextbookChapter = {
  id: 'engelsk-6-1-3',
  courseId: 'engelsk-6',
  chapterNumber: '1.3',
  title: 'Asking and answering questions',
  description: 'Øv på å stille og svare på spørsmål i ulike situasjoner.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['innlede, holde i gang og avslutte samtaler'],
  content: [
    {
      id: 'engelsk-6-1-3-intro',
      type: 'text',
      content: `## Asking Questions

Questions are important for having conversations. When you ask questions, you show that you are interested in the other person. In this chapter, you will learn different types of questions in English.`,
    },
    {
      id: 'engelsk-6-1-3-def-wh',
      type: 'definition',
      title: 'Question Words (WH-words)',
      content: `**Question words:**
- **What** - hva (What is your name?)
- **Who** - hvem (Who is your best friend?)
- **Where** - hvor (Where do you live?)
- **When** - når (When is your birthday?)
- **Why** - hvorfor (Why do you like football?)
- **How** - hvordan (How are you?)

**Special "how" questions:**
- How old...? (Hvor gammel...?)
- How many...? (Hvor mange...?)
- How much...? (Hvor mye...?)`,
    },
    {
      id: 'engelsk-6-1-3-def-yesno',
      type: 'definition',
      title: 'Yes/No Questions',
      content: `**Yes/No questions start with a helping verb:**

**With "do/does":**
- Do you like pizza? - Yes, I do. / No, I don't.
- Does she play football? - Yes, she does. / No, she doesn't.

**With "is/are":**
- Is he your brother? - Yes, he is. / No, he isn't.
- Are you happy? - Yes, I am. / No, I'm not.

**With "can":**
- Can you swim? - Yes, I can. / No, I can't.`,
    },
    {
      id: 'engelsk-6-1-3-def-answers',
      type: 'definition',
      title: 'Answering Questions',
      content: `**Short answers:**
- Yes, I do. / No, I don't.
- Yes, she is. / No, she isn't.
- Yes, we can. / No, we can't.

**Long answers (more polite):**
- "Do you like pizza?" → "Yes, I love pizza! It's my favourite food."
- "Can you play the piano?" → "No, I can't, but I can play the guitar."

**Tip:** Try to give more than just "yes" or "no" to keep the conversation going!`,
    },
    {
      id: 'engelsk-6-1-3-example-1',
      type: 'example',
      title: 'Example: A Conversation',
      problem: 'Read this conversation between two students:',
      solution: `**Emma:** Hi! What's your name?
**Tom:** Hello! I'm Tom. What's your name?
**Emma:** I'm Emma. Nice to meet you! Where are you from?
**Tom:** I'm from England. Do you like football?
**Emma:** Yes, I do! Football is great. Who is your favourite player?
**Tom:** I like Marcus Rashford. Can you play football?
**Emma:** Yes, I can. I play for a club.
**Tom:** Cool! When do you practice?
**Emma:** We practice on Wednesdays and Fridays.`,
    },
    {
      id: 'engelsk-6-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-1-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Choose the correct question word:',
        subTasks: [
          { label: 'a', task: '_____ is your favourite colour? (What/Who)', solution: 'What' },
          { label: 'b', task: '_____ do you live? (When/Where)', solution: 'Where' },
          { label: 'c', task: '_____ is your best friend? (What/Who)', solution: 'Who' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-1-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write questions for these answers:',
        subTasks: [
          { label: 'a', task: 'Answer: "I am twelve years old."', solution: 'How old are you?' },
          { label: 'b', task: 'Answer: "My favourite food is pizza."', solution: 'What is your favourite food?' },
          { label: 'c', task: 'Answer: "I live in Oslo."', solution: 'Where do you live?' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a short conversation (6-8 lines) between two people who meet for the first time. Use at least 4 different question words.',
        solution: 'Answers will vary. Should include a natural conversation with question words.',
        hints: ['Use: What, Where, How, Do you...?'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 2: READING AND WRITING
// ============================================================================

export const CHAPTER_ENGELSK_6_2_1: TextbookChapter = {
  id: 'engelsk-6-2-1',
  courseId: 'engelsk-6',
  chapterNumber: '2.1',
  title: 'Reading stories',
  description: 'Les og forstå korte fortellinger og eventyr på engelsk.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['lese og forstå ulike typer tekster'],
  content: [
    {
      id: 'engelsk-6-2-1-intro',
      type: 'text',
      content: `## Reading in English

Reading stories in English is a great way to learn new words and improve your language skills. When you read, you see how sentences are built and learn expressions you can use yourself.

In this chapter, you will practice reading comprehension strategies.`,
    },
    {
      id: 'engelsk-6-2-1-def-strategies',
      type: 'definition',
      title: 'Reading Strategies',
      content: `**Before reading:**
- Look at the title and pictures
- Predict what the story is about
- Think about what you already know

**While reading:**
- Try to understand the main idea
- Don't stop at every unknown word
- Use context clues to guess meaning
- Read slowly and carefully

**After reading:**
- Summarize what happened
- Think about the characters and events
- Discuss the story with others`,
    },
    {
      id: 'engelsk-6-2-1-def-vocabulary',
      type: 'definition',
      title: 'Story Words',
      content: `**Story structure:**
- beginning - begynnelse
- middle - midtdel
- end - slutt
- character - karakter/person
- setting - sted og tid
- plot - handling
- problem - problem
- solution - løsning

**Story phrases:**
- Once upon a time... - Det var en gang...
- One day... - En dag...
- Suddenly... - Plutselig...
- In the end... - Til slutt...`,
    },
    {
      id: 'engelsk-6-2-1-text-story',
      type: 'text',
      content: `## A Short Story: The Lost Dog

**Read the story:**

Max was a happy dog who lived with the Brown family. One sunny Saturday, the family went to the park. Max saw a squirrel and ran after it. He ran and ran until he couldn't see his family anymore.

Max was lost! He didn't know how to get home. He walked through the streets, looking for something he recognized. Then he smelled something familiar - Mrs. Wilson's bakery!

Max remembered the way home from the bakery. He ran down Baker Street, turned left at the big tree, and there was his house! The Brown family was so happy to see him.

"Never run away again, Max!" said little Emma, hugging her dog.`,
    },
    {
      id: 'engelsk-6-2-1-example-1',
      type: 'example',
      title: 'Example: Understanding the Story',
      problem: 'Answer questions about "The Lost Dog"',
      solution: `**Questions and answers:**

1. Who is Max?
→ Max is the Brown family's dog.

2. Where did the family go?
→ They went to the park.

3. Why did Max get lost?
→ He ran after a squirrel.

4. How did Max find his way home?
→ He smelled the bakery and remembered the way from there.

5. What is the lesson of the story?
→ Don't run away, and use your senses to find your way.`,
    },
    {
      id: 'engelsk-6-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-2-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Answer these questions about the story:',
        subTasks: [
          { label: 'a', task: 'What animal did Max chase?', solution: 'A squirrel' },
          { label: 'b', task: 'What could Max smell?', solution: 'Mrs. Wilson\'s bakery' },
          { label: 'c', task: 'Who hugged Max at the end?', solution: 'Little Emma' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-2-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Put the events in the correct order (1-5):\na) Max smelled the bakery\nb) Max ran after a squirrel\nc) The family went to the park\nd) Max came home\ne) Max got lost',
        solution: '1-c, 2-b, 3-e, 4-a, 5-d',
        hints: ['Think about what happened first, second, etc.'],
      },
    },
    {
      id: 'engelsk-6-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a short summary of the story "The Lost Dog" in 3-4 sentences.',
        solution: 'Example: Max the dog got lost when he chased a squirrel in the park. He walked around until he smelled a bakery he knew. From there, he found his way home. His family was very happy to see him.',
        hints: ['Include: Who? What happened? How did it end?'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_6_2_2: TextbookChapter = {
  id: 'engelsk-6-2-2',
  courseId: 'engelsk-6',
  chapterNumber: '2.2',
  title: 'Writing texts',
  description: 'Skriv enkle tekster som brev, e-post og korte fortellinger.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['skrive sammenhengende tekster som forteller og beskriver'],
  content: [
    {
      id: 'engelsk-6-2-2-intro',
      type: 'text',
      content: `## Writing in English

Writing is an important skill. In English, you might need to write emails, letters, stories, or messages. In this chapter, you will learn how to write different types of texts.`,
    },
    {
      id: 'engelsk-6-2-2-def-email',
      type: 'definition',
      title: 'Writing Emails',
      content: `**Email structure:**

**Subject line:** Short description of what the email is about

**Greeting:**
- Hi [Name], (informal)
- Dear [Name], (formal)

**Body:** The main message

**Closing:**
- Best wishes,
- Kind regards,
- See you soon!

**Your name**`,
    },
    {
      id: 'engelsk-6-2-2-def-letter',
      type: 'definition',
      title: 'Writing Letters',
      content: `**Letter structure:**

1. **Your address and date** (top right)
   15 Main Street
   Oslo, Norway
   January 15, 2024

2. **Greeting:** Dear [Name],

3. **First paragraph:** Say why you are writing

4. **Main paragraphs:** Your message

5. **Last paragraph:** End politely

6. **Closing and signature:**
   Best wishes,
   [Your name]`,
    },
    {
      id: 'engelsk-6-2-2-def-useful',
      type: 'definition',
      title: 'Useful Phrases for Writing',
      content: `**Starting:**
- I am writing to tell you about...
- Thank you for your letter/email.
- I hope you are well.

**Middle:**
- First of all...
- I also wanted to say...
- Another thing is...

**Ending:**
- I hope to hear from you soon.
- Write back soon!
- Take care!
- Looking forward to your reply.`,
    },
    {
      id: 'engelsk-6-2-2-example-1',
      type: 'example',
      title: 'Example: An Email to a Pen Pal',
      problem: 'Write an email to your pen pal telling them about your school.',
      solution: `**Subject:** My school in Norway

Hi James!

How are you? I hope you are doing well. Thank you for your last email - it was great to hear about your life in England!

I am writing to tell you about my school. My school is called Fjord School, and it has about 300 students. My favourite subjects are English and Art. We have very nice teachers.

After school, I usually play football with my friends. Do you play any sports?

Write back soon!

Best wishes,
Emma`,
    },
    {
      id: 'engelsk-6-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-2-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Put these email parts in the correct order:',
        subTasks: [
          { label: 'a', task: 'Emma, Best wishes, Hi Tom!, Your email made me happy., Write back soon!', solution: 'Hi Tom!, Your email made me happy., Write back soon!, Best wishes, Emma' },
        ],
        solution: 'Hi Tom! → Your email made me happy. → Write back soon! → Best wishes, → Emma',
      },
    },
    {
      id: 'engelsk-6-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-2-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a short email (5-7 sentences) to a friend telling them about your weekend plans.',
        solution: 'Answers will vary. Should include greeting, body with weekend plans, and closing.',
        hints: ['Start with Hi [Name]!, end with Best wishes, [Your name]'],
      },
    },
    {
      id: 'engelsk-6-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-2-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write an email to an English pen pal. Introduce yourself (name, age, where you live), tell about your hobbies, and ask them three questions.',
        solution: 'Answers will vary. Should include self-introduction, hobbies, questions, proper email structure.',
        hints: ['Use the phrases you learned: I am writing to..., I hope to hear from you...'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 3: GRAMMAR
// ============================================================================

export const CHAPTER_ENGELSK_6_3_1: TextbookChapter = {
  id: 'engelsk-6-3-1',
  courseId: 'engelsk-6',
  chapterNumber: '3.1',
  title: 'Verbs and tenses',
  description: 'Lær om verb i presens, preteritum og fremtid.',
  estimatedMinutes: 50,
  exercises: [],
  competenceGoals: ['utforske mønstre i språket'],
  content: [
    {
      id: 'engelsk-6-3-1-intro',
      type: 'text',
      content: `## Verbs and Time

Verbs are action words - they tell us what someone does. In English, verbs change form to show when something happens:
- **Present** (now)
- **Past** (before)
- **Future** (later)`,
    },
    {
      id: 'engelsk-6-3-1-def-present',
      type: 'definition',
      title: 'Present Tense',
      content: `**Present tense** - things that happen now or regularly

**Regular form:**
- I play football.
- We go to school.

**Third person (he/she/it) - add 's':**
- He plays football.
- She goes to school.

**Be-verbs:**
- I am, you are, he/she/it is
- we are, they are

**Examples:**
- I eat breakfast every day.
- She likes music.
- They are happy.`,
    },
    {
      id: 'engelsk-6-3-1-def-past',
      type: 'definition',
      title: 'Past Tense',
      content: `**Past tense** - things that happened before

**Regular verbs - add 'ed':**
- play → played
- walk → walked
- watch → watched

**Irregular verbs (must be memorized):**
- go → went
- eat → ate
- see → saw
- have → had
- come → came
- make → made
- take → took

**Be-verbs in past:**
- I was, you were, he/she/it was
- we were, they were`,
    },
    {
      id: 'engelsk-6-3-1-def-future',
      type: 'definition',
      title: 'Future Tense',
      content: `**Future tense** - things that will happen later

**Use "will" + verb:**
- I will go to school tomorrow.
- She will play football next week.
- They will visit us soon.

**Use "going to" + verb:**
- I am going to read a book tonight.
- We are going to travel this summer.

**Short form:** will = 'll
- I'll see you tomorrow!`,
    },
    {
      id: 'engelsk-6-3-1-example-1',
      type: 'example',
      title: 'Example: Same Verb in Different Tenses',
      problem: 'Use the verb "play" in present, past, and future:',
      solution: `**Present:**
- I play football every Saturday.
- He plays with his friends.

**Past:**
- I played football yesterday.
- She played with her dog.

**Future:**
- I will play football tomorrow.
- We are going to play after school.`,
    },
    {
      id: 'engelsk-6-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-3-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Add "s" or "es" to make these verbs work with he/she/it:',
        subTasks: [
          { label: 'a', task: 'play', solution: 'plays' },
          { label: 'b', task: 'watch', solution: 'watches' },
          { label: 'c', task: 'go', solution: 'goes' },
          { label: 'd', task: 'read', solution: 'reads' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-3-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write the past tense of these verbs:',
        subTasks: [
          { label: 'a', task: 'walk', solution: 'walked' },
          { label: 'b', task: 'go', solution: 'went' },
          { label: 'c', task: 'eat', solution: 'ate' },
          { label: 'd', task: 'see', solution: 'saw' },
        ],
        solution: 'See subtasks',
        hints: ['Some are regular (+ed), some are irregular'],
      },
    },
    {
      id: 'engelsk-6-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Complete the sentences with the correct form of the verb in brackets:',
        subTasks: [
          { label: 'a', task: 'Yesterday, I (go) to the cinema.', solution: 'went' },
          { label: 'b', task: 'She (play) tennis every Sunday.', solution: 'plays' },
          { label: 'c', task: 'Tomorrow, we (visit) our grandparents.', solution: 'will visit' },
        ],
        solution: 'See subtasks',
      },
    },
  ],
};

export const CHAPTER_ENGELSK_6_3_2: TextbookChapter = {
  id: 'engelsk-6-3-2',
  courseId: 'engelsk-6',
  chapterNumber: '3.2',
  title: 'Nouns and adjectives',
  description: 'Bruk substantiv og adjektiv riktig på engelsk.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['utforske mønstre i språket'],
  content: [
    {
      id: 'engelsk-6-3-2-intro',
      type: 'text',
      content: `## Nouns and Adjectives

**Nouns** are naming words (things, people, places).
**Adjectives** are describing words (they describe nouns).

Together, they help us communicate clearly!`,
    },
    {
      id: 'engelsk-6-3-2-def-nouns',
      type: 'definition',
      title: 'Nouns: Singular and Plural',
      content: `**Singular** = one thing
**Plural** = more than one

**Regular plurals - add 's':**
- cat → cats
- book → books
- dog → dogs

**Words ending in s, sh, ch, x - add 'es':**
- bus → buses
- wish → wishes
- box → boxes

**Words ending in consonant + y - change y to 'ies':**
- baby → babies
- city → cities

**Irregular plurals:**
- child → children
- man → men
- woman → women
- tooth → teeth
- mouse → mice`,
    },
    {
      id: 'engelsk-6-3-2-def-adjectives',
      type: 'definition',
      title: 'Adjectives',
      content: `**Adjectives describe nouns:**
- a **big** dog
- a **happy** girl
- **beautiful** flowers

**Adjectives come before the noun:**
- English: a red car (adjective + noun)
- Norwegian: en rød bil

**Common adjectives:**
- Size: big, small, tall, short
- Colour: red, blue, green, yellow
- Feeling: happy, sad, angry, excited
- Opinion: good, bad, nice, beautiful`,
    },
    {
      id: 'engelsk-6-3-2-def-comparison',
      type: 'definition',
      title: 'Comparing with Adjectives',
      content: `**Comparing two things - add 'er':**
- tall → taller (Emma is taller than Tom.)
- small → smaller
- fast → faster

**Comparing three or more - add 'est':**
- tall → tallest (Emma is the tallest in the class.)
- small → smallest
- fast → fastest

**Long adjectives - use 'more' and 'most':**
- beautiful → more beautiful → most beautiful
- interesting → more interesting → most interesting

**Irregular:**
- good → better → best
- bad → worse → worst`,
    },
    {
      id: 'engelsk-6-3-2-example-1',
      type: 'example',
      title: 'Example: Using Adjectives',
      problem: 'Describe a dog using adjectives:',
      solution: `**Basic:**
- A big dog
- A happy dog
- A brown dog

**Comparing:**
- My dog is bigger than your cat.
- She has the cutest dog in the world!

**Full sentence:**
"Max is a big, friendly, brown dog. He is bigger than my sister's dog, but he is not the biggest dog in our neighbourhood."`,
    },
    {
      id: 'engelsk-6-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-3-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Write the plural form:',
        subTasks: [
          { label: 'a', task: 'book', solution: 'books' },
          { label: 'b', task: 'box', solution: 'boxes' },
          { label: 'c', task: 'child', solution: 'children' },
          { label: 'd', task: 'baby', solution: 'babies' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-3-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Complete with the comparative or superlative:',
        subTasks: [
          { label: 'a', task: 'Tom is (tall) than Emma.', solution: 'taller' },
          { label: 'b', task: 'This is the (good) pizza I have ever eaten.', solution: 'best' },
          { label: 'c', task: 'Winter is (cold) than autumn.', solution: 'colder' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Describe your best friend using at least 5 adjectives. Also compare them to someone else using comparative forms.',
        solution: 'Example: My best friend is tall, funny, and kind. She is taller than me and funnier than most people I know. She has the biggest smile!',
        hints: ['Use: adjective + noun, comparative + than, the + superlative'],
      },
    },
  ],
};

// ============================================================================
// KAPITTEL 4: CULTURE
// ============================================================================

export const CHAPTER_ENGELSK_6_4_1: TextbookChapter = {
  id: 'engelsk-6-4-1',
  courseId: 'engelsk-6',
  chapterNumber: '4.1',
  title: 'English-speaking countries',
  description: 'Lær om kultur og tradisjoner i engelsktalende land.',
  estimatedMinutes: 45,
  exercises: [],
  competenceGoals: ['utforske levesett og tradisjoner i engelsktalende land'],
  content: [
    {
      id: 'engelsk-6-4-1-intro',
      type: 'text',
      content: `## English Around the World

English is spoken in many countries around the world. Let's learn about some of the main English-speaking countries and their cultures!`,
    },
    {
      id: 'engelsk-6-4-1-def-uk',
      type: 'definition',
      title: 'The United Kingdom (UK)',
      content: `**The UK includes:**
- England (capital: London)
- Scotland (capital: Edinburgh)
- Wales (capital: Cardiff)
- Northern Ireland (capital: Belfast)

**Famous things:**
- The Royal Family and Buckingham Palace
- Big Ben and the Houses of Parliament
- Double-decker buses and red telephone boxes
- Fish and chips
- Tea and scones

**Fun fact:** The UK is smaller than Norway, but has about 67 million people!`,
    },
    {
      id: 'engelsk-6-4-1-def-usa',
      type: 'definition',
      title: 'The United States of America (USA)',
      content: `**Facts:**
- Capital: Washington, D.C.
- 50 states
- About 330 million people

**Famous things:**
- The Statue of Liberty
- Hollywood movies
- Basketball and American football
- Hamburgers and hot dogs
- Thanksgiving

**Big cities:** New York, Los Angeles, Chicago

**Fun fact:** The USA is so big that it has 6 different time zones!`,
    },
    {
      id: 'engelsk-6-4-1-def-australia',
      type: 'definition',
      title: 'Australia',
      content: `**Facts:**
- Capital: Canberra (but Sydney is the biggest city)
- About 26 million people
- A continent and a country!

**Famous things:**
- Kangaroos and koalas
- The Sydney Opera House
- The Great Barrier Reef
- Surfing and beaches
- Vegemite (a special food spread)

**Fun fact:** When it's summer in Norway, it's winter in Australia!`,
    },
    {
      id: 'engelsk-6-4-1-def-other',
      type: 'definition',
      title: 'Other English-Speaking Countries',
      content: `**More countries where English is spoken:**
- **Canada:** Known for maple syrup, hockey, and beautiful nature
- **Ireland:** Famous for green landscapes and leprechauns
- **New Zealand:** Home of the Māori people and the movie The Lord of the Rings
- **South Africa:** Has 11 official languages, including English

English is also used in India, Singapore, Jamaica, and many more places!`,
    },
    {
      id: 'engelsk-6-4-1-example-1',
      type: 'example',
      title: 'Example: Comparing Countries',
      problem: 'What are some differences between the UK and the USA?',
      solution: `**Language differences:**
- UK: colour, favourite, metre
- USA: color, favorite, meter

**Other differences:**
- UK: Drive on the left side
- USA: Drive on the right side

- UK: Football = soccer
- USA: Football = American football

- UK: Use pounds (£)
- USA: Use dollars ($)`,
    },
    {
      id: 'engelsk-6-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-4-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match the country with its capital:',
        subTasks: [
          { label: 'a', task: 'UK', solution: 'London' },
          { label: 'b', task: 'USA', solution: 'Washington, D.C.' },
          { label: 'c', task: 'Australia', solution: 'Canberra' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-4-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Which country is famous for these things?',
        subTasks: [
          { label: 'a', task: 'Kangaroos and koalas', solution: 'Australia' },
          { label: 'b', task: 'Big Ben and the Royal Family', solution: 'UK (United Kingdom)' },
          { label: 'c', task: 'Hollywood and the Statue of Liberty', solution: 'USA' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose one English-speaking country. Write 5 sentences about what you know or would like to learn about that country.',
        solution: 'Answers will vary. Should include facts about the chosen country.',
        hints: ['Include: where it is, capital, famous things, what interests you'],
      },
    },
  ],
};

export const CHAPTER_ENGELSK_6_4_2: TextbookChapter = {
  id: 'engelsk-6-4-2',
  courseId: 'engelsk-6',
  chapterNumber: '4.2',
  title: 'Celebrations around the world',
  description: 'Utforsk feiringer og høytider i ulike kulturer.',
  estimatedMinutes: 40,
  exercises: [],
  competenceGoals: ['sammenligne egen kultur med kulturer i engelsktalende land'],
  content: [
    {
      id: 'engelsk-6-4-2-intro',
      type: 'text',
      content: `## Celebrations and Holidays

Different countries celebrate different holidays. Some holidays are similar to Norwegian ones, but they might be celebrated in different ways. Let's explore!`,
    },
    {
      id: 'engelsk-6-4-2-def-christmas',
      type: 'definition',
      title: 'Christmas',
      content: `**Christmas around the world:**

**UK and USA:**
- December 25th is the main day
- Hanging stockings by the fireplace
- Santa Claus comes down the chimney
- Eating turkey and Christmas pudding
- Pulling Christmas crackers (UK)

**Differences from Norway:**
- No julenisse in the barn!
- They open presents in the morning, not on Christmas Eve
- Santa uses reindeer, but Rudolph has a red nose!`,
    },
    {
      id: 'engelsk-6-4-2-def-thanksgiving',
      type: 'definition',
      title: 'Thanksgiving (USA)',
      content: `**When:** Fourth Thursday in November

**What is it?**
A holiday to give thanks for the harvest and good things in life.

**How it's celebrated:**
- Big family dinner
- Roast turkey with stuffing
- Mashed potatoes and gravy
- Pumpkin pie for dessert
- American football on TV
- Saying what you are thankful for

**Fun fact:** The day after Thanksgiving is "Black Friday" - the biggest shopping day of the year!`,
    },
    {
      id: 'engelsk-6-4-2-def-halloween',
      type: 'definition',
      title: 'Halloween',
      content: `**When:** October 31st

**Where:** Popular in the USA, UK, and increasingly in Norway too!

**How it's celebrated:**
- Wearing costumes (ghosts, witches, superheroes)
- Trick-or-treating: going door to door for candy
- Carving pumpkins into jack-o'-lanterns
- Decorating with spiders and bats
- Haunted houses

**Phrases:**
- "Trick or treat!"
- "Happy Halloween!"`,
    },
    {
      id: 'engelsk-6-4-2-def-other',
      type: 'definition',
      title: 'Other Celebrations',
      content: `**More holidays:**

**Easter** (UK/USA):
- Easter bunny brings chocolate eggs
- Easter egg hunts
- Hot cross buns (UK)

**Independence Day** (USA - July 4th):
- Fireworks
- Barbecues
- Parades

**St. Patrick's Day** (Ireland - March 17th):
- Wearing green
- Shamrocks (three-leaf clovers)
- Parades

**Guy Fawkes Night** (UK - November 5th):
- Bonfires
- Fireworks`,
    },
    {
      id: 'engelsk-6-4-2-example-1',
      type: 'example',
      title: 'Example: Comparing Celebrations',
      problem: 'Compare Norwegian Christmas with American/British Christmas:',
      solution: `**Similarities:**
- Both have Christmas trees
- Both give presents
- Both have special food
- Both have Santa/nisse

**Differences:**
| Norway | UK/USA |
|--------|--------|
| Main day: December 24th | Main day: December 25th |
| Open presents on Christmas Eve | Open presents Christmas morning |
| Eat ribbe or pinnekjøtt | Eat turkey |
| Julenissen brings presents | Santa comes down the chimney |
| Rice porridge with almond | Mince pies and Christmas pudding |`,
    },
    {
      id: 'engelsk-6-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-4-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Match the holiday with what people do:',
        subTasks: [
          { label: 'a', task: 'Halloween', solution: 'Trick-or-treating, wearing costumes' },
          { label: 'b', task: 'Thanksgiving', solution: 'Eating turkey, saying what you\'re thankful for' },
          { label: 'c', task: 'Easter', solution: 'Easter egg hunts, chocolate eggs' },
        ],
        solution: 'See subtasks',
      },
    },
    {
      id: 'engelsk-6-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'How is Christmas different in Norway compared to the UK/USA? Write three differences.',
        solution: 'Example: In Norway, we celebrate on December 24th, not 25th. We eat ribbe, not turkey. The nisse brings presents, not Santa in a chimney.',
        hints: ['Think about: when, what food, how presents are given'],
      },
    },
    {
      id: 'engelsk-6-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-6-4-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a short text (5-7 sentences) explaining a Norwegian holiday (17. mai, Easter, or Christmas) to an English friend who knows nothing about it.',
        solution: 'Answers will vary. Should explain what the holiday is, when it is, and how Norwegians celebrate it.',
        hints: ['Include: what it is, when, how we celebrate, special food or activities'],
      },
    },
  ],
};

// ============================================================================
// EKSPORTERE ALLE KAPITLER
// ============================================================================

export const ENGELSK_6_CHAPTERS: TextbookChapter[] = [
  // Kapittel 1: Communication
  CHAPTER_ENGELSK_6_1_1,
  CHAPTER_ENGELSK_6_1_2,
  CHAPTER_ENGELSK_6_1_3,
  // Kapittel 2: Reading and Writing
  CHAPTER_ENGELSK_6_2_1,
  CHAPTER_ENGELSK_6_2_2,
  // Kapittel 3: Grammar
  CHAPTER_ENGELSK_6_3_1,
  CHAPTER_ENGELSK_6_3_2,
  // Kapittel 4: Culture
  CHAPTER_ENGELSK_6_4_1,
  CHAPTER_ENGELSK_6_4_2,
];
