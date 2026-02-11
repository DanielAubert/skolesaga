/* eslint-disable */
// @ts-nocheck

/**
 * Samfunnsfaglig engelsk - Del 8: Citizenship and Participation
 * Chapters 8.1-8.5
 *
 * Covers LK20 competence goals:
 * - explore and discuss what it means to be an active citizen in a democratic society
 * - reflect on how young people can participate and influence society at local, national, and global levels
 * - analyse and discuss the role of civil society and volunteering in democratic societies
 * - discuss how globalisation affects citizenship, identity, and belonging
 * - present and discuss current issues related to democratic participation in English-speaking countries
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Chapter 8.1: Active Citizenship
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_8_1: TextbookChapter = {
  id: 'samf-engelsk-8-1',
  courseId: 'samf-engelsk',
  chapterNumber: '8.1',
  title: 'Active Citizenship',
  description: 'What does it mean to be an active citizen? This chapter explores the concept of citizenship, the rights and responsibilities that come with it, and what active participation in a community looks like in practice.',
  estimatedMinutes: 22,
  competenceGoals: [
    'explore and discuss what it means to be an active citizen in a democratic society',
    'present and discuss current issues related to democratic participation in English-speaking countries',
  ],
  keyTerms: [
    { term: 'Active citizenship', definition: 'The practice of participating in the life of a community in order to improve conditions for others and shape the future of society' },
    { term: 'Civic duty', definition: 'The responsibilities and obligations that citizens have toward their community and government, such as voting, paying taxes, and obeying laws' },
    { term: 'Social contract', definition: 'The implicit agreement among members of a society to cooperate for shared benefits, often by giving up some freedoms in exchange for protection of remaining rights' },
    { term: 'Civic engagement', definition: 'Individual and collective actions designed to identify and address issues of public concern, ranging from community service to political involvement' },
    { term: 'Informed citizen', definition: 'A person who stays up to date on public affairs, seeks out reliable information, and uses that knowledge to make reasoned decisions about civic matters' },
  ],
  content: [
    {
      id: 'se-8-1-intro',
      type: 'text',
      content: `## What Makes a Citizen?

Citizenship is more than a legal status. It is about belonging to a community, sharing in its values, and taking responsibility for its future. In democratic societies, citizens are not simply governed -- they are expected to govern themselves through participation and engagement.

In this chapter, you will learn:
- The difference between passive and active citizenship
- Rights and responsibilities that define citizenship
- How the social contract shapes the relationship between individuals and society
- Practical examples of active citizenship in English-speaking countries`,
    },
    {
      id: 'se-8-1-def-1',
      type: 'definition',
      title: 'Active Citizenship',
      content: `**Active citizenship** refers to the practice of participating in the life of a community in order to improve conditions for others and help shape the future of society. It goes beyond simply holding a passport or being born in a country -- it means engaging with the world around you through informed and deliberate action.`,
    },
    {
      id: 'se-8-1-example-1',
      type: 'example',
      title: 'Passive vs. Active Citizenship',
      problem: 'What is the difference between a passive citizen and an active citizen?',
      solution: `**Passive citizen:**
- Obeys the law and pays taxes
- Votes occasionally, or not at all
- Stays informed through casual media consumption
- Accepts decisions made by authorities without question

**Active citizen:**
- Votes in every election and encourages others to do the same
- Attends town hall meetings or school board sessions
- Volunteers for community organisations
- Writes to elected representatives about issues they care about
- Stays critically informed and participates in public debate

Both passive and active citizens are legitimate members of society, but democracies function best when citizens take an active role. As the saying goes: "Democracy is not a spectator sport."`,
    },
    {
      id: 'se-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Which of the following best describes an active citizen?',
        options: [
          { id: 'a', text: 'Someone who pays their taxes and follows the law', isCorrect: false },
          { id: 'b', text: 'Someone who holds citizenship in more than one country', isCorrect: false },
          { id: 'c', text: 'Someone who participates in community life and works to improve conditions for others', isCorrect: true },
          { id: 'd', text: 'Someone who has lived in a country for at least 20 years', isCorrect: false },
        ],
        solution: 'Active citizenship goes beyond legal obligations like paying taxes. It involves deliberately participating in community life -- volunteering, voting, speaking up on issues, and working to improve society for everyone.',
      },
    },
    {
      id: 'se-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        task: 'What is the "social contract" in the context of citizenship?',
        options: [
          { id: 'a', text: 'A written document that all citizens must sign when they turn 18', isCorrect: false },
          { id: 'b', text: 'An implicit agreement where citizens give up some freedoms in exchange for protection and public services', isCorrect: true },
          { id: 'c', text: 'A contract between employers and employees about workplace rights', isCorrect: false },
          { id: 'd', text: 'An agreement between countries about trade and immigration', isCorrect: false },
        ],
        solution: 'The social contract is an idea developed by thinkers like Thomas Hobbes, John Locke, and Jean-Jacques Rousseau. It refers to the unwritten agreement between citizens and their government: citizens accept certain rules and responsibilities, and in return, the government provides protection, public services, and the rule of law.',
      },
    },
    {
      id: 'se-8-1-def-2',
      type: 'definition',
      title: 'Civic Duty',
      content: `**Civic duty** refers to the responsibilities that come with being a member of a democratic society. These include both legal obligations (such as paying taxes, serving on juries, and obeying laws) and moral obligations (such as staying informed, voting, and contributing to the common good). While not all civic duties are enforced by law, they are considered essential for a well-functioning democracy.`,
    },
    {
      id: 'se-8-1-text-1',
      type: 'text',
      content: `### Rights and Responsibilities

In every democratic society, citizenship comes with both rights and responsibilities. These two sides of the coin are closely connected.

**Fundamental rights:**
- Freedom of speech and expression
- Freedom of religion and belief
- The right to vote and stand for election
- The right to a fair trial
- The right to education and healthcare

**Corresponding responsibilities:**
- Respecting the rights and freedoms of others
- Staying informed about public issues
- Voting in elections
- Paying taxes
- Obeying the law
- Serving on juries when called upon (in some countries)

**The balance:** Rights without responsibilities lead to chaos. Responsibilities without rights lead to oppression. A healthy democracy requires both.

**Example from the UK:** In Britain, freedom of speech is protected, but citizens also have a responsibility not to incite hatred or violence. The Equality Act 2010 sets out protections against discrimination, showing how rights come with boundaries that protect everyone.

**Example from the USA:** The First Amendment guarantees freedom of speech, press, and assembly. However, the famous Supreme Court ruling in Schenck v. United States (1919) established that speech creating a "clear and present danger" is not protected -- illustrating the limits of rights in a democratic society.`,
    },
    {
      id: 'se-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        task: 'Explain the relationship between rights and responsibilities in a democracy. Use at least one specific example from an English-speaking country in your answer.',
        hints: [
          'Think about how rights and responsibilities are two sides of the same coin.',
          'Consider examples like freedom of speech and its limits, or the right to vote and the responsibility to stay informed.',
        ],
        solution: 'A strong answer will explain that rights and responsibilities are interconnected in a democracy. Citizens receive rights such as freedom of speech, the right to vote, and protection under the law. In return, they are expected to fulfil responsibilities such as obeying laws, paying taxes, and participating in civic life. For example, in the United States, citizens have the right to free speech under the First Amendment, but they also have the responsibility not to use that freedom to incite violence or spread dangerous misinformation. Similarly, in the UK, citizens have the right to vote, but there is also a civic expectation that they inform themselves about candidates and issues before casting their ballot.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Compare the concept of citizenship in two different English-speaking countries (e.g. the USA, the UK, Canada, or Australia). What are the similarities and differences in how citizenship is understood and practised?',
        hints: [
          'Think about how citizenship is acquired, what rights and duties come with it, and how civic culture differs.',
          'Consider differences in voting requirements, national service, and cultural attitudes toward patriotism.',
        ],
        solution: 'A strong answer might compare, for example, the USA and the UK. In the USA, citizenship is heavily tied to the Constitution and the Bill of Rights. American civic culture emphasises patriotism, the Pledge of Allegiance, and individual freedoms. Naturalised citizens must pass a civics test. In the UK, citizenship is tied to being a "British subject" or holding "British citizenship" under the British Nationality Act 1981. The UK does not have a codified constitution, and civic culture is less focused on patriotic display. Both countries grant citizens the right to vote, but voting is not compulsory in either. Australia, by contrast, has compulsory voting, reflecting a different understanding of civic duty.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-1-text-2',
      type: 'text',
      content: `### Citizenship in Practice

Active citizenship looks different depending on where you live and what issues matter to you. Here are some ways people practise active citizenship:

**At the local level:**
- Attending town council meetings
- Volunteering at food banks or shelters
- Organising neighbourhood clean-ups
- Joining a parent-teacher association

**At the national level:**
- Voting in general elections
- Contacting elected representatives
- Participating in peaceful protests
- Supporting or joining political parties

**At the global level:**
- Supporting international charities
- Raising awareness about global issues
- Participating in campaigns for human rights
- Making ethical consumer choices

Active citizenship does not require grand gestures. Small, consistent actions -- like staying informed, treating others with respect, and participating when opportunities arise -- are the foundation of a healthy democracy.`,
    },
    {
      id: 'se-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'Think about your own community. Identify three ways in which you could practise active citizenship. For each one, explain what you would do and why it matters.',
        hints: [
          'Active citizenship can be practised at school, in your neighbourhood, or online.',
          'Think about problems or issues you see around you that you could help address.',
        ],
        solution: 'Answers will vary, but a strong response should identify three specific, realistic actions and explain their significance. Examples might include: 1) Organising a recycling drive at school to reduce waste -- this matters because environmental responsibility is a form of civic engagement. 2) Volunteering at a local refugee centre to help newcomers integrate -- this matters because it builds community and demonstrates solidarity. 3) Creating a social media account to share reliable information about local elections -- this matters because informed voting is essential for democracy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        task: 'Some people argue that voting should be compulsory, as it is in Australia. Write a short argumentative text (150-200 words) in which you argue for or against compulsory voting.',
        hints: [
          'Consider the arguments on both sides: voter turnout, individual freedom, civic responsibility.',
          'Use examples from countries with and without compulsory voting to support your argument.',
        ],
        solution: 'A strong response will present a clear argument with supporting evidence. For compulsory voting: it ensures higher turnout, gives all citizens a voice, reduces the influence of extreme groups, and reflects the idea that voting is a civic duty (Australia has over 90% turnout). Against compulsory voting: it infringes on individual freedom, may lead to uninformed voting, people should have the right to abstain, and democracy should include the freedom not to participate (the USA and UK allow voluntary voting as an expression of freedom). The best answers will acknowledge counterarguments and explain why their position is stronger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-1-summary',
      type: 'text',
      content: `## Summary

In this chapter, you have learned:

- **Active citizenship** means participating in community life and working to improve society
- Citizenship comes with both **rights** (freedom of speech, voting) and **responsibilities** (paying taxes, obeying laws, staying informed)
- The **social contract** is an implicit agreement between citizens and the state
- Active citizenship can be practised at local, national, and global levels
- Democracies depend on citizens who are informed and engaged

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Active citizenship | Participating in community life to improve society |
| Civic duty | The responsibilities citizens have toward their community |
| Social contract | The implicit agreement between citizens and government |
| Informed citizen | A person who stays up to date on public affairs |
| Civic engagement | Actions designed to address issues of public concern |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Chapter 8.2: Democratic Participation
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_8_2: TextbookChapter = {
  id: 'samf-engelsk-8-2',
  courseId: 'samf-engelsk',
  chapterNumber: '8.2',
  title: 'Democratic Participation',
  description: 'How do citizens participate in democratic processes? This chapter examines different forms of democratic participation, from voting and elections to protests and digital activism, with a focus on English-speaking countries.',
  estimatedMinutes: 25,
  competenceGoals: [
    'explore and discuss what it means to be an active citizen in a democratic society',
    'present and discuss current issues related to democratic participation in English-speaking countries',
  ],
  keyTerms: [
    { term: 'Representative democracy', definition: 'A system of government where citizens elect representatives to make decisions on their behalf, as practised in the UK, USA, and most democracies' },
    { term: 'Direct democracy', definition: 'A system where citizens vote directly on laws and policies rather than electing representatives, often used in referendums and ballot initiatives' },
    { term: 'Voter turnout', definition: 'The percentage of eligible voters who actually cast a ballot in an election, often used as a measure of democratic health' },
    { term: 'Lobbying', definition: 'The act of attempting to influence decisions made by government officials, often carried out by organised interest groups or corporations' },
    { term: 'Grassroots movement', definition: 'A political or social movement driven by ordinary people in a community rather than by political leaders or established organisations' },
  ],
  content: [
    {
      id: 'se-8-2-intro',
      type: 'text',
      content: `## Making Your Voice Heard

Democracy means "rule by the people," but how exactly do people rule? In modern societies, there are many different ways to participate in democratic processes -- from casting a ballot to marching in a protest, from writing to your MP to signing an online petition.

In this chapter, you will learn:
- The difference between representative and direct democracy
- How elections and voting work in major English-speaking countries
- Alternative forms of democratic participation beyond voting
- The challenges facing democratic participation today`,
    },
    {
      id: 'se-8-2-def-1',
      type: 'definition',
      title: 'Representative Democracy',
      content: `**Representative democracy** is a system of government in which citizens elect representatives to make political decisions on their behalf. Most modern democracies, including the United Kingdom, the United States, Canada, and Australia, use this system. Citizens participate primarily through voting in elections, but can also influence their representatives through letters, petitions, and public pressure.`,
    },
    {
      id: 'se-8-2-example-1',
      type: 'example',
      title: 'Comparing Electoral Systems',
      problem: 'How do different English-speaking countries organise their elections?',
      solution: `**United Kingdom:**
- Parliamentary system with a constitutional monarchy
- First-Past-the-Post (FPTP) voting in general elections
- Citizens vote for a local Member of Parliament (MP)
- The party with the most seats forms the government
- Elections held at least every 5 years

**United States:**
- Presidential system with separation of powers
- Citizens vote for a president, senators, and representatives
- Electoral College system for presidential elections
- Elections held on fixed dates (presidential every 4 years)
- Primaries and caucuses to select party candidates

**Australia:**
- Parliamentary system with compulsory voting
- Preferential (ranked-choice) voting
- Citizens must register and vote or face a fine
- Voter turnout regularly exceeds 90%

**Canada:**
- Parliamentary system similar to the UK
- FPTP voting system
- Voluntary voting with relatively high turnout
- Multicultural society with bilingual political traditions`,
    },
    {
      id: 'se-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'What is a key feature of representative democracy?',
        options: [
          { id: 'a', text: 'Citizens vote directly on every law and policy', isCorrect: false },
          { id: 'b', text: 'Citizens elect representatives who make political decisions on their behalf', isCorrect: true },
          { id: 'c', text: 'Only wealthy citizens are allowed to participate in government', isCorrect: false },
          { id: 'd', text: 'The military makes all political decisions', isCorrect: false },
        ],
        solution: 'In a representative democracy, citizens participate primarily by electing representatives (such as MPs, senators, or presidents) who then make laws and policies. This is different from direct democracy, where citizens vote on issues themselves.',
      },
    },
    {
      id: 'se-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-8-2-ex-2',
        number: '8.2.2',
        type: 'multiple-choice',
        task: 'Which country has compulsory voting for all eligible citizens?',
        options: [
          { id: 'a', text: 'The United Kingdom', isCorrect: false },
          { id: 'b', text: 'The United States', isCorrect: false },
          { id: 'c', text: 'Canada', isCorrect: false },
          { id: 'd', text: 'Australia', isCorrect: true },
        ],
        solution: 'Australia introduced compulsory voting in 1924. All eligible citizens must register and vote in federal elections, or they face a fine. This has resulted in consistently high voter turnout, usually above 90%. Neither the UK, the USA, nor Canada require citizens to vote.',
      },
    },
    {
      id: 'se-8-2-def-2',
      type: 'definition',
      title: 'Grassroots Movement',
      content: `A **grassroots movement** is a political or social movement that is driven by ordinary people within a community, rather than by traditional power structures such as political parties, corporations, or wealthy donors. Grassroots movements often start small and grow through word of mouth, community organising, and social media. Examples include the Civil Rights Movement in the USA and the Fridays for Future climate movement.`,
    },
    {
      id: 'se-8-2-text-1',
      type: 'text',
      content: `### Beyond the Ballot Box

Voting is the most recognised form of democratic participation, but it is far from the only one. In fact, many of the most significant changes in democratic societies have come from people who went beyond simply casting a vote.

**Protests and demonstrations:**
- The Civil Rights Movement in the 1950s and 60s used marches, sit-ins, and boycotts to fight racial segregation in the USA
- The Suffragette movement in the UK fought for women's right to vote through protests, hunger strikes, and civil disobedience
- The Black Lives Matter movement has organised protests worldwide to demand racial justice

**Petitions and campaigns:**
- Online platforms like Change.org allow millions to sign petitions
- In the UK, petitions with over 100,000 signatures must be considered for debate in Parliament
- Letter-writing campaigns to MPs and members of Congress remain an effective tool

**Community organising:**
- Neighbourhood associations and community groups address local issues
- Food banks, mutual aid networks, and volunteer organisations strengthen communities
- Citizens' assemblies bring ordinary people together to discuss policy issues

**Digital activism:**
- Social media amplifies voices that might otherwise go unheard
- Hashtag campaigns raise awareness about important issues
- Online fundraising supports causes and candidates
- Digital tools make it easier to organise and mobilise`,
    },
    {
      id: 'se-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        task: 'Choose one grassroots movement from an English-speaking country (e.g. the Civil Rights Movement, the Suffragette movement, Black Lives Matter, or the climate movement). Explain how ordinary citizens participated and what impact the movement had.',
        hints: [
          'Focus on the methods used by ordinary people, not just the leaders.',
          'Consider both short-term and long-term impacts of the movement.',
        ],
        solution: 'A strong answer will describe a specific movement, explain the methods ordinary citizens used (protests, boycotts, civil disobedience, community organising), and assess the impact. For example, the Civil Rights Movement: ordinary citizens participated through the Montgomery Bus Boycott (1955-56), lunch counter sit-ins, the March on Washington (1963), and voter registration drives. The impact included the Civil Rights Act of 1964, the Voting Rights Act of 1965, and lasting changes to American society regarding racial equality. The movement showed that sustained, peaceful action by ordinary people can change laws and attitudes.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Discuss the advantages and disadvantages of digital activism (e.g. online petitions, hashtag campaigns, social media advocacy) compared to traditional forms of democratic participation.',
        hints: [
          'Think about reach, accessibility, depth of engagement, and effectiveness.',
          'Consider the concept of "slacktivism" -- is clicking a button the same as showing up?',
        ],
        solution: 'A strong answer will present a balanced discussion. Advantages of digital activism: wider reach, lower barriers to participation, ability to mobilise quickly, gives voice to marginalised groups, transcends geographical boundaries. Disadvantages: risk of "slacktivism" (superficial engagement without real commitment), spread of misinformation, echo chambers that limit exposure to opposing views, algorithms that can manipulate public opinion, digital divide that excludes some groups. The best answers will argue that digital activism is most effective when combined with traditional participation, not as a replacement for it.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-2-text-2',
      type: 'text',
      content: `### Challenges to Democratic Participation

Despite the many ways citizens can participate, modern democracies face significant challenges:

**Declining voter turnout:**
- In many countries, fewer people are voting, especially young people
- The 2024 UK general election saw 60% turnout, down from 84% in 1950
- US presidential elections typically see around 60% turnout

**Political polarisation:**
- Growing divisions between political groups make compromise difficult
- Social media algorithms can create echo chambers
- Extreme voices get amplified while moderate positions are drowned out

**Misinformation and disinformation:**
- False information spreads quickly online
- "Fake news" makes it harder for citizens to make informed decisions
- Foreign interference in elections has become a growing concern

**Inequality of access:**
- Not everyone has equal opportunity to participate
- Voter suppression tactics in some countries target minority communities
- Lobbying gives wealthy interests more political influence
- Digital divide means not everyone benefits from online participation

These challenges do not mean democracy is failing, but they do mean that active, informed citizenship is more important than ever.`,
    },
    {
      id: 'se-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Voter turnout has been declining in many English-speaking countries. Suggest three concrete measures that could increase voter participation, and explain why each might be effective.',
        hints: [
          'Think about what prevents people from voting: access, motivation, information, trust.',
          'Look at what works in countries with high turnout.',
        ],
        solution: 'A strong answer might suggest: 1) Making Election Day a public holiday, so working people can vote without losing income -- effective because work obligations are a common reason for not voting. 2) Automatic voter registration when citizens turn 18, removing the administrative barrier -- effective because many eligible voters are simply not registered. 3) Introducing ranked-choice voting to give voters more meaningful choices -- effective because some people do not vote because they feel no candidate represents them. Other strong suggestions include compulsory voting (as in Australia), expanding early voting and postal voting, and improving civic education in schools.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-8-2-ex-6',
        number: '8.2.6',
        type: 'classic',
        task: 'Compare how democratic participation works in one English-speaking country with how it works in Norway. What are the main similarities and differences?',
        hints: [
          'Consider voting systems, turnout rates, the role of political parties, and forms of participation beyond voting.',
          'Think about cultural differences in how citizens relate to their government.',
        ],
        solution: 'A strong answer will identify specific similarities and differences. For example, comparing the USA and Norway: Similarities -- both are democracies where citizens elect representatives, both protect freedom of speech and assembly, both have multiple political parties. Differences -- Norway has proportional representation while the USA uses FPTP and the Electoral College; Norway has higher voter turnout (around 78% vs. 60%); Norway has a multi-party system while the USA is dominated by two parties; Norwegian election campaigns are shorter and less expensive; Norway has a stronger welfare state that supports equal participation. The best answers will reflect on what these differences reveal about democratic culture in each country.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-2-summary',
      type: 'text',
      content: `## Summary

In this chapter, you have learned:

- **Representative democracy** is the most common form, where citizens elect representatives
- **Voting** is a fundamental form of participation, but not the only one
- **Grassroots movements** and protests have driven major social changes
- **Digital activism** offers new opportunities but also new challenges
- Modern democracies face challenges including declining turnout, polarisation, and misinformation

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Representative democracy | Citizens elect representatives to govern |
| Direct democracy | Citizens vote directly on laws and policies |
| Voter turnout | Percentage of eligible voters who cast a ballot |
| Grassroots movement | Movements driven by ordinary people, not elites |
| Lobbying | Attempting to influence government decisions |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Chapter 8.3: Civil Society and Volunteering
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_8_3: TextbookChapter = {
  id: 'samf-engelsk-8-3',
  courseId: 'samf-engelsk',
  chapterNumber: '8.3',
  title: 'Civil Society and Volunteering',
  description: 'What role do non-governmental organisations, charities, and volunteers play in democratic societies? This chapter explores the concept of civil society and examines how volunteering strengthens communities in English-speaking countries.',
  estimatedMinutes: 23,
  competenceGoals: [
    'analyse and discuss the role of civil society and volunteering in democratic societies',
    'explore and discuss what it means to be an active citizen in a democratic society',
  ],
  keyTerms: [
    { term: 'Civil society', definition: 'The space between the government and the individual, made up of organisations, associations, and groups that operate independently of the state' },
    { term: 'NGO (Non-Governmental Organisation)', definition: 'An organisation that operates independently of government, typically working on social, environmental, or humanitarian issues' },
    { term: 'Volunteering', definition: 'The act of freely giving time and effort to help others or contribute to a cause without financial compensation' },
    { term: 'Social capital', definition: 'The networks of relationships and trust among people in a society that enable them to cooperate and work together effectively' },
    { term: 'Philanthropy', definition: 'The desire to promote the welfare of others, often expressed through charitable donations of money, time, or resources' },
  ],
  content: [
    {
      id: 'se-8-3-intro',
      type: 'text',
      content: `## The Space Between Government and the Individual

Not everything in a democracy happens through government. Between the state and the individual, there is a rich landscape of organisations, groups, and movements that make up what we call "civil society." From charities and faith groups to sports clubs and volunteer organisations, civil society is where much of the real work of community-building takes place.

In this chapter, you will learn:
- What civil society is and why it matters for democracy
- The role of NGOs and charities in English-speaking countries
- How volunteering strengthens communities and individuals
- Debates about the relationship between civil society and the state`,
    },
    {
      id: 'se-8-3-def-1',
      type: 'definition',
      title: 'Civil Society',
      content: `**Civil society** refers to the wide range of organisations, groups, and associations that operate in the space between the government and the private sector. These include charities, non-governmental organisations (NGOs), trade unions, religious groups, community organisations, professional associations, and advocacy groups. A healthy civil society is considered essential for a functioning democracy because it provides channels for citizens to organise, express their views, and hold power to account.`,
    },
    {
      id: 'se-8-3-example-1',
      type: 'example',
      title: 'Civil Society in Action: The Red Cross',
      problem: 'How does a civil society organisation like the Red Cross operate across English-speaking countries?',
      solution: `**The Red Cross / Red Crescent Movement:**
The Red Cross is one of the world's largest humanitarian organisations, operating in virtually every country.

**In the UK (British Red Cross):**
- Provides emergency response during natural disasters and crises
- Supports refugees and asylum seekers with orientation and language help
- Runs first aid training programmes in communities and schools

**In the USA (American Red Cross):**
- Manages the nation's largest blood donation programme
- Provides disaster relief across the country (hurricanes, wildfires, floods)
- Operates as a key partner with the federal government during emergencies

**In Australia (Australian Red Cross):**
- Provides humanitarian aid during bushfires and floods
- Runs programmes for Aboriginal and Torres Strait Islander communities
- Supports migrants and refugees

**Why it matters:**
The Red Cross fills gaps that government cannot or does not address. It relies heavily on volunteers -- over 17 million globally -- demonstrating how civil society depends on ordinary people choosing to participate.`,
    },
    {
      id: 'se-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Which of the following is the best definition of civil society?',
        options: [
          { id: 'a', text: 'The part of society controlled by the government', isCorrect: false },
          { id: 'b', text: 'Organisations and groups that operate independently between the state and the individual', isCorrect: true },
          { id: 'c', text: 'The private business sector of a country', isCorrect: false },
          { id: 'd', text: 'The military and police forces of a nation', isCorrect: false },
        ],
        solution: 'Civil society refers to the organisations and groups that operate in the space between the government and the private individual. This includes charities, NGOs, trade unions, religious groups, community organisations, and many other types of associations that are neither governmental nor purely commercial.',
      },
    },
    {
      id: 'se-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        task: 'What is "social capital"?',
        options: [
          { id: 'a', text: 'The amount of money a society has in its banks', isCorrect: false },
          { id: 'b', text: 'The social media followers a person has', isCorrect: false },
          { id: 'c', text: 'The networks of trust and relationships that enable people to cooperate effectively', isCorrect: true },
          { id: 'd', text: 'The capital city where social policies are made', isCorrect: false },
        ],
        solution: 'Social capital is a concept popularised by sociologist Robert Putnam. It refers to the networks of relationships, norms of reciprocity, and trust among people in a community. High social capital means people trust each other and work together more effectively, which strengthens both communities and democracy as a whole.',
      },
    },
    {
      id: 'se-8-3-def-2',
      type: 'definition',
      title: 'Volunteering',
      content: `**Volunteering** is the act of freely giving your time and effort to help others or contribute to a cause without expecting financial payment in return. Volunteering can take many forms, from helping at a local food bank to coaching a youth football team, from mentoring at-risk young people to contributing to disaster relief efforts. Research consistently shows that volunteering benefits both the volunteer (improved mental health, new skills, social connections) and the community.`,
    },
    {
      id: 'se-8-3-text-1',
      type: 'text',
      content: `### The Volunteering Tradition

Volunteering has a long and strong tradition in English-speaking countries, though the scale and nature of it varies.

**United Kingdom:**
- Approximately 16 million people volunteer regularly
- The National Citizen Service (NCS) programme encourages young people to volunteer
- Charity shops (like Oxfam and Cancer Research) are a visible part of every high street
- The UK has over 160,000 registered charities

**United States:**
- Americans volunteer approximately 7.9 billion hours per year
- Faith-based volunteering is particularly strong
- AmeriCorps and Peace Corps provide structured volunteer opportunities
- Philanthropy is deeply embedded in American culture -- major donors like Bill Gates and Warren Buffett have pledged to give away most of their wealth

**Canada:**
- Nearly half of all Canadians volunteer
- Volunteering is strongly tied to community identity, especially in rural areas
- Many Canadian schools require volunteer hours for graduation

**Australia:**
- Over 5 million Australians volunteer regularly
- Volunteering is especially important in rural and remote communities
- The Country Fire Authority (CFA) in Victoria relies almost entirely on volunteers

### Why Volunteering Matters for Democracy

Volunteering is not just about doing good. It plays a crucial role in democracy:
- It builds **social capital** -- trust and connections between people
- It gives citizens **experience with collective action**
- It helps communities address problems **without depending on government**
- It creates a sense of **shared responsibility** and belonging`,
    },
    {
      id: 'se-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        task: 'Explain why civil society is considered important for a healthy democracy. Use at least two specific examples of civil society organisations in your answer.',
        hints: [
          'Think about what civil society does that government and the private sector do not.',
          'Consider the roles of watchdog organisations, charities, community groups, and advocacy organisations.',
        ],
        solution: 'A strong answer will explain that civil society is important for democracy because it provides space for citizens to organise, express views, hold power to account, and address community needs. Specific examples might include: 1) Amnesty International monitors human rights abuses and pressures governments to uphold international standards -- this provides accountability. 2) Local community food banks in the UK address poverty and food insecurity that government programmes do not fully cover -- this fills gaps in public services. Other examples could include trade unions (protecting workers\' rights), environmental groups (holding corporations accountable), and cultural organisations (preserving community identity).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Some critics argue that relying on volunteering and charity is problematic because it allows governments to avoid their responsibilities. Do you agree or disagree? Write a balanced discussion (150-200 words).',
        hints: [
          'Consider whether food banks are a sign of a caring society or a sign that the welfare state is failing.',
          'Think about the strengths and limitations of both government services and civil society organisations.',
        ],
        solution: 'A strong answer will present both sides. In favour of the criticism: relying on charity can let governments off the hook for providing essential services; volunteer-run services are inconsistent and depend on donations; it can create inequality as some areas have more volunteers and charities than others. Against the criticism: civil society organisations are often more flexible, innovative, and responsive than government; volunteering builds community bonds that government programmes cannot; a healthy society needs both strong public services and active civil society; government cannot and should not try to address every social need. The best answers will argue that the ideal is a partnership between government and civil society, where the state provides universal services and civil society fills gaps and innovates.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-3-text-2',
      type: 'text',
      content: `### Philanthropy and Debate

In the United States especially, philanthropy -- the giving of large sums of money to charitable causes -- plays a significant role in civil society. Billionaires like Bill Gates, MacKenzie Scott, and Warren Buffett have donated billions to education, health, and poverty reduction.

**Arguments in favour of philanthropy:**
- It funds important research and programmes
- It can respond to needs more quickly than government
- It reflects personal freedom and generosity

**Arguments against philanthropy:**
- It gives wealthy individuals too much influence over public priorities
- Tax deductions for donations reduce government revenue
- It can undermine democratic decision-making (unelected individuals deciding how to spend billions)
- It does not address the root causes of inequality

This debate is important because it raises fundamental questions about who should decide how resources are allocated in a democracy -- elected representatives or wealthy donors.`,
    },
    {
      id: 'se-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'Compare the role of volunteering in two English-speaking countries (e.g. the UK and the USA, or Canada and Australia). How are volunteering cultures similar and different?',
        hints: [
          'Think about the scale, types, and motivations for volunteering in each country.',
          'Consider how cultural, religious, and political factors shape volunteering traditions.',
        ],
        solution: 'A strong answer will identify specific similarities and differences. For example, comparing the UK and USA: Similarities -- both have millions of regular volunteers, both recognise volunteering as a civic virtue, both have structured programmes for young volunteers (NCS in the UK, AmeriCorps in the USA). Differences -- faith-based volunteering is more prominent in the USA due to the stronger role of churches; the UK has a more extensive network of charity shops; American philanthropy culture is stronger, with larger individual donations; the UK welfare state is more comprehensive, meaning charities sometimes fill different gaps. Both countries see volunteering as important for democracy and community, but cultural and institutional differences shape how it is practised.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-8-3-ex-6',
        number: '8.3.6',
        type: 'classic',
        task: 'Research one specific NGO or civil society organisation that operates in an English-speaking country. Write a short presentation (150-200 words) explaining what the organisation does, why it matters, and how ordinary people can get involved.',
        hints: [
          'Choose an organisation you find interesting -- it could be large (Amnesty International, Oxfam) or local.',
          'Focus on the impact the organisation has and how it relates to citizenship and participation.',
        ],
        solution: 'Answers will vary depending on the chosen organisation. A strong response will: 1) Clearly explain what the organisation does (its mission and activities). 2) Explain why it matters for society or democracy (e.g., filling gaps in services, holding power to account, building community). 3) Describe how ordinary people can get involved (volunteering, donating, spreading awareness). For example, for Oxfam: Oxfam is a global confederation of 21 organisations working to end poverty and injustice. In the UK, it operates over 600 charity shops staffed by volunteers. It campaigns for fair trade, climate justice, and women\'s rights. People can get involved by volunteering in shops, joining campaigns, donating, or buying Oxfam products. Oxfam matters because it addresses global inequality and gives citizens a way to act on their values.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-3-summary',
      type: 'text',
      content: `## Summary

In this chapter, you have learned:

- **Civil society** is the space between government and the individual, filled with organisations and groups
- **Volunteering** is a cornerstone of civil society in English-speaking countries
- Volunteering builds **social capital** and strengthens democracy
- **Philanthropy** plays a major role, especially in the USA, but is also debated
- The relationship between civil society and government raises important democratic questions

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Civil society | Organisations operating between state and individual |
| NGO | Organisation working independently of government |
| Volunteering | Giving time freely to help others or a cause |
| Social capital | Networks of trust that enable cooperation |
| Philanthropy | Promoting welfare through charitable giving |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Chapter 8.4: Youth Engagement
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_8_4: TextbookChapter = {
  id: 'samf-engelsk-8-4',
  courseId: 'samf-engelsk',
  chapterNumber: '8.4',
  title: 'Youth Engagement',
  description: 'How do young people participate in democracy and shape their societies? This chapter explores youth activism, student movements, and the unique challenges and opportunities facing young citizens in English-speaking countries.',
  estimatedMinutes: 22,
  competenceGoals: [
    'reflect on how young people can participate and influence society at local, national, and global levels',
    'explore and discuss what it means to be an active citizen in a democratic society',
  ],
  keyTerms: [
    { term: 'Youth activism', definition: 'Political or social action carried out by young people to bring about change, often focusing on issues that directly affect their generation' },
    { term: 'Student movement', definition: 'An organised effort by students to bring about political, social, or educational change, historically one of the most powerful forms of youth engagement' },
    { term: 'Voting age', definition: 'The minimum age at which a person is legally entitled to vote, typically 18 in most countries but debated in many' },
    { term: 'Political socialisation', definition: 'The process by which individuals develop their political attitudes, values, and behaviours, often beginning in childhood and adolescence' },
    { term: 'Intergenerational justice', definition: 'The principle that current decisions should be fair to future generations, particularly relevant in debates about climate change, national debt, and resource use' },
  ],
  content: [
    {
      id: 'se-8-4-intro',
      type: 'text',
      content: `## Young People, Big Impact

Young people are sometimes dismissed as politically apathetic -- too busy with social media and entertainment to care about the world around them. But history tells a different story. From the student movements of the 1960s to the climate strikes of the 2010s and 2020s, young people have repeatedly been at the forefront of social and political change.

In this chapter, you will learn:
- How young people have shaped politics and society throughout history
- Current forms of youth engagement in English-speaking countries
- The debate about lowering the voting age
- Challenges facing young people who want to make a difference`,
    },
    {
      id: 'se-8-4-def-1',
      type: 'definition',
      title: 'Youth Activism',
      content: `**Youth activism** refers to political or social action carried out by young people with the goal of bringing about change. This can include protests, campaigning, volunteering, creating content, organising events, and more. Youth activism often focuses on issues that disproportionately affect younger generations, such as climate change, education policy, gun violence, and digital rights. While the methods may differ from traditional political participation, youth activism has been a driving force for change throughout history.`,
    },
    {
      id: 'se-8-4-example-1',
      type: 'example',
      title: 'Youth Movements That Changed History',
      problem: 'What are some examples of youth movements that have had a significant impact on society?',
      solution: `**The Greensboro Sit-ins (USA, 1960):**
Four Black students from North Carolina A&T State University sat down at a whites-only lunch counter at Woolworth's and refused to leave when denied service. Their action sparked a wave of similar sit-ins across the South and became a defining moment in the Civil Rights Movement.

**Anti-Apartheid Student Movements (South Africa, 1976):**
The Soweto Uprising began when students protested against being forced to learn in Afrikaans. Police opened fire, killing hundreds. The event galvanised international opposition to apartheid and eventually contributed to its end.

**March for Our Lives (USA, 2018):**
After the school shooting at Marjory Stoneman Douglas High School in Parkland, Florida, surviving students organised one of the largest youth-led protests in American history, demanding stricter gun control laws. The movement registered hundreds of thousands of new young voters.

**Fridays for Future (Global, 2018-present):**
Started by Swedish teenager Greta Thunberg, who began striking from school every Friday to demand climate action. The movement spread worldwide, with millions of young people participating in school strikes for climate.

These movements show that young people can be powerful agents of change, even when they lack formal political power such as the right to vote.`,
    },
    {
      id: 'se-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'What event sparked the March for Our Lives movement in the United States?',
        options: [
          { id: 'a', text: 'A presidential election', isCorrect: false },
          { id: 'b', text: 'A school shooting at Marjory Stoneman Douglas High School', isCorrect: true },
          { id: 'c', text: 'A climate change conference', isCorrect: false },
          { id: 'd', text: 'A university tuition fee increase', isCorrect: false },
        ],
        solution: 'The March for Our Lives movement began after the shooting at Marjory Stoneman Douglas High School in Parkland, Florida, on 14 February 2018, in which 17 people were killed. Surviving students, including Emma Gonzalez and David Hogg, organised the March for Our Lives rally in Washington, D.C., demanding stricter gun control legislation. The march drew hundreds of thousands of participants and inspired similar events worldwide.',
      },
    },
    {
      id: 'se-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-8-4-ex-2',
        number: '8.4.2',
        type: 'multiple-choice',
        task: 'What does "intergenerational justice" mean?',
        options: [
          { id: 'a', text: 'The idea that older people should have more political power than younger people', isCorrect: false },
          { id: 'b', text: 'A legal principle requiring equal treatment of all age groups in court', isCorrect: false },
          { id: 'c', text: 'The principle that current decisions should be fair to future generations', isCorrect: true },
          { id: 'd', text: 'A system where each generation writes its own constitution', isCorrect: false },
        ],
        solution: 'Intergenerational justice is the principle that decisions made today should consider their impact on future generations. This is particularly relevant in debates about climate change (future generations will bear the consequences of today\'s emissions), national debt (future taxpayers will pay for today\'s spending), and resource use (depleting natural resources leaves less for future generations). It is a central concept in youth activism, as young people argue that they will inherit the consequences of decisions they had no say in.',
      },
    },
    {
      id: 'se-8-4-def-2',
      type: 'definition',
      title: 'Political Socialisation',
      content: `**Political socialisation** is the process through which individuals develop their political attitudes, values, and behaviours. This process begins in childhood and continues throughout life. Key agents of political socialisation include family, school, peer groups, media, and personal experiences. For young people, school and social media are particularly important in shaping their understanding of politics and their willingness to participate. Understanding political socialisation helps explain why some young people become active citizens while others remain disengaged.`,
    },
    {
      id: 'se-8-4-text-1',
      type: 'text',
      content: `### The Voting Age Debate

One of the most discussed questions about youth participation is whether the voting age should be lowered from 18 to 16.

**Arguments for lowering the voting age to 16:**
- 16-year-olds can work, pay taxes, and drive in many countries -- they should have a say in how their taxes are spent
- Early voting habits tend to stick -- if young people vote at 16, they are more likely to continue voting throughout their lives
- Scotland allowed 16-year-olds to vote in the 2014 independence referendum, and turnout among 16-17 year olds was 75%
- Young people are affected by political decisions (education, climate, housing) and deserve a voice
- It would encourage schools to strengthen civic education

**Arguments against lowering the voting age:**
- The brain is still developing at 16, particularly the parts responsible for long-term decision-making
- 16-year-olds may be more easily influenced by parents, teachers, or social media
- Most 16-year-olds have limited life experience
- If 16, why not 14 or 12? The line has to be drawn somewhere
- Low turnout among 18-24 year olds suggests that younger voters may also not use the right

**Current situation:**
- Most countries set the voting age at 18
- Scotland and Wales allow 16-year-olds to vote in local and devolved elections
- Austria allows voting at 16 in all elections
- Some US cities have considered lowering the voting age for local elections`,
    },
    {
      id: 'se-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        task: 'Do you think the voting age should be lowered to 16? Write an argumentative text (150-200 words) presenting your view. Support your argument with at least two specific examples or pieces of evidence.',
        hints: [
          'Consider the experience from Scotland, where 16-year-olds voted in the 2014 independence referendum.',
          'Think about what responsibilities 16-year-olds already have and whether voting should be one of them.',
        ],
        solution: 'A strong answer will present a clear position supported by evidence. For lowering: Scotland\'s experience showed high turnout (75%) among 16-17 year olds; 16-year-olds already pay taxes and can join the military in some countries; early voting creates lifelong habits; young people are directly affected by decisions on climate, education, and housing. Against lowering: brain development research shows the prefrontal cortex is not fully developed until age 25; 18-24 year olds already have low turnout; there is a risk of undue influence from parents or teachers; limited life experience may lead to less informed voting. The best answers will acknowledge counterarguments and explain why their position is stronger despite those objections.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Choose one youth movement or activist (e.g. Greta Thunberg, Malala Yousafzai, the Parkland students, or another) and analyse what made their activism effective. What methods did they use, and what impact did they have?',
        hints: [
          'Think about how they communicated their message, who their audience was, and what strategies they used.',
          'Consider both the direct outcomes (new laws, policies) and indirect outcomes (changed attitudes, raised awareness).',
        ],
        solution: 'A strong answer will analyse a specific youth activist or movement in depth. For example, Greta Thunberg: Methods -- began with a simple, individual act (school strike); used social media to spread the message globally; spoke at major events (UN Climate Summit, Davos); remained consistent and authentic in her messaging; refused to fly, demonstrating personal commitment. Impact -- inspired millions of young people worldwide to participate in climate strikes; raised the profile of climate change in political discourse; contributed to the "climate emergency" framing adopted by many governments; showed that one young person can start a global movement. The analysis should consider what made these methods effective and what limitations the movement faced.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-4-text-2',
      type: 'text',
      content: `### How Young People Participate Today

Young people today participate in ways that are different from previous generations, but not necessarily less engaged.

**Traditional participation:**
- Joining political parties (though membership is declining among young people)
- Voting in elections (turnout tends to be lower for younger age groups)
- Writing letters to representatives
- Joining student councils and youth parliaments

**New forms of participation:**
- Social media activism and awareness campaigns
- Creating and sharing content about political issues
- Online fundraising and crowdfunding for causes
- Digital petitions and email campaigns
- Consumer activism (boycotting or supporting brands based on values)

**Barriers to youth participation:**
- Feeling that politicians do not listen to or represent young people
- Lack of civic education in schools
- Complexity of political systems
- Disillusionment with traditional politics
- Economic pressures (housing costs, student debt, job insecurity)

**Opportunities:**
- Technology makes it easier than ever to organise and communicate
- Global connectivity allows young people to learn from and support movements worldwide
- Growing recognition that young voices matter
- Youth-led organisations and movements are gaining credibility`,
    },
    {
      id: 'se-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Interview two or three of your classmates about how they engage with political or social issues. Do they vote (if old enough)? Do they follow the news? Do they participate in any form of activism? Write a short report (150-200 words) summarising your findings and reflecting on what they reveal about youth engagement.',
        hints: [
          'Ask open-ended questions to get detailed responses.',
          'Think about whether your findings confirm or challenge the idea that young people are politically apathetic.',
        ],
        solution: 'Answers will vary, but a strong response will: 1) Summarise the findings from interviews in a clear, structured way. 2) Identify patterns (e.g., most follow news through social media but few attend organised political events). 3) Reflect on what the findings reveal -- perhaps that young people care about issues but feel disconnected from formal politics, or that they participate in new ways that are not always recognised as "political." The best answers will connect their findings to the broader themes of the chapter, such as the gap between formal and informal participation, the role of social media, and the barriers young people face.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        task: 'Imagine you want to start a youth campaign about an issue you care about (e.g. mental health, climate, education, inequality). Create a plan that includes: the issue, your target audience, three specific actions you would take, and how you would measure success.',
        hints: [
          'Be specific and realistic -- think about what you could actually do with limited resources.',
          'Consider using both online and offline methods to reach your audience.',
        ],
        solution: 'A strong answer will present a concrete and realistic plan. For example, a mental health awareness campaign at school: Issue -- stigma around mental health prevents students from seeking help. Target audience -- students aged 15-19 at the school. Actions: 1) Organise a "mental health week" with guest speakers, workshops, and peer support training. 2) Create an Instagram page sharing anonymous stories, resources, and tips. 3) Petition the school administration to hire a dedicated school counsellor. Success measures: number of students attending events, social media engagement, whether the petition leads to action, feedback surveys. The best answers will demonstrate understanding of how campaigns work and how youth activism can create real change.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-4-summary',
      type: 'text',
      content: `## Summary

In this chapter, you have learned:

- **Youth activism** has a long history of driving social and political change
- Movements like the **Civil Rights sit-ins**, **March for Our Lives**, and **Fridays for Future** show the power of young people
- The **voting age debate** raises important questions about rights, responsibility, and representation
- Young people participate in new ways through **digital activism** and **consumer choices**
- Barriers to youth engagement include disillusionment, lack of civic education, and economic pressures

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Youth activism | Political or social action by young people |
| Student movement | Organised student efforts for change |
| Voting age | Minimum age for voting -- debated in many countries |
| Political socialisation | How people develop political attitudes and values |
| Intergenerational justice | Fairness of current decisions to future generations |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Chapter 8.5: Global Citizenship
// ============================================================================

export const CHAPTER_SAMF_ENGELSK_8_5: TextbookChapter = {
  id: 'samf-engelsk-8-5',
  courseId: 'samf-engelsk',
  chapterNumber: '8.5',
  title: 'Global Citizenship',
  description: 'What does it mean to be a citizen of the world? This chapter explores the concept of global citizenship, how globalisation affects identity and belonging, and the responsibilities that come with being connected to a wider world.',
  estimatedMinutes: 24,
  competenceGoals: [
    'discuss how globalisation affects citizenship, identity, and belonging',
    'reflect on how young people can participate and influence society at local, national, and global levels',
  ],
  keyTerms: [
    { term: 'Global citizenship', definition: 'The idea that all people belong to a single global community and have responsibilities toward one another that transcend national borders' },
    { term: 'Globalisation', definition: 'The process of increasing interconnectedness between countries through trade, communication, travel, and cultural exchange' },
    { term: 'Cosmopolitanism', definition: 'A philosophy that sees all human beings as members of a single community, regardless of nationality, and emphasises shared moral obligations' },
    { term: 'Sustainable Development Goals (SDGs)', definition: 'A set of 17 goals adopted by the United Nations in 2015, designed to address global challenges including poverty, inequality, climate change, and injustice by 2030' },
    { term: 'Cultural identity', definition: 'The sense of belonging to a particular cultural group, shaped by factors such as language, religion, traditions, and shared history' },
  ],
  content: [
    {
      id: 'se-8-5-intro',
      type: 'text',
      content: `## Citizens of the World

In an increasingly connected world, the question of what it means to be a citizen has expanded beyond national borders. Climate change does not respect passports. Pandemics spread across continents. Information travels the globe in seconds. In this context, many people have begun to think of themselves not just as citizens of a particular country, but as citizens of the world.

In this chapter, you will learn:
- What global citizenship means and how it relates to national citizenship
- How globalisation has changed our understanding of identity and belonging
- The role of international organisations and frameworks like the UN Sustainable Development Goals
- Debates about the benefits and limitations of global citizenship`,
    },
    {
      id: 'se-8-5-def-1',
      type: 'definition',
      title: 'Global Citizenship',
      content: `**Global citizenship** is the idea that all people belong to a single global community and have responsibilities toward one another that go beyond national borders. A global citizen is someone who is aware of the wider world, respects and values diversity, understands how the world works economically and politically, takes responsibility for their actions, and is willing to act to make the world a more equitable and sustainable place. Global citizenship does not replace national citizenship -- rather, it adds another layer of identity and responsibility.`,
    },
    {
      id: 'se-8-5-example-1',
      type: 'example',
      title: 'Global Citizenship in Practice',
      problem: 'What does global citizenship look like in everyday life?',
      solution: `**A student in London:**
- Buys Fairtrade coffee and chocolate, knowing that their purchasing choices affect farmers in developing countries
- Follows international news and understands how events in one part of the world affect others
- Participates in a school exchange programme with a school in Kenya
- Reduces plastic use to minimise their contribution to ocean pollution

**An engineer in Canada:**
- Works with Medecins Sans Frontieres (Doctors Without Borders) to build clean water systems in conflict zones
- Advocates for her company to adopt sustainable supply chain practices
- Mentors young engineers from developing countries through an online platform

**A teenager in Australia:**
- Participates in Fridays for Future climate strikes, recognising that climate change is a global issue
- Learns about Indigenous Australian perspectives on land and belonging
- Fundraises for UNICEF's education programmes
- Engages in online discussions with young people from other countries about shared challenges

Global citizenship is not about being wealthy or well-travelled. It is about recognising that your actions have consequences beyond your immediate community and being willing to act accordingly.`,
    },
    {
      id: 'se-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'se-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Which statement best describes global citizenship?',
        options: [
          { id: 'a', text: 'Having a passport that allows you to travel to any country in the world', isCorrect: false },
          { id: 'b', text: 'The idea that all people belong to a single community with shared responsibilities that cross national borders', isCorrect: true },
          { id: 'c', text: 'Being a citizen of a country that is a member of the United Nations', isCorrect: false },
          { id: 'd', text: 'Living in a country other than the one you were born in', isCorrect: false },
        ],
        solution: 'Global citizenship is an ethical and philosophical concept, not a legal status. It means recognising that we are all part of a wider global community and that we have responsibilities that extend beyond our national borders. It is about awareness, empathy, and a willingness to act for the common good of all people, regardless of nationality.',
      },
    },
    {
      id: 'se-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'se-8-5-ex-2',
        number: '8.5.2',
        type: 'multiple-choice',
        task: 'What are the UN Sustainable Development Goals (SDGs)?',
        options: [
          { id: 'a', text: 'A set of rules that all UN member countries must follow', isCorrect: false },
          { id: 'b', text: 'A trade agreement between developed and developing nations', isCorrect: false },
          { id: 'c', text: 'A set of 17 goals to address global challenges like poverty, inequality, and climate change by 2030', isCorrect: true },
          { id: 'd', text: 'An environmental treaty focused exclusively on reducing carbon emissions', isCorrect: false },
        ],
        solution: 'The Sustainable Development Goals (SDGs) were adopted by all 193 UN member states in 2015 as part of the 2030 Agenda for Sustainable Development. They include 17 goals covering a wide range of issues: no poverty, zero hunger, good health, quality education, gender equality, clean water, affordable energy, decent work, reduced inequalities, sustainable cities, responsible consumption, climate action, life below water, life on land, peace and justice, partnerships, and strong institutions. They represent a shared global vision for a better world.',
      },
    },
    {
      id: 'se-8-5-def-2',
      type: 'definition',
      title: 'Cosmopolitanism',
      content: `**Cosmopolitanism** is a philosophical tradition with roots in ancient Greek thought (the Stoics believed that all people are citizens of the cosmos). In modern usage, it refers to the idea that all human beings belong to a single moral community, regardless of nationality, ethnicity, or religion. Cosmopolitans argue that we have moral obligations to people beyond our own borders -- to strangers as well as neighbours. This perspective underpins much of the thinking behind global citizenship, international human rights, and humanitarian aid.`,
    },
    {
      id: 'se-8-5-text-1',
      type: 'text',
      content: `### Globalisation and Identity

Globalisation has fundamentally changed how we think about identity and belonging. In the past, most people's identity was closely tied to their local community and nation. Today, many people feel multiple, overlapping identities.

**How globalisation affects identity:**
- **Cultural exchange:** Music, food, fashion, and ideas cross borders more easily than ever. A Norwegian teenager might listen to American hip-hop, eat Japanese sushi, and watch Korean TV series.
- **Migration:** Over 280 million people live outside their country of birth. Many hold dual citizenship or feel connected to multiple countries.
- **Digital connectivity:** Social media connects people across the world, creating communities based on shared interests rather than shared geography.
- **Education:** Exchange programmes, international schools, and online learning expose young people to different cultures and perspectives.

**Tensions between global and national identity:**
- Some people embrace multiple identities and see themselves as both national and global citizens
- Others feel that globalisation threatens national culture and values
- Debates about immigration often centre on questions of identity and belonging
- The rise of nationalism in many countries can be seen as a reaction against globalisation

**The English language and globalisation:**
English has become the global lingua franca, spoken by an estimated 1.5 billion people worldwide. This gives English-speaking countries cultural influence, but also raises questions about linguistic diversity and cultural imperialism. Is the spread of English a form of connection or dominance?`,
    },
    {
      id: 'se-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'se-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        task: 'How has globalisation affected your own sense of identity? Write a personal reflection (150-200 words) discussing how global culture, media, technology, or travel have influenced who you are and how you see yourself.',
        hints: [
          'Think about the music you listen to, the food you eat, the content you consume online, and the people you interact with.',
          'Consider whether you feel more connected to your local community, your country, or the wider world -- or all three.',
        ],
        solution: 'Answers will vary, but a strong response will: 1) Identify specific ways globalisation has influenced the student\'s identity (e.g., consuming media from other cultures, having friends from different countries, being influenced by global trends). 2) Reflect honestly on how they feel about these influences -- positive, negative, or mixed. 3) Connect their personal experience to the broader themes of the chapter. For example, a student might write about how watching American and Korean content has shaped their values and aspirations, while still feeling strongly connected to Norwegian culture and identity. The best responses will demonstrate self-awareness and the ability to see their own experience in a wider context.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'se-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Some critics argue that "global citizenship" is an empty concept because there is no global government, no global passport, and no global set of enforceable rights. Others argue it is an essential framework for addressing shared challenges. Discuss both views and present your own conclusion.',
        hints: [
          'Consider what citizenship normally includes (legal rights, government, belonging) and whether global citizenship meets those criteria.',
          'Think about whether shared challenges like climate change require a global perspective regardless of formal structures.',
        ],
        solution: 'A strong answer will engage with both perspectives. Critics\' view: citizenship traditionally involves legal status, rights, duties, and government -- none of which exist at the global level; "global citizen" can be an elitist label used by privileged people who can afford to travel and think globally; without enforcement, global responsibilities are merely aspirational; it can undermine national solidarity and local commitments. Supporters\' view: shared challenges like climate change, pandemics, and migration require global cooperation; human rights frameworks already establish universal principles; the interconnected economy means our choices affect people worldwide; young people increasingly identify as global citizens. The best answers will present a nuanced conclusion -- perhaps arguing that global citizenship is valuable as an ethical framework even if it lacks legal structure, or that it needs to be grounded in local action to be meaningful.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-5-text-2',
      type: 'text',
      content: `### Acting Globally, Acting Locally

The phrase "think globally, act locally" captures an important idea about global citizenship: you do not need to travel the world to be a global citizen. Many of the most meaningful actions happen in your own community.

**Global issues with local connections:**
- **Climate change:** Reducing your carbon footprint, supporting renewable energy, and advocating for local environmental policies all contribute to a global effort
- **Inequality:** Volunteering at a local food bank or supporting fair trade products addresses global supply chain injustices
- **Migration and refugees:** Welcoming newcomers in your school or community is a form of global solidarity
- **Education:** Learning about other cultures and perspectives in school prepares you to be a global citizen

**International frameworks:**
- **The Universal Declaration of Human Rights (1948):** Establishes rights that belong to all people, everywhere
- **The UN Sustainable Development Goals (2015):** Provide a shared agenda for tackling global challenges
- **The Paris Agreement (2015):** Brings nations together to fight climate change
- **UNESCO:** Works to build peace through education, science, and culture

**The role of English-speaking countries:**
The USA, UK, Canada, Australia, and other English-speaking nations play significant roles in global governance through the UN, NATO, the Commonwealth, and other institutions. Their policies on trade, immigration, climate, and foreign aid have global consequences -- making active, informed citizenship in these countries a matter of global importance.`,
    },
    {
      id: 'se-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'se-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Choose one of the UN Sustainable Development Goals (SDGs) and explain how it connects to the concept of global citizenship. What can individuals do to contribute to this goal, both locally and globally?',
        hints: [
          'The 17 SDGs include: No Poverty, Zero Hunger, Good Health, Quality Education, Gender Equality, Clean Water, Affordable Energy, Decent Work, Reduced Inequalities, Sustainable Cities, Responsible Consumption, Climate Action, Life Below Water, Life on Land, Peace and Justice, Partnerships, and Strong Institutions.',
          'Think about both personal actions and collective efforts.',
        ],
        solution: 'A strong answer will choose a specific SDG and explain its connection to global citizenship clearly. For example, SDG 13 (Climate Action): Connection to global citizenship -- climate change affects everyone on the planet regardless of nationality; it requires global cooperation; current actions affect future generations. Individual contributions locally: reducing energy use, choosing public transport, supporting local renewable energy projects, voting for climate-conscious politicians. Individual contributions globally: supporting international climate organisations, raising awareness, making ethical consumer choices that reduce emissions in supply chains, participating in global campaigns like Fridays for Future. The best answers will demonstrate understanding of how local and global levels are connected.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'se-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        task: 'Write a short essay (200-250 words) reflecting on the following question: "Is it possible to be both a proud national citizen and a responsible global citizen?" Use examples from English-speaking countries to support your argument.',
        hints: [
          'Think about whether national pride and global responsibility are in conflict or can coexist.',
          'Consider examples where national identity has motivated global action (e.g., American ideals of freedom inspiring human rights advocacy).',
        ],
        solution: 'A strong essay will argue that national and global citizenship can coexist, while acknowledging tensions. Arguments for compatibility: many national values (freedom, equality, justice) are also universal values; countries like Canada pride themselves on multiculturalism, which embraces both national and global identity; the UK\'s NHS was inspired by national solidarity but its model has influenced healthcare systems globally; American civil society organisations operate worldwide. Arguments acknowledging tension: nationalism can lead to isolationism ("America First"); prioritising national interests may conflict with global responsibilities (e.g., climate pledges vs. economic growth); immigration debates often pit national identity against global solidarity. The best essays will conclude that being a proud national citizen and a responsible global citizen are not only compatible but mutually reinforcing -- that the best of any nation\'s values should extend outward to the world.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'se-8-5-summary',
      type: 'text',
      content: `## Summary

In this chapter, you have learned:

- **Global citizenship** means recognising our shared humanity and responsibilities beyond national borders
- **Globalisation** has transformed how we think about identity, belonging, and community
- **Cosmopolitanism** provides the philosophical foundation for global citizenship
- The **UN Sustainable Development Goals** offer a framework for global cooperation
- "Think globally, act locally" -- global citizenship starts with actions in your own community
- There are valid debates about the limits and possibilities of global citizenship

### Key Concepts
| Concept | Explanation |
|---------|-------------|
| Global citizenship | Belonging to a single global community with shared responsibilities |
| Globalisation | Increasing interconnectedness between countries |
| Cosmopolitanism | The philosophy that all humans belong to one moral community |
| SDGs | 17 UN goals addressing global challenges by 2030 |
| Cultural identity | Sense of belonging shaped by language, traditions, and history |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Export
// ============================================================================

export const SAMF_ENGELSK_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMF_ENGELSK_8_1,
  CHAPTER_SAMF_ENGELSK_8_2,
  CHAPTER_SAMF_ENGELSK_8_3,
  CHAPTER_SAMF_ENGELSK_8_4,
  CHAPTER_SAMF_ENGELSK_8_5,
];
