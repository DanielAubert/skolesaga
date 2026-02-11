/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 3.1: Social Inequality
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_3_1: TextbookChapter = {
  id: 'samf-engelsk-3-1',
  courseId: 'samf-engelsk',
  chapterNumber: '3.1',
  title: 'Social Inequality',
  description: 'Examine the causes, dimensions, and consequences of social inequality in English-speaking societies and beyond, including class, income distribution, and access to opportunity.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analyze and discuss the causes and consequences of social inequality in different societies',
    'reflect on the relationship between economic structures, social class, and individual opportunity',
    'compare approaches to reducing inequality across English-speaking countries',
  ],
  content: [
    {
      id: 'se-3-1-intro',
      type: 'text',
      content: `## Understanding Social Inequality

Social inequality refers to the unequal distribution of resources, opportunities, and privileges among members of a society. While some degree of difference between individuals has existed throughout human history, the scale and nature of modern inequality raise fundamental questions about fairness, justice, and the kind of society we want to live in.

**Why does social inequality matter?**

- **Health and well-being:** Research consistently shows that more unequal societies have worse health outcomes for *everyone*, not just the poor. Higher inequality correlates with higher rates of mental illness, drug abuse, obesity, and lower life expectancy.
- **Social mobility:** In highly unequal societies, the circumstances of your birth -- your parents' income, education, and social connections -- have a greater impact on your future than in more equal societies.
- **Democracy:** Extreme economic inequality can translate into political inequality, as wealthy individuals and corporations gain disproportionate influence over policy-making.
- **Social cohesion:** High inequality erodes trust between people and weakens the sense of shared community that holds societies together.

**Key dimensions of inequality:**

1. **Income inequality** -- differences in what people earn
2. **Wealth inequality** -- differences in what people own (assets minus debts)
3. **Educational inequality** -- unequal access to quality education
4. **Health inequality** -- unequal access to healthcare and unequal health outcomes
5. **Opportunity inequality** -- unequal chances to succeed regardless of background`,
    },
    {
      id: 'se-3-1-def-1',
      type: 'definition',
      title: 'Key Concepts: Measuring and Understanding Inequality',
      content: `**Social inequality:** The unequal distribution of resources, opportunities, and privileges within a society, structured along lines such as class, race, gender, and geography.

**Gini coefficient:** A statistical measure of inequality ranging from 0 (perfect equality, everyone has the same) to 1 (perfect inequality, one person has everything). The United States has a Gini coefficient of approximately 0.39, while Norway's is approximately 0.27.

**Social class:** A group of people who share a similar economic position in society. Class is typically defined by income, wealth, occupation, and education. Common categories include working class, middle class, and upper class.

**Social mobility:** The ability of individuals or families to move between social classes over time. **Intergenerational mobility** refers to the extent to which children's outcomes differ from their parents'. Countries with high social mobility are often described as having a strong "social elevator."

**The Great Gatsby Curve:** A concept showing that countries with higher income inequality tend to have lower social mobility. Named after F. Scott Fitzgerald's novel about the American Dream, it suggests that the promise of "rags to riches" is hardest to achieve in the most unequal societies.

**Meritocracy:** A system in which advancement is based on individual ability and effort rather than birth, wealth, or social connections. Critics argue that true meritocracy is impossible in a society with significant inequality of starting conditions.

**Structural inequality:** Inequality that is embedded in the institutions, laws, and practices of a society rather than being the result of individual choices or abilities.`,
    },
    {
      id: 'se-3-1-example-1',
      type: 'example',
      title: 'Example: Inequality in the United States and the United Kingdom',
      problem: `Compare the nature and scale of social inequality in the United States and the United Kingdom. What similarities and differences can be identified?`,
      solution: `**Analysis:**

**The United States:**
- The US has one of the highest levels of income inequality among developed nations (Gini coefficient ~0.39)
- The top 1% of earners take home approximately 20% of all national income
- Wealth inequality is even more extreme: the top 10% own approximately 70% of total household wealth
- Inequality has been rising since the 1980s, driven by tax cuts for the wealthy, declining union membership, technological change, and globalization
- The "American Dream" -- the idea that anyone can succeed through hard work -- remains a powerful cultural narrative, but data shows the US has lower social mobility than most European countries
- Inequality is strongly correlated with race: Black and Hispanic households have significantly less wealth than white households, a legacy of slavery, segregation, and ongoing discrimination

**The United Kingdom:**
- The UK is one of the more unequal countries in Western Europe (Gini coefficient ~0.35)
- The class system remains influential, with social background affecting accent, education, career networks, and cultural capital
- The gap between London and other regions is among the largest in Europe
- Britain's welfare state, including the National Health Service (NHS), provides a safety net but has been weakened by austerity policies since 2010
- Private schooling creates a parallel education system: only 7% of students attend private schools, but they are heavily overrepresented in elite universities, politics, and the professions

**Similarities:**
Both countries have rising inequality since the 1980s, significant racial and ethnic dimensions to inequality, and powerful cultural narratives about individual effort that can obscure structural factors.

**Differences:**
The US has higher overall inequality, weaker social safety nets, and more extreme wealth concentration. The UK has a stronger welfare state and universal healthcare, but a more entrenched class system.`,
    },
    {
      id: 'se-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What does the Gini coefficient measure?',
        options: [
          { id: 'a', text: 'The level of income or wealth inequality in a society, from 0 (perfect equality) to 1 (perfect inequality)', isCorrect: true },
          { id: 'b', text: 'The total wealth of a country divided by its population', isCorrect: false },
          { id: 'c', text: 'The average income of the middle class', isCorrect: false },
          { id: 'd', text: 'The number of billionaires in a country', isCorrect: false },
        ],
        hints: ['Think about what a score of 0 and a score of 1 would represent.'],
        solution: 'The Gini coefficient is a statistical measure that summarizes inequality on a scale from 0 to 1. A score of 0 means everyone has the same income or wealth (perfect equality), while 1 means one person has everything (perfect inequality). Most countries fall between 0.25 and 0.60.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'The "Great Gatsby Curve" demonstrates which relationship?',
        options: [
          { id: 'a', text: 'Countries with higher income inequality tend to have lower social mobility', isCorrect: true },
          { id: 'b', text: 'Wealthier countries always have more inequality', isCorrect: false },
          { id: 'c', text: 'Social mobility has increased consistently over the past century', isCorrect: false },
          { id: 'd', text: 'Literary characters experience more social mobility than real people', isCorrect: false },
        ],
        hints: ['Consider the irony: the American Dream is hardest to achieve where inequality is greatest.'],
        solution: 'The Great Gatsby Curve shows that countries with more income inequality (like the US) tend to have less intergenerational social mobility -- meaning your parents\' income is a stronger predictor of your own income. This challenges the narrative that inequality is acceptable as long as people have the opportunity to "move up."',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-1-text-2',
      type: 'text',
      content: `## Causes and Responses to Inequality

**What drives inequality?**

The causes of social inequality are complex and debated, but several key factors are widely recognized:

1. **Economic structures:** Market economies naturally produce inequality because some skills, assets, and positions are valued more highly than others. Globalization and technological change have increased returns for highly skilled workers while reducing opportunities for those without advanced education.

2. **Tax and welfare policy:** Government decisions about taxation and social spending have a major impact on inequality. Countries with progressive tax systems and generous welfare states (like the Nordic countries) tend to have lower inequality than those with lower taxes and smaller safety nets (like the US).

3. **Education:** Unequal access to quality education reproduces inequality across generations. When wealthy families can buy better schooling, the education system reinforces rather than reduces class differences.

4. **Discrimination:** Systemic racism, sexism, and other forms of discrimination create barriers for certain groups, limiting their access to education, employment, housing, and wealth accumulation.

5. **Inherited wealth:** The ability to pass on wealth across generations means that the advantages of the past compound over time. Those born into wealthy families start with resources that others can never match through labor alone.

**Different approaches to reducing inequality:**

- **The Nordic model:** High taxes, universal public services, strong unions, and generous welfare. Results in low inequality and high social mobility.
- **The Anglo-American model:** Lower taxes, more reliance on market mechanisms, targeted rather than universal benefits. Results in higher inequality but (theoretically) stronger economic growth.
- **Progressive taxation:** Taxing higher incomes at higher rates to fund public services and redistribution.
- **Universal basic income (UBI):** Providing every citizen with a basic income regardless of employment status -- an idea gaining traction in policy debates worldwide.`,
    },
    {
      id: 'se-3-1-def-2',
      type: 'definition',
      title: 'Key Terms: Inequality and Policy',
      content: `**Progressive taxation:** A tax system where higher earners pay a higher percentage of their income in tax. Designed to reduce inequality by funding public services.

**Welfare state:** A system in which the government provides social safety nets including healthcare, education, unemployment benefits, pensions, and housing support. The Nordic countries are often cited as examples of comprehensive welfare states.

**Austerity:** Government policies that reduce public spending, often cutting welfare programs and public services. Austerity measures are controversial because they tend to affect the poorest members of society most severely.

**Social safety net:** Government programs designed to prevent people from falling into extreme poverty, including unemployment insurance, food assistance, housing subsidies, and disability benefits.

**Universal basic income (UBI):** A proposal to provide every citizen with a regular unconditional cash payment, regardless of employment or income. Proponents argue it would reduce poverty and give people freedom; critics worry about cost and work incentives.

**Intersectionality:** The concept that social inequalities based on class, race, gender, disability, and other categories overlap and interact, creating unique experiences of disadvantage or privilege.`,
    },
    {
      id: 'se-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyze the concept of meritocracy and its critics.',
        subTasks: [
          {
            label: 'a',
            task: 'Explain what a meritocracy is and why many people consider it a fair system.',
            solution: 'A meritocracy is a system where success is determined by individual talent and effort. Many people consider it fair because it rewards hard work and ability rather than family background or social connections. It suggests that outcomes are earned and deserved, which appeals to widely held values of personal responsibility and achievement.',
          },
          {
            label: 'b',
            task: 'Explain at least two criticisms of the idea of meritocracy. Use examples from the chapter to support your arguments.',
            solution: 'Criticism 1: True meritocracy is impossible when starting conditions are unequal. A child born into a wealthy family with access to elite schools, tutoring, and connections does not compete on a level playing field with a child born into poverty. Criticism 2: The myth of meritocracy can be used to justify inequality by implying that those who are poor deserve their poverty -- they simply did not work hard enough. This ignores structural factors like discrimination, inherited wealth, and unequal access to education.',
          },
        ],
        hints: ['Think about what "equal opportunity" really requires', 'Consider the difference between formal equality and substantive equality'],
        solution: 'A strong response will explain meritocracy as an ideal of fairness based on effort and talent, while recognizing that structural inequality makes true meritocracy difficult to achieve in practice.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-3-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Compare the Nordic model and the Anglo-American model for addressing inequality. Write a text of 150-200 words arguing which approach you believe is more effective, using specific evidence and concepts from this chapter.',
        hints: ['Consider outcomes such as the Gini coefficient, social mobility, health, and well-being', 'Think about trade-offs between equality and economic growth', 'Use specific data or examples to support your argument'],
        solution: 'A strong response will compare the two models on key outcomes: the Nordic model produces lower inequality (Gini ~0.27 vs ~0.39), higher social mobility, and better health outcomes, while the Anglo-American model claims to promote innovation and economic dynamism. The best answers will acknowledge trade-offs and avoid oversimplification, recognizing that the Nordic model requires high taxes and strong social trust, while the Anglo-American model produces greater wealth concentration but also greater individual freedom in some domains.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-1-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- Social inequality refers to the unequal distribution of resources, opportunities, and privileges in society
- Inequality operates across multiple dimensions: income, wealth, education, health, and opportunity
- The Gini coefficient measures inequality on a scale from 0 (perfect equality) to 1 (perfect inequality)
- The Great Gatsby Curve shows that higher inequality correlates with lower social mobility
- Key drivers of inequality include economic structures, tax policy, educational access, discrimination, and inherited wealth
- The Nordic model and the Anglo-American model represent different approaches to managing inequality, with significantly different outcomes
- Meritocracy as an ideal is challenged by the reality of unequal starting conditions
- Intersectionality reminds us that different forms of inequality overlap and interact`,
    },
    {
      id: 'se-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Research one specific example of social inequality in an English-speaking country (USA, UK, Australia, or South Africa). Describe the problem, explain its causes, and suggest at least one policy that could help address it. Write 150-200 words.',
        hints: ['Consider housing affordability, educational access, racial wealth gaps, or health disparities', 'Be specific -- focus on one concrete issue rather than trying to cover everything', 'Connect your example to the concepts discussed in this chapter'],
        solution: 'A good response will identify a specific problem (e.g., the racial wealth gap in the US, homelessness in the UK, Indigenous health disparities in Australia), trace its causes to structural factors, and propose a realistic policy response grounded in the concepts from this chapter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Discuss whether Norway is a truly equal society. Consider areas where inequality exists in Norway (e.g., immigrant communities, regional differences, gender) and explain what Norway does well and what could be improved. Write 100-150 words.',
        hints: ['Norway has low inequality by international standards, but it is not perfectly equal', 'Consider differences in outcomes for immigrant groups, regional economic disparities, and gender gaps in certain sectors'],
        solution: 'A thoughtful response will acknowledge that Norway performs well on measures like the Gini coefficient and social mobility, while identifying remaining inequalities such as economic disparities between immigrant and native-born populations, regional differences between urban centers and rural areas, and gender gaps in specific industries and in political representation. The best answers will avoid both uncritical praise and unfair criticism.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Gini coefficient', definition: 'A statistical measure of inequality ranging from 0 (perfect equality) to 1 (perfect inequality).' },
    { term: 'Social mobility', definition: 'The ability of individuals or families to move between social classes over time.' },
    { term: 'Meritocracy', definition: 'A system in which advancement is based on individual ability and effort rather than birth or social connections.' },
    { term: 'Structural inequality', definition: 'Inequality embedded in the institutions, laws, and practices of a society rather than resulting from individual choices.' },
    { term: 'Intersectionality', definition: 'The concept that social inequalities based on class, race, gender, and other categories overlap and interact.' },
  ],
};

// ============================================================================
// CHAPTER 3.2: Immigration and Integration
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_3_2: TextbookChapter = {
  id: 'samf-engelsk-3-2',
  courseId: 'samf-engelsk',
  chapterNumber: '3.2',
  title: 'Immigration and Integration',
  description: 'Explore the causes and consequences of immigration, models of integration, and the debates surrounding multiculturalism in English-speaking societies.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analyze patterns of immigration and their social, economic, and cultural effects',
    'compare different models of integration and multiculturalism in English-speaking countries',
    'discuss the challenges and opportunities of diverse societies',
  ],
  content: [
    {
      id: 'se-3-2-intro',
      type: 'text',
      content: `## Migration in the Modern World

Immigration is one of the most debated social and political issues of our time. Across the English-speaking world -- from the United States to the United Kingdom, from Australia to Canada -- societies are grappling with questions about who should be allowed to enter, how newcomers should be integrated, and what kind of society diversity creates.

**Why do people migrate?**

Migration is driven by a combination of **push factors** (reasons to leave) and **pull factors** (reasons to go to a particular destination):

**Push factors:**
- War, conflict, and political persecution
- Poverty and lack of economic opportunity
- Environmental disasters and climate change
- Discrimination and human rights abuses
- Family separation

**Pull factors:**
- Economic opportunity and higher wages
- Political stability and safety
- Family reunification
- Educational opportunities
- Established diaspora communities

**Scale of global migration:**
- Approximately 281 million people live outside their country of birth (about 3.6% of the world's population)
- The United States has the largest immigrant population in the world (over 50 million)
- Europe has experienced significant immigration, particularly since the 2015 refugee crisis
- Climate change is expected to create tens of millions of additional migrants in coming decades

**Types of migration:**
- **Voluntary migration:** Moving by choice, typically for economic or educational reasons
- **Forced migration:** Fleeing war, persecution, or disaster (refugees and asylum seekers)
- **Documented/undocumented:** Whether migrants have legal authorization to reside in the country
- **Temporary/permanent:** Short-term work visas versus permanent settlement`,
    },
    {
      id: 'se-3-2-def-1',
      type: 'definition',
      title: 'Models of Integration',
      content: `**Assimilation:** The expectation that immigrants will adopt the culture, language, and values of the host society, gradually abandoning their original cultural practices. Historically dominant in countries like France and (to some extent) the United States ("the melting pot").

**Multiculturalism:** A policy and philosophy that recognizes and values cultural diversity within a society. Immigrants are encouraged to maintain their cultural identities while also participating in the wider society. Associated with Canada, Australia, and (until recently) the United Kingdom.

**Integration:** A middle path between assimilation and separation, where immigrants participate fully in the economic, social, and political life of the host society while maintaining important aspects of their cultural heritage. Integration is a two-way process that requires both immigrants and the host society to adapt.

**Segregation:** When immigrant communities and the host society live largely separate lives, with limited interaction. Can be voluntary (choosing to live near others from the same background) or involuntary (resulting from discrimination, poverty, or exclusionary policies).

**Parallel societies:** A term used when immigrant communities develop separate institutions, social networks, and cultural norms that operate alongside -- but largely independent of -- mainstream society. Often used critically in political debate.

**Diaspora:** A community of people who live outside their ancestral homeland but maintain connections to it through culture, language, family ties, and identity.`,
    },
    {
      id: 'se-3-2-example-1',
      type: 'example',
      title: 'Example: Contrasting Immigration Models',
      problem: `Compare how the United States, Canada, and the United Kingdom have approached immigration and integration differently. What can we learn from their experiences?`,
      solution: `**Analysis:**

**The United States -- "The Melting Pot":**
- The US has a long history as a nation of immigrants, with powerful narratives about immigration as central to national identity
- The "melting pot" metaphor suggests that diverse immigrant groups blend together to create a new, unified American culture
- In practice, assimilation has been uneven: European immigrants were gradually accepted as "American," while racial minorities have faced persistent exclusion
- Immigration policy has always been controversial, from the Chinese Exclusion Act (1882) to current debates about border security and undocumented immigrants
- An estimated 11 million undocumented immigrants live in the US, contributing to the economy but lacking legal protections

**Canada -- Official Multiculturalism:**
- Canada adopted official multiculturalism in 1971, the first country in the world to do so
- The Canadian Multiculturalism Act (1988) recognizes cultural diversity as a fundamental characteristic of Canadian society
- Canada uses a points-based immigration system that prioritizes skills, education, and language ability
- Public support for immigration is generally higher in Canada than in other Western nations
- Critics argue that multiculturalism can lead to cultural relativism and has not eliminated discrimination against Indigenous peoples or visible minorities

**The United Kingdom -- From Multiculturalism to Integration:**
- Post-war immigration from former colonies created a diverse society, particularly in cities like London and Birmingham
- Official multiculturalism was embraced in the 1990s and 2000s
- Following the 2005 London bombings, political leaders declared that multiculturalism had "failed" and shifted toward emphasizing "British values" and integration
- Brexit (2016) was partly driven by concerns about immigration from the EU
- The UK experience illustrates how attitudes toward immigration and diversity can shift rapidly in response to events

**Key lessons:**
No single model has produced perfect results. Successful integration requires addressing economic inequality, combating discrimination, and creating genuine opportunities for participation -- not just choosing the right label.`,
    },
    {
      id: 'se-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the key difference between assimilation and multiculturalism as approaches to immigration?',
        options: [
          { id: 'a', text: 'Assimilation expects immigrants to adopt the host culture; multiculturalism values maintaining cultural diversity', isCorrect: true },
          { id: 'b', text: 'Assimilation is only used in Europe; multiculturalism is only used in North America', isCorrect: false },
          { id: 'c', text: 'Assimilation is a modern concept; multiculturalism is a historical one', isCorrect: false },
          { id: 'd', text: 'There is no meaningful difference between the two approaches', isCorrect: false },
        ],
        hints: ['Think about what each approach asks of immigrants regarding their cultural identity.'],
        solution: 'Assimilation asks immigrants to adopt the culture, language, and values of the host society, while multiculturalism recognizes and celebrates cultural diversity, encouraging immigrants to maintain their heritage while participating in the wider society. Integration represents a middle path.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following best explains why Canada\'s immigration policy is often considered successful?',
        options: [
          { id: 'a', text: 'It combines official multiculturalism with a points-based system that selects for skills, and public support for immigration remains relatively high', isCorrect: true },
          { id: 'b', text: 'Canada accepts more immigrants than any other country in the world', isCorrect: false },
          { id: 'c', text: 'Canada requires all immigrants to assimilate completely within five years', isCorrect: false },
          { id: 'd', text: 'Canada only accepts immigrants from English-speaking countries', isCorrect: false },
        ],
        hints: ['Think about both policy design and public attitudes.'],
        solution: 'Canada\'s approach combines several elements: the Multiculturalism Act (1988) signals official support for diversity; the points-based immigration system selects immigrants based on skills, education, and language ability, which helps ensure economic integration; and public attitudes toward immigration are generally more positive than in many other countries, partly because of this institutional framework.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-2-text-2',
      type: 'text',
      content: `## Challenges and Opportunities of Immigration

**Economic impact:**

The economic effects of immigration are extensively studied and frequently misrepresented in public debate:

- **Labor market:** Immigrants fill both high-skilled and low-skilled positions, often taking jobs that native-born workers are unable or unwilling to fill. In the US, immigrants are overrepresented in both Silicon Valley boardrooms and agricultural fields.
- **Fiscal contribution:** Studies consistently show that immigrants, over their lifetimes, contribute more in taxes than they receive in public services -- particularly when they arrive as working-age adults.
- **Innovation:** Immigrants are disproportionately represented among entrepreneurs and patent holders. In the US, over 40% of Fortune 500 companies were founded by immigrants or their children.
- **Wages:** The effect on native workers' wages is debated. Most economists find that immigration has a small positive effect on overall wages, though some studies suggest modest downward pressure on wages for low-skilled native workers.

**Social and cultural impact:**

- **Cultural enrichment:** Immigration brings new perspectives, traditions, cuisines, art forms, and ideas that enrich the cultural life of host societies
- **Identity and belonging:** Immigrants and their children often navigate complex identities, balancing heritage and belonging in new contexts
- **Social tensions:** Immigration can create tensions when communities feel that rapid change threatens their way of life, particularly when economic resources are scarce
- **Second-generation challenges:** Children of immigrants may face unique pressures, caught between parental culture and the culture of their peers and schools

**The integration paradox:**
Research shows that second-generation immigrants are often more dissatisfied with discrimination than their parents, even though they are objectively more integrated. This may be because the second generation has higher expectations of equal treatment and is more aware of the gap between the promise of equality and the reality of discrimination.`,
    },
    {
      id: 'se-3-2-def-2',
      type: 'definition',
      title: 'Key Terms: Immigration and Integration',
      content: `**Push and pull factors:** Forces that drive migration -- push factors motivate people to leave (war, poverty, persecution) while pull factors attract them to a destination (opportunity, safety, family).

**Refugee:** A person who has been forced to flee their country due to war, persecution, or natural disaster and cannot return safely. Refugees have specific protections under international law (the 1951 Refugee Convention).

**Asylum seeker:** A person who has applied for refugee status but whose claim has not yet been decided. They are seeking international protection.

**Undocumented immigrant:** A person residing in a country without legal authorization. Also referred to as "irregular" or "unauthorized" migrants. The term "illegal immigrant" is increasingly avoided because it defines people by their legal status rather than treating illegality as a characteristic of their situation.

**Brain drain:** The emigration of highly skilled and educated individuals from developing countries to developed ones, depriving the origin countries of talent and investment in education.

**Integration paradox:** The finding that second-generation immigrants often report more experiences of discrimination than their parents, despite being more socially and economically integrated.`,
    },
    {
      id: 'se-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Discuss the challenges and opportunities of immigration.',
        subTasks: [
          {
            label: 'a',
            task: 'Explain three ways in which immigration benefits the economy of the host country. Use specific examples from English-speaking countries.',
            solution: '1) Immigrants fill critical gaps in the labor market, from technology workers in Silicon Valley to agricultural workers across the US. 2) Immigrants contribute more in taxes over their lifetimes than they receive in benefits, especially when arriving as working-age adults. 3) Immigrants drive innovation -- over 40% of Fortune 500 companies were founded by immigrants or their children, and immigrants are overrepresented among patent holders and entrepreneurs.',
          },
          {
            label: 'b',
            task: 'Explain the "integration paradox." Why might second-generation immigrants feel more frustrated about discrimination than their parents?',
            solution: 'The integration paradox refers to the finding that second-generation immigrants often report more discrimination despite being more integrated. This happens because: the second generation has grown up in the host society and expects to be treated as equals; they are more aware of discrimination and more willing to name it; they compare themselves to native-born peers rather than to conditions in their parents\' home country; and they have internalized the host society\'s values of equality, making the gap between promise and reality more painful.',
          },
        ],
        hints: ['Use specific data and examples', 'Think about the difference between first-generation and second-generation experiences'],
        solution: 'A strong response will present specific evidence for the economic benefits of immigration and thoughtfully explain the psychological and sociological dimensions of the integration paradox.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a text of 200-250 words discussing which model of integration (assimilation, multiculturalism, or integration) you believe works best. Support your argument with examples from at least two different countries discussed in this chapter.',
        hints: ['Consider what "works best" means -- best for whom, and by what measures?', 'Think about both outcomes (economic, social) and values (individual rights, cultural preservation)', 'No model has been perfect -- acknowledge limitations'],
        solution: 'A strong response will argue a clear position while acknowledging complexity. For multiculturalism: point to Canada\'s relatively successful model and high public support. For integration: point to the two-way process as more realistic than either assimilation or pure multiculturalism. For assimilation: argue that a shared civic culture is necessary for social cohesion. The best answers will define their criteria for success and address counterarguments.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-2-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- Immigration is driven by push factors (war, poverty, persecution) and pull factors (opportunity, safety, family)
- Models of integration range from assimilation (adopt host culture) to multiculturalism (maintain diversity) to integration (a two-way process)
- The United States, Canada, and the United Kingdom have taken different approaches with different outcomes
- Immigration brings significant economic benefits including labor, tax revenue, and innovation
- Social challenges include identity negotiation, cultural tension, and discrimination
- The integration paradox shows that greater objective integration does not always produce greater subjective satisfaction
- Immigration debates are often more emotional than evidence-based -- understanding the data is essential for informed discussion`,
    },
    {
      id: 'se-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Compare Norway\'s approach to immigration and integration with one of the English-speaking countries discussed in this chapter. What are the similarities and differences? Write 100-150 words.',
        hints: ['Consider Norway\'s integration policies, welfare state model, and public debate about immigration', 'Think about both policy and public attitudes'],
        solution: 'A good response will identify Norway\'s emphasis on integration (language courses, introduction programs, welfare state support) and compare it to, for example, Canada\'s official multiculturalism or the UK\'s shifting approach. Key points might include Norway\'s smaller scale, generous welfare provisions, introduction program (introduksjonsprogrammet), and the tension between universal welfare and immigration skepticism.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-3-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Explain the difference between a refugee, an asylum seeker, and an undocumented immigrant. Why is the distinction important in political and legal discussions about immigration?',
        hints: ['Consider the legal protections each category receives', 'Think about how these terms are sometimes conflated in public debate'],
        solution: 'A refugee has been recognized as having fled persecution and has legal protections under the 1951 Refugee Convention. An asylum seeker has applied for this status but has not yet received a decision. An undocumented immigrant resides in a country without legal authorization for various reasons. The distinction matters because these groups have different legal rights and protections, but they are often conflated in political debate, leading to misunderstandings about obligations and appropriate policy responses.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Multiculturalism', definition: 'A policy recognizing and valuing cultural diversity, encouraging immigrants to maintain their heritage while participating in wider society.' },
    { term: 'Assimilation', definition: 'The expectation that immigrants adopt the culture, language, and values of the host society.' },
    { term: 'Push and pull factors', definition: 'Forces that drive migration: push factors motivate leaving, pull factors attract to a destination.' },
    { term: 'Integration paradox', definition: 'The finding that second-generation immigrants report more discrimination despite being more integrated.' },
    { term: 'Diaspora', definition: 'A community of people living outside their ancestral homeland while maintaining cultural connections to it.' },
  ],
};

// ============================================================================
// CHAPTER 3.3: Social Movements and Activism
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_3_3: TextbookChapter = {
  id: 'samf-engelsk-3-3',
  courseId: 'samf-engelsk',
  chapterNumber: '3.3',
  title: 'Social Movements and Activism',
  description: 'Investigate how social movements have shaped English-speaking societies, from the civil rights movement to modern digital activism, and analyze the strategies and impacts of collective action.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analyze the role of social movements in creating social and political change',
    'compare historical and contemporary forms of activism in English-speaking countries',
    'evaluate the effectiveness of different strategies for social change',
  ],
  content: [
    {
      id: 'se-3-3-intro',
      type: 'text',
      content: `## The Power of Collective Action

Throughout history, social movements have been the primary engine of progressive change. From the abolition of slavery to women's suffrage, from civil rights to marriage equality, ordinary people organizing collectively have reshaped laws, institutions, and cultural attitudes. Understanding how social movements work is essential for understanding how societies change -- and how citizens can participate in shaping their world.

**What is a social movement?**

A social movement is an organized, sustained effort by a group of people to promote or resist social change. Social movements differ from other forms of political participation in several key ways:

- **Collective:** They involve groups of people acting together, not isolated individuals
- **Sustained:** They persist over time, unlike one-off protests or events
- **Purposeful:** They have identifiable goals -- changing a law, shifting public attitudes, or transforming institutional practices
- **Contentious:** They challenge existing power structures and often face resistance from those who benefit from the status quo
- **Identity-forming:** Participation in a movement often creates a shared sense of identity and purpose among participants

**Why do social movements emerge?**

Social movements typically emerge when three conditions are present:
1. **Grievance:** A significant group of people experiences injustice, deprivation, or frustration
2. **Opportunity:** Political conditions allow for collective action (free speech, free assembly, sympathetic allies in government)
3. **Resources:** The group has access to the tools needed for organizing -- leadership, networks, communication channels, funding`,
    },
    {
      id: 'se-3-3-def-1',
      type: 'definition',
      title: 'Types and Strategies of Social Movements',
      content: `**Reform movement:** Seeks to change specific aspects of society without overturning the existing system. Example: the movement for marriage equality.

**Revolutionary movement:** Seeks fundamental transformation of the political, economic, or social order. Example: the anti-apartheid movement in South Africa.

**Resistance movement:** Seeks to prevent or reverse social changes that threaten a group's values or interests. Example: opposition to immigration reform.

**Civil disobedience:** The deliberate, nonviolent violation of a law considered unjust, with the acceptance of legal consequences. Popularized by figures such as Henry David Thoreau, Mahatma Gandhi, and Martin Luther King Jr.

**Nonviolent resistance:** A strategy of social change that uses tactics such as boycotts, sit-ins, marches, strikes, and civil disobedience while refusing to use violence. Research shows that nonviolent campaigns are historically more successful than violent ones.

**Direct action:** Protest activities that go beyond conventional political channels, including demonstrations, occupations, blockades, and strikes.

**Grassroots organizing:** Building a movement from the ground up, starting with local communities and ordinary citizens rather than political elites or established institutions.

**Slacktivism:** A critical term for low-effort forms of online activism (liking, sharing, signing online petitions) that may make participants feel good without producing meaningful change. Also called "clicktivism."`,
    },
    {
      id: 'se-3-3-example-1',
      type: 'example',
      title: 'Example: The Civil Rights Movement in the United States',
      problem: `The American civil rights movement (1954-1968) is one of the most studied and influential social movements in history. Analyze its key strategies and achievements.`,
      solution: `**The Civil Rights Movement -- A Case Study in Effective Social Action:**

**Context:**
Following the Civil War and the abolition of slavery (1865), African Americans in the southern United States were subjected to Jim Crow laws -- a system of racial segregation enforced by law and by violence. Black Americans were denied the right to vote, excluded from public facilities, denied equal education, and subjected to widespread discrimination and racial terror including lynching.

**Key strategies:**

1. **Legal challenges:** The NAACP (National Association for the Advancement of Colored People) systematically challenged segregation through the courts. The landmark case *Brown v. Board of Education* (1954) ruled that school segregation was unconstitutional.

2. **Nonviolent direct action:** Inspired by Mahatma Gandhi, leaders like Martin Luther King Jr. organized boycotts (Montgomery Bus Boycott, 1955-56), sit-ins (Greensboro, 1960), Freedom Rides (1961), and marches (March on Washington, 1963; Selma to Montgomery, 1965).

3. **Moral persuasion:** The movement deliberately exposed the violence of segregation to national and international audiences. Television coverage of peaceful protesters being attacked with fire hoses and police dogs created moral outrage and political pressure.

4. **Coalition building:** The movement built alliances with white liberals, religious leaders, labor unions, and sympathetic politicians to create a broad coalition for change.

5. **Legislative pressure:** The movement's efforts led directly to major legislation: the Civil Rights Act (1964), which banned discrimination, and the Voting Rights Act (1965), which protected Black voting rights.

**Legacy and limitations:**
The civil rights movement transformed American law and culture, ending legal segregation and securing voting rights. However, it did not eliminate racial inequality. Disparities in wealth, education, health, and criminal justice persist, demonstrating that legal change alone cannot undo centuries of structural racism.`,
    },
    {
      id: 'se-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What three conditions typically need to be present for a social movement to emerge?',
        options: [
          { id: 'a', text: 'Grievance, political opportunity, and resources for organizing', isCorrect: true },
          { id: 'b', text: 'Money, technology, and government approval', isCorrect: false },
          { id: 'c', text: 'A charismatic leader, media coverage, and international support', isCorrect: false },
          { id: 'd', text: 'A majority of the population, a written plan, and legal authorization', isCorrect: false },
        ],
        hints: ['Think about what a group needs to both want change and be able to act on that desire.'],
        solution: 'Social movements emerge when a significant group experiences injustice (grievance), when political conditions allow collective action (opportunity -- free speech, assembly, sympathetic allies), and when the group has access to organizing tools (resources -- leadership, networks, communication channels). All three are typically necessary.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-3-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Why was nonviolent direct action an effective strategy for the civil rights movement?',
        options: [
          { id: 'a', text: 'It exposed the violence of segregation to national audiences, creating moral outrage and political pressure for change', isCorrect: true },
          { id: 'b', text: 'It was the only strategy available to the movement', isCorrect: false },
          { id: 'c', text: 'Violent resistance would have been more effective but was illegal', isCorrect: false },
          { id: 'd', text: 'The government had already decided to end segregation before the protests began', isCorrect: false },
        ],
        hints: ['Think about the role of television and media in the 1950s and 1960s.'],
        solution: 'Nonviolent direct action was strategically brilliant because it forced the conflict into the open. When peaceful protesters were met with violence -- fire hoses, police dogs, beatings -- and this was broadcast on national television, it created widespread moral outrage. This shifted public opinion and created political pressure on Congress and the President to act. Research also shows that nonviolent movements are historically more successful than violent ones because they attract broader participation and sympathy.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-3-text-2',
      type: 'text',
      content: `## Modern Activism: From the Streets to the Screens

The rise of social media has transformed how social movements organize, communicate, and mobilize. Digital platforms have created new possibilities for activism while also raising questions about its effectiveness and sustainability.

**Key modern movements:**

**Black Lives Matter (2013-present):**
- Founded by Alicia Garza, Patrisse Cullors, and Opal Tometi after the acquittal of George Zimmerman in the shooting of Trayvon Martin
- Grew into a global movement after the murder of George Floyd by a police officer in 2020
- Uses social media for organizing, documenting police violence, and sharing personal stories
- Decentralized structure with local chapters rather than a single leader
- Sparked the largest protest movement in American history (an estimated 15-26 million people participated in George Floyd protests)

**Fridays for Future / School Strikes for Climate (2018-present):**
- Initiated by Swedish teenager Greta Thunberg, who began protesting alone outside the Swedish parliament
- Grew into a global movement through social media, with millions of young people participating in school strikes
- Demonstrates the power of individual action to spark collective movements
- Raises questions about the relationship between protest and policy change

**#MeToo (2017-present):**
- Popularized by actress Alyssa Milano, building on work by activist Tarana Burke
- Used social media to reveal the widespread nature of sexual harassment and assault
- Led to the downfall of powerful figures in entertainment, media, politics, and business
- Demonstrates how digital platforms can amplify voices that have been silenced

**Strengths of digital activism:**
- Rapid mobilization: movements can scale from local to global in days
- Low barriers to participation: anyone with a phone can contribute
- Documentation: police violence, rights abuses, and injustice can be recorded and shared instantly
- Global solidarity: movements can connect across borders

**Weaknesses of digital activism:**
- "Slacktivism": online participation may substitute for meaningful action
- Filter bubbles: social media algorithms may limit exposure to opposing views
- Burnout: the constant stream of outrage can be emotionally exhausting
- State surveillance: governments can monitor and suppress digital activism
- Short attention spans: online movements may lose momentum quickly`,
    },
    {
      id: 'se-3-3-def-2',
      type: 'definition',
      title: 'Key Terms: Social Movements and Activism',
      content: `**Social movement:** An organized, sustained collective effort to promote or resist social change, challenging existing power structures.

**Civil disobedience:** Deliberate, nonviolent violation of laws considered unjust, with acceptance of legal consequences. Associated with Thoreau, Gandhi, and King.

**Hashtag activism:** The use of social media hashtags to raise awareness and build movements around social issues. Examples include #BlackLivesMatter, #MeToo, and #FridaysForFuture.

**Intersectionality:** In the context of social movements, the recognition that different forms of oppression (racism, sexism, classism, homophobia) are interconnected and cannot be addressed in isolation.

**Allyship:** The practice of members of a privileged group supporting and advocating for members of a marginalized group, using their privilege to amplify marginalized voices.

**Backlash:** Organized resistance to social change, often by those who feel threatened by the goals of a social movement. Backlash can take political, cultural, or violent forms.`,
    },
    {
      id: 'se-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Compare historical and digital activism.',
        subTasks: [
          {
            label: 'a',
            task: 'Identify two advantages and two disadvantages of digital activism compared to traditional forms of protest (marches, sit-ins, boycotts).',
            solution: 'Advantages: 1) Digital activism allows rapid, global mobilization -- movements can scale from local to worldwide in days through social media. 2) Low barriers to participation mean that anyone with internet access can contribute, document injustice, and share their story. Disadvantages: 1) "Slacktivism" -- clicking "share" or "like" may feel like participation without producing real change. 2) Digital movements can lose momentum quickly because online attention is fleeting and there is always a new cause competing for attention.',
          },
          {
            label: 'b',
            task: 'Using a specific example from this chapter, explain how a modern movement has combined digital and traditional activism strategies.',
            solution: 'Black Lives Matter combined digital and traditional activism: social media was used to document police violence (recording and sharing videos), organize protests (coordinating through platforms), and build a narrative (hashtags and personal stories). But the movement also used traditional tactics: mass street protests (estimated 15-26 million participants in George Floyd protests), community organizing through local chapters, and political engagement including voter registration drives. This combination of digital reach and physical presence made it the largest protest movement in American history.',
          },
        ],
        hints: ['Think about what digital tools can and cannot do', 'Consider the civil rights movement as a baseline for traditional activism'],
        solution: 'A good response will show understanding of both the power and limitations of digital activism, and recognize that the most effective modern movements combine online and offline strategies.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Discussion essay (200-250 words): "Social media has made activism easier but less effective." Do you agree or disagree? Use examples from at least two social movements discussed in this chapter to support your argument.',
        hints: ['Define what "effective" means -- is it raising awareness, changing laws, shifting culture, or all three?', 'Consider both the civil rights movement and a modern movement', 'Think about the difference between visibility and impact'],
        solution: 'A strong response will engage critically with the claim. Arguments for: social media makes participation too easy ("slacktivism"), online movements may lack sustained pressure, and filter bubbles limit persuasion. Arguments against: BLM became the largest protest movement in US history partly through social media; #MeToo led to real consequences for powerful figures; digital tools allow documentation and organization at unprecedented scale. The best answers will argue that effectiveness depends on how digital tools are used and whether online activism is connected to offline action.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-3-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- Social movements are organized, sustained collective efforts to promote or resist social change
- They emerge when grievance, political opportunity, and organizing resources come together
- The civil rights movement demonstrated the power of nonviolent direct action, legal challenges, moral persuasion, and coalition building
- Modern movements like Black Lives Matter, #MeToo, and Fridays for Future use digital tools for rapid mobilization, documentation, and global solidarity
- Digital activism has both strengths (speed, scale, low barriers) and weaknesses (slacktivism, filter bubbles, short attention spans)
- The most effective modern movements combine digital and traditional activism strategies
- Social change is rarely quick or complete -- even successful movements face backlash and unfinished agendas`,
    },
    {
      id: 'se-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Choose a social issue you care about (climate change, racial justice, gender equality, LGBTQ+ rights, or another issue). Describe one historical and one modern strategy that activists have used to address this issue, and evaluate which has been more effective. Write 100-150 words.',
        hints: ['Be specific about strategies, not just general statements about "protesting"', 'Consider what "effective" means in this context'],
        solution: 'A good response will identify a specific issue, describe concrete strategies used historically and in the modern era, and evaluate their effectiveness with reasoning. For example, for climate change: historical -- lobbying for environmental legislation (Clean Air Act); modern -- school strikes and social media campaigns. The evaluation should consider what each strategy achieved and what its limitations were.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Explain the concept of "slacktivism." Do you think sharing posts and signing online petitions can create real social change, or does it mainly serve to make participants feel good? Give reasons for your view.',
        hints: ['Think about your own experience with online activism', 'Consider whether online actions can lead to offline consequences'],
        solution: 'A thoughtful response will define slacktivism as low-effort online activism and then evaluate its impact. While sharing a post alone may not change policy, it can raise awareness, shift cultural norms, and create social pressure. Online petitions have sometimes led to concrete policy changes. The key question is whether online participation supplements or substitutes for more demanding forms of engagement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Social movement', definition: 'An organized, sustained collective effort to promote or resist social change.' },
    { term: 'Civil disobedience', definition: 'Deliberate, nonviolent violation of laws considered unjust, with acceptance of legal consequences.' },
    { term: 'Nonviolent resistance', definition: 'A strategy using boycotts, sit-ins, marches, and strikes while refusing to use violence.' },
    { term: 'Slacktivism', definition: 'Low-effort online activism that may substitute for meaningful engagement.' },
    { term: 'Grassroots organizing', definition: 'Building a movement from the ground up, starting with local communities and ordinary citizens.' },
  ],
};

// ============================================================================
// CHAPTER 3.4: Gender Equality
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_3_4: TextbookChapter = {
  id: 'samf-engelsk-3-4',
  courseId: 'samf-engelsk',
  chapterNumber: '3.4',
  title: 'Gender Equality',
  description: 'Analyze the history, current state, and ongoing challenges of gender equality in English-speaking societies, including the feminist movement, the gender pay gap, and intersectional perspectives.',
  estimatedMinutes: 23,
  competenceGoals: [
    'analyze the development of gender equality in English-speaking countries and globally',
    'discuss the ongoing challenges to gender equality including the pay gap, representation, and gender-based violence',
    'reflect on intersectional perspectives on gender and how gender interacts with other social categories',
  ],
  content: [
    {
      id: 'se-3-4-intro',
      type: 'text',
      content: `## The Struggle for Gender Equality

Gender equality -- the principle that all people should have equal rights, opportunities, and treatment regardless of gender -- is one of the defining social issues of modern history. While significant progress has been made over the past century, particularly in Western democracies, gender inequality persists in virtually every society on earth.

**A brief history of women's rights in the English-speaking world:**

**First wave feminism (mid-1800s to 1920s):**
- Focused on legal rights, particularly the right to vote (suffrage)
- The Seneca Falls Convention (1848) in the US is often considered the beginning of the organized women's rights movement
- Women gained the right to vote: New Zealand (1893), Australia (1902), UK (1918/1928), US (1920)
- Also fought for property rights, access to education, and reforms to marriage law

**Second wave feminism (1960s-1980s):**
- Expanded the agenda beyond legal equality to include workplace discrimination, reproductive rights, domestic violence, and sexual harassment
- Betty Friedan's *The Feminine Mystique* (1963) challenged the idea that women's fulfillment came only through homemaking
- Key achievements: anti-discrimination laws, access to contraception and abortion, greater educational and workplace opportunities
- The slogan "the personal is political" captured the idea that private issues like domestic violence and childcare are political problems

**Third wave feminism (1990s-2000s):**
- Embraced diversity, questioning whether the feminist movement had been too focused on the experiences of white, middle-class women
- Introduced intersectionality -- the recognition that gender, race, class, sexuality, and disability interact to create different experiences of oppression
- Reclaimed femininity and sexuality as sources of empowerment rather than oppression

**Fourth wave feminism (2010s-present):**
- Characterized by digital activism, #MeToo, body positivity, and attention to sexual harassment and consent
- Global scope, connecting feminist struggles across countries and cultures
- Continued emphasis on intersectionality and inclusion of transgender and non-binary experiences`,
    },
    {
      id: 'se-3-4-def-1',
      type: 'definition',
      title: 'Core Concepts in Gender Equality',
      content: `**Gender equality:** The principle that all people should have equal rights, responsibilities, and opportunities regardless of gender.

**Gender equity:** Fairness in treatment based on respective needs. Gender equity may involve different treatment for different genders in order to achieve equal outcomes (e.g., parental leave policies that recognize biological differences while promoting equal parenting).

**Feminism:** A range of social, political, and economic movements sharing the goal of defining and establishing gender equality. Feminism is not a single ideology but encompasses diverse perspectives.

**Patriarchy:** A social system in which men hold primary power and dominate in roles of political leadership, moral authority, social privilege, and control over property. Feminist analysis sees patriarchy as a structural feature of society, not just the attitudes of individual men.

**Glass ceiling:** An invisible barrier that prevents women (and other marginalized groups) from advancing beyond a certain level in organizations, despite having the qualifications and ability. The term captures the fact that the barrier is often unacknowledged.

**Intersectionality:** A concept developed by legal scholar Kimberle Crenshaw (1989) arguing that different forms of discrimination -- based on gender, race, class, sexuality, disability -- intersect and compound each other. A Black woman's experience of gender discrimination differs from a white woman's because it is shaped by racial discrimination as well.

**Toxic masculinity:** Culturally constructed norms of male behavior that emphasize dominance, aggression, emotional suppression, and risk-taking. These norms harm both men (higher suicide rates, reluctance to seek help) and women (domestic violence, harassment).`,
    },
    {
      id: 'se-3-4-example-1',
      type: 'example',
      title: 'Example: The Gender Pay Gap',
      problem: `The gender pay gap remains a persistent issue across the English-speaking world. Examine the evidence and explanations for this gap.`,
      solution: `**The Gender Pay Gap -- Evidence and Analysis:**

**The numbers:**
- In the United States, women earn approximately 82 cents for every dollar earned by men (2023 data)
- In the United Kingdom, the gender pay gap is approximately 14.3% (median hourly pay)
- In Australia, the gap is approximately 13.3%
- In Norway, the gap is approximately 11.5% -- lower than most countries but still significant

**Explanations for the pay gap:**

**1. Occupational segregation:**
Women and men tend to work in different occupations, and female-dominated fields (care work, education, administration) are typically paid less than male-dominated fields (engineering, finance, technology). This raises the question: are these jobs paid less because they require less skill, or because they are done by women?

**2. The "motherhood penalty":**
Women's earnings drop significantly after having children, while men's do not. This reflects both workplace discrimination against mothers and the unequal division of unpaid care work. Women still perform the majority of childcare and housework in most societies.

**3. Negotiation and self-promotion:**
Research shows that women are less likely to negotiate for higher salaries, and when they do, they may face social penalties (being seen as "aggressive" or "difficult"). This reflects gender norms rather than innate differences.

**4. Direct discrimination:**
Despite being illegal in most countries, direct pay discrimination persists. Women may be paid less for the same work, denied promotions, or channeled into lower-paying roles.

**5. Part-time work:**
Women are more likely to work part-time (often due to caregiving responsibilities), which typically pays less per hour and offers fewer opportunities for advancement.

**The intersectional dimension:**
The pay gap is larger for women of color. In the US, Black women earn approximately 67 cents and Latina women approximately 57 cents for every dollar earned by white men. Gender and race compound each other.`,
    },
    {
      id: 'se-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What was the primary focus of first wave feminism?',
        options: [
          { id: 'a', text: 'Legal rights, particularly the right to vote (women\'s suffrage)', isCorrect: true },
          { id: 'b', text: 'Social media activism and the #MeToo movement', isCorrect: false },
          { id: 'c', text: 'Closing the gender pay gap in the workplace', isCorrect: false },
          { id: 'd', text: 'Intersectionality and transgender rights', isCorrect: false },
        ],
        hints: ['Think about the historical period -- mid-1800s to 1920s.'],
        solution: 'First wave feminism (mid-1800s to 1920s) focused primarily on legal rights, especially women\'s suffrage -- the right to vote. The movement also fought for property rights, access to education, and legal reforms to marriage law. Later waves expanded the agenda to include workplace equality, reproductive rights, intersectionality, and digital activism.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What does the concept of intersectionality add to our understanding of gender inequality?',
        options: [
          { id: 'a', text: 'It shows that gender discrimination interacts with race, class, and other forms of discrimination to create unique experiences of oppression', isCorrect: true },
          { id: 'b', text: 'It argues that gender is the most important form of discrimination', isCorrect: false },
          { id: 'c', text: 'It claims that all women experience gender inequality in exactly the same way', isCorrect: false },
          { id: 'd', text: 'It focuses exclusively on workplace discrimination', isCorrect: false },
        ],
        hints: ['Think about how a Black woman\'s experience of sexism differs from a white woman\'s.'],
        solution: 'Intersectionality, developed by Kimberle Crenshaw, shows that different forms of discrimination do not exist in isolation but interact and compound each other. A Black woman does not experience racism and sexism separately -- they combine to create a unique form of discrimination. This explains why the gender pay gap is larger for women of color and why feminist movements need to address multiple forms of inequality.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-4-text-2',
      type: 'text',
      content: `## Gender Equality Today: Progress and Remaining Challenges

**Where has progress been made?**

- **Education:** In most English-speaking countries, women now outnumber men in higher education. Women earn the majority of bachelor's and master's degrees.
- **Legal rights:** Laws prohibiting gender discrimination in employment, education, and public life exist in all major English-speaking countries.
- **Representation:** Women's representation in politics and corporate leadership has increased, though it remains far from equal.
- **Cultural change:** Attitudes toward gender roles have shifted significantly, with growing acceptance of women in all professions and of men taking active parenting roles.

**Where do significant challenges remain?**

1. **Political representation:** Women hold approximately 28% of seats in the US Congress, 35% in the UK Parliament, and 45% in the Norwegian Parliament. Only the Nordic countries approach gender parity in politics.

2. **Corporate leadership:** Women hold only about 10% of CEO positions in Fortune 500 companies. The "glass ceiling" remains intact at the highest levels of corporate power.

3. **Gender-based violence:** An estimated one in three women worldwide experiences physical or sexual violence in her lifetime. Domestic violence, sexual assault, and harassment remain pervasive problems.

4. **Unpaid care work:** Women perform approximately 75% of the world's unpaid care work -- childcare, elder care, cooking, cleaning. This "invisible labor" is essential to the economy but is not counted in GDP or compensated.

5. **Reproductive rights:** Access to reproductive healthcare, including contraception and abortion, remains contested in many countries. The US Supreme Court's overturning of *Roe v. Wade* (2022) removed the federal right to abortion.

6. **Men's issues:** Gender equality is not only about women. Men face higher rates of suicide, workplace death, incarceration, and homelessness. Traditional masculinity norms discourage men from seeking help for mental health problems.

**The Nordic model for gender equality:**

Norway and the other Nordic countries are often considered global leaders in gender equality. Key policies include:
- Generous parental leave with a "father's quota" encouraging men to take time off
- Subsidized childcare
- Gender quotas for corporate boards (Norway requires 40% female board members)
- Strong legal protections against discrimination
- Cultural emphasis on equality and shared parenting`,
    },
    {
      id: 'se-3-4-def-2',
      type: 'definition',
      title: 'Key Terms: Gender Equality',
      content: `**Gender pay gap:** The difference between the average earnings of men and women. Can be measured as the "unadjusted" gap (overall difference) or the "adjusted" gap (controlling for factors like occupation, hours worked, and experience).

**Glass ceiling:** The invisible barrier preventing women from reaching the highest levels of leadership in organizations, despite having the qualifications.

**Motherhood penalty:** The reduction in earnings and career advancement experienced by women after having children, partly due to workplace discrimination and partly due to the unequal division of care work.

**Unpaid care work:** Essential work including childcare, elder care, cooking, cleaning, and household management that is overwhelmingly performed by women and is not counted in economic measures like GDP.

**Gender quota:** A policy requiring a minimum representation of each gender in political bodies, corporate boards, or other institutions. Norway pioneered corporate board gender quotas.

**Reproductive rights:** Rights relating to reproduction and reproductive health, including access to contraception, abortion, fertility treatment, and sex education.`,
    },
    {
      id: 'se-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyze the gender pay gap.',
        subTasks: [
          {
            label: 'a',
            task: 'Identify and explain three different causes of the gender pay gap discussed in this chapter.',
            solution: '1) Occupational segregation: women and men tend to work in different fields, and female-dominated jobs are paid less. 2) The motherhood penalty: women\'s earnings drop after having children due to time out of the workforce, reduced hours, and employer discrimination against mothers. 3) Direct discrimination: women may be paid less for the same work or denied promotions, despite anti-discrimination laws.',
          },
          {
            label: 'b',
            task: 'Explain why the gender pay gap is larger for women of color. How does the concept of intersectionality help us understand this?',
            solution: 'Women of color face both gender discrimination and racial discrimination simultaneously. Intersectionality shows that these forms of oppression are not additive but compound each other in unique ways. A Black woman does not simply experience "racism + sexism" -- she experiences a specific form of discrimination that reflects both. This explains the larger pay gap: Black women earn 67 cents and Latina women 57 cents for every dollar earned by white men, compared to 82 cents for white women.',
          },
        ],
        hints: ['Think about both structural and individual-level explanations', 'Consider how race and gender interact'],
        solution: 'A strong response will identify multiple causes and demonstrate understanding of intersectionality as an analytical framework for understanding compounded discrimination.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a text of 200-250 words evaluating Norway\'s approach to gender equality. What has Norway done well, and what challenges remain? Compare Norway\'s approach to that of at least one other country discussed in this chapter.',
        hints: ['Consider specific policies like the father\'s quota, board quotas, and subsidized childcare', 'Think about remaining challenges such as occupational segregation, the pay gap, and the division of care work', 'Compare with the US or UK to highlight both strengths and areas for improvement'],
        solution: 'A strong response will identify Norway\'s key policies (parental leave with father\'s quota, corporate board quotas, subsidized childcare, strong anti-discrimination laws) and acknowledge their success in producing higher female labor participation, political representation, and lower pay gaps compared to countries like the US and UK. It should also identify remaining challenges: occupational segregation remains significant (few women in STEM, few men in care work), the pay gap still exists, and unpaid care work is still unequally distributed. The best answers will compare Norway\'s structural approach with the more individualistic approach of countries like the US.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-4-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- The feminist movement has progressed through four waves, each expanding the agenda for gender equality
- Significant progress has been made in education, legal rights, and cultural attitudes
- Persistent challenges include the gender pay gap, the glass ceiling, gender-based violence, and unequal care work
- The gender pay gap has multiple causes: occupational segregation, the motherhood penalty, discrimination, and negotiation disparities
- Intersectionality shows that gender inequality is experienced differently depending on race, class, sexuality, and other social categories
- The Nordic countries, particularly Norway, offer a model of structural approaches to gender equality including parental leave, childcare, and quotas
- Gender equality is not only a women's issue -- men also face gender-specific challenges including mental health stigma and rigid masculinity norms`,
    },
    {
      id: 'se-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Discuss the concept of "toxic masculinity." What does it mean, how does it affect both men and women, and what could be done to address it? Write 100-150 words.',
        hints: ['Toxic masculinity refers to harmful cultural norms, not to masculinity itself', 'Think about how rigid gender norms affect men\'s mental health and behavior'],
        solution: 'A good response will define toxic masculinity as culturally constructed norms emphasizing dominance, emotional suppression, and aggression -- not as an attack on masculinity itself. It harms men through higher suicide rates, reluctance to seek mental health support, and pressure to conform to rigid roles. It harms women through the normalization of aggression and dominance in relationships. Solutions include challenging restrictive gender norms, promoting emotional literacy for boys and men, and modeling diverse forms of masculinity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-3-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Do you consider yourself a feminist? Why or why not? Write a thoughtful reflection (100-150 words) explaining your position. Be sure to engage with the definition of feminism presented in this chapter.',
        hints: ['Review the definition of feminism as a range of movements sharing the goal of gender equality', 'Consider whether your position is based on the actual definition or on stereotypes about feminism'],
        solution: 'A strong response will engage honestly with the question and demonstrate understanding of feminism as defined in the chapter -- a range of movements sharing the goal of gender equality. Whether the student identifies as a feminist or not, the answer should be based on an accurate understanding of the term rather than stereotypes, and should reflect critical thinking about gender equality as a social issue.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Feminism', definition: 'A range of social, political, and economic movements sharing the goal of defining and establishing gender equality.' },
    { term: 'Intersectionality', definition: 'The concept that discrimination based on gender, race, class, and other categories intersects and compounds.' },
    { term: 'Glass ceiling', definition: 'An invisible barrier preventing women from reaching the highest levels of organizational leadership.' },
    { term: 'Gender pay gap', definition: 'The difference between the average earnings of men and women in the workforce.' },
    { term: 'Patriarchy', definition: 'A social system in which men hold primary power in political leadership, moral authority, and social privilege.' },
  ],
};

// ============================================================================
// CHAPTER 3.5: Indigenous Peoples' Rights
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_3_5: TextbookChapter = {
  id: 'samf-engelsk-3-5',
  courseId: 'samf-engelsk',
  chapterNumber: '3.5',
  title: "Indigenous Peoples' Rights",
  description: "Examine the history of colonialism's impact on indigenous peoples, current struggles for rights and recognition, and the process of truth and reconciliation in English-speaking countries and Norway.",
  estimatedMinutes: 24,
  competenceGoals: [
    'analyze the historical and ongoing impact of colonialism on indigenous peoples in English-speaking countries',
    'discuss the concepts of self-determination, land rights, and cultural preservation for indigenous communities',
    'compare approaches to truth, reconciliation, and indigenous rights across different countries',
  ],
  content: [
    {
      id: 'se-3-5-intro',
      type: 'text',
      content: `## Indigenous Peoples and the Legacy of Colonialism

Across the English-speaking world, indigenous peoples -- the original inhabitants of lands later colonized by European powers -- continue to face the consequences of centuries of dispossession, cultural destruction, and systematic discrimination. From the Aboriginal and Torres Strait Islander peoples of Australia to the First Nations, Inuit, and Metis of Canada, from Native Americans in the United States to the Maori of New Zealand, indigenous communities share common experiences of colonialism while also having distinct histories, cultures, and contemporary challenges.

**Who are indigenous peoples?**

The United Nations defines indigenous peoples as communities that:
- Have historical continuity with pre-colonial societies
- Consider themselves distinct from the dominant society
- Are determined to preserve and develop their ancestral territories and ethnic identities
- Form non-dominant sectors of society

There are approximately 476 million indigenous people worldwide, belonging to over 5,000 distinct groups in more than 90 countries.

**The impact of colonialism:**

European colonialism devastated indigenous communities through:

1. **Land dispossession:** Indigenous peoples were forcibly removed from their ancestral lands, which were claimed by colonial powers and later by settler states. Land is not merely an economic resource for indigenous peoples -- it is central to their identity, spirituality, and cultural practices.

2. **Population collapse:** Contact with Europeans brought diseases (smallpox, measles, influenza) to which indigenous peoples had no immunity. In many regions, 90% or more of the indigenous population died within decades of European contact.

3. **Cultural destruction:** Colonial and post-colonial governments implemented policies aimed at destroying indigenous cultures, languages, and social structures. Children were forcibly removed from families and placed in boarding schools or residential schools designed to "civilize" them.

4. **Political marginalization:** Indigenous peoples were excluded from political power in the nations built on their lands, denied citizenship rights, and subjected to laws designed to control their movements, practices, and identities.

5. **Ongoing structural inequality:** The legacy of these historical injustices continues in the form of health disparities, educational gaps, poverty, and overrepresentation in the criminal justice system.`,
    },
    {
      id: 'se-3-5-def-1',
      type: 'definition',
      title: 'Key Concepts: Indigenous Rights and Colonialism',
      content: `**Colonialism:** A system in which one country takes political and economic control over another territory, exploiting its resources and people. European colonialism affected indigenous peoples on every inhabited continent.

**Settler colonialism:** A form of colonialism in which colonizers come to permanently occupy and build a society on indigenous land, rather than simply extracting resources. The United States, Canada, Australia, and New Zealand are settler colonial states.

**Self-determination:** The right of indigenous peoples to freely determine their political status and pursue their economic, social, and cultural development. Recognized in the UN Declaration on the Rights of Indigenous Peoples (2007).

**Sovereignty:** The right to self-governance. Indigenous sovereignty movements argue that indigenous nations have inherent political authority over their territories and peoples, which was never legitimately extinguished by colonial powers.

**Terra nullius:** A Latin term meaning "nobody's land." The legal fiction used by European colonizers -- particularly in Australia -- to justify taking indigenous lands by claiming they were uninhabited or not "owned" in a European legal sense.

**Forced assimilation:** Government policies designed to destroy indigenous cultures and identities by compelling indigenous peoples to adopt the language, religion, dress, and customs of the dominant society. Residential schools and boarding schools were key instruments of forced assimilation.

**Cultural genocide:** The deliberate destruction of the cultural heritage of a people, including their language, traditions, spiritual practices, and social structures. Many scholars argue that the treatment of indigenous peoples in several countries meets the definition of cultural genocide.`,
    },
    {
      id: 'se-3-5-example-1',
      type: 'example',
      title: 'Example: Residential Schools and Truth Commissions',
      problem: `In both Canada and Australia, governments forcibly removed indigenous children from their families and placed them in institutions designed to assimilate them into the dominant culture. Examine these experiences and the subsequent processes of acknowledgment and reconciliation.`,
      solution: `**Residential Schools and Forced Removals -- A Comparative Analysis:**

**Canada -- Indian Residential Schools:**
- From the 1880s to 1996, an estimated 150,000 indigenous children were forced to attend government-funded, church-run residential schools
- Children were punished for speaking their languages or practicing their cultures
- Many suffered physical, sexual, and emotional abuse; thousands died from disease, neglect, or abuse
- In 2021, ground-penetrating radar discoveries at former school sites in Kamloops, British Columbia, revealed unmarked graves, shocking the nation and the world
- The **Truth and Reconciliation Commission** (TRC, 2008-2015) documented survivors' experiences and issued 94 Calls to Action for reconciliation
- In 2008, Prime Minister Stephen Harper issued a formal apology on behalf of the Canadian government

**Australia -- The Stolen Generations:**
- From approximately 1910 to 1970, government policies removed Aboriginal and Torres Strait Islander children from their families
- An estimated 10-33% of indigenous children were removed and placed with white families or in institutions
- The policy aimed to "breed out" indigenous identity -- a form of cultural and biological assimilation
- The **Bringing Them Home** report (1997) documented the experiences of the Stolen Generations and recommended a formal apology
- In 2008, Prime Minister Kevin Rudd delivered a formal apology to the Stolen Generations, calling it a "blemished chapter" in Australia's history
- However, many of the report's recommendations remain unimplemented

**Common patterns:**
- Both programs were designed to destroy indigenous cultures through the removal of children
- Both caused intergenerational trauma that continues to affect communities today
- Both countries have engaged in formal processes of acknowledgment (apologies, truth commissions) but face criticism for insufficient action on systemic inequality
- The gap between symbolic reconciliation and substantive change remains significant in both countries`,
    },
    {
      id: 'se-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What was the primary purpose of residential schools and forced removal policies directed at indigenous children?',
        options: [
          { id: 'a', text: 'To destroy indigenous cultures by assimilating children into the dominant society', isCorrect: true },
          { id: 'b', text: 'To provide indigenous children with better educational opportunities', isCorrect: false },
          { id: 'c', text: 'To protect indigenous children from natural disasters', isCorrect: false },
          { id: 'd', text: 'To teach indigenous children their own languages and traditions', isCorrect: false },
        ],
        hints: ['Consider the phrase "kill the Indian, save the man" -- used by proponents of residential schools.'],
        solution: 'Residential schools and forced removal policies were explicitly designed to destroy indigenous cultures and assimilate children into the dominant European-descended society. Children were punished for speaking their languages or practicing their cultures. The goal was cultural erasure -- to eliminate indigenous identity within a generation.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What does "terra nullius" mean, and why is it significant in the context of indigenous rights?',
        options: [
          { id: 'a', text: 'It means "nobody\'s land" -- a legal fiction used to justify taking indigenous territories by claiming they were unowned', isCorrect: true },
          { id: 'b', text: 'It means "new land" -- a term for territories discovered by European explorers', isCorrect: false },
          { id: 'c', text: 'It means "shared land" -- a principle of indigenous communal ownership', isCorrect: false },
          { id: 'd', text: 'It means "sacred land" -- an indigenous concept of territorial sovereignty', isCorrect: false },
        ],
        hints: ['Think about how colonial powers justified taking land that was already inhabited.'],
        solution: 'Terra nullius ("nobody\'s land") was a legal doctrine used by European colonizers, particularly in Australia, to justify claiming indigenous territories. By declaring the land "empty" or "unowned" -- ignoring the fact that indigenous peoples had lived there for tens of thousands of years -- colonial powers gave themselves a legal basis for dispossession. The Australian High Court overturned the terra nullius doctrine in the landmark Mabo decision (1992).',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'se-3-5-text-2',
      type: 'text',
      content: `## Indigenous Rights Today: Self-Determination and Reconciliation

**International frameworks:**

The most important international document on indigenous rights is the **United Nations Declaration on the Rights of Indigenous Peoples (UNDRIP)**, adopted in 2007. It affirms that indigenous peoples have the right to:
- Self-determination
- Maintain and strengthen their distinct political, legal, economic, social, and cultural institutions
- Not be subjected to forced assimilation or destruction of their culture
- Their lands, territories, and resources
- Maintain, control, protect, and develop their cultural heritage, traditional knowledge, and traditional cultural expressions

Initially, Australia, Canada, New Zealand, and the United States voted against UNDRIP, though all four have since endorsed it.

**Current issues across the English-speaking world:**

**United States -- Native Americans:**
- 574 federally recognized tribal nations with varying degrees of sovereignty
- Reservations face high rates of poverty, unemployment, and health problems
- Water and environmental rights are major ongoing struggles (the Standing Rock protests against the Dakota Access Pipeline, 2016)
- Missing and Murdered Indigenous Women (MMIW) is a crisis receiving growing attention

**Canada -- First Nations, Inuit, and Metis:**
- The Truth and Reconciliation Commission's 94 Calls to Action provide a roadmap for change, but progress has been slow
- Clean water crises in indigenous communities highlight the infrastructure gap
- Land claims and resource extraction disputes continue
- The National Inquiry into Missing and Murdered Indigenous Women and Girls (2019) called the situation "genocide"

**Australia -- Aboriginal and Torres Strait Islander peoples:**
- "Closing the Gap" targets aim to reduce disparities in health, education, and employment
- The Uluru Statement from the Heart (2017) called for a constitutionally enshrined Indigenous Voice to Parliament -- a referendum on this proposal was held in 2023 but was defeated
- Land rights have been partly addressed through native title legislation, but disputes continue
- Aboriginal Australians have the lowest life expectancy of any indigenous group in a developed country

**New Zealand -- Maori:**
- The Treaty of Waitangi (1840) between the British Crown and Maori chiefs provides a legal framework for Maori rights
- The Waitangi Tribunal hears claims of treaty breaches and recommends compensation
- Maori language and culture have seen significant revitalization efforts
- New Zealand is often seen as a model for indigenous-state relations, though significant disparities remain

**Norway -- The Sami people:**

Norway's own indigenous people, the Sami, have experienced many of the same challenges as indigenous peoples elsewhere:
- Historical assimilation policies (Norwegianization) suppressed Sami language, culture, and identity
- The Sami Parliament (Sametinget), established in 1989, gives the Sami a consultative role in decisions affecting their communities
- Land rights remain contentious, particularly in relation to reindeer herding, wind farms, and resource extraction
- In 2023, the Norwegian Supreme Court ruled that a wind farm on the Fosen peninsula violated Sami reindeer herding rights -- the government's slow response sparked protests
- The Norwegian Truth and Reconciliation Commission for the Sami and Kven peoples was established in 2018`,
    },
    {
      id: 'se-3-5-def-2',
      type: 'definition',
      title: 'Key Terms: Indigenous Rights and Reconciliation',
      content: `**Truth and reconciliation commission:** An official body established to investigate, document, and acknowledge historical injustices against a group, typically as part of a process of national healing and policy reform. Examples include Canada's TRC on residential schools and South Africa's TRC on apartheid.

**Land rights / Native title:** The legal recognition of indigenous peoples' historical and ongoing connection to their ancestral lands. Land is central to indigenous identity, culture, and spirituality, not merely an economic resource.

**Intergenerational trauma:** Psychological and social harm that is transmitted across generations. The trauma of residential schools, forced removals, and cultural destruction affects not only the direct victims but their children and grandchildren.

**Decolonization:** The process of undoing the political, economic, cultural, and psychological effects of colonialism. In an indigenous rights context, this includes returning land, revitalizing languages, reforming institutions, and centering indigenous perspectives.

**Sovereignty:** In indigenous contexts, the inherent right of indigenous nations to govern themselves and their territories. Indigenous sovereignty predates colonial states and was never legitimately surrendered.

**Free, prior, and informed consent (FPIC):** The principle that indigenous peoples must be consulted and give their consent before projects that affect their lands and resources can proceed. Enshrined in UNDRIP.`,
    },
    {
      id: 'se-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Compare indigenous rights issues in two different countries.',
        subTasks: [
          {
            label: 'a',
            task: 'Choose two countries discussed in this chapter (US, Canada, Australia, New Zealand, or Norway) and compare the current situation of their indigenous peoples. Identify one shared challenge and one area where the countries differ.',
            solution: 'Example comparison of Canada and Australia: Shared challenge -- both face significant health, education, and economic disparities between indigenous and non-indigenous populations, rooted in histories of forced assimilation and land dispossession. Difference -- Canada has pursued a formal Truth and Reconciliation process with 94 Calls to Action, while Australia\'s approach has focused more on "Closing the Gap" targets and the contested proposal for a constitutional Indigenous Voice to Parliament. Both demonstrate that acknowledging historical injustice is necessary but insufficient without concrete action.',
          },
          {
            label: 'b',
            task: 'Explain what "intergenerational trauma" means and how it connects the historical experiences discussed in this chapter to present-day challenges for indigenous communities.',
            solution: 'Intergenerational trauma refers to the transmission of psychological and social harm across generations. When children were forcibly removed from families and placed in residential schools, they lost their languages, cultural knowledge, and family bonds. Many experienced abuse. As adults, they often struggled with parenting (having had no positive models), substance abuse, and mental health issues. Their children grew up in homes affected by these struggles and may pass on similar patterns. This explains why policies ended decades ago still produce measurable effects today in indigenous communities\' health, educational achievement, and social well-being.',
          },
        ],
        hints: ['Be specific about which countries you are comparing', 'Think about the connection between past policies and present outcomes'],
        solution: 'A strong response will demonstrate understanding of both shared colonial patterns and the distinct histories and current situations of different indigenous peoples, connecting historical injustice to contemporary challenges through the concept of intergenerational trauma.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a text of 200-250 words discussing the Fosen wind farm case in Norway (2021-2023). Why is this case significant for indigenous rights, and what does it reveal about the tension between climate policy and indigenous land rights? Consider perspectives from both sides of the dispute.',
        hints: ['The Supreme Court ruled that the wind farms violated Sami rights under international law', 'The government was slow to act on the ruling, sparking protests', 'Think about whether climate goals and indigenous rights are in conflict or can be reconciled'],
        solution: 'A strong response will explain the case: the Norwegian Supreme Court ruled in 2021 that two wind farms on the Fosen peninsula violated Sami reindeer herding rights under the International Covenant on Civil and Political Rights. The government\'s failure to act on the ruling for over a year sparked protests by Sami activists and climate activist Greta Thunberg. The case is significant because it highlights the tension between Norway\'s climate goals (renewable energy) and its obligations to indigenous peoples. It also reveals that even countries considered leaders in indigenous rights (Norway has a Sami Parliament and has ratified ILO Convention 169) can fail to protect indigenous interests. The best answers will argue that climate policy and indigenous rights need not be in conflict if indigenous peoples are genuinely consulted and their consent is sought (FPIC).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-5-summary',
      type: 'text',
      title: 'Summary',
      content: `**Key takeaways from this chapter:**

- Indigenous peoples across the English-speaking world share experiences of colonialism, land dispossession, cultural destruction, and political marginalization
- Settler colonialism differs from extractive colonialism in that colonizers permanently occupy indigenous lands
- Residential schools and forced child removal policies caused intergenerational trauma that continues to affect communities today
- International frameworks like UNDRIP recognize indigenous rights to self-determination, land, culture, and free, prior, and informed consent
- Truth and reconciliation processes have been undertaken in several countries, but the gap between symbolic acknowledgment and substantive change remains significant
- Norway's Sami people have experienced similar patterns of assimilation and are still fighting for their rights, as the Fosen wind farm case demonstrates
- Decolonization requires not only legal reform but also cultural change, institutional transformation, and genuine engagement with indigenous perspectives`,
    },
    {
      id: 'se-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Explain what "decolonization" means in the context of indigenous rights. Give two concrete examples of what decolonization might look like in practice.',
        hints: ['Think beyond just political independence', 'Consider cultural, educational, economic, and psychological dimensions'],
        solution: 'Decolonization means undoing the effects of colonialism across political, economic, cultural, and psychological dimensions. Examples: 1) Land return -- restoring indigenous ownership or control of ancestral territories, as with land back movements in the US and Canada. 2) Language revitalization -- supporting the teaching and use of indigenous languages that were suppressed by colonial education, as New Zealand has done with Maori through immersion schools (kohanga reo). Other examples include reforming school curricula to include indigenous perspectives, returning cultural artifacts, and centering indigenous governance structures.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'How much did you know about the Sami people and their history before reading this chapter? Reflect on why the Sami experience is often less well-known than the experiences of indigenous peoples in the US, Canada, or Australia. Write 100-150 words.',
        hints: ['Consider factors like media representation, population size, and cultural awareness', 'Think about whether Norwegian schools teach enough about Sami history'],
        solution: 'A thoughtful response will reflect honestly on the student\'s prior knowledge and consider why the Sami experience may receive less attention: smaller population size, Norway\'s reputation as an egalitarian society may obscure internal inequalities, less dramatic historical violence compared to some other colonial contexts (though Norwegianization was deeply harmful), and limited media coverage. The best answers will connect this to broader questions about whose histories are told and whose are overlooked.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Settler colonialism', definition: 'A form of colonialism where colonizers permanently occupy and build a society on indigenous land.' },
    { term: 'Self-determination', definition: 'The right of indigenous peoples to freely determine their political status and pursue their own development.' },
    { term: 'Intergenerational trauma', definition: 'Psychological and social harm transmitted across generations, from historical injustice to present-day communities.' },
    { term: 'Decolonization', definition: 'The process of undoing the political, economic, cultural, and psychological effects of colonialism.' },
    { term: 'Free, prior, and informed consent (FPIC)', definition: 'The principle that indigenous peoples must consent before projects affecting their lands can proceed.' },
  ],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const SAMF_ENGELSK_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMF_ENGELSK_3_1,
  CHAPTER_SAMF_ENGELSK_3_2,
  CHAPTER_SAMF_ENGELSK_3_3,
  CHAPTER_SAMF_ENGELSK_3_4,
  CHAPTER_SAMF_ENGELSK_3_5,
];
