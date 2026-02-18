/**
 * Engelsk VG1 - Narrative versjoner Del 3 (Kapittel 5.1-7.4)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 *
 * Dekker:
 * - Section 5: Non-fiction and Critical Reading (5.1-5.4)
 * - Section 6: Writing Skills (6.1-6.5)
 * - Section 7: English as a World Language (7.1-7.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 5.1 NARRATIVE: Reading Non-fiction Texts
// ============================================================================

export const CHAPTER_ENGELSK_VG1_5_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-5-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.1',
  title: 'Reading Non-fiction Texts',
  subtitle: 'Narrative Version',
  description: 'Master the art of reading non-fiction with strategies that help you understand, remember, and evaluate what you read.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og sammenligne ulike sakprosatekster om samme emne fra ulike kilder og vurdere kildens troverdighet',
  ],
  linkedChapterId: 'engelsk-vg1-5-1',
  content: [
    {
      id: 'engelsk-vg1-5-1-n-intro',
      type: 'text',
      content: `## Why Non-fiction Reading Matters

Every day, you encounter non-fiction texts. News articles pop up on your phone before you've even finished your morning coffee. Your teachers assign textbook chapters that you need to understand for tomorrow's class. You read reviews before buying something online, trying to separate the genuine feedback from the fake ones. You scroll through Wikipedia when you're curious about something, following link after link until you've gone from reading about ancient Egypt to somehow learning about the mating habits of octopuses. All of this is non-fiction, and how well you read it shapes how well you understand the world around you.

Consider for a moment how much information flows through your life in a single day. Social media feeds, news notifications, educational materials, instruction manuals, emails, text messages with information embedded in them. We live in what scholars call the "information age," but perhaps a better term would be the "non-fiction age." The ability to read, understand, and critically evaluate non-fiction texts isn't just an academic skill anymore. It's a survival skill for navigating modern life.

But here's the thing: reading non-fiction is fundamentally different from reading a novel or a short story. When you read fiction, you can let yourself be carried along by the narrative flow. The author creates a world, and you immerse yourself in it. Your job is largely to experience and enjoy. With non-fiction, however, you need to be more active. You need to question what you're reading, evaluate the claims being made, organize information into meaningful categories, and connect new knowledge to what you already know. Passive reading of non-fiction leads to poor understanding and quick forgetting. Active reading leads to deep learning.

The good news? These active reading skills can be learned. They're not mysterious talents that some people have and others lack. They're techniques and habits that anyone can develop with practice. In this chapter, we'll explore strategies that will transform you from a passive reader into an active one. You'll learn how to approach a text before you even start reading, what to do while you're in the middle of it, and how to make sure you remember what you've learned afterward. By the time you finish, you'll have a complete toolkit for tackling any non-fiction text that comes your way.`,
    },
    {
      id: 'engelsk-vg1-5-1-n-section1',
      type: 'text',
      content: `## The World of Non-fiction

Non-fiction covers an enormous range of texts, and recognizing what type you're dealing with helps you read it more effectively. Think of it like knowing what sport you're playing before you step onto the field. The rules and strategies differ depending on the game. News articles aim to inform you about recent events, presenting the who, what, when, where, why, and how as clearly and quickly as possible. Opinion pieces and editorials try to persuade you to see things a certain way, marshaling evidence and rhetoric to change your mind. Academic texts present research and analysis, walking you through how scholars investigated a question and what they discovered. Reports document findings from investigations, surveys, or studies in a structured way. Biographies and memoirs tell true stories about real people, balancing factual accuracy with narrative engagement. Speeches capture moments when someone tried to move an audience, using the power of spoken language preserved in writing.

Each type has its own conventions, its own unwritten rules about how information is organized and presented. News articles usually put the most important information first, in what journalists call the "inverted pyramid" structure. This means you get the essential facts in the first paragraph or two, with less crucial details following. If you only read the headline and the first paragraph, you should still understand the core story. Academic texts often follow a different pattern: introduction, literature review, methodology, results, and discussion. This structure allows researchers to show their work, explaining not just what they found but how they found it and why it matters. Opinion pieces typically state a thesis early and then support it with arguments and evidence, building a case like a lawyer in court.

When you pick up a non-fiction text, spend a moment figuring out what type it is. This moment of recognition prepares you to read appropriately. Ask yourself: Is this trying to inform me, persuade me, or both? Is it presenting facts, opinions, or a mixture? Who wrote it, and why might they have written it? What publication or platform is it appearing on, and what does that tell me about its likely perspective? These questions prepare your mind for what's coming and help you read more critically. You wouldn't watch a documentary the same way you watch a political advertisement, and you shouldn't read a news article the same way you read an opinion column.`,
    },
    {
      id: 'engelsk-vg1-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on types of non-fiction:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-1-n-quiz1-q0',
            task: 'What is the "inverted pyramid" structure commonly used in news articles?',
            options: [
              { id: 'a', text: 'Starting with background information and building to the main point', isCorrect: false },
              { id: 'b', text: 'Putting the most important information first, then adding details', isCorrect: true },
              { id: 'c', text: 'Presenting arguments from both sides equally', isCorrect: false },
              { id: 'd', text: 'Ending with a surprising twist or conclusion', isCorrect: false },
            ],
            solution: 'The inverted pyramid puts the most crucial information at the top, followed by supporting details. This allows readers to get the key facts quickly, even if they don\'t read the entire article.',
          },
          {
            id: 'engelsk-vg1-5-1-n-quiz1-q1',
            task: 'What is the first question you should ask when picking up a non-fiction text?',
            options: [
              { id: 'a', text: 'How many pages is it?', isCorrect: false },
              { id: 'b', text: 'Is this trying to inform me, persuade me, or both?', isCorrect: true },
              { id: 'c', text: 'Is this written by a famous author?', isCorrect: false },
              { id: 'd', text: 'When was this published?', isCorrect: false },
            ],
            solution: 'Identifying whether a text aims to inform, persuade, or both helps you read appropriately. You approach a news article differently from an opinion piece because they have different purposes and use different strategies.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-1-n-section2',
      type: 'text',
      content: `## Before You Read: Setting Yourself Up for Success

Good readers don't just dive into a text like jumping into cold water. They prepare first, the way an athlete warms up before a game or a chef gathers ingredients before cooking. This preparation phase might seem like extra work, like you're delaying the "real" reading, but it actually saves time and dramatically improves comprehension. Think of it as an investment that pays dividends throughout your reading.

Start by surveying the text. This is like looking at a map before starting a journey. Look at the title and ask yourself what you expect the text to be about. What do you already associate with these words? Skim the headings and subheadings to get a sense of the structure, the path the author will take you on. Glance at any images, graphs, charts, or highlighted text. These visual elements are usually there because the author considered them important. Read the first paragraph and the last paragraph. The first paragraph typically introduces the topic and perhaps states the main argument. The last paragraph often summarizes the key points or draws conclusions. This preview gives your brain a framework, a mental scaffolding, to organize the information that's coming.

Next, consider your purpose. Why are you reading this text? The answer matters more than you might think, because your purpose should shape how you read. Are you looking for a specific piece of information, like a date or a definition? Do you need to understand the main argument well enough to explain it to someone else? Are you preparing for a discussion or writing an essay that responds to this text? Are you reading for pleasure or general knowledge? Your purpose affects your reading strategy. If you're looking for one specific fact, you might skim quickly, hunting for the relevant section. If you need deep understanding, you'll read more carefully, perhaps multiple times. If you're going to write about the text, you'll want to take notes. Matching your reading approach to your purpose makes you more efficient and effective.

Finally, activate what you already know about the topic. What have you heard or read before? What opinions do you already have? What questions come to mind? This isn't about judging the text before you read it or assuming you already know what it will say. It's about connecting new information to existing knowledge, which is actually how learning works at a neurological level. Your brain doesn't store information in isolation. It stores information by connecting it to what's already there. When you consciously activate your prior knowledge, you're preparing the neural connections that new information will attach to. You're also preparing yourself to notice when the text confirms, challenges, or adds to what you thought you knew.`,
    },
    {
      id: 'engelsk-vg1-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on pre-reading strategies:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-1-n-quiz2-q0',
            task: 'Why should you survey a text before reading it in detail?',
            options: [
              { id: 'a', text: 'To decide if the text is worth reading at all', isCorrect: false },
              { id: 'b', text: 'To give your brain a framework for organizing the incoming information', isCorrect: true },
              { id: 'c', text: 'To find mistakes in the text before you start', isCorrect: false },
              { id: 'd', text: 'To memorize the headings for a test', isCorrect: false },
            ],
            solution: 'Previewing a text creates mental scaffolding. When you have a sense of the structure and main topics, new information has somewhere to "stick." This makes reading faster and comprehension deeper.',
          },
          {
            id: 'engelsk-vg1-5-1-n-quiz2-q1',
            task: 'Why does activating prior knowledge before reading improve comprehension?',
            options: [
              { id: 'a', text: 'It helps you skip parts you already know', isCorrect: false },
              { id: 'b', text: 'Your brain stores new information by connecting it to existing knowledge', isCorrect: true },
              { id: 'c', text: 'It proves you are already an expert on the topic', isCorrect: false },
              { id: 'd', text: 'It makes the text easier to criticize', isCorrect: false },
            ],
            solution: 'Learning works by connecting new information to what you already know. When you consciously activate prior knowledge, you prepare the neural connections that new information will attach to, making comprehension and retention stronger.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-1-n-section3',
      type: 'text',
      content: `## While You Read: Active Engagement

Now comes the actual reading, but "active reading" means much more than just moving your eyes across the page. It means engaging with the text, questioning it, wrestling with it, and making it your own. If you finish reading a chapter and you feel like you were just a passive spectator, something went wrong. You should feel like you participated in a conversation.

Annotation is your best friend in this process. If you can write in the book or document, underline key points and write notes in the margins. Circle words you don't know. Draw arrows connecting related ideas. Put question marks next to things that confuse you. Write "yes!" or "no!" when you agree or disagree. If you can't write in the book, keep a notebook or digital document nearby where you record the same kinds of responses. Some readers use sticky notes. Others prefer highlighting with different colors for different purposes, perhaps yellow for main ideas, blue for supporting evidence, pink for things they want to look up later. The specific system matters less than having a system that works for you. The physical act of marking up a text forces you to think about what you're reading rather than letting the words wash over you passively.

As you read, constantly ask questions. What is the author's main point? What evidence supports this claim? Is the evidence convincing? Do I agree, and if not, why not? What's missing from this argument? Are there perspectives the author isn't considering? Is this fact or opinion, and how can I tell? Who might disagree with this, and what would they say? These questions keep you engaged and critical rather than passively absorbing whatever the author says. You're not just receiving information; you're actively processing it, evaluating it, responding to it.

Pay attention to how the text is structured. Authors organize their writing in patterns, and recognizing these patterns helps you follow their logic. Look for signal words that reveal the organization. Words like "first," "then," "next," and "finally" indicate chronological or sequential order. "However," "on the other hand," "in contrast," and "nevertheless" signal comparison, contrast, or contradiction. "Because," "therefore," "consequently," and "as a result" show cause and effect. "For example," "for instance," and "such as" introduce illustrations of a point. "Most importantly," "significantly," and "the key point is" highlight crucial information. When you notice these signals, you understand not just what the author is saying but how their argument is built.`,
    },
    {
      id: 'engelsk-vg1-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on active reading strategies:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-1-n-quiz3-q0',
            task: 'Which signal words typically indicate a cause-and-effect relationship?',
            options: [
              { id: 'a', text: 'First, second, finally', isCorrect: false },
              { id: 'b', text: 'Similarly, likewise, also', isCorrect: false },
              { id: 'c', text: 'Because, therefore, as a result', isCorrect: true },
              { id: 'd', text: 'However, although, despite', isCorrect: false },
            ],
            solution: 'Words like "because," "therefore," "consequently," and "as a result" signal that the author is explaining why something happened or what effects it had. Recognizing these helps you follow the logical connections in a text.',
          },
          {
            id: 'engelsk-vg1-5-1-n-quiz3-q1',
            task: 'Why is annotating a text more effective than just reading it?',
            options: [
              { id: 'a', text: 'It makes the text look more impressive', isCorrect: false },
              { id: 'b', text: 'The physical act of marking forces you to think about what you are reading', isCorrect: true },
              { id: 'c', text: 'Teachers give extra credit for annotations', isCorrect: false },
              { id: 'd', text: 'It helps you read faster', isCorrect: false },
            ],
            solution: 'Annotation transforms passive reading into active engagement. When you underline, circle, and write notes, you must decide what is important, what confuses you, and what you agree or disagree with - all of which deepens comprehension.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-1-n-section4',
      type: 'text',
      content: `## After You Read: Making It Stick

Reading is only part of the process. In fact, what you do after reading might be even more important than the reading itself. These post-reading activities determine whether the information stays with you for years or fades away within days. Your brain needs to process and consolidate what you've taken in, and you can help that process along.

Start by summarizing what you've read in your own words. This is crucial: don't look at the text while you do this. Close the book, look away from the screen, and try to explain the main points as if you were telling a friend who hasn't read it. What was this text about? What were the key claims or findings? What evidence was presented? This exercise, which psychologists call "retrieval practice," forces you to actively reconstruct the information rather than just passively recognize it. If you can't explain it clearly, you didn't really understand it, and you should go back and reread the sections that escaped you. Many students skip this step because it feels harder than just re-reading, but that difficulty is exactly the point. The effort of retrieval is what creates strong memories.

Next, evaluate what you've read. Now is the time to think critically about the content, not just understand it but assess it. Do you find the argument convincing? What are its strengths, and where are the weak spots? Do you agree with the author's conclusions, or do you see problems they didn't address? What evidence would make the argument stronger? Are there perspectives that weren't considered? Who might disagree and why? This critical evaluation is where you move from understanding to thinking, from being a recipient of information to being an evaluator of ideas.

Connect the new information to what you already know. How does this relate to other things you've learned, in this class or elsewhere? Does it confirm what you already believed, or does it challenge some of your existing ideas? Can you think of examples from your own life that illustrate these points? Can you apply this information to other situations? These connections serve two purposes: they strengthen your memory of the new information by linking it to existing knowledge, and they deepen your understanding by revealing patterns and relationships.

Finally, consider what questions you still have. No single text tells you everything about a topic. What would you like to learn more about? What remains unclear even after careful reading? What new questions did this reading raise? These questions can guide your future reading and learning, turning each text into a stepping stone rather than a dead end.`,
    },
    {
      id: 'engelsk-vg1-5-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on post-reading strategies:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-1-n-quiz4-q0',
            task: 'Why is summarizing in your own words more effective than re-reading the text?',
            options: [
              { id: 'a', text: 'It\'s faster than reading again', isCorrect: false },
              { id: 'b', text: 'It forces you to process and understand the information, not just recognize it', isCorrect: true },
              { id: 'c', text: 'It helps you memorize the exact words the author used', isCorrect: false },
              { id: 'd', text: 'It makes the text seem more interesting', isCorrect: false },
            ],
            solution: 'Recognition is easy but shallow. You might feel like you understand something when you read it, but that feeling can be misleading. Actively reconstructing information in your own words reveals gaps in understanding and creates stronger memories.',
          },
          {
            id: 'engelsk-vg1-5-1-n-quiz4-q1',
            task: 'What should you do if you cannot clearly summarize a section you just read?',
            options: [
              { id: 'a', text: 'Move on to the next section', isCorrect: false },
              { id: 'b', text: 'Ask someone else to explain it', isCorrect: false },
              { id: 'c', text: 'Go back and reread that section more carefully', isCorrect: true },
              { id: 'd', text: 'Give up on the text entirely', isCorrect: false },
            ],
            solution: 'If you cannot explain it clearly, you did not truly understand it. Going back to reread is not failure - it is an effective learning strategy. The inability to summarize reveals exactly which parts need more attention.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-1-n-section5',
      type: 'text',
      content: `## The SQ3R Method: A Complete System

All these strategies come together in a proven method called SQ3R, which stands for Survey, Question, Read, Recite, and Review. Developed by psychologist Francis Robinson in 1946, this approach has been refined over decades of research and practice. It's a systematic method that combines everything we've discussed into a single coherent process that you can apply to any non-fiction text.

Survey means previewing the text as we discussed earlier. Before reading in detail, skim the headings and subheadings. Look at any images, graphs, charts, or highlighted text. Read the introduction and conclusion. Get a sense of the overall structure and the big picture. This shouldn't take more than a few minutes, but those minutes prepare your brain to receive and organize the detailed information that's coming. You're building the skeleton onto which the flesh of details will attach.

Question means turning headings into questions. This is a simple but powerful technique. If a heading says "Causes of Climate Change," mentally transform it into "What are the causes of climate change?" If a section is titled "The Economic Impact of Automation," ask yourself, "What is the economic impact of automation?" Now you have something specific to look for as you read. You're not just passively receiving information; you're actively hunting for answers to questions. This keeps your mind engaged and gives you a clear purpose for each section.

Read means going through the text carefully, looking for answers to your questions. This is active reading as we discussed earlier: annotating, questioning, noticing structure and signal words. Don't rush through just to finish. Engage with each paragraph. When you find an answer to one of your questions, note it. When new questions arise, add them to your mental list.

Recite means stopping after each section to summarize what you've learned. Do this without looking at the text. Say it out loud if you can, or write it down, or explain it mentally as if you were teaching someone else. If you can't explain it clearly, that's valuable information. It means you should go back and reread that section. This step is where the real learning happens. Recitation converts shallow familiarity into deep understanding.

Review means going back over the whole text after you've finished. Look at your notes and annotations. Refresh your memory of the main points. Consider how everything connects. How does the beginning relate to the end? How do the different sections fit together? What's the overall argument or message? This big-picture review helps you consolidate your understanding and see patterns you might have missed while focused on details.

This method takes practice, and it will feel slow and awkward at first. You might be tempted to skip steps, especially recitation, which can feel uncomfortable. Resist that temptation. Once SQ3R becomes habit, you'll find that you understand more, remember more, and ultimately read more efficiently because you don't have to keep re-reading things you've forgotten.`,
    },
    {
      id: 'engelsk-vg1-5-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on the SQ3R method:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-1-n-quiz5-q0',
            task: 'In the SQ3R method, what does "Recite" involve?',
            options: [
              { id: 'a', text: 'Reading the text out loud', isCorrect: false },
              { id: 'b', text: 'Writing down everything you remember word for word', isCorrect: false },
              { id: 'c', text: 'Summarizing what you\'ve learned without looking at the text', isCorrect: true },
              { id: 'd', text: 'Asking the teacher to explain difficult parts', isCorrect: false },
            ],
            solution: 'Reciting means putting the information in your own words without looking at the source. This active recall strengthens memory and reveals whether you truly understood the material.',
          },
          {
            id: 'engelsk-vg1-5-1-n-quiz5-q1',
            task: 'What does the "Q" in SQ3R stand for, and what does it involve?',
            options: [
              { id: 'a', text: 'Quiz - testing yourself on the content', isCorrect: false },
              { id: 'b', text: 'Question - turning headings into questions to guide reading', isCorrect: true },
              { id: 'c', text: 'Query - looking up unknown words', isCorrect: false },
              { id: 'd', text: 'Qualify - judging the source\'s reliability', isCorrect: false },
            ],
            solution: 'The Q stands for Question. You transform headings into questions before reading each section. This gives you a specific purpose - hunting for answers keeps your mind engaged and turns passive reading into active learning.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-1-n-summary',
      type: 'text',
      content: `## Summary: Your Non-fiction Reading Toolkit

You now have a complete set of strategies for tackling non-fiction texts. Here's what to remember:

**Before Reading:**
Survey the text to get an overview. Consider your purpose for reading. Activate your prior knowledge about the topic.

**During Reading:**
Annotate actively with underlines, notes, and questions. Pay attention to text structure and signal words. Keep asking critical questions about the content.

**After Reading:**
Summarize in your own words. Evaluate the argument critically. Connect new information to existing knowledge. Identify remaining questions.

**The SQ3R Method:**
Survey, Question, Read, Recite, Review. A systematic approach that combines all these strategies into an effective reading routine.

**Key Terms:**
Active reading, annotation, text structure, signal words, SQ3R, summary, evaluation, prior knowledge.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 5.2 NARRATIVE: Comparing Sources
// ============================================================================

export const CHAPTER_ENGELSK_VG1_5_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-5-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.2',
  title: 'Comparing Sources',
  subtitle: 'Narrative Version',
  description: 'Learn why comparing multiple sources gives you a fuller picture and how to do it effectively.',
  estimatedMinutes: 40,
  competenceGoals: [
    'lese og sammenligne ulike sakprosatekster om samme emne fra ulike kilder og vurdere kildens troverdighet',
  ],
  linkedChapterId: 'engelsk-vg1-5-2',
  content: [
    {
      id: 'engelsk-vg1-5-2-n-intro',
      type: 'text',
      content: `## The Blind Men and the Elephant

There's an ancient parable, found in various forms across Indian, Sufi, and Buddhist traditions, about blind men encountering an elephant for the first time. In the story, each man touches a different part of the animal. The one who touches the trunk declares that an elephant is like a snake, long and flexible and muscular. Another feels a leg and insists with equal certainty that an elephant is like a tree trunk, thick and solid and rough. A third touches the side and declares it's like a wall, vast and flat. A fourth grasps the tail and argues it's like a rope. Each man is partly right, describing accurately what he experienced. But each is also profoundly limited, and none has anything close to the complete picture of what an elephant actually is.

This ancient parable perfectly captures what happens when we rely on a single source for information about any complex topic. Every article, every report, every news story, every documentary, every podcast captures only part of reality. The journalist makes choices, conscious and unconscious, about what to include and what to leave out, what to emphasize and what to mention only briefly. The researcher focuses on certain questions and ignores others, limited by time, funding, and methodology. The writer has a perspective shaped by their background, their training, their employer, and their personal experiences, whether they acknowledge this or not. No source, however good, shows you the whole elephant.

That's why comparing sources is so important, and why this skill deserves an entire chapter. When you read multiple accounts of the same topic, ideally from different perspectives and different types of sources, you start to see the elephant from different angles. You notice what's consistent across sources, which probably represents solid, well-established fact that nobody disputes. You notice what differs between sources, which reveals areas of perspective, interpretation, or ongoing uncertainty. You notice what's missing from some accounts but present in others, revealing the blind spots that each individual source has. This is how you move from the limited understanding of a single perspective toward something approaching genuine, nuanced understanding of complex topics.`,
    },
    {
      id: 'engelsk-vg1-5-2-n-section1',
      type: 'text',
      content: `## Why Sources Differ

Before we talk about how to compare sources effectively, let's understand why they differ in the first place. This isn't a mystery or a flaw in how information works. Sources don't just randomly present different information like witnesses at a crime scene who saw different things. The differences usually follow predictable patterns that, once you understand them, reveal important things about the source itself and help you read more wisely.

One major reason sources differ is perspective. Consider a story about a labor strike at a factory. If you read an account written from the workers' perspective, you'll learn about low wages, unsafe conditions, management's broken promises, and the courage it took to walk off the job. If you read an account from the company management's perspective, you'll hear about unreasonable union demands, the economic pressures facing the business, efforts to compromise that were rejected, and the damage the strike is causing to customers and shareholders. If you read a neutral journalist's account, you might get some of both, but the journalist still has to decide whose quotes to include, which facts to emphasize, and how to frame the story. None of these sources is necessarily lying. They're seeing the same situation from different positions, emphasizing the facts that look important from where they stand. Understanding this helps you read more charitably. People who disagree with you aren't always wrong or dishonest. They might just be standing in a different place and seeing different things.

Another reason sources differ is purpose. A news article aims to inform quickly, giving you the essential facts as efficiently as possible. An academic paper aims to analyze deeply, carefully examining evidence and addressing counterarguments. An opinion piece aims to persuade, using evidence and rhetoric to change your mind. A government report aims to document, creating an official record with careful attention to procedure. An advertisement aims to sell. A textbook aims to teach. These different purposes shape what information is included, what's emphasized, and how it's presented.

Access to information also matters. Some journalists have better sources than others, closer relationships with insiders who tell them things off the record. Some researchers have access to proprietary data that others don't. Some writers witnessed events firsthand while others are working from secondhand accounts. Sometimes the differences between accounts come down to who knew what and when, information that may or may not be available to later readers.

Finally, there's bias. This word often carries negative connotations, as if biased sources are bad and unbiased sources are good. But bias is simply a tendency to favor certain interpretations, certain framings, certain conclusions. Everyone has some bias, including you, including me. Complete objectivity is impossible. The question isn't whether a source is biased, because it always is. The question is what its bias is and how that bias might affect the information you're receiving.`,
    },
    {
      id: 'engelsk-vg1-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on why sources differ:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-2-n-quiz1-q0',
            task: 'When two sources report different details about the same event, what is the MOST likely explanation?',
            options: [
              { id: 'a', text: 'One source is deliberately lying', isCorrect: false },
              { id: 'b', text: 'They have different perspectives, purposes, or access to information', isCorrect: true },
              { id: 'c', text: 'The event didn\'t actually happen', isCorrect: false },
              { id: 'd', text: 'Neither source can be trusted', isCorrect: false },
            ],
            solution: 'Different reports often reflect different vantage points rather than dishonesty. Understanding why sources differ helps you evaluate them more fairly and extract useful information from each.',
          },
          {
            id: 'engelsk-vg1-5-2-n-quiz1-q1',
            task: 'What does the parable of the blind men and the elephant illustrate about information sources?',
            options: [
              { id: 'a', text: 'All sources are equally wrong', isCorrect: false },
              { id: 'b', text: 'Each source captures only part of reality, and multiple sources are needed for fuller understanding', isCorrect: true },
              { id: 'c', text: 'You should only trust primary sources', isCorrect: false },
              { id: 'd', text: 'Older sources are always more reliable', isCorrect: false },
            ],
            solution: 'Like each blind man touching only part of the elephant, each source captures only part of any complex topic. No single source shows the complete picture. Comparing multiple sources from different angles gives you a fuller understanding.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-2-n-section2',
      type: 'text',
      content: `## A Framework for Comparison

When you have multiple sources on the same topic, you need a systematic way to compare them. Without a system, you might get overwhelmed by differences or miss important patterns. Here's a framework that covers the key areas and gives you a structured approach to follow.

Start with content. This is the most obvious comparison point: what information does each source actually include? It can help to make a list or a table of the main facts and claims from each source. Where do they overlap? Where do they differ? If both sources independently report that something happened, or cite the same statistics, that information is probably reliable since multiple sources are confirming it. This is what historians call corroboration, and it's one of the most powerful tools for establishing what's true. If sources disagree about facts, not just interpretations but actual facts, that's a red flag. You need to investigate further to determine which account is accurate, or whether the truth is more complicated than either source acknowledges.

Next, look at what's omitted. This is subtler but equally important. Sometimes what a source doesn't say is as revealing as what it does say. Does one article mention crucial historical context that another leaves out entirely? Does one report include quotes from affected community members that another ignores? Does one analysis consider economic factors while another focuses only on political ones? Every source has limited space and must make choices about what to include. These choices shape the reader's understanding. Omissions aren't always intentional bias. Sometimes writers don't know about certain facts, or don't have space to include them. But intentional or not, omissions affect how you understand the story. Comparing sources reveals these gaps.

Then consider perspective. Who wrote this, and where are they coming from? What background, training, or institutional affiliation might influence their view? A story about pharmaceutical pricing looks different from a journalist, a pharmaceutical company executive, a patient advocate, and a health economist. None of them is wrong to have a perspective, but you need to know what that perspective is to interpret the information appropriately. Are the writers personally affected by the topic they're covering? Do they have financial interests? Do they work for an organization with a stake in the outcome? These questions don't automatically disqualify a source, but they help you understand its angle.

Examine the evidence. What supports the claims being made? Are sources cited so you can check them yourself? Is data provided, with clear explanations of where it came from and how it was gathered? Can the claims be independently verified, or do you have to take the author's word for it? Strong sources back up their assertions with evidence that you can evaluate. Weak sources make claims without support, asking you to simply trust them.

Finally, think about purpose. Is the source trying to inform, persuade, entertain, or sell something? A news article, an advocacy campaign, a documentary film, and an advertisement all present information differently because they have different goals. Understanding the purpose helps you understand why the information is presented in a particular way.`,
    },
    {
      id: 'engelsk-vg1-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on the comparison framework:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-2-n-quiz2-q0',
            task: 'Why is it important to notice what a source OMITS, not just what it includes?',
            options: [
              { id: 'a', text: 'Omissions prove the source is unreliable', isCorrect: false },
              { id: 'b', text: 'Omissions shape the reader\'s understanding and may reveal perspective', isCorrect: true },
              { id: 'c', text: 'Good sources never omit anything', isCorrect: false },
              { id: 'd', text: 'Omissions are always intentional deception', isCorrect: false },
            ],
            solution: 'Every source must select what to include, and these selections shape understanding. A source might omit context that changes the meaning, or voices that complicate the narrative. Noticing omissions helps you see the fuller picture.',
          },
          {
            id: 'engelsk-vg1-5-2-n-quiz2-q1',
            task: 'When multiple independent sources confirm the same fact, what is this called?',
            options: [
              { id: 'a', text: 'Bias', isCorrect: false },
              { id: 'b', text: 'Corroboration', isCorrect: true },
              { id: 'c', text: 'Plagiarism', isCorrect: false },
              { id: 'd', text: 'Interpretation', isCorrect: false },
            ],
            solution: 'Corroboration is when multiple independent sources confirm the same information. It is one of the most powerful tools for establishing what is true. If several sources independently report the same facts, those facts are probably reliable.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-2-n-section3',
      type: 'text',
      content: `## Comparing Sources in Practice

Let's walk through how this works with a concrete example. Imagine you're researching a new government policy, and you find articles in three different publications.

The first article, from a news agency, focuses on the facts: what the policy is, when it takes effect, who it affects. It quotes officials explaining the policy and includes some statistics. The tone is neutral and informative.

The second article, from a publication that generally supports the current government, emphasizes the benefits of the policy. It includes testimonials from people who will gain from it. It mentions potential drawbacks briefly but focuses on why the policy is needed.

The third article, from a publication critical of the government, focuses on the costs and risks. It quotes experts who are skeptical. It emphasizes who might be harmed and questions the government's motives.

Which one is right? In a sense, they all are. The first gives you the basic facts. The second helps you understand the case for the policy. The third helps you understand the case against it. By reading all three, you understand the issue far better than you would from any single source.

This is the power of comparing sources. You're not looking for the one "true" account. You're building understanding from multiple perspectives.`,
    },
    {
      id: 'engelsk-vg1-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test yourself on comparing sources in practice:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-2-n-quiz3-q0',
            task: 'When comparing sources with different political perspectives, what should you do?',
            options: [
              { id: 'a', text: 'Only trust the source that matches your own views', isCorrect: false },
              { id: 'b', text: 'Dismiss all of them as biased', isCorrect: false },
              { id: 'c', text: 'Use each to understand different aspects and arguments about the issue', isCorrect: true },
              { id: 'd', text: 'Find a source with no perspective at all', isCorrect: false },
            ],
            solution: 'Sources with different perspectives can each contribute to your understanding. One might highlight benefits while another highlights risks. By considering both, you develop a more complete and nuanced view.',
          },
          {
            id: 'engelsk-vg1-5-2-n-quiz3-q1',
            task: 'Is it possible to find a completely unbiased source?',
            options: [
              { id: 'a', text: 'Yes - academic sources are completely unbiased', isCorrect: false },
              { id: 'b', text: 'No - every source has some perspective, but awareness of bias helps you read critically', isCorrect: true },
              { id: 'c', text: 'Yes - government sources are always neutral', isCorrect: false },
              { id: 'd', text: 'Bias only exists in opinion pieces', isCorrect: false },
            ],
            solution: 'Complete objectivity is impossible. Everyone has some bias shaped by background, training, and experience. The question is not whether a source is biased but what its bias is and how it might affect the information.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-2-n-section4',
      type: 'text',
      content: `## Dealing with Contradictions

Sometimes sources don't just emphasize different things. They directly contradict each other. Source A says X happened. Source B says X didn't happen. What do you do then?

First, check the nature of the claim. Is it a factual claim that can be verified, or is it an interpretation that might legitimately differ? "The temperature was 30 degrees" is verifiable. "The weather was pleasant" is subjective. Contradictions about verifiable facts are more troubling than disagreements about interpretation.

Second, consider the sources. Which has better access to the information? Which has a stronger track record? Which provides more evidence for its claim? A contradiction between a primary source and a secondary source usually favors the primary source. A contradiction between an expert and a non-expert usually favors the expert.

Third, look for additional sources. If two sources disagree, find a third or fourth. See which version is more widely supported. Be careful, though. Popularity doesn't equal truth. Many sources repeating the same error are still wrong.

Fourth, accept uncertainty when necessary. Sometimes you simply can't determine which account is correct. That's okay. Acknowledging uncertainty is more honest than pretending you know something you don't.`,
    },
    {
      id: 'engelsk-vg1-5-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test yourself on dealing with contradictions:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-2-n-quiz4-q0',
            task: 'When two sources directly contradict each other on a factual claim, what is the FIRST thing to consider?',
            options: [
              { id: 'a', text: 'Which source is more popular', isCorrect: false },
              { id: 'b', text: 'Which source has better access to the information and stronger evidence', isCorrect: true },
              { id: 'c', text: 'Which source was published first', isCorrect: false },
              { id: 'd', text: 'Which source matches your initial assumptions', isCorrect: false },
            ],
            solution: 'When sources contradict, evaluate their credibility. Who has better access to the information? Who provides stronger evidence? A primary source with documentation is more reliable than a secondary source making claims without evidence.',
          },
          {
            id: 'engelsk-vg1-5-2-n-quiz4-q1',
            task: 'When you cannot determine which contradicting source is correct, what should you do?',
            options: [
              { id: 'a', text: 'Pick the one you prefer', isCorrect: false },
              { id: 'b', text: 'Acknowledge the uncertainty honestly', isCorrect: true },
              { id: 'c', text: 'Assume both are wrong', isCorrect: false },
              { id: 'd', text: 'Stop researching the topic', isCorrect: false },
            ],
            solution: 'Acknowledging uncertainty is more honest and intellectually mature than pretending you know something you do not. Sometimes the evidence is genuinely unclear, and saying "I am not sure" is the most accurate response.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-2-n-section5',
      type: 'text',
      content: `## Building Your Own Understanding

The ultimate goal of comparing sources isn't to find the "best" one and ignore the others. It's to build your own informed understanding of a topic.

Think of yourself as a detective gathering evidence. Each source is a witness, and each witness has their own perspective and limitations. Your job is to piece together what probably happened based on all the testimony, weighing each witness's reliability and perspective.

This means you'll often end up with a view that doesn't perfectly match any single source. You might agree with Source A about the facts but with Source B about the interpretation. You might find that all your sources missed something important that you noticed by comparing them. This is good. It means you're thinking for yourself.

It also means being humble about what you know. If experts disagree, you probably shouldn't be too confident in your own conclusion. If the evidence is mixed, acknowledge that. If you realize you need more information, go find it.

Comparing sources is a skill that improves with practice. The more you do it, the better you get at spotting patterns, identifying biases, and synthesizing information. It's one of the most valuable skills you can develop in a world overflowing with information.`,
    },
    {
      id: 'engelsk-vg1-5-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Test yourself on building your own understanding:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-2-n-quiz5-q0',
            task: 'What is the ultimate goal of comparing multiple sources?',
            options: [
              { id: 'a', text: 'To find the single best source and only use that one', isCorrect: false },
              { id: 'b', text: 'To prove that all sources are equally unreliable', isCorrect: false },
              { id: 'c', text: 'To build your own informed understanding by synthesizing multiple perspectives', isCorrect: true },
              { id: 'd', text: 'To write a report listing all the contradictions', isCorrect: false },
            ],
            solution: 'Comparing sources helps you move beyond any single perspective to develop your own informed view. You weigh different accounts, consider different arguments, and synthesize them into an understanding that is more complete than any single source provides.',
          },
          {
            id: 'engelsk-vg1-5-2-n-quiz5-q1',
            task: 'Why should you stay humble about your conclusions even after comparing sources?',
            options: [
              { id: 'a', text: 'Because comparing sources always leads to confusion', isCorrect: false },
              { id: 'b', text: 'If experts disagree, you should not be overconfident in your own conclusion', isCorrect: true },
              { id: 'c', text: 'Humility makes you seem smarter', isCorrect: false },
              { id: 'd', text: 'You should never form your own opinion', isCorrect: false },
            ],
            solution: 'Intellectual humility is essential. If experts with years of experience disagree about an issue, you should not be too confident in your own conclusion. Acknowledging the limits of your understanding is a sign of good critical thinking, not weakness.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-2-n-summary',
      type: 'text',
      content: `## Summary: The Art of Comparison

You've learned why and how to compare multiple sources. Here are the key takeaways:

**Why Sources Differ:**
Perspective, purpose, access to information, and bias all shape how sources present information. Different doesn't necessarily mean wrong.

**Comparison Framework:**
Compare content (what's included), omissions (what's left out), perspective (where the author stands), evidence (what supports claims), and purpose (why it was written).

**Handling Contradictions:**
Check if claims are verifiable or interpretive. Consider source reliability and evidence. Seek additional sources. Accept uncertainty when necessary.

**Building Understanding:**
Synthesize information from multiple sources. Develop your own view. Stay humble about what you know.

**Key Terms:**
Perspective, bias, omission, primary source, secondary source, synthesis, corroboration.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 5.3 NARRATIVE: Source Criticism and Evaluation
// ============================================================================

export const CHAPTER_ENGELSK_VG1_5_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-5-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.3',
  title: 'Source Criticism and Evaluation',
  subtitle: 'Narrative Version',
  description: 'Develop critical thinking skills to evaluate whether sources are reliable and trustworthy.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke ulike kilder på en kritisk, hensiktsmessig og etterrettelig måte',
  ],
  linkedChapterId: 'engelsk-vg1-5-3',
  content: [
    {
      id: 'engelsk-vg1-5-3-n-intro',
      type: 'text',
      content: `## Why Source Criticism Matters Now More Than Ever

We live in an age of information abundance, unprecedented in human history. For most of our species' existence, information was scarce and hard to come by. If you wanted to learn something, you needed access to people who knew it or books that contained it. Libraries were treasures. Knowledge was guarded. Now, in the span of just a few decades, that scarcity has flipped to overwhelming abundance. Anyone can publish anything online, instantly, to a potentially global audience. A professional journalist's carefully researched article appears in your social media feed right next to a random person's uninformed blog post. A peer-reviewed scientific study competes for attention with a viral claim made by someone with no expertise whatsoever. A legitimate news organization's website looks, at first glance, remarkably similar to a propaganda outlet designed to look like a news organization.

In this environment, the ability to evaluate sources isn't just an academic skill that teachers care about. It's a practical survival skill for navigating modern life. The gatekeepers who used to filter information, the editors and publishers and librarians who decided what was worth reading, have largely disappeared from online spaces. Their absence means freedom, which is wonderful, but it also means you're on your own. Nobody is protecting you from misinformation. You have to protect yourself.

Poor source evaluation leads to poor decisions with real consequences. People have made serious health choices based on medical misinformation, sometimes with tragic results. They've been deceived by financial scams that looked legitimate. They've formed strong opinions about important political and social issues based on unreliable, biased, or completely fabricated information. They've shared false stories that damaged other people's reputations. And in most cases, it's not because these people were stupid or gullible. It's because they didn't have the tools to evaluate what they were reading. They weren't trained in source criticism.

The good news is that source criticism can be learned. There are specific questions you can ask and specific techniques you can use, systematic approaches that work across different types of sources and different kinds of claims. In this chapter, we'll cover these approaches in detail. By the end, you'll have a complete toolkit for navigating the information landscape with confidence, distinguishing reliable sources from unreliable ones, and making better decisions about what to believe.`,
    },
    {
      id: 'engelsk-vg1-5-3-n-section1',
      type: 'text',
      content: `## The CRAAP Test: A Systematic Approach

One widely used framework for evaluating sources goes by the memorable name CRAAP. Developed by librarians at California State University, Chico, this framework has been taught in schools and libraries around the world because it's both comprehensive and easy to remember. Each letter stands for a criterion you should consider: Currency, Relevance, Authority, Accuracy, and Purpose. Together, these five criteria give you a systematic way to evaluate almost any source.

Currency asks: How recent is this information? Depending on your topic, this matters a great deal or very little. If you're researching current events, technology, medicine, or rapidly changing fields, an article from last week might already be outdated. Medical recommendations change as new research emerges. Technology evolves at a dizzying pace. Political situations shift. For these topics, you need recent sources. On the other hand, if you're researching ancient history, classic literature, or stable scientific principles, a ten-year-old book or even an older one might be perfectly fine. Shakespeare's plays haven't changed since they were written. The basic laws of physics remain constant. The key question isn't simply "how old is this source?" but rather "is this information current enough for my specific purpose?" Always check when the source was created or last updated.

Relevance asks: Does this source actually address your question or topic? This might seem obvious, but it's a common mistake to use sources that are only tangentially related to what you're researching. A source can be excellent in its field but still not useful for your specific purpose. Check whether the depth and scope match what you need. Is it too basic for your level of inquiry? Too advanced? Too narrow? Too broad? Also consider the intended audience. A children's encyclopedia article on climate change is probably not appropriate for a high school research paper, even if it's factually accurate. A highly technical academic paper might be overkill for a basic overview. Match the source to your needs.

Authority asks: Who created this, and are they credible to speak on this topic? Look for the author's credentials and expertise. What's their background? What qualifies them to write about this subject? Check the publisher or organization behind the source. Is it a respected institution? A reputable publisher? A known news organization? Or is it an unknown entity that you can't verify? Be especially careful with anonymous sources or sources where you can't determine who created them. On the internet, anonymity is easy, and people sometimes pretend to be experts when they're not. Look for "about" pages, author biographies, and institutional affiliations that you can verify.

We'll explore Accuracy and Purpose in the next sections, as they deserve deeper and more detailed treatment.`,
    },
    {
      id: 'engelsk-vg1-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on the CRAAP test:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-vg1-5-3-n-quiz1-q0',
            task: 'When evaluating "Currency," what question are you primarily asking?',
            options: [
              { id: 'a', text: 'How much did this source cost to produce?', isCorrect: false },
              { id: 'b', text: 'Is this information recent enough for my purpose?', isCorrect: true },
              { id: 'c', text: 'Is this source widely accepted by others?', isCorrect: false },
              { id: 'd', text: 'How popular is this source?', isCorrect: false },
            ],
            solution: 'Currency refers to timeliness. Some topics require very recent information (current events, technology, medicine), while others don\'t (history, literature analysis). The key is whether the information is current enough for your specific needs.',
          },
          {
            id: 'engelsk-vg1-5-3-n-quiz1-q1',
            task: 'What does CRAAP stand for?',
            options: [
              { id: 'a', text: 'Content, Readability, Accuracy, Accessibility, Persuasion', isCorrect: false },
              { id: 'b', text: 'Currency, Relevance, Authority, Accuracy, Purpose', isCorrect: true },
              { id: 'c', text: 'Clarity, Research, Analysis, Assessment, Presentation', isCorrect: false },
              { id: 'd', text: 'Context, Reliability, Authorship, Argument, Publication', isCorrect: false },
            ],
            solution: 'CRAAP stands for Currency, Relevance, Authority, Accuracy, and Purpose. These five criteria provide a systematic way to evaluate almost any source of information.',
          },
        ],
      },
    },
    {
      id: 'engelsk-vg1-5-3-n-section2',
      type: 'text',
      content: `## Accuracy: Can You Trust the Information?

Accuracy is perhaps the most crucial criterion. A source can be current, relevant, and written by someone with credentials, but still contain errors or falsehoods.

To evaluate accuracy, first look at the evidence. Does the source cite other sources? Are claims supported by data, research, or documentation? Can you verify the key facts independently? Be especially skeptical of sources that make claims without any supporting evidence.

Check for internal consistency. Does the source contradict itself? Do the numbers add up? Does the logic hold together? Careless errors often signal deeper problems with reliability.

Look at the writing quality. Frequent spelling and grammar errors suggest the source wasn't carefully edited. This doesn't automatically mean the information is wrong, but professional, reliable sources usually maintain basic quality standards.

Consider whether the source has been reviewed. Academic journals use peer review, where experts check articles before publication. Reputable news organizations have editorial processes. Self-published content has no such checks. This doesn't make self-published material automatically wrong, but it means you need to be more careful.

Finally, compare with other sources. If a claim appears in one source but contradicts everything else you've read, be suspicious. Extraordinary claims require extraordinary evidence.`,
    },
    {
      id: 'engelsk-vg1-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Which of the following is the BEST indicator that a source is likely accurate?',
        options: [
          { id: 'a', text: 'It appears at the top of search results', isCorrect: false },
          { id: 'b', text: 'It uses technical vocabulary', isCorrect: false },
          { id: 'c', text: 'Its claims can be verified against other reliable sources', isCorrect: true },
          { id: 'd', text: 'It has many followers on social media', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'The most reliable test of accuracy is whether claims can be independently verified. Search engine ranking, technical language, and social media popularity don\'t guarantee accuracy. Verifiable, corroborated claims do.',
      },
    },
    {
      id: 'engelsk-vg1-5-3-n-section3',
      type: 'text',
      content: `## Purpose: Why Does This Source Exist?

Every source exists for a reason, and understanding that reason helps you interpret the information appropriately.

Some sources aim primarily to inform. News reporting, encyclopedias, and textbooks generally fall into this category. Their goal is to present facts and explanations. Even informative sources have some perspective, but they're at least trying to be balanced and factual.

Some sources aim to persuade. Opinion pieces, political advertisements, and advocacy group publications are trying to change your mind. This doesn't make them useless. A well-argued opinion piece can be valuable. But you should recognize that you're reading an argument, not a neutral presentation of facts.

Some sources aim to sell. Advertisements are obvious, but some content is subtler. A blog post about "the best laptops" might be funded by affiliate commissions. A health website might be selling supplements. When money is involved, be alert to how that might influence the information.

Some sources aim to entertain. Satire sites like The Onion write fake news for humor. This is fine if you recognize it as satire, but dangerous if you mistake it for real news. Many satire articles have been shared as if they were genuine.

Ask yourself: What does the creator of this source gain from my believing it? Follow the incentives, and you'll understand the source better.`,
    },
    {
      id: 'engelsk-vg1-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'A website reviewing products gives the highest rating to items that pay affiliate commissions. What source evaluation criterion does this violate?',
        options: [
          { id: 'a', text: 'Currency - the reviews are outdated', isCorrect: false },
          { id: 'b', text: 'Authority - the reviewers lack expertise', isCorrect: false },
          { id: 'c', text: 'Purpose - financial incentives may distort the information', isCorrect: true },
          { id: 'd', text: 'Relevance - the products don\'t match your needs', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'When a source has financial incentives tied to what it recommends, its purpose is compromised. The reviews may be more about earning commissions than providing honest assessments. This is a Purpose issue.',
      },
    },
    {
      id: 'engelsk-vg1-5-3-n-section4',
      type: 'text',
      content: `## Lateral Reading: Looking Beyond the Source

Here's a technique that professional fact-checkers use: instead of spending all your time evaluating the source itself, open new tabs and see what others say about it.

This is called lateral reading. Rather than reading vertically down through a source, you read laterally across different sources about that source. What do experts say about this organization? Has this claim been fact-checked? What's this author's reputation?

Lateral reading is powerful because sources can be very good at making themselves look credible. A professional-looking website with an authoritative name might actually be a front for propaganda. You can't tell just by looking at the source itself. But a quick search reveals what others know about it.

When you encounter a new source, try this: Before reading deeply, open a new tab. Search for the name of the organization or author. Add words like "reliability" or "bias" or "criticism." See what comes up. Check if fact-checking sites have evaluated any of their claims. This takes only a few minutes but can save you from being misled.

Red flags to watch for include: no author identified, domain names that mimic legitimate sites (like ABCnews.com.co instead of abcnews.com), emotional or sensational language, requests to share before reading, and claims that seem too good or too outrageous to be true.`,
    },
    {
      id: 'engelsk-vg1-5-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is "lateral reading"?',
        options: [
          { id: 'a', text: 'Reading a text from left to right instead of top to bottom', isCorrect: false },
          { id: 'b', text: 'Checking what other sources say ABOUT a source rather than just reading the source itself', isCorrect: true },
          { id: 'c', text: 'Reading multiple articles at the same time', isCorrect: false },
          { id: 'd', text: 'Reading only the sidebars and captions', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Lateral reading means leaving the source to investigate it from outside. What do fact-checkers say? What\'s the organization\'s reputation? This is more effective than trying to evaluate a source purely from within.',
      },
    },
    {
      id: 'engelsk-vg1-5-3-n-section5',
      type: 'text',
      content: `## Putting It All Together

Source criticism isn't about being cynical or distrustful of everything. It's about being appropriately cautious and making informed judgments about what to believe and use.

When you encounter a new source, run through the CRAAP test. Is it current enough? Is it relevant to your needs? Who created it and are they credible? Can you verify the accuracy? What is the purpose, and how might that affect the information?

Use lateral reading to check the source's reputation. A few minutes of searching can reveal a lot.

Pay attention to red flags: anonymous authors, sensational claims, lack of evidence, requests to share immediately, and URLs that look suspicious.

Remember that no source is perfect. Even excellent sources have some bias and occasionally make mistakes. The goal isn't to find perfect sources. It's to understand the limitations of your sources and account for them in how you use the information.

And finally, maintain intellectual humility. If you're not an expert in a field, be careful about dismissing the consensus of those who are. Critical thinking means being appropriately skeptical, not reflexively suspicious of everything that challenges your existing beliefs.`,
    },
    {
      id: 'engelsk-vg1-5-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the relationship between source criticism and intellectual humility?',
        options: [
          { id: 'a', text: 'Source criticism means you should trust your instincts over experts', isCorrect: false },
          { id: 'b', text: 'Critical thinking means being appropriately skeptical while recognizing the limits of your own knowledge', isCorrect: true },
          { id: 'c', text: 'Intellectual humility means accepting all sources equally', isCorrect: false },
          { id: 'd', text: 'Good source criticism eliminates any need for humility', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Critical thinking includes recognizing what you don\'t know. Being skeptical of sources is important, but so is respecting expertise and acknowledging when you lack the knowledge to fully evaluate something.',
      },
    },
    {
      id: 'engelsk-vg1-5-3-n-summary',
      type: 'text',
      content: `## Summary: Your Source Evaluation Toolkit

You now have a systematic approach to evaluating sources. Here's the recap:

**The CRAAP Test:**
Currency (timeliness), Relevance (fit for purpose), Authority (creator credibility), Accuracy (verifiable information), Purpose (why it exists).

**Evaluating Accuracy:**
Check evidence and citations. Look for internal consistency. Note writing quality. Consider whether it's been reviewed. Compare with other sources.

**Understanding Purpose:**
Sources may aim to inform, persuade, sell, or entertain. Understanding purpose helps you interpret information appropriately.

**Lateral Reading:**
Search for what others say about the source. Check fact-checkers. Investigate reputation. This is often more efficient than evaluating from within.

**Red Flags:**
Anonymous authors, sensational language, no evidence for claims, suspicious URLs, requests to share before reading.

**Key Terms:**
CRAAP test, currency, relevance, authority, accuracy, purpose, lateral reading, fact-checking, red flags.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 5.4 NARRATIVE: Media Literacy
// ============================================================================

export const CHAPTER_ENGELSK_VG1_5_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-5-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '5.4',
  title: 'Media Literacy',
  subtitle: 'Narrative Version',
  description: 'Navigate the modern media landscape with the critical skills you need to separate truth from manipulation.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke ulike kilder på en kritisk, hensiktsmessig og etterrettelig måte',
  ],
  linkedChapterId: 'engelsk-vg1-5-4',
  content: [
    {
      id: 'engelsk-vg1-5-4-n-intro',
      type: 'text',
      content: `## Swimming in Media

Think about everything you've consumed today, everything you've read, watched, heard, or scrolled past. You probably checked your phone within minutes of waking up, perhaps before you even got out of bed. You scrolled through social media, seeing a mix of posts from friends, celebrities, brands, and accounts you don't even remember following. You saw headlines and news alerts. You encountered images and videos, some meaningful and some forgettable. Maybe you watched something on a streaming service over breakfast or listened to a podcast on your commute. Throughout the day, you encountered advertisements, some obvious and some disguised as content. You read emails, text messages, articles, and signs. By the time you go to sleep tonight, you'll have been exposed to more media messages than your great-grandparents encountered in a month, possibly even a year.

This constant media immersion is utterly new in human history. For hundreds of thousands of years, our ancestors lived in small communities where they knew everyone they encountered. Information was scarce and precious. News traveled slowly. If someone told you something, you could usually evaluate their trustworthiness based on years of personal experience with them. Our brains evolved for that world, developing intuitions about trust, attention, and information that served us well in those circumstances. Now, within the span of just a few generations, we've been plunged into a completely different environment. Information is not scarce but overwhelming in its abundance. News travels instantly around the globe. The people and organizations sending you information are mostly strangers, their messages filtered and promoted by algorithms whose workings you don't understand, motivated by agendas that may or may not align with your interests.

Media literacy is the set of skills you need to navigate this radically new environment. It's about understanding how media works, the economics, the technologies, the psychology, the persuasion techniques. It's about understanding how media affects you, how it shapes your perceptions, emotions, and beliefs. It's about learning to engage with media critically rather than absorbing it passively. Importantly, media literacy is not about becoming cynical and dismissing all media, nor is it about disconnecting from media entirely, which is nearly impossible in modern life anyway. It's about becoming a conscious, thoughtful, intentional consumer rather than a passive recipient. It's about being in control of your media diet rather than having it control you.`,
    },
    {
      id: 'engelsk-vg1-5-4-n-section1',
      type: 'text',
      content: `## Five Questions for Any Media Message

Media scholars and educators have developed a set of core questions that help you analyze any piece of media, from a newspaper article to a TikTok video, from a documentary film to a meme, from an advertisement to a podcast. These questions are deceptively simple, but making them a habit transforms how you engage with media. They become a kind of mental checklist that runs automatically whenever you encounter any form of media.

First: Who created this message, and why? Someone made every piece of media you encounter. That might be a professional journalist, a marketing team, a random teenager, an advocacy organization, a government agency, or an anonymous troll. Who are they? What organization do they represent, if any? What perspective do they bring based on their background, their employer, their ideology? What might they gain from you believing this message? Sometimes the creator is obvious and prominently credited. Sometimes you need to dig, checking bylines, examining websites, researching organizations. Sometimes you can't find out at all, which is itself valuable information.

Second: What techniques are used to attract my attention? Media creators know how to hook you. They use emotional images, surprising claims, beautiful people, dramatic music. Understanding these techniques helps you see past them to the actual content.

Third: What lifestyles, values, and points of view are represented? Every piece of media normalizes certain ways of living and thinking while ignoring or dismissing others. Who is shown as normal? Who is absent? What assumptions does the creator seem to make?

Fourth: How might different people understand this message differently? Your response to media depends on who you are. A news story about immigration feels different if you're an immigrant than if you've never met one. Recognizing this helps you understand why people react differently to the same content.

Fifth: What is omitted from this message? Every piece of media leaves things out. What perspectives aren't shown? What facts aren't mentioned? What context is missing? Sometimes omissions are innocent limitations of time and space. Sometimes they're strategic choices to shape your perception.`,
    },
    {
      id: 'engelsk-vg1-5-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Why is it important to ask "What is omitted from this message?"',
        options: [
          { id: 'a', text: 'Because omissions are always deliberate deception', isCorrect: false },
          { id: 'b', text: 'Because media has limited time/space and what\'s left out shapes your understanding', isCorrect: true },
          { id: 'c', text: 'Because only bad media leaves things out', isCorrect: false },
          { id: 'd', text: 'Because you should always find everything omitted before trusting a source', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'All media must select what to include, meaning something is always left out. These omissions may be innocent or strategic, but either way they shape your perception. Being aware of what\'s missing helps you seek a fuller picture.',
      },
    },
    {
      id: 'engelsk-vg1-5-4-n-section2',
      type: 'text',
      content: `## Understanding Misinformation and Disinformation

In discussions of media literacy, two terms come up constantly: misinformation and disinformation. They sound similar but mean different things.

Misinformation is false information spread without intent to deceive. Someone shares an inaccurate article because they genuinely believe it's true. They're not trying to mislead anyone. They're just wrong. Misinformation spreads because people don't fact-check before sharing, or because false information often seems more interesting than true information.

Disinformation is false information spread deliberately to deceive. Someone creates or shares content knowing it's false because they want to manipulate opinion, cause confusion, or achieve some other goal. Disinformation campaigns can be sophisticated, run by governments or organized groups with significant resources.

Both are problems, but they require different responses. Misinformation is often corrected by better information. Disinformation is trickier because the people spreading it aren't confused. They're strategic.

There are many specific types to watch for. Fake news looks like legitimate journalism but is fabricated. Clickbait uses sensational headlines that don't match the content. Propaganda presents one-sided information to promote a viewpoint. Conspiracy theories offer unfounded explanations for events. Satire is meant to be humorous but sometimes gets mistaken for real news. Out-of-context content is real information used misleadingly. Manipulated content includes altered images or videos.`,
    },
    {
      id: 'engelsk-vg1-5-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What is the key difference between misinformation and disinformation?',
        options: [
          { id: 'a', text: 'Misinformation is online, disinformation is in print', isCorrect: false },
          { id: 'b', text: 'Misinformation is spread unintentionally, disinformation is spread deliberately to deceive', isCorrect: true },
          { id: 'c', text: 'Misinformation is harmless, disinformation is dangerous', isCorrect: false },
          { id: 'd', text: 'Misinformation comes from individuals, disinformation comes from governments', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The distinction is about intent. Both involve false information, but misinformation is spread by people who believe it\'s true, while disinformation is spread by people who know it\'s false and want to deceive.',
      },
    },
    {
      id: 'engelsk-vg1-5-4-n-section3',
      type: 'text',
      content: `## How Social Media Changes Everything

Social media has transformed how we encounter information, and understanding these changes is crucial for media literacy.

First, everyone is a publisher now. Previously, gatekeepers like editors and producers decided what reached audiences. Now anyone can post anything. This democratizes information but also removes quality filters.

Second, algorithms decide what you see. Social media platforms show you content based on what they think will keep you engaged. This often means emotional, controversial, or extreme content. You're not seeing a neutral sample of what's out there. You're seeing what the algorithm chose for you.

Third, information spreads faster than verification. A false claim can circle the globe while fact-checkers are still investigating. And corrections rarely spread as far as the original misinformation.

Fourth, filter bubbles form. Because algorithms show you content similar to what you've engaged with before, you may rarely encounter perspectives that challenge your views. You might think "everyone" agrees with you when actually you're just not seeing the disagreement.

Fifth, the line between content and advertising blurs. Sponsored posts look like regular posts. Influencers promote products without always disclosing the relationship. Native advertising is designed to look like regular articles.

Being aware of these dynamics doesn't mean abandoning social media. It means using it with your eyes open.`,
    },
    {
      id: 'engelsk-vg1-5-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is a "filter bubble" in social media?',
        options: [
          { id: 'a', text: 'A feature that blocks inappropriate content', isCorrect: false },
          { id: 'b', text: 'When algorithms show you mostly content that matches your existing views', isCorrect: true },
          { id: 'c', text: 'A type of privacy setting', isCorrect: false },
          { id: 'd', text: 'A way to filter out advertisements', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Filter bubbles form when algorithms personalize your feed based on past engagement. You end up seeing mostly content that confirms your existing beliefs, rarely encountering challenging perspectives. This can distort your sense of what "everyone" thinks.',
      },
    },
    {
      id: 'engelsk-vg1-5-4-n-section4',
      type: 'text',
      content: `## Developing Your Media Literacy

Media literacy isn't just a set of facts to memorize. It's a set of habits to develop. Here are practices that will make you a more literate media consumer.

Slow down. Misinformation spreads partly because people share without reading or thinking. Before you react to or share something, pause. Read beyond the headline. Check the source. Consider whether it might be false or misleading.

Seek out diverse sources. Actively look for news and perspectives from outside your usual diet. Follow people you disagree with. Read publications from different political perspectives. This breaks filter bubbles and gives you a more accurate picture of the world.

Check before you share. If something seems important, verify it before amplifying it. A quick search can often reveal whether something is accurate. If you can't verify it, consider not sharing it.

Be aware of your emotions. Misinformation often triggers strong emotional reactions, that's part of how it spreads. When something makes you very angry or very excited, that's exactly when you should pause and verify.

Practice lateral reading. When you encounter a new source, open a new tab and investigate it. What do others say about this publication? Has this claim been fact-checked?

Accept uncertainty. Not everything can be verified immediately. It's okay to say "I don't know" or "I'm not sure about this." Premature certainty often leads to sharing false information.`,
    },
    {
      id: 'engelsk-vg1-5-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Why should you be ESPECIALLY careful when media content triggers a strong emotional reaction?',
        options: [
          { id: 'a', text: 'Because emotional content is always false', isCorrect: false },
          { id: 'b', text: 'Because misinformation often spreads by triggering emotions that bypass critical thinking', isCorrect: true },
          { id: 'c', text: 'Because you should never feel emotions about news', isCorrect: false },
          { id: 'd', text: 'Because emotional reactions mean you\'re being manipulated', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Strong emotions can bypass our critical thinking. Content that makes us very angry or excited is more likely to be shared without verification. This is why misinformation is often designed to provoke emotional reactions.',
      },
    },
    {
      id: 'engelsk-vg1-5-4-n-section5',
      type: 'text',
      content: `## Your Role in the Media Ecosystem

Here's something important to remember: You're not just a consumer of media. You're also a participant in the media ecosystem. When you share, like, comment, or create, you're shaping what others see.

This gives you responsibility. When you share misinformation, even unintentionally, you contribute to its spread. When you share quality information, you help it reach others. When you call out false claims respectfully, you can help correct the record.

It also gives you power. Your choices about what to engage with send signals to algorithms. If you engage with quality journalism, algorithms learn to show you more of it. If you engage with sensationalism, you get more sensationalism. Collectively, our engagement patterns shape the media landscape.

This doesn't mean you need to feel guilty about everything you do online. But it does mean being thoughtful. Before sharing something, ask: Is this true? Is it helpful? Am I contributing positively to the conversation?

Media literacy, ultimately, is about being an active participant rather than a passive consumer. It's about understanding the systems you're part of and making intentional choices within them. In a world overflowing with information, that awareness is more valuable than ever.`,
    },
    {
      id: 'engelsk-vg1-5-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-5-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'In what way are you a PARTICIPANT, not just a consumer, in the media ecosystem?',
        options: [
          { id: 'a', text: 'Only professional journalists are participants', isCorrect: false },
          { id: 'b', text: 'By paying for subscriptions', isCorrect: false },
          { id: 'c', text: 'Through sharing, liking, commenting, and creating content that shapes what others see', isCorrect: true },
          { id: 'd', text: 'By watching advertisements', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Every interaction you have with media, whether sharing, liking, commenting, or creating, affects what others see and what algorithms promote. You\'re an active participant whose choices shape the information environment.',
      },
    },
    {
      id: 'engelsk-vg1-5-4-n-summary',
      type: 'text',
      content: `## Summary: Your Media Literacy Foundations

You've learned the essential skills for navigating today's media landscape. Here's what to remember:

**Five Questions for Any Media:**
Who created this? What techniques attract attention? What values are represented? How might others understand it? What is omitted?

**Misinformation vs Disinformation:**
Misinformation is unintentionally false. Disinformation is deliberately deceptive. Both require vigilance.

**Social Media Dynamics:**
Everyone can publish. Algorithms curate your feed. Information spreads faster than verification. Filter bubbles form. Advertising and content blur together.

**Media Literacy Habits:**
Slow down. Seek diverse sources. Check before sharing. Watch your emotional reactions. Practice lateral reading. Accept uncertainty.

**Your Role:**
You're a participant, not just a consumer. Your engagement choices shape the media ecosystem.

**Key Terms:**
Media literacy, misinformation, disinformation, filter bubble, algorithm, clickbait, propaganda, fact-checking.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6.1 NARRATIVE: Formal vs Informal Writing
// ============================================================================

export const CHAPTER_ENGELSK_VG1_6_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-6-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.1',
  title: 'Formal vs Informal Writing',
  subtitle: 'Narrative Version',
  description: 'Master the art of choosing the right tone and style for any writing situation.',
  estimatedMinutes: 35,
  competenceGoals: [
    'skrive ulike formelle og uformelle tekster, også komplekse, med struktur og sammenheng',
  ],
  linkedChapterId: 'engelsk-vg1-6-1',
  content: [
    {
      id: 'engelsk-vg1-6-1-n-intro',
      type: 'text',
      content: `## Dressing Your Words for the Occasion

Imagine showing up to a job interview wearing pajamas. You might be the most qualified candidate in the applicant pool, but your appearance would undermine you before you said a single word. Now imagine the opposite: wearing a tuxedo to a casual barbecue with friends. Again, you'd be dressed wrong for the occasion. In both cases, people would notice. They might not take you seriously, or they might find you strange, off-putting, or out of touch with social norms. Clothing communicates, and wearing the wrong "outfit" sends the wrong message.

Writing works exactly the same way, and this parallel isn't just a metaphor. The "clothes" your writing wears, its level of formality, its vocabulary, its sentence structure, and its overall tone, needs to match the situation. An email to your teacher should sound different from a text message to your best friend. A job application should sound different from a social media post. A letter of complaint to a company should sound different from a journal entry. A research paper should sound different from a personal blog. This isn't about one style being inherently better than another. Formal writing isn't "correct" and informal writing "incorrect." They're different tools for different situations. What matters is choosing appropriately.

This might seem obvious, and at a basic level, you probably already do it intuitively. You don't text your grandmother the same way you text your friends, right? But developing conscious awareness of these shifts, understanding precisely what makes writing more or less formal and why, gives you power. It lets you adapt deliberately rather than just following instinct. It lets you succeed in new situations where your instincts might not be enough. It lets you catch yourself when you've accidentally struck the wrong tone and fix it.

In this chapter, we'll explore the full spectrum from formal to informal writing. You'll learn to recognize the specific linguistic features that distinguish them, understand when to use each and why, and develop the flexibility to shift between registers as needed. This skill will serve you throughout your life: in school, where different assignments require different styles; at work, where you'll need to communicate with colleagues, supervisors, clients, and others; and in personal life, where you navigate relationships through words.`,
    },
    {
      id: 'engelsk-vg1-6-1-n-section1',
      type: 'text',
      content: `## Understanding Register

Linguists use the word "register" to describe the level of formality in language. It's a technical term worth knowing because it captures something important: formality isn't just one thing. Think of register as a dial that can be turned from very formal to very informal, with many, many positions in between. It's not a binary switch between "formal" and "informal" but a gradient, a spectrum, a continuum with infinite points.

At the formal end of this spectrum, you find academic papers, legal documents, official government correspondence, business reports, scholarly journals, and professional communications between people who don't know each other well. This language is careful, precise, and often deliberately impersonal. It avoids contractions, which are too casual. It avoids slang and colloquialisms, which are too informal and potentially unclear. It uses sophisticated, precise vocabulary rather than everyday words. It employs complex sentence structures that show relationships between ideas through subordinate clauses and careful punctuation. It aims for objectivity, or at least the appearance of objectivity.

At the informal end, you find text messages, casual emails to friends, social media posts, and personal diary entries. This language is relaxed, conversational, and often playful. It embraces contractions, slang, fragments, and emojis. It sounds like how you might actually talk to someone you know well.

Most writing falls somewhere between these extremes. A blog post might be conversational but still grammatically correct. A work email might be friendly but professional. Learning to navigate this spectrum is what writing maturity looks like.

The key question is always: Who is my audience, and what do they expect? A mismatch between your register and your audience's expectations creates friction. Too formal, and you seem cold or pompous. Too informal, and you seem unprofessional or disrespectful.`,
    },
    {
      id: 'engelsk-vg1-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What does "register" mean in the context of writing?',
        options: [
          { id: 'a', text: 'The process of signing up for a course', isCorrect: false },
          { id: 'b', text: 'The level of formality in language', isCorrect: true },
          { id: 'c', text: 'The number of words in a document', isCorrect: false },
          { id: 'd', text: 'The font style used in writing', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Register refers to how formal or informal your language is. Different situations call for different registers, from very formal (academic writing) to very informal (texting friends).',
      },
    },
    {
      id: 'engelsk-vg1-6-1-n-section2',
      type: 'text',
      content: `## Features of Formal Writing

Let's break down what makes writing formal. Understanding these features helps you both produce formal writing when needed and recognize it when you encounter it.

Vocabulary in formal writing tends to be more sophisticated. Instead of "get," you might write "obtain" or "acquire." Instead of "show," you might write "demonstrate" or "illustrate." Instead of "a lot," you might write "numerous" or "substantial." This doesn't mean using big words for their own sake. It means choosing precise words that convey exactly what you mean.

Sentence structure is typically more complex. Formal writing uses longer sentences with subordinate clauses, carefully constructed to show relationships between ideas. Short, punchy sentences that work great in informal writing can seem choppy or simplistic in formal contexts.

Formal writing avoids contractions. "Do not" instead of "don't." "It is" instead of "it's." "Cannot" instead of "can't." This small change significantly affects the tone.

The voice is often more impersonal. Formal academic writing traditionally avoids "I" and "you," using passive voice or third person instead. "The experiment was conducted" rather than "We conducted the experiment." This convention is changing in some fields, but it remains common.

Finally, formal writing is careful and precise. Every word is chosen deliberately. Claims are qualified appropriately. Sources are cited. There's little room for humor or casual asides.`,
    },
    {
      id: 'engelsk-vg1-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Which of the following is a characteristic of formal writing?',
        options: [
          { id: 'a', text: 'Frequent use of contractions like "don\'t" and "can\'t"', isCorrect: false },
          { id: 'b', text: 'Short, punchy sentences and fragments', isCorrect: false },
          { id: 'c', text: 'Sophisticated vocabulary and complex sentence structures', isCorrect: true },
          { id: 'd', text: 'Heavy use of slang and emojis', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Formal writing typically uses more sophisticated vocabulary and longer, more complex sentences. It avoids contractions, slang, and casual expressions in favor of precise, careful language.',
      },
    },
    {
      id: 'engelsk-vg1-6-1-n-section3',
      type: 'text',
      content: `## Features of Informal Writing

Informal writing is not simply "bad" formal writing. It has its own conventions and techniques that make it effective for appropriate contexts.

Vocabulary is everyday and accessible. You use the words you'd actually use in conversation. Slang and colloquialisms are acceptable. The goal is to sound natural and relatable, not impressive.

Sentences vary more in length and structure. Fragments are fine. Questions are common. The rhythm of informal writing often mimics the rhythm of speech, with pauses, interruptions, and asides.

Contractions are normal and expected. "Don't," "can't," "it's," "they're." Avoiding contractions in informal writing actually sounds strange, overly stiff and unnatural.

The voice is personal. First person is common. You address the reader directly as "you." You share opinions and reactions. The writer's personality comes through.

Humor, emotion, and spontaneity are welcome. A joke, an exclamation, an emoji. These human touches make informal writing engaging and personable.

The key is that informal doesn't mean careless. Good informal writing is still clear, coherent, and appropriate for its purpose. It just follows different conventions than formal writing.`,
    },
    {
      id: 'engelsk-vg1-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why might using contractions sound STRANGE in informal writing?',
        options: [
          { id: 'a', text: 'This statement is incorrect - using contractions sounds natural in informal writing', isCorrect: false },
          { id: 'b', text: 'Wait, the question has it backwards - AVOIDING contractions sounds strange in informal writing', isCorrect: true },
          { id: 'c', text: 'Contractions are grammatically incorrect', isCorrect: false },
          { id: 'd', text: 'Contractions are too hard to understand', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The question was tricky! In informal writing, using contractions is normal and expected. It\'s AVOIDING contractions that sounds strange and overly stiff in casual contexts.',
      },
    },
    {
      id: 'engelsk-vg1-6-1-n-section4',
      type: 'text',
      content: `## Choosing the Right Register

So how do you decide which register to use? Consider these factors.

Your relationship with the reader matters most. Writing to a friend? Informal. Writing to a professor you've never met? Formal. Writing to a colleague you know well? Somewhere in between.

The purpose of your writing affects register. An application letter requires formality because you want to be taken seriously. A thank-you note to a friend can be casual.

The medium plays a role. Texts and social media posts are almost always informal. Academic papers are almost always formal. Emails vary depending on who you're writing to.

The subject matter can influence register. Discussing a serious topic might call for more formality even with someone you know well. Discussing casual plans can be informal even in a work context.

When in doubt, err slightly toward formal. It's usually better to seem a bit too professional than too casual. You can always loosen up in subsequent communications once you've established a relationship.

The best writers can shift smoothly between registers as the situation requires. They're not locked into one style. They're flexible, adapting their language to serve their purpose and audience.`,
    },
    {
      id: 'engelsk-vg1-6-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'When you\'re unsure what register to use, what is generally the safest approach?',
        options: [
          { id: 'a', text: 'Always use the most informal register possible', isCorrect: false },
          { id: 'b', text: 'Err slightly toward formal, then adjust as needed', isCorrect: true },
          { id: 'c', text: 'Use a mix of formal and informal in the same text', isCorrect: false },
          { id: 'd', text: 'Ask the reader which register they prefer', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'When uncertain, slight formality is safer. Seeming a bit professional is rarely a problem, but seeming too casual can undermine your credibility. You can always become more informal once a relationship is established.',
      },
    },
    {
      id: 'engelsk-vg1-6-1-n-section5',
      type: 'text',
      content: `## Practicing Register Shifts

The skill of shifting between registers develops through practice. Here are some exercises you can do.

Try rewriting the same message in different registers. Take a simple idea like "I can't come to the meeting tomorrow because I have a doctor's appointment." How would you write this in a formal email to your boss? In a text to a colleague you're friendly with? In an official letter? Each version will be different.

Pay attention to the writing around you. Notice how different publications, websites, and people write. What makes a text message sound like a text message? What makes an academic paper sound academic? Analyze the specific features you observe.

Get feedback on your register choices. When you're unsure, ask someone if your writing sounds appropriate for the situation. Sometimes we're blind to how our own writing comes across.

Read widely across registers. The more exposure you have to different types of writing, the more naturally you'll develop flexibility. Read everything from literary fiction to social media posts, from news articles to academic papers.

Remember, no register is inherently better than another. Formal writing isn't "good" and informal writing isn't "bad." They're tools for different purposes. Mastery means having both tools in your kit and knowing when to use each.`,
    },
    {
      id: 'engelsk-vg1-6-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What does "mastery of register" look like?',
        options: [
          { id: 'a', text: 'Always writing in the most formal style possible', isCorrect: false },
          { id: 'b', text: 'Avoiding informal writing completely', isCorrect: false },
          { id: 'c', text: 'Having flexibility to shift between registers as situations require', isCorrect: true },
          { id: 'd', text: 'Using the same style for all writing', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Writing mastery means being able to use different registers effectively. Neither formal nor informal is inherently better - they\'re tools for different situations. Skilled writers adapt their style to their audience and purpose.',
      },
    },
    {
      id: 'engelsk-vg1-6-1-n-summary',
      type: 'text',
      content: `## Summary: Dressing Your Words Right

You've learned how to navigate the spectrum from formal to informal writing. Here are the key points:

**Understanding Register:**
Register is the level of formality in language. It ranges from very formal to very informal, with many positions in between.

**Formal Writing Features:**
Sophisticated vocabulary, complex sentences, no contractions, impersonal voice, precision and care.

**Informal Writing Features:**
Everyday vocabulary, varied sentence structures including fragments, contractions welcome, personal voice, room for humor and emotion.

**Choosing Register:**
Consider your relationship with the reader, purpose, medium, and subject matter. When uncertain, err toward formal.

**Building Flexibility:**
Practice rewriting in different registers. Study writing around you. Get feedback. Read widely.

**Key Terms:**
Register, formal writing, informal writing, contractions, voice, audience awareness.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6.2 NARRATIVE: Argumentative Writing
// ============================================================================

export const CHAPTER_ENGELSK_VG1_6_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-6-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.2',
  title: 'Argumentative Writing',
  subtitle: 'Narrative Version',
  description: 'Learn to build persuasive arguments that convince readers through logic, evidence, and skillful writing.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive ulike tekster som beskriver, diskuterer, begrunner og reflekterer, tilpasset formål, mottaker og situasjon',
  ],
  linkedChapterId: 'engelsk-vg1-6-2',
  content: [
    {
      id: 'engelsk-vg1-6-2-n-intro',
      type: 'text',
      content: `## The Power of a Good Argument

Every day, you encounter arguments, probably more than you realize. Politicians argue for policies that will affect your life. Advertisers argue, usually implicitly, that you should buy their products. News commentators argue that certain events should be interpreted in certain ways. Your friends argue about which movie to see or which restaurant to try. Your family members argue about household decisions. At school, you debate ideas in discussions. You probably make arguments too, sometimes conscious and sometimes not: about what's fair, what's true, what should happen next, why you deserve something, why someone else is wrong.

But most of these everyday arguments are sloppy. They rely on raw emotion rather than reasoned evidence. They use repetition as if saying something more times makes it more true. They substitute volume for logic, as if shouting made an argument stronger. They deploy rhetorical tricks that persuade without proving. They attack people instead of ideas. They present false choices. They cherry-pick evidence while ignoring counterexamples. Most everyday arguments, frankly, are not very good arguments.

A well-constructed written argument is something different entirely. It's a carefully built case that leads the reader step by step toward a conclusion, with each step supported by evidence and each connection made explicit. It anticipates objections and addresses them. It acknowledges complexity and nuance. It distinguishes between what's certain and what's probable. It treats the reader as an intelligent person who deserves reasons, not just assertions. Done well, it's one of the most powerful forms of communication. The ability to construct such arguments is one of the most valuable skills you can develop.

In this chapter, we'll break down the craft of argumentative writing. You'll learn how to state a clear, strong thesis. You'll learn how to build body paragraphs that provide evidence and analysis. You'll learn how to handle counter-arguments in a way that strengthens rather than weakens your position. You'll learn how to structure your essay for maximum persuasive impact. These skills will serve you immediately in school essays, but they'll also serve you throughout your life: whenever you need to convince anyone of anything in writing, from job applications to business proposals to letters to the editor.`,
    },
    {
      id: 'engelsk-vg1-6-2-n-section1',
      type: 'text',
      content: `## The Thesis: Your Argument's Foundation

Every argumentative essay needs a thesis statement, a single sentence that states your main argument clearly and specifically. This thesis is the foundation upon which everything else is built. It's the answer to the question "What are you arguing?" Every piece of evidence, every paragraph, every sentence in your essay exists to support this central claim. If something doesn't support your thesis, it probably shouldn't be in your essay. The thesis is your organizing principle, your compass, your north star.

Finding the right thesis is often the hardest part of writing an argument. You might know generally what you want to say, but crystallizing that into a single, clear, specific sentence takes thought. A good thesis has several characteristics. First, it's specific rather than vague. "Social media is bad" is too vague to be useful as a thesis. Bad how? Bad for whom? Bad in what circumstances? You couldn't write a focused essay defending such a broad claim. A better thesis might be: "Social media platforms should be legally required to verify users' ages because current self-reported age systems fail to protect children from harmful content." This is specific enough to argue. It tells you exactly what the essay will prove. Second, a good thesis is debatable. If no reasonable person would disagree with your thesis, you don't have an argument. "Murder is wrong" is not a thesis because (almost) everyone agrees. A thesis needs to stake out a position that someone could challenge.

Your thesis typically appears at the end of your introduction. The introduction hooks the reader's attention, provides necessary background, and then presents the thesis as the culmination. The reader should finish your introduction knowing exactly what you'll argue.

Here's a technique for testing your thesis: Can you imagine a reasonable person disagreeing? If not, you might not have an argument. "Education is important" isn't debatable since everyone agrees. "Standardized testing does more harm than good in education" is debatable. Someone could argue the opposite.

The thesis drives everything else. Every paragraph should connect back to it. Every piece of evidence should support it. If something doesn't serve your thesis, it probably doesn't belong in your essay.`,
    },
    {
      id: 'engelsk-vg1-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Which of the following is the BEST thesis statement?',
        options: [
          { id: 'a', text: 'Climate change is a problem.', isCorrect: false },
          { id: 'b', text: 'This essay will discuss school uniforms.', isCorrect: false },
          { id: 'c', text: 'Mandatory school uniforms reduce bullying and should be implemented in all public schools.', isCorrect: true },
          { id: 'd', text: 'Many people have opinions about social media.', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'A strong thesis is specific and debatable. Option C states a clear position that someone could argue against, and it\'s specific about what should happen. The other options are too vague or merely descriptive.',
      },
    },
    {
      id: 'engelsk-vg1-6-2-n-section2',
      type: 'text',
      content: `## Building Body Paragraphs: The PEEL Method

Each body paragraph in an argumentative essay should make one clear point that supports your thesis. The PEEL structure helps you build effective paragraphs: Point, Evidence, Explanation, Link.

Point is your topic sentence. It states the main idea of this paragraph, which should be one reason or argument supporting your thesis. Start strong and clear. The reader should know immediately what this paragraph will be about.

Evidence is the support for your point. This might be statistics, research findings, expert quotes, examples, or logical reasoning. Without evidence, you're just making claims. With evidence, you're making an argument.

Explanation is where many writers fall short. Don't assume the evidence speaks for itself. Explain how and why this evidence supports your point. What does it mean? Why does it matter? This is your analysis, and it's often the most important part of the paragraph.

Link connects this paragraph back to your thesis and/or forward to the next paragraph. Remind the reader how this point fits into your larger argument. Create a bridge to what comes next.

Let's see this in action. Point: "Excessive social media use disrupts adolescent sleep." Evidence: "A 2019 study in the Journal of Adolescent Health found that teenagers who used social media for more than three hours daily were twice as likely to report sleep problems." Explanation: "This disruption occurs because blue light from screens suppresses melatonin production, and the stimulating content keeps minds active when they should be winding down. Sleep deprivation, in turn, impairs learning and emotional regulation." Link: "Given the crucial role of sleep in teenage development, this evidence alone justifies limiting social media access for minors."`,
    },
    {
      id: 'engelsk-vg1-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'In the PEEL structure, what does "Explanation" require you to do?',
        options: [
          { id: 'a', text: 'Provide a quote from an expert', isCorrect: false },
          { id: 'b', text: 'State your topic sentence', isCorrect: false },
          { id: 'c', text: 'Analyze how and why the evidence supports your point', isCorrect: true },
          { id: 'd', text: 'Transition to the next paragraph', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'The Explanation is your analysis. You explain how the evidence supports your argument, why it matters, and what it means. This is where your thinking shows, not just your research.',
      },
    },
    {
      id: 'engelsk-vg1-6-2-n-section3',
      type: 'text',
      content: `## Handling Counter-Arguments

Strong argumentative writing doesn't pretend opposing views don't exist. It acknowledges them and responds to them. This is called addressing counter-arguments, and it actually strengthens your position.

Why does this work? First, it shows fairness. You're not ignoring inconvenient perspectives. You've considered them and still reached your conclusion. Second, it shows thoroughness. You've thought about the issue from multiple angles. Third, it preempts objections. If you address what skeptical readers are thinking, they can't dismiss your argument as one-sided.

There are several ways to handle counter-arguments. You can concede and refute: acknowledge that the opposing point has some validity, then explain why your position is still stronger. You can rebut directly: explain why the counter-argument is flawed in its logic or evidence. You can contextualize: show that the counter-argument, while true in some circumstances, doesn't apply here.

A typical structure dedicates one body paragraph to counter-arguments, often placed after your main arguments but before your conclusion. You might write: "Critics argue that... This concern is understandable, but... Furthermore... Therefore, while the objection raises valid considerations, it does not outweigh the benefits of..."

What you should not do is present counter-arguments and leave them hanging. Every objection you raise, you must respond to. Otherwise, you've just done your opponent's work for them.`,
    },
    {
      id: 'engelsk-vg1-6-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why does addressing counter-arguments STRENGTHEN your essay?',
        options: [
          { id: 'a', text: 'It makes your essay longer', isCorrect: false },
          { id: 'b', text: 'It shows you\'ve considered multiple perspectives and still reached your conclusion', isCorrect: true },
          { id: 'c', text: 'It confuses readers about your actual position', isCorrect: false },
          { id: 'd', text: 'It\'s required by essay formatting rules', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Addressing counter-arguments demonstrates fairness, thoroughness, and confidence. A reader who sees you\'ve considered objections and responded to them is more likely to trust your conclusion.',
      },
    },
    {
      id: 'engelsk-vg1-6-2-n-section4',
      type: 'text',
      content: `## Introduction and Conclusion

Your introduction does three things: hooks the reader, provides context, and states your thesis.

The hook is your opening. It should grab attention and make the reader want to continue. You might start with a surprising statistic, a provocative question, a relevant anecdote, or a bold statement. Avoid clichés like "Since the beginning of time" or "Webster's dictionary defines..."

After the hook, provide the background your reader needs. What's the issue? Why does it matter? What's the debate? Don't assume your reader knows everything you know. But be concise. This is context, not the main argument.

Then comes your thesis, typically the last sentence of your introduction. By this point, the reader should be oriented and ready to follow your argument.

Your conclusion is not just a summary, though it does briefly recap your main points. More importantly, it shows the significance of your argument. So what? Why does this matter? What are the implications or consequences? What should happen next?

End strong. Your final sentence should be memorable. It might call for action, pose a thought-provoking question, or connect to a broader theme. Don't end with a whimper. Don't introduce new arguments. Leave the reader with something to think about.`,
    },
    {
      id: 'engelsk-vg1-6-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What should your conclusion do BEYOND summarizing your main points?',
        options: [
          { id: 'a', text: 'Introduce new arguments you didn\'t have space for earlier', isCorrect: false },
          { id: 'b', text: 'Show the significance of your argument and leave a memorable final impression', isCorrect: true },
          { id: 'c', text: 'Admit weaknesses in your argument', isCorrect: false },
          { id: 'd', text: 'Thank the reader for reading', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A strong conclusion goes beyond summary to show why your argument matters. What are the implications? What should happen now? End with something memorable that resonates with the reader.',
      },
    },
    {
      id: 'engelsk-vg1-6-2-n-section5',
      type: 'text',
      content: `## Common Pitfalls to Avoid

Even with a good structure, argumentative essays can go wrong. Here are mistakes to watch for.

Weak evidence is a killer. Anecdotes are not data. "My friend said" is not proof. Make sure your evidence comes from credible sources and actually supports your claims. Quality matters more than quantity.

Logical fallacies undermine your argument. Ad hominem attacks (attacking the person rather than their argument), straw man arguments (misrepresenting opposing views to make them easier to attack), false dilemmas (presenting only two options when more exist), and appeals to emotion without evidence, these weaken your credibility even if readers can't name the fallacy.

Overstatement damages trust. Words like "always," "never," "everyone," and "no one" are usually wrong. "Studies suggest" is more honest than "Science proves." Nuance isn't weakness; it's intellectual honesty.

Ignoring complexity makes your argument seem naive. Real issues are complicated. Acknowledging complexity while still maintaining a position shows sophisticated thinking.

Poor transitions make essays feel choppy. Each paragraph should flow logically from the one before. Use transition words and phrases. Make sure the reader can follow your train of thought.

Finally, remember that argumentative writing is about persuasion, not just assertion. You need to bring your reader along through logic and evidence, not just state your opinion loudly.`,
    },
    {
      id: 'engelsk-vg1-6-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why should you avoid words like "always" and "never" in argumentative writing?',
        options: [
          { id: 'a', text: 'They make sentences too long', isCorrect: false },
          { id: 'b', text: 'They\'re grammatically incorrect', isCorrect: false },
          { id: 'c', text: 'They\'re usually overstatements that damage your credibility', isCorrect: true },
          { id: 'd', text: 'They\'re too informal for academic writing', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Absolute terms like "always" and "never" are usually wrong and easy to disprove with a single counter-example. More nuanced language like "often" or "rarely" is more honest and actually more persuasive.',
      },
    },
    {
      id: 'engelsk-vg1-6-2-n-summary',
      type: 'text',
      content: `## Summary: Building Persuasive Arguments

You've learned the essential skills for argumentative writing. Here's the recap:

**The Thesis:**
One clear, specific, debatable sentence stating your main argument. Everything else supports this.

**Body Paragraphs (PEEL):**
Point (topic sentence), Evidence (support), Explanation (analysis), Link (connection to thesis).

**Counter-Arguments:**
Acknowledge opposing views and respond to them. This shows fairness and strengthens your position.

**Introduction:**
Hook attention, provide context, state your thesis.

**Conclusion:**
Summarize briefly, show significance, end memorably.

**Pitfalls to Avoid:**
Weak evidence, logical fallacies, overstatement, ignoring complexity, poor transitions.

**Key Terms:**
Thesis statement, PEEL structure, counter-argument, refutation, hook, logical fallacy.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6.3 NARRATIVE: Analytical and Reflective Writing
// ============================================================================

export const CHAPTER_ENGELSK_VG1_6_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-6-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.3',
  title: 'Analytical and Reflective Writing',
  subtitle: 'Narrative Version',
  description: 'Develop skills for examining texts deeply and reflecting meaningfully on your experiences.',
  estimatedMinutes: 40,
  competenceGoals: [
    'skrive ulike tekster som beskriver, diskuterer, begrunner og reflekterer',
  ],
  linkedChapterId: 'engelsk-vg1-6-3',
  content: [
    {
      id: 'engelsk-vg1-6-3-n-intro',
      type: 'text',
      content: `## Two Ways of Thinking on Paper

There are two important types of writing that often get confused: analysis and reflection. Both involve deep thinking, but they point in different directions.

Analysis looks outward. When you analyze something, whether it's a text, an event, or an idea, you're examining how it works. You break it into parts. You identify patterns. You explain effects. The focus is on the object of study, not on you.

Reflection looks inward. When you reflect, you explore what something means to you personally. What did you learn? How did you feel? How has your thinking changed? The focus is on your own experience and growth.

Both skills are essential. Analysis helps you understand the world. Reflection helps you understand yourself. Often, the best writing combines both, moving between examining something carefully and considering what it means for you.

In this chapter, we'll explore techniques for both analytical and reflective writing. You'll learn structures that help you organize your thoughts and phrases that move your writing beyond mere description into genuine insight.`,
    },
    {
      id: 'engelsk-vg1-6-3-n-section1',
      type: 'text',
      content: `## The Art of Analysis

Analysis means breaking something down to understand how it works. In literary analysis, you might examine how an author creates suspense, develops character, or conveys theme. In other contexts, you might analyze how a policy affects different groups, how an event unfolded, or how an argument is constructed.

The key to good analysis is moving beyond description. Description tells what something is. Analysis explains how and why it works.

Consider the difference. Description: "In the opening scene, the author describes a dark forest." Analysis: "The opening scene's dark forest establishes a mood of uncertainty and danger, foreshadowing the protagonist's psychological journey into her own fears. The repeated imagery of shadows and obscured paths suggests that clarity will be hard-won."

Notice how the analysis makes claims about effect and meaning, not just content. It asks: What does this do? Why did the author make this choice? How does it affect the reader?

Good analytical writing uses specific evidence. Don't just claim that a text does something. Show it. Quote specific passages. Reference specific scenes. Point to specific details. Then explain what these specifics reveal.

The structure of analytical writing typically moves from observation to interpretation. You identify something in the text, then you explain what it means and why it matters.`,
    },
    {
      id: 'engelsk-vg1-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is the key difference between description and analysis?',
        options: [
          { id: 'a', text: 'Description is longer than analysis', isCorrect: false },
          { id: 'b', text: 'Description tells what something is; analysis explains how and why it works', isCorrect: true },
          { id: 'c', text: 'Description uses quotes; analysis does not', isCorrect: false },
          { id: 'd', text: 'Analysis is always negative; description is neutral', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Description identifies what\'s there. Analysis goes further to examine how elements function, why they were chosen, and what effects they create. Good analysis always moves beyond just describing.',
      },
    },
    {
      id: 'engelsk-vg1-6-3-n-section2',
      type: 'text',
      content: `## Structure for Literary Analysis

When writing a literary analysis essay, a clear structure helps you organize your insights effectively.

Your introduction should identify the text you're analyzing, including title, author, and genre. Provide brief context if needed. Then state your thesis, which should be a claim about how the text works or what it achieves. This thesis should be arguable, not just descriptive.

Each body paragraph focuses on one aspect of your analysis. This might be a single technique the author uses, a pattern you've noticed, or one element of your argument. Use the structure: make a claim, provide evidence from the text, analyze how the evidence supports your claim.

Key verbs for analysis include: analyze, examine, demonstrate, illustrate, reveal, suggest, convey, emphasize, highlight, undermine, and reinforce. These verbs show you're doing more than describing.

When you quote, always introduce the quote, present it, and then analyze it. Don't let quotes hang without explanation. A quote that isn't analyzed is just taking up space.

Your conclusion should synthesize your main points and articulate the broader significance. What does your analysis reveal about the text, the author, or the human condition?`,
    },
    {
      id: 'engelsk-vg1-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What should you do every time you include a quote in literary analysis?',
        options: [
          { id: 'a', text: 'Put it in a separate paragraph', isCorrect: false },
          { id: 'b', text: 'Introduce it, present it, and analyze it', isCorrect: true },
          { id: 'c', text: 'Let it speak for itself without comment', isCorrect: false },
          { id: 'd', text: 'Translate it into simpler language', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Quotes need context and analysis. Introduce them so the reader knows what\'s coming, present them clearly, then analyze what they demonstrate. A quote without analysis doesn\'t contribute to your argument.',
      },
    },
    {
      id: 'engelsk-vg1-6-3-n-section3',
      type: 'text',
      content: `## The Art of Reflection

Reflective writing explores your personal response to an experience, text, or idea. It's not just about what happened, but about what it meant to you and how it affected your thinking.

Good reflection goes beyond "I liked it" or "I found it interesting." It examines why. It traces the development of your thinking. It connects personal experience to broader ideas.

One useful framework is the Gibbs Reflective Cycle, which moves through six stages. Description: What happened? Feelings: What were you thinking and feeling? Evaluation: What was good and bad about the experience? Analysis: What sense can you make of it? Conclusion: What else could you have done? Action Plan: What will you do differently next time?

You don't have to use all six stages in every reflection, but they provide a useful structure for moving beyond surface-level responses.

Reflective writing uses personal language naturally. Phrases like "I realize now that...", "This experience taught me...", "Looking back, I would...", "I was surprised to find...", and "This connects to..." signal genuine reflection rather than mere recounting.

The challenge is being honest. Good reflection requires vulnerability. You need to admit confusion, acknowledge mistakes, and explore uncomfortable feelings. Playing it safe produces shallow reflection.`,
    },
    {
      id: 'engelsk-vg1-6-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What makes reflective writing go beyond surface-level responses?',
        options: [
          { id: 'a', text: 'Using more formal vocabulary', isCorrect: false },
          { id: 'b', text: 'Including more quotes from experts', isCorrect: false },
          { id: 'c', text: 'Examining why something affected you and how it changed your thinking', isCorrect: true },
          { id: 'd', text: 'Writing longer paragraphs', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Deep reflection explores the reasons behind your reactions and traces how experiences have influenced your thinking. It\'s not enough to say something was interesting - you need to examine why and what that means.',
      },
    },
    {
      id: 'engelsk-vg1-6-3-n-section4',
      type: 'text',
      content: `## Combining Analysis and Reflection

The richest writing often combines analytical and reflective elements. You might analyze a text and then reflect on how it affected you. You might reflect on an experience and then analyze what it reveals about larger patterns.

For example, after analyzing how an author creates empathy for a morally complex character, you might reflect: "Reading this novel changed how I think about judgment. I found myself sympathizing with someone whose actions I would normally condemn, and this made me question how quickly I judge people in real life."

The analysis gives your reflection substance. The reflection gives your analysis personal significance. Together, they create writing that is both intellectually rigorous and humanly meaningful.

When combining the two, be clear about which mode you're in. Use analytical language when analyzing and reflective language when reflecting. The transition between them should be smooth and purposeful.

This combination is particularly powerful in response papers, where you're asked both to engage with a text and to consider its personal relevance. It's also valuable in any situation where you're learning from experience, because analysis helps you understand what happened while reflection helps you apply those lessons.`,
    },
    {
      id: 'engelsk-vg1-6-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What happens when you combine analysis and reflection effectively?',
        options: [
          { id: 'a', text: 'The writing becomes confusing', isCorrect: false },
          { id: 'b', text: 'Analysis gives reflection substance; reflection gives analysis personal significance', isCorrect: true },
          { id: 'c', text: 'The essay becomes too long', isCorrect: false },
          { id: 'd', text: 'Teachers will mark you down for mixing modes', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Combining analysis and reflection creates writing that is both intellectually rigorous and personally meaningful. Analysis ensures your reflection is grounded, while reflection ensures your analysis connects to real human experience.',
      },
    },
    {
      id: 'engelsk-vg1-6-3-n-section5',
      type: 'text',
      content: `## Practicing Both Skills

Both analysis and reflection improve with practice. Here are ways to develop each.

For analysis, practice close reading. Take a short passage and examine every choice the author made. Why this word and not another? Why this sentence structure? What effects do these choices create? The more you practice noticing details, the more you'll see.

Discuss texts with others. Different readers notice different things. Hearing others' interpretations expands your own analytical toolkit.

For reflection, keep a learning journal. After significant experiences, whether classes, conversations, or events, write about what you learned and how you're thinking differently. Regular practice makes reflection natural.

Be willing to revisit and revise your reflections. First reactions aren't always deepest. Coming back to an experience later often reveals new insights.

For both, read models. Find examples of excellent analytical and reflective writing. Study how they work. What moves do the writers make? How do they structure their insights? Learning from strong examples accelerates your development.

Remember that both skills are lifelong tools. Analysis helps you understand anything complex. Reflection helps you learn from experience. Developing both makes you not just a better writer, but a better thinker.`,
    },
    {
      id: 'engelsk-vg1-6-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is "close reading" in the context of developing analytical skills?',
        options: [
          { id: 'a', text: 'Reading with your face close to the page', isCorrect: false },
          { id: 'b', text: 'Reading quickly to finish faster', isCorrect: false },
          { id: 'c', text: 'Examining every choice an author made and considering its effects', isCorrect: true },
          { id: 'd', text: 'Reading only the first and last chapters', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Close reading means paying careful attention to the details of a text - word choice, sentence structure, imagery, and so on - and analyzing why the author made those choices and what effects they create.',
      },
    },
    {
      id: 'engelsk-vg1-6-3-n-summary',
      type: 'text',
      content: `## Summary: Thinking on Paper

You've learned the essential skills for analytical and reflective writing. Here's what to remember:

**Analysis vs Reflection:**
Analysis examines how something works (outward focus). Reflection explores what something means to you (inward focus).

**Keys to Good Analysis:**
Move beyond description to explanation. Use specific evidence. Ask how and why, not just what.

**Literary Analysis Structure:**
Introduction with thesis, body paragraphs with evidence and analysis, conclusion with broader significance.

**Keys to Good Reflection:**
Go beyond surface reactions. Examine why and how your thinking changed. Be honest and vulnerable.

**Gibbs Cycle:**
Description, Feelings, Evaluation, Analysis, Conclusion, Action Plan.

**Combining Both:**
Analysis gives reflection substance. Reflection gives analysis significance.

**Key Terms:**
Analysis, reflection, close reading, Gibbs Cycle, thesis, evidence, interpretation.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6.4 NARRATIVE: Academic Writing and Essays
// ============================================================================

export const CHAPTER_ENGELSK_VG1_6_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-6-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.4',
  title: 'Academic Writing and Essays',
  subtitle: 'Narrative Version',
  description: 'Master the conventions of academic writing that will serve you throughout your education.',
  estimatedMinutes: 45,
  competenceGoals: [
    'skrive ulike formelle tekster med struktur og sammenheng',
  ],
  linkedChapterId: 'engelsk-vg1-6-4',
  content: [
    {
      id: 'engelsk-vg1-6-4-n-intro',
      type: 'text',
      content: `## Entering the Academic Conversation

Academic writing can seem mysterious and intimidating. It has its own conventions, its own vocabulary, even its own way of thinking. When you first encounter it, it might feel like everyone else knows rules you were never taught.

But here's the secret: academic writing is just a conversation. Scholars read each other's work, respond to it, build on it, and challenge it. When you write academically, you're joining this conversation. The conventions exist to make the conversation productive, to ensure ideas can be shared clearly and evaluated fairly.

In this chapter, we'll demystify academic writing. You'll learn why the conventions exist and how to follow them. You'll understand citation not as a tedious requirement but as a way of participating honestly in intellectual exchange. By the end, you'll have the tools to write essays that would hold their own in any academic context.`,
    },
    {
      id: 'engelsk-vg1-6-4-n-section1',
      type: 'text',
      content: `## The Characteristics of Academic Writing

Academic writing has distinctive features that set it apart from other types of writing.

First, it's formal in register. Academic writing avoids contractions, slang, and overly casual language. This isn't about being stuffy. It's about being precise and professional.

Second, it aims for objectivity. While you may have strong opinions, academic writing presents them as reasoned conclusions based on evidence rather than personal preferences. You support claims with data, research, and logical argument.

Third, it's evidence-based. Every significant claim should be supported. This might mean citing research, providing examples, or demonstrating through logical reasoning. Unsupported assertions weaken academic writing.

Fourth, it acknowledges sources. Academic writing exists within a web of prior scholarship. You show what others have said about your topic and how your contribution relates to existing knowledge.

Fifth, it has clear structure. Academic essays follow conventions that help readers navigate the argument: introduction with thesis, body paragraphs with clear topic sentences, conclusion that synthesizes.

These features serve a purpose. Academic writing aims to contribute to knowledge in a way that can be evaluated, built upon, and potentially challenged. The conventions make that possible.`,
    },
    {
      id: 'engelsk-vg1-6-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Why does academic writing emphasize evidence and citation?',
        options: [
          { id: 'a', text: 'To make essays longer', isCorrect: false },
          { id: 'b', text: 'To show off how much you\'ve read', isCorrect: false },
          { id: 'c', text: 'To support claims and participate honestly in scholarly conversation', isCorrect: true },
          { id: 'd', text: 'Because teachers require it arbitrarily', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Academic writing is a conversation among scholars. Evidence supports your claims so they can be evaluated. Citations acknowledge your sources and allow readers to follow up. Both are about intellectual honesty and rigor.',
      },
    },
    {
      id: 'engelsk-vg1-6-4-n-section2',
      type: 'text',
      content: `## Citation: Giving Credit and Avoiding Plagiarism

Citation is one of the most important academic writing skills. It serves multiple purposes: giving credit to original authors, avoiding plagiarism, enabling readers to verify your claims, and showing the breadth of your research.

There are two main ways to incorporate sources: quoting and paraphrasing. A direct quote uses the exact words from a source, enclosed in quotation marks. A paraphrase puts the source's ideas in your own words. Both require citation.

In APA style, which is common in social sciences, an in-text citation looks like this: According to Smith (2020), "direct quote here" (p. 45). Or: Research suggests this is true (Smith, 2020).

The reference list at the end provides full details: Smith, J. (2020). Book title. Publisher.

Here's a crucial point: paraphrasing doesn't mean just changing a few words. It means completely rewriting the idea in your own language. If you keep the same sentence structure and just swap some synonyms, that's still too close to the original and could be considered plagiarism.

The rule of thumb is: paraphrase more than you quote. Excessive quoting suggests you're letting sources speak for you rather than demonstrating your own understanding. Use direct quotes when the exact wording matters, perhaps for a key definition, a particularly eloquent expression, or when you'll analyze the language itself.`,
    },
    {
      id: 'engelsk-vg1-6-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Why should you paraphrase more than you quote in academic writing?',
        options: [
          { id: 'a', text: 'Quotes take up too much space', isCorrect: false },
          { id: 'b', text: 'Paraphrasing shows you understand the material rather than just copying it', isCorrect: true },
          { id: 'c', text: 'Quotes are not allowed in academic writing', isCorrect: false },
          { id: 'd', text: 'Paraphrasing doesn\'t require citation', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Paraphrasing demonstrates that you\'ve processed and understood the source material. It shows you can express ideas in your own words. Reserve direct quotes for when the exact wording is especially important.',
      },
    },
    {
      id: 'engelsk-vg1-6-4-n-section3',
      type: 'text',
      content: `## Building an Academic Argument

Academic essays don't just present information. They make arguments. Even when you're explaining something, you're arguing for a particular interpretation or approach.

Your thesis is the central claim of your essay. It should be specific enough to guide your writing but substantial enough to require a whole essay to support. A good thesis answers the "so what?" question, explaining why your point matters.

Each body paragraph supports one aspect of your thesis. The topic sentence states the paragraph's main point. Evidence follows. Then comes your analysis of what the evidence means. Finally, you link back to your thesis. This is the PEEL structure we discussed earlier.

Academic arguments acknowledge complexity. Real topics rarely have simple answers. Showing that you understand nuance strengthens your credibility. This might mean noting exceptions, acknowledging limitations, or recognizing valid points from opposing perspectives.

Transitions matter. Academic writing should flow logically from point to point. Use transition words and phrases to show relationships: furthermore, however, consequently, in contrast, similarly. These signals help readers follow your reasoning.

Finally, academic writing maintains an appropriate tone. You can be confident without being arrogant. You can disagree with others respectfully. You can admit uncertainty where it exists. The goal is thoughtful authority, not overblown claims.`,
    },
    {
      id: 'engelsk-vg1-6-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'How does acknowledging complexity HELP an academic argument?',
        options: [
          { id: 'a', text: 'It makes the essay longer', isCorrect: false },
          { id: 'b', text: 'It shows you understand the topic\'s nuances and strengthens your credibility', isCorrect: true },
          { id: 'c', text: 'It confuses readers about your position', isCorrect: false },
          { id: 'd', text: 'It lets you avoid taking a clear stance', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Acknowledging complexity shows intellectual honesty and sophistication. It demonstrates that you understand the topic deeply, not just superficially. This makes your argument more credible, not less.',
      },
    },
    {
      id: 'engelsk-vg1-6-4-n-section4',
      type: 'text',
      content: `## Common Academic Writing Mistakes

Certain mistakes appear repeatedly in student writing. Being aware of them helps you avoid them.

Vague thesis statements weaken essays from the start. "This essay will discuss climate change" tells us nothing. What about climate change? What's your argument? A thesis should make a claim, not just announce a topic.

Unsupported claims undermine credibility. If you assert something important, back it up. "Everyone knows that..." and "It is obvious that..." are red flags. If it's so obvious, why can't you provide evidence?

Dropped quotes are quotes that appear without introduction or analysis. Every quote should be introduced, presented, and explained. Why is this quote here? What does it show?

Summarizing instead of analyzing is a common problem. Don't just tell us what the source says. Explain what it means, why it matters, and how it supports your point.

Informal language breaks the academic register. Avoid contractions, slang, and phrases like "sort of" or "kind of." Write "many researchers" rather than "a lot of researchers."

Plagiarism, whether intentional or accidental, is serious. Always cite your sources. Always paraphrase properly. When in doubt, cite.

First-draft writing often makes it to submission. Academic writing requires revision. Your first draft is a starting point, not a finished product.`,
    },
    {
      id: 'engelsk-vg1-6-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is a "dropped quote" in academic writing?',
        options: [
          { id: 'a', text: 'A quote that was accidentally deleted', isCorrect: false },
          { id: 'b', text: 'A quote that appears without introduction or analysis', isCorrect: true },
          { id: 'c', text: 'A quote from an unreliable source', isCorrect: false },
          { id: 'd', text: 'A quote that is too long', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A dropped quote is inserted into an essay without context or explanation. Quotes should be introduced, presented in a grammatically integrated way, and then analyzed. Without this framing, quotes seem random and unhelpful.',
      },
    },
    {
      id: 'engelsk-vg1-6-4-n-section5',
      type: 'text',
      content: `## The Writing Process

Good academic writing doesn't happen in one sitting. It's the result of a process.

Start with understanding the assignment. What exactly are you being asked to do? What's the required length? What sources should you use? If anything is unclear, ask.

Research before you write. Gather sources. Take notes. Start developing ideas. Don't try to write your essay until you have material to work with.

Plan your structure. What's your thesis? What are your main points? In what order will you present them? An outline, even a rough one, saves time later.

Draft without perfectionism. Your first draft doesn't need to be good. It needs to exist. Get your ideas down. You'll improve them later.

Revise for content and structure. Does your argument make sense? Is your evidence strong? Is the organization logical? This is about the big picture, not commas.

Edit for clarity and style. Are your sentences clear? Is your language precise? Are there awkward phrasings?

Proofread for errors. Spelling, grammar, punctuation, citation format. These details matter.

This process takes time. Start early. Good academic writing cannot be rushed.`,
    },
    {
      id: 'engelsk-vg1-6-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why is revision a separate step from editing in the writing process?',
        options: [
          { id: 'a', text: 'They are actually the same thing', isCorrect: false },
          { id: 'b', text: 'Revision focuses on big-picture content and structure; editing focuses on sentence-level clarity', isCorrect: true },
          { id: 'c', text: 'Revision is optional but editing is required', isCorrect: false },
          { id: 'd', text: 'Editing should always come before revision', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Revision addresses the content and organization of your essay: Is the argument sound? Is the structure logical? Editing addresses the sentences themselves: Are they clear and well-written? These are different tasks requiring different focuses.',
      },
    },
    {
      id: 'engelsk-vg1-6-4-n-summary',
      type: 'text',
      content: `## Summary: Your Academic Writing Foundation

You've learned the essentials of academic writing. Here's what to remember:

**Characteristics:**
Formal register, objective tone, evidence-based claims, proper citation, clear structure.

**Citation:**
Quote when exact words matter. Paraphrase more often to show understanding. Always cite both. Follow a consistent format.

**Building Arguments:**
Clear thesis, supported body paragraphs, acknowledgment of complexity, logical transitions, appropriate tone.

**Common Mistakes:**
Vague thesis, unsupported claims, dropped quotes, summarizing instead of analyzing, informal language, plagiarism.

**The Process:**
Understand the assignment, research, plan, draft, revise, edit, proofread. Start early.

**Key Terms:**
Thesis, citation, paraphrase, direct quote, academic register, revision, editing.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 6.5 NARRATIVE: Creative Writing
// ============================================================================

export const CHAPTER_ENGELSK_VG1_6_5_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-6-5-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '6.5',
  title: 'Creative Writing',
  subtitle: 'Narrative Version',
  description: 'Explore the craft of creative writing and techniques that bring stories to life.',
  estimatedMinutes: 40,
  competenceGoals: [
    'skrive ulike tekster tilpasset formål, mottaker og situasjon',
  ],
  linkedChapterId: 'engelsk-vg1-6-5',
  content: [
    {
      id: 'engelsk-vg1-6-5-n-intro',
      type: 'text',
      content: `## The Freedom and Challenge of Creative Writing

Creative writing is fundamentally different from the other types of writing we've explored in this book. In academic writing, you follow established conventions. There are rules about thesis statements and topic sentences, about citing sources and building arguments, about register and tone. In persuasive writing, you have a clear goal: convince your reader of something specific. Even in reflective writing, there are patterns and frameworks to guide you. Creative writing has none of these guardrails. You make your own rules, or break rules intentionally for effect. There's no thesis to prove, no sources to cite, no predetermined structure to follow. Just you, your imagination, and the intimidating blankness of a page waiting to be filled.

This freedom is simultaneously exhilarating and terrifying. It's exhilarating because the possibilities are endless. You can create any world, any character, any story. You can write in any voice, any style, any form. You answer only to your own vision. But it's terrifying for exactly the same reasons. When anything is possible, how do you choose? When there are no formulas to follow, how do you know if what you're doing is working? When there's no one right way, how do you find your way? Many would-be creative writers freeze in the face of this freedom, staring at blank pages they don't know how to fill.

The answer is craft. Creative writing may not have the rigid structures of academic writing, but it absolutely has techniques, principles, and skills that thoughtful writers have developed and refined over centuries of practice. Understanding these techniques gives you tools to use, approaches to try when you're stuck, methods that have proven effective for creating certain effects. And once you understand the tools well enough, you'll also know how and when to subvert them, breaking "rules" deliberately and effectively rather than accidentally and awkwardly.

In this chapter, we'll explore some fundamental principles of creative writing, focusing especially on fiction since that's what most students think of when they hear "creative writing." You'll learn the crucial difference between showing and telling, perhaps the most important distinction in narrative craft. You'll learn techniques for creating vivid, sensory descriptions that make readers feel present in your fictional world. You'll learn approaches to structuring compelling narratives that hold reader interest. Whether you dream of writing the next great novel or just need to produce a decent short story for English class, these skills will serve you.`,
    },
    {
      id: 'engelsk-vg1-6-5-n-section1',
      type: 'text',
      content: `## Show, Don't Tell: The Golden Rule

If there's one principle that governs creative writing, it's this: show, don't tell. Instead of telling readers what to think or feel, you show them scenes and details that create those thoughts and feelings.

Consider the difference. Telling: "She was angry." Showing: "She slammed the door, her knuckles white around the handle. 'Fine,' she said through clenched teeth, not looking back."

The first sentence gives us information. The second creates an experience. We see the door slam. We notice the white knuckles. We hear the forced restraint in her voice. We feel her anger rather than just being informed of it.

Why does this matter? Because readers want to experience stories, not just hear about them. When you tell, you create distance. When you show, you create immersion. The reader is there, living the moment alongside your characters.

Showing usually takes more words than telling. That's okay. The richness is worth it. However, you don't need to show everything. Some information can be told efficiently. The key is to show the important moments, especially emotional peaks and crucial scenes, while telling can handle transitions and less important details.

How do you show? Through actions, dialogue, sensory details, and specific concrete images. We'll explore each of these.`,
    },
    {
      id: 'engelsk-vg1-6-5-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Why is "showing" more effective than "telling" in creative writing?',
        options: [
          { id: 'a', text: 'It uses more words', isCorrect: false },
          { id: 'b', text: 'It creates an immersive experience rather than just conveying information', isCorrect: true },
          { id: 'c', text: 'It\'s required by publishers', isCorrect: false },
          { id: 'd', text: 'It\'s easier to write', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Showing creates experience. Instead of telling readers someone was angry, you show actions and details that let readers feel the anger themselves. This immersion is what makes fiction compelling.',
      },
    },
    {
      id: 'engelsk-vg1-6-5-n-section2',
      type: 'text',
      content: `## Creating Vivid Descriptions

Good description makes readers see, hear, smell, taste, and feel your fictional world. Bad description bores them with vague generalities.

The key is specificity. "The room was messy" is vague and forgettable. "Clothes draped over every surface, pizza boxes stacked by the door, and a half-empty coffee mug grew mold on the windowsill" creates a picture. The specific details do the work.

Engage multiple senses. Most writers default to visual description, but sound, smell, touch, and taste can be equally powerful. The smell of coffee, the scratch of wool, the bitter taste of failure, these sensory details make scenes come alive.

Use strong verbs. Instead of "she walked quickly," try "she hurried" or "she rushed" or "she strode." Strong verbs carry more meaning than weak verb plus adverb combinations.

Choose details that matter. You can't describe everything, nor should you. Select details that reveal character, establish mood, or advance the story. A character who notices the dust on the bookshelves tells us something different from one who notices the leather binding.

Avoid clichés. "Dark and stormy night," "heart of gold," "eyes like pools," these phrases are so familiar that they've lost their power. Find fresh ways to describe things. If you've heard an expression a hundred times, so has your reader.`,
    },
    {
      id: 'engelsk-vg1-6-5-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Which of the following is the BEST example of vivid description?',
        options: [
          { id: 'a', text: '"The house was very old and scary."', isCorrect: false },
          { id: 'b', text: '"The shutters hung at odd angles, and the windows stared like hollow eyes."', isCorrect: true },
          { id: 'c', text: '"It was a dark and stormy night."', isCorrect: false },
          { id: 'd', text: '"The building looked like it had been there forever."', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Option B uses specific, visual details and a fresh comparison. The other options are either vague, clichéd, or tell rather than show. Good description creates pictures through specific concrete details.',
      },
    },
    {
      id: 'engelsk-vg1-6-5-n-section3',
      type: 'text',
      content: `## Dialogue That Sounds Real

Dialogue reveals character, advances plot, and creates voice. But writing dialogue that sounds natural while serving the story is tricky.

Real speech is messy. People interrupt, trail off, use filler words, change subjects. But transcribing real speech exactly would be tedious to read. Written dialogue is an illusion of natural speech, capturing its rhythm while being more focused and purposeful.

Each character should have a distinct voice. A teenager sounds different from a grandmother. A lawyer sounds different from a mechanic. Think about vocabulary, sentence length, speech patterns, and what topics they care about.

Dialogue should do double duty. Beyond conveying information, it should reveal character. How someone says something tells us as much as what they say. A character who says "I'm fine" while avoiding eye contact communicates very differently from one who says the same words with a bright smile.

Use dialogue tags sparingly. "Said" is nearly invisible to readers. Fancy alternatives like "exclaimed," "retorted," or "queried" draw attention to themselves. Worse are attempts to use non-verbal words as dialogue tags: "'Get out,' she hissed." (You can't hiss words without s sounds.) Often you can skip the tag entirely when it's clear who's speaking.

Include action beats. Instead of a dialogue tag, show a character doing something. "'I'm not going.' She crossed her arms." This breaks up dialogue, adds visual interest, and can reveal emotion.`,
    },
    {
      id: 'engelsk-vg1-6-5-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is an "action beat" in dialogue writing?',
        options: [
          { id: 'a', text: 'A dramatic moment in the story', isCorrect: false },
          { id: 'b', text: 'A character action used instead of or alongside a dialogue tag', isCorrect: true },
          { id: 'c', text: 'The rhythm of how dialogue is spoken', isCorrect: false },
          { id: 'd', text: 'A pause between lines of dialogue', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Action beats are character actions inserted in dialogue. "\'I don\'t believe you.\' She looked away." The action replaces "she said" while adding visual information and subtext.',
      },
    },
    {
      id: 'engelsk-vg1-6-5-n-section4',
      type: 'text',
      content: `## Structure and Pacing

Even the most creative writing needs structure. Stories have beginnings, middles, and ends. Scenes have setups, developments, and resolutions. Understanding structure helps you control the reader's experience.

Start in the middle of things. Don't begin with background information or slow setup. Drop readers into action or tension. You can fill in background later, once you've hooked their interest.

Every scene needs conflict. This doesn't mean fights or arguments, though it can. Conflict is simply someone wanting something and facing obstacles. Without conflict, scenes feel flat and pointless.

Pacing is how fast the story seems to move. Action scenes should move quickly: short sentences, rapid dialogue, minimal description. Reflective moments can slow down: longer sentences, more detail, internal thoughts. Varying your pacing keeps readers engaged.

End scenes and chapters with hooks. A question unanswered, a threat looming, a revelation hinted at. These hooks pull readers forward into the next section.

The classic story arc moves from initial situation through rising action to climax and then resolution. You don't have to follow this slavishly, but understanding it helps you build narrative momentum.`,
    },
    {
      id: 'engelsk-vg1-6-5-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Why should you "start in the middle of things" in creative writing?',
        options: [
          { id: 'a', text: 'Because background information isn\'t important', isCorrect: false },
          { id: 'b', text: 'To hook reader interest immediately rather than losing them to slow setup', isCorrect: true },
          { id: 'c', text: 'Because beginnings are too hard to write', isCorrect: false },
          { id: 'd', text: 'To confuse readers', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Starting with action or tension captures reader attention immediately. Background can be woven in later. Slow setups risk losing readers before the story really begins.',
      },
    },
    {
      id: 'engelsk-vg1-6-5-n-section5',
      type: 'text',
      content: `## Finding Your Voice

Ultimately, creative writing is about finding and developing your unique voice, the distinctive way you tell stories that no one else can replicate.

Voice comes from choices. What words do you use? What rhythms do your sentences create? What do you notice and describe? What matters to you? Every choice you make shapes your voice.

Read widely to develop your ear. Not to copy other writers, but to learn from them. Notice what you admire and why. Try different styles. Through experimentation, you'll discover what feels natural to you.

Write regularly. Voice develops through practice. The more you write, the more you'll discover your natural tendencies and learn to lean into them.

Don't try to sound like someone else. Your unique perspective is your greatest asset. The stories only you can tell, shaped by your experiences and observations, are more valuable than perfect imitation of other writers.

Accept imperfection. Early drafts will be rough. That's normal. Creative writing is revised writing. Get the words down first. Make them beautiful later.

Most importantly, write what excites you. When you're genuinely engaged with your material, that energy comes through on the page. When you're bored, readers will be too.`,
    },
    {
      id: 'engelsk-vg1-6-5-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-6-5-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'How does a writer develop their unique "voice"?',
        options: [
          { id: 'a', text: 'By copying successful authors exactly', isCorrect: false },
          { id: 'b', text: 'By following strict formulas for every genre', isCorrect: false },
          { id: 'c', text: 'Through reading widely, writing regularly, and making authentic choices', isCorrect: true },
          { id: 'd', text: 'By avoiding experimentation', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Voice develops through practice and exposure. Reading shows you possibilities. Writing helps you discover your natural tendencies. Authentic choices - writing what matters to you - creates a voice that\'s uniquely yours.',
      },
    },
    {
      id: 'engelsk-vg1-6-5-n-summary',
      type: 'text',
      content: `## Summary: The Craft of Creative Writing

You've learned fundamental techniques for creative writing. Here's what to remember:

**Show, Don't Tell:**
Create experiences rather than conveying information. Use actions, dialogue, and details to let readers feel emotions and situations.

**Vivid Description:**
Be specific. Engage multiple senses. Use strong verbs. Choose meaningful details. Avoid clichés.

**Effective Dialogue:**
Create distinct character voices. Let dialogue reveal character. Use "said" and action beats. Make dialogue do double duty.

**Structure and Pacing:**
Start with action. Ensure every scene has conflict. Vary pacing. End with hooks. Understand story arc.

**Finding Voice:**
Read widely. Write regularly. Make authentic choices. Accept imperfection. Write what excites you.

**Key Terms:**
Show don't tell, sensory details, dialogue tags, action beats, pacing, voice, conflict.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7.1 NARRATIVE: The History of English
// ============================================================================

export const CHAPTER_ENGELSK_VG1_7_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-7-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.1',
  title: 'The History of English',
  subtitle: 'Narrative Version',
  description: 'Discover how English evolved from a Germanic dialect to a global language over 1,500 years.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beskrive sentrale trekk ved framveksten av engelsk som verdensspråk',
  ],
  linkedChapterId: 'engelsk-vg1-7-1',
  content: [
    {
      id: 'engelsk-vg1-7-1-n-intro',
      type: 'text',
      content: `## A Language's Journey Through Time

The English you're reading right now, these very words on this page, is the result of approximately 1,500 years of continuous change, borrowing, and evolution. This language has been shaped by invasions, migrations, religious conversions, political upheavals, technological revolutions, and the rise and fall of empires. It has absorbed vocabulary from dozens of other languages while developing its own unique character. Understanding this history helps you understand why English is the way it is today, with all its quirks, inconsistencies, and seemingly illogical features.

Consider how strange English can be. Why is "cough" spelled with "gh" but pronounced with an "f" sound? Why do we have both "begin" and "commence," both "freedom" and "liberty," both "ask" and "inquire"? Why are there so many irregular verbs like "go/went/gone" instead of regular patterns? Why is English spelling so notoriously difficult? The answers to all these questions lie in history. Every irregularity, every oddity, every doubled word in our vocabulary is a fossil record of some past event in the language's evolution.

If you could travel back in time to England in the year 800, you wouldn't understand a single word anyone said. The language they spoke, which scholars call Old English, would sound as foreign to your ears as German or Dutch, perhaps more so. You would recognize nothing. And yet, remarkably, there's a direct, unbroken line from their words to ours. The language transformed gradually, generation by generation, never so quickly that children couldn't understand their parents, but cumulatively changing so much that we can't understand our ancestors.

In this chapter, we'll trace that extraordinary journey. We'll see how Germanic tribes brought their language to the island of Britain when Roman power collapsed. We'll see how Viking raiders and then Norman conquerors left permanent marks on English vocabulary and grammar. We'll see how the printing press and writers like Shakespeare helped standardize and expand the language. And we'll see how the British Empire spread English around the world, creating the global language we know today. It's a story of conquest and culture, of creativity and constant change.`,
    },
    {
      id: 'engelsk-vg1-7-1-n-section1',
      type: 'text',
      content: `## Old English: The Germanic Roots

The story of English begins with an invasion, or rather, a series of migrations and conquests that fundamentally transformed the island of Britain. Around 450 AD, as the Roman Empire collapsed and withdrew its legions, Germanic tribes from the area of modern-day Germany and Denmark began crossing the North Sea to settle in Britain. These tribes, known to history as the Angles, Saxons, and Jutes, brought their Germanic languages with them. Over time, these languages blended and evolved into what we now call Old English, sometimes also called Anglo-Saxon.

Old English looks and sounds almost like a completely foreign language to modern English speakers. Consider the opening lines of Beowulf, the greatest literary work in Old English, an epic poem about a hero who fights monsters: "Hwæt! We Gardena in geardagum, þeodcyninga þrym gefrunon." Unless you've specifically studied Old English as an academic subject, that sequence of words is utterly meaningless to you. You might not even recognize the letters, since Old English used characters like þ (called "thorn") and ð (called "eth") that we no longer use.

And yet, remarkably, many of our most basic, most fundamental words come from this period. The core vocabulary of everyday life, the words we use most often, tends to be Anglo-Saxon. Words like "house," "home," "mother," "father," "son," "daughter," "man," "woman," "eat," "drink," "sleep," "live," "die," "love," "hate," "good," "bad," "hot," "cold." These words have survived more than a millennium of change, modified in pronunciation and sometimes spelling, but recognizably continuous.

Old English was highly inflected, meaning that word endings changed to show grammatical relationships. Where modern English relies on word order, with "The dog bites the man" meaning something different from "The man bites the dog," Old English could shuffle words around more freely because the endings made relationships clear.

During this period, two major influences shaped the language. Christianity, arriving from around 600 AD, brought Latin vocabulary, especially religious and scholarly terms. Viking invasions from 793 AD onward brought Old Norse words into English. Many common words, including "they," "them," "their," "sky," "egg," "husband," and "take," come from Scandinavian influence.`,
    },
    {
      id: 'engelsk-vg1-7-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Which languages contributed to Old English vocabulary?',
        options: [
          { id: 'a', text: 'French and Spanish', isCorrect: false },
          { id: 'b', text: 'Germanic languages, Latin (through Christianity), and Old Norse (through Vikings)', isCorrect: true },
          { id: 'c', text: 'Greek and Italian', isCorrect: false },
          { id: 'd', text: 'Celtic languages only', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Old English had Germanic roots from the Angles, Saxons, and Jutes. Latin entered through Christian missionaries. Old Norse was brought by Viking invaders and settlers. All three languages contributed significantly to English vocabulary.',
      },
    },
    {
      id: 'engelsk-vg1-7-1-n-section2',
      type: 'text',
      content: `## Middle English: The Norman Impact

In 1066, everything changed. William the Conqueror, Duke of Normandy, invaded England and won the Battle of Hastings. For the next few centuries, England was ruled by French-speaking monarchs and nobles.

This had a dramatic effect on English. The nobility spoke French. The common people spoke English. Over time, the two languages blended. English borrowed thousands of words from French, especially in areas where the French-speaking nobles dominated: government (parliament, judge, jury), military (army, soldier, battle), food (beef, pork, poultry), and culture (art, music, literature).

This is why English often has two words for the same thing: one from Germanic roots, one from French. The animal in the field has an Anglo-Saxon name (cow, pig, sheep), but the meat on the table has a French name (beef, pork, mutton). The farmers who raised the animals spoke English. The nobles who ate them spoke French.

Middle English, the language spoken from roughly 1100 to 1500, was more recognizable than Old English but still quite different from modern English. Geoffrey Chaucer's Canterbury Tales, written in the late 1300s, is the most famous Middle English text. With some effort, modern readers can make sense of it.

Grammar simplified dramatically during this period. Most of those Old English word endings disappeared. Word order became more important.`,
    },
    {
      id: 'engelsk-vg1-7-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Why do English speakers often have two words for the same concept (like "freedom/liberty" or "begin/commence")?',
        options: [
          { id: 'a', text: 'Shakespeare invented the extra words', isCorrect: false },
          { id: 'b', text: 'One word came from Germanic roots, the other from French after the Norman Conquest', isCorrect: true },
          { id: 'c', text: 'American and British English developed different words', isCorrect: false },
          { id: 'd', text: 'The words were borrowed from Latin during the Renaissance', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'After 1066, French vocabulary flooded into English. Many concepts ended up with both a Germanic word (used by common people) and a French word (used by the upper classes). Both words often survived, sometimes with slightly different connotations.',
      },
    },
    {
      id: 'engelsk-vg1-7-1-n-section3',
      type: 'text',
      content: `## Early Modern English: Shakespeare and the Printing Press

The period from about 1500 to 1700 saw English transform into something much closer to what we speak today. Two developments were crucial: the printing press and standardization.

William Caxton introduced the printing press to England in 1476. For the first time, books could be mass-produced. This meant language could be standardized. Before printing, spelling varied wildly. After printing, conventions slowly developed. However, English spelling was fixed before a major sound change called the Great Vowel Shift was complete, which is why English spelling often seems so illogical today.

The Renaissance brought an influx of Latin and Greek vocabulary as scholars rediscovered classical texts. Words like "atmosphere," "democracy," "manuscript," and "encyclopedia" entered English during this period.

Then came Shakespeare. Writing between roughly 1590 and 1613, William Shakespeare didn't invent English, but he stretched it dramatically. He coined or first recorded over 1,700 words: "assassination," "bedroom," "fashionable," "lonely," "generous," and many more. He created phrases we still use: "break the ice," "wild goose chase," "heart of gold."

The King James Bible, published in 1611, was another landmark. Its phrases entered common speech: "the salt of the earth," "a drop in the bucket," "the writing on the wall." The English of Shakespeare and the King James Bible is recognizably our language.`,
    },
    {
      id: 'engelsk-vg1-7-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why is English spelling often "illogical" compared to pronunciation?',
        options: [
          { id: 'a', text: 'English borrowed spellings from French', isCorrect: false },
          { id: 'b', text: 'Spelling was fixed by printing before pronunciation finished changing', isCorrect: true },
          { id: 'c', text: 'Shakespeare changed the spellings deliberately', isCorrect: false },
          { id: 'd', text: 'Different dialects use different spellings', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The printing press standardized spelling, but the Great Vowel Shift changed pronunciation afterward. So we write words the way they sounded in the 1400s but pronounce them differently. This is why "knight" has a silent K and silent GH.',
      },
    },
    {
      id: 'engelsk-vg1-7-1-n-section4',
      type: 'text',
      content: `## Modern English: Empire and Innovation

From about 1700 onward, English entered its modern phase. Two forces dominated this period: the British Empire and technological change.

At its height, the British Empire covered a quarter of the world's land surface. Wherever the empire went, English followed. This spread created new varieties of English in India, Africa, Australia, the Caribbean, and beyond. It also brought words back to Britain: "jungle" and "bungalow" from India, "safari" from Swahili, "kangaroo" from Australia.

American English developed its own distinct character after American independence in 1776. American spellings (color instead of colour, center instead of centre) were partly a deliberate choice to distinguish American from British English. Noah Webster's dictionaries helped standardize American usage.

The Industrial Revolution added technical vocabulary. The 20th century brought words from psychology (ego, trauma), physics (relativity, quantum), and computing (software, internet). The pace of vocabulary change accelerated.

English keeps growing. New words enter from technology, from youth culture, from other languages. Old words gain new meanings. The language that began with Germanic tribes in the 5th century is now the world's most widely used language for international communication.`,
    },
    {
      id: 'engelsk-vg1-7-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'How did the British Empire affect the English language?',
        options: [
          { id: 'a', text: 'It prevented English from changing', isCorrect: false },
          { id: 'b', text: 'It spread English worldwide and brought new vocabulary back from colonies', isCorrect: true },
          { id: 'c', text: 'It replaced English with French', isCorrect: false },
          { id: 'd', text: 'It had no effect on the language', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The British Empire spread English to every continent, creating new varieties of English worldwide. It also brought vocabulary from colonized regions back into British English, enriching the language with words from Hindi, Swahili, and many other languages.',
      },
    },
    {
      id: 'engelsk-vg1-7-1-n-section5',
      type: 'text',
      content: `## What History Tells Us About English

Understanding the history of English explains many of its features.

Why is English vocabulary so large? Because it absorbed words from Latin, French, Greek, and dozens of other languages. We have synonyms because words came from different sources.

Why is English spelling inconsistent? Because pronunciation changed after spelling was standardized, and because we borrowed words from many languages with different spelling conventions.

Why are some grammar "rules" actually wrong? Because English grammar has been constantly changing, and sometimes rules were imposed based on Latin that never fit English naturally.

Why do we have irregular verbs? The strongest irregulars ("be," "have," "go") are among the oldest words in the language, preserving patterns that have otherwise disappeared.

This history also reminds us that language change is normal and constant. The English of 2100 will be different from the English of today, just as our English differs from Shakespeare's. People always complain that language is "declining," but that's been happening since Old English, and the language has survived just fine.

English is a mongrel language, a mix of everything it encountered along the way. And that's what makes it so rich and expressive.`,
    },
    {
      id: 'engelsk-vg1-7-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why does English have such a large vocabulary compared to many other languages?',
        options: [
          { id: 'a', text: 'English speakers invented more words than other peoples', isCorrect: false },
          { id: 'b', text: 'English absorbed words from Latin, French, Greek, and many other languages over centuries', isCorrect: true },
          { id: 'c', text: 'The British government created new words deliberately', isCorrect: false },
          { id: 'd', text: 'English has no grammar rules, so more words were needed', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'English has historically borrowed words from every language it encountered rather than creating new terms from existing roots. This constant absorption from Germanic, French, Latin, Greek, and global sources created an enormous vocabulary.',
      },
    },
    {
      id: 'engelsk-vg1-7-1-n-summary',
      type: 'text',
      content: `## Summary: The Journey of English

You've traced English from its origins to the present. Here are the key points:

**Old English (450-1100):**
Germanic origins from Angles, Saxons, and Jutes. Influenced by Latin (Christianity) and Old Norse (Vikings). Highly inflected grammar.

**Middle English (1100-1500):**
Massive French influence after the Norman Conquest. Grammar simplified. Words doubled as French and Germanic terms coexisted.

**Early Modern English (1500-1700):**
Printing press standardized spelling. Renaissance added Latin and Greek vocabulary. Shakespeare expanded the language dramatically.

**Modern English (1700-present):**
British Empire spread English globally. Technology constantly adds new words. Multiple varieties developed worldwide.

**What This Explains:**
Large vocabulary from multiple sources. Inconsistent spelling. Irregular verbs as remnants of old patterns. Constant change as normal.

**Key Terms:**
Old English, Middle English, Early Modern English, Modern English, Norman Conquest, Great Vowel Shift, standardization.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7.2 NARRATIVE: English as a Global Language
// ============================================================================

export const CHAPTER_ENGELSK_VG1_7_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-7-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.2',
  title: 'English as a Global Language',
  subtitle: 'Narrative Version',
  description: 'Explore how English became the world\'s most widely used language for international communication.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive sentrale trekk ved framveksten av engelsk som verdensspråk',
  ],
  linkedChapterId: 'engelsk-vg1-7-2',
  content: [
    {
      id: 'engelsk-vg1-7-2-n-intro',
      type: 'text',
      content: `## The World's Lingua Franca

Right now, at this very moment, as you read these words, someone in Japan is emailing a colleague in Brazil in English. Neither of them speaks the other's native language, but they communicate smoothly through a language that's native to neither. A Swedish scientist is presenting research at a conference in South Korea in English, addressing an audience from dozens of countries who understand her perfectly. A pilot in Morocco is communicating with air traffic control in France in English, following international aviation protocols that have made English the universal language of the skies. A German tourist is ordering dinner in Thailand in English. A Chinese businesswoman is negotiating a deal with Italian partners in English. All over the world, every hour of every day, people who share no native language, who might have no other way to communicate, are connecting through English.

Consider the remarkable scale of this phenomenon. Approximately 1.5 billion people speak English today, making it the most widely spoken language in human history. But here's what's truly extraordinary: only about 400 million of those speakers, roughly a quarter, are native speakers for whom English is their first language. The other billion-plus learned English as a second or additional language. English has become what linguists call a lingua franca, a common language used between people who don't share a mother tongue. The term comes from a hybrid language used around the Mediterranean Sea in medieval times, but today there's only one true global lingua franca, and it's English.

How did this happen? No international committee chose English as the world's common language. No vote was taken. No treaty was signed. The spread of English was the result of history, economics, politics, and power, a series of circumstances that could have unfolded differently but didn't. Understanding how English became global helps us think more clearly about what that means for the world: both the opportunities it creates for communication and connection, and the concerns it raises about inequality and cultural dominance.`,
    },
    {
      id: 'engelsk-vg1-7-2-n-section1',
      type: 'text',
      content: `## The Road to Global English

Let's be clear about something from the start: English didn't become a global language because of any intrinsic qualities of the language itself. This is a common misconception that's worth addressing directly. English is not easier to learn than other languages; in fact, with its irregular verbs, its bizarre spelling, its complex vowel system, and its massive vocabulary, it's quite challenging. English spelling is notoriously, legendarily difficult, a source of frustration for learners and even native speakers. English grammar, while simpler than some languages in certain ways, has plenty of irregularities and exceptions that trip up learners for years. The idea that English "deserved" to become global because of some inherent virtue is simply wrong. English became global because of the power, economic and military and cultural, of the people who spoke it. That's the unromantic but accurate answer.

The British Empire was the first and primary driver of English's spread. Starting in the early 1600s and accelerating through the 17th, 18th, and 19th centuries, Britain built the largest empire in world history. At its peak, the British Empire covered about a quarter of the world's land surface and ruled about a quarter of the world's population. British colonizers brought English to North America, to India, to large parts of Africa, to Australia and New Zealand, to the Caribbean, to Hong Kong and Singapore, to countless other territories around the world. In these colonies, English became the language of government, law, and administration. It became the language of education, the language you needed to learn if you wanted to advance in colonial society. It became the language of commerce and trade. When these colonies eventually gained independence, mostly in the 20th century, English often remained as an official language or as a widely-spoken language of wider communication, too embedded to easily remove.

American power was the second driver. After World War II, the United States became the world's dominant economic and military power. American business, American technology, American entertainment, American universities, all operated in English. Countries that wanted to participate in the American-led global economy needed English.

The combination was decisive. British colonialism had already spread English around the world. American power made it indispensable in the 20th and 21st centuries. No other language had this dual historical advantage.`,
    },
    {
      id: 'engelsk-vg1-7-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What two historical factors made English a global language?',
        options: [
          { id: 'a', text: 'The Roman Empire and the Renaissance', isCorrect: false },
          { id: 'b', text: 'British colonialism and American global dominance', isCorrect: true },
          { id: 'c', text: 'The French Revolution and World War I', isCorrect: false },
          { id: 'd', text: 'The invention of the internet and social media', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'British colonialism spread English to every continent. American economic and cultural power in the 20th century made English essential for international business, science, and entertainment. Together, these forces made English uniquely global.',
      },
    },
    {
      id: 'engelsk-vg1-7-2-n-section2',
      type: 'text',
      content: `## The Three Circles of English

Linguist Braj Kachru proposed a useful model for understanding how English is used around the world: the Three Circles.

The Inner Circle includes countries where English is the primary native language: the United Kingdom, the United States, Canada, Australia, Ireland, and New Zealand. About 400 million people live in Inner Circle countries. For them, English is the language of home, school, government, and everyday life.

The Outer Circle includes former British colonies where English has an official status and is widely used but is typically not the first language of most people. India, Nigeria, Singapore, the Philippines, and many other countries fall into this category. Perhaps 400 million more people speak English in the Outer Circle, often alongside other local languages.

The Expanding Circle includes countries where English is learned as a foreign language without colonial history. China, Japan, Germany, Brazil, and Norway are examples. English is taught in schools and used for international communication, but it has no official domestic role. This circle includes the largest number of English learners, perhaps 700 million or more.

This model reveals something important: native speakers are now a minority of English speakers. The majority of English spoken in the world today is spoken between non-native speakers.`,
    },
    {
      id: 'engelsk-vg1-7-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What is true about the "Expanding Circle" in Kachru\'s model?',
        options: [
          { id: 'a', text: 'It includes countries where English is the native language', isCorrect: false },
          { id: 'b', text: 'It includes former British colonies', isCorrect: false },
          { id: 'c', text: 'It includes countries where English is learned as a foreign language without colonial history', isCorrect: true },
          { id: 'd', text: 'It has the smallest number of English speakers', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'The Expanding Circle comprises countries like China, Japan, and Brazil where English is taught as a foreign language for international communication. These countries have no colonial history with Britain but recognize English\'s global importance.',
      },
    },
    {
      id: 'engelsk-vg1-7-2-n-section3',
      type: 'text',
      content: `## Why English Dominates Today

Beyond history, several factors maintain English's global position today.

Economic power matters. The United States remains the world's largest economy. American companies, American investors, and American consumers are crucial to global business. Speaking English opens doors to this market.

Scientific communication happens primarily in English. Over 90% of scientific papers in some fields are published in English. Researchers who don't publish in English may find their work ignored. International conferences are conducted in English. This creates a cycle: scientists need English, so they use English, so the next generation needs English too.

Entertainment and popular culture spread English everywhere. Hollywood movies, American TV shows, British and American music. Young people around the world grow up hearing English in their entertainment, which normalizes the language and motivates learning.

The internet was born in English. Even as other languages have grown online, English remains the dominant language of the web. More than half of all websites are in English.

Aviation and shipping use English as their international languages. Air traffic control worldwide operates in English.

These factors reinforce each other. English is useful because it's widespread. It's widespread because it's useful.`,
    },
    {
      id: 'engelsk-vg1-7-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why is English dominant in scientific communication?',
        options: [
          { id: 'a', text: 'Scientists prefer English because it\'s easier', isCorrect: false },
          { id: 'b', text: 'Over 90% of papers in some fields are in English, creating a cycle that reinforces English dominance', isCorrect: true },
          { id: 'c', text: 'International law requires scientific papers to be in English', isCorrect: false },
          { id: 'd', text: 'Other languages don\'t have scientific vocabulary', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'English dominates science because it dominates science. Researchers publish in English to reach the widest audience, which means future researchers need English to access the literature. This self-reinforcing cycle maintains English\'s position.',
      },
    },
    {
      id: 'engelsk-vg1-7-2-n-section4',
      type: 'text',
      content: `## The Consequences of Global English

A global lingua franca has significant benefits. International cooperation is easier when people can communicate. Businesses can operate across borders. Scientific knowledge can spread. Travel and cultural exchange are facilitated.

But there are concerns too. Linguistic inequality arises when native English speakers have advantages in professional and academic settings. A Japanese scientist competing against an American scientist must work in her second language while her competitor works in his first. This isn't a level playing field.

Language loss is another concern. As English spreads, smaller languages may decline. Parents may choose to raise children in English rather than their heritage language, seeing English as more useful for their children's futures. Languages carry cultures, histories, and ways of seeing the world. When languages die, that knowledge can be lost.

Cultural dominance accompanies linguistic spread. English brings Anglo-American cultural assumptions, forms of expression, and ways of thinking. This cultural influence can feel like imperialism by another name.

There's also debate about standards. If most English speakers are non-native, should native speaker norms govern how the language is used? Some argue that "International English" or "English as a Lingua Franca" should develop its own standards, independent of British or American conventions.`,
    },
    {
      id: 'engelsk-vg1-7-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is one concern about the spread of English as a global language?',
        options: [
          { id: 'a', text: 'Too many people are learning English', isCorrect: false },
          { id: 'b', text: 'Non-native speakers face disadvantages competing against native speakers in professional settings', isCorrect: true },
          { id: 'c', text: 'English is becoming easier to learn', isCorrect: false },
          { id: 'd', text: 'Scientific papers should not be published in English', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Linguistic inequality is a real concern. Native speakers have an inherent advantage when academic and professional success depends on English proficiency. This creates an uneven playing field in global competition.',
      },
    },
    {
      id: 'engelsk-vg1-7-2-n-section5',
      type: 'text',
      content: `## English's Future

What happens next? Will English remain the global language? There's no guarantee.

Some predict that Chinese might challenge English, given China's growing economic power. But language spread is sticky. All those scientists, businesspeople, and institutions already use English. Switching would be enormously costly. Chinese also presents challenges as a lingua franca: its writing system is difficult for non-native learners, and tonal pronunciation is hard to master.

Others predict that technology might reduce the need for a single lingua franca. If real-time translation becomes reliable, people might communicate in their native languages and let machines translate. We're not there yet, but progress is rapid.

What seems most likely is that English will continue to evolve. It's already changing. New varieties develop around the world. Non-native speakers introduce new usages. The English of 2100 will be different from the English of today, shaped by its global billions of speakers.

As someone learning or using English, you're part of this story. The language doesn't belong only to native speakers anymore. It belongs to everyone who uses it. How you use English, the words you choose, the meanings you create, contributes to what English becomes.`,
    },
    {
      id: 'engelsk-vg1-7-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why is it unlikely that Chinese will replace English as the global lingua franca soon?',
        options: [
          { id: 'a', text: 'Chinese speakers don\'t want it to', isCorrect: false },
          { id: 'b', text: 'English is already embedded in global systems, and Chinese presents learning challenges like its writing system', isCorrect: true },
          { id: 'c', text: 'International law prohibits it', isCorrect: false },
          { id: 'd', text: 'Chinese doesn\'t have enough vocabulary', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The global infrastructure already uses English. Switching would require massive investment. Additionally, Chinese characters and tonal pronunciation make it harder to learn as a second language than alphabetic languages like English.',
      },
    },
    {
      id: 'engelsk-vg1-7-2-n-summary',
      type: 'text',
      content: `## Summary: English Goes Global

You've explored how English became the world's lingua franca. Here are the key points:

**Historical Drivers:**
British colonialism spread English worldwide. American power made it economically essential. Both were necessary for English's unique position.

**The Three Circles:**
Inner Circle (native speakers), Outer Circle (former colonies with official English), Expanding Circle (English as foreign language). Native speakers are now a minority.

**Why English Stays Dominant:**
Economic power, scientific publishing, entertainment and culture, the internet, aviation and shipping. Self-reinforcing cycles maintain position.

**Concerns:**
Linguistic inequality, language loss, cultural dominance, debates about standards.

**The Future:**
English will likely remain dominant but will continue to evolve as non-native speakers shape it.

**Key Terms:**
Lingua franca, Inner Circle, Outer Circle, Expanding Circle, linguistic inequality, language loss.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7.3 NARRATIVE: World Englishes and Varieties
// ============================================================================

export const CHAPTER_ENGELSK_VG1_7_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-7-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.3',
  title: 'World Englishes and Varieties',
  subtitle: 'Narrative Version',
  description: 'Discover the rich diversity of English varieties spoken around the world today.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beskrive sentrale trekk ved framveksten av engelsk som verdensspråk',
  ],
  linkedChapterId: 'engelsk-vg1-7-3',
  content: [
    {
      id: 'engelsk-vg1-7-3-n-intro',
      type: 'text',
      content: `## One Language, Many Voices

There is no single "correct" English, no pure, perfect, authoritative version that all other versions are corrupted copies of. This might surprise you if you've been taught that there's a "right" way to speak and write English. But linguists who study English professionally will tell you: what you call English depends on where you are. In London, you might ask for a "flat" and take the "lift." Walk those same streets and you'll hear accents ranging from posh Received Pronunciation to Cockney to Jamaican-influenced South London speech. Cross the Atlantic to New York, and you'd want an "apartment" and take the "elevator." You'd also hear different accents depending on which neighborhood you're in. Fly to Singapore, and someone might tell you a story is "very the good" and end sentences with particles like "lah" and "lor." In India, you might hear someone say they'll "prepone" a meeting (the opposite of postpone, a word that fills a useful gap English didn't have before) and suggest you "do one thing." In Nigeria, you might be told to "manage" when resources are limited. In Australia, you'd hear completely different slang and intonations.

These aren't mistakes or corruptions of "proper" English. They're varieties: distinct, systematic, rule-governed forms of English that have developed in different communities around the world over decades or centuries. Each variety has its own characteristic vocabulary, its own grammatical patterns, its own pronunciation features, and its own ways of expressing things. Each reflects the unique history and culture of its speakers, shaped by which languages English came into contact with, which colonial powers were present, which indigenous influences remained, and how the community used language to express its identity.

In this chapter, we'll explore the rich diversity of World Englishes. We'll look at the most familiar varieties, British and American English, but we'll also explore the fascinating Englishes that have developed in post-colonial contexts around the world. You'll gain appreciation for the creative, dynamic ways communities everywhere have made English their own, adapting it to their needs and infusing it with their culture.`,
    },
    {
      id: 'engelsk-vg1-7-3-n-section1',
      type: 'text',
      content: `## British and American: The Big Two

British and American English are the two most familiar, most widely taught, and most influential varieties for most English learners around the world. When people think of "standard" English, they usually have one of these two varieties in mind. They differ in multiple ways: spelling, vocabulary, grammar, and pronunciation. Neither is more correct than the other, though each has its champions and critics. Understanding their differences and similarities is useful for anyone who uses English internationally.

Spelling differences between British and American English are the most visible and most systematic. British English retains the "our" ending in words like "colour," "honour," "favour," and "labour" where American English has simplified to "or" as in "color," "honor," "favor," and "labor." British English uses "re" at the end of words like "centre" and "theatre" where American English uses "er" as in "center" and "theater." British English tends to double consonants more often, writing "travelling" and "cancelled" where American English writes "traveling" and "canceled." British English uses "ise" endings (organise, realise) where American English prefers "ize" (organize, realize). These differences trace back largely to Noah Webster, the American lexicographer who deliberately Americanized spelling in the early 1800s, partly for practical reasons but also as a nationalistic statement that American English should be distinct from British English.

Vocabulary differences are extensive. British "lorry" is American "truck." British "biscuit" is American "cookie." British "boot" (of a car) is American "trunk." British "pavement" is American "sidewalk." There are hundreds of such differences, enough to occasionally cause confusion.

Grammar shows subtle differences too. British English says "Have you got a pen?" while American English prefers "Do you have a pen?" British English uses present perfect more ("I've just eaten") where American English might use simple past ("I just ate"). British English treats collective nouns as plural ("The team are playing well") while American English treats them as singular ("The team is playing well").

Pronunciation varies significantly, but both regions contain many internal accents. There's no single "British accent" or "American accent," just clusters of regional and social varieties.`,
    },
    {
      id: 'engelsk-vg1-7-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Which pair shows the same word in British English and American English?',
        options: [
          { id: 'a', text: 'Flat / House', isCorrect: false },
          { id: 'b', text: 'Lorry / Truck', isCorrect: true },
          { id: 'c', text: 'Color / Colour', isCorrect: false },
          { id: 'd', text: 'Pavement / Road', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A British "lorry" is an American "truck." Both words refer to the same vehicle. The other pairs either represent spelling differences (color/colour) or are not direct equivalents.',
      },
    },
    {
      id: 'engelsk-vg1-7-3-n-section2',
      type: 'text',
      content: `## Post-Colonial Englishes

When the British Empire spread English around the world, it didn't stay the same. In each place, English mixed with local languages and adapted to local needs. The result is a fascinating array of distinctive Englishes.

Indian English has developed its own grammar and vocabulary. "Prepone" fills a gap that doesn't exist in British or American English, meaning to move something earlier. "Do one thing" doesn't literally mean perform one action; it's a conversation marker like "Listen." "What is your good name?" is a polite way to ask someone's name. The present continuous is used more broadly: "I am knowing him" rather than "I know him."

Nigerian English incorporates words from local languages and pidgins. "Chop" means to eat. "Dash" means to give as a gift. Family terminology reflects local kinship structures. Phrases like "senior brother" and "junior brother" distinguish what English simply calls "brother."

Singaporean English, or Singlish, mixes English with Chinese, Malay, and Tamil influences. Particles like "lah," "leh," and "lor" add nuance to sentences. "Can" alone can mean "Yes, that's possible." "Where got?" means "That's not true." Singlish is a full variety with its own grammar, not broken English.

These varieties are legitimate linguistic systems. They have consistent rules. They serve the communication needs of their communities. They're not failed attempts at British or American English.`,
    },
    {
      id: 'engelsk-vg1-7-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What is "Singlish"?',
        options: [
          { id: 'a', text: 'A simplified form of English for beginners', isCorrect: false },
          { id: 'b', text: 'A variety of English in Singapore that incorporates Chinese, Malay, and Tamil elements', isCorrect: true },
          { id: 'c', text: 'The official language of Singapore', isCorrect: false },
          { id: 'd', text: 'A type of accent', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Singlish is Singaporean English, a variety that mixes English with elements from Chinese, Malay, and Tamil. It has its own vocabulary, grammar, and particles. It\'s a legitimate variety, not "bad" English.',
      },
    },
    {
      id: 'engelsk-vg1-7-3-n-section3',
      type: 'text',
      content: `## Other Major Varieties

Beyond British, American, and post-colonial Englishes, other significant varieties have developed.

Australian English has its own distinct vocabulary. "Arvo" means afternoon. "Barbie" means barbecue. "Thongs" are flip-flops, not underwear. Australian pronunciation has characteristic patterns, and the variety includes various regional and social accents.

South African English reflects the country's complex linguistic landscape, with influences from Afrikaans, Zulu, and other languages. Words like "robot" (traffic light) and "shame" (used to express sympathy) are distinctively South African.

Irish English preserves features from the Irish language and historical forms of English. It has distinctive grammatical patterns like the "after" perfect ("I'm after eating" meaning "I have just eaten") and vocabulary from Irish.

Caribbean Englishes vary significantly across islands but share some features, often influenced by creole languages that developed during the colonial period. These varieties range along a continuum from standard English to creole.

Each variety carries the history and identity of its speakers. They're not corruptions of a "pure" English but natural developments as communities adapted the language to their needs.`,
    },
    {
      id: 'engelsk-vg1-7-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why do linguists consider varieties like Indian English or Australian English to be legitimate rather than "wrong"?',
        options: [
          { id: 'a', text: 'Because many people speak them', isCorrect: false },
          { id: 'b', text: 'Because they have consistent rules and serve their communities\' communication needs', isCorrect: true },
          { id: 'c', text: 'Because the British government approved them', isCorrect: false },
          { id: 'd', text: 'Because they\'re easier to learn', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'From a linguistic perspective, all language varieties that enable communication within a community are legitimate. These Englishes have consistent internal grammar and serve their speakers well. There\'s no objective basis for calling them "wrong."',
      },
    },
    {
      id: 'engelsk-vg1-7-3-n-section4',
      type: 'text',
      content: `## Language Attitudes and Standards

Despite what linguists say about varieties being equally valid, people often have strong opinions. Some varieties are prestigious; others are stigmatized. These attitudes reflect social hierarchies, not linguistic facts.

In many contexts, British Received Pronunciation or American Standard English are considered "correct." Other accents and varieties may be seen as less educated or less professional. This leads to real disadvantages for speakers of stigmatized varieties.

But attitudes are changing. There's growing recognition that insisting on one "standard" advantages native speakers unfairly. International business increasingly values intelligibility over conformity to any particular variety. The goal becomes being understood, not sounding British or American.

Some scholars advocate for "English as a Lingua Franca" (ELF), arguing that in international contexts, what matters is effective communication, not matching native speaker norms. If non-native speakers understand each other using features that native speakers might consider "wrong," does that wrongness actually matter?

For learners, this raises practical questions. Should you aim to sound British? American? Or should you aim for clear international intelligibility while maintaining your own linguistic identity? There's no single right answer, and the best answer may depend on your goals and context.`,
    },
    {
      id: 'engelsk-vg1-7-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the key argument of "English as a Lingua Franca" (ELF) scholars?',
        options: [
          { id: 'a', text: 'British English should be the international standard', isCorrect: false },
          { id: 'b', text: 'In international contexts, effective communication matters more than matching native speaker norms', isCorrect: true },
          { id: 'c', text: 'English should be replaced by another language', isCorrect: false },
          { id: 'd', text: 'Non-native speakers should always aim to sound American', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'ELF scholars argue that when English is used between non-native speakers, what matters is successful communication. If speakers understand each other, insisting on native speaker standards serves no practical purpose.',
      },
    },
    {
      id: 'engelsk-vg1-7-3-n-section5',
      type: 'text',
      content: `## Appreciating Diversity

The diversity of World Englishes is something to celebrate, not lament. Each variety carries culture, history, and creativity. When Indian speakers create "prepone" or Singaporeans use "lah," they're not corrupting English. They're enriching it.

This diversity also has practical implications for you. As someone who uses English internationally, you'll encounter many varieties. Being able to understand different accents and usages makes you a more effective communicator. Rigid insistence on one "correct" form can actually hamper communication.

It also raises questions about your own English. You're probably learning a variety that mixes British, American, and other influences. That's fine. Your English doesn't need to be "pure." What matters is that you can communicate effectively and develop confidence in your own voice.

There's also power in speaking English with an accent that marks your background. Your accent is part of your identity. While developing clear pronunciation is valuable for communication, you don't need to erase where you come from.

The future of English lies with its global speakers. As you learn and use English, you're participating in its ongoing evolution. The language belongs to all of us now.`,
    },
    {
      id: 'engelsk-vg1-7-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the most important goal for someone using English in international contexts?',
        options: [
          { id: 'a', text: 'Sounding exactly like a native speaker', isCorrect: false },
          { id: 'b', text: 'Using only British English vocabulary', isCorrect: false },
          { id: 'c', text: 'Communicating effectively while developing confidence in your own voice', isCorrect: true },
          { id: 'd', text: 'Avoiding all non-standard expressions', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Effective communication is the goal. While clear pronunciation and grammar are important, you don\'t need to sound like a native speaker or adhere rigidly to one variety. Your English can be both effective and authentically yours.',
      },
    },
    {
      id: 'engelsk-vg1-7-3-n-summary',
      type: 'text',
      content: `## Summary: The Many Englishes

You've explored the diversity of English varieties worldwide. Here are the key points:

**British vs American:**
Systematic differences in spelling, vocabulary, grammar, and pronunciation. Both contain many internal regional varieties.

**Post-Colonial Englishes:**
Indian, Nigerian, Singaporean, and many other Englishes have developed distinct features reflecting local languages and cultures. These are legitimate varieties, not errors.

**Other Varieties:**
Australian, South African, Irish, Caribbean, and many more. Each carries history and identity.

**Language Attitudes:**
Some varieties are prestigious, others stigmatized. These attitudes reflect social hierarchies, not linguistic facts. International contexts increasingly value intelligibility over conformity.

**For Learners:**
Understand various varieties. Aim for clear communication. Develop your own confident voice.

**Key Terms:**
Variety, standard, accent, dialect, World Englishes, English as a Lingua Franca, intelligibility.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 7.4 NARRATIVE: English in the Digital Age
// ============================================================================

export const CHAPTER_ENGELSK_VG1_7_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-7-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '7.4',
  title: 'English in the Digital Age',
  subtitle: 'Narrative Version',
  description: 'Explore how technology and the internet are shaping English in new and fascinating ways.',
  estimatedMinutes: 35,
  competenceGoals: [
    'beskrive sentrale trekk ved framveksten av engelsk som verdensspråk',
  ],
  linkedChapterId: 'engelsk-vg1-7-4',
  content: [
    {
      id: 'engelsk-vg1-7-4-n-intro',
      type: 'text',
      content: `## Language in the Age of Technology

LOL. ICYMI. TL;DR. Googled. Unfriend. FOMO. Doomscrolling. Influencer. Going viral. Ghosting. These words and abbreviations didn't exist a generation ago. Your parents might not have understood them when they first appeared, and your grandparents might still find some of them puzzling. Yet now they're part of everyday English, at least for many speakers, appearing in conversations, text messages, news articles, and even dictionaries. The digital age is changing language faster than any technological shift in human history.

This is not entirely new. Every major technology has affected language in some way. The invention of writing itself, thousands of years ago, fundamentally changed how humans communicate, allowing us to communicate across time and space in ways speech alone never could. The printing press, invented in the 15th century, standardized spelling and grammar and made books available to masses of people for the first time. The telegraph created new conventions for concise writing. The telephone changed how we conduct business and maintain relationships. Radio and television brought new styles of speech into our homes.

But the internet and social media have accelerated the pace of language change to an unprecedented, almost dizzying degree. Changes that might have taken decades now happen in years. Words can go from unknown to ubiquitous in months. A new expression can spread globally in days. We're living through a period of linguistic change unlike anything humans have experienced before.

In this chapter, we'll explore how digital communication is reshaping English. We'll look at new vocabulary entering the language at record pace. We'll examine new writing conventions that would puzzle your grandparents but seem natural to you. We'll consider new forms of communication that blur traditional boundaries. We'll address the worried question of whether these changes represent language "decline" or simply natural evolution. And we'll think about what it means to be a competent communicator in this rapidly changing digital world.`,
    },
    {
      id: 'engelsk-vg1-7-4-n-section1',
      type: 'text',
      content: `## New Words for a New World

Technology creates constant, unrelenting need for new vocabulary. Every new device, every new platform, every new way of doing things online requires new words to describe it. The process of vocabulary creation has always happened in human languages, of course, but never at this pace. Sometimes we coin entirely new words from scratch. Sometimes we take existing words and give them new meanings. Sometimes we combine existing words in new ways. Sometimes we borrow from other languages or from technical jargon. Sometimes we create abbreviations and acronyms. All of these processes are happening simultaneously, constantly adding new terms to the English language.

Brand names often become common words, a process linguists call genericization. To "google" something is to search for it online, regardless of what search engine you actually use. Even if you're using Bing or DuckDuckGo, you might still say you're "googling" something. The brand name has become a generic verb. Similarly, to "photoshop" an image is to digitally edit or manipulate it, even if you're using a completely different program like GIMP or Pixelmator. To "uber" somewhere means to take a rideshare, whether or not it's actually an Uber car. This genericization happens when a brand becomes so dominant in its category that its name becomes synonymous with the activity itself. It shows how deeply technology penetrates everyday life, so deeply that the brand names become our default words for entire categories of action.

Compound words and portmanteaus proliferate. "Blog" comes from "web log." "Podcast" combines "iPod" and "broadcast." "Vlog" is a "video blog." "Emoji" combines Japanese "e" (picture) and "moji" (character).

Technical terms enter everyday speech. "Bandwidth" originally meant the capacity of an electronic communication channel. Now people use it to mean mental or organizational capacity: "I don't have the bandwidth to take on another project." "Going viral" referred to how viruses spread. Now it describes content that spreads rapidly online.

Some new words describe entirely new phenomena. "Selfie" names a type of photograph that technology made common. "Troll" (as a verb meaning to provoke online) gave new meaning to an old word. "Doomscrolling" captures the experience of compulsively reading bad news online.`,
    },
    {
      id: 'engelsk-vg1-7-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is "genericization" in the context of technology and language?',
        options: [
          { id: 'a', text: 'When technology makes language simpler', isCorrect: false },
          { id: 'b', text: 'When brand names become common words for general actions or objects', isCorrect: true },
          { id: 'c', text: 'When languages combine into one', isCorrect: false },
          { id: 'd', text: 'When technical words are removed from dictionaries', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: '"Google" becoming a verb for searching online is genericization. The brand name has become a common word used regardless of the actual brand involved. This shows how deeply technology affects everyday language.',
      },
    },
    {
      id: 'engelsk-vg1-7-4-n-section2',
      type: 'text',
      content: `## The Language of Digital Communication

Digital communication has developed its own conventions that differ from traditional writing.

Abbreviations are ubiquitous. BRB (be right back), IMHO (in my humble opinion), TBH (to be honest), ICYMI (in case you missed it), FWIW (for what it's worth). These save time and create insider knowledge. If you know the abbreviations, you're part of the community.

Emoji have become a form of communication. They convey tone that text alone lacks. A sentence with a smiley face reads differently from one without. They can replace words entirely. They add nuance and emotional coloring. Their meanings can be surprisingly complex and vary by context and community.

Punctuation carries new meanings. A text with a period at the end can seem curt or angry to younger users, even though it's grammatically correct. ALL CAPS means shouting. Multiple exclamation marks signal enthusiasm!!!! These conventions are real rules, just not traditional ones.

Hashtags organize conversations and create communities. Originally a way to categorize content, hashtags have become cultural markers and forms of commentary. #MeToo. #BlackLivesMatter. A hashtag can be a movement.

Memes represent a new form of communication: shared images or formats that spread and evolve. Understanding meme culture requires cultural knowledge beyond language itself.`,
    },
    {
      id: 'engelsk-vg1-7-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Why might ending a text message with a period seem rude to some younger users?',
        options: [
          { id: 'a', text: 'Periods are grammatically incorrect in texting', isCorrect: false },
          { id: 'b', text: 'In digital communication, periods can convey curtness or displeasure, unlike in formal writing', isCorrect: true },
          { id: 'c', text: 'Younger users don\'t know what periods are', isCorrect: false },
          { id: 'd', text: 'Periods use too much data', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Digital communication has developed its own conventions. In texting, where messages naturally end without punctuation, adding a period can signal displeasure or coldness. These are real communicative rules, even if they differ from traditional grammar.',
      },
    },
    {
      id: 'engelsk-vg1-7-4-n-section3',
      type: 'text',
      content: `## Is the Internet "Ruining" English?

Every generation worries that the next generation is destroying language. The internet has intensified these fears. Are text speak and emoji making us unable to write properly? Is attention span shrinking? Is grammar dying?

The evidence suggests otherwise. Studies show that young people who use text speak are perfectly capable of switching to formal writing when appropriate. They're not confused about which context requires which register. If anything, digital natives may be more aware of audience and context because they navigate so many different communication spaces.

What's happening is not decline but diversification. We now have more ways to communicate, suited to more contexts. Formal academic writing still exists and still matters. But it sits alongside casual texting, which sits alongside social media posts, which sit alongside professional emails. Skilled communicators move between these registers fluidly.

Language change is normal. It has always happened. The speed may be faster now, but the process is the same. New words enter; some stick, some fade. Meanings shift. Conventions evolve. This is what living languages do. If English were unchanging, it would be dead.

That said, there are real concerns about attention and reading in the digital age. These are worth taking seriously. But they're not really about language change itself.`,
    },
    {
      id: 'engelsk-vg1-7-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What do studies show about young people who use text speak?',
        options: [
          { id: 'a', text: 'They cannot write formally anymore', isCorrect: false },
          { id: 'b', text: 'They are confused about proper grammar', isCorrect: false },
          { id: 'c', text: 'They can switch between text speak and formal writing appropriately', isCorrect: true },
          { id: 'd', text: 'They only communicate through images', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Research consistently shows that users of text speak understand it as one register among many. They can and do write formally when situations require it. Digital communication has added to their repertoire rather than replacing other abilities.',
      },
    },
    {
      id: 'engelsk-vg1-7-4-n-section4',
      type: 'text',
      content: `## Global English Online

The internet has accelerated English's global spread while also changing how it spreads. Online, varieties of English meet and influence each other in new ways.

Non-native speakers are increasingly influential in shaping online English. When the majority of English users online are non-native, their usages affect the language. Expressions from Indian English, Nigerian English, or other varieties spread beyond their original communities.

New global slang emerges. An expression that starts in one corner of the internet can spread worldwide within days. Meme culture crosses national boundaries. Gaming culture creates shared vocabulary.

At the same time, the internet enables minority languages and varieties to maintain communities. Speakers of small languages can find each other online. Regional varieties of English can maintain their distinctiveness even as speakers participate in global English spaces.

Translation technology is improving rapidly. While we're not yet at the point where real-time translation makes a lingua franca unnecessary, we're moving in that direction. What this means for English's future is uncertain.

The internet has also created new challenges for language learning. Learners have unprecedented access to authentic English content but must navigate informal registers and varieties that differ from what textbooks teach.`,
    },
    {
      id: 'engelsk-vg1-7-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'How has the internet affected varieties of English worldwide?',
        options: [
          { id: 'a', text: 'It has eliminated all varieties except American English', isCorrect: false },
          { id: 'b', text: 'Varieties meet and influence each other more than ever, while also maintaining distinct communities', isCorrect: true },
          { id: 'c', text: 'It has had no effect on language varieties', isCorrect: false },
          { id: 'd', text: 'It has made everyone speak the same way', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The internet enables both mixing and maintenance. Varieties influence each other as speakers interact globally. At the same time, communities can maintain their distinct varieties by connecting with others who speak the same way.',
      },
    },
    {
      id: 'engelsk-vg1-7-4-n-section5',
      type: 'text',
      content: `## Being a Digital Communicator

Living in the digital age requires new communication skills while maintaining traditional ones.

Develop fluency across registers. You need to be able to write a formal email, compose an effective tweet, text with friends appropriately, and contribute to professional online discussions. Each context has its own conventions. Skilled communicators match their language to the situation.

Be aware of your digital footprint. What you write online can persist indefinitely. Professional opportunities have been lost because of old social media posts. Think before you post.

Develop critical reading skills. The internet gives you access to more information than any library, but also to more misinformation. The ability to evaluate sources and distinguish reliable from unreliable information is essential.

Understand that digital communication lacks nonverbal cues. Tone is hard to convey in text. What seems like a joke to you might seem like an insult to someone else. Emoji and other cues help, but misunderstandings are common.

Stay open to language change. New words and conventions will continue to emerge. You don't have to adopt every trend, but dismissing change out of hand will leave you behind.

The digital age hasn't changed the fundamental goal of communication: connecting with other humans. It has just given us new tools and new challenges for doing so.`,
    },
    {
      id: 'engelsk-vg1-7-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-7-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the most important skill for a digital communicator?',
        options: [
          { id: 'a', text: 'Knowing all the latest abbreviations', isCorrect: false },
          { id: 'b', text: 'Avoiding all digital communication', isCorrect: false },
          { id: 'c', text: 'Being able to adapt language to different contexts while maintaining critical awareness', isCorrect: true },
          { id: 'd', text: 'Using as many emoji as possible', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Effective digital communication requires flexibility across contexts, critical evaluation of information, and awareness of how language works differently online. No single style or set of conventions is enough.',
      },
    },
    {
      id: 'engelsk-vg1-7-4-n-summary',
      type: 'text',
      content: `## Summary: English in the Digital World

You've explored how technology is changing English. Here are the key points:

**New Vocabulary:**
Technology creates new words through coinage, compounding, genericization, and repurposing. The pace of vocabulary change has accelerated.

**Digital Communication Conventions:**
Abbreviations, emoji, new punctuation meanings, hashtags, and memes create new forms of communication with their own rules.

**Is Language Declining?**
Evidence suggests diversification, not decline. Digital natives can switch between registers appropriately. Language change is normal.

**Global English Online:**
The internet accelerates mixing of varieties while also enabling communities to maintain distinctiveness.

**Being a Digital Communicator:**
Develop fluency across registers. Be aware of your footprint. Read critically. Understand the limits of text-based communication.

**Key Terms:**
Genericization, emoji, hashtag, meme, register, text speak, digital literacy.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const ENGELSK_VG1_NARRATIV_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_ENGELSK_VG1_5_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_5_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_5_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_5_4_NARRATIV,
  CHAPTER_ENGELSK_VG1_6_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_6_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_6_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_6_4_NARRATIV,
  CHAPTER_ENGELSK_VG1_6_5_NARRATIV,
  CHAPTER_ENGELSK_VG1_7_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_7_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_7_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_7_4_NARRATIV,
];
