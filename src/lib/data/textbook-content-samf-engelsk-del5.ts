/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SECTION 5: Environmental Issues
// ============================================================================

// ============================================================================
// CHAPTER 5.1: Climate Change
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_5_1: TextbookChapter = {
  id: 'samf-engelsk-5-1',
  courseId: 'samf-engelsk',
  chapterNumber: '5.1',
  title: 'Climate Change',
  description: 'Understand the science, politics, and social dimensions of climate change, including the greenhouse effect, international agreements, and the debate surrounding climate action.',
  estimatedMinutes: 22,
  competenceGoals: [
    'discuss and elaborate on climate change as a global challenge, including causes, consequences, and political responses',
    'analyze English-language texts about environmental issues and evaluate different perspectives on climate policy',
  ],
  content: [
    {
      id: 'se-5-1-intro',
      type: 'text',
      content: `# Climate Change

In 2015, representatives from 196 countries gathered in Paris to sign what would become the most ambitious international climate agreement in history. The Paris Agreement committed the world to keeping global warming well below two degrees Celsius above pre-industrial levels, with efforts to limit it to 1.5 degrees. It was hailed as a turning point -- proof that humanity could come together to face its greatest collective challenge.

Yet less than a decade later, the world was on track for roughly 2.7 degrees of warming by the end of the century. Emissions continued to rise. Fossil fuel production expanded. Extreme weather events -- wildfires, floods, droughts, hurricanes -- became more frequent and more devastating. The gap between what scientists said was necessary and what governments were willing to do had become the defining tension of our era.

Climate change is not merely an environmental issue. It is a political, economic, social, and moral challenge that touches every aspect of human life. Understanding it requires scientific literacy, but it also requires the ability to think critically about power, justice, and the choices societies make about their future. This chapter examines the science behind climate change, the political responses to it, and the debates that continue to shape climate policy around the world.`,
    },
    {
      id: 'se-5-1-def-greenhouse',
      type: 'definition',
      title: 'The Greenhouse Effect',
      content: `**The greenhouse effect** is a natural process by which certain gases in the Earth's atmosphere trap heat from the sun, keeping the planet warm enough to sustain life. Without the greenhouse effect, Earth's average temperature would be approximately -18 degrees Celsius rather than the current average of about 15 degrees.

**How it works:**
- Solar radiation passes through the atmosphere and warms the Earth's surface
- The surface radiates heat (infrared radiation) back toward space
- Greenhouse gases -- including carbon dioxide (CO2), methane (CH4), nitrous oxide (N2O), and water vapor -- absorb some of this outgoing radiation and re-emit it in all directions
- This traps heat in the lower atmosphere, warming the planet

**The problem:**
Human activities, particularly the burning of fossil fuels (coal, oil, and natural gas), deforestation, and industrial agriculture, have dramatically increased the concentration of greenhouse gases in the atmosphere. CO2 levels have risen from approximately 280 parts per million (ppm) before the Industrial Revolution to over 420 ppm today. This enhanced greenhouse effect is causing the planet to warm at an unprecedented rate.

**Key term:** The difference between the natural greenhouse effect (essential for life) and the enhanced greenhouse effect (caused by human activity) is fundamental to understanding climate science.`,
    },
    {
      id: 'se-5-1-example-paris',
      type: 'example',
      title: 'Example: The Paris Agreement and Its Challenges',
      problem: 'What makes the Paris Agreement significant, and why has it proven difficult to implement?',
      solution: `The **Paris Agreement** (2015) was a landmark in international climate diplomacy for several reasons:

**Significance:**
- It was the first agreement to include nearly every nation on Earth (196 parties)
- It set a clear temperature target: limit warming to well below 2 degrees Celsius, preferably 1.5 degrees
- It introduced the concept of Nationally Determined Contributions (NDCs), where each country sets its own emission reduction targets
- It established a framework for financial support from wealthy nations to developing countries

**Challenges in implementation:**
1. **Voluntary targets:** NDCs are not legally binding. Countries set their own targets and face no penalties for missing them. This has led to widespread underperformance.
2. **The equity debate:** Developing nations argue that wealthy countries, which are historically responsible for most emissions, should bear the greatest burden. Many developing nations need fossil fuels for economic growth and poverty reduction.
3. **Political reversals:** The United States withdrew from the agreement under President Trump in 2017, rejoined under President Biden in 2021, and faced further political uncertainty in subsequent years.
4. **The gap between pledges and action:** Even if all current NDCs were fully implemented, the world would still warm by approximately 2.5-2.7 degrees -- far above the 1.5-degree target.

The Paris Agreement represents both the possibility of global cooperation and the enormous difficulty of translating good intentions into concrete action.`,
    },
    {
      id: 'se-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What is the primary cause of the enhanced greenhouse effect?',
        options: [
          { id: 'a', text: 'Natural volcanic eruptions releasing CO2 into the atmosphere', isCorrect: false },
          { id: 'b', text: 'Human activities such as burning fossil fuels and deforestation that increase greenhouse gas concentrations', isCorrect: true },
          { id: 'c', text: 'Depletion of the ozone layer allowing more solar radiation to enter', isCorrect: false },
          { id: 'd', text: 'Increased solar activity causing the sun to emit more energy', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The enhanced greenhouse effect is primarily caused by human activities that increase the concentration of greenhouse gases in the atmosphere. Burning fossil fuels (coal, oil, natural gas), deforestation, and industrial agriculture have raised CO2 levels from about 280 ppm to over 420 ppm since the Industrial Revolution.',
      },
    },
    {
      id: 'se-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-5-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'What are Nationally Determined Contributions (NDCs) in the context of the Paris Agreement?',
        options: [
          { id: 'a', text: 'Legally binding emission caps imposed on all countries by the United Nations', isCorrect: false },
          { id: 'b', text: 'Financial payments that developing countries must make to fund climate research', isCorrect: false },
          { id: 'c', text: 'Voluntary emission reduction targets that each country sets for itself', isCorrect: true },
          { id: 'd', text: 'Mandatory contributions to a global climate emergency fund', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Nationally Determined Contributions (NDCs) are the voluntary climate action plans that each country designs for itself under the Paris Agreement. They outline how a nation intends to reduce its greenhouse gas emissions. A key challenge is that NDCs are not legally binding and countries face no penalties for failing to meet their targets.',
      },
    },
    {
      id: 'se-5-1-def-tipping',
      type: 'definition',
      title: 'Climate Tipping Points',
      content: `**Climate tipping points** are critical thresholds in the Earth's climate system beyond which changes become self-reinforcing and potentially irreversible, even if human emissions are subsequently reduced.

**Examples of tipping points:**
- **Arctic sea ice loss:** As ice melts, it exposes dark ocean water that absorbs more heat, which melts more ice -- a feedback loop
- **Amazon rainforest dieback:** Prolonged drought and deforestation could push the Amazon past a threshold where it can no longer sustain itself as a rainforest and converts to savanna
- **Permafrost thaw:** Warming temperatures melt permafrost in Siberia and Canada, releasing stored methane and CO2 that cause further warming
- **Ice sheet collapse:** The Greenland and West Antarctic ice sheets could reach a point of irreversible melting, causing several meters of sea level rise over centuries

**Why tipping points matter:**
Scientists warn that some tipping points may be triggered between 1.5 and 2 degrees of warming. Once crossed, these thresholds could trigger cascading effects -- where one tipping point triggers another -- potentially leading to a "hothouse Earth" scenario that would be catastrophic for human civilization.`,
    },
    {
      id: 'se-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain the difference between the natural greenhouse effect and the enhanced greenhouse effect in your own words. Why is this distinction important for understanding climate change?',
        hints: [
          'Think about what greenhouse gases do naturally versus what happens when their concentration increases',
          'Consider why some people confuse the two and how this affects the climate debate',
        ],
        solution: 'The natural greenhouse effect is the process by which gases like CO2 and water vapor trap heat in the atmosphere, keeping Earth warm enough for life (about 15 degrees Celsius instead of -18 degrees). The enhanced greenhouse effect occurs when human activities -- primarily burning fossil fuels -- increase the concentration of these gases, trapping more heat and causing additional warming. This distinction is important because it clarifies that the problem is not greenhouse gases themselves (which are essential for life), but the dramatic increase in their concentration caused by human activity since the Industrial Revolution.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'The concept of "climate justice" argues that the countries most responsible for causing climate change are often different from those most affected by it. In 200-250 words, explain this argument and discuss whether you think wealthy nations have a special responsibility to act on climate change.',
        hints: [
          'Consider the historical emissions of industrialized nations versus the vulnerability of developing nations',
          'Think about the equity debate within the Paris Agreement and the concept of "common but differentiated responsibilities"',
        ],
        solution: 'Climate justice highlights the inequality at the heart of the climate crisis. Wealthy industrialized nations (such as the US, EU countries, and Japan) are historically responsible for the majority of cumulative greenhouse gas emissions, yet developing nations in the Global South -- particularly small island states, sub-Saharan Africa, and South Asia -- are most vulnerable to its effects. A strong response will discuss how this creates an ethical obligation for wealthy nations to lead emission reductions and provide financial support for climate adaptation. It may also address the tension between economic development needs in poorer countries and the urgency of reducing global emissions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-1-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

Climate change is driven by the **enhanced greenhouse effect**, in which human activities -- primarily burning fossil fuels -- increase atmospheric greenhouse gas concentrations, trapping more heat and warming the planet at an unprecedented rate.

Key points from this chapter:

- The **natural greenhouse effect** is essential for life, but human activity has amplified it to dangerous levels, with CO2 concentrations rising from 280 ppm to over 420 ppm since the Industrial Revolution.
- The **Paris Agreement** (2015) committed 196 nations to limiting warming to well below 2 degrees Celsius, but voluntary national targets (NDCs) and political challenges have left the world on track for approximately 2.7 degrees of warming.
- **Climate tipping points** -- such as Arctic ice loss, permafrost thaw, and Amazon dieback -- represent critical thresholds beyond which changes become self-reinforcing and potentially irreversible.
- Climate change raises profound questions of **justice**, as the nations most responsible for emissions are often different from those most vulnerable to the consequences.

Understanding climate change requires not only scientific knowledge but also the ability to analyze the political, economic, and ethical dimensions of this global challenge.`,
    },
    {
      id: 'se-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research one specific climate tipping point (for example, permafrost thaw, Amazon dieback, or ice sheet collapse). In 150-200 words, explain what it is, why scientists are concerned about it, and what the potential consequences could be if this tipping point is crossed.',
        hints: [
          'Choose one tipping point and explain it clearly, including the feedback mechanism involved',
          'Consider what "irreversible" means in this context and why it makes tipping points especially dangerous',
        ],
        solution: 'A strong response will clearly explain one tipping point, including the feedback mechanism that makes it self-reinforcing. For example, permafrost thaw: rising temperatures melt frozen ground in Siberia and Canada, releasing stored methane and CO2. These gases cause further warming, which melts more permafrost -- a positive feedback loop. Scientists are concerned because permafrost contains roughly twice as much carbon as the entire atmosphere, and once large-scale thawing begins, it cannot be stopped by reducing human emissions alone.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-5-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Some people argue that economic growth and poverty reduction should take priority over climate action, especially in developing countries. Others argue that climate change is an existential threat that demands immediate action from all nations. Write 200-250 words presenting both sides of this debate and explaining which position you find more convincing.',
        hints: [
          'Consider the argument that developing nations need cheap energy to lift people out of poverty',
          'Think about how climate change itself threatens economic development, food security, and human welfare in developing nations',
        ],
        solution: 'A balanced response will present both perspectives fairly. On one side, developing nations argue that restricting fossil fuel use limits economic growth needed to reduce poverty; wealthy nations industrialized without climate constraints, so imposing them on developing nations is unfair. On the other side, climate change threatens to undo development gains through extreme weather, food insecurity, and displacement. Many argue that renewable energy now offers a pathway to development without fossil fuels. The student should state a clear position and support it with reasoning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Greenhouse effect', definition: 'The natural process by which atmospheric gases trap heat from the sun, warming the Earth\'s surface.' },
    { term: 'Enhanced greenhouse effect', definition: 'The intensification of the greenhouse effect caused by human-produced increases in atmospheric greenhouse gas concentrations.' },
    { term: 'Paris Agreement', definition: 'The 2015 international treaty committing 196 nations to limit global warming to well below 2 degrees Celsius.' },
    { term: 'Climate tipping point', definition: 'A critical threshold beyond which changes in the climate system become self-reinforcing and potentially irreversible.' },
    { term: 'Nationally Determined Contributions (NDCs)', definition: 'Voluntary emission reduction targets that each country sets for itself under the Paris Agreement.' },
  ],
};

// ============================================================================
// CHAPTER 5.2: Energy and Fossil Fuels
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_5_2: TextbookChapter = {
  id: 'samf-engelsk-5-2',
  courseId: 'samf-engelsk',
  chapterNumber: '5.2',
  title: 'Energy and Fossil Fuels',
  description: 'Examine the role of fossil fuels in the global economy, the geopolitics of energy, the transition to renewable sources, and the social consequences of energy dependency.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analyze the role of energy production in global politics and economics, with a focus on the transition from fossil fuels to renewable sources',
    'discuss how energy policy affects different communities and nations, including issues of inequality and development',
  ],
  content: [
    {
      id: 'se-5-2-intro',
      type: 'text',
      content: `# Energy and Fossil Fuels

Modern civilization runs on energy. Every factory, vehicle, hospital, smartphone, and heated building depends on a steady supply of it. For over a century, that supply has been dominated by three fossil fuels: coal, oil, and natural gas. Together, they still account for roughly 80 percent of global energy consumption.

The consequences of this dependency are now impossible to ignore. Fossil fuel combustion is the single largest source of the greenhouse gas emissions driving climate change. It pollutes the air in cities around the world, causing millions of premature deaths each year. And the competition for control of fossil fuel resources has shaped -- and distorted -- international relations, fueling wars, propping up authoritarian regimes, and concentrating enormous wealth in the hands of a small number of corporations and petrostates.

Yet fossil fuels have also been the engine of unprecedented economic growth. They powered the Industrial Revolution, lifted billions out of poverty, and enabled the modern standard of living that much of the world's population now enjoys. The challenge of the twenty-first century is to transition away from fossil fuels without destroying the economic progress they made possible -- and to do so quickly enough to prevent catastrophic climate change.

This chapter examines the global energy system, the geopolitics of fossil fuels, and the transition to renewable energy.`,
    },
    {
      id: 'se-5-2-def-fossil',
      type: 'definition',
      title: 'Fossil Fuels',
      content: `**Fossil fuels** are energy sources formed from the remains of ancient organisms over millions of years. The three primary fossil fuels are coal, oil (petroleum), and natural gas. They are called "fossil" fuels because they are derived from fossilized organic matter.

**Key characteristics:**
- **Non-renewable:** Once extracted and burned, fossil fuels cannot be replaced on any human timescale. Formation takes millions of years.
- **Carbon-intensive:** Burning fossil fuels releases carbon dioxide (CO2), the primary greenhouse gas driving climate change.
- **Energy-dense:** Fossil fuels contain a very high amount of energy per unit of weight or volume, which is why they have been so economically valuable.
- **Unevenly distributed:** Large reserves of oil, coal, and gas are concentrated in a relatively small number of countries, creating geopolitical power imbalances.

**Global share of energy (approximate):**
- Oil: ~31% of global energy consumption
- Coal: ~27%
- Natural gas: ~24%
- Renewables (including hydro): ~13%
- Nuclear: ~5%

**Key producers:**
- **Oil:** Saudi Arabia, United States, Russia
- **Coal:** China, India, Indonesia, United States
- **Natural gas:** United States, Russia, Iran, Qatar`,
    },
    {
      id: 'se-5-2-example-norway',
      type: 'example',
      title: 'Example: Norway\'s Oil Paradox',
      problem: 'How does Norway illustrate the contradictions of the global energy transition?',
      solution: `Norway is often held up as a global leader in environmental policy. It has the world's highest rate of electric vehicle adoption, generates nearly all its domestic electricity from hydropower, and has committed to ambitious emission reduction targets. At the same time, Norway is one of the world's largest exporters of oil and natural gas.

**The paradox:**
- Norway's enormous wealth -- its sovereign wealth fund exceeds $1.5 trillion -- was built almost entirely on fossil fuel extraction
- The country continues to issue new licenses for oil and gas exploration in the Arctic
- Norwegian oil companies argue that their production is "cleaner" than competitors', but the majority of emissions come from burning the fuel, not extracting it
- Norway exports emissions: while its domestic emissions are relatively low, the oil and gas it sells to other countries generate roughly ten times more CO2 than Norway's entire domestic output

**Critical perspectives:**
- Supporters argue that Norwegian oil and gas can serve as a "bridge fuel" during the transition, and that abruptly halting production would harm both Norway's economy and global energy security
- Critics call Norway's position hypocritical: it profits from the climate crisis while branding itself as a climate leader
- Environmental organizations have sued the Norwegian government, arguing that new Arctic drilling licenses violate constitutional environmental protections

Norway's dilemma mirrors the broader global challenge: how do nations and economies built on fossil fuels transition to clean energy without economic collapse?`,
    },
    {
      id: 'se-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Approximately what percentage of global energy consumption comes from fossil fuels (coal, oil, and natural gas combined)?',
        options: [
          { id: 'a', text: 'About 50%', isCorrect: false },
          { id: 'b', text: 'About 60%', isCorrect: false },
          { id: 'c', text: 'About 80%', isCorrect: true },
          { id: 'd', text: 'About 95%', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Fossil fuels (coal, oil, and natural gas) still account for roughly 80 percent of global energy consumption. Oil is the largest single source at about 31%, followed by coal at about 27% and natural gas at about 24%. Renewables and nuclear make up the remaining approximately 18%.',
      },
    },
    {
      id: 'se-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-5-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'What is the central paradox of Norway\'s position in the global energy debate?',
        options: [
          { id: 'a', text: 'Norway uses more fossil fuels per capita than any other country', isCorrect: false },
          { id: 'b', text: 'Norway presents itself as a climate leader while being one of the world\'s largest fossil fuel exporters', isCorrect: true },
          { id: 'c', text: 'Norway has no renewable energy sources and relies entirely on imported oil', isCorrect: false },
          { id: 'd', text: 'Norway refuses to sign any international climate agreements', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Norway\'s central paradox is that it promotes itself as a climate leader -- with high electric vehicle adoption, hydropower, and ambitious emission targets -- while simultaneously being one of the world\'s largest exporters of oil and natural gas, the burning of which generates roughly ten times Norway\'s own domestic emissions.',
      },
    },
    {
      id: 'se-5-2-def-energy-transition',
      type: 'definition',
      title: 'Energy Transition',
      content: `**Energy transition** refers to the large-scale shift from fossil fuel-based energy systems to renewable and low-carbon energy sources. The current energy transition is driven primarily by the need to reduce greenhouse gas emissions and limit climate change.

**Key elements of the energy transition:**
- **Renewable energy expansion:** Rapid growth of solar, wind, and other renewable energy sources to replace coal, oil, and gas in electricity generation
- **Electrification:** Shifting transportation, heating, and industrial processes from direct fossil fuel use to electricity (which can be generated from clean sources)
- **Energy efficiency:** Reducing the amount of energy needed to power buildings, vehicles, and industrial processes
- **Energy storage:** Developing batteries and other storage technologies to address the intermittent nature of solar and wind power
- **Phase-out of fossil fuels:** Gradually reducing and eventually eliminating the extraction and use of coal, oil, and natural gas

**Challenges:**
- Fossil fuels are deeply embedded in the global economy; millions of jobs depend on them
- Many developing nations lack the capital to invest in renewable infrastructure
- Powerful fossil fuel companies and petrostates resist changes that threaten their economic interests
- Energy storage and grid infrastructure must be massively expanded
- The transition must be "just" -- meaning it should not disproportionately harm workers and communities dependent on fossil fuel industries`,
    },
    {
      id: 'se-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain the concept of "energy transition" in your own words. What are the main elements of this transition, and what makes it so difficult to achieve?',
        hints: [
          'Think about what needs to change in how the world produces and uses energy',
          'Consider both technological challenges (like energy storage) and political/economic ones (like fossil fuel industry resistance)',
        ],
        solution: 'The energy transition is the global shift from fossil fuel-based energy to renewable and low-carbon sources. Its main elements include expanding renewable energy (solar, wind), electrifying transport and heating, improving energy efficiency, developing energy storage, and phasing out fossil fuels. It is difficult because fossil fuels are deeply embedded in the economy, millions of jobs depend on them, developing nations lack investment capital for renewables, powerful industries resist change, and the transition must happen fast enough to prevent catastrophic warming while also being fair to affected workers and communities.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Norway\'s oil fund is worth over $1.5 trillion. Some argue that Norway should stop extracting oil and gas immediately, while others argue for a gradual phase-out. In 200-250 words, present arguments for both positions and explain which you find more convincing and why.',
        hints: [
          'Consider economic, environmental, and ethical arguments on both sides',
          'Think about what a rapid shutdown would mean for Norwegian workers, the economy, and global energy markets',
        ],
        solution: 'A strong response will present both sides. Arguments for immediate cessation: the climate crisis is urgent, continued extraction is hypocritical, and the oil fund provides financial security for a transition. Arguments for gradual phase-out: sudden cessation would cause economic disruption, energy insecurity for importing countries, and job losses. Norwegian gas may be less polluting than alternatives and could serve as a bridge fuel. The student should take a clear position and support it with reasoning, acknowledging the complexity of the issue.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-2-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

Fossil fuels -- coal, oil, and natural gas -- have powered modern civilization and still account for roughly **80 percent of global energy consumption**. However, their combustion is the primary driver of climate change, and the world must transition to renewable energy sources to avoid catastrophic warming.

Key points from this chapter:

- **Fossil fuels** are non-renewable, carbon-intensive, energy-dense, and unevenly distributed, creating geopolitical power imbalances.
- **Norway's oil paradox** illustrates the contradictions many nations face: profiting from fossil fuels while presenting themselves as climate leaders.
- The **energy transition** involves expanding renewables, electrifying transport and heating, improving efficiency, developing storage technology, and phasing out fossil fuels.
- The transition faces enormous challenges, including **economic dependency** on fossil fuels, resistance from powerful industries, the need for massive infrastructure investment, and the requirement that the transition be socially just.

The central question is not whether the energy transition will happen -- it must -- but whether it will happen fast enough to prevent the worst effects of climate change, and whether it will be managed in a way that is fair to workers, communities, and developing nations.`,
    },
    {
      id: 'se-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research one country that is heavily dependent on fossil fuel exports (for example, Saudi Arabia, Russia, or Nigeria). In 150-200 words, describe how this dependency shapes the country\'s economy and politics, and discuss the challenges it would face in transitioning away from fossil fuels.',
        hints: [
          'Consider how fossil fuel revenue affects government budgets, employment, and political power',
          'Think about the concept of the "resource curse" -- how natural resource wealth can sometimes undermine democratic governance',
        ],
        solution: 'A strong response will describe how fossil fuel dependency shapes a specific country\'s economy (e.g., Saudi Arabia derives roughly 60% of government revenue from oil) and politics (resource wealth can concentrate power and undermine democratic accountability). Transition challenges might include a lack of economic diversification, the need to create millions of new jobs, the risk of political instability, and the difficulty of reforming entrenched power structures built on fossil fuel wealth.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-5-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'The concept of a "just transition" argues that the shift away from fossil fuels must be fair to workers and communities who depend on fossil fuel industries. Write 200-250 words explaining what a just transition means and why it is important for the success of the energy transition.',
        hints: [
          'Think about what happens to coal miners, oil rig workers, and their communities when fossil fuel industries close',
          'Consider examples of regions that have struggled after the decline of a dominant industry (e.g., coal regions in the US or UK)',
        ],
        solution: 'A just transition means managing the shift away from fossil fuels in a way that protects the livelihoods and well-being of workers and communities currently dependent on fossil fuel industries. This includes retraining programs, investment in new industries in affected regions, social safety nets, and ensuring that workers have a voice in transition planning. It is important because without it, the energy transition will face fierce political resistance from those who stand to lose their jobs and communities. Historical examples (like the decline of coal in Appalachia or northern England) show that economic transitions without adequate support can devastate communities for decades.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fossil fuels', definition: 'Non-renewable energy sources (coal, oil, natural gas) formed from ancient organic matter over millions of years.' },
    { term: 'Energy transition', definition: 'The large-scale shift from fossil fuel-based energy systems to renewable and low-carbon energy sources.' },
    { term: 'Petrostate', definition: 'A country whose economy and political system are dominated by oil and gas revenue.' },
    { term: 'Just transition', definition: 'The principle that the shift away from fossil fuels must protect workers and communities dependent on fossil fuel industries.' },
    { term: 'Resource curse', definition: 'The paradox whereby countries rich in natural resources often experience slower economic growth and weaker governance.' },
  ],
};

// ============================================================================
// CHAPTER 5.3: Biodiversity Loss
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_5_3: TextbookChapter = {
  id: 'samf-engelsk-5-3',
  courseId: 'samf-engelsk',
  chapterNumber: '5.3',
  title: 'Biodiversity Loss',
  description: 'Explore the causes and consequences of global biodiversity loss, the interconnection between ecosystems and human well-being, and the ethical dimensions of species extinction.',
  estimatedMinutes: 23,
  competenceGoals: [
    'discuss biodiversity loss as a global environmental challenge and analyze its connections to human activity, economics, and ethics',
    'evaluate English-language sources about environmental issues and identify different perspectives on conservation',
  ],
  content: [
    {
      id: 'se-5-3-intro',
      type: 'text',
      content: `# Biodiversity Loss

In 1962, the American biologist Rachel Carson published *Silent Spring*, a book that documented the devastating effects of pesticides on bird populations in the United States. The title evoked a nightmarish future: a spring season in which no birds sang because they had all been poisoned. The book is widely credited with launching the modern environmental movement and leading to the ban of DDT in many countries.

More than six decades later, the world faces a biodiversity crisis far larger and more complex than anything Carson could have imagined. Scientists estimate that species are going extinct at a rate 100 to 1,000 times higher than the natural background rate. The World Wildlife Fund's Living Planet Report has documented an average 69 percent decline in monitored wildlife populations since 1970. Some researchers argue that we are in the midst of the sixth mass extinction event in Earth's history -- the first caused not by an asteroid or volcanic catastrophe, but by a single species: humans.

Biodiversity loss is not simply a problem for wildlife enthusiasts. Healthy ecosystems provide services that are essential to human survival, including clean air and water, crop pollination, climate regulation, and disease control. The destruction of biodiversity threatens not only the natural world but the foundations of human civilization itself.

This chapter examines the causes and consequences of biodiversity loss, its connection to human well-being, and the ethical questions it raises.`,
    },
    {
      id: 'se-5-3-def-biodiversity',
      type: 'definition',
      title: 'Biodiversity',
      content: `**Biodiversity** (short for biological diversity) refers to the variety of life on Earth at all levels: the diversity of species, the genetic diversity within species, and the diversity of ecosystems.

**Three levels of biodiversity:**
- **Species diversity:** The number and variety of different species in a given area. Earth is home to an estimated 8-10 million species, of which only about 1.5 million have been formally identified.
- **Genetic diversity:** The variation in genes within a single species. Greater genetic diversity makes populations more resilient to disease, environmental changes, and other threats.
- **Ecosystem diversity:** The variety of habitats, biological communities, and ecological processes in the biosphere. Examples include tropical rainforests, coral reefs, wetlands, grasslands, and deep-sea ecosystems.

**Why biodiversity matters:**
- **Ecosystem services:** Biodiversity underpins the ecosystem services humans depend on, including pollination, water purification, soil fertility, climate regulation, and natural pest control
- **Medicine:** Many pharmaceuticals are derived from natural compounds found in plants, animals, fungi, and microorganisms
- **Food security:** Crop diversity and wild relatives of domesticated plants are essential for breeding disease-resistant and climate-adapted food crops
- **Resilience:** More diverse ecosystems are more resilient to disturbance and more able to recover from environmental shocks
- **Intrinsic value:** Many people and philosophical traditions hold that all species have a right to exist regardless of their usefulness to humans`,
    },
    {
      id: 'se-5-3-example-coral',
      type: 'example',
      title: 'Example: Coral Reef Collapse',
      problem: 'Why are coral reefs considered a critical test case for global biodiversity loss?',
      solution: `Coral reefs are often called the "rainforests of the sea" because they support an extraordinary concentration of marine life. Though they cover less than 1% of the ocean floor, they are home to roughly 25% of all known marine species.

**The crisis:**
- The world has already lost approximately 50% of its coral reefs since the 1950s
- Coral bleaching -- caused by rising sea temperatures -- occurs when stressed corals expel the symbiotic algae that give them color and provide them with food
- Major bleaching events in 2016, 2017, 2020, and 2024 devastated reefs worldwide, including large sections of the Great Barrier Reef
- Ocean acidification (caused by CO2 absorption) weakens coral skeletons and makes it harder for new coral to grow

**Why it matters:**
1. **Ecosystem cascade:** When reefs die, the thousands of species that depend on them lose their habitat, triggering cascading declines throughout the marine food web
2. **Human livelihoods:** An estimated 500 million people worldwide depend on coral reefs for food, income (fishing and tourism), and coastal protection from storms
3. **Irreversibility:** Many scientists warn that if global warming exceeds 1.5 degrees Celsius, most tropical coral reefs will be permanently destroyed
4. **Indicator species:** Coral reefs are extremely sensitive to environmental change, making them an early warning system for broader ecological collapse

Coral reefs illustrate how climate change, pollution, and biodiversity loss are interconnected crises that cannot be addressed in isolation.`,
    },
    {
      id: 'se-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'At what rate are species estimated to be going extinct compared to the natural background rate?',
        options: [
          { id: 'a', text: '2 to 5 times faster', isCorrect: false },
          { id: 'b', text: '10 to 50 times faster', isCorrect: false },
          { id: 'c', text: '100 to 1,000 times faster', isCorrect: true },
          { id: 'd', text: '10,000 to 100,000 times faster', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Scientists estimate that the current rate of species extinction is 100 to 1,000 times higher than the natural background rate. This has led many researchers to argue that we are in the midst of the sixth mass extinction event in Earth\'s history, the first caused by human activity.',
      },
    },
    {
      id: 'se-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-5-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'What is coral bleaching?',
        options: [
          { id: 'a', text: 'A natural process where corals change color during their reproductive cycle', isCorrect: false },
          { id: 'b', text: 'The result of chemical pollution that turns coral white', isCorrect: false },
          { id: 'c', text: 'A stress response where corals expel symbiotic algae due to rising sea temperatures', isCorrect: true },
          { id: 'd', text: 'The bleaching of coral skeletons after they die and wash up on shore', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Coral bleaching occurs when rising sea temperatures stress corals, causing them to expel the symbiotic algae (zooxanthellae) that live in their tissues. These algae provide corals with both their color and up to 90% of their energy. Without them, the coral turns white and, if conditions do not improve, will die.',
      },
    },
    {
      id: 'se-5-3-def-ecosystem-services',
      type: 'definition',
      title: 'Ecosystem Services',
      content: `**Ecosystem services** are the benefits that humans receive from natural ecosystems. The concept was popularized by the Millennium Ecosystem Assessment (2005), which categorized these services into four types:

**1. Provisioning services:** Products obtained from ecosystems
- Food (crops, livestock, fish, wild game)
- Fresh water
- Raw materials (timber, fiber, fuel)
- Genetic resources and medicines

**2. Regulating services:** Benefits from ecosystem processes
- Climate regulation (carbon storage by forests and oceans)
- Water purification (wetlands filter pollutants)
- Flood and erosion control
- Pollination of crops (bees, butterflies, birds)
- Disease regulation (intact ecosystems can limit the spread of zoonotic diseases)

**3. Cultural services:** Non-material benefits
- Recreation and tourism
- Aesthetic and spiritual value
- Educational value
- Cultural identity tied to landscapes and species

**4. Supporting services:** Processes that maintain all other services
- Nutrient cycling
- Soil formation
- Primary production (photosynthesis)

**Economic value:** Studies have estimated that the total economic value of global ecosystem services exceeds $100 trillion per year -- more than global GDP. Most of these services have no price and are not accounted for in economic decision-making, which is a key reason they are being degraded and destroyed.`,
    },
    {
      id: 'se-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain what "ecosystem services" means in your own words and give three specific examples of how humans benefit from healthy ecosystems.',
        hints: [
          'Think about the things nature provides that we often take for granted',
          'Consider services like crop pollination, water purification, and climate regulation',
        ],
        solution: 'Ecosystem services are the benefits that humans receive from the natural world. Examples include: (1) pollination -- bees, butterflies, and other insects pollinate roughly 75% of the world\'s food crops; (2) water purification -- wetlands and forests naturally filter pollutants from water, providing clean drinking water; (3) climate regulation -- forests and oceans absorb CO2, helping to regulate the global climate. Other valid examples include flood control, soil fertility, medicine derived from natural compounds, and recreational benefits.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Some argue that we should protect biodiversity primarily because of its economic value to humans (ecosystem services, medicine, food security). Others argue that all species have intrinsic value -- a right to exist regardless of their usefulness. In 200-250 words, discuss both perspectives and explain which you find more compelling.',
        hints: [
          'Consider the strengths and weaknesses of economic arguments for conservation',
          'Think about whether an "ugly" or "useless" species deserves the same protection as a pollinator or a source of medicine',
        ],
        solution: 'A strong response will present both perspectives. The economic argument is pragmatic: by demonstrating the monetary value of ecosystem services, conservationists can appeal to governments and businesses in terms they understand. However, this approach risks implying that species without clear economic value do not deserve protection. The intrinsic value argument holds that all life has moral worth independent of human utility. However, this argument can be difficult to translate into policy. The student should take a clear position and defend it, ideally noting that both arguments can complement each other.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-3-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

The world is experiencing a **biodiversity crisis** of unprecedented scale. Species are going extinct at 100 to 1,000 times the natural rate, monitored wildlife populations have declined by roughly 69 percent since 1970, and critical ecosystems like coral reefs are collapsing.

Key points from this chapter:

- **Biodiversity** encompasses species diversity, genetic diversity, and ecosystem diversity. All three levels are under severe pressure from human activity.
- The main drivers of biodiversity loss are **habitat destruction**, climate change, pollution, overexploitation, and invasive species.
- **Coral reefs** illustrate how climate change and biodiversity loss are interconnected: rising temperatures cause coral bleaching, which destroys the habitat that supports 25% of marine species and the livelihoods of 500 million people.
- **Ecosystem services** -- the benefits humans receive from nature, including pollination, water purification, climate regulation, and flood control -- are estimated to be worth over $100 trillion per year, yet most are not accounted for in economic decision-making.
- Biodiversity loss raises profound **ethical questions** about whether species have intrinsic value beyond their usefulness to humans.

The biodiversity crisis is not a separate issue from the climate crisis. The two are deeply interconnected, and addressing one without the other will be insufficient.`,
    },
    {
      id: 'se-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-5-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Rachel Carson\'s book Silent Spring (1962) is credited with launching the modern environmental movement. Research Silent Spring and write 150-200 words explaining what Carson documented, why the book was controversial, and what lasting impact it had.',
        hints: [
          'Focus on Carson\'s documentation of pesticide (especially DDT) effects on wildlife',
          'Consider the backlash from the chemical industry and how the book ultimately led to policy changes',
        ],
        solution: 'A strong response will explain that Carson documented how pesticides, especially DDT, were accumulating in the environment and devastating bird populations and other wildlife through a process called biomagnification. The book was controversial because the chemical industry launched an aggressive campaign to discredit Carson, questioning her scientific credentials and accusing her of being alarmist. Despite this, Silent Spring raised public awareness, led to a US government review of pesticide policy, contributed to the founding of the Environmental Protection Agency (EPA) in 1970, and resulted in the banning of DDT in the United States in 1972.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-5-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Conservation efforts often involve difficult choices about which species and ecosystems to prioritize, given limited resources. Write 200-250 words discussing how these choices should be made. Should priority go to the most endangered species, the most ecologically important ones, or the most charismatic ones that attract public support and funding?',
        hints: [
          'Think about the difference between "flagship species" (like pandas) and "keystone species" (like bees)',
          'Consider whether public popularity should influence conservation priorities',
        ],
        solution: 'A thoughtful response will acknowledge that conservation resources are limited and that difficult choices must be made. Prioritizing the most endangered species preserves maximum diversity but may not be the most cost-effective strategy. Prioritizing ecologically important "keystone" species (whose loss would trigger cascading ecosystem effects) maximizes ecological benefit. Prioritizing charismatic species (pandas, tigers) generates public support and funding that can benefit broader conservation efforts. The student should recognize that each approach has merits and limitations, and may argue for a balanced strategy that considers ecological importance, urgency, and public engagement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Biodiversity', definition: 'The variety of life on Earth at all levels: species diversity, genetic diversity, and ecosystem diversity.' },
    { term: 'Ecosystem services', definition: 'The benefits humans receive from natural ecosystems, including pollination, water purification, climate regulation, and flood control.' },
    { term: 'Coral bleaching', definition: 'A stress response where corals expel their symbiotic algae due to rising sea temperatures, often leading to coral death.' },
    { term: 'Mass extinction', definition: 'An event in which a significant proportion of the world\'s species go extinct in a geologically short period of time.' },
    { term: 'Keystone species', definition: 'A species that has a disproportionately large effect on its ecosystem relative to its abundance.' },
  ],
};

// ============================================================================
// CHAPTER 5.4: Environmental Policy
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_5_4: TextbookChapter = {
  id: 'samf-engelsk-5-4',
  courseId: 'samf-engelsk',
  chapterNumber: '5.4',
  title: 'Environmental Policy',
  description: 'Analyze the development of environmental policy from the 1970s to the present, including key international agreements, the role of governments and NGOs, and the tension between economic growth and environmental protection.',
  estimatedMinutes: 25,
  competenceGoals: [
    'analyze the development of international environmental policy and evaluate the effectiveness of different approaches to environmental governance',
    'discuss the tension between economic growth and environmental protection, using specific examples from English-speaking countries',
  ],
  content: [
    {
      id: 'se-5-4-intro',
      type: 'text',
      content: `# Environmental Policy

In June 1972, representatives from 113 countries gathered in Stockholm, Sweden, for the United Nations Conference on the Human Environment. It was the first major international summit to address environmental issues, and it produced a declaration affirming that humans have both a right to a healthy environment and a responsibility to protect it for future generations. The conference marked the beginning of modern international environmental governance.

Half a century later, the landscape of environmental policy is vastly more complex. The world now has hundreds of multilateral environmental agreements, from the Montreal Protocol (which successfully addressed the ozone hole) to the Convention on Biological Diversity and the Paris Agreement on climate change. Governments at every level -- local, national, and international -- have created environmental agencies, passed environmental laws, and developed regulatory frameworks.

Yet the results have been profoundly uneven. Some policies have been remarkably successful: the ozone layer is healing, lead has been removed from petrol in most countries, and acid rain has been dramatically reduced in Europe and North America. Other problems, most notably climate change and biodiversity loss, have continued to worsen despite decades of policy effort.

This chapter examines the history of environmental policy, the tools governments use to address environmental problems, and the ongoing debate about whether current approaches are adequate to the scale of the crisis.`,
    },
    {
      id: 'se-5-4-def-precautionary',
      type: 'definition',
      title: 'The Precautionary Principle',
      content: `**The precautionary principle** is a foundational concept in environmental policy that states: when an action or policy raises the possibility of serious or irreversible harm to the environment or human health, precautionary measures should be taken even if the scientific evidence is not yet conclusive.

**Key features:**
- The burden of proof is shifted: those who want to introduce a potentially harmful activity must demonstrate that it is safe, rather than requiring those who are concerned to prove that it is dangerous
- It justifies regulation in the face of scientific uncertainty
- It is enshrined in numerous international agreements, including the Rio Declaration (1992) and EU environmental law

**How it differs from the standard approach:**
In many regulatory systems (particularly in the United States), chemicals and activities are presumed safe until proven harmful. The precautionary principle reverses this: if there is reasonable suspicion of harm, action should be taken to prevent it before full scientific certainty is achieved.

**Examples in practice:**
- The EU's REACH regulation requires chemical manufacturers to demonstrate the safety of their products before they can be sold
- Several countries have banned or restricted genetically modified organisms (GMOs) on precautionary grounds
- The ban on CFCs to protect the ozone layer was implemented before the full science was settled

**Criticism:** Opponents argue that the precautionary principle can stifle innovation and economic development by blocking new technologies based on uncertain risks.`,
    },
    {
      id: 'se-5-4-example-montreal',
      type: 'example',
      title: 'Example: The Montreal Protocol -- Environmental Policy That Worked',
      problem: 'Why is the Montreal Protocol considered the most successful international environmental agreement in history?',
      solution: `The **Montreal Protocol on Substances that Deplete the Ozone Layer** (1987) is widely regarded as the gold standard for international environmental cooperation.

**The problem:**
- In the 1970s, scientists discovered that chlorofluorocarbons (CFCs) -- chemicals used in refrigerators, air conditioners, and aerosol sprays -- were destroying the ozone layer
- The ozone layer protects life on Earth from harmful ultraviolet (UV) radiation
- In 1985, a massive "ozone hole" was discovered over Antarctica, creating public alarm

**The response:**
- The Montreal Protocol was signed in 1987 by 46 nations and has since been ratified by every country on Earth -- 198 parties
- It mandated the phase-out of CFCs and other ozone-depleting substances
- A multilateral fund was established to help developing countries transition to alternative chemicals

**Why it succeeded:**
1. **Clear science:** The link between CFCs and ozone depletion was established relatively quickly and clearly
2. **Available alternatives:** Chemical companies (notably DuPont) developed replacement chemicals, reducing industrial opposition
3. **Visible threat:** The ozone hole was a dramatic, visible symbol that galvanized public concern
4. **Universal participation:** Every UN member state eventually ratified the agreement
5. **Enforcement mechanisms:** The protocol included trade restrictions on countries that did not comply

**Results:**
- The ozone layer is now healing and is expected to fully recover by approximately 2066
- The protocol has prevented an estimated 2 million skin cancer cases per year
- It has also had a significant climate benefit, as many ozone-depleting substances are also potent greenhouse gases

**Lessons for climate policy:** The Montreal Protocol succeeded partly because the problem was relatively contained (one class of chemicals) and alternatives existed. Climate change involves the entire global energy system, making it a far more complex policy challenge.`,
    },
    {
      id: 'se-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What does the precautionary principle state?',
        options: [
          { id: 'a', text: 'New technologies should be banned until they have been in use for at least ten years', isCorrect: false },
          { id: 'b', text: 'When an action raises the possibility of serious harm, precautionary measures should be taken even without full scientific certainty', isCorrect: true },
          { id: 'c', text: 'Environmental policies should only be implemented after a complete cost-benefit analysis', isCorrect: false },
          { id: 'd', text: 'Developing countries should be exempt from environmental regulations until they reach a certain income level', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The precautionary principle states that when an action or policy raises the possibility of serious or irreversible harm to the environment or human health, precautionary measures should be taken even if the scientific evidence is not yet conclusive. It shifts the burden of proof to those proposing potentially harmful activities.',
      },
    },
    {
      id: 'se-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-5-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Which of the following is a key reason why the Montreal Protocol succeeded where other environmental agreements have struggled?',
        options: [
          { id: 'a', text: 'It imposed severe financial penalties on countries that did not comply', isCorrect: false },
          { id: 'b', text: 'It only applied to wealthy industrialized nations', isCorrect: false },
          { id: 'c', text: 'The problem involved a specific class of chemicals for which alternatives existed', isCorrect: true },
          { id: 'd', text: 'It was enforced by a permanent international police force', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'A key reason for the Montreal Protocol\'s success was that the problem was relatively contained -- it involved a specific class of chemicals (CFCs) for which industry had developed viable alternatives. This reduced economic opposition and made phase-out feasible. Climate change, by contrast, requires transforming the entire global energy system, making it a far more complex policy challenge.',
      },
    },
    {
      id: 'se-5-4-def-carbon-pricing',
      type: 'definition',
      title: 'Carbon Pricing',
      content: `**Carbon pricing** is an economic policy tool that puts a price on greenhouse gas emissions, making polluters pay for the carbon dioxide they release into the atmosphere. The underlying principle is that if emitting CO2 has a financial cost, businesses and individuals will have an incentive to reduce their emissions.

**Two main approaches:**

**1. Carbon tax:**
- A direct tax on each ton of CO2 emitted
- The price is set by the government and is predictable
- Revenue can be used to fund clean energy, returned to citizens as dividends, or used to reduce other taxes
- Examples: Sweden (introduced in 1991, currently ~$130/ton), Canada, South Africa

**2. Cap-and-trade (Emissions Trading System):**
- The government sets a cap on total emissions and issues a limited number of emission permits
- Companies can buy and sell permits on a market
- The cap is gradually lowered over time, reducing total emissions
- The price of emissions is determined by the market
- Examples: EU Emissions Trading System (ETS), California cap-and-trade program

**Advantages of carbon pricing:**
- Provides a clear economic incentive to reduce emissions
- Allows the market to find the most cost-effective ways to reduce emissions
- Generates revenue that can be invested in clean energy or used to protect vulnerable communities

**Challenges:**
- Setting the right price is difficult: too low and it has little effect, too high and it may harm the economy
- Politically unpopular: carbon pricing increases energy costs, which disproportionately affects lower-income households
- Risk of "carbon leakage": companies may move production to countries without carbon pricing, increasing emissions elsewhere`,
    },
    {
      id: 'se-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare and contrast the two main approaches to carbon pricing: carbon taxes and cap-and-trade systems. What are the strengths and weaknesses of each?',
        hints: [
          'Think about which approach gives more certainty about the price of emissions versus the total amount of emissions',
          'Consider which approach is simpler to implement and which is more flexible',
        ],
        solution: 'A carbon tax sets a fixed price per ton of CO2 emitted, providing price certainty for businesses but not guaranteeing a specific level of emission reductions. It is simpler to implement and generates predictable revenue. A cap-and-trade system sets a limit on total emissions and lets the market determine the price, providing certainty about emission levels but potentially volatile prices. It is more complex to administer but allows the market to find cost-effective reduction strategies. Both approaches have the challenge of setting the right price/cap level and the risk of carbon leakage.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'The precautionary principle says we should act to prevent harm even when scientific evidence is uncertain. Critics argue this can block innovation and economic progress. In 200-250 words, discuss whether you think the precautionary principle is a good basis for environmental policy, using at least one specific example.',
        hints: [
          'Consider cases where the precautionary principle has been applied successfully (like CFCs) or controversially (like GMOs)',
          'Think about the costs of action versus the costs of inaction when the stakes are high',
        ],
        solution: 'A strong response will present arguments for and against the precautionary principle. In favor: it can prevent catastrophic and irreversible harm, as demonstrated by the successful ban on CFCs; the costs of inaction can far exceed the costs of precaution. Against: it can be used to block beneficial technologies (like GMOs that could improve food security), it is difficult to define how much uncertainty is acceptable, and it can be weaponized by interest groups to prevent competition. The student should take a clear position and support it with reasoning and at least one example.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-4-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

Environmental policy has evolved dramatically since the first UN environmental conference in Stockholm in 1972. While some policies have been remarkably successful, the most pressing environmental challenges continue to worsen.

Key points from this chapter:

- The **precautionary principle** states that precautionary action should be taken to prevent serious or irreversible environmental harm, even in the absence of full scientific certainty. It shifts the burden of proof to those proposing potentially harmful activities.
- The **Montreal Protocol** (1987) is the most successful international environmental agreement, having led to the phase-out of ozone-depleting chemicals and the recovery of the ozone layer. Its success was enabled by clear science, available alternatives, and universal participation.
- **Carbon pricing** -- through carbon taxes or cap-and-trade systems -- puts a financial cost on greenhouse gas emissions to incentivize reductions. Both approaches have strengths and limitations.
- Environmental policy faces an ongoing tension between **economic growth and environmental protection**, and the challenge of translating international agreements into effective national action.
- The success of the Montreal Protocol demonstrates that international cooperation on environmental issues is possible, but climate change presents a far more complex challenge because it requires transforming the entire global energy system.`,
    },
    {
      id: 'se-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-5-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research one specific environmental policy or regulation from an English-speaking country (for example, the US Clean Air Act, the UK Climate Change Act, or Australia\'s emissions policies). In 150-200 words, describe the policy, explain its goals, and evaluate whether it has been effective.',
        hints: [
          'Choose a policy you can find reliable information about',
          'Consider both what the policy achieved and what limitations or criticisms it faced',
        ],
        solution: 'A strong response will describe a specific policy, explain its objectives, and provide a balanced evaluation. For example, the UK Climate Change Act (2008) was the first legally binding national climate law, committing the UK to reduce emissions by 80% by 2050 (later updated to net zero). It has been effective in driving down emissions (UK emissions fell by about 40% between 1990 and 2020), but critics note that some of this reduction reflects deindustrialization and the offshoring of emissions rather than genuine decarbonization.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-5-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'The Montreal Protocol succeeded, but global climate policy has struggled. Write 200-250 words analyzing why the lessons of the Montreal Protocol have been difficult to apply to climate change. What makes the climate challenge fundamentally different?',
        hints: [
          'Consider the scale of the industries involved, the availability of alternatives, and the political dynamics',
          'Think about why it was easier to get universal agreement on CFCs than on fossil fuels',
        ],
        solution: 'A strong response will identify several key differences. The Montreal Protocol addressed one class of chemicals for which alternatives existed, involved a relatively small number of companies, and could be solved with straightforward substitution. Climate change involves the entire global energy system, affects every sector of the economy, lacks simple substitutes for many fossil fuel applications, and requires massive infrastructure transformation. The fossil fuel industry is far more powerful and politically influential than the CFC industry was. Additionally, the costs of climate action fall disproportionately on certain nations and communities, making international agreement more difficult. The student should demonstrate clear analytical thinking about why institutional scale and complexity matter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Precautionary principle', definition: 'The principle that precautionary measures should be taken to prevent serious environmental harm even when scientific evidence is not yet conclusive.' },
    { term: 'Montreal Protocol', definition: 'The 1987 international treaty that mandated the phase-out of ozone-depleting substances, considered the most successful environmental agreement.' },
    { term: 'Carbon tax', definition: 'A direct tax on each ton of CO2 emitted, designed to incentivize emission reductions by making pollution costly.' },
    { term: 'Cap-and-trade', definition: 'An emissions trading system where the government sets a cap on total emissions and companies buy and sell permits to emit.' },
    { term: 'Carbon leakage', definition: 'The risk that companies move production to countries without carbon pricing, increasing emissions elsewhere rather than reducing them.' },
  ],
};

// ============================================================================
// CHAPTER 5.5: Sustainability and Green Transition
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_5_5: TextbookChapter = {
  id: 'samf-engelsk-5-5',
  courseId: 'samf-engelsk',
  chapterNumber: '5.5',
  title: 'Sustainability and Green Transition',
  description: 'Explore the concept of sustainable development, the UN Sustainable Development Goals, circular economy principles, and the possibilities and challenges of building a green future.',
  estimatedMinutes: 24,
  competenceGoals: [
    'discuss the concept of sustainable development and evaluate different strategies for achieving a green transition in society',
    'analyze and critically assess English-language texts about sustainability, greenwashing, and the possibilities of systemic change',
  ],
  content: [
    {
      id: 'se-5-5-intro',
      type: 'text',
      content: `# Sustainability and Green Transition

In 1987, the World Commission on Environment and Development -- known as the Brundtland Commission, chaired by Norwegian Prime Minister Gro Harlem Brundtland -- published a report that would shape environmental thinking for decades to come. The report, titled *Our Common Future*, introduced a definition of sustainable development that remains the most widely cited in the world: development that "meets the needs of the present without compromising the ability of future generations to meet their own needs."

This simple definition contains a profound challenge. It demands that we think not only about what we need today, but about what our children and grandchildren will need decades and centuries from now. It asks us to balance economic development, social justice, and environmental protection -- three goals that often seem to be in conflict.

Nearly four decades after the Brundtland report, the concept of sustainability has become central to global politics, business strategy, and public discourse. The United Nations adopted 17 Sustainable Development Goals (SDGs) in 2015. Corporations advertise their "sustainability commitments." Governments announce "green deals" and "net zero" targets. The language of sustainability is everywhere.

But how much of this represents genuine transformation, and how much is what critics call "greenwashing" -- superficial commitments that create the appearance of environmental responsibility without addressing the root causes of ecological destruction? This chapter examines the concept of sustainability, the tools for achieving a green transition, and the difficult questions that remain.`,
    },
    {
      id: 'se-5-5-def-sustainability',
      type: 'definition',
      title: 'Sustainable Development',
      content: `**Sustainable development** is development that meets the needs of the present without compromising the ability of future generations to meet their own needs (Brundtland Commission, 1987).

**The three pillars of sustainability:**
- **Environmental sustainability:** Protecting natural resources, ecosystems, and the climate so that they can continue to support life
- **Economic sustainability:** Ensuring long-term economic prosperity without depleting natural resources or creating unsustainable debt
- **Social sustainability:** Promoting equity, justice, health, education, and well-being for all people, both now and in the future

**Key principles:**
- **Intergenerational equity:** Future generations should inherit a world that is at least as healthy and resource-rich as the one we inherited
- **Intragenerational equity:** Sustainability must also address inequality within the current generation -- environmental burdens should not fall disproportionately on the poor
- **Planetary boundaries:** Scientists have identified nine planetary boundaries (including climate change, biodiversity loss, and ocean acidification) that define a "safe operating space" for humanity. Crossing these boundaries risks destabilizing the Earth systems that support civilization
- **The doughnut model:** Economist Kate Raworth proposed that a sustainable economy operates within a "doughnut" -- above a social foundation (meeting basic human needs) and below an ecological ceiling (staying within planetary boundaries)

**The UN Sustainable Development Goals (SDGs):**
In 2015, all UN member states adopted 17 SDGs to be achieved by 2030, covering poverty, hunger, health, education, gender equality, clean water, clean energy, economic growth, inequality, sustainable cities, responsible consumption, climate action, ocean life, land life, peace, justice, and partnerships.`,
    },
    {
      id: 'se-5-5-example-circular',
      type: 'example',
      title: 'Example: The Circular Economy vs. The Linear Economy',
      problem: 'How does the circular economy model offer an alternative to the traditional "take-make-waste" approach?',
      solution: `The dominant economic model in modern industrial societies is **linear**: raw materials are extracted ("take"), manufactured into products ("make"), used briefly, and then discarded ("waste"). This model assumes that resources are infinite and that the environment can absorb unlimited waste. Both assumptions are wrong.

The **circular economy** offers an alternative model based on three principles:

**1. Design out waste and pollution:**
- Products are designed from the start to be reused, repaired, remanufactured, or recycled
- Packaging is minimized or made from biodegradable materials
- Toxic substances are eliminated from production processes

**2. Keep products and materials in use:**
- Products are built to last, not to be replaced every few years (planned obsolescence is eliminated)
- Business models shift from selling products to providing services (e.g., leasing rather than selling electronics)
- Sharing platforms reduce the need for individual ownership

**3. Regenerate natural systems:**
- Agricultural practices restore soil health rather than depleting it
- Renewable energy replaces fossil fuels
- Economic activity supports rather than undermines ecosystem health

**Real-world example:** The Ellen MacArthur Foundation has partnered with major companies to redesign supply chains. For instance, some clothing companies now offer "take-back" programs where used garments are collected, broken down into fibers, and woven into new textiles, keeping materials in circulation rather than sending them to landfill.

**Challenges:** The circular economy requires fundamental redesign of products, supply chains, and business models. It challenges the growth model that underpins modern capitalism, where profit often depends on selling more products more frequently.`,
    },
    {
      id: 'se-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'According to the Brundtland Commission definition, what is sustainable development?',
        options: [
          { id: 'a', text: 'Economic growth that prioritizes environmental protection over all other concerns', isCorrect: false },
          { id: 'b', text: 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs', isCorrect: true },
          { id: 'c', text: 'A complete halt to economic growth in order to preserve natural resources', isCorrect: false },
          { id: 'd', text: 'Development that only uses renewable energy sources', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The Brundtland Commission (1987) defined sustainable development as "development that meets the needs of the present without compromising the ability of future generations to meet their own needs." This definition is significant because it balances present needs with future responsibilities and encompasses economic, social, and environmental dimensions.',
      },
    },
    {
      id: 'se-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'What is the main difference between a linear economy and a circular economy?',
        options: [
          { id: 'a', text: 'A linear economy uses only natural resources while a circular economy uses only synthetic materials', isCorrect: false },
          { id: 'b', text: 'A linear economy follows a take-make-waste model while a circular economy designs out waste and keeps materials in use', isCorrect: true },
          { id: 'c', text: 'A linear economy is found in developing countries while a circular economy is found in developed countries', isCorrect: false },
          { id: 'd', text: 'A linear economy does not produce greenhouse gases while a circular economy produces minimal waste', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The key difference is that a linear economy follows a "take-make-waste" model -- extracting resources, manufacturing products, and discarding them after use. A circular economy aims to eliminate waste entirely by designing products for reuse, repair, and recycling, keeping materials in circulation rather than sending them to landfill.',
      },
    },
    {
      id: 'se-5-5-def-greenwashing',
      type: 'definition',
      title: 'Greenwashing',
      content: `**Greenwashing** is the practice of making misleading or false claims about the environmental benefits of a product, service, policy, or organizational practice. The term was coined in 1986 by environmentalist Jay Westerveld.

**Common forms of greenwashing:**
- **Vague claims:** Using terms like "eco-friendly," "green," or "natural" without specific evidence or certification
- **Irrelevant claims:** Highlighting a minor environmental benefit while ignoring a much larger environmental harm (e.g., an oil company promoting a small renewable energy project while expanding fossil fuel extraction)
- **Hidden trade-offs:** Advertising a product as sustainable in one dimension while ignoring its environmental costs in other dimensions
- **False labels:** Using fake certifications or misleading symbols that suggest independent environmental verification
- **No proof:** Making environmental claims without providing any verifiable data or third-party certification
- **Lesser of two evils:** Promoting a product as "greener" than a competing product when both are environmentally destructive

**Why greenwashing matters:**
- It misleads consumers who are trying to make environmentally responsible choices
- It undermines trust in genuine sustainability efforts
- It allows companies to profit from the appearance of environmental responsibility without making meaningful changes
- It delays real action by creating the illusion that progress is being made

**Examples:** Oil companies running advertising campaigns about their renewable energy investments while spending the vast majority of their capital on fossil fuel production; fast fashion brands launching small "sustainable collections" while maintaining fundamentally unsustainable business models.`,
    },
    {
      id: 'se-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-5-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Explain what "greenwashing" means and describe two specific strategies that companies use to make themselves appear more environmentally responsible than they actually are.',
        hints: [
          'Think about the difference between genuine sustainability efforts and superficial marketing',
          'Consider examples from the oil industry, fast fashion, or food industry',
        ],
        solution: 'Greenwashing is the practice of making misleading claims about the environmental benefits of a product, service, or company. Two common strategies include: (1) Irrelevant claims -- for example, an oil company running advertisements about a small renewable energy project while spending 95% of its capital on fossil fuel extraction; (2) Vague claims -- using terms like "eco-friendly" or "natural" without specific evidence or certification, making it impossible for consumers to verify the claim. Other valid examples include hidden trade-offs, false labels, and lesser-of-two-evils claims.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-5-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'The circular economy model sounds attractive in theory, but critics argue that it is very difficult to implement in practice. In 200-250 words, discuss the potential benefits and practical challenges of transitioning from a linear to a circular economy.',
        hints: [
          'Consider what would need to change in product design, business models, consumer behavior, and government policy',
          'Think about industries where circularity is easier (e.g., metals) versus harder (e.g., complex electronics)',
        ],
        solution: 'A strong response will identify both benefits and challenges. Benefits include reduced waste and pollution, lower demand for raw materials, potential for new business models and jobs, and reduced environmental impact. Challenges include the need for fundamental product redesign, the difficulty of recycling complex products (like smartphones with hundreds of materials), the economic model that relies on selling new products, consumer habits favoring convenience and novelty, the need for massive infrastructure investment in collection and reprocessing, and the difficulty of coordinating change across global supply chains. The student should demonstrate understanding of why systemic change is harder than individual action.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-5-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

Sustainability has become a central concept in global politics, economics, and public discourse since the Brundtland Commission defined it in 1987. However, translating the principle into practice remains profoundly challenging.

Key points from this chapter:

- **Sustainable development** balances three pillars: environmental protection, economic prosperity, and social equity. It requires meeting present needs without compromising future generations.
- The **three pillars of sustainability** and frameworks like **planetary boundaries** and the **doughnut model** provide tools for thinking about what a sustainable economy looks like.
- The **circular economy** offers an alternative to the linear "take-make-waste" model by designing out waste, keeping materials in use, and regenerating natural systems.
- **Greenwashing** -- making misleading environmental claims -- remains a major obstacle, creating the illusion of progress while delaying genuine transformation.
- The **UN Sustainable Development Goals** provide a global framework, but progress toward the 2030 targets has been insufficient.

The green transition requires more than technological innovation. It demands fundamental changes in economic systems, political priorities, and individual behavior. The question is not whether such a transition is necessary -- the science is clear -- but whether it will happen fast enough and justly enough to prevent the worst consequences of environmental destruction.`,
    },
    {
      id: 'se-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-5-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Choose one of the UN\'s 17 Sustainable Development Goals (SDGs) and research it. In 150-200 words, explain the goal, describe the current state of progress toward achieving it, and discuss one major obstacle to its achievement.',
        hints: [
          'You can find information about all 17 SDGs on the United Nations website',
          'Consider goals like SDG 13 (Climate Action), SDG 14 (Life Below Water), or SDG 7 (Affordable and Clean Energy)',
        ],
        solution: 'A strong response will clearly describe one SDG, provide evidence about current progress (or lack thereof), and identify a specific obstacle. For example, SDG 13 (Climate Action) calls for urgent action to combat climate change. Progress has been insufficient: global emissions continue to rise, and the world is on track for approximately 2.7 degrees of warming. A major obstacle is the political power of the fossil fuel industry and the economic dependency of many nations on fossil fuel revenue, which creates resistance to the systemic changes needed to achieve the goal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-5-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflect on the entire section on "Environmental Issues" (chapters 5.1-5.5). Write 250-300 words discussing the following question: Is individual action (recycling, reducing consumption, using public transport) sufficient to address the environmental crisis, or does the crisis require systemic change at the political and economic level? Use specific examples from the chapters to support your argument.',
        hints: [
          'Consider the scale of the problems discussed in these chapters (climate change, biodiversity loss, fossil fuel dependency)',
          'Think about the limitations of individual action versus the potential of policy changes like carbon pricing, international agreements, and circular economy regulations',
          'A strong response will acknowledge both sides of the debate',
        ],
        solution: 'A strong response will argue that while individual action is important and can influence norms, it is insufficient on its own to address environmental crises of the scale discussed in these chapters. The student should reference specific examples: climate change requires transforming the global energy system (chapter 5.1-5.2), biodiversity loss is driven by industrial agriculture and habitat destruction at a scale beyond individual control (chapter 5.3), and effective solutions require policy tools like carbon pricing and international agreements (chapter 5.4). The circular economy (chapter 5.5) requires redesigning entire supply chains. However, the response should also acknowledge that individual action matters as a driver of cultural change and political pressure. The strongest responses will argue that both individual and systemic action are necessary, but that systemic change is the more important lever.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sustainable development', definition: 'Development that meets the needs of the present without compromising the ability of future generations to meet their own needs.' },
    { term: 'Circular economy', definition: 'An economic model that designs out waste and pollution, keeps products and materials in use, and regenerates natural systems.' },
    { term: 'Greenwashing', definition: 'The practice of making misleading claims about the environmental benefits of a product, service, or company.' },
    { term: 'Planetary boundaries', definition: 'Nine critical thresholds that define a safe operating space for humanity within the Earth system.' },
    { term: 'SDGs (Sustainable Development Goals)', definition: 'The 17 global goals adopted by all UN member states in 2015 to be achieved by 2030, covering poverty, health, equality, climate, and more.' },
  ],
};

// ============================================================================
// EXPORT ALL CHAPTERS IN SECTION 5
// ============================================================================

export const SAMF_ENGELSK_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMF_ENGELSK_5_1,
  CHAPTER_SAMF_ENGELSK_5_2,
  CHAPTER_SAMF_ENGELSK_5_3,
  CHAPTER_SAMF_ENGELSK_5_4,
  CHAPTER_SAMF_ENGELSK_5_5,
];
