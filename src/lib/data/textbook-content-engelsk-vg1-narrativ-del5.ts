/**
 * Engelsk VG1 - Narrative Versions Part 5 (Chapters 11.1-12.4)
 *
 * Engaging, narrative versions of chapters optimized for reading/listening.
 * Each narrative version links back to the original chapter via linkedChapterId.
 *
 * Covers: Cultural Expressions (11.1-11.4) and Exam Preparation (12.1-12.4)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 11.1 NARRATIVE: Music and Popular Culture
// ============================================================================

export const CHAPTER_ENGELSK_VG1_11_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-11-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '11.1',
  title: 'Music and Popular Culture',
  subtitle: 'Narrative Version',
  description: 'Discover how English-language music shapes culture and carries powerful messages.',
  estimatedMinutes: 45,
  competenceGoals: [
    'discuss and reflect on form, content and literary devices in English-language cultural expressions from various media, including music, film and games',
  ],
  linkedChapterId: 'engelsk-vg1-11-1',
  content: [
    {
      id: 'engelsk-vg1-11-1-n-intro',
      type: 'text',
      content: `## The Soundtrack of Our Lives

Think about the last song that got stuck in your head. Maybe it was something you heard on the radio, in a video game, or on TikTok. Music surrounds us constantly, and in our globalized world, that music is overwhelmingly in English.

This isn't just background noise. English-language music has become the soundtrack of modern life, crossing borders and connecting people who might not share anything else in common. A teenager in Tokyo, a student in Oslo, and a young adult in Lagos might all be listening to the same song right now. That's remarkable when you think about it.

But here's what makes it even more interesting: music isn't just entertainment. It's a mirror that reflects society, a megaphone that amplifies voices, and a time capsule that preserves moments in history. When you listen to a song, you're not just hearing notes and words. You're experiencing culture.

In this chapter, we're going to explore how to really listen to music. Not just enjoy it, but understand it. We'll learn how to analyze lyrics, connect songs to their cultural context, and appreciate why certain music matters beyond just sounding good.`,
    },
    {
      id: 'engelsk-vg1-11-1-n-section1',
      type: 'text',
      content: `## A Brief History of English-Language Music

Let's take a quick journey through time. Understanding where music came from helps us appreciate where it is now.

Rock and roll exploded in the 1950s, combining African American blues and gospel with country music. Artists like Elvis Presley and Chuck Berry created something new and exciting that scandalized parents and thrilled teenagers. This wasn't just a new sound; it was a cultural revolution. For the first time, young people had their own music, separate from their parents' tastes.

The 1960s brought the British Invasion, with The Beatles and The Rolling Stones proving that English-language pop music was now a global phenomenon. At the same time, folk music became political, with artists like Bob Dylan writing songs about civil rights and war. Music became a tool for social change.

Hip hop emerged from the Bronx in the 1970s, giving voice to communities that had been ignored by mainstream media. What started as block parties became a global cultural force. Today, hip hop isn't just music; it's fashion, language, attitude, and identity.

Electronic music, pop, R&B, country, indie rock, and countless subgenres have all contributed to the rich tapestry of English-language music. Each genre carries its own history, its own values, and its own way of seeing the world.`,
    },
    {
      id: 'engelsk-vg1-11-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Where did hip hop music originate?',
        options: [
          { id: 'a', text: 'Los Angeles in the 1980s', isCorrect: false },
          { id: 'b', text: 'The Bronx, New York in the 1970s', isCorrect: true },
          { id: 'c', text: 'London in the 1960s', isCorrect: false },
          { id: 'd', text: 'Memphis in the 1950s', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Hip hop emerged from the Bronx, New York in the 1970s. It began at block parties and gave voice to communities that had been marginalized by mainstream media.',
      },
    },
    {
      id: 'engelsk-vg1-11-1-n-section2',
      type: 'text',
      content: `## How to Analyze Song Lyrics

When we analyze a poem in English class, we look for literary devices, themes, and meaning. Song lyrics deserve the same attention. After all, some of the most powerful poetry of our time is being written by songwriters.

Start with the content. What is the song actually about? Sometimes it's obvious, but often there are layers beneath the surface. A love song might also be about addiction. A party anthem might actually be about loneliness. Listen carefully to the words and ask yourself: what story is being told here?

Next, look at the technique. Songwriters use all the same tools as poets. Metaphors compare things without using "like" or "as." Similes make comparisons using those words. Repetition emphasizes important ideas. Rhyme creates rhythm and makes lyrics memorable. Imagery paints pictures in your mind.

Consider the register, which is the level of formality. Is the language casual or formal? Slang-filled or poetic? This tells you something about the artist and their intended audience.

Finally, think about what the song makes you feel. Good music creates emotional responses. Understanding how the lyrics contribute to those feelings is part of the analysis.`,
    },
    {
      id: 'engelsk-vg1-11-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What is the difference between a metaphor and a simile?',
        options: [
          { id: 'a', text: 'Metaphors are longer than similes', isCorrect: false },
          { id: 'b', text: 'Similes use "like" or "as" while metaphors do not', isCorrect: true },
          { id: 'c', text: 'Metaphors are only used in poetry, similes in songs', isCorrect: false },
          { id: 'd', text: 'There is no difference; they are the same thing', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A simile compares two things using "like" or "as" (e.g., "Life is like a box of chocolates"). A metaphor makes a direct comparison without these words (e.g., "Life is a journey").',
      },
    },
    {
      id: 'engelsk-vg1-11-1-n-section3',
      type: 'text',
      content: `## Context Matters

You can't fully understand a song without knowing something about who made it and when. Context is everything.

Consider the artist's background. Where did they grow up? What experiences shaped them? Kendrick Lamar's songs about Compton carry weight because he actually lived there. Taylor Swift's songs about being a teenage outcast resonate because she was one. Authenticity matters.

Historical context is equally important. "What's Going On" by Marvin Gaye was released in 1971, during the Vietnam War and at the height of the civil rights movement. Knowing this transforms how you hear the song. It's not just about personal problems; it's a plea for a nation to examine itself.

Genre conventions also matter. Country music has traditions about storytelling and themes. Hip hop has conventions about flow and wordplay. Pop music has expectations about hooks and accessibility. Understanding these conventions helps you appreciate when artists follow them and when they deliberately break them.

Even the music industry context matters. Was this song from an independent artist fighting for attention, or a major label release with millions in marketing? These factors shape what gets made and how it sounds.`,
    },
    {
      id: 'engelsk-vg1-11-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why is understanding context important when analyzing a song?',
        options: [
          { id: 'a', text: 'It helps you memorize the lyrics better', isCorrect: false },
          { id: 'b', text: 'It reveals deeper meanings connected to the artist and their time', isCorrect: true },
          { id: 'c', text: 'It makes the song sound better musically', isCorrect: false },
          { id: 'd', text: 'It is required by copyright law', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Understanding context (the artist\'s background, historical period, and cultural moment) reveals deeper meanings in songs that you might miss otherwise. A protest song means more when you understand what was being protested.',
      },
    },
    {
      id: 'engelsk-vg1-11-1-n-section4',
      type: 'text',
      content: `## Music as Social Commentary

Throughout history, musicians have used their platform to comment on society, challenge injustice, and inspire change.

The civil rights movement had its anthems. "We Shall Overcome" became the unofficial song of the movement. Sam Cooke's "A Change Is Gonna Come" expressed hope and pain simultaneously. These songs weren't just entertainment; they were tools of resistance.

Punk rock in the 1970s was explicitly political, rejecting mainstream values and authority. The Sex Pistols' "God Save the Queen" was so controversial it was banned by the BBC. Whether you agree with their politics or not, you can't deny their impact.

Hip hop has carried the tradition forward. From Grandmaster Flash's "The Message" to Kendrick Lamar's "Alright," the genre has consistently addressed racism, poverty, and social inequality. When Black Lives Matter protesters chanted "We gon' be alright," they were quoting a song that had become an anthem for a movement.

Even pop music can be political. Beyonce's "Formation" celebrated Black culture and addressed police brutality. Lady Gaga's "Born This Way" became an LGBTQ+ anthem. These artists reach millions, and their messages matter.`,
    },
    {
      id: 'engelsk-vg1-11-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Which of the following is an example of music being used for social change?',
        options: [
          { id: 'a', text: 'A jingle written for a commercial advertisement', isCorrect: false },
          { id: 'b', text: 'Background music in an elevator', isCorrect: false },
          { id: 'c', text: '"We Shall Overcome" being sung at civil rights protests', isCorrect: true },
          { id: 'd', text: 'A lullaby sung to help a baby sleep', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: '"We Shall Overcome" became the unofficial anthem of the American civil rights movement. It was sung at marches and protests, uniting people and giving voice to their struggle for equality.',
      },
    },
    {
      id: 'engelsk-vg1-11-1-n-section5',
      type: 'text',
      content: `## Your Turn: Becoming a Critical Listener

Now that you have the tools, it's time to use them. The next time you listen to music, try to go beyond just enjoying the sound.

Ask yourself questions. What is this song really about? What emotions does it create and how? What literary devices can you identify? What do you know about the artist and their context? Does this song connect to any larger social issues?

Try comparing songs. How do different artists approach similar themes? How has a genre evolved over time? What makes one song feel authentic while another feels manufactured?

Discuss music with others. You might be surprised how differently people interpret the same song. There's rarely one "correct" reading of a piece of art. Your interpretation, supported by evidence from the text, is valid.

Remember that critical analysis doesn't have to ruin enjoyment. In fact, understanding music more deeply usually increases appreciation. When you know how the magic trick works, you can still be amazed by the skill of the magician.

Music is one of humanity's greatest achievements, and English-language music is now a global language in itself. Learning to really hear it is a skill worth developing.`,
    },
    {
      id: 'engelsk-vg1-11-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the best approach to critical music analysis?',
        options: [
          { id: 'a', text: 'Only analyze music you dislike', isCorrect: false },
          { id: 'b', text: 'Focus only on whether the beat is good', isCorrect: false },
          { id: 'c', text: 'Consider lyrics, technique, context, and impact together', isCorrect: true },
          { id: 'd', text: 'Always agree with professional music critics', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Good music analysis considers multiple elements: the lyrics and their meaning, the techniques used, the context of creation, and the song\'s cultural impact. This holistic approach gives the deepest understanding.',
      },
    },
    {
      id: 'engelsk-vg1-11-1-n-summary',
      type: 'text',
      content: `## Summary: Music as Cultural Expression

You've explored how to engage with English-language music as more than just entertainment. Here are the key takeaways:

**Music History:**
English-language music has evolved through rock and roll, British Invasion, hip hop, and countless other genres. Each carries cultural significance beyond the sound.

**Analyzing Lyrics:**
Look for content (what's it about?), technique (literary devices), register (level of formality), and emotional impact. Song lyrics deserve the same attention as poetry.

**Context:**
Understanding the artist's background, historical moment, and genre conventions deepens appreciation. Songs mean more when you know their story.

**Social Commentary:**
Music has always been a tool for social change, from civil rights anthems to modern protest songs. Artists use their platform to comment on society.

**Key Terms:**
Literary devices (metaphor, simile, imagery), register (formality level), genre conventions (rules of a musical style), social commentary (art that addresses social issues).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 11.2 NARRATIVE: Film and Television
// ============================================================================

export const CHAPTER_ENGELSK_VG1_11_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-11-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '11.2',
  title: 'Film and Television',
  subtitle: 'Narrative Version',
  description: 'Learn to analyze film and TV as powerful cultural expressions that shape how we see the world.',
  estimatedMinutes: 50,
  competenceGoals: [
    'discuss and reflect on form, content and literary devices in English-language cultural expressions from various media, including music, film and games',
  ],
  linkedChapterId: 'engelsk-vg1-11-2',
  content: [
    {
      id: 'engelsk-vg1-11-2-n-intro',
      type: 'text',
      content: `## The World Through a Screen

How much of what you know about America comes from actually being there? For most of us, the answer is: not much. Instead, our understanding of American life, British culture, and the entire English-speaking world comes largely from screens. Movies and TV shows have shaped how we imagine these places, for better and for worse.

This is the remarkable power of visual media. When you watch a film, you're not just being entertained. You're absorbing ideas about how the world works, what's normal, who matters, and what kinds of lives are possible. Hollywood doesn't just reflect culture; it creates it.

Think about the American high school. You've probably never attended one, yet you have strong mental images of what it's like: lockers in hallways, cafeteria hierarchies, prom, football games, cheerleaders. Where did these images come from? Almost certainly from movies and TV shows.

In this chapter, we're going to learn how to watch critically. This doesn't mean criticizing everything or refusing to enjoy what we watch. It means understanding how films and TV shows work, what choices their creators made, and what messages they send, whether intentionally or not.`,
    },
    {
      id: 'engelsk-vg1-11-2-n-section1',
      type: 'text',
      content: `## The Dominance of English-Language Media

Before we dive into analysis, let's acknowledge an important reality: English-language media dominates the world. Hollywood produces the most globally distributed films. American and British TV series stream in every country. This isn't neutral; it has cultural implications.

When Hollywood is the default, American perspectives become normalized. The way Americans view history, relationships, heroism, and morality gets exported worldwide. We don't always notice this because it's so pervasive. It just feels like "how movies are."

This dominance also affects whose stories get told. For decades, Hollywood protagonists were overwhelmingly white, male, and American. People of color, women, LGBTQ+ individuals, and non-Americans were often reduced to stereotypes or supporting roles. This is slowly changing, but the history matters.

There's also the question of cultural flattening. When everyone watches the same content, local storytelling traditions can be overshadowed. Norwegian films, for example, struggle to compete with Hollywood budgets and marketing. This doesn't mean local cinema disappears, but it does face challenges.

Understanding this context helps us watch more critically. When we recognize that what we're seeing represents particular perspectives, not universal truth, we can engage more thoughtfully.`,
    },
    {
      id: 'engelsk-vg1-11-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is one consequence of Hollywood\'s global dominance?',
        options: [
          { id: 'a', text: 'All countries now make films in English', isCorrect: false },
          { id: 'b', text: 'American perspectives and values become normalized worldwide', isCorrect: true },
          { id: 'c', text: 'Local filmmaking has completely disappeared', isCorrect: false },
          { id: 'd', text: 'Movies have become shorter', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'When Hollywood dominates global entertainment, American perspectives on history, values, and culture become normalized. Audiences worldwide absorb American viewpoints, sometimes without realizing it.',
      },
    },
    {
      id: 'engelsk-vg1-11-2-n-section2',
      type: 'text',
      content: `## Narrative Elements in Film

Let's start with storytelling. Films and TV shows tell stories, and understanding how those stories are constructed helps us analyze them.

Plot structure is the skeleton of a story. Most mainstream films follow a three-act structure: setup (introduce characters and situation), confrontation (problems and obstacles), and resolution (problems resolved). TV shows might use different structures, especially serialized dramas that unfold over seasons.

Character development is how characters change throughout the story. A good protagonist usually undergoes some transformation. They learn something, overcome a flaw, or are changed by their experiences. Flat characters who don't change feel less satisfying.

Theme is the underlying message or idea. A film might be "about" a heist on the surface level, but its theme might be about loyalty, greed, or the American Dream. Good films work on multiple levels.

Conflict drives the story forward. This might be person vs. person, person vs. society, person vs. nature, or person vs. self. Most compelling stories have multiple types of conflict happening simultaneously.

When analyzing, ask yourself: What is this story really about? What does the protagonist want, and what's stopping them? How do they change? What is the film saying about life, people, or society?`,
    },
    {
      id: 'engelsk-vg1-11-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What is the "theme" of a film?',
        options: [
          { id: 'a', text: 'The main character\'s name', isCorrect: false },
          { id: 'b', text: 'The underlying message or central idea', isCorrect: true },
          { id: 'c', text: 'The movie\'s soundtrack', isCorrect: false },
          { id: 'd', text: 'The location where it was filmed', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A theme is the underlying message or central idea of a film. While a movie might be "about" a superhero on the surface, its theme might explore deeper ideas like responsibility, sacrifice, or identity.',
      },
    },
    {
      id: 'engelsk-vg1-11-2-n-section3',
      type: 'text',
      content: `## Cinematic Techniques

Films aren't just stories; they're visual experiences. Filmmakers use specific techniques to create meaning and emotion. Learning to notice these choices makes you a more sophisticated viewer.

Camera angles and shots communicate a lot. A low-angle shot (looking up at a character) makes them seem powerful. A high-angle shot (looking down) makes them seem vulnerable or weak. A close-up creates intimacy; a wide shot establishes location or isolation.

Lighting sets mood. High-key lighting (bright, few shadows) creates a cheerful, open feeling. Low-key lighting (lots of shadows, contrast) creates mystery or menace. Pay attention to where light comes from and what it reveals or hides.

Sound and music are often overlooked but incredibly powerful. The score (background music) shapes how we feel. Sound effects create atmosphere. Silence can be more powerful than any music. Notice how sound makes you feel during key scenes.

Editing and pacing control time and rhythm. Quick cuts create excitement or tension. Long takes create realism or discomfort. The order in which we see things affects meaning. A reaction shot before showing what's being reacted to creates suspense.

These techniques aren't random. Every choice is deliberate. When analyzing a scene, ask: Why did they shoot it this way? What effect does it create?`,
    },
    {
      id: 'engelsk-vg1-11-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What effect does a low-angle camera shot typically create?',
        options: [
          { id: 'a', text: 'It makes the character appear weak and vulnerable', isCorrect: false },
          { id: 'b', text: 'It makes the character appear powerful or intimidating', isCorrect: true },
          { id: 'c', text: 'It shows the character\'s surroundings clearly', isCorrect: false },
          { id: 'd', text: 'It indicates the scene is a flashback', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A low-angle shot looks up at a character, making them appear larger, more powerful, and potentially intimidating. This technique is often used for villains, heroes at triumphant moments, or authority figures.',
      },
    },
    {
      id: 'engelsk-vg1-11-2-n-section4',
      type: 'text',
      content: `## Representation and Stereotypes

One of the most important aspects of critical viewing is paying attention to representation. Who appears on screen? How are they portrayed? Whose stories are being told?

For decades, mainstream media has been criticized for stereotyping various groups. Women were often reduced to love interests or victims. People of color were cast in narrow, often negative roles. LGBTQ+ characters were absent, villainized, or used as jokes. Disabled people were either absent or defined entirely by their disabilities.

These patterns matter because media shapes perception. If the only Muslims you see in films are terrorists, that affects how you view Muslims in real life, even if you know intellectually that it's unfair. If women are always rescued by men in movies, it subtly reinforces ideas about gender roles.

The "white savior" trope is a common example. In films about racism or colonialism, the story often centers on a white character who helps or saves people of color. This positions white characters as active agents while reducing others to passive recipients of help.

Progress is happening, but slowly. More diverse casts, more stories centered on marginalized perspectives, and more creators from underrepresented groups are changing the landscape. But critical viewers should still ask: Who is centered in this story? Whose perspective are we seeing? Who is missing?`,
    },
    {
      id: 'engelsk-vg1-11-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the "white savior" trope in film?',
        options: [
          { id: 'a', text: 'A film genre about rescue missions', isCorrect: false },
          { id: 'b', text: 'Stories where a white character saves or helps people of color', isCorrect: true },
          { id: 'c', text: 'Films that only cast white actors', isCorrect: false },
          { id: 'd', text: 'Historical dramas set in Europe', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The "white savior" trope refers to stories where a white protagonist saves or helps people of color, often positioning the white character as the active hero while reducing others to passive roles. This is common in films about racism, colonialism, or poverty.',
      },
    },
    {
      id: 'engelsk-vg1-11-2-n-section5',
      type: 'text',
      content: `## Putting It All Together

Now you have the tools to analyze film and television critically. Let's see how they work together.

When you watch something, start by engaging with it naturally. Enjoy the experience. Note your emotional reactions. What moments stood out? What confused you? What moved you?

Then, think about narrative. What was the story really about? How did characters change? What themes emerged? What was the film saying about its subject?

Consider technique. What visual and audio choices did you notice? How did they contribute to the emotional experience? Were there any particularly striking moments of cinematography, sound design, or editing?

Examine representation. Who was centered in the story? How were different groups portrayed? Were there stereotypes? Whose perspective was missing?

Think about context. When was this made? Who made it? What was happening in the world? How does this context affect meaning?

Finally, form your own interpretation. What do you think this film or show is really about? What does it do well? What could it do better? How does it compare to other works?

This process gets easier with practice. Eventually, critical thinking becomes automatic. You'll find yourself noticing things you never saw before.`,
    },
    {
      id: 'engelsk-vg1-11-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What should you consider when analyzing representation in film?',
        options: [
          { id: 'a', text: 'Only whether the actors were famous', isCorrect: false },
          { id: 'b', text: 'Who is centered, how groups are portrayed, and whose perspective is missing', isCorrect: true },
          { id: 'c', text: 'Only the number of characters in the film', isCorrect: false },
          { id: 'd', text: 'Whether the film won awards', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Analyzing representation means examining who is centered in the story, how different groups are portrayed (positively, negatively, stereotypically), and whose perspectives or stories are absent from the narrative.',
      },
    },
    {
      id: 'engelsk-vg1-11-2-n-summary',
      type: 'text',
      content: `## Summary: Critical Film and TV Analysis

You've learned how to engage critically with visual media. Here are the key points:

**Media Dominance:**
English-language media, especially Hollywood, dominates globally. This shapes how the world views American and British culture, and normalizes certain perspectives.

**Narrative Elements:**
Analyze plot structure, character development, theme, and conflict. Ask what the story is really about beneath the surface.

**Cinematic Techniques:**
Camera angles, lighting, sound, and editing all create meaning. These choices are deliberate and worth analyzing.

**Representation:**
Pay attention to who appears on screen and how they're portrayed. Notice stereotypes and ask whose stories are being told.

**Key Terms:**
Theme (underlying message), three-act structure (setup, confrontation, resolution), cinematography (camera work), representation (who is shown and how), stereotype (oversimplified portrayal of a group).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 11.3 NARRATIVE: Games and Digital Media
// ============================================================================

export const CHAPTER_ENGELSK_VG1_11_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-11-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '11.3',
  title: 'Games and Digital Media',
  subtitle: 'Narrative Version',
  description: 'Explore video games as a legitimate art form worthy of critical analysis.',
  estimatedMinutes: 45,
  competenceGoals: [
    'discuss and reflect on form, content and literary devices in English-language cultural expressions from various media, including music, film and games',
  ],
  linkedChapterId: 'engelsk-vg1-11-3',
  content: [
    {
      id: 'engelsk-vg1-11-3-n-intro',
      type: 'text',
      content: `## More Than Just Games

Let's start with a fact that might surprise some people: video games are now the largest entertainment industry in the world. Bigger than movies. Bigger than music. Combined.

Yet games still fight for respect as a legitimate art form. When someone says they spent the weekend watching films, that's culture. When someone says they spent the weekend playing games, that's often dismissed as wasting time. This double standard is fading, but it persists.

Here's the thing: games deserve serious analysis just like any other medium. They tell stories, create emotional experiences, reflect cultural values, and can be just as meaningful as literature or film. In some ways, they're even more interesting to analyze because they add something unique: interactivity.

When you watch a film, you're a passive observer. When you play a game, you're an active participant. Your choices matter (or at least feel like they do). This creates a different kind of engagement and raises different analytical questions.

In this chapter, we'll explore how to analyze games critically. Whether you're a hardcore gamer or rarely touch a controller, understanding this medium helps you understand modern culture.`,
    },
    {
      id: 'engelsk-vg1-11-3-n-section1',
      type: 'text',
      content: `## Games as Storytelling

Many modern games are narrative experiences that rival novels and films in complexity and emotional depth.

Consider the narrative elements games share with other media. They have plots, characters, themes, and conflict. A game like "The Last of Us" tells a story about love, loss, and moral compromise that's as compelling as any film. "Red Dead Redemption 2" explores themes of loyalty, change, and mortality through a character study that unfolds over dozens of hours.

But games add something unique: player agency. In many games, you make choices that affect the story. Do you save this character or that one? Do you pursue revenge or forgiveness? These choices make the narrative feel personal in a way other media can't match.

Even games without explicit stories tell narratives. A match of "Fortnite" creates a story: the journey from landing to final victory (or defeat). "Minecraft" generates emergent narratives through player creativity. The stories might be simpler, but they're still stories.

World-building is another strength. Games can create immersive fictional worlds that players explore for hundreds of hours. The lore of games like "The Elder Scrolls" or "Mass Effect" rivals fantasy novels in depth and detail.

When analyzing games as stories, ask: What narrative is being told? How does player choice affect it? What themes emerge? How does the interactive nature change the storytelling?`,
    },
    {
      id: 'engelsk-vg1-11-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What makes video game storytelling unique compared to film?',
        options: [
          { id: 'a', text: 'Games have better graphics than films', isCorrect: false },
          { id: 'b', text: 'Player agency and interactivity affect the narrative experience', isCorrect: true },
          { id: 'c', text: 'Games are always longer than films', isCorrect: false },
          { id: 'd', text: 'Games cannot tell emotional stories', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Unlike passive media like film, games offer player agency and interactivity. Players make choices that can affect the story, creating a more personal and engaged narrative experience.',
      },
    },
    {
      id: 'engelsk-vg1-11-3-n-section2',
      type: 'text',
      content: `## Gameplay as Meaning

Here's something fascinating about games: the mechanics themselves communicate meaning. How a game works isn't just about fun; it's about ideas.

Think about what a game rewards. In many shooters, you're rewarded for killing efficiently. In "Stardew Valley," you're rewarded for community, patience, and care. In "Papers, Please," you're rewarded for following rules, even when those rules are morally questionable. These reward systems embed values.

Consider what a game makes difficult. If a game makes combat easy but relationships hard, it's saying something about what matters. If a game makes you repeat actions endlessly, it might be commenting on mundane labor or obsessive behavior.

"Spec Ops: The Line" is a famous example of mechanics as meaning. It's a shooter that gradually makes the player complicit in war crimes, then asks: why did you keep playing? The discomfort is the point. The game uses its mechanics to critique the very genre it belongs to.

Even multiplayer games communicate values. Competitive games often reinforce ideas about individual achievement and zero-sum competition. Cooperative games encourage teamwork and shared success. Battle royale games, where only one survives, create a different social dynamic than team-based shooters.

When analyzing games, ask: What does the gameplay reward? What does it punish? What behaviors does it encourage? What values are embedded in how it works?`,
    },
    {
      id: 'engelsk-vg1-11-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'How can game mechanics communicate meaning?',
        options: [
          { id: 'a', text: 'Through the price of the game', isCorrect: false },
          { id: 'b', text: 'Through what behaviors the game rewards and punishes', isCorrect: true },
          { id: 'c', text: 'Through the number of levels', isCorrect: false },
          { id: 'd', text: 'Through the game\'s age rating', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Game mechanics communicate meaning through what they reward, punish, make easy, or make difficult. A game that rewards violence embeds different values than one that rewards cooperation or creativity.',
      },
    },
    {
      id: 'engelsk-vg1-11-3-n-section3',
      type: 'text',
      content: `## Aesthetics and Atmosphere

Games are audio-visual experiences, and their aesthetics deserve attention just like film.

Visual style varies enormously. Some games aim for photorealism, trying to look like the real world. Others choose stylized approaches: the cel-shading of "Borderlands," the pixel art of indie games, the painterly look of "Okami." These choices aren't just about technology; they communicate tone and meaning.

Sound design in games is often underappreciated. The score creates emotional atmosphere. Sound effects provide feedback and immersion. Voice acting brings characters to life. Ambient sounds build worlds. Many gamers can recognize iconic sound effects instantly, from Mario's coin collection to the Minecraft cave ambiance.

Environmental storytelling is something games do particularly well. Instead of being told what happened, you discover it through exploration. A room tells a story through its objects, its damage, its lighting. Games like "Gone Home" or "What Remains of Edith Finch" are almost entirely built around this technique.

Atmosphere is the overall feeling a game creates. The oppressive dread of a survival horror game. The wonder of exploration in an open world. The cozy comfort of a farming simulator. Great games create consistent atmospheres that make their worlds feel real and emotionally engaging.

When analyzing aesthetics, ask: What visual style was chosen and why? How does sound contribute to the experience? What stories are told through the environment? What atmosphere is created?`,
    },
    {
      id: 'engelsk-vg1-11-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is "environmental storytelling" in games?',
        options: [
          { id: 'a', text: 'Games about environmental issues', isCorrect: false },
          { id: 'b', text: 'Discovering narrative through exploration and environmental details', isCorrect: true },
          { id: 'c', text: 'Games set outdoors in nature', isCorrect: false },
          { id: 'd', text: 'The game\'s background music', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Environmental storytelling means discovering narrative through the game world itself, examining objects, spaces, and details to piece together what happened. Instead of being told the story, you find it.',
      },
    },
    {
      id: 'engelsk-vg1-11-3-n-section4',
      type: 'text',
      content: `## Representation in Games

Like all media, games raise questions about representation. Who are the protagonists? How are different groups portrayed? Whose fantasies are being served?

Historically, games have been criticized for narrow representation. Protagonists were overwhelmingly white men. Women were often sexualized or reduced to damsels needing rescue. People of color were underrepresented or stereotyped. LGBTQ+ characters were rare.

This is changing, though slowly. Games like "The Last of Us Part II" feature LGBTQ+ protagonists. "Life is Strange" centers on young women. More games feature protagonists of color. Character creation systems let players represent themselves.

But problems remain. Female characters are still often designed for male gaze. Some genres remain very homogeneous. Disability representation is rare. The industry itself lacks diversity in who makes games, which affects what games get made.

There's also the question of whose fantasies games serve. Military shooters often present American military action uncritically. Games set in "exotic" locations can reproduce colonial perspectives. Historical games make choices about whose history matters.

When analyzing representation, ask: Who are the heroes? Who are the villains? How are women portrayed? How are minorities portrayed? Whose perspective does the game adopt?`,
    },
    {
      id: 'engelsk-vg1-11-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'How has representation in video games changed in recent years?',
        options: [
          { id: 'a', text: 'Games no longer have any characters at all', isCorrect: false },
          { id: 'b', text: 'More diverse protagonists including women, people of color, and LGBTQ+ characters', isCorrect: true },
          { id: 'c', text: 'All games now feature the same protagonist', isCorrect: false },
          { id: 'd', text: 'Representation has not changed at all', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'While problems remain, recent years have seen more diverse protagonists in games, including women, people of color, and LGBTQ+ characters. Games like "The Last of Us Part II" and "Life is Strange" represent this shift.',
      },
    },
    {
      id: 'engelsk-vg1-11-3-n-section5',
      type: 'text',
      content: `## Games and Culture

Games don't exist in a vacuum. They both reflect and shape the cultures they come from.

Consider how games reflect their origins. Japanese games often feel different from American games, not just in aesthetics but in values and structures. European indie games have their own sensibilities. The culture of creation shapes the creation.

Games also shape culture. Gaming terminology enters everyday language: "leveling up," "final boss," "respawn." Gaming aesthetics influence other media. Esports fill stadiums. Gaming communities form identities and subcultures.

There's ongoing debate about games' cultural impact. Do violent games cause violence? Research mostly says no, but the debate continues. Do games normalize certain behaviors? This is harder to answer. Can games be art? Most critics now say yes, though the conversation continues.

What's certain is that games matter. They're where millions of people, especially young people, spend their time, form communities, and engage with ideas. Dismissing games means missing a huge part of contemporary culture.

Whether you play games yourself or not, understanding this medium helps you understand the modern world. Games are cultural artifacts worthy of the same critical attention we give to any art form.`,
    },
    {
      id: 'engelsk-vg1-11-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why is it important to analyze video games as cultural artifacts?',
        options: [
          { id: 'a', text: 'To determine which games are the most fun', isCorrect: false },
          { id: 'b', text: 'Because games reflect and shape culture, values, and how people see the world', isCorrect: true },
          { id: 'c', text: 'Because all games are educational', isCorrect: false },
          { id: 'd', text: 'To decide game prices', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Games are important cultural artifacts because they both reflect the values of their creators and shape the perspectives of their players. As the largest entertainment industry, their cultural influence is significant.',
      },
    },
    {
      id: 'engelsk-vg1-11-3-n-summary',
      type: 'text',
      content: `## Summary: Games as Cultural Expression

You've learned to analyze video games as a legitimate art form. Key takeaways:

**Games as Storytelling:**
Games tell stories through narrative, player choice, and world-building. Player agency makes the experience unique.

**Gameplay as Meaning:**
Game mechanics embed values through what they reward, punish, and make possible. How a game works is part of what it means.

**Aesthetics:**
Visual style, sound design, and environmental storytelling create atmosphere and communicate meaning.

**Representation:**
Like all media, games raise questions about who is represented and how. Progress is happening but problems remain.

**Cultural Significance:**
Games are the largest entertainment industry and a major cultural force. They deserve serious critical analysis.

**Key Terms:**
Player agency (ability to make choices), environmental storytelling (narrative through exploration), game mechanics (how the game works), emergent narrative (stories created through play).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 11.4 NARRATIVE: Cross-cultural Communication
// ============================================================================

export const CHAPTER_ENGELSK_VG1_11_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-11-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '11.4',
  title: 'Cross-cultural Communication',
  subtitle: 'Narrative Version',
  description: 'Develop skills for effective communication across cultural boundaries.',
  estimatedMinutes: 45,
  competenceGoals: [
    'explore and reflect on diversity and social conditions in the English-speaking world',
  ],
  linkedChapterId: 'engelsk-vg1-11-4',
  content: [
    {
      id: 'engelsk-vg1-11-4-n-intro',
      type: 'text',
      content: `## A World of Differences

Imagine you're starting a new job. Your team includes colleagues from India, the United States, Japan, and Nigeria. You share a common language, English, but soon you realize that language is just the beginning. You're navigating different assumptions, expectations, and ways of being in the world.

Welcome to cross-cultural communication. In our globalized world, you'll increasingly interact with people whose cultural backgrounds differ from yours. This isn't just about international travel; it's about daily life in diverse societies, online interactions, and workplaces that span the globe.

Here's the challenging part: culture is often invisible to those inside it. The way you communicate feels natural and normal to you. When others do it differently, it can seem wrong, rude, or confusing. Learning to see your own cultural programming, and to respect others', is essential for effective communication.

In this chapter, we'll explore the dimensions of cultural difference, develop skills for navigating them, and learn to communicate effectively without losing our own identity or disrespecting others.`,
    },
    {
      id: 'engelsk-vg1-11-4-n-section1',
      type: 'text',
      content: `## Dimensions of Cultural Difference

Cultures differ in systematic ways. Understanding these dimensions helps us make sense of differences without reducing individuals to stereotypes.

Communication style varies from direct to indirect. Some cultures, like many Northern European and American contexts, value saying exactly what you mean. Others, like many Asian cultures, communicate more indirectly, expecting listeners to read between the lines. Neither is better; they're just different, and misunderstandings arise when they meet.

Concepts of time differ significantly. In monochronic cultures, time is linear, schedules are sacred, and punctuality is crucial. In polychronic cultures, relationships matter more than schedules, multiple things happen simultaneously, and being late for a good reason is understandable. Norwegians tend to be monochronic; many Latin American and African cultures are more polychronic.

Individualism versus collectivism affects everything from decision-making to self-presentation. Individualistic cultures (like the US) emphasize personal achievement and independence. Collectivistic cultures (like Japan) prioritize group harmony and interdependence. This shapes how people introduce themselves, take credit, and handle conflict.

Power distance refers to how cultures handle inequality. High power distance cultures accept hierarchical differences; you don't challenge your boss or teacher. Low power distance cultures expect more equality; questioning authority is normal. Norway is notably low power distance; many Asian countries are higher.`,
    },
    {
      id: 'engelsk-vg1-11-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What does "power distance" refer to in cultural studies?',
        options: [
          { id: 'a', text: 'The physical distance between people when talking', isCorrect: false },
          { id: 'b', text: 'How cultures handle inequality and hierarchical relationships', isCorrect: true },
          { id: 'c', text: 'The distance to the nearest power source', isCorrect: false },
          { id: 'd', text: 'The volume of voice used in conversation', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Power distance describes how cultures handle inequality and hierarchy. High power distance cultures accept that authority should not be questioned, while low power distance cultures expect more equality and open dialogue.',
      },
    },
    {
      id: 'engelsk-vg1-11-4-n-section2',
      type: 'text',
      content: `## Nonverbal Communication Across Cultures

Words are only part of communication. Nonverbal signals often carry more weight, and they vary dramatically across cultures.

Eye contact norms differ widely. In many Western cultures, direct eye contact signals honesty and attention. In some Asian and African cultures, prolonged eye contact with authority figures is disrespectful. You might think someone is shifty when they're actually being respectful, or vice versa.

Personal space varies too. Scandinavians generally prefer more distance than many Southern European or Latin American cultures. What feels comfortable to you might feel cold and distant, or uncomfortably close, to someone else.

Gestures can be dangerous territory. The "OK" sign (thumb and forefinger in a circle) means approval in the US but is offensive in Brazil and some European countries. Nodding means yes in most places but no in Bulgaria and parts of Greece. The thumbs-up can be rude in parts of the Middle East.

Touch norms differ dramatically. Some cultures are high-contact: hugging, cheek-kissing, and touching while talking are normal. Others are low-contact: physical touch is reserved for close relationships. Norwegians tend toward low-contact; this can seem cold to people from high-contact cultures.

The key is observation and adaptation. When in doubt, watch what others do and follow their lead. Don't assume your nonverbal habits are universal.`,
    },
    {
      id: 'engelsk-vg1-11-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Why is it important to be aware of nonverbal communication in cross-cultural contexts?',
        options: [
          { id: 'a', text: 'Nonverbal communication is the same everywhere', isCorrect: false },
          { id: 'b', text: 'Gestures, eye contact, and personal space norms vary across cultures', isCorrect: true },
          { id: 'c', text: 'Nonverbal communication is not important', isCorrect: false },
          { id: 'd', text: 'Only verbal communication matters in business', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Nonverbal cues like gestures, eye contact, personal space, and touch vary significantly across cultures. What is polite in one culture may be rude in another, making awareness essential to avoid misunderstandings.',
      },
    },
    {
      id: 'engelsk-vg1-11-4-n-section3',
      type: 'text',
      content: `## Building Intercultural Competence

Intercultural competence isn't about memorizing facts about every culture. It's about developing attitudes, knowledge, and skills that help you navigate difference effectively.

The foundation is attitudes. You need curiosity, not fear, about difference. You need respect for other ways of doing things, even when they conflict with your own. You need tolerance for ambiguity, accepting that you won't always understand everything. And you need humility about your own cultural programming.

Knowledge matters too. Learning about specific cultures you'll interact with is helpful. But more important is general knowledge: understanding that culture exists, that it shapes behavior, and that your way isn't the only way. Knowing about cultural dimensions helps you interpret differences when you encounter them.

Skills develop through practice. Active listening, where you truly focus on understanding rather than preparing your response. Adapting your communication style to your audience. Asking clarifying questions without judgment. Observing carefully before acting. These skills improve with use.

Self-awareness is crucial. Before you can understand others' cultures, you need to understand your own. What are your assumptions about how things should be done? Where do those assumptions come from? How might they seem strange to others?`,
    },
    {
      id: 'engelsk-vg1-11-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is the foundation of intercultural competence?',
        options: [
          { id: 'a', text: 'Memorizing facts about every country', isCorrect: false },
          { id: 'b', text: 'Curiosity, respect, tolerance for ambiguity, and humility', isCorrect: true },
          { id: 'c', text: 'Speaking as many languages as possible', isCorrect: false },
          { id: 'd', text: 'Avoiding people from other cultures', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Intercultural competence is built on attitudes: curiosity about difference, respect for other ways, tolerance for not understanding everything, and humility about your own cultural assumptions.',
      },
    },
    {
      id: 'engelsk-vg1-11-4-n-section4',
      type: 'text',
      content: `## Avoiding Stereotypes While Recognizing Patterns

Here's a tension we need to address: cultural generalizations can help us understand differences, but they can also become harmful stereotypes. How do we navigate this?

The difference is in application. A generalization says "many people from culture X tend to do Y." A stereotype says "all people from culture X do Y" and often adds a value judgment. Generalizations are flexible starting points; stereotypes are rigid boxes.

Always treat individuals as individuals. Even if you know that a culture generally prefers indirect communication, the person in front of you might be very direct. Cultural background influences but doesn't determine behavior. Ask, observe, and respond to the actual person.

Be willing to be wrong. Your assumptions about someone's cultural background might be incorrect. They might be bicultural, acculturated, or simply different from the norm. Hold your expectations lightly and adjust based on reality.

Avoid the trap of "they all do that." When someone from another culture does something that surprises you, resist the urge to attribute it to their entire culture. Maybe it's personal. Maybe you misunderstood. Maybe it's a regional or generational thing. Don't over-generalize from limited data.

Remember that your culture has patterns too. To others, Norwegians might seem cold, reserved, and obsessed with outdoor activities. Are you like that? Maybe partially, maybe not. Others deserve the same complexity you'd want for yourself.`,
    },
    {
      id: 'engelsk-vg1-11-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What is the difference between a cultural generalization and a stereotype?',
        options: [
          { id: 'a', text: 'There is no difference; they mean the same thing', isCorrect: false },
          { id: 'b', text: 'Generalizations are flexible starting points; stereotypes are rigid and judgmental', isCorrect: true },
          { id: 'c', text: 'Stereotypes are always positive, generalizations are negative', isCorrect: false },
          { id: 'd', text: 'Generalizations only apply to large groups', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Generalizations acknowledge patterns ("many people tend to...") while remaining flexible. Stereotypes are rigid boxes that claim all members of a group behave the same way, often with negative judgments attached.',
      },
    },
    {
      id: 'engelsk-vg1-11-4-n-section5',
      type: 'text',
      content: `## Practical Tips for Cross-cultural Communication

Let's get practical. Here are strategies you can use in real cross-cultural interactions.

When misunderstandings happen, assume good intentions. Most cultural mistakes aren't malicious; they're just different norms. Give people the benefit of the doubt and address misunderstandings calmly.

Ask questions with genuine curiosity. "I noticed you did X. Is that common in your culture, or is it personal preference?" shows interest without judgment. Most people are happy to explain their background if asked respectfully.

Explain your own culture. When your behavior might seem strange to others, a brief explanation helps. "In Norway, we tend to be quite direct. I hope that doesn't come across as rude."

Mirror and adapt. Pay attention to how others communicate and adapt accordingly. If they're formal, be formal. If they value relationship-building before business, invest time in that. Flexibility is key.

Learn some basics. If you're interacting regularly with a particular culture, learn a few words of greeting in their language, understand major holidays, and know basic etiquette. This shows respect and effort.

Embrace discomfort. Cross-cultural communication is sometimes awkward. That's okay. Growth happens outside your comfort zone. Every awkward moment is a learning opportunity.

Remember that you're also representing your culture. Like it or not, you shape others' perceptions of Norwegians. Being a good ambassador helps everyone.`,
    },
    {
      id: 'engelsk-vg1-11-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-11-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What should you do when a cross-cultural misunderstanding occurs?',
        options: [
          { id: 'a', text: 'Assume the other person is being deliberately rude', isCorrect: false },
          { id: 'b', text: 'Assume good intentions and address it calmly', isCorrect: true },
          { id: 'c', text: 'Ignore it and hope it goes away', isCorrect: false },
          { id: 'd', text: 'Immediately end the conversation', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'When cross-cultural misunderstandings occur, assume good intentions. Most cultural mistakes are not deliberate rudeness but different norms. Address misunderstandings calmly and use them as learning opportunities.',
      },
    },
    {
      id: 'engelsk-vg1-11-4-n-summary',
      type: 'text',
      content: `## Summary: Communicating Across Cultures

You've developed your intercultural communication toolkit. Key points:

**Cultural Dimensions:**
Cultures vary in communication style, time orientation, individualism/collectivism, and power distance. Understanding these patterns helps interpret differences.

**Nonverbal Communication:**
Eye contact, personal space, gestures, and touch vary across cultures. What seems natural to you may be strange or rude elsewhere.

**Intercultural Competence:**
Build competence through attitudes (curiosity, respect, humility), knowledge (about cultural patterns), and skills (active listening, adaptation).

**Stereotypes vs. Generalizations:**
Use cultural generalizations as flexible starting points, not rigid boxes. Always treat individuals as individuals.

**Key Terms:**
Power distance (hierarchy acceptance), individualism/collectivism (personal vs. group focus), monochronic/polychronic (time orientation), intercultural competence (ability to communicate across cultures).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 12.1 NARRATIVE: Understanding Exam Requirements
// ============================================================================

export const CHAPTER_ENGELSK_VG1_12_1_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-12-1-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '12.1',
  title: 'Understanding Exam Requirements',
  subtitle: 'Narrative Version',
  description: 'Learn what examiners are looking for and how to meet assessment criteria.',
  estimatedMinutes: 40,
  competenceGoals: [
    'assess and revise own texts based on professional criteria',
  ],
  linkedChapterId: 'engelsk-vg1-12-1',
  content: [
    {
      id: 'engelsk-vg1-12-1-n-intro',
      type: 'text',
      content: `## Demystifying the Exam

Exams can feel mysterious and scary. What are they actually looking for? How do they decide if your work is good? Is there a secret formula for success?

Here's the truth: exams are not mysteries. The assessment criteria are published and available. What examiners look for is clearly documented. The path to success isn't secret; it's spelled out in the curriculum.

The problem is that students often don't know this. They approach exams hoping they'll guess right, rather than understanding what's actually expected. That's like trying to win a game without knowing the rules.

In this chapter, we're going to demystify the exam process. You'll understand exactly what's being assessed, what the different grade levels look like, and how to approach preparation strategically. No secrets, no tricks, just clear understanding.

Knowledge is power. When you know what examiners are looking for, you can focus your efforts where they matter most.`,
    },
    {
      id: 'engelsk-vg1-12-1-n-section1',
      type: 'text',
      content: `## The Assessment Framework

English VG1 assessment is based on competence goals from the LK20 curriculum. These goals describe what you should be able to do by the end of the course. The exam tests whether you've achieved them.

The competence goals cover several areas. Communication ability is central: can you express yourself clearly and effectively in English, both in writing and speaking? Language accuracy matters: do you use vocabulary, grammar, and text structures correctly? Content and reflection are assessed: can you engage thoughtfully with topics, show understanding, and develop ideas? Source use is important: can you find, evaluate, and use sources appropriately?

Your grade reflects overall competence across these areas. You don't need to be perfect in everything. A strong vocabulary can compensate somewhat for grammar weaknesses. Deep reflection can balance some language errors. Examiners look at the whole picture.

The exam can be written or oral (you'll find out which you get). The written exam typically has two parts: short tasks (like comparing sources) and a longer text (essay, article, or narrative). The oral exam includes a presentation and a conversation with examiners.

Understanding what's being tested helps you prepare effectively. You're not studying blindly; you're developing specific competences that will be assessed.`,
    },
    {
      id: 'engelsk-vg1-12-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What does English VG1 assessment primarily evaluate?',
        options: [
          { id: 'a', text: 'Only grammar and spelling', isCorrect: false },
          { id: 'b', text: 'Communication ability, language accuracy, content/reflection, and source use', isCorrect: true },
          { id: 'c', text: 'Only vocabulary size', isCorrect: false },
          { id: 'd', text: 'Only oral presentation skills', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'English VG1 assessment evaluates multiple competences: communication ability, language accuracy (vocabulary, grammar, structure), content and reflection, and appropriate source use. The grade reflects the whole picture.',
      },
    },
    {
      id: 'engelsk-vg1-12-1-n-section2',
      type: 'text',
      content: `## What the Grade Levels Look Like

Understanding the difference between grade levels helps you know what to aim for. Let's look at what distinguishes them.

Grade 6 (Excellent) work shows strong communication that's clear, effective, and well-adapted to purpose. The language is rich and varied, with wide vocabulary and complex sentence structures. Errors are rare and never impede understanding. Content shows deep reflection, nuanced analysis, and original thinking. Sources are used critically and integrated smoothly.

Grade 4 (Good) work communicates clearly and gets the point across. Vocabulary is adequate and sentence structures vary somewhat. Some errors appear but understanding isn't impaired. Content shows reflection and analysis, though perhaps not as deep or nuanced. Sources are used appropriately and support arguments.

Grade 2 (Adequate) work communicates the basics but sometimes unclearly. Vocabulary is limited and sentences may be simple or repetitive. Errors sometimes cause confusion. Reflection is limited or superficial. Sources may be used but perhaps not effectively or critically.

Here's an important insight: the jump from adequate to good is largely about developing your ideas more fully and using language more precisely. The jump from good to excellent is about nuance, sophistication, and showing you can really think with the material.

You don't need to be perfect. No one writes error-free prose under exam conditions. What matters is overall quality of communication and thought.`,
    },
    {
      id: 'engelsk-vg1-12-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What primarily distinguishes a Grade 6 response from a Grade 4 response?',
        options: [
          { id: 'a', text: 'Grade 6 must be longer', isCorrect: false },
          { id: 'b', text: 'Deeper reflection, more nuanced analysis, and richer language', isCorrect: true },
          { id: 'c', text: 'Grade 6 must have no errors at all', isCorrect: false },
          { id: 'd', text: 'Grade 6 must use more difficult words', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Excellent (Grade 6) work differs from good (Grade 4) work through deeper, more nuanced thinking and richer, more varied language. It is not about perfection or length but about quality of thought and expression.',
      },
    },
    {
      id: 'engelsk-vg1-12-1-n-section3',
      type: 'text',
      content: `## Common Mistakes to Avoid

Knowing what goes wrong helps you avoid those pitfalls. Here are frequent mistakes students make in English exams.

Not answering the question is surprisingly common. Students write about the topic in general without addressing what was specifically asked. If the question asks you to compare, you need to compare. If it asks for your opinion, you need to state an opinion. Read the question carefully.

Weak structure hurts communication. Essays without clear paragraphs, with ideas jumping around randomly, are hard to follow. Even strong ideas get lost in poor organization. Plan before you write.

Superficial treatment shows lack of engagement. Saying "this is good" or "this is bad" without explaining why isn't analysis. Examiners want to see your thinking, not just your conclusions.

Ignoring the prompt materials is wasteful. If the exam provides texts to work with, you should use them. They're there for a reason. Reference them, quote from them, engage with them.

Running out of time is preventable. Students spend too long on early tasks and rush the main essay. Practice time management.

Not proofreading leaves easily-fixed errors. Always save time at the end to read through your work. You'll catch errors you didn't notice while writing.`,
    },
    {
      id: 'engelsk-vg1-12-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What is one of the most common mistakes students make in exams?',
        options: [
          { id: 'a', text: 'Writing too much', isCorrect: false },
          { id: 'b', text: 'Not directly answering what the question asks', isCorrect: true },
          { id: 'c', text: 'Using too many paragraphs', isCorrect: false },
          { id: 'd', text: 'Writing too neatly', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A common exam mistake is writing about the topic generally without addressing the specific question asked. Always read the question carefully and make sure your answer responds to what is actually being asked.',
      },
    },
    {
      id: 'engelsk-vg1-12-1-n-section4',
      type: 'text',
      content: `## Self-Assessment: Know Your Strengths and Weaknesses

Effective preparation starts with honest self-assessment. You can't improve what you don't acknowledge.

Consider your written communication. How confident are you writing different text types (essays, articles, narratives)? Do you struggle with structure, vocabulary, grammar, or developing ideas? Where do you feel strongest?

Think about oral communication. Can you speak fluently with good pronunciation? Do you freeze up under pressure? Are you comfortable discussing various topics? Can you interact naturally in conversation?

Evaluate your reading comprehension. Do you understand different types of texts? Can you analyze critically? Do you miss nuances or main points?

Reflect on your cultural knowledge. How well do you know the English-speaking world? Can you discuss history, society, and culture confidently?

Be honest but not harsh. Everyone has areas for improvement. The point isn't to feel bad but to know where to focus your efforts. If you know grammar is your weakness, spend extra time on grammar. If you need more cultural knowledge, prioritize that.

Consider asking a teacher or peer for their perspective. Sometimes others see our blind spots more clearly than we do.`,
    },
    {
      id: 'engelsk-vg1-12-1-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-1-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Why is self-assessment important for exam preparation?',
        options: [
          { id: 'a', text: 'To feel bad about your weaknesses', isCorrect: false },
          { id: 'b', text: 'To identify where to focus your preparation efforts', isCorrect: true },
          { id: 'c', text: 'To compare yourself negatively to others', isCorrect: false },
          { id: 'd', text: 'To avoid studying altogether', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Self-assessment helps you prepare efficiently by identifying your strengths and weaknesses. You can then focus your limited preparation time on areas that need the most improvement.',
      },
    },
    {
      id: 'engelsk-vg1-12-1-n-section5',
      type: 'text',
      content: `## Setting Yourself Up for Success

Understanding the exam is the first step. Now let's think about how to use this knowledge.

Make the criteria your friend. Keep the assessment criteria visible when you practice. After writing something, ask yourself: Is this communicating clearly? Is my language accurate and varied? Am I showing reflection and analysis? Am I using sources appropriately?

Practice with past exams. Old exam papers are available and invaluable. They show you exactly what tasks look like. Time yourself doing them. The more you practice under exam-like conditions, the less stressful the real thing will be.

Get feedback. Write practice essays and have someone evaluate them against the criteria. A teacher is ideal, but even a peer can help. Understanding how your work matches up to expectations is powerful.

Think about the examiner. They're reading many responses and want clear, engaging answers. Make their job easy. Be clear, be organized, and show your thinking. A reader-friendly response is more pleasant to grade.

Remember: the exam isn't trying to trick you. It's designed to let you show what you know and can do. Your job is to demonstrate your competence. With clear understanding of what that means, you're already well on your way.`,
    },
    {
      id: 'engelsk-vg1-12-1-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-1-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the best way to practice for the exam?',
        options: [
          { id: 'a', text: 'Only read theory about how to write', isCorrect: false },
          { id: 'b', text: 'Practice with past exam papers under timed conditions', isCorrect: true },
          { id: 'c', text: 'Memorize sample essays word for word', isCorrect: false },
          { id: 'd', text: 'Avoid practicing to save energy for the real exam', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Practicing with past exam papers under timed conditions is the most effective preparation. It familiarizes you with the format, helps you manage time, and reveals areas that need more work.',
      },
    },
    {
      id: 'engelsk-vg1-12-1-n-summary',
      type: 'text',
      content: `## Summary: Understanding What's Expected

You now understand what exams are looking for. Key points:

**Assessment Framework:**
Exams test competence goals from LK20: communication ability, language accuracy, content/reflection, and source use. Your grade reflects overall competence.

**Grade Levels:**
Excellent work shows nuanced thinking and rich language. Good work communicates clearly with adequate development. The difference is in depth and sophistication, not perfection.

**Common Mistakes:**
Not answering the question, weak structure, superficial analysis, ignoring materials, poor time management, and not proofreading.

**Self-Assessment:**
Honestly identify your strengths and weaknesses in written/oral communication, reading comprehension, and cultural knowledge. Focus preparation where needed.

**Key Strategy:**
Use assessment criteria actively, practice with past exams, get feedback, and remember the exam is your opportunity to show what you know.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 12.2 NARRATIVE: Written Exam Strategies
// ============================================================================

export const CHAPTER_ENGELSK_VG1_12_2_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-12-2-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '12.2',
  title: 'Written Exam Strategies',
  subtitle: 'Narrative Version',
  description: 'Master practical strategies for success in the written English exam.',
  estimatedMinutes: 50,
  competenceGoals: [
    'write various formal and informal texts with structure and coherence',
  ],
  linkedChapterId: 'engelsk-vg1-12-2',
  content: [
    {
      id: 'engelsk-vg1-12-2-n-intro',
      type: 'text',
      content: `## Five Hours, Unlimited Potential

The written exam gives you five hours and a significant challenge: demonstrate your English competence through writing. That might sound intimidating, but here's the thing: five hours is actually a lot of time if you use it well.

The key word is "if." Many students waste time, panic, or approach tasks inefficiently. Others finish early with work that could have been much better with more careful revision. The difference between these outcomes often isn't ability; it's strategy.

In this chapter, we'll develop a strategic approach to the written exam. You'll learn how to budget your time, how to tackle different task types, how to plan effectively, and how to produce your best work under exam conditions.

Strategy isn't cheating or trickery. It's working smart alongside working hard. The most talented students can underperform without good strategy, and prepared students can overperform with it. Let's make sure you're in the second group.`,
    },
    {
      id: 'engelsk-vg1-12-2-n-section1',
      type: 'text',
      content: `## Time Management: Your Most Valuable Resource

Five hours feels like a lot, but it disappears quickly. Here's a recommended breakdown:

First 30 minutes: Read everything carefully. Understand all tasks before writing anything. This prevents costly mistakes like misunderstanding questions. Note requirements and plan your approach.

Next 60 minutes: Complete Part 1 short tasks. These might involve comparing sources, summarizing, or responding to specific questions. They're usually worth fewer marks than Part 2, so don't spend more time than they deserve.

Next 30 minutes: Plan your Part 2 long text. This is crucial. Good planning saves time later and improves quality. More on this shortly.

Next 2.5 hours: Write your Part 2 essay/article/narrative. This is your main task where you show what you can do. Give it the most time and effort.

Final 30 minutes: Review and revise. Read everything through. Fix errors. Improve word choices. Strengthen weak sentences. This time is invaluable.

These are guidelines, not rules. Adjust based on the specific exam. But always reserve time at the end for revision. Never submit without reading through your work.`,
    },
    {
      id: 'engelsk-vg1-12-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Why should you reserve time at the end of the exam?',
        options: [
          { id: 'a', text: 'To relax before leaving', isCorrect: false },
          { id: 'b', text: 'To review, revise, and fix errors in your writing', isCorrect: true },
          { id: 'c', text: 'To start writing a new essay', isCorrect: false },
          { id: 'd', text: 'To check what others wrote', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Reserving time at the end for review and revision is crucial. Reading through your work allows you to catch errors, improve word choices, and strengthen weak sections. This final polish can significantly improve your grade.',
      },
    },
    {
      id: 'engelsk-vg1-12-2-n-section2',
      type: 'text',
      content: `## Analyzing the Task

Before you write a single word, you need to understand exactly what you're being asked to do. This sounds obvious but is often done poorly.

Identify the text type. Are you writing an argumentative essay, a personal essay, an article, a short story, or something else? Each has different conventions. An argumentative essay needs a thesis and logical reasoning. A personal essay can be more reflective. An article needs a hook and accessible style.

Note the topic and any specific requirements. If the question says "discuss pros and cons," you must address both sides. If it asks for "personal reflection," you need your own thoughts, not just facts. If it mentions using sources, make sure you do.

Check for word count guidelines. These indicate expected depth. 400-600 words means focused and concise. 800-1000 words means more developed argument. Don't ignore these indicators.

Understand what "discussing" means. In academic writing, discuss means examine different aspects, consider different viewpoints, and form a conclusion. It doesn't mean just describe or list.

Underline or highlight key words in the question. Keep referring back to make sure you're staying on track. Drifting off-topic is one of the most common exam mistakes.`,
    },
    {
      id: 'engelsk-vg1-12-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What does "discuss" typically mean in an academic essay question?',
        options: [
          { id: 'a', text: 'Simply list facts about the topic', isCorrect: false },
          { id: 'b', text: 'Examine different aspects, consider viewpoints, and form a conclusion', isCorrect: true },
          { id: 'c', text: 'Repeat the question in different words', isCorrect: false },
          { id: 'd', text: 'Only describe one side of the issue', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'In academic writing, "discuss" means to examine different aspects of an issue, consider various viewpoints, analyze the evidence, and form a conclusion. It requires more than description or listing.',
      },
    },
    {
      id: 'engelsk-vg1-12-2-n-section3',
      type: 'text',
      content: `## Planning Your Long Text

Good planning is one of the biggest differentiators between average and excellent exam writing. Time spent planning is never wasted.

Start with brainstorming. Write down every idea that comes to mind about the topic. Don't censor yourself yet. Quantity first, quality later. Give yourself 5-10 minutes for this.

Then organize. Group related ideas. Identify your main points, probably 2-4 for an exam essay. Decide on your thesis or main argument. Figure out what order makes sense.

Create an outline. This doesn't need to be formal. Just note what each paragraph will cover. Something like: "Para 1: Intro + thesis. Para 2: First argument (social media addiction). Para 3: Counterargument (connection). Para 4: Second argument (mental health). Para 5: Conclusion."

Here's a pro tip: write your introduction last, or at least leave it flexible. Once you've written the body, you know exactly what you're introducing. Many students spend ages perfecting an introduction, then write a body that goes in a different direction.

Think about evidence. What examples, facts, or quotations will support your points? If the exam provides sources, note where you'll use them. If you're drawing on your own knowledge, make sure your examples are relevant and accurate.`,
    },
    {
      id: 'engelsk-vg1-12-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why might it be good to write your introduction last?',
        options: [
          { id: 'a', text: 'Introductions are not important', isCorrect: false },
          { id: 'b', text: 'Once you have written the body, you know exactly what you are introducing', isCorrect: true },
          { id: 'c', text: 'Introductions should always be short', isCorrect: false },
          { id: 'd', text: 'Examiners do not read introductions', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Writing the introduction last (or keeping it flexible) can be effective because after writing the body, you know exactly what your essay argues. This prevents mismatches between your introduction\'s promises and your body\'s delivery.',
      },
    },
    {
      id: 'engelsk-vg1-12-2-n-section4',
      type: 'text',
      content: `## Writing Strong Paragraphs

Each paragraph should have a clear purpose and structure. A strong paragraph typically includes a topic sentence, development, evidence, and a link.

The topic sentence states what the paragraph is about. It's usually first and tells the reader what to expect. "Social media can have negative effects on teenagers' mental health."

Development expands on the topic sentence. Explain your point more fully. What do you mean? Why is this true? "Studies show that heavy social media use correlates with increased rates of anxiety and depression among young people."

Evidence supports your claims. Use examples, facts, statistics, or quotations. "According to a 2022 study by the American Psychological Association, teens who spent more than three hours daily on social media were twice as likely to report mental health problems."

The link connects back to your thesis or forward to the next paragraph. "This evidence suggests that while social media offers benefits, the mental health risks cannot be ignored."

Avoid one-sentence paragraphs; they're rarely developed enough. But also avoid paragraphs that try to do too much. One main idea per paragraph is usually right.

Use transition words to connect paragraphs and ideas: however, furthermore, on the other hand, consequently, for example. These guide the reader through your argument.`,
    },
    {
      id: 'engelsk-vg1-12-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What should a strong paragraph typically include?',
        options: [
          { id: 'a', text: 'Only one sentence', isCorrect: false },
          { id: 'b', text: 'A topic sentence, development, evidence, and a link', isCorrect: true },
          { id: 'c', text: 'As many ideas as possible', isCorrect: false },
          { id: 'd', text: 'Only quotations, no original writing', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'A strong paragraph has a topic sentence (stating the paragraph\'s point), development (explaining the point), evidence (supporting it), and a link (connecting to the thesis or next paragraph).',
      },
    },
    {
      id: 'engelsk-vg1-12-2-n-section5',
      type: 'text',
      content: `## The Revision Process

Your first draft is never your best work. That's true for professional writers, and it's true for exam conditions too. Use your reserved revision time wisely.

First read for content. Does your essay answer the question? Are your arguments logical? Is anything missing? Is anything irrelevant that should be cut?

Then read for structure. Does each paragraph have a clear point? Do they flow logically? Are transitions smooth? Does the introduction set up what follows? Does the conclusion tie things together?

Next, read for language. Are there grammar errors? Spelling mistakes? Wrong word choices? Sentences that are confusing or awkward? This is where you catch the errors that slipped through while writing.

Read for variety. Are you starting every sentence the same way? Using the same words repeatedly? Variety in sentence structure and vocabulary makes writing more engaging.

Read once more from the examiner's perspective. Is this clear? Is this convincing? Is this pleasant to read? Would you want to give this a good grade?

If time permits, read the whole thing once more. Every pass catches something you missed before.`,
    },
    {
      id: 'engelsk-vg1-12-2-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-2-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What should you check for when revising your exam essay?',
        options: [
          { id: 'a', text: 'Only spelling', isCorrect: false },
          { id: 'b', text: 'Content, structure, language, and variety', isCorrect: true },
          { id: 'c', text: 'Only the introduction', isCorrect: false },
          { id: 'd', text: 'Whether it is long enough', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Effective revision checks multiple levels: content (did you answer the question?), structure (is it organized?), language (grammar, spelling, word choice), and variety (sentence structure, vocabulary). Each pass catches different issues.',
      },
    },
    {
      id: 'engelsk-vg1-12-2-n-summary',
      type: 'text',
      content: `## Summary: Written Exam Success

You now have strategies for the written exam. Key takeaways:

**Time Management:**
Budget your five hours carefully. Reserve time for reading, planning, writing, and revising. Never skip revision.

**Task Analysis:**
Understand exactly what's being asked. Identify text type, topic, specific requirements, and word count expectations.

**Planning:**
Brainstorm ideas, organize them, create an outline. Good planning improves quality and saves time. Consider writing the introduction last.

**Strong Paragraphs:**
Topic sentence, development, evidence, link. One main idea per paragraph. Use transitions.

**Revision:**
Check content, structure, language, and variety. Read from the examiner's perspective. Every pass catches new issues.

**Key Principle:**
Strategy + preparation + effort = success. Work smart and hard.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 12.3 NARRATIVE: Oral Exam Preparation
// ============================================================================

export const CHAPTER_ENGELSK_VG1_12_3_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-12-3-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '12.3',
  title: 'Oral Exam Preparation',
  subtitle: 'Narrative Version',
  description: 'Prepare confidently for the oral English exam.',
  estimatedMinutes: 50,
  competenceGoals: [
    'express yourself nuanced and precisely with flow and coherence adapted to purpose, audience and situation',
  ],
  linkedChapterId: 'engelsk-vg1-12-3',
  content: [
    {
      id: 'engelsk-vg1-12-3-n-intro',
      type: 'text',
      content: `## Speaking With Confidence

For many students, the oral exam is more intimidating than the written one. You can't go back and fix mistakes. You're face-to-face with examiners who are evaluating every word. It can feel very exposed.

But here's the thing: the oral exam is also your chance to shine in ways the written exam doesn't allow. You can show your personality. You can clarify if something's unclear. You can demonstrate real communication, not just writing about communication.

Many students actually perform better in oral exams than written ones. Speaking is often more natural than formal writing. You can think on your feet, respond to feedback, and engage in genuine dialogue.

The key is preparation. The more prepared you are, the more confident you'll feel. And confidence, while not graded directly, affects everything else. A confident speaker sounds more fluent, even with the same number of errors. A confident speaker engages better with examiners. Confidence creates a positive spiral.

Let's prepare you to walk into that exam room ready to show what you can do.`,
    },
    {
      id: 'engelsk-vg1-12-3-n-section1',
      type: 'text',
      content: `## Understanding the Format

Oral exams typically follow a standard structure. Knowing what to expect removes uncertainty.

Preparation time comes first, usually 30-45 minutes. You'll receive a topic or question and have time to prepare. You can typically make notes, but you cannot use digital resources or communication.

The presentation comes next, usually 5-10 minutes. You present on your prepared topic. This is your chance to show what you know in a structured way. Examiners typically let you finish without interruption.

Then comes the conversation, usually 10-15 minutes. Examiners ask follow-up questions about your presentation and may explore other curriculum-related topics. This part tests your ability to communicate spontaneously and engage in dialogue.

You're assessed throughout on content (knowledge, ideas, reflection), language (vocabulary, grammar, pronunciation), and communication (fluency, interaction, adaptation to context).

The conversation isn't meant to trip you up. Examiners want you to succeed. They're looking for evidence of competence, not trying to find failures. Think of it as a discussion, not an interrogation.`,
    },
    {
      id: 'engelsk-vg1-12-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is the purpose of the conversation portion of the oral exam?',
        options: [
          { id: 'a', text: 'To trick you with difficult questions', isCorrect: false },
          { id: 'b', text: 'To test spontaneous communication and dialogue ability', isCorrect: true },
          { id: 'c', text: 'To let you memorize answers beforehand', isCorrect: false },
          { id: 'd', text: 'To give you time to rest after the presentation', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The conversation portion tests your ability to communicate spontaneously, respond to questions, and engage in genuine dialogue. It is not meant to trick you but to assess real communication competence.',
      },
    },
    {
      id: 'engelsk-vg1-12-3-n-section2',
      type: 'text',
      content: `## Preparing Your Presentation

Use your preparation time wisely. Here's an effective approach.

Read the prompt carefully. Make sure you understand what's being asked. Underline key words. Note any specific requirements.

Brainstorm content. What do you know about this topic? What can you say? What examples can you use? Get ideas on paper quickly.

Choose your structure. A simple structure works best: introduction (state your topic and main points), body (2-3 main points with examples), conclusion (summarize and final thought). Don't overcomplicate it.

Make notes, not a script. You should speak, not read. Notes with keywords and structure help you remember. Full sentences will make you sound like you're reciting.

Plan your opening strong. First impressions matter. Know exactly how you'll start. A clear, confident opening sets the tone.

Think about potential questions. What might examiners ask? Prepare mentally for follow-up topics.

Practice once if time permits. Run through your presentation. Time yourself. Adjust if needed.

Don't try to memorize perfectly. You want to sound natural, not robotic. Knowing your content well enough to explain it flexibly is better than rigid memorization.`,
    },
    {
      id: 'engelsk-vg1-12-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Why should you make notes rather than write a full script for your oral presentation?',
        options: [
          { id: 'a', text: 'Scripts are against the rules', isCorrect: false },
          { id: 'b', text: 'Notes help you speak naturally; scripts make you sound like you are reciting', isCorrect: true },
          { id: 'c', text: 'Notes are faster to write', isCorrect: false },
          { id: 'd', text: 'Examiners cannot read your notes', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Notes with keywords help you speak naturally and flexibly. Full scripts tend to make speakers sound robotic and unnatural as they try to recite memorized text rather than genuinely communicate.',
      },
    },
    {
      id: 'engelsk-vg1-12-3-n-section3',
      type: 'text',
      content: `## Delivery Matters

How you say something matters as much as what you say. Let's work on delivery.

Speak at a moderate pace. Nervousness makes us speed up. Consciously slow down. It's better to say less, clearly, than to rush through more, incomprehensibly. Pauses are okay; they give you time to think and give listeners time to process.

Make eye contact. Look at the examiners, not your notes or the floor. Eye contact creates connection and shows confidence. If direct eye contact feels hard, look at foreheads; it appears the same.

Project your voice. Speak loudly enough to be heard clearly. Nervous speakers often get quieter. Make sure your voice fills the room.

Show engagement. You're talking about interesting topics. Let some enthusiasm show. A flat, monotone delivery suggests disinterest, even if you're not.

Use your notes as reference, not as script. Glance at them to remember your next point, then look up and speak. Don't read sentences.

Accept imperfection. You will stumble. You will forget something. You will make errors. This is normal. Don't let one mistake derail you. Correct yourself briefly and move on. Dwelling on errors makes them bigger than they are.`,
    },
    {
      id: 'engelsk-vg1-12-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'What should you do if you make a mistake during your oral presentation?',
        options: [
          { id: 'a', text: 'Stop the presentation and start over', isCorrect: false },
          { id: 'b', text: 'Correct yourself briefly and move on', isCorrect: true },
          { id: 'c', text: 'Pretend it did not happen and hope no one noticed', isCorrect: false },
          { id: 'd', text: 'Apologize extensively before continuing', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'When you make a mistake, correct yourself briefly and move on. Everyone makes errors when speaking. Dwelling on mistakes or apologizing extensively draws more attention to them and disrupts your flow.',
      },
    },
    {
      id: 'engelsk-vg1-12-3-n-section4',
      type: 'text',
      content: `## Handling Questions

The conversation portion can feel unpredictable, but you can prepare.

Listen carefully. Make sure you understand the question before answering. If you're unsure, ask for clarification. "Could you repeat that?" or "Do you mean...?" is perfectly acceptable and shows engaged listening.

Take a moment to think. You don't need to start talking immediately. A brief pause to gather your thoughts is natural and produces better answers than rushed responses.

Structure your answers. Even in conversation, mini-structure helps. State your main point, explain or give an example, conclude briefly. Avoid rambling.

Be honest about uncertainty. If you don't know something, say so honestly. "I'm not certain about that, but I think..." is better than making things up. You can also redirect: "I don't know much about that specifically, but I do know that..."

Engage in dialogue. This is a conversation, not a quiz. Respond to what examiners say. Ask clarifying questions. Show you're listening, not just waiting for your turn to speak.

Don't panic if you blank. Ask for the question again. Take a breath. Often the answer comes once initial panic passes. If you truly can't answer, acknowledge it and move forward.`,
    },
    {
      id: 'engelsk-vg1-12-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What should you do if you do not understand a question from the examiner?',
        options: [
          { id: 'a', text: 'Guess what they meant and answer that', isCorrect: false },
          { id: 'b', text: 'Ask for clarification or repetition', isCorrect: true },
          { id: 'c', text: 'Remain silent until they ask something else', isCorrect: false },
          { id: 'd', text: 'Change the topic to something you know better', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Asking for clarification or repetition is perfectly acceptable and shows engaged listening. It is better to understand the question properly than to answer something that was not asked.',
      },
    },
    {
      id: 'engelsk-vg1-12-3-n-section5',
      type: 'text',
      content: `## Practice, Practice, Practice

The best preparation for speaking is speaking. Here's how to practice effectively.

Practice out loud. Silent practice in your head is not the same. Your mouth needs to practice forming words, your ears need to hear your voice, your brain needs to process the experience of speaking.

Record yourself. Listen back. It's uncomfortable but invaluable. Notice speaking pace, clarity, filler words, and areas for improvement.

Practice with others. Have friends or family listen to presentations and ask questions. The more you practice with an audience, the more comfortable real audiences become.

Practice under time pressure. Time your presentations. Stick to limits. Being able to expand or condense content as needed is a useful skill.

Practice with different topics. Don't just prepare one presentation. Practice speaking about various curriculum topics. Build general fluency, not just preparation for one specific scenario.

Simulate exam conditions. Find a quiet space. Have someone play examiner. Practice the full sequence: preparation time, presentation, questions. The closer your practice resembles the real thing, the more you'll benefit.`,
    },
    {
      id: 'engelsk-vg1-12-3-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-3-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'Why is practicing out loud important for oral exam preparation?',
        options: [
          { id: 'a', text: 'Silent practice is just as effective', isCorrect: false },
          { id: 'b', text: 'Your mouth and brain need to practice the actual experience of speaking', isCorrect: true },
          { id: 'c', text: 'Practicing out loud impresses your neighbors', isCorrect: false },
          { id: 'd', text: 'Out loud practice helps you memorize scripts word for word', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Speaking out loud engages different skills than silent practice. Your mouth needs to form words, your ears need to hear your voice, and your brain needs to process the experience of actually speaking, not just thinking about speaking.',
      },
    },
    {
      id: 'engelsk-vg1-12-3-n-summary',
      type: 'text',
      content: `## Summary: Oral Exam Success

You're prepared for the oral exam. Key points:

**Understanding the Format:**
Preparation time, presentation, and conversation. Know what each part assesses: content, language, and communication.

**Preparing Your Presentation:**
Analyze the prompt, brainstorm, choose a simple structure, make notes not scripts, and plan a strong opening.

**Delivery:**
Moderate pace, eye contact, project voice, show engagement, use notes as reference, accept imperfection.

**Handling Questions:**
Listen carefully, take time to think, structure answers, be honest about uncertainty, engage in dialogue.

**Practice:**
Practice out loud, record yourself, practice with others, practice under time pressure, simulate exam conditions.

**Key Principle:**
Preparation builds confidence. Confidence improves performance. Practice until speaking feels natural.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 12.4 NARRATIVE: Practice and Review
// ============================================================================

export const CHAPTER_ENGELSK_VG1_12_4_NARRATIV: TextbookChapter = {
  id: 'engelsk-vg1-12-4-narrativ',
  courseId: 'engelsk-vg1',
  chapterNumber: '12.4',
  title: 'Practice and Review',
  subtitle: 'Narrative Version',
  description: 'Consolidate your learning and prepare for success in English VG1.',
  estimatedMinutes: 55,
  competenceGoals: [
    'use appropriate strategies in language learning, text creation and communication',
  ],
  linkedChapterId: 'engelsk-vg1-12-4',
  content: [
    {
      id: 'engelsk-vg1-12-4-n-intro',
      type: 'text',
      content: `## The Final Push

You've come a long way. Over the course of English VG1, you've developed reading skills, writing abilities, oral communication competence, and cultural knowledge. Now it's time to consolidate that learning and prepare for whatever assessments lie ahead.

This chapter is different from the others. Instead of introducing new content, we're reviewing and integrating what you've learned. We're creating connections between topics, identifying areas for further practice, and developing a strategic approach to your final preparation.

Think of this as the training camp before the big game. Athletes don't learn new skills in the final weeks before competition. They refine what they know, build confidence, and prepare mentally. That's what we're doing here.

Your success in English VG1 isn't determined by natural talent alone. It's determined by preparation, practice, and strategic effort. Let's make sure you're ready.`,
    },
    {
      id: 'engelsk-vg1-12-4-n-section1',
      type: 'text',
      content: `## Review: Language Learning Strategies

Let's start by reviewing effective language learning strategies you can use during preparation.

Active engagement beats passive exposure. Don't just watch English content; interact with it. Pause, repeat phrases, look up words, think about what you heard. Reading isn't enough; take notes, summarize, question.

Use the language. Writing practice essays, speaking out loud, and having conversations in English builds fluency in ways that studying about English cannot. Every time you produce language, you're strengthening neural pathways.

Target your weaknesses. It's tempting to practice what you're already good at. That feels nice. But improvement comes from challenging yourself where you're weak. Identify your problem areas and give them extra attention.

Space your learning. Cramming the night before doesn't build lasting competence. Regular practice over weeks is far more effective. If you haven't been doing this, start now. Even a few weeks of daily practice helps.

Get feedback. You can't improve what you can't see. Have others read your writing and listen to your speaking. Ask teachers for specific feedback. Use that feedback to focus your practice.

Set specific goals. "Get better at English" is too vague. "Learn 10 new academic vocabulary words this week" or "Practice speaking for 15 minutes daily" is specific and actionable.`,
    },
    {
      id: 'engelsk-vg1-12-4-n-quiz1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-4-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'What is the most effective approach to language learning?',
        options: [
          { id: 'a', text: 'Only practice what you are already good at', isCorrect: false },
          { id: 'b', text: 'Active engagement, producing language, and targeting weaknesses', isCorrect: true },
          { id: 'c', text: 'Passive watching of English movies without interaction', isCorrect: false },
          { id: 'd', text: 'Cramming all content the night before the exam', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Effective language learning requires active engagement (not just passive exposure), actually producing language (speaking and writing), and targeting your weaknesses rather than just practicing strengths.',
      },
    },
    {
      id: 'engelsk-vg1-12-4-n-section2',
      type: 'text',
      content: `## Review: Writing Skills

Writing is a major component of English assessment. Let's review the key skills.

Text type awareness: You should be able to write argumentative essays, personal essays, articles, and formal/informal texts. Each has conventions. Argumentative essays need thesis and logical structure. Articles need hooks and accessible style. Personal essays allow reflection and narrative.

Structure: Every text needs clear organization. Introduction sets up what follows. Body paragraphs develop one idea each. Conclusion ties things together. Transitions connect parts smoothly.

Development: Don't just state points; explain and support them. Use examples, evidence, and reasoning. Show your thinking, not just your conclusions.

Language precision: Choose words carefully. Vary sentence structures. Avoid repetition. Use academic vocabulary when appropriate. Grammar matters, but communication matters more.

Source use: When working with sources, integrate them smoothly. Quote when exact words matter. Paraphrase when the idea matters. Always cite. Use sources to support your arguments, not replace them.

Revision: First drafts are never best. Budget time to review, improve word choices, catch errors, and strengthen weak sections.`,
    },
    {
      id: 'engelsk-vg1-12-4-n-quiz2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-4-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'What does "development" mean in the context of essay writing?',
        options: [
          { id: 'a', text: 'Making the essay longer by repeating points', isCorrect: false },
          { id: 'b', text: 'Explaining and supporting points with examples and reasoning', isCorrect: true },
          { id: 'c', text: 'Using more difficult vocabulary', isCorrect: false },
          { id: 'd', text: 'Writing a longer introduction', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Development means explaining your points fully and supporting them with examples, evidence, and reasoning. It is about showing your thinking, not just stating conclusions.',
      },
    },
    {
      id: 'engelsk-vg1-12-4-n-section3',
      type: 'text',
      content: `## Review: Cultural Knowledge

Cultural knowledge is part of English VG1 competence. Let's review key areas.

The English-speaking world is diverse. You should know something about the UK (history, politics, culture, diversity), the USA (history, the American Dream, politics, diversity), and other English-speaking countries (Canada, Australia, New Zealand, English in Africa and Asia).

Historical context matters. Understanding British colonial history, American civil rights, indigenous peoples' experiences, and immigration patterns helps you engage more deeply with texts and discussions.

Contemporary issues: You should be aware of current debates in English-speaking societies. Immigration, identity, inequality, political polarization, cultural change. You don't need expert knowledge, but general awareness helps.

Cultural expressions: Music, film, television, and games are cultural artifacts. You should be able to analyze them critically, considering form, content, representation, and cultural context.

Cross-cultural communication: Understanding cultural differences in communication styles helps you interact effectively across cultural boundaries.

Make connections: Don't just memorize facts. Connect cultural knowledge to themes, texts, and discussions. Compare with Norwegian context. Analyze critically.`,
    },
    {
      id: 'engelsk-vg1-12-4-n-quiz3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-4-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Why is cultural knowledge important in English VG1?',
        options: [
          { id: 'a', text: 'You must memorize all facts about every English-speaking country', isCorrect: false },
          { id: 'b', text: 'It helps you engage deeply with texts and discussions about the English-speaking world', isCorrect: true },
          { id: 'c', text: 'Cultural knowledge is only tested in history class', isCorrect: false },
          { id: 'd', text: 'It is not actually important for the exam', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Cultural knowledge enriches your engagement with texts and discussions. Understanding historical and social context deepens analysis and allows for more meaningful reflection on issues in the English-speaking world.',
      },
    },
    {
      id: 'engelsk-vg1-12-4-n-section4',
      type: 'text',
      content: `## Creating Your Study Plan

Effective preparation requires a plan. Here's how to create one.

First, assess your situation. How much time do you have? What exams or assessments are coming? What are your strongest and weakest areas? Be honest.

Second, prioritize. You can't improve everything equally in limited time. Focus on areas that will have the most impact. Often, this means targeting weaknesses, but it might also mean polishing strengths you can showcase.

Third, set specific, achievable goals. "Study English" is not a goal. "Write one practice essay every two days and get feedback" is a goal. "Learn 50 new vocabulary words this week" is a goal.

Fourth, schedule practice. Put it in your calendar. Treat it like an appointment. If you say "I'll study when I have time," you'll never have time.

Fifth, balance activities. Mix reading, writing, speaking, and listening. Mix skill practice with content review. Variety keeps you engaged and develops different competences.

Sixth, include rest. Burned-out brains don't learn well. Schedule breaks. Get sleep. Exercise. Your brain consolidates learning during rest.

Finally, stay flexible. If something isn't working, adjust. If you find unexpected weaknesses, address them. A plan is a guide, not a prison.`,
    },
    {
      id: 'engelsk-vg1-12-4-n-quiz4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-4-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'What makes a good study goal?',
        options: [
          { id: 'a', text: 'Vague intentions like "study more"', isCorrect: false },
          { id: 'b', text: 'Specific, achievable targets like "write one practice essay every two days"', isCorrect: true },
          { id: 'c', text: 'Impossible goals that force you to work harder', isCorrect: false },
          { id: 'd', text: 'Goals that only focus on your strongest areas', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Good study goals are specific and achievable. "Write one practice essay every two days" is better than "study more" because it is concrete, measurable, and actionable.',
      },
    },
    {
      id: 'engelsk-vg1-12-4-n-section5',
      type: 'text',
      content: `## Final Thoughts: You've Got This

Let's end with some perspective.

The exam isn't a mystery. You know what's being assessed. You have the tools to prepare. The path to success is clear, if not always easy.

Mistakes are part of learning. You've made errors throughout this course. You'll make more. That's not failure; that's the learning process. What matters is using mistakes to improve.

Comparison is the thief of joy. Focus on your own progress, not how you compare to others. Your goal is to demonstrate your competence, not to beat classmates.

Effort counts. Natural talent varies, but effort is a choice. Students who prepare consistently outperform those who coast on talent. Choose to put in the work.

Believe in yourself. Confidence isn't arrogance. It's recognizing that you've prepared, you have competence, and you're ready to show it. Walk into your exam knowing you've done what you can.

This is not the end of your English learning journey. Whether you get a 6 or a 4, whether you're thrilled or disappointed with your result, your English will continue developing if you keep using it. VG1 is one milestone, not the destination.

Good luck. You've got this.`,
    },
    {
      id: 'engelsk-vg1-12-4-n-quiz5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-vg1-12-4-n-quiz5',
        number: 'Quiz 5',
        type: 'multiple-choice',
        task: 'What is the most important mindset for exam success?',
        options: [
          { id: 'a', text: 'Fear of failure', isCorrect: false },
          { id: 'b', text: 'Confidence based on preparation and consistent effort', isCorrect: true },
          { id: 'c', text: 'Hoping to be lucky', isCorrect: false },
          { id: 'd', text: 'Comparing yourself negatively to others', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Confidence based on preparation and effort is the best mindset. When you have prepared thoroughly, you can approach the exam knowing you have done what you can, which reduces anxiety and improves performance.',
      },
    },
    {
      id: 'engelsk-vg1-12-4-n-summary',
      type: 'text',
      content: `## Summary: Ready for Success

You've reviewed key areas and prepared for success. Final takeaways:

**Language Learning:**
Active engagement, producing language, targeting weaknesses, spacing practice, getting feedback, setting specific goals.

**Writing Skills:**
Text type awareness, clear structure, thorough development, language precision, effective source use, revision.

**Cultural Knowledge:**
English-speaking world diversity, historical context, contemporary issues, cultural expression analysis, cross-cultural communication.

**Study Planning:**
Assess situation, prioritize, set specific goals, schedule practice, balance activities, include rest, stay flexible.

**Mindset:**
The exam is not a mystery. Mistakes are learning. Focus on your progress. Effort counts. Believe in yourself.

**Final Message:**
You have the knowledge, skills, and strategies to succeed. Trust your preparation. Show what you can do. You've got this.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const ENGELSK_VG1_NARRATIV_DEL5_CHAPTERS = [
  CHAPTER_ENGELSK_VG1_11_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_11_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_11_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_11_4_NARRATIV,
  CHAPTER_ENGELSK_VG1_12_1_NARRATIV,
  CHAPTER_ENGELSK_VG1_12_2_NARRATIV,
  CHAPTER_ENGELSK_VG1_12_3_NARRATIV,
  CHAPTER_ENGELSK_VG1_12_4_NARRATIV,
];
