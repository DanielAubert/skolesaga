/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SECTION 4: International Communication
// Internasjonal engelsk (VG2/VG3)
// Chapters 4.1-4.5
// ============================================================================

// ============================================================================
// 4.1 Intercultural Communication
// ============================================================================

export const CHAPTER_INT_ENGELSK_4_1: TextbookChapter = {
  id: 'int-engelsk-4-1',
  courseId: 'int-engelsk',
  chapterNumber: '4.1',
  title: 'Intercultural Communication',
  description: 'Explore Hofstede\'s cultural dimensions, high- and low-context cultures, and strategies for developing cultural awareness in international settings.',
  estimatedMinutes: 22,
  content: [
    {
      id: 'ie-4-1-intro',
      type: 'text',
      content: `## Intercultural Communication

In a globalized world, the ability to communicate effectively across cultural boundaries is no longer optional -- it is essential. Intercultural communication studies how people from different cultural backgrounds interact, interpret messages, and negotiate meaning.

**Why It Matters:**
- Over 80% of Fortune 500 companies operate in multiple countries
- Misunderstandings rooted in cultural differences can derail business deals, diplomatic negotiations, and personal relationships
- Cultural awareness reduces conflict and builds trust

**Learning Objectives:**
- Understand Hofstede's six cultural dimensions
- Distinguish between high-context and low-context communication
- Recognize how cultural values shape communication styles
- Develop strategies for culturally sensitive interaction`,
    },
    {
      id: 'ie-4-1-def-1',
      type: 'definition',
      title: 'Hofstede\'s Cultural Dimensions',
      content: `**Geert Hofstede** (1928--2020) was a Dutch social psychologist who conducted one of the largest studies of cultural values in the workplace. His research, originally based on IBM employees in over 70 countries, identified six dimensions along which cultures vary:

**1. Power Distance (PDI)**
The degree to which less powerful members of a society accept that power is distributed unequally. High power distance cultures (e.g., Malaysia, Mexico) accept hierarchical order; low power distance cultures (e.g., Denmark, Norway) strive for equality.

**2. Individualism vs. Collectivism (IDV)**
Whether people define themselves primarily as individuals or as members of a group. The United States and the UK score high on individualism; Japan, South Korea, and many African nations emphasize collectivism.

**3. Masculinity vs. Femininity (MAS)**
"Masculine" cultures (Japan, Hungary) value competitiveness, achievement, and assertiveness. "Feminine" cultures (Sweden, Norway) emphasize cooperation, quality of life, and caring for the weak.

**4. Uncertainty Avoidance (UAI)**
How threatened members of a culture feel by ambiguous or unknown situations. Greece and Portugal score high (preferring rules and structure); Singapore and Denmark score low (tolerating ambiguity).

**5. Long-Term vs. Short-Term Orientation (LTO)**
Long-term oriented cultures (China, Japan) value perseverance and thrift. Short-term oriented cultures (USA, UK) focus on quick results and tradition.

**6. Indulgence vs. Restraint (IVR)**
Indulgent cultures (Mexico, Nigeria) allow relatively free gratification of desires. Restrained cultures (Russia, Pakistan) regulate gratification through strict social norms.`,
    },
    {
      id: 'ie-4-1-example-1',
      type: 'example',
      title: 'Example: Hofstede in Practice -- A Norwegian-Japanese Business Meeting',
      content: `Consider a Norwegian team negotiating a partnership with a Japanese firm.

**Power Distance:** The Norwegian team has a flat structure -- everyone speaks up, including junior members. The Japanese team is organized hierarchically; the most senior person speaks first, and younger members defer.

**Individualism vs. Collectivism:** The Norwegians make individual decisions quickly ("I think we should..."). The Japanese team needs time to reach consensus within their group before committing.

**Masculinity vs. Femininity:** Norway scores very low on masculinity. The Norwegian negotiators emphasize work-life balance and employee well-being. The Japanese counterparts emphasize long working hours and company loyalty.

**Uncertainty Avoidance:** Japan scores much higher. The Japanese team wants detailed contracts and specifications, while the Norwegians are comfortable with broader agreements and flexibility.

**Practical Outcome:** Without cultural awareness, the Norwegians might interpret the Japanese team's silence as disagreement, and the Japanese might view the Norwegians' informality as disrespectful. Understanding these dimensions prevents misinterpretation.`,
    },
    {
      id: 'ie-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of Hofstede\'s dimensions describes how comfortable a culture is with ambiguity and unstructured situations?',
        options: [
          { id: 'a', text: 'Power Distance', isCorrect: false },
          { id: 'b', text: 'Individualism vs. Collectivism', isCorrect: false },
          { id: 'c', text: 'Uncertainty Avoidance', isCorrect: true },
          { id: 'd', text: 'Long-Term vs. Short-Term Orientation', isCorrect: false },
        ],
        solution: 'Correct answer: c) Uncertainty Avoidance. This dimension measures how threatened people feel by ambiguous situations and how much they rely on rules, structures, and norms to reduce uncertainty. Countries like Greece and Japan score high, while Singapore and Denmark score low.',
      },
    },
    {
      id: 'ie-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Using Hofstede\'s dimensions, compare Norway and the United States. Identify at least three dimensions where they differ significantly and explain how these differences might affect communication between Norwegians and Americans.',
        hints: [
          'Think about individualism, masculinity, and power distance',
          'Consider concrete scenarios such as workplace meetings or social gatherings',
        ],
        solution: 'Both countries score high on individualism, but the US scores much higher on masculinity (competitive, success-oriented) while Norway scores very low (cooperative, egalitarian). The US has slightly higher power distance, meaning more deference to authority figures in workplaces. Norway scores higher on indulgence. These differences mean that Americans may seem more competitive and status-conscious to Norwegians, while Norwegians may appear overly casual or lacking ambition to Americans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-1-def-2',
      type: 'definition',
      title: 'High-Context and Low-Context Cultures',
      content: `**Edward T. Hall** (1914--2009), an American anthropologist, introduced the distinction between high-context and low-context communication in his 1976 book *Beyond Culture*.

**High-Context Communication:**
- Much of the meaning is implied, not stated explicitly
- Relies on shared understanding, nonverbal cues, and social context
- Indirect speech; "reading between the lines" is expected
- Relationships and trust are built before business is discussed
- Examples: Japan, China, Arab countries, Korea, many African cultures

**Low-Context Communication:**
- Meaning is conveyed primarily through explicit, direct words
- Messages are clear and unambiguous
- Contracts and written agreements are paramount
- Getting to the point quickly is valued
- Examples: Germany, Scandinavia, the United States, the Netherlands

**Key Insight:** Neither style is superior. Problems arise when a high-context communicator interacts with a low-context communicator without awareness of the difference. The high-context person may feel the other is rude and blunt; the low-context person may feel the other is evasive or unclear.

**Cultural Awareness** means recognizing your own communication style, understanding that others may operate differently, and adapting your approach to bridge the gap.`,
    },
    {
      id: 'ie-4-1-example-2',
      type: 'example',
      title: 'Example: "Yes" Does Not Always Mean "Yes"',
      content: `In low-context cultures like Germany or Norway, "yes" means agreement. In high-context cultures, however, "yes" can mean many things:

**Japanese "hai":**
- "Yes, I hear you" (acknowledgment, not agreement)
- "Yes, I understand what you are asking" (comprehension)
- "Yes, I will consider it" (not a commitment)

**Arab "inshallah" (God willing):**
- Can mean genuine agreement
- Can mean polite deflection ("perhaps, but probably not")
- Context, tone, and relationship determine the actual meaning

**A Real Scenario:**
An American executive presented a proposal to a Japanese team. The Japanese responded with nods and repeated "hai." The American flew home confident the deal was done. Weeks later, no contract arrived. The Japanese team had been expressing politeness and understanding, not acceptance. They had concerns they considered too sensitive to raise directly in the meeting.

**Lesson:** In cross-cultural communication, always confirm understanding through multiple channels. Ask open-ended follow-up questions rather than yes/no questions, and be attentive to what is NOT said as much as what IS said.`,
    },
    {
      id: 'ie-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-4-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Which of the following best describes a high-context communication culture?',
        options: [
          { id: 'a', text: 'Meaning is conveyed primarily through explicit, direct words', isCorrect: false },
          { id: 'b', text: 'Written contracts are more important than personal relationships', isCorrect: false },
          { id: 'c', text: 'Much of the meaning is implied and relies on shared understanding and nonverbal cues', isCorrect: true },
          { id: 'd', text: 'People are expected to get to the point as quickly as possible', isCorrect: false },
        ],
        solution: 'Correct answer: c) In high-context cultures, a significant portion of the message is embedded in the context -- body language, social status, shared history, and what is left unsaid. Japan, China, and many Arab countries are classic examples. Options a, b, and d describe low-context communication.',
      },
    },
    {
      id: 'ie-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Describe a situation where a misunderstanding could arise between a person from a high-context culture and a person from a low-context culture. Explain what each person might think and feel, and suggest how the misunderstanding could be prevented.',
        hints: [
          'Think about workplace, social, or diplomatic scenarios',
          'Consider how "indirect" messages could be misread as evasion or dishonesty',
        ],
        solution: 'A strong answer provides a specific scenario (e.g., a German manager giving direct critical feedback to a Chinese employee, who interprets it as a serious personal attack rather than constructive commentary). It explains the cultural logic behind each person\'s reaction and suggests strategies: the German could soften feedback with positive framing; the Chinese employee could learn that directness in German culture signals respect, not hostility.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-1-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**Hofstede's Cultural Dimensions** provide a framework for understanding how national cultures differ along six measurable axes: power distance, individualism, masculinity, uncertainty avoidance, long-term orientation, and indulgence.

**High-Context vs. Low-Context Communication** (Edward Hall) distinguishes between cultures that rely heavily on implicit meaning and shared context versus cultures that value explicit, direct verbal expression.

**Cultural Awareness** is the ability to recognize one's own cultural assumptions and to understand that others may operate from fundamentally different -- but equally valid -- frameworks.

**Key Vocabulary:**
- **Power distance** -- acceptance of unequal power distribution
- **Collectivism** -- identity defined through group membership
- **Uncertainty avoidance** -- discomfort with ambiguity
- **High-context** -- meaning embedded in context and nonverbal cues
- **Low-context** -- meaning conveyed through explicit words
- **Cultural dimensions** -- measurable aspects along which cultures vary`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay (300--400 words): Choose two countries from different parts of the world. Using Hofstede\'s dimensions and the high-context/low-context model, analyze how communication styles differ between them. Provide concrete examples of potential misunderstandings and suggest strategies for effective cross-cultural communication.',
        hints: [
          'Use specific dimension scores where possible',
          'Include at least one real-world example or scenario',
        ],
        solution: 'A strong essay selects two contrasting cultures (e.g., Japan and the USA, or Brazil and Germany), applies multiple theoretical frameworks with specific examples, and proposes practical strategies for bridging cultural gaps.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-4-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Norway scores very low on Hofstede\'s "Masculinity" dimension. Which of the following best reflects this?',
        options: [
          { id: 'a', text: 'Norwegians tend to be highly competitive and assertive in the workplace', isCorrect: false },
          { id: 'b', text: 'Norwegian culture emphasizes cooperation, equality, and quality of life over competition', isCorrect: true },
          { id: 'c', text: 'Norwegian men dominate positions of power in business and politics', isCorrect: false },
          { id: 'd', text: 'Norwegian society discourages emotional expression', isCorrect: false },
        ],
        solution: 'Correct answer: b) A low masculinity score (what Hofstede called a "feminine" culture) means the society values cooperation, modesty, caring for the weak, and quality of life. Norway consistently ranks among the most "feminine" cultures in Hofstede\'s model, which aligns with the Norwegian values of equality (likestilling) and consensus.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 4.2 Business English
// ============================================================================

export const CHAPTER_INT_ENGELSK_4_2: TextbookChapter = {
  id: 'int-engelsk-4-2',
  courseId: 'int-engelsk',
  chapterNumber: '4.2',
  title: 'Business English',
  description: 'Master formal register, professional email and letter writing, and the language of meetings and negotiations in international business contexts.',
  estimatedMinutes: 25,
  content: [
    {
      id: 'ie-4-2-intro',
      type: 'text',
      content: `## Business English: The Language of Global Commerce

English is the dominant language of international business. Whether you are writing a proposal, conducting a meeting, or negotiating a deal, the ability to use English professionally and persuasively is a critical skill.

**Why Business English Matters:**
- English is the official or working language of most multinational corporations
- Over 1.75 billion people use English at a professional level
- Poor communication costs businesses billions annually in lost deals and misunderstandings

**Learning Objectives:**
- Understand formal register and when to use it
- Write professional emails and formal letters
- Use appropriate language for meetings and presentations
- Apply negotiation vocabulary and strategies`,
    },
    {
      id: 'ie-4-2-def-1',
      type: 'definition',
      title: 'Formal Register in Business Communication',
      content: `**Register** refers to the level of formality in language use. Business English typically requires a more formal register than everyday conversation.

**Informal vs. Formal:**
| Informal | Formal |
|----------|--------|
| Thanks for getting back to me | Thank you for your prompt response |
| I need this ASAP | I would appreciate receiving this at your earliest convenience |
| Sorry about the mix-up | I apologize for the misunderstanding |
| Let's set up a meeting | I would like to propose a meeting |
| Can't make it | I regret that I am unable to attend |
| FYI | For your information / Please be advised |

**Key Principles of Formal Register:**
- **Avoid contractions:** Use "I would" instead of "I'd," "cannot" instead of "can't"
- **Use passive voice strategically:** "The report was completed" (formal) vs. "I finished the report" (informal)
- **Choose Latinate vocabulary:** "commence" vs. "start," "terminate" vs. "end," "require" vs. "need"
- **Hedge appropriately:** "It would appear that..." rather than "Obviously..."
- **Avoid slang and idioms:** Not everyone shares the same cultural references`,
    },
    {
      id: 'ie-4-2-example-1',
      type: 'example',
      title: 'Example: Professional Email Structure',
      content: `**Subject line:** Clear and specific (e.g., "Q3 Budget Proposal -- Review Requested by 15 March")

**Structure of a Formal Business Email:**

---

**To:** j.tanaka@globalcorp.jp
**Subject:** Follow-Up on Partnership Proposal -- Action Required

Dear Ms. Tanaka,

Thank you for taking the time to meet with our team on 12 February. We greatly appreciated the opportunity to discuss the proposed partnership between GlobalCorp and NordicTech.

Following our discussion, I am writing to confirm the key points we agreed upon:

1. Both parties will conduct internal feasibility reviews by 1 March.
2. A follow-up meeting will be scheduled for the week of 10 March.
3. NordicTech will prepare a revised cost estimate by 28 February.

Please do not hesitate to contact me if you have any questions or require additional information. I look forward to our continued collaboration.

Kind regards,

Erik Hansen
Senior Project Manager
NordicTech AS
erik.hansen@nordictech.no
+47 123 45 678

---

**Key Features:**
- Professional greeting ("Dear Ms. Tanaka")
- Clear purpose stated early
- Numbered action items
- Polite closing with contact information
- No contractions, slang, or emojis`,
    },
    {
      id: 'ie-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following is the most appropriate opening for a formal business email to someone you have not met before?',
        options: [
          { id: 'a', text: 'Hey there!', isCorrect: false },
          { id: 'b', text: 'Dear Mr. / Ms. [Surname],', isCorrect: true },
          { id: 'c', text: 'Hi [First Name],', isCorrect: false },
          { id: 'd', text: 'To Whom This May Concern,', isCorrect: false },
        ],
        solution: 'Correct answer: b) "Dear Mr./Ms. [Surname]" is the standard formal opening when you know the recipient\'s name. "Hi [First Name]" is too informal for a first contact. "Hey there!" is never appropriate in formal business correspondence. "To Whom It May Concern" is used only when you do not know the recipient\'s name at all.',
      },
    },
    {
      id: 'ie-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Rewrite the following informal message as a professional business email. Include a subject line, proper greeting, body, and closing.\n\nInformal message: "Hey! Just wanted to check if you got my report. Need your feedback before Friday. Also, the boss wants to move the meeting to next week. Let me know what works. Thanks!"',
        hints: [
          'Replace contractions with full forms',
          'Use formal vocabulary and professional tone',
          'Structure the email with clear paragraphs',
        ],
        solution: 'Subject: Q4 Report Feedback Request and Meeting Reschedule\n\nDear [Name],\n\nI am writing to follow up on the quarterly report I submitted on [date]. I would be grateful if you could provide your feedback by Friday, [date].\n\nAdditionally, I would like to inform you that [Manager\'s name] has proposed rescheduling our meeting to the following week. Please let me know your availability so that we can confirm a suitable time.\n\nThank you for your time. I look forward to hearing from you.\n\nKind regards,\n[Your name]',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-2-def-2',
      type: 'definition',
      title: 'The Language of Meetings and Negotiations',
      content: `**Meeting Language:**

**Opening a meeting:**
- "Thank you all for being here. Shall we begin?"
- "The purpose of today's meeting is to..."
- "I would like to start by reviewing the agenda."

**Asking for opinions:**
- "What are your thoughts on this, Ms. Chen?"
- "Could you elaborate on that point?"
- "Does anyone have anything to add?"

**Agreeing and disagreeing:**
- Agreeing: "I fully support that proposal." / "That is an excellent point."
- Partial agreement: "I see your point, however..." / "While I agree in principle, I have some concerns about..."
- Disagreeing politely: "I appreciate your perspective, but I would like to suggest an alternative." / "With respect, I see this differently."

**Negotiation Language:**

**Making proposals:**
- "We would like to propose..."
- "Our suggestion would be to..."
- "What if we were to...?"

**Bargaining:**
- "Would you be willing to consider...?"
- "If we agree to X, would you be open to Y?"
- "We could offer... in exchange for..."

**Closing:**
- "I believe we have reached a consensus on..."
- "Shall we summarize the key points?"
- "The next steps will be..."`,
    },
    {
      id: 'ie-4-2-example-2',
      type: 'example',
      title: 'Example: A Negotiation Exchange',
      content: `**Context:** A Norwegian company (NordFish) is negotiating a supply contract with a British distributor (FreshUK).

**NordFish:** "Thank you for reviewing our proposal. We believe a three-year contract at the proposed volume would benefit both parties. Could you share your initial thoughts?"

**FreshUK:** "We appreciate the offer. However, we have some concerns about the pricing structure. The per-unit cost is approximately 8% above current market rates."

**NordFish:** "I understand your concern. Our pricing reflects the premium quality and sustainability certification of our products. However, we would be willing to discuss volume-based discounts."

**FreshUK:** "That sounds promising. If we were to commit to a 15% larger order, what kind of discount could you offer?"

**NordFish:** "For a 15% volume increase, we could offer a 5% reduction in the per-unit price. Additionally, we would be prepared to cover shipping costs for the first six months."

**FreshUK:** "That is a reasonable starting point. We would like to take this back to our team for discussion and schedule a follow-up meeting for next week."

**Notice:** Both sides use hedging language ("we would be willing," "could you share"), conditional structures ("if we were to commit"), and polite formulations throughout. No one says "no" directly.`,
    },
    {
      id: 'ie-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-4-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'In a formal business meeting, which of the following is the most appropriate way to disagree with a colleague\'s proposal?',
        options: [
          { id: 'a', text: 'That\'s wrong and won\'t work.', isCorrect: false },
          { id: 'b', text: 'I appreciate your perspective, but I would like to suggest an alternative approach.', isCorrect: true },
          { id: 'c', text: 'No way, that\'s a terrible idea.', isCorrect: false },
          { id: 'd', text: 'I don\'t really agree with that.', isCorrect: false },
        ],
        solution: 'Correct answer: b) In formal business settings, disagreement should be expressed diplomatically. Acknowledging the other person\'s viewpoint before presenting your own ("I appreciate your perspective, but...") shows respect while still allowing you to voice a different opinion. Options a and c are too blunt; option d is somewhat informal.',
      },
    },
    {
      id: 'ie-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write a formal business letter to a potential partner company proposing a collaboration. Your letter should include: a clear statement of purpose, at least two specific benefits of the partnership, and a call to action (e.g., requesting a meeting). Use appropriate formal register throughout.',
        hints: [
          'Use block format with sender and recipient addresses',
          'Include a clear subject line or reference',
          'Keep paragraphs focused on one idea each',
        ],
        solution: 'A strong letter includes proper formatting (addresses, date, reference), a professional greeting, a clear opening paragraph stating the purpose, body paragraphs outlining mutual benefits with specific details, and a closing paragraph with a call to action and polite sign-off.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-2-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**Formal Register** is essential in professional business communication. It involves avoiding contractions, using Latinate vocabulary, hedging assertions, and maintaining a respectful tone.

**Professional Emails** follow a clear structure: specific subject line, formal greeting, purpose stated early, action items, and polite closing.

**Meetings and Negotiations** require specialized vocabulary for opening discussions, expressing agreement or disagreement diplomatically, making proposals, bargaining, and reaching consensus.

**Key Vocabulary:**
- **Register** -- the level of formality in language
- **Hedging** -- using cautious language to soften statements
- **Call to action** -- a clear request for the recipient to do something
- **Consensus** -- general agreement among a group
- **Volume-based discount** -- reduced pricing for larger orders
- **Counterproposal** -- an alternative offer made in response to an initial proposal`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Role-play scenario: You represent a Norwegian technology startup. Write a complete negotiation dialogue (at least 10 exchanges) between your company and a potential investor from the United Kingdom. Use appropriate business vocabulary, hedging language, and formal register. Include: an opening, a discussion of terms, a point of disagreement, and a resolution.',
        hints: [
          'Use conditional language: "If we were to...", "Would you consider..."',
          'Include polite disagreement and compromise',
        ],
        solution: 'A strong dialogue demonstrates mastery of formal business English, uses varied negotiation phrases, shows both sides making concessions, and reaches a realistic outcome. Each speaker uses hedging and polite formulations consistently.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-4-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Which of the following closings is most appropriate for a formal business email?',
        options: [
          { id: 'a', text: 'Cheers!', isCorrect: false },
          { id: 'b', text: 'Later,', isCorrect: false },
          { id: 'c', text: 'Kind regards,', isCorrect: true },
          { id: 'd', text: 'XOXO,', isCorrect: false },
        ],
        solution: 'Correct answer: c) "Kind regards" is one of the most widely accepted formal closings in business English. Other appropriate alternatives include "Best regards," "Yours sincerely," and "Yours faithfully." "Cheers" is too informal for most formal correspondence, and options b and d are never appropriate in a business context.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 4.3 Diplomatic English
// ============================================================================

export const CHAPTER_INT_ENGELSK_4_3: TextbookChapter = {
  id: 'int-engelsk-4-3',
  courseId: 'int-engelsk',
  chapterNumber: '4.3',
  title: 'Diplomatic English',
  description: 'Explore the specialized language of diplomacy, the United Nations, euphemism, and the role of English in international organizations.',
  estimatedMinutes: 23,
  content: [
    {
      id: 'ie-4-3-intro',
      type: 'text',
      content: `## The Language of Diplomacy

Diplomatic English is a specialized register used in international relations, the United Nations, and interactions between nations. It is characterized by extreme precision, deliberate ambiguity, and strategic use of euphemism.

**Why Diplomatic Language Is Unique:**
- Every word in a diplomatic statement is carefully chosen
- Ambiguity can be intentional, allowing parties to "save face"
- Understatement is preferred over direct confrontation
- Language must be translatable and culturally neutral

**Learning Objectives:**
- Understand how language functions in diplomatic contexts
- Recognize and analyze euphemism in political and diplomatic speech
- Identify the structure and language of the United Nations
- Evaluate how word choice shapes international discourse`,
    },
    {
      id: 'ie-4-3-def-1',
      type: 'definition',
      title: 'UN Language and Diplomatic Vocabulary',
      content: `**The United Nations** uses six official languages (Arabic, Chinese, English, French, Russian, Spanish), but English serves as the primary working language for most UN business.

**Key Diplomatic Terms:**
- **Resolution** -- a formal decision by the UN General Assembly or Security Council
- **Sovereignty** -- a state's right to govern itself without external interference
- **Multilateral** -- involving three or more parties or nations
- **Bilateral** -- involving two parties or nations
- **Sanctions** -- measures imposed to pressure a state (economic, diplomatic, military)
- **Ratification** -- formal approval of a treaty by a state
- **Preamble** -- the introductory statement of a treaty or resolution, setting out its purpose
- **Non-binding** -- advisory rather than legally obligatory
- **Veto** -- the power of the five permanent Security Council members (P5) to block any substantive resolution

**Diplomatic Speech Acts:**
| What diplomats say | What they often mean |
|---|---|
| "We note with concern..." | We disapprove strongly |
| "Constructive dialogue" | Significant disagreement exists |
| "We reserve our position" | We will not commit to this |
| "Frank and candid exchange" | Heated argument |
| "The matter is under review" | No decision will be made soon |
| "We urge all parties to exercise restraint" | We think someone is about to do something dangerous |`,
    },
    {
      id: 'ie-4-3-example-1',
      type: 'example',
      title: 'Example: Decoding a UN Press Statement',
      content: `**Original Statement:**
"The Security Council held a frank and comprehensive exchange of views on the deteriorating situation in [Region X]. Members expressed deep concern over the escalating humanitarian crisis and urged all parties to exercise maximum restraint. The Council called upon all stakeholders to engage in inclusive and meaningful dialogue with a view to reaching a peaceful and sustainable resolution. The members reaffirmed their commitment to the sovereignty, independence, and territorial integrity of [Country Y]."

**Decoded Translation:**
- "Frank and comprehensive exchange" = The members argued fiercely and could not agree
- "Deteriorating situation" = Things are getting significantly worse
- "Deep concern" = Strong disapproval; stronger than "concern" but weaker than "condemnation"
- "Urged all parties to exercise maximum restraint" = At least one side is using or threatening violence
- "Inclusive and meaningful dialogue" = Someone is being excluded from negotiations
- "With a view to reaching" = We hope for this outcome but cannot guarantee it
- "Reaffirmed their commitment to sovereignty" = There is a threat to the country's borders or independence

**Why This Matters:**
Diplomatic language uses graduated intensity. Understanding the scale -- from "noted" (weakest) through "concerned," "deeply concerned," "gravely concerned," to "condemned" (strongest) -- is essential for interpreting international statements accurately.`,
    },
    {
      id: 'ie-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'In UN diplomatic language, which expression typically indicates the strongest disapproval?',
        options: [
          { id: 'a', text: 'The Council noted the situation', isCorrect: false },
          { id: 'b', text: 'The Council expressed concern', isCorrect: false },
          { id: 'c', text: 'The Council condemned the actions', isCorrect: true },
          { id: 'd', text: 'The Council called for dialogue', isCorrect: false },
        ],
        solution: 'Correct answer: c) In the graduated scale of diplomatic disapproval, "condemned" is the strongest term. The scale typically runs: noted -> expressed concern -> expressed deep/grave concern -> deplored -> condemned. "Condemned" is reserved for the most serious violations and represents the harshest language used in formal diplomatic statements.',
      },
    },
    {
      id: 'ie-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain what "euphemism" means and give three examples of euphemism in diplomatic or political language. For each example, explain what the euphemistic phrase really means and why the speaker chose to use indirect language.',
        hints: [
          'Think about terms used for war, economic problems, and political failures',
          'Consider why governments prefer vague language in sensitive situations',
        ],
        solution: 'Euphemism is the substitution of a mild or indirect expression for one considered too harsh or blunt. Examples: "Collateral damage" (civilian casualties in war); "enhanced interrogation techniques" (torture); "negative growth" (economic recession). Governments use euphemism to reduce public alarm, avoid accountability, make unpleasant realities more palatable, and maintain diplomatic relationships.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-3-def-2',
      type: 'definition',
      title: 'International Organizations and Their Language',
      content: `English plays a central role in the world's major international organizations:

**The United Nations (UN)**
- Founded: 1945
- Members: 193 states
- Key bodies: General Assembly, Security Council, ECOSOC, ICJ, Secretariat
- Language: Resolutions use extremely precise legal English

**The European Union (EU)**
- 24 official languages, but English remains the most-used working language even after Brexit
- EU English has developed its own distinctive style ("Eurojargon")
- Examples: "subsidiarity," "acquis communautaire," "comitology"

**NATO (North Atlantic Treaty Organization)**
- English and French are official languages
- English dominates operational communication
- Military terminology: "rules of engagement," "theater of operations," "mission creep"

**The World Health Organization (WHO)**
- English as primary working language
- Diplomatic language applied to health: "public health emergency of international concern" (PHEIC)

**The World Trade Organization (WTO)**
- English, French, Spanish as official languages
- Trade-specific vocabulary: "tariff," "dumping," "most-favoured-nation status," "subsidy"

**Key Insight:** Each organization has developed its own specialized vocabulary. Effective international communication requires familiarity not only with general English but with the specific register of the relevant institution.`,
    },
    {
      id: 'ie-4-3-example-2',
      type: 'example',
      title: 'Example: Comparing Diplomatic Styles',
      content: `Different countries have distinct diplomatic communication styles, even when using English:

**British Diplomacy:**
Known for understatement and indirectness. A British diplomat saying "I hear what you say" often means "I disagree and do not want to discuss it further." "With the greatest respect" frequently precedes a strong disagreement.

**American Diplomacy:**
More direct than British, but still employs strategic ambiguity. American diplomats tend to use phrases like "We stand with..." or "Let me be clear..." which signal firm positions.

**Norwegian Diplomacy:**
Norway is known for its "peace diplomacy" and facilitation role. Norwegian diplomatic language emphasizes inclusivity, dialogue, and consensus: "We believe all parties should have a seat at the table."

**Chinese Diplomacy:**
Historically characterized by formal, highly structured language. Phrases like "hurt the feelings of the Chinese people" carry specific political weight. Diplomatic statements often reference historical context extensively.

**A Comparative Example -- Expressing Displeasure:**
- British: "We are somewhat disappointed by the lack of progress."
- American: "Let me be frank: this is unacceptable."
- Norwegian: "We encourage all parties to renew their commitment to the agreed framework."
- Chinese: "This action seriously undermines mutual trust and bilateral relations."`,
    },
    {
      id: 'ie-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-4-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'What does the diplomatic phrase "a frank and candid exchange of views" typically imply?',
        options: [
          { id: 'a', text: 'The parties had a polite and productive conversation', isCorrect: false },
          { id: 'b', text: 'The parties had a heated disagreement', isCorrect: true },
          { id: 'c', text: 'The parties reached a historic agreement', isCorrect: false },
          { id: 'd', text: 'The meeting was brief and uneventful', isCorrect: false },
        ],
        solution: 'Correct answer: b) In diplomatic language, "frank and candid" is a euphemism for a serious or even heated disagreement. If the conversation had been genuinely productive, diplomats would use terms like "constructive," "fruitful," or "mutually beneficial." The word "frank" signals that uncomfortable truths were expressed, which in diplomatic culture typically means significant conflict.',
      },
    },
    {
      id: 'ie-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-4-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'You are a Norwegian diplomat at the UN. Draft a short diplomatic statement (100--150 words) responding to a fictitious humanitarian crisis in a neighboring region. Your statement should: express concern, call for action, and avoid directly blaming any specific party. Use appropriate diplomatic vocabulary and register.',
        hints: [
          'Use the graduated scale of diplomatic concern',
          'Reference sovereignty, dialogue, and international law',
          'Avoid informal language entirely',
        ],
        solution: 'A strong response uses phrases like "deeply concerned," "calls upon all parties," "in accordance with international humanitarian law," "urges restraint," and "reaffirms commitment to a peaceful resolution." It avoids naming specific parties as aggressors while still clearly signaling the severity of the situation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-3-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**Diplomatic English** is a specialized register characterized by precision, strategic ambiguity, euphemism, and graduated levels of intensity.

**The United Nations** and other international organizations have developed specific vocabularies and conventions. Understanding these is essential for interpreting international news and political statements.

**Euphemism** serves important diplomatic functions: it allows parties to express displeasure without provoking confrontation, enables face-saving, and keeps channels of communication open.

**Different national diplomatic styles** exist even when all parties use English, reflecting underlying cultural values about directness, hierarchy, and conflict management.

**Key Vocabulary:**
- **Euphemism** -- substituting a mild expression for a harsh one
- **Resolution** -- a formal decision by an international body
- **Sovereignty** -- a nation's right to self-governance
- **Sanctions** -- punitive measures against a state
- **Veto** -- the power to block a decision
- **Ratification** -- formal approval of a treaty`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-4-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research project: Find a real UN Security Council resolution or press statement from the past year. Analyze the language used: identify at least five examples of diplomatic vocabulary, explain what each phrase really means, and discuss why direct language was avoided. Present your findings in 300--400 words.',
        hints: [
          'UN press statements are available at un.org',
          'Look for the phrases discussed in this chapter',
        ],
        solution: 'A strong analysis identifies specific diplomatic phrases, accurately decodes their implied meaning, and explains the strategic reasons for using indirect language (face-saving, consensus-building, legal precision, maintaining relationships).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-4-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Which of the following terms describes the power held by the five permanent members of the UN Security Council to block any substantive resolution?',
        options: [
          { id: 'a', text: 'Ratification', isCorrect: false },
          { id: 'b', text: 'Sanction', isCorrect: false },
          { id: 'c', text: 'Veto', isCorrect: true },
          { id: 'd', text: 'Preamble', isCorrect: false },
        ],
        solution: 'Correct answer: c) The veto power allows any of the five permanent members (the US, UK, France, Russia, and China -- known as the P5) to block any substantive Security Council resolution. This power has been controversial since the UN\'s founding in 1945, as it means a single country can prevent action even when all other members agree.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 4.4 Non-Verbal Communication Across Cultures
// ============================================================================

export const CHAPTER_INT_ENGELSK_4_4: TextbookChapter = {
  id: 'int-engelsk-4-4',
  courseId: 'int-engelsk',
  chapterNumber: '4.4',
  title: 'Non-Verbal Communication Across Cultures',
  description: 'Examine how gestures, personal space, eye contact, and body language vary across cultures and can lead to misunderstandings.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'ie-4-4-intro',
      type: 'text',
      content: `## Beyond Words: Non-Verbal Communication

Research suggests that 60--93% of all communication is non-verbal. While spoken language can be translated, non-verbal signals often cannot -- and they vary dramatically across cultures. What is polite in one culture can be deeply offensive in another.

**Categories of Non-Verbal Communication:**
- Gestures (hand movements, head nods)
- Proxemics (personal space and distance)
- Oculesics (eye contact patterns)
- Haptics (touch behavior)
- Kinesics (body posture and movement)
- Chronemics (attitudes toward time)
- Paralanguage (tone, pitch, volume, silence)

**Learning Objectives:**
- Identify key differences in non-verbal communication across cultures
- Understand how gestures, space, and eye contact conventions vary
- Analyze real-world examples of cultural misunderstandings caused by non-verbal cues
- Develop strategies for navigating non-verbal differences`,
    },
    {
      id: 'ie-4-4-def-1',
      type: 'definition',
      title: 'Gestures and Their Cultural Meanings',
      content: `**Gestures are culturally specific.** A gesture that is friendly in one country can be offensive in another.

**The Thumbs-Up:**
- USA, Europe: Positive, "good," "OK"
- Middle East, West Africa, parts of South America: Offensive (similar to the middle finger)
- Japan: Can mean "five" or "man/boyfriend"

**The "OK" Sign (thumb and index finger forming a circle):**
- USA, UK: "OK," "fine," "perfect"
- Brazil, Germany: Obscene gesture
- Japan: Means "money" or "coins"
- France: Can mean "zero" or "worthless"

**Head Nodding and Shaking:**
- Most cultures: Nod = yes, shake = no
- Bulgaria, parts of India: Nod = no, shake or head wobble = yes/acknowledgment
- This can cause extreme confusion in international settings

**Pointing:**
- Western cultures: Pointing with the index finger is common
- Southeast Asia: Pointing with the index finger is rude; use an open palm or chin instead
- Many Indigenous cultures: Pointing with lips or eyes

**The "V" Sign (two fingers):**
- Palm outward: Victory/peace (most places)
- Palm inward (in the UK, Australia, Ireland): Deeply offensive

**Left Hand:**
- In many Middle Eastern, South Asian, and African cultures, the left hand is considered unclean
- Giving gifts, eating, or greeting with the left hand is impolite`,
    },
    {
      id: 'ie-4-4-example-1',
      type: 'example',
      title: 'Example: Personal Space -- The Invisible Bubble',
      content: `**Edward T. Hall** identified four zones of personal space in American culture:

1. **Intimate distance** (0--45 cm): Reserved for close relationships
2. **Personal distance** (45--120 cm): Conversations with friends
3. **Social distance** (120--360 cm): Professional and casual interactions
4. **Public distance** (360+ cm): Public speaking, strangers

**But these distances vary enormously across cultures:**

| Culture | Typical conversational distance |
|---------|-------------------------------|
| Scandinavian (Norway, Sweden) | 120--150 cm (large personal bubble) |
| North American | 90--120 cm |
| Western European (France, Italy) | 60--90 cm |
| Latin American | 50--70 cm |
| Middle Eastern | 30--60 cm |
| Japanese | 90--100 cm (but avoid direct facing) |

**A Classic Misunderstanding:**
At an international conference, a Brazilian delegate and a Norwegian delegate are having a conversation. The Brazilian keeps stepping closer (seeking comfortable conversational distance), and the Norwegian keeps stepping back. By the end of the conversation, they have "danced" across the entire room without either understanding why. The Brazilian feels the Norwegian is cold and distant; the Norwegian feels the Brazilian is aggressive and intrusive.

Neither is wrong -- they simply have different cultural norms for personal space.`,
    },
    {
      id: 'ie-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-4-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'In which of the following countries could giving a "thumbs up" gesture be considered offensive?',
        options: [
          { id: 'a', text: 'Canada', isCorrect: false },
          { id: 'b', text: 'Australia', isCorrect: false },
          { id: 'c', text: 'Iran', isCorrect: true },
          { id: 'd', text: 'Norway', isCorrect: false },
        ],
        solution: 'Correct answer: c) In Iran and several other Middle Eastern countries, the thumbs-up gesture is considered offensive -- roughly equivalent to "the finger" in Western cultures. In Canada, Australia, and Norway, it is a positive gesture meaning "good" or "OK." This is a classic example of how the same gesture can have completely opposite meanings in different cultures.',
      },
    },
    {
      id: 'ie-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Describe the concept of "proxemics" (personal space) and explain how cultural differences in personal space can lead to misunderstandings. Use the Norwegian-Brazilian example from the chapter or create your own scenario.',
        hints: [
          'Define all four zones of personal space',
          'Explain how different cultures have different default distances',
        ],
        solution: 'A complete answer defines proxemics (the study of how people use space), identifies Hall\'s four zones (intimate, personal, social, public), explains that comfortable distances vary by culture (e.g., Scandinavians prefer more space than Latin Americans), and provides a concrete example showing how these differences can cause one party to feel invaded and the other to feel rejected.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-4-def-2',
      type: 'definition',
      title: 'Eye Contact and Cultural Expectations',
      content: `**Eye contact** is one of the most powerful and culturally variable forms of non-verbal communication.

**Western Cultures (USA, UK, Northern Europe):**
- Direct eye contact signals confidence, honesty, and engagement
- Avoiding eye contact can be interpreted as dishonesty, shyness, or disrespect
- Moderate eye contact during conversation is expected

**East Asian Cultures (Japan, Korea, China):**
- Prolonged direct eye contact can be perceived as confrontational or disrespectful
- Looking slightly downward or away signals respect, especially toward elders or superiors
- Brief eye contact is made, but sustained staring is avoided

**Middle Eastern Cultures:**
- Extended eye contact between men signals sincerity and trust
- Eye contact between unrelated men and women may be considered inappropriate
- Context and gender dynamics heavily influence expectations

**Sub-Saharan African Cultures:**
- In many cultures, avoiding eye contact with elders or authority figures is a sign of respect
- Direct eye contact with a superior can be seen as challenging or disrespectful
- Rules vary significantly between ethnic groups and generations

**Latin American Cultures:**
- Eye contact is generally valued and signals attentiveness
- Comfortable with more sustained eye contact than Northern Europeans
- Gender and social status may modify norms

**A Dangerous Misinterpretation:**
A Western interviewer may assume that a job candidate from Japan or Nigeria who avoids eye contact is "untrustworthy" or "lacks confidence." In reality, the candidate may be showing deep respect. Cultural awareness can prevent unjust judgments.`,
    },
    {
      id: 'ie-4-4-example-2',
      type: 'example',
      title: 'Example: When Silence Speaks',
      content: `Silence is perhaps the most underappreciated form of non-verbal communication, and its meaning varies profoundly across cultures.

**Finland and Japan:**
Silence is comfortable and valued. A pause after someone speaks shows that you are thinking carefully about their words. Rushing to fill silence is considered impolite or shallow.

**The United States:**
Silence in conversation is uncomfortable. Americans tend to fill pauses quickly. Silence during a negotiation may be interpreted as disagreement or rejection.

**Arabic Cultures:**
Brief silences are normal, but prolonged silence can signal displeasure or that something is wrong.

**A Real Scenario:**
An American negotiator makes a proposal to a Finnish team. The Finns sit in silence for 30 seconds, considering the offer carefully. The American, interpreting the silence as a rejection, panics and immediately offers a discount. The Finns are surprised -- they were about to accept the original offer.

**Another Scenario:**
A British teacher asks a question in class. A Japanese exchange student remains silent. The teacher assumes the student does not know the answer. In reality, the student is demonstrating respect by not speaking hastily, and is waiting to be specifically called upon.

**Lesson:** Before interpreting silence, consider the cultural context. Silence can mean respect, contemplation, disagreement, comfort, or discomfort -- depending on who is being silent and where.`,
    },
    {
      id: 'ie-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-4-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'In many East Asian cultures, avoiding direct eye contact with an elder or superior is a sign of:',
        options: [
          { id: 'a', text: 'Dishonesty', isCorrect: false },
          { id: 'b', text: 'Boredom', isCorrect: false },
          { id: 'c', text: 'Respect', isCorrect: true },
          { id: 'd', text: 'Aggression', isCorrect: false },
        ],
        solution: 'Correct answer: c) In many East Asian cultures (Japan, Korea, China), lowering one\'s gaze or avoiding prolonged direct eye contact with someone of higher status is a sign of respect and deference. A Western observer might mistakenly interpret this as dishonesty or lack of confidence, which is why cultural awareness is so important.',
      },
    },
    {
      id: 'ie-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-4-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Think of a time when you experienced or observed a non-verbal communication difference (or imagine a plausible scenario). Describe what happened, explain the cultural backgrounds involved, and analyze what each party likely intended versus how it was received. Suggest how the situation could have been handled better.',
        hints: [
          'Consider gestures, personal space, eye contact, touch, or silence',
          'Focus on the gap between intention and perception',
        ],
        solution: 'A strong answer describes a specific scenario, identifies the non-verbal behavior in question, explains the cultural norms behind each party\'s behavior, analyzes the misunderstanding, and proposes practical strategies (e.g., asking questions, observing local norms, withholding judgment).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-4-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**Non-verbal communication** constitutes the majority of human communication and varies dramatically across cultures.

**Gestures** that are positive in one culture can be offensive in another. Never assume a gesture is universal.

**Personal space** (proxemics) norms range from very close (Middle Eastern, Latin American) to very distant (Scandinavian). Mismatched expectations cause discomfort on both sides.

**Eye contact** norms differ profoundly: direct eye contact signals respect in Western cultures but can signal disrespect or aggression in East Asian and many African cultures.

**Silence** is not empty -- it carries meaning that varies from culture to culture.

**Key Vocabulary:**
- **Proxemics** -- the study of personal space in communication
- **Kinesics** -- the study of body movement and posture
- **Oculesics** -- the study of eye contact in communication
- **Haptics** -- the study of touch in communication
- **Paralanguage** -- vocal elements beyond words (tone, pitch, volume, silence)
- **Ethnocentrism** -- judging other cultures by the standards of one's own`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-4-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Create a "Non-Verbal Communication Guide" for a Norwegian student spending a semester abroad in either Japan, Brazil, or the United Arab Emirates. Your guide (300--400 words) should cover: gestures to avoid, appropriate personal space, eye contact norms, attitudes toward silence, and any other relevant non-verbal differences. Include practical tips.',
        hints: [
          'Research the specific culture you choose',
          'Include both "dos" and "don\'ts"',
        ],
        solution: 'A strong guide is specific to the chosen country, covers multiple categories of non-verbal communication, provides practical advice, and explains the cultural reasoning behind the norms rather than just listing rules.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-4-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'The study of how people use physical space in communication is called:',
        options: [
          { id: 'a', text: 'Kinesics', isCorrect: false },
          { id: 'b', text: 'Haptics', isCorrect: false },
          { id: 'c', text: 'Proxemics', isCorrect: true },
          { id: 'd', text: 'Paralanguage', isCorrect: false },
        ],
        solution: 'Correct answer: c) Proxemics is the study of how people use and perceive space in communication, a term coined by Edward T. Hall. Kinesics is the study of body movement; haptics is the study of touch; and paralanguage refers to vocal elements like tone, pitch, and volume.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 4.5 Communication Strategies
// ============================================================================

export const CHAPTER_INT_ENGELSK_4_5: TextbookChapter = {
  id: 'int-engelsk-4-5',
  courseId: 'int-engelsk',
  chapterNumber: '4.5',
  title: 'Communication Strategies',
  description: 'Develop practical strategies for international communication, including accommodation, simplification, paraphrasing, active listening, and repair strategies.',
  estimatedMinutes: 18,
  content: [
    {
      id: 'ie-4-5-intro',
      type: 'text',
      content: `## Strategies for Successful International Communication

Even with cultural knowledge, communication across languages and cultures will sometimes break down. What separates effective communicators from ineffective ones is not the absence of misunderstanding, but the ability to recognize and repair it.

**Communication strategies** are conscious techniques used to overcome obstacles in understanding. They are essential when English is used as a lingua franca -- that is, when neither party is a native speaker.

**Why These Strategies Matter:**
- Most English communication worldwide is between non-native speakers
- Perfect grammar is less important than effective communication
- Strategies help maintain conversation flow when difficulties arise

**Learning Objectives:**
- Understand and apply accommodation strategies
- Use simplification and paraphrasing effectively
- Practice active listening techniques
- Develop repair strategies for when communication breaks down`,
    },
    {
      id: 'ie-4-5-def-1',
      type: 'definition',
      title: 'Accommodation and Simplification',
      content: `**Communication Accommodation Theory** (Howard Giles, 1973) describes how people adjust their communication style to match their conversation partners.

**Convergence (Accommodating):**
Adjusting your speech to become more similar to your listener's. This includes:
- Slowing down your speaking pace
- Using simpler vocabulary
- Avoiding idioms and slang that may not translate
- Matching the formality level of the other person
- Using shorter sentences

**Divergence:**
Emphasizing differences in speech, often to assert identity or create distance. This is generally unhelpful in international contexts.

**Simplification Strategies:**
When communicating with non-native speakers, effective simplification includes:

1. **Vocabulary:** Use common, widely-known words instead of rare or technical ones
   - "start" instead of "commence"
   - "use" instead of "utilize"
   - "help" instead of "facilitate"

2. **Sentence structure:** Use shorter sentences with clear subjects and verbs
   - Complex: "The proposal, which was submitted last Thursday by the marketing team, requires review."
   - Simplified: "The marketing team submitted a proposal last Thursday. We need to review it."

3. **Avoid idioms:** International speakers may not understand culturally specific expressions
   - "Let's touch base" -> "Let's talk later"
   - "It's a no-brainer" -> "The choice is easy"
   - "We need to think outside the box" -> "We need creative solutions"

4. **Use redundancy strategically:** Restate key points in different words to ensure understanding`,
    },
    {
      id: 'ie-4-5-example-1',
      type: 'example',
      title: 'Example: Paraphrasing in Action',
      content: `**Paraphrasing** means restating someone's message in your own words to confirm understanding. It is one of the most powerful communication strategies available.

**Scenario: An international team meeting**

**Speaker (from India):** "We are facing some bandwidth issues on this project, and I think we need to leverage our existing resources more effectively before we consider scaling up."

**Listener (from Germany), paraphrasing:** "So if I understand correctly, you are saying that the team is overloaded and that we should make better use of what we already have before adding more people or resources. Is that right?"

**Speaker:** "Yes, exactly. And specifically, I think we should redistribute tasks among the current team members."

**Why This Works:**
1. The listener replaced jargon ("bandwidth issues," "leverage," "scaling up") with plain language
2. The listener checked understanding with "Is that right?"
3. The speaker was able to confirm or correct the interpretation
4. The conversation moved forward with clear shared understanding

**Useful Paraphrasing Phrases:**
- "So what you are saying is..."
- "If I understand correctly, you mean..."
- "Let me make sure I have this right..."
- "In other words..."
- "So essentially..."`,
    },
    {
      id: 'ie-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-4-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following is an example of "convergence" in Communication Accommodation Theory?',
        options: [
          { id: 'a', text: 'Speaking faster to show your expertise', isCorrect: false },
          { id: 'b', text: 'Using more slang to assert your cultural identity', isCorrect: false },
          { id: 'c', text: 'Slowing down your speech and using simpler vocabulary when speaking to a non-native English speaker', isCorrect: true },
          { id: 'd', text: 'Refusing to change your accent or vocabulary', isCorrect: false },
        ],
        solution: 'Correct answer: c) Convergence means adjusting your communication style to become more similar to your conversation partner\'s. When you slow down, simplify your vocabulary, and avoid idioms for a non-native speaker, you are converging -- making your speech more accessible. Options a, b, and d describe divergence or non-accommodation.',
      },
    },
    {
      id: 'ie-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-4-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Rewrite the following sentences using simplification strategies so that they would be easily understood by a non-native English speaker:\n\n1. "We need to get all our ducks in a row before we touch base with the stakeholders."\n2. "This project is going to be a tough nut to crack, but at the end of the day, it will be worth it."\n3. "Let\'s not beat around the bush -- the bottom line is that we need to cut costs."',
        hints: [
          'Replace idioms with plain language',
          'Use shorter sentences',
          'Avoid figurative expressions',
        ],
        solution: '1. "We need to organize everything before we meet with the stakeholders." 2. "This project will be difficult, but the result will be valuable." 3. "Let me be direct: we need to reduce costs." The key is replacing idioms (get ducks in a row, touch base, tough nut to crack, at the end of the day, beat around the bush, bottom line) with clear, plain English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-5-def-2',
      type: 'definition',
      title: 'Active Listening and Repair Strategies',
      content: `**Active Listening** is a deliberate practice of fully concentrating on what is being said rather than passively receiving words. It is especially critical in cross-cultural communication.

**Active Listening Techniques:**
1. **Verbal acknowledgment:** "I see," "I understand," "Go on"
2. **Paraphrasing:** Restate what you heard to confirm understanding
3. **Asking clarifying questions:** "Could you explain what you mean by...?"
4. **Summarizing:** "So the main points are..."
5. **Non-verbal engagement:** Nodding (where culturally appropriate), maintaining eye contact (where culturally appropriate), leaning slightly forward

**Repair Strategies:**
When communication breaks down, these strategies help restore understanding:

**Requesting clarification:**
- "I am sorry, could you repeat that?"
- "Could you explain what you mean by [term]?"
- "I did not quite catch that. Could you say it another way?"

**Self-correction:**
- "Let me rephrase that..."
- "What I meant to say was..."
- "Actually, a better way to put it would be..."

**Confirmation checks:**
- "Did you mean...?"
- "So you are saying that...?"
- "Just to confirm, the deadline is Friday?"

**Comprehension checks:**
- "Does that make sense?"
- "Am I being clear?"
- "Would you like me to explain that differently?"

**Code-switching and use of other languages:**
- When both parties share another language, briefly switching can resolve confusion
- "In Norwegian, we would call this... Does that help?"

**Key Principle:** There is no shame in asking for clarification. It is far better to ask than to proceed with a misunderstanding that may have serious consequences.`,
    },
    {
      id: 'ie-4-5-example-2',
      type: 'example',
      title: 'Example: Repair in a Real Conversation',
      content: `**Scenario:** A video call between team members from Norway, South Korea, and Nigeria.

**Norwegian:** "I think we should go ahead and pull the trigger on this campaign next week."

**South Korean:** (silence, then) "I am sorry, could you explain 'pull the trigger'? Is there a problem?"

**Norwegian:** "Oh, I apologize for the idiom. What I meant is that we should launch the campaign -- start it -- next week. It just means to begin, to take action."

**South Korean:** "Ah, I understand. Thank you. Yes, I agree we should launch next week."

**Nigerian:** "I agree as well. But I want to confirm -- are we talking about the social media campaign or the full campaign including print?"

**Norwegian:** "Good question. I mean only the social media campaign at this stage. The print campaign would follow in March."

**Nigerian:** "That is clear. Let me also add that in our region, we may need an extra week for localization."

**Norwegian:** "Understood. So for the Nigerian market, we target the last week of February?"

**Nigerian:** "Yes, that would work well."

**What Went Right:**
1. The South Korean asked for clarification immediately rather than guessing
2. The Norwegian recognized the idiom problem and rephrased
3. The Nigerian asked a confirmation check to ensure shared understanding
4. All three used clear, plain language after the initial confusion
5. Specific details (dates, scope) were confirmed explicitly`,
    },
    {
      id: 'ie-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-4-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Which of the following is a "confirmation check" in communication repair?',
        options: [
          { id: 'a', text: '"I am sorry, could you repeat that?"', isCorrect: false },
          { id: 'b', text: '"So you are saying the deadline is Friday?"', isCorrect: true },
          { id: 'c', text: '"Does that make sense?"', isCorrect: false },
          { id: 'd', text: '"Let me rephrase that."', isCorrect: false },
        ],
        solution: 'Correct answer: b) A confirmation check restates specific information to verify that you understood correctly. "So you are saying the deadline is Friday?" seeks confirmation of a specific detail. Option a is a request for repetition, option c is a comprehension check (asking if the other person understands you), and option d is self-correction.',
      },
    },
    {
      id: 'ie-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-4-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Explain the difference between a "clarification request," a "confirmation check," and a "comprehension check." Give an example of each and explain when you would use it in an international meeting.',
        hints: [
          'Think about WHO is checking understanding -- the speaker or the listener?',
          'Consider what each strategy is designed to repair',
        ],
        solution: 'A clarification request asks the speaker to explain or rephrase something unclear ("Could you explain what you mean by \'synergy\'?"). A confirmation check restates what you believe the speaker said to verify accuracy ("So the budget is 2 million euros, correct?"). A comprehension check is used by the speaker to verify the listener understood ("Does that make sense?" / "Am I being clear?"). All three are listener-oriented except the comprehension check, which is speaker-oriented.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-5-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**Communication Accommodation Theory** explains how we adjust our speech to match our conversation partners. Convergence (adapting) is essential in international contexts.

**Simplification** involves using common vocabulary, shorter sentences, and avoiding idioms when communicating across cultures.

**Paraphrasing** -- restating someone's message in your own words -- is one of the most effective strategies for ensuring mutual understanding.

**Active listening** requires deliberate focus, verbal and non-verbal feedback, and a willingness to ask questions.

**Repair strategies** (clarification requests, confirmation checks, comprehension checks, self-correction) are essential tools for managing inevitable breakdowns in cross-cultural communication.

**Key Vocabulary:**
- **Accommodation** -- adjusting communication style to match your partner
- **Convergence** -- adapting to become more similar to your listener
- **Paraphrasing** -- restating a message in different words
- **Active listening** -- deliberate, focused engagement with a speaker
- **Repair strategy** -- a technique for fixing communication breakdowns
- **Lingua franca** -- a common language used by speakers of different native languages`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-4-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a dialogue (at least 12 exchanges) between three people from different countries having an online meeting in English. At least two communication breakdowns should occur and be successfully repaired using strategies from this chapter. Label each strategy used (e.g., "paraphrasing," "clarification request," "simplification").',
        hints: [
          'Include idiom confusion, technical jargon issues, or cultural misunderstandings',
          'Show both the breakdown and the repair clearly',
        ],
        solution: 'A strong dialogue includes realistic communication problems (idioms misunderstood, jargon requiring simplification, cultural differences in directness), clearly shows the repair strategies in action, and demonstrates how the conversation gets back on track. Each strategy should be correctly labeled.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-4-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'When English is used as a "lingua franca," it means:',
        options: [
          { id: 'a', text: 'English is the native language of all speakers involved', isCorrect: false },
          { id: 'b', text: 'English is used as a common language between speakers who have different native languages', isCorrect: true },
          { id: 'c', text: 'English is the only official language of the United Nations', isCorrect: false },
          { id: 'd', text: 'English grammar must be used perfectly by all speakers', isCorrect: false },
        ],
        solution: 'Correct answer: b) A lingua franca is a bridge language used for communication between people who do not share a native language. When a Norwegian and a Japanese businessperson communicate in English, English functions as a lingua franca. Most English communication worldwide is between non-native speakers, making communication strategies more important than perfect grammar.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT
// ============================================================================

export const INT_ENGELSK_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_INT_ENGELSK_4_1,
  CHAPTER_INT_ENGELSK_4_2,
  CHAPTER_INT_ENGELSK_4_3,
  CHAPTER_INT_ENGELSK_4_4,
  CHAPTER_INT_ENGELSK_4_5,
];
