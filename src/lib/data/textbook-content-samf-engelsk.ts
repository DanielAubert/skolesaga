/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsfaglig engelsk (VG2/VG3 valgfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 1: Democracy and Political Systems
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_1: TextbookChapter = {
  id: 'samf-engelsk-1',
  courseId: 'samf-engelsk',
  chapterNumber: '1',
  title: 'Democracy and Political Systems',
  description: 'Explore different forms of government, democratic principles, and political participation around the world.',
  estimatedMinutes: 60,
  competenceGoals: [
    'discuss and elaborate on political systems and democracy in English-speaking countries and internationally',
    'analyze and discuss how political decisions affect individuals and societies',
  ],
  content: [
    {
      id: 'samf-engelsk-1-intro',
      type: 'text',
      content: `## What is Democracy?

Democracy is a system of government where power ultimately rests with the people. The word comes from the Greek *demos* (people) and *kratos* (power or rule). While the concept originated in ancient Athens around 500 BCE, modern democracies have evolved significantly from their historical roots.

**Core principles of democracy:**
- Popular sovereignty - ultimate power belongs to the people
- Political equality - one person, one vote
- Rule of law - everyone, including leaders, is subject to the law
- Protection of individual rights and freedoms
- Free, fair, and regular elections
- Freedom of expression and press
- Separation of powers

**Why democracy matters:**
Democratic systems provide mechanisms for peaceful transfer of power, accountability of leaders, and protection of minority rights while respecting majority decisions.`,
    },
    {
      id: 'samf-engelsk-1-def-1',
      type: 'definition',
      title: 'Types of Democracy',
      content: `**Direct Democracy:**
Citizens vote directly on laws and policies. Rare in modern nation-states but used in referendums and some Swiss cantons.

**Representative Democracy:**
Citizens elect representatives to make decisions on their behalf. The most common form today.

**Parliamentary Democracy:**
The executive (Prime Minister) is chosen by and accountable to the legislature (Parliament). Examples: UK, Norway, Canada, Australia.

**Presidential Democracy:**
The executive (President) is elected separately from the legislature and has independent authority. Examples: USA, Brazil, Nigeria.

**Constitutional Monarchy:**
A monarch serves as head of state with limited ceremonial powers, while elected officials govern. Examples: UK, Norway, Japan, Spain.

**Federal vs. Unitary Systems:**
Federal systems divide power between national and regional governments (USA, Germany). Unitary systems concentrate power at the national level (UK, France).`,
    },
    {
      id: 'samf-engelsk-1-def-2',
      type: 'definition',
      title: 'Key Democratic Institutions',
      content: `**Legislature (Parliament/Congress):**
Makes laws, represents citizens, oversees government. May be unicameral (one chamber) or bicameral (two chambers).

**Executive (Government/Administration):**
Implements laws, conducts foreign policy, manages daily governance. Led by Prime Minister or President.

**Judiciary (Courts):**
Interprets laws, resolves disputes, protects constitutional rights. Independence from political pressure is crucial.

**Electoral Systems:**
- *First-past-the-post* - winner takes all in each district (UK, USA)
- *Proportional representation* - seats allocated based on vote share (Norway, Germany)
- *Mixed systems* - combine elements of both (Germany, New Zealand)

**Civil Society:**
Non-governmental organizations, media, unions, and citizen groups that hold power accountable and enable participation beyond voting.`,
    },
    {
      id: 'samf-engelsk-1-example-1',
      type: 'example',
      title: 'Comparing Political Systems: UK vs. USA',
      problem: `How do the political systems of the United Kingdom and the United States differ, despite both being democracies?`,
      solution: `**United Kingdom - Parliamentary Democracy:**

1. **Executive:** Prime Minister leads government, chosen by Parliament (typically leader of majority party)
2. **Legislature:** Parliament with House of Commons (elected) and House of Lords (appointed/hereditary)
3. **Head of State:** Monarch (currently King Charles III) with ceremonial role
4. **Constitution:** Unwritten, based on conventions, statutes, and precedents
5. **Elections:** No fixed terms; PM can call elections within 5-year maximum

**United States - Presidential Democracy:**

1. **Executive:** President elected separately, serves fixed 4-year term (max two terms)
2. **Legislature:** Congress with House of Representatives and Senate, both elected
3. **Head of State:** President combines head of state and head of government
4. **Constitution:** Written document from 1787, amended 27 times
5. **Elections:** Fixed election dates, complex primary system

**Key Differences:**
- Separation of powers is stricter in the USA
- UK Prime Minister can be removed by Parliament; US President cannot (except impeachment)
- UK has no formal judicial review of legislation; US Supreme Court can strike down laws
- Both systems have evolved to represent different approaches to democratic governance`,
    },
    {
      id: 'samf-engelsk-1-text-2',
      type: 'text',
      content: `## Challenges to Democracy

Modern democracies face numerous challenges that test their resilience and adaptability:

**Populism and Polarization:**
Rising populist movements challenge established institutions and norms. Political polarization makes compromise difficult and can undermine trust in democratic processes.

**Disinformation:**
The spread of false information through social media threatens informed citizen participation. Distinguishing fact from fiction has become increasingly difficult.

**Declining Trust:**
Many democracies see falling trust in political institutions, politicians, and traditional media. This can lead to lower voter turnout and civic engagement.

**Economic Inequality:**
When wealth becomes concentrated, it can translate into disproportionate political influence, undermining the principle of political equality.

**Threats to Press Freedom:**
Attacks on journalists and independent media weaken the accountability mechanisms essential to democracy.

**Backsliding:**
Some countries that transitioned to democracy have seen erosion of democratic norms and institutions - a phenomenon called "democratic backsliding."`,
    },
    {
      id: 'samf-engelsk-1-note-1',
      type: 'note',
      title: 'Democracy Index',
      content: `The Economist Intelligence Unit publishes an annual Democracy Index that ranks countries on five criteria: electoral process, government functioning, political participation, political culture, and civil liberties.

Countries are classified as:
- **Full democracies** (score 8-10): Norway, New Zealand, Finland
- **Flawed democracies** (6-8): USA, France, India
- **Hybrid regimes** (4-6): Turkey, Pakistan, Nigeria
- **Authoritarian regimes** (0-4): China, Russia, North Korea

As of recent indices, less than half the world's population lives in some form of democracy, and only about 8% in a full democracy.`,
    },
    {
      id: 'samf-engelsk-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Define democracy in your own words and explain three core principles that you consider essential for a functioning democracy.',
        hints: ['Consider what makes democracy different from other forms of government', 'Think about both rights and responsibilities'],
        solution: 'A good answer should define democracy as government by the people and identify principles such as: popular sovereignty, political equality, rule of law, protection of rights, free elections, separation of powers, or freedom of expression. The explanation should demonstrate understanding of why these principles are interconnected.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare and contrast parliamentary and presidential systems of government:',
        subTasks: [
          {
            label: 'a',
            task: 'How is the executive chosen in each system?',
            solution: 'In parliamentary systems, the Prime Minister is chosen by the legislature (typically as leader of the majority party or coalition). In presidential systems, the President is elected separately by the people, usually through direct election or an electoral college.',
          },
          {
            label: 'b',
            task: 'What is the relationship between executive and legislature in each?',
            solution: 'In parliamentary systems, the executive is accountable to and can be removed by the legislature through a vote of no confidence. In presidential systems, the executive is independent from the legislature and serves a fixed term regardless of legislative support.',
          },
          {
            label: 'c',
            task: 'Give two examples of countries using each system.',
            solution: 'Parliamentary: United Kingdom, Canada, Norway, Australia, Germany. Presidential: United States, Brazil, Mexico, Nigeria, South Korea.',
          },
        ],
        solution: 'See sub-tasks for complete answer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain the difference between "first-past-the-post" and "proportional representation" electoral systems. What are the advantages and disadvantages of each?',
        hints: ['Think about representation, stability, and voter choice'],
        solution: 'First-past-the-post: Winner takes all in each constituency. Advantages: clear winner, local representation, stable governments. Disadvantages: wasted votes, underrepresentation of smaller parties, possible majority governments with minority of votes. Proportional representation: Seats allocated based on share of votes. Advantages: fair representation of all views, few wasted votes, encourages voter turnout. Disadvantages: coalition governments can be unstable, weaker link between representatives and localities, can empower extremist parties.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Discuss one major challenge facing democracies today. Use specific examples from at least two countries to support your analysis.',
        hints: ['Consider: polarization, disinformation, declining trust, inequality, populism'],
        solution: 'A good answer should identify a specific challenge (e.g., polarization, disinformation) and provide concrete examples from multiple countries. For example, discussing political polarization in the USA and UK, with examples such as the January 6th Capitol attack or Brexit debates. The answer should analyze causes, consequences, and potential solutions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-1-ex-5',
        number: '5',
        type: 'classic',
        task: '"Democracy is the worst form of government, except for all the others." - Winston Churchill. Discuss this statement with reference to the strengths and weaknesses of democratic systems.',
        hints: ['Consider what alternatives exist and their track records', 'Think about trade-offs in governance'],
        solution: 'A strong response should acknowledge both criticisms of democracy (slow decision-making, vulnerability to populism, difficulty addressing long-term issues) and its advantages (peaceful power transfer, accountability, protection of rights). The discussion should compare democracy to authoritarian alternatives and consider why, despite its flaws, democracy remains preferable to most people.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research a country that has experienced "democratic backsliding" in recent years. Describe what has happened and analyze the factors that contributed to the erosion of democratic norms.',
        hints: ['Consider Hungary, Poland, Turkey, Brazil, or the Philippines', 'Look at changes to media, judiciary, elections, and civil liberties'],
        solution: 'A complete answer should identify a specific country, describe concrete changes (weakening of courts, attacks on press freedom, changes to electoral rules, erosion of checks and balances), and analyze contributing factors (economic grievances, cultural anxieties, weakness of civil society, external influences). Examples might include Hungary under Orban or Turkey under Erdogan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2: Human Rights and Justice
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_2: TextbookChapter = {
  id: 'samf-engelsk-2',
  courseId: 'samf-engelsk',
  chapterNumber: '2',
  title: 'Human Rights and Justice',
  description: 'Examine the foundations of human rights, international frameworks, and contemporary issues of justice and equality.',
  estimatedMinutes: 60,
  competenceGoals: [
    'discuss and elaborate on human rights, justice, and equality in English-speaking countries and internationally',
    'analyze how historical events have shaped current human rights frameworks',
  ],
  content: [
    {
      id: 'samf-engelsk-2-intro',
      type: 'text',
      content: `## The Foundation of Human Rights

Human rights are fundamental rights and freedoms that belong to every person, regardless of nationality, sex, ethnicity, religion, or any other status. They are based on the principle of human dignity - the inherent worth of every individual.

**Historical Development:**
- **Magna Carta (1215)** - Limited the power of English kings
- **English Bill of Rights (1689)** - Established parliamentary supremacy and basic rights
- **American Declaration of Independence (1776)** - "All men are created equal"
- **French Declaration of the Rights of Man (1789)** - Universal rights after revolution
- **Universal Declaration of Human Rights (1948)** - First global statement of human rights

**Categories of Human Rights:**
1. **Civil and political rights** - freedom of speech, religion, fair trial
2. **Economic, social, and cultural rights** - education, healthcare, housing
3. **Collective rights** - self-determination, development, healthy environment

Human rights are often described as:
- **Universal** - apply to all people everywhere
- **Inalienable** - cannot be taken away or given up
- **Indivisible** - all rights are equally important
- **Interdependent** - fulfillment of one right often depends on others`,
    },
    {
      id: 'samf-engelsk-2-def-1',
      type: 'definition',
      title: 'Key Human Rights Documents',
      content: `**Universal Declaration of Human Rights (UDHR, 1948):**
Adopted by the UN General Assembly, it sets out 30 articles covering fundamental rights. Not legally binding but highly influential. Drafted by committee including Eleanor Roosevelt.

**International Covenant on Civil and Political Rights (ICCPR, 1966):**
Legally binding treaty protecting rights such as life, freedom from torture, fair trial, privacy, freedom of expression, and assembly.

**International Covenant on Economic, Social and Cultural Rights (ICESCR, 1966):**
Legally binding treaty on rights to work, fair wages, education, healthcare, and cultural participation.

**European Convention on Human Rights (ECHR, 1950):**
Regional treaty enforced by the European Court of Human Rights in Strasbourg. Individuals can bring cases against states.

**Geneva Conventions (1949):**
Four treaties establishing humanitarian law in warfare - protecting wounded soldiers, prisoners of war, and civilians.

**Convention on the Elimination of All Forms of Discrimination Against Women (CEDAW, 1979):**
International bill of rights for women addressing discrimination and promoting equality.`,
    },
    {
      id: 'samf-engelsk-2-def-2',
      type: 'definition',
      title: 'Justice Concepts',
      content: `**Distributive Justice:**
Fair allocation of resources and opportunities in society. Questions of wealth distribution, access to education and healthcare.

**Procedural Justice:**
Fairness in processes and decision-making. Equal treatment under the law, due process, impartial courts.

**Restorative Justice:**
Focus on repairing harm rather than punishment. Involves victims, offenders, and community in addressing wrongdoing.

**Retributive Justice:**
Punishment proportional to the offense committed. Based on the idea that wrongdoers deserve to suffer consequences.

**Social Justice:**
Fair and just relations between individuals and society. Addresses systemic inequalities based on race, gender, class, etc.

**Environmental Justice:**
Fair distribution of environmental benefits and burdens. Recognition that pollution and climate change disproportionately affect marginalized communities.`,
    },
    {
      id: 'samf-engelsk-2-example-1',
      type: 'example',
      title: 'Case Study: The Civil Rights Movement in the USA',
      problem: `How did the American Civil Rights Movement advance human rights and what were its key achievements?`,
      solution: `**Background:**
Despite the end of slavery (1865), African Americans faced systematic discrimination through Jim Crow laws in the South and racism nationwide. Segregation was legal, voting rights were suppressed, and violence against Black Americans was common.

**Key Events and Achievements:**

1. **Brown v. Board of Education (1954)**
   Supreme Court ruled school segregation unconstitutional, overturning "separate but equal" doctrine.

2. **Montgomery Bus Boycott (1955-56)**
   Year-long protest sparked by Rosa Parks' arrest. Led to desegregation of public transit.

3. **March on Washington (1963)**
   250,000 people gathered; Martin Luther King Jr. delivered "I Have a Dream" speech.

4. **Civil Rights Act (1964)**
   Outlawed discrimination based on race, color, religion, sex, or national origin.

5. **Voting Rights Act (1965)**
   Prohibited racial discrimination in voting, enabling millions of Black Americans to vote.

**Legacy:**
The movement demonstrated the power of nonviolent protest, inspired similar movements globally, and established legal foundations for equality. However, systemic racism persists, fueling continued activism including Black Lives Matter.`,
    },
    {
      id: 'samf-engelsk-2-text-2',
      type: 'text',
      content: `## Contemporary Human Rights Challenges

**Mass Surveillance:**
Governments and corporations collect vast amounts of personal data. Balancing security concerns with privacy rights remains contentious, especially after revelations by Edward Snowden.

**Freedom of Expression Online:**
Social media platforms grapple with moderating content while protecting free speech. Questions arise about who decides what speech is acceptable.

**Refugee Rights:**
Over 100 million people are forcibly displaced worldwide. Many face detention, denial of asylum, and dangerous journeys. The 1951 Refugee Convention is increasingly strained.

**LGBTQ+ Rights:**
Progress varies dramatically globally. Same-sex marriage is legal in 30+ countries, while homosexuality remains criminalized in 70+ countries, with death penalty possible in some.

**Indigenous Rights:**
Indigenous peoples worldwide face threats to their lands, cultures, and self-determination. The UN Declaration on the Rights of Indigenous Peoples (2007) sets standards, but implementation is uneven.

**Business and Human Rights:**
Corporations can be complicit in human rights abuses through supply chains, environmental damage, or labor practices. The UN Guiding Principles (2011) establish corporate responsibilities.`,
    },
    {
      id: 'samf-engelsk-2-warning-1',
      type: 'warning',
      title: 'Cultural Relativism vs. Universal Rights',
      content: `A major debate in human rights is whether rights are truly universal or culturally determined.

**Universalist view:**
Human rights apply to all people everywhere because human dignity is universal. Cultural practices that violate rights (e.g., FGM, child marriage) cannot be justified.

**Cultural relativist view:**
Rights must be understood in cultural context. The UDHR reflects Western values and may be a form of cultural imperialism.

**Middle ground:**
While implementation may vary, core rights (life, freedom from torture, basic dignity) are universal. Cultural diversity should be respected but not used to justify oppression.

This debate has practical implications for international human rights enforcement and the role of states versus international bodies in protecting rights.`,
    },
    {
      id: 'samf-engelsk-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explain the difference between civil and political rights versus economic, social, and cultural rights. Give three examples of each category.',
        hints: ['Think about freedoms vs. entitlements', 'Consider what governments must do or refrain from doing'],
        solution: 'Civil and political rights are often "negative" rights requiring governments to refrain from interference: freedom of speech, freedom of religion, right to fair trial, freedom from torture, right to vote, privacy. Economic, social, and cultural rights are often "positive" rights requiring government action: right to education, right to healthcare, right to housing, right to work, right to social security, cultural rights.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze the historical development of human rights:',
        subTasks: [
          {
            label: 'a',
            task: 'Why was the Universal Declaration of Human Rights (1948) a significant milestone?',
            solution: 'It was the first international agreement on fundamental rights for all people. It came after WWII and the Holocaust, representing a global commitment to prevent such atrocities. It provided a common standard for all nations and inspired subsequent treaties and constitutions.',
          },
          {
            label: 'b',
            task: 'What role did World War II play in shaping modern human rights?',
            solution: 'The Holocaust and other WWII atrocities demonstrated the need for international human rights protections. The Nuremberg trials established individual criminal responsibility. The UN was created partly to prevent future conflicts and protect rights.',
          },
          {
            label: 'c',
            task: 'How have human rights expanded since 1948?',
            solution: 'New rights have been recognized: environmental rights, digital privacy, indigenous peoples rights. More groups have gained explicit protections: women, children, disabled persons, LGBTQ+ individuals. Regional human rights systems have developed. International criminal courts have been established.',
          },
        ],
        solution: 'See sub-tasks for complete answer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare different approaches to justice: distributive, procedural, restorative, and retributive. When might each approach be most appropriate?',
        hints: ['Consider different contexts: crime, social policy, conflict resolution'],
        solution: 'Distributive justice is appropriate for policy decisions about resource allocation (taxation, welfare). Procedural justice applies to legal proceedings and organizational decisions requiring fair processes. Restorative justice works well for crimes where healing relationships matters (community conflicts, juvenile justice). Retributive justice may be appropriate for serious crimes where deterrence and accountability are paramount. Often multiple approaches can be combined.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Discuss the debate between universalism and cultural relativism in human rights. What are the strongest arguments on each side?',
        hints: ['Consider concrete examples like FGM, gender roles, or religious practices'],
        solution: 'Universalist arguments: Human dignity is universal; victims of abuse rarely consent freely; cultural practices change over time; relativism can excuse oppression. Relativist arguments: Rights concepts emerged from Western history; imposition of rights can be neo-colonialism; communities should determine their values; some practices reflect legitimate cultural differences. A balanced view recognizes core universal rights while allowing cultural diversity in implementation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research a current human rights issue (e.g., refugee crisis, digital surveillance, indigenous rights, LGBTQ+ rights in a specific country). Describe the situation, identify which rights are at stake, and discuss potential solutions.',
        hints: ['Use reliable sources', 'Consider multiple perspectives', 'Be specific about which human rights documents are relevant'],
        solution: 'A strong answer should: 1) Clearly describe the situation with facts and examples, 2) Identify specific rights being violated (with reference to relevant documents like UDHR, ICCPR, ECHR), 3) Analyze causes and stakeholders, 4) Propose realistic solutions considering political, economic, and social factors, 5) Acknowledge complexity and competing interests.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-2-ex-6',
        number: '6',
        type: 'classic',
        task: '"The fight for human rights is never finished." Discuss this statement with reference to both historical achievements and ongoing challenges.',
        hints: ['Consider how rights that seem established can be threatened', 'Think about new challenges that emerge'],
        solution: 'A comprehensive answer should acknowledge historical progress (end of slavery, womens suffrage, decolonization, disability rights) while recognizing ongoing challenges (racial discrimination, gender inequality, new threats from technology, climate change impacts). It should discuss how rights can be eroded even in democracies and how new rights emerge as society evolves. Examples should be specific and drawn from multiple contexts.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 3: Economics and Globalization
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_3: TextbookChapter = {
  id: 'samf-engelsk-3',
  courseId: 'samf-engelsk',
  chapterNumber: '3',
  title: 'Economics and Globalization',
  description: 'Understand economic systems, international trade, and the effects of globalization on societies worldwide.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analyze economic systems and their impact on individuals and societies',
    'discuss globalization and its effects on different parts of the world',
  ],
  content: [
    {
      id: 'samf-engelsk-3-intro',
      type: 'text',
      content: `## Understanding Economics

Economics is the study of how societies allocate scarce resources to meet unlimited wants. Every society must answer three fundamental questions:
1. **What** goods and services should be produced?
2. **How** should they be produced?
3. **For whom** should they be produced?

**Key Economic Concepts:**

**Scarcity:** Resources are limited while wants are unlimited, forcing choices.

**Opportunity Cost:** The value of the next best alternative foregone when making a choice.

**Supply and Demand:** The interaction between what producers want to sell and what consumers want to buy determines prices.

**GDP (Gross Domestic Product):** The total value of goods and services produced in a country, used to measure economic output.

**Inflation:** A general increase in prices over time, reducing purchasing power.

**Unemployment:** The percentage of the labor force without jobs but actively seeking work.

**Economic Growth:** An increase in the production of goods and services over time.`,
    },
    {
      id: 'samf-engelsk-3-def-1',
      type: 'definition',
      title: 'Economic Systems',
      content: `**Market Economy (Capitalism):**
Private ownership of resources. Prices determined by supply and demand. Profit motive drives production. Examples: USA, UK, Singapore.
*Advantages:* Efficiency, innovation, consumer choice.
*Disadvantages:* Inequality, market failures, boom-bust cycles.

**Command Economy (Planned Economy):**
Government owns resources and makes economic decisions. Central planning determines production and distribution. Historical examples: Soviet Union, Maoist China.
*Advantages:* Can mobilize resources quickly, reduce inequality.
*Disadvantages:* Inefficiency, lack of innovation, limited freedom.

**Mixed Economy:**
Combines market and government elements. Private enterprise operates within regulatory framework. Government provides public goods and social safety nets. Examples: Norway, Germany, Canada.
*Most modern economies are mixed*, varying in the balance between market and state.

**Social Market Economy:**
Market economy with strong social protections. Government ensures fair competition, worker rights, and social welfare. Common in European countries.`,
    },
    {
      id: 'samf-engelsk-3-def-2',
      type: 'definition',
      title: 'Globalization',
      content: `**Definition:**
Globalization is the increasing interconnection of the worlds economies, societies, and cultures through trade, investment, technology, and movement of people.

**Dimensions of Globalization:**
- **Economic:** International trade, foreign investment, global supply chains
- **Political:** International organizations, global governance, diplomacy
- **Cultural:** Spread of ideas, media, lifestyles across borders
- **Technological:** Internet, communications, transportation advances

**Key Drivers:**
- Reduced transportation costs (containerization, air freight)
- Telecommunications revolution and the internet
- Trade liberalization (reduced tariffs and barriers)
- Multinational corporations seeking global markets
- International organizations (WTO, IMF, World Bank)

**Indicators:**
- Volume of international trade
- Foreign direct investment flows
- International migration
- Internet connectivity
- Cultural exchange`,
    },
    {
      id: 'samf-engelsk-3-example-1',
      type: 'example',
      title: 'Case Study: The Global Supply Chain',
      problem: `How does a smartphone illustrate the complexity of globalization and international trade?`,
      solution: `**The Journey of a Smartphone:**

A typical smartphone involves components and processes from dozens of countries:

**Raw Materials:**
- Rare earth elements from China, Congo, or Australia
- Lithium for batteries from Chile or Argentina
- Gold, silver, copper from various mining operations worldwide

**Components:**
- Processors designed in USA (Apple, Qualcomm) or UK (ARM)
- Memory chips from South Korea (Samsung) or Japan
- Screens from South Korea, Japan, or China
- Cameras from Japan or South Korea

**Manufacturing:**
- Assembly in China (Foxconn), Vietnam, or India
- Testing and quality control across multiple locations

**Software and Services:**
- Operating systems from USA (Apple iOS, Google Android)
- Apps developed globally
- Cloud services hosted worldwide

**Distribution:**
- Shipped globally via container ships and air freight
- Sold through retail networks on every continent

**Implications:**
- Global efficiency: Specialization reduces costs
- Vulnerability: Supply chain disruptions affect everyone (COVID-19 showed this)
- Labor issues: Working conditions vary across countries
- Environmental impact: Transportation and manufacturing create pollution
- Geopolitics: Technology became focus of US-China tensions`,
    },
    {
      id: 'samf-engelsk-3-text-2',
      type: 'text',
      content: `## Effects of Globalization

**Positive Effects:**

**Economic Growth:**
Global trade has lifted hundreds of millions out of poverty, particularly in Asia. Access to larger markets enables economic development.

**Consumer Benefits:**
Greater variety of goods at lower prices. Competition drives innovation and quality improvements.

**Knowledge and Technology Transfer:**
Ideas and innovations spread faster. Developing countries can adopt advanced technologies.

**Cultural Exchange:**
Exposure to different cultures, cuisines, art, and ideas. Greater global awareness and understanding.

**Negative Effects:**

**Inequality:**
Benefits have not been equally shared. Some regions and groups have been left behind while others prosper.

**Job Displacement:**
Manufacturing jobs moved to low-wage countries. Workers in developed countries face competition and wage pressure.

**Environmental Degradation:**
Increased production and transportation contribute to pollution and climate change. "Race to the bottom" in environmental standards.

**Cultural Homogenization:**
Concerns about loss of local cultures and traditions. Dominance of American/Western cultural products.

**Power Imbalances:**
Multinational corporations can be more powerful than small nations. Global institutions may not represent all countries equally.`,
    },
    {
      id: 'samf-engelsk-3-note-1',
      type: 'note',
      title: 'International Economic Organizations',
      content: `**World Trade Organization (WTO):**
Regulates international trade, negotiates trade agreements, settles disputes. 164 member countries. Promotes free trade but criticized for favoring rich nations.

**International Monetary Fund (IMF):**
Provides loans to countries with balance of payments problems. Promotes global financial stability. Conditions on loans ("structural adjustment") have been controversial.

**World Bank:**
Provides loans and grants for development projects in low- and middle-income countries. Focuses on poverty reduction and infrastructure.

**G7/G20:**
Groups of major economies that coordinate economic policy. G7: USA, UK, France, Germany, Italy, Canada, Japan. G20 includes emerging economies like China, India, Brazil.

**Regional Trade Agreements:**
- EU Single Market - most integrated
- USMCA (North America)
- ASEAN (Southeast Asia)
- African Continental Free Trade Area

These organizations shape the rules of the global economy but face criticism for lack of democracy and transparency.`,
    },
    {
      id: 'samf-engelsk-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explain the three fundamental economic questions every society must answer. How do market economies and command economies answer these questions differently?',
        hints: ['What, How, For whom', 'Consider role of prices vs. planning'],
        solution: 'What to produce: Markets answer through consumer demand and profit signals; command economies through central planning. How to produce: Markets answer through competition and cost minimization; command economies through government directives. For whom: Markets distribute based on purchasing power; command economies distribute based on government priorities (theoretically equal, often based on political connections).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare the economic systems of two countries:',
        subTasks: [
          {
            label: 'a',
            task: 'How would you classify the US and Norway in terms of economic system?',
            solution: 'Both are mixed economies but differ in degree. USA is more market-oriented with less government intervention, lower taxes, fewer regulations. Norway has stronger government involvement, higher taxes, more extensive welfare state, but still has private enterprise and markets.',
          },
          {
            label: 'b',
            task: 'What role does the government play in each economy?',
            solution: 'USA: Limited regulation, lower social spending, private healthcare and education. Norway: Extensive regulation, high social spending, universal healthcare and education, significant state ownership (Equinor, Telenor).',
          },
          {
            label: 'c',
            task: 'What are the advantages and disadvantages of each approach?',
            solution: 'USA: More economic dynamism and entrepreneurship, but higher inequality and less security. Norway: Greater equality and security, but higher taxes and potentially less innovation. Both are prosperous but make different tradeoffs.',
          },
        ],
        solution: 'See sub-tasks for complete answer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'What are the main drivers of globalization? Explain how technological change has accelerated global economic integration.',
        hints: ['Consider transportation, communication, and digital technologies'],
        solution: 'Main drivers: technological change, trade liberalization, multinational corporations, international institutions. Technology: Containerization drastically reduced shipping costs. Jet travel enabled global business. Internet enables instant communication and information sharing. Digital platforms allow global services trade. Technology reduces "friction" of distance, making global trade easier and cheaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyze the winners and losers of globalization. Why has globalization benefited some groups more than others?',
        hints: ['Consider workers in different countries and sectors', 'Think about skills, capital, and geography'],
        solution: 'Winners: Consumers (lower prices, more choice), skilled workers in high-income countries, workers in developing countries with export industries, multinational corporations, investors with global portfolios. Losers: Manufacturing workers in high-income countries, communities dependent on industries that moved abroad, small businesses competing with global giants, developing countries that failed to integrate. Reasons: Gains depend on skills, mobility, access to capital, and geographic location.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Evaluate the role of one international economic organization (WTO, IMF, or World Bank). What are its main functions, and how has it been criticized?',
        hints: ['Consider both official goals and actual outcomes', 'Look at perspectives from different countries'],
        solution: 'A thorough answer should describe the organizations purpose and activities, then evaluate its effectiveness. For example, IMF: Provides financial assistance and promotes stability, but has been criticized for imposing harsh conditions, favoring creditors over debtors, giving too much influence to wealthy countries, and not preventing financial crises. Different stakeholders (developed countries, developing countries, NGOs) have different views.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Discuss whether globalization is reversing. What trends suggest either continued integration or growing fragmentation of the global economy?',
        hints: ['Consider trade wars, pandemic effects, geopolitics, reshoring'],
        solution: 'Signs of reversal: US-China trade conflict, Brexit, pandemic supply chain disruptions, calls for reshoring, rising protectionism. Signs of continuation: Digital services continue to globalize, developing countries still seeking integration, climate change requires global cooperation. Likely outcome: Not a simple reversal but reconfiguration - possibly regionalization, decoupling in sensitive sectors (technology), but continued integration in others.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 4: Social Issues and Inequality
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_4: TextbookChapter = {
  id: 'samf-engelsk-4',
  courseId: 'samf-engelsk',
  chapterNumber: '4',
  title: 'Social Issues and Inequality',
  description: 'Examine social stratification, poverty, discrimination, and efforts to create more equitable societies.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analyze social inequality and its causes and consequences',
    'discuss how different societies address social issues and challenges',
  ],
  content: [
    {
      id: 'samf-engelsk-4-intro',
      type: 'text',
      content: `## Understanding Social Inequality

Social inequality refers to the unequal distribution of resources, opportunities, and rewards in society. While some degree of inequality exists in all societies, the extent and forms vary dramatically.

**Dimensions of Inequality:**

**Economic Inequality:**
Differences in income and wealth. The gap between rich and poor has grown in many countries since the 1980s. The richest 1% now own more than 40% of global wealth.

**Social Stratification:**
The hierarchical arrangement of society into layers or strata based on factors like class, race, gender, and education.

**Social Mobility:**
The ability to move between social positions. High mobility means people's outcomes depend less on their starting position.

**Intersectionality:**
Multiple forms of inequality (race, gender, class) interact and compound each other. A Black woman may face different challenges than a white woman or Black man.

**Key Questions:**
- How much inequality is acceptable or inevitable?
- What causes inequality to persist across generations?
- What policies can reduce inequality while maintaining economic dynamism?
- How do societies balance equality of opportunity with equality of outcomes?`,
    },
    {
      id: 'samf-engelsk-4-def-1',
      type: 'definition',
      title: 'Types of Inequality',
      content: `**Income Inequality:**
Differences in earnings from work and investments. Measured by Gini coefficient (0 = perfect equality, 1 = perfect inequality). USA Gini: ~0.48; Norway: ~0.27.

**Wealth Inequality:**
Differences in accumulated assets (property, savings, investments). More extreme than income inequality. Top 10% often own 70%+ of wealth.

**Class:**
Social categories based on economic position and occupation. Traditional divisions: upper, middle, working class. Shapes lifestyle, opportunities, and life chances.

**Racial and Ethnic Inequality:**
Systematic disadvantages based on race or ethnicity. Includes discrimination, segregation, and unequal access to resources.

**Gender Inequality:**
Differences between men and women in economic opportunity, political participation, and social status. Gender pay gap persists in all countries.

**Educational Inequality:**
Unequal access to quality education. Often reflects and reinforces other inequalities.

**Health Inequality:**
Differences in health outcomes based on social position. Poor health reduces opportunities; poverty increases health risks.`,
    },
    {
      id: 'samf-engelsk-4-def-2',
      type: 'definition',
      title: 'Poverty',
      content: `**Absolute Poverty:**
Lacking basic necessities for survival - adequate food, shelter, clean water. The World Bank defines extreme poverty as living on less than $2.15/day (2023).

**Relative Poverty:**
Having significantly less than the average in a society. Often defined as below 50-60% of median income. Varies by country.

**Poverty Line:**
Income threshold below which a person or family is considered poor. Different definitions in different countries.

**Working Poor:**
People who are employed but still live in poverty due to low wages or insufficient hours.

**Child Poverty:**
Particularly concerning as it affects development and life chances. Higher rates in USA (~17%) than most European countries (5-10%).

**Poverty Trap:**
When escaping poverty is extremely difficult because the poor lack resources to improve their situation. Getting a job may mean losing benefits.

**Causes of Poverty:**
- Structural factors: Lack of jobs, discrimination, inadequate education
- Individual factors: Health problems, family breakdown, substance abuse
- Usually a combination of both`,
    },
    {
      id: 'samf-engelsk-4-example-1',
      type: 'example',
      title: 'Case Study: Racial Inequality in the United States',
      problem: `How has historical racism created lasting inequality in the United States, and what approaches have been used to address it?`,
      solution: `**Historical Background:**
- Slavery (1619-1865): Millions of Africans forced into bondage
- Segregation (1865-1965): Jim Crow laws enforced racial separation
- Discrimination in housing, employment, education continued

**Lasting Effects Today:**

**Wealth Gap:**
Median white family wealth: ~$188,000
Median Black family wealth: ~$24,000
Result of generations of denied property ownership, redlining, discrimination

**Income Gap:**
Black workers earn about 73% of white workers on average
Factors: Educational gaps, discrimination, occupational segregation

**Criminal Justice:**
Black Americans are incarcerated at 5x the rate of whites
Disparities in policing, sentencing, access to legal representation

**Health:**
Black Americans have lower life expectancy and higher rates of many diseases
Linked to poverty, healthcare access, environmental racism

**Approaches to Address:**

1. **Civil Rights Laws:** Prohibit discrimination (limited enforcement)
2. **Affirmative Action:** Consider race in admissions/hiring (controversial, Supreme Court ruled against in higher education 2023)
3. **Community Investment:** Targeted programs for disadvantaged areas
4. **Criminal Justice Reform:** Addressing over-incarceration
5. **Reparations:** Compensation for slavery (debated, some local programs)

Progress has been made, but substantial gaps remain, fueling movements like Black Lives Matter.`,
    },
    {
      id: 'samf-engelsk-4-text-2',
      type: 'text',
      content: `## Addressing Inequality

**Different Perspectives:**

**Conservative/Libertarian View:**
Some inequality is natural and provides incentives. Focus should be on equality of opportunity, not outcomes. Government intervention can make things worse. Poverty programs create dependency.

**Liberal/Progressive View:**
Inequality results from unfair structures and discrimination. Government should actively reduce inequality through taxation, social programs, and regulation. Poverty programs empower people.

**Socialist View:**
Capitalism inevitably produces harmful inequality. Radical redistribution and worker ownership needed. Society should guarantee basic needs for all.

**Policy Approaches:**

**Education:**
Investment in early childhood, K-12 schools, and higher education. Aim to break cycle of poverty through skills and credentials.

**Tax Policy:**
Progressive taxation (higher rates on higher incomes). Estate taxes to limit inherited inequality. Tax credits for low earners.

**Social Programs:**
Safety net programs: unemployment insurance, food assistance, healthcare. Debate over universal vs. targeted benefits.

**Minimum Wage:**
Government-mandated wage floor. Debate over effects on employment and prices.

**Anti-Discrimination:**
Laws against discrimination in employment, housing, lending. Affirmative action policies.

**Labor Rights:**
Unions and collective bargaining to improve wages. Regulations on working conditions.`,
    },
    {
      id: 'samf-engelsk-4-note-1',
      type: 'note',
      title: 'Measuring Inequality',
      content: `**Gini Coefficient:**
Measures income distribution on a scale from 0 (perfect equality) to 1 (one person has everything).
- Most equal: Slovenia, Norway, Iceland (~0.25)
- Most unequal: South Africa, Brazil, Zambia (~0.55+)

**Palma Ratio:**
Compares income share of richest 10% to poorest 40%. Focuses on top and bottom, ignoring middle.

**Human Development Index (HDI):**
Combines life expectancy, education, and income. Shows broader quality of life beyond just money.

**Social Mobility Indices:**
Measure how much parents' position affects childrens outcomes.
- Highest mobility: Denmark, Norway, Finland
- Lower mobility: USA, UK

**Poverty Rates:**
Vary by definition. OECD uses 50% of median income.
- Lowest: Iceland, Czech Republic (~5%)
- Highest among developed: USA, Israel (~17%)

These measures help compare countries and track progress over time.`,
    },
    {
      id: 'samf-engelsk-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explain the difference between absolute and relative poverty. Why do both concepts matter for understanding poverty?',
        hints: ['Consider survival needs vs. social participation', 'Think about how poverty is experienced in rich vs. poor countries'],
        solution: 'Absolute poverty means lacking basic necessities - food, shelter, clean water - regardless of what others have. Relative poverty means having significantly less than others in your society, limiting social participation. Both matter: Absolute poverty is about survival; relative poverty affects dignity and opportunity. A person in relative poverty in Norway may be materially better off than someone not in poverty in a poor country, but still face real hardships.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze the causes of income and wealth inequality:',
        subTasks: [
          {
            label: 'a',
            task: 'What factors contribute to income inequality?',
            solution: 'Education and skills differences, discrimination, globalization (competition from low-wage countries), technological change (rewarding high skills), decline of unions, tax policy, inheritance, social networks and connections.',
          },
          {
            label: 'b',
            task: 'Why is wealth inequality typically greater than income inequality?',
            solution: 'Wealth accumulates over time through savings and investments. It passes between generations through inheritance. Returns on investments often exceed wage growth. Those with wealth can invest and grow it; those without cannot.',
          },
          {
            label: 'c',
            task: 'How do inequality in one generation affect the next?',
            solution: 'Wealthy families provide better education, nutrition, healthcare, connections. Children of poor families face obstacles and stress. Neighborhood effects matter (quality schools, safety). Inheritance transfers wealth directly. Low social mobility means starting position strongly affects outcomes.',
          },
        ],
        solution: 'See sub-tasks for complete answer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain the concept of intersectionality. How might a Black woman experience inequality differently than a white woman or a Black man?',
        hints: ['Consider how multiple identities interact', 'Think about specific experiences in workplace, healthcare, criminal justice'],
        solution: 'Intersectionality means multiple forms of identity (race, gender, class, etc.) interact to create unique experiences of privilege and oppression. A Black woman may face: specific stereotypes (e.g., "angry Black woman"), discrimination that white women and Black men dont face, lower wages than all other groups, specific health disparities, unique challenges in professional settings. Her experiences cannot be understood by adding together "being Black" and "being female" - the combination creates distinct experiences.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare how different countries approach reducing inequality. What policies seem most effective?',
        hints: ['Consider Nordic countries vs. USA vs. UK', 'Look at education, taxes, social programs'],
        solution: 'Nordic approach: High taxes, generous universal benefits, free education and healthcare, strong labor rights. Results: Low inequality, high mobility, high prosperity. USA approach: Lower taxes, targeted programs, expensive education and healthcare. Results: Higher inequality, lower mobility, high GDP but more poverty. Most effective policies appear to be: universal early childhood education, progressive taxation, strong safety net, accessible healthcare and higher education, and policies promoting employment.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Discuss the relationship between equality of opportunity and equality of outcomes. Can you have one without the other?',
        hints: ['Consider how family background affects opportunities', 'Think about what genuine equal opportunity would require'],
        solution: 'Equality of opportunity means everyone has the same chances to succeed, regardless of background. Equality of outcomes means similar results for everyone. The relationship is complex: True equality of opportunity is hard to achieve when outcomes are very unequal (wealthy parents can buy advantages for children). But equal outcomes could require restricting freedom and removing incentives. A middle ground recognizes that some outcome equality is needed to enable opportunity equality, while still allowing differences based on effort and talent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research a specific social issue (e.g., homelessness, food insecurity, educational achievement gaps, health disparities) in an English-speaking country. Describe the issue, analyze its causes, and evaluate policy responses.',
        hints: ['Use reliable data and sources', 'Consider structural and individual factors', 'Look at what has worked elsewhere'],
        solution: 'A strong answer should: 1) Define the issue and its scale with specific data, 2) Analyze root causes including both structural factors (economic, political, historical) and individual circumstances, 3) Describe current policy responses, 4) Evaluate effectiveness of policies with evidence, 5) Suggest improvements based on research and examples from other places.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 5: Environment and Sustainability
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_5: TextbookChapter = {
  id: 'samf-engelsk-5',
  courseId: 'samf-engelsk',
  chapterNumber: '5',
  title: 'Environment and Sustainability',
  description: 'Explore environmental challenges, climate change, and the pursuit of sustainable development.',
  estimatedMinutes: 60,
  competenceGoals: [
    'discuss environmental challenges and sustainable development in a global perspective',
    'analyze different approaches to addressing climate change and environmental issues',
  ],
  content: [
    {
      id: 'samf-engelsk-5-intro',
      type: 'text',
      content: `## The Environmental Crisis

Humanity faces interconnected environmental challenges that threaten the planet's ability to support life as we know it. These challenges require urgent action at local, national, and global levels.

**Major Environmental Challenges:**

**Climate Change:**
Rising global temperatures due to greenhouse gas emissions. Effects include: extreme weather, rising sea levels, ecosystem disruption, threats to food and water security.

**Biodiversity Loss:**
Species extinction at 100-1000 times the natural rate. Habitat destruction, pollution, and climate change are driving a sixth mass extinction.

**Pollution:**
Air pollution kills millions annually. Plastic pollutes oceans. Chemical contamination affects ecosystems and human health.

**Resource Depletion:**
Overconsumption of water, forests, fish, and minerals. Many resources are used faster than they can be replenished.

**Deforestation:**
Forests cleared for agriculture, logging, and development. Loss of carbon sinks, biodiversity, and indigenous lands.

**Ocean Acidification:**
CO2 absorption changes ocean chemistry, threatening coral reefs and marine life.

These challenges are connected - climate change drives biodiversity loss, deforestation accelerates climate change, and poverty makes environmental protection harder.`,
    },
    {
      id: 'samf-engelsk-5-def-1',
      type: 'definition',
      title: 'Climate Change Science',
      content: `**Greenhouse Effect:**
Natural process where gases in the atmosphere trap heat, making Earth habitable. Problem arises when human activities increase these gases.

**Greenhouse Gases:**
- Carbon dioxide (CO2) - from burning fossil fuels, deforestation
- Methane (CH4) - from livestock, rice paddies, landfills
- Nitrous oxide (N2O) - from agriculture, industry
- Fluorinated gases - from industrial processes

**Evidence of Climate Change:**
- Global temperature rise: ~1.1°C since pre-industrial era
- Sea level rise: ~20 cm since 1900, accelerating
- Ocean warming and acidification
- Melting ice sheets and glaciers
- Changing precipitation patterns
- More frequent extreme weather events

**IPCC (Intergovernmental Panel on Climate Change):**
UN body that assesses climate science. Reports represent scientific consensus. Warns we must limit warming to 1.5°C to avoid worst impacts.

**Paris Agreement (2015):**
International treaty to limit warming to well below 2°C, preferably 1.5°C. Countries submit Nationally Determined Contributions (NDCs). Current pledges insufficient - heading toward 2.5-3°C warming.`,
    },
    {
      id: 'samf-engelsk-5-def-2',
      type: 'definition',
      title: 'Sustainable Development',
      content: `**Definition:**
"Development that meets the needs of the present without compromising the ability of future generations to meet their own needs." (Brundtland Commission, 1987)

**Three Pillars:**
1. **Economic:** Sustainable growth, prosperity, employment
2. **Social:** Equity, health, education, community
3. **Environmental:** Protecting ecosystems, resources, climate

**UN Sustainable Development Goals (SDGs):**
17 goals to achieve by 2030, adopted in 2015:
- No poverty, zero hunger, good health
- Quality education, gender equality
- Clean water, affordable energy
- Decent work, reduced inequalities
- Sustainable cities, responsible consumption
- Climate action, life below water, life on land
- Peace, partnerships

**Circular Economy:**
Alternative to "take-make-dispose" linear model. Emphasizes reducing, reusing, recycling, and regenerating resources.

**Green Economy:**
Economic system that reduces environmental risks and ecological scarcities while achieving sustainable development.`,
    },
    {
      id: 'samf-engelsk-5-example-1',
      type: 'example',
      title: 'Case Study: Climate Policy Approaches',
      problem: `What are the main policy approaches to addressing climate change, and how effective have they been?`,
      solution: `**Main Policy Approaches:**

**1. Carbon Pricing:**
*Carbon Tax:* Direct tax on CO2 emissions. Examples: Sweden ($130/ton), Canada, UK.
*Cap-and-Trade:* Government sets emissions cap, companies trade allowances. Examples: EU ETS, California.
*Effectiveness:* Can reduce emissions cost-effectively. Challenges: Setting right price, competitiveness concerns, political resistance.

**2. Regulations:**
Emissions standards for vehicles, power plants, appliances. Building codes. Fuel efficiency requirements.
*Effectiveness:* Direct and certain results. Can be economically inefficient.

**3. Subsidies and Investment:**
Support for renewable energy, electric vehicles, research. Green infrastructure spending.
*Effectiveness:* Accelerates technology development. Can be expensive and create market distortions.

**4. International Agreements:**
Paris Agreement, Montreal Protocol (ozone). Coordination among nations.
*Effectiveness:* Montreal Protocol very successful. Paris relies on voluntary commitments, insufficient so far.

**Results So Far:**
- Emissions still rising globally (slowly)
- Renewables growing rapidly
- Electric vehicles expanding
- Some countries reducing emissions
- Not on track for 1.5°C goal
- More ambitious action needed`,
    },
    {
      id: 'samf-engelsk-5-text-2',
      type: 'text',
      content: `## Environmental Justice

Environmental issues affect different communities differently. Environmental justice addresses the unfair distribution of environmental burdens and benefits.

**Disproportionate Impacts:**

**On Poor Communities:**
Pollution, toxic waste, and environmental degradation often concentrated in low-income areas. Less political power to resist. "Sacrifice zones" bear costs while others get benefits.

**On Indigenous Peoples:**
Traditional lands threatened by extraction, development, climate change. Loss of culture, livelihoods, and sovereignty. Often excluded from decisions.

**On Developing Countries:**
Historical emissions came from rich countries, but climate impacts hit poor countries hardest. Less capacity to adapt. Climate migration and conflict.

**On Future Generations:**
Current consumption creates long-term problems. Intergenerational equity - are we fair to our descendants?

**Environmental Justice Movement:**
Originated in 1980s USA, highlighting racial disparities in toxic waste placement. Now global movement addressing intersection of environment, race, class, and colonialism.

**Key Principles:**
- Meaningful participation of affected communities
- Fair distribution of benefits and burdens
- Recognition of different knowledge systems
- Addressing historical injustices`,
    },
    {
      id: 'samf-engelsk-5-warning-1',
      type: 'warning',
      title: 'Climate Change Debates',
      content: `While scientific consensus on climate change is overwhelming, political debate continues:

**Contested Issues:**
- How fast to transition away from fossil fuels
- Who should pay for transition and adaptation
- Role of nuclear power
- Carbon capture technology
- Population and consumption
- Economic growth vs. degrowth

**Common Arguments Against Strong Action:**
- Economic costs too high
- Developing countries should act first
- Technology will solve it
- Uncertainty in projections
- Individual choice, not government action

**Response from Scientists/Advocates:**
- Costs of inaction far exceed costs of action
- Rich countries have historical responsibility
- Technology alone is insufficient
- Uncertainty argues for caution, not delay
- Collective action problems require policy

Distinguishing legitimate debate about solutions from denial of science is important for productive discussion.`,
    },
    {
      id: 'samf-engelsk-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explain the greenhouse effect and how human activities are intensifying it. What are the main sources of greenhouse gas emissions?',
        hints: ['Consider natural greenhouse effect vs. enhanced effect', 'Think about different sectors: energy, transport, agriculture, industry'],
        solution: 'Natural greenhouse effect: Gases like CO2, methane, and water vapor trap heat in atmosphere, keeping Earth habitable. Human activities: Burning fossil fuels (energy, transport, industry) releases CO2. Deforestation removes carbon sinks. Agriculture produces methane and nitrous oxide. Industrial processes release various gases. Main sources by sector: Energy/electricity (25%), agriculture/forestry (24%), industry (21%), transport (14%), buildings (6%). Concentration of CO2 has increased from 280 ppm pre-industrial to over 420 ppm today.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze the concept of sustainable development:',
        subTasks: [
          {
            label: 'a',
            task: 'What are the three pillars of sustainable development?',
            solution: 'Economic sustainability: Maintaining economic activity and prosperity over time. Social sustainability: Meeting human needs, ensuring equity, health, education, community well-being. Environmental sustainability: Protecting ecosystems, biodiversity, and natural resources for future generations.',
          },
          {
            label: 'b',
            task: 'Why is balancing these three pillars challenging?',
            solution: 'Economic growth often comes at environmental cost. Environmental protection can limit economic opportunities. Social needs (healthcare, education) require resources. Short-term economic pressures conflict with long-term sustainability. Different stakeholders prioritize different pillars. Trade-offs are politically difficult.',
          },
          {
            label: 'c',
            task: 'Give an example of a policy that addresses all three pillars.',
            solution: 'Examples: Green jobs programs (economic: employment, social: fair wages and training, environmental: clean energy). Sustainable agriculture (economic: farmer income, social: food security, environmental: soil health). Public transit investment (economic: efficiency, social: accessibility, environmental: reduced emissions).',
          },
        ],
        solution: 'See sub-tasks for complete answer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare different approaches to reducing carbon emissions. What are the advantages and disadvantages of carbon taxes, cap-and-trade systems, and direct regulation?',
        hints: ['Consider effectiveness, economic efficiency, and political feasibility'],
        solution: 'Carbon tax: Advantages - simple, predictable price, revenue for government. Disadvantages - uncertain emissions reduction, can be regressive, politically unpopular. Cap-and-trade: Advantages - certain emissions outcome, flexibility for companies, market-based. Disadvantages - volatile prices, complex to administer, may create hotspots. Regulation: Advantages - direct, certain, targets specific sources. Disadvantages - can be inefficient, may not find lowest-cost reductions, enforcement challenges. Most effective approach likely combines elements of all three.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Discuss the concept of environmental justice. Why do environmental problems often affect marginalized communities disproportionately?',
        hints: ['Consider power, economics, and historical factors', 'Think about both local pollution and global climate change'],
        solution: 'Reasons for disproportionate impact: Less political power means less ability to resist harmful facilities. Lower property values attract polluting industries. Poverty limits ability to move away or protect oneself. Historical discrimination shaped where communities live. Lack of information about risks. Global climate change hits those with least resources to adapt. Environmental racism - deliberate or systemic placing of environmental burdens on minority communities. Justice requires meaningful participation, fair distribution of costs and benefits, and addressing historical harms.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Evaluate the Paris Agreement on climate change. What are its strengths and weaknesses? Is it likely to succeed in limiting warming to 1.5-2°C?',
        hints: ['Consider the structure of commitments, enforcement, and current trajectory'],
        solution: 'Strengths: Near-universal participation (195 parties). Flexible, allowing different national approaches. Regular review and ratcheting mechanism. Includes adaptation and finance. First truly global climate agreement. Weaknesses: Commitments are voluntary with no enforcement. Current NDCs insufficient for goals. Rich countries not meeting finance pledges. US withdrew under Trump (rejoined under Biden). No penalties for non-compliance. Assessment: Current path leads to 2.5-3°C warming. Success requires significantly strengthened commitments and implementation. Agreement provides framework but not sufficient ambition.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research an environmental issue in an English-speaking country (e.g., water scarcity in Australia, air pollution in UK cities, deforestation concerns in Canada, environmental racism in USA). Describe the issue, analyze its causes and effects, and evaluate responses.',
        hints: ['Use reliable sources', 'Consider multiple stakeholders', 'Look at both policy and grassroots responses'],
        solution: 'A comprehensive answer should: 1) Describe the issue with specific facts and data, 2) Analyze root causes including economic, political, and social factors, 3) Examine effects on different communities and ecosystems, 4) Describe government policies and other responses, 5) Evaluate effectiveness and suggest improvements, 6) Connect to broader themes like climate change or environmental justice.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6: Media, Propaganda, and Public Discourse
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_6: TextbookChapter = {
  id: 'samf-engelsk-6',
  courseId: 'samf-engelsk',
  chapterNumber: '6',
  title: 'Media, Propaganda, and Public Discourse',
  description: 'Analyze the role of media in society, recognize propaganda and disinformation, and understand the challenges of public discourse in the digital age.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analyze how media shapes public opinion and political discourse',
    'evaluate sources critically and recognize propaganda, disinformation, and bias',
  ],
  content: [
    {
      id: 'samf-engelsk-6-intro',
      type: 'text',
      content: `## The Role of Media in Society

Media - newspapers, television, radio, and increasingly digital platforms - plays a crucial role in democratic societies. It informs citizens, holds power accountable, and shapes public discourse.

**Functions of Media:**

**Information:**
Keeping citizens informed about events, policies, and issues. Essential for democratic participation.

**Watchdog:**
Investigating and exposing corruption, abuse of power, and wrongdoing. Holding governments and corporations accountable.

**Agenda-Setting:**
What media covers - and how - influences what the public considers important. "The media may not tell us what to think, but it tells us what to think about."

**Forum for Debate:**
Providing space for different views and public discussion. Connecting citizens with each other and with leaders.

**Entertainment:**
Much media content is primarily entertaining. Blurring of news and entertainment raises concerns.

**Historical Evolution:**
- Print newspapers (17th century onwards)
- Radio (1920s)
- Television (1950s)
- Cable news and 24-hour news cycle (1980s)
- Internet and social media (2000s)

Each technological shift has transformed how information spreads and how public opinion forms.`,
    },
    {
      id: 'samf-engelsk-6-def-1',
      type: 'definition',
      title: 'Media Bias and Ownership',
      content: `**Types of Media Bias:**

**Selection Bias:**
Which stories are covered and which are ignored. What's left out can be as important as what's included.

**Framing:**
How stories are presented. Same facts can be framed to support different conclusions.

**Confirmation Bias:**
Tendency to favor information that confirms existing beliefs. Both producers and consumers affected.

**False Balance:**
Giving equal time to unequal positions (e.g., climate science vs. denial) can mislead.

**Media Ownership:**
Large corporations own most major media outlets. Potential conflicts of interest. Concentration reduces diversity of perspectives.

**Public Broadcasting:**
Government-funded but editorially independent media (BBC, NRK, PBS). Aims to serve public interest. Debates over funding and independence.

**Media Ecosystem Fragmentation:**
Shift from shared mass media to personalized information streams. Filter bubbles and echo chambers. People increasingly consume media that confirms their views.

**Economic Pressures:**
Advertising model rewards attention, not accuracy. Clickbait and sensationalism. Declining journalism jobs.`,
    },
    {
      id: 'samf-engelsk-6-def-2',
      type: 'definition',
      title: 'Propaganda and Disinformation',
      content: `**Propaganda:**
Deliberate, systematic attempt to shape perceptions and manipulate opinions for the benefit of the propagandist. Uses emotional appeals, symbols, and selective information.

**Disinformation:**
Deliberately false information spread to deceive. Different from misinformation (unintentionally false).

**Misinformation:**
False information spread without intent to deceive. People share because they believe it.

**Malinformation:**
Genuine information shared with intent to harm. True but used maliciously (e.g., doxxing).

**"Fake News":**
Originally meant fabricated news stories. Term now also used to dismiss legitimate reporting.

**Common Propaganda Techniques:**
- **Bandwagon:** Everyone is doing it
- **Fear appeal:** Create fear to motivate action
- **Name-calling:** Negative labels for opponents
- **Testimonial:** Celebrity/authority endorsement
- **Card stacking:** Selective presentation of facts
- **Glittering generalities:** Vague positive words
- **Transfer:** Associating with respected symbols

**Historical Examples:**
Nazi propaganda, Soviet propaganda, wartime propaganda, advertising. Modern examples: Russian disinformation campaigns, political advertising, extremist recruitment.`,
    },
    {
      id: 'samf-engelsk-6-example-1',
      type: 'example',
      title: 'Case Study: Social Media and Information Disorder',
      problem: `How has social media changed the information landscape, and what challenges does this create for democracy?`,
      solution: `**The Social Media Revolution:**

Social media platforms (Facebook, Twitter/X, TikTok, YouTube) have fundamentally changed how information spreads:

**Positive Changes:**
- Democratized access to information and publishing
- Enabled marginalized voices to be heard
- Facilitated organizing and activism
- Connected people across borders
- Challenged traditional media gatekeepers

**Problematic Aspects:**

**Algorithmic Amplification:**
Algorithms prioritize engaging content, which often means emotional, outrageous, or false content. Viral spread of misinformation.

**Filter Bubbles:**
Personalized feeds show content similar to what you've engaged with, limiting exposure to different viewpoints.

**Echo Chambers:**
Online communities reinforce shared beliefs, becoming more extreme over time.

**Reduced Quality Control:**
Anyone can publish without editorial oversight. Professional journalism competes with amateur content.

**Foreign Interference:**
States use social media to influence other countries' politics. Russian interference in 2016 US election documented.

**Erosion of Shared Reality:**
When people get information from different sources, they may not agree on basic facts.

**Responses:**
- Fact-checking organizations
- Platform content moderation (controversial)
- Media literacy education
- Regulation (in progress in EU, debated elsewhere)
- Transparency about algorithms and advertising`,
    },
    {
      id: 'samf-engelsk-6-text-2',
      type: 'text',
      content: `## Critical Media Literacy

In an age of information overload and manipulation, critical thinking about media is essential for citizens.

**Evaluating Sources:**

**Consider the Source:**
- Who created this content?
- What is their background and potential bias?
- Are they accountable for accuracy?

**Check the Evidence:**
- What evidence supports claims?
- Are sources cited?
- Can claims be verified elsewhere?

**Consider Other Sources:**
- What do other reputable sources say?
- Is this story being reported elsewhere?
- Are experts in agreement?

**Check Your Biases:**
- Does this confirm what I already believe?
- Am I accepting it uncritically because I want it to be true?
- Would I be skeptical if the opposite were claimed?

**Red Flags:**
- Emotional headlines designed to provoke
- Anonymous or unverifiable sources
- Lack of date or unclear origin
- Too good (or bad) to be true
- Asks you to share before checking

**Reliable Source Characteristics:**
- Transparent about ownership and funding
- Distinguishes news from opinion
- Corrects errors promptly
- Uses named, verifiable sources
- Provides context and multiple perspectives`,
    },
    {
      id: 'samf-engelsk-6-tip-1',
      type: 'tip',
      title: 'Fact-Checking Resources',
      content: `**International Fact-Checkers:**
- Snopes.com - general fact-checking since 1994
- PolitiFact - political claims
- FactCheck.org - political fact-checking
- Full Fact (UK)
- AFP Fact Check (international)

**Reverse Image Search:**
Use Google Images or TinEye to find original source of images.

**Verification Tools:**
- Wayback Machine - see past versions of websites
- Who.is - check website registration
- Hoaxy - visualize spread of claims

**News Literacy Sites:**
- First Draft News
- MediaWise
- News Literacy Project

**Tips for Verification:**
1. Search for the original source
2. Check multiple sources
3. Look at the URL carefully
4. Check the date
5. Consider the purpose
6. Consult experts

Remember: Taking a few minutes to verify before sharing can prevent the spread of misinformation.`,
    },
    {
      id: 'samf-engelsk-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explain the main functions of media in a democratic society. Why is a free press considered essential for democracy?',
        hints: ['Consider information, accountability, and public discourse', 'Think about what happens without free media'],
        solution: 'Main functions: Informing citizens about events and issues, enabling democratic participation. Watchdog role - investigating and exposing wrongdoing, holding power accountable. Agenda-setting - influencing what issues get public attention. Forum for debate - providing space for different views. Free press is essential because: Democracy requires informed citizens to make decisions. Without independent media, governments can hide corruption. Press can give voice to those without power. Alternatives (state-controlled media) serve rulers, not citizens. Historical examples show authoritarian regimes suppress free press.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze different types of media bias:',
        subTasks: [
          {
            label: 'a',
            task: 'What is selection bias and why does it matter?',
            solution: 'Selection bias is choosing which stories to cover and which to ignore. It matters because what media covers shapes what people consider important. What is left out is invisible to the audience. Different outlets may cover completely different stories, creating different pictures of reality.',
          },
          {
            label: 'b',
            task: 'How can framing affect perception of the same facts?',
            solution: 'Framing is how a story is presented - the angle, emphasis, and context. Same facts can lead to different conclusions based on framing. Example: unemployment down could be framed as "economy improves" or "many still jobless." Word choice, images, and which voices are included all affect framing.',
          },
          {
            label: 'c',
            task: 'What is a "filter bubble" and how does it form?',
            solution: 'Filter bubble is when algorithms show you content similar to what you have engaged with, limiting exposure to diverse views. Forms through: social media algorithms optimizing for engagement, personalized search results, choosing media that confirms beliefs. Result is reduced exposure to different perspectives and potentially more extreme views.',
          },
        ],
        solution: 'See sub-tasks for complete answer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Distinguish between propaganda, disinformation, and misinformation. Give an example of each and explain why the distinction matters.',
        hints: ['Consider intent and accuracy', 'Think about who creates and spreads each type'],
        solution: 'Propaganda: Deliberate manipulation to serve propagandist interests. Example: Government wartime posters. Disinformation: Deliberately false information to deceive. Example: Foreign troll farms creating fake news. Misinformation: Unintentionally false information. Example: Someone sharing a satirical article thinking it is real. Distinction matters for: Understanding who is responsible, appropriate responses (education vs. prosecution), and recognizing that people who share misinformation are victims, not perpetrators.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Evaluate the impact of social media on public discourse. What are the benefits and drawbacks compared to traditional media?',
        hints: ['Consider access, quality, speed, and diversity', 'Think about both producers and consumers of content'],
        solution: 'Benefits: Wider access to information and publishing. Diverse voices can be heard. Rapid sharing of important news. Can hold power accountable. Connects communities across distance. Drawbacks: Quality control problems. Misinformation spreads quickly. Algorithmic amplification of extreme content. Filter bubbles limit diverse exposure. Foreign manipulation easier. Emotional over factual content rewarded. Loss of shared information baseline. Overall: Social media has democratized information but also created new challenges for truth and democratic discourse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Develop a checklist for evaluating the reliability of an online news source. Include at least 8 criteria and explain why each matters.',
        hints: ['Consider source, evidence, presentation, and your own biases'],
        solution: 'Checklist should include items like: 1) Who is the author/organization? (accountability) 2) What is their expertise? (credibility) 3) Is it dated? (currency) 4) Are sources cited? (verifiability) 5) Do other sources confirm? (corroboration) 6) Is opinion separated from news? (transparency) 7) Does the URL look legitimate? (authenticity) 8) Does it seem designed to provoke emotion? (manipulation) 9) Does the site have corrections policy? (accountability) 10) Does it confirm my existing beliefs too conveniently? (self-check)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyze a specific case of disinformation or propaganda (e.g., Russian interference in elections, COVID-19 misinformation, or a historical propaganda campaign). Describe what happened, analyze the techniques used, and discuss the effects.',
        hints: ['Use reliable sources', 'Consider who benefited and who was harmed', 'Look at what techniques were employed'],
        solution: 'A thorough analysis should: 1) Describe the campaign with specific facts, 2) Identify who was behind it and their goals, 3) Analyze techniques used (emotional appeals, fake accounts, amplification), 4) Examine spread and reach, 5) Assess impact on public opinion and behavior, 6) Discuss responses and countermeasures, 7) Draw broader lessons about vulnerability to information manipulation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7: Migration and Multiculturalism
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_7: TextbookChapter = {
  id: 'samf-engelsk-7',
  courseId: 'samf-engelsk',
  chapterNumber: '7',
  title: 'Migration and Multiculturalism',
  description: 'Examine patterns of migration, immigration policies, and the challenges and opportunities of multicultural societies.',
  estimatedMinutes: 60,
  competenceGoals: [
    'discuss migration patterns, causes, and effects in a global perspective',
    'analyze different approaches to immigration and integration in English-speaking countries',
  ],
  content: [
    {
      id: 'samf-engelsk-7-intro',
      type: 'text',
      content: `## Understanding Migration

Migration - the movement of people from one place to another - is a fundamental feature of human history. Today, approximately 281 million people (3.6% of world population) live outside their country of birth.

**Types of Migration:**

**Voluntary vs. Forced:**
- Voluntary: Economic opportunity, family reunification, education
- Forced: Refugees fleeing persecution, war, disaster

**Internal vs. International:**
- Internal: Within a country (rural to urban)
- International: Across national borders

**Temporary vs. Permanent:**
- Temporary: Students, seasonal workers, temporary visas
- Permanent: Immigrants seeking to settle

**Push and Pull Factors:**

**Push Factors (why people leave):**
- Conflict, violence, persecution
- Poverty and lack of economic opportunity
- Environmental degradation, climate change
- Political instability
- Discrimination

**Pull Factors (why people go somewhere):**
- Economic opportunity, jobs
- Safety and stability
- Family connections
- Education
- Political freedom
- Quality of life

Migration is rarely driven by a single factor - usually a combination of push and pull factors, along with individual circumstances and available routes.`,
    },
    {
      id: 'samf-engelsk-7-def-1',
      type: 'definition',
      title: 'Immigration Categories',
      content: `**Refugee:**
Person who has fled their country due to persecution based on race, religion, nationality, political opinion, or membership in a particular social group. Protected under international law (1951 Refugee Convention).

**Asylum Seeker:**
Person who has applied for refugee status but whose claim has not yet been decided. During processing, cannot be returned to country of origin.

**Internally Displaced Person (IDP):**
Forced to flee within their own country. Not protected by international refugee law but often face similar situations.

**Economic Migrant:**
Person moving primarily for economic opportunity. Not protected under refugee law but may have other legal pathways.

**Family Reunification:**
Immigration based on having family members already in the destination country. Major category in most countries.

**Skilled Worker:**
Immigration based on job skills, education, or employment offer. Often point-based systems.

**Undocumented/Irregular Migrant:**
Person without legal authorization to be in a country. May have entered illegally or overstayed visa.

**Stateless Person:**
Someone who is not recognized as a citizen by any country. Estimated 10+ million globally.`,
    },
    {
      id: 'samf-engelsk-7-def-2',
      type: 'definition',
      title: 'Approaches to Diversity',
      content: `**Assimilation:**
Expectation that immigrants adopt the culture, language, and values of the host society, minimizing cultural differences. Historically dominant in many countries.

**Multiculturalism:**
Policy of maintaining and celebrating cultural diversity. Recognizes that society can include multiple cultural traditions. Adopted formally in Canada, Australia, UK (to varying degrees).

**Integration:**
Process of immigrants becoming part of society while retaining cultural identity. Two-way process - both immigrants and society adapt.

**Melting Pot:**
Metaphor (especially American) suggesting different cultures blend into a new composite culture. All contribute and all change.

**Salad Bowl/Cultural Mosaic:**
Alternative metaphor - different groups maintain distinct identities while coexisting. Diversity is preserved, not melted away.

**Pluralism:**
Society accepts and accommodates multiple cultural groups with equal rights and mutual respect.

**Segregation:**
Groups live separately with limited interaction. Can be imposed (apartheid) or emerge from housing patterns and discrimination.

**Nativism:**
Ideology favoring native inhabitants over immigrants. Often associated with anti-immigrant sentiment and policies.`,
    },
    {
      id: 'samf-engelsk-7-example-1',
      type: 'example',
      title: 'Case Study: Immigration in the United Kingdom',
      problem: `How has immigration shaped modern Britain, and what debates surround it?`,
      solution: `**Historical Context:**
Britain has a long history of immigration and emigration. Key waves:
- Post-WWII: Workers from Caribbean (Windrush generation), South Asia
- EU membership: Free movement from Europe
- Ongoing: Family, work, asylum from around the world

**Current Situation:**
- ~14% of UK population born abroad (2021)
- Largest groups: India, Poland, Pakistan, Ireland
- Net migration has fluctuated, recently high
- Immigration was key issue in Brexit vote

**Arguments in Debates:**

**Positive impacts argued:**
- Economic contribution (GDP, taxes, filling labor gaps)
- Cultural enrichment and diversity
- Demographic balance (younger workers supporting aging population)
- Innovation and entrepreneurship

**Concerns raised:**
- Pressure on public services (housing, NHS, schools)
- Wage competition for low-skilled workers
- Cultural change and integration challenges
- National identity questions

**Policy Responses:**
- Points-based system after Brexit
- Hostile environment policy (controversial)
- Integration programs
- Ongoing debates about asylum, small boats

**Key Issues:**
- Balance between controlling borders and meeting labor needs
- Treatment of refugees vs. economic migrants
- Rights of long-term residents
- Historical wrongs (Windrush scandal)`,
    },
    {
      id: 'samf-engelsk-7-text-2',
      type: 'text',
      content: `## Immigration Policy Approaches

Different countries take different approaches to immigration, reflecting their history, values, and circumstances.

**Points-Based Systems:**
Canada and Australia select immigrants based on skills, education, language, age, and job offers. Designed to attract beneficial migrants.

**Family-Based:**
United States prioritizes family reunification. Allows citizens and permanent residents to sponsor relatives.

**Guest Worker Programs:**
Germany's "Gastarbeiter" program brought workers expected to return home. Many stayed, creating integration challenges.

**Free Movement:**
EU allows citizens to live and work in any member state. Controversial but enables labor mobility.

**Fortress Approaches:**
Some countries (Hungary, parts of Australia) emphasize border control and deterrence over resettlement.

**Integration Policies:**

**Language Requirements:**
Many countries require language learning for citizenship or permanent residence.

**Citizenship Tests:**
Tests on history, culture, civics for naturalization.

**Residence Requirements:**
Years of residence before citizenship (typically 3-10 years).

**Economic Support:**
Programs for job training, credential recognition, and settlement assistance.

**Anti-Discrimination:**
Laws protecting immigrants from discrimination in employment, housing, and services.`,
    },
    {
      id: 'samf-engelsk-7-note-1',
      type: 'note',
      title: 'Global Refugee Crisis',
      content: `**Current Scale:**
- Over 100 million forcibly displaced worldwide (UNHCR)
- ~35 million refugees
- ~62 million internally displaced
- Highest numbers since WWII

**Major Source Countries:**
Syria, Ukraine, Afghanistan, South Sudan, Myanmar, Venezuela

**Major Host Countries:**
Turkey (most in world), Colombia, Germany, Pakistan, Uganda

**Key Challenges:**
- Protracted situations (average 20+ years in exile)
- Developing countries host 83% of refugees
- Climate change creating new displacement
- Resettlement limited (less than 1% of refugees)
- Political resistance in wealthy countries

**International Framework:**
- 1951 Refugee Convention (limited to post-WWII Europe initially)
- 1967 Protocol expanded globally
- UNHCR coordinates international response
- Non-refoulement principle: cannot return people to persecution

**Current Debates:**
- Responsibility sharing between countries
- Safe and legal pathways vs. dangerous journeys
- Distinction between refugees and economic migrants
- Long-term solutions: return, local integration, resettlement`,
    },
    {
      id: 'samf-engelsk-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explain the difference between refugees, asylum seekers, and economic migrants. Why are these distinctions important for immigration policy?',
        hints: ['Consider legal status and protections', 'Think about reasons for migration'],
        solution: 'Refugees have fled persecution and are protected under international law (1951 Convention) - cannot be returned to danger. Asylum seekers are awaiting decisions on refugee claims - temporary protection. Economic migrants move primarily for better opportunities - no automatic right to stay. Distinctions matter because: Different legal frameworks apply. Resources for protection are limited. Political debates differ. However, distinctions can be blurry in practice - many face both persecution and poverty.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze push and pull factors in migration:',
        subTasks: [
          {
            label: 'a',
            task: 'What are the main push factors causing people to leave their home countries?',
            solution: 'Conflict and war, political persecution, poverty and unemployment, environmental disasters and climate change, discrimination and human rights abuses, lack of educational or career opportunities, family separation, corruption and lawlessness.',
          },
          {
            label: 'b',
            task: 'What are the main pull factors attracting people to destination countries?',
            solution: 'Economic opportunity and jobs, safety and stability, family already present, quality education, political freedom, healthcare, quality of life, welcoming policies, cultural connections, language.',
          },
          {
            label: 'c',
            task: 'How might climate change affect future migration patterns?',
            solution: 'Sea level rise displacing coastal populations. Drought and desertification reducing agricultural livelihoods. Extreme weather events destroying homes. Resource conflicts over water and land. Most climate migration likely to be internal, but some cross-border. Poorest and most vulnerable most affected. No clear legal framework for "climate refugees."',
          },
        ],
        solution: 'See sub-tasks for complete answer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare assimilation and multiculturalism as approaches to immigrant integration. What are the arguments for and against each approach?',
        hints: ['Consider social cohesion, individual rights, and practical outcomes'],
        solution: 'Assimilation: For - promotes social cohesion, shared identity, reduces conflict, helps immigrants succeed. Against - erases cultures, historically coercive, ignores discrimination, unrealistic expectations. Multiculturalism: For - respects diversity, protects rights, enriches society, more realistic about identity. Against - may create parallel societies, challenges shared values, can essentialize cultures, may enable harmful practices. Most successful approaches probably involve elements of both - integration that respects diversity while building shared civic identity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyze the costs and benefits of immigration for host countries. What does evidence suggest about economic impacts?',
        hints: ['Consider labor market, public finances, and long-term effects', 'Look at research not just opinions'],
        solution: 'Benefits: Fills labor shortages, especially in healthcare, agriculture, tech. Contributes to GDP and innovation. Pays taxes and supports aging population. Brings skills and entrepreneurship. Costs: Initial settlement costs. Competition for some jobs. Pressure on housing in some areas. Public service demands. Evidence suggests: Fiscal impact is neutral to slightly positive overall. Labor market effects small, may be negative for low-skilled workers. Second generation typically outperforms. Overall economic effect positive in most studies.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Compare immigration policies in two English-speaking countries (e.g., USA, UK, Canada, Australia). How do their approaches differ and why?',
        hints: ['Consider history, geography, and current politics', 'Look at both selection and integration policies'],
        solution: 'A thorough comparison should address: 1) Historical context shaping policy, 2) Current immigration levels and composition, 3) Selection systems (points vs. family vs. employment), 4) Refugee/asylum policies, 5) Integration programs, 6) Citizenship requirements, 7) Political debates, 8) Effectiveness outcomes. Example: Canada emphasizes points-based skilled immigration and multiculturalism; USA emphasizes family reunification with recent restrictive trends; UK post-Brexit shifting to points system.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Discuss the global refugee crisis. What are the main challenges, and what solutions might help address them?',
        hints: ['Consider both short-term protection and long-term solutions', 'Think about responsibility sharing'],
        solution: 'Main challenges: Scale (100+ million displaced), protracted situations, unequal burden (developing countries host most), political resistance in wealthy countries, dangerous journeys, limited resettlement, root causes persist. Solutions: Better responsibility sharing among countries. More legal pathways for migration. Addressing root causes (conflict, climate). Improving conditions in host countries. Integration support. Regional cooperation. However, no easy solutions - requires political will and resources that are currently lacking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 8: International Relations and Conflict
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_8: TextbookChapter = {
  id: 'samf-engelsk-8',
  courseId: 'samf-engelsk',
  chapterNumber: '8',
  title: 'International Relations and Conflict',
  description: 'Understand the dynamics of international relations, the causes of conflict, and efforts to build peace and cooperation.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analyze international relations and the role of international organizations',
    'discuss causes of conflict and approaches to peace and security',
  ],
  content: [
    {
      id: 'samf-engelsk-8-intro',
      type: 'text',
      content: `## The International System

International relations is the study of how states and other actors interact on the global stage. Understanding these dynamics is crucial for navigating an interconnected world.

**Key Concepts:**

**Sovereignty:**
The principle that states have supreme authority within their borders and are equal in international law. Foundation of the modern state system since the Peace of Westphalia (1648).

**Anarchy:**
The international system has no world government. States must rely on themselves or alliances for security. Not chaos, but absence of central authority.

**Power:**
The ability to influence others. Types include: military (hard power), economic, diplomatic, and cultural (soft power). Some speak of "smart power" combining these.

**National Interest:**
What states pursue - typically security, prosperity, and influence. Debate about how interests are defined.

**Balance of Power:**
System where states prevent any one from becoming dominant. Alliances form to counter threats.

**Major Actors:**
- **States** remain the primary actors
- **International organizations** (UN, EU, NATO)
- **Non-state actors** (NGOs, corporations, terrorist groups)
- **Individuals** (leaders, diplomats, activists)`,
    },
    {
      id: 'samf-engelsk-8-def-1',
      type: 'definition',
      title: 'Theoretical Perspectives',
      content: `**Realism:**
States are the main actors. International system is anarchic. States pursue power and security. Conflict is inevitable. Skeptical of international institutions.

**Liberalism:**
Cooperation is possible through institutions, trade, and democracy. International organizations can manage conflict. Economic interdependence reduces war.

**Constructivism:**
Ideas, norms, and identities shape international relations. What counts as "interest" is socially constructed. Change is possible through changing ideas.

**Marxism/Critical Theory:**
Economic structures and class shape international relations. Focus on inequality between global North and South. Capitalism creates exploitation.

**Feminism:**
Gender affects international relations. Challenges male-dominated perspectives. Examines how war and peace affect women.

**Post-Colonialism:**
Legacy of colonialism shapes current international system. Critiques Eurocentrism. Emphasizes perspective of Global South.

Each theory offers different insights and blind spots. Real analysis often draws on multiple perspectives.`,
    },
    {
      id: 'samf-engelsk-8-def-2',
      type: 'definition',
      title: 'International Organizations',
      content: `**United Nations (UN):**
Founded 1945. 193 member states. Main bodies: General Assembly (all states), Security Council (15 members, 5 permanent with veto), Secretariat (led by Secretary-General). Agencies include UNICEF, WHO, UNHCR. Aims: peace, human rights, development.

**North Atlantic Treaty Organization (NATO):**
Military alliance formed 1949. Article 5: attack on one is attack on all. Expanded from 12 to 32 members. Response to Russia central issue.

**European Union (EU):**
27 member states. Economic and political union. Single market, common policies. Unique supranational organization.

**World Trade Organization (WTO):**
Regulates international trade. Negotiates agreements. Settles disputes. 164 members.

**International Criminal Court (ICC):**
Prosecutes genocide, crimes against humanity, war crimes. 123 member states (not USA, Russia, China).

**Regional Organizations:**
African Union, ASEAN, Organization of American States, Arab League. Regional cooperation on various issues.

These organizations enable cooperation but face challenges of effectiveness, legitimacy, and power imbalances.`,
    },
    {
      id: 'samf-engelsk-8-example-1',
      type: 'example',
      title: 'Case Study: The Russia-Ukraine Conflict',
      problem: `What are the causes and implications of Russia's invasion of Ukraine in 2022?`,
      solution: `**Background:**
Ukraine was part of Soviet Union until 1991. Russia has viewed Ukraine as within its sphere of influence. Ukraine has sought closer ties with West (EU, NATO).

**Key Events:**
- 2014: Revolution in Ukraine ousts pro-Russian president
- 2014: Russia annexes Crimea, supports separatists in Donbas
- 2022: Russia launches full-scale invasion

**Russian Justifications (disputed):**
- NATO expansion threatens Russia
- Protection of Russian speakers
- Ukraine's "Nazi" government
- Ukraine is not a legitimate nation

**Ukrainian/Western View:**
- Unprovoked aggression violating international law
- Imperialism and colonialism
- Threat to European security order

**International Response:**
- Unprecedented sanctions on Russia
- Military aid to Ukraine
- Diplomatic isolation of Russia
- UN General Assembly condemned invasion

**Implications:**
- Largest European conflict since WWII
- Hundreds of thousands of casualties
- Millions of refugees
- Energy crisis in Europe
- Global food security affected
- NATO strengthened, expanded
- New Cold War dynamics
- Questions about international order

The conflict illustrates tensions between great power interests, sovereignty, self-determination, and the limits of international institutions.`,
    },
    {
      id: 'samf-engelsk-8-text-2',
      type: 'text',
      content: `## Causes of Conflict

**Territorial Disputes:**
Disagreements over borders, resources, or strategic locations. Examples: Kashmir, South China Sea, Israel-Palestine.

**Nationalism and Identity:**
Ethnic, religious, or national identities can fuel conflict. Dehumanization of "others." Examples: Yugoslavia, Rwanda.

**Resources:**
Competition for oil, water, minerals, or land. "Resource curse" - natural resources can fuel conflict. Examples: Sudan, Congo.

**Ideology:**
Conflicting political or religious ideologies. Cold War was ideological. Islamic extremism vs. secularism.

**State Failure:**
Weak or failed states cannot maintain order, creating space for violence. Examples: Somalia, Libya.

**Historical Grievances:**
Past injustices fuel current conflicts. Colonial boundaries, unresolved disputes.

**Security Dilemma:**
When one state's defensive measures appear threatening to others, triggering arms races and tension.

**Economic Factors:**
Poverty, inequality, and unemployment can contribute to conflict. Grievances about economic distribution.

**Leadership and Decision-Making:**
Individual leaders' choices, misperceptions, and domestic politics affect conflict.

Most conflicts involve multiple interacting causes.`,
    },
    {
      id: 'samf-engelsk-8-text-3',
      type: 'text',
      content: `## Approaches to Peace

**Diplomacy:**
Negotiation and communication between states. Embassies, treaties, summits. Quiet diplomacy often more effective than public confrontation.

**International Law:**
Rules governing state behavior. Treaties, conventions, customs. Enforcement remains challenging but norms matter.

**Collective Security:**
Agreement that attack on one is attack on all (UN, NATO). Deters aggression through alliance.

**Peacekeeping:**
UN or regional forces deployed to maintain ceasefires. "Blue helmets." Limited to consent-based operations.

**Peacebuilding:**
Long-term efforts to address root causes of conflict. Includes governance, reconciliation, development.

**Arms Control:**
Treaties limiting weapons. Nuclear Non-Proliferation Treaty, chemical weapons ban. Reduces risk of war.

**Economic Integration:**
Trade ties create mutual interest in peace. EU was partly designed to prevent war in Europe.

**Democracy Promotion:**
"Democratic peace" theory - democracies rarely fight each other. Supporting democracy may promote peace.

**Transitional Justice:**
Addressing past atrocities through trials, truth commissions, reparations. Balances justice and reconciliation.

No single approach works for all situations. Effective peace strategies combine multiple tools.`,
    },
    {
      id: 'samf-engelsk-8-warning-1',
      type: 'warning',
      title: 'Contemporary Security Challenges',
      content: `**Nuclear Proliferation:**
Nine states have nuclear weapons. Concern about spread to more states or non-state actors. North Korea, Iran tensions.

**Terrorism:**
Non-state violence for political aims. Post-9/11 wars. ISIS. Domestic terrorism rising in some countries.

**Cyber Warfare:**
Attacks on infrastructure, elections, businesses through digital means. Difficult to attribute. Growing threat.

**Climate Security:**
Climate change as "threat multiplier." Displacement, resource conflicts, state fragility. Military and intelligence agencies increasingly focused on this.

**Pandemic Disease:**
COVID-19 showed health threats can have security implications. Potential for future pandemics.

**Great Power Competition:**
US-China rivalry. Russia challenging Western order. Risk of major power conflict rising.

**Fragile States:**
Many states unable to provide security, creating instability. Afghanistan, Syria, Yemen, Somalia.

**Hybrid Warfare:**
Combination of conventional, irregular, and information warfare. Russia's approach in Ukraine before 2022.

These challenges often interact and cannot be addressed by traditional military means alone.`,
    },
    {
      id: 'samf-engelsk-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explain the concepts of sovereignty and anarchy in international relations. How do these shape state behavior?',
        hints: ['Consider the difference from domestic politics', 'Think about implications for cooperation and conflict'],
        solution: 'Sovereignty: States have supreme authority within their territory and are legally equal. No external authority can legitimately interfere in domestic affairs. Anarchy: The international system has no world government or central authority. States must provide for their own security. Effects on behavior: States prioritize self-help and survival. Trust is difficult to establish. Cooperation requires overcoming fear of cheating. Power matters more than in domestic politics. International law is harder to enforce.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare realist and liberal perspectives on international relations:',
        subTasks: [
          {
            label: 'a',
            task: 'What are the main assumptions of realism?',
            solution: 'States are primary actors. International system is anarchic. States pursue power and security above other goals. Conflict is inevitable due to competing interests. International institutions have limited impact. Military power is most important. States cannot fully trust each other.',
          },
          {
            label: 'b',
            task: 'What are the main assumptions of liberalism?',
            solution: 'Cooperation is possible and beneficial. International institutions can facilitate cooperation and reduce conflict. Economic interdependence creates mutual interest in peace. Democracies are more peaceful with each other. Non-state actors matter. Ideas and norms shape behavior.',
          },
          {
            label: 'c',
            task: 'How might each perspective explain a current international issue?',
            solution: 'Example - NATO expansion: Realists see it as threatening Russia, understandable Russian response. Liberals see it as democracies freely choosing to join defensive alliance, Russia overreacting. Both perspectives offer insights - security competition is real, but so is value of institutions and democratic choice.',
          },
        ],
        solution: 'See sub-tasks for complete answer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze the role of the United Nations in maintaining international peace and security. What are its strengths and weaknesses?',
        hints: ['Consider different UN bodies and their powers', 'Think about specific examples'],
        solution: 'Strengths: Universal membership provides legitimacy. Forum for diplomacy and dialogue. Security Council can authorize force. Peacekeeping operations. International law development. Humanitarian agencies save lives. Weaknesses: Security Council veto by P5 members blocks action. Cannot force states to comply. Limited resources. Peacekeeping mandates often inadequate. Criticized as ineffective in preventing genocide (Rwanda, Srebrenica). Reform difficult. Despite limitations, UN provides essential infrastructure for international cooperation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Discuss the main causes of armed conflict. Use a specific contemporary or historical conflict to illustrate how multiple causes can interact.',
        hints: ['Consider territory, identity, resources, ideology, and state capacity', 'Show how causes connect'],
        solution: 'Main causes: territorial disputes, nationalism and identity, resources, ideology, state failure, historical grievances, security dilemma, economic factors. Example analysis should show how multiple factors interact. E.g., Syria: authoritarian government (ideology/governance), economic grievances (drought, inequality), ethnic/religious tensions (identity), regional power competition (geopolitics), state fragmentation (state failure). Single-cause explanations are usually insufficient.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Evaluate different approaches to building peace after conflict. What factors determine which approaches are most effective?',
        hints: ['Consider short-term vs. long-term', 'Think about local context and ownership'],
        solution: 'Approaches: Peacekeeping (maintaining ceasefire), peacebuilding (addressing root causes), transitional justice (dealing with past), reconciliation (rebuilding relationships), development (economic recovery), governance reform (institutions). Effectiveness factors: Local ownership and participation. Addressing root causes not just symptoms. Adequate resources and time commitment. Coordination among actors. Security environment. Quality of leadership. Historical and cultural context. No one-size-fits-all solution.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samf-engelsk-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samf-engelsk-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research a current international conflict or security challenge (e.g., US-China relations, Middle East tensions, a specific ongoing war). Analyze its causes, key actors, and potential paths forward.',
        hints: ['Use reliable sources', 'Consider multiple perspectives', 'Be specific about facts and analysis'],
        solution: 'A comprehensive analysis should: 1) Describe the situation accurately with key facts, 2) Identify main actors and their interests, 3) Analyze root causes using relevant theories, 4) Examine international responses and their effectiveness, 5) Consider possible scenarios and solutions, 6) Acknowledge complexity and uncertainty. Should demonstrate understanding of international relations concepts while applying them to specific case.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT
// ============================================================================

export const SAMF_ENGELSK_CHAPTERS = [
  CHAPTER_SAMF_ENGELSK_1,
  CHAPTER_SAMF_ENGELSK_2,
  CHAPTER_SAMF_ENGELSK_3,
  CHAPTER_SAMF_ENGELSK_4,
  CHAPTER_SAMF_ENGELSK_5,
  CHAPTER_SAMF_ENGELSK_6,
  CHAPTER_SAMF_ENGELSK_7,
  CHAPTER_SAMF_ENGELSK_8,
];
