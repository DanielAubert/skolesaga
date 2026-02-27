/**
 * Engelsk 10. klasse - Narrative Versions Part 9 (Chapters 35-40)
 *
 * Engaging, narrative versions of chapters optimized for reading/listening.
 * Each narrative version links back to the original chapter via linkedChapterId.
 *
 * Covers: Language & Media — Film and Visual Media, World Englishes,
 *         Pronunciation and Phonetics, Informal English and Idioms,
 *         Narrative Techniques, English Language History
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 35 NARRATIVE: Film and Visual Media
// ============================================================================

export const CHAPTER_ENGELSK_10_35_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-35-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '35',
  title: 'Film and Visual Media',
  subtitle: 'Narrativ versjon',
  description: 'Learn to read films the way you read texts, understanding how shot types, camera angles, editing, and sound combine to tell stories visually.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-35',
  content: [
    {
      id: 'engelsk-10-35-n-intro',
      type: 'text',
      content: `## Seeing Is Not Understanding

You have watched thousands of hours of film, television, and video content. You have laughed, cried, been terrified, and been inspired by what you have seen on screen. But have you ever stopped to ask yourself how the filmmakers achieved those effects? How did they make you feel exactly what they wanted you to feel?

Film is a language. Just as writers use words, sentences, and paragraphs to create meaning, filmmakers use shots, angles, edits, and sound. And just as you can read a text more richly when you understand literary devices, you can watch a film more richly when you understand film language. A close-up of a character's face is not just a big face on screen; it is a deliberate choice to create intimacy and reveal emotion. A sudden cut to silence is not a technical error; it is a tool for creating shock or tension.

In this chapter, we will learn the vocabulary and grammar of film language. You will discover how shot types communicate meaning, how camera angles shape your perception, how editing controls the rhythm of storytelling, and how sound manipulates your emotions. By the end, you will never watch a film the same way again, and you will have the analytical tools to discuss visual media with precision and insight.`,
    },
    {
      id: 'engelsk-10-35-n-section1',
      type: 'text',
      content: `## Shot Types and Camera Angles

The **shot type** determines how much of the scene you see, and this choice carries enormous meaning.

An **extreme long shot** (or establishing shot) shows a vast landscape or cityscape, often with tiny human figures. It establishes location and can create feelings of scale, isolation, or insignificance. When a film opens with a tiny figure crossing a vast desert, you immediately feel the character's vulnerability.

A **long shot** shows a character's full body within their environment. It establishes the relationship between person and place and gives context for the action. A character standing alone in a crowded room, visible in full from a distance, might convey loneliness even in the midst of people.

A **medium shot** shows a character from roughly the waist up. This is the most common shot for dialogue scenes because it shows facial expressions while maintaining some physical context. It feels natural, like the distance at which you would stand when having a conversation.

A **close-up** fills the screen with a face or object. It creates intimacy and intensity, forcing you to focus on details: a trembling lip, a tearful eye, a clenched fist. Close-ups reveal what characters feel, often more honestly than what they say.

An **extreme close-up** isolates a tiny detail: an eye, a drop of sweat, a trigger being pulled. It directs your attention with surgical precision and creates tension or significance. If the camera shows you an extreme close-up of a key, that key will be important later.

**Camera angles** shape how you feel about what you see. A **low angle** (camera looking up at a character) makes them appear powerful, dominant, or threatening. A **high angle** (camera looking down) makes a character appear small, vulnerable, or weak. An **eye-level angle** feels neutral and natural. A **Dutch angle** (camera tilted to one side) creates a sense of unease, instability, or disorientation, which is why it appears so often in thriller and horror films.

**Camera movement** adds another dimension. A **tracking shot** follows a character, creating a sense of journey or pursuit. A **zoom** draws attention to a detail or creates a shift in focus. A **handheld camera** creates a documentary-like feeling of immediacy and chaos. Each movement is a choice that shapes your experience.`,
    },
    {
      id: 'engelsk-10-35-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on shot types and camera angles:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-35-n-quiz1-q0',
            task: 'What effect does a low-angle shot typically create?',
            options: [
              { id: 'a', text: 'It makes the character appear small and vulnerable', isCorrect: false },
              { id: 'b', text: 'It makes the character appear powerful, dominant, or threatening', isCorrect: true },
              { id: 'c', text: 'It creates a natural, neutral feeling', isCorrect: false },
              { id: 'd', text: 'It shows the entire setting', isCorrect: false },
            ],
            solution: 'A low-angle shot (camera looking up) makes the subject appear larger, more powerful, or more imposing. It is often used to show authority, dominance, or threat.',
          },
          {
            id: 'engelsk-10-35-n-quiz1-q1',
            task: 'Why might a filmmaker use an extreme close-up of an object?',
            options: [
              { id: 'a', text: 'Because the camera is broken and cannot zoom out', isCorrect: false },
              { id: 'b', text: 'To signal that the object is significant and will be important to the story', isCorrect: true },
              { id: 'c', text: 'To save money on set design', isCorrect: false },
              { id: 'd', text: 'Because every film must include at least one extreme close-up', isCorrect: false },
            ],
            solution: 'An extreme close-up isolates a tiny detail and forces the audience to notice it. When the camera shows you an object in extreme close-up, it is signalling that this object is significant and will matter later in the story.',
          },
          {
            id: 'engelsk-10-35-n-quiz1-q2',
            task: 'What feeling does a "Dutch angle" (tilted camera) typically create?',
            options: [
              { id: 'a', text: 'Calm and stability', isCorrect: false },
              { id: 'b', text: 'Comedy and lightness', isCorrect: false },
              { id: 'c', text: 'Unease, instability, or disorientation', isCorrect: true },
              { id: 'd', text: 'Romance and warmth', isCorrect: false },
            ],
            solution: 'A Dutch angle tilts the camera to one side, making the horizon uneven. This creates visual instability that translates into emotional unease or disorientation. It is commonly used in thriller and horror films.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-35-n-section2',
      type: 'text',
      content: `## Editing: The Invisible Art

**Editing** is often called the invisible art because when it is done well, you do not notice it at all. Yet editing is arguably the most powerful tool in filmmaking, controlling the rhythm, pace, and emotional impact of every scene.

A **cut** is the most basic edit: one shot ends and another begins. The speed and timing of cuts shape the rhythm of a film. Rapid cuts create excitement, tension, or chaos. An action sequence might use dozens of cuts per minute, each lasting only a second or two. Slow cuts, with long takes where the camera lingers, create suspense, contemplation, or dread. A horror film might hold a shot for an uncomfortably long time, building tension through the very absence of change.

A **cross-cut** (or parallel editing) alternates between two or more scenes happening at the same time in different locations. This creates tension by suggesting that events are connected and building toward a convergence. The classic example is alternating between a hero rushing to the rescue and a victim in peril.

A **montage** is a sequence of short shots edited together to show the passage of time, a process, or the development of a character. Training montages in sports films and travel montages in adventure films compress hours, days, or weeks into seconds.

**Transitions** between scenes carry meaning. A **hard cut** (abrupt switch) creates energy or shock. A **fade to black** suggests the passage of time or the end of a chapter. A **dissolve** (one image gradually replacing another) suggests a connection between two scenes or a dreamlike quality. A **match cut** connects two shots that share a visual similarity: a spinning basketball might dissolve into a spinning globe, connecting the personal to the global.

**Continuity editing** maintains spatial and temporal coherence, making sure the audience always understands where things are and what is happening. The **180-degree rule** keeps two characters on consistent sides of the screen during a conversation. Breaking this rule deliberately creates disorientation.`,
    },
    {
      id: 'engelsk-10-35-n-section3',
      type: 'text',
      content: `## Sound: The Emotion Machine

If you want proof that sound drives emotion in film, try watching a horror film with the sound off. Suddenly, it is not frightening at all. The scary images are just images without the music, sound effects, and silence that make them terrifying. Sound is the emotional engine of cinema.

**Diegetic sound** is sound that exists within the world of the film: dialogue between characters, a car engine, footsteps on gravel, music playing on a radio within the scene. Characters can hear diegetic sound.

**Non-diegetic sound** is added in post-production and exists only for the audience: the film score, a narrator's voice, sound effects designed to create mood. Characters cannot hear non-diegetic sound. The dramatic orchestral music that plays during a battle scene is non-diegetic; the soldiers on screen do not hear it.

The **film score** (the composed music) is extraordinarily powerful at shaping emotions. Minor keys and low frequencies create tension, sadness, or dread. Major keys and bright instrumentation create joy, triumph, or wonder. Silence in the midst of a dramatic score is just as powerful: the sudden absence of music can create shock or emphasise a moment of devastating quiet.

**Sound design** encompasses all the sounds in a film beyond dialogue and music. The creak of a door, the distant rumble of thunder, the ticking of a clock, these seemingly mundane sounds create atmosphere and tension. Sound designers sometimes exaggerate or distort sounds for effect. In a thriller, footsteps might be unnaturally loud. In a dream sequence, sounds might be muffled or echoing.

When analysing a film, always consider how sound works together with visuals. A beautiful landscape accompanied by ominous music tells a different story than the same landscape with peaceful music. The image provides information; the sound tells you how to feel about it.`,
    },
    {
      id: 'engelsk-10-35-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-35-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on editing and sound:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-35-n-quiz2-q0',
            task: 'What is the difference between diegetic and non-diegetic sound?',
            options: [
              { id: 'a', text: 'Diegetic is loud and non-diegetic is quiet', isCorrect: false },
              { id: 'b', text: 'Diegetic sound exists within the film world (characters can hear it); non-diegetic is added for the audience only', isCorrect: true },
              { id: 'c', text: 'Diegetic is music and non-diegetic is dialogue', isCorrect: false },
              { id: 'd', text: 'There is no meaningful difference', isCorrect: false },
            ],
            solution: 'Diegetic sound exists within the story world (dialogue, sounds characters hear). Non-diegetic sound is added for the audience (film score, narrator). Characters cannot hear non-diegetic sound.',
          },
          {
            id: 'engelsk-10-35-n-quiz2-q1',
            task: 'Why is editing called "the invisible art"?',
            options: [
              { id: 'a', text: 'Because editors are never credited in films', isCorrect: false },
              { id: 'b', text: 'Because editing is done by computers without human involvement', isCorrect: false },
              { id: 'c', text: 'Because when editing is done well, the audience does not consciously notice it', isCorrect: true },
              { id: 'd', text: 'Because editing does not change the film significantly', isCorrect: false },
            ],
            solution: 'Good editing is seamless: it shapes rhythm, pace, and emotion without the audience consciously noticing the cuts. This "invisibility" is precisely what makes it so powerful; it works on you without you being aware of it.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-35-n-summary',
      type: 'text',
      content: `## Summary

Film is a language with its own vocabulary and grammar. Understanding it transforms you from a passive viewer into an active reader of visual media.

**Shot types** (extreme long shot to extreme close-up) control how much you see and how intimate the moment feels. **Camera angles** (low, high, eye-level, Dutch) shape your emotional response to characters and situations. Camera movement (tracking, zoom, handheld) adds dynamism and perspective.

**Editing** controls the rhythm of storytelling. Rapid cuts create energy; long takes build tension. Cross-cuts create parallel tension. Montages compress time. Transitions (hard cut, fade, dissolve, match cut) carry meaning between scenes.

**Sound** is the emotional engine. Diegetic sound exists within the film world; non-diegetic sound is for the audience only. The film score shapes how you feel. Sound design creates atmosphere. The relationship between image and sound is where much of film's meaning is created.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 36 NARRATIVE: World Englishes
// ============================================================================

export const CHAPTER_ENGELSK_10_36_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-36-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '36',
  title: 'World Englishes',
  subtitle: 'Narrativ versjon',
  description: 'Discover how English became a global language with countless varieties, from Kachru\'s Three Circles model to code-switching and the beauty of linguistic diversity.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-36',
  content: [
    {
      id: 'engelsk-10-36-n-intro',
      type: 'text',
      content: `## One Language, Many Voices

Here is a fact that might surprise you: there are more non-native speakers of English in the world than native speakers. English is spoken on every continent, in nearly every country, and by an estimated 1.5 billion people worldwide. But the English spoken in Lagos is different from the English spoken in London, which is different from the English spoken in Los Angeles, which is different from the English spoken in Singapore.

This is not a problem to be solved. It is one of the most fascinating aspects of the English language. English is not a single, uniform thing owned by any particular country. It is a family of related varieties, each shaped by the culture, languages, and history of the people who speak it.

In this chapter, we will explore how English spread across the globe, the model linguists use to understand its varieties, and the phenomenon of code-switching. We will challenge the idea that there is one "correct" English and celebrate the extraordinary diversity of a language that belongs to everyone who speaks it.`,
    },
    {
      id: 'engelsk-10-36-n-section1',
      type: 'text',
      content: `## Kachru's Three Circles of English

In the 1980s, the Indian linguist **Braj Kachru** proposed a model for understanding the global spread of English that remains influential today. He described three concentric circles, each representing a different relationship between English and its speakers.

The **Inner Circle** contains countries where English is the primary native language: the United Kingdom, the United States, Canada, Australia, New Zealand, and Ireland. These are the countries that historically set the standards for "correct" English. But even within the Inner Circle, there is enormous variation. American English and British English differ in spelling (color/colour), vocabulary (elevator/lift), grammar (I have got/I have gotten), and pronunciation.

The **Outer Circle** contains countries where English is not the primary native language but has an important official or institutional role, usually as a result of British or American colonialism. India, Nigeria, Singapore, Kenya, the Philippines, and many others belong here. In these countries, English functions alongside local languages and has developed its own distinctive features. Indian English, for instance, uses constructions like "I am having a headache" and "prepone" (the opposite of postpone) that are perfectly logical and widely understood in India but unfamiliar in Inner Circle countries.

The **Expanding Circle** contains countries where English is widely learned as a foreign language but has no official status. Norway, Germany, Japan, China, Brazil, and Russia belong here. In these countries, English serves primarily as an international language of communication, business, science, and culture. Norwegian English, with its distinctive pronunciation patterns and occasional Norwegian-influenced grammar, is a variety of Expanding Circle English.

Kachru's model challenges the idea that Inner Circle English is "real" English and everything else is a deviation. Instead, it presents all varieties of English as legitimate. The English spoken in Nigeria is not "bad British English"; it is Nigerian English, with its own rules, vocabulary, and expressive power.

The concept of **English as a Lingua Franca (ELF)** takes this further. When a Norwegian and a Japanese businessperson communicate in English, neither is using their native language. The English they use does not belong to any particular country. It is a shared tool for communication, and its effectiveness is measured by mutual intelligibility, not by how closely it resembles British or American norms.`,
    },
    {
      id: 'engelsk-10-36-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on World Englishes:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-36-n-quiz1-q0',
            task: 'Which circle in Kachru\'s model does Norway belong to?',
            options: [
              { id: 'a', text: 'The Inner Circle', isCorrect: false },
              { id: 'b', text: 'The Outer Circle', isCorrect: false },
              { id: 'c', text: 'The Expanding Circle', isCorrect: true },
              { id: 'd', text: 'None of the circles', isCorrect: false },
            ],
            solution: 'Norway belongs to the Expanding Circle, where English is widely learned as a foreign language but has no official status. English serves primarily as an international language for communication, business, and culture.',
          },
          {
            id: 'engelsk-10-36-n-quiz1-q1',
            task: 'What does Kachru\'s model challenge about how we think about English?',
            options: [
              { id: 'a', text: 'That English is spoken worldwide', isCorrect: false },
              { id: 'b', text: 'The idea that Inner Circle English is the only "real" or "correct" English', isCorrect: true },
              { id: 'c', text: 'That English has different accents', isCorrect: false },
              { id: 'd', text: 'That English is useful for international communication', isCorrect: false },
            ],
            solution: 'Kachru\'s model presents all varieties of English as legitimate rather than treating Inner Circle English as the standard and everything else as a deviation. Nigerian English is not "bad British English"; it is its own valid variety.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-36-n-section2',
      type: 'text',
      content: `## Code-Switching: Moving Between Languages

If you have ever started a sentence in Norwegian and finished it in English, or dropped an English word into a Norwegian conversation, you have experienced **code-switching**. This is the practice of alternating between two or more languages or language varieties within a single conversation, sentence, or even phrase.

Code-switching is not a sign of confusion or linguistic weakness. It is a sophisticated skill that demonstrates mastery of multiple languages. Research shows that code-switchers are not "mixing up" their languages; they are making precise choices about when to switch and why.

People code-switch for many reasons. **Filling a lexical gap** is one: sometimes a concept simply does not translate well, or the word in the other language captures the meaning more precisely. Norwegian speakers might use English technical terms in a Norwegian conversation because the English term is more precise or widely recognised.

**Signalling identity** is another powerful reason for code-switching. Switching languages can mark belonging to a particular group, signal solidarity with certain listeners, or express a particular aspect of identity. A bilingual teenager might use English with friends to signal cosmopolitan cool and Norwegian with grandparents to signal respect and belonging.

**Adjusting to audience** is a pragmatic reason. You might switch to the language your listener understands best, or adjust your variety of English depending on who you are speaking to. This is not dishonesty; it is communicative skill.

**Emphasising or expressing emotion** often triggers a switch. Many multilingual people find that certain emotions are more naturally expressed in one language than another. Humour, anger, and tenderness might each have a "home language."

Code-switching between varieties of the same language is also common. An African American student might speak African American Vernacular English (AAVE) with friends and Standard American English in a classroom presentation. This is linguistic code-switching within English, and it requires the same sophisticated awareness of context, audience, and purpose.

In an increasingly multilingual world, code-switching is not an oddity; it is the norm. Embracing it as a skill rather than dismissing it as a problem reflects a more accurate and respectful understanding of how language actually works.`,
    },
    {
      id: 'engelsk-10-36-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-36-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on code-switching:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-36-n-quiz2-q0',
            task: 'What is code-switching?',
            options: [
              { id: 'a', text: 'Forgetting which language you are speaking', isCorrect: false },
              { id: 'b', text: 'Alternating between two or more languages or language varieties within a conversation', isCorrect: true },
              { id: 'c', text: 'Translating a document from one language to another', isCorrect: false },
              { id: 'd', text: 'Speaking very quickly in one language', isCorrect: false },
            ],
            solution: 'Code-switching is the practice of alternating between languages or language varieties within a single conversation, sentence, or phrase. It is a sophisticated skill demonstrating multilingual competence.',
          },
          {
            id: 'engelsk-10-36-n-quiz2-q1',
            task: 'Why do linguists consider code-switching a sign of linguistic skill rather than confusion?',
            options: [
              { id: 'a', text: 'Because only professors can do it', isCorrect: false },
              { id: 'b', text: 'Because speakers make precise choices about when to switch based on context, audience, and purpose', isCorrect: true },
              { id: 'c', text: 'Because it is very rare', isCorrect: false },
              { id: 'd', text: 'Because it requires formal training', isCorrect: false },
            ],
            solution: 'Research shows that code-switchers make precise, purposeful choices about when to switch. They switch to fill lexical gaps, signal identity, adjust to audience, or express emotion. This demonstrates sophisticated linguistic awareness, not confusion.',
          },
          {
            id: 'engelsk-10-36-n-quiz2-q2',
            task: 'What is "English as a Lingua Franca" (ELF)?',
            options: [
              { id: 'a', text: 'English spoken only in France', isCorrect: false },
              { id: 'b', text: 'English used as a shared communication tool between people of different native languages', isCorrect: true },
              { id: 'c', text: 'A simplified version of English with fewer words', isCorrect: false },
              { id: 'd', text: 'British English as spoken by the royal family', isCorrect: false },
            ],
            solution: 'English as a Lingua Franca (ELF) refers to English used as a common language between speakers of different native languages. Its effectiveness is measured by mutual intelligibility, not by how closely it resembles any native variety.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-36-n-summary',
      type: 'text',
      content: `## Summary

English is not one language but a family of global varieties, and understanding this diversity is essential.

**Kachru's Three Circles** model describes how English spread: the Inner Circle (native-speaker countries), the Outer Circle (countries where English has official status due to colonialism), and the Expanding Circle (countries where English is learned as a foreign language). All varieties are legitimate.

**Code-switching** is the sophisticated practice of alternating between languages for specific communicative purposes. It demonstrates linguistic skill, not confusion, and occurs for reasons including filling lexical gaps, signalling identity, adjusting to audience, and expressing emotion.

English belongs to everyone who speaks it. Celebrating its diversity rather than insisting on a single standard reflects how language actually works in our interconnected world.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 37 NARRATIVE: Pronunciation and Phonetics
// ============================================================================

export const CHAPTER_ENGELSK_10_37_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-37-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '37',
  title: 'Pronunciation and Phonetics',
  subtitle: 'Narrativ versjon',
  description: 'Unlock the sound system of English with an introduction to the IPA, vowels, consonants, stress, and intonation patterns that make your English clearer.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-37',
  content: [
    {
      id: 'engelsk-10-37-n-intro',
      type: 'text',
      content: `## The Sounds That Make Meaning

English spelling is famously unreliable. The letters "ough" can be pronounced at least six different ways: through, though, thought, tough, cough, and plough. The letter combination "gh" is sometimes silent (night, daughter) and sometimes pronounced as "f" (enough, laugh). If you have ever been confused by English pronunciation, you are in excellent company. Even native speakers struggle with it.

But beneath the chaotic surface of English spelling lies a sound system with its own logic and patterns. Understanding this system, even at a basic level, will improve your pronunciation, help you learn new words, and make you a more confident speaker.

In this chapter, we will explore the basics of English phonetics: the International Phonetic Alphabet (IPA), the vowel and consonant sounds of English, and the crucial role of stress and intonation. This is not about achieving a "perfect" accent. It is about understanding how English sounds work so that you can communicate more clearly and understand others more easily.`,
    },
    {
      id: 'engelsk-10-37-n-section1',
      type: 'text',
      content: `## The International Phonetic Alphabet

The **International Phonetic Alphabet (IPA)** was created in the late 1800s to solve exactly the problem we just described: spelling does not reliably tell you how words are pronounced. The IPA assigns one symbol to each sound, so every symbol always represents the same sound, regardless of the language.

You have probably seen IPA symbols in dictionaries, even if you did not know what they were. When a dictionary shows the pronunciation of "enough" as /ɪˈnʌf/, each symbol represents exactly one sound. The "e" is pronounced /ɪ/ (like the "i" in "bit"), not /ɛ/ or /iː/. The "ough" combination is represented simply as /ʌf/, because that is what it actually sounds like in this word.

You do not need to memorise the entire IPA to benefit from it. Learning even a handful of key symbols gives you a powerful tool for checking pronunciation when you encounter unfamiliar words.

**English vowels** are particularly tricky for Norwegian speakers because English has more vowel sounds than Norwegian in some areas and organises them differently. English distinguishes between short and long vowels: "ship" /ʃɪp/ versus "sheep" /ʃiːp/, "pull" /pʊl/ versus "pool" /puːl/. These differences carry meaning. Saying "ship" when you mean "sheep" creates genuine confusion.

English also has **diphthongs**, sounds where your mouth moves from one vowel position to another within a single syllable. The "ay" in "day" /deɪ/, the "ow" in "go" /ɡəʊ/, and the "oy" in "boy" /bɔɪ/ are all diphthongs. Your mouth starts in one position and glides to another.

**English consonants** include some sounds that do not exist in Norwegian. The "th" sounds are the most famous example. English has two: the voiceless /θ/ (as in "think" and "three") and the voiced /ð/ (as in "this" and "the"). Norwegian speakers often substitute /t/ or /d/ for these sounds, which is understandable but can sometimes cause confusion. Practising the "th" sound, made by placing the tip of your tongue between your teeth and blowing air past it, is one of the most effective things you can do to improve your English pronunciation.

The sounds /w/ and /v/ also cause difficulties. "Wine" /waɪn/ and "vine" /vaɪn/ are different words with different meanings. The /w/ sound requires rounded lips; /v/ requires your top teeth to touch your lower lip.`,
    },
    {
      id: 'engelsk-10-37-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on phonetics:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-37-n-quiz1-q0',
            task: 'Why was the International Phonetic Alphabet (IPA) created?',
            options: [
              { id: 'a', text: 'To replace the regular English alphabet', isCorrect: false },
              { id: 'b', text: 'Because English spelling does not reliably indicate pronunciation, and the IPA assigns one symbol per sound', isCorrect: true },
              { id: 'c', text: 'To make English harder to learn', isCorrect: false },
              { id: 'd', text: 'To standardise English spelling worldwide', isCorrect: false },
            ],
            solution: 'The IPA was created because spelling is unreliable for indicating pronunciation (e.g., "ough" has six pronunciations). The IPA solves this by assigning exactly one symbol to each distinct sound.',
          },
          {
            id: 'engelsk-10-37-n-quiz1-q1',
            task: 'What is a "diphthong"?',
            options: [
              { id: 'a', text: 'Two consonant sounds blended together', isCorrect: false },
              { id: 'b', text: 'A vowel sound where your mouth moves from one position to another within a single syllable', isCorrect: true },
              { id: 'c', text: 'A silent letter in English spelling', isCorrect: false },
              { id: 'd', text: 'The name for the "th" sound', isCorrect: false },
            ],
            solution: 'A diphthong is a vowel sound that involves a glide from one vowel position to another within a single syllable. Examples include the "ay" in "day," the "ow" in "go," and the "oy" in "boy."',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-37-n-section2',
      type: 'text',
      content: `## Stress and Intonation: The Music of English

If individual sounds are the letters of spoken English, **stress** and **intonation** are its punctuation and melody. Getting the sounds right but the stress wrong can make your English harder to understand than getting a few individual sounds wrong.

**Word stress** means that in every English word of more than one syllable, one syllable is pronounced louder, longer, and higher in pitch than the others. "PHOtograph" has stress on the first syllable. "phoTOGraphy" has stress on the second. "photoGRAPHic" has stress on the third. Note that the stress shifts as the word changes form. This is a consistent pattern in English and affects many word families.

Stress can even change meaning. "PREsent" (noun: a gift) versus "preSENT" (verb: to show or give). "REcord" (noun: a vinyl disc or documented information) versus "reCORD" (verb: to make a recording). Getting stress wrong can lead to genuine misunderstandings.

**Sentence stress** is the emphasis placed on certain words within a sentence. In English, content words (nouns, main verbs, adjectives, adverbs) are usually stressed, while function words (articles, prepositions, auxiliary verbs) are usually unstressed and often reduced. "I went to the SHOP to BUY some BREAD." The stressed words carry the main meaning; the unstressed words are spoken quickly and quietly.

**Intonation** is the rising and falling pitch of your voice across a sentence. English uses intonation to convey meaning in ways that can be subtle but significant. A rising intonation at the end of a statement turns it into a question: "You're coming." (statement) versus "You're coming?" (question). Falling intonation at the end of a statement signals finality and confidence. Rising-falling intonation can express surprise or sarcasm.

**Sentence stress for emphasis** lets you change the meaning of a sentence without changing any words. Consider: "I didn't say he stole the money." Depending on which word you stress, this sentence has seven completely different meanings. "I didn't say he stole the money" (someone else said it). "I didn't SAY he stole the money" (I implied it). "I didn't say HE stole the money" (someone else stole it). Each stress pattern creates a different meaning.

For Norwegian speakers, the most important thing to practise is the stress-timed rhythm of English. Norwegian is also somewhat stress-timed, which is an advantage, but English reduces unstressed syllables more dramatically. The word "comfortable" has four syllables but is pronounced almost as two: "COMF-trbl." Learning these reductions makes your English sound more natural and fluid.`,
    },
    {
      id: 'engelsk-10-37-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-37-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on stress and intonation:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-37-n-quiz2-q0',
            task: 'How can word stress change meaning in English?',
            options: [
              { id: 'a', text: 'It cannot; stress is purely decorative', isCorrect: false },
              { id: 'b', text: 'Stress on different syllables can change a word from a noun to a verb (e.g., PREsent vs. preSENT)', isCorrect: true },
              { id: 'c', text: 'Stress only matters in poetry', isCorrect: false },
              { id: 'd', text: 'All English words have equal stress on all syllables', isCorrect: false },
            ],
            solution: 'Word stress can change both meaning and grammatical function. "PREsent" (noun: a gift) versus "preSENT" (verb: to show). "REcord" (noun) versus "reCORD" (verb). Incorrect stress can cause genuine misunderstanding.',
          },
          {
            id: 'engelsk-10-37-n-quiz2-q1',
            task: 'In the sentence "I went to the SHOP to BUY some BREAD," why are "shop," "buy," and "bread" stressed?',
            options: [
              { id: 'a', text: 'Because they are the shortest words', isCorrect: false },
              { id: 'b', text: 'Because they are content words that carry the main meaning of the sentence', isCorrect: true },
              { id: 'c', text: 'Because they are all nouns', isCorrect: false },
              { id: 'd', text: 'Because the speaker is angry', isCorrect: false },
            ],
            solution: 'In English, content words (nouns, main verbs, adjectives, adverbs) carry the main meaning and are typically stressed. Function words (articles, prepositions, auxiliary verbs) are usually unstressed and spoken quickly.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-37-n-summary',
      type: 'text',
      content: `## Summary

Understanding the sound system of English improves both your speaking and your listening.

**The IPA** provides a reliable guide to pronunciation where spelling fails. Learning key symbols helps you check the pronunciation of unfamiliar words. English has more vowel distinctions than many learners expect, and diphthongs are important to master.

**Consonant challenges** for Norwegian speakers include the "th" sounds (/θ/ and /ð/) and the /w/-/v/ distinction. Practising these specific sounds has the greatest impact on clarity.

**Stress and intonation** are the music of English. Word stress can change meaning (PREsent vs. preSENT). Sentence stress highlights important information. Intonation patterns convey meaning beyond the words themselves. Mastering these suprasegmental features is as important as getting individual sounds right.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 38 NARRATIVE: Informal English and Idioms
// ============================================================================

export const CHAPTER_ENGELSK_10_38_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-38-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '38',
  title: 'Informal English and Idioms',
  subtitle: 'Narrativ versjon',
  description: 'Unlock the colourful world of slang, phrasal verbs, colloquialisms, and register, and learn when informal language is appropriate and when it is not.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-38',
  content: [
    {
      id: 'engelsk-10-38-n-intro',
      type: 'text',
      content: `## The Language Nobody Teaches You

Open any English textbook and you will find grammatically perfect sentences, polished vocabulary, and carefully structured dialogues. Now listen to actual English speakers in a cafe, on a bus, or in a YouTube video. The gap can be enormous. Real, everyday English is full of slang, idioms, phrasal verbs, and colloquial expressions that textbooks rarely cover but that you absolutely need to understand.

When someone tells you to "hang in there," they are not suggesting you cling to a physical object. When a friend says they will "look into it," they are not physically peering inside something. When a British person says something is "not bad," they often mean it is quite good. This is the world of informal English: colourful, creative, sometimes baffling, and absolutely essential for understanding how the language is actually used.

In this chapter, we will explore slang, phrasal verbs, colloquialisms, and the concept of register. You will learn not just what these expressions mean but, crucially, when and where different levels of formality are appropriate. Knowing informal English is important; knowing when to use it is even more important.`,
    },
    {
      id: 'engelsk-10-38-n-section1',
      type: 'text',
      content: `## Slang, Colloquialisms, and Phrasal Verbs

**Slang** is highly informal language that often belongs to specific groups, ages, or subcultures. It changes rapidly. The slang of the 1990s sounds dated today, and much of today's slang will sound equally dated in ten years. Words like "lit" (exciting), "ghosting" (cutting off contact without explanation), and "salty" (bitter or upset) are current slang that may or may not survive.

Slang serves important social functions. It marks belonging to a group. Teenagers develop their own slang partly to create a shared language that sets them apart from adults. Internet communities develop slang that identifies insiders. Slang is creative, playful, and often witty. It is the laboratory where new language is tested before some of it eventually enters mainstream use. "Cool" was once slang; now it is standard English.

**Colloquialisms** are informal expressions that are more widely used and longer-lasting than slang. "Gonna" (going to), "wanna" (want to), "kinda" (kind of), and "gotta" (got to) are colloquial forms used in casual speech by virtually all English speakers. "No worries" (it is fine), "hang out" (spend time casually), and "catch up" (update each other on news) are colloquial phrases that are perfectly normal in informal conversation.

**Phrasal verbs** are one of the trickiest aspects of English for non-native speakers. They consist of a verb plus one or more particles (prepositions or adverbs) that together create a meaning different from the individual words. "Give up" does not mean give in an upward direction; it means surrender or stop trying. "Put up with" does not involve putting anything anywhere; it means tolerate. "Come across" does not mean come across a bridge; it means find by chance.

Here is a small selection of essential phrasal verbs:
- **Look up** — search for information
- **Turn down** — reject or refuse
- **Bring up** — mention or raise a topic
- **Work out** — exercise, or find a solution
- **Run out of** — have no more left
- **Figure out** — understand or solve
- **Get along with** — have a good relationship with
- **Put off** — postpone or delay

The challenge is that many phrasal verbs have multiple meanings depending on context. "Take off" can mean remove clothing, become successful, or an aeroplane leaving the ground. Context always determines meaning.`,
    },
    {
      id: 'engelsk-10-38-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on informal English:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-38-n-quiz1-q0',
            task: 'What is a "phrasal verb"?',
            options: [
              { id: 'a', text: 'A verb used in a phrase or sentence', isCorrect: false },
              { id: 'b', text: 'A verb combined with one or more particles that creates a meaning different from the individual words', isCorrect: true },
              { id: 'c', text: 'A verb that is only used in informal speech', isCorrect: false },
              { id: 'd', text: 'A very long verb with many syllables', isCorrect: false },
            ],
            solution: 'A phrasal verb combines a verb with a particle (preposition or adverb) to create a new meaning. "Give up" (surrender) has a different meaning from "give" and "up" separately. They are extremely common in English.',
          },
          {
            id: 'engelsk-10-38-n-quiz1-q1',
            task: 'What social function does slang primarily serve?',
            options: [
              { id: 'a', text: 'Making English more difficult to learn', isCorrect: false },
              { id: 'b', text: 'Marking belonging to a group and creating shared identity', isCorrect: true },
              { id: 'c', text: 'Replacing formal English in all situations', isCorrect: false },
              { id: 'd', text: 'Impressing teachers and examiners', isCorrect: false },
            ],
            solution: 'Slang marks belonging to a group. Teenagers, internet communities, and subcultures develop shared informal language that identifies insiders and creates group identity. It is also a space for linguistic creativity.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-38-n-section2',
      type: 'text',
      content: `## Idioms: When Language Goes Figurative

An **idiom** is a phrase whose meaning cannot be understood from the individual words. "It's raining cats and dogs" has nothing to do with animals falling from the sky; it means it is raining heavily. "Break a leg" does not express a wish for injury; it means "good luck." "The ball is in your court" has nothing to do with tennis (necessarily); it means the decision is now yours.

English has thousands of idioms, and they appear everywhere: in conversation, in newspapers, in political speeches, and in literature. Understanding them is essential for comprehension, but learning them requires exposure and practice because there is no logical way to deduce their meaning from their components.

Here are some common idioms that appear frequently:
- **Bite the bullet** — endure something painful or difficult with courage
- **Cost an arm and a leg** — be very expensive
- **Hit the nail on the head** — be exactly right
- **Under the weather** — feeling ill
- **Once in a blue moon** — very rarely
- **Piece of cake** — very easy
- **Let the cat out of the bag** — reveal a secret
- **Burn the midnight oil** — work late into the night

Many idioms have fascinating origins. "Break a leg" may come from the superstition that wishing someone good luck directly would bring bad luck. "Let the cat out of the bag" may originate from a medieval market fraud where a cat was sold in a bag instead of a more valuable pig.`,
    },
    {
      id: 'engelsk-10-38-n-section3',
      type: 'text',
      content: `## Register: Choosing the Right Level

**Register** is the level of formality you use in language, and choosing the right register for the situation is one of the most important language skills you can develop.

**Formal register** is used in academic writing, official documents, business correspondence, and professional settings. It uses complete sentences, avoids contractions ("do not" rather than "don't"), employs sophisticated vocabulary, and maintains an impersonal tone. "We wish to inform you that your application has been successful" is formal register.

**Informal register** is used with friends, family, and in casual settings. It uses contractions, colloquialisms, slang, and a personal tone. "Hey, you got in! Awesome!" is informal register. Both sentences convey the same information, but they create completely different impressions.

**Neutral register** sits between the two and is appropriate for most everyday communication. News reporting, textbooks, and general conversation with people you do not know well typically use neutral register.

The skill is not just knowing these registers but knowing when to switch between them. Writing a job application in slang would be disastrous. Speaking to a close friend in formal register would be strange and distancing. The context, your audience, your purpose, and the medium, determines which register is appropriate.

In the English exam, you should generally use formal or neutral register for written tasks, unless the task specifically asks for informal writing (like a personal letter or a dialogue). For oral exams, a slightly less formal but still respectful and articulate register is appropriate.

A common mistake for learners is mixing registers inappropriately. Starting a formal essay with "Climate change is, like, a really big deal" or ending a casual text message with "I look forward to your earliest convenience in this matter" both sound wrong because they use the wrong register for the context. Developing sensitivity to register is a mark of genuine language proficiency.`,
    },
    {
      id: 'engelsk-10-38-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-38-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on idioms and register:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-38-n-quiz2-q0',
            task: 'What does the idiom "hit the nail on the head" mean?',
            options: [
              { id: 'a', text: 'To hammer something correctly', isCorrect: false },
              { id: 'b', text: 'To be exactly right about something', isCorrect: true },
              { id: 'c', text: 'To hurt yourself accidentally', isCorrect: false },
              { id: 'd', text: 'To finish a task quickly', isCorrect: false },
            ],
            solution: '"Hit the nail on the head" means to be precisely correct about something. Like many idioms, its meaning cannot be deduced from the individual words; it must be learned as a complete phrase.',
          },
          {
            id: 'engelsk-10-38-n-quiz2-q1',
            task: 'What register should you generally use in the written part of the English exam?',
            options: [
              { id: 'a', text: 'Slang and very informal language', isCorrect: false },
              { id: 'b', text: 'Formal or neutral register, unless the task specifically asks for informal writing', isCorrect: true },
              { id: 'c', text: 'The most formal register possible at all times', isCorrect: false },
              { id: 'd', text: 'Whatever register feels most natural to you', isCorrect: false },
            ],
            solution: 'Exam writing generally requires formal or neutral register. However, if a task specifically asks for informal writing (a personal letter, a dialogue), use an appropriate informal register. The key is matching register to context.',
          },
          {
            id: 'engelsk-10-38-n-quiz2-q2',
            task: 'Why is it a mistake to mix registers within a single piece of writing?',
            options: [
              { id: 'a', text: 'Because mixing registers is against English grammar rules', isCorrect: false },
              { id: 'b', text: 'Because it creates an inconsistent, awkward impression and suggests lack of language awareness', isCorrect: true },
              { id: 'c', text: 'Because only one register exists in English', isCorrect: false },
              { id: 'd', text: 'Because examiners will not understand mixed registers', isCorrect: false },
            ],
            solution: 'Mixing registers (e.g., formal vocabulary alongside slang) creates an inconsistent tone that sounds awkward. Consistent register choice demonstrates genuine language proficiency and awareness of context.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-38-n-summary',
      type: 'text',
      content: `## Summary

Informal English is the language of everyday life, and understanding it is essential.

**Slang** is highly informal, group-specific, and rapidly changing. **Colloquialisms** are more widely used informal expressions. **Phrasal verbs** combine verbs with particles to create new meanings and are extremely common in English.

**Idioms** are phrases whose meaning cannot be deduced from individual words. They must be learned through exposure and practice. English has thousands of idioms used in all types of communication.

**Register** is the level of formality. Formal, neutral, and informal registers are appropriate in different contexts. Choosing the right register for the situation, and maintaining consistency, is a mark of genuine language proficiency. In exams, default to formal or neutral unless told otherwise.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 39 NARRATIVE: Narrative Techniques
// ============================================================================

export const CHAPTER_ENGELSK_10_39_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-39-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '39',
  title: 'Narrative Techniques',
  subtitle: 'Narrativ versjon',
  description: 'Explore the storyteller\'s toolkit: point of view, unreliable narrators, foreshadowing, and dialogue as techniques that shape how stories create meaning.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-39',
  content: [
    {
      id: 'engelsk-10-39-n-intro',
      type: 'text',
      content: `## The Storyteller's Invisible Hand

Every story you have ever read was constructed. It might feel natural, effortless, as if the events simply happened and someone wrote them down. But behind every narrative are hundreds of deliberate choices made by the author. Which character's perspective should we follow? How much should the reader know? When should certain information be revealed? How should characters speak?

These choices are **narrative techniques**, and understanding them does two things. First, it makes you a more perceptive reader, able to see how stories create their effects rather than just experiencing those effects passively. Second, it makes you a better writer, able to deploy these techniques in your own work.

In this chapter, we will explore four essential narrative techniques: point of view, the unreliable narrator, foreshadowing, and the use of dialogue. Each one gives the storyteller a different kind of power over the reader's experience.`,
    },
    {
      id: 'engelsk-10-39-n-section1',
      type: 'text',
      content: `## Point of View: The Window into the Story

We touched on narrative voice in our chapter on short stories, but **point of view (POV)** deserves deeper exploration because it is arguably the most fundamental narrative choice an author makes.

**First-person POV** ("I") places you inside a character's mind. You experience the story through their senses, thoughts, and emotions. This creates powerful immediacy: you feel what the character feels. But it also limits you to what that character knows and perceives. In Suzanne Collins' *The Hunger Games*, we experience everything through Katniss. We know only what she knows, fear what she fears, and are surprised when she is surprised. This limitation is part of the tension.

**Second-person POV** ("You") is rare in fiction but powerful when used well. It places the reader directly into the story: "You walk into the room. You see the letter on the table. You feel your heart begin to race." This creates an unsettling sense of involvement and responsibility. It is used more commonly in interactive fiction, choose-your-own-adventure stories, and some experimental literature.

**Third-person limited POV** ("She/He") follows one character closely but maintains a slight distance. The narrator describes the character's thoughts and feelings but from the outside: "She felt the anger rising in her chest" rather than "I felt the anger rising in my chest." This perspective combines intimacy with a degree of objectivity.

**Third-person omniscient POV** gives the narrator god-like knowledge. They can enter any character's mind, describe events in multiple locations simultaneously, and even comment directly on the meaning of events. Leo Tolstoy's *War and Peace* uses omniscient narration to move between dozens of characters across a vast historical canvas. The advantage is scope; the disadvantage is that it can reduce intimacy with individual characters.

**Shifting POV** is increasingly common in modern fiction. Some novels alternate between multiple first-person narrators, giving each character their own chapters. This technique reveals how differently the same events can be perceived by different people. It is particularly effective in stories about conflict or misunderstanding, where the gap between perspectives is the point.

When analysing a text, always consider why the author chose this particular point of view. How would the story change if told from a different perspective? What does this POV reveal, and what does it hide?`,
    },
    {
      id: 'engelsk-10-39-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on point of view:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-39-n-quiz1-q0',
            task: 'What is the key advantage of first-person POV?',
            options: [
              { id: 'a', text: 'It allows the narrator to see everything', isCorrect: false },
              { id: 'b', text: 'It creates powerful immediacy by placing the reader inside a character\'s mind', isCorrect: true },
              { id: 'c', text: 'It is the easiest POV for the author to write', isCorrect: false },
              { id: 'd', text: 'It allows the reader to know what all characters are thinking', isCorrect: false },
            ],
            solution: 'First-person POV creates intimacy and immediacy by placing the reader directly inside a character\'s thoughts and experiences. However, it also limits knowledge to what that character knows and perceives.',
          },
          {
            id: 'engelsk-10-39-n-quiz1-q1',
            task: 'Why might an author choose to use shifting POV (multiple narrators)?',
            options: [
              { id: 'a', text: 'Because they could not decide on one narrator', isCorrect: false },
              { id: 'b', text: 'To reveal how differently the same events are perceived by different people', isCorrect: true },
              { id: 'c', text: 'Because all modern novels must use this technique', isCorrect: false },
              { id: 'd', text: 'To confuse the reader', isCorrect: false },
            ],
            solution: 'Shifting POV reveals the gap between different characters\' perceptions of the same events. This technique is especially effective in stories about conflict or misunderstanding, where the difference in perspectives is itself meaningful.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-39-n-section2',
      type: 'text',
      content: `## The Unreliable Narrator

An **unreliable narrator** is a narrator whose account of events we have reason to question. They might lie, exaggerate, misremember, misunderstand, or be too biased to see clearly. This technique is one of the most fascinating in fiction because it turns reading into detective work: you must evaluate not just what the narrator tells you, but whether to believe them.

There are several types of unreliability. A narrator might be a **deliberate liar**, intentionally deceiving the reader. In Agatha Christie's *The Murder of Roger Ackroyd*, the first-person narrator turns out to have hidden crucial information, a revelation that shocked readers and changed detective fiction forever.

A narrator might be **self-deceived**, genuinely believing things that the evidence contradicts. Holden Caulfield in *The Catcher in the Rye* tells us he does not care about things he obviously cares about deeply. His unreliability comes not from dishonesty but from his inability to understand his own emotions.

A narrator might be **naive or limited**, lacking the experience or knowledge to understand what they witness. A child narrator, for instance, might describe events without understanding their significance, leaving the adult reader to recognise the darker implications. In *Room* by Emma Donoghue, five-year-old Jack describes his world with cheerful innocence, not understanding the horrifying reality of his captivity.

How do you detect unreliability? Look for **contradictions** between what the narrator says and what the evidence shows. Look for **overemphatic denials** ("I was NOT jealous"), which often suggest the opposite. Look for **gaps in the narrative**, things the narrator avoids discussing. Look for **other characters' reactions**, which might not match the narrator's version of events.

Understanding unreliable narration enriches your reading enormously. It transforms you from a passive receiver of the narrator's version into an active interpreter who weighs evidence and draws independent conclusions.`,
    },
    {
      id: 'engelsk-10-39-n-section3',
      type: 'text',
      content: `## Foreshadowing and Dialogue

**Foreshadowing** is the technique of planting hints about events that will happen later in the story. It creates anticipation, builds tension, and makes plot developments feel inevitable rather than random.

Foreshadowing can be **direct**, with a character or narrator explicitly hinting at what is to come: "If only I had known then what I know now, I would never have opened that door." Or it can be **indirect**, using symbols, weather, imagery, or seemingly insignificant details that only become meaningful in retrospect. A character who notices a crack in a wall early in the story might later face the crumbling of their relationship or beliefs. A sunny day that suddenly clouds over might foreshadow a shift from happiness to conflict.

The key to effective foreshadowing is subtlety. If the hints are too obvious, they become spoilers. If they are too subtle, readers miss them entirely. The best foreshadowing operates just below the level of conscious awareness, creating a feeling of unease or expectation without the reader being able to identify exactly why.

When rereading a story, foreshadowing becomes especially visible. Details that seemed insignificant on first reading reveal themselves as carefully planted clues. This is one reason why good literature rewards rereading: there is always more to discover.

**Dialogue** is not just characters talking. It is a narrative technique that serves multiple functions simultaneously.

Dialogue **reveals character** more efficiently than description. How a character speaks, their vocabulary, sentence structure, rhythm, and what they choose to say or leave unsaid, tells you who they are. A character who speaks in short, clipped sentences is different from one who speaks in flowing, elaborate paragraphs.

Dialogue **advances plot** by allowing characters to share information, make decisions, and confront each other. An argument between characters can shift the entire direction of a story.

Dialogue **creates tension** through subtext, what is implied but not said. Two characters having a polite conversation about the weather while the reader knows they are both hiding explosive secrets creates powerful dramatic irony.

Dialogue **establishes relationships** through tone and dynamics. Who dominates the conversation? Who interrupts? Who listens? Who avoids eye contact? These patterns reveal power dynamics and emotional connections.

When writing dialogue, remember that it should sound natural but not be natural. Real speech is full of pauses, false starts, and meaningless filler. Written dialogue captures the feel of real speech while being more focused, purposeful, and economical.`,
    },
    {
      id: 'engelsk-10-39-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-39-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on foreshadowing and dialogue:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-39-n-quiz2-q0',
            task: 'What is the key to effective foreshadowing?',
            options: [
              { id: 'a', text: 'Making the hints as obvious as possible', isCorrect: false },
              { id: 'b', text: 'Subtlety: hints should create unease or expectation without being obvious spoilers', isCorrect: true },
              { id: 'c', text: 'Telling the reader exactly what will happen', isCorrect: false },
              { id: 'd', text: 'Only using foreshadowing in the first chapter', isCorrect: false },
            ],
            solution: 'The best foreshadowing operates just below the level of conscious awareness. Too obvious and it becomes a spoiler. Too subtle and readers miss it entirely. The ideal is a sense of unease or expectation that pays off later.',
          },
          {
            id: 'engelsk-10-39-n-quiz2-q1',
            task: 'How does dialogue differ from real speech?',
            options: [
              { id: 'a', text: 'Dialogue is exactly the same as real speech', isCorrect: false },
              { id: 'b', text: 'Dialogue captures the feel of real speech but is more focused, purposeful, and economical', isCorrect: true },
              { id: 'c', text: 'Dialogue must be grammatically perfect at all times', isCorrect: false },
              { id: 'd', text: 'Dialogue can only be used in plays, not in novels', isCorrect: false },
            ],
            solution: 'Written dialogue captures the feel of real speech (natural rhythm, character voice) while removing the pauses, false starts, and filler of actual conversation. It should sound natural while being purposeful, with every line serving the story.',
          },
          {
            id: 'engelsk-10-39-n-quiz2-q2',
            task: 'How can you detect an unreliable narrator?',
            options: [
              { id: 'a', text: 'Unreliable narrators always use first person', isCorrect: false },
              { id: 'b', text: 'The author will tell you the narrator is unreliable', isCorrect: false },
              { id: 'c', text: 'Look for contradictions, overemphatic denials, narrative gaps, and reactions that do not match the narrator\'s version', isCorrect: true },
              { id: 'd', text: 'Unreliable narrators always lie about everything', isCorrect: false },
            ],
            solution: 'Unreliable narrators can be detected through contradictions between their words and the evidence, overemphatic denials (which often suggest the opposite), gaps in their narrative, and other characters\' reactions that conflict with the narrator\'s account.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-39-n-summary',
      type: 'text',
      content: `## Summary

Narrative techniques are the deliberate choices authors make to shape your reading experience.

**Point of view** determines whose perspective you experience. First person creates intimacy but limits knowledge. Third person offers varying degrees of access and distance. Shifting POV reveals how differently people perceive the same events.

**Unreliable narrators** give accounts we have reason to question. They may lie, self-deceive, or lack understanding. Detecting unreliability turns reading into active interpretation.

**Foreshadowing** plants subtle hints about future events, creating tension and making developments feel inevitable. It rewards rereading and careful attention.

**Dialogue** simultaneously reveals character, advances plot, creates tension through subtext, and establishes relationships. Good dialogue sounds natural while being purposeful and economical.

Understanding these techniques makes you both a better reader and a better writer.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 40 NARRATIVE: English Language History
// ============================================================================

export const CHAPTER_ENGELSK_10_40_NARRATIV: TextbookChapter = {
  id: 'engelsk-10-40-narrativ',
  courseId: 'engelsk-10',
  chapterNumber: '40',
  title: 'English Language History',
  subtitle: 'Narrativ versjon',
  description: 'Journey through 1,500 years of English, from the Anglo-Saxon warriors to Shakespeare to the global digital language, and discover how etymology reveals hidden connections.',
  estimatedMinutes: 45,
  competenceGoals: ['lese, analysere og tolke engelskspråklige tekster av ulik lengde og i ulike sjangre'],
  linkedChapterId: 'engelsk-10-40',
  content: [
    {
      id: 'engelsk-10-40-n-intro',
      type: 'text',
      content: `## The Language That Would Not Stay Still

The English you are reading right now would be completely incomprehensible to an English speaker from a thousand years ago. And their English would be incomprehensible to you. If you could travel back to the year 700 and try to speak with an Anglo-Saxon farmer, you would not understand a word they said, despite both of you speaking "English."

This is because languages are living things. They grow, change, absorb influences, lose features, and reinvent themselves over centuries. The story of the English language is a story of invasions, migrations, empire, revolution, and globalisation. It is also, fascinatingly, a story that connects English to Norwegian, because these two languages share the same roots and were once much closer to each other than they are today.

In this chapter, we will journey through the major periods of English language history: Old English, Middle English, and Modern English. We will explore how invasions and cultural contacts shaped the language at each stage, and we will discover how **etymology**, the study of word origins, reveals hidden connections between languages and ideas.`,
    },
    {
      id: 'engelsk-10-40-n-section1',
      type: 'text',
      content: `## Old English: The Anglo-Saxon Foundation (c. 450-1100)

The story of English begins in the 5th century, when Germanic tribes, the Angles, Saxons, and Jutes, migrated from what is now northern Germany and Denmark to the British Isles. They brought their language with them, and this language, which we now call **Old English**, became the foundation of everything that followed.

Old English was a Germanic language closely related to Old Norse (the ancestor of modern Norwegian, Swedish, Danish, and Icelandic) and Old High German (the ancestor of modern German and Dutch). If you could hear it spoken, it would sound more like German or Icelandic than like modern English. The most famous work of Old English literature is the epic poem *Beowulf*, which tells the story of a warrior who fights monsters and a dragon. Here is the opening line: "Hwæt! We Gardena in geardagum, / þeodcyninga, þrym gefrunon." You can see some familiar elements if you look hard ("we" is still "we"), but most of it is unrecognisable.

The **Viking Age** brought another wave of Germanic influence. From the late 8th century, Norse-speaking Vikings raided, invaded, and eventually settled in large parts of England, particularly the north and east (the area known as the Danelaw). Old Norse and Old English were closely related enough that speakers could partly understand each other, and the languages influenced each other deeply.

Many common English words came from Old Norse: "they," "them," "their" (replacing the Old English equivalents), "sky," "egg," "window," "husband," "take," "get," "give," and "die." Place names reveal the Viking legacy too. Any English town ending in "-by" (Whitby, Derby) comes from the Old Norse word for "town." The "-thorpe" ending (Cleethorpes) means "village" in Old Norse.

This Norse influence is particularly interesting for Norwegian speakers because it means that some English words are closer to Norwegian than to other Germanic languages. The English "egg" and Norwegian "egg," English "window" and Norwegian "vindu" (from Old Norse "vindauga," literally "wind-eye"), English "give" and Norwegian "gi" share the same Norse roots.

Old English also absorbed Latin vocabulary through Christianity, which arrived in England in the 7th century. Words like "school" (from Latin "schola"), "church" (from Greek "kyriakon" via Latin), and "angel" (from Latin "angelus") entered the language during this period.`,
    },
    {
      id: 'engelsk-10-40-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test yourself on Old English:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-40-n-quiz1-q0',
            task: 'Which Germanic tribes brought the language that became Old English to Britain?',
            options: [
              { id: 'a', text: 'The Romans, Greeks, and Egyptians', isCorrect: false },
              { id: 'b', text: 'The Angles, Saxons, and Jutes', isCorrect: true },
              { id: 'c', text: 'The Vikings and Normans', isCorrect: false },
              { id: 'd', text: 'The Celts and Gauls', isCorrect: false },
            ],
            solution: 'The Angles, Saxons, and Jutes migrated from northern Germany and Denmark to Britain in the 5th century. Their Germanic language became Old English, the foundation of the English we speak today.',
          },
          {
            id: 'engelsk-10-40-n-quiz1-q1',
            task: 'Why is the Viking influence on English particularly interesting for Norwegian speakers?',
            options: [
              { id: 'a', text: 'Because Vikings only spoke Norwegian', isCorrect: false },
              { id: 'b', text: 'Because many common English words share Old Norse roots with Norwegian words (e.g., "egg," "window")', isCorrect: true },
              { id: 'c', text: 'Because the Vikings invented the English alphabet', isCorrect: false },
              { id: 'd', text: 'Because Norwegian and English are the same language', isCorrect: false },
            ],
            solution: 'Vikings spoke Old Norse, the ancestor of modern Norwegian. Many common English words (egg, window, give, they, them, their) entered English from Old Norse, making these words closer to Norwegian than to other English vocabulary.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-40-n-section2',
      type: 'text',
      content: `## Middle English: The French Revolution (c. 1100-1500)

In 1066, everything changed. William, Duke of Normandy, invaded England and defeated the Anglo-Saxon King Harold at the Battle of Hastings. The Norman Conquest was the single most transformative event in English language history.

The Normans spoke a variety of French, and for the next three centuries, French became the language of the English court, government, law, and aristocracy. English remained the language of the common people, the peasants and workers. This created a remarkable situation: the rulers of England spoke a different language from most of their subjects.

The influence of French on English was enormous. Thousands of French words entered English, particularly in areas associated with power and refinement. The vocabulary of **law** (judge, jury, verdict, crime, prison, justice), **government** (parliament, sovereign, state, country, nation), **food** (beef, pork, mutton, veal, cuisine, restaurant), **art** (painting, sculpture, music, beauty), and **fashion** (dress, costume, fashion, style) are overwhelmingly French in origin.

A famous observation illustrates this clearly: the animals in the field have English (Germanic) names because peasants tended them (cow, pig, sheep, deer), but the meat on the table has French names because aristocrats ate it (beef, pork, mutton, venison). This one detail reveals centuries of social hierarchy encoded in vocabulary.

**Middle English** is the language of Geoffrey Chaucer, who wrote *The Canterbury Tales* in the late 14th century. Unlike Old English, you can partly understand Middle English with some effort: "Whan that Aprille with his shoures soote / The droghte of March hath perced to the roote." ("When April with its sweet showers / Has pierced the drought of March to the root.") You can see modern English emerging.

During this period, English also simplified its grammar dramatically. Old English had complex noun declensions (different endings depending on the word's function in the sentence, like modern German or Norwegian still has to some degree), but these were largely lost. Word order became more important as a way of showing grammatical relationships, moving English toward its modern structure of Subject-Verb-Object.`,
    },
    {
      id: 'engelsk-10-40-n-section3',
      type: 'text',
      content: `## Modern English and Etymology (c. 1500-present)

The transition from Middle English to **Early Modern English** was driven by several forces. The printing press, introduced to England by William Caxton in 1476, began to standardise spelling and grammar. The Renaissance brought a flood of Latin and Greek vocabulary as scholars rediscovered classical learning. Words like "democracy," "education," "philosophy," "anatomy," and "atmosphere" entered English during this period.

**William Shakespeare** (1564-1616) wrote in Early Modern English, and while his language sounds archaic to us, it is largely understandable. Shakespeare also invented hundreds of words and phrases that we still use: "eyeball," "bedroom," "lonely," "generous," "assassination," "break the ice," "wild goose chase," and many more. His influence on English is almost impossible to overstate.

**Late Modern English** (1800-present) was shaped by the British Empire, which spread English across the globe, and by the Industrial Revolution, which created the need for thousands of new words for new inventions and concepts. English borrowed from languages worldwide: "jungle" from Hindi, "tsunami" from Japanese, "safari" from Swahili, "kindergarten" from German, "ski" from Norwegian.

In the modern era, American cultural influence has been a major force. Hollywood, Silicon Valley, and American popular culture have exported American English vocabulary globally. Words like "software," "download," "selfie," "blog," and "app" reflect the ongoing creation of new English vocabulary.

**Etymology**, the study of word origins, reveals fascinating hidden connections. Knowing that "companion" comes from Latin "com-" (with) and "panis" (bread), literally meaning "someone you share bread with," enriches your understanding of the word. Knowing that "disaster" comes from Italian "dis-" (bad) and "astro" (star), meaning "bad star" (because disasters were once blamed on unfavourable star alignments), connects you to historical ways of thinking.

For Norwegian speakers, etymology reveals how English and Norwegian are distant cousins. English "house" and Norwegian "hus," English "water" and Norwegian "vann," English "mother" and Norwegian "mor" all descend from the same Proto-Germanic roots. The languages diverged over a thousand years, but the family resemblance remains visible to anyone who knows where to look.

The story of English is not finished. Language continues to evolve. New words are created every year, old words gain new meanings, and the global spread of English continues to diversify it into new varieties. You are not just studying a language; you are participating in its ongoing history.`,
    },
    {
      id: 'engelsk-10-40-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-40-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test yourself on Middle and Modern English:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        solution: '',
        questions: [
          {
            id: 'engelsk-10-40-n-quiz2-q0',
            task: 'Why do English farm animals have Germanic names but their meat has French names?',
            options: [
              { id: 'a', text: 'Because the animals were imported from Germany and the recipes from France', isCorrect: false },
              { id: 'b', text: 'Because English-speaking peasants tended the animals while French-speaking aristocrats ate the meat', isCorrect: true },
              { id: 'c', text: 'Because French words sound more appetising', isCorrect: false },
              { id: 'd', text: 'Because it is a coincidence', isCorrect: false },
            ],
            solution: 'After the Norman Conquest, English peasants (who used Germanic vocabulary) tended the animals: cow, pig, sheep. The French-speaking aristocracy ate the results: beef (boeuf), pork (porc), mutton (mouton). The vocabulary preserves centuries of social hierarchy.',
          },
          {
            id: 'engelsk-10-40-n-quiz2-q1',
            task: 'What role did the printing press play in the development of English?',
            options: [
              { id: 'a', text: 'It had no significant impact on the language', isCorrect: false },
              { id: 'b', text: 'It replaced English with Latin as the dominant language', isCorrect: false },
              { id: 'c', text: 'It helped standardise English spelling and grammar', isCorrect: true },
              { id: 'd', text: 'It was only used for printing in French', isCorrect: false },
            ],
            solution: 'William Caxton introduced the printing press to England in 1476. By producing many copies of the same text, printing helped standardise English spelling and grammar, reducing regional variation and creating shared norms.',
          },
          {
            id: 'engelsk-10-40-n-quiz2-q2',
            task: 'What does the word "companion" literally mean according to its Latin etymology?',
            options: [
              { id: 'a', text: 'Someone who walks with you', isCorrect: false },
              { id: 'b', text: 'Someone you share bread with', isCorrect: true },
              { id: 'c', text: 'A close friend from childhood', isCorrect: false },
              { id: 'd', text: 'Someone from the same country', isCorrect: false },
            ],
            solution: '"Companion" comes from Latin "com-" (with) and "panis" (bread), literally meaning "someone you share bread with." Etymology reveals these hidden meanings, enriching your understanding of everyday words.',
          },
        ],
      },
    },
    {
      id: 'engelsk-10-40-n-summary',
      type: 'text',
      content: `## Summary

The English language has a 1,500-year history of change, contact, and reinvention.

**Old English** (c. 450-1100) was a Germanic language brought by the Angles, Saxons, and Jutes. Viking invasions added Old Norse vocabulary, creating connections between English and Norwegian that survive today.

**Middle English** (c. 1100-1500) was transformed by the Norman Conquest, which introduced thousands of French words, especially in law, government, food, and art. English grammar simplified dramatically during this period.

**Modern English** (c. 1500-present) was shaped by the printing press, the Renaissance, Shakespeare, the British Empire, and American cultural influence. English continues to evolve, borrowing from languages worldwide and creating new vocabulary for new realities.

**Etymology** reveals the hidden history within words, connecting languages and cultures across time. Understanding where English came from helps you understand where it is now and appreciate its extraordinary, ongoing journey.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const ENGELSK_10_NARRATIV_DEL9_CHAPTERS = [
  CHAPTER_ENGELSK_10_35_NARRATIV,
  CHAPTER_ENGELSK_10_36_NARRATIV,
  CHAPTER_ENGELSK_10_37_NARRATIV,
  CHAPTER_ENGELSK_10_38_NARRATIV,
  CHAPTER_ENGELSK_10_39_NARRATIV,
  CHAPTER_ENGELSK_10_40_NARRATIV,
];
