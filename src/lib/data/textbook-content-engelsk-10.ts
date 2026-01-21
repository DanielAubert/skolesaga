/**
 * Tekstbok innhold for Engelsk 10. klasse
 *
 * Folger LK20 lareplan for engelsk ungdomstrinn.
 * Avsluttende ar med fokus pa eksamensforberedelse og avanserte ferdigheter.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Exam Preparation - Writing
// ============================================================================

export const CHAPTER_ENGELSK_10_1: TextbookChapter = {
  id: 'engelsk-10-1',
  courseId: 'engelsk-10',
  chapterNumber: '1',
  title: 'Exam Preparation - Writing',
  description: 'Forbered deg til skriftlig eksamen med fokus pa ulike teksttyper og skrivestrategier.',
  estimatedMinutes: 60,
  competenceGoals: [
    'skrive ulike typer tekster med struktur og sammenheng',
    'bruke variert ordforrad og idiomatiske uttrykk',
  ],
  content: [
    {
      id: 'engelsk-10-1-intro',
      type: 'text',
      content: `## Preparing for the Written Exam

Den skriftlige eksamenen i engelsk tester dine ferdigheter i a skrive sammenhengende tekster pa engelsk. Du vil fa velge mellom ulike oppgavetyper som krever forskjellige tilnarminger.

**Vanlige oppgavetyper pa eksamen:**
- **Essay** - argumenterende eller droftende
- **Article** - for avis eller nettside
- **Short story** - kreativ fortelling
- **Formal letter** - formelt brev
- **Speech** - tale til et publikum`,
    },
    {
      id: 'engelsk-10-1-def-1',
      type: 'definition',
      title: 'Teksttyper og struktur (Text Types and Structure)',
      content: `**Essay:**
- Introduction with thesis statement
- Body paragraphs with topic sentences
- Supporting evidence and examples
- Conclusion that restates main points

**Article:**
- Catchy headline
- Lead paragraph (who, what, when, where, why)
- Body with quotes and facts
- Conclusion or call to action

**Short story:**
- Setting and characters
- Rising action and conflict
- Climax
- Resolution

**Formal letter:**
- Sender's address and date
- Recipient's address
- Formal greeting (Dear Sir/Madam)
- Body paragraphs
- Formal closing (Yours faithfully/sincerely)`,
    },
    {
      id: 'engelsk-10-1-def-2',
      type: 'definition',
      title: 'Nyttige overgangsfaser (Useful Transition Phrases)',
      content: `**For a legge til informasjon:**
- Furthermore, Moreover, In addition, Additionally

**For a vise kontrast:**
- However, On the other hand, Nevertheless, In contrast

**For a gi eksempler:**
- For instance, For example, Such as, To illustrate

**For a konkludere:**
- In conclusion, To sum up, All in all, Therefore

**For a vise arsak/virkning:**
- As a result, Consequently, Thus, Because of this`,
    },
    {
      id: 'engelsk-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Essay Introduction',
      problem: `Skriv en innledning til et essay om temaet: "Should social media be banned for teenagers?"`,
      solution: `**Modell-innledning:**

"In today's digital age, social media has become an integral part of teenagers' lives. While platforms like Instagram and TikTok offer opportunities for connection and creativity, they also raise concerns about mental health and online safety. This essay will argue that rather than banning social media entirely, we should focus on educating young people about responsible use and implementing better safeguards."

**Analyse av innledningen:**
- Starter med en generell kontekst (hook)
- Presenterer begge sider kort
- Avslutter med en klar "thesis statement" som viser standpunkt`,
    },
    {
      id: 'engelsk-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match teksttypen med riktig kjennetegn:',
        subTasks: [
          {
            label: 'a',
            task: 'Starter med "Dear Sir/Madam"',
            solution: 'Formal letter',
            multipleChoiceOptions: ['Formal letter', 'Essay', 'Article', 'Short story'],
          },
          {
            label: 'b',
            task: 'Har "thesis statement" i innledningen',
            solution: 'Essay',
            multipleChoiceOptions: ['Essay', 'Article', 'Speech', 'Formal letter'],
          },
          {
            label: 'c',
            task: 'Har en catchy headline og lead paragraph',
            solution: 'Article',
            multipleChoiceOptions: ['Article', 'Essay', 'Short story', 'Speech'],
          },
        ],
        solution: 'a) Formal letter, b) Essay, c) Article',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg riktig overgangsfrase:',
        subTasks: [
          {
            label: 'a',
            task: 'Many students struggle with homework. _______, teachers should provide more support.',
            solution: 'Therefore / Consequently',
            multipleChoiceOptions: ['Therefore', 'However', 'For example', 'In contrast'],
          },
          {
            label: 'b',
            task: 'Exercise is important for physical health. _______, it also improves mental well-being.',
            solution: 'Furthermore / Moreover',
            multipleChoiceOptions: ['Furthermore', 'However', 'In conclusion', 'Nevertheless'],
          },
          {
            label: 'c',
            task: 'Some people prefer cities. _______, others enjoy the quiet of rural areas.',
            solution: 'On the other hand / However',
            multipleChoiceOptions: ['On the other hand', 'Therefore', 'Furthermore', 'For instance'],
          },
        ],
        solution: 'a) Therefore, b) Furthermore, c) On the other hand',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en thesis statement for folgende tema: "The importance of learning foreign languages"',
        hints: ['En god thesis statement tar et tydelig standpunkt', 'Den bor vaere spesifikk, ikke for generell'],
        solution: 'Eksempel: "Learning foreign languages is essential in the modern world because it enhances career opportunities, promotes cultural understanding, and improves cognitive abilities."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et avsnitt (body paragraph) som stotter folgende thesis: "Schools should start later in the morning."',
        subTasks: [
          {
            label: 'a',
            task: 'Start med en topic sentence som introduserer hovedpoenget.',
            solution: 'Eksempel: "One key reason schools should start later is that teenagers need more sleep for optimal brain function."',
          },
          {
            label: 'b',
            task: 'Legg til minst to stottesetninger med bevis eller eksempler.',
            solution: 'Eksempel: "Research shows that adolescents naturally fall asleep later and need 8-10 hours of sleep. When schools start at 7:30, many students arrive sleep-deprived, which affects their concentration and learning."',
          },
          {
            label: 'c',
            task: 'Avslutt med en setning som kobler tilbake til thesis.',
            solution: 'Eksempel: "Therefore, adjusting school start times would directly benefit students\' academic performance and overall health."',
          },
        ],
        hints: ['Bruk PEEL-strukturen: Point, Evidence, Explain, Link'],
        solution: 'Et godt avsnitt har topic sentence, stottebevis, forklaring og kobling til hovedpastand.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en kort artikkel (150-200 ord) for skoleavisa om et tema du brenner for.',
        hints: [
          'Husk catchy headline',
          'Start med de viktigste fakta (5 W: who, what, when, where, why)',
          'Inkluder et "sitat" fra en relevant person',
        ],
        solution: 'Artikkelen vurderes etter struktur, sprak og engasjement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg og skriv et essay (300-400 ord) om temaet: "Technology: Friend or Foe?"',
        hints: [
          'Lag en disposisjon forst',
          'Inkluder minst tre hovedargumenter',
          'Bruk overgangsfaser mellom avsnitt',
        ],
        solution: 'Essayet vurderes etter struktur (intro, body, conclusion), argumentasjon, sprak og variasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Exam Preparation - Oral
// ============================================================================

export const CHAPTER_ENGELSK_10_2: TextbookChapter = {
  id: 'engelsk-10-2',
  courseId: 'engelsk-10',
  chapterNumber: '2',
  title: 'Exam Preparation - Oral',
  description: 'Forbered deg til muntlig eksamen med presentasjonsteknikk og samtaleovelser.',
  estimatedMinutes: 55,
  competenceGoals: [
    'uttrykke seg med flyt og sammenheng tilpasset formal og situasjon',
    'delta i spontane samtaler om ulike emner',
  ],
  content: [
    {
      id: 'engelsk-10-2-intro',
      type: 'text',
      content: `## Preparing for the Oral Exam

Den muntlige eksamenen i engelsk bestar vanligvis av to deler:

1. **Presentation** (ca. 10 minutter) - Du presenterer et forberedt tema
2. **Conversation** (ca. 20 minutter) - Samtale med sensor om ulike emner

**Nokkel til suksess:**
- Ovelse, ovelse, ovelse!
- Snakk sakte og tydelig
- Bruk kroppssprak og oyekontakt
- Vaer forberedt pa oppfolgingssporsmal`,
    },
    {
      id: 'engelsk-10-2-def-1',
      type: 'definition',
      title: 'Presentation Structure',
      content: `**Introduction:**
- Greet your audience: "Good morning, my name is..."
- State your topic: "Today I'm going to talk about..."
- Outline: "First, I'll discuss... Then... Finally..."

**Main Body:**
- Divide into 3-4 clear sections
- Use signposting: "Moving on to...", "Another important point is..."
- Include examples and personal connections

**Conclusion:**
- Signal the end: "To conclude...", "In summary..."
- Restate main points briefly
- End with impact: question, quote, or call to action
- Thank audience: "Thank you for listening. Any questions?"`,
    },
    {
      id: 'engelsk-10-2-def-2',
      type: 'definition',
      title: 'Useful Phrases for Discussion',
      content: `**Gi din mening (Giving opinions):**
- In my opinion..., I believe that..., From my point of view...
- Personally, I think..., As I see it..., It seems to me that...

**Vaere enig/uenig (Agreeing/Disagreeing):**
- I completely agree..., That's a good point..., Exactly!
- I see your point, but..., I'm not sure I agree..., On the other hand...

**Be om avklaring (Asking for clarification):**
- Could you explain what you mean by...?
- Sorry, I didn't quite catch that. Could you repeat?
- Do you mean that...?

**Vinne tid til a tenke (Buying time):**
- That's an interesting question..., Let me think about that...
- Well, it depends..., That's a good point to consider...`,
    },
    {
      id: 'engelsk-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Responding to Unexpected Questions',
      problem: `Hvordan svarer du hvis du far et sporsmal du ikke vet svaret pa?`,
      solution: `**Strategi: Vaer aerlig, men vis at du tenker**

**Darlig respons:**
"I don't know." (stopper samtalen)

**God respons:**
"That's an interesting question. I haven't thought about it that way before. However, I would imagine that... [gi ditt beste forsok]"

**Eller:**
"I'm not entirely sure, but based on what I know about the topic, I think... What do you think?"

**Tips:**
- Det er greit a ikke vite alt
- Vis at du kan tenke kritisk
- Prov a koble til noe du VET
- Still gjerne et oppfolgingssporsmal tilbake`,
    },
    {
      id: 'engelsk-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Velg riktig fraser for situasjonen:',
        subTasks: [
          {
            label: 'a',
            task: 'Du vil si deg delvis enig med noen.',
            solution: 'I see your point, but...',
            multipleChoiceOptions: ['I see your point, but...', 'I completely agree', 'That\'s wrong', 'Moving on to...'],
          },
          {
            label: 'b',
            task: 'Du vil signalisere at du gar over til neste del av presentasjonen.',
            solution: 'Moving on to...',
            multipleChoiceOptions: ['Moving on to...', 'In my opinion...', 'To conclude...', 'Let me think...'],
          },
          {
            label: 'c',
            task: 'Du trenger litt tid til a tenke for du svarer.',
            solution: 'That\'s an interesting question...',
            multipleChoiceOptions: ['That\'s an interesting question...', 'I completely agree', 'First of all...', 'Any questions?'],
          },
        ],
        solution: 'a) I see your point, but..., b) Moving on to..., c) That\'s an interesting question...',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en stikkordsliste for en 5-minutters presentasjon om folgende tema: "My favourite book/movie and why I recommend it"',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en engasjerende apning (2-3 stikkord).',
            solution: 'F.eks.: Hook med sitat, personlig tilknytning, overraskende fakta',
          },
          {
            label: 'b',
            task: 'List opp 3 hovedpunkter du vil snakke om.',
            solution: 'F.eks.: 1) Plot summary, 2) Main themes, 3) Why it matters to me',
          },
          {
            label: 'c',
            task: 'Skriv en avslutning som etterlater et inntrykk.',
            solution: 'F.eks.: Koble til publikum, anbefaling, avsluttende sitat',
          },
        ],
        hints: ['Ikke skriv hele setninger - bare stikkord', 'Tenk pa hva som gjor dette interessant for andre'],
        solution: 'En god stikkordsliste har struktur, men gir rom for naturlig tale.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Ov pa a svare pa disse vanlige eksamensporsmalen (skriv et kort svar pa 3-5 setninger):',
        subTasks: [
          {
            label: 'a',
            task: 'What do you think is the biggest challenge facing young people today?',
            solution: 'Svaret bor gi en mening, begrunnelse og gjerne et eksempel.',
          },
          {
            label: 'b',
            task: 'How has technology changed the way we communicate?',
            solution: 'Svaret bor vise refleksjon og gjerne nevne bade positive og negative sider.',
          },
          {
            label: 'c',
            task: 'Why is it important to learn English?',
            solution: 'Svaret bor vaere personlig og gi konkrete eksempler.',
          },
        ],
        hints: ['Start med din mening', 'Gi begrunnelse', 'Bruk eksempler'],
        solution: 'Gode muntlige svar er strukturerte, personlige og viser refleksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Ov uttale: Les denne teksten hoyt og ta opp deg selv. Lytt etter tydelig uttale og naturlig flyt.',
        hints: [
          'Fokuser pa vanskelige lyder: th, r, w',
          'Pass pa trykk og intonasjon',
          'Pause ved komma og punktum',
        ],
        solution: '"Climate change is one of the most pressing issues of our time. Though many people think it won\'t affect them directly, the truth is that we\'re already seeing its effects worldwide. From rising sea levels to extreme weather events, the evidence is overwhelming. Therefore, we must take action now."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Rollespill: Ov med en medelev. En spiller sensor, en spiller elev. Byt roller etterpaa.',
        hints: [
          'Sensor stiller oppfolgingssporsmal',
          'Eleven over pa a tenke hoyt og be om avklaring',
        ],
        solution: 'Muntlig eksamen handler like mye om kommunikasjon som om kunnskapsniva.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Literary Analysis
// ============================================================================

export const CHAPTER_ENGELSK_10_3: TextbookChapter = {
  id: 'engelsk-10-3',
  courseId: 'engelsk-10',
  chapterNumber: '3',
  title: 'Literary Analysis',
  description: 'Laer a analysere litteraere tekster med fokus pa virkemidler, tema og tolkning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese, analysere og tolke engelskspraklig litteratur',
    'samtale om forfatterens virkemidler og tekstens tema',
  ],
  content: [
    {
      id: 'engelsk-10-3-intro',
      type: 'text',
      content: `## Analysing Literature

Litteraer analyse handler om a forsta hvordan en tekst fungerer - ikke bare HVA den sier, men HVORDAN den sier det.

**Tre nivaer av analyse:**
1. **Surface level** - Hva skjer? (plot, characters)
2. **Deeper level** - Hvorfor skjer det? (themes, motives)
3. **Craft level** - Hvordan formidles det? (literary devices)

En god analyse beveger seg mellom alle tre nivaene.`,
    },
    {
      id: 'engelsk-10-3-def-1',
      type: 'definition',
      title: 'Literary Elements (Litteraere elementer)',
      content: `**Setting:**
- Time and place of the story
- Creates atmosphere and context
- Can be symbolic

**Characters:**
- Protagonist (main character)
- Antagonist (opposing force)
- Dynamic vs. static characters
- Flat vs. round characters

**Plot:**
- Exposition (introduction)
- Rising action (conflict develops)
- Climax (turning point)
- Falling action (consequences)
- Resolution (ending)

**Point of View:**
- First person (I, we)
- Third person limited (he/she - one character's perspective)
- Third person omniscient (all-knowing narrator)`,
    },
    {
      id: 'engelsk-10-3-def-2',
      type: 'definition',
      title: 'Literary Devices (Virkemidler)',
      content: `**Imagery:** Descriptive language appealing to senses
- "The bitter cold bit through his thin jacket"

**Symbolism:** Objects representing deeper meaning
- A dove representing peace

**Foreshadowing:** Hints about future events
- Dark clouds gathering before tragedy

**Irony:** Contrast between expectation and reality
- Situational: A fire station burns down
- Dramatic: Audience knows something characters don't
- Verbal: Saying the opposite of what you mean

**Metaphor:** Direct comparison
- "Life is a journey"

**Simile:** Comparison using "like" or "as"
- "Her eyes sparkled like diamonds"

**Personification:** Giving human qualities to non-human things
- "The wind whispered through the trees"`,
    },
    {
      id: 'engelsk-10-3-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av et tekstutdrag',
      problem: `Analyser dette utdraget fra "The Great Gatsby" av F. Scott Fitzgerald:

"Gatsby believed in the green light, the orgastic future that year by year recedes before us. It eluded us then, but that's no matter - tomorrow we will run faster, stretch out our arms farther..."`,
      solution: `**Overflateniva:**
Gatsby tror pa det gronne lyset og fremtiden det representerer.

**Dypere niva - Tema:**
- Uoppnaelige drommer
- Den amerikanske drommen
- Menneskets evige jakt pa noe "mer"

**Virkemidler:**
- **Symbolism:** The green light = hope, dreams, the American Dream
- **Imagery:** "stretch out our arms" - visual, physical striving
- **Repetition:** "year by year" - emphasizes the ongoing, futile pursuit
- **Irony:** Despite failure, we keep trying ("that's no matter")

**Tolkning:**
Fitzgerald kritiserer den amerikanske drommen som en illusjon. Drommen beveger seg alltid vekk fra oss, men vi fortsetter a jage - en tragisk, men ogsa dypt menneskelig egenskap.`,
    },
    {
      id: 'engelsk-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser virkemiddelet:',
        subTasks: [
          {
            label: 'a',
            task: '"The classroom was a prison."',
            solution: 'Metaphor',
            multipleChoiceOptions: ['Metaphor', 'Simile', 'Personification', 'Irony'],
          },
          {
            label: 'b',
            task: '"The trees danced joyfully in the breeze."',
            solution: 'Personification',
            multipleChoiceOptions: ['Personification', 'Metaphor', 'Symbolism', 'Foreshadowing'],
          },
          {
            label: 'c',
            task: '"As brave as a lion, she faced her fears."',
            solution: 'Simile',
            multipleChoiceOptions: ['Simile', 'Metaphor', 'Irony', 'Imagery'],
          },
          {
            label: 'd',
            task: 'The unsinkable ship sank on its first voyage.',
            solution: 'Irony (situational)',
            multipleChoiceOptions: ['Irony', 'Foreshadowing', 'Symbolism', 'Metaphor'],
          },
        ],
        solution: 'a) Metaphor, b) Personification, c) Simile, d) Irony',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Les dette utdraget og svar pa sporsmalen:',
        subTasks: [
          {
            label: 'a',
            task: '"The old house stood alone at the end of the road, its windows like hollow eyes staring into the darkness." - Hvilke virkemidler brukes her?',
            solution: 'Simile ("like hollow eyes"), Personification (windows "staring"), Imagery (visual, atmospheric)',
          },
          {
            label: 'b',
            task: 'Hvilken stemning skaper denne beskrivelsen?',
            solution: 'Uhyggelig, mystisk, ensom, skremmende',
          },
          {
            label: 'c',
            task: 'Hva kan huset symbolisere?',
            solution: 'Forfall, ensomhet, fortiden, hemmeligheter, dod',
          },
        ],
        hints: ['Se etter sammenligninger og beskrivelser'],
        solution: 'God litteraer analyse identifiserer virkemidler og forklarer deres effekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser synsvinkel og fortellerstemme:',
        subTasks: [
          {
            label: 'a',
            task: '"I never understood why they did it. Even now, years later, I still wonder." - Hvilken synsvinkel er dette?',
            solution: 'First person (jeg-forteller)',
          },
          {
            label: 'b',
            task: 'Hva er fordelen med denne synsvinkelen?',
            solution: 'Personlig, intim, vi far innsikt i fortellerens tanker og folelser',
          },
          {
            label: 'c',
            task: 'Hva er begrensningen?',
            solution: 'Vi ser bare gjennom en persons perspektiv - kan vaere upalitelig',
          },
        ],
        solution: 'Synsvinkel pavirker hvordan vi oppfatter historien og karakterene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en kort litteraer analyse (150-200 ord) av en novelle eller et dikt du har lest. Inkluder:',
        hints: [
          'Tittel og forfatter',
          'Kort sammendrag (2-3 setninger)',
          'Minst to virkemidler med eksempler',
          'Tema og din tolkning',
        ],
        solution: 'En god analyse balanserer beskrivelse, identifikasjon av virkemidler, og personlig tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign to tekster med samme tema (f.eks. kjaerlighet, tap, identitet). Hvordan behandler de temaet forskjellig?',
        hints: [
          'Velg tekster fra pensum eller selvvalgte',
          'Se pa setting, karakterer og virkemidler',
          'Hvilken tekst "treffer" deg mest, og hvorfor?',
        ],
        solution: 'Komparativ analyse viser forstaelse for hvordan form pavirker innhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Media and Society
// ============================================================================

export const CHAPTER_ENGELSK_10_4: TextbookChapter = {
  id: 'engelsk-10-4',
  courseId: 'engelsk-10',
  chapterNumber: '4',
  title: 'Media and Society',
  description: 'Utforsk medias rolle i samfunnet og laer kritisk medieforstaelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere og bruke kilder kritisk',
    'reflektere over medias rolle og pavirkning i samfunnet',
  ],
  content: [
    {
      id: 'engelsk-10-4-intro',
      type: 'text',
      content: `## Media in the Modern World

Media er overalt - fra nyhetssendinger til sosiale medier, fra reklame til underholdning. A forsta hvordan media fungerer er avgjorende for a vaere en kritisk og informert borger.

**Viktige sporsmal:**
- Hvem lager innholdet og hvorfor?
- Hvordan pavirker media vare meninger?
- Hvordan kan vi skille fakta fra fiksjon?

**Medietyper:**
- Traditional media (newspapers, TV, radio)
- Digital media (websites, apps, streaming)
- Social media (Instagram, TikTok, YouTube)`,
    },
    {
      id: 'engelsk-10-4-def-1',
      type: 'definition',
      title: 'Media Literacy Concepts',
      content: `**Bias:** Partiskhet - vinkling i en bestemt retning
- Selection bias: What stories are chosen?
- Framing bias: How are stories presented?
- Confirmation bias: Seeking info that confirms beliefs

**Fake News:** Falske nyheter med vilje a villede
- Misinformation: False info shared without intent to harm
- Disinformation: Deliberately created false info

**Echo Chamber:** Ekkokammer
- Only exposed to similar opinions
- Algorithms reinforce this

**Filter Bubble:** Filterboble
- Personalized content based on behavior
- Limits exposure to diverse viewpoints

**Clickbait:** Klikkagn
- Sensational headlines to get clicks
- Often misleading or exaggerated`,
    },
    {
      id: 'engelsk-10-4-def-2',
      type: 'definition',
      title: 'Evaluating Sources - The CRAAP Test',
      content: `**C - Currency (Aktualitet)**
- When was it published/updated?
- Is it still relevant?

**R - Relevance (Relevans)**
- Does it relate to your topic?
- Who is the intended audience?

**A - Authority (Autoritet)**
- Who is the author/publisher?
- What are their credentials?

**A - Accuracy (Noyaktighet)**
- Is the information supported by evidence?
- Can it be verified elsewhere?

**P - Purpose (Formal)**
- Why was this created?
- Is it meant to inform, persuade, sell, or entertain?
- Is there obvious bias?`,
    },
    {
      id: 'engelsk-10-4-example-1',
      type: 'example',
      title: 'Eksempel: Identifisere bias',
      problem: `Se pa disse to overskriftene om samme hendelse:
1. "Protesters clash with police in downtown demonstration"
2. "Peaceful march turns violent as police use force"`,
      solution: `**Analyse:**

**Overskrift 1:**
- Neutral/police-friendly framing
- "Clash" suggests equal responsibility
- "Protesters" named as active agents

**Overskrift 2:**
- Protester-friendly framing
- "Peaceful" establishes original intent
- "Police use force" places blame

**Konklusjon:**
Begge overskriftene kan beskrive samme hendelse, men de forteller forskjellige historier. Ordvalg, rekkefolge, og hvem som far "agency" (handler) former var oppfatning.

**Tips:**
- Les flere kilder om samme sak
- Se pa hvem som siteres
- Vurder bildene som brukes
- Vaer oppmerksom pa ladede ord`,
    },
    {
      id: 'engelsk-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Definer begrepene pa norsk:',
        subTasks: [
          {
            label: 'a',
            task: 'Echo chamber',
            solution: 'Ekkokammer - nar du bare eksponeres for meninger som ligner dine egne',
          },
          {
            label: 'b',
            task: 'Clickbait',
            solution: 'Klikkagn - overdrevne/villedende overskrifter for a fa klikk',
          },
          {
            label: 'c',
            task: 'Filter bubble',
            solution: 'Filterboble - algoritmer viser deg innhold basert pa tidligere oppforsel',
          },
        ],
        solution: 'Forstaelse av disse begrepene er viktig for kritisk mediebruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bruk CRAAP-testen pa en nettartikkel du finner:',
        subTasks: [
          {
            label: 'a',
            task: 'Currency: Nar ble den publisert?',
            solution: 'Sjekk dato og om informasjonen fortsatt er relevant.',
          },
          {
            label: 'b',
            task: 'Authority: Hvem skrev den og hva er deres bakgrunn?',
            solution: 'Se pa forfatterens kvalifikasjoner og nettstedets rykte.',
          },
          {
            label: 'c',
            task: 'Purpose: Hva er formalet med artikkelen?',
            solution: 'Vurder om den informerer, overtaler, selger eller underholder.',
          },
        ],
        hints: ['Velg en aktuell nyhetsartikkel', 'Se etter "Om oss"-sider'],
        solution: 'Kritisk kildevurdering er en essensiell ferdighet i informasjonsalderen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Finn tre ulike mediers dekning av samme nyhetssak. Sammenlign:',
        hints: [
          'Hvilke vinklinger velger de?',
          'Hvem siteres?',
          'Hvilke bilder brukes?',
          'Hva utelates?',
        ],
        solution: 'Sammenligning av mediedekning avslorer bias og valg som former budskapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser en reklame (video eller bilde). Besvar:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem er malgruppen?',
            solution: 'Beskriv alder, kjonn, interesser, livsstil til dem reklamen henvender seg til.',
          },
          {
            label: 'b',
            task: 'Hvilke folelser appellerer reklamen til?',
            solution: 'F.eks. tilhorighet, frykt, status, glede, FOMO.',
          },
          {
            label: 'c',
            task: 'Hva er det implisitte budskapet (det som ikke sies direkte)?',
            solution: 'Ofte: "Livet ditt blir bedre med dette produktet."',
          },
        ],
        solution: 'Reklameanalyse avslorer persuasive teknikker og skjulte budskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv et essay (250-300 ord) om et av disse temaene:',
        hints: [
          '"Should social media have age restrictions?"',
          '"How do influencers affect young people\'s self-image?"',
          '"Is traditional media still relevant in the digital age?"',
        ],
        solution: 'Essayet vurderes etter argumentasjon, struktur og bruk av eksempler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter over din egen mediebruk: Hvordan pavirker algoritmer hva du ser pa sosiale medier? Gi konkrete eksempler.',
        hints: ['Tenk pa For You-siden', 'Hva dukker opp igjen og igjen?'],
        solution: 'Selvrefleksjon over medievaner er forste steg mot bevisst mediebruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Intercultural Communication
// ============================================================================

export const CHAPTER_ENGELSK_10_5: TextbookChapter = {
  id: 'engelsk-10-5',
  courseId: 'engelsk-10',
  chapterNumber: '5',
  title: 'Intercultural Communication',
  description: 'Laer om interkulturell kommunikasjon og engelskspraklige kulturer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske levesett og tradisjoner i engelskspraklige land',
    'kommunisere med forstaelse for kulturelle forskjeller',
  ],
  content: [
    {
      id: 'engelsk-10-5-intro',
      type: 'text',
      content: `## Communicating Across Cultures

Engelsk er et globalt sprak som snakkes i mange ulike land og kulturer. A kommunisere effektivt pa tvers av kulturer krever mer enn bare sprakkunnskap - det krever kulturell bevissthet.

**Engelskspraklige land:**
- United Kingdom, Ireland
- United States, Canada
- Australia, New Zealand
- South Africa, Nigeria, India
- + mange flere med engelsk som offisielt sprak

**Viktig:** Det finnes ikke "riktig" engelsk - det finnes mange varianter!`,
    },
    {
      id: 'engelsk-10-5-def-1',
      type: 'definition',
      title: 'Cultural Dimensions',
      content: `**High-context vs. Low-context cultures:**
- High-context: Communication relies on context, non-verbal cues, relationships (Japan, many Arab countries)
- Low-context: Communication is direct and explicit (USA, Germany, Scandinavia)

**Individualism vs. Collectivism:**
- Individualist: Focus on personal achievement, independence (USA, UK, Australia)
- Collectivist: Focus on group harmony, family, community (many Asian, African, Latin American cultures)

**Direct vs. Indirect communication:**
- Direct: Say what you mean clearly
- Indirect: Use hints, implications, avoid confrontation

**Formal vs. Informal:**
- Formal: Titles, last names, structured hierarchy
- Informal: First names, casual, flat structure`,
    },
    {
      id: 'engelsk-10-5-def-2',
      type: 'definition',
      title: 'British vs. American English',
      content: `**Vocabulary differences:**
| British | American |
|---------|----------|
| flat | apartment |
| lift | elevator |
| biscuit | cookie |
| rubbish | garbage/trash |
| mobile | cell phone |
| holiday | vacation |
| queue | line |

**Spelling differences:**
| British | American |
|---------|----------|
| colour | color |
| centre | center |
| realise | realize |
| programme | program |
| travelling | traveling |

**Pronunciation:**
- British: Non-rhotic (don't pronounce "r" at end)
- American: Rhotic (pronounce all "r"s)
- Different vowel sounds in words like "bath," "dance"`,
    },
    {
      id: 'engelsk-10-5-example-1',
      type: 'example',
      title: 'Eksempel: Kulturelle misforstaelser',
      problem: `Tenk deg folgende situasjon: En norsk student snakker med en britisk person og sier direkte: "That's a bad idea."`,
      solution: `**Analyse:**

I Norge er direkte kommunikasjon vanlig og ses som aerlig. I Storbritannia kan dette oppleves som uhoflig.

**Britisk indirekte stil:**
I stedet for "That's a bad idea," ville en brite kanskje si:
- "That's an interesting thought, but perhaps we could consider..."
- "I see what you mean. Have you thought about...?"
- "That might be worth looking at from another angle."

**Tips for interkulturell kommunikasjon:**
1. Vaer bevisst pa at din kommunikasjonsstil ikke er universell
2. Observer hvordan andre kommuniserer
3. Nar du er usikker, vaer hoflig og sporende
4. Ikke anta at stillhet betyr enighet`,
    },
    {
      id: 'engelsk-10-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Oversett til amerikansk engelsk:',
        subTasks: [
          {
            label: 'a',
            task: 'I live in a flat on the first floor.',
            solution: 'I live in an apartment on the second floor. (British "first floor" = American "second floor")',
          },
          {
            label: 'b',
            task: 'I\'ll take the lift and meet you at the car park.',
            solution: 'I\'ll take the elevator and meet you at the parking lot.',
          },
          {
            label: 'c',
            task: 'I need to queue for the loo.',
            solution: 'I need to wait in line for the bathroom/restroom.',
          },
        ],
        solution: 'Begge varianter er korrekte - det viktige er konsistens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Klassifiser landene som hovedsakelig individualistiske eller kollektivistiske:',
        subTasks: [
          {
            label: 'a',
            task: 'USA',
            solution: 'Individualistisk',
            multipleChoiceOptions: ['Individualistisk', 'Kollektivistisk'],
          },
          {
            label: 'b',
            task: 'Japan',
            solution: 'Kollektivistisk',
            multipleChoiceOptions: ['Individualistisk', 'Kollektivistisk'],
          },
          {
            label: 'c',
            task: 'Australia',
            solution: 'Individualistisk',
            multipleChoiceOptions: ['Individualistisk', 'Kollektivistisk'],
          },
        ],
        hints: ['Dette er generaliseringer - individer varierer alltid'],
        solution: 'Kulturelle dimensjoner er tendenser, ikke absolutter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Omformuler disse direkte utsagnene til en mer indirekte, hoflig form:',
        subTasks: [
          {
            label: 'a',
            task: '"You\'re wrong."',
            solution: '"I see it differently..." / "I\'m not sure I agree with that..."',
          },
          {
            label: 'b',
            task: '"Give me that report."',
            solution: '"Would you mind sending me that report?" / "Could I possibly have that report?"',
          },
          {
            label: 'c',
            task: '"I don\'t like your plan."',
            solution: '"I wonder if we might consider some alternatives..." / "That\'s one approach, though I had some concerns about..."',
          },
        ],
        solution: 'Indirekte kommunikasjon bruker sporsmal, dempere og forslag i stedet for direkte utsagn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Utforsk en engelskspraklig kultur. Velg et land og presenter:',
        hints: [
          'Geografi og klima',
          'Viktige tradisjoner og hoytider',
          'Mat og skikker',
          'Interessante kulturelle fenomener',
        ],
        solution: 'Presentasjonen bor vise genuin interesse og respektfull nysgjerrighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Refleksjon: Hvordan pavirker norsk kultur din kommunikasjonsstil? Gi eksempler pa nar dette kan vaere en fordel eller utfordring i mote med andre kulturer.',
        hints: ['Tenk pa janteloven', 'Direkte vs. indirekte', 'Formal vs. uformell'],
        solution: 'Selvbevissthet om egen kultur er forste steg mot interkulturell kompetanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Academic Writing
// ============================================================================

export const CHAPTER_ENGELSK_10_6: TextbookChapter = {
  id: 'engelsk-10-6',
  courseId: 'engelsk-10',
  chapterNumber: '6',
  title: 'Academic Writing',
  description: 'Laer a skrive akademiske tekster med korrekt struktur, kildebruk og sprak.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive tekster med god struktur, presist innhold og korrekt kildebruk',
  ],
  content: [
    {
      id: 'engelsk-10-6-intro',
      type: 'text',
      content: `## Academic Writing Skills

Akademisk skriving skiller seg fra annen skriving ved a vaere:
- **Formell** - unnga slang og sammentrekninger
- **Objektiv** - fokuser pa bevis, ikke folelser
- **Presis** - vaer spesifikk og klar
- **Strukturert** - folg etablerte konvensjoner
- **Kildestottet** - dokumenter hvor informasjon kommer fra

Disse ferdighetene er viktige for videregaende og hoyere utdanning.`,
    },
    {
      id: 'engelsk-10-6-def-1',
      type: 'definition',
      title: 'Academic Language Features',
      content: `**Avoid (Unnga):**
- Contractions: don't -> do not, can't -> cannot
- Slang: "cool," "stuff," "a lot"
- First person (often): "I think" -> "It can be argued"
- Emotional language: "terrible," "amazing"
- Vague words: "things," "nice," "good"

**Use (Bruk):**
- Formal vocabulary: "however," "therefore," "consequently"
- Precise language: "72%" instead of "most"
- Hedging: "may," "might," "appears to," "suggests"
- Passive voice (sometimes): "The study was conducted..."
- Subject-specific terminology

**Hedging phrases:**
- It appears that... / It seems likely that...
- The evidence suggests... / This may indicate...
- According to [source]... / Research shows that...`,
    },
    {
      id: 'engelsk-10-6-def-2',
      type: 'definition',
      title: 'Citing Sources',
      content: `**Why cite sources?**
- Give credit to original authors
- Avoid plagiarism
- Allow readers to verify information
- Show breadth of research

**In-text citations (examples):**
- According to Smith (2023), climate change is...
- Research has shown that... (Johnson, 2022).
- "Direct quote here" (Brown, 2021, p. 45).

**Paraphrasing vs. Quoting:**
- Paraphrase: Put ideas in your own words
- Quote: Use exact words in quotation marks
- Rule: Paraphrase when possible, quote when the exact wording matters

**Avoiding plagiarism:**
- Always cite your sources
- Use quotation marks for direct quotes
- Paraphrase properly (don't just change a few words)
- Keep track of sources while researching`,
    },
    {
      id: 'engelsk-10-6-example-1',
      type: 'example',
      title: 'Eksempel: Fra uformell til formell stil',
      problem: `Gjor om denne uformelle teksten til akademisk stil:

"I think social media is really bad for kids. Lots of people say it makes them sad and stuff. It's pretty obvious that we should do something about it."`,
      solution: `**Akademisk versjon:**

"Social media usage among children and adolescents has been linked to negative mental health outcomes. According to recent research (Twenge, 2019), increased screen time correlates with higher rates of anxiety and depression in young people. These findings suggest that policymakers and educators should consider implementing guidelines for healthy social media use."

**Endringer:**
- "I think" -> objektiv pastand med kildehenvisning
- "really bad" -> "negative mental health outcomes"
- "Lots of people say" -> "According to recent research"
- "sad and stuff" -> "anxiety and depression"
- "pretty obvious" -> "These findings suggest"
- La til hedging: "correlates," "suggest," "should consider"`,
    },
    {
      id: 'engelsk-10-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gjor setningene mer akademiske:',
        subTasks: [
          {
            label: 'a',
            task: '"I think this is a really important issue."',
            solution: '"This issue is of significant importance." / "This represents a critical concern."',
          },
          {
            label: 'b',
            task: '"Lots of studies show that exercise is good for you."',
            solution: '"Numerous studies demonstrate that exercise has positive health effects (Smith, 2022)."',
          },
          {
            label: 'c',
            task: '"This stuff is confusing and doesn\'t make sense."',
            solution: '"This concept presents challenges in comprehension and requires clarification."',
          },
        ],
        solution: 'Akademisk sprak er presist, formelt og objektivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Identifiser problemet med disse kildehenvisningene:',
        subTasks: [
          {
            label: 'a',
            task: 'Global warming is definitely going to destroy the planet.',
            solution: 'Mangler kilde og er for kategorisk. Bor hedges ("may" / "according to")',
          },
          {
            label: 'b',
            task: 'Scientists say that...',
            solution: 'For vagt. Hvilke forskere? Nar? Gi spesifikk referanse.',
          },
          {
            label: 'c',
            task: 'I read somewhere that coffee is bad for health.',
            solution: '"Somewhere" er ikke en kilde. Dokumenter hvor informasjonen kommer fra.',
          },
        ],
        solution: 'God akademisk skriving krever presise og sporbare kilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Parafrasering: Skriv om denne teksten med egne ord uten a endre betydningen:',
        hints: [
          'Originaltekst: "Social media platforms have fundamentally transformed the way young people communicate, creating new opportunities for connection while simultaneously raising concerns about privacy and mental health."',
        ],
        solution: 'En god parafrasering endrer strukturen og ordvalget, men bevarer meningen. Husk a sitere kilden selv om du parafraserer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en akademisk innledning (100-150 ord) til et essay om et av disse temaene:',
        hints: [
          '"The impact of technology on education"',
          '"Climate change and individual responsibility"',
          '"The importance of preserving endangered languages"',
        ],
        solution: 'Innledningen bor ha hook, bakgrunn, og tydelig thesis statement - alt i formelt akademisk sprak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv et kort akademisk avsnitt (80-100 ord) som inkluderer:',
        hints: [
          'En topic sentence',
          'Minst en kildehenvisning (kan vaere fiktiv)',
          'Hedging-sprak',
          'Formell stil',
        ],
        solution: 'Avsnittet vurderes etter struktur, akademisk tone og korrekt kildebruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Debating and Argumentation
// ============================================================================

export const CHAPTER_ENGELSK_10_7: TextbookChapter = {
  id: 'engelsk-10-7',
  courseId: 'engelsk-10',
  chapterNumber: '7',
  title: 'Debating and Argumentation',
  description: 'Laer a bygge sterke argumenter og delta i debatter pa engelsk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'uttrykke og begrunnne egne meninger og vise forstaelse for andres synspunkter',
  ],
  content: [
    {
      id: 'engelsk-10-7-intro',
      type: 'text',
      content: `## The Art of Argumentation

Argumentasjon handler om a overbevise andre gjennom logikk, bevis og effektiv kommunikasjon. Gode argumentasjonsferdigheter er verdifulle i skole, arbeidsliv og dagligliv.

**Hvorfor laere argumentasjon?**
- Tenke kritisk og strukturert
- Uttrykke meninger effektivt
- Forsta andres perspektiver
- Bli en bedre lytter
- Vurdere informasjon kritisk`,
    },
    {
      id: 'engelsk-10-7-def-1',
      type: 'definition',
      title: 'Building an Argument',
      content: `**Argument structure:**
1. **Claim/Thesis:** Your main point
2. **Evidence:** Facts, statistics, examples
3. **Reasoning:** How evidence supports claim
4. **Counterargument:** Opposing viewpoint
5. **Rebuttal:** Response to counterargument

**Types of evidence:**
- Statistics and data
- Expert opinions
- Research studies
- Historical examples
- Personal experiences (use sparingly in formal arguments)
- Logical reasoning

**The Claim-Evidence-Reasoning (CER) model:**
- Claim: What you believe
- Evidence: What supports it
- Reasoning: Why the evidence matters`,
    },
    {
      id: 'engelsk-10-7-def-2',
      type: 'definition',
      title: 'Logical Fallacies (Feilslutninger)',
      content: `**Ad hominem:** Attacking the person, not the argument
- "You can't trust him, he's too young."

**Straw man:** Misrepresenting opponent's argument
- "My opponent wants to reduce military spending, so clearly they don't care about national security."

**False dichotomy:** Presenting only two options when more exist
- "You're either with us or against us."

**Appeal to emotion:** Using feelings instead of logic
- "Think of the children!" (without evidence)

**Bandwagon:** Everyone's doing it
- "Most people agree, so it must be true."

**Slippery slope:** Assuming extreme consequences without evidence
- "If we allow A, then B, C, and terrible D will follow."

**Hasty generalization:** Drawing broad conclusions from limited examples
- "My friend had a bad experience, so the whole system is broken."`,
    },
    {
      id: 'engelsk-10-7-example-1',
      type: 'example',
      title: 'Eksempel: Bygge et argument',
      problem: `Bygg et argument for pastanden: "Physical education should be mandatory in all schools."`,
      solution: `**Claim:**
Physical education should be mandatory in all schools.

**Evidence 1:**
According to the WHO, children need at least 60 minutes of physical activity daily. Studies show that PE classes significantly contribute to meeting this requirement.

**Reasoning 1:**
Since many children don't get enough exercise outside school, mandatory PE ensures all students have access to structured physical activity.

**Evidence 2:**
Research from Harvard Medical School shows that regular exercise improves concentration and academic performance.

**Reasoning 2:**
Therefore, PE doesn't take away from academics - it actually enhances learning in other subjects.

**Counterargument:**
Some argue that PE takes time away from core subjects and isn't necessary for academically focused students.

**Rebuttal:**
However, the evidence shows that the benefits of PE extend beyond physical health to improved mental health, social skills, and academic performance. The time "lost" is actually an investment in overall student success.`,
    },
    {
      id: 'engelsk-10-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser feilslutningen:',
        subTasks: [
          {
            label: 'a',
            task: '"Everyone in my class agrees that homework is pointless, so it must be true."',
            solution: 'Bandwagon - bare fordi mange mener noe, betyr ikke det at det er sant',
            multipleChoiceOptions: ['Bandwagon', 'Straw man', 'Ad hominem', 'False dichotomy'],
          },
          {
            label: 'b',
            task: '"You can\'t trust her opinion on politics - she\'s a celebrity, not a politician."',
            solution: 'Ad hominem - angriper personen i stedet for argumentet',
            multipleChoiceOptions: ['Ad hominem', 'Slippery slope', 'Bandwagon', 'Appeal to emotion'],
          },
          {
            label: 'c',
            task: '"If we allow students to use calculators, they\'ll forget all math and become completely dependent on technology."',
            solution: 'Slippery slope - antar ekstreme konsekvenser uten bevis',
            multipleChoiceOptions: ['Slippery slope', 'False dichotomy', 'Straw man', 'Hasty generalization'],
          },
        ],
        solution: 'a) Bandwagon, b) Ad hominem, c) Slippery slope',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bruk CER-modellen for a bygge et argument for eller mot: "School uniforms should be mandatory."',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en klar Claim (pastand).',
            solution: 'Eksempel: "School uniforms should be mandatory in all public schools."',
          },
          {
            label: 'b',
            task: 'Gi minst to Evidence (bevis).',
            solution: 'Eksempel: "Studies show reduced bullying" + "Schools report improved focus"',
          },
          {
            label: 'c',
            task: 'Forklar Reasoning (hvorfor bevisene stotter pastanden).',
            solution: 'Forklaring som kobler bevis til pastand logisk.',
          },
        ],
        hints: ['Vaer spesifikk', 'Bruk konkrete eksempler'],
        solution: 'Et sterkt argument har klar pastand, relevant bevis og overbevisende logikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et motargument og tilsvar (counterargument + rebuttal) til dette argumentet: "Social media should be banned for users under 16 because it harms mental health."',
        hints: [
          'Tenk pa hva motstandere ville si',
          'Finn svakheter i motargumentet',
        ],
        solution: 'Gode debattorer forstar begge sider og kan svare pa innvendinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forbered en 2-minutters tale for eller mot et av disse temaene:',
        hints: [
          '"Homework should be abolished"',
          '"Voting age should be lowered to 16"',
          '"Climate change education should be mandatory"',
        ],
        solution: 'Talen bor ha klar struktur (intro, 2-3 hovedpoeng med bevis, konklusjon) og overbevisende levering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Debatt i par: Velg et tema og argumenter for motsatte sider. Etterpa, bytt sider og argumenter for den andre siden.',
        hints: [
          'Lytt aktivt til motstanderen',
          'Svar pa deres poenger, ikke bare gjenta dine egne',
          'A argumentere for noe du er uenig i bygger kritisk tenkning',
        ],
        solution: 'En god debattant kan argumentere effektivt for begge sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Global Challenges
// ============================================================================

export const CHAPTER_ENGELSK_10_8: TextbookChapter = {
  id: 'engelsk-10-8',
  courseId: 'engelsk-10',
  chapterNumber: '8',
  title: 'Global Challenges',
  description: 'Utforsk globale utfordringer og laer relevante engelske uttrykk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og samtale om globale utfordringer og baerekraftig utvikling',
  ],
  content: [
    {
      id: 'engelsk-10-8-intro',
      type: 'text',
      content: `## Understanding Global Challenges

Var verden star overfor en rekke sammenkoblede utfordringer som krever internasjonal forstaelse og samarbeid. A kunne diskutere disse temaene pa engelsk er viktig for a delta i globale samtaler.

**FNs baerekraftsmal (Sustainable Development Goals - SDGs):**
17 mal for a skape en bedre verden innen 2030, inkludert:
- No Poverty (Utrydde fattigdom)
- Climate Action (Stoppe klimaendringene)
- Quality Education (God utdanning)
- Gender Equality (Likestilling mellom kjonn)`,
    },
    {
      id: 'engelsk-10-8-def-1',
      type: 'definition',
      title: 'Key Global Challenges',
      content: `**Climate Change:**
- Global warming, greenhouse gases, carbon footprint
- Extreme weather events, rising sea levels
- Renewable energy, sustainability

**Inequality:**
- Poverty, wealth gap, access to resources
- Gender inequality, discrimination
- Social justice, human rights

**Health:**
- Pandemics, global health security
- Access to healthcare, mental health
- Clean water and sanitation

**Technology & Society:**
- Digital divide, privacy concerns
- Artificial intelligence, automation
- Misinformation, cybersecurity

**Conflict & Peace:**
- War, refugees, displacement
- Terrorism, extremism
- International cooperation, diplomacy`,
    },
    {
      id: 'engelsk-10-8-def-2',
      type: 'definition',
      title: 'Vocabulary for Discussion',
      content: `**Climate and Environment:**
| Norwegian | English |
|-----------|---------|
| Baerekraftig | Sustainable |
| Karbonavtrykk | Carbon footprint |
| Fornybar energi | Renewable energy |
| Biologisk mangfold | Biodiversity |
| Forurensning | Pollution |

**Society and Rights:**
| Norwegian | English |
|-----------|---------|
| Likestilling | Equality |
| Menneskerettigheter | Human rights |
| Flyktning | Refugee |
| Diskriminering | Discrimination |
| Sosial rettferdighet | Social justice |

**Economy and Development:**
| Norwegian | English |
|-----------|---------|
| Fattigdom | Poverty |
| Ulikhet | Inequality |
| Utvikling | Development |
| Baerekraftsmal | Sustainable Development Goals |`,
    },
    {
      id: 'engelsk-10-8-example-1',
      type: 'example',
      title: 'Eksempel: Diskutere klimaendringer',
      problem: `Hvordan kan vi diskutere klimaendringer pa en nyansert mate?`,
      solution: `**Unnga:**
"Climate change is a hoax." / "We're all going to die."
(Ytterligheter som stopper samtalen)

**Bedre tilnaerming:**

"Climate change is a complex issue that requires both individual and systemic action. While scientists agree that human activities contribute to global warming, there are different views on the best solutions.

On one hand, some argue for immediate, dramatic changes like banning fossil fuels. On the other hand, others emphasize gradual transitions to protect jobs and economies.

I believe we need a balanced approach that includes:
- Investment in renewable energy
- International cooperation
- Education and awareness
- Support for affected communities

What's important is that we have these conversations and work together toward solutions."

**Nokkelstrategier:**
- Anerkjenn kompleksitet
- Presenter flere synspunkter
- Vaer spesifikk om losninger
- Inviter til videre diskusjon`,
    },
    {
      id: 'engelsk-10-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match det engelske uttrykket med riktig norsk oversettelse:',
        subTasks: [
          {
            label: 'a',
            task: 'Carbon footprint',
            solution: 'Karbonavtrykk',
            multipleChoiceOptions: ['Karbonavtrykk', 'Drivhuseffekt', 'Fornybar energi', 'Klimaendring'],
          },
          {
            label: 'b',
            task: 'Sustainable development',
            solution: 'Baerekraftig utvikling',
            multipleChoiceOptions: ['Baerekraftig utvikling', 'Sosial rettferdighet', 'Menneskerettigheter', 'Global oppvarming'],
          },
          {
            label: 'c',
            task: 'Refugee crisis',
            solution: 'Flyktningkrise',
            multipleChoiceOptions: ['Flyktningkrise', 'Fattigdomskrise', 'Klimakrise', 'Energikrise'],
          },
        ],
        solution: 'a) Karbonavtrykk, b) Baerekraftig utvikling, c) Flyktningkrise',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg et av FNs 17 baerekraftsmal og skriv en kort forklaring (5-7 setninger pa engelsk) pa:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er malet?',
            solution: 'Forklar malet med egne ord.',
          },
          {
            label: 'b',
            task: 'Hvorfor er det viktig?',
            solution: 'Gi begrunnelse med eksempler.',
          },
          {
            label: 'c',
            task: 'Hva kan enkeltpersoner gjore for a bidra?',
            solution: 'Gi konkrete, realistiske forslag.',
          },
        ],
        hints: ['Se FNs offisielle SDG-sider for informasjon'],
        solution: 'A kunne forklare globale utfordringer pa engelsk er en viktig kommunikasjonsferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter i grupper: "What is the most important global challenge of our time?" Hver person presenterer sitt syn med begrunnelse.',
        hints: [
          'Bruk relevante engelske begreper',
          'Lytt til andres perspektiver',
          'Prov a finne fellesgrunnen',
        ],
        solution: 'Gode diskusjoner krever bade tydelige meninger og apne orer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et debattinnlegg (200-250 ord) med tittelen: "Young people should take the lead in solving global challenges." Argumenter for eller mot.',
        hints: [
          'Ha en klar thesis statement',
          'Bruk minst tre argumenter med stotte',
          'Adresser motargumenter',
        ],
        solution: 'Innlegget vurderes etter argumentasjon, struktur og spraklig variasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research project: Undersok hvordan et engelskspraklig land arbeider med en spesifikk global utfordring. Presenter funnene dine (muntlig eller skriftlig).',
        hints: [
          'Velg et land og en utfordring',
          'Finn palitelige kilder',
          'Sammenlign gjerne med Norge',
        ],
        solution: 'Prosjektet viser evne til selvstendig research og formidling pa engelsk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Identity and Belonging
// ============================================================================

export const CHAPTER_ENGELSK_10_9: TextbookChapter = {
  id: 'engelsk-10-9',
  courseId: 'engelsk-10',
  chapterNumber: '9',
  title: 'Identity and Belonging',
  description: 'Utforsk temaer som identitet, tilhorighet og selvuttrykk gjennom litteratur og refleksjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'lese og reflektere over tekster om identitet og mangfold',
    'uttrykke seg om personlige og mellommenneskelige emner',
  ],
  content: [
    {
      id: 'engelsk-10-9-intro',
      type: 'text',
      content: `## Who Am I? Where Do I Belong?

Sporsmal om identitet og tilhorighet er sentrale i ungdomsarene og i litteraturen. Hvem er jeg? Hvor horer jeg hjemme? Hvordan former mine erfaringer hvem jeg er?

**Faktorer som former identitet:**
- Family and cultural background
- Language and communication
- Experiences and relationships
- Choices and values
- Community and belonging

**I dette kapittelet utforsker vi:**
- Hvordan litteratur behandler identitetstemaer
- Vokabular for a uttrykke deg om identitet
- Refleksjon over egen og andres identitet`,
    },
    {
      id: 'engelsk-10-9-def-1',
      type: 'definition',
      title: 'Key Concepts',
      content: `**Identity:** Sense of self; who you are
- Personal identity: Individual traits, preferences
- Social identity: Group memberships, roles
- Cultural identity: Heritage, traditions, values

**Belonging:** Feeling accepted and connected
- To a place, group, or community
- Sense of "home" (physical and emotional)

**Diversity:** Variety of backgrounds and perspectives
- Cultural, ethnic, religious diversity
- Neurodiversity, different abilities
- Different perspectives and experiences

**Inclusivity:** Creating space for everyone
- Acceptance and respect
- Equal opportunities
- Celebrating differences

**Stereotypes:** Oversimplified ideas about groups
- Often inaccurate and harmful
- Limit understanding of individuals`,
    },
    {
      id: 'engelsk-10-9-def-2',
      type: 'definition',
      title: 'Vocabulary for Self-Expression',
      content: `**Describing identity:**
- I identify as... / I consider myself...
- A big part of who I am is...
- I come from a background where...
- My heritage/culture is important to me because...

**Discussing belonging:**
- I feel most at home when...
- I belong to... / I'm part of...
- What makes me feel included is...
- Sometimes I feel like an outsider because...

**Reflecting on experiences:**
- A turning point for me was...
- I've come to realize that...
- What shaped me was...
- Looking back, I understand that...

**Discussing difference:**
- What makes us unique is...
- We all have different experiences of...
- Despite our differences, we share...`,
    },
    {
      id: 'engelsk-10-9-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av identitetstema i litteratur',
      problem: `Analyser dette utdraget fra "The Absolutely True Diary of a Part-Time Indian" av Sherman Alexie:

"I was half Indian in one place and half white in another. It was like being Indian in one room and white in the other."`,
      solution: `**Tema:** Delt identitet, tilhorighet, kulturell konflikt

**Virkemidler:**
- **Repetition:** "half... half" - understreker splittelsen
- **Simile:** "like being in one room... another" - konkret bilde
- **Paradox:** Kan man vaere "half" en identitet?

**Analyse:**
Hovedpersonen opplever a leve mellom to verdener - den indianske reservasjonen og den hvite skolen. Han foler seg ikke helt hjemme noen av stedene.

Dette er et eksempel pa **cultural identity conflict** - nar man tilhorer flere kulturer som noen ganger kolliderer.

**Universelt tema:**
Mange ungdommer kan kjenne seg igjen i a fole seg "mellom" - mellom barndom og voksenlivet, mellom ulike vennegjenger, mellom familiens og samfunnets forventninger.

**Sporsmal til refleksjon:**
- Har du noen gang folt deg "delt" mellom ulike grupper eller identiteter?
- Hvordan kan man finne tilhorighet nar man star mellom flere verdener?`,
    },
    {
      id: 'engelsk-10-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Definer pa engelsk med egne ord:',
        subTasks: [
          {
            label: 'a',
            task: 'Cultural identity',
            solution: 'The sense of belonging to a particular culture, including its traditions, values, and heritage.',
          },
          {
            label: 'b',
            task: 'Stereotype',
            solution: 'An oversimplified and generalized idea about a group of people that doesn\'t account for individual differences.',
          },
          {
            label: 'c',
            task: 'Inclusivity',
            solution: 'The practice of creating environments where all people feel welcomed, respected, and valued.',
          },
        ],
        solution: 'A kunne forklare abstrakte begreper er en viktig sprakferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Personlig refleksjon: Svar pa disse sporsmalene (3-5 setninger pa hvert):',
        subTasks: [
          {
            label: 'a',
            task: 'What aspects of your identity are most important to you?',
            solution: 'Svar bor vaere personlig og reflektert.',
          },
          {
            label: 'b',
            task: 'Where or when do you feel you truly belong?',
            solution: 'Svar bor gi konkrete eksempler.',
          },
          {
            label: 'c',
            task: 'How has your identity changed or developed over the years?',
            solution: 'Svar bor vise evne til selvrefleksjon.',
          },
        ],
        hints: ['Du velger selv hvor personlig du vil vaere', 'Fokuser pa spraklig uttrykk'],
        solution: 'Refleksjonsoppgaver utvikler bade sprakferdigheter og selvbevissthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Les en tekst (novelle, dikt eller bokutdrag) som handler om identitet. Analyser:',
        hints: [
          'Hvilket aspekt av identitet utforskes?',
          'Hvilke virkemidler brukes?',
          'Hvordan kan du relatere til teksten?',
        ],
        solution: 'Analyse bor vise forstaelse for bade litteraere virkemidler og tematikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Kreativ skriving: Skriv et kort stykke (150-200 ord) som starter med en av disse setningene:',
        hints: [
          '"I never felt like I truly belonged until..."',
          '"The day I realized who I really was..."',
          '"Between two worlds, I found myself..."',
        ],
        solution: 'Kreativ skriving gir mulighet til a utforske temaer pa en personlig mate.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gruppediskusjon: Diskuter pastanden "Social media helps young people express their identity." Gi argumenter for og mot.',
        hints: [
          'Tenk pa bade positive og negative aspekter',
          'Gi konkrete eksempler',
          'Lytt til ulike perspektiver',
        ],
        solution: 'God diskusjon viser evne til a se saker fra flere sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Critical Reading
// ============================================================================

export const CHAPTER_ENGELSK_10_10: TextbookChapter = {
  id: 'engelsk-10-10',
  courseId: 'engelsk-10',
  chapterNumber: '10',
  title: 'Critical Reading',
  description: 'Utvikle avanserte leseferdigheter med fokus pa kritisk analyse og evaluering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og forsta ulike typer tekster og vurdere dem kritisk',
    'identifisere avsenderens formal og perspektiv',
  ],
  content: [
    {
      id: 'engelsk-10-10-intro',
      type: 'text',
      content: `## Reading Beyond the Surface

Kritisk lesing handler om a ga dypere enn overflaten - a stille sporsmal, vurdere troverdighet, og forsta hvordan tekster forsoker a pavirke oss.

**Kritisk lesing innebaeerer:**
- Identifisere forfatterens formal og perspektiv
- Vurdere argumenter og bevis
- Gjenkjenne bias og virkemidler
- Sammenligne med andre kilder
- Trekke egne konklusjoner

**Hvorfor er dette viktig?**
I en verden full av informasjon er evnen til a lese kritisk essensiell for a ta informerte valg.`,
    },
    {
      id: 'engelsk-10-10-def-1',
      type: 'definition',
      title: 'Critical Reading Strategies',
      content: `**Before reading (For lesing):**
- Preview: Look at title, headings, images
- Predict: What will this be about?
- Purpose: Why am I reading this?

**During reading (Under lesing):**
- Question: Who wrote this? Why?
- Connect: How does this relate to what I know?
- Clarify: What don't I understand?
- Evaluate: Is this convincing?

**After reading (Etter lesing):**
- Summarize: What were the main points?
- Analyze: How was the argument built?
- Evaluate: Was it effective? Credible?
- Synthesize: How does this connect to other texts?

**Key questions to ask:**
1. Who is the author and what's their perspective?
2. What is the purpose of this text?
3. What evidence is presented?
4. What is left out or not addressed?
5. How does this compare to other sources?`,
    },
    {
      id: 'engelsk-10-10-def-2',
      type: 'definition',
      title: 'Recognizing Persuasive Techniques',
      content: `**Ethos (Credibility):**
- Expert opinions and credentials
- Trustworthy sources
- "As a doctor with 20 years of experience..."

**Pathos (Emotion):**
- Stories and personal examples
- Emotional language
- Appeals to fear, hope, pride

**Logos (Logic):**
- Statistics and data
- Logical arguments
- Cause and effect reasoning

**Other techniques:**
- Repetition: Emphasizes key points
- Rhetorical questions: Engage reader
- Inclusive language: "we," "us," "our"
- Loaded words: Words with strong connotations
- Testimonials: Endorsements from others
- Bandwagon: Everyone is doing it`,
    },
    {
      id: 'engelsk-10-10-example-1',
      type: 'example',
      title: 'Eksempel: Kritisk analyse av en tekst',
      problem: `Analyser denne teksten kritisk:

"Studies show that our new energy drink improves concentration by up to 50%! Thousands of satisfied customers can't be wrong. Don't be left behind - join the energy revolution today!"`,
      solution: `**Kritisk analyse:**

**Type tekst:** Reklame

**Persuasive techniques used:**

1. **Logos (delvis):** "Studies show" - men HVILKE studier? Hvem gjennomforte dem? Dette er vagt bevis.

2. **Bandwagon:** "Thousands of customers can't be wrong" - bare fordi mange kjoper noe, betyr ikke det at det fungerer.

3. **Fear of missing out (FOMO):** "Don't be left behind" - appellerer til frykt for a ga glipp av noe.

4. **Loaded language:** "energy revolution" - overdrevet sprak for a gjore produktet spennende.

**Hva mangler:**
- Spesifikke detaljer om studiene
- Potensielle bivirkninger
- Sammenligning med alternativer
- Uavhengig testing

**Konklusjon:**
Teksten bruker flere overtalelsesteknikker, men gir lite konkret bevis. En kritisk leser vil kreve mer informasjon for a tro pa pastandene.`,
    },
    {
      id: 'engelsk-10-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser persuasiv teknikk:',
        subTasks: [
          {
            label: 'a',
            task: '"According to Dr. Smith, a leading researcher at Harvard..."',
            solution: 'Ethos - appellerer til troverdighet gjennom ekspertautoritet',
            multipleChoiceOptions: ['Ethos', 'Pathos', 'Logos', 'Bandwagon'],
          },
          {
            label: 'b',
            task: '"Imagine never seeing your children again. That\'s the reality for refugees."',
            solution: 'Pathos - appellerer til folelser',
            multipleChoiceOptions: ['Pathos', 'Ethos', 'Logos', 'Repetition'],
          },
          {
            label: 'c',
            task: '"75% of students who used this method improved their grades."',
            solution: 'Logos - bruker statistikk og data',
            multipleChoiceOptions: ['Logos', 'Pathos', 'Ethos', 'Testimonial'],
          },
        ],
        solution: 'a) Ethos, b) Pathos, c) Logos',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Bruk SPAM-metoden pa en nyhetsartikkel du velger:',
        subTasks: [
          {
            label: 'a',
            task: 'S - Source: Hvem er kilden? Er den troverdig?',
            solution: 'Vurder publikasjon, forfatter, og deres bakgrunn.',
          },
          {
            label: 'b',
            task: 'P - Purpose: Hva er formalet med teksten?',
            solution: 'Informere, overbevise, underholde, selge?',
          },
          {
            label: 'c',
            task: 'A - Audience: Hvem er malgruppen?',
            solution: 'Hvem er teksten skrevet for?',
          },
          {
            label: 'd',
            task: 'M - Message: Hva er hovedbudskapet og hvordan formidles det?',
            solution: 'Identifiser hovedpoeng og virkemidler.',
          },
        ],
        solution: 'SPAM-metoden gir et rammeverk for systematisk tekstanalyse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser et debattinnlegg eller en kronikk. Besvar:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forfatterens hovedpastand?',
            solution: 'Identifiser thesis/hovedargument.',
          },
          {
            label: 'b',
            task: 'Hvilke bevis brukes? Er de overbevisende?',
            solution: 'Vurder kvaliteten pa bevisene.',
          },
          {
            label: 'c',
            task: 'Hva er utelatt eller ikke adressert?',
            solution: 'Identifiser "blindsoner" i argumentasjonen.',
          },
        ],
        hints: ['Se etter bade det som sies og det som IKKE sies'],
        solution: 'Kritisk lesing innebaeerer a vurdere bade styrker og svakheter i en tekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign to tekster om samme tema fra ulike kilder. Analyser:',
        hints: [
          'Hvordan presenteres fakta forskjellig?',
          'Hvilke perspektiver vektlegges?',
          'Hvem siteres?',
          'Hvilken er mest troverdig, og hvorfor?',
        ],
        solution: 'Sammenlignende analyse viser evne til a vurdere multiple kilder kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv din egen kritiske respons (200-250 ord) til en tekst du har lest. Inkluder:',
        hints: [
          'Kort oppsummering av teksten',
          'Analyse av forfatterens formal og metoder',
          'Din vurdering av tekstens styrker og svakheter',
          'Din begrunnede konklusjon',
        ],
        solution: 'En kritisk respons viser evne til a analysere, evaluere og ta stilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'engelsk-10-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'engelsk-10-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Refleksjon: Hvordan vil du bruke kritisk lesing i fremtiden? Gi konkrete eksempler pa situasjoner hvor dette er viktig.',
        hints: ['Nyheter og sosiale medier', 'Skolearbeid og research', 'Hverdagslige valg'],
        solution: 'Kritisk lesing er en livslang ferdighet som gjelder i mange sammenhenger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const ENGELSK_10_CHAPTERS = [
  CHAPTER_ENGELSK_10_1,
  CHAPTER_ENGELSK_10_2,
  CHAPTER_ENGELSK_10_3,
  CHAPTER_ENGELSK_10_4,
  CHAPTER_ENGELSK_10_5,
  CHAPTER_ENGELSK_10_6,
  CHAPTER_ENGELSK_10_7,
  CHAPTER_ENGELSK_10_8,
  CHAPTER_ENGELSK_10_9,
  CHAPTER_ENGELSK_10_10,
];
