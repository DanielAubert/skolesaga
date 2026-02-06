/**
 * Tekstbok innhold for Engelsk VG1 DEL 3
 * Section 5: Non-fiction and Critical Reading (5.1-5.4)
 * Section 6: Writing Skills (6.1-6.5)
 * Section 7: English as a World Language (7.1-7.4)
 *
 * Dekker LK20 kompetansemål for ENG01-05.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SECTION 5: Non-fiction and Critical Reading
// ============================================================================

export const CHAPTER_ENGELSK_VG1_5_1: TextbookChapter = {
  id: 'engelsk-vg1-5-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.1',
  title: 'Reading Non-fiction Texts',
  description: 'Develop strategies for reading and understanding non-fiction.',
  estimatedMinutes: 60,
  competenceGoals: ['lese og sammenligne ulike sakprosatekster om samme emne fra ulike kilder og vurdere kildens troverdighet'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-5-1-intro',
      type: 'text',
      content: `## Understanding Non-fiction

Non-fiction texts are designed to inform, argue, explain, or persuade readers about real-world topics. Unlike fiction, which invites us into imaginary worlds, non-fiction demands that we engage critically with facts, evidence, and arguments. This makes reading non-fiction a fundamentally different experience that requires its own set of strategies and skills.

The ability to read and understand non-fiction is essential in today's information-rich society. From news articles and scientific reports to political speeches and social media posts, we encounter non-fiction every day. Developing strong non-fiction reading skills helps you become a more informed citizen, a better student, and a more critical thinker.

In this chapter, we will explore the diverse world of non-fiction texts and develop practical strategies for reading them effectively. You will learn how to identify different text types, recognize organizational patterns, apply active reading techniques, and extract meaning from complex informational texts.`,
    },
    // --- TEORI 1 ---
    {
      id: 'engelsk-vg1-5-1-def-1',
      type: 'definition',
      title: 'Types of Non-fiction Texts',
      content: `Non-fiction encompasses a wide range of text types, each with its own conventions and purposes.

**Informative Texts:**
- **News articles:** Report on current events; aim for objectivity and timeliness
- **Encyclopedias and textbooks:** Provide comprehensive, organized information
- **Scientific reports:** Present research findings with methodology and data
- **Technical documentation:** Explain how systems or products work

**Argumentative Texts:**
- **Opinion pieces and editorials:** Present a perspective on an issue
- **Essays:** Develop ideas through structured argumentation
- **Reviews:** Evaluate works, products, or experiences
- **Political speeches:** Persuade audiences toward a position

**Narrative Non-fiction:**
- **Biographies and autobiographies:** Tell true life stories
- **Memoirs:** Focus on personal experiences and reflections
- **Travel writing:** Describe journeys and places
- **Creative non-fiction:** Uses literary techniques for factual content

**Functional Texts:**
- **Instructions and manuals:** Guide readers through processes
- **Legal documents:** Establish rights, obligations, and agreements
- **Business communications:** Facilitate professional interactions

Understanding which type of text you are reading helps you adjust your reading strategy accordingly.`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-5-1-example-1',
      type: 'example',
      title: 'Identifying Non-fiction Text Types',
      content: `**Consider this opening paragraph:**

"The Arctic ice sheet has shrunk by 13% per decade since 1979, according to NASA satellite data. Scientists warn that if current trends continue, the Arctic could experience ice-free summers by 2050."

**Analysis:**
- **Text type:** News article / scientific report
- **Purpose:** To inform readers about climate change data
- **Key features:** Statistics, expert sources, factual claims
- **Reading approach:** Look for evidence quality, check sources

**Compare with this opening:**

"I still remember the day I first set foot on the ice. The silence was overwhelming - not empty, but full, as if the frozen landscape was holding its breath."

**Analysis:**
- **Text type:** Memoir / creative non-fiction
- **Purpose:** To share personal experience
- **Key features:** First-person narration, sensory details
- **Reading approach:** Consider the author's perspective, look for themes`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: `Identify the type of non-fiction text each excerpt comes from and explain your reasoning:`,
        subTasks: [
          { label: 'a', task: `"To install the software, first ensure your system meets the minimum requirements. Then download the installer from our website."`, solution: `Technical documentation. Features: imperative verbs, step-by-step process.` },
          { label: 'b', task: `"The proposed legislation fails to address the root causes of inequality."`, solution: `Opinion piece / editorial. Features: evaluative language, persuasive intent.` },
          { label: 'c', task: `"Born in 1929 in Atlanta, Georgia, Martin Luther King Jr. would become one of the most influential leaders of the American civil rights movement."`, solution: `Biography. Features: third-person narration, historical significance.` },
        ],
        hints: [`Look for key language features`, `Consider the apparent purpose of each text`],
        solution: `Each text type has distinctive features that reveal its purpose and genre.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: `Find examples of three different types of non-fiction texts. For each text, identify:`,
        subTasks: [
          { label: 'a', task: `What type of non-fiction text is it? What features helped you identify it?`, solution: `Student identifies specific text type and explains distinguishing features.` },
          { label: 'b', task: `What is the main purpose of the text?`, solution: `Student identifies purpose: to inform, to persuade, to entertain, to instruct.` },
          { label: 'c', task: `Who is the intended audience, and how do you know?`, solution: `Student identifies audience through vocabulary level, tone, and publication context.` },
        ],
        hints: [`Consider news websites, magazines, textbooks`, `Look at both content and format`],
        solution: `Recognizing text types helps you adjust your reading strategy.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2 ---
    {
      id: 'engelsk-vg1-5-1-def-2',
      type: 'definition',
      title: 'Active Reading Strategies and Text Structures',
      content: `Active reading transforms you from a passive receiver of information into an engaged, critical thinker.

**Before Reading (Preview):**
- Survey the text: Read title, headings, introduction, and conclusion first
- Consider your purpose: Why are you reading this?
- Activate prior knowledge: What do you already know about this topic?

**During Reading (Process):**
- Annotate actively: Highlight key points, write margin notes
- Identify structure: Notice how the text is organized
- Monitor comprehension: Pause regularly to check understanding

**After Reading (Reflect):**
- Summarize: Write the main points in your own words
- Evaluate: How convincing was the argument?
- Connect: How does this relate to other things you know?

**Common Text Structures:**
- **Chronological:** Events in time order (signal words: first, then, finally)
- **Compare/Contrast:** Similarities and differences (signal words: however, similarly)
- **Cause/Effect:** Reasons and results (signal words: because, therefore)
- **Problem/Solution:** Issue and proposed fix (signal words: to address this)
- **Description:** Characteristics of a topic (signal words: for example, such as)

**The SQ3R Method:** **S**urvey - **Q**uestion - **R**ead - **R**ecite - **R**eview`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: `Apply the SQ3R method to a non-fiction article (at least 500 words). Document each step:`,
        subTasks: [
          { label: 'a', task: `Survey: What did you notice from previewing the text?`, solution: `Student describes observations from the preview phase.` },
          { label: 'b', task: `Question: Write 3-5 questions you want the text to answer.`, solution: `Student generates questions that guide their reading.` },
          { label: 'c', task: `Recite: Summarize the main points in your own words.`, solution: `Student produces a clear summary.` },
        ],
        hints: [`Choose an article that interests you`, `Take your time with each step`],
        solution: `The SQ3R method improves comprehension and retention.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: `Identify the organizational structure of these text excerpts:`,
        subTasks: [
          { label: 'a', task: `"Climate change leads to rising sea levels, which causes coastal flooding. As a result, millions may need to relocate."`, solution: `Cause and effect. Signal words: "leads to," "As a result."` },
          { label: 'b', task: `"While traditional classrooms offer face-to-face interaction, online learning provides flexibility."`, solution: `Compare and contrast. Signal word: "While."` },
          { label: 'c', task: `"The industrial revolution began in Britain in the late 18th century. By the mid-19th century, it had spread to Europe."`, solution: `Chronological. Signal words: "began," "By the mid-19th century."` },
        ],
        hints: [`Look for signal words`, `Consider how ideas relate`],
        solution: `Recognizing structure helps you understand how information is organized.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-5-1-summary',
      type: 'text',
      content: `## Summary: Reading Non-fiction Texts

**Key Takeaways:**

**1. Non-fiction Text Types**
Non-fiction includes informative texts (news, reports), argumentative texts (editorials, essays), narrative non-fiction (biographies, memoirs), and functional texts (instructions, documents).

**2. Active Reading Strategies**
Effective reading involves three phases:
- **Before:** Preview, set purpose, activate knowledge
- **During:** Annotate, identify structure, monitor comprehension
- **After:** Summarize, evaluate, connect

**3. Text Structure Recognition**
Common patterns include chronological, compare/contrast, cause/effect, problem/solution, and description. Signal words help identify these structures.

**4. The SQ3R Method**
Survey, Question, Read, Recite, Review provides a structured approach to improve comprehension and retention.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-5',
        number: '5',
        type: 'classic',
        task: `Read a feature article from a reputable publication. Write a reading response (300-400 words) including:`,
        subTasks: [
          { label: 'a', task: `A summary of the article's main argument (2-3 sentences)`, solution: `Student captures the central message.` },
          { label: 'b', task: `Identification of text type and structure with evidence`, solution: `Student correctly identifies genre and structure.` },
          { label: 'c', task: `Analysis of how the author supports their points`, solution: `Student identifies evidence types.` },
          { label: 'd', task: `Your evaluation of the article's effectiveness`, solution: `Student provides reasoned judgment.` },
        ],
        hints: [`Choose an article of 800+ words`, `Take notes as you read`],
        solution: `This exercise integrates all skills from this chapter.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-ex-6',
        number: '6',
        type: 'classic',
        task: `Create a "Non-fiction Reading Toolkit" for your studies. Include:`,
        subTasks: [
          { label: 'a', task: `A checklist of 8-10 questions to ask before, during, and after reading`, solution: `Student creates practical questions for each phase.` },
          { label: 'b', task: `A guide to five text structures with signal words for each`, solution: `Student covers all five structures with examples.` },
          { label: 'c', task: `A set of 6+ annotation symbols with explanations`, solution: `Student develops personal system: * important, ? question, ! surprising, etc.` },
        ],
        hints: [`Make your toolkit practical`, `Think about what helps you when reading`],
        solution: `Creating your own toolkit helps internalize these strategies.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_5_2: TextbookChapter = {
  id: 'engelsk-vg1-5-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.2',
  title: 'Comparing Sources',
  description: 'Learn to compare and evaluate different sources on the same topic.',
  estimatedMinutes: 60,
  competenceGoals: ['lese og sammenligne ulike sakprosatekster om samme emne fra ulike kilder og vurdere kildens troverdighet'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-5-2-intro',
      type: 'text',
      content: `## Why Compare Sources?

In an age of abundant information, rarely does a single source tell the complete story. Every text is shaped by its author's perspective, purpose, and limitations. When you compare multiple sources on the same topic, you gain a richer, more nuanced understanding than any single source could provide. This comparative approach is fundamental to academic research, journalism, and informed citizenship.

Comparing sources helps you identify patterns and discrepancies. When multiple independent sources agree on a fact, that fact is more likely to be accurate. When sources disagree, those disagreements reveal areas of uncertainty or controversy that deserve closer examination. Learning to navigate these differences is a crucial skill for the information age.

In this chapter, you will develop systematic methods for comparing sources. You will learn to identify what different sources include and exclude, analyze how perspective shapes presentation, evaluate the quality of evidence across sources, and synthesize information from multiple texts into your own understanding.`,
    },
    // --- TEORI 1 ---
    {
      id: 'engelsk-vg1-5-2-def-1',
      type: 'definition',
      title: 'The Source Comparison Framework',
      content: `A systematic approach to comparing sources examines four key dimensions: content, perspective, evidence, and purpose.

**Content Analysis:**
- What information is included in each source?
- What is conspicuously absent or omitted?
- Are the basic facts consistent across sources?
- What claims are made, and how do they differ?
- How much detail does each source provide?

**Perspective Analysis:**
- Who is the author and what is their background?
- What viewpoint or position does the source reflect?
- What assumptions does the author make?
- Who is the intended audience?
- How might the author's identity shape the content?

**Evidence Evaluation:**
- What types of evidence does each source use?
- Are sources and references provided?
- Is data presented accurately and fairly?
- Can the claims be independently verified?
- How recent and relevant is the evidence?

**Purpose Examination:**
- Is the source primarily informing, persuading, or entertaining?
- Is the presentation balanced or one-sided?
- What action or response does the source encourage?
- Who benefits from this message being spread?

Using this framework consistently helps you move beyond surface-level reading to deeper critical analysis.`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-5-2-example-1',
      type: 'example',
      title: 'Comparing Two News Reports',
      content: `**Source A (BBC News):**
"Electric vehicle sales reached a record 14 million units globally in 2023, representing 18% of all new car sales. China led the market with 8.1 million EV sales, followed by Europe with 3.2 million. However, growth rates slowed compared to 2022, raising questions about whether the industry can meet ambitious climate targets."

**Source B (Electric Vehicle Magazine):**
"2023 was another triumphant year for electric vehicles, with 14 million units sold worldwide! China's dominance proves that bold government policy works. While some naysayers point to slower growth rates, this ignores the remarkable achievement of EVs capturing nearly one-fifth of the global market."

**Comparison Analysis:**

| Dimension | Source A | Source B |
|-----------|----------|----------|
| **Content** | Includes statistics and raises concerns | Same statistics, downplays concerns |
| **Perspective** | Neutral, balanced | Pro-EV advocacy |
| **Evidence** | Numbers with context | Numbers as celebration |
| **Purpose** | Inform objectively | Promote EV adoption |

Both sources agree on the basic facts (14 million units, 18% market share), but their framing differs significantly. Source A presents both achievement and concern; Source B dismisses concerns as "naysaying."`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: `Use the Source Comparison Framework to analyze these two descriptions of the same historical event:

**Source 1:** "The Boston Tea Party of 1773 was a principled act of resistance against unjust taxation. American colonists, frustrated by British tyranny and the infamous 'taxation without representation,' courageously destroyed tea shipments to protest their lack of political voice."

**Source 2:** "In 1773, a group of colonists in Boston destroyed approximately 342 chests of tea worth about 10,000 pounds. The British government responded by passing the Coercive Acts, escalating tensions that would lead to armed conflict two years later."`,
        subTasks: [
          { label: 'a', task: `Analyze the content: What facts are included in each? What is emphasized or omitted?`, solution: `Source 1 emphasizes principles and emotions (frustration, courage, tyranny) but omits specific details about damage. Source 2 provides specific quantities and consequences but omits the colonists' motivations.` },
          { label: 'b', task: `Analyze the perspective: What viewpoint does each source reflect? Identify at least three words that reveal perspective.`, solution: `Source 1 reflects a pro-colonist American patriotic perspective. Key words: "principled," "resistance," "unjust," "tyranny," "courageously." Source 2 reflects a more neutral/academic perspective, using factual language without value judgments.` },
          { label: 'c', task: `Which source would be more appropriate for an academic essay? Explain your reasoning.`, solution: `Source 2 would be more appropriate for academic writing because it presents facts without emotional language or value judgments. Academic writing should be objective, and Source 1's loaded language ("tyranny," "courageously") reveals bias.` },
        ],
        hints: [`Look for emotionally charged words`, `Consider what each source wants you to feel or believe`],
        solution: `Both sources describe the same event but serve different purposes. Source 1 is designed to inspire patriotic feeling, while Source 2 aims to inform objectively.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: `Find two news articles about the same recent event from different sources (e.g., one from a US outlet and one from a European outlet, or one from a traditional newspaper and one from a digital-native publication). Apply the comparison framework:`,
        subTasks: [
          { label: 'a', task: `Identify the basic facts both sources agree on.`, solution: `Student identifies core facts common to both articles (who, what, when, where).` },
          { label: 'b', task: `Note what information appears in one source but not the other.`, solution: `Student identifies unique content in each article and considers why these differences might exist.` },
          { label: 'c', task: `Analyze differences in word choice and framing. Give specific examples.`, solution: `Student provides concrete examples of different vocabulary, headlines, or framing choices.` },
        ],
        hints: [`Choose a topic with international significance`, `Pay attention to headlines and opening paragraphs`],
        solution: `Comparing sources from different contexts reveals how geography, culture, and publication type influence news coverage.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2 ---
    {
      id: 'engelsk-vg1-5-2-def-2',
      type: 'definition',
      title: 'Synthesis: Combining Information from Multiple Sources',
      content: `**Synthesis** is the skill of combining information from multiple sources to create a unified understanding that is greater than any single source.

**The Synthesis Process:**

1. **Gather and read sources carefully**
   - Identify the key claims in each source
   - Note areas of agreement and disagreement
   - Mark important quotes and data

2. **Identify patterns and themes**
   - What topics appear across multiple sources?
   - Where do sources reinforce each other?
   - Where do they contradict each other?

3. **Evaluate and prioritize**
   - Which sources are most reliable?
   - Which evidence is strongest?
   - How should contradictions be resolved?

4. **Integrate into your own analysis**
   - Don't just summarize each source separately
   - Organize by theme, not by source
   - Use your own voice to connect ideas

**Synthesis vs. Summary:**
- **Summary:** Condenses ONE source into fewer words
- **Synthesis:** Combines MULTIPLE sources into a new unified understanding

**Signal Phrases for Synthesis:**
- "While Source A argues... Source B suggests..."
- "Several sources agree that..."
- "The evidence points to..."
- "Despite differing on X, both sources acknowledge..."`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: `Read the following summaries of three sources about social media and mental health. Then write a synthesis paragraph (100-150 words) that combines their insights:

**Source A (Medical Journal):** Research involving 5,000 adolescents found a correlation between more than 3 hours of daily social media use and increased symptoms of depression. However, causation could not be established.

**Source B (Psychology Today):** While concerns about social media are valid, researchers emphasize that online platforms also provide crucial support networks for isolated teens, particularly LGBTQ+ youth.

**Source C (Tech Industry Report):** Social media companies have implemented new features such as time limits and well-being prompts. Usage patterns vary significantly by age and region.`,
        subTasks: [
          { label: 'a', task: `Write a synthesis paragraph that integrates all three sources.`, solution: `Sample synthesis: "The relationship between social media and teen mental health is complex and contested. While medical research has identified correlations between heavy use and depression symptoms (Source A), the causality remains unclear, and social platforms also provide vital support for marginalized youth (Source B). The tech industry has begun responding with well-being features, though usage patterns vary widely (Source C). Together, these sources suggest that blanket judgments about social media's effects are oversimplified; both risks and benefits depend on how, why, and by whom platforms are used."` },
          { label: 'b', task: `Explain how your paragraph differs from simply summarizing each source in sequence.`, solution: `The synthesis paragraph organizes by theme (complexity of the issue, varying effects, industry response) rather than by source. It connects ideas and draws conclusions that emerge from the combination of sources, rather than just listing what each says.` },
        ],
        hints: [`Start by identifying what the sources agree on`, `Consider what conclusion emerges from combining them`],
        solution: `Effective synthesis creates new understanding by connecting multiple perspectives rather than presenting them separately.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: `Identify which of the following represents TRUE synthesis versus simple source-by-source summary:`,
        subTasks: [
          { label: 'a', task: `"Smith (2020) argues that renewable energy is cost-effective. Jones (2021) claims that fossil fuels remain necessary. Brown (2022) suggests a gradual transition."`, solution: `This is a SUMMARY (source-by-source). Each source is described separately without integration or connection.` },
          { label: 'b', task: `"While experts disagree on the pace of energy transition, with some advocating rapid change (Smith, 2020) and others urging caution (Jones, 2021), most acknowledge that some form of transition is necessary (Brown, 2022)."`, solution: `This is SYNTHESIS. It organizes by theme (disagreement about pace, agreement on necessity), integrates sources within the same sentence, and identifies the common ground.` },
          { label: 'c', task: `Explain the key differences between summary and synthesis approaches.`, solution: `Summary describes sources one by one; synthesis integrates them by theme. Summary restates; synthesis interprets and connects. Summary keeps sources separate; synthesis creates new understanding from their combination.` },
        ],
        hints: [`Look at how sources are organized`, `Consider whether the writing adds analytical value`],
        solution: `Synthesis organizes by idea, not by source, creating analytical connections that neither source makes alone.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-5-2-summary',
      type: 'text',
      content: `## Summary: Comparing Sources

**Key Takeaways:**

**1. The Source Comparison Framework**
Systematically analyze sources across four dimensions:
- **Content:** What is included and omitted
- **Perspective:** Author's viewpoint and assumptions
- **Evidence:** Quality and type of support
- **Purpose:** Intended effect on the reader

**2. Identifying Bias and Framing**
Even factually accurate sources can present information in ways that favor particular interpretations. Watch for:
- Emotionally charged language
- Selective emphasis
- Omission of relevant context

**3. Synthesis Skills**
Move beyond summary to synthesis:
- Organize by theme, not source
- Identify patterns and contradictions
- Create new understanding from combined sources
- Use your own analytical voice

**4. Practical Application**
Comparing sources is essential for:
- Academic research
- Informed decision-making
- Evaluating news and media
- Developing critical thinking`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-ex-5',
        number: '5',
        type: 'classic',
        task: `Choose a controversial topic (e.g., school uniforms, social media age limits, climate policy). Find three sources with different perspectives. Write a 400-500 word analysis that:`,
        subTasks: [
          { label: 'a', task: `Identifies the main argument of each source`, solution: `Student clearly summarizes each source's central claim.` },
          { label: 'b', task: `Compares their use of evidence`, solution: `Student analyzes evidence quality, types, and persuasiveness across sources.` },
          { label: 'c', task: `Synthesizes the sources to present a balanced view of the topic`, solution: `Student integrates sources thematically, identifies common ground and disagreements, and draws reasoned conclusions.` },
          { label: 'd', task: `Concludes with your own informed perspective, supported by the strongest evidence from your sources`, solution: `Student forms their own position based on evidence evaluation, explaining which sources they found most convincing and why.` },
        ],
        hints: [`Choose sources that genuinely disagree`, `Your synthesis should show understanding of multiple viewpoints`],
        solution: `This comprehensive exercise develops research, analysis, and synthesis skills essential for academic work.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-ex-6',
        number: '6',
        type: 'classic',
        task: `Create a "Source Comparison Checklist" that you can use for future research projects. Your checklist should:`,
        subTasks: [
          { label: 'a', task: `Include at least 15 questions organized by the four framework dimensions (Content, Perspective, Evidence, Purpose)`, solution: `Student creates comprehensive questions covering all four dimensions, such as: Content - What main claims are made? What is omitted? Perspective - What is the author's background? Evidence - Are sources cited? Purpose - What response does this encourage?` },
          { label: 'b', task: `Add a "Synthesis Section" with prompts for combining sources`, solution: `Student includes prompts like: Where do sources agree? Disagree? What patterns emerge? What conclusions can be drawn?` },
          { label: 'c', task: `Include space for notes and a final evaluation rating system`, solution: `Student designs practical format with space for recording observations and rating sources on reliability, relevance, etc.` },
        ],
        hints: [`Think about what questions would be most useful in actual research`, `Make your checklist practical and usable`],
        solution: `Creating your own research tool helps internalize the comparison process and ensures systematic analysis in future work.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_5_3: TextbookChapter = {
  id: 'engelsk-vg1-5-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.3',
  title: 'Source Criticism and Evaluation',
  description: 'Develop critical thinking skills for evaluating sources.',
  estimatedMinutes: 60,
  competenceGoals: ['bruke ulike kilder på en kritisk, hensiktsmessig og etterrettelig måte'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-5-3-intro',
      type: 'text',
      content: `## Critical Source Evaluation

In an era of information abundance, the ability to distinguish reliable sources from unreliable ones is perhaps the most important intellectual skill you can develop. Every day, you encounter claims, statistics, and arguments from countless sources. Some of these are rigorously researched and carefully fact-checked; others are misleading, biased, or simply fabricated. Your success as a student, professional, and citizen depends on your ability to tell the difference.

Source criticism is not about cynicism or distrusting everything you read. Rather, it is about developing systematic methods for evaluating credibility. Just as a scientist follows protocols to ensure valid results, a critical reader follows principles to ensure they are building their understanding on a solid foundation of reliable information.

In this chapter, you will learn two powerful frameworks for evaluating sources: the CRAAP Test and Lateral Reading. You will also develop skills for identifying red flags that signal potentially unreliable information, and you will practice applying these tools to real-world sources.`,
    },
    // --- TEORI 1 ---
    {
      id: 'engelsk-vg1-5-3-def-1',
      type: 'definition',
      title: 'The CRAAP Test: A Framework for Evaluation',
      content: `The CRAAP Test provides a systematic approach to evaluating any source. Each letter represents a criterion to consider:

**C - Currency (Timeliness)**
- When was the information published or last updated?
- Is the information current enough for your topic?
- Do all links and references work?
- For rapidly changing fields, currency is critical; for historical topics, older sources may be valuable.

**R - Relevance (Appropriateness)**
- Does this information directly relate to your research question?
- Is the depth and complexity appropriate for your level?
- Who is the intended audience (general public, experts, children)?
- Would you be comfortable citing this source in academic work?

**A - Authority (Credibility of Source)**
- Who is the author, and what are their qualifications?
- What organization published this, and what is their reputation?
- Is contact information provided?
- What gives this source the right to speak on this topic?

**A - Accuracy (Reliability of Content)**
- Is the information supported by evidence?
- Can claims be verified through other sources?
- Has the content been peer-reviewed or edited?
- Are there obvious errors in spelling, grammar, or facts?

**P - Purpose (Reason for Existence)**
- Why does this source exist? To inform? To persuade? To sell? To entertain?
- Is the information presented objectively, or is there obvious bias?
- Are there political, commercial, or ideological motivations?
- Is it clearly labeled as fact, opinion, or analysis?

**Scoring:** Rate each criterion 1-5 (1 = poor, 5 = excellent). Sources scoring below 15/25 warrant extra scrutiny.`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-5-3-example-1',
      type: 'example',
      title: 'Applying the CRAAP Test',
      content: `**Source:** A Wikipedia article on Climate Change

**CRAAP Analysis:**

| Criterion | Score | Explanation |
|-----------|-------|-------------|
| **Currency** | 4/5 | Frequently updated; check "View history" for recent edits |
| **Relevance** | 4/5 | Comprehensive overview; appropriate for initial research |
| **Authority** | 3/5 | Multiple anonymous editors; no single expert author |
| **Accuracy** | 4/5 | Claims cited; can verify through footnotes; peer-edited |
| **Purpose** | 5/5 | Purely informational; no commercial or political agenda |

**Total: 20/25**

**Conclusion:** Wikipedia is useful for getting an overview and finding primary sources through footnotes, but should not be cited directly in academic work. Instead, use its references to find the original sources.

**Compare with:** A blog post titled "Why Climate Scientists Are Lying to You"

| Criterion | Score | Explanation |
|-----------|-------|-------------|
| **Currency** | 3/5 | Posted last month |
| **Relevance** | 2/5 | Conspiracy angle, not academic |
| **Authority** | 1/5 | Anonymous author, no credentials |
| **Accuracy** | 1/5 | No sources cited, contradicts scientific consensus |
| **Purpose** | 1/5 | Clear agenda to discredit scientists |

**Total: 8/25 - Not a reliable source**`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-ex-1',
        number: '1',
        type: 'classic',
        task: `Apply the CRAAP test to this source description:

"An article titled 'The Truth About Vaccines' published on a website called HealthFreedomNow.com. The author is listed only as 'Dr. Mike.' The article claims that vaccines cause autism, citing a 1998 study. The website sells 'natural immunity boosters' and has pop-up advertisements throughout."`,
        subTasks: [
          { label: 'a', task: `Rate Currency (1-5) and explain your reasoning.`, solution: `Low score (2/5). The 1998 study referenced (Wakefield) has been retracted. Medical information should be current. Currency issues are a red flag.` },
          { label: 'b', task: `Rate Authority (1-5) and explain your reasoning.`, solution: `Low score (1/5). "Dr. Mike" provides no verifiable credentials. No institutional affiliation. Pseudonymous authorship is a red flag for medical advice.` },
          { label: 'c', task: `Rate Purpose (1-5) and explain your reasoning.`, solution: `Low score (1/5). The website sells related products, creating financial incentive for misleading content. Combined with the sensational title "The Truth About," this suggests agenda-driven content.` },
          { label: 'd', task: `What is your overall assessment? Would you use this source? Why or why not?`, solution: `This source fails multiple CRAAP criteria. The retracted study, anonymous author, commercial interests, and sensational framing all indicate unreliability. This source should not be used; instead, seek peer-reviewed medical journals or official health organization websites.` },
        ],
        hints: [`Consider each criterion carefully`, `Think about what the red flags suggest about reliability`],
        solution: `The CRAAP test reveals multiple serious concerns about this source's reliability.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: `Find a source on a topic of your choice and complete a full CRAAP evaluation. Your analysis should be thorough and evidence-based.`,
        subTasks: [
          { label: 'a', task: `Provide the source citation (title, author, URL or publication).`, solution: `Student provides complete source identification.` },
          { label: 'b', task: `Rate and explain each CRAAP criterion (Currency, Relevance, Authority, Accuracy, Purpose).`, solution: `Student provides thoughtful ratings with specific evidence from the source.` },
          { label: 'c', task: `Calculate the total score and write a 2-3 sentence conclusion about the source's reliability.`, solution: `Student draws a clear conclusion based on the evidence analyzed.` },
        ],
        hints: [`Choose a source you might actually use for research`, `Provide specific evidence for each rating`],
        solution: `Practicing CRAAP analysis on real sources develops critical evaluation skills.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2 ---
    {
      id: 'engelsk-vg1-5-3-def-2',
      type: 'definition',
      title: 'Lateral Reading: Checking Beyond the Source',
      content: `**Lateral reading** is a fact-checking strategy used by professional fact-checkers. Instead of reading deeply within a source (vertical reading), you open new browser tabs to check what OTHER sources say ABOUT the source you are evaluating.

**Why Lateral Reading Works:**
Unreliable sources often appear professional and cite references. Vertical reading can be deceived by these appearances. Lateral reading bypasses the source's self-presentation to find independent verification.

**The Lateral Reading Process:**

1. **Open new tabs immediately**
   - Don't waste time reading the full source first
   - The source wants you to engage with its content

2. **Search for the author or organization**
   - "[Author name]" + credentials
   - "[Organization name]" + reputation OR controversy

3. **Check what experts say**
   - Search for expert commentary on the source
   - Look for academic or journalistic assessments

4. **Find fact-checks**
   - Use fact-checking sites: Snopes, PolitiFact, FactCheck.org
   - Search: "[claim]" + fact check

5. **Verify specific claims**
   - Find the original study or data cited
   - Check if claims are represented accurately

**Red Flags That Require Lateral Reading:**
- No author identified or pseudonymous author
- Emotional or sensational language
- No sources or citations provided
- Claims that seem too shocking to be true
- Requests to "share before they take this down"
- Domain names that mimic legitimate news sites
- Unusual top-level domains (.co instead of .com, etc.)`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: `Practice lateral reading with a current news story or viral claim. Document your process:`,
        subTasks: [
          { label: 'a', task: `What was the original claim or source you encountered?`, solution: `Student describes the claim and where they found it.` },
          { label: 'b', task: `What did you search for, and what did you find? (List at least 3 lateral searches)`, solution: `Student documents searches like "[source name] + reputation," "[author] + credentials," "[claim] + fact check" and summarizes findings.` },
          { label: 'c', task: `Based on your lateral reading, what is your assessment of the original source's reliability?`, solution: `Student draws a conclusion supported by evidence from their lateral reading.` },
        ],
        hints: [`Start with searches about the source, then move to fact-checks`, `Document your search terms`],
        solution: `Lateral reading provides external verification that complements internal analysis like the CRAAP test.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: `Identify the red flags in each scenario and explain what lateral reading steps you would take:`,
        subTasks: [
          { label: 'a', task: `A Facebook post shares an article from "ABCnews.com.co" with the headline "BREAKING: Major Celebrity Secretly Arrested."`, solution: `Red flags: ".com.co" domain mimics legitimate site, all-caps sensational headline, vague claims. Lateral steps: Search for the story on legitimate news sites, check domain in WHOIS lookup, verify on fact-checking sites.` },
          { label: 'b', task: `A YouTube video titled "What They Don't Want You to Know About [Topic]" has 2 million views and hundreds of comments saying "finally the truth!"`, solution: `Red flags: Conspiracy framing ("they don't want you to know"), appeal to forbidden knowledge, comment echo chamber. Lateral steps: Search for expert response to claims, check creator credentials, search "[claim] + debunked."` },
          { label: 'c', task: `An article cites "a Harvard study" but provides no link or specific reference.`, solution: `Red flag: Vague citation without verification. Lateral steps: Search Harvard's website for the study, search "[topic] + Harvard study" to find the original, check if the claim accurately represents the study's findings.` },
        ],
        hints: [`Consider what makes each scenario suspicious`, `Think about what searches would verify or disprove the claims`],
        solution: `Recognizing red flags triggers the lateral reading process before you invest time in unreliable content.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-5-3-summary',
      type: 'text',
      content: `## Summary: Source Criticism and Evaluation

**Key Takeaways:**

**1. The CRAAP Test**
Systematically evaluate sources using five criteria:
- **Currency:** Is the information timely?
- **Relevance:** Does it fit your needs?
- **Authority:** Who created it and why should you trust them?
- **Accuracy:** Is it supported by evidence?
- **Purpose:** Why does this source exist?

**2. Lateral Reading**
Don't trust a source's self-presentation. Instead:
- Open new tabs immediately
- Search for what others say ABOUT the source
- Check author/organization reputation
- Find fact-checks for specific claims
- Verify cited evidence

**3. Red Flags**
Be alert to warning signs:
- Anonymous or pseudonymous authors
- Sensational or emotional language
- Missing citations
- Claims too extreme to believe
- Domains mimicking legitimate sites
- Commercial interests mixed with information

**4. Integration**
Combine CRAAP Test (internal analysis) with Lateral Reading (external verification) for comprehensive source evaluation.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-ex-5',
        number: '5',
        type: 'classic',
        task: `Conduct a full source evaluation combining both methods. Choose a source related to a controversial topic (e.g., health claims, political issues, environmental debates). Write a 400-500 word evaluation report that includes:`,
        subTasks: [
          { label: 'a', task: `A complete CRAAP analysis with scores and explanations for each criterion`, solution: `Student provides thorough CRAAP analysis with specific evidence from the source.` },
          { label: 'b', task: `Documentation of your lateral reading process (at least 4 searches with findings)`, solution: `Student documents search terms, what they found, and how it affected their assessment.` },
          { label: 'c', task: `A final verdict: Is this source reliable? Would you cite it? For what purposes?`, solution: `Student draws a nuanced conclusion, perhaps noting that a source might be useful for some purposes but not others.` },
        ],
        hints: [`Choose a source that is neither obviously terrible nor obviously excellent`, `Document your thought process`],
        solution: `Combining internal and external evaluation methods provides comprehensive source assessment.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-ex-6',
        number: '6',
        type: 'classic',
        task: `Create a "Source Evaluation Quick Reference Card" that could fit on one page. Your card should:`,
        subTasks: [
          { label: 'a', task: `Summarize the CRAAP Test with 2-3 key questions for each criterion`, solution: `Student distills CRAAP to essential questions that can be quickly applied.` },
          { label: 'b', task: `List 5-7 lateral reading steps in order`, solution: `Student creates a clear, actionable checklist for lateral reading.` },
          { label: 'c', task: `Include a "Red Flags Checklist" with at least 8 warning signs`, solution: `Student compiles red flags that trigger deeper investigation.` },
          { label: 'd', task: `Add a decision flowchart: If a source fails X criteria, then do Y`, solution: `Student creates practical decision guidance for different evaluation outcomes.` },
        ],
        hints: [`Design for practical use during actual research`, `Make it scannable and actionable`],
        solution: `Creating your own reference tool helps internalize these evaluation skills.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_5_4: TextbookChapter = {
  id: 'engelsk-vg1-5-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.4',
  title: 'Media Literacy',
  description: 'Navigate and critically evaluate media in the digital age.',
  estimatedMinutes: 60,
  competenceGoals: ['bruke ulike kilder på en kritisk, hensiktsmessig og etterrettelig måte'],
  content: [
    // --- INTRO ---
    {
      id: 'engelsk-vg1-5-4-intro',
      type: 'text',
      content: `## Navigating Today's Media Landscape

We live in an unprecedented era of information abundance. Every day, billions of messages compete for your attention across social media feeds, news websites, podcasts, videos, and messaging apps. Some of this content is carefully researched and fact-checked; some is opinion presented as fact; some is deliberately designed to mislead. The ability to navigate this landscape wisely is perhaps the defining skill of the 21st century citizen.

Media literacy goes beyond simply identifying "fake news." It means understanding how all media is constructed, recognizing the techniques used to capture attention, analyzing how different audiences might interpret the same message, and being aware of what is absent from any given representation. Media literate individuals don't just consume content passively; they engage critically, asking questions about source, purpose, and effect.

In this chapter, you will develop a deeper understanding of how media messages are constructed and why. You will learn to identify different types of misinformation and the techniques used to spread them. You will also build practical skills for navigating social media and news consumption in ways that keep you informed without being manipulated.`,
    },
    // --- TEORI 1 ---
    {
      id: 'engelsk-vg1-5-4-def-1',
      type: 'definition',
      title: 'Types of Misinformation and Disinformation',
      content: `Understanding the different types of problematic content helps you recognize them in the wild.

**Key Distinction:**
- **Misinformation:** False or inaccurate information spread without intent to deceive (the person sharing it believes it's true)
- **Disinformation:** False information deliberately created and spread to deceive (propaganda, manipulation)
- **Malinformation:** True information shared to cause harm (leaked private information, out-of-context facts)

**Common Types of Problematic Content:**

**1. Fabricated Content (Fake News)**
Completely false stories designed to look like legitimate journalism. Often uses professional-looking websites with names similar to real outlets.

**2. Manipulated Content**
Real images, videos, or quotes that have been altered or taken out of context. Includes "deepfakes" created using AI technology.

**3. Misleading Content**
Uses real information in misleading ways: cherry-picked statistics, cropped photos, or misleading headlines that don't match the article.

**4. Imposter Content**
Fake accounts pretending to be real people, organizations, or news sources. Common on social media.

**5. Satire/Parody Mistaken as Real**
Humorous content intended as satire that gets shared as if it were genuine news.

**6. Clickbait**
Sensationalized headlines designed to generate clicks, often misrepresenting the actual content.

**7. Conspiracy Theories**
Unfounded explanations for events that resist evidence and rely on hidden actors with malicious intent.

**8. Propaganda**
Information designed to promote a particular political agenda, often mixing truth with spin.`,
    },
    // --- EKSEMPEL 1 ---
    {
      id: 'engelsk-vg1-5-4-example-1',
      type: 'example',
      title: 'Identifying Misinformation Types',
      content: `**Example 1: Fabricated Content**
A website called "DenverGuardian.com" published a story claiming an FBI agent investigating Hillary Clinton was found dead. The website looked professional but had no history, no staff, and the story was completely invented.
*How to spot it:* Check the domain, look for other articles, search for corroboration.

**Example 2: Manipulated Content**
A photo showed a massive crowd at a political rally. Investigation revealed it was actually from a different event years earlier.
*How to spot it:* Reverse image search, check the metadata, look for corroboration.

**Example 3: Misleading Content**
Headline: "Scientists Confirm: Coffee Causes Cancer"
Article content: A study found a very weak correlation between heavy coffee consumption and one type of cancer, with researchers saying more study is needed.
*How to spot it:* Always read beyond the headline, check the actual claims.

**Example 4: Satire Mistaken as Real**
An article from The Onion (a satire site) about a politician's ridiculous statement gets shared on social media as if it were real news.
*How to spot it:* Check the source; satire sites usually have disclaimers.`,
    },
    // --- OPPGAVE 1 ---
    {
      id: 'engelsk-vg1-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-ex-1',
        number: '1',
        type: 'classic',
        task: `Classify each scenario as a type of misinformation and explain what makes it that type:`,
        subTasks: [
          { label: 'a', task: `A tweet shows a video of a politician apparently saying something racist, but the audio has been edited to change the meaning.`, solution: `Manipulated content. Real video has been altered to misrepresent what was actually said. Detection: Find the original video, check fact-checking sites.` },
          { label: 'b', task: `Your grandmother shares an article claiming a common medicine is dangerous, citing "studies" that don't actually exist.`, solution: `Misinformation (likely fabricated content shared without intent to deceive by the sharer). Your grandmother probably believes it's true. Detection: Search for the cited studies, check medical authority websites.` },
          { label: 'c', task: `A news article has a headline saying "Unemployment Hits Record High" but the article explains unemployment rose 0.1% while still being historically low.`, solution: `Misleading content. The headline sensationalizes real data in a way that misrepresents the actual situation. Detection: Read the full article, not just the headline.` },
        ],
        hints: [`Consider both the content and the intent`, `Think about how each type works differently`],
        solution: `Different types of problematic content require different detection strategies.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 2 ---
    {
      id: 'engelsk-vg1-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: `Find a real example of each type and document it:`,
        subTasks: [
          { label: 'a', task: `A clickbait headline: Copy the headline and explain what makes it clickbait.`, solution: `Student identifies a headline using curiosity gaps, emotional triggers, or exaggeration. Examples: "You Won't Believe...", "This Changes Everything...", etc.` },
          { label: 'b', task: `A misleading use of statistics: Explain how the numbers are presented in a misleading way.`, solution: `Student identifies cherry-picked data, misleading graphs, or statistics without context.` },
          { label: 'c', task: `An example of imposter content OR satire that could be mistaken as real: Explain why it might fool people.`, solution: `Student identifies a fake account mimicking a real person/organization, OR satirical content that lacks clear satire markers.` },
        ],
        hints: [`Social media is a good place to find examples`, `Consider how design and presentation contribute to deception`],
        solution: `Recognizing these patterns in the wild develops your media literacy instincts.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TEORI 2 ---
    {
      id: 'engelsk-vg1-5-4-def-2',
      type: 'definition',
      title: 'How Social Media Shapes Information',
      content: `Social media platforms are not neutral channels for information. Their design fundamentally shapes what we see and how we interact with content.

**Algorithmic Curation:**
- Platforms use algorithms to decide what content you see
- Engagement (likes, comments, shares) drives visibility
- Content that triggers strong emotional reactions spreads faster
- This can amplify sensational or divisive content

**The Filter Bubble Effect:**
- Algorithms show you content similar to what you've engaged with before
- Over time, you see less content that challenges your existing views
- This can create an echo chamber where beliefs are reinforced, not tested

**Attention Economy:**
- Platforms compete for your attention; more time = more ad revenue
- Content is optimized for engagement, not accuracy
- Notifications and infinite scroll are designed to keep you on the platform

**Social Validation:**
- High engagement (likes, shares) creates perceived credibility
- We're influenced by what our social networks share and approve
- "Going viral" doesn't mean "being accurate"

**Speed vs. Accuracy:**
- Social media rewards being first, not being right
- Corrections and retractions rarely spread as far as the original claim
- The 24-hour news cycle pressures even legitimate outlets

**Practical Strategies:**
1. Be aware that your feed is curated, not comprehensive
2. Actively seek out diverse sources and perspectives
3. Don't assume viral = verified
4. Take a breath before sharing emotionally charged content
5. Consider following accounts that challenge your assumptions`,
    },
    // --- OPPGAVE 3 ---
    {
      id: 'engelsk-vg1-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-ex-3',
        number: '3',
        type: 'classic',
        task: `Analyze your own social media experience:`,
        subTasks: [
          { label: 'a', task: `Scroll through one of your social media feeds for 5 minutes. Categorize what you see: entertainment, news, ads, friends' posts, etc. What percentage is each?`, solution: `Student documents their feed composition and reflects on what it reveals about algorithmic curation.` },
          { label: 'b', task: `Identify 3 posts that seem designed to trigger emotional reactions. What emotions do they target? What techniques do they use?`, solution: `Student identifies emotional triggers (outrage, fear, humor, inspiration) and techniques (provocative language, striking images, etc.).` },
          { label: 'c', task: `Consider your filter bubble: Based on your feed, what perspectives or topics might you be missing?`, solution: `Student reflects critically on the limitations of their information diet.` },
        ],
        hints: [`Be honest about your own media consumption`, `Consider what the platform wants you to do vs. what you want to do`],
        solution: `Self-awareness about how platforms shape your information environment is the foundation of media literacy.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPGAVE 4 ---
    {
      id: 'engelsk-vg1-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: `Apply media literacy questions to analyze this viral social media post:

"BREAKING: Scientists have discovered that [popular food item] can prevent COVID-19! Big Pharma doesn't want you to know this! Share before they delete it! [Image of a scientist with a quote that can't be verified]"`,
        subTasks: [
          { label: 'a', task: `Identify at least 5 red flags in this post.`, solution: `Red flags: "BREAKING" (urgency), "Big Pharma doesn't want you to know" (conspiracy framing), "Share before they delete it" (pressure to spread before verifying), unverifiable quote, appeal to forbidden knowledge, no source cited for the "study."` },
          { label: 'b', task: `What emotional triggers is this post using?`, solution: `Fear (of disease, of being deceived by authorities), hope (simple solution to complex problem), anger (at perceived cover-up), belonging (sharing reveals truth others can't see).` },
          { label: 'c', task: `What steps would you take to verify this claim before sharing?`, solution: `Search for the study in medical databases, check major news outlets, consult WHO/CDC websites, use fact-checking sites, search for the quoted scientist to verify the quote, check who runs the account sharing this.` },
        ],
        hints: [`This post uses many common manipulation techniques`, `Think about why someone would create and share this`],
        solution: `Recognizing manipulation techniques helps you pause before engaging with or spreading questionable content.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- OPPSUMMERING ---
    {
      id: 'engelsk-vg1-5-4-summary',
      type: 'text',
      content: `## Summary: Media Literacy

**Key Takeaways:**

**1. Types of Problematic Content**
- **Misinformation:** False content spread without intent to deceive
- **Disinformation:** False content deliberately created to deceive
- Types include: fabricated content, manipulated media, misleading framing, imposter accounts, misunderstood satire, clickbait, conspiracy theories, propaganda

**2. Social Media Dynamics**
- Algorithms curate your feed based on engagement
- Filter bubbles limit exposure to diverse perspectives
- Emotional content spreads faster than accurate content
- Viral does not equal verified

**3. Critical Questions for All Media**
- Who created this and why?
- What techniques are used to grab attention?
- What perspectives are missing?
- How can this be verified?
- Why am I being asked to share this?

**4. Practical Strategies**
- Pause before sharing emotionally charged content
- Actively seek diverse sources
- Be aware that your feed is curated
- Verify before you amplify
- Recognize manipulation techniques`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-ex-5',
        number: '5',
        type: 'classic',
        task: `Conduct a "Media Literacy Audit" of your information diet over one week. Write a 400-500 word reflection that includes:`,
        subTasks: [
          { label: 'a', task: `An inventory of your main information sources (social media platforms, news apps, websites, podcasts, etc.) and approximately how much time you spend with each.`, solution: `Student honestly documents their media consumption patterns.` },
          { label: 'b', task: `An analysis of the diversity (or lack thereof) in your sources: political perspectives, geographic origins, types of content.`, solution: `Student critically assesses whether their information diet is balanced or creates filter bubbles.` },
          { label: 'c', task: `At least two examples of questionable content you encountered and how you responded.`, solution: `Student demonstrates application of media literacy skills to real encounters.` },
          { label: 'd', task: `A plan for improving your media literacy: What will you do differently?`, solution: `Student proposes concrete changes based on their audit findings.` },
        ],
        hints: [`Be honest in your self-assessment`, `Consider both quantity and quality of your media consumption`],
        solution: `Regular reflection on your information habits is key to maintaining media literacy.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-ex-6',
        number: '6',
        type: 'classic',
        task: `Create a "Media Literacy Guide for Beginners" designed for a younger sibling, parent, or friend who struggles with misinformation. Your guide should:`,
        subTasks: [
          { label: 'a', task: `Explain in simple terms why media literacy matters (2-3 paragraphs)`, solution: `Student writes accessible, non-condescending explanation of the problem.` },
          { label: 'b', task: `Provide a checklist of 8-10 questions to ask before sharing content`, solution: `Student creates practical, actionable questions appropriate for general audience.` },
          { label: 'c', task: `Include 3-5 concrete examples of misinformation types with tips for spotting each`, solution: `Student provides clear examples with detection strategies.` },
          { label: 'd', task: `List reliable fact-checking resources and explain how to use them`, solution: `Student recommends legitimate fact-checking sites and gives practical guidance.` },
        ],
        hints: [`Write for your actual audience - avoid jargon`, `Focus on practical, memorable advice`],
        solution: `Teaching others reinforces your own understanding and spreads media literacy in your community.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 6: Writing Skills
// ============================================================================

export const CHAPTER_ENGELSK_VG1_6_1: TextbookChapter = {
  id: 'engelsk-vg1-6-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.1',
  title: 'Formal vs Informal Writing',
  description: 'Understand and apply appropriate register in different contexts.',
  estimatedMinutes: 55,
  competenceGoals: ['skrive ulike formelle og uformelle tekster, også komplekse, med struktur og sammenheng'],
  content: [
    {
      id: 'engelsk-vg1-6-1-intro',
      type: 'text',
      content: `## Choosing the Right Register

Register refers to the level of formality in your writing, and selecting the appropriate register is one of the most important skills in effective communication. Every time you write, you make choices about vocabulary, sentence structure, and tone that signal to your reader how formal or informal your message is. These choices affect how your message is received and whether it achieves its intended purpose.

Understanding register is essential because the same message can be completely appropriate in one context and entirely inappropriate in another. A text message to a friend uses different language than a cover letter for a job application, even if both convey similar information. Skilled writers can shift between registers fluidly, adapting their style to meet the expectations of different audiences and situations.

In this chapter, you will learn to identify the features that distinguish formal from informal writing, understand when each is appropriate, and practice adapting your writing to different contexts. Mastering register will make you a more versatile and effective communicator in both academic and professional settings.`,
    },
    {
      id: 'engelsk-vg1-6-1-def-1',
      type: 'definition',
      title: 'Features of Formal Writing',
      content: `**Formal writing** is characterized by several distinct features that create a professional, objective tone:

**Vocabulary and Word Choice:**
- Uses sophisticated, precise vocabulary (utilize vs. use, therefore vs. so)
- Avoids slang, colloquialisms, and casual expressions
- Employs technical or academic terminology when appropriate
- Prefers longer, Latinate words over shorter Anglo-Saxon equivalents

**Grammar and Structure:**
- Avoids contractions (do not instead of don't, cannot instead of can't)
- Uses complete sentences with complex structures
- Often employs passive voice for objectivity ("The experiment was conducted" rather than "I conducted the experiment")
- Third person perspective is preferred over first or second person

**Tone and Style:**
- Objective and impersonal
- Serious and professional
- Evidence-based with careful qualification of claims
- Organized with clear logical progression

**Common Contexts for Formal Writing:**
- Academic essays, research papers, and reports
- Job applications, cover letters, and CVs
- Official correspondence and legal documents
- Professional emails to superiors or clients
- Business proposals and presentations`,
    },
    {
      id: 'engelsk-vg1-6-1-ex-1',
      type: 'example',
      content: `**Formal Writing Examples:**

**Academic Context:**
"The research demonstrates that excessive screen time may have a negative impact on adolescent sleep patterns. A longitudinal study conducted by the University of Pennsylvania found that participants who engaged with electronic devices for more than three hours daily experienced significant decreases in both sleep duration and quality."

**Professional Email:**
"Dear Ms. Johnson,

I am writing to express my interest in the Marketing Assistant position advertised on your company website. Having reviewed the job description, I believe my academic background and internship experience align well with the requirements of this role.

I would welcome the opportunity to discuss my qualifications in greater detail at your earliest convenience.

Yours sincerely,
James Peterson"

**Notice the features:** No contractions, sophisticated vocabulary, complete sentences, formal salutations, and objective tone throughout.`,
    },
    {
      id: 'engelsk-vg1-6-1-ex-1-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-1-task',
        number: '1',
        type: 'classic',
        task: 'Identify the formal writing features in the following text, then rewrite it in an informal style:\n\n"The committee has determined that the implementation of the proposed policy would be inadvisable at the present time. Further research is required to ascertain the potential consequences of such action."',
        subTasks: [
          { label: 'a', task: 'List at least four formal features you can identify in this text.', solution: 'Formal features include: sophisticated vocabulary (determined, implementation, inadvisable, ascertain), passive voice (has determined, is required), no contractions, third person perspective, complete complex sentences, Latinate words.' },
          { label: 'b', task: 'Rewrite the text in informal style while keeping the same meaning.', solution: 'Example: "The committee decided it is not a good idea to go ahead with the new policy right now. They need to do more research to figure out what might happen if they do."' },
        ],
        hints: ['Look for sophisticated vocabulary, passive voice, complete sentences, and lack of contractions'],
        solution: 'Formal writing uses specific linguistic features to create a professional, objective tone. Converting to informal style requires changing vocabulary, sentence structure, and perspective.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-ex-2-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-2-task',
        number: '2',
        type: 'classic',
        task: 'Write a formal email to a potential employer expressing interest in a summer internship position. Include a proper greeting, introduction, body paragraph about your qualifications, and formal closing.',
        hints: ['Use formal salutation (Dear Mr./Ms.), avoid contractions, maintain professional tone throughout, end with appropriate closing (Yours sincerely/faithfully)'],
        solution: 'A well-written formal email should include: proper greeting with title and surname, clear statement of purpose in first paragraph, specific qualifications and reasons for interest in body, polite request for response, formal closing with full name.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-def-2',
      type: 'definition',
      title: 'Features of Informal Writing',
      content: `**Informal writing** creates a friendly, conversational tone through different features:

**Vocabulary and Word Choice:**
- Uses everyday, simple vocabulary
- Includes contractions (don't, can't, won't, it's)
- May include slang, colloquialisms, and casual expressions
- Shorter, more common words preferred

**Grammar and Structure:**
- Sentence fragments are acceptable
- First and second person pronouns (I, you, we) common
- Active voice predominates
- Simpler sentence structures
- May begin sentences with conjunctions (And, But, So)

**Tone and Style:**
- Personal and subjective
- Casual and friendly
- Often uses humor or emotional language
- May include rhetorical questions

**Common Contexts for Informal Writing:**
- Text messages and personal emails
- Social media posts
- Personal blogs and diaries
- Creative writing (dialogue, first-person narratives)
- Casual communication with friends and family

**Important Note:** Informal does not mean careless. Good informal writing still requires clarity and purpose - it simply achieves these goals with different tools.`,
    },
    {
      id: 'engelsk-vg1-6-1-ex-3-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-3-task',
        number: '3',
        type: 'classic',
        task: 'Transform each formal sentence into informal style:',
        subTasks: [
          { label: 'a', task: '"I am writing to inquire about the availability of tickets for the upcoming concert."', solution: 'Hey, I was wondering - are there any tickets left for the concert?' },
          { label: 'b', task: '"It would be greatly appreciated if you could provide assistance with this matter."', solution: 'Could you help me out with this? That would be awesome!' },
          { label: 'c', task: '"The meeting failed to achieve its stated objectives and was therefore unproductive."', solution: 'The meeting was a total waste of time - we didn\'t get anything done.' },
          { label: 'd', task: '"Please do not hesitate to contact me should you require any further information."', solution: 'Just let me know if you need anything else!' },
        ],
        hints: ['Add contractions, use simpler words, consider adding expressions or exclamations, use first/second person'],
        solution: 'Informal writing uses contractions, simpler vocabulary, personal pronouns, and a conversational tone to create a friendly, approachable style.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-ex-4-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-4-task',
        number: '4',
        type: 'classic',
        task: 'Read the following informal text, then rewrite it in formal style suitable for an academic essay:\n\n"So basically, social media is really messing with people\'s mental health. Like, studies show it makes you compare yourself to everyone else all the time, which totally makes you feel worse about yourself. It\'s pretty sad when you think about it."',
        hints: ['Remove casual expressions (basically, like, pretty, totally), expand contractions, use precise academic vocabulary, maintain objective tone'],
        solution: 'Example formal version: "Research indicates that social media use may have significant negative effects on mental health. Studies suggest that the constant exposure to curated images of others\' lives encourages social comparison, which has been linked to decreased self-esteem and psychological well-being. These findings warrant serious consideration in discussions of digital media policy."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-summary',
      type: 'text',
      content: `## Summary: Formal vs Informal Writing

Understanding register is essential for effective communication. The key differences between formal and informal writing involve:

**Vocabulary:** Formal uses sophisticated, precise words; informal uses everyday language and slang.

**Grammar:** Formal avoids contractions and uses complex sentences; informal embraces contractions and simpler structures.

**Perspective:** Formal often uses third person and passive voice; informal uses first/second person and active voice.

**Tone:** Formal is objective and professional; informal is personal and conversational.

**Context determines appropriateness:** Neither register is inherently better - the skill lies in choosing the right register for your audience and purpose. Academic essays require formal writing, while a message to a friend should be informal. Some contexts, like workplace emails to colleagues you know well, might use a middle register that combines elements of both.

The best writers can shift between registers effortlessly, adapting their style to meet the needs of any situation.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-6-1-ex-5-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-5-task',
        number: '5',
        type: 'classic',
        task: 'You need to inform someone that you cannot attend an event. Write TWO versions of this message:\na) A formal email to your teacher explaining you cannot attend a mandatory school event\nb) A text message to your friend explaining you cannot attend their birthday party\n\nBoth messages should include: the information that you cannot attend, a reason, and an appropriate expression of regret.',
        hints: ['Consider appropriate greetings, level of detail, tone, and closings for each context'],
        solution: 'The formal version should use proper email format, no contractions, sophisticated vocabulary, and professional tone. The informal version should use casual language, contractions, possibly emoji references, and a friendly tone. Both convey the same information but in contextually appropriate ways.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-1-ex-6-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-ex-6-task',
        number: '6',
        type: 'classic',
        task: 'Analyze the register of three different texts you encounter in your daily life (e.g., textbook, social media post, news article, advertisement). For each text:\na) Identify the register (formal, informal, or mixed)\nb) List specific features that indicate the register\nc) Explain why this register is appropriate for the text\'s purpose and audience',
        subTasks: [
          { label: 'a', task: 'Text 1: Describe the source and analyze its register', solution: 'Identify source, note vocabulary choices, sentence structures, tone, and perspective. Explain how these serve the text\'s purpose.' },
          { label: 'b', task: 'Text 2: Describe the source and analyze its register', solution: 'Compare features to Text 1, note differences in approach based on different audience or purpose.' },
          { label: 'c', task: 'Text 3: Describe the source and analyze its register', solution: 'Synthesize understanding of register by analyzing a third example and explaining contextual appropriateness.' },
        ],
        hints: ['Look for contractions, vocabulary level, sentence structure, tone, and perspective in each text'],
        solution: 'This exercise develops awareness of how register functions in real-world texts. Understanding why writers make particular register choices helps you make better choices in your own writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_6_2: TextbookChapter = {
  id: 'engelsk-vg1-6-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.2',
  title: 'Argumentative Writing',
  description: 'Master the art of persuasive and argumentative essays.',
  estimatedMinutes: 60,
  competenceGoals: ['skrive ulike tekster som beskriver, diskuterer, begrunner og reflekterer, tilpasset formål, mottaker og situasjon'],
  content: [
    {
      id: 'engelsk-vg1-6-2-intro',
      type: 'text',
      content: `## The Art of Argument

Argumentative writing is one of the most important skills you can develop as a student and citizen. It involves presenting a claim, supporting it with evidence and reasoning, and persuading your reader to accept your position. Unlike simply stating an opinion, effective argumentation requires you to think critically, consider multiple perspectives, and build a logical case for your viewpoint.

The ability to construct and evaluate arguments is essential not only in academic writing but also in everyday life. Whether you are writing an essay, participating in a debate, or simply trying to convince someone of your point of view, the same principles apply. You need a clear position, solid evidence, logical reasoning, and an awareness of potential objections.

In this chapter, you will learn how to structure an argumentative essay, craft effective thesis statements, develop body paragraphs using the PEEL method, address counter-arguments, and write compelling conclusions. By the end, you will have the tools to argue persuasively on any topic.`,
    },
    {
      id: 'engelsk-vg1-6-2-def-1',
      type: 'definition',
      title: 'The Thesis Statement: Your Central Claim',
      content: `**What is a Thesis Statement?**
A thesis statement is a single sentence that expresses the main argument of your essay. It tells the reader what you will prove and guides the entire essay.

**Characteristics of a Strong Thesis:**
- **Specific:** Clearly states your position on a narrow topic
- **Debatable:** Someone could reasonably disagree with it
- **Supportable:** You can provide evidence for it
- **Original:** Offers your own insight, not just a fact

**Weak vs. Strong Thesis Examples:**

**Topic: Social Media**
Weak: "Social media is bad." (Too vague, no nuance)
Strong: "While social media enables global connection and information sharing, its documented effects on teenage mental health, including increased anxiety and depression, demonstrate that parents and schools should implement strict usage limits for minors."

**Topic: Climate Change**
Weak: "Climate change is a problem." (States obvious fact)
Strong: "Despite the economic costs of transitioning away from fossil fuels, governments must immediately invest in renewable energy infrastructure because the long-term costs of inaction far exceed the short-term costs of change."

**Placement:** The thesis typically appears at the end of your introduction, after you have provided context and captured the reader's attention.`,
    },
    {
      id: 'engelsk-vg1-6-2-ex-1',
      type: 'example',
      content: `**Example Introduction with Hook and Thesis:**

**Topic: Technology in Education**

"When students in a rural village in Kenya can access the same lectures as students at Harvard, something revolutionary has happened. Technology has transformed education from a privilege of geography and wealth into a possibility for anyone with an internet connection. However, this digital revolution comes with significant risks. While technology offers unprecedented access to educational resources and personalized learning opportunities, schools must balance these benefits against the dangers of screen addiction, the digital divide, and the loss of human connection in learning. This essay argues that technology should be integrated thoughtfully into education, with strict guidelines to maximize benefits while minimizing harm."

**Analysis of this introduction:**
- **Hook:** Opens with compelling image of global access
- **Context:** Briefly explains the transformation
- **Nuance:** Acknowledges both benefits and risks
- **Thesis:** Clear, specific, debatable claim with direction for the essay`,
    },
    {
      id: 'engelsk-vg1-6-2-ex-1-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-ex-1-task',
        number: '1',
        type: 'classic',
        task: 'Write a thesis statement for each topic. Make sure each thesis is specific, debatable, and supportable.',
        subTasks: [
          { label: 'a', task: 'Topic: School uniforms', solution: 'Example: "School uniforms should be mandatory in public schools because they reduce socioeconomic bullying, improve focus on learning, and create a sense of community, despite concerns about suppressing individual expression."' },
          { label: 'b', task: 'Topic: Homework', solution: 'Example: "While homework can reinforce learning, the excessive amounts assigned in many schools cause stress, reduce family time, and show diminishing returns, suggesting that educators should limit homework to meaningful, purposeful tasks."' },
          { label: 'c', task: 'Topic: Social media age limits', solution: 'Example: "Social media platforms should enforce a minimum age of 16 because developing brains are particularly vulnerable to the addictive design features and social comparison effects documented in recent research."' },
        ],
        hints: ['Avoid vague words like "good" or "bad" - be specific', 'Include a "because" clause to indicate your reasoning', 'Consider acknowledging the opposing view'],
        solution: 'Strong thesis statements are specific, debatable, and indicate the direction of the argument.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-2-ex-2-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-ex-2-task',
        number: '2',
        type: 'classic',
        task: 'Evaluate these thesis statements. Identify what makes each weak or strong, then improve the weak ones.',
        subTasks: [
          { label: 'a', task: '"Pollution is harmful to the environment."', solution: 'Weak - states an obvious fact that no one would dispute. Improved: "Urban areas should implement congestion pricing for vehicles because automobile emissions are the primary cause of air pollution in cities, and economic incentives are proven to change behavior more effectively than awareness campaigns."' },
          { label: 'b', task: '"Although video games are often criticized for promoting violence, research suggests that strategic games can improve problem-solving skills and should be incorporated into educational settings with appropriate supervision."', solution: 'Strong - specific, debatable, acknowledges opposing view, indicates direction of argument.' },
        ],
        hints: ['Test each thesis: Could someone reasonably disagree?', 'Does it offer a specific claim, not just a fact?'],
        solution: 'The best thesis statements take a clear position on a debatable issue while acknowledging complexity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-2-def-2',
      type: 'definition',
      title: 'Body Paragraphs: The PEEL Structure',
      content: `**PEEL** is a proven method for structuring body paragraphs in argumentative writing:

**P - Point (Topic Sentence):**
The first sentence states the main idea of the paragraph. It should clearly relate to your thesis and tell the reader what this paragraph will prove.

**E - Evidence:**
Provide specific support for your point:
- Statistics and data from reliable sources
- Expert quotes and research findings
- Concrete examples and case studies
- Historical evidence or precedents
Always cite your sources!

**E - Explanation (Analysis):**
This is the most important part! Explain:
- How the evidence supports your point
- Why it matters
- What it means in the context of your argument
Never assume the connection is obvious - spell it out.

**L - Link:**
Connect back to your thesis and/or transition to the next point. This keeps your argument coherent and shows how each paragraph contributes to the whole.

**Common Mistake:** Providing evidence without analysis. Evidence does not speak for itself - you must explain its significance.`,
    },
    {
      id: 'engelsk-vg1-6-2-ex-3-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-ex-3-task',
        number: '3',
        type: 'classic',
        task: 'Write a complete PEEL paragraph on ONE of these topics. Label each section (Point, Evidence, Explanation, Link) clearly.',
        subTasks: [
          { label: 'a', task: 'Option 1: Schools should start later in the morning', solution: 'Paragraph should include: clear topic sentence about sleep/performance, specific evidence from research, detailed analysis of why this matters, link to broader argument about education policy.' },
          { label: 'b', task: 'Option 2: Plastic bags should be banned', solution: 'Paragraph should include: clear topic sentence about environmental harm, specific statistics about plastic pollution, analysis of long-term impact, link to policy recommendations.' },
        ],
        hints: ['The Explanation section should be longer than the Evidence section', 'Use transition words to connect ideas', 'Make sure evidence is specific, not general'],
        solution: 'A strong PEEL paragraph explains how evidence supports the point, not just what the evidence is.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-2-ex-4-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-ex-4-task',
        number: '4',
        type: 'classic',
        task: 'Addressing Counter-Arguments: For each thesis statement, identify the strongest counter-argument and write a concession-rebuttal response.',
        subTasks: [
          { label: 'a', task: 'Thesis: "Zoos should be abolished because keeping wild animals in captivity is inherently cruel."', solution: 'Counter: Zoos contribute to conservation and education. Concession-Rebuttal: "While it is true that some zoos participate in conservation breeding programs, these efforts affect only a tiny fraction of species, and the educational value of seeing stressed animals in artificial environments is questionable compared to nature documentaries and virtual experiences."' },
          { label: 'b', task: 'Thesis: "University education should be free for all students."', solution: 'Counter: Taxpayers should not pay for individual career advancement. Concession-Rebuttal: "Critics argue that higher education primarily benefits the individual and therefore should be privately funded. However, society benefits enormously from an educated population through increased innovation, higher tax revenues, and lower social costs, making public investment in education economically rational."' },
        ],
        hints: ['Use phrases like "While it is true that..." or "Critics argue that..." followed by "However..." or "Nevertheless..."', 'Acknowledge the strongest version of the opposing argument'],
        solution: 'Addressing counter-arguments strengthens your essay by showing you have considered multiple perspectives.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-2-summary',
      type: 'text',
      content: `## Summary: Argumentative Writing

**Key Elements of Effective Arguments:**

**1. Strong Thesis Statement:**
- Specific, debatable, and supportable
- Placed at the end of the introduction
- Guides the entire essay

**2. PEEL Body Paragraphs:**
- Point: Clear topic sentence
- Evidence: Specific, cited support
- Explanation: Analysis of significance (the most important part!)
- Link: Connection to thesis and transition

**3. Counter-Arguments:**
- Acknowledge opposing views
- Concede valid points
- Rebut with stronger reasoning

**4. Effective Introduction:**
- Hook the reader
- Provide context
- Build to your thesis

**5. Strong Conclusion:**
- Restate thesis in new words
- Synthesize main points
- Broader implications or call to action

**Remember:** Argumentation is not about "winning" - it is about thinking carefully, engaging with evidence, and communicating clearly. The best arguments acknowledge complexity while still taking a clear position.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-6-2-ex-5-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-ex-5-task',
        number: '5',
        type: 'classic',
        task: 'Plan an argumentative essay on a topic of your choice. Create an outline including:\n- Hook idea\n- Background context (2-3 sentences)\n- Thesis statement\n- Three body paragraph topic sentences\n- One counter-argument and your rebuttal\n- Conclusion approach',
        hints: ['Choose a topic you care about but can argue rationally', 'Make sure your three body paragraphs each address a different aspect of your thesis', 'Consider what evidence you would need to research'],
        solution: 'A detailed outline is essential for writing a coherent argumentative essay. The thesis should be reflected in each body paragraph topic sentence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-2-ex-6-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-ex-6-task',
        number: '6',
        type: 'classic',
        task: 'Write a complete argumentative essay (500-700 words) on ONE of these topics:\na) Should voting be mandatory?\nb) Should junk food be banned in schools?\nc) Should students be allowed to grade their teachers?\n\nInclude: introduction with hook and thesis, at least two PEEL body paragraphs, a counter-argument paragraph, and a conclusion.',
        hints: ['Start with your outline', 'Use specific evidence where possible', 'Make sure each paragraph connects to your thesis', 'Proofread for formal register'],
        solution: 'A complete argumentative essay demonstrates mastery of thesis construction, PEEL paragraphs, counter-argument handling, and coherent structure.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_6_3: TextbookChapter = {
  id: 'engelsk-vg1-6-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.3',
  title: 'Analytical and Reflective Writing',
  description: 'Develop skills for analytical and reflective text types.',
  estimatedMinutes: 55,
  competenceGoals: ['skrive ulike tekster som beskriver, diskuterer, begrunner og reflekterer'],
  content: [
    {
      id: 'engelsk-vg1-6-3-intro',
      type: 'text',
      content: `## Analysis and Reflection: Two Essential Skills

Analytical and reflective writing are two distinct but equally important skills in academic contexts. While they serve different purposes, both require deep thinking and clear communication.

**Analytical writing** examines something external - a text, event, or phenomenon - and breaks it down to understand how it works. The focus is on the object of analysis, and the tone is objective and evidence-based.

**Reflective writing** looks inward at your own experiences, thoughts, and learning processes. It asks you to consider what happened, how you felt, and what you learned.

In this chapter, you will learn frameworks for both types of writing, giving you the tools to analyze texts effectively and reflect meaningfully on your experiences.`,
    },
    {
      id: 'engelsk-vg1-6-3-def-1',
      type: 'definition',
      title: 'Analytical Writing: Breaking Things Down',
      content: `**What is Analysis?**
Analysis means breaking something into parts and examining how those parts work together. Good analysis goes beyond description ("what happens") to interpretation ("what it means").

**Key Principles:**
- **Be specific:** Use concrete examples and direct quotes
- **Be interpretive:** Explain significance, not just facts
- **Be structured:** Organize around clear points
- **Be evidence-based:** Support every claim

**Analysis vs. Summary:**
Summary tells WHAT happens; analysis explains WHY it matters and HOW it works.

**Summary:** "The speaker describes a walk through the woods."
**Analysis:** "The solitary walk symbolizes a journey into the unconscious, with the 'two roads' representing conflicting choices that define human existence."

**Key Verbs for Analysis:**
Analyze, examine, demonstrate, reveal, suggest, convey, emphasize, highlight, undermine, reinforce, symbolize`,
    },
    {
      id: 'engelsk-vg1-6-3-ex-1',
      type: 'example',
      content: `**Example: Literary Analysis Paragraph**

"While Frost's 'The Road Not Taken' is often interpreted as celebrating individualism, a closer reading reveals ambivalence about choice. The speaker admits the paths 'had worn them really about the same,' yet predicts he will claim to have taken 'the one less traveled by.' This contradiction exposes the human tendency to construct narratives of uniqueness after the fact. Frost's use of the future tense - 'I shall be telling this with a sigh' - suggests the speaker knows he will mythologize this moment."

**Notice:**
- Direct quotes integrated smoothly
- Interpretation beyond surface meaning
- Analytical verbs: "reveals," "exposes," "suggests"`,
    },
    {
      id: 'engelsk-vg1-6-3-ex-1-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-ex-1-task',
        number: '1',
        type: 'classic',
        task: 'Transform these summary statements into analytical statements:',
        subTasks: [
          { label: 'a', task: '"In the story, the main character dies at the end."', solution: '"The protagonist\'s death functions not as tragedy but liberation, suggesting death is preferable to the spiritual death of conformity."' },
          { label: 'b', task: '"The author uses dark imagery."', solution: '"The pervasive darkness imagery reinforces thematic concern with moral ambiguity, suggesting clear ethical distinctions are impossible."' },
        ],
        hints: ['Analysis answers "so what?" and "how does this work?"', 'Use verbs like "suggests," "reveals," "reinforces"'],
        solution: 'Strong analysis interprets significance rather than describing content.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-3-ex-2-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-ex-2-task',
        number: '2',
        type: 'classic',
        task: 'Write an analytical paragraph (150-200 words) about a text you have studied. Include a clear analytical point, at least one quote, and explanation of significance.',
        hints: ['Avoid plot summary', 'Use present tense', 'Integrate quotes smoothly'],
        solution: 'A strong analytical paragraph demonstrates close reading and interpretation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-3-def-2',
      type: 'definition',
      title: 'Reflective Writing: The Gibbs Cycle',
      content: `**What is Reflective Writing?**
Reflective writing examines your own experiences and learning. It uses first person ("I") and requires critical thinking about what happened and what it means.

**The Gibbs Reflective Cycle (1988):**

**1. Description:** What happened? (Factual account)
**2. Feelings:** What were you thinking and feeling?
**3. Evaluation:** What was good and bad?
**4. Analysis:** Why did things happen this way?
**5. Conclusion:** What else could you have done?
**6. Action Plan:** What will you do next time?

**Key Principle:** Good reflection moves from description to analysis to action. Simply describing what happened is not reflection.

**Reflective Phrases:**
- "This experience taught me..."
- "I realize now that..."
- "Looking back, I would..."
- "In the future, I will..."`,
    },
    {
      id: 'engelsk-vg1-6-3-ex-3-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-ex-3-task',
        number: '3',
        type: 'classic',
        task: 'Using the Gibbs Cycle, write a reflective paragraph about a challenging learning experience. Address at least four of the six stages.',
        hints: ['Be specific about what happened', 'Be honest about feelings', 'Focus more on analysis than description'],
        solution: 'Strong reflection demonstrates self-awareness and ability to learn from experience.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-3-ex-4-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-ex-4-task',
        number: '4',
        type: 'classic',
        task: 'Evaluate these reflective statements. Which shows deeper reflection?',
        subTasks: [
          { label: 'a', task: '"The project was difficult because my partners did not work."', solution: 'Surface-level - places blame externally. Better: "I realized my frustration may have prevented me from communicating expectations clearly."' },
          { label: 'b', task: '"This taught me I need to plan better. Next time, I will make a schedule."', solution: 'Good - moves from experience to lesson to action plan.' },
        ],
        hints: ['Deeper reflection shows self-awareness and takes responsibility'],
        solution: 'The best reflection shows honest self-examination and concrete plans.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-3-summary',
      type: 'text',
      content: `## Summary: Analytical and Reflective Writing

**Analytical Writing:**
- Examines external objects (texts, events)
- Objective, evidence-based
- Goes beyond summary to interpretation
- Key verbs: analyze, suggest, reveal, demonstrate

**Reflective Writing:**
- Examines internal experiences
- Personal, honest, first-person
- Follows Gibbs Cycle framework
- Moves from description to analysis to action

Both require critical thinking and depth - analysis digs beneath texts, reflection digs beneath experience.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-6-3-ex-5-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-ex-5-task',
        number: '5',
        type: 'classic',
        task: 'Choose a text you have studied. Write:\na) An analytical paragraph examining one aspect\nb) A reflective paragraph about what you learned from studying it',
        hints: ['Analytical = objective, text-focused', 'Reflective = personal, learning-focused'],
        solution: 'This demonstrates ability to shift between analytical and reflective modes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-3-ex-6-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-ex-6-task',
        number: '6',
        type: 'classic',
        task: 'Write a 300-400 word semester reflection on your development as a writer, using all six stages of the Gibbs Cycle.',
        hints: ['Be specific with examples', 'Be honest about challenges', 'Set realistic goals'],
        solution: 'A strong reflection shows self-awareness, evaluation, and clear growth goals.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_6_4: TextbookChapter = {
  id: 'engelsk-vg1-6-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.4',
  title: 'Academic Writing and Essays',
  description: 'Master academic writing conventions and essay structure.',
  estimatedMinutes: 60,
  competenceGoals: ['skrive ulike formelle tekster med struktur og sammenheng'],
  content: [
    {
      id: 'engelsk-vg1-6-4-intro',
      type: 'text',
      content: `## Academic Writing Essentials

Academic writing is a specialized form of communication used in educational and scholarly contexts. It follows specific conventions that distinguish it from other types of writing. Whether you are writing essays, research papers, or reports, the principles of academic writing remain consistent.

Understanding academic writing is not just about following rules - it is about joining a conversation. When you write academically, you participate in a dialogue with other thinkers, building on their ideas and contributing your own insights. This requires precision, clarity, and intellectual honesty.

In this chapter, you will learn the key characteristics of academic writing, how to structure essays effectively, how to integrate and cite sources properly, and how to develop your academic voice while maintaining the objectivity that academic contexts require.`,
    },
    {
      id: 'engelsk-vg1-6-4-def-1',
      type: 'definition',
      title: 'Characteristics of Academic Writing',
      content: `**Formal Register:**
- Avoid contractions, slang, and casual expressions
- Use precise vocabulary and technical terms
- Maintain professional tone throughout

**Objective Tone:**
- Present evidence rather than opinions
- Use hedging language ("suggests," "may indicate")
- Avoid emotional or biased language

**Evidence-Based:**
- Support all claims with evidence
- Cite sources for facts and ideas from others
- Distinguish between your ideas and others' ideas

**Clear Structure:**
- Introduction with thesis statement
- Organized body paragraphs
- Logical flow between sections
- Conclusion that synthesizes main points

**Academic Conventions:**
- Third person preferred (some disciplines allow first person)
- Present tense for general truths, past for specific studies
- Formal transitional phrases`,
    },
    {
      id: 'engelsk-vg1-6-4-ex-1',
      type: 'example',
      content: `**Academic vs. Non-Academic Writing:**

**Non-Academic:**
"Social media is totally messing up teenagers. Everyone knows it's bad for them, and parents really need to do something about it."

**Academic:**
"Research suggests that excessive social media use may have adverse effects on adolescent mental health (Smith, 2022). While the relationship between social media and psychological well-being is complex, several studies indicate that users who spend more than three hours daily on platforms such as Instagram report higher levels of anxiety (Jones et al., 2021). These findings support the argument that parents and educators should implement reasonable usage guidelines."

**Key Differences:**
- Hedging language ("suggests," "may have")
- Citations for claims
- Specific details instead of generalizations
- Formal vocabulary
- Objective presentation`,
    },
    {
      id: 'engelsk-vg1-6-4-ex-1-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-ex-1-task',
        number: '1',
        type: 'classic',
        task: 'Rewrite these informal sentences in academic style:',
        subTasks: [
          { label: 'a', task: '"Climate change is a huge problem and we need to fix it now."', solution: '"Climate change represents a significant challenge that requires immediate attention from policymakers and individuals alike (IPCC, 2023)."' },
          { label: 'b', task: '"Kids who read more do better in school - it\'s obvious."', solution: '"Research consistently demonstrates a positive correlation between reading frequency in childhood and academic achievement (Brown, 2020)."' },
        ],
        hints: ['Remove informal language', 'Add hedging where appropriate', 'Consider what evidence would support the claim'],
        solution: 'Academic writing uses formal vocabulary, objective tone, and evidence-based claims.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-4-ex-2-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-ex-2-task',
        number: '2',
        type: 'classic',
        task: 'Identify what makes each sentence inappropriate for academic writing and suggest an improvement:',
        subTasks: [
          { label: 'a', task: '"Shakespeare was an amazing writer and everyone loves his plays."', solution: 'Problem: Subjective ("amazing"), overgeneralization ("everyone"). Better: "Shakespeare\'s works have remained influential for over four centuries, suggesting their enduring relevance to audiences across cultures."' },
          { label: 'b', task: '"The experiment didn\'t work because we messed up."', solution: 'Problem: Contractions, vague, informal. Better: "The experiment produced inconclusive results due to methodological errors in the data collection process."' },
        ],
        hints: ['Look for contractions, vague language, unsupported claims, and informal expressions'],
        solution: 'Academic writing requires precision, formality, and evidence-based claims.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-4-def-2',
      type: 'definition',
      title: 'Citation and Referencing',
      content: `**Why Cite Sources?**
- Give credit to original authors
- Avoid plagiarism (presenting others' ideas as your own)
- Allow readers to verify and explore your sources
- Demonstrate the breadth and quality of your research
- Join the academic conversation

**In-Text Citation (APA Style):**
- Author's name and year: (Smith, 2022)
- With quote: "Direct quote" (Smith, 2022, p. 45)
- Author as subject: Smith (2022) argues that...
- Multiple authors: (Smith & Jones, 2022) or (Smith et al., 2022)

**Reference List Entry Examples:**
Book: Smith, J. (2022). *Book title*. Publisher.
Article: Jones, A. (2021). Article title. *Journal Name*, 15(2), 23-45.
Website: World Health Organization. (2023). *Report title*. https://url.com

**Paraphrasing vs. Quoting:**
- **Paraphrase:** Restate ideas in your own words (still cite!)
- **Quote:** Use exact words with quotation marks (cite with page)
- Rule: Paraphrase more than you quote - it shows understanding`,
    },
    {
      id: 'engelsk-vg1-6-4-ex-3-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-ex-3-task',
        number: '3',
        type: 'classic',
        task: 'Practice citing. Given this source information, write:\na) A sentence with a direct quote\nb) A paraphrase of the same information\n\nSource: "Students who participate in regular physical activity show improved concentration and academic performance." From "Exercise and Learning" by Maria Garcia, published 2023, page 78.',
        hints: ['For direct quotes, use quotation marks and include page number', 'For paraphrase, change words and structure but keep meaning'],
        solution: 'a) Garcia (2023) reports that "students who participate in regular physical activity show improved concentration and academic performance" (p. 78).\nb) Research indicates that regular exercise is associated with better focus and higher grades among students (Garcia, 2023).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-4-ex-4-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-ex-4-task',
        number: '4',
        type: 'classic',
        task: 'Plagiarism Check: Identify which of these would be considered plagiarism and explain why.',
        subTasks: [
          { label: 'a', task: 'Original: "Social media has fundamentally altered how teenagers communicate." Your text: "Social media has fundamentally changed how teens communicate."', solution: 'Plagiarism - too close to original without quotation marks or citation. The changes are superficial.' },
          { label: 'b', task: 'Original: "Social media has fundamentally altered how teenagers communicate." Your text: "According to Smith (2022), "social media has fundamentally altered how teenagers communicate" (p. 12).', solution: 'Not plagiarism - properly quoted and cited.' },
          { label: 'c', task: 'Original: "Social media has fundamentally altered how teenagers communicate." Your text: "The ways in which young people interact have been transformed by digital platforms (Smith, 2022)."', solution: 'Not plagiarism - properly paraphrased (significantly different wording) and cited.' },
        ],
        hints: ['Plagiarism includes copying without attribution AND paraphrasing too closely'],
        solution: 'Proper citation requires either exact quotes with quotation marks OR significant rewording with citations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-4-summary',
      type: 'text',
      content: `## Summary: Academic Writing

**Key Characteristics:**
- Formal register (no contractions or slang)
- Objective tone with hedging language
- Evidence-based claims with citations
- Clear, logical structure

**Citation Essentials:**
- Always cite ideas from others
- Paraphrase more than quote
- Include both in-text citations and reference list
- Follow a consistent style (APA, MLA, etc.)

**Avoiding Plagiarism:**
- Direct quotes need quotation marks + citation
- Paraphrases must significantly change wording + citation
- Even common knowledge from a specific source needs citation

**Remember:** Academic writing is about joining a conversation with other scholars. You show respect for their ideas by citing them properly, and you contribute your own analysis and insights.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-6-4-ex-5-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-ex-5-task',
        number: '5',
        type: 'classic',
        task: 'Find an article on a topic that interests you. Practice academic writing skills by:\na) Writing a paraphrase of one key point (with citation)\nb) Including one direct quote (with citation)\nc) Writing your own analysis of the source in academic style',
        hints: ['Choose a reliable source', 'Practice integrating quotes smoothly', 'Maintain academic register throughout'],
        solution: 'This exercise combines citation skills with academic writing conventions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-4-ex-6-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-ex-6-task',
        number: '6',
        type: 'classic',
        task: 'Write an academic paragraph (200-250 words) on ONE of these topics:\na) The impact of technology on education\nb) The importance of learning a second language\nc) The effects of social media on society\n\nInclude at least one properly formatted citation (you may create a fictional but realistic source).',
        hints: ['Use formal register throughout', 'Include hedging language', 'Structure with topic sentence, evidence, analysis', 'End with a linking sentence'],
        solution: 'A strong academic paragraph demonstrates formal register, proper citation, and evidence-based argumentation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_6_5: TextbookChapter = {
  id: 'engelsk-vg1-6-5',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.5',
  title: 'Creative Writing',
  description: 'Explore creative writing techniques and genres.',
  estimatedMinutes: 55,
  competenceGoals: ['skrive ulike tekster tilpasset formål, mottaker og situasjon'],
  content: [
    {
      id: 'engelsk-vg1-6-5-intro',
      type: 'text',
      content: `## The Creative Writer's Craft

Creative writing is the art of using language to tell stories, express ideas, and evoke emotions. Unlike academic or professional writing, which follows strict conventions, creative writing gives you the freedom to experiment with style, structure, and voice. However, this freedom comes with responsibility - good creative writing still requires craft, technique, and discipline.

Whether you are writing a short story, a personal essay, a poem, or a script, certain principles will help you engage your readers and communicate your vision effectively. The best creative writers are also avid readers who learn from others while developing their own unique voice.

In this chapter, you will learn fundamental techniques that all creative writers use: showing rather than telling, creating vivid descriptions through sensory details, writing authentic dialogue, and structuring narratives effectively. These tools will help you bring your ideas to life on the page.`,
    },
    {
      id: 'engelsk-vg1-6-5-def-1',
      type: 'definition',
      title: 'Show, Don\'t Tell: The Golden Rule',
      content: `**The Most Important Principle:**
Instead of telling readers what to feel or think, show them through concrete details, actions, and dialogue. Let readers experience the story rather than being told about it.

**Telling:** "She was angry."
**Showing:** "She slammed the door, her knuckles white around the handle. 'Fine,' she said through clenched teeth, not looking back."

**Why Showing Works Better:**
- Engages readers' imagination
- Creates emotional connection
- Respects readers' intelligence
- Makes writing more vivid and memorable

**Techniques for Showing:**
- **Actions and body language:** Characters reveal themselves through what they do
- **Dialogue:** What characters say (and don't say) reveals personality
- **Sensory details:** Specific sights, sounds, smells, textures, tastes
- **Internal thoughts:** Direct access to character's mind
- **Reactions:** How other characters respond

**When Telling is Acceptable:**
- Transitioning between scenes ("Three weeks later...")
- Conveying factual information quickly
- When the detail is minor and does not need emphasis`,
    },
    {
      id: 'engelsk-vg1-6-5-ex-1',
      type: 'example',
      content: `**Show vs. Tell Examples:**

**Emotion: Fear**
Telling: "John was terrified of the dark basement."
Showing: "John's hand trembled on the basement door handle. He counted to three, then ten, then twenty. The darkness below seemed to breathe, waiting. He forced himself down one step, then another, his flashlight carving a weak circle in the blackness."

**Character: Kindness**
Telling: "Mrs. Chen was a kind neighbor."
Showing: "Mrs. Chen appeared at our door every Sunday with containers of homemade soup, always asking about school before she left. When my mom got sick, I found our lawn mysteriously mowed every week."

**Setting: Poverty**
Telling: "The family was poor."
Showing: "Dinner was whatever was left - tonight, ketchup sandwiches. Emma counted the coins in the jar again, already knowing they would not cover the electricity bill. She turned off another light."

**Notice how showing:**
- Uses specific, concrete details
- Engages multiple senses
- Implies rather than states
- Creates pictures in the reader's mind`,
    },
    {
      id: 'engelsk-vg1-6-5-ex-1-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-ex-1-task',
        number: '1',
        type: 'classic',
        task: 'Rewrite each "telling" sentence to "show" the emotion or situation:',
        subTasks: [
          { label: 'a', task: 'He was nervous about the interview.', solution: 'He straightened his tie for the fifth time, rehearsing answers under his breath. The second hand seemed to crawl. His palms left damp marks on the armrests.' },
          { label: 'b', task: 'The house was abandoned and creepy.', solution: 'Shutters hung at angles, and windows stared like hollow eyes. The porch boards groaned under each step. A swing creaked in the windless air.' },
          { label: 'c', task: 'The meal was delicious.', solution: 'She closed her eyes with the first bite, letting the flavors dissolve on her tongue. The bread was still warm, the butter melting into golden pools. She reached for seconds before finishing her first.' },
        ],
        hints: ['Use actions and body language', 'Include sensory details', 'Let readers draw their own conclusions'],
        solution: 'Showing through action and sensory detail creates immersive, engaging writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-5-ex-2-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-ex-2-task',
        number: '2',
        type: 'classic',
        task: 'Write a paragraph (100-150 words) that shows a character\'s personality WITHOUT stating it directly. Choose ONE:\na) An impatient person waiting in line\nb) A curious child exploring a new place\nc) A tired worker at the end of a long shift',
        hints: ['Focus on actions, gestures, and small behaviors', 'Use specific details', 'Let the reader figure out the trait'],
        solution: 'Strong character writing reveals personality through behavior rather than labels.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-5-def-2',
      type: 'definition',
      title: 'Vivid Descriptions: Engaging the Senses',
      content: `**Use Specific Details:**
Vague: "The room was messy."
Specific: "Clothes draped over every surface, pizza boxes stacked by the door, and a half-empty coffee mug grew mold on the windowsill."

**Engage All Five Senses:**
- **Sight:** Colors, shapes, light, movement
- **Sound:** Dialogue, environment, silence
- **Smell:** Powerful memory trigger, often overlooked
- **Touch:** Textures, temperature, physical sensations
- **Taste:** Food, but also emotions (bitter disappointment, sweet victory)

**Use Strong, Precise Verbs:**
Weak: "She walked quickly across the room."
Strong: "She strode / hurried / dashed / crept / stumbled across the room."

Each verb creates a different picture and implies different emotions.

**Avoid Cliches:**
Instead of: "It was raining cats and dogs"
Try: "Rain hammered the windows so hard we had to shout to hear each other"

**The Rule of Three:**
When describing, often three details are enough - not so few as to be vague, not so many as to overwhelm.`,
    },
    {
      id: 'engelsk-vg1-6-5-ex-3-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-ex-3-task',
        number: '3',
        type: 'classic',
        task: 'Write a descriptive paragraph (100-150 words) about ONE of these settings, engaging at least THREE senses:',
        subTasks: [
          { label: 'a', task: 'A busy train station at rush hour', solution: 'Should include sounds (announcements, footsteps, chatter), sights (crowds, departure boards), and possibly smells (coffee, perfume, exhaust).' },
          { label: 'b', task: 'A peaceful forest in autumn', solution: 'Should include sights (colors, light through leaves), sounds (rustling, birds), touch (cool air, crunchy leaves), and possibly smell (earth, decay, pine).' },
        ],
        hints: ['Move beyond just visual description', 'Use specific, concrete details', 'Choose strong verbs'],
        solution: 'Multi-sensory description immerses readers in the scene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-5-ex-4-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-ex-4-task',
        number: '4',
        type: 'classic',
        task: 'Replace these weak verbs with stronger, more precise alternatives:',
        subTasks: [
          { label: 'a', task: '"He walked into the room."', solution: 'Strode, stumbled, crept, burst, slipped, shuffled, marched, sauntered - each implies different mood/character.' },
          { label: 'b', task: '"She said angrily."', solution: 'Snapped, growled, hissed, spat, shouted, barked - or better, show the anger through action and dialogue without the adverb.' },
          { label: 'c', task: '"The wind was blowing."', solution: 'Howled, whispered, roared, gusted, moaned, shrieked - choose based on the mood you want to create.' },
        ],
        hints: ['Strong verbs do the work of verb + adverb', 'Consider what mood or image you want'],
        solution: 'Precise verb choice eliminates the need for adverbs and creates more vivid writing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-5-summary',
      type: 'text',
      content: `## Summary: Creative Writing Techniques

**Show, Don't Tell:**
- Reveal through action, dialogue, and detail
- Let readers experience rather than be told
- Trust readers to understand implications

**Vivid Description:**
- Use specific, concrete details
- Engage multiple senses
- Choose strong, precise verbs
- Avoid cliches

**Character Development:**
- Reveal personality through behavior
- Use meaningful dialogue
- Show internal conflict through action

**Good Creative Writing:**
- Starts with a hook that draws readers in
- Creates pictures in the reader's mind
- Evokes emotion through detail, not statement
- Respects the reader's intelligence

**Practice Tip:** Read widely in genres you want to write. Study how published authors use these techniques. Write regularly, even if just for practice.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-6-5-ex-5-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-ex-5-task',
        number: '5',
        type: 'classic',
        task: 'Write a short scene (150-200 words) between two characters where the dialogue reveals:\n- Who the characters are (without stating it)\n- What they want (without stating it)\n- The tension between them (without stating it)\n\nUse dialogue tags sparingly and include action beats.',
        hints: ['What characters don\'t say is as important as what they say', 'Action beats ("She looked away") can replace dialogue tags', 'Each character should have a distinct voice'],
        solution: 'Strong dialogue reveals character and advances plot while sounding natural.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-6-5-ex-6-task',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-ex-6-task',
        number: '6',
        type: 'classic',
        task: 'Write a short creative piece (250-350 words) using ONE of these prompts:\na) "The last message on the phone changed everything."\nb) "The stranger on the train knew my name."\nc) "The door that should have been locked was open."\n\nApply the techniques from this chapter: show don\'t tell, sensory details, strong verbs, and meaningful dialogue or action.',
        hints: ['Start in medias res (in the middle of action)', 'Create atmosphere through detail', 'End with something that resonates', 'Read your work aloud to check flow'],
        solution: 'Good creative writing combines technique with imagination to create an engaging reader experience.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SECTION 7: English as a World Language
// ============================================================================

export const CHAPTER_ENGELSK_VG1_7_1: TextbookChapter = {
  id: 'engelsk-vg1-7-1',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.1',
  title: 'The History of English',
  description: 'Explore the development of English from Old English to today.',
  estimatedMinutes: 60,
  competenceGoals: ['beskrive sentrale trekk ved framveksten av engelsk som verdensspråk'],
  content: [
    {
      id: 'engelsk-vg1-7-1-intro',
      type: 'text',
      content: `## The Story of English

English is one of the most remarkable success stories in the history of human language. From humble beginnings as a collection of Germanic dialects spoken by a few thousand invaders on a small island, it has evolved into the world's most widely used language. Today, English connects more than 1.5 billion speakers across every continent, serving as the primary language of international business, science, diplomacy, and popular culture.

The journey of English spans approximately 1,500 years and includes dramatic transformations. The language of Beowulf is virtually unrecognizable to modern readers, yet it is the direct ancestor of the English you are reading now. Understanding this history helps us appreciate why English has such unusual spelling, why we have so many synonyms from different origins, and how language continues to evolve in our own time.

**Timeline Overview:**
- 450-1100: Old English (Anglo-Saxon Period)
- 1100-1500: Middle English (Norman Influence)
- 1500-1700: Early Modern English (Renaissance and Standardization)
- 1700-present: Modern English (Global Expansion)`,
    },
    {
      id: 'engelsk-vg1-7-1-def-1',
      type: 'definition',
      title: 'Old English (450-1100): The Germanic Foundation',
      content: `**Historical Background:**
Around 450 AD, Germanic tribes known as the Angles, Saxons, and Jutes began migrating to Britain from what is now Denmark and northern Germany. They displaced the native Celtic-speaking Britons, establishing kingdoms and bringing their languages, which merged into what we call Old English or Anglo-Saxon.

**Linguistic Characteristics:**
- **Highly inflected:** Word endings indicated grammatical function (subject, object, possession)
- **Four grammatical cases:** Nominative, accusative, genitive, dative
- **Grammatical gender:** Nouns were masculine, feminine, or neuter
- **Complex verb conjugations:** Many strong verb forms
- **Written first in runes,** then in the Latin alphabet after Christianization

**Sample Old English (Beowulf opening):**
"Hwæt! We Gardena in geardagum, þeodcyninga, þrym gefrunon."
Translation: "Listen! We have heard of the might of the kings of the Spear-Danes in days of old."

**Key Influences on Old English:**
- **Celtic languages:** Primarily place names (Thames, London, Dover)
- **Latin:** Religious and scholarly terms via Christianity (church, school, master)
- **Old Norse:** Extensive influence from Viking invasions (793-1066), giving us everyday words like sky, egg, they, want, and window`,
    },
    {
      id: 'engelsk-vg1-7-1-ex-1',
      type: 'example',
      title: 'Old Norse Words in Everyday English',
      content: `The Vikings contributed over 2,000 words to English, many extremely common:

**Body and Actions:**
- skin, skull, leg
- take, give, get, hit, call, want
- die, raise, scream

**Everyday Objects:**
- window (wind + eye), knife, egg, cake
- sky, husband, sister

**Grammar Words:**
- they, them, their (replacing Old English pronouns)
- both, same, though, until

**Why so influential?** Unlike French later, Norse and Old English were similar enough that people from both groups could partially understand each other. The languages mixed in daily conversation, especially in the Danelaw (Viking-controlled areas of England).

**Place Names:** Many English towns ending in -by (village), -thorpe (farm), or -thwaite (clearing) have Norse origins: Derby, Grimsby, Scunthorpe, Braithwaite.`,
    },
    {
      id: 'engelsk-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-2',
        number: '1',
        type: 'classic',
        task: 'Identify whether each word has Old Norse or Old English origins based on the patterns described above.',
        subTasks: [
          { label: 'a', task: 'sky / heaven', solution: 'sky (Old Norse), heaven (Old English) - both survived with different meanings' },
          { label: 'b', task: 'shirt / skirt', solution: 'shirt (Old English), skirt (Old Norse) - same origin word, different sounds from different dialects' },
          { label: 'c', task: 'get / obtain', solution: 'get (Old Norse), obtain (actually French, not OE) - but the pattern shows get is from Norse' },
        ],
        hints: ['Words with sk- sounds often come from Old Norse', 'Old English words often have sh- instead of sk-'],
        solution: 'The sk- vs sh- pattern is a reliable indicator: Old Norse kept the hard /sk/ sound while Old English changed it to /sh/.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-3',
        number: '2',
        type: 'classic',
        task: 'The Old English word "hus" became "house." Based on this pattern, what do you think these Old English words became in Modern English?',
        subTasks: [
          { label: 'a', task: 'boc', solution: 'book' },
          { label: 'b', task: 'scip', solution: 'ship' },
          { label: 'c', task: 'fisc', solution: 'fish' },
          { label: 'd', task: 'stan', solution: 'stone' },
        ],
        hints: ['Many basic, everyday English words have Old English origins', 'Spelling changed but meanings often stayed similar'],
        solution: 'Core vocabulary for home, nature, and daily life typically comes from Old English rather than French or Latin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-def-2',
      type: 'definition',
      title: 'Middle English (1100-1500): French Transforms English',
      content: `**The Norman Conquest (1066):**
When William of Normandy conquered England, French became the language of the ruling class, government, and law. For about 300 years, English was considered a language of peasants while the elite spoke French.

**Massive Changes to English:**
- **Vocabulary explosion:** Approximately 10,000 French words entered English
- **Grammar simplification:** Complex inflections disappeared; word order became more important
- **Spelling conventions:** French scribes introduced new spelling patterns

**French Words by Domain:**
- **Government:** parliament, court, judge, jury, prison, crime
- **Military:** army, battle, captain, soldier, enemy, peace
- **Food (for the table):** beef, pork, mutton, poultry, sauce, roast
- **Art & Culture:** beauty, art, music, poetry, romance, literature
- **Religion:** religion, prayer, miracle, saint, mercy

**The Class Divide in Vocabulary:**
A striking pattern emerged: English-speaking peasants raised animals, but French-speaking nobles ate them:
- cow (OE) → beef (Fr)
- pig (OE) → pork (Fr)
- sheep (OE) → mutton (Fr)
- calf (OE) → veal (Fr)

**Sample Middle English (Chaucer, 1390s):**
"Whan that Aprille with his shoures soote, The droghte of March hath perced to the roote"
Translation: "When April with its sweet showers has pierced the drought of March to the root"`,
    },
    {
      id: 'engelsk-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-4',
        number: '3',
        type: 'classic',
        task: 'These word pairs show French (Norman) vs Anglo-Saxon origins. Identify which is which and explain how social class affected this pattern.',
        subTasks: [
          { label: 'a', task: 'begin / commence', solution: 'begin (Anglo-Saxon - common, everyday), commence (French - formal, elevated)' },
          { label: 'b', task: 'freedom / liberty', solution: 'freedom (Anglo-Saxon), liberty (French) - Anglo-Saxon often feels more concrete' },
          { label: 'c', task: 'ask / question (verb)', solution: 'ask (Anglo-Saxon), question (French) - the French version sounds more formal' },
          { label: 'd', task: 'kingly / royal', solution: 'kingly (Anglo-Saxon - from "king"), royal (French - from "roi")' },
        ],
        hints: ['Anglo-Saxon words tend to be shorter and feel more everyday', 'French-origin words often sound more formal or sophisticated'],
        solution: 'This pattern reflects the social hierarchy: Anglo-Saxon words for common concepts, French words for power, law, and culture.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-5',
        number: '4',
        type: 'classic',
        task: 'English often has multiple words for similar concepts because of its multiple language influences. Match the Anglo-Saxon, French, and Latin synonyms.',
        subTasks: [
          { label: 'a', task: 'Match: help, aid, assist', solution: 'help (Anglo-Saxon), aid (French), assist (Latin) - all mean roughly the same but with increasing formality' },
          { label: 'b', task: 'Match: rise, mount, ascend', solution: 'rise (Anglo-Saxon), mount (French), ascend (Latin)' },
          { label: 'c', task: 'Match: ask, question, interrogate', solution: 'ask (Anglo-Saxon), question (French), interrogate (Latin)' },
        ],
        hints: ['Latin words are often the most formal/technical', 'This pattern of synonyms from three sources is unique to English'],
        solution: 'This "three-level" synonym system gives English unusual richness but also complexity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-summary',
      type: 'text',
      content: `## Chapter Summary

**Key Points:**
- English originated from Germanic tribes who invaded Britain around 450 AD
- Old English was highly inflected and looks very different from modern English
- Viking invasions contributed thousands of everyday words and even grammar words
- The Norman Conquest (1066) brought French influence to government, law, food, and culture
- Middle English simplified grammar while massively expanding vocabulary
- English uniquely has synonyms from multiple language sources, creating richness and nuance

**The Pattern to Remember:**
- **Anglo-Saxon words:** Basic, everyday, emotional, concrete (heart, love, home, child, eat, drink)
- **French words:** Formal, sophisticated, government, cuisine, art (government, cuisine, elegant)
- **Latin words:** Technical, scientific, academic, legal (interrogate, demonstrate, constitute)

**Why This Matters:**
Understanding word origins helps you choose the right register in your own writing and appreciate why English spelling is so irregular - words kept their original spellings even as pronunciation changed.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-6',
        number: '5',
        type: 'classic',
        task: 'Research Project: Choose ONE major event in English language history (e.g., Viking invasions, Norman Conquest, printing press, Great Vowel Shift) and create a mini-presentation (5 minutes) explaining how it changed English.',
        subTasks: [
          { label: 'a', task: 'What happened and when?', solution: 'Provide historical context and dates' },
          { label: 'b', task: 'What specific changes did it cause to English?', solution: 'Give concrete examples of vocabulary, grammar, or spelling changes' },
          { label: 'c', task: 'What evidence of this change can we still see in modern English?', solution: 'Provide modern examples that trace back to this event' },
        ],
        hints: ['Use reliable sources and cite them', 'Include specific word examples', 'Consider using a timeline or visual aid'],
        solution: 'Understanding specific historical events helps explain the quirks of modern English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-ex-7',
        number: '6',
        type: 'classic',
        task: 'Essay: "English is a Germanic language with a French vocabulary and Latin influences." Do you agree with this statement? Write a short essay (300-400 words) arguing your position with specific examples from this chapter.',
        hints: ['Consider grammar structure (Germanic) vs vocabulary (French/Latin)', 'Use specific word examples', 'Include a clear thesis statement', 'Organize your argument logically'],
        solution: 'A strong essay will acknowledge the complexity: English grammar is Germanic but vocabulary is majority French/Latin, making it a unique hybrid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_7_2: TextbookChapter = {
  id: 'engelsk-vg1-7-2',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.2',
  title: 'English as a Global Language',
  description: 'Understand why English became the world\'s lingua franca.',
  estimatedMinutes: 60,
  competenceGoals: ['beskrive sentrale trekk ved framveksten av engelsk som verdensspråk'],
  content: [
    {
      id: 'engelsk-vg1-7-2-intro',
      type: 'text',
      content: `## The Rise of Global English

No language in history has achieved the global reach that English has today. Approximately 1.5 billion people use English regularly, making it by far the world's most widely spoken language when we count both native and non-native speakers. What is remarkable is that native speakers are now a minority - roughly 400 million compared to over a billion who speak English as a second or foreign language.

The spread of English is not a natural phenomenon but the result of specific historical, political, and economic forces. Two waves of expansion - British colonialism from the 17th to 20th centuries, followed by American global dominance in the 20th and 21st centuries - created the conditions for English to become the world's default language for international communication.

Today, English serves as the working language of international organizations, academic research, global business, aviation, maritime communication, and the internet. Understanding how and why English achieved this status helps us think critically about questions of power, identity, and the future of global communication.`,
    },
    {
      id: 'engelsk-vg1-7-2-def-1',
      type: 'definition',
      title: 'The British Empire: English Goes Global',
      content: `**The Colonial Period (1600s-1900s):**
At its height in 1920, the British Empire controlled roughly 25% of the world's land and population. Wherever British rule went, English followed as the language of administration, education, and power.

**Key Territories and Their Legacy:**
- **North America:** English became dominant despite French and Spanish competition
- **India & South Asia:** English became the language of government and higher education
- **Africa:** Nigeria, Kenya, South Africa, and many others adopted English
- **Southeast Asia:** Singapore, Malaysia, Hong Kong
- **Caribbean:** Jamaica, Trinidad, Barbados
- **Pacific:** Australia, New Zealand, numerous islands

**How English Spread:**
- Colonial administration required English
- Education systems used English
- Legal and business systems operated in English
- Christian missionaries taught in English
- Local elites adopted English for advancement

**The Pattern:**
English was imposed from above but often adopted from below by those seeking education, employment, and power. This created lasting English-speaking institutions that survived decolonization.`,
    },
    {
      id: 'engelsk-vg1-7-2-ex-1',
      type: 'example',
      title: 'American English Goes Global',
      content: `**The American Century (1900s-present):**
After World War II, the United States emerged as the world's dominant economic, military, and cultural power. This shifted the center of gravity of English from Britain to America.

**How American Influence Spread English:**

**Economic Power:**
- The US dollar became the global reserve currency
- American companies expanded worldwide (Coca-Cola, McDonald's, Apple, Google)
- Business people worldwide learned English to work with American firms

**Military and Political Influence:**
- US military bases in dozens of countries
- American role in international organizations (UN, NATO, World Bank)
- Cold War competition spread American influence

**Technology and Innovation:**
- Silicon Valley dominance: the internet is primarily in English
- American tech companies set global standards
- Scientific research increasingly published in English

**Popular Culture:**
- Hollywood films dominate global cinema
- American music (jazz, rock, hip-hop) spread worldwide
- Television shows, streaming services, social media
- American English became "cool" and modern

**The Result:** By 2000, American English had become the default model for English language learning in many countries, especially in business contexts.`,
    },
    {
      id: 'engelsk-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-ex-2',
        number: '1',
        type: 'classic',
        task: 'Analyze the spread of English in your own life. Answer these questions:',
        subTasks: [
          { label: 'a', task: 'Where does English appear in your daily life? (products, entertainment, technology, etc.)', solution: 'Answers will vary but might include: phone interfaces, social media, music, movies, games, product labels, etc.' },
          { label: 'b', task: 'Which variety of English (British or American) do you encounter more often? Why do you think that is?', solution: 'Most students will say American due to internet, films, and music' },
          { label: 'c', task: 'Are there areas where Norwegian is being replaced by English terms? Give examples.', solution: 'Technology, gaming, social media, business jargon - "cool," "online," "streaming," etc.' },
        ],
        hints: ['Think about your phone, computer, entertainment, and daily activities', 'Consider advertising and brand names around you'],
        solution: 'Personal reflection helps us see how global forces affect local language use.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-ex-3',
        number: '2',
        type: 'classic',
        task: 'Map the British Empire: Research and create a timeline or map showing key British colonial territories and when they gained independence. Note which countries retained English as an official language.',
        hints: ['Start with major regions: North America, India, Africa, Caribbean, Pacific', 'Consider why some countries kept English and others did not'],
        solution: 'This visual exercise helps understand the scope and legacy of British colonialism on global English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-2-def-2',
      type: 'definition',
      title: 'Kachru\'s Three Circles Model',
      content: `**Understanding Global English Distribution (Braj Kachru, 1985):**

**Inner Circle (~400 million speakers):**
Countries where English is the primary native language:
- United Kingdom, United States, Canada, Australia, New Zealand, Ireland
- These countries set traditional "standards" for English
- Native speakers grow up speaking English at home

**Outer Circle (~400 million speakers):**
Former colonies where English is an official or important second language:
- India, Pakistan, Bangladesh, Nigeria, Ghana, Kenya, Singapore, Philippines, Malaysia, South Africa
- English used in government, education, media, business
- Distinct local varieties have developed (Indian English, Nigerian English, etc.)
- Many speakers grow up bilingual or multilingual

**Expanding Circle (~700+ million speakers):**
Countries where English is learned as a foreign language:
- China, Japan, South Korea, Germany, France, Norway, Brazil, Russia
- English used for international communication
- No colonial history with English
- Speakers learn English through education, not community

**Key Implications:**
- Native speakers are now a minority of total English users
- The majority of English conversations worldwide are between non-native speakers
- Who has the authority to define "correct" English?
- Traditional inner-circle "ownership" of English is challenged`,
    },
    {
      id: 'engelsk-vg1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-ex-4',
        number: '3',
        type: 'classic',
        task: 'Classify these countries into the correct circle (Inner, Outer, or Expanding):',
        subTasks: [
          { label: 'a', task: 'Japan', solution: 'Expanding Circle - English learned as foreign language, no colonial history' },
          { label: 'b', task: 'Singapore', solution: 'Outer Circle - former British colony, English is one of four official languages' },
          { label: 'c', task: 'Australia', solution: 'Inner Circle - English is the primary native language' },
          { label: 'd', task: 'India', solution: 'Outer Circle - former British colony, English is an associate official language' },
          { label: 'e', task: 'Norway', solution: 'Expanding Circle - English learned as foreign language' },
        ],
        hints: ['Consider colonial history', 'Think about whether English is native, official, or foreign'],
        solution: 'The circles help us understand different relationships to English around the world.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-ex-5',
        number: '4',
        type: 'classic',
        task: 'Critical Thinking: The Three Circles model has been criticized. Discuss:',
        subTasks: [
          { label: 'a', task: 'Why might placing "native speakers" at the center be problematic?', solution: 'Implies native speakers are more authoritative; ignores bilingual/multilingual competence; assumes one "standard"' },
          { label: 'b', task: 'Where do immigrants and diaspora communities fit?', solution: 'Ambiguous - a person in London might be fluent in English but have Nigerian parents and use Nigerian English features' },
          { label: 'c', task: 'Is the model still useful despite its limitations?', solution: 'Discussion - yes for understanding colonial history; less useful for understanding individual speakers' },
        ],
        hints: ['Think about power relationships and who decides what is "correct"', 'Consider mixed-heritage or multilingual individuals'],
        solution: 'Critical analysis of linguistic models helps us think about language and power.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-2-summary',
      type: 'text',
      content: `## Chapter Summary

**Key Points:**
- English spread globally through two main waves: British colonialism (1600s-1900s) and American global influence (1900s-present)
- The British Empire established English in administration, education, and law across multiple continents
- American economic, military, technological, and cultural power made English the default language of globalization
- Kachru's Three Circles model distinguishes between Inner (native), Outer (post-colonial), and Expanding (foreign language) contexts
- Native speakers are now a minority of all English users worldwide

**Critical Questions:**
- Is the global dominance of English positive or problematic?
- Should English be considered "owned" by native speakers or by all its users?
- What responsibilities come with speaking a global language?
- How does English affect other languages and cultures?

**Looking Forward:**
As English continues to spread, it is also changing. Non-native speakers are shaping the language, creating new varieties, and challenging traditional notions of "correct" English. The future of English is being written by its users around the world.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-ex-6',
        number: '5',
        type: 'classic',
        task: 'Debate: "The spread of English is beneficial for the world." Prepare arguments for BOTH sides of this debate.',
        subTasks: [
          { label: 'a', task: 'Arguments FOR English as a global language (at least 3 points)', solution: 'International communication, access to science and education, economic opportunities, travel ease, internet access' },
          { label: 'b', task: 'Arguments AGAINST or concerns about English dominance (at least 3 points)', solution: 'Language death, cultural imperialism, unfair advantage for native speakers, loss of local identity, pressure on smaller languages' },
          { label: 'c', task: 'Your own position: What do you think?', solution: 'Personal response with reasoning based on the arguments above' },
        ],
        hints: ['Consider both practical benefits and cultural concerns', 'Think about perspectives from different circles', 'Use specific examples'],
        solution: 'A balanced debate considers multiple perspectives and acknowledges complexity.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-ex-7',
        number: '6',
        type: 'classic',
        task: 'Essay: "English in Norway - Help or Threat?" Write a short essay (300-400 words) analyzing the role of English in Norwegian society. Consider both benefits and potential concerns for Norwegian language and culture.',
        hints: ['Think about domains where English is used in Norway', 'Consider code-switching and loanwords', 'Reflect on your own language use', 'Consider what might be lost or gained'],
        solution: 'A strong essay will balance appreciation for international communication with awareness of potential cultural and linguistic impact.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_7_3: TextbookChapter = {
  id: 'engelsk-vg1-7-3',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.3',
  title: 'World Englishes and Varieties',
  description: 'Explore different varieties of English around the world.',
  estimatedMinutes: 60,
  competenceGoals: ['beskrive sentrale trekk ved framveksten av engelsk som verdensspråk'],
  content: [
    {
      id: 'engelsk-vg1-7-3-intro',
      type: 'text',
      content: `## The Many Englishes of the World

One of the most fascinating aspects of English as a global language is its incredible diversity. There is no single "correct" English - instead, there are many Englishes, each shaped by the cultures, languages, and histories of the communities that speak them. From the streets of Mumbai to the farms of Texas, from Singapore hawker centers to London pubs, English takes on different forms while remaining recognizably English.

Linguists now speak of "World Englishes" (plural) to recognize this diversity. Each variety has its own systematic patterns of vocabulary, pronunciation, and grammar. These are not "mistakes" or "corruptions" of some imagined "pure" English - they are legitimate language systems that serve their communities effectively.

Understanding World Englishes is essential for effective global communication. You will encounter speakers from many different English backgrounds, and recognizing the validity of different varieties helps you communicate respectfully and effectively. It also raises interesting questions: Who decides what is "correct" English? Can a non-native speaker's English be as valid as a native speaker's?`,
    },
    {
      id: 'engelsk-vg1-7-3-def-1',
      type: 'definition',
      title: 'British vs American English: The Major Divide',
      content: `**Historical Background:**
American English began diverging from British English in the 17th century as colonists brought their regional dialects to North America. Isolation, contact with other languages, and deliberate choices (like Noah Webster's spelling reforms) created distinct varieties.

**Spelling Differences:**
| British | American | Origin |
|---------|----------|--------|
| colour, honour | color, honor | Webster simplified French -our |
| centre, metre | center, meter | Webster changed French -re |
| realise, organise | realize, organize | -ize reflects Greek origins |
| travelled, cancelled | traveled, canceled | American drops double consonants |
| defence, licence | defense, license | Different Latin traditions |

**Vocabulary Differences:**
| British | American | Category |
|---------|----------|----------|
| flat | apartment | Housing |
| lift | elevator | Buildings |
| boot | trunk | Cars |
| bonnet | hood | Cars |
| petrol | gas/gasoline | Transportation |
| motorway | highway/freeway | Transportation |
| pavement | sidewalk | Streets |
| queue | line | Daily life |
| biscuit | cookie | Food |
| chips | fries | Food |
| crisps | chips | Food |
| aubergine | eggplant | Food |
| holiday | vacation | Time off |
| mobile (phone) | cell (phone) | Technology |

**Grammar Differences:**
| British | American |
|---------|----------|
| Have you got a pen? | Do you have a pen? |
| I've just eaten. | I just ate. |
| At the weekend | On the weekend |
| In hospital | In the hospital |
| Monday to Friday | Monday through Friday |`,
    },
    {
      id: 'engelsk-vg1-7-3-ex-1',
      type: 'example',
      title: 'Pronunciation: Two Systems',
      content: `**Key Pronunciation Differences:**

**The "r" Sound:**
- American English is "rhotic" - the /r/ is pronounced in all positions (car, bird, mother)
- British RP is "non-rhotic" - the /r/ is dropped after vowels (ca', bi'd, motha')
- This is one of the most noticeable differences

**Vowel Sounds:**
- "bath, dance, can't" - British uses long /a:/, American uses short /ae/
- "hot, stop, body" - British uses rounded vowel, American uses unrounded
- "tomato" - British /te-MAH-toe/, American /te-MAY-toe/

**Stress Patterns:**
| Word | British | American |
|------|---------|----------|
| advertisement | adVERtisement | ADvertisement |
| laboratory | laBORatory | LABoratory |
| controversy | conTROVersy | CONtroversy |
| schedule | SHEDule | SKEDule |

**Letter Pronunciation:**
- "z" - British "zed", American "zee"
- "h" - British often "haitch", American always "aitch"

**Remember:** Neither is more "correct" - they are equally valid systems.`,
    },
    {
      id: 'engelsk-vg1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-ex-2',
        number: '1',
        type: 'classic',
        task: '"Translate" these sentences between British and American English. Pay attention to vocabulary, spelling, and grammar.',
        subTasks: [
          { label: 'a', task: 'British: "I\'ll take the lift to the first floor to get to my flat."', solution: 'American: "I\'ll take the elevator to the second floor to get to my apartment." (Note: British ground floor = American first floor)' },
          { label: 'b', task: 'American: "I put my bags in the trunk, got some gas, and drove on the highway to the city center."', solution: 'British: "I put my bags in the boot, got some petrol, and drove on the motorway to the city centre."' },
          { label: 'c', task: 'British: "I\'ve just organised my holiday. We\'re going to queue for the theatre."', solution: 'American: "I just organized my vacation. We\'re going to stand in line for the theater."' },
        ],
        hints: ['Watch for floor numbering differences', 'Consider both vocabulary and spelling', 'Look for grammar differences too'],
        solution: 'Understanding these systematic differences helps you adapt your English for different contexts.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-ex-3',
        number: '2',
        type: 'classic',
        task: 'Which variety (British or American) do these spellings and words come from?',
        subTasks: [
          { label: 'a', task: 'theater, favorite, realize', solution: 'American (British: theatre, favourite, realise)' },
          { label: 'b', task: 'lift, lorry, fortnight', solution: 'British (American: elevator, truck, two weeks)' },
          { label: 'c', task: 'fall (season), gotten, sidewalk', solution: 'American (British: autumn, got, pavement)' },
          { label: 'd', task: 'whilst, amongst, towards', solution: 'British (more common; Americans typically use while, among, toward)' },
        ],
        hints: ['Think about spelling patterns: -er vs -re, -or vs -our', 'Consider which words you hear in American media'],
        solution: 'Recognizing patterns helps you identify and adapt to different varieties.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-3-def-2',
      type: 'definition',
      title: 'Outer Circle Englishes: Post-Colonial Varieties',
      content: `**Indian English (400+ million speakers):**
India has more English speakers than any other country except possibly the United States. Indian English has distinctive features:

**Vocabulary:**
- "prepone" (opposite of postpone) - now gaining global use
- "would-be" (fiance/fiancee)
- "do the needful" (take necessary action)
- "What is your good name?" (polite inquiry)
- "cousin brother/sister" (specifying gender)

**Grammar:**
- Present continuous for states: "I am knowing him"
- Different prepositions: "discuss about," "cope up with"
- Tag questions: "You are coming, isn't it?"
- Plural forms: "furnitures," "informations"

**Nigerian English:**
With over 200 million people, Nigeria is Africa's most populous nation and has one of the largest English-speaking populations.

**Features:**
- Influenced by Pidgin and local languages
- "Chop" (eat), "dash" (give as gift/bribe)
- "Senior/Junior" for age-based respect
- "I wan go" (I want to go) from Pidgin influence

**Singaporean English (Singlish):**
A distinctive variety influenced by Chinese, Malay, and Tamil.

**Characteristic particles:**
- "lah" (emphasis/softening): "No problem lah!"
- "meh" (skepticism): "Can meh?"
- "lor" (resignation): "Like that lor."

**Distinctive expressions:**
- "Can!" (yes, it's possible)
- "Cannot!" (it's not possible/not allowed)
- "Where got?" (that's not true!)
- "Got or not?" (is there any?)

**Important:** These are not "incorrect" English - they are systematic varieties with their own rules.`,
    },
    {
      id: 'engelsk-vg1-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-ex-4',
        number: '3',
        type: 'classic',
        task: 'Match these World English expressions with their "Standard English" equivalents:',
        subTasks: [
          { label: 'a', task: 'Indian English: "Please do the needful"', solution: '"Please take the necessary action" or "Please handle this"' },
          { label: 'b', task: 'Singlish: "Can or not?"', solution: '"Is it possible?" or "Can you do it?"' },
          { label: 'c', task: 'Indian English: "I am having two brothers"', solution: '"I have two brothers"' },
          { label: 'd', task: 'Nigerian English: "I will flash you"', solution: '"I will give you a missed call" (to signal you should call back)' },
        ],
        hints: ['These expressions are systematic in their varieties', 'They often follow patterns from local languages'],
        solution: 'Understanding these expressions helps communication with speakers from different backgrounds.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-ex-5',
        number: '4',
        type: 'classic',
        task: 'Research task: Choose one variety of English (Australian, South African, Caribbean, Irish, Scottish, etc.) and find out:',
        subTasks: [
          { label: 'a', task: 'What historical factors shaped this variety?', solution: 'Answers vary by variety - consider colonial history, immigration, language contact' },
          { label: 'b', task: 'List 5 distinctive words or expressions from this variety.', solution: 'Answers vary - Australian: "arvo" (afternoon), "brekkie" (breakfast); Irish: "craic" (fun), "grand" (okay)' },
          { label: 'c', task: 'What pronunciation features distinguish this variety?', solution: 'Answers vary - consider vowel sounds, intonation patterns, rhotic/non-rhotic' },
        ],
        hints: ['Use reliable linguistic sources', 'Listen to audio examples if possible', 'Consider both vocabulary and pronunciation'],
        solution: 'Each variety reflects unique historical and cultural influences.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-3-summary',
      type: 'text',
      content: `## Chapter Summary

**Key Points:**
- There is no single "correct" English - World Englishes are all legitimate varieties
- British and American English differ in spelling, vocabulary, grammar, and pronunciation
- Post-colonial Englishes (Indian, Nigerian, Singaporean, etc.) have developed systematic features of their own
- These features often reflect influence from local languages and cultures
- All varieties serve their communities effectively

**The Attitude to Take:**
- Be curious about different varieties rather than judgmental
- Recognize that native-speaker English is not automatically "better"
- Adapt your own English when needed for clarity
- Appreciate the richness that diversity brings to the language

**Practical Applications:**
- When writing, be consistent within one variety (don't mix British and American spelling)
- When speaking internationally, be prepared to adjust for different audiences
- Don't assume your variety is the "default" - all speakers make adaptations
- When you don't understand something, ask politely - it may be a valid variety feature`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-ex-6',
        number: '5',
        type: 'classic',
        task: 'Discussion: "All varieties of English are equally valid." Do you agree? Consider these scenarios:',
        subTasks: [
          { label: 'a', task: 'A Nigerian using "I will flash you" in an international business meeting - is this appropriate?', solution: 'Depends on context and audience; speakers adjust for different contexts' },
          { label: 'b', task: 'Should international exams (IELTS, Cambridge) accept answers in any variety of English?', solution: 'Complex issue - balance between recognizing validity and practical standardization' },
          { label: 'c', task: 'Should Norwegian schools teach British, American, or accept any variety?', solution: 'Discussion question - consider consistency, resources, and real-world use' },
        ],
        hints: ['Consider both idealistic and practical perspectives', 'Think about power and who makes linguistic rules', 'Consider what "appropriate" means in different contexts'],
        solution: 'The tension between variety acceptance and practical standardization is ongoing in global English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-ex-7',
        number: '6',
        type: 'classic',
        task: 'Comparative Essay: Choose TWO varieties of English (e.g., British vs Australian, American vs Indian) and write a comparison (400-500 words) covering vocabulary, pronunciation, and grammar differences. Include specific examples.',
        hints: ['Organize your essay clearly (introduction, vocabulary section, pronunciation section, grammar section, conclusion)', 'Use specific examples throughout', 'Consider why these differences developed', 'Include a reflection on what this teaches us about language'],
        solution: 'A strong comparison uses specific examples and explains the historical/cultural reasons for differences.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_ENGELSK_VG1_7_4: TextbookChapter = {
  id: 'engelsk-vg1-7-4',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.4',
  title: 'English in the Digital Age',
  description: 'Examine how English is used and evolving in digital communication.',
  estimatedMinutes: 60,
  competenceGoals: ['beskrive sentrale trekk ved framveksten av engelsk som verdensspråk'],
  content: [
    {
      id: 'engelsk-vg1-7-4-intro',
      type: 'text',
      content: `## Language in the Digital Era

The internet and digital technology have transformed not only how we communicate but the very nature of English itself. Changes that once took generations now happen in years or even months. New words are coined, spread globally, and either become part of the permanent vocabulary or fade away faster than at any time in history.

Digital communication has created entirely new forms of writing that exist somewhere between speech and formal writing. Text messages, social media posts, online comments, and chat platforms have their own conventions, vocabulary, and even grammar. Understanding these new forms of communication is now as important as understanding traditional writing.

Perhaps most significantly, digital communication has accelerated the position of English as the global lingua franca. The internet was born in English, and although content in other languages has grown enormously, English remains the dominant language of global digital communication, technology, and online culture.`,
    },
    {
      id: 'engelsk-vg1-7-4-def-1',
      type: 'definition',
      title: 'Internet Language: Vocabulary and Conventions',
      content: `**Common Abbreviations and Acronyms:**

**Everyday Use:**
- LOL - laughing out loud (now often used for mild amusement or awkwardness)
- BRB - be right back
- OMG - oh my god
- TBH - to be honest
- IMO/IMHO - in my (humble) opinion
- BTW - by the way
- IDK - I don't know
- ASAP - as soon as possible
- FYI - for your information

**Social Media Specific:**
- TL;DR - too long; didn't read (often followed by a summary)
- ICYMI - in case you missed it
- DM - direct message
- FOMO - fear of missing out
- GOAT - greatest of all time
- IRL - in real life
- AFK - away from keyboard

**Workplace/Professional:**
- EOD - end of day
- WFH - work from home
- OOO - out of office
- TLDR - summary version (now used professionally)

**How Abbreviations Evolve:**
Many abbreviations have moved from text-only use to spoken language. People now say "lol" (rhyming with "doll") or "oh-em-gee" in conversation. Some have even become verbs: "DM me" (send me a direct message).`,
    },
    {
      id: 'engelsk-vg1-7-4-ex-1',
      type: 'example',
      title: 'From Tech to Everyday Language',
      content: `**Words Created by Technology:**

**Verbed Brands:**
- "Google it" (search online) - so common dictionaries now include it
- "Photoshop" (edit images) - used even for other software
- "Zoom" (video call) - especially post-pandemic

**New Words from Tech Culture:**
- Blog (web + log) - appeared 1999
- Selfie - Oxford Word of the Year 2013
- Vlog (video + blog)
- Podcast (iPod + broadcast)
- Webinar (web + seminar)
- Hashtag - once just a symbol, now a cultural phenomenon
- Troll - from folklore to "internet provocateur"
- Viral - from medicine to "spreading rapidly online"
- Ghost - to suddenly cut off contact with someone
- Catfish - to create a fake online identity

**Meaning Shifts:**
- "Friend" - now also a verb ("friend me on Facebook")
- "Like" - now a noun (counting likes)
- "Tweet" - a bird sound became a form of communication
- "Stream" - water became a way to watch media
- "Cloud" - weather became data storage
- "Feed" - food became content delivery

**Notice the pattern:** Technology often repurposes existing words with new meanings, and brand names become common verbs.`,
    },
    {
      id: 'engelsk-vg1-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-ex-2',
        number: '1',
        type: 'classic',
        task: 'Match these internet slang terms with their meanings:',
        subTasks: [
          { label: 'a', task: 'salty', solution: 'bitter or upset about something' },
          { label: 'b', task: 'sus', solution: 'suspicious (popularized by Among Us game)' },
          { label: 'c', task: 'ghosting', solution: 'suddenly cutting off all communication with someone' },
          { label: 'd', task: 'flex', solution: 'to show off (often used ironically)' },
          { label: 'e', task: 'lowkey/highkey', solution: 'somewhat/definitely (used to modify intensity)' },
        ],
        hints: ['These terms often originated in specific online communities before spreading', 'Many come from gaming, Black culture, or social media'],
        solution: 'Internet slang evolves quickly and often has specific origins in subcultures before going mainstream.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-ex-3',
        number: '2',
        type: 'classic',
        task: 'Identify 5 words or expressions that have gained new meanings in digital contexts. For each, explain the original meaning and the new digital meaning.',
        hints: ['Think about words like "cloud," "stream," "viral," "troll," "feed," etc.', 'Consider how technology has changed the meaning of everyday words'],
        solution: 'Example: "Stream" originally meant a small river; now it also means watching media content in real-time without downloading. This semantic expansion shows how technology reshapes language.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-4-def-2',
      type: 'definition',
      title: 'Digital Communication Features',
      content: `**Emoji and Visual Communication:**
Emoji have become a sophisticated communication system, not just decoration.

**Functions of Emoji:**
- Conveying tone (a joke vs. a serious statement)
- Replacing words entirely
- Softening messages
- Adding emotional nuance
- Cultural signaling and in-group identity

**Emoji Complexity:**
- Meanings vary by culture and generation
- Same emoji can mean different things (the eggplant, the skull)
- "Crying-laughing" emoji was most used, now younger users prefer "skull" for laughter
- Combinations create new meanings

**Hashtags and @Mentions:**
- #hashtag - categorizes content, creates communities, enables movements (#MeToo, #BlackLivesMatter)
- @mention - directly addressing someone, bringing them into conversation
- These create new grammar: "That's so hashtag relatable"

**Memes as Language:**
Memes are now a legitimate form of communication:
- Reference shared cultural knowledge
- Create in-group identity
- Communicate complex ideas efficiently
- Evolve rapidly with new formats

**Internet-Specific Punctuation:**
- ALL CAPS = shouting
- no caps = casual, chill, aesthetic
- Multiple question marks??? = confusion or emphasis
- Trailing off... = uncertainty or awkwardness
- The period. = serious. or. angry.
- "Haha" vs "hahaha" vs "lol" = different levels of amusement`,
    },
    {
      id: 'engelsk-vg1-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-ex-4',
        number: '3',
        type: 'classic',
        task: 'Analyze how punctuation and capitalization change meaning in digital communication. What does each version imply?',
        subTasks: [
          { label: 'a', task: '"ok" vs "OK" vs "ok." vs "OK!"', solution: 'ok = casual acceptance; OK = neutral/standard; ok. = annoyed or passive-aggressive; OK! = enthusiastic' },
          { label: 'b', task: '"thanks" vs "Thanks" vs "thanks!" vs "THANKS"', solution: 'thanks = casual; Thanks = standard polite; thanks! = warm/enthusiastic; THANKS = could be sarcastic or very emphatic' },
          { label: 'c', task: '"fine" vs "fine." vs "FINE" vs "fine..."', solution: 'fine = neutral; fine. = annoyed/passive-aggressive; FINE = upset/emphatic; fine... = reluctant or trailing off' },
        ],
        hints: ['In digital communication, punctuation carries emotional meaning', 'A period at the end of a short message often signals seriousness or irritation'],
        solution: 'Digital communication has developed sophisticated systems for conveying tone through typography.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-ex-5',
        number: '4',
        type: 'classic',
        task: 'Collect and analyze 5 memes you have encountered recently. For each, explain:',
        subTasks: [
          { label: 'a', task: 'What format does the meme use?', solution: 'Describe the image/video/text structure' },
          { label: 'b', task: 'What cultural knowledge do you need to understand it?', solution: 'Identify references, in-jokes, or context required' },
          { label: 'c', task: 'How does it communicate its message?', solution: 'Explain irony, juxtaposition, or other techniques used' },
        ],
        hints: ['Memes often rely on shared knowledge of earlier memes or cultural references', 'Consider why the format/template became popular'],
        solution: 'Meme literacy requires understanding of internet culture, templates, and the ability to recognize irony and layered meanings.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-4-summary',
      type: 'text',
      content: `## Chapter Summary

**Key Points:**
- The internet has accelerated language change dramatically
- New words are created (selfie, hashtag), existing words gain new meanings (viral, cloud, stream), and brand names become verbs (google, zoom)
- Abbreviations (LOL, TBH, DM) have become part of everyday language, even spoken
- Punctuation and capitalization carry emotional meaning in digital communication
- Emoji and memes are legitimate forms of communication with their own conventions
- Digital communication exists on a spectrum between writing and speech

**Is Internet Language "Ruining" English?**
No. Language has always changed, and what we see online is not degradation but adaptation. Digital communication:
- Creates new expressive possibilities
- Follows systematic rules (even if different from formal writing)
- Demonstrates creativity and linguistic skill
- Will likely contribute lasting vocabulary to English

**Critical Awareness:**
While embracing digital language, users should:
- Understand code-switching between contexts (formal vs. informal)
- Recognize that digital conventions change rapidly
- Be aware that not everyone shares the same digital vocabulary
- Consider accessibility and clarity for diverse audiences

**The Future:**
English in the digital age will continue to evolve. The words and conventions that last will be those that fill genuine communicative needs. Some current slang will become permanent vocabulary; other terms will fade as quickly as they appeared.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'engelsk-vg1-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-ex-6',
        number: '5',
        type: 'classic',
        task: 'Debate: "Internet language is ruining English." Prepare arguments for BOTH sides, then give your own opinion with reasons.',
        subTasks: [
          { label: 'a', task: 'Arguments that internet language is harmful (at least 3 points)', solution: 'Potential arguments: reduces formal writing skills, creates confusion between formal/informal contexts, excludes those unfamiliar with conventions, may reduce vocabulary richness' },
          { label: 'b', task: 'Arguments that internet language is a positive development (at least 3 points)', solution: 'Potential arguments: demonstrates linguistic creativity, adds expressive possibilities, follows systematic rules, represents natural language evolution, enables global communication' },
          { label: 'c', task: 'Your position with supporting reasons', solution: 'Personal opinion should be supported with logical reasoning and examples' },
        ],
        hints: ['Consider historical examples of language change', 'Think about who benefits and who might be excluded', 'Consider the difference between addition and replacement'],
        solution: 'A nuanced position recognizes both the creative potential of digital language and the importance of context-appropriate communication.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-vg1-7-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-ex-7',
        number: '6',
        type: 'classic',
        task: 'Project: Create a "Dictionary of Digital English" with at least 15 entries. Each entry should include: the term, its definition, an example of usage, its origin (if known), and your assessment of whether it will become permanent English vocabulary.',
        hints: ['Include a mix of abbreviations, new words, repurposed words, and expressions', 'Consider terms from different platforms and contexts', 'Research origins where possible', 'Be honest about which terms may be temporary fads'],
        solution: 'A good dictionary will show awareness of the variety of digital language, provide clear examples, and demonstrate critical thinking about language permanence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Export all chapters from this file
export const ENGELSK_VG1_CHAPTERS_DEL3 = [
  CHAPTER_ENGELSK_VG1_5_1,
  CHAPTER_ENGELSK_VG1_5_2,
  CHAPTER_ENGELSK_VG1_5_3,
  CHAPTER_ENGELSK_VG1_5_4,
  CHAPTER_ENGELSK_VG1_6_1,
  CHAPTER_ENGELSK_VG1_6_2,
  CHAPTER_ENGELSK_VG1_6_3,
  CHAPTER_ENGELSK_VG1_6_4,
  CHAPTER_ENGELSK_VG1_6_5,
  CHAPTER_ENGELSK_VG1_7_1,
  CHAPTER_ENGELSK_VG1_7_2,
  CHAPTER_ENGELSK_VG1_7_3,
  CHAPTER_ENGELSK_VG1_7_4,
];
