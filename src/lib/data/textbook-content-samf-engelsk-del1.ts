/* eslint-disable */
// @ts-nocheck
/**
 * Samfunnsfaglig engelsk – Del 1: Democracy and Political Systems
 * Kapittel 1.1–1.5
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: What is Democracy?
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_1_1: TextbookChapter = {
  id: 'samf-engelsk-1-1',
  courseId: 'samf-engelsk',
  chapterNumber: '1.1',
  title: 'What is Democracy?',
  description: 'Explore the origins, principles, and defining features of democracy as a system of government.',
  estimatedMinutes: 25,
  competenceGoals: [
    'discuss and elaborate on political systems in English-speaking countries and compare with the Norwegian system',
    'explain the main features of democratic governance and citizens\' rights',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Democracy', definition: 'A system of government in which power is vested in the people, who rule either directly or through elected representatives.' },
    { term: 'Popular sovereignty', definition: 'The principle that the authority of a government is created and sustained by the consent of its people.' },
    { term: 'Rule of law', definition: 'The principle that all individuals and institutions are accountable to laws that are publicly known, equally enforced, and independently adjudicated.' },
    { term: 'Separation of powers', definition: 'The division of government into distinct branches (legislative, executive, judicial) to prevent the concentration of power.' },
    { term: 'Civil liberties', definition: 'Fundamental rights and freedoms guaranteed to individuals, such as freedom of speech, assembly, and religion.' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'se-1-1-intro',
      type: 'text',
      content: `## What is Democracy?

The word "democracy" comes from the ancient Greek words *demos* (people) and *kratos* (power or rule). At its most basic, democracy means "rule by the people." But what does that actually look like in practice? And why has democracy become the most widely praised -- yet also fiercely debated -- form of government in the modern world?

Democracy is more than just voting. It is a system built on a set of principles: the idea that ordinary citizens should have a say in the laws that govern their lives, that leaders should be accountable to the people, and that fundamental rights should be protected for everyone -- including those who disagree with the majority.

**Learning Goals for This Chapter:**
- Define democracy and explain its historical origins
- Identify the core principles that distinguish democratic from non-democratic systems
- Compare direct democracy with representative democracy
- Analyse the strengths and limitations of democratic governance

In this chapter, we will trace democracy from its ancient roots to its modern forms and ask a question that political thinkers have wrestled with for centuries: what makes a government truly democratic?`,
    },
    // --- DEFINISJON 1: Democracy ---
    {
      id: 'se-1-1-def-1',
      type: 'definition',
      title: 'Democracy: Core Principles',
      content: `Democracy is a form of government in which political power ultimately rests with the people. While democratic systems vary enormously around the world, most scholars agree on several core principles:

**1. Popular Sovereignty**
The government derives its authority from the consent of the governed. Citizens have the right to choose their leaders and influence policy through regular, free, and fair elections.

**2. Political Equality**
Every citizen has an equal right to participate in the political process. The principle of "one person, one vote" reflects this ideal, regardless of wealth, gender, ethnicity, or social status.

**3. Rule of Law**
Laws apply equally to all citizens, including those in power. No one is above the law, and government actions must be grounded in legal authority.

**4. Protection of Rights and Freedoms**
Democracies guarantee fundamental civil liberties such as freedom of speech, freedom of the press, freedom of religion, and the right to peaceful assembly. These rights are often enshrined in constitutions or bills of rights.

**5. Majority Rule with Minority Rights**
While decisions are made by majority vote, the rights of minority groups are protected. A true democracy does not allow the majority to trample the basic rights of those who hold different views.

**Historical Origins:**
Democracy first emerged in ancient Athens around 508 BCE under the reforms of Cleisthenes. Athenian democracy was *direct* -- citizens gathered in the assembly to debate and vote on laws themselves. However, "citizens" excluded women, enslaved people, and foreigners, meaning only about 10-20% of the population could participate.

Modern representative democracy developed much later, shaped by Enlightenment thinkers such as John Locke, Montesquieu, and Jean-Jacques Rousseau, and given practical form through revolutions in America (1776) and France (1789).`,
    },
    // --- EKSEMPEL ---
    {
      id: 'se-1-1-ex-example',
      type: 'example',
      title: 'Example: Direct vs. Representative Democracy',
      problem: 'How do direct and representative democracy differ in practice? Consider both the ancient Athenian model and a modern democratic state.',
      solution: `**Direct Democracy (Athens, c. 5th century BCE):**
- All eligible citizens gathered at the *Pnyx* hill to debate and vote on laws directly.
- There were no elected legislators; citizens themselves were the lawmakers.
- Offices were often filled by lottery (*sortition*) rather than elections, to prevent the wealthy from dominating.
- Advantage: Citizens had a direct voice in every decision.
- Limitation: Only practical in a small community; excluded most of the population.

**Representative Democracy (United Kingdom today):**
- Citizens elect Members of Parliament (MPs) to represent them in the House of Commons.
- MPs debate, amend, and vote on legislation on behalf of their constituents.
- The Prime Minister is the leader of the party that commands a majority in the Commons.
- Advantage: Practical for large, complex societies with millions of citizens.
- Limitation: Citizens only participate directly at elections; between elections, they must trust representatives to act in their interest.

**A Modern Hybrid: Switzerland**
Switzerland combines representative democracy with strong elements of direct democracy. Swiss citizens regularly vote in national referendums on specific policy questions -- from immigration rules to infrastructure spending. This gives citizens a direct say on important issues while still electing representatives for day-to-day governance.

**Key Insight:** No modern state practises pure direct democracy. All democracies today are representative in some form, but many incorporate direct elements such as referendums and citizen initiatives.`,
    },
    // --- OPPGAVE 1 (MC) ---
    {
      id: 'se-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which of the following is considered a core principle of democracy?',
        options: [
          { id: 'a', text: 'Power should be concentrated in the hands of a single strong leader', isCorrect: false },
          { id: 'b', text: 'The military should have final authority over government decisions', isCorrect: false },
          { id: 'c', text: 'All citizens are equal before the law, and fundamental rights are protected', isCorrect: true },
          { id: 'd', text: 'Only educated citizens should be allowed to vote', isCorrect: false },
        ],
        solution: 'A core principle of democracy is the rule of law and the protection of fundamental rights for all citizens. Options A, B, and D describe features of authoritarian or elitist systems, not democratic ones.',
      },
    },
    // --- OPPGAVE 2 (classic) ---
    {
      id: 'se-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain in your own words the difference between direct democracy and representative democracy. Give one advantage and one disadvantage of each.',
        hints: [
          'Think about how decisions are made in each system.',
          'Consider the practical challenges of involving every citizen in every decision.',
        ],
        solution: 'Direct democracy allows citizens to vote on laws and policies themselves, as in ancient Athens. Its advantage is that citizens have a direct voice; its disadvantage is that it is impractical for large populations. Representative democracy involves electing officials to make decisions on citizens\' behalf, as in most modern states. Its advantage is efficiency and practicality; its disadvantage is that citizens may feel disconnected from decision-making between elections.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINISJON 2: Modern Democracy in Practice ---
    {
      id: 'se-1-1-def-2',
      type: 'definition',
      title: 'Modern Democracy: Institutions and Mechanisms',
      content: `Modern democracies rely on a set of institutions and mechanisms to translate the principle of popular sovereignty into practice:

**Free and Fair Elections**
Regular elections allow citizens to choose their representatives and hold them accountable. For elections to be genuinely democratic, they must be:
- **Free**: Voters can choose without coercion or intimidation.
- **Fair**: All parties and candidates compete on a level playing field.
- **Transparent**: The counting process is open to scrutiny.
- **Periodic**: Elections occur at regular intervals, ensuring regular accountability.

**Separation of Powers**
Most democracies divide government authority among three branches:
- **Legislative** (parliament/congress): Makes laws
- **Executive** (president/prime minister and cabinet): Implements laws
- **Judicial** (courts): Interprets laws and ensures they are constitutional

This separation prevents any single person or group from accumulating too much power.

**Independent Media and Civil Society**
A free press acts as a "watchdog," holding the government accountable by investigating and reporting on its actions. Civil society organisations -- from trade unions to human rights groups -- allow citizens to organise and advocate for their interests outside of formal politics.

**Constitutional Protections**
Most democracies have a written constitution (or, in the case of the UK, a body of constitutional law and convention) that sets out the fundamental rules of government and guarantees the rights of citizens.`,
    },
    // --- OPPGAVE 3 (classic) ---
    {
      id: 'se-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Why is the separation of powers considered important in a democracy? Explain what could happen if one branch of government controlled all three functions (lawmaking, enforcement, and interpretation).',
        hints: [
          'Think about historical examples of power being concentrated in one person or group.',
          'Consider the concept of "checks and balances."',
        ],
        solution: 'The separation of powers prevents the dangerous concentration of authority. If one branch controlled all three functions, there would be no independent check on its decisions. For example, a government that both makes and interprets the law could declare its own actions legal, even if they violated citizens\' rights. Historical examples include absolute monarchies and dictatorships where unchecked power led to oppression. The system of checks and balances ensures that each branch can limit the others, protecting citizens from tyranny.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 (MC) ---
    {
      id: 'se-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-1-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following best describes the role of an independent media in a democracy?',
        options: [
          { id: 'a', text: 'To promote the government\'s agenda to the public', isCorrect: false },
          { id: 'b', text: 'To act as a watchdog that holds the government accountable', isCorrect: true },
          { id: 'c', text: 'To ensure that only positive news about the country is reported', isCorrect: false },
          { id: 'd', text: 'To serve as the judicial branch of the government', isCorrect: false },
        ],
        solution: 'An independent media serves as a "watchdog" -- investigating government actions, exposing corruption, and providing citizens with the information they need to make informed decisions. It is sometimes called the "fourth estate" because of its crucial role in holding power accountable.',
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'se-1-1-summary',
      type: 'text',
      content: `## Chapter Summary

**Key Takeaways:**

1. **Democracy means "rule by the people"** and is built on principles of popular sovereignty, political equality, rule of law, and the protection of fundamental rights.

2. **Direct democracy**, as practised in ancient Athens, allowed citizens to vote on laws themselves but was limited in scale and excluded large portions of the population.

3. **Representative democracy** is the dominant form today, where citizens elect officials to make decisions on their behalf.

4. **Modern democracies** rely on free elections, the separation of powers, an independent media, and constitutional protections to function effectively.

5. **No democracy is perfect.** Democratic systems face ongoing challenges, from voter apathy to the influence of money in politics. Democracy is best understood not as a fixed state but as an ongoing project.

**Looking Ahead:**
In the next chapter, we will explore different types of political systems -- including authoritarian and totalitarian regimes -- and examine what distinguishes them from democratic governance.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Discussion task: "A country that holds elections is not necessarily a democracy." Do you agree or disagree with this statement? Write a well-structured paragraph (150-200 words) supporting your position with specific examples.',
        hints: [
          'Consider whether elections alone are sufficient for a country to be called democratic.',
          'Think about what other conditions must be met -- such as free press, opposition parties, and rule of law.',
          'You may refer to countries where elections are held but other democratic principles are absent.',
        ],
        solution: 'A strong answer will agree with the statement and argue that elections are a necessary but not sufficient condition for democracy. Examples might include countries like Russia or North Korea, where elections are held but opposition is suppressed, media is controlled, and the rule of law is weak. A truly democratic election requires genuine choice, a free press, the ability of opposition parties to compete, and an independent judiciary to resolve disputes. Without these conditions, elections become a facade that legitimises authoritarian rule.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Compare the democratic system of Norway with that of either the United States or the United Kingdom. Identify at least three similarities and three differences. Present your findings in a structured table or essay format.',
        hints: [
          'Consider the structure of government (parliamentary vs. presidential), the election system, and the role of the head of state.',
          'Think about how the separation of powers works in each country.',
          'Consider social democratic traditions versus liberal democratic traditions.',
        ],
        solution: 'Similarities may include: regular free elections, separation of powers, protection of individual rights, independent judiciary. Differences may include: Norway is a constitutional monarchy with a parliamentary system, while the US has a presidential system with an elected head of state; Norway uses proportional representation while the US and UK use first-past-the-post; Norway has a multi-party system while the US is dominated by two parties; Norway has a stronger welfare state tradition. The UK shares Norway\'s parliamentary system and constitutional monarchy but differs in its lack of a single written constitution.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// Kapittel 1.2: Types of Political Systems
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_1_2: TextbookChapter = {
  id: 'samf-engelsk-1-2',
  courseId: 'samf-engelsk',
  chapterNumber: '1.2',
  title: 'Types of Political Systems',
  description: 'Compare and contrast democracy, authoritarianism, totalitarianism, and other forms of government.',
  estimatedMinutes: 25,
  competenceGoals: [
    'discuss and elaborate on political systems in English-speaking countries and compare with the Norwegian system',
    'analyse how different political systems affect the rights and freedoms of individuals',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Authoritarianism', definition: 'A political system in which power is concentrated in the hands of a leader or a small group that is not constitutionally accountable to the people.' },
    { term: 'Totalitarianism', definition: 'An extreme form of authoritarianism in which the state seeks total control over every aspect of public and private life.' },
    { term: 'Monarchy', definition: 'A form of government in which a single person (monarch) serves as head of state, either with real power (absolute) or ceremonial duties (constitutional).' },
    { term: 'Theocracy', definition: 'A form of government in which religious leaders rule and laws are based on religious doctrine.' },
    { term: 'Federal system', definition: 'A political system in which power is divided between a central government and regional governments (e.g., states or provinces).' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'se-1-2-intro',
      type: 'text',
      content: `## Types of Political Systems

Not all countries are governed the same way. While democracy is often held up as the ideal form of government, the reality is that political systems around the world exist on a broad spectrum -- from liberal democracies to totalitarian dictatorships, with many variations in between.

Understanding different political systems is essential for several reasons. It helps us appreciate the freedoms we may take for granted, analyse global events with greater insight, and think critically about how power is organised in any society.

**Learning Goals for This Chapter:**
- Identify and describe the main types of political systems
- Distinguish between authoritarian, totalitarian, and democratic forms of government
- Understand the concepts of constitutional monarchy and republic
- Analyse real-world examples of different political systems

In this chapter, we will map out the major types of political systems and use real-world examples to bring each one to life.`,
    },
    // --- DEFINISJON 1: The Spectrum of Political Systems ---
    {
      id: 'se-1-2-def-1',
      type: 'definition',
      title: 'The Spectrum of Political Systems',
      content: `Political systems can be placed on a spectrum from the most open and participatory to the most restrictive and controlled:

**1. Liberal Democracy**
- Citizens enjoy broad political rights and civil liberties.
- Power is limited by a constitution, separation of powers, and free elections.
- Examples: Norway, Canada, New Zealand, Germany.

**2. Illiberal / Flawed Democracy**
- Elections are held, but civil liberties may be restricted, opposition weakened, or media controlled.
- The state may use legal tools to undermine democratic norms while maintaining a democratic facade.
- Examples: Hungary under Viktor Orban has been criticised for moving in this direction; Turkey has also faced such criticism.

**3. Hybrid Regime**
- A mix of democratic and authoritarian features. Elections may be held but are not fully free or fair.
- The government may tolerate some opposition but places significant limits on political competition.
- Examples: Some countries in Southeast Asia and sub-Saharan Africa have been classified as hybrid regimes.

**4. Authoritarian Regime**
- Power is concentrated in a leader or ruling group with little accountability to the public.
- Political opposition and free media are suppressed or heavily restricted.
- Citizens have limited political rights, though some personal freedoms may exist.
- Examples: China under the Communist Party, Saudi Arabia.

**5. Totalitarian Regime**
- The state seeks complete control over all aspects of life -- political, economic, social, and cultural.
- A single party or leader holds absolute power, often supported by an ideology and pervasive propaganda.
- Independent organisations, free press, and dissent are completely eliminated.
- Historical examples: Nazi Germany under Hitler, the Soviet Union under Stalin, North Korea.

**Important Note:** These categories are not rigid boxes. Many countries have features of more than one type, and political systems can change over time -- both towards greater democracy (democratisation) and away from it (democratic backsliding).`,
    },
    // --- EKSEMPEL ---
    {
      id: 'se-1-2-example-1',
      type: 'example',
      title: 'Example: Comparing the UK and China',
      problem: 'How do the political systems of the United Kingdom and China differ in terms of government structure, elections, and civil liberties?',
      solution: `**The United Kingdom (Liberal Democracy):**
- **Government structure**: Parliamentary system. The Prime Minister leads the government and is accountable to the elected House of Commons. The monarch (King Charles III) is the ceremonial head of state.
- **Elections**: Free and fair general elections held at least every five years. Multiple political parties compete openly.
- **Civil liberties**: Broad protections for freedom of speech, press, assembly, and religion. An independent judiciary upholds the rule of law.
- **Opposition**: The "official opposition" party has a formal, protected role in Parliament.

**China (Authoritarian / One-Party State):**
- **Government structure**: The Communist Party of China (CPC) holds a monopoly on political power. The General Secretary of the CPC (currently Xi Jinping) is the paramount leader. The National People\'s Congress exists but largely rubber-stamps party decisions.
- **Elections**: Local elections are held, but candidates are vetted by the party. There are no competitive national elections with genuine opposition parties.
- **Civil liberties**: Freedom of speech and press are heavily restricted. The "Great Firewall" censors the internet. Independent trade unions and civil society groups are not permitted.
- **Opposition**: Political opposition to the CPC is not tolerated. Activists and dissidents face imprisonment.

**Key Difference:** In the UK, power flows upward from citizens through elections. In China, power flows downward from the party leadership. This fundamental difference shapes every aspect of political life in the two countries.`,
    },
    // --- OPPGAVE 1 (MC) ---
    {
      id: 'se-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the key difference between an authoritarian regime and a totalitarian regime?',
        options: [
          { id: 'a', text: 'An authoritarian regime holds elections but a totalitarian one does not', isCorrect: false },
          { id: 'b', text: 'A totalitarian regime seeks control over all aspects of life, while an authoritarian regime mainly restricts political freedoms', isCorrect: true },
          { id: 'c', text: 'An authoritarian regime is always a monarchy, while a totalitarian regime is always a republic', isCorrect: false },
          { id: 'd', text: 'There is no meaningful difference between the two', isCorrect: false },
        ],
        solution: 'The key distinction is scope of control. Authoritarian regimes restrict political freedoms but may tolerate some personal or economic freedom. Totalitarian regimes aim to control every aspect of life -- political, social, economic, and cultural -- leaving no space for independent thought or action.',
      },
    },
    // --- OPPGAVE 2 (classic) ---
    {
      id: 'se-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain what a "hybrid regime" is. Give one real-world example and describe the features that make it a hybrid rather than a full democracy or a full authoritarian state.',
        hints: [
          'Think about what elements of democracy and authoritarianism coexist in a hybrid regime.',
          'Consider how elections might be held but not be fully free or fair.',
        ],
        solution: 'A hybrid regime combines democratic and authoritarian features. Elections may be held, but they are not fully free or fair. Some opposition may be tolerated, but the playing field is tilted in favour of the ruling party. For example, a country might allow opposition candidates but control state media and use state resources for the ruling party\'s campaign. Press freedom may be limited, and the judiciary may not be fully independent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINISJON 2: Monarchies, Republics, and Federal Systems ---
    {
      id: 'se-1-2-def-2',
      type: 'definition',
      title: 'Monarchies, Republics, and Federal Systems',
      content: `Political systems can also be categorised by how the head of state is selected and how power is distributed geographically.

**Monarchy vs. Republic**
- **Absolute Monarchy**: The monarch holds real governing power, often ruling by decree. Today this is rare; Saudi Arabia is one of the few remaining examples.
- **Constitutional Monarchy**: The monarch is the ceremonial head of state, but real political power rests with elected officials. Examples include Norway, the United Kingdom, Sweden, and Japan.
- **Republic**: The head of state is elected, either directly by the people (e.g., France, USA) or by the legislature (e.g., Germany, India). A republic can be democratic or authoritarian -- being a republic says nothing about how democratic a country is.

**Unitary vs. Federal Systems**
- **Unitary system**: Power is concentrated in the central government. Local or regional governments exist but derive their authority from the centre. Examples: Norway, the UK, France.
- **Federal system**: Power is constitutionally divided between a central government and regional units (states, provinces, cantons). Each level has its own areas of authority. Examples: the United States (50 states), Germany (16 Lander), Canada (10 provinces), Australia.

**Why Does This Matter?**
The structure of a political system affects how responsive it is to local needs, how power is checked, and how citizens experience government in their daily lives. Federal systems can accommodate regional diversity, while unitary systems can ensure more uniform policy.`,
    },
    // --- OPPGAVE 3 (classic) ---
    {
      id: 'se-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Norway is a constitutional monarchy with a unitary system. The United States is a federal republic. Explain what each of these terms means and identify one advantage of each system.',
        hints: [
          'Break each label into its parts: "constitutional monarchy" and "unitary" for Norway; "federal" and "republic" for the US.',
          'Think about how each system distributes power differently.',
        ],
        solution: 'Norway\'s constitutional monarchy means the King is head of state but has no real political power; governance is carried out by elected officials. Its unitary system means the national government holds primary authority. Advantage: unified and consistent national policy. The US as a federal republic has an elected president as head of state and divides power between the federal government and 50 state governments. Advantage: states can tailor policies to local needs and serve as "laboratories of democracy" for experimenting with different approaches.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 (MC) ---
    {
      id: 'se-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-1-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which statement about monarchies is most accurate?',
        options: [
          { id: 'a', text: 'All monarchies are undemocratic because they have an unelected head of state', isCorrect: false },
          { id: 'b', text: 'Constitutional monarchies can be fully democratic, with the monarch serving a ceremonial role', isCorrect: true },
          { id: 'c', text: 'Monarchies no longer exist in the modern world', isCorrect: false },
          { id: 'd', text: 'Monarchies and republics always have the same form of government', isCorrect: false },
        ],
        solution: 'Constitutional monarchies like Norway, the UK, and Sweden are fully democratic. The monarch performs ceremonial duties while elected representatives govern. The form of head of state (monarch vs. president) does not by itself determine whether a country is democratic.',
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'se-1-2-summary',
      type: 'text',
      content: `## Chapter Summary

**Key Takeaways:**

1. **Political systems exist on a spectrum** from liberal democracy to totalitarianism, with hybrid regimes and flawed democracies in between.

2. **Authoritarian regimes** restrict political freedoms, while **totalitarian regimes** seek control over all aspects of life.

3. **Monarchies and republics** describe how the head of state is selected; neither term alone tells us whether a country is democratic.

4. **Federal and unitary systems** describe how power is distributed geographically. Federal systems divide power between central and regional governments.

5. **Political systems are not static.** Countries can move towards greater democracy (democratisation) or away from it (democratic backsliding).

**Looking Ahead:**
In the next chapter, we will focus on how citizens participate in democratic systems through elections and other forms of political engagement.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Discussion task: Some political scientists argue that "democratic backsliding" -- the gradual erosion of democratic norms in established democracies -- is one of the greatest political challenges of the 21st century. What do you think this means, and why might it be dangerous? Write 150-200 words giving your analysis.',
        hints: [
          'Think about specific ways in which democratic norms can be weakened, even in countries that hold elections.',
          'Consider the role of media freedom, judicial independence, and protection of minority rights.',
          'You may reference recent examples if you wish.',
        ],
        solution: 'A strong answer will explain that democratic backsliding occurs when leaders or parties gradually undermine democratic institutions from within -- by weakening the independence of the judiciary, attacking the free press, restricting civil liberties, or using legal tools to marginalise opposition. It is dangerous because it can happen slowly and subtly, often under the guise of democratic legitimacy. Unlike a sudden coup, backsliding may go unnoticed until significant damage has been done. Examples might include attempts to pack courts, discredit independent media, or restrict the rights of minorities.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Choose two countries with different political systems (e.g., one democracy and one authoritarian state). Create a structured comparison covering: (a) how the government is structured, (b) how leaders are selected, (c) what rights citizens have, and (d) what role the media plays. Present your comparison as a table or essay.',
        hints: [
          'Be specific -- use real country names and real details about their systems.',
          'Good sources include Freedom House, the Economist Intelligence Unit\'s Democracy Index, and reputable news outlets.',
          'Consider how daily life might differ for ordinary citizens in each system.',
        ],
        solution: 'A thorough comparison will address all four dimensions with specific details. For example, comparing Canada (liberal democracy) with China (authoritarian one-party state): Canada has an elected parliament, regular free elections, broad civil liberties, and a free press. China has a one-party system led by the CPC, no competitive national elections, restricted civil liberties, and state-controlled media. The comparison should go beyond surface descriptions to analyse how these differences affect citizens\' daily lives.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// Kapittel 1.3: Elections and Political Participation
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_1_3: TextbookChapter = {
  id: 'samf-engelsk-1-3',
  courseId: 'samf-engelsk',
  chapterNumber: '1.3',
  title: 'Elections and Political Participation',
  description: 'Examine how elections work, different voting systems, and the many ways citizens can participate in democratic life.',
  estimatedMinutes: 25,
  competenceGoals: [
    'discuss the importance of democratic participation and citizens\' rights and duties',
    'analyse how electoral systems affect representation and political outcomes',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Electoral system', definition: 'The set of rules that determines how votes are translated into seats in a legislature.' },
    { term: 'First-past-the-post (FPTP)', definition: 'An electoral system in which the candidate with the most votes in a constituency wins the seat, regardless of whether they have a majority.' },
    { term: 'Proportional representation (PR)', definition: 'An electoral system in which seats are allocated in proportion to the total number of votes each party receives.' },
    { term: 'Voter turnout', definition: 'The percentage of eligible voters who actually cast a ballot in an election.' },
    { term: 'Political participation', definition: 'All the ways citizens can engage with the political process, from voting and campaigning to protesting and contacting representatives.' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'se-1-3-intro',
      type: 'text',
      content: `## Elections and Political Participation

Elections are the lifeblood of democracy. They are the primary mechanism through which citizens exercise their political power, choose their leaders, and hold governments accountable. But elections are just one form of political participation. Citizens in a democracy can engage with the political process in many ways -- from joining a political party to attending a protest, from signing a petition to running for office.

**Learning Goals for This Chapter:**
- Explain why elections are central to democratic governance
- Compare the main electoral systems: first-past-the-post and proportional representation
- Identify different forms of political participation beyond voting
- Analyse factors that affect voter turnout and political engagement

The way elections are organised -- the electoral system -- has a profound impact on who gets represented, how many parties exist, and how closely government reflects the will of the people. No electoral system is perfect, and each involves trade-offs between different democratic values.`,
    },
    // --- DEFINISJON 1: Electoral Systems ---
    {
      id: 'se-1-3-def-1',
      type: 'definition',
      title: 'Electoral Systems: How Votes Become Seats',
      content: `The electoral system is the set of rules that determines how citizens' votes are translated into seats in the legislature. The two most common systems are first-past-the-post and proportional representation.

**First-Past-the-Post (FPTP)**
- Used in the UK, the US, Canada, and India, among others.
- The country is divided into single-member constituencies (districts).
- In each constituency, the candidate with the most votes wins the seat -- even if they receive less than 50% of the vote.
- **Advantages**: Simple to understand; tends to produce clear majorities and stable governments; creates a direct link between an MP and their constituency.
- **Disadvantages**: Can produce highly disproportionate results; smaller parties are underrepresented; many votes are "wasted" (i.e., they do not contribute to electing anyone).

**Example**: In the 2019 UK general election, the Liberal Democrats received about 11.5% of the national vote but won only 1.7% of the seats. Under a proportional system, they would have won roughly 75 seats instead of 11.

**Proportional Representation (PR)**
- Used in Norway, Sweden, the Netherlands, Germany, and many other countries.
- Seats are allocated to parties in proportion to their share of the total vote.
- There are several variants (party-list PR, mixed-member proportional, single transferable vote).
- **Advantages**: More representative of voter preferences; smaller parties can win seats; fewer "wasted" votes.
- **Disadvantages**: Can lead to fragmented parliaments with many small parties; coalition governments may be less stable; weaker direct link between representatives and specific constituencies.

**Mixed Systems**
Some countries combine elements of both systems. Germany, for example, uses a mixed-member proportional system where voters cast two ballots: one for a constituency candidate (FPTP) and one for a party list (PR).`,
    },
    // --- EKSEMPEL ---
    {
      id: 'se-1-3-example-1',
      type: 'example',
      title: 'Example: FPTP vs. PR in Action',
      problem: 'Imagine a country with 100 seats in parliament and three parties: Party A gets 40% of the vote, Party B gets 35%, and Party C gets 25%. How might the seat distribution differ under FPTP and PR?',
      solution: `**Under Proportional Representation:**
Seats are allocated roughly in proportion to vote share:
- Party A: ~40 seats
- Party B: ~35 seats
- Party C: ~25 seats
No single party has a majority (51 seats), so A and C (or A and B) would need to form a coalition government.

**Under First-Past-the-Post (simplified scenario):**
Because FPTP rewards the party that comes first in each constituency, Party A -- winning the most votes in many districts -- might sweep a disproportionate number of seats:
- Party A: ~55 seats (majority!)
- Party B: ~35 seats
- Party C: ~10 seats
Party A could govern alone despite winning only 40% of the national vote. Party C, whose support is spread evenly across the country, wins far fewer seats than its vote share would suggest.

**Key Insight:** The electoral system does not just count votes -- it shapes outcomes. Under FPTP, Party A governs alone with 40% support. Under PR, a coalition reflecting 60-75% of voters would govern. Neither outcome is inherently "right" -- they reflect different values (stability vs. representativeness).`,
    },
    // --- OPPGAVE 1 (MC) ---
    {
      id: 'se-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is a major disadvantage of the first-past-the-post electoral system?',
        options: [
          { id: 'a', text: 'It always results in coalition governments', isCorrect: false },
          { id: 'b', text: 'It can produce disproportionate results where a party\'s seat share does not reflect its vote share', isCorrect: true },
          { id: 'c', text: 'It is too complicated for voters to understand', isCorrect: false },
          { id: 'd', text: 'It prevents any party from ever winning a majority', isCorrect: false },
        ],
        solution: 'A major disadvantage of FPTP is that it can produce highly disproportionate results. A party may win a large majority of seats with a relatively small share of the national vote, while smaller parties are severely underrepresented.',
      },
    },
    // --- OPPGAVE 2 (classic) ---
    {
      id: 'se-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Norway uses proportional representation while the United Kingdom uses first-past-the-post. Explain one advantage of each system and discuss which system you think is more democratic. Justify your answer.',
        hints: [
          'Consider what "democratic" means -- is it about stable government, or about accurate representation of voter preferences?',
          'Think about the effects on small parties and coalition-building.',
        ],
        solution: 'PR advantage: it more accurately reflects the diversity of voter preferences, giving smaller parties a fair chance at representation. FPTP advantage: it tends to produce clear, stable majority governments with a direct link between voters and their local representative. Which is "more democratic" is debatable: PR better reflects voter diversity, but FPTP provides clearer accountability (voters know exactly who governs). A strong answer will acknowledge that "democratic" can be defined in different ways and will provide a reasoned argument for one position.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINISJON 2: Political Participation Beyond Voting ---
    {
      id: 'se-1-3-def-2',
      type: 'definition',
      title: 'Political Participation Beyond the Ballot Box',
      content: `Voting is the most visible form of political participation, but it is far from the only one. A healthy democracy depends on citizens engaging with the political process in multiple ways:

**Conventional Participation:**
- **Voting** in local, regional, and national elections
- **Joining a political party** and attending meetings
- **Contacting elected representatives** by letter, email, or at public meetings
- **Running for office** at any level of government
- **Volunteering** for a political campaign
- **Donating** to political parties or causes

**Unconventional (but Legal) Participation:**
- **Signing petitions** -- online or on paper
- **Attending demonstrations and protests** to draw attention to issues
- **Boycotting** products or companies for political reasons
- **Joining interest groups or NGOs** that advocate for specific causes
- **Using social media** to raise awareness and mobilise support
- **Engaging in civil disobedience** -- deliberately breaking a law to protest its injustice (e.g., the Civil Rights Movement in the US)

**Voter Turnout: A Democratic Health Check**
Voter turnout -- the percentage of eligible citizens who actually vote -- is often seen as a measure of democratic health. Low turnout can indicate voter apathy, disillusionment, or barriers to participation.

| Country | Approx. Turnout (recent elections) |
|---------|-----------------------------------|
| Australia | ~91% (compulsory voting) |
| Norway | ~77% |
| United Kingdom | ~67% |
| United States | ~62% (2020, unusually high) |
| Switzerland | ~45% (but frequent referendums) |

**Factors affecting turnout** include: age (younger voters tend to vote less), education level, socioeconomic status, the competitiveness of the election, ease of registration, and whether voting is compulsory.`,
    },
    // --- OPPGAVE 3 (classic) ---
    {
      id: 'se-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'List and briefly explain three forms of political participation other than voting. For each, explain why it is important for a functioning democracy.',
        hints: [
          'Consider both conventional and unconventional forms of participation.',
          'Think about how each form helps citizens influence government beyond election day.',
        ],
        solution: 'Examples might include: (1) Signing petitions -- allows citizens to raise issues and demonstrate public support for a cause, putting pressure on elected officials. (2) Attending protests/demonstrations -- draws public and media attention to issues that may be ignored by mainstream politics, and signals the strength of public feeling. (3) Joining interest groups or NGOs -- allows citizens to pool resources and expertise to advocate for specific causes, providing organised voices for issues that political parties may not prioritise. Each of these supplements voting by keeping democratic engagement alive between elections.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 (MC) ---
    {
      id: 'se-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-1-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Australia has compulsory voting and a turnout of over 90%. Which of the following is a common argument AGAINST compulsory voting?',
        options: [
          { id: 'a', text: 'It ensures that all citizens have a voice in government', isCorrect: false },
          { id: 'b', text: 'It forces uninformed or uninterested citizens to vote, potentially reducing the quality of democratic decisions', isCorrect: true },
          { id: 'c', text: 'It reduces the number of people who vote', isCorrect: false },
          { id: 'd', text: 'It makes elections more expensive for the government', isCorrect: false },
        ],
        solution: 'A common argument against compulsory voting is that it forces people who may be uninformed or uninterested to cast votes, potentially leading to random or ill-considered choices. Supporters of compulsory voting counter that it ensures broader representation and reduces the influence of highly motivated extremes.',
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'se-1-3-summary',
      type: 'text',
      content: `## Chapter Summary

**Key Takeaways:**

1. **Electoral systems** determine how votes are translated into seats. The two main types are first-past-the-post (used in the UK and US) and proportional representation (used in Norway and much of Europe).

2. **FPTP** tends to produce strong majority governments but can be disproportionate. **PR** produces more representative parliaments but may require coalition governments.

3. **Political participation** goes far beyond voting: citizens can join parties, attend protests, sign petitions, contact representatives, and use social media to influence the political process.

4. **Voter turnout** varies widely between countries and is influenced by factors such as age, education, and whether voting is compulsory.

5. **A healthy democracy** requires ongoing engagement from its citizens, not just at election time but continuously.

**Looking Ahead:**
In the next chapter, we will explore political parties and ideologies -- the ideas and movements that shape how societies are governed and how resources are distributed.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Discussion task: "Young people don\'t vote because they don\'t care about politics." Do you agree or disagree with this claim? Write a structured response (150-200 words) exploring the reasons why younger voters often have lower turnout rates.',
        hints: [
          'Consider alternative explanations beyond apathy -- such as feeling that politics does not address their concerns, practical barriers, or different forms of engagement.',
          'Think about whether "not voting" necessarily means "not caring."',
          'You may draw on your own experience or observations.',
        ],
        solution: 'A strong answer will challenge the simplistic claim and explore multiple reasons for lower youth turnout: feeling that parties do not address their concerns, distrust of politicians, practical barriers (registration, information), and the use of alternative forms of political engagement (social media activism, protests, volunteering). Many young people are politically engaged but express it through unconventional channels rather than traditional voting. The answer should also consider what parties and governments could do to increase youth engagement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research task: Choose one country that uses a different electoral system from Norway (e.g., the UK, the US, Germany, or New Zealand). Describe how their system works, and analyse one advantage and one disadvantage compared to the Norwegian system. Write 200-250 words.',
        hints: [
          'Be specific about the mechanics of the system you choose.',
          'Compare directly with Norway\'s proportional representation system.',
          'Consider how the system affects party diversity, government stability, and representation of minorities.',
        ],
        solution: 'A thorough answer will accurately describe the chosen system (e.g., FPTP in the UK: single-member constituencies, winner takes all), compare it with Norway\'s party-list PR system, and provide a balanced analysis of trade-offs. For example, the UK system produces clear majorities but underrepresents smaller parties, while Norway\'s system is more representative but requires coalition-building. The best answers will use specific data or examples to support their analysis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// Kapittel 1.4: Political Parties and Ideology
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_1_4: TextbookChapter = {
  id: 'samf-engelsk-1-4',
  courseId: 'samf-engelsk',
  chapterNumber: '1.4',
  title: 'Political Parties and Ideology',
  description: 'Understand the role of political parties and the major political ideologies that shape modern democracies.',
  estimatedMinutes: 25,
  competenceGoals: [
    'discuss and elaborate on different political ideologies and their impact on society',
    'compare political parties and party systems in English-speaking countries with those in Norway',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Political ideology', definition: 'A coherent set of beliefs about how society should be organised, what the role of government should be, and how resources should be distributed.' },
    { term: 'Liberalism', definition: 'An ideology emphasising individual rights, limited government, free markets, and equality of opportunity.' },
    { term: 'Conservatism', definition: 'An ideology emphasising tradition, social stability, established institutions, and cautious change.' },
    { term: 'Socialism', definition: 'An ideology advocating collective or government ownership of key resources and greater economic equality.' },
    { term: 'Social democracy', definition: 'An ideology that combines a market economy with a strong welfare state, aiming to reduce inequality through democratic means.' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'se-1-4-intro',
      type: 'text',
      content: `## Political Parties and Ideology

Political parties are the organisations that compete for political power in democratic systems. They recruit candidates, develop policy platforms, and -- if successful -- form governments. But parties are not just vehicles for ambition; they are built on ideas. Behind every political party lies a set of beliefs about how society should be organised, what the role of government should be, and what values should guide public policy. These beliefs are called political ideologies.

**Learning Goals for This Chapter:**
- Define political ideology and explain its role in democratic politics
- Describe the main political ideologies: liberalism, conservatism, socialism, and social democracy
- Compare party systems in different countries (two-party vs. multi-party)
- Analyse how ideological differences shape policy debates in English-speaking countries

Understanding political ideologies is essential for making sense of political debates. When politicians argue about taxes, healthcare, immigration, or climate policy, their positions are usually rooted in deeper ideological commitments about the proper role of government, the importance of individual freedom versus collective welfare, and the meaning of justice and equality.`,
    },
    // --- DEFINISJON 1: Major Political Ideologies ---
    {
      id: 'se-1-4-def-1',
      type: 'definition',
      title: 'The Major Political Ideologies',
      content: `Political ideologies can be broadly mapped along a spectrum from left to right, though this simplification does not capture every nuance:

**The Left-Right Spectrum:**
Far Left --- Left --- Centre-Left --- Centre --- Centre-Right --- Right --- Far Right

**1. Liberalism (Classical and Modern)**
*Core values*: Individual rights, personal freedom, equality of opportunity, rule of law.
- **Classical liberalism** emphasises limited government, free markets, and individual liberty. It influenced the founding of the United States.
- **Modern liberalism** (sometimes called "progressive" in the US) supports a more active role for government in providing social services and addressing inequality.
- Associated terms: free speech, tolerance, human rights, market economy.

**2. Conservatism**
*Core values*: Tradition, social stability, respect for established institutions, personal responsibility.
- Conservatives tend to favour a smaller government role in the economy but may support a stronger role in maintaining social order and traditional values.
- They are sceptical of rapid social change and prefer gradual, proven approaches.
- In the US, conservatism is closely associated with the Republican Party. In the UK, it is associated with the Conservative Party (Tories).

**3. Socialism**
*Core values*: Economic equality, collective ownership, workers' rights, social justice.
- Socialists argue that capitalism creates unjust inequalities and that key industries and services should be owned or regulated by the state or the community.
- In its democratic form, socialism seeks change through elections and legislation, not revolution.
- In its more radical forms (Marxism, communism), it advocates for the abolition of private ownership of the means of production.

**4. Social Democracy**
*Core values*: A market economy combined with a strong welfare state, redistribution of wealth, universal public services.
- Social democrats accept capitalism but argue that the state must actively intervene to reduce inequality and ensure that everyone has access to healthcare, education, and a basic standard of living.
- The Nordic model (Norway, Sweden, Denmark) is often cited as the most successful example of social democracy.
- Social democratic parties include the Norwegian Labour Party (Arbeiderpartiet), the UK Labour Party, and the German Social Democrats (SPD).

**5. Other Ideologies**
- **Green/Environmentalism**: Prioritises ecological sustainability and environmental protection.
- **Nationalism/Populism**: Emphasises national identity, sovereignty, and the interests of "ordinary people" against elites.
- **Libertarianism**: Advocates for minimal government intervention in both economic and personal matters.`,
    },
    // --- EKSEMPEL ---
    {
      id: 'se-1-4-example-1',
      type: 'example',
      title: 'Example: How Ideology Shapes Policy -- Healthcare',
      problem: 'How do different political ideologies approach the question of healthcare provision? Consider the US and UK as examples.',
      solution: `**The United States (Market-oriented approach):**
Historically influenced by classical liberalism and conservatism, the US has a largely private healthcare system. Most Americans get health insurance through their employer or purchase it privately. The government provides healthcare for the elderly (Medicare) and the very poor (Medicaid), but there is no universal public healthcare system. The Affordable Care Act (2010) expanded access but remained controversial.

*Conservative argument*: A free-market system encourages competition, innovation, and individual choice. Government-run healthcare would be inefficient and limit freedom.

*Progressive/liberal argument*: Healthcare is a right, not a privilege. The market leaves millions uninsured and produces vast inequalities in access.

**The United Kingdom (Universal public system):**
The UK's National Health Service (NHS), established in 1948 by the Labour government, provides healthcare to all residents free at the point of use, funded through taxation. This reflects social democratic values.

*Social democratic argument*: Healthcare is a public good that should be available to all, regardless of ability to pay. The NHS embodies solidarity and equality.

*Conservative critique*: While most UK Conservatives now support the NHS in principle, some argue that private-sector involvement could improve efficiency and reduce waiting times.

**Norway (Social democratic model):**
Norway's healthcare system is publicly funded and largely publicly delivered, similar to the UK. Citizens pay a small co-payment for some services, but costs are capped to ensure affordability. This reflects Norway's social democratic tradition.

**Key Insight:** The healthcare debate is not just about policy details -- it reflects fundamental ideological disagreements about the role of government, the meaning of individual freedom, and the nature of social responsibility.`,
    },
    // --- OPPGAVE 1 (MC) ---
    {
      id: 'se-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which political ideology is most closely associated with the Nordic welfare state model?',
        options: [
          { id: 'a', text: 'Classical liberalism', isCorrect: false },
          { id: 'b', text: 'Conservatism', isCorrect: false },
          { id: 'c', text: 'Social democracy', isCorrect: true },
          { id: 'd', text: 'Libertarianism', isCorrect: false },
        ],
        solution: 'The Nordic welfare state model -- with its combination of a market economy, strong public services, and redistribution of wealth through taxation -- is the hallmark of social democracy. Social democratic parties in Norway, Sweden, and Denmark were the primary architects of this model.',
      },
    },
    // --- OPPGAVE 2 (classic) ---
    {
      id: 'se-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain the difference between classical liberalism and social democracy. How do they differ on the role of government in the economy?',
        hints: [
          'Think about the key question: should the government primarily protect individual freedom and let the market operate freely, or should it actively redistribute resources to reduce inequality?',
          'Consider specific policy areas like taxation, welfare, and regulation.',
        ],
        solution: 'Classical liberalism advocates for minimal government intervention in the economy, emphasising free markets, low taxes, and individual economic freedom. The government\'s role is primarily to protect property rights and enforce contracts. Social democracy, by contrast, accepts a market economy but argues that the government must actively intervene through progressive taxation, universal public services (healthcare, education), and welfare programs to reduce inequality and ensure a basic standard of living for all. In short, classical liberalism prioritises economic freedom, while social democracy prioritises economic equality.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINISJON 2: Party Systems ---
    {
      id: 'se-1-4-def-2',
      type: 'definition',
      title: 'Party Systems: Two-Party vs. Multi-Party',
      content: `The number of parties in a political system is closely linked to the electoral system:

**Two-Party Systems**
- Dominated by two major parties that alternate in power.
- Smaller parties exist but rarely win significant representation.
- Closely associated with first-past-the-post electoral systems.
- **Example**: The United States (Democrats and Republicans). While third parties exist (Libertarian, Green), the electoral system makes it nearly impossible for them to win seats.
- **Advantages**: Clear choices for voters; stable governments.
- **Disadvantages**: Limited representation of diverse viewpoints; voters may feel forced to choose the "lesser evil."

**Multi-Party Systems**
- Multiple parties win significant representation in parliament.
- Coalition governments are common, as no single party wins a majority.
- Closely associated with proportional representation.
- **Example**: Norway (Labour, Conservative, Centre, Progress, Socialist Left, Liberal, Christian Democratic, Green, Red, etc.).
- **Advantages**: Greater diversity of representation; more nuanced policy debate.
- **Disadvantages**: Coalition negotiations can be slow; government may be less stable.

**Dominant-Party Systems**
- One party dominates politics over a long period, even if other parties are legally permitted.
- **Example**: Japan's Liberal Democratic Party (LDP) has governed for most of the post-war period.

**The Impact on Voters:**
In a two-party system, voters often choose between two broad coalitions. In a multi-party system, voters can find a party that more closely matches their specific views. This difference fundamentally shapes the nature of political debate and representation in each system.`,
    },
    // --- OPPGAVE 3 (classic) ---
    {
      id: 'se-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare the party system of the United States with that of Norway. How does each system affect the range of political choices available to voters? Which system do you think gives voters more influence over policy? Explain your reasoning.',
        hints: [
          'Consider the connection between the electoral system and the number of parties.',
          'Think about whether voters in a two-party system are forced to compromise more than voters in a multi-party system.',
          'Consider the role of coalition governments in multi-party systems.',
        ],
        solution: 'The US two-party system (Democrats vs. Republicans) offers voters a clear binary choice and tends to produce stable majority governments, but limits the range of political options. Voters with views that do not fit neatly into either party may feel unrepresented. Norway\'s multi-party system gives voters many more options, from socialist to liberal to conservative, but requires coalition governments where compromise is necessary. In Norway, voters arguably have more influence over policy direction because they can vote for a party that closely matches their views, but their chosen party must then negotiate with coalition partners. In the US, voters influence policy primarily through the primary election process within the two major parties.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 (MC) ---
    {
      id: 'se-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-1-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Why do first-past-the-post electoral systems tend to produce two-party systems?',
        options: [
          { id: 'a', text: 'Because the law prohibits more than two parties from forming', isCorrect: false },
          { id: 'b', text: 'Because voters strategically avoid "wasting" their vote on small parties that cannot win a constituency', isCorrect: true },
          { id: 'c', text: 'Because two-party systems are more democratic than multi-party ones', isCorrect: false },
          { id: 'd', text: 'Because proportional representation requires at least three parties', isCorrect: false },
        ],
        solution: 'Under FPTP, only the candidate with the most votes in a constituency wins. This creates a strong incentive for voters to support one of the two major parties rather than "waste" their vote on a smaller party that has little chance of winning. This phenomenon, known as Duverger\'s Law, explains why FPTP systems tend to converge on two dominant parties over time.',
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'se-1-4-summary',
      type: 'text',
      content: `## Chapter Summary

**Key Takeaways:**

1. **Political ideologies** -- coherent sets of beliefs about how society should be organised -- underpin political parties and policy debates.

2. **The major ideologies** include liberalism (individual rights, free markets), conservatism (tradition, stability), socialism (economic equality, collective ownership), and social democracy (market economy with a strong welfare state).

3. **Two-party systems** (like the US) offer clear choices but limited diversity. **Multi-party systems** (like Norway) offer greater representation but require coalitions.

4. **Electoral systems shape party systems**: FPTP tends to produce two dominant parties, while PR enables multi-party representation.

5. **Ideological differences** are not just abstract -- they shape real policy on issues like healthcare, taxation, education, and the environment.

**Looking Ahead:**
In the next chapter, we will examine the challenges facing democracy today, from populism and polarisation to the impact of social media and threats to democratic institutions.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Discussion task: "The left-right political spectrum is too simplistic to capture the complexity of modern politics." Do you agree? Write 150-200 words discussing the strengths and limitations of the left-right spectrum as a way of understanding political ideologies.',
        hints: [
          'Consider issues that do not fit neatly on a left-right axis, such as environmentalism, immigration, or personal liberty.',
          'Think about whether a two-dimensional model (e.g., adding an authoritarian-libertarian axis) would be more useful.',
          'Use specific examples to illustrate your points.',
        ],
        solution: 'A strong answer will acknowledge that the left-right spectrum is useful as a simplified starting point but has significant limitations. Issues such as environmentalism, nationalism, and personal freedom do not always align neatly with economic left-right positions. For example, libertarians favour both economic freedom (right) and personal freedom (often left). A two-dimensional model, with an additional authoritarian-libertarian axis, captures more nuance. However, even this is a simplification -- real political positions are complex and do not always fit into neat categories.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Choose a current policy debate in an English-speaking country (e.g., healthcare in the US, immigration in the UK, climate policy in Australia). Analyse how at least two different political ideologies would approach this issue. Which approach do you find most convincing, and why? Write 200-250 words.',
        hints: [
          'Be specific about the policy debate you choose.',
          'Clearly identify the ideological perspective behind each position.',
          'Your evaluation should be balanced and well-reasoned, even if you have a clear preference.',
        ],
        solution: 'A thorough answer will: (1) identify a specific policy debate, (2) analyse it from at least two ideological perspectives with specific details, and (3) provide a reasoned personal evaluation. For example, on US healthcare: a classical liberal/conservative position might argue for market-based solutions to promote competition and individual choice, while a social democratic position would advocate for universal public coverage funded by progressive taxation. The best answers will engage with the strongest arguments on each side before presenting their own view.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// Kapittel 1.5: Challenges to Democracy
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_1_5: TextbookChapter = {
  id: 'samf-engelsk-1-5',
  courseId: 'samf-engelsk',
  chapterNumber: '1.5',
  title: 'Challenges to Democracy',
  description: 'Analyse the major threats and challenges facing democratic societies in the 21st century, from populism to disinformation.',
  estimatedMinutes: 25,
  competenceGoals: [
    'discuss threats to democracy and democratic institutions in the modern world',
    'analyse the impact of social media and disinformation on democratic processes',
  ],
  exercises: [],
  keyTerms: [
    { term: 'Populism', definition: 'A political approach that frames politics as a struggle between "the ordinary people" and a corrupt or out-of-touch elite.' },
    { term: 'Polarisation', definition: 'The growing divide between opposing political groups, making compromise and dialogue more difficult.' },
    { term: 'Disinformation', definition: 'False or misleading information deliberately spread to deceive, manipulate public opinion, or undermine trust in institutions.' },
    { term: 'Democratic backsliding', definition: 'The gradual erosion of democratic norms and institutions within a country that was previously democratic.' },
    { term: 'Accountability', definition: 'The principle that those in power must justify their actions and can be removed from office if they fail to serve the public interest.' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'se-1-5-intro',
      type: 'text',
      content: `## Challenges to Democracy

Democracy may be the most widely praised form of government, but it is not invulnerable. Around the world, democratic systems face a range of serious challenges -- from the rise of populism and political polarisation to the spread of disinformation on social media and the erosion of trust in democratic institutions.

After the end of the Cold War in 1991, many believed that democracy would inevitably spread across the globe. Political scientist Francis Fukuyama famously declared "the end of history," arguing that liberal democracy had triumphed as the final form of human government. Three decades later, that optimism has faded. According to Freedom House, global freedom has declined for more than 15 consecutive years, with democratic erosion occurring in both new and established democracies.

**Learning Goals for This Chapter:**
- Identify and explain the main challenges facing modern democracies
- Analyse how populism, polarisation, and disinformation threaten democratic norms
- Evaluate the impact of social media on democratic processes
- Discuss strategies for strengthening and defending democracy

Understanding these challenges is not cause for despair -- it is the first step towards addressing them. Democracy has faced crises before and has proven remarkably resilient. But resilience requires informed, engaged citizens who understand the threats and are willing to defend democratic values.`,
    },
    // --- DEFINISJON 1: Populism and Polarisation ---
    {
      id: 'se-1-5-def-1',
      type: 'definition',
      title: 'Populism and Polarisation',
      content: `**Populism**
Populism is a political approach that frames politics as a struggle between "the people" (presented as virtuous and unified) and "the elite" (presented as corrupt and self-serving). Populist leaders claim to speak for the "ordinary" citizen against powerful insiders.

*Key features of populism:*
- **Anti-elitism**: Attacks on political establishments, experts, media, and institutions
- **Claim to represent "the people"**: The populist leader presents themselves as the sole authentic voice of the common citizen
- **Simplification of complex issues**: Complex problems are reduced to simple narratives with clear villains
- **Hostility towards pluralism**: Populists may argue that those who disagree with them are not truly part of "the people"

*Examples*: Populism exists on both the left and the right. Right-wing populism (e.g., Donald Trump in the US, Brexit movement in the UK) tends to focus on immigration and national identity. Left-wing populism (e.g., Podemos in Spain, Hugo Chavez in Venezuela) tends to focus on economic inequality and corporate power.

**Why populism is a challenge to democracy:**
While populist movements often raise legitimate grievances, the populist style can undermine democratic norms by:
- Attacking the legitimacy of independent institutions (courts, media)
- Framing political opponents as enemies rather than legitimate adversaries
- Undermining trust in experts and evidence-based policymaking
- Eroding the norms of compromise and mutual respect that democracy depends on

**Political Polarisation**
Polarisation refers to the growing divide between opposing political groups, where each side sees the other not merely as wrong but as a threat. When polarisation deepens, compromise becomes harder, political debate turns hostile, and the social fabric that holds a democracy together begins to fray.

*Factors driving polarisation:*
- Social media algorithms that create "echo chambers" and "filter bubbles"
- Partisan media outlets that cater to one side of the political spectrum
- Economic inequality that creates divergent life experiences and resentments
- Cultural shifts that provoke identity-based conflicts
- The strategic use of polarisation by politicians to mobilise their base`,
    },
    // --- EKSEMPEL ---
    {
      id: 'se-1-5-example-1',
      type: 'example',
      title: 'Example: Polarisation in the United States',
      problem: 'How has political polarisation manifested in the United States, and what impact has it had on democratic governance?',
      solution: `**The Growing Divide:**
Over the past several decades, the US has become increasingly polarised along partisan lines. Surveys show that Democrats and Republicans have moved further apart ideologically, view each other with increasing hostility, and are less willing to compromise.

**Evidence of Polarisation:**
- **Congress**: The US Congress has become more ideologically divided. Bipartisan legislation -- laws supported by both parties -- has become increasingly rare. In the 1970s, there was significant ideological overlap between the parties; today, there is virtually none.
- **Media**: The rise of partisan media (Fox News on the right, MSNBC on the left) and social media echo chambers means that Americans increasingly consume different versions of reality.
- **Social attitudes**: A Pew Research Center study found that in 2020, roughly 80% of voters for both Biden and Trump said they had "very few" or "no" friends who supported the other candidate.
- **The Capitol Insurrection (January 6, 2021)**: The storming of the US Capitol by supporters of President Trump, who rejected the 2020 election results, was a dramatic illustration of the dangers of extreme polarisation.

**Impact on Governance:**
Polarisation has contributed to government shutdowns, the inability to pass major legislation, and the politicisation of institutions like the Supreme Court and the electoral process itself. When each side views the other as an existential threat, democratic norms of compromise and peaceful transfer of power come under strain.

**Key Insight:** Polarisation is not just a disagreement about policy -- it is a breakdown in the shared norms and mutual trust that democratic governance requires.`,
    },
    // --- OPPGAVE 1 (MC) ---
    {
      id: 'se-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following is a characteristic feature of populism?',
        options: [
          { id: 'a', text: 'A commitment to compromise and bipartisan cooperation', isCorrect: false },
          { id: 'b', text: 'Framing politics as a struggle between "the people" and a corrupt elite', isCorrect: true },
          { id: 'c', text: 'A focus on evidence-based policymaking and expert advice', isCorrect: false },
          { id: 'd', text: 'Support for strong, independent judicial institutions', isCorrect: false },
        ],
        solution: 'Populism is defined by its framing of politics as a conflict between virtuous "ordinary people" and a corrupt elite. This anti-establishment rhetoric is the central feature of populist movements on both the left and the right.',
      },
    },
    // --- OPPGAVE 2 (classic) ---
    {
      id: 'se-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain in your own words what political polarisation means and give two specific examples of how it manifests in modern democracies.',
        hints: [
          'Think about what changes when citizens see political opponents as enemies rather than fellow citizens with different views.',
          'Consider examples from media, social media, legislative gridlock, or social attitudes.',
        ],
        solution: 'Political polarisation means the growing divide between opposing political groups, where each side becomes more extreme in its views and more hostile towards the other. Example 1: Partisan media -- outlets like Fox News and MSNBC present very different versions of events, so citizens on different sides of the political divide may live in different information realities. Example 2: Legislative gridlock -- in polarised legislatures like the US Congress, bipartisan cooperation has become rare because politicians fear being punished by their base for compromising with the other side.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINISJON 2: Disinformation and Social Media ---
    {
      id: 'se-1-5-def-2',
      type: 'definition',
      title: 'Disinformation, Social Media, and Democracy',
      content: `**Disinformation vs. Misinformation**
- **Disinformation**: False or misleading information *deliberately* spread to deceive, manipulate, or cause harm.
- **Misinformation**: False or inaccurate information spread *without* the deliberate intent to deceive (e.g., sharing a rumour without checking whether it is true).

Both are dangerous for democracy, but disinformation is especially insidious because it is often strategically designed to exploit divisions and undermine trust.

**How Social Media Amplifies These Threats:**

1. **Echo chambers and filter bubbles**: Social media algorithms show users content that aligns with their existing views, reinforcing biases and reducing exposure to diverse perspectives.

2. **Viral spread of falsehoods**: False stories often spread faster than accurate ones because they tend to be more sensational and emotionally engaging. A 2018 MIT study found that false news stories on Twitter spread six times faster than true ones.

3. **Foreign interference**: State actors (e.g., Russian troll farms) have used social media to spread disinformation in other countries' elections, aiming to deepen divisions and undermine trust in democratic processes.

4. **Erosion of trust in media and institutions**: When citizens cannot distinguish reliable information from false information, trust in journalism, science, and democratic institutions declines.

5. **Deepfakes and AI-generated content**: Advancing technology makes it increasingly possible to create convincing fake videos, images, and text, making it even harder for citizens to distinguish fact from fiction.

**What Can Be Done?**
- **Media literacy education**: Teaching citizens to critically evaluate sources and identify disinformation.
- **Platform regulation**: Requiring social media companies to be more transparent about algorithms and to take action against disinformation.
- **Support for quality journalism**: Ensuring that independent, fact-based journalism has the resources to compete with sensationalist content.
- **Individual responsibility**: Each citizen has a role in checking sources before sharing information.`,
    },
    // --- OPPGAVE 3 (classic) ---
    {
      id: 'se-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain the difference between disinformation and misinformation. Why is disinformation considered a greater threat to democracy? Give one example of each.',
        hints: [
          'The key difference is intent -- disinformation is deliberately deceptive, while misinformation is accidentally false.',
          'Think about the strategic nature of disinformation and who benefits from spreading it.',
        ],
        solution: 'Disinformation is false information deliberately created and spread to deceive or manipulate (e.g., a foreign government creating fake social media accounts to spread divisive content before an election). Misinformation is false information shared without intent to deceive (e.g., someone sharing an outdated health claim on Facebook because they genuinely believe it is true). Disinformation is a greater threat because it is strategic -- designed to exploit vulnerabilities, deepen divisions, and undermine trust in democratic institutions. It is also harder to combat because those spreading it actively adapt their tactics to avoid detection.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 (MC) ---
    {
      id: 'se-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-1-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A 2018 MIT study about the spread of news on Twitter (now X) found that:',
        options: [
          { id: 'a', text: 'True stories and false stories spread at approximately the same rate', isCorrect: false },
          { id: 'b', text: 'False news stories spread significantly faster and further than true ones', isCorrect: true },
          { id: 'c', text: 'Social media algorithms effectively prevent the spread of false news', isCorrect: false },
          { id: 'd', text: 'Older users are the only ones who share false news', isCorrect: false },
        ],
        solution: 'The landmark MIT study published in *Science* found that false news stories spread approximately six times faster than true ones on Twitter. This is because false stories tend to be more novel, surprising, and emotionally engaging, which makes users more likely to share them.',
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'se-1-5-summary',
      type: 'text',
      content: `## Chapter Summary

**Key Takeaways:**

1. **Democracy faces serious challenges** in the 21st century, including populism, polarisation, disinformation, and democratic backsliding.

2. **Populism** frames politics as a struggle between "the people" and "the elite." While it can raise legitimate concerns, the populist style can undermine democratic norms and institutions.

3. **Political polarisation** -- the growing divide between opposing groups -- makes compromise harder and can erode the mutual trust that democracy depends on.

4. **Disinformation** is false information deliberately spread to deceive, while **misinformation** is false information spread without intent to deceive. Both threaten informed democratic participation.

5. **Social media** amplifies these challenges through echo chambers, viral falsehoods, and the erosion of shared factual ground.

6. **Defending democracy** requires media literacy, support for independent journalism, responsible platform governance, and engaged citizens who think critically about the information they consume.

**Looking Ahead:**
In Section 2, we will turn to the theme of human rights and explore how democratic and non-democratic societies address questions of justice, equality, and fundamental freedoms.

**Final Reflection:**
Democracy is not a spectator sport. As the ancient Athenians understood, it requires active participation from informed citizens. The challenges we have explored in this chapter are serious, but they are not insurmountable -- if citizens understand them and are willing to act.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Discussion task: "Social media is the biggest threat to democracy in the 21st century." To what extent do you agree with this statement? Write a balanced essay (200-250 words) considering arguments both for and against this claim.',
        hints: [
          'Consider both the positive and negative effects of social media on democracy.',
          'Positive effects might include enabling political mobilisation, giving voice to marginalised groups, and increasing access to information.',
          'Negative effects might include echo chambers, disinformation, and polarisation.',
          'Consider whether social media is the *biggest* threat or whether other challenges (economic inequality, climate change, populism) are more significant.',
        ],
        solution: 'A strong answer will present a balanced argument. For: social media creates echo chambers, enables rapid spread of disinformation, foreign interference in elections, and deepens polarisation -- all of which directly undermine informed democratic participation. Against: social media also enables political mobilisation (e.g., the Arab Spring, climate protests), gives a platform to marginalised voices, and increases government transparency. Furthermore, other threats (economic inequality, authoritarian rise, climate change) may be more fundamental. The best answers will conclude with a nuanced evaluation rather than a simple agree/disagree.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Design a "Democracy Health Check" for a country of your choice. Identify five criteria you would use to assess the health of its democracy (e.g., free press, independent judiciary, voter turnout, protection of minority rights, etc.). For each criterion, explain why it matters and rate the country on a scale of 1-5 with a brief justification. Present your findings in a structured format.',
        hints: [
          'Draw on what you have learned throughout this entire section on Democracy and Political Systems.',
          'Your criteria should cover different aspects of democratic health -- not just elections.',
          'Be honest and evidence-based in your ratings.',
          'You may research recent developments in the country you choose.',
        ],
        solution: 'A thorough answer will choose a specific country and assess it on five well-chosen criteria with brief, evidence-based justifications. For example, assessing the UK: (1) Free press -- 4/5, generally strong but concerns about media concentration; (2) Independent judiciary -- 5/5, well-established and highly respected; (3) Voter turnout -- 3/5, around 67%, lower than many European peers; (4) Protection of minority rights -- 4/5, strong legal protections but ongoing debates around equity; (5) Electoral representativeness -- 3/5, FPTP produces disproportionate results. The best answers will show critical thinking and draw on specific knowledge.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
};

// ============================================================================
// Eksport alle kapitler i del 1
// ============================================================================

export const SAMF_ENGELSK_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMF_ENGELSK_1_1,
  CHAPTER_SAMF_ENGELSK_1_2,
  CHAPTER_SAMF_ENGELSK_1_3,
  CHAPTER_SAMF_ENGELSK_1_4,
  CHAPTER_SAMF_ENGELSK_1_5,
];
