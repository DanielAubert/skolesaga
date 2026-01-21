/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Internasjonal engelsk (VG2/VG3 valgfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 1: English as a Global Language
// ============================================================================

export const CHAPTER_INT_ENGELSK_1: TextbookChapter = {
  id: 'int-engelsk-1',
  courseId: 'int-engelsk',
  chapterNumber: '1',
  title: 'English as a Global Language',
  description: 'Explore the history, spread, and current status of English as the world\'s lingua franca.',
  estimatedMinutes: 75,
  competenceGoals: [
    'analyze the position of English in the world and discuss the difference between English as a native language, English as a second language and English as a foreign language',
    'reflect on the role of English in international contexts',
  ],
  content: [
    {
      id: 'int-engelsk-1-intro',
      type: 'text',
      content: `## The Rise of Global English

English has become the most widely spoken language in human history. With approximately 1.5 billion speakers worldwide, it serves as the primary means of international communication in business, science, diplomacy, aviation, computing, and popular culture.

**Key Statistics:**
- **Native speakers:** Approximately 400 million
- **Second language speakers:** Over 750 million
- **Foreign language learners:** Over 1 billion

**Historical Factors:**
The global spread of English can be attributed to two main waves of expansion:

1. **British Colonial Expansion (17th-20th centuries)**
   - The British Empire at its height governed nearly a quarter of the world's land surface
   - English was established as the language of administration, education, and commerce
   - Legacy languages remain in former colonies like India, Nigeria, and Singapore

2. **American Global Influence (20th-21st centuries)**
   - Post-World War II economic dominance
   - Hollywood and American popular culture
   - The internet (originally developed in the USA)
   - American technology companies and brands`,
    },
    {
      id: 'int-engelsk-1-def-1',
      type: 'definition',
      title: 'Kachru\'s Three Circles Model',
      content: `**Braj Kachru's model** (1985) categorizes English speakers into three concentric circles:

**The Inner Circle:**
Countries where English is the native language
- United Kingdom, United States, Canada, Australia, New Zealand, Ireland
- Approximately 400 million speakers
- Traditional "norm-providing" countries

**The Outer Circle:**
Countries where English has official or special status due to colonial history
- India, Nigeria, Singapore, Philippines, Kenya, South Africa, Pakistan
- Approximately 750 million speakers
- "Norm-developing" varieties

**The Expanding Circle:**
Countries where English is learned as a foreign language
- Norway, Germany, China, Japan, Brazil, Russia
- Over 750 million learners
- "Norm-dependent" but increasingly influential

**Critique of the Model:**
- Boundaries are increasingly blurred
- Does not account for global mobility
- Suggests a hierarchy that may be outdated`,
    },
    {
      id: 'int-engelsk-1-def-2',
      type: 'definition',
      title: 'English as a Lingua Franca (ELF)',
      content: `**Definition:**
English as a Lingua Franca refers to the use of English for communication between speakers who do not share a first language.

**Key Characteristics of ELF:**
- **Functional focus:** Prioritizes successful communication over adherence to native-speaker norms
- **Flexible:** Adapts to the needs of its users
- **Dynamic:** Constantly evolving
- **Multilingual:** Speakers draw on multiple linguistic resources

**Common ELF Features:**
- Dropping third-person singular -s ("He work here")
- Interchangeable use of relative pronouns (who/which)
- Overuse of certain verbs (make, do, have, take)
- Regularization of irregular forms
- Code-switching and translanguaging

**Implications:**
- Native speaker norms may not be the ideal target
- Communication strategies become more important than "perfect" grammar
- Mutual accommodation is key`,
    },
    {
      id: 'int-engelsk-1-note-1',
      type: 'note',
      title: 'The Debate: Whose English?',
      content: `The dominance of English raises important questions:

**Linguistic Imperialism:**
- Does the spread of English threaten other languages?
- Do native speakers have an unfair advantage in international contexts?
- Is the promotion of English a form of cultural hegemony?

**Counter-arguments:**
- English belongs to everyone who uses it
- New Englishes are emerging worldwide
- English can be a neutral alternative to former colonial languages
- Multilingualism, not monolingualism, is the global norm

**Your perspective matters:**
As a Norwegian learning English, you are part of the Expanding Circle. Consider how your use of English differs from native speakers and how it might be similar to other ELF users.`,
    },
    {
      id: 'int-engelsk-1-example-1',
      type: 'example',
      title: 'Example: English in International Contexts',
      problem: `In what situations might a German businessperson and a Japanese engineer use English together?`,
      solution: `**Professional scenarios:**

1. **International Conference in Seoul**
   - Presenting research findings
   - Networking during coffee breaks
   - Reading presentation slides and abstracts

2. **Collaborative Project**
   - Video conferences and virtual meetings
   - Email correspondence
   - Technical documentation
   - Project management tools (Slack, Teams)

3. **Trade Fair in Dubai**
   - Product demonstrations
   - Contract negotiations
   - Informal socializing

**Linguistic strategies used:**
- Simplification of complex structures
- Repetition and paraphrasing for clarity
- Use of visual aids and demonstrations
- Tolerance of non-standard forms
- Focus on the message, not the medium

**Key insight:**
In these contexts, neither the German nor the Japanese speaker is trying to sound British or American. They are using English as a practical tool, developing their own effective communication strategies.`,
    },
    {
      id: 'int-engelsk-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Categorize the following countries into the correct circle of World Englishes:',
        subTasks: [
          {
            label: 'a',
            task: 'Malaysia',
            solution: 'Outer Circle - English has official status alongside Malay',
            multipleChoiceOptions: ['Outer Circle', 'Inner Circle', 'Expanding Circle'],
          },
          {
            label: 'b',
            task: 'Sweden',
            solution: 'Expanding Circle - English is widely spoken but as a foreign language',
            multipleChoiceOptions: ['Expanding Circle', 'Inner Circle', 'Outer Circle'],
          },
          {
            label: 'c',
            task: 'Jamaica',
            solution: 'Inner Circle - English is the official and native language',
            multipleChoiceOptions: ['Inner Circle', 'Outer Circle', 'Expanding Circle'],
          },
          {
            label: 'd',
            task: 'Tanzania',
            solution: 'Outer Circle - English is an official language alongside Swahili',
            multipleChoiceOptions: ['Outer Circle', 'Inner Circle', 'Expanding Circle'],
          },
        ],
        solution: 'a) Outer Circle, b) Expanding Circle, c) Inner Circle, d) Outer Circle',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'What factor was MOST significant in the spread of English during the 20th century?',
        multipleChoiceOptions: [
          'American cultural and economic dominance',
          'The invention of the printing press',
          'The Norman Conquest of England',
          'The spread of Christianity',
        ],
        solution: 'American cultural and economic dominance - especially through Hollywood, popular music, and later the internet - was the primary driver of English\'s global spread in the 20th century.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Which statement best describes English as a Lingua Franca (ELF)?',
        multipleChoiceOptions: [
          'English used for communication between speakers with different first languages',
          'The English spoken in France',
          'A simplified form of English used in airports',
          'The original Latin-influenced English',
        ],
        solution: 'ELF refers to English used as a common language between speakers who do not share a native language. It emphasizes communication success over native-speaker norms.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Discuss the following questions in writing (150-200 words):',
        subTasks: [
          {
            label: 'a',
            task: 'What advantages do native English speakers have in international contexts? Is this fair?',
            solution: 'Native speakers often communicate more fluently, express nuances more easily, and feel more confident in English. This can create inequalities in international business, academia, and diplomacy. Whether this is "fair" is debatable - some argue it reflects legitimate expertise while others see it as unfair advantage from historical circumstances.',
          },
          {
            label: 'b',
            task: 'How might the role of English change in the next 50 years?',
            solution: 'Possible developments include: increased recognition of non-native varieties, machine translation reducing the need for a lingua franca, other languages (Mandarin, Spanish) gaining prominence, or English becoming even more dominant. Climate migration and digital communication will likely shape language trends.',
          },
        ],
        hints: ['Consider both advantages and disadvantages', 'Use specific examples', 'Think about technology\'s role'],
        solution: 'A thoughtful response should acknowledge multiple perspectives and provide concrete examples.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Linguistic imperialism refers to:',
        multipleChoiceOptions: [
          'The dominance of one language (like English) potentially threatening other languages and cultures',
          'The study of ancient languages',
          'Teaching English in schools',
          'Translating documents into multiple languages',
        ],
        solution: 'Linguistic imperialism describes how the spread of dominant languages (particularly English) may marginalize or endanger other languages and impose cultural values on non-native speakers.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research task: Investigate the status of English in ONE of the following countries. Write a short report (200-300 words) covering: historical background, current status, attitudes toward English, and future prospects.',
        subTasks: [
          {
            label: 'a',
            task: 'Singapore',
            solution: 'Report should cover: British colonial history, English as one of four official languages, Singlish as a local variety, government Speak Good English campaigns, role of English in education and business.',
          },
          {
            label: 'b',
            task: 'Rwanda',
            solution: 'Report should cover: Belgian colonial history (French), switch to English as official language in 2008, reasons for the change (East African Community, post-genocide nation building), challenges in implementation.',
          },
          {
            label: 'c',
            task: 'The Netherlands',
            solution: 'Report should cover: High English proficiency despite Expanding Circle status, English in higher education, concerns about domain loss in Dutch, attitudes toward "Dunglish."',
          },
        ],
        hints: ['Use reliable sources', 'Consider both official policies and everyday usage', 'Include statistics if available'],
        solution: 'A good report will demonstrate understanding of the complex sociolinguistic factors affecting English in the chosen country.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2: Varieties of English
// ============================================================================

export const CHAPTER_INT_ENGELSK_2: TextbookChapter = {
  id: 'int-engelsk-2',
  courseId: 'int-engelsk',
  chapterNumber: '2',
  title: 'Varieties of English',
  description: 'Study the differences between British, American, Australian, Indian, and other English varieties.',
  estimatedMinutes: 80,
  competenceGoals: [
    'explore and reflect on diversity and variation in the English-speaking world',
    'discuss and reflect on the relationship between language, culture, and identity',
  ],
  content: [
    {
      id: 'int-engelsk-2-intro',
      type: 'text',
      content: `## World Englishes: Unity in Diversity

There is no single "correct" English. Instead, there are many Englishes, each with its own vocabulary, pronunciation, grammar patterns, and cultural context. Understanding these varieties enriches our ability to communicate with English speakers worldwide.

**Major National Varieties:**
- **British English (BrE):** The historical "mother tongue"
- **American English (AmE):** The most influential variety today
- **Australian English (AusE):** Distinctive accent and slang
- **Canadian English (CanE):** Blend of British and American features
- **Indian English (IndE):** South Asian variety with over 125 million speakers
- **South African English (SAfrE):** Influenced by Afrikaans and African languages
- **Irish English (IrE):** Celtic-influenced syntax and pronunciation
- **New Zealand English (NZE):** Distinctive vowel shifts
- **Singaporean English:** Mix of English with Chinese, Malay, and Tamil

**Why Varieties Develop:**
1. Geographic isolation
2. Contact with other languages
3. Historical settlement patterns
4. Social and cultural factors
5. Independent linguistic evolution`,
    },
    {
      id: 'int-engelsk-2-def-1',
      type: 'definition',
      title: 'British vs. American English: Key Differences',
      content: `**Vocabulary Differences:**

| British         | American        |
|-----------------|-----------------|
| flat            | apartment       |
| lift            | elevator        |
| biscuit         | cookie          |
| chemist         | drugstore       |
| lorry           | truck           |
| pavement        | sidewalk        |
| petrol          | gas/gasoline    |
| queue           | line            |
| rubbish         | trash/garbage   |
| trainers        | sneakers        |
| boot (car)      | trunk           |
| bonnet (car)    | hood            |
| aubergine       | eggplant        |
| courgette       | zucchini        |
| nappy           | diaper          |

**Spelling Differences:**
- -our vs -or: colour/color, favour/favor
- -re vs -er: centre/center, theatre/theater
- -ise vs -ize: organise/organize, realise/realize
- -ogue vs -og: dialogue/dialog, catalogue/catalog
- -ence vs -ense: defence/defense, licence/license

**Grammar Differences:**
- Collective nouns: "The team are playing" (BrE) vs "The team is playing" (AmE)
- Past participles: "I've got" (BrE) vs "I have/I've gotten" (AmE)
- Prepositions: "at the weekend" (BrE) vs "on the weekend" (AmE)
- Hospital: "in hospital" (BrE) vs "in the hospital" (AmE)`,
    },
    {
      id: 'int-engelsk-2-def-2',
      type: 'definition',
      title: 'Pronunciation: Accents of English',
      content: `**Received Pronunciation (RP) - British:**
- Also known as "BBC English" or "the Queen's English"
- Non-rhotic (r not pronounced after vowels: "car" = /kɑː/)
- Long "a" in words like "bath" and "dance"
- Spoken by only about 3% of British population
- Associated with education and prestige

**General American (GA):**
- Rhotic (r pronounced in all positions)
- Flat "a" in "bath" and "dance"
- "T-flapping" (writer/rider sound similar)
- "Cot-caught merger" in many areas

**Australian English:**
- Non-rhotic
- Distinctive vowel shifts (e.g., "day" sounds like "die")
- Rising intonation on statements
- Widespread use of diminutives (-ie/-y endings)

**Indian English:**
- Syllable-timed rhythm (compared to stress-timed BrE/AmE)
- Retroflex consonants
- "V" and "W" often interchanged
- Some speakers drop articles

**Scottish English:**
- Rhotic
- Rolled "r" sounds
- Monophthongs instead of diphthongs
- Glottal stops`,
    },
    {
      id: 'int-engelsk-2-note-1',
      type: 'note',
      title: 'Slang and Colloquialisms',
      content: `**Australian Slang:**
- G'day = Hello
- Arvo = Afternoon
- Brekkie = Breakfast
- Barbie = Barbecue
- Servo = Service station
- Mozzie = Mosquito
- Chook = Chicken
- Snag = Sausage
- Heaps = A lot

**British Slang:**
- Brilliant/Brill = Great
- Gutted = Disappointed
- Chuffed = Pleased
- Dodgy = Suspicious
- Knackered = Exhausted
- Rubbish = Nonsense
- Quid = Pound (£)

**American Slang:**
- Awesome = Great
- Bummed = Disappointed
- Stoked = Excited
- Sketchy = Suspicious
- Wiped = Exhausted
- Buck = Dollar ($)
- Y'all = You all (Southern)

**Indian English Expressions:**
- Prepone = Move to an earlier time
- Timepass = Passing time
- Do the needful = Do what is necessary
- What is your good name? = What is your name?`,
    },
    {
      id: 'int-engelsk-2-example-1',
      type: 'example',
      title: 'Example: The Same Situation in Different Varieties',
      problem: `How would you describe a car accident to the police in different varieties of English?`,
      solution: `**British English:**
"I was driving along the high street at about 20 miles per hour when a lorry reversed out of a car park. I had to brake sharply, and the car behind went into the back of me. My boot's completely crumpled, and the bonnet of the other car is damaged. We've exchanged details and I've got the lorry's number plate."

**American English:**
"I was driving down Main Street at about 20 miles per hour when a truck backed out of a parking lot. I had to brake hard, and the car behind rear-ended me. My trunk is completely smashed, and the hood of the other car is damaged. We've exchanged information and I got the truck's license plate number."

**Australian English:**
"I was going along the main road at about 30 ks when this truckie reversed out of the servo. Had to slam on the brakes, and the bloke behind me went up the back. My boot's had it, and his bonnet's dented. We've swapped details and I got the rego off the truck."

**Key Observations:**
- Same event, different vocabulary
- Cultural differences in measurement (miles vs "ks")
- Varying levels of formality
- Regional slang affects comprehensibility`,
    },
    {
      id: 'int-engelsk-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match the British English word with its American equivalent:',
        subTasks: [
          {
            label: 'a',
            task: 'Rubber (writing tool)',
            solution: 'Eraser',
            multipleChoiceOptions: ['Eraser', 'Tire', 'Rubber band', 'Pencil'],
          },
          {
            label: 'b',
            task: 'Fortnight',
            solution: 'Two weeks',
            multipleChoiceOptions: ['Two weeks', 'Castle', 'Night shift', 'Fourteen'],
          },
          {
            label: 'c',
            task: 'Full stop',
            solution: 'Period',
            multipleChoiceOptions: ['Period', 'Red light', 'Total halt', 'Comma'],
          },
          {
            label: 'd',
            task: 'Torch',
            solution: 'Flashlight',
            multipleChoiceOptions: ['Flashlight', 'Fire', 'Lighter', 'Lamp'],
          },
        ],
        solution: 'a) Eraser, b) Two weeks, c) Period, d) Flashlight',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Which spelling is British English?',
        subTasks: [
          {
            label: 'a',
            task: 'colour / color',
            solution: 'colour',
            multipleChoiceOptions: ['colour', 'color'],
          },
          {
            label: 'b',
            task: 'center / centre',
            solution: 'centre',
            multipleChoiceOptions: ['centre', 'center'],
          },
          {
            label: 'c',
            task: 'realize / realise',
            solution: 'realise',
            multipleChoiceOptions: ['realise', 'realize'],
          },
          {
            label: 'd',
            task: 'defense / defence',
            solution: 'defence',
            multipleChoiceOptions: ['defence', 'defense'],
          },
        ],
        solution: 'British spellings: colour, centre, realise, defence',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Identify which variety of English these slang terms belong to:',
        subTasks: [
          {
            label: 'a',
            task: '"Arvo" (meaning afternoon)',
            solution: 'Australian English',
            multipleChoiceOptions: ['Australian English', 'British English', 'American English', 'Indian English'],
          },
          {
            label: 'b',
            task: '"Prepone" (move to earlier time)',
            solution: 'Indian English',
            multipleChoiceOptions: ['Indian English', 'British English', 'American English', 'Australian English'],
          },
          {
            label: 'c',
            task: '"Knackered" (exhausted)',
            solution: 'British English',
            multipleChoiceOptions: ['British English', 'American English', 'Australian English', 'Irish English'],
          },
          {
            label: 'd',
            task: '"Y\'all" (you all)',
            solution: 'American English (Southern)',
            multipleChoiceOptions: ['American English (Southern)', 'British English', 'Australian English', 'Canadian English'],
          },
        ],
        solution: 'a) Australian, b) Indian, c) British, d) American (Southern)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Rewrite the following American English paragraph in British English:',
        hints: ['Change vocabulary', 'Adjust spelling', 'Note preposition changes'],
        subTasks: [
          {
            label: 'a',
            task: '"I went to the drugstore on the first floor of the apartment building to get some diapers. Then I took the elevator to my apartment, grabbed some cookies from the cabinet, and turned on the TV to watch a movie."',
            solution: '"I went to the chemist on the ground floor of the block of flats to get some nappies. Then I took the lift to my flat, grabbed some biscuits from the cupboard, and turned on the telly to watch a film."',
          },
        ],
        solution: 'drugstore→chemist, first floor→ground floor, apartment building→block of flats, diapers→nappies, elevator→lift, apartment→flat, cookies→biscuits, cabinet→cupboard, TV→telly, movie→film',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'What distinguishes Received Pronunciation (RP) from General American in terms of rhoticity?',
        multipleChoiceOptions: [
          'RP is non-rhotic (r not pronounced after vowels); GA is rhotic (r always pronounced)',
          'RP pronounces r more strongly than GA',
          'Both are non-rhotic',
          'Both are rhotic',
        ],
        solution: 'RP is non-rhotic, meaning the "r" is not pronounced after vowels (e.g., "car" = /kɑː/), while General American is rhotic, pronouncing the "r" in all positions (e.g., "car" = /kɑːr/).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Listening and analysis task: Find examples of three different English accents online (e.g., YouTube clips, podcasts, or films). For each accent, note:',
        subTasks: [
          {
            label: 'a',
            task: 'Which variety of English is it?',
            solution: 'Identify whether it is British, American, Australian, Indian, Irish, Scottish, or another variety.',
          },
          {
            label: 'b',
            task: 'What features make it distinctive? (pronunciation, vocabulary, rhythm)',
            solution: 'Note specific phonetic features (rhoticity, vowel sounds), distinctive words, and whether the rhythm is stress-timed or syllable-timed.',
          },
          {
            label: 'c',
            task: 'How easily could you understand it? Why?',
            solution: 'Reflect on your familiarity with the accent, speed of speech, use of slang, and clarity of articulation.',
          },
        ],
        hints: ['Good sources include interviews, films, and language learning channels', 'Try to find authentic speakers, not actors imitating accents', 'Consider both native and non-native varieties'],
        solution: 'A thorough analysis should demonstrate awareness of phonetic features, vocabulary differences, and factors affecting comprehension.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'Essay question: "Should schools teach one specific variety of English, or should they expose students to multiple varieties?" Discuss both perspectives and give your own view. (300-400 words)',
        hints: [
          'Consider practical arguments (standardization, testing)',
          'Consider cultural arguments (representation, identity)',
          'Think about global communication needs',
          'Draw on your own experience learning English',
        ],
        solution: 'A balanced essay should acknowledge the practical benefits of standardization while also recognizing the importance of linguistic diversity and the reality that students will encounter multiple varieties. Personal conclusions may vary.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3: Literature from the English-Speaking World
// ============================================================================

export const CHAPTER_INT_ENGELSK_3: TextbookChapter = {
  id: 'int-engelsk-3',
  courseId: 'int-engelsk',
  chapterNumber: '3',
  title: 'Literature from the English-Speaking World',
  description: 'Explore literary works from diverse English-speaking countries and cultures.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analyze and interpret literature from different English-speaking countries',
    'discuss and reflect on how texts are influenced by their cultural and historical context',
  ],
  content: [
    {
      id: 'int-engelsk-3-intro',
      type: 'text',
      content: `## World Literature in English

English-language literature extends far beyond the British and American canons. Writers from Africa, Asia, the Caribbean, and the Pacific have created rich literary traditions that reflect their unique experiences, histories, and cultures while contributing to the global conversation about what it means to be human.

**The Canon and Its Expansion:**
Traditional "English literature" focused on British writers (Shakespeare, Austen, Dickens) and later included American authors (Twain, Fitzgerald, Hemingway). Today, we recognize that powerful literature in English comes from everywhere.

**Major Literary Traditions:**

**Postcolonial Literature:**
- Emerged from former British colonies
- Often addresses themes of identity, belonging, and cultural conflict
- Key authors: Chinua Achebe, Salman Rushdie, V.S. Naipaul

**African Literature in English:**
- Nigeria: Chinua Achebe, Chimamanda Ngozi Adichie
- South Africa: Nadine Gordimer, J.M. Coetzee
- Kenya: Ngugi wa Thiong'o
- Zimbabwe: NoViolet Bulawayo

**South Asian Literature:**
- India: Arundhati Roy, Jhumpa Lahiri, R.K. Narayan
- Pakistan: Mohsin Hamid, Kamila Shamsie
- Sri Lanka: Michael Ondaatje

**Caribbean Literature:**
- Jamaica: Claude McKay, Marlon James
- Trinidad: V.S. Naipaul, Samuel Selvon
- St. Lucia: Derek Walcott (Nobel Prize 1992)`,
    },
    {
      id: 'int-engelsk-3-def-1',
      type: 'definition',
      title: 'Key Literary Concepts',
      content: `**Postcolonialism:**
A theoretical and literary approach that examines the cultural legacy of colonialism, including:
- Power dynamics between colonizers and colonized
- The construction of identity after independence
- "Writing back" to imperial narratives
- Language as both tool of oppression and liberation

**Hybridity:**
The mixing of different cultural elements to create new forms:
- Cultural hybridity: Blending of traditions
- Linguistic hybridity: Code-switching, pidgins, creoles
- Literary hybridity: Mixing genres and styles

**The Subaltern:**
A term from postcolonial theory referring to groups marginalized by hegemonic culture:
- Those without voice or agency
- Key question: "Can the subaltern speak?" (Gayatri Spivak)

**Diaspora Literature:**
Writing by authors who have migrated or whose families have migrated:
- Explores themes of displacement and belonging
- Often negotiates multiple identities
- Examples: Zadie Smith, Jhumpa Lahiri, Chimamanda Ngozi Adichie`,
    },
    {
      id: 'int-engelsk-3-note-1',
      type: 'note',
      title: 'Writing Back: Reimagining Classic Texts',
      content: `Many postcolonial writers have "written back" to classic British texts, telling stories from different perspectives:

**Jean Rhys: Wide Sargasso Sea (1966)**
- Retells Jane Eyre from the perspective of Bertha Mason
- Explores the Caribbean colonial experience
- Challenges racist representations in Brontë's novel

**Chinua Achebe: Things Fall Apart (1958)**
- Responds to Joseph Conrad's Heart of Darkness
- Tells the story of colonization from an African perspective
- One of the most widely read African novels

**J.M. Coetzee: Foe (1986)**
- Reimagines Robinson Crusoe
- Gives voice to the silenced female narrator and Friday
- Questions colonialism and storytelling

**Zadie Smith: White Teeth (2000)**
- Modern multicultural London
- Dialogues with E.M. Forster's concerns about connection
- Explores postcolonial Britain`,
    },
    {
      id: 'int-engelsk-3-example-1',
      type: 'example',
      title: 'Example: Analyzing a Postcolonial Text',
      problem: `Consider this opening from Chinua Achebe's "Things Fall Apart" (1958):

"Okonkwo was well known throughout the nine villages and even beyond. His fame rested on solid personal achievements. As a young man of eighteen he had brought honor to his village by throwing Amalinze the Cat."`,
      solution: `**Analysis:**

**Narrative Voice:**
- Third person, but aligned with Igbo cultural perspective
- No exotic framing or Western narrator
- The reader must enter Okonkwo's world on its own terms

**Cultural Context:**
- Wrestling is presented as a legitimate achievement
- The community's oral culture is implied ("well known")
- "Nine villages" suggests organized society, contradicting colonial stereotypes

**Language:**
- Simple, direct prose
- Echoes oral storytelling traditions
- No need to translate or explain Igbo concepts initially

**Postcolonial Significance:**
- Achebe gives dignity to pre-colonial African society
- Counters stereotypes of "primitive" Africa
- The protagonist has complex psychology and culture
- Written in English but distinctly African in perspective

**Achebe's stated purpose:**
"I would be quite satisfied if my novels... did no more than teach my readers that their past—with all its imperfections—was not one long night of savagery from which the first Europeans acting on God's behalf delivered them."`,
    },
    {
      id: 'int-engelsk-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match the author with their country of origin:',
        subTasks: [
          {
            label: 'a',
            task: 'Chinua Achebe',
            solution: 'Nigeria',
            multipleChoiceOptions: ['Nigeria', 'South Africa', 'Kenya', 'Ghana'],
          },
          {
            label: 'b',
            task: 'Salman Rushdie',
            solution: 'India (later UK)',
            multipleChoiceOptions: ['India (later UK)', 'Pakistan', 'Bangladesh', 'Sri Lanka'],
          },
          {
            label: 'c',
            task: 'Derek Walcott',
            solution: 'St. Lucia (Caribbean)',
            multipleChoiceOptions: ['St. Lucia (Caribbean)', 'Jamaica', 'Trinidad', 'Barbados'],
          },
          {
            label: 'd',
            task: 'Nadine Gordimer',
            solution: 'South Africa',
            multipleChoiceOptions: ['South Africa', 'Nigeria', 'Zimbabwe', 'Kenya'],
          },
        ],
        solution: 'a) Nigeria, b) India, c) St. Lucia, d) South Africa',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'What is the primary concern of postcolonial literature?',
        multipleChoiceOptions: [
          'Examining the cultural legacy and impact of colonialism',
          'Writing about the postal service in colonies',
          'Celebrating the achievements of colonial rulers',
          'Documenting the geography of former colonies',
        ],
        solution: 'Postcolonial literature examines the cultural legacy of colonialism, exploring themes of identity, power, language, and the relationship between formerly colonized peoples and their colonizers.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Jean Rhys\'s "Wide Sargasso Sea" is a postcolonial response to which classic novel?',
        multipleChoiceOptions: [
          'Jane Eyre by Charlotte Brontë',
          'Pride and Prejudice by Jane Austen',
          'Wuthering Heights by Emily Brontë',
          'Great Expectations by Charles Dickens',
        ],
        solution: 'Wide Sargasso Sea tells the backstory of Bertha Mason, the "mad woman in the attic" from Jane Eyre, giving voice to a Caribbean Creole woman and exploring the colonial context that the original novel largely ignores.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Literary analysis: Read the following excerpt from Chimamanda Ngozi Adichie\'s "Americanah" and answer the questions:',
        subTasks: [
          {
            label: 'passage',
            task: '"The only reason you say that race was not an issue is because you wish it was not. We all wish it was not. But it\'s a lie. I came from a country where race was not an issue; I did not think of myself as black and I only became black when I came to America."',
            solution: 'N/A - this is the passage for analysis',
          },
          {
            label: 'a',
            task: 'What point is the speaker making about the concept of "race"?',
            solution: 'Race is a social construct that varies by location. In Nigeria, the speaker did not identify primarily by race, but in America, race becomes a defining category imposed on her.',
          },
          {
            label: 'b',
            task: 'How does this reflect the experience of diaspora?',
            solution: 'The passage illustrates how migration forces people to adopt new identities and confront categorizations they did not previously face. It shows the disorientation of crossing from one cultural context to another.',
          },
          {
            label: 'c',
            task: 'What does this excerpt suggest about identity?',
            solution: 'Identity is not fixed but contextual. It is shaped by society and can change dramatically depending on where one lives. The excerpt challenges the idea that racial identity is natural or universal.',
          },
        ],
        hints: ['Consider the difference between self-identification and being categorized by others', 'Think about how context shapes identity'],
        solution: 'The passage explores how racial identity is constructed differently in different societies and how migration can fundamentally alter one\'s sense of self.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'What does "hybridity" mean in postcolonial literary theory?',
        multipleChoiceOptions: [
          'The mixing of different cultural elements to create new forms',
          'A type of genetically modified plant',
          'Writing in two languages simultaneously',
          'The combination of poetry and prose',
        ],
        solution: 'Hybridity refers to the blending of different cultural traditions, languages, and identities that occurs especially in postcolonial contexts. It suggests that cultures are not "pure" but constantly mixing and evolving.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Choose ONE of the following novels and write a response (400-500 words):',
        subTasks: [
          {
            label: 'a',
            task: '"Things Fall Apart" by Chinua Achebe - How does Achebe challenge Western stereotypes about Africa?',
            solution: 'Essay should address: complex characterization, detailed portrayal of Igbo society, the tragedy of colonialism\'s impact, Achebe\'s stated goal to humanize African history.',
          },
          {
            label: 'b',
            task: '"White Teeth" by Zadie Smith - How does Smith portray multicultural Britain?',
            solution: 'Essay should address: intersecting immigrant narratives, generational conflicts, humor and tragedy, the complexity of belonging in modern London.',
          },
          {
            label: 'c',
            task: '"The God of Small Things" by Arundhati Roy - How does Roy use structure and language to tell her story?',
            solution: 'Essay should address: non-linear narrative, poetic language, the weight of history and caste, childhood perspective, the "Small Things" vs "Big Things" distinction.',
          },
        ],
        hints: ['Use specific examples from the text', 'Connect your analysis to broader themes of identity, culture, and history', 'Consider the author\'s background and intentions'],
        solution: 'A strong response will demonstrate close reading, understanding of postcolonial concepts, and personal engagement with the text.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 4: Media and Communication in English
// ============================================================================

export const CHAPTER_INT_ENGELSK_4: TextbookChapter = {
  id: 'int-engelsk-4',
  courseId: 'int-engelsk',
  chapterNumber: '4',
  title: 'Media and Communication in English',
  description: 'Analyze how English is used in various media formats including journalism, advertising, and social media.',
  estimatedMinutes: 70,
  competenceGoals: [
    'analyze and evaluate English-language texts from different media',
    'discuss how media influence opinions and perspectives',
  ],
  content: [
    {
      id: 'int-engelsk-4-intro',
      type: 'text',
      content: `## English in Global Media

English dominates international media, from major news networks to social media platforms. Understanding how language is used in media helps us become more critical consumers and more effective communicators.

**Media Landscapes:**

**Traditional News Media:**
- Global outlets: BBC, CNN, Al Jazeera English, Reuters, AP
- Print: The Guardian, The New York Times, The Economist
- Different editorial approaches and political leanings

**Digital and Social Media:**
- English as the dominant language online
- Platform-specific communication styles
- Viral content and meme culture
- Influencer communication

**Entertainment Media:**
- Hollywood's global reach
- Streaming services (Netflix, Disney+)
- Gaming culture
- Music industry

**Advertising:**
- Global campaigns vs. local adaptation
- Persuasive techniques
- Cultural considerations

**Key Questions:**
- How do media shape our worldview?
- What biases exist in English-language media?
- How has social media changed communication?
- What skills do we need to be media literate?`,
    },
    {
      id: 'int-engelsk-4-def-1',
      type: 'definition',
      title: 'Media Literacy Concepts',
      content: `**Bias:**
A tendency to favor one perspective over others
- Selection bias: What stories are covered?
- Framing: How are stories presented?
- Confirmation bias: Seeking information that confirms beliefs

**Framing:**
The way information is presented affects interpretation:
- "Freedom fighters" vs. "terrorists"
- "Climate crisis" vs. "climate change"
- "Undocumented immigrants" vs. "illegal aliens"

**Agenda Setting:**
Media don't tell us what to think, but what to think about:
- Coverage frequency signals importance
- Prominent placement increases attention
- Repetition shapes public discourse

**Echo Chambers:**
Environments where people encounter only views similar to their own:
- Algorithm-driven content curation
- Social media bubbles
- Polarization effects

**Misinformation vs. Disinformation:**
- Misinformation: False information spread unintentionally
- Disinformation: Deliberately false information
- Both require critical evaluation skills`,
    },
    {
      id: 'int-engelsk-4-def-2',
      type: 'definition',
      title: 'Journalism Language and Style',
      content: `**News Writing Conventions:**

**The Inverted Pyramid:**
- Most important information first (who, what, when, where)
- Supporting details follow
- Background at the end
- Allows cutting from the bottom

**Headlines:**
- Compressed language (articles often omitted)
- Active voice preferred
- Present tense for recent events
- Puns and wordplay common in tabloids

**Objectivity Markers:**
- Attribution: "According to...", "Sources say..."
- Hedging: "allegedly", "reportedly", "it appears"
- Balance: Presenting multiple perspectives
- Separating fact from opinion

**Opinion vs. News:**
- Editorials: Newspaper's official position
- Op-eds: Outside contributor opinions
- Analysis: Expert interpretation with evidence
- News: Fact-based reporting

**Style Guides:**
- AP Style (Associated Press): American standard
- Reuters Style: International wire service
- Guardian Style: British standard
- Each has specific preferences for language, punctuation, and formatting`,
    },
    {
      id: 'int-engelsk-4-note-1',
      type: 'note',
      title: 'Social Media Language',
      content: `**Platform-Specific Conventions:**

**Twitter/X:**
- Brevity (character limits)
- Hashtags for discoverability
- Threads for longer narratives
- Quote tweets for commentary
- "@" mentions for engagement

**Instagram:**
- Visual-first communication
- Captions secondary but important
- Hashtag strategies
- Stories vs. posts
- Influencer aesthetics

**TikTok:**
- Short-form video
- Trending sounds and formats
- Community-specific slang
- Duets and stitches

**Common Features:**
- Emojis as punctuation/emphasis
- Abbreviated language (tbh, ngl, idk)
- Internet slang evolution
- Meme formats as communication

**Critical Considerations:**
- Authenticity vs. performance
- Cancel culture and accountability
- The "main character" phenomenon
- Information verification challenges`,
    },
    {
      id: 'int-engelsk-4-example-1',
      type: 'example',
      title: 'Example: Analyzing Media Framing',
      problem: `Compare how two different headlines might cover the same story about climate policy:`,
      solution: `**The Story:** A government announces new carbon emission targets

**Headline A (supportive framing):**
"Nation Takes Bold Step to Combat Climate Crisis with Ambitious New Targets"
- "Bold step" suggests courage and leadership
- "Combat" implies necessary fight
- "Climate crisis" emphasizes urgency
- "Ambitious" is positive evaluation

**Headline B (critical framing):**
"Government's Carbon Plan Could Cost Thousands of Jobs, Critics Warn"
- Focuses on potential negative consequences
- "Critics warn" emphasizes opposition
- "Could cost" suggests risk
- Jobs angle appeals to economic concerns

**Headline C (neutral framing):**
"Government Announces New Carbon Emission Targets; Industry, Environmentalists React"
- States the fact without evaluation
- Acknowledges multiple perspectives
- No loaded language
- Lets readers form own opinion

**Analysis Questions:**
1. What perspective does each headline represent?
2. What words carry evaluative weight?
3. What aspects of the story are emphasized or omitted?
4. How might each headline affect reader perception?

**Key insight:** All three headlines could be about the same event, but they prime readers to interpret the story very differently.`,
    },
    {
      id: 'int-engelsk-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'What is the "inverted pyramid" structure in journalism?',
        multipleChoiceOptions: [
          'A structure where the most important information comes first',
          'A way of arranging newspaper pages',
          'A technique for building suspense in news stories',
          'A method of organizing advertisements',
        ],
        solution: 'The inverted pyramid places the most crucial information (who, what, when, where, why) at the beginning of a news article, with supporting details and background following. This allows editors to cut articles from the bottom and readers to get key facts quickly.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Identify the bias technique used in each example:',
        subTasks: [
          {
            label: 'a',
            task: 'A news channel covers political rallies by one party extensively but rarely mentions the opposition.',
            solution: 'Selection bias - choosing which stories to cover and which to ignore',
            multipleChoiceOptions: ['Selection bias', 'Framing bias', 'Confirmation bias', 'Echo chamber'],
          },
          {
            label: 'b',
            task: 'Describing the same group as "freedom fighters" or "militants" depending on the source.',
            solution: 'Framing - using language that shapes perception of the same facts',
            multipleChoiceOptions: ['Framing', 'Selection bias', 'Agenda setting', 'Misinformation'],
          },
          {
            label: 'c',
            task: 'A social media algorithm showing you only news that matches your existing political views.',
            solution: 'Echo chamber - an environment where you only encounter similar viewpoints',
            multipleChoiceOptions: ['Echo chamber', 'Framing', 'Selection bias', 'Disinformation'],
          },
        ],
        solution: 'a) Selection bias, b) Framing, c) Echo chamber',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'What is the difference between misinformation and disinformation?',
        multipleChoiceOptions: [
          'Misinformation is spread unintentionally; disinformation is deliberately false',
          'Misinformation is in print; disinformation is online',
          'Misinformation is harmless; disinformation is always illegal',
          'They mean the same thing',
        ],
        solution: 'Misinformation refers to false information shared without intent to deceive (the sharer believes it\'s true), while disinformation is deliberately created and spread to mislead people. Both require critical evaluation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyze the following two headlines about the same event and answer the questions:',
        subTasks: [
          {
            label: 'headlines',
            task: 'Headline A: "Protesters Clash with Police in Downtown Rally" / Headline B: "Police Use Tear Gas Against Peaceful Demonstrators"',
            solution: 'N/A - these are the headlines for analysis',
          },
          {
            label: 'a',
            task: 'Which headline presents the protesters more sympathetically?',
            solution: 'Headline B - "Peaceful demonstrators" creates sympathy, while "Police use" suggests police initiated action',
          },
          {
            label: 'b',
            task: 'Which headline is more neutral?',
            solution: 'Neither is fully neutral, but Headline A is more balanced by describing mutual action ("clash") rather than assigning blame to one side',
          },
          {
            label: 'c',
            task: 'What loaded words appear in each headline?',
            solution: 'A: "clash" (implies mutual responsibility). B: "peaceful" (positive connotation for protesters), "use... against" (implies police aggression)',
          },
        ],
        hints: ['Look for words with positive or negative connotations', 'Consider who is portrayed as the actor vs. the acted-upon'],
        solution: 'Both headlines describe the same event but frame it differently through word choice and emphasis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Practical analysis: Find a news story covered by at least three different sources (e.g., BBC, CNN, Al Jazeera, or others). Compare:',
        subTasks: [
          {
            label: 'a',
            task: 'What headline does each source use?',
            solution: 'Note differences in word choice, emphasis, and length.',
          },
          {
            label: 'b',
            task: 'What facts are included in all three? What differs?',
            solution: 'Core facts should overlap; details, quotes, and context may vary.',
          },
          {
            label: 'c',
            task: 'What perspective or bias might each source have?',
            solution: 'Consider ownership, audience, geographic base, and political orientation.',
          },
          {
            label: 'd',
            task: 'Which source do you find most reliable? Why?',
            solution: 'Justify based on evidence, balance, transparency, and verification.',
          },
        ],
        hints: ['Choose a current international news story', 'Include at least one non-Western source', 'Document your sources properly'],
        solution: 'A thorough comparison should reveal how the same event can be presented differently based on editorial choices and perspectives.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Write two different social media posts about the same topic (e.g., a school event, a news story, or a personal achievement) for:',
        subTasks: [
          {
            label: 'a',
            task: 'Instagram (with caption)',
            solution: 'Should include visual description, relevant hashtags, emotional/aesthetic focus, and appropriate tone for the platform.',
          },
          {
            label: 'b',
            task: 'Twitter/X',
            solution: 'Should be concise, potentially include hashtags, be shareable, and fit platform conventions.',
          },
        ],
        hints: ['Consider platform-specific conventions', 'Think about your audience', 'Use appropriate tone and features (hashtags, emojis, etc.)'],
        solution: 'Effective posts should demonstrate understanding of how communication style varies across platforms while conveying the same core message.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 5: Culture and Society in English-Speaking Countries
// ============================================================================

export const CHAPTER_INT_ENGELSK_5: TextbookChapter = {
  id: 'int-engelsk-5',
  courseId: 'int-engelsk',
  chapterNumber: '5',
  title: 'Culture and Society in English-Speaking Countries',
  description: 'Examine the diverse cultures, traditions, and social issues across the English-speaking world.',
  estimatedMinutes: 85,
  competenceGoals: [
    'explore and reflect on cultural diversity and social conditions in the English-speaking world',
    'discuss how culture and society are interrelated',
  ],
  content: [
    {
      id: 'int-engelsk-5-intro',
      type: 'text',
      content: `## Cultural Diversity in the English-Speaking World

The English-speaking world encompasses tremendous cultural diversity, from the indigenous cultures of Australia and New Zealand to the multicultural societies of modern Britain and North America. Understanding these cultures helps us communicate more effectively and appreciate different perspectives.

**Major Cultural Regions:**

**The United Kingdom:**
- Four nations: England, Scotland, Wales, Northern Ireland
- Multicultural society with significant immigrant populations
- Class consciousness and social mobility debates
- Brexit and changing identity

**The United States:**
- "Melting pot" vs. "salad bowl" metaphors
- Regional cultures: Northeast, South, Midwest, West
- Immigration and the American Dream
- Racial diversity and ongoing challenges

**Canada:**
- Bilingual (English/French) identity
- Indigenous peoples: First Nations, Métis, Inuit
- Multiculturalism as official policy
- Regional identities (Quebec, Prairies, BC)

**Australia and New Zealand:**
- Aboriginal and Māori cultures
- British colonial heritage
- Asian and Pacific Island immigration
- Unique natural environments shape identity

**The Caribbean:**
- Creole cultures blending African, European, Asian
- Colonial legacy and independence movements
- Diaspora communities worldwide
- Music and cultural exports (reggae, carnival)`,
    },
    {
      id: 'int-engelsk-5-def-1',
      type: 'definition',
      title: 'Key Cultural Concepts',
      content: `**Multiculturalism:**
The presence of multiple cultural traditions within a society
- As demographic fact: Many cultures coexist
- As policy: Government support for cultural diversity
- As ideology: Belief that diversity is valuable
- Debates: Integration vs. assimilation

**Identity Politics:**
Political positions based on particular social group membership
- Race, ethnicity, gender, sexuality, religion
- Emphasis on lived experience
- Critiques: divisive or necessary for recognition?

**Indigenous Rights:**
The rights of native peoples to self-determination, land, and culture
- Land acknowledgments
- Truth and reconciliation processes
- Language revitalization
- Ongoing struggles for recognition

**The American Dream:**
The belief that anyone can achieve success through hard work
- Historical roots in immigration and opportunity
- Critiques: systemic barriers, inequality
- Evolving meaning for different groups

**Cultural Appropriation vs. Appreciation:**
- Appropriation: Adopting elements of another culture inappropriately
- Appreciation: Respectful engagement with another culture
- Context matters: Power dynamics, permission, understanding`,
    },
    {
      id: 'int-engelsk-5-note-1',
      type: 'note',
      title: 'Indigenous Peoples of the English-Speaking World',
      content: `**Australia: Aboriginal and Torres Strait Islander Peoples:**
- The world's oldest continuous cultures (60,000+ years)
- Over 250 language groups originally
- Stolen Generations: Forced removal of children
- Land rights movement and Native Title
- "Sorry Day" and reconciliation efforts

**New Zealand: Māori:**
- Polynesian settlers arriving around 1300 CE
- Treaty of Waitangi (1840): Foundational document
- Te Reo Māori: Language revitalization success
- Haka: Cultural practice now globally known
- Greater integration in mainstream society than many indigenous groups

**North America: First Nations, Native Americans, Inuit:**
- Hundreds of distinct nations and cultures
- Residential/boarding school trauma
- Reservation/reserve systems
- Standing Rock and contemporary activism
- Land Back movement

**Importance of Land:**
For many indigenous peoples, land is not property but relationship:
- Spiritual connection
- Source of identity
- Site of historical memory
- Basis for sovereignty claims`,
    },
    {
      id: 'int-engelsk-5-example-1',
      type: 'example',
      title: 'Example: Comparing National Approaches to Diversity',
      problem: `How do different English-speaking countries officially approach cultural diversity?`,
      solution: `**United Kingdom - Integration:**
- No official multiculturalism policy
- "British values" curriculum in schools
- Debates about integration vs. parallel societies
- Recent focus on shared national identity

**Canada - Official Multiculturalism:**
- Canadian Multiculturalism Act (1988)
- "Cultural mosaic" metaphor
- Bilingualism (English/French) nationally
- Active celebration of diverse heritage

**United States - E Pluribus Unum:**
- "Out of many, one"
- No single official approach
- Tension between assimilation and diversity
- Varied by region and time period

**Australia - Changed Approach:**
- "White Australia" policy until 1970s
- Official multiculturalism since 1970s
- Integration emphasis in 21st century
- "Australian values" requirements for citizenship

**Key Differences:**
- Historical context shapes current policy
- Balance between unity and diversity varies
- Indigenous recognition differs significantly
- Immigration policies reflect different philosophies

**Common Challenges:**
- Managing diversity without division
- Addressing historical injustices
- Balancing free expression and hate speech
- Creating inclusive national narratives`,
    },
    {
      id: 'int-engelsk-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match the country with its indigenous peoples:',
        subTasks: [
          {
            label: 'a',
            task: 'New Zealand',
            solution: 'Māori',
            multipleChoiceOptions: ['Māori', 'Aboriginal', 'First Nations', 'Inuit'],
          },
          {
            label: 'b',
            task: 'Australia',
            solution: 'Aboriginal and Torres Strait Islander',
            multipleChoiceOptions: ['Aboriginal and Torres Strait Islander', 'Māori', 'First Nations', 'Native American'],
          },
          {
            label: 'c',
            task: 'Canada',
            solution: 'First Nations, Métis, and Inuit',
            multipleChoiceOptions: ['First Nations, Métis, and Inuit', 'Native American', 'Aboriginal', 'Māori'],
          },
        ],
        solution: 'a) Māori, b) Aboriginal and Torres Strait Islander, c) First Nations, Métis, and Inuit',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Which country has official multiculturalism as government policy?',
        multipleChoiceOptions: [
          'Canada',
          'United Kingdom',
          'United States',
          'Ireland',
        ],
        solution: 'Canada has had official multiculturalism as government policy since the Canadian Multiculturalism Act of 1988. The policy promotes the preservation and sharing of cultural heritage while promoting full participation in Canadian society.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'What does "The American Dream" traditionally refer to?',
        multipleChoiceOptions: [
          'The belief that anyone can achieve success through hard work',
          'A famous speech by Martin Luther King Jr.',
          'The desire to own a large house',
          'The dream of returning to Europe',
        ],
        solution: 'The American Dream refers to the national ethos that anyone, regardless of background, can achieve success and upward mobility through hard work, determination, and initiative. It has been both celebrated as an ideal and criticized for ignoring systemic barriers.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyze the difference between cultural appropriation and cultural appreciation:',
        subTasks: [
          {
            label: 'a',
            task: 'Define cultural appropriation in your own words.',
            solution: 'Cultural appropriation involves adopting elements of another culture without understanding, respect, or acknowledgment, often by members of a dominant culture taking from a marginalized one.',
          },
          {
            label: 'b',
            task: 'Give an example of each (appropriation and appreciation) and explain why.',
            solution: 'Examples will vary. Appropriation might include wearing sacred indigenous items as fashion; appreciation might include learning about and participating in cultural practices with guidance and permission.',
          },
          {
            label: 'c',
            task: 'What questions should you ask yourself before engaging with another culture?',
            solution: 'Consider: What is the origin and significance? Do I have permission or invitation? Am I taking from a marginalized group? Am I giving credit? Is this sacred or everyday? Am I learning or just taking?',
          },
        ],
        hints: ['Consider power dynamics', 'Think about context and intent', 'Remember that opinions vary within cultures'],
        solution: 'The line between appropriation and appreciation is often debated. Context, intent, permission, and power dynamics all play important roles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'The Treaty of Waitangi (1840) is a foundational document for which country?',
        multipleChoiceOptions: [
          'New Zealand',
          'Australia',
          'Canada',
          'South Africa',
        ],
        solution: 'The Treaty of Waitangi was signed in 1840 between the British Crown and Māori chiefs. It established British sovereignty while guaranteeing Māori rights. Its interpretation remains central to New Zealand politics and Māori claims today.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research and compare: Choose ONE of the following topics and write a comparative essay (400-500 words):',
        subTasks: [
          {
            label: 'a',
            task: 'Compare the experience of immigrants in two different English-speaking countries.',
            solution: 'Essay should address historical patterns, policies, challenges, opportunities, cultural attitudes, and integration experiences in both countries.',
          },
          {
            label: 'b',
            task: 'Compare approaches to indigenous rights in Australia and Canada.',
            solution: 'Essay should address historical treatment, contemporary policies, land rights, language revitalization, truth and reconciliation processes, and ongoing challenges.',
          },
          {
            label: 'c',
            task: 'Compare debates about national identity in post-Brexit UK and Trump-era USA.',
            solution: 'Essay should address immigration debates, nationalism, cultural divisions, media representations, and visions of the future.',
          },
        ],
        hints: ['Use specific examples', 'Consider multiple perspectives', 'Acknowledge complexity', 'Draw on reliable sources'],
        solution: 'A strong essay will demonstrate understanding of both contexts, make meaningful comparisons, and draw thoughtful conclusions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6: Current Affairs and Global Issues
// ============================================================================

export const CHAPTER_INT_ENGELSK_6: TextbookChapter = {
  id: 'int-engelsk-6',
  courseId: 'int-engelsk',
  chapterNumber: '6',
  title: 'Current Affairs and Global Issues',
  description: 'Discuss major global challenges and current events using English as a medium of international discourse.',
  estimatedMinutes: 80,
  competenceGoals: [
    'discuss and reflect on current social issues and global challenges',
    'express and justify own opinions on complex issues in English',
  ],
  content: [
    {
      id: 'int-engelsk-6-intro',
      type: 'text',
      content: `## Global Issues in the 21st Century

The ability to discuss global challenges in English is essential for international cooperation. Climate change, migration, technological disruption, and political polarization are issues that cross borders and require multilateral solutions.

**Major Global Challenges:**

**Climate Change:**
- Rising temperatures and extreme weather
- Sea level rise and displacement
- Biodiversity loss
- Transition to renewable energy
- Climate justice and developing nations

**Migration and Refugees:**
- 80+ million displaced people worldwide
- Climate migration increasing
- Political responses vary widely
- Integration challenges and opportunities

**Technology and Society:**
- Artificial intelligence and automation
- Privacy and surveillance
- Social media and democracy
- Digital divide
- Misinformation and deepfakes

**Political Polarization:**
- Growing divisions in many democracies
- Echo chambers and filter bubbles
- Populism and nationalism
- Threats to democratic institutions

**Economic Inequality:**
- Wealth concentration
- Global North vs. South
- Access to education and healthcare
- Future of work`,
    },
    {
      id: 'int-engelsk-6-def-1',
      type: 'definition',
      title: 'Climate Change Vocabulary',
      content: `**Scientific Terms:**
- **Global warming:** Long-term increase in Earth's average temperature
- **Greenhouse gases:** Gases that trap heat (CO2, methane, etc.)
- **Carbon footprint:** Total greenhouse gas emissions caused by an individual or entity
- **Tipping point:** Threshold beyond which change becomes irreversible
- **Net zero:** Achieving balance between emissions produced and removed

**Policy Terms:**
- **Paris Agreement:** International treaty on climate change (2015)
- **COP:** Conference of the Parties (UN climate conferences)
- **Carbon tax:** Tax on fossil fuels based on carbon content
- **Cap and trade:** Market-based emission reduction system
- **Climate adaptation:** Adjusting to current or expected effects

**Impact Terms:**
- **Climate refugees:** People displaced by climate change
- **Extreme weather events:** Intensified storms, droughts, floods
- **Ocean acidification:** Seas becoming more acidic from absorbed CO2
- **Permafrost thaw:** Frozen ground melting, releasing methane
- **Climate justice:** Addressing unequal impacts of climate change`,
    },
    {
      id: 'int-engelsk-6-def-2',
      type: 'definition',
      title: 'Discussing Controversial Topics',
      content: `**Useful Phrases for Academic Discussion:**

**Expressing Opinions:**
- "In my view / opinion..."
- "From my perspective..."
- "I would argue that..."
- "It seems to me that..."
- "I am convinced that..."

**Presenting Evidence:**
- "Research suggests that..."
- "According to [source]..."
- "Statistics show that..."
- "There is evidence to support..."
- "Studies have demonstrated..."

**Acknowledging Other Views:**
- "Some people argue that..."
- "It could be argued that..."
- "While I understand the point that..."
- "Although there is merit in the argument..."
- "Admittedly..."

**Disagreeing Politely:**
- "I see your point, but..."
- "I'm not sure I agree entirely..."
- "That's an interesting perspective, however..."
- "I would question whether..."
- "While that may be true, we should also consider..."

**Drawing Conclusions:**
- "Therefore, it can be concluded that..."
- "On balance, I believe..."
- "Taking everything into account..."
- "The evidence suggests that..."
- "In conclusion..."`,
    },
    {
      id: 'int-engelsk-6-note-1',
      type: 'note',
      title: 'The UN Sustainable Development Goals',
      content: `The 17 Sustainable Development Goals (SDGs) provide a framework for global challenges:

**People:**
1. No Poverty
2. Zero Hunger
3. Good Health and Well-being
4. Quality Education
5. Gender Equality

**Planet:**
6. Clean Water and Sanitation
7. Affordable and Clean Energy
13. Climate Action
14. Life Below Water
15. Life on Land

**Prosperity:**
8. Decent Work and Economic Growth
9. Industry, Innovation and Infrastructure
10. Reduced Inequalities
11. Sustainable Cities and Communities
12. Responsible Consumption and Production

**Peace and Partnership:**
16. Peace, Justice and Strong Institutions
17. Partnerships for the Goals

**Why This Matters:**
- Common language for global challenges
- Measurable targets for progress
- Framework for international cooperation
- Deadline: 2030`,
    },
    {
      id: 'int-engelsk-6-example-1',
      type: 'example',
      title: 'Example: Constructing an Argument',
      problem: `How would you argue for or against a carbon tax?`,
      solution: `**For a Carbon Tax:**

**Introduction:**
"Climate change represents an existential threat to human civilization. In my view, a carbon tax is one of the most effective tools we have to reduce emissions and transition to a sustainable economy."

**Arguments:**
1. **Economic efficiency:** "According to most economists, pricing carbon allows the market to find the cheapest ways to reduce emissions. Unlike regulations that prescribe specific technologies, a tax lets businesses innovate."

2. **Revenue generation:** "A carbon tax can generate substantial revenue. This could be returned to citizens as dividends, used to fund renewable energy, or reduce other taxes."

3. **Fairness:** "The principle of 'polluter pays' ensures that those who cause environmental damage bear the cost. Currently, society subsidizes fossil fuels by absorbing the costs of pollution."

**Acknowledging counterarguments:**
"Admittedly, there are concerns about competitiveness if other countries don't implement similar policies. However, border adjustment mechanisms can address this. While some argue carbon taxes are regressive, dividend programs can actually benefit low-income households."

**Conclusion:**
"On balance, a well-designed carbon tax represents our best chance to address climate change efficiently and fairly. The alternative—unmitigated climate change—would impose far greater costs."

---

**Against a Carbon Tax:**

**Introduction:**
"While I share concerns about climate change, I would question whether a carbon tax is the most effective or fair approach to addressing it."

**Arguments:**
1. **Regressive impact:** "Carbon taxes disproportionately burden low-income households who spend a larger share of income on energy and transportation."

2. **Economic harm:** "In regions dependent on fossil fuel industries, a carbon tax could devastate communities and cost thousands of jobs."

3. **Limited effectiveness:** "Unless implemented globally, carbon taxes may simply shift emissions elsewhere—a phenomenon known as 'carbon leakage.'"

**Conclusion:**
"I believe direct investment in clean energy technology and international agreements are more effective approaches than domestic carbon taxes."`,
    },
    {
      id: 'int-engelsk-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'What does "net zero" mean in climate policy?',
        multipleChoiceOptions: [
          'Achieving balance between emissions produced and emissions removed from the atmosphere',
          'Reducing emissions to zero immediately',
          'Having no climate impact at all',
          'Investing equal amounts in fossil fuels and renewables',
        ],
        solution: 'Net zero means achieving a balance between the amount of greenhouse gases produced and the amount removed from the atmosphere. This allows for some continued emissions if offset by carbon removal (through forests, technology, etc.).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Choose the most appropriate phrase for academic discussion:',
        subTasks: [
          {
            label: 'a',
            task: 'You want to disagree politely with someone:',
            solution: '"I see your point, but I would question whether..."',
            multipleChoiceOptions: ['"I see your point, but I would question whether..."', '"You\'re completely wrong about that."', '"That\'s stupid."', '"Whatever."'],
          },
          {
            label: 'b',
            task: 'You want to present evidence:',
            solution: '"Research suggests that..."',
            multipleChoiceOptions: ['"Research suggests that..."', '"Everyone knows that..."', '"I heard that..."', '"My friend said..."'],
          },
          {
            label: 'c',
            task: 'You want to acknowledge another viewpoint:',
            solution: '"While there is merit in the argument that..."',
            multipleChoiceOptions: ['"While there is merit in the argument that..."', '"Some people are dumb enough to think..."', '"Ignoring the idiots who say..."', '"Only fools believe..."'],
          },
        ],
        solution: 'Academic discussion requires respectful, evidence-based language that acknowledges multiple perspectives.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'How many Sustainable Development Goals (SDGs) are there?',
        multipleChoiceOptions: [
          '17',
          '10',
          '15',
          '20',
        ],
        solution: 'There are 17 UN Sustainable Development Goals, adopted in 2015 with a target date of 2030. They cover issues from poverty and hunger to climate action and strong institutions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write a balanced paragraph (150-200 words) presenting both sides of ONE of the following issues:',
        subTasks: [
          {
            label: 'a',
            task: 'Should social media platforms be regulated by governments?',
            solution: 'A balanced paragraph should present arguments for regulation (preventing misinformation, protecting privacy, reducing hate speech) and against (free speech concerns, difficulty of enforcement, risk of censorship).',
          },
          {
            label: 'b',
            task: 'Should wealthy countries accept more refugees?',
            solution: 'A balanced paragraph should present humanitarian arguments (moral duty, international law, economic benefits) and practical concerns (integration challenges, public opinion, resource limitations).',
          },
          {
            label: 'c',
            task: 'Should AI development be paused or restricted?',
            solution: 'A balanced paragraph should present safety concerns (existential risk, job displacement, misuse) and counter-arguments (benefits of AI, difficulty of enforcement, competitive disadvantage).',
          },
        ],
        hints: ['Use phrases for acknowledging different views', 'Present evidence where possible', 'Remain objective while showing understanding'],
        solution: 'A strong response demonstrates ability to see multiple perspectives and present them fairly.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Debate preparation: Choose a position on one of these topics and prepare three main arguments with supporting evidence:',
        subTasks: [
          {
            label: 'a',
            task: '"Developed nations should pay for climate change damage in developing countries."',
            solution: 'Arguments might include: historical responsibility for emissions, current wealth disparity, climate justice principles, or counter-arguments about current emissions, sovereignty, practicality.',
          },
          {
            label: 'b',
            task: '"Technology companies have too much power and should be broken up."',
            solution: 'Arguments might include: monopoly concerns, privacy issues, democratic threats, or counter-arguments about innovation, consumer benefit, difficulty of regulation.',
          },
        ],
        hints: ['Research your topic thoroughly', 'Anticipate counterarguments', 'Use reliable sources', 'Practice expressing your ideas clearly'],
        solution: 'Strong debate preparation involves clear thesis, well-supported arguments, and awareness of opposing views.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Essay: Choose ONE Sustainable Development Goal and discuss: (a) why it matters, (b) progress made so far, (c) challenges remaining, and (d) what you think should be done. (500-600 words)',
        hints: [
          'Choose a goal you find meaningful',
          'Use specific data and examples',
          'Consider both global and local perspectives',
          'Propose realistic solutions',
        ],
        solution: 'A comprehensive essay should demonstrate understanding of the goal, awareness of current status, critical analysis of challenges, and thoughtful recommendations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7: Academic English and Research
// ============================================================================

export const CHAPTER_INT_ENGELSK_7: TextbookChapter = {
  id: 'int-engelsk-7',
  courseId: 'int-engelsk',
  chapterNumber: '7',
  title: 'Academic English and Research',
  description: 'Develop skills in academic writing, research, and scholarly communication in English.',
  estimatedMinutes: 90,
  competenceGoals: [
    'use academic vocabulary and conventions appropriately',
    'find, evaluate, and use sources critically',
  ],
  content: [
    {
      id: 'int-engelsk-7-intro',
      type: 'text',
      content: `## The Language of Academia

Academic English has distinct conventions that differ from everyday language. Whether you plan to study at an English-speaking university, read academic literature, or simply want to express complex ideas more precisely, understanding academic English is essential.

**Characteristics of Academic English:**

**Formality:**
- No contractions (do not, cannot, it is)
- No slang or colloquialisms
- Third person often preferred (though "I" is acceptable in some contexts)
- Passive voice common (but not always preferred)

**Precision:**
- Specific vocabulary over vague terms
- Hedging to indicate certainty level
- Careful definitions of key terms
- Quantification where possible

**Structure:**
- Clear thesis statements
- Logical organization
- Explicit transitions
- Evidence-based arguments

**Objectivity:**
- Focus on evidence over opinion
- Acknowledgment of limitations
- Balanced presentation of views
- Separation of fact and interpretation`,
    },
    {
      id: 'int-engelsk-7-def-1',
      type: 'definition',
      title: 'Academic Vocabulary: Key Terms',
      content: `**Reporting Verbs:**
Verbs used to refer to others' research:

**Strong claim:**
- argues, asserts, claims, contends, maintains

**Neutral:**
- states, notes, observes, points out, reports

**Tentative:**
- suggests, implies, indicates, hypothesizes

**Disagreement:**
- challenges, disputes, questions, criticizes, refutes

**Analysis Verbs:**
- analyze, examine, investigate, explore, assess
- compare, contrast, differentiate, distinguish
- synthesize, integrate, combine, consolidate

**Hedging Language:**
- It appears that...
- This suggests that...
- may/might/could (rather than "will")
- generally, typically, often (rather than "always")
- to some extent, somewhat

**Boosting Language (use carefully):**
- clearly, obviously, undoubtedly
- significantly, substantially
- It is evident that...`,
    },
    {
      id: 'int-engelsk-7-def-2',
      type: 'definition',
      title: 'Essay Structure',
      content: `**The Standard Academic Essay:**

**Introduction:**
1. Hook: Engage the reader
2. Context: Background information
3. Thesis statement: Main argument clearly stated
4. Essay map: Overview of main points (optional)

**Body Paragraphs:**
1. Topic sentence: Main point of paragraph
2. Evidence: Quotes, data, examples
3. Analysis: Explain significance of evidence
4. Link: Connect to thesis and next paragraph

**The PEEL Structure:**
- **P**oint: State the main idea
- **E**vidence: Provide support
- **E**xplanation: Analyze the evidence
- **L**ink: Connect to thesis/next paragraph

**Conclusion:**
1. Restate thesis (differently)
2. Summarize main arguments
3. Broader implications
4. No new evidence introduced

**Transitions:**
- **Adding:** Furthermore, moreover, additionally, in addition
- **Contrasting:** However, nevertheless, on the other hand, conversely
- **Cause/effect:** Therefore, consequently, as a result, thus
- **Examples:** For instance, for example, specifically, namely
- **Sequence:** First, subsequently, finally, in conclusion`,
    },
    {
      id: 'int-engelsk-7-note-1',
      type: 'note',
      title: 'Evaluating Sources: The CRAAP Test',
      content: `**C - Currency:**
- When was the information published or updated?
- Is it current enough for your topic?
- Are links functional?

**R - Relevance:**
- Does the information relate to your topic?
- Who is the intended audience?
- Is it at an appropriate level?

**A - Authority:**
- Who is the author/publisher?
- What are their credentials?
- Is there contact information?
- What is the URL domain (.edu, .gov, .org, .com)?

**A - Accuracy:**
- Where does the information come from?
- Is it supported by evidence?
- Has it been reviewed or refereed?
- Are there spelling/grammar errors?

**P - Purpose:**
- Why does this information exist?
- Is it to inform, teach, sell, persuade?
- Is the point of view objective?
- Are there political, cultural, or institutional biases?

**Source Hierarchy:**
1. Peer-reviewed journal articles
2. Books from academic publishers
3. Reports from reputable organizations
4. Quality journalism
5. Wikipedia (starting point only)
6. Random websites (use with caution)`,
    },
    {
      id: 'int-engelsk-7-example-1',
      type: 'example',
      title: 'Example: From Informal to Academic',
      problem: `Transform this informal paragraph into academic English:`,
      solution: `**Informal Version:**
"Social media is really bad for teenagers. Everyone knows that kids who use it a lot are more depressed. It's obvious that scrolling through Instagram makes you feel bad about yourself. I think we should definitely ban social media for anyone under 16."

**Academic Version:**
"Research suggests a correlation between social media use and mental health challenges among adolescents. A meta-analysis by Twenge et al. (2018) found that heavy social media users were significantly more likely to report depressive symptoms. Social comparison theory provides a potential explanation: exposure to idealized representations on platforms such as Instagram may negatively affect self-esteem (Fardouly & Vartanian, 2016). However, the evidence for causation remains contested, and some scholars argue that social media can also provide valuable social support (Best et al., 2014). Rather than outright prohibition, policy responses might focus on digital literacy education and platform design improvements."

**Key Transformations:**
- "really bad" → "correlation with mental health challenges"
- "Everyone knows" → "Research suggests" with citation
- "It's obvious" → Theoretical framework provided
- "I think we should definitely" → "policy responses might"
- Absolute claim → Acknowledges complexity and alternative views
- No sources → Citations provided
- Informal tone → Formal academic register`,
    },
    {
      id: 'int-engelsk-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose the most appropriate reporting verb:',
        subTasks: [
          {
            label: 'a',
            task: 'The author _____ that climate change is the greatest threat to humanity. (strong claim)',
            solution: 'argues/asserts/contends',
            multipleChoiceOptions: ['argues', 'suggests', 'mentions', 'says'],
          },
          {
            label: 'b',
            task: 'The data _____ a possible link between diet and disease. (tentative)',
            solution: 'suggests/indicates',
            multipleChoiceOptions: ['suggests', 'proves', 'demonstrates', 'confirms'],
          },
          {
            label: 'c',
            task: 'Smith (2020) _____ Johnson\'s methodology. (disagreement)',
            solution: 'challenges/questions/criticizes',
            multipleChoiceOptions: ['challenges', 'supports', 'examines', 'describes'],
          },
        ],
        solution: 'a) argues, b) suggests, c) challenges',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'What does the "A" for "Authority" in the CRAAP test evaluate?',
        multipleChoiceOptions: [
          'The credentials and expertise of the author/publisher',
          'Whether the source is accurate',
          'Whether the source is available online',
          'The age of the source',
        ],
        solution: 'Authority evaluates who created the information—their credentials, expertise, and organizational affiliation. It helps determine whether the source is trustworthy based on the author\'s qualifications.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Identify problems in this thesis statement and suggest improvements:',
        subTasks: [
          {
            label: 'a',
            task: '"Social media is bad."',
            solution: 'Problems: Too vague, no specific argument, too broad. Better: "Heavy social media use among teenagers correlates with increased rates of anxiety and depression due to social comparison and fear of missing out."',
          },
          {
            label: 'b',
            task: '"In this essay I will discuss climate change."',
            solution: 'Problems: Announces topic but states no argument. Better: "International cooperation, particularly through binding emissions targets, is essential to address climate change because unilateral action cannot solve a global problem."',
          },
          {
            label: 'c',
            task: '"Shakespeare was the greatest writer ever."',
            solution: 'Problems: Subjective claim presented as fact, "ever" too absolute. Better: "Shakespeare\'s enduring influence on literature and the English language demonstrates his significance as a cultural figure, though defining \'greatest\' remains subjective."',
          },
        ],
        hints: ['A good thesis is specific, arguable, and tells the reader what to expect'],
        solution: 'Strong thesis statements make specific claims that can be supported with evidence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Rewrite the following informal sentences in academic English:',
        subTasks: [
          {
            label: 'a',
            task: '"Lots of people think technology is changing everything."',
            solution: '"Technological advancement is widely perceived to be transforming multiple aspects of society." OR "There is considerable scholarly attention to the transformative effects of technology on contemporary life."',
          },
          {
            label: 'b',
            task: '"The results were pretty good but there were some problems."',
            solution: '"The results were largely positive; however, several limitations were identified." OR "While the outcomes were generally favorable, certain methodological challenges emerged."',
          },
          {
            label: 'c',
            task: '"I definitely think we should do something about poverty."',
            solution: '"Addressing poverty requires concerted policy intervention." OR "There is a compelling case for implementing measures to reduce poverty."',
          },
        ],
        hints: ['Remove colloquialisms', 'Be more precise', 'Consider using passive voice where appropriate', 'Add hedging if claims are uncertain'],
        solution: 'Academic English requires precision, formality, and evidence-based claims.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Evaluate the following source using the CRAAP test. Is it suitable for an academic essay about climate change? Why or why not?',
        subTasks: [
          {
            label: 'source',
            task: 'A blog post titled "Climate Change: The Real Truth" published in 2019 on a website called "ThinkForYourself.com" by an author with no listed credentials. The post contains no citations and claims that all climate scientists are part of a conspiracy.',
            solution: 'N/A - this is the source description',
          },
          {
            label: 'a',
            task: 'Evaluate Currency',
            solution: '2019 is relatively recent, but for a rapidly changing field, more current sources would be preferable.',
          },
          {
            label: 'b',
            task: 'Evaluate Relevance',
            solution: 'The topic is relevant, but the conspiratorial framing suggests bias that undermines usefulness.',
          },
          {
            label: 'c',
            task: 'Evaluate Authority',
            solution: 'No author credentials, unclear website (.com suggests commercial), no institutional backing. Very weak authority.',
          },
          {
            label: 'd',
            task: 'Evaluate Accuracy',
            solution: 'No citations provided, claims contradict scientific consensus. Unverifiable and likely inaccurate.',
          },
          {
            label: 'e',
            task: 'Evaluate Purpose',
            solution: 'Appears designed to persuade rather than inform, with clear bias. May have ideological or commercial motivation.',
          },
          {
            label: 'f',
            task: 'Final verdict',
            solution: 'NOT suitable for academic use. Fails multiple CRAAP criteria. Would only be appropriate if analyzing climate misinformation as a phenomenon.',
          },
        ],
        solution: 'Critical source evaluation is essential for academic writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Write an academic paragraph (150-200 words) on ONE of the following topics. Include: topic sentence, evidence with citation, analysis, and link to broader argument.',
        subTasks: [
          {
            label: 'a',
            task: 'The impact of social media on political discourse',
            solution: 'Paragraph should include clear topic sentence, specific evidence (ideally with citation), analysis explaining significance, and connection to broader theme.',
          },
          {
            label: 'b',
            task: 'The role of English in international business',
            solution: 'Paragraph should follow academic conventions including formal register, evidence-based claims, and appropriate hedging.',
          },
          {
            label: 'c',
            task: 'Climate change and food security',
            solution: 'Paragraph should demonstrate understanding of academic structure and use appropriate vocabulary.',
          },
        ],
        hints: ['Use the PEEL structure', 'Include at least one reporting verb', 'Use appropriate transitions', 'Maintain formal register throughout'],
        solution: 'A strong academic paragraph demonstrates mastery of structure, vocabulary, and convention.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 8: Creative Writing and Expression
// ============================================================================

export const CHAPTER_INT_ENGELSK_8: TextbookChapter = {
  id: 'int-engelsk-8',
  courseId: 'int-engelsk',
  chapterNumber: '8',
  title: 'Creative Writing and Expression',
  description: 'Develop creative writing skills in English across multiple genres and forms.',
  estimatedMinutes: 85,
  competenceGoals: [
    'write creative texts in various genres',
    'use language creatively and expressively',
  ],
  content: [
    {
      id: 'int-engelsk-8-intro',
      type: 'text',
      content: `## The Art of Creative Writing

Creative writing offers an opportunity to express yourself, explore ideas, and connect with readers emotionally. Unlike academic writing, creative writing prioritizes voice, style, and artistic effect—though it still requires skill and craft.

**Why Creative Writing Matters:**
- Develops empathy through inhabiting other perspectives
- Improves language skills through active experimentation
- Provides outlet for self-expression
- Encourages original thinking

**Major Creative Writing Genres:**

**Fiction:**
- Short stories
- Flash fiction (very short stories)
- Novel excerpts
- Fan fiction

**Poetry:**
- Free verse
- Formal poetry (sonnets, haiku)
- Spoken word/slam poetry

**Creative Nonfiction:**
- Personal essays
- Memoir
- Travel writing
- Literary journalism

**Drama:**
- Plays
- Screenplays
- Monologues

**Each genre has its own conventions, but all share:**
- Attention to language
- Focus on effect on reader
- Creative use of literary devices
- Distinctive voice`,
    },
    {
      id: 'int-engelsk-8-def-1',
      type: 'definition',
      title: 'Literary Devices for Creative Writing',
      content: `**Imagery:**
Language that appeals to the senses:
- Visual: "The sunset painted the sky in shades of amber and rose"
- Auditory: "The leaves whispered secrets to the wind"
- Tactile: "The rough bark scraped against her palm"
- Olfactory: "The scent of cinnamon transported her to childhood"
- Gustatory: "The coffee tasted of burnt rubber and regret"

**Figurative Language:**
- **Simile:** Comparison using "like" or "as" ("Her words cut like glass")
- **Metaphor:** Direct comparison ("Life is a journey")
- **Personification:** Giving human qualities to non-human things ("The house groaned in the wind")
- **Hyperbole:** Exaggeration ("I've told you a million times")
- **Understatement:** Deliberate minimization ("It's just a scratch" for a serious wound)

**Sound Devices:**
- **Alliteration:** Repeated initial consonants ("Peter Piper picked...")
- **Assonance:** Repeated vowel sounds ("The rain in Spain stays mainly...")
- **Onomatopoeia:** Words that imitate sounds (buzz, crack, whisper)
- **Rhythm:** Pattern of stressed and unstressed syllables

**Narrative Techniques:**
- **Show, don't tell:** Use action and detail instead of exposition
- **Dialogue:** Reveals character through speech
- **Flashback/flash-forward:** Non-linear time
- **Foreshadowing:** Hints at future events`,
    },
    {
      id: 'int-engelsk-8-def-2',
      type: 'definition',
      title: 'Short Story Elements',
      content: `**Plot:**
The sequence of events in a story:
- **Exposition:** Introduction of setting and characters
- **Rising action:** Conflict develops
- **Climax:** Turning point/highest tension
- **Falling action:** Consequences unfold
- **Resolution:** Conclusion

**Character:**
- **Protagonist:** Main character
- **Antagonist:** Opposes protagonist
- **Dynamic character:** Changes throughout story
- **Static character:** Remains the same
- **Flat vs. round:** One-dimensional vs. complex

**Setting:**
- Time and place of the story
- Can reflect or contrast with mood
- Physical, social, and temporal dimensions

**Point of View:**
- **First person:** "I walked into the room"
- **Second person:** "You walk into the room" (rare)
- **Third person limited:** "She walked into the room" (one perspective)
- **Third person omniscient:** All perspectives known

**Theme:**
- The central idea or message
- Often implicit rather than stated
- Universal human experiences

**Conflict:**
- **Person vs. person:** Conflict with another character
- **Person vs. self:** Internal struggle
- **Person vs. society:** Conflict with social norms
- **Person vs. nature:** Survival against natural forces
- **Person vs. technology:** Modern variation`,
    },
    {
      id: 'int-engelsk-8-note-1',
      type: 'note',
      title: 'Writing Effective Dialogue',
      content: `**Purposes of Dialogue:**
1. Reveal character
2. Advance plot
3. Provide information naturally
4. Create tension or humor
5. Break up narration

**Guidelines:**

**Do:**
- Make each character sound distinct
- Use dialogue tags sparingly ("said" is fine)
- Include action beats (gestures, movements)
- Read dialogue aloud to test naturalness
- Use subtext—what's NOT said matters

**Don't:**
- Have characters say exactly what they mean
- Use dialogue for info-dumps
- Make everyone speak the same way
- Overuse dialect spelling
- Add excessive adverbs ("he said angrily")

**Example of subtext:**
"How was work?" she asked, not looking up from her phone.
"Fine." He set his keys down harder than necessary.
"Good."
The silence stretched between them.

*What's communicated without being said: tension, disconnection, unspoken conflict.*

**Formatting:**
- New paragraph for each speaker
- Quotation marks around spoken words
- Comma before or after dialogue tag
- Period inside quotation marks (US style)`,
    },
    {
      id: 'int-engelsk-8-example-1',
      type: 'example',
      title: 'Example: Show, Don\'t Tell',
      problem: `Transform "telling" sentences into "showing" passages:`,
      solution: `**"John was nervous."** (Telling)

**Showing version:**
"John's fingers drummed against his thigh. He glanced at the clock—2:57. Three more minutes. His collar felt tight, though he'd already loosened it twice. When the secretary called his name, he flinched."

---

**"Sarah was angry at her mother."** (Telling)

**Showing version:**
"Sarah stabbed at her peas with her fork. Across the table, her mother was saying something about responsibility, her voice that particular mix of disappointment and concern. Sarah made herself chew, swallow, not respond. The peas tasted like nothing. Like this conversation. Like the last five years of conversations just like it."

---

**"The old house was creepy."** (Telling)

**Showing version:**
"The porch steps sagged under Marcus's weight, groaning like something waking from sleep. Every window reflected the grey sky, giving nothing away about what lay inside. Somewhere in the walls, something skittered. He told himself it was mice. He didn't believe it."

---

**Key Principle:**
Instead of naming the emotion or quality, provide specific sensory details, actions, and observations that lead the reader to that conclusion themselves. This creates a more immersive reading experience.`,
    },
    {
      id: 'int-engelsk-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identify the literary device used in each example:',
        subTasks: [
          {
            label: 'a',
            task: '"The wind howled its fury at the world."',
            solution: 'Personification (giving human qualities to wind)',
            multipleChoiceOptions: ['Personification', 'Simile', 'Alliteration', 'Hyperbole'],
          },
          {
            label: 'b',
            task: '"Her eyes were two dark pools of mystery."',
            solution: 'Metaphor (direct comparison without "like" or "as")',
            multipleChoiceOptions: ['Metaphor', 'Simile', 'Personification', 'Imagery'],
          },
          {
            label: 'c',
            task: '"Peter Piper picked a peck of pickled peppers."',
            solution: 'Alliteration (repeated initial consonant sounds)',
            multipleChoiceOptions: ['Alliteration', 'Assonance', 'Onomatopoeia', 'Rhythm'],
          },
          {
            label: 'd',
            task: '"I\'ve told you a thousand times not to do that."',
            solution: 'Hyperbole (exaggeration for effect)',
            multipleChoiceOptions: ['Hyperbole', 'Understatement', 'Irony', 'Metaphor'],
          },
        ],
        solution: 'a) Personification, b) Metaphor, c) Alliteration, d) Hyperbole',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'What is "showing, not telling" in creative writing?',
        multipleChoiceOptions: [
          'Using specific details and actions to convey emotions rather than naming them directly',
          'Adding pictures to your story',
          'Making your story into a movie',
          'Using long descriptions instead of dialogue',
        ],
        solution: '"Show, don\'t tell" means using concrete details, actions, sensory language, and dialogue to let readers experience emotions and situations rather than simply stating them. Instead of "She was sad," show the reader through her actions, thoughts, and surroundings.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Rewrite the following "telling" sentences as "showing" passages (2-4 sentences each):',
        subTasks: [
          {
            label: 'a',
            task: '"Maria was excited about her birthday."',
            solution: 'Example: "Maria woke before her alarm, already grinning. She\'d counted down the days on her calendar—twelve little X marks—and now it was finally here. She bounded downstairs before anyone else was awake, sliding on socked feet into the kitchen to see if there were presents yet."',
          },
          {
            label: 'b',
            task: '"The classroom was boring."',
            solution: 'Example: "The clock above the door seemed stuck at 2:47. Tom had already counted all the ceiling tiles twice. Mr. Henderson\'s voice droned on about exports and imports, a sound like a lawnmower in the distance. Tom\'s eyelids grew heavier."',
          },
          {
            label: 'c',
            task: '"David was in love with Emma."',
            solution: 'Example: "Whenever Emma walked into the room, David found himself straightening up, suddenly aware of how his hair looked. He laughed a little too hard at her jokes. He noticed things—the way she twisted her ring when she was thinking, the exact shade of her eyes in different light."',
          },
        ],
        hints: ['Use specific sensory details', 'Show through actions and body language', 'Include physical setting', 'Let readers draw their own conclusions'],
        solution: 'Effective "showing" creates vivid images and allows readers to experience the scene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write a dialogue scene (10-15 lines) between two characters who are having an argument WITHOUT explicitly stating what they\'re arguing about. The reader should be able to infer the conflict from subtext.',
        hints: [
          'Use action beats (not just dialogue tags)',
          'What characters DON\'T say is as important as what they say',
          'Short, interrupted sentences can convey tension',
          'Physical actions reveal emotions',
        ],
        solution: 'Strong dialogue uses subtext, action, and character-specific voice to convey conflict without exposition. The reader should understand the emotional stakes without being told directly.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a flash fiction piece (exactly 100 words) based on one of these prompts:',
        subTasks: [
          {
            label: 'a',
            task: 'A character finds something unexpected in their pocket.',
            solution: 'Story should have clear beginning, middle, and end within exactly 100 words, with attention to word choice and impact.',
          },
          {
            label: 'b',
            task: 'The last person on Earth hears a knock at the door.',
            solution: 'Story should create atmosphere and tension while maintaining the strict word count.',
          },
          {
            label: 'c',
            task: 'Two strangers are stuck in an elevator.',
            solution: 'Story should reveal character through dialogue and action within the constraint.',
          },
        ],
        hints: ['Every word must earn its place', 'Start as close to the end as possible', 'Suggest more than you state', 'End with impact'],
        solution: 'Flash fiction requires precision—every word must count. The constraint forces creative choices.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Write a short story (500-750 words) that includes:',
        subTasks: [
          {
            label: 'requirements',
            task: '1. A clear protagonist with a want/need\n2. A conflict or obstacle\n3. A change or realization by the end\n4. At least three literary devices (e.g., imagery, metaphor, dialogue)\n5. A distinctive narrative voice',
            solution: 'Story should demonstrate understanding of narrative structure, character development, and effective use of literary techniques.',
          },
        ],
        hints: [
          'Start with conflict, not background',
          'Make your protagonist active, not passive',
          'Use specific, concrete details',
          'End with resonance—give the reader something to think about',
          'Read your work aloud to check flow',
        ],
        solution: 'A successful short story combines technical craft with emotional engagement. Focus on one significant moment rather than trying to cover too much ground.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'int-engelsk-8-ex-7',
      type: 'exercise',
      exercise: {
        id: 'int-engelsk-8-ex-7',
        number: '7',
        type: 'classic',
        task: 'Poetry exercise: Write a poem (10-20 lines) using ONE of these approaches:',
        subTasks: [
          {
            label: 'a',
            task: 'Free verse about a moment of change in your life',
            solution: 'Poem should use imagery, line breaks meaningfully, and convey emotional truth through concrete details.',
          },
          {
            label: 'b',
            task: 'A found poem: Take a non-literary text (instruction manual, news article, recipe) and rearrange selected words/phrases into a poem',
            solution: 'Found poem should transform the original text, creating new meaning through selection and arrangement.',
          },
          {
            label: 'c',
            task: 'A persona poem: Write in the voice of someone very different from yourself',
            solution: 'Persona poem should authentically inhabit another perspective, revealing character through voice.',
          },
        ],
        hints: [
          'Line breaks in poetry are meaningful—use them intentionally',
          'Every word matters even more than in prose',
          'Avoid clichés—find fresh ways to express ideas',
          'Read contemporary poetry for inspiration',
        ],
        solution: 'Poetry distills language to its essence. Focus on precision, imagery, and the music of words.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const INT_ENGELSK_CHAPTERS: TextbookChapter[] = [
  CHAPTER_INT_ENGELSK_1,
  CHAPTER_INT_ENGELSK_2,
  CHAPTER_INT_ENGELSK_3,
  CHAPTER_INT_ENGELSK_4,
  CHAPTER_INT_ENGELSK_5,
  CHAPTER_INT_ENGELSK_6,
  CHAPTER_INT_ENGELSK_7,
  CHAPTER_INT_ENGELSK_8,
];
