/**
 * Engelsk 10. klasse - Narrative Versions Part 6 (Chapters 17-22)
 *
 * Engaging, narrative versions of chapters optimized for reading/listening.
 * Each narrative version links back to the original chapter via linkedChapterId.
 *
 * Covers: Literature analysis — Short Stories, Poetry, The Novel, Drama,
 *         Indigenous/Postcolonial Literature, Young Adult Literature
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 17 NARRATIVE: Short Stories — Close Reading
// ============================================================================

export const CHAPTER_ENGELSK_10_17_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-17-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '17',
  title: 'Short Stories — Close Reading',
  subtitle: 'Narrativ versjon',
  description: 'Learn to read short stories like a detective, uncovering hidden meaning through narrative voice, characterisation, and symbolism.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-17',
  content: [
    {
      id: 'engelsk-10-17-n-intro',
      type: 'text',
      content: `## A World in a Few Pages

Imagine walking into a room and immediately sensing that something important just happened. There is tension in the air, a half-finished cup of coffee on the table, a letter lying open. You do not know the full story, but you feel its weight. That is exactly how a great short story works. It drops you into the middle of human experience and expects you to pay attention.

Short stories are not simply shorter novels. They are their own art form, with rules and possibilities entirely their own. Because every word matters more when there are fewer of them, short story writers must be precise. They cannot afford filler or unnecessary description. Every sentence carries weight. Every detail is chosen deliberately. This makes short stories the perfect training ground for close reading, the skill of paying careful, sustained attention to a text.

In this chapter, we are going to become literary detectives. We will learn to examine narrative voice, characterisation, and symbolism, three tools that writers use to pack enormous meaning into compact spaces. By the end, you will be able to pick up any short story and begin uncovering layers of meaning that casual readers miss entirely.`,
    },
    {
      id: 'engelsk-10-17-n-section1',
      type: 'text',
      content: `## Narrative Voice: Who Is Telling the Story?

The very first question you should ask when reading any story is: who is talking to me? The answer shapes everything. The narrative voice is not just a technical choice; it is the lens through which you experience the entire world of the story.

A **first-person narrator** uses "I" and tells the story from inside it. You see only what they see, know only what they know. This creates intimacy. You feel close to this character, perhaps uncomfortably close. But here is the crucial thing: first-person narrators can be wrong. They can lie, exaggerate, misunderstand, or hide things. When a character tells you "I was completely calm," you might notice from their actions that they were anything but calm. This gap between what a narrator says and what we suspect is true creates dramatic irony, and it is one of the most powerful tools in fiction.

A **third-person narrator** stands outside the story, using "he," "she," and "they." But there are important variations. A third-person limited narrator follows one character closely, giving us access to their thoughts while remaining mysterious about everyone else. A third-person omniscient narrator knows everything about everyone, sometimes even stepping back to comment on events from above, like a god surveying human struggles.

Consider how different a story about a school conflict would feel told by the bully, by the victim, by a bystander who saw everything, or by an omniscient narrator who knows what each person was thinking and feeling. Same events, completely different stories. That is the power of narrative voice.

Pay attention also to **tone**. Is the narrator sarcastic? Earnest? Detached? Emotional? The tone colours every sentence and guides your emotional response. A narrator who describes a tragedy in a flat, emotionless tone creates an unsettling effect, as if the event is too painful to engage with directly. A narrator who gushes with emotion about trivial things might be revealing their immaturity or self-absorption.`,
    },
    {
      id: 'engelsk-10-17-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on narrative voice:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-17-n-quiz1-q0',
            task: 'What is an "unreliable narrator"?',
            options: [
              { id: 'a', text: 'A narrator who forgets parts of the story', isCorrect: false },
              { id: 'b', text: 'A narrator whose account we have reason to doubt or question', isCorrect: true },
              { id: 'c', text: 'A narrator who tells the story out of order', isCorrect: false },
              { id: 'd', text: 'A narrator who speaks in the second person', isCorrect: false },
            ],
            solution: 'An unreliable narrator is one whose version of events we cannot fully trust. They may lie, exaggerate, misunderstand, or have limited knowledge. The gap between their account and the truth creates dramatic irony.',
          },
          {
            id: 'engelsk-10-17-n-quiz1-q1',
            task: 'What is the difference between third-person limited and third-person omniscient narration?',
            options: [
              { id: 'a', text: 'Limited uses "she/he" while omniscient uses "I"', isCorrect: false },
              { id: 'b', text: 'Limited follows one character\'s perspective while omniscient knows all characters\' thoughts', isCorrect: true },
              { id: 'c', text: 'Limited is used in short stories while omniscient is used in novels', isCorrect: false },
              { id: 'd', text: 'There is no real difference between them', isCorrect: false },
            ],
            solution: 'Third-person limited stays close to one character, revealing only their thoughts and perceptions. Third-person omniscient has access to every character\'s inner world and can move freely between perspectives.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-17-n-section2',
      type: 'text',
      content: `## Characterisation: How Writers Build People on the Page

Characters in short stories must come alive quickly. Unlike novels, where an author has hundreds of pages to develop a personality, short story writers have perhaps a dozen pages or even fewer. So how do they do it?

**Direct characterisation** is when the narrator simply tells you what a character is like: "Maria was stubborn and fiercely independent." This is efficient, but it does not always feel convincing. After all, anyone can make a claim.

**Indirect characterisation** is far more powerful. Here, the writer shows you the character through their actions, dialogue, thoughts, and how others react to them. Instead of saying Maria is stubborn, the writer might show her refusing to leave a burning building because she insists on finding her cat. Instead of telling you a man is nervous, the writer might describe him drumming his fingers on the table and checking his watch every thirty seconds. You draw your own conclusions, and because you have worked for the understanding, it feels more real and more satisfying.

**Dialogue** is especially revealing in short stories. How a character speaks, the words they choose, the rhythm of their sentences, what they avoid saying, all of this builds personality. A character who uses long, elaborate sentences is different from one who speaks in blunt fragments. A character who constantly interrupts others reveals something important about themselves. And sometimes the most powerful dialogue is what remains unspoken. The pauses, the deflections, the subject changes can tell you more than any speech.

Watch for **contrast** as well. Writers often place characters in opposition to each other so that each one's qualities stand out more sharply. A generous character seems even more generous next to a selfish one. A quiet character's silence becomes more meaningful when everyone around them is shouting.`,
    },
    {
      id: 'engelsk-10-17-n-section3',
      type: 'text',
      content: `## Symbolism: The Hidden Language of Stories

Here is where close reading becomes truly exciting. Symbolism is the art of making concrete objects, settings, or events represent something larger and more abstract. When you learn to spot symbols, stories open up like flowers, revealing layers of meaning you never noticed before.

A **symbol** is something that operates on two levels at once. On the surface, it is exactly what it appears to be. A storm is a storm. A locked door is a locked door. A bird in a cage is literally a bird in a cage. But on a deeper level, these things also represent ideas: the storm represents emotional turmoil, the locked door represents exclusion or secrets, the caged bird represents captivity or lost freedom.

How do you know when something is symbolic? Look for objects, images, or events that receive unusual emphasis. If a writer spends three sentences describing a cracked mirror when they describe everything else in one sentence, that mirror probably matters. Look for repetition. If the colour red keeps appearing, it is likely symbolic. Look for patterns that connect to the story's themes. A story about freedom might fill its scenes with birds, open windows, and wide skies.

**Setting** often works symbolically too. A story set in winter might be exploring themes of death, isolation, or emotional coldness. A story that takes place entirely in one small room might be examining confinement or claustrophobia, whether physical or emotional. The weather, the time of day, the landscape, none of these are accidental in a well-crafted short story.

The key is to ask yourself: why did the author choose this particular detail? In a short story, where space is limited and every word counts, nothing is there by accident. If a character wears a red scarf, the writer chose red for a reason. If a scene takes place at sunset rather than noon, that timing carries meaning. Your job as a close reader is to notice these choices and consider what they add to the story's larger meaning.

Remember, though, that symbols should enhance your reading, not replace it. A symbol does not have one fixed meaning that you must decode like a secret message. The cracked mirror might represent broken self-image in one story and fractured relationships in another. Context determines meaning. The joy of close reading is in exploring possibilities, not in finding the single "correct" answer.`,
    },
    {
      id: 'engelsk-10-17-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on characterisation and symbolism:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-17-n-quiz2-q0',
            task: 'Which is an example of indirect characterisation?',
            options: [
              { id: 'a', text: '"John was a kind man."', isCorrect: false },
              { id: 'b', text: 'John gave his only umbrella to a stranger in the rain and walked home soaked.', isCorrect: true },
              { id: 'c', text: '"Everyone knew John was kind."', isCorrect: false },
              { id: 'd', text: 'The narrator explains John\'s personality in detail.', isCorrect: false },
            ],
            solution: 'Indirect characterisation shows character through actions, dialogue, and behaviour rather than telling us directly. John giving away his umbrella shows his kindness without the narrator having to state it.',
          },
          {
            id: 'engelsk-10-17-n-quiz2-q1',
            task: 'How can you identify that something is being used as a symbol in a story?',
            options: [
              { id: 'a', text: 'The author always explains symbols in footnotes', isCorrect: false },
              { id: 'b', text: 'Symbols are always capitalised in the text', isCorrect: false },
              { id: 'c', text: 'The object receives unusual emphasis, repetition, or connects to the story\'s themes', isCorrect: true },
              { id: 'd', text: 'Only literary critics can identify symbols', isCorrect: false },
            ],
            solution: 'You can spot symbols by looking for objects or images that receive unusual emphasis, appear repeatedly, or connect meaningfully to the story\'s larger themes. In a short story, where every word counts, nothing is there by accident.',
          },
          {
            id: 'engelsk-10-17-n-quiz2-q2',
            task: 'Why is dialogue especially important in short stories?',
            options: [
              { id: 'a', text: 'It fills up pages quickly so the story seems longer', isCorrect: false },
              { id: 'b', text: 'It efficiently reveals character through word choice, rhythm, and what remains unsaid', isCorrect: true },
              { id: 'c', text: 'Short stories must contain at least 50% dialogue', isCorrect: false },
              { id: 'd', text: 'Readers skip description and only read dialogue', isCorrect: false },
            ],
            solution: 'In short stories, where space is limited, dialogue is an efficient tool for characterisation. How characters speak, what words they choose, and especially what they avoid saying all reveal personality and emotion.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-17-n-summary',
      type: 'text',
      content: `## Summary

Close reading is the art of paying careful, sustained attention to a text. In short stories, where every word carries extra weight, close reading is both essential and rewarding.

**Narrative voice** shapes everything about your reading experience. First-person narrators create intimacy but may be unreliable. Third-person narrators can be limited to one perspective or omniscient, knowing all. The narrator's tone guides your emotional response.

**Characterisation** in short stories must work quickly. Direct characterisation tells you about characters, while indirect characterisation shows you through actions, dialogue, thoughts, and others' reactions. Dialogue is especially powerful because how characters speak reveals who they are.

**Symbolism** adds deeper layers of meaning. Concrete objects and settings represent abstract ideas. You can spot symbols by looking for unusual emphasis, repetition, and connections to themes. Symbols enrich your reading but do not have fixed meanings; context always determines interpretation.

Together, these three tools give you a framework for unlocking any short story. The more you practise close reading, the more you will see, and the richer your experience of literature will become.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 18 NARRATIVE: Poetry — Rhythm and Meaning
// ============================================================================

export const CHAPTER_ENGELSK_10_18_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-18-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '18',
  title: 'Poetry — Rhythm and Meaning',
  subtitle: 'Narrativ versjon',
  description: 'Discover how poets use rhythm, imagery, and figurative language to compress enormous feeling into surprisingly few words.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-18',
  content: [
    {
      id: 'engelsk-10-18-n-intro',
      type: 'text',
      content: `## Why Poetry Matters

Let us be honest. Many people find poetry intimidating. They open a poem, read a few lines, and think: I have no idea what this means. But here is a secret that experienced readers know: you do not need to "solve" a poem the way you solve a maths problem. Poetry is not a puzzle with one correct answer. It is an experience, and your first, most important task is simply to let yourself have that experience.

Think about music for a moment. When you hear a song that moves you, do you immediately pause to analyse every lyric? Probably not. You feel the rhythm, absorb the mood, and let the words wash over you. Only later might you look up the lyrics and think about what they mean. Poetry works the same way. Start by reading the poem aloud. Let the sounds and rhythm do their work. Then read it again, more slowly. And again. Each reading reveals something new.

In this chapter, we will explore three essential elements of poetry: rhythm, imagery, and figurative language. These are the tools poets use to compress enormous meaning and feeling into surprisingly few words. By understanding how they work, you will be able to appreciate poetry not as a school obligation but as one of humanity's oldest and most powerful forms of expression.`,
    },
    {
      id: 'engelsk-10-18-n-section1',
      type: 'text',
      content: `## Rhythm: The Heartbeat of a Poem

Every poem has a rhythm, even poems that seem to have none. Rhythm is the pattern of stressed and unstressed syllables, the beat that drives the poem forward. It is the heartbeat beneath the words.

In traditional English poetry, rhythm is organised into **metre**. The most common metre is **iambic pentameter**, a pattern of five pairs of syllables where each pair goes da-DUM. "Shall I comPARE thee TO a SUMmer's DAY?" wrote Shakespeare, and that line has exactly that rhythm: five beats, each one rising from an unstressed syllable to a stressed one. This pattern sounds natural to the English ear because it mirrors the rhythm of ordinary speech, but it also elevates language, giving it a formal, measured quality.

But rhythm in poetry is not just about counting syllables. It is about how the sound supports the meaning. A poem about running might use short, punchy lines that force you to read quickly, mimicking the breathlessness of a runner. A poem about grief might use long, slow lines that drag, as if each word is heavy with sorrow. When rhythm and meaning work together, the effect is powerful.

**Free verse** is poetry that does not follow a regular metre. This does not mean it has no rhythm at all. Listen to the opening of Walt Whitman's "Song of Myself": "I celebrate myself, and sing myself, / And what I assume you shall assume." There is no strict metre, but there is a rolling, expansive rhythm that mirrors the poem's themes of freedom and openness. Free verse poets create rhythm through line length, repetition, and the natural stresses of spoken English.

**Rhyme** works alongside rhythm to create musical effects. End rhyme, where the last words of lines rhyme with each other, is the most obvious type. But internal rhyme, where words within a line rhyme, creates subtler music. Slant rhyme, or near rhyme, where words almost rhyme but not quite (like "moon" and "bone"), creates a feeling of slight unease that poets exploit deliberately.

When you read a poem, try reading it aloud and tapping the rhythm on the table. Where does the beat fall? Is the rhythm regular or irregular? Does it speed up or slow down? These are not trivial questions. They are the foundation of how the poem communicates.`,
    },
    {
      id: 'engelsk-10-18-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on rhythm in poetry:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-18-n-quiz1-q0',
            task: 'What is iambic pentameter?',
            options: [
              { id: 'a', text: 'A poem with five lines', isCorrect: false },
              { id: 'b', text: 'A rhythm pattern of five pairs of unstressed-stressed syllables per line', isCorrect: true },
              { id: 'c', text: 'A poem that rhymes every five lines', isCorrect: false },
              { id: 'd', text: 'A type of free verse poetry', isCorrect: false },
            ],
            solution: 'Iambic pentameter consists of five "iambs" per line, where each iamb is an unstressed syllable followed by a stressed one (da-DUM). It is the most common metre in English poetry.',
          },
          {
            id: 'engelsk-10-18-n-quiz1-q1',
            task: 'What is "slant rhyme"?',
            options: [
              { id: 'a', text: 'A rhyme that appears in the middle of a line', isCorrect: false },
              { id: 'b', text: 'Words that almost rhyme but not quite, like "moon" and "bone"', isCorrect: true },
              { id: 'c', text: 'A rhyme written in italics', isCorrect: false },
              { id: 'd', text: 'A perfect rhyme at the end of a line', isCorrect: false },
            ],
            solution: 'Slant rhyme (also called near rhyme or half rhyme) occurs when words share similar but not identical sounds. Poets use it deliberately to create subtle tension or unease.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-18-n-section2',
      type: 'text',
      content: `## Imagery: Painting Pictures with Words

If rhythm is the heartbeat of a poem, imagery is its eyes, ears, nose, tongue, and fingertips. Imagery is language that appeals to the senses, creating vivid pictures and experiences in the reader's mind.

The most common type is **visual imagery**, language that makes you see something. "The fog comes on little cat feet," wrote Carl Sandburg, and suddenly the fog is not just weather. It is a quiet, soft, cautious creature creeping into the city. You can see it moving.

But the best poets engage all the senses. **Auditory imagery** makes you hear: the crash of waves, the whisper of leaves, the silence of an empty house. **Tactile imagery** makes you feel: the roughness of bark, the sting of cold water, the weight of a hand on your shoulder. **Olfactory imagery** engages smell: baking bread, wet earth after rain, smoke. **Gustatory imagery** invokes taste: the sourness of a lemon, the bitterness of medicine.

Why does imagery matter so much? Because it transforms abstract ideas into physical experiences. A poet could write "I was sad" and convey information. But Emily Dickinson wrote "After great pain, a formal feeling comes — / The Nerves sit ceremonious, like Tombs" and made you feel the numbness of grief in your body. That is the difference between telling and showing, and it is the reason poetry can move us more deeply than straightforward prose.

When you analyse a poem's imagery, ask yourself: what do I see, hear, feel, smell, or taste? How do these sensory details contribute to the poem's mood and meaning? Is the imagery warm or cold, bright or dark, soft or sharp? These patterns reveal the poem's emotional landscape.`,
    },
    {
      id: 'engelsk-10-18-n-section3',
      type: 'text',
      content: `## Figurative Language: Saying One Thing to Mean Another

Here is where poetry truly stretches the boundaries of what language can do. Figurative language is when words are used in ways that go beyond their literal meaning to create new connections and deeper understanding.

**Metaphor** is the most powerful tool in the poet's kit. A metaphor says that one thing is another: "Life is a journey," "Time is money," "The world is a stage." These are not factual statements. Life is not literally a journey, and time is not literally money. But by connecting two different things, a metaphor lights up both of them in new ways. When Shakespeare writes "All the world's a stage, and all the men and women merely players," he makes us think about how we perform roles in our daily lives, how we enter and exit scenes, how there is perhaps an audience watching.

**Simile** works similarly but uses "like" or "as" to make the comparison explicit: "My love is like a red, red rose." The comparison is softer, more cautious, and draws attention to itself in a way that metaphor does not.

**Personification** gives human qualities to non-human things. "The wind whispered through the trees" makes the wind a living, communicating being. "Death, be not proud" addresses death as if it were a person with emotions. Personification makes the abstract world feel alive and responsive.

**Hyperbole** is deliberate exaggeration for effect: "I have told you a million times." Nobody has literally said something a million times, but the exaggeration conveys frustration vividly. In poetry, hyperbole can express emotions that feel too large for ordinary language.

**Oxymoron** combines contradictory terms: "deafening silence," "living death," "bitter sweet." These compressed contradictions force the reader to hold two opposing ideas at once, which is often exactly what complex human experience requires.

The key to understanding figurative language is to resist the urge to translate it into plain statement. "My love is like a red, red rose" does not simply mean "my love is beautiful." The rose brings with it associations of fragrance, delicacy, thorns, seasonal blooming, and eventual wilting. All of those associations enrich the comparison. Let the figurative language expand in your mind rather than trying to reduce it.`,
    },
    {
      id: 'engelsk-10-18-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on imagery and figurative language:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-18-n-quiz2-q0',
            task: 'Which line contains personification?',
            options: [
              { id: 'a', text: '"The sun was hot."', isCorrect: false },
              { id: 'b', text: '"The sun smiled down on the garden."', isCorrect: true },
              { id: 'c', text: '"The sun is like a ball of fire."', isCorrect: false },
              { id: 'd', text: '"I sat in the sun all afternoon."', isCorrect: false },
            ],
            solution: 'Personification gives human qualities to non-human things. The sun cannot literally smile, so describing it as smiling is personification, making the sun seem friendly and alive.',
          },
          {
            id: 'engelsk-10-18-n-quiz2-q1',
            task: 'What is the difference between a metaphor and a simile?',
            options: [
              { id: 'a', text: 'Metaphors are longer than similes', isCorrect: false },
              { id: 'b', text: 'Similes are only used in poetry while metaphors are used everywhere', isCorrect: false },
              { id: 'c', text: 'A simile uses "like" or "as" to compare; a metaphor states one thing IS another', isCorrect: true },
              { id: 'd', text: 'There is no meaningful difference', isCorrect: false },
            ],
            solution: 'A simile makes a comparison using "like" or "as" ("My love is like a rose"), while a metaphor directly states that one thing is another ("Life is a journey"). Metaphors are more direct and assertive.',
          },
          {
            id: 'engelsk-10-18-n-quiz2-q2',
            task: 'What is an oxymoron?',
            options: [
              { id: 'a', text: 'A type of rhyme scheme', isCorrect: false },
              { id: 'b', text: 'A poem with no figurative language', isCorrect: false },
              { id: 'c', text: 'A deliberate exaggeration for effect', isCorrect: false },
              { id: 'd', text: 'A combination of contradictory terms, like "deafening silence"', isCorrect: true },
            ],
            solution: 'An oxymoron combines two contradictory terms into one expression. Examples include "deafening silence," "living death," and "bitter sweet." They capture the complexity of experiences that contain opposing feelings simultaneously.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-18-n-summary',
      type: 'text',
      content: `## Summary

Poetry is not a puzzle to solve but an experience to have. The three key elements we explored work together to create that experience.

**Rhythm** is the beat beneath the words. It can be regular (like iambic pentameter) or free, but it always supports meaning. How a poem sounds is inseparable from what it means.

**Imagery** appeals to the senses, transforming abstract ideas into physical experiences. The best imagery engages sight, sound, touch, smell, and taste to make you feel the poem in your body.

**Figurative language** stretches words beyond their literal meaning. Metaphor, simile, personification, hyperbole, and oxymoron all create new connections and deeper understanding. Rather than reducing figurative language to plain statement, let it expand in your mind.

When you encounter a poem, read it aloud, feel the rhythm, absorb the images, and let the figurative language work on you. Then read it again. Poetry rewards patience and repeated attention.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 19 NARRATIVE: The Novel — Themes and Characters
// ============================================================================

export const CHAPTER_ENGELSK_10_19_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-19-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '19',
  title: 'The Novel — Themes and Characters',
  subtitle: 'Narrativ versjon',
  description: 'Explore how novels build complex worlds through plot structure, character arcs, and recurring motifs that weave meaning through hundreds of pages.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-19',
  content: [
    {
      id: 'engelsk-10-19-n-intro',
      type: 'text',
      content: `## The Long Journey of the Novel

If a short story is a photograph, a novel is a film. It has time, space, room to breathe. Characters can grow, change, contradict themselves, and surprise you. Plots can twist and turn over hundreds of pages. Worlds can be built in extraordinary detail. The novel is the great democratic art form of literature because it has room for everything: comedy and tragedy, philosophy and action, the grand sweep of history and the tiny details of daily life.

But this richness also means that reading a novel critically requires different tools than reading a short story. You need to track threads of meaning across long distances, remember details from chapter one that become important in chapter twenty, and understand how the many parts of a novel work together to create a unified whole.

In this chapter, we will focus on three essential concepts: plot structure, which gives the novel its shape; character arcs, which give it its emotional power; and motifs, which weave recurring patterns of meaning through the entire work. Together, these tools will help you appreciate what novels do that no other literary form can match.`,
    },
    {
      id: 'engelsk-10-19-n-section1',
      type: 'text',
      content: `## Plot Structure: The Shape of a Story

Every novel has a shape. Even novels that seem to wander, that seem to have no clear direction, are shaped by their author's choices about what happens and in what order.

The most common plot structure is sometimes called **Freytag's Pyramid**, named after the German writer who described it. It has five stages. The **exposition** introduces the characters, setting, and situation. The **rising action** presents complications and conflicts that build tension. The **climax** is the turning point, the moment of highest tension when the central conflict comes to a head. The **falling action** shows the consequences of the climax. And the **resolution** (or denouement) ties up the loose ends and shows the new normal.

This structure is everywhere once you know to look for it. In *The Hunger Games*, the exposition introduces Katniss's world, the rising action follows her preparation and early survival in the arena, the climax occurs during the final confrontation, and the resolution shows the aftermath. Understanding this structure helps you predict where a story is heading and appreciate the choices an author makes.

But many novels complicate this basic shape. Some use **in medias res**, starting in the middle of the action and filling in the background later. Some use **flashbacks** and **flash-forwards** to move back and forth in time. Some use **parallel plots**, following multiple storylines that eventually converge. Some build to a climax and then refuse to provide a satisfying resolution, leaving the reader with questions rather than answers.

**Conflict** drives the plot forward, and it comes in several forms. Person versus person is the most obvious: two characters in opposition. Person versus nature pits a character against the physical world. Person versus society shows a character struggling against rules, expectations, or injustice. Person versus self is internal conflict, a character fighting their own fears, desires, or moral dilemmas. The most interesting novels often combine several types of conflict, creating complex webs of tension.`,
    },
    {
      id: 'engelsk-10-19-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on plot structure:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-19-n-quiz1-q0',
            task: 'What is the "climax" in Freytag\'s Pyramid?',
            options: [
              { id: 'a', text: 'The very beginning of the story', isCorrect: false },
              { id: 'b', text: 'The moment of highest tension where the central conflict comes to a head', isCorrect: true },
              { id: 'c', text: 'The final sentence of the novel', isCorrect: false },
              { id: 'd', text: 'A description of the setting', isCorrect: false },
            ],
            solution: 'The climax is the turning point and moment of highest tension in the story. It is where the central conflict reaches its peak and the outcome begins to be decided.',
          },
          {
            id: 'engelsk-10-19-n-quiz1-q1',
            task: 'What does "in medias res" mean?',
            options: [
              { id: 'a', text: 'Starting the story at the very beginning of events', isCorrect: false },
              { id: 'b', text: 'Ending the story without a resolution', isCorrect: false },
              { id: 'c', text: 'Starting the story in the middle of the action', isCorrect: true },
              { id: 'd', text: 'Telling the story backwards from end to beginning', isCorrect: false },
            ],
            solution: 'In medias res is Latin for "in the middle of things." It is a technique where the story begins in the middle of action, with background information filled in later through flashbacks or exposition.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-19-n-section2',
      type: 'text',
      content: `## Character Arcs: How People Change

The most satisfying novels give us characters who change. A **character arc** is the journey a character takes from who they are at the beginning of the story to who they become by the end. This transformation is often the emotional heart of the novel.

The most common type is the **positive arc**, where a character overcomes a flaw or limitation and becomes a better, stronger, or wiser person. In *To Kill a Mockingbird*, Scout begins as an innocent child and gradually develops a more mature understanding of justice, prejudice, and compassion. Her arc mirrors the novel's themes.

A **negative arc** shows a character deteriorating, becoming corrupted or destroyed. In *Lord of the Flies*, Roger begins as an ordinary boy and gradually descends into cruelty and violence as civilisation breaks down around him. This arc makes the novel's argument about human nature.

A **flat arc** is not a failure of writing. Sometimes the most interesting character is one who does not change but who changes everything around them. In detective novels, for instance, the detective often remains the same while the world around them is transformed by their investigation.

To track a character arc, ask yourself: what does this character want at the beginning? What do they believe? What are they afraid of? Then ask the same questions at the end. The distance between these two points is the arc.

Pay attention to **turning points**, the moments when a character makes a crucial choice or has a revelation that shifts their direction. These moments often coincide with plot turning points, connecting character development to the events of the story.`,
    },
    {
      id: 'engelsk-10-19-n-section3',
      type: 'text',
      content: `## Motifs: The Recurring Threads

A **motif** is a recurring element, an image, phrase, idea, or situation that appears throughout a novel and accumulates meaning each time it appears. If a symbol is a single note, a motif is a melody that you hear again and again, each time in a slightly different key.

In *The Great Gatsby*, the motif of the green light at the end of Daisy's dock appears multiple times. Each appearance adds another layer of meaning: desire, hope, the American Dream, the impossibility of recapturing the past. By the end of the novel, that simple green light carries enormous emotional and thematic weight because it has been built up gradually through repetition.

Motifs can be visual (recurring colours, objects, or landscapes), verbal (repeated phrases or words), or situational (recurring types of events). A novel about war might repeatedly return to images of broken things. A novel about identity might feature mirrors, masks, or disguises as recurring images. A novel about isolation might show the same character sitting alone in different settings throughout the book.

Tracking motifs is one of the most rewarding aspects of reading a novel. When you notice a motif, you start to see how different parts of the novel connect to each other. Scenes that seemed unrelated suddenly reveal shared threads. The novel becomes not just a sequence of events but a web of interconnected meanings.

**Theme** is closely related to motif but operates at a higher level. A theme is the central idea or message of the novel, what the novel is ultimately about beyond its plot. Love, death, justice, identity, power, freedom: these are themes. Motifs are the specific, concrete elements that embody these abstract themes. The green light is a motif; the impossibility of recapturing the past is a theme.

When writing about a novel, try to connect specific motifs to the larger themes they serve. This shows that you understand not just what happens in the novel but how the novel creates meaning.`,
    },
    {
      id: 'engelsk-10-19-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on character arcs and motifs:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-19-n-quiz2-q0',
            task: 'What is the difference between a motif and a theme?',
            options: [
              { id: 'a', text: 'They are the same thing', isCorrect: false },
              { id: 'b', text: 'A motif is a recurring concrete element; a theme is the abstract idea it embodies', isCorrect: true },
              { id: 'c', text: 'A theme appears once while a motif appears throughout the story', isCorrect: false },
              { id: 'd', text: 'Motifs are found only in poetry, themes only in novels', isCorrect: false },
            ],
            solution: 'A motif is a specific, concrete element (image, phrase, object) that recurs throughout a work. A theme is the abstract idea or message the work explores. Motifs serve as the concrete vehicles through which themes are expressed.',
          },
          {
            id: 'engelsk-10-19-n-quiz2-q1',
            task: 'A character who does not change but transforms the world around them has what type of arc?',
            options: [
              { id: 'a', text: 'A positive arc', isCorrect: false },
              { id: 'b', text: 'A negative arc', isCorrect: false },
              { id: 'c', text: 'A flat arc', isCorrect: true },
              { id: 'd', text: 'No arc at all', isCorrect: false },
            ],
            solution: 'A flat arc describes a character who remains essentially the same while changing the world around them. This is a deliberate choice, not a failure of writing. Detective characters often have flat arcs.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-19-n-summary',
      type: 'text',
      content: `## Summary

Novels are complex works that require you to track meaning across long distances. Three essential concepts help you do this.

**Plot structure** gives the novel its shape. Freytag's Pyramid (exposition, rising action, climax, falling action, resolution) is the most common framework, but many novels complicate it with techniques like in medias res, flashbacks, and parallel plots. Conflict in its various forms (person vs. person, nature, society, or self) drives the plot forward.

**Character arcs** chart how characters change over the course of the novel. Positive arcs show growth, negative arcs show decline, and flat arcs feature characters who remain constant while transforming the world around them. Tracking what a character wants, believes, and fears at the beginning versus the end reveals the arc.

**Motifs** are recurring elements that accumulate meaning through repetition. They are the concrete vehicles through which abstract themes are expressed. Tracking motifs helps you see how different parts of a novel connect to create a web of meaning.

Together, these tools help you move from understanding what happens in a novel to understanding how and why it means what it means.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 20 NARRATIVE: Drama and Theatre
// ============================================================================

export const CHAPTER_ENGELSK_10_20_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-20-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '20',
  title: 'Drama and Theatre',
  subtitle: 'Narrativ versjon',
  description: 'Step onto the stage and discover how plays create meaning through dialogue, stage directions, and the unique conventions of theatrical performance.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-20',
  content: [
    {
      id: 'engelsk-10-20-n-intro',
      type: 'text',
      content: `## The Living Art Form

Close your eyes and imagine you are sitting in a theatre. The lights dim. The audience falls silent. A figure steps onto the stage, and for the next two hours, everything changes. The stage is no longer a stage; it is a living room, a battlefield, a courtroom, a world. The actors are no longer actors; they are people you know, people you care about, people whose fate matters to you.

Theatre is the oldest form of storytelling besides oral tradition, and it is unique among literary forms because it happens live, right in front of you. There is no narrator to guide your interpretation. There are no descriptive passages painting the scene. There are only characters speaking and acting, and an audience watching and responding. This directness gives drama an immediacy and intensity that no other art form can match.

When we study a play as a text, we are reading something that was designed to be performed. Every word on the page is an instruction for bringing a story to life in three dimensions, with real people in real space. Understanding this changes how we read. In this chapter, we will explore the building blocks of drama: dialogue, stage directions, and theatrical conventions.`,
    },
    {
      id: 'engelsk-10-20-n-section1',
      type: 'text',
      content: `## Dialogue: The Engine of Drama

In a novel, you might read paragraphs of description, interior monologue, and narrative commentary. In a play, almost everything happens through dialogue, characters talking to each other. This makes dialogue the engine that drives everything in drama: plot, character development, theme, and conflict all emerge from what characters say and how they say it.

Dramatic dialogue works differently from real conversation. In real life, people ramble, repeat themselves, say nothing particularly meaningful, and talk about the weather. In a play, every line serves a purpose. Even when dialogue sounds casual and naturalistic, it has been carefully crafted to reveal character, advance the plot, or develop themes.

**Subtext** is perhaps the most important concept for understanding dramatic dialogue. Subtext is what characters mean beneath what they actually say. When a character says "Fine, do whatever you want," the literal meaning is permission. But the subtext, the real meaning, might be anger, disappointment, or resignation. Good actors bring subtext to life through tone, gesture, and expression. Good readers learn to detect it on the page.

Consider this exchange: "Are you going out tonight?" asks one character. "I might," replies the other. On the surface, this is a simple question and answer. But depending on the context, it could be a concerned parent checking on a teenager, a suspicious spouse testing a partner, or two friends negotiating plans. The subtext depends on everything you know about these characters and their situation.

**Monologues** and **soliloquies** are special forms of dramatic speech. A monologue is a long speech by one character to others on stage. A soliloquy is a character speaking alone, sharing their thoughts directly with the audience. Shakespeare's famous "To be, or not to be" speech from *Hamlet* is a soliloquy. It lets us inside Hamlet's mind in a way that ordinary dialogue cannot. When you read a soliloquy, you are hearing the character's most private, honest thoughts.`,
    },
    {
      id: 'engelsk-10-20-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-20-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on dramatic dialogue:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-20-n-quiz1-q0',
            task: 'What is "subtext" in dramatic dialogue?',
            options: [
              { id: 'a', text: 'The text written below the stage directions', isCorrect: false },
              { id: 'b', text: 'The hidden meaning beneath what characters actually say', isCorrect: true },
              { id: 'c', text: 'Dialogue spoken in a whisper', isCorrect: false },
              { id: 'd', text: 'Text that the audience reads in the programme', isCorrect: false },
            ],
            solution: 'Subtext is the meaning beneath the literal words. When a character says "Fine, do whatever you want," the subtext might be anger or disappointment. Understanding subtext is key to understanding drama.',
          },
          {
            id: 'engelsk-10-20-n-quiz1-q1',
            task: 'What is the difference between a monologue and a soliloquy?',
            options: [
              { id: 'a', text: 'A monologue is spoken to other characters on stage; a soliloquy is spoken alone to the audience', isCorrect: true },
              { id: 'b', text: 'A soliloquy is longer than a monologue', isCorrect: false },
              { id: 'c', text: 'Monologues appear in comedies; soliloquies in tragedies', isCorrect: false },
              { id: 'd', text: 'They are exactly the same thing', isCorrect: false },
            ],
            solution: 'A monologue is a long speech delivered to other characters on stage. A soliloquy is spoken when the character is alone, sharing their innermost thoughts directly with the audience.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-20-n-section2',
      type: 'text',
      content: `## Stage Directions: The Author's Blueprint

Stage directions are the instructions a playwright writes in italics or brackets between the lines of dialogue. They tell actors where to move, how to speak, and what to do. They tell directors how the stage should look. And they tell readers everything that the dialogue cannot convey.

At their simplest, stage directions indicate physical movement: *enters*, *exits*, *crosses to the window*. But many playwrights use stage directions to create mood, atmosphere, and meaning. Tennessee Williams' stage directions in *The Glass Menagerie* are almost poetic, describing lighting, music, and emotion in extraordinary detail. Samuel Beckett's stage directions in *Waiting for Godot* are precise to the second, controlling every pause and movement.

When reading a play, never skip the stage directions. They often contain crucial information. A stage direction that says *(long pause)* after a character speaks might indicate that the other character is processing shocking news, struggling to control their emotions, or deliberately withholding a response. A direction that says *(she turns away)* at a key moment might tell you more about the character's feelings than any line of dialogue could.

**Setting descriptions** at the beginning of acts or scenes are particularly important. They establish the physical world of the play and often carry symbolic weight. A stage direction describing a room as "cluttered and dimly lit, with dust covering every surface" is not just about interior decorating. It is telling you something about the characters who live there and the emotional state of the play.

The level of detail in stage directions varies enormously between playwrights. Shakespeare wrote almost no stage directions, leaving enormous freedom for directors and actors. Modern playwrights like Arthur Miller or August Wilson write detailed stage directions that amount to short essays about character and setting. Both approaches are valid; they simply represent different relationships between the playwright and the people who bring the play to life.`,
    },
    {
      id: 'engelsk-10-20-n-section3',
      type: 'text',
      content: `## Theatrical Conventions: The Rules of the Game

Every art form has conventions, agreed-upon rules that the audience accepts without question. In theatre, these conventions are especially interesting because they ask the audience to believe obviously impossible things.

The most basic convention is the **fourth wall**, the invisible barrier between the stage and the audience. The actors pretend the audience is not there, and the audience pretends they are watching real events rather than a performance. When a character "breaks the fourth wall" by speaking directly to the audience, it is startling precisely because it violates this convention. It creates an intimate connection between character and audience that can be used for comedy, confession, or commentary.

**Aside** is a related convention where a character briefly turns to the audience to share a thought that other characters on stage cannot hear. It is like a whispered secret between the character and the audience, creating complicity.

The **dramatic aside** and the **chorus** were essential in ancient Greek theatre and still influence modern plays. The chorus was a group of performers who commented on the action, providing background information, moral judgements, and emotional responses. While modern plays rarely use a literal chorus, the concept survives in characters who serve a similar function, stepping outside the action to reflect on its meaning.

**Dramatic irony** is one of theatre's most powerful tools. It occurs when the audience knows something that the characters do not. In *Romeo and Juliet*, we know that Juliet is not really dead, only sleeping, but Romeo does not. This knowledge makes the final scene almost unbearably tense. Dramatic irony works because theatre is a shared experience. The audience sits together, knowing the truth together, and this shared knowledge creates a unique emotional bond.

Understanding these conventions helps you read plays with the awareness that they were designed for performance. When you read a play, try to imagine it on stage. Visualise the movements, hear the voices, feel the pauses. The text on the page is a blueprint for a living, breathing performance.`,
    },
    {
      id: 'engelsk-10-20-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-20-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on stage directions and theatrical conventions:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-20-n-quiz2-q0',
            task: 'What is dramatic irony?',
            options: [
              { id: 'a', text: 'When a play is unexpectedly funny', isCorrect: false },
              { id: 'b', text: 'When the audience knows something that the characters do not', isCorrect: true },
              { id: 'c', text: 'When a character says the opposite of what they mean', isCorrect: false },
              { id: 'd', text: 'When the ending is surprising', isCorrect: false },
            ],
            solution: 'Dramatic irony occurs when the audience possesses knowledge that characters lack. This creates tension, as in Romeo and Juliet where we know Juliet is alive but Romeo does not.',
          },
          {
            id: 'engelsk-10-20-n-quiz2-q1',
            task: 'Why should you never skip stage directions when reading a play?',
            options: [
              { id: 'a', text: 'They are tested separately in exams', isCorrect: false },
              { id: 'b', text: 'They contain crucial information about mood, character, and meaning that dialogue alone cannot convey', isCorrect: true },
              { id: 'c', text: 'They are always the most entertaining part of a play', isCorrect: false },
              { id: 'd', text: 'Playwrights are offended if you skip them', isCorrect: false },
            ],
            solution: 'Stage directions convey essential information about pauses, movements, setting, and atmosphere. A stage direction like "(long pause)" after a line of dialogue can reveal more about a character\'s emotional state than any words could.',
          },
          {
            id: 'engelsk-10-20-n-quiz2-q2',
            task: 'What is "breaking the fourth wall"?',
            options: [
              { id: 'a', text: 'Destroying the set during a performance', isCorrect: false },
              { id: 'b', text: 'When the play changes location', isCorrect: false },
              { id: 'c', text: 'When a character speaks directly to the audience, acknowledging they are in a performance', isCorrect: true },
              { id: 'd', text: 'When an actor forgets their lines', isCorrect: false },
            ],
            solution: 'The "fourth wall" is the invisible barrier between performers and audience. Breaking it means a character directly addresses the audience, violating the convention that the audience is not there. It creates an intimate, surprising connection.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-20-n-summary',
      type: 'text',
      content: `## Summary

Drama is a unique literary form designed for live performance, and understanding its building blocks enriches both reading and viewing.

**Dialogue** is the engine of drama. Everything emerges from what characters say and how they say it. Subtext, the meaning beneath the words, is often more important than the literal content. Monologues and soliloquies give characters space for extended speech and private reflection.

**Stage directions** are the playwright's blueprint for performance. They communicate movement, mood, setting, and emotion. Never skip them when reading a play, as they often carry crucial information that dialogue cannot convey.

**Theatrical conventions** are the agreed-upon rules of drama. The fourth wall, asides, the chorus, and dramatic irony all shape how stories are told on stage. Understanding these conventions helps you read plays as the performance blueprints they were designed to be.

When you read a play, imagine it on stage. Hear the voices, see the movements, feel the pauses. The text is an invitation to create a performance in your mind.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 21 NARRATIVE: Indigenous and Postcolonial Literature
// ============================================================================

export const CHAPTER_ENGELSK_10_21_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-21-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '21',
  title: 'Indigenous and Postcolonial Literature',
  subtitle: 'Narrativ versjon',
  description: 'Hear the voices that colonialism tried to silence, and explore how literature can reclaim identity, challenge power, and reshape whose stories get told.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-21',
  content: [
    {
      id: 'engelsk-10-21-n-intro',
      type: 'text',
      content: `## Whose Story Gets Told?

Here is a question that might change how you think about everything you read: whose story is this, and who gets to tell it?

For centuries, the story of much of the world was told by European colonisers. They wrote the histories, drew the maps, and created the literature that defined how entire continents were understood. When they wrote about Africa, Asia, the Americas, or the Pacific, they wrote from the outside, often portraying the people who lived there as exotic, primitive, or childlike. These portrayals were not innocent descriptions. They were tools of power, used to justify colonisation by suggesting that colonised peoples needed European "civilisation."

But the people whose lands were colonised always had their own stories, their own ways of understanding the world, their own rich literary traditions. For a long time, these voices were suppressed, ignored, or drowned out. Indigenous and postcolonial literature represents the powerful return of those voices. It is literature that talks back, that challenges the colonial narrative, that insists on the complexity and humanity of people who were once reduced to stereotypes.

In this chapter, we will explore how writers from formerly colonised nations and indigenous communities use literature to reclaim identity and challenge misrepresentation. These are not niche concerns. They are central to understanding the English-speaking world, because the global spread of English is itself a product of colonialism.`,
    },
    {
      id: 'engelsk-10-21-n-section1',
      type: 'text',
      content: `## Understanding Postcolonial Literature

**Postcolonial literature** is writing that responds to, critiques, or emerges from the experience of colonisation. The term "postcolonial" does not simply mean "after colonialism." It refers to the ongoing cultural, psychological, and political effects of colonial rule, effects that continue to shape the world long after the colonisers have officially left.

One of the central concepts in postcolonial thinking is **"the Other."** Colonial literature often defined non-European peoples as fundamentally different from and inferior to Europeans. Edward Said, in his groundbreaking book *Orientalism*, showed how European writing about the Middle East created a fantasy version of the region that served European interests rather than reflecting reality. Postcolonial writers challenge this othering by presenting their own complex, nuanced, fully human perspectives.

Chinua Achebe's *Things Fall Apart* is perhaps the most famous example. Written in response to European novels that portrayed Africa as a "dark continent" without culture or history, Achebe showed the rich, complex society of the Igbo people before the arrival of British colonisers. His protagonist, Okonkwo, is not a stereotype but a fully realised character with strengths, flaws, ambitions, and fears. The novel demonstrates that African societies had their own values, governance, religion, and art long before Europeans arrived.

**Language** is a particularly charged issue in postcolonial literature. Many postcolonial writers write in English or French, the languages of their colonisers. This creates a profound tension. On one hand, writing in English gives access to a global audience. On the other hand, it means using the coloniser's language to express experiences that the coloniser's language was not designed to capture. Some writers, like the Kenyan author Ngugi wa Thiong'o, have chosen to write in their indigenous languages as an act of cultural resistance. Others, like Salman Rushdie, have argued that English can be remade and claimed as their own, transformed by new voices into something the colonisers would not recognise.

**Hybridity** is another key concept. Postcolonial cultures are not pure; they are mixtures, blends of indigenous traditions and colonial influences. This is not a weakness but a source of creativity. Writers like Chimamanda Ngozi Adichie and Arundhati Roy create literature that draws on multiple traditions, multiple languages, and multiple ways of seeing the world.`,
    },
    {
      id: 'engelsk-10-21-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on postcolonial literature:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-21-n-quiz1-q0',
            task: 'Why did Chinua Achebe write Things Fall Apart?',
            options: [
              { id: 'a', text: 'To entertain European readers with exotic African stories', isCorrect: false },
              { id: 'b', text: 'To challenge European novels that portrayed Africa as a "dark continent" without culture', isCorrect: true },
              { id: 'c', text: 'To write a historical textbook about Nigeria', isCorrect: false },
              { id: 'd', text: 'To translate traditional Igbo stories into English', isCorrect: false },
            ],
            solution: 'Achebe wrote Things Fall Apart specifically to counter the stereotypical, dehumanising portrayals of Africa in European literature. He showed the rich complexity of Igbo society before colonisation.',
          },
          {
            id: 'engelsk-10-21-n-quiz1-q1',
            task: 'What is the language dilemma faced by many postcolonial writers?',
            options: [
              { id: 'a', text: 'They cannot learn English well enough to write in it', isCorrect: false },
              { id: 'b', text: 'Writing in the coloniser\'s language gives global reach but raises questions about cultural identity', isCorrect: true },
              { id: 'c', text: 'Publishers refuse to print books in indigenous languages', isCorrect: false },
              { id: 'd', text: 'English is too simple a language for complex ideas', isCorrect: false },
            ],
            solution: 'Postcolonial writers face a tension between using the coloniser\'s language (which provides a global audience) and the desire to write in their own language as an act of cultural preservation and resistance.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-21-n-section2',
      type: 'text',
      content: `## Indigenous Voices: Writing from the Land

Indigenous literature comes from the original peoples of colonised lands: First Nations, Inuit, and Metis peoples in Canada; Aboriginal and Torres Strait Islander peoples in Australia; Maori in Aotearoa/New Zealand; Native Americans in the United States; Sami in Scandinavia; and many others worldwide.

These literatures share certain concerns, though each tradition is distinct. **Connection to land** is central. For many indigenous peoples, the land is not simply a resource to be exploited; it is a living being with its own stories, rights, and spirit. Indigenous literature often reflects this deep relationship, presenting landscapes as characters in their own right.

**Oral tradition** is the foundation of most indigenous literatures. Stories, songs, and ceremonies were passed down through generations by word of mouth long before writing arrived. When indigenous writers work in print, they often incorporate elements of oral tradition: circular narrative structures rather than the linear plots of European fiction, the rhythms and repetitions of spoken storytelling, and stories that are rooted in specific places and communities.

**Identity and survival** are pressing themes. Indigenous writers often explore what it means to be indigenous in the modern world, navigating between traditional culture and contemporary society. They write about the devastating effects of colonisation, including forced removal from ancestral lands, suppression of languages and cultures, residential schools, and ongoing discrimination. But they also write about resilience, cultural revival, and the power of indigenous knowledge systems.

Sherman Alexie, a Spokane-Coeur d'Alene writer, uses humour and unflinching honesty to portray life on American Indian reservations. His novel *The Absolutely True Diary of a Part-Time Indian* follows a teenage boy navigating between his reservation and a predominantly white school, exploring identity, belonging, and the courage it takes to pursue your dreams when the world seems stacked against you.

**Representation** matters enormously. For too long, indigenous peoples were represented in literature by non-indigenous writers who often perpetuated stereotypes: the "noble savage," the "vanishing Indian," the mystical spiritual guide. Indigenous writers replace these stereotypes with authentic, complex, varied portrayals. They show that indigenous peoples are not relics of the past but living, evolving communities with contemporary lives, problems, and aspirations.`,
    },
    {
      id: 'engelsk-10-21-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on indigenous literature and representation:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-21-n-quiz2-q0',
            task: 'Why is the relationship to land so central in much indigenous literature?',
            options: [
              { id: 'a', text: 'Because indigenous peoples only write about nature', isCorrect: false },
              { id: 'b', text: 'For many indigenous peoples, the land is a living being with stories and spirit, not just a resource', isCorrect: true },
              { id: 'c', text: 'Because indigenous authors are required to write about land', isCorrect: false },
              { id: 'd', text: 'Because land is the most profitable topic for book sales', isCorrect: false },
            ],
            solution: 'For many indigenous peoples, the land is not merely a resource but a living entity with its own stories, rights, and spirit. This deep relationship is reflected throughout indigenous literature.',
          },
          {
            id: 'engelsk-10-21-n-quiz2-q1',
            task: 'What is "the Other" in postcolonial theory?',
            options: [
              { id: 'a', text: 'A character who appears in every novel', isCorrect: false },
              { id: 'b', text: 'The way colonial literature defined non-European peoples as fundamentally different and inferior', isCorrect: true },
              { id: 'c', text: 'A literary device used only in poetry', isCorrect: false },
              { id: 'd', text: 'A type of narrator in third-person stories', isCorrect: false },
            ],
            solution: '"The Other" refers to how colonial literature defined non-European peoples as fundamentally different from and inferior to Europeans. This "othering" served colonial interests by making colonised peoples seem less than fully human.',
          },
          {
            id: 'engelsk-10-21-n-quiz2-q2',
            task: 'How does indigenous literature typically differ from European literary traditions in its narrative structure?',
            options: [
              { id: 'a', text: 'It always uses first-person narration', isCorrect: false },
              { id: 'b', text: 'It never uses written language', isCorrect: false },
              { id: 'c', text: 'It often uses circular structures and oral tradition elements rather than linear plots', isCorrect: true },
              { id: 'd', text: 'It is always shorter than European literature', isCorrect: false },
            ],
            solution: 'Indigenous literature often incorporates elements from oral tradition, including circular narrative structures, repetition, and stories rooted in specific places, rather than the strictly linear plot structures common in European fiction.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-21-n-summary',
      type: 'text',
      content: `## Summary

Indigenous and postcolonial literature represents voices that colonialism tried to silence, speaking back to power and insisting on complexity and humanity.

**Postcolonial literature** responds to the experience of colonisation. It challenges "the Other," the way colonial writing reduced non-European peoples to stereotypes. Writers like Chinua Achebe have countered these portrayals with rich, complex representations of their own cultures. The language dilemma (writing in the coloniser's language vs. indigenous languages) and hybridity (the blending of traditions) are central concerns.

**Indigenous literature** comes from the original peoples of colonised lands. Connection to land, oral tradition, and the exploration of identity and survival are common themes. Indigenous writers replace stereotypes with authentic portrayals, showing that indigenous peoples are living, evolving communities.

Reading these literatures is not just an academic exercise. It is an act of listening to voices that deserve to be heard, and it fundamentally changes how you understand the English-speaking world and the history that shaped it.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 22 NARRATIVE: Young Adult Literature
// ============================================================================

export const CHAPTER_ENGELSK_10_22_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-22-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '22',
  title: 'Young Adult Literature',
  subtitle: 'Narrativ versjon',
  description: 'Explore the world of YA fiction, where coming-of-age stories and social issues meet literature written specifically for your generation.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-22',
  content: [
    {
      id: 'engelsk-10-22-n-intro',
      type: 'text',
      content: `## Literature That Speaks to You

There is a category of literature that speaks directly to your experience right now. It understands the confusion of being no longer a child but not yet an adult. It takes your problems seriously. It does not talk down to you. It is called Young Adult literature, and it is one of the most vibrant, exciting, and important areas of contemporary fiction.

Young Adult (YA) literature is not "children's books for older children." It is a distinct category with its own traditions, conventions, and artistic standards. The best YA novels are as well-crafted, as thought-provoking, and as emotionally powerful as anything written for adults. Some of them, in fact, have crossed over to become classics read by people of all ages.

What makes YA literature special is not simplicity. It is perspective. YA novels are written from the viewpoint of characters who are experiencing things for the first time: first love, first heartbreak, first encounter with injustice, first questioning of the world they were raised in. This perspective gives YA fiction an intensity and freshness that can be breathtaking. When you are experiencing something for the first time, everything burns brighter.

In this chapter, we will explore two key themes that run through YA literature: coming of age and social issues. We will also think about why this genre matters and what it reveals about the world you are growing up in.`,
    },
    {
      id: 'engelsk-10-22-n-section1',
      type: 'text',
      content: `## Coming of Age: The Universal Story

The **coming-of-age** story, also called a *Bildungsroman* (a German term meaning "novel of formation"), is the most fundamental narrative in YA literature. It traces the journey from childhood innocence to adult awareness. This is not just a literary convention; it is the story you are living right now.

Coming-of-age stories typically involve a young protagonist who faces challenges that force them to grow. These challenges might be external: moving to a new place, dealing with family problems, encountering prejudice, or surviving a crisis. They might be internal: struggling with identity, questioning beliefs, managing emotions, or learning to accept imperfection in themselves and others.

The key to a good coming-of-age story is that the protagonist changes. They do not simply endure events; they are transformed by them. At the end of the story, they understand something about themselves or the world that they did not understand at the beginning. This transformation often involves loss, the loss of innocence, of certainty, of a simpler view of the world, but it also involves gain: wisdom, compassion, resilience, self-knowledge.

J.D. Salinger's *The Catcher in the Rye* is one of the most famous coming-of-age novels ever written. Its protagonist, Holden Caulfield, is a teenager struggling with the transition from childhood to adulthood, convinced that the adult world is full of "phonies" and desperate to protect the innocence of children. His journey is about learning that growing up is inevitable and that the world, though flawed, is worth engaging with.

More recent YA classics have expanded the coming-of-age narrative to include diverse experiences. *The Hate U Give* by Angie Thomas follows a Black teenager navigating between her predominantly Black neighbourhood and her predominantly white school, forced to confront racism and find her voice after witnessing police violence. *The Perks of Being a Wallflower* by Stephen Chbosky explores mental health, belonging, and the struggle to connect. These novels show that coming of age looks different for everyone, shaped by culture, identity, and circumstance.`,
    },
    {
      id: 'engelsk-10-22-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on coming-of-age stories:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-22-n-quiz1-q0',
            task: 'What does the German term "Bildungsroman" mean?',
            options: [
              { id: 'a', text: 'A novel about war', isCorrect: false },
              { id: 'b', text: 'A novel of formation or coming of age', isCorrect: true },
              { id: 'c', text: 'A novel written for children', isCorrect: false },
              { id: 'd', text: 'A novel set in Germany', isCorrect: false },
            ],
            solution: 'Bildungsroman is German for "novel of formation." It describes stories that trace a young person\'s growth from childhood innocence to adult awareness, making it the classic coming-of-age genre.',
          },
          {
            id: 'engelsk-10-22-n-quiz1-q1',
            task: 'What is the key element that makes a coming-of-age story satisfying?',
            options: [
              { id: 'a', text: 'It must have a happy ending', isCorrect: false },
              { id: 'b', text: 'The protagonist must be a teenager', isCorrect: false },
              { id: 'c', text: 'The protagonist is genuinely transformed by their experiences', isCorrect: true },
              { id: 'd', text: 'It must be set in a school', isCorrect: false },
            ],
            solution: 'The protagonist must be changed by their experiences. They should understand something at the end that they did not understand at the beginning. This transformation, which often involves both loss and gain, is the heart of the genre.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-22-n-section2',
      type: 'text',
      content: `## Social Issues: Literature as a Mirror and a Window

YA literature has always engaged with social issues, but in recent decades, this engagement has become bolder, more diverse, and more urgent. Contemporary YA fiction tackles racism, mental health, sexuality, gender identity, poverty, immigration, disability, and climate change with a directness that reflects the world its readers inhabit.

The metaphor of **mirrors and windows** is useful here. A book that acts as a mirror reflects your own experience back to you. It shows characters who look like you, live like you, and face problems you recognise. This is powerful because it tells you that your experience matters, that it is worthy of literature. For too long, many young people, especially those from marginalised communities, had few mirrors in the books available to them. Seeing yourself in a story is an act of validation.

A book that acts as a window lets you see into someone else's experience. It shows you lives different from your own, perspectives you might never encounter otherwise. Windows build empathy. When you read about a character facing discrimination you have never experienced, or growing up in a culture different from your own, you develop understanding that no amount of lecturing could achieve.

The best YA books are both mirrors and windows, sometimes simultaneously. *The Curious Incident of the Dog in the Night-Time* by Mark Haddon is a window into the mind of a neurodivergent protagonist for many readers, while being a mirror for neurodivergent readers who finally see their way of thinking represented in fiction.

**Dystopian YA** has become its own powerful subgenre. Series like *The Hunger Games*, *Divergent*, and *The Maze Runner* use futuristic settings to explore very real present-day concerns: authoritarianism, surveillance, inequality, environmental destruction, and the manipulation of truth. These novels ask: what happens if current trends continue unchecked? By exaggerating present realities into fictional extremes, they make young readers think critically about the world they will inherit.

It is worth noting that YA literature often faces **censorship** and book bans, particularly when it addresses topics like sexuality, race, or mental health. The very fact that these books are challenged tells you something about their power. Literature that challenges the status quo has always made some people uncomfortable, and attempts to suppress it only prove how important it is.`,
    },
    {
      id: 'engelsk-10-22-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on social issues in YA literature:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-22-n-quiz2-q0',
            task: 'What is the "mirrors and windows" metaphor in YA literature?',
            options: [
              { id: 'a', text: 'A description of the physical setting of YA novels', isCorrect: false },
              { id: 'b', text: 'Mirrors reflect your own experience; windows let you see into someone else\'s', isCorrect: true },
              { id: 'c', text: 'A type of plot structure used in dystopian fiction', isCorrect: false },
              { id: 'd', text: 'A technique for analysing poetry', isCorrect: false },
            ],
            solution: 'The "mirrors and windows" metaphor describes two functions of literature. Mirror books reflect your own experience, validating your identity. Window books let you see into lives different from your own, building empathy and understanding.',
          },
          {
            id: 'engelsk-10-22-n-quiz2-q1',
            task: 'Why do dystopian YA novels use futuristic settings?',
            options: [
              { id: 'a', text: 'Because teenagers only enjoy science fiction', isCorrect: false },
              { id: 'b', text: 'To exaggerate present-day concerns into fictional extremes, encouraging critical thinking', isCorrect: true },
              { id: 'c', text: 'Because realistic settings are too boring for young readers', isCorrect: false },
              { id: 'd', text: 'To avoid censorship by not writing about real issues', isCorrect: false },
            ],
            solution: 'Dystopian YA uses exaggerated future settings to explore real present-day concerns like authoritarianism, inequality, and environmental destruction. By showing "what if current trends continue?", they encourage readers to think critically about the world they will inherit.',
          },
          {
            id: 'engelsk-10-22-n-quiz2-q2',
            task: 'What does the frequent censorship and banning of YA books suggest about the genre?',
            options: [
              { id: 'a', text: 'That YA books are poorly written', isCorrect: false },
              { id: 'b', text: 'That YA books are only for children', isCorrect: false },
              { id: 'c', text: 'That YA books are too long for young readers', isCorrect: false },
              { id: 'd', text: 'That these books are powerful and challenging to the status quo', isCorrect: true },
            ],
            solution: 'Book bans and censorship attempts reveal that YA literature is powerful. Books that challenge the status quo by addressing topics like sexuality, race, and mental health make some people uncomfortable precisely because they are effective at changing minds.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-22-n-summary',
      type: 'text',
      content: `## Summary

Young Adult literature is a vibrant, important genre that speaks directly to the experience of growing up.

**Coming of age** is the central narrative of YA fiction. The Bildungsroman traces a protagonist's journey from innocence to awareness, involving both loss (of certainty, simplicity, childhood) and gain (wisdom, compassion, self-knowledge). The genre has expanded to include diverse experiences shaped by culture, identity, and circumstance.

**Social issues** are addressed boldly in contemporary YA. The mirrors and windows metaphor captures how books can both validate your own experience and open windows into others' lives. Dystopian YA uses exaggerated futures to critique present realities. The frequent censorship of YA books reveals their power to challenge and change thinking.

YA literature matters because it takes your experience seriously. It does not simplify the world; it reflects its complexity. Whether you read to see yourself mirrored, to peer through windows into other lives, or to imagine alternative futures, YA fiction offers some of the most engaging, thought-provoking literature being written today.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const ENGELSK_10_NARRATIV_DEL6_CHAPTERS = [
  CHAPTER_ENGELSK_10_17_NARRATIV,
  CHAPTER_ENGELSK_10_18_NARRATIV,
  CHAPTER_ENGELSK_10_19_NARRATIV,
  CHAPTER_ENGELSK_10_20_NARRATIV,
  CHAPTER_ENGELSK_10_21_NARRATIV,
  CHAPTER_ENGELSK_10_22_NARRATIV,
];
