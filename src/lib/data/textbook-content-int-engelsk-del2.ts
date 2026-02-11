/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Internasjonal engelsk (VG2/VG3) - Del 2: World Englishes
 * Kapittel 2.1–2.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 2.1: British English
// ============================================================================

export const CHAPTER_INT_ENGELSK_2_1: TextbookChapter = {
  id: 'int-engelsk-2-1',
  courseId: 'int-engelsk',
  chapterNumber: '2.1',
  title: 'British English',
  description: 'Explore Received Pronunciation and regional accents, vocabulary, spelling conventions, and grammar features of British English.',
  estimatedMinutes: 22,
  competenceGoals: [
    'explore and reflect on diversity and variation in the English-speaking world',
    'discuss and reflect on the relationship between language, culture, and identity',
    'analyze linguistic features of different varieties of English',
  ],
  keyTerms: [
    { term: 'Received Pronunciation (RP)', definition: 'The traditionally prestigious accent of British English, associated with educated speakers in southern England and sometimes called "BBC English."' },
    { term: 'Non-rhotic', definition: 'A pronunciation pattern in which the letter "r" is not sounded after vowels, as in "car" pronounced /kɑː/ rather than /kɑːr/.' },
    { term: 'Estuary English', definition: 'A variety of English widely spoken in south-east England, blending features of RP and London speech, named after the Thames Estuary.' },
    { term: 'Dialect', definition: 'A regional or social variety of a language distinguished by vocabulary, grammar, and pronunciation.' },
    { term: 'Register', definition: 'The level of formality in language use, ranging from casual speech to formal writing.' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-2-1-intro',
      type: 'text',
      content: `## British English: The Historical Standard

When people around the world think of "proper" English, they often picture British English — specifically, the accent and vocabulary associated with educated speakers in southern England. But Britain is a remarkably diverse linguistic landscape. Within a relatively small geographical area, you can find dozens of distinct accents and dialects, from Geordie in Newcastle to Cockney in London, from Scouse in Liverpool to Brummie in Birmingham.

**Why Study British English?**
British English holds a special place in the history of the language. It is the original variety from which all other national Englishes descend, and its standard written form still serves as a reference point in many parts of the world, particularly in Europe, Africa, and Asia. Understanding its features helps you recognise variation within English and appreciate how language connects to identity, class, and geography.

**Key Topics in This Chapter:**
- Received Pronunciation (RP) and its declining dominance
- Major regional accents of England, Scotland, Wales, and Northern Ireland
- Vocabulary that distinguishes British English from other varieties
- British spelling conventions
- Grammar features characteristic of British English`,
    },
    // --- DEFINITION 1: RP and Regional Accents ---
    {
      id: 'ie-2-1-def-1',
      type: 'definition',
      title: 'Received Pronunciation (RP) and Regional Accents',
      content: `**Received Pronunciation (RP)** is the accent traditionally associated with the educated upper and upper-middle classes in England. It is sometimes called "BBC English," "the Queen's English," or "Oxford English."

**Key Features of RP:**
- **Non-rhotic:** The /r/ is silent after vowels. "Car" = /kɑː/, "horse" = /hɔːs/
- **Long vowels in BATH words:** "Bath," "dance," and "grass" use the long /ɑː/ vowel
- **Clear distinction between short and long vowels:** "Ship" vs "sheep," "full" vs "fool"
- **T-glottalization is avoided:** The /t/ in "butter" is fully pronounced, not replaced by a glottal stop

**Important:** Only about 3% of the British population actually speaks RP. It is not a regional accent but a social one, historically linked to public schools (private boarding schools), Oxford and Cambridge, and the BBC.

**Major Regional Accents of Britain:**

| Accent | Region | Notable Features |
|--------|--------|-----------------|
| Cockney | East London | H-dropping, glottal stops, th-fronting ("fink" for "think") |
| Estuary English | South-East England | Blend of RP and Cockney, increasingly widespread |
| Scouse | Liverpool | Distinctive intonation, velar nasal ("singer" with a hard /g/) |
| Geordie | Newcastle | Distinct vowel sounds, "gan" for "go," "canny" for "nice" |
| Brummie | Birmingham | Downward intonation, often unfairly rated low in prestige |
| Scottish English | Scotland | Rhotic, distinct vowel system, "loch" with /x/ sound |
| Welsh English | Wales | Lilting intonation, rolling /r/, influence from Welsh language |
| Northern Irish | Northern Ireland | Rhotic, distinct vowel qualities, influence from Irish Gaelic |

**The Decline of RP:**
In recent decades, RP has lost much of its prestige. Younger speakers increasingly favour regional accents, and broadcasters no longer require RP. Estuary English and multicultural London English are growing in influence.`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-2-1-example-1',
      type: 'example',
      title: 'Identifying British Accents',
      problem: 'Listen to a speaker who says: "I was going to the shop to get some water, but it was rather far." How would this sentence sound different in RP compared to a Cockney accent?',
      solution: `**RP version:**
- "I was going to the shop to get some water, but it was rather far."
- Clear pronunciation of all consonants
- "Water" pronounced /ˈwɔːtə/ with a clear /t/
- "Rather" with a long /ɑː/ vowel
- Non-rhotic: no /r/ at the end of "water" or "far"

**Cockney version:**
- "I was goin' to the shop to ge' some wo'er, bu' i' was ravver far."
- Glottal stops replace /t/ in "get," "water," "but," "it"
- Th-fronting: "rather" becomes "ravver"
- H-dropping may occur
- "Going" becomes "goin'" (g-dropping)

**Key Difference:** The main distinction is not about "correctness" but about social and regional identity. Both speakers communicate the same meaning effectively.`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What percentage of the British population actually speaks Received Pronunciation (RP)?',
        options: [
          { id: 'a', text: 'About 3%', isCorrect: true },
          { id: 'b', text: 'About 25%', isCorrect: false },
          { id: 'c', text: 'About 50%', isCorrect: false },
          { id: 'd', text: 'About 75%', isCorrect: false },
        ],
        solution: 'Only about 3% of the British population speaks RP. Despite its prestige and association with "standard" British English, it is a social accent rather than a regional one, historically linked to private education and the upper classes.',
      },
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Match each accent feature with the correct British accent. Write your answers in full sentences.',
        subTasks: [
          { label: 'a', task: 'Th-fronting ("fink" instead of "think")', solution: 'Cockney — th-fronting is a hallmark of traditional Cockney speech from East London.' },
          { label: 'b', task: 'Lilting, musical intonation influenced by a Celtic language', solution: 'Welsh English — the characteristic "sing-song" quality reflects the influence of the Welsh language.' },
          { label: 'c', task: 'Rhotic pronunciation (r is always sounded after vowels)', solution: 'Scottish English — Scotland retains the rhotic /r/ that RP has lost.' },
          { label: 'd', task: 'A blend of RP and London features, increasingly common in south-east England', solution: 'Estuary English — named after the Thames Estuary area, it is spreading as a middle-ground accent.' },
        ],
        hints: ['Think about which regions historically have Celtic language influence', 'Consider which accents are rhotic vs non-rhotic'],
        solution: 'a) Cockney, b) Welsh English, c) Scottish English, d) Estuary English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: Vocabulary and Spelling ---
    {
      id: 'ie-2-1-def-2',
      type: 'definition',
      title: 'British Vocabulary, Spelling, and Grammar',
      content: `**Distinctive British Vocabulary:**
Many everyday words differ between British and American English. Here are some examples that are characteristically British:

| British Term | Meaning | American Equivalent |
|-------------|---------|-------------------|
| Boot (of a car) | Storage compartment at the rear | Trunk |
| Bonnet (of a car) | Engine cover at the front | Hood |
| Nappy | Baby's absorbent garment | Diaper |
| Plaster | Adhesive bandage | Band-Aid |
| Torch | Portable electric light | Flashlight |
| Trainers | Athletic shoes | Sneakers |
| Fortnight | Two weeks | (No single-word equivalent) |
| Queue | A line of people waiting | Line |
| Wardrobe | Freestanding closet for clothes | Closet |
| Rubber | Eraser | Eraser |

**British Spelling Conventions:**
- **-our** endings: colour, favour, honour, neighbour, behaviour
- **-re** endings: centre, theatre, metre, fibre, litre
- **-ise** endings (though -ize is also accepted): organise, realise, recognise
- **-ence** endings: defence, licence (noun), offence
- **Double consonants:** travelled, cancelled, modelling
- **-ogue** endings: dialogue, catalogue, analogue

**Grammar Features of British English:**
- **Collective nouns as plural:** "The team *are* playing well" / "The government *have* decided"
- **Present Perfect for recent events:** "I *have just eaten*" (rather than "I just ate")
- **"Have got" for possession:** "I *have got* a new car" (rather than "I have a new car")
- **"Shall" for first person:** "Shall *I* open the window?" (more common than in AmE)
- **Prepositions:** "at the weekend," "in hospital," "write *to* me," "different *from*"
- **Tag questions are common:** "It's cold, isn't it?" "You're coming, aren't you?"`,
    },
    // --- EXERCISE 3 ---
    {
      id: 'ie-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-2-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following sentences uses characteristically British grammar?',
        options: [
          { id: 'a', text: 'The government have announced their new policy.', isCorrect: true },
          { id: 'b', text: 'The government has announced its new policy.', isCorrect: false },
          { id: 'c', text: 'I just ate lunch five minutes ago.', isCorrect: false },
          { id: 'd', text: 'I have a new car in the garage.', isCorrect: false },
        ],
        solution: 'In British English, collective nouns like "government," "team," and "committee" are often treated as plural, taking plural verbs and pronouns ("have ... their"). American English typically treats them as singular ("has ... its").',
      },
    },
    // --- EXERCISE 4 ---
    {
      id: 'ie-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Rewrite the following American English sentences using British English spelling and vocabulary. Explain each change you make.',
        subTasks: [
          { label: 'a', task: '"I put my sneakers in the trunk of the car and drove to the theater."', solution: '"I put my trainers in the boot of the car and drove to the theatre." Changes: sneakers → trainers, trunk → boot, theater → theatre.' },
          { label: 'b', task: '"The color of the apartment was gray, and the neighbor had a license to practice law."', solution: '"The colour of the flat was grey, and the neighbour had a licence to practise law." Changes: color → colour, apartment → flat, gray → grey, neighbor → neighbour, license → licence (noun), practice → practise (verb).' },
        ],
        hints: ['Pay attention to both vocabulary and spelling differences', 'Remember that some words like "licence/license" change form depending on whether they are nouns or verbs in British English'],
        solution: 'British English differs from American English in both vocabulary choices and spelling conventions. Key patterns include -our endings, -re endings, and different everyday words for common objects.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-2-1-summary',
      type: 'text',
      content: `## Summary

British English is far more diverse than the "BBC accent" many people imagine. While Received Pronunciation has long served as the prestige standard, it is spoken by only a small minority. Regional accents such as Cockney, Scouse, Geordie, Scottish, and Welsh English each carry their own identity and history. British English is also distinguished by particular vocabulary items (boot, bonnet, fortnight, queue), spelling conventions (-our, -re, -ise), and grammar patterns (collective nouns as plural, present perfect for recent events, tag questions). Understanding these features is essential for anyone who wants to engage confidently with the full range of English as used in Britain.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Write a short text (150–200 words) discussing whether RP should still be considered the "standard" accent of British English. Consider the following points in your answer:',
        subTasks: [
          { label: 'a', task: 'What arguments support RP as a standard?', solution: 'RP is widely understood, has a long history as the prestige accent, is well-documented, and is often used in English-language teaching materials worldwide.' },
          { label: 'b', task: 'What arguments challenge RP as a standard?', solution: 'Only 3% speak it, it is linked to class privilege, younger generations prefer regional accents, broadcasters no longer require it, and it may not represent modern British identity.' },
          { label: 'c', task: 'What is your own view?', solution: 'A well-reasoned personal opinion supported by evidence from the chapter.' },
        ],
        hints: ['Consider the relationship between accent and social class', 'Think about how attitudes toward accents have changed over time'],
        solution: 'A strong answer will present arguments on both sides and reach a reasoned conclusion, recognising that "standard" is a social construct rather than a linguistic one.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-2-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following is a characteristic feature of Estuary English?',
        options: [
          { id: 'a', text: 'It blends features of RP and London (Cockney) speech and is spreading across south-east England', isCorrect: true },
          { id: 'b', text: 'It is a Celtic-influenced accent spoken primarily in Wales', isCorrect: false },
          { id: 'c', text: 'It is the traditional accent of Newcastle upon Tyne', isCorrect: false },
          { id: 'd', text: 'It is identical to Received Pronunciation but with American vocabulary', isCorrect: false },
        ],
        solution: 'Estuary English is a variety that sits between RP and Cockney, incorporating features from both. Named after the Thames Estuary, it has been spreading across south-east England and is increasingly seen as a socially neutral middle-ground accent.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2.2: American English
// ============================================================================

export const CHAPTER_INT_ENGELSK_2_2: TextbookChapter = {
  id: 'int-engelsk-2-2',
  courseId: 'int-engelsk',
  chapterNumber: '2.2',
  title: 'American English',
  description: 'Examine General American, regional dialects, vocabulary and spelling differences from British English, and the global influence of American English.',
  estimatedMinutes: 23,
  competenceGoals: [
    'explore and reflect on diversity and variation in the English-speaking world',
    'discuss and reflect on the relationship between language, culture, and identity',
    'analyze the role of English in global communication',
  ],
  keyTerms: [
    { term: 'General American (GA)', definition: 'The most widely recognised American English accent, lacking strongly regional features, often associated with broadcast media and the Midwest.' },
    { term: 'Rhotic', definition: 'A pronunciation pattern in which the /r/ is sounded in all positions, including after vowels, as in "car" pronounced /kɑːr/.' },
    { term: 'T-flapping', definition: 'A phonological process in American English where /t/ between vowels is pronounced as a quick flap, making "writer" and "rider" sound nearly identical.' },
    { term: 'African American Vernacular English (AAVE)', definition: 'A systematic variety of English with its own grammatical rules, spoken by many African Americans, also known as Black English or Ebonics.' },
    { term: 'Cot-caught merger', definition: 'A sound change in many American dialects where the vowels in "cot" and "caught" are pronounced the same way.' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-2-2-intro',
      type: 'text',
      content: `## American English: The World's Most Influential Variety

American English is the variety of English most people encounter globally. Through Hollywood films, streaming platforms, social media, popular music, and technology, American English has become the dominant influence on how the language is evolving worldwide. For Norwegian students, American English is often the first variety you are exposed to, and many of you already speak with American-influenced pronunciation and vocabulary without even thinking about it.

**Why American English Dominates:**
- **Population:** Over 330 million native speakers in the United States alone
- **Media:** Hollywood, Netflix, YouTube, TikTok, and the global music industry
- **Technology:** Silicon Valley has shaped the language of the internet (website, email, app, blog)
- **Economy:** The US dollar and American business culture shape international commerce
- **Education:** American universities attract students and scholars from around the world

**But America Is Not Linguistically Uniform:**
Just like Britain, the United States contains enormous linguistic diversity. A speaker from Boston sounds very different from one in Atlanta, and both differ from speakers in California, Minnesota, or New York City.`,
    },
    // --- DEFINITION 1: General American and Regional Dialects ---
    {
      id: 'ie-2-2-def-1',
      type: 'definition',
      title: 'General American and Regional Dialects',
      content: `**General American (GA)** is the accent perceived as "neutral" or "standard" in the United States. It is the variety typically used by national news broadcasters and is the most commonly taught American accent in English-language courses.

**Key Features of GA:**
- **Rhotic:** The /r/ is pronounced in all positions: "car" = /kɑːr/, "better" = /ˈbɛtər/
- **T-flapping:** The /t/ between vowels becomes a voiced flap /ɾ/, so "butter" sounds like "budder" and "water" sounds like "wadder"
- **Flat /æ/ in BATH words:** "Bath," "dance," and "grass" use the short /æ/ vowel
- **Cot-caught merger:** In many areas, "cot" and "caught" sound identical
- **Dark /l/:** The /l/ in "full" and "milk" has a "dark" quality

**Major Regional Dialects:**

**1. Southern American English:**
- "Y'all" as second person plural
- Monophthongization of /aɪ/: "ride" sounds like "rahd"
- "Fixin' to" meaning "about to"
- Often stereotyped but highly systematic

**2. New England / Boston English:**
- Non-rhotic in some speakers: "Park the car" → "Pahk the cah"
- Distinctive /ɑ/ vowel: "Boston" with a broad "ah"
- Increasingly influenced by GA among younger speakers

**3. New York City English:**
- Historically non-rhotic, now shifting
- "Coffee" with a rounded /ɔː/ vowel
- Th-stopping: "this" → "dis" in some speakers

**4. Midwestern English:**
- Often considered closest to GA
- "Northern Cities Vowel Shift" in areas near the Great Lakes
- "Pop" instead of "soda"

**5. African American Vernacular English (AAVE):**
- Systematic grammar, not "broken English"
- Habitual "be": "He be working" (he works regularly)
- Copula deletion: "She nice" (she is nice)
- Remote past "been": "I been knew that" (I've known that for a long time)
- Massive influence on global popular culture, slang, and music`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-2-2-example-1',
      type: 'example',
      title: 'American vs British Vocabulary in Context',
      problem: 'Translate the following British English paragraph into American English, changing all relevant vocabulary and spelling.',
      solution: `**British version:**
"I took the lift to the first floor, walked past the car park, and queued at the chemist's for my prescription. On the way home, I put petrol in the car, opened the bonnet to check the oil, and stopped for biscuits and crisps at the shop."

**American version:**
"I took the elevator to the second floor, walked past the parking lot, and stood in line at the drugstore for my prescription. On the way home, I put gas in the car, opened the hood to check the oil, and stopped for cookies and chips at the store."

**Changes explained:**
- lift → elevator
- first floor → second floor (British "ground floor" = American "first floor")
- car park → parking lot
- queued → stood in line
- chemist's → drugstore
- petrol → gas
- bonnet → hood
- biscuits → cookies
- crisps → chips
- shop → store`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Which of the following is a key feature of General American pronunciation?',
        options: [
          { id: 'a', text: 'It is rhotic — the /r/ is pronounced in all positions, including after vowels', isCorrect: true },
          { id: 'b', text: 'It is non-rhotic — the /r/ is silent after vowels', isCorrect: false },
          { id: 'c', text: 'It uses a long /ɑː/ vowel in words like "bath" and "dance"', isCorrect: false },
          { id: 'd', text: 'It avoids t-flapping in all contexts', isCorrect: false },
        ],
        solution: 'General American is rhotic, meaning the /r/ is pronounced wherever it appears in spelling. This is one of the clearest differences between GA and British RP, which is non-rhotic.',
      },
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain the following features of African American Vernacular English (AAVE) and provide an example of each. Why is it important to understand that AAVE is a systematic variety rather than "incorrect" English?',
        subTasks: [
          { label: 'a', task: 'Habitual "be"', solution: '"He be working" means he works regularly or habitually. This is not random — it expresses a specific grammatical meaning (habitual aspect) that Standard American English can only convey with additional words.' },
          { label: 'b', task: 'Copula deletion', solution: '"She nice" (she is nice). The verb "to be" is deleted in certain syntactic positions, following specific rules — it cannot be deleted everywhere, which proves it is rule-governed.' },
          { label: 'c', task: 'Remote past "been"', solution: '"I been knew that" means "I have known that for a long time." The stressed "been" indicates something that has been true for a long time, a meaning that Standard English expresses less efficiently.' },
        ],
        hints: ['Remember that all natural languages and dialects follow systematic rules', 'AAVE has been extensively studied by linguists and found to be as rule-governed as any other variety'],
        solution: 'AAVE is a fully systematic variety with its own grammatical rules. Treating it as "broken English" reflects social prejudice, not linguistic reality. AAVE has features that are more expressive than Standard English in certain areas, such as the habitual "be" and remote past "been."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: Spelling Differences ---
    {
      id: 'ie-2-2-def-2',
      type: 'definition',
      title: 'American Spelling and Its Origins',
      content: `**Why Does American Spelling Differ from British?**

Much of the credit — or blame — goes to **Noah Webster** (1758–1843), the American lexicographer who published *An American Dictionary of the English Language* in 1828. Webster deliberately simplified spellings to make English more phonetic and to distinguish American English from British English as a matter of national identity.

**Webster's Major Changes:**

| British Spelling | American Spelling | Webster's Reasoning |
|-----------------|------------------|-------------------|
| colour | color | The "u" is unnecessary and not pronounced |
| centre | center | The -er spelling better reflects pronunciation |
| defence | defense | The "s" sound should be spelled with "s" |
| travelled | traveled | Single consonant is simpler |
| catalogue | catalog | The -ue ending is unnecessary |
| programme | program | Simplified spelling |
| grey | gray | "A" better represents the vowel sound |
| cheque | check | Simplified to match pronunciation |
| draught | draft | Spelling should match pronunciation |
| plough | plow | Same principle |

**Important Note:**
These differences are matters of convention, not correctness. Both systems are internally consistent. However, you should try to be consistent within a single text — do not mix British and American spellings in the same essay or document.`,
    },
    // --- EXERCISE 3 ---
    {
      id: 'ie-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-2-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Who was primarily responsible for the systematic spelling differences between American and British English?',
        options: [
          { id: 'a', text: 'Noah Webster, who published An American Dictionary of the English Language in 1828', isCorrect: true },
          { id: 'b', text: 'William Shakespeare, who standardised English spelling in his plays', isCorrect: false },
          { id: 'c', text: 'Benjamin Franklin, who proposed a completely new alphabet for America', isCorrect: false },
          { id: 'd', text: 'Samuel Johnson, who wrote the first major English dictionary in 1755', isCorrect: false },
        ],
        solution: 'Noah Webster deliberately simplified and altered English spelling in his 1828 dictionary to create a distinctly American standard. His changes (color, center, defense, etc.) were partly linguistic and partly nationalistic, aimed at establishing American cultural independence from Britain.',
      },
    },
    // --- EXERCISE 4 ---
    {
      id: 'ie-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Reflect on your own use of English. Write a short text (100–150 words) addressing the following:',
        subTasks: [
          { label: 'a', task: 'Do you tend to use more American or British English? Give specific examples of vocabulary, spelling, or pronunciation.', solution: 'Norwegian students typically use American English due to exposure to American media. Examples might include "movie" instead of "film," American pronunciation of /r/, or spelling words like "color" rather than "colour."' },
          { label: 'b', task: 'Why do you think Norwegian students are more influenced by American English than British English?', solution: 'Reasons include the dominance of American media (Netflix, YouTube, TikTok), American music, video games, and social media platforms. British media exposure tends to be more limited.' },
        ],
        hints: ['Think about which films, TV shows, and music you consume', 'Consider how social media and gaming might influence your English'],
        solution: 'Most Norwegian students are heavily influenced by American English through media consumption. Being aware of this influence helps you make conscious choices about which variety to use in different contexts.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-2-2-summary',
      type: 'text',
      content: `## Summary

American English is the most globally influential variety of English today, primarily due to American dominance in media, technology, and business. General American serves as the "standard" accent for broadcasting and language teaching, but the United States contains enormous dialectal diversity — from Southern English and Boston English to New York City English and African American Vernacular English. American English differs from British English in pronunciation (rhotic vs non-rhotic, t-flapping, BATH vowel), vocabulary (elevator, sidewalk, truck), and spelling (color, center, defense), with many of the spelling differences traceable to Noah Webster's deliberate reforms. Understanding American English and its variations is essential for navigating the English-speaking world.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research and describe ONE American regional dialect in detail (200–250 words). Choose from: Southern American English, Boston English, New York City English, or Midwestern English. Your description should cover:',
        subTasks: [
          { label: 'a', task: 'Geographical area where it is spoken', solution: 'Accurate identification of the dialect region and its boundaries.' },
          { label: 'b', task: 'At least three distinctive pronunciation features', solution: 'Specific phonological features accurately described with examples.' },
          { label: 'c', task: 'Any distinctive vocabulary or expressions', solution: 'Regional vocabulary items with explanations.' },
          { label: 'd', task: 'Social attitudes toward this dialect (is it prestigious? stigmatised? neutral?)', solution: 'Discussion of stereotypes, media portrayals, and linguistic attitudes toward the variety.' },
        ],
        hints: ['Be respectful — describing a dialect is not the same as mocking it', 'All dialects are linguistically equal, even if social attitudes differ'],
        solution: 'A good description demonstrates understanding that regional dialects are systematic varieties with their own rules, not "corruptions" of a standard language.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-2-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What does the term "t-flapping" refer to in American English?',
        options: [
          { id: 'a', text: 'The /t/ between vowels is pronounced as a quick voiced flap, making "butter" sound like "budder"', isCorrect: true },
          { id: 'b', text: 'The /t/ at the end of words is always silent', isCorrect: false },
          { id: 'c', text: 'The /t/ is replaced by a glottal stop in all positions', isCorrect: false },
          { id: 'd', text: 'The /t/ is always pronounced very strongly and aspirated', isCorrect: false },
        ],
        solution: 'T-flapping is a common feature of American (and Australian) English where the /t/ or /d/ between vowels is pronounced as a quick voiced alveolar flap [ɾ]. This makes pairs like "writer/rider" and "latter/ladder" sound nearly identical in casual speech.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2.3: Varieties in the Outer Circle
// ============================================================================

export const CHAPTER_INT_ENGELSK_2_3: TextbookChapter = {
  id: 'int-engelsk-2-3',
  courseId: 'int-engelsk',
  chapterNumber: '2.3',
  title: 'Varieties in the Outer Circle',
  description: 'Discover how English has developed unique characteristics in India, Nigeria, Singapore, and South Africa through contact with local languages and cultures.',
  estimatedMinutes: 25,
  competenceGoals: [
    'explore and reflect on diversity and variation in the English-speaking world',
    'discuss and reflect on the relationship between language, culture, and identity',
    'analyze how English is used differently in different cultural and geographical contexts',
  ],
  keyTerms: [
    { term: 'Outer Circle', definition: 'Countries where English has official or special status due to colonial history, and where distinctive local varieties have developed (e.g., India, Nigeria, Singapore, South Africa).' },
    { term: 'Code-switching', definition: 'The practice of alternating between two or more languages or language varieties within a single conversation or even a single sentence.' },
    { term: 'Substrate influence', definition: 'The effect of a speaker\'s first language on their use of a second language, shaping pronunciation, grammar, and vocabulary.' },
    { term: 'Nativization', definition: 'The process by which a language is adapted and transformed by speakers in a new context, developing local features and becoming a distinct variety.' },
    { term: 'Singlish', definition: 'A creole-influenced variety of English spoken in Singapore, incorporating elements from Malay, Mandarin, Tamil, and Hokkien.' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-2-3-intro',
      type: 'text',
      content: `## English Beyond the Inner Circle

Some of the most vibrant and creative varieties of English are found in the Outer Circle — countries where English was introduced through British colonialism and has since been adopted, adapted, and transformed by local populations. In these countries, English serves as an official language, a language of education and government, and often as a lingua franca among speakers of different local languages.

What makes Outer Circle varieties fascinating is that they are not simply "British English with mistakes." They are fully developed, rule-governed varieties that have been shaped by contact with local languages, local cultures, and local communicative needs. They have their own vocabulary, their own grammatical patterns, and their own norms of appropriateness.

**Countries we will explore:**
1. **India** — the largest English-speaking population outside the Inner Circle
2. **Nigeria** — the most populous African country, with English as its official language
3. **Singapore** — a multilingual city-state where English plays a central role
4. **South Africa** — a country with 11 official languages, including English

**Key Question:** Should these varieties be measured against British or American "standards," or should they be recognised as legitimate Englishes in their own right?`,
    },
    // --- DEFINITION 1: Indian and Nigerian English ---
    {
      id: 'ie-2-3-def-1',
      type: 'definition',
      title: 'Indian English and Nigerian English',
      content: `**Indian English:**

India has the second-largest English-speaking population in the world, with over 125 million speakers. English is one of two official languages (alongside Hindi) and serves as a link language among India's 22 scheduled languages and hundreds of other languages.

**Pronunciation Features:**
- Retroflex consonants: /t/ and /d/ are pronounced with the tongue curled back
- No distinction between /v/ and /w/ in many speakers
- Syllable-timed rhythm (equal stress on syllables) rather than stress-timed
- /θ/ and /ð/ often replaced by dental stops: "think" → "tink," "this" → "dis"

**Grammar Features:**
- Progressive tense with stative verbs: "I am knowing the answer"
- Tag questions with "isn't it" or "no?": "You are coming, isn't it?"
- "Itself" as an emphatic marker: "Today itself we will finish"
- Omission of articles: "Let's go to market"
- "Would" instead of "will" for polite requests: "I would like to be knowing..."

**Vocabulary (words unique to Indian English):**
- **Prepone** (opposite of postpone): "Let's prepone the meeting to Monday"
- **Lakh** (100,000): "He earns five lakh rupees"
- **Crore** (10 million): "The project costs two crore"
- **Dicky** (car boot/trunk)
- **Timepass** (something done to pass the time)

---

**Nigerian English:**

Nigeria is Africa's most populous country, with over 200 million people speaking more than 500 languages. English is the official language and the primary language of education, government, media, and inter-ethnic communication.

**Pronunciation Features:**
- Syllable-timed rhythm
- /θ/ and /ð/ typically replaced by /t/ and /d/
- Vowel system is often simplified compared to RP
- Stress patterns may differ from RP or GA

**Grammar Features:**
- "To flash" (to call and hang up so the other person calls back)
- Reduplication for emphasis: "small-small" (very small), "quick-quick" (very quickly)
- "Hear" for "understand": "Do you hear?" (Do you understand?)
- Different preposition use: "I am going to market" (to the market)

**Vocabulary (words unique to Nigerian English):**
- **Oga** (boss, sir)
- **Chop** (to eat)
- **Wahala** (trouble, problems) — from Hausa
- **Dash** (a bribe or gift)
- **Area boy** (a street youth)`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-2-3-example-1',
      type: 'example',
      title: 'Recognising Outer Circle Features in Context',
      problem: 'Read the following text and identify which Outer Circle variety it represents and what features give it away:\n\n"Kindly do the needful and revert back at the earliest. We have preponed the meeting to 3 PM itself. Please intimate your colleagues also."',
      solution: `**Variety:** Indian English

**Features identified:**
1. **"Do the needful"** — A characteristically Indian English phrase meaning "do what is necessary." It uses an archaic British English structure preserved in India.
2. **"Revert back"** — In Indian English, "revert" means "to reply" (in standard British/American English it means "to return to a previous state"). "Back" is redundant but common.
3. **"At the earliest"** — Meaning "as soon as possible," a formal expression common in Indian business English.
4. **"Preponed"** — A uniquely Indian English word meaning the opposite of "postponed." It does not exist in British or American English but follows logical English word-formation rules.
5. **"Itself"** — Used as an emphatic marker ("3 PM itself" = "at 3 PM precisely/exactly").
6. **"Intimate"** — Used to mean "inform" or "notify," retaining an older English meaning.

**Key Insight:** These features are not errors — they are established conventions of Indian English used routinely in business, government, and education across India.`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'The word "prepone" (meaning the opposite of "postpone") is characteristic of which variety of English?',
        options: [
          { id: 'a', text: 'Indian English', isCorrect: true },
          { id: 'b', text: 'Nigerian English', isCorrect: false },
          { id: 'c', text: 'Singaporean English', isCorrect: false },
          { id: 'd', text: 'South African English', isCorrect: false },
        ],
        solution: '"Prepone" is a uniquely Indian English word formed by analogy with "postpone" (pre- instead of post-). It is used widely in Indian business and everyday communication and has been included in some dictionaries as Indian English vocabulary.',
      },
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare Indian English and Nigerian English by completing the following tasks:',
        subTasks: [
          { label: 'a', task: 'Name one pronunciation feature they have in common.', solution: 'Both tend to replace /θ/ and /ð/ (the "th" sounds) with /t/ and /d/. Both also use syllable-timed rhythm rather than stress-timed rhythm.' },
          { label: 'b', task: 'Give one example of a vocabulary item unique to each variety.', solution: 'Indian English: "prepone" (opposite of postpone). Nigerian English: "wahala" (trouble/problems, from Hausa).' },
          { label: 'c', task: 'Explain why these varieties developed their distinctive features.', solution: 'Both varieties developed through contact between English and local languages. Pronunciation is influenced by the phonological systems of speakers\' first languages (substrate influence). Vocabulary borrows from local languages to express concepts relevant to the local culture. Grammar is shaped by the structures of local languages.' },
        ],
        hints: ['Think about the concept of "substrate influence"', 'Consider the role of colonialism in bringing English to both countries'],
        solution: 'Both Indian and Nigerian English developed through the contact between English and diverse local languages during and after British colonial rule. Their distinctive features are the result of nativization — the natural process by which speakers adapt a language to their own communicative needs.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: Singaporean and South African English ---
    {
      id: 'ie-2-3-def-2',
      type: 'definition',
      title: 'Singaporean English (Singlish) and South African English',
      content: `**Singaporean English and Singlish:**

Singapore is a multilingual city-state where English is the medium of education and government. Singaporeans typically speak a formal variety of English (Standard Singapore English) in official contexts and Singlish in informal settings.

**Singlish Features:**
- **Discourse particles from Chinese and Malay:**
  - "lah" (emphasis): "Don't worry lah" (Don't worry, relax)
  - "leh" (suggestion): "Try this one leh" (Why not try this one?)
  - "lor" (resignation): "Cannot help lor" (Nothing can be done about it)
  - "meh" (disbelief): "Really meh?" (Is that really true?)

- **Grammar features:**
  - Topic-prominence: "This one, I don't like" (I don't like this one)
  - "Can" as a complete answer: "Can you help?" — "Can!"
  - "Already" for completed action: "I eat already" (I have already eaten)
  - Omission of subjects: "No need" (You don't need to / There's no need)

- **Vocabulary:**
  - "Kiasu" (afraid of losing out) — from Hokkien
  - "Makan" (food/to eat) — from Malay
  - "Paiseh" (embarrassed/shy) — from Hokkien
  - "Blur" (confused or slow to understand)

**The Singlish Debate:** The Singapore government has promoted "Speak Good English" campaigns, arguing that Singlish hinders international communication. Others argue that Singlish is a vital marker of Singaporean identity.

---

**South African English:**

South Africa has 11 official languages, and English — while the home language of only about 10% of the population — functions as the primary language of business, media, and government.

**Pronunciation Features:**
- Variable rhoticity (some speakers are rhotic, others are not)
- KIT vowel raised toward /ɪ/ or centralised
- Influenced by Afrikaans, Zulu, Xhosa, and other languages

**Vocabulary (from Afrikaans and African languages):**
- **Braai** (barbecue) — from Afrikaans
- **Robot** (traffic light) — South African usage
- **Bakkie** (pickup truck) — from Afrikaans
- **Ubuntu** (human interconnectedness) — from Zulu/Xhosa
- **Eish!** (exclamation of surprise) — from Zulu/Xhosa
- **Now now** (soon, in a little while)
- **Just now** (sometime later, not immediately)
- **Lekker** (nice, great) — from Afrikaans`,
    },
    // --- EXERCISE 3 ---
    {
      id: 'ie-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-2-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'In Singlish, what is the function of the particle "lah"?',
        options: [
          { id: 'a', text: 'It adds emphasis or conveys a casual, reassuring tone', isCorrect: true },
          { id: 'b', text: 'It marks a question', isCorrect: false },
          { id: 'c', text: 'It indicates past tense', isCorrect: false },
          { id: 'd', text: 'It signals that the speaker is angry', isCorrect: false },
        ],
        solution: '"Lah" is a discourse particle borrowed from Malay and Chinese languages. It adds emphasis, conveys a casual tone, or reassures the listener. "Don\'t worry lah" means "Don\'t worry — it\'ll be fine." It is one of the most recognisable features of Singlish.',
      },
    },
    // --- EXERCISE 4 ---
    {
      id: 'ie-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'South African English has borrowed extensively from Afrikaans and African languages. Explain what the following words mean and from which language they originate:',
        subTasks: [
          { label: 'a', task: 'Braai', solution: '"Braai" means a barbecue or outdoor grill — both the event and the cooking method. It comes from Afrikaans and is central to South African social life.' },
          { label: 'b', task: 'Ubuntu', solution: '"Ubuntu" is a Zulu/Xhosa concept meaning human interconnectedness, shared humanity, or the idea that "I am because we are." It has gained international recognition through figures like Desmond Tutu and Nelson Mandela.' },
          { label: 'c', task: 'Robot (in South African English)', solution: 'In South African English, "robot" means a traffic light. This usage is unique to South Africa and can cause confusion for visitors.' },
        ],
        hints: ['Think about how borrowed words often reflect cultural practices that are important in the lending culture', 'Ubuntu has become an internationally recognised concept — consider why'],
        solution: 'South African English vocabulary reflects the country\'s multilingual heritage. Afrikaans contributes words related to outdoor life and daily activities, while African languages contribute concepts related to community and social values.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-2-3-summary',
      type: 'text',
      content: `## Summary

The Outer Circle varieties of English — including Indian English, Nigerian English, Singaporean English (Singlish), and South African English — demonstrate how English adapts and evolves when it takes root in new linguistic and cultural environments. These varieties are not "imperfect" versions of British or American English. They are legitimate, rule-governed language systems shaped by contact with local languages (substrate influence), local cultural needs, and the process of nativization. Each variety has developed its own distinctive pronunciation, grammar, and vocabulary that serve the communicative needs of its speakers. Recognising the legitimacy of these varieties is fundamental to understanding English as a truly global language.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-2-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Choose one Outer Circle variety (Indian, Nigerian, Singaporean, or South African English) and write a short essay (200–300 words) discussing whether it should be considered "correct" English. Address the following:',
        subTasks: [
          { label: 'a', task: 'What makes this variety distinctive?', solution: 'Description of key pronunciation, grammar, and vocabulary features.' },
          { label: 'b', task: 'Should it be accepted in formal contexts (education, business, government)?', solution: 'Discussion of the tension between local norms and international standards.' },
          { label: 'c', task: 'What are the advantages and disadvantages of promoting a local standard?', solution: 'Advantages: identity, inclusiveness, practical communication. Disadvantages: potential barriers to international communication.' },
        ],
        hints: ['There is no single "right" answer — the important thing is to argue your position clearly', 'Consider the difference between correctness and appropriateness'],
        solution: 'A strong essay will recognise that "correctness" in language is socially constructed and that Outer Circle varieties serve their speakers effectively in local contexts while acknowledging the practical value of international intelligibility.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-2-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What does the concept of "nativization" mean in the context of World Englishes?',
        options: [
          { id: 'a', text: 'The process by which English is adapted and transformed by speakers in a new context, developing local features and becoming a distinct variety', isCorrect: true },
          { id: 'b', text: 'The process of teaching native-speaker pronunciation to foreign learners', isCorrect: false },
          { id: 'c', text: 'The decline of English in countries where it was once the official language', isCorrect: false },
          { id: 'd', text: 'The process of replacing local languages with English', isCorrect: false },
        ],
        solution: 'Nativization describes how English is adapted by speakers in new environments, developing local features in pronunciation, grammar, and vocabulary that reflect contact with local languages and cultures. The result is a new, legitimate variety of English rather than a deficient version of British or American English.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2.4: Pronunciation and Accent
// ============================================================================

export const CHAPTER_INT_ENGELSK_2_4: TextbookChapter = {
  id: 'int-engelsk-2-4',
  courseId: 'int-engelsk',
  chapterNumber: '2.4',
  title: 'Pronunciation and Accent',
  description: 'Understand phonetics basics, the distinction between accent and dialect, prestige accents, and the issue of accent discrimination.',
  estimatedMinutes: 20,
  competenceGoals: [
    'explore and reflect on diversity and variation in the English-speaking world',
    'discuss and reflect on the relationship between language, culture, and identity',
    'reflect critically on the role of language in power structures and social hierarchies',
  ],
  keyTerms: [
    { term: 'Accent', definition: 'The way a speaker pronounces words, shaped by regional origin, social background, and first language. An accent involves only pronunciation.' },
    { term: 'Dialect', definition: 'A variety of language that differs from other varieties in pronunciation, vocabulary, and grammar. A dialect is broader than an accent.' },
    { term: 'Phoneme', definition: 'The smallest unit of sound that distinguishes meaning in a language. For example, /p/ and /b/ are different phonemes because "pat" and "bat" have different meanings.' },
    { term: 'Prestige accent', definition: 'An accent that is socially valued and associated with education, wealth, or authority. Examples include RP in Britain and General American in the US.' },
    { term: 'Accent discrimination', definition: 'Prejudice or unequal treatment based on how a person speaks, sometimes called "accentism" or "linguistic profiling."' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-2-4-intro',
      type: 'text',
      content: `## How We Sound: The Power of Pronunciation

Every person who speaks English has an accent. There is no "accent-free" English — even the most "neutral" speakers of General American or RP have an accent that can be identified and analysed. Your accent reveals where you are from, what languages you speak, and often what social group you belong to. It is one of the most immediate markers of identity.

But accents are not just neutral facts about how we speak. They carry social weight. Some accents are considered "educated" or "professional," while others are stigmatised or mocked. Understanding how pronunciation works — and how society responds to different accents — is essential for anyone studying English as a global language.

**In This Chapter, You Will Learn:**
- The basics of phonetics: how English sounds are produced
- The difference between accent and dialect
- Why some accents are considered more "prestigious" than others
- How accent discrimination works and why it matters
- How your own accent as a Norwegian English speaker fits into the global picture`,
    },
    // --- DEFINITION 1: Phonetics Basics ---
    {
      id: 'ie-2-4-def-1',
      type: 'definition',
      title: 'Phonetics Basics: How English Sounds Work',
      content: `**Phonetics** is the study of the physical sounds of human speech. Understanding basic phonetics helps you analyse accents, improve your own pronunciation, and appreciate why different varieties of English sound the way they do.

**Vowels:**
Vowels are produced with an open vocal tract. English has far more vowel sounds than most languages, which is why English spelling is so irregular — the five vowel letters represent approximately 20 different vowel sounds.

**Key English Vowel Distinctions:**
- **Short vs Long:** "Ship" /ɪ/ vs "Sheep" /iː/
- **Monophthongs vs Diphthongs:** "Go" /gəʊ/ contains a diphthong (the vowel glides from one position to another)
- **The schwa /ə/:** The most common vowel sound in English, found in unstressed syllables: "about," "the," "banana"

**Consonants:**
Consonants are produced by partially or fully obstructing airflow. English has some sounds that are rare in other languages:
- **/θ/ and /ð/** (the "th" sounds): Rare globally, often replaced by /t/, /d/, /s/, or /f/ in various accents
- **/r/:** Pronounced very differently across accents (retroflex in American, approximant in RP, tapped in Scottish)
- **/ŋ/** (the "ng" sound): As in "singer" — some accents add a /g/ after it

**Stress and Rhythm:**
- English is a **stress-timed** language: stressed syllables occur at roughly regular intervals, and unstressed syllables are compressed
- Many other languages (French, Spanish, Hindi) are **syllable-timed**: each syllable takes roughly the same amount of time
- This difference in rhythm is one of the most noticeable features of a non-native accent

**Intonation:**
- **Rising intonation** at the end of a sentence typically signals a question
- **Falling intonation** signals a statement
- **High Rising Terminal (HRT)** or "uptalk" (rising intonation on statements) is spreading globally, often associated with Australian and Californian English`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-2-4-example-1',
      type: 'example',
      title: 'The Same Word, Different Accents',
      problem: 'How would the word "water" be pronounced differently in five major English accents?',
      solution: `**The word "water" across accents:**

1. **RP (Received Pronunciation):** /ˈwɔːtə/
   - Non-rhotic (no final /r/)
   - Clear /t/ in the middle
   - Open back rounded vowel /ɔː/

2. **General American:** /ˈwɑːɾɚ/
   - Rhotic (final /r/ is pronounced)
   - T-flapping: the /t/ becomes a flap /ɾ/ (sounds like a quick "d")
   - Unrounded vowel /ɑː/

3. **Cockney (London):** /ˈwoʔə/
   - Glottal stop replaces /t/
   - Non-rhotic
   - Diphthong may differ from RP

4. **Indian English:** /ˈʋɔːʈər/
   - Retroflex /ʈ/ (tongue curled back)
   - Typically rhotic
   - /w/ may be produced as /ʋ/

5. **Australian English:** /ˈwoːɾə/
   - Non-rhotic
   - T-flapping (like American)
   - Distinctive vowel quality

**Key Insight:** All five pronunciations communicate the same meaning. The differences are systematic, predictable, and reflect the speaker's linguistic background — not their intelligence or education.`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-2-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the difference between an accent and a dialect?',
        options: [
          { id: 'a', text: 'An accent involves only pronunciation, while a dialect also includes differences in vocabulary and grammar', isCorrect: true },
          { id: 'b', text: 'A dialect is a "correct" form of language, while an accent is "incorrect"', isCorrect: false },
          { id: 'c', text: 'An accent is used in formal settings, while a dialect is only used informally', isCorrect: false },
          { id: 'd', text: 'There is no meaningful difference — the terms are interchangeable', isCorrect: false },
        ],
        solution: 'An accent refers specifically to pronunciation — how sounds are produced. A dialect is a broader concept that encompasses pronunciation (accent), vocabulary, and grammar. For example, Cockney is a dialect (with distinct vocabulary like "apples and pears" for "stairs" and grammar features) as well as an accent.',
      },
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain the following phonetic concepts in your own words and give an example of each:',
        subTasks: [
          { label: 'a', task: 'What is the schwa /ə/ and why is it the most common English vowel sound?', solution: 'The schwa is a neutral, unstressed vowel found in unstressed syllables of English words. It is the most common because English is stress-timed and unstressed syllables are reduced. Examples: the "a" in "about," the "e" in "taken," the "o" in "opinion."' },
          { label: 'b', task: 'What is the difference between a stress-timed and a syllable-timed language?', solution: 'In stress-timed languages (like English), stressed syllables occur at regular intervals and unstressed syllables are compressed. In syllable-timed languages (like French or Yoruba), each syllable takes roughly equal time. This is why non-native English speakers often sound "different" — they may give equal weight to all syllables.' },
          { label: 'c', task: 'What is a diphthong? Give two examples.', solution: 'A diphthong is a vowel sound that glides from one position to another within a single syllable. Examples: /aɪ/ in "ride," /əʊ/ in "go," /aʊ/ in "now," /eɪ/ in "say."' },
        ],
        hints: ['Try saying the examples aloud and paying attention to what your mouth does', 'Think about how Norwegian handles these same features'],
        solution: 'Understanding these phonetic concepts helps you analyse why different accents sound the way they do and improves your own pronunciation awareness.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: Prestige Accents and Accent Discrimination ---
    {
      id: 'ie-2-4-def-2',
      type: 'definition',
      title: 'Prestige Accents and Accent Discrimination',
      content: `**Prestige Accents:**
A prestige accent is one that is socially valued and associated with education, authority, and competence. In the English-speaking world, the main prestige accents are:

- **RP** in Britain (though its prestige is declining)
- **General American** in the United States and internationally
- **Standard accents** in other English-speaking countries

**Important:** Prestige is a social phenomenon, not a linguistic one. No accent is inherently "better," "clearer," or "more correct" than any other. The prestige of an accent reflects the power and status of its speakers, not any objective quality of the accent itself.

**Accent Discrimination (Accentism):**
Accent discrimination occurs when people are judged, stereotyped, or treated unfairly based on how they speak. This is a serious and well-documented phenomenon.

**Research Findings:**
- Studies show that people associate certain accents with intelligence, trustworthiness, and competence — even when there is no rational basis for these associations
- Birmingham (Brummie) accents in the UK are consistently rated as less intelligent, despite no evidence for this
- Southern American accents are often stereotyped as "slow" or "uneducated"
- Non-native accents can lead to discrimination in job interviews, housing, and customer service
- "Linguistic profiling" (judging someone's race or ethnicity by their speech) has been documented in studies on housing discrimination

**Accent and Identity:**
- People often modify their accent in different social situations (this is called **accommodation**)
- Losing or changing one's accent can feel like losing part of one's identity
- **Code-switching** between accents (e.g., using a professional accent at work and a regional accent at home) is common and cognitively demanding
- The pressure to adopt a prestige accent can be seen as a form of social control

**For Norwegian Speakers:**
You will always have a Norwegian accent when speaking English — and that is perfectly fine. Your accent is part of your identity. The goal is mutual intelligibility, not sounding like a native speaker.`,
    },
    // --- EXERCISE 3 ---
    {
      id: 'ie-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-2-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Why are some accents considered more "prestigious" than others?',
        options: [
          { id: 'a', text: 'Because prestige reflects the social power and status of the speakers, not any inherent quality of the accent', isCorrect: true },
          { id: 'b', text: 'Because some accents are linguistically simpler and therefore easier to understand', isCorrect: false },
          { id: 'c', text: 'Because some accents follow the rules of grammar more closely', isCorrect: false },
          { id: 'd', text: 'Because prestigious accents are older and closer to the original form of English', isCorrect: false },
        ],
        solution: 'Accent prestige is entirely a social phenomenon. No accent is inherently "better" or "clearer" — we find accents easier to understand when we are more familiar with them. The accents considered prestigious are those spoken by people in positions of power and authority.',
      },
    },
    // --- EXERCISE 4 ---
    {
      id: 'ie-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Discuss accent discrimination in 150–200 words. Consider the following questions:',
        subTasks: [
          { label: 'a', task: 'Have you ever judged someone based on their accent? Have you ever felt judged for yours?', solution: 'Personal reflection should demonstrate awareness of how accent bias operates in everyday life.' },
          { label: 'b', task: 'Why might accent discrimination be harder to recognise and address than other forms of discrimination?', solution: 'Accent discrimination is often unconscious and socially accepted. People may not realise they are discriminating, and there are few legal protections against it. Unlike visible characteristics, accents are sometimes seen as something people "could change if they wanted to."' },
        ],
        hints: ['Think about your own experiences with Norwegian dialects as well as English accents', 'Consider how social media and globalisation might be changing attitudes toward accents'],
        solution: 'Accent discrimination is a real and documented form of prejudice. Being aware of our own biases is the first step toward more equitable treatment of all speakers.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-2-4-summary',
      type: 'text',
      content: `## Summary

Pronunciation is a fundamental aspect of language that shapes how we are perceived and how we perceive others. Every English speaker has an accent, and no accent is inherently superior to any other. Basic phonetics — understanding vowels, consonants, stress, rhythm, and intonation — helps us analyse how accents differ. The distinction between accent (pronunciation only) and dialect (pronunciation plus vocabulary and grammar) is important for precise linguistic discussion. Prestige accents like RP and General American derive their status from social factors, not linguistic ones. Accent discrimination is a real and harmful phenomenon that can affect people's opportunities in employment, education, and social life. As speakers of English in a global context, we should aim for mutual intelligibility while respecting the diversity of accents that makes English such a rich and dynamic language.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-2-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Research task: Find a video clip (on YouTube or similar) of a speaker with a non-standard English accent (e.g., Indian English, Scottish English, Jamaican English, Nigerian English). Write a short analysis (150–200 words) covering:',
        subTasks: [
          { label: 'a', task: 'What accent does the speaker have?', solution: 'Accurate identification of the accent variety.' },
          { label: 'b', task: 'Describe at least three specific pronunciation features you notice.', solution: 'Three specific, accurately described phonological features (e.g., rhoticity, vowel qualities, consonant substitutions, rhythm patterns).' },
          { label: 'c', task: 'How easy or difficult was it for you to understand the speaker? Why?', solution: 'Honest reflection on intelligibility, considering factors like familiarity, speed of speech, and shared vs different phonological features.' },
        ],
        hints: ['Use the phonetic terms you have learned in this chapter', 'Be descriptive, not judgmental — describe what you hear, not whether it is "good" or "bad"'],
        solution: 'A good analysis demonstrates the ability to identify specific phonetic features using appropriate terminology and to reflect on the factors that affect intelligibility.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-2-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What is "High Rising Terminal" (HRT) or "uptalk"?',
        options: [
          { id: 'a', text: 'Rising intonation at the end of statements, making them sound like questions — a feature spreading from Australian and Californian English', isCorrect: true },
          { id: 'b', text: 'A type of vocal fry used primarily by young American women', isCorrect: false },
          { id: 'c', text: 'The use of very high-pitched voices in formal presentations', isCorrect: false },
          { id: 'd', text: 'A technique for projecting the voice in large spaces', isCorrect: false },
        ],
        solution: 'High Rising Terminal (HRT), commonly called "uptalk," is a pattern where the speaker uses rising intonation at the end of declarative sentences, giving statements a questioning tone. It is associated with Australian and Californian English but is spreading globally, particularly among younger speakers.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 2.5: English Creoles and Pidgins
// ============================================================================

export const CHAPTER_INT_ENGELSK_2_5: TextbookChapter = {
  id: 'int-engelsk-2-5',
  courseId: 'int-engelsk',
  chapterNumber: '2.5',
  title: 'English Creoles and Pidgins',
  description: 'Learn what pidgins and creoles are, explore examples such as Jamaican Patois, Tok Pisin, and Hawaiian Creole, and understand their linguistic features and social status.',
  estimatedMinutes: 18,
  competenceGoals: [
    'explore and reflect on diversity and variation in the English-speaking world',
    'discuss and reflect on the relationship between language, culture, and identity',
    'analyze linguistic features of contact languages and discuss their social status',
  ],
  keyTerms: [
    { term: 'Pidgin', definition: 'A simplified contact language that develops when speakers of different languages need to communicate. A pidgin has no native speakers and is used for limited purposes such as trade.' },
    { term: 'Creole', definition: 'A full language that develops from a pidgin when children grow up speaking it as their native language. Creoles have complex grammar and serve all communicative functions.' },
    { term: 'Lexifier language', definition: 'The language that provides most of the vocabulary in a pidgin or creole. For English-based creoles, English is the lexifier.' },
    { term: 'Substrate language', definition: 'The language(s) of the subordinate group in a contact situation, which contribute grammar, phonology, and some vocabulary to the resulting pidgin or creole.' },
    { term: 'Decreolization', definition: 'The process by which a creole gradually becomes more similar to its lexifier language, often due to social pressure and education.' },
  ],
  content: [
    // --- INTRO ---
    {
      id: 'ie-2-5-intro',
      type: 'text',
      content: `## When Languages Meet: Pidgins and Creoles

When people who speak different languages need to communicate — for trade, work, or survival — entirely new language systems can emerge. These contact languages, known as pidgins and creoles, are among the most fascinating products of human linguistic creativity. English-based pidgins and creoles exist on every inhabited continent, from the Caribbean to the Pacific, from West Africa to South-East Asia.

For centuries, pidgins and creoles were dismissed as "broken" or "bastardized" versions of European languages. Linguists now recognise them as fully legitimate language systems with their own complex grammars, rich expressive capabilities, and vibrant literary traditions.

**Why Study Pidgins and Creoles?**
- They demonstrate how human beings create language in contact situations
- They reveal universal principles of human language capacity
- They are spoken by millions of people worldwide
- They challenge our assumptions about what counts as a "real" language
- They are closely connected to histories of colonialism, slavery, and globalisation

**In This Chapter, You Will Learn:**
- The difference between a pidgin and a creole
- How pidgins develop into creoles (the "creole life cycle")
- Major English-based creoles: Jamaican Patois, Tok Pisin, and Hawaiian Creole English
- Common linguistic features across creoles
- Social attitudes toward creoles and the issue of language rights`,
    },
    // --- DEFINITION 1: What Are Pidgins and Creoles? ---
    {
      id: 'ie-2-5-def-1',
      type: 'definition',
      title: 'Pidgins and Creoles: Definitions and Development',
      content: `**What Is a Pidgin?**

A pidgin is a simplified contact language that emerges when speakers of mutually unintelligible languages need to communicate for practical purposes such as trade, labour, or basic social interaction.

**Characteristics of a Pidgin:**
- **No native speakers:** It is nobody's first language
- **Simplified grammar:** Reduced verb forms, limited tense marking
- **Limited vocabulary:** Drawn mainly from the dominant (lexifier) language
- **Restricted use:** Typically used only for specific purposes (trade, work)
- **Unstable:** May vary considerably between speakers

**What Is a Creole?**

A creole is a fully developed natural language that arises when children grow up speaking a pidgin as their first language. Through the process of first-language acquisition, children expand and regularise the pidgin into a full language.

**Characteristics of a Creole:**
- **Has native speakers:** It is the first language of a community
- **Complex grammar:** Full tense-mood-aspect system, complex sentence structures
- **Rich vocabulary:** Expanded to cover all domains of life
- **Full function:** Used for all communicative purposes — love, poetry, science, law, religion
- **Stable:** Has established norms and is transmitted across generations

**The Creole Life Cycle:**
1. **Contact situation** (e.g., slave plantation, trading post)
2. **Pidgin develops** for basic communication
3. **Creole emerges** when children nativize the pidgin
4. **Creole stabilises** as the community's primary language
5. **Decreolization** may occur if the lexifier language gains social prestige (the creole becomes more like standard English, for example)

**The Lexifier and Substrate:**
- The **lexifier** language provides most of the vocabulary (for our examples, English)
- The **substrate** languages (African languages, Pacific languages, etc.) contribute grammar, phonology, and some vocabulary`,
    },
    // --- EXAMPLE 1 ---
    {
      id: 'ie-2-5-example-1',
      type: 'example',
      title: 'Comparing Creole Sentences',
      problem: 'Look at the following sentences in three English-based creoles. Can you understand them? What features do they share?',
      solution: `**Jamaican Patois (Jamaican Creole English):**
"Mi did a go a di market fi buy some food."
= "I was going to the market to buy some food."

**Features:**
- "Mi" = I (subject pronoun)
- "Did a go" = was going (past progressive marker: "did" + "a" + verb)
- "A di" = to the
- "Fi" = to/for (from English "for")

**Tok Pisin (Papua New Guinea):**
"Mi bin go long maket bilong baim sampela kaikai."
= "I went to the market to buy some food."

**Features:**
- "Mi" = I
- "Bin" = past tense marker (from English "been")
- "Long" = to/at/in (general preposition, from English "along")
- "Bilong" = of/to/for (from English "belong")
- "Baim" = buy (from English "buy" + transitive marker "-im")
- "Sampela" = some (from English "some fellow")
- "Kaikai" = food (reduplication, common in Tok Pisin)

**Hawaiian Creole English (Pidgin):**
"I wen go da market fo buy some food."
= "I went to the market to buy some food."

**Features:**
- "Wen" = past tense marker (from English "went")
- "Da" = the (from English "the")
- "Fo" = to/for (from English "for")

**Shared Features Across All Three:**
1. Simplified pronoun system ("mi" / "I")
2. Pre-verbal tense/aspect markers instead of verb inflection
3. General-purpose prepositions
4. Vocabulary recognisably derived from English
5. Grammar influenced by substrate languages`,
    },
    // --- EXERCISE 1 ---
    {
      id: 'ie-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-2-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'What is the key difference between a pidgin and a creole?',
        options: [
          { id: 'a', text: 'A pidgin has no native speakers and is used for limited purposes, while a creole has native speakers and functions as a full language', isCorrect: true },
          { id: 'b', text: 'A pidgin is spoken in Europe and a creole is spoken in tropical regions', isCorrect: false },
          { id: 'c', text: 'A creole is a simplified version of a pidgin', isCorrect: false },
          { id: 'd', text: 'A pidgin is a written language and a creole is only spoken', isCorrect: false },
        ],
        solution: 'The fundamental distinction is about native speakers. A pidgin develops as a contact language with no native speakers, used for specific purposes like trade. A creole emerges when children acquire a pidgin as their first language, expanding it into a full language capable of expressing everything a human language needs to express.',
      },
    },
    // --- EXERCISE 2 ---
    {
      id: 'ie-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Look at the Tok Pisin sentence: "Ol manmeri bilong dispela ples i save tok Tok Pisin." (= "The people of this place can speak Tok Pisin.") Analyse the following elements:',
        subTasks: [
          { label: 'a', task: 'What does "ol" indicate and where does it come from?', solution: '"Ol" is the plural marker, derived from English "all." In Tok Pisin, it is placed before nouns to indicate plurality: "ol manmeri" = the people (literally "all man-women").' },
          { label: 'b', task: 'What does "bilong" mean and what is its English origin?', solution: '"Bilong" (from English "belong") is a versatile preposition meaning "of," "for," or "belonging to." Here it means "of" — "bilong dispela ples" = "of this place."' },
          { label: 'c', task: 'What does "save" mean in this context?', solution: '"Save" (from Portuguese "sabe" or English "savvy") means "to know how to" or "to habitually do." "I save tok" means "(they) can speak / know how to speak."' },
        ],
        hints: ['Remember that creole words often come from the lexifier language but may shift in meaning', 'Tok Pisin has approximately 5 million speakers in Papua New Guinea'],
        solution: 'Tok Pisin demonstrates how creoles create new grammatical systems using vocabulary from the lexifier language. Words like "ol," "bilong," and "save" have been repurposed from their English origins to serve new grammatical functions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- DEFINITION 2: Social Status and Language Rights ---
    {
      id: 'ie-2-5-def-2',
      type: 'definition',
      title: 'The Social Status of Creoles',
      content: `**Are Creoles "Real" Languages?**

Linguistically, the answer is unequivocally yes. Creoles are natural human languages with complete grammars, capable of expressing any thought or emotion. However, socially, creoles often face prejudice and discrimination.

**Common Misconceptions About Creoles:**
- "Creoles are just broken/lazy versions of European languages" — **False.** They have their own systematic grammars.
- "Creole speakers can't speak properly" — **False.** They speak their language fluently and correctly.
- "Creoles are too simple for academic or scientific use" — **False.** Any language can be expanded for any purpose.
- "Children who speak creoles are at a disadvantage" — **Partially true** only because of social stigma, not linguistic inadequacy.

**Examples of Creole Status:**

| Creole | Speakers | Official Status |
|--------|----------|----------------|
| Jamaican Patois | ~3 million | Not official (English is) but widely used |
| Tok Pisin | ~5 million | Official language of Papua New Guinea |
| Haitian Creole | ~12 million | Official language alongside French |
| Hawaiian Creole English | ~600,000 | Not official but has growing recognition |
| Nigerian Pidgin | ~75 million | Widely used but not official |

**The Language Rights Debate:**
- Should creoles be used in education? Many educators now argue yes — teaching children in their native language (even if it is a creole) improves educational outcomes
- Should creoles be standardised and given written forms? Tok Pisin and Haitian Creole have been, with positive results
- Should creoles be recognised as official languages? This is both a linguistic and a political question

**Jamaican Patois in Literature and Music:**
Jamaican Patois (also called Jamaican Creole or Patwa) has a rich literary tradition and is central to reggae, dancehall, and dub poetry. Writers like Louise Bennett-Coverley ("Miss Lou") championed Patois as a literary language, and contemporary artists from Bob Marley to current dancehall stars use Patois to reach global audiences.`,
    },
    // --- EXERCISE 3 ---
    {
      id: 'ie-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-2-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Which of the following English-based creoles is an official language of its country?',
        options: [
          { id: 'a', text: 'Tok Pisin (official language of Papua New Guinea)', isCorrect: true },
          { id: 'b', text: 'Jamaican Patois (official language of Jamaica)', isCorrect: false },
          { id: 'c', text: 'Hawaiian Creole English (official language of Hawaii)', isCorrect: false },
          { id: 'd', text: 'Nigerian Pidgin (official language of Nigeria)', isCorrect: false },
        ],
        solution: 'Tok Pisin is one of the three official languages of Papua New Guinea (along with English and Hiri Motu). It is used in parliament, media, and education. Jamaican Patois, despite being spoken by most Jamaicans, is not an official language — English holds that status. Nigerian Pidgin, though spoken by an estimated 75 million people, is also not official.',
      },
    },
    // --- EXERCISE 4 ---
    {
      id: 'ie-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Discuss the following question in writing (150–200 words): Should creoles be used as languages of education in countries where they are widely spoken? Consider arguments for and against.',
        hints: [
          'Think about what research shows about mother-tongue education',
          'Consider both the practical benefits and the potential social challenges',
          'Look at the examples of Tok Pisin and Haitian Creole, which are used in education',
        ],
        solution: 'Arguments for: Research consistently shows that children learn best in their mother tongue; using creoles in education removes a barrier for children who may not speak the standard language at home; it validates the linguistic identity of creole speakers. Arguments against: Creoles may lack standardised written forms and educational materials; speakers may need proficiency in the standard language for higher education and international opportunities; parents may resist creole-medium education due to social stigma. A balanced position might advocate for bilingual education that begins in the creole and transitions to the standard language.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- SUMMARY ---
    {
      id: 'ie-2-5-summary',
      type: 'text',
      content: `## Summary

Pidgins and creoles are contact languages that emerge when speakers of different languages need to communicate. A pidgin is a simplified language with no native speakers, used for limited purposes. When children grow up speaking a pidgin as their first language, it becomes a creole — a full natural language with complex grammar and unlimited expressive capacity. Major English-based creoles include Jamaican Patois, Tok Pisin (Papua New Guinea), and Hawaiian Creole English. These languages share common features such as pre-verbal tense markers, simplified pronoun systems, and general-purpose prepositions, while drawing vocabulary mainly from English (the lexifier) and grammar from substrate languages. Despite being linguistically complete, creoles often face social stigma and are dismissed as "broken" versions of European languages. Recognising creoles as legitimate languages is both a linguistic and a social justice issue.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ie-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-2-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Choose one English-based creole (Jamaican Patois, Tok Pisin, or Hawaiian Creole English) and write a short profile (200–250 words) that covers:',
        subTasks: [
          { label: 'a', task: 'Where it is spoken and approximately how many speakers it has', solution: 'Accurate geographical and demographic information.' },
          { label: 'b', task: 'How it developed historically (what contact situation produced it)', solution: 'Description of the historical circumstances — slavery, trade, colonialism, plantation economies, etc.' },
          { label: 'c', task: 'At least three distinctive linguistic features (pronunciation, grammar, or vocabulary)', solution: 'Three specific, accurately described features with examples.' },
          { label: 'd', task: 'Its current social status and any debates about its recognition', solution: 'Discussion of official status, use in education/media, social attitudes.' },
        ],
        hints: ['Use reliable sources for your research', 'Remember that these are full languages, not "corruptions" of English'],
        solution: 'A good profile demonstrates understanding of how creoles develop, awareness of their linguistic complexity, and sensitivity to the social issues surrounding their status.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ie-2-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'What is "decreolization"?',
        options: [
          { id: 'a', text: 'The process by which a creole gradually becomes more similar to its lexifier language, often due to social pressure and education', isCorrect: true },
          { id: 'b', text: 'The process of creating a new creole from two existing languages', isCorrect: false },
          { id: 'c', text: 'The extinction of a creole language when all its speakers die', isCorrect: false },
          { id: 'd', text: 'The process of translating creole texts into standard English', isCorrect: false },
        ],
        solution: 'Decreolization occurs when a creole gradually shifts toward the standard form of its lexifier language, typically because the lexifier (e.g., standard English) carries more social prestige. Speakers adopt more standard vocabulary, grammar, and pronunciation over time. This can result in a "creole continuum" — a range from "deep" creole (basilect) to near-standard speech (acrolect).',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS
// ============================================================================

export const INT_ENGELSK_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_INT_ENGELSK_2_1,
  CHAPTER_INT_ENGELSK_2_2,
  CHAPTER_INT_ENGELSK_2_3,
  CHAPTER_INT_ENGELSK_2_4,
  CHAPTER_INT_ENGELSK_2_5,
];
