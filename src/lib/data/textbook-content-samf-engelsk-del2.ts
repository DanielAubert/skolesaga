/* eslint-disable */
// @ts-nocheck
/**
 * Samfunnsfaglig engelsk – Del 2: Human Rights and Justice
 * Kapittel 2.1–2.5
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Foundations of Human Rights
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_2_1: TextbookChapter = {
  id: 'samf-engelsk-2-1',
  courseId: 'samf-engelsk',
  chapterNumber: '2.1',
  title: 'Foundations of Human Rights',
  description: 'The philosophical and historical origins of human rights, from natural law to the Enlightenment and modern rights frameworks.',
  estimatedMinutes: 22,
  competenceGoals: [
    'explain the philosophical foundations of human rights',
    'discuss how historical events have shaped the development of rights',
    'analyze the relationship between natural law, social contract theory, and modern human rights',
  ],
  content: [
    {
      id: 'se-2-1-intro',
      type: 'text',
      content: `# Foundations of Human Rights

What makes a right "universal"? Are there moral principles that apply to all people, regardless of culture, nationality, or religion? These questions have occupied philosophers, political thinkers, and legal scholars for centuries, and the answers they have developed form the foundation of the modern human rights framework.

The idea that every human being possesses inherent dignity and certain inalienable rights did not emerge overnight. It grew from centuries of philosophical debate, revolutionary struggle, and bitter experience with tyranny and oppression. Understanding these foundations is essential for anyone who wants to engage meaningfully with human rights issues today.

In this chapter, we will trace the intellectual roots of human rights from ancient ideas about natural law through the Enlightenment revolutions and into the modern era.`,
    },
    {
      id: 'se-2-1-def-1',
      type: 'definition',
      title: 'Natural Law and Natural Rights',
      content: `**Natural law** is the philosophical idea that there are moral principles inherent in human nature and the universe, discoverable through reason rather than imposed by governments or institutions.

Key features of natural law theory:
- Moral laws exist independently of human-made laws
- They can be discovered through rational thought
- They apply universally to all people at all times
- Unjust laws that violate natural law lack moral authority

**Natural rights** are rights that flow from natural law. Philosophers like John Locke (1632-1704) argued that every person has natural rights to **life, liberty, and property** simply by virtue of being human. These rights exist before and independently of any government, and the primary purpose of government is to protect them.

The concept of natural rights was revolutionary because it placed limits on the power of rulers and provided a philosophical basis for resistance against tyranny.`,
    },
    {
      id: 'se-2-1-example-1',
      type: 'example',
      title: 'Natural Rights in the American Declaration of Independence',
      content: `The American Declaration of Independence (1776) is one of the clearest expressions of natural rights philosophy in a political document:

> "We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."

Notice how this passage reflects Locke's ideas:
- Rights are **self-evident** (discoverable through reason)
- They are **unalienable** (cannot be taken away or surrendered)
- They belong to **all men** (universal application)
- Government exists to **secure** these rights, not to grant them

The declaration goes further to state that when a government fails to protect these rights, "it is the Right of the People to alter or to abolish it." This idea that sovereignty resides in the people, not the ruler, was a direct application of social contract theory.`,
    },
    {
      id: 'se-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'According to John Locke, what is the primary purpose of government?',
        options: [
          { id: 'a', text: 'To protect the natural rights of individuals', isCorrect: true },
          { id: 'b', text: 'To create and distribute wealth equally among citizens', isCorrect: false },
          { id: 'c', text: 'To expand the nation\'s territory and influence', isCorrect: false },
          { id: 'd', text: 'To enforce religious morality in society', isCorrect: false },
        ],
        hints: ['Think about what Locke believed rights existed before government was established.'],
        solution: 'Locke argued that people form governments through a social contract for one primary purpose: to protect their pre-existing natural rights to life, liberty, and property. If a government fails in this purpose, the people have the right to change it.',
      },
    },
    {
      id: 'se-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain the difference between natural law and positive law (human-made law). Why is this distinction important for the concept of human rights?',
        hints: [
          'Consider what happens when a government passes a law that violates natural law principles.',
          'Think about historical examples where unjust laws were challenged on moral grounds.',
        ],
        solution: 'Natural law refers to moral principles that exist independently of human legislation, while positive law is law created by governments and institutions. The distinction matters because it provides a standard against which human-made laws can be judged. If human rights are grounded in natural law, then a government cannot legitimately pass laws that violate these rights. This gave abolitionists, civil rights activists, and resistance movements a philosophical basis for challenging unjust laws, arguing that morally wrong legislation lacks true legal authority.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-1-def-2',
      type: 'definition',
      title: 'The Social Contract',
      content: `The **social contract** is a theory about the origins and legitimacy of political authority. It holds that governments derive their power from the consent of the governed.

Major social contract thinkers:

- **Thomas Hobbes** (1588-1679): Argued that without government, life would be "solitary, poor, nasty, brutish, and short." People surrender some freedoms to a sovereign authority in exchange for security and order.
- **John Locke** (1632-1704): Believed people are naturally rational and cooperative, but form governments to better protect their natural rights. Governments that violate rights forfeit their legitimacy.
- **Jean-Jacques Rousseau** (1712-1778): Proposed that legitimate government rests on the "general will" of the people. Sovereignty belongs to the people collectively, and laws must reflect the common good.

The social contract tradition is crucial for human rights because it establishes that:
1. Political power comes from the people, not from divine right or force
2. Individuals retain fundamental rights that no government may violate
3. Government authority is conditional on protecting the rights and welfare of citizens`,
    },
    {
      id: 'se-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-2-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which social contract thinker argued that people in a "state of nature" would live in constant conflict, and therefore need a strong sovereign authority?',
        options: [
          { id: 'a', text: 'Thomas Hobbes', isCorrect: true },
          { id: 'b', text: 'John Locke', isCorrect: false },
          { id: 'c', text: 'Jean-Jacques Rousseau', isCorrect: false },
          { id: 'd', text: 'Montesquieu', isCorrect: false },
        ],
        hints: ['This thinker described life without government as "nasty, brutish, and short."'],
        solution: 'Thomas Hobbes argued in his work Leviathan (1651) that the state of nature would be a "war of all against all," and that people must surrender significant freedoms to a powerful sovereign to maintain peace and order. Unlike Locke and Rousseau, Hobbes prioritized security over individual liberty.',
      },
    },
    {
      id: 'se-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare the views of Hobbes and Locke on the social contract. How do their different assumptions about human nature lead to different conclusions about the proper role of government?',
        hints: [
          'Start by identifying how each thinker views people in the "state of nature."',
          'Consider what each thinker believes should happen when a government abuses its power.',
        ],
        solution: 'Hobbes believed humans are naturally selfish and competitive, leading him to conclude that a strong sovereign authority is needed to prevent chaos. People give up most of their freedoms in exchange for security. Locke had a more optimistic view, believing people are rational and capable of cooperation. For Locke, government exists to protect natural rights, and people retain the right to overthrow a government that fails in this duty. These different assumptions lead to very different conclusions: Hobbes favors a powerful, centralized state with limited individual rights, while Locke favors limited government that is accountable to the people and respects individual liberty.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-1-text-summary',
      type: 'text',
      title: 'Summary',
      content: `**What we have learned in this chapter:**

- **Natural law** theory holds that moral principles exist independently of human-made laws and can be discovered through reason
- **Natural rights** (life, liberty, property) are inherent to all humans and exist before any government
- **Social contract theory** explains that governments derive legitimacy from the consent of the governed
- **Hobbes** prioritized order and security, favoring strong sovereign power
- **Locke** prioritized individual rights and argued that government must protect them or face revolution
- **Rousseau** emphasized popular sovereignty and the general will of the people
- These philosophical foundations directly shaped the American and French revolutions and the modern human rights framework`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'The French Declaration of the Rights of Man and of the Citizen (1789) states: "Men are born and remain free and equal in rights." Discuss how this statement reflects the ideas of natural law and social contract theory. Are there limitations to this declaration when viewed from a modern perspective?',
        hints: [
          'Consider who was included and excluded from "men" at the time.',
          'Think about how Olympe de Gouges responded with her Declaration of the Rights of Woman in 1791.',
        ],
        solution: 'The statement reflects natural law in claiming that freedom and equality are inherent at birth, not granted by the state. It reflects social contract theory by implying that the state must recognize and protect these pre-existing rights. However, from a modern perspective, the declaration had significant limitations: it applied primarily to propertied men, excluding women, enslaved people, and colonial subjects. Olympe de Gouges challenged this exclusion, and it took centuries of struggle before the promise of universal rights began to be extended to all people. This shows that while the philosophical foundations were universal in theory, their application was initially very narrow.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-2-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Some critics argue that human rights based on natural law are merely a Western invention that cannot claim universal validity. Others argue that the idea of inherent human dignity is found across cultures and traditions. Write an essay discussing both perspectives. Which do you find more convincing, and why?',
        hints: [
          'Consider examples from non-Western traditions that emphasize human dignity (e.g., Ubuntu in African philosophy, Buddhist compassion).',
          'Think about whether the universality of suffering and the desire for dignity transcend cultural boundaries.',
        ],
        solution: 'The Western-centric critique points out that the language of rights emerged from specific European intellectual traditions and was often imposed through colonialism. Cultural relativists argue that different societies have valid alternative frameworks for protecting dignity. However, the universalist position holds that while the specific articulation may be Western, the underlying values are found across cultures. African Ubuntu philosophy emphasizes communal dignity, Islamic law protects fundamental necessities, and Buddhist ethics center on compassion for all beings. A balanced view recognizes that the philosophical vocabulary may be Western, but the core values of dignity and protection from abuse are genuinely universal, expressed differently across traditions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Natural law', definition: 'Moral principles inherent in human nature, discoverable through reason, that exist independently of human-made laws.' },
    { term: 'Natural rights', definition: 'Rights that all humans possess by virtue of being human, including life, liberty, and property (Locke).' },
    { term: 'Social contract', definition: 'The theory that governments derive their legitimate authority from the consent of the governed.' },
    { term: 'Inalienable rights', definition: 'Rights that cannot be surrendered, transferred, or taken away by any government or authority.' },
    { term: 'Popular sovereignty', definition: 'The principle that political power ultimately resides in the people, not in rulers or institutions.' },
  ],
};

// ============================================================================
// Kapittel 2.2: The Universal Declaration of Human Rights
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_2_2: TextbookChapter = {
  id: 'samf-engelsk-2-2',
  courseId: 'samf-engelsk',
  chapterNumber: '2.2',
  title: 'The Universal Declaration of Human Rights',
  description: 'The creation, content, and significance of the UDHR as the cornerstone of international human rights law.',
  estimatedMinutes: 24,
  competenceGoals: [
    'explain the historical context that led to the creation of the UDHR',
    'analyze key articles of the Universal Declaration and their significance',
    'discuss the strengths and limitations of the UDHR as an international instrument',
  ],
  content: [
    {
      id: 'se-2-2-intro',
      type: 'text',
      content: `# The Universal Declaration of Human Rights

On December 10, 1948, the United Nations General Assembly adopted the Universal Declaration of Human Rights (UDHR) in Paris. It was the first time the international community had agreed on a comprehensive statement of fundamental human rights to be universally protected. The date is now commemorated annually as **Human Rights Day**.

The UDHR emerged from the ashes of World War II and the Holocaust. The unprecedented scale of atrocities committed during the war shocked the world and created a powerful moral imperative: "Never again." If the horrors of Nazism, genocide, and total war were to be prevented, the international community needed to establish clear, universal standards for the treatment of all human beings.

The declaration was drafted by a committee chaired by **Eleanor Roosevelt**, the former American First Lady and a tireless advocate for human rights. The committee included representatives from diverse cultural and legal traditions, including René Cassin (France), Charles Malik (Lebanon), Peng Chun Chang (China), and Hansa Mehta (India). Their collaboration produced a document that attempted to transcend cultural boundaries and speak to the shared humanity of all people.`,
    },
    {
      id: 'se-2-2-def-1',
      type: 'definition',
      title: 'The Universal Declaration of Human Rights (UDHR)',
      content: `The **Universal Declaration of Human Rights** (1948) is a milestone document in the history of human rights. It consists of a preamble and **30 articles** setting out fundamental rights and freedoms.

Key characteristics:
- **Universal**: Applies to all people everywhere, regardless of nationality, ethnicity, gender, or religion
- **Indivisible**: All rights are equally important and interconnected
- **Inalienable**: Rights cannot be taken away or voluntarily surrendered
- **Non-discriminatory**: Rights apply to everyone without distinction

The 30 articles can be grouped into:
- **Articles 1-2**: Foundation (dignity, equality, non-discrimination)
- **Articles 3-21**: Civil and political rights (life, liberty, fair trial, freedom of expression)
- **Articles 22-27**: Economic, social, and cultural rights (education, work, health, culture)
- **Articles 28-30**: Framework (right to a social and international order, duties, limitations)

While not legally binding as a treaty, the UDHR has achieved enormous moral and political authority and has inspired over 80 international human rights treaties and national constitutions worldwide.`,
    },
    {
      id: 'se-2-2-example-1',
      type: 'example',
      title: 'Key Articles of the UDHR',
      content: `Some of the most significant articles of the UDHR include:

**Article 1:** "All human beings are born free and equal in dignity and rights. They are endowed with reason and conscience and should act towards one another in a spirit of brotherhood."

This opening article establishes the philosophical foundation: dignity is inherent, not granted by states.

**Article 3:** "Everyone has the right to life, liberty and security of person."

**Article 5:** "No one shall be subjected to torture or to cruel, inhuman or degrading treatment or punishment."

**Article 18:** "Everyone has the right to freedom of thought, conscience and religion."

**Article 19:** "Everyone has the right to freedom of opinion and expression."

**Article 26:** "Everyone has the right to education. Education shall be free, at least in the elementary and fundamental stages."

These articles demonstrate the breadth of the UDHR, covering everything from protection against violence to positive entitlements like education.`,
    },
    {
      id: 'se-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'In what year was the Universal Declaration of Human Rights adopted by the United Nations General Assembly?',
        options: [
          { id: 'a', text: '1948', isCorrect: true },
          { id: 'b', text: '1945', isCorrect: false },
          { id: 'c', text: '1950', isCorrect: false },
          { id: 'd', text: '1939', isCorrect: false },
        ],
        hints: ['It was adopted three years after the end of World War II.'],
        solution: 'The UDHR was adopted on December 10, 1948. The United Nations itself was founded in 1945, and it took three years of negotiation and drafting before the declaration was ready for adoption.',
      },
    },
    {
      id: 'se-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain how the experience of World War II and the Holocaust influenced the creation of the UDHR. Why did the international community feel that a universal statement of human rights was necessary?',
        hints: [
          'Consider the scale of atrocities during WWII and what the phrase "Never again" meant in this context.',
          'Think about what the Nuremberg Trials revealed about the need for international human rights standards.',
        ],
        solution: 'The horrors of WWII, including the Holocaust, war crimes, and the deaths of over 60 million people, created an overwhelming moral imperative for international human rights standards. The Nuremberg Trials exposed how governments could systematically commit atrocities against their own citizens while technically following domestic law. This showed that national sovereignty alone could not protect individuals and that international standards were necessary. The phrase "Never again" captured the determination to create a framework that would prevent future genocides and mass atrocities. The UDHR was a direct response to the failure of existing international institutions to prevent the worst abuses in human history.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-2-def-2',
      type: 'definition',
      title: 'International Human Rights Law',
      content: `The UDHR was followed by legally binding treaties that form the core of **international human rights law**:

**The International Bill of Human Rights** consists of:
1. **The Universal Declaration of Human Rights** (1948) - non-binding but morally authoritative
2. **The International Covenant on Civil and Political Rights** (ICCPR, 1966) - legally binding treaty protecting civil and political rights
3. **The International Covenant on Economic, Social and Cultural Rights** (ICESCR, 1966) - legally binding treaty protecting economic, social, and cultural rights

Additional key treaties include:
- **Convention on the Elimination of All Forms of Racial Discrimination** (CERD, 1965)
- **Convention on the Elimination of All Forms of Discrimination Against Women** (CEDAW, 1979)
- **Convention on the Rights of the Child** (CRC, 1989)
- **Convention Against Torture** (CAT, 1984)

Together, these instruments create a comprehensive framework of international human rights law, with monitoring bodies that oversee state compliance.`,
    },
    {
      id: 'se-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-2-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Why was the UDHR not sufficient on its own, and why were the ICCPR and ICESCR created in 1966?',
        options: [
          { id: 'a', text: 'The UDHR is not legally binding, so binding treaties were needed to create enforceable obligations for states', isCorrect: true },
          { id: 'b', text: 'The UDHR only covered European countries and needed to be expanded', isCorrect: false },
          { id: 'c', text: 'The UDHR was rejected by the United Nations and had to be replaced', isCorrect: false },
          { id: 'd', text: 'The UDHR only protected the rights of men and needed to include women', isCorrect: false },
        ],
        hints: ['Consider the difference between a declaration and a treaty in international law.'],
        solution: 'The UDHR is a declaration, not a treaty, which means it does not create legally binding obligations for states. While it carries enormous moral authority, states cannot be legally held accountable for violating it. The ICCPR and ICESCR were created as legally binding treaties that transform the principles of the UDHR into enforceable international law. States that ratify these covenants accept legal obligations and are subject to monitoring by UN treaty bodies.',
      },
    },
    {
      id: 'se-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'The drafting committee of the UDHR included representatives from many different cultures, including China, Lebanon, India, France, and the United States. Why was this diversity important for the legitimacy of the declaration? Do you think they succeeded in creating a truly universal document?',
        hints: [
          'Consider how a document drafted only by Western nations might have been received differently.',
          'Think about the role of Peng Chun Chang in incorporating Confucian ideas and Charles Malik in bringing a Lebanese philosophical perspective.',
        ],
        solution: 'The cultural diversity of the drafting committee was crucial for the UDHR\'s claim to universality. If only Western nations had drafted it, the declaration would have been vulnerable to charges of cultural imperialism. Peng Chun Chang contributed Confucian ideas about human nature and conscience, while Charles Malik brought a philosophical perspective rooted in Lebanese and Arabic intellectual traditions. Hansa Mehta pushed for gender-inclusive language. However, the document has been criticized for reflecting primarily Western liberal values and for being adopted at a time when much of the world was still under colonial rule. Despite these limitations, the committee\'s diversity gave the UDHR greater legitimacy than any purely Western document would have had.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-2-text-summary',
      type: 'text',
      title: 'Summary',
      content: `**What we have learned in this chapter:**

- The **UDHR** was adopted on December 10, 1948, as a response to the atrocities of World War II and the Holocaust
- It was drafted by a culturally diverse committee chaired by **Eleanor Roosevelt**
- The declaration consists of **30 articles** covering civil, political, economic, social, and cultural rights
- Human rights are characterized as **universal, indivisible, inalienable, and non-discriminatory**
- The UDHR is not legally binding but has inspired over 80 international treaties and national constitutions
- The **International Bill of Human Rights** adds the legally binding ICCPR and ICESCR to the framework
- While enormously influential, the UDHR has been criticized for its Western-centric origins and the gap between its ideals and their implementation`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Article 1 of the UDHR states that all human beings "should act towards one another in a spirit of brotherhood." Some have criticized this language as gendered and outdated. Do you think the language of human rights documents matters? Discuss whether the UDHR should be updated to use more inclusive language, or whether changing it would undermine its historical significance.',
        hints: [
          'Consider both the symbolic power of language and the historical value of preserving the original text.',
          'Think about how other organizations have handled similar language updates.',
        ],
        solution: 'Language matters because it shapes how we understand and relate to ideas. Gendered language like "brotherhood" and "rights of man" can make women feel excluded from the very protections these documents promise. Those who argue for updating point out that inclusive language better reflects the universal aspirations of the UDHR. However, critics of updating argue that the UDHR is a historical document and changing it could set a precedent for politically motivated revisions. A compromise approach, used by many institutions, is to keep the original text intact while using inclusive language in new documents, interpretations, and educational materials. This preserves historical integrity while acknowledging evolving understanding of inclusion.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-2-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Choose three articles from the UDHR that you consider most important in the world today. For each article, explain what right it protects, give a real-world example of where this right is being violated, and discuss what the international community can do to better protect it.',
        hints: [
          'Consider rights that are under threat in multiple countries or regions today.',
          'Think about both state violations and non-state threats to human rights.',
        ],
        solution: 'A strong answer would select three articles and analyze each in depth. For example: (1) Article 5 (prohibition of torture) is violated by states using "enhanced interrogation" and by police brutality worldwide. Stronger monitoring mechanisms and accountability measures are needed. (2) Article 19 (freedom of expression) is threatened by authoritarian internet censorship, surveillance, and the imprisonment of journalists. International pressure, technology access, and press freedom organizations can help. (3) Article 26 (right to education) is denied to millions of children, especially girls in conflict zones. Investment in education infrastructure, protection of schools during conflict, and targeted programs for marginalized groups are essential. The answer should show awareness of both the rights themselves and the complex challenges of implementation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'UDHR', definition: 'The Universal Declaration of Human Rights (1948), a foundational document setting out 30 fundamental rights and freedoms for all people.' },
    { term: 'Indivisibility', definition: 'The principle that all human rights are equally important and interconnected, and cannot be ranked in a hierarchy.' },
    { term: 'International Bill of Human Rights', definition: 'The UDHR together with the ICCPR and ICESCR, forming the core of international human rights law.' },
    { term: 'ICCPR', definition: 'The International Covenant on Civil and Political Rights (1966), a legally binding treaty protecting civil and political freedoms.' },
    { term: 'ICESCR', definition: 'The International Covenant on Economic, Social and Cultural Rights (1966), a legally binding treaty protecting economic, social, and cultural rights.' },
  ],
};

// ============================================================================
// Kapittel 2.3: Civil and Political Rights
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_2_3: TextbookChapter = {
  id: 'samf-engelsk-2-3',
  courseId: 'samf-engelsk',
  chapterNumber: '2.3',
  title: 'Civil and Political Rights',
  description: 'Freedom of expression, assembly, religion, and the right to a fair trial, democratic participation, and protection from state abuse.',
  estimatedMinutes: 25,
  competenceGoals: [
    'explain key civil and political rights and why they are essential for democracy',
    'analyze real-world situations involving freedom of expression, assembly, and due process',
    'discuss the limits of civil and political rights and when restrictions may be justified',
  ],
  content: [
    {
      id: 'se-2-3-intro',
      type: 'text',
      content: `# Civil and Political Rights

Civil and political rights are often called **"first generation" rights** because they were the first category of human rights to receive widespread recognition. They protect individuals from abuse by the state and guarantee the freedoms necessary for democratic participation.

These rights have their roots in the liberal political philosophy of the Enlightenment and were first enshrined in documents like the English Bill of Rights (1689), the American Bill of Rights (1791), and the French Declaration of the Rights of Man and of the Citizen (1789). Today, they are protected under the **International Covenant on Civil and Political Rights (ICCPR)**, which has been ratified by over 170 states.

Civil and political rights include both **negative rights** (freedoms from state interference, such as freedom from torture) and **positive rights** (entitlements that the state must actively protect, such as the right to a fair trial). Together, they form the backbone of democratic governance and the rule of law.`,
    },
    {
      id: 'se-2-3-def-1',
      type: 'definition',
      title: 'Freedom of Expression',
      content: `**Freedom of expression** is the right to hold opinions and to seek, receive, and impart information and ideas through any medium, without interference. It is protected by Article 19 of both the UDHR and the ICCPR.

This right includes:
- **Freedom of opinion**: The right to hold any opinion without interference (absolute right)
- **Freedom of speech**: The right to express opinions verbally, in writing, or through art
- **Freedom of the press**: The right of media to report and investigate without censorship
- **Freedom of information**: The right to access information held by public authorities

**Limitations**: Freedom of expression is not absolute. International law permits restrictions that are:
1. **Prescribed by law** (not arbitrary)
2. **Necessary** for a legitimate purpose
3. Aimed at protecting **national security, public order, public health, morals**, or the **rights and reputations of others**

The challenge is finding the right balance between protecting free speech and preventing harm, such as hate speech, incitement to violence, or disinformation.`,
    },
    {
      id: 'se-2-3-example-1',
      type: 'example',
      title: 'Freedom of Expression in Practice: The Charlie Hebdo Debate',
      content: `The 2015 attack on the French satirical magazine **Charlie Hebdo** by terrorists who objected to the magazine's cartoons of the Prophet Muhammad sparked a global debate about the limits of free expression.

**Those defending the cartoons argued:**
- Satire and criticism of ideas, including religious ideas, are essential to a free society
- Fear of violence cannot be allowed to limit free expression
- "Je suis Charlie" became a global rallying cry for press freedom

**Those criticizing the cartoons argued:**
- Freedom of expression carries responsibilities, including respect for marginalized communities
- The cartoons targeted a religious minority already facing discrimination in France
- There is a difference between speaking truth to power and mocking the vulnerable

This case illustrates the complexity of free expression: most people agree it is a fundamental right, but disagree about where its boundaries should lie. The European Court of Human Rights has generally upheld the right to satirize religion, while also recognizing that "gratuitously offensive" expression can be restricted.`,
    },
    {
      id: 'se-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Under international human rights law, which of the following is a legitimate ground for restricting freedom of expression?',
        options: [
          { id: 'a', text: 'To protect national security or the rights of others, provided the restriction is prescribed by law and necessary', isCorrect: true },
          { id: 'b', text: 'To prevent criticism of the government or its leaders', isCorrect: false },
          { id: 'c', text: 'To enforce a particular religious or ideological viewpoint', isCorrect: false },
          { id: 'd', text: 'To silence political opposition during elections', isCorrect: false },
        ],
        hints: ['The ICCPR allows restrictions only when they meet a three-part test: legality, necessity, and legitimate aim.'],
        solution: 'International law allows restrictions on freedom of expression only when they are prescribed by law, necessary, and aimed at protecting a legitimate interest such as national security, public order, public health, morals, or the rights and reputations of others. Restrictions designed to silence criticism, enforce ideology, or suppress opposition are violations of the right, not legitimate limitations.',
      },
    },
    {
      id: 'se-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Many countries have laws against hate speech, while the United States provides very broad protection for speech under the First Amendment. Compare the European and American approaches to hate speech regulation. Which approach do you think better protects human rights, and why?',
        hints: [
          'Consider the argument that hate speech causes real harm to targeted groups.',
          'Consider the argument that government power to restrict speech can be abused.',
        ],
        solution: 'European countries generally ban hate speech that incites violence or discrimination against protected groups, viewing it as a threat to equality and dignity. The US approach protects almost all speech, even hateful speech, on the grounds that government censorship poses a greater danger than offensive expression. The European approach better protects the dignity and safety of marginalized groups but risks government overreach in defining what constitutes "hate." The US approach better protects against government censorship but can leave vulnerable communities exposed to harmful rhetoric. A balanced answer recognizes the trade-offs in both approaches and acknowledges that there is no perfect solution to the tension between free expression and protection from harm.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-3-def-2',
      type: 'definition',
      title: 'The Right to a Fair Trial and Due Process',
      content: `**Due process** and the **right to a fair trial** protect individuals from arbitrary treatment by the state. These rights are essential to the rule of law.

Key elements of a fair trial (ICCPR Article 14):
- **Presumption of innocence**: Every person is innocent until proven guilty
- **Right to legal counsel**: Access to a lawyer, provided free if necessary
- **Public hearing**: Trials must be open and transparent
- **Impartial tribunal**: Judges must be independent of political pressure
- **Right to appeal**: The ability to challenge a conviction in a higher court
- **Protection against self-incrimination**: No one can be forced to testify against themselves
- **Habeas corpus**: The right to challenge the legality of one's detention before a court

Related protections:
- **Prohibition of arbitrary arrest** (Article 9 ICCPR)
- **Prohibition of torture** (Article 7 ICCPR, absolute right with no exceptions)
- **Right to privacy** (Article 17 ICCPR)

These rights are sometimes tested in times of crisis, when governments may be tempted to bypass due process in the name of national security.`,
    },
    {
      id: 'se-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-2-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What does the "presumption of innocence" mean in the context of a fair trial?',
        options: [
          { id: 'a', text: 'A person accused of a crime is considered innocent until proven guilty by a court of law', isCorrect: true },
          { id: 'b', text: 'A person can only be arrested if they confess to a crime', isCorrect: false },
          { id: 'c', text: 'The police must find evidence before they can investigate a suspect', isCorrect: false },
          { id: 'd', text: 'Judges must always rule in favor of the accused', isCorrect: false },
        ],
        hints: ['Think about where the burden of proof lies in a criminal trial.'],
        solution: 'The presumption of innocence means that in a criminal trial, the burden of proof lies with the prosecution. The accused person does not have to prove their innocence; instead, the state must prove their guilt beyond a reasonable doubt. This principle is fundamental to preventing wrongful convictions and protecting individuals from the abuse of state power.',
      },
    },
    {
      id: 'se-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'After the September 11 attacks in 2001, the United States established a detention facility at Guantanamo Bay, Cuba, where suspected terrorists were held without trial, sometimes for years. Discuss how this practice relates to the principles of due process and habeas corpus. Can national security justify suspending these rights?',
        hints: [
          'Consider the legal arguments made by the US government and those made by human rights organizations.',
          'Think about the long-term consequences of allowing exceptions to fundamental rights.',
        ],
        solution: 'The Guantanamo detention facility raised serious due process concerns: detainees were held without charge, denied access to lawyers, and had no opportunity to challenge their detention in court (habeas corpus). The US government argued that national security justified these measures and that the detainees were "enemy combatants" not entitled to ordinary legal protections. Human rights organizations argued that the prohibition on arbitrary detention and the right to a fair trial are fundamental and cannot be suspended, even in times of crisis. The US Supreme Court eventually ruled in Boumediene v. Bush (2008) that detainees had the right to habeas corpus. This case illustrates the tension between security and rights, but most human rights experts argue that fundamental due process rights must be upheld even in emergencies, as allowing exceptions creates a dangerous precedent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-3-text-summary',
      type: 'text',
      title: 'Summary',
      content: `**What we have learned in this chapter:**

- Civil and political rights are **"first generation" rights** that protect individuals from state abuse and enable democratic participation
- **Freedom of expression** includes speech, press, and information, but may be restricted under strict conditions (legality, necessity, legitimate aim)
- The balance between free speech and preventing harm (like hate speech) is debated differently across democracies
- **Due process** and the **right to a fair trial** are essential to the rule of law, including the presumption of innocence, right to counsel, and habeas corpus
- The **prohibition of torture** is an absolute right that cannot be restricted under any circumstances
- National security concerns can create tension with civil liberties, but fundamental rights must be upheld even in times of crisis
- Protecting civil and political rights requires constant vigilance by citizens, courts, and civil society organizations`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-2-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Digital technology has created new challenges for civil and political rights. Discuss how the internet and social media have both expanded and threatened freedom of expression and the right to privacy. Use specific examples from at least two different countries.',
        hints: [
          'Consider how social media has given voice to marginalized groups (e.g., Arab Spring, #MeToo) but also enabled surveillance and disinformation.',
          'Think about government internet shutdowns, social media censorship, and mass surveillance programs.',
        ],
        solution: 'The internet has expanded freedom of expression by giving individuals platforms to share ideas globally. Social media enabled movements like the Arab Spring and #MeToo, allowing people to organize and speak truth to power. However, digital technology also threatens rights: China\'s Great Firewall censors the internet and uses AI for mass surveillance; Russia restricts social media and spreads disinformation; and even democratic governments conduct mass surveillance, as revealed by Edward Snowden. Algorithms on social platforms can amplify extremism and misinformation. The right to privacy faces threats from both state surveillance and corporate data collection. A strong answer discusses the dual nature of technology and the need for legal frameworks that protect rights in the digital age.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-2-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'You are a human rights lawyer. A journalist in your country has been arrested for publishing leaked government documents that reveal corruption at the highest levels of government. Write a legal argument defending the journalist, drawing on the rights and principles discussed in this chapter.',
        hints: [
          'Reference specific articles from the UDHR and ICCPR.',
          'Address the government\'s likely arguments about national security and the unauthorized release of classified documents.',
        ],
        solution: 'A strong legal argument would invoke: (1) Article 19 ICCPR protecting freedom of expression and the press, emphasizing that investigative journalism serves the public interest by holding power accountable; (2) Article 19 UDHR on the right to receive and impart information; (3) The principle that any restrictions on expression must be prescribed by law, necessary, and proportionate; (4) The argument that exposing corruption serves a greater public interest than secrecy; (5) The journalist\'s right to due process under Article 14 ICCPR. The defense should argue that punishing whistleblowing journalism creates a chilling effect on the free press and enables corruption to flourish unchecked. International courts and bodies have generally held that exposing wrongdoing in the public interest deserves strong protection.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Freedom of expression', definition: 'The right to hold opinions and to seek, receive, and impart information and ideas without interference, subject to limited restrictions.' },
    { term: 'Due process', definition: 'Legal protections ensuring fair treatment by the state, including the right to a fair trial, legal counsel, and protection from arbitrary detention.' },
    { term: 'Habeas corpus', definition: 'The right to challenge the legality of one\'s detention before a court, preventing indefinite imprisonment without charge.' },
    { term: 'Presumption of innocence', definition: 'The principle that every person accused of a crime is considered innocent until proven guilty by a court of law.' },
    { term: 'Absolute right', definition: 'A right that permits no exceptions or restrictions under any circumstances, such as the prohibition of torture.' },
  ],
};

// ============================================================================
// Kapittel 2.4: Social and Economic Rights
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_2_4: TextbookChapter = {
  id: 'samf-engelsk-2-4',
  courseId: 'samf-engelsk',
  chapterNumber: '2.4',
  title: 'Social and Economic Rights',
  description: 'The right to education, health, work, and an adequate standard of living, and the debate over their status as human rights.',
  estimatedMinutes: 23,
  competenceGoals: [
    'explain key social and economic rights and their importance for human dignity',
    'discuss the debate over whether economic and social rights are "real" human rights',
    'analyze the relationship between poverty, inequality, and human rights violations',
  ],
  content: [
    {
      id: 'se-2-4-intro',
      type: 'text',
      content: `# Social and Economic Rights

Can you truly be free if you cannot afford food, shelter, or medical care? Can you exercise your right to vote if you never received an education? These questions highlight the importance of **social and economic rights**, sometimes called **"second generation" rights**.

While civil and political rights protect individuals from state interference, social and economic rights require the state to take **positive action** to ensure that everyone has access to the basic necessities of life. These rights are enshrined in the **International Covenant on Economic, Social and Cultural Rights (ICESCR)**, which has been ratified by over 170 states.

Social and economic rights have been more controversial than civil and political rights, particularly during the Cold War, when Western nations emphasized political freedoms while the Soviet bloc championed economic rights. Today, the international consensus is that all human rights are **indivisible and interdependent** -- you cannot fully enjoy one category of rights without the others.`,
    },
    {
      id: 'se-2-4-def-1',
      type: 'definition',
      title: 'Core Social and Economic Rights',
      content: `The **ICESCR** protects the following key rights:

**Right to work** (Articles 6-7):
- The right to freely chosen employment
- Just and favorable working conditions
- Fair wages sufficient for a decent living
- Safe and healthy working environments
- Rest, leisure, and reasonable working hours

**Right to social security** (Article 9):
- Protection against unemployment, sickness, old age, and disability

**Right to an adequate standard of living** (Article 11):
- Adequate food, clothing, and housing
- Continuous improvement of living conditions
- Freedom from hunger as a fundamental right

**Right to health** (Article 12):
- The highest attainable standard of physical and mental health
- Access to medical services and facilities
- Prevention and treatment of diseases

**Right to education** (Articles 13-14):
- Free and compulsory primary education
- Accessible secondary and higher education
- Education directed toward the full development of the human personality

States are obligated to work toward the **progressive realization** of these rights, using the maximum of their available resources.`,
    },
    {
      id: 'se-2-4-example-1',
      type: 'example',
      title: 'The Right to Education in Practice: Malala Yousafzai',
      content: `**Malala Yousafzai** (born 1997) became a global symbol for the right to education when she was shot by Taliban gunmen in Pakistan in 2012 for advocating girls' education.

The Taliban had banned girls from attending school in the Swat Valley, where Malala lived. Starting at age 11, she wrote a blog for the BBC about life under Taliban rule and campaigned publicly for girls' right to go to school. After surviving the assassination attempt, she continued her activism and became the youngest person ever to receive the **Nobel Peace Prize** in 2014.

Malala's story illustrates several key points about social and economic rights:
- The right to education is essential for the realization of all other rights
- Girls and women are disproportionately denied access to education
- Armed conflict and extremism pose direct threats to social and economic rights
- Individual courage, combined with international support, can create change

As Malala said in her speech to the United Nations: "One child, one teacher, one book, one pen can change the world."

Today, an estimated **250 million children** worldwide are still out of school, with girls in conflict-affected regions facing the greatest barriers.`,
    },
    {
      id: 'se-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-2-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What does "progressive realization" mean in the context of social and economic rights?',
        options: [
          { id: 'a', text: 'States must work steadily toward the full realization of these rights, using the maximum of their available resources', isCorrect: true },
          { id: 'b', text: 'States can choose which social and economic rights to implement and which to ignore', isCorrect: false },
          { id: 'c', text: 'Social and economic rights will automatically be fulfilled as a country becomes wealthier', isCorrect: false },
          { id: 'd', text: 'Only progressive or left-wing governments are required to fulfill these rights', isCorrect: false },
        ],
        hints: ['The concept acknowledges that not all states have the same resources, but all must make genuine efforts.'],
        solution: 'Progressive realization means that states are obligated to take continuous, deliberate steps toward the full enjoyment of social and economic rights, using the maximum of their available resources. While this acknowledges that full realization may take time (especially for poorer countries), it does not excuse inaction. States must show that they are making genuine progress, and any deliberate retrogression (moving backward) must be justified.',
      },
    },
    {
      id: 'se-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain why the right to education is often described as a "multiplier right" -- a right that enables the enjoyment of many other rights. Give specific examples.',
        hints: [
          'Think about how education affects a person\'s ability to exercise political rights, earn a living, and access healthcare.',
          'Consider the impact of education on gender equality and social mobility.',
        ],
        solution: 'Education is called a multiplier right because it enables people to exercise virtually all other human rights. A person who can read and write can access legal information (due process), understand political issues (right to vote), qualify for employment (right to work), make informed health decisions (right to health), and engage in cultural life (cultural rights). Education is particularly transformative for girls: educated women have fewer children, lower maternal mortality, higher earnings, and greater political participation. UNESCO estimates that if all adults completed secondary education, the global poverty rate would be cut by more than half. Without education, many other rights remain theoretical.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-4-def-2',
      type: 'definition',
      title: 'The Debate Over Economic and Social Rights',
      content: `Not everyone agrees that social and economic rights should have the same status as civil and political rights. This has been one of the most heated debates in human rights:

**Arguments FOR treating them as full human rights:**
- The UDHR makes no distinction between categories of rights
- You cannot exercise political freedoms without basic material security
- **Indivisibility**: All rights are interconnected -- democracy without social welfare is hollow
- The **Vienna Declaration** (1993) affirmed that all rights are "universal, indivisible, interdependent, and interrelated"

**Arguments AGAINST giving them equal status:**
- Civil and political rights require the state to **refrain** from acting; economic rights require the state to **spend money**
- **Justiciability**: It is harder for courts to enforce positive obligations (like building hospitals) than negative ones (like stopping torture)
- Economic rights are seen as **aspirational goals** rather than enforceable entitlements
- Different countries have vastly different resources, making universal standards difficult

**The modern consensus** favors treating all rights as equally important. The concept of **"minimum core obligations"** has emerged, holding that every state, regardless of resources, must ensure at least a minimum level of each right (e.g., basic primary education, essential medicines, minimal food).`,
    },
    {
      id: 'se-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-2-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What are "minimum core obligations" in the context of social and economic rights?',
        options: [
          { id: 'a', text: 'The essential minimum levels of each right that every state must guarantee, regardless of its resources', isCorrect: true },
          { id: 'b', text: 'The minimum number of human rights treaties a state must ratify to be a UN member', isCorrect: false },
          { id: 'c', text: 'The basic civil and political rights that take priority over economic rights', isCorrect: false },
          { id: 'd', text: 'The minimum budget a state must spend on social welfare programs', isCorrect: false },
        ],
        hints: ['Think about what level of rights fulfillment should be non-negotiable for any country.'],
        solution: 'Minimum core obligations represent the essential, non-negotiable level of each social and economic right that every state must guarantee. For example, the minimum core of the right to education means free primary education for all children; the minimum core of the right to health means access to essential medicines and basic healthcare. No state, however poor, can justify failing to meet these minimum standards. This concept was developed by the UN Committee on Economic, Social and Cultural Rights to prevent states from using limited resources as an excuse for complete inaction.',
      },
    },
    {
      id: 'se-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'South Africa\'s constitution includes social and economic rights as justiciable (enforceable by courts). In the landmark case Government of the Republic of South Africa v. Grootboom (2000), the Constitutional Court ruled that the government had an obligation to provide access to adequate housing. Research this case and discuss: Is court enforcement of social and economic rights effective? What are the advantages and challenges?',
        hints: [
          'Consider whether courts are well-placed to make decisions about resource allocation.',
          'Think about the difference between ordering the government to stop doing something versus ordering it to spend money.',
        ],
        solution: 'In the Grootboom case, the South African Constitutional Court found that the government\'s housing policy failed to meet its constitutional obligations because it made no provision for people in desperate need. The court ordered the government to develop a reasonable program for progressive realization of the right to housing. Advantages of court enforcement include: holding governments accountable, giving marginalized groups legal recourse, and establishing precedents. Challenges include: courts lack expertise in resource allocation, enforcement of positive obligations is difficult, and there is a risk of judicial overreach into democratic decision-making. The South African experience shows that courts can play a meaningful role by requiring governments to have reasonable plans and make genuine progress, without dictating specific budget allocations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-4-text-summary',
      type: 'text',
      title: 'Summary',
      content: `**What we have learned in this chapter:**

- **Social and economic rights** require states to take positive action to ensure access to education, health, work, housing, and social security
- These rights are protected by the **ICESCR** and must be **progressively realized** using maximum available resources
- Education is a **"multiplier right"** that enables the enjoyment of all other rights
- The debate over economic and social rights concerns whether they are as enforceable as civil and political rights
- The **Vienna Declaration** (1993) affirmed that all rights are **indivisible, interdependent, and interrelated**
- **Minimum core obligations** establish a non-negotiable floor below which no state may fall
- Courts, particularly in South Africa, have shown that social and economic rights can be meaningfully enforced
- Poverty and inequality remain the greatest barriers to the realization of social and economic rights worldwide`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-2-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'The COVID-19 pandemic exposed deep inequalities in access to healthcare, education, and social protection around the world. Analyze how the pandemic affected social and economic rights in both wealthy and developing countries. What lessons should the international community draw for future crises?',
        hints: [
          'Consider disparities in vaccine access, remote learning capabilities, and social safety nets.',
          'Think about how pre-existing inequalities were amplified by the pandemic.',
        ],
        solution: 'The pandemic revealed that even wealthy countries had significant gaps in social and economic rights protection: millions lost jobs without adequate social security, remote learning excluded children without internet access, and healthcare systems were overwhelmed. In developing countries, the impact was even more severe: limited healthcare infrastructure, no digital learning options, and reliance on informal economies with no safety nets. Vaccine inequality between rich and poor nations (dubbed "vaccine apartheid") highlighted global inequalities. Lessons include: the need for universal healthcare systems, digital infrastructure as a prerequisite for the right to education, stronger social safety nets, and international cooperation mechanisms (like COVAX) that need to be more effective. The pandemic demonstrated that social and economic rights are not luxuries but essential protections.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-2-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Imagine you are an advisor to the government of a low-income country. The country has limited resources and must prioritize between investing in primary education, building hospitals, or creating a social security system. Using the principles of social and economic rights discussed in this chapter, write a policy recommendation explaining which investment should be prioritized and why.',
        hints: [
          'Consider the concept of minimum core obligations and the "multiplier" effect of education.',
          'Think about what investment will have the greatest long-term impact on human development.',
        ],
        solution: 'A strong recommendation would argue for prioritizing primary education, drawing on its status as a multiplier right with the greatest long-term return on investment. An educated population will be healthier (understanding nutrition, hygiene, and healthcare), more economically productive (able to work and pay taxes to fund future services), and better equipped to participate in democratic governance. The recommendation should acknowledge minimum core obligations in all three areas: even while prioritizing education, the state must ensure at least basic healthcare and emergency social protection. The argument should reference international obligations under the ICESCR and note that free, compulsory primary education is one of the few obligations that is immediate rather than progressive. A balanced answer would also note the importance of international development aid in supplementing limited domestic resources.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Progressive realization', definition: 'The obligation of states to take continuous steps toward the full enjoyment of social and economic rights, using maximum available resources.' },
    { term: 'Minimum core obligations', definition: 'The essential minimum levels of each right that every state must guarantee, regardless of resource constraints.' },
    { term: 'Indivisibility', definition: 'The principle that all human rights are interconnected and cannot be separated into more and less important categories.' },
    { term: 'Justiciability', definition: 'The ability of a right to be enforced through courts, a key issue in the debate over social and economic rights.' },
    { term: 'Multiplier right', definition: 'A right, such as education, that enables the enjoyment of many other rights and amplifies their impact.' },
  ],
};

// ============================================================================
// Kapittel 2.5: Human Rights Challenges Today
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_2_5: TextbookChapter = {
  id: 'samf-engelsk-2-5',
  courseId: 'samf-engelsk',
  chapterNumber: '2.5',
  title: 'Human Rights Challenges Today',
  description: 'Contemporary threats to human rights including climate change, digital surveillance, refugees and migration, and the rise of authoritarianism.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analyze contemporary global challenges through a human rights lens',
    'discuss the relationship between climate change, migration, and human rights',
    'evaluate how digital technology and authoritarianism threaten and can strengthen human rights protection',
  ],
  content: [
    {
      id: 'se-2-5-intro',
      type: 'text',
      content: `# Human Rights Challenges Today

The human rights framework established after World War II has achieved remarkable progress: slavery is universally condemned, democracy has spread to more countries than ever before, literacy rates have risen dramatically, and extreme poverty has fallen significantly. Yet the 21st century presents new and complex challenges that test the limits of the existing human rights system.

Climate change threatens the basic rights to life, food, water, and shelter for billions of people. Digital technology enables mass surveillance on an unprecedented scale. The global refugee crisis has displaced over 100 million people. Authoritarian governments are rolling back democratic freedoms in many parts of the world. And persistent inequalities of gender, race, and wealth continue to deny full rights to vast segments of the global population.

In this chapter, we will examine the most pressing human rights challenges of our time and consider how the human rights framework can be adapted to address them.`,
    },
    {
      id: 'se-2-5-def-1',
      type: 'definition',
      title: 'Climate Change as a Human Rights Issue',
      content: `**Climate change** is increasingly recognized as one of the greatest threats to human rights in the 21st century. Rising temperatures, extreme weather events, sea level rise, and resource scarcity directly threaten a wide range of fundamental rights.

**Rights affected by climate change:**
- **Right to life**: Extreme heat, floods, and storms kill thousands each year
- **Right to food**: Droughts and changing weather patterns threaten agriculture
- **Right to water**: Freshwater scarcity affects billions
- **Right to health**: Climate change spreads diseases and air pollution
- **Right to housing**: Rising sea levels and natural disasters destroy homes
- **Right to self-determination**: Small island nations face existential threats from sea level rise

**Climate justice** highlights the inequity of climate change:
- The countries that have contributed **least** to greenhouse gas emissions are often the **most** affected
- Wealthy nations have greater resources to adapt, while poorer nations bear the brunt
- Future generations will face consequences of decisions made today
- Indigenous peoples and marginalized communities are disproportionately affected

In 2022, the UN General Assembly recognized the right to a **clean, healthy, and sustainable environment** as a universal human right, marking a significant development in linking environmental protection to human rights.`,
    },
    {
      id: 'se-2-5-example-1',
      type: 'example',
      title: 'Climate Refugees and the Rights Gap',
      content: `The small Pacific island nation of **Tuvalu** has become a symbol of the human rights crisis caused by climate change. With a highest point of just 4.6 meters above sea level, Tuvalu faces the real possibility of becoming uninhabitable due to rising seas within this century.

The approximately 11,000 citizens of Tuvalu face an existential question: what happens to their nation, their culture, and their rights if their homeland disappears beneath the waves?

**The legal gap**: Current international refugee law, based on the 1951 Refugee Convention, does not recognize "climate refugees." The convention protects people fleeing persecution, not environmental disaster. This means that people displaced by climate change have no guaranteed right to asylum in another country.

In 2023, Tuvalu signed an agreement with Australia that offers residency to Tuvaluans displaced by climate change, one of the first such agreements in the world. However, most climate-displaced people have no such safety net.

The World Bank estimates that by 2050, **up to 216 million people** could be internally displaced by climate change. This creates an urgent need to develop new legal frameworks that protect the rights of climate-displaced populations.`,
    },
    {
      id: 'se-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-2-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Why do current international legal frameworks fail to adequately protect people displaced by climate change?',
        options: [
          { id: 'a', text: 'The 1951 Refugee Convention only protects people fleeing persecution, not environmental disaster, so "climate refugees" have no guaranteed legal status', isCorrect: true },
          { id: 'b', text: 'Climate change is not real, so no legal protection is needed', isCorrect: false },
          { id: 'c', text: 'People displaced by climate change are protected by the Geneva Conventions', isCorrect: false },
          { id: 'd', text: 'The United Nations has already created a comprehensive framework for climate refugees', isCorrect: false },
        ],
        hints: ['Consider the legal definition of a "refugee" under international law and whether it covers environmental displacement.'],
        solution: 'The 1951 Refugee Convention defines a refugee as someone who has fled their country due to a well-founded fear of persecution based on race, religion, nationality, political opinion, or membership in a particular social group. Climate change does not fit any of these categories, which means people displaced by environmental disaster do not qualify for refugee status under existing international law. This creates a significant protection gap that requires new legal frameworks, such as bilateral agreements (like the Tuvalu-Australia deal) or an expanded definition of refugee to include climate-displaced people.',
      },
    },
    {
      id: 'se-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Climate justice advocates argue that wealthy industrialized nations have a moral and legal obligation to help countries most affected by climate change. Do you agree? Use the concepts of human rights, historical responsibility, and equity to support your argument.',
        hints: [
          'Consider who has contributed the most to greenhouse gas emissions historically.',
          'Think about the principle that rights violations require remedies, even when they are indirect.',
        ],
        solution: 'A strong argument would note that wealthy nations bear the greatest historical responsibility for greenhouse gas emissions (the US, EU, and other industrialized nations account for a large majority of cumulative CO2 emissions), while the poorest and most vulnerable countries suffer the worst consequences. From a human rights perspective, if actions by one party cause foreseeable harm to the rights of others, there is an obligation to prevent that harm and provide remedies. The principle of equity suggests that those with greater responsibility and greater capacity should contribute more to solutions. This can take the form of climate finance, technology transfer, accepting climate migrants, and ambitious emissions reduction. However, some argue that today\'s citizens should not be held responsible for historical emissions, and that emerging economies like China and India now also have significant obligations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-5-def-2',
      type: 'definition',
      title: 'Digital Surveillance and Authoritarianism',
      content: `The 21st century has seen the rise of **digital authoritarianism**, where governments use technology to monitor, control, and suppress their populations in ways that would have been unimaginable in the past.

**Forms of digital surveillance and control:**
- **Mass surveillance**: Governments collecting data on citizens' communications, movements, and online activity
- **Facial recognition**: AI-powered systems that can identify and track individuals in public spaces
- **Social credit systems**: Rating citizens' behavior and applying rewards or punishments (as in China)
- **Internet censorship**: Blocking websites, filtering content, and shutting down the internet
- **Spyware**: Government use of hacking tools (like Pegasus) to infiltrate journalists' and activists' phones

**Human rights at stake:**
- Right to privacy (Article 12 UDHR)
- Freedom of expression (Article 19 UDHR)
- Freedom of association (Article 20 UDHR)
- Right to seek asylum (surveillance of refugees)

**The global trend**: Freedom House reports that internet freedom has declined for over a decade in a row. Authoritarian governments are becoming more sophisticated in using technology to suppress dissent, while also exporting surveillance technology to other countries.

The challenge is that the same technology that enables surveillance can also empower citizens. Social media, encrypted messaging, and blockchain technology can help activists organize, communicate, and hold governments accountable.`,
    },
    {
      id: 'se-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-2-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is "digital authoritarianism"?',
        options: [
          { id: 'a', text: 'The use of digital technology by governments to monitor, control, and suppress their populations', isCorrect: true },
          { id: 'b', text: 'A political system where only technology experts are allowed to govern', isCorrect: false },
          { id: 'c', text: 'The replacement of human government officials with artificial intelligence', isCorrect: false },
          { id: 'd', text: 'A form of democracy where citizens vote online instead of at polling stations', isCorrect: false },
        ],
        hints: ['Think about how authoritarian governments use modern technology to maintain power.'],
        solution: 'Digital authoritarianism refers to the use of digital technology and the internet by authoritarian governments to surveil, censor, and control their populations. This includes mass surveillance, internet censorship, social media monitoring, facial recognition, and the use of spyware against journalists and activists. It represents a 21st-century evolution of authoritarian control, using technology to achieve what was previously impossible.',
      },
    },
    {
      id: 'se-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'In 2021, it was revealed that the Pegasus spyware, developed by the Israeli company NSO Group, had been used by governments around the world to surveil journalists, human rights activists, and opposition politicians. Discuss the human rights implications of private companies selling surveillance technology to governments. Who should be held responsible: the company, the government that uses it, or both?',
        hints: [
          'Consider the UN Guiding Principles on Business and Human Rights.',
          'Think about the argument that companies cannot control how their products are used versus the argument that they have a responsibility to prevent foreseeable harm.',
        ],
        solution: 'The Pegasus scandal raises fundamental questions about corporate responsibility for human rights. The UN Guiding Principles on Business and Human Rights establish that companies have a responsibility to respect human rights, including conducting due diligence to prevent their products from being used for abuses. NSO Group argued it only sold to governments for legitimate law enforcement purposes and could not control end use. However, evidence showed the technology was systematically used against journalists and activists, suggesting the company was aware of or should have foreseen the abuses. Both parties bear responsibility: the government for committing the surveillance, and the company for providing the tool with knowledge of likely misuse. This case highlights the need for international regulation of surveillance technology exports, similar to arms export controls.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-5-text-summary',
      type: 'text',
      title: 'Summary',
      content: `**What we have learned in this chapter:**

- **Climate change** is a major human rights challenge, threatening rights to life, food, water, health, and housing, with the poorest countries most affected
- **Climate justice** demands that those most responsible for emissions help those most affected
- Existing international law does not adequately protect **climate-displaced people**, creating an urgent need for new legal frameworks
- **Digital authoritarianism** uses surveillance, censorship, and AI to suppress populations, threatening privacy, expression, and association
- **Spyware** like Pegasus is used against journalists and activists, raising questions about corporate responsibility for human rights
- The **rise of authoritarianism** globally is rolling back democratic freedoms in many countries
- Technology is a double-edged sword: it enables both surveillance and resistance
- The human rights framework must evolve to address 21st-century challenges while preserving its core principles of universality and dignity`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-2-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'The human rights framework was designed in the aftermath of World War II, in a world very different from today. Some argue it needs fundamental reform to address 21st-century challenges like climate change, artificial intelligence, and digital surveillance. Others argue that the existing framework is flexible enough to adapt. Write an essay discussing whether the human rights framework needs to be reformed or updated. Support your argument with specific examples.',
        hints: [
          'Consider both the strengths of the existing framework (universality, moral authority) and its gaps (climate refugees, digital rights, corporate accountability).',
          'Think about whether new rights need to be added or whether existing rights can be interpreted to cover new challenges.',
        ],
        solution: 'A strong essay would argue that the core principles of the human rights framework remain valid and should be preserved, but that significant updates are needed to address 21st-century realities. The framework\'s strengths include its moral authority, universality, and the institutional infrastructure built around it. However, gaps include: the lack of protection for climate-displaced people, inadequate regulation of corporate human rights responsibilities, the absence of a right to internet access, insufficient frameworks for AI governance, and weak enforcement mechanisms. Examples of successful adaptation include the 2022 recognition of the right to a clean environment. A balanced answer would argue for evolution rather than revolution: expanding existing rights through interpretation and adding new instruments for specific challenges, while maintaining the foundational principles of dignity, universality, and indivisibility.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-2-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Choose one of the following contemporary human rights challenges and prepare a detailed analysis: (a) the treatment of Uyghurs in China, (b) the refugee crisis in the Mediterranean, or (c) the impact of social media on democracy. Identify which specific human rights are at stake, explain the positions of different actors (governments, international organizations, civil society), and propose concrete steps the international community could take to address the situation.',
        hints: [
          'Reference specific articles from the UDHR or other human rights instruments.',
          'Consider the political, economic, and practical barriers to addressing the issue.',
          'Think about what has been tried and why it has or has not worked.',
        ],
        solution: 'A thorough analysis would: (1) Identify the specific challenge and provide context; (2) List the specific human rights at stake with references to relevant articles and treaties; (3) Present the positions of key actors -- the responsible government, affected populations, neighboring states, the UN, NGOs, and major powers; (4) Evaluate what has been done so far and why it has been insufficient; (5) Propose realistic steps for improvement, such as targeted sanctions, diplomatic pressure, legal accountability through international courts, support for affected populations, and strengthening of monitoring mechanisms. For example, analyzing the Uyghur situation would involve rights to freedom from torture, freedom of religion, cultural rights, and due process; China\'s claims of counter-terrorism; international responses ranging from sanctions to investigations; and proposals for ICC referral, economic pressure, and refugee resettlement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Climate justice', definition: 'The principle that those most responsible for climate change should bear the greatest responsibility for addressing it, and that the most vulnerable must be protected.' },
    { term: 'Climate refugees', definition: 'People displaced by the effects of climate change, who currently lack formal legal protection under international refugee law.' },
    { term: 'Digital authoritarianism', definition: 'The use of digital technology by authoritarian governments to surveil, censor, and control their populations.' },
    { term: 'Corporate responsibility', definition: 'The obligation of businesses to respect human rights and prevent their products and activities from contributing to abuses.' },
    { term: 'Right to a healthy environment', definition: 'Recognized by the UN General Assembly in 2022 as a universal human right, linking environmental protection to human dignity.' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const SAMF_ENGELSK_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMF_ENGELSK_2_1, CHAPTER_SAMF_ENGELSK_2_2, CHAPTER_SAMF_ENGELSK_2_3,
  CHAPTER_SAMF_ENGELSK_2_4, CHAPTER_SAMF_ENGELSK_2_5,
];
