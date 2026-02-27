/**
 * Tekstbok innhold for Engelsk 10. klasse - Narrativ versjon Del 2
 * Kapittel 5-7 (3 kapitler totalt)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 5 NARRATIVE: Intercultural Communication
// ============================================================================

export const CHAPTER_ENGELSK_10_5_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-5-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '5',
  title: 'Intercultural Communication',
  subtitle: 'Narrative Version',
  description: 'Explore how culture shapes communication, from cultural dimensions to the fascinating differences between British and American English.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden',
    'uttrykke seg med flyt og sammenheng, tilpasset formål og situasjon',
    'diskutere og reflektere over form, innhold og språklige virkemidler i engelskspråklige kulturelle uttrykksformer',
    'utforske og beskrive levemåter, tenkesett og kommunikasjonsmønstre i den engelskspråklige verden',
  ],
  linkedChapterId: 'engelsk-10-5',
  content: [
    {
      id: 'engelsk-10-5-n-intro',
      type: 'text',
      content: `## When Worlds Collide (Politely)

Imagine you are meeting a business partner for the first time. In Norway, you would probably shake hands firmly, maintain moderate eye contact, and get down to business fairly quickly. In Japan, you would bow, exchange business cards with both hands, and spend considerable time on small talk before any business discussion. In Brazil, you might receive a warm hug and spend the first hour sharing coffee and personal stories. In each case, the people involved are being perfectly polite -- by their own cultural standards.

Culture is like water to a fish: when you are surrounded by your own, you do not notice it. It is only when you encounter a different culture that the invisible rules governing your behavior become visible. Intercultural communication is the study of how these invisible rules differ and how to navigate those differences with skill and respect.

As a Norwegian student learning English, you are already straddling multiple cultures. English is not one culture -- it is a language shared by dozens of nations, each with its own customs, values, and communication styles. Understanding these differences does not just make you a better communicator -- it makes you a more empathetic and thoughtful person. Let us explore the cultural landscape of the English-speaking world.`,
    },
    {
      id: 'engelsk-10-5-n-section1',
      type: 'text',
      content: `## Cultural Dimensions: The Invisible Architecture of Society

Researchers have identified several dimensions along which cultures vary. These are not absolute categories but spectrums -- every individual is unique, but broad cultural tendencies do exist and understanding them helps us communicate more effectively.

**Individualism versus collectivism** is one of the most significant dimensions. Individualist cultures, like the United States, the United Kingdom, and Australia, emphasize personal achievement, independence, and self-expression. People in these cultures are expected to have personal opinions and express them. Collectivist cultures, like many in East Asia and parts of Africa, prioritize group harmony, loyalty, and consensus. Expressing a strong personal opinion that contradicts the group can be seen as disruptive rather than honest.

Consider how this affects communication. In an American classroom, students are encouraged to challenge the teacher, debate ideas, and stand out. In a Japanese classroom, students may prefer to listen, observe, and seek consensus before speaking. Neither approach is better -- they simply reflect different cultural values. When a Norwegian student in an international setting seems quiet, they may not be disengaged -- they may be following a cultural norm of listening before speaking.

**Direct versus indirect communication** is another critical dimension. Norwegians and Americans tend to be relatively direct: "I disagree" or "I need this by Friday." In many Asian, Middle Eastern, and some Southern European cultures, communication is more indirect: "That might be difficult" (meaning "no"), "I will try my best" (meaning "it probably will not happen"), or "Perhaps we should consider other options" (meaning "your idea is not good"). Misunderstanding these signals can lead to frustration on both sides.

**Attitudes toward time** vary dramatically. In Germany, Switzerland, and Scandinavia, punctuality is a moral virtue. Showing up five minutes late to a meeting is disrespectful. In many Mediterranean and Latin American cultures, time is more fluid, relationships take priority over schedules, and arriving thirty minutes "late" is perfectly normal. These differences do not reflect laziness or rigidity -- they reflect fundamentally different values about what matters most: the clock or the human connection.

**Power distance** describes how a society handles inequality. In low power distance cultures like Norway, the relationship between a boss and employee is relatively informal. You call your teacher by first name, you can question authority, and hierarchy is downplayed. In high power distance cultures, authority figures command formal respect, titles matter, and challenging a superior's decision is inappropriate. An American exchange student in Norway might be surprised by how casually teachers and students interact; a Norwegian exchange student in South Korea might be surprised by how formally.`,
    },
    {
      id: 'engelsk-10-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on cultural dimensions:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-5-n-quiz1-q0',
            task: 'In a culture with indirect communication, what might "That might be difficult" usually mean?',
            options: [
              { id: 'a', text: 'It will be challenging but possible', isCorrect: false },
              { id: 'b', text: 'No, it is not going to happen', isCorrect: true },
              { id: 'c', text: 'They need more time to decide', isCorrect: false },
              { id: 'd', text: 'They want you to help them with it', isCorrect: false },
            ],
            solution: 'In indirect communication cultures, "That might be difficult" is often a polite way of saying "no" without directly refusing. Understanding these indirect signals is essential for successful cross-cultural communication.',
          },
          {
            id: 'engelsk-10-5-n-quiz1-q1',
            task: 'Norway is considered a low power distance culture. What does this mean in practice?',
            options: [
              { id: 'a', text: 'Norwegians have less economic inequality than other countries', isCorrect: false },
              { id: 'b', text: 'Authority is informal, teachers are called by first name, and questioning authority is acceptable', isCorrect: true },
              { id: 'c', text: 'Norway has fewer politicians than other countries', isCorrect: false },
              { id: 'd', text: 'Norwegian children have more power than adults', isCorrect: false },
            ],
            solution: 'Low power distance means that relationships between authority figures and subordinates are relatively informal and equal. In Norway, this manifests in first-name usage with teachers and bosses, flat organizational structures, and acceptance of questioning authority.',
          },
          {
            id: 'engelsk-10-5-n-quiz1-q2',
            task: 'Why might an American student seem aggressive to a Japanese student in a classroom discussion?',
            options: [
              { id: 'a', text: 'Americans are naturally more aggressive than Japanese', isCorrect: false },
              { id: 'b', text: 'The American follows individualist norms of self-expression while the Japanese values group harmony', isCorrect: true },
              { id: 'c', text: 'The American student is trying to intimidate the Japanese student', isCorrect: false },
              { id: 'd', text: 'Japanese students are not interested in academic discussions', isCorrect: false },
            ],
            solution: 'This is a clash between individualist and collectivist communication norms. In individualist cultures like the US, expressing strong personal opinions and challenging ideas is valued. In collectivist cultures like Japan, group harmony is prioritized, and forceful self-expression can seem disruptive.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-5-n-section2',
      type: 'text',
      content: `## British vs. American English: One Language, Two Worlds

George Bernard Shaw allegedly said that Britain and America are "two countries separated by a common language." While this is an exaggeration, the differences between British English (BrE) and American English (AmE) are real, fascinating, and occasionally confusing.

**Vocabulary differences** are the most visible. A British person parks on the "ground floor," takes the "lift" to their "flat," puts shopping in the "boot" of the car, and eats "chips" with their fish. An American parks on the "first floor," takes the "elevator" to their "apartment," puts groceries in the "trunk," and eats "fries" with their fish. Most of the time, context makes the meaning clear, but some false friends can cause genuine confusion. If a British person says "I'll knock you up in the morning," they mean they will knock on your door to wake you up -- not the crude meaning this phrase carries in American English.

**Spelling differences** follow predictable patterns. Where Americans write "color," "honor," and "labor," the British write "colour," "honour," and "labour." Americans prefer "center," "theater," and "fiber," while the British write "centre," "theatre," and "fibre." Americans simplify to "traveled" and "canceled," while the British double the consonant: "travelled" and "cancelled." For the Norwegian exam, you should choose one system and be consistent -- mixing them is considered a mistake.

**Grammar differences** are subtler but real. Americans say "I already ate" (simple past), while the British prefer "I have already eaten" (present perfect). Americans say "the team is winning" (singular), while British English allows "the team are winning" (plural, treating the team as a collection of individuals). Americans "write someone," while the British "write to someone." These differences are minor, and both forms are correct -- but awareness helps you read and understand texts from both traditions.

**Pronunciation** varies enormously. The most famous difference is "rhoticity" -- whether you pronounce the 'r' after vowels. Most Americans say "car" with a clear 'r'; most British dialects drop it, producing "cah." But within each country, regional accents vary wildly. A person from Glasgow sounds nothing like someone from London, and a person from Texas sounds nothing like someone from New York. English is a family of accents, not a single voice.

For your studies and exams, the key principle is consistency. Choose British or American conventions and stick with them throughout a text. Both are equally valid, but mixing them signals a lack of awareness.`,
    },
    {
      id: 'engelsk-10-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on British vs. American English:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-5-n-quiz2-q0',
            task: 'Which sentence follows American English grammar conventions?',
            options: [
              { id: 'a', text: 'I have already finished my homework.', isCorrect: false },
              { id: 'b', text: 'I already finished my homework.', isCorrect: true },
              { id: 'c', text: 'The team are playing well today.', isCorrect: false },
              { id: 'd', text: 'I shall write to him tomorrow.', isCorrect: false },
            ],
            solution: 'American English prefers the simple past ("I already finished") over the present perfect ("I have already finished"), which is preferred in British English. Americans also treat collective nouns as singular ("the team is") and say "write someone" rather than "write to someone."',
          },
          {
            id: 'engelsk-10-5-n-quiz2-q1',
            task: 'What is the most important rule for Norwegian students when using British or American English on exams?',
            options: [
              { id: 'a', text: 'Always use British English because Norway is in Europe', isCorrect: false },
              { id: 'b', text: 'Always use American English because it is more modern', isCorrect: false },
              { id: 'c', text: 'Choose one system and be consistent throughout the text', isCorrect: true },
              { id: 'd', text: 'Use whichever spelling looks correct for each individual word', isCorrect: false },
            ],
            solution: 'Both British and American English are equally valid on Norwegian exams. The key is consistency -- choose one system and stick with it throughout your text. Mixing "colour" and "center" in the same essay signals a lack of awareness rather than bilingual flexibility.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-5-n-summary',
      type: 'text',
      content: `## Summary

**Intercultural communication** requires understanding the invisible rules that govern behavior in different cultures. Key cultural dimensions include **individualism vs. collectivism** (personal achievement vs. group harmony), **direct vs. indirect communication**, **attitudes toward time** (clock-focused vs. relationship-focused), and **power distance** (informal vs. formal authority relationships).

**British and American English** differ in vocabulary (flat/apartment, boot/trunk), spelling (-our/-or, -re/-er), grammar (present perfect vs. simple past), and pronunciation (rhoticity). Neither variety is superior -- they are equally valid. The essential rule for exams is **consistency**: choose one system and use it throughout your text. Understanding these cultural and linguistic differences makes you not just a better English speaker but a more effective communicator in our interconnected world.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6 NARRATIVE: Academic Writing
// ============================================================================

export const CHAPTER_ENGELSK_10_6_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-6-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '6',
  title: 'Academic Writing',
  subtitle: 'Narrative Version',
  description: 'Learn the conventions of academic English, from formal language and citations to building credible, well-structured arguments.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
    'bruke variert ordforråd og idiomatiske uttrykk tilpasset ulike kommunikasjonssituasjoner',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'bruke kilder kritisk og på en etterrettelig måte',
  ],
  linkedChapterId: 'engelsk-10-6',
  content: [
    {
      id: 'engelsk-10-6-n-intro',
      type: 'text',
      content: `## Writing Like a Scholar

There is a particular voice that you hear in textbooks, research papers, and serious journalism. It is confident but measured. It makes claims but supports them. It avoids slang and casual shortcuts. It sounds like an expert having a calm, reasoned conversation. This voice is academic writing, and learning to use it is one of the most valuable skills you will develop in school.

Academic writing is not about sounding complicated or using big words for their own sake. It is about precision, clarity, and credibility. When a scientist writes "The results suggest a correlation between sleep duration and academic performance," every word is chosen carefully. "Suggest" rather than "prove" (because science is cautious). "Correlation" rather than "connection" (because correlation is a precise statistical term). "Academic performance" rather than "doing well in school" (because precision matters in formal contexts).

You might wonder why this matters to a 10th-grader. The answer is that academic writing is the language of knowledge. It is how ideas are shared, debated, and refined across universities, institutions, and nations. Learning this language now gives you access to that conversation -- and prepares you for videregaende, higher education, and professional life. Let us break it down into manageable pieces.`,
    },
    {
      id: 'engelsk-10-6-n-section1',
      type: 'text',
      content: `## The Building Blocks of Academic Language

Academic writing follows conventions that distinguish it from casual writing. These conventions exist not to make writing harder but to make it clearer and more trustworthy.

**Formal vocabulary** replaces everyday words with more precise alternatives. Instead of "get," you write "obtain," "receive," or "acquire" -- whichever matches the exact meaning. Instead of "a lot of," you write "numerous," "considerable," or "extensive." Instead of "things," you specify: "factors," "elements," "aspects," or "considerations." This is not pretentiousness -- it is precision. Each formal word carries a specific shade of meaning that its casual equivalent lacks.

**Hedging language** is the art of being appropriately cautious. Academic writers rarely state things in absolutes. Instead of "Social media causes depression," they write "Social media may contribute to depression" or "Research suggests a link between social media use and depressive symptoms." Words like "may," "might," "could," "suggests," "indicates," "tends to," and "appears to" signal that the writer understands complexity and avoids oversimplification. This is not weakness -- it is intellectual honesty.

**Impersonal constructions** shift focus from the writer to the topic. Instead of "I think this is wrong," academic writing prefers "This claim is problematic" or "Evidence suggests otherwise." Instead of "You can see that...," write "It is evident that..." or "The data demonstrates..." This does not mean you can never use "I" -- some academic traditions allow it, especially when describing your own methodology or position. But the default is to let the evidence and reasoning speak rather than emphasizing who is speaking.

**Complex sentence structures** allow you to express nuanced ideas. Simple sentences are fine for stating facts, but complex sentences show the relationships between ideas. "Although the economy grew in 2023, the benefits were not evenly distributed, which led to increased social tension." This sentence contains a concession ("although"), a contrast (growth vs. uneven distribution), and a consequence ("which led to"). It communicates more meaning in one sentence than three simple ones would.

**Transitional phrases** connect ideas across paragraphs. "Furthermore" adds to a previous point. "However" introduces a contrasting idea. "Consequently" shows cause and effect. "In contrast" highlights a difference. "More importantly" signals a hierarchy. These phrases are the mortar between the bricks of your argument.`,
    },
    {
      id: 'engelsk-10-6-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on academic writing conventions:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-6-n-quiz1-q0',
            task: 'Which sentence best demonstrates appropriate hedging language?',
            options: [
              { id: 'a', text: 'Social media definitely causes depression in all teenagers.', isCorrect: false },
              { id: 'b', text: 'Research suggests that excessive social media use may contribute to depressive symptoms in adolescents.', isCorrect: true },
              { id: 'c', text: 'I personally believe social media is bad for mental health.', isCorrect: false },
              { id: 'd', text: 'Everyone knows that social media is harmful.', isCorrect: false },
            ],
            solution: 'Hedging language ("suggests," "may contribute") shows intellectual honesty by acknowledging uncertainty and complexity. It avoids absolute claims while still communicating the key finding. The qualifiers "excessive" and "adolescents" add precision.',
          },
          {
            id: 'engelsk-10-6-n-quiz1-q1',
            task: 'Why do academic writers use formal vocabulary instead of everyday words?',
            options: [
              { id: 'a', text: 'To impress readers with their intelligence', isCorrect: false },
              { id: 'b', text: 'Because academic institutions require it in their style guides', isCorrect: false },
              { id: 'c', text: 'Because formal words carry more precise shades of meaning', isCorrect: true },
              { id: 'd', text: 'Because everyday words are grammatically incorrect in academic contexts', isCorrect: false },
            ],
            solution: 'Formal academic vocabulary exists for precision, not pretentiousness. Words like "obtain," "receive," and "acquire" each carry different shades of meaning that the casual word "get" cannot distinguish. This precision makes academic writing clearer and more reliable.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-6-n-section2',
      type: 'text',
      content: `## Citations and Academic Integrity

When you use someone else's ideas, data, or words in your writing, you must give them credit. This is not just a rule -- it is a fundamental principle of honest scholarship. Citations serve three essential purposes: they give credit where it is due, they allow readers to verify your claims, and they show that your argument is built on a foundation of existing knowledge.

**In-text citations** appear within your text and point to a full reference. The most common formats for school use are the author-date system ("According to Smith (2022), social media use has increased by 40%") and the numbered footnote system. Your teacher will tell you which format to use. The key principle is consistency: whatever system you use, apply it the same way throughout your text.

**Paraphrasing** is restating someone else's idea in your own words. It is not enough to change a few words or rearrange the sentence -- you need to genuinely process the information and express it differently. Compare the original ("Social media algorithms create echo chambers by prioritizing content that aligns with users' existing beliefs") with a good paraphrase ("Research shows that the way social media platforms curate content tends to reinforce users' pre-existing viewpoints, limiting their exposure to diverse perspectives"). The paraphrase captures the same idea but uses entirely different words and sentence structure.

**Direct quotes** use the author's exact words, enclosed in quotation marks. Use direct quotes sparingly -- only when the original wording is particularly powerful, precise, or memorable. A text cluttered with long quotes suggests that you have not processed the material. Short, strategic quotes woven into your own sentences show that you understand the source and can integrate it into your argument.

**Plagiarism** is presenting someone else's work as your own, whether intentionally or accidentally. It includes copying text without citation, paraphrasing too closely, submitting someone else's work, and even self-plagiarism (reusing your own previous work without acknowledgment). In academic culture, plagiarism is one of the most serious offenses. The solution is simple: always cite your sources, always paraphrase genuinely, and always make clear which ideas are yours and which come from others.

The reference list at the end of your text provides full details for every source cited. A typical reference includes the author's name, publication year, title, and where it was published. Different citation styles (APA, MLA, Chicago) format these details differently, but the information is the same. Your teacher will guide you on which style to use.`,
    },
    {
      id: 'engelsk-10-6-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on citations and academic integrity:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-6-n-quiz2-q0',
            task: 'What makes a paraphrase academically acceptable versus too close to the original?',
            options: [
              { id: 'a', text: 'Changing at least three words in the original sentence', isCorrect: false },
              { id: 'b', text: 'Using entirely different words and sentence structure while preserving the original meaning', isCorrect: true },
              { id: 'c', text: 'Adding "According to..." before the original sentence', isCorrect: false },
              { id: 'd', text: 'Making the paraphrase shorter than the original', isCorrect: false },
            ],
            solution: 'A genuine paraphrase requires you to process the original information and express it in entirely different words and sentence structure. Simply swapping a few synonyms or rearranging clauses is considered "patchwriting" and is a form of plagiarism, even with a citation.',
          },
          {
            id: 'engelsk-10-6-n-quiz2-q1',
            task: 'When should you use a direct quote rather than paraphrasing?',
            options: [
              { id: 'a', text: 'Whenever you want to reach the required word count', isCorrect: false },
              { id: 'b', text: 'When the original wording is particularly powerful, precise, or memorable', isCorrect: true },
              { id: 'c', text: 'When you do not understand the source well enough to paraphrase', isCorrect: false },
              { id: 'd', text: 'When the source is from a famous author', isCorrect: false },
            ],
            solution: 'Direct quotes should be used sparingly and strategically -- only when the exact wording adds something that your paraphrase would lose. Overusing quotes suggests you have not processed the material. If you cannot paraphrase, that is a sign you need to understand the source better, not quote it.',
          },
          {
            id: 'engelsk-10-6-n-quiz2-q2',
            task: 'What are the three purposes of citations?',
            options: [
              { id: 'a', text: 'To impress the teacher, meet the word count, and avoid detention', isCorrect: false },
              { id: 'b', text: 'To follow rules, look professional, and fill the reference list', isCorrect: false },
              { id: 'c', text: 'To give credit, allow verification, and show your argument builds on existing knowledge', isCorrect: true },
              { id: 'd', text: 'To prove you read the sources, avoid plagiarism, and demonstrate research skills', isCorrect: false },
            ],
            solution: 'Citations serve three essential purposes: they give credit to original authors, they allow readers to verify your claims by finding the original sources, and they demonstrate that your argument is grounded in a foundation of established research and knowledge.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-6-n-summary',
      type: 'text',
      content: `## Summary

**Academic writing** is characterized by precision, formality, and credibility. Its conventions include **formal vocabulary** for precision, **hedging language** for intellectual honesty, **impersonal constructions** to focus on evidence rather than the writer, **complex sentence structures** for nuanced ideas, and **transitional phrases** to connect arguments.

**Citations** are fundamental to academic integrity. They give credit, enable verification, and ground your argument in existing knowledge. Master the art of **paraphrasing** (using entirely different words and structure), use **direct quotes** sparingly and strategically, and always cite your sources to avoid **plagiarism**. Academic writing is not about sounding impressive -- it is about communicating clearly, honestly, and with authority.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7 NARRATIVE: Debating and Argumentation
// ============================================================================

export const CHAPTER_ENGELSK_10_7_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-7-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '7',
  title: 'Debating and Argumentation',
  subtitle: 'Narrative Version',
  description: 'Master the art of constructing arguments, anticipating counter-arguments, and recognizing logical fallacies.',
  estimatedMinutes: 35,
  competenceGoals: [
    'lytte til og forstå ulike varianter av engelsk og bruke et variert ordforråd',
    'uttrykke seg med flyt og sammenheng, tilpasset formål og situasjon',
    'diskutere og argumentere for ulike synspunkter på tvers av kulturer og fagområder',
    'bruke retoriske virkemidler og tilpasse språket til ulike formål',
  ],
  linkedChapterId: 'engelsk-10-7',
  content: [
    {
      id: 'engelsk-10-7-n-intro',
      type: 'text',
      content: `## The Power of a Well-Made Argument

Every day, someone is trying to convince you of something. Advertisements tell you to buy products. Politicians ask for your trust. Friends argue about which movie to watch. Your parents explain why you should do your homework before gaming. You yourself try to persuade others -- to agree with your opinion, to change plans, to see things your way. Argumentation is not just an academic skill; it is woven into the fabric of daily life.

But there is a vast difference between arguing effectively and simply arguing loudly. The person who wins a debate is not the one who shouts the most -- it is the one who presents the strongest evidence, anticipates objections, and remains logically consistent. A well-constructed argument can change minds, inspire action, and advance understanding. A poorly constructed one, no matter how passionately delivered, crumbles under scrutiny.

The ancient Greeks understood this. They developed rhetoric -- the art of persuasion -- as a core subject in education, right alongside mathematics and philosophy. They believed that a citizen who could not argue effectively could not participate meaningfully in democracy. Two thousand years later, this remains true. In a world overflowing with competing claims and opinions, the ability to construct and evaluate arguments is a superpower.

Let us build that superpower together.`,
    },
    {
      id: 'engelsk-10-7-n-section1',
      type: 'text',
      content: `## Building Strong Arguments: Claim, Evidence, Reasoning

Every argument has three essential components, often called the C.E.R. framework: Claim, Evidence, and Reasoning.

The **claim** is your position -- the statement you want your audience to accept. A strong claim is specific, debatable, and significant. "School lunches should be free for all students in Norway" is a strong claim. "Food is important" is not -- it is too obvious to be debatable. "Everything about school is wrong" is not -- it is too vague to argue effectively.

**Evidence** is the support for your claim. It can take many forms: statistics ("A 2023 study found that 15% of Norwegian students skip lunch due to cost"), expert testimony ("According to nutritionist Dr. Hansen, children who eat regular meals show improved concentration"), examples ("In Finland, where school lunches are free, student performance has consistently ranked among the highest globally"), and logical reasoning. The strongest arguments use multiple types of evidence, because different types appeal to different people.

**Reasoning** is the bridge between your evidence and your claim. It explains why your evidence supports your position. This is where many students go wrong -- they present a claim and drop in evidence, but never explain the connection. "School lunches should be free. A study found that 15% of students skip lunch." The reader thinks: So what? The reasoning fills the gap: "When students skip meals due to cost, their ability to concentrate decreases, leading to lower academic achievement. Free lunches would eliminate this barrier, ensuring that no student's learning suffers because of their family's financial situation."

A complete argument looks like this: Claim (what you believe), Evidence (what supports it), Reasoning (why the evidence matters). Stack several of these together, and you have a compelling case.

When organizing multiple arguments, put your second-strongest point first, your weakest points in the middle, and your strongest point last. This is called the "nestling order" -- readers remember beginnings and endings most vividly, so place your most powerful material where it will have the greatest impact.`,
    },
    {
      id: 'engelsk-10-7-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on building arguments:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-7-n-quiz1-q0',
            task: 'What is the role of "reasoning" in the C.E.R. framework?',
            options: [
              { id: 'a', text: 'To restate the claim in different words', isCorrect: false },
              { id: 'b', text: 'To present additional evidence', isCorrect: false },
              { id: 'c', text: 'To explain why the evidence supports the claim', isCorrect: true },
              { id: 'd', text: 'To introduce counter-arguments', isCorrect: false },
            ],
            solution: 'Reasoning is the bridge between evidence and claim. It explains the logical connection -- why the evidence you have presented actually supports the position you are arguing for. Without reasoning, evidence is just information that floats without purpose.',
          },
          {
            id: 'engelsk-10-7-n-quiz1-q1',
            task: 'In the "nestling order" for organizing arguments, where should your strongest point go?',
            options: [
              { id: 'a', text: 'First, to grab attention immediately', isCorrect: false },
              { id: 'b', text: 'In the middle, surrounded by supporting points', isCorrect: false },
              { id: 'c', text: 'Last, because readers remember endings most vividly', isCorrect: true },
              { id: 'd', text: 'It does not matter; all points carry equal weight', isCorrect: false },
            ],
            solution: 'The nestling order places the second-strongest point first, weaker points in the middle, and the strongest point last. This works because readers remember beginnings and endings most vividly, so your most powerful argument creates the lasting impression.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-7-n-section2',
      type: 'text',
      content: `## Counter-Arguments: Strengthening Your Position by Addressing Opposition

One of the most powerful moves in argumentation is the counter-argument -- acknowledging and addressing the opposing view. This might seem counterintuitive. Why would you bring up the other side's points when you are trying to win? Because it demonstrates intellectual honesty, shows that you have considered the issue from multiple angles, and allows you to preemptively dismantle objections.

The structure is straightforward: acknowledge the opposing view, then rebut it. Use phrases like "Some might argue that... However, this overlooks the fact that..." or "While it is true that... this does not negate the reality that..." or "Critics of this position point to... but a closer examination reveals..."

For example, if you are arguing for free school lunches, a counter-argument might be: "Opponents argue that free lunches would be too expensive for the government. While the initial cost would indeed be significant -- estimated at 3 billion kroner annually -- research from countries that have implemented similar programs shows that the investment pays for itself through improved academic outcomes, reduced healthcare costs, and greater economic productivity in the long run."

Notice what happened: we acknowledged the opposing view honestly ("the initial cost would indeed be significant"), then provided evidence that the long-term benefits outweigh the costs. We did not dismiss the concern -- we engaged with it seriously and showed why our position still holds.

Ignoring counter-arguments is a sign of weak thinking. If there is an obvious objection to your position and you do not address it, your audience will think of it themselves -- and wonder why you avoided it. By addressing it proactively, you control the narrative and demonstrate the strength of your case.`,
    },
    {
      id: 'engelsk-10-7-n-section3',
      type: 'text',
      content: `## Logical Fallacies: The Traps That Weaken Arguments

A logical fallacy is an error in reasoning that makes an argument invalid. Learning to recognize fallacies protects you from being persuaded by bad arguments and helps you avoid using them yourself.

**Ad hominem** attacks the person rather than the argument. "You cannot trust her opinion on climate change because she failed chemistry in school." The speaker's grades are irrelevant to the validity of the argument. Always evaluate the argument itself, not the person making it.

**Straw man** misrepresents someone's position to make it easier to attack. If someone argues for stricter gun control and you respond with "So you want to take away everyone's right to self-defense?" you have attacked a distorted version of their argument, not the actual one. Always address what people actually say, not a caricature of it.

**False dilemma** (or false binary) presents only two options when more exist. "Either we ban all social media or we accept that children will be harmed." In reality, there are many positions between total bans and no regulation at all. Be suspicious when someone presents a complex issue as having only two possible responses.

**Appeal to popularity** (ad populum) argues that something is true or good because many people believe it. "Millions of people believe this product works, so it must be effective." Popularity does not equal truth. At various points in history, most people believed the earth was flat, that certain races were inferior, and that smoking was harmless.

**Slippery slope** argues that one action will inevitably lead to an extreme consequence without showing the logical steps between them. "If we allow students to use calculators on math tests, eventually nobody will learn to do math at all, and society will collapse." Each step in this chain needs to be demonstrated, not assumed.

**Appeal to authority** cites an authority figure outside their area of expertise. A famous athlete endorsing a financial product, or a physicist commenting on biology, does not carry the same weight as an expert in the relevant field. Expertise in one area does not transfer to another.

When you spot a fallacy -- in a classmate's argument, a news article, or a politician's speech -- name it. "That is an ad hominem attack. Can we focus on the actual evidence?" This shifts the conversation from emotion to logic and demonstrates critical thinking.`,
    },
    {
      id: 'engelsk-10-7-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on counter-arguments and logical fallacies:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-7-n-quiz2-q0',
            task: '"If we let students choose their own seats, next they will want to choose their own teachers, then their own grades, and soon there will be no rules at all." What fallacy is this?',
            options: [
              { id: 'a', text: 'Ad hominem', isCorrect: false },
              { id: 'b', text: 'False dilemma', isCorrect: false },
              { id: 'c', text: 'Slippery slope', isCorrect: true },
              { id: 'd', text: 'Appeal to popularity', isCorrect: false },
            ],
            solution: 'This is a slippery slope fallacy. It assumes that one small action (choosing seats) will inevitably lead to increasingly extreme consequences (no rules at all) without demonstrating the logical connection between each step. Each step needs to be justified independently.',
          },
          {
            id: 'engelsk-10-7-n-quiz2-q1',
            task: 'Why does addressing counter-arguments actually strengthen your position?',
            options: [
              { id: 'a', text: 'Because it makes your text longer and more detailed', isCorrect: false },
              { id: 'b', text: 'Because it shows intellectual honesty and preemptively dismantles objections', isCorrect: true },
              { id: 'c', text: 'Because the exam requires at least one counter-argument', isCorrect: false },
              { id: 'd', text: 'Because it confuses the reader so they cannot disagree', isCorrect: false },
            ],
            solution: 'Addressing counter-arguments demonstrates that you have considered the issue from multiple angles. By acknowledging opposing views honestly and then rebutting them with evidence, you show intellectual honesty and control the narrative, making your overall argument stronger and more credible.',
          },
          {
            id: 'engelsk-10-7-n-quiz2-q2',
            task: '"You cannot support renewable energy -- you drove a car to work this morning!" What fallacy is this?',
            options: [
              { id: 'a', text: 'Straw man', isCorrect: false },
              { id: 'b', text: 'Ad hominem (specifically tu quoque -- "you too")', isCorrect: true },
              { id: 'c', text: 'False dilemma', isCorrect: false },
              { id: 'd', text: 'Appeal to authority', isCorrect: false },
            ],
            solution: 'This is an ad hominem fallacy, specifically the "tu quoque" (you too) variant, which attacks the person\'s consistency rather than their argument. Whether someone drove to work does not affect the validity of arguments for renewable energy. The argument should be evaluated on its own merits.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-7-n-summary',
      type: 'text',
      content: `## Summary

Effective argumentation rests on the **C.E.R. framework**: a specific **Claim**, supported by multiple types of **Evidence**, connected by clear **Reasoning**. Organize arguments using the nestling order -- second-strongest first, weakest in the middle, strongest last.

**Counter-arguments** strengthen your position by demonstrating intellectual honesty. Acknowledge opposing views, then rebut them with evidence. Ignoring obvious objections weakens your credibility.

**Logical fallacies** are errors in reasoning that invalidate arguments. Key fallacies include ad hominem (attacking the person), straw man (misrepresenting the argument), false dilemma (presenting only two options), appeal to popularity, slippery slope (assuming extreme consequences), and appeal to authority. Recognizing these traps protects you from bad arguments and helps you avoid making them yourself.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// FINAL EXPORT
// ============================================================================

export const ENGELSK_10_NARRATIV_DEL2_CHAPTERS = [
  CHAPTER_ENGELSK_10_5_NARRATIV,
  CHAPTER_ENGELSK_10_6_NARRATIV,
  CHAPTER_ENGELSK_10_7_NARRATIV,
];
