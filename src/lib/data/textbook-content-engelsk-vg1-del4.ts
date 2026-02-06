/**
 * Tekstbok innhold for Engelsk VG1 DEL 4
 * Section 8: The United Kingdom (8.1-8.4)
 * Section 9: The United States (9.1-9.4)
 * Section 10: Other English-speaking Countries (10.1-10.4)
 * Section 11: Cultural Expressions (11.1-11.4)
 * Section 12: Exam Preparation (12.1-12.4)
 *
 * Dekker LK20 kompetansemål for ENG01-05.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SECTION 8: The United Kingdom
// ============================================================================

export const CHAPTER_ENGELSK_VG1_8_1: TextbookChapter = {
  id: 'engelsk-vg1-8-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '8.1',
  title: 'British History Overview',
  description: 'Explore key events and periods in British history.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden ut fra historiske sammenhenger'],
  content: [
    {
      id: 'engelsk-vg1-8-1-intro',
      type: 'text',
      content: `## A Brief History of Britain

British history spans thousands of years and has shaped the modern world profoundly. From Roman occupation to the Industrial Revolution, from a tiny island kingdom to a global empire, Britain's story is one of transformation, conflict, and influence.

**Learning Objectives:**
- Identify key periods and events in British history
- Understand how historical events shaped modern Britain
- Analyze the connections between past and present
- Compare British historical development with other nations

**Key Periods:**
- Roman Britain (43-410 AD)
- Anglo-Saxon England (410-1066)
- Norman England (1066-1154)
- Medieval Period (1154-1485)
- Tudor Era (1485-1603)
- Civil War & Restoration (1642-1714)
- Industrial Revolution (1760-1840)
- Victorian Era (1837-1901)
- 20th Century Wars and Decline
- Post-War and Modern Britain`,
    },
    {
      id: 'engelsk-vg1-8-1-theory-1',
      type: 'definition',
      title: 'Theory 1: Early British History',
      content: `**Roman Britain (43-410 AD)**
The Romans invaded Britain in 43 AD under Emperor Claudius. They built roads, cities like Londinium (London), and Hadrian's Wall. Roman rule brought Christianity, Latin, and advanced engineering. When Rome fell, the legions left, and Britain entered a period of uncertainty.

**Anglo-Saxon England (410-1066)**
Germanic tribes - Angles, Saxons, and Jutes - migrated to Britain after Roman withdrawal. They established kingdoms like Wessex, Mercia, and Northumbria. King Alfred the Great (871-899) united much of England against Viking invaders. The Anglo-Saxons gave England its name ("Angle-land") and the foundation of the English language.

**The Norman Conquest (1066)**
William, Duke of Normandy, defeated King Harold at the Battle of Hastings. This single event transformed England:
- **Language:** French became the language of court and law
- **Society:** Feudal system imposed
- **Architecture:** Castles and cathedrals built
- **Law:** Centralized legal system developed

The Domesday Book (1086) surveyed all of England - an unprecedented administrative achievement.`,
    },
    {
      id: 'engelsk-vg1-8-1-example-1',
      type: 'text',
      content: `### Example: How the Norman Conquest Changed English

Before 1066, English was a purely Germanic language. After the Norman Conquest, thousands of French words entered English, creating the rich vocabulary we have today.

**Food Words:**
| Anglo-Saxon (animals) | French (meat) |
|----------------------|---------------|
| cow | beef |
| pig | pork |
| sheep | mutton |
| deer | venison |

**Why?** Anglo-Saxon peasants raised the animals; French-speaking nobles ate them.

**Legal/Government Words from French:**
court, judge, jury, parliament, government, royal, noble, authority

**Anglo-Saxon Words That Survived:**
house, home, mother, father, child, love, friend, earth, water

This linguistic legacy shows how deeply the Norman Conquest transformed English society.`,
    },
    {
      id: 'engelsk-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match each event with its historical significance:',
        subTasks: [
          { label: 'a', task: 'Roman Britain (43-410 AD)', solution: 'Brought roads, cities, Christianity, and Latin to Britain' },
          { label: 'b', task: 'Anglo-Saxon Period', solution: 'Created English identity, language foundation, and unified kingdoms' },
          { label: 'c', task: 'Norman Conquest (1066)', solution: 'Transformed language, law, and society; introduced feudalism' },
        ],
        solution: 'Each period built upon the previous one, creating layers of British identity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze the linguistic impact of the Norman Conquest:',
        subTasks: [
          { label: 'a', task: 'Why do we have two words for farm animals and their meat (cow/beef, pig/pork)?', solution: 'Anglo-Saxon peasants raised animals (Anglo-Saxon words); Norman nobles ate the meat (French words)' },
          { label: 'b', task: 'What does this tell us about social class in Norman England?', solution: 'Clear division between Anglo-Saxon working class and French-speaking ruling class' },
        ],
        solution: 'Language preserves social history across centuries.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-theory-2',
      type: 'definition',
      title: 'Theory 2: Modern British History',
      content: `**The Tudor Era (1485-1603)**
The Tudors - Henry VII, Henry VIII, Edward VI, Mary I, and Elizabeth I - transformed England. Henry VIII's break from Rome created the Church of England. Elizabeth I's reign saw Shakespeare, the defeat of the Spanish Armada, and early colonization.

**The Civil War and Revolution (1642-1688)**
Parliament and King Charles I went to war over power and religion. Charles was executed (1649) - the first time in European history that a reigning king was put on trial and killed by his own people. A brief republic under Oliver Cromwell followed, then monarchy was restored. The Glorious Revolution (1688) established that Parliament, not the monarch, held supreme power.

**The Industrial Revolution (1760-1840)**
Britain became the world's first industrialized nation:
- **Technology:** Steam power, factories, railways
- **Society:** Urbanization, new working class, child labor
- **Economy:** From agriculture to manufacturing
- **Global impact:** Britain became the world's dominant economic power

**Victorian Era (1837-1901)**
Queen Victoria's reign saw Britain at its peak:
- Largest empire in history
- Cultural confidence and moral values
- Scientific and technological advancement
- But also: poverty, inequality, rigid class system`,
    },
    {
      id: 'engelsk-vg1-8-1-example-2',
      type: 'text',
      content: `### Example: The Industrial Revolution's Double Edge

**Manchester in 1850:**
Manchester was called "Cottonopolis" - the world's first industrial city. It produced more cotton textiles than anywhere else on Earth.

**The Bright Side:**
- Wages higher than rural areas
- New technologies improving life
- Growing middle class
- Products affordable for ordinary people

**The Dark Side:**
Friedrich Engels lived in Manchester and documented conditions:
- Workers lived in slums with no sanitation
- Average life expectancy: 17 years in poor areas vs. 38 in wealthy areas
- Children as young as 5 worked 16-hour days
- Air so polluted that grass wouldn't grow

**Legacy:**
The Industrial Revolution created both modern prosperity AND the need for workers' rights, public health, and social reform. Many laws we take for granted - child labor laws, workplace safety, environmental protection - came from addressing industrial-era problems.`,
    },
    {
      id: 'engelsk-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze the Industrial Revolution:',
        subTasks: [
          { label: 'a', task: 'List three positive effects of the Industrial Revolution.', solution: 'Technological advancement, economic growth, affordable goods, urbanization, improved transportation' },
          { label: 'b', task: 'List three negative effects of the Industrial Revolution.', solution: 'Child labor, pollution, slum housing, dangerous working conditions, exploitation' },
          { label: 'c', task: 'How did the problems lead to reforms that benefit us today?', solution: 'Labor laws, public health systems, environmental protection, education requirements' },
        ],
        solution: 'Historical problems often lead to solutions that improve society over time.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Research and explain the significance of the English Civil War:',
        subTasks: [
          { label: 'a', task: 'What were the main causes of the conflict between Parliament and King Charles I?', solution: 'Disputes over taxation, religion, and royal power; Charles ruling without Parliament' },
          { label: 'b', task: 'Why was the execution of Charles I so shocking to Europeans?', solution: 'First time a reigning monarch was tried and executed by his own people; challenged divine right of kings' },
        ],
        solution: `The Civil War established that rulers aren't above the law - a foundation of modern democracy.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Layered History:** British identity was built layer by layer - Celtic, Roman, Anglo-Saxon, Norman, and beyond.

2. **Language as Evidence:** English vocabulary reveals social history - Germanic words for everyday life, French words for power and refinement.

3. **Constitutional Development:** From Magna Carta (1215) through the Civil War (1640s) to the Glorious Revolution (1688), Britain gradually limited royal power and established parliamentary supremacy.

4. **Industrial Pioneer:** Britain was the first industrialized nation, experiencing both the benefits and costs of rapid economic transformation.

5. **Global Influence:** British history shaped not just one island, but legal systems, languages, and political ideas worldwide.

**Key Vocabulary:**
- Norman Conquest - the 1066 invasion that transformed English society
- Magna Carta - 1215 document limiting royal power
- Industrial Revolution - transformation from agricultural to manufacturing economy
- Parliamentary supremacy - principle that elected Parliament holds ultimate power`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a short essay (200-300 words) on ONE of these topics:',
        subTasks: [
          { label: 'a', task: `"The Norman Conquest was the most important event in English history." Do you agree or disagree? Give reasons.`, solution: 'Consider language, law, society, and compare with other events like Industrial Revolution or Civil War' },
          { label: 'b', task: 'Compare the Industrial Revolution in Britain with industrialization in Norway. What similarities and differences can you identify?', solution: 'Consider timing, industries (textiles vs. fishing/shipping), social effects, and outcomes' },
        ],
        hints: ['Use specific historical evidence', 'Consider multiple perspectives', 'Structure with introduction, body, and conclusion'],
        solution: 'A good historical essay uses evidence to support a clear argument.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Create a timeline of British history:',
        subTasks: [
          { label: 'a', task: 'Mark at least 8 key events from 43 AD to 1901.', solution: 'Roman invasion, Anglo-Saxon settlement, Norman Conquest, Magna Carta, Reformation, Civil War, Glorious Revolution, Industrial Revolution' },
          { label: 'b', task: 'For each event, write one sentence explaining why it was significant.', solution: 'Focus on lasting impact, not just what happened' },
          { label: 'c', task: 'Identify which events still affect life in Britain today and explain how.', solution: 'Consider language, law, government, economy, culture' },
        ],
        hints: ['Think about cause and effect between events', 'Consider how events built on each other'],
        solution: 'Understanding historical connections helps us see how the past shapes the present.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_8_2: TextbookChapter = {
  id: 'engelsk-vg1-8-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '8.2',
  title: 'The British Empire and Its Legacy',
  description: 'Understand the British Empire and its lasting impact.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden ut fra historiske sammenhenger'],
  content: [
    {
      id: 'engelsk-vg1-8-2-intro',
      type: 'text',
      content: `## The Sun Never Sets

At its height, the British Empire was the largest in history, controlling about 25% of the world's land and population. The saying "the sun never sets on the British Empire" was literally true - it spanned so many time zones that it was always daylight somewhere in British territory.

**Learning Objectives:**
- Understand the scope and methods of British colonialism
- Analyze both positive and negative legacies of empire
- Evaluate how colonial history affects the present
- Discuss complex ethical questions about historical responsibility

**Key Phases:**
- First Empire (1583-1783): Americas, Caribbean
- Second Empire (1783-1914): India, Africa, Asia, Pacific
- Decline (1914-1997): World Wars, decolonization

**The Empire's Legacy:**
- Spread of English language
- Common law systems
- Parliamentary democracy models
- Cricket and other sports
- But also: slavery, exploitation, cultural destruction`,
    },
    {
      id: 'engelsk-vg1-8-2-theory-1',
      type: 'definition',
      title: 'Theory 1: Building the Empire',
      content: `**The First British Empire (1583-1783)**
Britain's first empire focused on the Americas and Caribbean:
- **North America:** 13 colonies that became the United States
- **Caribbean:** Jamaica, Barbados - sugar plantations using enslaved labor
- **Canada:** Taken from France in 1763

This empire ended with American independence (1776-1783).

**The Second British Empire (1783-1914)**
After losing America, Britain focused on Asia, Africa, and the Pacific:
- **India:** "The Jewel in the Crown" - controlled through the East India Company, then directly after 1857
- **Africa:** Egypt, Sudan, Nigeria, Kenya, South Africa, and more - the "Scramble for Africa"
- **Pacific:** Australia, New Zealand, Fiji, and many islands
- **Asia:** Hong Kong, Singapore, Burma, Malaya

**Methods of Empire:**
1. **Trading companies:** East India Company had its own army
2. **Military conquest:** Often with superior technology
3. **Treaties:** Sometimes fair, often coerced
4. **Indirect rule:** Using local leaders
5. **Settlers:** Europeans taking land (Australia, New Zealand, South Africa)`,
    },
    {
      id: 'engelsk-vg1-8-2-example-1',
      type: 'text',
      content: `### Example: India - The Jewel in the Crown

**How Britain Took Control:**
The East India Company arrived as traders in 1600. Over 250 years, they gradually conquered the entire subcontinent through a combination of:
- Military force
- Playing local rulers against each other
- Economic control
- Taking over during famines and crises

**What Britain Extracted:**
- Raw materials (cotton, tea, spices, indigo)
- Tax revenue
- Markets for British manufactured goods
- Soldiers (Indian troops fought in British wars worldwide)

**British Justifications:**
- "Civilizing mission" - bringing "progress" to "backward" peoples
- Spreading Christianity
- Building railways and infrastructure
- Creating "order" and "good government"

**Indian Perspective:**
- Deindustrialization - India went from manufacturing textiles to exporting raw cotton
- Famines killed millions while food was exported
- Cultural suppression and racism
- Loss of self-governance

**Legacy:**
- English as a unifying language in diverse India
- Railways (built for resource extraction)
- Legal and administrative systems
- Cricket and parliamentary democracy
- BUT ALSO: Partition (1947) killed 1-2 million; borders that created lasting conflicts`,
    },
    {
      id: 'engelsk-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: `Analyze the British Empire's methods and justifications:`,
        subTasks: [
          { label: 'a', task: 'List three methods Britain used to build its empire.', solution: 'Military conquest, trading companies, treaties, indirect rule, settler colonialism' },
          { label: 'b', task: 'What was the "civilizing mission"? How did the British justify colonialism?', solution: 'Belief that they were bringing progress, Christianity, and good government to "backward" peoples' },
          { label: 'c', task: 'How might colonized peoples have viewed these justifications?', solution: 'As excuses for exploitation, racism, and cultural destruction' },
        ],
        solution: 'Understanding both perspectives is essential for analyzing colonial history.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Using the India example, analyze colonial economics:',
        subTasks: [
          { label: 'a', task: 'How did British rule change what India produced?', solution: 'From manufactured textiles to raw cotton for British factories - deindustrialization' },
          { label: 'b', task: 'Who benefited from this change? Who suffered?', solution: 'British manufacturers benefited; Indian craftspeople and economy suffered' },
        ],
        solution: 'Colonial economies were designed to benefit the colonizer, not the colonized.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-2-theory-2',
      type: 'definition',
      title: 'Theory 2: The Legacy of Empire',
      content: `**Decolonization (1945-1997)**
After World War II, the empire rapidly dissolved:
- **1947:** India and Pakistan independent (Partition killed 1-2 million)
- **1960s:** Most African colonies independent
- **1997:** Hong Kong returned to China

**Why Did the Empire End?**
- WWII weakened Britain economically
- Independence movements grew stronger
- Changing attitudes about race and rights
- Cold War pressures from US and USSR
- Cost of maintaining empire exceeded benefits

**The Commonwealth Today:**
54 member states, 2.5 billion people. Voluntary association. The British monarch is head of state in 15 countries (including Canada, Australia).

**Lasting Negative Legacies:**
- **Borders:** African and Asian borders drawn by Europeans, dividing ethnic groups and creating conflicts
- **Economic structures:** Economies still oriented toward exporting raw materials
- **Racism:** Racial hierarchies established during colonialism
- **Trauma:** Slavery, violence, cultural destruction
- **Inequality:** Former colonies are generally poorer than former colonizers

**Lasting Positive Legacies:**
- **Language:** English as a global language enabling international communication
- **Legal systems:** Rule of law, independent courts
- **Infrastructure:** Railways, ports, universities (though built for colonial purposes)
- **Democracy:** Parliamentary systems in many former colonies`,
    },
    {
      id: 'engelsk-vg1-8-2-example-2',
      type: 'text',
      content: `### Example: The Scramble for Africa

**The Berlin Conference (1884-1885)**
European powers met in Berlin to divide Africa among themselves. No Africans were invited.

**What Happened:**
- Europeans drew straight-line borders on maps
- These borders ignored ethnic, linguistic, and historical boundaries
- By 1914, only Ethiopia and Liberia remained independent

**Case Study: Nigeria**
Britain created Nigeria by combining:
- Hausa-Fulani (Muslim, north)
- Yoruba (southwest)
- Igbo (southeast)
- Plus 250+ other ethnic groups

These groups had different languages, religions, and histories. They were forced into one country.

**The Consequences:**
- Civil war (1967-1970): Igbo attempted secession, 1-3 million died
- Ongoing ethnic and religious tensions
- Political instability
- Competition for oil resources along ethnic lines

**The Pattern Repeats:**
Similar problems in Rwanda (Hutu/Tutsi), Sudan (North/South), and many other African nations where colonial borders created unnatural states.

**Key Question:**
Are these conflicts "African problems" or the result of colonial decisions?`,
    },
    {
      id: 'engelsk-vg1-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze the impact of colonial borders:',
        subTasks: [
          { label: 'a', task: 'Why did Europeans draw borders without considering local populations?', solution: 'Focused on their own interests (resources, strategic locations); viewed Africans as inferior; didn\'t understand or care about local divisions' },
          { label: 'b', task: 'How have these borders contributed to conflicts in Africa?', solution: 'Divided ethnic groups between countries; forced rival groups into same country; created artificial nations without shared identity' },
          { label: 'c', task: 'Why is it difficult to change these borders today?', solution: 'International law, national identities formed around borders, fear of more conflict, economic interests' },
        ],
        solution: 'Colonial decisions continue to shape conflicts and politics today.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Evaluate the debate about reparations:',
        subTasks: [
          { label: 'a', task: 'What arguments support former colonial powers paying reparations?', solution: 'Wealth was extracted; lasting economic damage; moral responsibility; precedent of Holocaust reparations' },
          { label: 'b', task: 'What arguments oppose reparations?', solution: 'Long time ago; who pays whom; practical difficulties; some benefits left behind; current generations not responsible' },
        ],
        solution: 'This debate requires weighing historical responsibility against practical considerations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-2-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Scale:** The British Empire was the largest in history, controlling 25% of the world's land and population.

2. **Methods:** Empire was built through trading companies, military conquest, treaties, indirect rule, and settler colonialism.

3. **Justifications:** The British claimed a "civilizing mission," but this masked economic exploitation and racism.

4. **Decolonization:** The empire ended after WWII due to weakened Britain, independence movements, and changing attitudes.

5. **Legacy:** Colonial history created lasting structures - some beneficial (language, legal systems), many harmful (borders, economic inequality, racism).

**Key Vocabulary:**
- Colonialism - political and economic control over another country
- Decolonization - the process of colonies becoming independent
- Commonwealth - voluntary association of former British colonies
- Reparations - compensation for historical wrongs
- "Civilizing mission" - justification claiming colonizers were helping colonized peoples`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a balanced essay (250-350 words):',
        subTasks: [
          { label: 'Topic', task: `"The British Empire left more positive than negative legacies." Discuss this statement, presenting arguments for both sides before giving your own conclusion.`, solution: 'Consider language, institutions, infrastructure vs. exploitation, racism, artificial borders, economic damage' },
        ],
        hints: ['Present both sides fairly', 'Use specific examples', 'Acknowledge complexity', 'State your own reasoned conclusion'],
        solution: 'A good essay on this topic acknowledges that the legacy is complex and contested.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research project:',
        subTasks: [
          { label: 'a', task: 'Choose one former British colony (not covered above).', solution: 'Options: Kenya, Ghana, Jamaica, Singapore, Hong Kong, South Africa, etc.' },
          { label: 'b', task: 'Research: When was it colonized? How? When did it become independent?', solution: 'Use reliable sources; note key dates and events' },
          { label: 'c', task: 'What lasting legacies - positive and negative - can you identify?', solution: 'Consider politics, economy, culture, language, social issues' },
          { label: 'd', task: 'Present your findings in a 3-minute oral presentation or 300-word report.', solution: 'Structure clearly; use evidence; acknowledge complexity' },
        ],
        hints: ['Use multiple sources', 'Look for perspectives from the colonized country, not just British sources'],
        solution: 'Researching specific cases helps understand the varied impacts of colonialism.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_8_3: TextbookChapter = {
  id: 'engelsk-vg1-8-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '8.3',
  title: 'British Politics and Government',
  description: `Understand the UK's political system and government.`,
  estimatedMinutes: 45,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden'],
  content: [
    {
      id: 'engelsk-vg1-8-3-intro',
      type: 'text',
      content: `## How Britain is Governed

The United Kingdom is a constitutional monarchy with a parliamentary democracy - one of the oldest in the world. Understanding British politics helps you interpret news, understand history, and compare political systems.

**Learning Objectives:**
- Understand the structure of British government
- Compare British and Norwegian political systems
- Analyze key political issues facing the UK today
- Evaluate the strengths and weaknesses of the British system

**Key Features:**
- Monarch as head of state (ceremonial)
- Prime Minister as head of government
- Parliament makes laws
- No single written constitution`,
    },
    {
      id: 'engelsk-vg1-8-3-theory-1',
      type: 'definition',
      title: 'Theory 1: The Structure of Government',
      content: `**The Monarch**
Currently King Charles III (since 2022). The monarch's role is ceremonial:
- Opens Parliament with the King's Speech (written by government)
- Gives "Royal Assent" to laws (never refused since 1708)
- Meets weekly with the Prime Minister
- Represents the UK abroad
- "Reigns but does not rule"

**Parliament (Legislative Branch)**
Parliament makes laws and holds government accountable.

**House of Commons (Lower House):**
- 650 Members of Parliament (MPs) elected by voters
- Elections at least every 5 years
- The government must maintain majority support
- Real power lies here

**House of Lords (Upper House):**
- About 800 members (not elected!)
- Life peers appointed by the monarch on PM's advice
- 92 hereditary peers (inherit their seats)
- 26 bishops of the Church of England
- Can delay and revise laws, but Commons can override

**The Prime Minister and Cabinet**
- PM is leader of the largest party in Commons
- Not directly elected by voters (unlike US President)
- Chooses Cabinet ministers to run government departments
- Can be removed by their own party or losing Commons vote`,
    },
    {
      id: 'engelsk-vg1-8-3-example-1',
      type: 'text',
      content: `### Example: How a British Law is Made

**Step 1: Proposal**
A "Bill" (proposed law) is introduced to Parliament. Most come from the government, but individual MPs can propose "Private Members' Bills."

**Step 2: House of Commons**
- First Reading: Bill announced (no debate)
- Second Reading: General debate on principles
- Committee Stage: Detailed examination, amendments
- Third Reading: Final debate and vote

**Step 3: House of Lords**
Same process. Lords can propose amendments. If they disagree with Commons, the bill goes back and forth ("ping pong") until agreement or Commons uses the Parliament Acts to override.

**Step 4: Royal Assent**
The monarch formally approves the bill. This is automatic - no monarch has refused since 1708.

**Step 5: Law**
The bill becomes an "Act of Parliament" and is the law.

**Example: Marriage (Same Sex Couples) Act 2013**
- Proposed by coalition government
- Passed Commons despite many Conservative MPs voting against
- Lords debated and passed with amendments
- Royal Assent July 2013
- Same-sex marriage became legal in England and Wales`,
    },
    {
      id: 'engelsk-vg1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explain the structure of British government:',
        subTasks: [
          { label: 'a', task: 'What is the difference between the Head of State and Head of Government in the UK?', solution: 'Head of State (King) is ceremonial; Head of Government (PM) has real political power' },
          { label: 'b', task: 'Why is the House of Commons more powerful than the House of Lords?', solution: 'Commons is elected, can override Lords, government must maintain Commons majority' },
          { label: 'c', task: 'How does someone become Prime Minister?', solution: 'Leader of largest party in Commons; appointed by monarch but not directly elected by voters' },
        ],
        solution: 'Understanding the structure helps interpret British political news.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze the House of Lords:',
        subTasks: [
          { label: 'a', task: 'Why might having unelected legislators be considered undemocratic?', solution: 'They make laws without being chosen by voters; hereditary peers inherit positions; no accountability to public' },
          { label: 'b', task: 'What arguments could be made FOR keeping the House of Lords?', solution: 'Expertise and experience; independence from short-term politics; can improve legislation; tradition' },
        ],
        solution: 'The Lords is controversial - a unique mix of tradition and practical function.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-3-theory-2',
      type: 'definition',
      title: 'Theory 2: Key Political Issues',
      content: `**The UK is Not One Country**
The UK = England + Scotland + Wales + Northern Ireland

**Devolution:**
Since 1999, Scotland, Wales, and Northern Ireland have their own parliaments/assemblies with certain powers:
- **Scottish Parliament:** Controls education, health, justice, some taxes
- **Welsh Senedd:** Similar but fewer powers
- **Northern Ireland Assembly:** Unique power-sharing arrangements

England has no separate parliament - English laws are made by the UK Parliament.

**Brexit (2016-2020)**
The UK voted 52-48% to leave the European Union:
- **Leave arguments:** Sovereignty, immigration control, save money
- **Remain arguments:** Economic benefits, cooperation, influence
- **Ongoing issues:** Trade barriers, Northern Ireland border, labor shortages

**Scottish Independence**
Scotland voted 55-45% to stay in UK (2014), but Brexit (which Scotland opposed) renewed calls for another referendum. The Scottish National Party (SNP) wants independence.

**Northern Ireland**
Complex history of conflict between:
- Unionists (mostly Protestant) - want to stay in UK
- Nationalists (mostly Catholic) - want to join Republic of Ireland
The Good Friday Agreement (1998) brought peace but Brexit created new tensions.`,
    },
    {
      id: 'engelsk-vg1-8-3-example-2',
      type: 'text',
      content: `### Example: Brexit - A Case Study in Direct Democracy

**The Referendum (June 23, 2016)**
Prime Minister David Cameron promised a vote on EU membership to unite his Conservative Party. He expected Remain to win easily.

**The Result:**
- Leave: 51.9% (17.4 million votes)
- Remain: 48.1% (16.1 million votes)
- Turnout: 72.2%

**Geographic Divide:**
- England and Wales voted Leave
- Scotland and Northern Ireland voted Remain
- London and other cities voted Remain
- Rural and post-industrial areas voted Leave

**What Happened Next:**
- Cameron resigned
- Three years of political chaos
- Three Prime Ministers in three years
- Finally left EU on January 31, 2020

**Ongoing Debates:**
- Was the referendum fair? (Claims of misinformation, foreign interference)
- Should a simple majority decide such a major change?
- Should there be another referendum now people know the consequences?
- How should the UK handle the economic impacts?

**Key Lesson:**
Direct democracy (referendums) can create as many problems as it solves, especially on complex issues.`,
    },
    {
      id: 'engelsk-vg1-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze Brexit:',
        subTasks: [
          { label: 'a', task: 'Why did the UK vote to leave the EU? List arguments from both sides.', solution: 'Leave: sovereignty, immigration control, save money. Remain: economic benefits, cooperation, influence in EU' },
          { label: 'b', task: 'Why did Scotland and Northern Ireland vote differently from England?', solution: 'Different national identities, more pro-EU attitudes, concerns about implications for their own positions' },
          { label: 'c', task: 'What does Brexit show about the challenges of using referendums for complex decisions?', solution: 'Simple yes/no on complex issue, misinformation possible, small majority for major change, difficult to reverse' },
        ],
        solution: 'Brexit reveals tensions in British politics and identity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare British and Norwegian political systems:',
        subTasks: [
          { label: 'a', task: 'List two similarities between the systems.', solution: 'Constitutional monarchies, parliamentary democracies, ceremonial monarchs, prime ministers from majority party' },
          { label: 'b', task: 'List two key differences.', solution: 'UK has no written constitution; UK has unelected House of Lords; UK uses first-past-the-post voting; Norway has proportional representation' },
        ],
        hints: ['Consider voting systems, constitutional documents, and legislative chambers'],
        solution: 'Both are parliamentary democracies but with important structural differences.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-3-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Constitutional Monarchy:** The UK has a monarch (currently King Charles III) who reigns but does not rule. Real power lies with the elected government.

2. **Parliament:** The House of Commons (elected) has more power than the House of Lords (unelected). The government must maintain Commons support.

3. **No Written Constitution:** The UK has no single constitutional document - constitutional rules come from laws, court decisions, and traditions.

4. **Devolution:** Scotland, Wales, and Northern Ireland have their own parliaments with certain powers, creating a complex multi-level system.

5. **Current Tensions:** Brexit, Scottish independence, and Northern Ireland's status are major ongoing political issues.

**Key Vocabulary:**
- Constitutional monarchy - system where monarch is head of state but with limited powers
- Parliamentary democracy - government responsible to elected legislature
- Devolution - transfer of powers from central to regional governments
- Brexit - British exit from the European Union
- First-past-the-post - electoral system where candidate with most votes wins (no proportional representation)`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay question (200-300 words):',
        subTasks: [
          { label: 'Topic', task: `"The House of Lords should be abolished or reformed." Discuss arguments for and against, and give your own view.`, solution: 'For abolition/reform: undemocratic, outdated, unrepresentative. Against: expertise, independence, tradition, practical function. Give reasoned personal conclusion.' },
        ],
        hints: ['Consider both democratic principles and practical arguments', 'Use specific examples where possible'],
        solution: 'A good answer presents multiple perspectives before reaching a reasoned conclusion.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Create a comparison table:',
        subTasks: [
          { label: 'a', task: 'Create a table comparing the UK, Norway, and USA political systems.', solution: 'Include: head of state, head of government, legislature structure, voting system, constitution type' },
          { label: 'b', task: 'Which system do you think is most democratic? Explain your reasoning.', solution: 'Consider representation, accountability, voter choice, minority rights - no single "correct" answer' },
        ],
        hints: ['Consider what "democratic" means - there are different interpretations'],
        solution: 'Comparing systems helps understand the strengths and weaknesses of each.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_8_4: TextbookChapter = {
  id: 'engelsk-vg1-8-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '8.4',
  title: 'British Culture and Identity',
  description: 'Explore British culture, traditions and contemporary issues.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden'],
  content: [
    {
      id: 'engelsk-vg1-8-4-intro',
      type: 'text',
      content: `## What Does It Mean to Be British?

British identity is complex and contested, shaped by history, class, region, and diversity. In recent decades, debates about what it means to be British have intensified, influenced by immigration, devolution, and Brexit.

**Learning Objectives:**
- Understand the components of British cultural identity
- Analyze how class, region, and diversity shape British society
- Compare stereotypes with reality
- Reflect on how national identity is constructed and debated

**Components of British Culture:**
- National traditions (monarchy, ceremonies)
- Popular culture (music, TV, literature)
- Social norms (queuing, politeness, irony)
- Sports (football, cricket, rugby)
- Regional identities (English, Scottish, Welsh, Northern Irish)`,
    },
    {
      id: 'engelsk-vg1-8-4-theory-1',
      type: 'definition',
      title: 'Theory 1: Class and Regional Identity',
      content: `**The Class System**
Britain has a historically rigid class system that still influences society:

**Upper Class:**
- Aristocracy (lords, ladies, hereditary titles)
- "Old money" - inherited wealth
- Private schools (confusingly called "public schools"): Eton, Harrow
- Oxford and Cambridge universities
- Distinct accent: "Received Pronunciation" (RP)

**Middle Class:**
- Professionals (doctors, lawyers, teachers)
- Business owners
- Suburban homeowners
- Grammar schools, some private schools
- Regional accents often modified

**Working Class:**
- Manual and service workers
- Council housing (social housing)
- State comprehensive schools
- Strong regional accents
- Traditional industries (mining, factories, docks)

**Class Indicators:**
- Accent is the biggest giveaway
- School and university attended
- Vocabulary choices
- Hobbies and interests
- Newspaper read

**Regional Identities:**
England, Scotland, Wales, and Northern Ireland have distinct cultures:
- Different accents and dialects
- Different attitudes and stereotypes
- Different sports (rugby in Wales, shinty in Scotland)
- Different national symbols and celebrations`,
    },
    {
      id: 'engelsk-vg1-8-4-example-1',
      type: 'text',
      content: `### Example: How Accent Reveals Class

In most countries, accent indicates where you're from. In Britain, accent also indicates social class.

**Received Pronunciation (RP) / "The Queen's English":**
- Associated with upper and upper-middle class
- Learned in private schools
- Used in BBC broadcasting (historically)
- About 3% of population speaks "pure" RP

**Regional Working-Class Accents:**
- Cockney (London East End)
- Scouse (Liverpool)
- Geordie (Newcastle)
- Brummie (Birmingham)
- Yorkshire, Manchester, etc.

**The Accent Prejudice:**
Studies show:
- RP speakers perceived as more intelligent, competent
- Regional accents perceived as friendlier but less professional
- Accent discrimination in hiring documented

**Changing Attitudes:**
- More regional accents on TV and radio
- "Estuary English" (between RP and Cockney) becoming common
- Scottish and Welsh accents gaining prestige
- Young people mixing accents

**Cultural Example:**
In the film "My Fair Lady" (1964), Professor Higgins transforms Eliza Doolittle from a Cockney flower seller into a "lady" simply by changing her accent - showing how central accent is to British class perception.`,
    },
    {
      id: 'engelsk-vg1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze the British class system:',
        subTasks: [
          { label: 'a', task: 'What are some "markers" or indicators of social class in Britain?', solution: 'Accent, education, vocabulary, hobbies, newspaper choice, housing' },
          { label: 'b', task: 'How does this compare to Norway? Is class less visible in Norwegian society?', solution: 'Norway has less obvious class markers, more social mobility, less accent prejudice' },
          { label: 'c', task: 'Why might accent be such an important class marker?', solution: `It's hard to change, reveals education and background, carries unconscious associations` },
        ],
        solution: 'Class remains an important but often unspoken aspect of British society.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Research and compare regional identities:',
        subTasks: [
          { label: 'a', task: 'What stereotypes exist about people from different parts of the UK (Scotland, Wales, Northern England, London)?', solution: 'Consider perceived friendliness, work ethic, humor, attitudes' },
          { label: 'b', task: 'How accurate are these stereotypes?', solution: 'Stereotypes are generalizations - some basis but always oversimplified' },
        ],
        solution: 'Regional stereotypes reveal how British people perceive each other.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-4-theory-2',
      type: 'definition',
      title: 'Theory 2: Multicultural Britain',
      content: `**Immigration History**
Britain has always been shaped by immigration, but modern diversity largely began after WWII:

**1948-1971: Commonwealth Immigration**
- The Windrush generation: Caribbean migrants invited to rebuild post-war Britain
- South Asian immigration: India, Pakistan, Bangladesh
- Filling labor shortages in NHS, transport, factories

**1973-2020: European Immigration**
- EU membership allowed free movement
- Polish community grew dramatically after 2004
- Eastern European workers in agriculture, construction, services

**Current Demographics:**
- About 14% of UK residents born abroad
- London: 37% born abroad, over 300 languages spoken
- Other diverse cities: Birmingham, Manchester, Leicester, Bradford

**Debates About Multiculturalism:**
**Pro-multiculturalism arguments:**
- Diversity enriches culture
- Economic benefits from skilled workers
- Historical responsibility to former colonies
- Human rights obligations

**Anti-multiculturalism arguments:**
- Concerns about integration
- Pressure on public services
- Cultural change too fast
- Security concerns

**"British Values" Debate:**
Government promoted "fundamental British values":
- Democracy
- Rule of law
- Individual liberty
- Mutual respect and tolerance

Critics ask: Are these uniquely British? Or universal values?`,
    },
    {
      id: 'engelsk-vg1-8-4-example-2',
      type: 'text',
      content: `### Example: The Windrush Generation

**The Story:**
In 1948, the ship HMT Empire Windrush arrived at Tilbury Docks carrying 492 passengers from Jamaica. They were the first of hundreds of thousands invited to come to Britain to help rebuild after WWII.

**Why They Came:**
- Britain desperately needed workers
- Caribbean people were British subjects (colonies)
- Better economic opportunities
- They saw themselves as coming to the "mother country"

**What They Found:**
- Jobs in hospitals, transport, factories
- But also racism: "No Blacks, No Irish, No Dogs" signs in lodging houses
- Teddy Boy attacks and Notting Hill riots (1958)
- Gradual acceptance but continued discrimination

**The Windrush Scandal (2018):**
People who had lived legally in Britain for decades were:
- Denied healthcare
- Fired from jobs
- Detained by immigration
- Some deported to countries they hadn't seen since childhood

Why? The Home Office destroyed landing cards; people couldn't prove their status.

**Legacy:**
The Windrush generation and their descendants transformed British culture:
- Music: ska, reggae, jungle, grime
- Food: Caribbean cuisine now mainstream
- Language: Jamaican Patois influences British slang
- Sport: countless athletes
- The Notting Hill Carnival: Europe's largest street festival

**Key Lesson:**
Immigration involves both opportunity and discrimination, contribution and struggle.`,
    },
    {
      id: 'engelsk-vg1-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze the Windrush generation experience:',
        subTasks: [
          { label: 'a', task: 'Why did Caribbean people come to Britain after WWII?', solution: 'Invited to fill labor shortages; British subjects; economic opportunity; saw Britain as "mother country"' },
          { label: 'b', task: 'What challenges did they face?', solution: 'Racism, housing discrimination, violence, discrimination while contributing to British society' },
          { label: 'c', task: 'How have Caribbean Britons contributed to British culture?', solution: 'Music (reggae, grime), food, sport, NHS, language, Notting Hill Carnival' },
        ],
        solution: 'Immigration stories involve both contribution and struggle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare approaches to diversity:',
        subTasks: [
          { label: 'a', task: 'What is the difference between multiculturalism, integration, and assimilation?', solution: 'Multiculturalism: groups maintain distinct identities. Integration: adopt host culture while keeping heritage. Assimilation: fully adopt host culture, abandon heritage.' },
          { label: 'b', task: 'Which approach does Norway take? Which does Britain take?', solution: 'Both have elements of each; debate ongoing in both countries' },
        ],
        solution: 'There is no perfect approach - all have trade-offs.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-4-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **British vs. English:** "British" includes English, Scottish, Welsh, and Northern Irish. These are distinct identities, and using them interchangeably can offend.

2. **Class System:** Britain has a historically rigid class system visible in accent, education, and social markers. This is changing but still influential.

3. **Regional Diversity:** Different regions have distinct identities, accents, and cultures. Stereotypes exist but oversimplify reality.

4. **Multicultural Britain:** Post-war immigration transformed Britain. About 14% of residents were born abroad, and London is one of the world's most diverse cities.

5. **Identity Debates:** Questions about "Britishness," immigration, and multiculturalism remain contested, as shown in Brexit debates.

**Key Vocabulary:**
- Received Pronunciation (RP) - the prestige accent associated with upper classes
- Windrush generation - Caribbean immigrants who came to Britain from 1948
- Multiculturalism - policy of different cultures coexisting while maintaining distinct identities
- British values - government-promoted values (democracy, rule of law, liberty, tolerance)
- Devolution - separate parliaments for Scotland, Wales, and Northern Ireland`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Critical thinking essay (250-350 words):',
        subTasks: [
          { label: 'Topic', task: `"Stereotypes about Britain and the British are mostly harmless fun." Do you agree? Discuss with examples.`, solution: 'Consider: positive stereotypes (tea, politeness), negative ones, how they affect people, accuracy, whether they matter' },
        ],
        hints: ['Use specific examples of British stereotypes', 'Consider perspectives of different groups', 'Distinguish harmless fun from harmful prejudice'],
        solution: 'A good answer distinguishes between different types of stereotypes and their effects.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Comparative analysis:',
        subTasks: [
          { label: 'a', task: 'Create a comparison between British and Norwegian national identity, considering: symbols, values, attitudes to immigration, regional differences.', solution: 'Table or essay format; identify similarities and differences' },
          { label: 'b', task: 'What can each country learn from the other about handling diversity?', solution: 'Consider strengths and weaknesses of each approach; avoid suggesting one is simply "better"' },
        ],
        hints: ['Be specific and use examples', 'Avoid oversimplifying either country'],
        solution: 'Comparison helps understand both British and Norwegian society better.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 9: The United States
// ============================================================================

export const CHAPTER_ENGELSK_VG1_9_1: TextbookChapter = {
  id: 'engelsk-vg1-9-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '9.1',
  title: 'American History Overview',
  description: 'Explore key events and periods in American history.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden ut fra historiske sammenhenger'],
  content: [
    {
      id: 'engelsk-vg1-9-1-intro',
      type: 'text',
      content: `## The American Story

American history spans from indigenous peoples through colonization, revolution, expansion, civil war, and emergence as a global superpower. It is a story of ideals and contradictions, of freedom proclaimed while millions were enslaved, of democracy expanded while others were excluded.

**Learning Objectives:**
- Understand key periods and events in American history
- Analyze contradictions between American ideals and practices
- Connect historical events to contemporary issues
- Compare American historical development with other nations

**Key Periods:**
- Indigenous America (before 1492)
- Colonial Era (1607-1776)
- Revolution and Early Republic (1776-1860)
- Civil War and Reconstruction (1860-1877)
- Industrialization and Immigration (1877-1914)
- World Wars (1914-1945)
- Cold War (1945-1991)
- Modern Era (1991-present)`,
    },
    {
      id: 'engelsk-vg1-9-1-theory-1',
      type: 'definition',
      title: 'Theory 1: From Colony to Nation',
      content: `**Indigenous America (Before 1492)**
Before European arrival, millions of Native Americans lived in diverse societies:
- Eastern Woodlands: Iroquois Confederacy, farming communities
- Plains: nomadic buffalo hunters (after horses arrived)
- Southwest: Pueblo peoples, cliff dwellings, irrigation
- Pacific Northwest: fishing, totem poles, complex social systems

European diseases killed an estimated 90% of the indigenous population - the greatest demographic catastrophe in human history.

**Colonial Era (1607-1776)**
European powers competed for North America:
- **Spain:** Florida, Southwest, California
- **France:** Canada, Mississippi Valley
- **Britain:** Eastern seaboard (13 colonies)
- **Netherlands:** New York (briefly)

British colonies developed different characters:
- **New England:** Puritan religious communities, trade, education
- **Middle Colonies:** Diverse, tolerant, farming, trade
- **Southern Colonies:** Plantation agriculture, slavery

**The American Revolution (1775-1783)**
Why did colonists rebel?
- "No taxation without representation"
- British attempts to control colonial trade
- Enlightenment ideas about liberty and natural rights
- Local elites wanted more power

**Declaration of Independence (1776):**
"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness."`,
    },
    {
      id: 'engelsk-vg1-9-1-example-1',
      type: 'text',
      content: `### Example: The Contradiction of Freedom

**The Founding Fathers and Slavery**

The Declaration of Independence proclaims that "all men are created equal" with rights to "Life, Liberty and the pursuit of Happiness." Yet many who signed it owned slaves.

**Thomas Jefferson:**
- Wrote the Declaration of Independence
- Owned over 600 slaves throughout his life
- Called slavery a "moral and political depravity"
- Yet never freed his slaves (except a few in his will)
- Had children with Sally Hemings, an enslaved woman

**The Constitution (1787):**
- Never uses the word "slave" but protects slavery
- Three-Fifths Compromise: enslaved people counted as 3/5 of a person for representation (giving slave states more power)
- Fugitive Slave Clause: escaped slaves must be returned
- Banned Congress from ending slave trade until 1808

**Why the Contradiction?**
- Southern states wouldn't join without slavery protections
- Many founders believed slavery would die out naturally (it didn't - it expanded)
- Economic interests trumped ideals
- Racism: many didn't truly believe Black people were equal

**Legacy:**
This "original sin" of slavery would tear the nation apart in the Civil War and continues to shape American society today.

**Key Question:**
Should we judge historical figures by the standards of their time or ours? Many people in the 1700s opposed slavery - the founders knew it contradicted their ideals.`,
    },
    {
      id: 'engelsk-vg1-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze the contradiction between American ideals and slavery:',
        subTasks: [
          { label: 'a', task: `Why is the Declaration of Independence's claim that "all men are created equal" contradictory given slavery?`, solution: 'Founders claimed equality while owning slaves and excluding Black people, women, and non-property owners' },
          { label: 'b', task: 'Why did the founders include slavery protections in the Constitution?', solution: 'Southern states demanded it; economic interests; they believed slavery might end naturally' },
          { label: 'c', task: 'How should we view historical figures who proclaimed liberty while owning slaves?', solution: 'Open discussion - consider historical context, their knowledge of contradiction, and lasting consequences' },
        ],
        solution: 'Understanding this contradiction is essential to understanding America.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare American independence with other revolutions:',
        subTasks: [
          { label: 'a', task: 'What were the main reasons American colonists rebelled against Britain?', solution: 'Taxation without representation, trade restrictions, desire for self-governance, Enlightenment ideals' },
          { label: 'b', task: 'How did the American Revolution influence later revolutions (French, Latin American)?', solution: 'Provided model, inspired ideals of liberty and rights, showed colonies could defeat empires' },
        ],
        solution: 'The American Revolution had global significance.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-theory-2',
      type: 'definition',
      title: 'Theory 2: Civil War and Civil Rights',
      content: `**Westward Expansion and the Road to Civil War**
After independence, the US expanded dramatically:
- Louisiana Purchase (1803): doubled the nation's size
- Indian Removal: Native Americans forced west ("Trail of Tears")
- Mexican-American War (1846-48): gained Texas, California, Southwest
- "Manifest Destiny": belief that expansion was divinely ordained

Each expansion raised the question: would new territories allow slavery?

**The Civil War (1861-1865)**
When Abraham Lincoln (Republican, anti-slavery expansion) won the 1860 election, Southern states seceded. The war killed over 620,000 - more Americans than all other wars combined.

**What Was it About?**
Confederate states were explicit: they seceded to preserve slavery. Confederate Vice President Alexander Stephens said their government's "corner-stone rests upon the great truth that the negro is not equal to the white man."

**Reconstruction (1865-1877)**
After the war:
- 13th Amendment: abolished slavery
- 14th Amendment: citizenship and equal protection
- 15th Amendment: voting rights regardless of race
- Black men voted, held office, attended school

But Reconstruction ended in 1877, and white supremacy returned through:
- Jim Crow laws (segregation)
- Voter suppression
- Terrorism (KKK)
- Economic exploitation (sharecropping)

**Civil Rights Movement (1950s-1960s)**
Nearly 100 years later, African Americans fought for the rights promised in Reconstruction:
- Brown v. Board of Education (1954): school segregation unconstitutional
- Montgomery Bus Boycott (1955-56)
- March on Washington (1963): MLK's "I Have a Dream"
- Civil Rights Act (1964): banned discrimination
- Voting Rights Act (1965): protected voting rights`,
    },
    {
      id: 'engelsk-vg1-9-1-example-2',
      type: 'text',
      content: `### Example: The Long Civil Rights Movement

**The Montgomery Bus Boycott (1955-1956)**

**What Happened:**
On December 1, 1955, Rosa Parks refused to give up her bus seat to a white passenger in Montgomery, Alabama. She was arrested.

**The Response:**
Black leaders organized a boycott of Montgomery buses:
- 40,000 Black residents walked, carpooled, or took taxis
- Boycott lasted 381 days
- Economic pressure on bus company and city
- Dr. Martin Luther King Jr. emerged as a leader

**The Obstacles:**
- Boycotters arrested for "illegal carpooling"
- King's house bombed
- Violence and threats
- Economic retaliation (people fired from jobs)

**The Victory:**
The Supreme Court ruled bus segregation unconstitutional. Buses were integrated.

**Key Lessons:**
1. **Organizing:** The boycott wasn't spontaneous - it was planned by the NAACP and local leaders
2. **Economic pressure:** Hitting businesses in the wallet forced change
3. **Nonviolent resistance:** Inspired by Gandhi, movement used moral power
4. **Federal intervention:** Ultimate victory came through courts and federal law
5. **Persistence:** Victory took over a year of sacrifice

**The Broader Movement:**
Montgomery was just the beginning. Sit-ins, Freedom Rides, marches, and voter registration drives continued for years, met with violence and eventually achieving major legislation.

**Unfinished Business:**
Despite legal victories, racial inequality persists in wealth, health, education, criminal justice, and housing. The struggle continues.`,
    },
    {
      id: 'engelsk-vg1-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze the Civil War and its aftermath:',
        subTasks: [
          { label: 'a', task: 'What was the Civil War fundamentally about?', solution: 'Slavery - Southern states seceded to preserve slavery when anti-slavery-expansion Republican won' },
          { label: 'b', task: 'What happened during Reconstruction, and why did it fail?', solution: 'Brief period of Black political participation ended when federal troops withdrew; white supremacy restored through violence and laws' },
          { label: 'c', task: 'Why did it take nearly 100 years after the Civil War for civil rights legislation?', solution: 'White supremacy restored after Reconstruction; lack of political will; terrorism; economic exploitation; required massive movement' },
        ],
        solution: 'The Civil War ended slavery but not racism - that required continued struggle.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyze the Civil Rights Movement:',
        subTasks: [
          { label: 'a', task: 'What tactics did the Civil Rights Movement use?', solution: 'Nonviolent protest, boycotts, sit-ins, marches, legal challenges, voter registration' },
          { label: 'b', task: 'Why was nonviolent resistance effective?', solution: 'Moral power, gained sympathy when met with violence, didn\'t justify retaliation, media coverage' },
        ],
        solution: 'The Civil Rights Movement provides lessons in organizing and social change.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Indigenous America:** Millions of Native Americans lived in diverse societies before Europeans arrived; disease and violence devastated these populations.

2. **Founding Contradiction:** America was founded on ideals of liberty and equality while practicing slavery - a contradiction that shaped its entire history.

3. **Civil War:** The bloodiest American war was fought over slavery. The Union victory ended slavery but not racism.

4. **Reconstruction's Failure:** Brief progress for Black Americans was reversed when white supremacy was restored through violence and Jim Crow laws.

5. **Civil Rights Movement:** Nearly 100 years after the Civil War, mass protest and organizing achieved major legal changes, though the struggle for equality continues.

**Key Vocabulary:**
- Manifest Destiny - belief that American expansion was divinely ordained
- Jim Crow - system of racial segregation laws in the South
- Reconstruction - period after Civil War attempting to rebuild and integrate freed slaves
- Civil disobedience - nonviolent resistance to unjust laws
- Segregation - legal separation of races in public facilities`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-9-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay question (250-350 words):',
        subTasks: [
          { label: 'Topic', task: `"American history is a story of progress toward fulfilling its founding ideals." Do you agree? Discuss with reference to at least two historical periods.`, solution: 'Consider: real progress (ending slavery, civil rights) vs. ongoing inequality; contradictions between ideals and practices; whose perspective matters' },
        ],
        hints: ['Use specific historical evidence', 'Consider multiple perspectives', 'Acknowledge complexity'],
        solution: 'A good answer acknowledges both progress and persistent problems.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Create a timeline and analysis:',
        subTasks: [
          { label: 'a', task: 'Create a timeline of at least 10 key events in American history from 1776 to 1968.', solution: 'Include political, social, and economic events; consider events affecting different groups' },
          { label: 'b', task: 'Identify three events that you think are most important for understanding America today. Explain why.', solution: 'Consider lasting effects on politics, society, economy, and culture' },
          { label: 'c', task: 'How does American history compare to Norwegian history in the same period?', solution: 'Consider independence (1776 vs 1905), civil conflicts, social movements, immigration' },
        ],
        hints: ['Think about cause and effect between events', 'Consider different groups\' experiences'],
        solution: 'Understanding the connections between historical events helps explain the present.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_9_2: TextbookChapter = {
  id: 'engelsk-vg1-9-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '9.2',
  title: 'The American Dream',
  description: 'Examine the concept of the American Dream and its reality.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden'],
  content: [
    {
      id: 'engelsk-vg1-9-2-intro',
      type: 'text',
      content: `## The American Dream

The idea that anyone, regardless of background, can achieve success through hard work is a core American belief. This concept shapes American politics, culture, and self-understanding - but does reality match the ideal?

**Learning Objectives:**
- Understand the origins and evolution of the American Dream
- Analyze data on social mobility and inequality
- Evaluate the American Dream critically from multiple perspectives
- Compare American and Norwegian approaches to opportunity and equality

**The Dream's Promise:**
- Equal opportunity for all
- Upward social mobility
- Freedom to pursue happiness
- Success through merit, not birth`,
    },
    {
      id: 'engelsk-vg1-9-2-theory-1',
      type: 'definition',
      title: 'Theory 1: The Origins and Evolution of the Dream',
      content: `**Where Did the Term Come From?**
The phrase "American Dream" was coined by historian James Truslow Adams in 1931:

"That dream of a land in which life should be better and richer and fuller for everyone, with opportunity for each according to ability or achievement... regardless of the fortuitous circumstances of birth or position."

**The Dream Through History:**

**Colonial Era - Land and Independence:**
- In Europe, land meant status and was hard to get
- In America, land seemed unlimited
- Dream: own land, be independent, pass wealth to children

**19th Century - Westward Expansion:**
- Manifest Destiny: keep moving west for opportunity
- Homestead Act (1862): free land for settlers
- Immigration: "streets paved with gold"
- Reality: Native Americans displaced; harsh conditions

**Early 20th Century - From Farm to Factory:**
- Industrial jobs offered wages
- Immigrants came seeking better life
- Dream: work hard, save, your children will have more

**Post-WWII - The Suburban Dream:**
- GI Bill: education and home loans for veterans
- Rise of the middle class
- Dream: house, car, stable job, college for kids
- Reality: These benefits largely excluded Black Americans

**Today's Dream:**
- College education as key to success
- Homeownership increasingly unaffordable
- Healthcare, childcare, and education costs rising
- Dream increasingly out of reach for many`,
    },
    {
      id: 'engelsk-vg1-9-2-example-1',
      type: 'text',
      content: `### Example: Immigration and the American Dream

**The Statue of Liberty's Promise**
"Give me your tired, your poor, your huddled masses yearning to breathe free..."

**Italian Immigration (1880-1920)**
- About 4 million Italians came to America
- Faced discrimination: called "wops," seen as inferior
- Worked dangerous jobs: mining, construction, factories
- Many lived in poverty

**The Dream in Action:**
Giuseppe Verdi (not his real name) arrived in New York in 1905, age 17:
- Worked in a coal mine in Pennsylvania
- Injured in a mine accident, moved to New York
- Opened a small grocery store
- His son became a teacher
- His granddaughter became a doctor

**The Dream's Timeline:**
The "American Dream" often takes generations:
- First generation: Survival, hard labor, sacrifice
- Second generation: Stability, education, moving up
- Third generation: Professional careers, middle class

**But Not For Everyone:**
- Black Americans faced legal barriers until 1960s
- Asian immigrants banned (1882-1943)
- Mexican workers brought in then deported during crises
- Native Americans stripped of land and citizenship

**Key Question:**
Is the American Dream about individual success, or does it require fair systems?`,
    },
    {
      id: 'engelsk-vg1-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze the evolution of the American Dream:',
        subTasks: [
          { label: 'a', task: 'How has the American Dream changed from the colonial era to today?', solution: 'From land ownership to homeownership to college education; from frontier independence to professional success' },
          { label: 'b', task: 'Why did post-WWII America seem to fulfill the Dream for many white Americans?', solution: 'GI Bill, economic growth, affordable housing, rising wages, strong unions' },
          { label: 'c', task: 'Why were Black Americans largely excluded from the post-war Dream?', solution: 'GI Bill benefits discriminated in practice; housing segregation; job discrimination; unequal schools' },
        ],
        solution: `The Dream's availability has always depended on who you are.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze the immigrant experience:',
        subTasks: [
          { label: 'a', task: 'Why did the "American Dream" often take multiple generations to achieve for immigrant families?', solution: 'First generation faced barriers, worked hard jobs; invested in children\'s education; gradual accumulation of opportunities' },
          { label: 'b', task: 'What barriers did different immigrant groups face?', solution: 'Discrimination, language barriers, legal restrictions, poverty, dangerous work' },
        ],
        solution: 'The Dream is often a multi-generational process, not an individual achievement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-2-theory-2',
      type: 'definition',
      title: 'Theory 2: The Dream Today - Facts and Debates',
      content: `**Social Mobility: The Data**

**The "Great Gatsby Curve":**
Research shows that countries with more inequality have less social mobility. America has both high inequality AND low mobility compared to other wealthy nations.

**Key Statistics (2020s):**
- A child born to parents in the bottom 20% has only an 8% chance of reaching the top 20%
- In Denmark, that chance is 15%
- 40% of Americans born poor stay poor
- Social mobility has declined since the 1940s

**Wealth Inequality:**
- Top 1% own more than bottom 50% combined
- CEO pay: 351x average worker (was 21x in 1965)
- Median household wealth: $121,700 (but median Black household: $17,600)

**Barriers to the Dream Today:**
1. **Education costs:** Average student debt $37,000; college costs tripled since 1980
2. **Healthcare:** Medical bills cause 66% of bankruptcies; tied to employment
3. **Housing:** Home prices risen faster than wages; many cities unaffordable
4. **Wages:** Minimum wage hasn't kept up with productivity or inflation
5. **Jobs:** Gig economy, unstable employment, fewer benefits

**Does the Dream Still Exist?**
- Believers: America still offers more opportunity than most places
- Critics: Structural barriers make hard work insufficient
- Moderates: Dream is achievable for some, but systems need reform`,
    },
    {
      id: 'engelsk-vg1-9-2-example-2',
      type: 'text',
      content: `### Example: Comparing America and Norway

**Two Approaches to Opportunity**

**The American Approach:**
- Low taxes, less government
- Individual responsibility
- Healthcare through employers
- Education requires significant debt
- Safety net is limited
- "Pull yourself up by your bootstraps"

**The Norwegian Approach:**
- Higher taxes, more government
- Collective responsibility
- Universal healthcare
- Free higher education
- Strong safety net
- "We succeed together"

**Social Mobility Comparison:**

| Factor | United States | Norway |
|--------|---------------|--------|
| Bottom to top 20% | 8% | 12% |
| Income inequality (Gini) | 0.39 | 0.27 |
| Healthcare | Tied to job | Universal |
| University cost | ~$100,000+ debt | Free |
| Parental leave | 0 weeks (federal) | 49 weeks |
| Child poverty | 17% | 4% |

**The Paradox:**
America believes more strongly in social mobility, but Norway actually has more of it.

**Why the Difference?**
- Norwegian policies remove barriers (healthcare, education costs)
- American policies assume individuals should overcome barriers
- Norway accepts higher taxes for collective benefits
- America fears government "socialism"

**Key Question:**
Which system better fulfills the promise of opportunity for all?`,
    },
    {
      id: 'engelsk-vg1-9-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze social mobility data:',
        subTasks: [
          { label: 'a', task: 'What does it mean that a child born poor in America has an 8% chance of becoming wealthy, while in Denmark it\'s 15%?', solution: `Despite America's belief in mobility, other countries actually have more; American systems create barriers` },
          { label: 'b', task: 'Why might countries with MORE government programs have HIGHER social mobility?', solution: 'Remove barriers (healthcare costs, education debt), provide safety net for risk-taking, level playing field' },
        ],
        solution: 'Data challenges assumptions about which systems create opportunity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare American and Norwegian approaches:',
        subTasks: [
          { label: 'a', task: 'List three advantages of the American approach (low taxes, individual responsibility).', solution: 'More personal freedom, potentially higher rewards for success, less dependence on government, innovation incentives' },
          { label: 'b', task: 'List three advantages of the Norwegian approach (higher taxes, collective systems).', solution: 'More actual mobility, security allows risk-taking, less stress about healthcare/education, lower inequality' },
          { label: 'c', task: 'Which approach do you think is better? Why?', solution: 'Personal opinion with reasoning - consider trade-offs, values, evidence' },
        ],
        solution: 'Both systems involve trade-offs; values shape which we prefer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-2-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Definition:** The American Dream is the belief that anyone can achieve success through hard work, regardless of background.

2. **Evolution:** The Dream has changed from land ownership to homeownership to college education, but the core idea of opportunity remains.

3. **Reality Gap:** Data shows America has less social mobility than many European countries, despite stronger belief in mobility.

4. **Inequality:** Wealth inequality has increased dramatically; barriers to success have grown (education costs, healthcare, housing).

5. **Comparison:** Norwegian-style systems with stronger safety nets actually produce more social mobility than the American approach.

6. **Debate:** The American Dream remains powerful as an ideal, but whether it reflects reality is contested.

**Key Vocabulary:**
- Social mobility - ability to move between economic classes
- Income inequality - gap between rich and poor
- The Great Gatsby Curve - relationship between inequality and low mobility
- Meritocracy - system where success is based on ability and effort
- Safety net - government programs supporting those in need`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-9-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay question (250-350 words):',
        subTasks: [
          { label: 'Topic', task: `"The American Dream is a myth that benefits the wealthy." Discuss this statement, presenting arguments for and against.`, solution: 'For: Data shows low mobility, inequality; Dream discourages systemic change, blames poor. Against: Dream inspires, America still has opportunity, many success stories. Conclude with your view.' },
        ],
        hints: ['Use data and examples', 'Consider who benefits from belief in the Dream', 'Distinguish between the ideal and reality'],
        solution: 'A good answer engages seriously with evidence while acknowledging complexity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Creative and analytical project:',
        subTasks: [
          { label: 'a', task: 'Find an American song, film, or story about the American Dream (e.g., "The Great Gatsby," "Born to Run," a rags-to-riches movie).', solution: 'Choose something you can analyze meaningfully' },
          { label: 'b', task: 'Analyze: Does this work celebrate the Dream, critique it, or both?', solution: 'Look at how success is portrayed, what barriers exist, what the ending suggests' },
          { label: 'c', task: 'Write a 200-word analysis connecting the work to what you\'ve learned about the Dream\'s reality.', solution: 'Connect artistic portrayal to historical/statistical reality' },
        ],
        hints: ['The Great Gatsby is a famous critique of the Dream', 'Many immigrant stories both celebrate and complicate the Dream'],
        solution: 'American culture constantly reflects on and debates the American Dream.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_9_3: TextbookChapter = {
  id: 'engelsk-vg1-9-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '9.3',
  title: 'American Politics and Society',
  description: 'Understand the US political system and contemporary issues.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden'],
  content: [
    {
      id: 'engelsk-vg1-9-3-intro',
      type: 'text',
      content: `## The American Political System

The United States has a federal system with separation of powers, designed by the founders to prevent tyranny. Today, this system faces challenges from polarization, money in politics, and debates about its democratic functioning.

**Learning Objectives:**
- Understand the structure of American government
- Analyze the two-party system and political polarization
- Compare American and Norwegian political systems
- Evaluate strengths and weaknesses of American democracy

**Key Features:**
- Federal system: power shared between national and state governments
- Separation of powers: legislative, executive, judicial
- Checks and balances: each branch can limit others
- Two-party system: Democrats and Republicans`,
    },
    {
      id: 'engelsk-vg1-9-3-theory-1',
      type: 'definition',
      title: 'Theory 1: Structure of Government',
      content: `**The Constitution (1787)**
The oldest written national constitution still in use. Key principles:
- **Federalism:** Power divided between national and state governments
- **Separation of powers:** Three branches with distinct roles
- **Checks and balances:** Each branch can limit the others
- **Limited government:** Bill of Rights protects individual freedoms

**Executive Branch - The President:**
- Head of state AND head of government (unlike UK)
- Commander-in-chief of military
- Signs or vetoes laws
- Appoints judges, cabinet, ambassadors
- 4-year terms, maximum 2 terms (22nd Amendment)
- Powers have expanded dramatically over time

**Legislative Branch - Congress:**

*Senate (Upper House):*
- 100 members: 2 per state regardless of population
- 6-year terms (1/3 elected every 2 years)
- Confirms appointments, ratifies treaties
- Equal representation benefits small states

*House of Representatives (Lower House):*
- 435 members: distributed by population
- 2-year terms
- Originates spending bills
- Majority needed to pass laws

**Judicial Branch - Federal Courts:**
- Supreme Court: 9 justices, lifetime appointments
- Interprets Constitution, can declare laws unconstitutional
- Lower federal courts handle cases involving federal law
- Judges appointed by President, confirmed by Senate`,
    },
    {
      id: 'engelsk-vg1-9-3-example-1',
      type: 'text',
      content: `### Example: How a Law is Made (and Why It's Hard)

**The Journey of a Bill**

Let's trace a hypothetical climate bill:

**Step 1: Introduction**
A member of Congress introduces the bill. In 2023-24, over 10,000 bills were introduced; fewer than 100 became law.

**Step 2: Committee**
The bill goes to a committee (e.g., Energy and Commerce). Most bills die here. The committee can:
- Hold hearings
- Mark up (amend) the bill
- Vote to send it forward - or not

**Step 3: Floor Vote - House**
If the committee approves, the full House debates and votes. Needs simple majority (218 votes).

**Step 4: Senate**
The bill goes to the Senate. But here's the catch: the filibuster.
- A Senator can talk indefinitely to block a vote
- 60 votes needed to end debate (cloture)
- In practice, this means most significant legislation needs 60 votes, not 51

**Step 5: Conference**
If House and Senate pass different versions, a conference committee reconciles them. Both chambers vote again.

**Step 6: President**
President can sign (law!) or veto. Congress can override veto with 2/3 vote in both chambers (rare).

**Why It's So Hard:**
- House and Senate must agree
- Filibuster requires 60 Senate votes
- President can veto
- Courts can strike down laws
- States can resist implementation

**Result:**
American government is designed to make change DIFFICULT. This prevents tyranny but also prevents action on problems.`,
    },
    {
      id: 'engelsk-vg1-9-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explain the structure of American government:',
        subTasks: [
          { label: 'a', task: 'What is "separation of powers" and why did the founders want it?', solution: 'Different branches (executive, legislative, judicial) have different powers; prevents concentration of power/tyranny' },
          { label: 'b', task: 'How do "checks and balances" work? Give two examples.', solution: 'President vetoes laws, Congress overrides; Senate confirms appointments; Courts strike down laws; Congress impeaches President' },
          { label: 'c', task: 'Why does the Senate give equal representation to all states regardless of population?', solution: 'Great Compromise at Constitutional Convention; protects small states; but gives Wyoming (600,000) same power as California (40 million)' },
        ],
        solution: 'Understanding structure helps explain why American government works the way it does.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze why passing laws is difficult in America:',
        subTasks: [
          { label: 'a', task: 'What is the filibuster and how does it affect legislation?', solution: `Senators can talk indefinitely to block votes; in practice requires 60 votes (not 51) to pass most legislation` },
          { label: 'b', task: 'Is making change difficult a strength or weakness of the American system?', solution: 'Strength: prevents hasty/extreme action, protects minorities. Weakness: prevents addressing problems, favors status quo' },
        ],
        solution: 'The difficulty of passing laws is a deliberate feature, not a bug - but opinions differ on whether this is good.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-3-theory-2',
      type: 'definition',
      title: 'Theory 2: Political Parties and Polarization',
      content: `**The Two-Party System**

Unlike Norway's multi-party system, America has two dominant parties:

**Democrats (Center-left to left):**
- Support government programs (healthcare, education, environment)
- Generally favor gun control, abortion rights, immigration paths
- Base: cities, minorities, educated voters, young people
- Symbols: donkey, blue color

**Republicans (Center-right to right):**
- Support lower taxes, less regulation, traditional values
- Generally favor gun rights, abortion restrictions, immigration limits
- Base: rural areas, white voters, religious conservatives, older voters
- Symbols: elephant, red color

**Why Only Two Parties?**
- Winner-take-all elections: only first place matters
- Electoral College: third parties can't win states
- Ballot access laws favor major parties
- Media attention focuses on two parties

**Political Polarization**
Americans are more divided than in decades:

**Evidence:**
- In 1994, 16% had "very unfavorable" view of other party; now 60%+
- Mixed marriages (Democrat + Republican) have declined
- People increasingly live near like-minded others
- Different media sources (Fox News vs. MSNBC)

**Causes:**
- Social media creates echo chambers
- Geographic sorting (liberals in cities, conservatives in rural)
- Primaries favor extreme candidates
- Cultural issues (guns, abortion) are hard to compromise on
- Loss of local news and shared information`,
    },
    {
      id: 'engelsk-vg1-9-3-example-2',
      type: 'text',
      content: `### Example: The Electoral College - Democratic or Not?

**How It Works:**
Americans don't directly elect the President. They vote for "electors" who then vote for President.

- Each state gets electors equal to its Congressional representation (Senators + Representatives)
- Most states: winner of state popular vote gets ALL electors
- Need 270 of 538 electoral votes to win

**The Problem:**
A candidate can win the Electoral College while losing the national popular vote.

**This Has Happened:**
- 2000: George W. Bush won with 271 electoral votes despite Al Gore winning 500,000 more votes nationally
- 2016: Donald Trump won with 304 electoral votes despite Hillary Clinton winning 2.9 million more votes nationally

**Arguments FOR the Electoral College:**
- Protects small states' influence
- Prevents regional candidates
- Forces candidates to build broad coalitions
- Tradition, founders' wisdom

**Arguments AGAINST:**
- Undemocratic - loser of popular vote can win
- Focuses campaigns on "swing states" only
- Small states already protected by Senate
- Most founders didn't anticipate current system

**Campaign Reality:**
In 2020, Trump and Biden made 96% of their campaign stops in just 12 states. California (55 electoral votes, reliably Democratic) got zero visits. Wyoming (3 electoral votes, reliably Republican) got zero visits.

**Key Question:**
Should the person with the most votes always become President?`,
    },
    {
      id: 'engelsk-vg1-9-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze the Electoral College:',
        subTasks: [
          { label: 'a', task: 'How can a candidate win the presidency while losing the popular vote?', solution: 'Win narrowly in enough states to get 270 electoral votes while losing by large margins in other states' },
          { label: 'b', task: 'What are the strongest arguments for and against the Electoral College?', solution: 'For: protects small states, prevents regional candidates. Against: undemocratic, ignores most states, loser can win' },
          { label: 'c', task: 'How does this compare to how Norway chooses its government?', solution: 'Norway uses proportional representation; every vote counts equally; government reflects popular vote share' },
        ],
        solution: 'The Electoral College creates unique dynamics in American democracy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyze political polarization:',
        subTasks: [
          { label: 'a', task: 'What evidence suggests America is more polarized than before?', solution: 'Rising negative views of other party, declining mixed marriages, geographic sorting, different media consumption' },
          { label: 'b', task: 'What factors contribute to polarization?', solution: 'Social media echo chambers, geographic sorting, primary system, cultural issues, loss of shared information sources' },
        ],
        solution: 'Understanding polarization helps interpret American news and politics.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-3-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Federal System:** Power is divided between national government and 50 state governments, each with significant authority.

2. **Separation of Powers:** Three branches (executive, legislative, judicial) check and balance each other, making change deliberately difficult.

3. **Two-Party System:** Winner-take-all elections produce two dominant parties, unlike Norway's multi-party system.

4. **Electoral College:** Presidents are chosen by electoral votes, not popular vote, which can produce results where the popular vote loser wins.

5. **Polarization:** Americans are increasingly divided by party, geography, media consumption, and cultural issues.

**Key Vocabulary:**
- Federalism - division of power between national and state governments
- Checks and balances - system where branches limit each other's power
- Electoral College - system of electors who formally choose the President
- Filibuster - tactic allowing Senators to block legislation by extended debate
- Swing states - states where either party might win, receiving most campaign attention`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-9-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Comparative essay (250-350 words):',
        subTasks: [
          { label: 'Topic', task: 'Compare the American and Norwegian political systems. Which do you think is more democratic? Consider: representation, voting systems, party systems, and who gets power.', solution: 'Compare: Electoral College vs proportional representation; two-party vs multi-party; federal vs unitary; consider trade-offs in each system' },
        ],
        hints: ['Define what "democratic" means to you', 'Use specific comparisons', 'Acknowledge trade-offs in each system'],
        solution: 'A good answer considers multiple dimensions of democracy and acknowledges that different systems have different strengths.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Current events analysis:',
        subTasks: [
          { label: 'a', task: 'Find a recent news article about American politics (election, legislation, Supreme Court decision, etc.).', solution: 'Choose something significant and recent' },
          { label: 'b', task: 'Summarize the key facts in 100 words.', solution: 'Who, what, when, where, why' },
          { label: 'c', task: 'Using what you\'ve learned about the American political system, explain why this is happening or why it matters.', solution: 'Connect to systemic factors: Electoral College, polarization, checks and balances, etc.' },
          { label: 'd', task: 'How might this same issue be handled differently in Norway?', solution: 'Consider different political systems and cultures' },
        ],
        hints: ['Use reliable news sources', 'Look for how structure shapes events'],
        solution: 'Connecting current events to systemic knowledge deepens understanding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_9_4: TextbookChapter = {
  id: 'engelsk-vg1-9-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '9.4',
  title: 'American Culture and Diversity',
  description: 'Explore American culture, diversity and contemporary issues.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden'],
  content: [
    {
      id: 'engelsk-vg1-9-4-intro',
      type: 'text',
      content: `## E Pluribus Unum - From Many, One

America's national motto reflects its diversity - but also ongoing tensions about what it means to be American. The United States has always been shaped by immigration and by debates about who belongs.

**Learning Objectives:**
- Understand the composition of American diversity
- Analyze debates about immigration and national identity
- Evaluate different models of handling diversity (melting pot vs. salad bowl)
- Compare American and Norwegian approaches to diversity

**Key Demographics (2023):**
- White: ~58% (non-Hispanic)
- Hispanic/Latino: ~19%
- Black/African American: ~13%
- Asian: ~6%
- Two or more races: ~3%
- Native American: ~1%`,
    },
    {
      id: 'engelsk-vg1-9-4-theory-1',
      type: 'definition',
      title: 'Theory 1: A Nation of Immigrants?',
      content: `**Who is American?**
America is often called "a nation of immigrants" - but this is complicated.

**Indigenous Peoples:**
- Were here first, for thousands of years
- Not immigrants - their land was taken
- About 5.2 million today (1.6% of population)
- 574 federally recognized tribes

**Enslaved Africans:**
- Brought against their will (not immigrants)
- 10-12 million brought to the Americas
- About 388,000 to what became the US
- Ancestors of most Black Americans today

**Colonial Settlers:**
- English, Dutch, German, Scottish-Irish
- Came voluntarily seeking opportunity, religious freedom
- Became "original" Americans, established English dominance

**Waves of Immigration:**

*1820-1880: Northern/Western Europe*
- Irish (famine), Germans, Scandinavians
- Initially seen as "different" but eventually assimilated

*1880-1920: Southern/Eastern Europe*
- Italians, Poles, Jews, Greeks
- Faced discrimination as "not white enough"
- Immigration restricted in 1924 based on national origin

*1965-Present: Global Immigration*
- 1965 law removed national quotas
- Latin America (especially Mexico)
- Asia (China, India, Philippines, Vietnam)
- Africa, Caribbean, Middle East

**Current Immigration:**
- About 45 million foreign-born (13.7% of population)
- Plus about 11 million undocumented immigrants
- Immigration is the main source of population growth`,
    },
    {
      id: 'engelsk-vg1-9-4-example-1',
      type: 'text',
      content: `### Example: The Changing Definition of "White"

One of the most striking aspects of American diversity is how the definition of "white" has changed over time.

**The 19th Century:**
When Irish immigrants arrived fleeing famine in the 1840s-50s, they were not considered "white" by many Americans:
- "No Irish Need Apply" signs in job listings
- Called "white negroes" by some
- Discriminated against in housing and employment

**The Early 20th Century:**
Italians, Poles, Jews, and others from Southern/Eastern Europe faced similar treatment:
- Seen as racially inferior
- 1924 Immigration Act designed to exclude them
- KKK targeted them alongside Black Americans

**"Becoming White":**
Over generations, these groups were accepted as "white":
- Economic success
- Moving to suburbs
- Intermarriage with earlier immigrant groups
- Being included in government programs (GI Bill)
- Distinguishing themselves from Black Americans

**Why It Matters:**
- "Race" is a social construction, not biological reality
- Who is included in the majority group can change
- Today's "outsiders" may become tomorrow's "insiders"
- But this process has not worked the same way for all groups

**Current Debates:**
- Are Hispanic/Latino Americans "white"? (Census allows identifying as both)
- Will they follow the Irish/Italian path to "whiteness"?
- Or will racial categories persist?

**Key Insight:**
American diversity is not fixed - categories shift over time based on politics, economics, and culture.`,
    },
    {
      id: 'engelsk-vg1-9-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze American immigration history:',
        subTasks: [
          { label: 'a', task: 'Why is it complicated to call America "a nation of immigrants"?', solution: 'Indigenous peoples were here first; enslaved Africans were brought against their will; these groups didn\'t "immigrate"' },
          { label: 'b', task: 'How did different immigrant groups experience America differently?', solution: 'Earlier arrivals had more power; some faced more discrimination; legal status varied; "whiteness" expanded to include some groups' },
          { label: 'c', task: 'What does the changing definition of "white" tell us about race in America?', solution: 'Race is socially constructed; categories shift; inclusion is political; not all groups follow same path' },
        ],
        solution: 'American diversity has complex historical roots.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare immigration then and now:',
        subTasks: [
          { label: 'a', task: 'What do 19th-century Irish immigrants and 21st-century Mexican immigrants have in common?', solution: 'Faced discrimination, filled labor needs, seen as outsiders, built communities, contributed to economy' },
          { label: 'b', task: 'What is different about their situations?', solution: 'Legal context different, language barriers, proximity to home country, racial categorization' },
        ],
        solution: 'Historical patterns often repeat, but context matters.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-4-theory-2',
      type: 'definition',
      title: 'Theory 2: Models of Diversity',
      content: `**Melting Pot**
The idea that immigrants should assimilate into a unified American culture.

*Characteristics:*
- English language dominance
- Shared "American values" (individualism, hard work)
- Cultural differences fade over generations
- National identity trumps ethnic identity

*In Practice:*
- Immigrants often lost languages within 2-3 generations
- European immigrants assimilated into "white" American culture
- Pressure to conform, fit in
- Success = becoming "American"

**Salad Bowl / Cultural Mosaic**
The idea that groups can maintain distinct identities while contributing to a diverse whole.

*Characteristics:*
- Multilingualism valued
- Cultural heritage preserved
- Hyphenated identities (Mexican-American, Chinese-American)
- Diversity as strength

*In Practice:*
- Ethnic neighborhoods, festivals, media
- Bilingual education debates
- Cultural foods, music, traditions maintained
- Identity politics based on group membership

**Current Reality:**
America is somewhere between these models:
- Second-generation immigrants usually speak English
- But ethnic identities remain strong
- Some assimilation occurs, but not complete absorption
- Different groups have different experiences`,
    },
    {
      id: 'engelsk-vg1-9-4-example-2',
      type: 'text',
      content: `### Example: American Culture - Made by Many

**Food**
"American food" is itself diverse and borrowed:
- Hot dogs and hamburgers: German origin
- Pizza: Italian (but American style)
- Tacos: Mexican (but Tex-Mex is American)
- Chinese American food: invented in America
- Soul food: African American traditions
- Apple pie: actually English origin

**Music**
America's greatest cultural contributions are from diversity:
- Jazz: African American, roots in blues and African music
- Rock and Roll: African American origins, adopted by white artists
- Hip Hop: African American and Latino urban culture
- Country: Scottish-Irish folk + African American blues
- Salsa: Cuban and Puerto Rican in New York

**Language**
American English is filled with borrowed words:
- Spanish: ranch, canyon, tornado, plaza
- German: kindergarten, deli, pretzel
- Yiddish: bagel, chutzpah, schmuck
- Italian: pizza, cappuccino, paparazzi
- Japanese: karaoke, emoji, tsunami

**Pop Culture**
American entertainment dominates globally:
- Hollywood films feature diverse casts
- Music genres from Hip Hop to K-pop influences
- Sports: basketball invented in US, now global
- Fashion influences from every culture

**Key Point:**
What we think of as "American culture" is really the product of many cultures meeting, mixing, and creating something new. This is America's greatest cultural strength.`,
    },
    {
      id: 'engelsk-vg1-9-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare melting pot and salad bowl models:',
        subTasks: [
          { label: 'a', task: 'What are the advantages of the "melting pot" approach?', solution: 'Shared identity, easier communication, reduces conflict, builds national unity' },
          { label: 'b', task: 'What are the advantages of the "salad bowl" approach?', solution: 'Preserves heritage, respects difference, enriches culture, avoids forced assimilation' },
          { label: 'c', task: 'Which model does Norway follow more closely?', solution: 'Elements of both; official integration policy but with respect for diversity; ongoing debate' },
        ],
        solution: 'Both models have strengths; most societies combine elements of each.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyze American cultural contributions:',
        subTasks: [
          { label: 'a', task: 'Choose one genre of American music (jazz, hip hop, rock, country). How does it reflect American diversity?', solution: 'Most genres have roots in multiple cultures meeting and mixing; reflect immigrant and African American experiences' },
          { label: 'b', task: 'Why has American culture (music, film, food) been so influential globally?', solution: 'Diversity creates innovation; entertainment industry power; English language; economic/political influence' },
        ],
        solution: 'American cultural influence is built on diversity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-4-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Complex History:** America's diversity comes from Indigenous peoples, enslaved Africans, and successive waves of immigrants - each with different experiences.

2. **Changing Categories:** Racial categories like "white" have changed over time; who is considered an outsider or insider shifts based on politics and economics.

3. **Melting Pot vs. Salad Bowl:** Two competing models for handling diversity - assimilation into unified culture vs. maintaining distinct identities within a diverse whole.

4. **Cultural Mixing:** American culture itself is the product of many cultures meeting and mixing - music, food, language all show this fusion.

5. **Ongoing Tensions:** Debates about immigration, language, and identity continue; diversity is both America's strength and source of conflict.

**Key Vocabulary:**
- Melting pot - model where immigrants assimilate into unified culture
- Salad bowl/Cultural mosaic - model where groups maintain distinct identities
- Hyphenated identity - e.g., Mexican-American, combining ethnic and national identity
- Assimilation - process of adopting dominant culture
- Multiculturalism - policy of valuing and preserving cultural diversity`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-9-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay question (250-350 words):',
        subTasks: [
          { label: 'Topic', task: `"Diversity is America's greatest strength." Discuss this statement, considering both the benefits and challenges of American diversity.`, solution: 'Benefits: cultural innovation, economic growth, global influence. Challenges: conflict, discrimination, communication. Consider historical evidence and current debates.' },
        ],
        hints: ['Use specific examples from music, food, immigration history', 'Consider different perspectives', 'Acknowledge both strengths and challenges'],
        solution: 'A good answer presents a nuanced view with evidence for both benefits and challenges.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-9-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Comparative analysis:',
        subTasks: [
          { label: 'a', task: 'Create a table comparing diversity in the United States and Norway, including: demographics, immigration history, integration policies, cultural attitudes.', solution: 'Consider size of immigrant population, historical patterns, official policies, public debates' },
          { label: 'b', task: 'What can each country learn from the other about handling diversity?', solution: 'US: stronger safety net might help integration. Norway: embracing diversity as cultural strength, avoiding assimilation pressure.' },
          { label: 'c', task: 'What challenges do both countries face regarding diversity?', solution: 'Discrimination, integration of new arrivals, maintaining social cohesion, political polarization around immigration' },
        ],
        hints: ['Use specific facts where possible', 'Avoid stereotyping either country'],
        solution: 'Comparison helps understand diversity challenges and solutions in different contexts.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 10: Other English-speaking Countries
// ============================================================================

export const CHAPTER_ENGELSK_VG1_10_1: TextbookChapter = {
  id: 'engelsk-vg1-10-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '10.1',
  title: 'Australia and New Zealand',
  description: 'Explore society, culture and history of Australia and New Zealand.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden'],
  content: [
    {
      id: 'engelsk-vg1-10-1-intro',
      type: 'text',
      content: `## The Land Down Under

Australia and New Zealand share British colonial heritage but have developed distinct national identities. Both are modern, multicultural democracies grappling with their colonial past and relationship with indigenous peoples.

**Learning Objectives:**
- Understand the history and culture of Australia and New Zealand
- Compare approaches to indigenous rights and reconciliation
- Analyze contemporary issues in both countries
- Compare with Norway's relationship with the Sámi

**Australia Facts:**
- Population: ~26 million
- Indigenous Australians: 65,000+ years of history
- British colony from 1788 (originally as penal colony)
- Federation in 1901

**New Zealand Facts:**
- Population: ~5 million
- Māori arrived ~1250-1300 AD
- British colony from 1840 (Treaty of Waitangi)
- Known for progressive policies`,
    },
    {
      id: 'engelsk-vg1-10-1-theory-1',
      type: 'definition',
      title: 'Theory 1: Australia - History and Society',
      content: `**Indigenous Australia - The World's Oldest Culture**
Aboriginal Australians have lived on the continent for at least 65,000 years - the oldest continuous culture on Earth.

*Before European arrival:*
- Population estimated at 300,000-1 million
- Over 250 language groups
- Complex systems of law, spirituality, and land management
- "Dreamtime" - creation stories connecting people to land

**British Colonization (1788-1901)**
- Australia claimed under "terra nullius" (empty land) - Aboriginal peoples legally invisible
- First colony: convict settlement in Sydney
- Free settlers followed, displacing indigenous peoples
- Violence, disease, and dispossession devastated Aboriginal population
- By 1900, Aboriginal population had fallen to about 90,000

**The Stolen Generations (1910-1970)**
Government policy forcibly removed Aboriginal children from families:
- Goal: "breed out" Aboriginal identity through assimilation
- Estimated 10-33% of Aboriginal children taken
- Children placed in institutions or with white families
- Lost language, culture, family connections
- Trauma continues across generations

**Modern Australia**
- Federation in 1901; initially "White Australia Policy" restricted non-European immigration
- 1967 referendum: Aboriginal people counted in census, federal government could make laws for them
- 1992 Mabo decision: overturned terra nullius, recognized native title
- 2008: Prime Minister Kevin Rudd formally apologized for Stolen Generations
- 2023: Voice to Parliament referendum failed (60% voted No)`,
    },
    {
      id: 'engelsk-vg1-10-1-example-1',
      type: 'text',
      content: `### Example: The Uluru Statement from the Heart (2017)

**What Is It?**
In 2017, Aboriginal and Torres Strait Islander leaders gathered at Uluru and issued a statement calling for constitutional recognition.

**Key Requests:**

1. **Voice to Parliament:**
A permanent advisory body where Aboriginal people can have input on laws affecting them. Not a veto, just a voice.

2. **Makarrata Commission:**
A process to supervise agreement-making between governments and Aboriginal peoples.

3. **Truth-telling:**
Acknowledgment of the full history of colonization.

**The Statement's Words:**
"We seek constitutional reforms to empower our people and take a rightful place in our own country. When we have power over our destiny our children will flourish."

**The 2023 Referendum:**
The government held a referendum on the Voice to Parliament:
- 60% voted No
- Only 40% voted Yes
- No state had majority Yes vote

**Why Did It Fail?**
Arguments varied:
- Some thought it went too far (creating division)
- Some thought it didn't go far enough (just symbolic)
- Misinformation spread about what it would do
- Political divisions turned it into a partisan issue

**Significance:**
The failure disappointed many Aboriginal Australians but highlighted ongoing debates about reconciliation and indigenous rights.`,
    },
    {
      id: 'engelsk-vg1-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze Australian indigenous history:',
        subTasks: [
          { label: 'a', task: `What was "terra nullius" and why was it significant?`, solution: 'Legal doctrine that Australia was empty land; justified taking land without treaty; only overturned in 1992' },
          { label: 'b', task: 'What were the Stolen Generations and what was their impact?', solution: 'Aboriginal children forcibly removed from families to assimilate them; caused trauma, loss of culture and language lasting generations' },
          { label: 'c', task: 'Why did the 2023 Voice referendum fail, and what does this tell us about reconciliation?', solution: 'Multiple factors: seen as too much or too little, misinformation, political divisions; shows reconciliation remains contested' },
        ],
        solution: `Australia's relationship with indigenous peoples remains unresolved.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Evaluate the Uluru Statement:',
        subTasks: [
          { label: 'a', task: 'What did the Uluru Statement ask for?', solution: 'Voice to Parliament (advisory body), Makarrata Commission (agreement-making), truth-telling about history' },
          { label: 'b', task: 'Why might some people support a Voice to Parliament? Why might others oppose it?', solution: 'Support: indigenous input on policies affecting them, recognition, practical outcomes. Oppose: constitutional change, creating division, symbolic without power' },
        ],
        solution: 'Indigenous rights involve difficult trade-offs and contested interpretations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-theory-2',
      type: 'definition',
      title: 'Theory 2: New Zealand - A Different Approach',
      content: `**Māori - Tangata Whenua (People of the Land)**
Māori are Polynesian peoples who arrived in New Zealand around 1250-1300 AD:
- Developed distinct culture, language, and social structures
- iwi (tribes) controlled different regions
- Elaborate art, carving, tattoo (tā moko)
- Complex oral traditions and mythology

**The Treaty of Waitangi (1840)**
Unlike Australia, New Zealand was colonized through a treaty:

*What the Treaty Said (debated):*
- Māori ceded governance (sovereignty?) to British Crown
- Māori retained possession of lands, forests, fisheries
- Māori became British subjects with full rights

*The Problem:*
English and Māori versions differ. Māori believed they kept authority (tino rangatiratanga); British believed they gained sovereignty.

**Colonization's Impact**
Despite the treaty:
- Land wars (1845-1872) as settlers took Māori land
- By 1900, Māori held only 10% of New Zealand
- Population fell from ~100,000 to ~42,000
- Language and culture suppressed in schools

**Modern New Zealand - Better But Not Equal**
- Māori language (te reo) is official since 1987
- Waitangi Tribunal (1975) hears treaty claims
- Māori seats in Parliament guaranteed since 1867
- Māori culture integrated into national identity (haka, carving)
- BUT: Māori still overrepresented in poverty, prison, poor health outcomes`,
    },
    {
      id: 'engelsk-vg1-10-1-example-2',
      type: 'text',
      content: `### Example: The Haka - Cultural Pride and Global Recognition

**What Is the Haka?**
The haka is a traditional Māori ceremonial dance or challenge:
- Involves chanting, foot-stamping, chest-beating, and fierce facial expressions
- Originally performed before battle or to honor guests
- Many different haka exist for different purposes

**"Ka Mate" - The Famous Haka**
The most famous haka was composed around 1820 by warrior chief Te Rauparaha:
- Tells story of his escape from enemies
- "Ka mate! Ka mate! Ka ora! Ka ora!" (I die! I die! I live! I live!)
- Performed by New Zealand's All Blacks rugby team since 1905

**Cultural Significance:**
The All Blacks' haka has become globally famous:
- Performed before every international match
- Shows Māori culture as central to New Zealand identity
- Has inspired pride in Māori culture
- Seen by billions worldwide

**Debates:**
- Is using haka for sports appropriate?
- Should non-Māori perform haka?
- Does global popularity help or commercialize Māori culture?

**Comparison with Australia:**
New Zealand has integrated Māori culture into national identity far more than Australia has with Aboriginal culture. The haka example shows how this works - the national sports team performs an indigenous ceremony that has become iconic worldwide.

**Key Question:**
Does this integration represent genuine respect, or does it risk reducing a sacred tradition to entertainment?`,
    },
    {
      id: 'engelsk-vg1-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare Australia and New Zealand approaches:',
        subTasks: [
          { label: 'a', task: 'What was the Treaty of Waitangi and why did it create a different situation than in Australia?', solution: 'Agreement between Māori and British; created legal basis for Māori rights; debated interpretation but provides framework that Australia lacks' },
          { label: 'b', task: 'How is Māori culture more integrated into New Zealand national identity than Aboriginal culture in Australia?', solution: 'Māori language official, haka performed by national team, Māori words/concepts used widely, Māori seats in Parliament, Waitangi Day national holiday' },
          { label: 'c', task: 'Despite better integration, why do Māori still face inequality?', solution: 'Historical land loss, ongoing discrimination, socioeconomic disadvantage, overrepresentation in prison and poverty' },
        ],
        solution: 'Better recognition doesn\'t automatically mean equal outcomes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare with Norway:',
        subTasks: [
          { label: 'a', task: `How does Norway's relationship with the Sámi compare to Australia and New Zealand?`, solution: 'Sámi Parliament, language rights, reindeer herding protected; more like NZ than Australia; but also has history of assimilation policies' },
          { label: 'b', task: 'What can these countries learn from each other about indigenous rights?', solution: 'Consider treaties, language policy, constitutional recognition, self-governance, truth-telling' },
        ],
        solution: 'Comparing approaches helps identify best practices and ongoing challenges.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Australia's Colonial History:** Claimed as "terra nullius," Aboriginal peoples' rights not recognized; Stolen Generations caused lasting trauma; reconciliation remains contested.

2. **New Zealand's Treaty:** Treaty of Waitangi (1840) created legal framework for Māori rights, though interpretation debated; Māori culture more integrated into national identity.

3. **Different Outcomes:** Both countries colonized indigenous peoples, but New Zealand's approach has produced better (though still unequal) outcomes for Māori than Australia for Aboriginal peoples.

4. **Modern Challenges:** Both countries face ongoing debates about reconciliation, constitutional recognition, and addressing inequality affecting indigenous peoples.

5. **Comparison with Norway:** Norway's relationship with the Sámi shares some similarities, especially with New Zealand's approach.

**Key Vocabulary:**
- Terra nullius - "empty land," legal doctrine used to justify taking Aboriginal land
- Stolen Generations - Aboriginal children forcibly removed from families
- Treaty of Waitangi - founding document of New Zealand's relationship with Māori
- Tino rangatiratanga - Māori self-determination or sovereignty
- Reconciliation - process of addressing historical wrongs and building better relationships`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay question (250-350 words):',
        subTasks: [
          { label: 'Topic', task: `"New Zealand's approach to indigenous rights is a model for other countries." Discuss this statement, comparing New Zealand with Australia and considering whether Norway could learn from it.`, solution: 'Consider: Treaty framework, language policy, cultural integration, BUT also ongoing inequality, land loss, debates. Compare with Australia (no treaty) and Norway (Sámi Parliament).' },
        ],
        hints: ['Acknowledge strengths AND limitations of NZ approach', 'Use specific examples', 'Consider what "success" means'],
        solution: 'A good answer evaluates both achievements and ongoing challenges.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research and presentation:',
        subTasks: [
          { label: 'a', task: 'Choose ONE aspect of either Australian or New Zealand society to research: sports culture, wildlife/environment, immigration policy, indigenous culture, or political system.', solution: 'Choose something you find interesting and can research effectively' },
          { label: 'b', task: 'Research your topic using reliable sources.', solution: 'Use academic sources, quality news, and official statistics where possible' },
          { label: 'c', task: 'Create a 3-minute presentation OR 300-word report explaining what you learned and how it compares to Norway.', solution: 'Include key facts, analysis, and comparison' },
        ],
        hints: ['Focus on one topic rather than trying to cover everything', 'Include specific facts and examples'],
        solution: 'Focused research helps understand a country beyond stereotypes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_10_2: TextbookChapter = {
  id: 'engelsk-vg1-10-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '10.2',
  title: 'Canada',
  description: 'Explore Canadian society, culture and bilingualism.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden'],
  content: [
    {
      id: 'engelsk-vg1-10-2-intro',
      type: 'text',
      content: `## True North Strong and Free

Canada is the world's second-largest country by area, known for multiculturalism, bilingualism, and natural beauty. Often seen as America's quieter, more polite neighbor, Canada has its own distinct identity and challenges.

**Learning Objectives:**
- Understand Canadian history, bilingualism, and multiculturalism
- Analyze Canada's relationship with indigenous peoples
- Compare Canadian and American identity
- Compare Canada with Norway

**Key Facts:**
- Population: ~40 million
- Two official languages: English and French
- Constitutional monarchy (British monarch as head of state)
- Known for healthcare, peacekeeping, politeness`,
    },
    {
      id: 'engelsk-vg1-10-2-theory-1',
      type: 'definition',
      title: 'Theory 1: Two Solitudes - Bilingualism in Canada',
      content: `**Historical Background**
Canada has two "founding nations" (besides Indigenous peoples):
- **French:** Colonized from 1534, concentrated in Quebec
- **British:** Took over in 1763 after Seven Years' War

**The Language Divide:**
- English: ~75% of population
- French: ~20% of population
- Quebec: ~80% French-speaking
- Rest of Canada: ~95% English-speaking

**The Quiet Revolution (1960s)**
Quebec underwent rapid modernization:
- Secularization (break from Catholic Church dominance)
- Growth of Quebec nationalism
- French language protection laws
- Movement toward separation from Canada

**Quebec Separatism:**
- 1980 Referendum: 40% voted to leave Canada
- 1995 Referendum: 49.4% voted to leave (extremely close!)
- Independence movement has weakened but not disappeared
- Bloc Québécois remains active in federal politics

**Official Bilingualism (since 1969):**
- Federal government services in both languages
- All products labeled in both languages
- Supreme Court operates bilingually
- But practically, most Canadians are monolingual in their region`,
    },
    {
      id: 'engelsk-vg1-10-2-example-1',
      type: 'text',
      content: `### Example: Bill 101 and Language Politics in Quebec

**What Is Bill 101?**
Quebec's Charter of the French Language (1977) makes French the official language of Quebec:

**Key Provisions:**
- French is the language of government, business, and education
- Businesses with 50+ employees must operate in French
- Outdoor commercial signs must be in French (or French more prominent)
- Immigrant children must attend French schools (with exceptions)

**Why It Exists:**
- Fear of French being overwhelmed by English
- Immigrants historically chose English
- Global English dominance threatened French
- Preserving Quebec's distinct culture

**Controversies:**

*The "Language Police" (Office québécois de la langue française):*
- Enforces language laws
- Inspects businesses for compliance
- Cases like "pastagate" (2013): Italian restaurant told "pasta" must be translated
- Seen as protecting French OR as excessive

*English Rights:*
- English speakers feel marginalized
- Some anglophones left Quebec
- Debates about minority language rights

**Comparison with Norway:**
Norway has two official written forms (Bokmål and Nynorsk) and requires both in education. But this isn't linked to geographic separation or independence movements the way Quebec's French is.

**Key Question:**
How should societies protect minority languages without restricting individual rights?`,
    },
    {
      id: 'engelsk-vg1-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: `Analyze Canada's bilingualism:`,
        subTasks: [
          { label: 'a', task: `Why is language such a sensitive political issue in Canada?`, solution: 'Tied to identity, history of British-French conflict, fear of cultural loss, independence movements' },
          { label: 'b', task: 'What are the arguments for and against laws like Bill 101?', solution: 'For: protect minority language from extinction, preserve culture. Against: restrict individual choice, hurt business, exclude English speakers' },
          { label: 'c', task: `How does Quebec's situation compare to Norway's language policies?`, solution: 'Both protect minority language forms; Norway doesn\'t have geographic separation or independence movement; different historical context' },
        ],
        solution: 'Language policy involves balancing collective rights with individual freedom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Research question:',
        subTasks: [
          { label: 'a', task: 'Why did the 1995 Quebec independence referendum nearly succeed (49.4% Yes)?', solution: 'Consider: cultural identity, language concerns, desire for self-determination, political leadership' },
          { label: 'b', task: 'Why has the independence movement weakened since then?', solution: 'Consider: demographics (immigrants less separatist), economic concerns, generational change, federal accommodations' },
        ],
        solution: 'Independence movements are shaped by both cultural identity and practical concerns.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-2-theory-2',
      type: 'definition',
      title: 'Theory 2: Multiculturalism and Indigenous Rights',
      content: `**Official Multiculturalism (since 1971)**
Canada was the first country to adopt official multiculturalism:

*Key Principles:*
- All citizens can keep their cultural identity
- Government supports cultural diversity
- English and French are official languages, but heritage languages valued
- "Cultural mosaic" not "melting pot"

*In Practice:*
- Higher immigration per capita than most Western countries
- Diverse cities: Toronto 47% foreign-born, Vancouver 40%
- Ethnic media, festivals, communities supported
- Generally positive attitudes toward immigration

**Indigenous Peoples in Canada**
Three recognized groups:
- **First Nations:** 630+ communities, diverse cultures
- **Inuit:** Arctic peoples of northern Canada
- **Métis:** Mixed Indigenous and European heritage

**Residential Schools (1831-1996)**
Canada forcibly sent Indigenous children to boarding schools:
- Goal: "Kill the Indian in the child" - force assimilation
- Children forbidden to speak languages, practice culture
- Physical, sexual, and emotional abuse widespread
- At least 4,100 children died (likely many more)
- Last school closed in 1996

**Truth and Reconciliation (2008-2015)**
TRC investigated residential schools:
- Heard from over 7,000 survivors
- Called residential schools "cultural genocide"
- Issued 94 Calls to Action for reconciliation
- Discovered unmarked graves at former schools (2021+)

**Ongoing Issues:**
- Missing and Murdered Indigenous Women and Girls (MMIWG)
- Clean water: many reserves lack safe drinking water
- Land claims and treaty rights disputes
- Overrepresentation in prisons and child welfare`,
    },
    {
      id: 'engelsk-vg1-10-2-example-2',
      type: 'text',
      content: `### Example: The Discovery of Unmarked Graves

**What Happened (2021)**
In May 2021, the Tk'emlúps te Secwépemc First Nation announced the discovery of 215 unmarked graves at a former residential school in Kamloops, British Columbia.

**The Impact:**
- Searches began at other former school sites
- Over 1,300 potential graves found across Canada
- National mourning: flags lowered for months
- Canada Day celebrations cancelled by some
- Pope Francis visited and apologized (2022)

**What It Revealed:**
- Death toll from residential schools higher than known
- Many children never returned home
- Families never told what happened to their children
- Records were destroyed or incomplete
- Government and churches complicit

**Survivor Testimony:**
Survivors described:
- Severe punishment for speaking their language
- Inadequate food, clothing, heating
- Physical and sexual abuse
- Siblings forbidden from speaking to each other
- Children as young as three years old

**Comparison with Norway:**
Norway also had assimilation policies toward the Sámi:
- Norwegianization policy (1850s-1960s)
- Sámi children in boarding schools
- Language suppression
- Less violent than Canadian system but also caused trauma
- Truth and Reconciliation Commission established 2018

**Key Question:**
How should nations address historical crimes committed by their governments and churches?`,
    },
    {
      id: 'engelsk-vg1-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze the residential school system:',
        subTasks: [
          { label: 'a', task: 'What was the purpose of residential schools?', solution: 'Force Indigenous children to assimilate; destroy Indigenous languages, cultures, identities; "Kill the Indian in the child"' },
          { label: 'b', task: 'Why does the TRC describe this as "cultural genocide"?', solution: 'Systematic attempt to destroy Indigenous cultures; removal of children; forbidden languages; abuse and deaths; meets definition of genocide' },
          { label: 'c', task: 'What should reconciliation look like?', solution: 'Consider: apologies, compensation, land returns, implementing TRC calls to action, education, addressing ongoing inequality' },
        ],
        solution: 'Reconciliation requires addressing both historical and ongoing injustice.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare Canada and Norway:',
        subTasks: [
          { label: 'a', task: 'List three similarities between Canada and Norway.', solution: 'Cold climate, natural resources (oil/gas), welfare state, indigenous peoples (First Nations/Sámi), constitutional monarchy, high standard of living' },
          { label: 'b', task: 'What can Canada and Norway learn from each other about indigenous rights?', solution: 'Consider: Sámi Parliament model, treaty processes, truth and reconciliation approaches, self-governance, language revitalization' },
        ],
        solution: 'Canada and Norway face similar challenges and can learn from each other.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-2-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Bilingualism:** Canada has two official languages (English and French), with French concentrated in Quebec; language politics have fueled separatist movements.

2. **Multiculturalism:** Canada was the first country with official multiculturalism; "cultural mosaic" approach welcomes diversity more than American "melting pot."

3. **Indigenous Peoples:** First Nations, Inuit, and Métis face ongoing challenges from colonial legacy; residential schools caused "cultural genocide."

4. **Truth and Reconciliation:** TRC documented residential school abuses; discovery of unmarked graves brought renewed attention; reconciliation is ongoing.

5. **Canada-Norway Comparison:** Similar in many ways (climate, resources, welfare state, indigenous peoples); can learn from each other's approaches.

**Key Vocabulary:**
- Bilingualism - use of two languages officially
- Quiet Revolution - Quebec's rapid modernization in the 1960s
- Cultural mosaic - model where diverse cultures maintain distinct identities
- Residential schools - boarding schools that forcibly assimilated Indigenous children
- Truth and Reconciliation - process of documenting historical wrongs and seeking healing`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay question (250-350 words):',
        subTasks: [
          { label: 'Topic', task: `"Canada's official multiculturalism is a model for other countries." Evaluate this claim, considering both strengths and limitations of Canada's approach.`, solution: 'Strengths: inclusive, celebrates diversity, generally positive attitudes. Limitations: indigenous rights still lacking, racism exists, Quebec tension, rhetoric vs reality gap.' },
        ],
        hints: ['Use specific examples', 'Consider different perspectives', 'Compare with other countries (US, Norway, etc.)'],
        solution: 'A good answer acknowledges both successes and ongoing challenges.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Comparative project:',
        subTasks: [
          { label: 'a', task: 'Create a comparison table: Canada vs. USA vs. Norway, covering: political system, healthcare, immigration policy, indigenous rights, diversity approach.', solution: 'Use specific facts; identify similarities and differences' },
          { label: 'b', task: 'Based on your comparison, which country would you most want to live in? Why?', solution: 'Personal preference with reasoning; consider trade-offs' },
          { label: 'c', task: 'What does Canada do better than either the US or Norway? What does it do worse?', solution: 'Consider specific policies and outcomes; avoid stereotypes' },
        ],
        hints: ['Research specific facts rather than relying on stereotypes', 'Consider multiple dimensions of comparison'],
        solution: 'Comparison helps understand that no country is simply "better" - all have strengths and weaknesses.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_10_3: TextbookChapter = {
  id: 'engelsk-vg1-10-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '10.3',
  title: 'English in Africa and Asia',
  description: 'Examine the role of English in African and Asian countries.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden ut fra historiske sammenhenger'],
  content: [
    {
      id: 'engelsk-vg1-10-3-intro',
      type: 'text',
      content: `## English Across Continents

English serves as an official language in many African and Asian countries, often alongside indigenous languages. This is largely a legacy of British colonialism, but the role of English has evolved since independence.

**Learning Objectives:**
- Understand why English is used in many former colonies
- Analyze the advantages and disadvantages of English as a post-colonial language
- Recognize different varieties of English as legitimate
- Consider the politics of language and identity

**African Countries Using English:**
Nigeria, South Africa, Kenya, Ghana, Zimbabwe, Uganda, and many more

**Asian Countries Using English:**
India, Singapore, Philippines, Pakistan, Hong Kong, Malaysia`,
    },
    {
      id: 'engelsk-vg1-10-3-theory-1',
      type: 'definition',
      title: `Theory 1: English in India - The World's Largest English-Speaking Country`,
      content: `**Historical Background**
British ruled India from 1858-1947 (and through the East India Company before that).

*Why English Was Introduced:*
- Colonial administration needed officials who spoke English
- 1835: Macaulay's Minute on Education - English education for elite
- Goal: create "a class of persons, Indian in blood and colour, but English in taste, in opinions, in morals, and in intellect"
- English became language of power, education, and law

**Independence (1947) - Keep English or Remove It?**
Debate at independence:
- Some wanted Hindi as sole national language
- South Indians (non-Hindi speakers) protested
- Compromise: Hindi AND English as official languages
- English as "link language" between regions

**English in India Today:**
- Official language at federal level
- ~125 million second-language speakers (estimates vary)
- ~250,000 native speakers (small minority)
- Language of higher education, business, courts, technology
- Growing: more Indians learning English each year

**The English Advantage:**
- Higher salaries for English speakers
- Access to global economy and technology
- Social mobility for those who master it
- BUT: Creates inequality between those with and without English access`,
    },
    {
      id: 'engelsk-vg1-10-3-example-1',
      type: 'text',
      content: `### Example: Indian English - A Legitimate Variety

**Is Indian English "Correct" English?**
Yes. Indian English is as legitimate as British or American English. Like other varieties, it has:

**Distinctive Vocabulary:**
| Indian English | British/American |
|---------------|------------------|
| prepone | move earlier (opposite of postpone) |
| lakh | 100,000 |
| crore | 10,000,000 |
| eve-teasing | sexual harassment |
| do the needful | do what is necessary |
| mugging | studying hard |
| timepass | killing time |

**Grammar Features:**
- "I am having two brothers" (vs. "I have two brothers")
- "He is not knowing the answer" (continuous for states)
- "Isn't it?" used for all question tags
- "Only" for emphasis: "Yesterday only I saw him"

**Code-Switching:**
Many Indians mix English with Hindi or other languages:
- "Hinglish" - Hindi + English
- "Yaar, what's happening?" (friend, what's happening?)
- Common in everyday speech, advertising, Bollywood

**Why Indian English Matters:**
- More people speak English in India than in the UK
- Indian English literature (Salman Rushdie, Arundhati Roy) wins global prizes
- Indian tech workers shape global English
- Represents legitimate linguistic evolution

**The Debate:**
Some argue for "Standard British English" in education; others say Indian English should be taught and respected. This reflects broader questions about who "owns" English.`,
    },
    {
      id: 'engelsk-vg1-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze English in India:',
        subTasks: [
          { label: 'a', task: 'Why did India keep English after independence instead of adopting only Hindi?', solution: 'Non-Hindi speakers (South India) protested; English as neutral link language; practical for diverse nation with many languages' },
          { label: 'b', task: 'How does English create both opportunity and inequality in India?', solution: 'Opportunity: jobs, education, global access. Inequality: those without English access excluded; favors urban, middle-class' },
          { label: 'c', task: 'Is Indian English "correct" English? Explain your view.', solution: 'Yes - all language varieties are legitimate; Indian English has consistent features, large speaker base, literary tradition' },
        ],
        solution: 'English in India shows how colonial languages can become local languages with their own legitimate varieties.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyze code-switching:',
        subTasks: [
          { label: 'a', task: 'What is code-switching? Give an example.', solution: 'Mixing two languages in conversation; e.g., Hinglish: "Yaar, let\'s go to that new mall" (Hindi "yaar" = friend)' },
          { label: 'b', task: 'Why might bilingual speakers code-switch?', solution: 'Express identity, certain words better in one language, social context, efficiency, humor' },
        ],
        solution: 'Code-switching is a sophisticated linguistic skill, not a sign of poor language ability.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-3-theory-2',
      type: 'definition',
      title: 'Theory 2: English in Africa and Singapore',
      content: `**English in Africa**
Over 20 African countries use English officially, including:
- **Nigeria:** ~230 million people; English is official, alongside 500+ local languages
- **South Africa:** English is one of 11 official languages
- **Kenya:** English and Swahili are official
- **Ghana:** English is the only official language

*Why English in Africa?*
- Colonial legacy (British colonies)
- Ethnic neutrality: English doesn't favor one ethnic group over others
- International business and diplomacy
- Education in European languages was established

*African English Varieties:*
Each country has developed its own variety:
- Nigerian English, Kenyan English, South African English
- Influenced by local languages
- Legitimate varieties with their own features

**Singapore: A Multilingual Success Story**
Singapore is unique - deliberately chose English as primary language:
- Chinese, Malay, Tamil are official alongside English
- English is language of education and business
- "Singlish" - English mixed with Chinese, Malay, Tamil

*Why Singapore Chose English:*
- No ethnic majority: Chinese 74%, Malay 13%, Indian 9%
- English as neutral language avoiding ethnic conflict
- Global business connections
- Highly educated workforce

*Singlish Examples:*
- "Can" = yes, okay
- "Lah" = emphasis particle ("Don't worry lah")
- "Kiasu" = afraid to lose (from Hokkien)
- Government campaigns against Singlish but it persists as identity marker`,
    },
    {
      id: 'engelsk-vg1-10-3-example-2',
      type: 'text',
      content: `### Example: Nigeria - English in Africa's Most Populous Country

**Background:**
Nigeria has ~230 million people and over 500 languages:
- Major languages: Hausa (north), Yoruba (southwest), Igbo (southeast)
- English is the official language
- Nigerian Pidgin English spoken by 100+ million

**Why English Works in Nigeria:**
1. **Ethnic neutrality:** Choosing Hausa, Yoruba, or Igbo would favor one group
2. **Colonial infrastructure:** Education, law, administration built in English
3. **International access:** Business, diplomacy, media
4. **Elite consensus:** Powerful groups educated in English

**Nigerian English Features:**
- "I want to hear word" = I want advice
- "How far?" = How are you? What's up?
- "Shine your eye" = Be careful
- "Chop" = eat

**Nigerian Pidgin:**
A separate language with millions of speakers:
- "Wetin dey happen?" = What's happening?
- "How body?" = How are you?
- "I no sabi" = I don't know
- Used in everyday conversation, music, media
- Some argue it should be official

**The Tension:**
- English is necessary for education and advancement
- But English education is unequal (better in cities, for wealthy)
- Local languages and culture may be lost
- Nigerian literature in English (Chinua Achebe, Wole Soyinka) wins global acclaim

**Chinua Achebe on English:**
The famous Nigerian author wrote in English but defended this choice: "The price a world language must be prepared to pay is submission to many different kinds of use."

**Key Question:**
Can a colonial language become truly African?`,
    },
    {
      id: 'engelsk-vg1-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze English in Africa:',
        subTasks: [
          { label: 'a', task: 'Why do many African countries use English despite it being a colonial language?', solution: 'Ethnic neutrality (no local language favored), established education/administration in English, international access, elite educated in English' },
          { label: 'b', task: 'What are the advantages and disadvantages for Nigeria of using English?', solution: 'Advantages: unites diverse country, global access. Disadvantages: excludes those without English education, may weaken local languages, colonial legacy' },
        ],
        solution: 'English in Africa shows complex trade-offs between unity, access, and cultural preservation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: `Analyze Singapore's language policy:`,
        subTasks: [
          { label: 'a', task: 'Why did Singapore choose English as its main language when most Singaporeans are ethnically Chinese?', solution: 'Ethnic neutrality - avoid favoring any group; global business advantage; unite diverse population' },
          { label: 'b', task: 'What is Singlish and why does it persist despite government campaigns against it?', solution: 'English mixed with Chinese, Malay, Tamil; marks Singaporean identity; used informally; people find value in local variety' },
        ],
        solution: `Singapore shows how language policy can be used strategically for national unity and economic development.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-3-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Colonial Legacy:** English is used in many African and Asian countries because of British colonialism; it was imposed but has been adapted.

2. **Post-Colonial Utility:** Countries keep English for ethnic neutrality, international access, and because systems (education, law) were built in English.

3. **Local Varieties:** Indian English, Nigerian English, Singlish are all legitimate varieties with their own features - not "incorrect" English.

4. **Inequality:** English creates opportunity for those who master it but excludes those without access to English education.

5. **Identity Questions:** Debates continue about whether colonial languages can become truly local, and whether local varieties should be taught or "standard" English.

**Key Vocabulary:**
- Lingua franca - common language used between speakers of different native languages
- Code-switching - mixing two or more languages in conversation
- Variety - a distinct form of a language (Indian English is a variety)
- Pidgin - simplified language developed for communication between groups
- Language policy - government decisions about official languages and education`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay question (250-350 words):',
        subTasks: [
          { label: 'Topic', task: `"Former colonies should replace English with local languages." Discuss this statement, considering practical and cultural factors.`, solution: 'Consider: ethnic tensions if one local language chosen, cost of transition, loss of international access, cultural decolonization, successful examples (e.g., Tanzania with Swahili), practical difficulties' },
        ],
        hints: ['Consider multiple countries and their different situations', 'Weigh practical concerns against cultural/political arguments', 'Use specific examples'],
        solution: 'A good answer acknowledges the complexity and avoids simplistic solutions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Research and reflection:',
        subTasks: [
          { label: 'a', task: 'Choose one English-speaking country in Africa or Asia not covered in detail above (e.g., Kenya, Ghana, Philippines, Pakistan, Hong Kong).', solution: 'Choose a country you find interesting' },
          { label: 'b', task: 'Research: What role does English play? Why? What local variety has developed?', solution: 'Find information on official status, education, local features' },
          { label: 'c', task: 'Reflect: How does Norway\'s use of English compare? Norway wasn\'t colonized but English is increasingly important - is this different?', solution: 'Consider: chosen vs. imposed, economic vs. colonial reasons, effect on Norwegian language and identity' },
        ],
        hints: ['Use reliable sources', 'Consider both historical and contemporary factors'],
        solution: 'Understanding different contexts helps appreciate the complex role of English globally.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_10_4: TextbookChapter = {
  id: 'engelsk-vg1-10-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '10.4',
  title: 'Indigenous Peoples and Their Rights',
  description: 'Learn about indigenous peoples in English-speaking countries.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden ut fra historiske sammenhenger'],
  content: [
    {
      id: 'engelsk-vg1-10-4-intro',
      type: 'text',
      content: `## Indigenous Rights in the English-speaking World

Indigenous peoples across English-speaking countries share histories of colonization, dispossession, and ongoing struggles for rights and recognition. While each group has unique experiences, common patterns emerge.

**Learning Objectives:**
- Understand the shared and distinct experiences of indigenous peoples
- Analyze different approaches to indigenous rights and reconciliation
- Compare situations across countries, including Norway
- Evaluate what meaningful reconciliation requires

**Common Experiences:**
- Loss of land and resources
- Destruction of language and culture
- Forced assimilation policies (boarding schools)
- Ongoing discrimination and inequality
- Movements for rights and self-determination`,
    },
    {
      id: 'engelsk-vg1-10-4-theory-1',
      type: 'definition',
      title: 'Theory 1: Indigenous Peoples of the English-Speaking World',
      content: `**United States - Native Americans / American Indians**
- About 5.2 million people (1.6% of US population)
- 574 federally recognized tribes
- Sovereignty: Tribes are "domestic dependent nations"
- Treaties: US signed and often broke hundreds of treaties

*Historical Trauma:*
- Genocide through war, disease, starvation
- Trail of Tears (1830s): forced removal to Oklahoma
- Boarding schools: "Kill the Indian, save the man"
- Termination policies (1950s): ended tribal recognition

*Current Issues:*
- Reservation poverty: some areas lack basic infrastructure
- Land rights: Standing Rock protests against pipelines
- Mascots debate: Washington Commanders (formerly Redskins)
- Missing and Murdered Indigenous Women

**Canada - First Nations, Inuit, and Métis**
- About 1.7 million people (4.9% of population)
- Over 600 First Nations, plus Inuit (Arctic) and Métis (mixed)
- Treaty relationships (some historical, some modern)

*Historical Trauma:*
- Residential schools (covered in previous chapter)
- Forced relocations
- "Sixties Scoop": Indigenous children adopted to white families

*Current Issues:*
- Clean water: many reserves lack safe drinking water
- MMIWG: Missing and Murdered Indigenous Women and Girls
- Land claims: disputes over unceded territory
- Truth and Reconciliation implementation`,
    },
    {
      id: 'engelsk-vg1-10-4-example-1',
      type: 'text',
      content: `### Example: The Standing Rock Protests (2016-2017)

**What Happened:**
The Dakota Access Pipeline (DAPL) was planned to carry oil near the Standing Rock Sioux Reservation in North Dakota.

**Why It Mattered:**
- Pipeline crossed under Lake Oahe, the tribe's water supply
- Route crossed sacred burial sites
- Original route near Bismarck (mostly white) rejected for safety; moved near reservation
- Tribe was not properly consulted

**The Protest:**
- Thousands gathered in solidarity camps
- "Water Protectors" faced police with water cannons, dogs, rubber bullets
- Largest Native American gathering in over 100 years
- Support from indigenous peoples worldwide
- #NoDAPL trended globally

**What It Revealed:**
1. **Environmental racism:** Dangerous projects often placed near minority communities
2. **Treaty rights:** Pipeline crossed territory covered by 1851 treaty
3. **Sovereignty limits:** Tribal objections overruled by federal government
4. **Indigenous solidarity:** Global indigenous movement emerging
5. **Ongoing colonialism:** Land and resources still taken from indigenous peoples

**Outcome:**
Obama administration halted pipeline; Trump administration restarted it. Pipeline completed and operating. Legal battles continue.

**Key Question:**
How do indigenous rights intersect with environmental protection and economic development?`,
    },
    {
      id: 'engelsk-vg1-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze the Standing Rock protests:',
        subTasks: [
          { label: 'a', task: 'Why did the Standing Rock Sioux oppose the Dakota Access Pipeline?', solution: 'Threatened water supply, crossed sacred sites, inadequate consultation, environmental justice concerns' },
          { label: 'b', task: 'What does "environmental racism" mean and how does Standing Rock illustrate it?', solution: 'Placing environmental hazards disproportionately near minority communities; original route near white city rejected, moved to reservation' },
          { label: 'c', task: 'Why is this issue relevant beyond the United States?', solution: 'Shows patterns of indigenous land rights vs. development, environmental justice, indigenous solidarity globally' },
        ],
        solution: 'Standing Rock shows ongoing conflicts between indigenous rights and economic development.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare indigenous experiences in the US and Canada:',
        subTasks: [
          { label: 'a', task: 'What similarities exist between Native American and First Nations experiences?', solution: 'Colonization, land loss, boarding/residential schools, forced assimilation, ongoing inequality, treaty violations' },
          { label: 'b', task: 'What differences exist in how the two countries approach indigenous rights?', solution: `Canada has TRC, modern treaties, and constitutional recognition; US has tribal sovereignty but less recent reconciliation focus` },
        ],
        solution: 'Comparing neighbor countries reveals different approaches to similar histories.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-4-theory-2',
      type: 'definition',
      title: 'Theory 2: Global Comparison and Paths to Justice',
      content: `**Australia and New Zealand (Review)**
- Australia: No treaty; terra nullius; Stolen Generations; 2023 Voice referendum failed
- New Zealand: Treaty of Waitangi; Māori language official; better integration but inequality remains

**The UN Declaration on the Rights of Indigenous Peoples (UNDRIP, 2007)**
International framework for indigenous rights:
- Right to self-determination
- Right to lands, territories, and resources
- Free, prior, and informed consent before projects on indigenous lands
- Right to practice and revitalize culture and language

*Adoption:*
- Initially opposed by US, Canada, Australia, New Zealand
- All four eventually endorsed (with reservations)
- Not legally binding but sets standards

**Elements of Justice and Reconciliation:**

*1. Truth-Telling:*
- Document what happened
- Acknowledge harm
- Examples: Canada TRC, Australian "Bringing Them Home" report

*2. Apologies:*
- Official government apologies
- Australia (2008), Canada (2008), US (2009 - buried in legislation)
- Symbolic but meaningful

*3. Land Rights:*
- Return of stolen lands
- Treaty settlements
- Native title recognition

*4. Self-Governance:*
- Tribal/First Nations governments
- Sámi Parliament model
- Control over own affairs

*5. Language and Culture:*
- Language revitalization programs
- Cultural education
- Protection of sacred sites`,
    },
    {
      id: 'engelsk-vg1-10-4-example-2',
      type: 'text',
      content: `### Example: Comparing Approaches - A Table

| Factor | USA | Canada | Australia | New Zealand | Norway (Sámi) |
|--------|-----|--------|-----------|-------------|---------------|
| Treaty/Legal Basis | Treaties (often broken) | Treaties + Constitution | No treaty | Treaty of Waitangi | Sámi Parliament |
| Formal Apology | 2009 (buried) | 2008 (residential schools) | 2008 (Stolen Generations) | 1995 (land confiscation) | 1997 (Norwegianization) |
| Self-Governance | Tribal sovereignty | Self-government agreements | Limited | Treaty settlements | Sámi Parliament (advisory) |
| Language Status | Some tribal official | Some provinces | Not official | Official since 1987 | Official in some areas |
| % of Population | 1.6% | 4.9% | 3.3% | 17% | ~2.5% |
| Truth Commission | No | Yes (2008-2015) | No (inquiry) | Waitangi Tribunal | Yes (2018-) |

**What the Table Shows:**
- New Zealand has strongest integration (Māori 17% of population, language official)
- Canada most active in recent reconciliation (TRC)
- Australia and US lag in formal reconciliation processes
- Norway relatively progressive but indigenous population small

**Key Insight:**
No country has fully achieved justice for indigenous peoples. All are works in progress.

**Questions for Reflection:**
- What does genuine reconciliation require?
- Can past wrongs ever be fully "fixed"?
- What role should indigenous peoples have in defining reconciliation?`,
    },
    {
      id: 'engelsk-vg1-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyze the UN Declaration on Indigenous Rights:',
        subTasks: [
          { label: 'a', task: 'What rights does UNDRIP protect?', solution: 'Self-determination, land rights, free prior informed consent, cultural rights, language rights' },
          { label: 'b', task: 'Why did the US, Canada, Australia, and New Zealand initially oppose it?', solution: 'Concerns about land claims, sovereignty implications, legal obligations, economic impacts of consent requirements' },
          { label: 'c', task: 'Is UNDRIP enough to protect indigenous rights? Why or why not?', solution: 'Not legally binding, countries can ignore it, but sets international standards and advocacy tool' },
        ],
        solution: 'International frameworks provide standards but require national implementation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Compare with Norway:',
        subTasks: [
          { label: 'a', task: 'How does the Sámi Parliament work and what powers does it have?', solution: 'Elected body; advisory role on issues affecting Sámi; manages some funds; limited decision-making power' },
          { label: 'b', task: 'What was Norwegianization and how was it similar to policies elsewhere?', solution: 'Forced assimilation policy suppressing Sámi language and culture; similar to boarding schools in US, Canada, Australia' },
          { label: 'c', task: 'What can Norway learn from other countries about indigenous rights?', solution: 'Consider: stronger self-governance, land rights, treaty model, truth and reconciliation implementation' },
        ],
        solution: 'Norway faces similar issues as other countries with indigenous populations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-4-summary',
      type: 'text',
      content: `## Summary

**Key Points:**

1. **Shared History:** Indigenous peoples across English-speaking countries experienced colonization, land loss, forced assimilation, and cultural destruction.

2. **Distinct Situations:** Each country has different legal frameworks - from treaties to terra nullius - creating different paths for rights and reconciliation.

3. **Ongoing Struggles:** Issues like land rights, clean water, environmental justice, and violence against indigenous women and girls continue.

4. **International Standards:** UNDRIP provides a framework for indigenous rights, though implementation varies.

5. **Reconciliation Elements:** Truth-telling, apologies, land rights, self-governance, and language preservation are all part of meaningful reconciliation.

6. **Norway Connection:** The Sámi experience shares patterns with indigenous peoples elsewhere; comparing approaches can inform better policy.

**Key Vocabulary:**
- Tribal sovereignty - legal concept that tribes are self-governing nations
- Terra nullius - "empty land" doctrine denying indigenous land rights
- Treaty - agreement between indigenous nation and colonial/national government
- UNDRIP - UN Declaration on the Rights of Indigenous Peoples
- Self-determination - right of peoples to determine their own political status
- Reconciliation - process of addressing historical wrongs and building new relationships`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay question (300-400 words):',
        subTasks: [
          { label: 'Topic', task: 'Compare how TWO countries from this chapter approach indigenous rights. Which approach is more effective and why? Consider: legal frameworks, reconciliation efforts, current outcomes.', solution: 'Choose two countries; compare specific policies and outcomes; evaluate effectiveness with evidence; acknowledge complexity' },
        ],
        hints: ['Use the comparison table as a starting point', 'Consider both formal policies and actual outcomes', 'Define what "effective" means to you'],
        solution: 'A good answer uses specific evidence and acknowledges that all approaches have strengths and weaknesses.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflection and research project:',
        subTasks: [
          { label: 'a', task: 'What responsibilities do you think Norway has toward the Sámi people today?', solution: 'Personal reflection with reasoning; consider historical wrongs, current inequality, self-determination' },
          { label: 'b', task: 'Research one specific Sámi rights issue in Norway today (e.g., wind power conflicts, language rights, Fosen case).', solution: 'Use reliable Norwegian sources; understand the issue fully' },
          { label: 'c', task: 'How does this Norwegian issue connect to what you have learned about indigenous rights globally?', solution: 'Identify patterns: land vs. development, consent, self-determination, cultural preservation' },
          { label: 'd', task: 'Present your findings in a 5-minute presentation or 400-word report.', solution: 'Clear structure, evidence, connection to global context' },
        ],
        hints: ['The Fosen wind power case (2021) is a significant recent example', 'Connect Norwegian issues to global patterns you\'ve learned about'],
        solution: 'Understanding local issues through a global lens deepens comprehension of indigenous rights.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 11: Cultural Expressions
// ============================================================================

export const CHAPTER_ENGELSK_VG1_11_1: TextbookChapter = {
  id: 'engelsk-vg1-11-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '11.1',
  title: 'Music and Popular Culture',
  description: 'Explore English-language music and its cultural significance.',
  estimatedMinutes: 45,
  competenceGoals: ['drøfte og reflektere over form, innhold og virkemidler i engelskspråklige kulturuttrykk fra ulike medier, deriblant musikk, film og spill'],
  content: [
    {
      id: 'engelsk-vg1-11-1-intro',
      type: 'text',
      content: `## Music as Cultural Expression

English-language music dominates global pop culture, carrying cultural meanings and reflecting social issues.

**Musical Genres:**
- Rock and Roll (1950s-)
- Hip Hop and Rap (1970s-)
- Pop and Electronic
- Country and Folk
- R&B and Soul`,
    },
    {
      id: 'engelsk-vg1-11-1-def-1',
      type: 'definition',
      title: 'Analyzing Song Lyrics',
      content: `**When Analyzing Lyrics, Consider:**

**Content:**
- What is the song about?
- What story does it tell?
- What emotions does it express?

**Technique:**
- Rhyme scheme and rhythm
- Literary devices (metaphor, simile)
- Repetition and hooks
- Language register

**Context:**
- Who is the artist?
- When was it written?
- What social/political context?
- What genre conventions?

**Impact:**
- Who is the audience?
- What message is conveyed?
- How has it influenced culture?`,
    },
    {
      id: 'engelsk-vg1-11-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Choose a song in English and analyze it:',
        subTasks: [
          { label: 'a', task: 'What is the song about (theme)?', solution: 'Identify main topic and meaning' },
          { label: 'b', task: 'What literary devices does it use?', solution: 'Find metaphors, repetition, imagery, etc.' },
          { label: 'c', task: 'What social or personal message does it convey?', solution: 'Consider deeper meaning and context' },
          { label: 'd', task: 'Why do you think this song is popular/significant?', solution: 'Consider musical and cultural factors' },
        ],
        hints: ['Choose a song with meaningful lyrics', 'Consider the artist\'s background'],
        solution: 'Good analysis connects technique to meaning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_11_2: TextbookChapter = {
  id: 'engelsk-vg1-11-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '11.2',
  title: 'Film and Television',
  description: 'Analyze English-language film and television.',
  estimatedMinutes: 50,
  competenceGoals: ['drøfte og reflektere over form, innhold og virkemidler i engelskspråklige kulturuttrykk fra ulike medier, deriblant musikk, film og spill'],
  content: [
    {
      id: 'engelsk-vg1-11-2-intro',
      type: 'text',
      content: `## The Power of the Screen

Film and television are powerful media for storytelling, cultural expression, and shaping perspectives.

**English-language Media Dominates:**
- Hollywood produces most globally distributed films
- American TV series stream worldwide
- British content has global reach (BBC, etc.)
- Shapes perceptions of English-speaking cultures`,
    },
    {
      id: 'engelsk-vg1-11-2-def-1',
      type: 'definition',
      title: 'Film Analysis Framework',
      content: `**Narrative Elements:**
- Plot structure
- Character development
- Theme and message
- Conflict and resolution

**Cinematic Techniques:**
- Camera angles and shots
- Lighting and color
- Sound and music
- Editing and pacing

**Representation:**
- How are different groups portrayed?
- Whose perspective is shown?
- What stereotypes appear?
- Who is missing?

**Context:**
- When was it made?
- What genre is it?
- Who is the target audience?
- What cultural impact has it had?`,
    },
    {
      id: 'engelsk-vg1-11-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze a film or TV series scene:',
        subTasks: [
          { label: 'a', task: 'Describe what happens in the scene.', solution: 'Summarize action and dialogue' },
          { label: 'b', task: 'What cinematic techniques are used and why?', solution: 'Analyze camera, sound, lighting choices' },
          { label: 'c', task: 'How does this scene contribute to the theme?', solution: 'Connect techniques to meaning' },
          { label: 'd', task: 'How are characters or groups represented?', solution: 'Consider stereotypes, perspectives, power' },
        ],
        hints: ['Choose a meaningful scene', 'Watch it multiple times'],
        solution: 'Good film analysis connects technique to meaning and context.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_11_3: TextbookChapter = {
  id: 'engelsk-vg1-11-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '11.3',
  title: 'Games and Digital Media',
  description: 'Examine video games and digital media as cultural expressions.',
  estimatedMinutes: 45,
  competenceGoals: ['drøfte og reflektere over form, innhold og virkemidler i engelskspråklige kulturuttrykk fra ulike medier, deriblant musikk, film og spill'],
  content: [
    {
      id: 'engelsk-vg1-11-3-intro',
      type: 'text',
      content: `## Games as Culture

Video games are now the largest entertainment industry, bigger than film and music combined. They're a legitimate cultural medium deserving critical analysis.

**Why Analyze Games?**
- Complex narratives and characters
- Interactive storytelling
- Reflect and shape cultural values
- Global reach and impact`,
    },
    {
      id: 'engelsk-vg1-11-3-def-1',
      type: 'definition',
      title: 'Analyzing Games',
      content: `**Narrative Elements:**
- Story and plot
- Character development
- World-building
- Player choices and consequences

**Gameplay Mechanics:**
- How does the game work?
- What behaviors are rewarded?
- What message does the system convey?

**Aesthetics:**
- Visual style
- Music and sound
- Atmosphere

**Representation:**
- Who are the heroes/villains?
- How are different groups portrayed?
- Whose perspective is centered?

**Cultural Context:**
- Who made the game and where?
- What audience is targeted?
- What cultural impact has it had?`,
    },
    {
      id: 'engelsk-vg1-11-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Analyze a video game:',
        subTasks: [
          { label: 'a', task: 'What story does the game tell?', solution: 'Describe narrative, themes, character arcs' },
          { label: 'b', task: 'How do game mechanics reinforce the themes?', solution: 'Connect gameplay to meaning' },
          { label: 'c', task: 'How are different groups represented?', solution: 'Consider gender, race, nationality' },
          { label: 'd', task: 'What cultural values does the game promote?', solution: 'Consider what the game rewards and punishes' },
        ],
        hints: ['Choose a game with a story', 'Think about both narrative and gameplay'],
        solution: 'Games deserve the same critical analysis as other media.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_11_4: TextbookChapter = {
  id: 'engelsk-vg1-11-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '11.4',
  title: 'Cross-cultural Communication',
  description: 'Develop skills for effective cross-cultural communication.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden'],
  content: [
    {
      id: 'engelsk-vg1-11-4-intro',
      type: 'text',
      content: `## Communicating Across Cultures

In our globalized world, you'll communicate with people from many different cultural backgrounds. Understanding cultural differences helps avoid misunderstandings.

**Key Areas of Cultural Difference:**
- Communication styles (direct vs. indirect)
- Concepts of time and punctuality
- Personal space and touch
- Hierarchy and formality
- Humor and taboo topics`,
    },
    {
      id: 'engelsk-vg1-11-4-def-1',
      type: 'definition',
      title: 'Intercultural Competence',
      content: `**Knowledge:**
- Understanding your own cultural values
- Learning about other cultures
- Recognizing stereotypes vs. generalizations

**Skills:**
- Adapting communication style
- Active listening
- Asking clarifying questions
- Observing nonverbal cues

**Attitudes:**
- Curiosity and openness
- Respect for difference
- Tolerance of ambiguity
- Empathy

**Avoiding Stereotypes:**
- Treat people as individuals
- Generalizations can inform but shouldn't define
- Ask questions rather than assume
- Be aware of your own biases`,
    },
    {
      id: 'engelsk-vg1-11-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Reflect on cross-cultural communication:',
        subTasks: [
          { label: 'a', task: 'What aspects of Norwegian culture might seem unusual to someone from another country?', solution: 'Consider: informality, janteloven, directness, personal space' },
          { label: 'b', task: 'Have you experienced cultural misunderstandings? What happened?', solution: 'Personal reflection' },
          { label: 'c', task: 'How can you improve your intercultural communication skills?', solution: 'Consider knowledge, skills, and attitudes' },
        ],
        solution: 'Intercultural competence is a skill that improves with practice.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 12: Exam Preparation
// ============================================================================

export const CHAPTER_ENGELSK_VG1_12_1: TextbookChapter = {
  id: 'engelsk-vg1-12-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '12.1',
  title: 'Understanding Exam Requirements',
  description: 'Learn about exam formats and assessment criteria.',
  estimatedMinutes: 40,
  competenceGoals: ['vurdere og bearbeide egne tekster ut fra faglige kriterier'],
  content: [
    {
      id: 'engelsk-vg1-12-1-intro',
      type: 'text',
      content: `## Exam Overview

Understanding what's expected helps you prepare effectively.

**Assessment in English VG1:**
- Overall achievement grade (standpunkt)
- Possible exam (written or oral)
- Based on competence goals in the curriculum

**What Examiners Look For:**
- Communication ability
- Language accuracy
- Content and reflection
- Ability to use sources`,
    },
    {
      id: 'engelsk-vg1-12-1-def-1',
      type: 'definition',
      title: 'Grade Characteristics',
      content: `**Grade 6 (Excellent):**
- Communicates clearly and effectively
- Rich, varied vocabulary
- Few errors that don't impede understanding
- Deep reflection and analysis
- Uses sources critically

**Grade 4 (Good):**
- Communicates clearly
- Adequate vocabulary
- Some errors but understandable
- Shows reflection and some analysis
- Uses sources appropriately

**Grade 2 (Adequate):**
- Communication sometimes unclear
- Limited vocabulary
- Errors sometimes impede understanding
- Limited reflection
- Basic use of sources

**Key Point:** It's about overall competence, not perfection!`,
    },
    {
      id: 'engelsk-vg1-12-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Self-assessment: Rate yourself (1-6) on these criteria and identify areas to improve:',
        subTasks: [
          { label: 'a', task: 'Written communication', solution: 'Consider vocabulary, grammar, structure' },
          { label: 'b', task: 'Oral communication', solution: 'Consider fluency, pronunciation, interaction' },
          { label: 'c', task: 'Reading comprehension', solution: 'Consider different text types' },
          { label: 'd', task: 'Cultural knowledge', solution: 'Consider English-speaking countries' },
        ],
        solution: 'Honest self-assessment helps target your preparation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_12_2: TextbookChapter = {
  id: 'engelsk-vg1-12-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '12.2',
  title: 'Written Exam Strategies',
  description: 'Develop strategies for the written exam.',
  estimatedMinutes: 50,
  competenceGoals: ['skrive ulike formelle og uformelle tekster med struktur og sammenheng'],
  content: [
    {
      id: 'engelsk-vg1-12-2-intro',
      type: 'text',
      content: `## Written Exam Success

The written exam tests your ability to communicate effectively in writing.

**Typical Format:**
- Part 1: Short answer tasks (e.g., comparing sources)
- Part 2: Long text (essay, article, narrative)
- 5 hours total
- Digital resources allowed (not AI)`,
    },
    {
      id: 'engelsk-vg1-12-2-def-1',
      type: 'definition',
      title: 'Exam Writing Strategy',
      content: `**Time Management (5 hours):**
- 30 min: Read tasks, plan approach
- 1 hour: Part 1 short tasks
- 30 min: Plan Part 2
- 2.5 hours: Write Part 2
- 30 min: Review and edit

**Planning Your Long Text:**
1. Analyze the task carefully
2. Brainstorm ideas
3. Create outline with main points
4. Decide on structure and approach
5. Write introduction last (after you know what you're introducing!)

**Common Mistakes to Avoid:**
- Not answering the actual question
- Running out of time
- Not using paragraphs
- Ignoring word count guidelines
- Not proofreading`,
    },
    {
      id: 'engelsk-vg1-12-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Practice task analysis. Read this exam question and answer:',
        subTasks: [
          { label: 'Question', task: '"Write an argumentative essay discussing whether social media has more positive or negative effects on teenagers. Use sources and personal reflection."', solution: 'N/A' },
          { label: 'a', task: 'What text type is required?', solution: 'Argumentative essay' },
          { label: 'b', task: 'What content is required?', solution: 'Discussion of positive and negative effects, sources, personal reflection' },
          { label: 'c', task: 'What should the structure be?', solution: 'Introduction with thesis, body paragraphs for/against, conclusion' },
        ],
        solution: 'Always analyze the task before you start writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_12_3: TextbookChapter = {
  id: 'engelsk-vg1-12-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '12.3',
  title: 'Oral Exam Preparation',
  description: 'Prepare for the oral exam with effective strategies.',
  estimatedMinutes: 50,
  competenceGoals: ['uttrykke seg nyansert og presist med flyt og sammenheng tilpasset formål, mottaker og situasjon'],
  content: [
    {
      id: 'engelsk-vg1-12-3-intro',
      type: 'text',
      content: `## Oral Exam Success

The oral exam tests your ability to communicate effectively in speech.

**Typical Format:**
- Preparation time (usually 30-45 min)
- Presentation (5-10 min)
- Conversation with examiners (10-15 min)
- Total: ~30 min

**You'll Be Assessed On:**
- Content and knowledge
- Language (vocabulary, grammar, pronunciation)
- Communication (fluency, interaction)
- Structure and coherence`,
    },
    {
      id: 'engelsk-vg1-12-3-def-1',
      type: 'definition',
      title: 'Presentation Tips',
      content: `**Structure:**
- Clear introduction stating your topic
- 2-3 main points
- Conclusion that ties it together

**Delivery:**
- Speak clearly and at a reasonable pace
- Make eye contact
- Use notes, but don't read
- Use visuals if allowed

**Language:**
- Use topic-specific vocabulary
- Vary sentence structures
- Use discourse markers (firstly, however, in conclusion)
- It's OK to pause to think

**Handling Questions:**
- Listen carefully
- Ask for clarification if needed
- It's OK to say "I'm not sure, but I think..."
- Engage in dialogue, don't give one-word answers`,
    },
    {
      id: 'engelsk-vg1-12-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Practice oral exam preparation:',
        subTasks: [
          { label: 'a', task: 'Choose a topic related to the English curriculum (e.g., an English-speaking country, a literary text, a social issue).', solution: 'Select a topic you can discuss for 5-10 minutes' },
          { label: 'b', task: 'Create a brief outline (3-4 points) for a presentation.', solution: 'Structure with intro, main points, conclusion' },
          { label: 'c', task: 'Practice giving the presentation. Time yourself.', solution: 'Aim for 5-10 minutes' },
          { label: 'd', task: 'Prepare answers for likely follow-up questions.', solution: 'Anticipate what examiners might ask' },
        ],
        solution: 'Preparation and practice are key to oral exam success.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_12_4: TextbookChapter = {
  id: 'engelsk-vg1-12-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '12.4',
  title: 'Practice and Review',
  description: 'Review key concepts and practice for exams.',
  estimatedMinutes: 55,
  competenceGoals: ['bruke egnede strategier i språklæring, tekstskaping og kommunikasjon'],
  content: [
    {
      id: 'engelsk-vg1-12-4-intro',
      type: 'text',
      content: `## Final Review and Practice

This chapter helps you review key concepts and practice exam-style tasks.

**Review Checklist:**
- Language learning strategies
- Grammar and text structure
- Reading and literary analysis
- Writing different text types
- English-speaking countries and cultures
- Critical source evaluation
- Oral communication skills`,
    },
    {
      id: 'engelsk-vg1-12-4-def-1',
      type: 'definition',
      title: 'Key Competence Areas',
      content: `**Communication:**
- Express yourself clearly in speech and writing
- Adapt to purpose, audience, and situation
- Use varied vocabulary and structures

**Language:**
- Use grammar correctly
- Apply text structure knowledge
- Show vocabulary range
- Communicate despite some errors

**Culture:**
- Knowledge of English-speaking countries
- Understanding of diversity
- Historical perspectives
- Analysis of cultural expressions

**Sources:**
- Critical evaluation
- Compare perspectives
- Use sources responsibly
- Cite properly`,
    },
    {
      id: 'engelsk-vg1-12-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Create a study plan for the final weeks before exams:',
        subTasks: [
          { label: 'a', task: 'Identify your three weakest areas from the course.', solution: 'Be honest about what you find difficult' },
          { label: 'b', task: 'For each area, list specific activities to improve.', solution: 'E.g., practice tasks, review chapters, get feedback' },
          { label: 'c', task: 'Create a weekly schedule for review.', solution: 'Be realistic and include all subjects' },
          { label: 'd', task: 'Plan how to get feedback on practice tasks.', solution: 'Teacher, peers, or self-assessment' },
        ],
        hints: ['Be specific and realistic', 'Include both written and oral practice'],
        solution: 'A good study plan is specific, realistic, and targets your weak areas.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-12-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write a complete practice essay (400-600 words) on ONE of these topics:\n\na) "Discuss the advantages and disadvantages of English as a global language."\n\nb) "Analyze how a film, book, or song you studied reflects issues in English-speaking society."\n\nc) "Compare and contrast two English-speaking countries you have learned about."',
        hints: ['Plan before writing', 'Include introduction, body, and conclusion', 'Use evidence and examples', 'Proofread when finished'],
        solution: 'A good essay has clear structure, relevant content, and accurate language.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Export all chapters from this file
export const ENGELSK_VG1_CHAPTERS_DEL4 = [
  CHAPTER_ENGELSK_VG1_8_1,
  CHAPTER_ENGELSK_VG1_8_2,
  CHAPTER_ENGELSK_VG1_8_3,
  CHAPTER_ENGELSK_VG1_8_4,
  CHAPTER_ENGELSK_VG1_9_1,
  CHAPTER_ENGELSK_VG1_9_2,
  CHAPTER_ENGELSK_VG1_9_3,
  CHAPTER_ENGELSK_VG1_9_4,
  CHAPTER_ENGELSK_VG1_10_1,
  CHAPTER_ENGELSK_VG1_10_2,
  CHAPTER_ENGELSK_VG1_10_3,
  CHAPTER_ENGELSK_VG1_10_4,
  CHAPTER_ENGELSK_VG1_11_1,
  CHAPTER_ENGELSK_VG1_11_2,
  CHAPTER_ENGELSK_VG1_11_3,
  CHAPTER_ENGELSK_VG1_11_4,
  CHAPTER_ENGELSK_VG1_12_1,
  CHAPTER_ENGELSK_VG1_12_2,
  CHAPTER_ENGELSK_VG1_12_3,
  CHAPTER_ENGELSK_VG1_12_4,
];
