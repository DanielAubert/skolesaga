/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SECTION 4: Economics and Development
// Samfunnsfaglig engelsk (VG2/VG3)
// Chapters 4.1-4.5
// ============================================================================

// ============================================================================
// 4.1 Economic Systems
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_4_1: TextbookChapter = {
  id: 'samf-engelsk-4-1',
  courseId: 'samf-engelsk',
  chapterNumber: '4.1',
  title: 'Economic Systems',
  description: 'Examine the major economic systems -- market economies, command economies, and mixed economies -- and how they shape societies, individual freedoms, and the distribution of wealth.',
  estimatedMinutes: 22,
  competenceGoals: [
    'explore and describe key features of different economic systems',
    'discuss how economic structures influence social conditions and individual opportunities',
    'analyze the relationship between political systems and economic organization',
  ],
  keyTerms: [
    { term: 'Market economy', definition: 'An economic system in which production, distribution, and pricing of goods are determined by supply and demand in a free market' },
    { term: 'Command economy', definition: 'An economic system in which the government controls all major aspects of production and distribution' },
    { term: 'Mixed economy', definition: 'An economic system that combines elements of both market and command economies, with both private enterprise and government intervention' },
    { term: 'Gross Domestic Product (GDP)', definition: 'The total monetary value of all goods and services produced within a country in a given period' },
    { term: 'Privatisation', definition: 'The transfer of ownership of publicly owned enterprises or services to the private sector' },
  ],
  content: [
    {
      id: 'se-4-1-intro',
      type: 'text',
      content: `## Economic Systems

Every society must answer three fundamental economic questions: What to produce? How to produce it? For whom to produce it? The way a society answers these questions defines its economic system. Understanding economic systems is essential for analyzing global politics, international relations, and social development.

**Why It Matters:**
- Economic systems determine how wealth is created and distributed
- They shape the daily lives of billions of people -- from job opportunities to access to healthcare
- International conflicts and alliances are often rooted in economic differences
- Norway's own economic model is frequently discussed in global debates about equality and prosperity

**Learning Objectives:**
- Identify and compare the three major types of economic systems
- Understand the role of government in different economic models
- Analyze the strengths and weaknesses of each system
- Evaluate Norway's position as a mixed economy within the global context`,
    },
    {
      id: 'se-4-1-def-1',
      type: 'definition',
      title: 'The Three Major Economic Systems',
      content: `Economists traditionally identify three main types of economic systems. In practice, most countries operate with a blend, but understanding the pure models is essential.

**1. Market Economy (Capitalism)**
In a market economy, economic decisions are made by individuals and private businesses. Prices are determined by supply and demand, and the government's role is minimal.

- **Ownership:** Private individuals and corporations own the means of production
- **Decision-making:** Decentralised; driven by consumer choices and profit motive
- **Prices:** Set by the interaction of supply and demand
- **Role of government:** Limited to enforcing contracts, protecting property rights, and maintaining basic infrastructure
- **Examples:** The United States is often cited as the closest example, though it still has significant government involvement

**Key thinker:** Adam Smith (1723--1790), a Scottish economist and philosopher, argued in *The Wealth of Nations* (1776) that individuals pursuing their own self-interest would, guided by an "invisible hand," promote the greater good of society. This became the foundational text of free-market capitalism.

**2. Command Economy (Planned Economy)**
In a command economy, the government owns and controls the means of production. Central planners decide what to produce, how much to produce, and what prices to charge.

- **Ownership:** The state owns factories, farms, and businesses
- **Decision-making:** Centralised; a government planning agency makes all major economic choices
- **Prices:** Set by the government, not by the market
- **Role of government:** Total control over the economy
- **Historical examples:** The Soviet Union (1917--1991), Maoist China (1949--1976), North Korea, Cuba

**Key thinker:** Karl Marx (1818--1883) argued that capitalism inevitably leads to exploitation of workers by the owners of capital. He envisioned a classless society where the means of production are collectively owned.

**3. Mixed Economy**
A mixed economy combines elements of both market and command systems. Private enterprise operates alongside government regulation and public services.

- **Ownership:** Both private and public ownership coexist
- **Decision-making:** Individuals and businesses make most decisions, but the government intervenes in key areas (healthcare, education, infrastructure, welfare)
- **Prices:** Mostly market-determined, but the government may regulate essential goods
- **Role of government:** Active regulation, taxation, redistribution, and provision of public services
- **Examples:** Norway, Sweden, Denmark, Germany, the United Kingdom, Canada, Japan

Most modern economies are mixed economies. The key question is the *degree* of government intervention.`,
    },
    {
      id: 'se-4-1-example-1',
      type: 'example',
      title: 'Example: The Nordic Model -- Norway\'s Mixed Economy',
      content: `Norway is frequently held up as one of the world's most successful mixed economies. But what does this mean in practice?

**Market Elements:**
- Private companies operate freely in most sectors
- Consumers choose what to buy; businesses set their own prices
- Entrepreneurship is encouraged and protected by law
- Norway has a stock exchange (Oslo Bors) and active financial markets

**Government Elements:**
- The state owns significant shares in major companies (Equinor, Telenor, DNB)
- Universal healthcare is publicly funded through taxation
- Education, from primary school through university, is free
- The Government Pension Fund Global ("the Oil Fund") manages petroleum revenues for future generations -- worth over 17 trillion NOK (approximately USD 1.6 trillion)
- Strong labour laws protect workers' rights, including extensive parental leave and strict dismissal regulations

**The Welfare State:**
Norway's mixed economy funds a comprehensive welfare state. Citizens pay high taxes (personal income tax rates can exceed 40%), but in return receive:
- Free healthcare and education
- Generous unemployment benefits
- Subsidised childcare
- State pensions
- Public infrastructure (roads, rail, broadband)

**A Global Benchmark:**
Norway consistently ranks among the top countries in the UN Human Development Index, the World Happiness Report, and measures of social equality. Critics of the model argue that high taxes can discourage investment and innovation, and that the economy is overly dependent on petroleum revenues.

**Key Question:** Can the Nordic model survive as oil revenues decline and the population ages? This is one of the most important economic debates in contemporary Norway.`,
    },
    {
      id: 'se-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following best describes a "command economy"?',
        options: [
          { id: 'a', text: 'An economy where supply and demand determine prices and production decisions', isCorrect: false },
          { id: 'b', text: 'An economy where the government owns the means of production and makes all major economic decisions', isCorrect: true },
          { id: 'c', text: 'An economy that combines private enterprise with government regulation', isCorrect: false },
          { id: 'd', text: 'An economy where international trade is the primary source of wealth', isCorrect: false },
        ],
        solution: 'Correct answer: b) A command economy (also called a planned economy) is one in which the government controls the means of production and makes centralised decisions about what to produce, how much to produce, and what prices to charge. The Soviet Union and North Korea are classic examples. Option a describes a market economy, option c describes a mixed economy, and option d does not describe any specific system.',
      },
    },
    {
      id: 'se-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare market economies and command economies. For each system, identify at least two strengths and two weaknesses. Use specific examples of countries to illustrate your points.',
        hints: [
          'Think about efficiency, innovation, equality, and individual freedom',
          'Consider historical examples: the United States, the Soviet Union, China\'s economic transition',
        ],
        solution: 'Market economy strengths: encourages innovation and efficiency through competition; consumer choice and individual freedom. Weaknesses: can lead to significant inequality; essential services may be inaccessible to the poor. Command economy strengths: can reduce inequality by distributing resources more evenly; can mobilise resources quickly for large projects. Weaknesses: often inefficient due to lack of market signals; tends to restrict individual freedoms and political rights. A strong answer includes specific examples such as US innovation vs. inequality, Soviet industrialisation vs. consumer shortages.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-1-def-2',
      type: 'definition',
      title: 'Key Economic Indicators',
      content: `To compare economic systems and countries, economists use several key indicators:

**Gross Domestic Product (GDP)**
The total monetary value of all goods and services produced within a country's borders in a given period (usually a year). GDP is the most common measure of economic output.
- **GDP per capita** = GDP divided by the total population, providing a rough measure of average income
- Limitations: GDP does not measure inequality, environmental sustainability, or quality of life

**Human Development Index (HDI)**
Developed by the United Nations, HDI combines three dimensions:
1. Life expectancy at birth (health)
2. Education (years of schooling)
3. Gross National Income (GNI) per capita (standard of living)
- HDI provides a broader picture than GDP alone
- Norway has topped the HDI ranking multiple times

**Gini Coefficient**
A measure of income inequality within a country, ranging from 0 (perfect equality) to 1 (maximum inequality).
- Nordic countries typically score 0.25--0.30 (relatively equal)
- The United States scores approximately 0.39
- South Africa scores approximately 0.63 (one of the highest in the world)
- A lower Gini coefficient indicates a more equal distribution of income

**Inflation Rate**
The rate at which the general price level of goods and services rises, eroding purchasing power.
- Central banks (e.g., Norges Bank) aim for stable, low inflation (often around 2%)
- Hyperinflation (extremely rapid price increases) can devastate economies, as seen in Zimbabwe (2008) and Venezuela (2010s)

**Unemployment Rate**
The percentage of the labour force that is jobless and actively seeking work.
- Low unemployment is generally a sign of economic health
- However, the *type* of employment matters -- underemployment (working fewer hours than desired or in jobs below one's skill level) is also a concern`,
    },
    {
      id: 'se-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-4-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'The Gini coefficient measures:',
        options: [
          { id: 'a', text: 'The total value of goods and services produced in a country', isCorrect: false },
          { id: 'b', text: 'The average life expectancy of a population', isCorrect: false },
          { id: 'c', text: 'The degree of income inequality within a country', isCorrect: true },
          { id: 'd', text: 'The rate at which prices increase over time', isCorrect: false },
        ],
        solution: 'Correct answer: c) The Gini coefficient measures income inequality, ranging from 0 (perfect equality, where everyone has the same income) to 1 (maximum inequality, where one person has all the income). It is a widely used tool for comparing inequality across countries. Option a describes GDP, option b relates to HDI, and option d describes the inflation rate.',
      },
    },
    {
      id: 'se-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Explain why GDP alone is not a sufficient measure of a country\'s well-being. In your answer, discuss at least two alternative indicators and explain what additional information they provide.',
        hints: [
          'Consider what GDP measures and what it does not (inequality, health, education, environment)',
          'Discuss HDI and the Gini coefficient as alternatives',
        ],
        solution: 'GDP measures total economic output but does not capture how wealth is distributed (a country with high GDP can still have extreme poverty), does not account for environmental degradation or resource depletion, and does not measure quality of life factors like health, education, or happiness. HDI provides a broader picture by combining income with life expectancy and education. The Gini coefficient specifically measures inequality. Other alternatives include the Genuine Progress Indicator (GPI) and the World Happiness Report. A country like Qatar has extremely high GDP per capita but lower HDI rankings due to inequality among its population.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-1-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**Market economies** rely on private ownership, supply and demand, and minimal government intervention. They tend to encourage innovation but can produce significant inequality.

**Command economies** feature government ownership and centralised planning. They can reduce inequality but often at the cost of efficiency and individual freedom.

**Mixed economies** combine elements of both systems. Most modern countries, including Norway, operate as mixed economies with varying degrees of government intervention.

**Economic indicators** such as GDP, HDI, the Gini coefficient, and unemployment rates provide different perspectives on a country's economic health and social well-being. No single measure tells the complete story.

**The Nordic model** demonstrates how a mixed economy can achieve both economic prosperity and social equality, though it faces challenges from declining petroleum revenues and demographic change.

**Key Vocabulary:**
- **Market economy** -- economic decisions driven by supply and demand
- **Command economy** -- economic decisions made by central government
- **Mixed economy** -- combination of market and government elements
- **GDP** -- total value of goods and services produced
- **Gini coefficient** -- measure of income inequality (0 to 1)
- **HDI** -- composite index of health, education, and income`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay (300--400 words): "Is the Nordic economic model a realistic option for other countries?" Discuss the key features of the Nordic model, evaluate its strengths and weaknesses, and argue whether it could be successfully adopted by a country outside Scandinavia. Use specific examples to support your argument.',
        hints: [
          'Consider cultural, historical, and resource-based factors that make the Nordic model possible',
          'Think about whether high taxes and a strong welfare state are transferable to countries with different traditions',
        ],
        solution: 'A strong essay describes the Nordic model (high taxes, comprehensive welfare state, strong labour unions, mixed economy with significant state ownership), evaluates its success (high HDI, low inequality, high happiness scores) and challenges (dependence on oil revenues, ageing population, immigration pressures), and presents a balanced argument about transferability. It should consider factors like trust in government, cultural homogeneity, resource wealth, and political traditions that may or may not be replicable.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-4-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Which economist is considered the "father of modern economics" and argued that the "invisible hand" of the market guides self-interested individuals to promote the common good?',
        options: [
          { id: 'a', text: 'Karl Marx', isCorrect: false },
          { id: 'b', text: 'John Maynard Keynes', isCorrect: false },
          { id: 'c', text: 'Adam Smith', isCorrect: true },
          { id: 'd', text: 'Milton Friedman', isCorrect: false },
        ],
        solution: 'Correct answer: c) Adam Smith (1723--1790) is widely regarded as the father of modern economics. In his 1776 work *The Wealth of Nations*, he introduced the concept of the "invisible hand," arguing that when individuals act in their own self-interest in a free market, they unintentionally benefit society as a whole. Karl Marx critiqued capitalism; Keynes advocated government intervention during recessions; Friedman championed monetarism and free markets in the 20th century.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 4.2 Globalisation and Trade
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_4_2: TextbookChapter = {
  id: 'samf-engelsk-4-2',
  courseId: 'samf-engelsk',
  chapterNumber: '4.2',
  title: 'Globalisation and Trade',
  description: 'Explore the forces driving globalisation, the role of international trade, the debate between free trade and protectionism, and how globalisation affects individuals and societies worldwide.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analyze causes and consequences of globalisation',
    'discuss the relationship between international trade and economic development',
    'evaluate arguments for and against free trade and protectionism',
  ],
  keyTerms: [
    { term: 'Globalisation', definition: 'The process of increasing interconnectedness between countries through trade, investment, migration, technology, and cultural exchange' },
    { term: 'Free trade', definition: 'International trade without tariffs, quotas, or other government restrictions' },
    { term: 'Protectionism', definition: 'Government policies that restrict international trade to protect domestic industries' },
    { term: 'Tariff', definition: 'A tax imposed on imported goods, making them more expensive than domestically produced alternatives' },
    { term: 'Multinational corporation (MNC)', definition: 'A company that operates in multiple countries, with production facilities or offices beyond its home country' },
  ],
  content: [
    {
      id: 'se-4-2-intro',
      type: 'text',
      content: `## Globalisation and Trade

Globalisation is one of the defining features of the modern world. The clothes you wear, the food you eat, the technology you use, and the entertainment you consume all reflect a world in which borders are increasingly porous. International trade is the economic engine of globalisation, connecting producers and consumers across continents.

**Why It Matters:**
- Globalisation affects employment, wages, and economic opportunities in every country
- Understanding trade policy is essential for informed citizenship
- Norway, as a small, open economy, is deeply integrated into the global trading system
- Debates about globalisation -- who benefits and who loses -- are central to modern politics

**Learning Objectives:**
- Define globalisation and identify its key drivers
- Understand the theory of comparative advantage and its role in international trade
- Evaluate the arguments for free trade and protectionism
- Analyze the impact of multinational corporations on developing countries`,
    },
    {
      id: 'se-4-2-def-1',
      type: 'definition',
      title: 'Globalisation: Drivers and Dimensions',
      content: `**Globalisation** refers to the increasing interconnectedness of the world's economies, cultures, and populations. It is driven by multiple forces:

**Technological Drivers:**
- The internet and digital communication enable instant global connectivity
- Container shipping (standardised since the 1960s) dramatically reduced transport costs
- Air travel makes physical mobility faster and cheaper
- Automation and AI allow companies to coordinate complex global supply chains

**Economic Drivers:**
- Reduction of trade barriers (tariffs, quotas) through international agreements
- The establishment of institutions like the World Trade Organization (WTO), the International Monetary Fund (IMF), and the World Bank
- Deregulation of financial markets allowing capital to flow freely across borders
- The rise of multinational corporations (MNCs) that operate across many countries

**Political Drivers:**
- The end of the Cold War (1991) opened new markets
- Regional trade agreements: EU, NAFTA/USMCA, ASEAN, African Continental Free Trade Area
- International cooperation through the United Nations and other multilateral bodies

**Cultural Drivers:**
- Global media, entertainment, and social platforms spread ideas and values
- English as a global lingua franca facilitates communication
- Migration and diaspora communities create cultural bridges

**Dimensions of Globalisation:**
1. **Economic globalisation** -- trade, investment, and financial flows
2. **Political globalisation** -- international governance and cooperation
3. **Cultural globalisation** -- spread of ideas, values, and cultural products
4. **Technological globalisation** -- global diffusion of technology and innovation

**Comparative Advantage (David Ricardo, 1817):**
A foundational theory in international trade. Even if one country can produce everything more efficiently than another, both countries benefit from specialising in what they produce *relatively* most efficiently and trading for the rest. This theory underpins the argument for free trade.`,
    },
    {
      id: 'se-4-2-example-1',
      type: 'example',
      title: 'Example: A Smartphone\'s Global Journey',
      content: `A modern smartphone illustrates globalisation in action. Consider the supply chain of a typical device:

**Design:** Conceived in California, USA (Apple) or Seoul, South Korea (Samsung)
**Processor chips:** Designed in the UK (ARM), manufactured in Taiwan (TSMC) using Dutch lithography machines (ASML)
**Memory:** Produced in South Korea (Samsung, SK Hynix) or Japan (Kioxia)
**Display:** Made in South Korea (Samsung, LG) or China (BOE)
**Battery:** Lithium mined in Chile or Australia, cobalt mined in the Democratic Republic of Congo, assembled in China
**Camera lenses:** Japanese glass (Sony sensors)
**Assembly:** Primarily in China (Foxconn) or Vietnam
**Software:** Developed by teams across the US, India, Ireland, and other countries
**Retail:** Sold globally through online and physical stores

**Key Observations:**
- A single product involves dozens of countries across all continents
- No single country could produce this device alone at a competitive price
- The supply chain creates millions of jobs worldwide, but also dependencies and vulnerabilities
- Disruptions (e.g., the COVID-19 pandemic, chip shortages, geopolitical tensions) can ripple through the entire chain
- Labour conditions in mining and assembly have raised serious ethical questions

**The Norway Connection:**
Norway's Government Pension Fund Global (the Oil Fund) owns shares in many of the companies involved in smartphone production. Norwegian consumers purchase millions of smartphones annually. Norwegian telecommunications infrastructure enables their use. Globalisation connects Norway to this supply chain at multiple points.`,
    },
    {
      id: 'se-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'The theory of "comparative advantage," which argues that countries benefit from specialising in what they produce most efficiently and trading for the rest, was developed by:',
        options: [
          { id: 'a', text: 'Adam Smith', isCorrect: false },
          { id: 'b', text: 'David Ricardo', isCorrect: true },
          { id: 'c', text: 'Karl Marx', isCorrect: false },
          { id: 'd', text: 'John Maynard Keynes', isCorrect: false },
        ],
        solution: 'Correct answer: b) David Ricardo (1772--1823), a British economist, developed the theory of comparative advantage in 1817. He demonstrated that even if one country is more efficient at producing all goods, both countries can benefit from trade if each specialises in the goods where it has a relative (comparative) advantage. Adam Smith developed the related concept of absolute advantage; Marx critiqued capitalism; Keynes focused on macroeconomic policy.',
      },
    },
    {
      id: 'se-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Choose an everyday product (clothing, food, electronics, or another item) and research its global supply chain. Describe at least four countries involved in its production and distribution. Explain how this supply chain illustrates the concept of globalisation.',
        hints: [
          'Think about where raw materials are sourced, where components are manufactured, where assembly occurs, and where the final product is sold',
          'Consider both the benefits (lower prices, job creation) and drawbacks (environmental impact, labour conditions)',
        ],
        solution: 'A strong answer traces a specific product through multiple countries (e.g., a cotton T-shirt: cotton grown in India, dyed in Bangladesh, cut and sewn in Vietnam, branded by a Swedish company, sold in Norway). It identifies the role of each country and explains how trade agreements, low transport costs, and wage differences make this global chain possible. It should also note that globalisation creates interdependencies and raises questions about sustainability and workers\' rights.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-2-def-2',
      type: 'definition',
      title: 'Free Trade vs. Protectionism',
      content: `One of the most enduring debates in economics concerns the degree to which governments should regulate international trade.

**Free Trade:**
The principle that goods and services should flow across borders without government interference (tariffs, quotas, subsidies, or regulations designed to restrict imports).

**Arguments for free trade:**
- Lower prices for consumers due to competition
- Greater variety of goods available
- Encourages specialisation and efficiency (comparative advantage)
- Promotes economic growth and innovation
- Fosters international cooperation and reduces conflict

**Protectionism:**
Government policies that restrict or discourage imports to protect domestic industries.

**Common protectionist tools:**
- **Tariffs** -- taxes on imported goods (e.g., the US imposing tariffs on Chinese steel)
- **Quotas** -- limits on the quantity of a good that can be imported
- **Subsidies** -- government payments to domestic producers to make them more competitive
- **Non-tariff barriers** -- regulations, standards, or bureaucratic requirements that make it harder for foreign goods to enter a market

**Arguments for protectionism:**
- Protects domestic jobs from foreign competition
- Shields "infant industries" that are not yet competitive
- Ensures national security by maintaining domestic production capacity
- Prevents "dumping" (selling goods below cost to destroy competitors)
- Protects environmental and labour standards

**The WTO and International Trade Rules:**
The World Trade Organization (WTO), established in 1995 (successor to GATT), creates rules for international trade and provides a forum for resolving trade disputes. Its core principles include:
- Most-Favoured-Nation (MFN): trade benefits given to one country must be extended to all WTO members
- National Treatment: imported goods must be treated equally to domestic goods once they enter the market
- Transparency: trade rules must be published and predictable

**Norway and Trade:**
Norway is not an EU member but participates in the European Economic Area (EEA) through the EFTA agreement, giving it access to the EU single market. Norway's main exports are petroleum, seafood, metals, and maritime services. Its economy is heavily dependent on international trade.`,
    },
    {
      id: 'se-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-4-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'A tariff is:',
        options: [
          { id: 'a', text: 'A government payment to domestic producers to make them more competitive', isCorrect: false },
          { id: 'b', text: 'A limit on the quantity of a good that can be imported', isCorrect: false },
          { id: 'c', text: 'A tax imposed on imported goods, making them more expensive', isCorrect: true },
          { id: 'd', text: 'An agreement between two countries to reduce trade barriers', isCorrect: false },
        ],
        solution: 'Correct answer: c) A tariff is a tax on imported goods. By making imports more expensive, tariffs protect domestic producers from foreign competition. However, they also raise prices for consumers and can provoke retaliatory tariffs from other countries. Option a describes a subsidy, option b describes a quota, and option d describes a trade agreement.',
      },
    },
    {
      id: 'se-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Imagine you are an economic adviser to a developing country. The government asks you whether to adopt a free trade policy or a protectionist policy. Write a 200-word recommendation that considers both sides. Clearly state your position and justify it with at least two specific arguments.',
        hints: [
          'Consider the country\'s current economic strengths and weaknesses',
          'Think about the short-term costs and long-term benefits of each approach',
        ],
        solution: 'A balanced recommendation acknowledges that both approaches have merits. It might suggest a nuanced middle ground: selective protectionism for key infant industries combined with gradual opening to free trade as domestic industries become competitive. Key arguments could include: free trade provides access to cheaper goods and larger markets, while strategic protectionism allows infant industries to develop before facing full international competition. The recommendation should consider the specific circumstances of the developing country.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-2-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**Globalisation** is the increasing interconnectedness of economies, cultures, and populations, driven by technology, trade liberalisation, political changes, and cultural exchange.

**Comparative advantage** explains why countries benefit from specialising and trading, even when one country is more efficient at producing everything.

**Free trade** promotes lower prices, greater variety, and economic growth, but can harm vulnerable industries and workers.

**Protectionism** shields domestic industries and jobs but raises consumer prices and can reduce economic efficiency.

**The WTO** provides the rules-based framework for international trade, though it faces growing challenges from trade wars and geopolitical tensions.

**Norway** is a small, open economy deeply integrated into global trade through the EEA agreement, petroleum exports, and the Government Pension Fund Global.

**Key Vocabulary:**
- **Globalisation** -- increasing worldwide interconnectedness
- **Comparative advantage** -- specialising in what you produce relatively best
- **Tariff** -- tax on imports
- **Quota** -- limit on import quantity
- **Subsidy** -- government payment to domestic producers
- **MNC** -- multinational corporation operating across borders`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay (300--400 words): "Globalisation creates winners and losers." Discuss this statement with reference to at least two different groups or countries. Consider who benefits from globalisation, who is disadvantaged, and whether the overall effects are positive or negative.',
        hints: [
          'Think about consumers, workers in developing countries, multinational corporations, and local businesses',
          'Use specific examples such as factory workers in Bangladesh, tech companies in Silicon Valley, or farmers in Africa',
        ],
        solution: 'A strong essay identifies specific winners (consumers who get cheaper goods, MNCs that access global markets, skilled workers in the tech sector, some developing countries that attract foreign investment) and losers (manufacturing workers in developed countries whose jobs are outsourced, small-scale farmers who cannot compete with subsidised imports, communities affected by environmental degradation). It presents a balanced argument and reaches a nuanced conclusion about whether globalisation is net positive.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-4-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Norway participates in the EU single market through which agreement?',
        options: [
          { id: 'a', text: 'The North Atlantic Treaty (NATO)', isCorrect: false },
          { id: 'b', text: 'The European Economic Area (EEA) Agreement', isCorrect: true },
          { id: 'c', text: 'The Schengen Agreement only', isCorrect: false },
          { id: 'd', text: 'The Maastricht Treaty', isCorrect: false },
        ],
        solution: 'Correct answer: b) Norway participates in the EU single market through the European Economic Area (EEA) Agreement, which it joined as an EFTA (European Free Trade Association) member. This gives Norway access to the EU\'s single market for goods, services, capital, and labour, while remaining outside the EU\'s political structures. The Maastricht Treaty established the EU; NATO is a military alliance; the Schengen Agreement covers passport-free travel but not trade.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 4.3 Development and Poverty
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_4_3: TextbookChapter = {
  id: 'samf-engelsk-4-3',
  courseId: 'samf-engelsk',
  chapterNumber: '4.3',
  title: 'Development and Poverty',
  description: 'Examine the concept of development, the causes and consequences of global poverty, and the debate over how to measure and achieve progress in the world\'s poorest regions.',
  estimatedMinutes: 25,
  competenceGoals: [
    'explain and discuss different perspectives on development',
    'analyze causes of global poverty and inequality',
    'evaluate the effectiveness of different approaches to reducing poverty',
  ],
  keyTerms: [
    { term: 'Development', definition: 'A broad concept encompassing economic growth, improvements in living standards, expanded freedoms, and enhanced human capabilities' },
    { term: 'Absolute poverty', definition: 'Living below the minimum income level needed to meet basic needs such as food, shelter, and clothing -- defined by the World Bank as less than USD 2.15 per day' },
    { term: 'Relative poverty', definition: 'Having significantly less income and resources than the average in one\'s society, leading to social exclusion' },
    { term: 'Colonialism', definition: 'The practice of acquiring and maintaining political control over another country, exploiting its resources and people for the benefit of the colonising power' },
    { term: 'Brain drain', definition: 'The emigration of highly skilled or educated individuals from a developing country to a more developed one' },
  ],
  content: [
    {
      id: 'se-4-3-intro',
      type: 'text',
      content: `## Development and Poverty

Despite remarkable global progress in reducing extreme poverty over the past few decades, hundreds of millions of people still live in conditions of severe deprivation. Understanding why some countries are rich and others are poor -- and what can be done about it -- is one of the most important questions in social science.

**Why It Matters:**
- Approximately 700 million people still live in extreme poverty (below USD 2.15 per day)
- Global inequality affects migration, conflict, health, and environmental sustainability
- Norway is one of the world's largest per-capita donors of development aid
- Debates about development shape international policy and human rights discourse

**Learning Objectives:**
- Understand different definitions and measures of development
- Identify the major causes of poverty and underdevelopment
- Analyze the legacy of colonialism on contemporary development
- Evaluate different approaches to measuring progress`,
    },
    {
      id: 'se-4-3-def-1',
      type: 'definition',
      title: 'What Is Development?',
      content: `**Development** is a multidimensional concept that goes far beyond economic growth. Different perspectives emphasise different aspects:

**Economic Development:**
- Increase in GDP and GDP per capita
- Industrialisation and structural transformation
- Integration into the global economy
- Growth of formal employment and rising wages

**Human Development (UNDP):**
Inspired by the work of Amartya Sen and Mahbub ul Haq, the United Nations Development Programme defines development as expanding people's choices and capabilities:
- The ability to live a long and healthy life
- Access to education and knowledge
- A decent standard of living
- Political freedom and human rights

**Sustainable Development:**
Development that meets the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987 -- chaired by Norwegian Prime Minister Gro Harlem Brundtland).

**Amartya Sen's Capability Approach:**
Indian economist and Nobel laureate Amartya Sen (born 1933) argued that development should be understood as the expansion of human freedoms and capabilities, not merely income growth. A person may have a high income but lack access to healthcare, education, or political participation -- and therefore not truly be "developed."

**Measuring Development:**
| Indicator | What it measures | Limitations |
|-----------|-----------------|-------------|
| GDP per capita | Average economic output per person | Ignores inequality, environment, well-being |
| HDI | Health, education, income | Simplifies complex realities |
| Gini coefficient | Income inequality | Does not capture overall wealth or poverty |
| Multidimensional Poverty Index (MPI) | Deprivation in health, education, living standards | Data availability varies |
| Gender Inequality Index (GII) | Gender-based disparities | Does not capture all forms of discrimination |

**The Development Spectrum:**
Rather than a binary division between "developed" and "developing," most experts now recognise a spectrum. The World Bank classifies countries as low-income, lower-middle-income, upper-middle-income, and high-income based on Gross National Income (GNI) per capita.`,
    },
    {
      id: 'se-4-3-example-1',
      type: 'example',
      title: 'Example: Two Countries, Two Paths -- South Korea and Nigeria',
      content: `In 1960, South Korea and Nigeria had similar GDP per capita levels. By 2024, South Korea's GDP per capita was approximately USD 33,000, while Nigeria's was approximately USD 2,200. How did their paths diverge so dramatically?

**South Korea:**
- Invested heavily in education and human capital development
- Adopted an export-oriented industrialisation strategy
- Government actively directed industrial policy, supporting key sectors (steel, electronics, automotive)
- Benefited from US economic and military support during the Cold War
- Achieved democratic governance after decades of authoritarian rule
- Companies like Samsung, Hyundai, and LG became global leaders
- Today ranks among the world's top 15 economies

**Nigeria:**
- Rich in natural resources (oil, natural gas, minerals)
- Experienced the "resource curse" -- oil wealth concentrated among elites while the majority remained poor
- Suffered from decades of military dictatorship and political instability
- Corruption diverted public funds away from education, healthcare, and infrastructure
- Colonial borders (drawn by Britain) created a diverse but fractured nation with ethnic and religious tensions
- Despite being Africa's largest economy, over 40% of the population lives in extreme poverty

**Key Lessons:**
- Natural resources alone do not guarantee development
- Investment in education and human capital is critical
- Good governance, rule of law, and anti-corruption measures matter enormously
- Historical context (colonialism, Cold War politics) shapes development trajectories
- There is no single "recipe" for development -- each country's path is unique`,
    },
    {
      id: 'se-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'The "capability approach" to development, which argues that development should be measured by the expansion of human freedoms and choices rather than income alone, was developed by:',
        options: [
          { id: 'a', text: 'Adam Smith', isCorrect: false },
          { id: 'b', text: 'Amartya Sen', isCorrect: true },
          { id: 'c', text: 'Jeffrey Sachs', isCorrect: false },
          { id: 'd', text: 'Gro Harlem Brundtland', isCorrect: false },
        ],
        solution: 'Correct answer: b) Amartya Sen, an Indian economist and Nobel Prize laureate (1998), developed the capability approach. He argued that development is fundamentally about expanding what people are able to do and be -- their capabilities -- not merely increasing their income. His work inspired the creation of the Human Development Index (HDI). Brundtland chaired the commission on sustainable development; Sachs is known for development economics; Smith is the father of classical economics.',
      },
    },
    {
      id: 'se-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain the difference between "absolute poverty" and "relative poverty." Give an example of each and discuss why both concepts are important for understanding poverty in different contexts.',
        hints: [
          'Absolute poverty is about a fixed minimum threshold; relative poverty is about comparison within a society',
          'Consider how a person could be above the absolute poverty line but still experience relative poverty in a wealthy country',
        ],
        solution: 'Absolute poverty refers to living below a fixed minimum income needed to meet basic survival needs (the World Bank defines this as less than USD 2.15 per day). Example: a subsistence farmer in rural Malawi who cannot afford adequate food. Relative poverty means having significantly less income than the average in your society, leading to social exclusion. Example: a single parent in Norway earning enough for basic survival but unable to afford the social activities and consumer goods considered normal in Norwegian society. Both concepts matter: absolute poverty captures severe deprivation, while relative poverty captures inequality and social exclusion within wealthy societies.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-3-def-2',
      type: 'definition',
      title: 'Causes of Poverty and Underdevelopment',
      content: `Poverty has multiple, interconnected causes. No single factor explains why some countries remain poor.

**Historical Causes:**

**Colonialism:**
European colonial powers (Britain, France, Spain, Portugal, the Netherlands, Belgium, Germany, Italy) controlled most of Africa, Asia, and the Americas for centuries. The legacy includes:
- Extraction of natural resources and wealth to enrich colonial powers
- Destruction of indigenous political, economic, and social structures
- Imposition of arbitrary borders that divided ethnic groups and united rival communities
- Creation of extractive institutions designed to benefit colonisers, not local populations
- Psychological and cultural damage from racism and subjugation

**The Slave Trade:**
The transatlantic slave trade (16th--19th centuries) forcibly removed an estimated 12.5 million Africans, devastating communities and economies across West and Central Africa.

**Structural Causes:**

**The Debt Trap:**
Many developing countries borrowed heavily in the 1970s and 1980s. When interest rates rose, they could not repay. Debt servicing consumed funds that could have been spent on education, healthcare, and infrastructure.

**Unfair Trade Rules:**
Agricultural subsidies in wealthy countries (EU, US) depress global prices, making it harder for farmers in developing countries to compete. Trade rules often favour industrialised nations.

**Corruption and Weak Governance:**
When leaders steal public funds or make decisions to benefit themselves rather than citizens, development stalls. Transparency International's Corruption Perceptions Index consistently shows a correlation between corruption and poverty.

**Internal Causes:**

**Conflict and Instability:**
War and civil conflict destroy infrastructure, displace populations, and divert resources from development.

**Climate Vulnerability:**
The poorest countries are often the most vulnerable to climate change (droughts, floods, rising sea levels) despite contributing least to greenhouse gas emissions.

**Brain Drain:**
When highly educated individuals emigrate to wealthier countries, developing nations lose the human capital they need most.

**The Poverty Trap:**
A vicious cycle in which poverty itself prevents escape: poor health leads to low productivity, which leads to low income, which leads to poor nutrition and education, which perpetuates poverty.`,
    },
    {
      id: 'se-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-4-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'The "resource curse" refers to:',
        options: [
          { id: 'a', text: 'Countries that lack natural resources and therefore cannot develop', isCorrect: false },
          { id: 'b', text: 'The paradox that countries rich in natural resources often experience slower economic growth and more corruption than resource-poor countries', isCorrect: true },
          { id: 'c', text: 'The depletion of natural resources due to overexploitation', isCorrect: false },
          { id: 'd', text: 'The fact that natural resources are unevenly distributed around the world', isCorrect: false },
        ],
        solution: 'Correct answer: b) The "resource curse" (also called the "paradox of plenty") describes the observation that countries with abundant natural resources, particularly oil and minerals, often experience slower economic growth, more corruption, and greater inequality than countries with fewer resources. Examples include Nigeria, Venezuela, and the Democratic Republic of Congo. The revenues from resources can fuel corruption, discourage diversification, and even trigger conflict ("resource wars").',
      },
    },
    {
      id: 'se-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-4-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Discuss how the legacy of colonialism continues to affect developing countries today. In your answer, identify at least three specific ways in which colonial history has shaped the economic, political, or social conditions of former colonies. Use examples from at least two different regions.',
        hints: [
          'Consider borders, institutions, economic structures, education systems, and resource extraction',
          'Think about Africa, South Asia, Latin America, or Southeast Asia',
        ],
        solution: 'A strong answer identifies specific colonial legacies: (1) Arbitrary borders -- many African borders, drawn by European powers at the Berlin Conference (1884-85), divided ethnic groups and united rivals, contributing to ethnic conflict (e.g., Rwanda, Nigeria). (2) Extractive institutions -- colonial powers created institutions to extract resources, not develop local economies, and many of these structures persisted after independence (e.g., plantation economies in Central America). (3) Economic dependency -- colonies were structured to export raw materials and import manufactured goods, a pattern that persists in many countries. (4) Cultural and psychological effects -- colonial education systems devalued indigenous languages and knowledge. Examples should span at least two regions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-3-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**Development** is a multidimensional concept encompassing economic growth, human capabilities, sustainability, and freedom. It cannot be measured by GDP alone.

**Amartya Sen's capability approach** redefines development as the expansion of human freedoms and choices.

**Absolute poverty** (below a fixed minimum) and **relative poverty** (below the societal average) are both important for understanding deprivation.

**The causes of poverty** are complex and interconnected: colonial history, unfair trade structures, corruption, conflict, climate vulnerability, debt, and brain drain all contribute.

**The resource curse** demonstrates that natural wealth does not automatically lead to development.

**Colonialism** left a lasting legacy on political boundaries, economic structures, institutions, and social conditions in former colonies across Africa, Asia, and Latin America.

**Key Vocabulary:**
- **Development** -- expansion of human capabilities and economic opportunities
- **Absolute poverty** -- living below the minimum needed for basic survival
- **Relative poverty** -- having significantly less than the societal average
- **Resource curse** -- the paradox of resource wealth leading to poor outcomes
- **Brain drain** -- emigration of skilled individuals from developing countries
- **Colonialism** -- foreign political and economic control over another territory`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-4-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay (300--400 words): Choose one developing country and analyze the main factors that have contributed to its current level of development. Consider historical, economic, political, and social factors. Use at least two development indicators (e.g., GDP per capita, HDI, Gini coefficient) to support your analysis.',
        hints: [
          'Select a country you can find reliable data on (e.g., Bangladesh, Rwanda, Bolivia, Vietnam)',
          'Do not only list problems -- also identify positive trends and successful policies',
        ],
        solution: 'A strong essay selects a specific country, provides relevant data (GDP per capita, HDI ranking, poverty rates), identifies multiple factors affecting development (historical context, governance quality, education investment, trade patterns, conflict history), and presents a balanced analysis that recognises both challenges and progress. For example, an essay on Rwanda might discuss the 1994 genocide, subsequent political stability, investment in education and technology, strong economic growth, but also concerns about political freedom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-4-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'The concept of "sustainable development" was prominently defined in the 1987 Brundtland Report. Who chaired the commission?',
        options: [
          { id: 'a', text: 'Kofi Annan', isCorrect: false },
          { id: 'b', text: 'Ban Ki-moon', isCorrect: false },
          { id: 'c', text: 'Gro Harlem Brundtland', isCorrect: true },
          { id: 'd', text: 'Nelson Mandela', isCorrect: false },
        ],
        solution: 'Correct answer: c) Gro Harlem Brundtland, the Norwegian Prime Minister, chaired the World Commission on Environment and Development (the "Brundtland Commission"). Its 1987 report, "Our Common Future," defined sustainable development as "development that meets the needs of the present without compromising the ability of future generations to meet their own needs." This definition remains foundational to global sustainability efforts, including the UN Sustainable Development Goals.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 4.4 Aid and Development Cooperation
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_4_4: TextbookChapter = {
  id: 'samf-engelsk-4-4',
  courseId: 'samf-engelsk',
  chapterNumber: '4.4',
  title: 'Aid and Development Cooperation',
  description: 'Analyze the role of foreign aid and development cooperation, examine different types of aid, evaluate their effectiveness, and explore Norway\'s position as a leading donor nation.',
  estimatedMinutes: 23,
  competenceGoals: [
    'describe different forms of development aid and cooperation',
    'evaluate the effectiveness and limitations of foreign aid',
    'analyze Norway\'s role in international development cooperation',
  ],
  keyTerms: [
    { term: 'Official Development Assistance (ODA)', definition: 'Government aid designed to promote the economic development and welfare of developing countries, as defined by the OECD' },
    { term: 'Bilateral aid', definition: 'Aid given directly from one government to another' },
    { term: 'Multilateral aid', definition: 'Aid channelled through international organisations such as the UN, World Bank, or regional development banks' },
    { term: 'Tied aid', definition: 'Aid that requires the recipient to spend the funds on goods or services from the donor country' },
    { term: 'NGO', definition: 'Non-governmental organisation -- a non-profit, citizen-based group that operates independently of government to address social or political issues' },
  ],
  content: [
    {
      id: 'se-4-4-intro',
      type: 'text',
      content: `## Aid and Development Cooperation

Foreign aid is one of the most debated topics in international development. Wealthy countries have spent trillions of dollars on aid since the 1960s, yet poverty persists in many parts of the world. Does aid work? Is it the right approach? Are there better alternatives? These questions are central to understanding global development.

**Why It Matters:**
- Norway allocates approximately 1% of its Gross National Income (GNI) to foreign aid -- one of the highest proportions in the world
- The effectiveness of aid directly affects hundreds of millions of lives
- Norwegian taxpayers fund significant development cooperation through Norad and other agencies
- Understanding aid debates is essential for informed democratic participation

**Learning Objectives:**
- Distinguish between different types of foreign aid
- Understand the history and evolution of development aid
- Evaluate arguments for and against aid
- Analyze Norway's role and approach to development cooperation`,
    },
    {
      id: 'se-4-4-def-1',
      type: 'definition',
      title: 'Types of Foreign Aid',
      content: `Foreign aid comes in many forms, each with different purposes, mechanisms, and consequences.

**By Channel:**
- **Bilateral aid:** Given directly from one government to another (e.g., Norway funding schools in Malawi)
- **Multilateral aid:** Channelled through international organisations (e.g., contributions to the World Bank, UNICEF, WHO)
- **NGO-channelled aid:** Funds distributed through non-governmental organisations (e.g., Norwegian Church Aid, Doctors Without Borders, the Red Cross)

**By Type:**
- **Humanitarian aid (emergency relief):** Short-term assistance in response to crises -- natural disasters, famine, conflict (e.g., food, medicine, shelter after an earthquake)
- **Development aid (long-term):** Longer-term investments in infrastructure, education, healthcare, governance, and economic capacity-building
- **Technical assistance:** Providing expertise, training, and knowledge transfer (e.g., Norwegian engineers helping build water systems)
- **Budget support:** Direct financial transfers to developing country governments to fund their own programmes
- **Debt relief:** Cancelling or reducing the debts owed by developing countries

**By Conditions:**
- **Tied aid:** The recipient must spend the funds on goods and services from the donor country. Critics argue this benefits the donor's economy more than the recipient's
- **Untied aid:** The recipient can spend the funds wherever they get the best value. This is generally considered more effective
- **Conditional aid:** Aid given on the condition that the recipient government implements specific reforms (e.g., anti-corruption measures, democratic governance, economic liberalisation)

**Official Development Assistance (ODA):**
The OECD Development Assistance Committee (DAC) defines ODA as government aid that:
1. Is administered with the promotion of economic development and welfare as the main objective
2. Contains a grant element (concessional terms)

The UN target, set in 1970, is for wealthy countries to give 0.7% of GNI as ODA. Only a handful of countries consistently meet this target, including Norway, Sweden, Denmark, and Luxembourg. Most major economies fall well short.`,
    },
    {
      id: 'se-4-4-example-1',
      type: 'example',
      title: 'Example: Norway\'s Development Cooperation',
      content: `Norway is one of the world's most generous aid donors in proportion to its national income. Understanding how Norway approaches development cooperation reveals both the potential and the limitations of aid.

**Key Facts:**
- Norway typically spends approximately 1% of GNI on ODA (well above the 0.7% UN target)
- In 2023, Norwegian ODA totalled approximately NOK 50 billion
- The Norwegian Agency for Development Cooperation (Norad) is the primary implementing body
- Key partner countries include Ethiopia, Malawi, Mozambique, Tanzania, and Afghanistan

**Norway's Focus Areas:**
1. **Education:** A top priority, especially girls' education in sub-Saharan Africa
2. **Health:** Fighting HIV/AIDS, malaria, and maternal mortality; vaccination programmes
3. **Climate and environment:** Forest conservation (the REDD+ initiative, particularly in Brazil and Indonesia)
4. **Good governance:** Supporting democratic institutions, anti-corruption efforts, and human rights
5. **Humanitarian response:** Emergency relief in conflict zones and natural disasters

**Norway's Distinctive Approaches:**
- **Oil for Development (OfD):** Sharing Norway's expertise in managing petroleum resources responsibly. Helps developing countries avoid the "resource curse"
- **The Norwegian Investment Fund for Developing Countries (Norfund):** Invests in profitable businesses in developing countries, creating jobs and economic growth
- **Peace diplomacy:** Norway has played mediation roles in conflict areas (e.g., the Oslo Accords between Israel and Palestine, peace processes in Colombia and the Philippines)

**Criticism of Norwegian Aid:**
- Some argue Norway's aid is too scattered across too many countries and sectors
- Questions about whether aid creates dependency rather than self-sufficiency
- The effectiveness of large budget support transfers to governments with corruption problems
- Whether Norway's petroleum exports contradict its climate-focused aid agenda`,
    },
    {
      id: 'se-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-4-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'The UN target for Official Development Assistance (ODA) is that wealthy countries should give what percentage of their Gross National Income (GNI)?',
        options: [
          { id: 'a', text: '0.1%', isCorrect: false },
          { id: 'b', text: '0.5%', isCorrect: false },
          { id: 'c', text: '0.7%', isCorrect: true },
          { id: 'd', text: '1.5%', isCorrect: false },
        ],
        solution: 'Correct answer: c) The UN target, set in 1970, is for wealthy countries to allocate 0.7% of their GNI to ODA. Only a handful of countries consistently meet this target, including Norway (which typically gives approximately 1%), Sweden, Denmark, and Luxembourg. Major economies like the US, Japan, and the UK generally fall well below 0.7%.',
      },
    },
    {
      id: 'se-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain the difference between "tied aid" and "untied aid." Discuss which form is generally considered more beneficial for the recipient country and why.',
        hints: [
          'Think about who benefits economically from tied aid',
          'Consider the flexibility that untied aid provides to recipient countries',
        ],
        solution: 'Tied aid requires the recipient to purchase goods or services from the donor country, while untied aid allows the recipient to spend funds wherever they get the best value. Untied aid is generally considered more beneficial because: (1) it allows recipients to purchase goods and services at competitive prices rather than being locked into potentially more expensive donor-country providers; (2) it supports local markets and industries in the recipient country; (3) it gives recipients greater ownership and control over their development priorities. Tied aid is criticised for primarily benefiting donor-country businesses and reducing the effective value of the aid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-4-def-2',
      type: 'definition',
      title: 'The Great Aid Debate: Does Aid Work?',
      content: `Few topics in development economics generate more disagreement than the effectiveness of foreign aid.

**The Case FOR Aid:**

**Jeffrey Sachs** (American economist, Columbia University):
- Extreme poverty is a "poverty trap" that countries cannot escape without external help
- Well-targeted aid in health, education, and infrastructure can break the trap
- The success of specific programmes proves aid works: vaccination campaigns, malaria bed nets, anti-retroviral drugs for HIV/AIDS
- Rich countries have a moral obligation to help -- and the financial resources to do so
- Key work: *The End of Poverty* (2005)

**Evidence of Success:**
- Global extreme poverty has fallen from 36% (1990) to under 10% (2023)
- Child mortality has halved since 1990, partly due to aid-funded health programmes
- Smallpox was eradicated through an internationally funded campaign
- The Green Revolution (aid-funded agricultural research) prevented mass famine

**The Case AGAINST Aid (or for reform):**

**William Easterly** (American economist, NYU):
- Top-down, large-scale aid plans ("Big Push") often fail because they ignore local knowledge and conditions
- Aid can prop up corrupt governments and reduce accountability to citizens
- "Planners" (who design grand aid schemes) should be replaced by "Searchers" (who experiment and adapt)
- Key work: *The White Man's Burden* (2006)

**Dambisa Moyo** (Zambian economist):
- Systematic government-to-government aid has made Africa more dependent, not less
- Aid flows reduce the incentive for governments to tax their citizens and be accountable
- Trade, investment, and entrepreneurship are more effective paths to development
- Aid creates a "culture of dependency"
- Key work: *Dead Aid* (2009)

**The Middle Ground:**
Most development experts now agree that:
- Aid works in some contexts and fails in others -- context matters enormously
- Good governance in the recipient country is the strongest predictor of aid effectiveness
- Aid should complement, not substitute for, trade, investment, and domestic reform
- Measuring results and learning from failures is essential
- Local ownership and participation improve outcomes`,
    },
    {
      id: 'se-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-4-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Dambisa Moyo, the Zambian economist, argued in her book *Dead Aid* that:',
        options: [
          { id: 'a', text: 'Wealthy countries should double their aid to Africa', isCorrect: false },
          { id: 'b', text: 'Systematic government-to-government aid has made Africa more dependent and that trade and investment are better alternatives', isCorrect: true },
          { id: 'c', text: 'All forms of aid should be immediately discontinued', isCorrect: false },
          { id: 'd', text: 'The World Bank should control all development funding', isCorrect: false },
        ],
        solution: 'Correct answer: b) Dambisa Moyo argued that decades of large-scale government-to-government aid have fostered dependency, reduced accountability, and failed to promote sustained development in Africa. She advocated for trade, foreign direct investment, microfinance, and entrepreneurship as more effective paths to development. Importantly, she did not argue against all aid -- she distinguished between humanitarian emergency aid (which she supported) and systematic development aid (which she criticised).',
      },
    },
    {
      id: 'se-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-4-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Summarise the main arguments of Jeffrey Sachs (in favour of aid) and Dambisa Moyo (critical of aid). Then write your own evaluation: which arguments do you find most convincing, and why? Is there a middle ground?',
        hints: [
          'Consider specific evidence for both sides (e.g., vaccination successes vs. dependency concerns)',
          'Think about whether the type of aid matters more than the amount',
        ],
        solution: 'A strong answer accurately summarises both positions: Sachs argues that poverty is a trap requiring external investment in health, education, and infrastructure; Moyo argues that systematic aid creates dependency, props up corrupt governments, and that trade is more effective. The evaluation should weigh specific evidence (aid-funded disease eradication vs. cases of aid dependency) and reach a nuanced conclusion. A sophisticated response might argue that the type, targeting, and governance context of aid matter more than the binary question of "for or against."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-4-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**Foreign aid** takes many forms: bilateral, multilateral, humanitarian, development, technical assistance, and debt relief. Each has different strengths and limitations.

**Tied aid** (requiring purchases from the donor country) is generally less effective than **untied aid** (allowing recipients to seek the best value).

**Norway** is among the world's most generous aid donors (approximately 1% of GNI), focusing on education, health, climate, and governance.

**The aid debate** features prominent voices on both sides: Jeffrey Sachs argues aid can break the poverty trap, while Dambisa Moyo and William Easterly argue it often creates dependency and inefficiency.

**The emerging consensus** is that aid works best when combined with good governance, local ownership, trade, and investment, and when results are carefully measured.

**Key Vocabulary:**
- **ODA** -- Official Development Assistance, as defined by the OECD
- **Bilateral aid** -- government-to-government assistance
- **Multilateral aid** -- aid through international organisations
- **Tied aid** -- aid requiring purchases from the donor country
- **Conditional aid** -- aid linked to policy reform requirements
- **NGO** -- non-governmental organisation working on social issues`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-4-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay (300--400 words): "Should Norway continue to spend 1% of its GNI on foreign aid?" Present arguments both for and against Norway\'s current aid spending level. Consider the domestic debate (some argue the money should be spent at home) and the international perspective (Norway\'s role as a model donor). State and justify your own position.',
        hints: [
          'Consider Norway\'s wealth from petroleum, its international reputation, and the effectiveness of Norwegian aid',
          'Address the criticism that aid money could be better spent on domestic challenges',
        ],
        solution: 'A strong essay presents balanced arguments: For maintaining 1%: Norway\'s petroleum wealth creates a moral obligation; Norwegian aid has measurable successes (disease reduction, education access); Norway\'s reputation as a generous donor gives it influence in international affairs. Against: domestic challenges (healthcare waiting lists, infrastructure) could benefit from the funds; questions about aid effectiveness and dependency; should other countries bear more responsibility. The student should state a clear position and justify it with specific evidence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-4-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Norway\'s "Oil for Development" (OfD) programme primarily aims to:',
        options: [
          { id: 'a', text: 'Sell Norwegian oil to developing countries at reduced prices', isCorrect: false },
          { id: 'b', text: 'Share Norway\'s expertise in managing petroleum resources responsibly to help other countries avoid the resource curse', isCorrect: true },
          { id: 'c', text: 'Extract oil from developing countries on behalf of their governments', isCorrect: false },
          { id: 'd', text: 'Fund Norwegian oil companies\' expansion into developing markets', isCorrect: false },
        ],
        solution: 'Correct answer: b) Oil for Development (OfD) is a Norwegian development programme that shares Norway\'s experience in responsible petroleum resource management with developing countries. The goal is to help these countries establish transparent governance frameworks, environmental safeguards, and financial management systems for their own petroleum resources, thereby avoiding the "resource curse." It does not involve selling or extracting oil.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// 4.5 The Sustainable Development Goals
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_4_5: TextbookChapter = {
  id: 'samf-engelsk-4-5',
  courseId: 'samf-engelsk',
  chapterNumber: '4.5',
  title: 'The Sustainable Development Goals',
  description: 'Examine the United Nations\' 17 Sustainable Development Goals (SDGs), their ambition to transform the world by 2030, the progress made so far, and the challenges that remain.',
  estimatedMinutes: 22,
  competenceGoals: [
    'describe the UN Sustainable Development Goals and their purpose',
    'evaluate progress toward achieving the SDGs',
    'discuss the interconnections between different development challenges',
  ],
  keyTerms: [
    { term: 'Sustainable Development Goals (SDGs)', definition: 'A set of 17 global goals adopted by all UN member states in 2015, providing a shared blueprint for peace, prosperity, people, and the planet by 2030' },
    { term: 'Agenda 2030', definition: 'The UN resolution that established the SDGs, committing all 193 member states to work toward sustainable development' },
    { term: 'Millennium Development Goals (MDGs)', definition: 'The predecessor to the SDGs (2000-2015), consisting of eight goals focused primarily on reducing extreme poverty in developing countries' },
    { term: 'Sustainability', definition: 'Meeting present needs without compromising the ability of future generations to meet their own needs' },
    { term: 'Climate justice', definition: 'The principle that the burdens and benefits of climate change and climate action should be distributed fairly, recognising that the poorest and most vulnerable are disproportionately affected' },
  ],
  content: [
    {
      id: 'se-4-5-intro',
      type: 'text',
      content: `## The Sustainable Development Goals

In September 2015, all 193 United Nations member states adopted the 2030 Agenda for Sustainable Development -- the most ambitious global development plan in history. At its heart are 17 Sustainable Development Goals (SDGs) with 169 specific targets, covering everything from ending poverty to combating climate change to promoting peace and justice.

**Why It Matters:**
- The SDGs represent the world's shared vision for the future
- They apply to ALL countries -- rich and poor -- unlike the previous Millennium Development Goals
- Norway has committed to achieving the SDGs both domestically and through international cooperation
- Understanding the SDGs is essential for any discussion of global challenges and solutions

**Learning Objectives:**
- Identify the 17 Sustainable Development Goals and their core themes
- Understand the relationship between the SDGs and the earlier Millennium Development Goals
- Evaluate global progress toward achieving the SDGs
- Analyze the interconnections between different goals and the challenges of implementation`,
    },
    {
      id: 'se-4-5-def-1',
      type: 'definition',
      title: 'The 17 Sustainable Development Goals',
      content: `The SDGs cover five broad areas, often called the "5 Ps": People, Prosperity, Planet, Peace, and Partnership.

**PEOPLE:**
- **Goal 1: No Poverty** -- End poverty in all its forms everywhere
- **Goal 2: Zero Hunger** -- End hunger, achieve food security, improve nutrition, and promote sustainable agriculture
- **Goal 3: Good Health and Well-Being** -- Ensure healthy lives and promote well-being for all at all ages
- **Goal 4: Quality Education** -- Ensure inclusive and equitable quality education and promote lifelong learning
- **Goal 5: Gender Equality** -- Achieve gender equality and empower all women and girls

**PROSPERITY:**
- **Goal 6: Clean Water and Sanitation** -- Ensure availability and sustainable management of water and sanitation for all
- **Goal 7: Affordable and Clean Energy** -- Ensure access to affordable, reliable, sustainable, and modern energy for all
- **Goal 8: Decent Work and Economic Growth** -- Promote sustained, inclusive, and sustainable economic growth, full employment, and decent work
- **Goal 9: Industry, Innovation, and Infrastructure** -- Build resilient infrastructure, promote inclusive industrialisation, and foster innovation
- **Goal 10: Reduced Inequalities** -- Reduce inequality within and among countries

**PLANET:**
- **Goal 11: Sustainable Cities and Communities** -- Make cities and human settlements inclusive, safe, resilient, and sustainable
- **Goal 12: Responsible Consumption and Production** -- Ensure sustainable consumption and production patterns
- **Goal 13: Climate Action** -- Take urgent action to combat climate change and its impacts
- **Goal 14: Life Below Water** -- Conserve and sustainably use the oceans, seas, and marine resources
- **Goal 15: Life on Land** -- Protect, restore, and promote sustainable use of terrestrial ecosystems

**PEACE and PARTNERSHIP:**
- **Goal 16: Peace, Justice, and Strong Institutions** -- Promote peaceful and inclusive societies, provide access to justice, and build effective institutions
- **Goal 17: Partnerships for the Goals** -- Strengthen the means of implementation and revitalise the Global Partnership for Sustainable Development

**Key Differences from the MDGs (2000--2015):**
- The MDGs had 8 goals; the SDGs have 17
- The MDGs focused primarily on developing countries; the SDGs are universal (all countries)
- The SDGs include environmental sustainability, inequality, and governance -- broader than the MDGs
- The SDGs were developed through a more inclusive process involving governments, civil society, and the private sector`,
    },
    {
      id: 'se-4-5-example-1',
      type: 'example',
      title: 'Example: How the SDGs Are Interconnected',
      content: `The SDGs are designed to be integrated and indivisible -- progress on one goal often depends on and contributes to progress on others. Here are several examples:

**Education (Goal 4) and Poverty (Goal 1):**
Education is one of the most powerful tools for escaping poverty. Each additional year of schooling increases an individual's earning potential by approximately 10%. Educating girls has cascading effects: educated women have fewer children, better health outcomes, and higher incomes.

**Gender Equality (Goal 5) and Economic Growth (Goal 8):**
McKinsey Global Institute estimated that advancing gender equality could add USD 12 trillion to global GDP by 2025. When women participate fully in the economy, productivity increases and poverty decreases.

**Climate Action (Goal 13) and Clean Water (Goal 6):**
Climate change is disrupting water cycles, causing more severe droughts and floods. Progress on climate action directly protects water resources for billions of people.

**Health (Goal 3) and Clean Water (Goal 6):**
Contaminated water causes diseases that kill hundreds of thousands of children annually. Access to clean water and sanitation is a prerequisite for good health.

**A Negative Example -- Trade-offs:**
Rapid industrialisation (Goal 9) can conflict with climate action (Goal 13) and life on land (Goal 15) if it relies on fossil fuels and deforestation. Economic growth (Goal 8) can undermine responsible consumption (Goal 12) if it promotes overconsumption. This is why the word "sustainable" is so important -- the goals must be pursued in balance.

**Norway's Challenge:**
Norway performs well on most SDGs domestically (low poverty, high education, strong institutions). However, Norway's economy remains heavily dependent on petroleum exports, which contribute to global climate change (Goal 13). Norway's high consumption levels also challenge Goal 12 (Responsible Consumption). The SDGs highlight that even wealthy countries have significant room for improvement.`,
    },
    {
      id: 'se-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-4-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'How many Sustainable Development Goals (SDGs) were adopted by the United Nations in 2015?',
        options: [
          { id: 'a', text: '8', isCorrect: false },
          { id: 'b', text: '12', isCorrect: false },
          { id: 'c', text: '17', isCorrect: true },
          { id: 'd', text: '21', isCorrect: false },
        ],
        solution: 'Correct answer: c) The United Nations adopted 17 Sustainable Development Goals in September 2015 as part of the 2030 Agenda for Sustainable Development. They replaced the 8 Millennium Development Goals (MDGs), which had guided development efforts from 2000 to 2015. The 17 SDGs contain 169 specific targets covering poverty, health, education, equality, climate, and governance.',
      },
    },
    {
      id: 'se-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-4-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Choose two SDGs and explain how they are interconnected -- that is, how progress on one goal can support or hinder progress on the other. Use a specific real-world example to illustrate the connection.',
        hints: [
          'Think about education and poverty, health and clean water, climate and hunger, or gender equality and economic growth',
          'Consider both positive connections (synergies) and potential conflicts (trade-offs)',
        ],
        solution: 'A strong answer selects two specific SDGs, clearly explains the causal mechanism linking them (e.g., "improving access to clean water (Goal 6) reduces waterborne diseases, directly improving health outcomes (Goal 3)"), and provides a concrete example (e.g., "In Bangladesh, investments in arsenic-free water wells reduced child mortality by 20% in targeted areas"). The answer should demonstrate understanding that the SDGs are interconnected, not isolated.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-5-def-2',
      type: 'definition',
      title: 'Progress and Challenges',
      content: `With the 2030 deadline approaching, assessments of SDG progress reveal a mixed picture.

**Where Progress Has Been Made:**
- **Extreme poverty (Goal 1):** Global extreme poverty fell from 36% in 1990 to approximately 9% by 2023, though progress has slowed since 2020
- **Child mortality (Goal 3):** Deaths of children under five dropped from 12.7 million in 1990 to approximately 5 million in 2022
- **Education (Goal 4):** Primary school enrolment rates have reached over 90% globally
- **Clean energy (Goal 7):** Renewable energy is the fastest-growing energy source, with solar costs falling 90% since 2010
- **Access to electricity:** The proportion of the global population with access rose from 83% (2010) to 91% (2022)

**Where Progress Has Stalled or Reversed:**
- **Hunger (Goal 2):** After years of decline, global hunger has risen since 2019, with approximately 735 million people affected (worsened by COVID-19, the war in Ukraine, and climate change)
- **Climate (Goal 13):** Global greenhouse gas emissions continue to rise; the world is not on track to limit warming to 1.5 degrees Celsius
- **Biodiversity (Goals 14, 15):** Species extinction rates are accelerating; deforestation continues in key regions
- **Inequality (Goal 10):** The gap between the richest and poorest countries has widened; the COVID-19 pandemic disproportionately affected the poorest populations
- **Conflict (Goal 16):** The number of displaced people has reached record levels (over 110 million in 2023)

**Major Challenges:**
1. **COVID-19 pandemic:** Reversed years of progress in poverty reduction, education, and health
2. **Climate change:** Threatens food security, water access, and infrastructure, particularly in the most vulnerable countries
3. **Geopolitical conflict:** The war in Ukraine disrupted global food and energy supplies; conflicts in the Middle East and sub-Saharan Africa displace millions
4. **Financing gap:** An estimated USD 4 trillion per year is needed to achieve the SDGs; current spending falls far short
5. **Political will:** Many governments have not fully integrated the SDGs into national policy and budgeting

**The 2030 Reckoning:**
The UN Secretary-General's SDG Progress Report has warned that at current rates, the world will not meet most of the 169 targets by 2030. A "rescue plan" requiring accelerated action and significantly increased funding has been proposed, but implementation remains uncertain.`,
    },
    {
      id: 'se-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-4-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Which of the following is NOT one of the "5 Ps" that organise the SDGs?',
        options: [
          { id: 'a', text: 'People', isCorrect: false },
          { id: 'b', text: 'Planet', isCorrect: false },
          { id: 'c', text: 'Profit', isCorrect: true },
          { id: 'd', text: 'Peace', isCorrect: false },
        ],
        solution: 'Correct answer: c) "Profit" is not one of the 5 Ps. The SDGs are organised around five themes: People, Prosperity, Planet, Peace, and Partnership. The deliberate use of "Prosperity" rather than "Profit" reflects the SDGs\' emphasis on inclusive, sustainable economic growth that benefits everyone, rather than profit for its own sake.',
      },
    },
    {
      id: 'se-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-4-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'The UN has warned that the world is not on track to achieve most SDG targets by 2030. Choose one SDG where progress has stalled or reversed and explain: (a) what the original target was, (b) why progress has been insufficient, and (c) what actions could be taken to accelerate progress.',
        hints: [
          'Consider Goals 2 (hunger), 13 (climate), 10 (inequality), or 16 (peace) as possible choices',
          'Think about the impact of COVID-19, conflict, and climate change on progress',
        ],
        solution: 'A strong answer selects a specific SDG, accurately describes its target, identifies specific obstacles to progress (e.g., for Goal 2/Zero Hunger: COVID-19 disrupted food supply chains, the Ukraine war raised grain prices, climate change caused droughts in East Africa), and proposes concrete accelerating actions (e.g., increased investment in climate-resilient agriculture, reform of agricultural subsidies in wealthy countries, strengthening social protection systems). The response should demonstrate understanding of both the goal and the systemic challenges to achieving it.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-5-summary',
      type: 'text',
      title: 'Summary',
      content: `## Key Takeaways

**The 17 Sustainable Development Goals (SDGs)** represent the world's most comprehensive plan for addressing poverty, inequality, climate change, and governance by 2030.

**The SDGs are universal** -- they apply to all countries, not just developing nations. Even wealthy countries like Norway face challenges (e.g., climate action, responsible consumption).

**The SDGs are interconnected** -- progress on one goal often supports progress on others, but trade-offs can also occur.

**Progress has been mixed:** significant gains in poverty reduction, child mortality, and clean energy, but setbacks in hunger, climate action, biodiversity, and equality.

**Major obstacles** include the COVID-19 pandemic, climate change, geopolitical conflict, and a massive financing gap.

**Norway's role** includes both domestic implementation and significant international support through development aid and diplomacy.

**Key Vocabulary:**
- **SDGs** -- 17 global goals adopted by the UN in 2015 for achievement by 2030
- **Agenda 2030** -- the UN resolution establishing the SDGs
- **MDGs** -- the predecessor goals (2000--2015) with 8 targets
- **Sustainability** -- meeting present needs without compromising future generations
- **Climate justice** -- fair distribution of climate change burdens and benefits
- **5 Ps** -- People, Prosperity, Planet, Peace, Partnership`,
    },
    // --- Samleoppgaver ---
    {
      id: 'se-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-4-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Essay (300--400 words): Choose one Sustainable Development Goal and write a detailed analysis of global progress toward achieving it. Your essay should include: (a) a description of the goal and its key targets, (b) an assessment of current progress with specific data or examples, (c) an analysis of the main obstacles, and (d) your own recommendations for accelerating progress.',
        hints: [
          'Use the UN SDG Progress Reports or Sustainable Development Report for data',
          'Consider how COVID-19, climate change, and conflict have affected progress',
        ],
        solution: 'A strong essay demonstrates in-depth knowledge of one SDG, uses specific data or examples to assess progress (e.g., "Goal 4/Quality Education: while primary enrolment has reached 90%, 250 million children remain out of school, and the COVID-19 pandemic caused significant learning losses"), identifies systemic obstacles, and proposes realistic recommendations. The essay should show critical thinking about both the potential and limitations of the SDG framework.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-4-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'The SDGs replaced an earlier set of global development targets. What were these predecessors called?',
        options: [
          { id: 'a', text: 'The Global Development Objectives (GDOs)', isCorrect: false },
          { id: 'b', text: 'The Millennium Development Goals (MDGs)', isCorrect: true },
          { id: 'c', text: 'The International Development Targets (IDTs)', isCorrect: false },
          { id: 'd', text: 'The World Progress Goals (WPGs)', isCorrect: false },
        ],
        solution: 'Correct answer: b) The Millennium Development Goals (MDGs) were adopted in 2000 and ran until 2015. They consisted of 8 goals focused primarily on reducing extreme poverty in developing countries. While the MDGs achieved significant progress (halving extreme poverty, reducing child mortality, expanding access to education), they were criticised for not addressing inequality, sustainability, or governance. The SDGs were designed to be broader, more inclusive, and universal.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT
// ============================================================================

export const SAMF_ENGELSK_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMF_ENGELSK_4_1,
  CHAPTER_SAMF_ENGELSK_4_2,
  CHAPTER_SAMF_ENGELSK_4_3,
  CHAPTER_SAMF_ENGELSK_4_4,
  CHAPTER_SAMF_ENGELSK_4_5,
];
