/**
 * Tekstbok innhold for Engelsk 10. klasse - Del 9 (Kapittel 35-40)
 *
 * Følger LK20 læreplan for engelsk ungdomstrinn.
 * Tema: Media, Language Variation, and Literary Craft.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 35: Film and Visual Media
// ============================================================================

export const CHAPTER_ENGELSK_10_35: TextbookChapter = {
  id: 'engelsk-10-35',
  courseId: 'engelsk-10',
  chapterNumber: '35',
  title: 'Film and Visual Media',
  description: 'Explore the language of film and visual storytelling. Learn to analyse camera angles, editing, sound design, and mise-en-scène as elements that create meaning in multimodal texts.',
  estimatedMinutes: 85,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'analysere sammensatte tekster og vurdere samspillet mellom ulike uttrykksformer',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-35-intro',
      type: 'text',
      content: `## Film and Visual Media

When you watch a film, you are reading a text — just not one made of words alone. Every shot, every camera movement, every piece of music, and every silence is a deliberate choice made by the filmmaker to create meaning. Just as an author uses metaphors, sentence structure, and word choice to shape a written text, a director uses **visual and auditory tools** to tell a story and convey ideas.

**Why study film language?**

In today's world, you encounter visual media constantly: films, TV series, documentaries, advertisements, social media videos, and news broadcasts. Being able to **analyse** how these texts work — rather than just passively consuming them — is a critical literacy skill. It helps you:

- Understand how images and sounds **manipulate emotions**
- Recognise **bias and perspective** in visual media
- Appreciate the **artistry** behind filmmaking
- Write more insightful **film reviews and analyses** for your English exams

In this chapter, you will learn the core vocabulary of film analysis: shot types, camera angles, editing techniques, sound design, and mise-en-scène. By the end, you will be able to watch any scene and explain *how* it creates the effects you feel.`,
    },

    // ========== DEFINISJON: SHOT TYPES ==========
    {
      id: 'engelsk-10-35-def-1',
      type: 'definition',
      title: 'Shot Types — The Building Blocks of Film',
      content: `A **shot** is a single, uninterrupted piece of film from one camera position. The **type of shot** determines how much of the scene (and of a character) the audience can see, which directly affects the emotional impact.

**Establishing shot (extreme long shot)**
Shows the entire location from a distance. Used to set the scene and give the audience a sense of place.
- *Example:* A sweeping aerial view of New York City at the start of a film.

**Long shot (full shot)**
Shows a character's full body within the environment. Emphasises the relationship between the character and their surroundings.
- *Example:* A soldier standing alone in a vast, empty desert.

**Medium shot**
Shows a character from roughly the waist up. The most common shot in dialogue scenes; it balances the character and the setting.
- *Example:* Two friends talking at a café table.

**Close-up**
Shows just the face (or a specific object). Used to reveal **emotion, reaction, and detail**.
- *Example:* A character's eyes widening in fear.

**Extreme close-up**
Shows a single detail — an eye, a hand, a ticking clock. Creates **intensity and focus**.
- *Example:* A bead of sweat rolling down a character's forehead.

**Over-the-shoulder shot**
The camera looks over one character's shoulder at another. Used in conversations to show **perspective and connection** between characters.`,
    },

    // ========== DEFINISJON: CAMERA ANGLES ==========
    {
      id: 'engelsk-10-35-def-2',
      type: 'definition',
      title: 'Camera Angles and Their Meaning',
      content: `The **angle** at which the camera is positioned relative to the subject creates powerful psychological effects on the viewer.

**Eye-level angle**
The camera is at the character's eye height. This is the most neutral angle — it presents the character as an **equal** to the viewer and creates a sense of normality.

**Low angle (looking up at the subject)**
Makes the character appear **powerful, dominant, or threatening**. The viewer literally looks up at them.
- *Example:* A low-angle shot of a villain towering over the hero.

**High angle (looking down at the subject)**
Makes the character appear **small, vulnerable, or powerless**. The viewer looks down on them.
- *Example:* A high-angle shot of a child lost in a crowd.

**Dutch angle (tilted camera)**
The camera is tilted to one side, creating a diagonal horizon line. This suggests **unease, disorientation, or instability**.
- *Example:* Used frequently in horror films to make the audience feel that something is "off."

**Bird's-eye view**
The camera looks straight down from above. Makes characters look like **tiny figures**, emphasising their insignificance against a larger landscape or situation.

**Point-of-view shot (POV)**
The camera shows exactly what a character sees. Puts the viewer **inside the character's perspective**, creating empathy or suspense.`,
    },

    // ========== DEFINISJON: MISE-EN-SCÈNE ==========
    {
      id: 'engelsk-10-35-def-3',
      type: 'definition',
      title: 'Mise-en-Scène — Everything in the Frame',
      content: `**Mise-en-scène** (pronounced "meez-on-sen") is a French term meaning "placing on stage." In film analysis, it refers to **everything that appears within the frame** — everything the audience can see on screen.

The five key elements of mise-en-scène:

**1. Setting and location**
Where does the scene take place? A dark alleyway creates a different mood from a sunlit meadow. Sets can be realistic, stylised, or symbolic.

**2. Lighting**
How is the scene lit? **High-key lighting** (bright, even) creates an open, cheerful mood. **Low-key lighting** (dark, with strong shadows) creates mystery, danger, or drama. **Backlighting** can create silhouettes.

**3. Costume and makeup**
What characters wear and how they look tells us about their personality, social status, era, and emotional state. A character changing from dark to bright clothing can signal an inner transformation.

**4. Actors' positioning and movement (blocking)**
Where are characters placed in the frame? A character standing alone at the edge of the frame may appear isolated. Two characters placed far apart may seem emotionally distant.

**5. Props and set design**
Objects within the scene can carry symbolic meaning. A wilting flower, a broken mirror, or an empty chair can all communicate ideas without a single word of dialogue.`,
    },

    // ========== EKSEMPEL: ANALYSING A FILM SCENE ==========
    {
      id: 'engelsk-10-35-example-1',
      type: 'example',
      title: 'Example: Analysing a Film Scene',
      problem: `Imagine a scene where a teenage girl sits alone in a school cafeteria. The camera is positioned at a high angle. The lighting is cold and blue-toned. Other students walk past in the blurred background, but none stop. The girl looks down at her tray. A close-up shows her hands gripping the edge of the tray tightly. There is no dialogue — only the muffled sound of distant laughter.

Analyse this scene using film language.`,
      solution: `**Shot types and angles:**
The **high-angle shot** makes the girl appear small and powerless — the audience looks down on her, which reinforces her vulnerability. The **close-up** of her hands gripping the tray reveals her inner tension and anxiety without any dialogue. The **shallow focus** (blurred background) isolates her visually from the other students.

**Mise-en-scène:**
The **cold, blue-toned lighting** creates a mood of loneliness and sadness. The **empty seats** around her function as a visual symbol of her social isolation. Her **body language** — looking down, gripping the tray — tells us she is trying to hold herself together.

**Sound design:**
The absence of dialogue is powerful. The **muffled laughter** in the background creates a contrast — others are enjoying themselves while she is excluded. This non-diegetic sound choice emphasises her feeling of being on the outside.

**Overall effect:**
Through the combination of a high angle, cold lighting, close-ups, and sound design, the director creates a scene that communicates **loneliness and social exclusion** without a single word. The viewer feels empathy for the character because the visual language puts us in a position of witnessing her silent pain.`,
    },

    // ========== EKSEMPEL: EDITING AND MONTAGE ==========
    {
      id: 'engelsk-10-35-example-2',
      type: 'example',
      title: 'Example: How Editing Creates Meaning',
      problem: `What is the difference between a "cut" and a "montage," and how does the pace of editing affect the viewer's experience?`,
      solution: `**The cut** is the most basic editing technique — one shot ends and another begins. The way shots are arranged in sequence creates meaning:

- **Shot/reverse shot:** Alternating between two characters during a conversation. Creates the feeling of being present in the dialogue.
- **Match cut:** Cutting from one image to a visually similar image in a different context (e.g., cutting from a spinning basketball to the spinning Earth). Creates a symbolic connection.
- **Jump cut:** An abrupt cut within the same scene that skips time. Creates a feeling of restlessness or disorientation.
- **Cross-cutting (parallel editing):** Alternating between two scenes happening at the same time in different locations. Builds suspense by implying the events are connected.

**Montage** is a sequence of short shots edited together to compress time or show a process. A classic example is the "training montage" in sports films, where weeks of practice are shown in 60 seconds.

**Pace of editing:**
- **Fast editing** (short shots, rapid cuts) creates tension, excitement, or chaos. Common in action scenes.
- **Slow editing** (long takes, few cuts) creates calm, contemplation, or unease. Common in art-house cinema and horror.

The rhythm of editing is like the rhythm of music — it controls the emotional pulse of the film.`,
    },

    // ========== EKSEMPEL: SOUND DESIGN ==========
    {
      id: 'engelsk-10-35-example-3',
      type: 'example',
      title: 'Example: Sound Design in Film',
      problem: `Explain the difference between diegetic and non-diegetic sound, and give examples of how each is used to create meaning.`,
      solution: `**Diegetic sound** is sound that exists within the world of the film — sounds that the characters can hear.
- Dialogue between characters
- Footsteps, traffic, birdsong
- A radio playing in the background
- A character's phone ringing

**Non-diegetic sound** is sound added for the audience only — the characters cannot hear it.
- The film's musical score (background music)
- A narrator's voice-over
- Sound effects added for dramatic emphasis

**How sound creates meaning:**

*Example 1:* In a horror film, the sudden removal of all diegetic sound (complete silence) just before a jump scare makes the audience hyperaware and anxious. The silence itself becomes threatening.

*Example 2:* In a war film, the shift from loud, chaotic battle sounds (diegetic) to a quiet, melancholic piano piece (non-diegetic) can signal a character's psychological detachment from the violence — showing us their inner experience rather than the external reality.

*Example 3:* In a romantic scene, soft non-diegetic music can tell the audience that a character is falling in love, even if the dialogue is about something completely mundane.

Sound design is often called the "invisible art" because audiences rarely notice it consciously — yet it shapes their emotional experience profoundly.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-35-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-ex-1',
        number: '35.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which shot type is best suited for revealing a character\'s emotions through their facial expression?',
        options: [
          {
            id: 'a',
            text: 'Establishing shot',
            isCorrect: false,
            feedback: 'Incorrect. An establishing shot shows a wide view of the location and is too far away to reveal facial expressions.',
          },
          {
            id: 'b',
            text: 'Close-up',
            isCorrect: true,
            feedback: 'Correct! A close-up shows just the face and is the ideal shot for revealing emotion, reaction, and subtle details of expression.',
          },
          {
            id: 'c',
            text: 'Long shot',
            isCorrect: false,
            feedback: 'Incorrect. A long shot shows the full body and surroundings — facial details would be too small to read.',
          },
          {
            id: 'd',
            text: 'Bird\'s-eye view',
            isCorrect: false,
            feedback: 'Incorrect. A bird\'s-eye view looks straight down from above and would not show the face at all.',
          },
        ],
        solution: 'A close-up is the shot type that best reveals emotions because it fills the frame with the character\'s face, allowing the audience to see every subtle expression.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-35-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-ex-2',
        number: '35.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What effect does a low-angle shot typically create?',
        options: [
          {
            id: 'a',
            text: 'It makes the character look small and vulnerable',
            isCorrect: false,
            feedback: 'Incorrect. That describes a high-angle shot, where the camera looks down on the character.',
          },
          {
            id: 'b',
            text: 'It creates a neutral, everyday feeling',
            isCorrect: false,
            feedback: 'Incorrect. A neutral feeling is created by an eye-level angle, which is the most common and least dramatic.',
          },
          {
            id: 'c',
            text: 'It makes the character appear powerful, dominant, or threatening',
            isCorrect: true,
            feedback: 'Correct! When the camera looks up at a character, it gives them visual authority and makes them appear larger than life.',
          },
          {
            id: 'd',
            text: 'It shows the audience exactly what the character is seeing',
            isCorrect: false,
            feedback: 'Incorrect. That describes a point-of-view (POV) shot, which shows the scene from the character\'s perspective.',
          },
        ],
        solution: 'A low-angle shot positions the camera below the subject, looking upward. This makes the character appear powerful, dominant, or imposing because the viewer literally has to look up at them.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-35-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-ex-3',
        number: '35.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is "diegetic sound" in a film?',
        options: [
          {
            id: 'a',
            text: 'Background music added by the film\'s composer',
            isCorrect: false,
            feedback: 'Incorrect. Background music (the score) is non-diegetic — it is added for the audience and the characters cannot hear it.',
          },
          {
            id: 'b',
            text: 'Sound that exists within the world of the film and that characters can hear',
            isCorrect: true,
            feedback: 'Correct! Diegetic sound includes dialogue, footsteps, traffic, a radio playing in the room — any sound that originates within the film\'s story world.',
          },
          {
            id: 'c',
            text: 'A narrator\'s voice explaining the story',
            isCorrect: false,
            feedback: 'Incorrect. A voice-over narration is typically non-diegetic — it is heard only by the audience, not by the characters.',
          },
          {
            id: 'd',
            text: 'Sound effects added in post-production to make scenes more dramatic',
            isCorrect: false,
            feedback: 'Incorrect. While diegetic sounds may be enhanced in post-production, the term refers to sound that exists within the story world, not effects added purely for drama.',
          },
        ],
        solution: 'Diegetic sound is any sound that originates within the world of the film — sounds that the characters themselves can hear, such as dialogue, footsteps, or music from a radio in the scene.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-35-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-ex-4',
        number: '35.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A director films a scene using a Dutch angle (tilted camera). What is the most likely intended effect on the audience?',
        options: [
          {
            id: 'a',
            text: 'To create a feeling of unease, disorientation, or instability',
            isCorrect: true,
            feedback: 'Correct! The Dutch angle deliberately breaks the horizontal line, making the world look "off-balance." This creates a psychological feeling of unease or that something is wrong.',
          },
          {
            id: 'b',
            text: 'To show the scene from a character\'s point of view',
            isCorrect: false,
            feedback: 'Incorrect. A point-of-view shot shows what a character sees. A Dutch angle is a stylistic choice about how the camera is tilted, not whose perspective we are seeing.',
          },
          {
            id: 'c',
            text: 'To make the scene look more realistic and natural',
            isCorrect: false,
            feedback: 'Incorrect. The Dutch angle is deliberately unnatural — it tilts the horizon, which is the opposite of realism.',
          },
          {
            id: 'd',
            text: 'To compress time and show events passing quickly',
            isCorrect: false,
            feedback: 'Incorrect. Compressing time is done through editing techniques like montage, not through camera angles.',
          },
        ],
        solution: 'The Dutch angle tilts the camera so the horizon is diagonal. This creates a feeling of unease, instability, or psychological disturbance. It is commonly used in horror, thriller, and psychological drama.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-35-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-ex-5',
        number: '35.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following is NOT one of the five key elements of mise-en-scène?',
        options: [
          {
            id: 'a',
            text: 'Lighting',
            isCorrect: false,
            feedback: 'Incorrect. Lighting is a core element of mise-en-scène — it shapes mood, atmosphere, and focus within the frame.',
          },
          {
            id: 'b',
            text: 'Editing pace',
            isCorrect: true,
            feedback: 'Correct! Editing (how shots are arranged in sequence) is a separate category of film language. Mise-en-scène refers only to what appears within a single frame: setting, lighting, costume, blocking, and props.',
          },
          {
            id: 'c',
            text: 'Costume and makeup',
            isCorrect: false,
            feedback: 'Incorrect. Costume and makeup are key elements of mise-en-scène — they communicate character, era, and social context.',
          },
          {
            id: 'd',
            text: 'Props and set design',
            isCorrect: false,
            feedback: 'Incorrect. Props and set design are part of mise-en-scène — objects within the frame can carry symbolic meaning.',
          },
        ],
        solution: 'Mise-en-scène includes setting, lighting, costume/makeup, blocking (actor positioning), and props/set design. Editing is a separate element of film language that deals with how shots are sequenced, not what appears within a single frame.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-35-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-ex-6',
        number: '35.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'In a scene, the editing rapidly alternates between a hero running toward a building and a bomb timer counting down inside. What editing technique is being used and what is its purpose?',
        options: [
          {
            id: 'a',
            text: 'Montage — to compress a long period of time into a short sequence',
            isCorrect: false,
            feedback: 'Incorrect. A montage compresses time (e.g., a training sequence). This scene is happening in real time across two locations.',
          },
          {
            id: 'b',
            text: 'Jump cuts — to create a feeling of disorientation',
            isCorrect: false,
            feedback: 'Incorrect. Jump cuts are abrupt cuts within the same scene. This alternates between two different locations.',
          },
          {
            id: 'c',
            text: 'Cross-cutting (parallel editing) — to build suspense by showing simultaneous events',
            isCorrect: true,
            feedback: 'Correct! Cross-cutting alternates between two scenes happening at the same time in different locations. By showing both the hero and the ticking bomb, the editor creates suspense — will the hero arrive in time?',
          },
          {
            id: 'd',
            text: 'Match cut — to create a visual connection between two similar images',
            isCorrect: false,
            feedback: 'Incorrect. A match cut connects two visually similar images (e.g., a ball spinning to a planet spinning). Cross-cutting connects two simultaneous events.',
          },
        ],
        solution: 'This is cross-cutting (parallel editing) — alternating between two scenes occurring at the same time. It builds suspense by showing both the approaching hero and the ticking bomb, making the audience wonder which will "win."',
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-35-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-ex-7',
        number: '35.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'A film uses low-key lighting with deep shadows, a confined indoor setting, and positions the main character alone at the far edge of the frame with empty space dominating the rest. Which interpretation best accounts for ALL of these visual choices?',
        options: [
          {
            id: 'a',
            text: 'The character is confident and in control of the situation',
            isCorrect: false,
            feedback: 'Incorrect. Low-key lighting with shadows and a character pushed to the edge of the frame with vast empty space both suggest vulnerability or insignificance, not confidence.',
          },
          {
            id: 'b',
            text: 'The director is establishing a new, unfamiliar location',
            isCorrect: false,
            feedback: 'Incorrect. While establishing shots introduce locations, the specific combination of low-key lighting, confined space, and the character\'s marginal position in the frame all point to emotional content, not simple location-setting.',
          },
          {
            id: 'c',
            text: 'The visual choices work together to convey the character\'s isolation, psychological pressure, and feeling of being overwhelmed',
            isCorrect: true,
            feedback: 'Correct! The low-key lighting creates an oppressive mood, the confined setting suggests entrapment, and placing the character at the frame\'s edge with dominating empty space visually represents how small and alone they feel. These elements combine to communicate inner psychological states.',
          },
          {
            id: 'd',
            text: 'The scene is meant to be humorous, using visual exaggeration for comedic effect',
            isCorrect: false,
            feedback: 'Incorrect. Low-key lighting and isolating framing are almost never used for comedy. These are hallmarks of drama, thriller, or psychological genres.',
          },
        ],
        solution: 'When multiple visual elements — lighting, framing, setting, and character positioning — all point in the same direction, they reinforce each other. Here, every choice communicates isolation and psychological weight. In film analysis, you should always look for how elements work *together* to create a unified meaning.',
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-35-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-ex-8',
        number: '35.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'A documentary about climate change uses the following sequence: (1) a beautiful establishing shot of a glacier with bright, warm lighting and soaring orchestral music; (2) a time-lapse showing the glacier shrinking over decades; (3) a final shot of barren rock where the glacier once stood, with complete silence. Analyse the filmmaker\'s persuasive strategy.',
        options: [
          {
            id: 'a',
            text: 'The filmmaker uses contrast between beauty and loss, combined with the shift from music to silence, to create an emotional argument about climate change that is more powerful than statistics alone',
            isCorrect: true,
            feedback: 'Correct! This is a sophisticated persuasive strategy: the beauty establishes what we value, the time-lapse shows its destruction, and the silence at the end forces the audience to sit with the loss. The emotional arc (wonder → shock → grief) is a deliberate rhetorical choice.',
          },
          {
            id: 'b',
            text: 'The filmmaker is simply documenting factual changes to the glacier in chronological order',
            isCorrect: false,
            feedback: 'Incorrect. The use of warm lighting, orchestral music, and deliberate silence are not neutral — they are artistic choices designed to create an emotional response. A purely factual approach would not use these techniques.',
          },
          {
            id: 'c',
            text: 'The sequence is primarily designed to show the beauty of nature rather than make an argument about climate change',
            isCorrect: false,
            feedback: 'Incorrect. While the opening shot celebrates natural beauty, the full sequence — from beauty to destruction to silence — clearly constructs an argument about loss. The beauty makes the destruction more painful.',
          },
          {
            id: 'd',
            text: 'The silence at the end is an editing error that should have included narration explaining the glacier\'s retreat',
            isCorrect: false,
            feedback: 'Incorrect. In professional filmmaking, silence is always a deliberate choice. Here, the absence of sound forces the viewer to process the visual loss without the comfort of narration or music, making the emotional impact more raw.',
          },
        ],
        solution: 'The filmmaker constructs an emotional argument through visual rhetoric: beauty and music establish value; time-lapse shows destruction; silence forces reflection. This sequence demonstrates how documentaries can be persuasive through aesthetic choices, not just factual information. When analysing visual media, always consider how technical choices serve a larger argumentative or emotional purpose.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 36: World Englishes
// ============================================================================

export const CHAPTER_ENGELSK_10_36: TextbookChapter = {
  id: 'engelsk-10-36',
  courseId: 'engelsk-10',
  chapterNumber: '36',
  title: 'World Englishes',
  description: 'Discover how English has become a global language with many varieties. Learn about Kachru\'s Three Circles model, explore Indian English, Nigerian English, Singlish, and more, and understand the role of code-switching in multilingual societies.',
  estimatedMinutes: 80,
  competenceGoals: [
    'utforske og beskrive levemåter, samfunnsforhold og verdier i ulike engelskspråklige land',
    'kommunisere på tvers av kulturer med forståelse for kulturelle forskjeller',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-36-intro',
      type: 'text',
      content: `## World Englishes

There is no single "correct" English. Today, English is spoken by approximately **1.5 billion people** worldwide, but only about 400 million of them are native speakers. The vast majority of English speakers use it as a second or additional language, and they have developed their own **varieties** — each with its own grammar, vocabulary, pronunciation, and cultural identity.

These varieties are not "broken English" or "mistakes." They are **legitimate, rule-governed language systems** that reflect the histories, cultures, and identities of the communities that use them. Indian English, Nigerian English, Singaporean English, Jamaican English, and South African English are just a few of the many World Englishes that exist today.

**Why does this matter?**

- Understanding World Englishes helps you communicate more effectively with people from **diverse backgrounds**
- It challenges the idea that British or American English is the "correct" standard
- It shows how **language, culture, and history** are deeply connected
- It prepares you for a globalised world where you will encounter many Englishes

In this chapter, you will explore the concept of World Englishes, learn about Kachru's influential model, examine specific varieties, and think critically about language, power, and identity.`,
    },

    // ========== DEFINISJON: KACHRU'S THREE CIRCLES ==========
    {
      id: 'engelsk-10-36-def-1',
      type: 'definition',
      title: 'Kachru\'s Three Circles of English',
      content: `In 1985, the Indian linguist **Braj Kachru** proposed a model for understanding the global spread of English. He divided English-speaking countries into three concentric circles:

**The Inner Circle**
Countries where English is the **primary native language**: the UK, the USA, Canada, Australia, New Zealand, and Ireland.
- English is the dominant language of government, education, and daily life.
- These countries have traditionally been seen as the "norm-providing" centres of English.

**The Outer Circle**
Countries where English is an **official or important second language** due to colonial history: India, Nigeria, Singapore, the Philippines, Kenya, South Africa, Malaysia, and many others.
- English is used in government, law, education, and media alongside local languages.
- These countries have developed their own **nativised varieties** of English with distinct features.
- They are "norm-developing" — creating their own standards.

**The Expanding Circle**
Countries where English is learned as a **foreign language** and has no official status: Norway, China, Brazil, Japan, Russia, Germany, and most of the world.
- English is used for international communication, business, and tourism.
- These countries are "norm-dependent" — they typically follow Inner Circle standards.

**Criticism of the model:**
Some linguists argue that the boundaries between circles are blurring. With the internet and globalisation, English is increasingly used by everyone, everywhere, for everything — making the circles less distinct.`,
    },

    // ========== DEFINISJON: FEATURES OF WORLD ENGLISHES ==========
    {
      id: 'engelsk-10-36-def-2',
      type: 'definition',
      title: 'Features of Selected World Englishes',
      content: `Each variety of English has developed its own distinctive features in grammar, vocabulary, and pronunciation. Here are some examples:

**Indian English**
- Uses **present continuous** where British English uses simple present: "I am knowing the answer" (instead of "I know the answer")
- **Tag questions** with "isn't it?" or "no?": "You are coming to the party, isn't it?"
- Unique vocabulary: *prepone* (bring forward), *lakh* (100,000), *do the needful* (do what is necessary)
- Often **rhotic** (pronouncing the 'r' in words like "car")

**Nigerian English**
- Vowel sounds often differ from British English; may merge /æ/ and /e/
- Uses expressions from local languages: "I will flash you" (give you a missed call)
- Unique vocabulary: *go-slow* (traffic jam), *chop* (eat), *area boy* (street youth)
- Often more syllable-timed than stress-timed

**Singlish (Singapore English)**
- Particles from Chinese and Malay: "Can lah!" (Yes, of course!), "Don't want leh" (I don't want to)
- Dropping of articles and subjects: "No need" (instead of "There is no need")
- Unique vocabulary: *kiasu* (fear of losing out), *shiok* (great, fantastic)
- Used informally alongside Standard Singapore English

**South African English**
- Influenced by Afrikaans and Zulu: *braai* (barbecue), *robot* (traffic light), *now-now* (soon)
- Unique pronunciation patterns, particularly of vowels
- "Is it?" used as a general tag question for surprise or acknowledgement`,
    },

    // ========== DEFINISJON: CODE-SWITCHING ==========
    {
      id: 'engelsk-10-36-def-3',
      type: 'definition',
      title: 'Code-Switching — Moving Between Languages',
      content: `**Code-switching** is the practice of alternating between two or more languages (or language varieties) within a single conversation or even within a single sentence.

**Examples:**
- A Norwegian student saying: "That was *skikkelig* awkward" (mixing Norwegian and English)
- A Singlish speaker saying: "This food damn *shiok* lah!" (mixing English with Malay/Chinese particles)
- A Nigerian saying: "Make we *jejely* go" (mixing English with Yoruba for "Let's go carefully")

**Why do people code-switch?**
1. **Identity** — to express belonging to a particular cultural group
2. **Precision** — some concepts are better expressed in one language than another
3. **Solidarity** — to create a sense of closeness with the listener
4. **Emphasis** — switching languages can add emotional weight
5. **Context** — using formal English at work but local variety with friends

**Is code-switching a sign of poor language skills?**
No. Research shows that code-switching requires **high competence in multiple languages**. Speakers must know the grammar of both languages and the social rules for when switching is appropriate. It is a sophisticated linguistic skill, not a deficiency.`,
    },

    // ========== EKSEMPEL: WORLD ENGLISHES IN LITERATURE ==========
    {
      id: 'engelsk-10-36-example-1',
      type: 'example',
      title: 'Example: World Englishes in Literature',
      problem: `How do authors use World Englishes in their writing, and why is this significant?`,
      solution: `Many authors deliberately write in their local variety of English rather than adopting British or American standards. This is a political and artistic choice.

**Chinua Achebe (Nigeria)** — *Things Fall Apart*
Achebe wrote in Standard English but wove in Igbo words, proverbs, and speech patterns to represent the Igbo worldview. He argued that African writers could "aim at fashioning out an English which is at once universal and able to carry his peculiar experience."

**Arundhati Roy (India)** — *The God of Small Things*
Roy uses Indian English syntax and rhythm: "Pappachi's Moth" and "Love Laws" reflect how Indian English plays with compound nouns and capitalisation. Her language captures the specific texture of life in Kerala.

**Why this matters:**
- It challenges the dominance of British/American English in literature
- It shows that English belongs to everyone who uses it
- It preserves cultural identity while communicating globally
- It enriches the English language with new expressions and perspectives

When you read texts by authors from different English-speaking traditions, pay attention to how their use of language reflects their cultural context. This is not "incorrect" English — it is English adapted to express a different reality.`,
    },

    // ========== EKSEMPEL: ENGLISH AND POWER ==========
    {
      id: 'engelsk-10-36-example-2',
      type: 'example',
      title: 'Example: The Politics of "Standard" English',
      problem: `Why is the idea of "Standard English" controversial, and what does it have to do with power?`,
      solution: `The concept of "Standard English" is deeply connected to questions of **power, history, and identity**.

**The colonial legacy:**
English spread globally largely through British colonisation. In many countries, English was imposed as the language of government, education, and law — often at the expense of local languages. The idea that British English is the "correct" standard carries this colonial history with it.

**Who decides what is "correct"?**
Traditionally, the "standard" has been defined by educated speakers in the Inner Circle — particularly British and American elites. This means that millions of competent English speakers in India, Nigeria, Singapore, and elsewhere have been told their English is "wrong" simply because it differs from the Inner Circle norm.

**The shift in thinking:**
Modern linguistics recognises that **all varieties of English are equally valid** as communication systems. No variety is inherently better or more correct than another. The prestige of "Standard English" is a matter of social power, not linguistic quality.

**However, context matters:**
In academic writing, international business, and formal contexts, a widely understood variety is often practical. The key insight is that this is about **appropriateness for context**, not about one variety being "correct" and others being "wrong."

Being aware of these power dynamics helps you become a more critical and empathetic communicator.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-36-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-ex-1',
        number: '36.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'According to Kachru\'s model, which "circle" does Norway belong to?',
        options: [
          {
            id: 'a',
            text: 'The Inner Circle',
            isCorrect: false,
            feedback: 'Incorrect. The Inner Circle includes countries where English is the primary native language (UK, USA, Australia, etc.). Norwegian is the primary language in Norway.',
          },
          {
            id: 'b',
            text: 'The Outer Circle',
            isCorrect: false,
            feedback: 'Incorrect. The Outer Circle includes countries where English has official status due to colonial history (India, Nigeria, Singapore, etc.). English has no official status in Norway.',
          },
          {
            id: 'c',
            text: 'The Expanding Circle',
            isCorrect: true,
            feedback: 'Correct! Norway belongs to the Expanding Circle — countries where English is widely learned and used as a foreign language but has no official status.',
          },
          {
            id: 'd',
            text: 'Norway is not included in Kachru\'s model',
            isCorrect: false,
            feedback: 'Incorrect. All countries fit into one of Kachru\'s three circles. Norway, where English is learned as a foreign language, belongs to the Expanding Circle.',
          },
        ],
        solution: 'Norway belongs to the Expanding Circle in Kachru\'s model. English is widely spoken but has no official status — it is learned as a foreign language in schools and used for international communication.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-36-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-ex-2',
        number: '36.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is code-switching?',
        options: [
          {
            id: 'a',
            text: 'Translating a text from one language to another',
            isCorrect: false,
            feedback: 'Incorrect. Translation is converting an entire text from one language to another. Code-switching is the practice of alternating between languages within a conversation.',
          },
          {
            id: 'b',
            text: 'Alternating between two or more languages within a conversation or sentence',
            isCorrect: true,
            feedback: 'Correct! Code-switching is moving between languages or language varieties in a single conversation. It requires high competence in multiple languages.',
          },
          {
            id: 'c',
            text: 'Learning a new language by immersion in another country',
            isCorrect: false,
            feedback: 'Incorrect. That describes language immersion. Code-switching specifically means alternating between languages during communication.',
          },
          {
            id: 'd',
            text: 'Speaking English with a foreign accent',
            isCorrect: false,
            feedback: 'Incorrect. Having an accent is not code-switching. Code-switching involves deliberately alternating between distinct languages or language varieties.',
          },
        ],
        solution: 'Code-switching is the practice of alternating between two or more languages or language varieties within a single conversation or sentence. It is a sign of high linguistic competence, not poor language skills.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-36-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-ex-3',
        number: '36.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Approximately how many people speak English worldwide?',
        options: [
          {
            id: 'a',
            text: 'About 400 million',
            isCorrect: false,
            feedback: 'Incorrect. 400 million is approximately the number of native English speakers. The total number of English speakers is much larger.',
          },
          {
            id: 'b',
            text: 'About 1.5 billion',
            isCorrect: true,
            feedback: 'Correct! Approximately 1.5 billion people speak English worldwide, but only about 400 million are native speakers. The majority use English as a second or additional language.',
          },
          {
            id: 'c',
            text: 'About 500 million',
            isCorrect: false,
            feedback: 'Incorrect. The total number of English speakers is much higher than this. Remember that most English speakers use it as a second or foreign language.',
          },
          {
            id: 'd',
            text: 'About 3 billion',
            isCorrect: false,
            feedback: 'Incorrect. While English is the most widely studied language, estimates place the total number of speakers at around 1.5 billion.',
          },
        ],
        solution: 'Approximately 1.5 billion people speak English worldwide, making it the most widely spoken language by total number of speakers. Only about 400 million are native speakers — the majority use English as a second or additional language.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-36-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-ex-4',
        number: '36.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'An Indian English speaker says "I am knowing the answer." A British English speaker would say "I know the answer." Which statement about this difference is most accurate?',
        options: [
          {
            id: 'a',
            text: 'The Indian English version is grammatically incorrect and should be corrected',
            isCorrect: false,
            feedback: 'Incorrect. In Indian English, using the present continuous with stative verbs is a standard grammatical feature — not an error. It follows the internal rules of that variety.',
          },
          {
            id: 'b',
            text: 'Both are grammatically correct within their respective varieties of English',
            isCorrect: true,
            feedback: 'Correct! Each variety of English has its own grammar. In Indian English, the present continuous is used more broadly than in British English. Neither is "wrong" — they follow different grammatical conventions.',
          },
          {
            id: 'c',
            text: 'The Indian English version is a direct translation from Hindi and has nothing to do with English grammar',
            isCorrect: false,
            feedback: 'Partially incorrect. While Hindi influence plays a role, the feature has become an established part of Indian English grammar. It is not simply "broken translation" — it is a systematic grammatical pattern used by millions of speakers.',
          },
          {
            id: 'd',
            text: 'The British English version is old-fashioned and Indian English represents the future of the language',
            isCorrect: false,
            feedback: 'Incorrect. Neither variety is more "advanced" or "old-fashioned" than the other. They are simply different varieties that have evolved in different contexts.',
          },
        ],
        solution: 'Both forms are grammatically correct within their respective varieties. Indian English uses the present continuous more broadly than British English. Recognising this helps us respect linguistic diversity rather than treating one variety as the only "correct" form.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-36-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-ex-5',
        number: '36.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Why did author Chinua Achebe choose to write in English rather than in his native Igbo language?',
        options: [
          {
            id: 'a',
            text: 'He believed English was a superior language for literary expression',
            isCorrect: false,
            feedback: 'Incorrect. Achebe did not consider English superior. He valued Igbo deeply but made a strategic choice about audience and communication.',
          },
          {
            id: 'b',
            text: 'He could not write fluently in Igbo',
            isCorrect: false,
            feedback: 'Incorrect. Achebe was fluent in Igbo. His choice to write in English was deliberate and strategic, not based on inability.',
          },
          {
            id: 'c',
            text: 'He wanted to reach an international audience and to reshape English to carry African experiences',
            isCorrect: true,
            feedback: 'Correct! Achebe chose English to reach a global audience and to challenge colonial narratives about Africa. He shaped English to carry Igbo proverbs, rhythms, and worldviews — making the colonial language serve African storytelling.',
          },
          {
            id: 'd',
            text: 'He was required to write in English by his British publisher',
            isCorrect: false,
            feedback: 'Incorrect. Achebe\'s choice was his own. He explicitly discussed his reasoning in essays, arguing that the African writer could fashion English to carry African experience.',
          },
        ],
        solution: 'Achebe chose English strategically — to reach an international audience and to reshape the language to carry African experiences. By weaving Igbo words, proverbs, and speech patterns into English prose, he demonstrated that English could be adapted to express any culture\'s reality.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-36-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-ex-6',
        number: '36.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following is a valid criticism of Kachru\'s Three Circles model?',
        options: [
          {
            id: 'a',
            text: 'The model does not include enough countries',
            isCorrect: false,
            feedback: 'Incorrect. The model includes all countries — every nation fits into one of the three circles. The criticism is about the rigidity of the boundaries, not the number of countries.',
          },
          {
            id: 'b',
            text: 'The boundaries between circles are becoming blurred due to globalisation and the internet',
            isCorrect: true,
            feedback: 'Correct! With global media, the internet, and international migration, people in the Expanding Circle may use English as fluently as those in the Outer Circle. The neat categories are increasingly hard to maintain.',
          },
          {
            id: 'c',
            text: 'The model wrongly claims that American English is better than British English',
            isCorrect: false,
            feedback: 'Incorrect. Kachru\'s model does not rank any variety as better than another. It categorises countries by their historical relationship with English.',
          },
          {
            id: 'd',
            text: 'The model was created too recently to be considered reliable',
            isCorrect: false,
            feedback: 'Incorrect. The model was proposed in 1985 and has been widely discussed for decades. The criticism is about its accuracy in today\'s globalised world, not about its age.',
          },
        ],
        solution: 'A key criticism of Kachru\'s model is that globalisation, the internet, and migration have blurred the boundaries between circles. A young Norwegian person who consumes mostly English-language media may use English more than someone in an Outer Circle country.',
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-36-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-ex-7',
        number: '36.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Consider this scenario: A Singaporean professional uses Standard English in business emails but Singlish with friends and family. Which analysis best explains this behaviour?',
        options: [
          {
            id: 'a',
            text: 'The person cannot maintain Standard English consistently, so they fall back on Singlish in informal settings',
            isCorrect: false,
            feedback: 'Incorrect. This implies Singlish is a "failure" to maintain standard. In reality, the speaker is making a deliberate, skilled choice based on social context — not failing at anything.',
          },
          {
            id: 'b',
            text: 'The person is performing diglossia — using different language varieties for different social functions, with Standard English for formal domains and Singlish for solidarity and identity',
            isCorrect: true,
            feedback: 'Correct! This is a textbook example of diglossia — using a "high" variety (Standard English) for formal contexts and a "low" variety (Singlish) for informal and intimate contexts. Both varieties serve important social functions.',
          },
          {
            id: 'c',
            text: 'The person should choose one variety and use it consistently to avoid confusion',
            isCorrect: false,
            feedback: 'Incorrect. Using different varieties in different contexts is not confusing — it is a normal and highly skilled sociolinguistic practice that billions of multilingual people engage in daily.',
          },
          {
            id: 'd',
            text: 'Singlish will eventually replace Standard English in Singapore as globalisation increases',
            isCorrect: false,
            feedback: 'Incorrect. There is no evidence that Singlish will replace Standard English. Both varieties coexist and serve different functions. Many Singaporeans are proud of this bilingual ability.',
          },
        ],
        solution: 'This is diglossia — the use of two language varieties in complementary social domains. Standard English serves formal, professional functions, while Singlish expresses cultural identity and solidarity. The ability to switch appropriately between them is a sign of high sociolinguistic competence.',
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-36-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-ex-8',
        number: '36.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'A teacher tells a student from Nigeria: "Your English has too many grammatical errors — you need to write in proper English." The student\'s text uses Nigerian English features consistently. What is the most nuanced response to this situation?',
        options: [
          {
            id: 'a',
            text: 'The teacher is correct — there is one standard of English and all students should follow it',
            isCorrect: false,
            feedback: 'Incorrect. This view ignores the legitimacy of World Englishes and the fact that what the teacher perceives as "errors" may be systematic features of Nigerian English.',
          },
          {
            id: 'b',
            text: 'The teacher is wrong — Nigerian English is just as valid as any other English, so the student should never be corrected',
            isCorrect: false,
            feedback: 'Too simplistic. While Nigerian English is valid, the student also benefits from knowing when and how to use internationally understood conventions, especially in academic contexts.',
          },
          {
            id: 'c',
            text: 'The teacher should recognise that Nigerian English features are not "errors" but should also help the student become aware of different registers and when to use standard academic conventions',
            isCorrect: true,
            feedback: 'Correct! The most nuanced approach recognises the validity of Nigerian English while also teaching the student to navigate different contexts. The goal is additive bilingualism — adding academic English skills without dismissing the student\'s home variety.',
          },
          {
            id: 'd',
            text: 'The situation is irrelevant because all English will eventually merge into one global variety',
            isCorrect: false,
            feedback: 'Incorrect. There is no evidence that English varieties are merging into one. If anything, new varieties continue to develop. The question of how to handle variety in education is both current and important.',
          },
        ],
        solution: 'The most nuanced approach is additive — respecting Nigerian English as a legitimate variety while helping the student develop awareness of different registers and conventions. A good teacher helps students expand their linguistic repertoire rather than replacing their home variety.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 37: Pronunciation and Phonetics
// ============================================================================

export const CHAPTER_ENGELSK_10_37: TextbookChapter = {
  id: 'engelsk-10-37',
  courseId: 'engelsk-10',
  chapterNumber: '37',
  title: 'Pronunciation and Phonetics',
  description: 'Learn the basics of English phonetics, including key IPA symbols, vowel and consonant sounds, word stress, sentence intonation, and common pronunciation challenges for Norwegian speakers.',
  estimatedMinutes: 80,
  competenceGoals: [
    'bruke kunnskap om grammatikk og tekststruktur til å skape presise og sammenhengende tekster',
    'forstå muntlig engelsk i ulike varianter og dialekter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-37-intro',
      type: 'text',
      content: `## Pronunciation and Phonetics

Good pronunciation is not about sounding "perfectly British" or "perfectly American." It is about being **clearly understood** by people from different backgrounds. Whether you speak with a British, American, or Norwegian-influenced accent, what matters most is that your speech is **intelligible** — that listeners can understand you without difficulty.

However, there are specific sounds, stress patterns, and intonation features in English that, if mastered, will make your spoken English significantly clearer and more natural. This chapter introduces you to the **basics of English phonetics** — the study of speech sounds.

**What you will learn:**
- The **International Phonetic Alphabet (IPA)** — a system for writing down pronunciation
- Key **vowel and consonant sounds** in English
- **Word stress** — which syllable to emphasise
- **Sentence stress and intonation** — the melody of spoken English
- **Connected speech** — how sounds change when words flow together
- **Common Norwegian-English pronunciation pitfalls** and how to avoid them

You do not need to memorise every IPA symbol. The goal is to develop **awareness** of how English sounds work so that you can improve your pronunciation independently — for example, by using a dictionary's pronunciation guide.`,
    },

    // ========== DEFINISJON: THE IPA ==========
    {
      id: 'engelsk-10-37-def-1',
      type: 'definition',
      title: 'The International Phonetic Alphabet (IPA)',
      content: `The **International Phonetic Alphabet (IPA)** is a system of symbols where **each symbol represents exactly one sound**. Unlike English spelling — where the same letter can represent many sounds (think of the "o" in *hot*, *home*, *woman*, *women*) — the IPA is consistent and unambiguous.

**Why is the IPA useful?**
- English spelling is notoriously irregular. The word "enough" is spelled nothing like it sounds: /ɪˈnʌf/
- The IPA lets you look up the exact pronunciation of any word in a dictionary
- It helps you distinguish between sounds that seem similar

**Key IPA symbols for English vowels:**
- /iː/ as in *see* — a long "ee" sound
- /ɪ/ as in *sit* — a short, relaxed "i"
- /e/ as in *bed* — like Norwegian "e" in "seng"
- /æ/ as in *cat* — a sound between "a" and "e" (does not exist in Norwegian)
- /ɑː/ as in *car* (British) — a long, open "a"
- /ɒ/ as in *hot* (British) — a rounded short "o"
- /ɔː/ as in *thought* — a long "aw" sound
- /ʊ/ as in *put* — a short, relaxed "u"
- /uː/ as in *food* — a long "oo" sound
- /ʌ/ as in *cup* — like a short, unstressed "a" (very common in English)
- /ɜː/ as in *bird* — a long vowel that does not exist in Norwegian
- /ə/ — the **schwa**, the most common sound in English (the unstressed "uh" in *about*, *banana*, *problem*)

**Key IPA symbols for consonants that challenge Norwegian speakers:**
- /θ/ as in *think* — voiceless "th" (tongue between teeth)
- /ð/ as in *this* — voiced "th" (tongue between teeth)
- /w/ as in *wait* — rounded lips (not the same as Norwegian "v")
- /ŋ/ as in *sing* — the "ng" sound (exists in Norwegian too)
- /dʒ/ as in *judge* — like "j" in English (not like Norwegian "j")
- /tʃ/ as in *church* — like "ch"`,
    },

    // ========== DEFINISJON: WORD STRESS ==========
    {
      id: 'engelsk-10-37-def-2',
      type: 'definition',
      title: 'Word Stress — The Rhythm of English Words',
      content: `In English, every word with more than one syllable has one syllable that is **stressed** (spoken louder, longer, and at a higher pitch) while the others are **unstressed**.

**Why does stress matter?**
Incorrect stress can make you hard to understand — or even change the meaning of a word.

**Stress changes meaning:**
- **RE**cord (noun) = a disc or a written account → re**CORD** (verb) = to capture sound or video
- **PRE**sent (noun) = a gift → pre**SENT** (verb) = to show or give
- **CON**test (noun) = a competition → con**TEST** (verb) = to challenge

**Common stress patterns:**
- **Two-syllable nouns** are usually stressed on the FIRST syllable: **TA**ble, **WA**ter, **STU**dent
- **Two-syllable verbs** are often stressed on the SECOND syllable: be**GIN**, de**CIDE**, a**LLOW**
- **Words ending in -tion/-sion** are stressed on the syllable BEFORE: edu**CA**tion, de**CI**sion, in**FOR**mation
- **Words ending in -ic** are stressed on the syllable BEFORE: dra**MA**tic, fan**TAS**tic, scien**TI**fic
- **Words ending in -ity** are stressed on the syllable BEFORE: uni**VER**sity, elec**TRI**city

**How to check stress:**
In dictionaries, stress is marked with the symbol **ˈ** before the stressed syllable:
- *photograph* /ˈfəʊtəɡrɑːf/ → stress on FIRST syllable
- *photographer* /fəˈtɒɡrəfə/ → stress on SECOND syllable
- *photographic* /ˌfəʊtəˈɡræfɪk/ → stress on THIRD syllable`,
    },

    // ========== DEFINISJON: NORWEGIAN PITFALLS ==========
    {
      id: 'engelsk-10-37-def-3',
      type: 'definition',
      title: 'Common Norwegian-English Pronunciation Pitfalls',
      content: `Norwegian speakers have specific challenges with English pronunciation because certain English sounds do not exist in Norwegian, and certain Norwegian habits transfer incorrectly.

**1. The "th" sounds (/θ/ and /ð/)**
Norwegian does not have these sounds. Norwegian speakers often substitute:
- /θ/ (as in *think*) → "t" or "f" — saying "tink" or "fink" instead of "think"
- /ð/ (as in *this*) → "d" — saying "dis" instead of "this"
- **Fix:** Place the tip of your tongue lightly between your front teeth and blow air out.

**2. The /w/ vs. /v/ distinction**
Norwegian has "v" but not the English /w/ sound. Norwegian speakers often say "vine" instead of "wine" or "vhat" instead of "what."
- **Fix:** Round your lips tightly (as if about to whistle) before saying the vowel.

**3. The /æ/ vowel (as in *cat*, *man*, *bad*)**
This open vowel does not exist in standard Norwegian. Speakers often say /e/ instead: "ket" for "cat."
- **Fix:** Open your mouth wider than for /e/ and pull the corners slightly back.

**4. The /ʌ/ vowel (as in *but*, *cup*, *love*)**
Norwegian speakers often use /ø/ or /o/ instead: "boot" for "but."
- **Fix:** The /ʌ/ is a short, central, open sound — like a brief, unstressed "a."

**5. Word-final voiced consonants**
Norwegian tends to devoice final consonants: saying "bet" for "bed" or "dock" for "dog."
- **Fix:** Consciously sustain the vibration in your throat at the end of words like *bed*, *dog*, *love*.

**6. The schwa /ə/**
Norwegian speakers tend to give full vowel quality to unstressed syllables. In English, unstressed syllables are usually reduced to schwa.
- *banana* = /bəˈnɑːnə/ (not "ba-NA-na" with clear a's)
- *problem* = /ˈprɒbləm/ (not "prob-LEM" with a clear e)`,
    },

    // ========== EKSEMPEL: INTONATION AND SENTENCE STRESS ==========
    {
      id: 'engelsk-10-37-example-1',
      type: 'example',
      title: 'Example: Sentence Stress and Intonation',
      problem: `How does English use stress and intonation at the sentence level, and how does this differ from Norwegian?`,
      solution: `**Sentence stress** means that certain words in a sentence are emphasised while others are reduced. English is a **stress-timed language** — stressed syllables occur at roughly regular intervals, and unstressed syllables are compressed between them.

**Content words** (nouns, main verbs, adjectives, adverbs) are usually **stressed**.
**Function words** (articles, prepositions, pronouns, auxiliaries) are usually **unstressed** and reduced.

Example: "I went to the SHOP to BUY some BREAD."
- Stressed: WENT, SHOP, BUY, BREAD (content words)
- Unstressed: I, to, the, some (function words — spoken quickly and quietly)

**Shifting stress changes meaning:**
- "I didn't say HE stole the money." (Someone else said it.)
- "I didn't say he STOLE the money." (He didn't steal it — maybe he borrowed it.)
- "I didn't say he stole the MONEY." (He stole something else.)

**Intonation patterns:**
- **Falling intonation** (↘) for statements and wh-questions: "Where do you LIVE↘?"
- **Rising intonation** (↗) for yes/no questions: "Do you like COFFEE↗?"
- **Fall-rise** (↘↗) for uncertainty, politeness, or "but...": "It's NICE↘↗ ... but expensive."

**Norwegian vs. English intonation:**
Norwegian has a distinctive "sing-song" tonal pattern (tonelag). While this can make Norwegian-accented English charming, be aware that Norwegian intonation patterns do not always carry the same meaning in English.`,
    },

    // ========== EKSEMPEL: CONNECTED SPEECH ==========
    {
      id: 'engelsk-10-37-example-2',
      type: 'example',
      title: 'Example: Connected Speech — Why Native Speakers Sound "Fast"',
      problem: `Why do native English speakers seem to speak so fast, and what happens to sounds when words flow together?`,
      solution: `Native speakers do not actually speak faster — they use **connected speech** features that link words together and reduce sounds, making individual words harder to distinguish.

**Key features of connected speech:**

**1. Linking**
When a word ends in a consonant and the next begins with a vowel, they link: "turn off" → "tur-noff," "an apple" → "a-napple."

**2. Elision (dropping sounds)**
Sounds are dropped to keep speech flowing:
- "next day" → "nex day" (the /t/ is dropped)
- "last night" → "las night" (the /t/ is dropped)
- "comfortable" → "comf-ta-ble" (middle syllable dropped)

**3. Assimilation (sounds change to match neighbours)**
A sound changes to become more like the sound next to it:
- "ten boys" → "tem boys" (/n/ becomes /m/ before /b/)
- "good girl" → "goob girl" (/d/ becomes softer before /g/)

**4. Weak forms**
Function words are reduced in natural speech:
- "and" → /ən/ or /n/: "bread and butter" → "bread 'n butter"
- "to" → /tə/: "going to" → "gonna" (very informal)
- "have" → /əv/: "could have" → "could've"

**Why this matters:**
Understanding connected speech helps you comprehend natural English. Practising it makes your own speech more natural and fluid — not because you must sound "native," but because it improves the **rhythm** and **flow** of your English.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-37-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-ex-1',
        number: '37.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the most common vowel sound in the English language?',
        options: [
          {
            id: 'a',
            text: 'The /iː/ sound as in "see"',
            isCorrect: false,
            feedback: 'Incorrect. While /iː/ is common, it is not the most frequent vowel sound in English.',
          },
          {
            id: 'b',
            text: 'The /æ/ sound as in "cat"',
            isCorrect: false,
            feedback: 'Incorrect. The /æ/ sound is distinctive but not the most common vowel sound overall.',
          },
          {
            id: 'c',
            text: 'The schwa /ə/ — the unstressed "uh" sound',
            isCorrect: true,
            feedback: 'Correct! The schwa /ə/ is by far the most common sound in English. It appears in the unstressed syllables of words like "about" /əˈbaʊt/, "banana" /bəˈnɑːnə/, and "problem" /ˈprɒbləm/.',
          },
          {
            id: 'd',
            text: 'The /ɑː/ sound as in "car"',
            isCorrect: false,
            feedback: 'Incorrect. The /ɑː/ sound is relatively uncommon compared to other vowel sounds, especially the schwa.',
          },
        ],
        solution: 'The schwa /ə/ is the most common vowel sound in English. It appears in nearly every English word with more than one syllable, always in unstressed positions. Mastering the schwa is essential for natural-sounding English.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-37-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-ex-2',
        number: '37.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'A Norwegian speaker says "tink" instead of "think." Which sound are they struggling with?',
        options: [
          {
            id: 'a',
            text: 'The /w/ sound',
            isCorrect: false,
            feedback: 'Incorrect. The /w/ sound appears in words like "wait" and "water," not in "think."',
          },
          {
            id: 'b',
            text: 'The /θ/ sound (voiceless "th")',
            isCorrect: true,
            feedback: 'Correct! The voiceless "th" sound /θ/ does not exist in Norwegian. Norwegian speakers often replace it with /t/, producing "tink" instead of "think." The fix is to place the tongue tip between the teeth.',
          },
          {
            id: 'c',
            text: 'The /ʌ/ sound',
            isCorrect: false,
            feedback: 'Incorrect. The /ʌ/ sound (as in "cup") is a vowel sound and is not involved in the "think" vs. "tink" confusion.',
          },
          {
            id: 'd',
            text: 'The /dʒ/ sound',
            isCorrect: false,
            feedback: 'Incorrect. The /dʒ/ sound appears in words like "judge" and "jog." The confusion in "tink/think" involves the /θ/ sound.',
          },
        ],
        solution: 'The Norwegian speaker is substituting /t/ for /θ/ (the voiceless "th" sound). This is one of the most common Norwegian-English pronunciation challenges because /θ/ does not exist in Norwegian.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-37-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-ex-3',
        number: '37.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Where is the stress in the word "information"?',
        options: [
          {
            id: 'a',
            text: 'On the first syllable: IN-for-ma-tion',
            isCorrect: false,
            feedback: 'Incorrect. Words ending in -tion are stressed on the syllable before the suffix, not on the first syllable.',
          },
          {
            id: 'b',
            text: 'On the second syllable: in-FOR-ma-tion',
            isCorrect: false,
            feedback: 'Incorrect. While some words are stressed on the second syllable, words ending in -tion follow a specific pattern — stress falls on the syllable before -tion.',
          },
          {
            id: 'c',
            text: 'On the third syllable: in-for-MA-tion',
            isCorrect: true,
            feedback: 'Correct! Words ending in -tion/-sion are stressed on the syllable immediately before the suffix. So "information" is in-for-MA-tion /ˌɪnfəˈmeɪʃn/.',
          },
          {
            id: 'd',
            text: 'On the last syllable: in-for-ma-TION',
            isCorrect: false,
            feedback: 'Incorrect. English words very rarely have stress on a -tion ending. The stress falls on the syllable before it.',
          },
        ],
        solution: 'The stress in "information" falls on the third syllable: in-for-MA-tion. This follows the rule that words ending in -tion/-sion are stressed on the syllable immediately before the suffix.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-37-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-ex-4',
        number: '37.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'In the sentence "I didn\'t say he STOLE the money," the emphasis on "STOLE" changes the meaning. What does this emphasis imply?',
        options: [
          {
            id: 'a',
            text: 'Someone else stole the money, not him',
            isCorrect: false,
            feedback: 'Incorrect. To imply that someone else did it, you would stress "he": "I didn\'t say HE stole the money."',
          },
          {
            id: 'b',
            text: 'He did something else with the money — perhaps borrowed or found it — but did not steal it',
            isCorrect: true,
            feedback: 'Correct! Stressing "STOLE" contrasts it with other possible actions. The speaker is saying: he did something with the money, but it was not stealing — perhaps borrowing, finding, or being given it.',
          },
          {
            id: 'c',
            text: 'The speaker is confirming that he definitely stole the money',
            isCorrect: false,
            feedback: 'Incorrect. The sentence begins with "I didn\'t say" — it is a denial, not a confirmation. The stress on "stole" suggests an alternative action.',
          },
          {
            id: 'd',
            text: 'It was not money that was stolen but something else',
            isCorrect: false,
            feedback: 'Incorrect. To imply a different object, you would stress "money": "I didn\'t say he stole the MONEY."',
          },
        ],
        solution: 'Stressing "STOLE" implies that the action was not stealing — it was something else (borrowing, finding, etc.). In English, shifting sentence stress changes which piece of information is being contrasted or corrected.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-37-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-ex-5',
        number: '37.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What happens in "connected speech" when a native speaker says "next day"?',
        options: [
          {
            id: 'a',
            text: 'Both words are pronounced fully and clearly: /nekst deɪ/',
            isCorrect: false,
            feedback: 'Incorrect. In natural connected speech, speakers typically do not pronounce every sound fully. The /t/ in "next" is often dropped before the /d/ in "day."',
          },
          {
            id: 'b',
            text: 'The /t/ in "next" is dropped (elision): it sounds like "neks day"',
            isCorrect: true,
            feedback: 'Correct! This is elision — the dropping of a sound to keep speech flowing smoothly. When a word ends in a consonant cluster and the next word begins with a consonant, one sound is often dropped.',
          },
          {
            id: 'c',
            text: 'The two words merge into one: "nexday"',
            isCorrect: false,
            feedback: 'Incorrect. While the /t/ is dropped, the words do not fully merge. There is still a boundary — just a smoother transition.',
          },
          {
            id: 'd',
            text: 'The speaker adds an extra vowel between the words: "next-a-day"',
            isCorrect: false,
            feedback: 'Incorrect. English connected speech tends to remove sounds, not add them. Adding vowels between consonants is a feature of some other languages, not English.',
          },
        ],
        solution: 'In connected speech, the /t/ in "next" is typically dropped before the /d/ in "day" — a process called elision. This makes speech flow more smoothly and is a normal feature of natural English.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-37-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-ex-6',
        number: '37.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'The word "record" can be pronounced with stress on the first or second syllable. What determines which pronunciation is correct?',
        options: [
          {
            id: 'a',
            text: 'The first syllable is always stressed — there is only one correct pronunciation',
            isCorrect: false,
            feedback: 'Incorrect. "Record" has two valid pronunciations with different stress patterns, and they mean different things.',
          },
          {
            id: 'b',
            text: 'British English stresses the first syllable and American English stresses the second',
            isCorrect: false,
            feedback: 'Incorrect. Both varieties use both stress patterns. The difference is grammatical (noun vs. verb), not regional.',
          },
          {
            id: 'c',
            text: 'When used as a noun, stress falls on the first syllable (REcord); when used as a verb, stress falls on the second (reCORD)',
            isCorrect: true,
            feedback: 'Correct! This is a common pattern in English: two-syllable words that function as both nouns and verbs often have stress on the first syllable as a noun and the second as a verb. Other examples: PREsent/preSENT, CONtest/conTEST.',
          },
          {
            id: 'd',
            text: 'The stress depends on the speaker\'s personal preference',
            isCorrect: false,
            feedback: 'Incorrect. The stress pattern follows a grammatical rule (noun vs. verb) and is not a matter of personal choice.',
          },
        ],
        solution: 'The stress pattern of "record" depends on its grammatical function: REcord (noun) = a music disc or written account; reCORD (verb) = to capture sound or video. This noun-first/verb-second stress pattern applies to many English words.',
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-37-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-ex-7',
        number: '37.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'A Norwegian student pronounces every syllable in "comfortable" clearly as "com-for-ta-ble" (four syllables). A native English speaker says something closer to "comf-ter-ble" (three syllables). What explains this difference?',
        options: [
          {
            id: 'a',
            text: 'The native speaker is being lazy and not pronouncing the word properly',
            isCorrect: false,
            feedback: 'Incorrect. The reduced pronunciation is the standard way the word is spoken in natural English. It is not laziness — it is how English phonology works.',
          },
          {
            id: 'b',
            text: 'The native speaker uses elision (dropping unstressed sounds), which is a standard feature of English connected speech, while the Norwegian student applies Norwegian phonological rules that give full value to each syllable',
            isCorrect: true,
            feedback: 'Correct! English naturally reduces unstressed syllables through elision and the schwa. Norwegian, being a different kind of language, tends to give clearer pronunciation to each syllable. The native speaker\'s version is not "lazy" — it is the phonologically standard pronunciation.',
          },
          {
            id: 'c',
            text: 'The Norwegian student is correct and the native speaker has a regional dialect',
            isCorrect: false,
            feedback: 'Incorrect. The three-syllable pronunciation of "comfortable" is standard across most English varieties, not a regional feature. Dictionaries typically show this reduced form.',
          },
          {
            id: 'd',
            text: 'Both are equally correct; the number of syllables does not matter in English',
            isCorrect: false,
            feedback: 'While both are understandable, the three-syllable version is the standard pronunciation. Using four syllables, while not "wrong," marks the speaker as non-native and can affect natural rhythm.',
          },
        ],
        solution: 'English routinely reduces unstressed syllables through elision and the schwa. "Comfortable" is standardly pronounced as three syllables /ˈkʌmftəbl/. Norwegian speakers tend to give full vowel quality to every syllable, which is a transfer from Norwegian phonology.',
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-37-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-ex-8',
        number: '37.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Consider the word "photograph" /ˈfəʊtəɡrɑːf/, "photographer" /fəˈtɒɡrəfə/, and "photographic" /ˌfəʊtəˈɡræfɪk/. The stress moves to a different syllable in each form. What general principle explains this?',
        options: [
          {
            id: 'a',
            text: 'English stress is completely random and must be memorised for every word',
            isCorrect: false,
            feedback: 'Incorrect. While English stress is complex, it is not random. Suffixes like -er, -ic, and -tion systematically affect where stress falls.',
          },
          {
            id: 'b',
            text: 'Longer words always have stress on the last syllable',
            isCorrect: false,
            feedback: 'Incorrect. "Photograph" (3 syllables) is stressed on the first syllable, while "photographer" (4 syllables) is stressed on the second. Length alone does not determine stress.',
          },
          {
            id: 'c',
            text: 'Certain suffixes (-er, -ic, -tion, etc.) attract stress to specific positions, overriding the base word\'s original stress pattern',
            isCorrect: true,
            feedback: 'Correct! English suffixes systematically affect stress placement. The suffix -ic pulls stress to the syllable immediately before it (photo-GRAPH-ic). The suffix -er pulls stress to the second syllable of the root (pho-TOG-ra-pher). Understanding these suffix rules helps predict stress in unfamiliar words.',
          },
          {
            id: 'd',
            text: 'The stress shifts because each word belongs to a different word class (noun, noun, adjective)',
            isCorrect: false,
            feedback: 'Partially true — "photograph" and "photographer" are both nouns but have different stress. The key factor is the suffix, not the word class. The suffix determines where stress falls.',
          },
        ],
        solution: 'English stress is governed partly by suffixes. The suffix -ic attracts stress to the preceding syllable (photoGRAPHic). The suffix -er shifts stress to an earlier position (phoTOGrapher). Understanding these patterns helps you predict pronunciation of unfamiliar words.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 38: Informal English and Idioms
// ============================================================================

export const CHAPTER_ENGELSK_10_38: TextbookChapter = {
  id: 'engelsk-10-38',
  courseId: 'engelsk-10',
  chapterNumber: '38',
  title: 'Informal English and Idioms',
  description: 'Master the colourful world of English idioms, phrasal verbs, slang, and colloquialisms. Learn to recognise different registers and understand when informal language is appropriate and when to avoid it.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke variert ordforråd og idiomatiske uttrykk i skriftlig kommunikasjon',
    'tilpasse språket til formål, mottaker og situasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-38-intro',
      type: 'text',
      content: `## Informal English and Idioms

If someone tells you it is "raining cats and dogs," you do not look out the window expecting to see animals falling from the sky. You understand it means **heavy rain**. This is the magic of **idiomatic language** — expressions whose meaning cannot be understood from the individual words alone.

English is extraordinarily rich in idioms, phrasal verbs, slang, and colloquial expressions. Native speakers use them constantly in everyday speech, and they appear frequently in films, songs, novels, and social media. Understanding — and using — idiomatic language makes your English more **natural, expressive, and engaging**.

However, informal language comes with rules of its own. Knowing **when** to use it is just as important as knowing **what** it means. Using slang in a formal essay will lose you marks; using overly formal language with friends will sound strange.

**In this chapter, you will learn:**
- What **idioms** are and how to interpret them
- Common **phrasal verbs** and how they differ from single-word verbs
- The difference between **slang** and **colloquial language**
- How to identify **register** — the level of formality in language
- When informal language is appropriate and when to avoid it`,
    },

    // ========== DEFINISJON: IDIOMS ==========
    {
      id: 'engelsk-10-38-def-1',
      type: 'definition',
      title: 'Idioms — When Words Mean Something Else',
      content: `An **idiom** is a fixed expression whose meaning cannot be understood from the literal meaning of its individual words. Idioms are deeply embedded in culture, and every language has them.

**Common English idioms and their meanings:**

| Idiom | Meaning |
|-------|---------|
| Break the ice | Start a conversation in an awkward situation |
| Hit the nail on the head | Describe something exactly right |
| A piece of cake | Something very easy |
| Spill the beans | Reveal a secret |
| Bite the bullet | Face a difficult situation with courage |
| Under the weather | Feeling ill |
| Cost an arm and a leg | Very expensive |
| Once in a blue moon | Very rarely |
| The ball is in your court | It is your turn to act or decide |
| Burn the midnight oil | Work or study late into the night |
| Kill two birds with one stone | Accomplish two things with one action |
| Let the cat out of the bag | Accidentally reveal a secret |

**Where do idioms come from?**
Many idioms have historical origins:
- "Break a leg" (good luck) may come from theatre superstition
- "Bury the hatchet" (make peace) comes from a Native American peace ceremony
- "Saved by the bell" may come from boxing, where the round-ending bell saves a struggling fighter

**Why are idioms important?**
- They make language more vivid and engaging
- They appear frequently in authentic English texts (novels, films, news)
- Using them shows a high level of language competence
- They are often tested in English exams`,
    },

    // ========== DEFINISJON: PHRASAL VERBS ==========
    {
      id: 'engelsk-10-38-def-2',
      type: 'definition',
      title: 'Phrasal Verbs — The Verbs That Change Meaning with a Particle',
      content: `A **phrasal verb** is a verb combined with one or two particles (prepositions or adverbs) that create a **new meaning** different from the original verb.

**Examples showing how the particle changes meaning:**

The verb **"look"** + different particles:
- **look up** = search for information ("Look up the word in the dictionary")
- **look after** = take care of ("Can you look after my dog?")
- **look forward to** = anticipate with pleasure ("I look forward to meeting you")
- **look down on** = feel superior to ("She looks down on people who didn't go to university")
- **look into** = investigate ("The police are looking into the matter")

The verb **"give"** + different particles:
- **give up** = stop trying ("Don't give up — keep practising!")
- **give in** = surrender / yield ("After hours of arguing, she finally gave in")
- **give away** = donate / reveal ("He gave away all his old clothes")
- **give out** = distribute ("The teacher gave out the worksheets")

**Why are phrasal verbs important?**
- They are **extremely common** in everyday English
- Academic writing prefers single-word alternatives: *put off* → postpone, *give up* → abandon, *find out* → discover
- Understanding them is essential for reading fiction, watching films, and conversing naturally

**Separable vs. inseparable phrasal verbs:**
- **Separable:** "Turn **off** the light" = "Turn the light **off**" (the object can go in the middle)
- **Inseparable:** "Look **after** the children" (NOT "Look the children after")`,
    },

    // ========== DEFINISJON: REGISTER ==========
    {
      id: 'engelsk-10-38-def-3',
      type: 'definition',
      title: 'Register — Matching Language to Situation',
      content: `**Register** refers to the level of formality in language. Just as you dress differently for a job interview than for a beach party, you adjust your language depending on the **context, audience, and purpose**.

**The register spectrum:**

**Frozen / Static** — The most formal; fixed language that never changes.
- Legal documents: "Hereby the party of the first part..."
- Religious texts: "Our Father, who art in heaven..."
- National anthems and oaths

**Formal** — Professional, academic, official communication.
- "I am writing to express my concern regarding..."
- "The research findings indicate that..."
- No contractions, no slang, complex sentence structures

**Consultative** — Standard professional interaction.
- "Could you explain what happened?"
- "I would suggest that we consider..."
- Polite, clear, but not stiff

**Casual / Informal** — Everyday conversation with people you know.
- "Hey, what's up?"
- "That movie was sick!" (= really good)
- Contractions, slang, incomplete sentences, humour

**Intimate** — Private language between very close people.
- Pet names, inside jokes, family shorthand
- "You know the thing" (context is understood without explanation)

**Why register matters in English class:**
- Exam essays require **formal or consultative** register
- Creative writing can use **casual** register in dialogue
- Letters to the editor use **formal** register
- A blog post might use **casual** register
- Mismatching register and context is a common exam mistake`,
    },

    // ========== EKSEMPEL: FORMAL VS INFORMAL ==========
    {
      id: 'engelsk-10-38-example-1',
      type: 'example',
      title: 'Example: Formal vs. Informal — Saying the Same Thing Differently',
      problem: `Rewrite the following informal message as a formal email, and explain the specific changes in language.

Informal text message: "Hey Mr. T! Just a heads up — gonna be late for class tmrw. My bus is always messing up lol. Can u cut me some slack? Cheers!"`,
      solution: `**Formal email version:**

Subject: Advance Notice of Late Arrival — Tuesday

Dear Mr. Thompson,

I am writing to inform you that I may arrive late to class tomorrow morning. Unfortunately, my bus service has been unreliable recently, and I anticipate a delay of approximately 10–15 minutes.

I apologise for any inconvenience this may cause and will ensure I catch up on any material I miss. I would appreciate your understanding.

Kind regards,
Emma Hansen

**Changes explained:**

| Informal | Formal | Why |
|----------|--------|-----|
| Hey Mr. T | Dear Mr. Thompson | Full name, formal greeting |
| heads up | advance notice | Idiom replaced with formal equivalent |
| gonna | I may / I anticipate | Contraction expanded; hedging language |
| tmrw | tomorrow | No abbreviations |
| messing up | has been unreliable | Phrasal verb replaced with formal adjective |
| lol | (removed) | No internet slang |
| cut me some slack | I would appreciate your understanding | Idiom replaced with polite formal phrase |
| Cheers | Kind regards | Formal closing |
| u | you | Full spelling |

The content is the same — but the **register** is completely different. Choosing the right register shows respect for the context and audience.`,
    },

    // ========== EKSEMPEL: SLANG AND COLLOQUIALISMS ==========
    {
      id: 'engelsk-10-38-example-2',
      type: 'example',
      title: 'Example: Understanding Slang in Context',
      problem: `Read this dialogue between two teenagers and identify the slang and colloquial expressions. What do they mean?

"Dude, that test was no joke. I was totally blanking on the last question."
"Same. I thought I'd nailed it but then I second-guessed myself."
"At least it's over. Wanna grab some food? I'm starving."
"For sure. Let's bounce."`,
      solution: `**Slang and colloquial expressions identified:**

1. **"Dude"** — informal address for a friend (originally American surfer slang, now universal)
2. **"no joke"** — serious; difficult (colloquial intensifier)
3. **"totally blanking"** — completely unable to remember or think of something
4. **"nailed it"** — did it perfectly; succeeded
5. **"second-guessed myself"** — doubted my own answer after initially choosing it
6. **"Wanna"** — contraction of "want to" (informal spoken form)
7. **"grab some food"** — get something to eat (informal phrasal verb)
8. **"I'm starving"** — I'm very hungry (hyperbole — not literally starving)
9. **"For sure"** — definitely; yes (casual affirmation)
10. **"Let's bounce"** — let's leave (slang)

**Key insight:** This dialogue is perfectly appropriate for a casual conversation between friends. However, if you wrote these expressions in a formal essay, they would be inappropriate. The skill is not avoiding informal language entirely — it is knowing **when and where** to use it.

**In creative writing:** Using slang in dialogue makes characters sound realistic and authentic. The dialogue above would work perfectly in a short story about teenagers.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-38-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-ex-1',
        number: '38.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What does the idiom "break the ice" mean?',
        options: [
          {
            id: 'a',
            text: 'To physically crack ice on a frozen surface',
            isCorrect: false,
            feedback: 'Incorrect. This is the literal meaning, but as an idiom, "break the ice" has a figurative meaning related to social situations.',
          },
          {
            id: 'b',
            text: 'To start a conversation or reduce awkwardness in a social situation',
            isCorrect: true,
            feedback: 'Correct! "Breaking the ice" means to do or say something that reduces tension and makes people feel more comfortable, typically at the beginning of a meeting or social gathering.',
          },
          {
            id: 'c',
            text: 'To cause a problem or create conflict',
            isCorrect: false,
            feedback: 'Incorrect. "Break the ice" has a positive connotation — it means easing social tension, not creating it.',
          },
          {
            id: 'd',
            text: 'To finish something quickly',
            isCorrect: false,
            feedback: 'Incorrect. Speed has nothing to do with this idiom. It is about reducing social awkwardness at the start of an interaction.',
          },
        ],
        solution: '"Break the ice" means to initiate conversation or reduce awkwardness in a social situation. Example: "The teacher played a game to break the ice on the first day of school."',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-38-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-ex-2',
        number: '38.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is a phrasal verb?',
        options: [
          {
            id: 'a',
            text: 'A verb that is used only in formal writing',
            isCorrect: false,
            feedback: 'Incorrect. Phrasal verbs are actually more common in informal, everyday English than in formal writing.',
          },
          {
            id: 'b',
            text: 'A verb combined with a particle (preposition or adverb) that creates a new meaning',
            isCorrect: true,
            feedback: 'Correct! A phrasal verb combines a base verb with one or two particles to create a meaning different from the original verb. For example, "give up" means to stop trying — very different from "give" alone.',
          },
          {
            id: 'c',
            text: 'A verb that has more than three syllables',
            isCorrect: false,
            feedback: 'Incorrect. The number of syllables has nothing to do with phrasal verbs. A phrasal verb is defined by the combination of a verb with a particle.',
          },
          {
            id: 'd',
            text: 'A verb borrowed from another language',
            isCorrect: false,
            feedback: 'Incorrect. That would be a loanword or borrowing. Phrasal verbs are combinations of English verbs and particles.',
          },
        ],
        solution: 'A phrasal verb is a verb + particle combination that creates a new meaning: "look up" (search for), "give in" (surrender), "run into" (meet by chance). They are extremely common in everyday English.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-38-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-ex-3',
        number: '38.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which register would be most appropriate for a school essay about climate change?',
        options: [
          {
            id: 'a',
            text: 'Casual — using slang and contractions to sound natural',
            isCorrect: false,
            feedback: 'Incorrect. A school essay requires a more formal tone. Slang and excessive contractions would undermine the academic quality of your writing.',
          },
          {
            id: 'b',
            text: 'Formal or consultative — professional language with clear structure and no slang',
            isCorrect: true,
            feedback: 'Correct! Academic essays should use formal or consultative register: clear, precise language; no slang or colloquialisms; logical structure; and evidence-based arguments.',
          },
          {
            id: 'c',
            text: 'Intimate — personal, emotional language with inside references',
            isCorrect: false,
            feedback: 'Incorrect. Intimate register is for private communication between very close people. It would be completely inappropriate for an academic essay.',
          },
          {
            id: 'd',
            text: 'Frozen — using legal or ceremonial language',
            isCorrect: false,
            feedback: 'Incorrect. Frozen register is reserved for fixed texts like laws, oaths, and religious ceremonies. An essay should be formal but not frozen — you still want to engage the reader.',
          },
        ],
        solution: 'School essays require formal or consultative register: professional vocabulary, complete sentences, no contractions (in most cases), no slang, and evidence-based argumentation. This shows respect for the academic context.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-38-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-ex-4',
        number: '38.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: '"She decided to look into the matter after her colleague spilled the beans." This sentence contains two idiomatic expressions. Which pair correctly identifies them?',
        options: [
          {
            id: 'a',
            text: '"decided to" (make a choice) and "the matter" (the topic)',
            isCorrect: false,
            feedback: 'Incorrect. "Decided to" and "the matter" are standard English expressions with literal meanings. The idioms in this sentence are "look into" and "spill the beans."',
          },
          {
            id: 'b',
            text: '"look into" (investigate) and "spilled the beans" (revealed a secret)',
            isCorrect: true,
            feedback: 'Correct! "Look into" is a phrasal verb meaning to investigate. "Spill the beans" is an idiom meaning to reveal a secret. Together: she decided to investigate after her colleague revealed a secret.',
          },
          {
            id: 'c',
            text: '"look into the matter" (study something) and "her colleague" (a work friend)',
            isCorrect: false,
            feedback: 'Incorrect. "Her colleague" is a literal expression. The two idiomatic expressions are "look into" (investigate) and "spilled the beans" (revealed a secret).',
          },
          {
            id: 'd',
            text: '"decided to look" (chose to see) and "after her colleague" (following a coworker)',
            isCorrect: false,
            feedback: 'Incorrect. These are not idiomatic expressions. The idioms are "look into" (investigate) and "spilled the beans" (revealed a secret).',
          },
        ],
        solution: 'The two idiomatic expressions are "look into" (= investigate) and "spilled the beans" (= revealed a secret). The sentence means: she decided to investigate the matter after her colleague revealed the secret.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-38-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-ex-5',
        number: '38.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of these is the correct formal equivalent of the phrasal verb "put off"?',
        options: [
          {
            id: 'a',
            text: 'Cancel',
            isCorrect: false,
            feedback: 'Close, but not quite. "Cancel" means to stop something entirely. "Put off" means to delay it to a later time — not to cancel it completely.',
          },
          {
            id: 'b',
            text: 'Postpone',
            isCorrect: true,
            feedback: 'Correct! "Put off" means to postpone — to delay something to a later time. In formal writing, "postpone" is preferred: "The meeting was postponed" rather than "The meeting was put off."',
          },
          {
            id: 'c',
            text: 'Eliminate',
            isCorrect: false,
            feedback: 'Incorrect. "Eliminate" means to remove completely, which is a very different meaning from "put off" (to delay).',
          },
          {
            id: 'd',
            text: 'Reject',
            isCorrect: false,
            feedback: 'Incorrect. "Reject" means to refuse or turn down, not to delay. The formal equivalent of "put off" (delay) is "postpone."',
          },
        ],
        solution: '"Put off" = postpone (delay to a later time). In formal writing, single Latinate words are often preferred over phrasal verbs: put off -> postpone, find out -> discover, give up -> abandon, carry out -> conduct.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-38-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-ex-6',
        number: '38.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A student writes in an exam essay: "The government needs to get their act together and sort out the healthcare mess." What is the problem with this sentence in an academic context?',
        options: [
          {
            id: 'a',
            text: 'The grammar is incorrect — "government" should take "its" not "their"',
            isCorrect: false,
            feedback: 'While this is debatable (British English often uses "their" with collective nouns), the main issue is register, not grammar.',
          },
          {
            id: 'b',
            text: 'The sentence is too short for an academic essay',
            isCorrect: false,
            feedback: 'Incorrect. Sentence length is not the issue — the problem is the use of informal, idiomatic language in a formal context.',
          },
          {
            id: 'c',
            text: 'The informal idioms ("get their act together," "sort out," "mess") are inappropriate for academic register — they should be replaced with formal equivalents',
            isCorrect: true,
            feedback: 'Correct! In academic writing, this should be something like: "The government must take decisive action to reform the healthcare system." Informal idioms and phrasal verbs should be replaced with formal vocabulary in essays.',
          },
          {
            id: 'd',
            text: 'The sentence expresses a personal opinion, which is never allowed in essays',
            isCorrect: false,
            feedback: 'Incorrect. Argumentative essays do express positions. The issue is not the opinion itself but the informal language used to express it.',
          },
        ],
        solution: 'The sentence uses informal idioms ("get their act together") and phrasal verbs ("sort out") that are inappropriate for academic register. A better version: "The government must take decisive action to reform the healthcare system." Matching register to context is a key writing skill.',
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-38-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-ex-7',
        number: '38.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Consider the expression "It\'s not rocket science." This idiom means "It\'s not difficult." Why might this idiom be problematic to use when communicating with non-native English speakers from different cultural backgrounds?',
        options: [
          {
            id: 'a',
            text: 'Because the idiom is grammatically incorrect',
            isCorrect: false,
            feedback: 'Incorrect. The idiom is grammatically fine. The issue is about cultural accessibility and understanding.',
          },
          {
            id: 'b',
            text: 'Because idioms are culture-specific and may not translate or be understood across cultures, potentially causing miscommunication',
            isCorrect: true,
            feedback: 'Correct! Idioms are deeply embedded in specific cultures. "Rocket science" as a metaphor for difficulty is an Anglophone cultural reference. A speaker from a different cultural background might interpret it literally or simply not understand it. In cross-cultural communication, clear, literal language is often more effective.',
          },
          {
            id: 'c',
            text: 'Because the expression is outdated and no longer used by native speakers',
            isCorrect: false,
            feedback: 'Incorrect. The expression is still widely used. The issue is about cross-cultural intelligibility, not whether native speakers still use it.',
          },
          {
            id: 'd',
            text: 'Because it is offensive to rocket scientists',
            isCorrect: false,
            feedback: 'Incorrect. The idiom is not offensive — it is complimentary to rocket science by using it as a standard of difficulty. The issue is about cross-cultural understanding.',
          },
        ],
        solution: 'Idioms are culture-specific. In cross-cultural communication, they can cause confusion because non-native speakers may interpret them literally or not recognise them at all. When speaking to international audiences, clearer, more literal language is often more effective than idiomatic expressions.',
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-38-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-ex-8',
        number: '38.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'In a short story, a character uses highly formal language when talking to friends at a party: "I find this social gathering most enjoyable. Would you be so kind as to pass me that beverage?" What effect does this register mismatch create, and how might an author use it intentionally?',
        options: [
          {
            id: 'a',
            text: 'It shows that the character is well-educated and should be admired',
            isCorrect: false,
            feedback: 'Incorrect. Using overly formal language in a casual setting does not simply signal education — it signals a disconnect between the character and the social situation.',
          },
          {
            id: 'b',
            text: 'It is a writing error — the author should have used informal language for a party scene',
            isCorrect: false,
            feedback: 'Incorrect. Skilled authors use register mismatches deliberately. This could be a conscious characterisation choice.',
          },
          {
            id: 'c',
            text: 'The register mismatch can create humour, reveal social awkwardness, or characterise someone who is out of place — authors use deliberate register choices as a literary device',
            isCorrect: true,
            feedback: 'Correct! Register mismatch is a powerful literary tool. It can create comedy (a stiff character at a relaxed party), pathos (someone who does not know how to fit in), or irony. The author uses the contrast between expected and actual language to reveal something about the character.',
          },
          {
            id: 'd',
            text: 'It demonstrates that formal language is always superior to informal language',
            isCorrect: false,
            feedback: 'Incorrect. The point of register is that no level is "superior" — each is appropriate in its own context. Using formal language at a party is not better; it is mismatched.',
          },
        ],
        solution: 'Register mismatch is a deliberate literary device. An author can use overly formal language in an informal setting to create humour, reveal social awkwardness, highlight cultural differences, or develop character. The power of register lies in matching (or deliberately mismatching) language to context.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 39: Narrative Techniques
// ============================================================================

export const CHAPTER_ENGELSK_10_39: TextbookChapter = {
  id: 'engelsk-10-39',
  courseId: 'engelsk-10',
  chapterNumber: '39',
  title: 'Narrative Techniques',
  description: 'Explore the tools authors use to tell stories: point of view, unreliable narrators, foreshadowing, flashback, stream of consciousness, dialogue, and the principle of "show, don\'t tell." Strengthen both your reading analysis and creative writing.',
  estimatedMinutes: 85,
  competenceGoals: [
    'lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre',
    'skrive kreative tekster med bevisst bruk av litterære virkemidler',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-39-intro',
      type: 'text',
      content: `## Narrative Techniques

Every story is a series of choices. The author must decide: *Who tells the story? How is time organised? What does the reader know and when do they learn it? How much is said directly and how much is implied?* These choices are called **narrative techniques**, and they shape the reader's entire experience.

Understanding narrative techniques serves two purposes for you as an English student:

1. **As a reader and analyst:** When you can identify *how* a story is told, you can write much more insightful literary analyses. Instead of just summarising what happens, you can explain *why the author made specific choices* and *what effect those choices have on the reader*.

2. **As a writer:** When you write your own creative texts — short stories, personal narratives, or exam tasks — you can make **deliberate, conscious choices** about narrative technique. This is what examiners mean when they say they want to see "awareness of literary devices."

In this chapter, you will study the most important narrative techniques: **point of view**, the **unreliable narrator**, **foreshadowing**, **flashback**, **stream of consciousness**, **dialogue**, and the crucial principle of **"show, don't tell."**`,
    },

    // ========== DEFINISJON: POINT OF VIEW ==========
    {
      id: 'engelsk-10-39-def-1',
      type: 'definition',
      title: 'Point of View — Who Tells the Story?',
      content: `**Point of view (POV)** is the perspective from which a story is told. It determines what the reader can know, see, and feel.

**First person ("I")**
The narrator is a character in the story, telling it from their own perspective.
- Pronouns: I, me, my, we
- **Advantages:** Creates intimacy and emotional connection. The reader sees through one character's eyes.
- **Limitations:** The reader can only know what the narrator knows, sees, and thinks. Everything is filtered through one perspective.
- *Example:* "I walked into the room and immediately sensed something was wrong. The chairs had been rearranged, and my notebook was missing."

**Second person ("you")**
The narrator addresses the reader directly, as if the reader is a character.
- Pronouns: you, your
- **Effect:** Creates an unusual, immersive experience. Makes the reader feel like a participant rather than an observer.
- *Example:* "You open the door. The room is dark. You reach for the light switch but your hand finds nothing."
- Rarely used for entire novels; more common in short stories, choose-your-own-adventure books, and experimental fiction.

**Third person limited ("he/she/they")**
An external narrator tells the story but stays close to one character's thoughts and feelings.
- Pronouns: he, she, they
- **Effect:** Combines the intimacy of first person with the flexibility of third person. The reader is close to one character but sees them from the outside.
- *Example:* "She walked into the room and immediately sensed something was wrong. Her heart began to race."

**Third person omniscient ("he/she/they" — all-knowing)**
An external narrator who knows everything — all characters' thoughts, feelings, past, and future.
- **Effect:** Gives the reader a god-like overview. Can shift between characters and reveal information no single character knows.
- *Example:* "She walked into the room, unaware that behind the curtain, her brother was hiding with a birthday cake. In the kitchen, their mother smiled, knowing the surprise would work perfectly."`,
    },

    // ========== DEFINISJON: UNRELIABLE NARRATOR ==========
    {
      id: 'engelsk-10-39-def-2',
      type: 'definition',
      title: 'The Unreliable Narrator',
      content: `An **unreliable narrator** is a narrator whose account of events cannot be fully trusted. The reader must "read between the lines" to figure out what is really happening.

**Why might a narrator be unreliable?**

1. **Youth or naivety:** A child narrator may describe events they do not fully understand. The reader sees more than the narrator does.
   - *Example:* In *Room* by Emma Donoghue, a five-year-old describes captivity without understanding what it means.

2. **Mental instability:** A narrator with psychological issues may distort reality.
   - *Example:* In *The Tell-Tale Heart* by Edgar Allan Poe, the narrator insists he is sane while describing increasingly irrational behaviour.

3. **Self-deception:** A narrator may lie to themselves (and therefore to the reader) to avoid painful truths.
   - *Example:* A character claims "I'm fine with the breakup" while their actions clearly show they are devastated.

4. **Deliberate lying:** A narrator may intentionally mislead the reader to conceal guilt or create a false impression.
   - *Example:* In *Gone Girl* by Gillian Flynn, the diary entries are deliberately fabricated.

**How do you detect an unreliable narrator?**
- Their words **contradict their actions**
- Other characters react differently from what the narrator claims
- Details do not add up or change across the story
- The narrator has a **motive** to distort the truth
- The tone feels exaggerated, defensive, or evasive

**Why do authors use unreliable narrators?**
They create suspense, force the reader to think critically, and often deliver a powerful twist when the truth is revealed.`,
    },

    // ========== DEFINISJON: FORESHADOWING AND FLASHBACK ==========
    {
      id: 'engelsk-10-39-def-3',
      type: 'definition',
      title: 'Foreshadowing and Flashback — Playing with Time',
      content: `Authors rarely tell stories in simple chronological order. **Foreshadowing** and **flashback** are two techniques that play with time to create suspense, depth, and meaning.

**Foreshadowing**
Foreshadowing is when the author gives **hints or clues** about events that will happen later in the story. It creates a feeling of anticipation, unease, or inevitability.

Types of foreshadowing:
- **Direct foreshadowing:** A clear warning or prediction. "If only I had known then what I know now, I would never have opened that door."
- **Symbolic foreshadowing:** Objects or images that hint at future events. A storm gathering on the horizon before a character's life falls apart.
- **Dialogue foreshadowing:** A character says something that gains new meaning later. "Don't worry — what's the worst that could happen?"

**Flashback (analepsis)**
A flashback interrupts the present narrative to show a scene from the **past**. It provides background, explains a character's motivation, or reveals information the reader needs to understand the present.

How flashbacks are signalled:
- A shift in verb tense (from past simple to past perfect): "She stared at the house. She had lived there as a child..."
- Trigger moments: A smell, sound, or image that reminds the character of the past
- Explicit time markers: "Twenty years earlier..."

**Flash-forward (prolepsis)**
Less common, this technique jumps ahead to show a future event before returning to the present. Creates dramatic irony when the reader knows what is coming but the character does not.

**Why do these techniques matter?**
They add **layers of meaning** to a story. Foreshadowing builds suspense. Flashbacks create empathy by showing a character's history. Together, they make narratives more complex and satisfying.`,
    },

    // ========== DEFINISJON: SHOW, DON'T TELL ==========
    {
      id: 'engelsk-10-39-def-4',
      type: 'definition',
      title: 'Show, Don\'t Tell — The Golden Rule of Creative Writing',
      content: `**"Show, don't tell"** is the principle that writers should use **concrete details, actions, and sensory language** to convey emotions, character, and atmosphere — rather than simply stating them directly.

**Telling:** "She was nervous."
**Showing:** "She twisted the ring on her finger, her eyes darting to the clock every few seconds. When the door opened, she flinched."

Both communicate the same idea — but the "showing" version is more vivid, engaging, and convincing because the reader **experiences** the nervousness through specific details.

**How to "show" effectively:**

1. **Use physical actions and body language**
   - Telling: "He was angry." Showing: "He slammed his fist on the table, rattling the coffee cups."

2. **Use sensory details (sight, sound, smell, touch, taste)**
   - Telling: "The room was old and neglected." Showing: "The wallpaper peeled in long strips, and the air tasted of dust and damp wood."

3. **Use dialogue to reveal character**
   - Telling: "She was sarcastic." Showing: "'Oh, brilliant plan,' she said, slow-clapping. 'Can't imagine how that could possibly go wrong.'"

4. **Use the environment to reflect emotion (pathetic fallacy)**
   - Telling: "She was sad after the funeral." Showing: "Rain streaked the car window as she drove home. The wipers beat a slow, steady rhythm that matched nothing inside her."

**When is "telling" acceptable?**
- For transitions and time-passing: "Three months later, they moved to London."
- For minor details not worth expanding: "The meeting was uneventful."
- When pacing requires speed: In action scenes, brief "telling" can keep the pace fast.

The skill is knowing **when to show and when to tell** — not applying the rule blindly.`,
    },

    // ========== EKSEMPEL: STREAM OF CONSCIOUSNESS ==========
    {
      id: 'engelsk-10-39-example-1',
      type: 'example',
      title: 'Example: Stream of Consciousness and Interior Monologue',
      problem: `What is stream of consciousness, and how does it differ from regular first-person narration?`,
      solution: `**Stream of consciousness** is a narrative technique that attempts to represent a character's continuous, unfiltered flow of thoughts, impressions, and associations — the way a mind actually works.

**Regular first-person narration:**
"I walked to school that morning feeling anxious about the test. I had studied, but I wasn't confident about the last chapter. The weather was grey and cold."

This is ordered, logical, and polished. Real thought is not like this.

**Stream of consciousness version:**
"Grey sky again like every morning this week and the test the test God I should have started studying earlier Chapter 7 was impossible why do they even put that in the exam cold hands forgot my gloves again Mum said don't forget but I was thinking about the test always the test and what if I blank what if I just sit there and nothing comes"

**Key features of stream of consciousness:**
- Minimal or no punctuation
- Sentence fragments and run-on sentences
- Rapid shifts between topics (just like real thought)
- Sensory impressions mixed with abstract thought
- Associations and jumps that reflect how memory and attention work

**Interior monologue** is similar but usually more structured — the character's thoughts are presented in complete sentences but still in a direct, internal voice.

**Famous examples:**
- James Joyce, *Ulysses* — the final chapter is 40+ pages without punctuation
- Virginia Woolf, *Mrs Dalloway* — shifts between characters' inner worlds
- Sylvia Plath, *The Bell Jar* — intense interior experience

**When to use it in your own writing:**
Stream of consciousness is effective for moments of high emotion, confusion, or introspection. A paragraph of stream-of-consciousness in an otherwise conventionally narrated story can create a powerful contrast.`,
    },

    // ========== EKSEMPEL: DIALOGUE TECHNIQUES ==========
    {
      id: 'engelsk-10-39-example-2',
      type: 'example',
      title: 'Example: How Dialogue Reveals Character',
      problem: `How can dialogue serve multiple purposes in a narrative beyond simply conveying information?`,
      solution: `Good dialogue does several things at once. It never just communicates facts — it reveals character, creates tension, advances the plot, and establishes relationships.

**Dialogue reveals character through:**

**1. Word choice and register**
- A professor: "I find your hypothesis intriguing, though perhaps insufficiently supported by the evidence."
- A teenager: "Dude, that's a cool idea, but like... where's the proof?"
Both say the same thing, but their language tells us about their age, education, and personality.

**2. What is NOT said (subtext)**
"How was the party?" she asked.
"Fine."
"Just fine?"
"Yeah. Fine."

The repeated "fine" and short answers suggest the party was anything but fine. The reader understands that something happened, even though the character refuses to say it.

**3. Dialogue tags and action beats**
- "I love you," he said, staring at his shoes. (The action contradicts the words — he is uncomfortable.)
- "I love you," she said, pulling him close. (The action confirms the words — she means it.)
- "I love you," he muttered, checking his phone. (The action undermines the words — he is distracted and insincere.)

**4. Interruption and silence**
- "I was going to tell you, but—" "Save it."
Interruption shows power dynamics, anger, or impatience.
- "Do you love me?" Silence. Long silence. "I need to go."
Silence can be louder than words.

**Key writing tip:** Avoid "said" replacements (exclaimed, bellowed, whispered) except when truly necessary. "Said" is invisible to the reader. Let the words and actions do the work.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-39-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-ex-1',
        number: '39.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'A story begins: "I remember the day everything changed. I was sitting in my bedroom when the phone rang." What point of view is this?',
        options: [
          {
            id: 'a',
            text: 'Second person',
            isCorrect: false,
            feedback: 'Incorrect. Second person uses "you" — "You remember the day everything changed." This text uses "I," which is first person.',
          },
          {
            id: 'b',
            text: 'Third person omniscient',
            isCorrect: false,
            feedback: 'Incorrect. Third person omniscient uses "he/she" and knows everyone\'s thoughts. This narrator says "I," indicating first person.',
          },
          {
            id: 'c',
            text: 'First person',
            isCorrect: true,
            feedback: 'Correct! The use of "I" and "my" tells us this is first-person narration. The narrator is a character in the story, telling it from their own perspective.',
          },
          {
            id: 'd',
            text: 'Third person limited',
            isCorrect: false,
            feedback: 'Incorrect. Third person limited uses "he/she" while staying close to one character. The use of "I" here indicates first person.',
          },
        ],
        solution: 'The pronouns "I" and "my" clearly indicate first-person point of view. The narrator is a character in the story, recounting events from their own perspective.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-39-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-ex-2',
        number: '39.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which is an example of "showing" rather than "telling"?',
        options: [
          {
            id: 'a',
            text: '"She was very happy."',
            isCorrect: false,
            feedback: 'Incorrect. This is "telling" — it directly states the emotion ("happy") without showing it through actions, details, or sensory language.',
          },
          {
            id: 'b',
            text: '"A grin spread across her face and she threw her arms around him, laughing."',
            isCorrect: true,
            feedback: 'Correct! This is "showing" — the reader can see and feel the happiness through concrete physical actions (grin, throwing arms, laughing) without the word "happy" ever being used.',
          },
          {
            id: 'c',
            text: '"She felt happy because she had passed the exam."',
            isCorrect: false,
            feedback: 'Incorrect. This is still "telling" — it names the emotion directly and explains the cause. "Showing" would describe her physical reaction instead.',
          },
          {
            id: 'd',
            text: '"The character experienced a positive emotional response."',
            isCorrect: false,
            feedback: 'Incorrect. This is extremely abstract "telling." Good writing uses specific, concrete details — not clinical descriptions.',
          },
        ],
        solution: '"Showing" uses concrete actions and sensory details to convey emotions rather than naming them. "A grin spread across her face and she threw her arms around him, laughing" — the reader sees and feels the happiness without being told about it.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-39-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-ex-3',
        number: '39.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is foreshadowing?',
        options: [
          {
            id: 'a',
            text: 'A scene that takes the reader back to the past',
            isCorrect: false,
            feedback: 'Incorrect. That describes a flashback (analepsis). Foreshadowing hints at future events, not past ones.',
          },
          {
            id: 'b',
            text: 'Hints or clues about events that will happen later in the story',
            isCorrect: true,
            feedback: 'Correct! Foreshadowing gives the reader subtle hints about what is to come. It creates anticipation, suspense, and a sense that events are inevitable.',
          },
          {
            id: 'c',
            text: 'A narrator who cannot be trusted',
            isCorrect: false,
            feedback: 'Incorrect. That describes an unreliable narrator. Foreshadowing is a technique for hinting at future events.',
          },
          {
            id: 'd',
            text: 'The background information provided at the beginning of a story',
            isCorrect: false,
            feedback: 'Incorrect. Background information at the start of a story is called exposition. Foreshadowing is hints about what will happen later.',
          },
        ],
        solution: 'Foreshadowing is the technique of planting hints or clues about events that will occur later in the story. It builds suspense and, when the event happens, gives the reader a satisfying sense that the story was carefully crafted.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-39-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-ex-4',
        number: '39.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'A narrator says: "Everyone loved me at that party. I was definitely the most interesting person there. People were practically lining up to talk to me." Later, another character says: "Who was that weird person standing alone in the corner all night?" What narrative technique is at work here?',
        options: [
          {
            id: 'a',
            text: 'Foreshadowing — the narrator is hinting at future events',
            isCorrect: false,
            feedback: 'Incorrect. This is not about future events. The contradiction between the narrator\'s claim and the other character\'s observation reveals something about the narrator\'s reliability.',
          },
          {
            id: 'b',
            text: 'Flashback — the story is moving back in time',
            isCorrect: false,
            feedback: 'Incorrect. Both statements are about the same event (the party). The technique involves the narrator\'s credibility, not time shifts.',
          },
          {
            id: 'c',
            text: 'Unreliable narration — the narrator\'s account is contradicted by evidence, suggesting they cannot be trusted',
            isCorrect: true,
            feedback: 'Correct! The narrator claims to be popular and interesting, but another character reveals they were standing alone. This contradiction signals that the narrator is unreliable — their self-perception does not match reality.',
          },
          {
            id: 'd',
            text: 'Stream of consciousness — the narrator\'s thoughts are flowing freely',
            isCorrect: false,
            feedback: 'Incorrect. Stream of consciousness would involve unstructured, flowing thoughts. This is structured narration that happens to be unreliable.',
          },
        ],
        solution: 'This is an unreliable narrator. The narrator\'s grandiose self-description ("everyone loved me") is directly contradicted by another character\'s observation ("standing alone in the corner"). The reader must recognise the gap between the narrator\'s version and reality.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-39-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-ex-5',
        number: '39.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'In a story, the narrator describes a beautiful summer day, then casually mentions: "That was the last good day before everything fell apart." What technique is this, and what is its effect?',
        options: [
          {
            id: 'a',
            text: 'Flashback — the narrator is remembering a past event',
            isCorrect: false,
            feedback: 'While the narrator is looking back, the key technique is the hint about future disaster. The sentence creates anticipation about what went wrong.',
          },
          {
            id: 'b',
            text: 'Foreshadowing — it hints that something bad is coming, creating suspense and a sense of impending doom',
            isCorrect: true,
            feedback: 'Correct! The phrase "the last good day before everything fell apart" is direct foreshadowing. It tells the reader that something terrible is coming, which creates suspense and changes how the reader interprets the peaceful scene — the beauty becomes poignant because we know it will not last.',
          },
          {
            id: 'c',
            text: 'Show, don\'t tell — the narrator is using sensory details to describe emotion',
            isCorrect: false,
            feedback: 'Incorrect. While describing a beautiful day might involve sensory detail, the sentence "the last good day before everything fell apart" is directly telling us something is coming — it is foreshadowing.',
          },
          {
            id: 'd',
            text: 'Third person omniscient — the narrator knows everything',
            isCorrect: false,
            feedback: 'Incorrect. Third person omniscient is a point of view, not a technique. The sentence demonstrates foreshadowing — hinting at future events.',
          },
        ],
        solution: 'This is direct foreshadowing. The narrator explicitly warns that something bad is coming ("the last good day before everything fell apart"). This transforms the reader\'s experience of the beautiful scene — it becomes bittersweet because we know it will not last.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-39-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-ex-6',
        number: '39.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'In a dialogue scene, a character responds to "How are you?" with: "Great. Never better." But the author adds: "He said, not looking up from the table, his fingers shredding a napkin into tiny pieces." What literary principle is the author applying?',
        options: [
          {
            id: 'a',
            text: 'Show, don\'t tell — the physical actions (not looking up, shredding the napkin) contradict the words and reveal the character\'s true emotional state',
            isCorrect: true,
            feedback: 'Correct! The author shows us that the character is NOT "great" through physical actions that contradict his words. The averted eyes and nervous destruction of the napkin reveal anxiety or distress. The reader understands the truth without being told directly.',
          },
          {
            id: 'b',
            text: 'Foreshadowing — the napkin-shredding hints at future violence',
            isCorrect: false,
            feedback: 'Incorrect. The napkin-shredding is not foreshadowing violence — it is a present-tense detail that reveals the character\'s current emotional state. This is showing rather than telling.',
          },
          {
            id: 'c',
            text: 'Unreliable narration — the narrator is lying about how the character feels',
            isCorrect: false,
            feedback: 'Incorrect. The narrator is not lying — the narrator faithfully reports both what the character says AND what he does. It is the *character* who is hiding his feelings, and the narrator shows us the truth through actions.',
          },
          {
            id: 'd',
            text: 'Stream of consciousness — we are seeing the character\'s internal thoughts',
            isCorrect: false,
            feedback: 'Incorrect. We are not seeing the character\'s thoughts — we are seeing his physical actions. Stream of consciousness would show us what he is thinking.',
          },
        ],
        solution: 'This is "show, don\'t tell" applied through the contrast between dialogue and action. The character says he is fine; his body says otherwise. By showing the averted gaze and nervous napkin-shredding, the author lets the reader perceive the truth without stating it.',
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-39-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-ex-7',
        number: '39.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'An author writes a story about a war from the perspective of a six-year-old child who describes soldiers as "the loud men with heavy boots" and bombs as "the sky breaking." Why might the author choose this perspective rather than an adult narrator?',
        options: [
          {
            id: 'a',
            text: 'Because children use simpler language, making the story easier to read',
            isCorrect: false,
            feedback: 'While the language is simpler, the purpose is not to make the story "easier." The child\'s perspective actually makes the story more complex by creating a gap between what the narrator understands and what the reader understands.',
          },
          {
            id: 'b',
            text: 'Because the child\'s innocent perspective creates dramatic irony — the reader understands the horror that the narrator does not, which makes the story more emotionally devastating than a direct adult account would be',
            isCorrect: true,
            feedback: 'Correct! The child narrator creates dramatic irony: the reader knows what "the sky breaking" really means (bombing), but the child does not. This gap between innocence and reality makes the horror more powerful. The child\'s failure to understand becomes itself a statement about the senselessness of war.',
          },
          {
            id: 'c',
            text: 'Because the author wants to show that war is not as bad as adults think',
            isCorrect: false,
            feedback: 'Incorrect. The child\'s innocent perspective does not minimise the horror — it intensifies it. The reader fills in the terrible reality behind the child\'s innocent descriptions.',
          },
          {
            id: 'd',
            text: 'Because the author could not find enough research material to write from an adult soldier\'s perspective',
            isCorrect: false,
            feedback: 'Incorrect. The choice of a child narrator is an artistic and strategic decision, not a matter of research limitations. It creates a specific emotional and intellectual effect.',
          },
        ],
        solution: 'A child narrator creates dramatic irony — the reader understands what the child cannot. Descriptions like "the sky breaking" are more devastating than the word "bombing" because the reader must mentally translate the innocent language into terrible reality. The gap between the child\'s innocence and the horror of war becomes the story\'s most powerful element.',
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-39-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-ex-8',
        number: '39.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'A student writes a short story for an exam. The opening reads: "Sarah was sad. She was sitting in a dark room. She was lonely and missed her friend." The teacher comments: "This is all \'telling.\' Try to \'show\' instead." Which revision best applies the "show, don\'t tell" principle?',
        options: [
          {
            id: 'a',
            text: '"Sarah felt very, extremely sad. She was sitting in an incredibly dark room. She was deeply lonely and really missed her friend terribly."',
            isCorrect: false,
            feedback: 'Incorrect. Adding intensifiers (very, extremely, incredibly, deeply, really, terribly) does not convert "telling" to "showing." It is still telling — just louder. "Showing" requires concrete details, actions, and sensory language.',
          },
          {
            id: 'b',
            text: '"Sarah experienced sadness in the context of the dark room. Her psychological state was characterised by loneliness and a desire for her friend\'s presence."',
            isCorrect: false,
            feedback: 'Incorrect. This is academic-sounding "telling" — it describes the emotion abstractly rather than showing it. Good creative writing uses specific, concrete details.',
          },
          {
            id: 'c',
            text: '"Sarah stared at her phone screen — no new messages. The room had gone dark hours ago, but she hadn\'t moved to turn on the light. On the desk, a photo of her and Lily from last summer caught the glow of the screen. She pressed her thumb against it, then set the phone face-down."',
            isCorrect: true,
            feedback: 'Correct! This revision never uses the words "sad," "lonely," or "missed." Instead, the reader infers these emotions from concrete details: checking the phone (hoping for contact), not bothering with the light (apathy/depression), the photo of a friend (missing someone), pressing the photo then hiding the screen (emotional pain). This is powerful "showing."',
          },
          {
            id: 'd',
            text: '"Sarah was the saddest person in the world. No one had ever been as lonely as Sarah. She missed her friend more than words could express."',
            isCorrect: false,
            feedback: 'Incorrect. This is hyperbolic "telling." Claiming "no one had ever been as lonely" and "more than words could express" are still direct statements about emotion, just exaggerated. "Showing" requires specific actions and details.',
          },
        ],
        solution: 'Option C demonstrates "show, don\'t tell" because it conveys sadness, loneliness, and missing a friend entirely through concrete details and actions — without ever naming those emotions. The reader experiences the character\'s state through specific images (dark room, unanswered phone, photo, the gesture of pressing the image) rather than being told about it.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 40: English Language History
// ============================================================================

export const CHAPTER_ENGELSK_10_40: TextbookChapter = {
  id: 'engelsk-10-40',
  courseId: 'engelsk-10',
  chapterNumber: '40',
  title: 'English Language History',
  description: 'Trace the fascinating history of the English language from its Anglo-Saxon roots through the Norman Conquest, Shakespeare, and the printing press to the global language of today. Explore etymology, loanwords, and how English continues to evolve.',
  estimatedMinutes: 85,
  competenceGoals: [
    'gjøre rede for utviklingen av norsk språk og sammenhengen mellom språk, kultur og identitet',
    'utforske og beskrive levemåter, samfunnsforhold og verdier i ulike engelskspråklige land',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'engelsk-10-40-intro',
      type: 'text',
      content: `## English Language History

The English you speak today is the product of **over 1,500 years of invasions, migrations, conquests, trade, colonisation, and cultural exchange**. It has been shaped by Anglo-Saxon warriors, Viking raiders, Norman nobles, Renaissance scholars, colonial administrators, and internet users. No other language has borrowed so freely from so many sources.

Understanding the history of English helps you:
- **Understand why English spelling is so irregular** — it preserves layers of history from different languages and periods
- **Expand your vocabulary** by recognising word roots from Latin, Greek, French, and Norse
- **Appreciate the connections** between English, Norwegian, and other Germanic languages
- **Think critically** about how language is connected to power, culture, and identity

**The timeline at a glance:**
- **450–1100 AD:** Old English (Anglo-Saxon period)
- **1100–1500:** Middle English (Norman French influence)
- **1500–1700:** Early Modern English (Shakespeare, printing press)
- **1700–present:** Modern English (colonialism, industrialisation, globalisation)

Each period transformed English in profound ways. By the end of this chapter, you will be able to look at an English word and make an educated guess about where it came from and when it entered the language.`,
    },

    // ========== DEFINISJON: OLD ENGLISH ==========
    {
      id: 'engelsk-10-40-def-1',
      type: 'definition',
      title: 'Old English (450–1100 AD) — The Anglo-Saxon Foundation',
      content: `**Old English** (also called Anglo-Saxon) is the earliest form of English. It was brought to Britain by **Germanic tribes** — the Angles, Saxons, and Jutes — who migrated from what is now northern Germany and Denmark starting around 450 AD.

**What did Old English look like?**
Old English is almost unrecognisable to modern English speakers. Here is the opening of the Lord's Prayer in Old English:

*"Fæder ure, þu þe eart on heofonum, si þin nama gehalgod."*
(Our Father, who art in heaven, hallowed be thy name.)

**Key features of Old English:**
- **Highly inflected** — nouns, adjectives, and verbs had many different endings depending on their grammatical function (like modern German or Norwegian)
- **Germanic vocabulary** — almost entirely Germanic, with very few foreign loanwords
- **The letter "þ" (thorn)** — represented the "th" sound, which is why old signs sometimes say "Ye Olde Shoppe" — the "Y" was actually a misread thorn

**Surviving Old English words in Modern English:**
The most basic, everyday English words come from Old English:
- *house, water, bread, mother, father, child, love, eat, drink, sleep, good, man, woman, earth, sky, sun, moon, day, night, friend*

These are the words we use most — the foundation of English vocabulary.

**Viking influence (8th–11th centuries):**
Norse-speaking Vikings settled in large parts of England, bringing many Old Norse words that are still used today:
- *sky, egg, window, husband, law, they, them, their, get, give, take, want, wrong, happy, ugly, skill*

**Connection to Norwegian:**
Old English and Old Norse were closely related Germanic languages. This is why many basic English words resemble Norwegian: *water/vann, house/hus, man/mann, mother/mor, green/grønn*.`,
    },

    // ========== DEFINISJON: MIDDLE ENGLISH ==========
    {
      id: 'engelsk-10-40-def-2',
      type: 'definition',
      title: 'Middle English (1100–1500) — The Norman Revolution',
      content: `The most dramatic transformation in the history of English came in **1066**, when **William the Conqueror** from Normandy (France) invaded England and became king. The **Norman Conquest** changed English forever.

**What happened after 1066?**
- The **ruling class** (kings, nobles, bishops, judges) spoke **Norman French**
- The **common people** continued speaking **English**
- **Latin** remained the language of the Church and scholarship
- England became a **trilingual society**: French for power, Latin for learning, English for everyday life

**The lasting effect: French words in English**
Over the next 300 years, approximately **10,000 French words** entered English. They tended to be words associated with **power, culture, law, and refinement**:

| Domain | French-origin words |
|--------|-------------------|
| Government | parliament, justice, authority, sovereign, nation, state |
| Law | judge, jury, crime, prison, verdict, attorney |
| Military | army, battle, soldier, siege, defence, enemy |
| Food (upper class) | beef, pork, mutton, poultry, sauce, dinner |
| Art and culture | art, beauty, music, literature, poet, romance |
| Religion | religion, prayer, saint, miracle, sermon |

**The famous food divide:**
The animals were tended by English-speaking peasants, so they kept their English names: *cow, pig, sheep, chicken*. But the meat was served to French-speaking nobles, so the food got French names: *beef (boeuf), pork (porc), mutton (mouton), poultry (poulet)*.

**Middle English in literature:**
Geoffrey Chaucer's *The Canterbury Tales* (c. 1390) is the most famous Middle English text:
*"Whan that Aprille with his shoures soote / The droghte of Marche hath perced to the roote"*
(When April with its sweet showers / has pierced the drought of March to the root)

This is much more recognisable than Old English, but still requires some effort to read.`,
    },

    // ========== DEFINISJON: EARLY MODERN AND MODERN ENGLISH ==========
    {
      id: 'engelsk-10-40-def-3',
      type: 'definition',
      title: 'Early Modern English (1500–1700) — Shakespeare and the Printing Press',
      content: `Two developments transformed English in this period: the **printing press** and the **Renaissance**.

**The printing press (1476)**
William Caxton set up the first English printing press in 1476. This was revolutionary because:
- Books could now be **mass-produced**, making literacy more widespread
- A **standard written form** of English began to emerge (based on London English)
- Spelling became more **fixed** — but it was fixed at a time when pronunciation was changing, which is why English spelling is so inconsistent today

**The Great Vowel Shift (1400–1700)**
During this period, English long vowels dramatically changed their pronunciation. For example:
- "name" used to rhyme with "comma" → shifted to its current pronunciation
- "see" used to sound like "say" → shifted to the current "ee" sound
- "moon" used to sound like "moan" → shifted to the current "oo" sound

The spelling was already fixed by the printing press, but the pronunciation kept changing — which is why English spelling often does not match pronunciation.

**Shakespeare and new words (1564–1616)**
William Shakespeare invented or first recorded approximately **1,700 English words**, many of which are still in daily use:
- *lonely, generous, gloomy, suspicious, amazement, assassination, bedroom, eyeball, moonbeam, bloodstained, cold-blooded, break the ice*

He also popularised many phrases:
- "All that glitters is not gold"
- "Wild goose chase"
- "Wear your heart on your sleeve"
- "The world is your oyster"

**Latin and Greek scholarly borrowings:**
The Renaissance brought a flood of Latin and Greek words for abstract and scientific concepts:
- *education, atmosphere, skeleton, thermometer, democracy, philosophy, biology, psychology*

**The King James Bible (1611)**
This widely read translation standardised many English expressions:
- "The salt of the earth," "a labour of love," "the writing on the wall," "a wolf in sheep's clothing"`,
    },

    // ========== DEFINISJON: MODERN ENGLISH AND LOANWORDS ==========
    {
      id: 'engelsk-10-40-def-4',
      type: 'definition',
      title: 'Modern English — A Global Borrowing Machine',
      content: `Modern English (1700–present) has continued to absorb words from languages around the world, reflecting Britain's colonial history and the global exchange of culture, food, and ideas.

**Loanwords from around the world:**

| Language | Loanwords in English |
|----------|---------------------|
| Hindi/Urdu | jungle, shampoo, pyjamas, bungalow, thug, avatar, guru |
| Arabic | algebra, algorithm, alcohol, cotton, magazine, zero, safari |
| Japanese | tsunami, karate, emoji, tofu, typhoon, manga |
| Spanish | tornado, mosquito, plaza, ranch, guerrilla, canyon |
| Italian | piano, volcano, balcony, opera, pizza, espresso |
| Dutch | cookie, yacht, landscape, boss, coleslaw |
| Malay | ketchup, bamboo, gong, orangutan |
| Norwegian/Scandinavian | ski, fjord, slalom, ombudsman, saga |
| African languages | banana, zombie, jazz, okra, voodoo |
| Australian Aboriginal | kangaroo, boomerang, budgerigar |

**Etymology — the origin of words:**
**Etymology** is the study of word origins and how their meanings have changed over time.

Knowing etymology helps you:
- Understand unfamiliar words by recognising their roots
- See connections between related words
- Appreciate the cultural history embedded in vocabulary

**Examples of surprising etymologies:**
- **"salary"** comes from Latin *salarium* — "salt money," because Roman soldiers were partly paid in salt
- **"nice"** originally meant "foolish" or "ignorant" (from Latin *nescius*) — it gradually shifted meaning over centuries
- **"disaster"** comes from Italian *disastro* — literally "bad star," reflecting the belief that misfortune was caused by unfavourable astrological alignments

**English today:**
English continues to evolve rapidly. New words enter the language constantly from technology (*blog, hashtag, selfie, livestream*), social movements (*woke, cancel culture*), and global culture (*K-pop, anime, cosplay*). The internet has accelerated language change more than any previous technology.`,
    },

    // ========== EKSEMPEL: TRACING A WORD'S HISTORY ==========
    {
      id: 'engelsk-10-40-example-1',
      type: 'example',
      title: 'Example: Tracing a Word Through History',
      problem: `Trace the history of the word "school" from its origins to Modern English.`,
      solution: `**Ancient Greek: σχολή (scholē)**
Originally meant **"leisure"** or **"free time."** In ancient Greece, education was a privilege of those who had leisure — those who did not need to work. So *scholē* came to mean the discussions and learning that took place during free time.

**Latin: schola**
The Romans borrowed the Greek word as *schola*, meaning a place of instruction or a group of learners.

**Old English: scōl**
The word entered Old English through Latin, brought by Christian missionaries and the Church, which ran the first schools in England.

**Middle English: scole**
The spelling shifted during the Middle English period, influenced by French.

**Modern English: school**
The spelling was standardised with the "ch" representing the original Greek /k/ sound (as in "scholar," "scheme").

**The irony:**
A word that originally meant "leisure" and "free time" now refers to a place where young people are required to spend most of their day working. The meaning has essentially reversed over 2,500 years.

**What this example shows:**
Words are not static — they travel across languages and centuries, changing their pronunciation, spelling, and meaning along the way. Understanding etymology is like archaeology for language.`,
    },

    // ========== EKSEMPEL: ENGLISH AND NORWEGIAN CONNECTIONS ==========
    {
      id: 'engelsk-10-40-example-2',
      type: 'example',
      title: 'Example: The English-Norwegian Family Connection',
      problem: `English and Norwegian are both Germanic languages. What are the historical connections, and why do some words look so similar?`,
      solution: `English and Norwegian share a common ancestor: **Proto-Germanic**, a language spoken around 500 BC in Scandinavia and northern Europe. Over time, Proto-Germanic split into different branches:

**North Germanic** → Old Norse → Norwegian, Swedish, Danish, Icelandic
**West Germanic** → Old English, Old High German → English, German, Dutch

Because they share this ancestry, many basic words are remarkably similar:

| English | Norwegian | Proto-Germanic root |
|---------|-----------|-------------------|
| water | vann | *watōr |
| house | hus | *hūsą |
| mother | mor | *mōdēr |
| father | far | *fadēr |
| fish | fisk | *fiskaz |
| green | grønn | *grōniz |
| come | komme | *kwemaną |
| drink | drikke | *drinkaną |
| night | natt | *nahtō |

**The Viking connection made it even closer:**
When Norse-speaking Vikings settled in England (8th–11th centuries), they brought hundreds of words from Old Norse into Old English. Some of the most basic English words are actually Norse in origin:
- *they, them, their* (replacing the Old English pronouns)
- *sky, window, egg, husband, law, knife, wrong, happy*

**Fun comparison for Norwegian students:**
- English "window" = Norwegian "vindu" — both from Old Norse *vindauga* ("wind-eye")
- English "husband" = Norwegian "husbond" — from Old Norse *húsbóndi* ("house-master")
- English "law" = Norwegian "lov" — from Old Norse *lǫg*

This shared heritage is one reason Norwegian speakers often find English relatively easy to learn compared to speakers of non-Germanic languages.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'engelsk-10-40-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-ex-1',
        number: '40.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What event in 1066 dramatically changed the English language?',
        options: [
          {
            id: 'a',
            text: 'The invention of the printing press',
            isCorrect: false,
            feedback: 'Incorrect. The printing press was introduced to England in 1476 by William Caxton. The transformative event of 1066 was a military invasion.',
          },
          {
            id: 'b',
            text: 'The Norman Conquest — William the Conqueror invaded England from France',
            isCorrect: true,
            feedback: 'Correct! The Norman Conquest of 1066 brought French-speaking rulers to England, which led to approximately 10,000 French words entering the English language over the following centuries.',
          },
          {
            id: 'c',
            text: 'Shakespeare began writing his plays',
            isCorrect: false,
            feedback: 'Incorrect. Shakespeare was born in 1564 — nearly 500 years after 1066. The event that changed English in 1066 was the Norman Conquest.',
          },
          {
            id: 'd',
            text: 'The Viking invasions began',
            isCorrect: false,
            feedback: 'Incorrect. Viking raids on England began in 793 AD, nearly 300 years before 1066. The event of 1066 was the Norman Conquest from France.',
          },
        ],
        solution: 'The Norman Conquest of 1066 was the most transformative event in English language history. When the French-speaking Normans conquered England, they brought thousands of French words into English, fundamentally reshaping its vocabulary.',
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'engelsk-10-40-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-ex-2',
        number: '40.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which of these everyday English words comes from Old English (Anglo-Saxon)?',
        options: [
          {
            id: 'a',
            text: 'Parliament',
            isCorrect: false,
            feedback: 'Incorrect. "Parliament" comes from French (*parler* = to speak). It entered English after the Norman Conquest.',
          },
          {
            id: 'b',
            text: 'Philosophy',
            isCorrect: false,
            feedback: 'Incorrect. "Philosophy" comes from Greek (*philosophia* = love of wisdom). It entered English through Latin during the Renaissance.',
          },
          {
            id: 'c',
            text: 'Water',
            isCorrect: true,
            feedback: 'Correct! "Water" is one of the oldest English words, coming from Old English *wæter*, which traces back to Proto-Germanic *watōr*. The most basic, everyday English words tend to be Germanic in origin.',
          },
          {
            id: 'd',
            text: 'Justice',
            isCorrect: false,
            feedback: 'Incorrect. "Justice" comes from French (*justice*), which came from Latin (*justitia*). It entered English after the Norman Conquest.',
          },
        ],
        solution: '"Water" comes from Old English *wæter*. The most basic, frequently used English words (house, mother, eat, drink, sleep, love, child) tend to be Old English in origin. French and Latin words tend to be more formal or specialised.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'engelsk-10-40-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-ex-3',
        number: '40.3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Why is English spelling so inconsistent (e.g., "enough," "through," "though" all have different pronunciations of "-ough")?',
        options: [
          {
            id: 'a',
            text: 'Because English has no spelling rules',
            isCorrect: false,
            feedback: 'Incorrect. English does have spelling patterns, but they are complicated by historical layers. The inconsistency has a specific historical explanation.',
          },
          {
            id: 'b',
            text: 'Because the printing press standardised spelling before the Great Vowel Shift finished changing pronunciation',
            isCorrect: true,
            feedback: 'Correct! Spelling was fixed by the printing press in the 15th century, but pronunciation continued to change during the Great Vowel Shift (1400–1700). The result is that spelling reflects older pronunciations that no longer match how words sound.',
          },
          {
            id: 'c',
            text: 'Because English deliberately adopted French spelling for all words',
            isCorrect: false,
            feedback: 'Incorrect. While some French spellings were adopted, the main reason for inconsistency is the gap between when spelling was standardised and when pronunciation stopped changing.',
          },
          {
            id: 'd',
            text: 'Because Shakespeare chose unusual spellings for artistic effect',
            isCorrect: false,
            feedback: 'Incorrect. Shakespeare did not standardise English spelling. The inconsistency predates Shakespeare and is primarily due to the printing press fixing spelling before sound changes were complete.',
          },
        ],
        solution: 'English spelling was standardised by the printing press (1476), but pronunciation continued to change during the Great Vowel Shift (1400–1700). This created a permanent gap between how words are written and how they sound.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'engelsk-10-40-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-ex-4',
        number: '40.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'In English, the animal is called "pig" (Germanic origin) but the meat is called "pork" (French origin). What historical situation explains this pattern?',
        options: [
          {
            id: 'a',
            text: 'The French invented different cooking methods that required new names',
            isCorrect: false,
            feedback: 'Incorrect. The pattern is not about cooking methods but about social class. The French words entered English because of the social structure after the Norman Conquest.',
          },
          {
            id: 'b',
            text: 'After the Norman Conquest, English-speaking peasants raised the animals (using English names) while French-speaking nobles ate the meat (using French names)',
            isCorrect: true,
            feedback: 'Correct! This is one of the most famous examples of how the Norman Conquest affected English vocabulary. The social divide between English-speaking farmers and French-speaking aristocrats left a lasting mark on the language: cow/beef, pig/pork, sheep/mutton, chicken/poultry.',
          },
          {
            id: 'c',
            text: 'English originally had no words for meat, so French words were needed to fill the gap',
            isCorrect: false,
            feedback: 'Incorrect. Old English had words for meat (e.g., *flǣsc* = flesh). The French words replaced them in upper-class dining contexts because of the social prestige of French after the Conquest.',
          },
          {
            id: 'd',
            text: 'The words were borrowed from French during the Renaissance for scientific classification',
            isCorrect: false,
            feedback: 'Incorrect. These food words entered English much earlier, during the Middle English period (1100–1500), as a direct result of the Norman Conquest, not during the Renaissance.',
          },
        ],
        solution: 'After the Norman Conquest, England had two social layers: English-speaking farmers who raised animals (cow, pig, sheep) and French-speaking nobles who ate the meat (beef, pork, mutton). This social divide is preserved in the language over 900 years later.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'engelsk-10-40-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-ex-5',
        number: '40.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'The English words "they," "them," and "their" actually come from Old Norse, not from Old English. Why is it remarkable that English borrowed its pronouns from another language?',
        options: [
          {
            id: 'a',
            text: 'Pronouns are common words, and common words are rarely borrowed from other languages — this shows how deeply Norse influenced English',
            isCorrect: true,
            feedback: 'Correct! Languages almost never borrow basic grammar words like pronouns — they are among the most resistant to change. The fact that English replaced its own third-person plural pronouns with Norse ones shows an extraordinarily deep level of language contact between the Anglo-Saxons and the Vikings.',
          },
          {
            id: 'b',
            text: 'It is not remarkable — languages borrow pronouns all the time',
            isCorrect: false,
            feedback: 'Incorrect. Pronoun borrowing is extremely rare in the history of world languages. Basic grammatical words are usually the last to change. This makes the Norse borrowing truly exceptional.',
          },
          {
            id: 'c',
            text: 'The Norse pronouns sounded better than the English ones',
            isCorrect: false,
            feedback: 'Incorrect. Languages do not borrow words based on how they "sound." The replacement happened because Norse and English speakers were living closely together, and the Norse pronouns were less ambiguous than the Old English ones.',
          },
          {
            id: 'd',
            text: 'The English pronouns were lost when texts were destroyed during Viking raids',
            isCorrect: false,
            feedback: 'Incorrect. Words exist in spoken language, not just in texts. Destroying manuscripts does not remove words from a language. The replacement was a result of deep social contact between Norse and English speakers.',
          },
        ],
        solution: 'Pronouns are core grammar words that languages almost never borrow. The fact that English replaced its own pronouns with Norse ones (they/them/their instead of the Old English hie/him/hiera) demonstrates an extraordinarily deep level of contact between Anglo-Saxon and Norse speakers.',
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: 'engelsk-10-40-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-ex-6',
        number: '40.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'The word "salary" comes from the Latin word "salarium," meaning "salt money." What does this etymology reveal about ancient Roman culture?',
        options: [
          {
            id: 'a',
            text: 'Romans did not use money — they only traded in salt',
            isCorrect: false,
            feedback: 'Incorrect. Romans did use coins. However, salt was so valuable that it was sometimes used as a form of payment or was included as part of soldiers\' compensation.',
          },
          {
            id: 'b',
            text: 'Salt was extremely valuable in the ancient world — so valuable that it was connected to payment and wages',
            isCorrect: true,
            feedback: 'Correct! Salt was essential for preserving food in the ancient world and was a highly valuable commodity. The word "salary" preserves this cultural reality. Etymology reveals how historical economic and social conditions are embedded in language.',
          },
          {
            id: 'c',
            text: 'Roman soldiers were forced to eat only salt as punishment',
            isCorrect: false,
            feedback: 'Incorrect. The connection between salt and salary is about value, not punishment. Salt was a precious commodity used for food preservation.',
          },
          {
            id: 'd',
            text: 'The word has no real connection to salt — it is just a coincidence',
            isCorrect: false,
            feedback: 'Incorrect. Etymology is a rigorous discipline. The connection between "salary" and "salt" (Latin *sal*) is well-documented and reflects real historical economic practices.',
          },
        ],
        solution: 'The etymology of "salary" reveals that salt was an extremely valuable commodity in the ancient world, essential for preserving food. The word preserves a piece of Roman economic history in modern language. Etymology is like archaeology for words — it uncovers the cultural realities behind everyday vocabulary.',
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: 'engelsk-10-40-ex-7',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-ex-7',
        number: '40.7',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'English has three near-synonyms for the same concept, each from a different language layer: "kingly" (Old English), "royal" (French), and "regal" (Latin). What does this pattern reveal about the structure of the English vocabulary?',
        options: [
          {
            id: 'a',
            text: 'English has too many words and should simplify by removing duplicates',
            isCorrect: false,
            feedback: 'Incorrect. These words are not exact duplicates — each has a slightly different connotation and register. "Kingly" feels homely and direct, "royal" feels official, and "regal" feels elegant and literary.',
          },
          {
            id: 'b',
            text: 'English vocabulary has distinct historical layers — Germanic words tend to be simple and direct, French words tend to be formal, and Latin words tend to be scholarly — giving English an unusually rich range of synonyms with different registers',
            isCorrect: true,
            feedback: 'Correct! English\'s layered vocabulary is one of its most distinctive features. Germanic words feel earthy and direct (kingly, freedom, handbook), French words feel official and refined (royal, liberty, manual), and Latin words feel scholarly and abstract (regal, liberation, compendium). This gives writers an extraordinary range of tonal choice.',
          },
          {
            id: 'c',
            text: 'All three words mean exactly the same thing and can be used interchangeably',
            isCorrect: false,
            feedback: 'Incorrect. While they share a core meaning, each has a different connotation and register. You would describe a fairy-tale character as "kingly," a palace as "royal," and a posture as "regal." The subtle differences matter.',
          },
          {
            id: 'd',
            text: 'This pattern exists because the English gave up their own word and replaced it with French and Latin alternatives',
            isCorrect: false,
            feedback: 'Incorrect. The English word ("kingly") was not replaced — it survived alongside the French and Latin additions. English accumulated layers rather than replacing one with another.',
          },
        ],
        solution: 'English\'s three-layered vocabulary (Germanic + French + Latin) gives it an unusually rich system of near-synonyms with different registers. Germanic words are direct and concrete, French words are formal and official, Latin words are scholarly and abstract. This layering is a direct result of English\'s historical contact with Norse, French, and Latin.',
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: 'engelsk-10-40-ex-8',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-ex-8',
        number: '40.8',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Some scholars argue that the English language\'s history of absorbing words from other languages is connected to England\'s history of being invaded and later becoming a colonial power. What is the strongest version of this argument?',
        options: [
          {
            id: 'a',
            text: 'England was invaded so often that English had no choice but to accept foreign words',
            isCorrect: false,
            feedback: 'Incorrect. Languages do not mechanically absorb words from every invader. Japanese was barely affected by American occupation. The relationship between invasion and language change is more complex.',
          },
          {
            id: 'b',
            text: 'English borrowed words because English speakers were not intelligent enough to create their own vocabulary',
            isCorrect: false,
            feedback: 'Incorrect. Vocabulary borrowing has nothing to do with intelligence. All languages borrow words. English\'s extensive borrowing reflects its particular social and political history.',
          },
          {
            id: 'c',
            text: 'The patterns of borrowing mirror patterns of power — English absorbed words from its conquerors (Norse, French) in the medieval period, then absorbed words from its colonies (Hindi, Arabic, Malay) in the imperial period, reflecting how language change is shaped by political and economic relationships',
            isCorrect: true,
            feedback: 'Correct! Language change does not happen in a vacuum — it reflects social, political, and economic power structures. English was shaped by the languages of those who conquered it, and later it absorbed vocabulary from cultures it colonised. The direction and nature of borrowing tells a political story.',
          },
          {
            id: 'd',
            text: 'English is the only language that borrows words from other languages',
            isCorrect: false,
            feedback: 'Incorrect. All languages borrow words. Japanese, for example, has thousands of English loanwords. What makes English distinctive is the scale and variety of its borrowing, not the fact that it borrows at all.',
          },
        ],
        solution: 'Vocabulary borrowing reflects power relationships. Medieval English absorbed words from conquerors (Norse, French). Imperial English absorbed words from colonised peoples (Hindi, Arabic, Malay, and many others). The history of a language is inseparable from the political history of its speakers. Understanding this connection is essential for critical language awareness.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT: Samlet array for del 9
// ============================================================================

export const ENGELSK_10_DEL9_CHAPTERS = [
  CHAPTER_ENGELSK_10_35,
  CHAPTER_ENGELSK_10_36,
  CHAPTER_ENGELSK_10_37,
  CHAPTER_ENGELSK_10_38,
  CHAPTER_ENGELSK_10_39,
  CHAPTER_ENGELSK_10_40,
];
