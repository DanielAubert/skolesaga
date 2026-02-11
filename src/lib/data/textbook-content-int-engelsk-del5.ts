/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// CHAPTER 5.1: Postcolonial Literature
// ============================================================================

export const CHAPTER_INT_ENGELSK_5_1: TextbookChapter = {
  id: 'int-engelsk-5-1',
  courseId: 'int-engelsk',
  chapterNumber: '5.1',
  title: 'Postcolonial Literature',
  description: 'Explore the definition, central themes, and key authors of postcolonial literature in English, including identity, displacement, and cultural hybridity.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analyze and interpret literary texts from the English-speaking world in a historical and cultural context',
    'discuss and reflect on the relationship between language, culture, and identity',
  ],
  content: [
    {
      id: 'ie-5-1-intro',
      type: 'text',
      content: `# Postcolonial Literature

When the British Empire withdrew from its colonies across Africa, Asia, and the Caribbean during the twentieth century, it left behind a complicated linguistic inheritance: the English language. Writers from formerly colonized nations faced a profound question: should they reject the colonizer's tongue entirely, or could they reshape it into a tool for telling their own stories?

Postcolonial literature is the body of writing that emerged from this tension. It encompasses works by authors from nations that experienced colonization, and it grapples with the lasting effects of imperial rule on culture, identity, and language. These writers did not simply adopt English as it was handed to them. They bent it, broke it, infused it with local rhythms, and transformed it into something new and powerful.

This chapter introduces the field of postcolonial literary studies, examines its central themes, and explores some of the most important authors working in this tradition.`,
    },
    {
      id: 'ie-5-1-def-postcolonial',
      type: 'definition',
      title: 'Postcolonial Literature',
      content: `**Postcolonial literature** refers to writing produced by authors from countries that were formerly under colonial rule, particularly by European powers such as Britain, France, and the Netherlands. The term covers literature written both during and after the period of colonial occupation.

**Key characteristics:**
- Examines the experience of colonization and its aftermath
- Often written in the language of the former colonizer (English, French, Portuguese)
- Questions power structures inherited from the colonial period
- Explores how colonized peoples construct identity in the shadow of empire
- Frequently employs hybrid narrative forms that blend Western literary conventions with local storytelling traditions

**Important note:** The prefix "post-" does not mean that colonialism is entirely in the past. Many postcolonial writers argue that colonial power structures persist in new forms through economic dependence, cultural hegemony, and institutional inequality.`,
    },
    {
      id: 'ie-5-1-text-themes',
      type: 'text',
      content: `## Central Themes in Postcolonial Literature

### Identity and the Self
One of the most persistent questions in postcolonial writing is: *Who am I?* Colonial rule often imposed the colonizer's culture, language, and values on indigenous populations, creating a fractured sense of self. Postcolonial authors explore what it means to exist between two cultures, two languages, and two ways of seeing the world. The Martinican writer Frantz Fanon described this as a condition where the colonized person wears a "white mask" over a "black skin," performing an identity that is not authentically their own.

### Displacement and Exile
Many postcolonial writers are migrants, exiles, or members of diaspora communities. Their literature explores the experience of leaving home, living between worlds, and the impossibility of truly returning to a place that has changed in one's absence. Displacement is not only physical but also psychological and cultural.

### Cultural Hybridity
The literary theorist Homi K. Bhabha introduced the concept of **hybridity** to describe the new cultural forms that emerge when colonizer and colonized cultures interact. Rather than seeing this mixing as a loss of authenticity, Bhabha argued that hybrid identities occupy a powerful "third space" where new possibilities for expression and resistance arise.

### Writing Back to the Empire
The phrase "writing back" describes the practice of responding to canonical Western texts from a postcolonial perspective. Jean Rhys's *Wide Sargasso Sea* (1966), for example, retells Charlotte Bronte's *Jane Eyre* from the perspective of the "madwoman in the attic," revealing her as a Creole woman silenced by British patriarchal and imperial power.`,
    },
    {
      id: 'ie-5-1-def-hybridity',
      type: 'definition',
      title: 'Cultural Hybridity',
      content: `**Cultural hybridity** is a concept from postcolonial theory, developed by Homi K. Bhabha, that describes the creation of new transcultural forms when different cultures meet and interact, particularly in colonial and postcolonial contexts.

**Key ideas:**
- Hybrid identities are not simply a mixture of two "pure" cultures
- The "third space" of hybridity produces something entirely new
- Hybridity can be a source of resistance against colonial authority
- Language itself becomes hybrid when local expressions, syntax, and rhythms enter the colonizer's tongue

**Example:** Salman Rushdie's novels blend Urdu idioms, Hindi storytelling patterns, and Bollywood references with English prose and Western literary forms, creating a distinctly hybrid literary style.`,
    },
    {
      id: 'ie-5-1-example-achebe',
      type: 'example',
      title: 'Example: Chinua Achebe and the Language Debate',
      problem: 'Why did Chinua Achebe choose to write in English rather than in his native Igbo language?',
      solution: `Achebe argued that English, as a legacy of colonialism, could be turned into a tool for African self-expression. In his essay "The African Writer and the English Language" (1965), he wrote:

*"The price a world language must be prepared to pay is submission to many different kinds of use."*

Achebe did not write standard British English. He adapted it, weaving in Igbo proverbs, speech patterns, and narrative structures. In *Things Fall Apart* (1958), English is made to carry the weight and rhythm of Igbo oral tradition.

**Contrast with Ngugi wa Thiong'o:**
The Kenyan writer Ngugi wa Thiong'o took the opposite position. He argued that writing in English perpetuates colonial mental domination and chose to write his novels in Gikuyu, his mother tongue. He called on all African writers to abandon European languages.

This debate remains central to postcolonial literary studies: Is using the colonizer's language an act of empowerment or continued submission?`,
    },
    {
      id: 'ie-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What does the term "postcolonial literature" primarily refer to?',
        options: [
          { id: 'a', text: 'Literature written only after a country gained independence', isCorrect: false },
          { id: 'b', text: 'Literature from formerly colonized nations that examines the experience and legacy of colonialism', isCorrect: true },
          { id: 'c', text: 'Any literature written in English outside of England', isCorrect: false },
          { id: 'd', text: 'Literature that celebrates the achievements of the British Empire', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Postcolonial literature comes from formerly colonized nations and deals with the experience and lasting effects of colonialism. It can be written both during and after colonial rule, and it critically examines imperial power structures.',
      },
    },
    {
      id: 'ie-5-1-text-authors',
      type: 'text',
      content: `## Key Authors in Postcolonial Literature

### Chinua Achebe (1930-2013), Nigeria
Achebe is often called the father of modern African literature. His debut novel *Things Fall Apart* (1958) depicts the destruction of Igbo society by British colonialism and Christian missionaries. The novel has been translated into over 50 languages and remains one of the most widely read works of African literature. Achebe's work insists that African cultures had rich, complex civilizations long before European contact.

### Salman Rushdie (born 1947), India/UK
Rushdie's *Midnight's Children* (1981) uses magical realism to tell the story of India's independence and the partition of the subcontinent. His exuberant, inventive prose style mirrors the chaotic, multi-layered reality of postcolonial India. Rushdie's work demonstrates how the novel form itself can be decolonized through hybrid narrative techniques.

### Chimamanda Ngozi Adichie (born 1977), Nigeria
Adichie represents a new generation of postcolonial writers. Her novels *Purple Hibiscus* (2003), *Half of a Yellow Sun* (2006), and *Americanah* (2013) explore themes of political violence, the Nigerian Civil War, and the immigrant experience in America. Her TED Talk "The Danger of a Single Story" has become essential viewing in postcolonial studies, arguing that reducing any people to a single narrative is a form of oppression.

### Derek Walcott (1930-2017), Saint Lucia
The Nobel Prize-winning poet's epic poem *Omeros* (1990) reimagines Homer's *Iliad* in a Caribbean setting, asserting that the Caribbean has its own heroic stories worthy of epic treatment. Walcott's work explores the divided inheritance of the Caribbean, caught between African, European, and indigenous traditions.`,
    },
    {
      id: 'ie-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Explain the concept of "cultural hybridity" in your own words and give one example of how it might appear in literature.',
        hints: ['Think about what happens when two different cultures mix', 'Consider language, narrative form, or characters who belong to multiple cultures'],
        solution: 'Cultural hybridity describes the new cultural forms that emerge when different cultures interact, especially in colonial contexts. In literature, it might appear as a novel written in English but using local proverbs and storytelling patterns (like Achebe), or through characters who navigate between their heritage culture and the culture of the country they live in (like the protagonist of Adichie\'s Americanah).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-5-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'In the language debate between Achebe and Ngugi wa Thiong\'o, what was Ngugi\'s position?',
        options: [
          { id: 'a', text: 'African writers should write in English to reach a global audience', isCorrect: false },
          { id: 'b', text: 'African writers should write in both English and their native language', isCorrect: false },
          { id: 'c', text: 'African writers should abandon European languages and write in their mother tongues', isCorrect: true },
          { id: 'd', text: 'African writers should create an entirely new language', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Ngugi wa Thiong\'o argued that writing in English perpetuates colonial mental domination. He chose to write his fiction in Gikuyu, his native Kenyan language, and called on other African writers to do the same.',
      },
    },
    {
      id: 'ie-5-1-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

Postcolonial literature is a rich and diverse body of writing that emerges from the experience of colonization and its aftermath. Its central themes include **identity** (the fractured self caught between cultures), **displacement** (physical and psychological exile), **cultural hybridity** (the creation of new forms from the meeting of cultures), and **writing back** (responding to Western literary traditions from a postcolonial perspective).

Key debates in the field include the question of language choice (should postcolonial writers use the colonizer's language?), the relationship between literature and political resistance, and whether the "post" in postcolonial accurately reflects a world where colonial power structures persist in new forms.

The authors introduced in this chapter -- Achebe, Rushdie, Adichie, and Walcott -- represent different regions, generations, and approaches, but they share a commitment to telling stories that challenge dominant Western narratives and affirm the complexity of postcolonial experience.`,
    },
    {
      id: 'ie-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: '"Writing back to the empire" is an important concept in postcolonial studies. In 200-250 words, explain what this concept means and discuss why it is significant. Use at least one specific literary example.',
        hints: ['Think about how postcolonial authors respond to classic Western texts', 'Consider Jean Rhys\'s Wide Sargasso Sea as one example'],
        solution: 'Writing back to the empire refers to the practice of postcolonial authors responding to canonical Western literary texts by retelling them from the perspective of the colonized. Jean Rhys\'s Wide Sargasso Sea retells Jane Eyre from the perspective of Bertha Mason, revealing her as a Creole woman whose story was silenced. This practice is significant because it challenges the authority of the Western literary canon, gives voice to those who were silenced or misrepresented, and reveals the colonial assumptions embedded in supposedly "universal" literature.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-5-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Which concept did Homi K. Bhabha introduce to describe the new cultural forms that emerge when colonizer and colonized cultures interact?',
        options: [
          { id: 'a', text: 'Orientalism', isCorrect: false },
          { id: 'b', text: 'Cultural hybridity and the "third space"', isCorrect: true },
          { id: 'c', text: 'Manufacturing consent', isCorrect: false },
          { id: 'd', text: 'The white gaze', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Homi K. Bhabha developed the concept of cultural hybridity and the "third space" to describe how new transcultural forms emerge from the encounter between colonizer and colonized cultures. This third space is not simply a mixture but something entirely new.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 5.2: African Literature in English
// ============================================================================

export const CHAPTER_INT_ENGELSK_5_2: TextbookChapter = {
  id: 'int-engelsk-5-2',
  courseId: 'int-engelsk',
  chapterNumber: '5.2',
  title: 'African Literature in English',
  description: 'Study the major works and themes of African literature in English, from Achebe and Ngugi to Adichie, focusing on colonialism, independence, and modern African identity.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analyze and interpret literary texts from the English-speaking world in a historical and cultural context',
    'discuss how texts from the English-speaking world relate to the historical period in which they were written',
  ],
  content: [
    {
      id: 'ie-5-2-intro',
      type: 'text',
      content: `# African Literature in English

Africa is a continent of 54 nations, hundreds of languages, and extraordinarily diverse cultures. Yet for much of the twentieth century, African stories were told primarily by outsiders -- European missionaries, colonial administrators, and Western journalists. When Africans began writing their own stories in English, they did not merely add new titles to the global bookshelf. They fundamentally challenged the way the world understood an entire continent.

African literature in English spans generations and encompasses an enormous range of styles, themes, and perspectives. From the pioneering works of Chinua Achebe in the 1950s to the contemporary global success of Chimamanda Ngozi Adichie, African writers in English have consistently produced some of the most important and innovative literature in the world.

This chapter traces the development of African literature in English, introduces its most influential authors, and examines the themes that connect this diverse body of work.`,
    },
    {
      id: 'ie-5-2-def-african-lit',
      type: 'definition',
      title: 'African Literature in English',
      content: `**African literature in English** refers to literary works written in English by authors from the African continent. It is a subset of the broader category of African literature, which also includes works written in French (francophone African literature), Portuguese (lusophone African literature), Arabic, Swahili, and numerous other African languages.

**Historical context:**
- English became a literary language in Africa as a direct result of British colonialism
- The first major works of African literature in English appeared in the 1950s
- Early writers faced the challenge of representing African cultures and experiences through a language imposed by the colonizer
- The tradition now spans multiple generations and has produced several Nobel Prize and Booker Prize winners

**Major literary centers:** Nigeria, Kenya, South Africa, Ghana, Zimbabwe, Sierra Leone`,
    },
    {
      id: 'ie-5-2-text-achebe',
      type: 'text',
      content: `## Chinua Achebe and the Birth of Modern African Literature

Chinua Achebe's *Things Fall Apart* (1958) is widely regarded as the founding text of modern African literature in English. Set in a fictional Igbo village at the end of the nineteenth century, the novel tells the story of Okonkwo, a proud warrior whose world is shattered by the arrival of British missionaries and colonial administrators.

### Why Things Fall Apart Matters

Before Achebe, the dominant Western literary representation of Africa was Joseph Conrad's *Heart of Darkness* (1899), which depicted Africa as a place of savagery and darkness, a backdrop for European moral crises rather than a land of real people with real cultures. Achebe responded directly to this image. His novel presents pre-colonial Igbo society as complex, sophisticated, and governed by elaborate systems of law, religion, and social organization.

**Key features of the novel:**
- **Proverbs:** Achebe weaves Igbo proverbs throughout the English text, demonstrating the richness of oral tradition. As the narrator says, "Among the Igbo, the art of conversation is regarded very highly, and proverbs are the palm-oil with which words are eaten."
- **Tragic structure:** The novel follows a classical tragic arc, with Okonkwo as a flawed hero whose rigidity leads to his downfall
- **Cultural detail:** Detailed descriptions of ceremonies, farming practices, justice systems, and family life present Igbo culture as fully realized
- **Colonial encounter:** The arrival of the missionaries is shown from the African perspective, revealing the devastation that colonialism brought to established societies

### Achebe's Legacy
Achebe went on to write four more novels, including *No Longer at Ease* (1960) and *Arrow of God* (1964). He also wrote influential literary criticism, most notably his essay "An Image of Africa" (1977), in which he argued that Conrad's *Heart of Darkness* is fundamentally racist and should not be celebrated as a great work of literature.`,
    },
    {
      id: 'ie-5-2-example-proverb',
      type: 'example',
      title: 'Example: Igbo Proverbs in Things Fall Apart',
      problem: 'How does Achebe use Igbo proverbs in his English-language novel to create a distinctly African literary voice?',
      solution: `Achebe embeds Igbo proverbs throughout *Things Fall Apart* to demonstrate the sophistication of Igbo oral culture. Examples include:

- *"When the moon is shining the cripple becomes hungry for a walk."* -- This expresses the idea that beauty and favorable conditions inspire even the most reluctant to act.

- *"A toad does not run in the daytime for nothing."* -- Something unusual must have happened; things do not happen without cause.

- *"The lizard that jumped from the high iroko tree to the ground said he would praise himself if no one else did."* -- One must recognize one's own achievements.

**Literary effect:**
These proverbs serve multiple purposes:
1. They establish the cultural richness of Igbo society within the English text
2. They create a distinctive narrative voice that sounds African rather than British
3. They demonstrate that complex philosophical ideas exist within oral traditions
4. They challenge the colonial assumption that cultures without written literature are "primitive"

By making English carry these Igbo rhetorical patterns, Achebe transforms the colonizer's language into a vehicle for African self-expression.`,
    },
    {
      id: 'ie-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Why is Chinua Achebe\'s Things Fall Apart considered a landmark in African literature?',
        options: [
          { id: 'a', text: 'It was the first novel ever written in English', isCorrect: false },
          { id: 'b', text: 'It presented pre-colonial African society as complex and sophisticated, countering Western stereotypes', isCorrect: true },
          { id: 'c', text: 'It was the first book to be translated into an African language', isCorrect: false },
          { id: 'd', text: 'It praised the benefits of British colonial rule in Nigeria', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Things Fall Apart was groundbreaking because it depicted pre-colonial Igbo society as complex, sophisticated, and fully realized, directly challenging Western literary portrayals of Africa (like Conrad\'s Heart of Darkness) that reduced the continent to a backdrop of savagery and darkness.',
      },
    },
    {
      id: 'ie-5-2-text-ngugi',
      type: 'text',
      content: `## Ngugi wa Thiong'o: Decolonizing the Mind

The Kenyan writer Ngugi wa Thiong'o (born 1938) is one of the most influential African intellectuals of the twentieth century. His early novels, including *Weep Not, Child* (1964) and *A Grain of Wheat* (1967), were written in English and dealt with Kenya's struggle for independence from British colonial rule (the Mau Mau uprising).

### The Turn to Gikuyu
In 1986, Ngugi published *Decolonising the Mind*, a collection of essays in which he argued that language is the most powerful instrument of cultural imperialism. He announced that he would no longer write fiction in English, choosing instead to write in Gikuyu, his mother tongue.

**Ngugi's argument:**
- Language carries culture; to adopt the colonizer's language is to adopt the colonizer's worldview
- Colonial education systems deliberately destroyed African children's connection to their own languages and stories
- Writing in African languages is an act of cultural resistance and decolonization
- As long as African literature is written in European languages, it primarily serves European and American readers rather than African communities

### Impact and Controversy
Ngugi's position sparked intense debate. Critics argued that writing in African languages limited an author's readership and that English could be reshaped to serve African purposes (Achebe's position). Supporters argued that Ngugi was right to prioritize African audiences and that translation could make works accessible internationally without requiring the original to be in a European language.

Ngugi himself was imprisoned by the Kenyan government in 1977 for his politically engaged work. His prison memoir *Detained: A Writer's Prison Diary* (1981) documents this experience.`,
    },
    {
      id: 'ie-5-2-text-adichie',
      type: 'text',
      content: `## Chimamanda Ngozi Adichie: A New Generation

Chimamanda Ngozi Adichie (born 1977) represents the contemporary generation of African writers who have achieved global literary stardom. Born in Enugu, Nigeria, and educated in both Nigeria and the United States, Adichie writes with equal authority about both African and American settings.

### Major Works

**Half of a Yellow Sun (2006)**
Set during the Nigerian Civil War (1967-1970), also known as the Biafran War, this novel tells the story of the conflict through the eyes of five characters whose lives intersect during one of Africa's most devastating conflicts. The novel brings attention to a historical event that many Western readers knew nothing about, demonstrating literature's power to recover suppressed histories.

**Americanah (2013)**
This novel follows Ifemelu, a young Nigerian woman who moves to the United States for university and discovers that she is "Black" for the first time -- in Nigeria, she was Igbo, she was middle-class, but race as Americans understand it was not a defining category. The novel brilliantly explores how race and identity shift depending on geography and cultural context.

### "The Danger of a Single Story"
Adichie's 2009 TED Talk has become one of the most-watched in the platform's history. In it, she argues that when we hear only one story about a person or a country, we risk critical misunderstanding. She describes how, growing up reading British and American children's books, she initially wrote stories featuring white characters eating apples and playing in snow -- things entirely foreign to her Nigerian childhood. Only when she discovered African writers like Achebe did she realize that people like her could exist in literature.

The concept of the "single story" has become a widely used framework for discussing representation, stereotyping, and the politics of storytelling.`,
    },
    {
      id: 'ie-5-2-def-single-story',
      type: 'definition',
      title: 'The Danger of a Single Story',
      content: `**The single story** is a concept articulated by Chimamanda Ngozi Adichie in her 2009 TED Talk. It refers to the creation of stereotypes through repeated exposure to only one narrative about a person, group, or place.

**Key points:**
- A single story is not necessarily untrue, but it is incomplete
- When we hear only one story about a people, we reduce them to that story
- Power determines which stories are told and which are suppressed: "How they are told, who tells them, when they are told, how many stories are told, are really dependent on power"
- The single story creates stereotypes, and "the problem with stereotypes is not that they are untrue, but that they are incomplete"
- Literature that offers multiple perspectives is an antidote to the single story

**Example:** The single story of Africa as a place of poverty, war, and disease ignores the continent's vibrant cities, technological innovation, rich cultural traditions, and diverse experiences.`,
    },
    {
      id: 'ie-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Compare Achebe\'s and Ngugi wa Thiong\'o\'s positions on the use of English by African writers. Which position do you find more convincing, and why? Write 150-200 words.',
        hints: ['Consider both the advantages and disadvantages of each position', 'Think about audience, accessibility, and cultural identity'],
        solution: 'Achebe argued that English, inherited from colonialism, could be reshaped into a tool for African expression -- that African writers could make it carry African experiences and perspectives. Ngugi argued that writing in English perpetuates colonial mental domination and that African writers should write in their mother tongues. A strong response will engage with both arguments and offer a reasoned personal position with supporting evidence.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-5-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'What does Adichie mean by "the danger of a single story"?',
        options: [
          { id: 'a', text: 'That reading only one book is dangerous for education', isCorrect: false },
          { id: 'b', text: 'That hearing only one narrative about a people reduces them to stereotypes', isCorrect: true },
          { id: 'c', text: 'That short stories are less valuable than novels', isCorrect: false },
          { id: 'd', text: 'That single-author anthologies should be avoided', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Adichie argues that when we hear only one story about a group of people, we reduce them to that single narrative, creating incomplete and damaging stereotypes. The remedy is to seek out multiple stories and perspectives.',
      },
    },
    {
      id: 'ie-5-2-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

African literature in English has developed from Achebe's pioneering work in the 1950s into one of the most vibrant and influential literary traditions in the world. Three key figures illustrate this development:

- **Chinua Achebe** established the tradition by proving that African stories could be told powerfully in English, using the language to carry African proverbs, values, and perspectives.
- **Ngugi wa Thiong'o** challenged the tradition by arguing that true decolonization requires African writers to write in African languages, sparking a debate that continues today.
- **Chimamanda Ngozi Adichie** represents the new generation, writing confidently about both African and Western settings and demonstrating that African literature speaks to universal human concerns.

Central themes include: the impact of colonialism on African societies, the struggle for independence and its aftermath, the politics of language, the immigrant experience, and the need for diverse representation in global storytelling.`,
    },
    {
      id: 'ie-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Think of a "single story" that exists about Norway or Scandinavia in international media. What important aspects of Norwegian society does this single story leave out? Write 100-150 words connecting Adichie\'s concept to your own experience.',
        hints: ['Consider stereotypes about Vikings, fjords, wealth, or social democracy', 'Think about what these stories miss or oversimplify'],
        solution: 'Common single stories about Norway include the "rich oil nation with perfect social democracy" or the "land of Vikings and fjords." These miss regional differences, economic inequality, immigration challenges, the Sami population, and the complexity of Norwegian cultural life. Students should connect Adichie\'s concept to their own experience of being reduced to a single story.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-5-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'In Achebe\'s essay "An Image of Africa," what does he argue about Conrad\'s Heart of Darkness?',
        options: [
          { id: 'a', text: 'It is the greatest novel ever written about Africa', isCorrect: false },
          { id: 'b', text: 'It accurately portrays African culture and society', isCorrect: false },
          { id: 'c', text: 'It is fundamentally racist in its portrayal of Africa and Africans', isCorrect: true },
          { id: 'd', text: 'It inspired him to become a writer', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'In "An Image of Africa" (1977), Achebe argued that Conrad\'s Heart of Darkness is fundamentally racist because it depicts Africa as a backdrop of savagery and denies Africans their full humanity. He challenged the literary establishment\'s celebration of the novel as a masterpiece.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 5.3: South Asian Literature in English
// ============================================================================

export const CHAPTER_INT_ENGELSK_5_3: TextbookChapter = {
  id: 'int-engelsk-5-3',
  courseId: 'int-engelsk',
  chapterNumber: '5.3',
  title: 'South Asian Literature in English',
  description: 'Explore the works of Rushdie, Roy, and Lahiri, examining diaspora literature, cultural clash, and the richness of Indian writing in English.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analyze and interpret literary texts from the English-speaking world in a historical and cultural context',
    'explore and reflect on diversity and variation in the English-speaking world',
  ],
  content: [
    {
      id: 'ie-5-3-intro',
      type: 'text',
      content: `# South Asian Literature in English

India has the second-largest English-speaking population in the world. The legacy of nearly two centuries of British colonial rule (1757-1947) means that English occupies a complex position in South Asian society: it is simultaneously the language of the former colonizer, a language of power and social mobility, and a literary medium that has produced some of the most celebrated novels of the past century.

South Asian literature in English encompasses writing from India, Pakistan, Bangladesh, Sri Lanka, and the extensive South Asian diaspora communities in Britain, North America, and beyond. This chapter focuses on three writers who represent different aspects of this tradition: Salman Rushdie, whose magical realist novels reimagine the Indian subcontinent; Arundhati Roy, whose lyrical prose explores caste, politics, and personal freedom; and Jhumpa Lahiri, whose quiet, precise stories illuminate the immigrant experience.`,
    },
    {
      id: 'ie-5-3-def-indian-english',
      type: 'definition',
      title: 'Indian English Literature',
      content: `**Indian English literature** refers to the body of literary work written in English by authors of Indian origin. It is one of the oldest and most significant traditions of writing in English outside the traditional "inner circle" countries.

**Key historical milestones:**
- **1835:** Lord Macaulay's Minute on Education established English as the medium of higher education in India, aiming to create a class "Indian in blood and colour, but English in taste, in opinions, in morals, and in intellect"
- **1913:** Rabindranath Tagore became the first non-European to win the Nobel Prize in Literature (for Gitanjali, originally written in Bengali and self-translated into English)
- **1930s-1940s:** R.K. Narayan, Mulk Raj Anand, and Raja Rao established the Indian novel in English
- **1981:** Salman Rushdie's Midnight's Children revolutionized Indian writing in English
- **1997:** Arundhati Roy's The God of Small Things won the Booker Prize, bringing global attention to contemporary Indian literature

**The language question in India:**
India has 22 officially recognized languages and hundreds more spoken across the country. English is one of India's two official languages (alongside Hindi). Writing in English can reach a global audience but may exclude readers who only speak regional languages. This tension between accessibility and authenticity is a recurring theme in Indian literary discourse.`,
    },
    {
      id: 'ie-5-3-text-rushdie',
      type: 'text',
      content: `## Salman Rushdie: Magic, History, and the Postcolonial Novel

Salman Rushdie (born 1947 in Bombay, now Mumbai) is arguably the most influential postcolonial novelist of his generation. His second novel, *Midnight's Children* (1981), won the Booker Prize and was later named the "Booker of Bookers" -- the best winner in the prize's history.

### Midnight's Children
The novel tells the story of Saleem Sinai, born at the exact moment of Indian independence on August 15, 1947. Saleem discovers that all 1,001 children born in the first hour of independence have been granted magical powers. Through Saleem's fantastical autobiography, Rushdie tells the story of modern India itself.

**Key literary features:**
- **Magical realism:** Supernatural elements coexist with realistic historical events, reflecting the way many South Asian cultures understand reality
- **Unreliable narration:** Saleem freely admits to errors and exaggerations, suggesting that history itself is a form of storytelling
- **Hybrid language:** Rushdie's English is infused with Hindi and Urdu words, Bombay street slang, and references to Bollywood cinema
- **Political allegory:** The children's powers represent the promise and betrayal of Indian independence

### Style and Influence
Rushdie writes with extraordinary energy and inventiveness. His sentences overflow with imagery, wordplay, and cultural references. He has described his approach as "chutnification" -- taking the English language and mixing it with the flavors of India, just as chutney combines many different ingredients into something new.

This approach has influenced an entire generation of writers, not only from South Asia but from across the postcolonial world. Rushdie demonstrated that the novel in English need not follow British or American conventions but could be reinvented to reflect the realities of postcolonial societies.`,
    },
    {
      id: 'ie-5-3-example-chutnification',
      type: 'example',
      title: 'Example: Rushdie\'s "Chutnification" of English',
      problem: 'What does Rushdie mean by "chutnification" of English, and how does it appear in his writing?',
      solution: `Rushdie uses the metaphor of **chutney** -- a South Asian condiment made from a mix of spices, fruits, and vegetables -- to describe his literary style. Just as chutney combines diverse ingredients into something entirely new, Rushdie blends English with Hindi, Urdu, and Bombay colloquialisms to create a distinctive literary voice.

**Examples of "chutnification" in practice:**
- Using Hindi and Urdu words without translation or italics, treating them as natural parts of the English text
- Translating Indian idioms literally into English, creating defamiliarizing effects
- Incorporating the rhythms and structures of Indian oral storytelling into English prose
- Mixing references to Western literary classics with Bollywood films and Indian mythology
- Using run-on sentences and breathless narration that mirrors the chaotic vitality of Indian cities

**Significance:**
This is not simply "bad English" or "non-standard English." It is a deliberate artistic choice that claims English for Indian purposes. By refusing to write in the polished prose of the British literary establishment, Rushdie asserts that Indian English has its own validity, richness, and power.`,
    },
    {
      id: 'ie-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What is "magical realism" as used by Salman Rushdie?',
        options: [
          { id: 'a', text: 'A genre where only magical events occur with no connection to reality', isCorrect: false },
          { id: 'b', text: 'A literary style that blends supernatural elements with realistic historical events and settings', isCorrect: true },
          { id: 'c', text: 'A type of fantasy literature set in medieval worlds', isCorrect: false },
          { id: 'd', text: 'A style of writing that avoids all references to real-world events', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Magical realism is a literary style that blends supernatural or fantastical elements with realistic descriptions of everyday life and historical events. In Midnight\'s Children, Rushdie uses this technique to explore Indian history through characters who have magical powers while living through real political events.',
      },
    },
    {
      id: 'ie-5-3-text-roy',
      type: 'text',
      content: `## Arundhati Roy: Beauty, Caste, and Resistance

Arundhati Roy (born 1961) burst onto the literary scene with *The God of Small Things* (1997), which won the Booker Prize and became an international bestseller. After this debut, she did not publish another novel for twenty years, devoting herself instead to political activism and non-fiction writing about globalization, nuclear weapons, and social justice in India.

### The God of Small Things
Set in Kerala, southern India, the novel tells the story of fraternal twins Estha and Rahel, whose lives are shaped by the rigid Indian caste system and the personal transgressions of their family. The novel's central tragedy involves the "Love Laws" -- the social rules that dictate "who should be loved, and how. And how much."

**Key features:**
- **Lyrical prose:** Roy writes with poetic precision, often capitalizing words to create new meanings (the "Love Laws," the "History House," the "Small Things")
- **Non-linear narrative:** The story moves back and forth in time, mirroring the fragmented way memory works
- **Caste critique:** The novel powerfully depicts how the caste system destroys lives, particularly the life of Velutha, an Untouchable (Dalit) man
- **Children's perspective:** Much of the story is told from the twins' childhood viewpoint, making the cruelty of social hierarchies feel even more senseless

### The Ministry of Utmost Happiness (2017)
Roy's second novel, published twenty years after her first, is a sprawling narrative that moves between Delhi and Kashmir. It addresses religious violence, the Kashmir conflict, transgender identity, and the marginalization of those who do not fit neatly into society's categories.`,
    },
    {
      id: 'ie-5-3-text-lahiri',
      type: 'text',
      content: `## Jhumpa Lahiri: The Immigrant Experience

Jhumpa Lahiri (born 1967 in London to Bengali parents, raised in Rhode Island, USA) writes about the Indian diaspora with quiet elegance and emotional precision. Her stories focus on the everyday experiences of immigrants navigating between cultures -- the small but significant moments of dislocation, misunderstanding, and adaptation.

### Interpreter of Maladies (1999)
Lahiri's debut short story collection won the Pulitzer Prize for Fiction. The stories explore the lives of Indian and Indian American characters dealing with communication failures, cultural gaps, and the loneliness of displacement.

**Notable story: "The Third and Final Continent"**
This autobiographical story follows a Bengali man who moves from Calcutta to London to Boston, adapting to each new environment with quiet determination. It is a story of resilience, small kindnesses, and the extraordinary ordinariness of the immigrant experience.

### The Namesake (2003)
This novel follows Gogol Ganguli, the American-born son of Bengali immigrants, who struggles with his unusual name (given after the Russian writer Nikolai Gogol) and the cultural expectations of his parents. The novel sensitively portrays the generational divide between immigrants who carry their homeland with them and their children who belong more fully to the new country.

### Lahiri's Distinctive Style
Unlike Rushdie's exuberant maximalism, Lahiri writes with restraint and subtlety. Her prose is precise, her observations are sharp, and her emotional effects are achieved through understatement rather than spectacle. This stylistic difference reflects a different aspect of the diaspora experience: not the grand drama of nations but the intimate struggles of individuals trying to make a home in an unfamiliar world.`,
    },
    {
      id: 'ie-5-3-def-diaspora',
      type: 'definition',
      title: 'Diaspora Literature',
      content: `**Diaspora** (from the Greek for "scattering") refers to a population that has been dispersed from its homeland to other regions. **Diaspora literature** is writing produced by members of these dispersed communities.

**Characteristics of diaspora literature:**
- **Dual perspective:** Characters often see both their homeland and host country from the outside, belonging fully to neither
- **Nostalgia and memory:** The homeland is often idealized or remembered in fragments
- **Cultural negotiation:** Characters must navigate between the expectations of their heritage culture and the norms of their adopted home
- **Generational conflict:** First-generation immigrants and their children often have fundamentally different relationships to both cultures
- **Language as theme:** The experience of thinking in one language while speaking another is a recurring motif

**South Asian diaspora writers:** Jhumpa Lahiri, V.S. Naipaul, Hanif Kureishi, Monica Ali, Kamila Shamsie`,
    },
    {
      id: 'ie-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-5-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'What are the "Love Laws" in Arundhati Roy\'s The God of Small Things?',
        options: [
          { id: 'a', text: 'Legal marriage regulations in India', isCorrect: false },
          { id: 'b', text: 'The social rules that dictate who should be loved, how, and how much', isCorrect: true },
          { id: 'c', text: 'Religious commandments about romantic relationships', isCorrect: false },
          { id: 'd', text: 'Roy\'s personal philosophy of love', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The "Love Laws" in Roy\'s novel refer to the unwritten social rules -- particularly those enforced by the Indian caste system -- that dictate "who should be loved, and how. And how much." The novel shows how these rules destroy lives, especially through the forbidden relationship between an upper-caste woman and an Untouchable man.',
      },
    },
    {
      id: 'ie-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-5-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Compare the writing styles of Salman Rushdie and Jhumpa Lahiri. How do their different approaches reflect different aspects of the South Asian experience? Write 150-200 words.',
        hints: ['Consider Rushdie\'s "chutnification" versus Lahiri\'s restraint', 'Think about what each style is best suited to express'],
        solution: 'Rushdie\'s exuberant, maximalist style -- full of wordplay, magical realism, and hybrid language -- reflects the overwhelming sensory richness of India and the grand drama of national history. Lahiri\'s quiet, precise style reflects the intimate, personal dimension of the diaspora experience: small moments of loneliness, cultural misunderstanding, and quiet adaptation. Together, they represent complementary aspects of the South Asian literary tradition in English.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-5-3-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

South Asian literature in English is one of the richest and most dynamic literary traditions in the world today. It encompasses a vast range of styles and concerns:

- **Salman Rushdie** revolutionized the English-language novel by "chutnifying" it with South Asian languages, storytelling traditions, and magical realism. His work engages with national history on an epic scale.
- **Arundhati Roy** uses lyrical, poetic prose to examine how social structures like the caste system shape individual lives. Her work combines literary beauty with fierce political critique.
- **Jhumpa Lahiri** writes with restraint and precision about the everyday experiences of immigrants and their children, illuminating the small but significant moments of cultural dislocation.

Key themes in South Asian literature in English include: the legacy of colonialism and partition, caste and class hierarchies, the immigrant and diaspora experience, cultural hybridity and identity, and the relationship between personal stories and national histories.`,
    },
    {
      id: 'ie-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Jhumpa Lahiri\'s characters often experience a feeling of belonging to neither their parents\' homeland nor their adopted country. Write 150-200 words about a time when you felt caught between two cultures, identities, or expectations. How does Lahiri\'s concept of diaspora identity help you understand this experience?',
        hints: ['This does not have to involve immigration -- it could be about any experience of cultural in-between-ness', 'Connect your personal experience to the literary concepts we have discussed'],
        solution: 'A strong response will describe a specific personal experience of cultural negotiation and connect it thoughtfully to the concept of diaspora identity. Even students who have not experienced immigration may identify moments of being caught between generational expectations, urban/rural identities, or competing social groups.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-5-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'What does the term "diaspora literature" refer to?',
        options: [
          { id: 'a', text: 'Literature written only in the author\'s mother tongue', isCorrect: false },
          { id: 'b', text: 'Literature about travel and tourism', isCorrect: false },
          { id: 'c', text: 'Writing produced by members of communities dispersed from their homeland', isCorrect: true },
          { id: 'd', text: 'Literature that is only published in the author\'s home country', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Diaspora literature is writing produced by members of communities that have been dispersed from their homeland to other regions. It characteristically explores themes of dual identity, cultural negotiation, nostalgia, and the tension between heritage and adopted cultures.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 5.4: Caribbean and Pacific Literature
// ============================================================================

export const CHAPTER_INT_ENGELSK_5_4: TextbookChapter = {
  id: 'int-engelsk-5-4',
  courseId: 'int-engelsk',
  chapterNumber: '5.4',
  title: 'Caribbean and Pacific Literature',
  description: 'Study the literary voices of the Caribbean and the Pacific, including Walcott, Kincaid, and Ihimaera, and their exploration of identity, belonging, and colonial legacy.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analyze and interpret literary texts from the English-speaking world in a historical and cultural context',
    'discuss how texts from the English-speaking world relate to the historical period in which they were written',
  ],
  content: [
    {
      id: 'ie-5-4-intro',
      type: 'text',
      content: `# Caribbean and Pacific Literature

The Caribbean and the Pacific may seem like distant and disconnected regions, but they share important historical parallels. Both are archipelagic worlds -- collections of islands -- that experienced European colonization, the imposition of foreign languages and cultures, and the disruption of indigenous ways of life. Both have produced literary traditions that grapple with questions of identity, belonging, and the meaning of home in a world shaped by colonial history.

Caribbean literature in English draws on African, European, Indian, and indigenous Amerindian traditions, reflecting the region's extraordinary cultural diversity. Pacific literature, particularly from Aotearoa New Zealand, engages deeply with Maori and Polynesian cultural traditions while navigating the legacies of British settlement.

This chapter introduces key authors from both regions and examines the themes that unite them despite their geographic distance.`,
    },
    {
      id: 'ie-5-4-def-caribbean-lit',
      type: 'definition',
      title: 'Caribbean Literature in English',
      content: `**Caribbean literature in English** encompasses writing from the English-speaking islands and territories of the Caribbean, including Jamaica, Trinidad and Tobago, Barbados, Saint Lucia, Antigua, and Guyana (on the South American mainland but culturally Caribbean).

**Historical background:**
- The Caribbean's population is largely descended from enslaved Africans, indentured Indian laborers, European colonizers, and indigenous Amerindian peoples
- This extraordinary cultural mix has produced some of the most innovative literature in the English language
- The Windrush generation (Caribbean migrants to Britain from 1948 onward) created a significant literary diaspora in London

**Key themes:**
- The legacy of slavery and colonialism
- The search for identity in a culturally hybrid society
- Migration, exile, and the meaning of "home"
- The relationship between Creole/patois and standard English
- Resistance and self-determination

**Notable authors:** Derek Walcott, Jamaica Kincaid, V.S. Naipaul, Jean Rhys, Kamau Brathwaite, Andrea Levy, Edwidge Danticat`,
    },
    {
      id: 'ie-5-4-text-walcott',
      type: 'text',
      content: `## Derek Walcott: The Poet of Two Worlds

Derek Walcott (1930-2017) was born on the island of Saint Lucia and is widely regarded as the greatest Caribbean poet in the English language. He was awarded the Nobel Prize in Literature in 1992 "for a poetic oeuvre of great luminosity, sustained by a historical vision, the outcome of a multicultural commitment."

### The Divided Inheritance
Walcott described his identity as fundamentally divided. He was of mixed African and European heritage, raised in a British colonial education system that taught him to revere English literature while his lived experience was Caribbean. He spoke English but lived in a Creole-speaking society. His poetry emerges from this division, transforming it from a source of conflict into a source of creative power.

In his poem "A Far Cry from Africa" (1962), Walcott writes:
*"I who am poisoned with the blood of both, / Where shall I turn, divided to the vein?"*

### Omeros (1990)
Walcott's masterpiece is *Omeros*, a book-length poem that reimagines Homer's *Iliad* and *Odyssey* in a Caribbean fishing village. Local fishermen become epic heroes; the Caribbean Sea becomes a stage for mythic drama. By claiming the epic tradition for the Caribbean, Walcott asserts that his islands have stories as grand and as worthy of celebration as those of ancient Greece.

The poem also addresses the history of slavery, the destruction of indigenous Amerindian cultures, and the ongoing struggle for Caribbean self-definition. It demonstrates that the Caribbean is not a cultural backwater but a crossroads of civilizations with its own profound stories to tell.`,
    },
    {
      id: 'ie-5-4-text-kincaid',
      type: 'text',
      content: `## Jamaica Kincaid: Anger, Memory, and Colonial Reckoning

Jamaica Kincaid (born Elaine Potter Richardson, 1949) grew up in Antigua and moved to the United States as a teenager. Her writing is characterized by its fierce, rhythmic prose and its unflinching examination of colonialism's lasting psychological effects.

### A Small Place (1988)
This extended essay is one of the most powerful pieces of postcolonial writing ever produced. Addressed directly to the Western tourist visiting Antigua, Kincaid strips away the tropical paradise fantasy to reveal a society still suffering from the effects of British colonialism. She writes with controlled fury about how colonialism destroyed Antiguan culture, corrupted its institutions, and left behind a legacy of poverty and dependency.

**Notable passage:**
Kincaid addresses the tourist directly: *"You needn't let that slightly funny feeling you have from time to time about exploitation, oppression, domination develop into full-fledged unease, discomfort; you could ruin your holiday."*

### Annie John (1985)
This coming-of-age novel follows a young girl growing up in Antigua who must navigate the tension between her Caribbean identity and the British colonial education system that teaches her to admire England and devalue her own culture. The novel explores how colonial education shapes the minds and self-perceptions of colonized children.

### Kincaid's Significance
Kincaid represents a tradition of Caribbean writing that refuses to soften the impact of colonialism or make it palatable for Western readers. Her work demands that readers confront uncomfortable truths about the relationship between Western prosperity and colonial exploitation.`,
    },
    {
      id: 'ie-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What is the significance of Derek Walcott\'s epic poem Omeros?',
        options: [
          { id: 'a', text: 'It translates Homer\'s Iliad into a Caribbean language', isCorrect: false },
          { id: 'b', text: 'It reimagines Homer\'s epics in a Caribbean setting, claiming the epic tradition for Caribbean literature', isCorrect: true },
          { id: 'c', text: 'It is a historical account of Greek colonization of the Caribbean', isCorrect: false },
          { id: 'd', text: 'It argues that Caribbean literature should only follow Greek models', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Omeros reimagines Homer\'s Iliad and Odyssey in a Caribbean fishing village, transforming local fishermen into epic heroes. By doing so, Walcott asserts that the Caribbean has its own stories worthy of epic treatment, claiming a literary tradition that had been associated exclusively with European civilization.',
      },
    },
    {
      id: 'ie-5-4-text-pacific',
      type: 'text',
      content: `## Pacific Literature: Voices from Aotearoa and Beyond

The Pacific Islands have a rich tradition of oral storytelling that predates European colonization by centuries. Written literature in English from the Pacific is a relatively recent development, but it has produced works of remarkable power and beauty.

### Witi Ihimaera (born 1944), Aotearoa New Zealand
Ihimaera was the first Maori novelist. His works explore Maori identity, the relationship between Maori and Pakeha (European New Zealanders), and the survival of indigenous culture in a modern world shaped by colonization.

**The Whale Rider (1987)**
This novel, later adapted into an internationally acclaimed film (2002), tells the story of Kahu, a young Maori girl who defies traditional gender roles to claim her birthright as the leader of her people. The novel draws on Maori mythology, particularly the legend of Paikea, who rode to New Zealand on the back of a whale.

**Key themes:**
- The tension between tradition and modernity
- Gender and leadership in indigenous communities
- The living presence of mythology and ancestral spirits in everyday life
- Environmental stewardship and the spiritual connection between people and the natural world

### Patricia Grace (born 1937), Aotearoa New Zealand
Grace was one of the first Maori women to publish a collection of short stories in English. Her novel *Potiki* (1986) tells the story of a rural Maori community threatened by commercial development, exploring themes of land rights, cultural survival, and resistance.

### Albert Wendt (born 1939), Samoa
Wendt is considered the father of modern Pacific literature. His novels and essays argue for a Pacific literary identity distinct from both Western models and romanticized "noble savage" stereotypes. His essay "Towards a New Oceania" (1976) calls for Pacific writers to define themselves on their own terms.`,
    },
    {
      id: 'ie-5-4-def-pacific-lit',
      type: 'definition',
      title: 'Pacific Literature in English',
      content: `**Pacific literature in English** refers to writing by authors from the Pacific Islands and Australasia, including Aotearoa New Zealand, Samoa, Fiji, Tonga, and other Pacific Island nations.

**Key characteristics:**
- Deep connection to oral storytelling traditions and mythology
- Emphasis on the relationship between people, land, and sea
- Exploration of the impact of European colonization on indigenous cultures
- Negotiation between indigenous worldviews and Western modernity
- Strong sense of community and collective identity, in contrast to the Western emphasis on individualism

**The concept of Oceania:**
Pacific writers and thinkers use the term "Oceania" to reimagine the Pacific not as a collection of isolated, tiny islands scattered across an empty ocean but as a vast, interconnected sea of islands -- a rich and diverse region with deep historical connections.`,
    },
    {
      id: 'ie-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Both Caribbean and Pacific literatures deal with the impact of colonialism on island communities. Identify two similarities and one difference between these literary traditions based on what you have read in this chapter. Write 100-150 words.',
        hints: ['Consider themes, historical backgrounds, and cultural traditions', 'Think about what makes each region\'s experience unique'],
        solution: 'Similarities: Both deal with the legacy of British colonialism and both explore identity in culturally hybrid societies shaped by colonial history. Both also use literature to reclaim stories and identities that colonialism suppressed. A key difference is that Pacific literature draws heavily on indigenous (Maori, Polynesian) mythological and oral traditions, while Caribbean literature reflects the forced displacement of African populations through slavery and the resulting multicultural mix of African, European, Indian, and Amerindian traditions.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-5-4-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

Caribbean and Pacific literatures share important thematic concerns despite their geographic distance:

- **Derek Walcott** (Saint Lucia) used poetry to claim the epic tradition for the Caribbean, transforming local experiences into mythic narratives and exploring the divided inheritance of colonial and African heritage.
- **Jamaica Kincaid** (Antigua) writes with fierce directness about colonialism's lasting psychological and social damage, refusing to let Western readers avoid uncomfortable truths.
- **Witi Ihimaera** (Aotearoa New Zealand) was the first Maori novelist, writing about indigenous identity, the survival of Maori culture, and the living presence of mythology in the modern world.

Common themes across both traditions include: the search for identity in a post-colonial world, the tension between indigenous traditions and Western modernity, the importance of place and belonging, and the use of literature as a tool for cultural recovery and resistance.`,
    },
    {
      id: 'ie-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-5-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'What is the primary focus of Jamaica Kincaid\'s essay A Small Place?',
        options: [
          { id: 'a', text: 'A travel guide to Antigua for Western tourists', isCorrect: false },
          { id: 'b', text: 'A celebration of Caribbean beach culture', isCorrect: false },
          { id: 'c', text: 'An unflinching critique of colonialism\'s lasting effects on Antigua, addressed to the Western tourist', isCorrect: true },
          { id: 'd', text: 'A historical account of British colonization of the Caribbean', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'A Small Place directly addresses the Western tourist visiting Antigua, stripping away the tropical paradise fantasy to reveal a society still suffering from the effects of British colonialism. Kincaid demands that readers confront the relationship between their leisure and the island\'s colonial history.',
      },
    },
    {
      id: 'ie-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Walcott wrote: "I who am poisoned with the blood of both, / Where shall I turn, divided to the vein?" In 100-150 words, explain what this quotation reveals about the postcolonial experience of identity. Why might someone of mixed heritage feel "divided"?',
        hints: ['Consider the historical context of colonialism', 'Think about how cultural loyalties can conflict'],
        solution: 'Walcott describes the experience of having both colonizer and colonized heritage, feeling pulled between African and European cultural identities. This division is not merely abstract but runs through his very body ("to the vein"). The colonial legacy means that loving one part of his heritage can feel like betraying the other. This captures a central postcolonial experience: the impossibility of choosing a single, unified identity when one\'s history is defined by colonial encounter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-5-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Why is Witi Ihimaera\'s The Whale Rider significant in the context of Pacific literature?',
        options: [
          { id: 'a', text: 'It was the first novel written in the Maori language', isCorrect: false },
          { id: 'b', text: 'It draws on Maori mythology to tell a story about indigenous identity, gender, and cultural survival', isCorrect: true },
          { id: 'c', text: 'It is a non-fiction account of whale hunting in New Zealand', isCorrect: false },
          { id: 'd', text: 'It was written by the first Pakeha author to write about Maori culture', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'The Whale Rider draws on Maori mythology (the legend of Paikea) to tell the story of a young Maori girl claiming her leadership birthright. It is significant because it demonstrates how indigenous mythology remains a living force in modern Pacific life and challenges both gender norms and colonial assumptions about indigenous cultures.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// CHAPTER 5.5: Contemporary Global Literature
// ============================================================================

export const CHAPTER_INT_ENGELSK_5_5: TextbookChapter = {
  id: 'int-engelsk-5-5',
  courseId: 'int-engelsk',
  chapterNumber: '5.5',
  title: 'Contemporary Global Literature',
  description: 'Explore migration literature, climate fiction, and the diverse global voices shaping English-language literature today.',
  estimatedMinutes: 18,
  competenceGoals: [
    'analyze and interpret literary texts from the English-speaking world in a historical and cultural context',
    'reflect on the role of English in international contexts',
  ],
  content: [
    {
      id: 'ie-5-5-intro',
      type: 'text',
      content: `# Contemporary Global Literature

The twenty-first century has seen an explosion of literary voices from around the world writing in English. The boundaries between "postcolonial literature," "world literature," and "English literature" have become increasingly blurred as writers move between countries, write from multiple cultural perspectives, and address global rather than purely national concerns.

Contemporary global literature in English reflects the realities of our interconnected world: mass migration, climate change, digital communication, economic globalization, and the persistent legacies of colonialism and inequality. The authors emerging today do not fit neatly into national literary traditions. They are citizens of multiple cultures, and their literature reflects this complexity.

This chapter surveys some of the most important trends and voices in contemporary global literature in English.`,
    },
    {
      id: 'ie-5-5-def-migration-lit',
      type: 'definition',
      title: 'Migration Literature',
      content: `**Migration literature** is writing that deals with the experience of moving from one country or culture to another. It has become one of the most significant literary categories of the twenty-first century, reflecting a world in which over 280 million people live outside their country of birth.

**Key characteristics:**
- Explores the physical and psychological journey of leaving home
- Examines the tension between assimilation and cultural preservation
- Often features multilingual characters who code-switch between languages
- Addresses the bureaucratic, legal, and emotional dimensions of immigration
- Questions concepts of home, belonging, and national identity

**Distinguished from earlier diaspora literature:**
While diaspora literature often focused on communities settled in a new country, contemporary migration literature frequently depicts the journey itself -- the dangerous crossings, the refugee camps, the liminal spaces between departure and arrival.

**Key contemporary authors:** Mohsin Hamid, Chimamanda Ngozi Adichie, Viet Thanh Nguyen, NoViolet Bulawayo, Valeria Luiselli`,
    },
    {
      id: 'ie-5-5-text-migration',
      type: 'text',
      content: `## Migration Literature: The Defining Genre of Our Time

Migration has arguably become the defining human experience of the twenty-first century. Wars in Syria, Afghanistan, and Ukraine; economic hardship in parts of Africa and Latin America; climate-driven displacement across the Global South -- these forces have created the largest movement of people in human history. Literature has responded to this reality with urgency and compassion.

### Mohsin Hamid: Exit West (2017)
The Pakistani-British author Mohsin Hamid reimagined the migration narrative in *Exit West*, a novel in which magical doors suddenly appear around the world, allowing people to walk from one country to another instantly. By removing the dangerous physical journey, Hamid focuses on the emotional and social dimensions of migration: the decision to leave, the loss of the familiar, the challenge of building a new life, and the question of who "deserves" to live where.

### NoViolet Bulawayo: We Need New Names (2013)
The Zimbabwean-American writer NoViolet Bulawayo tells the story of a young girl named Darling who grows up in a shantytown in Zimbabwe before moving to the United States. The novel captures both the vibrant energy of childhood in difficult circumstances and the disorienting loneliness of immigration. Bulawayo writes in a distinctive voice that blends African English with American slang, reflecting her protagonist's hybrid identity.

### Viet Thanh Nguyen: The Sympathizer (2015)
This Pulitzer Prize-winning novel by a Vietnamese-American author is narrated by a communist spy who flees to the United States after the fall of Saigon in 1975. The novel is simultaneously a spy thriller, a satire of American culture, and a meditation on the refugee experience. It challenges the "grateful immigrant" narrative by presenting a protagonist who is deeply ambivalent about his adopted country.`,
    },
    {
      id: 'ie-5-5-example-hamid',
      type: 'example',
      title: 'Example: Magical Realism as a Tool for Exploring Migration',
      problem: 'How does Mohsin Hamid use magical doors in Exit West to change the way we think about migration?',
      solution: `In *Exit West*, magical doors appear that allow people to walk instantly from war-torn cities to new countries. This fantastical device serves several important literary purposes:

**1. It removes the dangerous journey**
By eliminating the perilous Mediterranean crossings and desert treks, Hamid focuses attention on what comes before and after the journey -- the agonizing decision to leave and the challenge of arrival.

**2. It universalizes the experience**
The doors make migration available to everyone, not just those who can afford smugglers or have the right connections. This forces readers to consider: if everyone could migrate, would we? What would the world look like?

**3. It reveals attitudes toward migrants**
The host countries' reactions to the doors -- building walls, deploying armies, negotiating -- mirror real-world responses to migration, but stripped of the "border security" justifications that usually accompany them.

**4. It emphasizes that migration is a human constant**
The novel suggests that all humans are migrants in a sense -- we all move through life, leaving behind versions of ourselves and the places we have known.`,
    },
    {
      id: 'ie-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ie-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'What distinguishes contemporary migration literature from earlier diaspora literature?',
        options: [
          { id: 'a', text: 'Migration literature is only written by men', isCorrect: false },
          { id: 'b', text: 'Migration literature often focuses on the journey itself and the liminal spaces between departure and arrival', isCorrect: true },
          { id: 'c', text: 'Diaspora literature was written in English while migration literature is not', isCorrect: false },
          { id: 'd', text: 'There is no meaningful difference between the two categories', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'While earlier diaspora literature often focused on settled immigrant communities navigating between cultures, contemporary migration literature frequently depicts the journey itself -- the dangerous crossings, the refugee camps, the legal limbo, and the liminal spaces between departure and arrival.',
      },
    },
    {
      id: 'ie-5-5-text-climate',
      type: 'text',
      content: `## Climate Fiction: Literature for a Warming World

A rapidly growing literary category, **climate fiction** (often abbreviated as "cli-fi") addresses the causes and consequences of climate change. As the climate crisis has intensified, writers have increasingly turned to fiction as a way of making the abstract reality of global warming feel personal and urgent.

### Why Climate Fiction Matters
Scientific reports and statistics about rising temperatures and sea levels can feel abstract and distant. Fiction has the power to make these realities feel immediate and personal by showing how climate change affects individual lives, communities, and relationships. A novel about a family losing their home to rising seas creates emotional engagement that a graph cannot.

### Key Works

**Amitav Ghosh: The Great Derangement (2016)**
This non-fiction work by the Indian writer Amitav Ghosh argues that the literary establishment has been strangely reluctant to engage with climate change. He calls on writers to address the climate crisis as the defining issue of our time, suggesting that future generations will look back at our era's literature and wonder at its silence on the most important issue it faced.

**Richard Powers: The Overstory (2018)**
This Pulitzer Prize-winning novel interweaves the stories of nine characters whose lives are transformed by trees. It is a monumental work about humanity's relationship with the natural world and the ecological destruction being wrought by short-sighted economic priorities.

**Jenny Offill: Weather (2020)**
A librarian in New York becomes overwhelmed by climate anxiety while trying to maintain her ordinary life. The novel captures the psychological experience of living in a time of ecological crisis -- the way climate dread seeps into everyday existence.`,
    },
    {
      id: 'ie-5-5-def-clifi',
      type: 'definition',
      title: 'Climate Fiction (Cli-Fi)',
      content: `**Climate fiction** (cli-fi) is a genre of literature that deals with the effects of climate change and environmental destruction on human societies. It can be set in the present, near future, or distant future.

**Types of cli-fi:**
- **Speculative/dystopian:** Set in a future devastated by climate change (e.g., flooded cities, uninhabitable regions)
- **Contemporary realism:** Set in the present, depicting current climate impacts on communities and individuals
- **Historical:** Looking at past ecological changes and drawing parallels to the present
- **Activist:** Literature explicitly designed to inspire environmental action

**Key themes:**
- The relationship between humans and the natural world
- Environmental justice -- how climate change disproportionately affects the poor and the Global South
- The tension between economic growth and ecological sustainability
- Climate anxiety and its psychological effects
- The failure of political systems to address the crisis

**Important distinction:** Climate fiction is not the same as science fiction. While sci-fi often imagines speculative technologies and distant futures, cli-fi typically engages with scientifically grounded scenarios and near-term realities.`,
    },
    {
      id: 'ie-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ie-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'According to Amitav Ghosh in The Great Derangement, what has been the literary establishment\'s main failing regarding climate change?',
        options: [
          { id: 'a', text: 'Too many novels have been written about climate change', isCorrect: false },
          { id: 'b', text: 'Literature has been strangely reluctant to engage with the climate crisis as a central subject', isCorrect: true },
          { id: 'c', text: 'Climate change is not an appropriate subject for literature', isCorrect: false },
          { id: 'd', text: 'Only science fiction writers have addressed climate change', isCorrect: false },
        ],
        correctAnswer: 'b',
        solution: 'Ghosh argues that "serious" literary fiction has been remarkably reluctant to engage with climate change, treating it as a subject better suited to science fiction. He suggests that this failure to address the defining crisis of our era will baffle future generations.',
      },
    },
    {
      id: 'ie-5-5-text-global-voices',
      type: 'text',
      content: `## Global Voices Today

Contemporary English-language literature is more diverse and geographically dispersed than ever before. Some of the most exciting literary voices today come from parts of the world that were previously underrepresented in global literary culture.

### Ocean Vuong (born 1988), Vietnam/USA
A Vietnamese-American poet and novelist, Vuong's debut novel *On Earth We're Briefly Gorgeous* (2019) is written as a letter from a Vietnamese-American son to his illiterate mother. It explores the refugee experience, intergenerational trauma, queerness, and the power of language to bridge the gaps between cultures and generations.

### Akwaeke Emezi (born 1987), Nigeria/USA
Emezi, who identifies as non-binary and ogbanje (an Igbo spirit), writes novels that blend Nigerian mythology with contemporary issues of gender, identity, and belonging. *Freshwater* (2018) reimagines the ogbanje tradition in a modern American university setting.

### Leila Aboulela (born 1964), Sudan/UK
Aboulela writes about Muslim identity and faith in a secular Western world, a perspective that is often absent from mainstream English-language literature. Her novels, including *Minaret* (2005) and *Bird Summons* (2019), present Islam not as a political issue but as a lived spiritual experience.

### What Connects These Voices
Despite their diverse backgrounds, these contemporary writers share certain characteristics:
- They write across cultures, refusing to be confined to a single national tradition
- They challenge Western literary conventions by incorporating non-Western storytelling forms
- They address global issues (migration, identity, environment) while grounding their stories in specific, local experiences
- They expand the range of what English-language literature can be and who it can represent`,
    },
    {
      id: 'ie-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ie-5-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Choose one of the three contemporary authors discussed in the "Global Voices Today" section (Ocean Vuong, Akwaeke Emezi, or Leila Aboulela). In 150-200 words, explain why their particular perspective is important for contemporary English-language literature. What voice or experience do they bring that might otherwise be absent?',
        hints: ['Consider what cultural perspective the author represents', 'Think about what themes they address that other authors might not'],
        solution: 'A strong response will identify the specific cultural perspective the chosen author brings (e.g., Vuong\'s Vietnamese refugee experience, Emezi\'s Igbo spirituality and non-binary identity, or Aboulela\'s portrayal of Islamic faith as lived experience) and explain why this perspective enriches English-language literature by representing experiences and worldviews that are often absent or stereotyped.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'ie-5-5-text-summary',
      type: 'text',
      title: 'Summary',
      content: `## Summary

Contemporary global literature in English reflects a world of unprecedented movement, connection, and crisis:

- **Migration literature** has emerged as perhaps the defining genre of the twenty-first century, with writers like Mohsin Hamid, NoViolet Bulawayo, and Viet Thanh Nguyen exploring the physical, emotional, and political dimensions of human movement across borders.
- **Climate fiction** is a rapidly growing literary category that makes the abstract reality of climate change feel personal and urgent, challenging what Amitav Ghosh calls literature's "great derangement" -- its strange reluctance to address the defining crisis of our era.
- **New global voices** from previously underrepresented communities are expanding the range of English-language literature, bringing perspectives rooted in Vietnamese refugee experience, Igbo spirituality, Muslim faith, and many other traditions.

What unites these diverse writers is their refusal to be confined by national borders or literary conventions. They write across cultures, incorporate non-Western storytelling forms, and use the English language in ways that reflect their multilingual, multicultural realities. They are creating a genuinely global literature for a genuinely global age.`,
    },
    {
      id: 'ie-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ie-5-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Which of the following best describes "cli-fi" (climate fiction)?',
        options: [
          { id: 'a', text: 'Science fiction set on other planets with different climates', isCorrect: false },
          { id: 'b', text: 'Non-fiction scientific reports about global warming', isCorrect: false },
          { id: 'c', text: 'Literature that deals with the causes and consequences of climate change on human societies', isCorrect: true },
          { id: 'd', text: 'Weather forecasts presented in narrative form', isCorrect: false },
        ],
        correctAnswer: 'c',
        solution: 'Climate fiction (cli-fi) is a genre of literature that addresses the effects of climate change and environmental destruction on human societies. Unlike science fiction, it typically engages with scientifically grounded scenarios and can be set in the present, near future, or historical past.',
      },
    },
    {
      id: 'ie-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ie-5-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Reflect on the entire section on "Literature from the English-Speaking World" (chapters 5.1-5.5). Choose two authors from different chapters and write 200-250 words comparing how they use the English language to express their cultural identity. Consider: How does their use of English differ from standard British or American English? What does their style tell us about their cultural background and perspective?',
        hints: [
          'You might compare Rushdie\'s "chutnification" with Achebe\'s use of Igbo proverbs',
          'Consider Walcott\'s blend of Caribbean and classical traditions, or Bulawayo\'s hybrid voice',
          'Think about what each author\'s style reveals about their relationship with English',
        ],
        solution: 'A strong response will select two authors from different chapters (e.g., Achebe from 5.2 and Rushdie from 5.3, or Walcott from 5.4 and Bulawayo from 5.5) and compare their distinctive approaches to the English language. Key observations might include how each author transforms English to carry non-Western cultural content, how their styles reflect different relationships with the colonial inheritance of English, and what their linguistic choices reveal about their cultural identities.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EXPORT ALL CHAPTERS IN SECTION 5
// ============================================================================

export const INT_ENGELSK_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_INT_ENGELSK_5_1,
  CHAPTER_INT_ENGELSK_5_2,
  CHAPTER_INT_ENGELSK_5_3,
  CHAPTER_INT_ENGELSK_5_4,
  CHAPTER_INT_ENGELSK_5_5,
];
