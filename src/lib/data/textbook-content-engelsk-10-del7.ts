/**
 * Tekstbok innhold for Engelsk 10. klasse - Del 7 (Kapittel 23-24)
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Fokus på nyhetsmedier, journalistikk, sosiale medier og digital retorikk.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 23: News Media and Journalism
// ============================================================================

export const CHAPTER_ENGELSK_10_23: TextbookChapter = {
  id: 'engelsk-10-23',
  courseId: 'engelsk-10',
  chapterNumber: '23',
  title: 'News Media and Journalism',
  description: 'Learn about news writing structure, media bias, fact-checking methods and media literacy in the modern information landscape.',
  estimatedMinutes: 55,
  competenceGoals: [
    'vurdere kilder kritisk og identifisere påvirkning i medietekster',
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-23-intro',
      type: 'text',
      content: `## News Media and Journalism

Every day, billions of news articles, posts and headlines compete for your attention. Some are reliable reports from professional journalists. Others are misleading clickbait, opinion disguised as fact, or outright misinformation.

Media literacy — the ability to analyse, evaluate and create media — is one of the most important skills you can develop. In this chapter, you will learn:

1. How professional news articles are structured (the **inverted pyramid**)
2. How to recognise **media bias** and understand its effects
3. Practical **fact-checking methods** you can use every day
4. How to apply the **CRAAP test** to evaluate news sources

By the end of this chapter, you will be able to read the news with a critical eye and separate trustworthy journalism from unreliable content.`,
    },

    // ========== DEFINISJON 1: THE INVERTED PYRAMID ==========
    {
      id: 'engelsk-10-23-def-1',
      type: 'definition',
      title: 'The Inverted Pyramid',
      content: `The **inverted pyramid** is the standard structure for news writing. The most important information comes first, and each paragraph adds less critical details.

**Structure:**

**1. Lead (lede) — The opening paragraph**
Answers the key questions: **Who? What? When? Where? Why? How?**
The reader should understand the core story from this paragraph alone.

**2. Body — Supporting details**
Background, quotes from sources, additional context and data that help the reader understand the story more deeply.

**3. Tail — Extra information**
Less essential details, related facts, future implications. Editors can cut from the bottom without losing the main story.

**Why this structure?**
- Readers often skim headlines and opening lines only
- Editors can shorten articles quickly for print or web
- Search engines and social media previews show the first sentences

**Key vocabulary:**
- *Lead/lede* — the opening paragraph
- *Byline* — the journalist's name
- *Headline* — the title of an article
- *Dateline* — the location and date of reporting`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-23-example-1',
      type: 'example',
      title: 'Example: Identifying the inverted pyramid',
      problem: `Read the following short news article and identify (a) the lead, (b) the body and (c) the tail.

*"OSLO — A new study published Monday by the University of Oslo shows that Norwegian teenagers spend an average of 4.5 hours per day on social media, a 30 % increase since 2021.*

*Researchers surveyed 5 000 students aged 13–18 across all regions of Norway. 'The numbers are concerning but not surprising,' said lead researcher Dr. Kari Strand. 'We see a clear link between screen time and reported sleep problems.'*

*The study also found that students in rural areas used social media slightly less than those in cities. The full report will be available on the university's website from Friday."*`,
      solution: `**Lead (paragraph 1):** Answers Who (University of Oslo researchers), What (study showing 4.5 hours/day on social media), When (Monday), Where (Norway), Why/How (30 % increase since 2021).

**Body (paragraph 2):** Supporting details — sample size (5 000 students), age range, expert quote from Dr. Strand, and the link between screen time and sleep.

**Tail (paragraph 3):** Additional but less critical information — urban vs. rural difference and when the full report will be published. An editor could remove this paragraph without losing the main story.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-23-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-23-ex-1',
        number: '23.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'In the inverted pyramid model, what should the lead paragraph contain?',
        options: [
          {
            id: 'a',
            text: 'The journalist\'s personal opinion about the topic',
            isCorrect: false,
            feedback: 'Incorrect. A news lead should be objective and factual, not opinion-based.',
          },
          {
            id: 'b',
            text: 'Answers to the key questions: Who, What, When, Where, Why and How',
            isCorrect: true,
            feedback: 'Correct! The lead gives readers the essential facts so they understand the core story immediately.',
          },
          {
            id: 'c',
            text: 'Background history and context about the topic',
            isCorrect: false,
            feedback: 'Incorrect. Background and context belong in the body, not the lead.',
          },
          {
            id: 'd',
            text: 'A dramatic cliff-hanger to keep the reader interested',
            isCorrect: false,
            feedback: 'Incorrect. Cliff-hangers belong in fiction. News writing puts the most important information first.',
          },
        ],
        solution: 'The lead answers the five Ws and one H (Who, What, When, Where, Why, How), giving readers the essential facts up front.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-23-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-23-ex-2',
        number: '23.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a news lead (one paragraph, 2-3 sentences) about the following event. Remember to answer the key questions (Who, What, When, Where, Why/How).\n\n**Event:** Your school held a charity concert last Friday evening in the gym. 200 people attended. The concert raised 45 000 NOK for the Red Cross. Five student bands performed.',
        hints: [
          'Start with the most newsworthy fact — the money raised or the event itself',
          'Try to answer at least four of the six key questions in your lead',
        ],
        solution: 'Example lead: "A charity concert at [School name] last Friday raised 45 000 NOK for the Red Cross. Five student bands performed for an audience of 200 in the school gym, making it the largest fundraising event the school has held this year." This lead answers Who (students at the school), What (charity concert raising 45 000 NOK), When (last Friday), Where (the school gym) and Why (for the Red Cross).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: MEDIA BIAS ==========
    {
      id: 'engelsk-10-23-def-2',
      type: 'definition',
      title: 'Media Bias',
      content: `**Media bias** occurs when news outlets present information in a way that favours a particular perspective, political position or narrative.

**Common types of media bias:**

**1. Selection bias (gatekeeping)**
Choosing which stories to cover — and which to ignore. If a newspaper only reports negative stories about one political party, that is selection bias.

**2. Framing bias**
Presenting the same facts in different ways to influence interpretation.
- *"Protesters clash with police"* vs. *"Police crack down on peaceful demonstrators"* — same event, different framing.

**3. Confirmation bias in reporting**
Journalists or editors selecting sources and data that confirm a pre-existing viewpoint.

**4. Sensationalism**
Exaggerating stories to attract clicks and viewers. Dramatic headlines, emotional language and shocking images are common signs.

**5. Omission bias**
Leaving out key facts that would change the reader's understanding of a story.

**Important:** Bias is not always intentional. Cultural background, time pressure and commercial interests (clicks = advertising revenue) all contribute to bias in media.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-23-example-2',
      type: 'example',
      title: 'Example: Spotting framing bias',
      problem: `Two newspapers report on the same event: a new law that increases taxes on sugary drinks by 20 %. Identify the bias in each headline.

**Headline A:** *"Government takes bold action to protect children's health with sugar tax"*
**Headline B:** *"Nanny state strikes again: government raids your wallet with new drink tax"*`,
      solution: `**Headline A — Positive framing:**
- "Bold action" and "protect children's health" use positive, heroic language.
- Frames the government as caring and decisive.
- Bias: favours the government's position.

**Headline B — Negative framing:**
- "Nanny state" and "raids your wallet" use negative, aggressive language.
- Frames the government as controlling and money-grabbing.
- Bias: opposes the government's position.

**The neutral version** might read: *"Government introduces 20 % tax on sugary drinks"* — factual, without loaded language.

Both headlines report on the same law, but the reader would form very different opinions depending on which one they read. This is framing bias in action.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-23-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-23-ex-3',
        number: '23.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A news channel covers a protest. They interview five people who oppose the protest and only one who supports it. What type of media bias is this?',
        options: [
          {
            id: 'a',
            text: 'Framing bias — they use loaded language',
            isCorrect: false,
            feedback: 'Framing bias is about how information is presented, not about source selection.',
          },
          {
            id: 'b',
            text: 'Sensationalism — they exaggerate the story',
            isCorrect: false,
            feedback: 'Sensationalism involves dramatic exaggeration. The issue here is unbalanced source selection.',
          },
          {
            id: 'c',
            text: 'Selection bias — they choose sources that favour one side',
            isCorrect: true,
            feedback: 'Correct! By interviewing five opponents and only one supporter, the channel gives a skewed picture of public opinion. This is selection bias.',
          },
          {
            id: 'd',
            text: 'Omission bias — they leave out key facts',
            isCorrect: false,
            feedback: 'While related, the specific issue here is the imbalanced selection of interviewees, which is selection bias.',
          },
        ],
        solution: 'This is selection bias. The channel selects more sources from one side, making it seem like opposition to the protest is much stronger than support.',
      },
    },

    // ========== DEFINISJON 3: FACT-CHECKING AND THE CRAAP TEST ==========
    {
      id: 'engelsk-10-23-def-3',
      type: 'definition',
      title: 'Fact-Checking and the CRAAP Test',
      content: `**Fact-checking** means verifying whether a claim, statistic or story is accurate before accepting or sharing it.

**Quick fact-checking methods:**

**1. Check the source**
Who published this? Is it a recognised news organisation (BBC, NRK, Reuters) or an unknown website?

**2. Cross-reference**
Search for the same story in other reliable outlets. If only one source reports it, be cautious.

**3. Check the date**
Old stories are sometimes re-shared as if they are new. Always check when the article was published.

**4. Read beyond the headline**
Headlines can be misleading. Read the full article before drawing conclusions.

**5. Reverse image search**
If a photo seems suspicious, use Google Images or TinEye to check if it has been used before in a different context.

**The CRAAP Test for evaluating sources:**

| Letter | Criterion | Key question |
|--------|-----------|-------------|
| **C** | Currency | When was it published? Is the information up to date? |
| **R** | Relevance | Does the source address your topic directly? |
| **A** | Authority | Who is the author? What are their qualifications? |
| **A** | Accuracy | Is the information supported by evidence? Can it be verified? |
| **P** | Purpose | Why was this written — to inform, persuade, sell or entertain? |`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-23-example-3',
      type: 'example',
      title: 'Example: Applying the CRAAP test',
      problem: `Apply the CRAAP test to the following source:

A Facebook post shared by "Health Truth Warriors" claims: *"Scientists confirm that drinking lemon water every morning cures all types of cancer. Big Pharma doesn't want you to know this!"* The post has 50 000 shares and links to a blog with no author name.`,
      solution: `**C — Currency:** No publication date visible. Cannot verify if this is recent research.

**R — Relevance:** If you are researching cancer treatments, the topic is relevant, but the claim needs verification.

**A — Authority:** "Health Truth Warriors" is not a medical institution. The linked blog has no named author. No medical credentials are cited. Very low authority.

**A — Accuracy:** The claim that lemon water "cures all types of cancer" is extraordinary and not supported by any peer-reviewed medical research. No studies are cited. The phrase "Big Pharma doesn't want you to know" is a common conspiracy theory marker.

**P — Purpose:** The purpose appears to be generating clicks and shares, not informing. The sensational language and conspiracy framing suggest persuasion or misinformation.

**Verdict:** This source fails all five CRAAP criteria. It should not be trusted or shared.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-23-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-23-ex-4',
        number: '23.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Find a real news article online (from BBC, NRK, The Guardian, or a similar outlet). Apply the CRAAP test to it by answering the five criteria in 1-2 sentences each. Conclude with an overall reliability rating: High, Medium or Low.',
        hints: [
          'Use the table in the definition above as a checklist',
          'A reliable source can still have some weaknesses — note both strengths and limitations',
        ],
        solution: 'Your analysis should cover all five CRAAP criteria with specific evidence from the article. Most articles from established news organisations will score High on Authority and Currency but may show some bias in Purpose or framing. A good answer acknowledges both strengths and weaknesses.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-23-summary',
      type: 'text',
      title: 'Summary — News Media and Journalism',
      content: `## Summary

**The inverted pyramid** is the standard news structure: lead (most important facts) first, then supporting details, then additional information. A good lead answers Who, What, When, Where, Why and How.

**Media bias** takes many forms: selection bias (choosing what to cover), framing bias (how stories are presented), sensationalism (exaggeration for clicks), and omission bias (leaving out important facts). Bias can be intentional or unconscious.

**Fact-checking** is essential in the digital age. Key strategies include checking the source, cross-referencing with other outlets, verifying dates, reading beyond headlines, and using reverse image search.

**The CRAAP test** (Currency, Relevance, Authority, Accuracy, Purpose) provides a systematic framework for evaluating any source.

Being media literate does not mean distrusting all news. It means reading critically, checking sources, and understanding how information is shaped before it reaches you.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-23-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-23-ex-5',
        number: '23.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following is the BEST example of sensationalism in a news headline?',
        options: [
          {
            id: 'a',
            text: '"City council votes to increase bus fares by 5 %"',
            isCorrect: false,
            feedback: 'This is a neutral, factual headline with no exaggeration.',
          },
          {
            id: 'b',
            text: '"SHOCKING: You won\'t BELIEVE what the government is hiding about your food!"',
            isCorrect: true,
            feedback: 'Correct! Capital letters, "SHOCKING", "you won\'t BELIEVE" and vague claims are classic sensationalism techniques designed to generate clicks.',
          },
          {
            id: 'c',
            text: '"New study links exercise to improved mental health in teenagers"',
            isCorrect: false,
            feedback: 'This is a straightforward, evidence-based headline. No sensationalism here.',
          },
          {
            id: 'd',
            text: '"Prime Minister announces new education policy at press conference"',
            isCorrect: false,
            feedback: 'This is a standard factual headline reporting an event.',
          },
        ],
        solution: 'Sensationalism uses dramatic language, capital letters, vague shocking claims and emotional manipulation to attract clicks. Option B ticks all those boxes.',
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-23-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-23-ex-6',
        number: '23.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a short news article (150-200 words) using the inverted pyramid structure about the following event. Then rewrite the headline twice: once with a positive frame and once with a negative frame.\n\n**Event:** The school board has decided to ban mobile phones during all lessons starting next semester. The decision was made after a survey showed that 65 % of teachers reported phones as a distraction.',
        hints: [
          'Start your article with a lead that answers the key questions',
          'For the framing exercise, think about word choice — "ban" vs. "new policy", "distraction" vs. "focus"',
        ],
        solution: 'A good response includes: (1) A factual article with a clear lead, supporting details and context. (2) A positive headline, e.g. "School board introduces phone-free classrooms to boost learning". (3) A negative headline, e.g. "School board strips students of phone rights in controversial ban". The exercise demonstrates how framing changes perception of the same facts.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Inverted pyramid', definition: 'A news writing structure where the most important information comes first, followed by supporting details and then less essential information.' },
    { term: 'Lead (lede)', definition: 'The opening paragraph of a news article that answers the key questions: Who, What, When, Where, Why and How.' },
    { term: 'Media bias', definition: 'When news is presented in a way that favours a particular perspective, through selection, framing, sensationalism or omission.' },
    { term: 'Framing', definition: 'The way a story is presented — the choice of words, images and context that shapes how readers interpret the information.' },
    { term: 'CRAAP test', definition: 'A source evaluation method that checks Currency, Relevance, Authority, Accuracy and Purpose.' },
    { term: 'Fact-checking', definition: 'The process of verifying whether claims, statistics or stories are accurate before accepting or sharing them.' },
  ],
};

// ============================================================================
// KAPITTEL 24: Social Media and Digital Communication
// ============================================================================

export const CHAPTER_ENGELSK_10_24: TextbookChapter = {
  id: 'engelsk-10-24',
  courseId: 'engelsk-10',
  chapterNumber: '24',
  title: 'Social Media and Digital Communication',
  description: 'Explore how language works on social media, understand digital rhetoric and online persuasion, and learn about responsible communication and cyberbullying.',
  estimatedMinutes: 55,
  competenceGoals: [
    'vurdere kilder kritisk og identifisere påvirkning i medietekster',
    'utforske og reflektere over situasjonen til urfolk og nasjonale minoriteter i engelskspråklige land og i Norge',
    'bruke variert ordforråd og idiomatiske uttrykk tilpasset formål, mottaker og situasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-24-intro',
      type: 'text',
      content: `## Social Media and Digital Communication

Social media has transformed the way we communicate. Platforms like TikTok, Instagram, Snapchat and YouTube are not just entertainment — they are spaces where language, persuasion and identity are constantly at work.

Every post, comment, caption and hashtag is a form of communication with its own rules and conventions. Understanding **digital rhetoric** — how people persuade, influence and connect online — helps you become a smarter and safer user.

In this chapter, you will learn:

1. The features of **social media language** and how it differs from formal English
2. How **digital rhetoric** and persuasion techniques work online
3. How to communicate **responsibly** in digital spaces
4. What **cyberbullying** is, why it happens, and how to respond to it

These skills are essential for anyone who uses the internet — which means they are essential for you.`,
    },

    // ========== DEFINISJON 1: SOCIAL MEDIA LANGUAGE ==========
    {
      id: 'engelsk-10-24-def-1',
      type: 'definition',
      title: 'Social Media Language',
      content: `**Social media language** refers to the informal, fast-paced style of English used on digital platforms. It has its own grammar, vocabulary and conventions that differ from standard written English.

**Key features:**

**1. Abbreviations and acronyms**
- *tbh* (to be honest), *imo* (in my opinion), *ngl* (not gonna lie), *fr* (for real)
- Saves time and signals belonging to a digital community

**2. Emojis and tone indicators**
- Emojis replace facial expressions and tone of voice that are missing in text
- Tone indicators like */s* (sarcasm) or */gen* (genuine) help avoid misunderstandings

**3. Hashtags**
- *#ClimateAction*, *#BookTok* — used to categorise content and join conversations
- Can function as commentary, humour or activism

**4. Code-switching**
- Switching between formal and informal language depending on context
- A student might write formally in an essay but use slang in a group chat

**5. Memes and visual language**
- Images, GIFs and short videos carry meaning through cultural references
- Understanding memes requires shared cultural knowledge

**Important:** Social media language is not "bad English". It is a different **register** — a style of language adapted to a specific context, just as you speak differently with friends and teachers.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-24-example-1',
      type: 'example',
      title: 'Example: Formal vs. social media register',
      problem: `Compare these two versions of the same message and identify the language features that differ.

**Version A (formal email):**
*"Dear Ms. Hansen, I would like to inform you that I will be unable to attend school tomorrow due to a medical appointment. I will complete any missed assignments. Kind regards, Emma."*

**Version B (text to a friend):**
*"hey cant come tmrw got a doctors appt lol hope i dont miss anything important 😅"*`,
      solution: `**Differences:**

| Feature | Formal (A) | Social media (B) |
|---------|-----------|------------------|
| Greeting | "Dear Ms. Hansen" | "hey" |
| Spelling | Full words | Abbreviations: "cant", "tmrw", "appt" |
| Punctuation | Full stops, commas | No punctuation |
| Capitalisation | Standard | All lowercase |
| Tone | Polite, professional | Casual, friendly |
| Emotion | Neutral | Emoji and "lol" add personality |
| Structure | Formal letter format | Stream of consciousness |

**Key insight:** Neither version is "wrong". They are appropriate for different contexts. The ability to switch between registers is called **code-switching**, and it is a sign of strong language competence.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-24-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-24-ex-1',
        number: '24.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is "code-switching" in the context of digital communication?',
        options: [
          {
            id: 'a',
            text: 'Switching between different social media platforms',
            isCorrect: false,
            feedback: 'Incorrect. Code-switching is about language style, not which platform you use.',
          },
          {
            id: 'b',
            text: 'Using programming code in text messages',
            isCorrect: false,
            feedback: 'Incorrect. "Code" here refers to language register, not computer code.',
          },
          {
            id: 'c',
            text: 'Adapting your language style to fit different contexts and audiences',
            isCorrect: true,
            feedback: 'Correct! Code-switching means adjusting your language — for example, writing formally in an email but casually in a group chat.',
          },
          {
            id: 'd',
            text: 'Translating between English and Norwegian online',
            isCorrect: false,
            feedback: 'While switching between languages can be a form of code-switching, in digital communication it mainly refers to shifting between formal and informal registers.',
          },
        ],
        solution: 'Code-switching is the ability to adapt your language register to the context. A skilled communicator uses formal language in professional settings and informal language with friends.',
      },
    },

    // ========== DEFINISJON 2: DIGITAL RHETORIC ==========
    {
      id: 'engelsk-10-24-def-2',
      type: 'definition',
      title: 'Digital Rhetoric and Online Persuasion',
      content: `**Digital rhetoric** is the art of persuasion in online spaces. Just like traditional rhetoric uses logos, pathos and ethos, digital rhetoric uses platform-specific techniques to influence audiences.

**Persuasion techniques on social media:**

**1. Social proof**
Showing that many people agree, follow or buy something.
- *"Join 2 million subscribers"* or displaying follower counts and like numbers.

**2. Influencer authority**
Influencers build trust with their audience over time. When they recommend a product, followers treat it like advice from a friend — even though it is often paid promotion.

**3. Algorithmic amplification**
Platforms promote content that generates strong reactions (anger, shock, joy). This means extreme or emotional content spreads faster than balanced, nuanced information.

**4. FOMO (Fear of Missing Out)**
Creating urgency: *"Only 3 left in stock!"*, *"Sale ends tonight!"*, limited-time offers.

**5. Emotional manipulation**
Using music, editing, storytelling and visuals to create strong emotional responses that override critical thinking.

**6. Astroturfing**
Fake grassroots campaigns where companies or organisations create the appearance of widespread public support using fake accounts or paid commenters.

**Critical question to ask:** *"Who benefits if I believe this, share this, or buy this?"*`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-24-example-2',
      type: 'example',
      title: 'Example: Identifying digital rhetoric',
      problem: `An Instagram influencer with 500 000 followers posts a photo holding a protein shake. The caption reads:

*"Honestly this changed my life!! I've never felt more energised 💪 Use code FITLIFE20 for 20% off — link in bio! Only available this week!! #ad #fitness #health"*

Identify the digital rhetoric techniques used.`,
      solution: `**1. Influencer authority:** The influencer's large following (500 000) gives them perceived credibility. Followers trust them as a relatable figure.

**2. Emotional manipulation:** "Changed my life" and "never felt more energised" are strong emotional claims designed to create desire.

**3. Social proof:** The large follower count implies that if 500 000 people trust this person, the product must be good.

**4. FOMO:** "Only available this week" creates urgency — buy now or miss the deal.

**5. Disclosure (partial):** The #ad hashtag shows this is paid promotion, but it is placed at the end among other hashtags, making it easy to miss.

**Key insight:** Even when content is labelled as an ad, the persuasion techniques can still influence you. Being aware of them is the first step to making independent decisions.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-24-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-24-ex-2',
        number: '24.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A YouTube video title says "EVERYONE is switching to this app — here\'s why you should too!" What digital rhetoric technique is this primarily using?',
        options: [
          {
            id: 'a',
            text: 'FOMO — it creates a sense of urgency and time pressure',
            isCorrect: false,
            feedback: 'While there is a slight sense of urgency, the primary technique is about what "everyone" is doing.',
          },
          {
            id: 'b',
            text: 'Social proof and bandwagon effect — it implies that everyone is already doing it',
            isCorrect: true,
            feedback: 'Correct! "EVERYONE is switching" uses social proof (many people do it) and the bandwagon effect (you should too) to persuade viewers.',
          },
          {
            id: 'c',
            text: 'Astroturfing — it uses fake accounts to spread the message',
            isCorrect: false,
            feedback: 'We cannot determine astroturfing from the title alone. The visible technique is social proof.',
          },
          {
            id: 'd',
            text: 'Algorithmic amplification — the platform is pushing this video',
            isCorrect: false,
            feedback: 'Algorithmic amplification is about how platforms distribute content, not a technique used in the title itself.',
          },
        ],
        solution: 'The title uses social proof ("EVERYONE is switching") combined with the bandwagon effect ("you should too") to persuade viewers that they are missing out on something popular.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-24-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-24-ex-3',
        number: '24.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Choose a social media post, advertisement or influencer video you have seen recently. Analyse it by answering the following questions in English (100-150 words total).',
        subTasks: [
          {
            label: 'a',
            task: 'Describe the content briefly. What is it promoting or communicating?',
            solution: 'The student should give a clear, factual description of the content they have chosen.',
          },
          {
            label: 'b',
            task: 'Identify at least two digital rhetoric techniques used (e.g. social proof, FOMO, emotional manipulation, influencer authority).',
            solution: 'The student should name specific techniques and point to evidence in the content that demonstrates each one.',
          },
          {
            label: 'c',
            task: 'Who benefits financially if you believe or act on this content?',
            solution: 'The student should identify the commercial interests behind the content — the brand, the influencer, the platform (through ad revenue), etc.',
          },
        ],
        hints: [
          'Look at your recent social media feed for examples — ads, sponsored posts and influencer content all work',
          'Remember: "Who benefits?" is always a powerful question',
        ],
        solution: 'A strong answer shows awareness of how digital rhetoric works in real content you encounter daily. The key is connecting specific techniques to specific evidence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 3: CYBERBULLYING AND RESPONSIBLE COMMUNICATION ==========
    {
      id: 'engelsk-10-24-def-3',
      type: 'definition',
      title: 'Cyberbullying and Responsible Digital Communication',
      content: `**Cyberbullying** is the use of digital devices and platforms to harass, threaten, embarrass or target another person. Unlike face-to-face bullying, cyberbullying can happen 24/7 and reach a large audience instantly.

**Forms of cyberbullying:**

- **Flaming:** Hostile, aggressive messages in online discussions
- **Harassment:** Repeated, unwanted offensive messages
- **Doxing:** Sharing someone's private information (address, phone number) without consent
- **Exclusion:** Deliberately leaving someone out of online groups or conversations
- **Impersonation:** Creating fake profiles to damage someone's reputation
- **Screenshot sharing:** Sharing private conversations or images without permission

**Why cyberbullying is harmful:**
- The victim cannot escape — it follows them home
- Content can go viral and reach thousands of people
- Digital content is permanent — screenshots last forever
- Anonymity makes bullies bolder

**Responsible digital communication:**
1. **Think before you post** — would you say this to someone's face?
2. **Respect privacy** — never share someone's personal information or private messages
3. **Stand up, don't stand by** — report bullying and support targets
4. **Understand permanence** — anything you post can be saved and shared
5. **Disagree respectfully** — you can criticise ideas without attacking people`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-24-example-3',
      type: 'example',
      title: 'Example: Identifying cyberbullying vs. conflict',
      problem: `Read the two scenarios and decide: is this cyberbullying, a normal disagreement, or something in between?

**Scenario A:** Two students argue in a group chat about which football team is best. They use strong language ("that's ridiculous", "you clearly know nothing about football") but neither targets the other personally and both continue the conversation willingly.

**Scenario B:** A student creates a fake Instagram account using another student's photos and posts embarrassing captions. When the target asks them to stop, they create a second account and continue.`,
      solution: `**Scenario A — Normal disagreement:**
This is a heated but voluntary argument about a topic (football), not about a person. Both students participate willingly and the language, while strong, does not attack anyone's identity or dignity. This is **not cyberbullying**.

**Scenario B — Cyberbullying:**
This involves impersonation, targeting a specific person, causing deliberate embarrassment, and continuing after being asked to stop. It is **repeated, unwanted and harmful** — all hallmarks of cyberbullying. The target should report this to a trusted adult and to the platform.

**Key distinction:** Disagreement focuses on ideas. Cyberbullying targets a person with the intent to harm. The test: Is it repeated? Is it unwanted? Does it cause harm?`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-24-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-24-ex-4',
        number: '24.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which of the following is an example of "doxing"?',
        options: [
          {
            id: 'a',
            text: 'Posting a meme about a celebrity on Twitter',
            isCorrect: false,
            feedback: 'Memes about public figures are not doxing, though they can cross ethical lines depending on content.',
          },
          {
            id: 'b',
            text: 'Sharing a classmate\'s home address and phone number in a public forum without their consent',
            isCorrect: true,
            feedback: 'Correct! Doxing means revealing someone\'s private personal information publicly without their permission. This is both harmful and often illegal.',
          },
          {
            id: 'c',
            text: 'Disagreeing with someone\'s opinion in a comment section',
            isCorrect: false,
            feedback: 'Disagreeing with opinions is normal online interaction, not doxing.',
          },
          {
            id: 'd',
            text: 'Sending a private message to a friend',
            isCorrect: false,
            feedback: 'Private messages between friends are normal communication, not doxing.',
          },
        ],
        solution: 'Doxing is the act of publicly revealing someone\'s private information (address, phone number, workplace, etc.) without their consent, often with malicious intent.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-24-summary',
      type: 'text',
      title: 'Summary — Social Media and Digital Communication',
      content: `## Summary

**Social media language** is a distinct register of English with its own conventions: abbreviations, emojis, hashtags, memes and code-switching between formal and informal styles. It is not "bad English" — it is language adapted to a digital context.

**Digital rhetoric** uses persuasion techniques adapted for online platforms: social proof, influencer authority, FOMO, algorithmic amplification, emotional manipulation and astroturfing. The critical question is always: *"Who benefits?"*

**Responsible communication** online means thinking before posting, respecting privacy, standing up against bullying, and understanding that digital content is permanent.

**Cyberbullying** — including flaming, harassment, doxing, exclusion, impersonation and screenshot sharing — is harmful, often illegal, and different from normal disagreement. The key test: Is it repeated, unwanted and harmful?

Being digitally literate means understanding not just *how* to use social media, but *how social media uses you* — through algorithms, rhetoric and commercial interests.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-24-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-24-ex-5',
        number: '24.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Why does extreme or emotional content spread faster on social media than balanced, nuanced content?',
        options: [
          {
            id: 'a',
            text: 'Because balanced content is always boring and nobody reads it',
            isCorrect: false,
            feedback: 'This is an oversimplification. Balanced content can be engaging, but algorithms do not prioritise it.',
          },
          {
            id: 'b',
            text: 'Because social media algorithms promote content that generates strong reactions, since engagement drives advertising revenue',
            isCorrect: true,
            feedback: 'Correct! Platforms earn money from advertising, so they promote content that keeps users engaged — and strong emotional reactions (anger, shock, joy) generate more clicks, comments and shares than calm, balanced reporting.',
          },
          {
            id: 'c',
            text: 'Because only extreme people use social media',
            isCorrect: false,
            feedback: 'This is not true. Most social media users are ordinary people, but the platform design amplifies extreme content.',
          },
          {
            id: 'd',
            text: 'Because governments control what appears on social media',
            isCorrect: false,
            feedback: 'While some governments regulate content, the main driver of what spreads is the platform\'s algorithm, which is designed to maximise engagement.',
          },
        ],
        solution: 'Social media platforms earn revenue from advertising, which depends on user engagement. Algorithms promote content that generates strong reactions because it keeps users on the platform longer and generates more ad revenue.',
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-24-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-24-ex-6',
        number: '24.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a set of guidelines (5-7 rules) for responsible social media use at your school. Write in English, using clear and persuasive language. Each rule should include a brief explanation (1-2 sentences) of why it matters.',
        hints: [
          'Think about the topics covered in this chapter: language register, rhetoric, privacy and cyberbullying',
          'Good guidelines are specific and actionable, not vague — "Think before you post" is better than "Be nice"',
          'Use what you have learned about rhetoric to make your guidelines persuasive',
        ],
        solution: 'A strong response includes 5-7 specific, actionable rules covering topics such as: respecting privacy (no sharing private messages or photos without consent), thinking before posting (the permanence test), recognising paid promotions, reporting cyberbullying, code-switching appropriately, and verifying information before sharing. Each rule should explain the reasoning behind it.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Social media language', definition: 'The informal, fast-paced style of English used on digital platforms, featuring abbreviations, emojis, hashtags and code-switching.' },
    { term: 'Code-switching', definition: 'Adapting your language style to fit different contexts — for example, writing formally in an email but casually in a group chat.' },
    { term: 'Digital rhetoric', definition: 'The art of persuasion in online spaces, using techniques such as social proof, FOMO, influencer authority and algorithmic amplification.' },
    { term: 'Social proof', definition: 'A persuasion technique that shows many people agree, follow or buy something to encourage others to do the same.' },
    { term: 'FOMO', definition: 'Fear of Missing Out — creating urgency to persuade people to act quickly before an opportunity disappears.' },
    { term: 'Cyberbullying', definition: 'Using digital devices and platforms to harass, threaten, embarrass or target another person repeatedly.' },
    { term: 'Doxing', definition: 'Publicly revealing someone\'s private personal information without their consent, often with malicious intent.' },
  ],
};

// ============================================================================
// KAPITTEL 25: Climate Change and the Environment
// ============================================================================

export const CHAPTER_ENGELSK_10_25: TextbookChapter = {
  id: 'engelsk-10-25',
  courseId: 'engelsk-10',
  chapterNumber: '25',
  title: 'Climate Change and the Environment',
  description: 'Understand the greenhouse effect, explore renewable energy sources, build climate vocabulary, and read scientific texts — while considering multiple perspectives on climate policies.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'bruke variert ordforråd og idiomatiske uttrykk tilpasset formål, mottaker og situasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-25-intro',
      type: 'text',
      content: `## Climate Change and the Environment

Climate change is one of the defining issues of our time. Scientists, politicians, activists and ordinary citizens around the world are debating what is happening to the planet and what should be done about it.

To participate meaningfully in these conversations — whether in English class, at the dinner table, or online — you need two things: **scientific vocabulary** and **the ability to evaluate different perspectives**.

In this chapter, you will learn:

1. How the **greenhouse effect** works and why it matters
2. Key vocabulary for discussing **renewable energy** and **environmental policy**
3. How to read and understand **scientific texts** in English
4. How to recognise and evaluate **different perspectives** on climate policy

This chapter presents the scientific consensus alongside different viewpoints on policy solutions. Understanding multiple perspectives is essential for informed, democratic participation.`,
    },

    // ========== DEFINISJON 1: THE GREENHOUSE EFFECT ==========
    {
      id: 'engelsk-10-25-def-1',
      type: 'definition',
      title: 'The Greenhouse Effect and Climate Science Vocabulary',
      content: `The **greenhouse effect** is a natural process that warms the Earth's surface. When the Sun's energy reaches the Earth, some of it is reflected back to space and some is absorbed. The absorbed energy warms the surface, which then radiates heat. **Greenhouse gases** in the atmosphere — such as carbon dioxide (CO2), methane (CH4) and water vapour — trap some of this heat, preventing it from escaping into space.

**Without the greenhouse effect**, the Earth's average temperature would be about -18 °C — far too cold for most life.

**The enhanced greenhouse effect** occurs when human activities increase the concentration of greenhouse gases, trapping more heat than normal. The main human sources are:

- **Burning fossil fuels** (coal, oil, natural gas) for energy and transport
- **Deforestation** — removing trees that absorb CO2
- **Agriculture** — livestock produce methane; fertilisers release nitrous oxide
- **Industrial processes** — cement production, chemical manufacturing

**Key vocabulary:**

| Term | Definition |
|------|-----------|
| *Greenhouse gas* | A gas that traps heat in the atmosphere (e.g. CO2, methane) |
| *Fossil fuel* | A fuel formed from ancient organic matter (coal, oil, natural gas) |
| *Carbon footprint* | The total amount of greenhouse gases produced by a person, organisation or product |
| *Emissions* | Gases released into the atmosphere, especially from burning fuels |
| *Global warming* | The long-term increase in Earth's average temperature |
| *Climate change* | Long-term shifts in temperatures and weather patterns, including but not limited to warming |`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-25-example-1',
      type: 'example',
      title: 'Example: Reading a scientific text',
      problem: `Read the following extract from a simplified scientific report and answer: (a) What is the main finding? (b) What evidence is given? (c) What vocabulary signals that this is a scientific text?

*"Global mean surface temperature has increased by approximately 1.1 °C since the pre-industrial period (1850-1900). Data from ice cores, ocean sediments and tree rings confirm that current warming is unprecedented in at least the past 2 000 years. The Intergovernmental Panel on Climate Change (IPCC) concludes with high confidence that human activities, principally through emissions of greenhouse gases, have been the dominant cause of observed warming since the mid-20th century."*`,
      solution: `**(a) Main finding:** The Earth's surface temperature has risen by about 1.1 °C since before industrialisation, and human activities are the main cause.

**(b) Evidence:** Ice cores, ocean sediments and tree rings show that current warming is unusual compared to the last 2 000 years. The IPCC — the leading international scientific body on climate — attributes the change to human emissions with "high confidence".

**(c) Scientific language signals:**
- Precise measurements: "approximately 1.1 °C", "past 2 000 years"
- Technical terms: "global mean surface temperature", "pre-industrial period", "ice cores", "ocean sediments"
- Hedging language: "approximately", "with high confidence" — scientists state confidence levels rather than absolute certainty
- Citations of authority: reference to the IPCC
- Passive voice: "has increased", "have been the dominant cause" — common in scientific writing to focus on the findings rather than the researcher`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-25-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-25-ex-1',
        number: '25.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the greenhouse effect?',
        options: [
          {
            id: 'a',
            text: 'A process where greenhouse gases destroy the ozone layer',
            isCorrect: false,
            feedback: 'Incorrect. The greenhouse effect and the ozone layer are two different phenomena. The greenhouse effect is about heat being trapped, not about the ozone layer.',
          },
          {
            id: 'b',
            text: 'A natural process where gases in the atmosphere trap heat from the Sun, warming the Earth\'s surface',
            isCorrect: true,
            feedback: 'Correct! The greenhouse effect is a natural warming process. It becomes a problem when human activities increase greenhouse gas concentrations, trapping more heat than normal.',
          },
          {
            id: 'c',
            text: 'A type of pollution caused only by factories and power plants',
            isCorrect: false,
            feedback: 'Incorrect. The greenhouse effect is a natural process, not a type of pollution. However, human activities can enhance it.',
          },
          {
            id: 'd',
            text: 'The process by which plants grow faster in warmer greenhouses',
            isCorrect: false,
            feedback: 'Incorrect. The term "greenhouse effect" is a metaphor — the atmosphere acts like the glass walls of a greenhouse by trapping heat.',
          },
        ],
        solution: 'The greenhouse effect is a natural process in which atmospheric gases (CO2, methane, water vapour) trap heat radiated from the Earth\'s surface, keeping the planet warm enough to support life.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-25-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-25-ex-2',
        number: '25.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Match each term with the correct definition by writing the letter next to the number.\n\n**Terms:**\n1. Carbon footprint\n2. Fossil fuel\n3. Emissions\n4. Deforestation\n5. Global warming\n\n**Definitions:**\na) The long-term increase in Earth\'s average temperature\nb) Gases released into the atmosphere from burning fuels or industrial processes\nc) Removing large areas of forest, reducing the amount of CO2 absorbed\nd) The total greenhouse gases produced by a person, organisation or product\ne) A fuel formed from ancient organic matter, such as coal, oil or natural gas',
        hints: [
          'Use the vocabulary table in the definition section if you need help',
          'Think about the root words — "footprint" suggests a mark you leave behind',
        ],
        solution: '1-d (Carbon footprint = total greenhouse gases produced), 2-e (Fossil fuel = fuel from ancient organic matter), 3-b (Emissions = gases released into the atmosphere), 4-c (Deforestation = removing forests), 5-a (Global warming = long-term temperature increase).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: RENEWABLE ENERGY ==========
    {
      id: 'engelsk-10-25-def-2',
      type: 'definition',
      title: 'Renewable Energy Sources',
      content: `**Renewable energy** comes from sources that are naturally replenished and do not run out on a human timescale. Unlike fossil fuels, renewable sources produce little or no greenhouse gas emissions during operation.

**Major renewable energy sources:**

**1. Solar energy**
Photovoltaic (PV) panels convert sunlight directly into electricity. Solar farms can be built on land or water. Limitations: depends on sunlight availability; energy storage (batteries) is needed for cloudy days and nighttime.

**2. Wind energy**
Wind turbines convert the kinetic energy of wind into electricity. Wind farms operate onshore (on land) and offshore (at sea). Limitations: wind is variable; turbines can affect bird populations and landscapes.

**3. Hydropower**
Uses the energy of flowing or falling water to generate electricity. Norway produces about 90 % of its electricity from hydropower. Limitations: requires suitable geography; dams can disrupt ecosystems and displace communities.

**4. Geothermal energy**
Uses heat from deep within the Earth. Iceland, for example, heats most of its buildings with geothermal energy. Limitations: only available in geologically active areas.

**5. Biomass and biofuels**
Energy from organic materials (wood, crops, waste). Can be carbon-neutral if managed sustainably. Limitations: land use competition with food production; can cause deforestation if poorly managed.

**Key vocabulary:**

| Term | Definition |
|------|-----------|
| *Renewable* | Can be replenished naturally and does not run out |
| *Non-renewable* | Exists in limited supply and will eventually be exhausted (e.g. coal, oil) |
| *Sustainability* | Meeting present needs without compromising the ability of future generations to meet theirs |
| *Carbon-neutral* | Producing no net release of CO2 into the atmosphere |
| *Energy transition* | The shift from fossil fuel-based energy systems to renewable sources |`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-25-example-2',
      type: 'example',
      title: 'Example: Comparing energy sources',
      problem: `A student is writing an essay comparing two energy sources. Read the outline below and identify: (a) which source is renewable and which is non-renewable, and (b) one advantage and one disadvantage of each.

**Source 1: Natural gas**
- Used for heating, cooking and electricity generation
- Produces CO2 when burned, but less than coal
- Supplies are finite and must be extracted from underground reserves

**Source 2: Offshore wind**
- Wind turbines at sea generate electricity
- Produces no emissions during operation
- Requires large upfront investment; output varies with weather conditions`,
      solution: `**(a) Classification:**
- Natural gas = **non-renewable** (finite supply, extracted from underground)
- Offshore wind = **renewable** (wind is naturally replenished)

**(b) Advantages and disadvantages:**

**Natural gas:**
- Advantage: Produces fewer CO2 emissions than coal, making it a cleaner transitional fuel.
- Disadvantage: Still produces greenhouse gases and supplies will eventually run out.

**Offshore wind:**
- Advantage: Produces no greenhouse gas emissions during operation.
- Disadvantage: Output depends on weather (variable wind) and requires large initial investment.

**Note:** When comparing energy sources, it is important to consider not only emissions but also cost, reliability, environmental impact and availability in different regions.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-25-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-25-ex-3',
        number: '25.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Norway produces about 90 % of its electricity from one renewable source. Which one?',
        options: [
          {
            id: 'a',
            text: 'Solar energy',
            isCorrect: false,
            feedback: 'Incorrect. Norway\'s northern latitude and long winter darkness make solar energy a minor contributor. The answer relates to Norway\'s geography — mountains and rainfall.',
          },
          {
            id: 'b',
            text: 'Wind energy',
            isCorrect: false,
            feedback: 'Incorrect. Norway does have some wind power, but it is not the dominant source. Think about what Norway has plenty of — water.',
          },
          {
            id: 'c',
            text: 'Hydropower',
            isCorrect: true,
            feedback: 'Correct! Norway\'s mountains, rivers and heavy rainfall make it ideal for hydropower. About 90 % of Norwegian electricity comes from hydroelectric plants.',
          },
          {
            id: 'd',
            text: 'Geothermal energy',
            isCorrect: false,
            feedback: 'Incorrect. Geothermal energy is more associated with Iceland, which sits on a volcanically active zone. Norway\'s main renewable source uses water.',
          },
        ],
        solution: 'Norway generates about 90 % of its electricity from hydropower, thanks to its abundant rainfall, rivers and mountainous terrain that create ideal conditions for hydroelectric dams.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-25-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-25-ex-4',
        number: '25.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Choose one renewable energy source (solar, wind, hydropower, geothermal or biomass). Write a short paragraph (80-120 words) in English explaining how it works, one advantage, and one limitation. Use at least three vocabulary terms from this chapter.',
        hints: [
          'Structure your paragraph: first explain how the energy source works, then give an advantage, then a limitation',
          'Use terms like "renewable", "emissions", "sustainability", "carbon-neutral" or "energy transition"',
        ],
        solution: 'A strong answer clearly explains the basic mechanism of the chosen energy source, gives a specific advantage (e.g. no emissions, naturally replenished) and a specific limitation (e.g. depends on weather, high initial cost, geographical restrictions). At least three climate/energy vocabulary terms should be used correctly.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 3: PERSPECTIVES ON CLIMATE POLICY ==========
    {
      id: 'engelsk-10-25-def-3',
      type: 'definition',
      title: 'Perspectives on Climate Policy',
      content: `Climate science tells us what is happening. **Climate policy** concerns what we should do about it — and here, people hold a wide range of views.

Understanding different perspectives does not mean all opinions are equally supported by evidence. It means recognising that policy decisions involve trade-offs between competing values: economic growth, environmental protection, social equality and individual freedom.

**Perspective 1: Rapid, large-scale government action**
Supporters argue that the scale and urgency of climate change require strong government intervention: binding emissions targets, carbon taxes, bans on fossil fuels, and large public investment in renewable energy. They point to scientific warnings about tipping points and irreversible damage.

**Perspective 2: Market-driven and technology-focused solutions**
Supporters argue that innovation, competition and economic incentives are the most effective drivers of change. They favour policies like carbon trading, research funding and tax breaks for clean technology rather than bans and mandates. They argue that heavy regulation can slow economic growth and harm vulnerable communities.

**Perspective 3: Climate justice and equity**
Supporters emphasise that climate change affects people unequally. Developing countries, Indigenous communities and low-income populations are often hit hardest despite contributing least to emissions. This perspective calls for wealthy nations to bear more of the cost and for climate policies to address social inequality.

**Perspective 4: Scepticism about proposed solutions**
Some people accept the science but question whether specific policies (e.g. carbon taxes, renewable energy mandates) will be effective or affordable. They may argue that adaptation (preparing for climate change) should receive as much attention as mitigation (reducing emissions).

**Important:** In academic discussion, you should engage with different perspectives respectfully, evaluate the evidence behind each argument, and form your own view based on reasoning — not simply adopt or dismiss a position.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-25-example-3',
      type: 'example',
      title: 'Example: Evaluating arguments in a debate',
      problem: `Two speakers in a school debate present their positions on whether Norway should stop exporting oil and gas. Read both arguments and identify: (a) which perspective each speaker represents and (b) the strongest point in each argument.

**Speaker A:** "Norway has a moral responsibility to lead by example. We are one of the wealthiest countries in the world, and much of that wealth comes from fossil fuels. If we continue exporting oil while telling other countries to reduce emissions, we are being hypocritical. The profits from oil should be reinvested in renewable energy to create new green jobs."

**Speaker B:** "I agree that climate change is serious, but shutting down oil exports overnight would devastate the Norwegian economy and cost thousands of jobs in western Norway. A better approach is a gradual transition — investing in new technology while maintaining oil production during the shift. We also need to remember that if Norway stops producing oil, other countries with worse environmental standards will simply fill the gap."`,
      solution: `**(a) Perspectives:**
- **Speaker A** represents Perspective 1 (rapid government action) combined with elements of Perspective 3 (climate justice — wealthy nations should lead).
- **Speaker B** represents Perspective 2 (market-driven, technology-focused, gradual transition) with elements of Perspective 4 (questioning whether one specific policy will be effective).

**(b) Strongest points:**
- **Speaker A's strongest point:** The argument about hypocrisy — it is difficult for Norway to advocate for global emissions reductions while profiting from fossil fuel exports. This is a strong moral and logical argument.
- **Speaker B's strongest point:** The "carbon leakage" argument — if Norway stops producing oil, other countries may increase production with worse environmental standards, resulting in no net reduction in global emissions. This is a practical, evidence-based argument.

**Note:** Both arguments have merit. A strong essay would acknowledge the valid points on both sides while ultimately defending a position with clear reasoning.`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-25-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-25-ex-5',
        number: '25.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What does "climate justice" primarily focus on?',
        options: [
          {
            id: 'a',
            text: 'Punishing countries that produce the most emissions through international courts',
            isCorrect: false,
            feedback: 'Incorrect. Climate justice is not about punishment. It is about fairness and equity in how the costs and impacts of climate change are distributed.',
          },
          {
            id: 'b',
            text: 'The idea that climate change affects people unequally and that policies should address this inequality',
            isCorrect: true,
            feedback: 'Correct! Climate justice recognises that the poorest and most vulnerable communities are often hit hardest by climate change despite contributing least to the problem. It calls for equitable solutions.',
          },
          {
            id: 'c',
            text: 'Rejecting all climate science as unreliable',
            isCorrect: false,
            feedback: 'Incorrect. Climate justice is based on accepting climate science and focusing on the fairness of policy responses.',
          },
          {
            id: 'd',
            text: 'Allowing every country to set its own emissions targets without international cooperation',
            isCorrect: false,
            feedback: 'Incorrect. Climate justice typically calls for more international cooperation, not less, with wealthier nations taking greater responsibility.',
          },
        ],
        solution: 'Climate justice focuses on the unequal impacts of climate change — developing nations, Indigenous communities and low-income populations are disproportionately affected. It calls for wealthy nations to bear more of the cost and for policies to address social inequality alongside environmental goals.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-25-summary',
      type: 'text',
      title: 'Summary — Climate Change and the Environment',
      content: `## Summary

**The greenhouse effect** is a natural process where atmospheric gases trap heat from the Sun. Human activities — burning fossil fuels, deforestation and agriculture — have enhanced this effect, causing global temperatures to rise by approximately 1.1 °C since pre-industrial times.

**Renewable energy** sources (solar, wind, hydropower, geothermal, biomass) produce little or no greenhouse gas emissions during operation. Each has advantages and limitations related to cost, geography, reliability and environmental impact. Norway generates about 90 % of its electricity from hydropower.

**Scientific texts** use precise measurements, technical vocabulary, hedging language and references to authoritative sources. Learning to read these texts is an important academic skill.

**Climate policy** involves trade-offs between competing values. Perspectives range from rapid government action to market-driven solutions, from climate justice to scepticism about specific policies. Understanding these perspectives — and evaluating the evidence behind them — is essential for informed democratic participation.

The key skills from this chapter: reading scientific English, using climate vocabulary accurately, and engaging respectfully with different viewpoints.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-25-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-25-ex-6',
        number: '25.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'In the scientific extract about global warming, the text says the IPCC concludes "with high confidence" that human activities are the dominant cause. Why do scientists use phrases like "with high confidence" instead of saying "it is certain"?',
        options: [
          {
            id: 'a',
            text: 'Because scientists are not sure and do not trust their own data',
            isCorrect: false,
            feedback: 'Incorrect. "High confidence" in scientific language means the evidence is very strong. Scientists use precise confidence levels to communicate exactly how certain they are.',
          },
          {
            id: 'b',
            text: 'Because scientific writing uses precise confidence levels to communicate the strength of evidence rather than claiming absolute certainty',
            isCorrect: true,
            feedback: 'Correct! Scientific language is precise about uncertainty. "High confidence" means the evidence is strong and consistent, but scientists acknowledge that absolute certainty is rare in science. This is a strength, not a weakness.',
          },
          {
            id: 'c',
            text: 'Because the IPCC wants to avoid being sued for making false claims',
            isCorrect: false,
            feedback: 'Incorrect. The language reflects scientific methodology, not legal caution. Expressing confidence levels is standard scientific practice.',
          },
          {
            id: 'd',
            text: 'Because there is no real evidence for climate change and they are being deliberately vague',
            isCorrect: false,
            feedback: 'Incorrect. There is extensive evidence from multiple independent sources. "High confidence" indicates very strong evidence, not a lack of it.',
          },
        ],
        solution: 'Scientists use precise confidence levels (low, medium, high, very high) to communicate exactly how strong the evidence is. "High confidence" means the evidence is robust, consistent across multiple sources, and widely accepted — but science avoids claiming absolute certainty as a matter of methodology.',
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-25-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-25-ex-7',
        number: '25.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a short argumentative text (150-200 words) in English on the following question: "Should wealthy countries like Norway do more to combat climate change than developing countries?" Present at least two perspectives and state your own reasoned conclusion.',
        hints: [
          'Use the perspectives from Definition 3 as a starting point',
          'A strong argument acknowledges the other side before explaining why your position is stronger',
          'Use climate vocabulary from this chapter (emissions, carbon footprint, sustainability, energy transition, etc.)',
        ],
        solution: 'A strong response presents at least two perspectives (e.g. wealthy countries should lead because they have more resources and historical emissions vs. all countries must contribute because climate change is a global problem). The student should use specific vocabulary from the chapter, provide reasoning for each perspective, and conclude with their own position supported by evidence or logic. The conclusion should be nuanced rather than absolute.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Greenhouse effect', definition: 'A natural process where atmospheric gases trap heat from the Sun, warming the Earth\'s surface.' },
    { term: 'Fossil fuel', definition: 'A fuel formed from ancient organic matter (coal, oil, natural gas) that releases CO2 when burned.' },
    { term: 'Carbon footprint', definition: 'The total amount of greenhouse gases produced by a person, organisation or product.' },
    { term: 'Renewable energy', definition: 'Energy from sources that are naturally replenished (solar, wind, hydropower, geothermal, biomass).' },
    { term: 'Sustainability', definition: 'Meeting present needs without compromising the ability of future generations to meet theirs.' },
    { term: 'Energy transition', definition: 'The shift from fossil fuel-based energy systems to renewable sources.' },
    { term: 'Climate justice', definition: 'The recognition that climate change affects people unequally and that policies should address this inequality.' },
    { term: 'Emissions', definition: 'Gases released into the atmosphere, especially from burning fuels or industrial processes.' },
  ],
};

// ============================================================================
// KAPITTEL 26: Human Rights and Social Justice
// ============================================================================

export const CHAPTER_ENGELSK_10_26: TextbookChapter = {
  id: 'engelsk-10-26',
  courseId: 'engelsk-10',
  chapterNumber: '26',
  title: 'Human Rights and Social Justice',
  description: 'Explore the Universal Declaration of Human Rights, learn about civil rights movements, discuss contemporary social justice issues, and build key vocabulary for democratic participation.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'utforske og reflektere over situasjonen til urfolk og nasjonale minoriteter i engelskspråklige land og i Norge',
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-26-intro',
      type: 'text',
      content: `## Human Rights and Social Justice

In 1948, after the devastation of World War II, the United Nations adopted the **Universal Declaration of Human Rights (UDHR)** — a document proclaiming the fundamental rights and freedoms that belong to every person, regardless of nationality, race, gender, religion or any other status.

More than 75 years later, human rights remain at the centre of global debate. Who has rights? How are they protected? What happens when rights conflict with one another?

In this chapter, you will learn:

1. What the **UDHR** says and why it matters
2. Key moments in the **civil rights movements** in the English-speaking world
3. **Contemporary social justice issues** and how they are discussed in English
4. Essential **vocabulary** for talking about rights, equality and justice

These topics require careful thinking, respectful language and the willingness to engage with perspectives different from your own.`,
    },

    // ========== DEFINISJON 1: THE UDHR ==========
    {
      id: 'engelsk-10-26-def-1',
      type: 'definition',
      title: 'The Universal Declaration of Human Rights (UDHR)',
      content: `The **Universal Declaration of Human Rights (UDHR)** was adopted by the United Nations General Assembly on 10 December 1948 in Paris. It was drafted by representatives from all regions of the world and has been translated into over 500 languages.

**What it is:**
A non-binding declaration that sets out 30 articles describing the fundamental rights and freedoms of all people. While not legally enforceable on its own, it has inspired legally binding international treaties, national constitutions and domestic laws worldwide.

**Key articles:**

- **Article 1:** All human beings are born free and equal in dignity and rights.
- **Article 2:** Everyone is entitled to rights without discrimination of any kind (race, colour, sex, language, religion, political opinion, national or social origin, property, birth or other status).
- **Article 3:** Everyone has the right to life, liberty and security of person.
- **Article 18:** Everyone has the right to freedom of thought, conscience and religion.
- **Article 19:** Everyone has the right to freedom of opinion and expression.
- **Article 26:** Everyone has the right to education.

**Key vocabulary:**

| Term | Definition |
|------|-----------|
| *Human rights* | Fundamental rights and freedoms that belong to every person |
| *Dignity* | The quality of being worthy of honour and respect |
| *Discrimination* | Unjust treatment based on characteristics such as race, gender or religion |
| *Declaration* | A formal statement or announcement, often by a government or international body |
| *Inalienable* | Cannot be taken away or given up — often used to describe fundamental rights |
| *Universal* | Applying to all people everywhere, without exception |`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-26-example-1',
      type: 'example',
      title: 'Example: Analysing Article 1 of the UDHR',
      problem: `Read Article 1 of the UDHR carefully and answer the questions below.

*"All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood."*

(a) What does "equal in dignity and rights" mean in practice?
(b) What does "endowed with reason and conscience" imply about human beings?
(c) Why do you think the drafters used the word "should" rather than "must" in the final clause?`,
      solution: `**(a) "Equal in dignity and rights"** means that every person — regardless of nationality, race, gender, wealth or any other characteristic — deserves the same basic respect and legal protections. In practice, this means laws and institutions should treat all people equally.

**(b) "Endowed with reason and conscience"** implies that all humans have the natural capacity to think rationally and distinguish right from wrong. This places a responsibility on individuals: because we can reason and reflect, we have a duty to treat others with respect.

**(c) The word "should"** is aspirational rather than mandatory. The drafters knew they could not force every person to "act in a spirit of brotherhood". By using "should", they set a moral standard — a goal for humanity to work towards — while recognising that declarations cannot control individual behaviour.

**Key insight:** The UDHR is both a legal foundation and a moral vision. Its power lies in setting universal standards that nations and individuals aspire to uphold.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-26-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-ex-1',
        number: '26.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'When was the Universal Declaration of Human Rights adopted by the United Nations?',
        options: [
          {
            id: 'a',
            text: '1776 — the same year as the American Declaration of Independence',
            isCorrect: false,
            feedback: 'Incorrect. The American Declaration of Independence was in 1776. The UDHR came much later, after World War II.',
          },
          {
            id: 'b',
            text: '1948 — after the end of World War II',
            isCorrect: true,
            feedback: 'Correct! The UDHR was adopted on 10 December 1948. The horrors of World War II and the Holocaust motivated the international community to establish universal human rights standards.',
          },
          {
            id: 'c',
            text: '1989 — when the Berlin Wall fell',
            isCorrect: false,
            feedback: 'Incorrect. The fall of the Berlin Wall was in 1989. The UDHR was adopted decades earlier, in 1948.',
          },
          {
            id: 'd',
            text: '2001 — after the September 11 attacks',
            isCorrect: false,
            feedback: 'Incorrect. The UDHR was adopted long before 2001. It was a response to World War II, not to 21st-century events.',
          },
        ],
        solution: 'The UDHR was adopted by the UN General Assembly on 10 December 1948 in Paris, in response to the atrocities of World War II.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-26-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-ex-2',
        number: '26.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Choose one article from the UDHR (other than Article 1). Write it out, then explain in your own words (60-80 words in English): (a) what the article means, and (b) give one real-world example where this right is either upheld or violated.',
        hints: [
          'You can find the full text of the UDHR at un.org/en/about-us/universal-declaration-of-human-rights',
          'Focus on articles that relate to issues you know about — education (Art. 26), expression (Art. 19), or equality (Art. 2)',
        ],
        solution: 'A strong answer quotes a specific UDHR article, explains it in clear language, and gives a concrete example. For instance, Article 19 (freedom of expression) could be linked to press freedom in democracies or censorship in authoritarian states. The example should demonstrate understanding of the right in a real-world context.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: CIVIL RIGHTS MOVEMENTS ==========
    {
      id: 'engelsk-10-26-def-2',
      type: 'definition',
      title: 'Civil Rights Movements',
      content: `**Civil rights movements** are organised efforts by groups of people to achieve equal treatment and legal protection. Throughout history, people have fought for rights that were denied to them based on race, gender, religion or other characteristics.

**Key movements in the English-speaking world:**

**1. The American Civil Rights Movement (1950s-1960s)**
Fought to end racial segregation and discrimination against African Americans in the United States. Key figures include **Rosa Parks** (Montgomery Bus Boycott, 1955), **Martin Luther King Jr.** (March on Washington, "I Have a Dream" speech, 1963) and **Malcolm X** (advocated Black empowerment and self-defence). Major achievements: the Civil Rights Act (1964) and the Voting Rights Act (1965).

**2. The Anti-Apartheid Movement (1948-1994)**
In South Africa, the system of apartheid enforced racial segregation and white minority rule. **Nelson Mandela** and the African National Congress (ANC) led resistance through protest, civil disobedience and international pressure. Mandela was imprisoned for 27 years before becoming South Africa's first democratically elected president in 1994.

**3. The Women's Suffrage Movement (19th-20th century)**
Fought for women's right to vote. In the UK, the **suffragettes** (led by Emmeline Pankhurst) used both peaceful and militant protest. New Zealand was the first country to grant women the right to vote (1893). Norway followed in 1913.

**4. Indigenous Rights Movements**
Indigenous peoples in countries such as Australia, Canada, New Zealand and the United States have campaigned for land rights, cultural recognition and self-determination. In Australia, the **1967 referendum** allowed Aboriginal people to be counted in the census for the first time.

**Key vocabulary:**

| Term | Definition |
|------|-----------|
| *Civil rights* | The rights of citizens to political and social freedom and equality |
| *Segregation* | The enforced separation of people based on race or other characteristics |
| *Civil disobedience* | Deliberately breaking unjust laws through peaceful, non-violent protest |
| *Suffrage* | The right to vote in political elections |
| *Apartheid* | The system of racial segregation enforced in South Africa from 1948 to 1994 |`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-26-example-2',
      type: 'example',
      title: 'Example: Analysing a civil rights speech',
      problem: `Read this extract from Martin Luther King Jr.'s "I Have a Dream" speech (1963) and identify: (a) the rhetorical techniques used and (b) which UDHR articles the speech connects to.

*"I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.' I have a dream that my four little children will one day live in a nation where they will not be judged by the colour of their skin but by the content of their character."*`,
      solution: `**(a) Rhetorical techniques:**
- **Repetition (anaphora):** "I have a dream" is repeated to create rhythm, emphasis and emotional power.
- **Allusion:** King references the US Declaration of Independence ("all men are created equal"), connecting civil rights to America's founding ideals.
- **Personal appeal (pathos):** Mentioning "my four little children" makes the argument personal and emotional — this is not abstract politics, it is about real families.
- **Contrast:** "Colour of their skin" vs. "content of their character" — a powerful contrast that defines the core demand of the movement.

**(b) UDHR connections:**
- **Article 1** ("All human beings are born free and equal in dignity and rights") — King's dream of equality directly echoes this article.
- **Article 2** (rights without discrimination based on race, colour, etc.) — the demand to be judged by character, not skin colour, is a call for non-discrimination.
- **Article 7** (equal protection before the law) — the civil rights movement fought for legal equality.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-26-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-ex-3',
        number: '26.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What was the main goal of the American Civil Rights Movement in the 1950s and 1960s?',
        options: [
          {
            id: 'a',
            text: 'To end British colonial rule in America',
            isCorrect: false,
            feedback: 'Incorrect. British colonial rule ended with the American Revolution in the 1770s. The civil rights movement was about racial equality within the United States.',
          },
          {
            id: 'b',
            text: 'To achieve equal rights and end racial segregation for African Americans',
            isCorrect: true,
            feedback: 'Correct! The movement fought to end laws and practices that discriminated against African Americans, including segregation in schools, buses, restaurants and voting.',
          },
          {
            id: 'c',
            text: 'To give women the right to vote in national elections',
            isCorrect: false,
            feedback: 'Incorrect. Women\'s suffrage was a separate movement. Women gained the right to vote in the US in 1920 with the 19th Amendment.',
          },
          {
            id: 'd',
            text: 'To abolish the apartheid system in South Africa',
            isCorrect: false,
            feedback: 'Incorrect. The anti-apartheid movement was in South Africa. The American civil rights movement addressed racial discrimination within the United States.',
          },
        ],
        solution: 'The American Civil Rights Movement fought to end racial segregation and discrimination against African Americans, achieving landmarks such as the Civil Rights Act (1964) and the Voting Rights Act (1965).',
      },
    },

    // ========== DEFINISJON 3: CONTEMPORARY SOCIAL JUSTICE ISSUES ==========
    {
      id: 'engelsk-10-26-def-3',
      type: 'definition',
      title: 'Contemporary Social Justice Issues',
      content: `The struggle for human rights and social justice continues today. While significant progress has been made, many challenges remain — and new issues have emerged in the digital age.

**Key contemporary issues:**

**1. Racial equality**
Movements such as **Black Lives Matter** (founded 2013) have brought renewed attention to systemic racism — discrimination embedded in institutions, laws and cultural practices rather than just individual prejudice. Debates continue about the nature and extent of structural discrimination, as well as the most effective methods for addressing inequality.

**2. Gender equality**
Despite legal advances, gender-based discrimination persists in many areas: pay gaps, workplace representation, access to education, and gender-based violence. The **#MeToo movement** (2017) highlighted the scale of sexual harassment and assault worldwide.

**3. LGBTQ+ rights**
Campaigns for equal rights for lesbian, gay, bisexual, transgender and queer individuals have achieved significant legal victories in many countries (e.g. marriage equality). However, LGBTQ+ people still face discrimination and criminalisation in many parts of the world.

**4. Refugee and migration rights**
Millions of people worldwide are displaced by conflict, persecution and climate change. Debates about refugee rights involve competing concerns: humanitarian obligations, national security, economic impacts and cultural integration.

**5. Digital rights and privacy**
Questions about surveillance, data collection, freedom of expression online and the right to privacy have become central issues in the 21st century.

**Key vocabulary:**

| Term | Definition |
|------|-----------|
| *Social justice* | The fair distribution of opportunities, rights and resources in a society |
| *Systemic/structural* | Built into the systems and institutions of a society, not just individual behaviour |
| *Equality* | Treating everyone the same regardless of differences |
| *Equity* | Giving people what they need to have fair opportunities, recognising that people start from different positions |
| *Activism* | Taking action to bring about social or political change |
| *Solidarity* | Unity and support between people who share a common goal or struggle |`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-26-example-3',
      type: 'example',
      title: 'Example: Equality vs. equity',
      problem: `A common debate in social justice is the difference between **equality** and **equity**. Consider the following scenario and explain which approach each solution represents.

**Scenario:** A school offers a standardised test. Three students take the test:
- Student A has a quiet room at home with books and internet access.
- Student B shares a small flat with five family members and has no internet at home.
- Student C has a learning disability and needs extra time to process information.

**Solution 1:** All three students take the same test, in the same room, with the same time limit.
**Solution 2:** Student B is given access to the school library to study after hours. Student C receives extended time. Student A takes the test as normal.`,
      solution: `**Solution 1 = Equality**
Everyone is treated identically. The same test, same conditions, same time. On the surface this seems fair. However, critics of this approach argue that the three students face very different barriers. Student A has a significant advantage, while Students B and C face obstacles that have nothing to do with their ability.

**Solution 2 = Equity**
Each student receives what they need to have a fair chance. Student B gets study space and resources. Student C gets extra time for their disability. Student A already has what they need. Supporters argue this produces fairer outcomes. Critics argue it requires subjective decisions about who needs extra help and may create dependency. The goal is not identical treatment but **fair outcomes**.

**Key insight:** Equality asks: "Are we treating everyone the same?" Equity asks: "Does everyone have what they need to succeed?" Both concepts are important in discussions about human rights and social justice.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-26-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-ex-4',
        number: '26.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What is the difference between "equality" and "equity"?',
        options: [
          {
            id: 'a',
            text: 'They mean the same thing — both refer to treating people fairly',
            isCorrect: false,
            feedback: 'Incorrect. While both relate to fairness, they approach it differently. Equality means identical treatment; equity means providing what each person needs.',
          },
          {
            id: 'b',
            text: 'Equality means identical treatment for all; equity means giving people what they need to have fair opportunities',
            isCorrect: true,
            feedback: 'Correct! Equality treats everyone the same regardless of circumstances. Equity recognises that people start from different positions and provides resources accordingly to create fair outcomes.',
          },
          {
            id: 'c',
            text: 'Equality is about economics; equity is about education',
            isCorrect: false,
            feedback: 'Incorrect. Both terms apply across all areas of society. The distinction is about approach to fairness, not about specific sectors.',
          },
          {
            id: 'd',
            text: 'Equality is a modern concept; equity is an outdated idea from the 19th century',
            isCorrect: false,
            feedback: 'Incorrect. Both concepts are actively discussed today and both are relevant to contemporary social justice debates.',
          },
        ],
        solution: 'Equality means treating everyone identically. Equity means providing people with what they need to have fair opportunities, recognising that people face different barriers. Both are important values in human rights discussions.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-26-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-ex-5',
        number: '26.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Choose one contemporary social justice issue from the list below. Write a short text (100-150 words) in English explaining: (a) what the issue is, (b) why it matters, and (c) what one possible step towards progress could be.\n\nIssues to choose from: racial equality, gender equality, LGBTQ+ rights, refugee rights, or digital privacy rights.',
        hints: [
          'Use specific vocabulary from this chapter (e.g. systemic, equity, activism, solidarity, discrimination)',
          'Try to present the issue factually before expressing a viewpoint',
          'Consider both local and global dimensions of the issue',
        ],
        solution: 'A strong answer clearly explains the chosen issue with factual accuracy, explains why it matters by connecting it to human rights principles, and suggests a concrete (not vague) step towards progress. The text should use vocabulary from the chapter and demonstrate awareness of complexity — avoiding oversimplification.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-26-summary',
      type: 'text',
      title: 'Summary — Human Rights and Social Justice',
      content: `## Summary

**The Universal Declaration of Human Rights (UDHR)**, adopted in 1948, sets out 30 articles describing fundamental rights for all people. Key principles include equality in dignity and rights (Article 1), non-discrimination (Article 2), and rights to life, education and freedom of expression. While not legally binding on its own, the UDHR has inspired international treaties and national laws worldwide.

**Civil rights movements** have shaped history: the American Civil Rights Movement fought racial segregation, the anti-apartheid movement ended racial oppression in South Africa, the suffrage movement won women the right to vote, and Indigenous rights movements continue to campaign for recognition and self-determination.

**Contemporary issues** include racial equality, gender equality, LGBTQ+ rights, refugee and migration rights, and digital privacy. These discussions involve understanding the difference between **equality** (identical treatment) and **equity** (providing what people need for fair outcomes).

The vocabulary of human rights — dignity, discrimination, solidarity, activism, systemic, inalienable — gives you the language to participate in these important conversations in English.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-26-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-ex-6',
        number: '26.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following statements best describes the legal status of the UDHR?',
        options: [
          {
            id: 'a',
            text: 'It is a binding international law that all UN member states must follow',
            isCorrect: false,
            feedback: 'Incorrect. The UDHR is a declaration, not a treaty. It is not legally binding on its own, though it has inspired legally binding treaties such as the International Covenant on Civil and Political Rights.',
          },
          {
            id: 'b',
            text: 'It is a non-binding declaration that sets moral standards and has inspired legally binding treaties and national laws',
            isCorrect: true,
            feedback: 'Correct! The UDHR is a declaration of principles. While not enforceable by itself, it has been the foundation for numerous binding international treaties and has influenced constitutions and laws in countries around the world.',
          },
          {
            id: 'c',
            text: 'It only applies to countries in Europe and North America',
            isCorrect: false,
            feedback: 'Incorrect. The UDHR is universal — it applies to all people in all countries. It was drafted by representatives from all regions of the world.',
          },
          {
            id: 'd',
            text: 'It was replaced by a new human rights document in the year 2000',
            isCorrect: false,
            feedback: 'Incorrect. The UDHR remains the foundational human rights document and has not been replaced. Additional treaties have been added, but the UDHR still stands.',
          },
        ],
        solution: 'The UDHR is a non-binding declaration that establishes moral and political standards for human rights. While not legally enforceable on its own, it has inspired legally binding international treaties (such as the ICCPR and ICESCR) and has influenced national constitutions worldwide.',
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-26-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-ex-7',
        number: '26.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write an essay (200-250 words) on the following topic: "How has the civil rights movement of the 1950s and 1960s influenced contemporary social justice movements?" Discuss at least two connections between past and present movements. Use specific examples and vocabulary from this chapter.',
        hints: [
          'Think about methods (civil disobedience, marches, speeches), goals (equality, anti-discrimination) and challenges (systemic racism)',
          'Consider how movements like Black Lives Matter draw on the legacy of Martin Luther King Jr., Rosa Parks and others',
          'Use vocabulary: civil rights, civil disobedience, systemic, solidarity, activism, equality, equity',
        ],
        solution: 'A strong essay identifies concrete connections between past and present: for example, (1) the use of non-violent protest and civil disobedience (from King\'s marches to modern demonstrations), (2) the focus on systemic rather than just individual racism (from segregation laws to structural inequality today), (3) the power of media (TV coverage in the 1960s vs. social media today). The essay should use specific examples and vocabulary from the chapter and demonstrate analytical thinking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'engelsk-10-26-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-ex-8',
        number: '26.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Nelson Mandela spent 27 years in prison before becoming South Africa\'s first democratically elected president. Which system of racial oppression did he and the ANC fight against?',
        options: [
          {
            id: 'a',
            text: 'Segregation in the American South',
            isCorrect: false,
            feedback: 'Incorrect. Segregation in the American South was the focus of the US civil rights movement. Mandela fought against the system in South Africa.',
          },
          {
            id: 'b',
            text: 'Apartheid — the system of racial segregation in South Africa',
            isCorrect: true,
            feedback: 'Correct! Apartheid (Afrikaans for "separateness") was the system of institutionalised racial segregation and white minority rule in South Africa from 1948 to 1994. Mandela became president in 1994 after the first free elections.',
          },
          {
            id: 'c',
            text: 'Colonialism in India under British rule',
            isCorrect: false,
            feedback: 'Incorrect. The struggle against British colonialism in India was led by figures like Mahatma Gandhi. Mandela fought against apartheid in South Africa.',
          },
          {
            id: 'd',
            text: 'The caste system in South Asia',
            isCorrect: false,
            feedback: 'Incorrect. The caste system is associated with South Asia. Mandela fought against apartheid, the South African system of racial segregation.',
          },
        ],
        solution: 'Nelson Mandela fought against apartheid — the system of institutionalised racial segregation and white minority rule enforced in South Africa from 1948 to 1994.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Human rights', definition: 'Fundamental rights and freedoms that belong to every person, as set out in the UDHR.' },
    { term: 'UDHR', definition: 'The Universal Declaration of Human Rights, adopted by the United Nations in 1948, setting out 30 articles on fundamental rights.' },
    { term: 'Discrimination', definition: 'Unjust or prejudicial treatment of people based on characteristics such as race, gender, religion or other status.' },
    { term: 'Civil rights', definition: 'The rights of citizens to political and social freedom and equality.' },
    { term: 'Civil disobedience', definition: 'Deliberately breaking unjust laws through peaceful, non-violent protest as a form of resistance.' },
    { term: 'Segregation', definition: 'The enforced separation of people based on race or other characteristics.' },
    { term: 'Apartheid', definition: 'The system of institutionalised racial segregation enforced in South Africa from 1948 to 1994.' },
    { term: 'Equality', definition: 'Treating everyone the same regardless of differences.' },
    { term: 'Equity', definition: 'Giving people what they need to have fair opportunities, recognising that people start from different positions.' },
    { term: 'Social justice', definition: 'The fair distribution of opportunities, rights and resources in a society.' },
    { term: 'Activism', definition: 'Taking action to bring about social or political change.' },
    { term: 'Solidarity', definition: 'Unity and support between people who share a common goal or struggle.' },
  ],
};

// ============================================================================
// KAPITTEL 27: Technology and Ethics
// ============================================================================

export const CHAPTER_ENGELSK_10_27: TextbookChapter = {
  id: 'engelsk-10-27',
  courseId: 'engelsk-10',
  chapterNumber: '27',
  title: 'Technology and Ethics',
  description: 'Explore how artificial intelligence, automation, digital privacy and the digital divide raise ethical questions that affect individuals, communities and societies worldwide.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'vurdere kilder kritisk og identifisere påvirkning i medietekster',
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-27-intro',
      type: 'text',
      content: `## Technology and Ethics

Technology is transforming every part of our lives. Artificial intelligence writes essays, creates images and diagnoses diseases. Algorithms decide what news you see, what music you hear and even which job applicants get interviews. Your personal data is collected, stored and sold by companies you may never have heard of.

These developments bring enormous benefits, but they also raise difficult ethical questions. Who is responsible when an AI system makes a harmful decision? Should companies be allowed to track your every click? What happens to workers whose jobs are replaced by machines? And what about the billions of people who still lack reliable internet access?

In this chapter, you will learn:

1. How **AI and automation** are changing work, creativity and decision-making
2. Why **digital privacy** matters and how your data is used
3. What the **digital divide** is and why it is a global justice issue
4. How to analyse **ethical dilemmas in technology** using structured arguments

These are not simple topics with easy answers. You will need to think critically, consider multiple perspectives and form your own well-reasoned opinions.`,
    },

    // ========== DEFINISJON 1: AI AND AUTOMATION ==========
    {
      id: 'engelsk-10-27-def-1',
      type: 'definition',
      title: 'Artificial Intelligence and Automation',
      content: `**Artificial intelligence (AI)** refers to computer systems designed to perform tasks that normally require human intelligence, such as understanding language, recognising images, making decisions and learning from experience.

**Key concepts:**

**Machine learning** — A type of AI where systems improve by analysing large amounts of data rather than being explicitly programmed for every task. For example, a spam filter learns to identify spam by studying millions of emails.

**Automation** — The use of technology to perform tasks with minimal human involvement. Factory robots, self-checkout machines and automated customer service chatbots are all examples.

**Algorithm** — A set of step-by-step instructions that a computer follows to solve a problem or make a decision. Social media algorithms decide which posts appear in your feed.

**Generative AI** — AI systems that can create new content, such as text, images, music or code, based on patterns learned from existing data.

**Ethical questions around AI and automation:**
- **Bias:** AI systems can reproduce and amplify existing biases in the data they are trained on. Facial recognition, for instance, has been shown to be less accurate for people with darker skin.
- **Accountability:** When an AI system causes harm — a self-driving car crash, a wrongful denial of a loan — who is responsible? The programmer? The company? The user?
- **Job displacement:** Automation may eliminate many jobs while creating new ones. The transition affects some communities more than others.
- **Creativity and ownership:** If an AI generates a painting or writes a song, who owns it? Can AI-created work be considered art?`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-27-example-1',
      type: 'example',
      title: 'Example: Bias in AI recruitment tools',
      problem: `In 2018, a major technology company abandoned an AI recruitment tool after discovering it discriminated against women. The system had been trained on ten years of CVs submitted to the company, most of which came from men. As a result, the AI learned to penalise CVs that included the word "women's" (for example, "women's chess club captain") and downgraded graduates of all-women's colleges.

(a) Identify the source of the bias in this AI system.
(b) Explain why the company's engineers did not intend the bias but the system produced it anyway.
(c) Suggest one way the company could have prevented this problem.`,
      solution: `**(a)** The source of the bias was the training data. Because the company had historically received more CVs from men, the AI learned to associate male-dominated language patterns with successful candidates.

**(b)** The engineers did not write code telling the system to prefer men. However, the AI detected statistical patterns in the historical data — patterns that reflected existing gender imbalances in the tech industry — and treated those patterns as indicators of quality.

**(c)** The company could have audited the training data for demographic balance, tested the system's outputs for bias before deployment, or used a more diverse and representative dataset. Human oversight of the AI's decisions during a trial period would also have caught the problem earlier.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-27-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-ex-1',
        number: '27.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the main reason AI systems can produce biased results?',
        options: [
          {
            id: 'a',
            text: 'Programmers deliberately write code that discriminates against certain groups',
            isCorrect: false,
            feedback: 'Incorrect. While intentional bias is possible, the more common problem is unintentional bias that comes from the training data.',
          },
          {
            id: 'b',
            text: 'AI systems learn from historical data that may already contain human biases',
            isCorrect: true,
            feedback: 'Correct! AI learns patterns from the data it is trained on. If that data reflects existing social biases, the AI will reproduce and sometimes amplify those biases.',
          },
          {
            id: 'c',
            text: 'Computers are fundamentally incapable of making fair decisions',
            isCorrect: false,
            feedback: 'Incorrect. Computers can be designed to make fair decisions, but they need carefully curated data and human oversight.',
          },
          {
            id: 'd',
            text: 'AI always makes random decisions that happen to be unfair',
            isCorrect: false,
            feedback: 'Incorrect. AI decisions are not random. They follow patterns found in data, which is precisely why biased data leads to biased outcomes.',
          },
        ],
        solution: 'AI systems learn from historical data. If that data contains existing biases — such as gender imbalances in hiring — the AI will reproduce and sometimes amplify those biases in its outputs.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-27-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-ex-2',
        number: '27.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'A school is considering using an AI system to grade student essays. Write a short text (150-200 words) discussing both the advantages and disadvantages of this idea. Consider fairness, accuracy, the role of the teacher, and what might be lost if a machine replaces human judgement in grading.',
        hints: [
          'Think about what a human teacher can see in an essay that an AI might miss (creativity, personal voice, humour)',
          'Consider whether AI grading would be more or less consistent than human grading',
        ],
        solution: 'A strong answer discusses advantages such as consistency (the AI grades every essay by the same criteria), speed (teachers save time) and the removal of potential teacher bias. It also addresses disadvantages: AI may not understand creative or unconventional writing, may penalise students who write in a non-standard style, cannot appreciate personal experiences or cultural context, and removes the human relationship between teacher and student. The conclusion should weigh these factors and offer a reasoned opinion — for example, that AI could be used as a support tool alongside human grading rather than as a replacement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 2: DIGITAL PRIVACY ==========
    {
      id: 'engelsk-10-27-def-2',
      type: 'definition',
      title: 'Digital Privacy',
      content: `**Digital privacy** is the right of individuals to control how their personal information is collected, stored, used and shared online.

**How your data is collected:**

**1. Active data** — Information you voluntarily provide: filling in forms, posting on social media, sending messages.

**2. Passive data** — Information collected without your direct input: browsing history, location tracking, cookies that follow you across websites, app usage patterns.

**3. Inferred data** — Information predicted about you based on patterns: your likely age, income level, political views or health status, all estimated from your online behaviour.

**Key terms:**

- **Cookies** — Small files stored on your device that track your activity across websites
- **Data broker** — A company that collects and sells personal data to advertisers, employers or other organisations
- **End-to-end encryption** — A security method where only the sender and receiver can read a message
- **GDPR** — The General Data Protection Regulation, an EU law that gives individuals greater control over their personal data
- **Surveillance capitalism** — A term coined by scholar Shoshana Zuboff describing the business model of collecting and monetising personal data. Others argue that data-driven business models provide free services to billions and can be managed through regulation like the GDPR

**The privacy paradox:**
Research shows that most people say they value privacy, yet they freely share personal information online and rarely read privacy policies. This gap between stated values and actual behaviour is called the **privacy paradox**.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-27-example-2',
      type: 'example',
      title: 'Example: The data trail of a single day',
      problem: `Consider a typical school day for a 15-year-old in Norway. Identify at least five moments when personal data is likely being collected, and explain what kind of data is generated at each point.`,
      solution: `**1. Morning — smartphone alarm goes off.** The phone's operating system logs the time and tracks sleep patterns. Location data confirms the student is at home.

**2. Commute — using a travel card on public transport.** The transport company records the time, route and station. Over time, this builds a detailed picture of daily movements.

**3. At school — logging into a school platform.** The learning management system records login times, pages visited, assignments opened and time spent on each task.

**4. Break — scrolling social media.** The app tracks every post viewed, every like, every comment, how long the student pauses on each video, and uses this data to build an advertising profile.

**5. After school — streaming music.** The service records every song played, skipped or saved, and uses this to predict mood, taste and even personality traits.

**6. Evening — searching online for homework help.** The search engine logs the queries, the links clicked and the time spent on each page. Cookies follow the student to other websites to show related advertisements.

In a single day, dozens of companies collect hundreds of data points about one person.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-27-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-ex-3',
        number: '27.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What is the "privacy paradox"?',
        options: [
          {
            id: 'a',
            text: 'The fact that privacy settings are too difficult for most people to understand',
            isCorrect: false,
            feedback: 'Incorrect. While complex settings are a real issue, the privacy paradox specifically describes the gap between what people say and what they do.',
          },
          {
            id: 'b',
            text: 'The contradiction between people saying they value privacy but still freely sharing personal data online',
            isCorrect: true,
            feedback: 'Correct! The privacy paradox describes the gap between people\'s stated concern for privacy and their actual online behaviour, where they routinely share personal information.',
          },
          {
            id: 'c',
            text: 'The idea that digital privacy is impossible in the modern world',
            isCorrect: false,
            feedback: 'Incorrect. While complete privacy is difficult, the privacy paradox is about the inconsistency between attitudes and behaviour, not about impossibility.',
          },
          {
            id: 'd',
            text: 'The fact that governments protect privacy but also conduct surveillance',
            isCorrect: false,
            feedback: 'Incorrect. Government surveillance is a real tension, but the privacy paradox specifically refers to individual behaviour — saying one thing and doing another.',
          },
        ],
        solution: 'The privacy paradox is the gap between people\'s stated concern for their privacy and their actual behaviour online, where they frequently share personal information, accept cookies without reading them, and ignore privacy policies.',
      },
    },

    // ========== DEFINISJON 3: THE DIGITAL DIVIDE ==========
    {
      id: 'engelsk-10-27-def-3',
      type: 'definition',
      title: 'The Digital Divide',
      content: `The **digital divide** refers to the gap between people who have access to modern information and communication technology (ICT) and those who do not.

**Three levels of the digital divide:**

**1. Access divide (first-level)**
The most basic gap: some people simply do not have access to the internet or digital devices. According to the International Telecommunication Union, approximately 2.6 billion people — about one third of the world's population — were still offline in 2023. The gap is widest in sub-Saharan Africa, South Asia and among rural communities everywhere.

**2. Usage divide (second-level)**
Even among people with access, there are differences in how effectively they use technology. Factors include digital literacy, language (most online content is in English), age, education and confidence.

**3. Outcome divide (third-level)**
Even among people who use technology regularly, the benefits are not equally distributed. Some use the internet to access education, apply for jobs and participate in democracy. Others use it mainly for passive consumption.

**Why the digital divide matters:**
- **Education:** Students without reliable internet fall behind, as the COVID-19 pandemic made painfully clear.
- **Employment:** Many jobs now require digital skills. Those without them are excluded from a growing part of the economy.
- **Democracy:** Online government services, digital voting information and political discussion increasingly happen online, leaving offline citizens out.
- **Health:** Telemedicine and online health information are inaccessible to those without connectivity.

The digital divide is not only a technology problem. It is a justice problem that intersects with poverty, geography, gender and age.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-27-example-3',
      type: 'example',
      title: 'Example: The digital divide during COVID-19',
      problem: `During the COVID-19 pandemic, schools around the world shifted to online learning. Explain how this transition highlighted the digital divide, giving examples from different countries or communities.`,
      solution: `The shift to online learning revealed deep inequalities in digital access:

**In low-income countries** such as parts of sub-Saharan Africa and South Asia, many students had no internet access at home. UNESCO estimated that nearly 500 million students worldwide could not access remote learning during school closures.

**In wealthier countries** the divide was still visible. In the United States, the "homework gap" affected an estimated 15-16 million students who lacked adequate internet at home, disproportionately in rural areas and low-income urban neighbourhoods. Some students sat in fast-food car parks to use free Wi-Fi for schoolwork.

**Within Norway**, although internet access is widespread, some families lacked devices (only one computer shared among several children), had slow connections in remote areas, or had parents who could not help with digital platforms.

**The consequences** were measurable: students without reliable access fell behind academically, experienced greater isolation and stress, and in some cases dropped out entirely. The pandemic made the digital divide a visible and urgent issue in education policy worldwide.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-27-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-ex-4',
        number: '27.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Explain the three levels of the digital divide (access, usage, outcome) in your own words. For each level, give one concrete example that a teenager in Norway might understand.',
        hints: [
          'Think about differences within your own school or community, not only between countries',
          'Consider factors like age, income and geography',
        ],
        solution: 'A good answer explains: (1) Access divide — some people lack internet or devices entirely (e.g. a grandparent in a rural area with no broadband), (2) Usage divide — people with access differ in how they use technology (e.g. one student uses YouTube for tutorials while another only watches entertainment), (3) Outcome divide — even regular users benefit unequally (e.g. one teenager builds a portfolio website for university applications while another spends the same hours on social media with no tangible benefit). The key insight is that simply having a phone or computer does not guarantee equal opportunity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-27-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-ex-5',
        number: '27.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which of the following best describes the "digital divide"?',
        options: [
          {
            id: 'a',
            text: 'The difference between analogue and digital technology',
            isCorrect: false,
            feedback: 'Incorrect. The digital divide is not about types of technology but about unequal access to and benefit from technology.',
          },
          {
            id: 'b',
            text: 'The gap between people who have access to and benefit from technology and those who do not',
            isCorrect: true,
            feedback: 'Correct! The digital divide refers to the unequal access to technology and the unequal distribution of its benefits across different groups and regions.',
          },
          {
            id: 'c',
            text: 'The conflict between technology companies and governments',
            isCorrect: false,
            feedback: 'Incorrect. While tech regulation is an important topic, it is not what the digital divide refers to.',
          },
          {
            id: 'd',
            text: 'The split between people who like technology and people who do not',
            isCorrect: false,
            feedback: 'Incorrect. The digital divide is about access and opportunity, not personal preferences.',
          },
        ],
        solution: 'The digital divide is the gap between people who have meaningful access to information and communication technology and those who do not, encompassing differences in access, usage and outcomes.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-27-summary',
      type: 'text',
      title: 'Summary — Technology and Ethics',
      content: `## Summary

**AI and automation** are transforming work, creativity and decision-making. AI systems learn from data, and if that data contains biases, the AI will reproduce them. Key ethical questions include accountability for AI-caused harm, the impact of job displacement on communities, and whether AI-generated content can be considered creative work.

**Digital privacy** is the right to control how your personal information is collected, used and shared. Companies collect active data (what you provide), passive data (your browsing and location) and inferred data (predictions about you). The **privacy paradox** describes the gap between people's stated concern for privacy and their actual online behaviour.

**The digital divide** exists at three levels: access (who has internet and devices), usage (how effectively people use technology) and outcomes (who benefits). Approximately one third of the world's population remains offline. The divide intersects with poverty, geography, gender and age.

**Ethical dilemmas in technology** rarely have simple answers. Analysing them requires identifying stakeholders, considering multiple perspectives, weighing benefits against harms, and making reasoned judgements. Technology itself is neither good nor bad — what matters is how it is designed, regulated and used.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-27-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-ex-6',
        number: '27.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'A city installs AI-powered facial recognition cameras in public spaces to reduce crime. A civil liberties organisation argues the system should be removed. Which of the following is the STRONGEST argument the organisation could make from a privacy perspective?',
        options: [
          {
            id: 'a',
            text: 'Cameras are ugly and ruin the look of the city',
            isCorrect: false,
            feedback: 'Incorrect. While aesthetics may matter to some, this is not a privacy argument.',
          },
          {
            id: 'b',
            text: 'The system creates mass surveillance of innocent citizens, collects biometric data without meaningful consent, and has been shown to misidentify people of colour at higher rates',
            isCorrect: true,
            feedback: 'Correct! This argument combines three strong privacy and ethical concerns: mass surveillance without consent, biometric data collection, and racial bias in the technology. Together, they form a compelling case against the system.',
          },
          {
            id: 'c',
            text: 'The money spent on cameras could be used to hire more police officers',
            isCorrect: false,
            feedback: 'Incorrect. This is a resource-allocation argument, not a privacy argument.',
          },
          {
            id: 'd',
            text: 'Criminals will simply wear hats and sunglasses to avoid detection',
            isCorrect: false,
            feedback: 'Incorrect. This is a practical effectiveness argument, not a privacy argument.',
          },
        ],
        solution: 'The strongest privacy argument combines mass surveillance without consent, biometric data collection and demonstrated racial bias. It addresses the fundamental tension between security and civil liberties.',
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-27-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-ex-7',
        number: '27.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose ONE of the following ethical dilemmas and write an argumentative essay (250-350 words) presenting at least two different perspectives before stating your own reasoned opinion:\n\n(A) Should schools be allowed to use AI tools to monitor students\' online activity during school hours?\n(B) Should social media companies be required to verify the real identity of all users?\n(C) Should governments provide free internet access to all citizens as a basic right?\n\nYour essay should use key terms from this chapter and demonstrate structured argumentation.',
        hints: [
          'Begin by clearly stating the dilemma and why it matters',
          'Present the strongest version of each perspective, not a weak version you can easily dismiss',
          'Use terms like digital privacy, digital divide, surveillance, accountability, consent and data collection where relevant',
        ],
        solution: 'A strong essay clearly states the dilemma, presents at least two perspectives fairly (e.g. for option B: those who argue real-name policies reduce harassment and misinformation vs. those who argue anonymity protects whistleblowers, activists and vulnerable groups), uses vocabulary from the chapter (digital privacy, surveillance, consent, data collection, digital divide), and concludes with a reasoned personal opinion that acknowledges the complexity of the issue. The essay should be well-structured with an introduction, body paragraphs for each perspective, and a conclusion.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'engelsk-10-27-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-ex-8',
        number: '27.8',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which EU regulation gives individuals greater control over how their personal data is collected and used?',
        options: [
          {
            id: 'a',
            text: 'The Digital Divide Act',
            isCorrect: false,
            feedback: 'Incorrect. There is no EU law called the Digital Divide Act. The digital divide is a concept, not a regulation.',
          },
          {
            id: 'b',
            text: 'The General Data Protection Regulation (GDPR)',
            isCorrect: true,
            feedback: 'Correct! The GDPR, which took effect in 2018, gives EU and EEA citizens rights over their personal data, including the right to access, correct and delete their data, and requires companies to obtain clear consent for data collection.',
          },
          {
            id: 'c',
            text: 'The European Privacy Paradox Directive',
            isCorrect: false,
            feedback: 'Incorrect. The privacy paradox is a research concept describing the gap between privacy attitudes and behaviour, not an EU regulation.',
          },
          {
            id: 'd',
            text: 'The Artificial Intelligence Ethics Convention',
            isCorrect: false,
            feedback: 'Incorrect. While the EU has developed an AI Act, the regulation specifically about personal data protection is the GDPR.',
          },
        ],
        solution: 'The General Data Protection Regulation (GDPR) is the EU regulation that gives individuals greater control over their personal data. It applies to all EU and EEA countries, including Norway.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Artificial intelligence (AI)', definition: 'Computer systems designed to perform tasks that normally require human intelligence, such as understanding language, recognising images and making decisions.' },
    { term: 'Machine learning', definition: 'A type of AI where systems improve by analysing large amounts of data rather than being explicitly programmed.' },
    { term: 'Automation', definition: 'The use of technology to perform tasks with minimal human involvement.' },
    { term: 'Algorithm', definition: 'A set of step-by-step instructions that a computer follows to solve a problem or make a decision.' },
    { term: 'Generative AI', definition: 'AI systems that can create new content such as text, images, music or code based on patterns learned from data.' },
    { term: 'Bias (in AI)', definition: 'When an AI system produces unfair results because the data it was trained on contains existing prejudices or imbalances.' },
    { term: 'Digital privacy', definition: 'The right of individuals to control how their personal information is collected, stored, used and shared online.' },
    { term: 'Cookies', definition: 'Small files stored on your device that track your activity across websites.' },
    { term: 'GDPR', definition: 'The General Data Protection Regulation, an EU law giving individuals greater control over their personal data.' },
    { term: 'Surveillance capitalism', definition: 'A business model based on collecting and monetising personal data, as described by Shoshana Zuboff.' },
    { term: 'Privacy paradox', definition: 'The gap between people\'s stated concern for privacy and their actual online behaviour.' },
    { term: 'Digital divide', definition: 'The gap between people who have access to and benefit from modern technology and those who do not.' },
  ],
};

// ============================================================================
// KAPITTEL 28: Migration and Multiculturalism
// ============================================================================

export const CHAPTER_ENGELSK_10_28: TextbookChapter = {
  id: 'engelsk-10-28',
  courseId: 'engelsk-10',
  chapterNumber: '28',
  title: 'Migration and Multiculturalism',
  description: 'Examine global migration patterns, the experiences of migrants, cultural integration and the multiculturalism debate, with multiple perspectives presented in a balanced and respectful way.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'utforske og reflektere over situasjonen til urfolk og nasjonale minoriteter i engelskspråklige land og i Norge',
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-28-intro',
      type: 'text',
      content: `## Migration and Multiculturalism

Throughout human history, people have moved. They have crossed mountains, oceans and borders in search of safety, opportunity, freedom or simply a better life. Migration is one of the forces that has shaped — and continues to shape — every society on Earth.

Today, approximately 281 million people live outside their country of birth, according to the United Nations. Some are refugees fleeing war or persecution. Others are economic migrants seeking work. Some are students, some are reuniting with family, and some are simply adventurers.

The countries and communities that receive migrants face important questions: How should newcomers be welcomed? How can different cultures live together? What should integration look like? These questions are debated in every democracy, and people of good will hold different views.

In this chapter, you will learn:

1. Key concepts and vocabulary for discussing **global migration patterns**
2. How **cultural integration** works — and the different models societies use
3. **Personal stories** that illustrate the human experience of migration
4. The **multiculturalism debate** — different perspectives presented fairly

This is a topic where respectful language, careful listening and the willingness to consider views different from your own are essential.`,
    },

    // ========== DEFINISJON 1: GLOBAL MIGRATION PATTERNS ==========
    {
      id: 'engelsk-10-28-def-1',
      type: 'definition',
      title: 'Global Migration Patterns',
      content: `**Migration** is the movement of people from one place to another, usually across a political boundary, to settle temporarily or permanently in a new location.

**Key types of migration:**

**Voluntary migration** — People choose to move, usually for economic opportunity, education, family reunification or personal reasons.

**Forced migration** — People are compelled to leave their homes due to conflict, persecution, natural disasters or other threats to their safety. Refugees and asylum seekers fall into this category.

**Internal migration** — Movement within a country, such as from rural areas to cities (urbanisation).

**International migration** — Movement across national borders.

**Key terms:**

- **Immigrant** — A person who moves to a new country to live there
- **Emigrant** — A person who leaves their home country (the same person viewed from the country of origin)
- **Refugee** — A person who has been forced to flee their country due to war, persecution or natural disaster, and who meets the criteria of the 1951 Refugee Convention
- **Asylum seeker** — A person who has applied for protection as a refugee but whose claim has not yet been decided
- **Diaspora** — A community of people who live outside their original homeland but maintain connections to it
- **Brain drain** — The emigration of highly educated people from a country, reducing that country's skills base

**Push and pull factors:**
- **Push factors** drive people away from their home: war, poverty, political oppression, natural disasters, lack of opportunity.
- **Pull factors** attract people to a destination: safety, jobs, education, family connections, freedom, higher standard of living.

Most migration decisions involve a combination of push and pull factors.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-28-example-1',
      type: 'example',
      title: 'Example: Push and pull factors in migration',
      problem: `Read the following short profile and identify the push and pull factors in this person's migration story.

*"My name is Amina. I grew up in Aleppo, Syria. When the civil war began in 2011, our neighbourhood was bombed and my school was destroyed. My family fled to Turkey in 2013, where we lived in a refugee camp for two years. In 2015, we were resettled in Canada through the UN refugee programme. My parents chose Canada because my uncle was already living in Toronto, and the Canadian government offered language classes and job training. Today I study medicine at the University of Toronto. I miss Syria every day, but I am grateful for the safety and opportunities we have found."*`,
      solution: `**Push factors (driving Amina's family away from Syria):**
- Civil war and military conflict (bombing of their neighbourhood)
- Destruction of infrastructure (school destroyed)
- Physical danger and threat to safety

**Pull factors (attracting the family to Canada):**
- Safety and political stability
- Family connection (uncle already in Toronto)
- Government support (language classes, job training)
- Educational opportunities (Amina now studies medicine)
- UN resettlement programme providing a legal pathway

**Note:** The intermediate stay in Turkey shows that migration is often a multi-step process. The family first fled to the nearest safe country (Turkey), then was resettled to a more permanent destination (Canada) through an organised programme.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-28-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-ex-1',
        number: '28.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the difference between a refugee and an asylum seeker?',
        options: [
          {
            id: 'a',
            text: 'A refugee has chosen to move for economic reasons, while an asylum seeker has been forced to flee',
            isCorrect: false,
            feedback: 'Incorrect. Both refugees and asylum seekers have typically been forced to flee. The difference is about their legal status.',
          },
          {
            id: 'b',
            text: 'A refugee has been granted protection, while an asylum seeker has applied for protection but is still waiting for a decision',
            isCorrect: true,
            feedback: 'Correct! A refugee has been recognised as meeting the criteria of the 1951 Refugee Convention and has been granted protection. An asylum seeker has applied for this protection but is still awaiting a decision on their claim.',
          },
          {
            id: 'c',
            text: 'A refugee comes from a war zone, while an asylum seeker comes from a poor country',
            isCorrect: false,
            feedback: 'Incorrect. Both refugees and asylum seekers may come from countries affected by war, persecution or other threats. The distinction is legal, not geographical.',
          },
          {
            id: 'd',
            text: 'There is no difference — the two terms mean the same thing',
            isCorrect: false,
            feedback: 'Incorrect. The terms describe different stages in the legal process. An asylum seeker is waiting for a decision; a refugee has been granted protection.',
          },
        ],
        solution: 'A refugee has been officially recognised as meeting the criteria of the 1951 Refugee Convention and granted protection. An asylum seeker has applied for this protection but is still waiting for their claim to be assessed.',
      },
    },

    // ========== DEFINISJON 2: CULTURAL INTEGRATION ==========
    {
      id: 'engelsk-10-28-def-2',
      type: 'definition',
      title: 'Cultural Integration',
      content: `**Cultural integration** is the process by which newcomers and the host society adapt to each other, creating a shared life while respecting differences.

Societies approach integration in different ways. The main models are:

**1. Assimilation**
Newcomers are expected to adopt the culture, language and values of the host society, largely leaving behind their original cultural practices. France's republican model, which emphasises a common national identity over ethnic or religious identities, is often cited as an example.

*Supporters say:* It creates national unity and a shared identity. Everyone is treated the same.
*Critics say:* It pressures minorities to give up their heritage and can lead to cultural loss.

**2. Multiculturalism**
The state actively recognises, supports and celebrates cultural diversity. Different cultural groups maintain their traditions while participating in shared civic life. Canada and Australia have adopted official multicultural policies.

*Supporters say:* It respects diversity, protects minority rights and enriches society.
*Critics say:* It can lead to parallel communities with little interaction, and may make it harder to build shared values.

**3. Integration (two-way process)**
Both newcomers and the host society are expected to adapt. Newcomers learn the language and civic norms; the host society makes space for cultural diversity. Norway's official integration policy aims for this model.

*Supporters say:* It is realistic and fair, asking effort from both sides.
*Critics say:* In practice, the burden of adaptation often falls more heavily on newcomers.

**Important:** These are simplified models. In reality, most societies use elements of all three, and policies vary by region, time period and political leadership. Reasonable people disagree about which approach works best.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-28-example-2',
      type: 'example',
      title: 'Example: Comparing integration models',
      problem: `Consider the following scenario: A family from Somalia settles in a new country. They speak Somali at home, follow Islamic traditions and want to maintain their cultural identity while also participating fully in their new society. How might each of the three integration models (assimilation, multiculturalism, integration) respond to this family's situation?`,
      solution: `**Assimilation model:**
The family would be expected to learn the national language quickly, send their children to mainstream schools with no special cultural accommodation, and gradually adopt the cultural norms of the host country. Religious practice would be considered a private matter. There would likely be no state support for Somali language maintenance or community organisations.

**Multiculturalism model:**
The state might fund Somali language classes, support cultural community centres, recognise Islamic holidays in some public contexts, and actively celebrate the family's cultural contribution to society. The family would be encouraged to maintain their heritage while also learning the national language and participating in civic life.

**Integration (two-way) model:**
The family would be expected to learn the national language and understand civic norms and laws. At the same time, the host society would be expected to make reasonable accommodations — for example, ensuring that workplaces and schools are welcoming to people from diverse backgrounds. The family could maintain their cultural practices as long as they participate in the shared civic life of the community.

**Key point:** None of these models is inherently right or wrong. Each reflects different values and priorities, and each has both strengths and weaknesses in practice.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-28-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-ex-2',
        number: '28.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norway aims for a "two-way integration" model, where both newcomers and the host society are expected to adapt. In your own words (150-200 words), explain what this means in practice. Give at least one example of what is expected of newcomers and one example of what is expected of Norwegian society.',
        hints: [
          'Think about language, education, work and social participation',
          'Consider what Norwegian institutions do to support integration (e.g. introductory programmes)',
        ],
        solution: 'A good answer explains that two-way integration means newcomers are expected to learn Norwegian, understand Norwegian laws and democratic values, and participate in work or education. Norwegian society, in turn, is expected to provide language training (such as the Introduction Programme), combat discrimination in housing and employment, adapt institutions to serve a diverse population, and create welcoming communities. An example for newcomers might be attending Norwegian language classes and learning about the political system. An example for society might be employers giving fair consideration to applicants with foreign qualifications, or schools creating inclusive environments for students from different backgrounds.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-28-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-ex-3',
        number: '28.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which integration model emphasises that the state should actively recognise, support and celebrate cultural diversity?',
        options: [
          {
            id: 'a',
            text: 'Assimilation',
            isCorrect: false,
            feedback: 'Incorrect. Assimilation expects newcomers to adopt the host culture, not the state to celebrate diversity.',
          },
          {
            id: 'b',
            text: 'Multiculturalism',
            isCorrect: true,
            feedback: 'Correct! Multiculturalism holds that the state should actively recognise, support and celebrate cultural diversity, allowing different groups to maintain their traditions while participating in shared civic life.',
          },
          {
            id: 'c',
            text: 'Two-way integration',
            isCorrect: false,
            feedback: 'Incorrect. Two-way integration asks both sides to adapt, but it does not go as far as multiculturalism in actively celebrating and supporting all cultural traditions.',
          },
          {
            id: 'd',
            text: 'Segregation',
            isCorrect: false,
            feedback: 'Incorrect. Segregation means keeping groups separate, which is the opposite of any positive integration model.',
          },
        ],
        solution: 'Multiculturalism is the model where the state actively recognises, supports and celebrates cultural diversity. Countries like Canada and Australia have adopted official multicultural policies.',
      },
    },

    // ========== DEFINISJON 3: PERSONAL STORIES AND THE MULTICULTURALISM DEBATE ==========
    {
      id: 'engelsk-10-28-def-3',
      type: 'definition',
      title: 'Personal Stories and the Multiculturalism Debate',
      content: `Behind every migration statistic is a human being with a story. Understanding migration requires both the broad patterns (numbers, policies, economics) and the personal experiences (hope, loss, resilience, identity).

**The power of personal stories:**
Personal narratives help us understand what migration feels like — the challenges of learning a new language, the pain of leaving home, the joy of building a new life, the complexity of belonging to two cultures at once. Literature, film and journalism often use personal stories to make abstract issues concrete and emotional.

**The multiculturalism debate:**
Across democratic societies, people hold different views on how much cultural diversity is beneficial and how integration should work. Here are some of the perspectives in this debate, presented fairly:

**Those who strongly support multiculturalism argue:**
- Cultural diversity enriches society through new perspectives, foods, art, languages and ideas
- Minority groups have the right to maintain their cultural identity
- Multicultural societies tend to be more creative and innovative
- Forcing assimilation is a form of cultural violence

**Those who are cautious about multiculturalism argue:**
- Shared values and a common language are necessary for social cohesion
- Too much emphasis on group identity can divide society into separate communities
- Some cultural practices may conflict with the host country's laws or values (e.g. gender equality)
- Integration requires effort from newcomers, not only accommodation from the host society

**Those who hold a middle position argue:**
- Both unity and diversity are important — the challenge is finding the right balance
- A shared civic identity (democratic values, rule of law, human rights) can coexist with cultural diversity
- Integration works best when it is a genuine two-way process
- Context matters: what works in one country may not work in another

**Important:** This is a topic where thoughtful people disagree. In academic and public discussion, it is essential to engage with the strongest versions of all perspectives, not caricatures or straw men.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-28-example-3',
      type: 'example',
      title: 'Example: Analysing a personal migration story',
      problem: `Read the following short personal account and answer the questions below.

*"When we arrived in Bergen, everything was strange — the weather, the language, the silence. In Eritrea, neighbours talked to each other all day long. Here, people walked past without making eye contact. I felt invisible. The hardest part was not the cold or the language — it was the loneliness. But slowly, things changed. My football coach was the first Norwegian who really talked to me. He didn't care where I was from. He cared about how I played. Through the team, I made friends, learned Norwegian faster, and started to feel like Bergen was home too. Today I have two homes — Eritrea in my heart and Norway under my feet."*

(a) What push and pull factors can you identify or infer from this account?
(b) What was the biggest challenge the narrator faced, and how did they overcome it?
(c) How does the final sentence express the complexity of migrant identity?`,
      solution: `**(a)** The push factors are implied: Eritrea has experienced conflict, authoritarian government and mandatory military service (though the text does not state the specific reason for leaving). The pull factor for Norway/Bergen is safety and the opportunity for a new life.

**(b)** The biggest challenge was loneliness and social isolation — feeling "invisible" in a culture where social norms were very different from home. The narrator overcame this through football: the coach and team provided a social bridge, helping them make friends and learn the language through daily interaction rather than only through formal classes.

**(c)** The final sentence — "I have two homes — Eritrea in my heart and Norway under my feet" — expresses the dual identity that many migrants experience. "Eritrea in my heart" represents emotional, cultural and familial roots that remain even after leaving. "Norway under my feet" represents the practical, daily reality of building a life in a new country. The metaphor suggests that both identities are real and that belonging to two places is not a contradiction but a lived experience.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-28-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-ex-4',
        number: '28.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a short personal narrative (150-200 words) from the perspective of a young person who has moved to a new country. You can base it on a real story you know, or create a fictional character. Include at least two challenges the person faces and one moment that helps them feel more at home. Use descriptive language and show (do not just tell) the emotions involved.',
        hints: [
          'Focus on specific, concrete details rather than general statements',
          'Think about senses: what does the new place look, sound, smell and feel like?',
          'A small moment (a kind gesture, a joke understood, a meal shared) can be more powerful than a big event',
        ],
        solution: 'A strong narrative includes specific sensory details (the sound of a new language, the taste of unfamiliar food, the feel of a different climate), shows the emotional experience of displacement (confusion, homesickness, frustration) through concrete scenes rather than abstract statements, and includes a turning point — a moment of connection, understanding or belonging that shifts the narrator\'s experience. The writing should demonstrate empathy and an understanding that migration is a complex, deeply human experience.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-28-summary',
      type: 'text',
      title: 'Summary — Migration and Multiculturalism',
      content: `## Summary

**Global migration** involves approximately 281 million people living outside their country of birth. Migration can be voluntary or forced, internal or international. People move due to push factors (war, poverty, persecution) and pull factors (safety, jobs, education, family). Key terms include immigrant, emigrant, refugee, asylum seeker, diaspora and brain drain.

**Cultural integration** is the process by which newcomers and host societies adapt to each other. The three main models are assimilation (newcomers adopt the host culture), multiculturalism (the state actively supports cultural diversity) and two-way integration (both sides adapt). Norway aims for a two-way integration model. Each approach has supporters and critics.

**Personal stories** are essential for understanding migration beyond statistics. Literature and journalism use individual narratives to make abstract issues concrete. Many migrants experience dual identity — belonging to both their country of origin and their new home.

**The multiculturalism debate** involves people of good will who hold different views. Some emphasise the benefits of diversity; others prioritise social cohesion and shared values; many seek a balanced approach. Engaging with this debate requires respectful language, careful listening and the willingness to consider perspectives different from your own.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-28-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-ex-5',
        number: '28.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following is an example of a "pull factor" in migration?',
        options: [
          {
            id: 'a',
            text: 'A civil war destroying homes and infrastructure',
            isCorrect: false,
            feedback: 'Incorrect. War is a push factor — it drives people away from their home country.',
          },
          {
            id: 'b',
            text: 'Educational opportunities and a higher standard of living in the destination country',
            isCorrect: true,
            feedback: 'Correct! Pull factors are things that attract people to a destination. Educational opportunities and a higher standard of living draw people towards a new country.',
          },
          {
            id: 'c',
            text: 'A severe drought making farming impossible',
            isCorrect: false,
            feedback: 'Incorrect. A drought is a push factor that forces people to leave an area.',
          },
          {
            id: 'd',
            text: 'Political persecution by the government',
            isCorrect: false,
            feedback: 'Incorrect. Political persecution is a push factor that drives people away from their country.',
          },
        ],
        solution: 'Pull factors attract people to a destination. Examples include job opportunities, educational possibilities, safety, family connections and a higher standard of living. Push factors, by contrast, drive people away from their home.',
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-28-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-ex-6',
        number: '28.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'The multiculturalism debate involves different perspectives. Choose TWO of the following statements and, for each one, explain the argument behind it AND present a counter-argument. Write 100-150 words for each statement.\n\n(A) "Cultural diversity makes a society stronger and more creative."\n(B) "A shared language and shared values are essential for a society to function."\n(C) "Expecting newcomers to assimilate completely is a form of cultural violence."\n(D) "Integration is primarily the responsibility of the person who has moved."',
        hints: [
          'Present each argument and counter-argument fairly — do not create a weak version just to knock it down',
          'Use examples from the chapter or from real-world situations you know about',
          'Remember that thoughtful people can disagree on these issues',
        ],
        solution: 'A strong response engages seriously with both sides. For example, for statement A: Supporters point to evidence that diverse teams produce more creative solutions, that immigration brings new foods, art and ideas, and that multicultural cities tend to be dynamic and innovative. A counter-argument might be that diversity alone does not create strength — it requires shared institutions, mutual respect and meaningful interaction to prevent fragmentation. For statement B: Supporters argue that communication and shared civic values (democracy, rule of law) are the glue that holds society together. A counter-argument might be that "shared values" can be used to exclude minorities whose values differ on specific issues, and that multilingualism does not prevent social cohesion. The key is presenting the strongest version of each perspective.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'engelsk-10-28-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-ex-7',
        number: '28.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What does the term "diaspora" mean?',
        options: [
          {
            id: 'a',
            text: 'A government programme to help refugees settle in a new country',
            isCorrect: false,
            feedback: 'Incorrect. That would describe a resettlement programme. A diaspora is a community, not a programme.',
          },
          {
            id: 'b',
            text: 'A community of people who live outside their original homeland but maintain connections to it',
            isCorrect: true,
            feedback: 'Correct! A diaspora is a community of people living outside their homeland who maintain cultural, familial or emotional connections to their country of origin. Examples include the Irish diaspora, the Chinese diaspora and the Somali diaspora.',
          },
          {
            id: 'c',
            text: 'The legal process of applying for citizenship in a new country',
            isCorrect: false,
            feedback: 'Incorrect. That describes naturalisation. A diaspora is a community, not a legal process.',
          },
          {
            id: 'd',
            text: 'A type of forced migration caused by war',
            isCorrect: false,
            feedback: 'Incorrect. While some diasporas were created by forced migration, the term refers to the community itself, not the cause of their movement.',
          },
        ],
        solution: 'A diaspora is a community of people living outside their original homeland who maintain connections — cultural, familial, linguistic or emotional — to their country of origin.',
      },
    },

    // ========== SAMLEOPPGAVE 4 ==========
    {
      id: 'engelsk-10-28-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-ex-8',
        number: '28.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write an essay (250-350 words) on the following question: "Is it possible to belong to two cultures at the same time?" Use ideas from this chapter, including concepts like integration, identity and diaspora. You may also draw on your own experience or the experiences of people you know. Present a thoughtful argument with specific examples.',
        hints: [
          'Consider the personal narrative from the chapter ("Eritrea in my heart, Norway under my feet")',
          'Think about language, food, holidays, values and social norms as aspects of cultural identity',
          'Avoid oversimplifying — belonging to two cultures can be both enriching and challenging',
        ],
        solution: 'A strong essay argues that dual cultural belonging is not only possible but is a lived reality for millions of people worldwide. It might discuss how people navigate between languages (speaking Norwegian at school, Somali at home), celebrate different holidays, eat different foods, and hold values from both cultures. The essay should also acknowledge challenges: feeling "in between" cultures, facing expectations from both communities, or experiencing prejudice. Good examples include diaspora communities, children of mixed-heritage families, and people who have moved between countries. The conclusion should be nuanced — recognising that dual belonging is real, valuable and sometimes difficult, rather than presenting it as either purely positive or purely negative.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Migration', definition: 'The movement of people from one place to another, usually across a political boundary, to settle temporarily or permanently.' },
    { term: 'Immigrant', definition: 'A person who moves to a new country to live there.' },
    { term: 'Emigrant', definition: 'A person who leaves their home country to live in another country.' },
    { term: 'Refugee', definition: 'A person forced to flee their country due to war, persecution or natural disaster, recognised under the 1951 Refugee Convention.' },
    { term: 'Asylum seeker', definition: 'A person who has applied for protection as a refugee but whose claim has not yet been decided.' },
    { term: 'Diaspora', definition: 'A community of people living outside their original homeland who maintain connections to it.' },
    { term: 'Brain drain', definition: 'The emigration of highly educated or skilled people from a country, reducing its human capital.' },
    { term: 'Push factors', definition: 'Conditions that drive people away from their home, such as war, poverty or persecution.' },
    { term: 'Pull factors', definition: 'Conditions that attract people to a destination, such as safety, jobs or education.' },
    { term: 'Assimilation', definition: 'An integration model where newcomers are expected to adopt the culture, language and values of the host society.' },
    { term: 'Multiculturalism', definition: 'An integration model where the state actively recognises, supports and celebrates cultural diversity.' },
    { term: 'Integration', definition: 'A two-way process where both newcomers and the host society adapt to each other.' },
  ],
};

// ============================================================================
// EKSPORT: Samlet array for del 7
// ============================================================================

export const ENGELSK_10_DEL7_CHAPTERS = [
  CHAPTER_ENGELSK_10_23,
  CHAPTER_ENGELSK_10_24,
  CHAPTER_ENGELSK_10_25,
  CHAPTER_ENGELSK_10_26,
  CHAPTER_ENGELSK_10_27,
  CHAPTER_ENGELSK_10_28,
];
