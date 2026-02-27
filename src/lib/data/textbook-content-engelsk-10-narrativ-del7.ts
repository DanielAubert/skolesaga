/**
 * Engelsk 10. klasse - Narrative Versions Part 7 (Chapters 23-28)
 *
 * Engaging, narrative versions of chapters optimized for reading/listening.
 * Each narrative version links back to the original chapter via linkedChapterId.
 *
 * Covers: Media & Society — News Media, Social Media, Climate Change,
 *         Human Rights, Technology & Ethics, Migration & Multiculturalism
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 23 NARRATIVE: News Media and Journalism
// ============================================================================

export const CHAPTER_ENGELSK_10_23_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-23-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '23',
  title: 'News Media and Journalism',
  subtitle: 'Narrativ versjon',
  description: 'Navigate the modern media landscape by understanding how news is structured, how bias operates, and how to separate fact from fiction.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-23',
  content: [
    {
      id: 'engelsk-10-23-n-intro',
      type: 'text',
      content: `## The Information Flood

You are growing up in an era of more information than any generation in human history has ever faced. Every day, thousands of news articles, social media posts, videos, and podcasts compete for your attention, each one claiming to tell you the truth about the world. Some of them are genuinely informative. Some are misleading. Some are outright false. And the challenge is that they often look remarkably similar.

Being able to read news critically, to understand how journalism works, to recognise bias, and to distinguish reliable information from unreliable information, is no longer a nice skill to have. It is a survival skill. In a world where elections can be influenced by misinformation and public health can be threatened by conspiracy theories, your ability to evaluate what you read might be one of the most important abilities you ever develop.

In this chapter, we will explore the fundamentals of journalism: how news articles are structured, how media bias operates, and how you can become a more critical consumer of news. By the end, you will have practical tools for navigating the information flood with confidence and clarity.`,
    },
    {
      id: 'engelsk-10-23-n-section1',
      type: 'text',
      content: `## The Inverted Pyramid: How News Is Built

Most news articles are structured according to a model called the **inverted pyramid**. Imagine a triangle balanced on its point. The widest part, at the top, contains the most important information. As you read down, the information becomes less essential, with background details and context filling the lower sections.

This structure exists for practical reasons. Newspaper editors have always needed to cut articles to fit the available space, and the inverted pyramid allows them to trim from the bottom without losing the essential story. For online news, the structure serves a different but equally practical purpose: most readers do not finish articles. The inverted pyramid ensures that even if you only read the first two paragraphs, you get the core information.

The **lead** (or lede) is the opening paragraph, and it answers the classic questions of journalism: Who? What? When? Where? Why? How? A well-written lead gives you the entire story in miniature. "Three people were injured in a factory fire in Manchester on Tuesday evening, according to fire services, who say the blaze was caused by faulty electrical equipment." In one sentence, you know who was affected, what happened, when and where it happened, and why.

The **body** of the article expands on the lead, adding details, context, and quotations from sources. Journalists quote people directly to add credibility and human perspective. Official sources (police, government officials, experts) provide authoritative information. Eyewitnesses provide immediacy and emotional connection. A good journalist presents multiple perspectives, especially when a story is controversial.

The **background** section, often at the end of the article, provides historical context and connects the current story to broader patterns. This is where you learn that the factory had previously failed safety inspections, or that factory fires have increased by 20% in the region over the past five years.

Understanding this structure makes you a more efficient and critical reader. You know where to find the essential information, where to look for context, and how to evaluate whether an article is complete or whether important questions remain unanswered.`,
    },
    {
      id: 'engelsk-10-23-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-23-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on news structure:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-23-n-quiz1-q0',
            task: 'What is the "inverted pyramid" in journalism?',
            options: [
              { id: 'a', text: 'A building where journalists work', isCorrect: false },
              { id: 'b', text: 'A structure where the most important information comes first, with details following in decreasing importance', isCorrect: true },
              { id: 'c', text: 'A way of writing articles from the least to most important information', isCorrect: false },
              { id: 'd', text: 'A type of opinion column', isCorrect: false },
            ],
            solution: 'The inverted pyramid places the most important information at the top and supporting details below. This allows editors to cut from the bottom and ensures readers get the core story even if they stop reading early.',
          },
          {
            id: 'engelsk-10-23-n-quiz1-q1',
            task: 'What questions should a good news lead answer?',
            options: [
              { id: 'a', text: 'Who? What? When? Where? Why? How?', isCorrect: true },
              { id: 'b', text: 'What? Why? Which? Whether?', isCorrect: false },
              { id: 'c', text: 'Introduction, Body, Conclusion', isCorrect: false },
              { id: 'd', text: 'Headline, Subheading, Caption', isCorrect: false },
            ],
            solution: 'A strong lead answers the classic journalistic questions: Who was involved? What happened? When did it happen? Where did it happen? Why did it happen? How did it happen? This gives readers the complete story in miniature.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-23-n-section2',
      type: 'text',
      content: `## Media Bias: The Lens You Cannot See

Every news source has a perspective. This is not necessarily a problem, but it becomes one when you do not recognise it. **Media bias** is the tendency for news reporting to favour certain perspectives, political positions, or interpretations over others.

Bias operates in several ways. **Selection bias** is about what stories are covered and what stories are ignored. A news outlet might report extensively on crime in immigrant communities while ignoring crime elsewhere, creating a distorted picture of reality. What is not reported is as important as what is reported.

**Framing** is how a story is presented. Consider a protest. One outlet might frame it as "citizens exercising their democratic right to peaceful assembly." Another might frame it as "protesters disrupt traffic and business." Both descriptions might be factually accurate, but they tell very different stories. The frame determines which aspects of reality are emphasised and which are minimised.

**Word choice** reveals bias in subtle but powerful ways. Calling someone a "freedom fighter" versus a "terrorist," a "migrant" versus an "illegal alien," or an "investment" versus a "cost" are not neutral choices. Each word carries connotations that shape how readers perceive the subject.

**Source selection** also matters. If an article about climate policy only quotes oil company executives and not climate scientists, the article's perspective is shaped by who gets to speak. Critical readers always ask: whose voices are present, and whose are absent?

**Confirmation bias** is your own bias. We all tend to seek out and believe information that confirms what we already think, and to dismiss information that challenges our views. Being aware of this tendency is the first step toward overcoming it. Deliberately reading news from sources that challenge your existing views is uncomfortable but essential for developing a well-rounded understanding of the world.`,
    },
    {
      id: 'engelsk-10-23-n-section3',
      type: 'text',
      content: `## Fact-Checking: Your Defence Against Misinformation

In a world where misinformation travels faster than truth, fact-checking is an essential skill. Here is a practical framework you can use every time you encounter a claim that seems important.

**Check the source.** Who published this? Is it a recognised news organisation with editorial standards, or is it an unknown website? Does the outlet have a track record of accurate reporting? Be especially cautious of sources that do not clearly identify who is behind them.

**Check the evidence.** Does the article cite specific, verifiable sources? Are there direct quotations from identifiable people? Are statistics attributed to recognised organisations? An article that makes dramatic claims without citing evidence should be treated with extreme scepticism.

**Check other sources.** Is the story being reported by multiple independent news organisations? If a dramatic claim appears in only one outlet, that is a red flag. Legitimate stories are typically covered by many sources. This is called **lateral reading**, looking sideways across multiple sources rather than reading deeply into one.

**Check the date.** Old stories are sometimes recirculated as if they are new. An article from three years ago might be shared on social media today without context, making it appear current and relevant when it is neither.

**Check your reaction.** If a story makes you feel extremely angry, scared, or outraged, pause before sharing it. Misinformation is often designed to provoke strong emotional reactions because emotional people are less critical and more likely to share without thinking. The stronger your emotional reaction, the more carefully you should evaluate the source.

Fact-checking websites like Snopes, FactCheck.org, and Full Fact investigate specific claims and rate their accuracy. These are useful tools, but the most important fact-checker is you. Developing the habit of questioning what you read, even when it comes from sources you generally trust, is the foundation of media literacy.`,
    },
    {
      id: 'engelsk-10-23-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-23-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on media bias and fact-checking:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-23-n-quiz2-q0',
            task: 'What is "framing" in media bias?',
            options: [
              { id: 'a', text: 'Putting a picture frame around a news photo', isCorrect: false },
              { id: 'b', text: 'How a story is presented, which aspects are emphasised and which are minimised', isCorrect: true },
              { id: 'c', text: 'The structure of a news article', isCorrect: false },
              { id: 'd', text: 'Writing a headline for an article', isCorrect: false },
            ],
            solution: 'Framing determines how a story is presented. The same event can be framed differently: a protest described as "citizens exercising their rights" or "protesters disrupting business" tells very different stories while both being factually accurate.',
          },
          {
            id: 'engelsk-10-23-n-quiz2-q1',
            task: 'What is "lateral reading" as a fact-checking strategy?',
            options: [
              { id: 'a', text: 'Reading an article from left to right', isCorrect: false },
              { id: 'b', text: 'Reading an article very quickly', isCorrect: false },
              { id: 'c', text: 'Checking whether multiple independent sources report the same story', isCorrect: true },
              { id: 'd', text: 'Reading only the headlines of articles', isCorrect: false },
            ],
            solution: 'Lateral reading means looking sideways across multiple independent sources rather than reading deeply into one. If a dramatic claim appears in only one outlet, that is a red flag. Legitimate stories are covered by many sources.',
          },
          {
            id: 'engelsk-10-23-n-quiz2-q2',
            task: 'Why should you be especially cautious when a news story provokes a strong emotional reaction?',
            options: [
              { id: 'a', text: 'Emotional stories are always false', isCorrect: false },
              { id: 'b', text: 'Misinformation is often designed to provoke strong emotions because emotional people share without thinking', isCorrect: true },
              { id: 'c', text: 'Good journalism never causes emotions', isCorrect: false },
              { id: 'd', text: 'Strong emotions mean you are reading too fast', isCorrect: false },
            ],
            solution: 'Misinformation is often deliberately crafted to trigger strong emotions like anger, fear, or outrage. When people react emotionally, they tend to be less critical and more likely to share without verifying. The stronger the emotional reaction, the more carefully you should evaluate the source.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-23-n-summary',
      type: 'text',
      content: `## Summary

In an era of information overload, understanding how news works is a survival skill.

**The inverted pyramid** structures most news articles with the most important information first. The lead answers Who, What, When, Where, Why, and How. Understanding this structure helps you read efficiently and critically.

**Media bias** operates through selection (what is covered), framing (how it is presented), word choice (what language is used), and source selection (who gets to speak). Your own confirmation bias also affects how you interpret news. Awareness of these biases is the first step toward overcoming them.

**Fact-checking** is your practical defence against misinformation. Check the source, the evidence, other sources, the date, and your own emotional reaction. Developing the habit of questioning what you read is the foundation of media literacy in the modern world.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 24 NARRATIVE: Social Media and Digital Communication
// ============================================================================

export const CHAPTER_ENGELSK_10_24_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-24-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '24',
  title: 'Social Media and Digital Communication',
  subtitle: 'Narrativ versjon',
  description: 'Understand the digital world you inhabit every day, from the rhetoric of social media to the realities of cyberbullying and digital citizenship.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-24',
  content: [
    {
      id: 'engelsk-10-24-n-intro',
      type: 'text',
      content: `## Your Digital Life

How many hours have you spent online today? If you are like most teenagers, the answer might surprise you. Social media, messaging apps, streaming services, and online games occupy a significant portion of your waking life. You are the first generation to grow up entirely within the digital world, and this shapes everything about how you communicate, form relationships, build identity, and understand the world.

But here is the thing: the digital world was not designed with your wellbeing in mind. It was designed to capture and hold your attention, because your attention is the product that social media companies sell to advertisers. Understanding how digital communication works, both its possibilities and its dangers, is essential for navigating this world wisely.

In this chapter, we will explore digital rhetoric (how social media persuades you), the serious issue of cyberbullying, and what it means to be a responsible digital citizen. This is not a lecture about the dangers of technology. It is a guide to understanding the tools you use every day so that you can use them with awareness rather than being used by them.`,
    },
    {
      id: 'engelsk-10-24-n-section1',
      type: 'text',
      content: `## Digital Rhetoric: How Social Media Persuades

**Rhetoric** is the art of persuasion, and it is older than writing itself. The ancient Greeks studied it as a formal discipline. But in the digital age, rhetoric has taken on entirely new forms, and understanding them is crucial.

Social media posts use **visual rhetoric** powerfully. An image paired with text creates a message stronger than either element alone. A photograph of a crowded beach alongside the caption "our oceans are dying" creates an emotional impact that a paragraph of statistics cannot match. Influencers carefully curate their images to project particular identities: success, beauty, adventure, authenticity. Even "unfiltered" posts are usually carefully chosen from dozens of options.

**Algorithms** are the invisible rhetoricians of the digital world. They do not persuade through arguments; they persuade through selection. By showing you content similar to what you have already engaged with, algorithms create **echo chambers**, environments where your existing views are constantly reinforced and alternative perspectives are filtered out. You might believe that everyone shares your opinion on a topic simply because the algorithm has hidden dissenting voices from your feed.

**Emotional appeals** drive engagement online. Posts that provoke strong emotions, whether anger, joy, shock, or fear, receive more likes, comments, and shares. This is not accidental; platforms are designed to reward emotional content because emotional engagement keeps users scrolling longer. The result is that moderate, nuanced positions get less visibility than extreme, provocative ones.

**Influencer culture** is a form of persuasion that blurs the line between personal recommendation and paid advertising. When someone you follow and trust recommends a product, it feels like a friend's advice. But it might be a paid partnership. Understanding the difference between authentic opinion and sponsored content is a critical skill for the digital age.

The language of social media is also distinctive. It uses **brevity** (character limits force concise expression), **informality** (casual tone builds connection), **hashtags** (to join conversations and signal identity), and **emojis** (to convey tone that text alone cannot). This is not inferior communication; it is a different mode of communication with its own rules and possibilities.`,
    },
    {
      id: 'engelsk-10-24-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-24-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on digital rhetoric:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-24-n-quiz1-q0',
            task: 'What is an "echo chamber" in social media?',
            options: [
              { id: 'a', text: 'A feature that improves sound quality in videos', isCorrect: false },
              { id: 'b', text: 'An environment where your existing views are constantly reinforced by the algorithm', isCorrect: true },
              { id: 'c', text: 'A popular social media group', isCorrect: false },
              { id: 'd', text: 'A special chat room for music fans', isCorrect: false },
            ],
            solution: 'An echo chamber is created when algorithms show you content similar to what you have already engaged with, hiding alternative perspectives. You may believe everyone shares your views simply because dissenting voices have been filtered out.',
          },
          {
            id: 'engelsk-10-24-n-quiz1-q1',
            task: 'Why do extreme and emotional posts get more visibility than moderate ones on social media?',
            options: [
              { id: 'a', text: 'Because extreme posts are always more truthful', isCorrect: false },
              { id: 'b', text: 'Because platforms reward emotional engagement, which keeps users scrolling longer', isCorrect: true },
              { id: 'c', text: 'Because moderate posts are against platform rules', isCorrect: false },
              { id: 'd', text: 'Because only extreme people use social media', isCorrect: false },
            ],
            solution: 'Social media platforms are designed to maximise engagement time. Posts that provoke strong emotions receive more likes, comments, and shares, which the algorithm interprets as valuable content and shows to more people.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-24-n-section2',
      type: 'text',
      content: `## Cyberbullying: The Shadow Side of Connection

The same tools that allow you to connect with friends, share creative work, and access information also create opportunities for harm. **Cyberbullying** is the use of digital technology to harass, threaten, embarrass, or target another person. It is a serious problem that affects millions of young people worldwide.

What makes cyberbullying different from traditional bullying is its reach and persistence. A cruel comment made in a school corridor might be heard by a few people and then fade. A cruel comment posted online can be seen by hundreds or thousands and may exist permanently. Screenshots preserve hurtful messages even after they are deleted. The victim cannot escape by going home because the bullying follows them through their phone and computer.

Cyberbullying takes many forms: sending threatening messages, spreading rumours online, sharing embarrassing photos or videos without consent, deliberately excluding someone from online groups, creating fake profiles to impersonate or mock someone, and repeatedly posting hurtful comments. Some cyberbullying is obvious; some is subtle, disguised as "jokes" or "banter" that the target is expected to tolerate.

The effects are real and serious. Research consistently shows that cyberbullying victims experience higher rates of depression, anxiety, and in extreme cases, suicidal thoughts. The fact that it happens through a screen does not make it less harmful. In some ways, the digital nature makes it worse because the victim may feel that there is no safe space, no escape from the harassment.

If you witness cyberbullying, you have a choice. Bystanders who do nothing effectively support the bully by allowing the behaviour to continue. But bystanders who speak up, who report the behaviour, who reach out privately to the victim, can make an enormous difference. Digital courage, the willingness to stand up for others in online spaces, is just as important as physical courage.`,
    },
    {
      id: 'engelsk-10-24-n-section3',
      type: 'text',
      content: `## Digital Citizenship: Your Online Responsibility

Being a **digital citizen** means participating in the online world with awareness, responsibility, and respect. Just as citizenship in a country comes with rights and responsibilities, being part of the digital world does too.

Your **digital footprint** is the trail of data you leave behind every time you go online. Every post, like, comment, search, and purchase contributes to a profile that follows you. Future employers, university admissions officers, and potential partners may one day search for your name and find what you have posted. This is not a reason to be paranoid, but it is a reason to be thoughtful. Before posting anything, a useful question to ask yourself is: would I be comfortable if everyone I know, including family, teachers, and future colleagues, could see this?

**Privacy** is more complex than it seems. When you agree to the terms of service for a social media platform, you are typically giving that company permission to collect, store, and sometimes sell your data. Most people do not read these agreements. Understanding that your personal information has commercial value, and that companies are designed to extract as much of it as possible, changes how you think about what you share.

**Respectful communication** online follows the same principles as respectful communication anywhere. The anonymity or distance that screens provide can make people forget that there are real humans reading their words. Before sending a message or posting a comment, consider whether you would say the same thing face to face. If the answer is no, reconsider.

Being a responsible digital citizen also means thinking critically about the content you share. Sharing misinformation, even unintentionally, contributes to a less informed public. Sharing someone's personal information without consent can cause real harm. Sharing hateful content, even to mock it, can amplify its reach.

The digital world is not going away. It is where much of your life will be lived. Learning to navigate it with integrity, empathy, and critical thinking is one of the most important skills you can develop.`,
    },
    {
      id: 'engelsk-10-24-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-24-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on cyberbullying and digital citizenship:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-24-n-quiz2-q0',
            task: 'What makes cyberbullying potentially more harmful than traditional bullying?',
            options: [
              { id: 'a', text: 'Cyberbullying uses more offensive language', isCorrect: false },
              { id: 'b', text: 'Its reach is wider, it can be permanent, and the victim cannot escape it by going home', isCorrect: true },
              { id: 'c', text: 'Cyberbullying is always done by strangers', isCorrect: false },
              { id: 'd', text: 'Cyberbullying is not actually harmful because it is online', isCorrect: false },
            ],
            solution: 'Cyberbullying can reach a massive audience, screenshots make it permanent, and the victim has no safe space since it follows them through their devices. These factors can make the impact more severe than face-to-face bullying.',
          },
          {
            id: 'engelsk-10-24-n-quiz2-q1',
            task: 'What is your "digital footprint"?',
            options: [
              { id: 'a', text: 'The amount of storage space your files use', isCorrect: false },
              { id: 'b', text: 'How fast you type on a keyboard', isCorrect: false },
              { id: 'c', text: 'The trail of data you leave behind from every online activity', isCorrect: true },
              { id: 'd', text: 'Your profile picture on social media', isCorrect: false },
            ],
            solution: 'Your digital footprint is the accumulated trail of data from all your online activity: posts, likes, comments, searches, and purchases. This data can be found by future employers, universities, or anyone who searches for your name.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-24-n-summary',
      type: 'text',
      content: `## Summary

Understanding digital communication is essential for navigating the world you live in.

**Digital rhetoric** operates through visual persuasion, algorithmic selection (creating echo chambers), emotional appeals that drive engagement, and influencer culture that blurs advertising and personal recommendation. Awareness of these mechanisms helps you consume digital content critically.

**Cyberbullying** is a serious problem enabled by the reach and permanence of digital communication. It takes many forms, has real psychological effects, and requires digital courage from bystanders who witness it.

**Digital citizenship** means participating online with awareness and responsibility. Understanding your digital footprint, the value of your data, and the impact of your words empowers you to use digital tools wisely rather than being used by them.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 25 NARRATIVE: Climate Change and the Environment
// ============================================================================

export const CHAPTER_ENGELSK_10_25_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-25-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '25',
  title: 'Climate Change and the Environment',
  subtitle: 'Narrativ versjon',
  description: 'Understand the science and vocabulary of climate change, from the greenhouse effect to renewable energy, and learn to discuss this defining issue in English.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-25',
  content: [
    {
      id: 'engelsk-10-25-n-intro',
      type: 'text',
      content: `## The Issue That Defines Your Generation

Climate change is not a future problem. It is happening now, and it will shape the world you inherit more than any other single issue. Glaciers are retreating, sea levels are rising, extreme weather events are becoming more frequent, and ecosystems are under stress in ways never seen before in human history. The science is overwhelming. The question is no longer whether climate change is real, but what we will do about it.

Because the global conversation about climate change happens largely in English, the language of international science, diplomacy, and media, understanding the English vocabulary and arguments around this issue is both practically useful and intellectually essential. Whether you are reading a scientific report, following an international summit, or engaging in a debate, you need the language to understand and participate.

In this chapter, we will explore the science behind climate change, the vocabulary you need to discuss it intelligently, and the solutions being proposed and implemented around the world. This is not a science lesson disguised as an English lesson. It is both, because language and understanding are inseparable.`,
    },
    {
      id: 'engelsk-10-25-n-section1',
      type: 'text',
      content: `## The Greenhouse Effect: Understanding the Science

The **greenhouse effect** is a natural process that makes life on Earth possible. Without it, our planet would be a frozen wasteland with an average temperature of about minus 18 degrees Celsius. Here is how it works.

The sun sends energy to Earth in the form of light. The Earth's surface absorbs this energy and radiates it back as heat (infrared radiation). Certain gases in the atmosphere, called **greenhouse gases**, trap some of this outgoing heat, like the glass walls of a greenhouse trap warmth inside. The main greenhouse gases are carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and water vapour.

For thousands of years, this system was in balance. The amount of greenhouse gas in the atmosphere remained relatively stable, and Earth's temperature stayed within a range that supported life as we know it. Then came the Industrial Revolution.

Since the mid-1800s, human activities have dramatically increased the concentration of greenhouse gases in the atmosphere. Burning **fossil fuels** (coal, oil, and natural gas) for energy releases carbon that has been locked underground for millions of years. **Deforestation** removes trees that absorb CO2. Industrial agriculture produces methane from livestock and nitrous oxide from fertilisers. The result is an enhanced greenhouse effect: more gases trapping more heat, causing the planet to warm.

The numbers are stark. Atmospheric CO2 has risen from about 280 parts per million (ppm) before the Industrial Revolution to over 420 ppm today. Global average temperature has already risen by approximately 1.1 degrees Celsius above pre-industrial levels. This might sound small, but in climate terms, it is enormous. The difference between the current climate and the last Ice Age, when glaciers covered much of Europe and North America, was only about 5 degrees Celsius.

The **consequences** of this warming are already visible. Ice caps and glaciers are melting, contributing to rising sea levels. Weather patterns are becoming more extreme, with more intense heatwaves, droughts, floods, and storms. Ecosystems are disrupted as species struggle to adapt to changing conditions. Ocean acidification, caused by CO2 being absorbed by seawater, threatens marine life from coral reefs to shellfish.`,
    },
    {
      id: 'engelsk-10-25-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-25-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on the greenhouse effect:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-25-n-quiz1-q0',
            task: 'Why is the greenhouse effect described as both natural and problematic?',
            options: [
              { id: 'a', text: 'Because it only exists in greenhouses', isCorrect: false },
              { id: 'b', text: 'The natural effect makes Earth habitable, but human activity has enhanced it, causing dangerous warming', isCorrect: true },
              { id: 'c', text: 'Because scientists disagree about whether it exists', isCorrect: false },
              { id: 'd', text: 'Because it only affects certain countries', isCorrect: false },
            ],
            solution: 'The natural greenhouse effect keeps Earth warm enough to support life. The problem is that human activities have dramatically increased greenhouse gases, enhancing this effect and causing the planet to warm at a dangerous rate.',
          },
          {
            id: 'engelsk-10-25-n-quiz1-q1',
            task: 'What is the main human activity that has increased CO2 in the atmosphere?',
            options: [
              { id: 'a', text: 'Building cities', isCorrect: false },
              { id: 'b', text: 'Space exploration', isCorrect: false },
              { id: 'c', text: 'Burning fossil fuels (coal, oil, and natural gas)', isCorrect: true },
              { id: 'd', text: 'Using the internet', isCorrect: false },
            ],
            solution: 'Burning fossil fuels for energy is the primary source of increased atmospheric CO2. These fuels release carbon that has been stored underground for millions of years, adding it to the atmosphere and enhancing the greenhouse effect.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-25-n-section2',
      type: 'text',
      content: `## Renewable Energy and Solutions

The good news is that solutions exist. The challenge is implementing them at the speed and scale required.

**Renewable energy** sources generate power without burning fossil fuels. **Solar energy** harnesses sunlight through photovoltaic panels or concentrated solar power plants. The cost of solar has plummeted in recent decades, making it competitive with or cheaper than fossil fuels in many regions. **Wind energy** uses turbines to convert wind into electricity. Both onshore and offshore wind farms are expanding rapidly worldwide. Norway, with its geography and resources, is a major player in both offshore wind and **hydroelectric power**, which generates electricity from flowing water.

**Carbon neutrality** and **net zero** are terms you will encounter frequently. Carbon neutrality means balancing the amount of CO2 released with an equivalent amount removed from the atmosphere. Net zero is similar but covers all greenhouse gases, not just CO2. Countries, companies, and cities around the world are setting net-zero targets, though the gap between pledges and actions remains significant.

**Individual action** versus **systemic change** is a key debate. Some argue that everyone must reduce their personal carbon footprint: drive less, fly less, eat less meat, consume less. Others argue that focusing on individual choices distracts from the need for systemic change: government policies, international agreements, and corporate accountability. In reality, both are necessary. Individual choices matter, but they are not sufficient without structural changes in energy systems, transport, agriculture, and industry.

**Climate justice** recognises that climate change does not affect everyone equally. The countries and communities that have contributed least to the problem are often the most vulnerable to its effects. Low-lying island nations face existential threats from rising seas. Countries in the Global South face more extreme droughts and floods despite having produced a fraction of historical emissions. Climate justice demands that those most responsible for the problem bear the greatest responsibility for solving it.

The language around climate change is itself contested. Terms like "climate crisis" versus "climate change," "global warming" versus "global heating," carry different emotional weights and political implications. Being aware of this helps you engage with the debate more critically.`,
    },
    {
      id: 'engelsk-10-25-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-25-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on climate solutions:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-25-n-quiz2-q0',
            task: 'What does "net zero" mean in the context of climate change?',
            options: [
              { id: 'a', text: 'Producing zero electricity', isCorrect: false },
              { id: 'b', text: 'Balancing all greenhouse gas emissions with equivalent removals from the atmosphere', isCorrect: true },
              { id: 'c', text: 'Having zero cars on the road', isCorrect: false },
              { id: 'd', text: 'Spending zero money on fossil fuels', isCorrect: false },
            ],
            solution: 'Net zero means balancing the total greenhouse gases released into the atmosphere with an equivalent amount removed. It does not mean producing zero emissions, but ensuring that any remaining emissions are offset.',
          },
          {
            id: 'engelsk-10-25-n-quiz2-q1',
            task: 'What is "climate justice"?',
            options: [
              { id: 'a', text: 'A type of court that handles environmental crimes', isCorrect: false },
              { id: 'b', text: 'The principle that those most responsible for climate change should bear the greatest responsibility for addressing it', isCorrect: true },
              { id: 'c', text: 'A law that bans fossil fuels', isCorrect: false },
              { id: 'd', text: 'A movement that opposes renewable energy', isCorrect: false },
            ],
            solution: 'Climate justice recognises that climate change affects people unequally. Countries and communities that contributed least to the problem often suffer the most. Climate justice demands that the most responsible bear proportionate responsibility for solutions.',
          },
          {
            id: 'engelsk-10-25-n-quiz2-q2',
            task: 'Why is the debate between "individual action" and "systemic change" important?',
            options: [
              { id: 'a', text: 'Because only one approach can work', isCorrect: false },
              { id: 'b', text: 'Because individual action is always more effective than systemic change', isCorrect: false },
              { id: 'c', text: 'Because both are necessary, but focusing only on individual choices can distract from needed structural reforms', isCorrect: true },
              { id: 'd', text: 'Because systemic change is impossible', isCorrect: false },
            ],
            solution: 'Both individual action and systemic change are necessary. The concern is that overemphasising personal choices (recycling, flying less) might distract from the larger structural changes needed in energy, transport, and industry.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-25-n-summary',
      type: 'text',
      content: `## Summary

Climate change is the defining issue of your generation, and understanding it in English is essential for participating in the global conversation.

**The greenhouse effect** is a natural process enhanced by human activity. Burning fossil fuels, deforestation, and agriculture have dramatically increased greenhouse gases, causing global warming with consequences including melting ice, rising seas, and extreme weather.

**Solutions** include renewable energy (solar, wind, hydroelectric), carbon neutrality and net-zero targets, and both individual action and systemic change. Climate justice demands that responsibility for solutions be proportional to responsibility for the problem.

The vocabulary of climate change carries political weight. Understanding terms like greenhouse effect, fossil fuels, renewable energy, net zero, and climate justice equips you to engage critically with one of the most important debates of our time.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 26 NARRATIVE: Human Rights and Social Justice
// ============================================================================

export const CHAPTER_ENGELSK_10_26_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-26-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '26',
  title: 'Human Rights and Social Justice',
  subtitle: 'Narrativ versjon',
  description: 'Explore the foundations of human rights from the UDHR to the civil rights movement, and understand the vital difference between equality and equity.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-26',
  content: [
    {
      id: 'engelsk-10-26-n-intro',
      type: 'text',
      content: `## Rights That Belong to Everyone

On 10 December 1948, in a world still reeling from the horrors of the Second World War, the newly formed United Nations adopted a remarkable document. The Universal Declaration of Human Rights proclaimed, for the first time in history, that all human beings are born free and equal in dignity and rights. This was not just a statement of fact. It was a statement of aspiration, a declaration of what the world should be, even though it clearly was not.

Nearly eight decades later, human rights remain both a powerful ideal and an unfinished project. The rights declared in 1948 are still denied to millions of people around the world. Understanding what human rights are, where they came from, and how people have fought for them is essential for any young person who wants to understand and improve the world.

In this chapter, we will trace the story of human rights from the UDHR to the civil rights movement, explore the crucial difference between equality and equity, and consider what social justice means in practice. These are not abstract concepts. They affect real people's lives every day, perhaps including yours.`,
    },
    {
      id: 'engelsk-10-26-n-section1',
      type: 'text',
      content: `## The Universal Declaration of Human Rights

The **Universal Declaration of Human Rights (UDHR)** was drafted by a committee chaired by Eleanor Roosevelt, former First Lady of the United States, and included representatives from countries around the world. It was deliberately designed to transcend any single culture, religion, or political system. Its thirty articles cover civil and political rights (like freedom of speech and the right to a fair trial), economic and social rights (like the right to education and healthcare), and the right to participate in the cultural life of the community.

Article 1 sets the tone: "All human beings are born free and equal in dignity and rights." This simple sentence carries revolutionary implications. It means that your rights do not depend on your nationality, ethnicity, gender, religion, sexuality, or any other characteristic. They are yours simply because you are human.

The UDHR is not a law that can be enforced in court. It is a declaration, a statement of principles. But it has been enormously influential. It inspired the creation of binding international treaties, national constitutions, and legal systems around the world. The European Convention on Human Rights, which Norway and other European countries are bound by, draws directly from the UDHR.

However, the declaration has faced criticism too. Some argue that it reflects Western values and was imposed on cultures with different traditions. Others point out the gap between declared rights and actual practice. Many of the countries that voted for the UDHR in 1948, including colonial powers still ruling over other peoples, were themselves violating the very rights they endorsed. This gap between principle and practice remains the central challenge of human rights work.

The **civil rights movement** in the United States during the 1950s and 1960s is one of the most powerful examples of people demanding that proclaimed rights become reality. African Americans had been granted equal rights on paper through constitutional amendments after the Civil War, but in practice they faced systematic discrimination through Jim Crow laws, segregation, voter suppression, and violence. The civil rights movement, led by figures like Martin Luther King Jr., Rosa Parks, and countless ordinary people, used nonviolent protest, legal challenges, and moral persuasion to demand that America live up to its own ideals.

King's "I Have a Dream" speech remains one of the most famous and powerful pieces of rhetoric in the English language. When he spoke of a dream in which his children would "not be judged by the colour of their skin but by the content of their character," he was not inventing new rights. He was demanding that existing rights be honoured for all Americans. The Civil Rights Act of 1964 and the Voting Rights Act of 1965 were major victories, but the struggle for racial justice continues today.`,
    },
    {
      id: 'engelsk-10-26-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on human rights:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-26-n-quiz1-q0',
            task: 'What is the Universal Declaration of Human Rights (UDHR)?',
            options: [
              { id: 'a', text: 'A binding international law enforced by the United Nations', isCorrect: false },
              { id: 'b', text: 'A declaration of principles adopted in 1948, stating that all humans have inherent rights and dignity', isCorrect: true },
              { id: 'c', text: 'A document that only applies to European countries', isCorrect: false },
              { id: 'd', text: 'A treaty signed only by the United States', isCorrect: false },
            ],
            solution: 'The UDHR is a declaration of principles adopted by the UN in 1948. While not legally binding itself, it has inspired binding treaties, constitutions, and legal systems worldwide.',
          },
          {
            id: 'engelsk-10-26-n-quiz1-q1',
            task: 'What was the central demand of the US civil rights movement?',
            options: [
              { id: 'a', text: 'Creating new rights that had never existed before', isCorrect: false },
              { id: 'b', text: 'That rights already proclaimed on paper be honoured in practice for all Americans', isCorrect: true },
              { id: 'c', text: 'Overthrowing the US government', isCorrect: false },
              { id: 'd', text: 'Establishing a separate country for African Americans', isCorrect: false },
            ],
            solution: 'The civil rights movement demanded that the rights already guaranteed by the US Constitution be honoured for African Americans, who faced systematic discrimination despite having formal equal rights on paper.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-26-n-section2',
      type: 'text',
      content: `## Equality vs. Equity: A Crucial Distinction

Two words that sound similar but mean very different things are at the heart of social justice debates: **equality** and **equity**.

**Equality** means treating everyone the same. Everyone gets the same resources, the same opportunities, the same rules. On the surface, this seems perfectly fair. If we give everyone an identical bicycle, we have treated everyone equally.

But what if some of those people are children and some are adults? What if some have disabilities that prevent them from riding a standard bicycle? Giving everyone the same bicycle treats them equally but does not actually give them equal ability to get where they need to go. This is where equity comes in.

**Equity** means giving people what they need to have a genuinely fair opportunity. Instead of giving everyone the same bicycle, equity might mean giving some people adult bikes, some children's bikes, some tricycles, and some accessible alternatives. The goal is not identical treatment but equivalent outcomes: everyone can get where they need to go.

This distinction matters enormously in real-world policy. An education system that treats all students equally by providing identical resources to every school might sound fair. But if some schools serve wealthy communities with additional private resources, while others serve poor communities with no such support, equal funding produces unequal outcomes. Equity would mean providing extra resources to disadvantaged schools to compensate for existing inequalities.

The same principle applies to many areas of life. Equal access to healthcare means little if some communities lack nearby hospitals. Equal opportunity in employment means little if some groups face discrimination in hiring. Equal voting rights mean little if some communities face barriers to actually voting.

**Social justice** is the pursuit of a society in which the distribution of opportunities, resources, and privileges is fair. It does not mean making everyone identical. It means ensuring that everyone has a genuine chance to live with dignity and reach their potential. This requires understanding and addressing the systemic barriers that prevent some people from accessing the opportunities that others take for granted.

Debates about social justice are often heated because they challenge existing power structures. People who benefit from the current system may resist changes that would redistribute advantages. But the principle behind social justice is remarkably simple: no one's life chances should be determined by characteristics they did not choose, such as where they were born, the colour of their skin, their gender, or their parents' wealth.`,
    },
    {
      id: 'engelsk-10-26-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-26-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on equality and equity:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-26-n-quiz2-q0',
            task: 'What is the key difference between equality and equity?',
            options: [
              { id: 'a', text: 'They are exactly the same thing', isCorrect: false },
              { id: 'b', text: 'Equality means treating everyone the same; equity means giving people what they need for genuinely fair opportunity', isCorrect: true },
              { id: 'c', text: 'Equality is fair and equity is unfair', isCorrect: false },
              { id: 'd', text: 'Equity means everyone gets more than under equality', isCorrect: false },
            ],
            solution: 'Equality is identical treatment for all. Equity is differentiated treatment that accounts for existing disadvantages, aiming for equivalent outcomes rather than identical inputs.',
          },
          {
            id: 'engelsk-10-26-n-quiz2-q1',
            task: 'Why might equal funding for all schools still produce unequal outcomes?',
            options: [
              { id: 'a', text: 'Because some students are smarter than others', isCorrect: false },
              { id: 'b', text: 'Because schools in wealthy areas already have additional private resources that disadvantaged schools lack', isCorrect: true },
              { id: 'c', text: 'Because equal funding is illegal', isCorrect: false },
              { id: 'd', text: 'Because teachers in all schools are equally skilled', isCorrect: false },
            ],
            solution: 'Schools in wealthy communities often benefit from additional private resources (donations, engaged parents with resources, local facilities). Equal public funding does not compensate for these pre-existing advantages, so equitable funding would provide more to disadvantaged schools.',
          },
          {
            id: 'engelsk-10-26-n-quiz2-q2',
            task: 'What is the basic principle behind social justice?',
            options: [
              { id: 'a', text: 'Making everyone earn the same salary', isCorrect: false },
              { id: 'b', text: 'Punishing people who have more than others', isCorrect: false },
              { id: 'c', text: 'Ensuring that no one\'s life chances are determined by characteristics they did not choose', isCorrect: true },
              { id: 'd', text: 'Eliminating all differences between people', isCorrect: false },
            ],
            solution: 'Social justice aims to ensure that factors like birthplace, skin colour, gender, or parents\' wealth do not determine a person\'s life chances. It pursues fair distribution of opportunities, not identical outcomes.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-26-n-summary',
      type: 'text',
      content: `## Summary

Human rights and social justice are both ideals to aspire to and practical struggles to engage in.

**The UDHR** (1948) established that all humans have inherent rights and dignity regardless of nationality, ethnicity, gender, or any other characteristic. While not legally binding, it has inspired constitutions and treaties worldwide. The gap between declared rights and actual practice remains the central challenge.

**The civil rights movement** demonstrated how people can demand that proclaimed rights become reality, using nonviolent protest, legal challenges, and moral persuasion to fight systematic discrimination.

**Equality** means identical treatment; **equity** means differentiated treatment that accounts for existing disadvantages. Social justice pursues a world where no one's life chances are determined by characteristics they did not choose. Understanding these concepts equips you to participate in some of the most important conversations of our time.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 27 NARRATIVE: Technology and Ethics
// ============================================================================

export const CHAPTER_ENGELSK_10_27_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-27-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '27',
  title: 'Technology and Ethics',
  subtitle: 'Narrativ versjon',
  description: 'Grapple with the ethical questions raised by AI, digital privacy, and the digital divide, and learn to discuss technology critically in English.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-27',
  content: [
    {
      id: 'engelsk-10-27-n-intro',
      type: 'text',
      content: `## When Technology Raises Questions It Cannot Answer

Technology gives us incredible power, but it does not tell us how to use that power wisely. Every major technological advance brings ethical questions that the technology itself cannot resolve. The invention of nuclear energy raised the question of whether we should build nuclear weapons. The invention of genetic engineering raised the question of whether we should modify human DNA. And now, the rise of artificial intelligence, mass surveillance, and global digital connectivity raises questions that your generation will have to answer.

These are not abstract philosophical puzzles. They are practical decisions with real consequences for real people. Should an AI system be allowed to make decisions about who gets a loan, who gets released from prison, or who gets a job interview? Should governments be able to monitor their citizens' online activity? Should everyone in the world have access to the internet, and if so, whose responsibility is it to provide that access?

In this chapter, we will explore three major areas where technology and ethics intersect: artificial intelligence, digital privacy, and the digital divide. The goal is not to give you the "right" answers but to give you the vocabulary and frameworks to think through these issues critically and discuss them in English.`,
    },
    {
      id: 'engelsk-10-27-n-section1',
      type: 'text',
      content: `## Artificial Intelligence: Promise and Peril

**Artificial intelligence (AI)** refers to computer systems that can perform tasks that normally require human intelligence: recognising images, understanding language, making decisions, and learning from experience. You interact with AI every day, often without realising it. The recommendations on your streaming service, the autocorrect on your phone, the filters on your photos, and the voice assistants you talk to are all powered by AI.

But AI is rapidly moving beyond these familiar applications into areas that raise profound ethical questions. **AI bias** is one of the most pressing concerns. AI systems learn from data, and if that data reflects existing prejudices, the AI will reproduce those prejudices. Facial recognition systems have been shown to be less accurate for people with darker skin, because they were trained primarily on lighter-skinned faces. Hiring algorithms have been found to discriminate against women because they were trained on historical data from male-dominated workplaces. The danger is that AI can make prejudice seem objective and neutral, hiding human bias behind the apparent authority of technology.

**AI decision-making** in high-stakes situations raises questions about accountability. If an AI system denies someone a bank loan, who is responsible? The programmer? The company? The algorithm itself? If a self-driving car causes an accident, who is at fault? These questions do not have easy answers, but they must be addressed as AI becomes more prevalent in consequential decisions.

**The future of work** is another major concern. AI and automation can perform many tasks faster and cheaper than humans. This creates efficiency but also displaces workers. Some experts predict that AI will create as many new jobs as it eliminates, just as previous technological revolutions did. Others worry that this time is different, that AI's ability to learn and adapt means it will replace not just manual labour but cognitive work as well. Regardless of which prediction proves correct, societies will need to adapt their education systems, welfare policies, and concepts of meaningful work.

**Creativity and AI** raises fascinating questions too. AI can now write poetry, compose music, create visual art, and generate text that is difficult to distinguish from human writing. Does this make AI creative? Or is it merely recombining patterns from human-created data? And what happens to human creators when AI can produce content faster and cheaper? These questions touch on fundamental issues of what it means to be human.`,
    },
    {
      id: 'engelsk-10-27-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on AI and ethics:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-27-n-quiz1-q0',
            task: 'What is "AI bias" and why is it dangerous?',
            options: [
              { id: 'a', text: 'AI systems that prefer certain colours over others', isCorrect: false },
              { id: 'b', text: 'AI systems that reproduce human prejudices from their training data, making bias seem objective', isCorrect: true },
              { id: 'c', text: 'AI systems that work faster than humans', isCorrect: false },
              { id: 'd', text: 'AI systems that are biased toward newer technology', isCorrect: false },
            ],
            solution: 'AI bias occurs when AI systems learn prejudices from their training data and reproduce them in their outputs. The danger is that AI can make human bias appear objective and neutral, hiding discrimination behind the authority of technology.',
          },
          {
            id: 'engelsk-10-27-n-quiz1-q1',
            task: 'Why does AI decision-making in high-stakes situations raise accountability questions?',
            options: [
              { id: 'a', text: 'Because AI always makes correct decisions', isCorrect: false },
              { id: 'b', text: 'Because when AI makes harmful decisions, it is unclear who is responsible: the programmer, the company, or the algorithm', isCorrect: true },
              { id: 'c', text: 'Because AI never makes decisions', isCorrect: false },
              { id: 'd', text: 'Because humans always agree with AI decisions', isCorrect: false },
            ],
            solution: 'When AI systems make consequential decisions (loans, hiring, legal outcomes) that harm people, the question of responsibility becomes complex. Traditional accountability frameworks were designed for human decision-makers, not algorithms.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-27-n-section2',
      type: 'text',
      content: `## Digital Privacy: Who Is Watching?

Every time you go online, you generate data. Every search, every click, every purchase, every message, every location you visit with your phone in your pocket creates information about you. This data is collected, stored, analysed, and monetised by companies whose business model depends on knowing as much about you as possible.

**Digital privacy** is the right to control your own personal information in the digital world. It is a right that is under pressure from multiple directions: corporations that profit from your data, governments that want to monitor their citizens, and hackers who steal information for criminal purposes.

**Surveillance** has expanded dramatically in the digital age. Governments can track citizens' locations through their phones, monitor their communications, and use facial recognition to identify people in public spaces. Some argue that surveillance is necessary for security, that giving up some privacy is the price of protection from crime and terrorism. Others argue that mass surveillance is a violation of fundamental rights, that it creates a "chilling effect" where people censor themselves because they know they are being watched.

The concept of **informed consent** is central to the privacy debate. When you agree to a social media platform's terms of service, you are technically giving consent to their data practices. But can consent be truly "informed" when the terms of service are hundreds of pages long, written in legal language, and presented as a take-it-or-leave-it offer? Most people click "agree" without reading a word, and companies depend on this.

**The right to be forgotten** is an interesting concept that has gained legal recognition in some countries. It argues that individuals should be able to request that outdated or irrelevant information about them be removed from search results. This right balances personal privacy against the public interest in accessible information.`,
    },
    {
      id: 'engelsk-10-27-n-section3',
      type: 'text',
      content: `## The Digital Divide: Inequality in the Connected World

While some people worry about having too much technology in their lives, others struggle to access it at all. The **digital divide** is the gap between those who have access to digital technology and the internet and those who do not.

This divide operates at multiple levels. **Globally**, billions of people lack reliable internet access. While someone in Oslo can stream video on their phone, someone in rural sub-Saharan Africa may have no internet access at all. This is not just an inconvenience. In an increasingly digital world, lack of internet access means lack of access to education, employment, healthcare, government services, and information.

**Within countries**, the digital divide often mirrors existing inequalities. In both wealthy and poor nations, access to technology tends to follow lines of income, education, age, geography (urban vs. rural), and sometimes race and gender. COVID-19 exposed this starkly when schools moved online: students without computers or internet at home were simply cut off from education.

The divide is not just about access to hardware and connectivity. **Digital literacy**, the ability to use technology effectively and critically, is equally important. Having a smartphone means little if you cannot evaluate the reliability of online information, protect your personal data, or use digital tools for education and employment.

Bridging the digital divide requires both infrastructure (building networks, providing devices) and education (teaching digital skills). Some argue that internet access should be recognised as a human right, as fundamental as access to water or electricity. Whether or not this view prevails legally, the practical importance of digital access in the modern world is undeniable.

The digital divide also intersects with the other ethical issues we have discussed. AI bias affects marginalised communities disproportionately. Privacy violations impact vulnerable populations more severely. Misinformation spreads more easily in communities with lower digital literacy. Addressing the digital divide is therefore not just a matter of fairness but a prerequisite for addressing many other technological challenges.`,
    },
    {
      id: 'engelsk-10-27-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-27-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on digital privacy and the digital divide:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-27-n-quiz2-q0',
            task: 'Why is "informed consent" problematic in digital privacy?',
            options: [
              { id: 'a', text: 'Because nobody uses social media', isCorrect: false },
              { id: 'b', text: 'Because terms of service are too long, too complex, and presented as take-it-or-leave-it', isCorrect: true },
              { id: 'c', text: 'Because consent is never required online', isCorrect: false },
              { id: 'd', text: 'Because only children use the internet', isCorrect: false },
            ],
            solution: 'True "informed consent" requires that people understand what they are agreeing to. But terms of service are often hundreds of pages of legal language, presented as a non-negotiable condition of use. Most people agree without reading, which companies rely on.',
          },
          {
            id: 'engelsk-10-27-n-quiz2-q1',
            task: 'What is the "digital divide"?',
            options: [
              { id: 'a', text: 'The space between a keyboard and a screen', isCorrect: false },
              { id: 'b', text: 'The gap between those who have access to digital technology and the internet and those who do not', isCorrect: true },
              { id: 'c', text: 'The difference between Apple and Android', isCorrect: false },
              { id: 'd', text: 'The time zone difference between countries', isCorrect: false },
            ],
            solution: 'The digital divide is the gap in access to technology and the internet. It operates globally (between countries) and within countries (along lines of income, education, geography, and other factors). It affects access to education, employment, and services.',
          },
          {
            id: 'engelsk-10-27-n-quiz2-q2',
            task: 'Why does the digital divide matter beyond just convenience?',
            options: [
              { id: 'a', text: 'It does not matter; the internet is just for entertainment', isCorrect: false },
              { id: 'b', text: 'In an increasingly digital world, lack of access means exclusion from education, employment, healthcare, and information', isCorrect: true },
              { id: 'c', text: 'Only because it affects social media usage', isCorrect: false },
              { id: 'd', text: 'Because everyone needs to play video games', isCorrect: false },
            ],
            solution: 'In a world where education, employment, healthcare, government services, and essential information are increasingly digital, lacking internet access means lacking access to the basic tools of modern life.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-27-n-summary',
      type: 'text',
      content: `## Summary

Technology raises ethical questions that technology alone cannot answer. Your generation will need to grapple with these questions.

**Artificial intelligence** offers tremendous potential but raises concerns about bias (AI reproducing human prejudices), accountability (who is responsible for AI decisions?), the future of work, and the nature of creativity.

**Digital privacy** is under pressure from corporations, governments, and criminals. The concept of informed consent is challenged by impenetrable terms of service. Surveillance raises fundamental questions about the balance between security and freedom.

**The digital divide** separates those with access to technology from those without, mirroring and amplifying existing inequalities. Bridging it requires both infrastructure and digital literacy education.

These issues are interconnected: AI bias disproportionately affects those on the wrong side of the digital divide, and privacy violations hit vulnerable communities hardest. Understanding these connections is essential for thinking about technology ethically.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 28 NARRATIVE: Migration and Multiculturalism
// ============================================================================

export const CHAPTER_ENGELSK_10_28_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-28-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '28',
  title: 'Migration and Multiculturalism',
  subtitle: 'Narrativ versjon',
  description: 'Explore the forces that drive human migration, the challenges and rewards of cultural integration, and what it means to live in a multicultural society.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-28',
  content: [
    {
      id: 'engelsk-10-28-n-intro',
      type: 'text',
      content: `## A World in Motion

Humans have always moved. Long before there were nations, borders, or passports, our ancestors walked out of Africa and gradually populated every continent. Migration is not an exception to human experience; it is the human experience. Every person alive today is descended from migrants.

Yet migration remains one of the most debated topics in the modern world. It raises powerful questions about identity, belonging, culture, and what we owe to each other as human beings. Who has the right to live where? What happens when different cultures share the same space? How do societies balance the preservation of existing culture with openness to new influences?

In this chapter, we will explore why people migrate, the patterns of global migration, and the complex process of cultural integration. We will think about what multiculturalism means and whether diverse societies can thrive. These are questions with no easy answers, but understanding the vocabulary and arguments surrounding them is essential for participating in one of the most important conversations of our time.`,
    },
    {
      id: 'engelsk-10-28-n-section1',
      type: 'text',
      content: `## Why People Migrate: Push and Pull Factors

Migration scholars use a framework of **push and pull factors** to explain why people leave their homes and move elsewhere.

**Push factors** are conditions that drive people away from their current location. These include war and armed conflict, which have displaced millions in Syria, Ukraine, Afghanistan, and elsewhere. Political persecution drives people to seek asylum when their own governments threaten them for their beliefs, ethnicity, or identity. Economic hardship pushes people from places where there are no jobs or no way to earn a living wage. Environmental factors, including natural disasters, drought, and the increasing effects of climate change, are becoming a major driver of migration. Sometimes push factors combine: a country experiencing both drought and conflict creates overwhelming pressure to leave.

**Pull factors** are conditions that attract people to a new location. Economic opportunity is the most powerful pull factor. People move where they can find work, earn more, and build better lives for their families. Political stability and freedom attract those fleeing repression. Educational opportunities draw students from around the world. Family reunification pulls people to places where their relatives have already settled. Cultural attractions, including language, community, and lifestyle, also play a role.

The distinction between **voluntary migration** (choosing to move for opportunity) and **forced migration** (fleeing because staying is impossible or dangerous) is important. Refugees, who flee persecution and war, are protected under international law, specifically the 1951 Refugee Convention. Economic migrants, who move to improve their circumstances, have fewer legal protections. But in reality, the line between voluntary and forced is often blurry. Is someone who migrates because climate change has destroyed their farmland a voluntary migrant or a forced one?

**Migration patterns** have shifted significantly over time. In the 19th and early 20th centuries, the major flow was from Europe to the Americas, Australia, and other colonial territories. Today, migration flows in multiple directions: from the Global South to the Global North, from rural areas to cities within countries, between developing nations, and increasingly as a result of climate displacement. Norway itself is both a country of emigration (many Norwegians emigrated to America in the 19th century) and immigration (Norway has received significant immigration in recent decades).`,
    },
    {
      id: 'engelsk-10-28-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on migration:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-28-n-quiz1-q0',
            task: 'What is the difference between "push" and "pull" factors in migration?',
            options: [
              { id: 'a', text: 'Push factors are physical and pull factors are emotional', isCorrect: false },
              { id: 'b', text: 'Push factors drive people away from their current location; pull factors attract them to a new one', isCorrect: true },
              { id: 'c', text: 'Push factors affect refugees while pull factors affect tourists', isCorrect: false },
              { id: 'd', text: 'There is no meaningful difference between them', isCorrect: false },
            ],
            solution: 'Push factors (war, persecution, poverty, environmental disaster) make people leave their homes. Pull factors (jobs, safety, education, family) attract them to specific destinations. Most migration involves a combination of both.',
          },
          {
            id: 'engelsk-10-28-n-quiz1-q1',
            task: 'Why is the line between voluntary and forced migration often blurry?',
            options: [
              { id: 'a', text: 'Because all migration is voluntary', isCorrect: false },
              { id: 'b', text: 'Because situations like climate-destroyed livelihoods combine elements of choice and necessity', isCorrect: true },
              { id: 'c', text: 'Because governments cannot tell the difference', isCorrect: false },
              { id: 'd', text: 'Because migration scholars have not studied this topic', isCorrect: false },
            ],
            solution: 'Someone who migrates because climate change destroyed their farmland is technically making a choice, but the alternative is starvation. Many real migration situations combine elements of both choice and necessity, making the distinction difficult.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-28-n-section2',
      type: 'text',
      content: `## Cultural Integration: Models and Realities

When migrants arrive in a new country, the question of **cultural integration** arises. How should newcomers and the existing society relate to each other? Several models have been proposed and debated.

**Assimilation** is the model where newcomers are expected to adopt the culture, language, and values of the host society, essentially becoming indistinguishable from the existing population. France has traditionally favoured this approach, emphasising a single national identity. Critics argue that forced assimilation erases cultural diversity and demands that migrants give up important parts of their identity.

**Multiculturalism** is the model where different cultural groups coexist within a society while maintaining their distinct identities. Canada and Australia have officially embraced multiculturalism. Supporters argue that diversity enriches society and that people should not have to abandon their culture to belong. Critics worry that multiculturalism can lead to parallel societies that never truly interact, or that it fails to establish shared values and common ground.

**Integration** is often presented as a middle path. It suggests that newcomers learn the language and basic norms of their new society while retaining their cultural identity. The host society, in turn, adapts and makes space for new influences. Integration is a two-way process that requires effort from both newcomers and the existing community.

In practice, no country follows any single model perfectly. Norway's approach to integration includes language requirements, introduction programmes for refugees, and ongoing debates about how to balance cultural preservation with social cohesion.

**Identity** for migrants and their children is often complex. Second-generation immigrants may feel pulled between two cultures: their parents' heritage culture and the culture of the country where they grew up. They might feel they do not fully belong in either world. This "between two worlds" experience is a rich source of literature, art, and music, and it is increasingly common as the world becomes more mobile and interconnected.

The contribution of migrants to their new societies is often underestimated. Migration brings new ideas, skills, cultural traditions, foods, music, and perspectives. Some of the most dynamic, creative cities in the world are those with the highest levels of cultural diversity. Immigration is not just a challenge to be managed; it is a source of innovation and cultural richness.`,
    },
    {
      id: 'engelsk-10-28-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-28-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on cultural integration:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-28-n-quiz2-q0',
            task: 'What is the key difference between assimilation and integration?',
            options: [
              { id: 'a', text: 'Assimilation is faster than integration', isCorrect: false },
              { id: 'b', text: 'Assimilation expects newcomers to abandon their culture; integration is a two-way process that allows cultural preservation', isCorrect: true },
              { id: 'c', text: 'Integration only applies to refugees', isCorrect: false },
              { id: 'd', text: 'There is no difference between them', isCorrect: false },
            ],
            solution: 'Assimilation is a one-way process where newcomers adopt the host culture. Integration is a two-way process where newcomers learn the new society\'s language and norms while retaining their cultural identity, and the host society adapts to make space for diversity.',
          },
          {
            id: 'engelsk-10-28-n-quiz2-q1',
            task: 'What is the "between two worlds" experience of second-generation immigrants?',
            options: [
              { id: 'a', text: 'Living in two different countries at the same time', isCorrect: false },
              { id: 'b', text: 'Feeling pulled between parents\' heritage culture and the culture of the country where they grew up', isCorrect: true },
              { id: 'c', text: 'Speaking two languages equally well', isCorrect: false },
              { id: 'd', text: 'Travelling frequently between two countries', isCorrect: false },
            ],
            solution: 'Second-generation immigrants often navigate between their parents\' cultural heritage and the culture of the country where they were born and raised. This can create feelings of not fully belonging in either world, but it is also a source of creative richness.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-28-n-summary',
      type: 'text',
      content: `## Summary

Migration is a fundamental part of the human experience, and understanding it is essential in our interconnected world.

**Push and pull factors** explain why people migrate: push factors (war, persecution, poverty, environmental disaster) drive people away; pull factors (jobs, safety, education, family) attract them to new places. The line between voluntary and forced migration is often blurry.

**Cultural integration** models range from assimilation (newcomers adopt host culture) to multiculturalism (groups maintain distinct identities) to integration (a two-way process of mutual adaptation). No single model is perfect, and most societies use elements of several.

Migration brings both challenges and enrichment. The "between two worlds" experience of immigrant children is a source of both difficulty and creative richness. Understanding migration vocabulary and concepts equips you to engage thoughtfully with one of the most important and sensitive topics of our time.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const ENGELSK_10_NARRATIV_DEL7_CHAPTERS = [
  CHAPTER_ENGELSK_10_23_NARRATIV,
  CHAPTER_ENGELSK_10_24_NARRATIV,
  CHAPTER_ENGELSK_10_25_NARRATIV,
  CHAPTER_ENGELSK_10_26_NARRATIV,
  CHAPTER_ENGELSK_10_27_NARRATIV,
  CHAPTER_ENGELSK_10_28_NARRATIV,
];
