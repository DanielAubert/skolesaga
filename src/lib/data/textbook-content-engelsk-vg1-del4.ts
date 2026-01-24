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

British history spans thousands of years and has shaped the modern world profoundly.

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
      id: 'engelsk-vg1-8-1-def-1',
      type: 'definition',
      title: 'Key Historical Events',
      content: `**1066 - Norman Conquest:**
William the Conqueror invaded from Normandy, fundamentally changing English language, law, and society.

**1215 - Magna Carta:**
Limited royal power and established principle that even the king is subject to law.

**1534 - English Reformation:**
Henry VIII broke from the Catholic Church, establishing the Church of England.

**1642-1651 - English Civil War:**
Parliament vs. King; led to execution of Charles I and brief republic.

**1707 - Act of Union:**
Scotland and England united to form Great Britain.

**1760-1840 - Industrial Revolution:**
Britain became the world's first industrialized nation, transforming society.

**1939-1945 - World War II:**
Britain stood alone against Nazi Germany before US and Soviet entry.`,
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
          { label: 'a', task: 'Magna Carta (1215)', solution: 'Established limits on royal power, foundation of rule of law', multipleChoiceOptions: ['Established limits on royal power', 'Created democracy', 'Ended monarchy', 'Started colonialism'] },
          { label: 'b', task: 'Industrial Revolution', solution: 'Transformed economy and society through factory production', multipleChoiceOptions: ['Created democracy', 'Transformed economy through factories', 'Ended the monarchy', 'Started the British Empire'] },
          { label: 'c', task: 'Norman Conquest', solution: 'Changed English language and introduced feudal system', multipleChoiceOptions: ['Started democracy', 'Changed English language/introduced feudalism', 'Created parliament', 'Ended Roman rule'] },
        ],
        solution: 'Understanding historical significance helps see connections to present.',
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

At its height, the British Empire was the largest in history, controlling about 25% of the world's land and population.

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
      id: 'engelsk-vg1-8-2-def-1',
      type: 'definition',
      title: 'Colonialism and Its Effects',
      content: `**What Was Colonialism?**
The practice of acquiring political control over other countries, exploiting them economically, and settling them with colonists.

**Methods of Control:**
- Direct rule (Britain governs directly)
- Indirect rule (through local leaders)
- Economic exploitation
- Cultural imposition

**Lasting Effects:**
- Borders drawn without regard for ethnic groups
- Economic systems oriented toward exports to Europe
- Language and education systems
- Racial hierarchies and discrimination
- Identity issues and cultural loss

**The Commonwealth:**
54 member states, mostly former colonies. Voluntary association. British monarch is head of state in some member countries.`,
    },
    {
      id: 'engelsk-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Discuss these questions about the British Empire\'s legacy:',
        subTasks: [
          { label: 'a', task: 'What positive legacies might former colonies have from British rule?', solution: 'Consider infrastructure, legal systems, education, language' },
          { label: 'b', task: 'What negative legacies remain?', solution: 'Consider economic structures, borders, cultural loss, racism' },
          { label: 'c', task: 'Should Britain apologize and/or pay reparations for colonialism? Why/why not?', solution: 'Open discussion - consider multiple perspectives' },
        ],
        hints: ['Try to see multiple perspectives', 'Use specific examples where possible'],
        solution: 'Colonial history is complex and affects the present in many ways.',
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
  description: 'Understand the UK\'s political system and government.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden'],
  content: [
    {
      id: 'engelsk-vg1-8-3-intro',
      type: 'text',
      content: `## How Britain is Governed

The United Kingdom is a constitutional monarchy with a parliamentary democracy - one of the oldest in the world.

**Key Features:**
- Monarch as head of state (ceremonial)
- Prime Minister as head of government
- Parliament makes laws
- No written constitution`,
    },
    {
      id: 'engelsk-vg1-8-3-def-1',
      type: 'definition',
      title: 'The British Political System',
      content: `**The Monarch:**
Currently King Charles III. Ceremonial role. "Reigns but does not rule."

**Parliament:**
- **House of Commons:** 650 elected MPs. Real power.
- **House of Lords:** Appointed/hereditary. Revises laws, limited power.

**The Prime Minister:**
Leader of the largest party in Commons. Appointed by the monarch.

**The Cabinet:**
Senior ministers chosen by PM. Run government departments.

**Devolution:**
Scotland, Wales, and Northern Ireland have their own parliaments/assemblies with some powers.

**Brexit:**
UK left the European Union in 2020 after 2016 referendum. Ongoing effects on trade, immigration, Northern Ireland.`,
    },
    {
      id: 'engelsk-vg1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Compare the British and Norwegian political systems:',
        subTasks: [
          { label: 'a', task: 'What are two similarities?', solution: 'Constitutional monarchies, parliamentary democracies, similar ceremonial monarchs' },
          { label: 'b', task: 'What are two key differences?', solution: 'UK has no written constitution, has House of Lords, no regional parliaments like Norway' },
        ],
        hints: ['Consider both structure and traditions'],
        solution: 'Comparison helps understand different democratic systems.',
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

British identity is complex and contested, shaped by history, class, region, and diversity.

**Components of British Culture:**
- National traditions (monarchy, ceremonies)
- Popular culture (music, TV, literature)
- Social norms (queuing, politeness, irony)
- Sports (football, cricket, rugby)
- Regional identities (English, Scottish, Welsh, Northern Irish)`,
    },
    {
      id: 'engelsk-vg1-8-4-def-1',
      type: 'definition',
      title: 'Multicultural Britain',
      content: `**Immigration History:**
- Post-WWII: Caribbean (Windrush generation), South Asia
- EU membership brought European immigration
- Currently diverse: 14% of UK population born abroad

**Challenges:**
- Racism and discrimination
- Integration debates
- "British values" discussions
- Brexit highlighted immigration tensions

**Successes:**
- London as one of world's most diverse cities
- Multicultural contributions to arts, food, sport
- Legal protections against discrimination

**Key Concepts:**
- **Multiculturalism:** Different cultures coexist, maintain identities
- **Integration:** Newcomers adopt aspects of host culture
- **Assimilation:** Newcomers abandon original culture entirely`,
    },
    {
      id: 'engelsk-vg1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Discuss these questions about British identity:',
        subTasks: [
          { label: 'a', task: 'What images or symbols come to mind when you think of Britain?', solution: 'Open discussion - may include monarchy, Big Ben, tea, football, etc.' },
          { label: 'b', task: 'Are these stereotypes accurate? What might be missing?', solution: 'Consider diversity, regional differences, modern Britain' },
          { label: 'c', task: 'How is British identity similar to or different from Norwegian identity?', solution: 'Compare national symbols, diversity, identity debates' },
        ],
        solution: 'National identity is complex and evolving.',
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

American history spans from indigenous peoples through colonization, revolution, expansion, civil war, and emergence as a global superpower.

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
      id: 'engelsk-vg1-9-1-def-1',
      type: 'definition',
      title: 'Key Events in American History',
      content: `**1776 - Declaration of Independence:**
Colonies declared independence from Britain. "All men are created equal."

**1787 - Constitution:**
Established federal system, separation of powers, Bill of Rights (1791).

**1861-1865 - Civil War:**
North vs. South over slavery. 620,000+ died. Slavery abolished (13th Amendment).

**1865-1877 - Reconstruction:**
Attempt to rebuild South and integrate freed slaves. Ultimately failed.

**1929-1941 - Great Depression & New Deal:**
Economic collapse. Government intervention expanded.

**1950s-1960s - Civil Rights Movement:**
Fought for racial equality. Brown v. Board, Civil Rights Act, Voting Rights Act.

**2001 - September 11:**
Terrorist attacks led to "War on Terror," changed foreign policy.`,
    },
    {
      id: 'engelsk-vg1-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Answer these questions about American history:',
        subTasks: [
          { label: 'a', task: 'What contradiction existed in the Declaration of Independence regarding "all men are created equal"?', solution: 'Many founders owned slaves; women and non-property owners couldn\'t vote' },
          { label: 'b', task: 'Why did the Civil War happen?', solution: 'Primarily over slavery - Southern states seceded to preserve slavery' },
          { label: 'c', task: 'What was the Civil Rights Movement fighting against?', solution: 'Racial segregation, discrimination, voter suppression' },
        ],
        solution: 'Understanding American history requires confronting difficult truths.',
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

The idea that anyone, regardless of background, can achieve success through hard work - a core American belief.

**The Dream's Promise:**
- Equal opportunity for all
- Upward social mobility
- Freedom to pursue happiness
- Success through merit, not birth`,
    },
    {
      id: 'engelsk-vg1-9-2-def-1',
      type: 'definition',
      title: 'Reality vs. Ideal',
      content: `**The Dream's Evolution:**
- Initially: Land ownership, independence (frontier)
- Early 20th century: Homeownership, prosperity
- Today: College education, economic security

**Challenges to the Dream:**
- Income inequality has increased dramatically
- Social mobility has declined
- Education costs have skyrocketed
- Healthcare tied to employment
- Racial wealth gaps persist
- Housing unaffordable in many areas

**Statistics:**
- Richest 1% own more than bottom 50% combined
- Student debt exceeds $1.7 trillion
- Medical bills are leading cause of bankruptcy
- Black families have 1/10 the wealth of white families (median)`,
    },
    {
      id: 'engelsk-vg1-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Discuss the American Dream:',
        subTasks: [
          { label: 'a', task: 'Is the American Dream still achievable today? For whom?', solution: 'Consider barriers and opportunities for different groups' },
          { label: 'b', task: 'How does the American Dream differ from Norwegian expectations about life?', solution: 'Consider welfare state, equality, individualism differences' },
          { label: 'c', task: 'What are the positive and negative aspects of believing in the Dream?', solution: 'Consider motivation vs. blaming individuals for systemic problems' },
        ],
        solution: 'The American Dream reveals tensions between ideals and reality.',
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

The US has a federal system with separation of powers, designed to prevent tyranny.

**Key Features:**
- Federal system: power shared between national and state governments
- Separation of powers: legislative, executive, judicial
- Checks and balances: each branch can limit others
- Two-party system: Democrats and Republicans`,
    },
    {
      id: 'engelsk-vg1-9-3-def-1',
      type: 'definition',
      title: 'Government Structure',
      content: `**Executive Branch:**
- President (head of state AND government)
- Vice President
- Cabinet and federal agencies
- 4-year terms, max 2 terms

**Legislative Branch (Congress):**
- Senate: 100 members (2 per state), 6-year terms
- House of Representatives: 435 members (by population), 2-year terms
- Makes laws, controls spending

**Judicial Branch:**
- Supreme Court: 9 justices, lifetime appointments
- Interprets Constitution
- Can strike down unconstitutional laws

**Elections:**
- Electoral College chooses president (not popular vote)
- Winner-take-all in most states
- Gerrymandering affects House races`,
    },
    {
      id: 'engelsk-vg1-9-3-def-2',
      type: 'definition',
      title: 'Political Divisions',
      content: `**Democrats (left/liberal):**
- Generally favor: government programs, environmental regulation, gun control, abortion rights, immigration paths
- Stronger in cities, coasts, educated voters

**Republicans (right/conservative):**
- Generally favor: lower taxes, less regulation, gun rights, abortion restrictions, stricter immigration
- Stronger in rural areas, South, religious voters

**Polarization:**
- Increasing divide between parties
- Less cooperation, more conflict
- Media echo chambers
- Geographic sorting (liberals/conservatives living separately)
- Distrust of opposing party has grown dramatically`,
    },
    {
      id: 'engelsk-vg1-9-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Compare American and Norwegian political systems:',
        subTasks: [
          { label: 'a', task: 'What are two key differences between the US and Norwegian electoral systems?', solution: 'Electoral college vs popular vote; two-party vs multi-party; district vs proportional representation' },
          { label: 'b', task: 'Why might America be more politically polarized than Norway?', solution: 'Two-party system, media landscape, geographic size, cultural diversity' },
        ],
        solution: 'Different systems produce different political cultures.',
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

America's national motto reflects its diversity - but also ongoing tensions about what it means to be American.

**Key Demographics (2023):**
- White: ~58% (non-Hispanic)
- Hispanic/Latino: ~19%
- Black/African American: ~13%
- Asian: ~6%
- Two or more races: ~3%
- Native American: ~1%`,
    },
    {
      id: 'engelsk-vg1-9-4-def-1',
      type: 'definition',
      title: 'Melting Pot vs Salad Bowl',
      content: `**Melting Pot:**
The idea that immigrants should assimilate, creating a unified American culture.
- One language (English)
- Shared "American values"
- Individual identity less important than national identity

**Salad Bowl / Cultural Mosaic:**
The idea that groups can maintain distinct identities while contributing to a diverse whole.
- Multilingualism valued
- Cultural heritage preserved
- Diversity as strength

**Current Debates:**
- Should English be the official language?
- How should immigration be handled?
- What is "American culture"?
- How do we address historical injustices?`,
    },
    {
      id: 'engelsk-vg1-9-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-9-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Explore American cultural diversity:',
        subTasks: [
          { label: 'a', task: 'What are some ways American diversity is visible in popular culture?', solution: 'Music, food, film, sports, fashion, language' },
          { label: 'b', task: 'What challenges does diversity create?', solution: 'Communication, different values, discrimination, political divisions' },
          { label: 'c', task: 'Is Norway a "melting pot" or "salad bowl"? How does it compare to the US?', solution: 'Consider immigration history, integration policies, debates' },
        ],
        solution: 'Diversity is both a strength and source of tension in any society.',
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

Australia and New Zealand share British colonial heritage but have developed distinct national identities.

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
      id: 'engelsk-vg1-10-1-def-1',
      type: 'definition',
      title: 'Indigenous Peoples',
      content: `**Aboriginal Australians:**
- Oldest continuous culture on Earth (65,000+ years)
- Over 250 language groups originally
- Colonization was devastating: disease, violence, dispossession
- "Stolen Generations": children forcibly removed (1910-1970)
- 2008: National apology by PM Kevin Rudd
- Ongoing reconciliation efforts

**Māori (New Zealand):**
- Polynesian peoples who arrived ~1300 AD
- Treaty of Waitangi (1840): partnership with British
- Māori language is official
- Māori culture integrated into national identity
- Better outcomes than Aboriginal Australians, but inequalities remain

**Key Difference:** New Zealand's treaty approach created different relationship than Australia's lack of treaty.`,
    },
    {
      id: 'engelsk-vg1-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Compare indigenous rights in Australia and New Zealand:',
        subTasks: [
          { label: 'a', task: 'What was the Treaty of Waitangi and why is it significant?', solution: 'Agreement between Māori and British; forms basis for Māori rights; debated interpretation' },
          { label: 'b', task: 'Why did Australia have no similar treaty?', solution: 'British declared land "terra nullius" (empty) - Aboriginal peoples\' existence not recognized legally' },
          { label: 'c', task: 'How does this historical difference affect indigenous peoples today?', solution: 'Different legal frameworks, recognition, language preservation, outcomes' },
        ],
        solution: 'Colonial history shapes present-day society.',
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

Canada is the world's second-largest country by area, known for multiculturalism, bilingualism, and natural beauty.

**Key Facts:**
- Population: ~40 million
- Two official languages: English and French
- Constitutional monarchy (British monarch as head of state)
- Known for healthcare, peacekeeping, politeness`,
    },
    {
      id: 'engelsk-vg1-10-2-def-1',
      type: 'definition',
      title: 'Canadian Identity',
      content: `**Bilingualism:**
- English majority (~75%), French (~20%)
- Quebec is predominantly French-speaking
- Federal government services in both languages
- History of tension: Quebec separatism movements

**Multiculturalism:**
- Official policy since 1971
- Higher immigration rate than most Western countries
- Diversity celebrated as national characteristic
- "Cultural mosaic" approach

**First Nations, Inuit, and Métis:**
- Indigenous peoples with distinct rights
- Residential schools caused lasting trauma
- Truth and Reconciliation Commission (2015)
- Ongoing land claims and rights movements`,
    },
    {
      id: 'engelsk-vg1-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Compare Canada and Norway:',
        subTasks: [
          { label: 'a', task: 'What similarities do Canada and Norway share?', solution: 'Climate, welfare systems, multicultural policies, indigenous peoples, resource wealth' },
          { label: 'b', task: 'How does Canada\'s bilingualism compare to Norway\'s language situation?', solution: 'Both have multiple official forms; Canada more divided geographically' },
        ],
        solution: 'Canada and Norway share many characteristics.',
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

English serves as an official language in many African and Asian countries, often alongside indigenous languages.

**African Countries Using English:**
Nigeria, South Africa, Kenya, Ghana, Zimbabwe, and many more

**Asian Countries Using English:**
India, Singapore, Philippines, Pakistan, Hong Kong`,
    },
    {
      id: 'engelsk-vg1-10-3-def-1',
      type: 'definition',
      title: 'English in India',
      content: `**Historical Context:**
- British rule 1858-1947
- English introduced for administration
- Elite education in English

**English Today:**
- One of two official languages (with Hindi)
- 125+ million speakers (second-language)
- Language of higher education, business, courts
- Social mobility linked to English

**Indian English Features:**
- Distinctive vocabulary and expressions
- Different intonation patterns
- Influence from Indian languages
- Completely legitimate variety!`,
    },
    {
      id: 'engelsk-vg1-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Discuss English as a post-colonial language:',
        subTasks: [
          { label: 'a', task: 'Why do many former colonies continue to use English?', solution: 'Education, business, unity among diverse ethnic groups, global communication' },
          { label: 'b', task: 'What are the advantages and disadvantages for these countries?', solution: 'Advantages: global access, business. Disadvantages: cultural loss, inequality, colonial legacy' },
        ],
        solution: 'The role of English in former colonies is complex.',
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

Indigenous peoples across English-speaking countries share histories of colonization, dispossession, and ongoing struggles for rights and recognition.

**Common Experiences:**
- Loss of land and resources
- Destruction of language and culture
- Forced assimilation policies
- Ongoing discrimination and inequality
- Movements for rights and self-determination`,
    },
    {
      id: 'engelsk-vg1-10-4-def-1',
      type: 'definition',
      title: 'Indigenous Peoples Overview',
      content: `**United States - Native Americans:**
- 574 federally recognized tribes
- Reservation system
- Trail of Tears, Indian boarding schools
- Current issues: sovereignty, land rights, mascots

**Canada - First Nations, Inuit, Métis:**
- Over 600 First Nations
- Treaties (historical and modern)
- Residential schools (TRC report)
- Land claims, missing/murdered indigenous women

**Australia - Aboriginal & Torres Strait Islanders:**
- Oldest continuous culture
- "Stolen Generations"
- No treaty exists
- Voice to Parliament referendum (2023)

**New Zealand - Māori:**
- Treaty of Waitangi basis for rights
- Māori language revitalization
- Waitangi Tribunal addresses grievances`,
    },
    {
      id: 'engelsk-vg1-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Compare indigenous experiences:',
        subTasks: [
          { label: 'a', task: 'What common experiences do indigenous peoples in English-speaking countries share?', solution: 'Colonization, loss of land/language/culture, forced assimilation, ongoing inequality' },
          { label: 'b', task: 'How do Sámi rights in Norway compare?', solution: 'Consider Sámi Parliament, language rights, reindeer herding, historical assimilation policies' },
          { label: 'c', task: 'What can countries do to address historical wrongs?', solution: 'Truth commissions, apologies, land returns, language preservation, self-governance' },
        ],
        solution: 'Indigenous rights are a global issue requiring ongoing attention.',
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
