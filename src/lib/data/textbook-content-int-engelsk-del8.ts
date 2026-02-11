/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 8.1: Language Change and Evolution
// ============================================================================

export const CHAPTER_INT_ENGELSK_8_1: TextbookChapter = {
  id: 'int-engelsk-8-1',
  courseId: 'int-engelsk',
  chapterNumber: '8.1',
  title: 'Language Change and Evolution',
  description: 'Explore how languages change over time through neologisms, semantic shift, grammatical evolution, and the forces that drive linguistic transformation.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analyze and discuss language change and variation in English',
    'reflect on how social, cultural, and technological factors influence language development',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-8-1-intro',
      type: 'text',
      content: `## The Living Language

English is not a museum artifact sealed behind glass. It is a living, breathing organism that grows, adapts, and transforms with every generation that speaks it. The English of Shakespeare would baffle a modern teenager, and the English you speak today would be unrecognizable to the Anglo-Saxons who first brought the language to Britain over 1,500 years ago.

Consider this: the word "nice" once meant "foolish" or "ignorant" in the 13th century. "Awful" used to mean "worthy of awe" -- a positive quality. "Meat" once referred to all food, not just animal flesh. These shifts happened gradually, driven by millions of small choices made by ordinary speakers.

**Why does language change?**

Language changes because the world changes. New inventions require new words. Social movements reshape how we talk about identity. Contact between cultures creates borrowings and blends. And each generation of speakers subtly reshapes the language they inherit, sometimes deliberately, sometimes without even noticing.

**Key Areas of Language Change:**
- **Vocabulary (Lexical change):** New words are coined, old words fade away
- **Meaning (Semantic change):** Existing words shift in meaning over time
- **Grammar (Syntactic change):** Sentence structures and rules evolve
- **Pronunciation (Phonological change):** The sounds of language shift across generations
- **Spelling and writing conventions:** Written norms adapt to new realities

In this chapter, we will examine how and why English changes, and what this tells us about the relationship between language and society.`,
    },
    // --- DEFINITION 1: Neologisms ---
    {
      id: 'ie-8-1-def-1',
      type: 'definition',
      title: 'Neologisms: The Birth of New Words',
      content: `A **neologism** is a newly coined word or expression that has entered the language. English gains hundreds of new words every year, and major dictionaries regularly update their entries to reflect this growth.

**How new words are created:**

**1. Coinage (Invention)**
Creating a word from scratch. This is actually quite rare.
- *googol* (the number 10^100, coined by a 9-year-old in 1920)
- *quark* (borrowed from James Joyce's "Finnegans Wake" by physicist Murray Gell-Mann)

**2. Compounding**
Combining two existing words to create a new meaning.
- *smartphone, livestream, crowdfunding, ghostwriter, brainstorm*

**3. Blending (Portmanteau)**
Merging parts of two words into one.
- *brunch* (breakfast + lunch), *smog* (smoke + fog), *podcast* (iPod + broadcast), *vlog* (video + blog)

**4. Clipping**
Shortening an existing word.
- *app* (application), *ad* (advertisement), *flu* (influenza), *fridge* (refrigerator)

**5. Acronyms and Initialisms**
Using first letters to form a new word.
- *FOMO* (fear of missing out), *LOL* (laughing out loud), *YOLO* (you only live once), *FAQ* (frequently asked questions)

**6. Borrowing (Loanwords)**
Adopting words from other languages.
- *tsunami* (Japanese), *kindergarten* (German), *avatar* (Sanskrit), *safari* (Swahili)

**7. Conversion (Zero Derivation)**
Using an existing word as a different part of speech without changing its form.
- *to google* (verb from noun), *to bookmark* (verb from noun), *a must* (noun from verb)

**8. Eponyms**
Words derived from people's names.
- *pasteurize* (Louis Pasteur), *boycott* (Captain Boycott), *algorithm* (al-Khwarizmi)`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-8-1-example-1',
      type: 'example',
      title: 'Example: Tracking a Neologism\'s Journey',
      problem: 'How did the word "selfie" enter the English language and become officially recognized?',
      solution: `**The Life Story of "Selfie":**

**2002:** The earliest known use appears in an Australian internet forum. A man posted a photo of his injured lip with the caption: "Sorry about the focus, it was a selfie." The Australian English tendency to add "-ie" to words (barbie, arvo, brekkie) likely influenced the formation.

**2004-2010:** The word slowly spreads through online communities, particularly on early social media platforms like MySpace and Flickr. It remains informal internet slang.

**2012:** The word explodes in popularity alongside the front-facing camera on smartphones. Instagram, launched in 2010, accelerates the trend. Usage increases by 17,000% in a single year.

**2013:** Oxford Dictionaries names "selfie" its Word of the Year. It is officially added to the Oxford English Dictionary with the definition: "a photograph that one has taken of oneself, typically with a smartphone or webcam and shared via social media."

**2014 onwards:** The word becomes fully naturalized in English and is borrowed into dozens of other languages worldwide. Compound forms emerge: *selfie stick, group selfie (groufie), belfie*.

**Word formation process:** Clipping of "self-portrait" + Australian diminutive suffix "-ie" = **selfie**

This example shows how a casual, informal coinage can become a globally recognized word within a single decade.`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-8-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which word formation process is used to create the word "brunch"?',
        options: [
          { id: 'a', text: 'Blending (portmanteau)', isCorrect: true },
          { id: 'b', text: 'Clipping', isCorrect: false },
          { id: 'c', text: 'Compounding', isCorrect: false },
          { id: 'd', text: 'Acronym', isCorrect: false },
        ],
        solution: 'Blending (portmanteau) -- "brunch" combines the beginning of "breakfast" with the end of "lunch" to create a new word. This differs from compounding, where both full words are kept (e.g., "smartphone").',
      },
    },
    // --- DEFINITION 2: Semantic Shift ---
    {
      id: 'ie-8-1-def-2',
      type: 'definition',
      title: 'Semantic Shift: When Meanings Wander',
      content: `**Semantic shift** (also called semantic change) occurs when the meaning of a word changes over time. There are several distinct patterns:

**1. Amelioration (Improvement)**
A word gains a more positive meaning over time.
- *nice:* "foolish, ignorant" (Latin *nescius*) → "pleasant, agreeable"
- *knight:* "boy, servant" (Old English *cniht*) → "noble warrior"
- *pretty:* "cunning, crafty" → "attractive"

**2. Pejoration (Deterioration)**
A word develops a more negative meaning.
- *villain:* "farmworker" (from *villa*, farm) → "evil person"
- *silly:* "blessed, happy" (Old English *sælig*) → "foolish"
- *awful:* "full of awe, inspiring wonder" → "terrible"

**3. Broadening (Generalization)**
A word's meaning becomes wider and more general.
- *dog:* originally a specific breed → any canine
- *bird:* originally "young bird" → any bird
- *thing:* originally "assembly, meeting" → anything at all

**4. Narrowing (Specialization)**
A word's meaning becomes more restricted.
- *meat:* "any food" → "animal flesh"
- *deer:* "any animal" → a specific animal
- *girl:* "young person of either sex" → "young female person"

**5. Metaphorical Extension**
A word gains new figurative meanings.
- *web:* "spider's web" → the World Wide Web
- *cloud:* atmospheric phenomenon → cloud computing
- *viral:* relating to a virus → rapidly spreading online content`,
    },
    // --- EXAMPLE 2 ---
    {
      id: 'ie-8-1-example-2',
      type: 'example',
      title: 'Example: Grammar Evolution in Action',
      problem: 'How has the use of "they" as a singular pronoun changed over centuries?',
      solution: `**Singular "they" -- a case study in grammatical change:**

**14th Century:** Geoffrey Chaucer uses singular "they" in *The Canterbury Tales* (c. 1395): "And whoso fyndeth hym out of swich blame, They wol come up..."

**16th-18th Century:** Singular "they" appears regularly in the works of Shakespeare, Jane Austen, and other major writers. It is a natural, unremarked feature of English.

**19th Century:** Prescriptive grammarians declare that "he" should be the default singular pronoun. Textbooks begin teaching that singular "they" is "incorrect." This prescription was driven by social attitudes rather than linguistic logic.

**20th Century:** Despite prescriptive rules, singular "they" persists in everyday speech. "Someone left their umbrella" remains far more natural than "Someone left his umbrella" for most speakers.

**21st Century:** Singular "they" gains new importance as a pronoun for non-binary individuals. In 2019, Merriam-Webster names singular "they" its Word of the Year. The American Psychological Association (APA) officially endorses its use.

**The lesson:** What seems like a modern innovation is actually a return to a centuries-old usage. Grammar rules are not fixed laws of nature -- they are conventions that societies negotiate and renegotiate over time.`,
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Match each word with its original (historical) meaning. Then identify what type of semantic shift occurred.',
        subTasks: [
          {
            label: 'a',
            task: '"Silly" originally meant...',
            solution: '"Blessed" or "happy" (from Old English sælig). This is an example of pejoration -- the word\'s meaning deteriorated from positive to negative.',
            multipleChoiceOptions: ['Blessed / happy', 'Quiet / calm', 'Small / tiny', 'Wise / clever'],
          },
          {
            label: 'b',
            task: '"Meat" originally meant...',
            solution: '"Any food" (from Old English mete). This is an example of narrowing -- the word\'s meaning became more specific over time.',
            multipleChoiceOptions: ['Any food', 'Hunting prey', 'Cooked dish', 'Animal hide'],
          },
          {
            label: 'c',
            task: '"Knight" originally meant...',
            solution: '"Boy" or "servant" (from Old English cniht). This is an example of amelioration -- the word\'s meaning improved dramatically over time.',
            multipleChoiceOptions: ['Boy / servant', 'Warrior / fighter', 'King / ruler', 'Horse rider'],
          },
          {
            label: 'd',
            task: '"Deer" originally meant...',
            solution: '"Any animal" (from Old English deor). This is an example of narrowing -- from a general term for any animal to one specific type.',
            multipleChoiceOptions: ['Any animal', 'Forest creature', 'Horned beast', 'Prey animal'],
          },
        ],
        solution: 'a) Blessed/happy (pejoration), b) Any food (narrowing), c) Boy/servant (amelioration), d) Any animal (narrowing). These examples show that word meanings are never truly fixed.',
      },
    },
    // --- EXERCISE 3 ---
    {
      id: 'ie-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Identify the word formation process used to create each of the following words.',
        subTasks: [
          {
            label: 'a',
            task: '"Blog" (from "web log")',
            solution: 'Clipping (and blending) -- the word "web log" was shortened and blended into "blog."',
            multipleChoiceOptions: ['Clipping / blending', 'Compounding', 'Acronym', 'Borrowing'],
          },
          {
            label: 'b',
            task: '"To bookmark" (saving a webpage)',
            solution: 'Conversion (zero derivation) -- the noun "bookmark" is used as a verb without any change in form. Also involves metaphorical extension from physical bookmarks.',
            multipleChoiceOptions: ['Conversion', 'Coinage', 'Compounding', 'Clipping'],
          },
          {
            label: 'c',
            task: '"FOMO"',
            solution: 'Acronym -- formed from the first letters of "Fear Of Missing Out."',
            multipleChoiceOptions: ['Acronym', 'Blending', 'Clipping', 'Borrowing'],
          },
        ],
        solution: 'a) Clipping/blending, b) Conversion, c) Acronym. Understanding word formation processes helps you analyze how new vocabulary enters the language.',
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-8-1-summary',
      type: 'text',
      title: 'Summary: Language Change and Evolution',
      content: `## Key Takeaways

**Language change is inevitable and natural.** Every living language changes constantly. Only dead languages (like Latin) remain frozen in place.

**New words enter English through many paths:** coinage, compounding, blending, clipping, acronyms, borrowing, conversion, and eponyms. Understanding these processes helps you analyze and appreciate the creativity of language.

**Word meanings shift over time** through amelioration (improvement), pejoration (deterioration), broadening, narrowing, and metaphorical extension. A word's current meaning may be vastly different from its original one.

**Grammar evolves too.** Rules that seem fixed and permanent are actually conventions that change across centuries. What one generation considers "incorrect" may become standard in the next.

**Forces driving change include:** technological innovation, social movements, cultural contact, generational turnover, and the basic human need to express new ideas and experiences.

**The key insight:** Language change is not corruption or decay -- it is a sign of vitality. A language that cannot change cannot survive.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Which of the following is an example of semantic AMELIORATION?',
        options: [
          { id: 'a', text: '"Nice" changing from "foolish" to "pleasant"', isCorrect: true },
          { id: 'b', text: '"Villain" changing from "farmworker" to "evil person"', isCorrect: false },
          { id: 'c', text: '"Meat" changing from "any food" to "animal flesh"', isCorrect: false },
          { id: 'd', text: '"Dog" changing from a specific breed to any canine', isCorrect: false },
        ],
        solution: '"Nice" underwent amelioration because its meaning improved from negative ("foolish") to positive ("pleasant"). "Villain" shows pejoration, "meat" shows narrowing, and "dog" shows broadening.',
      },
    },
    {
      id: 'ie-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a short essay (200-250 words) discussing whether language change should be resisted or embraced. Use at least three specific examples from this chapter to support your argument.',
        hints: [
          'Consider both prescriptivist and descriptivist perspectives',
          'Think about who benefits from language standardization and who is disadvantaged',
          'Use concrete examples of words that have changed meaning or form',
        ],
        solution: 'A strong response will acknowledge that language change is natural and inevitable while also recognizing that some standardization is necessary for clear communication. The best essays will use specific examples (e.g., the evolution of "nice," the return of singular "they," or the creation of "selfie") to illustrate how change reflects cultural needs.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 8.2: Technology and Language
// ============================================================================

export const CHAPTER_INT_ENGELSK_8_2: TextbookChapter = {
  id: 'int-engelsk-8-2',
  courseId: 'int-engelsk',
  chapterNumber: '8.2',
  title: 'Technology and Language',
  description: 'Investigate how digital technology, social media, texting, and the internet are transforming the way we use English.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analyze and discuss how digital media influence language use and communication',
    'reflect on the relationship between technology, identity, and linguistic expression',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-8-2-intro',
      type: 'text',
      content: `## How Screens Changed Our Words

No force has reshaped the English language in the 21st century more profoundly than digital technology. The internet, smartphones, and social media have not only given us thousands of new words -- they have fundamentally altered how we write, read, and communicate with one another.

Think about your own daily language use. You probably send dozens of text messages, scroll through social media posts, watch videos with captions, and perhaps write emails or online comments. Each of these activities involves a distinct form of English that barely existed thirty years ago.

**The Scale of Change:**
- Over 4.5 billion people use the internet globally
- The average person sends and receives over 70 text messages per day
- Social media platforms process billions of written interactions daily
- More text is produced in a single day online than was written in the entire 18th century

**A New Kind of Writing:**
For most of human history, writing was formal, slow, and permanent. You wrote letters, books, and official documents. Speaking was informal, fast, and ephemeral. But digital communication has created something entirely new: writing that behaves like speech. Text messages, tweets, and chat messages are written language used in conversational ways -- fast, informal, interactive, and often fleeting.

Linguist David Crystal calls this phenomenon **"Netspeak"** -- a variety of English that is neither purely written nor purely spoken but something altogether new.`,
    },
    // --- DEFINITION 1: Internet English ---
    {
      id: 'ie-8-2-def-1',
      type: 'definition',
      title: 'Internet English: Features and Varieties',
      content: `**Internet English** refers to the distinctive ways English is used in digital contexts. It encompasses several overlapping varieties:

**1. Textspeak / SMS Language**
Abbreviated language developed for character-limited messaging.
- *u* (you), *2* (to/too), *4* (for), *b4* (before), *gr8* (great)
- *brb* (be right back), *imo* (in my opinion), *tbh* (to be honest)
- Originally driven by practical constraints (160-character SMS limits, T9 keyboards)
- Now used more for stylistic effect than necessity

**2. Social Media Language**
Each platform has developed its own linguistic norms.
- **Twitter/X:** Hashtags (#MondayMotivation), threads, quote tweets, character economy
- **Instagram:** Caption culture, emoji-heavy communication, hashtag stacking
- **TikTok:** Sound-based language, duets, trending phrases ("it's giving...", "no cap")
- **Reddit:** Subreddit jargon, upvote culture, "ELI5" (Explain Like I'm 5)

**3. Meme Language**
A unique form of cultural communication combining text and images.
- Recognizable templates with variable text
- Deliberate misspellings (*doggo, chonky, smol, hooman*)
- Internal grammar rules (e.g., the "doge" meme follows specific syntactic patterns)
- Rapid evolution -- meme language has a very short lifespan

**4. Professional Digital English**
Formal internet communication styles.
- Email conventions ("Dear...", "Best regards", "As per my last email")
- Slack/Teams culture (emoji reactions, threaded conversations)
- LinkedIn language ("thrilled to announce", "grateful for this opportunity")

**Key Characteristics of Internet English:**
- **Informality:** Even formal contexts become more casual online
- **Creativity:** Users constantly invent new expressions
- **Speed:** Language evolves and spreads faster than ever before
- **Visual integration:** Emojis, GIFs, memes, and formatting are part of the message
- **Context-dependent:** The same person may write very differently on LinkedIn versus TikTok`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-8-2-example-1',
      type: 'example',
      title: 'Example: The Linguistics of Emojis',
      problem: 'Are emojis a language? How do they function in digital communication?',
      solution: `**Emojis: More Than Just Smiley Faces**

Emojis were created in 1999 by Japanese artist Shigetaka Kurita for a mobile internet platform. The word comes from Japanese: *e* (picture) + *moji* (character). Today, over 3,600 emojis exist in the Unicode Standard.

**Are emojis a language?**

Linguists generally say no -- emojis lack the grammatical structure needed to qualify as a full language. You cannot write a legal contract or a scientific paper in emojis alone. However, emojis serve important **pragmatic functions**:

**1. Tone markers:** They clarify the emotional tone of a message.
- "We need to talk" (sounds serious, possibly threatening)
- "We need to talk 😊" (sounds friendly, non-threatening)

**2. Softeners:** They reduce the force of a statement.
- "You're wrong" (blunt, potentially rude)
- "You're wrong 😅" (gentler, less confrontational)

**3. Emphasis:** They add emotional weight.
- "I love this song 🔥🔥🔥" (strong enthusiasm)

**4. Stand-alone responses:** They function as complete speech acts.
- 👍 (agreement/acknowledgment)
- ❤️ (appreciation/love)
- 😂 (amusement)

**Cultural variation:**
The same emoji can mean different things in different cultures. The 👍 emoji is positive in Western contexts but can be offensive in parts of the Middle East. The 🙏 emoji is interpreted as "prayer" by some and "thank you/high five" by others.

**The verdict:** Emojis are not a language, but they are a powerful paralinguistic system -- similar to gestures, facial expressions, and tone of voice in spoken communication.`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-8-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What does linguist David Crystal call the distinctive variety of English used online?',
        options: [
          { id: 'a', text: 'Netspeak', isCorrect: true },
          { id: 'b', text: 'Cybertongue', isCorrect: false },
          { id: 'c', text: 'Digi-English', isCorrect: false },
          { id: 'd', text: 'E-dialect', isCorrect: false },
        ],
        solution: 'David Crystal coined the term "Netspeak" to describe the unique variety of English that has emerged in digital contexts -- a form that is neither purely written nor purely spoken.',
      },
    },
    // --- DEFINITION 2: Code-Switching Online ---
    {
      id: 'ie-8-2-def-2',
      type: 'definition',
      title: 'Digital Code-Switching and Register',
      content: `**Digital code-switching** refers to how people shift their language style depending on the online context. Just as you speak differently to your teacher than to your friends, you write differently in an email to your boss than in a group chat.

**Register shifts online:**

| Context | Register | Example |
|---------|----------|---------|
| Academic email | Formal | "Dear Professor Smith, I am writing to inquire about..." |
| Work Slack | Semi-formal | "Hey team, quick update on the project..." |
| Instagram caption | Informal | "living my best life ✨ #blessed" |
| Group chat | Very informal | "lmaooo no way 😭😭" |
| Reddit comment | Variable | Depends on subreddit norms |

**Why this matters:**

Digital literacy today requires mastering multiple registers. Being able to write a professional email AND an engaging social media post are both valuable skills. The key is **appropriateness** -- knowing which register fits which context.

**Common mistakes:**
- Using textspeak in formal emails ("thx 4 ur help")
- Being overly formal in casual digital spaces ("I hereby acknowledge receipt of your message")
- Failing to match the tone of a platform or community

**The bilingual advantage:**
Research shows that people who regularly code-switch between languages (like Norwegian students using English online) often develop stronger metalinguistic awareness -- they become more attuned to how language works because they are constantly navigating between systems.`,
    },
    // --- EXAMPLE 2 ---
    {
      id: 'ie-8-2-example-2',
      type: 'example',
      title: 'Example: How Technology Shapes Grammar',
      problem: 'How has texting and social media influenced English grammar and punctuation?',
      solution: `**Grammar in the Digital Age:**

Technology has not destroyed grammar -- it has created new grammatical conventions. Here are some notable examples:

**1. The Period as Tone Marker**
In traditional writing, a period simply ends a sentence. In text messages, a period can signal annoyance or coldness.
- "ok" (neutral) vs. "ok." (sounds upset or passive-aggressive)
- This shift has been documented by linguists like Gretchen McCulloch in her book "Because Internet."

**2. Strategic Capitalization**
ALL CAPS has evolved from "shouting" to a marker of emphasis or irony.
- "I am SO TIRED" (emphasis)
- "that was a CHOICE" (ironic disapproval)
- Alternating caps ("tHiS iS fInE") signals sarcasm

**3. Repeated Letters for Emphasis**
- "yesssss" (enthusiastic agreement)
- "nooooo" (dramatic dismay)
- "sooooo good" (intensifier)

**4. "Because" + Noun**
A new grammatical construction that emerged online.
- "I can't come out tonight because homework"
- "She's late because traffic"
- Named the American Dialect Society's Word of the Year in 2013

**5. Hashtags as Commentary**
Hashtags have evolved from categorization tools to a form of parenthetical commentary.
- "Just finished my essay at 3am #studentlife #nosleep #worthit"
- Functions like an aside or stage whisper

**The key insight:** These are not errors -- they are systematic innovations that follow consistent patterns across millions of users.`,
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze the following pairs of messages. Explain how the meaning or tone changes between version A and version B.',
        subTasks: [
          {
            label: 'a',
            task: 'A: "sounds good" vs. B: "sounds good."',
            solution: 'Version A (without period) sounds casual and friendly -- a natural, relaxed response. Version B (with period) can sound more serious, cold, or even passive-aggressive in a texting context. The period, which is neutral in formal writing, has become a tone marker in digital communication.',
          },
          {
            label: 'b',
            task: 'A: "thanks" vs. B: "THANKS"',
            solution: 'Version A is a straightforward, casual expression of gratitude. Version B (all caps) could signal either very enthusiastic gratitude or, depending on context, sarcasm or frustration. All caps has multiple possible interpretations in digital communication.',
          },
          {
            label: 'c',
            task: 'A: "that was interesting" vs. B: "that was... interesting"',
            solution: 'Version A is a straightforward statement. Version B, with the ellipsis, adds a pause that suggests hesitation, doubt, or the opposite meaning -- implying that it was actually NOT interesting (or was strange/unexpected). The ellipsis creates a dramatic pause that changes the interpretation.',
          },
        ],
        solution: 'These examples demonstrate how punctuation, capitalization, and formatting have become tools for expressing tone and emotion in digital writing -- functions traditionally served by voice, facial expression, and gesture in spoken communication.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- EXERCISE 3 ---
    {
      id: 'ie-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-8-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Which statement best describes the role of emojis in digital communication?',
        options: [
          { id: 'a', text: 'They are a paralinguistic system that conveys tone, emotion, and emphasis', isCorrect: true },
          { id: 'b', text: 'They are a complete language that can replace written English', isCorrect: false },
          { id: 'c', text: 'They are a sign that language skills are declining', isCorrect: false },
          { id: 'd', text: 'They are only used by young people in informal settings', isCorrect: false },
        ],
        solution: 'Emojis function as a paralinguistic system -- similar to gestures, facial expressions, and tone of voice. They help clarify meaning, convey emotion, and manage social interaction in written digital communication.',
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-8-2-summary',
      type: 'text',
      title: 'Summary: Technology and Language',
      content: `## Key Takeaways

**Digital technology has created new forms of English** that blend features of speech and writing. These forms are systematic, creative, and context-appropriate -- not degraded versions of "proper" English.

**Internet English varies by platform and context.** Textspeak, social media language, meme language, and professional digital English each follow their own conventions and norms.

**Emojis are a paralinguistic system** that serves functions similar to gesture and tone of voice in face-to-face communication. They clarify tone, soften messages, and add emotional nuance.

**Digital code-switching is a vital 21st-century skill.** The ability to shift between registers -- from formal email to casual chat -- is a form of communicative competence, not linguistic inconsistency.

**Technology shapes grammar in surprising ways.** Punctuation, capitalization, and spacing have taken on new communicative functions in digital contexts.

**The bottom line:** Rather than destroying English, technology is expanding it -- giving speakers and writers new tools for expression and communication.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Choose ONE social media platform you use regularly. Write a linguistic analysis (200-250 words) of the distinctive language features found on that platform. Consider vocabulary, grammar, punctuation, use of images/emojis, and register.',
        hints: [
          'Be specific -- give concrete examples of language features',
          'Think about who uses the platform and how that shapes language norms',
          'Consider how the platform\'s design (character limits, visual focus, etc.) influences language',
        ],
        solution: 'A strong analysis will identify specific, observable language features rather than making general claims. For example, an analysis of TikTok might discuss trending phrases, sound-based communication, comment conventions, and how the algorithm shapes which language features spread.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-8-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'In texting, the use of a period at the end of a short message (e.g., "ok.") often signals:',
        options: [
          { id: 'a', text: 'Annoyance, coldness, or seriousness', isCorrect: true },
          { id: 'b', text: 'Politeness and formality', isCorrect: false },
          { id: 'c', text: 'Enthusiasm and excitement', isCorrect: false },
          { id: 'd', text: 'Nothing -- it is purely a grammatical convention', isCorrect: false },
        ],
        solution: 'In texting contexts, a period after a short message like "ok." has shifted from a neutral punctuation mark to a tone indicator that can signal coldness, seriousness, or passive-aggression. This shift has been documented by linguists such as Gretchen McCulloch.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 8.3: English and Artificial Intelligence
// ============================================================================

export const CHAPTER_INT_ENGELSK_8_3: TextbookChapter = {
  id: 'int-engelsk-8-3',
  courseId: 'int-engelsk',
  chapterNumber: '8.3',
  title: 'English and Artificial Intelligence',
  description: 'Examine how AI tools like ChatGPT, machine translation, and language models are reshaping English communication, learning, and the very nature of authorship.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analyze and discuss how artificial intelligence affects language use and communication',
    'reflect critically on the implications of AI for language learning and linguistic diversity',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-8-3-intro',
      type: 'text',
      content: `## The Machine That Writes

In November 2022, OpenAI released ChatGPT, and the world of language was never quite the same. For the first time in history, a machine could produce fluent, coherent text that was often indistinguishable from human writing. Within two months, it had 100 million users -- the fastest-growing consumer application in history.

But AI's relationship with language did not begin in 2022. Machine translation tools like Google Translate had been improving steadily for over a decade. Voice assistants like Siri, Alexa, and Google Assistant had been processing natural language since the early 2010s. Autocomplete and spell-check had been subtly shaping our writing for even longer.

What changed with large language models (LLMs) like GPT-4, Claude, and Gemini was the scale and sophistication. These systems do not simply follow rules -- they have been trained on vast amounts of text and have learned statistical patterns of language. They can write essays, translate between languages, summarize documents, generate poetry, and engage in conversation.

**This raises profound questions:**
- If a machine can write fluent English, what does that mean for human writers?
- Should we still learn foreign languages if AI can translate instantly?
- Who is the "author" of AI-generated text?
- How does AI affect linguistic diversity?
- What new skills do we need in an AI-powered world?

These are not abstract philosophical questions. They affect your education, your career, and your relationship with language right now.`,
    },
    // --- DEFINITION 1: AI and Translation ---
    {
      id: 'ie-8-3-def-1',
      type: 'definition',
      title: 'AI Translation: From Rule-Based to Neural',
      content: `**Machine translation** has undergone a revolution. Understanding this history helps us appreciate both its power and its limitations.

**Three Generations of Machine Translation:**

**1. Rule-Based Translation (1950s-2000s)**
- Relied on grammatical rules and bilingual dictionaries
- Produced stilted, often humorous results
- Required extensive manual programming for each language pair
- Example: "The spirit is willing but the flesh is weak" → Russian → back to English: "The vodka is good but the meat is rotten" (famous, possibly apocryphal)

**2. Statistical Machine Translation (2000s-2016)**
- Used large bilingual text collections to find statistical patterns
- Better than rule-based, but still produced unnatural output
- Struggled with context and idiomatic expressions
- Google Translate initially used this approach

**3. Neural Machine Translation (2016-present)**
- Uses deep learning neural networks trained on massive datasets
- Produces remarkably fluent, natural-sounding translations
- Better at handling context, idiom, and nuance
- Google switched to neural MT in 2016, dramatically improving quality

**Current capabilities:**
- Handles common language pairs (English-Spanish, English-French) with high accuracy
- Can translate documents, websites, and real-time conversations
- Increasingly competent with context and tone

**Persistent limitations:**
- **Rare language pairs** remain poorly served (e.g., Norwegian Nynorsk to Swahili)
- **Cultural nuance** is often lost (humor, irony, wordplay)
- **Specialized terminology** can be mistranslated
- **Literary quality** remains below human translators
- **Pragmatic meaning** (what is implied but not stated) is difficult for AI
- **Low-resource languages** have far less training data, leading to worse results`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-8-3-example-1',
      type: 'example',
      title: 'Example: What AI Gets Right and Wrong',
      problem: 'Compare how AI handles a straightforward factual text versus a culturally nuanced literary passage.',
      solution: `**Test 1: Factual Text**
Original (Norwegian): "Norge er et land i Nord-Europa med omtrent 5,5 millioner innbyggere. Hovedstaden er Oslo."
AI Translation: "Norway is a country in Northern Europe with approximately 5.5 million inhabitants. The capital is Oslo."
**Result: Excellent.** Factual, straightforward texts are AI's strength.

**Test 2: Idiomatic Expression**
Original (Norwegian): "Det var helt Texas."
AI Translation: "It was completely Texas."
**Result: Literal but wrong.** The Norwegian idiom meaning "chaotic/wild" is lost because the AI translates word by word without cultural knowledge. A human translator might write: "It was total chaos" or "It was a madhouse."

**Test 3: Literary Prose**
Original (from Hamsun's "Sult"): "Det var i den tid jeg gikk omkring og sultet i Kristiania, denne forunderlige by som ingen forlater før han har fått merker av den."
AI Translation: "It was in the time I walked around hungry in Kristiania, this strange city that no one leaves before he has been marked by it."
**Result: Competent but flat.** The grammar is correct, but the literary voice, rhythm, and emotional resonance of Hamsun's prose is diminished. A skilled human translator would capture the atmosphere more powerfully.

**The pattern:** AI excels at information transfer but struggles with cultural meaning, emotional nuance, and artistic voice -- precisely the elements that make language human.`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-8-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which generation of machine translation uses deep learning neural networks?',
        options: [
          { id: 'a', text: 'Neural Machine Translation (2016-present)', isCorrect: true },
          { id: 'b', text: 'Rule-Based Translation (1950s-2000s)', isCorrect: false },
          { id: 'c', text: 'Statistical Machine Translation (2000s-2016)', isCorrect: false },
          { id: 'd', text: 'All three generations use neural networks', isCorrect: false },
        ],
        solution: 'Neural Machine Translation, which became dominant from 2016 onwards, uses deep learning neural networks. This represented a major leap in translation quality over the earlier rule-based and statistical approaches.',
      },
    },
    // --- DEFINITION 2: AI and Language Learning ---
    {
      id: 'ie-8-3-def-2',
      type: 'definition',
      title: 'AI and the Future of Language Learning',
      content: `The availability of powerful AI tools raises a fundamental question: **Why learn a foreign language if machines can translate for you?**

**Arguments FOR continuing to learn languages:**

**1. Understanding beyond words**
Language is not just information transfer. It carries culture, humor, identity, and worldview. The Norwegian concept of "koselig" or the Japanese concept of "wabi-sabi" resist translation because they encode entire cultural perspectives.

**2. Cognitive benefits**
Research consistently shows that learning languages improves memory, problem-solving, multitasking, and even delays cognitive decline. These benefits do not come from using a translation app.

**3. Social and professional advantage**
Speaking someone's language builds trust and connection in ways that using a translator cannot replicate. In business, diplomacy, and personal relationships, direct communication matters.

**4. Critical thinking about AI output**
You need language knowledge to evaluate whether an AI translation is accurate. Without understanding, you cannot catch errors.

**5. Creative expression**
AI can translate what you say, but it cannot decide what you want to say. Having your own voice in multiple languages is a form of personal empowerment.

**How AI CAN enhance language learning:**

- **Personalized practice:** AI tutors that adapt to your level and interests
- **Instant feedback:** Real-time correction of pronunciation and grammar
- **Immersive environments:** AI-generated conversation partners available 24/7
- **Scaffolding:** AI can help you read texts above your level by providing on-demand explanations
- **Motivation:** Gamified learning apps use AI to keep students engaged

**The balanced view:**
AI is a powerful **tool** for language learning, but it is not a **replacement** for learning. The goal should be human competence enhanced by AI, not human dependence on AI.`,
    },
    // --- EXAMPLE 2 ---
    {
      id: 'ie-8-3-example-2',
      type: 'example',
      title: 'Example: The Authorship Question',
      problem: 'A student uses ChatGPT to write an essay about Shakespeare. Who is the author?',
      solution: `**The Question of AI Authorship:**

This is one of the most debated questions in education and publishing today. Consider several scenarios:

**Scenario 1: Full AI generation**
A student types "Write a 500-word essay about Hamlet" and submits the output unchanged.
- **Most would say:** This is not the student's work. It is plagiarism -- not from another human, but from a machine.

**Scenario 2: AI as brainstorming partner**
A student discusses ideas with ChatGPT, asks it to suggest an outline, then writes the essay independently using those ideas.
- **This is a gray area.** The ideas were co-developed, but the writing is original. Similar to discussing ideas with a friend or tutor.

**Scenario 3: AI as editor**
A student writes an essay independently, then asks AI to check grammar, suggest better word choices, and improve sentence structure.
- **Most would say:** This is similar to using spell-check or getting feedback from a writing center. The core ideas and expression are the student's own.

**Scenario 4: Iterative collaboration**
A student generates an AI draft, then substantially rewrites, reorganizes, adds personal examples, and changes the argument.
- **This is complex.** The final product reflects significant human judgment and creativity, but the foundation came from AI.

**Key principles emerging:**
1. **Transparency** is essential -- acknowledge AI use
2. **The thinking matters** more than the polished output
3. **Context determines ethics** -- what is appropriate varies by situation
4. **Understanding** what AI produces is necessary to use it responsibly

There is no simple answer yet. Societies, institutions, and individuals are still negotiating these boundaries.`,
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Read the following statements about AI and language. Decide whether each is TRUE or FALSE, and explain your reasoning.',
        subTasks: [
          {
            label: 'a',
            task: '"AI translation is now as good as human translation for all types of text."',
            solution: 'FALSE. AI translation excels at factual and straightforward texts but still struggles with literary quality, cultural nuance, humor, idiomatic expressions, and low-resource languages. Human translators remain superior for texts requiring cultural sensitivity and artistic voice.',
            multipleChoiceOptions: ['False', 'True'],
          },
          {
            label: 'b',
            task: '"Learning a foreign language provides cognitive benefits that using a translation app does not."',
            solution: 'TRUE. Research shows that the process of learning and using a language improves memory, problem-solving, and cognitive flexibility. These benefits come from the mental work of learning, not from the end result of having access to translation.',
            multipleChoiceOptions: ['True', 'False'],
          },
          {
            label: 'c',
            task: '"Large language models like ChatGPT truly understand the meaning of the words they produce."',
            solution: 'FALSE (or at least highly debated). Current AI models process statistical patterns in language data. Whether this constitutes genuine "understanding" is one of the central debates in AI research and philosophy. Most linguists and AI researchers argue that pattern recognition is not the same as comprehension.',
            multipleChoiceOptions: ['False', 'True'],
          },
        ],
        solution: 'a) False, b) True, c) False/debated. Critical thinking about AI\'s capabilities and limitations is essential in the age of large language models.',
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-8-3-summary',
      type: 'text',
      title: 'Summary: English and Artificial Intelligence',
      content: `## Key Takeaways

**AI has transformed how we produce and process language.** From machine translation to large language models, AI tools can now generate fluent text that often rivals human output.

**Machine translation has improved dramatically** but still has significant limitations, especially with cultural nuance, literary quality, humor, and low-resource languages.

**AI is a tool, not a replacement for language learning.** The cognitive, social, and cultural benefits of learning languages remain valuable even in an age of instant machine translation.

**The authorship question is unresolved.** As AI becomes more capable, societies must develop new norms around attribution, academic integrity, and the value of human expression.

**AI affects linguistic diversity.** Languages with large amounts of digital text (especially English) are well-served by AI, while minority languages may be further marginalized.

**Critical AI literacy is a new essential skill.** Understanding what AI can and cannot do with language is crucial for using it responsibly and effectively.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-8-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'What is the main reason AI struggles to translate the Norwegian expression "Det var helt Texas"?',
        options: [
          { id: 'a', text: 'It lacks cultural context to understand the idiomatic meaning', isCorrect: true },
          { id: 'b', text: 'Norwegian is too difficult for AI to process', isCorrect: false },
          { id: 'c', text: 'The sentence has too many words', isCorrect: false },
          { id: 'd', text: 'AI cannot translate between Norwegian and English', isCorrect: false },
        ],
        solution: 'The expression "Det var helt Texas" is a cultural idiom meaning "it was chaotic/wild." AI translates it literally ("It was completely Texas") because it lacks the cultural knowledge to understand the figurative meaning. This illustrates how language carries cultural meaning beyond its literal words.',
      },
    },
    {
      id: 'ie-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write a reflective text (250-300 words) discussing how you personally use AI tools in your English learning. Consider: Which tools do you use? How do they help? What are the risks? Where do you draw the line between AI assistance and doing the work yourself?',
        hints: [
          'Be honest and specific about your own experiences',
          'Consider both benefits and potential drawbacks',
          'Think about what skills you might lose if you rely too heavily on AI',
          'Reflect on what "knowing" a language means in the AI age',
        ],
        solution: 'A thoughtful response will show awareness of both the benefits (efficiency, feedback, access to resources) and risks (dependency, superficial learning, loss of authentic voice) of AI tools. The best responses will articulate a personal philosophy about responsible AI use in education.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-8-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Which argument is the STRONGEST reason to continue learning foreign languages despite advances in AI translation?',
        options: [
          { id: 'a', text: 'Language learning provides cognitive benefits and cultural understanding that translation tools cannot replicate', isCorrect: true },
          { id: 'b', text: 'AI translation will never improve beyond its current level', isCorrect: false },
          { id: 'c', text: 'Schools require language courses regardless of AI', isCorrect: false },
          { id: 'd', text: 'Translation apps are too expensive for most people', isCorrect: false },
        ],
        solution: 'The cognitive and cultural benefits of language learning -- improved memory, problem-solving, cultural empathy, and understanding of different worldviews -- are intrinsic to the learning process itself and cannot be replicated by a tool that does the work for you.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 8.4: Multilingualism in the Future
// ============================================================================

export const CHAPTER_INT_ENGELSK_8_4: TextbookChapter = {
  id: 'int-engelsk-8-4',
  courseId: 'int-engelsk',
  chapterNumber: '8.4',
  title: 'Multilingualism in the Future',
  description: 'Explore whether English will remain the global dominant language, the rise of Mandarin and Spanish, language preservation efforts, and the advantages of bilingualism.',
  estimatedMinutes: 23,
  competenceGoals: [
    'discuss and reflect on the position of English in the world and possible future developments',
    'analyze linguistic diversity and the implications of language loss',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-8-4-intro',
      type: 'text',
      content: `## Will English Rule Forever?

In 2025, English is the undisputed global lingua franca. It dominates international business, science, diplomacy, aviation, the internet, and popular culture. But history teaches us that no language has held dominant status forever. Latin, Arabic, French, and Spanish all enjoyed periods of global influence before yielding ground.

So the question is: will English maintain its position in the decades and centuries ahead? Or are we witnessing the beginning of a shift toward a more multilingual world order?

**The current landscape in numbers:**
- **English:** ~1.5 billion speakers (400 million native, 1.1 billion L2)
- **Mandarin Chinese:** ~1.1 billion speakers (920 million native)
- **Hindi:** ~600 million speakers
- **Spanish:** ~560 million speakers (490 million native)
- **Arabic:** ~310 million speakers
- **French:** ~310 million speakers

**Factors that could sustain English dominance:**
- Enormous body of scientific and academic literature in English
- English-language internet content (still over 50% of all websites)
- American cultural and economic influence
- Established global infrastructure (air traffic control, international organizations)
- Network effects -- the more people learn English, the more useful it becomes

**Factors that could challenge English dominance:**
- The economic rise of China and the growing influence of Mandarin
- Demographic growth in Spanish-speaking and Hindi-speaking regions
- Growing resistance to linguistic imperialism
- AI translation reducing the need for a common language
- Movements to preserve and revitalize indigenous and minority languages

The future of global communication is unlikely to be monolingual. Instead, we may be moving toward a world of **strategic multilingualism** -- where individuals and societies cultivate competence in multiple languages for different purposes.`,
    },
    // --- DEFINITION 1: Competing Global Languages ---
    {
      id: 'ie-8-4-def-1',
      type: 'definition',
      title: 'The Rise of Competing Languages',
      content: `While English currently dominates, several other languages are growing in global influence:

**Mandarin Chinese**
- **Speakers:** Approximately 1.1 billion (largest number of native speakers of any language)
- **Economic driver:** China's GDP is projected to surpass the United States in the coming decades
- **Confucius Institutes:** Over 500 Chinese language and culture centers in more than 140 countries
- **Digital presence:** WeChat, Weibo, and Douyin (TikTok's Chinese counterpart) create a massive Chinese-language internet ecosystem
- **Challenge to global adoption:** Tonal system and logographic writing make Mandarin particularly difficult for speakers of European languages

**Spanish**
- **Speakers:** Approximately 560 million, with 490 million native speakers
- **Demographic momentum:** Rapid population growth in Latin America; Spanish is the second most spoken native language globally
- **US influence:** Over 41 million native Spanish speakers in the United States, making it the country's second language in practice
- **Cultural soft power:** Latin American music, literature, and streaming content are increasingly global

**Hindi**
- **Speakers:** Approximately 600 million
- **India's rise:** India has surpassed China as the world's most populous country and is a rapidly growing economy
- **Digital growth:** India has the second-largest number of internet users; Hindi-language content is exploding online
- **Bollywood:** The world's largest film industry by number of films produced

**Arabic**
- **Speakers:** Approximately 310 million across 25 countries
- **Religious significance:** The language of the Quran and Islamic scholarship
- **Economic factors:** Oil wealth and growing investment in education and technology
- **Challenge:** Significant differences between Modern Standard Arabic and regional dialects

**The key insight:** Global linguistic power follows economic and demographic power. As the global balance of power shifts, so too will the relative influence of languages.`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-8-4-example-1',
      type: 'example',
      title: 'Example: Language Death and Preservation',
      problem: 'Why are languages dying, and what can be done to save them?',
      solution: `**The Language Extinction Crisis:**

Of the approximately 7,000 languages spoken today, linguists estimate that one dies every two weeks. By the end of this century, up to 50% of the world's languages may be extinct.

**Why languages die:**

**1. Globalization and urbanization**
When people move to cities for economic opportunity, they often shift to the dominant regional or national language. Their children may never learn the ancestral language.

**2. Educational policies**
Many countries historically (and some still today) banned indigenous languages in schools, forcing children to learn only in the dominant language.

**3. Media dominance**
When all available entertainment, news, and digital content is in a major language, minority languages lose domains of use.

**4. Social pressure**
Speakers of minority languages may face stigma or practical disadvantages, leading them to switch to the dominant language.

**Preservation and revitalization efforts:**

**Success story: Hebrew**
Hebrew was essentially a dead language (used only in religious contexts) for nearly 2,000 years. In the late 19th and 20th centuries, it was revived as a living, spoken language and is now the native language of millions of Israelis.

**Success story: Maori**
New Zealand established Maori-language immersion schools (kohanga reo) in the 1980s. Maori is now an official language, used in media, government, and education. While challenges remain, the decline has been significantly slowed.

**Ongoing efforts:**
- Language documentation projects (recording and archiving endangered languages)
- Digital tools (apps, websites, and AI tools for minority language learning)
- Legal protections (official language status, education rights)
- Community-driven initiatives (language nests, immersion programs)

**Why it matters:**
Each language represents a unique way of understanding the world. When a language dies, we lose not just words but entire systems of knowledge, philosophy, and cultural identity.`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-8-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Approximately how many of the world\'s 7,000 languages are predicted to disappear by 2100?',
        options: [
          { id: 'a', text: 'Up to 50% (around 3,500 languages)', isCorrect: true },
          { id: 'b', text: 'About 10% (around 700 languages)', isCorrect: false },
          { id: 'c', text: 'About 90% (around 6,300 languages)', isCorrect: false },
          { id: 'd', text: 'Languages do not go extinct in the modern era', isCorrect: false },
        ],
        solution: 'Linguists estimate that up to half of the world\'s approximately 7,000 languages may disappear by the end of this century. One language dies roughly every two weeks, and the rate is accelerating due to globalization and urbanization.',
      },
    },
    // --- DEFINITION 2: Bilingual Advantages ---
    {
      id: 'ie-8-4-def-2',
      type: 'definition',
      title: 'The Bilingual Advantage',
      content: `Research in neuroscience and linguistics has revealed significant cognitive and social benefits of being bilingual or multilingual.

**Cognitive Benefits:**

**1. Enhanced executive function**
Bilinguals constantly manage two (or more) language systems, which strengthens the brain's executive control -- the ability to focus attention, switch between tasks, and filter out irrelevant information.

**2. Improved metalinguistic awareness**
People who speak multiple languages are more aware of how language works. They recognize patterns, understand grammar concepts more easily, and can analyze language more effectively.

**3. Greater cognitive flexibility**
Bilinguals are better at seeing problems from multiple perspectives and thinking creatively. Managing two languages trains the brain to be more flexible and adaptable.

**4. Delayed cognitive decline**
Studies suggest that bilingualism can delay the onset of dementia and Alzheimer's disease by 4-5 years compared to monolingual individuals. This is one of the most robust findings in bilingualism research.

**Social and Professional Benefits:**

**1. Cross-cultural competence**
Speaking another language provides insight into other cultures, values, and ways of thinking that translation alone cannot convey.

**2. Career advantages**
Multilingual employees are increasingly valued in globalized workplaces. They can communicate directly with international clients, partners, and colleagues.

**3. Broader access to information**
Knowing multiple languages gives access to more sources of news, literature, research, and online content.

**4. Stronger identity and sense of belonging**
For many people, language is central to their cultural identity. Maintaining a heritage language strengthens connections to family, community, and tradition.

**The Norwegian context:**
Norwegian students are already bilingual or multilingual -- most speak Norwegian and English, and many also learn a third language (French, German, or Spanish). This places them in an advantageous position in an increasingly multilingual world.`,
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Consider the following scenarios about the future of language. For each one, explain whether you think it is likely or unlikely, and give reasons for your view.',
        subTasks: [
          {
            label: 'a',
            task: '"By 2100, Mandarin Chinese will replace English as the global lingua franca."',
            solution: 'Most experts consider this unlikely in the near term. While Mandarin has the most native speakers, English has a much larger second-language speaker base and is deeply embedded in global institutions. The tonal nature and logographic writing of Mandarin also make it harder for non-native speakers to learn. However, Mandarin\'s regional influence in Asia will likely grow significantly.',
          },
          {
            label: 'b',
            task: '"AI translation will make learning foreign languages unnecessary within 20 years."',
            solution: 'Unlikely. While AI translation will continue to improve, language learning provides cognitive, social, and cultural benefits that translation tools cannot replicate. Direct human communication builds trust and understanding that mediated communication cannot match. However, the nature and motivation for language learning may shift.',
          },
          {
            label: 'c',
            task: '"A new global language (not English, Mandarin, or any existing language) will be created and adopted worldwide."',
            solution: 'Very unlikely. Constructed languages like Esperanto have been tried and have not achieved widespread adoption. Languages emerge from communities and cultural histories -- they cannot easily be designed by committee. The network effects of existing major languages make a new global language almost impossible to establish.',
          },
        ],
        solution: 'These scenarios encourage critical thinking about language futures. The key insight is that language change is driven by economic, demographic, technological, and cultural forces -- not by individual decisions or government policies alone.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-8-4-summary',
      type: 'text',
      title: 'Summary: Multilingualism in the Future',
      content: `## Key Takeaways

**English's global dominance is real but not guaranteed to last forever.** Historical precedent shows that no language maintains dominant status indefinitely. Economic and demographic shifts could alter the linguistic landscape.

**Mandarin, Spanish, Hindi, and Arabic are all growing in influence,** driven by economic development, demographic growth, and cultural production. The future is likely to be more multilingual, not less.

**Language death is a serious global crisis.** Up to half of the world's languages may disappear this century. Each lost language represents an irreplaceable cultural and intellectual heritage.

**Bilingualism provides measurable cognitive, social, and professional advantages.** These benefits are well-documented by research in neuroscience and linguistics.

**The future of communication is likely strategic multilingualism** -- individuals and societies cultivating competence in multiple languages for different purposes, supported by AI tools where appropriate.

**Norwegian students are well positioned** as already bilingual (Norwegian + English) individuals in an increasingly multilingual world.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-8-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Which of the following is a documented cognitive benefit of bilingualism?',
        options: [
          { id: 'a', text: 'Delayed onset of dementia by 4-5 years', isCorrect: true },
          { id: 'b', text: 'Higher IQ scores on all standardized tests', isCorrect: false },
          { id: 'c', text: 'Perfect memory recall in both languages', isCorrect: false },
          { id: 'd', text: 'Immunity to language-related disorders', isCorrect: false },
        ],
        solution: 'Research consistently shows that bilingualism can delay the onset of dementia and Alzheimer\'s by 4-5 years. This is one of the most robust and well-replicated findings in bilingualism research, related to the enhanced executive function that comes from managing two language systems.',
      },
    },
    {
      id: 'ie-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-8-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Research and write a short report (200-250 words) on ONE endangered language. Include: where it is spoken, how many speakers remain, why it is endangered, and what (if anything) is being done to preserve it.',
        hints: [
          'Choose a language that interests you -- it could be from any continent',
          'UNESCO\'s Atlas of the World\'s Languages in Danger is a useful resource',
          'Consider the social, economic, and political factors behind the language\'s decline',
        ],
        solution: 'A strong report will go beyond basic facts to analyze the forces threatening the language and evaluate the effectiveness of preservation efforts. Examples include Sami languages (Norway/Sweden/Finland), Irish (Ireland), Welsh (Wales), Hawaiian (USA), or Ainu (Japan).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-8-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Which language revitalization effort is considered one of the most successful in history?',
        options: [
          { id: 'a', text: 'The revival of Hebrew as a spoken language in Israel', isCorrect: true },
          { id: 'b', text: 'The creation of Esperanto as a universal language', isCorrect: false },
          { id: 'c', text: 'The standardization of English spelling in the 18th century', isCorrect: false },
          { id: 'd', text: 'The development of Google Translate for rare languages', isCorrect: false },
        ],
        solution: 'The revival of Hebrew is widely considered the most successful language revitalization in history. It went from being used almost exclusively as a liturgical language for nearly 2,000 years to becoming the native language of millions of people in modern Israel.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 8.5: Your English, Your Future
// ============================================================================

export const CHAPTER_INT_ENGELSK_8_5: TextbookChapter = {
  id: 'int-engelsk-8-5',
  courseId: 'int-engelsk',
  chapterNumber: '8.5',
  title: 'Your English, Your Future',
  description: 'Reflect on your personal English language development, explore career opportunities, and develop a lifelong learning mindset for your linguistic identity.',
  estimatedMinutes: 18,
  competenceGoals: [
    'reflect on own language learning and set goals for further development',
    'discuss the role of English in personal, academic, and professional contexts',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-8-5-intro',
      type: 'text',
      content: `## Your Linguistic Story

You are reading this text in English. That fact alone tells a story -- a story about your education, your culture, your country's position in the world, and the choices you have made as a learner. But what comes next? How will your English shape your future, and how will your future shape your English?

Every person who speaks more than one language carries a unique linguistic biography. Yours might include learning English through movies as a child, struggling with irregular verbs in middle school, discovering that you could actually think in English for the first time, or realizing that your Norwegian accent in English is part of who you are -- not a flaw to be eliminated.

**Where you are now:**
As a VG2/VG3 student in Norway, you have been learning English for roughly a decade. You can read complex texts, participate in discussions, write academic essays, and navigate the English-speaking internet with ease. For many of you, English feels almost like a second home language.

But "advanced" does not mean "finished." Language learning is not a destination -- it is a lifelong journey. Even native speakers continue to develop their vocabulary, refine their style, and adapt to new communicative contexts throughout their lives.

**This final chapter invites you to:**
- Reflect on how far you have come as an English user
- Identify your strengths and areas for growth
- Explore how English will feature in your future career and life
- Consider what kind of English speaker you want to become
- Develop a personal plan for continued growth`,
    },
    // --- DEFINITION 1: Language Identity ---
    {
      id: 'ie-8-5-def-1',
      type: 'definition',
      title: 'Your Linguistic Identity',
      content: `**Linguistic identity** refers to the relationship between language and a person's sense of self. The languages you speak, how you speak them, and the choices you make about language all contribute to who you are.

**Key dimensions of linguistic identity:**

**1. Accent and pronunciation**
Your accent in English is influenced by Norwegian phonology. Rather than viewing this as a deficiency, many linguists argue that a non-native accent is a sign of multilingual competence -- you carry the traces of multiple linguistic systems.

**2. Code-switching and translanguaging**
If you mix English and Norwegian in conversation, you are not being lazy -- you are demonstrating sophisticated linguistic ability. **Translanguaging** refers to the fluid use of all your linguistic resources to communicate, regardless of which "language" a particular word or phrase belongs to.

**3. Language attitudes**
How you feel about your own English matters. Research shows that positive language attitudes lead to greater fluency and willingness to communicate. If you feel confident and comfortable in English, you will use it more and improve faster.

**4. Cultural identity and English**
Using English does not mean adopting an American or British identity. You can be authentically Norwegian while communicating in English. Your cultural perspective, values, and experiences enrich the English you produce.

**5. The "native speaker" myth**
The idea that non-native speakers should aspire to sound like native speakers is increasingly challenged. In a world where the majority of English communication happens between non-native speakers, the goal should be **effective, clear, and confident communication** -- not imitation of a particular accent or variety.

**Your English is valid.** It does not need to sound British or American to be "correct." It needs to be clear, appropriate, and authentically yours.`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-8-5-example-1',
      type: 'example',
      title: 'Example: English in Career Pathways',
      problem: 'In what specific ways does English proficiency create career opportunities?',
      solution: `**English and Your Career: Concrete Examples**

**1. Technology and IT**
- Programming languages are based on English keywords
- Technical documentation is overwhelmingly in English
- International tech companies use English as their working language
- Open-source communities communicate in English
- *Example:* A Norwegian software developer collaborating with teams in India, Brazil, and Japan uses English as the common language for code reviews, meetings, and documentation.

**2. Science and Research**
- Over 90% of scientific papers are published in English
- International conferences are conducted in English
- Collaboration with researchers worldwide requires English
- *Example:* A marine biologist in Tromsø publishes findings in English-language journals and presents at conferences in Tokyo, Boston, and Cape Town.

**3. Business and Finance**
- International trade negotiations are conducted in English
- Financial markets operate in English
- Global companies require English for internal communication
- *Example:* A Norwegian shipping executive negotiates contracts with Korean shipbuilders, Greek ship owners, and Singaporean port authorities -- all in English.

**4. Media and Creative Industries**
- English-language content reaches the largest global audience
- International journalism is largely conducted in English
- Gaming, film, and music industries are dominated by English
- *Example:* A Norwegian game designer creates content for a global audience, writing dialogue, marketing copy, and community management posts in English.

**5. Healthcare and Social Services**
- Medical research literature is primarily in English
- International health organizations (WHO, MSF) operate in English
- Multicultural societies require healthcare workers who speak English
- *Example:* A doctor in Oslo treats patients from diverse backgrounds, using English as a common language when Norwegian is not available.

**6. Education**
- University programs increasingly offered in English, even in non-English countries
- Academic exchange programs require English proficiency
- Teaching English is itself a major career path
- *Example:* A Norwegian educator teaches international students in English at a university in Oslo.

**The common thread:** In virtually every professional field, English proficiency opens doors that remain closed to monolingual speakers.`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-8-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What does the concept of "translanguaging" refer to?',
        options: [
          { id: 'a', text: 'The fluid use of all linguistic resources regardless of language boundaries', isCorrect: true },
          { id: 'b', text: 'Translating texts from one language to another', isCorrect: false },
          { id: 'c', text: 'Learning grammar rules in a foreign language', isCorrect: false },
          { id: 'd', text: 'Speaking with a foreign accent', isCorrect: false },
        ],
        solution: 'Translanguaging refers to the natural way multilingual speakers draw on all their linguistic resources -- from any of their languages -- to communicate effectively. It is a sign of sophisticated linguistic ability, not confusion or laziness.',
      },
    },
    // --- DEFINITION 2: Lifelong Language Learning ---
    {
      id: 'ie-8-5-def-2',
      type: 'definition',
      title: 'Lifelong Language Learning',
      content: `Language development does not stop when you leave school. Here are strategies for continuing to grow as an English user throughout your life:

**1. Extensive Reading**
Read widely and regularly in English. This is the single most effective way to expand vocabulary, improve grammar intuitively, and develop a feel for natural expression.
- *Fiction:* Novels, short stories, literary magazines
- *Non-fiction:* News articles, essays, popular science, memoirs
- *Professional:* Texts in your field of study or work
- *Tip:* Read slightly above your comfort level to challenge yourself

**2. Active Listening**
Engage with spoken English in varied contexts.
- Podcasts on topics you enjoy
- Films and series without subtitles (or with English subtitles)
- Lectures and TED talks
- Conversations with English speakers

**3. Writing Practice**
Regular writing develops fluency and precision.
- Keep a journal in English
- Write reviews, blog posts, or social media content
- Engage in English-language online communities
- Seek feedback on your writing from peers or AI tools

**4. Speaking Opportunities**
Active speaking is essential for maintaining and improving oral fluency.
- Conversation groups or language exchange partners
- Professional presentations and meetings in English
- Travel and study abroad
- Online voice/video conversations

**5. Deliberate Learning**
Continue to study aspects of English intentionally.
- Vocabulary building (learn a new word every day)
- Grammar refinement (focus on your persistent weak areas)
- Pronunciation practice (record yourself and compare)
- Register awareness (practice formal and informal styles)

**6. Cultural Immersion**
Engage with English-language cultures authentically.
- Follow English-language news and current events
- Read literature from diverse English-speaking countries
- Explore music, art, and cultural traditions
- Build friendships with English speakers from different backgrounds`,
    },
    // --- EXAMPLE 2 ---
    {
      id: 'ie-8-5-example-2',
      type: 'example',
      title: 'Example: Building Your Personal Language Plan',
      problem: 'How can you create a realistic plan for continued English development after school?',
      solution: `**A Sample Personal Language Development Plan:**

**Step 1: Self-Assessment**
Ask yourself honestly:
- What are my strongest skills? (Reading? Speaking? Writing? Listening?)
- Where do I struggle most?
- What situations make me feel confident in English?
- What situations make me feel uncertain?
- What do I need English for right now, and what will I need it for in the future?

**Step 2: Set Specific Goals**
Bad goal: "Improve my English"
Good goals:
- "Read one English-language novel per month for the next year"
- "Learn 10 new academic vocabulary words per week"
- "Give at least two presentations in English this semester"
- "Write a 500-word journal entry in English three times per week"

**Step 3: Create Habits, Not Just Intentions**
- Attach English practice to existing habits (listen to an English podcast during your commute)
- Use technology reminders and streaks (vocabulary apps, reading trackers)
- Find an accountability partner (a friend who shares your goals)

**Step 4: Diversify Your Input**
- If you only consume American entertainment, try British, Australian, or Indian English content
- If you only read fiction, add non-fiction
- If you only write informally, practice formal registers

**Step 5: Track and Reflect**
- Keep a record of what you read, watch, and listen to in English
- Periodically reassess your goals and adjust
- Celebrate milestones (your first novel in English, your first presentation without notes)

**The key principle:** Small, consistent actions over time produce far greater results than occasional intensive efforts.`,
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-8-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Complete a personal English self-assessment. For each skill area, rate yourself on a scale of 1-5 (1 = beginner, 5 = very confident) and give a brief explanation.',
        subTasks: [
          {
            label: 'a',
            task: 'Reading comprehension: How well can you understand complex written texts in English?',
            solution: 'Your answer will be personal. A VG2/VG3 student might rate themselves 3-5, noting that they can read news and fiction easily but struggle with specialized academic or literary texts.',
          },
          {
            label: 'b',
            task: 'Speaking fluency: How comfortably can you express yourself orally in English?',
            solution: 'Your answer will be personal. Consider situations where you feel confident (casual conversation) versus situations where you struggle (formal debates, presentations, speaking with native speakers).',
          },
          {
            label: 'c',
            task: 'Writing quality: How effectively can you write essays, emails, and creative texts in English?',
            solution: 'Your answer will be personal. Consider both accuracy (grammar, spelling) and style (vocabulary range, sentence variety, ability to adapt register).',
          },
          {
            label: 'd',
            task: 'Listening comprehension: How well can you understand different English accents and speaking speeds?',
            solution: 'Your answer will be personal. Many Norwegian students understand American English well but struggle with strong British, Indian, or Australian accents. Consider whether you can follow fast-paced speech, humor, and implied meanings.',
          },
        ],
        solution: 'Honest self-assessment is the foundation of effective language development. Identifying your strengths gives you confidence, while identifying your weaknesses gives you direction.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-8-5-summary',
      type: 'text',
      title: 'Summary: Your English, Your Future',
      content: `## Key Takeaways

**Your linguistic identity is unique and valuable.** Your English does not need to sound like a native speaker's to be effective, professional, and authentic.

**English proficiency opens career doors** across virtually every professional field -- from technology and science to business, media, healthcare, and education.

**Language learning is a lifelong process.** Leaving school is the beginning of your independent language journey, not the end. Small, consistent habits produce the best long-term results.

**Translanguaging and code-switching are strengths,** not weaknesses. Drawing on all your linguistic resources is a sign of sophisticated communication ability.

**Self-assessment and goal-setting** are essential for continued growth. Know your strengths, identify your weaknesses, and create a realistic plan for improvement.

**Your perspective matters.** As a multilingual Norwegian speaker of English, you bring a valuable cross-cultural perspective to every English interaction. Your voice is part of the global conversation -- use it with confidence.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-8-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Which of the following is the MOST effective strategy for long-term English improvement?',
        options: [
          { id: 'a', text: 'Small, consistent daily habits like reading and listening in English', isCorrect: true },
          { id: 'b', text: 'Memorizing the entire English dictionary', isCorrect: false },
          { id: 'c', text: 'Only watching English-language films with Norwegian subtitles', isCorrect: false },
          { id: 'd', text: 'Intensive study once a year before an exam', isCorrect: false },
        ],
        solution: 'Research consistently shows that regular, sustained exposure to and practice with a language produces far better results than occasional intensive study. Building daily habits -- reading, listening, writing, and speaking in English -- is the most effective path to continued improvement.',
      },
    },
    {
      id: 'ie-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-8-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write a personal "English Language Manifesto" (250-350 words). This is a statement of who you are as an English speaker, what English means to you, and how you plan to develop your English in the future. Address the following points:',
        subTasks: [
          {
            label: 'a',
            task: 'Your English story: How did you start learning English? What milestones stand out?',
            solution: 'Personal response. Could include first English words learned from games or TV, a memorable teacher, a trip abroad, a book that changed your perspective, or a moment when you realized you could think in English.',
          },
          {
            label: 'b',
            task: 'Your English now: What are you proud of? What do you wish was better?',
            solution: 'Personal response. Honest self-reflection showing both confidence in strengths and awareness of areas for growth.',
          },
          {
            label: 'c',
            task: 'Your English future: How will you use English in your career, education, and personal life? What specific goals do you have?',
            solution: 'Personal response. Should include concrete, achievable goals linked to specific plans of action. For example: "I want to study abroad in Scotland, so I will practice academic writing and listening to Scottish accents."',
          },
        ],
        hints: [
          'Be authentic -- this is about YOUR experience and YOUR goals',
          'Use specific examples and personal anecdotes',
          'Make your goals concrete and achievable, not vague and unrealistic',
          'Show awareness of the broader context (global English, multilingualism, AI)',
        ],
        solution: 'A strong manifesto will be personal, specific, and forward-looking. It should demonstrate self-awareness, realistic goal-setting, and an understanding of English\'s role in the writer\'s life and the wider world.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-8-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'A Norwegian student feels embarrassed about their accent when speaking English. What would a linguist most likely say?',
        options: [
          { id: 'a', text: 'A non-native accent is a sign of multilingual competence, not a deficiency', isCorrect: true },
          { id: 'b', text: 'They should practice until they sound like a native British speaker', isCorrect: false },
          { id: 'c', text: 'An accent means their English is too poor for international use', isCorrect: false },
          { id: 'd', text: 'They should avoid speaking English in public until their accent improves', isCorrect: false },
        ],
        solution: 'Modern linguistics emphasizes that a non-native accent is a natural consequence of multilingualism -- it shows you have mastered multiple language systems. The goal of English communication should be clarity and effectiveness, not imitation of a native accent. Your accent is part of your linguistic identity.',
      },
    },
    {
      id: 'ie-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-8-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Looking back at the entire Section 8 ("The Future of English"), write a concluding reflection (200-250 words) answering the question: "What is the most important thing I have learned about the future of English, and how does it affect me personally?"',
        hints: [
          'Connect ideas from all five chapters (language change, technology, AI, multilingualism, personal development)',
          'Be specific about how the ideas relate to your own life and goals',
          'Show critical thinking -- not just summary but analysis and personal response',
        ],
        solution: 'A strong reflection will synthesize ideas from across the section, demonstrate personal engagement with the material, and articulate a thoughtful perspective on the student\'s own place in the future of English. The best responses will make specific connections between the chapter content and the student\'s own experiences and goals.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL SECTION 8 CHAPTERS
// ============================================================================

export const INT_ENGELSK_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_INT_ENGELSK_8_1,
  CHAPTER_INT_ENGELSK_8_2,
  CHAPTER_INT_ENGELSK_8_3,
  CHAPTER_INT_ENGELSK_8_4,
  CHAPTER_INT_ENGELSK_8_5,
];
