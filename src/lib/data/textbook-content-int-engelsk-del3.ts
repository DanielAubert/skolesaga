/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 3.1: Language and Cultural Identity
// ============================================================================

export const CHAPTER_INT_ENGELSK_3_1: TextbookChapter = {
  id: 'int-engelsk-3-1',
  courseId: 'int-engelsk',
  chapterNumber: '3.1',
  title: 'Language and Cultural Identity',
  description: 'Explore how language shapes our sense of self, belonging, and worldview, including the Sapir-Whorf hypothesis and the connection between language and cultural identity.',
  estimatedMinutes: 22,
  competenceGoals: [
    'discuss and elaborate on the relationship between language, culture, and identity',
    'reflect on how English interacts with other languages and identities in a globalized world',
  ],
  content: [
    {
      id: 'ie-3-1-intro',
      type: 'text',
      content: `## How Language Shapes Who We Are

Language is far more than a tool for communication. It is deeply intertwined with our identity -- how we see ourselves, how others perceive us, and how we relate to our community and culture. The language or languages we speak influence the way we think, the stories we tell, and the social groups we belong to.

**Why does language matter for identity?**

- **Personal identity:** The language you grow up speaking becomes part of who you are. Your accent, vocabulary, and expressions signal where you come from and who your people are.
- **Group belonging:** Shared language creates solidarity. Speaking the same dialect or slang marks you as an insider.
- **Cultural transmission:** Language carries cultural knowledge -- proverbs, humor, values, and ways of seeing the world that cannot be perfectly translated.
- **Emotional connection:** Many multilingual speakers report that their first language feels more emotionally authentic, even if they are fluent in another language.

Consider your own experience: Do you feel like a slightly different person when you speak English compared to Norwegian? Many bilingual speakers report exactly this -- a shift in personality, humor, or even worldview depending on which language they are using.`,
    },
    {
      id: 'ie-3-1-def-1',
      type: 'definition',
      title: 'The Sapir-Whorf Hypothesis',
      content: `The **Sapir-Whorf hypothesis** (also called **linguistic relativity**) proposes that the language we speak shapes the way we think and perceive the world.

**Strong version (Linguistic Determinism):**
Language *determines* thought. If your language lacks a word for something, you cannot think about it. This strong version is largely rejected by modern linguists.

**Weak version (Linguistic Relativity):**
Language *influences* thought and perception. The categories and structures of your language make certain thoughts easier or more habitual, without making other thoughts impossible.

**Key examples:**
- **Color perception:** The Russian language has separate basic words for light blue (*goluboy*) and dark blue (*siniy*). Studies show Russian speakers are faster at distinguishing these shades than English speakers.
- **Time and space:** The Kuuk Thaayorre people of Australia use cardinal directions (north, south, east, west) instead of left and right. They have an extraordinary sense of spatial orientation.
- **Gendered nouns:** In languages where "bridge" is grammatically feminine (e.g., German: *die Brucke*), speakers are more likely to describe bridges as "elegant" or "slender." In languages where it is masculine (e.g., Spanish: *el puente*), speakers tend to use words like "strong" or "sturdy."

**Modern consensus:**
Language does not imprison thought, but it does create habits of mind. The language you speak makes certain concepts more salient and accessible.`,
    },
    {
      id: 'ie-3-1-example-1',
      type: 'example',
      title: 'Example: Language and Belonging',
      problem: `How can language serve as a marker of group identity? Consider the following scenario:

A teenager moves from Bergen to Oslo. In Bergen, she speaks the local dialect naturally. In Oslo, classmates comment on her accent and occasionally imitate it.`,
      solution: `**Analysis:**

**Language as social marker:**
The teenager's Bergen dialect immediately signals her geographic origin. In Norway, dialect is a strong identity marker -- people can often identify which region, even which town, someone comes from based on their speech.

**Social pressure:**
The classmates' reactions -- commenting and imitating -- create social pressure. The teenager faces a choice:
1. **Maintain her dialect** -- preserving her Bergen identity but remaining "different"
2. **Accommodate** -- gradually shifting toward Oslo speech patterns to fit in
3. **Code-switch** -- using Bergen dialect with family and friends from home, and Oslo-influenced speech at school

**Identity implications:**
- Changing dialect can feel like betraying one's roots
- Maintaining dialect can feel like asserting pride in one's background
- Many people develop hybrid speech patterns that reflect multiple identities

**Broader relevance:**
This dynamic is not unique to Norway. Immigrants, minority language speakers, and people who move between social classes all face similar choices about language and belonging. Language becomes a site where identity is negotiated, performed, and sometimes contested.`,
    },
    {
      id: 'ie-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What does the weak version of the Sapir-Whorf hypothesis claim?',
        options: [
          'Language influences thought and perception without fully determining it',
          'Language completely determines what we can think',
          'All languages express exactly the same ideas equally well',
          'Language has no effect on thought whatsoever',
        ],
        answer: 0,
        solution: 'The weak version (linguistic relativity) holds that language influences but does not determine thought. Your language makes certain concepts more habitual or salient, but does not prevent you from thinking thoughts that your language lacks words for.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which of the following best illustrates how language can function as a marker of identity?',
        options: [
          'A person\'s dialect reveals their regional background and social group',
          'A person uses a dictionary to look up a word',
          'A person writes a formal email to a colleague',
          'A person reads a novel in translation',
        ],
        answer: 0,
        solution: 'Dialect is one of the most powerful identity markers in language. It signals geographic origin, social class, education level, and group membership -- often within the first few seconds of conversation.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-1-text-2',
      type: 'text',
      content: `## Language Loss and Identity Crisis

When a community loses its language, it does not simply lose a communication system -- it loses a way of understanding the world.

**The scale of language loss:**
- There are approximately 7,000 languages spoken in the world today
- Linguists estimate that about half will disappear by 2100
- A language dies roughly every two weeks
- 96% of the world's languages are spoken by only 4% of the population

**What is lost when a language dies?**

1. **Cultural knowledge:** Indigenous languages often contain detailed ecological knowledge -- names for plants, animals, and natural phenomena that have no equivalent in dominant languages.
2. **Philosophical frameworks:** Each language embodies a unique way of categorizing experience. The Hopi language, for instance, conceptualizes time differently from European languages.
3. **Literary traditions:** Oral literature, songs, and narratives that have been passed down for generations disappear with the last speaker.
4. **Identity and dignity:** For communities whose language is dying, the loss can feel like an erasure of their history and identity.

**Case study: The Sami languages in Scandinavia**

The Sami peoples of northern Scandinavia have experienced significant language loss due to centuries of assimilation policies. Norwegian, Swedish, and Finnish governments historically forbade the use of Sami languages in schools. Today, revitalization efforts are underway, but several Sami language varieties have very few remaining speakers.`,
    },
    {
      id: 'ie-3-1-def-2',
      type: 'definition',
      title: 'Key Terms: Language and Identity',
      content: `**Mother tongue / First language (L1):** The language a person learns first, usually in the home. Often carries the strongest emotional connections.

**Heritage language:** A language spoken in the home or community that differs from the dominant language of the wider society.

**Language shift:** When a community gradually abandons its traditional language in favor of a more dominant one.

**Language death:** When the last speaker of a language dies and no new speakers are being raised.

**Language revitalization:** Efforts to reverse language decline by teaching the language to new speakers, creating media, and using it in new domains.

**Linguistic identity:** The aspect of a person's identity that is connected to the language(s) they speak and the communities those languages belong to.

**Ethnolinguistic vitality:** The strength and sustainability of a language community -- determined by factors such as number of speakers, institutional support, and intergenerational transmission.`,
    },
    {
      id: 'ie-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Discuss the relationship between language and identity.',
        subTasks: [
          {
            label: 'a',
            task: 'Explain what it means to say that language is "more than a tool for communication." Give at least two specific examples.',
            solution: 'Language carries cultural knowledge (proverbs, humor, worldviews), serves as a marker of group belonging (dialect signals origin and social group), has emotional significance (first language often feels more authentic for expressing feelings), and transmits identity across generations. Examples: Norwegian dialects marking regional identity; indigenous languages containing ecological knowledge with no equivalent in English.',
          },
          {
            label: 'b',
            task: 'Why might the loss of a language be described as an "identity crisis" for a community? Use the Sami case as an example.',
            solution: 'When a language disappears, the community loses its unique way of understanding the world, its oral literature and traditions, and a key marker of group identity. For the Sami, assimilation policies that banned their languages in schools aimed to erase Sami identity. The loss of language meant loss of traditional knowledge about reindeer herding, nature, and cultural practices encoded in the Sami languages.',
          },
        ],
        hints: ['Think about what language carries beyond literal meaning', 'Consider both individual and community-level effects'],
        solution: 'Language is central to identity because it carries culture, marks group belonging, and shapes perception. Language loss threatens both individual and collective identity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflect on your own linguistic identity. Write a short text (150-200 words) addressing the following questions: Do you feel like a different person when you speak English versus Norwegian? Does language affect your sense of humor, confidence, or personality? Have you ever felt that a word or expression in one language captures something that the other language cannot?',
        hints: ['Be honest and personal', 'Use specific examples from your own experience', 'Consider situations where you have switched between languages'],
        solution: 'A strong response will include personal examples and honest reflection on how switching between Norwegian and English feels different. Many students report feeling more formal or distant in English, while others feel freer or more expressive. The key is connecting personal experience to the broader concept of linguistic identity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-3-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A study found that Russian speakers, who have separate basic words for light blue and dark blue, can distinguish between those shades faster than English speakers. This finding supports which concept?',
        options: [
          'Linguistic relativity (the weak Sapir-Whorf hypothesis)',
          'Linguistic determinism (the strong Sapir-Whorf hypothesis)',
          'Language death',
          'Ethnolinguistic vitality',
        ],
        answer: 0,
        solution: 'This supports linguistic relativity -- the idea that language influences (but does not determine) perception. Russian speakers are faster at the distinction, but English speakers can still make it. Language creates habits of perception rather than absolute limits on thought.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-1-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- Language is deeply connected to identity -- personal, social, and cultural
- The Sapir-Whorf hypothesis (linguistic relativity) holds that language influences how we think and perceive, without fully determining thought
- Language serves as a marker of group belonging through dialect, accent, and vocabulary
- Language loss has profound consequences for communities, threatening cultural knowledge and collective identity
- Revitalization efforts aim to preserve endangered languages and the identities they carry
- As multilingual speakers, we navigate multiple linguistic identities in our daily lives`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3.2: Code-Switching and Translanguaging
// ============================================================================

export const CHAPTER_INT_ENGELSK_3_2: TextbookChapter = {
  id: 'int-engelsk-3-2',
  courseId: 'int-engelsk',
  chapterNumber: '3.2',
  title: 'Code-Switching and Translanguaging',
  description: 'Understand why multilingual speakers switch between languages, the social functions of code-switching, and the concept of translanguaging in education.',
  estimatedMinutes: 20,
  competenceGoals: [
    'discuss and elaborate on the relationship between language, culture, and identity',
    'analyze how multilingual speakers use their language resources creatively',
  ],
  content: [
    {
      id: 'ie-3-2-intro',
      type: 'text',
      content: `## Switching Between Languages

If you have ever started a sentence in Norwegian and finished it in English, or dropped an English word into a Norwegian conversation because it just *fit* better, you have practiced code-switching. Far from being a sign of linguistic confusion or laziness, code-switching is a sophisticated communicative strategy used by multilingual speakers worldwide.

**What is code-switching?**

Code-switching is the practice of alternating between two or more languages (or language varieties) within a single conversation, sentence, or even phrase. It is a natural and common behavior among bilingual and multilingual speakers.

**Types of code-switching:**

1. **Inter-sentential switching:** Switching between languages at sentence boundaries.
   - "Det var en veldig god film. I really loved the ending."

2. **Intra-sentential switching:** Switching within a single sentence.
   - "Kan du sende meg den file-en?"

3. **Tag-switching:** Inserting a tag or filler from one language into an utterance in another.
   - "Det blir bra, you know?"

Code-switching requires high competence in both languages. The speaker must know the grammar of both languages well enough to combine them without creating confusion.`,
    },
    {
      id: 'ie-3-2-def-1',
      type: 'definition',
      title: 'Functions of Code-Switching',
      content: `Linguists have identified several key social functions of code-switching:

**1. Solidarity and group identity:**
Switching to a shared minority language signals in-group membership. Norwegian-Pakistani teenagers might switch to Urdu when they want to mark solidarity with each other.

**2. Emphasis and expressiveness:**
A switch to another language can add emphasis or emotional force. "That was ikke greit!" mixes languages for dramatic effect.

**3. Topic-related switching:**
Speakers may switch languages when discussing certain topics. A Norwegian student might switch to English when talking about technology, gaming, or social media because those domains are more familiar in English.

**4. Quotation and reported speech:**
Speakers often switch languages when quoting someone. "Og da sa han, 'no way, that's impossible!'"

**5. Exclusion or inclusion:**
Switching languages can include or exclude people from a conversation. Speaking a language that not everyone understands can create boundaries.

**6. Accommodation:**
Speakers may switch to the language of the person they are talking to, out of politeness or to make communication easier.

**7. Identity performance:**
Code-switching can signal a cosmopolitan, bilingual, or multicultural identity.`,
    },
    {
      id: 'ie-3-2-example-1',
      type: 'example',
      title: 'Example: Code-Switching in Everyday Life',
      problem: `Consider the following conversation between two Norwegian university students:

Student A: "Har du lest den artikkelen til i morgen?"
Student B: "Ja, men den var so confusing. Hele den delen om methodology var basically impossible."
Student A: "Same. Jeg tror vi burde fikse en study group."
Student B: "Good idea. Jeg sender en message i gruppechatten."

Identify and analyze the code-switching in this dialogue.`,
      solution: `**Analysis:**

**Types of switching observed:**
- Intra-sentential: "den var so confusing" -- English adjective phrase inserted into Norwegian sentence
- Topic-related: "methodology" -- academic/technical term used in English
- Tag-switching: "Same." -- English response word used as a standalone element
- Borrowing/mixing: "study group," "message," "gruppechatten" -- English words integrated into Norwegian grammar

**Functions:**
1. **Topic-related:** Academic terminology is often learned and used in English, making English feel more natural for these concepts
2. **Expressiveness:** "so confusing" and "basically impossible" may feel more emphatic or precise in English
3. **Solidarity:** Both students code-switch freely, signaling shared bilingual identity and mutual comfort
4. **Convenience:** Some English expressions have no exact Norwegian equivalent that feels natural in casual speech

**Key insight:**
This conversation is completely natural for young Norwegians. The code-switching follows predictable patterns and serves clear communicative functions. Both speakers understand each other perfectly -- this is not miscommunication but rather skilled use of multilingual resources.`,
    },
    {
      id: 'ie-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'A Norwegian teenager says: "Den filmen var literally the best thing ever." What type of code-switching is this?',
        options: [
          'Intra-sentential switching (switching within a sentence)',
          'Inter-sentential switching (switching between sentences)',
          'Tag-switching',
          'This is not code-switching',
        ],
        answer: 0,
        solution: 'The speaker switches from Norwegian to English within the same sentence, which is intra-sentential code-switching. The sentence begins in Norwegian ("Den filmen var") and shifts to English ("literally the best thing ever").',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-2-text-2',
      type: 'text',
      content: `## Translanguaging: Beyond Code-Switching

While code-switching assumes that speakers move *between* separate language systems, **translanguaging** offers a different perspective. This newer concept suggests that multilingual speakers do not have separate language boxes in their minds but rather a single, integrated linguistic repertoire that they draw from flexibly.

**Code-switching vs. Translanguaging:**

| Aspect | Code-switching | Translanguaging |
|--------|---------------|-----------------|
| View of languages | Separate systems | One integrated repertoire |
| Focus | The switch itself | The speaker's full resources |
| Connotation | Sometimes seen as "mixing" | Seen as natural and strategic |
| In education | Often discouraged | Increasingly encouraged |

**Translanguaging in education:**

Traditionally, schools have operated on a "one language at a time" principle. Students were expected to keep their languages separate -- Norwegian in Norwegian class, English in English class. Translanguaging challenges this approach.

**Benefits of translanguaging in the classroom:**
- Students can use their full linguistic repertoire to make meaning
- It validates students' multilingual identities
- It can deepen understanding by allowing comparison between languages
- It helps students with weaker skills in the target language participate more fully
- It reflects how language actually works in multilingual communities

**Example in practice:**
A student writing an essay in English might brainstorm ideas in Norwegian first, look up key concepts in both languages, and discuss the topic with classmates using whichever language helps them think most clearly -- before producing the final text in English.`,
    },
    {
      id: 'ie-3-2-def-2',
      type: 'definition',
      title: 'Key Terms: Code-Switching and Translanguaging',
      content: `**Code-switching:** Alternating between two or more languages or language varieties within a conversation or utterance.

**Translanguaging:** The flexible use of a multilingual speaker's full linguistic repertoire, viewing all languages as part of one integrated system.

**Borrowing:** Incorporating a word from one language into another, often with phonological or grammatical adaptation (e.g., Norwegian "å surfe" from English "to surf").

**Code-mixing:** Sometimes used interchangeably with code-switching, but can specifically refer to mixing within a sentence (intra-sentential).

**Linguistic repertoire:** The full range of languages, dialects, registers, and styles that a speaker can draw upon.

**Domain:** A social context associated with a particular language. For example, English may dominate the domain of technology, while Norwegian dominates the domain of family life.

**Accommodation:** Adjusting one's speech to be more similar to the person one is speaking with, including switching languages.`,
    },
    {
      id: 'ie-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'How does the concept of translanguaging differ from traditional views of code-switching?',
        options: [
          'Translanguaging views multilingual speakers as having one integrated repertoire rather than separate language systems',
          'Translanguaging only applies to written language, while code-switching is oral',
          'Translanguaging is the same as code-switching but with a different name',
          'Translanguaging discourages the use of multiple languages',
        ],
        answer: 0,
        solution: 'The key difference is in how languages are conceptualized. Code-switching assumes separate systems that speakers move between, while translanguaging sees all of a speaker\'s linguistic resources as one integrated repertoire. This is not just a terminological difference -- it has practical implications for education and language policy.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyze code-switching in your own life.',
        subTasks: [
          {
            label: 'a',
            task: 'Pay attention to your own language use over the next day. Write down three examples of code-switching between Norwegian and English that you observe (in your own speech, in conversations, or on social media).',
            solution: 'Examples will vary, but common ones include: using English gaming/tech terms in Norwegian conversation, switching to English for emphasis or humor, using English phrases on social media, and mixing languages when discussing school subjects taught partly in English.',
          },
          {
            label: 'b',
            task: 'For each example, identify the type of code-switching (inter-sentential, intra-sentential, or tag-switching) and explain which function it serves (solidarity, emphasis, topic, quotation, etc.).',
            solution: 'Students should correctly classify the type and connect it to at least one function. For instance, using English tech terms is typically topic-related switching, while using English slang with friends often serves solidarity and identity functions.',
          },
        ],
        hints: ['Look at text messages, social media posts, and casual conversations', 'Consider gaming, music, and social media as domains where English is common'],
        solution: 'Responses should demonstrate awareness of code-switching patterns and the ability to analyze their functions using the terminology from this chapter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Some people argue that code-switching is "sloppy" or shows a lack of language skills. Others argue it is a sign of advanced bilingual competence. Write a paragraph (100-150 words) arguing one of these positions, using evidence from this chapter.',
        hints: ['Consider what code-switching requires the speaker to know', 'Think about the social functions it serves', 'Use specific terminology from the chapter'],
        solution: 'A strong response will argue that code-switching requires sophisticated knowledge of both languages and serves important social functions. The speaker must know the grammar of both languages well enough to combine them, and switches are not random but follow predictable patterns tied to communicative goals such as emphasis, solidarity, and topic appropriateness.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-3-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'When a Norwegian student switches to English to discuss a software project because all the technical terms are in English, which function of code-switching is this?',
        options: [
          'Topic-related switching',
          'Solidarity switching',
          'Exclusion',
          'Quotation',
        ],
        answer: 0,
        solution: 'This is topic-related switching. Certain topics or domains are more closely associated with a particular language. Technology and software development are domains where English terminology dominates, making it natural to switch to English when discussing these topics.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-2-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- Code-switching is the practice of alternating between languages within a conversation or sentence
- It comes in three main types: inter-sentential, intra-sentential, and tag-switching
- Code-switching serves important social functions including solidarity, emphasis, topic signaling, and identity performance
- Far from being "sloppy," code-switching requires high competence in multiple languages
- Translanguaging goes further, viewing multilingual speakers as having one integrated linguistic repertoire rather than separate language systems
- Translanguaging in education validates students' multilingual identities and can deepen learning`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3.3: Multilingualism
// ============================================================================

export const CHAPTER_INT_ENGELSK_3_3: TextbookChapter = {
  id: 'int-engelsk-3-3',
  courseId: 'int-engelsk',
  chapterNumber: '3.3',
  title: 'Multilingualism',
  description: 'Examine individual and societal multilingualism, its cognitive benefits, challenges, and the role of language policy in shaping multilingual societies.',
  estimatedMinutes: 25,
  competenceGoals: [
    'discuss and elaborate on multilingualism as a global phenomenon',
    'reflect on language policy and its effects on individuals and communities',
  ],
  content: [
    {
      id: 'ie-3-3-intro',
      type: 'text',
      content: `## The Multilingual World

Monolingualism is the exception, not the rule. More than half of the world's population speaks two or more languages in daily life. In many parts of Africa, South Asia, and Southeast Asia, it is entirely normal to speak three, four, or even five languages. Even in Europe, where monolingualism has historically been more common, multilingualism is growing rapidly due to migration, globalization, and education.

**Individual vs. societal multilingualism:**

- **Individual multilingualism** refers to a person's ability to use two or more languages. This can range from near-native fluency in all languages to dominant ability in one language with limited skills in others.
- **Societal multilingualism** refers to the presence and use of multiple languages within a country or community. A society can be multilingual even if most individuals are monolingual (as in Belgium, where different regions speak different languages).

**How common is multilingualism?**

- **India:** 22 officially recognized languages, with hundreds more spoken. Most Indians speak at least two or three languages.
- **Singapore:** Four official languages (English, Mandarin, Malay, Tamil). Most citizens are bilingual or trilingual.
- **Luxembourg:** Three official languages (Luxembourgish, French, German). Most citizens speak all three plus English.
- **South Africa:** 11 official languages. Many South Africans speak three or more.
- **Norway:** Two official written standards (Bokmal and Nynorsk), Sami languages, and increasingly English as a de facto second language.`,
    },
    {
      id: 'ie-3-3-def-1',
      type: 'definition',
      title: 'Types of Multilingualism',
      content: `**Additive bilingualism:** Learning a second language while maintaining and continuing to develop the first. Associated with cognitive benefits and positive outcomes. Example: A Norwegian child learning English at school while continuing to develop Norwegian at home.

**Subtractive bilingualism:** Learning a second language at the expense of the first, which gradually weakens. Associated with negative outcomes. Example: An immigrant child whose first language is not supported at school and gradually loses ability in it.

**Simultaneous bilingualism:** Acquiring two languages from birth (e.g., one parent speaks one language, the other speaks another).

**Sequential bilingualism:** Acquiring a second language after the first is already established (typically after age 3).

**Receptive bilingualism (passive bilingualism):** Understanding a language without being able to speak it fluently. Common in Scandinavian mutual intelligibility -- many Norwegians can understand Swedish and Danish without speaking them.

**Elite bilingualism:** Bilingualism by choice, often among privileged classes who learn languages through education and travel. Contrasted with **folk bilingualism**, where multilingualism arises from necessity (immigration, minority status).`,
    },
    {
      id: 'ie-3-3-example-1',
      type: 'example',
      title: 'Example: Cognitive Benefits of Multilingualism',
      problem: `Research has shown that multilingualism offers significant cognitive advantages. Examine the evidence and consider its implications.`,
      solution: `**The bilingual advantage -- evidence and debate:**

**Executive function:**
Bilingual individuals frequently outperform monolinguals on tasks that require:
- **Attention control:** Focusing on relevant information while ignoring distractions
- **Cognitive flexibility:** Switching between tasks or mental frameworks
- **Working memory:** Holding and manipulating information

This is often called the "bilingual advantage" in executive function. The theory is that constantly managing two languages strengthens the brain's executive control system.

**Delayed onset of dementia:**
Several large-scale studies have found that bilingual individuals develop symptoms of Alzheimer's disease and dementia 4-5 years later than monolinguals, on average. This suggests a "cognitive reserve" built through lifelong bilingualism.

**Metalinguistic awareness:**
Multilingual speakers tend to have a better understanding of how language works in general. They are better at recognizing patterns, understanding grammar concepts, and learning additional languages.

**Important caveats:**
- The "bilingual advantage" has been debated, with some studies failing to replicate the findings
- Benefits depend on the degree and type of bilingualism
- Socioeconomic factors can confound results
- The benefits are not an argument against supporting monolingual communities -- they simply show that multilingualism is cognitively healthy`,
    },
    {
      id: 'ie-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the difference between additive and subtractive bilingualism?',
        options: [
          'Additive means learning a new language while maintaining the first; subtractive means the first language weakens as the second develops',
          'Additive means learning languages by adding vocabulary; subtractive means forgetting vocabulary',
          'They are two names for the same process',
          'Additive refers to children; subtractive refers to adults',
        ],
        answer: 0,
        solution: 'Additive bilingualism occurs when a new language is added without negatively affecting the first language -- both continue to develop. Subtractive bilingualism occurs when the new (dominant) language gradually replaces the first language, which weakens over time. Educational and social support for the first language is key to achieving additive bilingualism.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-3-text-2',
      type: 'text',
      content: `## Language Policy and Multilingualism

Every country has language policies -- explicit or implicit rules about which languages are used in government, education, media, and public life. These policies profoundly affect which languages thrive and which decline.

**Types of language policy:**

**1. Official monolingualism:**
One language is designated as the sole official language. Other languages may be tolerated but receive no official support.
- Example: France, where French is the only official language and regional languages (Breton, Occitan, Basque) have historically been marginalized.

**2. Official multilingualism:**
Multiple languages are recognized as official.
- Example: Switzerland (German, French, Italian, Romansh), Canada (English, French), India (Hindi, English, plus 20+ scheduled languages).

**3. Language-in-education policy:**
Determines which languages are used as medium of instruction in schools and which languages are taught as subjects.
- Example: Norway requires all students to learn both Bokmal and Nynorsk, plus English.

**4. Assimilation policies:**
Historically, many countries have pressured minority groups to abandon their languages in favor of the dominant language.
- Example: The forced assimilation of indigenous peoples in Norway (Sami), Australia (Aboriginal languages), and the Americas (Native American languages).

**5. Language rights:**
International frameworks increasingly recognize linguistic rights as human rights, including the right to education in one's mother tongue and the right to use one's language in legal and public settings.`,
    },
    {
      id: 'ie-3-3-def-2',
      type: 'definition',
      title: 'Key Terms: Multilingualism and Language Policy',
      content: `**Language policy:** Decisions and rules (explicit or implicit) about which languages are used in government, education, media, and public life.

**Official language:** A language given legal status by a government for use in public administration, courts, and legislation.

**Medium of instruction (MOI):** The language used to teach subjects in school. A critical factor in educational outcomes for multilingual students.

**Mother-tongue education:** Teaching children in their first language, at least in the early years. Research consistently shows this produces better educational outcomes.

**Language planning:** Deliberate efforts to influence the structure, function, or acquisition of languages within a community.

**Corpus planning:** Efforts to develop the language itself (creating new vocabulary, standardizing grammar, writing dictionaries).

**Status planning:** Efforts to change the social status or function of a language (making it official, using it in education).

**Linguistic human rights:** The right of individuals and communities to use, maintain, and develop their languages without discrimination.`,
    },
    {
      id: 'ie-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-3-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Compare two different approaches to language policy.',
        subTasks: [
          {
            label: 'a',
            task: 'Compare France\'s approach to language policy (official monolingualism) with Switzerland\'s approach (official multilingualism). What are the advantages and disadvantages of each?',
            solution: 'France: advantages include national unity and a shared language of public life; disadvantages include marginalization of regional languages (Breton, Occitan, Basque, Alsatian) and loss of linguistic diversity. Switzerland: advantages include respect for linguistic diversity and protection of minority languages; disadvantages include the complexity and cost of operating in four languages and potential for regional tensions along language lines.',
          },
          {
            label: 'b',
            task: 'Which approach do you think Norway\'s language policy most resembles? Explain your reasoning.',
            solution: 'Norway has elements of both. It officially recognizes two written standards (Bokmal and Nynorsk), has granted official status to Sami languages in certain regions, and requires English instruction. However, Norwegian clearly dominates, and many would argue that Nynorsk and Sami languages receive insufficient support in practice. Norway\'s approach might be described as officially multilingual but practically dominated by Bokmal.',
          },
        ],
        hints: ['Consider both official policy and actual practice', 'Think about minority language rights'],
        solution: 'A good comparison will consider both the stated policies and their practical effects on speakers of different languages.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-3-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'When a Norwegian understands spoken Swedish without having formally studied the language, this is an example of:',
        options: [
          'Receptive bilingualism',
          'Simultaneous bilingualism',
          'Elite bilingualism',
          'Subtractive bilingualism',
        ],
        answer: 0,
        solution: 'Receptive bilingualism (also called passive bilingualism) means understanding a language without being able to speak it fluently. This is common in Scandinavia, where the mutual intelligibility of Norwegian, Swedish, and Danish allows speakers to understand each other\'s languages without formal study.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Research and discussion: Should Norway do more to support multilingualism? Write a well-argued text (200-250 words) discussing whether Norwegian language policy should do more to support immigrant languages alongside Norwegian and English. Consider both the potential benefits and practical challenges.',
        hints: ['Consider what research says about mother-tongue education', 'Think about both individual and societal benefits', 'Address the practical challenges honestly', 'Consider the difference between additive and subtractive bilingualism'],
        solution: 'A strong response will acknowledge that supporting immigrant languages can promote additive bilingualism (better outcomes for individuals) and cultural enrichment (benefits for society), while also recognizing practical challenges such as the cost of multilingual education, the large number of languages represented, and the importance of ensuring strong Norwegian skills. The best answers will draw on concepts from this chapter such as additive vs. subtractive bilingualism, mother-tongue education, and linguistic human rights.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-3-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which statement about multilingualism is correct?',
        options: [
          'More than half the world\'s population speaks two or more languages',
          'Monolingualism is the global norm',
          'Multilingualism causes cognitive confusion in children',
          'Only wealthy countries have multilingual populations',
        ],
        answer: 0,
        solution: 'Multilingualism is the global norm, not the exception. More than half of the world\'s population uses two or more languages in daily life. Monolingualism is relatively unusual in global terms, though it has been more common historically in some Western European countries.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-3-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- Multilingualism is the global norm -- more than half the world's population speaks multiple languages
- Individual multilingualism ranges from balanced bilingualism to receptive knowledge, with many forms in between
- Additive bilingualism (maintaining the first language while adding others) is associated with cognitive benefits
- Cognitive advantages of multilingualism include improved executive function, delayed dementia, and enhanced metalinguistic awareness
- Language policy profoundly shapes which languages thrive and which decline in a society
- Mother-tongue education is consistently supported by research as producing better outcomes
- Linguistic human rights are increasingly recognized in international frameworks`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3.4: Language and Power
// ============================================================================

export const CHAPTER_INT_ENGELSK_3_4: TextbookChapter = {
  id: 'int-engelsk-3-4',
  courseId: 'int-engelsk',
  chapterNumber: '3.4',
  title: 'Language and Power',
  description: 'Analyze how language attitudes, standard vs non-standard varieties, language discrimination, and language rights intersect with social power structures.',
  estimatedMinutes: 23,
  competenceGoals: [
    'discuss and elaborate on how language is connected to power and social inequality',
    'analyze language attitudes and their consequences for individuals and groups',
  ],
  content: [
    {
      id: 'ie-3-4-intro',
      type: 'text',
      content: `## Language, Power, and Inequality

Language is never neutral. The way we speak marks us as belonging to particular social groups, and society assigns different levels of prestige to different ways of speaking. These language attitudes have real consequences -- they can open doors or close them, include people or exclude them, empower communities or marginalize them.

**Who decides what is "correct" language?**

There is a persistent belief that some forms of language are "correct," "proper," or "educated," while others are "incorrect," "sloppy," or "uneducated." But from a linguistic perspective, all natural varieties of language are systematic, rule-governed, and capable of expressing complex thought. The varieties that are considered "standard" or "prestigious" are not linguistically superior -- they are simply the varieties spoken by those who hold social and economic power.

**Language attitudes and social hierarchy:**

Consider these examples:
- In England, Received Pronunciation (RP) -- the accent associated with the upper class and BBC broadcasting -- is widely perceived as more intelligent, competent, and trustworthy than regional accents like Cockney or Brummie.
- In the United States, African American Vernacular English (AAVE) is often stigmatized despite being a fully systematic language variety with consistent grammatical rules.
- In Norway, certain dialects carry more prestige than others, and the status of Nynorsk versus Bokmal remains a politically charged issue.

The key insight is that **language prejudice is really social prejudice**. When people judge a way of speaking, they are usually judging the people who speak that way.`,
    },
    {
      id: 'ie-3-4-def-1',
      type: 'definition',
      title: 'Standard Language and Language Ideology',
      content: `**Standard language:** A variety of language that has been codified (given official grammar rules, dictionaries, and spelling), is used in formal education, government, and media, and is generally perceived as the "correct" or "neutral" form.

**Language ideology:** A set of beliefs and attitudes about language that reflect the social, political, and economic interests of particular groups. Language ideologies are often presented as common sense but actually serve to maintain existing power structures.

**Standard language ideology:** The belief that there is one correct way to speak and write a language, and that this standard is inherently better than non-standard varieties. This ideology:
- Presents the standard as neutral and natural, when it is actually a social construct
- Stigmatizes non-standard speakers as uneducated or lazy
- Benefits speakers of the standard variety in education, employment, and social status
- Ignores the systematic, rule-governed nature of non-standard varieties

**Prescriptivism vs. Descriptivism:**
- **Prescriptivism:** The approach that says language should follow established rules and that deviations are errors. ("You should say 'whom,' not 'who' in that sentence.")
- **Descriptivism:** The approach that observes and documents how language is actually used, without making judgments about correctness. ("Speakers increasingly use 'who' in all positions.")

Most modern linguists are descriptivists, while public discourse about language tends to be prescriptivist.`,
    },
    {
      id: 'ie-3-4-example-1',
      type: 'example',
      title: 'Example: Language Discrimination in Practice',
      problem: `Consider the following scenarios. In each case, identify how language attitudes lead to discrimination:

1. A job applicant with a strong regional accent is not hired despite having the best qualifications.
2. A student whose first language is not English is placed in a lower academic track at school.
3. A politician is mocked in the media for using grammatical forms associated with working-class speech.`,
      solution: `**Analysis:**

**Scenario 1 -- Employment discrimination:**
The employer is judging the applicant not on competence but on accent. Research consistently shows that accent-based discrimination is widespread in hiring. Speakers of non-standard varieties are perceived as less intelligent, less competent, and less suitable for public-facing roles -- even when their actual abilities are equal or superior. This is language discrimination functioning as class discrimination.

**Scenario 2 -- Educational gatekeeping:**
The student's academic potential is being assessed through the lens of language. Students who speak non-standard varieties or who are still developing proficiency in the school language are often underestimated. This can become a self-fulfilling prophecy: placed in lower tracks, they receive less challenging instruction and have fewer opportunities to demonstrate their abilities.

**Scenario 3 -- Public shaming:**
Mocking a politician's language is a way of attacking their social background and legitimacy. Working-class speech patterns are used to imply that the speaker is not intelligent or sophisticated enough for public office. This reinforces the idea that only certain types of people -- those who speak the "right" way -- deserve positions of authority.

**Common thread:**
In all three cases, language is being used as a proxy for social class, intelligence, or competence. The discrimination is ultimately not about language itself but about the social groups associated with particular ways of speaking.`,
    },
    {
      id: 'ie-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Why do linguists consider "standard language ideology" problematic?',
        options: [
          'It presents the standard variety as inherently superior when it is actually a social construct that benefits those already in power',
          'Standard languages are too difficult for most people to learn',
          'Linguists believe all grammar rules should be abolished',
          'Standard languages change too quickly to be useful',
        ],
        answer: 0,
        solution: 'Standard language ideology is problematic because it presents one variety (typically the speech of the powerful and educated classes) as naturally correct or superior, while stigmatizing other varieties as deficient. This ignores the linguistic fact that all natural language varieties are systematic and expressive. The standard is not linguistically better -- it is socially privileged.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-4-text-2',
      type: 'text',
      content: `## Language Rights and Linguistic Justice

The recognition that language discrimination is a form of social injustice has led to growing attention to language rights.

**What are language rights?**

Language rights are the rights of individuals and communities to use, maintain, and develop their languages without facing discrimination. They include:

1. **The right to use one's language in private life** -- speaking your language at home and in your community without punishment or stigma.
2. **The right to education in one's language** -- access to mother-tongue education, especially in the early years.
3. **The right to public services in one's language** -- access to healthcare, legal proceedings, and government services in a language one understands.
4. **The right to maintain and develop one's language** -- including the right to create media, literature, and educational materials in one's language.

**International frameworks:**
- The **Universal Declaration of Linguistic Rights** (1996) asserts that all language communities have equal rights.
- The **European Charter for Regional or Minority Languages** (1992) commits signatory states to protecting and promoting minority languages.
- The **UN Declaration on the Rights of Indigenous Peoples** (2007) recognizes indigenous language rights.

**Linguistic justice in practice:**

The concept of linguistic justice asks us to consider who benefits and who is disadvantaged by current language arrangements. When English is used as the default language of international business and science, native English speakers enjoy an automatic advantage. When a country conducts all its official business in only one language, speakers of minority languages are disadvantaged.

Achieving linguistic justice requires balancing practical considerations (the need for a common language) with respect for linguistic diversity and the rights of minority language speakers.`,
    },
    {
      id: 'ie-3-4-def-2',
      type: 'definition',
      title: 'Key Terms: Language and Power',
      content: `**Language attitudes:** The feelings and beliefs people hold about different languages and language varieties. Often unconscious and shaped by social stereotypes.

**Language discrimination (linguicism):** Discrimination based on a person's language or dialect. Can affect employment, education, housing, and legal proceedings.

**Linguistic prejudice:** Negative stereotypes or judgments about people based on the way they speak.

**Prestige variety:** A language variety that is associated with social status, education, and economic power. Often (but not always) the standard variety.

**Covert prestige:** The hidden prestige of non-standard varieties within their own communities. For example, speaking with a strong local accent may carry prestige among peers even though it is stigmatized by wider society.

**Linguistic justice:** The principle that language arrangements in society should not systematically disadvantage any group. Includes fair access to education, services, and opportunities regardless of language background.

**Language rights:** The legal and moral rights of individuals and communities to use, maintain, and develop their languages.`,
    },
    {
      id: 'ie-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What is "covert prestige" in sociolinguistics?',
        options: [
          'The hidden status that non-standard speech carries within its own community, even when stigmatized by wider society',
          'The prestige of speaking a foreign language',
          'The prestige of using technical jargon',
          'The tendency to hide one\'s accent in formal situations',
        ],
        answer: 0,
        solution: 'Covert prestige refers to the positive value placed on non-standard language varieties within their own speech communities. While a working-class dialect might be stigmatized by mainstream society, within the community itself, speaking that dialect signals belonging, loyalty, and authenticity. This is "covert" because it operates against the official prestige hierarchy.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyze language and power in the English-speaking world.',
        subTasks: [
          {
            label: 'a',
            task: 'Explain the difference between prescriptivism and descriptivism. Give an example of each approach to the sentence "Me and him went to the store."',
            solution: 'Prescriptivism: "This is incorrect. It should be \'He and I went to the store.\' \'Me\' and \'him\' are object pronouns and cannot be used as subjects." Descriptivism: "In informal spoken English, \'me and him\' as a subject is widely used and understood by all speakers. This is a natural feature of colloquial English that has been documented for centuries." The prescriptivist focuses on rules; the descriptivist documents actual usage.',
          },
          {
            label: 'b',
            task: 'How does the concept of "standard language ideology" help us understand why certain accents are perceived as more intelligent or trustworthy? Use a specific example.',
            solution: 'Standard language ideology tells us that perceptions of intelligence and trustworthiness based on accent are not objective assessments but reflections of social hierarchy. For example, RP (Received Pronunciation) in Britain is perceived as intelligent and authoritative because it is the accent of the historically powerful upper class and educational elite -- not because there is anything inherently more intelligent about it. The accent carries the social prestige of its speakers.',
          },
        ],
        hints: ['Remember that linguistic judgments often reflect social judgments', 'Consider who benefits from the standard language ideology'],
        solution: 'A good response will show understanding that language attitudes are social constructs that reflect and reinforce power hierarchies, not objective assessments of language quality.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Discussion essay (200-250 words): "English as the international language of science disadvantages non-native speakers." Do you agree or disagree? Discuss this statement with reference to the concepts of language and power, linguistic justice, and language rights.',
        hints: [
          'Consider the advantages and disadvantages of having one shared scientific language',
          'Think about what it means for non-native speakers to publish, present, and compete in English',
          'Consider whether there are alternative arrangements that would be more just',
        ],
        solution: 'A strong response will acknowledge that English as the language of science provides practical benefits (shared communication, wide readership) but also creates systematic disadvantages for non-native speakers (extra time and effort needed to write and present, potential for bias in peer review, loss of scientific terminology in other languages). The concept of linguistic justice suggests that current arrangements disproportionately benefit native English speakers. Possible alternatives or reforms include better support for non-native speakers, acceptance of non-standard English in academic contexts, and multilingual publication.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-3-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'From a linguistic perspective, which statement about non-standard language varieties is correct?',
        options: [
          'They are systematic, rule-governed, and fully capable of expressing complex thought',
          'They are simplified versions of the standard language',
          'They indicate a lack of education in the speaker',
          'They should be corrected whenever possible',
        ],
        answer: 0,
        solution: 'All natural language varieties -- including dialects, sociolects, and vernaculars that are considered "non-standard" -- are systematic and rule-governed. They have their own consistent grammar, phonology, and vocabulary. The perception that they are inferior is a social judgment, not a linguistic one.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-4-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- Language is never neutral -- different ways of speaking carry different levels of social prestige
- Standard language ideology presents one variety as inherently correct, but standards are social constructs that reflect power structures
- Language prejudice functions as a proxy for social prejudice (class, race, ethnicity, region)
- Language discrimination has real consequences in employment, education, and public life
- Prescriptivism focuses on rules and correctness; descriptivism documents how language is actually used
- Language rights are increasingly recognized as human rights
- Linguistic justice requires us to consider who benefits and who is disadvantaged by language arrangements in society
- Non-standard varieties are linguistically equal to standard varieties -- they are systematic, rule-governed, and expressive`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3.5: English and Norwegian Identity
// ============================================================================

export const CHAPTER_INT_ENGELSK_3_5: TextbookChapter = {
  id: 'int-engelsk-3-5',
  courseId: 'int-engelsk',
  chapterNumber: '3.5',
  title: 'English and Norwegian Identity',
  description: 'Investigate the influence of English on Norwegian language and identity, the debate around domain loss, the Scandinavian language situation, and code-mixing among Norwegian youth.',
  estimatedMinutes: 18,
  competenceGoals: [
    'discuss and elaborate on how English influences Norwegian language and culture',
    'reflect on the Scandinavian language situation and mutual intelligibility',
    'analyze how young Norwegians use English in their daily lives',
  ],
  content: [
    {
      id: 'ie-3-5-intro',
      type: 'text',
      content: `## English in Norway: Friend or Threat?

Norway is often cited as one of the most English-proficient countries in the world among non-native speakers. Norwegians consistently rank near the top of international English proficiency indexes, and English is deeply embedded in Norwegian daily life -- from entertainment and social media to business and higher education.

But this close relationship between English and Norwegian also raises important questions. Is English enriching Norwegian, or is it gradually replacing it in certain areas? Are young Norwegians losing the ability to express themselves fully in Norwegian? What happens to the Scandinavian languages when everyone switches to English instead?

**English in Norwegian daily life:**

- **Entertainment:** Most films, TV shows, music, and video games consumed by Norwegians are in English
- **Social media:** Young Norwegians frequently use English on platforms like Instagram, TikTok, and YouTube
- **Education:** Many university courses are taught in English, and most academic literature is in English
- **Business:** International companies in Norway often use English as their working language
- **Technology:** The language of computing, the internet, and gaming is predominantly English
- **Advertising:** English words and phrases are increasingly common in Norwegian advertising

**Key question:** Is this a natural evolution of language contact, or a threat to Norwegian language and culture?`,
    },
    {
      id: 'ie-3-5-def-1',
      type: 'definition',
      title: 'Domain Loss',
      content: `**Domain loss** occurs when a language gradually ceases to be used in particular areas of life (domains), being replaced by another language.

**How domain loss works:**

A domain is a social context where language is used -- such as family, education, government, science, business, or entertainment. When a language loses a domain, it means another language has taken over that function.

**Examples of potential domain loss in Norway:**
- **Higher education:** Many master's programs at Norwegian universities are taught entirely in English. Students may never learn the Norwegian terminology for their field.
- **Research:** Most academic papers by Norwegian researchers are published in English.
- **Business:** International companies operating in Norway often use English as their corporate language.
- **Technology:** Norwegian lacks much of the vocabulary used in IT, and English terms are used instead.

**Why domain loss matters:**
- If Norwegian is not used in academia, research, and business, it may gradually lose the ability to function in those areas (vocabulary gaps, lack of technical terms).
- Future generations may come to see Norwegian as a "home language" only suitable for informal use.
- This can lead to a diglossic situation where English is the "high" language of prestige and Norwegian is relegated to "low" functions.

**Counter-arguments:**
- Norwegian is not actually in danger of dying -- it has 5 million speakers and strong institutional support
- Languages have always borrowed from each other
- Some domain loss may be offset by language planning efforts (creating Norwegian technical vocabulary)`,
    },
    {
      id: 'ie-3-5-example-1',
      type: 'example',
      title: 'Example: Code-Mixing Among Norwegian Youth',
      problem: `Consider the following text messages between Norwegian teenagers. What do they reveal about the relationship between English and Norwegian among young people?

Message 1: "Omg den serien er literally so good!! har du sett episode 3 ennaa?"
Message 2: "yesss den var insane. men lowkey cringe at slutten tho"
Message 3: "haha true. men anyway, skal vi mote opp i morgen for a study?"`,
      solution: `**Analysis:**

**Patterns of English use:**
- **Discourse markers and fillers:** "omg," "literally," "lowkey," "anyway," "tho" -- English discourse markers are deeply integrated into Norwegian youth speech
- **Evaluative adjectives:** "insane," "cringe," "good," "true" -- English adjectives are often used for emotional evaluation, possibly because they carry associations from English-language media
- **Verbs and activities:** "study" -- English terms for school-related activities, reflecting the overlap between English and education
- **Grammatical integration:** English words are adapted to Norwegian grammar ("ennaa" = "enda" with elongated spelling, typical of texting)

**What this reveals:**
1. **Natural code-mixing:** This is not random but follows patterns -- English is used for evaluation, emphasis, and discourse management while Norwegian carries the core grammar and content
2. **Media influence:** Many of the English expressions come from social media, YouTube, and English-language entertainment
3. **Peer identity:** This mixed style signals youth identity and belonging to a digitally connected generation
4. **Selective integration:** Norwegian grammar remains dominant -- English words are inserted into Norwegian structures, not the other way around

**Important nuance:**
This code-mixing in casual contexts does not necessarily mean these speakers cannot use "pure" Norwegian or English when the situation requires it. Most Norwegian teenagers can adjust their language according to context -- texting friends, writing a school essay, and speaking to grandparents all involve different registers.`,
    },
    {
      id: 'ie-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is "domain loss" in the context of the English-Norwegian language situation?',
        options: [
          'When Norwegian gradually stops being used in certain areas of life (like academia or business) and is replaced by English',
          'When a Norwegian person forgets how to speak Norwegian entirely',
          'When English words are borrowed into Norwegian',
          'When Norwegian dialects disappear',
        ],
        answer: 0,
        solution: 'Domain loss occurs when a language ceases to be used in particular areas (domains) of social life. In Norway, the concern is that Norwegian is losing ground to English in higher education, research, business, and technology -- not that Norwegian is disappearing entirely, but that its range of use is narrowing.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-5-text-2',
      type: 'text',
      content: `## The Scandinavian Language Situation

Norway, Sweden, and Denmark share closely related languages that are, to varying degrees, mutually intelligible. This means speakers of one Scandinavian language can often understand speakers of the others without formal study. However, this mutual intelligibility is increasingly under pressure -- and English is part of the reason.

**Traditional mutual intelligibility:**
- Norwegian, Swedish, and Danish are all North Germanic languages descended from Old Norse
- Written Norwegian (especially Bokmal) and Danish are very similar
- Spoken Norwegian and Swedish share many features
- Danish pronunciation is the most difficult for other Scandinavians to understand

**The Scandinavian language community:**
Historically, Scandinavians have communicated using their own languages when meeting each other, with each person speaking their own language and understanding the others. This practice -- sometimes called "semi-communication" -- has been an important part of Nordic cultural identity and cooperation.

**The English threat to Scandinavian communication:**

There is growing evidence that younger Scandinavians are less able to understand each other's languages:
- A 2005 study found that young Scandinavians understood each other's languages significantly less well than older generations
- Young Scandinavians increasingly switch to English when communicating across borders
- Exposure to each other's languages through media has decreased as English-language media dominates
- The sense of a shared Scandinavian language community is weakening

**Why does this matter?**
- It represents a cultural loss -- the Scandinavian language community is a unique phenomenon
- It gives native English speakers an advantage in Nordic contexts
- It may weaken the practical case for maintaining distinct Scandinavian languages ("why not just use English?")
- It reflects broader patterns of English displacing inter-linguistic communication worldwide`,
    },
    {
      id: 'ie-3-5-def-2',
      type: 'definition',
      title: 'Key Terms: English and Norwegian Identity',
      content: `**Domain loss:** The process by which a language ceases to be used in certain social domains (education, business, science), being replaced by another language.

**Loanword:** A word borrowed from one language into another. Norwegian has borrowed extensively from English (e.g., "jobb," "streame," "kul").

**Anglicism:** An English word or expression used in another language, sometimes adapted to local phonology and grammar.

**Mutual intelligibility:** The ability of speakers of related languages to understand each other without formal study. Characteristic of the Scandinavian languages.

**Semi-communication:** Communication between speakers of related but different languages, each using their own language. The traditional mode of Scandinavian cross-border communication.

**Diglossia:** A situation where two languages or varieties are used in a single community, with each assigned to different social functions. One is typically the "high" variety (formal, prestigious) and the other the "low" variety (informal, everyday).

**Language planning (sprakrokt):** Organized efforts to maintain, develop, and protect a language. In Norway, institutions like Sprakradet (the Language Council) work to develop Norwegian terminology and promote Norwegian language use.`,
    },
    {
      id: 'ie-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Why is the decline of Scandinavian mutual intelligibility considered a problem?',
        options: [
          'It weakens the unique Scandinavian language community and gives English speakers an advantage in Nordic contexts',
          'It makes it impossible for Scandinavians to travel',
          'It means the Scandinavian languages will merge into one language',
          'It is not considered a problem by anyone',
        ],
        answer: 0,
        solution: 'The decline of mutual intelligibility represents a cultural loss because the Scandinavian language community is a unique phenomenon. When young Scandinavians switch to English instead of using their own languages, native English speakers gain an advantage, and the practical reasons for maintaining distinct Scandinavian languages are weakened.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyze the influence of English on Norwegian.',
        subTasks: [
          {
            label: 'a',
            task: 'List five English loanwords or expressions that you use regularly in Norwegian. For each, explain whether there is a good Norwegian alternative and why you prefer the English term.',
            solution: 'Answers will vary. Common examples include: "chill/chille," "random," "cringe," "binge-watche," "ghoste," "vibes." Students should honestly assess whether Norwegian alternatives exist and reflect on why English terms feel more natural in certain contexts -- often because the terms were encountered first in English-language media or because the English term captures a specific nuance.',
          },
          {
            label: 'b',
            task: 'Do you think the influence of English on Norwegian is a positive development, a threat, or something in between? Justify your answer with at least two arguments.',
            solution: 'A nuanced response might argue that borrowing is natural and enriching (languages have always borrowed from each other; English itself is full of loanwords from French, Latin, and Norse) while acknowledging concerns about domain loss in academia and business. The key is whether Norwegian maintains the ability to function fully in all areas of life, or whether it gradually becomes restricted to informal use.',
          },
        ],
        hints: ['Be honest about your own language use', 'Consider both short-term convenience and long-term effects'],
        solution: 'A thoughtful response will balance recognition of the naturalness of language contact with awareness of potential domain loss concerns.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflect on your own experience with Scandinavian mutual intelligibility. Can you understand spoken Swedish? Written Danish? Have you ever been in a situation where Scandinavians communicated in English instead of their own languages? Write a short reflection (100-150 words) on whether you think the Scandinavian language community is worth preserving and what could be done to strengthen it.',
        hints: ['Think about your own experiences with Swedish and Danish', 'Consider the role of media exposure', 'Think about practical steps that could help'],
        solution: 'A good response will draw on personal experience and consider practical measures such as increased exposure to Scandinavian media, language awareness education, and institutional support for Scandinavian communication. The best answers will connect personal experience to the broader trends discussed in the chapter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-3-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which of the following is an example of an anglicism in Norwegian?',
        options: [
          '"Kan du streame den filmen?" (using "streame" from English "stream")',
          '"Hva heter du?" (a standard Norwegian question)',
          '"Jeg liker brunost." (a standard Norwegian sentence)',
          '"God morgen!" (a standard Norwegian greeting)',
        ],
        answer: 0,
        solution: 'An anglicism is an English word or expression used in another language. "Streame" is adapted from the English verb "to stream" and integrated into Norwegian grammar (with the Norwegian infinitive ending -e). This is a typical example of how English vocabulary enters Norwegian, especially in technology-related domains.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'ie-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Extended writing task (250-300 words): "In 50 years, Norwegian will be a language used only at home, while English will dominate education, business, and public life." Do you agree or disagree with this prediction? Write a well-argued essay using concepts from this section (domain loss, language planning, Scandinavian mutual intelligibility, code-mixing).',
        hints: [
          'Consider the current trends but also the forces working against domain loss',
          'Think about the role of language planning institutions like Sprakradet',
          'Consider whether Norway\'s situation is different from smaller language communities',
          'Use specific examples and terminology from this chapter',
        ],
        solution: 'A strong response will argue a clear position while acknowledging the complexity of the issue. Arguments against the prediction might include: Norwegian has strong institutional support (government, education, media), language planning efforts, and 5 million speakers; language shift of this magnitude is historically rare for state languages. Arguments supporting the prediction might include: accelerating English influence through digital media, increasing use of English in higher education and business, and declining Scandinavian mutual intelligibility. The best essays will use concepts like domain loss, language planning, and code-mixing to support their arguments.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-3-5-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- English is deeply embedded in Norwegian daily life, from entertainment and social media to education and business
- Domain loss -- the gradual replacement of Norwegian by English in certain areas -- is a real concern, particularly in higher education and research
- Norwegian youth naturally mix English and Norwegian (code-mixing), following predictable patterns influenced by media and peer culture
- The Scandinavian language community and mutual intelligibility are under pressure, partly due to the dominance of English
- Language planning institutions like Sprakradet work to maintain Norwegian's capacity to function in all areas of life
- The debate about English influence on Norwegian involves balancing the practical benefits of English with the value of maintaining linguistic diversity
- Your own language use as a young Norwegian is part of this ongoing story`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const INT_ENGELSK_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_INT_ENGELSK_3_1,
  CHAPTER_INT_ENGELSK_3_2,
  CHAPTER_INT_ENGELSK_3_3,
  CHAPTER_INT_ENGELSK_3_4,
  CHAPTER_INT_ENGELSK_3_5,
];
