/**
 * Tekstbok innhold for Engelsk 10. klasse - Del 6 (Kapittel 17-22)
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Tema: Literature and Cultural Understanding
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 17: Short Stories — Close Reading
// ============================================================================

export const CHAPTER_ENGELSK_10_17: TextbookChapter = {
  id: 'engelsk-10-17',
  courseId: 'engelsk-10',
  chapterNumber: '17',
  title: 'Short Stories — Close Reading',
  description: 'Learn to analyse short stories through close reading techniques, examining narrative voice, setting, characterisation, conflict and symbolism in English-language fiction.',
  estimatedMinutes: 90,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'bruke ulike strategier for å forstå og vurdere innholdet i tekster på engelsk',
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-17-intro',
      type: 'text',
      content: `## Short Stories — Close Reading

A short story is a compact piece of fiction that can usually be read in one sitting. Because every word matters, short stories are ideal for practising **close reading** — the art of paying careful attention to how a text is constructed and what effects the author creates.

Close reading means going beyond *what happens* in a story to ask *how* and *why* the author tells it in a particular way. You look at language choices, narrative structure, imagery and symbolism to uncover layers of meaning that a casual reader might miss.

**Why study short stories?**

- They are short enough to re-read and analyse in detail
- They appear frequently on the English exam
- They teach you to read all literature more perceptively
- They expose you to diverse voices from English-speaking cultures worldwide

**In this chapter you will learn to:**

1. Identify and analyse narrative voice and point of view
2. Examine how setting contributes to mood and meaning
3. Analyse characterisation through direct and indirect methods
4. Recognise different types of conflict
5. Interpret symbols and motifs`,
    },

    // ========== DEFINISJON 1: NARRATIVE VOICE ==========
    {
      id: 'engelsk-10-17-def-1',
      type: 'definition',
      title: 'Narrative Voice and Point of View',
      content: `**Narrative voice** refers to the perspective from which a story is told. The choice of narrator fundamentally shapes what the reader knows and how they experience events.

**First-person narrator ("I")**
The narrator is a character in the story. We see everything through their eyes and share their thoughts and feelings.
- *Advantage:* Creates intimacy and immediacy
- *Limitation:* We only know what this character knows — they may be biased or mistaken
- *Example:* "I could feel my heart pounding as I opened the door."

**Third-person limited**
The narrator is outside the story but follows one character closely, revealing that character's thoughts.
- *Advantage:* Allows insight into one character while maintaining some distance
- *Limitation:* Other characters' inner lives remain hidden
- *Example:* "She could feel her heart pounding as she opened the door."

**Third-person omniscient**
An all-knowing narrator who can reveal any character's thoughts and move freely across time and place.
- *Advantage:* Gives the reader a complete picture
- *Limitation:* Can reduce suspense and personal connection
- *Example:* "She opened the door nervously, unaware that he was already watching from the garden."

**Unreliable narrator**
A narrator whose account cannot be fully trusted — because of bias, limited knowledge, or deliberate deception. The reader must read between the lines.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-17-example-1',
      type: 'example',
      title: 'Example: Identifying narrative voice',
      problem: `Read the following opening and determine the narrative voice:

*"I was ten years old the summer everything changed. My mother says I remember it wrong, that the lake wasn't that big and the house wasn't that old, but she wasn't the one who found the letters hidden beneath the floorboards. She wasn't the one who had to decide what to do with them."*`,
      solution: `**Narrative voice:** First-person narrator

**Evidence:**
- The pronoun "I" tells us immediately that a character is narrating
- The narrator shares personal memories and emotions ("I was ten years old")
- There is a hint of unreliability: the mother says the narrator "remembers it wrong," which alerts us that this account may be subjective
- The narrator has exclusive knowledge ("She wasn't the one who found the letters") — this creates suspense because we trust this character's version

**Effect:** The first-person narration creates intimacy and draws us into a childhood mystery. The disagreement with the mother adds tension and makes us wonder whose version is true.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-17-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-ex-1',
        number: '17.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which narrative voice is used in the following passage? "Marcus sat on the bench and watched the pigeons. He wondered whether anyone at school had noticed he was gone. Probably not, he thought."',
        options: [
          {
            id: 'a',
            text: 'Third-person limited — the narrator is outside the story but reveals Marcus\'s thoughts',
            isCorrect: true,
            feedback: 'Correct! The narrator uses "he" (third person) and gives us access to Marcus\'s inner thoughts ("He wondered," "he thought"), but only his thoughts — making it third-person limited.',
          },
          {
            id: 'b',
            text: 'First-person — Marcus is telling his own story',
            isCorrect: false,
            feedback: 'Incorrect. A first-person narrator would use "I" — here the narrator uses "he" to refer to Marcus.',
          },
          {
            id: 'c',
            text: 'Third-person omniscient — the narrator knows everyone\'s thoughts',
            isCorrect: false,
            feedback: 'Incorrect. We only see Marcus\'s thoughts. An omniscient narrator would also reveal what other characters think and feel.',
          },
          {
            id: 'd',
            text: 'Second-person — the narrator addresses the reader as "you"',
            isCorrect: false,
            feedback: 'Incorrect. Second-person narration uses "you" to place the reader inside the story. This passage uses "he."',
          },
        ],
        solution: 'Third-person limited. The narrator refers to Marcus in the third person ("he") and reveals his thoughts, but only his — we do not learn what anyone else is thinking.',
      },
    },

    // ========== DEFINISJON 2: SETTING ==========
    {
      id: 'engelsk-10-17-def-2',
      type: 'definition',
      title: 'Setting — Time, Place and Atmosphere',
      content: `**Setting** is the time and place in which a story occurs. It includes the physical environment, the historical period, the social context and the atmosphere or mood.

**Elements of setting:**

**1. Physical place**
Where the story happens — a city, a forest, a school, a spaceship. The physical environment often mirrors or contrasts with the characters' emotions.

**2. Time**
When the story happens — the historical period, the season, the time of day. A story set during a war creates different expectations than one set on a summer holiday.

**3. Social context**
The cultural, economic and political conditions of the world in the story. A story set in apartheid-era South Africa carries very different social tension than one set in modern-day London.

**4. Atmosphere / Mood**
The emotional feeling created by the setting. Authors use descriptive language, weather, lighting and sensory details to establish atmosphere.
- *Dark, stormy night* → suspense, danger
- *Sunny meadow with birdsong* → peace, innocence
- *Cramped, grey office* → monotony, oppression

**Key question:** How does the setting influence the characters' choices and the story's meaning?`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-17-example-2',
      type: 'example',
      title: 'Example: Analysing setting',
      problem: `Analyse how setting functions in this passage:

*"The playground was empty now, the swings creaking in the wind like rusty hinges on a forgotten door. Weeds pushed through the cracks in the tarmac, and the painted hopscotch squares had faded to ghosts of colour. Somewhere beyond the fence, traffic hummed — the city carrying on without this place."*`,
      solution: `**Analysis of setting:**

**Physical place:** An abandoned playground in a city. The swings, tarmac and hopscotch squares tell us this was once a children's space.

**Atmosphere:** Melancholy, neglect, loss. The author creates this through:
- **Simile:** "creaking like rusty hinges on a forgotten door" — connects the playground to something abandoned and decaying
- **Personification:** "Weeds pushed through" — nature is reclaiming the space
- **Metaphor:** "ghosts of colour" — the faded markings suggest something that once was alive but is now dead
- **Contrast:** The playground is silent and still, while the city beyond the fence "carries on" — highlighting how this place has been left behind

**Symbolic meaning:** The abandoned playground likely symbolises lost childhood, a community in decline, or the passage of time. The setting is not just a backdrop — it carries the story's emotional weight.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-17-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-ex-2',
        number: '17.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Read the following sentence: "Rain hammered the tin roof and the single light bulb swung on its wire, sending shadows lurching across the walls." What is the primary function of the setting here?',
        options: [
          {
            id: 'a',
            text: 'To create an atmosphere of unease and instability',
            isCorrect: true,
            feedback: 'Correct! The violent rain, the swinging bulb and the lurching shadows all work together to create a mood of unease and unpredictability.',
          },
          {
            id: 'b',
            text: 'To establish that the story takes place in a wealthy neighbourhood',
            isCorrect: false,
            feedback: 'Incorrect. A tin roof and a single bare light bulb suggest a modest or impoverished setting, not a wealthy one.',
          },
          {
            id: 'c',
            text: 'To show that the character enjoys storms',
            isCorrect: false,
            feedback: 'Incorrect. Nothing in the description suggests enjoyment. The word choices ("hammered," "lurching") convey threat rather than pleasure.',
          },
          {
            id: 'd',
            text: 'To provide factual information about the local climate',
            isCorrect: false,
            feedback: 'Incorrect. The description is literary, not informational. The author uses imagery to create mood, not to report weather data.',
          },
        ],
        solution: 'The setting creates an atmosphere of unease and instability. The violent verbs ("hammered," "lurching") and the unstable light source work together to make the reader feel uneasy, foreshadowing possible danger.',
      },
    },

    // ========== DEFINISJON 3: CHARACTERISATION ==========
    {
      id: 'engelsk-10-17-def-3',
      type: 'definition',
      title: 'Characterisation — How Authors Build Characters',
      content: `**Characterisation** is the way an author reveals a character's personality, motivations and development. There are two main methods:

**Direct characterisation**
The narrator or another character *tells* the reader directly what a character is like.
- *"Maria was stubborn and fearless."*
- Clear and efficient, but can feel flat if overused.

**Indirect characterisation** (STEAL method)
The author *shows* the character through:
- **S**peech — What the character says and how they say it
- **T**houghts — What the character thinks and feels
- **E**ffect — How other characters react to them
- **A**ctions — What the character does, especially under pressure
- **L**ooks — Physical appearance and how they present themselves

**Static vs. dynamic characters:**
- A **static** character stays the same throughout the story
- A **dynamic** character changes — they learn, grow or deteriorate as a result of events

**Round vs. flat characters:**
- A **round** character is complex, with contradictions and depth
- A **flat** character has one or two dominant traits and serves a simple function in the story

**Key question for analysis:** Does the author mostly *tell* us about the character or *show* us? Why might the author choose one method over the other?`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-17-example-3',
      type: 'example',
      title: 'Example: Analysing characterisation',
      problem: `Identify the methods of characterisation used in this passage:

*"'It's fine,' Jake said, shoving his hands deeper into his pockets. He kicked a stone down the pavement and didn't look at her. His sister watched him from the doorstep, arms crossed. She had seen that look before — the tight jaw, the way he made himself smaller, as if he could disappear into his hoodie. 'You're not fine,' she said quietly."*`,
      solution: `**Methods of indirect characterisation (STEAL):**

**Speech:** Jake says "It's fine" — but the contrast with his body language tells us he is lying. His sister's reply ("You're not fine") confirms this. His speech reveals that he hides his feelings.

**Actions:** He shoves his hands into his pockets, kicks a stone, and refuses to make eye contact. These small physical actions communicate frustration, avoidance and emotional pain.

**Looks:** He "made himself smaller" and retreats into his hoodie — suggesting he wants to hide or protect himself.

**Effect on others:** His sister recognises the pattern ("She had seen that look before"), which tells us this is habitual behaviour — Jake regularly shuts down emotionally.

**Thoughts:** We do not get Jake's thoughts directly, which reinforces the idea that he keeps his inner world hidden.

**Conclusion:** Jake is characterised entirely through *indirect* methods. The author never states "Jake was upset." Instead, every detail — his speech, actions and body language — shows a boy who is hurting but unable or unwilling to express it. This makes the characterisation vivid and realistic.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-17-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-ex-3',
        number: '17.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Read the passage below and analyse the characterisation of the woman. Use the STEAL method to structure your answer. Write 80-120 words in English.',
        subTasks: [
          {
            label: 'a',
            task: '"The woman placed the exact change on the counter without a word. The cashier tried to make conversation — "Nice weather, isn\'t it?" — but she only nodded once, collected her bag, and walked out. Through the window he watched her sit on the bench outside. She opened a paperback and within seconds seemed to have forgotten the world existed."',
            solution: 'Speech: The woman says nothing, suggesting she is reserved, private or possibly lonely. Actions: She pays with exact change (precise, controlled), ignores conversation (avoids social contact), and reads immediately (books are her preferred world). Effect: The cashier attempts connection but fails — she has a distancing effect on others. Looks: Not described, which itself reinforces that she is unremarkable or deliberate about not drawing attention. The characterisation is entirely indirect. The author shows a solitary, self-contained person who finds comfort in reading rather than in human interaction.',
          },
        ],
        hints: [
          'Go through each letter of STEAL and note what information the passage gives for each',
          'Consider what is NOT said as well — silences can be revealing',
        ],
        solution: 'A strong answer uses STEAL systematically, cites specific details from the passage, and draws a conclusion about the character based on the evidence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-17-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-ex-4',
        number: '17.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'In a short story, the main character starts out selfish and indifferent, but after witnessing a stranger\'s act of kindness, she begins helping others in her community. What type of character is she?',
        options: [
          {
            id: 'a',
            text: 'A dynamic character — she changes as a result of events in the story',
            isCorrect: true,
            feedback: 'Correct! A dynamic character undergoes significant internal change during the story. Her shift from selfishness to generosity is a clear transformation.',
          },
          {
            id: 'b',
            text: 'A static character — she remains the same throughout',
            isCorrect: false,
            feedback: 'Incorrect. A static character does not change. This character clearly transforms from selfish to generous.',
          },
          {
            id: 'c',
            text: 'A flat character — she only has one personality trait',
            isCorrect: false,
            feedback: 'Incorrect. The fact that she changes suggests complexity. Flat characters typically do not develop.',
          },
          {
            id: 'd',
            text: 'An unreliable narrator — she cannot be trusted',
            isCorrect: false,
            feedback: 'Incorrect. An unreliable narrator is a narrative voice issue, not a character type related to change. Nothing here suggests she is narrating unreliably.',
          },
        ],
        solution: 'She is a dynamic character. Dynamic characters undergo meaningful internal change during the story, often as a result of conflict or a turning point.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-17-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-ex-5',
        number: '17.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a short paragraph (60-80 words) that characterises a person as nervous WITHOUT directly stating "He/she was nervous." Use at least three elements from the STEAL method.',
        hints: [
          'Think about what a nervous person does with their hands, eyes and voice',
          'Consider how other people might react to someone who is visibly anxious',
          'Show, don\'t tell — let the reader figure out the emotion from the details',
        ],
        solution: 'A strong response will use indirect characterisation: perhaps the character fidgets (Actions), avoids eye contact (Looks), speaks in short, broken sentences (Speech), and causes others to ask "Are you okay?" (Effect). The word "nervous" should not appear in the paragraph.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-17-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-ex-6',
        number: '17.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A short story is set in a small fishing village during a winter storm. The main character is a widow who waits for her son\'s boat to return. Which type of conflict is MOST central here?',
        options: [
          {
            id: 'a',
            text: 'Person vs. Nature — the storm threatens the son\'s life',
            isCorrect: true,
            feedback: 'Correct! The storm is a natural force that creates the central danger. The widow\'s worry is driven by this external conflict between her son and the sea.',
          },
          {
            id: 'b',
            text: 'Person vs. Person — the widow is in conflict with her son',
            isCorrect: false,
            feedback: 'Incorrect. There is no indication of interpersonal conflict between mother and son. Her anxiety comes from the storm, not from a disagreement.',
          },
          {
            id: 'c',
            text: 'Person vs. Technology — the boat\'s equipment has failed',
            isCorrect: false,
            feedback: 'Incorrect. The passage does not mention technological failure. The threat comes from the natural storm.',
          },
          {
            id: 'd',
            text: 'Person vs. Society — the village forces the son to fish in dangerous weather',
            isCorrect: false,
            feedback: 'Incorrect. While economic pressure could be a secondary theme, the most immediate and central conflict is with the storm itself.',
          },
        ],
        solution: 'Person vs. Nature. The winter storm is the external force that creates the story\'s tension. Other conflicts (internal worry, economic pressure) may be present, but the central conflict is the son against the natural elements.',
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-17-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-ex-7',
        number: '17.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Perform a close reading of the passage below. In your analysis (150-200 words in English), discuss narrative voice, setting, characterisation and any symbolism you can identify.',
        subTasks: [
          {
            label: 'a',
            task: `"The last bus had gone. Amira stood at the empty stop, her school bag heavy on one shoulder, and watched the rain erase the street. She could have called her father, but that would mean explaining why she had stayed behind — and she wasn't ready for that conversation. Instead she zipped her jacket to the chin and began to walk. The streetlights made the wet road shine like something precious, like a path in a fairy tale. She told herself that if she just kept walking, she would eventually arrive somewhere that made sense."

Analyse the passage. Discuss narrative voice, setting, characterisation and symbolism.`,
            solution: 'Narrative voice: Third-person limited, following Amira closely — we access her thoughts but no one else\'s. Setting: An empty bus stop in the rain at night creates a mood of isolation and uncertainty. The detail "the last bus had gone" suggests finality and missed opportunity. Characterisation: Amira avoids calling her father, suggesting she is independent but also hiding something ("she wasn\'t ready for that conversation"). Her decision to walk shows determination. The heavy school bag is a physical detail that may symbolise burdens. Symbolism: The rain "erasing the street" suggests a desire for a fresh start. The road shining "like a path in a fairy tale" suggests Amira needs to believe in something hopeful despite her difficult reality. Her thought about arriving "somewhere that made sense" reveals inner confusion about her life direction.',
          },
        ],
        hints: [
          'Address each element systematically: voice, setting, character, symbol',
          'Quote specific words and phrases as evidence for your points',
          'Consider what Amira is NOT saying — the gap between her actions and her feelings',
        ],
        solution: 'A complete analysis covers all four elements, uses quotations as evidence, and connects the literary techniques to the passage\'s overall meaning. The strongest responses will show how the elements work together.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-17-summary',
      type: 'text',
      content: `## Summary — Short Stories: Close Reading

**Narrative voice and point of view:**
- **First person** ("I") — intimate, subjective, potentially unreliable
- **Third-person limited** — follows one character, balanced perspective
- **Third-person omniscient** — all-knowing, complete overview
- **Unreliable narrator** — account that cannot be fully trusted

**Setting:**
- Includes time, place, social context and atmosphere
- Setting can mirror or contrast characters' emotions
- Authors use sensory details, weather and imagery to create mood

**Characterisation:**
- **Direct:** The narrator tells us what a character is like
- **Indirect (STEAL):** Speech, Thoughts, Effect, Actions, Looks
- **Static vs. dynamic:** Does the character change?
- **Round vs. flat:** Is the character complex or one-dimensional?

**Conflict types:**
- Person vs. Person, Person vs. Self, Person vs. Nature, Person vs. Society, Person vs. Technology

**Symbolism:**
- Objects, settings or events that carry meaning beyond the literal

**Key principle:** Close reading means asking not just *what* happens but *how* and *why* the author tells the story in this particular way.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'engelsk-10-17-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-17-ex-8',
        number: '17.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose a short story you have read in English class (or find one online by an author such as Roald Dahl, Sandra Cisneros, or Chimamanda Ngozi Adichie). Write a close reading analysis of 250-350 words covering narrative voice, setting, characterisation and theme.',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the narrative voice and explain how it affects the reader\'s experience of the story.',
            solution: 'The student should identify the point of view with evidence and explain the effect — for example, a first-person child narrator creates sympathy and limited understanding that the reader must fill in.',
          },
          {
            label: 'b',
            task: 'Analyse how the setting contributes to the story\'s mood and themes.',
            solution: 'A strong answer connects specific setting details to the emotional atmosphere and to larger themes (e.g., a claustrophobic setting reflecting a character\'s feeling of being trapped).',
          },
          {
            label: 'c',
            task: 'Choose one character and analyse how they are characterised. Use the STEAL method.',
            solution: 'The student should cite specific textual evidence for at least three STEAL elements and draw a conclusion about what kind of person the character is.',
          },
          {
            label: 'd',
            task: 'Explain what you think is the main theme of the story and how the literary elements you have analysed contribute to it.',
            solution: 'The student should identify a clear theme (e.g., loss of innocence, identity, belonging) and show how narrative voice, setting and characterisation all work together to develop it.',
          },
        ],
        hints: [
          'A theme is not a topic — it is a message or insight about that topic (e.g., not "war" but "war destroys innocence")',
          'Use quotations from the text to support every point you make',
          'Show how the different elements (voice, setting, character) connect to each other',
        ],
        solution: 'A strong analysis treats the story as a unified whole, showing how narrative voice, setting and characterisation work together to develop the theme. Evidence from the text is essential.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Close reading', definition: 'A method of careful, detailed analysis of a text, focusing on language, structure and literary techniques.' },
    { term: 'Narrative voice', definition: 'The perspective from which a story is told — first person, third-person limited or third-person omniscient.' },
    { term: 'Characterisation', definition: 'The methods an author uses to reveal a character\'s personality, including direct statements and indirect techniques (STEAL).' },
    { term: 'Symbolism', definition: 'The use of objects, settings or events to represent abstract ideas or meanings beyond the literal.' },
    { term: 'Conflict', definition: 'The central struggle in a story — person vs. person, self, nature, society or technology.' },
  ],
};

// ============================================================================
// KAPITTEL 18: Poetry — Rhythm and Meaning
// ============================================================================

export const CHAPTER_ENGELSK_10_18: TextbookChapter = {
  id: 'engelsk-10-18',
  courseId: 'engelsk-10',
  chapterNumber: '18',
  title: 'Poetry — Rhythm and Meaning',
  description: 'Explore how English-language poets use rhythm, rhyme, imagery and figurative language to create meaning, and develop the skills to analyse and respond to poems.',
  estimatedMinutes: 90,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'utforske og beskrive levemåter, samfunnsforhold og verdier i ulike engelskspråklige land og sammenligne med eget samfunn',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-18-intro',
      type: 'text',
      content: `## Poetry — Rhythm and Meaning

Poetry is language at its most concentrated. In a poem, every word, every pause, every line break is a deliberate choice. Learning to read poetry closely teaches you to pay attention to language in a way that improves all your reading and writing.

Many students feel uncertain about poetry because it does not always "make sense" the way a news article does. That is precisely the point — poetry invites you to sit with ambiguity, to feel meaning as much as think it, and to appreciate how sound and structure contribute to what a text communicates.

**Why study poetry in English class?**

- Poetry appears on the English exam, both as a text for analysis and as a creative writing option
- It builds your vocabulary and sensitivity to language
- It connects you to centuries of English-language culture
- It develops your ability to interpret figurative and layered language

**In this chapter you will learn to:**

1. Identify and analyse poetic structure — stanzas, line breaks and form
2. Recognise rhythm and metre, including stressed and unstressed syllables
3. Analyse rhyme schemes and sound devices
4. Interpret imagery and figurative language in poems
5. Write about poetry with confidence and precision`,
    },

    // ========== DEFINISJON 1: POETIC STRUCTURE ==========
    {
      id: 'engelsk-10-18-def-1',
      type: 'definition',
      title: 'Poetic Structure — Form and Line Breaks',
      content: `**Poetic structure** refers to the way a poem is organised on the page — its stanzas, line lengths, line breaks and overall form.

**Stanza**
A group of lines in a poem, similar to a paragraph in prose. Common stanza types:
- **Couplet** — 2 lines
- **Tercet** — 3 lines
- **Quatrain** — 4 lines (the most common stanza in English poetry)

**Line break (Enjambment vs. End-stopped lines)**
- **End-stopped line:** The line ends with a natural pause, often marked by punctuation.
  *"I wandered lonely as a cloud,"* — the comma creates a pause.
- **Enjambment:** The sentence continues across the line break without a pause, creating momentum or surprise.
  *"I think that I shall never see / A poem lovely as a tree"* — the meaning flows from one line to the next.

**Common poetic forms:**
- **Sonnet** — 14 lines, often with a volta (turn) near the end
- **Free verse** — no fixed metre or rhyme scheme; the poet creates their own structure
- **Haiku** — 3 lines with 5-7-5 syllables (Japanese origin, widely used in English)
- **Ballad** — narrative poem, often in quatrains with a regular rhyme scheme

**Key insight:** The way a poem looks on the page is part of its meaning. A short, fragmented poem feels different from one with long, flowing lines.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-18-example-1',
      type: 'example',
      title: 'Example: Analysing line breaks and enjambment',
      problem: `Look at how the line breaks function in this extract:

*"I have eaten
the plums
that were in
the icebox

and which
you were probably
saving
for breakfast

Forgive me
they were delicious
so sweet
and so cold"*

— William Carlos Williams, "This Is Just to Say"

How do the short lines and enjambment contribute to the poem's effect?`,
      solution: `**Analysis:**

**Structure:** The poem consists of three quatrains (4-line stanzas) with very short lines — most are only two or three words. There is no punctuation except the implied pause between stanzas.

**Enjambment:** Nearly every line runs into the next: "I have eaten / the plums / that were in / the icebox" is one continuous sentence broken across four lines. This creates a slow, deliberate pace, as if the speaker is confessing something carefully, word by word.

**Effect of short lines:**
- Each line break forces the reader to pause briefly, which makes even a simple action (eating plums) feel significant
- The isolation of "saving" on its own line emphasises the guilt — the plums were meant for someone else
- "Forgive me" on its own line reads like a genuine plea, standing out from the rest

**Overall effect:** The poem is written like a note left on a kitchen table. The short lines and enjambment turn an everyday act into something intimate and slightly apologetic. The final three lines — "they were delicious / so sweet / and so cold" — show that the speaker does not truly regret it. The form mirrors the content: small, simple, but layered with meaning.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-18-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-ex-1',
        number: '18.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is a quatrain?',
        options: [
          {
            id: 'a',
            text: 'A stanza of four lines',
            isCorrect: true,
            feedback: 'Correct! A quatrain is a four-line stanza, the most common stanza form in English poetry.',
          },
          {
            id: 'b',
            text: 'A poem with four stanzas',
            isCorrect: false,
            feedback: 'Incorrect. A quatrain is a single four-line stanza, not a poem with four stanzas. A poem can contain many quatrains.',
          },
          {
            id: 'c',
            text: 'A poem written in four languages',
            isCorrect: false,
            feedback: 'Incorrect. The "quat-" prefix refers to the number four, but it means four lines in a stanza, not four languages.',
          },
          {
            id: 'd',
            text: 'A rhyme scheme with four rhyming words',
            isCorrect: false,
            feedback: 'Incorrect. While a quatrain may contain rhymes, the term refers to the four-line stanza structure, not to a specific rhyme pattern.',
          },
        ],
        solution: 'A quatrain is a stanza of four lines. It is the most common stanza form in English poetry and appears in ballads, sonnets and many other forms.',
      },
    },

    // ========== DEFINISJON 2: RHYTHM AND SOUND ==========
    {
      id: 'engelsk-10-18-def-2',
      type: 'definition',
      title: 'Rhythm, Metre and Sound Devices',
      content: `**Rhythm** in poetry comes from the pattern of stressed (strong) and unstressed (weak) syllables. When this pattern is regular, it is called **metre**.

**Common metres in English:**
- **Iambic** (da-DUM): unstressed + stressed — *"Shall I comPARE thee TO a SUMmer's DAY?"*
  The most natural rhythm in English — close to everyday speech.
- **Trochaic** (DUM-da): stressed + unstressed — *"TYger, TYger, BURning BRIGHT"*
  Creates a strong, driving rhythm.

**Iambic pentameter** — five iambs (da-DUM × 5) per line — is the most important metre in English literature. Shakespeare, Milton and countless others used it.

**Sound devices:**

**Rhyme:**
- **End rhyme** — rhyme at the end of lines: *"day / May"*
- **Internal rhyme** — rhyme within a line: *"Once upon a midnight dreary, while I pondered, weak and weary"*
- **Slant rhyme** — approximate rhyme: *"moon / bone"*

**Alliteration** — repetition of initial consonant sounds: *"Peter Piper picked a peck"*

**Assonance** — repetition of vowel sounds: *"the rain in Spain stays mainly on the plain"*

**Onomatopoeia** — words that imitate sounds: *"buzz, hiss, splash, crash"*

**Key insight:** Sound devices are not decoration — they create mood, pace and emphasis. A poem full of hard consonants (k, t, p) feels very different from one dominated by soft sounds (l, m, s).`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-18-example-2',
      type: 'example',
      title: 'Example: Identifying rhythm and sound devices',
      problem: `Identify the rhythm and sound devices in the following lines:

*"Break, break, break,
On thy cold gray stones, O Sea!
And I would that my tongue could utter
The thoughts that arise in me."*

— Alfred, Lord Tennyson`,
      solution: `**Rhythm:** The poem opens with three stressed monosyllables — "BREAK, BREAK, BREAK" — creating a heavy, slow rhythm that mimics waves hitting rocks. The following lines have a more varied, flowing rhythm, contrasting with the opening's blunt force.

**Sound devices identified:**

1. **Repetition:** "Break, break, break" — the triple repetition creates a relentless, crashing rhythm
2. **Onomatopoeia:** "Break" sounds like the action it describes — something shattering or waves smashing on rocks
3. **Alliteration:** "cold" and "could" share the hard /k/ sound; "tongue" and "thoughts" and "that" share the /th/ sound
4. **Assonance:** The long /o/ sound in "cold," "stones," "O" creates a mournful, drawn-out quality

**Effect:** The sound mirrors the meaning. The harsh, repetitive "break" captures both the physical power of waves and the speaker's emotional pain. The lines grow longer and more flowing, suggesting thoughts pouring out, but the speaker admits his "tongue" cannot "utter" them — language itself is inadequate. The contrast between the violent opening and the helpless ending creates a powerful sense of grief.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-18-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-ex-2',
        number: '18.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which sound device is used in the phrase "the silken, sad, uncertain rustling of each purple curtain"? (Edgar Allan Poe, "The Raven")',
        options: [
          {
            id: 'a',
            text: 'Alliteration — the repeated "s" sound in "silken, sad" and the "r" in "rustling"',
            isCorrect: true,
            feedback: 'Correct! The repeated initial "s" sounds create a soft, sinister whisper. There is also sibilance (a specific form of alliteration using "s" sounds) and the "r" sounds in "rustling" and "purple curtain."',
          },
          {
            id: 'b',
            text: 'Onomatopoeia only — "rustling" imitates a sound',
            isCorrect: false,
            feedback: 'While "rustling" is indeed onomatopoeic, the dominant device across the whole phrase is alliteration, especially the repeated sibilant "s" sounds.',
          },
          {
            id: 'c',
            text: 'End rhyme — "rustling" and "curtain" rhyme',
            isCorrect: false,
            feedback: 'Incorrect. "Rustling" and "curtain" do not rhyme. End rhyme occurs at the end of lines, and these words do not share the same ending sound.',
          },
          {
            id: 'd',
            text: 'Iambic pentameter — the line follows a strict da-DUM rhythm',
            isCorrect: false,
            feedback: 'Incorrect. Iambic pentameter is a metre, not a sound device. Poe uses a different metrical pattern (trochaic octameter) in "The Raven."',
          },
        ],
        solution: 'Alliteration, specifically sibilance (repeated "s" sounds). The soft "s" sounds in "silken, sad" and the "sh" quality of "uncertain" create a whispering, eerie atmosphere that suits the poem\'s gothic mood.',
      },
    },

    // ========== DEFINISJON 3: IMAGERY AND FIGURATIVE LANGUAGE ==========
    {
      id: 'engelsk-10-18-def-3',
      type: 'definition',
      title: 'Imagery and Figurative Language in Poetry',
      content: `**Imagery** is language that appeals to the senses — sight, sound, touch, taste or smell. It helps the reader *experience* the poem rather than just understand it intellectually.

**Figurative language** uses words in non-literal ways to create vivid comparisons and deeper meaning:

**Simile**
A comparison using "like" or "as."
- *"My love is like a red, red rose"* (Robert Burns)

**Metaphor**
A direct comparison without "like" or "as" — one thing *is* another.
- *"Life is a broken-winged bird / That cannot fly"* (Langston Hughes)

**Personification**
Giving human qualities to non-human things.
- *"The wind stood up and gave a shout"* (James Stephens)

**Extended metaphor**
A metaphor that continues across several lines or an entire poem, developing the comparison in detail.

**Hyperbole**
Deliberate exaggeration for emphasis or effect.
- *"I have been hungry all the years"* (Emily Dickinson)

**Oxymoron**
A combination of contradictory words.
- *"O loving hate! O heavy lightness!"* (Shakespeare)

**Key analysis question:** When you find figurative language in a poem, always ask: *What is being compared to what?* and *What does this comparison reveal or emphasise?*`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-18-example-3',
      type: 'example',
      title: 'Example: Analysing imagery and figurative language',
      problem: `Analyse the figurative language in the following poem extract:

*"Hope is the thing with feathers
That perches in the soul,
And sings the tune without the words,
And never stops at all,"*

— Emily Dickinson`,
      solution: `**Extended metaphor:** The entire extract is built on a single comparison: hope is a bird. Dickinson never uses the word "bird," but every detail points to it:

- **"the thing with feathers"** — identifies hope as a bird through its physical feature
- **"perches"** — a verb associated with birds sitting on a branch
- **"in the soul"** — the bird/hope lives inside us, not in the external world
- **"sings the tune without the words"** — hope communicates through feeling, not language; like birdsong, it is felt rather than understood
- **"never stops at all"** — hope is persistent and resilient, like a bird that sings regardless of circumstances

**Imagery:** The poem appeals primarily to sound ("sings the tune") and creates a visual image of a small, feathered creature perched inside us.

**Effect:** By comparing hope to a bird, Dickinson makes an abstract emotion feel concrete and alive. The bird is small, fragile and persistent — suggesting that hope is delicate but enduring. The metaphor also implies that hope is natural and instinctive, not something we choose but something that simply exists within us.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-18-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-ex-3',
        number: '18.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Identify the figurative language in the following line: "The fog comes on little cat feet." (Carl Sandburg)',
        options: [
          {
            id: 'a',
            text: 'Metaphor — the fog is compared to a cat without using "like" or "as"',
            isCorrect: true,
            feedback: 'Correct! The fog is described as having "cat feet," making it a metaphor. The fog IS a cat in this comparison — silent, soft and creeping.',
          },
          {
            id: 'b',
            text: 'Simile — the fog is compared to a cat using "like"',
            isCorrect: false,
            feedback: 'Incorrect. A simile uses "like" or "as." This line says the fog comes ON little cat feet — it is a direct metaphor, not a simile.',
          },
          {
            id: 'c',
            text: 'Hyperbole — the fog is exaggerated',
            isCorrect: false,
            feedback: 'Incorrect. Hyperbole is deliberate exaggeration. This line does not exaggerate — it compares fog to a quiet, creeping cat, which is apt rather than extreme.',
          },
          {
            id: 'd',
            text: 'Onomatopoeia — "fog" sounds like the thing it describes',
            isCorrect: false,
            feedback: 'Incorrect. "Fog" does not imitate a sound. The dominant device here is a metaphor comparing fog to a cat.',
          },
        ],
        solution: 'Metaphor. The fog is compared directly to a cat — it moves on "little cat feet," suggesting it is silent, soft and stealthy. No "like" or "as" is used.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-18-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-ex-4',
        number: '18.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Read the following lines and identify at least two different types of figurative language. Explain the effect of each.',
        subTasks: [
          {
            label: 'a',
            task: '"The sun was a furnace, and the streets melted under its glare. Even the shadows seemed to gasp for breath."',
            solution: 'Metaphor: "The sun was a furnace" compares the sun to a furnace, emphasising extreme, oppressive heat. Personification: "shadows seemed to gasp for breath" gives shadows human qualities, suggesting the heat is so intense that even non-living things suffer. Hyperbole: "streets melted" is an exaggeration that reinforces the sense of unbearable heat. Together, these devices create a vivid, oppressive atmosphere.',
          },
        ],
        hints: [
          'Look for comparisons (metaphor, simile) and human qualities given to non-human things (personification)',
          'Consider whether any statements are deliberately exaggerated (hyperbole)',
        ],
        solution: 'The passage uses metaphor ("sun was a furnace"), personification ("shadows gasp for breath") and hyperbole ("streets melted") to create vivid imagery of extreme heat.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-18-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-ex-5',
        number: '18.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write four lines of poetry (a quatrain) that describe a season using at least one simile and one example of alliteration. The poem does not need to rhyme.',
        hints: [
          'Choose a season and brainstorm sensory details — what do you see, hear, feel, smell?',
          'A simile compares using "like" or "as" — for example, "leaves like golden coins"',
          'Alliteration repeats initial consonant sounds — for example, "silent snow settles softly"',
        ],
        solution: 'A strong response includes a clear simile and alliteration that contribute to the poem\'s mood. The imagery should be specific and sensory, not vague or cliched.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-18-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-ex-6',
        number: '18.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'In the line "O heavy lightness, serious vanity!" (Shakespeare, Romeo and Juliet), what figurative device is used?',
        options: [
          {
            id: 'a',
            text: 'Oxymoron — contradictory words are combined ("heavy lightness," "serious vanity")',
            isCorrect: true,
            feedback: 'Correct! An oxymoron pairs contradictory words. "Heavy lightness" and "serious vanity" express Romeo\'s confusion about love — it feels both wonderful and terrible at the same time.',
          },
          {
            id: 'b',
            text: 'Simile — two things are compared using "like" or "as"',
            isCorrect: false,
            feedback: 'Incorrect. There is no comparison using "like" or "as" in this line. The device here is the pairing of contradictory words.',
          },
          {
            id: 'c',
            text: 'Personification — an abstract concept is given human qualities',
            isCorrect: false,
            feedback: 'Incorrect. While "lightness" and "vanity" are abstract, they are not given human qualities here. The device is the deliberate contradiction in each pair.',
          },
          {
            id: 'd',
            text: 'Alliteration — the same consonant sound is repeated',
            isCorrect: false,
            feedback: 'Incorrect. While there are some repeated sounds, the defining device in this line is the oxymoron — the pairing of words that contradict each other.',
          },
        ],
        solution: 'Oxymoron. Shakespeare pairs contradictory words to express the paradoxical nature of love — it is simultaneously heavy and light, serious and vain. This captures Romeo\'s emotional confusion.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-18-summary',
      type: 'text',
      content: `## Summary — Poetry: Rhythm and Meaning

**Poetic structure:**
- **Stanza types:** couplet (2 lines), tercet (3), quatrain (4)
- **Line breaks:** end-stopped (pause at line end) vs. enjambment (sentence flows across lines)
- **Forms:** sonnet, free verse, haiku, ballad

**Rhythm and metre:**
- Rhythm comes from patterns of stressed and unstressed syllables
- **Iambic** (da-DUM) is the most natural English rhythm
- **Iambic pentameter** (5 iambs per line) is the most important metre

**Sound devices:**
- **Rhyme:** end rhyme, internal rhyme, slant rhyme
- **Alliteration:** repeated initial consonant sounds
- **Assonance:** repeated vowel sounds
- **Onomatopoeia:** words that imitate sounds

**Figurative language:**
- **Simile:** comparison using "like" or "as"
- **Metaphor:** direct comparison — one thing IS another
- **Personification:** giving human qualities to non-human things
- **Extended metaphor:** a comparison developed across several lines
- **Hyperbole:** deliberate exaggeration
- **Oxymoron:** contradictory words combined

**Key principle:** In poetry, *how* something is said is as important as *what* is said. Sound, structure and figurative language all contribute to meaning.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-18-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-ex-7',
        number: '18.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose a poem in English that you find interesting (it can be a song lyric, a classic poem, or a modern spoken-word poem). Write an analysis of 200-300 words covering structure, sound devices, imagery and theme.',
        subTasks: [
          {
            label: 'a',
            task: 'Describe the poem\'s structure: How many stanzas? What form? Does it use enjambment or end-stopped lines?',
            solution: 'The student should identify the number of stanzas, the stanza type, the line lengths, and whether the poem uses enjambment or end-stopping, with specific examples.',
          },
          {
            label: 'b',
            task: 'Identify at least two sound devices and explain their effect on the poem\'s mood.',
            solution: 'The student should name specific devices (rhyme, alliteration, assonance, onomatopoeia) with quotations from the poem and explain how they contribute to the overall mood or meaning.',
          },
          {
            label: 'c',
            task: 'Analyse the poem\'s use of imagery and figurative language. Quote at least two examples.',
            solution: 'The student should identify similes, metaphors, personification or other figurative language with exact quotations and explain what each comparison reveals or emphasises.',
          },
          {
            label: 'd',
            task: 'What is the poem\'s theme, and how do the techniques you have analysed contribute to it?',
            solution: 'A strong answer connects the technical analysis to the poem\'s meaning, showing how sound, structure and imagery work together to develop the central theme.',
          },
        ],
        hints: [
          'Song lyrics are poems too — feel free to choose a song you know well',
          'Quote specific lines as evidence for every claim you make',
          'Theme is the insight or message, not just the topic',
        ],
        solution: 'A complete analysis covers structure, sound, imagery and theme with specific textual evidence, showing how the technical choices contribute to the poem\'s meaning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-18-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-18-ex-8',
        number: '18.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write your own poem in English (8-16 lines) on a topic of your choice. Then write a short commentary (80-100 words) explaining the techniques you used and why.',
        subTasks: [
          {
            label: 'a',
            task: 'Write the poem. Include at least one example of figurative language (simile, metaphor or personification) and at least one sound device (rhyme, alliteration or assonance).',
            solution: 'A successful poem will show deliberate use of at least one figurative and one sound device. It should have a clear subject and create some kind of mood or emotional effect.',
          },
          {
            label: 'b',
            task: 'Write a short commentary explaining: What is the poem about? Which techniques did you use? Why did you make these choices?',
            solution: 'The commentary should demonstrate awareness of the techniques used. For example: "I used a metaphor comparing loneliness to an empty room because I wanted the reader to feel the silence. I used alliteration in line 3 to slow the rhythm down."',
          },
        ],
        hints: [
          'Start with a feeling, image or memory — then find the words',
          'Read your poem aloud to check how it sounds',
          'The commentary is your chance to show you understand what you did and why',
        ],
        solution: 'Strong creative work shows deliberate technique, and the commentary demonstrates the ability to reflect on one\'s own writing choices.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Enjambment', definition: 'When a sentence or phrase continues past the end of a line without a pause, creating flow and momentum.' },
    { term: 'Iambic pentameter', definition: 'A metrical pattern of five iambs (unstressed-stressed) per line, the most important metre in English poetry.' },
    { term: 'Alliteration', definition: 'The repetition of initial consonant sounds in nearby words, creating rhythm and emphasis.' },
    { term: 'Extended metaphor', definition: 'A metaphor that is developed across several lines or an entire poem, building a sustained comparison.' },
    { term: 'Oxymoron', definition: 'A figure of speech that combines contradictory words for effect, such as "heavy lightness" or "living death."' },
  ],
};

// ============================================================================
// KAPITTEL 19: The Novel — Themes and Characters
// ============================================================================

export const CHAPTER_ENGELSK_10_19: TextbookChapter = {
  id: 'engelsk-10-19',
  courseId: 'engelsk-10',
  chapterNumber: '19',
  title: 'The Novel — Themes and Characters',
  description: 'Develop the skills to analyse novels in English, focusing on how authors develop themes through plot structure, character arcs, motifs and narrative perspective across a longer text.',
  estimatedMinutes: 90,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'bruke ulike strategier for å forstå og vurdere innholdet i tekster på engelsk',
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-19-intro',
      type: 'text',
      content: `## The Novel — Themes and Characters

The novel is the most expansive literary form you will encounter in English class. Unlike a short story, a novel has the space to develop complex characters, explore multiple themes and build a world the reader can inhabit over hundreds of pages.

Reading a novel requires stamina, but it also rewards you with a depth of understanding that shorter texts cannot provide. When you analyse a novel, you look at how all the parts — plot, character, setting, language, structure — work together to create meaning.

**What makes the novel different from the short story?**

- **Length and scope:** A novel can follow characters over years or even generations
- **Multiple storylines:** Subplots weave around the main plot, adding complexity
- **Character development:** Characters have room to grow, change and reveal contradictions
- **Thematic depth:** A novel can explore a theme from many different angles

**In this chapter you will learn to:**

1. Understand plot structure and how novels are organised
2. Analyse character development and character arcs
3. Identify and trace themes and motifs across a novel
4. Connect a novel's themes to its historical and cultural context
5. Write a well-structured literary essay about a novel`,
    },

    // ========== DEFINISJON 1: PLOT STRUCTURE ==========
    {
      id: 'engelsk-10-19-def-1',
      type: 'definition',
      title: 'Plot Structure in the Novel',
      content: `**Plot** is the sequence of events in a novel — the "what happens." But good analysis goes beyond summary to examine *how* the events are arranged and *why*.

**Freytag's Pyramid — the classic five-part structure:**

**1. Exposition**
The opening section that introduces characters, setting and the situation before the main conflict begins.

**2. Rising action**
Events that build tension and develop the conflict. Complications arise, stakes increase and the reader becomes invested.

**3. Climax**
The turning point — the moment of greatest tension or the decisive event that changes the direction of the story.

**4. Falling action**
Events after the climax that show the consequences of the turning point. Loose ends begin to be resolved.

**5. Resolution (Denouement)**
The conclusion — conflicts are resolved (or deliberately left unresolved) and the reader sees where the characters end up.

**Important variations:**
- **In medias res** — the novel begins in the middle of events, then fills in the background through flashbacks
- **Non-linear structure** — the story jumps between different time periods
- **Open ending** — the resolution is ambiguous, leaving the reader to draw their own conclusions
- **Subplot** — a secondary storyline that runs alongside the main plot, often echoing or contrasting with the main theme`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-19-example-1',
      type: 'example',
      title: 'Example: Mapping plot structure',
      problem: `Apply Freytag's Pyramid to a well-known novel — *The Hunger Games* by Suzanne Collins — and identify each stage.`,
      solution: `**Plot structure of *The Hunger Games*:**

**1. Exposition:** We meet Katniss Everdeen in District 12, a poor community in the dystopian nation of Panem. The annual Hunger Games are approaching — a televised fight to the death among children. We learn about Katniss's family, her hunting skills and the oppressive Capitol.

**2. Rising action:** Katniss volunteers to take her sister's place. She travels to the Capitol, trains, forms an alliance with Peeta and enters the arena. Each day brings new dangers — other tributes, the Gamemakers' traps and the struggle for survival.

**3. Climax:** Katniss and Peeta are the last two survivors, but the rules are changed so only one can win. Katniss produces the poisonous berries — if they both die, the Capitol loses its spectacle. This is the turning point because it transforms Katniss from a survivor into a rebel.

**4. Falling action:** The Capitol backs down and declares both winners. But Katniss realises her act of defiance has made her a political threat. The victory is uneasy.

**5. Resolution:** Katniss and Peeta return home, but their relationship is complicated by the performance they staged for the cameras. The Capitol is watching. The ending is partially open — the immediate conflict is resolved, but the larger conflict (rebellion against the Capitol) is just beginning.

**Key insight:** The plot is not just a sequence of events — it is structured to develop the theme of power, resistance and the cost of survival.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-19-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-ex-1',
        number: '19.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the "climax" of a novel?',
        options: [
          {
            id: 'a',
            text: 'The turning point — the moment of greatest tension that changes the direction of the story',
            isCorrect: true,
            feedback: 'Correct! The climax is the decisive moment where the central conflict reaches its peak. After the climax, the story moves toward resolution.',
          },
          {
            id: 'b',
            text: 'The very first scene of the novel',
            isCorrect: false,
            feedback: 'Incorrect. The opening of the novel is the exposition, where characters and setting are introduced. The climax comes later.',
          },
          {
            id: 'c',
            text: 'The final sentence of the book',
            isCorrect: false,
            feedback: 'Incorrect. The final part of the novel is the resolution or denouement. The climax occurs before that, at the peak of tension.',
          },
          {
            id: 'd',
            text: 'Any scene that contains action or fighting',
            isCorrect: false,
            feedback: 'Incorrect. A novel may have many action scenes, but the climax is the single most important turning point, not just any exciting event.',
          },
        ],
        solution: 'The climax is the turning point of the novel — the moment of highest tension where the central conflict reaches a decisive point. Everything after the climax is shaped by this moment.',
      },
    },

    // ========== DEFINISJON 2: CHARACTER ARCS ==========
    {
      id: 'engelsk-10-19-def-2',
      type: 'definition',
      title: 'Character Arcs — How Characters Change',
      content: `A **character arc** is the transformation a character undergoes from the beginning to the end of a novel. The arc is driven by the events of the plot and the choices the character makes.

**Types of character arcs:**

**1. Positive arc (Growth)**
The character starts with a flaw, limitation or false belief and, through the events of the story, overcomes it.
- *Example:* Elizabeth Bennet in *Pride and Prejudice* overcomes her prejudice against Darcy as she learns to judge people more fairly.

**2. Negative arc (Decline)**
The character deteriorates — they become corrupted, broken or morally compromised by events.
- *Example:* Macbeth begins as a respected warrior and ends as a paranoid tyrant consumed by guilt and ambition.

**3. Flat arc (Steadfast)**
The character does not change, but they change the world around them. Their core values are tested but remain intact.
- *Example:* Atticus Finch in *To Kill a Mockingbird* maintains his commitment to justice despite enormous social pressure.

**Analysing a character arc — key questions:**
- What is the character like at the beginning?
- What challenges or conflicts do they face?
- How do they respond to these challenges?
- What is the character like at the end?
- What caused the change (or resistance to change)?

**Foil characters:** A character who contrasts with the protagonist, highlighting particular qualities. For example, Draco Malfoy is a foil to Harry Potter — their similar backgrounds but opposite choices illuminate Harry's character.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-19-example-2',
      type: 'example',
      title: 'Example: Analysing a character arc',
      problem: `Trace the character arc of Jonas in *The Giver* by Lois Lowry.`,
      solution: `**Jonas's character arc (Positive/Growth):**

**Beginning:** Jonas is a well-behaved, obedient twelve-year-old living in a seemingly perfect community. He accepts the rules without question, trusts the Elders and looks forward to receiving his life assignment. He is curious but compliant.

**Turning point:** Jonas is assigned the role of Receiver of Memory. Through the Giver, he experiences memories of colour, music, love, pain and war — things his community has eliminated. He discovers that "Sameness" has come at the cost of genuine human experience.

**Key moment of change:** When Jonas learns that "release" means death — and that his father casually kills infants who do not meet standards — his entire worldview collapses. He can no longer accept the community's values.

**End:** Jonas makes the radical choice to flee with baby Gabriel, risking death to escape a society built on control and suppression of feeling. He chooses uncertainty and freedom over safety and ignorance.

**Arc summary:**
- **Start:** Obedient, trusting, innocent
- **Middle:** Questioning, conflicted, increasingly aware
- **End:** Rebellious, courageous, morally awakened

**What drives the change:** Knowledge. Jonas's transformation is caused by receiving memories that reveal the truth his society has hidden. The novel argues that true humanity requires the full spectrum of experience — including pain and loss.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-19-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-ex-2',
        number: '19.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A character begins a novel as a trusting, idealistic young person. After being betrayed by a mentor, they become cynical and manipulative. What type of character arc is this?',
        options: [
          {
            id: 'a',
            text: 'A negative arc — the character declines from a positive state to a worse one',
            isCorrect: true,
            feedback: 'Correct! A negative arc shows a character who deteriorates. The betrayal causes a transformation from idealism to cynicism, which represents moral or emotional decline.',
          },
          {
            id: 'b',
            text: 'A positive arc — the character learns from their mistakes',
            isCorrect: false,
            feedback: 'Incorrect. A positive arc involves growth and improvement. Becoming cynical and manipulative is a decline, not growth.',
          },
          {
            id: 'c',
            text: 'A flat arc — the character stays the same',
            isCorrect: false,
            feedback: 'Incorrect. The character clearly changes from trusting to cynical. A flat arc means the character\'s core values remain constant.',
          },
          {
            id: 'd',
            text: 'No arc — this is just a series of events',
            isCorrect: false,
            feedback: 'Incorrect. The character clearly undergoes a transformation driven by a specific event (betrayal). This is a well-defined negative character arc.',
          },
        ],
        solution: 'A negative arc. The character moves from a positive state (trusting, idealistic) to a worse state (cynical, manipulative) as a result of betrayal. Not all character development is positive.',
      },
    },

    // ========== DEFINISJON 3: THEMES AND MOTIFS ==========
    {
      id: 'engelsk-10-19-def-3',
      type: 'definition',
      title: 'Themes and Motifs in the Novel',
      content: `A **theme** is a central idea or message that a novel explores. It is not the same as the subject or topic — a theme is an *insight* about that subject.

**Topic vs. Theme:**
- **Topic:** War
- **Theme:** "War destroys innocence and forces people to confront moral choices they are not prepared for."

**How to identify themes:**
1. Look at what the main character learns or fails to learn
2. Notice what happens to characters who make certain choices
3. Pay attention to recurring ideas across different parts of the novel
4. Consider the title — it often points to a central theme
5. Ask: "What is the author saying about human nature or society?"

**A motif** is a recurring element — an image, object, phrase or idea — that reinforces a theme.

**Examples of motifs:**
- In *The Great Gatsby,* the green light at the end of Daisy's dock is a motif representing Gatsby's unreachable dream
- In *Lord of the Flies,* the conch shell is a motif for civilisation and order — as it deteriorates, so does the boys' society
- In *To Kill a Mockingbird,* the mockingbird is a motif for innocence — characters who are "mockingbirds" are harmless people harmed by injustice

**The difference:**
- A **theme** is an abstract idea: *"Innocence is destroyed by injustice"*
- A **motif** is a concrete, recurring element that *symbolises* or *reinforces* the theme: *the mockingbird*`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-19-example-3',
      type: 'example',
      title: 'Example: Tracing a theme through a novel',
      problem: `Identify and trace one major theme in *Animal Farm* by George Orwell, showing how it develops from beginning to end.`,
      solution: `**Theme: Power corrupts those who hold it.**

**Beginning (Exposition):** The animals overthrow the cruel farmer Mr. Jones, inspired by Old Major's dream of equality. The Seven Commandments are established, including "All animals are equal." The theme is introduced through its opposite — the animals believe that removing the tyrant will bring justice.

**Rising action:** The pigs, led by Napoleon, gradually assume more authority. They justify their privileges with the argument that they need extra food and comfort because they do the "brain work." The other animals accept this because they trust the pigs. The theme develops: even in a system designed for equality, some will seek power.

**Climax:** Napoleon uses his dogs to drive out Snowball and seizes complete control. The Commandments are secretly changed. "All animals are equal" becomes "All animals are equal, but some animals are more equal than others." The theme reaches its fullest expression — the revolution has been betrayed.

**Resolution:** The pigs begin walking on two legs and socialising with human farmers. The other animals look from pig to man and can no longer tell the difference. The final image crystallises the theme: power corrupts absolutely, and revolutionaries can become indistinguishable from the tyrants they replaced.

**Motif supporting the theme:** The Seven Commandments, which are progressively altered, serve as a motif tracking the corruption of power — each change marks a step in the pigs' betrayal of the revolution's ideals.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-19-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-ex-3',
        number: '19.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the difference between a theme and a motif?',
        options: [
          {
            id: 'a',
            text: 'A theme is an abstract idea or message; a motif is a recurring concrete element that reinforces the theme',
            isCorrect: true,
            feedback: 'Correct! A theme is the insight or message (e.g., "power corrupts"), while a motif is a specific, recurring element — an image, object or phrase — that symbolises or supports that theme.',
          },
          {
            id: 'b',
            text: 'A theme is the main character; a motif is a secondary character',
            isCorrect: false,
            feedback: 'Incorrect. Themes and motifs are not characters. A theme is a central idea, and a motif is a recurring element like an image or symbol.',
          },
          {
            id: 'c',
            text: 'A theme is the plot summary; a motif is the setting',
            isCorrect: false,
            feedback: 'Incorrect. A theme is not the same as a plot summary — it is the deeper meaning. A motif is not the setting but a recurring element that carries symbolic weight.',
          },
          {
            id: 'd',
            text: 'They are the same thing — just different words for the main topic',
            isCorrect: false,
            feedback: 'Incorrect. They are related but distinct. A theme is the abstract message; a motif is a concrete, recurring element that helps develop the theme.',
          },
        ],
        solution: 'A theme is the abstract insight or message a novel explores (e.g., "power corrupts"). A motif is a concrete, recurring element — an image, object or phrase — that reinforces and symbolises the theme.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-19-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-ex-4',
        number: '19.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Think of a novel you have read in English (or Norwegian). Identify one major theme and one motif that reinforces it. Write 80-120 words in English.',
        subTasks: [
          {
            label: 'a',
            task: 'State the theme as a complete sentence (not just a topic word). For example, not "friendship" but "True friendship requires sacrifice and honesty, even when it is painful."',
            solution: 'The student should formulate a specific thematic statement, not just a topic word. For example: "In The Kite Runner, the theme is that redemption is possible but requires confronting the mistakes of the past."',
          },
          {
            label: 'b',
            task: 'Identify a motif (a recurring image, object or phrase) that supports this theme. Explain how it appears at different points in the novel and what it represents.',
            solution: 'The student should identify a specific recurring element and trace it through the novel. For example: "The kite in The Kite Runner appears first as a symbol of childhood joy, then of betrayal (the kite-running incident), and finally of redemption (when Amir runs a kite for Hassan\'s son)."',
          },
        ],
        hints: [
          'A theme is NOT a single word — it is a statement about life, human nature or society',
          'A motif appears more than once — look for objects, images or phrases that come back',
        ],
        solution: 'A strong answer clearly distinguishes between the abstract theme and the concrete motif, showing how the motif reinforces the theme at multiple points in the novel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-19-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-ex-5',
        number: '19.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'In a novel, the protagonist is a soldier who questions the purpose of war. His best friend believes unquestioningly in the mission and follows orders without hesitation. What is the friend\'s narrative function?',
        options: [
          {
            id: 'a',
            text: 'He is a foil — his unquestioning obedience highlights the protagonist\'s doubt and moral complexity',
            isCorrect: true,
            feedback: 'Correct! A foil is a character whose contrasting qualities make the protagonist\'s traits more visible. The friend\'s certainty emphasises the protagonist\'s uncertainty and critical thinking.',
          },
          {
            id: 'b',
            text: 'He is the antagonist — he opposes the protagonist',
            isCorrect: false,
            feedback: 'Incorrect. An antagonist actively opposes the protagonist. The friend is on the same side — he simply has a different attitude. He is a foil, not an enemy.',
          },
          {
            id: 'c',
            text: 'He is the narrator — he tells the story',
            isCorrect: false,
            feedback: 'Incorrect. Nothing in the description suggests the friend is narrating. His function is to contrast with the protagonist as a foil.',
          },
          {
            id: 'd',
            text: 'He is a motif — he symbolises the theme of obedience',
            isCorrect: false,
            feedback: 'Incorrect. A motif is a recurring image, object or phrase — not a character. A character who contrasts with the protagonist is called a foil.',
          },
        ],
        solution: 'The friend is a foil character. His unquestioning obedience contrasts with the protagonist\'s doubt, highlighting the protagonist\'s moral complexity and the novel\'s theme about the ethics of war.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-19-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-ex-6',
        number: '19.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a paragraph (80-100 words in English) explaining how a novel\'s historical or cultural context can affect its themes. Use a specific example.',
        hints: [
          'Think about novels set during specific historical periods — war, colonialism, civil rights, etc.',
          'Consider how the author\'s own background and time period influence what they write about',
          'Example: Harper Lee wrote To Kill a Mockingbird during the civil rights movement — the novel\'s themes of racial injustice reflect the real struggles of the time',
        ],
        solution: 'A strong answer names a specific novel, identifies its historical/cultural context, and explains how that context shapes the themes. For example, George Orwell wrote Animal Farm in 1945 as an allegory of the Russian Revolution — the theme of power corruption directly reflects Orwell\'s observations of Stalinist totalitarianism.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-19-summary',
      type: 'text',
      content: `## Summary — The Novel: Themes and Characters

**Plot structure (Freytag's Pyramid):**
- Exposition, Rising action, Climax, Falling action, Resolution
- Variations: in medias res, non-linear structure, open endings, subplots

**Character arcs:**
- **Positive arc:** the character grows and overcomes a flaw
- **Negative arc:** the character declines or becomes corrupted
- **Flat arc:** the character stays the same but changes the world around them
- **Foil character:** a character who contrasts with the protagonist

**Theme vs. Motif:**
- A **theme** is an abstract insight about life, human nature or society
- A **motif** is a concrete, recurring element that reinforces a theme
- A theme is stated as a sentence; a motif is identified as an object, image or phrase

**Context matters:**
- A novel's historical, cultural and social context shapes its themes
- Understanding when and where a novel was written deepens your analysis

**Key principle:** When analysing a novel, look at how plot, character, theme and context work *together*. The best analysis connects these elements rather than treating them separately.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-19-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-ex-7',
        number: '19.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose a novel you have read and write a literary essay of 250-350 words in English. Your essay should analyse how the author develops ONE major theme through character, plot and motif.',
        subTasks: [
          {
            label: 'a',
            task: 'Introduction: State the title, author and the theme you will analyse. Write a clear thesis statement.',
            solution: 'The thesis should name the theme and preview how it is developed. Example: "In The Giver, Lois Lowry develops the theme that true humanity requires both joy and suffering, using Jonas\'s character arc, the novel\'s dystopian plot and the motif of colour to illustrate this idea."',
          },
          {
            label: 'b',
            task: 'Body: Show how the theme is developed through (1) the main character\'s arc, (2) key plot events and (3) at least one motif. Use specific evidence from the novel.',
            solution: 'The student should trace the theme through multiple elements with specific textual evidence. Each body paragraph should focus on one element (character, plot or motif) and show how it contributes to the theme.',
          },
          {
            label: 'c',
            task: 'Conclusion: Explain why this theme matters — what does the novel teach us about being human?',
            solution: 'A strong conclusion connects the literary analysis to broader significance, showing why the theme is relevant beyond the novel itself.',
          },
        ],
        hints: [
          'Your thesis statement should appear at the end of your introduction',
          'Each body paragraph should start with a topic sentence that connects to the thesis',
          'Quote or reference specific scenes, not just general plot summaries',
        ],
        solution: 'A well-structured literary essay has a clear thesis, develops its argument through specific evidence, and connects the analysis to broader significance. The best essays show how character, plot and motif work together to develop the theme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-19-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-19-ex-8',
        number: '19.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Compare two novels you have read that share a similar theme but treat it differently. Write 200-250 words in English.',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the shared theme and explain how each novel approaches it.',
            solution: 'The student should name a specific theme and show how each novel treats it from a different angle. For example, both The Hunger Games and Lord of the Flies explore what happens when young people are placed in survival situations, but Collins focuses on resistance to oppressive systems while Golding focuses on the darkness within human nature.',
          },
          {
            label: 'b',
            task: 'Explain what comparing the two novels reveals about the theme that reading only one would not.',
            solution: 'A strong answer shows that comparing novels deepens understanding — for example, reading both books together reveals that whether people become violent in extreme situations may depend on whether they have external enemies or only each other.',
          },
        ],
        hints: [
          'Choose novels with a clear thematic connection',
          'Focus on differences in how the theme is treated, not just plot differences',
          'The comparison should produce a new insight that neither novel alone provides',
        ],
        solution: 'Comparative analysis reveals that different novels can explore the same theme from opposing angles. The strongest responses use the comparison to generate a new insight about the theme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Plot structure', definition: 'The organisation of events in a novel, typically following exposition, rising action, climax, falling action and resolution.' },
    { term: 'Character arc', definition: 'The transformation a character undergoes from the beginning to the end of a story, driven by events and choices.' },
    { term: 'Motif', definition: 'A recurring image, object, phrase or idea in a novel that reinforces and symbolises a theme.' },
    { term: 'Foil character', definition: 'A character whose contrasting qualities highlight specific traits in the protagonist.' },
    { term: 'In medias res', definition: 'A narrative technique where the story begins in the middle of events, with background filled in later through flashbacks.' },
  ],
};

// ============================================================================
// KAPITTEL 20: Drama and Theatre
// ============================================================================

export const CHAPTER_ENGELSK_10_20: TextbookChapter = {
  id: 'engelsk-10-20',
  courseId: 'engelsk-10',
  chapterNumber: '20',
  title: 'Drama and Theatre',
  description: 'Explore the conventions of English-language drama, from Shakespeare to modern plays, learning to analyse dialogue, stage directions, dramatic structure and performance elements.',
  estimatedMinutes: 90,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'utforske og beskrive levemåter, samfunnsforhold og verdier i ulike engelskspråklige land og sammenligne med eget samfunn',
    'uttrykke seg med flyt og sammenheng tilpasset formål og situasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-20-intro',
      type: 'text',
      content: `## Drama and Theatre

Drama is literature written to be performed. When you read a play, you are reading a blueprint for a live event — one that involves actors, a stage, an audience and the unique energy of a shared experience.

Analysing drama requires a different set of skills from analysing prose or poetry. In a novel, a narrator can tell you what characters think and feel. In a play, you must infer everything from **dialogue** (what characters say), **stage directions** (how they move and behave) and **dramatic structure** (how the scenes are arranged).

**What makes drama unique?**

- **No narrator:** There is usually no voice explaining what characters think — you must interpret their words and actions
- **Dialogue-driven:** Nearly everything is communicated through speech
- **Performance:** A play is designed to be seen and heard, not just read — staging, lighting and acting add layers of meaning
- **Audience:** Drama creates a communal experience — the audience's presence affects the performance

**In this chapter you will learn to:**

1. Understand the key conventions of dramatic texts
2. Analyse dialogue and what lies beneath the words (subtext)
3. Read and interpret stage directions
4. Examine dramatic structure — acts, scenes and dramatic irony
5. Appreciate the relationship between the written text and performance`,
    },

    // ========== DEFINISJON 1: DRAMATIC CONVENTIONS ==========
    {
      id: 'engelsk-10-20-def-1',
      type: 'definition',
      title: 'Key Dramatic Conventions',
      content: `**Dramatic conventions** are the established techniques and devices used in plays. Understanding these helps you read and analyse drama effectively.

**Dialogue**
The spoken words of the characters. In drama, dialogue does all the work — it reveals character, advances the plot and communicates theme. Pay attention to *how* characters speak as well as *what* they say.

**Stage directions**
Instructions written by the playwright, usually in italics or brackets, describing movement, tone, setting or actions:
- *[She turns away and stares out the window]*
- *[Angrily]* "I don't care what you think."

**Soliloquy**
A speech in which a character, alone on stage, speaks their thoughts aloud to the audience. It reveals inner feelings that other characters cannot hear.
- Shakespeare's "To be, or not to be" (Hamlet) is the most famous soliloquy in English.

**Aside**
A brief remark made by a character to the audience that other characters on stage cannot hear. It often reveals the character's true feelings or intentions.

**Monologue**
A long speech by one character, delivered to other characters on stage (unlike a soliloquy, which is delivered alone).

**Dramatic irony**
When the audience knows something that one or more characters do not. This creates tension, suspense or dark humour.
- In *Romeo and Juliet,* the audience knows Juliet is not really dead, but Romeo does not — this creates unbearable tension.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-20-example-1',
      type: 'example',
      title: 'Example: Identifying dramatic conventions',
      problem: `Read the following scene and identify the dramatic conventions used:

*ANNA: [Pacing nervously] He said he would be here by six.*
*TOM: [Reading a newspaper, not looking up] He always says that.*
*ANNA: [Aside, to audience] Tom doesn't know I invited David. If he finds out, this dinner is over before it starts.*
*TOM: Did you say something?*
*ANNA: [Quickly] No. Just talking to myself.*`,
      solution: `**Dramatic conventions identified:**

**1. Stage directions:** "[Pacing nervously]" tells us Anna is anxious. "[Reading a newspaper, not looking up]" tells us Tom is disengaged and perhaps indifferent. These physical actions reveal character without any narration.

**2. Aside:** Anna speaks directly to the audience: "Tom doesn't know I invited David." This reveals a secret that Tom cannot hear. The audience now has information that Tom lacks.

**3. Dramatic irony:** Because of the aside, the audience knows that David has been invited but Tom does not. Every line Tom speaks from this point carries extra tension — the audience waits for the secret to come out.

**4. Subtext:** Anna's reply "No. Just talking to myself" is literally true (she was speaking aloud) but conceals the truth. The dialogue on the surface says one thing; the real meaning lies beneath.

**Effect:** In just five lines, the playwright establishes Anna's anxiety, Tom's obliviousness, a secret and dramatic tension — all through dialogue, stage directions and an aside, with no narrator needed.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-20-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-20-ex-1',
        number: '20.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is a soliloquy?',
        options: [
          {
            id: 'a',
            text: 'A speech in which a character, alone on stage, speaks their thoughts aloud to the audience',
            isCorrect: true,
            feedback: 'Correct! A soliloquy is a solo speech that reveals a character\'s inner thoughts and feelings. Other characters are not present to hear it.',
          },
          {
            id: 'b',
            text: 'A conversation between two characters',
            isCorrect: false,
            feedback: 'Incorrect. A conversation between two characters is simply dialogue. A soliloquy is a solo speech delivered when the character is alone on stage.',
          },
          {
            id: 'c',
            text: 'A brief whispered comment to the audience during a scene',
            isCorrect: false,
            feedback: 'Incorrect. That describes an aside. A soliloquy is longer and is delivered when the character is alone on stage.',
          },
          {
            id: 'd',
            text: 'The playwright\'s instructions about how to perform a scene',
            isCorrect: false,
            feedback: 'Incorrect. Those are stage directions. A soliloquy is a speech by a character, not instructions from the playwright.',
          },
        ],
        solution: 'A soliloquy is a speech in which a character speaks their inner thoughts aloud while alone on stage. It reveals feelings and motivations that other characters do not know about.',
      },
    },

    // ========== DEFINISJON 2: SUBTEXT ==========
    {
      id: 'engelsk-10-20-def-2',
      type: 'definition',
      title: 'Subtext — What Lies Beneath the Words',
      content: `**Subtext** is the unspoken meaning beneath the surface of dialogue. In real life, people rarely say exactly what they mean — and the same is true in drama. Good playwrights write dialogue where the words on the page are only part of the story.

**How subtext works:**

**1. Characters say the opposite of what they feel**
- Character says: "I'm fine."
- Subtext: "I am clearly not fine, but I don't want to talk about it."

**2. Characters avoid the real subject**
- Two characters talk about the weather when the real issue is their failing relationship.

**3. The gap between words and actions**
- A character says "I trust you completely" while locking the door behind them.

**4. Pauses and silences**
- In Harold Pinter's plays, pauses are as important as words. A silence after a question can mean more than any answer.

**How to identify subtext:**
- Read the stage directions: Do the character's actions contradict their words?
- Look for short, evasive answers or topic changes
- Pay attention to what characters do NOT say
- Consider the situation: What would this character really be feeling?

**Why subtext matters:**
Subtext makes drama feel real. In life, people use polite words to hide anger, ask indirect questions to avoid vulnerability, and use humour to mask pain. Drama that captures this complexity is more powerful than dialogue where everyone says exactly what they mean.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-20-example-2',
      type: 'example',
      title: 'Example: Reading subtext in dialogue',
      problem: `Analyse the subtext in the following exchange:

*MOTHER: [Setting the table] Your father called today.*
*SARAH: [Pause] Did he.*
*MOTHER: He asked about your exams.*
*SARAH: That's nice of him.*
*MOTHER: He wants to come to your graduation.*
*SARAH: [Picking up her plate] I'm not hungry anymore.*
*[She exits.]*`,
      solution: `**Surface dialogue:** A mother tells her daughter that her father called and wants to attend her graduation. The conversation appears calm and factual.

**Subtext analysis:**

**"Did he."** — This is written as a statement, not a question (no question mark). Sarah is not curious or pleased — she is flat and emotionally guarded. The period suggests she does not want to engage.

**"That's nice of him."** — The phrase sounds polite, but in context it is likely sarcastic or hollow. If Sarah were genuinely pleased, she would respond with more warmth. "That's nice of him" creates distance — as if her father is a stranger, not a parent.

**"I'm not hungry anymore."** — Sarah does not respond to the graduation comment at all. Instead, she changes the subject to something physical (hunger/food) and leaves. Her actions tell the real story: she cannot sit at this table and discuss her father.

**The pause** after "Your father called today" signals the emotional weight of this topic. Sarah needs a moment before she can respond at all.

**Stage direction "[She exits]"** — Leaving the room is Sarah's strongest statement. What she does not say (whether she wants her father there) is the most important part of the scene.

**Conclusion:** The scene is about an absent father and a daughter's unresolved pain. Neither character names the real issue — hurt, abandonment, anger — but it is present in every line.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-20-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-20-ex-2',
        number: '20.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Read the exchange below and write a short analysis (60-80 words in English) explaining the subtext — what are the characters really communicating beneath the surface?',
        subTasks: [
          {
            label: 'a',
            task: `JAMES: [Cheerfully] How was the interview?
KATE: [Hanging up her coat slowly] Fine. It was fine.
JAMES: So... when do you start?
KATE: [Pause] Can we talk about this later?
JAMES: [His smile fading] Sure. Whenever you're ready.`,
            solution: 'The subtext reveals that the interview did not go well. Kate\'s repeated "fine" and slow actions suggest deflection and disappointment. James\'s question "When do you start?" assumes success, showing he is out of touch with reality. Kate\'s request to "talk about this later" avoids admitting failure. James\'s fading smile shows he is reading the signals. Neither character states the obvious truth directly — the avoidance itself communicates the bad news.',
          },
        ],
        hints: [
          'Look at what Kate does NOT say — she never answers whether she got the job',
          'Pay attention to the stage directions and the pause',
          'James\'s response "Sure. Whenever you\'re ready" suggests he understands more than he says',
        ],
        solution: 'A strong analysis identifies the gap between what is said and what is meant, using stage directions and dialogue patterns as evidence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON 3: DRAMATIC STRUCTURE ==========
    {
      id: 'engelsk-10-20-def-3',
      type: 'definition',
      title: 'Dramatic Structure — Acts, Scenes and Tension',
      content: `**Dramatic structure** refers to how a play is organised — its division into acts and scenes, and how tension is built and released throughout.

**Acts and scenes:**
- A **scene** is a continuous section of action in one location
- An **act** is a larger division, often containing several scenes. Traditional plays have three or five acts.

**Three-act structure (modern standard):**
- **Act 1 — Setup:** Introduces characters, setting and the central conflict
- **Act 2 — Confrontation:** The conflict develops, complications arise, tension escalates
- **Act 3 — Resolution:** The conflict reaches a climax and is resolved

**Five-act structure (Shakespearean):**
- Act 1: Exposition — Act 2: Rising action — Act 3: Climax — Act 4: Falling action — Act 5: Denouement

**Key dramatic devices for building tension:**

**Foreshadowing:** Hints about what will happen later.
- In *Macbeth,* the witches' prophecies foreshadow the violent events to come.

**Dramatic irony:** The audience knows more than the characters.
- This creates tension because the audience anticipates disaster that the characters cannot see coming.

**Cliffhanger:** A scene or act ends at a moment of high suspense, leaving the outcome unresolved.

**Reversal (Peripeteia):** A sudden change in fortune — from good to bad or bad to good.
- Oedipus discovers that he himself is the murderer he has been searching for.

**Recognition (Anagnorisis):** A character discovers a crucial truth, often about their own identity or situation.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-20-example-3',
      type: 'example',
      title: 'Example: Dramatic irony in Romeo and Juliet',
      problem: `Explain how dramatic irony functions in the final scene of *Romeo and Juliet* and what effect it has on the audience.`,
      solution: `**The situation:** Juliet has taken a potion that makes her appear dead. Friar Lawrence's plan is for Romeo to receive a letter explaining the deception, so he can rescue Juliet when she wakes. But the letter never reaches Romeo.

**The dramatic irony:** The audience knows that Juliet is alive — they watched her take the potion and heard the plan. But Romeo does not know. When he enters the tomb and sees Juliet's apparently lifeless body, he believes she is truly dead.

**Effect on the audience:**
1. **Unbearable tension:** The audience wants to shout "She's alive!" but cannot intervene. This helplessness is the power of dramatic irony.
2. **Emotional intensity:** When Romeo says "Here's to my love!" and drinks the poison, the audience knows he is making a fatal mistake based on false information. The tragedy is magnified because it was preventable.
3. **The cruelest moment:** Juliet wakes seconds after Romeo dies. The timing is devastating precisely because the audience has been watching the misunderstanding unfold in real time.

**Why Shakespeare uses this device:** Dramatic irony transforms a sad ending into a truly tragic one. The audience does not simply learn that the lovers die — they watch it happen while knowing it could have been prevented. This shared knowledge between playwright and audience is what makes drama so powerful as a communal experience.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-20-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-20-ex-3',
        number: '20.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'In a play, the audience knows that a character\'s best friend is secretly working against them, but the character does not know this. What dramatic device is at work?',
        options: [
          {
            id: 'a',
            text: 'Dramatic irony — the audience knows something the character does not',
            isCorrect: true,
            feedback: 'Correct! Dramatic irony occurs when the audience possesses knowledge that a character lacks. This creates tension as the audience anticipates the moment of discovery.',
          },
          {
            id: 'b',
            text: 'Foreshadowing — hints about future events',
            isCorrect: false,
            feedback: 'Incorrect. Foreshadowing provides hints or clues. Here, the audience has definite knowledge of the betrayal, not just hints.',
          },
          {
            id: 'c',
            text: 'Soliloquy — the character speaks their thoughts aloud',
            isCorrect: false,
            feedback: 'Incorrect. A soliloquy is a specific speech delivered alone on stage. The situation described here is about a gap in knowledge between audience and character.',
          },
          {
            id: 'd',
            text: 'Subtext — the dialogue has hidden meaning',
            isCorrect: false,
            feedback: 'Incorrect. Subtext is about unspoken meaning beneath dialogue. Dramatic irony is specifically about the audience knowing more than the characters.',
          },
        ],
        solution: 'Dramatic irony. The audience\'s knowledge of the betrayal creates tension in every scene where the character trusts their "friend." The audience waits for the truth to emerge.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-20-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-20-ex-4',
        number: '20.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a short scene (8-12 lines of dialogue plus stage directions) between two characters where the subtext reveals something the words do not directly state. Then write a brief explanation (40-60 words) of the subtext.',
        hints: [
          'Think of a situation where characters cannot or will not say what they really mean — a breakup, a secret, an apology',
          'Use stage directions to show what characters are feeling through actions',
          'The audience should understand more from the scene than the literal words suggest',
        ],
        solution: 'A successful scene shows a gap between surface dialogue and underlying meaning. The stage directions should reinforce the subtext, and the explanation should clearly identify what the characters are really communicating.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-20-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-20-ex-5',
        number: '20.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the main difference between reading a play and reading a novel?',
        options: [
          {
            id: 'a',
            text: 'A play has no narrator — meaning is communicated through dialogue, stage directions and performance',
            isCorrect: true,
            feedback: 'Correct! Unlike novels, plays typically have no narrator to explain what characters think. Everything must be inferred from what characters say, how they act, and the context of the scene.',
          },
          {
            id: 'b',
            text: 'A play is always shorter than a novel',
            isCorrect: false,
            feedback: 'Incorrect. While many plays are shorter, this is not the defining difference. Some plays are very long. The key difference is the absence of a narrator.',
          },
          {
            id: 'c',
            text: 'A play cannot explore complex themes',
            isCorrect: false,
            feedback: 'Incorrect. Plays by Shakespeare, Arthur Miller, Lorraine Hansberry and many others explore deeply complex themes. Drama is not less sophisticated than prose.',
          },
          {
            id: 'd',
            text: 'A play is always set in the past',
            isCorrect: false,
            feedback: 'Incorrect. Plays can be set in any time period, including the present or the future.',
          },
        ],
        solution: 'The key difference is that a play has no narrator. In a novel, a narrator can tell you what characters think and feel. In a play, you must infer everything from dialogue, stage directions and the overall dramatic context.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-20-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-20-ex-6',
        number: '20.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Imagine you are directing a performance of the scene below. Write director\'s notes (100-150 words in English) explaining how you would stage it — including actors\' movements, tone of voice, lighting and any props.',
        subTasks: [
          {
            label: 'a',
            task: `MRS LINDE: Nora, you must tell your husband everything.
NORA: [Staring at her] Tell him—? Everything—?
MRS LINDE: It is the only way. You must be honest with each other. This secret is destroying you.
NORA: [After a long silence] You don't understand. If Torvald finds out, it will destroy everything.

How would you direct this scene? Consider staging, movement, lighting and the actors' delivery.`,
            solution: 'Strong director\'s notes might include: Nora should be physically restless (pacing, touching furniture) while Mrs Linde is still and composed, reflecting their contrasting states. The lighting could be warm but with one area of shadow where Nora gravitates when she is most afraid. Nora\'s line "Tell him—? Everything—?" should be delivered in a whisper, with a physical flinch. The "long silence" before Nora\'s final line should last at least five seconds — let the audience feel the weight. Nora might turn away from Mrs Linde on "You don\'t understand," showing her isolation. The scene should feel like a pressure cooker about to burst.',
          },
        ],
        hints: [
          'Think about what the characters are feeling and how their bodies would show it',
          'Lighting can create mood — bright light feels exposed, dim light feels secretive',
          'Silences and pauses are as important as words in drama',
        ],
        solution: 'Effective director\'s notes show understanding of how performance elements — movement, tone, lighting, pacing — add meaning beyond the written text. The staging should reflect the emotional dynamics of the scene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-20-summary',
      type: 'text',
      content: `## Summary — Drama and Theatre

**Key dramatic conventions:**
- **Dialogue:** The primary vehicle for character, plot and theme
- **Stage directions:** The playwright's instructions for action, movement and tone
- **Soliloquy:** A solo speech revealing inner thoughts (audience can hear, characters cannot)
- **Aside:** A brief remark to the audience that other characters do not hear
- **Monologue:** A long speech delivered to other characters on stage

**Subtext:**
- The unspoken meaning beneath the surface of dialogue
- Characters often say the opposite of what they feel, avoid the real subject, or let actions contradict words
- Pauses and silences can be as meaningful as words

**Dramatic structure:**
- Three-act structure: Setup, Confrontation, Resolution
- Five-act structure (Shakespearean): Exposition, Rising action, Climax, Falling action, Denouement

**Dramatic devices:**
- **Dramatic irony:** The audience knows more than the characters
- **Foreshadowing:** Hints about future events
- **Reversal:** A sudden change in fortune
- **Recognition:** A character discovers a crucial truth

**Key principle:** Drama is designed to be performed. When you read a play, always imagine how it would look, sound and feel on a stage in front of an audience.`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'engelsk-10-20-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-20-ex-7',
        number: '20.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write a short one-act play (1-2 pages) with two or three characters. Your play should include dialogue with subtext, at least three stage directions, and one moment of dramatic irony or an aside. Then write a brief reflection (60-80 words) on the techniques you used.',
        subTasks: [
          {
            label: 'a',
            task: 'Write the play. The situation can be anything: a family dinner, a job interview, friends after a disagreement, strangers on a train. The dialogue should have layers — what characters say should not always match what they mean.',
            solution: 'A successful play will demonstrate subtext (gap between words and meaning), functional stage directions (revealing character through action) and at least one dramatic convention (aside, dramatic irony, soliloquy). The dialogue should sound natural, not like characters explaining their feelings directly.',
          },
          {
            label: 'b',
            task: 'Write a reflection explaining: What is the subtext? Where did you use dramatic irony or an aside? How do the stage directions add meaning?',
            solution: 'The reflection should show conscious understanding of dramatic techniques. The student should explain what the characters are really feeling and how the conventions they used reveal this.',
          },
        ],
        hints: [
          'Good drama comes from conflict — start with characters who want different things',
          'Read your dialogue aloud to check if it sounds natural',
          'Use stage directions to show emotions that the dialogue hides',
        ],
        solution: 'Creative drama writing demonstrates understanding of dramatic conventions through practice. The reflection shows the ability to analyse one\'s own creative choices.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Soliloquy', definition: 'A speech in which a character, alone on stage, speaks their inner thoughts aloud for the audience to hear.' },
    { term: 'Subtext', definition: 'The unspoken meaning beneath the surface of dialogue — what characters really think and feel but do not say directly.' },
    { term: 'Dramatic irony', definition: 'When the audience knows something that one or more characters do not, creating tension and anticipation.' },
    { term: 'Stage directions', definition: 'The playwright\'s written instructions describing characters\' movements, expressions, tone and the physical setting.' },
    { term: 'Aside', definition: 'A brief remark delivered by a character to the audience that other characters on stage cannot hear.' },
  ],
};

// ============================================================================
// KAPITTEL 21: Indigenous and Postcolonial Literature
// ============================================================================

export const CHAPTER_ENGELSK_10_21: TextbookChapter = {
  id: 'engelsk-10-21',
  courseId: 'engelsk-10',
  chapterNumber: '21',
  title: 'Indigenous and Postcolonial Literature',
  description: 'Explore literature from indigenous and postcolonial perspectives, understanding how writers from formerly colonised regions use English to reclaim identity, challenge power structures and tell their own stories.',
  estimatedMinutes: 90,
  competenceGoals: [
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'utforske og beskrive levemåter, samfunnsforhold og verdier i ulike engelskspråklige land og sammenligne med eget samfunn',
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'sammenligne og vurdere engelskspråklige kilder kritisk og reflektere over avsenderens formål',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-21-intro',
      type: 'text',
      content: `## Indigenous and Postcolonial Literature

English is spoken around the world, but it did not spread peacefully. The British Empire colonised vast territories across Africa, Asia, the Caribbean, Oceania and the Americas. Colonisation imposed the English language, British laws and Western values on diverse peoples who had their own languages, traditions and ways of understanding the world.

**Postcolonial literature** is writing that responds to this history. It includes works by authors from formerly colonised countries who use English — sometimes the very language of their colonisers — to challenge colonial narratives, reclaim their identities and tell stories that were silenced or distorted during the colonial period.

**Indigenous literature** refers specifically to writing by the original inhabitants of colonised lands — Aboriginal Australians, Native Americans, First Nations Canadians, Maori of New Zealand and many others. These writers draw on oral traditions, spiritual connections to land and community values that predate colonisation.

**Why does this matter for you?**

- English is not just a British or American language — it belongs to everyone who uses it
- Understanding postcolonial perspectives helps you see the world through different eyes
- These texts challenge you to think critically about power, identity and who gets to tell which stories
- The LK20 curriculum asks you to explore diverse English-speaking cultures

**In this chapter you will learn to:**

1. Understand the historical context of colonialism and its literary legacy
2. Recognise key themes in postcolonial and indigenous literature
3. Analyse how writers use language as a tool for resistance and identity
4. Read texts from diverse English-speaking cultures with sensitivity and critical awareness`,
    },

    // ========== DEFINISJON 1: POSTCOLONIAL CONCEPTS ==========
    {
      id: 'engelsk-10-21-def-1',
      type: 'definition',
      title: 'Key Concepts in Postcolonial Literature',
      content: `**Colonialism** is the practice of one country taking control of another, imposing its language, culture, laws and economic systems. The British Empire was the largest colonial power in history.

**Postcolonialism** is the study of the cultural, political and literary effects of colonialism — both during and after the colonial period.

**Key concepts:**

**1. The colonial gaze**
The way colonisers viewed colonised peoples — often as primitive, exotic or inferior. Colonial literature frequently portrayed non-European peoples through stereotypes.

**2. Othering**
The process of defining a group of people as fundamentally different from and inferior to one's own group. Colonisers "othered" indigenous populations to justify domination.

**3. Reclaiming voice**
Postcolonial writers take back the power to tell their own stories, rejecting the versions told by colonisers. As the Nigerian author Chinua Achebe wrote: *"Until the lions have their own historians, the history of the hunt will always glorify the hunter."*

**4. Hybridity**
The mixing of cultures that results from colonialism. Postcolonial identities are often hybrid — blending indigenous traditions with elements of colonial culture. This can be a source of both richness and tension.

**5. Writing back**
Literature that directly responds to and challenges colonial texts. For example, Chinua Achebe's *Things Fall Apart* was written partly in response to Joseph Conrad's *Heart of Darkness,* which portrayed Africa through a European lens.

**6. Language as power**
Colonisers often banned indigenous languages and forced colonised peoples to speak English. Many postcolonial writers deliberately reshape English to reflect their own cultures — using local rhythms, vocabulary and storytelling traditions within the English language.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-21-example-1',
      type: 'example',
      title: 'Example: Analysing "writing back" — Achebe and Conrad',
      problem: `Compare the following passages and explain how the second "writes back" to the first:

**Passage A** — Joseph Conrad, *Heart of Darkness* (1899):
*"We were wanderers on a prehistoric earth, on an earth that wore the aspect of an unknown planet... and the men were — No, they were not inhuman. Well, you know, that was the worst of it — this suspicion of their not being inhuman."*

**Passage B** — Chinua Achebe, *Things Fall Apart* (1958):
*"Among the Ibo the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten. Okonkwo was well known throughout the nine villages and even beyond."*`,
      solution: `**Passage A (Conrad):**
Conrad's narrator describes Africans from a European perspective. The language is revealing: "prehistoric earth" implies Africa is backward, stuck in the past. The phrase "the suspicion of their not being inhuman" questions whether Africans are even human — and presents this as the "worst of it," as if their humanity is disturbing rather than obvious. The Africans are unnamed, faceless and seen only through the European gaze.

**Passage B (Achebe):**
Achebe opens with an Igbo cultural practice — the value of conversation and proverbs — presented as sophisticated and rich: "proverbs are the palm-oil with which words are eaten" is itself a proverb, demonstrating the literary tradition in action. The protagonist has a name (Okonkwo), a reputation and a community ("the nine villages"). He is a specific person in a specific culture, not a nameless figure in a European nightmare.

**How Achebe "writes back":**
1. **Humanity:** Where Conrad questions African humanity, Achebe shows it as self-evident — through language, culture and individual identity
2. **Perspective:** Conrad writes about Africa from outside; Achebe writes from inside the Igbo community
3. **Language:** Achebe incorporates Igbo expressions and proverbs into English, showing that African culture has its own literary richness
4. **Specificity:** Conrad's Africans are generic; Achebe's characters are individuals with names, histories and social standing

**Key insight:** Achebe does not simply argue against Conrad — he makes Conrad's perspective irrelevant by telling the story from the inside.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-21-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-ex-1',
        number: '21.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What does the term "writing back" mean in postcolonial literature?',
        options: [
          {
            id: 'a',
            text: 'Literature that responds to and challenges colonial narratives by telling stories from the perspective of colonised peoples',
            isCorrect: true,
            feedback: 'Correct! "Writing back" means postcolonial authors create literature that challenges, corrects or provides alternatives to the stories told about them by colonial writers.',
          },
          {
            id: 'b',
            text: 'Authors who write letters back to publishers who rejected their work',
            isCorrect: false,
            feedback: 'Incorrect. "Writing back" is not about publishing disputes. It refers to the literary and cultural act of challenging colonial narratives.',
          },
          {
            id: 'c',
            text: 'Translating English literature into indigenous languages',
            isCorrect: false,
            feedback: 'Incorrect. While translation is important, "writing back" specifically means creating new literature that challenges the colonial perspective.',
          },
          {
            id: 'd',
            text: 'Writing about events in reverse chronological order',
            isCorrect: false,
            feedback: 'Incorrect. "Writing back" is not a structural technique. It is a cultural and political act of responding to colonial literature.',
          },
        ],
        solution: '"Writing back" means postcolonial writers create literature that challenges colonial narratives — telling their own stories from their own perspective rather than being defined by the coloniser\'s viewpoint.',
      },
    },

    // ========== DEFINISJON 2: INDIGENOUS PERSPECTIVES ==========
    {
      id: 'engelsk-10-21-def-2',
      type: 'definition',
      title: 'Indigenous Literary Traditions',
      content: `**Indigenous literature** draws on traditions that are often thousands of years older than written English. Understanding these traditions enriches your reading and challenges Western assumptions about what literature is.

**Key features of indigenous literary traditions:**

**1. Oral storytelling**
Many indigenous cultures transmitted stories orally for generations. These are not "primitive" alternatives to writing — they are sophisticated art forms with their own techniques: rhythm, repetition, audience participation and ceremonial contexts.

**2. Connection to land**
In many indigenous cultures, land is not just a setting — it is a living presence with spiritual significance. Australian Aboriginal literature, for example, connects to the concept of the Dreaming (Tjukurpa), where the land was shaped by ancestral beings whose stories are embedded in specific places.

**3. Community over individual**
Western literature often centres on the individual hero. Indigenous stories may focus on community, kinship and collective responsibility. The individual's journey is inseparable from the community's wellbeing.

**4. Circular rather than linear time**
Western narratives typically move in a straight line from beginning to end. Indigenous narratives may move in circles, revisiting themes and places, reflecting a worldview where past, present and future are interconnected.

**5. Resistance and survival**
For indigenous peoples who survived colonisation, genocide and forced assimilation, literature is an act of survival — a way of keeping languages, stories and cultural knowledge alive.

**Important authors to know:**
- **Sherman Alexie** (Spokane-Coeur d'Alene) — novels and poems about Native American life
- **Sally Morgan** (Aboriginal Australian) — *My Place,* a memoir recovering stolen family history
- **Joy Harjo** (Muscogee Creek) — US Poet Laureate, the first Native American to hold the title
- **Witi Ihimaera** (Maori) — *The Whale Rider,* about a Maori girl claiming her cultural heritage`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-21-example-2',
      type: 'example',
      title: 'Example: Land and identity in indigenous poetry',
      problem: `Read the following extract and analyse how the poet connects land, identity and the legacy of colonisation:

*"They came for our land, our law, our children,
our language, our dreaming.
They said: Assimilate.
We said: We are still here.
The river still remembers our names.
The rocks still hold our stories.
You cannot pave over songlines."*

(Composed for educational purposes in the style of Aboriginal Australian poetry)`,
      solution: `**Analysis:**

**Theme: Survival and resistance through connection to land.**

**Colonial violence listed:** The opening lines catalogue what was taken — "land, law, children, language, dreaming." This is not abstract; each item refers to documented colonial policies: land seizure, legal suppression, the Stolen Generations (forcible removal of Aboriginal children), language bans and the dismissal of Aboriginal spiritual traditions.

**The command "Assimilate":** A single word on its own line, representing the colonial demand to abandon indigenous identity and become part of European culture. Its isolation on the line emphasises its bluntness and violence.

**"We are still here":** The most powerful line — a simple declaration of survival. After everything that was taken, the community endures. This shifts the poem from a narrative of loss to one of defiance.

**Land as memory and identity:**
- "The river still remembers our names" — personification of the river as a keeper of identity. In Aboriginal culture, waterways are connected to ancestral journeys.
- "The rocks still hold our stories" — the land itself preserves culture, even when human institutions have tried to destroy it.
- "You cannot pave over songlines" — Songlines are Aboriginal pathways across the land that carry stories, laws and knowledge. The metaphor of "paving over" represents urban development and cultural erasure, but the poet insists this cannot succeed.

**Key insight:** The poem argues that indigenous identity cannot be destroyed because it is embedded in the land itself — and the land endures.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-21-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-ex-2',
        number: '21.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'How does postcolonial literature typically use the English language?',
        options: [
          {
            id: 'a',
            text: 'Writers reshape English by incorporating local rhythms, vocabulary and storytelling traditions, making the language their own',
            isCorrect: true,
            feedback: 'Correct! Many postcolonial writers deliberately transform English to reflect their own cultures. They may include words from indigenous languages, use local speech patterns, or structure narratives according to non-Western traditions.',
          },
          {
            id: 'b',
            text: 'Writers always reject English entirely and write only in their indigenous language',
            isCorrect: false,
            feedback: 'Incorrect. While some writers choose to write in indigenous languages, many postcolonial writers use English strategically — reaching wider audiences while transforming the language from within.',
          },
          {
            id: 'c',
            text: 'Writers use standard British English to prove their education',
            isCorrect: false,
            feedback: 'Incorrect. Postcolonial writers do not aim to imitate British English. Many deliberately subvert standard English to challenge the colonial power dynamic.',
          },
          {
            id: 'd',
            text: 'Writers avoid discussing colonialism because it is in the past',
            isCorrect: false,
            feedback: 'Incorrect. The effects of colonialism continue to shape societies today. Postcolonial literature engages directly with this history and its ongoing consequences.',
          },
        ],
        solution: 'Postcolonial writers reshape English by weaving in local vocabulary, speech rhythms and narrative traditions. They transform the colonial language into a tool for expressing their own identities and challenging the power structures that imposed it.',
      },
    },

    // ========== DEFINISJON 3: REPRESENTATION ==========
    {
      id: 'engelsk-10-21-def-3',
      type: 'definition',
      title: 'Representation — Who Tells the Story Matters',
      content: `**Representation** in literature refers to how different groups of people are portrayed — and, crucially, who does the portraying.

**Why representation matters:**

**1. Stories shape understanding**
The stories we read shape how we understand other cultures. If the only stories about Africa are written by Europeans, readers develop a distorted picture. The Nigerian author Chimamanda Ngozi Adichie calls this "the danger of a single story."

**2. Stereotypes vs. complexity**
Colonial literature often reduced colonised peoples to stereotypes: the "noble savage," the "exotic other," the "dangerous native." Postcolonial literature replaces stereotypes with complex, fully human characters.

**3. Whose perspective is centred?**
Ask: Who is the protagonist? Who is the narrator? Whose values does the text assume? A story about India told by a British character centres the colonial perspective. The same story told by an Indian character centres the colonised perspective — and often reveals very different truths.

**4. Absence is also a message**
If a literature curriculum includes only white, Western authors, the message — intended or not — is that other voices do not matter. Including diverse voices is not about being "politically correct" — it is about having a more complete and honest picture of humanity.

**Questions to ask when reading:**
- Who wrote this text, and from what cultural position?
- Whose story is being told? Whose story is missing?
- Are characters from other cultures portrayed as complex individuals or as stereotypes?
- Does the text challenge or reinforce existing power structures?`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-21-example-3',
      type: 'example',
      title: 'Example: Chimamanda Ngozi Adichie — "The Danger of a Single Story"',
      problem: `In her famous TED Talk, Chimamanda Ngozi Adichie describes how she grew up in Nigeria reading British children's books. She explains the effect: "All my characters were white and blue-eyed, they played in the snow, they ate apples, and they talked a lot about the weather." She then describes writing her own early stories with these same characters — even though she was Nigerian, had never seen snow, and ate mangoes.

Analyse what this example reveals about the power of representation in literature.`,
      solution: `**Analysis:**

**The problem of "a single story":**
Adichie's example shows how a lack of representation in literature can distort a young reader's sense of what is normal and valuable. By reading only British stories, the young Adichie internalised the idea that literature was about white, European characters. She did not see herself, her family or her culture reflected in the books she read.

**The effect on identity:**
When Adichie began writing, she unconsciously reproduced the only template she had: British characters in British settings. Her own reality — Nigerian weather, Nigerian food, Nigerian life — seemed unworthy of literature. This is the insidious power of representation: it does not just reflect reality; it shapes what we believe reality should be.

**The solution — multiple stories:**
Adichie does not argue that British books are bad. She argues that they should not be the *only* books available. When she discovered African literature (by Chinua Achebe and Camara Laye), she realised that "people like me — girls with skin the colour of chocolate, whose kinky hair could not form ponytails — could also exist in literature."

**Key insight:** Representation matters because stories teach us who counts. If only one perspective is represented, readers — especially young readers — may come to believe that other perspectives do not exist or do not matter. This is why diverse literature is essential, not optional.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-21-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-ex-3',
        number: '21.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Think about the books, films and TV shows you have consumed. Write a short reflection (80-120 words in English) answering the questions below.',
        subTasks: [
          {
            label: 'a',
            task: 'What cultures and perspectives are most represented in the stories you read and watch? What cultures are rarely or never represented?',
            solution: 'Most students will notice that American and British perspectives dominate their media consumption. Perspectives from Africa, Asia, indigenous communities and the Global South are typically underrepresented.',
          },
          {
            label: 'b',
            task: 'How might reading stories by authors from different cultural backgrounds change the way you understand the world?',
            solution: 'A thoughtful response will acknowledge that diverse stories provide new perspectives, challenge assumptions and build empathy. The student might connect this to Adichie\'s argument about the danger of a single story.',
          },
        ],
        hints: [
          'Be honest about your own media consumption — there are no wrong answers',
          'Think about whose voices you hear most often and whose voices are missing',
        ],
        solution: 'A strong reflection shows self-awareness about one\'s own cultural consumption and makes a genuine connection between reading diverse literature and understanding the world more fully.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-21-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-ex-4',
        number: '21.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What does Chimamanda Ngozi Adichie mean by "the danger of a single story"?',
        options: [
          {
            id: 'a',
            text: 'When we hear only one perspective about a people or culture, we risk reducing them to a stereotype and missing their full humanity',
            isCorrect: true,
            feedback: 'Correct! Adichie argues that a single story creates stereotypes — not because stereotypes are untrue, but because they are incomplete. They make one story become the ONLY story.',
          },
          {
            id: 'b',
            text: 'That short stories are dangerous because they are too simple',
            isCorrect: false,
            feedback: 'Incorrect. Adichie is not talking about the short story as a literary form. She means "a single story" as a single, dominant narrative about a group of people.',
          },
          {
            id: 'c',
            text: 'That reading only one book can damage your vocabulary',
            isCorrect: false,
            feedback: 'Incorrect. Adichie\'s point is about cultural understanding and representation, not about vocabulary development.',
          },
          {
            id: 'd',
            text: 'That fiction is dangerous because it is not factual',
            isCorrect: false,
            feedback: 'Incorrect. Adichie values fiction highly. Her argument is about the danger of a LIMITED set of stories, not about fiction being harmful.',
          },
        ],
        solution: '"The danger of a single story" is that when we hear only one narrative about a people, place or culture, we reduce that complex reality to a single, incomplete version. This creates stereotypes and prevents genuine understanding.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-21-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-ex-5',
        number: '21.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'The concept of "hybridity" is important in postcolonial literature. Explain in 60-80 words what hybridity means, using a real-world example to illustrate the concept.',
        hints: [
          'Hybridity means the mixing of cultures that results from colonialism',
          'Think about how languages, foods, music and traditions blend when cultures meet',
          'Hybridity can be both enriching (new art forms, mixed identities) and painful (loss of original culture, feeling "between" worlds)',
        ],
        solution: 'Hybridity refers to the blending of cultures that results from colonial contact. For example, Creole languages in the Caribbean combine European and African elements, and fusion cuisine in Britain (chicken tikka masala) reflects the mixing of British and South Asian cultures. In literature, hybridity appears when postcolonial writers blend English with local languages and narrative traditions, creating something new that belongs fully to neither tradition.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-21-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-ex-6',
        number: '21.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which of the following is an example of "othering" in colonial literature?',
        options: [
          {
            id: 'a',
            text: 'Describing indigenous people as primitive, childlike or savage while portraying Europeans as civilised and rational',
            isCorrect: true,
            feedback: 'Correct! "Othering" means defining a group as fundamentally different from and inferior to one\'s own. Colonial literature frequently portrayed colonised peoples as less civilised to justify European domination.',
          },
          {
            id: 'b',
            text: 'Writing a novel that includes characters from many different cultures as complex individuals',
            isCorrect: false,
            feedback: 'Incorrect. Portraying characters from different cultures as complex individuals is the opposite of othering. This is what postcolonial literature strives to do.',
          },
          {
            id: 'c',
            text: 'Translating a novel from English into another language',
            isCorrect: false,
            feedback: 'Incorrect. Translation is a neutral act that does not inherently involve othering. Othering is about portraying a group as inferior or fundamentally different.',
          },
          {
            id: 'd',
            text: 'Setting a story in a country the author has never visited',
            isCorrect: false,
            feedback: 'Incorrect. While writing about an unfamiliar place can lead to othering, simply setting a story elsewhere is not automatically othering. The key is how the people and culture are portrayed.',
          },
        ],
        solution: '"Othering" means portraying a group as fundamentally different and inferior. Colonial literature did this by describing colonised peoples as primitive while presenting Europeans as civilised — creating a hierarchy that justified colonial rule.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-21-summary',
      type: 'text',
      content: `## Summary — Indigenous and Postcolonial Literature

**Key concepts:**
- **Colonialism:** One country taking control of another and imposing its culture, language and systems
- **Postcolonialism:** The study of the cultural and literary effects of colonialism
- **The colonial gaze:** How colonisers viewed colonised peoples — often through stereotypes
- **Othering:** Defining a group as fundamentally different and inferior
- **Writing back:** Literature that challenges colonial narratives from the colonised perspective
- **Hybridity:** The mixing of cultures that results from colonialism
- **Language as power:** Postcolonial writers reshape English to reflect their own cultures

**Indigenous literary traditions:**
- Oral storytelling as sophisticated art form
- Deep connection between land and identity
- Community-focused rather than individual-focused narratives
- Circular rather than linear time
- Literature as an act of survival and resistance

**Representation:**
- Stories shape how we understand the world
- A "single story" creates dangerous stereotypes
- Diverse voices in literature are essential for a complete picture of humanity
- Always ask: Who wrote this? Whose perspective is centred? Whose story is missing?

**Key principle:** Reading literature from different cultures and perspectives is not a luxury — it is a necessity for understanding our complex, interconnected world.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-21-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-ex-7',
        number: '21.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Research one postcolonial or indigenous author from the list below (or choose your own). Write a short presentation (200-250 words in English) covering: their background, a key work, and how their writing connects to the postcolonial themes discussed in this chapter.',
        subTasks: [
          {
            label: 'a',
            task: 'Choose an author: Chinua Achebe (Nigeria), Chimamanda Ngozi Adichie (Nigeria), Witi Ihimaera (New Zealand/Maori), Sherman Alexie (USA/Native American), Jamaica Kincaid (Antigua), or another author you know.',
            solution: 'The student should provide basic biographical information and explain the author\'s cultural background and relationship to colonialism.',
          },
          {
            label: 'b',
            task: 'Describe one of their key works — what is it about, and what themes does it explore?',
            solution: 'The student should summarise the chosen work and connect it to themes such as identity, cultural conflict, colonialism, hybridity, resistance or reclaiming voice.',
          },
          {
            label: 'c',
            task: 'Explain how this author\'s work connects to at least two of the postcolonial concepts from this chapter (e.g., writing back, othering, hybridity, language as power, the danger of a single story).',
            solution: 'A strong answer demonstrates understanding of postcolonial concepts by applying them to a specific author and work. For example, Achebe\'s Things Fall Apart exemplifies "writing back" and challenges "othering" by presenting Igbo culture as complex and sophisticated.',
          },
        ],
        hints: [
          'Start with a reliable source like the British Council literature pages or the Poetry Foundation',
          'Focus on how the author\'s background shapes their writing',
          'Use the vocabulary from this chapter: "writing back," "othering," "hybridity," etc.',
        ],
        solution: 'A strong presentation demonstrates both research skills and the ability to apply postcolonial concepts to specific literary examples.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-21-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-21-ex-8',
        number: '21.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norway has its own indigenous population — the Sami people. Drawing on what you have learned about indigenous and postcolonial literature, write a reflective text (150-200 words in English) comparing the experiences of the Sami in Norway with the experiences of indigenous peoples in the English-speaking world.',
        subTasks: [
          {
            label: 'a',
            task: 'What parallels can you see between the treatment of Sami people in Norway and the treatment of indigenous peoples in countries like Australia, Canada or the USA?',
            solution: 'Parallels include forced assimilation (Norwegianisation policy / residential schools), suppression of language, loss of land rights, and the struggle for cultural recognition. The student should show awareness that Norway, like English-speaking colonial powers, has a colonial history with its indigenous population.',
          },
          {
            label: 'b',
            task: 'Why is it important for indigenous peoples to tell their own stories in literature, film and media? Use specific examples if you can.',
            solution: 'A strong answer connects to Adichie\'s "danger of a single story" and the concept of reclaiming voice. Indigenous storytelling preserves language and culture, challenges stereotypes, and ensures that history is told from more than one perspective.',
          },
        ],
        hints: [
          'Think about the Norwegianisation policy (fornorskningspolitikken) and its parallels to assimilation policies elsewhere',
          'Consider how the Sami language and culture have been suppressed and are now being revitalised',
          'This is a reflection — there are no wrong answers, but show thoughtful engagement',
        ],
        solution: 'A strong reflection draws genuine parallels between Norwegian and international indigenous experiences, demonstrating that postcolonial issues are not only "foreign" but relevant to Norway\'s own history.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Postcolonialism', definition: 'The study of the cultural, political and literary effects of colonialism, both during and after the colonial period.' },
    { term: 'Writing back', definition: 'Literature that responds to and challenges colonial narratives by telling stories from the perspective of colonised peoples.' },
    { term: 'Othering', definition: 'The process of defining a group of people as fundamentally different from and inferior to one\'s own group, often used to justify domination.' },
    { term: 'Hybridity', definition: 'The mixing of cultures resulting from colonialism, producing identities and art forms that blend indigenous and colonial elements.' },
    { term: 'The danger of a single story', definition: 'Chimamanda Ngozi Adichie\'s concept that hearing only one narrative about a people creates incomplete stereotypes and prevents genuine understanding.' },
  ],
};

// ============================================================================
// KAPITTEL 22: Young Adult Literature
// ============================================================================

export const CHAPTER_ENGELSK_10_22: TextbookChapter = {
  id: 'engelsk-10-22',
  courseId: 'engelsk-10',
  chapterNumber: '22',
  title: 'Young Adult Literature',
  description: 'Explore the world of young adult (YA) literature in English, examining how contemporary novels for teenagers address identity, mental health, social justice and coming of age with both literary sophistication and emotional honesty.',
  estimatedMinutes: 90,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'utforske og drøfte engelskspråklige tekster og reflektere over sammenhenger mellom tekst, kultur og samfunn',
    'bruke ulike strategier for å forstå og vurdere innholdet i tekster på engelsk',
    'skrive ulike typer tekster med struktur og sammenheng, tilpasset formål og mottaker',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-22-intro',
      type: 'text',
      content: `## Young Adult Literature

Young adult (YA) literature is fiction written for readers roughly between the ages of 12 and 18. Far from being "simple" or "just for kids," the best YA novels tackle serious themes — identity, mental health, racism, grief, love, injustice and the search for meaning — with honesty and literary craft.

YA literature has exploded in popularity and quality over the past two decades. Books like *The Hunger Games,* *The Hate U Give,* *The Fault in Our Stars* and *The Absolutely True Diary of a Part-Time Indian* have become cultural phenomena, read by teenagers and adults alike.

**What defines YA literature?**

- **Protagonist's age:** The main character is typically a teenager
- **Coming-of-age themes:** The story often centres on identity formation, first experiences and the transition from childhood to adulthood
- **Accessible voice:** The language is usually direct and emotionally honest, often using first-person narration
- **Serious content:** Despite being aimed at young readers, the best YA does not shy away from difficult subjects

**In this chapter you will learn to:**

1. Understand the key features and themes of YA literature
2. Analyse how YA novels address identity and belonging
3. Examine how contemporary YA tackles social issues
4. Compare YA literature with "classic" literature and discuss literary value
5. Write a thoughtful book review or recommendation`,
    },

    // ========== DEFINISJON 1: COMING OF AGE ==========
    {
      id: 'engelsk-10-22-def-1',
      type: 'definition',
      title: 'The Coming-of-Age Novel (Bildungsroman)',
      content: `A **coming-of-age novel** (also called a **Bildungsroman,** from the German for "education novel") is a story about a young person's growth from childhood or adolescence into maturity. It is the most important genre in YA literature.

**Key features of the Bildungsroman:**

**1. A young protagonist**
The main character is on the threshold of adulthood, facing decisions and experiences that will shape who they become.

**2. A journey (physical or psychological)**
The character leaves a familiar world — literally or figuratively — and enters unfamiliar territory. This journey forces growth.

**3. Conflict with society**
The protagonist often clashes with social norms, authority figures or peer pressure. They must decide whether to conform or assert their own identity.

**4. Loss of innocence**
A key moment where the character realises the world is more complex, unfair or painful than they previously understood.

**5. Identity formation**
The central question is: *Who am I?* The character experiments with different roles, relationships and beliefs before arriving at a deeper sense of self.

**6. An epiphany or turning point**
A moment of insight that marks the character's transition to a more mature understanding.

**Classic examples:**
- *The Catcher in the Rye* (J.D. Salinger) — Holden Caulfield struggles with the "phoniness" of the adult world
- *To Kill a Mockingbird* (Harper Lee) — Scout learns about racial injustice and moral courage
- *The Perks of Being a Wallflower* (Stephen Chbosky) — Charlie navigates trauma, friendship and belonging`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: 'engelsk-10-22-example-1',
      type: 'example',
      title: 'Example: Coming-of-age elements in The Hate U Give',
      problem: `Identify the coming-of-age elements in *The Hate U Give* by Angie Thomas (2017). The novel follows Starr Carter, a 16-year-old Black girl who witnesses the fatal police shooting of her unarmed childhood friend, Khalil. Starr lives between two worlds — her predominantly Black neighbourhood and her predominantly white private school.`,
      solution: `**Coming-of-age elements in *The Hate U Give*:**

**1. Young protagonist:** Starr is 16, at the crossroads between childhood and adulthood. The shooting forces her to grow up faster than she should have to.

**2. Journey:** Starr's journey is psychological — she moves from silence (keeping her head down, code-switching between school and home) to finding her voice (speaking out publicly about Khalil's death). This is a journey from powerlessness to agency.

**3. Conflict with society:** Starr faces multiple social conflicts:
- Racial injustice: the police and legal system fail to hold the officer accountable
- Peer pressure: her white school friends expect her to "not make it about race"
- Code-switching: she must navigate two different social codes, hiding parts of herself in each world

**4. Loss of innocence:** Witnessing Khalil's shooting shatters Starr's remaining childhood innocence. She sees firsthand that the systems meant to protect people can destroy them.

**5. Identity formation:** Starr's central struggle is reconciling her two identities — "Starr from Garden Heights" and "Starr from Williamson Prep." By the end, she stops hiding and becomes one unified person.

**6. Epiphany:** Starr's turning point comes when she decides to testify before the grand jury and later speaks at a protest. She realises that silence is complicity: "What's the point of having a voice if you're gonna be silent in those moments you shouldn't be?"

**Key insight:** The novel uses the coming-of-age structure to explore systemic racism. Starr's personal growth is inseparable from her political awakening.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-22-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-ex-1',
        number: '22.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is a Bildungsroman?',
        options: [
          {
            id: 'a',
            text: 'A coming-of-age novel that follows a young person\'s growth from adolescence toward maturity',
            isCorrect: true,
            feedback: 'Correct! A Bildungsroman (from German, meaning "education novel") traces a young protagonist\'s moral, psychological and social development as they transition into adulthood.',
          },
          {
            id: 'b',
            text: 'A novel written in German about education',
            isCorrect: false,
            feedback: 'Incorrect. While the term comes from German, a Bildungsroman can be written in any language. It refers to a specific type of story about growing up, not a German educational text.',
          },
          {
            id: 'c',
            text: 'A novel that takes place entirely inside a school',
            isCorrect: false,
            feedback: 'Incorrect. While some Bildungsromane include school settings, the genre is defined by the protagonist\'s personal growth, not by the physical setting.',
          },
          {
            id: 'd',
            text: 'A biography of a famous educator',
            isCorrect: false,
            feedback: 'Incorrect. A Bildungsroman is fiction about a fictional character\'s coming of age, not a biography.',
          },
        ],
        solution: 'A Bildungsroman is a coming-of-age novel that follows a young protagonist\'s journey from adolescence toward maturity, exploring themes of identity, loss of innocence and conflict with society.',
      },
    },

    // ========== DEFINISJON 2: CONTEMPORARY YA THEMES ==========
    {
      id: 'engelsk-10-22-def-2',
      type: 'definition',
      title: 'Contemporary Themes in YA Literature',
      content: `Modern YA literature addresses a wide range of themes that are relevant to today's teenagers. Here are some of the most prominent:

**1. Identity and belonging**
Who am I? Where do I fit? YA novels explore racial, cultural, gender and sexual identity.
- *The Absolutely True Diary of a Part-Time Indian* (Sherman Alexie) — a Native American boy caught between his reservation and a white school
- *Aristotle and Dante Discover the Secrets of the Universe* (Benjamin Alire Saenz) — two Mexican-American boys explore identity and first love

**2. Mental health**
YA literature has become increasingly open about depression, anxiety, trauma and grief.
- *It's Kind of a Funny Story* (Ned Vizzini) — a teenager checks himself into a psychiatric hospital
- *All the Bright Places* (Jennifer Niven) — two teenagers dealing with grief and mental illness

**3. Social justice and activism**
Novels that explore racism, inequality, immigration and the power of young people to create change.
- *The Hate U Give* (Angie Thomas) — police violence and racial injustice
- *The Poet X* (Elizabeth Acevedo) — a Dominican-American girl finds her voice through poetry

**4. Dystopia and power**
Dystopian YA uses imagined futures to comment on present-day issues.
- *The Hunger Games* (Suzanne Collins) — authoritarian control and resistance
- *The Giver* (Lois Lowry) — the cost of eliminating pain and choice from society

**5. Family and relationships**
The complexity of family bonds, first love, friendship and loss.
- *The Fault in Our Stars* (John Green) — love and mortality
- *Long Way Down* (Jason Reynolds) — cycles of violence and the weight of family loyalty`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: 'engelsk-10-22-example-2',
      type: 'example',
      title: 'Example: Analysing voice in YA literature',
      problem: `Read the following opening paragraph and analyse how the narrative voice establishes character and draws the reader in:

*"I was pretty sure my parents were going to kill me. Not literally. Or maybe literally. It was hard to tell with them sometimes. But I had just told them I wanted to transfer to Reardan — the rich white school in the farm town twenty-two miles away — and they were staring at me like I had just told them I wanted to fly to the moon."*

— Sherman Alexie, *The Absolutely True Diary of a Part-Time Indian*`,
      solution: `**Analysis of narrative voice:**

**First-person narrator:** Junior speaks directly to the reader in a conversational, confessional tone. This creates immediate intimacy — we feel like he is talking to us.

**Humour and self-awareness:**
- "Not literally. Or maybe literally." — The quick correction and re-correction shows Junior's sharp wit and his awareness that his situation is both absurd and serious.
- "staring at me like I had just told them I wanted to fly to the moon" — This simile is humorous but also reveals a painful truth: for a kid on the reservation, attending a white school feels as impossible as space travel.

**Establishing conflict in the first paragraph:**
- We immediately understand the central tension: Junior wants to leave his community for better opportunities, but this feels like a betrayal.
- "the rich white school" — four words that establish the economic and racial divide at the heart of the story.

**Accessible language:** The vocabulary is simple and direct, but the ideas are complex. This is a hallmark of excellent YA writing — it does not talk down to readers, but it does not hide behind difficult language either.

**Effect on the reader:** Within one paragraph, we know who Junior is (funny, smart, honest), what his conflict is (wanting to leave vs. belonging) and the world he inhabits (a Native American reservation with limited opportunities). The voice makes us want to keep reading.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-22-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-ex-2',
        number: '22.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Why is first-person narration so common in YA literature?',
        options: [
          {
            id: 'a',
            text: 'It creates intimacy and emotional immediacy, allowing readers to experience the protagonist\'s thoughts and feelings directly',
            isCorrect: true,
            feedback: 'Correct! First-person narration puts the reader inside the character\'s head, creating a strong emotional connection. For teenage readers navigating their own identity, this direct access to a peer\'s inner world is powerful.',
          },
          {
            id: 'b',
            text: 'It is the easiest type of narration to write',
            isCorrect: false,
            feedback: 'Incorrect. First-person narration is not necessarily easier — it requires maintaining a consistent and believable voice. It is chosen for its emotional effect, not its simplicity.',
          },
          {
            id: 'c',
            text: 'Publishers require YA novels to use first-person narration',
            isCorrect: false,
            feedback: 'Incorrect. There is no such requirement. Many excellent YA novels use third-person narration. First-person is popular because of its emotional immediacy, not because of rules.',
          },
          {
            id: 'd',
            text: 'Teenagers cannot understand third-person narration',
            isCorrect: false,
            feedback: 'Incorrect. Teenagers are fully capable of reading any narrative perspective. First-person is common in YA because it creates emotional closeness, not because readers cannot handle alternatives.',
          },
        ],
        solution: 'First-person narration is common in YA because it creates intimacy and emotional immediacy. Readers experience the story through the protagonist\'s eyes, thoughts and feelings, creating a powerful connection.',
      },
    },

    // ========== DEFINISJON 3: LITERARY VALUE ==========
    {
      id: 'engelsk-10-22-def-3',
      type: 'definition',
      title: 'Literary Value — Can YA Literature Be "Great" Literature?',
      content: `A common debate in literary studies is whether YA literature has the same literary value as "classic" or "literary" fiction. This question reveals important assumptions about what makes literature valuable.

**Arguments AGAINST YA as "serious" literature:**
- YA is written for a commercial market aimed at teenagers
- It tends to use simpler language and more accessible structures
- It often follows familiar genre conventions (romance, dystopia, mystery)
- Some critics see it as "entertainment" rather than "art"

**Arguments FOR YA as "serious" literature:**
- Great literature connects with readers emotionally and intellectually — YA does both
- Complexity of theme is not the same as complexity of language — a novel can explore profound ideas in accessible prose
- Many "classic" novels were originally popular fiction (Dickens wrote serialised stories; Shakespeare wrote for mass audiences)
- YA tackles issues that "adult" literary fiction often avoids: the raw experience of growing up, identity formation, first encounters with injustice
- Some YA novels demonstrate extraordinary literary craft: *The Book Thief* uses Death as a narrator; *Long Way Down* is a novel in verse; *The Poet X* blends poetry and prose

**A more useful question:**
Instead of asking "Is YA real literature?" we might ask: *Does this particular book use language in a way that rewards close reading? Does it reveal something true about human experience? Does it stay with the reader long after the last page?*

By these standards, the best YA literature absolutely qualifies as great literature.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: 'engelsk-10-22-example-3',
      type: 'example',
      title: 'Example: Close reading of a YA passage',
      problem: `Perform a close reading of this passage from *The Book Thief* by Markus Zusak. The narrator is Death.

*"I am haunted by humans.
...
I wanted to tell the book thief many things, about beauty and brutality. But what could I tell her about those things that she didn't already know? I wanted to explain that I am constantly overestimating and underestimating the human race — that rarely do I ever simply estimate it. I wanted to ask her how the same thing could be so ugly and so glorious, and its words and stories so damning and brilliant."*

What makes this passage literary — and why does it matter that it appears in a YA novel?`,
      solution: `**Close reading:**

**Narrative voice:** Death as narrator is an extraordinary choice. It gives the novel a perspective that is both intimate (Death witnesses every human life) and cosmic (Death sees patterns that no individual can). The opening line — "I am haunted by humans" — inverts the expected relationship: humans usually fear death, but here Death is haunted by us.

**Figurative language:**
- "overestimating and underestimating... rarely do I ever simply estimate" — this tricolon captures the paradox of human nature. We are both worse and better than anyone expects.
- "so ugly and so glorious" — an oxymoron that refuses to simplify. Humanity is not one thing; it is a contradiction.
- "damning and brilliant" — applied to "words and stories," this is a metafictional comment: literature itself contains both destruction and beauty.

**Thematic depth:** The passage explores nothing less than the nature of humanity — our capacity for both cruelty and compassion. This is a theme worthy of any "adult" literary novel.

**Why it matters that this is YA:**
This passage demonstrates that YA literature can achieve the same thematic and linguistic sophistication as any other category. The novel is set during the Holocaust and addresses genocide, poverty and the power of storytelling — all through prose that rewards close analysis. Dismissing it as "just YA" would mean missing genuinely great writing.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-22-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-ex-3',
        number: '22.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following best explains why some YA novels are considered to have genuine literary value?',
        options: [
          {
            id: 'a',
            text: 'They use language with craft, explore complex themes about human experience, and reward close reading — just like the best "adult" literature',
            isCorrect: true,
            feedback: 'Correct! Literary value comes from how a text uses language, develops themes and connects with readers — not from the age of its intended audience. The best YA meets these criteria.',
          },
          {
            id: 'b',
            text: 'They are very popular and sell millions of copies',
            isCorrect: false,
            feedback: 'Incorrect. Popularity does not automatically equal literary value (though many great books are popular). Literary value is about craft, depth and insight, not sales figures.',
          },
          {
            id: 'c',
            text: 'They are always taught in universities',
            isCorrect: false,
            feedback: 'Incorrect. While some YA novels are studied at university level, being taught in academia is not the definition of literary value. Many excellent books are never part of a curriculum.',
          },
          {
            id: 'd',
            text: 'They use very long and complicated sentences',
            isCorrect: false,
            feedback: 'Incorrect. Complex sentences are not a requirement for literary value. Some of the most powerful writing uses simple, direct language — including much YA literature.',
          },
        ],
        solution: 'The best YA literature has genuine literary value because it uses language with craft, explores complex themes and reveals truths about human experience. Literary quality is about depth and skill, not the age of the reader.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-22-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-ex-4',
        number: '22.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Think of a YA novel or film you know well. Identify which coming-of-age elements (Bildungsroman features) it contains. Write 80-120 words in English.',
        subTasks: [
          {
            label: 'a',
            task: 'Name the book or film and briefly describe the protagonist.',
            solution: 'The student should identify a specific YA work and describe the main character, including their age, situation and central conflict.',
          },
          {
            label: 'b',
            task: 'Identify at least three Bildungsroman elements from the list: young protagonist, journey, conflict with society, loss of innocence, identity formation, epiphany. Explain how each appears in the story.',
            solution: 'A strong answer names three or more coming-of-age elements with specific evidence from the story. For example: "In The Maze Runner, Thomas is a young protagonist who goes on a physical and psychological journey. He experiences loss of innocence when he discovers the truth about WICKED. His identity forms as he goes from confused newcomer to group leader."',
          },
        ],
        hints: [
          'Films count too — The Hunger Games, The Maze Runner, To All the Boys I\'ve Loved Before, etc.',
          'Remember: a "journey" can be psychological (inner growth), not just physical (travelling somewhere)',
        ],
        solution: 'A successful response demonstrates understanding of the Bildungsroman genre by applying its key features to a specific YA text with concrete examples.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-22-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-ex-5',
        number: '22.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Write a book review (150-200 words in English) of a YA novel you have read. Your review should include a brief summary (without spoilers), an analysis of the book\'s strengths and weaknesses, and a recommendation.',
        hints: [
          'Start with a hook — an interesting statement about the book or its themes',
          'Keep the summary brief (2-3 sentences) and avoid revealing the ending',
          'Analyse: What makes the book good (or not)? Consider voice, characters, themes and language',
          'End with a clear recommendation: Who should read this, and why?',
        ],
        solution: 'A strong book review balances summary with analysis, avoids spoilers, uses specific examples to support opinions, and gives a clear recommendation. The tone should be engaging and personal while showing literary awareness.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-22-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-ex-6',
        number: '22.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'A YA novel follows a 15-year-old protagonist who initially avoids speaking up about injustice at school. After a pivotal event, she finds the courage to organise a student protest. By the end, she has a stronger sense of who she is and what she stands for. Which Bildungsroman element is MOST central to her development?',
        options: [
          {
            id: 'a',
            text: 'Identity formation — the protagonist develops a stronger sense of who she is through her choices and actions',
            isCorrect: true,
            feedback: 'Correct! The protagonist\'s journey from silence to action is fundamentally about discovering and asserting her identity. She learns who she is by choosing to act on her values.',
          },
          {
            id: 'b',
            text: 'Physical journey — the protagonist travels to a new place',
            isCorrect: false,
            feedback: 'Incorrect. The protagonist\'s journey is psychological (from silence to voice), not physical. She does not need to travel geographically to grow.',
          },
          {
            id: 'c',
            text: 'Romantic love — the protagonist falls in love',
            isCorrect: false,
            feedback: 'Incorrect. Nothing in the description mentions romance. The central development is about identity and courage, not love.',
          },
          {
            id: 'd',
            text: 'Academic achievement — the protagonist succeeds in school',
            isCorrect: false,
            feedback: 'Incorrect. The story is about speaking up against injustice, not about academic performance. Identity formation through moral courage is the key element.',
          },
        ],
        solution: 'Identity formation. The protagonist discovers who she is by choosing to act on her values. Moving from silence to protest is a journey of self-discovery — the defining element of the Bildungsroman.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'engelsk-10-22-summary',
      type: 'text',
      content: `## Summary — Young Adult Literature

**The Bildungsroman (coming-of-age novel):**
- Young protagonist on the threshold of adulthood
- A journey (physical or psychological) that forces growth
- Conflict with society, authority or social norms
- Loss of innocence — discovering the world's complexity
- Identity formation — answering "Who am I?"
- Epiphany or turning point — a moment of mature understanding

**Contemporary YA themes:**
- Identity and belonging (racial, cultural, gender, sexual)
- Mental health (depression, anxiety, trauma, grief)
- Social justice and activism (racism, inequality, police violence)
- Dystopia and power (authoritarian control, resistance)
- Family and relationships (love, loss, loyalty)

**Narrative voice in YA:**
- First-person narration is common because it creates intimacy and emotional immediacy
- YA voices are typically direct, honest and conversational
- Accessible language does not mean simple ideas

**Literary value:**
- The best YA literature uses language with craft and explores complex themes
- Literary quality is about depth and skill, not the age of the target audience
- Many "classics" were once popular fiction too

**Key principle:** YA literature deserves the same close reading attention as any other form of literature. The best way to judge a book is not by its category label but by the quality of its language, characters, themes and the truths it reveals about being human.`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'engelsk-10-22-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-ex-7',
        number: '22.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Choose a YA novel and a "classic" novel that share a similar theme. Compare how each treats the theme. Write 250-350 words in English.',
        subTasks: [
          {
            label: 'a',
            task: 'Identify the shared theme and explain how each novel approaches it. Some suggestions: The Hunger Games and Lord of the Flies (survival and human nature), The Hate U Give and To Kill a Mockingbird (racial injustice), The Giver and Brave New World (control and freedom).',
            solution: 'The student should identify a specific theme shared by both novels and analyse how each approaches it differently — for example, through different narrative perspectives, settings, character types or conclusions.',
          },
          {
            label: 'b',
            task: 'Discuss whether the YA novel is less "literary" than the classic. Support your argument with specific evidence from both texts.',
            solution: 'A strong answer avoids simply saying "both are good" and instead examines specific aspects of literary craft — language, structure, characterisation, thematic complexity — in both novels. The best answers may argue that the YA novel does some things better and the classic does others better.',
          },
          {
            label: 'c',
            task: 'Which novel do you think communicates the theme more effectively for a modern teenage reader? Explain why.',
            solution: 'The student should consider audience, relevance, accessibility and emotional impact. A thoughtful answer might acknowledge that the "classic" may have greater historical significance while the YA novel may feel more immediately relevant.',
          },
        ],
        hints: [
          'Don\'t just compare plots — compare how each author uses literary techniques to develop the theme',
          'Consider the historical context of each novel and how it affects the treatment of the theme',
          'Be open-minded: the YA novel may be more complex than you expect, and the classic may be more accessible than its reputation suggests',
        ],
        solution: 'A thoughtful comparative analysis treats both texts with equal respect, uses specific textual evidence, and reaches a nuanced conclusion about literary value and audience.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'engelsk-10-22-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-22-ex-8',
        number: '22.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Write the opening page (200-250 words) of a YA novel. Your opening should establish a first-person narrator, hint at a central conflict and create a voice that makes the reader want to continue.',
        subTasks: [
          {
            label: 'a',
            task: 'Write the opening. Remember: the first paragraph must hook the reader. Establish who your character is, what world they live in, and what problem or tension drives the story.',
            solution: 'A successful opening creates a distinctive voice, establishes character and situation quickly, and includes a hook that raises questions the reader wants answered. The language should be natural and the narrator should feel like a real teenager.',
          },
          {
            label: 'b',
            task: 'Write a brief commentary (60-80 words) explaining your creative choices: What techniques from this chapter did you use? How did you create voice, hint at conflict, and establish character?',
            solution: 'The commentary should demonstrate awareness of YA conventions: first-person narration for intimacy, a distinct voice, an immediate hook, hints at a coming-of-age conflict, and accessible but crafted language.',
          },
        ],
        hints: [
          'Start with a line that grabs attention — a surprising statement, a question, or an unusual image',
          'Give your narrator a distinctive voice — how they speak reveals who they are',
          'Hint at the conflict without explaining everything — leave the reader curious',
          'Read the opening aloud to check whether it sounds like a real person talking',
        ],
        solution: 'Creative writing that demonstrates understanding of YA conventions: a strong first-person voice, an immediate hook, hints at a central conflict, and accessible language with depth.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Bildungsroman', definition: 'A coming-of-age novel that follows a young protagonist\'s growth from adolescence toward maturity through experiences of conflict, loss and self-discovery.' },
    { term: 'Coming of age', definition: 'The transition from childhood to adulthood, typically involving loss of innocence, identity formation and confrontation with the complexities of the world.' },
    { term: 'First-person narration', definition: 'A narrative perspective where the story is told by a character using "I," creating intimacy and emotional immediacy.' },
    { term: 'Loss of innocence', definition: 'A key moment in a coming-of-age story where the protagonist realises the world is more complex, unfair or painful than they previously understood.' },
    { term: 'Literary value', definition: 'The quality of a literary work judged by its use of language, thematic depth, characterisation and ability to reveal truths about human experience.' },
  ],
};

// ============================================================================
// EKSPORT: Samlet array for del 6
// ============================================================================

export const ENGELSK_10_DEL6_CHAPTERS = [
  CHAPTER_ENGELSK_10_17,
  CHAPTER_ENGELSK_10_18,
  CHAPTER_ENGELSK_10_19,
  CHAPTER_ENGELSK_10_20,
  CHAPTER_ENGELSK_10_21,
  CHAPTER_ENGELSK_10_22,
];
