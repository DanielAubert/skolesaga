/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Internasjonal engelsk (VG2/VG3) - Del 1: English as a Global Language
 *
 * Kapittel 1.1–1.5
 *
 * LK20-kompetansemål:
 * - analyze the position of English in the world
 * - reflect on the role of English in international contexts
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 1.1: The History of English
// ============================================================================

export const CHAPTER_INT_ENGELSK_1_1: TextbookChapter = {
  id: 'int-engelsk-1-1',
  courseId: 'int-engelsk',
  chapterNumber: '1.1',
  title: 'The History of English',
  description: 'Trace the development of English from its Germanic roots through Old, Middle, and Modern English to its current global status.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analyze the position of English in the world',
    'discuss the historical development of the English language and how key events shaped it',
  ],
  keyTerms: [
    { term: 'Old English', definition: 'The earliest form of English, spoken from roughly 450 to 1100 CE, heavily influenced by Germanic languages.' },
    { term: 'Middle English', definition: 'The form of English spoken from about 1100 to 1500 CE, significantly influenced by Norman French after the conquest of 1066.' },
    { term: 'Early Modern English', definition: 'English as spoken from roughly 1500 to 1700 CE, the period of Shakespeare and the King James Bible.' },
    { term: 'Modern English', definition: 'The form of English spoken from approximately 1700 CE to the present day.' },
    { term: 'Great Vowel Shift', definition: 'A major series of changes in the pronunciation of English vowels that occurred between the 14th and 17th centuries.' },
  ],
  content: [
    // --- Intro ---
    {
      id: 'ie-1-1-intro',
      type: 'text',
      content: `## From a Small Island to the World

The English language has one of the most remarkable histories of any language on earth. What began as the speech of a few Germanic tribes on a small island in the North Sea has become the most widely used language in human history.

Understanding the history of English is essential for anyone studying it at an advanced level. The language we use today carries traces of every invasion, migration, and cultural shift that has touched the British Isles over the past 1,500 years.

**Timeline Overview:**
- **Old English (c. 450–1100):** Germanic roots, Anglo-Saxon culture
- **Middle English (c. 1100–1500):** French influence after the Norman Conquest
- **Early Modern English (c. 1500–1700):** Shakespeare, the printing press, global exploration
- **Modern English (c. 1700–present):** Standardization, colonialism, global spread`,
    },

    // --- Definition 1: Old English ---
    {
      id: 'ie-1-1-def-1',
      type: 'definition',
      title: 'Old English (c. 450–1100)',
      content: `**Old English** (also called Anglo-Saxon) was the earliest form of the English language, brought to Britain by Germanic tribes — the Angles, Saxons, and Jutes — who migrated from what is now Denmark and northern Germany starting around 450 CE.

**Key features of Old English:**
- A highly inflected language (word endings changed to indicate grammatical function)
- Vocabulary was almost entirely Germanic
- The alphabet used runic characters before adopting the Latin script
- Pronunciation and grammar were very different from Modern English

**Example:** The Lord's Prayer begins: *"Fæder ūre, þū þe eart on heofonum..."*
(Compare: "Our Father, who art in heaven...")

**Major influences:**
- **Latin:** Through Christianity (introduced 597 CE) — words like *church, school, master*
- **Old Norse:** Through Viking invasions (8th–11th centuries) — words like *sky, egg, window, they, them, their*`,
    },

    // --- Example 1 ---
    {
      id: 'ie-1-1-example-1',
      type: 'example',
      title: 'Old English vs. Modern English',
      problem: 'How different is Old English from the English we speak today?',
      solution: `**Old English passage (from Beowulf):**
> *"Hwæt! We Gardena in geardagum, þeodcyninga, þrym gefrunon."*

**Modern English translation:**
> "Listen! We have heard of the might of the kings of the Spear-Danes in days of old."

**Key observations:**
- Most Old English words are unrecognizable to modern readers
- The word order is different (verb often comes at the end)
- Old English used letters we no longer have (þ = "th", æ = "a" in "cat")
- Only a few basic words like "we" and "in" look the same

This demonstrates that Old English is essentially a foreign language to modern English speakers. The transformation happened gradually over centuries through contact with other languages and cultures.`,
    },

    // --- Exercise 1 ---
    {
      id: 'ie-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which Germanic tribes are credited with bringing the earliest form of English to Britain?',
        options: [
          { id: 'a', text: 'The Franks, Goths, and Vandals', isCorrect: false },
          { id: 'b', text: 'The Angles, Saxons, and Jutes', isCorrect: true },
          { id: 'c', text: 'The Vikings, Normans, and Celts', isCorrect: false },
          { id: 'd', text: 'The Romans, Greeks, and Phoenicians', isCorrect: false },
        ],
        solution: 'The Angles, Saxons, and Jutes migrated from present-day Denmark and northern Germany to Britain starting around 450 CE. The name "England" itself derives from "Angles" (Engla-land, "land of the Angles").',
      },
    },

    // --- Exercise 2 ---
    {
      id: 'ie-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain two ways in which the Viking invasions influenced the English language. Give specific examples of words that entered English from Old Norse.',
        hints: [
          'Think about everyday words that have Scandinavian origins',
          'Consider how pronouns like "they/them/their" came into English',
        ],
        solution: 'The Viking invasions (8th–11th centuries) influenced English in two major ways: 1) They introduced hundreds of everyday words from Old Norse, including "sky," "egg," "window," "knife," "husband," "wrong," and "take." 2) They replaced the Old English pronoun system — "they," "them," and "their" all come from Old Norse, replacing the original Old English forms. This is remarkable because pronouns are usually among the most resistant to foreign influence. The Vikings settled extensively in northern and eastern England (the Danelaw), and the need for everyday communication between speakers of two related Germanic languages drove simplification of English grammar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Definition 2: Middle English ---
    {
      id: 'ie-1-1-def-2',
      type: 'definition',
      title: 'Middle English (c. 1100–1500)',
      content: `**Middle English** emerged after the Norman Conquest of 1066, when William the Conqueror defeated the English King Harold at the Battle of Hastings. This event transformed the English language more dramatically than any other single historical moment.

**What changed:**
- **French became the language of power:** The royal court, law, government, and the church all conducted business in Norman French
- **English survived among the common people:** Peasants and laborers continued speaking English
- **Massive vocabulary expansion:** Thousands of French words entered English, especially in domains of power — *government, parliament, justice, court, crime, prison, army, navy*
- **Grammar simplified dramatically:** Most Old English word endings disappeared; word order became more fixed

**The social divide in vocabulary:**
| English (animals in the field) | French (meat on the table) |
|---|---|
| cow | beef (boeuf) |
| sheep | mutton (mouton) |
| pig | pork (porc) |
| deer | venison (venaison) |

This pattern reveals the social reality: English-speaking peasants raised the animals, while French-speaking nobles ate the meat.`,
    },

    // --- Exercise 3 ---
    {
      id: 'ie-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-1-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Why do we often have two words for the same animal — one for the living creature and one for the meat (e.g., cow/beef, sheep/mutton)?',
        options: [
          { id: 'a', text: 'Because Latin and Greek each contributed one word', isCorrect: false },
          { id: 'b', text: 'Because English-speaking peasants tended animals while French-speaking nobles ate the meat', isCorrect: true },
          { id: 'c', text: 'Because scientists invented the second term for classification purposes', isCorrect: false },
          { id: 'd', text: 'Because the words were borrowed from different Viking dialects', isCorrect: false },
        ],
        solution: 'After the Norman Conquest of 1066, a social divide emerged: the English-speaking lower classes raised and tended the animals (using Germanic words like cow, sheep, pig), while the French-speaking upper classes ate the meat (using French-derived words like beef, mutton, pork). This linguistic divide reflects the power dynamics of medieval England.',
      },
    },

    // --- Exercise 4 ---
    {
      id: 'ie-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'The Norman Conquest of 1066 has been called "the single most important event in the history of the English language." Do you agree? Write a short argument supporting or challenging this claim.',
        hints: [
          'Consider how many French words entered English',
          'Think about the grammatical simplification that occurred',
          'Compare the impact of the Norman Conquest to other events like the Viking invasions or the invention of the printing press',
        ],
        solution: 'A strong answer might argue in favor: The Norman Conquest introduced approximately 10,000 French words into English, transformed the grammar from a highly inflected to a largely analytic system, and created the unique dual vocabulary (Germanic + French) that characterizes modern English. Alternatively, one might argue that the printing press or the colonial expansion had greater long-term impact. The key is to provide specific evidence and a well-reasoned argument.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Summary ---
    {
      id: 'ie-1-1-summary',
      type: 'text',
      content: `## Early Modern and Modern English

### Early Modern English (c. 1500–1700)
Several developments transformed Middle English into a form we can more easily recognize today:

- **The Great Vowel Shift:** A dramatic change in pronunciation — long vowels shifted upward in the mouth (e.g., the word "bite" was previously pronounced like modern "beet")
- **The printing press (1476):** William Caxton's press helped standardize spelling and grammar
- **Shakespeare (1564–1616):** Invented over 1,700 words (*assassination, eyeball, lonely, generous*) and popularized many more
- **The King James Bible (1611):** Established a standard for English prose
- **Global exploration:** New words entered from contact with other cultures (*banana, chocolate, tobacco, canoe*)

### Modern English (c. 1700–present)
- **Standardization:** Dictionaries (Samuel Johnson, 1755) and grammar books established norms
- **Industrial Revolution:** New technology required new vocabulary
- **British Empire:** English was exported to every continent
- **American influence:** The 20th century saw American English become globally dominant
- **The internet age:** English became the default language of digital communication

## Summary

The English language is a product of its history. Its Germanic foundation, Norse contributions, French vocabulary, Latin and Greek learned terms, and borrowings from hundreds of languages worldwide make it one of the richest and most flexible languages in the world. Understanding this history helps explain why English spelling is so irregular, why it has so many synonyms, and why it has been so successful as a global language.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'ie-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Create a timeline of five key events that shaped the English language. For each event, explain how it changed English (vocabulary, grammar, pronunciation, or status). Present your timeline visually or in writing.',
        hints: [
          'Consider events from all four periods: Old English, Middle English, Early Modern English, and Modern English',
          'Think about invasions, cultural developments, and technological innovations',
        ],
        solution: 'A strong answer should include events such as: 1) The Anglo-Saxon migration (c. 450) — brought Germanic English to Britain; 2) The Viking invasions (8th–11th c.) — added Norse vocabulary and simplified grammar; 3) The Norman Conquest (1066) — introduced French vocabulary and changed the social status of English; 4) The invention of the printing press (1476) — helped standardize spelling; 5) British colonial expansion (17th–20th c.) — spread English worldwide. Each event should include specific examples of linguistic change.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'English has been described as "a language that has never been pure." Discuss this statement. In your answer, explain how different languages have contributed to English at different points in history, and reflect on whether this linguistic "impurity" is a strength or a weakness.',
        hints: [
          'Consider the Germanic foundation, Norse influence, French vocabulary, and Latin/Greek learned words',
          'Think about how borrowing has given English a uniquely rich vocabulary',
          'Consider arguments both for and against linguistic "purity"',
        ],
        solution: 'A strong response should trace the multiple layers of influence: the Germanic base from the Anglo-Saxons, Old Norse from the Vikings, Norman French from the Conquest, Latin and Greek from the Church and scholarship, and global borrowings from colonialism and trade. The argument should recognize that this "impurity" has given English an exceptionally large vocabulary with fine distinctions (e.g., ask/question/interrogate from Germanic/French/Latin). The discussion might also address the irony of purist arguments, since English has always been a hybrid language.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 1.2: The Spread of English
// ============================================================================

export const CHAPTER_INT_ENGELSK_1_2: TextbookChapter = {
  id: 'int-engelsk-1-2',
  courseId: 'int-engelsk',
  chapterNumber: '1.2',
  title: 'The Spread of English',
  description: 'Examine how British colonialism and American global influence transformed English from a national language into the world\'s dominant lingua franca.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analyze the position of English in the world',
    'reflect on the role of English in international contexts and how historical factors contributed to its spread',
  ],
  keyTerms: [
    { term: 'Colonialism', definition: 'The policy of acquiring and maintaining colonies, often imposing the colonizer\'s language and culture on indigenous populations.' },
    { term: 'Soft power', definition: 'The ability to influence others through cultural appeal, values, and institutions rather than military force.' },
    { term: 'Global language', definition: 'A language that is learned and used internationally, achieving a special role in every country.' },
    { term: 'Language policy', definition: 'Official decisions by governments about which languages are used in education, law, and public life.' },
    { term: 'Cultural hegemony', definition: 'The dominance of one culture over others, often through control of media, education, and economic systems.' },
  ],
  content: [
    // --- Intro ---
    {
      id: 'ie-1-2-intro',
      type: 'text',
      content: `## How English Conquered the World

No language in history has achieved the global reach that English has today. Approximately 1.5 billion people speak English worldwide — but only about 400 million of them are native speakers. The remaining 1.1 billion learned English as a second or foreign language.

How did a language from a small island in the North Atlantic become the world's most important means of international communication?

The answer lies in two great waves of expansion:

1. **British colonial expansion (17th–20th centuries)** — English was physically planted around the world
2. **American global dominance (20th–21st centuries)** — English became the language of power, commerce, culture, and technology

These two waves, combined with the rise of the internet, have made English unlike any language that has come before it.`,
    },

    // --- Definition 1: British Colonialism ---
    {
      id: 'ie-1-2-def-1',
      type: 'definition',
      title: 'The First Wave: British Colonialism',
      content: `**The British Empire** at its height governed nearly a quarter of the world's land surface and about a fifth of its population. Wherever British power went, the English language followed.

**Types of colonial English spread:**

1. **Settler colonies:** Large numbers of English speakers migrated and established English as the dominant language
   - Examples: USA, Canada, Australia, New Zealand, South Africa
   - English displaced or marginalized indigenous languages

2. **Exploitation colonies:** Smaller numbers of British administrators used English as the language of government and education
   - Examples: India, Nigeria, Kenya, Singapore, Hong Kong
   - English was layered on top of existing languages, creating bilingual or multilingual societies

3. **Trading posts:** English was used for commercial purposes
   - Examples: West Africa, Southeast Asia, the Middle East

**Legacy:**
- Over 50 countries gained English as an official or co-official language
- English-medium education became a path to social mobility in many former colonies
- Post-independence, many nations retained English as a neutral language uniting diverse linguistic groups`,
    },

    // --- Example ---
    {
      id: 'ie-1-2-example-1',
      type: 'example',
      title: 'India: A Case Study in Colonial Language Legacy',
      problem: 'Why does India, with over 1.4 billion people and 22 officially recognized languages, still use English as an official language?',
      solution: `**Historical context:**
- Britain ruled India for nearly 200 years (1757–1947)
- In 1835, Thomas Macaulay's "Minute on Education" established English as the medium of higher education, aiming to create "a class of persons Indian in blood and colour, but English in tastes, in opinions, in morals and in intellect"
- English became the language of law, administration, and elite education

**Post-independence reasons for retaining English:**
1. **Linguistic neutrality:** India has 22 official languages and hundreds more spoken locally. When Hindi was proposed as the sole national language, southern states (especially Tamil Nadu) protested violently, as Hindi was not their language either
2. **Economic advantage:** English provides access to the global economy — India's IT sector, worth over $200 billion, operates largely in English
3. **Educational gateway:** English-medium schools are highly sought after
4. **Legal tradition:** The entire Indian legal system was built in English

**Result:** India now has the second-largest number of English speakers in the world (over 125 million), and English remains a powerful marker of social class and economic opportunity.`,
    },

    // --- Exercise 1 ---
    {
      id: 'ie-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following best describes why many former British colonies retained English after gaining independence?',
        options: [
          { id: 'a', text: 'Because Britain forced them to keep English through trade agreements', isCorrect: false },
          { id: 'b', text: 'Because English served as a neutral language in linguistically diverse nations and provided access to the global economy', isCorrect: true },
          { id: 'c', text: 'Because the populations preferred English to their own languages', isCorrect: false },
          { id: 'd', text: 'Because no other languages in these countries had a written form', isCorrect: false },
        ],
        solution: 'Many newly independent nations kept English because it served two practical purposes: it was a neutral lingua franca in countries with many competing local languages (avoiding the dominance of one group over others), and it provided continued access to international trade, science, and diplomacy. This was a pragmatic choice, not a sign of cultural preference.',
      },
    },

    // --- Exercise 2 ---
    {
      id: 'ie-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare the language situations in two former British colonies (e.g., India and Nigeria, or Singapore and South Africa). How is English used differently in each country, and what factors explain these differences?',
        hints: [
          'Consider the number and status of local languages in each country',
          'Think about government language policy and education systems',
          'Consider economic factors and the role of English in social mobility',
        ],
        solution: 'A strong answer should compare two specific countries and address: the colonial history, the number and status of local languages, post-independence language policy, the role of English in education and government, and current usage patterns. For example, Singapore uses English as the primary language of education and business in a multilingual society (English, Mandarin, Malay, Tamil), while in Nigeria, English is the official language but most daily communication occurs in local languages like Yoruba, Igbo, and Hausa. The key difference often relates to the degree of urbanization, economic development, and government language policy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Definition 2: American Influence ---
    {
      id: 'ie-1-2-def-2',
      type: 'definition',
      title: 'The Second Wave: American Global Influence',
      content: `**American global dominance** in the 20th and 21st centuries has been the primary force behind English becoming the world's default language of international communication.

**Key domains of American influence:**

1. **Economic power:** The US dollar is the world's reserve currency; American companies (Apple, Google, Amazon, Microsoft) dominate global markets
2. **Military presence:** American military bases in over 70 countries
3. **Popular culture (soft power):**
   - Hollywood produces the most widely distributed films globally
   - American music (pop, hip-hop, rock) dominates global charts
   - American TV series stream worldwide (Netflix, HBO, Disney+)
   - Social media platforms (Facebook, Instagram, TikTok, YouTube) operate primarily in English
4. **Science and technology:**
   - Over 80% of academic journals are published in English
   - The internet was invented in the USA and initially entirely English-language
   - Programming languages use English keywords
5. **Higher education:**
   - American universities dominate global rankings
   - English-medium instruction is expanding worldwide to attract international students

**The result:** Learning English is now seen not as learning someone else's language, but as acquiring an essential skill for participating in the modern global economy.`,
    },

    // --- Exercise 3 ---
    {
      id: 'ie-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-1-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'What percentage of academic journals worldwide are estimated to be published in English?',
        options: [
          { id: 'a', text: 'About 40%', isCorrect: false },
          { id: 'b', text: 'About 60%', isCorrect: false },
          { id: 'c', text: 'Over 80%', isCorrect: true },
          { id: 'd', text: 'About 95%', isCorrect: false },
        ],
        solution: 'Over 80% of academic journals are published in English, making it the overwhelmingly dominant language of scientific research and scholarship. This means that researchers worldwide must publish in English to reach an international audience, regardless of their native language.',
      },
    },

    // --- Exercise 4 ---
    {
      id: 'ie-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'The concept of "soft power" refers to influencing others through culture and values rather than military force. Explain how American soft power has contributed to the spread of English, using at least three specific examples.',
        hints: [
          'Think about movies, music, social media, technology, and education',
          'Consider your own daily exposure to English through American culture',
        ],
        solution: 'American soft power has spread English through: 1) Hollywood and streaming services — films and series watched globally create familiarity with English and American culture; 2) Music — pop, hip-hop, and rock in English dominate global charts, and listeners absorb vocabulary and pronunciation; 3) Social media and technology — platforms like Instagram, YouTube, and TikTok operate in English, and young people worldwide engage with English-language content daily; 4) Higher education — prestigious American universities attract students globally, with English as the medium of instruction; 5) Gaming — the global gaming industry uses English as its default language. These examples show that English spreads not through force but through the attractiveness and accessibility of American cultural products.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Summary ---
    {
      id: 'ie-1-2-summary',
      type: 'text',
      content: `## English in Business, Science, and Technology

Today, English occupies a unique position in several key domains:

**Business:**
- The language of international trade and finance
- Most multinational corporations use English as their working language
- English proficiency is increasingly required for career advancement globally

**Science:**
- The dominant language of academic publishing and international conferences
- Scientists who do not publish in English risk their work being overlooked
- Scientific terminology is overwhelmingly English-based

**Technology:**
- Programming languages use English syntax
- The internet was originally entirely in English (still approximately 60% of web content)
- Technical documentation is usually written first in English

**Aviation and Maritime:**
- English is the mandatory language of international air traffic control (set by ICAO)
- Maritime communication uses English as the standard language

## Summary

The spread of English is the result of historical power — first British imperial power, then American economic and cultural power. English did not become global because it is inherently superior to other languages, but because the nations that spoke it wielded extraordinary political, military, economic, and cultural influence. Understanding this helps us think critically about what the dominance of English means for speakers of other languages around the world.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'ie-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: '"English did not become a global language because it is a better language. It became global because of the power of the people who spoke it." Discuss this statement. Do you agree? What does this tell us about the relationship between language and power?',
        hints: [
          'Consider historical examples of other languages that were once dominant (Latin, French, Arabic)',
          'Think about what would have happened if another country had become the dominant world power',
          'Reflect on whether any language is inherently "better" than another',
        ],
        solution: 'A strong response should argue that no language is inherently superior — languages become global through the power of their speakers, not through linguistic qualities. Historical parallels include Latin (Roman Empire), French (18th-century diplomacy), and Arabic (Islamic Golden Age). If China had colonized the Americas and dominated the 20th century, Mandarin might be the global language today. The statement reveals that language spread is fundamentally about political, economic, and military power, not linguistic merit. Students might also discuss the implications: if English dominance is based on power rather than quality, what obligations do English speakers have toward other languages?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'As a Norwegian student, you are learning English as a foreign language. Research and describe: In how many of your daily activities is English involved? Keep a "language diary" for one day and categorize your English exposure (entertainment, education, technology, social media, etc.). What does this reveal about the position of English in Norway?',
        hints: [
          'Think about your phone, apps, music, streaming services, gaming, school, and social media',
          'Consider whether you could avoid English for an entire day',
          'Reflect on whether this amount of English exposure is positive, negative, or both',
        ],
        solution: 'A thorough answer should catalog multiple domains: social media (Instagram, TikTok, Snapchat — often in English), streaming (Netflix, YouTube), gaming (typically in English), music (mostly English-language), technology (phone interface, apps), education (this course, academic resources), and possibly work or extracurricular activities. The reflection should note that Norway, as part of Kachru\'s Expanding Circle, has exceptionally high English exposure compared to many other countries. Discussion might address whether this constitutes a threat to Norwegian or enriches Norwegian cultural life.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 1.3: Kachru's Model and World Englishes
// ============================================================================

export const CHAPTER_INT_ENGELSK_1_3: TextbookChapter = {
  id: 'int-engelsk-1-3',
  courseId: 'int-engelsk',
  chapterNumber: '1.3',
  title: 'Kachru\'s Model and World Englishes',
  description: 'Explore Braj Kachru\'s Three Circles model for categorizing English speakers worldwide and examine the concept of World Englishes.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analyze the position of English in the world and discuss the difference between English as a native language, English as a second language and English as a foreign language',
    'reflect on the role of English in international contexts',
  ],
  keyTerms: [
    { term: 'Inner Circle', definition: 'Countries where English is the primary native language (e.g., UK, USA, Australia). These are traditionally considered "norm-providing."' },
    { term: 'Outer Circle', definition: 'Countries where English has an official or institutional role due to colonial history (e.g., India, Nigeria, Singapore). These are "norm-developing."' },
    { term: 'Expanding Circle', definition: 'Countries where English is learned as a foreign language with no colonial history (e.g., Norway, China, Brazil). Traditionally "norm-dependent."' },
    { term: 'World Englishes', definition: 'The study of the diverse varieties of English used around the world, recognizing that no single variety is inherently superior.' },
    { term: 'Variety', definition: 'A distinct form of a language associated with a particular region, social group, or context of use.' },
  ],
  content: [
    // --- Intro ---
    {
      id: 'ie-1-3-intro',
      type: 'text',
      content: `## Who Owns English?

With 1.5 billion speakers spread across every continent, a fundamental question arises: Who "owns" the English language? Is the "correct" form of English the one spoken in London? In New York? In New Delhi? In Lagos?

The field of **World Englishes** challenges the idea that there is one "proper" English. Instead, it recognizes that English has diversified into many legitimate varieties around the world, each with its own grammar, pronunciation, vocabulary, and cultural context.

The most influential framework for understanding this diversity was developed by the Indian-American linguist **Braj Kachru** in 1985.`,
    },

    // --- Definition 1: The Three Circles ---
    {
      id: 'ie-1-3-def-1',
      type: 'definition',
      title: 'Kachru\'s Three Circles Model (1985)',
      content: `**Braj Kachru** proposed that English speakers around the world can be categorized into three concentric circles:

**The Inner Circle (~400 million speakers):**
- Countries where English is the primary native language
- Examples: United Kingdom, United States, Canada, Australia, New Zealand, Ireland
- Traditionally seen as **"norm-providing"** — these countries set the standards for "correct" English
- Home to major dictionaries, grammar guides, and testing organizations

**The Outer Circle (~750 million speakers):**
- Countries where English was introduced through colonialism and now has an official or institutional role
- Examples: India, Nigeria, Singapore, Philippines, Kenya, South Africa, Pakistan, Malaysia
- Described as **"norm-developing"** — these countries are creating their own recognized varieties of English
- English exists alongside and interacts with local languages

**The Expanding Circle (~750 million+ learners):**
- Countries where English is learned as a foreign language with no historical colonial connection
- Examples: Norway, Germany, China, Japan, Brazil, Russia, South Korea, Egypt
- Traditionally **"norm-dependent"** — looking to Inner Circle standards
- The fastest-growing group of English users worldwide`,
    },

    // --- Example ---
    {
      id: 'ie-1-3-example-1',
      type: 'example',
      title: 'World Englishes in Practice',
      problem: 'How do the different circles produce different varieties of English? Give specific examples.',
      solution: `**Inner Circle — American English vs. British English:**
- Vocabulary: *apartment/flat, truck/lorry, cookie/biscuit, fall/autumn*
- Spelling: *color/colour, center/centre, organize/organise*
- Grammar: *"I just ate" (AmE) vs. "I've just eaten" (BrE)*

**Outer Circle — Indian English:**
- Unique vocabulary: *"prepone" (opposite of postpone), "do the needful," "passed out" (graduated)*
- Grammar: *"I am having a doubt" (I have a question), "She is knowing the answer"*
- Pronunciation: Retroflex consonants, syllable-timed rhythm

**Outer Circle — Nigerian English (Pidgin):**
- *"How far?" (How are you?), "I no sabi" (I don't know)*
- Nigerian Pidgin English is spoken by over 75 million people

**Expanding Circle — Singlish (Singapore English):**
- While Singapore is in the Outer Circle officially, Singlish shows unique innovations:
- *"Can lah!" (Yes, that's possible), "Don't play play" (Don't mess around)*

These examples show that English adapts creatively to local contexts and that "correctness" depends on context and audience.`,
    },

    // --- Exercise 1 ---
    {
      id: 'ie-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'In Kachru\'s Three Circles model, which circle does Norway belong to?',
        options: [
          { id: 'a', text: 'The Inner Circle, because Norwegians speak English very well', isCorrect: false },
          { id: 'b', text: 'The Outer Circle, because English is taught in all Norwegian schools', isCorrect: false },
          { id: 'c', text: 'The Expanding Circle, because English is learned as a foreign language without a colonial connection', isCorrect: true },
          { id: 'd', text: 'Norway does not fit into any circle', isCorrect: false },
        ],
        solution: 'Norway belongs to the Expanding Circle because English is learned as a foreign language without a colonial connection to Britain. Even though Norwegian proficiency in English is among the highest in the world, the country\'s relationship to English is fundamentally different from countries like India or Nigeria (Outer Circle) where English has an official institutional role due to colonial history.',
      },
    },

    // --- Exercise 2 ---
    {
      id: 'ie-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Classify the following countries into Inner Circle, Outer Circle, or Expanding Circle, and explain your reasoning for each: Japan, South Africa, Ireland, Brazil, Singapore, New Zealand.',
        hints: [
          'Ask yourself: Is English the native language? Was there British colonization? Or is English learned as a foreign language?',
          'Some countries may be debatable — explain why',
        ],
        solution: 'Inner Circle: Ireland (native English-speaking, though Irish is also official), New Zealand (native English-speaking settler colony). Outer Circle: South Africa (English is one of 11 official languages, introduced through colonialism), Singapore (English is the primary language of government and education, inherited from British rule). Expanding Circle: Japan (English is learned as a foreign language, no colonial connection), Brazil (English is learned as a foreign language, colonized by Portugal not Britain). Students might note that South Africa and Singapore are interesting edge cases — South Africa has a large native English-speaking population, and Singapore\'s English proficiency is so high it sometimes functions like an Inner Circle country.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Definition 2: Critique ---
    {
      id: 'ie-1-3-def-2',
      type: 'definition',
      title: 'Critique and Limitations of the Three Circles Model',
      content: `While Kachru's model remains widely used, it has been extensively criticized:

**1. Rigid boundaries:**
- The circles suggest clear distinctions, but reality is messier
- Where does South Africa belong? It has both native speakers and second-language speakers
- Countries like the Netherlands and Scandinavia have such high English proficiency that they are arguably moving from the Expanding to the Outer Circle

**2. Internal diversity ignored:**
- The USA (Inner Circle) contains millions of speakers for whom English is a second language
- India (Outer Circle) has regions where English is barely spoken and others where it is dominant

**3. Implied hierarchy:**
- The model can suggest that Inner Circle English is the "real" or "correct" standard
- This marginalizes Outer Circle varieties that have developed their own norms and literatures
- It positions Expanding Circle speakers as eternally "learning" rather than "using"

**4. Static model in a dynamic world:**
- Global migration and digital communication blur traditional categories
- A Nigerian living in London, or a Japanese person working in Singapore, does not fit neatly into one circle

**Alternative frameworks:**
- Some scholars prefer concepts like "English as a Lingua Franca" or "translanguaging" that focus on how English is actually used rather than where speakers come from`,
    },

    // --- Exercise 3 ---
    {
      id: 'ie-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-1-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Which of the following is a valid criticism of Kachru\'s Three Circles model?',
        options: [
          { id: 'a', text: 'It was developed too recently to be reliable', isCorrect: false },
          { id: 'b', text: 'It implies a hierarchy where Inner Circle English is the "correct" standard', isCorrect: true },
          { id: 'c', text: 'It includes too many circles, making it overly complicated', isCorrect: false },
          { id: 'd', text: 'It focuses too much on non-native speakers', isCorrect: false },
        ],
        solution: 'A major criticism is that the model implies a hierarchy: the Inner Circle "provides" norms, the Outer Circle "develops" them, and the Expanding Circle "depends" on them. This suggests that British and American English are the standard against which all other varieties are measured, which marginalizes the legitimate and creative varieties that have developed in the Outer and Expanding Circles.',
      },
    },

    // --- Exercise 4 ---
    {
      id: 'ie-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Many Scandinavian countries (Norway, Sweden, Denmark) have extremely high levels of English proficiency. Some linguists argue these countries are shifting from the Expanding Circle toward the Outer Circle. Do you agree? What evidence would support or challenge this claim?',
        hints: [
          'Consider: Is English used in official contexts? In education? In daily life?',
          'Think about whether English has an institutional role in Norway',
          'Consider the difference between proficiency and official status',
        ],
        solution: 'Arguments for the shift: Norwegians consume most media in English, many university courses are taught in English, English is used daily in workplaces (especially in technology and business), and English proficiency scores are among the highest globally. Arguments against: English has no official status in Norway, Norwegian remains the dominant language of government, law, and daily life; proficiency is not the same as institutional role; and Scandinavians choose to use English rather than having it imposed through colonialism. The distinction is important — high proficiency does not automatically change a country\'s circle, but it does suggest that the traditional categories are becoming less meaningful.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Summary ---
    {
      id: 'ie-1-3-summary',
      type: 'text',
      content: `## Summary

Kachru's Three Circles model provides a useful starting point for understanding the global distribution of English speakers. It helps us distinguish between countries where English is a native language, where it has an institutional role due to colonialism, and where it is learned as a foreign language.

However, the model has significant limitations. The boundaries between circles are increasingly blurred, the model can imply an unhelpful hierarchy, and it struggles to account for the dynamic, mobile, and digital nature of modern English use.

The concept of **World Englishes** reminds us that there is no single "correct" English. Each variety reflects its speakers' cultural context, linguistic heritage, and communicative needs. As we move forward, the question is not "Which English is best?" but rather "Which English is appropriate for this context?"`,
    },

    // --- Samleoppgaver ---
    {
      id: 'ie-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Choose one variety of English from the Outer Circle (e.g., Indian English, Nigerian English, Singaporean English). Research and present: What are its distinctive features? How did it develop? Is it recognized as a legitimate variety? Use specific examples of vocabulary, grammar, or pronunciation.',
        hints: [
          'Look for features that differ from British or American English',
          'Consider the influence of local languages on the variety',
          'Think about whether this variety has its own literature, media, or dictionaries',
        ],
        solution: 'A strong answer should describe a specific variety in detail. For example, Indian English features include: vocabulary innovations ("prepone," "do the needful," "passed out" for graduated), grammatical differences (progressive tenses with stative verbs: "I am knowing"), pronunciation (retroflex consonants, syllable-timed rhythm), and pragmatic norms (indirect speech acts, use of "sir/madam"). The answer should note that Indian English has a rich literary tradition (Salman Rushdie, Arundhati Roy), its own dictionaries, and serves as the medium of education and governance for over a billion people. It is a fully legitimate variety, not a deficient version of British English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: '"There is no such thing as correct English — only appropriate English." Discuss this statement in relation to Kachru\'s model and the concept of World Englishes. In your answer, consider: Should students in Norway aim for British or American English, or is any clear and effective English acceptable?',
        hints: [
          'Think about the difference between formal academic English and informal communication',
          'Consider whether "native speaker" should be the standard for non-native learners',
          'Reflect on your own English: do you use British, American, or a mix?',
        ],
        solution: 'A nuanced response should recognize that "correctness" depends on context. In formal academic writing or international business, certain conventions are expected. But in everyday communication, the primary goal is effective understanding. The World Englishes perspective suggests that Indian, Nigerian, or Norwegian-inflected English are not "wrong" but different. Students might argue that while having a strong command of a standard variety (British or American) is useful, it should not come at the cost of viewing other varieties as inferior. Many students in Norway use a mix of British and American features — this is natural and acceptable. The key is communicative effectiveness and awareness of audience.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 1.4: English as a Lingua Franca
// ============================================================================

export const CHAPTER_INT_ENGELSK_1_4: TextbookChapter = {
  id: 'int-engelsk-1-4',
  courseId: 'int-engelsk',
  chapterNumber: '1.4',
  title: 'English as a Lingua Franca',
  description: 'Explore how English functions as a lingua franca in international communication, its distinctive features, and the communication strategies that make it effective.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflect on the role of English in international contexts',
    'analyze how English is used as a lingua franca and what this means for communication',
  ],
  keyTerms: [
    { term: 'Lingua franca', definition: 'A language used for communication between people who do not share a native language. Historically, the term referred to a Mediterranean trade language.' },
    { term: 'ELF (English as a Lingua Franca)', definition: 'The use of English for communication between speakers who have different first languages. Focuses on successful communication rather than native-speaker norms.' },
    { term: 'Accommodation', definition: 'The process of adjusting one\'s speech to be more understandable to the listener, e.g., speaking more slowly, avoiding idioms, or rephrasing.' },
    { term: 'Code-switching', definition: 'Alternating between two or more languages within a conversation or even a single sentence.' },
    { term: 'Intelligibility', definition: 'The degree to which speech is understood by a listener. In ELF contexts, this is prioritized over native-like pronunciation.' },
  ],
  content: [
    // --- Intro ---
    {
      id: 'ie-1-4-intro',
      type: 'text',
      content: `## A Language for Everyone

Consider this scenario: A Norwegian engineer, a Brazilian marketing director, and a South Korean project manager meet at a conference in Dubai. None of them shares a native language. What language do they use?

Almost certainly, **English**.

This is English functioning as a **lingua franca** — a shared language used for communication between people with different mother tongues. Today, the majority of English conversations worldwide take place between non-native speakers. In fact, it is estimated that for every native English speaker, there are approximately three non-native users of the language.

This has profound implications. If most English is spoken between non-native speakers, should native-speaker norms (British or American English) still be the standard? Or should we rethink what "good English" means?`,
    },

    // --- Definition 1: What is ELF? ---
    {
      id: 'ie-1-4-def-1',
      type: 'definition',
      title: 'English as a Lingua Franca (ELF)',
      content: `**English as a Lingua Franca (ELF)** refers to the use of English for communication between speakers who have different first languages. It was developed as a research field primarily by linguist **Jennifer Jenkins** (pronunciation), **Barbara Seidlhofer** (grammar and vocabulary), and **Anna Mauranen** (academic ELF).

**Key principles of ELF:**

1. **Communication-focused:** The goal is successful communication, not sounding like a native speaker
2. **Fluid and flexible:** ELF adapts to the needs of its users in each interaction
3. **Multilingual resource:** ELF speakers draw on all their linguistic knowledge, not just English
4. **Not a variety:** ELF is not a fixed variety of English but a way of using English that varies depending on the speakers involved

**Who uses ELF?**
- Business professionals in multinational companies
- Scientists at international conferences
- Diplomats at the United Nations and EU
- Tourists and travelers worldwide
- Students in international programs
- Online communities spanning multiple countries

**Important distinction:**
ELF is not "bad English" or "broken English." It is a legitimate, effective form of communication used by competent multilingual speakers.`,
    },

    // --- Example ---
    {
      id: 'ie-1-4-example-1',
      type: 'example',
      title: 'ELF in Action: A Business Meeting',
      problem: 'What does English as a Lingua Franca look like in practice? How does it differ from native-speaker English?',
      solution: `**Scenario:** A video conference between a German manager, a Japanese engineer, and an Italian designer.

**Sample ELF dialogue:**

*German:* "So, I think we need to discuss about the timeline for the new product."
*Japanese:* "Yes, I agree. The deadline is very tight. We must to finish testing by March."
*Italian:* "I have some concern about the design. Can we make more discussion on this?"
*German:* "Of course. Please explain what is the problem."

**ELF features visible in this exchange:**
1. "Discuss about" — adding preposition (standard English: "discuss the timeline")
2. "Must to finish" — regularizing modal verb (standard: "must finish")
3. "Make more discussion" — using general verbs (standard: "discuss this further")
4. "What is the problem" — word order in indirect question (standard: "what the problem is")

**Key point:** Despite these differences from standard English, the communication is completely successful. All participants understand each other perfectly. In ELF, these are not "errors" — they are features of effective multilingual communication.`,
    },

    // --- Exercise 1 ---
    {
      id: 'ie-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What is the primary goal of English as a Lingua Franca (ELF)?',
        options: [
          { id: 'a', text: 'To sound as close to a native British or American speaker as possible', isCorrect: false },
          { id: 'b', text: 'To achieve successful communication between speakers with different first languages', isCorrect: true },
          { id: 'c', text: 'To replace all other languages with English', isCorrect: false },
          { id: 'd', text: 'To create a single standardized form of English for all non-native speakers', isCorrect: false },
        ],
        solution: 'The primary goal of ELF is successful communication between speakers with different first languages. Unlike traditional English language teaching, which often focuses on approximating native-speaker norms, ELF prioritizes intelligibility, effectiveness, and mutual understanding. The focus is on what speakers do with English, not on how closely they match a native-speaker model.',
      },
    },

    // --- Exercise 2 ---
    {
      id: 'ie-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Read the ELF dialogue in the example above. Identify three features that differ from standard British or American English. For each, explain why the deviation does NOT prevent successful communication.',
        hints: [
          'Look at grammar, vocabulary choices, and sentence structure',
          'Ask yourself: Can I understand what the speaker means despite the difference?',
        ],
        solution: 'Three features: 1) "Discuss about" — adding a preposition after "discuss" is non-standard but completely clear, as "about" reinforces the meaning of the verb. 2) "Must to finish" — regularizing modal verbs by adding "to" follows the pattern of most other English verbs ("need to finish," "have to finish") and is immediately understandable. 3) "Make more discussion" — using a general verb + noun instead of a specific verb is a common ELF strategy that is perfectly clear in context. None of these features prevents understanding because the core meaning is preserved and the context supports interpretation. Communication succeeds because meaning, not form, is prioritized.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Definition 2: Communication Strategies ---
    {
      id: 'ie-1-4-def-2',
      type: 'definition',
      title: 'Communication Strategies in ELF',
      content: `Successful ELF communication relies on a set of strategies that competent multilingual speakers use:

**1. Accommodation:**
- Adjusting your speech to your listener (slower pace, clearer pronunciation, simpler vocabulary)
- Avoiding slang, idioms, and cultural references that may not be understood
- Example: Saying "I agree" instead of "You've hit the nail on the head"

**2. Repetition and Rephrasing:**
- Repeating key points in different words to ensure understanding
- "So what I mean is..." or "In other words..."
- Asking for confirmation: "Does that make sense?"

**3. Code-switching:**
- Switching between languages when both speakers share another language
- Using a word from another language when the English word is unknown
- This is a sign of multilingual competence, not failure

**4. Let-it-pass:**
- Not correcting every error or asking for clarification on every unclear word
- Allowing minor misunderstandings to resolve themselves through context
- Focusing on the overall message rather than individual words

**5. Make-it-explicit:**
- Being very clear and specific rather than relying on implied meaning
- Avoiding indirect speech acts that depend on cultural knowledge
- Stating conclusions directly rather than expecting listeners to infer them`,
    },

    // --- Exercise 3 ---
    {
      id: 'ie-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-1-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'A Swedish businesswoman avoids saying "We need to get the ball rolling" to her Chinese colleague and instead says "We need to start the project now." Which ELF communication strategy is she using?',
        options: [
          { id: 'a', text: 'Code-switching', isCorrect: false },
          { id: 'b', text: 'Let-it-pass', isCorrect: false },
          { id: 'c', text: 'Accommodation', isCorrect: true },
          { id: 'd', text: 'Make-it-explicit', isCorrect: false },
        ],
        solution: 'This is accommodation — adjusting your speech to be more understandable to your listener. The idiom "get the ball rolling" is culture-specific and may not be understood by a non-native speaker who has not encountered it. By rephrasing in clear, literal language ("start the project now"), the Swedish businesswoman ensures her message is understood. This is a hallmark of skilled ELF communication.',
      },
    },

    // --- Exercise 4 ---
    {
      id: 'ie-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Think about a situation where you have used English with someone who is not a native English speaker (or imagine such a situation). Describe the interaction and identify at least two communication strategies that were used (or could have been used) to ensure successful communication.',
        hints: [
          'Think about travel experiences, online gaming, social media, or school exchanges',
          'Consider: Did you simplify your language? Repeat things? Use gestures?',
          'Reflect on whether "perfect grammar" was necessary for understanding',
        ],
        solution: 'A good answer should describe a specific situation (real or imagined) and identify concrete strategies. For example: "During a school exchange, I spoke English with a French student. I used accommodation by avoiding Norwegian-English expressions and speaking more slowly. I used repetition and rephrasing when explaining something about Norwegian culture, saying the same thing in simpler words when I saw confusion. We also used code-switching, occasionally using French words that I knew. The conversation was successful even though neither of us spoke \'perfect\' English — what mattered was that we understood each other."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Summary ---
    {
      id: 'ie-1-4-summary',
      type: 'text',
      content: `## Common Features of ELF

Research by Jennifer Jenkins and others has identified several features that commonly occur in ELF communication:

**Pronunciation:**
- Most consonant sounds are important for intelligibility (especially /p/, /t/, /k/, /b/, /d/, /g/)
- The "th" sounds (/θ/ and /ð/) are frequently replaced without causing misunderstanding
- Nuclear stress (emphasizing the most important word) is crucial for intelligibility

**Grammar:**
- Dropping the third-person singular -s ("She work here" instead of "She works here")
- Using "who" and "which" interchangeably
- Regularizing verb forms ("He goed" instead of "He went")
- Adding prepositions ("discuss about," "explain about")
- Using general verbs (make, do, have, take) instead of specific ones

**Vocabulary:**
- Preferring transparent, internationally understood words
- Creating new words through analogy ("prepone" as opposite of "postpone")
- Using shorter, simpler words when possible

## Summary

English as a Lingua Franca represents a fundamental shift in how we think about English. Instead of measuring all English against a native-speaker standard, ELF recognizes that the majority of English use worldwide is between non-native speakers, and that successful communication — not grammatical perfection — is the true measure of language competence. For Norwegian students, this is liberating: your English does not need to be "perfect" to be effective. What matters is your ability to communicate clearly, adapt to your audience, and participate in the global conversation.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'ie-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Some language teachers argue that ELF lowers standards and that students should still aim for native-speaker competence. Others argue that ELF is more realistic and appropriate for most learners. Write an essay (300-500 words) presenting both sides of this debate and giving your own reasoned opinion.',
        hints: [
          'Consider: What does "standard" mean? Who decides?',
          'Think about different contexts: academic writing vs. casual conversation vs. business meetings',
          'Consider your own goals: Do you want to sound British/American, or do you want to communicate effectively?',
        ],
        solution: 'A strong essay should present both perspectives fairly. Arguments for native-speaker standards: provides a clear target, necessary for academic writing and professional contexts, native-speaker proficiency opens more doors, students deserve high expectations. Arguments for ELF: more realistic for the majority of learners, most English use is between non-native speakers, native-speaker norms can be demotivating and unnecessary, ELF promotes confidence and communication skills. A nuanced opinion might recognize that both have value: aiming for a high level of proficiency while also developing the communication strategies and flexibility that characterize effective ELF users.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Role play: Work with a partner. One of you is a Norwegian architect, the other is a Turkish city planner. You are meeting for the first time at an international urban development conference in Berlin. Conduct a five-minute conversation in English about a joint sustainability project. Afterward, reflect: What communication strategies did you use? Were there any moments of misunderstanding, and how did you resolve them?',
        hints: [
          'Try to use accommodation, rephrasing, and explicit communication',
          'Pay attention to how you adjust your language during the conversation',
          'Consider: Did you avoid idioms? Did you check for understanding?',
        ],
        solution: 'This exercise is best completed through actual practice. In the reflection, students should identify specific strategies used: accommodation (simplifying language, speaking clearly), rephrasing (saying the same thing in different words), checking for understanding ("Does that make sense?"), and possibly code-switching or using gestures. Students should reflect on whether they found themselves naturally adjusting their English and what this reveals about ELF communication. The key insight is that effective ELF communication requires not just language knowledge but communicative competence — the ability to adapt to your interlocutor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 1.5: The Debate: Linguistic Imperialism
// ============================================================================

export const CHAPTER_INT_ENGELSK_1_5: TextbookChapter = {
  id: 'int-engelsk-1-5',
  courseId: 'int-engelsk',
  chapterNumber: '1.5',
  title: 'The Debate: Linguistic Imperialism',
  description: 'Examine the controversial question of whether the global dominance of English threatens other languages and cultures, and explore arguments on both sides.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analyze the position of English in the world',
    'reflect on the role of English in international contexts and its impact on other languages and cultures',
    'discuss ethical dimensions of global language spread',
  ],
  keyTerms: [
    { term: 'Linguistic imperialism', definition: 'The idea that the dominance of one language (especially English) over others is a form of cultural and political control, as argued by Robert Phillipson.' },
    { term: 'Language death', definition: 'The process by which a language ceases to be spoken, typically when its last native speakers die without passing the language to the next generation.' },
    { term: 'Language rights', definition: 'The human rights of individuals and communities to use, maintain, and develop their own languages.' },
    { term: 'Domain loss', definition: 'The process by which a language is gradually replaced by another in specific social domains such as education, science, or business.' },
    { term: 'Linguistic diversity', definition: 'The range of different languages spoken in a given area or worldwide. Currently, approximately 7,000 languages exist, but many are endangered.' },
  ],
  content: [
    // --- Intro ---
    {
      id: 'ie-1-5-intro',
      type: 'text',
      content: `## Does English Threaten Other Languages?

There are approximately 7,000 languages spoken in the world today. Linguists estimate that by the end of this century, between 50% and 90% of them will have disappeared. Many blame the global dominance of English as a major factor in this language extinction crisis.

But is this fair? Does learning and using English necessarily come at the expense of other languages? Or can English coexist with and even support linguistic diversity?

These are not just academic questions. They affect real communities, real cultures, and real people — including Norwegians, who must navigate the relationship between their own language and the global dominance of English.

**The central debate:**
- **Phillipson's view:** The spread of English is a form of imperialism that threatens linguistic diversity
- **Counter-view:** English is a neutral tool that people freely choose to learn and use
- **The reality:** The truth is more complex than either position suggests`,
    },

    // --- Definition 1: Linguistic Imperialism ---
    {
      id: 'ie-1-5-def-1',
      type: 'definition',
      title: 'Phillipson\'s Linguistic Imperialism',
      content: `In 1992, Danish linguist **Robert Phillipson** published *Linguistic Imperialism*, a groundbreaking and controversial book that argued the global spread of English is not natural or neutral but is the result of deliberate policies that serve the interests of English-speaking powers.

**Phillipson's core argument:**
- The promotion of English worldwide was (and is) a deliberate strategy by the UK and USA
- Organizations like the British Council and USAID actively promote English to advance political and economic interests
- English spreads at the expense of other languages, contributing to their decline and death
- The dominance of English creates structural inequality: native speakers have permanent advantages

**Five tenets of English language teaching that Phillipson challenges:**
1. English is best taught monolingually (only in English)
2. The ideal teacher is a native speaker
3. The earlier English is introduced, the better
4. The more English is taught, the better the results
5. Other languages hinder English learning

**Phillipson argues** these are not proven facts but ideological beliefs that serve the interests of the English-speaking world and the English language teaching industry (worth over $60 billion globally).`,
    },

    // --- Example ---
    {
      id: 'ie-1-5-example-1',
      type: 'example',
      title: 'Language Death: Real-World Examples',
      problem: 'What happens when a language dies? Give examples of languages that have been lost or are endangered due to the dominance of larger languages.',
      solution: `**Languages lost:**
- **Eyak** (Alaska): The last fluent speaker, Marie Smith Jones, died in 2008. With her death, a unique way of understanding the world disappeared forever.
- **Livonian** (Latvia): Once spoken by thousands along the Baltic coast, the last native speaker died in 2013.
- **Manx** (Isle of Man): The last native speaker died in 1974, though revitalization efforts have since created new speakers.

**Languages currently endangered:**
- Approximately 3,000 of the world's 7,000 languages are classified as endangered
- **Sami languages** (Norway, Sweden, Finland): Several Sami varieties have fewer than 100 speakers
- **Aboriginal Australian languages:** Of the estimated 250 languages that existed before colonization, fewer than 20 are being learned by children
- **Irish (Gaeilge):** Despite being Ireland's first official language, only about 70,000 people use it daily

**What is lost when a language dies?**
- A unique system for categorizing and understanding the world
- Oral literature, songs, and cultural knowledge passed down through generations
- Traditional ecological knowledge embedded in vocabulary and grammar
- A community's identity, history, and connection to place

**The connection to English:** In many cases, the shift to English (or another dominant language) occurs because speakers see greater economic opportunity in the larger language and stop teaching their native language to their children.`,
    },

    // --- Exercise 1 ---
    {
      id: 'ie-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'According to Robert Phillipson, the global spread of English is:',
        options: [
          { id: 'a', text: 'A natural and inevitable result of globalization', isCorrect: false },
          { id: 'b', text: 'The result of deliberate policies that serve English-speaking powers', isCorrect: true },
          { id: 'c', text: 'Entirely beneficial for all people worldwide', isCorrect: false },
          { id: 'd', text: 'A process that has now stopped and is reversing', isCorrect: false },
        ],
        solution: 'Phillipson argues that the spread of English is not natural or neutral but the result of deliberate policies by English-speaking countries, organizations like the British Council, and the global English language teaching industry. He sees this as a form of cultural imperialism that serves the political and economic interests of English-speaking powers while disadvantaging speakers of other languages.',
      },
    },

    // --- Exercise 2 ---
    {
      id: 'ie-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Phillipson identifies five common beliefs about English language teaching that he considers ideological rather than factual (e.g., "The ideal teacher is a native speaker"). Choose two of these beliefs and explain: Why might they be wrong? Who benefits from these beliefs?',
        hints: [
          'Think about whether research supports these claims',
          'Consider who profits from the global English teaching industry',
          'Think about your own experience: Is a native speaker always a better teacher?',
        ],
        solution: 'For example: 1) "The ideal teacher is a native speaker" — Research shows that non-native teachers often have advantages: they understand learners\' struggles, can use the students\' first language strategically, and serve as realistic role models. This belief benefits native English speakers by giving them automatic professional advantages. 2) "English is best taught monolingually" — Research on bilingual education shows that using students\' first language supports learning, not hinders it. This belief benefits English-speaking countries by promoting total immersion programs and native-speaker teachers, while marginalizing the role of local languages and local teachers.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Definition 2: Counter-Arguments ---
    {
      id: 'ie-1-5-def-2',
      type: 'definition',
      title: 'Counter-Arguments and Alternative Perspectives',
      content: `Not everyone agrees with Phillipson. Several important counter-arguments have been raised:

**1. Agency and choice:**
- People learn English by choice, not coercion — they see real benefits (jobs, education, travel)
- Parents actively want English education for their children
- Framing English learners as victims of imperialism denies their agency

**2. English belongs to everyone:**
- English is no longer the "property" of Britain or the USA
- World Englishes demonstrate that people adapt English to their own cultures
- Indian English, Nigerian English, and Singlish are creative, not deficient

**3. English as a neutral tool:**
- In multilingual countries, English can serve as a neutral lingua franca that does not favor any local ethnic group
- Example: In India, English is often preferred over Hindi because Hindi favors the north

**4. Multilingualism, not replacement:**
- Learning English does not necessarily mean abandoning other languages
- Many people are multilingual — they add English to their repertoire
- Scandinavians speak excellent English while maintaining their own languages

**5. Language death has many causes:**
- Languages die for complex reasons (urbanization, economic pressure, government policies)
- English is not always the direct cause — many endangered languages are threatened by other dominant languages (Mandarin, Spanish, Arabic, Russian)
- Language preservation requires active government and community effort, not just reducing English`,
    },

    // --- Exercise 3 ---
    {
      id: 'ie-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-1-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Which of the following is a counter-argument to Phillipson\'s theory of linguistic imperialism?',
        options: [
          { id: 'a', text: 'English is inherently superior to other languages', isCorrect: false },
          { id: 'b', text: 'People freely choose to learn English because of the real economic and social benefits it provides', isCorrect: true },
          { id: 'c', text: 'All languages other than English are going extinct', isCorrect: false },
          { id: 'd', text: 'Native English speakers are naturally more intelligent', isCorrect: false },
        ],
        solution: 'A key counter-argument to linguistic imperialism is that people exercise agency when they choose to learn English. They are not passive victims but active decision-makers who see real benefits in English proficiency — better job opportunities, access to higher education, participation in the global economy, and consumption of international media. This argument acknowledges the structural advantages of English while respecting people\'s ability to make informed choices about their language use.',
      },
    },

    // --- Exercise 4 ---
    {
      id: 'ie-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: '"Domain loss" refers to the process by which a language is gradually replaced by another in specific areas of society. Identify three domains in Norway where English is increasingly used instead of Norwegian. For each, explain whether you think this represents a threat to the Norwegian language or a natural development.',
        hints: [
          'Think about: education (university), business, entertainment, science, technology, social media',
          'Consider whether Norwegian has adequate terminology in all these areas',
          'Think about what "threat" means — can a language survive if it is not used in all domains?',
        ],
        solution: 'Three domains with increasing English use in Norway: 1) Higher education — many university courses, especially at the master\'s level, are taught in English; most academic publications are in English. 2) Technology and business — many Norwegian companies use English as their working language, especially in tech and international business. 3) Entertainment and social media — most streaming content, gaming, and social media engagement is in English. Whether this is a threat depends on perspective: some argue Norwegian can survive as a language of daily life even if English dominates specialized domains; others worry that if young Norwegians lack Norwegian vocabulary for science, technology, and higher education, the language will gradually lose status and eventually vitality.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Summary ---
    {
      id: 'ie-1-5-summary',
      type: 'text',
      content: `## Language Rights and the Way Forward

The debate about linguistic imperialism raises fundamental questions about **language rights** — the right of individuals and communities to use, maintain, and develop their own languages.

**Key principles of language rights:**
- Every language has equal value and dignity
- Communities have the right to educate their children in their own language
- Governments should protect and promote linguistic diversity
- Language policy should be based on research, not ideology

**Practical approaches to balancing English and linguistic diversity:**
1. **Additive multilingualism:** Promoting English as an additional language, not a replacement for local languages
2. **Mother-tongue education:** Teaching children first in their own language, then adding English
3. **Language documentation:** Recording endangered languages before they disappear
4. **Parallel language use:** Using both local languages and English in different domains (as Norway does)
5. **Terminology development:** Creating new terms in local languages for science, technology, and other fields

## Summary

The debate about linguistic imperialism has no easy answers. Phillipson raises valid concerns about the structural inequalities created by English dominance, the loss of linguistic diversity, and the deliberate promotion of English for political and economic purposes. But critics rightly point out that English can also be a tool for empowerment, that people have agency in their language choices, and that multilingualism — not monolingualism — is the reality for most English users worldwide.

As Norwegian students of English, you occupy an interesting position. You benefit from learning English while also maintaining a strong national language. Understanding this debate helps you think critically about your own relationship with English and about the responsibilities that come with speaking the world's most powerful language.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'ie-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Organize a class debate on the following motion: "The global dominance of English does more harm than good." Prepare arguments for both sides. In your preparation, consider: effects on linguistic diversity, economic opportunity, cultural identity, international cooperation, and social equality.',
        hints: [
          'Research specific examples of languages threatened by English',
          'Also research examples of how English has enabled positive outcomes',
          'Think about who benefits and who loses from English dominance',
          'Consider whether the question is too simplistic — are there more nuanced positions?',
        ],
        solution: 'For the motion (English does more harm): Language death and loss of cultural knowledge; structural inequality favoring native speakers; domain loss in countries like Norway; loss of linguistic diversity reduces humanity\'s collective cognitive resources; English dominance reflects and reinforces economic inequality. Against the motion (English does more good): Enables international cooperation and understanding; provides access to education, science, and economic opportunity; serves as a neutral lingua franca in multilingual societies; allows marginalized voices to reach global audiences; the internet and English together have democratized access to knowledge. A nuanced position might argue that the question is not whether English is good or bad, but how we manage its dominance to maximize benefits while protecting linguistic diversity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Write a reflective essay (400-600 words) on your personal relationship with English. Address the following: How and why did you learn English? How do you use English in your daily life? Do you think English has affected your relationship with the Norwegian language? Based on what you have learned in this section, how do you view the role of English in your life and in the world?',
        hints: [
          'Be personal and honest — this is a reflection, not a research paper',
          'Draw on the concepts from this section: linguistic imperialism, ELF, World Englishes, language rights',
          'Think about both the benefits and the costs of English in your life',
          'Consider how your perspective might differ from someone in a country where English is less accessible',
        ],
        solution: 'A strong reflective essay should demonstrate personal engagement with the topic and draw on concepts from the section. It might discuss: early exposure to English through media and gaming; the transition from learning English in school to using it naturally; the role of English in entertainment, social media, and potentially future career plans; awareness of how much daily life involves English; and an honest reflection on whether this has affected the student\'s Norwegian vocabulary or expression. The essay should show critical thinking — recognizing that the student\'s positive relationship with English is partly a product of privilege (living in a wealthy country with excellent English education) and that not everyone has the same access or experience.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Export all Del 1 chapters
// ============================================================================

export const INT_ENGELSK_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_INT_ENGELSK_1_1,
  CHAPTER_INT_ENGELSK_1_2,
  CHAPTER_INT_ENGELSK_1_3,
  CHAPTER_INT_ENGELSK_1_4,
  CHAPTER_INT_ENGELSK_1_5,
];
