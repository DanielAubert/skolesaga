/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 6.1: English in Global Media
// ============================================================================

const CHAPTER_INT_ENGELSK_6_1: TextbookChapter = {
  id: 'int-engelsk-6-1',
  courseId: 'int-engelsk',
  chapterNumber: '6.1',
  title: 'English in Global Media',
  description: 'Examine how English dominates global news media, the concept of media imperialism, and the influence of major English-language news outlets.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analyze the position of English in the world and discuss the role of English-language media in shaping global narratives',
    'reflect on how media in English influences perceptions and knowledge in international contexts',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-6-1-intro',
      type: 'text',
      content: `## English and the Global News Landscape

When a major event occurs anywhere in the world, the first international coverage almost always arrives in English. Whether it is a natural disaster in Southeast Asia, a political crisis in South America, or a scientific breakthrough in Europe, English-language news agencies are typically the first to broadcast the story to a global audience.

This dominance is no accident. It is the product of historical power, economic resources, and technological infrastructure that has placed English at the center of the world's information systems. Organizations like the BBC, CNN, Reuters, and the Associated Press have built vast networks of correspondents, studios, and digital platforms that reach billions of people every day.

But this dominance raises important questions. When the majority of international news is produced in English, by English-speaking organizations, whose perspectives are prioritized? What stories are told, and which ones are left out? In this chapter, we will explore the role of English in global media, the concept of media imperialism, and the power dynamics embedded in how the world receives its news.`,
    },
    // --- DEFINITION 1 ---
    {
      id: 'ie-6-1-def-1',
      type: 'definition',
      title: 'Media Imperialism',
      content: `**Media imperialism** is a theory that describes the way dominant nations, particularly English-speaking Western countries, exert disproportionate influence over global media flows.

**Core Principles:**
- **One-way flow:** Information flows predominantly from the Global North (especially the US and UK) to the Global South
- **Cultural dominance:** The values, norms, and perspectives of media-producing nations are spread worldwide
- **Structural inequality:** Developing nations lack the infrastructure and resources to compete in global media production
- **Language gatekeeping:** English functions as a filter through which global news must pass to reach international audiences

**Key Thinkers:**
- **Herbert Schiller** (1969): Argued that American media corporations were creating a global communication system that served American commercial and political interests
- **Oliver Boyd-Barrett** (1977): Coined the term "media imperialism" to describe the unidirectional flow of media from powerful nations to weaker ones
- **Daya Thussu** (2007): Documented how US-led media globalization shapes news agendas worldwide

**Counter-arguments:**
- Audiences are not passive recipients; they interpret media through local cultural frameworks
- Regional media powerhouses (Al Jazeera, CGTN) are challenging Western dominance
- Digital platforms allow alternative voices to reach global audiences
- Hybridization occurs as global content is adapted locally`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-6-1-example-1',
      type: 'example',
      title: 'BBC vs. Al Jazeera: Comparing Coverage',
      problem: `How might the BBC and Al Jazeera cover the same international event differently? Consider a hypothetical conflict in the Middle East.`,
      solution: `**BBC World Service:**
- Likely frames the story within Western foreign policy concerns
- Uses sources from Western governments and international organizations
- Language tends toward diplomatic neutrality: "tensions," "security concerns"
- Historical context may emphasize post-colonial borders, Western alliances
- Audience assumed to be primarily Western or Western-aligned

**Al Jazeera English:**
- More likely to center voices from the affected region
- May challenge Western narratives and foreign policy assumptions
- Language may be more direct about civilian impact and humanitarian consequences
- Historical context may emphasize colonial legacy, regional autonomy
- Audience includes significant Global South viewership

**What this reveals:**
Both outlets practice professional journalism, but their framing, source selection, and assumed audience shape how the story is told. Neither is "neutral" in an absolute sense. Media literacy requires comparing multiple sources to build a more complete picture.`,
    },
    // --- EXERCISE 1 (Multiple Choice) ---
    {
      id: 'ie-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following best describes the concept of media imperialism?',
        options: [
          { id: 'a', text: 'The idea that all countries produce equal amounts of media content', isCorrect: false },
          { id: 'b', text: 'The dominance of powerful nations over global media flows, spreading their values and perspectives', isCorrect: true },
          { id: 'c', text: 'A theory that suggests media has no influence on culture or society', isCorrect: false },
          { id: 'd', text: 'The practice of translating all global media into English', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Media imperialism describes how dominant nations (especially the US and UK) exert disproportionate influence over global media, creating a one-way flow of information and cultural values from powerful countries to less powerful ones.',
      },
    },
    // --- DEFINITION 2 ---
    {
      id: 'ie-6-1-def-2',
      type: 'definition',
      title: 'Major English-Language News Organizations',
      content: `**Global News Agencies:**

**BBC World Service:**
- Founded: 1932 (as the BBC Empire Service)
- Reach: 489 million people weekly across TV, radio, and digital
- Languages: Broadcasts in over 40 languages, but English remains the flagship
- Funded by the UK government (via licence fee and Foreign Office grant)
- Known for: Perceived impartiality, extensive foreign correspondent network

**CNN International:**
- Founded: 1985 (CNN itself in 1980 by Ted Turner)
- Reach: Available in over 200 countries and territories
- The "CNN effect": The idea that live, 24-hour news coverage can influence government policy
- Known for: Breaking news, live coverage, American perspective on global events

**Reuters:**
- Founded: 1851 by Paul Julius Reuter
- One of the "Big Three" news agencies (alongside AP and AFP)
- Supplies news to thousands of media outlets worldwide
- Known for: Wire service model, speed, financial news

**Associated Press (AP):**
- Founded: 1846, the oldest news agency in the world
- Cooperative owned by American newspapers and broadcasters
- Supplies text, photos, and video to media worldwide
- Known for: Factual reporting, broad coverage

**Agence France-Presse (AFP):**
- Founded: 1835 (as Havas agency)
- Headquartered in Paris, but publishes extensively in English
- The third of the "Big Three" news agencies
- Known for: European perspective, photojournalism`,
    },
    // --- EXAMPLE 2 ---
    {
      id: 'ie-6-1-example-2',
      type: 'example',
      title: 'The CNN Effect in Action',
      content: `**Case Study: The 1992 Somalia Crisis**

In late 1992, CNN broadcast graphic footage of famine and civil war in Somalia. The images of starving children and lawless violence shocked American audiences and created intense public pressure for intervention.

**The sequence:**
1. CNN broadcasts harrowing footage from Mogadishu
2. Public outrage grows as images circulate widely
3. President George H.W. Bush authorizes Operation Restore Hope
4. US Marines land on Somali beaches in December 1992, greeted by CNN cameras

**Analysis:**
- The "CNN effect" suggests that media coverage drove policy, not the other way around
- Critics argue the government was already planning intervention and used CNN coverage to build public support
- The case demonstrates how English-language media can set the global agenda
- It also shows the danger: when cameras left Somalia, so did international attention

**Modern parallels:**
- Social media now amplifies the CNN effect through viral content
- Smartphone footage from conflict zones can reach millions before traditional media reports
- However, "compassion fatigue" may reduce the effect over time`,
    },
    // --- EXERCISE 2 (Classic) ---
    {
      id: 'ie-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-6-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare how a news story is covered by two different English-language news sources.',
        subTasks: [
          { label: 'a', task: 'Choose a current international news story and find coverage from two different English-language outlets (e.g., BBC and CNN, or Reuters and Al Jazeera English).', solution: 'Student selects a specific news story and identifies two distinct sources.' },
          { label: 'b', task: 'Analyze the differences in framing: What headline does each outlet use? What sources are quoted? What aspects of the story are emphasized or downplayed?', solution: 'Student identifies specific differences in headlines, source selection, and emphasis between the two outlets.' },
          { label: 'c', task: 'Reflect on how the English language itself may shape the coverage. Are there culturally loaded terms? Does the choice of vocabulary reveal a particular perspective?', solution: 'Student identifies specific vocabulary choices and explains how they reveal editorial perspective or cultural bias.' },
        ],
        hints: ['Look at the same story on the same day for the most direct comparison', 'Pay attention to what is NOT included as much as what is'],
        solution: 'Comparing coverage reveals how framing, source selection, and vocabulary shape how audiences understand events.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- EXERCISE 3 (Multiple Choice) ---
    {
      id: 'ie-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-6-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'The "CNN effect" refers to:',
        options: [
          { id: 'a', text: 'The tendency of CNN to report news faster than other outlets', isCorrect: false },
          { id: 'b', text: 'The influence of live, 24-hour news coverage on government policy and public opinion', isCorrect: true },
          { id: 'c', text: 'The decline of print media due to cable news competition', isCorrect: false },
          { id: 'd', text: 'The practice of broadcasting news in multiple languages simultaneously', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The "CNN effect" describes how dramatic, real-time television coverage of crises can create public pressure that influences government policy decisions, as seen during the 1992 Somalia intervention.',
      },
    },
    // --- DEFINITION 3 ---
    {
      id: 'ie-6-1-def-3',
      type: 'definition',
      title: 'Language Dominance and News Gatekeeping',
      content: `**Gatekeeping** in media refers to the process by which information is filtered, shaped, and selected before reaching audiences. When English functions as the dominant language of international news, it becomes a powerful gatekeeper.

**How English gatekeeps global news:**
- Stories must be deemed "newsworthy" by English-language editors to reach international audiences
- Local events in non-English-speaking countries may go unreported unless they affect English-speaking nations
- Translation inevitably changes nuance, emphasis, and cultural context
- Sources who speak English are more likely to be quoted in international coverage

**Consequences:**
- **Anglophone bias:** Events in English-speaking countries receive disproportionate coverage
- **Elite focus:** English-speaking elites in non-Anglophone countries become the default sources
- **Narrative simplification:** Complex local situations are reduced to frameworks familiar to English-speaking audiences
- **Terminology power:** English terms frame how issues are understood globally (e.g., "terrorism," "freedom fighter," "developing nation")

**Emerging challenges to English dominance:**
- Rise of regional media powerhouses (Al Jazeera, CGTN, RT, NHK World)
- Multilingual digital platforms and automatic translation tools
- Citizen journalism in local languages reaching global audiences through social media`,
    },
    // --- EXERCISE 4 (Classic) ---
    {
      id: 'ie-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write a short essay (250-350 words) discussing the following question: "Is the dominance of English in global media a force for connection or a form of cultural imperialism?" Use specific examples to support your argument.',
        hints: ['Consider both positive and negative effects', 'Use examples from this chapter and your own media consumption', 'A strong essay acknowledges counter-arguments'],
        solution: 'A strong response considers multiple perspectives: English enables global communication and access to information, but it also marginalizes non-English voices, prioritizes Western perspectives, and can erode local media ecosystems. The best essays acknowledge this tension rather than arguing only one side.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-6-1-summary',
      type: 'text',
      content: `## Summary: English in Global Media

**Key Takeaways:**

**1. Media Imperialism**
English-language media organizations dominate global information flows, creating a largely one-way stream of news and perspectives from powerful Western nations to the rest of the world.

**2. Major Players**
The BBC, CNN, Reuters, AP, and AFP form the backbone of English-language global news. Their framing, source selection, and editorial choices shape how billions of people understand world events.

**3. The CNN Effect**
Live, 24-hour English-language news coverage can influence government policy and public opinion, as demonstrated during the 1992 Somalia crisis and many subsequent events.

**4. Language as Gatekeeper**
English functions as a filter for international news. Stories, perspectives, and voices that do not pass through this English-language filter may never reach global audiences.

**5. Emerging Challenges**
Regional media outlets, digital platforms, and citizen journalism are beginning to challenge English-language dominance, creating a more diverse but also more fragmented global media landscape.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research and present on a non-English-language news organization that broadcasts in English (e.g., Al Jazeera English, CGTN, Deutsche Welle, France 24, NHK World).',
        subTasks: [
          { label: 'a', task: 'What country is the organization based in, and who funds it?', solution: 'Student identifies the country of origin and funding model (state-funded, commercial, public service).' },
          { label: 'b', task: 'How does its English-language coverage differ from its coverage in its primary language?', solution: 'Student identifies specific differences in story selection, framing, or target audience between language editions.' },
          { label: 'c', task: 'What perspectives does this outlet bring that BBC and CNN might not?', solution: 'Student identifies unique regional perspectives, story priorities, or analytical frameworks.' },
        ],
        hints: ['Spend time actually watching or reading the outlet', 'Compare specific stories across outlets'],
        solution: 'Understanding alternative English-language news sources reveals how different perspectives can coexist within the same language, challenging the assumption that English-language media is monolithic.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-6-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Which of the following is an example of English functioning as a gatekeeper in global media?',
        options: [
          { id: 'a', text: 'A Norwegian newspaper publishes an article in Norwegian about local politics', isCorrect: false },
          { id: 'b', text: 'A major protest in Indonesia receives minimal international coverage because no English-speaking correspondents are present', isCorrect: true },
          { id: 'c', text: 'The BBC translates its content into 40 languages', isCorrect: false },
          { id: 'd', text: 'A social media user posts a video in Spanish that goes viral in Latin America', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'When a significant event goes unreported internationally because it did not pass through the English-language media infrastructure, English is functioning as a gatekeeper. The absence of English-speaking correspondents means the story does not reach global audiences, regardless of its importance.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6.2: Music and Popular Culture
// ============================================================================

const CHAPTER_INT_ENGELSK_6_2: TextbookChapter = {
  id: 'int-engelsk-6-2',
  courseId: 'int-engelsk',
  chapterNumber: '6.2',
  title: 'Music and Popular Culture',
  description: 'Explore the role of English in global music, from rock and hip-hop to K-pop, and how popular culture drives cultural globalization.',
  estimatedMinutes: 20,
  competenceGoals: [
    'discuss and reflect on the growth of English as a global language and its role in popular culture',
    'analyze how cultural expressions in English influence identity and values across cultures',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-6-2-intro',
      type: 'text',
      content: `## The Soundtrack of Globalization

Music is perhaps the most powerful vehicle for the global spread of English. Long before streaming platforms connected listeners worldwide, rock and roll, blues, jazz, and pop music carried the English language into homes, dance halls, and concert venues across the globe.

Today, the dominance of English in popular music is striking. The vast majority of the world's best-selling songs are in English. Artists from Sweden (ABBA, Robyn), South Korea (BTS, BLACKPINK), Colombia (Shakira), and Iceland (Bjork) regularly release music in English to reach international audiences. Streaming platforms like Spotify and Apple Music, with their algorithm-driven playlists, further reinforce the position of English-language music.

But this is not simply a story of English replacing other languages. Music also demonstrates the creative ways that artists negotiate between English and their native languages, creating hybrid forms that blend linguistic and cultural traditions. From Reggaeton's Spanish-English flow to K-pop's strategic use of English hooks, popular music reveals the complex interplay between globalization and local identity.`,
    },
    // --- DEFINITION 1 ---
    {
      id: 'ie-6-2-def-1',
      type: 'definition',
      title: 'Cultural Globalization Through Music',
      content: `**Cultural globalization** refers to the transmission of ideas, meanings, and values across national borders, leading to shared cultural experiences worldwide. Music is one of its most effective channels.

**Phases of English-Language Musical Globalization:**

**1. The British Invasion (1960s)**
- The Beatles, The Rolling Stones, and The Who brought British rock to the world
- For the first time, non-American English-language music achieved global dominance
- British accents became associated with creativity and rebellion

**2. American Pop and Rock Dominance (1970s-1990s)**
- Michael Jackson, Madonna, and Whitney Houston became global icons
- MTV (launched 1981) made English-language music visual and ubiquitous
- Hip-hop emerged from African American communities and spread worldwide

**3. The Digital Era (2000s-present)**
- Streaming platforms remove geographic barriers
- YouTube enables instant global distribution
- Social media creates global fan communities
- Non-English artists increasingly use English to access global markets

**Key concept - Cultural Homogenization vs. Hybridization:**
- **Homogenization:** The fear that English-language music will displace local musical traditions, creating a uniform global culture
- **Hybridization:** The reality that global and local cultures blend, creating new, unique cultural forms (e.g., Afrobeats, K-pop, Reggaeton)`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-6-2-example-1',
      type: 'example',
      title: 'K-pop and the Strategic Use of English',
      problem: 'How do K-pop artists use English in their music, and what does this reveal about the role of English in global popular culture?',
      solution: `**English in K-pop:**

K-pop offers a fascinating case study of how non-English-speaking artists strategically use English to achieve global reach while maintaining Korean cultural identity.

**Common strategies:**
- **English hooks and choruses:** Songs like BTS's "Dynamite" or BLACKPINK's "How You Like That" use English in the most memorable, singable parts
- **Code-switching:** Verses alternate between Korean and English within the same song
- **English song titles:** Even songs primarily in Korean often have English titles for international marketing
- **English fan communication:** K-pop groups regularly communicate with international fans in English on social media

**What this reveals:**
1. English functions as a "bridge language" that connects Korean artists with global audiences
2. The use of English is strategic and deliberate, not a replacement for Korean
3. K-pop demonstrates that globalization does not require complete linguistic assimilation
4. The success of partially Korean-language songs challenges the assumption that music must be entirely in English to succeed globally

**The BTS example:**
BTS released their first fully English-language single, "Dynamite," in 2020. It debuted at #1 on the Billboard Hot 100. However, their Korean-language albums also chart globally, suggesting that English opens doors but is not always necessary once an audience is established.`,
    },
    // --- EXERCISE 1 (Multiple Choice) ---
    {
      id: 'ie-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What does "cultural hybridization" mean in the context of global music?',
        options: [
          { id: 'a', text: 'The complete replacement of local music traditions by English-language pop music', isCorrect: false },
          { id: 'b', text: 'The blending of global and local cultural elements to create new, unique musical forms', isCorrect: true },
          { id: 'c', text: 'The practice of performing music only in English regardless of the artist\'s native language', isCorrect: false },
          { id: 'd', text: 'The translation of English-language songs into local languages', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Cultural hybridization describes the creative blending of global influences (often English-language) with local traditions, resulting in entirely new cultural forms. Examples include K-pop, Afrobeats, and Reggaeton, all of which mix English with other languages and blend Western musical styles with local traditions.',
      },
    },
    // --- DEFINITION 2 ---
    {
      id: 'ie-6-2-def-2',
      type: 'definition',
      title: 'Hip-Hop: From Local to Global',
      content: `**Hip-hop** originated in African American and Latino communities in the South Bronx, New York, during the 1970s. It has since become the world's most commercially dominant musical genre, and its spread illustrates how English-language culture travels globally while being adapted locally.

**The Global Spread of Hip-Hop:**
- **1980s:** Hip-hop emerges in New York; early international awareness through breakdancing and graffiti
- **1990s:** Gangsta rap and East Coast/West Coast rivalries dominate; hip-hop becomes America's most exported cultural product
- **2000s:** Local hip-hop scenes emerge worldwide: French rap, German hip-hop, Japanese hip-hop, Grime (UK)
- **2010s-present:** Streaming makes hip-hop the world's most-consumed genre; trap and drill spread globally

**Linguistic Impact:**
- Hip-hop vocabulary enters global English: "diss," "flow," "bars," "spit," "beef," "crew"
- African American Vernacular English (AAVE) becomes globally recognized through hip-hop
- Non-English hip-hop artists often code-switch between English and their native language
- English hip-hop slang is borrowed into other languages worldwide

**Local Adaptations:**
- **France:** French rap is the largest non-English hip-hop market; artists rap in French with English borrowings
- **Nigeria:** Afrobeats blends hip-hop with West African musical traditions and Pidgin English
- **South Korea:** Korean hip-hop has its own distinct scene, separate from but influenced by K-pop
- **Norway:** Norwegian rap artists like Karpe and Hkeem blend Norwegian, English, and other languages`,
    },
    // --- EXERCISE 2 (Classic) ---
    {
      id: 'ie-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-6-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze the use of English in a non-English-language song or album.',
        subTasks: [
          { label: 'a', task: 'Choose a song by a non-English-speaking artist that includes English. Identify every instance of English in the lyrics. What proportion of the song is in English vs. the artist\'s native language?', solution: 'Student identifies a specific song and quantifies the use of English (e.g., chorus in English, verses in Korean, approximately 40% English).' },
          { label: 'b', task: 'Why do you think the artist chose to include English in these specific parts? Consider the function of each English section (hook, bridge, chorus, ad-libs).', solution: 'Student explains strategic choices: English in hooks for catchiness and international appeal, native language in verses for emotional depth or cultural specificity.' },
          { label: 'c', task: 'Does the use of English change the feel or meaning of the song? Would it be different if it were entirely in one language?', solution: 'Student reflects on how code-switching creates particular effects: cosmopolitan feel, broader accessibility, or tension between global and local identity.' },
        ],
        hints: ['K-pop, Reggaeton, Afrobeats, and European pop all offer good examples', 'Look up the lyrics online and highlight all English words and phrases'],
        solution: 'Analyzing English usage in multilingual songs reveals how artists navigate between global accessibility and local authenticity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- EXERCISE 3 (Classic) ---
    {
      id: 'ie-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Discussion task: "Should artists sing in English to reach global audiences, or should they prioritize their native language?"',
        subTasks: [
          { label: 'a', task: 'Write arguments FOR artists using English to reach global audiences (at least three points).', solution: 'Arguments may include: wider audience reach, streaming algorithm advantages, international collaboration opportunities, commercial success, connecting with diaspora communities.' },
          { label: 'b', task: 'Write arguments AGAINST the expectation that artists should use English (at least three points).', solution: 'Arguments may include: cultural authenticity, preserving linguistic diversity, artistic integrity, proving that non-English music can succeed globally (e.g., "Despacito," Squid Game OST), resisting cultural imperialism.' },
        ],
        hints: ['Think about specific examples from your own music listening', 'Consider the artist\'s perspective and the listener\'s perspective separately'],
        solution: 'This debate reveals the tension between commercial pragmatism and cultural preservation that artists worldwide navigate. There is no single correct answer, but strong arguments engage with specific examples.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-6-2-summary',
      type: 'text',
      content: `## Summary: Music and Popular Culture

**Key Takeaways:**

**1. Music as a Vehicle for English**
Popular music has been one of the most effective channels for spreading English globally, from the British Invasion of the 1960s through hip-hop's global dominance today.

**2. Cultural Hybridization**
Rather than simply replacing local traditions, English-language music blends with local cultures to create new hybrid forms like K-pop, Afrobeats, and Reggaeton.

**3. Strategic Language Use**
Non-English-speaking artists strategically use English in hooks, choruses, and titles to access global markets while maintaining cultural identity in their native language.

**4. Hip-Hop's Global Impact**
Hip-hop has become the world's most consumed genre, spreading African American Vernacular English globally while inspiring localized hip-hop scenes in dozens of countries.

**5. The Tension**
Artists worldwide face a choice between English for global reach and native languages for cultural authenticity, though many successfully navigate both.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write an analytical essay (300-400 words): "How has English-language music shaped your own musical tastes and cultural identity?" Reflect on your listening habits, the languages of the music you enjoy, and how global music trends have influenced your preferences.',
        hints: ['Be specific about artists and songs', 'Consider how streaming platforms shape what you discover', 'Think about whether you engage differently with English-language vs. Norwegian-language music'],
        solution: 'A strong response is personal and specific, connecting individual experience to broader patterns of cultural globalization through music. It should demonstrate awareness of how language influences musical consumption and identity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-6-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Which of the following is the best example of cultural hybridization in music?',
        options: [
          { id: 'a', text: 'An American pop song performed entirely in English', isCorrect: false },
          { id: 'b', text: 'A traditional Norwegian folk song performed without any modern influence', isCorrect: false },
          { id: 'c', text: 'A Nigerian Afrobeats track that blends hip-hop production, Yoruba lyrics, and Pidgin English', isCorrect: true },
          { id: 'd', text: 'An English-language cover version of a Japanese song', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Afrobeats is a prime example of cultural hybridization: it blends Western musical production techniques (hip-hop, electronic) with West African rhythms, melodies, and multilingual lyrics (Yoruba, Pidgin English, standard English), creating something entirely new that belongs to no single cultural tradition.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6.3: Film and Television
// ============================================================================

const CHAPTER_INT_ENGELSK_6_3: TextbookChapter = {
  id: 'int-engelsk-6-3',
  courseId: 'int-engelsk',
  chapterNumber: '6.3',
  title: 'Film and Television',
  description: 'Investigate Hollywood\'s global dominance, the impact of streaming platforms, the subtitles vs. dubbing debate, and questions of representation in English-language media.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analyze and discuss various forms of English-language cultural expressions and their global influence',
    'reflect critically on how representation in film and television shapes perceptions of identity and culture',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-6-3-intro',
      type: 'text',
      content: `## Hollywood and the World

For over a century, Hollywood has been the dominant force in global cinema. American films account for the majority of box office revenue in most countries worldwide, and English-language television series dominate global streaming platforms. This cultural influence is so pervasive that many people around the world grow up as familiar with New York, Los Angeles, and small-town America as they are with their own national landscapes.

The rise of streaming platforms like Netflix, Disney+, and HBO Max has accelerated this trend while also complicating it. These platforms distribute English-language content globally while simultaneously investing in local-language productions. The result is a media landscape that is both more dominated by English than ever before and more diverse than it has ever been.

This chapter examines Hollywood's global influence, the economics behind English-language media dominance, the ongoing debate about subtitles versus dubbing, and critical questions about whose stories are being told on screen.`,
    },
    // --- DEFINITION 1 ---
    {
      id: 'ie-6-3-def-1',
      type: 'definition',
      title: 'Hollywood\'s Global Dominance',
      content: `**Hollywood** refers broadly to the American film industry, centered in Los Angeles, California. It has been the world's most commercially successful film industry since the early 20th century.

**Why Hollywood Dominates:**
- **Economic scale:** Hollywood studios have the largest production budgets in the world, often spending $100-300 million on a single film
- **Distribution networks:** American studios control global distribution through major companies (Disney, Warner Bros., Universal, Paramount, Sony)
- **Star system:** Hollywood creates globally recognized stars whose names alone sell tickets worldwide
- **Genre expertise:** Hollywood has perfected high-budget spectacle genres (superhero films, action, sci-fi) that cross cultural boundaries
- **Language advantage:** English is already understood by billions, reducing the barrier to entry

**Box Office Statistics (typical year):**
- In most European countries, American films account for 60-80% of box office revenue
- In some Asian and African markets, this figure is lower due to strong local industries (Bollywood, Nollywood, Chinese cinema)
- The global box office generates $40+ billion annually, with Hollywood claiming the largest share

**Cultural Impact:**
- American cultural values, lifestyles, and social norms are transmitted through film
- Hollywood sets global standards for filmmaking technique, narrative structure, and visual style
- Even non-Hollywood films are often influenced by Hollywood conventions`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-6-3-example-1',
      type: 'example',
      title: 'Streaming Platforms: Global Reach, Local Content',
      problem: 'How are streaming platforms changing the relationship between English-language and local-language content?',
      solution: `**Netflix as Case Study:**

**Global reach:**
- Available in 190+ countries
- Over 230 million subscribers worldwide
- Interface available in dozens of languages

**English-language dominance:**
- The most-watched content globally tends to be English-language (e.g., Stranger Things, Wednesday, Squid Game was an exception)
- English-language content is promoted globally by the algorithm
- American and British series receive the highest production budgets

**Local-language investment:**
- Netflix invests billions in local-language content (Korean, Spanish, German, Hindi, etc.)
- Some local productions achieve global success: Squid Game (Korean), Money Heist (Spanish), Dark (German), Sacred Games (Hindi)
- Subtitles and dubbing make this content accessible to English-speaking audiences

**The paradox:**
Streaming platforms simultaneously reinforce English dominance (through algorithm bias and budget allocation) and challenge it (by giving non-English content global distribution). The success of shows like Squid Game suggests audiences are increasingly willing to consume non-English content, potentially loosening English's grip on global entertainment.`,
    },
    // --- EXERCISE 1 (Multiple Choice) ---
    {
      id: 'ie-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which factor is NOT a major reason for Hollywood\'s global dominance?',
        options: [
          { id: 'a', text: 'Hollywood has the largest production budgets in the world', isCorrect: false },
          { id: 'b', text: 'American studios control major global distribution networks', isCorrect: false },
          { id: 'c', text: 'Hollywood films are always of higher artistic quality than films from other countries', isCorrect: true },
          { id: 'd', text: 'English is already understood by billions of people worldwide', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Hollywood\'s dominance is based on economic scale, distribution infrastructure, star power, and the English language advantage. Artistic quality is subjective, and many critically acclaimed films come from non-Hollywood industries. Commercial success does not equate to artistic superiority.',
      },
    },
    // --- DEFINITION 2 ---
    {
      id: 'ie-6-3-def-2',
      type: 'definition',
      title: 'Subtitles vs. Dubbing: The Translation Debate',
      content: `When English-language content is consumed in non-English-speaking countries (and vice versa), it must be translated. The two primary methods are subtitling and dubbing, and the choice between them carries significant cultural implications.

**Subtitling:**
- Text translation appears at the bottom of the screen
- Preserves original actors' voices, performances, and linguistic nuances
- Requires reading ability and divides viewer attention between text and image
- Dominant in: Scandinavia, the Netherlands, Portugal, Greece, much of Asia

**Dubbing:**
- Dialogue is re-recorded in the target language by voice actors
- Allows full visual engagement without reading
- Loses original vocal performances and may alter meaning through translation
- Dominant in: Germany, France, Italy, Spain, Brazil, much of Latin America

**Cultural Implications:**
- **Subtitling cultures** tend to have higher English proficiency (correlation, not necessarily causation)
- **Dubbing cultures** may be more protective of their national language in media
- Norway, as a subtitling culture, exposes viewers to English from a young age, contributing to high English proficiency
- The choice reflects broader attitudes toward language preservation and foreign cultural influence

**The Streaming Effect:**
Platforms like Netflix offer both options, allowing individual choice. This is blurring the traditional subtitle/dubbing divide and empowering viewers to choose how they engage with foreign-language content.`,
    },
    // --- EXAMPLE 2 ---
    {
      id: 'ie-6-3-example-2',
      type: 'example',
      title: 'Representation in English-Language Media',
      content: `**The Problem of Representation:**

English-language film and television do not merely entertain; they shape how the world understands different peoples, cultures, and identities. When Hollywood is the dominant storyteller, its choices about representation have global consequences.

**Historical Issues:**
- **Whitewashing:** Casting white actors in roles written for or based on people of color (e.g., casting controversies in films like Ghost in the Shell, Aloha)
- **Stereotyping:** Reducing complex cultures to simplistic tropes (e.g., the "exotic" Middle East, "mystical" Asia, "dangerous" Africa)
- **Erasure:** Entire cultures and communities absent from mainstream media
- **The "White Savior" narrative:** Stories about non-Western communities centered on a white protagonist

**Progress and Change:**
- Films like Black Panther (2018) and Crazy Rich Asians (2018) demonstrated global commercial demand for diverse stories
- The success of Parasite (2020, Korean) at the Oscars challenged the English-language monopoly on prestige
- Movements like #OscarsSoWhite have pushed for greater inclusion behind and in front of the camera
- Streaming platforms have created space for more diverse storytelling

**Why This Matters for English Learners:**
When you consume English-language media, you are not just learning language; you are absorbing cultural narratives. Critical awareness of representation helps you engage with this content thoughtfully.`,
    },
    // --- EXERCISE 2 (Classic) ---
    {
      id: 'ie-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-6-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze representation in an English-language film or TV series you have watched recently.',
        subTasks: [
          { label: 'a', task: 'What cultures, identities, or communities are represented? Are they central characters or secondary/background figures?', solution: 'Student identifies specific characters and their roles, noting whether diverse representation is substantive or superficial.' },
          { label: 'b', task: 'Are there any stereotypes or tropes present? If so, describe them and explain why they might be problematic.', solution: 'Student identifies specific stereotypical portrayals and explains their potential harm or oversimplification.' },
          { label: 'c', task: 'How might audiences in different countries interpret this content differently based on their own cultural context?', solution: 'Student considers how cultural background shapes interpretation, recognizing that a global audience does not receive content uniformly.' },
        ],
        hints: ['Choose a film or series you know well', 'Consider both positive and negative aspects of representation', 'Think about who created the content and who it was made for'],
        solution: 'Critical analysis of representation develops media literacy and helps us understand how English-language media shapes global perceptions of identity and culture.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- EXERCISE 3 (Multiple Choice) ---
    {
      id: 'ie-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-6-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Why do Scandinavian countries generally have higher English proficiency than countries like Germany or France?',
        options: [
          { id: 'a', text: 'Scandinavian languages are more closely related to English', isCorrect: false },
          { id: 'b', text: 'Scandinavian countries subtitle English-language media instead of dubbing it, exposing people to spoken English from a young age', isCorrect: true },
          { id: 'c', text: 'Scandinavian countries have longer school days dedicated to English', isCorrect: false },
          { id: 'd', text: 'English is an official language in Scandinavian countries', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'While multiple factors contribute to high English proficiency in Scandinavia (including linguistic similarity and education), the subtitling tradition is widely cited as a significant factor. By hearing English constantly in media while reading native-language subtitles, Scandinavians develop listening comprehension and familiarity with English naturally. Dubbing cultures like Germany and France do not provide this constant exposure.',
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-6-3-summary',
      type: 'text',
      content: `## Summary: Film and Television

**Key Takeaways:**

**1. Hollywood Dominance**
Hollywood controls the global film industry through economic scale, distribution networks, star power, and the English language advantage. American films dominate box offices in most countries worldwide.

**2. Streaming Paradox**
Platforms like Netflix simultaneously reinforce English-language dominance and create opportunities for non-English content to reach global audiences, as demonstrated by the success of shows like Squid Game.

**3. Subtitles vs. Dubbing**
The choice between subtitling and dubbing reflects cultural attitudes toward language and has measurable effects on English proficiency. Norway's subtitling tradition contributes to its high level of English competence.

**4. Representation Matters**
English-language media shapes global perceptions of identity and culture. Historical issues of whitewashing, stereotyping, and erasure are being challenged by movements for greater diversity and inclusion.

**5. Critical Consumption**
As consumers of English-language media, critical awareness of how stories are told, by whom, and about whom is essential for informed global citizenship.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Debate essay (300-400 words): "Should Norway switch from subtitling to dubbing English-language content to protect the Norwegian language?" Argue for or against, using evidence from this chapter.',
        hints: ['Consider the effects on English proficiency, Norwegian language vitality, accessibility, and cultural engagement', 'Address the strongest counter-argument to your position'],
        solution: 'A strong essay takes a clear position while acknowledging the complexity. Arguments for dubbing might emphasize language preservation and accessibility for young children or those with reading difficulties. Arguments for subtitling might emphasize the English proficiency benefits, respect for original performances, and the practical reality of Norwegian as a small language.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Create a viewing diary for one week. Track everything you watch (films, TV series, YouTube, TikTok).',
        subTasks: [
          { label: 'a', task: 'What percentage of the content you watched was in English? What percentage was in Norwegian or another language?', solution: 'Student quantifies their media consumption by language, typically revealing a high proportion of English-language content.' },
          { label: 'b', task: 'Where was the English-language content produced? Was it mostly American, British, or from other English-speaking countries?', solution: 'Student identifies production origins, likely finding American dominance with some British content.' },
          { label: 'c', task: 'Reflect: Does the dominance of English in your media consumption concern you? Why or why not?', solution: 'Student offers a thoughtful personal reflection that connects individual experience to broader questions about cultural globalization.' },
        ],
        hints: ['Be honest about all media, including social media and short-form video', 'Include content you watch casually as well as intentionally'],
        solution: 'Personal media audits reveal how deeply English-language content is embedded in daily life, making abstract concepts about media globalization concrete and personal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6.4: Social Media and Digital Culture
// ============================================================================

const CHAPTER_INT_ENGELSK_6_4: TextbookChapter = {
  id: 'int-engelsk-6-4',
  courseId: 'int-engelsk',
  chapterNumber: '6.4',
  title: 'Social Media and Digital Culture',
  description: 'Examine how English functions as the internet\'s lingua franca, the culture of memes, global youth culture online, and the evolution of digital communication.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analyze and reflect on the role of English in digital communication and social media',
    'discuss how global youth culture is shaped by English-language digital platforms and content',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-6-4-intro',
      type: 'text',
      content: `## English in the Digital Age

The internet was born in English. The first websites, the first emails, the first online forums were all in English. And while the internet has since become a multilingual space, English remains its dominant language. Approximately 60% of the world's websites are in English, despite English speakers making up only around 16% of the global population.

Social media platforms, most of them American-owned, have amplified this dominance. Twitter, Instagram, TikTok, YouTube, and Reddit all originated in English-speaking contexts, and their interfaces, algorithms, and community norms carry English-language assumptions. Even when users post in other languages, they frequently incorporate English words, phrases, and conventions.

For young people around the world, social media has created a shared digital culture that transcends national borders. Memes, trends, slang, and communication styles spread globally at incredible speed, and English is the primary vehicle for this cultural transmission. This chapter explores how English shapes digital culture and how digital culture, in turn, is transforming English itself.`,
    },
    // --- DEFINITION 1 ---
    {
      id: 'ie-6-4-def-1',
      type: 'definition',
      title: 'English as the Internet\'s Lingua Franca',
      content: `**The dominance of English online** can be measured in multiple ways, and each reveals the depth of English's hold on digital space.

**Statistics:**
- ~60% of all websites are in English (W3Techs data)
- English is the most used language on Twitter/X, YouTube, and Reddit
- Most programming languages use English syntax
- The majority of academic and scientific content online is in English
- English dominates Wikipedia: the English edition has over 6.7 million articles, far more than any other language

**Why English Dominates Online:**
- **Historical first-mover advantage:** The internet was developed in the United States; early websites, protocols, and standards were in English
- **Platform origin:** Most major social media platforms (Facebook, Twitter, Instagram, YouTube, TikTok) were created by English-speaking companies
- **Network effects:** As more content exists in English, more people create content in English to reach the largest audience
- **Technical infrastructure:** Domain names, URLs, and many interface elements default to the Latin alphabet and English conventions

**The Digital Divide:**
- Not everyone has equal access to English-language digital spaces
- Non-English speakers may be excluded from global conversations
- AI and machine translation are beginning to bridge this gap but imperfectly
- The dominance of English online may accelerate language shift among younger generations`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-6-4-example-1',
      type: 'example',
      title: 'Memes: English-Language Culture Goes Viral',
      content: `**What Are Memes?**

Memes are units of cultural information that spread through imitation, adaptation, and sharing. In digital culture, memes typically take the form of images, videos, or phrases that are shared and modified across platforms.

**Why Memes Spread in English:**
- Most major meme-generating platforms (Reddit, Twitter, TikTok, 4chan) are English-dominant
- English memes reach the largest potential audience
- Meme formats often rely on English wordplay, cultural references, or catchphrases
- Meme literacy is a form of English-language cultural capital

**Case Study: "Distracted Boyfriend" meme (2017)**
- Original: A stock photo by Antonio Guillem
- Became a template with English text labeling the three figures
- Spread globally with infinite variations
- Adapted into non-English contexts but the format remained recognizable
- Demonstrates how English-language meme templates become universal communication tools

**How Memes Change Language:**
- Memes introduce new vocabulary: "sus," "based," "simp," "no cap," "slay"
- They create shared references across cultures
- Non-English speakers learn and use English meme vocabulary
- Meme language is often informal, ironic, and deliberately unconventional

**Norwegian Youth and English Memes:**
Norwegian young people regularly consume and share English-language memes, incorporating English meme vocabulary into their Norwegian speech. Terms like "cringe," "vibe," "lowkey," and "slay" have become part of Norwegian youth language through meme culture.`,
    },
    // --- EXERCISE 1 (Multiple Choice) ---
    {
      id: 'ie-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Approximately what percentage of websites worldwide are in English?',
        options: [
          { id: 'a', text: 'About 25%', isCorrect: false },
          { id: 'b', text: 'About 40%', isCorrect: false },
          { id: 'c', text: 'About 60%', isCorrect: true },
          { id: 'd', text: 'About 85%', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Approximately 60% of all websites are in English, according to W3Techs data. This is striking because only about 16% of the world\'s population speaks English, illustrating the disproportionate dominance of English in digital spaces.',
      },
    },
    // --- DEFINITION 2 ---
    {
      id: 'ie-6-4-def-2',
      type: 'definition',
      title: 'Global Youth Culture and Digital Communication',
      content: `**Global youth culture** refers to shared values, aesthetics, language, and behaviors among young people worldwide, increasingly shaped by English-language digital platforms.

**Characteristics of Digital Youth Culture:**
- **Platform-native:** Formed within and shaped by social media platforms (TikTok, Instagram, Snapchat, Discord)
- **English-inflected:** Even in non-English-speaking countries, youth culture borrows heavily from English
- **Visually driven:** Memes, short videos, and images are the primary communication forms
- **Trend-based:** Trends spread globally in days or hours, creating shared cultural moments
- **Identity-performative:** Young people construct and perform identity online through content creation

**English Borrowings in Norwegian Youth Language:**
- "Cringe" (embarrassing), "vibe" (atmosphere/feeling), "lowkey" (slightly/quietly)
- "Slay" (do something excellently), "sus" (suspicious), "based" (admirable/authentic)
- "Ghoste" (Norwegian verb form: to ghost someone), "cancle" / "cancele" (to cancel someone)
- "Flex" (to show off), "ratio" (when a reply gets more likes than the original post)

**Communication Styles:**
- **Irony and sarcasm** are central to online youth communication
- **Deliberate misspelling and grammar:** "smol," "heckin," "very much wow" for comedic effect
- **Emoji and reaction culture:** Communication through images, GIFs, and reactions
- **Code-switching:** Fluid movement between English and native language within a single conversation or post`,
    },
    // --- EXAMPLE 2 ---
    {
      id: 'ie-6-4-example-2',
      type: 'example',
      title: 'TikTok: A Case Study in Global Digital Culture',
      content: `**TikTok and the English-Language Ecosystem:**

TikTok, despite being owned by the Chinese company ByteDance, operates primarily in English at the global level. This case study reveals how English functions in platform-based digital culture.

**How English Spreads Through TikTok:**
1. **Trending sounds:** The most viral audio clips are typically in English; non-English-speaking creators lip-sync or dance to English songs
2. **Hashtag culture:** Popular hashtags are overwhelmingly in English (#fyp, #foryou, #pov, #storytime)
3. **Creator vocabulary:** English terms like "duet," "stitch," "POV," "storytime," and "get ready with me" become global format names
4. **Comment culture:** International users often comment in English on popular videos, regardless of the video's language

**The Algorithm Factor:**
- TikTok's algorithm promotes content based on engagement, not language
- However, English-language content typically has a larger potential audience
- Creators who want to go viral globally are incentivized to create in English
- The algorithm can create "filter bubbles" that reinforce English dominance

**Counter-trend:**
- TikTok has also enabled non-English content to reach global audiences
- Creators in their native languages can attract viewers through visual storytelling
- Language-learning content ("How to say X in Korean/Japanese/French") is hugely popular
- Some creators deliberately mix languages, modeling the multilingual reality of global youth culture`,
    },
    // --- EXERCISE 2 (Classic) ---
    {
      id: 'ie-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-6-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Conduct a personal social media language audit.',
        subTasks: [
          { label: 'a', task: 'Look through your last 20 social media posts, stories, or messages. How many contain English words or phrases, even if the rest is in Norwegian? List the English words/phrases you find.', solution: 'Student identifies specific English words and phrases in their own social media use, likely finding significant English integration.' },
          { label: 'b', task: 'Categorize the English you found: Is it meme language, brand names, platform terminology, slang, or something else?', solution: 'Student categorizes findings, recognizing different sources and functions of English in their digital communication.' },
          { label: 'c', task: 'Reflect: Why do you use English in these contexts? Is it a conscious choice, or does it happen automatically?', solution: 'Student reflects on the unconscious nature of much English borrowing and connects personal behavior to broader patterns of English language influence.' },
        ],
        hints: ['Include WhatsApp/Snapchat messages, Instagram stories, TikTok comments, and any other platforms', 'Be thorough; even single English words count'],
        solution: 'A personal language audit reveals how deeply English is embedded in digital communication, even for non-native speakers. Most students discover they use far more English than they consciously realize.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- EXERCISE 3 (Multiple Choice) ---
    {
      id: 'ie-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-6-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Which of the following best explains why English dominates on the internet?',
        options: [
          { id: 'a', text: 'English is the easiest language to type on a keyboard', isCorrect: false },
          { id: 'b', text: 'International law requires websites to be in English', isCorrect: false },
          { id: 'c', text: 'The internet was developed in the US, most major platforms are American, and network effects reinforce English\'s first-mover advantage', isCorrect: true },
          { id: 'd', text: 'Most internet users are native English speakers', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'English dominates online due to historical first-mover advantage (the internet was developed in the US), the American origin of most major platforms, and network effects that encourage content creation in English to reach the largest audience. Importantly, most internet users are NOT native English speakers, making English\'s dominance a structural rather than demographic phenomenon.',
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-6-4-summary',
      type: 'text',
      content: `## Summary: Social Media and Digital Culture

**Key Takeaways:**

**1. English as the Internet's Lingua Franca**
English dominates online spaces due to historical first-mover advantage, American platform ownership, and network effects. Approximately 60% of websites are in English despite English speakers being only 16% of the global population.

**2. Meme Culture**
Memes are a primary vehicle for spreading English-language culture globally. Meme vocabulary enters non-English languages, and meme literacy functions as a form of English-language cultural capital.

**3. Global Youth Culture**
Social media has created a shared global youth culture heavily inflected with English. Norwegian young people routinely use English borrowings like "cringe," "vibe," and "slay" in their daily communication.

**4. Platform Effects**
Social media algorithms tend to amplify English-language content due to audience size, incentivizing creators worldwide to produce in English for maximum reach.

**5. Language Evolution**
Digital culture is transforming English itself through meme language, deliberate misspelling, and new vocabulary, while simultaneously influencing other languages through borrowing and code-switching.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write an opinion piece (300-400 words): "Is the influence of English-language social media on Norwegian youth language something to celebrate or worry about?" Take a clear position and support it with evidence.',
        hints: ['Consider language vitality, communication efficiency, cultural identity, and generational change', 'Engage with the strongest counter-argument to your position', 'Use specific examples from your own experience'],
        solution: 'A strong response takes a clear position while acknowledging complexity. Arguments for celebration might emphasize global connection, multilingual competence, and natural language evolution. Arguments for concern might emphasize language loss, cultural homogenization, and the erosion of Norwegian as a fully functional language in all domains.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-6-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Create a glossary of 15 English words or phrases that have entered Norwegian youth language through digital culture. For each term, provide:',
        subTasks: [
          { label: 'a', task: 'The English term and its original meaning in English', solution: 'Student provides accurate English definitions.' },
          { label: 'b', task: 'How it is used in Norwegian (including any adapted Norwegian spelling or grammar)', solution: 'Student shows how the term has been adapted (e.g., "ghoste" as a Norwegian verb form, "cringe" used as adjective in Norwegian).' },
          { label: 'c', task: 'Where you typically encounter it (which platform, what context)', solution: 'Student connects each term to specific digital platforms and contexts of use.' },
        ],
        hints: ['Think about words you use daily that come from English internet culture', 'Include both widely known terms and niche ones'],
        solution: 'Creating a glossary demonstrates awareness of how English-language digital culture infiltrates daily language use and develops vocabulary analysis skills.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6.5: Media Literacy and Critical Analysis
// ============================================================================

const CHAPTER_INT_ENGELSK_6_5: TextbookChapter = {
  id: 'int-engelsk-6-5',
  courseId: 'int-engelsk',
  chapterNumber: '6.5',
  title: 'Media Literacy and Critical Analysis',
  description: 'Develop skills for analyzing English-language media critically, recognizing bias, evaluating perspective, and navigating misinformation.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analyze and evaluate English-language media texts critically, including identifying bias, perspective, and rhetorical strategies',
    'reflect on the challenges of misinformation in English-language media and develop strategies for critical consumption',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-6-5-intro',
      type: 'text',
      content: `## Thinking Critically About English-Language Media

In a world saturated with English-language media, the ability to analyze, evaluate, and question what you read, watch, and hear is not a luxury but a necessity. Media literacy means understanding that all media is constructed, that every text has a purpose and a perspective, and that your job as a consumer is to think critically rather than accept passively.

This is particularly important with English-language media because of its global reach. A misleading article on a major English-language news site can influence millions of people across dozens of countries within hours. A viral social media post in English can shape public opinion worldwide before fact-checkers even begin their work.

The stakes are high. Misinformation in English spreads farther and faster than in any other language because of the sheer size of the English-language audience. This chapter equips you with the analytical tools to navigate this landscape: how to identify bias, evaluate sources, recognize rhetorical strategies, and distinguish reliable information from manipulation.`,
    },
    // --- DEFINITION 1 ---
    {
      id: 'ie-6-5-def-1',
      type: 'definition',
      title: 'Media Literacy: Core Concepts',
      content: `**Media literacy** is the ability to access, analyze, evaluate, create, and act using all forms of communication. It involves understanding how media messages are constructed and for what purpose.

**Five Key Questions of Media Literacy (Center for Media Literacy):**
1. **Who created this message?** (Authorship)
2. **What creative techniques are used to attract my attention?** (Format)
3. **How might different people understand this message differently?** (Audience)
4. **What values, lifestyles, and points of view are represented or omitted?** (Content)
5. **Why is this message being sent?** (Purpose)

**Types of Bias in Media:**
- **Selection bias:** Which stories are covered and which are ignored
- **Placement bias:** Where stories are positioned (front page vs. buried)
- **Headline bias:** Headlines that frame stories before readers encounter the full text
- **Source bias:** Whose voices are included and whose are excluded
- **Word choice bias:** Language that subtly favors one perspective ("freedom fighter" vs. "terrorist," "protest" vs. "riot")
- **Omission bias:** What information is left out of a story
- **Photo bias:** Which images are chosen to illustrate a story

**Important Distinction:**
- **Bias** is unavoidable; all media reflects some perspective
- **Propaganda** is the deliberate manipulation of information to promote a specific agenda
- The goal is not to find "unbiased" media (which does not exist) but to recognize and account for bias in everything you consume`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-6-5-example-1',
      type: 'example',
      title: 'Identifying Bias Through Word Choice',
      problem: 'Compare these two headlines about the same event and identify the bias in each.',
      solution: `**Headline A:** "Protesters Storm Government Building in Dramatic Day of Action"
**Headline B:** "Rioters Break Into Government Building in Day of Chaos"

**Analysis:**

| Element | Headline A | Headline B |
|---------|-----------|-----------|
| Who | "Protesters" (legitimate) | "Rioters" (criminal) |
| Action | "Storm" (dramatic, purposeful) | "Break Into" (illegal, violent) |
| Framing | "Dramatic Day of Action" (positive, eventful) | "Day of Chaos" (negative, destructive) |
| Implied sympathy | With the people involved | With the authorities/order |

**What this reveals:**
- The same factual event can be described in radically different ways
- Word choice signals editorial perspective before any analysis begins
- Readers who only see one headline form an impression that feels objective but is actually framed
- Media-literate readers recognize these framing choices and seek multiple sources

**Key Takeaway:**
When reading English-language media, always ask: "What words could the author have used instead, and how would that change my understanding?"`,
    },
    // --- EXERCISE 1 (Multiple Choice) ---
    {
      id: 'ie-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following is the best description of media bias?',
        options: [
          { id: 'a', text: 'Media bias only exists in unreliable or dishonest news sources', isCorrect: false },
          { id: 'b', text: 'Media bias is the unavoidable influence of perspective on how stories are selected, framed, and told', isCorrect: true },
          { id: 'c', text: 'Media bias means that news is always intentionally misleading', isCorrect: false },
          { id: 'd', text: 'Media bias can be eliminated by reading only one trusted source', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Bias is inherent in all media because every story requires choices about framing, source selection, word choice, and emphasis. Even the most reputable outlets have perspectives that influence their coverage. The key is not to eliminate bias but to recognize it and consult multiple sources.',
      },
    },
    // --- DEFINITION 2 ---
    {
      id: 'ie-6-5-def-2',
      type: 'definition',
      title: 'Misinformation, Disinformation, and Fake News',
      content: `Understanding the landscape of unreliable information requires precise vocabulary.

**Key Terms:**
- **Misinformation:** False or inaccurate information spread without deliberate intent to deceive (e.g., sharing an outdated statistic believing it to be current)
- **Disinformation:** Deliberately false information created and spread to deceive or manipulate (e.g., state propaganda, coordinated troll campaigns)
- **Malinformation:** True information shared with malicious intent to cause harm (e.g., leaking private information for revenge)
- **Fake news:** A contested term that can mean genuinely fabricated news stories or, problematically, be used to dismiss legitimate journalism

**How Misinformation Spreads in English:**
- English-language misinformation reaches the largest global audience
- Social media algorithms reward engagement, not accuracy
- Confirmation bias leads people to share content that confirms existing beliefs
- Speed of sharing outpaces fact-checking
- Translation of misinformation between languages can add or alter distortions

**Red Flags for Unreliable Sources:**
- Sensational or emotionally manipulative headlines
- Lack of author attribution or publication date
- No links to primary sources or evidence
- Website URL mimics legitimate news outlets but is slightly different
- Content is shared primarily on social media without appearing in established media
- "Too good to be true" or "too outrageous to be true" reactions

**Fact-Checking Resources:**
- Snopes.com, FactCheck.org, PolitiFact, Full Fact (UK), Faktisk.no (Norway)
- Reverse image search (Google Images, TinEye) to verify photo authenticity
- Lateral reading: Open new tabs to check what other sources say about the claim`,
    },
    // --- EXAMPLE 2 ---
    {
      id: 'ie-6-5-example-2',
      type: 'example',
      title: 'Lateral Reading: A Fact-Checking Strategy',
      problem: 'You encounter an article on a website you have never heard of claiming that a major scientific study has been debunked. How do you verify this claim?',
      solution: `**The Lateral Reading Method:**

Instead of spending time analyzing the unknown website itself (vertical reading), professional fact-checkers use lateral reading: they immediately open new browser tabs to check what other sources say.

**Step-by-step:**

**1. Leave the site immediately**
- Do NOT spend time evaluating the site's "About" page, design quality, or stated credentials
- These can be easily faked

**2. Search for the claim**
- Google the specific claim: "study X debunked"
- Look for coverage from established, reputable sources

**3. Search for the source**
- Who is behind this website? Search for the organization and its funders
- Has it been flagged by fact-checking organizations?

**4. Check the original study**
- Can you find the actual study being referenced?
- Does the article accurately represent the study's findings?

**5. Cross-reference**
- Do multiple independent, credible sources confirm the claim?
- If only this one website is making the claim, treat it with extreme skepticism

**Why lateral reading works:**
- It leverages the collective knowledge of the internet
- It is faster than attempting to evaluate an unfamiliar source from scratch
- It mimics how professional fact-checkers actually work (Stanford research by Sam Wineburg confirms this)
- It prevents you from being influenced by the site's design and presentation`,
    },
    // --- EXERCISE 2 (Classic) ---
    {
      id: 'ie-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-6-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze an English-language news article for bias using the Five Key Questions of Media Literacy.',
        subTasks: [
          { label: 'a', task: 'Choose an English-language news article on a controversial topic. Apply all five key questions: Who created it? What techniques attract attention? How might others interpret it? What values are represented or omitted? Why was it sent?', solution: 'Student systematically applies all five questions, identifying the author/organization, attention-grabbing techniques (headline, images, lead), potential for different interpretations, embedded values, and underlying purpose.' },
          { label: 'b', task: 'Identify at least three specific examples of bias in the article (word choice, source selection, framing, omission, etc.).', solution: 'Student identifies specific, concrete examples of bias with clear explanation of how each shapes the reader\'s understanding.' },
          { label: 'c', task: 'Find a second article on the same topic from a different source. How does the coverage differ?', solution: 'Student identifies specific differences in framing, emphasis, and perspective between the two sources.' },
        ],
        hints: ['Choose a genuinely controversial topic where different perspectives exist', 'Be specific: quote exact words and phrases as evidence', 'Remember that identifying bias does not mean the article is wrong; it means it has a perspective'],
        solution: 'Systematic media analysis develops the habit of critical thinking about all media consumption, not just individual articles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 3 ---
    {
      id: 'ie-6-5-def-3',
      type: 'definition',
      title: 'Rhetorical Strategies in English-Language Media',
      content: `**Rhetoric** is the art of persuasion. Understanding rhetorical strategies helps you recognize how English-language media attempts to influence your thinking.

**Aristotle's Three Appeals:**
- **Ethos (credibility):** Establishing the author's authority or trustworthiness. "As a Harvard-trained epidemiologist, I can say..."
- **Pathos (emotion):** Appealing to the audience's feelings. "Imagine a child going to sleep hungry tonight..."
- **Logos (logic):** Using evidence, data, and reasoning. "Studies show that 73% of respondents..."

**Common Rhetorical Strategies in Media:**
- **Loaded language:** Using emotionally charged words to provoke a reaction ("slammed," "destroyed," "radical")
- **False equivalence:** Presenting two unequal positions as equally valid ("Some scientists say the earth is round, others disagree")
- **Bandwagon appeal:** Suggesting everyone agrees ("Most people believe...")
- **Appeal to authority:** Citing experts selectively to support a position
- **Anecdotal evidence:** Using individual stories to imply broader trends
- **Whataboutism:** Deflecting criticism by pointing to another issue ("What about...")
- **Straw man:** Misrepresenting an opposing position to make it easier to attack

**Why This Matters for English Learners:**
- Recognizing rhetorical strategies in English requires understanding not just vocabulary but cultural context
- Some strategies rely on nuances that non-native speakers may miss
- Developing rhetorical awareness in English strengthens critical thinking in all languages`,
    },
    // --- EXERCISE 3 (Multiple Choice) ---
    {
      id: 'ie-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-6-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'What is the difference between misinformation and disinformation?',
        options: [
          { id: 'a', text: 'Misinformation is online and disinformation is in print media', isCorrect: false },
          { id: 'b', text: 'Misinformation is false information spread without intent to deceive, while disinformation is deliberately created to mislead', isCorrect: true },
          { id: 'c', text: 'There is no difference; they are synonyms', isCorrect: false },
          { id: 'd', text: 'Misinformation comes from individuals and disinformation comes from governments', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The key distinction is intent. Misinformation is false information shared by people who believe it to be true (no intent to deceive). Disinformation is deliberately created and spread to mislead or manipulate. Both are harmful, but disinformation involves conscious deception.',
      },
    },
    // --- EXERCISE 4 (Classic) ---
    {
      id: 'ie-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Practice lateral reading. Find a claim on social media or a lesser-known website and fact-check it using the lateral reading method described in this chapter.',
        subTasks: [
          { label: 'a', task: 'What is the specific claim you are checking? Where did you find it?', solution: 'Student identifies a specific, verifiable claim from a specific source.' },
          { label: 'b', task: 'Describe your lateral reading process: What did you search for? What sources did you find? What did they say?', solution: 'Student demonstrates a systematic process of opening multiple tabs, searching for the claim and the source, and cross-referencing.' },
          { label: 'c', task: 'What is your conclusion? Is the claim accurate, misleading, or false? What evidence supports your conclusion?', solution: 'Student reaches a well-supported conclusion based on multiple credible sources.' },
        ],
        hints: ['Choose a claim that is specific and checkable, not a broad opinion', 'Use fact-checking websites as one of your sources', 'Document your process step by step'],
        solution: 'Practicing lateral reading builds the habit of verification, which is the foundation of media literacy in the digital age.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-6-5-summary',
      type: 'text',
      content: `## Summary: Media Literacy and Critical Analysis

**Key Takeaways:**

**1. All Media is Constructed**
Every media text is shaped by choices about what to include, how to frame it, and what language to use. The Five Key Questions of Media Literacy provide a framework for analyzing these choices.

**2. Bias is Unavoidable**
Bias exists in all media through selection, framing, word choice, source selection, and omission. The goal is not to find unbiased media but to recognize and account for bias.

**3. Misinformation vs. Disinformation**
Misinformation is false information shared without intent to deceive. Disinformation is deliberately created to mislead. Both spread faster and farther in English due to the language's global reach.

**4. Lateral Reading**
Professional fact-checkers verify claims by immediately leaving the source and searching for what other credible sources say. This method is faster and more effective than trying to evaluate unfamiliar sources directly.

**5. Rhetorical Awareness**
Understanding persuasive strategies like loaded language, false equivalence, and appeals to emotion helps you resist manipulation in English-language media.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-6-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write an analytical essay (400-500 words): Choose an English-language media text (news article, opinion piece, social media post, or advertisement) and conduct a thorough critical analysis. Your essay should identify the text\'s purpose, audience, and perspective; analyze at least two rhetorical strategies used; identify specific examples of bias; and evaluate the text\'s reliability and effectiveness.',
        hints: ['Use the Five Key Questions as your analytical framework', 'Quote specific language from the text as evidence', 'A strong analysis explains not just what the text does but why and how it does it'],
        solution: 'A thorough critical analysis demonstrates the ability to move beyond surface-level reading to understand how media texts construct meaning, use persuasion, and reflect particular perspectives.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-6-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'A fact-checker uses "lateral reading." What does this mean?',
        options: [
          { id: 'a', text: 'Reading an article from left to right instead of top to bottom', isCorrect: false },
          { id: 'b', text: 'Reading only the headlines of multiple articles', isCorrect: false },
          { id: 'c', text: 'Leaving the original source immediately and opening new tabs to check what other credible sources say about the claim', isCorrect: true },
          { id: 'd', text: 'Reading an article multiple times to find hidden meanings', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Lateral reading means immediately leaving the original source and searching elsewhere to verify claims. Instead of spending time analyzing whether a website looks trustworthy (which can be faked), fact-checkers check what established, credible sources say about the same claim. Research by Sam Wineburg at Stanford has shown this is significantly more effective than vertical reading.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const INT_ENGELSK_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_INT_ENGELSK_6_1,
  CHAPTER_INT_ENGELSK_6_2,
  CHAPTER_INT_ENGELSK_6_3,
  CHAPTER_INT_ENGELSK_6_4,
  CHAPTER_INT_ENGELSK_6_5,
];
