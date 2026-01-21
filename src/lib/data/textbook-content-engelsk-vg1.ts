/**
 * Tekstbok innhold for Engelsk VG1
 *
 * Folger LK20 lareplan for engelsk videregaende.
 * Fokus pa kommunikasjon, globalitet, litteratur og kritisk tenkning.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Communication and Language Skills
// ============================================================================

export const CHAPTER_ENGELSK_VG1_1: TextbookChapter = {
  id: 'engelsk-vg1-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '1',
  title: 'Communication and Language Skills',
  description: 'Utvikle kommunikasjonsferdigheter i engelsk gjennom ulike sjangre og situasjoner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke ulike strategier for spraklaring og kommunikasjon',
    'tilpasse sprak og kommunikasjon til formal og mottaker',
  ],
  content: [
    {
      id: 'engelsk-vg1-1-1-intro',
      type: 'text',
      content: `## Effective Communication in English

Kommunikasjon handler om mer enn bare ord. Det handler om a formidle budskap pa en mate som nar fram til mottakeren.

**The Four Pillars of Communication:**
1. **Clarity** - Being clear and concise
2. **Confidence** - Expressing yourself with assurance
3. **Courtesy** - Being respectful and polite
4. **Correctness** - Using appropriate language

**Communication Contexts:**
- **Formal:** Academic writing, job applications, business correspondence
- **Semi-formal:** School presentations, discussions with teachers
- **Informal:** Conversations with friends, social media`,
    },
    {
      id: 'engelsk-vg1-1-1-def-1',
      type: 'definition',
      title: 'Register and Tone',
      content: `**Formal Register:**
- Complete sentences and proper grammar
- No contractions (do not, cannot)
- Academic vocabulary
- Passive voice common
- Example: "The results indicate that further research is required."

**Informal Register:**
- Contractions allowed (don't, can't)
- Colloquial expressions
- First person common
- Shorter sentences
- Example: "I think we need to look into this more."

**Tone:**
- Objective vs. subjective
- Serious vs. humorous
- Respectful vs. casual
- Enthusiastic vs. neutral`,
    },
    {
      id: 'engelsk-vg1-1-1-def-2',
      type: 'definition',
      title: 'Communication Strategies',
      content: `**Active Listening:**
- Make eye contact
- Nod and show engagement
- Ask clarifying questions
- Paraphrase to confirm understanding

**Paraphrasing:**
- Restate ideas in your own words
- "So what you're saying is..."
- "If I understand correctly..."

**Circumlocution:**
- Describing when you don't know the exact word
- "It's a thing you use for..."
- "It's like a... but different because..."

**Code-switching:**
- Adapting language style to context
- Formal in professional settings
- Casual with peers`,
    },
    {
      id: 'engelsk-vg1-1-1-example-1',
      type: 'example',
      title: 'Example: Adapting Your Register',
      problem: `Du skal skrive en melding om at du kommer for sent til en avtale. Hvordan tilpasser du meldingen til ulike mottakere?`,
      solution: `**To a friend (informal):**
"Hey! Running late, stuck in traffic. Be there in 20 mins. Sorry!"

**To a teacher (semi-formal):**
"Hi Ms. Johnson, I apologize but I'll be about 20 minutes late to our meeting due to traffic. I hope this doesn't cause any inconvenience."

**To a job interviewer (formal):**
"Dear Mr. Smith, I regret to inform you that I will arrive approximately 20 minutes later than scheduled due to unexpected traffic conditions. I sincerely apologize for any inconvenience this may cause and appreciate your understanding."

**Key differences:**
- Vocabulary complexity increases
- Sentence length and structure change
- Level of formality in apology varies
- Contractions disappear in formal register`,
    },
    {
      id: 'engelsk-vg1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the register (formal, semi-formal, or informal):',
        subTasks: [
          {
            label: 'a',
            task: '"Gonna grab some coffee, wanna come?"',
            solution: 'Informal',
            multipleChoiceOptions: ['Formal', 'Semi-formal', 'Informal'],
          },
          {
            label: 'b',
            task: '"I would like to request an extension on the assignment deadline."',
            solution: 'Formal',
            multipleChoiceOptions: ['Formal', 'Semi-formal', 'Informal'],
          },
          {
            label: 'c',
            task: '"Thanks for the feedback, I\'ll work on improving those areas."',
            solution: 'Semi-formal',
            multipleChoiceOptions: ['Formal', 'Semi-formal', 'Informal'],
          },
        ],
        solution: 'a) Informal, b) Formal, c) Semi-formal',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Rewrite the following informal sentence in formal register:',
        subTasks: [
          {
            label: 'a',
            task: '"The meeting was a total waste of time."',
            solution: '"The meeting did not prove to be productive." / "The meeting failed to achieve its intended objectives."',
          },
          {
            label: 'b',
            task: '"You gotta do this by Friday or else."',
            solution: '"This task must be completed by Friday." / "I kindly request that you submit this by Friday."',
          },
          {
            label: 'c',
            task: '"I messed up big time on the test."',
            solution: '"I performed poorly on the examination." / "My test results were unsatisfactory."',
          },
        ],
        hints: ['Remove contractions', 'Use more sophisticated vocabulary', 'Avoid slang expressions'],
        solution: 'Formal language requires complete words, professional vocabulary, and objective tone.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Match the communication strategy with the correct example:',
        subTasks: [
          {
            label: 'a',
            task: '"So if I understand correctly, you want us to focus on quality over quantity?"',
            solution: 'Paraphrasing',
            multipleChoiceOptions: ['Paraphrasing', 'Circumlocution', 'Active listening', 'Code-switching'],
          },
          {
            label: 'b',
            task: '"It\'s that thing you use to open bottles - it has a spiral metal part..."',
            solution: 'Circumlocution',
            multipleChoiceOptions: ['Circumlocution', 'Paraphrasing', 'Active listening', 'Code-switching'],
          },
          {
            label: 'c',
            task: 'Nodding while someone speaks and then asking a follow-up question',
            solution: 'Active listening',
            multipleChoiceOptions: ['Active listening', 'Paraphrasing', 'Circumlocution', 'Code-switching'],
          },
        ],
        solution: 'a) Paraphrasing, b) Circumlocution, c) Active listening',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write three versions of an email asking for help with a school project:',
        subTasks: [
          {
            label: 'a',
            task: 'To a classmate (informal)',
            solution: 'Example: "Hey! Could you help me with the project? I\'m stuck on the research part. Maybe we could meet up?"',
          },
          {
            label: 'b',
            task: 'To your teacher (semi-formal)',
            solution: 'Example: "Hi Mr./Ms. [Name], I\'m having some difficulties with the research for my project. Would you have time to meet and give me some guidance?"',
          },
          {
            label: 'c',
            task: 'To an external expert (formal)',
            solution: 'Example: "Dear Dr. [Name], I am a student at [School] working on a project about [topic]. I would be grateful if you could spare some time to answer a few questions regarding your area of expertise."',
          },
        ],
        hints: ['Consider greeting, body, and closing for each', 'Adjust vocabulary and sentence structure'],
        solution: 'Each version should demonstrate appropriate register while conveying the same core message.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Practice circumlocution: Describe these words without using the word itself:',
        subTasks: [
          {
            label: 'a',
            task: 'Refrigerator',
            solution: 'Example: "A large kitchen appliance that keeps food cold to preserve it"',
          },
          {
            label: 'b',
            task: 'Procrastination',
            solution: 'Example: "The act of delaying or postponing tasks that need to be done"',
          },
          {
            label: 'c',
            task: 'Democracy',
            solution: 'Example: "A system of government where citizens vote to choose their leaders"',
          },
        ],
        hints: ['Describe the function, appearance, or category', 'Use phrases like "it\'s a type of..." or "it\'s used for..."'],
        solution: 'Circumlocution is essential when you lack the exact vocabulary.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Role-play scenario: You are participating in a job interview. Write out a dialogue where you:',
        hints: [
          'Introduce yourself professionally',
          'Answer a question about your strengths',
          'Ask a relevant question about the position',
          'Close the conversation appropriately',
        ],
        solution: 'A successful interview requires formal register, confident but polite tone, and active listening skills.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: English as a Global Language
// ============================================================================

export const CHAPTER_ENGELSK_VG1_2: TextbookChapter = {
  id: 'engelsk-vg1-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '2',
  title: 'English as a Global Language',
  description: 'Utforsk engelskens rolle som verdenssprak og hvordan det pavirker kommunikasjon globalt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over engelskens rolle som verdenssprak',
    'utforske og reflektere over mangfold og variasjon i engelskspraklige land',
  ],
  content: [
    {
      id: 'engelsk-vg1-2-1-intro',
      type: 'text',
      content: `## The Global Reach of English

English is spoken by approximately 1.5 billion people worldwide, making it the most widely spoken language on the planet. But how did this happen, and what does it mean for global communication?

**English as a Global Language:**
- **L1 speakers:** Native speakers (approximately 400 million)
- **L2 speakers:** Second language speakers (approximately 750 million)
- **ELF speakers:** English as a Lingua Franca users (millions more)

**Why English Became Global:**
1. British colonialism (17th-20th centuries)
2. American economic and cultural dominance (20th century)
3. The internet and digital communication
4. International business and science`,
    },
    {
      id: 'engelsk-vg1-2-1-def-1',
      type: 'definition',
      title: 'World Englishes',
      content: `**Inner Circle:**
Countries where English is the native language
- UK, USA, Canada, Australia, New Zealand, Ireland

**Outer Circle:**
Countries where English has official status
- India, Nigeria, Singapore, Philippines, Kenya, South Africa

**Expanding Circle:**
Countries where English is learned as a foreign language
- Norway, China, Brazil, Russia, Japan, Germany

**Key Varieties:**
- **British English:** colour, favourite, lift, flat
- **American English:** color, favorite, elevator, apartment
- **Indian English:** prepone, do the needful, timepass
- **Singaporean English (Singlish):** lah, can, shiok`,
    },
    {
      id: 'engelsk-vg1-2-1-def-2',
      type: 'definition',
      title: 'English as a Lingua Franca (ELF)',
      content: `**Definition:**
A lingua franca is a common language used between speakers with different native languages.

**Characteristics of ELF:**
- Focus on communication over "correctness"
- Flexible grammar rules
- Code-mixing is common
- Native speaker norms less important

**Advantages of ELF:**
- Enables global communication
- Democratizes language use
- Practical and functional

**Criticisms:**
- Cultural imperialism concerns
- Loss of linguistic diversity
- Advantage for native speakers
- May oversimplify complex ideas`,
    },
    {
      id: 'engelsk-vg1-2-1-example-1',
      type: 'example',
      title: 'Example: Language Variation',
      problem: `Hvordan kan den samme setningen se forskjellig ut i ulike engelske varianter?`,
      solution: `**"I am going to the shop to buy trainers/sneakers."**

**British English:**
"I'm going to the shop to buy some trainers."
- shop, trainers, queue, rubbish, lift

**American English:**
"I'm going to the store to get some sneakers."
- store, sneakers, line, garbage/trash, elevator

**Australian English:**
"I'm heading to the shops to grab some runners."
- shops, runners, arvo (afternoon), brekkie (breakfast)

**Indian English:**
"I am going to the shop to purchase sports shoes only."
- "only" used for emphasis
- more formal vocabulary often preferred

**Why it matters:**
Understanding these variations helps us communicate more effectively with English speakers worldwide and appreciate the rich diversity of the language.`,
    },
    {
      id: 'engelsk-vg1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match the word with its variety of English:',
        subTasks: [
          {
            label: 'a',
            task: 'Biscuit (meaning cookie)',
            solution: 'British English',
            multipleChoiceOptions: ['British English', 'American English', 'Australian English', 'Indian English'],
          },
          {
            label: 'b',
            task: 'Arvo',
            solution: 'Australian English',
            multipleChoiceOptions: ['Australian English', 'British English', 'American English', 'Singaporean English'],
          },
          {
            label: 'c',
            task: 'Prepone (opposite of postpone)',
            solution: 'Indian English',
            multipleChoiceOptions: ['Indian English', 'British English', 'American English', 'Australian English'],
          },
          {
            label: 'd',
            task: 'Sidewalk',
            solution: 'American English',
            multipleChoiceOptions: ['American English', 'British English', 'Australian English', 'Indian English'],
          },
        ],
        solution: 'a) British English, b) Australian English, c) Indian English, d) American English',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Categorize the following countries into the correct circle of World Englishes:',
        subTasks: [
          {
            label: 'a',
            task: 'Singapore',
            solution: 'Outer Circle',
            multipleChoiceOptions: ['Inner Circle', 'Outer Circle', 'Expanding Circle'],
          },
          {
            label: 'b',
            task: 'Norway',
            solution: 'Expanding Circle',
            multipleChoiceOptions: ['Inner Circle', 'Outer Circle', 'Expanding Circle'],
          },
          {
            label: 'c',
            task: 'Australia',
            solution: 'Inner Circle',
            multipleChoiceOptions: ['Inner Circle', 'Outer Circle', 'Expanding Circle'],
          },
          {
            label: 'd',
            task: 'Kenya',
            solution: 'Outer Circle',
            multipleChoiceOptions: ['Inner Circle', 'Outer Circle', 'Expanding Circle'],
          },
        ],
        solution: 'a) Outer Circle, b) Expanding Circle, c) Inner Circle, d) Outer Circle',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Translate these British English words to American English:',
        subTasks: [
          {
            label: 'a',
            task: 'Flat',
            solution: 'Apartment',
          },
          {
            label: 'b',
            task: 'Lorry',
            solution: 'Truck',
          },
          {
            label: 'c',
            task: 'Trousers',
            solution: 'Pants',
          },
          {
            label: 'd',
            task: 'Petrol',
            solution: 'Gas/Gasoline',
          },
        ],
        solution: 'a) Apartment, b) Truck, c) Pants, d) Gas/Gasoline',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Refleksjonsoppgave: Diskuter fordelene og ulempene ved at engelsk er et globalt sprak.',
        hints: [
          'Tenk pa tilgang til informasjon og muligheter',
          'Tenk pa kulturell pavirkning',
          'Tenk pa sprakmangfold',
          'Skriv minst 150 ord',
        ],
        solution: 'Et godt svar vurderer bade fordeler (kommunikasjon, muligheter, tilgang) og ulemper (kulturell dominans, sprakkdod, ulikhet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research task: Choose one country from the Outer Circle (India, Nigeria, Singapore, etc.) and write a short report (200-250 words) about:',
        hints: [
          'The history of English in that country',
          'How English is used today',
          'Special features of their English variety',
          'Attitudes towards English',
        ],
        solution: 'The report should show understanding of how English adapts to local contexts.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-2-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Debate preparation: "Native English speakers have an unfair advantage in international communication."',
        subTasks: [
          {
            label: 'a',
            task: 'List three arguments FOR this statement.',
            solution: 'Examples: Natural fluency, cultural familiarity, less effort required to communicate',
          },
          {
            label: 'b',
            task: 'List three arguments AGAINST this statement.',
            solution: 'Examples: ELF is evolving, non-native speakers adapt better to diverse contexts, technology helps bridge gaps',
          },
          {
            label: 'c',
            task: 'Write a conclusion stating your personal view.',
            solution: 'The conclusion should weigh both sides and present a nuanced personal opinion.',
          },
        ],
        solution: 'A balanced debate considers multiple perspectives on linguistic equity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Literature from English-speaking Countries
// ============================================================================

export const CHAPTER_ENGELSK_VG1_3: TextbookChapter = {
  id: 'engelsk-vg1-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '3',
  title: 'Literature from English-speaking Countries',
  description: 'Utforsk litteratur fra ulike engelskspraklige land og laer om litteraere tradisjoner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese, analysere og tolke engelskspraklig litteratur',
    'reflektere over kulturelle forhold gjennom litteraere tekster',
  ],
  content: [
    {
      id: 'engelsk-vg1-3-1-intro',
      type: 'text',
      content: `## Exploring World Literature in English

Litteratur fra engelskspraklige land gir oss vindu inn i ulike kulturer, historier og perspektiver. Fra Shakespeare til moderne forfattere, fra klassikere til samtidslitteratur - engelsk litteratur er rik og mangfoldig.

**Why Study Literature?**
- Develops empathy and understanding
- Expands vocabulary and language skills
- Provides cultural and historical insight
- Encourages critical thinking
- Offers entertainment and aesthetic pleasure

**Literary Periods Overview:**
- **Renaissance (1500-1660):** Shakespeare, poetry, drama
- **Romantic (1785-1830):** Nature, emotion, individual
- **Victorian (1837-1901):** Social issues, realism
- **Modernist (1900-1945):** Experimentation, stream of consciousness
- **Postmodern (1945-present):** Fragmentation, diversity`,
    },
    {
      id: 'engelsk-vg1-3-1-def-1',
      type: 'definition',
      title: 'Literary Genres',
      content: `**Fiction:**
- **Novel:** Extended narrative (Pride and Prejudice, 1984)
- **Short story:** Brief narrative (The Lottery, The Tell-Tale Heart)
- **Novella:** Medium-length narrative (The Great Gatsby, Animal Farm)

**Poetry:**
- **Sonnet:** 14 lines, specific rhyme scheme (Shakespeare's sonnets)
- **Free verse:** No fixed meter or rhyme (Walt Whitman)
- **Epic:** Long narrative poem (Beowulf, Paradise Lost)

**Drama:**
- **Tragedy:** Serious, usually ends in death (Hamlet, Death of a Salesman)
- **Comedy:** Humorous, usually happy ending (A Midsummer Night's Dream)
- **Tragicomedy:** Mix of both (The Merchant of Venice)

**Non-fiction:**
- **Essay:** Short analytical piece
- **Autobiography/Memoir:** Personal life story
- **Biography:** Someone else's life story`,
    },
    {
      id: 'engelsk-vg1-3-1-def-2',
      type: 'definition',
      title: 'Key Authors by Region',
      content: `**United Kingdom:**
- William Shakespeare (1564-1616): Hamlet, Romeo and Juliet
- Jane Austen (1775-1817): Pride and Prejudice
- Charles Dickens (1812-1870): Oliver Twist, Great Expectations
- George Orwell (1903-1950): 1984, Animal Farm

**United States:**
- Mark Twain (1835-1910): The Adventures of Huckleberry Finn
- F. Scott Fitzgerald (1896-1940): The Great Gatsby
- Harper Lee (1926-2016): To Kill a Mockingbird
- Toni Morrison (1931-2019): Beloved

**Other Regions:**
- Chinua Achebe (Nigeria): Things Fall Apart
- Margaret Atwood (Canada): The Handmaid's Tale
- Salman Rushdie (India/UK): Midnight's Children
- Peter Carey (Australia): True History of the Kelly Gang`,
    },
    {
      id: 'engelsk-vg1-3-1-example-1',
      type: 'example',
      title: 'Example: Analyzing a Poem',
      problem: `Analyser dette diktet av Langston Hughes:

"Dreams"
Hold fast to dreams
For if dreams die
Life is a broken-winged bird
That cannot fly.

Hold fast to dreams
For when dreams go
Life is a barren field
Frozen with snow.`,
      solution: `**Structure:**
- Two stanzas, four lines each (quatrains)
- Simple, repetitive structure reinforces message
- Anaphora: "Hold fast to dreams" repeated

**Imagery:**
- "Broken-winged bird" - helpless, grounded, unable to reach potential
- "Barren field frozen with snow" - lifeless, cold, unproductive

**Literary Devices:**
- **Metaphor:** Life without dreams = broken bird / frozen field
- **Repetition:** Emphasizes importance of the message
- **Contrast:** Dreams = life and movement vs. No dreams = death and stillness

**Theme:**
The poem argues that dreams are essential for a meaningful life. Without them, we become stuck and lifeless.

**Context:**
Langston Hughes was a key figure in the Harlem Renaissance. For African Americans facing discrimination, dreams of equality and opportunity were crucial for survival and resistance.`,
    },
    {
      id: 'engelsk-vg1-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match the author with their work:',
        subTasks: [
          {
            label: 'a',
            task: 'George Orwell',
            solution: '1984 / Animal Farm',
            multipleChoiceOptions: ['1984', 'The Great Gatsby', 'Pride and Prejudice', 'Beloved'],
          },
          {
            label: 'b',
            task: 'Harper Lee',
            solution: 'To Kill a Mockingbird',
            multipleChoiceOptions: ['To Kill a Mockingbird', 'The Handmaid\'s Tale', 'Things Fall Apart', 'Great Expectations'],
          },
          {
            label: 'c',
            task: 'Chinua Achebe',
            solution: 'Things Fall Apart',
            multipleChoiceOptions: ['Things Fall Apart', 'Beloved', '1984', 'Pride and Prejudice'],
          },
          {
            label: 'd',
            task: 'Margaret Atwood',
            solution: 'The Handmaid\'s Tale',
            multipleChoiceOptions: ['The Handmaid\'s Tale', 'To Kill a Mockingbird', 'The Great Gatsby', 'Animal Farm'],
          },
        ],
        solution: 'a) 1984, b) To Kill a Mockingbird, c) Things Fall Apart, d) The Handmaid\'s Tale',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Identify the literary genre:',
        subTasks: [
          {
            label: 'a',
            task: 'A 300-page story following a family over three generations',
            solution: 'Novel',
            multipleChoiceOptions: ['Novel', 'Short story', 'Novella', 'Essay'],
          },
          {
            label: 'b',
            task: 'A 14-line poem with a specific rhyme scheme',
            solution: 'Sonnet',
            multipleChoiceOptions: ['Sonnet', 'Free verse', 'Epic', 'Ballad'],
          },
          {
            label: 'c',
            task: 'A play ending with the death of the main character',
            solution: 'Tragedy',
            multipleChoiceOptions: ['Tragedy', 'Comedy', 'Tragicomedy', 'Farce'],
          },
        ],
        solution: 'a) Novel, b) Sonnet, c) Tragedy',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Read the following excerpt from "Animal Farm" by George Orwell and answer the questions:',
        subTasks: [
          {
            label: 'a',
            task: '"All animals are equal, but some animals are more equal than others." - What literary device is used here?',
            solution: 'Paradox/Irony - the statement contradicts itself, highlighting hypocrisy',
          },
          {
            label: 'b',
            task: 'What is the book satirizing?',
            solution: 'Totalitarianism, the Soviet Union, corruption of ideals',
          },
          {
            label: 'c',
            task: 'Why is this quote still relevant today?',
            solution: 'It comments on inequality and how power corrupts, themes that remain relevant in modern politics.',
          },
        ],
        hints: ['Consider the historical context of when the book was written'],
        solution: 'Good analysis connects literary devices to meaning and broader themes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare and contrast two literary works from different English-speaking countries. Choose from your syllabus or personal reading.',
        hints: [
          'Consider setting, characters, and themes',
          'How do they reflect their cultural contexts?',
          'What similarities and differences do you notice?',
          'Write 200-300 words',
        ],
        solution: 'Comparative analysis should identify specific elements and explain their significance.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a short poem (8-12 lines) inspired by one of the literary movements discussed. Explain which movement inspired you and why.',
        hints: [
          'Romantic: Focus on nature, emotion, individual experience',
          'Modernist: Experiment with form, use imagery, fragmentation',
          'Postmodern: Play with conventions, mix styles, self-reference',
        ],
        solution: 'Creative writing should show understanding of the literary movement\'s characteristics.',
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
        task: 'Book presentation: Prepare a 5-minute presentation about a book you have read from an English-speaking country. Include:',
        subTasks: [
          {
            label: 'a',
            task: 'Title, author, and brief summary',
            solution: 'Provide key information without spoilers',
          },
          {
            label: 'b',
            task: 'Analysis of one key theme',
            solution: 'Explain the theme with examples from the text',
          },
          {
            label: 'c',
            task: 'How the book reflects its cultural context',
            solution: 'Connect the book to its time period and place of origin',
          },
          {
            label: 'd',
            task: 'Your personal response and recommendation',
            solution: 'Give your opinion with reasoning',
          },
        ],
        solution: 'A good book presentation shows both understanding and personal engagement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Critical Thinking and Source Evaluation
// ============================================================================

export const CHAPTER_ENGELSK_VG1_4: TextbookChapter = {
  id: 'engelsk-vg1-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '4',
  title: 'Critical Thinking and Source Evaluation',
  description: 'Utvikle ferdigheter i kritisk tenkning og kildevurdering i en digital verden.',
  estimatedMinutes: 55,
  competenceGoals: [
    'vurdere og bruke innhold fra ulike kilder pa en kritisk og etterrettelig mate',
    'skille mellom fakta og meninger, og vurdere kilders palitelighet',
  ],
  content: [
    {
      id: 'engelsk-vg1-4-1-intro',
      type: 'text',
      content: `## Thinking Critically in the Information Age

I en verden med uendelig tilgang til informasjon er evnen til a tenke kritisk og vurdere kilder viktigere enn noensinne.

**What is Critical Thinking?**
Critical thinking is the objective analysis and evaluation of an issue to form a judgment. It involves:
- Questioning assumptions
- Examining evidence
- Recognizing bias
- Drawing logical conclusions
- Being open to changing your mind

**Why Source Evaluation Matters:**
- Misinformation spreads faster than facts
- Anyone can publish content online
- AI-generated content is increasingly realistic
- Information shapes our decisions and beliefs`,
    },
    {
      id: 'engelsk-vg1-4-1-def-1',
      type: 'definition',
      title: 'The SIFT Method',
      content: `**S - Stop**
Before sharing or using information, pause and think.
- Don't react immediately
- Check your emotional response
- Consider why you're seeing this content

**I - Investigate the Source**
Who is behind the information?
- What organization publishes this?
- What is their reputation?
- What is their expertise in this area?

**F - Find Better Coverage**
Look for other sources on the same topic.
- Do reputable sources agree?
- What do experts say?
- Are there different perspectives?

**T - Trace Claims**
Go to the original source.
- Where does this claim come from?
- Is it taken out of context?
- What does the original say?`,
    },
    {
      id: 'engelsk-vg1-4-1-def-2',
      type: 'definition',
      title: 'Types of Sources and Their Reliability',
      content: `**Primary Sources:**
Original, firsthand accounts
- Diaries, letters, interviews
- Scientific data, statistics
- Official documents, laws
- Photographs, videos of events

**Secondary Sources:**
Analysis and interpretation of primary sources
- Textbooks, encyclopedias
- News articles, documentaries
- Academic papers reviewing research

**Tertiary Sources:**
Compilations of primary and secondary sources
- Wikipedia, dictionaries
- Bibliographies, indexes

**Reliability Spectrum:**
Most reliable → Least reliable
1. Peer-reviewed academic journals
2. Quality newspapers (editorial vs. opinion)
3. Government/official statistics
4. Established news organizations
5. Blogs and opinion pieces
6. Social media posts
7. Anonymous sources`,
    },
    {
      id: 'engelsk-vg1-4-1-example-1',
      type: 'example',
      title: 'Example: Evaluating a News Article',
      problem: `Du finner en artikkel med overskriften: "New study proves coffee cures cancer!" Hvordan vurderer du denne kilden?`,
      solution: `**Red Flags in the Headline:**
- "Proves" - science rarely "proves" anything definitively
- "Cures" - medical claims should be cautious
- Sensational tone

**Questions to Ask:**

**1. Source (S - Stop and Investigate):**
- What website is this from?
- Is it a known health publication or random blog?
- Who wrote it? Are they qualified?

**2. Evidence (F - Find Better Coverage):**
- Is there a link to the actual study?
- What do medical experts say?
- Are reputable sources (BBC, NYT, scientific journals) covering this?

**3. Original Study (T - Trace):**
- What did the study actually say?
- Sample size? Methodology?
- Correlation vs. causation
- Funded by whom?

**Likely Finding:**
The original study probably showed a correlation between coffee consumption and reduced cancer risk in a specific population - NOT a cure. The headline exaggerates for clicks.

**Conclusion:**
This is likely misleading clickbait. Always check the original source and expert opinions before believing or sharing health claims.`,
    },
    {
      id: 'engelsk-vg1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the type of source:',
        subTasks: [
          {
            label: 'a',
            task: 'A peer-reviewed scientific journal article',
            solution: 'Primary/Secondary source (depending on if it presents new research or reviews existing)',
            multipleChoiceOptions: ['Primary source', 'Secondary source', 'Tertiary source'],
          },
          {
            label: 'b',
            task: 'Wikipedia article about World War II',
            solution: 'Tertiary source',
            multipleChoiceOptions: ['Primary source', 'Secondary source', 'Tertiary source'],
          },
          {
            label: 'c',
            task: 'A diary from someone who lived through an event',
            solution: 'Primary source',
            multipleChoiceOptions: ['Primary source', 'Secondary source', 'Tertiary source'],
          },
          {
            label: 'd',
            task: 'A documentary analyzing historical events',
            solution: 'Secondary source',
            multipleChoiceOptions: ['Primary source', 'Secondary source', 'Tertiary source'],
          },
        ],
        solution: 'a) Primary/Secondary, b) Tertiary, c) Primary, d) Secondary',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Apply the SIFT method to evaluate these scenarios:',
        subTasks: [
          {
            label: 'a',
            task: 'You see a viral social media post claiming a famous person has died. What do you do?',
            solution: 'S: Stop, don\'t share immediately. I: Check the account - is it verified? F: Look for news from reputable sources. T: Find official statements.',
          },
          {
            label: 'b',
            task: 'A website claims a common food is dangerous based on a "study." How do you verify?',
            solution: 'S: Pause, check emotional reaction. I: Who runs this website? I: What are their credentials? F: Check medical/scientific sources. T: Find and read the actual study.',
          },
        ],
        hints: ['Use all four steps of SIFT', 'Think about what could go wrong if you skip steps'],
        solution: 'Good source evaluation requires systematic checking at multiple levels.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Identify the logical fallacy in each statement:',
        subTasks: [
          {
            label: 'a',
            task: '"Everyone is buying this product, so it must be good."',
            solution: 'Bandwagon fallacy / Appeal to popularity',
            multipleChoiceOptions: ['Bandwagon fallacy', 'Straw man', 'False dichotomy', 'Ad hominem'],
          },
          {
            label: 'b',
            task: '"You can\'t trust his opinion on climate change - he\'s not even a scientist."',
            solution: 'Ad hominem / Appeal to authority (inverted)',
            multipleChoiceOptions: ['Ad hominem', 'Bandwagon fallacy', 'Slippery slope', 'Circular reasoning'],
          },
          {
            label: 'c',
            task: '"If we allow students to use phones in class, soon they\'ll be gaming all day and failing all their classes."',
            solution: 'Slippery slope',
            multipleChoiceOptions: ['Slippery slope', 'False dichotomy', 'Bandwagon fallacy', 'Straw man'],
          },
          {
            label: 'd',
            task: '"Either you support this policy completely, or you\'re against progress."',
            solution: 'False dichotomy / False dilemma',
            multipleChoiceOptions: ['False dichotomy', 'Ad hominem', 'Slippery slope', 'Bandwagon fallacy'],
          },
        ],
        solution: 'a) Bandwagon, b) Ad hominem, c) Slippery slope, d) False dichotomy',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare two news articles on the same topic from different sources. Analyze:',
        hints: [
          'Choose a current news story',
          'Find articles from different types of sources (e.g., BBC vs. blog)',
          'Compare facts presented, language used, and perspectives offered',
          'Write 200-250 words',
        ],
        solution: 'Comparison should identify specific differences in framing, evidence, and bias.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Fact-checking exercise: Choose a claim you\'ve seen on social media and verify it using at least three different methods. Document your process.',
        subTasks: [
          {
            label: 'a',
            task: 'State the claim you\'re investigating',
            solution: 'Write the exact claim clearly',
          },
          {
            label: 'b',
            task: 'Apply the SIFT method and document each step',
            solution: 'Show your process for each letter of SIFT',
          },
          {
            label: 'c',
            task: 'Reach a conclusion: Is the claim true, false, or partially true?',
            solution: 'Provide evidence-based conclusion',
          },
        ],
        solution: 'Good fact-checking is systematic and documents the verification process.',
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
        task: 'Essay: "In the age of AI-generated content, can we trust anything we see online?" Write a 300-400 word argumentative essay.',
        hints: [
          'Introduce the problem of AI-generated content',
          'Discuss both challenges and solutions',
          'Include examples of deepfakes, AI text, etc.',
          'Conclude with your own view and recommendations',
        ],
        solution: 'Essay should show critical thinking about digital literacy and offer reasoned arguments.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Written Communication - Essays and Reports
// ============================================================================

export const CHAPTER_ENGELSK_VG1_5: TextbookChapter = {
  id: 'engelsk-vg1-5',
  courseId: 'engelsk-vg1',
  chapterNumber: '5',
  title: 'Written Communication - Essays and Reports',
  description: 'Mestre akademisk skriving med fokus pa essays og rapporter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'skrive ulike typer formelle tekster med struktur og sammenheng',
    'bruke fagterminologi og variert sprak i skriftlige tekster',
  ],
  content: [
    {
      id: 'engelsk-vg1-5-1-intro',
      type: 'text',
      content: `## Mastering Academic Writing

Akademisk skriving er en ferdig het du vil bruke gjennom hele utdanningen og i arbeidslivet. Det handler om a presentere ideer klart, logisk og overbevisende.

**Types of Academic Writing:**
- **Argumentative essay:** Take a position and defend it
- **Expository essay:** Explain and inform
- **Analytical essay:** Analyze a text, concept, or issue
- **Research report:** Present findings from investigation
- **Comparative essay:** Compare and contrast

**Key Principles:**
1. Clear thesis statement
2. Logical organization
3. Evidence-based arguments
4. Proper citations
5. Formal academic language`,
    },
    {
      id: 'engelsk-vg1-5-1-def-1',
      type: 'definition',
      title: 'Essay Structure',
      content: `**Introduction (10-15% of essay):**
- Hook: Engage the reader
- Background: Provide context
- Thesis statement: State your main argument

**Body Paragraphs (70-80%):**
Each paragraph should contain:
- Topic sentence (main point)
- Evidence (facts, quotes, examples)
- Analysis (explain the evidence)
- Link (connect to thesis/next point)

**Conclusion (10-15%):**
- Restate thesis (in new words)
- Summarize main points
- Broader implications/final thought
- Do NOT introduce new information

**Paragraph Structure (PEEL):**
- **P**oint: Topic sentence
- **E**vidence: Supporting facts/quotes
- **E**xplain: Analysis of evidence
- **L**ink: Connection to argument`,
    },
    {
      id: 'engelsk-vg1-5-1-def-2',
      type: 'definition',
      title: 'Academic Language Features',
      content: `**Formal Vocabulary:**
- "Therefore" not "so"
- "However" not "but"
- "Significant" not "big"
- "Utilize" not "use"
- "Demonstrate" not "show"

**Hedging Language:**
- "It appears that..." / "Evidence suggests..."
- "This may indicate..." / "It could be argued..."
- "Tends to" / "Generally" / "Often"

**Avoid:**
- Contractions (don't → do not)
- First person (I think → It can be argued)
- Informal expressions (a lot → numerous)
- Vague language (things → factors)
- Emotional language (terrible → problematic)

**Citation Phrases:**
- According to Smith (2023)...
- Research by Jones (2022) shows that...
- As stated in the report (2024)...
- The author argues that...`,
    },
    {
      id: 'engelsk-vg1-5-1-example-1',
      type: 'example',
      title: 'Example: Writing a Strong Paragraph',
      problem: `Skriv et avsnitt som argumenterer for at fysisk aktivitet bor vaere obligatorisk i skolen.`,
      solution: `**Strong Body Paragraph:**

**(P) Topic sentence:**
"Physical education should be mandatory in schools because it significantly improves students' academic performance."

**(E) Evidence:**
"Research conducted by Harvard Medical School (2022) found that students who engaged in at least 30 minutes of daily physical activity showed a 15% improvement in concentration and test scores compared to sedentary students. Furthermore, a longitudinal study in Finland demonstrated that schools with increased PE requirements saw overall grade improvements."

**(E) Explanation:**
"These findings suggest that physical activity increases blood flow to the brain, enhancing cognitive function and memory retention. When students are physically active, they are better equipped to focus during lessons and retain information for assessments."

**(L) Link:**
"Therefore, making physical education compulsory would not only benefit students' physical health but would also serve as a powerful tool for improving academic outcomes across all subjects."

**Note how this paragraph:**
- Makes ONE clear point
- Uses specific evidence with citations
- Explains WHY the evidence matters
- Connects back to the main argument`,
    },
    {
      id: 'engelsk-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the problem with each thesis statement and improve it:',
        subTasks: [
          {
            label: 'a',
            task: '"Social media is bad."',
            solution: 'Too vague. Improved: "Social media platforms negatively impact teenagers\' mental health by promoting unrealistic body standards and encouraging addictive usage patterns."',
          },
          {
            label: 'b',
            task: '"I think climate change is a problem."',
            solution: 'Too weak/informal. Improved: "Climate change represents an existential threat that requires immediate international cooperation to reduce carbon emissions."',
          },
          {
            label: 'c',
            task: '"This essay will discuss education."',
            solution: 'No argument. Improved: "Implementing project-based learning in Norwegian high schools would better prepare students for the collaborative demands of modern workplaces."',
          },
        ],
        hints: ['A good thesis is specific, arguable, and complex enough to discuss'],
        solution: 'Strong thesis statements take a clear position and preview the argument.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Convert these informal expressions to formal academic language:',
        subTasks: [
          {
            label: 'a',
            task: '"A lot of people think..."',
            solution: '"Many researchers/scholars argue..." or "It is widely believed that..."',
          },
          {
            label: 'b',
            task: '"This shows that..."',
            solution: '"This demonstrates/illustrates/indicates that..."',
          },
          {
            label: 'c',
            task: '"Kids today..."',
            solution: '"Contemporary youth/Young people today/Adolescents in modern society..."',
          },
          {
            label: 'd',
            task: '"The results were really surprising."',
            solution: '"The results proved unexpected/remarkable/significant."',
          },
        ],
        solution: 'Academic writing requires precise, formal vocabulary.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Write a PEEL paragraph on ONE of the following topics:',
        subTasks: [
          {
            label: 'a',
            task: 'Option 1: "Schools should/should not have dress codes."',
            solution: 'Paragraph should have clear topic sentence, evidence, explanation, and link.',
          },
          {
            label: 'b',
            task: 'Option 2: "Social media does more harm/good than people realize."',
            solution: 'Paragraph should have clear topic sentence, evidence, explanation, and link.',
          },
        ],
        hints: ['Start with a clear topic sentence', 'Include at least one piece of evidence', 'Explain why the evidence matters', 'Link back to your main point'],
        solution: 'A strong PEEL paragraph is focused, supported, and connected to the larger argument.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write an introduction for an essay on the topic: "Should voting be mandatory for all citizens?"',
        hints: [
          'Start with a hook (question, statistic, or provocative statement)',
          'Provide brief background on the issue',
          'End with a clear thesis statement',
          'Write approximately 100-150 words',
        ],
        solution: 'Introduction should engage reader, provide context, and state a clear position.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a full argumentative essay (400-500 words) on ONE of the following topics:',
        subTasks: [
          {
            label: 'Options',
            task: '1) "Should homework be abolished?"\n2) "Is technology making us less social?"\n3) "Should the school week be four days instead of five?"',
            solution: 'Choose one topic and write a complete essay.',
          },
        ],
        hints: [
          'Introduction with thesis',
          'At least two body paragraphs using PEEL',
          'Address a counterargument',
          'Conclusion that restates thesis and provides final thought',
        ],
        solution: 'Essay is evaluated on structure, argumentation, language, and coherence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Peer review: Exchange essays with a classmate and provide feedback using this checklist:',
        subTasks: [
          {
            label: 'a',
            task: 'Does the introduction have a clear thesis statement?',
            solution: 'Yes/No + suggestion for improvement',
          },
          {
            label: 'b',
            task: 'Does each body paragraph have a clear topic sentence?',
            solution: 'Yes/No + suggestion for improvement',
          },
          {
            label: 'c',
            task: 'Is evidence provided and properly explained?',
            solution: 'Yes/No + suggestion for improvement',
          },
          {
            label: 'd',
            task: 'Is the language appropriately formal?',
            solution: 'Yes/No + examples of informal language to fix',
          },
          {
            label: 'e',
            task: 'Does the conclusion effectively wrap up the essay?',
            solution: 'Yes/No + suggestion for improvement',
          },
        ],
        solution: 'Constructive peer feedback helps both the reviewer and the writer improve.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Oral Presentations and Discussions
// ============================================================================

export const CHAPTER_ENGELSK_VG1_6: TextbookChapter = {
  id: 'engelsk-vg1-6',
  courseId: 'engelsk-vg1',
  chapterNumber: '6',
  title: 'Oral Presentations and Discussions',
  description: 'Utvikle ferdigheter i muntlig presentasjon og deltakelse i diskusjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'uttrykke seg med flyt og sammenheng tilpasset formal og situasjon',
    'delta i spontane samtaler og planlagte diskusjoner',
  ],
  content: [
    {
      id: 'engelsk-vg1-6-1-intro',
      type: 'text',
      content: `## Speaking with Confidence

Muntlige ferdigheter er avgjorende bade i utdanning og arbeidsliv. A kunne presentere ideer tydelig og delta aktivt i diskusjoner er ferdigheter som vil tjene deg livet ut.

**Types of Oral Communication:**
- **Formal presentation:** Planned, structured, one-way
- **Discussion/Debate:** Interactive, exchange of ideas
- **Interview:** Question and response format
- **Informal conversation:** Spontaneous, casual

**Key Skills:**
1. Clear articulation and pronunciation
2. Appropriate pace and volume
3. Engaging body language
4. Logical structure
5. Audience awareness`,
    },
    {
      id: 'engelsk-vg1-6-1-def-1',
      type: 'definition',
      title: 'Presentation Structure and Techniques',
      content: `**Opening Strategies:**
- Ask a rhetorical question
- Share a surprising statistic
- Tell a brief story or anecdote
- Use a relevant quote
- Create a visual scenario

**Signposting Language:**
- "First, I'd like to discuss..."
- "Moving on to my next point..."
- "This brings me to..."
- "To illustrate this..."
- "In conclusion..."

**Handling Nerves:**
- Breathe deeply before starting
- Focus on the message, not yourself
- Make eye contact with friendly faces
- Pause - silence is okay
- Remember: the audience wants you to succeed

**Closing Techniques:**
- Summarize key points
- End with a call to action
- Circle back to your opening
- Leave a memorable final thought
- Thank the audience and invite questions`,
    },
    {
      id: 'engelsk-vg1-6-1-def-2',
      type: 'definition',
      title: 'Discussion and Debate Skills',
      content: `**Contributing to Discussions:**
- "I'd like to add to that point..."
- "That's interesting, but have you considered..."
- "Building on what [name] said..."
- "I agree/disagree because..."

**Expressing Agreement:**
- "Absolutely, and I would add that..."
- "I couldn't agree more."
- "That's exactly how I see it."
- "You've raised an excellent point."

**Expressing Disagreement (politely):**
- "I see your point, however..."
- "That's one perspective, but I would argue..."
- "I understand where you're coming from, but..."
- "With respect, I have a different view..."

**Asking for Clarification:**
- "Could you elaborate on that?"
- "What do you mean by...?"
- "Could you give an example?"
- "I'm not sure I follow - could you explain?"

**Debate Structure:**
- State your position clearly
- Provide supporting arguments
- Anticipate and rebut counterarguments
- Summarize and reinforce your position`,
    },
    {
      id: 'engelsk-vg1-6-1-example-1',
      type: 'example',
      title: 'Example: Structuring a 5-Minute Presentation',
      problem: `Lag en plan for en 5-minutters presentasjon om "The Impact of Social Media on Youth."`,
      solution: `**Presentation Outline:**

**Opening (30 seconds):**
"How many hours did you spend on social media today? [Pause] Studies show the average teenager spends 7 hours daily on screens. Today, I'll explore how this is reshaping young people's lives - for better and worse."

**Main Point 1 (1.5 minutes):**
*Mental Health Impact*
- Topic: Connection between social media and anxiety/depression
- Evidence: Studies showing increased rates of mental health issues
- Example: FOMO, comparison culture, cyberbullying

**Main Point 2 (1.5 minutes):**
*Positive Aspects*
- Topic: Benefits of social media for youth
- Evidence: Community building, information access, creativity
- Example: Support groups, educational content, activism

**Main Point 3 (1 minute):**
*Finding Balance*
- Topic: Strategies for healthy use
- Suggestions: Time limits, curation, digital detox

**Conclusion (30 seconds):**
"Social media isn't inherently good or bad - it's a tool. How we use it determines its impact. As digital natives, we have both the challenge and the opportunity to define a healthier relationship with our screens. Thank you."

**Visual Aids:**
- Slide 1: Title and hook statistic
- Slide 2-4: Key points with images/graphs
- Slide 5: Summary and call to action`,
    },
    {
      id: 'engelsk-vg1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose the most appropriate phrase for each situation:',
        subTasks: [
          {
            label: 'a',
            task: 'You want to politely disagree with someone in a class discussion.',
            solution: 'I see your point, however...',
            multipleChoiceOptions: ['I see your point, however...', 'You\'re completely wrong.', 'Whatever.', 'I couldn\'t agree more.'],
          },
          {
            label: 'b',
            task: 'You want to transition to your next main point in a presentation.',
            solution: 'This brings me to my next point...',
            multipleChoiceOptions: ['This brings me to my next point...', 'Anyway...', 'So like...', 'To conclude...'],
          },
          {
            label: 'c',
            task: 'You didn\'t understand what someone said and need clarification.',
            solution: 'Could you elaborate on that?',
            multipleChoiceOptions: ['Could you elaborate on that?', 'What?', 'That makes no sense.', 'Moving on...'],
          },
        ],
        solution: 'a) I see your point, however... b) This brings me to my next point... c) Could you elaborate on that?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write opening lines for presentations on these topics. Make them engaging!',
        subTasks: [
          {
            label: 'a',
            task: 'A presentation about climate change',
            solution: 'Example: "Imagine a world where summer means wildfires, winter brings floods, and coastal cities are underwater. This isn\'t science fiction - it\'s the future we\'re creating."',
          },
          {
            label: 'b',
            task: 'A presentation about the importance of sleep',
            solution: 'Example: "Last night, while you were sleeping, your brain was busier than ever - sorting memories, repairing cells, and preparing you for today. Yet most of us treat sleep as optional."',
          },
          {
            label: 'c',
            task: 'A presentation about artificial intelligence',
            solution: 'Example: "In the time it takes me to give this presentation, AI will have written thousands of articles, created hundreds of images, and made millions of decisions. Are we ready?"',
          },
        ],
        hints: ['Use a question, statistic, story, or provocative statement', 'Make it relevant to your audience'],
        solution: 'Strong openings capture attention and preview the topic.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Practice responding to these discussion prompts. Write your responses (3-4 sentences each):',
        subTasks: [
          {
            label: 'a',
            task: '"Do you think university education should be free for everyone?"',
            solution: 'Response should state position, provide reasoning, and acknowledge complexity.',
          },
          {
            label: 'b',
            task: '"Is it possible to be too connected in the digital age?"',
            solution: 'Response should engage with the question, provide examples, and show critical thinking.',
          },
        ],
        hints: ['State your opinion clearly', 'Give at least one reason', 'Acknowledge other perspectives'],
        solution: 'Good discussion responses are thoughtful, structured, and open to dialogue.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Prepare a 3-minute presentation on a topic of your choice. Include:',
        subTasks: [
          {
            label: 'a',
            task: 'An engaging opening',
            solution: 'Hook that captures attention',
          },
          {
            label: 'b',
            task: 'Two or three main points with evidence',
            solution: 'Clear, supported arguments',
          },
          {
            label: 'c',
            task: 'Signposting language throughout',
            solution: 'Smooth transitions between sections',
          },
          {
            label: 'd',
            task: 'A memorable conclusion',
            solution: 'Summary and final thought',
          },
        ],
        hints: ['Practice timing yourself', 'Use notes, not a full script', 'Record yourself to review'],
        solution: 'A good presentation is well-structured, engaging, and delivered with confidence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Debate preparation: Choose one side of the following topic and prepare three arguments with counterarguments.',
        subTasks: [
          {
            label: 'Topic',
            task: '"Social media companies should be held legally responsible for content posted by users."',
            solution: 'Prepare arguments for your assigned side.',
          },
          {
            label: 'a',
            task: 'Argument 1 + anticipated counterargument',
            solution: 'State your point and prepare response to opposition',
          },
          {
            label: 'b',
            task: 'Argument 2 + anticipated counterargument',
            solution: 'State your point and prepare response to opposition',
          },
          {
            label: 'c',
            task: 'Argument 3 + anticipated counterargument',
            solution: 'State your point and prepare response to opposition',
          },
        ],
        solution: 'Strong debate preparation anticipates opposing arguments.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Group discussion simulation: In groups of 4-5, discuss the following topic for 10 minutes. Each person should contribute at least twice.',
        hints: [
          'Topic: "Should schools teach practical life skills (cooking, finances, etc.) instead of some traditional subjects?"',
          'Use discussion phrases from the chapter',
          'Build on others\' points',
          'Practice polite disagreement',
        ],
        solution: 'Active participation and respectful dialogue are key to good discussions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Culture and Society in the UK
// ============================================================================

export const CHAPTER_ENGELSK_VG1_7: TextbookChapter = {
  id: 'engelsk-vg1-7',
  courseId: 'engelsk-vg1',
  chapterNumber: '7',
  title: 'Culture and Society in the UK',
  description: 'Utforsk britisk kultur, historie og samfunn.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over kulturelle forhold i engelskspraklige land',
    'forsta sammenhenger mellom historie og dagens samfunn',
  ],
  content: [
    {
      id: 'engelsk-vg1-7-1-intro',
      type: 'text',
      content: `## Understanding the United Kingdom

Storbritannia har hatt enorm innflytelse pa verden gjennom sin historie - fra imperietiden til populaerkultur. A forsta britisk kultur og samfunn gir innsikt i mange globale fenomener.

**What is the UK?**
The United Kingdom consists of four nations:
- **England** - London is capital of both England and UK
- **Scotland** - Edinburgh is capital, own parliament
- **Wales** - Cardiff is capital, own assembly
- **Northern Ireland** - Belfast is capital, complex history

**Key Facts:**
- Population: ~67 million
- Constitutional monarchy with parliamentary democracy
- Official language: English (also Welsh in Wales, Gaelic in Scotland)
- Currency: Pound Sterling (GBP)`,
    },
    {
      id: 'engelsk-vg1-7-1-def-1',
      type: 'definition',
      title: 'Historical Overview',
      content: `**Key Periods:**

**Medieval Period (1066-1485):**
- Norman Conquest 1066
- Magna Carta 1215 - foundation of rights
- Black Death 1348 - major social change

**Tudor Era (1485-1603):**
- Henry VIII - Church of England created
- Elizabeth I - Renaissance, Shakespeare, exploration

**British Empire (1600s-1900s):**
- Colonization of Americas, Africa, Asia, Oceania
- Industrial Revolution (1760-1840)
- "The sun never sets on the British Empire"

**20th Century:**
- World Wars I and II
- Decolonization
- Welfare state established
- European Union membership (1973-2020)

**21st Century:**
- Brexit (2016 referendum, 2020 exit)
- Multicultural society
- Global financial center`,
    },
    {
      id: 'engelsk-vg1-7-1-def-2',
      type: 'definition',
      title: 'British Culture and Identity',
      content: `**Cultural Icons:**
- Royal Family - monarchy as national symbol
- BBC - public broadcasting, global influence
- NHS - National Health Service, free healthcare
- Premier League - football as national passion
- Tea culture - afternoon tea tradition

**British Values (often cited):**
- Queuing etiquette
- Politeness and understatement
- Dry humor and sarcasm
- Fair play
- Individual liberty

**Multiculturalism:**
- Post-WWII immigration: Caribbean, South Asia
- 14% ethnic minority population
- Cultural fusion in food, music, arts
- Ongoing debates about identity and integration

**Class System:**
- Historical: Upper, middle, working class
- Still influences education, accent, opportunity
- Less rigid but still present`,
    },
    {
      id: 'engelsk-vg1-7-1-example-1',
      type: 'example',
      title: 'Example: Understanding Brexit',
      problem: `Hva var Brexit, og hvorfor er det viktig a forsta?`,
      solution: `**What Was Brexit?**
Brexit = "British Exit" from the European Union

**Timeline:**
- 2016: Referendum - 52% voted to leave, 48% to remain
- 2020: UK officially left the EU
- Ongoing: Trade deals, border issues, economic impacts

**Why People Voted Leave:**
- Immigration control
- Sovereignty ("Take back control")
- Opposition to EU regulations
- National identity

**Why People Voted Remain:**
- Economic stability
- Free movement of people
- International cooperation
- Peace in Europe

**Impact:**
- Trade barriers with EU
- Northern Ireland border issues
- Changes to freedom of movement
- Economic uncertainty
- Political divisions

**Why Understanding Brexit Matters:**
- Largest constitutional change in modern UK history
- Reveals tensions: globalization vs. nationalism
- Impacts UK-EU and UK-Norway relations
- Shows how democracies handle complex decisions
- Ongoing effects on economy, culture, politics

**Key Vocabulary:**
- Referendum: a direct vote on a specific question
- Sovereignty: independent authority/self-governance
- Single market: free trade zone without barriers`,
    },
    {
      id: 'engelsk-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match the country with its capital:',
        subTasks: [
          {
            label: 'a',
            task: 'Scotland',
            solution: 'Edinburgh',
            multipleChoiceOptions: ['Edinburgh', 'Cardiff', 'Belfast', 'London'],
          },
          {
            label: 'b',
            task: 'Wales',
            solution: 'Cardiff',
            multipleChoiceOptions: ['Cardiff', 'Edinburgh', 'Belfast', 'Dublin'],
          },
          {
            label: 'c',
            task: 'Northern Ireland',
            solution: 'Belfast',
            multipleChoiceOptions: ['Belfast', 'Dublin', 'Cardiff', 'Edinburgh'],
          },
        ],
        solution: 'a) Edinburgh, b) Cardiff, c) Belfast',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Place these historical events in chronological order (1 = earliest):',
        subTasks: [
          {
            label: 'Events',
            task: 'A) Industrial Revolution\nB) Norman Conquest\nC) Brexit referendum\nD) World War II\nE) Magna Carta',
            solution: '1) B (1066), 2) E (1215), 3) A (1760-1840), 4) D (1939-1945), 5) C (2016)',
          },
        ],
        solution: 'B, E, A, D, C',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'True or False - explain your answer:',
        subTasks: [
          {
            label: 'a',
            task: '"The UK is the same as England."',
            solution: 'False. The UK includes England, Scotland, Wales, and Northern Ireland.',
          },
          {
            label: 'b',
            task: '"The British Empire was the largest empire in history."',
            solution: 'True. At its height, it covered about 25% of the world\'s land surface.',
          },
          {
            label: 'c',
            task: '"The UK is still part of the European Union."',
            solution: 'False. The UK left the EU in 2020 (Brexit).',
          },
        ],
        solution: 'a) False, b) True, c) False',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Research task: Choose one aspect of British culture and write a short report (200-250 words). Options include:',
        hints: [
          'The British monarchy',
          'Football culture in England',
          'British music (Beatles, punk, grime)',
          'The NHS and healthcare',
          'Multicultural Britain',
        ],
        solution: 'Report should show research, understanding of context, and personal reflection.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Compare and contrast: How is the UK different from Norway? Consider:',
        subTasks: [
          {
            label: 'a',
            task: 'Political system',
            solution: 'UK: Constitutional monarchy with PM. Norway: Constitutional monarchy with PM. Similar but UK has House of Lords.',
          },
          {
            label: 'b',
            task: 'Relationship to EU',
            solution: 'UK: Left EU in 2020. Norway: Not a member but part of EEA.',
          },
          {
            label: 'c',
            task: 'Cultural diversity',
            solution: 'UK: Very diverse, major immigrant populations. Norway: Increasingly diverse but historically more homogeneous.',
          },
        ],
        solution: 'Comparison should identify specific similarities and differences with examples.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Discussion/Essay: "The British Empire\'s legacy is still felt today." Do you agree? Write 300-400 words discussing both positive and negative aspects of this legacy.',
        hints: [
          'Consider language spread (English as global language)',
          'Consider economic impacts (trade, wealth distribution)',
          'Consider cultural impacts (cricket, education systems)',
          'Consider ongoing issues (colonialism\'s effects, reparations debate)',
        ],
        solution: 'Essay should present balanced view with specific examples and personal conclusion.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Culture and Society in the USA
// ============================================================================

export const CHAPTER_ENGELSK_VG1_8: TextbookChapter = {
  id: 'engelsk-vg1-8',
  courseId: 'engelsk-vg1',
  chapterNumber: '8',
  title: 'Culture and Society in the USA',
  description: 'Utforsk amerikansk kultur, historie og samfunn.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og reflektere over kulturelle forhold i USA',
    'forstå amerikansksamfunnet i en historisk og nåtidig kontekst',
  ],
  content: [
    {
      id: 'engelsk-vg1-8-1-intro',
      type: 'text',
      content: `## Understanding the United States

USA er verdens mest innflytelsesrike supermakt og har formet global kultur, politikk og okonomi i over et arhundre. A forsta amerikansk samfunn gir innsikt i mange av dagens globale utfordringer og muligheter.

**Basic Facts:**
- Population: ~330 million (3rd most populous)
- 50 states + Washington D.C. (capital)
- Federal republic with presidential system
- World's largest economy
- Most ethnically diverse nation

**The American Dream:**
The belief that anyone, regardless of background, can achieve success through hard work. This ideal has shaped American identity but is increasingly questioned.`,
    },
    {
      id: 'engelsk-vg1-8-1-def-1',
      type: 'definition',
      title: 'Historical Overview',
      content: `**Colonial Period (1607-1776):**
- British colonies established
- Slavery introduced (1619)
- Conflict with Native Americans

**Independence & Early Republic (1776-1865):**
- Declaration of Independence (1776)
- Constitution (1787) - "We the People"
- Westward expansion
- Civil War (1861-1865) - slavery abolished

**Industrial Era & World Power (1865-1945):**
- Industrialization
- Immigration waves
- World Wars - US becomes superpower

**Cold War & Civil Rights (1945-1991):**
- Nuclear rivalry with Soviet Union
- Civil Rights Movement (1950s-60s)
- MLK, Rosa Parks, desegregation
- Vietnam War protests

**Modern Era (1991-present):**
- Only superpower
- 9/11 and War on Terror
- Economic crises
- Political polarization
- Black Lives Matter movement`,
    },
    {
      id: 'engelsk-vg1-8-1-def-2',
      type: 'definition',
      title: 'American Society Today',
      content: `**Political System:**
- Two-party system: Democrats (liberal) vs. Republicans (conservative)
- President elected every 4 years via Electoral College
- Congress: Senate (100) + House of Representatives (435)
- Supreme Court - 9 justices, lifetime appointments

**Social Issues:**
- Gun control debate (2nd Amendment rights)
- Healthcare (no universal coverage)
- Immigration policy
- Racial inequality and police brutality
- Climate change response

**Cultural Diversity:**
- "Melting pot" vs. "salad bowl"
- Hispanic/Latino largest minority (~19%)
- African American (~13%)
- Asian American (~6%)
- Regional differences: South, Northeast, Midwest, West

**Cultural Exports:**
- Hollywood and entertainment
- Music: jazz, rock, hip-hop
- Fast food and brands
- Social media platforms
- Tech innovation (Silicon Valley)`,
    },
    {
      id: 'engelsk-vg1-8-1-example-1',
      type: 'example',
      title: 'Example: Understanding American Political Division',
      problem: `Hvorfor er USA sa politisk polarisert, og hvordan pavirker dette samfunnet?`,
      solution: `**The Current Political Climate:**

Americans are more divided along political lines than at any point since the Civil War. But why?

**Historical Factors:**
- Two-party system creates binary choices
- Electoral College can make "winner take all"
- Gerrymandering creates safe districts
- Media landscape has fragmented

**Contributing Factors:**
1. **Media ecosystems:** Fox News vs. MSNBC, social media bubbles
2. **Economic inequality:** Growing gap between rich and poor
3. **Cultural wars:** Abortion, LGBTQ+ rights, religion
4. **Geographic sorting:** Urban/rural divide
5. **Identity politics:** Race, gender, religion as political markers

**Effects on Society:**
- Difficulty passing legislation
- Distrust in institutions
- Family/friend relationships strained
- Violence at protests
- Challenges to democratic norms

**Example - Gun Control:**
- After mass shootings, debate intensifies
- Democrats: Support stricter regulations
- Republicans: Defend 2nd Amendment rights
- Result: Limited federal action despite public support for some measures

**Key Vocabulary:**
- Polarization: Division into two opposing groups
- Gerrymandering: Manipulating district boundaries
- Bipartisan: Involving both parties
- Gridlock: When government can't act due to disagreement`,
    },
    {
      id: 'engelsk-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match the historical event with its significance:',
        subTasks: [
          {
            label: 'a',
            task: 'Declaration of Independence (1776)',
            solution: 'Established American independence and founding principles',
            multipleChoiceOptions: ['Established American independence', 'Ended slavery', 'Gave women voting rights', 'Started Civil Rights Movement'],
          },
          {
            label: 'b',
            task: 'Civil War (1861-1865)',
            solution: 'Ended slavery and preserved the Union',
            multipleChoiceOptions: ['Ended slavery', 'Established independence', 'Started immigration', 'Created Constitution'],
          },
          {
            label: 'c',
            task: 'Civil Rights Act (1964)',
            solution: 'Outlawed discrimination based on race, color, religion, sex, or national origin',
            multipleChoiceOptions: ['Outlawed discrimination', 'Ended Cold War', 'Started World War II', 'Established voting rights'],
          },
        ],
        solution: 'a) Established independence, b) Ended slavery, c) Outlawed discrimination',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'True or False - explain your answer:',
        subTasks: [
          {
            label: 'a',
            task: '"The USA has always been a democracy where everyone could vote."',
            solution: 'False. Originally only white male property owners could vote. Women gained voting rights in 1920, and full voting rights for African Americans weren\'t protected until 1965.',
          },
          {
            label: 'b',
            task: '"The American Dream means everyone in America is wealthy."',
            solution: 'False. The American Dream is the BELIEF that success is possible through hard work, not a guarantee. Many people face barriers to achieving it.',
          },
          {
            label: 'c',
            task: '"The USA has universal healthcare like Norway."',
            solution: 'False. The USA does not have universal healthcare. Medical care is largely tied to employment or private insurance, though programs like Medicare (elderly) and Medicaid (low-income) exist.',
          },
        ],
        solution: 'All statements are False.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare the political systems of the USA and Norway:',
        subTasks: [
          {
            label: 'a',
            task: 'How is the head of government chosen?',
            solution: 'USA: President elected by Electoral College every 4 years. Norway: Prime Minister chosen by Parliament (Storting) based on elections.',
          },
          {
            label: 'b',
            task: 'How many major parties are there?',
            solution: 'USA: Two dominant parties. Norway: Multiple parties (multi-party system).',
          },
          {
            label: 'c',
            task: 'Which system do you think better represents diverse viewpoints? Why?',
            solution: 'Open answer. Should consider coalition governments, representation, and voter choice.',
          },
        ],
        solution: 'Comparison should show understanding of both systems.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Research task: Choose one American social movement and write a report (200-250 words). Options:',
        hints: [
          'Civil Rights Movement (1950s-60s)',
          'Women\'s Suffrage Movement',
          'Labor Movement',
          'Black Lives Matter',
          'LGBTQ+ Rights Movement',
        ],
        solution: 'Report should cover history, key figures, achievements, and ongoing relevance.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyze American cultural influence: How has American culture affected Norwegian society? Give specific examples in the following areas:',
        subTasks: [
          {
            label: 'a',
            task: 'Entertainment (movies, TV, music)',
            solution: 'Examples: Hollywood dominance, streaming services, American music genres',
          },
          {
            label: 'b',
            task: 'Food and brands',
            solution: 'Examples: Fast food chains, Coca-Cola, coffee culture',
          },
          {
            label: 'c',
            task: 'Language',
            solution: 'Examples: English loanwords, American spelling/pronunciation preferences',
          },
          {
            label: 'd',
            task: 'Technology',
            solution: 'Examples: Social media platforms, tech companies, innovation culture',
          },
        ],
        solution: 'Analysis should identify specific examples and reflect on this influence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Essay: "Is the American Dream still achievable?" Write 300-400 words discussing this question.',
        hints: [
          'Define what the American Dream means',
          'Consider evidence for and against its achievability',
          'Think about factors like economic mobility, education, race, and opportunity',
          'Include examples and conclude with your own view',
        ],
        solution: 'Essay should show understanding of the concept, present balanced evidence, and offer personal conclusion.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Indigenous Peoples in English-speaking Countries
// ============================================================================

export const CHAPTER_ENGELSK_VG1_9: TextbookChapter = {
  id: 'engelsk-vg1-9',
  courseId: 'engelsk-vg1',
  chapterNumber: '9',
  title: 'Indigenous Peoples in English-speaking Countries',
  description: 'Laer om urfolk i engelskspraklige land - historie, kultur og samtidige utfordringer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og reflektere over urfolks kultur og situasjon i engelskspraklige land',
    'forsta historiske og samtidige utfordringer for urfolk',
  ],
  content: [
    {
      id: 'engelsk-vg1-9-1-intro',
      type: 'text',
      content: `## Indigenous Peoples: Past and Present

Urfolk har bodd i disse landene i tusenvis av ar for europeere ankom. Deres historier er preget av kolonisering, motstand og overlevelelse. I dag kjemper urfolk for rettigheter, anerkjennelse og bevaring av kultur.

**Indigenous Peoples in English-speaking Countries:**
- **USA:** Native Americans / American Indians (574 federally recognized tribes)
- **Canada:** First Nations, Inuit, Metis
- **Australia:** Aboriginal and Torres Strait Islander peoples
- **New Zealand:** Maori
- **UK:** No indigenous peoples in same sense, but Celtic peoples pre-date Anglo-Saxons

**Key Terms:**
- **Indigenous:** Originating naturally in a place; native peoples
- **Colonization:** Taking control of an area and its people
- **Assimilation:** Forcing minority culture to adopt majority culture
- **Sovereignty:** Self-governance and independence`,
    },
    {
      id: 'engelsk-vg1-9-1-def-1',
      type: 'definition',
      title: 'Historical Impact of Colonization',
      content: `**Common Patterns Across Countries:**

**Dispossession:**
- Land taken through treaties (often broken) or force
- Reservations/reserves with limited resources
- Sacred sites destroyed or restricted

**Cultural Destruction:**
- Languages banned
- Boarding schools/residential schools
- Children removed from families
- Religious practices forbidden

**Population Decline:**
- Diseases (smallpox, measles)
- Warfare and massacre
- Starvation from land loss
- Example: Native American population fell from 10+ million to 250,000

**Australia - Stolen Generations:**
- Aboriginal children forcibly removed (1910-1970)
- Placed with white families or institutions
- Aimed to "breed out" indigenous culture
- Government apology in 2008

**Canada - Residential Schools:**
- 150,000+ children taken
- Abuse widespread
- Thousands died
- Truth and Reconciliation Commission (2008-2015)

**USA - Indian Boarding Schools:**
- "Kill the Indian, save the man"
- Forced English, Christianity, Western dress
- Similar trauma patterns`,
    },
    {
      id: 'engelsk-vg1-9-1-def-2',
      type: 'definition',
      title: 'Indigenous Cultures and Contemporary Issues',
      content: `**Cultural Elements (varied by group):**
- Oral traditions and storytelling
- Connection to land and nature
- Spiritual practices and ceremonies
- Art forms (totem poles, dot painting, carving)
- Communal decision-making

**Contemporary Challenges:**
- Higher rates of poverty
- Health disparities (lower life expectancy)
- Educational gaps
- Over-representation in justice system
- Loss of languages (many endangered)
- Climate change affecting traditional lands

**Rights and Recognition:**
- UN Declaration on Rights of Indigenous Peoples (2007)
- Land rights movements
- Truth and reconciliation processes
- Cultural revitalization efforts
- Political representation increasing

**Success Stories:**
- Maori language revival in New Zealand
- Native American casino economies
- Indigenous artists gaining recognition
- Land back movements
- Environmental activism (Standing Rock, etc.)`,
    },
    {
      id: 'engelsk-vg1-9-1-example-1',
      type: 'example',
      title: 'Example: The Maori of New Zealand',
      problem: `Beskriv maorienes situasjon og hvordan New Zealand har arbeidet med forsoning.`,
      solution: `**The Maori - A Closer Look:**

**History:**
- Arrived in New Zealand ~1300 AD
- Complex society with tribes (iwi), language, and culture
- Treaty of Waitangi (1840) - agreement with British
- Treaty was interpreted differently by each side
- Land confiscation, warfare, marginalization followed

**The Treaty of Waitangi:**
- English version: Maori gave sovereignty to Britain
- Maori version: Maori retained authority over their affairs
- This mistranslation caused lasting conflict

**Contemporary Maori:**
- ~17% of New Zealand population
- Maori is official language (Te Reo)
- Maori taught in schools, TV channels, signage
- Waitangi Tribunal addresses historical grievances
- Cultural renaissance since 1970s

**Reconciliation Efforts:**
- Treaty settlements (land, money, apologies)
- Maori representation in Parliament
- Cultural integration (haka at events, place names)
- Ongoing challenges with health, education gaps

**Comparison with Other Countries:**
New Zealand is often seen as more progressive in indigenous relations, though inequalities persist. The Treaty provides a legal basis for claims that other countries lack.

**Key Point:**
Reconciliation is an ongoing process, not a single event. It requires acknowledging history, addressing present inequalities, and supporting cultural survival.`,
    },
    {
      id: 'engelsk-vg1-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match the indigenous group with the correct country:',
        subTasks: [
          {
            label: 'a',
            task: 'Maori',
            solution: 'New Zealand',
            multipleChoiceOptions: ['New Zealand', 'Australia', 'USA', 'Canada'],
          },
          {
            label: 'b',
            task: 'Inuit',
            solution: 'Canada (also Alaska/Greenland)',
            multipleChoiceOptions: ['Canada', 'New Zealand', 'Australia', 'USA'],
          },
          {
            label: 'c',
            task: 'Aboriginal peoples',
            solution: 'Australia',
            multipleChoiceOptions: ['Australia', 'Canada', 'New Zealand', 'USA'],
          },
          {
            label: 'd',
            task: 'Cherokee, Navajo, Sioux',
            solution: 'USA',
            multipleChoiceOptions: ['USA', 'Canada', 'Australia', 'New Zealand'],
          },
        ],
        solution: 'a) New Zealand, b) Canada, c) Australia, d) USA',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Define and explain these terms in your own words:',
        subTasks: [
          {
            label: 'a',
            task: 'Assimilation',
            solution: 'When a minority group is forced or pressured to adopt the culture, language, and customs of the majority group.',
          },
          {
            label: 'b',
            task: 'Stolen Generations',
            solution: 'Aboriginal children in Australia who were forcibly removed from their families by the government to be raised in white institutions or families.',
          },
          {
            label: 'c',
            task: 'Reconciliation',
            solution: 'The process of acknowledging past wrongs, seeking forgiveness, and working toward better relationships between indigenous and non-indigenous peoples.',
          },
        ],
        solution: 'Definitions should show understanding of historical and cultural context.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare indigenous peoples in English-speaking countries with the Sami in Norway:',
        subTasks: [
          {
            label: 'a',
            task: 'What historical experiences do they share?',
            solution: 'Colonization, forced assimilation, language suppression, land dispossession, boarding schools (fornorskingspolitikk)',
          },
          {
            label: 'b',
            task: 'What rights and recognition do the Sami have in Norway today?',
            solution: 'Sametinget (Sami Parliament), recognized minority, language rights, cultural protections',
          },
          {
            label: 'c',
            task: 'What challenges remain for the Sami?',
            solution: 'Climate change affecting reindeer herding, wind farm conflicts, language preservation, representation',
          },
        ],
        solution: 'Comparison should show understanding of both Norwegian and international indigenous issues.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Research task: Choose ONE indigenous group and create a fact sheet including:',
        subTasks: [
          {
            label: 'a',
            task: 'Traditional territory and way of life',
            solution: 'Geographic location, traditional practices, social organization',
          },
          {
            label: 'b',
            task: 'Impact of colonization',
            solution: 'Key events, population changes, cultural losses',
          },
          {
            label: 'c',
            task: 'Current situation and achievements',
            solution: 'Population today, rights, cultural revival, notable figures',
          },
          {
            label: 'd',
            task: 'One cultural element you find interesting',
            solution: 'Art, language, ceremony, tradition',
          },
        ],
        solution: 'Fact sheet should be informative and show respectful engagement with the topic.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Discussion: Read this statement and prepare your response.',
        subTasks: [
          {
            label: 'Statement',
            task: '"We shouldn\'t focus on the past. What happened to indigenous peoples was terrible, but we need to move forward, not keep apologizing."',
            solution: 'Response should engage with the complexity of this issue.',
          },
          {
            label: 'a',
            task: 'What are the arguments for this view?',
            solution: 'Focus on present/future, avoid guilt, practical considerations',
          },
          {
            label: 'b',
            task: 'What are the arguments against this view?',
            solution: 'Ongoing effects of colonization, importance of acknowledgment, reparations and justice',
          },
          {
            label: 'c',
            task: 'What is your personal view?',
            solution: 'Should show critical thinking and nuance',
          },
        ],
        solution: 'Good responses acknowledge multiple perspectives while forming a reasoned personal view.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Essay: "What can Norway learn from how other countries have handled reconciliation with indigenous peoples?" Write 300-400 words.',
        hints: [
          'Compare approaches in Canada, Australia, New Zealand',
          'Consider what Norway has done (Sami apology, Sametinget)',
          'What could be improved?',
          'Be specific with examples',
        ],
        solution: 'Essay should demonstrate knowledge of both Norwegian and international indigenous issues.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Academic Writing and Exam Preparation
// ============================================================================

export const CHAPTER_ENGELSK_VG1_10: TextbookChapter = {
  id: 'engelsk-vg1-10',
  courseId: 'engelsk-vg1',
  chapterNumber: '10',
  title: 'Academic Writing and Exam Preparation',
  description: 'Forbered deg til eksamen med fokus pa akademisk skriving og eksamensstrategi.',
  estimatedMinutes: 60,
  competenceGoals: [
    'skrive sammenhengende tekster i ulike sjangre',
    'bruke hensiktsmessige skrivestrategier tilpasset formal',
  ],
  content: [
    {
      id: 'engelsk-vg1-10-1-intro',
      type: 'text',
      content: `## Preparing for Your English Exam

Eksamen i engelsk tester dine samlede ferdigheter i spraket - lesing, skriving, og evne til a reflektere over temaer fra liereplanen. God forberedelse handler om a forstå oppgavetypene og utvikle effektive strategier.

**What the Exam Tests:**
- Reading comprehension and text analysis
- Written production (essays, articles, short texts)
- Use of English (vocabulary, grammar, structure)
- Knowledge of topics from the curriculum

**Common Task Types:**
1. **Long text:** Essay, article, report, speech (400-600 words)
2. **Short text:** Summary, email, review, etc. (150-250 words)
3. **Text-based tasks:** Answer questions about attached texts
4. **Creative writing:** Short story, personal narrative`,
    },
    {
      id: 'engelsk-vg1-10-1-def-1',
      type: 'definition',
      title: 'Text Types for the Exam',
      content: `**Essay (Argumentative/Discursive):**
- Takes and defends a position
- Uses evidence and reasoning
- Formal language
- Structure: Intro → Body → Conclusion

**Article:**
- Written for newspaper/website
- Engaging headline and lead
- Can be more personal than essay
- Informative with some opinion

**Report:**
- Presents findings objectively
- Uses headings/subheadings
- Formal and factual
- May include recommendations

**Speech:**
- Written to be spoken
- Direct address to audience
- Rhetorical devices (repetition, questions)
- Clear opening and closing

**Personal Narrative:**
- First person perspective
- Descriptive language
- Shows reflection/learning
- Story structure

**Review:**
- Evaluates book/film/event
- Summary + opinion
- Recommendation
- Engaging but informative`,
    },
    {
      id: 'engelsk-vg1-10-1-def-2',
      type: 'definition',
      title: 'Assessment Criteria',
      content: `**Content and Subject Matter:**
- Relevance to task/prompt
- Depth of reflection
- Use of examples and evidence
- Understanding of topics

**Structure:**
- Clear introduction and conclusion
- Logical organization
- Paragraph structure
- Coherence and flow

**Language:**
- Vocabulary range and accuracy
- Grammar and sentence structure
- Appropriate register/formality
- Spelling and punctuation

**Common Mistakes to Avoid:**
- Not answering the actual question
- Weak/missing thesis statement
- List-like body paragraphs (no analysis)
- Poor transitions
- Informal language in formal texts
- Repetitive vocabulary
- Run-on sentences
- Wrong word forms`,
    },
    {
      id: 'engelsk-vg1-10-1-example-1',
      type: 'example',
      title: 'Example: Analyzing an Exam Task',
      problem: `Hvordan analyserer du en eksamensoppgave for a sikre at du svarer riktig?`,
      solution: `**Sample Task:**
"Social media has become an essential part of young people's lives. Write an article for a youth magazine where you discuss both the positive and negative effects of social media. Based on your discussion, give advice to young people about how to use social media responsibly."

**Step 1: Identify Key Words**
- "Article" → Text type (not essay!)
- "Youth magazine" → Audience (young people, semi-formal)
- "Discuss both positive and negative" → Balanced, not one-sided
- "Give advice" → Must include recommendations

**Step 2: Plan Your Response**

**Opening:** Engaging hook about social media use
**Section 1:** Positive effects (examples: connection, information, creativity)
**Section 2:** Negative effects (examples: mental health, addiction, misinformation)
**Section 3:** Advice for responsible use
**Closing:** Final thought/call to action

**Step 3: Check Against Criteria**
- Content: Am I discussing BOTH sides? Am I giving advice?
- Structure: Article format? Engaging headline?
- Language: Appropriate for young readers? Varied vocabulary?
- Length: Meeting word count requirements?

**Common Pitfalls:**
- Writing only about negatives (one-sided)
- Forgetting to give advice (incomplete answer)
- Using essay format instead of article
- Being too formal for a youth magazine`,
    },
    {
      id: 'engelsk-vg1-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the text type required for each task:',
        subTasks: [
          {
            label: 'a',
            task: '"Write a text for your school newspaper about the importance of mental health awareness."',
            solution: 'Article',
            multipleChoiceOptions: ['Article', 'Essay', 'Report', 'Speech'],
          },
          {
            label: 'b',
            task: '"Write a text where you discuss whether technology makes us more or less connected. State your position and support it with arguments."',
            solution: 'Essay (argumentative)',
            multipleChoiceOptions: ['Essay', 'Article', 'Report', 'Review'],
          },
          {
            label: 'c',
            task: '"Imagine you are the student council president. Write a text you would present at a school assembly about reducing plastic waste."',
            solution: 'Speech',
            multipleChoiceOptions: ['Speech', 'Essay', 'Article', 'Report'],
          },
        ],
        solution: 'a) Article, b) Essay, c) Speech',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze this exam task by identifying key words and requirements:',
        subTasks: [
          {
            label: 'Task',
            task: '"Immigration has shaped societies in English-speaking countries. Write an essay where you explore how immigration has influenced culture and society in ONE English-speaking country. Reflect on both challenges and opportunities."',
            solution: 'See analysis below.',
          },
          {
            label: 'a',
            task: 'What text type is required?',
            solution: 'Essay (expository/reflective)',
          },
          {
            label: 'b',
            task: 'What must you include?',
            solution: 'ONE country, cultural/social influence, BOTH challenges AND opportunities',
          },
          {
            label: 'c',
            task: 'What would make this answer incomplete?',
            solution: 'Only discussing challenges OR opportunities (not both), discussing multiple countries, not being specific about cultural/social influence',
          },
        ],
        solution: 'Task analysis ensures you address all requirements.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Improve these weak sentences with more sophisticated vocabulary and structure:',
        subTasks: [
          {
            label: 'a',
            task: '"Social media is very bad for young people."',
            solution: '"Social media can have detrimental effects on young people\'s mental health and social development."',
          },
          {
            label: 'b',
            task: '"Lots of people think climate change is important."',
            solution: '"Climate change has emerged as one of the most pressing concerns for the global community."',
          },
          {
            label: 'c',
            task: '"The UK and USA are different in many ways."',
            solution: '"The UK and USA exhibit significant cultural, political, and social differences despite their shared language."',
          },
        ],
        hints: ['Use more precise vocabulary', 'Add specific details', 'Vary sentence structure'],
        solution: 'Strong academic writing uses precise vocabulary and avoids vague expressions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Time management practice: You have 5 hours for the exam. Plan how you would use this time for a typical exam with two writing tasks (long text 400-600 words, short text 150-250 words) plus text-based questions.',
        subTasks: [
          {
            label: 'a',
            task: 'How much time for reading the tasks and texts?',
            solution: 'Suggested: 20-30 minutes',
          },
          {
            label: 'b',
            task: 'How much time for the long text?',
            solution: 'Suggested: 2-2.5 hours (including planning and revision)',
          },
          {
            label: 'c',
            task: 'How much time for the short text?',
            solution: 'Suggested: 45-60 minutes',
          },
          {
            label: 'd',
            task: 'How much time for text-based questions?',
            solution: 'Suggested: 1-1.5 hours',
          },
          {
            label: 'e',
            task: 'How much time for final review?',
            solution: 'Suggested: 15-20 minutes',
          },
        ],
        solution: 'Time management is crucial for exam success.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Practice exam: Write an article (400-500 words) on ONE of these topics:',
        subTasks: [
          {
            label: 'Options',
            task: '1) "The Role of English in Norway Today"\n2) "What Young People Can Learn from History"\n3) "Digital Communication: Connecting or Isolating Us?"',
            solution: 'Choose one topic and write a complete article.',
          },
        ],
        hints: [
          'Analyze the task carefully first',
          'Plan before writing (5-10 minutes)',
          'Include an engaging headline',
          'Use article structure: lead, body, conclusion',
          'Time yourself (aim for 60-75 minutes)',
        ],
        solution: 'Article evaluated on content, structure, language, and relevance.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Self-assessment checklist: Use this checklist to evaluate your own writing OR exchange texts with a classmate.',
        subTasks: [
          {
            label: 'Content',
            task: 'Does the text address all parts of the task? Is there depth and reflection?',
            solution: 'Check each requirement from the task',
          },
          {
            label: 'Structure',
            task: 'Is there a clear introduction, body, and conclusion? Are paragraphs well-organized?',
            solution: 'Each paragraph should have one main idea',
          },
          {
            label: 'Language',
            task: 'Is vocabulary varied and appropriate? Are there grammar or spelling errors?',
            solution: 'Look for repetition and informal language',
          },
          {
            label: 'Format',
            task: 'Does it follow the correct text type conventions?',
            solution: 'Article vs. essay vs. speech, etc.',
          },
          {
            label: 'Improvements',
            task: 'List 2-3 specific things to improve for next time.',
            solution: 'Be specific: "Use more transition words" not just "Write better"',
          },
        ],
        solution: 'Regular self-assessment helps you identify areas for improvement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Final exam simulation: Complete a full practice exam under timed conditions (5 hours). Use previous exam papers or ask your teacher for practice materials.',
        hints: [
          'Create exam conditions: no phone, quiet space, timed',
          'Read all tasks before starting',
          'Manage your time according to your plan',
          'Leave time for review at the end',
          'After finishing, evaluate your performance',
        ],
        solution: 'Full practice exams are the best preparation for the real thing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const ENGELSK_VG1_CHAPTERS = [
  CHAPTER_ENGELSK_VG1_1,
  CHAPTER_ENGELSK_VG1_2,
  CHAPTER_ENGELSK_VG1_3,
  CHAPTER_ENGELSK_VG1_4,
  CHAPTER_ENGELSK_VG1_5,
  CHAPTER_ENGELSK_VG1_6,
  CHAPTER_ENGELSK_VG1_7,
  CHAPTER_ENGELSK_VG1_8,
  CHAPTER_ENGELSK_VG1_9,
  CHAPTER_ENGELSK_VG1_10,
];
