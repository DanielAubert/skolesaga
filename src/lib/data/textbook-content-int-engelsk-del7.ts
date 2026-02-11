/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SECTION 7: Academic English
// ============================================================================

// ============================================================================
// CHAPTER 7.1: Academic Writing
// ============================================================================

export const CHAPTER_INT_ENGELSK_7_1: TextbookChapter = {
  id: 'int-engelsk-7-1',
  courseId: 'int-engelsk',
  chapterNumber: '7.1',
  title: 'Academic Writing',
  description: 'Learn the conventions of academic writing, including essay structure, thesis statements, paragraph development, and the appropriate use of formal register.',
  estimatedMinutes: 22,
  competenceGoals: [
    'write well-structured texts with clear argumentation and precise language',
    'use knowledge of text structure and language features to produce academic texts in English',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-7-1-intro',
      type: 'text',
      content: `## Writing for an Academic Audience

Academic writing is a distinct form of communication used in universities, research institutions, and scholarly publications worldwide. Unlike casual writing or creative prose, academic writing follows strict conventions designed to ensure clarity, precision, and intellectual rigor.

Whether you are writing a high school essay, a university application, or a research paper, mastering the fundamentals of academic writing will serve you well. The skills you develop here -- structuring arguments, supporting claims with evidence, and communicating complex ideas clearly -- are transferable to virtually every professional field.

**Learning Goals for This Chapter:**
- Understand the key features that distinguish academic writing from other styles
- Construct effective thesis statements that guide an entire essay
- Develop well-structured paragraphs using the PEEL method
- Recognize the differences between formal and informal register
- Apply academic writing conventions to your own work`,
    },
    // --- DEFINITION 1: Academic Register ---
    {
      id: 'ie-7-1-def-1',
      type: 'definition',
      title: 'Academic Register',
      content: `**Register** refers to the level of formality in language. Academic register is the formal style of writing expected in scholarly and educational contexts.

**Key features of academic register:**

| Feature | Informal | Academic |
|---------|----------|----------|
| **Vocabulary** | "kids," "get," "stuff" | "children," "obtain," "material" |
| **Contractions** | "don't," "can't," "it's" | "do not," "cannot," "it is" |
| **Pronouns** | "I think," "you should" | "It can be argued," "one might consider" |
| **Tone** | Conversational, subjective | Objective, measured, evidence-based |
| **Sentence structure** | Short, fragmented | Complex, varied, carefully constructed |
| **Hedging** | "Everyone knows" | "Research suggests," "It appears that" |

**Words to avoid in academic writing:**
- Slang and colloquialisms ("cool," "awesome," "totally")
- Vague language ("things," "stuff," "a lot")
- First person (unless specifically permitted)
- Emotional or biased language ("obviously," "everyone agrees")
- Rhetorical questions (in most contexts)

**Academic transition words and phrases:**
- *Addition:* Furthermore, moreover, in addition, additionally
- *Contrast:* However, nevertheless, on the other hand, conversely
- *Cause/effect:* Consequently, therefore, as a result, thus
- *Example:* For instance, specifically, to illustrate, notably
- *Conclusion:* In conclusion, ultimately, to summarize, in summary`,
    },
    // --- EXAMPLE 1: Register Comparison ---
    {
      id: 'ie-7-1-example-1',
      type: 'example',
      title: 'Transforming Informal Writing into Academic Register',
      problem: `Rewrite the following informal paragraph in academic register:

"Social media is totally ruining kids these days. Everyone's always on their phones and they can't even talk to people face to face anymore. I think schools should just ban phones because it's obvious that they're bad for learning."`,
      solution: `**Academic version:**

"The proliferation of social media platforms has raised significant concerns regarding the psychological and social development of young people. Research indicates that excessive screen time may negatively impact face-to-face communication skills (Twenge, 2017). Consequently, some educational institutions have implemented policies restricting mobile phone use during school hours, arguing that such devices constitute a distraction from the learning environment. However, the effectiveness of outright bans remains a subject of scholarly debate."

**What changed:**
- "totally ruining kids" became "raised significant concerns regarding the psychological and social development of young people"
- "Everyone's always" became "Research indicates"
- "I think" was replaced with objective phrasing
- "it's obvious" became a hedged claim supported by scholarly reference
- Contractions were removed
- The tone shifted from emotional to analytical`,
    },
    // --- EXERCISES 1 ---
    {
      id: 'ie-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-7-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following sentences is written in appropriate academic register?',
        options: [
          { id: 'a', text: 'Researchers have identified a correlation between sleep deprivation and reduced academic performance.', isCorrect: true },
          { id: 'b', text: 'Everyone knows that not sleeping enough totally wrecks your grades.', isCorrect: false },
          { id: 'c', text: 'I think sleeping is really important because you can\'t do well in school without it.', isCorrect: false },
          { id: 'd', text: 'Sleep is like super important for doing good in school, you know?', isCorrect: false },
        ],
        solution: 'Option A uses objective language ("Researchers have identified"), precise vocabulary ("correlation," "sleep deprivation," "academic performance"), and avoids contractions, slang, and first-person pronouns. The other options use informal language, personal opinion without evidence, or colloquial expressions.',
        hints: ['Look for objective language and evidence-based claims', 'Check for contractions and informal expressions'],
      },
    },
    {
      id: 'ie-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Rewrite the following sentence in formal academic register: "Lots of people think climate change is a big deal, but some guys still don\'t buy it."',
        solution: 'Example: "While the scientific consensus overwhelmingly supports the reality of anthropogenic climate change, a minority of commentators continue to express skepticism regarding its causes and projected impacts." The rewrite should remove colloquialisms ("big deal," "don\'t buy it"), replace vague quantifiers ("lots of") with more precise language, and adopt an objective tone.',
        hints: ['Replace "lots of people" with a more precise phrase', 'Replace "big deal" and "don\'t buy it" with formal alternatives'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: Essay Structure and Thesis ---
    {
      id: 'ie-7-1-def-2',
      type: 'definition',
      title: 'The Five-Paragraph Essay and Thesis Statement',
      content: `**The Five-Paragraph Essay** is the foundational structure of academic writing. While more advanced essays may deviate from this model, it provides an essential framework for organizing arguments.

**Structure:**

**1. Introduction**
- Hook: An engaging opening that captures the reader's attention
- Background: Brief context on the topic
- **Thesis statement:** The central argument of the essay (usually the last sentence of the introduction)

**2. Body Paragraph 1** -- First supporting argument
**3. Body Paragraph 2** -- Second supporting argument
**4. Body Paragraph 3** -- Third supporting argument (or counterargument)

**5. Conclusion**
- Restate thesis (in different words)
- Summarize key arguments
- Broader implication or call to action

---

**The Thesis Statement** is the single most important sentence in an academic essay. It tells the reader exactly what you will argue and how.

**A strong thesis statement:**
- Makes a specific, arguable claim (not a fact)
- Provides a roadmap for the essay
- Is concise (usually one sentence)
- Appears at the end of the introduction

**Weak thesis:** "Social media is interesting."
(Too vague, not arguable)

**Weak thesis:** "This essay will discuss social media."
(Announces the topic but makes no argument)

**Strong thesis:** "While social media platforms offer unprecedented opportunities for global connection, their addictive design features pose a significant threat to adolescent mental health, necessitating stronger regulatory frameworks."
(Specific, arguable, provides a roadmap)`,
    },
    // --- EXAMPLE 2: Thesis Statements ---
    {
      id: 'ie-7-1-example-2',
      type: 'example',
      title: 'Crafting Effective Thesis Statements',
      problem: 'For the topic "The impact of artificial intelligence on employment," write three thesis statements: one weak, one acceptable, and one strong.',
      solution: `**Weak:** "Artificial intelligence is changing the job market."
*Problem:* This is a statement of fact, not an argument. It does not indicate what the essay will prove or which position the writer takes.

**Acceptable:** "Artificial intelligence will eliminate many jobs but also create new ones."
*Analysis:* This makes a claim, but it is vague. Which jobs? What new ones? It lacks specificity and a clear direction.

**Strong:** "Although artificial intelligence will inevitably displace workers in routine-task industries such as manufacturing and data entry, strategic investment in education and retraining programs can ensure that the transition creates more high-skilled employment opportunities than it destroys."
*Why it works:*
- Makes a specific, debatable claim
- Acknowledges complexity (concession with "although")
- Identifies concrete areas (manufacturing, data entry)
- Proposes a position (investment in retraining)
- Provides a clear roadmap for the essay body`,
    },
    // --- DEFINITION 3: PEEL Paragraphs ---
    {
      id: 'ie-7-1-def-3',
      type: 'definition',
      title: 'The PEEL Paragraph Method',
      content: `**PEEL** is a method for writing well-structured body paragraphs in academic essays. Each letter represents a component:

**P -- Point**
State the main idea of the paragraph in a clear topic sentence. This sentence should relate directly to your thesis.

**E -- Evidence**
Provide specific evidence to support your point. This can include:
- Statistics and data
- Quotations from experts or primary sources
- Examples and case studies
- Research findings

**E -- Explanation**
Analyze and explain how your evidence supports your point. Do not assume the reader can see the connection -- make it explicit. This is often the longest and most important part of the paragraph.

**L -- Link**
Connect the paragraph back to the thesis and/or transition to the next paragraph. This creates cohesion throughout the essay.

---

**Example PEEL paragraph:**

**[P]** One significant benefit of bilingual education is its positive impact on cognitive development. **[E]** A longitudinal study by Bialystok et al. (2012) found that bilingual children consistently outperformed monolingual peers on tasks requiring executive function, including attention control and task-switching. **[E]** These findings suggest that the constant mental exercise of managing two language systems strengthens the brain's ability to focus, filter irrelevant information, and adapt to new situations -- skills that extend far beyond language use. **[L]** This cognitive advantage provides a compelling argument for implementing bilingual programs in primary schools, as discussed in the following section.`,
    },
    // --- EXERCISES 2 ---
    {
      id: 'ie-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-7-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'What does the "E" for "Explanation" in the PEEL method require the writer to do?',
        options: [
          { id: 'a', text: 'Analyze how the evidence supports the main point of the paragraph', isCorrect: true },
          { id: 'b', text: 'Provide a second piece of evidence from a different source', isCorrect: false },
          { id: 'c', text: 'Write an emotional appeal to convince the reader', isCorrect: false },
          { id: 'd', text: 'Summarize what other scholars have said about the topic', isCorrect: false },
        ],
        solution: 'The Explanation component requires the writer to analyze and explicitly connect the evidence to the paragraph\'s main point. It is not about adding more evidence, making emotional appeals, or summarizing others. The explanation answers the question: "How does this evidence prove my point?"',
      },
    },
    {
      id: 'ie-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Write a thesis statement and a PEEL paragraph on ONE of the following topics:\n\na) Should English be the mandatory global language of business?\nb) Is social media more harmful or beneficial for democratic participation?\nc) Should university education be free for all citizens?',
        hints: [
          'Start with your thesis statement on a separate line',
          'Clearly label the P, E, E, and L components in your paragraph',
          'Use at least one specific piece of evidence (you may invent a plausible source for practice)',
        ],
        solution: 'A strong response will include: (1) a specific, arguable thesis statement; (2) a topic sentence that clearly relates to the thesis; (3) concrete evidence with a citation; (4) analysis explaining how the evidence supports the point; and (5) a linking sentence connecting back to the thesis or forward to the next argument.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-7-1-summary',
      type: 'text',
      content: `## Chapter Summary: Academic Writing

**Key Takeaways:**

1. **Academic register** is characterized by formal vocabulary, objective tone, complex sentence structures, and the avoidance of contractions, slang, and first-person pronouns (unless specified otherwise).

2. **A strong thesis statement** is specific, arguable, and provides a roadmap for the essay. It typically appears at the end of the introduction.

3. **The five-paragraph essay** (introduction, three body paragraphs, conclusion) provides a reliable framework for organizing academic arguments.

4. **The PEEL method** (Point, Evidence, Explanation, Link) ensures that each body paragraph is focused, well-supported, and clearly connected to the overall argument.

5. **Hedging language** ("Research suggests," "It appears that") is preferred over absolute claims ("Everyone knows," "It is obvious") in academic writing.

**Common Pitfalls to Avoid:**
- Writing a thesis that is too broad or merely states a fact
- Including evidence without explaining its significance
- Mixing informal language into academic prose
- Forgetting to link paragraphs back to the thesis`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a complete five-paragraph essay (400-600 words) on the following topic: "Should schools prioritize teaching digital literacy over traditional academic subjects?" Include a clear thesis statement and use the PEEL method for your body paragraphs.',
        hints: [
          'Plan your essay before writing: outline your three main arguments first',
          'Your thesis should take a clear position, not just describe both sides',
          'Each body paragraph needs its own piece of evidence',
          'Use academic register throughout',
        ],
        solution: 'A successful essay will: (1) open with an engaging hook and clear thesis; (2) present three distinct, well-supported arguments using PEEL; (3) use appropriate academic register and transition words; (4) conclude by restating the thesis and offering a broader perspective. The essay should maintain a formal tone and avoid first-person pronouns.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-7-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Identify and correct ALL academic register errors in the following paragraph:\n\n"Basically, a ton of studies show that homework is kinda pointless for little kids. Like, this one researcher guy found that it doesn\'t really help them learn better. So I think we should just get rid of it for anyone under 10. It\'s pretty obvious when you think about it."',
        solution: 'Corrected version: "A substantial body of research indicates that homework yields limited academic benefits for primary school students. For instance, Cooper et al. (2006) found no significant correlation between homework completion and academic achievement among children under the age of ten. These findings suggest that educational policymakers should reconsider the role of homework in early childhood education." Errors include: colloquialisms ("basically," "a ton of," "kinda," "little kids," "like," "this one researcher guy"), contractions ("doesn\'t," "it\'s"), first-person opinion ("I think"), vague language ("pointless"), informal intensifiers ("pretty obvious," "just"), and lack of specific citations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7.2: Research Skills and Sources
// ============================================================================

export const CHAPTER_INT_ENGELSK_7_2: TextbookChapter = {
  id: 'int-engelsk-7-2',
  courseId: 'int-engelsk',
  chapterNumber: '7.2',
  title: 'Research Skills and Sources',
  description: 'Develop skills for finding, evaluating, and using sources effectively, including the CRAAP test for assessing reliability and the distinction between primary and secondary sources.',
  estimatedMinutes: 20,
  competenceGoals: [
    'find and use relevant sources critically and responsibly',
    'evaluate the reliability of different types of sources and explain the difference between primary and secondary sources',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-7-2-intro',
      type: 'text',
      content: `## Finding and Evaluating Sources

In the age of information overload, the ability to find reliable sources and evaluate their credibility is one of the most important academic skills you can develop. Every day, millions of articles, blog posts, social media updates, and videos are published online. Some of this content is rigorously researched and peer-reviewed; much of it is not.

As an academic writer, you are expected to support your arguments with credible evidence. This means going beyond a simple Google search and developing a systematic approach to research.

**Learning Goals for This Chapter:**
- Distinguish between primary and secondary sources and know when to use each
- Navigate academic databases and library resources effectively
- Apply the CRAAP test to evaluate source reliability
- Recognize bias, misinformation, and unreliable sources
- Build a research strategy for academic projects`,
    },
    // --- DEFINITION 1: Primary and Secondary Sources ---
    {
      id: 'ie-7-2-def-1',
      type: 'definition',
      title: 'Primary and Secondary Sources',
      content: `Understanding the difference between primary and secondary sources is fundamental to academic research.

**Primary Sources** are original, first-hand accounts or direct evidence. They have not been filtered through interpretation or analysis by another person.

*Examples:*
- Original research articles reporting new findings
- Historical documents (letters, diaries, government records)
- Literary works (novels, poems, plays)
- Interviews, speeches, and autobiographies
- Photographs, artworks, and artifacts
- Raw data and statistics from original studies
- Legal documents (constitutions, laws, court rulings)

**Secondary Sources** analyze, interpret, or comment on primary sources. They provide context, evaluation, or summary of existing information.

*Examples:*
- Textbooks and encyclopedias
- Review articles summarizing multiple studies
- Biographies
- Literary criticism and book reviews
- Documentaries
- Newspaper articles reporting on research
- Academic commentaries and analyses

**When to use each:**
- Use **primary sources** when you want to analyze original evidence directly
- Use **secondary sources** when you need expert analysis, context, or an overview of a field
- The strongest academic writing typically uses **both** types`,
    },
    // --- EXAMPLE 1: Identifying Source Types ---
    {
      id: 'ie-7-2-example-1',
      type: 'example',
      title: 'Identifying Primary and Secondary Sources',
      problem: 'Classify the following sources as primary or secondary, and explain why:\n\n1. A speech by Martin Luther King Jr.\n2. A textbook chapter about the Civil Rights Movement\n3. Survey data collected from 500 Norwegian teenagers about social media use\n4. A newspaper article summarizing the survey findings\n5. George Orwell\'s novel *1984*\n6. A literary analysis essay about *1984*',
      solution: `**1. Martin Luther King Jr.'s speech** -- **Primary source.** It is an original, first-hand document produced by a historical figure. Researchers can analyze the rhetoric, language, and arguments directly.

**2. Textbook chapter about the Civil Rights Movement** -- **Secondary source.** It interprets and summarizes events and primary sources from the period. It provides context and analysis written after the fact.

**3. Survey data from 500 Norwegian teenagers** -- **Primary source.** This is original, raw data collected directly from participants. It has not yet been interpreted by another researcher.

**4. Newspaper article about the survey** -- **Secondary source.** The journalist is interpreting and summarizing the primary data for a general audience. Their selection of which findings to highlight introduces a layer of interpretation.

**5. George Orwell's *1984*** -- **Primary source.** As a literary work, it is the original text to be studied. Literary scholars treat novels, poems, and plays as primary sources.

**6. Literary analysis essay about *1984*** -- **Secondary source.** The essay interprets and analyzes the primary text, offering scholarly commentary on its themes, structure, or historical context.`,
    },
    // --- EXERCISES 1 ---
    {
      id: 'ie-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-7-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'A researcher wants to study how Norwegian newspapers reported on the 2015 refugee crisis. Which of the following would be a PRIMARY source for this study?',
        options: [
          { id: 'a', text: 'Original newspaper articles from 2015 about the refugee crisis', isCorrect: true },
          { id: 'b', text: 'A 2020 academic article analyzing media coverage of the refugee crisis', isCorrect: false },
          { id: 'c', text: 'A textbook chapter about migration in Europe', isCorrect: false },
          { id: 'd', text: 'A documentary about Norwegian immigration policy', isCorrect: false },
        ],
        solution: 'The original newspaper articles from 2015 are primary sources because they are the direct objects of study -- the researcher wants to analyze how newspapers reported on the crisis. The other options are secondary sources that interpret or discuss the primary material.',
      },
    },
    {
      id: 'ie-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain why the same document could be classified as either a primary or secondary source depending on the research question. Use a specific example to illustrate your answer.',
        solution: 'A newspaper article about a scientific study is a secondary source if you are researching the scientific topic (because the journalist is interpreting the original research). However, the same article becomes a primary source if you are researching how the media reports on science (because the article itself is the direct object of analysis). Similarly, a biography of Winston Churchill is a secondary source for studying Churchill\'s life, but a primary source for studying how biographers have interpreted Churchill over time.',
        hints: ['Think about what makes something "primary" -- it depends on what you are studying'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: The CRAAP Test ---
    {
      id: 'ie-7-2-def-2',
      type: 'definition',
      title: 'The CRAAP Test for Evaluating Sources',
      content: `The **CRAAP Test** was developed by librarians at California State University, Chico, as a framework for evaluating the reliability of sources. Each letter represents a criterion:

**C -- Currency**
- When was the source published or last updated?
- Is the information still relevant and accurate?
- For fast-changing fields (technology, medicine), recent sources are essential
- For historical or literary analysis, older sources may be perfectly valid

**R -- Relevance**
- Does the source address your specific research question?
- Who is the intended audience (general public, specialists, students)?
- Is the information at an appropriate level of depth?

**A -- Authority**
- Who is the author? What are their qualifications?
- Is the author affiliated with a reputable institution?
- Is there contact information provided?
- Has the author published other work on this topic?

**A -- Accuracy**
- Is the information supported by evidence?
- Can the claims be verified through other sources?
- Are there citations and references?
- Has the source been peer-reviewed?
- Are there obvious errors in facts, grammar, or spelling?

**P -- Purpose**
- Why does this source exist? To inform, persuade, sell, entertain?
- Is there a potential bias? Who benefits from this information?
- Is the content fact, opinion, or propaganda?
- Are alternative viewpoints acknowledged?

**Rating scale:** For each criterion, rate the source from 1 (unreliable) to 5 (highly reliable). A total score below 15 out of 25 suggests the source should be used with caution or avoided entirely.`,
    },
    // --- EXAMPLE 2: Applying the CRAAP Test ---
    {
      id: 'ie-7-2-example-2',
      type: 'example',
      title: 'Applying the CRAAP Test to a Source',
      problem: 'Apply the CRAAP test to the following source: A blog post titled "Why Vaccines Are Dangerous" published on a personal website in 2018, written by someone who identifies themselves as a "health researcher" with no listed institutional affiliation.',
      solution: `**C -- Currency: 2/5**
Published in 2018 -- reasonably recent, but vaccine science is continually updated. No indication that the post has been updated.

**R -- Relevance: 3/5**
If your topic is vaccine skepticism, this could be relevant as an example of anti-vaccine rhetoric. As a source of medical information, it is not appropriate.

**A -- Authority: 1/5**
The author claims to be a "health researcher" but provides no credentials, institutional affiliation, or verifiable qualifications. There is no indication of medical or scientific training.

**A -- Accuracy: 1/5**
A personal blog is not peer-reviewed. Without checking the specific claims, the lack of institutional backing and peer review raises serious concerns. Anti-vaccine claims have been thoroughly debunked by scientific consensus.

**P -- Purpose: 1/5**
The purpose appears to be persuasion rather than objective information. The title ("Why Vaccines Are Dangerous") reveals a predetermined conclusion rather than an open inquiry.

**Total: 8/25 -- Unreliable**
This source should not be used as evidence for medical or scientific claims. However, it could be used as a primary source in an essay analyzing anti-vaccine rhetoric or misinformation.`,
    },
    // --- EXERCISES 2 ---
    {
      id: 'ie-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-7-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'In the CRAAP test, the "P" stands for Purpose. Which question is MOST relevant when evaluating Purpose?',
        options: [
          { id: 'a', text: 'Why does this source exist, and who benefits from the information presented?', isCorrect: true },
          { id: 'b', text: 'When was the source published or last updated?', isCorrect: false },
          { id: 'c', text: 'What are the author\'s academic qualifications?', isCorrect: false },
          { id: 'd', text: 'Can the facts in the source be verified elsewhere?', isCorrect: false },
        ],
        solution: 'Purpose asks why the source was created and who benefits. This helps identify potential bias. The other options relate to Currency (when published), Authority (qualifications), and Accuracy (verification).',
      },
    },
    {
      id: 'ie-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Find two online sources about the same topic (e.g., climate change, artificial intelligence, or a topic of your choice). Apply the full CRAAP test to each source, rating each criterion from 1 to 5. Then write a paragraph (100-150 words) explaining which source is more reliable and why.',
        hints: [
          'Choose one source from an academic or reputable news outlet and one from a blog or social media post',
          'Be specific in your ratings -- explain why you gave each score',
          'Consider how the purpose of each source affects its reliability',
        ],
        solution: 'A strong response will: (1) clearly identify both sources with titles and URLs; (2) rate each CRAAP criterion with specific justification; (3) calculate total scores; (4) write a clear comparative analysis explaining which source is more trustworthy. The best responses recognize that reliability is not binary -- even good sources have limitations.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- NOTE: Academic Databases ---
    {
      id: 'ie-7-2-note-1',
      type: 'note',
      title: 'Useful Academic Databases and Search Tools',
      content: `**Free academic databases:**
- **Google Scholar** (scholar.google.com) -- Searches across academic journals, theses, books, and conference papers
- **JSTOR** (jstor.org) -- Digital library of academic journals (some free access)
- **PubMed** (pubmed.ncbi.nlm.nih.gov) -- Biomedical and life sciences literature
- **DOAJ** (doaj.org) -- Directory of Open Access Journals

**Norwegian resources:**
- **Oria** -- The Norwegian academic library search engine
- **Nasjonalbiblioteket** (nb.no) -- The National Library of Norway's digital collection
- **Idunn** -- Scandinavian academic journals

**Search tips:**
- Use quotation marks for exact phrases: "climate change adaptation"
- Use AND/OR to combine terms: "social media" AND "mental health"
- Use the minus sign to exclude terms: vaccines -conspiracy
- Filter by publication date, source type, and language
- Read abstracts first to determine if a full article is worth reading`,
    },
    // --- SUMMARY ---
    {
      id: 'ie-7-2-summary',
      type: 'text',
      content: `## Chapter Summary: Research Skills and Sources

**Key Takeaways:**

1. **Primary sources** are original, first-hand materials (documents, data, literary texts), while **secondary sources** interpret or analyze primary sources.

2. The same source can be primary or secondary depending on your research question.

3. The **CRAAP test** (Currency, Relevance, Authority, Accuracy, Purpose) provides a systematic framework for evaluating source reliability.

4. **Academic databases** like Google Scholar, JSTOR, and Oria provide access to peer-reviewed, reliable sources that are far superior to general web searches.

5. Critical evaluation of sources is not optional in academic work -- it is a fundamental requirement that demonstrates intellectual rigor.

**Remember:** A well-researched essay is only as strong as its weakest source. One unreliable source can undermine an otherwise excellent argument.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-7-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'You are writing a research essay about the effects of social media on political polarization. Describe a research strategy: (a) List three specific search terms or phrases you would use; (b) Name two databases you would search; (c) Explain whether you would prioritize primary or secondary sources, and why; (d) Describe one type of source you would avoid and why.',
        solution: 'A strong response demonstrates a systematic approach: (a) Search terms might include "social media political polarization," "echo chambers" AND "democracy," "filter bubbles" AND "political attitudes." (b) Google Scholar and JSTOR are appropriate databases. (c) A mix is ideal: secondary sources (review articles, meta-analyses) for overview and context; primary sources (original studies, survey data) for specific evidence. (d) Sources to avoid: partisan political blogs, unverified social media posts, or opinion pieces disguised as research. The response should show awareness that good research is deliberate and strategic.',
        hints: ['Think about which databases are best for social science topics', 'Consider what kinds of evidence would be most convincing'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-7-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Which of the following is the BEST reason to use academic databases like Google Scholar instead of a regular Google search for a research essay?',
        options: [
          { id: 'a', text: 'Academic databases filter for peer-reviewed and scholarly sources, reducing the risk of unreliable information', isCorrect: true },
          { id: 'b', text: 'Regular Google always provides incorrect information', isCorrect: false },
          { id: 'c', text: 'Academic databases are faster than Google', isCorrect: false },
          { id: 'd', text: 'Teachers require students to use academic databases so they can check the sources', isCorrect: false },
        ],
        solution: 'Academic databases prioritize peer-reviewed and scholarly publications, meaning the sources have been evaluated by experts before publication. This does not mean regular Google is always wrong, but the quality filter of academic databases significantly reduces the risk of encountering unreliable or non-scholarly content.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7.3: Citation and Referencing
// ============================================================================

export const CHAPTER_INT_ENGELSK_7_3: TextbookChapter = {
  id: 'int-engelsk-7-3',
  courseId: 'int-engelsk',
  chapterNumber: '7.3',
  title: 'Citation and Referencing',
  description: 'Learn the basics of APA and MLA citation styles, in-text citations, reference lists, and the importance of avoiding plagiarism.',
  estimatedMinutes: 20,
  competenceGoals: [
    'use sources in a critical and verifiable way',
    'master citation techniques and referencing conventions',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-7-3-intro',
      type: 'text',
      content: `## Giving Credit Where Credit Is Due

Whenever you use someone else's ideas, words, data, or arguments in your academic writing, you must give them proper credit. This is not just a matter of politeness -- it is a fundamental principle of academic integrity. Failing to cite your sources is considered **plagiarism**, which can result in serious academic consequences.

Citation serves several important purposes:
- **Acknowledges the original author's intellectual contribution**
- **Allows readers to locate and verify your sources**
- **Strengthens your argument** by showing it is grounded in existing research
- **Demonstrates the breadth and depth of your research**
- **Protects you** from accusations of plagiarism

**Learning Goals for This Chapter:**
- Understand why citation is essential in academic writing
- Format in-text citations in both APA and MLA styles
- Create reference list entries for common source types
- Recognize and avoid different forms of plagiarism`,
    },
    // --- DEFINITION 1: APA and MLA Basics ---
    {
      id: 'ie-7-3-def-1',
      type: 'definition',
      title: 'APA vs. MLA: Two Major Citation Styles',
      content: `The two most widely used citation styles in English-language academia are **APA** (American Psychological Association) and **MLA** (Modern Language Association).

**APA Style** (7th edition)
- Used primarily in: Social sciences, psychology, education, business
- In-text citation format: **(Author, Year)**
- Example: (Smith, 2023) or Smith (2023) argues that...
- Direct quote: (Smith, 2023, p. 45)
- Reference list title: **References**

**MLA Style** (9th edition)
- Used primarily in: Humanities, literature, languages, arts
- In-text citation format: **(Author Page)**
- Example: (Smith 45) or Smith argues that... (45)
- No comma between author and page number
- Reference list title: **Works Cited**

**Key Differences at a Glance:**

| Feature | APA | MLA |
|---------|-----|-----|
| In-text format | (Author, Year) | (Author Page) |
| Year in citation | Yes | No |
| Page numbers | Only for direct quotes | Always for quotes |
| Title format | Sentence case | Title case |
| Reference list name | References | Works Cited |
| Emphasis on | Date of publication | Author's name |

**Which to use?** Follow your teacher's or institution's guidelines. In Norway, APA is more commonly used in secondary schools and universities, but both are widely accepted.`,
    },
    // --- EXAMPLE 1: In-text Citations ---
    {
      id: 'ie-7-3-example-1',
      type: 'example',
      title: 'Formatting In-Text Citations',
      problem: 'Show how to cite the following in both APA and MLA format:\n\n1. A paraphrase from a 2021 book by Sarah Johnson\n2. A direct quote from page 87 of the same book\n3. A source with two authors: Tom Brown and Lisa Chen (2019)\n4. A source with three or more authors: Williams, Davis, Garcia, and Park (2022)',
      solution: `**1. Paraphrase (no direct quote):**
- APA: Research suggests that bilingual education has significant cognitive benefits (Johnson, 2021).
- MLA: Research suggests that bilingual education has significant cognitive benefits (Johnson 42).

**2. Direct quote from page 87:**
- APA: Johnson (2021) states that "bilingual children demonstrate enhanced executive function across multiple domains" (p. 87).
- MLA: Johnson states that "bilingual children demonstrate enhanced executive function across multiple domains" (87).

**3. Two authors:**
- APA: (Brown & Chen, 2019) -- use "&" in parenthetical citations
- MLA: (Brown and Chen 112) -- use "and" (no ampersand in MLA)

**4. Three or more authors:**
- APA: (Williams et al., 2022) -- use "et al." from the first citation
- MLA: (Williams et al. 56) -- also uses "et al."

**Important notes:**
- In APA, "et al." is used for three or more authors from the first citation
- In both styles, the period goes AFTER the parenthetical citation, not before
- Signal phrases (e.g., "Johnson states that...") integrate the citation more naturally into your prose`,
    },
    // --- EXERCISES 1 ---
    {
      id: 'ie-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-7-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following is a correctly formatted APA in-text citation for a direct quote from page 234 of a 2020 book by Maria Lopez?',
        options: [
          { id: 'a', text: 'Lopez (2020) argues that "language shapes our perception of reality" (p. 234).', isCorrect: true },
          { id: 'b', text: 'Lopez argues that "language shapes our perception of reality" (234).', isCorrect: false },
          { id: 'c', text: '"Language shapes our perception of reality" (Lopez, Maria, 2020, page 234).', isCorrect: false },
          { id: 'd', text: 'According to Lopez, "language shapes our perception of reality."(2020, p. 234)', isCorrect: false },
        ],
        solution: 'Option A follows correct APA format: the author name and year appear as a signal phrase, the quote is in quotation marks, and the page number is cited as (p. 234) after the closing quotation mark but before the period. Option B uses MLA format. Option C includes the first name (incorrect in both styles). Option D has incorrect punctuation placement.',
      },
    },
    {
      id: 'ie-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Create a complete APA reference list entry for each of the following sources:\n\na) A book: "The Language Instinct" by Steven Pinker, published in 2007 by Harper Perennial.\nb) A journal article: "Effects of Social Media on Adolescent Well-Being" by Kim, Lee, and Park, published in 2021 in the Journal of Youth Studies, volume 24, issue 3, pages 345-362.\nc) A website: An article called "Climate Change: Evidence and Causes" published by the National Academy of Sciences, last updated March 15, 2023, at https://www.nasonline.org/climate-change.',
        hints: [
          'APA reference format for books: Author, A. A. (Year). Title of work: Capital letter also for subtitle. Publisher.',
          'Journal articles include volume(issue), page range, and DOI if available',
          'Websites include the retrieval URL',
        ],
        solution: 'a) Pinker, S. (2007). The language instinct. Harper Perennial.\n\nb) Kim, J., Lee, S., & Park, H. (2021). Effects of social media on adolescent well-being. Journal of Youth Studies, 24(3), 345-362.\n\nc) National Academy of Sciences. (2023, March 15). Climate change: Evidence and causes. https://www.nasonline.org/climate-change\n\nKey formatting points: APA uses sentence case for titles (only capitalize the first word and proper nouns), italicizes book titles and journal names, and includes the DOI or URL for digital sources.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: Plagiarism ---
    {
      id: 'ie-7-3-def-2',
      type: 'definition',
      title: 'Plagiarism: What It Is and How to Avoid It',
      content: `**Plagiarism** is the act of presenting someone else's words, ideas, or work as your own, whether intentionally or unintentionally.

**Types of Plagiarism:**

**1. Direct plagiarism**
Copying text word-for-word without quotation marks or citation.
*"The most blatant form -- never acceptable."*

**2. Mosaic plagiarism (patchwriting)**
Taking phrases from a source and weaving them into your own sentences without quotation marks.
*"Common among students who are learning to paraphrase."*

**3. Paraphrase plagiarism**
Restating an author's ideas in your own words but failing to cite the source.
*"Even when you rephrase, you must cite the original idea."*

**4. Self-plagiarism**
Submitting your own previous work (or parts of it) for a new assignment without permission.
*"Reusing your own work without disclosure is also dishonest."*

**5. AI-generated plagiarism**
Submitting text generated by AI tools (such as ChatGPT) as your own writing without disclosure.
*"A growing concern in education."*

---

**How to Avoid Plagiarism:**
- **Always cite** when you use someone else's ideas, even if paraphrased
- **Use quotation marks** for any borrowed phrases or sentences
- **Paraphrase genuinely** -- change both the words AND the sentence structure
- **Keep track** of all sources while researching
- **When in doubt, cite** -- it is better to over-cite than to plagiarize
- **Disclose AI use** according to your school's policy`,
    },
    // --- EXAMPLE 2: Paraphrasing vs. Plagiarism ---
    {
      id: 'ie-7-3-example-2',
      type: 'example',
      title: 'The Spectrum from Plagiarism to Proper Paraphrasing',
      problem: `Original source (from Smith, 2022, p. 78):
"Social media algorithms create echo chambers that reinforce existing beliefs and limit exposure to diverse perspectives, thereby contributing to political polarization."

Evaluate the following three attempts to use this source:`,
      solution: `**Attempt 1 -- PLAGIARISM (direct copying):**
"Social media algorithms create echo chambers that reinforce existing beliefs and limit exposure to diverse perspectives, thereby contributing to political polarization."
*Problem:* Word-for-word copy with no quotation marks and no citation.

**Attempt 2 -- PLAGIARISM (mosaic/patchwriting):**
"Social media algorithms create echo chambers that strengthen existing beliefs and reduce exposure to different perspectives, which contributes to political polarization (Smith, 2022)."
*Problem:* Although a citation is added, most of the sentence structure and key phrases are copied directly. Only a few words have been swapped ("strengthen" for "reinforce," "reduce" for "limit"). This is patchwriting, not genuine paraphrasing.

**Attempt 3 -- CORRECT paraphrase:**
"According to Smith (2022), the design of social media platforms tends to create insulated information environments where users primarily encounter content that aligns with their pre-existing views, a phenomenon that researchers have linked to increasing divisions in political discourse (p. 78)."
*Why this works:* The idea is fully restated in the writer's own words and sentence structure. The source is properly cited. The original meaning is preserved, but the expression is entirely new.`,
    },
    // --- EXERCISES 2 ---
    {
      id: 'ie-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-7-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'A student reads an article by Dr. Hansen (2023) about climate change and writes: "Rising temperatures are causing glaciers to melt at unprecedented rates." The student does not include a citation. Is this plagiarism?',
        options: [
          { id: 'a', text: 'Yes, because the idea came from Hansen\'s article and must be cited even when paraphrased', isCorrect: true },
          { id: 'b', text: 'No, because the student used their own words', isCorrect: false },
          { id: 'c', text: 'No, because this is common knowledge that does not require citation', isCorrect: false },
          { id: 'd', text: 'It depends on whether the exact words were copied', isCorrect: false },
        ],
        solution: 'While "glaciers are melting" might be considered common knowledge in general terms, if the student learned the specific claim about "unprecedented rates" from Hansen\'s article, it should be cited. A good rule: if you would not have known or included this information without reading the source, cite it. Paraphrasing without citation is a form of plagiarism.',
      },
    },
    {
      id: 'ie-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-7-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Read the following original passage, then write: (a) a proper direct quote with APA citation, (b) a proper paraphrase with APA citation, and (c) an example of what would constitute plagiarism.\n\nOriginal: "The digital divide refers to the gap between those who have access to modern information technology and those who do not, creating significant inequalities in education and economic opportunity." -- from Chen, 2021, p. 156.',
        solution: '(a) Direct quote: Chen (2021) defines the concept as "the gap between those who have access to modern information technology and those who do not, creating significant inequalities in education and economic opportunity" (p. 156).\n\n(b) Paraphrase: According to Chen (2021), unequal access to digital technology has resulted in a divide that disproportionately affects people\'s educational and economic prospects.\n\n(c) Plagiarism example: The digital divide is the gap between people who have access to information technology and those who do not. This creates inequalities in education and economics. [No citation, minimal rewording]',
        hints: ['For the direct quote, use quotation marks and include the page number', 'For the paraphrase, completely rephrase the idea -- do not just swap a few words'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-7-3-summary',
      type: 'text',
      content: `## Chapter Summary: Citation and Referencing

**Key Takeaways:**

1. **Citation is mandatory** whenever you use someone else's ideas, words, or data -- whether quoting directly or paraphrasing.

2. **APA style** uses (Author, Year) format and is common in social sciences. **MLA style** uses (Author Page) format and is common in humanities.

3. **A reference list** (APA) or **Works Cited** page (MLA) at the end of your essay provides full publication details for every source cited.

4. **Plagiarism** includes direct copying, mosaic plagiarism, paraphrase without citation, self-plagiarism, and undisclosed AI-generated content.

5. **Genuine paraphrasing** means restating ideas in entirely your own words AND sentence structure, with a proper citation to the original source.

**The Golden Rule:** When in doubt, cite. It is always better to include a citation that may not be strictly necessary than to risk plagiarism.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-7-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a short paragraph (80-120 words) about a topic of your choice that includes: (a) one direct quote with correct APA citation, (b) one paraphrase with correct APA citation, and (c) at least one proper transition between the two sources. Then write the corresponding References list.',
        hints: [
          'You may invent plausible sources for this exercise',
          'Remember: the period goes after the parenthetical citation, not before',
          'Use signal phrases to integrate citations naturally',
        ],
        solution: 'A successful response integrates at least two sources smoothly into a coherent paragraph. The direct quote should use quotation marks and include the page number. The paraphrase should be clearly different in wording and structure from any original. The References list should follow APA formatting for each source type.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-7-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Which of the following statements about self-plagiarism is TRUE?',
        options: [
          { id: 'a', text: 'Submitting work you have previously submitted for another assignment without disclosure is considered academically dishonest', isCorrect: true },
          { id: 'b', text: 'Self-plagiarism is impossible because you cannot steal from yourself', isCorrect: false },
          { id: 'c', text: 'Self-plagiarism only applies to published academic articles, not student work', isCorrect: false },
          { id: 'd', text: 'Reusing your own work is always acceptable as long as you wrote it yourself', isCorrect: false },
        ],
        solution: 'Self-plagiarism applies to all academic contexts, including student work. When you submit an assignment, the expectation is that it is new work created for that specific assignment. Reusing previous work without disclosure misrepresents your effort and violates academic integrity policies at most institutions.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7.4: Argumentation and Critical Thinking
// ============================================================================

export const CHAPTER_INT_ENGELSK_7_4: TextbookChapter = {
  id: 'int-engelsk-7-4',
  courseId: 'int-engelsk',
  chapterNumber: '7.4',
  title: 'Argumentation and Critical Thinking',
  description: 'Learn to construct persuasive arguments, identify logical fallacies, engage with counter-arguments, and use evidence effectively in academic discourse.',
  estimatedMinutes: 25,
  competenceGoals: [
    'present and discuss nuanced views on current issues',
    'use knowledge of rhetoric and argumentation to analyze and produce texts',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-7-4-intro',
      type: 'text',
      content: `## Thinking Critically, Arguing Effectively

Critical thinking and argumentation are at the heart of academic work. Whether you are writing an essay, participating in a debate, or evaluating a news article, the ability to construct logical arguments and identify flawed reasoning is essential.

An argument, in the academic sense, is not a quarrel or disagreement. It is a structured, evidence-based attempt to persuade an audience of a particular position. A strong academic argument acknowledges complexity, engages with opposing viewpoints, and relies on logic rather than emotion.

**Learning Goals for This Chapter:**
- Identify and explain common logical fallacies
- Construct arguments using the Toulmin model
- Develop and respond to counter-arguments effectively
- Distinguish between different types of evidence and their relative strength
- Apply critical thinking skills to evaluate arguments in texts and media`,
    },
    // --- DEFINITION 1: Logical Fallacies ---
    {
      id: 'ie-7-4-def-1',
      type: 'definition',
      title: 'Common Logical Fallacies',
      content: `A **logical fallacy** is an error in reasoning that undermines the logic of an argument. Fallacies can be persuasive even when they are logically invalid. Recognizing them is a crucial critical thinking skill.

**1. Ad Hominem** (Attack the person)
Attacking the character of the person making the argument instead of the argument itself.
*Example:* "You can't trust her opinion on climate policy -- she's not even a scientist."

**2. Straw Man**
Misrepresenting someone's argument to make it easier to attack.
*Example:* "Environmentalists want to ban all cars and send us back to the Stone Age."

**3. Appeal to Authority**
Claiming something is true because an authority figure said it, even when the authority is not an expert on the topic.
*Example:* "This famous actor says vaccines are dangerous, so they must be."

**4. False Dilemma (Either/Or)**
Presenting only two options when more exist.
*Example:* "Either we ban all immigration, or our country will be overrun."

**5. Slippery Slope**
Arguing that one event will inevitably lead to a chain of increasingly extreme consequences without evidence.
*Example:* "If we allow students to use calculators, soon they won't be able to do any math at all."

**6. Red Herring**
Introducing an irrelevant topic to divert attention from the original argument.
*Example:* "Why should we worry about pollution when there are people starving?"

**7. Hasty Generalization**
Drawing a broad conclusion from too little evidence.
*Example:* "My Norwegian friend is tall, so all Norwegians must be tall."

**8. Circular Reasoning (Begging the Question)**
Using the conclusion as a premise -- the argument assumes what it is trying to prove.
*Example:* "The Bible is true because it says so in the Bible."

**9. Appeal to Emotion**
Using emotional manipulation instead of logic to persuade.
*Example:* "Think of the children!" (without any logical connection to the argument)

**10. Bandwagon (Ad Populum)**
Arguing that something is true or good because many people believe or do it.
*Example:* "Everyone uses this app, so it must be the best."`,
    },
    // --- EXAMPLE 1: Identifying Fallacies ---
    {
      id: 'ie-7-4-example-1',
      type: 'example',
      title: 'Spotting Fallacies in Real-World Arguments',
      problem: 'Identify the logical fallacy in each of the following statements:\n\n1. "If we legalize marijuana, next it will be cocaine, then heroin, and society will collapse."\n2. "My opponent claims we need prison reform, but he was arrested for drunk driving ten years ago."\n3. "You either support our military budget or you don\'t care about national security."\n4. "This diet must work -- millions of people have bought the book."',
      solution: `**1. Slippery Slope**
The argument assumes an inevitable chain of escalating consequences without providing evidence that one event will actually lead to the next. Legalizing marijuana does not logically guarantee the legalization of harder drugs or societal collapse.

**2. Ad Hominem**
Instead of addressing the argument for prison reform, the speaker attacks the opponent's personal history. A person's past mistakes do not invalidate the logic of their current argument.

**3. False Dilemma**
This presents only two extreme options: full support for the military budget or complete indifference to security. In reality, one could support national security while advocating for a different allocation of resources.

**4. Bandwagon (Ad Populum)**
Popularity does not equal effectiveness. Many people buying a book proves successful marketing, not that the diet works. The effectiveness of a diet should be evaluated through scientific evidence, not sales figures.`,
    },
    // --- EXERCISES 1 ---
    {
      id: 'ie-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-7-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'A politician says: "My opponent wants to reduce the defense budget. Clearly, she wants to leave our country completely defenseless." Which logical fallacy is this?',
        options: [
          { id: 'a', text: 'Straw man -- the opponent\'s position is being exaggerated and misrepresented', isCorrect: true },
          { id: 'b', text: 'Ad hominem -- the politician is attacking the opponent personally', isCorrect: false },
          { id: 'c', text: 'Red herring -- the politician is changing the subject', isCorrect: false },
          { id: 'd', text: 'Circular reasoning -- the argument assumes its own conclusion', isCorrect: false },
        ],
        solution: 'This is a straw man fallacy. Wanting to reduce the defense budget is not the same as wanting a country to be "completely defenseless." The politician is distorting the opponent\'s actual position into an extreme version that is easier to attack.',
      },
    },
    {
      id: 'ie-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Find one example of a logical fallacy in a real-world source (newspaper article, social media post, advertisement, or political speech). Identify the fallacy by name, explain why it is fallacious, and suggest how the argument could be made more logically valid.',
        hints: [
          'Advertisements and political speeches are particularly rich in fallacies',
          'Look for emotional appeals, oversimplifications, and personal attacks',
          'Explain what evidence or reasoning would strengthen the argument',
        ],
        solution: 'A strong response will: (1) correctly identify the source and quote the relevant passage; (2) name the specific fallacy; (3) explain clearly why the reasoning is flawed; (4) propose a logically sound alternative argument. The best responses demonstrate genuine critical engagement with media.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: The Toulmin Model ---
    {
      id: 'ie-7-4-def-2',
      type: 'definition',
      title: 'The Toulmin Model of Argumentation',
      content: `The **Toulmin Model**, developed by philosopher Stephen Toulmin, provides a framework for constructing and analyzing arguments. It breaks an argument into six components:

**1. Claim**
The main point or thesis you are arguing.
*"Schools should teach financial literacy as a mandatory subject."*

**2. Data (Grounds/Evidence)**
The facts, statistics, or evidence that support your claim.
*"A 2022 survey found that 67% of young adults cannot create a basic budget, and student loan debt has reached record levels."*

**3. Warrant**
The logical bridge connecting your evidence to your claim -- the reasoning that explains WHY the evidence supports the claim.
*"If young people lack basic financial skills, it is the responsibility of the education system to address this gap."*

**4. Backing**
Additional support for the warrant when it may not be immediately accepted.
*"Educational research consistently shows that skills taught in formal schooling are retained more effectively than those learned informally."*

**5. Qualifier**
Words that indicate the strength or limitations of the claim (most, some, probably, in many cases).
*"In most educational contexts, financial literacy instruction would likely improve students' long-term financial decision-making."*

**6. Rebuttal**
Acknowledgment of counter-arguments and limitations.
*"Critics may argue that the curriculum is already overcrowded; however, financial literacy could be integrated into existing mathematics or social studies courses rather than added as a separate subject."*

**Why use the Toulmin Model?**
- It forces you to ground claims in evidence
- It encourages you to address opposing views
- It requires you to make your reasoning explicit
- It results in more nuanced, persuasive arguments`,
    },
    // --- EXAMPLE 2: Counter-Arguments ---
    {
      id: 'ie-7-4-example-2',
      type: 'example',
      title: 'Engaging with Counter-Arguments',
      problem: 'You are writing an essay arguing that schools should ban homework for students under 12. How would you address the counter-argument that homework teaches responsibility and discipline?',
      solution: `**Weak response (dismisses the counter-argument):**
"Some people say homework teaches responsibility, but this is wrong. Homework is just a waste of time."
*Problem:* Dismisses a legitimate opposing view without engaging with it.

**Strong response (acknowledges, addresses, and refutes):**
"Proponents of homework argue that regular assignments teach children responsibility and self-discipline -- qualities that are undeniably important for future academic and professional success. However, this argument assumes that homework is the only, or even the most effective, means of developing these traits. Research by Kohn (2006) suggests that responsibility and time management can be cultivated through age-appropriate alternatives such as household chores, extracurricular activities, and project-based learning during school hours. Furthermore, Cooper et al. (2006) found no significant correlation between homework and academic achievement for elementary-aged students, suggesting that the 'practice makes perfect' rationale may not hold for younger learners. While discipline is important, there are more developmentally appropriate ways to foster it than assigning homework to children who have already spent six hours in a structured learning environment."

**What makes this effective:**
- Acknowledges the opposing view fairly and respectfully
- Does not create a straw man
- Provides specific evidence to counter the argument
- Offers alternative solutions rather than simply rejecting the opposing view
- Maintains academic register throughout`,
    },
    // --- EXERCISES 2 ---
    {
      id: 'ie-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-7-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'In the Toulmin model, what is the function of the "warrant"?',
        options: [
          { id: 'a', text: 'It provides the logical reasoning that connects the evidence to the claim', isCorrect: true },
          { id: 'b', text: 'It presents the main argument or thesis of the essay', isCorrect: false },
          { id: 'c', text: 'It acknowledges and responds to opposing viewpoints', isCorrect: false },
          { id: 'd', text: 'It provides statistical data and factual evidence', isCorrect: false },
        ],
        solution: 'The warrant is the logical bridge between evidence and claim. It explains WHY the evidence supports the conclusion. Without a clear warrant, an argument may present data without making its reasoning transparent. The claim is the thesis (B), the rebuttal addresses opposing views (C), and data provides the evidence (D).',
      },
    },
    {
      id: 'ie-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-7-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Using the Toulmin model, construct a complete argument on ONE of the following topics. Clearly label each component (Claim, Data, Warrant, Backing, Qualifier, Rebuttal).\n\na) Social media companies should be held legally responsible for harmful content on their platforms.\nb) All students should be required to learn a second foreign language.\nc) The voting age should be lowered to 16.',
        hints: [
          'Start with a clear, specific claim',
          'Use concrete evidence -- statistics, expert opinions, or real examples',
          'Make sure your warrant explicitly explains how the evidence supports the claim',
          'Address at least one significant counter-argument in your rebuttal',
        ],
        solution: 'A successful response will include all six Toulmin components, clearly labeled. The claim should be specific and arguable. The data should be concrete and relevant. The warrant should provide explicit logical reasoning. The qualifier should show nuance. The rebuttal should engage honestly with a strong counter-argument.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- NOTE: Types of Evidence ---
    {
      id: 'ie-7-4-note-1',
      type: 'note',
      title: 'Hierarchy of Evidence in Academic Arguments',
      content: `Not all evidence is equally persuasive. Understanding the hierarchy of evidence helps you build stronger arguments.

**Strongest evidence:**
1. **Meta-analyses and systematic reviews** -- Combine results from multiple studies
2. **Peer-reviewed research studies** -- Original research published in academic journals
3. **Government and institutional reports** -- Official data and statistics
4. **Expert testimony** -- Statements from recognized authorities in the field

**Moderate evidence:**
5. **Case studies** -- Detailed analysis of specific instances
6. **Surveys and polls** -- Data from structured questionnaires
7. **Quality journalism** -- Well-researched reporting from reputable outlets

**Weakest evidence (use with caution):**
8. **Personal anecdotes** -- Individual experiences (useful for illustration, not proof)
9. **Common knowledge claims** -- "Everyone knows that..."
10. **Analogies** -- Comparisons to similar situations (illustrative, not conclusive)

**Tip:** The strongest academic arguments combine multiple types of evidence from different levels of this hierarchy.`,
    },
    // --- SUMMARY ---
    {
      id: 'ie-7-4-summary',
      type: 'text',
      content: `## Chapter Summary: Argumentation and Critical Thinking

**Key Takeaways:**

1. **Logical fallacies** are errors in reasoning that can appear persuasive but are logically invalid. Recognizing them helps you evaluate arguments critically and avoid them in your own writing.

2. **The Toulmin Model** (Claim, Data, Warrant, Backing, Qualifier, Rebuttal) provides a comprehensive framework for constructing well-reasoned arguments.

3. **Counter-arguments** should be acknowledged fairly, addressed with evidence, and refuted logically -- not dismissed or ignored.

4. **Evidence exists in a hierarchy:** peer-reviewed research and meta-analyses are stronger than personal anecdotes or popularity claims.

5. **Critical thinking** is not about being negative or skeptical of everything. It is about evaluating arguments on their logical merits and supporting claims with solid evidence.

**Developing your critical thinking skills is a lifelong process.** Every time you read an article, listen to a speech, or encounter a claim on social media, you have an opportunity to practice.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-7-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a persuasive paragraph (150-200 words) arguing for or against ONE of the following claims. Your paragraph must include: (1) a clear claim, (2) at least two pieces of evidence, (3) explicit reasoning connecting the evidence to the claim, and (4) acknowledgment of one counter-argument.\n\nTopics:\na) Artificial intelligence will make human translators obsolete within 20 years.\nb) Social media does more harm than good for democracy.\nc) Schools should eliminate letter grades in favor of written evaluations.',
        hints: [
          'Take a clear position -- do not sit on the fence',
          'Use the strongest evidence you can find or reasonably invent',
          'Make your reasoning (warrant) explicit',
          'Address the strongest counter-argument, not the weakest',
        ],
        solution: 'A successful response takes a clear position, provides specific evidence with explicit reasoning, and honestly engages with a counter-argument. The paragraph should demonstrate academic register, logical structure, and critical thinking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-7-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Which of the following is the BEST example of engaging with a counter-argument in academic writing?',
        options: [
          { id: 'a', text: '"Critics argue that X; however, recent research by Y demonstrates that this concern is overstated because Z."', isCorrect: true },
          { id: 'b', text: '"Some people disagree, but they are obviously wrong."', isCorrect: false },
          { id: 'c', text: '"There are no valid arguments against my position."', isCorrect: false },
          { id: 'd', text: '"My opponents are biased and cannot be trusted."', isCorrect: false },
        ],
        solution: 'Option A follows the academic convention of fairly presenting an opposing view, then responding with specific evidence and reasoning. Options B, C, and D either dismiss opposition without engagement (B, C) or commit an ad hominem fallacy (D). Strong academic writing treats opposing views with respect while providing evidence-based responses.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7.5: Oral Presentation Skills
// ============================================================================

export const CHAPTER_INT_ENGELSK_7_5: TextbookChapter = {
  id: 'int-engelsk-7-5',
  courseId: 'int-engelsk',
  chapterNumber: '7.5',
  title: 'Oral Presentation Skills',
  description: 'Master the art of delivering effective oral presentations, including structuring content, engaging the audience, using visual aids, and handling Q&A sessions.',
  estimatedMinutes: 18,
  competenceGoals: [
    'give well-structured oral presentations on complex topics and adapt the language to the purpose and audience',
    'use rhetorical devices and presentation techniques to engage an audience',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-7-5-intro',
      type: 'text',
      content: `## Speaking with Confidence and Purpose

The ability to present ideas clearly and persuasively to an audience is one of the most valuable skills you can develop -- in school, in the workplace, and in life. Whether you are presenting a project in class, pitching an idea at work, or speaking at a community event, effective presentation skills make the difference between being heard and being ignored.

Many students dread oral presentations. The good news is that presentation skills can be learned and improved with practice. The most compelling speakers are not born with a special gift -- they have developed their skills through preparation, practice, and reflection.

**Learning Goals for This Chapter:**
- Structure a presentation using the three-part model
- Apply techniques for engaging and maintaining audience attention
- Design effective visual aids that support (rather than replace) your message
- Develop strategies for managing nervousness and projecting confidence
- Handle questions and audience interaction professionally`,
    },
    // --- DEFINITION 1: Presentation Structure ---
    {
      id: 'ie-7-5-def-1',
      type: 'definition',
      title: 'The Three-Part Presentation Structure',
      content: `Every effective presentation follows a clear three-part structure: **Introduction, Body, and Conclusion.** This structure helps both the speaker stay organized and the audience follow the argument.

**1. INTRODUCTION (10-15% of total time)**

**Purpose:** Grab attention, establish credibility, preview the presentation.

**Key elements:**
- **Hook:** Start with something that captures attention:
  - A surprising statistic ("Did you know that the average person spends 7 hours per day looking at a screen?")
  - A thought-provoking question ("What would happen if English disappeared overnight?")
  - A brief anecdote or story
  - A bold statement or quotation
- **Topic statement:** Clearly state what the presentation is about
- **Relevance:** Explain why this matters to the audience
- **Roadmap:** Preview the main points ("I will discuss three key areas...")

**2. BODY (75-80% of total time)**

**Purpose:** Present your main arguments, evidence, and analysis.

**Best practices:**
- Limit yourself to **3-4 main points** (audiences struggle to retain more)
- Use **clear signposting** to guide the audience: "My first point is...", "Moving on to my second argument...", "Finally..."
- Support each point with **evidence**: data, examples, expert opinions
- Use **transitions** between sections to maintain flow
- Include **variety**: mix facts, examples, stories, and analysis

**3. CONCLUSION (10-15% of total time)**

**Purpose:** Summarize, reinforce the main message, and leave a lasting impression.

**Key elements:**
- **Signal the ending:** "In conclusion..." or "To summarize..."
- **Summarize** the main points briefly
- **Restate** the core message or thesis
- **End memorably:** A call to action, a powerful quote, a return to the opening hook, or a forward-looking statement
- **Never** end with "That's it" or "I'm done" -- end with impact`,
    },
    // --- EXAMPLE 1: Opening Hooks ---
    {
      id: 'ie-7-5-example-1',
      type: 'example',
      title: 'Effective Opening Hooks',
      problem: 'You are giving a 10-minute presentation about the impact of fast fashion on the environment. Write three different opening hooks, each using a different technique.',
      solution: `**Hook 1: Surprising Statistic**
"Every second, the equivalent of one garbage truck of textiles is landfilled or burned. The fashion industry produces 10% of all global carbon emissions -- more than all international flights and maritime shipping combined. Today, I want to talk about why the clothes we wear might be the most underestimated environmental crisis of our time."

**Hook 2: Thought-Provoking Question**
"Take a look at what you are wearing right now. How long did you keep your last t-shirt before throwing it away? Three years? One year? According to recent data, the average garment is now worn just seven times before being discarded. The question is: can we afford to keep dressing this way?"

**Hook 3: Personal Anecdote**
"Last month, I cleaned out my closet and found 14 items with the price tags still attached -- clothes I had bought but never worn. That experience made me curious: how did we get to a point where clothing is essentially disposable? As I researched, I discovered that this is not just a personal habit -- it is a global crisis."

**Why these work:**
- Each immediately engages the audience with something concrete
- They create an emotional or intellectual connection to the topic
- They naturally lead into the presentation's main argument
- They are concise -- a hook should take no more than 30-60 seconds`,
    },
    // --- EXERCISES 1 ---
    {
      id: 'ie-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-7-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Which of the following is the MOST effective way to end an academic presentation?',
        options: [
          { id: 'a', text: '"To conclude, social media has fundamentally altered democratic participation. The question is no longer whether it has an impact, but how we choose to respond. Thank you."', isCorrect: true },
          { id: 'b', text: '"So yeah, that\'s basically it. Any questions?"', isCorrect: false },
          { id: 'c', text: '"I\'m sorry I didn\'t have time to cover everything, but I hope it was okay."', isCorrect: false },
          { id: 'd', text: '"And that is why I am right and the other side is wrong. The end."', isCorrect: false },
        ],
        solution: 'Option A signals the conclusion clearly, restates the core message, ends with a forward-looking thought, and closes professionally. Option B is too informal and anticlimactic. Option C undermines the speaker\'s credibility with unnecessary apologizing. Option D is aggressive and lacks academic nuance.',
      },
    },
    {
      id: 'ie-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-7-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Write an opening hook and a closing statement for a presentation on ONE of the following topics. The hook and closing should mirror each other (i.e., the conclusion should return to or build upon the opening).\n\na) The future of artificial intelligence in education\nb) Why learning a second language changes your brain\nc) The hidden environmental cost of streaming services',
        hints: [
          'Try using a statistic, question, or anecdote as your hook',
          'Your closing should call back to the opening, creating a satisfying circular structure',
          'Keep the hook to 3-4 sentences and the closing to 3-4 sentences',
        ],
        solution: 'A strong response creates a clear connection between the opening and closing. For example, an opening question should be answered or reframed in the conclusion. An opening statistic should be revisited with new perspective. This circular structure creates a sense of completeness and leaves a lasting impression.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: Delivery Techniques ---
    {
      id: 'ie-7-5-def-2',
      type: 'definition',
      title: 'Delivery Techniques and Audience Engagement',
      content: `Content is only half the equation -- HOW you deliver your message is equally important. Research shows that audiences retain more from presentations with confident, engaging delivery.

**Voice and Speech:**
- **Pace:** Vary your speed. Slow down for key points; speed up slightly for less critical information. Aim for approximately 130-150 words per minute.
- **Volume:** Project your voice to reach the back of the room. Vary volume for emphasis.
- **Pauses:** Strategic pauses are powerful. Pause after important points to let them sink in. Pause before key words for dramatic effect.
- **Intonation:** Avoid a monotone delivery. Let your voice rise and fall naturally.
- **Clarity:** Articulate clearly, especially when presenting in a non-native language.

**Body Language:**
- **Eye contact:** Look at different sections of the audience, holding eye contact for 2-3 seconds at a time. Do not stare at your notes or slides.
- **Posture:** Stand straight but relaxed. Avoid swaying, pacing, or crossing your arms.
- **Gestures:** Use natural hand gestures to emphasize points. Avoid fidgeting.
- **Movement:** Purposeful movement (e.g., stepping forward for emphasis) is effective. Random pacing is distracting.
- **Facial expressions:** Match your expression to your content. Smile when appropriate.

**Audience Engagement Techniques:**
- **Ask questions:** "How many of you have experienced...?" or "What do you think would happen if...?"
- **Use humor sparingly:** A relevant, well-timed joke relaxes the audience, but forced humor can backfire
- **Tell stories:** Anecdotes and examples are more memorable than abstract facts
- **Use the "rule of three":** Group ideas in threes for maximum impact and memorability
- **Interactive elements:** Quick polls, show of hands, or brief pair discussions can energize an audience`,
    },
    // --- DEFINITION 3: Visual Aids ---
    {
      id: 'ie-7-5-def-3',
      type: 'definition',
      title: 'Effective Visual Aids',
      content: `Visual aids (slides, images, videos, props) should **support** your message, not replace it. The audience should be listening to YOU, not reading your slides.

**The 6-by-6 Rule:**
- No more than **6 bullet points** per slide
- No more than **6 words** per bullet point
- If you need more text, you need more slides

**Best practices for presentation slides:**
- **One idea per slide** -- do not overcrowd
- **Use high-quality images** -- a powerful image communicates more than a wall of text
- **Minimal text** -- keywords and phrases, not full sentences
- **Consistent design** -- same fonts, colors, and layout throughout
- **Readable fonts** -- minimum 24pt; sans-serif fonts (Arial, Helvetica) for readability
- **High contrast** -- dark text on light background or vice versa
- **Data visualization** -- use graphs and charts instead of tables of numbers

**Common slide mistakes to avoid:**
- Reading directly from your slides (the audience can read faster than you can speak)
- Using distracting animations or transitions
- Cramming too much information on one slide
- Using low-resolution or irrelevant images
- Including text so small that the back row cannot read it
- Having more slides than minutes in your presentation

**Alternatives to PowerPoint:**
- Prezi (for non-linear, dynamic presentations)
- Canva (for visually appealing, template-based designs)
- Physical props or demonstrations
- Whiteboard or flipchart for interactive elements
- Video clips (keep them short -- under 2 minutes)`,
    },
    // --- EXAMPLE 2: Q&A Strategies ---
    {
      id: 'ie-7-5-example-2',
      type: 'example',
      title: 'Handling the Q&A Session',
      problem: 'During a Q&A after your presentation on renewable energy, an audience member asks: "You only talked about the benefits of wind energy. Aren\'t wind turbines bad for birds and really expensive?" How should you respond?',
      solution: `**Weak response:**
"No, that's not true. Wind energy is great and people who criticize it are just supporting fossil fuels."
*Problem:* Dismissive, does not address the specific concerns, appears defensive.

**Strong response:**
"Thank you for raising that point -- it's an important consideration. You're right that wind turbines do pose risks to bird populations, and this is an area of ongoing research. Studies by the Audubon Society have found that proper placement of turbines, particularly away from migratory routes, can significantly reduce bird mortality. As for cost, while the initial installation investment is substantial, the operational costs of wind energy have decreased by over 70% in the past decade, making it increasingly competitive with fossil fuels. No energy source is without trade-offs, but the evidence suggests that the environmental benefits of wind energy substantially outweigh these challenges. Does that address your concern?"

**Effective Q&A strategies:**
1. **Listen to the full question** before formulating your response
2. **Repeat or rephrase** the question so everyone can hear it
3. **Acknowledge the validity** of the concern -- this builds credibility
4. **Respond with evidence** rather than opinion
5. **Admit if you don't know** -- "That's a great question. I don't have the exact data, but I'd be happy to follow up"
6. **Stay calm** even if the question is hostile
7. **Keep answers concise** -- 30-60 seconds is usually sufficient`,
    },
    // --- EXERCISES 2 ---
    {
      id: 'ie-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-7-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'According to best practices for presentation slides, which of the following slides would be MOST effective?',
        options: [
          { id: 'a', text: 'A slide with one large image related to the topic and three short bullet points (5 words each)', isCorrect: true },
          { id: 'b', text: 'A slide with a full paragraph of text that the speaker reads aloud to the audience', isCorrect: false },
          { id: 'c', text: 'A slide with 15 bullet points summarizing the entire presentation', isCorrect: false },
          { id: 'd', text: 'A slide with multiple animated GIFs and sound effects to keep the audience entertained', isCorrect: false },
        ],
        solution: 'Option A follows best practices: a strong visual paired with minimal, readable text. The image engages the audience visually while the speaker provides the detailed explanation verbally. Option B turns the speaker into a screen reader. Option C overwhelms the audience with information. Option D prioritizes entertainment over substance and creates distraction.',
      },
    },
    {
      id: 'ie-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-7-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Plan a 5-minute oral presentation on a topic of your choice. Submit a written plan that includes:\n\na) Your topic and a one-sentence thesis\nb) Your opening hook (written out in full)\nc) Three main points with brief supporting evidence for each\nd) Your closing statement (written out in full)\ne) A description of what visual aids you would use and why',
        hints: [
          'Keep to 3 main points for a 5-minute presentation',
          'Your hook and closing should mirror each other',
          'Describe your visual aids specifically -- do not just write "PowerPoint"',
          'Think about which delivery techniques you will use',
        ],
        solution: 'A strong plan demonstrates clear structure (introduction with hook, three distinct body points with evidence, memorable conclusion), thoughtful visual aid choices (minimal text, relevant images, clear data visualization), and awareness of the audience. The plan should show that the student understands the difference between reading a script and delivering a presentation.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- TIP: Managing Nerves ---
    {
      id: 'ie-7-5-tip-1',
      type: 'tip',
      title: 'Managing Presentation Anxiety',
      content: `Feeling nervous before a presentation is completely normal -- even experienced speakers feel it. The key is to manage your nerves, not eliminate them. A moderate level of nervousness actually improves performance by sharpening focus and energy.

**Before the presentation:**
- **Prepare thoroughly** -- confidence comes from knowing your material inside out
- **Practice out loud** at least 3-5 times, ideally in front of someone
- **Visit the room** in advance if possible to familiarize yourself with the space
- **Prepare for technical issues** -- have a backup plan if technology fails
- **Arrive early** to set up and settle in

**Just before speaking:**
- **Breathe deeply** -- slow, controlled breaths activate the parasympathetic nervous system
- **Power pose** -- standing in an expansive posture for 2 minutes can reduce stress hormones
- **Positive self-talk** -- replace "I'm going to fail" with "I'm prepared and I have something valuable to share"
- **Focus on the message** -- shift attention from yourself to your content and your audience

**During the presentation:**
- **Start strong** -- your first 30 seconds set the tone
- **Make eye contact** -- connecting with friendly faces calms nerves
- **Pause when needed** -- a pause feels longer to you than to the audience
- **If you lose your place** -- take a breath, glance at your notes, and continue. The audience is far more forgiving than you think.`,
    },
    // --- SUMMARY ---
    {
      id: 'ie-7-5-summary',
      type: 'text',
      content: `## Chapter Summary: Oral Presentation Skills

**Key Takeaways:**

1. **Structure matters:** Every presentation needs a clear introduction (with hook), body (3-4 main points), and conclusion (with memorable ending). The introduction and conclusion should mirror each other.

2. **Delivery is as important as content:** Voice variation, eye contact, purposeful movement, and strategic pauses make the difference between a forgettable and a memorable presentation.

3. **Visual aids should support, not replace, the speaker.** Follow the 6-by-6 rule, use high-quality images, and never read directly from slides.

4. **Audience engagement** -- through questions, stories, humor, and interactive elements -- keeps listeners attentive and makes your message more memorable.

5. **Q&A sessions** require active listening, acknowledgment of the questioner, evidence-based responses, and the honesty to say "I don't know" when appropriate.

6. **Nervousness is normal and manageable.** Thorough preparation, practice, and breathing techniques are your best tools for confident delivery.

**The most important principle:** A great presentation is a conversation with your audience, not a performance for them. Connect, communicate, and be genuine.`,
    },
    // --- SAMLEOPPGAVER ---
    {
      id: 'ie-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-7-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Record a 2-3 minute presentation on a topic of your choice. After recording, evaluate yourself using the following criteria (rate each 1-5):\n\n- Opening hook: Did it grab attention?\n- Structure: Were the main points clearly organized?\n- Eye contact: Did you look at the "audience" (camera)?\n- Voice: Did you vary pace, volume, and intonation?\n- Body language: Was your posture open and your gestures natural?\n- Conclusion: Did you end memorably?\n- Overall confidence: Did you appear prepared and engaged?\n\nWrite a brief self-evaluation (100-150 words) identifying your two greatest strengths and two areas for improvement.',
        hints: [
          'Watch the recording at least twice -- once for content, once for delivery',
          'Be honest but constructive in your self-evaluation',
          'Identify specific moments where you did well or could improve',
        ],
        solution: 'A strong self-evaluation demonstrates genuine reflection. It identifies specific strengths ("I made good eye contact during my second point") and specific areas for improvement ("I spoke too quickly during the introduction -- I should pause more"). The best responses include an action plan for improvement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-7-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'A speaker is giving a presentation and loses their place halfway through. What is the BEST way to handle this situation?',
        options: [
          { id: 'a', text: 'Pause briefly, take a breath, glance at your notes, and continue from where you left off or from the next main point', isCorrect: true },
          { id: 'b', text: 'Apologize repeatedly and explain that you are very nervous', isCorrect: false },
          { id: 'c', text: 'Start the entire presentation over from the beginning', isCorrect: false },
          { id: 'd', text: 'Stop the presentation and ask the audience to read the slides instead', isCorrect: false },
        ],
        solution: 'A brief pause is natural and usually goes unnoticed by the audience. Glancing at notes is perfectly acceptable. The key is to remain calm and continue. Excessive apologizing draws attention to the mistake (B), starting over wastes the audience\'s time (C), and stopping entirely abandons the communication (D). Even experienced speakers lose their place occasionally -- the difference is in how they recover.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const INT_ENGELSK_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_INT_ENGELSK_7_1,
  CHAPTER_INT_ENGELSK_7_2,
  CHAPTER_INT_ENGELSK_7_3,
  CHAPTER_INT_ENGELSK_7_4,
  CHAPTER_INT_ENGELSK_7_5,
];
