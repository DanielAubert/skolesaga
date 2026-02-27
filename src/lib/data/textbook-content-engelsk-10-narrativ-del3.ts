/**
 * Tekstbok innhold for Engelsk 10. klasse - Narrativ versjon Del 3
 * Kapittel 8-9 (2 kapitler totalt)
 *
 * Engasjerende, fortellende versjoner av kapitlene optimalisert for lesing/lytting.
 * Hver narrativ versjon linker tilbake til originalkapittelet via linkedChapterId.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 8 NARRATIVE: Global Challenges
// ============================================================================

export const CHAPTER_ENGELSK_10_8_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-8-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '8',
  title: 'Global Challenges',
  subtitle: 'Narrative Version',
  description: 'Engage with the defining issues of our time -- climate change, migration, inequality, and the impact of technology on society.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive levemåter, samfunnsforhold og verdier i ulike engelskspråklige land og sammenligne med eget samfunn',
    'uttrykke seg med flyt og sammenheng tilpasset formål og situasjon',
    'bruke variert ordforråd og idiomatiske uttrykk i skriftlig og muntlig kommunikasjon',
    'diskutere og drøfte ulike emner knyttet til samfunn, politikk og etikk på engelsk',
  ],
  linkedChapterId: 'engelsk-10-8',
  content: [
    {
      id: 'engelsk-10-8-n-intro',
      type: 'text',
      content: `## A World of Connected Problems

In 2023, while you were sitting in a classroom in Norway, a farmer in Bangladesh watched rising floodwaters swallow her rice paddies. A teenager in Syria scrolled through social media in a refugee camp in Jordan, dreaming of the home she could not return to. A factory worker in Ohio lost his job to automation and wondered how to pay next month's rent. A student in Lagos coded an app on a second-hand laptop, hoping to solve a water shortage in her neighborhood.

These stories seem unrelated, but they are deeply connected. Climate change drove the floods in Bangladesh. War caused the displacement in Syria. Technology eliminated the job in Ohio. And technology also empowered the innovation in Lagos. The challenges facing our world are not isolated problems with simple solutions -- they are interconnected systems that affect every country, every community, and ultimately every person on the planet.

As a student in Norway, you might feel removed from these issues. But you are not. The phone in your pocket contains minerals mined in the Congo. The clothes you wear were likely stitched in Bangladesh or Vietnam. The oil that built Norway's wealth contributes to the climate change flooding that farmer's fields. We are all part of the same global web, and understanding that web is the first step toward making it better.

Let us explore four of the most pressing global challenges and consider how they connect to each other -- and to you.`,
    },
    {
      id: 'engelsk-10-8-n-section1',
      type: 'text',
      content: `## Climate Change: The Crisis That Multiplies All Others

Climate change is not one problem. It is a problem multiplier. Rising temperatures do not just make summers hotter -- they intensify hurricanes, extend droughts, melt glaciers, raise sea levels, acidify oceans, and disrupt the ecological systems that billions of people depend on for food and water. Every other global challenge becomes harder to solve when the climate is destabilizing.

The science is straightforward. Burning fossil fuels releases carbon dioxide and other greenhouse gases into the atmosphere. These gases trap heat, causing average global temperatures to rise. Since the Industrial Revolution, global temperatures have increased by approximately 1.1 degrees Celsius. That sounds small, but the difference between the current climate and the last ice age is only about 5 degrees. Small changes in average temperature produce enormous changes in weather patterns, ecosystems, and human systems.

The effects are not distributed equally. The countries that have contributed least to climate change -- many in Africa, South Asia, and the Pacific Islands -- suffer the most. Pacific Island nations like Tuvalu face the real possibility of disappearing entirely under rising seas. Meanwhile, the countries that have emitted the most carbon historically -- the United States, Europe, and increasingly China -- have more resources to adapt. This inequality is one of the great moral challenges of our time.

Norway occupies a unique position in this story. It is one of the world's wealthiest countries, with a large sovereign wealth fund built on oil and gas revenues. It is also a global leader in electric vehicles, renewable energy, and environmental policy. This tension -- between being a major fossil fuel exporter and a green energy pioneer -- defines Norway's complex relationship with climate change. Understanding this complexity is essential for any Norwegian citizen engaging with global environmental debates.

What can individuals do? This question sparks passionate debate. Some argue that individual actions -- recycling, reducing meat consumption, flying less -- are meaningful steps. Others argue that systemic change -- government policy, corporate regulation, international agreements -- is the only approach that can make a real difference. The truth likely involves both: individual choices create cultural momentum, and cultural momentum drives political change.`,
    },
    {
      id: 'engelsk-10-8-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on climate change and migration:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-8-n-quiz1-q0',
            task: 'Why is climate change described as a "problem multiplier"?',
            options: [
              { id: 'a', text: 'Because it causes temperatures to multiply rapidly', isCorrect: false },
              { id: 'b', text: 'Because it intensifies and worsens other existing global challenges', isCorrect: true },
              { id: 'c', text: 'Because it only affects multiple countries, not single ones', isCorrect: false },
              { id: 'd', text: 'Because scientists keep discovering more problems related to it', isCorrect: false },
            ],
            solution: 'Climate change is called a problem multiplier because it does not just create its own problems -- it makes every other global challenge worse. Droughts worsen food insecurity, rising seas intensify migration, extreme weather deepens poverty, and resource scarcity fuels conflict.',
          },
          {
            id: 'engelsk-10-8-n-quiz1-q1',
            task: 'What is Norway\'s complex relationship with climate change?',
            options: [
              { id: 'a', text: 'Norway denies climate change is happening', isCorrect: false },
              { id: 'b', text: 'Norway is both a major fossil fuel exporter and a leader in green energy', isCorrect: true },
              { id: 'c', text: 'Norway is only affected by climate change through rising sea levels', isCorrect: false },
              { id: 'd', text: 'Norway has no connection to global climate change', isCorrect: false },
            ],
            solution: 'Norway\'s wealth was largely built on oil and gas exports, making it a significant contributor to fossil fuel use globally. At the same time, Norway leads the world in electric vehicle adoption and renewable energy. This tension between fossil fuel wealth and green ambition defines Norway\'s complex position in climate debates.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-8-n-section2',
      type: 'text',
      content: `## Migration: People on the Move

Human beings have always migrated. From the earliest African migrations that populated every continent to the waves of European emigration that built the Americas and Australia, movement is fundamental to our species. What is new about modern migration is the scale, the speed, and the political controversy surrounding it.

In 2023, the United Nations estimated that over 100 million people worldwide were forcibly displaced -- by war, persecution, economic collapse, and increasingly by climate-related disasters. This number is unprecedented in human history. Some of these people cross international borders and become refugees. Others are displaced within their own countries. All of them face the challenge of rebuilding lives in unfamiliar places.

The reasons people migrate fall into two categories: push factors and pull factors. Push factors drive people away from their home -- war, poverty, political persecution, natural disasters, lack of opportunities. Pull factors draw them toward a destination -- safety, employment, education, family reunification, better living standards. Most migrants experience a combination of both.

Migration debates often become polarized. On one side, advocates emphasize humanitarian obligations, economic benefits (migrants fill labor shortages, start businesses, and contribute taxes), and cultural enrichment. On the other side, critics raise concerns about integration challenges, pressure on public services, cultural tensions, and security risks. Responsible debate requires engaging with both perspectives honestly, using evidence rather than emotion or stereotype.

For Norway specifically, immigration has transformed society over the past fifty years. Today, approximately 19% of Norway's population has an immigrant background. These communities have enriched Norwegian culture, filled essential jobs in healthcare and construction, and contributed to economic growth. They have also faced challenges including discrimination, language barriers, and the difficult process of building a new identity while preserving their heritage.`,
    },
    {
      id: 'engelsk-10-8-n-section3',
      type: 'text',
      content: `## Inequality and Technology: Two Forces Reshaping Society

Economic inequality -- the gap between the richest and the poorest -- has been growing in most countries for decades. In the United States, the wealthiest 1% owns more than the bottom 50% combined. In the United Kingdom, life expectancy differs by up to 20 years depending on your postal code. Even in relatively equal Norway, the gap has been widening since the 1990s.

Inequality is not just about money. It affects health (poorer people live shorter, sicker lives), education (children from wealthy families have better access to resources), safety (impoverished neighborhoods have higher crime rates), and opportunity (your parents' income is one of the strongest predictors of your own). This creates a cycle that is difficult to break: poverty breeds more poverty, while wealth generates more wealth.

Technology adds another dimension to the inequality picture. On one hand, technology democratizes access to information, education, and communication. A student in rural Kenya can access the same online courses as a student at Oxford. Social media gives voice to people who were previously unheard. Medical technology saves lives that would have been lost a generation ago.

On the other hand, technology creates new inequalities. The "digital divide" separates those with reliable internet access and digital skills from those without. Automation eliminates middle-income jobs while creating wealth for those who own the technology. Social media algorithms can amplify extremism, spread misinformation, and erode mental health. Artificial intelligence raises profound questions about employment, privacy, and even what it means to be human.

These challenges do not have simple solutions. They require cooperation between governments, businesses, civil society, and individuals. They require thinking across national borders and beyond short-term interests. They require exactly the kind of critical, informed, globally aware thinking that your English education is designed to develop.`,
    },
    {
      id: 'engelsk-10-8-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on inequality and technology:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-8-n-quiz2-q0',
            task: 'What does the "digital divide" refer to?',
            options: [
              { id: 'a', text: 'The gap between people who prefer digital and print media', isCorrect: false },
              { id: 'b', text: 'The separation between those with reliable internet access and digital skills and those without', isCorrect: true },
              { id: 'c', text: 'The difference between old and new technology', isCorrect: false },
              { id: 'd', text: 'The border between countries that produce and consume technology', isCorrect: false },
            ],
            solution: 'The digital divide describes the gap between people who have reliable access to the internet, digital devices, and the skills to use them, and those who do not. This divide creates new forms of inequality in education, employment, information access, and social participation.',
          },
          {
            id: 'engelsk-10-8-n-quiz2-q1',
            task: 'In migration studies, what are "push factors" and "pull factors"?',
            options: [
              { id: 'a', text: 'Push factors attract migrants; pull factors repel them', isCorrect: false },
              { id: 'b', text: 'Push factors are economic; pull factors are cultural', isCorrect: false },
              { id: 'c', text: 'Push factors drive people away from home; pull factors draw them toward a destination', isCorrect: true },
              { id: 'd', text: 'Push factors are voluntary; pull factors are forced', isCorrect: false },
            ],
            solution: 'Push factors are conditions that drive people away from their home (war, poverty, persecution, disasters), while pull factors are conditions that attract them to a destination (safety, jobs, education, family). Most migrants experience a combination of both push and pull factors.',
          },
          {
            id: 'engelsk-10-8-n-quiz2-q2',
            task: 'Why is economic inequality described as a "cycle"?',
            options: [
              { id: 'a', text: 'Because it goes through seasonal phases like weather', isCorrect: false },
              { id: 'b', text: 'Because poverty tends to perpetuate more poverty while wealth generates more wealth', isCorrect: true },
              { id: 'c', text: 'Because every person experiences both rich and poor phases in life', isCorrect: false },
              { id: 'd', text: 'Because governments repeatedly try and fail to fix it', isCorrect: false },
            ],
            solution: 'Inequality is cyclical because poverty limits access to education, healthcare, and opportunities, which makes it harder to escape poverty. Meanwhile, wealth provides advantages (better schools, connections, capital) that generate more wealth. Without intervention, this cycle reinforces itself across generations.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-8-n-summary',
      type: 'text',
      content: `## Summary

The defining global challenges of our time are deeply interconnected. **Climate change** acts as a problem multiplier, intensifying droughts, floods, and resource scarcity while disproportionately affecting the countries that contributed least to the problem. **Migration** is driven by push factors (war, poverty, climate disasters) and pull factors (safety, opportunity), and responsible debate requires engaging with both humanitarian and practical perspectives.

**Economic inequality** creates self-perpetuating cycles where poverty breeds more poverty and wealth generates more wealth, affecting health, education, and opportunity. **Technology** both democratizes access and creates new divides. The **digital divide** separates those with digital access from those without, while automation and AI raise profound questions about employment and society. These challenges require global cooperation, critical thinking, and the informed perspective that comes from understanding multiple viewpoints.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 9 NARRATIVE: Identity and Belonging
// ============================================================================

export const CHAPTER_ENGELSK_10_9_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-9-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '9',
  title: 'Identity and Belonging',
  subtitle: 'Narrative Version',
  description: 'Explore the complex terrain of identity, self-expression, and belonging through personal reflection and English-language literature.',
  estimatedMinutes: 35,
  competenceGoals: [
    'lese, diskutere og reflektere over innhold og virkemidler i engelskspråklige tekster fra ulike kilder',
    'uttrykke seg med flyt og sammenheng tilpasset formål og situasjon',
    'utforske og reflektere over mangfold og samfunnsforhold i den engelskspråklige verden og sammenligne med egne erfaringer',
    'skrive kreative, informative og argumenterende tekster med struktur og sammenheng',
  ],
  linkedChapterId: 'engelsk-10-9',
  content: [
    {
      id: 'engelsk-10-9-n-intro',
      type: 'text',
      content: `## Who Are You? (It Is More Complicated Than You Think)

If someone asked you "Who are you?" how would you answer? You might start with your name. Then perhaps your age, where you live, what school you attend. But quickly, the question gets harder. Are you the same person at school as you are at home? The same online as offline? The same person you were three years ago? Will you be the same person three years from now?

Identity is one of the most fundamental human questions, and also one of the most complicated. Philosophers, psychologists, writers, and ordinary people have been wrestling with it for thousands of years. In your teenage years, the question becomes especially intense, because you are in the process of becoming -- separating from your childhood self, testing different versions of who you might be, and gradually constructing the identity you will carry into adulthood.

English-language literature has a rich tradition of exploring identity and belonging. From Shakespeare's characters struggling with duty and desire, to Sylvia Plath's raw poetry about selfhood, to contemporary young adult novels about growing up between cultures -- literature gives us language for experiences that are otherwise hard to articulate. Reading about other people's identity journeys helps us understand our own.

In this chapter, we will explore what identity means, how we express it, and what happens when our sense of belonging is challenged.`,
    },
    {
      id: 'engelsk-10-9-n-section1',
      type: 'text',
      content: `## The Many Layers of Identity

Identity is not a single thing -- it is a collection of overlapping layers that together make you uniquely you. Psychologists describe these layers as moving from the most visible to the most internal.

**Social identity** includes the groups you belong to: your nationality, ethnicity, gender, religion, social class, and the communities you identify with. These are largely given to you by birth and upbringing, though you may later choose to embrace, reject, or redefine them. Being Norwegian, being a football player, being Muslim, being from a small town -- these social categories shape how others see you and, importantly, how you see yourself.

**Personal identity** includes your individual traits, values, beliefs, and choices. Are you introverted or extroverted? Creative or analytical? Do you value loyalty above honesty, or honesty above everything? What are you passionate about? What makes you angry? Personal identity is shaped by experience and choice, and it evolves as you grow.

**Online identity** has become a distinct layer for your generation. The version of yourself you present on social media -- the photos you post, the content you share, the way you interact -- may differ significantly from your offline self. Some people carefully curate a polished online persona, while others are more authentic. Research shows that the gap between online and offline identity can affect mental health: constantly comparing your real life to others' curated highlights can erode self-esteem.

**Cultural identity** is particularly relevant for students in today's diverse Norway. Many young people in Norway navigate between cultures -- the culture of their parents' homeland and the Norwegian culture they grew up in. This "third culture" experience can be enriching, providing multiple perspectives and linguistic skills, but it can also be challenging, creating a feeling of not fully belonging to either world.

The important insight is that identity is not fixed. It is a process, not a destination. The psychologist Erik Erikson described identity formation as a series of crises -- not dramatic emergencies, but turning points where you must integrate new experiences into your sense of self. Each crisis, when resolved successfully, adds a new layer of strength and self-understanding.`,
    },
    {
      id: 'engelsk-10-9-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on identity:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-9-n-quiz1-q0',
            task: 'What is the difference between social identity and personal identity?',
            options: [
              { id: 'a', text: 'Social identity is public, personal identity is private', isCorrect: false },
              { id: 'b', text: 'Social identity relates to group membership, personal identity relates to individual traits and values', isCorrect: true },
              { id: 'c', text: 'Social identity is chosen, personal identity is inherited', isCorrect: false },
              { id: 'd', text: 'There is no meaningful difference between them', isCorrect: false },
            ],
            solution: 'Social identity encompasses the groups you belong to (nationality, ethnicity, gender, religion), while personal identity includes your individual characteristics, values, beliefs, and choices. Both layers interact and influence each other in complex ways.',
          },
          {
            id: 'engelsk-10-9-n-quiz1-q1',
            task: 'Why might navigating between two cultures be both enriching and challenging for young people in Norway?',
            options: [
              { id: 'a', text: 'Because learning two languages is always difficult', isCorrect: false },
              { id: 'b', text: 'Because it provides multiple perspectives but can create a sense of not fully belonging to either culture', isCorrect: true },
              { id: 'c', text: 'Because Norwegian culture does not accept other cultures', isCorrect: false },
              { id: 'd', text: 'Because parents always disagree with Norwegian values', isCorrect: false },
            ],
            solution: 'A "third culture" experience provides valuable gifts -- multiple perspectives, linguistic skills, cultural flexibility. But it can also create a sense of being between worlds, not fully belonging to either the heritage culture or the Norwegian culture. This tension is a common theme in contemporary literature.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-9-n-section2',
      type: 'text',
      content: `## Self-Expression: Finding Your Voice

Self-expression is the outward manifestation of identity -- the ways you communicate who you are to the world. Language, clothing, music, art, social media presence, and even silence are all forms of self-expression.

Language is perhaps the most powerful tool for self-expression. The words you choose, the way you speak, the languages you use, and the register you adopt all communicate something about your identity. Code-switching -- shifting between languages, dialects, or registers depending on the situation -- is something multilingual people do constantly. You might speak Norwegian dialect with family, bokmal at school, English with international friends, and a completely different register on social media. Each version is authentically you, adapted to a different context.

Literature offers a space for exploring self-expression that daily life sometimes does not. In a poem, you can express emotions that feel too raw for conversation. In a story, you can inhabit a character whose experiences differ from your own and discover unexpected resonances. This is the empathic power of literature -- it lets you experience other lives from the inside out.

Consider how poetry expresses identity. When Maya Angelou writes "Still I Rise," she is expressing defiance against oppression and claiming her identity as a Black woman who will not be diminished. When Warsan Shire writes about the refugee experience, she gives voice to people who are often spoken about but rarely heard. When a Norwegian teenager writes a poem about feeling caught between cultures, they are using language to make sense of an experience that resists easy description.

Creative writing is not just an academic exercise -- it is a way of knowing. When you write about your experiences, you organize them, give them shape, and gain a measure of understanding and control. This is why journaling, poetry, and personal essays are recommended by psychologists as tools for processing difficult emotions and experiences.`,
    },
    {
      id: 'engelsk-10-9-n-section3',
      type: 'text',
      content: `## Belonging: The Human Need to Connect

The need to belong is one of the deepest human drives. Psychologist Abraham Maslow placed it at the center of his hierarchy of needs, right above safety and below self-esteem. We are social creatures who thrive in connection and suffer in isolation.

Belonging means feeling accepted, valued, and included in a group. It does not require being identical to others -- it requires feeling that you are welcome as you are. The difference is crucial. A group that demands conformity as the price of admission is not offering genuine belonging -- it is offering conditional acceptance. True belonging allows for individuality within community.

For teenagers, the question of belonging is especially acute. You are separating from your family of origin and seeking your place in the wider world. Peer groups become enormously important. The desire to fit in can lead to positive outcomes -- finding like-minded friends, discovering new interests, developing social skills -- but it can also lead to negative ones: conformity at the cost of authenticity, exclusion of those who are "different," and the pain of rejection.

English-language literature is full of stories about belonging and exclusion. In *The Outsiders* by S.E. Hinton, rival groups define themselves by what they are not -- Greasers are not Socs, and Socs are not Greasers. The tragedy is that the characters have more in common than they realize. In *The Hate U Give* by Angie Thomas, a teenager navigates between her Black neighborhood and her predominantly white school, belonging fully to neither. These stories resonate because the human need to belong is universal, even as the specific forms of belonging vary across cultures and contexts.

The concept of "home" is deeply connected to belonging. Home is not just a physical place -- it is the feeling of being where you are supposed to be, surrounded by people who know and accept you. For some, home is a fixed location. For others, especially those who have migrated or grown up between cultures, home is a more portable and complex concept. As the writer Pico Iyer puts it, "Home is not just the place where you happen to be born. It is the place where you become yourself."`,
    },
    {
      id: 'engelsk-10-9-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on self-expression and belonging:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-9-n-quiz2-q0',
            task: 'What is "code-switching" in the context of language and identity?',
            options: [
              { id: 'a', text: 'Switching between programming languages when coding', isCorrect: false },
              { id: 'b', text: 'Shifting between languages, dialects, or registers depending on the social situation', isCorrect: true },
              { id: 'c', text: 'Changing your opinions to fit the group you are with', isCorrect: false },
              { id: 'd', text: 'Translating text from one language to another', isCorrect: false },
            ],
            solution: 'Code-switching is the practice of shifting between languages, dialects, or registers depending on the context. A multilingual person might speak dialect with family, formal language at school, and English with international friends. Each version is authentically part of their identity.',
          },
          {
            id: 'engelsk-10-9-n-quiz2-q1',
            task: 'According to the text, what is the difference between genuine belonging and conditional acceptance?',
            options: [
              { id: 'a', text: 'Genuine belonging is permanent, conditional acceptance is temporary', isCorrect: false },
              { id: 'b', text: 'Genuine belonging allows individuality within community, while conditional acceptance demands conformity', isCorrect: true },
              { id: 'c', text: 'Genuine belonging is for family, conditional acceptance is for friends', isCorrect: false },
              { id: 'd', text: 'There is no real difference between them', isCorrect: false },
            ],
            solution: 'True belonging means being accepted as you are, with room for individuality within the group. Conditional acceptance demands that you conform to the group\'s expectations as the price of inclusion. The difference matters because conformity-based acceptance can suppress authentic identity.',
          },
          {
            id: 'engelsk-10-9-n-quiz2-q2',
            task: 'Why is creative writing described as "a way of knowing"?',
            options: [
              { id: 'a', text: 'Because writing teaches you grammar and vocabulary', isCorrect: false },
              { id: 'b', text: 'Because writing about experiences helps organize, shape, and understand them', isCorrect: true },
              { id: 'c', text: 'Because published authors are considered knowledgeable', isCorrect: false },
              { id: 'd', text: 'Because writing is required for academic degrees', isCorrect: false },
            ],
            solution: 'Creative writing helps you process experiences by organizing them into narrative form, giving them shape and meaning. This is why journaling and personal essays are recommended by psychologists as tools for understanding difficult emotions. Writing about something is a way of making sense of it.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-9-n-summary',
      type: 'text',
      content: `## Summary

**Identity** is a multilayered construct comprising social identity (group memberships), personal identity (individual traits and values), online identity (digital self-presentation), and cultural identity (heritage and context). Identity is not fixed -- it is a dynamic process of becoming, shaped by experience and choice.

**Self-expression** communicates identity to the world through language, art, and creative choices. **Code-switching** between languages and registers is a natural part of multilingual identity. Literature and creative writing serve as powerful tools for exploring and articulating identity experiences.

**Belonging** is a fundamental human need -- the desire to feel accepted, valued, and included. True belonging allows individuality within community, unlike conditional acceptance that demands conformity. English-language literature richly explores themes of belonging, exclusion, and the complex meaning of "home" -- themes that resonate across cultures and generations.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// FINAL EXPORT
// ============================================================================

export const ENGELSK_10_NARRATIV_DEL3_CHAPTERS = [
  CHAPTER_ENGELSK_10_8_NARRATIV,
  CHAPTER_ENGELSK_10_9_NARRATIV,
];
