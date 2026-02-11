/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

/**
 * Textbook content for Samfunnsfaglig engelsk (VG2/VG3) - Section 6: Media and Society
 *
 * Chapters 6.1–6.5
 *
 * LK20 competence goals:
 * - discuss the role of media in democratic societies and how media shapes public opinion
 * - analyse and assess how English-language media covers political and social issues
 * - reflect critically on media literacy, source evaluation, and the spread of misinformation
 * - explore ethical dimensions of journalism and freedom of the press across cultures
 */

// ============================================================================
// CHAPTER 6.1: The Role of Media in Democracy
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_6_1: TextbookChapter = {
  id: 'samf-engelsk-6-1',
  courseId: 'samf-engelsk',
  chapterNumber: '6.1',
  title: 'The Role of Media in Democracy',
  description: 'How media functions as the fourth estate and shapes democratic participation. You will learn about the watchdog function, agenda-setting, and the relationship between a free press and an informed citizenry.',
  estimatedMinutes: 22,
  competenceGoals: [
    'discuss the role of media in democratic societies and how media shapes public opinion',
    'analyse and assess how English-language media covers political and social issues',
  ],
  keyTerms: [
    { term: 'Fourth Estate', definition: 'A term referring to the press and its role as an unofficial but essential pillar of democratic society alongside the executive, legislative, and judicial branches' },
    { term: 'Watchdog journalism', definition: 'Investigative reporting that monitors those in power and holds governments, corporations, and institutions accountable to the public' },
    { term: 'Agenda-setting', definition: 'The ability of news media to influence the importance and salience of topics on the public agenda by choosing which stories to cover' },
    { term: 'Public sphere', definition: 'A conceptual space in society where citizens come together to freely discuss and identify societal problems, forming public opinion' },
    { term: 'Media pluralism', definition: 'The diversity of media sources and viewpoints available in a society, considered essential for a well-functioning democracy' },
  ],
  exercises: [],
  content: [
    {
      id: 'se-6-1-intro',
      type: 'text',
      content: `## Media as the Fourth Estate

In democratic societies, the media is often referred to as the **Fourth Estate** -- an unofficial but vital pillar of power alongside the executive, legislative, and judicial branches of government. This metaphor, attributed to the British politician Edmund Burke in the 18th century, captures a fundamental idea: a free and independent press is essential for democracy to function.

But why is media so important? At its core, democracy depends on an **informed citizenry**. Citizens cannot make meaningful choices at the ballot box, engage in public debate, or hold their leaders accountable if they lack access to reliable information. The media bridges the gap between those who govern and those who are governed, translating complex policy decisions into information the public can understand and act upon.

In this chapter, we explore how media shapes democratic participation, the functions it serves, and the challenges it faces in the modern world.`,
    },
    {
      id: 'se-6-1-def-1',
      type: 'definition',
      title: 'The Watchdog Function',
      content: `**Watchdog journalism** refers to the media's role in scrutinising those in power -- governments, corporations, and public institutions -- and exposing wrongdoing, corruption, or abuse.

Key characteristics of the watchdog function:
- **Investigative reporting** that uncovers hidden information in the public interest
- **Accountability**: forcing public figures to answer for their actions
- **Transparency**: making government processes and decisions visible to citizens
- **Independence**: operating free from political or commercial pressure

Famous examples include the *Washington Post*'s Watergate investigation (1972-74), which led to the resignation of US President Richard Nixon, and the *Guardian*'s reporting on mass surveillance by intelligence agencies based on Edward Snowden's revelations (2013).`,
    },
    {
      id: 'se-6-1-example',
      type: 'example',
      title: 'Example: Media Holding Power to Account',
      problem: 'In 2016, the International Consortium of Investigative Journalists (ICIJ) published the Panama Papers, a massive leak of financial documents. How does this case illustrate the watchdog function of media?',
      solution: `**The Panama Papers case demonstrates several key aspects of watchdog journalism:**

1. **Investigation**: Over 370 journalists from 80 countries analysed 11.5 million leaked documents from the Panamanian law firm Mossack Fonseca.

2. **Exposing wrongdoing**: The documents revealed how wealthy individuals, politicians, and corporations used offshore accounts to hide assets and evade taxes.

3. **Accountability**: The revelations led to the resignation of Iceland's Prime Minister, criminal investigations in multiple countries, and billions of dollars in recovered tax revenue.

4. **Cross-border collaboration**: The story showed how modern investigative journalism requires international cooperation to hold global power structures accountable.

This case illustrates that the watchdog function has evolved beyond national boundaries in a globalised world.`,
    },
    {
      id: 'se-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What does the term "Fourth Estate" refer to in the context of democratic societies?',
        options: [
          { id: 'a', text: 'The judicial branch of government', isCorrect: false },
          { id: 'b', text: 'The press and its role as an essential pillar of democracy', isCorrect: true },
          { id: 'c', text: 'The military and its influence on national security policy', isCorrect: false },
          { id: 'd', text: 'The economic sector and its relationship to political power', isCorrect: false },
        ],
        solution: 'The "Fourth Estate" is a term for the press and news media, referring to their role as an unofficial but essential pillar of democratic society. The other three "estates" traditionally refer to the clergy, the nobility, and the commoners, though in modern usage the term is understood in relation to the three branches of government (executive, legislative, judicial). The media serves as a check on these branches by informing the public and holding power to account.',
      },
    },
    {
      id: 'se-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-6-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Which of the following best describes the concept of "agenda-setting" in media studies?',
        options: [
          { id: 'a', text: 'The media tells people exactly what to think about political issues', isCorrect: false },
          { id: 'b', text: 'Politicians set the agenda for what journalists are allowed to report on', isCorrect: false },
          { id: 'c', text: 'The media influences which topics the public considers important by choosing what to cover', isCorrect: true },
          { id: 'd', text: 'Social media algorithms have replaced traditional editorial decision-making', isCorrect: false },
        ],
        solution: 'Agenda-setting theory, first proposed by Maxwell McCombs and Donald Shaw in 1972, holds that the media may not tell people what to think, but it is remarkably successful at telling them what to think about. By choosing which stories to cover, how prominently to feature them, and how often to return to them, news media shapes the public agenda. This does not mean the media controls opinions directly, but rather that it determines which issues receive attention and debate.',
      },
    },
    {
      id: 'se-6-1-def-2',
      type: 'definition',
      title: 'The Public Sphere and Democratic Discourse',
      content: `The concept of the **public sphere** was developed by German philosopher Jurgen Habermas. It describes a space -- both physical and conceptual -- where citizens come together to discuss matters of common concern.

The media plays a central role in the public sphere by:
- **Providing a platform** for debate on political, social, and cultural issues
- **Giving voice** to diverse perspectives and marginalised communities
- **Facilitating deliberation** -- the process of weighing different arguments before forming an opinion
- **Creating shared references** that allow citizens from different backgrounds to participate in a common conversation

Habermas argued that a functioning public sphere requires:
1. Open access for all citizens
2. Rational-critical debate based on evidence and arguments
3. Independence from both state control and commercial interests

In practice, the public sphere has always been imperfect and exclusionary, but the ideal remains a guiding principle for democratic media.`,
    },
    {
      id: 'se-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-6-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain the watchdog function of the media and give two specific examples of investigative journalism that have had significant political consequences. Discuss why this function is considered essential for democracy.',
        hints: [
          'Think about cases where journalism has exposed government corruption or corporate wrongdoing',
          'Consider what might happen in societies where the media cannot freely investigate those in power',
        ],
        solution: 'The watchdog function refers to the media\'s role in monitoring and scrutinising those in power. Investigative journalism seeks to uncover hidden information, expose corruption, and hold public figures accountable. Two significant examples include: (1) The Watergate scandal, where Washington Post reporters Bob Woodward and Carl Bernstein uncovered illegal activities by the Nixon administration, ultimately leading to the president\'s resignation in 1974. (2) The Panama Papers investigation (2016), where an international consortium of journalists revealed how the world\'s wealthy used offshore accounts to hide assets and evade taxes, leading to political resignations and criminal investigations worldwide. This function is essential because without independent scrutiny, those in power can act with impunity. The watchdog function creates deterrence against corruption and ensures transparency, which are cornerstones of democratic governance.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-6-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Habermas described the "public sphere" as essential for democratic discourse. Analyse whether social media platforms like X (Twitter), Facebook, or Reddit fulfil the criteria for a public sphere. Consider both positive aspects and limitations.',
        hints: [
          'Recall Habermas\'s three criteria: open access, rational-critical debate, and independence from state and commercial control',
          'Think about how algorithms, filter bubbles, and commercial interests affect the quality of discourse on these platforms',
        ],
        solution: 'Social media platforms partially fulfil but also significantly undermine the criteria for a public sphere. On the positive side, they provide unprecedented access -- billions of people can participate in discussions regardless of geography or social status. They amplify marginalised voices and enable rapid mobilisation around social issues (e.g., the Arab Spring, #MeToo). However, social media fails key criteria: (1) Open access is limited by the digital divide and platform bans. (2) Rational-critical debate is undermined by algorithms that reward engagement over substance, promote outrage, and create filter bubbles where users mainly encounter views they already agree with. (3) Independence is compromised because these platforms are owned by corporations driven by advertising revenue, meaning commercial interests shape what content users see. Additionally, misinformation spreads rapidly, trolls and bots distort debate, and the brevity of posts discourages nuanced argumentation. In conclusion, social media has democratised access to the public sphere but has not created the conditions for the kind of rational, evidence-based deliberation Habermas envisioned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-1-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- The media is called the **Fourth Estate** because it serves as an essential check on power in democratic societies
- The **watchdog function** involves investigative journalism that holds governments and institutions accountable
- **Agenda-setting** describes how media shapes public priorities by choosing which topics to cover
- The **public sphere** is a conceptual space for democratic deliberation, and media plays a central role in facilitating it
- **Media pluralism** -- the diversity of sources and viewpoints -- is a precondition for healthy democratic discourse

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Fourth Estate | The press as an essential democratic institution |
| Watchdog journalism | Investigative reporting that holds power accountable |
| Agenda-setting | Media's influence on which issues the public considers important |
| Public sphere | Conceptual space for free, rational democratic debate |
| Media pluralism | Diversity of sources and viewpoints in a society |`,
    },
    {
      id: 'se-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-6-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Compare the media landscape in two English-speaking countries (for example, the United States and the United Kingdom). How do differences in media structure, ownership, and regulation affect the media\'s ability to fulfil its democratic functions?',
        hints: [
          'Consider the role of public broadcasters (e.g., the BBC) versus commercially driven media (e.g., US cable news)',
          'Think about how ownership concentration affects media pluralism',
        ],
        solution: 'The US and UK media landscapes differ significantly. The UK has a strong public broadcaster (BBC) funded by a licence fee, designed to be editorially independent and provide impartial news to all citizens. The US has no equivalent institution; PBS has limited reach and funding. US media is predominantly commercial, with major networks and cable channels driven by advertising revenue and ratings. This creates different outcomes for democratic functions: (1) The BBC model promotes media pluralism and access to quality journalism for all, while the US commercial model creates information inequality between those who can afford premium news sources and those who rely on ad-driven, often sensationalised content. (2) UK press regulation through bodies like IPSO provides some accountability, while the US emphasises First Amendment protections with minimal regulation. (3) Ownership concentration is a concern in both countries but manifests differently -- in the US, a few corporations (e.g., Comcast, Disney, News Corp) own vast media empires, while in the UK, press ownership by figures like Rupert Murdoch has raised concerns about political influence. Both systems have strengths and weaknesses, but the key insight is that media structure directly shapes how well the press can serve democratic functions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-6-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'In many democracies, trust in traditional media has declined in recent years. Discuss possible causes of this decline and evaluate what consequences it may have for democratic participation.',
        hints: [
          'Consider factors such as media polarisation, the rise of alternative news sources, and political attacks on the press',
          'Think about how low media trust might affect voter turnout, political polarisation, and susceptibility to misinformation',
        ],
        solution: 'Declining trust in traditional media has multiple causes: (1) Political polarisation -- in countries like the US, media outlets have become associated with particular political positions, leading supporters of the other side to distrust them. (2) The rise of social media has created alternative information channels where unverified claims compete with professional journalism. (3) Political leaders have actively attacked press credibility (e.g., the "fake news" rhetoric). (4) Economic pressures have reduced the quality of journalism as newsrooms cut staff and rely more on clickbait. (5) High-profile failures, such as inaccurate reporting or perceived bias, have eroded public confidence. The consequences for democracy are severe: citizens who distrust all media are more susceptible to conspiracy theories and misinformation. Low media trust correlates with lower political engagement and higher cynicism about democratic institutions. It also undermines the media\'s ability to perform its watchdog function -- if the public does not believe investigative reports, accountability mechanisms break down. Addressing this requires rebuilding trust through transparent, accountable journalism and media literacy education.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// CHAPTER 6.2: Media Literacy and Fake News
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_6_2: TextbookChapter = {
  id: 'samf-engelsk-6-2',
  courseId: 'samf-engelsk',
  chapterNumber: '6.2',
  title: 'Media Literacy and Fake News',
  description: 'How to critically evaluate media sources and recognise misinformation. You will learn about the mechanisms behind fake news, the importance of source criticism, and strategies for navigating the modern information landscape.',
  estimatedMinutes: 24,
  competenceGoals: [
    'reflect critically on media literacy, source evaluation, and the spread of misinformation',
    'analyse and assess how English-language media covers political and social issues',
  ],
  keyTerms: [
    { term: 'Media literacy', definition: 'The ability to access, analyse, evaluate, and create media content in a variety of forms, enabling informed and critical engagement with the information landscape' },
    { term: 'Disinformation', definition: 'False or misleading information that is deliberately created and spread with the intent to deceive, manipulate public opinion, or cause harm' },
    { term: 'Misinformation', definition: 'False or inaccurate information that is shared without the intent to deceive, often spread by individuals who believe it to be true' },
    { term: 'Confirmation bias', definition: 'The tendency to search for, interpret, and remember information in a way that confirms one\'s pre-existing beliefs while ignoring contradicting evidence' },
    { term: 'Source criticism', definition: 'The systematic evaluation of a source\'s reliability, credibility, purpose, and potential biases before accepting its claims as accurate' },
  ],
  exercises: [],
  content: [
    {
      id: 'se-6-2-intro',
      type: 'text',
      content: `## Navigating the Information Landscape

We live in an age of **information abundance**. Every day, millions of news articles, social media posts, videos, and podcasts compete for our attention. While this offers unprecedented access to knowledge, it also creates a fundamental challenge: how do we distinguish reliable information from falsehood?

The term **fake news** entered mainstream vocabulary during the 2016 US presidential election, but the phenomenon of deliberately spreading false information is as old as human communication. What has changed is the **speed and scale** at which misinformation can spread. A false story can travel around the world on social media before fact-checkers have had time to verify the claim.

**Media literacy** -- the ability to critically analyse and evaluate media content -- has become one of the most important skills for citizens in the 21st century. In this chapter, we explore the mechanisms behind misinformation, the tools for evaluating sources, and why media literacy is essential for democratic societies.`,
    },
    {
      id: 'se-6-2-def-1',
      type: 'definition',
      title: 'Disinformation vs. Misinformation',
      content: `It is crucial to distinguish between two related but different concepts:

**Disinformation** is false information that is **deliberately created and spread** with the intent to deceive. Examples include:
- State-sponsored propaganda campaigns designed to destabilise other countries
- Fabricated news articles created for political manipulation
- Doctored images or deepfake videos intended to mislead

**Misinformation** is false information shared **without intent to deceive**. Examples include:
- A person sharing an outdated health claim they genuinely believe to be true
- News outlets making honest errors in reporting that are later corrected
- Rumours that spread during crises before verified information is available

The distinction matters because the responses differ: disinformation requires counter-intelligence and legal measures, while misinformation requires education and media literacy.

A third category, **malinformation**, refers to genuine information that is shared out of context or manipulated to cause harm -- for example, leaking private information to damage someone's reputation.`,
    },
    {
      id: 'se-6-2-example',
      type: 'example',
      title: 'Example: Anatomy of a Fake News Story',
      problem: 'During the COVID-19 pandemic, a widely shared social media post claimed that 5G mobile networks caused the virus. How can we analyse this claim using media literacy skills?',
      solution: `**Step 1 -- Check the source:**
The claim originated from anonymous social media posts and conspiracy theory websites, not from medical or scientific institutions. No credible source was cited.

**Step 2 -- Evaluate the evidence:**
No peer-reviewed scientific study has established a link between 5G technology and viral transmission. Radio waves and biological viruses operate through entirely different mechanisms. COVID-19 spread in countries without 5G networks.

**Step 3 -- Consider the context:**
The claim emerged during a period of fear and uncertainty, when people were seeking explanations. Conspiracy theories tend to flourish in such environments because they offer simple explanations for complex events.

**Step 4 -- Identify the bias:**
The claim appealed to pre-existing distrust of technology companies and government institutions. It was amplified by confirmation bias -- people who already distrusted 5G were more likely to share it.

**Step 5 -- Check multiple sources:**
Major scientific institutions (WHO, national health agencies) explicitly debunked the claim. Fact-checking organisations rated it false.

**Conclusion:** This is a clear case of disinformation -- a deliberately fabricated claim that exploited public fear to spread rapidly via social media.`,
    },
    {
      id: 'se-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What is the key difference between disinformation and misinformation?',
        options: [
          { id: 'a', text: 'Disinformation is spread online while misinformation is spread through traditional media', isCorrect: false },
          { id: 'b', text: 'Disinformation is deliberately created to deceive, while misinformation is shared without intent to deceive', isCorrect: true },
          { id: 'c', text: 'Disinformation is always about politics while misinformation covers other topics', isCorrect: false },
          { id: 'd', text: 'Disinformation is illegal while misinformation is protected by free speech laws', isCorrect: false },
        ],
        solution: 'The essential difference lies in intent. Disinformation is deliberately created and spread with the purpose of deceiving or manipulating people. Misinformation, on the other hand, is false or inaccurate information that is shared by people who believe it to be true -- they are not intentionally trying to mislead. This distinction is important because addressing each type requires different strategies: disinformation requires counter-intelligence and platform regulation, while misinformation is best addressed through education and media literacy.',
      },
    },
    {
      id: 'se-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-6-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'What is "confirmation bias" and how does it contribute to the spread of fake news?',
        options: [
          { id: 'a', text: 'It is the tendency to only read news from one source, which limits perspective', isCorrect: false },
          { id: 'b', text: 'It is a journalistic practice of seeking confirmation from multiple sources before publishing', isCorrect: false },
          { id: 'c', text: 'It is the tendency to favour information that confirms existing beliefs while ignoring contradictory evidence', isCorrect: true },
          { id: 'd', text: 'It is a social media algorithm that promotes confirmed and fact-checked content', isCorrect: false },
        ],
        solution: 'Confirmation bias is the cognitive tendency to seek out, interpret, and remember information that aligns with what we already believe, while dismissing or ignoring evidence that contradicts our views. This psychological mechanism is a powerful driver of fake news because people are more likely to share stories that confirm their worldview without critically evaluating them. Social media algorithms reinforce this tendency by showing users content similar to what they have previously engaged with, creating "filter bubbles" that limit exposure to diverse perspectives. Understanding confirmation bias is a fundamental part of media literacy because it helps us recognise our own vulnerabilities to misinformation.',
      },
    },
    {
      id: 'se-6-2-def-2',
      type: 'definition',
      title: 'Source Criticism: The CRAAP Test',
      content: `**Source criticism** is the systematic evaluation of information sources. One widely used framework is the **CRAAP test**, developed by librarians at California State University:

**C -- Currency:** How recent is the information? Is it up to date for your topic?
- When was it published or last updated?
- Are the links functional and the data current?

**R -- Relevance:** Does the information address your research question?
- Does the source cover your topic in sufficient depth?
- Is it aimed at your level (academic, general audience)?

**A -- Authority:** Who created the information? Are they qualified?
- What are the author's credentials and institutional affiliations?
- Is the publisher reputable?

**A -- Accuracy:** Is the information reliable and supported by evidence?
- Are claims supported by data, references, or citations?
- Has the content been peer-reviewed or fact-checked?

**P -- Purpose:** Why was the information created?
- Is the purpose to inform, persuade, sell, or entertain?
- Are there potential biases or conflicts of interest?`,
    },
    {
      id: 'se-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-6-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Find a news article about a current political or social issue from two different English-language sources (for example, one from the BBC and one from Fox News, or one from The Guardian and one from The Daily Mail). Use the CRAAP test to analyse both sources and discuss how coverage of the same event can differ depending on the source.',
        hints: [
          'Pay attention to the headline, the framing of the story, which sources are quoted, and what information is emphasised or omitted',
          'Consider the target audience and editorial stance of each publication',
        ],
        solution: 'A strong analysis would apply all five CRAAP criteria to both articles: Currency -- checking the publication dates and timeliness. Relevance -- assessing how thoroughly each source covers the topic. Authority -- examining the journalists\' qualifications and the publication\'s reputation. Accuracy -- comparing factual claims, checking if both cite verifiable data, and noting any errors. Purpose -- considering the editorial stance and potential biases. The comparison should reveal how editorial choices (framing, language, source selection, emphasis) shape the reader\'s understanding of the same event. For example, a BBC article might present a balanced account citing multiple perspectives, while a more partisan source might emphasise certain aspects that align with its editorial position. The key insight is that no source is perfectly objective, and consuming news from diverse sources is essential for forming a well-rounded understanding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-6-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'In 2018, a study by MIT researchers found that false news stories on Twitter spread six times faster than true stories. Discuss why fake news spreads faster than accurate information and propose at least three concrete measures that could help combat the spread of misinformation.',
        hints: [
          'Consider psychological factors (novelty, emotional reactions) and structural factors (algorithms, lack of gatekeepers)',
          'Think about solutions at different levels: individual, platform, and government',
        ],
        solution: 'False news spreads faster for several reasons: (1) Novelty -- fake stories are often more surprising and unexpected, triggering stronger emotional reactions that encourage sharing. (2) Emotional appeal -- false stories frequently provoke outrage, fear, or excitement, which are powerful motivators for sharing. (3) Simplicity -- fake news often offers simple explanations for complex problems, making it easier to understand and share. (4) Algorithms -- social media platforms reward engagement, and emotionally charged content (including misinformation) generates more clicks and shares. (5) Lack of gatekeepers -- unlike traditional media, social media has no editorial process to verify information before publication. Measures to combat misinformation include: (1) Individual level: teach media literacy in schools so citizens develop critical evaluation skills from an early age. (2) Platform level: require social media companies to implement better content moderation, label unverified content, and adjust algorithms to reduce the amplification of false information. (3) Government level: fund independent fact-checking organisations and public service journalism. Support regulations that require transparency about political advertising and bot activity online. Additional measures include supporting independent journalism, promoting cross-platform collaboration on fact-checking, and investing in research on misinformation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-2-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- **Media literacy** is the ability to critically evaluate media content and is essential for navigating the modern information landscape
- **Disinformation** is deliberately spread to deceive, while **misinformation** is shared without intent to mislead
- **Confirmation bias** makes us vulnerable to fake news by causing us to favour information that aligns with our existing beliefs
- The **CRAAP test** (Currency, Relevance, Authority, Accuracy, Purpose) is a practical tool for evaluating sources
- False news spreads faster than accurate information due to novelty, emotional appeal, and algorithmic amplification

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Media literacy | The ability to critically analyse and evaluate media content |
| Disinformation | False information deliberately spread to deceive |
| Misinformation | False information shared without intent to mislead |
| Confirmation bias | Tendency to favour information confirming existing beliefs |
| CRAAP test | Framework for evaluating source reliability |`,
    },
    {
      id: 'se-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-6-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Some countries, like Finland, have incorporated media literacy into their national school curriculum since primary school. Research Finland\'s approach to media literacy education and argue whether similar programmes should be adopted in Norway and other countries. What are the potential benefits and challenges?',
        hints: [
          'Consider Finland\'s consistent high ranking in media literacy indices and low susceptibility to disinformation',
          'Think about practical challenges such as teacher training, curriculum space, and the rapidly changing media landscape',
        ],
        solution: 'Finland has been a pioneer in media literacy education, integrating it across subjects from primary school onward. The Finnish approach emphasises critical thinking, source evaluation, and understanding how media content is created. Finland consistently ranks at the top of European media literacy indices and has shown greater resilience to disinformation campaigns. Arguments in favour of adopting similar programmes: (1) Building critical thinking skills early creates citizens who are better equipped to navigate the information landscape. (2) Countries with stronger media literacy education show higher resistance to disinformation. (3) Media literacy is a transferable skill that benefits all areas of learning and civic participation. Challenges include: (1) Teacher training -- educators need ongoing professional development to stay current with rapidly evolving media. (2) Curriculum space -- adding media literacy means either creating a new subject or integrating it across existing ones. (3) Political resistance -- media literacy education can be controversial if it is perceived as promoting particular political views. (4) Keeping pace with technology -- the media landscape changes faster than curricula can be updated. Overall, the benefits likely outweigh the challenges, and Norway could adapt the Finnish model to its own educational context.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-6-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Choose a recent example of a viral claim or story that turned out to be false or misleading. Analyse how it spread, why people believed it, and what damage it caused. Then evaluate how effectively fact-checkers and media organisations responded.',
        hints: [
          'You can use fact-checking websites like Snopes, PolitiFact, or Full Fact to find examples',
          'Consider the role of social media platforms, traditional media, and public figures in amplifying the story',
        ],
        solution: 'A strong response would select a specific case (e.g., COVID-19 misinformation, election-related disinformation, or a viral hoax) and analyse it systematically. The analysis should cover: (1) Origin -- where and how the claim first appeared. (2) Spread -- which platforms amplified it and how quickly it reached a mass audience. (3) Believability -- why people found it credible (confirmation bias, emotional appeal, authority of the sharer). (4) Damage -- concrete consequences such as public health risks, political polarisation, or harassment of individuals. (5) Response -- how quickly and effectively fact-checkers debunked the claim, whether social media platforms labelled or removed the content, and whether the correction reached the same audience as the original claim. The evaluation should recognise that corrections often fail to reach everyone who saw the original misinformation (the "continued influence effect") and that the speed of misinformation outpaces the speed of verification.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// CHAPTER 6.3: Social Media and Public Discourse
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_6_3: TextbookChapter = {
  id: 'samf-engelsk-6-3',
  courseId: 'samf-engelsk',
  chapterNumber: '6.3',
  title: 'Social Media and Public Discourse',
  description: 'How social media platforms shape political communication and public debate. You will learn about filter bubbles, echo chambers, online activism, and the tension between free speech and content moderation.',
  estimatedMinutes: 25,
  competenceGoals: [
    'discuss the role of media in democratic societies and how media shapes public opinion',
    'reflect critically on media literacy, source evaluation, and the spread of misinformation',
  ],
  keyTerms: [
    { term: 'Filter bubble', definition: 'A state of intellectual isolation that can result when algorithms selectively present information based on a user\'s past behaviour, limiting exposure to diverse viewpoints' },
    { term: 'Echo chamber', definition: 'An environment in which a person encounters only beliefs and opinions that coincide with their own, reinforcing existing views and reducing exposure to opposing perspectives' },
    { term: 'Slacktivism', definition: 'A pejorative term for low-effort online activism (such as liking, sharing, or signing online petitions) that may give participants a sense of having contributed without creating meaningful change' },
    { term: 'Content moderation', definition: 'The practice of monitoring and applying rules to user-generated content on digital platforms to enforce community standards and legal requirements' },
    { term: 'Digital divide', definition: 'The gap between those who have access to modern information and communication technology and those who do not, often reflecting broader social and economic inequalities' },
  ],
  exercises: [],
  content: [
    {
      id: 'se-6-3-intro',
      type: 'text',
      content: `## The Social Media Revolution

Social media has fundamentally transformed how humans communicate, access information, and participate in public life. Platforms such as Facebook (now Meta), X (formerly Twitter), Instagram, TikTok, and YouTube have become central arenas for political communication, social movements, and public debate.

The numbers are staggering: as of 2024, approximately 4.9 billion people worldwide use social media -- more than 60% of the global population. The average person spends nearly two and a half hours per day on social media platforms. For many, especially younger generations, social media has replaced traditional news sources as the primary channel for information about the world.

This transformation brings both **opportunities and challenges** for democratic discourse. Social media can amplify marginalised voices, facilitate grassroots movements, and hold power accountable in real time. But it can also spread misinformation, fuel polarisation, and create environments where productive dialogue becomes impossible.`,
    },
    {
      id: 'se-6-3-def-1',
      type: 'definition',
      title: 'Filter Bubbles and Echo Chambers',
      content: `Two closely related concepts describe how social media can limit our exposure to diverse perspectives:

**Filter bubbles** are created by **algorithms** -- the mathematical formulas that determine what content appears in your feed. These algorithms track your behaviour (likes, shares, clicks, time spent viewing) and prioritise content similar to what you have engaged with before. The result is a personalised information environment where you are increasingly shown content that aligns with your existing interests and views.

The term was coined by internet activist **Eli Pariser** in his 2011 book *The Filter Bubble*. He argued that algorithmic filtering creates "invisible autopropaganda, indoctrinating us with our own ideas."

**Echo chambers** are social environments where people primarily interact with others who share their views. While filter bubbles are created by technology, echo chambers are partly a social phenomenon -- people naturally gravitate toward like-minded individuals. Social media amplifies this tendency by making it easy to join groups of people who think alike and to block or unfollow those who disagree.

Together, filter bubbles and echo chambers can:
- Reinforce existing beliefs and reduce exposure to challenging perspectives
- Increase political polarisation by creating separate information realities
- Make it harder for citizens to find common ground on important issues`,
    },
    {
      id: 'se-6-3-example',
      type: 'example',
      title: 'Example: Social Media and the Arab Spring',
      problem: 'The Arab Spring (2010-2012) is often cited as a case where social media played a significant role in political mobilisation. How did social media contribute to these uprisings, and what were its limitations?',
      solution: `**The role of social media in the Arab Spring:**

**Mobilisation:** Platforms like Facebook and Twitter enabled protesters to organise rapidly, share information about protest locations and times, and coordinate actions across cities and borders.

**Documentation:** Citizens used smartphones to document police brutality and government repression, sharing videos and images that traditional media outlets then picked up and broadcast to the world.

**International attention:** Social media helped bring global attention to the protests, generating international pressure on authoritarian regimes.

**Circumventing censorship:** When governments blocked traditional media, social media provided alternative channels for information flow.

**Limitations and caveats:**
- Governments also used social media for surveillance, identifying and arresting protesters
- The uprisings had deep social, economic, and political roots that predated social media
- Many protesters did not use social media; word of mouth and traditional networks were also critical
- The outcomes were mixed: while some regimes fell, many countries experienced prolonged instability rather than democratic transition

**Key insight:** Social media was a **tool** that facilitated organisation and communication, not a **cause** of revolution. The underlying grievances and the courage of ordinary citizens were the real driving forces.`,
    },
    {
      id: 'se-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What is the primary mechanism by which "filter bubbles" are created on social media platforms?',
        options: [
          { id: 'a', text: 'Government regulations that restrict which content platforms can display', isCorrect: false },
          { id: 'b', text: 'Users deliberately choosing to only follow accounts they agree with', isCorrect: false },
          { id: 'c', text: 'Algorithms that personalise content based on a user\'s past behaviour and engagement', isCorrect: true },
          { id: 'd', text: 'News organisations selecting which stories to publish on their social media accounts', isCorrect: false },
        ],
        solution: 'Filter bubbles are primarily created by algorithms that track user behaviour -- clicks, likes, shares, time spent viewing content -- and use this data to personalise what appears in each user\'s feed. The goal is to maximise engagement by showing users content they are likely to interact with, which tends to be content that aligns with their existing interests and views. While users also make conscious choices about who to follow (option B), the term "filter bubble" specifically refers to the algorithmic filtering that happens invisibly and automatically. The concept was described by Eli Pariser, who warned that users may not even be aware of how their information environment is being shaped.',
      },
    },
    {
      id: 'se-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-6-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Which of the following is the best description of "slacktivism"?',
        options: [
          { id: 'a', text: 'Using social media to organise large-scale political protests and demonstrations', isCorrect: false },
          { id: 'b', text: 'Low-effort online actions like sharing posts or signing petitions that may substitute for more meaningful engagement', isCorrect: true },
          { id: 'c', text: 'Professional lobbying organisations that use social media to influence politicians', isCorrect: false },
          { id: 'd', text: 'Governments using social media to communicate directly with citizens', isCorrect: false },
        ],
        solution: '"Slacktivism" is a critical term that combines "slacker" and "activism." It describes low-effort online engagement -- such as liking a post, sharing a hashtag, or signing an online petition -- that gives participants a sense of having contributed to a cause without requiring significant commitment of time, effort, or resources. Critics argue that slacktivism can substitute for meaningful political action, creating a false sense of accomplishment. However, defenders point out that even small online actions can raise awareness, signal public opinion to decision-makers, and sometimes serve as a gateway to deeper engagement. The debate about whether online activism is genuine political participation or merely performative remains ongoing.',
      },
    },
    {
      id: 'se-6-3-def-2',
      type: 'definition',
      title: 'Content Moderation and Free Speech',
      content: `**Content moderation** is the practice of monitoring, reviewing, and removing or restricting user-generated content that violates a platform's rules or local laws. This includes:
- Hate speech and incitement to violence
- Misinformation about elections, health, or safety
- Harassment, bullying, and threats
- Illegal content (child exploitation, terrorism)
- Copyright violations

Content moderation raises fundamental questions about **free speech**:

**Arguments for strict moderation:**
- Platforms have a responsibility to prevent harm
- Unmoderated spaces become hostile and drive away users
- Misinformation can have real-world consequences (e.g., vaccine hesitancy, election manipulation)

**Arguments against strict moderation:**
- Private companies should not determine the boundaries of acceptable speech
- Moderation decisions are often inconsistent and opaque
- There is a risk of silencing legitimate dissent or marginalised voices
- Cultural context matters -- what is considered acceptable speech varies across societies

The **Section 230** debate in the United States illustrates this tension. Section 230 of the Communications Decency Act (1996) protects platforms from liability for user-generated content, but there are ongoing calls to reform it to hold platforms more accountable for the content they host and amplify.`,
    },
    {
      id: 'se-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-6-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Discuss the tension between free speech and content moderation on social media platforms. Should platforms like Facebook, X, or TikTok have the right to remove or restrict content they consider harmful? Where should the line be drawn?',
        hints: [
          'Consider different perspectives: civil liberties advocates, public health experts, platform executives, and ordinary users',
          'Think about concrete cases such as the removal of anti-vaccine content, political speech, or satire that some find offensive',
        ],
        solution: 'This is a complex issue with legitimate arguments on both sides. In favour of moderation: platforms have a duty of care to users and society. Unmoderated speech can cause real harm -- misinformation about health issues has contributed to preventable deaths, and hate speech has been linked to real-world violence (e.g., the role of Facebook in Myanmar). Platforms are private companies with Terms of Service, and users agree to these when creating accounts. Against strict moderation: there is a risk of censorship, especially of legitimate political dissent. Moderation decisions are often inconsistent and lack transparency. Who decides what is "harmful" -- and are they qualified to make that judgement? There is a strong tradition of protecting even objectionable speech in democratic societies. A balanced position might argue that platforms should moderate clearly illegal content (incitement to violence, child exploitation) and transparently label disputed claims, but should be cautious about removing political speech or opinions. Greater transparency about moderation processes and decisions, independent oversight, and user appeals mechanisms would help address concerns about arbitrariness.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-6-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Conduct a personal experiment: review your social media feeds (Instagram, TikTok, YouTube, or another platform) and document what types of content appear. To what extent do you observe evidence of filter bubbles or echo chambers in your own online experience? Reflect on how this might affect your understanding of current events.',
        hints: [
          'Look at the diversity (or lack thereof) of political perspectives, news sources, and cultural viewpoints in your feed',
          'Consider whether you have ever deliberately sought out perspectives that differ from your own',
        ],
        solution: 'A thoughtful response would include specific observations about the student\'s own social media experience, for example: "My Instagram Explore page primarily shows content related to my interests, and I rarely see political perspectives that differ from my own." The reflection should demonstrate awareness that algorithms curate personalised information environments that may not represent the full range of views on any issue. Good answers would also discuss the real-world implications -- for instance, that living in a filter bubble can lead to surprise when election results or social trends do not match what one sees online. The student might also propose strategies for breaking out of filter bubbles, such as deliberately following diverse news sources, using platforms with less algorithmic curation, or regularly engaging with content from different perspectives.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-3-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- Social media has become a central arena for political communication and public debate, with both opportunities and risks
- **Filter bubbles** (created by algorithms) and **echo chambers** (created by social dynamics) limit exposure to diverse perspectives
- Social media can be a powerful tool for **political mobilisation** but also for spreading misinformation and increasing polarisation
- **Content moderation** raises difficult questions about the balance between free speech and preventing harm
- The **digital divide** means that the benefits and risks of social media are unevenly distributed

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Filter bubble | Algorithmic isolation limiting diverse viewpoints |
| Echo chamber | Social environment reinforcing existing beliefs |
| Slacktivism | Low-effort online activism with debatable impact |
| Content moderation | Platform rules enforcement for user content |
| Digital divide | Unequal access to digital technology and information |`,
    },
    {
      id: 'se-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-6-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Compare the role of social media in two different political contexts: a democratic country and an authoritarian regime. How do governments in each context respond to social media, and what does this tell us about the relationship between technology and political power?',
        hints: [
          'Consider examples such as the US/UK (democratic) and China/Iran/Russia (authoritarian)',
          'Think about censorship, surveillance, government-sponsored social media campaigns, and platform bans',
        ],
        solution: 'In democratic countries, social media operates relatively freely but is subject to debates about regulation, content moderation, and the responsibilities of tech companies. Governments may regulate through data privacy laws (like GDPR in Europe) and anti-misinformation measures, but generally do not block platforms or censor political speech. Citizens use social media to organise, protest, and hold leaders accountable. In authoritarian regimes, governments exercise much tighter control: China operates behind the "Great Firewall," blocking Western platforms and replacing them with state-monitored alternatives like WeChat and Weibo. Iran and Russia have blocked social media during protests. Authoritarian governments also use social media offensively -- deploying troll farms, spreading state propaganda, and using surveillance technology to monitor and arrest dissidents. This comparison reveals that social media is not inherently democratic or authoritarian; it is a tool whose impact depends on the political context. Technology can both empower citizens and strengthen state control, depending on who controls the infrastructure, regulation, and flow of information.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-6-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Some critics argue that social media has damaged the quality of public discourse by encouraging short, emotional reactions rather than thoughtful, evidence-based debate. Others argue that social media has democratised public discourse by giving voice to people who were previously excluded. Evaluate both positions and present your own reasoned view.',
        hints: [
          'Consider specific examples of both positive and negative contributions of social media to public discourse',
          'Think about what "quality of discourse" means and who gets to define it',
        ],
        solution: 'Both positions have merit. Critics are right that social media incentivises brevity, emotional reactions, and outrage over nuance and evidence. Character limits, engagement-driven algorithms, and the speed of social media conversations work against the kind of deliberative, evidence-based discourse that democracy requires. The "pile-on" culture, online harassment, and the difficulty of conveying tone in text all degrade the quality of exchange. However, advocates are also right that social media has profoundly democratised who gets to participate in public discourse. Before social media, public debate was dominated by a narrow range of voices -- primarily white, male, and privileged. Social media has amplified the perspectives of women, minorities, LGBTQ+ communities, disabled people, and citizens in the Global South who previously had limited access to mass communication. Movements like #MeToo and Black Lives Matter demonstrate this democratising potential. A balanced view might argue that social media has expanded the quantity and diversity of public discourse while degrading some aspects of its quality. The challenge is to design platforms and norms that preserve the democratising benefits while encouraging more thoughtful, evidence-based engagement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// CHAPTER 6.4: Press Freedom and Censorship
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_6_4: TextbookChapter = {
  id: 'samf-engelsk-6-4',
  courseId: 'samf-engelsk',
  chapterNumber: '6.4',
  title: 'Press Freedom and Censorship',
  description: 'The state of press freedom around the world and the many forms censorship takes. You will learn about press freedom indices, threats to journalists, and the ongoing struggle between state power and the free flow of information.',
  estimatedMinutes: 23,
  competenceGoals: [
    'explore ethical dimensions of journalism and freedom of the press across cultures',
    'discuss the role of media in democratic societies and how media shapes public opinion',
  ],
  keyTerms: [
    { term: 'Press freedom', definition: 'The right of journalists and media organisations to gather, publish, and distribute information and opinions without government interference or fear of reprisal' },
    { term: 'Censorship', definition: 'The suppression or restriction of speech, public communication, or other information by a government, institution, or other controlling body' },
    { term: 'Self-censorship', definition: 'When journalists or media organisations voluntarily avoid reporting on certain topics due to fear of reprisal, legal threats, commercial pressure, or social backlash' },
    { term: 'Shield law', definition: 'A law that protects journalists from being compelled to reveal confidential sources or unpublished information in legal proceedings' },
    { term: 'Chilling effect', definition: 'The discouragement of the legitimate exercise of press freedom through threats, lawsuits, surveillance, or intimidation, even when formal censorship does not exist' },
  ],
  exercises: [],
  content: [
    {
      id: 'se-6-4-intro',
      type: 'text',
      content: `## The Fight for a Free Press

**Press freedom** -- the right of journalists to gather, publish, and distribute information without interference -- is widely recognised as a cornerstone of democratic governance. Article 19 of the Universal Declaration of Human Rights (1948) states that everyone has the right to "seek, receive and impart information and ideas through any media and regardless of frontiers."

Yet press freedom faces threats in every region of the world. According to **Reporters Without Borders** (RSF), which publishes an annual World Press Freedom Index, the situation for journalists has deteriorated globally in recent years. In 2023, the index classified the press freedom situation as "very serious" or "difficult" in over 70% of the countries surveyed.

Threats to press freedom take many forms:
- **Physical violence**: journalists killed, imprisoned, or kidnapped
- **Legal harassment**: laws used to prosecute journalists or force them to reveal sources
- **Economic pressure**: advertising boycotts, ownership concentration, and financial threats
- **Digital threats**: surveillance, hacking, and online harassment
- **Self-censorship**: journalists avoiding certain topics out of fear

Understanding these threats -- and the mechanisms that protect against them -- is essential for anyone studying the relationship between media and society.`,
    },
    {
      id: 'se-6-4-def-1',
      type: 'definition',
      title: 'Forms of Censorship',
      content: `**Censorship** refers to the suppression of information, ideas, or artistic expression by those in authority. It exists on a spectrum from overt to subtle:

**Direct censorship (overt):**
- Government bans on specific publications or topics
- Blocking websites and social media platforms
- Imprisoning journalists and closing media outlets
- Pre-publication review requirements

**Indirect censorship (subtle):**
- **Economic pressure**: governments withholding advertising revenue from critical media, or powerful companies threatening to withdraw funding
- **Legal intimidation**: filing lawsuits (SLAPPs -- Strategic Lawsuits Against Public Participation) designed to burden journalists with legal costs and discourage reporting
- **Regulatory capture**: using licensing and broadcasting regulations to favour compliant media
- **Surveillance**: monitoring journalists' communications to identify and intimidate sources

**Self-censorship:**
- Perhaps the most insidious form, self-censorship occurs when journalists voluntarily avoid topics they know will bring trouble
- It is difficult to measure because it involves **stories that are never written**
- Common in countries where the line between acceptable and unacceptable reporting is unclear and the consequences of crossing it are severe`,
    },
    {
      id: 'se-6-4-example',
      type: 'example',
      title: 'Example: Press Freedom Around the World',
      problem: 'The RSF World Press Freedom Index ranks countries from best to worst. How do we see the difference between countries at the top and bottom of the index?',
      solution: `**Countries near the top (e.g., Norway, Denmark, Sweden):**
- Strong legal protections for journalists and their sources
- Editorial independence guaranteed by law and tradition
- Public service broadcasters (NRK, DR, SVT) that are editorially independent of government
- A culture of transparency, with Freedom of Information laws that give citizens and journalists access to government documents
- Media pluralism supported by press subsidies

**Countries near the bottom (e.g., North Korea, Eritrea, Turkmenistan):**
- All media is state-controlled or state-approved
- Independent journalism is effectively illegal
- Journalists face imprisonment, torture, or execution for critical reporting
- Internet access is heavily restricted or completely controlled
- Foreign journalists are denied access or closely monitored

**Countries in the middle (e.g., United States, India, Brazil):**
- Legal protections for press freedom exist but are unevenly applied
- Journalists face harassment, threats, and occasional violence
- Press freedom may be undermined by political polarisation, ownership concentration, or government pressure
- The gap between legal protections and lived reality can be significant

**Key insight:** Press freedom is not binary -- it exists on a spectrum, and even countries with strong traditions of press freedom face ongoing challenges.`,
    },
    {
      id: 'se-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What is a "chilling effect" in the context of press freedom?',
        options: [
          { id: 'a', text: 'A drop in newspaper sales during cold winter months that affects media revenue', isCorrect: false },
          { id: 'b', text: 'The discouragement of legitimate journalism through threats, lawsuits, or intimidation', isCorrect: true },
          { id: 'c', text: 'A government policy of gradually introducing censorship laws over a long period', isCorrect: false },
          { id: 'd', text: 'The emotional response journalists experience when covering traumatic events', isCorrect: false },
        ],
        solution: 'A "chilling effect" occurs when actions by those in power -- such as surveillance, legal threats, imprisonment of journalists, or harassment campaigns -- discourage others from exercising their right to free expression and press freedom. The key point is that the effect extends beyond the immediate target: when one journalist is imprisoned for their reporting, other journalists may choose to avoid similar topics. The effect is particularly harmful because it operates through fear rather than formal censorship, making it harder to identify and challenge. Even in democracies, laws such as overly broad defamation statutes or anti-terrorism legislation can create chilling effects by making journalists uncertain about the legal risks of their reporting.',
      },
    },
    {
      id: 'se-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-6-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Which of the following is an example of indirect or subtle censorship?',
        options: [
          { id: 'a', text: 'A government passing a law that bans all newspapers from publishing', isCorrect: false },
          { id: 'b', text: 'A country blocking access to social media platforms during elections', isCorrect: false },
          { id: 'c', text: 'A powerful corporation filing expensive lawsuits against journalists to discourage further investigation', isCorrect: true },
          { id: 'd', text: 'A dictator ordering the arrest of every journalist in the country', isCorrect: false },
        ],
        solution: 'Expensive lawsuits -- known as SLAPPs (Strategic Lawsuits Against Public Participation) -- are a classic example of indirect censorship. The goal is not necessarily to win the case but to impose such high legal costs and stress on journalists and media organisations that they abandon their investigation or think twice before pursuing similar stories in the future. This creates a "chilling effect" without any formal censorship law. The other options (A, B, D) are examples of direct, overt censorship. Indirect censorship is often harder to identify and combat because it operates within legal and economic systems rather than through outright bans or arrests.',
      },
    },
    {
      id: 'se-6-4-def-2',
      type: 'definition',
      title: 'Protecting Press Freedom: Legal Frameworks',
      content: `Several legal and institutional frameworks exist to protect press freedom:

**International level:**
- **Article 19 of the UDHR** (1948): right to seek, receive, and impart information
- **Article 10 of the European Convention on Human Rights**: freedom of expression, including the right to receive and impart information
- **UNESCO**: promotes press freedom through its International Programme for the Development of Communication

**National level:**
- **First Amendment** (USA): "Congress shall make no law... abridging the freedom of speech, or of the press" -- one of the strongest press freedom protections in the world
- **Article 100 of the Norwegian Constitution**: guarantees freedom of expression and prohibits prior censorship
- **Shield laws**: legal protections for journalists' confidential sources (varies by country)
- **Freedom of Information (FOI) laws**: give citizens and journalists the right to access government documents

**Institutional protections:**
- **Independent press councils** (e.g., the Norwegian Press Council -- PFU) that uphold ethical standards
- **Press subsidies** in some countries (e.g., Norway, Sweden) that support media pluralism
- **Whistleblower protection laws** that encourage the disclosure of wrongdoing
- **International organisations** like RSF, Committee to Protect Journalists (CPJ), and the International Federation of Journalists (IFJ) that monitor and advocate for press freedom`,
    },
    {
      id: 'se-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-6-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Research the case of a journalist who has been imprisoned, killed, or forced into exile for their reporting. Present the case, explain the circumstances, and discuss what it reveals about the state of press freedom in that country or region.',
        hints: [
          'You can research cases such as Jamal Khashoggi (Saudi Arabia), Maria Ressa (Philippines), Evan Gershkovich (Russia), or others',
          'Consider the broader political context and what the case tells us about the relationship between journalism and state power',
        ],
        solution: 'A strong response would present a well-researched case study. For example, the case of Jamal Khashoggi: Khashoggi was a Saudi journalist and Washington Post columnist who was critical of Saudi Crown Prince Mohammed bin Salman\'s policies. In October 2018, he was murdered inside the Saudi consulate in Istanbul by a team of Saudi agents. The case revealed: (1) The extreme lengths authoritarian states will go to silence critical voices, even beyond their borders. (2) The importance of international pressure -- the murder generated worldwide condemnation and diplomatic consequences for Saudi Arabia. (3) The vulnerability of journalists who cover powerful regimes. (4) The limits of press freedom protections when state actors are willing to use violence. The case also sparked debate about the role of Western governments in holding allies accountable for press freedom violations and the responsibility of the international community to protect journalists.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-6-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Norway has consistently ranked at or near the top of the RSF World Press Freedom Index. Analyse what factors contribute to Norway\'s strong press freedom record and discuss whether there are any remaining challenges or areas for improvement.',
        hints: [
          'Consider legal protections (Article 100 of the Constitution), institutional factors (the Norwegian Press Council), and cultural factors',
          'Think about whether press subsidies, media ownership patterns, or recent developments pose any challenges',
        ],
        solution: 'Norway\'s strong press freedom record is built on multiple pillars: (1) Constitutional protection -- Article 100 of the Norwegian Constitution guarantees freedom of expression and was strengthened in 2004. (2) Strong FOI laws -- the Freedom of Information Act (offentleglova) gives citizens and journalists broad access to public documents. (3) Source protection -- Norwegian law provides strong protections for journalists\' confidential sources. (4) Independent public broadcaster -- NRK is editorially independent of government control. (5) Press subsidies -- the government provides financial support to maintain media pluralism. (6) Self-regulation -- the Norwegian Press Council (PFU) and the Code of Ethics (Vær Varsom-plakaten) maintain high professional standards. (7) Culture of transparency -- a strong democratic tradition supports open government. Remaining challenges include: media ownership concentration (Schibsted and other groups control significant market share), the economic pressures facing local journalism, the challenge of maintaining press freedom in the digital age, and questions about the adequacy of protections for whistleblowers. While Norway\'s record is admirable, press freedom is never permanently secured and requires ongoing vigilance.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-4-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- **Press freedom** is a fundamental right recognised by international law and essential for democratic governance
- **Censorship** ranges from overt (bans, imprisonment) to subtle (economic pressure, legal intimidation, surveillance)
- **Self-censorship** is the most insidious form because it involves stories that are never written
- Legal frameworks at international and national levels protect press freedom, but implementation varies dramatically
- Even countries with strong press freedom traditions face challenges from ownership concentration, economic pressures, and digital threats

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Press freedom | The right to gather and publish information without interference |
| Censorship | Suppression of information by those in authority |
| Self-censorship | Voluntary avoidance of topics due to fear of consequences |
| Shield law | Legal protection for journalists' confidential sources |
| Chilling effect | Discouragement of journalism through threats or intimidation |`,
    },
    {
      id: 'se-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-6-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'The First Amendment to the US Constitution provides some of the strongest press freedom protections in the world. However, the US ranks lower on the RSF Press Freedom Index than many European countries. Research possible explanations for this apparent contradiction and discuss whether legal protections alone are sufficient to guarantee press freedom in practice.',
        hints: [
          'Consider factors beyond legal protections, such as media polarisation, economic pressures, safety of journalists, and the relationship between the press and political leaders',
          'Think about the difference between formal legal rights and the practical conditions under which journalists work',
        ],
        solution: 'The apparent contradiction between the First Amendment\'s strong protections and the US\'s relatively lower press freedom ranking highlights that legal protections, while necessary, are not sufficient. Several factors contribute to the gap: (1) Political polarisation and attacks on the press -- political leaders (most notably Donald Trump) have labelled the press "the enemy of the people," normalising hostility toward journalists. (2) Physical threats -- journalists covering protests, particularly during the Black Lives Matter protests in 2020, were arrested, tear-gassed, or physically attacked by police. (3) Lack of a federal shield law -- unlike many states, there is no federal law protecting journalists from being compelled to reveal sources. (4) Legal harassment -- government agencies have used the Espionage Act to prosecute those who share classified information with journalists. (5) Ownership concentration -- media is dominated by a few large corporations, limiting editorial independence. (6) Economic decline of local journalism -- thousands of local newspapers have closed, creating "news deserts" where communities lack local reporting. The key insight is that press freedom depends not just on legal text but on the broader political culture, economic conditions, and institutional support that enable journalists to do their work safely and effectively.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-6-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Imagine you are advising a newly democratising country on establishing press freedom protections. Based on what you have learned, propose a comprehensive framework that includes legal protections, institutional mechanisms, and cultural initiatives to create a healthy media environment.',
        hints: [
          'Draw on examples from countries with strong press freedom records, such as the Nordic countries',
          'Consider what protections are needed at the constitutional, legislative, and institutional levels',
        ],
        solution: 'A comprehensive framework should include: Legal protections: (1) Constitutional guarantee of freedom of expression and prohibition of prior censorship. (2) Strong Freedom of Information law giving citizens access to government documents. (3) Shield law protecting journalists\' confidential sources. (4) Anti-SLAPP legislation to prevent misuse of lawsuits to silence journalists. (5) Whistleblower protection laws. Institutional mechanisms: (1) An independent public broadcaster funded in a way that ensures editorial independence from government. (2) A self-regulatory press council (like Norway\'s PFU) to uphold ethical standards. (3) Press subsidies to support media pluralism and local journalism. (4) An independent media regulator to prevent excessive ownership concentration. (5) Journalist safety mechanisms, including a hotline for reporting threats. Cultural initiatives: (1) Media literacy education in schools from an early age. (2) Professional journalism training programmes. (3) Public awareness campaigns about the importance of press freedom. (4) International partnerships with press freedom organisations. (5) Transparent governance practices that normalise media scrutiny. The key insight is that press freedom requires a comprehensive ecosystem, not just a single law or institution.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// CHAPTER 6.5: Ethical Journalism
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_6_5: TextbookChapter = {
  id: 'samf-engelsk-6-5',
  courseId: 'samf-engelsk',
  chapterNumber: '6.5',
  title: 'Ethical Journalism',
  description: 'The ethical principles that guide responsible journalism. You will learn about codes of conduct, the balance between public interest and individual privacy, and the challenges that digital journalism poses for traditional ethical standards.',
  estimatedMinutes: 22,
  competenceGoals: [
    'explore ethical dimensions of journalism and freedom of the press across cultures',
    'analyse and assess how English-language media covers political and social issues',
  ],
  keyTerms: [
    { term: 'Journalistic ethics', definition: 'The principles and standards of practice that guide the behaviour of journalists and media organisations, including accuracy, fairness, independence, and accountability' },
    { term: 'Public interest', definition: 'A concept used in journalism to justify reporting that affects the well-being of society at large, even when it may conflict with individual privacy or other considerations' },
    { term: 'Objectivity', definition: 'A journalistic ideal of reporting facts without personal bias, presenting multiple perspectives, and clearly separating news reporting from opinion and commentary' },
    { term: 'Right to privacy', definition: 'An individual\'s right to control information about their personal life and to be free from unwarranted intrusion by media or other parties' },
    { term: 'Accountability journalism', definition: 'Journalism that holds powerful individuals and institutions responsible for their actions, often through investigative reporting that uncovers wrongdoing' },
  ],
  exercises: [],
  content: [
    {
      id: 'se-6-5-intro',
      type: 'text',
      content: `## The Ethical Foundations of Journalism

Journalism has sometimes been called "the first rough draft of history." But with this power to shape how people understand the world comes profound **ethical responsibility**. Journalists make choices every day that affect individuals, communities, and societies: which stories to cover, which sources to trust, how to frame events, and when the public's right to know outweighs an individual's right to privacy.

**Journalistic ethics** refers to the principles, standards, and practices that guide these decisions. While specific codes of conduct vary between countries and organisations, certain core principles are widely shared:

1. **Truth and accuracy**: commitment to verifying facts before publication
2. **Independence**: freedom from political, commercial, or personal influence
3. **Fairness and impartiality**: presenting diverse perspectives and giving subjects the right to respond
4. **Minimising harm**: weighing the public interest against potential damage to individuals
5. **Accountability**: willingness to correct errors and be transparent about methods

In this chapter, we explore these principles in depth and examine how they apply to the challenges of modern journalism.`,
    },
    {
      id: 'se-6-5-def-1',
      type: 'definition',
      title: 'Codes of Conduct in Journalism',
      content: `Most professional journalism organisations operate under **codes of conduct** (also called codes of ethics or editorial guidelines) that set standards for responsible reporting:

**The SPJ Code of Ethics** (Society of Professional Journalists, USA):
- Seek truth and report it
- Minimise harm
- Act independently
- Be accountable and transparent

**The Editors' Code of Practice** (UK, enforced by IPSO):
- Accuracy
- Right of reply
- Privacy
- Harassment
- Children's welfare
- Reporting of crime

**Vær Varsom-plakaten** (Code of Ethics of the Norwegian Press):
- Society's role of the press
- Integrity and credibility
- Journalistic conduct
- Publication rules

**Key features of ethical codes:**
- They are **aspirational** -- setting standards that journalists should strive toward
- They require **balancing competing values** (e.g., public interest vs. privacy)
- They are typically **self-regulatory** -- enforced by the profession itself rather than by law
- They must **evolve** to address new challenges (e.g., social media, AI-generated content, deepfakes)`,
    },
    {
      id: 'se-6-5-example',
      type: 'example',
      title: 'Example: The Ethics of Publishing Leaked Information',
      problem: 'In 2010, WikiLeaks published hundreds of thousands of classified US military and diplomatic documents. Major newspapers including The Guardian, The New York Times, and Der Spiegel collaborated with WikiLeaks on the publication. What ethical considerations did these news organisations face?',
      solution: `**Arguments in favour of publication:**
- **Public interest**: the documents revealed civilian casualties in Iraq and Afghanistan that had not been publicly acknowledged, potential war crimes, and covert diplomatic activities. The public has a right to know how their governments conduct foreign policy and military operations.
- **Accountability**: the documents held powerful institutions (the US military, the State Department) accountable for their actions.
- **Verification**: the news organisations verified the documents' authenticity before publication.

**Arguments against publication:**
- **National security**: critics argued that publication could endanger lives, particularly those of informants named in the documents.
- **Harm to individuals**: diplomatic cables contained candid assessments of foreign leaders that could damage international relations.
- **Legal concerns**: publishing classified information raises questions about the boundaries of press freedom.

**How the newspapers handled it:**
- They **redacted** names and details that could put individuals at risk
- They **consulted** with government officials before publication
- They provided **editorial context** to help readers understand the significance
- They **published selectively**, choosing documents with clear public interest value rather than dumping everything

**The ethical lesson:** Publication of leaked information requires careful balancing of public interest against potential harm, with responsible redaction and contextualisation.`,
    },
    {
      id: 'se-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following best describes the concept of "public interest" in journalistic ethics?',
        options: [
          { id: 'a', text: 'Whatever the public is interested in or curious about', isCorrect: false },
          { id: 'b', text: 'Information that affects the well-being of society at large and justifies reporting even at the cost of individual privacy', isCorrect: true },
          { id: 'c', text: 'Stories that generate the most clicks and revenue for news organisations', isCorrect: false },
          { id: 'd', text: 'Any information that has been made publicly available online', isCorrect: false },
        ],
        solution: '"Public interest" in journalistic ethics is a specific concept that is distinct from "what the public is interested in." It refers to information whose disclosure serves the well-being of society as a whole -- for example, exposing corruption, preventing harm, or ensuring accountability of those in power. This concept is used to justify reporting that may conflict with other values such as individual privacy. For example, exposing a politician\'s financial corruption serves the public interest, while publishing details of a private citizen\'s personal life generally does not, even if readers are curious. The distinction between "the public interest" and "what interests the public" is one of the most important concepts in journalistic ethics.',
      },
    },
    {
      id: 'se-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-6-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'A journalist discovers that a prominent politician is having an extramarital affair. Under what circumstances would publishing this story be most ethically justified?',
        options: [
          { id: 'a', text: 'Always, because the public has a right to know everything about elected officials', isCorrect: false },
          { id: 'b', text: 'Never, because personal relationships are always private matters', isCorrect: false },
          { id: 'c', text: 'If the affair involves misuse of public funds, abuse of power, or contradicts the politician\'s public positions', isCorrect: true },
          { id: 'd', text: 'Only if the story will generate enough traffic to justify the potential legal risks', isCorrect: false },
        ],
        solution: 'This question illustrates the principle of balancing public interest against privacy. A politician\'s extramarital affair is, in itself, a private matter. However, publication becomes ethically justified when there is a clear public interest dimension: if the politician used public funds to conduct the affair, abused their position of power (e.g., the relationship involved a subordinate), or if the affair directly contradicts their public stance (e.g., a politician who campaigns on "family values"). In such cases, the story is not about the affair itself but about hypocrisy, corruption, or abuse of power. The ethical journalist must be able to articulate a clear public interest justification for intruding into someone\'s private life.',
      },
    },
    {
      id: 'se-6-5-def-2',
      type: 'definition',
      title: 'Objectivity, Impartiality, and Bias',
      content: `The concept of **objectivity** has been central to journalistic ethics since the early 20th century, but it is also one of the most debated:

**Traditional objectivity:**
- Separating facts from opinions
- Presenting "both sides" of a story
- Avoiding personal bias in reporting
- Attributing information to sources rather than asserting it

**Critiques of objectivity:**
- **Perfect objectivity is impossible** -- every editorial decision (what to cover, who to interview, how to frame) involves judgment
- **"Both sides" can be misleading** -- in some cases (e.g., climate change) presenting "both sides" gives a false sense of equivalence between established science and fringe views
- **Structural bias** -- even "objective" reporting can reflect the perspectives and priorities of dominant groups in society
- **Objectivity can exclude marginalised perspectives** -- the pretence of neutrality can mean that systemic injustices are not properly reported

**Modern approaches:**
- **Fairness** over objectivity -- striving to be fair, accurate, and comprehensive rather than pretending to be without perspective
- **Transparency** about methods, sources, and editorial decisions
- **Accountability** -- correcting errors and being open to criticism
- **Solutions journalism** -- reporting not just on problems but also on potential solutions

Different journalism traditions handle this differently. American journalism has traditionally emphasised a strict separation between news and opinion, while European traditions often accept that journalism involves interpretation and perspective, as long as it is grounded in facts and fairness.`,
    },
    {
      id: 'se-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-6-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'A major newspaper is covering a story about climate change. Should the newspaper give equal space to climate scientists and climate change sceptics in the name of "balance"? Discuss the ethical implications of the "both sides" approach to journalism and when it may be inappropriate.',
        hints: [
          'Consider the difference between genuine scientific debate and manufactured controversy',
          'Think about the journalist\'s responsibility to truth and the potential consequences of false balance',
        ],
        solution: 'The "both sides" approach is not always appropriate and can, in fact, be deeply misleading. In the case of climate change, there is overwhelming scientific consensus (97%+ of climate scientists) that human activities are causing global warming. Giving equal space to the small minority of sceptics creates "false balance" -- it gives readers the impression that there is genuine scientific disagreement where little exists. This serves the interests of industries that benefit from inaction on climate change and misinforms the public on a critical issue. Ethical journalism requires presenting the weight of evidence, not just the number of "sides." A responsible approach would accurately report the scientific consensus while noting areas of genuine debate (e.g., the pace of change, the most effective policy responses). This does not mean silencing sceptics entirely, but rather contextualising their views within the broader scientific landscape. The principle applies to other issues as well: false balance can distort reporting on vaccines, evolution, and other topics where the scientific evidence is clear. The journalist\'s primary obligation is to truth, not to artificial symmetry.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-6-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare the Norwegian Code of Ethics (Vær Varsom-plakaten) with the SPJ Code of Ethics (USA). What similarities and differences can you identify? What do these differences reveal about the relationship between journalism and society in each country?',
        hints: [
          'You can find both codes online. Look for differences in how they address issues like privacy, public interest, and the social responsibility of journalism',
          'Consider the broader cultural and political contexts of each country',
        ],
        solution: 'Both codes share core principles: commitment to accuracy, independence, fairness, and accountability. However, there are significant differences that reflect distinct journalistic traditions. The Norwegian Vær Varsom-plakaten places greater emphasis on the social responsibility of the press -- it begins with the press\'s obligations to society and its democratic function. It also has more specific guidelines on protecting individuals, particularly children and vulnerable groups, and includes detailed rules about reporting on crime, suicide, and accidents. The SPJ Code of Ethics emphasises individual rights and press freedom more strongly, reflecting the American First Amendment tradition. It places greater emphasis on independence and resisting outside pressure. The Norwegian code reflects a social-democratic tradition where the press has explicit obligations to society, while the American code reflects a liberal tradition that prioritises freedom from interference. These differences reveal broader cultural differences: Norway\'s approach emphasises collective welfare and responsibility, while the American approach emphasises individual liberty and autonomy. Neither is inherently superior -- they represent different but legitimate ways of balancing the competing values in journalistic ethics.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-5-summary',
      type: 'text',
      content: `## Summary

In this chapter you have learned:

- **Journalistic ethics** provides the principles and standards that guide responsible reporting
- Core ethical principles include **truth and accuracy**, **independence**, **fairness**, **minimising harm**, and **accountability**
- The concept of **public interest** justifies reporting that may conflict with individual privacy, but must be carefully applied
- **Objectivity** is a contested concept -- modern approaches emphasise **fairness** and **transparency** rather than the pretence of neutrality
- Ethical challenges in digital journalism include deepfakes, AI-generated content, and the speed of the news cycle

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Journalistic ethics | Principles guiding responsible journalism |
| Public interest | Justification for reporting that serves societal well-being |
| Objectivity | The ideal of bias-free reporting; increasingly replaced by fairness and transparency |
| Right to privacy | An individual's right to control personal information |
| Codes of conduct | Self-regulatory standards for journalistic practice |`,
    },
    {
      id: 'se-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-6-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'The rise of artificial intelligence poses new ethical challenges for journalism. Discuss at least three specific ethical issues that AI raises for journalism (consider AI-generated text, deepfakes, automated reporting, and algorithmic news curation) and propose guidelines that news organisations should adopt to address these challenges.',
        hints: [
          'Think about how AI affects the core journalistic values of accuracy, transparency, and accountability',
          'Consider both the potential benefits (efficiency, data analysis) and risks (misinformation, job displacement, loss of human judgment)',
        ],
        solution: 'AI raises several ethical challenges for journalism: (1) Deepfakes and synthetic media -- AI can generate realistic fake videos, images, and audio, making it harder to verify the authenticity of evidence. Journalists need new tools and expertise to detect manipulated content, and news organisations must be transparent about their verification processes. (2) AI-generated text -- tools like ChatGPT can produce text that is difficult to distinguish from human writing. News organisations must decide when (if ever) AI-generated content is acceptable, and must clearly label it when used. The risk of AI "hallucinating" facts makes human oversight essential. (3) Algorithmic news curation -- AI algorithms on social media and news aggregators determine what stories users see, raising questions about transparency, accountability, and the potential for bias in automated editorial decisions. (4) Automated reporting -- AI can generate routine stories (sports scores, financial reports) efficiently, but raises questions about job displacement and the loss of human context and judgment. Proposed guidelines: (a) Transparency -- clearly label all AI-generated or AI-assisted content. (b) Human oversight -- require human editorial review of all AI-generated content before publication. (c) Verification -- invest in tools and training to detect deepfakes and synthetic media. (d) Accountability -- maintain clear responsibility for published content, regardless of whether AI was involved in its production. (e) Ethics review -- regularly assess the ethical implications of AI tools used in the newsroom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-6-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'You are the editor of a news website. A story lands on your desk: a whistleblower has provided documents showing that a major corporation has been illegally dumping toxic waste, but publishing the story will likely reveal the whistleblower\'s identity, putting them at risk of losing their job and facing legal action. Write a detailed ethical analysis of this situation, considering all the competing values, and explain what decision you would make and why.',
        hints: [
          'Consider the principles of public interest, minimising harm, source protection, and accountability',
          'Think about what steps you could take to protect the whistleblower while still publishing the story',
        ],
        solution: 'This scenario requires balancing several competing ethical principles: (1) Public interest: illegal toxic waste dumping poses a direct threat to public health and the environment. The public has a strong right to know. (2) Source protection: journalists have an ethical (and in many countries, legal) obligation to protect confidential sources. Revealing the whistleblower\'s identity would betray this trust and discourage future whistleblowers. (3) Minimising harm: publication could harm the whistleblower (job loss, legal action) but non-publication could harm the community affected by toxic dumping. (4) Accountability: the corporation should be held accountable for illegal activity. Decision: I would publish the story, but with rigorous protections for the whistleblower. Steps: (a) Redact all information that could identify the source. (b) Seek independent verification of the documents so the story does not depend solely on the whistleblower\'s testimony. (c) Consult with lawyers about source protection laws. (d) Give the corporation an opportunity to respond before publication. (e) Consider timing -- publish when the whistleblower is prepared and has taken steps to protect themselves. The key ethical reasoning is that the public interest in exposing illegal pollution outweighs the corporation\'s interest in secrecy, but the journalist\'s obligation to protect the source must be taken extremely seriously. No story is worth publishing if it needlessly endangers a source.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// Export all chapters
// ============================================================================

export const SAMF_ENGELSK_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMF_ENGELSK_6_1,
  CHAPTER_SAMF_ENGELSK_6_2,
  CHAPTER_SAMF_ENGELSK_6_3,
  CHAPTER_SAMF_ENGELSK_6_4,
  CHAPTER_SAMF_ENGELSK_6_5,
];
